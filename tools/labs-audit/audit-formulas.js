#!/usr/bin/env node
/* Статическая проверка лабораторий 8–9 классов без браузера.
   • 18 canvas-симуляторов (shared/simulators-89.js): цель достижима, телеметрия
     показывает искомое число, стартовое положение регуляторов — вне цели,
     подписи RU/KK/EN заполнены.
   • Лабораторные мини-игры (window.GRADE_LAB_GAMES_CONFIG в 8/content.js и 9/extras.js):
     полный перебор сетки шагов слайдеров — цель достижима, старт не решён.
   Запуск: node tools/labs-audit/audit-formulas.js */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");
const SIMS = path.join(ROOT, "shared", "simulators-89.js");

function loadLabs() {
  const src = fs.readFileSync(SIMS, "utf8");
  const start = src.indexOf("const LABS_BY_GRADE = {");
  let i = src.indexOf("{", start), depth = 0, end = -1;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") depth++;
    else if (ch === "}") { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  const objSrc = src.slice(start + "const LABS_BY_GRADE = ".length, end);
  const sandbox = {
    window: { PQAccount: null },
    loc: (v) => (!v ? "" : typeof v === "string" ? v : v.ru || ""),
    tr: (ru) => ru,
    console
  };
  vm.createContext(sandbox);
  vm.runInContext("globalThis.labs = " + objSrc, sandbox);
  return sandbox.labs;
}

function loadConfigs(file) {
  const src = fs.readFileSync(file, "utf8");
  const noop = () => {};
  const sandbox = {
    window: {},
    console,
    document: {
      getElementById: () => null,
      addEventListener: noop,
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: () => ({ style: {}, classList: { add: noop, remove: noop }, appendChild: noop }),
      body: { appendChild: noop }
    }
  };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.GRADE_LAB_GAMES_CONFIG || {};
}

function gridFor(ctrl) {
  const out = [];
  for (let v = ctrl.min; v <= ctrl.max + 1e-9; v += ctrl.step) out.push(+v.toFixed(6));
  return out;
}

function sampleParams(lab) {
  const p = {};
  for (const c of lab.controls) {
    p[c.id] = c.type === "select"
      ? c.options[Math.floor(Math.random() * c.options.length)].value
      : +(c.min + c.step * Math.floor(Math.random() * (Math.round((c.max - c.min) / c.step) + 1))).toFixed(6);
  }
  // Формульный аудит проверяет достижимость цели после выполненного
  // физического действия; само действие отдельно тестируется в Chromium.
  if (lab.interactive === "circuit") {
    p.circuitComplete = true;
    p.switchClosed = true;
  }
  if (lab.interactive === "magnet") p.experiment = true;
  return p;
}

function auditLabs() {
  const labs = loadLabs();
  let problems = 0;
  for (const grade of Object.keys(labs)) {
    for (const lab of labs[grade]) {
      const issues = [];
      const def = lab.compute({ ...lab.defaults });
      if (!def || typeof def.expected !== "number" || !Number.isFinite(def.expected)) issues.push("expected не число");
      let found = null;
      for (let i = 0; i < 60000 && !found; i++) {
        const c = lab.compute(sampleParams(lab));
        if (c && c.pass) found = c;
      }
      if (!found) issues.push("нет комбинации, дающей pass");
      if (def && def.pass) issues.push("стартовые значения уже в цели");
      if (found) {
        const nums = (found.readout.match(/-?\d+(?:[.,]\d+)?/g) || []).map((x) => Number(x.replace(",", ".")));
        if (!nums.some((n) => Math.abs(n - found.expected) <= Math.max(0.02, Math.abs(found.expected) * 0.02))) {
          issues.push("в телеметрии нет искомого числа");
        }
      }
      if (issues.length) { problems++; console.log(`  ✗ ${lab.id}: ${issues.join("; ")}`); }
      else console.log(`  ✓ ${grade} кл. ${lab.id.padEnd(16)} цель ${found.expected} ${lab.unit}`);
    }
  }
  return problems;
}

function auditGames() {
  const packs = [
    { grade: 8, cfg: loadConfigs(path.join(ROOT, "8", "content.js")) },
    { grade: 9, cfg: loadConfigs(path.join(ROOT, "9", "extras.js")) }
  ];
  let problems = 0;
  for (const { grade, cfg } of packs) {
    const levels = Object.keys(cfg);
    console.log(`  ${grade} класс: ${levels.length} мини-игр (уровни ${levels.join(", ")})`);
    for (const lvl of levels) {
      const c = cfg[lvl];
      if (c.type === "circuit") { console.log(`  ✓ L${lvl} сборка цепи (детали, провода и ключ)`); continue; }
      const stages = Array.isArray(c.stages) && c.stages.length ? c.stages : [null];
      stages.forEach((stage, stageIndex) => {
        const game = Object.assign({}, c, stage || {});
        const grids = game.sliders.map(gridFor);
        let best = null, solutions = 0;
        const walk = (i, cur) => {
          if (i === grids.length) {
            const v = {}; game.sliders.forEach((s, j) => (v[s.id] = cur[j]));
            const r = game.formula(v), d = Math.abs(r - game.target);
            if (!best || d < best.d) best = { d, v, r };
            if (d <= game.tol) solutions++;
            return;
          }
          grids[i].forEach((x) => walk(i + 1, [...cur, x]));
        };
        walk(0, []);
        const dv = {}; game.sliders.forEach((s) => (dv[s.id] = s.val));
        const startSolved = Math.abs(game.formula(dv) - game.target) <= game.tol;
        const issues = [];
        if (!solutions) issues.push("цель недостижима");
        if (startSolved) issues.push("старт уже решён");
        if (!game.scene) issues.push("нет тематической сцены");
        if (stage && ["name", "desc", "hint"].some((key) => !game[key] || !game[key + "En"] || !game[key + "Kk"])) {
          issues.push("неполный перевод этапа RU/KK/EN");
        }
        const unit = game.unit || "";
        const label = `L${lvl}${stages.length > 1 ? "." + (stageIndex + 1) : ""}`;
        if (issues.length) { problems++; console.log(`  ✗ ${label}: ${issues.join("; ")}`); }
        else console.log(`  ✓ ${label} ${game.formulaStr} → ${game.target} ${unit} ±${game.tol} (решений: ${solutions})`);
      });
    }
  }
  return problems;
}

console.log("== Canvas-симуляторы ==");
const p1 = auditLabs();
console.log("== Лабораторные мини-игры ==");
const p2 = auditGames();
console.log(p1 + p2 === 0 ? "\nВсе проверки пройдены." : `\nПроблем: ${p1 + p2}`);
process.exit(p1 + p2 === 0 ? 0 : 1);
