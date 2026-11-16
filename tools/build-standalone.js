#!/usr/bin/env node
/* ============================================================
   СБОРКА АВТОНОМНЫХ ОДНОФАЙЛОВЫХ ВЕРСИЙ ИГРЫ ДЛЯ 8 И 9 КЛАССА

   Из play.html берётся разметка, список модулей нужной параллели
   и загрузочный блок; все CSS, JS и картинки вшиваются в один .html.
   Полученный файл работает без интернета и без соседних папок:
   достаточно открыть его двойным щелчком или отправить ученику.

   Запуск:  node tools/build-standalone.js           (8 и 9 классы)
            node tools/build-standalone.js 8         (только 8 класс)

   Результат: downloads/physics-quest-8.html
              downloads/physics-quest-9.html
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "downloads");
const CACHE_DIR = path.join(os.tmpdir(), "pq-standalone-assets");

/* Картинки крупнее этого размера ужимаются, чтобы файл не распухал. */
const IMAGE_SOFT_LIMIT = 120 * 1024;
const IMAGE_MAX_SIDE = 1000;
const IMAGE_QUALITY = 70;

const args = process.argv.slice(2).filter((a) => /^[789]$/.test(a)).map(Number);
const GRADES = args.length ? args : [8, 9];

function read(file) {
    return fs.readFileSync(file, "utf8");
}
function exists(file) {
    try {
        fs.accessSync(file);
        return true;
    } catch (_) {
        return false;
    }
}

/* ---------- 1. Разбираем play.html: разметка + список модулей ---------- */

const PLAY = read(path.join(ROOT, "play.html"));

const LOADER_START = PLAY.indexOf("function detectGrade()");
if (LOADER_START < 0) throw new Error("play.html: не найден загрузчик модулей (detectGrade)");
const SCRIPT_OPEN = PLAY.lastIndexOf("<script>", LOADER_START);
const SCRIPT_CLOSE = PLAY.indexOf("</script>", LOADER_START);
if (SCRIPT_OPEN < 0 || SCRIPT_CLOSE < 0) throw new Error("play.html: не удалось выделить загрузчик");
const LOADER_RAW = PLAY.slice(PLAY.indexOf(">", SCRIPT_OPEN) + 1, SCRIPT_CLOSE);

/* Внутри загрузчика всё обёрнуто в (function () { ... })(); — снимаем обёртку,
   чтобы выполнять части по отдельности. */
const IIFE_OPEN = LOADER_RAW.indexOf("(function () {");
const IIFE_CLOSE = LOADER_RAW.lastIndexOf("})();");
if (IIFE_OPEN < 0 || IIFE_CLOSE < 0) throw new Error("play.html: неожиданная обёртка загрузчика");
const LOADER = LOADER_RAW.slice(IIFE_OPEN + "(function () {".length, IIFE_CLOSE);

const HEAD_END = PLAY.indexOf("<script src=\"./shared/account.js\"></script>");
if (HEAD_END < 0) throw new Error("play.html: не найден блок подключения account.js");
const HEAD = PLAY.slice(0, HEAD_END);

/* Загрузочный блок (то, что выполняется после загрузки всех модулей) */
function extractBootBody(source) {
    const marker = source.indexOf("if (index >= scripts.length) {");
    if (marker < 0) throw new Error("play.html: не найден блок запуска игры");
    const open = source.indexOf("{", marker);
    let depth = 0;
    for (let i = open; i < source.length; i += 1) {
        if (source[i] === "{") depth += 1;
        else if (source[i] === "}") {
            depth -= 1;
            if (depth === 0) return source.slice(open + 1, i);
        }
    }
    throw new Error("play.html: незакрытый блок запуска игры");
}
const BOOT_BODY = extractBootBody(LOADER);

/* Список модулей для параллели: выполняем начало загрузчика с жёстким классом */
function moduleListFor(grade) {
    const cut = LOADER.indexOf('const fill = document.getElementById("loading-fill")');
    if (cut < 0) throw new Error("play.html: не найдена инициализация прогресса загрузки");
    let prefix = LOADER.slice(0, cut);
    if (!prefix.includes("const grade = detectGrade();")) {
        throw new Error("play.html: изменилась строка определения класса — поправьте build-standalone.js");
    }
    prefix = prefix.replace("const grade = detectGrade();", `const grade = ${grade};`);
    const doc = { body: { setAttribute() {} }, getElementById() { return null; } };
    const win = { location: { search: "", hash: "" }, PQAccount: null };
    const fn = new Function("document", "window", `${prefix}\nreturn scripts;`);
    const list = fn(doc, win);
    /* Офлайн-модуль тянет манифест из 275 файлов — в один файл он не нужен. */
    return list.filter((src) => !/shared\/(offline|offline-manifest)\.js/.test(src));
}

