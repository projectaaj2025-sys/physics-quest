#!/usr/bin/env node
/* Проверка выдачи кодов классу (без браузера и без зависимостей).

   Что проверяется:
   • «только имена» → каждому ученику выдаётся уникальный 4-символьный код;
   • одинаковые имена (две «Айданы») не теряются;
   • вписанные вручную коды сохраняются;
   • дубли и конфликты кодов с другими классами перевыпускаются;
   • старые коды вида P7X4K считаются тем же учеником в назначениях;
   • в интерфейсе есть выдача кодов, список класса и ссылки входа.

   Запуск: node tools/account-audit/check-roster-codes.js */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");
const read = file => fs.readFileSync(path.join(ROOT, file), "utf8");

const results = [];
function ok(name, cond, extra = "") {
  results.push([cond ? "OK " : "FAIL", name, extra]);
  return cond;
}

/* ---------- изолированное окружение Storage ---------- */

function makeStorage({ classes = [], assignments = [], settings = {}, grade = 8 } = {}) {
  const store = new Map();
  const localStorage = {
    getItem: k => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
    clear: () => store.clear(),
    key: i => [...store.keys()][i] ?? null,
    get length() { return store.size; }
  };
  localStorage.setItem("physicsquest_unified_classes", JSON.stringify(classes));
  localStorage.setItem("physicsquest_unified_assignments", JSON.stringify(assignments));
  localStorage.setItem("physicsquest_global_settings", JSON.stringify(settings));
  const I18n = { currentLang: "ru" };
  const window = { CURRENT_GRADE: grade, localStorage, PQAccount: null };
  window.window = window;
  const context = vm.createContext({
    window,
    localStorage,
    document: { getElementById: () => null, addEventListener() {}, querySelectorAll: () => [] },
    I18n,
    console,
    Math,
    JSON,
    Date,
    Error,
    Object,
    Array,
    String,
    Number,
    RegExp,
    parseInt,
    parseFloat,
    isNaN,
    Set,
    Map,
    setTimeout,
    clearTimeout,
    parseLevelRef(ref, g) {
      const raw = String(ref == null ? "" : ref);
      if (raw.startsWith("custom:")) return { canonical: raw, grade: Number(g) || 8, levelId: raw, isCustom: true };
      const m = raw.match(/^g([789]):(\d+)$/);
      if (m) return { canonical: raw, grade: Number(m[1]), levelId: Number(m[2]), isCustom: false };
      const n = parseInt(raw, 10);
      return { canonical: `g${Number(g) || 8}:${n}`, grade: Number(g) || 8, levelId: n, isCustom: false };
    }
  });
  vm.runInContext(read("shared/storage.js"), context, { filename: "shared/storage.js" });
  const Storage = vm.runInContext("Storage", context);
  return { Storage, window, localStorage };
}

const NAMES = [
  "Айдана Серикова", "Данияр Ахметов", "Меруерт Оспанова", "Алия Серикова",
  "Айдана Серикова", "Ерасыл Жумабаев", "Томирис Бекова", "Алихан Нурланов",
  "Сабина Каримова", "Диас Омаров", "Камила Абдрахман", "Нурсултан Ермек",
  "Жанна Смагулова", "Арман Кенжебаев", "Аружан Байжан", "Ержан Мухамед",
  "Мадина Тулеген", "Санжар Ахмет", "Инкар Совет", "Бауыржан Оспан",
  "Гульнара Ким", "Тимур Ли", "Асель Назар", "Рустем Жакупов",
  "Айгерим Сейтказы", "Мирас Кусаин", "Динара Алимова", "Азамат Бектуров",
  "Карина Юсупова", "Олжас Досым"
];

const ALPHABET_RE = /^[A-HJ-NP-Z2-9]{4}$/;

