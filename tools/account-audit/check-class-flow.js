#!/usr/bin/env node
/* Сквозная проверка «класс → коды → вход ученика → назначение → результат»
   в headless-DOM (jsdom). Поднимает локальный сервер, открывает play.html,
   работает через настоящие кнопки и функции платформы.

   Запуск: npm i jsdom && node tools/account-audit/check-class-flow.js */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = path.resolve(__dirname, "..", "..");
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};
const noop = () => {};
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const results = [];
function ok(name, cond, extra = "") {
  results.push([cond ? "OK " : "FAIL", name, extra]);
  if (cond) console.log(`OK   ${name}${extra ? " · " + extra : ""}`);
  else console.log(`FAIL ${name}${extra ? " · " + extra : ""}`);
  return cond;
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
  return new Promise(resolve => server.listen(0, "127.0.0.1", () => resolve(server)));
}

/* ---------- страница ---------- */

function fakeCanvasContext() {
  return new Proxy({}, {
    get: (target, key) => {
      if (key === "canvas") return { width: 760, height: 270 };
      if (key === "measureText") return () => ({ width: 10 });
      if (key === "getImageData") return () => ({ data: [] });
      if (/^create(Linear|Radial)Gradient$|^createPattern$/.test(String(key))) return () => ({ addColorStop: noop });
      return noop;
    },
    set: (target, key, value) => { target[key] = value; return true; }
  });
}

function installPhoneStubs(w) {
  // BroadcastChannel в jsdom нет: даём минимальную реализацию «в одном окне».
  const hubs = Object.create(null);
  w.BroadcastChannel = function BroadcastChannelPolyfill(name) {
    this.name = name;
    this.onmessage = null;
    this.closed = false;
    (hubs[name] = hubs[name] || []).push(this);
  };
  w.BroadcastChannel.prototype.postMessage = function postMessage(data) {
    const list = hubs[this.name] || [];
    const from = this;
    setTimeout(() => {
      list.forEach(other => {
        if (other === from || other.closed || typeof other.onmessage !== "function") return;
        try { other.onmessage({ data }); } catch (_) {}
      });
    }, 0);
  };
  w.BroadcastChannel.prototype.close = function close() { this.closed = true; };
  // PeerJS-брокер в песочнице недоступен: заглушка, чтобы комната работала локально.
  w.Peer = function PeerFake(id) { this.id = id; this.open = false; };
  w.Peer.prototype.on = function on() { return this; };
  w.Peer.prototype.connect = function connect() { return { on: noop, open: false, close: noop, send: noop }; };
  w.Peer.prototype.destroy = noop;
  w.Peer.prototype.close = noop;
}

async function openPage(url, seed = null, extra = null) {
  const dom = await JSDOM.fromURL(url, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    beforeParse(w) {
      installPhoneStubs(w);
      if (seed) seed(w);
      if (extra) extra(w);
      w.HTMLCanvasElement.prototype.getContext = () => fakeCanvasContext();
      w.HTMLCanvasElement.prototype.toDataURL = () => "data:image/png;base64,";
      w.matchMedia = w.matchMedia || (() => ({
        matches: false, addListener: noop, removeListener: noop,
        addEventListener: noop, removeEventListener: noop
      }));
      w.scrollTo = noop;
      w.alert = noop;
      w.confirm = () => true;
      w.prompt = () => "";
      w.print = noop;
      w.HTMLElement.prototype.scrollIntoView = noop;
      w.console.error = (...args) => console.log("  [console.error]", String(args[0]).slice(0, 220));
      w.console.warn = noop;
      w.console.log = noop;
    }
  });
  return dom;
}

async function boot(dom, timeout = 20000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const ready = dom.window.eval(
      'typeof RPG !== "undefined" && typeof Storage !== "undefined" && typeof AssignHQ !== "undefined" && typeof TeacherHQ !== "undefined"'
    );
    if (ready) {
      await wait(400);
      return true;
    }
    await wait(200);
  }
  return false;
}

