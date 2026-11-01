import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
const reportDir = process.env.PQ_AUDIT_DIR || path.join(os.tmpdir(), 'pq-browser');
const baseUrl = process.env.PQ_BASE_URL || 'http://127.0.0.1:8000';
fs.mkdirSync(reportDir, { recursive: true });
const browser = await puppeteer.launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: chromium.headless, defaultViewport: { width: 1440, height: 1000 } });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(`${baseUrl}/screenshots.html`, { waitUntil: 'networkidle0', timeout: 60000 });
const report = await page.evaluate(async () => {
  const failures = [];
  const stats = { languages: 0, filters: 0, assets: 0, phetCards: 0, interfaceStat: '', labStat: '' };
  const add = (kind, detail) => failures.push({ kind, detail });
  const expected = {
    ru: { section: 'PhET внутри мини-игр уровней', card: 'PhET в мини-игре 7 класса', dark: 'Верный ответ в тёмной теме' },
    kk: { section: 'Деңгей мини-ойындарындағы PhET', card: '7 сынып мини-ойынындағы PhET', dark: 'Қараңғы тақырыптағы дұрыс жауап' },
    en: { section: 'PhET inside level mini-games', card: 'PhET in a Grade 7 mini-game', dark: 'Correct answer in the dark theme' }
  };
  for (const lang of ['ru', 'kk', 'en']) {
    document.querySelector(`.langs button[data-lang="${lang}"]`).click();
    stats.languages++;
    if (document.documentElement.lang !== lang) add('language-not-applied', lang);
    if (document.querySelector('#sec-phet h2')?.textContent !== expected[lang].section) add('phet-section-translation', { lang, text: document.querySelector('#sec-phet h2')?.textContent });
    const phetCards = [...document.querySelectorAll('#sec-phet .shot-card')];
    if (phetCards.length !== 6) add('phet-card-count', { lang, count: phetCards.length });
    stats.phetCards = phetCards.length;
    const firstTitle = phetCards[0]?.querySelector('.t')?.textContent || '';
    if (!firstTitle.includes(expected[lang].card)) add('phet-card-translation', { lang, text: firstTitle });
    const darkCard = document.querySelector('[data-img$="ui-task-g8-dark.png"] .t')?.textContent || '';
    if (!darkCard.includes(expected[lang].dark)) add('dark-card-translation', { lang, text: darkCard });
    if (document.querySelector('#sec-task .shot-card')?.length === 0) add('missing-task-section', lang);
    if (document.querySelectorAll('#sec-task .shot-card').length !== 5) add('task-card-count', { lang, count: document.querySelectorAll('#sec-task .shot-card').length });
    if (document.querySelectorAll('#sec-galleries [data-grade]').length !== 3) add('gallery-card-count', { lang, count: document.querySelectorAll('#sec-galleries [data-grade]').length });
    stats.interfaceStat = document.getElementById('stat-screens').textContent;
    stats.labStat = document.getElementById('stat-labs').textContent;
    if (stats.interfaceStat !== '39' || stats.labStat !== '59') add('hero-stats', { lang, screens: stats.interfaceStat, labs: stats.labStat });
    if (/50 симулятор|50 симулятор|50 simulators/.test(document.querySelector('.hero .lead').textContent)) add('outdated-lead', lang);

    for (const grade of ['all', '7', '8', '9']) {
      document.querySelector(`.gbtn[data-grade="${grade}"]`).click();
      stats.filters++;
      const visible = [...document.querySelectorAll('#sections [data-grade]')].filter(el => el.style.display !== 'none' && el.closest('.shot-sec')?.style.display !== 'none');
      if (!visible.length) add('empty-filter', { lang, grade });
      const wrong = visible.filter(el => el.dataset.grade !== 'all' && el.dataset.grade !== grade && grade !== 'all');
      if (wrong.length) add('wrong-grade-visible', { lang, grade, count: wrong.length });
      const expectedPhet = grade === 'all' ? 6 : 2;
      const visiblePhet = [...document.querySelectorAll('#sec-phet .shot-card')].filter(el => el.style.display !== 'none');
      if (visiblePhet.length !== expectedPhet) add('phet-filter', { lang, grade, count: visiblePhet.length, expected: expectedPhet });
      const gallery = document.getElementById('sec-galleries');
      const visibleGallery = [...gallery.querySelectorAll('[data-grade]')].filter(el => el.style.display !== 'none');
      const expectedGallery = grade === 'all' ? 3 : 1;
      if (visibleGallery.length !== expectedGallery) add('gallery-filter', { lang, grade, count: visibleGallery.length, expected: expectedGallery });
    }
    document.querySelector('.gbtn[data-grade="all"]').click();
  }
  const urls = [...new Set([...document.querySelectorAll('[data-img]')].map(el => el.getAttribute('data-img')))];
  const checks = await Promise.all(urls.map(async url => {
    try { const response = await fetch(url, { method: 'HEAD' }); return { url, ok: response.ok, status: response.status }; }
    catch (e) { return { url, ok: false, status: e.message }; }
  }));
  stats.assets = checks.length;
  for (const check of checks) if (!check.ok) add('missing-asset', check);

  document.querySelector('#sec-phet .shot-card').click();
  if (!document.getElementById('lightbox').classList.contains('open')) add('lightbox-open');
  if (!document.getElementById('lightbox-img').src.includes('phet-level-g7.png')) add('lightbox-image', document.getElementById('lightbox-img').src);
  document.getElementById('lightbox-x').click();
  document.getElementById('theme-toggle').click();
  if (document.documentElement.dataset.theme !== 'dark') add('dark-theme-toggle');
  document.getElementById('theme-toggle').click();
  return { stats, failures };
});
await page.setViewport({ width: 390, height: 844 });
const mobile = await page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth,
  phetWidth: document.getElementById('sec-phet').getBoundingClientRect().width,
  filtersWidth: document.getElementById('gradebar').getBoundingClientRect().width
}));
if (mobile.scrollWidth > mobile.innerWidth + 2) report.failures.push({ kind: 'mobile-overflow', detail: mobile });
report.pageErrors = errors;
console.log(JSON.stringify({ stats: report.stats, mobile, failures: report.failures, pageErrors: errors }, null, 2));
fs.writeFileSync(path.join(reportDir, 'gallery-report.json'), JSON.stringify(report, null, 2));
await browser.close();
if (report.failures.length || errors.length) process.exitCode = 1;