/* 1. Коды для списка «только имена» */
{
  const { Storage } = makeStorage();
  const students = Storage.assignStudentCodes(NAMES.map(name => ({ name })));
  const codes = students.map(st => st.studentCode);
  ok("30 ученикам выданы коды", codes.every(code => ALPHABET_RE.test(code)), codes.slice(0, 4).join(" "));
  ok("коды в классе не повторяются", new Set(codes).size === codes.length, `${new Set(codes).size}/${codes.length}`);
  ok("одинаковые имена не склеиваются", students.filter(st => st.name === "Айдана Серикова").length === 2);
  ok("имена сохранены без изменений", students[0].name === "Айдана Серикова");
}

/* 2. Ручные коды сохраняются, дубли перевыпускаются */
{
  const { Storage } = makeStorage();
  const students = Storage.assignStudentCodes([
    { name: "Айдана", studentCode: "K7M2" },
    { name: "Данияр", studentCode: "k7m2" },
    { name: "Меруерт", studentCode: "P7X4K" }
  ]);
  ok("вписанный код сохранён", students[0].studentCode === "K7M2", students[0].studentCode);
  ok("повтор кода перевыпущен", students[1].studentCode !== "K7M2" && ALPHABET_RE.test(students[1].studentCode), students[1].studentCode);
  ok("старый P-код приведён к 4 символам", students[2].studentCode === "7X4K", students[2].studentCode);
}

/* 3. Конфликт с другим классом: одно имя — тот же ученик, другое имя — новый код */
{
  const classes = [
    {
      id: "class_a", name: "8А", grade: 8, students: [
        { name: "Айдана", studentCode: "K7M2" },
        { name: "Данияр", studentCode: "LBA6" }
      ]
    }
  ];
  const { Storage } = makeStorage({ classes });
  const same = Storage.assignStudentCodes([{ name: "Айдана", studentCode: "K7M2" }]);
  ok("тот же ученик с коротким именем сохраняет код", same[0].studentCode === "K7M2", same[0].studentCode);
  const full = Storage.assignStudentCodes([{ name: "Айдана Серикова", studentCode: "K7M2" }]);
  ok("полное имя и короткое — один ученик", full[0].studentCode === "K7M2", full[0].studentCode);
  const conflict = Storage.assignStudentCodes([{ name: "Алия", studentCode: "LBA6" }]);
  ok("чужой код не отдаётся другому имени", conflict[0].studentCode !== "LBA6" && ALPHABET_RE.test(conflict[0].studentCode), conflict[0].studentCode);
}

/* 4. addClass: сохранение списка и уникальность */
{
  const { Storage } = makeStorage();
  const cls = Storage.addClass({ name: "9Б", students: NAMES.map(name => ({ name })) });
  ok("класс сохранён со всеми учениками", !!cls && cls.students.length === 30, cls ? String(cls.students.length) : "null");
  const codes = (cls ? cls.students : []).map(st => st.studentCode);
  ok("addClass выдал уникальные коды", new Set(codes).size === codes.length);
  const second = Storage.addClass({ name: "9В", students: NAMES.slice(0, 10).map(name => ({ name })) });
  const all = Storage.getClasses().flatMap(c => c.students.map(st => st.studentCode));
  ok("коды двух классов не пересекаются", new Set(all).size === all.length, `${new Set(all).size}/${all.length}`);
  ok("второй класс создан", !!second && second.students.length === 10);
}

/* 5. Старые P-коды в назначениях и истории */
{
  const { Storage } = makeStorage({
    settings: { playerCode: "P7X4K", playerName: "Старый Ученик", playerId: "player_x" },
    assignments: [{
      id: "a1", studentName: "Старый Ученик", studentCode: "7X4K",
      levelId: "g8:1", assignmentCode: "Q801ABC", assignedAt: "2026-11-01T10:00:00.000Z"
    }]
  });
  const player = Storage.getCurrentPlayer();
  ok("текущий игрок получает 4-символьный код", player.playerCode === "7X4K", player.playerCode);
  const record = { level: "g8:1", playerCode: "P7X4K", name: "Старый Ученик", victory: true, date: "2026-11-02T10:00:00.000Z" };
  const assignment = Storage.getAssignments()[0];
  ok("назначение узнаёт старый P-код", Storage.assignmentRunMatches(assignment, record, "Q801ABC"));
  const entry = Storage.normalizePlaythrough(record);
  ok("новая запись истории хранит код из 4 символов", entry.playerCode === "7X4K", entry.playerCode);
  const attached = Storage.attachAssignmentCode("Q801XYZ");
  ok("назначение по коду подключается к 4-символьному коду",
    attached.added.length === 1 && attached.added[0].studentCode === "7X4K",
    attached.added[0] ? attached.added[0].studentCode : "—");
}

