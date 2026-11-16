/* ============================================================
   PQ BATTLE ROOM — «комната» для «Битвы экипажей» с телефонами.

   Сайт статический (GitHub Pages), поэтому связь между доской
   учителя и телефонами идёт напрямую по WebRTC через бесплатный
   брокер PeerJS — своего сервера держать не нужно.

   Если интернета/брокера нет, включается локальный режим через
   BroadcastChannel: он работает только в одном браузере
   (например, доска и «телефон» в соседней вкладке — удобно для
   проверки). В этом режиме телефоны учеников не подключатся.
   ============================================================ */
(function () {
    "use strict";

    const HOST_PREFIX = "pqbtl-";
    const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const HERE = (document.currentScript && document.currentScript.src) || window.location.href;

    let libPromise = null;

    function newCode(len) {
        let out = "";
        const n = len || 4;
        for (let i = 0; i < n; i += 1) out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        return out;
    }

    function loadPeerLib() {
        if (window.Peer) return Promise.resolve(window.Peer);
        if (!libPromise) {
            libPromise = new Promise((resolve, reject) => {
                const s = document.createElement("script");
                s.src = new URL("vendor/peerjs.min.js", HERE).href;
                s.async = true;
                s.onload = () => (window.Peer ? resolve(window.Peer) : reject(new Error("peer-lib-missing")));
                s.onerror = () => reject(new Error("peer-lib-failed"));
                document.head.appendChild(s);
            });
        }
        return libPromise;
    }

    /* ---------- локальный режим: одна вкладка/браузер ---------- */

    function hasBroadcast() {
        return typeof BroadcastChannel === "function";
    }

    function readSession() {
        // Стабильный идентификатор телефона: переживает перезагрузку вкладки,
        // чтобы доска узнавала ученика, а не считала его новым игроком.
        try {
            var s = window.sessionStorage.getItem("pq-battle-session");
            if (!s) {
                s = "S" + newCode(10);
                window.sessionStorage.setItem("pq-battle-session", s);
            }
            return s;
        } catch (_) {
            return "S" + newCode(10);
        }
    }

    function createLocalRoom(code, cb) {
        const ch = new BroadcastChannel("pq-battle-" + code);
        const players = new Map();    // id -> { name, session }
        const sessions = new Map();   // session -> id
        const room = {
            mode: "local",
            code,
            get size() { return players.size; },
            broadcast(msg) { ch.postMessage({ t: "host", msg }); },
            send(id, msg) { ch.postMessage({ t: "to", id, msg }); },
            close() { try { ch.close(); } catch (_) {} }
        };
        ch.onmessage = (ev) => {
            const d = ev.data || {};
            if (d.t === "join" && d.id) {
                const id = String(d.id);
                const session = String(d.session || "");
                const seen = players.get(id);
                // повторная заявка того же телефона — просто подтверждаем приём
                if (seen) {
                    if (session) seen.session = session;
                    room.send(id, { t: "welcome", n: players.size });
                    return;
                }
                // телефон переподключился с новым id — заменяем старую запись
                if (session && sessions.has(session) && sessions.get(session) !== id) {
                    const oldId = sessions.get(session);
                    players.delete(oldId);
                    sessions.delete(session);
                    cb.onLeave && cb.onLeave(oldId);
                }
                players.set(id, { name: d.name || "", session });
                if (session) sessions.set(session, id);
                cb.onJoin && cb.onJoin({ id, name: d.name || "", session });
                room.send(id, { t: "welcome", n: players.size });
            } else if (d.t === "answer" && d.id) {
                cb.onAnswer && cb.onAnswer(d.id, Number(d.opt));
            } else if (d.t === "leave" && d.id) {
                const gone = players.get(d.id);
                if (gone && gone.session && sessions.get(gone.session) === d.id) sessions.delete(gone.session);
                players.delete(d.id);
                cb.onLeave && cb.onLeave(d.id);
            }
        };
        return room;
    }

    function joinLocalRoom(code, name, cb, preferredId, session) {
        // Идентификатор должен совпадать с client.id: по нему доска шлёт
        // персональные сообщения (итог раунда конкретному игроку).
        const id = preferredId || ("P" + newCode(5));
        const ch = new BroadcastChannel("pq-battle-" + code);
        const client = {
            mode: "local",
            id,
            send(msg) { ch.postMessage(Object.assign({ t: "msg", id }, msg)); },
            close() { try { ch.postMessage({ t: "leave", id }); ch.close(); } catch (_) {} }
        };
        ch.onmessage = (ev) => {
            const d = ev.data || {};
            if (d.t === "host") cb.onData && cb.onData(d.msg);
            else if (d.t === "to" && d.id === id) cb.onData && cb.onData(d.msg);
        };
        // представимся доске — с небольшой задержкой, чтобы комната успела подняться
        setTimeout(() => {
            try { ch.postMessage({ t: "join", id, name, session: session || "" }); } catch (_) {}
            cb.onStatus && cb.onStatus("online");
        }, 250);
        // повторная заявка, если доска не подтвердила приём
        client.announce = () => {
            try { ch.postMessage({ t: "join", id, name, session: session || "" }); } catch (_) {}
        };
        return client;
    }

    /* ---------- основной режим: PeerJS ---------- */

    function createRoom(code, cb) {
        const state = { mode: "connecting", code, closed: false };
        const conns = new Map();      // peerId -> {conn, name, session}
        const sessions = new Map();   // session -> peerId
        const room = {
            get mode() { return state.mode; },
            get code() { return state.code; },
            get size() { return conns.size; },
            get names() { return Array.from(conns.values()).map((c) => c.name); },
            broadcast(msg) { conns.forEach((c) => safeSend(c.conn, msg)); },
            send(id, msg) { const c = conns.get(id); if (c) safeSend(c.conn, msg); },
            close() {
                state.closed = true;
                conns.forEach((c) => { try { c.conn.close(); } catch (_) {} });
                conns.clear();
                if (peer) { try { peer.destroy(); } catch (_) {} }
            }
        };
        let peer = null;

        function safeSend(conn, msg) {
            try { if (conn && conn.open) conn.send(msg); } catch (_) {}
        }

        function fallback(reason) {
            if (state.closed) return;
            if (!hasBroadcast()) {
                cb.onStatus && cb.onStatus("error", reason);
                return;
            }
            state.mode = "local";
            cb.onStatus && cb.onStatus("local", reason);
            // Локальная «комната» могла быть создана ещё до подключения PeerJS:
            // второй BroadcastChannel давал бы двойные события join/answer.
            if (!localRoom) localRoom = createLocalRoom(state.code, cb);
        }

        let localRoom = null;

        // локальный дублёр: пока не подключился PeerJS, держим BroadcastChannel,
        // чтобы доска работала и без интернета (на одном устройстве)
        if (hasBroadcast()) localRoom = createLocalRoom(state.code, cb);

        let mqttRoom = null;

        function relay(msg) {
            if (localRoom) localRoom.broadcast(msg);
            if (mqttRoom) { try { mqttRoom.broadcast(msg); } catch (_) {} }
        }
        const api = {
            broadcast(msg) { relay(msg); room.broadcast(msg); },
            send(id, msg) {
                if (localRoom) localRoom.send(id, msg);
                if (mqttRoom) { try { mqttRoom.send(id, msg); } catch (_) {} }
                room.send(id, msg);
            }
        };

        function startPeer() {
            loadPeerLib().then((Peer) => {
            if (state.closed) return;
            try {
                peer = new Peer(HOST_PREFIX + state.code, { debug: 0 });
            } catch (e) {
                fallback("peer-init");
                return;
            }
            const openTimer = setTimeout(() => {
                if (peer && !peer.open) {
                    cb.onStatus && cb.onStatus("waiting");
                }
            }, 6000);
            peer.on("open", () => {
                clearTimeout(openTimer);
                if (state.mode === "local") return;   // уже работаем локально
                state.mode = "online";
                cb.onStatus && cb.onStatus("online");
            });
            peer.on("connection", (conn) => {
                conn.on("data", (msg) => {
                    const d = msg || {};
                    if (d.t === "join") {
                        const pid = conn.peer;
                        const name = String(d.name || "").slice(0, 24);
                        const session = String(d.session || "");
                        const seen = conns.get(pid);
                        // повторная заявка (телефон не получил подтверждение) — только ack
                        if (seen) {
                            if (session) seen.session = session;
                            safeSend(conn, { t: "welcome", n: conns.size });
                            return;
                        }
                        // переподключение с новым peer id и той же сессией
                        if (session && sessions.has(session) && sessions.get(session) !== pid) {
                            const oldId = sessions.get(session);
                            const old = conns.get(oldId);
                            conns.delete(oldId);
                            sessions.delete(session);
                            try { if (old) old.conn.close(); } catch (_) {}
                            cb.onLeave && cb.onLeave(oldId);
                        }
                        conns.set(pid, { conn, name, session });
                        if (session) sessions.set(session, pid);
                        cb.onJoin && cb.onJoin({ id: pid, name, session });
                        safeSend(conn, { t: "welcome", n: conns.size });
                        cb.onStatus && cb.onStatus(state.mode, "joined");
                    } else if (d.t === "answer") {
                        cb.onAnswer && cb.onAnswer(conn.peer, Number(d.opt));
                    }
                });
                conn.on("close", () => {
                    const gone = conns.get(conn.peer);
                    if (!gone) return;
                    if (gone.session && sessions.get(gone.session) === conn.peer) sessions.delete(gone.session);
                    conns.delete(conn.peer);
                    cb.onLeave && cb.onLeave(conn.peer);
                    cb.onStatus && cb.onStatus(state.mode, "left");
                });
                conn.on("error", () => {});
            });
            peer.on("error", (err) => {
                clearTimeout(openTimer);
                const type = (err && err.type) || "peer-error";
                // "peer-unavailable" — это телефон не нашёл комнату; доска продолжает жить
                if (type === "peer-unavailable") return;
                if (type === "unavailable-id") {
                    cb.onStatus && cb.onStatus("error", "id-taken");
                    return;
                }
                fallback(type);
            });
            }).catch(() => fallback("lib"));
        }

        // Сначала публичный MQTT-брокер: он проходит из любых сетей и держит
        // десятки телефонов. PeerJS и локальная комната — резерв.
        if (window.PQBattleMqtt && window.PQBattleMqtt.available()) {
            try {
                mqttRoom = window.PQBattleMqtt.create(state.code, cb);
                mqttRoom.ready.then(() => {
                    if (state.closed) { try { mqttRoom.close(); } catch (_) {} mqttRoom = null; return; }
                    state.mode = "mqtt";
                    cb.onStatus && cb.onStatus("online", "mqtt");
                }).catch(() => {
                    const failed = mqttRoom;
                    mqttRoom = null;
                    if (failed) { try { failed.close(); } catch (_) {} }
                    if (!state.closed) startPeer();
                });
            } catch (_) {
                mqttRoom = null;
                startPeer();
            }
        } else {
            startPeer();
        }

        return {
            get mode() { return state.mode; },
            get code() { return state.code; },
            get size() {
                return conns.size + (localRoom ? localRoom.size : 0) + (mqttRoom ? mqttRoom.size : 0);
            },
            broadcast: api.broadcast,
            send: api.send,
            close() {
                state.closed = true;
                if (localRoom) localRoom.close();
                if (mqttRoom) { try { mqttRoom.close(); } catch (_) {} }
                room.close();
            }
        };
    }

    function joinRoom(code, name, cb) {
        let clientMode = "connecting";
        let clientId = "";
        let closed = false;
        let peer = null;
        let conn = null;
        let localClient = null;
        let acked = false;
        let announceTimer = null;
        let announceTries = 0;
        let hooksInstalled = false;
        const pending = [];
        const SESSION = readSession();

        let mqttClient = null;

        const api = {
            send(msg) {
                if (mqttClient) { try { mqttClient.send(msg); } catch (_) {} }
                if (localClient) localClient.send(msg);
                if (conn && conn.open) { try { conn.send(msg); } catch (_) {} }
                else if (!localClient && !mqttClient) pending.push(msg);
            },
            close() {
                closed = true;
                stopAnnounce();
                if (mqttClient) { try { mqttClient.close(); } catch (_) {} }
                if (localClient) localClient.close();
                try { if (conn) conn.close(); } catch (_) {}
                try { if (peer) peer.destroy(); } catch (_) {}
            }
        };

        function stopAnnounce() {
            if (announceTimer) { clearInterval(announceTimer); announceTimer = null; }
        }

        function announceNow() {
            if (closed || acked) return;
            if (localClient && localClient.announce) { localClient.announce(); return; }
            api.send({ t: "join", name, session: SESSION });
        }

        /* Телефон повторяет заявку, пока доска не подтвердит приём: в школьной
           сети первый пакет теряется, и раньше такой игрок «исчезал» из списка. */
        function startAnnounce() {
            if (announceTimer || closed || acked) return;
            announceNow();
            announceTimer = setInterval(() => {
                if (closed || acked) { stopAnnounce(); return; }
                announceTries += 1;
                if (announceTries > 25) { stopAnnounce(); return; }
                announceNow();
            }, 1200);
        }

        function markJoined() {
            if (acked) return;
            acked = true;
            stopAnnounce();
        }

        function handleData(msg) {
            if (!msg || !msg.t) return;
            // подтверждение приёма шлёт доска лично игроку; общие рассылки
            // (lobby/start/q) подтверждением не считаются
            if (msg.t === "welcome") markJoined();
            cb.onData && cb.onData(msg);
        }

        function installReconnectHooks() {
            if (hooksInstalled) return;
            hooksInstalled = true;
            try {
                document.addEventListener("visibilitychange", () => {
                    if (!document.hidden) { markJoinedReset(); announceNow(); }
                });
                window.addEventListener("online", () => { markJoinedReset(); announceNow(); });
                window.addEventListener("pagehide", () => { try { api.close(); } catch (_) {} });
            } catch (_) {}
        }

        // после сворачивания вкладки связь могла отвалиться — заявляемся снова
        function markJoinedReset() {
            acked = false;
            startAnnounce();
        }

        function startLocal(reason) {
            if (closed) return;
            clientMode = "local";
            clientId = "local-" + newCode(4);
            localClient = joinLocalRoom(
                code, name,
                Object.assign({}, cb, { onData: handleData }),
                clientId, SESSION
            );
            clientId = localClient.id || clientId;
            cb.onMode && cb.onMode("local", reason);
            installReconnectHooks();
            startAnnounce();
        }

        // принудительно локальный режим (нужно для проверки на одном устройстве)
        if (window.PQ_BATTLE_LOCAL_ONLY) {
            startLocal("forced");
            return {
                get mode() { return clientMode; },
                get id() { return clientId; },
                get acked() { return acked; },
                send: api.send,
                close: api.close
            };
        }

        function startPeer() {
        loadPeerLib().then((Peer) => {
            if (closed) return;
            try {
                peer = new Peer({ debug: 0 });
            } catch (_) { startLocal("peer-init"); return; }
            const timer = setTimeout(() => {
                if (!conn) startLocal("timeout");
            }, 9000);
            peer.on("open", () => {
                if (closed) return;
                try {
                    conn = peer.connect(HOST_PREFIX + code, { reliable: true });
                } catch (_) { clearTimeout(timer); startLocal("connect"); return; }
                conn.on("open", () => {
                    clearTimeout(timer);
                    if (closed) return;
                    clientMode = "online";
                    clientId = peer.id || conn.peer || "";
                    try { conn.send({ t: "join", name, session: SESSION }); } catch (_) {}
                    installReconnectHooks();
                    startAnnounce();
                    pending.splice(0).forEach((m) => { try { conn.send(m); } catch (_) {} });
                    cb.onMode && cb.onMode("online");
                });
                conn.on("data", (msg) => { if (!closed) handleData(msg); });
                conn.on("close", () => { cb.onStatus && cb.onStatus("closed"); });
            });
            peer.on("error", (err) => {
                const type = (err && err.type) || "peer-error";
                if (type === "peer-unavailable") {
                    clearTimeout(timer);
                    cb.onStatus && cb.onStatus("not-found");
                    return;
                }
                clearTimeout(timer);
                startLocal(type);
            });
            }).catch(() => startLocal("lib"));
        }

        // Тот же приоритет, что и у доски: MQTT → PeerJS → локальная комната
        if (window.PQBattleMqtt && window.PQBattleMqtt.available()) {
            try {
                mqttClient = window.PQBattleMqtt.join(
                    code, name,
                    Object.assign({}, cb, { onData: handleData }),
                    { id: "pqp-" + newCode(8), session: SESSION }
                );
                mqttClient.ready.then(() => {
                    if (closed) { try { mqttClient.close(); } catch (_) {} mqttClient = null; return; }
                    clientMode = "mqtt";
                    clientId = mqttClient.id;
                    installReconnectHooks();
                    startAnnounce();
                    cb.onMode && cb.onMode("mqtt");
                }).catch(() => {
                    const failed = mqttClient;
                    mqttClient = null;
                    if (failed) { try { failed.close(); } catch (_) {} }
                    if (!closed) startPeer();
                });
            } catch (_) {
                mqttClient = null;
                startPeer();
            }
        } else {
            startPeer();
        }

        return {
            get mode() { return clientMode; },
            get id() { return clientId; },
            get acked() { return acked; },
            send: api.send,
            close: api.close
        };
    }

    window.PQBattleRoom = {
        newCode,
        create: createRoom,
        join: joinRoom,
        hasBroadcast
    };
})();
