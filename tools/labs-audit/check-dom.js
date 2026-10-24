#!/usr/bin/env node
/* Проверка лабораторий и режимов уровня в headless-DOM (jsdom).
   Поднимает play.html?grade=N с локального сервера, запускает уровни через
   настоящий RPG.startMission, открывает лабораторные мини-игры, решает их
   перебором сетки слайдеров и сверяет HUD миссий.
   Запуск: python3 -m http.server 8000  (из корня репозитория)
           npm i jsdom && node tools/labs-audit/check-dom.js --grade 8 */

const { JSDOM } = require("jsdom");

const args = process.argv.slice(2);
const arg = (name, def) => {
  const i = args.indexOf("--" + name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const BASE = arg("base", "http://127.0.0.1:8000");
const GRADES = String(arg("grade", "8,9")).split(",").map(Number);
const MODES = ["defense", "harvest", "boss", "blitz", "survival"];
const noop = () => {};

function fakeCtx() {
  return new Proxy({}, {
    get: (t, k) => {
      if (k === "canvas") return { width: 760, height: 270 };
      if (k === "measureText") return () => ({ width: 10 });
      if (/^create(Linear|Radial)Gradient$|^createPattern$/.test(String(k))) return () => ({ addColorStop: noop });
      if (k === "getImageData") return () => ({ data: [] });
      return noop;
    },
    set: (t, k, v) => { t[k] = v; return true; }
  });
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function openPage(grade) {
  const dom = await JSDOM.fromURL(`${BASE}/play.html?grade=${grade}`, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    beforeParse(w) {
      w.HTMLCanvasElement.prototype.getContext = function () { return fakeCtx(); };
      w.HTMLCanvasElement.prototype.toDataURL = () => "data:image/png;base64,";
      w.matchMedia = w.matchMedia || (() => ({ matches: false, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop }));
      w.scrollTo = noop; w.alert = noop; w.confirm = () => true; w.prompt = () => "";
      w.HTMLElement.prototype.scrollIntoView = noop;
      w.console.error = (...a) => console.log("  console.error:", String(a[0]).slice(0, 160));
      w.console.log = noop;
    }
  });
  await wait(3500);
  return dom;
}

const gridFor = (s) => { const out = []; for (let v = s.min; v <= s.max + 1e-9; v += s.step) out.push(+v.toFixed(6)); return out; };

function solve(cfg) {
  const grids = cfg.sliders.map(gridFor);
  let found = null;
  const walk = (i, cur) => {
    if (found) return;
    if (i === grids.length) {
      const v = {}; cfg.sliders.forEach((s, j) => (v[s.id] = cur[j]));
      if (Math.abs(cfg.formula(v) - cfg.target) <= cfg.tol) found = v;
      return;
    }
    grids[i].forEach((x) => walk(i + 1, [...cur, x]));
  };
  walk(0, []);
  return found;
}

let failures = 0;
const fail = (msg) => { failures++; console.log("  ✗ " + msg); };
const ok = (msg) => console.log("  ✓ " + msg);

(async () => {
  for (const grade of GRADES) {
    console.log(`\n== ${grade} класс: мини-игры уровней ==`);
    const dom = await openPage(grade);
    const w = dom.window;
    const E = (c) => w.eval(c);
    const cfg = w.GRADE_LAB_GAMES_CONFIG || {};
    const levels = Object.keys(cfg).map(Number).sort((a, b) => a - b);
    for (const lvl of levels) {
      E(`RPG.startMission(${lvl},"","defense")`);
      await wait(1100);
      const open = w.document.getElementById("lab-overlay").classList.contains("active");
      const title = w.document.getElementById("lab-title").textContent.trim();
      const c = cfg[lvl];
      if (!open) { fail(`L${lvl} мини-игра не открылась`); continue; }
      if (c.type === "circuit") {
        const cells = [...w.document.querySelectorAll("#lab-circuit .circuit-cell")];
        cells.forEach((x) => x.click());
        await wait(80);
        const done = w.document.getElementById("lab-result")._ok;
        w.document.getElementById("lab-check").click();
        await wait(200);
        done ? ok(`L${lvl} «${title.slice(0, 42)}» — цепь собрана, бонус выдан`) : fail(`L${lvl} цепь не собралась`);
        continue;
      }
      const dv = {}; c.sliders.forEach((s) => (dv[s.id] = s.val));
      const startSolved = Math.abs(c.formula(dv) - c.target) <= c.tol;
      const sol = solve(c);
      if (!sol) { fail(`L${lvl} нет решения на сетке шагов`); continue; }
      for (const [id, v] of Object.entries(sol)) {
        const el = w.document.getElementById("lab-" + id);
        el.value = String(v);
        el.dispatchEvent(new w.Event("input", { bubbles: true }));
      }
      await wait(80);
      const solved = w.document.getElementById("lab-result")._ok;
      w.document.getElementById("lab-check").click();
      await wait(200);
      const closed = !w.document.getElementById("lab-overlay").classList.contains("active");
      if (solved && closed && !startSolved) ok(`L${lvl} «${title.slice(0, 42)}» — решается, оверлей закрылся`);
      else fail(`L${lvl}: solved=${solved} closed=${closed} startSolved=${startSolved}`);
    }
    dom.window.close();

    console.log(`\n== ${grade} класс: режимы уровня ==`);
    for (const mode of MODES) {
      const d = await openPage(grade);
      const ww = d.window;
      const levels2 = Object.keys(ww.GRADE_LAB_GAMES_CONFIG || {}).map(Number).sort((a, b) => a - b);
      const target = levels2[levels2.length - 1] || 1;
      ww.eval(`RPG.startMission(${target},"",${JSON.stringify(mode)})`);
      await wait(1200);
      const st = JSON.parse(ww.eval(`JSON.stringify({city:Game.cityHealth,shield:Game.shield,cap:Game.levelConfig.shieldCapacity,boss:RPG.run&&RPG.run.boss,mission:RPG.run&&RPG.run.mission.id,blitz:!!(RPG.run&&RPG.run.blitzInterval),overlay:document.getElementById("lab-overlay").classList.contains("active")})`));
      const hud = (ww.document.getElementById("rpg-mission-hud")?.textContent || "").replace(/\s+/g, " ").trim().slice(0, 90);
      if (st.mission !== mode) fail(`${mode}: миссия не запустилась`);
      else if (mode === "boss" && !(st.boss && st.boss.hp > 0)) fail(`${mode}: нет HP босса`);
      else ok(`${mode.padEnd(9)} HP ${st.city}, щит ${st.shield}/${st.cap}${st.boss ? `, босс ${st.boss.hp}` : ""}${st.blitz ? ", блиц-таймер" : ""} — «${hud}»`);
      d.window.close();
    }
  }
  console.log(failures ? `\nПроблем: ${failures}` : "\nВсе проверки пройдены.");
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error("FATAL", e); process.exit(1); });
