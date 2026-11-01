/* ============================================================
   OFFICIAL PHET LABS — настоящие симуляторы PhET для 7–9 классов.
   Внешний симулятор загружается только по явному действию ученика.
   Собственные SVG/canvas-игры остаются отдельными мини-играми квеста.
   ============================================================ */
(function () {
    "use strict";

    const SIMS = {
        7: {
            slug: "forces-and-motion-basics",
            title: {
                ru: "Сила и движение: основы",
                kk: "Күш және қозғалыс: негіздері",
                en: "Forces and Motion: Basics"
            },
            description: {
                ru: "Перетягивание каната, движение, трение и ускорение: меняй силы и наблюдай за движением тела.",
                kk: "Арқан тарту, қозғалыс, үйкеліс және үдеу: күштерді өзгертіп, дененің қозғалысын бақыла.",
                en: "Tug of war, motion, friction and acceleration: change forces and observe how an object moves."
            },
            tasks: {
                ru: [
                    "На экране «Перетягивание каната» включи сумму сил и значения. Сравни уравновешенные и неуравновешенные команды.",
                    "Затем открой экран «Ускорение» и проверь, как сила и масса влияют на ускорение."
                ],
                kk: [
                    "«Арқан тарту» экранында күштердің қосындысы мен мәндерді қос. Күштері тең және тең емес командаларды салыстыр.",
                    "Содан кейін «Үдеу» экранын ашып, күш пен массаның үдеуге әсерін тексер."
                ],
                en: [
                    "On the Tug of War screen, turn on the sum of forces and values. Compare balanced and unbalanced teams.",
                    "Then open Acceleration and investigate how force and mass affect acceleration."
                ]
            }
        },
        8: {
            slug: "circuit-construction-kit-dc",
            title: {
                ru: "Конструктор цепей: постоянный ток",
                kk: "Тізбек құрастыру жинағы: тұрақты ток",
                en: "Circuit Construction Kit: DC"
            },
            description: {
                ru: "Собери работающую цепь из батареи, проводов, лампы и выключателя, затем подключи измерительные приборы.",
                kk: "Батарея, сымдар, шам және ажыратқыштан жұмыс істейтін тізбек құрастырып, өлшеу құралдарын қос.",
                en: "Build a working circuit with a battery, wires, a bulb and a switch, then connect measuring instruments."
            },
            tasks: {
                ru: [
                    "Открой экран «Лаборатория». Перетащи на стол батарею, лампу, провода и выключатель.",
                    "Замкни цепь, затем измерь силу тока амперметром и напряжение вольтметром."
                ],
                kk: [
                    "«Зертхана» экранын аш. Батареяны, шамды, сымдар мен ажыратқышты жұмыс үстеліне сүйреп апар.",
                    "Тізбекті тұйықтап, амперметрмен ток күшін және вольтметрмен кернеуді өлше."
                ],
                en: [
                    "Open the Lab screen. Drag a battery, a bulb, wires and a switch onto the workbench.",
                    "Close the circuit, then measure current with the ammeter and voltage with the voltmeter."
                ]
            }
        },
        9: {
            slug: "pendulum-lab",
            title: {
                ru: "Лаборатория маятника",
                kk: "Маятник зертханасы",
                en: "Pendulum Lab"
            },
            description: {
                ru: "Исследуй колебания одного или двух маятников: изменяй длину, массу и гравитацию, измеряй период и энергию.",
                kk: "Бір немесе екі маятниктің тербелісін зертте: ұзындықты, массаны және гравитацияны өзгертіп, период пен энергияны өлше.",
                en: "Investigate one or two pendulums: change length, mass and gravity, and measure period and energy."
            },
            tasks: {
                ru: [
                    "Открой «Лабораторию», включи секундомер и линейку. Запусти маятник и измерь период.",
                    "Сравни период при разной длине, затем измени гравитацию и повтори опыт."
                ],
                kk: [
                    "«Зертхана» экранын ашып, секундомер мен сызғышты қос. Маятникті қозғалысқа келтіріп, периодты өлше.",
                    "Периодты әртүрлі ұзындықта салыстыр, содан кейін гравитацияны өзгертіп, тәжірибені қайтала."
                ],
                en: [
                    "Open Lab, turn on the stopwatch and ruler. Start the pendulum and measure its period.",
                    "Compare the period at different lengths, then change gravity and repeat the experiment."
                ]
            }
        }
    };

    const UI = {
        ru: {
            open: "Официальный PhET-симулятор",
            entryKicker: "ОФИЦИАЛЬНЫЙ PHET · {grade} КЛАСС",
            launch: "Запустить PhET",
            official: "Официальный симулятор PhET",
            university: "Интерактивная лаборатория University of Colorado Boulder",
            guide: "Что исследовать",
            external: "Открыть на сайте PhET ↗",
            reload: "Перезагрузить",
            close: "Закрыть и вернуться",
            closeShort: "Закрыть симулятор",
            loading: "Загружаем официальный симулятор PhET…",
            loadError: "Симулятор долго загружается. Проверь интернет или открой его по прямой ссылке на сайте PhET.",
            online: "Для PhET нужен интернет. Прогресс Физика-Квеста сохраняется.",
            grade: "{grade} класс · PhET",
            dialog: "Официальный PhET-симулятор: {title}"
        },
        kk: {
            open: "Ресми PhET симуляторы",
            entryKicker: "РЕСМИ PHET · {grade}-СЫНЫП",
            launch: "PhET-ті іске қосу",
            official: "Ресми PhET симуляторы",
            university: "University of Colorado Boulder интерактивті зертханасы",
            guide: "Нені зерттеу керек",
            external: "PhET сайтында ашу ↗",
            reload: "Қайта жүктеу",
            close: "Жабу және оралу",
            closeShort: "Симуляторды жабу",
            loading: "Ресми PhET симуляторы жүктелуде…",
            loadError: "Симулятор ұзақ жүктелуде. Интернетті тексер немесе PhET сайтындағы тікелей сілтеме арқылы аш.",
            online: "PhET үшін интернет қажет. «Физика-Квест» прогресі сақталады.",
            grade: "{grade}-сынып · PhET",
            dialog: "Ресми PhET симуляторы: {title}"
        },
        en: {
            open: "Official PhET simulation",
            entryKicker: "OFFICIAL PHET · GRADE {grade}",
            launch: "Launch PhET",
            official: "Official PhET simulation",
            university: "Interactive laboratory by University of Colorado Boulder",
            guide: "What to investigate",
            external: "Open on the PhET website ↗",
            reload: "Reload",
            close: "Close and return",
            closeShort: "Close simulation",
            loading: "Loading the official PhET simulation…",
            loadError: "The simulation is taking a long time to load. Check your connection or use the direct PhET link.",
            online: "PhET requires an internet connection. Your Physics Quest progress is preserved.",
            grade: "Grade {grade} · PhET",
            dialog: "Official PhET simulation: {title}"
        }
    };

    let initialized = false;
    let active = false;
    let activeGrade = null;
    let returnFocus = null;
    let pausedByPhet = false;
    let previousBodyOverflow = "";
    let loadTimer = 0;

    function grade() {
        const value = Number(window.CURRENT_GRADE);
        return SIMS[value] ? value : 8;
    }
    function lang() {
        const value = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
        return UI[value] ? value : "ru";
    }
    function text(key, replacements) {
        let value = UI[lang()][key] || UI.en[key] || key;
        Object.entries(replacements || {}).forEach(([name, replacement]) => {
            value = value.replace("{" + name + "}", String(replacement));
        });
        return value;
    }
    function localized(value) {
        return value[lang()] || value.en;
    }
    function simulationUrl(forGrade) {
        const slug = SIMS[forGrade].slug;
        return `https://phet.colorado.edu/sims/html/${slug}/latest/${slug}_all.html?locale=${lang()}`;
    }
    function byId(id) {
        return document.getElementById(id);
    }
    function setText(id, value) {
        const element = byId(id);
        if (element) element.textContent = value;
    }

    function ensureDOM() {
        if (byId("pq-phet-overlay")) return;
        const overlay = document.createElement("div");
        overlay.id = "pq-phet-overlay";
        overlay.className = "pq-phet-overlay";
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-hidden", "true");
        overlay.setAttribute("aria-labelledby", "pq-phet-title");
        overlay.setAttribute("aria-describedby", "pq-phet-description");
        overlay.innerHTML = `
            <div class="pq-phet-panel" data-pq-fullscreen-dialog>
                <header class="pq-phet-header">
                    <div class="pq-phet-heading">
                        <span class="pq-phet-grade" id="pq-phet-grade"></span>
                        <div>
                            <h2 id="pq-phet-title"></h2>
                            <p id="pq-phet-university"></p>
                        </div>
                    </div>
                    <div class="pq-phet-header-actions">
                        <a class="pq-phet-external" id="pq-phet-external-top" target="_blank" rel="noopener noreferrer"></a>
                        <button class="pq-phet-tool" id="pq-phet-fullscreen" type="button"></button>
                        <button class="pq-phet-x" id="pq-phet-x" type="button">✕</button>
                    </div>
                </header>
                <div class="pq-phet-body">
                    <aside class="pq-phet-guide">
                        <span class="pq-phet-official" id="pq-phet-official"></span>
                        <p id="pq-phet-description"></p>
                        <h3 id="pq-phet-guide-title"></h3>
                        <ol id="pq-phet-tasks"></ol>
                        <a class="pq-phet-external pq-phet-external-side" id="pq-phet-external-side" target="_blank" rel="noopener noreferrer"></a>
                    </aside>
                    <div class="pq-phet-frame-wrap">
                        <iframe id="pq-phet-frame" src="about:blank" allow="fullscreen; autoplay; clipboard-write" referrerpolicy="no-referrer"></iframe>
                        <div class="pq-phet-loading" id="pq-phet-loading" role="status" hidden>
                            <span class="pq-phet-spinner" aria-hidden="true"></span>
                            <strong id="pq-phet-loading-text"></strong>
                        </div>
                        <div class="pq-phet-load-error" id="pq-phet-load-error" role="alert" hidden></div>
                    </div>
                </div>
                <footer class="pq-phet-footer">
                    <small id="pq-phet-online"></small>
                    <div class="pq-phet-footer-actions">
                        <button class="pq-phet-tool" id="pq-phet-reload" type="button"></button>
                        <button class="pq-phet-close" id="pq-phet-close" type="button"></button>
                    </div>
                </footer>
            </div>`;
        document.body.appendChild(overlay);
    }

    function renderEntry() {
        const currentGrade = grade();
        const cfg = SIMS[currentGrade];
        setText("pq-phet-entry-kicker", text("entryKicker", { grade: currentGrade }));
        setText("pq-phet-entry-title", localized(cfg.title));
        setText("pq-phet-entry-description", localized(cfg.description));
        setText("pq-phet-entry-launch", "▶ " + text("launch"));
        ["btn-phet-level", "btn-phet", "lab-phet"].forEach((id) => {
            const button = byId(id);
            if (!button) return;
            button.title = text("open") + ": " + localized(cfg.title);
            button.setAttribute("aria-label", button.title);
        });
    }

    function mountEntry() {
        const currentGrade = grade();
        const host = byId(currentGrade === 7 ? "field-simulations-section" : "pq-sim89-section");
        if (!host) return false;
        let entry = byId("pq-phet-entry");
        if (!entry) {
            entry = document.createElement("section");
            entry.id = "pq-phet-entry";
            entry.className = "pq-phet-entry";
            entry.setAttribute("aria-labelledby", "pq-phet-entry-title");
            entry.innerHTML = `
                <div class="pq-phet-entry-mark" aria-hidden="true">PhET</div>
                <div class="pq-phet-entry-copy">
                    <span id="pq-phet-entry-kicker"></span>
                    <h3 id="pq-phet-entry-title"></h3>
                    <p id="pq-phet-entry-description"></p>
                </div>
                <button class="pq-phet-entry-button" id="pq-phet-entry-launch" type="button"></button>`;
            const grid = host.querySelector(".field-sim-grid, .pq-sim89-grid");
            host.insertBefore(entry, grid || null);
            entry.querySelector("button").addEventListener("click", (event) => open(currentGrade, event.currentTarget));
        }
        renderEntry();
        return true;
    }

    function renderDialog() {
        const currentGrade = activeGrade || grade();
        const cfg = SIMS[currentGrade];
        const url = simulationUrl(currentGrade);
        setText("pq-phet-grade", text("grade", { grade: currentGrade }));
        setText("pq-phet-title", localized(cfg.title));
        setText("pq-phet-university", text("university"));
        setText("pq-phet-official", "✓ " + text("official"));
        setText("pq-phet-description", localized(cfg.description));
        setText("pq-phet-guide-title", text("guide"));
        setText("pq-phet-online", text("online"));
        setText("pq-phet-loading-text", text("loading"));
        setText("pq-phet-load-error", text("loadError"));
        setText("pq-phet-external-top", text("external"));
        setText("pq-phet-external-side", text("external"));
        setText("pq-phet-reload", "↻ " + text("reload"));
        setText("pq-phet-close", text("close"));
        const closeX = byId("pq-phet-x");
        if (closeX) {
            closeX.title = text("closeShort");
            closeX.setAttribute("aria-label", text("closeShort"));
        }
        const tasks = byId("pq-phet-tasks");
        if (tasks) {
            tasks.replaceChildren();
            localized(cfg.tasks).forEach((task) => {
                const item = document.createElement("li");
                item.textContent = task;
                tasks.appendChild(item);
            });
        }
        ["pq-phet-external-top", "pq-phet-external-side"].forEach((id) => {
            const link = byId(id);
            if (link) link.href = url;
        });
        const frame = byId("pq-phet-frame");
        if (frame) frame.title = text("dialog", { title: localized(cfg.title) });
        const overlay = byId("pq-phet-overlay");
        if (overlay) {
            overlay.setAttribute("aria-label", text("dialog", { title: localized(cfg.title) }));
            overlay.dataset.grade = String(currentGrade);
            overlay.dataset.simulation = cfg.slug;
        }
        if (window.PQFullscreen) window.PQFullscreen.syncAll();
    }

    function clearLoadTimer() {
        if (loadTimer) window.clearTimeout(loadTimer);
        loadTimer = 0;
    }

    function loadSimulation() {
        if (!active) return;
        clearLoadTimer();
        const frame = byId("pq-phet-frame");
        const url = simulationUrl(activeGrade);
        if (!frame) return;
        frame.dataset.requestedUrl = url;
        frame.dataset.loadedUrl = "";
        byId("pq-phet-loading").hidden = false;
        byId("pq-phet-load-error").hidden = true;
        frame.src = url;
        loadTimer = window.setTimeout(() => {
            if (!active || frame.dataset.requestedUrl !== url || frame.dataset.loadedUrl === url) return;
            byId("pq-phet-loading").hidden = true;
            byId("pq-phet-load-error").hidden = false;
        }, 20000);
    }

    function open(forGrade, trigger) {
        if (!SIMS[forGrade]) return;
        if (!initialized) init();
        if (active) return;
        active = true;
        activeGrade = forGrade;
        returnFocus = trigger || document.activeElement;
        pausedByPhet = false;

        // PhET открывается поверх текущей мини-игры, не уничтожая её состояние.
        // Если родительское окно было развёрнуто нативно, сначала выходим из
        // браузерного fullscreen: элементы вне его дерева там не отображаются.
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
        if (fullscreenElement && window.PQFullscreen) window.PQFullscreen.exit(fullscreenElement);

        const anotherGameOpen = !!document.querySelector("#lab-overlay.active, #pq-sim89-modal.open, #field-sim-modal.open");
        if (!anotherGameOpen && typeof Game !== "undefined" && Game.running && !Game.paused) {
            Game.pauseGame();
            pausedByPhet = true;
        }

        renderDialog();
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const overlay = byId("pq-phet-overlay");
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        loadSimulation();
        window.setTimeout(() => byId("pq-phet-x")?.focus(), 0);
        document.dispatchEvent(new CustomEvent("pq:phet-opened", { detail: { grade: activeGrade } }));
    }

    function close() {
        if (!active) return;
        active = false;
        clearLoadTimer();
        const overlay = byId("pq-phet-overlay");
        const finish = () => {
            document.body.style.overflow = previousBodyOverflow;
            if (pausedByPhet && typeof Game !== "undefined" && Game.paused) Game.resumeGame();
            pausedByPhet = false;
            if (returnFocus && returnFocus.isConnected && typeof returnFocus.focus === "function") returnFocus.focus();
            returnFocus = null;
        };
        if (overlay) {
            overlay.classList.remove("active");
            overlay.setAttribute("aria-hidden", "true");
        }
        const frame = byId("pq-phet-frame");
        if (frame) {
            frame.src = "about:blank";
            frame.dataset.requestedUrl = "";
            frame.dataset.loadedUrl = "";
        }
        byId("pq-phet-loading").hidden = true;
        byId("pq-phet-load-error").hidden = true;
        if (window.PQFullscreen) {
            Promise.resolve(window.PQFullscreen.exit(overlay)).then(finish, finish);
        } else finish();
        document.dispatchEvent(new CustomEvent("pq:phet-closed", { detail: { grade: activeGrade } }));
        activeGrade = null;
    }

    function trapFocus(event) {
        const panel = byId("pq-phet-overlay")?.querySelector(".pq-phet-panel");
        if (!panel) return;
        const focusable = [...panel.querySelectorAll("button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex='-1'])")]
            .filter((element) => !element.hidden && element.getClientRects().length);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function bind() {
        ["btn-phet-level", "btn-phet", "lab-phet"].forEach((id) => {
            const button = byId(id);
            if (!button || button.dataset.phetBound) return;
            button.dataset.phetBound = "true";
            button.addEventListener("click", () => open(grade(), button));
        });
        byId("pq-phet-close").addEventListener("click", close);
        byId("pq-phet-x").addEventListener("click", close);
        byId("pq-phet-reload").addEventListener("click", loadSimulation);
        byId("pq-phet-overlay").addEventListener("click", (event) => {
            if (event.target === byId("pq-phet-overlay")) close();
        });
        byId("pq-phet-frame").addEventListener("load", () => {
            const frame = byId("pq-phet-frame");
            if (!active || !frame.dataset.requestedUrl || frame.src === "about:blank") return;
            frame.dataset.loadedUrl = frame.dataset.requestedUrl;
            clearLoadTimer();
            byId("pq-phet-loading").hidden = true;
            byId("pq-phet-load-error").hidden = true;
        });
        byId("pq-phet-frame").addEventListener("error", () => {
            if (!active) return;
            byId("pq-phet-loading").hidden = true;
            byId("pq-phet-load-error").hidden = false;
        });
        document.addEventListener("keydown", (event) => {
            if (!active) return;
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopImmediatePropagation();
                close();
            } else if (event.key === "Tab") trapFocus(event);
        }, true);
        if (window.PQFullscreen) {
            window.PQFullscreen.bind(byId("pq-phet-overlay"), byId("pq-phet-fullscreen"), byId("pq-phet-overlay").querySelector(".pq-phet-panel"));
        }
        window.addEventListener("pq:lang-changed", () => {
            const previousLang = byId("pq-phet-frame")?.dataset.lang || "";
            renderEntry();
            renderDialog();
            if (active && previousLang !== lang()) loadSimulation();
            const frame = byId("pq-phet-frame");
            if (frame) frame.dataset.lang = lang();
        });
    }

    function init() {
        if (initialized) return;
        initialized = true;
        ensureDOM();
        bind();
        mountEntry();
        renderEntry();
        renderDialog();
        const frame = byId("pq-phet-frame");
        if (frame) frame.dataset.lang = lang();
        // На медленных устройствах галерея может быть создана после этого модуля.
        if (!byId("pq-phet-entry")) window.setTimeout(mountEntry, 500);
    }

    window.PQPhETLabs = {
        init,
        open,
        close,
        reload: loadSimulation,
        mountEntry,
        getUrl: (forGrade) => simulationUrl(Number(forGrade) || grade()),
        getSimulations: () => SIMS,
        isOpen: () => active
    };
})();
