/* ===== Универсальный движок лабораторных мини-игр (слайдеры + эл. цепь) =====
   Конфигурации уровней берутся из window.GRADE_LAB_GAMES_CONFIG (в grades/<N>/content.js или extras.js) */
const LabGames = {
    get configs() {
        return window.GRADE_LAB_GAMES_CONFIG || {};
    },
    activeLevel: null,
    activeGame: null,
    shownThisLevel: false,
    init() {
        if (this._bound) return;
        this._bound = true;
        document.getElementById("lab-check")?.addEventListener("click", () => {
            const resEl = document.getElementById("lab-result");
            if (resEl && resEl._ok) {
                this.hide(true);
            } else if (typeof showNotification === "function") {
                const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
                const msg = L === "kk"
                    ? "Параметрлерді мақсатқа дәлірек келтір!"
                    : L === "en"
                    ? "Adjust parameters closer to the target!"
                    : "Подбери параметры точнее, чтобы попасть в цель!";
                showNotification(msg, "warning");
            }
        });
        document.getElementById("lab-close")?.addEventListener("click", () => this.hide(false));
        if (window.PQFullscreen) {
            const overlay = document.getElementById("lab-overlay");
            window.PQFullscreen.bind(
                overlay,
                document.getElementById("lab-fullscreen"),
                overlay?.querySelector(".lab-panel")
            );
        }
        // Смена языка не должна оставлять открытую мини-игру на прежнем языке.
        const rerender = () => {
            const overlay = document.getElementById("lab-overlay");
            if (!overlay || !overlay.classList.contains("active") || !this.activeCfg) return;
            const values = {};
            this.activeCfg.sliders?.forEach(s => {
                const inp = document.getElementById("lab-" + s.id);
                if (inp) values[s.id] = parseFloat(inp.value);
            });
            if (window.PQWorkbench) window.PQWorkbench.reset();
            if (this.activeCfg.type === "circuit") {
                values.on = [...document.querySelectorAll("#lab-circuit .circuit-cell.on")].map(c => Number(c.getAttribute("data-idx")));
            }
            const game = this.activeGame;
            this.activeGame = null;
            this.show(this.activeCfg, game, values);
        };
        ["pq:lang-changed", "pq-lang-change"].forEach((name) => {
            document.addEventListener(name, rerender);
            window.addEventListener(name, rerender);
        });
        // В 8–9 классах кнопкой «🔬 Лаб» управляет роутер Simulators89
        // (он открывает мини-игру уровня либо галерею симуляторов) — второй обработчик не нужен.
        if (Number(window.CURRENT_GRADE) !== 7 && typeof window.Simulators89 === "undefined") {
            document.getElementById("btn-lab")?.addEventListener("click", () => {
                if (typeof Game !== "undefined" && this.configs[Game.currentLevel]) {
                    this.show(this.configs[Game.currentLevel], Game);
                }
            });
        }
    },
    tryShow(levelId, game) {
        if (this.shownThisLevel && this.activeLevel === levelId) return;
        const cfg = this.configs[levelId];
        if (!cfg) return;
        this.activeLevel = levelId;
        this.shownThisLevel = true;
        this.show(cfg, game);
    },
    reset() {
        this.shownThisLevel = false;
        this.activeLevel = null;
    },
    show(cfg, game, values) {
        this.init();
        this.activeGame = game;
        this.activeCfg = cfg;
        if (game) game.paused = true;
        const overlay = document.getElementById("lab-overlay");
        if (!overlay) return;
        const title = document.getElementById("lab-title");
        const desc = document.getElementById("lab-desc");
        const content = document.getElementById("lab-content");
        const formulaEl = document.getElementById("lab-formula");
        const resultEl = document.getElementById("lab-result");
        const circuitEl = document.getElementById("lab-circuit");
        const hintEl = document.getElementById("lab-hint-text");
        const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
        const pick = (o, k) => L === "kk" ? (o[k + "Kk"] || o[k]) : L === "en" ? (o[k + "En"] || o[k]) : o[k];
        // Единицы измерения тоже локализуем: unit / unitKk / unitEn
        const unitOf = (cfg) => L === "kk" ? (cfg.unitKk || cfg.unit || "") : L === "en" ? (cfg.unitEn || cfg.unit || "") : (cfg.unit || "");
        // Десятичный разделитель как в остальной игре: в RU/KK — запятая, в EN — точка.
        const numTxt = (v) => String(v).replace(".", L === "en" ? "." : ",");
        if (title) title.textContent = pick(cfg, "title");
        if (desc) desc.textContent = pick(cfg, "desc");
        if (hintEl) hintEl.textContent = pick(cfg, "hint") || "";
        if (formulaEl) {
            formulaEl.style.display = cfg.formulaStr ? "" : "none";
            const goalPrefix = (typeof I18n !== "undefined" && I18n.t("labGoalPrefix") !== "labGoalPrefix")
                ? I18n.t("labGoalPrefix")
                : (L === "kk" ? "→ мақсат:" : L === "en" ? "→ goal:" : "→ цель:");
            if (cfg.formulaStr) formulaEl.textContent = cfg.formulaStr + "  " + goalPrefix + " " + numTxt(cfg.target) + (unitOf(cfg) ? " " + unitOf(cfg) : "");
        }
        if (resultEl) resultEl.style.display = "none";
        if (circuitEl) circuitEl.style.display = "none";
        if (content) content.innerHTML = "";
        if (cfg.type === "home-experiment" && content && resultEl && window.PQHomeExperiments) {
            resultEl.style.display = "block";
            resultEl._ok = false;
            window.PQHomeExperiments.render(content, cfg, resultEl, L);
        } else if (cfg.type === "slider" && content && resultEl) {
            // Ползунки убраны: ученик работает руками (полка деталей, ручки-верньеры,
            // «Провести опыт» и приборы со стрелками) — см. shared/lab-workbench.js.
            const update = () => {
                const vals = {};
                cfg.sliders.forEach(s => {
                    const inp = document.getElementById("lab-" + s.id);
                    vals[s.id] = inp ? parseFloat(inp.value) : Number(s.val);
                });
                const res = cfg.formula(vals);
                resultEl.style.display = "none";     // измерение показывают приборы
                const resWord = L === "kk" ? "Нәтиже" : L === "en" ? "Result" : "Результат";
                const goalWord = L === "kk" ? "мақсат" : L === "en" ? "target" : "цель";
                const uTxt = unitOf(cfg) ? " " + unitOf(cfg) : "";
                resultEl.textContent = `${resWord}: ${numTxt(res.toFixed(2))}${uTxt} (${goalWord} ${numTxt(cfg.target)} ±${numTxt(cfg.tol)})`;
                const ok = Math.abs(res - cfg.target) <= cfg.tol;
                // Пока ученик не провёл опыт, приборы не показали измерение — зачёт не идёт
                const measured = !window.PQWorkbench || window.PQWorkbench._ran;
                resultEl.className = "lab-result " + (ok && measured ? "ok" : "bad");
                resultEl._ok = ok && measured;
                resultEl._val = res;
            };
            if (window.PQWorkbench) {
                window.PQWorkbench.attach(content, cfg, values, update);
                cfg.sliders.forEach(s => {
                    document.getElementById("lab-" + s.id)?.addEventListener("input", update);
                });
                update();
            } else {
                // страховка: если модуль почему-то не подключён, старые ползунки
                content.innerHTML = cfg.sliders.map(s => `
                    <div class="lab-slider-row">
                        <label>${pick(s, "label")}</label>
                        <input type="number" id="lab-${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${(values && values[s.id] != null) ? values[s.id] : s.val}">
                        <span class="lab-value" id="lab-v-${s.id}">${numTxt((values && values[s.id] != null) ? values[s.id] : s.val)}</span>
                    </div>
                `).join("");
                cfg.sliders.forEach(s => {
                    document.getElementById("lab-" + s.id)?.addEventListener("input", update);
                });
                resultEl.style.display = "";
                update();
            }
        } else if (cfg.type === "circuit" && circuitEl && resultEl) {
            const items = [
                { i: "🔋", name: L === "kk" ? "Батарея" : L === "en" ? "Battery" : "Батарея" },
                { i: "🔑", name: L === "kk" ? "Кілт" : L === "en" ? "Switch" : "Ключ" },
                { i: "🧱", name: L === "kk" ? "Резистор" : L === "en" ? "Resistor" : "Резистор" },
                { i: "💡", name: L === "kk" ? "Шам" : L === "en" ? "Lamp" : "Лампа" }
            ];
            circuitEl.style.display = "grid";
            circuitEl.innerHTML = items.map((it, idx) => `<div class="circuit-cell" data-idx="${idx}" title="${it.name}">${it.i}<small>${it.name}</small></div>`).join("");
            resultEl.style.display = "";
            // Состояние цепи живёт в разметке; при смене языка перерисовываем и возвращаем его.
            const paintResult = () => {
                const onCount = circuitEl.querySelectorAll(".circuit-cell.on").length;
                if (onCount === 4) {
                    circuitEl.querySelectorAll(".circuit-cell").forEach(c => c.classList.add("done"));
                    resultEl.textContent = L === "kk" ? "⚡ Тізбек жиналды!" : L === "en" ? "⚡ Circuit complete!" : "⚡ Цепь собрана!";
                    resultEl.className = "lab-result ok";
                    resultEl._ok = true;
                } else {
                    resultEl.textContent = onCount
                        ? (L === "kk" ? "Қосылды " : L === "en" ? "Enabled " : "Включено ") + onCount + "/4"
                        : (L === "kk" ? "Барлық элементтерді қос (0/4)" : L === "en" ? "Enable all elements (0/4)" : "Включи все элементы цепи (0/4)");
                    resultEl.className = "lab-result bad";
                    resultEl._ok = false;
                }
            };
            (values && Array.isArray(values.on) ? values.on : []).forEach((idx) => {
                circuitEl.querySelector(`.circuit-cell[data-idx="${idx}"]`)?.classList.add("on");
            });
            paintResult();
            circuitEl.querySelectorAll(".circuit-cell").forEach(cell => {
                cell.addEventListener("click", () => {
                    cell.classList.toggle("on");
                    paintResult();
                });
            });
        }
        overlay.classList.add("active");
    },
    hide(success) {
        if (window.PQWorkbench) window.PQWorkbench.reset();
        const overlay = document.getElementById("lab-overlay");
        if (window.PQFullscreen) window.PQFullscreen.exit(overlay);
        if (overlay) overlay.classList.remove("active");
        if (this.activeGame) {
            this.activeGame.paused = false;
            this.activeGame.lastTime = performance.now();
            if (success) {
                this.activeGame.score += 120;
                this.activeGame.shield = Math.min(this.activeGame.levelConfig.shieldCapacity, this.activeGame.shield + 20);
                if (typeof showNotification === "function") {
                    const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
                    showNotification(L === "kk" ? "🔬 Зертхана бонусы: +120 ұпай, +20 қалқан!" : L === "en" ? "🔬 Lab bonus: +120 pts, +20 shield!" : "🔬 Лаб. бонус: +120 очков и +20 к щиту!", "success");
                }
                if (typeof RPG !== "undefined") {
                    try { RPG.addXP(20); RPG.addCrystals(10); } catch (e) {}
                }
                this.activeGame.updateHUD();
            }
            this.activeGame.canvas?.focus();
        }
        this.activeGame = null;
    }
};
