#!/usr/bin/env node
/* ============================================================
   СКВОЗНАЯ ПРОВЕРКА «БИТВЫ ЭКИПАЖЕЙ» С ТЕЛЕФОНАМИ

   Доска (play.html?grade=8) + несколько телефонов (battle.html?room=…)
   в headless-DOM. PeerJS недоступен, поэтому всё идёт через локальную
   «комнату» BroadcastChannel; в тесте каналы общие для всех окон —
   как вкладки одного браузера.

   Что проверяем:
   • все подключившиеся телефоны видны доске (список и счётчик);
   • потерянная заявка повторяется и игрок всё равно появляется;
   • переподключение телефона не плодит дублей;
   • опоздавший видит предупреждение, но не ломает текущую игру;
   • ответы всех участников доходят, финал показывает всех по именам;
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

/* ---------- общий BroadcastChannel для всех окон ---------- */

const hubs = new Map();

function installSharedBroadcast(w) {
    w.BroadcastChannel = function BroadcastChannel(name) {
        this.name = name;
        this.onmessage = null;
        this.closed = false;
        this.dropJoins = w.__pqDropJoins || 0;
        if (this.dropJoins) w.__pqDropJoins = 0;
        const list = hubs.get(name) || [];
        hubs.set(name, list);
        list.push(this);
    };
    w.BroadcastChannel.prototype.postMessage = function postMessage(data) {
        if (this.closed) return;
        if (data && data.t === "join" && this.dropJoins > 0) {
            this.dropJoins -= 1;
            return;
        }
        const list = hubs.get(this.name) || [];
        setTimeout(() => {
            list.forEach((other) => {
                if (other === this || other.closed || typeof other.onmessage !== "function") return;
                try { other.onmessage({ data }); } catch (_) {}
            });
        }, 0);
    };
    w.BroadcastChannel.prototype.close = function close() {
        this.closed = true;
        const list = hubs.get(this.name);
        if (!list) return;
        const i = list.indexOf(this);
        if (i >= 0) list.splice(i, 1);
    };
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

function baseStubs(w, errors) {
    installSharedBroadcast(w);
    // PeerJS-брокер в песочнице недоступен: конструктор падает → локальная комната
    w.Peer = function PeerOffline() { throw new Error("peer-offline"); };
    w.PQ_BATTLE_LOCAL_ONLY = true;
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
        beforeParse(w) {
            baseStubs(w, errors);
            if (opts.session) {
                try { w.sessionStorage.setItem("pq-battle-session", opts.session); } catch (_) {}
            }
            if (opts.dropFirstJoin) w.__pqDropJoins = opts.dropFirstJoin;
        }
    });
    const w = dom.window;
    const started = Date.now();
    while (Date.now() - started < 15000 && !w.document.getElementById("bp-join")) await wait(100);
    if (name) {
        w.document.getElementById("bp-name").value = name;
        w.document.getElementById("bp-join").click();
    }
    return { dom, w, errors };
}

async function bootBoard(dom, timeout = 30000) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
        if (dom.window.eval('typeof PQTeamBattle !== "undefined" && typeof PQBattleRoom !== "undefined" && typeof RPG !== "undefined"')) {
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
        startDisabled: !!(w.document.getElementById("pq-lobby-start") || {}).disabled,
        warnHidden: (w.document.getElementById("pq-lobby-localwarn") || {}).hidden
    };
}

