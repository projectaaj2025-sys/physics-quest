#!/usr/bin/env node
/* Проверка единого 4-символьного кода ученика (без браузера и без зависимостей).
   Загружает shared/account.js в изолированный VM-контекст с заглушкой localStorage
   и проверяет: новый код, старый «Pxxxx», ручной ввод, вывод кода на экране.

   Запуск: node tools/account-audit/check-codes.js */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");
const SRC = fs.readFileSync(path.join(ROOT, "shared", "account.js"), "utf8");

const results = [];
function ok(name, cond, extra = "") {
  results.push([cond ? "OK " : "FAIL", name, extra]);
  return cond;
}

function makeContext({ settings = null, account = null, search = "", hash = "" } = {}) {
  const store = new Map();
  const localStorage = {
    getItem: k => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
    clear: () => store.clear(),
    key: i => [...store.keys()][i] ?? null,
    get length() { return store.size; }
  };
  if (settings) {
    localStorage.setItem("physicsquest_settings", JSON.stringify(settings));
    localStorage.setItem("physicsquest8_settings", JSON.stringify(settings));
  }
  if (account) localStorage.setItem("physicsquest_account_v1", JSON.stringify(account));

  const noopEl = () => ({
    style: {}, dataset: {}, classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    appendChild() {}, removeChild() {}, remove() {}, addEventListener() {},
    querySelector: () => null, querySelectorAll: () => [], insertAdjacentHTML() {},
    setAttribute() {}, getAttribute: () => null, focus() {}, select() {},
    textContent: "", innerHTML: "", value: "", children: []
  });
  const document = {
    documentElement: noopEl(),
    body: noopEl(),
    head: noopEl(),
    createElement: noopEl,
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener() {},
    execCommand() {}
  };
  const window = {
    localStorage,
    document,
    location: { search: search ? "?" + search : "", hash: hash ? "#" + hash : "", pathname: "/index.html", href: "http://localhost/index.html" },
    history: { replaceState() {} },
    navigator: { language: "ru", clipboard: null },
    dispatchEvent() {},
    addEventListener() {},
    setTimeout,
    clearTimeout,
    console
  };
  window.window = window;
  const context = vm.createContext({
    window, document, localStorage, navigator: window.navigator,
    console, setTimeout, clearTimeout, Date, Math, JSON, String, Number, Object, Array, RegExp, Error, parseInt, isNaN,
    CustomEvent: class CustomEvent { constructor(type, opts) { this.type = type; this.detail = opts && opts.detail; } }
  });
  vm.runInContext(SRC, context, { filename: "shared/account.js" });
  return { window, localStorage };
}

/* 1. Генератор */
{
  const { window } = makeContext();
  const acc = window.PQAccount;
  let all4 = true;
  let sample = "";
  for (let i = 0; i < 300; i++) {
    const code = acc.generateShortCode(4);
    if (i === 0) sample = code;
    if (!/^[A-HJ-NP-Z2-9]{4}$/.test(code)) all4 = false;
  }
  ok("новый код ровно 4 символа (300 генераций)", all4, sample);
}

/* 2. Канонический вид */
{
  const { window } = makeContext();
  const canon = window.PQAccount.canonicalShortCode;
  const cases = [
    ["P7X4K", "7X4K", "старый P-код"],
    ["p7x4k", "7X4K", "старый P-код строчными"],
    ["K7M2", "K7M2", "обычный код"],
    [" K7-M2 ", "K7M2", "пробелы и дефис"],
    ["ABCDEF", "ABCD", "слишком длинный"]
  ];
  cases.forEach(([raw, expect, label]) => {
    const got = canon(raw);
    ok(`канонический код: ${label} («${raw}» → «${got}»)`, got === expect && got.length === 4, `ожидали ${expect}`);
  });
}

/* 3. Миграция старого кода из настроек 8 класса */
{
  const { window } = makeContext({ settings: { playerCode: "P7X4K", playerName: "Старый" } });
  const acc = window.PQAccount.get();
  ok("старый P-код из настроек → 4 символа", acc.student.studentCode === "7X4K" && acc.student.studentCode.length === 4, acc.student.studentCode);
}

/* 4. Старый код в аккаунте */
{
  const { window } = makeContext({
    account: {
      onboarded: true, role: "student", language: "ru",
      student: { name: "Алия", studentCode: "P9WQ2", playerId: "player_x", grade: 8, className: "8А" },
      teacher: {}
    }
  });
  const acc = window.PQAccount.get();
  ok("старый P-код в аккаунте → 4 символа", acc.student.studentCode === "9WQ2", acc.student.studentCode);
}

/* 5. Обычный 4-символьный код не меняется */
{
  const { window } = makeContext({
    account: {
      onboarded: true, role: "student", language: "ru",
      student: { name: "Данияр", studentCode: "K7M2", playerId: "player_y", grade: 8, className: "8Б" },
      teacher: {}
    }
  });
  const acc = window.PQAccount.get();
  ok("код из 4 символов остаётся прежним", acc.student.studentCode === "K7M2", acc.student.studentCode);
}

/* 6. Новый игрок */
{
  const { window } = makeContext();
  const acc = window.PQAccount.get();
  ok("новому игроку выдаётся код из 4 символов", /^[A-HJ-NP-Z2-9]{4}$/.test(acc.student.studentCode), acc.student.studentCode);
}

/* 7. Сравнение кодов учителем (та же логика, что в Storage.sameStudentCode) */
{
  const { window } = makeContext();
  const canon = window.PQAccount.canonicalShortCode;
  const same = (a, b) => {
    const x = canon(a);
    const y = canon(b);
    return !!x && !!y && x === y;
  };
  ok("старый P7X4K и новый 7X4K — один ученик", same("P7X4K", "7X4K"));
  ok("разные коды не совпадают", !same("K7M2", "LBA6"));
}

/* 8. В storage.js есть те же помощники */
{
  const storageSrc = fs.readFileSync(path.join(ROOT, "shared", "storage.js"), "utf8");
  ok("Storage.canonicalStudentCode объявлен", /canonicalStudentCode\(code\)\s*\{/.test(storageSrc));
  ok("Storage.sameStudentCode объявлен", /sameStudentCode\(a, b\)\s*\{/.test(storageSrc));
  ok("учитель сравнивает коды через Storage.sameStudentCode",
    (storageSrc.match(/sameStudentCode\(/g) || []).length >= 3);
  const teacherSrc = fs.readFileSync(path.join(ROOT, "shared", "rpg-teacher.js"), "utf8");
  const assignSrc = fs.readFileSync(path.join(ROOT, "shared", "rpg-assign.js"), "utf8");
  ok("журнал учителя использует общее сравнение",
    /sameStudentCode/.test(teacherSrc) && /sameStudentCode/.test(assignSrc));
  ok("в подсказках больше нет P1234",
    !/P1234|P5678/.test(teacherSrc) && !/P1234|P5678/.test(assignSrc));
}

const failed = results.filter(r => r[0] === "FAIL");
results.forEach(([status, name, extra]) => console.log(`${status} ${name}${extra ? " · " + extra : ""}`));
console.log(`\n${results.length - failed.length}/${results.length} проверок пройдено`);
process.exit(failed.length ? 1 : 0);
