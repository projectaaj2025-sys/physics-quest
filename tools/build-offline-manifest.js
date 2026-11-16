#!/usr/bin/env node
/*
 * Пересобирает список файлов для офлайн-режима (shared/offline-manifest.js)
 * и список оболочки service worker'а больше не дублируется руками.
 *
 * Запуск из корня репозитория:
 *     node tools/build-offline-manifest.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SKIP_DIRS = new Set([".git", "node_modules", "tools", ".github", "docs"]); // docs — отчёты и скриншоты, офлайн-игре не нужны
const EXT = new Set([".html", ".js", ".css", ".json", ".png", ".jpg", ".jpeg", ".svg", ".webmanifest", ".pdf"]);
/* Автономные однофайловые сборки (physics-quest-7/8/9.html) — по ~7 МБ каждая:
   в офлайн-кэш сайта они не нужны. */
const SKIP_FILES = /^physics-quest-\d+\.html$/;

function walk(dir, out) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith(".")) continue;
        const abs = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (SKIP_DIRS.has(entry.name)) continue;
            walk(abs, out);
        } else if (EXT.has(path.extname(entry.name).toLowerCase()) && !SKIP_FILES.test(entry.name)) {
            out.push(path.relative(ROOT, abs).split(path.sep).join("/"));
        }
    }
    return out;
}

const files = walk(ROOT, []).sort((a, b) => a.localeCompare(b, "en"));
const body = files.map((f) => `    ${JSON.stringify(f)}`).join(",\n");
const out = `/* Автоматически сгенерированный список файлов для офлайн-режима.\n   Пересобрать: node tools/build-offline-manifest.js */\nwindow.PQ_OFFLINE_FILES = [\n${body}\n];\n`;
fs.writeFileSync(path.join(ROOT, "shared/offline-manifest.js"), out);
console.log(`shared/offline-manifest.js: ${files.length} files`);
