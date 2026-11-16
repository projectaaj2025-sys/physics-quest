/* ============================================================
   PQ BATTLE MQTT — комната «Битвы экипажей» через публичный
   MQTT-брокер по защищённому WebSocket (wss).

   Зачем: WebRTC/PeerJS не проходит через школьные сети и симметричные
   NAT — телефоны из других сетей не могут подключиться. MQTT работает
   как обычный wss-трафик (порт 8084/8081/8884), поэтому доска и
   телефоны соединяются из любых сетей: Wi-Fi класса, мобильный интернет,
   домашний интернет — до 40+ устройств.

   Топики комнаты CODE:
     pq/b/<CODE>/up        — телефоны → доска (join / answer / leave)
     pq/b/<CODE>/down      — доска → всем (lobby / start / q / reveal / end)
     pq/b/<CODE>/to/<id>   — доска → конкретному игроку (welcome / end)

   Протокол MQTT 3.1.1, QoS 0: ни аккаунтов, ни ключей не нужно.
   Если брокер недоступен, battle-room.js откатывается на PeerJS,
   затем на локальную комнату в одном браузере.
   ============================================================ */
(function () {
    "use strict";

    /* Первым идёт брокер на 443-м порту: в школьных и мобильных сетях
       обычно разрешён только он, а 8084/8081/8884 часто закрыты. */
    const BROKERS = [
        "wss://mqtt.eclipseprojects.io/mqtt",
        "wss://broker.emqx.io:8084/mqtt",
        "wss://test.mosquitto.org:8081/mqtt",
        "wss://broker.hivemq.com:8884/mqtt"
    ];

    const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const CONNECT_TIMEOUT = 7000;   // на попытку
    const KEEPALIVE = 45;

    const encoder = typeof TextEncoder === "function" ? new TextEncoder() : null;
    const decoder = typeof TextDecoder === "function" ? new TextDecoder() : null;

    function rand(n) {
        let out = "";
        for (let i = 0; i < n; i += 1) out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        return out;
    }

    function available() {
        if (typeof window !== "undefined" && window.PQ_BATTLE_NO_MQTT) return false;
        return !!(typeof window !== "undefined" && (window.WebSocket || WebSocket) && encoder && decoder);
    }

    /* ---------- MQTT 3.1.1: сборка пакетов ---------- */

    function utf8(s) {
        return encoder.encode(String(s));
    }

    function text(bytes) {
        return decoder.decode(bytes);
    }

    function bytesField(s) {
        const body = utf8(s);
        return [body.length >> 8, body.length & 255].concat(Array.from(body));
    }

    function varLen(n) {
        const out = [];
        let value = n;
        do {
            let byte = value % 128;
            value = Math.floor(value / 128);
            if (value > 0) byte |= 128;
            out.push(byte);
        } while (value > 0);
        return out;
    }

    function packet(header, body) {
        return new Uint8Array([header].concat(varLen(body.length), body));
    }

    function encodeConnect(clientId) {
        const body = bytesField("MQTT")
            .concat([4, 0x02, (KEEPALIVE >> 8) & 255, KEEPALIVE & 255])
            .concat(bytesField(clientId));
        return packet(0x10, body);
    }

    function encodeSubscribe(packetId, topics) {
        const body = [(packetId >> 8) & 255, packetId & 255];
        topics.forEach((topic) => {
            body.push(...bytesField(topic));
            body.push(0); // QoS 0
        });
        return packet(0x82, body);
    }

    function encodePublish(topic, payload) {
        return packet(0x30, bytesField(topic).concat(Array.from(utf8(payload))));
    }

    /* ---------- MQTT 3.1.1: разбор входящих ---------- */

    function parseFrame(bytes) {
        if (!bytes || bytes.length < 2) return null;
        const type = bytes[0] >> 4;
        let i = 1;
        let mult = 1;
        let len = 0;
        let byte = 0;
        do {
            if (i >= bytes.length) return null;
            byte = bytes[i];
            i += 1;
            len += (byte & 127) * mult;
            mult *= 128;
        } while (byte & 128);
        const body = bytes.slice(i, i + len);
        if (type === 3) {
            const tlen = (body[0] << 8) | body[1];
            const topic = text(body.slice(2, 2 + tlen));
            const payload = text(body.slice(2 + tlen));
            return { type: "publish", topic, payload };
        }
        if (type === 2) return { type: "connack", code: body[1] };
        if (type === 9) return { type: "suback" };
        if (type === 13) return { type: "pingresp" };
        return { type: "other" };
    }

    /* ---------- клиент брокера с переподключением ---------- */

    function Client(clientId, handlers) {
        this.clientId = clientId;
        this.handlers = handlers || {};
        this.ws = null;
        this.connected = false;
        this.closed = false;
        this.brokerIndex = 0;
        this.attempt = 0;
        this.subs = [];
        this.queue = [];
        this.pingTimer = null;
        this.retryTimer = null;
        this.buffer = new Uint8Array(0);
        this.packetId = 1;
    }

    Client.prototype.currentUrl = function () {
        return BROKERS[this.brokerIndex % BROKERS.length];
    };

    Client.prototype.connect = function () {
        if (this.closed) return;
        const WS = (typeof window !== "undefined" && window.WebSocket) || WebSocket;
        let ws;
        try {
            try {
                ws = new WS(this.currentUrl(), "mqtt");
            } catch (_) {
                ws = new WS(this.currentUrl());
            }
        } catch (_) {
            this.nextBroker();
            return;
        }
        ws.binaryType = "arraybuffer";
        this.ws = ws;
        let opened = false;
        const failTimer = setTimeout(() => {
            if (opened) return;
            try { ws.close(); } catch (_) {}
        }, CONNECT_TIMEOUT);

        ws.onopen = () => {
            try { ws.send(encodeConnect(this.clientId)); } catch (_) {}
        };
        ws.onerror = () => {};
        ws.onclose = () => {
            clearTimeout(failTimer);
            this.stopPing();
            const was = this.connected;
            this.connected = false;
            if (this.closed) return;
            if (!opened) this.nextBroker();
            else this.retryLater(was ? 800 : 2500);
        };
        ws.onmessage = (ev) => {
            let chunk = ev.data;
            if (typeof chunk === "string") {
                chunk = utf8(chunk);
            } else if (typeof Blob !== "undefined" && chunk instanceof Blob) {
                // некоторые браузеры присылают Blob, даже если binaryType = arraybuffer
                const self = this;
                chunk.arrayBuffer().then((buf) => self.onChunk(new Uint8Array(buf))).catch(() => {});
                return;
            } else {
                chunk = new Uint8Array(chunk);
            }
            this.onChunk(chunk);
        };

        this._takeFrame = takeFrame;

        this._markOpened = () => {
            if (opened) return;
            opened = true;
            clearTimeout(failTimer);
        };
        this._failTimer = failTimer;

        function takeFrame(buf) {
            if (buf.length < 2) return null;
            let i = 1;
            let mult = 1;
            let len = 0;
            let b = 0;
            do {
                if (i >= buf.length) return null;
                b = buf[i];
                i += 1;
                len += (b & 127) * mult;
                mult *= 128;
            } while (b & 128);
            const total = i + len;
            if (buf.length < total) return null;
            return { bytes: buf.slice(0, total), consumed: total };
        }
    };

    Client.prototype.onChunk = function (chunk) {
        const merged = new Uint8Array(this.buffer.length + chunk.length);
        merged.set(this.buffer, 0);
        merged.set(chunk, this.buffer.length);
        this.buffer = merged;
        for (;;) {
            const frame = this._takeFrame(this.buffer);
            if (!frame) break;
            this.buffer = this.buffer.slice(frame.consumed);
            this.handle(frame.bytes);
        }
    };

    Client.prototype.nextBroker = function () {
        if (this.closed) return;
        this.brokerIndex += 1;
        this.retryLater(600);
    };

    Client.prototype.retryLater = function (ms) {
        if (this.closed) return;
        clearTimeout(this.retryTimer);
        this.retryTimer = setTimeout(() => {
            if (!this.closed) this.connect();
        }, ms);
    };

    Client.prototype.handle = function (raw) {
        const frame = parseFrame(raw);
        if (!frame) return;
        if (frame.type === "connack") {
            this._markOpened();
            this.connected = true;
            this.attempt = 0;
            this.subs.forEach((topic) => this.sendRaw(encodeSubscribe(this.packetId++, [topic])));
            const queued = this.queue.splice(0);
            queued.forEach((item) => this.sendRaw(encodePublish(item.topic, item.payload)));
            this.startPing();
            if (this.handlers.onOpen) this.handlers.onOpen();
            return;
        }
        if (frame.type === "publish") {
            if (this.handlers.onMessage) this.handlers.onMessage(frame.topic, frame.payload);
        }
    };

    Client.prototype.sendRaw = function (data) {
        if (!this.connected || !this.ws || this.ws.readyState !== 1) return;
        try { this.ws.send(data); } catch (_) {}
    };

    Client.prototype.subscribe = function (topic) {
        if (this.subs.indexOf(topic) === -1) this.subs.push(topic);
        if (this.connected) this.sendRaw(encodeSubscribe(this.packetId++, [topic]));
    };

    Client.prototype.publish = function (topic, payload) {
        if (this.connected) this.sendRaw(encodePublish(topic, payload));
        else this.queue.push({ topic, payload });
    };

    Client.prototype.startPing = function () {
        this.stopPing();
        const self = this;
        this.pingTimer = setInterval(() => {
            if (!self.connected) return;
            self.sendRaw(new Uint8Array([0xc0, 0x00]));
        }, 25000);
    };

    Client.prototype.stopPing = function () {
        if (this.pingTimer) { clearInterval(this.pingTimer); this.pingTimer = null; }
    };

    Client.prototype.close = function () {
        this.closed = true;
        this.connected = false;
        this.stopPing();
        clearTimeout(this.retryTimer);
        clearTimeout(this._failTimer);
        this.queue = [];
        try { if (this.ws) { this.ws.send(new Uint8Array([0xe0, 0x00])); this.ws.close(); } } catch (_) {}
    };

    /* ---------- комната доски ---------- */

    function create(code, cb) {
        cb = cb || {};
        const base = "pq/b/" + code;
        const players = new Map();     // id -> { name, session }
        const sessions = new Map();    // session -> id
        const id = "pqh-" + code + "-" + rand(4);
        let resolveReady = null;
        let rejectReady = null;
        let readySettled = false;

        const ready = new Promise((resolve, reject) => {
            resolveReady = resolve;
            rejectReady = reject;
        });
        ready.catch(() => {});

        function settle(okValue) {
            if (readySettled) return;
            readySettled = true;
            if (okValue) resolveReady(true);
            else rejectReady(new Error("mqtt-unavailable"));
        }

        function dispatch(msg) {
            if (!msg || !msg.t) return;
            if (msg.t === "join" && msg.id) {
                const pid = String(msg.id);
                const session = String(msg.session || "");
                const name = String(msg.name || "").slice(0, 24);
                const seen = players.get(pid);
                if (seen) {
                    if (session) seen.session = session;
                    room.send(pid, { t: "welcome", n: players.size });
                    return;
                }
                if (session && sessions.has(session) && sessions.get(session) !== pid) {
                    const oldId = sessions.get(session);
                    players.delete(oldId);
                    sessions.delete(session);
                    if (cb.onLeave) cb.onLeave(oldId);
                }
                players.set(pid, { name, session });
                if (session) sessions.set(session, pid);
                if (cb.onJoin) cb.onJoin({ id: pid, name, session });
                room.send(pid, { t: "welcome", n: players.size });
            } else if (msg.t === "answer" && msg.id) {
                if (cb.onAnswer) cb.onAnswer(msg.id, Number(msg.opt));
            } else if (msg.t === "leave" && msg.id) {
                const gone = players.get(msg.id);
                if (gone && gone.session && sessions.get(gone.session) === msg.id) sessions.delete(gone.session);
                players.delete(msg.id);
                if (cb.onLeave) cb.onLeave(msg.id);
            }
        }

        const client = new Client(id, {
            onOpen() {
                settle(true);
                if (cb.onStatus) cb.onStatus("online");
            },
            onMessage(topic, payload) {
                if (topic !== base + "/up") return;
                let msg = null;
                try { msg = JSON.parse(payload); } catch (_) { return; }
                dispatch(msg);
            }
        });

        const room = {
            mode: "mqtt",
            code,
            ready,
            get size() { return players.size; },
            broadcast(msg) { client.publish(base + "/down", JSON.stringify(msg)); },
            send(pid, msg) { client.publish(base + "/to/" + pid, JSON.stringify(msg)); },
            close() { settle(false); client.close(); }
        };

        client.subscribe(base + "/up");
        client.connect();

        // если ни один брокер не ответил — отдаём управление резервным транспортам
        setTimeout(() => settle(false), 9000);

        return room;
    }

    /* ---------- комната телефона ---------- */

    function join(code, name, cb, opts) {
        cb = cb || {};
        const base = "pq/b/" + code;
        const id = (opts && opts.id) || ("pqp-" + rand(8));
        const session = (opts && opts.session) || "";
        let resolveReady = null;
        let rejectReady = null;
        let readySettled = false;

        const ready = new Promise((resolve, reject) => {
            resolveReady = resolve;
            rejectReady = reject;
        });
        ready.catch(() => {});

        function settle(okValue) {
            if (readySettled) return;
            readySettled = true;
            if (okValue) resolveReady(true);
            else rejectReady(new Error("mqtt-unavailable"));
        }

        function announce() {
            client.publish(base + "/up", JSON.stringify({ t: "join", id, name, session }));
        }

        const client = new Client(id, {
            onOpen() {
                settle(true);
                announce();
                if (cb.onMode) cb.onMode("mqtt");
                if (cb.onStatus) cb.onStatus("online");
            },
            onMessage(topic, payload) {
                if (topic !== base + "/down" && topic !== base + "/to/" + id) return;
                let msg = null;
                try { msg = JSON.parse(payload); } catch (_) { return; }
                if (cb.onData) cb.onData(msg);
            }
        });

        client.subscribe(base + "/down");
        client.subscribe(base + "/to/" + id);
        client.connect();

        const api = {
            mode: "mqtt",
            id,
            ready,
            send(msg) {
                if (!msg) return;
                client.publish(base + "/up", JSON.stringify(Object.assign({ id }, msg)));
            },
            announce,
            close() {
                settle(false);
                try { client.publish(base + "/up", JSON.stringify({ t: "leave", id })); } catch (_) {}
                client.close();
            }
        };

        setTimeout(() => settle(false), 9000);
        return api;
    }

    window.PQBattleMqtt = {
        available,
        create,
        join,
        brokers: BROKERS.slice(),
        _debug: { encodeConnect, encodeSubscribe, encodePublish, parseFrame, varLen }
    };
})();
