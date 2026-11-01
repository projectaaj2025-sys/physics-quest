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
const expected = {
  7: { 16: 'forces-and-motion-basics', 19: 'masses-and-springs', 33: 'energy-skate-park-basics' },
  8: { 8: 'states-of-matter-basics', 25: 'circuit-construction-kit-dc', 45: 'states-of-matter-basics', 46: 'states-of-matter-basics', 47: 'circuit-construction-kit-dc', 48: 'circuit-construction-kit-dc', 49: 'circuit-construction-kit-dc', 50: 'circuit-construction-kit-dc', 51: 'circuit-construction-kit-dc', 55: 'geometric-optics' },
  9: { 30: 'waves-intro', 46: 'projectile-motion', 47: 'pendulum-lab', 48: 'waves-intro' }
};
const representatives = { 7: [16, 19, 33], 8: [46, 48, 55], 9: [46, 47, 48] };
const reports = [];

for (const grade of [7, 8, 9]) {
  const page = await browser.newPage();
  const pageErrors = [];
  const failures = [];
  const stats = { grade, cards: 0, languages: 0, mobile: 0, roundTrips: 0 };
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.evaluateOnNewDocument(() => {
    try {
      const key = 'physicsquest_account_v1';
      const account = JSON.parse(localStorage.getItem(key) || '{}');
      account.onboarded = true;
      localStorage.setItem(key, JSON.stringify(account));
    } catch (_) {}
  });
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.url().startsWith('https://phet.colorado.edu/')) request.abort().catch(() => {});
    else request.continue().catch(() => {});
  });
  await page.goto(`${baseUrl}/play.html?grade=${grade}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => window.PQPhETLabs && typeof LabGames !== 'undefined' && window.PQPhETLabs.getLevelSimulations, { timeout: 60000 });
  await page.waitForFunction(expectedMap => Object.keys(expectedMap).every(level => (window.GRADE_LAB_GAMES_CONFIG || {})[level]), { timeout: 60000 }, expected[grade]);
  await page.evaluate(() => showLevelSelect());

  const initial = await page.evaluate((expectedMap) => {
    const missingButtons = ['btn-phet-level', 'btn-phet', 'lab-phet', 'field-sim-phet', 'pq-s89-phet', 'pq-phet-entry'].filter(id => document.getElementById(id));
    const actualMap = window.PQPhETLabs.getLevelSimulations()[window.CURRENT_GRADE] || {};
    const mapMismatch = [];
    for (const [level, simulation] of Object.entries(expectedMap)) {
      if (actualMap[level] !== simulation) mapMismatch.push({ level, expected: simulation, actual: actualMap[level] });
      if (!(window.GRADE_LAB_GAMES_CONFIG || {})[level]) mapMismatch.push({ level, missingConfig: true });
    }
    return { missingButtons, mapMismatch, extraLevels: Object.keys(actualMap).filter(level => !expectedMap[level]) };
  }, expected[grade]);
  for (const id of initial.missingButtons) failures.push({ kind: 'legacy-entry', id });
  for (const detail of initial.mapMismatch) failures.push({ kind: 'mapping', detail });
  for (const level of initial.extraLevels) failures.push({ kind: 'unexpected-mapping', level });

  for (const lang of ['ru', 'kk', 'en']) {
    await page.evaluate(language => I18n.setLanguage(language), lang);
    await new Promise(resolve => setTimeout(resolve, 60));
    for (const [level, simulation] of Object.entries(expected[grade])) {
      const result = await page.evaluate(({ level, simulation, lang }) => {
        const cfg = (window.GRADE_LAB_GAMES_CONFIG || {})[level];
        if (!cfg) return { error: 'missing-config' };
        LabGames.show(cfg, null);
        const card = document.querySelector('#lab-phet-context [data-phet-level-card]');
        if (!card) return { error: 'missing-card' };
        const expectedTitle = window.PQPhETLabs.getLevelSimulation(Number(window.CURRENT_GRADE), Number(level))?.title?.[lang] || '';
        const labels = {
          ru: { button: 'Открыть лабораторию', close: '← Вернуться к уровню' },
          kk: { button: 'Зертхананы ашу', close: '← Деңгейге оралу' },
          en: { button: 'Open laboratory', close: '← Return to level' }
        };
        return {
          simulation: card.dataset.simulation,
          level: card.dataset.levelId,
          title: card.querySelector('.pq-phet-level-title')?.textContent || '',
          expectedTitle,
          button: card.querySelector('.pq-phet-level-open')?.textContent || '',
          expectedButton: labels[lang].button,
          expanded: card.dataset.expanded,
          pure: cfg.type === 'phet',
          checkHidden: getComputedStyle(document.getElementById('lab-check')).display === 'none',
          closeText: document.getElementById('lab-close').textContent,
          expectedClose: labels[lang].close,
          count: document.querySelectorAll('#lab-phet-context [data-phet-level-card]').length,
          simulation
        };
      }, { level, simulation, lang });
      stats.cards++;
      if (result.error) failures.push({ kind: result.error, lang, level });
      else {
        if (result.count !== 1 || result.simulation !== simulation || result.level !== String(level)) failures.push({ kind: 'card-binding', lang, level, result });
        if (result.title !== result.expectedTitle) failures.push({ kind: 'title-translation', lang, level, title: result.title, expected: result.expectedTitle });
        if (!result.button.includes(result.expectedButton)) failures.push({ kind: 'button-translation', lang, level, button: result.button, expected: result.expectedButton });
        if (result.pure && (!result.checkHidden || result.expanded !== 'true' || result.closeText !== result.expectedClose)) failures.push({ kind: 'phet-only-layout', lang, level, result });
        if (!result.pure && result.expanded !== 'false') failures.push({ kind: 'compact-layout', lang, level, result });
      }
    }
    stats.languages++;
  }

  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.evaluate(() => I18n.setLanguage('ru'));
  await new Promise(resolve => setTimeout(resolve, 60));
  for (const level of Object.keys(expected[grade])) {
    const overflow = await page.evaluate(level => {
      LabGames.show((window.GRADE_LAB_GAMES_CONFIG || {})[level], null);
      const panel = document.querySelector('#lab-overlay .lab-panel');
      const card = document.querySelector('#lab-phet-context .pq-phet-level-card');
      return {
        document: document.documentElement.scrollWidth - innerWidth,
        panelRight: panel ? panel.getBoundingClientRect().right - innerWidth : 0,
        card: card ? card.scrollWidth - card.clientWidth : 0
      };
    }, level);
    stats.mobile++;
    if (overflow.document > 2 || overflow.panelRight > 2 || overflow.card > 2) failures.push({ kind: 'mobile-overflow', level, overflow });
  }
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });

  for (const level of representatives[grade]) {
    const before = await page.evaluate(level => {
      LabGames.show((window.GRADE_LAB_GAMES_CONFIG || {})[level], null);
      const card = document.querySelector('#lab-phet-context [data-phet-level-card]');
      const button = card?.querySelector('.pq-phet-level-open');
      if (!button) return { error: 'missing-launch' };
      const content = document.getElementById('lab-content').innerHTML;
      button.click();
      return { content, simulation: card.dataset.simulation };
    }, level);
    if (before.error) {
      failures.push({ kind: before.error, level });
      continue;
    }
    await page.waitForFunction(() => window.PQPhETLabs.isOpen(), { timeout: 10000 });
    const opened = await page.evaluate(() => ({
      simulation: document.getElementById('pq-phet-overlay').dataset.simulation,
      gradeLabel: document.getElementById('pq-phet-grade').textContent,
      requestedUrl: document.getElementById('pq-phet-frame').dataset.requestedUrl,
      labStillOpen: document.getElementById('lab-overlay').classList.contains('active')
    }));
    if (opened.simulation !== before.simulation || !opened.gradeLabel.includes(String(level)) || !opened.requestedUrl.includes(`/${before.simulation}/`) || !opened.requestedUrl.includes('locale=ru') || !opened.labStillOpen) {
      failures.push({ kind: 'open-context', level, opened, expected: before.simulation });
    }
    await page.evaluate(() => document.querySelector('#pq-phet-tasks [data-task-index="0"]')?.click());
    await page.evaluate(() => document.getElementById('pq-phet-close').click());
    await page.waitForFunction(() => !window.PQPhETLabs.isOpen());
    await new Promise(resolve => setTimeout(resolve, 180));
    const returned = await page.evaluate(level => ({
      labOpen: document.getElementById('lab-overlay').classList.contains('active'),
      content: document.getElementById('lab-content').innerHTML,
      progress: document.querySelector('#lab-phet-context .pq-phet-level-progress')?.textContent || '',
      focusLevel: document.activeElement?.dataset?.levelId || '',
      phetHidden: document.getElementById('pq-phet-overlay').getAttribute('aria-hidden')
    }), level);
    if (!returned.labOpen || returned.content !== before.content || returned.progress !== '1/3' || returned.focusLevel !== String(level) || returned.phetHidden !== 'true') {
      failures.push({ kind: 'return-context', level, returned, contentPreserved: returned.content === before.content });
    }
    stats.roundTrips++;
  }

  reports.push({ stats, failures, pageErrors });
  console.log(`GRADE ${grade}: cards=${stats.cards}, languages=${stats.languages}, mobile=${stats.mobile}, roundTrips=${stats.roundTrips}, failures=${failures.length}, pageErrors=${pageErrors.length}`);
  if (failures.length) console.log(JSON.stringify(failures, null, 2));
  await page.close();
}

await browser.close();
fs.writeFileSync(path.join(reportDir, 'phet-levels-report.json'), JSON.stringify(reports, null, 2));
const failures = reports.flatMap(report => report.failures.map(failure => ({ grade: report.stats.grade, ...failure })));
const pageErrors = reports.flatMap(report => report.pageErrors.map(message => ({ grade: report.stats.grade, message })));
console.log(`TOTAL: ${reports.reduce((sum, report) => sum + report.stats.roundTrips, 0)} PhET round trips; ${failures.length} failures; ${pageErrors.length} page errors`);
if (failures.length || pageErrors.length) {
  console.log(JSON.stringify({ failures, pageErrors }, null, 2));
  process.exitCode = 1;
}
