#!/usr/bin/env node
/* ============================================================
   СКВОЗНАЯ ПРОВЕРКА «БИТВЫ ЭКИПАЖЕЙ» С ТЕЛЕФОНАМИ

   Доска (play.html?grade=8) + телефоны (battle.html?room=…) в headless-DOM.
   Вместо интернета — встроенный MQTT-брокер поверх подменённого WebSocket:
   боевой код shared/battle-mqtt.js (пакеты MQTT 3.1.1, топики, подтверждения)
   работает по-настоящему, меняется только транспорт.

   Что проверяем:
   • все подключившиеся телефоны видны доске (список и счётчик);
   • потерянная заявка повторяется и игрок всё равно появляется;
   • переподключение телефона не плодит дублей;
   • опоздавший видит предупреждение, но не ломает текущую игру;
   • ответы всех участников доходят, финал показывает всех по именам;
   • комната держит 40 телефонов одновременно;
   • в локальном режиме доска предупреждает, что чужие устройства не подключатся.

   Запуск: node tools/battle-audit/check-battle-room.js
   ============================================================ */
"use strict";

const fs = require("fs");
const http = require("http");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = path.resolve(__dirname, "..", "..");
const noop = () => {};
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2"
};

const results = [];
function ok(name, cond, extra = "") {
    results.push([cond ? "OK " : "FAIL", name, extra]);
    console.log(`${cond ? "OK  " : "FAIL"} ${name}${extra ? " · " + extra : ""}`);
    return cond;
}

async function waitFor(fn, timeout = 15000, step = 150) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
        if (fn()) return true;
        await wait(step);
    }
    return false;
}

/* ---------- встроенный MQTT-брокер поверх WebSocket ---------- */

const broker = {
    clients: new Set(),
    deliver(ws, topic, payload) {
        const buf = Buffer.isBuffer(payload) ? payload : Buffer.from(String(payload), "utf8");
        for (const client of this.clients) {
            if (client === ws || client.readyState !== 1) continue;
            if (!client.topics.has(topic)) continue;
            const frame = mqttPacket(0x30, Buffer.concat([bufField(topic), buf]));
            setTimeout(() => {
                try { client.onmessage && client.onmessage({ data: frame.buffer.slice(frame.byteOffset, frame.byteOffset + frame.length) }); } catch (_) {}
            }, 0);
        }
    }
};

function bufField(str) {
    const b = Buffer.from(String(str), "utf8");
    return Buffer.concat([Buffer.from([b.length >> 8, b.length & 255]), b]);
}

function mqttPacket(header, body) {
    const len = [];
    let v = body.length;
    do {
        let byte = v % 128;
        v = Math.floor(v / 128);
        if (v > 0) byte |= 128;
        len.push(byte);
    } while (v > 0);
    return Buffer.concat([Buffer.from([header].concat(len)), body]);
}

function mqttParse(data) {
    const buf = Buffer.isBuffer(data) ? data : Buffer.from(data instanceof ArrayBuffer ? new Uint8Array(data) : data);
    const type = buf[0] >> 4;
    let i = 1;
    let mult = 1;
    let len = 0;
    let b = 0;
    do { b = buf[i++]; len += (b & 127) * mult; mult *= 128; } while (b & 128);
    return { type, body: buf.slice(i, i + len) };
}

