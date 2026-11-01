/* ===== Движок лабораторных мини-игр =====
   Слайдеры/workbench, интерактивные цепи и inquiry-опыты.
   Поддерживает многоэтапные конфиги, экран завершения и возврат в миссию. */
const LabGames = {
    get configs() {
        return window.GRADE_LAB_GAMES_CONFIG || {};
    },
    activeLevel: null,
    activeGame: null,
    activeCfg: null,
    runtimeCfg: null,
    activeStage: 0,
    completing: false,
    interactiveLab: null,
    circuitState: null,
    shownThisLevel: false,
    rewardedConfigs: new WeakSet(),

    t(key, ...args) {
        return (typeof I18n !== "undefined" && I18n.t) ? I18n.t(key, ...args) : key;
    },
    esc(value) {
        return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    },
    lang() {
        return (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    },
    pick(object, key) {
        const L = this.lang();
        return L === "kk" ? (object[key + "Kk"] || object[key] || "") : L === "en" ? (object[key + "En"] || object[key] || "") : (object[key] || "");
    },
    unitOf(cfg) {
        const L = this.lang();
        return L === "kk" ? (cfg.unitKk || cfg.unit || "") : L === "en" ? (cfg.unitEn || cfg.unit || "") : (cfg.unit || "");
    },
    numTxt(value) {
        return String(value).replace(".", this.lang() === "en" ? "." : ",");
    },
    resultText(cfg, value) {
        const L = this.lang();
        const resWord = L === "kk" ? "Нәтиже" : L === "en" ? "Result" : "Результат";
        const goalWord = L === "kk" ? "мақсат" : L === "en" ? "target" : "цель";
        const unit = this.unitOf(cfg) ? " " + this.unitOf(cfg) : "";
        return `${resWord}: ${this.numTxt(Number(value).toFixed(2))}${unit} (${goalWord} ${this.numTxt(cfg.target)} ±${this.numTxt(cfg.tol)})`;
    },

    init() {
        if (this._bound) return;
        this._bound = true;
        document.getElementById("lab-check")?.addEventListener("click", () => {
            if (this.completing) return;
            const resEl = document.getElementById("lab-result");
            if (resEl && resEl._ok) {
                this.showCompletion();
            } else if (typeof showNotification === "function") {
                const L = this.lang();
                const msg = L === "kk"
                    ? "Параметрлерді мақсатқа дәлірек келтір!"
                    : L === "en" ? "Adjust parameters closer to the target!" : "Подбери параметры точнее, чтобы попасть в цель!";
                showNotification(msg, "warning");
            }
        });
        document.getElementById("lab-close")?.addEventListener("click", () => this.hide(false));
        document.getElementById("lab-next")?.addEventListener("click", () => this.finishOrAdvance());
        document.getElementById("lab-replay")?.addEventListener("click", () => {
            if (!this.activeCfg) return;
            this.show(this.activeCfg, this.activeGame, null, this.activeStage);
        });
        document.addEventListener("keydown", (event) => {
            const overlay = document.getElementById("lab-overlay");
            if (event.key === "Escape" && overlay?.classList.contains("active")) {
                event.preventDefault();
                this.hide(false);
            }
        });
        if (window.PQFullscreen) {
            const overlay = document.getElementById("lab-overlay");
            window.PQFullscreen.bind(overlay, document.getElementById("lab-fullscreen"), overlay?.querySelector(".lab-panel"));
        }

        // Смена языка сохраняет этап, настройки и уже показанный экран завершения.
        let scheduled = false;
        const rerender = () => {
            if (scheduled) return;
            scheduled = true;
            setTimeout(() => {
                scheduled = false;
                const overlay = document.getElementById("lab-overlay");
                if (!overlay || !overlay.classList.contains("active") || !this.activeCfg) return;
                const wasCompleting = this.completing;
                const values = {};
                (this.runtimeCfg?.sliders || []).forEach(s => {
                    const inp = document.getElementById("lab-" + s.id);
                    if (inp) values[s.id] = parseFloat(inp.value);
                });
                if (window.PQWorkbench) window.PQWorkbench.reset();
                if (this.activeCfg.type === "circuit") {
                    if (this.circuitState) values.interactive = this.circuitState;
                    else values.on = [...document.querySelectorAll("#lab-circuit .circuit-cell.on")].map(c => Number(c.getAttribute("data-idx")));
                }
                if (this.activeCfg.type === "inquiry" && this.interactiveLab?.getState) {
                    values.inquiry = this.interactiveLab.getState();
                }
                this.show(this.activeCfg, this.activeGame, values, this.activeStage);
                if (wasCompleting) {
                    const result = document.getElementById("lab-result");
                    if (result) {
                        result._ok = true;
                        result.className = "lab-result ok";
                        result.style.display = "block";
                        if (this.runtimeCfg?.type === "slider") result.textContent = this.resultText(this.runtimeCfg, result._val);
                    }
                    this.showCompletion(true);
                }
            }, 0);
        };
        ["pq:lang-changed", "pq-lang-change"].forEach((name) => {
            document.addEventListener(name, rerender);
            window.addEventListener(name, rerender);
        });

        // В 8–9 классах кнопкой «Лаб» управляет роутер Simulators89.
        if (Number(window.CURRENT_GRADE) !== 7 && typeof window.Simulators89 === "undefined") {
            document.getElementById("btn-lab")?.addEventListener("click", () => {
                if (typeof Game !== "undefined" && this.configs[Game.currentLevel]) this.show(this.configs[Game.currentLevel], Game);
            });
        }
    },

    tryShow(levelId, game) {
        if (this.shownThisLevel && this.activeLevel === levelId) return;
        const cfg = this.configs[levelId];
        if (!cfg) return;
        // Не открываем лабораторию поверх сюжетного брифинга или интро босса.
        // Иначе закрытие верхнего окна могло снять паузу, пока второе ещё открыто.
        if (game && (game.storyOpen || game.bossIntroOpen)) {
            if (this._pendingTimer) clearTimeout(this._pendingTimer);
            const session = game.sessionId;
            this._pendingTimer = setTimeout(() => {
                this._pendingTimer = null;
                if (game.running && game.currentLevel === levelId && game.sessionId === session) {
                    this.tryShow(levelId, game);
                }
            }, 400);
            return;
        }
        this.activeLevel = levelId;
        this.shownThisLevel = true;
        this.show(cfg, game);
    },
    reset() {
        if (this._pendingTimer) clearTimeout(this._pendingTimer);
        this._pendingTimer = null;
        this.shownThisLevel = false;
        this.activeLevel = null;
    },

    stageCount(cfg) {
        return Array.isArray(cfg?.stages) && cfg.stages.length ? cfg.stages.length : 1;
    },
    resetCompletion() {
        this.completing = false;
        document.getElementById("lab-complete")?.classList.remove("active");
        const content = document.getElementById("lab-content");
        const hint = document.getElementById("lab-hint-text");
        const check = document.getElementById("lab-check");
        const close = document.getElementById("lab-close");
        if (content) content.style.display = "";
        if (hint) hint.style.display = "";
        if (check) check.style.display = "";
        if (close) close.style.display = "";
    },
    renderStage(cfg, baseCfg) {
        const stageEl = document.getElementById("lab-stage");
        if (!stageEl) return;
        const total = this.stageCount(baseCfg);
        if (total <= 1) {
            stageEl.style.display = "none";
            stageEl.innerHTML = "";
            return;
        }
        stageEl.style.display = "flex";
        const dots = Array.from({ length: total }, (_, index) => {
            const cls = index < this.activeStage ? "done" : index === this.activeStage ? "current" : "";
            return `<span class="lab-stage-dot ${cls}" aria-hidden="true"></span>`;
        }).join("");
        stageEl.innerHTML = `<span class="lab-stage-badge">${this.esc(this.t("labStage", this.activeStage + 1, total))}</span>
            <strong class="lab-stage-name">${this.esc(this.pick(cfg, "name"))}</strong>
            <span class="lab-stage-dots" aria-hidden="true">${dots}</span>`;
    },

    show(baseCfg, game, values, stageIndex) {
        this.init();
        if (!baseCfg) return;
        const overlay = document.getElementById("lab-overlay");
        if (!overlay) return;
        if (this._pendingTimer) clearTimeout(this._pendingTimer);
        this._pendingTimer = null;
        const sameGameSession = overlay.classList.contains("active") && this.activeGame === game;
        if (!sameGameSession) this._pausedByLab = false;
        if (this.interactiveLab) {
            this.interactiveLab.destroy();
            this.interactiveLab = null;
        }
        if (window.PQWorkbench) window.PQWorkbench.reset();
        this.circuitState = null;
        this.activeGame = game;
        this.activeCfg = baseCfg;
        const total = this.stageCount(baseCfg);
        this.activeStage = Number.isInteger(stageIndex) ? Math.max(0, Math.min(total - 1, stageIndex)) : 0;
        const stage = Array.isArray(baseCfg.stages) ? baseCfg.stages[this.activeStage] : null;
        const cfg = Object.assign({}, baseCfg, stage || {});
        delete cfg.stages;
        this.runtimeCfg = cfg;
        if (game) {
            if (!sameGameSession && !game.paused) {
                this._pausedByLab = true;
                game.pauseStartedAt = Date.now();
            }
            game.paused = true;
        }

        this.resetCompletion();
        const title = document.getElementById("lab-title");
        const desc = document.getElementById("lab-desc");
        const content = document.getElementById("lab-content");
        const formulaEl = document.getElementById("lab-formula");
        const resultEl = document.getElementById("lab-result");
        const circuitEl = document.getElementById("lab-circuit");
        const hintEl = document.getElementById("lab-hint-text");
        const check = document.getElementById("lab-check");
        const close = document.getElementById("lab-close");
        if (check) check.textContent = this.t("labCheck");
        if (close) close.textContent = this.t("labSkip");
        if (title) title.textContent = this.pick(cfg, "title");
        if (desc) desc.textContent = this.pick(cfg, "desc");
        if (hintEl) hintEl.textContent = this.pick(cfg, "hint");
        this.renderStage(cfg, baseCfg);

        if (formulaEl) {
            formulaEl.style.display = cfg.formulaStr ? "" : "none";
            const goalPrefix = this.t("labGoalPrefix");
            if (cfg.formulaStr) formulaEl.textContent = cfg.formulaStr + "  " + goalPrefix + " " + this.numTxt(cfg.target) + (this.unitOf(cfg) ? " " + this.unitOf(cfg) : "");
        }
        if (resultEl) {
            resultEl.style.display = "none";
            resultEl.className = "lab-result";
            resultEl._ok = false;
            resultEl._val = undefined;
        }
        if (circuitEl) circuitEl.style.display = "none";
        if (content) content.innerHTML = "";

        const phetContext = document.getElementById("lab-phet-context");
        if (phetContext) {
            phetContext.replaceChildren();
            phetContext.hidden = true;
            const levelId = Number(baseCfg.levelId || (game && game.currentLevel) || this.activeLevel);
            if (levelId && window.PQPhETLabs && typeof window.PQPhETLabs.createLevelCard === "function") {
                const card = window.PQPhETLabs.createLevelCard(Number(window.CURRENT_GRADE), levelId, cfg.type === "phet");
                if (card) {
                    phetContext.appendChild(card);
                    phetContext.hidden = false;
                }
            }
        }

        if (cfg.type === "phet") {
            // PhET-only уровень: задания выполняются в официальном симуляторе,
            // поэтому числовая проверка и бонус собственной мини-игры здесь не нужны.
            if (check) check.style.display = "none";
            if (close) {
                const L = this.lang();
                close.textContent = L === "kk" ? "← Деңгейге оралу" : L === "en" ? "← Return to level" : "← Вернуться к уровню";
            }
            if (hintEl) hintEl.style.display = "none";
            if (resultEl) resultEl.style.display = "none";
            if (content && phetContext?.hidden) {
                const L = this.lang();
                content.textContent = L === "kk" ? "PhET модулі жүктелмеді. Парақшаны жаңарт." : L === "en" ? "The PhET module did not load. Refresh the page." : "Модуль PhET не загрузился. Обнови страницу.";
            }
        } else if (cfg.type === "home-experiment" && content && resultEl && window.PQHomeExperiments) {
            resultEl.style.display = "block";
            window.PQHomeExperiments.render(content, cfg, resultEl, this.lang());
        } else if (cfg.type === "slider" && content && resultEl) {
            const update = () => {
                const vals = {};
                cfg.sliders.forEach(s => {
                    const inp = document.getElementById("lab-" + s.id);
                    vals[s.id] = inp ? parseFloat(inp.value) : Number(s.val);
                });
                const res = cfg.formula(vals);
                resultEl.style.display = "none"; // измерение показывают приборы до завершения
                resultEl.textContent = this.resultText(cfg, res);
                const ok = Math.abs(res - cfg.target) <= cfg.tol;
                const measured = !window.PQWorkbench || window.PQWorkbench._ran;
                resultEl.className = "lab-result " + (ok && measured ? "ok" : "bad");
                resultEl._ok = ok && measured;
                resultEl._val = res;
            };
            if (window.PQWorkbench) {
                window.PQWorkbench.attach(content, cfg, values, update);
                cfg.sliders.forEach(s => document.getElementById("lab-" + s.id)?.addEventListener("input", update));
                update();
            } else {
                // Запасной вариант без workbench.
                content.innerHTML = cfg.sliders.map(s => `
                    <div class="lab-slider-row">
                        <label>${this.esc(this.pick(s, "label"))}</label>
                        <input type="number" id="lab-${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${(values && values[s.id] != null) ? values[s.id] : s.val}">
                        <span class="lab-value" id="lab-v-${s.id}">${this.numTxt((values && values[s.id] != null) ? values[s.id] : s.val)}</span>
                    </div>`).join("");
                cfg.sliders.forEach(s => document.getElementById("lab-" + s.id)?.addEventListener("input", update));
                resultEl.style.display = "";
                update();
            }
        } else if ((cfg.type === "circuit" || cfg.type === "inquiry") && content && resultEl) {
            resultEl.style.display = "";
            const engine = cfg.type === "circuit" ? window.PQInteractiveLabs : window.PQInquiryLabs;
            if (engine) {
                this.interactiveLab = engine.mount(cfg.type === "circuit" ? "circuit" : cfg.inquiry, content, {
                    simple: cfg.type === "circuit",
                    state: (values && (cfg.type === "circuit" ? values.interactive : values.inquiry)) || {},
                    onChange: (next, metrics) => {
                        if (this.runtimeCfg !== cfg) return;
                        if (cfg.type === "circuit") this.circuitState = next;
                        resultEl._ok = !!metrics.success;
                        resultEl.className = "lab-result " + (metrics.success ? "ok" : "bad");
                        resultEl.textContent = metrics.message;
                    }
                });
            } else {
                resultEl.className = "lab-result bad";
                const L = this.lang();
                resultEl.textContent = L === "kk" ? "Интерактивті модуль жүктелмеді. Парақшаны жаңарт." : L === "en" ? "The interactive module did not load. Refresh the page." : "Интерактивный модуль не загрузился. Обнови страницу.";
            }
        }
        overlay.classList.add("active");
        const panel = overlay.querySelector(".lab-panel");
        if (panel) panel.scrollTop = 0;
    },

    showCompletion(preserveFocus) {
        if (!this.activeCfg || !this.runtimeCfg) return;
        const result = document.getElementById("lab-result");
        if (!this.completing && !result?._ok) return;
        this.completing = true;
        const content = document.getElementById("lab-content");
        const formula = document.getElementById("lab-formula");
        const circuit = document.getElementById("lab-circuit");
        const hint = document.getElementById("lab-hint-text");
        const phetContext = document.getElementById("lab-phet-context");
        if (content) content.style.display = "none";
        if (phetContext) phetContext.hidden = true;
        if (formula) formula.style.display = "none";
        if (circuit) circuit.style.display = "none";
        if (hint) hint.style.display = "none";
        const check = document.getElementById("lab-check");
        const close = document.getElementById("lab-close");
        if (check) check.style.display = "none";
        if (close) close.style.display = "none";
        if (result) {
            result.style.display = "block";
            result.className = "lab-result ok";
            if (this.runtimeCfg.type === "slider" && Number.isFinite(result._val)) result.textContent = this.resultText(this.runtimeCfg, result._val);
        }
        const currentDot = document.querySelector("#lab-stage .lab-stage-dot.current");
        if (currentDot) {
            currentDot.classList.remove("current");
            currentDot.classList.add("done");
        }
        this.updateCompletionText();
        document.getElementById("lab-complete")?.classList.add("active");
        if (!preserveFocus) document.getElementById("lab-next")?.focus({ preventScroll: true });
    },
    updateCompletionText() {
        const total = this.stageCount(this.activeCfg);
        const final = this.activeStage >= total - 1;
        const title = document.getElementById("lab-complete-title");
        const text = document.getElementById("lab-complete-text");
        const next = document.getElementById("lab-next");
        const replay = document.getElementById("lab-replay");
        if (title) title.textContent = final ? this.t("labExperimentDone") : this.t("labStageDone", this.activeStage + 1);
        if (text) text.textContent = final ? this.t(total > 1 ? "labAllStagesSuccess" : "labSingleStageSuccess") : this.t("labStageSuccess");
        if (next) next.textContent = final ? this.t("labFinishReturn") : this.t("labNextStage");
        if (replay) replay.textContent = this.t("labReplayStage");
    },
    finishOrAdvance() {
        if (!this.completing || !this.activeCfg) return;
        if (this.activeStage + 1 < this.stageCount(this.activeCfg)) {
            this.show(this.activeCfg, this.activeGame, null, this.activeStage + 1);
        } else {
            this.hide(true);
        }
    },

    hide(success) {
        const game = this.activeGame;
        const completedCfg = this.activeCfg;
        if (window.PQWorkbench) window.PQWorkbench.reset();
        if (this.interactiveLab) {
            this.interactiveLab.destroy();
            this.interactiveLab = null;
        }
        this.circuitState = null;
        const overlay = document.getElementById("lab-overlay");
        if (window.PQFullscreen) window.PQFullscreen.exit(overlay);
        if (overlay) overlay.classList.remove("active");
        this.resetCompletion();

        if (game) {
            if (this._pausedByLab) {
                if (game.pauseStartedAt) game.pausedTotal += Date.now() - game.pauseStartedAt;
                game.pauseStartedAt = 0;
                game.paused = false;
                game.lastTime = performance.now();
            }
            if (success) {
                const alreadyRewarded = !!(completedCfg && this.rewardedConfigs.has(completedCfg));
                if (!alreadyRewarded) {
                    if (completedCfg) this.rewardedConfigs.add(completedCfg);
                    game.score += 120;
                    game.shield = Math.min(game.levelConfig.shieldCapacity, game.shield + 20);
                    if (typeof showNotification === "function") {
                        const L = this.lang();
                        showNotification(L === "kk" ? "🔬 Зертхана бонусы: +120 ұпай, +20 қалқан!" : L === "en" ? "🔬 Lab bonus: +120 pts, +20 shield!" : "🔬 Лаб. бонус: +120 очков и +20 к щиту!", "success");
                    }
                    if (typeof RPG !== "undefined") {
                        try { RPG.addXP(20); RPG.addCrystals(10); } catch (e) {}
                    }
                    game.updateHUD();
                } else if (typeof showNotification === "function") {
                    showNotification(this.t("labAlreadyRewarded"), "info");
                }
            }
            if (!game.paused) game.canvas?.focus();
        }
        this._pausedByLab = false;
        this.activeGame = null;
        this.activeCfg = null;
        this.runtimeCfg = null;
        this.activeStage = 0;
        const phetContext = document.getElementById("lab-phet-context");
        if (phetContext) {
            phetContext.replaceChildren();
            phetContext.hidden = true;
        }
    }
};
