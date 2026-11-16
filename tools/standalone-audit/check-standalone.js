#!/usr/bin/env node
/* ============================================================
   ПРОВЕРКА АВТОНОМНЫХ ВЕРСИЙ ИГРЫ (physics-quest-8.html и physics-quest-9.html)

   Что проверяем:
   • в файле нет ни одного внешнего подресурса (все CSS/JS/картинки внутри);
   • страница реально загружается и игра запускается без ошибок консоли;
   • класс жёстко зафиксирован, даже если в адресе указан другой (?grade=7);
   • уровни, задания и хранилище на месте;
   • переходы на другие страницы сайта перехватываются подсказкой.

   Запуск: node tools/standalone-audit/check-standalone.js
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const { JSDOM, requestInterceptor } = require("jsdom");

const ROOT = path.resolve(__dirname, "..", "..");
const noop = () => {};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const results = [];
function ok(name, cond, extra = "") {
    results.push([cond ? "OK " : "FAIL", name, extra]);
    console.log(`${cond ? "OK  " : "FAIL"} ${name}${extra ? " · " + extra : ""}`);
    return cond;
}

function fakeCanvasContext() {
    return new Proxy({}, {
        get: (target, key) => {
            if (key === "canvas") return { width: 760, height: 270 };
            if (key === "measureText") return () => ({ width: 10 });
            if (key === "getImageData") return () => ({ data: [] });
            if (/^create(Linear|Radial)Gradient$|^createPattern$/.test(String(key))) {
                return () => ({ addColorStop: noop });
            }
            return noop;
        },
        set: (target, key, value) => { target[key] = value; return true; }
    });
}

/* Все внешние запросы страницы складываем в список: в автономном файле их быть не должно. */
function countingInterceptor(urls) {
    return requestInterceptor((request) => {
        urls.push(request.url);
        return new Response("", { status: 404, headers: { "Content-Type": "text/plain" } });
    });
}

async function openBundle(file, query, fileUrl) {
    const html = fs.readFileSync(file, "utf8");
    const urls = [];
    const errors = [];
    const dom = new JSDOM(html, {
        url: fileUrl || `https://standalone.local/${path.basename(file)}${query || ""}`,
        runScripts: "dangerously",
        resources: { interceptors: [countingInterceptor(urls)] },
        pretendToBeVisual: true,
        beforeParse(w) {
            w.HTMLCanvasElement.prototype.getContext = () => fakeCanvasContext();
            w.HTMLCanvasElement.prototype.toDataURL = () => "data:image/png;base64,";
            w.matchMedia = w.matchMedia || (() => ({
                matches: false, addListener: noop, removeListener: noop,
                addEventListener: noop, removeEventListener: noop
            }));
            w.scrollTo = noop;
            w.alert = noop;
            w.confirm = () => true;
            w.prompt = () => "";
            w.print = noop;
            w.HTMLElement.prototype.scrollIntoView = noop;
            w.BroadcastChannel = w.BroadcastChannel || function BroadcastChannel() {
                this.postMessage = noop;
                this.close = noop;
            };
            w.addEventListener("error", (e) => errors.push(String(e.message || e.error)));
            w.console.error = (...args) => errors.push(String(args[0]).slice(0, 200));
        }
    });
    return { dom, urls, errors, html };
}

async function boot(dom, timeout = 45000) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
        const ready = dom.window.eval(
            'typeof RPG !== "undefined" && typeof Storage !== "undefined" && typeof AssignHQ !== "undefined" && typeof TeacherHQ !== "undefined"'
        );
        if (ready) {
            await wait(500);
            return true;
        }
        await wait(150);
    }
    return false;
}