/* 6. Интерфейс: выдача кодов, список класса, ссылки входа */
{
  const assign = read("shared/rpg-assign.js");
  ok("в классе есть кнопка «Выдать коды»", /fillClassCodes\(\)\s*\{/.test(assign) && /data-as-action="fill-codes"/.test(assign));
  ok("есть окно кодов класса", /openClassCodes\(id\)\s*\{/.test(assign) && /as-code-table/.test(assign));
  ok("есть ссылка входа ученика", /studentLoginLink\(cls, student\)\s*\{/.test(assign) && /&code=\$\{encodeURIComponent\(code\)\}/.test(assign));
  ok("есть CSV и печать карточек", /downloadClassCodes\(id\)/.test(assign) && /print-class-codes/.test(assign));
  ok("мастер назначения умеет выдать код одному ученику",
    /wiz-gen-code/.test(assign) && /makeUniqueStudentCode\(used\)/.test(assign));
  ok("код класса не сохраняется без уникальности", /assignStudentCodes\(students/.test(assign));

  const teacher = read("shared/teacher.js");
  ok("в старой вкладке «Классы» есть выдача кодов", /fillStudentCodes\(\)\s*\{/.test(teacher));
  ok("кнопка выдачи есть в play.html", /btn-fill-class-codes/.test(read("play.html")));

  const data = read("shared/rpg-data.js");
  ["asGiveCodes", "asCodesTitle", "asCodesScreenHint", "asCopyCodes", "asCsvCodes", "asPrintCodes", "asRegenCodes"]
    .forEach(key => {
      const count = (data.match(new RegExp(`\\b${key}\\s*:`, "g")) || []).length;
      ok(`подпись ${key} есть на RU/KK/EN`, count >= 3, String(count));
    });

  const account = read("shared/account.js");
  ok("вход по карточке переносит историю на новый код", /migrateLocalHistoryCode\(currentCode, linkCode\)/.test(account));
  ok("вход по карточке помнит прежние коды", /previousCodes/.test(account));
  ok("чужая карточка не переключает профиль", /codeConflict/.test(account));

  const hq = read("shared/rpg-teacher.js");
  ok("журнал сверяет старые коды через sameStudentCode",
    /resultMatchesAssignmentStudent\(assignment, result\)/.test(hq)
    && /Storage\.sameStudentCode\(assignmentCode, resultCode\)/.test(hq)
    && (hq.match(/resultMatchesAssignmentStudent\(a, r\)/g) || []).length >= 2);

  const battle = read("shared/team-battle.js");
  const phone = read("shared/battle-phone.js");
  ok("доска сообщает телефонам число игроков", /broadcast\(\{ t: "lobby", n: players\.length \}\)/.test(battle));
  ok("телефон показывает число игроков из комнаты", /msg\.t === "start"\) renderWait\(msg\.n\)/.test(phone));
  ok("телефон не пишет «1 игрок» без данных", /Number\.isFinite\(players\) && players > 0/.test(phone));
  ok("fallback не создаёт вторую локальную комнату", /if \(!localRoom\) localRoom = createLocalRoom/.test(read("shared/battle-room.js")));
}

const failed = results.filter(r => r[0] === "FAIL");
results.forEach(([status, name, extra]) => console.log(`${status} ${name}${extra ? " · " + extra : ""}`));
console.log(`\n${results.length - failed.length}/${results.length} проверок пройдено`);
process.exit(failed.length ? 1 : 0);