/* ---------- 2. Картинки: data-URI, ужатие, заглушки ---------- */

const PLACEHOLDER_SVG = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#0f1b33"/><stop offset="1" stop-color="#1d2b4d"/></linearGradient></defs>
<rect width="640" height="360" fill="url(#g)"/>
<text x="320" y="168" text-anchor="middle" font-family="system-ui,Segoe UI,Roboto,sans-serif"
 font-size="26" fill="#93c5fd">📦 Этот материал — в полной версии</text>
<text x="320" y="212" text-anchor="middle" font-family="system-ui,Segoe UI,Roboto,sans-serif"
 font-size="18" fill="#94a3b8">Откройте сайт «Физика-Квест», чтобы посмотреть</text>
</svg>`,
    "utf8"
);
const PLACEHOLDER = `data:image/svg+xml;base64,${PLACEHOLDER_SVG.toString("base64")}`;

const ASSET_RE = /(?:\.\/)?assets\/[A-Za-z0-9_/.-]+\.(?:jpe?g|png|svg|webp|gif|pdf)/g;
const assetCache = new Map();

/* В один файл кладём только «свои» картинки: комиксы и сертификаты этого класса.
   Материалы других классов и печатные PDF остаются заглушками — иначе файл
   распухает до 30+ МБ. */
function assetAllowedForGrade(clean, grade) {
    if (/^assets\/comics\//.test(clean)) return clean.includes(`g${grade}-`) || clean.includes(`g${grade}_`);
    if (/^assets\/certs\//.test(clean)) {
        return !/cert-g[789]/.test(clean) || clean.includes(`cert-g${grade}.`);
    }
    return true;
}

function dataUriFor(relPath, grade) {
    if (assetCache.has(relPath)) return assetCache.get(relPath);
    const clean = relPath.replace(/^\.\//, "");
    const abs = path.join(ROOT, clean);
    let uri = PLACEHOLDER;
    if (!/\.pdf$/i.test(clean) && assetAllowedForGrade(clean, grade) && exists(abs)) {
        let file = abs;
        const size = fs.statSync(abs).size;
        if (/\.(jpe?g|png)$/i.test(abs) && size > IMAGE_SOFT_LIMIT) {
            fs.mkdirSync(CACHE_DIR, { recursive: true });
            const out = path.join(CACHE_DIR, `${IMAGE_MAX_SIDE}-${IMAGE_QUALITY}-${clean.replace(/[^A-Za-z0-9]+/g, "_")}`);
            try {
                if (!exists(out) || fs.statSync(out).mtimeMs < fs.statSync(abs).mtimeMs) {
                    execFileSync("convert", [
                        abs,
                        "-resize", `${IMAGE_MAX_SIDE}x${IMAGE_MAX_SIDE}>`,
                        "-quality", String(IMAGE_QUALITY),
                        "-strip",
                        out
                    ], { stdio: "ignore" });
                }
                if (exists(out) && fs.statSync(out).size > 0) file = out;
            } catch (_) {
                file = abs;
            }
        }
        const mime = /\.png$/i.test(file) ? "image/png" : /\.svg$/i.test(file) ? "image/svg+xml" : "image/jpeg";
        uri = `data:${mime};base64,${fs.readFileSync(file).toString("base64")}`;
    }
    assetCache.set(relPath, uri);
    return uri;
}

function inlineAssets(code, grade) {
    return code.replace(ASSET_RE, (match) => dataUriFor(match, grade));
}

/* ---------- 3. Вшиваем файлы ---------- */

function scriptRelPath(src) {
    return path.join(ROOT, src.replace(/^\.\//, "").split("?")[0]);
}

function inlineScript(src, grade) {
    const rel = src.replace(/^\.\//, "").split("?")[0];
    const file = scriptRelPath(src);
    if (!exists(file)) throw new Error(`Не найден модуль: ${rel}`);
    const code = inlineAssets(read(file), grade);
    if (code.includes("</script")) throw new Error(`В ${rel} есть "</script" — вшить в один файл нельзя`);
    return `<script>/* ===== ${rel} ===== */\n${code}\n</script>`;
}

function inlineStylesheet(href) {
    const file = path.join(ROOT, href.replace(/^\.\//, "").split("?")[0]);
    if (!exists(file)) throw new Error(`Не найден стиль: ${href}`);
    const css = read(file);
    if (css.includes("</style")) throw new Error(`В ${href} есть "</style"`);
    return `<style>/* ===== ${path.basename(file)} ===== */\n${css}\n</style>`;
}

function buildHead(grade) {
    let head = HEAD;
    head = head.replace(/\s*<link rel="manifest"[^>]*>/g, "");
    head = head.replace(/\s*<link rel="(?:apple-touch-)?icon"[^>]*>/g, "");
    head = head.replace(/<title>[^<]*<\/title>/, `<title>Физика-Квест — ${grade} класс</title>`);
    head = head.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g, (_, href) => inlineStylesheet(href));
    head = head.replace(
        "</head>",
        `    <script>${LOCALSTORAGE_FALLBACK}</script>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230284c7'/%3E%3Ctext x='32' y='44' font-size='34' text-anchor='middle'%3E%F0%9F%9A%80%3C/text%3E%3C/svg%3E">
    <style>${STANDALONE_CSS}</style>
