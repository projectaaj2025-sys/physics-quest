import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const outDir = path.join(rootDir, 'assets', 'screenshots');
const reportDir = process.env.PQ_AUDIT_DIR || path.join(os.tmpdir(), 'pq-browser');
const baseUrl = process.env.PQ_BASE_URL || 'http://127.0.0.1:8000';
fs.mkdirSync(reportDir, { recursive: true });
const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
  defaultViewport: { width: 1568, height: 980, deviceScaleFactor: 1 }
});
const manifest = [];
const levelForGrade = { 7: 19, 8: 48, 9: 47 };
const miniGameLevels = { 7: [], 8: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55], 9: [45, 46, 47, 48] };
const taskForGrade = { 7: 'p6', 8: 'p24q14', 9: 'p11-q11' };

async function shotElement(page, selector, file) {
  const el = await page.$(selector);
  if (!el) throw new Error(`Missing ${selector} for ${file}`);
  await el.evaluate(node => node.scrollIntoView({ block: 'start', behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 80));
  const target = path.join(outDir, file);
  await el.screenshot({ path: target, captureBeyondViewport: true });
  const size = fs.statSync(target).size;
  const box = await el.boundingBox();
  manifest.push({ file, width: Math.round(box.width), height: Math.round(box.height), bytes: size });
  console.log('CAPTURE', file, Math.round(box.width) + 'x' + Math.round(box.height), size);
}

// Экран уровней имеет собственный scroll container. Chromium captureBeyondViewport
// оставляет нижние ряды такой секции пустыми. Для финального кадра переносим точный
// DOM-клон с теми же parent/body-классами в обычный document flow: содержимое,
// тексты и стили остаются реальными, но вся галерея доступна для полного снимка.
async function shotFullGallery(page, selector, file) {
  const el = await page.$(selector);
  if (!el) throw new Error(`Missing ${selector} for ${file}`);
  await el.evaluate(section => {
    const parent = section.parentElement;
    const width = section.getBoundingClientRect().width || window.__pqGalleryCaptureWidth;
    if (!width) throw new Error('Visible gallery width was not recorded');
    const host = document.createElement('div');
    host.id = 'pq-capture-gallery';
    host.className = parent.className;
    host.style.cssText = `display:block;box-sizing:border-box;width:${width}px;max-width:none;margin:0;padding:0;`;
    const clone = section.cloneNode(true);
    clone.style.display = 'block';
    clone.style.visibility = 'visible';
    host.appendChild(clone);
    document.body.replaceChildren(host);
    document.documentElement.style.height = 'auto';
    document.documentElement.style.overflow = 'visible';
    document.body.style.height = 'auto';
    document.body.style.minHeight = '0';
    document.body.style.overflow = 'visible';
  });
  await new Promise(r => setTimeout(r, 400));
  const clone = await page.$(selector);
  if (!clone) throw new Error(`Missing gallery clone ${selector}`);
  const clip = await clone.evaluate(section => {
    const rect = section.getBoundingClientRect();
    let bottom = rect.bottom;
    section.querySelectorAll('*').forEach(node => {
      const style = getComputedStyle(node);
      if (style.display === 'none' || style.visibility === 'hidden') return;
      bottom = Math.max(bottom, node.getBoundingClientRect().bottom);
    });
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
      width: rect.width,
      height: Math.ceil(bottom - rect.top + 1)
    };
  });
  if (clip.width <= 100 || clip.height <= 1000) throw new Error(`Invalid gallery bounds for ${file}: ${JSON.stringify(clip)}`);
  const target = path.join(outDir, file);
  await page.screenshot({ path: target, clip, captureBeyondViewport: true });
  const size = fs.statSync(target).size;
  manifest.push({ file, width: Math.round(clip.width), height: clip.height, bytes: size });
  console.log('CAPTURE', file, Math.round(clip.width) + 'x' + clip.height, size, 'full-flow');
}

async function shotPage(page, file) {
  // Ждём завершения fade-out закрытых PhET/Theory overlays и смены темы.
  await new Promise(r => setTimeout(r, 400));
  const target = path.join(outDir, file);
  await page.screenshot({ path: target, fullPage: false });
  manifest.push({ file, width: 1568, height: 980, bytes: fs.statSync(target).size });
  console.log('CAPTURE', file, '1568x980', fs.statSync(target).size);
}

