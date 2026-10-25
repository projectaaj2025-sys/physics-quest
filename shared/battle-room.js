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

    function createLocalRoom(code, cb) {
        const ch = new BroadcastChannel("pq-battle-" + code);
        const players = new Map();
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
                if (!players.has(d.id)) {
                    players.set(d.id, d.name || "");
                    cb.onJoin && cb.onJoin({ id: d.id, name: d.name || "" });
                }
            } else if (d.t === "answer" && d.id) {
                cb.onAnswer && cb.onAnswer(d.id, Number(d.opt));
            } else if (d.t === "leave" && d.id) {
                players.delete(d.id);
                cb.onLeave && cb.onLeave(d.id);
            }
        };
        return room;
    }

    function joinLocalRoom(code, name, cb) {
        const id = newCode(6);
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
            try { ch.postMessage({ t: "join", id, name }); } catch (_) {}
            cb.onStatus && cb.onStatus("online");
        }, 250);
        return client;
    }

    /* ---------- основной режим: PeerJS ---------- */

    function createRoom(code, cb) {
        const state = { mode: "connecting", code, closed: false };
        const conns = new Map();      // peerId -> {conn, name}
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
            localRoom = createLocalRoom(state.code, cb);
        }

        let localRoom = null;

        // локальный дублёр: пока не подключился PeerJS, держим BroadcastChannel,
        // чтобы доска работала и без интернета (на одном устройстве)
        if (hasBroadcast()) localRoom = createLocalRoom(state.code, cb);

        function relay(msg) { if (localRoom) localRoom.broadcast(msg); }
        const api = {
            broadcast(msg) { relay(msg); room.broadcast(msg); },
            send(id, msg) {
                if (localRoom) localRoom.send(id, msg);
                room.send(id, msg);
            }
        };

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
                        conns.set(conn.peer, { conn, name: String(d.name || "").slice(0, 24) });
                        cb.onJoin && cb.onJoin({ id: conn.peer, name: conns.get(conn.peer).name });
                        cb.onStatus && cb.onStatus(state.mode, "joined");
                    } else if (d.t === "answer") {
                        cb.onAnswer && cb.onAnswer(conn.peer, Number(d.opt));
                    }
                });
                conn.on("close", () => {
                    if (!conns.has(conn.peer)) return;
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

        return {
            get mode() { return state.mode; },
            get code() { return state.code; },
            get size() { return conns.size + (localRoom ? localRoom.size : 0); },
            broadcast: api.broadcast,
            send: api.send,
            close() {
                state.closed = true;
                if (localRoom) localRoom.close();
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
        const pending = [];

        const api = {
            send(msg) {
                if (localClient) localClient.send(msg);
                if (conn && conn.open) { try { conn.send(msg); } catch (_) {} }
                else pending.push(msg);
            },
            close() {
                closed = true;
                if (localClient) localClient.close();
                try { if (conn) conn.close(); } catch (_) {}
                try { if (peer) peer.destroy(); } catch (_) {}
            }
        };

        function startLocal(reason) {
            if (closed) return;
            clientMode = "local";
            clientId = "local-" + newCode(4);
            localClient = joinLocalRoom(code, name, cb);
            cb.onMode && cb.onMode("local", reason);
        }

        // принудительно локальный режим (нужно для проверки на одном устройстве)
        if (window.PQ_BATTLE_LOCAL_ONLY) {
            startLocal("forced");
            return {
                get mode() { return clientMode; },
                get id() { return clientId; },
                send: api.send,
                close: api.close
            };
        }

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
                    try { conn.send({ t: "join", name }); } catch (_) {}
                    pending.splice(0).forEach((m) => { try { conn.send(m); } catch (_) {} });
                    cb.onMode && cb.onMode("online");
                });
                conn.on("data", (msg) => { if (!closed) cb.onData && cb.onData(msg); });
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

        return {
            get mode() { return clientMode; },
            get id() { return clientId; },
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