function seedAccount(acc, settings = {}) {
  return w => {
    w.localStorage.setItem("physicsquest_account_v1", JSON.stringify(acc));
    w.localStorage.setItem("physicsquest_global_settings", JSON.stringify(Object.assign({
      language: "ru",
      playerName: acc.student && acc.student.name || "",
      playerCode: acc.student && acc.student.studentCode || "",
      playerId: acc.student && acc.student.playerId || "player_seed"
    }, settings)));
  };
}

const TEACHER_ACC = {
  onboarded: true,
  role: "teacher",
  language: "ru",
  student: { name: "", studentCode: "TCH1", playerId: "player_teacher", grade: 8, className: "" },
  teacher: { name: "Учитель", pin: "2026", loggedIn: true }
};

(async () => {
  const server = await startServer();
  const base = `http://127.0.0.1:${server.address().port}`;
  const pages = [];
  try {
    /* ================= 1. Учитель: класс по списку → коды --------------- */
    console.log("\n== Учитель: список класса и коды ==");
    const teacherDom = await openPage(`${base}/play.html?grade=8`, seedAccount(TEACHER_ACC));
    pages.push(teacherDom);
    const t = teacherDom.window;
    if (!await boot(teacherDom)) throw new Error("play.html не загрузился (учитель)");

    t.eval('AssignHQ.openClassModal("")');
    const modal = t.document.getElementById("as-modal");
    ok("окно нового класса открылось", !!modal && modal.hidden === false);

    const names = ["Айдана Серикова", "Данияр Ахметов", "Меруерт Оспанова", "Алия Серикова", "Айдана Серикова", "Ерасыл Жумабаев"];
    t.document.getElementById("as-class-name").value = "8А";
    t.document.getElementById("as-class-students").value = names.join("\n");
    t.document.querySelector('[data-as-action="fill-codes"]').click();
    const filled = t.document.getElementById("as-class-students").value.split("\n");
    ok("кнопка «Выдать коды» заполнила каждую строку", filled.length === names.length, String(filled.length));
    const filledCodes = filled.map(line => (line.split("|")[1] || "").trim());
    ok("все коды по 4 символа", filledCodes.every(code => /^[A-HJ-NP-Z2-9]{4}$/.test(code)), filledCodes.join(" "));
    ok("коды в списке уникальны", new Set(filledCodes).size === filledCodes.length);

    t.document.querySelector('[data-as-action="save-class"]').click();
    await wait(300);
    const classes = JSON.parse(t.eval("JSON.stringify(Storage.getClasses())"));
    ok("класс сохранён", classes.length === 1 && classes[0].students.length === 6, `${classes.length} кл. / ${classes[0] ? classes[0].students.length : 0} уч.`);
    const cls = classes[0] || { students: [] };
    const codes = cls.students.map(st => st.studentCode);
    ok("коды сохранены в классе", codes.every(code => /^[A-HJ-NP-Z2-9]{4}$/.test(code)) && new Set(codes).size === codes.length);
    ok("одноимённые ученики сохранились оба", cls.students.filter(st => st.name === "Айдана Серикова").length === 2);
    const codeTable = t.document.querySelectorAll("#as-modal-body .as-code-table tbody tr");
    ok("после сохранения открылся список кодов", codeTable.length === 6, String(codeTable.length));
    const links = [...t.document.querySelectorAll("#as-modal-body [data-action='copy-student-link'], #as-modal-body [data-as-action='copy-student-link']")]
      .map(btn => btn.getAttribute("data-link"));
    ok("у каждого ученика есть ссылка входа", links.length === 6 && links.every(link => /[?&]code=[A-Z0-9]{4}/.test(link)), links[0] || "—");
    ok("в ссылке есть имя ученика", links.some(link => /name=/.test(link)));

    /* ================= 1b. Код для одного ученика в мастере ============= */
    t.eval('AssignHQ.openWizard()');
    t.eval('AssignHQ.wizard.mode = "solo"; AssignHQ.renderWizard()');
    t.document.querySelector('[data-as-action="wiz-gen-code"]').click();
    const soloCode = t.document.getElementById("as-wiz-code").value;
    ok("мастер выдаёт код одному ученику", /^[A-HJ-NP-Z2-9]{4}$/.test(soloCode) && !codes.includes(soloCode), soloCode);
    t.eval('AssignHQ.close()');

    /* ================= 2. Назначение всему классу ----------------------- */
    console.log("\n== Назначение классу ==");
    const assignment = JSON.parse(t.eval(`JSON.stringify(Storage.addAssignmentsForClass(${JSON.stringify(cls.id)}, "g8:1"))`));
    ok("назначение создано на каждого ученика", assignment.length === 6, String(assignment.length));
    const assignmentCode = assignment[0] && assignment[0].assignmentCode;
    ok("у назначения короткий код", /^Q8[0-9A-Z]{5}$/.test(assignmentCode || ""), assignmentCode || "—");
    const batches = JSON.parse(t.eval("JSON.stringify(TeacherHQ.batches().map(b => ({code: b.code, total: b.total, done: b.done})))"));
    ok("журнал видит партию назначения", batches.some(b => b.code === assignmentCode && b.total === 6), JSON.stringify(batches));

    /* ================= 3. Ученик: вход по карточке ---------------------- */
    console.log("\n== Ученик: вход по коду учителя ==");
    const student = cls.students[0];
    const studentLink = links[0];
    const studentDom = await openPage(studentLink);
    pages.push(studentDom);
    const s = studentDom.window;
    if (!await boot(studentDom)) throw new Error("play.html не загрузился (ученик)");
    const studentAcc = JSON.parse(s.eval("JSON.stringify(PQAccount.get())"));
    ok("ученик вошёл под кодом из карточки", studentAcc.student.studentCode === student.studentCode, studentAcc.student.studentCode);
    ok("имя подставилось из карточки", studentAcc.student.name === student.name, studentAcc.student.name);
    ok("игровые настройки получили тот же код", JSON.parse(s.eval("JSON.stringify(Storage.getCurrentPlayer())")).playerCode === student.studentCode);

    const attached = JSON.parse(s.eval(`JSON.stringify(Storage.attachAssignmentCode(${JSON.stringify(assignmentCode)}))`));
    ok("назначение подключилось по коду", attached.added.length === 1, String(attached.added.length));
    ok("назначение привязано к коду ученика", attached.added[0] && attached.added[0].studentCode === student.studentCode,
      attached.added[0] ? attached.added[0].studentCode : "—");

    const run = s.eval(`Storage.addPlaythrough({ grade: 8, level: "g8:1", victory: true, score: 720, tasksSolved: 9, tasksAttempted: 10, assignmentCode: ${JSON.stringify(assignmentCode)} }) && "ok"`);
    ok("прогон записан в историю", run === "ok");
    const resultFound = s.eval(`!!Storage.getAssignmentResult(Storage.getAssignments().find(a => a.assignmentCode === ${JSON.stringify(assignmentCode)}))`);
    ok("результат виден по назначению", resultFound === true);

    const resultCode = s.eval(`(() => {
      const e = {
        studentCode: ${JSON.stringify(student.studentCode)},
        name: ${JSON.stringify(student.name)},
        levelId: "g8:1",
        victory: true,
        solved: 9,
        attempted: 10,
        score: 720,
        date: new Date().toISOString(),
        assignmentCode: ${JSON.stringify(assignmentCode)}
      };
      e.code = TeacherHQ.buildCode(e);
      return e.code;
    })()`);
    ok("код результата сформирован", /^R2-/.test(resultCode), resultCode);

    /* ================= 4. Возврат результата учителю -------------------- */
    console.log("\n== Возврат результата в журнал ==");
    t.eval(`TeacherHQ.importCodes(${JSON.stringify(resultCode)})`);
    const imported = JSON.parse(t.eval("JSON.stringify(TeacherHQ.lastImport)"));
    ok("код результата принят", imported.added === 1, JSON.stringify(imported));
    const roster = JSON.parse(t.eval(`JSON.stringify(TeacherHQ.roster(${JSON.stringify(cls.id)}).map(r => ({ code: r.code, name: r.name, results: r.results.length, done: r.doneCount })))`));
    const row = roster.find(r => r.code === student.studentCode) || {};
    ok("результат попал к своему ученику", row.results === 1, JSON.stringify(row));
    ok("назначение отмечено выполненным ровно один раз", row.done === 1, String(row.done));
    const batchDone = JSON.parse(t.eval(`JSON.stringify(TeacherHQ.batches(${JSON.stringify(cls.id)}).map(b => ({ code: b.code, done: b.done })))`));
    ok("партия назначения показывает ровно 1 сдачу", batchDone.some(b => b.code === assignmentCode && b.done === 1), JSON.stringify(batchDone));

    /* ================= 5. Старый код P7X4K ----------------------------- */
    console.log("\n== Совместимость старого P-кода ==");
    const legacyCode = t.eval(`(() => {
      const e = { studentCode: "P${student.studentCode}", name: ${JSON.stringify(student.name)}, levelId: "g8:1", victory: false, solved: 4, attempted: 8, score: 300, date: new Date().toISOString() };
      e.code = TeacherHQ.buildCode(e);
      return e.code;
    })()`);
    t.eval(`TeacherHQ.importCodes(${JSON.stringify(legacyCode)})`);
    const roster2 = JSON.parse(t.eval(`JSON.stringify(TeacherHQ.roster(${JSON.stringify(cls.id)}).map(r => ({ code: r.code, results: r.results.length })))`));
    const row2 = roster2.find(r => r.code === student.studentCode) || {};
    ok("старый P-код засчитан тому же ученику", row2.results === 2, JSON.stringify(row2));

    /* ================= 6. Вход по карточке на «старом» устройстве ------- */
    console.log("\n== Карточка на устройстве с прежним кодом ==");
    const oldCode = "OLD1";
    const oldAcc = {
      onboarded: true, role: "student", language: "ru",
      student: { name: student.name, studentCode: oldCode, playerId: "player_old", grade: 8, className: "8А" },
      teacher: { name: "", pin: "", loggedIn: false }
    };
    const oldSeed = w => {
      seedAccount(oldAcc)(w);
      w.localStorage.setItem("physicsquest8_playthrough_history", JSON.stringify([
        { id: "run_old", grade: 8, level: "g8:1", playerCode: oldCode, name: student.name, victory: true, score: 500, tasksSolved: 8, tasksAttempted: 10, date: "2026-10-20T10:00:00.000Z" }
      ]));
    };
    const switchDom = await openPage(studentLink, oldSeed);
    pages.push(switchDom);
    if (!await boot(switchDom)) throw new Error("play.html не загрузился (старое устройство)");
    const switched = JSON.parse(switchDom.window.eval("JSON.stringify(PQAccount.get())"));
    ok("код заменился кодом учителя", switched.student.studentCode === student.studentCode, switched.student.studentCode);
    ok("прежний код сохранён в истории профиля", (switched.student.previousCodes || []).includes(oldCode), JSON.stringify(switched.student.previousCodes || []));
    ok("перенос истории отмечен", switched.codeSwitched && switched.codeSwitched.results === 1, JSON.stringify(switched.codeSwitched));
    const migrated = JSON.parse(switchDom.window.eval('JSON.stringify(Storage.getHistory().map(r => r.playerCode))'));
    ok("старый прогон переписан на новый код", migrated[0] === student.studentCode, JSON.stringify(migrated));

    const otherDom = await openPage(studentLink, seedAccount({
      onboarded: true, role: "student", language: "ru",
      student: { name: "Данияр Ахметов", studentCode: "OLD2", playerId: "player_other", grade: 8, className: "" },
      teacher: { name: "", pin: "", loggedIn: false }
    }));
    pages.push(otherDom);
    if (!await boot(otherDom)) throw new Error("play.html не загрузился (чужое устройство)");
    const foreign = JSON.parse(otherDom.window.eval("JSON.stringify(PQAccount.get())"));
    ok("чужая карточка не меняет профиль", foreign.student.studentCode === "OLD2", foreign.student.studentCode);
    ok("конфликт кодов зафиксирован", !!foreign.codeConflict, JSON.stringify(foreign.codeConflict));

    /* ================= 7. Телефоны: комната и лобби --------------------- */
    console.log("\n== Подключение телефонов: комната ==");
    const p = t;
    p.eval("window.PQ_BATTLE_LOCAL_ONLY = true");
    p.eval(`window.__joined = []; window.__answers = []; window.__msgs = [];
      window.__room = PQBattleRoom.create("TST1", {
        onJoin: p => window.__joined.push(p),
        onLeave: () => {},
        onAnswer: (id, opt) => window.__answers.push({ id: id, opt: opt }),
        onStatus: (mode) => { window.__mode = mode; }
      });
      window.__phone = PQBattleRoom.join("TST1", "Айдана", {
        onData: m => window.__msgs.push(m),
        onMode: mode => { window.__phoneMode = mode; },
        onStatus: s => { window.__phoneStatus = s; }
      });`);
    await wait(900);
    const joined = JSON.parse(p.eval("JSON.stringify(window.__joined)"));
    ok("доска увидела телефон", joined.length === 1 && joined[0].name === "Айдана", JSON.stringify(joined));
    const phoneMode = p.eval("window.__phoneMode");
    ok("телефон подключился (локальный режим песочницы)", phoneMode === "local", phoneMode);

    p.eval('window.__room.broadcast({ t: "lobby", n: 3 })');
    await wait(100);
    const lobbyMsgs = JSON.parse(p.eval("JSON.stringify(window.__msgs.filter(m => m.t === 'lobby'))"));
    ok("телефон получает число игроков", lobbyMsgs.length === 1 && lobbyMsgs[0].n === 3, JSON.stringify(lobbyMsgs));

    p.eval('window.__phone.send({ t: "answer", opt: 2 })');
    await wait(150);
    const answers = JSON.parse(p.eval("JSON.stringify(window.__answers)"));
    ok("ответ телефона дошёл до доски", answers.length === 1 && answers[0].opt === 2, JSON.stringify(answers));

    p.eval(`window.__room.send(window.__phone.id, { t: "reveal", right: true, correct: 2 })`);
    await wait(120);
    const reveals = JSON.parse(p.eval("JSON.stringify(window.__msgs.filter(m => m.t === 'reveal'))"));
    ok("персональный ответ-итог дошёл до телефона", reveals.length === 1 && reveals[0].right === true, JSON.stringify(reveals));

    const lobbyBroadcast = p.eval(`(() => {
      const Battle = window.PQTeamBattle;
      if (!Battle) return "no-battle";
      window.__bcast = [];
      Battle.room = { broadcast: m => window.__bcast.push(m) };
      Battle.pendingPlayers = [{ id: "p1", name: "А" }, { id: "p2", name: "Б" }];
      Battle.refreshLobby();
      return JSON.stringify(window.__bcast);
    })()`);
    ok("доска рассылает лобби при входе игроков", /"t":"lobby"/.test(lobbyBroadcast) && /"n":2/.test(lobbyBroadcast), lobbyBroadcast);

    /* ================= 8. Кнопки «Коды» и «Новые коды» ================= */
    console.log("\n== Окно кодов из карточки класса ==");
    t.eval('AssignHQ.close()');
    t.document.querySelector('[data-as-action="class-codes"]').click();
    await wait(120);
    const reopened = t.document.querySelectorAll("#as-modal-body .as-code-table tbody tr").length;
    ok("кнопка «Коды» на карточке класса открывает список", reopened === 6, String(reopened));
    const before = JSON.parse(t.eval(`JSON.stringify(Storage.getClasses()[0].students.map(s => s.studentCode))`));
    t.document.querySelector('[data-as-action="regen-class-codes"]').click();
    await wait(200);
    const after = JSON.parse(t.eval(`JSON.stringify(Storage.getClasses()[0].students.map(s => s.studentCode))`));
    ok("«Новые коды» меняют коды всему классу", after.every((code, i) => code && code !== before[i]), after.join(" "));
    ok("новые коды уникальны", new Set(after).size === after.length);
    ok("результаты уже сданных работ остались", JSON.parse(t.eval("JSON.stringify(TeacherHQ.allResults().length)")) >= 2);
    const assignmentCodesAfter = JSON.parse(t.eval("JSON.stringify(Storage.getAssignments().map(a => a.studentCode))"));
    ok("назначения переведены на новые коды", assignmentCodesAfter.every(code => after.includes(code)), assignmentCodesAfter.join(" "));
    const rosterAfter = JSON.parse(t.eval(`JSON.stringify(TeacherHQ.roster(${JSON.stringify(cls.id)}).map(r => ({ code: r.code, results: r.results.length, done: r.doneCount })))`));
    const movedRow = rosterAfter.find(r => r.code === after[0]) || {};
    ok("сданные работы остались у своего ученика", movedRow.results === 2 && movedRow.done === 1, JSON.stringify(movedRow));
    t.eval('AssignHQ.close()');

    // Ручная правка кода в классе: назначения и работы переезжают на новый код.
    const manualCode = "ZZY1";
    t.eval(`AssignHQ.openClassModal(${JSON.stringify(cls.id)})`);
    const taEdit = t.document.getElementById("as-class-students");
    const editLines = taEdit.value.split("\n");
    editLines[0] = editLines[0].replace(/\|\s*[A-Z0-9]{4}\s*$/, "| " + manualCode);
    taEdit.value = editLines.join("\n");
    t.document.querySelector('[data-as-action="save-class"]').click();
    await wait(250);
    const manualCodes = JSON.parse(t.eval(`JSON.stringify(Storage.getClasses()[0].students.map(s => s.studentCode))`));
    ok("ручная правка кода сохранена", manualCodes[0] === manualCode, manualCodes[0]);
    const manualAssignments = JSON.parse(t.eval("JSON.stringify(Storage.getAssignments().filter(a => a.studentCode === 'ZZY1').length)"));
    ok("назначение переведено на вписанный вручную код", manualAssignments === 1, String(manualAssignments));
    const manualResults = JSON.parse(t.eval("JSON.stringify(TeacherHQ.allResults().filter(r => r.studentCode === 'ZZY1').length)"));
    ok("сданные работы переведены на вписанный вручную код", manualResults === 2, String(manualResults));
    t.eval('AssignHQ.close()');

    /* ================= 9. Старая вкладка «Классы» ======================= */
    console.log("\n== Старая вкладка «Классы» ==");
    const legacyDom = await openPage(`${base}/play.html?grade=8`, seedAccount(TEACHER_ACC));
    pages.push(legacyDom);
    if (!await boot(legacyDom)) throw new Error("play.html не загрузился (старая вкладка)");
    const l = legacyDom.window;
    l.document.getElementById("class-name").value = "9Б";
    l.document.getElementById("class-students").value = "Аружан\nЕржан\nАружан";
    l.document.getElementById("btn-fill-class-codes").click();
    const legacyFilled = l.document.getElementById("class-students").value.split("\n");
    ok("кнопка в старой вкладке выдаёт коды", legacyFilled.every(line => /\| [A-Z0-9]{4}$/.test(line)), legacyFilled.join(" / "));
    l.document.getElementById("btn-save-class").click();
    await wait(200);
    const legacyClasses = JSON.parse(l.eval("JSON.stringify(Storage.getClasses())"));
    ok("старая вкладка сохраняет всех, включая одноимённых", legacyClasses.length === 1 && legacyClasses[0].students.length === 3,
      String(legacyClasses[0] ? legacyClasses[0].students.length : 0));
    const legacyCodes = legacyClasses[0].students.map(st => st.studentCode);
    ok("коды старой вкладки уникальны", new Set(legacyCodes).size === legacyCodes.length, legacyCodes.join(" "));
    const legacyHtml = l.document.getElementById("classes-list").innerHTML;
    ok("коды видны в списке класса", legacyCodes.every(code => legacyHtml.includes(code)));

    console.log("");
  } catch (error) {
    console.error("FATAL", error);
    results.push(["FAIL", "исключение: " + error.message, ""]);
  } finally {
    pages.forEach(dom => { try { dom.window.close(); } catch (_) {} });
    server.close();
  }

  const failed = results.filter(r => r[0] === "FAIL");
  console.log(`\n${results.length - failed.length}/${results.length} проверок пройдено`);
  process.exit(failed.length ? 1 : 0);
})();
