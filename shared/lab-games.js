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
        document.getElementById("btn-lab")?.addEventListener("click", () => {
            if (typeof Game !== "undefined" && this.configs[Game.currentLevel]) {
                this.show(this.configs[Game.currentLevel], Game);
            }
        });
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
    show(cfg, game) {
        this.init();
        this.activeGame = game;
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
        if (title) title.textContent = pick(cfg, "title");
        if (desc) desc.textContent = pick(cfg, "desc");
        if (hintEl) hintEl.textContent = pick(cfg, "hint") || "";
        if (formulaEl) {
            formulaEl.style.display = cfg.formulaStr ? "" : "none";
            const goalPrefix = (typeof I18n !== "undefined" && I18n.t("labGoalPrefix") !== "labGoalPrefix")
                ? I18n.t("labGoalPrefix")
                : (L === "kk" ? "→ мақсат:" : L === "en" ? "→ goal:" : "→ цель:");
            if (cfg.formulaStr) formulaEl.textContent = cfg.formulaStr + "  " + goalPrefix + " " + cfg.target + " " + (cfg.unit || "");
        }
        if (resultEl) resultEl.style.display = "none";
        if (circuitEl) circuitEl.style.display = "none";
        if (content) content.innerHTML = "";
        if (cfg.type === "slider" && content && resultEl) {
            content.innerHTML = cfg.sliders.map(s => `
                <div class="lab-slider-row">
                    <label>${pick(s, "label")}</label>
                    <input type="range" id="lab-${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.val}">
                    <span class="lab-value" id="lab-v-${s.id}">${s.val}</span>
                </div>
            `).join("");
            const update = () => {
                const vals = {};
                cfg.sliders.forEach(s => {
                    const inp = document.getElementById("lab-" + s.id);
                    const out = document.getElementById("lab-v-" + s.id);
                    const v = parseFloat(inp.value);
                    vals[s.id] = v;
                    if (out) out.textContent = v;
                });
                const res = cfg.formula(vals);
                resultEl.style.display = "";
                const resWord = L === "kk" ? "Нәтиже" : L === "en" ? "Result" : "Результат";
                const goalWord = L === "kk" ? "мақсат" : L === "en" ? "target" : "цель";
                resultEl.textContent = `${resWord}: ${res.toFixed(2)} ${cfg.unit || ""} (${goalWord} ${cfg.target} ±${cfg.tol})`;
                const ok = Math.abs(res - cfg.target) <= cfg.tol;
                resultEl.className = "lab-result " + (ok ? "ok" : "bad");
                resultEl._ok = ok;
                resultEl._val = res;
            };
            cfg.sliders.forEach(s => {
                document.getElementById("lab-" + s.id)?.addEventListener("input", update);
            });
            update();
        } else if (cfg.type === "circuit" && circuitEl && resultEl) {
            const items = [
                { i: "🔋", name: L === "kk" ? "Батарея" : L === "en" ? "Battery" : "Батарея" },
                { i: "🔑", name: L === "kk" ? "Кілт" : L === "en" ? "Switch" : "Ключ" },
                { i: "🧱", name: L === "kk" ? "Резистор" : L === "en" ? "Resistor" : "Резистор" },
                { i: "💡", name: L === "kk" ? "Шам" : L === "en" ? "Lamp" : "Лампа" }
            ];
            circuitEl.style.display = "grid";
            circuitEl.innerHTML = items.map((it, idx) => `<div class="circuit-cell" data-idx="${idx}" title="${it.name}">${it.i}<br><small>${it.name}</small></div>`).join("");
            resultEl.style.display = "";
            resultEl.textContent = L === "kk" ? "Барлық элементтерді қос (0/4)" : L === "en" ? "Enable all elements (0/4)" : "Включи все элементы цепи (0/4)";
            resultEl.className = "lab-result bad";
            resultEl._ok = false;
            circuitEl.querySelectorAll(".circuit-cell").forEach(cell => {
                cell.addEventListener("click", () => {
                    cell.classList.toggle("on");
                    const onCount = circuitEl.querySelectorAll(".circuit-cell.on").length;
                    if (onCount === 4) {
                        circuitEl.querySelectorAll(".circuit-cell").forEach(c => c.classList.add("done"));
                        resultEl.textContent = L === "kk" ? "⚡ Тізбек жиналды!" : L === "en" ? "⚡ Circuit complete!" : "⚡ Цепь собрана!";
                        resultEl.className = "lab-result ok";
                        resultEl._ok = true;
                    } else {
                        resultEl.textContent = (L === "kk" ? "Қосылды " : L === "en" ? "Enabled " : "Включено ") + onCount + "/4";
                        resultEl.className = "lab-result bad";
                        resultEl._ok = false;
                    }
                });
            });
        }
        overlay.classList.add("active");
    },
    hide(success) {
        const overlay = document.getElementById("lab-overlay");
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