</head>`
    );
    return head;
}

/* В некоторых браузерах localStorage на file:// запрещён: чтобы игра всё равно
   работала, подменяем его хранилищем в памяти (прогресс живёт до закрытия вкладки). */
const LOCALSTORAGE_FALLBACK = `
(function () {
    try {
        localStorage.setItem("pq-ls-probe", "1");
        localStorage.removeItem("pq-ls-probe");
        return;
    } catch (e) {}
    var store = Object.create(null);
    var memory = {
        getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
        setItem: function (k, v) { store[k] = String(v); },
        removeItem: function (k) { delete store[k]; },
        clear: function () { store = Object.create(null); },
        key: function (i) { var keys = Object.keys(store); return i < keys.length ? keys[i] : null; },
        get length() { return Object.keys(store).length; }
    };
    try {
        Object.defineProperty(window, "localStorage", { value: memory, configurable: true });
        if (window.localStorage !== memory) window.localStorage = memory;
    } catch (err) {
        try { window.localStorage = memory; } catch (err2) {}
    }
})();
`;

const STANDALONE_CSS = `
/* --- автономная версия: служебные элементы --- */
.pq-standalone-badge {
    position: fixed; right: 12px; bottom: 12px; z-index: 2147483000;
    padding: 7px 12px; border-radius: 999px;
    font: 600 12px/1.2 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    color: #e2e8f0; background: rgba(15, 27, 51, .82);
    border: 1px solid rgba(125, 211, 252, .35);
    backdrop-filter: blur(8px); pointer-events: none;
    opacity: .85;
}
.pq-standalone-toast {
    position: fixed; left: 50%; bottom: 26px; transform: translateX(-50%) translateY(10px);
    z-index: 2147483001; max-width: min(92vw, 460px);
    padding: 13px 18px; border-radius: 14px;
    font: 500 14px/1.45 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    color: #f1f5f9; background: rgba(12, 22, 42, .96);
    border: 1px solid rgba(125, 211, 252, .35);
    box-shadow: 0 18px 40px rgba(2, 8, 23, .5);
    opacity: 0; transition: opacity .22s ease, transform .22s ease;
    pointer-events: none; text-align: center;
}
.pq-standalone-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

function standaloneRuntime(grade) {
    return `
(function () {
    "use strict";
    var GRADE = ${grade};
    var PLACEHOLDER = "${PLACEHOLDER}";

    /* 1. Битая картинка (например, комикс другого класса) → аккуратная заглушка */
    document.addEventListener("error", function (e) {
        var el = e.target;
        if (!el || el.tagName !== "IMG" || el.dataset.pqMissing) return;
        el.dataset.pqMissing = "1";
        el.src = PLACEHOLDER;
    }, true);

    /* 2. Ссылки на страницы полного сайта внутри одного файла */
    var toastEl = null;
    var toastTimer = 0;
    function toast(text) {
        if (!toastEl) {
            toastEl = document.createElement("div");
            toastEl.className = "pq-standalone-toast";
            document.body.appendChild(toastEl);
        }
        toastEl.textContent = text;
        toastEl.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 4200);
    }
    window.pqStandaloneToast = toast;

    document.addEventListener("click", function (e) {
        var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
        if (!a) return;
        var href = a.getAttribute("href") || "";
        if (!href || /^(#|https?:|mailto:|tel:|data:|blob:|javascript:)/i.test(href)) return;
        e.preventDefault();
        e.stopPropagation();
        var m = href.match(/play\\.html\\?grade=([789])/);
        if (m) {
            toast("Это автономная версия для " + GRADE + " класса. Для " + m[1] +
                  " класса откройте отдельный файл physics-quest-" + m[1] + ".html.");
        } else if (/\\.pdf($|\\?)/i.test(href)) {
            toast("Печатный PDF входит в полную версию сайта «Физика-Квест».");
        } else {
            toast("Этот раздел открывается в полной версии сайта «Физика-Квест».");
        }
    }, true);

    /* 3. Плашка «автономная версия» */
    var badge = document.createElement("div");
    badge.className = "pq-standalone-badge";
    badge.textContent = "📴 Автономная версия · " + GRADE + " класс";
    document.body.appendChild(badge);
})();
`;
}

