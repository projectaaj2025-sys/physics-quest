/* ============================================================
   RPG CORE — состояние, прогресс, достижения, квесты и хуки игры
   ============================================================ */

const RPG_STORAGE_KEY = `physicsquest${window.CURRENT_GRADE || 8}_rpg_v1`;
const RPG_MAX_LEVEL = 60;
const RPG_RESET_PERK_COST = 30;

const RPG = {
    state: null,
    run: null,
    dom: {},
    orig: {},
    _saveTimer: null,
    _achBusy: false,
    _pendingLevelUps: 0,
    _briefing: null,
    _hubTab: "char",
    _hubFilter: "all",
    _hubOpen: false,
    _toastCount: 0,
    _comboTimer: null,
    _bannerTimer: null,
    _levelUpTimer: null,
    _lastRunSummary: null,

    /* ---------------- ХРАНИЛИЩЕ ---------------- */
    defaultState() {
        return {
            version: 1,
            xp: 0,
            level: 1,
            skillPoints: 0,
            crystals: 0,
            perks: {},
            artifacts: [],
            achievements: {},
            title: "",
            missionRecords: {},
            lastMission: {},
            welcomed: false,
            stats: {
                missions: 0,
                victories: 0,
                defeats: 0,
                abandons: 0,
                questionsCorrect: 0,
                questionsWrong: 0,
                bestStreak: 0,
                totalAsteroids: 0,
                totalOrbs: 0,
                bossKills: 0,
                perfectMissions: 0,
                threeStar: 0,
                noHintMissions: 0,
                noDamageMissions: 0,
                nightMissions: 0,
                harvestGoals: 0,
                blitzWins: 0,
                survivalWins: 0,
                defenseWins: 0,
                objectivesCompleted: 0,
                hintsUsed: 0,
                speedAnswersBest: 0,
                wavesSurvivedBest: 0,
                crystalsEarned: 0,
                xpEarned: 0,
                questsClaimed: 0,
                totalScore: 0,
                totalTime: 0,
                modesPlayed: {},
                modesWon: {},
                playedLevels: [],
                clearedLevels: []
            },
            daily: {
                date: "",
                items: [],
                counters: {}
            },
            // «Чёрный ящик»: очередь ошибок для разбора и «Техобслуживания».
            review: {
                queue: [],
                understood: 0,
                fixed: 0,
                sessions: 0
            },
            // Сюжетные выборы с последствиями.
            story: {
                choices: {},
                active: null,
                history: []
            },
            // Кооперативный «Щит класса».
            classShield: {
                name: "",
                code: "",
                energy: 0,
                total: 0,
                goal: 1200,
                cycles: 0,
                contributions: 0,
                topics: {},
                updatedAt: "",
                pooled: []
            }
        };
    },

    load() {
        const def = this.defaultState();
        let raw = null;
        try {
            raw = JSON.parse(localStorage.getItem(RPG_STORAGE_KEY) || "null");
        } catch (e) {
            console.warn("RPG load error", e);
        }
        if (!raw || typeof raw !== "object") return def;
        const state = Object.assign({}, def, raw);
        state.perks = Object.assign({}, raw.perks || {});
        state.stats = Object.assign({}, def.stats, raw.stats || {});
        state.stats.modesPlayed = Object.assign({}, (raw.stats && raw.stats.modesPlayed) || {});
        state.stats.modesWon = Object.assign({}, (raw.stats && raw.stats.modesWon) || {});
        state.stats.playedLevels = Array.isArray(raw.stats && raw.stats.playedLevels) ? raw.stats.playedLevels.slice() : [];
        state.stats.clearedLevels = Array.isArray(raw.stats && raw.stats.clearedLevels) ? raw.stats.clearedLevels.slice() : [];
        state.artifacts = Array.isArray(raw.artifacts) ? raw.artifacts.slice() : [];
        state.achievements = Object.assign({}, raw.achievements || {});
        state.missionRecords = Object.assign({}, raw.missionRecords || {});
        state.lastMission = Object.assign({}, raw.lastMission || {});
        state.daily = Object.assign({}, def.daily, raw.daily || {});
        state.daily.items = Array.isArray(raw.daily && raw.daily.items) ? raw.daily.items.slice() : [];
        state.daily.counters = Object.assign({}, (raw.daily && raw.daily.counters) || {});
        state.review = Object.assign({}, def.review, raw.review || {});
        state.review.queue = Array.isArray(raw.review && raw.review.queue) ? raw.review.queue.slice(0, 60) : [];
        state.story = Object.assign({}, def.story, raw.story || {});
        state.story.choices = Object.assign({}, (raw.story && raw.story.choices) || {});
        state.story.history = Array.isArray(raw.story && raw.story.history) ? raw.story.history.slice(-40) : [];
        if (!state.story.active || typeof state.story.active !== "object") state.story.active = null;
        state.classShield = Object.assign({}, def.classShield, raw.classShield || {});
        state.classShield.topics = Object.assign({}, (raw.classShield && raw.classShield.topics) || {});
        state.classShield.pooled = Array.isArray(raw.classShield && raw.classShield.pooled) ? raw.classShield.pooled.slice(-100) : [];
        state.level = Math.max(1, Math.min(RPG_MAX_LEVEL, Number(state.level) || 1));
        state.xp = Math.max(0, Number(state.xp) || 0);
        state.skillPoints = Math.max(0, Number(state.skillPoints) || 0);
        state.crystals = Math.max(0, Number(state.crystals) || 0);
        return state;
    },

    save() {
        try {
            localStorage.setItem(RPG_STORAGE_KEY, JSON.stringify(this.state));
            return true;
        } catch (e) {
            console.warn("RPG save error", e);
            return false;
        }
    },

    saveSoon() {
        if (this._saveTimer) return;
        this._saveTimer = setTimeout(() => {
            this._saveTimer = null;
            this.save();
        }, 350);
    },

    /* ---------------- СЛУЖЕБНОЕ ---------------- */
    todayKey() {
        const d = new Date();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${d.getFullYear()}-${m}-${day}`;
    },

    emptyCounters() {
        return { asteroids: 0, correct: 0, missions: 0, orbs: 0, boss: 0, bestStreak: 0, score: 0 };
    },

    ensureDaily() {
        if (!this.state) return;
        const today = this.todayKey();
        if (this.state.daily.date === today && this.state.daily.items.length) return;
        const dayNumber = Math.floor(Date.now() / 86400000);
        const items = [];
        for (let i = 0; i < 3; i++) {
            const q = QUEST_POOL[(dayNumber * 3 + i) % QUEST_POOL.length];
            if (q && !items.some(item => item.id === q.id)) items.push({ id: q.id, claimed: false });
        }
        this.state.daily = { date: today, items, counters: this.emptyCounters() };
        this.saveSoon();
    },

    questDef(id) {
        return QUEST_POOL.find(q => q.id === id) || null;
    },

    questProgress(item) {
        const def = this.questDef(item && item.id);
        if (!def) return 0;
        const counters = (this.state.daily && this.state.daily.counters) || {};
        return Math.max(0, Number(counters[def.counter]) || 0);
    },

    dailyTick(counter, amount, mode = "add") {
        this.ensureDaily();
        const counters = this.state.daily.counters;
        const value = Number(amount) || 0;
        if (mode === "max") counters[counter] = Math.max(Number(counters[counter]) || 0, value);
        else counters[counter] = (Number(counters[counter]) || 0) + value;
        this.saveSoon();
    },

    claimQuest(id) {
        this.ensureDaily();
        const item = this.state.daily.items.find(q => q.id === id);
        const def = this.questDef(id);
        if (!item || !def || item.claimed) return false;
        if (this.questProgress(item) < def.target) return false;
        item.claimed = true;
        this.state.stats.questsClaimed = (this.state.stats.questsClaimed || 0) + 1;
        this.addXP(def.xp, { silent: true });
        this.addCrystals(def.crystals, { silent: true });
        this.toast("📜", rpgT("questRewardToast"), `${rpgLoc(def.name)} · ${rpgT("questReward", def.xp, def.crystals)}`, "tier-gold");
        this.awardAchievements();
        this.saveSoon();
        this.renderHub();
        this.renderMenuCard();
        this.renderLevelBar();
        return true;
    },

    /* ---------------- ПРОКАЧКА ---------------- */
    /* Сюжетный модификатор активного выбора (null, если эффекта нет). */
    storyMods() {
        const active = this.state && this.state.story && this.state.story.active;
        if (!active || !active.mods || Number(active.missionsLeft) <= 0) return null;
        return active.mods;
    },

    storyBonus(field) {
        const mods = this.storyMods();
        return mods && Number(mods[field]) ? Number(mods[field]) : 0;
    },

    xpMultiplier() {
        return Math.max(0.5, 1
            + 0.10 * this.perkRank("xp_boost")
            + (this.hasArtifact("a_focus") ? 0.15 : 0)
            + this.storyBonus("xp"));
    },

    crystalsMultiplier() {
        return Math.max(0.5, 1
            + 0.12 * this.perkRank("crystal_boost")
            + (this.hasArtifact("a_archive") ? 0.20 : 0)
            + this.storyBonus("crystals"));
    },

    scoreBonusMultiplier() {
        return Math.max(0, 0.08 * this.perkRank("score_boost")
            + (this.hasArtifact("a_resonator") ? 0.10 : 0)
            + this.storyBonus("score"));
    },

    shieldCapacityMultiplier() {
        return Math.max(0.6, (1 + 0.08 * this.perkRank("shield_cap"))
            * (this.hasArtifact("a_core") ? 1.15 : 1)
            * (1 + this.storyBonus("shield")));
    },

    magnetRadius() {
        const missionBonus = (this.run && this.run.mission && this.run.mission.id === "harvest")
            ? (this.run.mission.magnet || 0)
            : 0;
        return 40 * this.perkRank("magnet")
            + (this.hasArtifact("a_prism") ? 60 : 0)
            + missionBonus;
    },

    extraHints() {
        return this.perkRank("hint_master")
            + (this.hasArtifact("a_chrono") ? 1 : 0)
            + Math.round(this.storyBonus("hints"));
    },

    revivesMax() {
        return this.perkRank("phoenix") + (this.hasArtifact("a_phoenix") ? 1 : 0);
    },

    perkRank(id) {
        return Math.max(0, Number(this.state && this.state.perks && this.state.perks[id]) || 0);
    },

    hasArtifact(id) {
        return !!(this.state && Array.isArray(this.state.artifacts) && this.state.artifacts.includes(id));
    },

    achievementPoints() {
        if (!this.state) return 0;
        return Object.keys(this.state.achievements || {}).reduce((sum, id) => {
            const a = ACHIEVEMENTS.find(item => item.id === id);
            const info = a ? TIER_INFO[a.tier] : null;
            return sum + (info ? info.points : 0);
        }, 0);
    },

    unlockedCount() {
        return Object.keys((this.state && this.state.achievements) || {}).length;
    },

    snapshot() {
        const st = this.state.stats || {};
        return Object.assign({}, st, {
            level: this.state.level,
            achievementsUnlocked: this.unlockedCount(),
            achievementPoints: this.achievementPoints(),
            perkRanks: Object.values(this.state.perks || {}).reduce((a, b) => a + (Number(b) || 0), 0),
            artifacts: (this.state.artifacts || []).length,
            modesPlayedCount: Object.keys(st.modesPlayed || {}).length,
            questsClaimed: Number(st.questsClaimed) || 0
        });
    },

    addXP(amount, opts = {}) {
        const gain = Math.max(0, Math.round(Number(amount) || 0));
        if (!gain || !this.state) return { gain: 0, levels: 0 };
        const st = this.state;
        st.xp += gain;
        st.stats.xpEarned = (st.stats.xpEarned || 0) + gain;
        if (this.run && this.run.active && !this.run.finalized) {
            this.run.xpEarned = (this.run.xpEarned || 0) + gain;
        }
        let levels = 0;
        while (st.level < RPG_MAX_LEVEL && st.xp >= rpgXpForLevel(st.level)) {
            st.xp -= rpgXpForLevel(st.level);
            st.level += 1;
            st.skillPoints = (st.skillPoints || 0) + 1;
            levels += 1;
            this._pendingLevelUps += 1;
        }
        if (levels > 0) {
            const rank = rpgRankForLevel(st.level);
            if (opts.toast !== false) {
                this.toast("⬆️", rpgT("newLevelToast"), `${rpgLoc(rank.name)} · ${rpgT("levelUpSkill")}`, "levelup");
            }
            if (!opts.live && !opts.silent && !opts.noOverlay) this.showLevelUpOverlay();
        }
        this.saveSoon();
        this.renderMenuCard();
        this.renderLevelBar();
        if (this._hubOpen) this.renderHub();
        return { gain, levels };
    },

    addCrystals(amount, opts = {}) {
        const gain = Math.max(0, Math.round(Number(amount) || 0));
        if (!gain || !this.state) return 0;
        this.state.crystals = (this.state.crystals || 0) + gain;
        this.state.stats.crystalsEarned = (this.state.stats.crystalsEarned || 0) + gain;
        if (this.run && this.run.active && !this.run.finalized) {
            this.run.crystalsEarned = (this.run.crystalsEarned || 0) + gain;
        }
        this.saveSoon();
        this.renderMenuCard();
        this.renderLevelBar();
        return gain;
    },

    unlockPerk(id) {
        const perk = PERKS_BY_ID[id];
        if (!perk) return false;
        if (this.state.skillPoints <= 0) {
            this.toast("🧠", rpgT("perkNoPoints"), rpgLoc(perk.name), "warning");
            return false;
        }
        const rank = this.perkRank(id);
        if (rank >= perk.max) return false;
        this.state.skillPoints -= 1;
        this.state.perks[id] = rank + 1;
        this.toast(perk.icon, rpgT("perkUnlocked"), `${rpgLoc(perk.name)} · ${rpgT("perkRank", rank + 1, perk.max)}`, "levelup");
        this.awardAchievements();
        this.saveSoon();
        this.renderHub();
        this.renderMenuCard();
        return true;
    },

    resetPerks() {
        const total = Object.values(this.state.perks || {}).reduce((a, b) => a + (Number(b) || 0), 0);
        if (!total) return false;
        if (this.state.crystals < RPG_RESET_PERK_COST) {
            this.toast("💎", rpgT("notEnoughCrystals"), "", "warning");
            return false;
        }
        if (!confirm(rpgT("resetSkillsConfirm", RPG_RESET_PERK_COST))) return false;
        this.state.crystals -= RPG_RESET_PERK_COST;
        this.state.skillPoints = (this.state.skillPoints || 0) + total;
        this.state.perks = {};
        this.toast("♻️", rpgT("resetDone"), "", "warning");
        this.saveSoon();
        this.renderHub();
        this.renderMenuCard();
        return true;
    },

    buyArtifact(id) {
        const art = ARTIFACTS_BY_ID[id];
        if (!art || this.hasArtifact(id)) return false;
        if (this.state.crystals < art.cost) {
            this.toast("💎", rpgT("notEnoughCrystals"), `${rpgLoc(art.name)} · ${art.cost} 💎`, "warning");
            return false;
        }
        this.state.crystals -= art.cost;
        this.state.artifacts.push(id);
        this.toast(art.icon, rpgT("artifactBought"), `${rpgLoc(art.name)} · ${rpgLoc(art.desc)}`, "tier-platinum");
        this.awardAchievements();
        this.saveSoon();
        this.renderHub();
        this.renderMenuCard();
        return true;
    },

    unlockedTitles() {
        const points = this.achievementPoints();
        return TITLES.filter(t => points >= t.min);
    },

    currentTitle() {
        const unlocked = this.unlockedTitles();
        if (this.state.title) {
            const chosen = unlocked.find(t => t.id === this.state.title);
            if (chosen) return chosen;
        }
        return unlocked.length ? unlocked[unlocked.length - 1] : TITLES[0];
    },

    equipTitle(id) {
        const title = TITLES.find(t => t.id === id);
        if (!title) return false;
        if (this.achievementPoints() < title.min) return false;
        this.state.title = id;
        this.saveSoon();
        this.renderHub();
        this.renderMenuCard();
        this.renderLevelBar();
        return true;
    },

    rankIndex(level) {
        let idx = 0;
        RANKS.forEach((r, i) => { if (level >= r.min) idx = i; });
        return idx;
    },

    /* ---------------- ДОСТИЖЕНИЯ ---------------- */
    awardAchievements() {
        if (!this.state || this._achBusy) return [];
        this._achBusy = true;
        const unlockedNow = [];
        try {
            let snap = this.snapshot();
            for (let pass = 0; pass < 5; pass++) {
                let found = false;
                for (const a of ACHIEVEMENTS) {
                    if (this.state.achievements[a.id]) continue;
                    const val = Number(snap[a.stat]) || 0;
                    if (val < a.target) continue;
                    this.state.achievements[a.id] = new Date().toISOString();
                    const info = TIER_INFO[a.tier] || TIER_INFO.bronze;
                    this.addXP(info.xp, { silent: true, toast: false });
                    this.addCrystals(info.crystals, { silent: true });
                    unlockedNow.push(a);
                    if (this.run && this.run.active) this.run.unlocked.push(a.id);
                    const titleNow = this.currentTitle();
                    this.toast(
                        a.icon,
                        rpgT("achievementUnlockedToast"),
                        `${rpgLoc(a.name)} · +${info.xp} XP · +${info.crystals} 💎`,
                        "tier-" + a.tier
                    );
                    found = true;
                    snap = this.snapshot();
                }
                if (!found) break;
            }
        } finally {
            this._achBusy = false;
        }
        if (unlockedNow.length) {
            this.saveSoon();
            this.renderMenuCard();
            this.renderLevelBar();
            if (this._hubOpen) this.renderHub();
        }
        return unlockedNow;
    },

    /* ---------------- МИССИИ: ЖИЗНЕННЫЙ ЦИКЛ ---------------- */
    recommendedMission(levelId) {
        return rpgRecommendedMission(levelId);
    },

    missionRecord(levelId, missionId) {
        return this.state.missionRecords[String(levelId) + "|" + missionId] || null;
    },

    beginRun(levelId, missionId) {
        this.ensureDaily();
        if (this.run && this.run.blitzInterval) {
            clearInterval(this.run.blitzInterval);
        }
        const mission = MISSIONS_BY_ID[missionId] || MISSIONS_BY_ID.defense;
        this.run = {
            active: true,
            finalized: false,
            mission,
            levelId,
            startedAt: Date.now(),
            startCityHealth: null,
            streak: 0,
            bestStreak: 0,
            asteroids: 0,
            orbs: 0,
            orbsGoal: mission.goal || 12,
            speedAnswers: 0,
            speedGoal: mission.goal || 8,
            waves: 0,
            resolved: 0,
            boss: null,
            bossKilled: false,
            bossDeadAt: 0,
            hintsUsed: 0,
            xpEarned: 0,
            crystalsEarned: 0,
            objDone: false,
            unlocked: [],
            revivesMax: this.revivesMax(),
            revivesLeft: this.revivesMax(),
            reviveGraceUntil: 0,
            blitzInterval: null,
            taskShownAt: Date.now(),
            misses: [],
            storySnapshot: this.storyMods ? Object.assign({}, this.storyMods()) : null,
            classEnergy: 0
        };
        this.state.lastMission[String(levelId)] = mission.id;
        this.saveSoon();
    },

    applyMission(game) {
        const run = this.run;
        if (!run || !game || !game.levelConfig) return;
        const mission = run.mission;
        const cfg = Object.assign({}, game.levelConfig);

        cfg.shieldCapacity = Math.max(20, Math.round((Number(cfg.shieldCapacity) || 50) * this.shieldCapacityMultiplier()));
        if (mission.id === "blitz") cfg.cityHealth = Math.max(40, Math.round((Number(cfg.cityHealth) || 100) * 0.8));
        if (mission.id === "survival") cfg.cityHealth = Math.max(40, Math.round((Number(cfg.cityHealth) || 100) * 0.9));

        game.levelConfig = cfg;
        game.cityMaxHealth = cfg.cityHealth;
        game.cityHealth = cfg.cityHealth;
        game.shield = Math.min(cfg.shieldCapacity, 20 + 10 * this.perkRank("start_charge")
            + (this.hasArtifact("a_compass") ? 5 : 0)
            + Math.round(this.storyBonus("startShield")));
        run.startCityHealth = game.cityHealth;
        if (game.player) {
            game.player.shieldActive = true;
            game.player.shieldTarget = 55;
        }

        // Перезапуск таймеров под правила миссии
        clearInterval(game.asteroidTimer);
        clearInterval(game.energyTimer);
        const levelNum = typeof game.currentLevel === "number" ? game.currentLevel : 25;
        const baseSpawn = Math.max(4200, Math.min(5600, 5600 - levelNum * 28));
        const spawnMs = Math.max(1800, Math.round(baseSpawn * (mission.asteroidIntervalMul || 1) * (1 - Math.max(-0.3, Math.min(0.4, this.storyBonus("spawn"))))));
        // Пауза (ручная или интро босса) останавливает и спавн: иначе за оверлеем
        // копятся астероиды и после снятия паузы падают разом.
        game.asteroidTimer = setInterval(() => {
            if (!game.paused) game.spawnAsteroid();
        }, spawnMs);

        const baseEnergy = Number(cfg.energySpawnRate) || 3500;
        const energyMs = Math.max(850, Math.round(baseEnergy * (mission.orbRateMul || 1)));
        const orbLimit = mission.id === "harvest" ? 11 : 7;
        game.energyTimer = setInterval(() => {
            if (game.paused) return;
            if (game.energyOrbs.length < orbLimit) game.spawnEnergyOrb();
        }, energyMs);

        if (mission.id === "harvest") {
            for (let i = 0; i < 4; i++) game.spawnEnergyOrb();
        }

        if (mission.id === "boss") {
            const tasks = Math.max(1, Number(cfg.tasksTotal) || 20);
            const hp = Math.max(100, tasks * 20);
            run.boss = { hp, max: hp, dead: false };
        }

        if (mission.id === "blitz") {
            const interval = mission.questionInterval || 9000;
            run.blitzInterval = setInterval(() => {
                if (!game.running || game.paused || game.storyOpen || game.isTaskActive) return;
                if (!run.active || run.finalized) return;
                game.taskTriggeredThisLevel = (game.taskTriggeredThisLevel || 0) + 1;
                game.triggerTask();
            }, interval);
        }

        const screen = document.getElementById("game-screen");
        if (screen) {
            ["defense", "harvest", "boss", "blitz", "survival"].forEach(id => screen.classList.remove("rpg-m-" + id));
            screen.classList.add("rpg-m-" + mission.id);
        }
        if (this.dom.layer) this.dom.layer.classList.add("active");
        this.buildMissionPanel(game);
        this.updateGameHud();
        this.updateTaskChip();
        this.renderLevelBar();

        setTimeout(() => {
            if (this.run === run && run.active && game.running && !game.storyOpen) this.showMissionBanner(mission);
        }, 1300);

        this.saveSoon();
    },

    cleanupMission(game) {
        const run = this.run;
        if (run && run.blitzInterval) {
            clearInterval(run.blitzInterval);
            run.blitzInterval = null;
        }
        const screen = document.getElementById("game-screen");
        if (screen) {
            ["defense", "harvest", "boss", "blitz", "survival"].forEach(id => screen.classList.remove("rpg-m-" + id));
        }
        if (this.dom.layer) this.dom.layer.classList.remove("active");
        if (this.dom.banner) this.dom.banner.classList.remove("show");
        if (this.dom.combo) this.dom.combo.classList.remove("show");
        if (run) run.active = false;
        this.run = null;
        this._pendingLevelUps = 0;
        this.updateTaskChip();
    },

    abandonRun() {
        if (!this.state) return;
        if (this.run && this.run.active && !this.run.finalized) {
            this.state.stats.abandons = (this.state.stats.abandons || 0) + 1;
            this.saveSoon();
        }
        this.cleanupMission(Game);
    },

    /* ---------------- СОБЫТИЯ В ИГРЕ ---------------- */
    onCorrect(game, task) {
        const run = this.run;
        if (!run || !run.active) return;
        run.streak += 1;
        run.bestStreak = Math.max(run.bestStreak, run.streak);
        this.state.stats.bestStreak = Math.max(Number(this.state.stats.bestStreak) || 0, run.streak);
        this.dailyTick("bestStreak", run.streak, "max");
        this.state.stats.questionsCorrect = (this.state.stats.questionsCorrect || 0) + 1;
        this.dailyTick("correct", 1);

        const difficulty = Number(task && task.difficulty) || 1;
        const base = 50 + difficulty * 30;
        const streakMul = 1 + Math.min(Math.max(run.streak - 1, 0), 5) * 0.1;
        const scoreMul = (run.mission.scoreMul || 1) + this.scoreBonusMultiplier();
        const extra = Math.round(base * (streakMul - 1) + base * (scoreMul - 1));
        if (extra > 0) game.score += extra;

        if (run.mission.id === "blitz" && (Date.now() - (run.taskShownAt || Date.now())) <= 15000) {
            run.speedAnswers += 1;
            this.state.stats.speedAnswersBest = Math.max(Number(this.state.stats.speedAnswersBest) || 0, run.speedAnswers);
            if (run.speedAnswers >= run.speedGoal && !run.objDone) this.completeObjective(game, "speed");
        }

        if (run.mission.id === "boss" && run.boss && !run.boss.dead) {
            run.boss.hp = Math.max(0, run.boss.hp - 25);
            if (run.boss.hp <= 0) this.killBoss(game);
        }

        this.addXP(Math.round(4 * this.xpMultiplier()), { live: true, toast: false });
        this.showCombo(run.streak, extra);
        this.awardAchievements();
        this.updateGameHud();
        this.saveSoon();
    },

    onWrong(game) {
        const run = this.run;
        if (!run || !run.active) return;
        run.streak = 0;
        this.state.stats.questionsWrong = (this.state.stats.questionsWrong || 0) + 1;
        if (run.mission.id === "boss" && run.boss && !run.boss.dead) {
            run.boss.hp = Math.min(run.boss.max, run.boss.hp + 10);
        }
        this.updateGameHud();
        this.saveSoon();
    },

    killBoss(game) {
        const run = this.run;
        if (!run || !run.boss || run.boss.dead) return;
        run.boss.dead = true;
        run.boss.hp = 0;
        run.bossKilled = true;
        run.bossDeadAt = Date.now();
        game.score += 200;
        game.shield = Math.min(game.levelConfig.shieldCapacity, game.shield + 40);
        this.state.stats.bossKills = (this.state.stats.bossKills || 0) + 1;
        this.dailyTick("boss", 1);
        const bx = game.width / 2;
        const by = Math.min(game.width < 768 ? 252 : 120, game.height * (game.width < 768 ? 0.34 : 0.2));
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                try { game.createExplosion(bx + (Math.random() - 0.5) * 70, by + (Math.random() - 0.5) * 50, "#ff5a6a"); } catch (e) {}
            }, i * 160);
        }
        this.completeObjective(game, "boss", true);
        this.toast("👁", rpgT("bossKilled"), rpgT("bossKilledText"), "tier-gold");
        this.showBanner({
            icon: "👁",
            kicker: rpgT("objectiveDone"),
            name: rpgT("bossKilled"),
            sub: rpgT("bossKilledText")
        });
        this.awardAchievements();
        this.updateGameHud();
        this.saveSoon();
    },

    completeObjective(game, source, silent = false) {
        const run = this.run;
        if (!run || !run.active || run.objDone) return;
        run.objDone = true;
        if (source !== "boss") game.score += 120;
        if (!silent) {
            this.toast("🎯", rpgT("objectiveDone"), rpgT("objectiveReward", 120), "tier-gold");
            this.showBanner({
                icon: "🎯",
                kicker: rpgT("objectiveDone"),
                name: rpgLoc(run.mission.objective),
                sub: rpgT("objectiveReward", 120)
            });
        }
        this.awardAchievements();
        this.updateGameHud();
        this.saveSoon();
    },

    triggerWave(game, wave) {
        const run = this.run;
        if (!run) return;
        run.waves = wave;
        this.state.stats.wavesSurvivedBest = Math.max(Number(this.state.stats.wavesSurvivedBest) || 0, wave);
        const count = 2 + wave;
        for (let i = 0; i < count; i++) {
            game.spawnAsteroid();
            const a = game.asteroids[game.asteroids.length - 1];
            if (a) a.y = -60 - i * 55;
        }
        this.showBanner({
            icon: "☄️",
            kicker: rpgT("missionLabelShort"),
            name: rpgT("waveToast", wave + "/3"),
            sub: rpgT("hudExtraSurvival", wave)
        });
        this.toast("☄️", rpgT("waveToast", wave), rpgT("hudExtraSurvival", wave), "warning");
        if (wave >= 3 && !run.objDone) this.completeObjective(game, "waves");
        this.updateGameHud();
        this.saveSoon();
    },

    /* ---------------- ФИНАЛ МИССИИ ---------------- */
    finalizeRun(victory, game) {
        const run = this.run;
        if (!run || !run.active) return null;
        run.finalized = true;
        const mission = run.mission;
        const solved = Math.max(0, Number(game.tasksSolved) || 0);
        const attempted = Math.max(0, Number(game.tasksAttempted) || 0);
        const accuracy = attempted > 0 ? Math.round((solved / attempted) * 100) : 0;
        const stars = victory ? (accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1) : 0;
        const time = Math.max(0, Number(game.timeElapsed) || (Date.now() - run.startedAt));
        const levelBefore = this.state.level;
        const rankBefore = this.rankIndex(levelBefore);

        let objectiveDone;
        if (mission.id === "defense") {
            objectiveDone = victory && (game.cityHealth / Math.max(1, game.cityMaxHealth)) >= 0.8;
        } else {
            objectiveDone = !!run.objDone;
        }

        let xpGain = 0;
        if (victory) {
            const baseXp = 50 + solved * 6 + Math.round(accuracy * 0.6) + stars * 30;
            xpGain = Math.round(baseXp * mission.xpMul * this.xpMultiplier())
                + (objectiveDone ? 45 : 0)
                + (run.bossKilled ? 50 : 0);
        } else {
            const baseXp = 15 + solved * 3;
            xpGain = Math.round(baseXp * mission.xpMul * 0.6 * this.xpMultiplier())
                + (objectiveDone ? 20 : 0);
        }

        let crystals = 0;
        if (victory) {
            crystals = Math.round((6 + stars * 4 + mission.crystalBonus) * this.crystalsMultiplier())
                + (objectiveDone ? 15 : 0)
                + (run.bossKilled ? 25 : 0);
        } else {
            crystals = Math.max(3, Math.round((3 + solved * 0.5) * this.crystalsMultiplier()));
        }

        // Статистика
        const st = this.state.stats;
        st.missions = (st.missions || 0) + 1;
        if (victory) st.victories = (st.victories || 0) + 1;
        else st.defeats = (st.defeats || 0) + 1;
        st.modesPlayed[mission.id] = (st.modesPlayed[mission.id] || 0) + 1;
        if (victory) st.modesWon[mission.id] = (st.modesWon[mission.id] || 0) + 1;
        st.totalScore = (st.totalScore || 0) + Math.max(0, Math.round(game.score));
        st.totalTime = (st.totalTime || 0) + time;
        st.speedAnswersBest = Math.max(Number(st.speedAnswersBest) || 0, run.speedAnswers);
        if (!st.playedLevels.includes(String(run.levelId))) st.playedLevels.push(String(run.levelId));
        if (victory && attempted > 0 && accuracy >= 100) st.perfectMissions = (st.perfectMissions || 0) + 1;
        if (victory) {
            if (!st.clearedLevels.includes(String(run.levelId))) st.clearedLevels.push(String(run.levelId));
            if (stars >= 3) st.threeStar = (st.threeStar || 0) + 1;
            if (run.hintsUsed === 0) st.noHintMissions = (st.noHintMissions || 0) + 1;
            if (game.cityHealth >= game.cityMaxHealth) st.noDamageMissions = (st.noDamageMissions || 0) + 1;
        }
        const hour = new Date().getHours();
        if (hour >= 22 || hour < 5) st.nightMissions = (st.nightMissions || 0) + 1;
        if (objectiveDone) {
            st.objectivesCompleted = (st.objectivesCompleted || 0) + 1;
            if (mission.id === "harvest") st.harvestGoals = (st.harvestGoals || 0) + 1;
            if (mission.id === "defense") st.defenseWins = (st.defenseWins || 0) + 1;
        }
        if (victory && mission.id === "blitz") st.blitzWins = (st.blitzWins || 0) + 1;
        if (victory && mission.id === "survival") st.survivalWins = (st.survivalWins || 0) + 1;

        // Дневные задания
        this.dailyTick("missions", 1);
        this.dailyTick("score", Math.max(0, Math.round(game.score)));
        this.dailyTick("bestStreak", run.bestStreak, "max");

        // Рекорд миссии
        const recordKey = String(run.levelId) + "|" + mission.id;
        const rec = Object.assign({ plays: 0, wins: 0, bestStars: 0, bestScore: 0, bestTime: null }, this.state.missionRecords[recordKey] || {});
        rec.plays += 1;
        if (victory) {
            rec.wins += 1;
            rec.bestStars = Math.max(Number(rec.bestStars) || 0, stars);
            rec.bestScore = Math.max(Number(rec.bestScore) || 0, Math.round(game.score));
            if (rec.bestTime === null || rec.bestTime === undefined || time < rec.bestTime) rec.bestTime = time;
        }
        this.state.missionRecords[recordKey] = rec;

        // Награды
        const xpRes = this.addXP(xpGain, { silent: true, toast: false });
        this.addCrystals(crystals, { silent: true });
        const achXpBefore = Number(st.xpEarned) || 0;
        const achCrBefore = Number(st.crystalsEarned) || 0;
        const newAch = this.awardAchievements();
        const achXp = Math.max(0, (Number(st.xpEarned) || 0) - achXpBefore);
        const achCr = Math.max(0, (Number(st.crystalsEarned) || 0) - achCrBefore);

        const totalXp = (run.xpEarned || 0) + xpGain + achXp;
        const totalCrystals = (run.crystalsEarned || 0) + crystals + achCr;
        const levelsGained = Math.max(0, this.state.level - levelBefore);
        const rankAfter = rpgRankForLevel(this.state.level);
        const rankUp = this.rankIndex(this.state.level) > rankBefore ? rankAfter : null;

        let rating = "D";
        if (victory) {
            if (objectiveDone && accuracy >= 90) rating = "S";
            else if (objectiveDone || accuracy >= 90) rating = "A";
            else if (accuracy >= 70) rating = "B";
            else rating = "C";
        }

        const unlockedIds = Array.from(new Set((run.unlocked || []).concat(newAch.map(a => a.id))));
        const newAchievements = unlockedIds
            .map(id => ACHIEVEMENTS.find(a => a.id === id))
            .filter(Boolean);

        // «Чёрный ящик»: ошибки этой миссии уходят в очередь повторения.
        let reviewAdded = 0;
        try { reviewAdded = this.enqueueReview(run, victory); } catch (e) { console.warn("RPG review enqueue", e); }
        // «Щит класса»: личный вклад миссии в общий щит.
        let classGain = 0;
        try { classGain = this.addClassEnergy(run, { victory, stars, objectiveDone, accuracy }); } catch (e) { console.warn("RPG class energy", e); }
        // Сюжетный модификатор действует ограниченное число миссий.
        try { this.tickStoryEffect(); } catch (e) {}

        const summary = {
            levelId: run.levelId,
            mission,
            victory,
            stars,
            accuracy,
            solved,
            attempted,
            tasksTotal: game.levelTasksTotal || (game.levelConfig && game.levelConfig.tasksTotal) || 0,
            score: Math.max(0, Math.round(game.score)),
            time,
            objectiveDone,
            bossKilled: !!run.bossKilled,
            rating,
            xpGain: totalXp,
            crystalsGain: totalCrystals,
            levelsGained,
            levelBefore,
            levelAfter: this.state.level,
            levelUps: xpRes.levels,
            rankUp,
            newAchievements,
            record: rec,
            cityHealthPct: Math.round((game.cityHealth / Math.max(1, game.cityMaxHealth)) * 100),
            bestStreak: run.bestStreak,
            hintsUsed: run.hintsUsed,
            orbs: run.orbs,
            asteroids: run.asteroids,
            misses: (run.misses || []).slice(0, 6),
            reviewAdded,
            classGain,
            storyActive: this.state.story && this.state.story.active ? Object.assign({}, this.state.story.active) : null
        };
        this._lastRunSummary = summary;
        this.save();
        this.renderMenuCard();
        this.renderLevelBar();
        return summary;
    },

    /* ---------------- ХУКИ ИГРЫ ---------------- */
    patchGame() {
        const R = this;
        this.orig.startLevel = Game.startLevel;
        this.orig.checkAnswer = Game.checkAnswer;
        this.orig.showTask = Game.showTask;
        this.orig.useHint = Game.useHint;
        this.orig.deflectAsteroid = Game.deflectAsteroid;
        this.orig.registerAsteroidResolved = Game.registerAsteroidResolved;
        this.orig.spawnAsteroid = Game.spawnAsteroid;
        this.orig.updateEnergyOrbs = Game.updateEnergyOrbs;
        this.orig.update = Game.update;
        this.orig.updateHUD = Game.updateHUD;
        this.orig.render = Game.render;
        this.orig.endLevel = Game.endLevel;
        this.orig.exitLevel = Game.exitLevel;

        // Любой внешний запуск уровня теперь ведёт на брифинг миссии.
        Game.startLevel = function (levelId, assignmentCode) {
            try {
                R.openBriefing(levelId, assignmentCode || "");
            } catch (e) {
                console.error("RPG briefing error", e);
                return R.orig.startLevel.call(Game, levelId, assignmentCode || "");
            }
        };

        Game.__startLevelWithMission = function (levelId, assignmentCode, missionId) {
            R.beginRun(levelId, missionId);
            let result;
            try {
                result = R.orig.startLevel.call(Game, levelId, assignmentCode || "");
            } catch (e) {
                console.error("RPG startLevel error", e);
            }
            try {
                R.applyMission(Game);
            } catch (e) {
                console.error("RPG applyMission error", e);
            }
            return result;
        };

        Game.checkAnswer = function () {
            if (!R.run || !R.run.active) return R.orig.checkAnswer.apply(this, arguments);
            const solvedBefore = this.tasksSolved;
            const attemptsBefore = this.tasksAttempted;
            const task = this.currentTask;
            const result = R.orig.checkAnswer.apply(this, arguments);
            const solvedDelta = this.tasksSolved - solvedBefore;
            const attemptDelta = this.tasksAttempted - attemptsBefore;
            if (attemptDelta > 0) {
                if (solvedDelta > 0) R.onCorrect(this, task);
                else R.onWrong(this);
            }
            return result;
        };

        Game.showTask = function (task) {
            const result = R.orig.showTask.apply(this, arguments);
            try {
                if (R.run && R.run.active) {
                    R.run.taskShownAt = Date.now();
                    this.taskHintsLeft = 3 + R.extraHints();
                    this.updateTaskStats();
                    R.updateTaskChip();
                }
            } catch (e) {
                console.warn("RPG showTask hook", e);
            }
            return result;
        };

        Game.useHint = function () {
            const before = this.taskHintsLeft;
            const result = R.orig.useHint.apply(this, arguments);
            try {
                if (R.run && R.run.active && this.taskHintsLeft < before) {
                    R.run.hintsUsed += 1;
                    R.state.stats.hintsUsed = (R.state.stats.hintsUsed || 0) + 1;
                    R.saveSoon();
                }
            } catch (e) {}
            return result;
        };

        Game.deflectAsteroid = function (a, i) {
            const result = R.orig.deflectAsteroid.apply(this, arguments);
            try {
                if (R.run && R.run.active && this.running) {
                    R.run.asteroids += 1;
                    R.state.stats.totalAsteroids = (R.state.stats.totalAsteroids || 0) + 1;
                    R.dailyTick("asteroids", 1);
                    const extra = Math.round(20 * (R.scoreBonusMultiplier() + Math.min(R.run.streak, 5) * 0.04));
                    if (extra > 0) this.score += extra;
                    R.addXP(1, { live: true, toast: false });
                    R.updateGameHud();
                    R.awardAchievements();
                    R.saveSoon();
                }
            } catch (e) {}
            return result;
        };

        Game.registerAsteroidResolved = function () {
            const result = R.orig.registerAsteroidResolved.apply(this, arguments);
            try {
                const run = R.run;
                if (run && run.active) {
                    run.resolved += 1;
                    if (run.mission.id === "survival") {
                        const wave = Math.min(3, Math.floor(run.resolved / 6));
                        if (wave > run.waves) R.triggerWave(this, wave);
                    }
                    R.updateGameHud();
                }
            } catch (e) {}
            return result;
        };

        Game.spawnAsteroid = function () {
            const run = R.run;
            if (run && run.active && run.bossDeadAt && Date.now() - run.bossDeadAt < 15000) return;
            const before = this.asteroids.length;
            const result = R.orig.spawnAsteroid.apply(this, arguments);
            try {
                if (run && run.active && this.asteroids.length > before) {
                    const a = this.asteroids[this.asteroids.length - 1];
                    const id = run.mission.id;
                    if (id === "harvest") {
                        a.vy *= 0.8;
                        a.radius *= 0.9;
                        a.color = `hsl(${140 + Math.random() * 32}, 62%, 56%)`;
                    } else if (id === "blitz") {
                        a.vy *= 1.18;
                        a.color = `hsl(${18 + Math.random() * 22}, 92%, 58%)`;
                    } else if (id === "survival") {
                        a.vy *= 1 + 0.07 * (run.waves || 0);
                        a.color = `hsl(${248 + Math.random() * 28}, 78%, 63%)`;
                    } else if (id === "boss") {
                        a.vy *= 1.05;
                        a.color = `hsl(${338 + Math.random() * 20}, 78%, 58%)`;
                    } else {
                        a.color = `hsl(${20 + Math.random() * 20}, 70%, 50%)`;
                    }
                }
            } catch (e) {}
            return result;
        };

        Game.updateEnergyOrbs = function (dt) {
            const run = R.run;
            if (run && run.active) {
                const magnet = R.magnetRadius();
                if (magnet > 0 && this.player) {
                    for (const orb of this.energyOrbs) {
                        const dx = this.player.x - orb.x;
                        const dy = this.player.y - orb.y;
                        const dist = Math.hypot(dx, dy);
                        if (dist > 1 && dist < magnet + 80) {
                            const pull = 120 * dt;
                            orb.x += (dx / dist) * pull;
                            orb.y += (dy / dist) * pull;
                        }
                    }
                }
            }
            const before = this.energyOrbs.length;
            const result = R.orig.updateEnergyOrbs.apply(this, arguments);
            try {
                const diff = before - this.energyOrbs.length;
                if (diff > 0 && run && run.active) {
                    run.orbs += diff;
                    R.state.stats.totalOrbs = (R.state.stats.totalOrbs || 0) + diff;
                    R.dailyTick("orbs", diff);
                    if (R.hasArtifact("a_compass")) {
                        this.shield = Math.min(this.levelConfig.shieldCapacity, this.shield + 5 * diff);
                    }
                    R.addXP(diff, { live: true, toast: false });
                    if (run.mission.id === "harvest" && run.orbs >= run.orbsGoal && !run.objDone) {
                        R.completeObjective(this, "orbs");
                    }
                    R.updateGameHud();
                    R.awardAchievements();
                    R.saveSoon();
                }
            } catch (e) {}
            return result;
        };

        Game.update = function (dt) {
            const result = R.orig.update.apply(this, arguments);
            try {
                const run = R.run;
                if (run && run.active && this.running && !this.paused && !this.isTaskActive) {
                    const regen = 0.6 * R.perkRank("shield_regen");
                    if (regen > 0 && this.shield > 0) {
                        this.shield = Math.min(this.levelConfig.shieldCapacity, this.shield + regen * dt);
                    }
                }
            } catch (e) {}
            return result;
        };

        Game.updateHUD = function () {
            const result = R.orig.updateHUD.apply(this, arguments);
            try { R.updateGameHud(); } catch (e) {}
            return result;
        };

        Game.render = function () {
            const result = R.orig.render.apply(this, arguments);
            try { R.drawMissionFx(this); } catch (e) {}
            return result;
        };

        Game.endLevel = function (victory) {
            const run = R.run;
            // Феникс-модуль: не даём городу пасть, если есть возрождение
            if (!victory && run && run.active && !run.finalized && this.cityHealth <= 0 && run.revivesLeft > 0) {
                run.revivesLeft -= 1;
                run.reviveGraceUntil = Date.now() + 4000;
                const healRatio = 0.35 + 0.1 * R.perkRank("phoenix");
                this.cityHealth = Math.max(1, Math.round(this.cityMaxHealth * healRatio));
                this.running = true;
                this.paused = false;
                this.updateHUD();
                R.toast("🔥", rpgT("reviveTitle"), rpgT("reviveText"), "revive");
                R.showBanner({ icon: "🔥", kicker: rpgT("reviveTitle"), name: rpgT("reviveText"), sub: "" });
                R.updateGameHud();
                R.saveSoon();
                return;
            }

            let summary = null;
            if (run && run.active && !run.finalized) {
                try { summary = R.finalizeRun(victory, this); } catch (e) { console.error("RPG finalize error", e); }
            }
            let result;
            try {
                result = R.orig.endLevel.apply(this, arguments);
            } finally {
                try {
                    if (summary) R.renderRunSummary(victory, summary);
                } catch (e) { console.error("RPG result render error", e); }
                try { R.cleanupMission(this); } catch (e) {}
            }
            return result;
        };

        Game.exitLevel = function () {
            try { R.abandonRun(); } catch (e) {}
            return R.orig.exitLevel.apply(this, arguments);
        };
    },

    patchGlobals() {
        const R = this;

        const origShowScreen = window.showScreen;
        window.showScreen = function (id) {
            const result = origShowScreen.apply(this, arguments);
            try { R.onScreenShown(id); } catch (e) { console.warn("RPG showScreen hook", e); }
            return result;
        };

        const origShowLevels = window.showLevelSelect;
        window.showLevelSelect = function () {
            const result = origShowLevels.apply(this, arguments);
            try { R.afterLevelSelect(); } catch (e) { console.warn("RPG levels hook", e); }
            return result;
        };

        const origShowProfile = window.showProfile;
        window.showProfile = function () {
            const result = origShowProfile.apply(this, arguments);
            try { R.renderProfileCard(); } catch (e) { console.warn("RPG profile hook", e); }
            return result;
        };

        const origCloseStory = window.closeStoryModal;
        window.closeStoryModal = function () {
            const result = origCloseStory.apply(this, arguments);
            try {
                if (R.run && R.run.active && Game.running && !Game.storyOpen) {
                    R.showMissionBanner(R.run.mission);
                }
            } catch (e) {}
            return result;
        };

        const origHowTo = window.showHowToPlay;
        if (typeof origHowTo === "function") {
            window.showHowToPlay = function () {
                const result = origHowTo.apply(this, arguments);
                try {
                    const box = document.getElementById("howto-content");
                    if (box && !box.querySelector(".rpg-howto")) {
                        const block = document.createElement("div");
                        block.className = "rpg-howto";
                        block.innerHTML = `
                            <h3>${escapeHtml(rpgT("howtoRpgTitle"))}</h3>
                            <p>${escapeHtml(rpgT("howtoRpgIntro"))}</p>
                            <ul>
                                <li>${escapeHtml(rpgT("howtoRpgItem1"))}</li>
                                <li>${escapeHtml(rpgT("howtoRpgItem2"))}</li>
                                <li>${escapeHtml(rpgT("howtoRpgItem3"))}</li>
                                <li>${escapeHtml(rpgT("howtoRpgItem4"))}</li>
                                <li>${escapeHtml(rpgT("howtoRpgItem5"))}</li>
                            </ul>
                            <h3>${escapeHtml(rpgT("howtoRpgProgress"))}</h3>
                            <p>${escapeHtml(rpgT("howtoRpgProgressText"))}</p>
                            <h3>${escapeHtml(rpgT("howtoRpgAch"))}</h3>
                            <p>${escapeHtml(rpgT("howtoRpgAchText", ACHIEVEMENTS.length))}</p>
                            <p class="rpg-howto-tip">💡 ${escapeHtml(rpgT("howtoRpgHint"))}</p>
                        `;
                        box.appendChild(block);
                    }
                } catch (e) { console.warn("RPG howto hook", e); }
                return result;
            };
        }

        const origSetLanguage = I18n.setLanguage;
        I18n.setLanguage = function (lang) {
            const result = origSetLanguage.apply(this, arguments);
            try { R.refreshAll(); } catch (e) { console.warn("RPG language refresh", e); }
            return result;
        };
    },

    /* ---------------- СТАРТ ---------------- */
    boot() {
        this.state = this.load();
        this.ensureDaily();
        this.initDOM();
        this.bindUI();
        this.patchGame();
        this.patchGlobals();
        this.renderMenuCard();
        this.renderLevelBar();
        this.awardAchievements();
        this.save();
        window.RPG = this;
        if (typeof rpgMaybeWelcome === "function") rpgMaybeWelcome();
        console.log("[RPG] Pilot systems online");
    }
};
