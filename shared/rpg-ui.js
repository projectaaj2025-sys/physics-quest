/* ============================================================
   RPG UI — брифинг миссий, штаб пилота, HUD, тосты и результаты
   ============================================================ */

function rpgRgba(hex, alpha) {
    let h = String(hex || "#00b8d4").replace("#", "");
    if (h.length === 3) h = h.split("").map(c => c + c).join("");
    const n = parseInt(h, 16);
    if (isNaN(n)) return `rgba(0,184,212,${alpha})`;
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
}

function rpgStars(n) {
    const count = Math.max(0, Math.min(3, Number(n) || 0));
    return "⭐".repeat(count) + "☆".repeat(3 - count);
}

function rpgTime(ms) {
    const total = Math.max(0, Math.round((Number(ms) || 0) / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function rpgXpPct(state) {
    const need = rpgXpForLevel(state.level);
    return Math.max(0, Math.min(100, Math.round((state.xp / need) * 100)));
}

function rpgPlayerName() {
    try {
        const name = String((Storage.getSettings().playerName || "")).trim();
        if (name) return name;
    } catch (e) {}
    return typeof I18n !== "undefined" && I18n.t ? I18n.t("anonymous") : "Пилот";
}

function rpgAvatarSvg() {
    try {
        if (typeof rocketSVG === "function" && typeof getRocketStyle === "function") {
            const settings = Storage.getSettings();
            return rocketSVG(getRocketStyle(settings.rocketStyle));
        }
    } catch (e) {}
    return '<span class="rpg-avatar-emoji">🚀</span>';
}

Object.assign(RPG, {

    /* ---------------- DOM ---------------- */
    initDOM() {
        // RPG-карточка в главном меню
        const menuContent = document.querySelector("#menu-screen .menu-content");
        if (menuContent && !document.getElementById("rpg-menu-card")) {
            const card = document.createElement("div");
            card.id = "rpg-menu-card";
            card.className = "rpg-menu-card";
            const buttons = menuContent.querySelector(".menu-buttons");
            menuContent.insertBefore(card, buttons || null);
        }

        // Полоса пилота на экране выбора уровней
        const pilotLine = document.getElementById("pilot-line");
        if (pilotLine && !document.getElementById("rpg-levelbar")) {
            const bar = document.createElement("div");
            bar.id = "rpg-levelbar";
            bar.className = "rpg-levelbar";
            pilotLine.insertAdjacentElement("afterend", bar);
        }

        // Слой игрового HUD
        const gameScreen = document.getElementById("game-screen");
        if (gameScreen && !document.getElementById("rpg-game-layer")) {
            gameScreen.insertAdjacentHTML("beforeend", `
                <div id="rpg-game-layer">
                    <div id="rpg-vignette"></div>
                    <div class="rpg-pilot-hud" id="rpg-pilot-hud">
                        <div class="rpg-ph-badge"><b id="rpg-ph-level">1</b><small>LVL</small></div>
                        <div class="rpg-ph-body">
                            <div class="rpg-ph-row">
                                <span class="rpg-ph-rank" id="rpg-ph-rank">Новобранец</span>
                                <span class="rpg-ph-crystals" id="rpg-ph-crystals">💎 0</span>
                            </div>
                            <div class="rpg-ph-xp"><i id="rpg-ph-xpfill"></i></div>
                            <div class="rpg-ph-sub">
                                <span id="rpg-ph-xptext">0 / 120 XP</span>
                                <span class="rpg-ph-streak" id="rpg-ph-streak"></span>
                            </div>
                        </div>
                    </div>
                    <div class="rpg-mission-hud" id="rpg-mission-hud"></div>
                    <div id="rpg-combo"></div>
                    <div id="rpg-mission-banner"></div>
                </div>
            `);
        }

        // Чип миссии в заголовке задания
        const taskHeader = document.querySelector("#task-modal .task-header");
        if (taskHeader && !document.getElementById("rpg-task-chip")) {
            const chip = document.createElement("span");
            chip.id = "rpg-task-chip";
            chip.className = "rpg-task-chip";
            chip.style.display = "none";
            taskHeader.appendChild(chip);
        }

        // Модалки и контейнер тостов
        if (!document.getElementById("mission-modal")) {
            document.body.insertAdjacentHTML("beforeend", `
                <div id="mission-modal" class="modal">
                    <div class="modal-content rpg-mission-content">
                        <button class="rpg-modal-x" type="button" data-rpg-close="mission" aria-label="Закрыть">✕</button>
                        <div class="rpg-kicker" id="mission-kicker"></div>
                        <h2 id="mission-title"></h2>
                        <p class="rpg-mission-sub" id="mission-sub"></p>
                        <div class="rpg-mission-meta" id="mission-meta"></div>
                        <div class="rpg-mission-grid" id="mission-grid"></div>
                        <div class="rpg-mission-foot">
                            <div class="rpg-foot-actions">
                                <button class="btn btn-secondary" id="mission-cancel" type="button">← Назад</button>
                                <button class="btn btn-secondary" id="mission-theory" type="button">📖 Теория</button>
                            </div>
                            <div class="rpg-foot-actions">
                                <span class="rpg-start-hint" id="mission-selected-label"></span>
                                <button class="btn btn-primary" id="mission-start" type="button">🚀 Начать миссию</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rpg-modal" class="modal">
                    <div class="modal-content rpg-hub-content">
                        <button class="rpg-modal-x" type="button" data-rpg-close="hub" aria-label="Закрыть">✕</button>
                        <div class="rpg-hub-head" id="rpg-hub-head"></div>
                        <div class="rpg-hub-tabs" id="rpg-hub-tabs"></div>
                        <div class="rpg-hub-body" id="rpg-hub-body"></div>
                    </div>
                </div>
                <div id="rpg-levelup">
                    <div class="rpg-levelup-box" id="rpg-levelup-box"></div>
                </div>
                <div id="rpg-blackbox-modal" class="modal rpg-bb-modal">
                    <div class="modal-content rpg-bb-content">
                        <button class="rpg-modal-x" type="button" data-bb="close" aria-label="Закрыть">✕</button>
                        <div id="rpg-bb-modal-body"></div>
                    </div>
                </div>
                <div id="rpg-maint-modal" class="rpg-maint-modal">
                    <div class="rpg-maint-box">
                        <button class="rpg-maint-x" type="button" data-maint="close" aria-label="Закрыть">✕</button>
                        <div id="rpg-maint-body"></div>
                    </div>
                </div>
                <div id="rpg-choice-modal" class="modal rpg-choice-modal">
                    <div class="modal-content rpg-choice-content">
                        <div id="rpg-choice-body"></div>
                    </div>
                </div>
                <div id="rpg-toasts"></div>
            `);
        }

        this.dom = {
            menuCard: document.getElementById("rpg-menu-card"),
            levelBar: document.getElementById("rpg-levelbar"),
            layer: document.getElementById("rpg-game-layer"),
            pilotHud: document.getElementById("rpg-pilot-hud"),
            pilotLevel: document.getElementById("rpg-ph-level"),
            pilotRank: document.getElementById("rpg-ph-rank"),
            pilotCrystals: document.getElementById("rpg-ph-crystals"),
            pilotXpFill: document.getElementById("rpg-ph-xpfill"),
            pilotXpText: document.getElementById("rpg-ph-xptext"),
            pilotStreak: document.getElementById("rpg-ph-streak"),
            missionHud: document.getElementById("rpg-mission-hud"),
            combo: document.getElementById("rpg-combo"),
            banner: document.getElementById("rpg-mission-banner"),
            taskChip: document.getElementById("rpg-task-chip"),
            missionModal: document.getElementById("mission-modal"),
            missionKicker: document.getElementById("mission-kicker"),
            missionTitle: document.getElementById("mission-title"),
            missionSub: document.getElementById("mission-sub"),
            missionMeta: document.getElementById("mission-meta"),
            missionGrid: document.getElementById("mission-grid"),
            missionStart: document.getElementById("mission-start"),
            missionCancel: document.getElementById("mission-cancel"),
            missionTheory: document.getElementById("mission-theory"),
            missionSelected: document.getElementById("mission-selected-label"),
            hubModal: document.getElementById("rpg-modal"),
            hubHead: document.getElementById("rpg-hub-head"),
            hubTabs: document.getElementById("rpg-hub-tabs"),
            hubBody: document.getElementById("rpg-hub-body"),
            levelUp: document.getElementById("rpg-levelup"),
            levelUpBox: document.getElementById("rpg-levelup-box"),
            toasts: document.getElementById("rpg-toasts")
        };
    },

    bindUI() {
        const R = this;

        document.addEventListener("click", (e) => {
            const openBtn = e.target.closest("[data-rpg-open]");
            if (openBtn) {
                e.preventDefault();
                R.openHub(openBtn.getAttribute("data-rpg-open") || "char");
                return;
            }
            const closeBtn = e.target.closest("[data-rpg-close]");
            if (closeBtn) {
                e.preventDefault();
                if (closeBtn.getAttribute("data-rpg-close") === "mission") R.closeBriefing();
                else R.closeHub();
                return;
            }
            const tabBtn = e.target.closest("[data-hub-tab]");
            if (tabBtn) {
                R._hubTab = tabBtn.getAttribute("data-hub-tab");
                R.renderHub();
                return;
            }
            const filterBtn = e.target.closest("[data-ach-filter]");
            if (filterBtn) {
                R._hubFilter = filterBtn.getAttribute("data-ach-filter");
                R.renderHubBody();
                return;
            }
            const actionBtn = e.target.closest("[data-rpg-action]");
            if (actionBtn) {
                R.handleAction(actionBtn);
                return;
            }
            const missionCard = e.target.closest(".rpg-mission-card");
            if (missionCard) {
                R.selectBriefingMission(missionCard.getAttribute("data-mission"));
                return;
            }
        });

        if (this.dom.missionStart) {
            this.dom.missionStart.addEventListener("click", () => R.startSelectedMission());
        }
        if (this.dom.missionCancel) {
            this.dom.missionCancel.addEventListener("click", () => R.closeBriefing());
        }
        if (this.dom.missionTheory) {
            this.dom.missionTheory.addEventListener("click", () => {
                const b = R._briefing;
                if (!b) return;
                // Брифинг остаётся позади: закрыв теорию, игрок возвращается к выбору миссии.
                if (typeof openTheory === "function") openTheory(b.levelId);
            });
        }
        if (this.dom.missionGrid) {
            this.dom.missionGrid.addEventListener("keydown", (e) => {
                if (e.key !== "Enter" && e.key !== " ") return;
                const card = e.target.closest(".rpg-mission-card");
                if (!card) return;
                e.preventDefault();
                R.selectBriefingMission(card.getAttribute("data-mission"));
            });
        }
        if (this.dom.missionModal) {
            this.dom.missionModal.addEventListener("click", (e) => {
                if (e.target === R.dom.missionModal) R.closeBriefing();
            });
        }
        if (this.dom.hubModal) {
            this.dom.hubModal.addEventListener("click", (e) => {
                if (e.target === R.dom.hubModal) R.closeHub();
            });
        }
        if (this.dom.levelUp) {
            this.dom.levelUp.addEventListener("click", (e) => {
                if (e.target === R.dom.levelUp || e.target.closest("[data-rpg-action='close-levelup']")) {
                    R.hideLevelUpOverlay();
                }
            });
        }

        // Перехват клика по карточке уровня: сначала брифинг, а не мгновенный старт.
        const grid = document.getElementById("levels-grid");
        if (grid) {
            grid.addEventListener("click", (e) => {
                if (e.target.closest(".level-theory-btn")) return;
                const card = e.target.closest(".level-card");
                if (!card) return;
                if (card.classList.contains("locked")) return;
                const raw = card.getAttribute("data-id");
                if (raw === null) return;
                e.preventDefault();
                e.stopPropagation();
                const id = raw.indexOf("custom:") === 0 ? raw : parseInt(raw, 10);
                R.openBriefing(id, "");
            }, true);
        }

        document.addEventListener("keydown", (e) => {
            if (e.key !== "Escape") return;
            if (R.dom.levelUp && R.dom.levelUp.classList.contains("active")) {
                R.hideLevelUpOverlay();
            } else if (R._hubOpen) {
                R.closeHub();
            } else if (R._briefing) {
                R.closeBriefing();
            }
        });
    },

    onScreenShown(id) {
        // Метка на body: в бою штатные уведомления уводим ниже игрового HUD.
        try { document.body.classList.toggle("rpg-in-game", id === "game-screen"); } catch (e) {}
        if (id === "menu-screen") this.renderMenuCard();
        if (id === "level-screen") {
            this.renderLevelBar();
            setTimeout(() => { try { this.decorateLevelCards(); } catch (e) {} }, 0);
        }
        if (id === "profile-screen") {
            setTimeout(() => { try { this.renderProfileCard(); } catch (e) {} }, 0);
        }
        if (id === "game-screen") {
            if (this.run && this.run.active && this.dom.layer) this.dom.layer.classList.add("active");
            this.updateGameHud();
        }
        if (id === "victory-screen" || id === "gameover-screen") {
            this.renderMenuCard();
        }
    },

    refreshAll() {
        try { this.renderMenuCard(); } catch (e) {}
        try { this.renderLevelBar(); } catch (e) {}
        if (document.getElementById("profile-screen")?.classList.contains("active")) {
            try { this.renderProfileCard(); } catch (e) {}
        }
        if (this._hubOpen) {
            try { this.renderHub(); } catch (e) {}
        }
        if (this._briefing) {
            try { this.renderBriefing(); } catch (e) {}
        }
        if (this.run && this.run.active) {
            try { this.buildMissionPanel(Game); } catch (e) {}
            try { this.updateGameHud(); } catch (e) {}
            try { this.updateTaskChip(); } catch (e) {}
        }
        try { this.decorateLevelCards(); } catch (e) {}
    },

    /* Сколько наград ждёт: выполненные квесты + неиспользованные очки навыков. */
    pendingCount() {
        if (!this.state) return 0;
        let n = 0;
        try {
            const items = (this.state.daily && this.state.daily.items) || [];
            n += items.filter(q => !q.claimed && this.questProgress(q) >= ((this.questDef(q.id) || {}).target || Infinity)).length;
        } catch (e) {}
        if (this.state.skillPoints > 0) n += 1;
        return n;
    },

    /* ---------------- ГЛАВНОЕ МЕНЮ И ПОЛОСА ---------------- */
    renderMenuCard() {
        const card = this.dom.menuCard || document.getElementById("rpg-menu-card");
        if (!card || !this.state) return;
        const st = this.state;
        const rank = rpgRankForLevel(st.level);
        const title = this.currentTitle();
        const need = rpgXpForLevel(st.level);
        const pct = rpgXpPct(st);
        const unlocked = this.unlockedCount();
        card.innerHTML = `
            <div class="rpg-menu-avatar">${rpgAvatarSvg()}</div>
            <div class="rpg-menu-info">
                <div class="rpg-menu-kicker">${rpgT("menuKicker")}</div>
                <div class="rpg-menu-name">${escapeHtml(rpgPlayerName())}</div>
                <div class="rpg-menu-title">${escapeHtml(rpgLoc(title.name))} · ${escapeHtml(rpgLoc(rank.name))}</div>
                <div class="rpg-xpbar" style="margin-top:7px"><i style="width:${pct}%"></i></div>
                <div class="rpg-menu-meta">
                    <span>${rpgT("levelShortCap")} ${st.level}</span>
                    <span>${st.xp} / ${need} XP</span>
                    <span>💎 ${st.crystals}</span>
                    <span>🏆 ${unlocked}/${ACHIEVEMENTS.length}</span>
                </div>
            </div>
            <div class="rpg-menu-actions">
                <button class="rpg-mini-btn${this.pendingCount() ? " has-dot" : ""}" type="button" data-rpg-open="char">${rpgT("openHub")}</button>
                <button class="rpg-mini-btn gold" type="button" data-rpg-open="ach">${rpgT("openAch")}</button>
            </div>
        `;
    },

    renderLevelBar() {
        const bar = this.dom.levelBar || document.getElementById("rpg-levelbar");
        if (!bar || !this.state) return;
        const st = this.state;
        const rank = rpgRankForLevel(st.level);
        const title = this.currentTitle();
        const need = rpgXpForLevel(st.level);
        const pct = rpgXpPct(st);
        bar.innerHTML = `
            <div class="rpg-lb-badge"><b>${st.level}</b><small>${rpgT("levelShortCap")}</small></div>
            <div class="rpg-lb-main">
                <div class="rpg-lb-row">
                    <span>${escapeHtml(rpgPlayerName())} · ${escapeHtml(rpgLoc(title.name))}</span>
                    <span class="muted">${st.xp} / ${need} XP · ${rpgT("levelBarHint")}</span>
                </div>
                <div class="rpg-xpbar"><i style="width:${pct}%"></i></div>
                <div class="rpg-lb-chips" style="margin-top:6px">
                    <span class="rpg-chip gold">💎 ${st.crystals}</span>
                    <span class="rpg-chip pink">🏆 ${this.unlockedCount()}/${ACHIEVEMENTS.length}</span>
                    <span class="rpg-chip">🧠 ${st.skillPoints} SP</span>
                    <span class="rpg-chip">🎖 ${this.achievementPoints()} ${rpgT("achPointsWord")}</span>
                </div>
            </div>
            <button class="rpg-mini-btn${this.pendingCount() ? " has-dot" : ""}" type="button" data-rpg-open="char" title="${escapeHtml(rpgT("hub"))}">🧬 ${escapeHtml(rpgT("hubShort"))}</button>
        `;
    },

    afterLevelSelect() {
        this.renderLevelBar();
        this.decorateLevelCards();
    },

    decorateLevelCards() {
        const cards = document.querySelectorAll("#levels-grid .level-card");
        cards.forEach(card => {
            if (card.querySelector(".rpg-mission-chip")) return;
            const raw = card.getAttribute("data-id");
            if (raw === null || raw === undefined) return;
            const id = raw.indexOf("custom:") === 0 ? raw : parseInt(raw, 10);
            const missionId = this.recommendedMission(id);
            const m = MISSIONS_BY_ID[missionId];
            if (!m) return;
            const rec = this.missionRecord(id, missionId);
            const recText = rec && rec.bestStars ? ` · ⭐${rec.bestStars}` : "";
            const wrap = document.createElement("div");
            wrap.className = "rpg-card-mission-wrap";
            wrap.innerHTML = `<span class="rpg-mission-chip" title="${escapeHtml(rpgT("objectiveLabel") + ": " + rpgLoc(m.objective))}" style="--chip-color:${m.color};--chip-bg:${rpgRgba(m.color, 0.1)};--chip-border:${rpgRgba(m.color, 0.4)}">${m.icon} ${escapeHtml(rpgLoc(m.name))}${recText}</span>`;
            card.appendChild(wrap);
        });
    },

    renderProfileCard() {
        const wrap = document.querySelector(".profile-wrap");
        if (!wrap || !this.state) return;
        let card = document.getElementById("rpg-profile-card");
        if (!card) {
            card = document.createElement("div");
            card.id = "rpg-profile-card";
            card.className = "rpg-profile-card";
            const sub = wrap.querySelector(".profile-sub");
            if (sub && sub.nextSibling) wrap.insertBefore(card, sub.nextSibling);
            else wrap.appendChild(card);
        }
        const st = this.state;
        const rank = rpgRankForLevel(st.level);
        const title = this.currentTitle();
        card.innerHTML = `
            <div class="rpg-hero-level" style="width:56px;height:56px;flex-basis:56px;border-radius:15px"><b>${st.level}</b><small>LVL</small></div>
            <div class="rpg-profile-main">
                <b>${escapeHtml(rpgPlayerName())}</b>
                <small>${escapeHtml(rpgLoc(title.name))} · ${escapeHtml(rpgLoc(rank.name))} · 💎 ${st.crystals} · 🏆 ${this.unlockedCount()}/${ACHIEVEMENTS.length}</small>
                <div class="rpg-xpbar"><i style="width:${rpgXpPct(st)}%"></i></div>
            </div>
            <button class="rpg-mini-btn" type="button" data-rpg-open="char">${escapeHtml(rpgT("openProfileHub"))}</button>
        `;
    },

    /* ---------------- БРИФИНГ МИССИИ ---------------- */
    openBriefing(levelId, assignmentCode = "") {
        let cfg = null;
        try { cfg = getLevelConfig(levelId); } catch (e) {}
        if (!cfg) {
            // Неизвестный уровень — не мешаем оригинальной логике
            try { this.orig.startLevel.call(Game, levelId, assignmentCode || ""); } catch (e) {}
            return;
        }
        const key = String(levelId);
        let selected = this.state.lastMission[key] || this.recommendedMission(levelId);
        if (!MISSIONS_BY_ID[selected]) selected = this.recommendedMission(levelId);
        this._briefing = { levelId, code: assignmentCode || "", selected };
        this.renderBriefing();
        if (this.dom.missionModal) this.dom.missionModal.classList.add("active");
    },

    renderBriefing() {
        const b = this._briefing;
        if (!b) return;
        let cfg = null;
        try { cfg = getLevelConfig(b.levelId); } catch (e) {}
        const tasksTotal = Math.max(1, Number(cfg && cfg.tasksTotal) || 20);
        const progress = Storage.getProgress();
        const levelRecord = progress.completedLevels[b.levelId];
        const levelStars = levelRecord && levelRecord.stars ? levelRecord.stars : 0;
        const recommended = this.recommendedMission(b.levelId);

        if (this.dom.missionKicker) this.dom.missionKicker.textContent = rpgT("briefingKicker");
        if (this.dom.missionTitle) {
            this.dom.missionTitle.textContent = typeof levelTitleText === "function"
                ? levelTitleText(b.levelId)
                : `${rpgT("levelWord")} ${b.levelId}`;
        }
        if (this.dom.missionSub) {
            let desc = "";
            try { desc = levelDescriptionText(cfg); } catch (e) {}
            this.dom.missionSub.textContent = desc || rpgT("briefingSub");
        }
        if (this.dom.missionMeta) {
            this.dom.missionMeta.innerHTML = `
                <span class="rpg-chip">📚 ${rpgT("levelWord")} ${escapeHtml(String(levelIdDisplay(b.levelId)))}</span>
                <span class="rpg-chip">❓ ${tasksTotal} ${rpgT("questionsWord")}</span>
                <span class="rpg-chip gold">${rpgStars(levelStars)} ${escapeHtml(rpgT("bestWord"))}</span>
                <span class="rpg-chip pink">🧬 ${rpgT("levelShortCap")} ${this.state.level}</span>
            `;
        }

        if (this.dom.missionGrid) {
            this.dom.missionGrid.innerHTML = MISSIONS_LIST.map(m => {
                const selected = b.selected === m.id;
                const rec = this.missionRecord(b.levelId, m.id);
                const bestStars = rec ? Number(rec.bestStars) || 0 : 0;
                const recordText = rec && rec.plays
                    ? `${rpgT("bestPrefix")} ${rpgStars(bestStars)}${rec.bestScore ? " · " + rec.bestScore : ""}`
                    : rpgT("notPlayed");
                const diff = "★".repeat(m.diff) + "☆".repeat(5 - m.diff);
                return `
                    <div class="rpg-mission-card ${selected ? "selected" : ""}" data-mission="${m.id}" role="button" tabindex="0"
                         aria-pressed="${selected}" style="--mc:${m.color};--mc2:${m.color2};--mc-soft:${rpgRgba(m.color, 0.13)}">
                        ${recommended === m.id ? `<div class="rpg-rec">${rpgT("recommended")}</div>` : ""}
                        <div class="rpg-mc-icon">${m.icon}</div>
                        <div class="rpg-mc-name">${escapeHtml(rpgLoc(m.name))}</div>
                        <div class="rpg-mc-tag">${escapeHtml(rpgLoc(m.tag))}</div>
                        <div class="rpg-mc-desc">${escapeHtml(rpgLoc(m.desc))}</div>
                        <div class="rpg-mc-obj">🎯 ${escapeHtml(rpgLoc(m.objective))}</div>
                        <div class="rpg-mc-rewards">
                            <span>×${m.xpMul} XP</span>
                            <span>+${m.crystalBonus} 💎</span>
                            <span>${diff}</span>
                        </div>
                        <div class="rpg-mc-record">${recordText}</div>
                    </div>
                `;
            }).join("");
        }

        if (this.dom.missionStart) {
            this.dom.missionStart.textContent = rpgT("startMission");
        }
        if (this.dom.missionCancel) {
            this.dom.missionCancel.textContent = rpgT("back");
        }
        if (this.dom.missionTheory) {
            this.dom.missionTheory.textContent = rpgT("theoryBtn");
        }
        if (this.dom.missionSelected) {
            const m = MISSIONS_BY_ID[b.selected] || MISSIONS_LIST[0];
            this.dom.missionSelected.textContent = `${m.icon} ${rpgLoc(m.name)}`;
        }
    },

    selectBriefingMission(id) {
        if (!this._briefing || !MISSIONS_BY_ID[id]) return;
        this._briefing.selected = id;
        document.querySelectorAll("#mission-grid .rpg-mission-card").forEach(card => {
            const on = card.getAttribute("data-mission") === id;
            card.classList.toggle("selected", on);
            card.setAttribute("aria-pressed", String(on));
        });
        if (this.dom.missionSelected) {
            const m = MISSIONS_BY_ID[id];
            this.dom.missionSelected.textContent = `${m.icon} ${rpgLoc(m.name)}`;
        }
    },

    closeBriefing() {
        this._briefing = null;
        if (this.dom.missionModal) this.dom.missionModal.classList.remove("active");
    },

    startSelectedMission() {
        const b = this._briefing;
        if (!b) return;
        const missionId = b.selected;
        const levelId = b.levelId;
        const code = b.code;
        this.closeBriefing();
        this.startMission(levelId, code, missionId);
    },

    startMission(levelId, assignmentCode, missionId) {
        const id = MISSIONS_BY_ID[missionId] ? missionId : "defense";
        if (this.state) {
            this.state.lastMission[String(levelId)] = id;
            this.saveSoon();
        }
        try {
            if (typeof Game.__startLevelWithMission === "function") {
                Game.__startLevelWithMission(levelId, assignmentCode || "", id);
            } else {
                this.beginRun(levelId, id);
                this.orig.startLevel.call(Game, levelId, assignmentCode || "");
                this.applyMission(Game);
            }
        } catch (e) {
            console.error("RPG startMission failed", e);
        }
    },

    /* ---------------- ШТАБ ПИЛОТА ---------------- */
    openHub(tab = "char") {
        this._hubTab = ["char", "skills", "ach", "shop", "quests"].includes(tab) ? tab : "char";
        this._hubOpen = true;
        this.renderHub();
        if (this.dom.hubModal) this.dom.hubModal.classList.add("active");
    },

    closeHub() {
        this._hubOpen = false;
        if (this.dom.hubModal) this.dom.hubModal.classList.remove("active");
    },

    renderHub() {
        if (!this.state) return;
        this.renderHubHeader();
        this.renderHubTabs();
        this.renderHubBody();
    },

    renderHubHeader() {
        const head = this.dom.hubHead;
        if (!head || !this.state) return;
        const st = this.state;
        const rank = rpgRankForLevel(st.level);
        const title = this.currentTitle();
        const need = rpgXpForLevel(st.level);
        head.innerHTML = `
            <div class="rpg-hub-avatar">${rpgAvatarSvg()}</div>
            <div class="rpg-hub-who">
                <div class="rpg-hub-name">${escapeHtml(rpgPlayerName())}</div>
                <div class="rpg-hub-sub">${escapeHtml(rpgLoc(title.name))} · <b>${escapeHtml(rpgLoc(rank.name))}</b></div>
                <div class="rpg-hub-xprow">
                    <div class="rpg-xpbar"><i style="width:${rpgXpPct(st)}%"></i></div>
                    <span class="rpg-hub-xptext">${st.xp} / ${need} XP · LVL ${st.level}</span>
                </div>
            </div>
            <div class="rpg-hub-res">
                <span class="rpg-chip gold">💎 ${st.crystals}</span>
                <span class="rpg-chip">🧠 ${st.skillPoints} SP</span>
                <span class="rpg-chip pink">🎖 ${this.achievementPoints()} ${rpgT("achPointsWord")}</span>
            </div>
        `;
    },

    renderHubTabs() {
        const tabs = this.dom.hubTabs;
        if (!tabs) return;
        const items = [
            ["char", rpgT("tabChar")],
            ["skills", rpgT("tabSkills")],
            ["ach", rpgT("tabAch")],
            ["shop", rpgT("tabShop")],
            ["quests", rpgT("tabQuests")]
        ];
        tabs.innerHTML = items.map(([id, label]) =>
            `<button class="rpg-hub-tab ${this._hubTab === id ? "active" : ""}" type="button" data-hub-tab="${id}">${escapeHtml(label)}</button>`
        ).join("");
    },

    renderHubBody() {
        const body = this.dom.hubBody;
        if (!body || !this.state) return;
        switch (this._hubTab) {
            case "skills": body.innerHTML = this.renderSkills(); break;
            case "ach": body.innerHTML = this.renderAchievements(); break;
            case "shop": body.innerHTML = this.renderShop(); break;
            case "quests": body.innerHTML = this.renderQuests(); break;
            default: body.innerHTML = this.renderCharacter();
        }
    },

    renderCharacter() {
        const st = this.state;
        const s = st.stats;
        const rank = rpgRankForLevel(st.level);
        const title = this.currentTitle();
        const need = rpgXpForLevel(st.level);
        const points = this.achievementPoints();
        const stats = [
            [s.missions || 0, rpgT("statMissions")],
            [s.victories || 0, rpgT("statVictories")],
            [s.questionsCorrect || 0, rpgT("statCorrect")],
            [s.bestStreak || 0, rpgT("statBestStreak")],
            [s.totalAsteroids || 0, rpgT("statAsteroids")],
            [s.totalOrbs || 0, rpgT("statOrbs")],
            [s.bossKills || 0, rpgT("statBoss")],
            [s.perfectMissions || 0, rpgT("statPerfect")],
            [s.crystalsEarned || 0, rpgT("statCrystalsEarned")],
            [`${this.unlockedCount()}/${ACHIEVEMENTS.length}`, rpgT("statAch")],
            [(s.clearedLevels || []).length, rpgT("statLevels")],
            [s.objectivesCompleted || 0, rpgT("statObjectives")]
        ];
        const titles = TITLES.map(t => {
            const unlocked = points >= t.min;
            const active = title.id === t.id;
            return `<button class="rpg-title-chip ${unlocked ? "" : "locked"} ${active ? "active" : ""}"
                type="button" ${unlocked ? `data-rpg-action="title" data-id="${t.id}"` : "disabled"}
                title="${t.min} ${escapeHtml(rpgT("achPointsWord"))}">
                ${unlocked ? "" : "🔒 "}${escapeHtml(rpgLoc(t.name))}${unlocked ? "" : ` · ${t.min}`}
            </button>`;
        }).join("");

        return `
            <div class="rpg-hero-card">
                <div class="rpg-hero-level"><b>${st.level}</b><small>LVL</small></div>
                <div class="rpg-hero-info">
                    <h3>${escapeHtml(rpgPlayerName())}</h3>
                    <div class="rpg-hero-rank">${escapeHtml(rpgLoc(title.name))} · ${escapeHtml(rpgLoc(rank.name))}</div>
                    <div class="rpg-hero-xp">
                        <div class="rpg-xpbar"><i style="width:${rpgXpPct(st)}%"></i></div>
                        <span>${st.xp} / ${need} XP</span>
                    </div>
                </div>
            </div>
            <div class="rpg-stat-grid">
                ${stats.map(([value, label]) => `<div class="rpg-stat"><b>${value}</b><span>${escapeHtml(label)}</span></div>`).join("")}
            </div>
            <div class="rpg-section-title">${escapeHtml(rpgT("titlesTitle"))}</div>
            <p class="rpg-section-note">${escapeHtml(rpgT("titlesHint"))}</p>
            <div class="rpg-title-wrap">${titles}</div>
            <div class="rpg-reset-row" style="margin-top:18px">
                <button class="rpg-mini-btn" type="button" data-rpg-action="reset-rpg" style="opacity:.6">♻️ ${escapeHtml(rpgT("resetRpg"))}</button>
            </div>
        `;
    },

    renderSkills() {
        const st = this.state;
        const perks = PERKS.map(p => {
            const rank = this.perkRank(p.id);
            const maxed = rank >= p.max;
            const dots = Array.from({ length: p.max }, (_, i) => `<i class="${i < rank ? "on" : ""}"></i>`).join("");
            const label = maxed
                ? rpgT("perkMaxed")
                : st.skillPoints > 0
                    ? rpgT("perkUp", 1)
                    : rpgT("perkNoPoints");
            return `
                <div class="rpg-perk ${maxed ? "maxed" : ""}">
                    <div class="rpg-perk-icon">${p.icon}</div>
                    <div class="rpg-perk-main">
                        <div class="rpg-perk-title">
                            <b>${escapeHtml(rpgLoc(p.name))}</b>
                            <span class="rpg-perk-rank">${rpgT("perkRank", rank, p.max)}</span>
                        </div>
                        <div class="rpg-perk-desc">${escapeHtml(rpgLoc(p.desc))}</div>
                        <div class="rpg-perk-dots">${dots}</div>
                        <button class="rpg-perk-btn ${maxed ? "max" : ""}" type="button"
                            data-rpg-action="perk" data-id="${p.id}"
                            ${maxed || st.skillPoints <= 0 ? "disabled" : ""}>${escapeHtml(label)}</button>
                    </div>
                </div>
            `;
        }).join("");
        return `
            <div class="rpg-perk-headrow">
                <div>
                    <div class="rpg-section-title" style="margin-bottom:4px">${escapeHtml(rpgT("skillsTitle"))}</div>
                    <p class="rpg-section-note" style="margin-bottom:0">${escapeHtml(rpgT("skillsHint"))}</p>
                </div>
                <span class="rpg-sp-badge">🧠 ${st.skillPoints} ${escapeHtml(rpgT("skillPoints"))}</span>
            </div>
            <div class="rpg-perk-grid">${perks}</div>
            <div class="rpg-reset-row">
                <button class="rpg-mini-btn" type="button" data-rpg-action="reset-perks" ${this.perkRankTotal() ? "" : "disabled"} style="opacity:${this.perkRankTotal() ? ".8" : ".4"}">♻️ ${escapeHtml(rpgT("resetSkills", RPG_RESET_PERK_COST))}</button>
            </div>
        `;
    },

    perkRankTotal() {
        return Object.values(this.state.perks || {}).reduce((a, b) => a + (Number(b) || 0), 0);
    },

    renderAchievements() {
        const snap = this.snapshot();
        const points = this.achievementPoints();
        const unlocked = this.unlockedCount();
        const nextTitle = TITLES.find(t => t.min > points);
        const goal = nextTitle ? nextTitle.min : Math.max(1, points);
        const pct = nextTitle ? Math.min(100, Math.round((points / goal) * 100)) : 100;

        const filters = [
            ["all", rpgT("filterAll")],
            ["unlocked", rpgT("filterUnlocked")],
            ["locked", rpgT("filterLocked")]
        ].map(([id, label]) => `<button type="button" class="${this._hubFilter === id ? "active" : ""}" data-ach-filter="${id}">${escapeHtml(label)}</button>`).join("");

        const tierOrder = { platinum: 4, gold: 3, silver: 2, bronze: 1 };
        let list = ACHIEVEMENTS.slice().sort((a, b) => {
            const ua = !!this.state.achievements[a.id];
            const ub = !!this.state.achievements[b.id];
            if (ua !== ub) return ua ? -1 : 1;
            return (tierOrder[b.tier] || 0) - (tierOrder[a.tier] || 0);
        });
        if (this._hubFilter === "unlocked") list = list.filter(a => this.state.achievements[a.id]);
        if (this._hubFilter === "locked") list = list.filter(a => !this.state.achievements[a.id]);

        const cards = list.map(a => {
            const isUnlocked = !!this.state.achievements[a.id];
            const isSecret = !!a.secret && !isUnlocked;
            const info = TIER_INFO[a.tier] || TIER_INFO.bronze;
            const value = Math.min(Number(snap[a.stat]) || 0, a.target);
            const prog = Math.max(0, Math.min(100, Math.round((value / a.target) * 100)));
            const name = isSecret ? rpgT("secretName") : rpgLoc(a.name);
            const desc = isSecret ? rpgT("secretDesc") : rpgLoc(a.desc);
            return `
                <div class="rpg-ach ${isUnlocked ? "unlocked" : "locked"} tier-${a.tier}">
                    <div class="rpg-ach-icon">${isSecret ? "❓" : a.icon}</div>
                    <div class="rpg-ach-main">
                        <div class="rpg-ach-name">${escapeHtml(name)}
                            <span class="rpg-ach-tier">${escapeHtml(rpgLoc(info.label))}</span>
                        </div>
                        <div class="rpg-ach-desc">${escapeHtml(desc)}</div>
                        ${isSecret ? "" : `<div class="rpg-ach-prog"><i style="width:${isUnlocked ? 100 : prog}%"></i></div>`}
                        <div class="rpg-ach-meta">
                            <span>${isSecret ? "???" : `${value} / ${a.target}`}</span>
                            <span>${escapeHtml(rpgT("achRewardLine", info.xp, info.crystals))} · ${info.points}</span>
                        </div>
                    </div>
                    ${isUnlocked ? '<div class="rpg-ach-status">✓</div>' : ""}
                </div>
            `;
        }).join("");

        return `
            <div class="rpg-ach-summary">
                <div class="rpg-ach-score"><b>${points}</b><span>${escapeHtml(rpgT("achPointsWord"))}</span></div>
                <div class="rpg-ach-summary-main">
                    <div class="rpg-xpbar"><i style="width:${pct}%"></i></div>
                    <div class="rpg-ach-summary-meta">
                        <span>${escapeHtml(rpgT("achSummary", unlocked, ACHIEVEMENTS.length))}</span>
                        <span>${nextTitle ? escapeHtml(rpgLoc(nextTitle.name)) + " · " + points + "/" + goal : "MAX"}</span>
                    </div>
                </div>
                <div class="rpg-ach-filter">${filters}</div>
            </div>
            <div class="rpg-ach-grid">
                ${cards || `<div class="rpg-empty">${escapeHtml(rpgT("emptyFilter"))}</div>`}
            </div>
        `;
    },

    renderShop() {
        const st = this.state;
        const allOwned = ARTIFACTS.every(a => this.hasArtifact(a.id));
        const cards = ARTIFACTS.map(a => {
            const owned = this.hasArtifact(a.id);
            const canBuy = !owned && st.crystals >= a.cost;
            return `
                <div class="rpg-shop-card ${owned ? "owned" : ""}">
                    <div class="rpg-shop-top">
                        <div class="rpg-shop-icon">${a.icon}</div>
                        <div>
                            <div class="rpg-shop-name">${escapeHtml(rpgLoc(a.name))}</div>
                            <div class="rpg-shop-desc">${escapeHtml(rpgLoc(a.desc))}</div>
                        </div>
                    </div>
                    <div class="rpg-shop-foot">
                        <span class="rpg-cost">${owned ? "✓ " + escapeHtml(rpgT("owned")) : "💎 " + a.cost}</span>
                        <button class="rpg-shop-btn ${owned ? "owned" : ""}" type="button"
                            data-rpg-action="buy" data-id="${a.id}" ${owned || !canBuy ? "disabled" : ""}>
                            ${owned ? escapeHtml(rpgT("owned")) : escapeHtml(rpgT("buy"))}
                        </button>
                    </div>
                </div>
            `;
        }).join("");
        return `
            <div class="rpg-shop-balance">
                <div><span>${escapeHtml(rpgT("balance"))}</span><br><b>💎 ${st.crystals}</b></div>
                <span>${escapeHtml(rpgT("shopHint"))}</span>
            </div>
            <div class="rpg-shop-grid">${cards}</div>
            ${allOwned ? `<p class="rpg-section-note" style="margin-top:14px;text-align:center">🏆 ${escapeHtml(rpgT("allArtifacts"))}</p>` : ""}
        `;
    },

    renderQuests() {
        this.ensureDaily();
        const daily = this.state.daily;
        const items = daily.items.map(item => {
            const def = this.questDef(item.id);
            if (!def) return "";
            const progress = this.questProgress(item);
            const done = progress >= def.target;
            const pct = Math.min(100, Math.round((progress / def.target) * 100));
            const label = item.claimed ? rpgT("claimed") : done ? rpgT("claim") : `${Math.min(progress, def.target)}/${def.target}`;
            return `
                <div class="rpg-quest ${done ? "done" : ""} ${item.claimed ? "claimed" : ""}">
                    <div class="rpg-quest-icon">${def.icon}</div>
                    <div class="rpg-quest-main">
                        <div class="rpg-quest-name">${escapeHtml(rpgLoc(def.name))}
                            ${done ? `<span class="rpg-ach-tier">${escapeHtml(rpgT("questDone"))}</span>` : ""}
                        </div>
                        <div class="rpg-quest-desc">${escapeHtml(rpgLoc(def.desc))}</div>
                        <div class="rpg-quest-prog">
                            <div class="rpg-xpbar"><i style="width:${pct}%"></i></div>
                            <span>${Math.min(progress, def.target)} / ${def.target}</span>
                        </div>
                        <div class="rpg-quest-reward">${escapeHtml(rpgT("questReward", def.xp, def.crystals))}</div>
                    </div>
                    <button class="rpg-quest-claim ${item.claimed ? "claimed" : ""}" type="button"
                        data-rpg-action="claim" data-id="${item.id}"
                        ${!done || item.claimed ? "disabled" : ""}>${escapeHtml(label)}</button>
                </div>
            `;
        }).join("");
        const allDone = daily.items.every(item => item.claimed);
        return `
            <div class="rpg-quests-head">
                <div>
                    <div class="rpg-section-title" style="margin-bottom:2px">${escapeHtml(rpgT("questsTitle"))}</div>
                    <p class="rpg-section-note" style="margin-bottom:0">${escapeHtml(rpgT("questsHint"))}</p>
                </div>
                <span class="rpg-quests-reset">🕛 ${escapeHtml(rpgT("resetAt"))}</span>
            </div>
            <div class="rpg-quest-list">${items}</div>
            ${allDone ? `<p class="rpg-section-note" style="margin-top:14px;text-align:center">✅ ${escapeHtml(rpgT("allQuestsDone"))}</p>` : ""}
        `;
    },

    handleAction(btn) {
        const action = btn.getAttribute("data-rpg-action");
        const id = btn.getAttribute("data-id");
        if (action === "perk") this.unlockPerk(id);
        else if (action === "buy") this.buyArtifact(id);
        else if (action === "claim") this.claimQuest(id);
        else if (action === "title") this.equipTitle(id);
        else if (action === "reset-perks") this.resetPerks();
        else if (action === "reset-rpg") {
            if (!confirm(rpgT("resetRpgConfirm"))) return;
            try { localStorage.removeItem(RPG_STORAGE_KEY); } catch (e) {}
            this.state = this.defaultState();
            this._pendingLevelUps = 0;
            this.ensureDaily();
            this.save();
            this.closeHub();
            this.renderMenuCard();
            this.renderLevelBar();
            this.toast("♻️", rpgT("resetRpgDone"), "", "warning");
        }
        else if (action === "open-hub") this.openHub("char");
        else if (action === "close-levelup") this.hideLevelUpOverlay();
        else if (action === "retry-same") {
            const level = btn.getAttribute("data-level");
            const missionId = btn.getAttribute("data-mission-id");
            if (level !== null && level !== undefined) {
                const parsed = level.indexOf("custom:") === 0 ? level : parseInt(level, 10);
                this.startMission(parsed, "", missionId || "defense");
            }
        }
    },

    /* ---------------- ТОСТЫ И LEVEL UP ---------------- */
    toast(icon, title, sub, tone = "") {
        const container = this.dom.toasts || document.getElementById("rpg-toasts");
        if (!container) return;
        while (container.children.length >= 3) container.removeChild(container.firstChild);
        const el = document.createElement("div");
        el.className = "rpg-toast " + (tone || "");
        el.innerHTML = `
            <div class="rpg-toast-icon">${icon || "✨"}</div>
            <div class="rpg-toast-main">
                <div class="rpg-toast-title">${escapeHtml(title || "")}</div>
                ${sub ? `<div class="rpg-toast-sub">${escapeHtml(sub)}</div>` : ""}
            </div>
        `;
        container.appendChild(el);
        requestAnimationFrame(() => el.classList.add("show"));
        setTimeout(() => {
            el.classList.remove("show");
            setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 350);
        }, 4300);
    },

    showLevelUpOverlay() {
        if (!this.dom.levelUp || !this.dom.levelUpBox || !this.state) return;
        // Не перекрываем итоговый экран или штаб: там уже есть строка о новом уровне.
        if (document.querySelector("#victory-screen.active, #gameover-screen.active, #mission-modal.active, #rpg-modal.active")) {
            this._pendingLevelUps = 0;
            return;
        }
        const rank = rpgRankForLevel(this.state.level);
        const confetti = Array.from({ length: 14 }, (_, i) => {
            const colors = ["#7c4dff", "#00b8d4", "#ffb300", "#d81b60", "#00c853", "#3d5afe"];
            return `<i style="left:${Math.round(Math.random() * 96)}%;background:${colors[i % colors.length]};animation-delay:${(Math.random() * 1.4).toFixed(2)}s;animation-duration:${(1.2 + Math.random()).toFixed(2)}s"></i>`;
        }).join("");
        this.dom.levelUpBox.innerHTML = `
            <div class="rpg-lu-confetti">${confetti}</div>
            <div class="rpg-lu-kicker">${escapeHtml(rpgT("levelUpKicker"))}</div>
            <div class="rpg-lu-level">${this.state.level}</div>
            <div class="rpg-lu-rank">${escapeHtml(rpgLoc(rank.name))}</div>
            <div class="rpg-lu-rewards">
                <span>🧠 ${escapeHtml(rpgT("levelUpSkill"))}</span>
                <span>💎 ${this.state.crystals}</span>
            </div>
            <button class="btn btn-primary" type="button" data-rpg-action="close-levelup">${escapeHtml(rpgT("continueBtn"))}</button>
        `;
        this.dom.levelUp.classList.add("active");
        this._pendingLevelUps = 0;
        // Оверлей не должен «залипать»: сам уходит и закрывается кликом по фону.
        clearTimeout(this._levelUpAutoHide);
        this._levelUpAutoHide = setTimeout(() => this.hideLevelUpOverlay(), 6500);
    },

    hideLevelUpOverlay() {
        clearTimeout(this._levelUpAutoHide);
        this._levelUpAutoHide = null;
        if (this.dom.levelUp) this.dom.levelUp.classList.remove("active");
    },

    /* ---------------- ИГРОВОЙ HUD ---------------- */
    buildMissionPanel(game) {
        const panel = this.dom.missionHud;
        const run = this.run;
        if (!panel || !run) return;
        const m = run.mission;
        const mod = `×${m.xpMul} XP`;
        let objText = "";
        if (m.hud === "dome") objText = rpgT("hudDome", 80);
        else if (m.hud === "orbs") objText = rpgT("hudOrbs", run.orbsGoal);
        else if (m.hud === "boss") objText = rpgT("hudBoss");
        else if (m.hud === "speed") objText = rpgT("hudSpeed", run.speedGoal);
        else objText = rpgT("hudWaves", 3);
        panel.innerHTML = `
            <div class="rpg-mh-row">
                <span class="rpg-mh-icon">${m.icon}</span>
                <span class="rpg-mh-name">${escapeHtml(rpgLoc(m.name))}</span>
                <span class="rpg-mh-mod">${escapeHtml(mod)}</span>
            </div>
            <div class="rpg-mh-objrow">
                <span id="rpg-mh-objtext">${escapeHtml(objText)}</span>
                <span class="rpg-mh-objval" id="rpg-mh-objval">—</span>
            </div>
            <div class="rpg-mh-bar"><i id="rpg-mh-fill"></i></div>
            <div class="rpg-mh-extra" id="rpg-mh-extra"></div>
        `;
        this.dom.mhObjText = document.getElementById("rpg-mh-objtext");
        this.dom.mhObjVal = document.getElementById("rpg-mh-objval");
        this.dom.mhFill = document.getElementById("rpg-mh-fill");
        this.dom.mhExtra = document.getElementById("rpg-mh-extra");
    },

    updateGameHud() {
        const run = this.run;
        if (!run || !run.active || !this.state) return;
        const st = this.state;

        if (this.dom.pilotLevel) this.dom.pilotLevel.textContent = st.level;
        if (this.dom.pilotRank) this.dom.pilotRank.textContent = rpgLoc(rpgRankForLevel(st.level).name);
        if (this.dom.pilotCrystals) this.dom.pilotCrystals.textContent = `💎 ${st.crystals}`;
        if (this.dom.pilotXpFill) this.dom.pilotXpFill.style.width = rpgXpPct(st) + "%";
        if (this.dom.pilotXpText) this.dom.pilotXpText.textContent = `${st.xp} / ${rpgXpForLevel(st.level)} XP`;
        if (this.dom.pilotStreak) {
            if (run.streak >= 2) {
                const mult = 1 + Math.min(run.streak - 1, 5) * 0.1;
                this.dom.pilotStreak.textContent = `🔥 ×${mult.toFixed(1)}`;
                this.dom.pilotStreak.classList.add("show");
                this.dom.pilotStreak.classList.toggle("hot", run.streak >= 5);
            } else {
                this.dom.pilotStreak.classList.remove("show", "hot");
            }
        }

        const m = run.mission;
        let pct = 0, val = "", extra = "", done = false;
        if (m.hud === "dome") {
            const ratio = Game.cityHealth / Math.max(1, Game.cityMaxHealth);
            pct = Math.round(ratio * 100);
            val = pct + "%";
            done = ratio >= 0.8;
            extra = rpgT("hudExtraDefense", Math.max(0, 100 - pct));
        } else if (m.hud === "orbs") {
            pct = Math.round((run.orbs / run.orbsGoal) * 100);
            val = `${Math.min(run.orbs, run.orbsGoal)} / ${run.orbsGoal}`;
            done = run.orbs >= run.orbsGoal;
            extra = rpgT("hudExtraHarvest", this.magnetRadius());
        } else if (m.hud === "boss") {
            if (run.boss) {
                pct = Math.round((run.boss.hp / Math.max(1, run.boss.max)) * 100);
                val = `${Math.ceil(run.boss.hp)} / ${run.boss.max}`;
                done = run.boss.dead;
                if (done) extra = rpgT("bossKilled");
                else extra = rpgT("hudExtraBoss");
            }
        } else if (m.hud === "speed") {
            pct = Math.round((run.speedAnswers / run.speedGoal) * 100);
            val = `${Math.min(run.speedAnswers, run.speedGoal)} / ${run.speedGoal}`;
            done = run.speedAnswers >= run.speedGoal;
            extra = rpgT("hudExtraBlitz");
        } else {
            pct = Math.round((run.waves / 3) * 100);
            val = `${Math.min(run.waves, 3)} / 3`;
            done = run.waves >= 3;
            extra = rpgT("hudExtraSurvival", run.waves);
        }

        if (this.dom.mhObjText) {
            if (m.hud === "dome") this.dom.mhObjText.textContent = rpgT("hudDome", 80);
        }
        if (this.dom.mhObjVal) this.dom.mhObjVal.textContent = val;
        if (this.dom.mhFill) {
            this.dom.mhFill.style.width = Math.max(0, Math.min(100, pct)) + "%";
            this.dom.mhFill.classList.toggle("done", done);
        }
        if (this.dom.mhExtra) this.dom.mhExtra.innerHTML = extra;
    },

    updateTaskChip() {
        const chip = this.dom.taskChip || document.getElementById("rpg-task-chip");
        if (!chip) return;
        const run = this.run;
        if (!run || !run.active) {
            chip.style.display = "none";
            chip.textContent = "";
            return;
        }
        chip.style.display = "inline-flex";
        chip.textContent = `${run.mission.icon} ${rpgLoc(run.mission.name)}`;
    },

    showCombo(streak, extra) {
        const el = this.dom.combo;
        if (!el) return;
        if (streak < 2) {
            el.classList.remove("show");
            return;
        }
        const mult = 1 + Math.min(streak - 1, 5) * 0.1;
        const bonus = extra > 0 ? `<small>${escapeHtml(rpgT("comboBonus", "+" + extra))}</small>` : "";
        el.innerHTML = `${escapeHtml(rpgT("combo", "×" + mult.toFixed(1)))}${bonus}`;
        el.classList.add("show");
        clearTimeout(this._comboTimer);
        this._comboTimer = setTimeout(() => el.classList.remove("show"), 1800);
    },

    showBanner(opts) {
        const el = this.dom.banner;
        if (!el) return;
        const o = opts || {};
        if (o.color) {
            el.style.setProperty("--banner-accent", o.color);
            el.style.setProperty("--banner-soft", rpgRgba(o.color, 0.3));
        } else {
            el.style.removeProperty("--banner-accent");
            el.style.removeProperty("--banner-soft");
        }
        el.innerHTML = `
            <div class="rpg-mb-icon">${o.icon || "🛰"}</div>
            <div>
                <div class="rpg-mb-kicker">${escapeHtml(o.kicker || "")}</div>
                <div class="rpg-mb-name">${escapeHtml(o.name || "")}</div>
                ${o.sub ? `<div class="rpg-mb-obj">${escapeHtml(o.sub)}</div>` : ""}
            </div>
        `;
        el.classList.add("show");
        clearTimeout(this._bannerTimer);
        this._bannerTimer = setTimeout(() => el.classList.remove("show"), 4400);
    },

    showMissionBanner(mission) {
        if (!mission) return;
        this.showBanner({
            icon: mission.icon,
            kicker: rpgT("missionStarted"),
            name: rpgLoc(mission.name),
            sub: `${rpgT("objective")}: ${rpgLoc(mission.objective)}`
        });
    },

    /* ---------------- РИСОВАНИЕ В CANVAS ---------------- */
    drawMissionFx(game) {
        const run = this.run;
        if (!run || !run.active || !game.ctx || !game.width || !game.height) return;
        const ctx = game.ctx;
        const m = run.mission;
        const t = Date.now() / 1000;

        if (m.id === "boss" && run.boss && !run.boss.dead) {
            this.drawBoss(ctx, game, t, run.boss);
        }
        if (m.id === "harvest") {
            ctx.save();
            game.energyOrbs.forEach(o => {
                const pulse = 1 + Math.sin(t * 3 + (o.x + o.y) * 0.01) * 0.18;
                ctx.strokeStyle = "rgba(80, 255, 160, 0.35)";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(o.x, o.y, o.radius * 2.1 * pulse, 0, Math.PI * 2);
                ctx.stroke();
            });
            const grad = ctx.createLinearGradient(0, game.height - 170, 0, game.height);
            grad.addColorStop(0, "rgba(0, 220, 120, 0)");
            grad.addColorStop(1, "rgba(0, 220, 120, 0.10)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, game.height - 170, game.width, 170);
            ctx.restore();
        }
        if (m.id === "blitz") {
            ctx.save();
            ctx.strokeStyle = "rgba(255, 190, 90, 0.16)";
            ctx.lineWidth = 1;
            for (let i = 0; i < 10; i++) {
                const x = (i * 137 + t * 260) % (game.width + 100) - 50;
                const y = (i * 91 + t * 420) % (game.height + 120) - 60;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - 14, y + 38);
                ctx.stroke();
            }
            ctx.restore();
        }
        if (m.id === "survival") {
            ctx.save();
            const waves = Math.max(1, run.waves);
            ctx.strokeStyle = `rgba(170, 140, 255, ${0.08 + waves * 0.03})`;
            ctx.lineWidth = 2;
            for (let i = 0; i < 3; i++) {
                const y = 12 + i * 8;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(game.width, y);
                ctx.stroke();
            }
            ctx.restore();
        }
    },

    drawBoss(ctx, game, t, boss) {
        const x = game.width / 2;
        // На узких экранах ядро ниже: сверху уже стоят HUD и баннер миссии.
        const baseY = game.width < 768 ? 252 : 118;
        const y = Math.min(baseY, game.height * (game.width < 768 ? 0.34 : 0.2));
        const r = Math.min(78, game.width * 0.15);
        const hpPct = boss.hp / Math.max(1, boss.max);
        ctx.save();

        const glow = ctx.createRadialGradient(x, y, r * 0.1, x, y, r * 1.75);
        glow.addColorStop(0, "rgba(255, 90, 110, 0.45)");
        glow.addColorStop(0.55, "rgba(170, 20, 70, 0.16)");
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, r * 1.75, 0, Math.PI * 2);
        ctx.fill();

        ctx.translate(x, y);
        ctx.rotate(t * 0.35);
        ctx.fillStyle = "rgba(255, 70, 95, 0.85)";
        for (let i = 0; i < 8; i++) {
            ctx.rotate(Math.PI / 4);
            ctx.beginPath();
            ctx.moveTo(r * 0.9, 0);
            ctx.lineTo(r * 1.4, -r * 0.16);
            ctx.lineTo(r * 1.4, r * 0.16);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        const pulse = 1 + Math.sin(t * 2.2) * 0.04;
        const core = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 2, x, y, r * pulse);
        core.addColorStop(0, "#ffd8d8");
        core.addColorStop(0.35, "#ff5a6a");
        core.addColorStop(0.78, "#8a0f2a");
        core.addColorStop(1, "#360110");
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(10, 0, 20, 0.72)";
        ctx.beginPath();
        ctx.ellipse(x, y, r * 0.5, r * 0.27, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffec6b";
        ctx.beginPath();
        ctx.arc(x, y, r * 0.12, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgba(255,255,255,0.16)";
        ctx.beginPath();
        ctx.arc(x, y, r + 16, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = hpPct > 0.5 ? "#00e676" : hpPct > 0.25 ? "#ffb300" : "#ff1744";
        ctx.beginPath();
        ctx.arc(x, y, r + 16, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * hpPct);
        ctx.stroke();

        ctx.font = "700 10px 'Segoe UI', sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.fillText(rpgT("bossCaption"), x, y + r + 36);
    },

    /* ---------------- РЕЗУЛЬТАТ МИССИИ ---------------- */
    renderRunSummary(victory, summary) {
        const container = document.querySelector(victory ? ".victory-content" : ".gameover-content");
        if (!container || !summary) return;
        const old = container.querySelector(".rpg-run-result");
        if (old) old.remove();

        const m = summary.mission;
        const rating = summary.rating || "D";
        const objLabel = summary.objectiveDone ? rpgT("objDone") : rpgT("objNot");
        const newAchText = summary.newAchievements.length
            ? summary.newAchievements.map(a => `${a.icon} ${rpgLoc(a.name)}`).join(" · ")
            : "";
        const need = rpgXpForLevel(this.state.level);
        const block = document.createElement("div");
        block.className = "rpg-run-result " + (victory ? "victory" : "defeat");
        block.innerHTML = `
            <div class="rpg-rr-head">
                <div class="rpg-rr-rating r${rating}">${rating}</div>
                <div>
                    <div class="rpg-rr-title">${escapeHtml(victory ? rpgT("resultVictory") : rpgT("resultDefeat"))}</div>
                    <div class="rpg-rr-mission">${m.icon} ${escapeHtml(rpgLoc(m.name))} · ${escapeHtml(rpgT("levelWord"))} ${escapeHtml(String(summary.levelId))} · ${rpgStars(summary.stars)}</div>
                </div>
            </div>
            <div class="rpg-rr-grid">
                <div class="rpg-rr-cell"><span>${escapeHtml(rpgT("resultXp"))}</span><b>+${summary.xpGain} XP</b></div>
                <div class="rpg-rr-cell"><span>${escapeHtml(rpgT("resultCr"))}</span><b>+${summary.crystalsGain} 💎</b></div>
                <div class="rpg-rr-cell"><span>${escapeHtml(rpgT("resultObj"))}</span><b class="${summary.objectiveDone ? "ok" : "bad"}">${escapeHtml(objLabel)}</b></div>
                <div class="rpg-rr-cell"><span>${escapeHtml(rpgT("resultRating"))}</span><b>${rating}</b></div>
            </div>
            <div class="rpg-rr-xprow">
                <div class="rpg-xpbar"><i style="width:${rpgXpPct(this.state)}%"></i></div>
                <span>LVL ${this.state.level} · ${this.state.xp} / ${need} XP</span>
            </div>
            ${summary.levelsGained > 0 ? `<div class="rpg-rr-ach">⬆️ ${escapeHtml(rpgT("newLevelsLine", summary.levelsGained))} · LVL ${summary.levelAfter}${summary.rankUp ? " · " + escapeHtml(rpgLoc(summary.rankUp.name)) : ""}</div>` : ""}
            ${newAchText ? `<div class="rpg-rr-ach">${escapeHtml(rpgT("newAchLine", ""))} ${escapeHtml(newAchText)}</div>` : ""}
            <div class="rpg-result-actions">
                <button class="btn btn-secondary" type="button" data-rpg-action="open-hub">${escapeHtml(rpgT("openHubBtn"))}</button>
                <button class="btn btn-secondary" type="button" data-rpg-action="retry-same"
                    data-level="${escapeHtml(String(summary.levelId))}" data-mission-id="${m.id}">${escapeHtml(rpgT("retryBtn"))}</button>
            </div>
        `;
        const buttons = container.querySelector(victory ? ".victory-buttons" : ".gameover-buttons");
        if (buttons) container.insertBefore(block, buttons);
        else container.appendChild(block);

        if (summary.levelsGained > 0) {
            clearTimeout(this._levelUpTimer);
            this._levelUpTimer = setTimeout(() => this.showLevelUpOverlay(), 850);
        }
        if (summary.rankUp) {
            this.toast("🎖", rpgT("rankUpToast"), rpgLoc(summary.rankUp.name), "tier-gold");
        }
        this.renderMenuCard();
        this.renderLevelBar();
    }
});

function rpgMaybeWelcome() {
    // Попап «РПГ-режим активирован» убран: игрок сразу попадает в меню без модальных окон.
    // Флаг welcomed всё равно ставим, чтобы старые сохранения не пытались его показать снова.
    try {
        const R = window.RPG;
        const st = R && R.state;
        if (!st || st.welcomed) return;
        st.welcomed = true;
        if (typeof R.saveSoon === "function") R.saveSoon();
    } catch (e) {}
}

function levelIdDisplay(levelId) {
    if (typeof levelId === "string" && levelId.indexOf("custom:") === 0) return "★";
    return String(levelId);
}
