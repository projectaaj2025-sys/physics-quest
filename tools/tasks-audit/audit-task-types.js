#!/usr/bin/env node
/* ============================================================
   Аудит банка заданий новых типов (7–9 классы).
   Проверяет:
     • состав типов и число заданий в 7/tasks-types.js, 8/, 9/;
     • повторы формулировок (внутри одного типа и между типами);
     • полноту трёх языков: вопрос, подсказка, пояснение, варианты;
     • осмысленность ответов в пропусках (fill-blank): единица → величина
       должна быть однозначной, величина → единица должна принимать символ;
     • покрытие уровней: в пуле каждого уровня есть все 7 типов и ≥20 заданий.

   Запуск: node tools/tasks-audit/audit-task-types.js
   Код возврата 1, если найдены проблемы.
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");
const LANG = ["ru", "en", "kk"];
const ALL_TYPES = ["multiple-choice", "true-false", "fill-blank", "numeric", "multi-select", "short-answer", "matching"];

let problems = 0;
const fail = (msg) => { problems++; console.log("   ✗ " + msg); };
const ok = (msg) => console.log("   ✓ " + msg);

/* ---------- загрузка файлов в песочнице ---------- */
function loadSandbox(files) {
    const ctx = { window: {}, console: { log() {}, warn() {}, error() {} }, document: { getElementById: () => null } };
    vm.createContext(ctx);
    for (const f of files) {
        vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
    }
    return ctx;
}

function tasksOfTypes(grade) {
    const ctx = loadSandbox([`${grade}/tasks-types.js`]);
    return vm.runInContext("TASKS_DATABASE_TYPES", ctx);
}

function fullBank(grade) {
    const ctx = loadSandbox([`${grade}/tasks.js`, `${grade}/tasks-types.js`]);
    return vm.runInContext(
        "[].concat(TASKS_DATABASE,TASKS_DATABASE_EXT,TASKS_DATABASE_CH,TASKS_DATABASE_EXT2,TASKS_DATABASE_PRACTICAL,TASKS_DATABASE_TYPES)",
        ctx
    ).filter(Boolean);
}

/* ---------- 1. Состав типов ---------- */
console.log("== Состав банка новых типов ==");
const generated = {};
for (const grade of [7, 8, 9]) {
    const tasks = tasksOfTypes(grade);
    generated[grade] = tasks;
    const byType = tasks.reduce((m, t) => ((m[t.type] = (m[t.type] || 0) + 1), m), {});
    console.log(`   ${grade} класс: ${tasks.length} заданий — ${JSON.stringify(byType)}`);
}

/* ---------- 2. Повторы формулировок ---------- */
console.log("\n== Повторы формулировок (только сгенерированные задания) ==");
const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").replace(/[«»"']/g, "").trim();
for (const grade of [8, 9]) {
    const seen = new Map();
    for (const t of generated[grade]) {
        const q = norm(t.question && t.question.ru);
        if (!q) continue;
        if (!seen.has(q)) seen.set(q, []);
        seen.get(q).push(t.id);
    }
    const dups = [...seen].filter(([, ids]) => ids.length > 1);
    if (dups.length) dups.slice(0, 8).forEach(([q, ids]) => fail(`${grade} кл. повтор: «${q.slice(0, 70)}» ← ${ids.join(", ")}`));
    else ok(`${grade} класс: ${seen.size} уникальных формулировок, повторов нет`);
}

/* ---------- 3. Три языка и структура ---------- */
console.log("\n== Языки и структура заданий ==");
for (const grade of [7, 8, 9]) {
    let bad = 0;
    for (const t of generated[grade]) {
        for (const lang of LANG) {
            if (!t.question || !t.question[lang]) { bad++; console.log(`      ${t.id}: нет вопроса (${lang})`); }
            if (!t.hint || !t.hint[lang]) { bad++; console.log(`      ${t.id}: нет подсказки (${lang})`); }
            if (!t.explanation || !t.explanation[lang]) { bad++; console.log(`      ${t.id}: нет пояснения (${lang})`); }
        }
        if (t.type === "multi-select") {
            const n = (t.options && t.options.ru || []).length;
            if (!Array.isArray(t.correctAnswer) || t.correctAnswer.length < 2) bad++;
            if (t.correctAnswer.some((i) => i < 0 || i >= n) || t.correctAnswer.length >= n) bad++;
            for (const lang of LANG) if ((t.options[lang] || []).length !== n) bad++;
        }
        if (t.type === "short-answer" || t.type === "fill-blank") {
            for (const lang of LANG) {
                const a = t.correctAnswer && t.correctAnswer[lang];
                if (!Array.isArray(a) || !a.length || a.some((x) => !String(x).trim())) bad++;
            }
        }
        if (t.type === "matching") {
            const n = t.pairs.left.ru.length;
            if (t.pairs.left.en.length !== n || t.pairs.left.kk.length !== n) bad++;
            if (new Set(t.pairs.left.ru).size !== n) bad++;
            if (!Array.isArray(t.correctPairs) || t.correctPairs.length !== n) bad++;
        }
        if (t.type === "numeric" && typeof t.correctAnswer !== "number") bad++;
    }
    if (bad) fail(`${grade} класс: структурных ошибок ${bad}`);
    else ok(`${grade} класс: RU/EN/KK на месте, варианты и пары корректны`);
}