for (const grade of [7, 8, 9]) {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => {
    try {
      const key = 'physicsquest_account_v1';
      const account = JSON.parse(localStorage.getItem(key) || '{}');
      account.onboarded = true;
      localStorage.setItem(key, JSON.stringify(account));
    } catch (_) {}
  });
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().startsWith('https://phet.colorado.edu/')) req.abort().catch(() => {});
    else req.continue().catch(() => {});
  });
  await page.goto(`${baseUrl}/play.html?grade=${grade}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => typeof Teacher !== 'undefined' && Teacher.getAllTasks().length > 0 && typeof Game !== 'undefined' && typeof LEVELS_CONFIG !== 'undefined' && typeof openTheory === 'function' && window.PQPhETLabs && window.PQPhETLabs.getLevelSimulations, { timeout: 60000 });
  await page.waitForFunction(level => (window.GRADE_LAB_GAMES_CONFIG || {})[level], { timeout: 60000 }, levelForGrade[grade]);
  await page.evaluate(() => {
    I18n.setLanguage('ru');
    PQTheme.set('light');
    window.showNotification = () => {};
    document.getElementById('pq-account-modal')?.remove();
    showLevelSelect();
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  });
  await page.evaluate(selector => {
    const section = document.querySelector(selector);
    if (!section) throw new Error('Missing gallery before capture: ' + selector);
    window.__pqGalleryCaptureWidth = section.getBoundingClientRect().width;
  }, grade === 7 ? '#field-simulations-section' : '#pq-sim89-section');

  // Все 15 собственных мини-игр: без старой общей кнопки PhET,
  // а на тематических уровнях — с новой связанной карточкой.
  for (const level of miniGameLevels[grade]) {
    await page.evaluate(levelId => {
      const cfg = (window.GRADE_LAB_GAMES_CONFIG || {})[levelId];
      if (!cfg) throw new Error('Missing mini-game config ' + levelId);
      LabGames.show(cfg, null);
      const panel = document.querySelector('#lab-overlay .lab-panel');
      if (panel) panel.scrollTop = 0;
    }, level);
    await shotElement(page, '#lab-overlay .lab-panel', `lab-g${grade}-${level}.png`);
  }

  // Карточка открывается из реальной мини-игры, а не из отдельного каталога.
  await page.evaluate(levelId => {
    LabGames.show((window.GRADE_LAB_GAMES_CONFIG || {})[levelId], null);
    const panel = document.querySelector('#lab-overlay .lab-panel');
    if (panel) panel.scrollTop = 0;
  }, levelForGrade[grade]);
  await page.waitForFunction(levelId => document.querySelector(`#lab-phet-context [data-phet-level-card][data-level-id="${levelId}"] .pq-phet-level-open`), { timeout: 10000 }, levelForGrade[grade]);
  await shotElement(page, '#lab-phet-context .pq-phet-level-card', `phet-level-g${grade}.png`);
  await page.evaluate(() => document.querySelector('#lab-phet-context .pq-phet-level-open').click());
  await page.waitForFunction(() => window.PQPhETLabs.isOpen());
  await page.evaluate(async () => {
    for (let i = 0; i < 3; i++) {
      const button = document.querySelector(`#pq-phet-tasks [data-task-index="${i}"]`);
      if (!button) throw new Error('Missing PhET task ' + i);
      button.click();
      await new Promise(r => setTimeout(r, 0));
    }
  });
  await page.waitForFunction(() => document.querySelectorAll('#pq-phet-tasks .pq-phet-task.done').length === 3);
  await shotElement(page, '.pq-phet-guide', `phet-tasks-g${grade}.png`);
  await page.evaluate(() => {
    PQPhETLabs.close();
    LabGames.hide(false);
  });
  await new Promise(r => setTimeout(r, 400));

  await page.evaluate((grade) => {
    let cfg;
    if (grade === 7) cfg = LEVELS_CONFIG.find(c => /Плотность/i.test(levelTitleText(c.id)));
    else if (grade === 8) cfg = LEVELS_CONFIG.find(c => c.id === 8);
    else cfg = LEVELS_CONFIG.find(c => /Маятник/i.test(levelTitleText(c.id))) || LEVELS_CONFIG.find(c => c.id === 25);
    if (!cfg) throw new Error('Theory level not found for grade ' + grade);
    openTheory(cfg.id);
    setTheoryTab('textbook');
    const mc = document.querySelector('#theory-modal .modal-content');
    mc.scrollTop = 0;
    window.__captureTheoryLevel = cfg.id;
  }, grade);
  await page.waitForFunction(() => document.getElementById('theory-modal').classList.contains('active') && document.getElementById('theory-content').textContent.trim().length > 0);
  await shotPage(page, `ui-theory-g${grade}.png`);
  console.log('  theory level', await page.evaluate(() => ({ id: window.__captureTheoryLevel, title: document.getElementById('theory-title').textContent })));

  await page.evaluate((grade, taskId) => {
    document.getElementById('theory-modal').classList.remove('active');
    const task = Teacher.getAllTasks().find(t => t.id === taskId);
    if (!task) throw new Error('Task not found: ' + taskId);
    const cfg = LEVELS_CONFIG.find(c => (c.topics || []).includes(task.topic)) || LEVELS_CONFIG[0];
    Game.currentLevel = cfg.id;
    Game.levelConfig = cfg;
    Game.running = false;
    Game.paused = false;
    Game.player = { x: 780, y: 700, shieldActive: false, shieldTarget: 0 };
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
    Game.showTask(task);
    const input = document.getElementById('answer-input');
    if (!input) throw new Error('Expected numeric input for ' + taskId);
    input.value = String(task.correctAnswer).replace('.', ',');
    Game.checkAnswer();
    if (Game.autoCloseTimeout) { clearTimeout(Game.autoCloseTimeout); Game.autoCloseTimeout = null; }
    if (!document.getElementById('task-feedback').classList.contains('correct')) throw new Error('Correct answer was not accepted: ' + taskId);
  }, grade, taskForGrade[grade]);
  await shotPage(page, `ui-task-g${grade}.png`);
  if (grade === 8) {
    await page.evaluate(() => PQTheme.set('dark'));
    await shotPage(page, 'ui-task-g8-dark.png');
  }

  // Галерею снимаем последней: capture-раскладка намеренно заменяет body этой вкладки.
  await page.evaluate(() => PQTheme.set('light'));
  await shotFullGallery(page, grade === 7 ? '#field-simulations-section' : '#pq-sim89-section', grade === 7 ? 'field7-gallery.png' : `sim89-gallery-g${grade}.png`);
  await page.close();
}
await browser.close();
fs.writeFileSync(path.join(reportDir, 'capture-manifest.json'), JSON.stringify(manifest, null, 2));
console.log('TOTAL', manifest.length, 'frames');