(async () => {
    const server = await startServer();
    const base = `http://127.0.0.1:${server.address().port}`;
    const phones = [];
    let board = null;
    try {
        console.log("\n== Доска и комната ==");
        board = await openBoard(base);
        const bw = board.dom.window;
        if (!await bootBoard(board.dom)) throw new Error("play.html не загрузился");
        bw.eval("PQTeamBattle.open()");
        bw.document.querySelector('#pq-battle-mode [data-mode="phones"]').click();
        bw.document.getElementById("pq-battle-rounds").value = "5";
        bw.document.getElementById("pq-battle-start").click();
        await wait(600);
        const code = String((bw.document.getElementById("pq-lobby-code") || {}).textContent || "").trim();
        ok("комната создана", /^[A-Z0-9]{4}$/.test(code), code);
        ok("доска предупреждает о локальном режиме", lobbyState(bw).warnHidden === false);
        ok("кнопка старта заблокирована без игроков", lobbyState(bw).startDisabled === true);

        console.log("\n== 6 телефонов заходят в игру ==");
        const names = ["Айдана", "Данияр", "Меруерт", "Ерасыл", "Алия", "Нурлан"];
        for (const name of names) {
            phones.push(await openPhone(base, code, name));
            await wait(150);
        }
        await wait(1200);
        let lobby = lobbyState(bw);
        ok("доска видит всех шестерых", lobby.count === 6 && lobby.chips.length === 6, `${lobby.count}: ${lobby.chips.join(", ")}`);
        ok("имена не потерялись", names.every((n) => lobby.chips.includes(n)));
        ok("кнопка старта разблокирована", lobby.startDisabled === false);
        const phoneWaiting = phones.every((p) => /Ты в игре|Игроков на доске/.test(p.w.document.getElementById("bp-body").textContent));
        ok("телефоны увидели подтверждение и список", phoneWaiting);

        console.log("\n== Потерянная заявка и переподключение ==");
        const lostPhone = await openPhone(base, code, "Сабина", { dropFirstJoin: 2 });
        phones.push(lostPhone);
        await wait(400);
        const beforeRetry = lobbyState(bw).count;
        await wait(2200);
        const afterRetry = lobbyState(bw).count;
        ok("потерянная заявка повторилась сама", beforeRetry === 6 && afterRetry === 7, `${beforeRetry} → ${afterRetry}`);
        ok("имя опоздавшего видно", lobbyState(bw).chips.includes("Сабина"));

        // переподключение: та же сессия, новый id
        const victim = phones[2];
        const session = String(victim.w.sessionStorage.getItem("pq-battle-session") || "");
        victim.dom.window.close();
        phones[2] = await openPhone(base, code, "Меруерт", { session });
        await wait(1500);
        lobby = lobbyState(bw);
        ok("переподключение не плодит дубль", lobby.count === 7 && lobby.chips.filter((n) => n === "Меруерт").length === 1,
            `${lobby.count}: ${lobby.chips.join(", ")}`);

        console.log("\n== Старт игры и ответы ==");
        bw.document.getElementById("pq-lobby-start").click();
        await wait(800);
        const teams = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.map(c => ({ name: c.name, players: c.players.map(p => p.name) })))`));
        const roster = teams.reduce((acc, c) => acc.concat(c.players), []);
        ok("в игру попали все 7 участников", roster.length === 7, roster.join(", "));
        ok("участники распределены по экипажам", teams.length === 2 && teams.every((c) => c.players.length > 0),
            teams.map((c) => `${c.name}: ${c.players.join("/")}`).join(" | "));

        const q1 = phones[0].w.document.querySelectorAll("#bp-opts .bp-opt").length;
        ok("вопрос пришёл на телефоны", q1 >= 2, String(q1));

        // опоздавший после старта
        const latePhone = await openPhone(base, code, "Опоздавший");
        phones.push(latePhone);
        await wait(1500);
        const boardText = bw.document.getElementById("pq-battle").textContent;
        const toastText = Array.from(bw.document.querySelectorAll(".pq-battle-toast")).map((t) => t.textContent).join(" ");
        ok("доска сообщает об опоздавшем", /после старта/i.test(toastText), toastText.slice(0, 80));
        const roster2 = JSON.parse(bw.eval(`JSON.stringify(PQTeamBattle.state.crews.reduce((a, c) => a.concat(c.players.map(p => p.name)), []))`));
        ok("опоздавший не попал в текущую игру", roster2.length === 7 && !roster2.includes("Опоздавший"));

        // отвечают шестеро из семи — счётчик должен это показать
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
        const reveal = bw.document.getElementById("pq-battle").textContent;
        ok("доска дождалась ответов всех", /экипаж/i.test(reveal));
        ok("телефоны получили разбор", phones.slice(0, 7).every((p) => /Верно|Неверно/.test(p.w.document.getElementById("bp-body").textContent)));

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

        const errors = board.errors.concat(...phones.map((p) => p.errors)).filter((e) => !/Not implemented|Could not parse CSS/.test(e));
        ok("ошибок консоли нет", errors.length === 0, errors.slice(0, 3).join(" | "));
    } catch (err) {
        ok("тест выполнился без исключений", false, String(err && err.message || err));
    } finally {
        try { if (board) board.dom.window.close(); } catch (_) {}
        phones.forEach((p) => { try { p.dom.window.close(); } catch (_) {} });
        server.close();
    }

    const failed = results.filter((r) => r[0] === "FAIL");
    console.log(`\nИтог: ${results.length - failed.length}/${results.length} проверок пройдено`);
    if (failed.length) process.exitCode = 1;
})();