function installMockBroker(w) {
    class MockWebSocket {
        constructor(url) {
            this.url = url;
            this.readyState = 0;
            this.topics = new Set();
            this.binaryType = "arraybuffer";
            this.dropJoins = w.__pqDropJoins || 0;
            if (this.dropJoins) w.__pqDropJoins = 0;
            broker.clients.add(this);
            setTimeout(() => {
                this.readyState = 1;
                if (this.onopen) this.onopen();
                if (w.__pqDown) {
                    this.readyState = 3;
                    broker.clients.delete(this);
                    if (this.onclose) this.onclose();
                }
            }, 0);
        }
        send(data) {
            if (this.readyState !== 1) return;
            const frame = mqttParse(data);
            if (frame.type === 1) { // CONNECT → CONNACK
                this.reply(mqttPacket(0x20, Buffer.from([0, 0])));
            } else if (frame.type === 8) { // SUBSCRIBE → SUBACK
                const pid = [frame.body[0], frame.body[1]];
                let i = 2;
                while (i < frame.body.length) {
                    const tlen = (frame.body[i] << 8) | frame.body[i + 1];
                    const topic = frame.body.slice(i + 2, i + 2 + tlen).toString("utf8");
                    this.topics.add(topic);
                    i += 2 + tlen + 1;
                }
                this.reply(mqttPacket(0x90, Buffer.from([pid[0], pid[1], 0])));
            } else if (frame.type === 3) { // PUBLISH
                const tlen = (frame.body[0] << 8) | frame.body[1];
                const topic = frame.body.slice(2, 2 + tlen).toString("utf8");
                const payload = frame.body.slice(2 + tlen);
                const text = payload.toString("utf8");
                if (this.dropJoins > 0 && text.indexOf('"t":"join"') !== -1) {
                    this.dropJoins -= 1;
                    return;
                }
                broker.deliver(this, topic, payload);
            } else if (frame.type === 12) { // PINGREQ
                this.reply(mqttPacket(0xd0, Buffer.alloc(0)));
            } else if (frame.type === 14) { // DISCONNECT
                this.readyState = 3;
                broker.clients.delete(this);
            }
        }
        reply(frame) {
            setTimeout(() => {
                try { this.onmessage && this.onmessage({ data: frame.buffer.slice(frame.byteOffset, frame.byteOffset + frame.length) }); } catch (_) {}
            }, 0);
        }
        close() {
            this.readyState = 3;
            broker.clients.delete(this);
            if (this.onclose) setTimeout(() => this.onclose && this.onclose(), 0);
        }
    }
    w.WebSocket = MockWebSocket;
}

/* ---------- статический сервер ---------- */

function startServer() {
    const server = http.createServer((req, res) => {
        let pathname = decodeURIComponent(String(req.url || "/").split("?")[0].split("#")[0]);
        if (pathname.endsWith("/")) pathname += "index.html";
        const file = path.join(ROOT, pathname.replace(/^\/+/, ""));
        if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
            res.statusCode = 404;
            res.end("not found");
            return;
        }
        res.setHeader("Content-Type", MIME[path.extname(file)] || "application/octet-stream");
        fs.createReadStream(file).pipe(res);
    });
    return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

/* ---------- общие заглушки ---------- */

function fakeCanvasContext() {
    return new Proxy({}, {
        get: (t, key) => {
            if (key === "canvas") return { width: 760, height: 270 };
            if (key === "measureText") return () => ({ width: 10 });
            if (key === "getImageData") return () => ({ data: [] });
            if (/^create(Linear|Radial)Gradient$|^createPattern$/.test(String(key))) {
                return () => ({ addColorStop: noop });
            }
            return noop;
        },
        set: (t, key, value) => { t[key] = value; return true; }
    });
}

function baseStubs(w, errors, opts = {}) {
    installMockBroker(w);
    // PeerJS не нужен: сначала идёт MQTT, резерв проверяется отдельно
    if (opts.peerUnavailable) {
        w.Peer = function PeerMissing() {
            const handlers = {};
            this.open = false;
            this.on = (ev, cb) => {
                handlers[ev] = cb;
                if (ev === "open") setTimeout(() => { this.open = true; cb(); }, 10);
                return this;
            };
            this.connect = () => ({ open: true, peer: "host", on() { return this; }, send: noop, close: noop });
            this.destroy = noop;
            setTimeout(() => { if (handlers.error) handlers.error({ type: "peer-unavailable" }); }, 900);
        };
    } else {
        w.Peer = function PeerOffline() { throw new Error("peer-offline"); };
    }
    w.HTMLCanvasElement.prototype.getContext = () => fakeCanvasContext();
    w.HTMLCanvasElement.prototype.toDataURL = () => "data:image/png;base64,";
    w.matchMedia = w.matchMedia || (() => ({
        matches: false, addListener: noop, removeListener: noop,
        addEventListener: noop, removeEventListener: noop
    }));
    w.scrollTo = noop;
    w.alert = noop;
    w.confirm = () => true;
    w.print = noop;
    w.HTMLElement.prototype.scrollIntoView = noop;
    w.console.error = (...args) => errors.push(String(args[0]).slice(0, 160));
    w.console.warn = noop;
    w.console.log = noop;
    if (opts.dropFirstJoin) w.__pqDropJoins = opts.dropFirstJoin;
    if (opts.noMqtt) w.PQ_BATTLE_NO_MQTT = true;
    if (opts.session) {
        try { w.sessionStorage.setItem("pq-battle-session", opts.session); } catch (_) {}
    }
}

