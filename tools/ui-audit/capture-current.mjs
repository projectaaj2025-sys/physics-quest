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
const simForGrade = { 7: 'energy-skate-park-basics', 8: 'geometric-optics', 9: 'projectile-motion' };
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
  await page.waitForFunction(() => typeof Teacher !== 'undefined' && Teacher.getAllTasks().length > 0 && typeof Game !== 'undefined' && typeof LEVELS_CONFIG !== 'undefined' && typeof openTheory === 'function' && window.PQPhETLabs && document.getElementById('pq-phet-entry'), { timeout: 60000 });
  await page.evaluate(() => {
    I18n.setLanguage('ru');
    PQTheme.set('light');
    window.showNotification = () => {};
    document.getElementById('pq-account-modal')?.remove();
    showLevelSelect();
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  });
  await page.waitForFunction(() => document.querySelectorAll('#pq-phet-entry-list [data-simulation]').length === 3);

  await shotElement(page, '#pq-phet-entry', `phet-catalog-g${grade}.png`);
  await shotElement(page, grade === 7 ? '#field-simulations-section' : '#pq-sim89-section', grade === 7 ? 'field7-gallery.png' : `sim89-gallery-g${grade}.png`);

  await page.evaluate(async (grade, simulationId) => {
    PQPhETLabs.open(grade, null, simulationId);
    for (let i = 0; i < 3; i++) {
      const button = document.querySelector(`#pq-phet-tasks [data-task-index="${i}"]`);
      if (!button) throw new Error('Missing PhET task ' + i);
      button.click();
      await new Promise(r => setTimeout(r, 0));
    }
  }, grade, simForGrade[grade]);
  await page.waitForFunction(() => document.querySelectorAll('#pq-phet-tasks .pq-phet-task.done').length === 3);
  await shotElement(page, '.pq-phet-guide', `phet-tasks-g${grade}.png`);
  await page.evaluate(() => PQPhETLabs.close());

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
  await page.close();
}
await browser.close();
fs.writeFileSync(path.join(reportDir, 'capture-manifest.json'), JSON.stringify(manifest, null, 2));
console.log('TOTAL', manifest.length, 'frames');
