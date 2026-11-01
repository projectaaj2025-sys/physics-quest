import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

const reportDir = process.env.PQ_AUDIT_DIR || path.join(os.tmpdir(), 'pq-browser');
const baseUrl = process.env.PQ_BASE_URL || 'http://127.0.0.1:8000';
fs.mkdirSync(reportDir, { recursive: true });
const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
  defaultViewport: { width: 1440, height: 1000, deviceScaleFactor: 1 }
});
const results = [];
for (const grade of [7, 8, 9]) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${baseUrl}/play.html?grade=${grade}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => typeof Teacher !== 'undefined' && Teacher.getAllTasks().length > 0 && typeof Game !== 'undefined' && typeof LEVELS_CONFIG !== 'undefined' && typeof formatFormula === 'function' && window.PQPhETLabs, { timeout: 60000 });
  const report = await page.evaluate(() => {
    const all = Teacher.getAllTasks();
    const langs = ['ru', 'kk', 'en'];
    const failures = [];
    const stats = { tasks: all.length, levels: LEVELS_CONFIG.length, types: {}, localizedAnswerChecks: 0, formulaFields: 0, subSupFields: 0, greekFields: 0, reviews: 0 };
    const originalLang = I18n.currentLang;
    const probe = document.createElement('div');
    const add = (task, lang, kind, detail) => {
      failures.push({ id: task.id, type: task.type, topic: task.topic, lang, kind, detail: String(detail || '').slice(0, 500) });
    };
    const localized = (value, lang) => {
      if (value == null) return '';
      if (typeof value === 'object' && !Array.isArray(value)) return value[lang] ?? '';
      return value;
    };
    const textFields = (task, lang) => {
      const fields = [localized(task.question, lang), localized(task.formula, lang), localized(task.explanation, lang), localized(task.hint, lang)];
      const opts = localized(task.options, lang);
      if (Array.isArray(opts)) fields.push(...opts);
      else if (Array.isArray(task.options)) fields.push(...task.options.map(x => localized(x, lang)));
      for (const side of ['left', 'right']) {
        const p = task.pairs && task.pairs[side];
        const vals = localized(p, lang);
        if (Array.isArray(vals)) fields.push(...vals);
        else if (Array.isArray(p)) fields.push(...p.map(x => localized(x, lang)));
      }
      return fields.filter(x => x !== null && x !== undefined && x !== '').map(String);
    };
    const fillCorrect = (task) => {
      const body = document.getElementById('task-body');
      if (task.type === 'multiple-choice') {
        body.querySelector(`.answer-option[data-idx="${task.correctAnswer}"]`)?.classList.add('selected');
      } else if (task.type === 'multi-select') {
        for (const i of task.correctAnswer || []) body.querySelector(`.answer-option[data-idx="${i}"]`)?.classList.add('selected');
      } else if (task.type === 'true-false') {
        body.querySelector(`.answer-option[data-idx="${task.correctAnswer}"]`)?.classList.add('selected');
      } else if (task.type === 'numeric') {
        const input = body.querySelector('#answer-input');
        if (input) input.value = String(task.correctAnswer).replace('.', ',');
      } else if (task.type === 'short-answer') {
        const input = body.querySelector('#answer-input');
        const ca = task.correctAnswer;
        const list = typeof ca === 'string' ? [ca] : Array.isArray(ca) ? ca : (ca?.ru || []);
        if (input) input.value = String(list[0] ?? '');
      } else if (task.type === 'fill-blank') {
        const input = body.querySelector('#answer-input');
        const ca = task.correctAnswer;
        const list = typeof ca === 'string' ? [ca] : Array.isArray(ca) ? ca : (ca?.ru || []);
        if (input) input.value = String(list[0] ?? '');
      } else if (task.type === 'matching') {
        Game.matchingState.pairs = (task.correctPairs || []).map(p => ({ left: p[0], right: p[1] }));
      }
    };
    for (const task of all) {
      stats.types[task.type] = (stats.types[task.type] || 0) + 1;
      if (!task.id) add(task, '-', 'missing-id');
      if (!task.topic) add(task, '-', 'missing-topic');
      for (const lang of langs) {
        I18n.currentLang = lang;
        const fields = textFields(task, lang);
        const question = String(localized(task.question, lang) || '').trim();
        if (!question) add(task, lang, 'missing-question');
        let answerText = '';
        try { answerText = String(Game.getCorrectAnswerText(task) || '').trim(); }
        catch (e) { add(task, lang, 'correct-answer-exception', e.message); }
        stats.localizedAnswerChecks++;
        if (!answerText) add(task, lang, 'empty-correct-answer');
        if (/\b(undefined|NaN|null)\b/.test(answerText)) add(task, lang, 'invalid-correct-answer-text', answerText);
        for (const value of fields) {
          stats.formulaFields++;
          if (/[α-ωΑ-ΩπφρλΔΩ]/.test(value)) stats.greekFields++;
          if (/[_^]|[₀-₉⁰-⁹]/.test(value)) stats.subSupFields++;
          const html = formatFormula(value);
          probe.innerHTML = html;
          const visible = probe.textContent;
          if (/&lt;\/?(?:sub|sup)&gt;|<\/?(?:sub|sup)>/i.test(visible)) add(task, lang, 'raw-formula-markup', visible);
          const formulaText = visible.replace(/https?:\/\/[^\s<>)]+/g, '');
          if (/_(?:[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9])|\^/.test(formulaText)) add(task, lang, 'unconverted-formula-index', visible);
          if (/\bundefined\b|\bNaN\b/.test(visible)) add(task, lang, 'invalid-visible-value', visible);
        }
      }
      I18n.currentLang = 'ru';
      try {
        Game.currentTask = task;
        Game.renderTaskBody(task);
        if (Game.evaluateAnswer(task)) add(task, 'ru', 'empty-answer-accepted');
        fillCorrect(task);
        if (!Game.evaluateAnswer(task)) add(task, 'ru', 'stored-correct-answer-rejected', Game.getCorrectAnswerText(task));
        if (task.type === 'numeric') {
          const input = document.getElementById('answer-input');
          input.value = String(task.correctAnswer) + 'xyz';
          if (Game.evaluateAnswer(task)) add(task, 'ru', 'malformed-numeric-answer-accepted', input.value);
        }
        const review = Game.getTaskReviewHtml(task) || '';
        if (review) stats.reviews++;
        probe.innerHTML = review;
        if (/\bundefined\b|\bNaN\b/.test(probe.textContent)) add(task, 'ru', 'invalid-review', probe.textContent);
      } catch (e) {
        add(task, 'ru', 'runtime-exception', e.stack || e.message);
      }
    }
    I18n.currentLang = originalLang;
    document.getElementById('task-modal').classList.remove('active');
    return { stats, failures };
  });
  report.grade = grade;
  report.pageErrors = errors;
  results.push(report);
  console.log(`GRADE ${grade}: ${report.stats.tasks} tasks, ${report.stats.levels} levels, ${report.failures.length} failures`);
  console.log(`  types=${JSON.stringify(report.stats.types)} reviews=${report.stats.reviews} formulaFields=${report.stats.formulaFields} greek=${report.stats.greekFields} subSup=${report.stats.subSupFields}`);
  if (report.failures.length) {
    const counts = {};
    for (const failure of report.failures) counts[failure.kind] = (counts[failure.kind] || 0) + 1;
    console.log('  failure kinds:', counts);
    console.log(report.failures.filter(f => f.kind !== 'malformed-numeric-answer-accepted').slice(0, 20));
  }
  await page.close();
}
await browser.close();
fs.writeFileSync(path.join(reportDir, 'content-report.json'), JSON.stringify(results, null, 2));
const failures = results.flatMap(r => r.failures.map(f => ({ grade: r.grade, ...f })));
const pageErrors = results.flatMap(r => (r.pageErrors || []).map(message => ({ grade: r.grade, message })));
console.log(`TOTAL: ${results.reduce((n,r) => n+r.stats.tasks,0)} tasks; ${failures.length} failures; ${pageErrors.length} page errors`);
if (failures.length || pageErrors.length) process.exitCode = 1;