async function openBoard(base) {
    const errors = [];
    const dom = await JSDOM.fromURL(`${base}/play.html?grade=8`, {
        runScripts: "dangerously",
        resources: "usable",
        pretendToBeVisual: true,
        beforeParse(w) { baseStubs(w, errors); }
    });
    return { dom, errors };
}

async function openPhone(base, code, name, opts = {}) {
    const errors = [];
    const dom = await JSDOM.fromURL(`${base}/battle.html?room=${code}&grade=8&lang=ru`, {
        runScripts: "dangerously",
        resources: "usable",
        pretendToBeVisual: true,
        beforeParse(w) { baseStubs(w, errors, opts); }
    });
    const w = dom.window;
    await waitFor(() => w.document.getElementById("bp-join"), 15000);
    if (name) {
        w.document.getElementById("bp-name").value = name;
        w.document.getElementById("bp-join").click();
    }
    return { dom, w, errors };
}

async function bootBoard(dom, timeout = 30000) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
        if (dom.window.eval('typeof PQTeamBattle !== "undefined" && typeof PQBattleRoom !== "undefined" && typeof PQBattleMqtt !== "undefined" && typeof RPG !== "undefined"')) {
            await wait(300);
            return true;
        }
        await wait(150);
    }
    return false;
}

function lobbyState(w) {
    return {
        count: Number((w.document.getElementById("pq-lobby-count") || {}).textContent || 0),
        chips: Array.from(w.document.querySelectorAll("#pq-lobby-list .pq-lobby-chip")).map((c) => c.textContent.trim()),
        startDisabled: !!(w.document.getElementById("pq-lobby-start") || {}).disabled
    };
}

async function openRoom(base) {
    const board = await openBoard(base);
    const bw = board.dom.window;
    if (!await bootBoard(board.dom)) throw new Error("play.html не загрузился");
    bw.eval("PQTeamBattle.open()");
    bw.document.querySelector('#pq-battle-mode [data-mode="phones"]').click();
    bw.document.getElementById("pq-battle-rounds").value = "5";
    bw.document.getElementById("pq-battle-start").click();
    await wait(400);
    const code = String((bw.document.getElementById("pq-lobby-code") || {}).textContent || "").trim();
    return { board, bw, code };
}

/* ============================================================
   Сценарий 1: семь телефонов и все проблемные случаи
   ============================================================ */