function buildGrade(grade) {
    const modules = moduleListFor(grade);
    const parts = [];
    parts.push(HEAD ? buildHead(grade) : "");
    parts.push(`<!-- Автономная однофайловая версия игры «Физика-Квест» для ${grade} класса.
     Собрано tools/build-standalone.js из play.html. Все стили, скрипты и картинки внутри файла. -->`);
    parts.push("");
    parts.push(inlineScript("./shared/account.js", grade));
    parts.push(inlineScript("./shared/theme.js", grade));
    parts.push(inlineScript("./shared/catalog-789.js", grade));
    parts.push(`<script>
    /* Класс зафиксирован: это отдельная версия только для ${grade} класса */
    window.CURRENT_GRADE = ${grade};
    document.body.setAttribute("data-grade", "${grade}");
    if (window.PQAccount) window.PQAccount.mountTopbar(${grade});
    var diaryBtn = document.getElementById("btn-diary");
    if (diaryBtn) diaryBtn.style.display = "none";
</script>`);
    modules.forEach((src) => parts.push(inlineScript(src, grade)));
    parts.push(`<script>
(function () {
    "use strict";
    var grade = ${grade};
    var fill = document.getElementById("loading-fill");
${BOOT_BODY}
})();
</script>`);
    parts.push(`<script>${standaloneRuntime(grade)}</script>`);
    parts.push("</body>");
    parts.push("</html>");
    const html = parts.join("\n");
    return `${html}\n`;
}

/* ---------- 4. Сборка всех файлов ---------- */

if (!exists(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
const report = [];
GRADES.forEach((grade) => {
    const file = path.join(OUT_DIR, `physics-quest-${grade}.html`);
    const html = buildGrade(grade);
    fs.writeFileSync(file, html);
    report.push({
        grade,
        file: path.relative(ROOT, file),
        mb: (Buffer.byteLength(html) / 1024 / 1024).toFixed(2)
    });
    console.log(`OK  ${path.relative(ROOT, file)} · ${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} МБ`);
});

fs.writeFileSync(
    path.join(OUT_DIR, "README.md"),
    [
        "# Автономные версии игры (8 и 9 класс)",
        "",
        "Файлы собраны скриптом `node tools/build-standalone.js` из `play.html`.",
        "Каждый `.html` самодостаточен: стили, скрипты и картинки внутри, интернет не нужен.",
        "",
        "| Файл | Класс | Размер |",
        "| --- | --- | --- |",
        ...report.map((r) => `| \`${path.basename(r.file)}\` | ${r.grade} | ${r.mb} МБ |`),
        "",
        "Как пользоваться: открыть файл в браузере (телефон, планшет, компьютер) —",
        "прогресс сохраняется в браузере этого устройства. Чтобы отправить ученику,",
        "перешлите сам файл (Telegram, WhatsApp, e-mail, флешка).",
        "",
        "Что работает: все уровни и задания своего класса, лаборатории и симуляторы,",
        "режим учителя, классы и коды учеников, назначения, приём результатов по коду",
        "`R2-…`, карточки с QR, сертификаты.",
        "",
        "Чего нет: переходов на другие страницы сайта (портал, методичка, экраны,",
        "битва с телефонами), PDF для печати и комиксов других классов — вместо них",
        "показывается подсказка «есть в полной версии».",
        ""
    ].join("\n")
);
console.log(`OK  ${path.relative(ROOT, path.join(OUT_DIR, "README.md"))}`);