function staticChecks(html, grade) {
    ok(`[${grade}] нет <script src> и внешних <link>`,
        !/<script[^>]+\bsrc=/i.test(html) && !/<link[^>]+rel="stylesheet"/i.test(html));
    ok(`[${grade}] нет manifest.json и внешних путей в src`,
        !/href="\.\/manifest\.json"/.test(html) &&
        !/\bsrc="(?!data:|\$\{)(?:\.\/)?(?:assets|shared)\//i.test(html));
    ok(`[${grade}] заголовок с классом`, new RegExp(`<title>[^<]*${grade} класс`).test(html));
    ok(`[${grade}] внутри есть код игры`, html.includes("PQAccount") && html.includes("physicsquest"));
}

(async () => {
    for (const grade of [7, 8, 9]) {
        console.log(`\n== Автономная версия: ${grade} класс ==`);
        const file = path.join(ROOT, `physics-quest-${grade}.html`);
        if (!fs.existsSync(file)) {
            ok(`[${grade}] файл собран`, false, "запустите node tools/build-standalone.js");
            continue;
        }
        const bytes = fs.statSync(file).size;
        ok(`[${grade}] файл собран`, true, `${(bytes / 1048576).toFixed(2)} МБ`);
        const { dom, urls, errors, html } = await openBundle(file, "?grade=7&code=TEST");
        staticChecks(html, grade);

        const booted = await boot(dom);
        const w = dom.window;
        ok(`[${grade}] игра загрузилась`, booted);
        ok(`[${grade}] внешних подресурсов нет`, urls.length === 0, urls.slice(0, 3).join(", "));
        ok(`[${grade}] ошибок консоли нет`, errors.length === 0, errors.slice(0, 2).join(" | "));

        if (booted) {
            const info = w.eval(`JSON.stringify({
                grade: window.CURRENT_GRADE,
                bodyGrade: document.body.getAttribute("data-grade"),
                levels: document.querySelectorAll("#levels-grid .level-card").length,
                tasks: ["TASKS_DATABASE", "TASKS_DATABASE_EXT", "TASKS_DATABASE_EXT2", "TASKS_DATABASE_CH", "TASKS_DATABASE_PRACTICAL"]
                    .reduce((sum, name) => sum + (typeof eval(name) !== "undefined" && Array.isArray(eval(name)) ? eval(name).length : 0), 0),
                classes: Storage.getClasses().length,
                scripts: document.querySelectorAll("script:not([src])").length,
                images: Array.from(document.images).filter(i => i.getAttribute("src") && !/^data:/.test(i.getAttribute("src"))).length,
                badge: !!document.querySelector(".pq-standalone-badge")
            })`);
            const data = JSON.parse(info);
            ok(`[${grade}] класс зафиксирован (в адресе был ?grade=7)`,
                data.grade === grade && data.bodyGrade === String(grade), `CURRENT_GRADE=${data.grade}`);
            ok(`[${grade}] задания загружены`, data.tasks > 100, `${data.tasks} заданий`);
            ok(`[${grade}] хранилище работает`, data.classes === 0);
            ok(`[${grade}] скрипты вшиты в файл`, data.scripts > 20, String(data.scripts));
            ok(`[${grade}] все картинки — data-URI`, data.images === 0, String(data.images));
            ok(`[${grade}] плашка «автономная версия»`, data.badge);

            /* Уровни рисуются при входе на экран выбора уровня */
            w.document.getElementById("btn-start").click();
            await wait(900);
            const levels = w.document.querySelectorAll("#levels-grid .level-card").length;
            ok(`[${grade}] уровни отрисованы`, levels >= 10, `${levels} карточек`);

            /* Карточка уровня → брифинг миссии → запуск уровня */
            const card = w.document.querySelector("#levels-grid .level-card[data-id]");
            let briefing = "";
            if (card) {
                card.dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
                await wait(400);
                const modal = w.document.getElementById("mission-modal");
                briefing = (modal ? modal.textContent : "").replace(/\s+/g, " ").trim();
                ok(`[${grade}] брифинг миссии открылся`, !!modal && modal.classList.contains("active"),
                    briefing.slice(0, 60));
                ok(`[${grade}] в брифинге есть вопросы`, /вопрос/i.test(briefing));
            } else {
                ok(`[${grade}] брифинг миссии открылся`, false, "нет карточек уровня");
            }

            const startBtn = w.document.getElementById("mission-start");
            if (startBtn) {
                startBtn.click();
                await wait(1500);
                const gs = w.document.getElementById("game-screen");
                const hud = gs ? gs.textContent.replace(/\s+/g, " ") : "";
                ok(`[${grade}] уровень запустился`, !!gs && gs.classList.contains("active"), hud.slice(0, 50));
                ok(`[${grade}] HUD боя на месте`, /Очки/.test(hud) && /Щит/.test(hud));
            } else {
                ok(`[${grade}] уровень запустился`, false, "нет кнопки «Начать миссию»");
            }

            /* Переход на другую страницу сайта → подсказка, без навигации */
            const link = w.document.querySelector('a[href="./teacher-guide.html"], a[href$=".html"]');
            if (link) {
                link.dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
                await wait(60);
                const toast = w.document.querySelector(".pq-standalone-toast.show");
                ok(`[${grade}] переход на страницу сайта перехвачен`, !!toast, toast ? toast.textContent.slice(0, 60) : "—");
            } else {
                ok(`[${grade}] переход на страницу сайта перехвачен`, false, "нет ссылки для проверки");
            }

            /* Ссылка «другой класс» ведёт к понятной подсказке */
            const otherGrade = [7, 8, 9].find((g) => g !== grade);
            const gradeLink = w.document.querySelector(`a[href*="play.html?grade=${otherGrade}"]`);
            if (gradeLink) {
                gradeLink.dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
                await wait(60);
                const toast = w.document.querySelector(".pq-standalone-toast.show");
                const text = toast ? toast.textContent : "";
                ok(`[${grade}] подсказка про другой класс`, text.includes(`${otherGrade} класса`) && text.includes(`physics-quest-${otherGrade}`),
                    text.slice(0, 80) || "—");
            }
        }
        w.close();
    }

    /* ---- отдельный прогон «как есть с диска»: открыт file:// без localStorage ---- */
    console.log("\n== Открытие файла с диска (file://, localStorage запрещён) ==");
    for (const grade of [7, 8, 9]) {
        const file = path.join(ROOT, `physics-quest-${grade}.html`);
        if (!fs.existsSync(file)) continue;
        const { dom, errors } = await openBundle(file, "", `file://${file}`);
        const booted = await boot(dom, 30000);
        const w = dom.window;
        const flags = booted ? JSON.parse(w.eval(`JSON.stringify({
            grade: window.CURRENT_GRADE,
            levels: document.querySelectorAll("#levels-grid .level-card").length,
            ls: (function () { try { localStorage.setItem("pq-x", "1"); return localStorage.getItem("pq-x") === "1"; } catch (e) { return false; } })()
        })`)) : {};
        ok(`[${grade}] file:// — игра загрузилась`, booted);
        ok(`[${grade}] file:// — класс верный`, flags.grade === grade);
        ok(`[${grade}] file:// — хранилище подменено в памяти`, flags.ls === true);
        ok(`[${grade}] file:// — ошибок консоли нет`, errors.length === 0, errors.slice(0, 2).join(" | "));
        w.close();
    }

    const failed = results.filter((r) => r[0] === "FAIL");
    console.log(`\nИтог: ${results.length - failed.length}/${results.length} проверок пройдено`);
    if (failed.length) process.exitCode = 1;
})();
