// Комплексный аудит банка заданий классов 7–9.
// node tools/tasks-audit/audit.js > /tmp/audit-report.json
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..', '..');
const REPORT = { generated: new Date().toISOString(), grades: {} };

function loadGrade(grade) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  for (const rel of [`${grade}/tasks.js`, `${grade}/content.js`]) {
    const code = fs.readFileSync(path.join(root, rel), 'utf8');
    vm.runInContext(code, sandbox, { filename: rel });
  }
  const names = ['TASKS_DATABASE','TASKS_DATABASE_EXT','TASKS_DATABASE_CH','TASKS_DATABASE_EXT2','TASKS_DATABASE_PRACTICAL'];
  const banks = vm.runInContext(`({${names.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : null`).join(',')}})`, sandbox);
  const content = vm.runInContext(`({
    LEVELS_CONFIG,
    LEVEL_NAMES_RU,
    CONSPECT_KEYS: typeof CONSPECT !== 'undefined' ? Object.keys(CONSPECT) : []
  })`, sandbox);
  const tasks = [];
  for (const n of names) {
    if (Array.isArray(banks[n])) for (const t of banks[n]) tasks.push({ ...t, _bank: n });
  }
  return { tasks, ...content };
}

const issues = [];
function flag(grade, task, severity, kind, detail) {
  issues.push({ grade, id: task && task.id, bank: task && task._bank, type: task && task.type, topic: task && task.topic, severity, kind, detail });
}

// ---------- helpers ----------
const LANGS = ['ru', 'kk', 'en'];
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
const nonEmptyStr = (v) => typeof v === 'string' && v.trim().length > 0;

function numbersIn(text) {
  if (text == null) return [];
  let s = String(text).replace(/\u00A0|\u202F/g, ' ');
  // склеиваем группы тысяч: "1 000 000" -> "1000000" (пробел всегда разряд), "1,000,000" -> "1000000" (запятая — только если первая группа не ноль)
  s = s.replace(/[1-9]\d{0,2}(?: \d{3})+/g, m => m.replace(/ /g, ''));
  s = s.replace(/[1-9]\d{0,2}(?:,\d{3})+/g, m => m.replace(/,/g, ''));
  const m = s.match(/\d+(?:[.,]\d+)?/g) || [];
  return m.map(t => Number(t.replace(',', '.'))).filter(n => Number.isFinite(n));
}

// Разбор «тысячи по-английски» и «десятичная запятая»:
// 40,000 -> 40000 ; 1,5 -> 1.5 ; 2,5·10^6 — десятичная.
const SUP_DIGITS = {'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9'};
function superscriptToExponent(m, base, sup) {
  const sign = /[⁻−-]/.test(sup) ? '-' : '';
  const digits = [...sup].filter(c => SUP_DIGITS[c]).map(c => SUP_DIGITS[c]).join('');
  return `(${base.replace(/,/g, '.')})**${sign}${digits}`;
}
function parseNumToken(raw) {
  let s = String(raw).trim().replace(/\u00A0|\u202F| /g, '');
  if (/^-?\d{1,3}(,\d{3})+$/.test(s)) return Number(s.replace(/,/g, ''));
  s = s.replace(/,/g, '.');
  const v = Number(s);
  return Number.isFinite(v) ? v : null;
}
// Физическое соглашение: juxtaposed multiplication binds tighter than '/'
function groupDivision(s) {
  let out = '', i = 0, depth = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === '(') { depth++; out += ch; i++; continue; }
    if (ch === ')') { depth--; out += ch; i++; continue; }
    if (ch === '/' && depth === 0) {
      let j = i + 1;
      if (s[j] === '(') {
        let d = 1; j++;
        const start = j - 1;
        while (j < s.length && d > 0) {
          if (s[j] === '(') d++;
          else if (s[j] === ')') d--;
          j++;
        }
        out += '/(' + s.slice(start + 1, j - 1) + ')';
        i = j;
        continue;
      }
      let d2 = 0;
      while (j < s.length) {
        const cj = s[j];
        if (cj === '(') d2++;
        else if (cj === ')') { if (d2 === 0) break; d2--; }
        else if (cj === '/' && d2 === 0) break;
        else if ((cj === '+' || cj === '-') && d2 === 0) {
          const prev = s.slice(0, j).replace(/\s+$/, '').slice(-1);
          if (prev === '*') { j++; continue; } // часть **-3
          break;
        }
        j++;
      }
      out += '/(' + s.slice(i + 1, j) + ')';
      i = j;
      continue;
    }
    out += ch; i++;
  }
  return out;
}

// Безопасное вычисление арифметического выражения (только числа и + - * / ( ) ^)
function evalExpr(expr, allowBare) {
  let s = String(expr)
    .replace(/\u00A0|\u202F| | /g, '')
    .replace(/([0-9.,]+)([⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+)/g, superscriptToExponent)
    .replace(/π|pi/gi, '3.141592653589793')
    .replace(/×|·|∙/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-');
  s = s.replace(/°/g, '');
  s = s.split(/([+\-*/()^])/).map(tok => {
    if (/^-?[1-9]\d{0,2}(,\d{3})+$/.test(tok)) return tok.replace(/,/g, '').replace(/^0+(?=\d)/, '');
    return tok.replace(/,/g, '.').replace(/^0+(?=\d)/, '');
  }).join('');
  s = s.replace(/\^/g, '**');
  // гомогенизируем e-нотацию вида 4.6e7 (после разбиения токены вида 4.6e7 нетронуты)
  if (!/^[0-9+\-*/().eE* ]+$/.test(s)) return null;
  if (!allowBare && !/[+\-*/^]|e[+-]?\d/.test(s.replace(/\*\*/g, '^'))) return null;
  try {
    const v = Function('"use strict"; return (' + s + ')')();
    return Number.isFinite(v) ? v : null;
  } catch { return null; }
}

function extractChainValues(text) {
  if (!text) return [];
  const values = [];
  const clean = String(text).replace(/\u00A0|\u202F/g, ' ');
  const re = new RegExp('([0-9πpi][' + CHAIN_CHARS + ']{2,}?)\\s*(?:=|≈|≃)\\s*([0-9.,][' + CHAIN_CHARS + ']*)', 'g');
  let m;
  while ((m = re.exec(clean))) {
    let rhsTok = m[2].replace(/[\s+\-−*/^·×.,]+$/, '');
    rhsTok = stripTrailingUnits(rhsTok);
    let v = evalExpr(rhsTok, true);
    if (v == null) continue;
    const after = clean.slice(m.index + m[0].length);
    if (/^\s*%/.test(after)) v = v / 100;
    values.push(v);
  }
  // «переменная = число» присваивания (допускаем минусы и подстрочные цифры)
  const reAssign = /(?:^|[\s,;→(])([A-Za-zА-Яа-яёα-ωΑ-Ω][A-Za-zА-Яа-яёα-ωΑ-Ω₀-₉]*)\s*(?:=|≈|≃)\s*(-?[0-9][0-9\s.,*·×/eE()^²³⁰¹⁴⁵⁶⁷⁸⁹⁻⁺\-−]*)/g;
  while ((m = reAssign.exec(clean))) {
    const rhsTok = stripTrailingUnits(m[2].replace(/[\s+\-−*/^·×.,]+$/, ''));
    const v = evalExpr(rhsTok, true);
    if (v != null) values.push(v);
  }
  // «→ 136,5 °C» / «→ t₂ ≈ 136,5 °C»
  // «≈ 0,46″» — финальное округление
  const reApprox = /≈\s*(-?[0-9][0-9\s.,*·×/eE()^²³⁰¹⁴⁵⁶⁷⁸⁹⁻⁺\-−]*)/g;
  while ((m = reApprox.exec(clean))) {
    const rhsTok = stripTrailingUnits(m[1].replace(/[\s+\-−*/^·×.,]+$/, ''));
    const v = evalExpr(rhsTok, true);
    if (v != null) values.push(v);
  }
  const reArrow = /→\s*(?:[A-Za-zА-Яа-яёα-ωΑ-Ω][A-Za-zА-Яа-яёα-ωΑ-Ω₀-₉]*\s*(?:=|≈|≃)\s*)?(-?[0-9][0-9\s.,*·×/eE()^²³⁰¹⁴⁵⁶⁷⁸⁹⁻⁺\-−]*)/g;
  while ((m = reArrow.exec(clean))) {
    const rhsTok = stripTrailingUnits(m[1].replace(/[\s+\-−*/^·×.,]+$/, ''));
    const v = evalExpr(rhsTok, true);
    if (v != null) values.push(v);
  }
  return values;
}

// Находит цепочки "expr = rhsExpr" в тексте и проверяет их
const CHAIN_CHARS = '0-9\\s.,+\\-−*/^()×·÷eEπpi²³⁰¹⁴⁵⁶⁷⁸⁹⁻⁺A-Za-zА-Яа-яёα-ωΑ-Ω°″′₀₁₂₃₄₅₆₇₈₉';
// Удаление хвостовых единиц («200 Н/м» -> «200», «10 м³» -> «10») — линейно по токенам
function stripTrailingUnits(tok) {
  tok = String(tok).replace(/[″′]+$/, '');
  const parts = String(tok).trim().split(/\s+/);
  while (parts.length > 1) {
    const last = parts[parts.length - 1];
    if (/[A-Za-zА-Яа-яёα-ωΑ-Ω]/.test(last)) { parts.pop(); continue; }
    break;
  }
  return parts.join(' ');
}

function checkArithmeticChains(text) {
  if (!text) return [];
  const found = [];
  const clean = String(text).replace(/\u00A0|\u202F/g, ' ');
  const re = new RegExp('([0-9πpi][' + CHAIN_CHARS + ']{2,}?)\\s*(?:=|≈|≃)\\s*([0-9.,][' + CHAIN_CHARS + ']*)', 'g');
  let m;
  while ((m = re.exec(clean))) {
    const expr = m[1];
    let rhsTok = m[2];
    // отрезаем висячие операторы в конце захваченного RHS
    rhsTok = rhsTok.replace(/[\s+\-−*/^·×.,]+$/,'');
    if (!rhsTok) continue;
    // «762 с · 3·10⁸» -> «762 * 3·10⁸»: единицы между операндами — неявное умножение
    const cleanedExpr = String(expr)
      .replace(/(\d)\s*[a-df-zA-DF-ZА-Яа-яё][a-df-zA-DF-ZА-Яа-яё0-9\/°μΩ]*\s*(?=[·*×])/g, '$1 ');
    let lhs = evalExpr(cleanedExpr);
    if (lhs == null || groupDivision(String(expr).replace(/\u00A0|\u202F| /g, '').replace(/([0-9.,]+)([⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+)/g, superscriptToExponent).replace(/×|·|∙/g, '*').replace(/÷/g, '/').replace(/−/g, '-')) !== expr) {
      const grouped = groupDivision(String(expr).replace(/\u00A0|\u202F| /g, '').replace(/([0-9.,]+)([⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+)/g, superscriptToExponent).replace(/×|·|∙/g, '*').replace(/÷/g, '/').replace(/−/g, '-'));
      const alt = evalExpr(String(grouped).replace(/(\d)\s*[a-df-zA-DF-ZА-Яа-яё][a-df-zA-DF-ZА-Яа-яё0-9\/°μΩ]*\s*(?=[·*×])/g, '$1 '));
      if (alt != null) lhs = alt;
    }
    const rhs = evalExpr(stripTrailingUnits(rhsTok), true);
    if (lhs == null || rhs == null) continue;
    if (!/[+\-*/×·÷^]|e[+-]?\d/i.test(expr)) continue; // голое число слева — не вычисление
    // если сразу за RHS стоит знак процента — делим на 100
    const after = clean.slice(m.index + m[0].length);
    const isPercent = /^\s*%/.test(after);
    const rhsVal = isPercent ? rhs / 100 : rhs;
    const tol = Math.max(Math.abs(rhsVal) * 0.03, Math.abs(lhs) * 0.03, 0.02);
    if (Math.abs(lhs - rhsVal) > tol) {
      const ratio = Math.abs(lhs) / Math.max(Math.abs(rhsVal), 1e-12);
      const log10ratio = Math.log10(Math.max(ratio, 1e-12));
      const nearPow10 = Math.abs(log10ratio - Math.round(log10ratio)) < 0.03;
      if (nearPow10) continue;
      found.push({ expr: expr.trim(), stated: rhsTok.trim(), computed: lhs });
    }
  }
  return found;
}

function fmtNum(n) {
  if (n == null) return String(n);
  return String(n);
}

const stats = {};
const perGrade = {};

for (const grade of [7, 8, 9]) {
  const { tasks, LEVELS_CONFIG, LEVEL_NAMES_RU } = loadGrade(grade);
  const gIssuesBefore = issues.length;
  const stat = { total: tasks.length, byType: {}, mcqAnswerDist: {}, topicsUsed: new Set() };
  const levelIds = new Set(LEVELS_CONFIG.map(l => String(l.id)));
  const levelTopics = new Set();
  for (const l of LEVELS_CONFIG) for (const t of (l.topics || [])) levelTopics.add(t);
  const maxLesson = Math.max(...LEVELS_CONFIG.map(l => Number(l.id)));

  // ---- duplicate id across all banks of the grade
  const seen = new Map();
  for (const t of tasks) {
    const key = String(t.id);
    if (seen.has(key)) {
      flag(grade, t, 'error', 'duplicate-id', `id дублируется: ${key} (${seen.get(key)} и ${t._bank})`);
    } else seen.set(key, t._bank);
  }

  for (const t of tasks) {
    stat.byType[t.type] = (stat.byType[t.type] || 0) + 1;
    stat.topicsUsed.add(t.topic);

    // ---- required scalar fields
    if (!nonEmptyStr(t.id)) flag(grade, t, 'error', 'missing-id', 'Отсутствует id');
    if (!nonEmptyStr(t.topic)) flag(grade, t, 'error', 'missing-topic', 'Отсутствует topic');
    if (t.difficulty == null || !(t.difficulty >= 1 && t.difficulty <= 3)) flag(grade, t, 'warn', 'difficulty', `difficulty=${t.difficulty}`);

    // ---- question/hint/explanation languages
    for (const L of LANGS) {
      if (!isObj(t.question) || !nonEmptyStr(t.question[L])) flag(grade, t, 'error', 'missing-lang', `question.${L} отсутствует/пуст`);
      if (!isObj(t.hint) || !nonEmptyStr(t.hint[L])) flag(grade, t, 'warn', 'missing-lang', `hint.${L} отсутствует/пуст`);
      // explanation: у некоторых true-false он может быть — проверяем
      if (!isObj(t.explanation) || !nonEmptyStr(t.explanation[L])) flag(grade, t, 'warn', 'missing-lang', `explanation.${L} отсутствует/пуст`);
    }

    // ---- type-specific checks
    const type = t.type;
    if (type === 'numeric') {
      if (typeof t.correctAnswer !== 'number' || !Number.isFinite(t.correctAnswer)) {
        flag(grade, t, 'error', 'numeric-answer', `correctAnswer не число: ${JSON.stringify(t.correctAnswer)}`);
      } else {
        if (!(typeof t.tolerance === 'number' && t.tolerance > 0)) {
          flag(grade, t, 'warn', 'numeric-tolerance', `tolerance=${t.tolerance} — ответ невозможно засчитать корректно`);
        }
      }
    } else if (type === 'true-false') {
      if (typeof t.correctAnswer !== 'boolean') {
        flag(grade, t, 'error', 'tf-answer', `correctAnswer должен быть boolean, получено: ${JSON.stringify(t.correctAnswer)}`);
      }
    } else if (type === 'multiple-choice') {
      const opts = t.options;
      if (!isObj(opts)) {
        flag(grade, t, 'error', 'mcq-options', 'options отсутствуют');
      } else {
        const lens = LANGS.map(L => Array.isArray(opts[L]) ? opts[L].length : -1);
        if (lens.some(l => l < 2)) flag(grade, t, 'error', 'mcq-options', `options ru/kk/en lengths=${lens.join('/')}`);
        else if (new Set(lens).size !== 1) flag(grade, t, 'error', 'mcq-options', `разная длина options ru/kk/en: ${lens.join('/')}`);
        else {
          for (const L of LANGS) {
            opts[L].forEach((o, i) => { if (!nonEmptyStr(String(o))) flag(grade, t, 'warn', 'mcq-empty-option', `пустой вариант ${L}[${i}]`); });
          }
          const ca = t.correctAnswer;
          if (!Number.isInteger(ca) || ca < 0 || ca >= lens[0]) {
            flag(grade, t, 'error', 'mcq-answer-range', `correctAnswer=${ca} вне диапазона 0..${lens[0] - 1}`);
          } else {
            stat.mcqAnswerDist[ca] = (stat.mcqAnswerDist[ca] || 0) + 1;
          }
          // одинаковые варианты ответа (дубли в одном языке)
          for (const L of LANGS) {
            const lower = opts[L].map(o => String(o).trim().toLowerCase());
            const dup = lower.find((o, i) => lower.indexOf(o) !== i);
            if (dup) flag(grade, t, 'warn', 'mcq-duplicate-option', `повторяющийся вариант в ${L}: «${dup.slice(0, 60)}»`);
          }
        }
      }
    } else if (type === 'multi-select') {
      const opts = t.options;
      const ca = t.correctAnswer;
      if (!isObj(opts) || !Array.isArray(opts.ru)) {
        flag(grade, t, 'error', 'ms-options', 'options.ru отсутствует');
      } else {
        const lens = LANGS.map(L => Array.isArray(opts[L]) ? opts[L].length : -1);
        if (new Set(lens).size !== 1) flag(grade, t, 'error', 'ms-options', `разная длина options: ${lens.join('/')}`);
        const answers = Array.isArray(ca) ? ca : (ca != null ? [ca] : []);
        if (!answers.length) flag(grade, t, 'error', 'ms-answer', 'correctAnswer пуст');
        for (const a of answers) {
          if (!Number.isInteger(a) || a < 0 || a >= lens[0]) flag(grade, t, 'error', 'ms-answer-range', `индекс ${a} вне диапазона 0..${lens[0] - 1}`);
        }
      }
    } else if (type === 'matching') {
      const pairs = t.pairs;
      if (!isObj(pairs) || !isObj(pairs.left) || !isObj(pairs.right)) {
        flag(grade, t, 'error', 'matching-format', 'pairs.left/pairs.right отсутствуют');
      } else {
        const llen = LANGS.map(L => Array.isArray(pairs.left[L]) ? pairs.left[L].length : -1);
        const rlen = LANGS.map(L => Array.isArray(pairs.right[L]) ? pairs.right[L].length : -1);
        if (llen.some(l => l < 2) || rlen.some(l => l < 2)) flag(grade, t, 'error', 'matching-format', `колонки слишком короткие: left=${llen.join('/')} right=${rlen.join('/')}`);
        if (new Set(llen).size !== 1 || new Set(rlen).size !== 1) flag(grade, t, 'error', 'matching-format', `разная длина колонок между языками: left=${llen.join('/')} right=${rlen.join('/')}`);
        const cp = t.correctPairs;
        if (!Array.isArray(cp) || !cp.length) {
          flag(grade, t, 'error', 'matching-answer', 'correctPairs отсутствует/пуст');
        } else {
          const usedLeft = new Set();
          for (const pr of cp) {
            if (!Array.isArray(pr) || pr.length !== 2) { flag(grade, t, 'error', 'matching-answer', `пара не [i,j]: ${JSON.stringify(pr)}`); continue; }
            const [i, j] = pr;
            if (!Number.isInteger(i) || !Number.isInteger(j) || i < 0 || j < 0 || i >= llen[0] || j >= rlen[0]) {
              flag(grade, t, 'error', 'matching-answer', `пара [${i},${j}] вне диапазона (left<${llen[0]}, right<${rlen[0]})`);
            }
            if (usedLeft.has(i)) flag(grade, t, 'warn', 'matching-answer', `левый элемент ${i} сопоставлен несколько раз`);
            usedLeft.add(i);
          }
        }
      }
    } else if (type === 'short-answer' || type === 'fill-blank') {
      const ca = t.correctAnswer !== undefined ? t.correctAnswer : t.answer;
      const okValue = (v) => v != null && (typeof v === 'number' || (typeof v === 'string' && v.trim()) || (Array.isArray(v) && v.length > 0));
      if (isObj(ca) && !Array.isArray(ca)) {
        // локализованный ответ {ru,kk,en}
        for (const L of LANGS) {
          if (!okValue(ca[L])) flag(grade, t, 'error', 'short-answer', `correctAnswer.${L} отсутствует/пуст`);
        }
      } else if (!okValue(ca)) {
        flag(grade, t, 'error', 'short-answer', 'correctAnswer отсутствует/пуст');
      }
    }

    // ---- topic reachability
    const topic = String(t.topic || '');
    if (/^lesson:(\d+)$/.test(topic)) {
      const n = Number(topic.split(':')[1]);
      if (n < 1 || n > maxLesson) flag(grade, t, 'error', 'topic-range', `topic lesson:${n} вне диапазона уровней 1..${maxLesson}`);
    } else if (/^(p|lab)\d+$/.test(topic)) {
      if (!levelTopics.has(topic)) flag(grade, t, 'error', 'topic-unreachable', `topic "${topic}" не используется ни в одном LEVELS_CONFIG — задание недостижимо в игре`);
    } else if (!levelTopics.has(topic) && !/^lesson:/.test(topic)) {
      flag(grade, t, 'warn', 'topic-unknown', `topic "${topic}" не привязан ни к одному уровню`);
    }

    // ---- arithmetic verification of explanation (ru)
    const texts = [t.explanation && t.explanation.ru, t.explanation && t.explanation.en, typeof t.formula === 'string' ? t.formula : (t.formula && t.formula.ru), typeof t.formula === 'object' && t.formula ? t.formula.en : null, typeof t.formula === 'object' && t.formula ? t.formula.kk : null];
    const seenChain = new Set();
    for (const txt of texts) {
      for (const bad of checkArithmeticChains(txt)) {
        const key = `${bad.expr}|${bad.stated}`;
        if (seenChain.has(key)) continue;
        seenChain.add(key);
        flag(grade, t, 'error', 'arithmetic', `В объяснении «${bad.expr.slice(0, 80)} = ${bad.stated}», но вычислено ${Math.round(bad.computed * 1000) / 1000}`);
      }
    }

    // ---- numeric task: correctAnswer должен встречаться в вычислениях объяснения
    if (type === 'numeric' && typeof t.correctAnswer === 'number') {
      const explRu = (t.explanation && t.explanation.ru) || '';
      const chains = extractChainValues(explRu);
      if (chains.length) {
        const tol = (typeof t.tolerance === 'number' && t.tolerance > 0) ? Math.max(t.tolerance, Math.abs(t.correctAnswer) * 0.03) : Math.abs(t.correctAnswer) * 0.03 + 0.02;
        const matches = chains.some(v => {
          if (Math.abs(v - t.correctAnswer) <= tol) return true;
          const ratio = Math.abs(v) / Math.max(Math.abs(t.correctAnswer), 1e-12);
          const lr = Math.log10(Math.max(ratio, 1e-12));
          return Math.abs(lr - Math.round(lr)) < 0.03; // единицы: см³→м³ и т.п.
        });
        if (!matches) {
          flag(grade, t, 'warn', 'answer-vs-explanation', `correctAnswer=${t.correctAnswer} не встречается в вычислениях объяснения (найдены: ${chains.map(v => Math.round(v * 1000) / 1000).join(', ')})`);
        }
      }
    }

    // ---- cross-language number consistency (question)
    if (isObj(t.question)) {
      const ns = LANGS.map(L => numbersIn(t.question[L]).map(n => Math.round(n * 1000) / 1000));
      const key = ns.map(a => a.join(','));
      if (new Set(key).size !== 1 && ns.every(a => a.length)) {
        flag(grade, t, 'warn', 'lang-numbers', `Числа в вопросе различаются: ru=[${key[0]}] en=[${key[2]}] kk=[${key[1]}]`);
      }
    }
    if (isObj(t.options) && Array.isArray(t.options.ru) && Array.isArray(t.options.en) && t.options.ru.length === t.options.en.length) {
      t.options.ru.forEach((o, i) => {
        const a = numbersIn(o), b = numbersIn(t.options.en[i]);
        if (a.length && b.length && a.join(',') !== b.join(',')) {
          flag(grade, t, 'warn', 'lang-option-numbers', `Числа в варианте ${i} различаются ru/en: [${a}] vs [${b}]`);
        }
      });
    }
  }

  stat.topicsUsed = [...stat.topicsUsed];
  perGrade[grade] = { stat, issuesForGrade: issues.length - gIssuesBefore };
  REPORT.grades[grade] = {
    total: stat.total,
    byType: stat.byType,
    mcqAnswerDist: stat.mcqAnswerDist,
    uniqueTopics: stat.topicsUsed.length,
    unusedLevelTopics: [...levelTopics].filter(tp => !stat.topicsUsed.includes(tp) && !false),
  };
}

REPORT.issues = issues;
REPORT.summary = {
  totalTasks: Object.values(REPORT.grades).reduce((a, g) => a + g.total, 0),
  totalIssues: issues.length,
  bySeverity: issues.reduce((m, i) => (m[i.severity] = (m[i.severity] || 0) + 1, m), {}),
  byKind: issues.reduce((m, i) => (m[i.kind] = (m[i.kind] || 0) + 1, m), {}),
};
process.stdout.write(JSON.stringify(REPORT, null, 1));