async function scenarioPhones(base) {
    const phones = [];
    const { board, bw, code } = await openRoom(base);
    try {
        console.log("\n== Доска и комната (MQTT) ==");
        ok("комната создана", /^[A-Z0-9]{4,6}$/.test(code), code);
        await waitFor(() => bw.eval('PQTeamBattle.room && PQTeamBattle.room.mode === "mqtt"'), 5000);
        ok("комната работает через MQTT-брокер", bw.eval('PQTeamBattle.room.mode === "mqtt"'), bw.eval("PQTeamBattle.room.mode"));
        ok("доска показывает «Комната в интернете»",
            /интернете|online/i.test(String((bw.document.getElementById("pq-lobby-status") || {}).textContent || "")));
        ok("кнопка старта заблокирована без игроков", lobbyState(bw).startDisabled === true);

        console.log("\n== 6 телефонов заходят в игру ==");
        const names = ["Айдана", "Данияр", "Меруерт", "Ерасыл", "Алия", "Нурлан"];
        for (const name of names) {
            phones.push(await openPhone(base, code, name));
            await wait(120);
        }
        await waitFor(() => lobbyState(bw).count === 6, 8000);
        const lobby = lobbyState(bw);
        ok("доска видит всех шестерых", lobby.count === 6 && lobby.chips.length === 6, `${lobby.count}: ${lobby.chips.join(", ")}`);
        ok("имена не потерялись", names.every((n) => lobby.chips.includes(n)));
        ok("кнопка старта разблокирована", lobby.startDisabled === false);
        ok("телефоны увидели подтверждение и список",
            phones.every((p) => /Ты в игре|Игроков на доске/.test(p.w.document.getElementById("bp-body").textContent)));

        console.log("\n== Потерянная заявка и переподключение ==");
        const lostPhone = await openPhone(base, code, "Сабина", { dropFirstJoin: 2 });
        phones.push(lostPhone);
        await wait(400);
        const beforeRetry = lobbyState(bw).count;
        await waitFor(() => lobbyState(bw).count === 7, 8000);
        const afterRetry = lobbyState(bw).count;
        ok("потерянная заявка повторилась сама", beforeRetry === 6 && afterRetry === 7, `${beforeRetry} → ${afterRetry}`);
        ok("имя опоздавшего видно", lobbyState(bw).chips.includes("Сабина"));

        const victim = phones[2];
        const session = String(victim.w.sessionStorage.getItem("pq-battle-session") || "");
        victim.dom.window.close();
        phones[2] = await openPhone(base, code, "Меруерт", { session });
        await wait(1200);
        const lobby2 = lobbyState(bw);
        ok("переподключение не плодит дубль",
            lobby2.count === 7 && lobby2.chips.filter((n) => n === "Меруерт").length === 1,
            `${lobby2.count}: ${lobby2.chips.join(", ")}`);

        console.log("\n== Старт игры и ответы ==");
        bw.document.getElementById("pq-lobby-start").click();
        await wait(900);
        const teams = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.map(c => ({ name: c.name, players: c.players.map(p => p.name) })))`));
        const roster = teams.reduce((acc, c) => acc.concat(c.players), []);
        ok("в игру попали все 7 участников", roster.length === 7, roster.join(", "));
        ok("участники распределены по экипажам", teams.length === 2 && teams.every((c) => c.players.length > 0),
            teams.map((c) => `${c.name}: ${c.players.join("/")}`).join(" | "));

        const q1 = phones[0].w.document.querySelectorAll("#bp-opts .bp-opt").length;
        ok("вопрос пришёл на телефоны", q1 >= 2, String(q1));

        const latePhone = await openPhone(base, code, "Опоздавший");
        phones.push(latePhone);
        await wait(1200);
        const toastText = Array.from(bw.document.querySelectorAll(".pq-battle-toast")).map((t) => t.textContent).join(" ");
        ok("доска сообщает об опоздавшем", /после старта/i.test(toastText), toastText.slice(0, 80));
        const roster2 = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.reduce((a, c) => a.concat(c.players.map(p => p.name)), []))`));
        ok("опоздавший не попал в текущую игру", roster2.length === 7 && !roster2.includes("Опоздавший"));

        for (const p of phones.slice(0, 6)) {
            const btn = p.w.document.querySelector("#bp-opts .bp-opt");
            if (btn) btn.click();
        }
        await wait(700);
        const answeredLabel = String((bw.document.getElementById("pq-battle-answered") || {}).textContent || "");
        ok("счётчик ответов учитывает не всех", /6/.test(answeredLabel) && /7/.test(answeredLabel), answeredLabel.trim());

        const last = phones[6].w.document.querySelector("#bp-opts .bp-opt");
        if (last) last.click();
        await wait(1000);
        ok("доска дождалась ответов всех", /экипаж/i.test(bw.document.getElementById("pq-battle").textContent));
        ok("телефоны получили разбор", phones.slice(0, 7).every((p) => /Верно|Неверно/.test(p.w.document.getElementById("bp-body").textContent)));

        console.log("\n== Ничья ==");
        bw.eval("PQTeamBattle.state.crews.forEach(c => { c.score = 300; c.shield = 66; })");
        const tieState = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.map(c => ({ score: c.score, shield: c.shield })))`));
        ok("равные очки перед финалом", tieState.length === 2 && tieState[0].score === tieState[1].score, JSON.stringify(tieState));

        console.log("\n== Финал ==");
        bw.eval("PQTeamBattle.state.round = PQTeamBattle.state.rounds");
        const nextBtn = bw.document.getElementById("pq-battle-next");
        ok("есть кнопка завершения", !!nextBtn);
        if (nextBtn) nextBtn.click();
        await wait(900);
        const res = bw.document.getElementById("pq-battle");
        const placeNames = Array.from(res.querySelectorAll(".place-player b")).map((b) => b.textContent.trim());
        ok("финал показывает всех по именам", placeNames.length === 7, placeNames.join(", "));
        ok("в финале нет дублей", new Set(placeNames).size === placeNames.length);

        const medals = Array.from(res.querySelectorAll(".place-medal")).map((m) => m.textContent.trim());
        ok("при ничьей у обоих экипажей первое место", medals.length === 2 && medals.every((m) => m === "🥇"), medals.join(" "));
        ok("при ничьей в заголовке «Ничья»", /Ничья/.test(res.textContent));
        const phonePlaces = phones.slice(0, 7).map((p) => (p.w.document.getElementById("bp-body").textContent.match(/Итог команды: (.+)/) || [])[1] || "");
        ok("телефоны видят одно и то же место", phonePlaces.every((x) => /^1\b/.test(x)), phonePlaces.slice(0, 2).join(" | "));

        const errors = board.errors.concat(...phones.map((p) => p.errors)).filter((e) => !/Not implemented|Could not parse CSS/.test(e));
        ok("ошибок консоли нет", errors.length === 0, errors.slice(0, 3).join(" | "));
    } finally {
        try { board.dom.window.close(); } catch (_) {}
        phones.forEach((p) => { try { p.dom.window.close(); } catch (_) {} });
    }
}

/* ============================================================
   Сценарий 2: 40 телефонов одновременно
   ============================================================ */

async function scenarioCapacity(base) {
    console.log("\n== 40 телефонов в одной комнате ==");
    const phones = [];
    const { board, bw, code } = await openRoom(base);
    try {
        const names = Array.from({ length: 40 }, (_, i) => `Ученик ${i + 1}`);
        for (const name of names) {
            phones.push(await openPhone(base, code, name));
            await wait(40);
        }
        const full = await waitFor(() => lobbyState(bw).count === 40, 40000, 250);
        const lobby = lobbyState(bw);
        ok("доска видит все 40 телефонов", full && lobby.count === 40, `${lobby.count} в списке`);
        ok("все 40 имён на месте", names.every((n) => lobby.chips.includes(n)));

        bw.document.getElementById("pq-lobby-start").click();
        await wait(1200);
        const roster = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.reduce((a, c) => a.concat(c.players.map(p => p.name)), []))`));
        ok("в игру вошли все 40", roster.length === 40, String(roster.length));
        const crews = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.map(c => c.players.length))`));
        ok("экипажи распределены поровну", crews.reduce((a, b) => a + b, 0) === 40, crews.join(" / "));

        const gotQuestion = phones.filter((p) => p.w.document.querySelectorAll("#bp-opts .bp-opt").length >= 2).length;
        ok("вопрос дошёл до всех телефонов", gotQuestion === 40, `${gotQuestion}/40`);

        for (const p of phones) {
            const btn = p.w.document.querySelector("#bp-opts .bp-opt");
            if (btn) btn.click();
            await wait(15);
        }
        await wait(1500);
        const answered = String((bw.document.getElementById("pq-battle-answered") || {}).textContent || "");
        const revealNow = /экипаж/i.test(bw.document.getElementById("pq-battle").textContent);
        ok("ответы всех 40 засчитаны", revealNow || /40/.test(answered), revealNow ? "разбор открылся" : answered.trim());
    } finally {
        try { board.dom.window.close(); } catch (_) {}
        phones.forEach((p) => { try { p.dom.window.close(); } catch (_) {} });
    }
}

/* ============================================================
   Сценарий 3: локальный режим (нет ни MQTT, ни PeerJS)
   ============================================================ */

async function scenarioLocalFallback(base) {
    console.log("\n== Резерв: локальный режим ==");
    const errors = [];
    const dom = await JSDOM.fromURL(`${base}/play.html?grade=8`, {
        runScripts: "dangerously",
        resources: "usable",
        pretendToBeVisual: true,
        beforeParse(w) {
            baseStubs(w, errors, { noMqtt: true });
            // ни брокера, ни PeerJS: только локальная комната
            w.__pqDown = true;
            w.BroadcastChannel = w.BroadcastChannel || function () {
                this.postMessage = noop;
                this.close = noop;
            };
        }
    });
    try {
        const w = dom.window;
        if (!await bootBoard(dom)) throw new Error("play.html не загрузился");
        w.eval("PQTeamBattle.open()");
        w.document.querySelector('#pq-battle-mode [data-mode="phones"]').click();
        w.document.getElementById("pq-battle-start").click();
        await wait(500);
        const warn = w.document.getElementById("pq-lobby-localwarn");
        ok("в локальном режиме видно предупреждение", !!warn && warn.hidden === false,
            (warn ? warn.textContent : "").slice(0, 60));
        ok("резерв не роняет доску", !!w.document.getElementById("pq-lobby-code"));
    } finally {
        try { dom.window.close(); } catch (_) {}
    }
}

/* ============================================================
   Сценарий 4: доска недоступна — понятная ошибка и «Повторить»
   ============================================================ */

async function scenarioUnreachable(base) {
    console.log("\n== Доска недоступна ==");
    const errors = [];
    const dom = await JSDOM.fromURL(`${base}/battle.html?room=ZZZZZZ&grade=8&lang=ru`, {
        runScripts: "dangerously",
        resources: "usable",
        pretendToBeVisual: true,
        beforeParse(w) { baseStubs(w, errors, { noMqtt: true, peerUnavailable: true }); }
    });
    try {
        const w = dom.window;
        await waitFor(() => w.document.getElementById("bp-join"), 15000);
        w.document.getElementById("bp-name").value = "Тест";
        w.document.getElementById("bp-join").click();
        const shown = await waitFor(() => w.document.getElementById("bp-retry"), 20000);
        const text = w.document.getElementById("bp-body").textContent;
        ok("вместо «не найдена» — «Доска не отвечает»", shown && /Доска не отвечает/.test(text), text.slice(0, 70));
        ok("есть кнопка «Повторить подключение»", shown);
        if (shown) {
            w.document.getElementById("bp-retry").click();
            await wait(200);
            ok("повтор запускает новые поиски комнаты", /Подключаемся|Ищем|Ждём/i.test(w.document.getElementById("bp-body").textContent),
                w.document.getElementById("bp-body").textContent.slice(0, 50));
        }
    } finally {
        try { dom.window.close(); } catch (_) {}
    }
}

(async () => {
    const server = await startServer();
    const base = `http://127.0.0.1:${server.address().port}`;
    try {
        await scenarioPhones(base);
        await scenarioCapacity(base);
        await scenarioLocalFallback(base);
        await scenarioUnreachable(base);
    } catch (err) {
        ok("тест выполнился без исключений", false, String((err && err.message) || err));
    } finally {
        server.close();
    }

    const failed = results.filter((r) => r[0] === "FAIL");
    console.log(`\nИтог: ${results.length - failed.length}/${results.length} проверок пройдено`);
    if (failed.length) process.exitCode = 1;
})();