/* ---------- 4. Осмысленность ответов пропусков ---------- */
console.log("\n== Пропуски: однозначность вопроса и ответа ==");
const genSrc = fs.readFileSync(path.join(ROOT, "tools", "gen-task-types.js"), "utf8");
const grab = (name, close) => {
    const i = genSrc.indexOf(name);
    if (i < 0) throw new Error("не найден блок " + name);
    const j = genSrc.indexOf(close, i);
    return genSrc.slice(i, j + close.length);
};
const san = { module: { exports: {} } };
vm.createContext(san);
vm.runInContext(
    grab("const GENERIC_TAILS = {", "\n};") + "\n" +
    grab("const UNITS = {", "\n};") + "\n" +
    grab("const UNITS_7 = [", "\n];") + "\n" +
    grab("const FILL_TPL = {", "\n};") + "\n" +
    "this.U=UNITS; this.U7=UNITS_7; this.T=FILL_TPL; this.GT=GENERIC_TAILS;",
    san
);
const { U, U7, T, GT } = san;
const fill = (s, v) => String(s).replace(/\{(\w+)\}/g, (m, k) => (v[k] === undefined ? m : v[k]));
const nameVariants = (name, lang) => {
    const out = [name];
    for (const tail of GT[lang] || []) {
        if (name.length > tail.length + 2 && name.toLowerCase().endsWith(" " + tail)) out.push(name.slice(0, -(tail.length + 1)));
    }
    return out;
};
for (const grade of [8, 9]) {
    const units = (grade === 7 ? U7 : U)[grade];
    const tasks = generated[grade].filter((t) => t.type === "fill-blank");
    let bad = 0;
    for (const t of tasks) {
        const q = t.question.ru;
        let hit = null;
        for (const u of units) {
            for (const tpl of T.unitToQ) {
                if (fill(tpl.ru, { unit: u.unit.ru }) !== q) continue;
                hit = "unitToQ";
                const same = units.filter((x) => x.unit.ru === u.unit.ru).length;
                if (same !== 1) { bad++; console.log(`      ${t.id}: единица «${u.unit.ru}» у ${same} величин — вопрос неоднозначен`); }
                else if (JSON.stringify(t.correctAnswer.ru.slice().sort()) !== JSON.stringify(nameVariants(u.name.ru, "ru").sort())) {
                    bad++; console.log(`      ${t.id}: ответ не совпал с величиной «${u.name.ru}»`);
                }
            }
            for (const tpl of T.qToUnit) {
                if (fill(tpl.ru, { name: u.name.ru }) !== q) continue;
                hit = "qToUnit";
                if (!t.correctAnswer.ru.includes(u.unit.ru)) { bad++; console.log(`      ${t.id}: нет единицы «${u.unit.ru}» в ответе`); }
                if (u.ans && u.ans.ru && !u.ans.ru.every((x) => t.correctAnswer.ru.includes(x))) { bad++; console.log(`      ${t.id}: не все варианты единицы приняты`); }
            }
        }
        if (!hit) { bad++; console.log(`      ${t.id}: формулировка не распознана`); }
    }
    if (bad) fail(`${grade} класс: проблем в пропусках ${bad}`);
    else ok(`${grade} класс: ${tasks.length} пропусков — вопрос однозначен, ответ принимает символ и название`);
}

/* ---------- 5. Покрытие уровней ---------- */
console.log("\n== Покрытие уровней (20 случайных заданий из пула) ==");
for (const grade of [8, 9]) {
    const ctx = loadSandbox([`${grade}/content.js`, `${grade}/tasks.js`, `${grade}/tasks-types.js`]);
    const levels = vm.runInContext("LEVELS_CONFIG", ctx);
    const bank = fullBank(grade);
    const byTopic = new Map();
    for (const t of bank) {
        if (!t.topic) continue;
        if (!byTopic.has(t.topic)) byTopic.set(t.topic, []);
        byTopic.get(t.topic).push(t);
    }
    let thin = 0;
    let minPool = Infinity;
    let minTypes = 7;
    for (const level of levels) {
        const pool = (level.topics || []).flatMap((tp) => byTopic.get(tp) || []);
        const types = new Set(pool.map((t) => t.type));
        minPool = Math.min(minPool, pool.length);
        minTypes = Math.min(minTypes, types.size);
        if (pool.length < 20 || types.size < ALL_TYPES.length) thin++;
    }
    if (thin) fail(`${grade} класс: ${thin} уровней с пулом <20 заданий или без всех 7 типов`);
    else ok(`${grade} класс: ${levels.length} уровней, минимум ${minPool} заданий и ${minTypes} типов в пуле`);
}

/* ---------- 6. Повторы в полном банке (справочно) ---------- */
console.log("\n== Повторы в полном банке (справочно, старые задания) ==");
for (const grade of [8, 9]) {
    const bank = fullBank(grade);
    const seen = new Map();
    for (const t of bank) {
        const q = norm(t.question && t.question.ru);
        if (!q) continue;
        if (!seen.has(q)) seen.set(q, []);
        seen.get(q).push(t.id);
    }
    const dups = [...seen].filter(([, ids]) => ids.length > 1);
    console.log(`   ${grade} класс: ${bank.length} заданий, групп повторов ${dups.length}`);
}

console.log(problems ? `\nПроблем: ${problems}` : "\nВсе проверки пройдены.");
process.exit(problems ? 1 : 0);
