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
const allReports = [];

for (const grade of [7, 8, 9]) {
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));
  await page.goto(`${baseUrl}/play.html?grade=${grade}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => typeof Teacher !== 'undefined' && Teacher.getAllTasks().length > 0 && typeof Game !== 'undefined' && typeof LEVELS_CONFIG !== 'undefined' && typeof openTheory === 'function' && window.PQPhETLabs, { timeout: 60000 });
  await page.evaluate(() => {
    const cfg = LEVELS_CONFIG[0];
    Game.currentLevel = cfg.id;
    Game.levelConfig = cfg;
    Game.running = false;
    Game.paused = false;
    Game.player = { x: 200, y: 500, shieldActive: false, shieldTarget: 0 };
    Game.shield = 30;
    Game.cityHealth = cfg.cityHealth;
    Game.cityMaxHealth = cfg.cityHealth;
    Game.levelTasksTotal = 20;
    Game.taskPlan = [];
    Game.completedTaskIds = [];
    Game.failedTaskIds = [];
    Game.tasksSolved = 0;
    Game.tasksAttempted = 0;
    Game.score = 0;
    showScreen('game-screen');
    window.showNotification = () => {};
  });

  const report = await page.evaluate(async (grade) => {
    const failures = [];
    const stats = { grade, lessonRuns: 0, correctLessonAnswers: 0, theoryTabs: 0, desktopLessons: 0, mobileLessons: 0, multilingualTypes: 0, wrongThenCorrect: 0, exhaustedReviews: 0, darkTypeChecks: 0, subSupInLessons: 0, greekInLessons: 0 };
    const types = ['multiple-choice', 'multi-select', 'matching', 'short-answer', 'numeric', 'true-false', 'fill-blank'];
    const tasks = Teacher.getAllTasks();
    const add = (kind, detail) => { if (failures.length < 250) failures.push({ kind, ...detail }); };
    const clearClose = () => { if (Game.autoCloseTimeout) { clearTimeout(Game.autoCloseTimeout); Game.autoCloseTimeout = null; } };
    const normalizedText = (value) => {
      const p = document.createElement('div');
      p.innerHTML = formatFormula(value == null ? '' : String(value));
      return p.textContent.replace(/\s+/g, ' ').trim();
    };
    const checkMarkup = (root, context) => {
      const text = root?.textContent || '';
      if (/<\/?(?:sub|sup)>|&lt;\/?(?:sub|sup)&gt;/i.test(text)) add('raw-markup', { ...context, text: text.slice(0, 250) });
      if (/\bundefined\b|\bNaN\b/.test(text)) add('invalid-visible-value', { ...context, text: text.slice(0, 250) });
      const formulaText = text.replace(/https?:\/\/[^\s<>)]+/g, '');
      if (/_(?:[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9])|\^/.test(formulaText)) add('unconverted-index', { ...context, text: text.slice(0, 250) });
    };
    const checkLayout = (selector, context) => {
      const root = document.querySelector(selector);
      if (!root) { add('missing-layout-root', { ...context, selector }); return; }
      const over = root.scrollWidth - root.clientWidth;
      if (over > 2) add('horizontal-overflow', { ...context, selector, over, scrollWidth: root.scrollWidth, clientWidth: root.clientWidth });
      const docOver = document.documentElement.scrollWidth - window.innerWidth;
      if (docOver > 2) add('document-overflow', { ...context, over: docOver });
      const clipped = [...root.querySelectorAll('*')].filter(el => {
        const cs = getComputedStyle(el);
        return el.clientWidth > 0 && cs.overflowX === 'hidden' && el.scrollWidth > el.clientWidth + 2;
      }).slice(0, 4).map(el => ({ tag: el.tagName, cls: el.className, over: el.scrollWidth - el.clientWidth, text: (el.textContent || '').slice(0, 120) }));
      if (clipped.length) add('clipped-content', { ...context, selector, clipped });
      checkMarkup(root, context);
    };
    const taskPool = (cfg) => tasks.filter(t => t.topic === 'lesson:' + cfg.id || (cfg.topics || []).includes(t.topic));
    const formulaScore = (t) => {
      const values = [I18n.getLocalized(t, 'question'), I18n.getLocalized(t, 'formula'), I18n.getLocalized(t, 'explanation')].join(' ');
      return (values.match(/[_^₀-₉⁰-⁹]/g) || []).length * 3 + (values.match(/[α-ωΑ-ΩπφρλΔΩ]/g) || []).length * 2 + Math.min(20, values.length / 100);
    };
    const correctInput = (task) => {
      const body = document.getElementById('task-body');
      if (task.type === 'multiple-choice') {
        body.querySelector(`.answer-option[data-idx="${task.correctAnswer}"]`)?.click();
      } else if (task.type === 'multi-select') {
        for (const i of task.correctAnswer || []) body.querySelector(`.answer-option[data-idx="${i}"]`)?.click();
      } else if (task.type === 'true-false') {
        body.querySelector(`.answer-option[data-idx="${task.correctAnswer}"]`)?.click();
      } else if (task.type === 'numeric') {
        const input = body.querySelector('#answer-input');
        if (input) input.value = String(task.correctAnswer).replace('.', ',');
      } else if (task.type === 'short-answer' || task.type === 'fill-blank') {
        const input = body.querySelector('#answer-input');
        if (input) input.value = localizeAnswerValues(task.correctAnswer)[0] || '';
      } else if (task.type === 'matching') {
        for (const p of task.correctPairs || []) {
          body.querySelector(`.matching-item[data-col="left"][data-idx="${p[0]}"]`)?.click();
          body.querySelector(`.matching-item[data-col="right"][data-idx="${p[1]}"]`)?.click();
        }
        return true;
      }
      return false;
    };
    const wrongInput = (task) => {
      const body = document.getElementById('task-body');
      if (task.type === 'multiple-choice') {
        const count = localizeStringList(task.options).length;
        body.querySelector(`.answer-option[data-idx="${(Number(task.correctAnswer) + 1) % count}"]`)?.click();
      } else if (task.type === 'multi-select') {
        // Пустой выбор — тоже неверный ответ, кнопка это корректно обрабатывает.
      } else if (task.type === 'true-false') {
        body.querySelector(`.answer-option[data-idx="${!task.correctAnswer}"]`)?.click();
      } else if (task.type === 'numeric') {
        const input = body.querySelector('#answer-input');
        if (input) input.value = String(task.correctAnswer) + 'xyz';
      } else if (task.type === 'short-answer' || task.type === 'fill-blank') {
        const input = body.querySelector('#answer-input');
        if (input) input.value = 'definitely-not-the-correct-answer';
      } else if (task.type === 'matching') {
        const pairs = task.correctPairs || [];
        const n = pairs.length;
        pairs.forEach((p, i) => {
          const wrongRight = pairs[(i + 1) % n][1];
          body.querySelector(`.matching-item[data-col="left"][data-idx="${p[0]}"]`)?.click();
          body.querySelector(`.matching-item[data-col="right"][data-idx="${wrongRight}"]`)?.click();
        });
        return true;
      }
      return false;
    };
    const submit = (task, auto) => { if (!auto) Game.checkAnswer(); };
    const verifyCorrect = (task, context) => {
      const feedback = document.getElementById('task-feedback');
      if (!Game.taskResolved || !feedback.classList.contains('correct')) add('correct-answer-feedback', { ...context, id: task.id, type: task.type, attempts: Game.taskAttempts, html: feedback.innerHTML.slice(0, 300) });
      if (!document.getElementById('btn-submit').disabled) add('submit-still-enabled', { ...context, id: task.id });
      if (!feedback.textContent.trim() || !(Game.getTaskReviewHtml(task) || '').trim()) add('missing-review', { ...context, id: task.id });
      checkLayout('#task-modal .modal-content', { ...context, id: task.id, type: task.type, state: 'correct' });
      clearClose();
    };
    const prepareLevel = (cfg) => {
      Game.currentLevel = cfg.id;
      Game.levelConfig = cfg;
      Game.cityHealth = cfg.cityHealth;
      Game.cityMaxHealth = cfg.cityHealth;
      Game.shield = 30;
      Game.taskAttemptsLimit = 5;
      Game.taskHintsLimit = 3;
    };
    const auditTheory = (cfg, viewport) => {
      openTheory(cfg.id);
      const tabs = ['textbook', 'conspekt', 'solution', 'formulas', 'experiment'];
      for (const tab of tabs) {
        const button = document.querySelector(`#theory-tabs [data-tab="${tab}"]`);
        if (tab !== 'textbook' && (!button || getComputedStyle(button).display === 'none')) continue;
        setTheoryTab(tab);
        stats.theoryTabs++;
        const content = document.getElementById('theory-content');
        if (!content.textContent.trim()) add('empty-theory', { viewport, level: cfg.id, tab });
        stats.subSupInLessons += content.querySelectorAll('sub,sup').length;
        stats.greekInLessons += ((content.textContent.match(/[α-ωΑ-ΩπφρλΔΩ]/g) || []).length);
        checkLayout('#theory-modal .modal-content', { viewport, level: cfg.id, tab });
      }
      document.getElementById('theory-modal').classList.remove('active');
    };
    const runLessons = async (viewport) => {
      I18n.setLanguage('ru');
      PQTheme.set('light');
      for (let i = 0; i < LEVELS_CONFIG.length; i++) {
        const cfg = LEVELS_CONFIG[i];
        prepareLevel(cfg);
        const pool = taskPool(cfg);
        if (!pool.length) { add('empty-level-pool', { viewport, level: cfg.id }); continue; }
        const desired = types[i % types.length];
        const typed = pool.filter(t => t.type === desired);
        const candidates = typed.length ? typed : pool;
        const task = candidates.slice().sort((a, b) => formulaScore(b) - formulaScore(a))[0];
        Game.showTask(task);
        stats.lessonRuns++;
        if (viewport === 'desktop') stats.desktopLessons++; else stats.mobileLessons++;
        const content = document.getElementById('task-body');
        stats.subSupInLessons += content.querySelectorAll('sub,sup').length;
        stats.greekInLessons += ((content.textContent.match(/[α-ωΑ-ΩπφρλΔΩ]/g) || []).length);
        checkLayout('#task-modal .modal-content', { viewport, level: cfg.id, id: task.id, type: task.type, state: 'question' });
        const auto = correctInput(task);
        submit(task, auto);
        if (Game.taskResolved) stats.correctLessonAnswers++;
        verifyCorrect(task, { viewport, level: cfg.id });
        auditTheory(cfg, viewport);
        if (i % 10 === 0) await new Promise(r => setTimeout(r, 0));
      }
      document.getElementById('task-modal').classList.remove('active');
    };

    await runLessons('desktop');

    // Три языка × семь типов: неверный ответ, затем верный; затем пять ошибок и показ ответа.
    for (const lang of ['ru', 'kk', 'en']) {
      I18n.setLanguage(lang);
      PQTheme.set(lang === 'kk' ? 'dark' : 'light');
      prepareLevel(LEVELS_CONFIG[0]);
      for (const type of types) {
        const candidates = tasks.filter(t => t.type === type);
        if (!candidates.length) { add('missing-type', { lang, type }); continue; }
        const task = candidates.slice().sort((a, b) => formulaScore(b) - formulaScore(a))[0];
        stats.multilingualTypes++;
        if (lang === 'kk') stats.darkTypeChecks++;
        Game.showTask(task);
        let auto = wrongInput(task);
        submit(task, auto);
        const wrongFeedback = document.getElementById('task-feedback');
        if (Game.taskResolved || !wrongFeedback.classList.contains('wrong') || Game.taskAttempts !== 1) add('wrong-answer-feedback', { lang, id: task.id, type, attempts: Game.taskAttempts, html: wrongFeedback.innerHTML.slice(0, 250) });
        auto = correctInput(task);
        submit(task, auto);
        if (Game.taskResolved) stats.wrongThenCorrect++;
        verifyCorrect(task, { lang, type, phase: 'wrong-then-correct' });

        Game.showTask(task);
        Game.cityHealth = Game.levelConfig.cityHealth;
        for (let attempt = 1; attempt <= 5; attempt++) {
          auto = wrongInput(task);
          submit(task, auto);
          if (attempt < 5 && Game.taskResolved) add('resolved-too-early', { lang, id: task.id, type, attempt });
        }
        const failed = document.getElementById('task-feedback');
        const expected = normalizedText(Game.getCorrectAnswerText(task));
        const actual = failed.textContent.replace(/\s+/g, ' ').trim();
        if (!Game.taskResolved || !failed.classList.contains('wrong') || !expected || !actual.includes(expected)) add('exhausted-correct-answer-missing', { lang, id: task.id, type, expected, actual: actual.slice(0, 500) });
        if (!(Game.getTaskReviewHtml(task) || '').trim()) add('exhausted-review-missing', { lang, id: task.id, type });
        stats.exhaustedReviews++;
        checkLayout('#task-modal .modal-content', { lang, id: task.id, type, state: 'exhausted' });
        clearClose();
      }
    }
    I18n.setLanguage('ru');
    PQTheme.set('light');
    document.getElementById('task-modal').classList.remove('active');
    return { stats, failures };
  }, grade);

  // Мобильный проход по каждому уроку на том же реальном UI.
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  const mobile = await page.evaluate(async () => {
    const failures = [];
    const stats = { lessonRuns: 0, correctLessonAnswers: 0, theoryTabs: 0, subSupInLessons: 0, greekInLessons: 0 };
    const types = ['multiple-choice', 'multi-select', 'matching', 'short-answer', 'numeric', 'true-false', 'fill-blank'];
    const tasks = Teacher.getAllTasks();
    const add = (kind, detail) => { if (failures.length < 250) failures.push({ kind, ...detail }); };
    const clearClose = () => { if (Game.autoCloseTimeout) { clearTimeout(Game.autoCloseTimeout); Game.autoCloseTimeout = null; } };
    const formulaScore = (t) => {
      const values = [I18n.getLocalized(t, 'question'), I18n.getLocalized(t, 'formula'), I18n.getLocalized(t, 'explanation')].join(' ');
      return (values.match(/[_^₀-₉⁰-⁹]/g) || []).length * 3 + (values.match(/[α-ωΑ-ΩπφρλΔΩ]/g) || []).length * 2;
    };
    const checkLayout = (selector, context) => {
      const root = document.querySelector(selector);
      if (!root) return;
      const over = root.scrollWidth - root.clientWidth;
      if (over > 2) add('horizontal-overflow', { ...context, selector, over, scrollWidth: root.scrollWidth, clientWidth: root.clientWidth });
      const docOver = document.documentElement.scrollWidth - innerWidth;
      if (docOver > 2) add('document-overflow', { ...context, over: docOver });
      const clipped = [...root.querySelectorAll('*')].filter(el => {
        const cs = getComputedStyle(el);
        return el.clientWidth > 0 && cs.overflowX === 'hidden' && el.scrollWidth > el.clientWidth + 2;
      }).slice(0, 4).map(el => ({ tag: el.tagName, cls: el.className, over: el.scrollWidth - el.clientWidth, text: (el.textContent || '').slice(0, 120) }));
      if (clipped.length) add('clipped-content', { ...context, selector, clipped });
      const text = root.textContent || '';
      if (/<\/?(?:sub|sup)>|&lt;\/?(?:sub|sup)&gt;/i.test(text) || /\bundefined\b|\bNaN\b/.test(text)) add('bad-markup', { ...context, text: text.slice(0, 250) });
      const formulaText = text.replace(/https?:\/\/[^\s<>)]+/g, '');
      if (/_(?:[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9])|\^/.test(formulaText)) add('unconverted-index', { ...context, text: text.slice(0, 250) });
    };
    const correctInput = (task) => {
      const body = document.getElementById('task-body');
      if (task.type === 'multiple-choice') body.querySelector(`.answer-option[data-idx="${task.correctAnswer}"]`)?.click();
      else if (task.type === 'multi-select') for (const i of task.correctAnswer || []) body.querySelector(`.answer-option[data-idx="${i}"]`)?.click();
      else if (task.type === 'true-false') body.querySelector(`.answer-option[data-idx="${task.correctAnswer}"]`)?.click();
      else if (task.type === 'numeric') body.querySelector('#answer-input').value = String(task.correctAnswer).replace('.', ',');
      else if (task.type === 'short-answer' || task.type === 'fill-blank') body.querySelector('#answer-input').value = localizeAnswerValues(task.correctAnswer)[0] || '';
      else if (task.type === 'matching') {
        for (const p of task.correctPairs || []) {
          body.querySelector(`.matching-item[data-col="left"][data-idx="${p[0]}"]`)?.click();
          body.querySelector(`.matching-item[data-col="right"][data-idx="${p[1]}"]`)?.click();
        }
        return true;
      }
      return false;
    };
    I18n.setLanguage('ru');
    PQTheme.set('light');
    for (let i = 0; i < LEVELS_CONFIG.length; i++) {
      const cfg = LEVELS_CONFIG[i];
      Game.currentLevel = cfg.id;
      Game.levelConfig = cfg;
      Game.cityHealth = cfg.cityHealth;
      Game.cityMaxHealth = cfg.cityHealth;
      Game.shield = 30;
      const pool = tasks.filter(t => t.topic === 'lesson:' + cfg.id || (cfg.topics || []).includes(t.topic));
      const typed = pool.filter(t => t.type === types[i % types.length]);
      const candidates = typed.length ? typed : pool;
      if (!candidates.length) { add('empty-level-pool', { level: cfg.id }); continue; }
      const task = candidates.slice().sort((a, b) => formulaScore(b) - formulaScore(a))[0];
      Game.showTask(task);
      stats.lessonRuns++;
      const body = document.getElementById('task-body');
      stats.subSupInLessons += body.querySelectorAll('sub,sup').length;
      stats.greekInLessons += ((body.textContent.match(/[α-ωΑ-ΩπφρλΔΩ]/g) || []).length);
      checkLayout('#task-modal .modal-content', { viewport: 'mobile', level: cfg.id, id: task.id, type: task.type, state: 'question' });
      const auto = correctInput(task);
      if (!auto) Game.checkAnswer();
      if (Game.taskResolved) stats.correctLessonAnswers++;
      const feedback = document.getElementById('task-feedback');
      if (!Game.taskResolved || !feedback.classList.contains('correct')) add('correct-answer-feedback', { viewport: 'mobile', level: cfg.id, id: task.id, type: task.type });
      checkLayout('#task-modal .modal-content', { viewport: 'mobile', level: cfg.id, id: task.id, type: task.type, state: 'correct' });
      clearClose();

      openTheory(cfg.id);
      for (const tab of ['textbook', 'conspekt', 'solution', 'formulas', 'experiment']) {
        const button = document.querySelector(`#theory-tabs [data-tab="${tab}"]`);
        if (tab !== 'textbook' && (!button || getComputedStyle(button).display === 'none')) continue;
        setTheoryTab(tab);
        stats.theoryTabs++;
        const content = document.getElementById('theory-content');
        if (!content.textContent.trim()) add('empty-theory', { viewport: 'mobile', level: cfg.id, tab });
        stats.subSupInLessons += content.querySelectorAll('sub,sup').length;
        stats.greekInLessons += ((content.textContent.match(/[α-ωΑ-ΩπφρλΔΩ]/g) || []).length);
        checkLayout('#theory-modal .modal-content', { viewport: 'mobile', level: cfg.id, tab });
      }
      document.getElementById('theory-modal').classList.remove('active');
      if (i % 10 === 0) await new Promise(r => setTimeout(r, 0));
    }
    document.getElementById('task-modal').classList.remove('active');
    return { stats, failures };
  });
  report.mobile = mobile;
  report.pageErrors = pageErrors;
  allReports.push(report);
  console.log(`GRADE ${grade}: desktop=${report.stats.lessonRuns}, mobile=${mobile.stats.lessonRuns}, theoryTabs=${report.stats.theoryTabs + mobile.stats.theoryTabs}, multilingual=${report.stats.multilingualTypes}, failures=${report.failures.length + mobile.failures.length}`);
  const failures = [...report.failures, ...mobile.failures];
  const counts = {};
  for (const f of failures) counts[f.kind] = (counts[f.kind] || 0) + 1;
  console.log('  failure kinds:', counts);
  if (failures.length) console.log(failures.slice(0, 18));
  await page.close();
}
await browser.close();
fs.writeFileSync(path.join(reportDir, 'lessons-report.json'), JSON.stringify(allReports, null, 2));
const failures = allReports.flatMap(r => [...r.failures, ...r.mobile.failures].map(f => ({ grade: r.stats.grade, ...f })));
const pageErrors = allReports.flatMap(r => (r.pageErrors || []).map(message => ({ grade: r.stats.grade, message })));
console.log('TOTAL FAILURES', failures.length, 'PAGE ERRORS', pageErrors.length);
if (failures.length || pageErrors.length) process.exitCode = 1;
