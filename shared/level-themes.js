/* ============================================================
   PQ LEVEL THEMES — визуальные миры уровней (7–9 классы)
   Каждый уровень получает собственный фон: небо, силуэты,
   атмосферные эффекты и акцентный цвет интерфейса.
   ============================================================ */
(function () {
    "use strict";

    const T = {
        ru: { theme: "Мир", of: "уровень", unlocked: "Новый мир уровня" },
        en: { theme: "World", of: "level", unlocked: "New level world" },
        kk: { theme: "Әлем", of: "деңгей", unlocked: "Жаңа деңгей әлемі" }
    };
    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || "ru"; } catch (_) { return "ru"; }
    }
    function tr(ru, kk, en) {
        const l = lang();
        return l === "kk" ? kk : l === "en" ? en : ru;
    }

    const THEMES = {
        asteria: {
            id: "asteria", scene: "city",
            name: { ru: "Астерия", kk: "Астерия", en: "Asteria" },
            sky: ["#04060f", "#0a1735", "#123056"],
            accent: "#00d9ff", glow: "rgba(0,217,255,0.55)", stars: 150
        },
        aurora: {
            id: "aurora", scene: "aurora",
            name: { ru: "Северное сияние", kk: "Солтүстік шұғыла", en: "Aurora Veil" },
            sky: ["#020c18", "#06283a", "#0d4a4a"],
            accent: "#4dffd2", glow: "rgba(77,255,210,0.5)", stars: 170
        },
        desert: {
            id: "desert", scene: "dunes",
            name: { ru: "Барханы Кванта", kk: "Квант құмдары", en: "Quantum Dunes" },
            sky: ["#1a0a18", "#4a1c2a", "#8a3d24"],
            accent: "#ffb74d", glow: "rgba(255,183,77,0.45)", stars: 90
        },
        ocean: {
            id: "ocean", scene: "ocean",
            name: { ru: "Глубины Паскаля", kk: "Паскаль тереңдігі", en: "Pascal Deeps" },
            sky: ["#01101c", "#032a3c", "#06405a"],
            accent: "#4dd0e1", glow: "rgba(77,208,225,0.45)", stars: 60
        },
        crystal: {
            id: "crystal", scene: "crystals",
            name: { ru: "Кристальные пещеры", kk: "Кристалл үңгірлері", en: "Crystal Caverns" },
            sky: ["#0d0620", "#26124a", "#3d1f6b"],
            accent: "#b388ff", glow: "rgba(179,136,255,0.5)", stars: 130
        },
        tundra: {
            id: "tundra", scene: "snow",
            name: { ru: "Ледяная тундра", kk: "Мұзды тундра", en: "Frozen Tundra" },
            sky: ["#050f1c", "#0f2a44", "#1d4463"],
            accent: "#90caf9", glow: "rgba(144,202,249,0.45)", stars: 110
        },
        reactor: {
            id: "reactor", scene: "reactor",
            name: { ru: "Реакторный зал", kk: "Реактор залы", en: "Reactor Hall" },
            sky: ["#170a05", "#33150a", "#5a2410"],
            accent: "#ff8a65", glow: "rgba(255,138,101,0.45)", stars: 45
        },
        jungle: {
            id: "jungle", scene: "jungle",
            name: { ru: "Изумрудные джунгли", kk: "Зүбәржат джунгли", en: "Emerald Jungle" },
            sky: ["#03110b", "#082a1c", "#0c3f2b"],
            accent: "#69f0ae", glow: "rgba(105,240,174,0.45)", stars: 40
        },
        solar: {
            id: "solar", scene: "solar",
            name: { ru: "Солнечная корона", kk: "Күн тәжі", en: "Solar Corona" },
            sky: ["#200707", "#4a120c", "#7a240f"],
            accent: "#ffd54f", glow: "rgba(255,213,79,0.5)", stars: 40
        },
        grid: {
            id: "grid", scene: "grid",
            name: { ru: "Квантовая сетка", kk: "Кванттық тор", en: "Quantum Grid" },
            sky: ["#030817", "#081a33", "#0d2a4d"],
            accent: "#64b5f6", glow: "rgba(100,181,246,0.45)", stars: 120
        },
        volcano: {
            id: "volcano", scene: "volcano",
            name: { ru: "Вулкан Титанов", kk: "Титан жанартауы", en: "Titan Volcano" },
            sky: ["#160303", "#3a0a06", "#5f140a"],
            accent: "#ff7043", glow: "rgba(255,112,67,0.5)", stars: 50
        },
        nebula: {
            id: "nebula", scene: "nebula",
            name: { ru: "Туманность Орбиты", kk: "Орбита тұмандығы", en: "Orbit Nebula" },
            sky: ["#0f0324", "#220b42", "#3a1560"],
            accent: "#e040fb", glow: "rgba(224,64,251,0.45)", stars: 190
        },
        observatory: {
            id: "observatory", scene: "observatory",
            name: { ru: "Хрустальная обсерватория", kk: "Хрусталь обсерваториясы", en: "Crystal Observatory" },
            sky: ["#050818", "#0b1733", "#16294d"],
            accent: "#ffe082", glow: "rgba(255,224,130,0.45)", stars: 210
        },
        clouds: {
            id: "clouds", scene: "clouds",
            name: { ru: "Небесная цитадель", kk: "Аспан цитаделі", en: "Sky Citadel" },
            sky: ["#08131f", "#173049", "#27506f"],
            accent: "#b3e5fc", glow: "rgba(179,229,252,0.45)", stars: 70
        }
    };

    const CHAPTER_THEMES = {
        8: [
            [1, 6, ["tundra", "aurora"]],
            [7, 14, ["reactor", "volcano"]],
            [15, 21, ["grid", "reactor"]],
            [22, 31, ["grid", "solar"]],
            [32, 36, ["nebula", "aurora"]],
            [37, 43, ["observatory", "crystal"]]
        ],
        9: [
            [1, 6, ["desert", "city"]],
            [7, 12, ["desert", "tundra"]],
            [13, 19, ["volcano", "grid"]],
            [20, 27, ["ocean", "aurora"]],
            [28, 35, ["nebula", "observatory"]],
            [36, 48, ["grid", "crystal"]]
        ]
    };

    const TOPIC_THEMES = {
        general: ["asteria", "clouds"],
        kinematics: ["desert", "grid"],
        dynamics: ["volcano", "reactor"],
        density: ["ocean", "crystal"],
        energy: ["solar", "aurora"],
        lab1: ["grid", "crystal"],
        lab2: ["ocean", "grid"],
        lab3: ["reactor", "solar"],
        lab4: ["crystal", "aurora"],
        lab5: ["observatory", "grid"],
        lab6: ["volcano", "desert"],
        lab7: ["ocean", "crystal"],
        lab8: ["grid", "solar"],
        lab9: ["aurora", "observatory"],
        lab10: ["nebula", "clouds"]
    };

    const LevelThemes = {
        THEMES,
        active: null,
        _cache: null,
        _stars: null,

        pickFor(levelId, config) {
            let grade = Number(window.CURRENT_GRADE) || 8;
            const cfg = config || (typeof getLevelConfig === "function" ? getLevelConfig(levelId) : null) || {};
            const chapter = String(cfg.chapter || "");
            const num = parseInt(String(levelId).replace(/[^0-9]/g, ""), 10) || 1;

            if (chapter === "bonus") return { theme: THEMES.asteria, variant: 0 };
            if (chapter.indexOf("lab") === 0) {
                const key = chapter;
                const pair = TOPIC_THEMES[key] || ["grid", "crystal"];
                return { theme: THEMES[pair[num % pair.length]], variant: num % 2 };
            }

            const pNum = parseInt(chapter.replace("p", ""), 10);
            if (Number.isFinite(pNum)) {
                const table = CHAPTER_THEMES[grade] || CHAPTER_THEMES[8];
                for (const [from, to, ids] of table) {
                    if (pNum >= from && pNum <= to) {
                        return { theme: THEMES[ids[num % ids.length]], variant: num % 3 };
                    }
                }
            }

            // 7 класс: ориентируемся на темы урока
            const topics = Array.isArray(cfg.topics) ? cfg.topics : [];
            for (const topic of topics) {
                if (TOPIC_THEMES[topic]) {
                    const pair = TOPIC_THEMES[topic];
                    return { theme: THEMES[pair[num % pair.length]], variant: num % 3 };
                }
            }
            const order = ["asteria", "ocean", "desert", "aurora", "crystal", "solar", "grid", "tundra"];
            return { theme: THEMES[order[(num + grade) % order.length]], variant: num % 3 };
        },

        get(levelId, config) {
            if (this.active && String(this.active.levelId) === String(levelId)) return this.active;
            return this.pickFor(levelId, config);
        },

        apply(levelId, config) {
            const picked = this.pickFor(levelId, config);
            picked.levelId = levelId;
            this.active = picked;
            this.updateChip(picked);
            try {
                const root = document.getElementById("game-screen") || document.documentElement;
                root.style.setProperty("--pq-level-accent", picked.theme.accent);
                root.style.setProperty("--pq-level-glow", picked.theme.glow);
                root.setAttribute("data-world", picked.theme.id);
            } catch (_) {}
            return picked;
        },

        updateChip(picked) {
            const hud = document.getElementById("game-hud") || document.querySelector(".game-hud");
            if (!hud) return;
            let chip = document.getElementById("pq-world-chip");
            if (!chip) {
                chip = document.createElement("div");
                chip.id = "pq-world-chip";
                chip.className = "pq-world-chip";
                const time = document.getElementById("hud-time");
                if (time && time.parentNode === hud) hud.insertBefore(chip, time);
                else hud.appendChild(chip);
            }
            const name = picked.theme.name;
            chip.innerHTML = `<span class="pq-world-dot" style="background:${picked.theme.accent};box-shadow:0 0 12px ${picked.theme.glow}"></span>` +
                `<span class="pq-world-name">${name[lang()] || name.ru}</span>`;
            chip.style.setProperty("--pq-world-accent", picked.theme.accent);
        },

        /* ================== ФОН ================== */
        drawBackground(ctx, game) {
            if (!ctx || !game.width) return false;
            const picked = this.get(game.currentLevel, game.levelConfig);
            const theme = picked.theme;
            const key = theme.id + "|" + game.width + "x" + game.height + "|" + (picked.variant || 0);
            if (!this._cache || this._cache.key !== key) {
                this._cache = { key: key, canvas: this.buildStatic(game.width, game.height, theme, picked.variant || 0) };
            }
            if (this._cache.canvas) {
                try { ctx.drawImage(this._cache.canvas, 0, 0, game.width, game.height); } catch (_) {}
            }
            this.drawDynamic(ctx, game.width, game.height, theme, picked.variant || 0);
            this.drawStars(ctx, game, theme);
            return true;
        },

        buildStatic(w, h, theme, variant) {
            const c = document.createElement("canvas");
            c.width = Math.max(2, Math.floor(w));
            c.height = Math.max(2, Math.floor(h));
            const ctx = c.getContext("2d");
            if (!ctx) return null;

            // Небо
            const sky = ctx.createLinearGradient(0, 0, 0, h);
            sky.addColorStop(0, theme.sky[0]);
            sky.addColorStop(0.55, theme.sky[1]);
            sky.addColorStop(1, theme.sky[2]);
            ctx.fillStyle = sky;
            ctx.fillRect(0, 0, w, h);

            // Мягкое свечение у горизонта
            const glow = ctx.createRadialGradient(w * 0.5, h * 0.82, 0, w * 0.5, h * 0.82, Math.max(w, h) * 0.65);
            glow.addColorStop(0, theme.glow.replace(/0\.\d+\)/, "0.18)"));
            glow.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, w, h);

            const scene = theme.scene;
            if (scene === "aurora") this.sceneAurora(ctx, w, h, theme, variant);
            else if (scene === "dunes") this.sceneDunes(ctx, w, h, theme, variant);
            else if (scene === "ocean") this.sceneOcean(ctx, w, h, theme, variant);
            else if (scene === "crystals") this.sceneCrystals(ctx, w, h, theme, variant);
            else if (scene === "snow") this.sceneSnow(ctx, w, h, theme, variant);
            else if (scene === "reactor") this.sceneReactor(ctx, w, h, theme, variant);
            else if (scene === "jungle") this.sceneJungle(ctx, w, h, theme, variant);
            else if (scene === "solar") this.sceneSolar(ctx, w, h, theme, variant);
            else if (scene === "grid") this.sceneGrid(ctx, w, h, theme, variant);
            else if (scene === "volcano") this.sceneVolcano(ctx, w, h, theme, variant);
            else if (scene === "nebula") this.sceneNebula(ctx, w, h, theme, variant);
            else if (scene === "observatory") this.sceneObservatory(ctx, w, h, theme, variant);
            else if (scene === "clouds") this.sceneClouds(ctx, w, h, theme, variant);
            else this.sceneMountains(ctx, w, h, theme, variant);

            // Виньетка
            const vig = ctx.createRadialGradient(w * 0.5, h * 0.5, Math.min(w, h) * 0.2, w * 0.5, h * 0.5, Math.max(w, h) * 0.78);
            vig.addColorStop(0, "rgba(0,0,0,0)");
            vig.addColorStop(1, "rgba(0,0,0,0.55)");
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, w, h);
            return c;
        },

        drawStars(ctx, game, theme) {
            const stars = game.stars || [];
            const time = Date.now() / 1000;
            ctx.save();
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                const alpha = 0.25 + Math.abs(Math.sin(time * 1.4 + (s.twinkle || i))) * 0.55;
                ctx.fillStyle = theme.id === "solar" ? `rgba(255,236,179,${alpha})` : `rgba(226,240,255,${alpha})`;
                ctx.beginPath();
                ctx.arc(s.x % game.width, s.y % game.height, (s.size || 1) * 0.9, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        },

        drawDynamic(ctx, w, h, theme, variant) {
            const time = Date.now() / 1000;
            ctx.save();
            if (theme.scene === "aurora") {
                for (let band = 0; band < 3; band++) {
                    const phase = time * (0.22 + band * 0.06) + band + variant;
                    const yBase = h * (0.18 + band * 0.07);
                    ctx.beginPath();
                    ctx.moveTo(-40, yBase);
                    for (let x = -40; x <= w + 40; x += 40) {
                        const y = yBase + Math.sin(x / 170 + phase) * 26 + Math.cos(x / 90 + phase * 1.4) * 12;
                        ctx.lineTo(x, y);
                    }
                    ctx.lineTo(w + 40, yBase + 90);
                    for (let x = w + 40; x >= -40; x -= 40) {
                        const y = yBase + 70 + Math.sin(x / 150 - phase) * 22;
                        ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    const g = ctx.createLinearGradient(0, yBase - 30, 0, yBase + 100);
                    g.addColorStop(0, "rgba(77,255,210,0.00)");
                    g.addColorStop(0.45, band === 1 ? "rgba(64,196,255,0.16)" : "rgba(77,255,210,0.15)");
                    g.addColorStop(1, "rgba(120,80,255,0.00)");
                    ctx.fillStyle = g;
                    ctx.fill();
                }
            } else if (theme.scene === "ocean") {
                for (let i = 0; i < 14; i++) {
                    const x = ((i * 137 + time * (12 + i)) % (w + 60)) - 30;
                    const y = h - ((i * 53 + time * (18 + i * 2)) % (h * 0.75));
                    ctx.fillStyle = `rgba(180,240,255,${0.06 + (i % 4) * 0.02})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (theme.scene === "snow") {
                for (let i = 0; i < 46; i++) {
                    const x = ((i * 91 + time * (12 + (i % 5) * 4)) % (w + 40)) - 20;
                    const y = (i * 53 + time * (22 + (i % 4) * 6)) % h;
                    ctx.fillStyle = `rgba(220,240,255,${0.25 + (i % 3) * 0.15})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 1.4 + (i % 3) * 0.6, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (theme.scene === "volcano") {
                for (let i = 0; i < 10; i++) {
                    const t = (time * 0.4 + i * 0.37) % 1;
                    const x = w * 0.5 + Math.sin(i * 2.1 + time * 0.2) * (40 + t * 150);
                    const y = h * 0.66 - t * h * 0.45;
                    ctx.fillStyle = `rgba(255,${120 - i * 6},60,${(1 - t) * 0.55})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 2 + (1 - t) * 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (theme.scene === "jungle") {
                for (let i = 0; i < 18; i++) {
                    const x = ((i * 73 + time * 8) % (w + 30)) - 15;
                    const y = h * 0.45 + Math.sin(time * 0.8 + i) * 30 + (i % 5) * 26;
                    const a = 0.25 + Math.abs(Math.sin(time * 1.8 + i)) * 0.4;
                    ctx.fillStyle = `rgba(180,255,180,${a})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 1.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (theme.scene === "nebula" || theme.scene === "observatory") {
                for (let i = 0; i < 5; i++) {
                    const x = w * (0.2 + 0.18 * i) + Math.sin(time * 0.12 + i) * 26;
                    const y = h * (0.22 + 0.1 * (i % 3)) + Math.cos(time * 0.1 + i) * 18;
                    const g = ctx.createRadialGradient(x, y, 0, x, y, 110 + i * 18);
                    g.addColorStop(0, `rgba(224,64,251,${0.05 + (i % 2) * 0.02})`);
                    g.addColorStop(1, "rgba(0,0,0,0)");
                    ctx.fillStyle = g;
                    ctx.fillRect(x - 180, y - 180, 360, 360);
                }
            } else if (theme.scene === "clouds") {
                for (let i = 0; i < 4; i++) {
                    const x = ((i * 280 + time * (6 + i * 2)) % (w + 300)) - 150;
                    this.cloud(ctx, x, h * (0.28 + i * 0.11), 90 + i * 22, 0.06 + i * 0.012);
                }
            } else if (theme.scene === "solar") {
                const x = w * 0.78, y = h * 0.2, r = Math.min(w, h) * 0.09;
                const g = ctx.createRadialGradient(x, y, r * 0.3, x, y, r * 2.2);
                g.addColorStop(0, "rgba(255,213,79,0.5)");
                g.addColorStop(1, "rgba(255,140,0,0)");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(x, y, r * 2.2, 0, Math.PI * 2);
                ctx.fill();
            } else if (theme.scene === "grid") {
                ctx.strokeStyle = "rgba(100,181,246,0.12)";
                ctx.lineWidth = 1;
                const off = (time * 14) % 40;
                for (let y = h * 0.55 + off; y < h; y += 40) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(w, y);
                    ctx.stroke();
                }
            }
            ctx.restore();
        },

        cloud(ctx, x, y, r, alpha) {
            ctx.fillStyle = `rgba(200,225,255,${alpha})`;
            ctx.beginPath();
            ctx.ellipse(x, y, r, r * 0.42, 0, 0, Math.PI * 2);
            ctx.ellipse(x + r * 0.55, y - r * 0.12, r * 0.6, r * 0.3, 0, 0, Math.PI * 2);
            ctx.ellipse(x - r * 0.5, y - r * 0.06, r * 0.5, r * 0.26, 0, 0, Math.PI * 2);
            ctx.fill();
        },

        mountainLayers(ctx, w, h, colors, baseY, amp, seed) {
            colors.forEach((color, idx) => {
                const y0 = h * baseY + idx * 18;
                ctx.beginPath();
                ctx.moveTo(-20, h);
                ctx.lineTo(-20, y0);
                for (let x = -20; x <= w + 20; x += 26) {
                    const y = y0 - Math.abs(Math.sin(x / (110 + idx * 40) + seed + idx)) * amp * (1 - idx * 0.18);
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(w + 20, h);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
            });
        },

        sceneMountains(ctx, w, h, theme, variant) {
            this.mountainLayers(ctx, w, h, ["#0a1226", "#0d1830", "#111f3a"], 0.72, 90, variant);
        },

        sceneAurora(ctx, w, h, theme, variant) {
            const g = ctx.createLinearGradient(0, h * 0.55, 0, h);
            g.addColorStop(0, "rgba(8,40,58,0)");
            g.addColorStop(1, "rgba(5,26,34,0.9)");
            ctx.fillStyle = g;
            ctx.fillRect(0, h * 0.5, w, h * 0.5);
            this.mountainLayers(ctx, w, h, ["#08212a", "#0a2c34", "#0c3840"], 0.76, 70, variant + 1);
        },

        sceneDunes(ctx, w, h, theme, variant) {
            const layers = ["rgba(74,28,42,0.85)", "rgba(94,38,40,0.9)", "rgba(120,52,38,0.95)"];
            layers.forEach((color, i) => {
                const y = h * (0.66 + i * 0.09);
                ctx.beginPath();
                ctx.moveTo(0, h);
                ctx.lineTo(0, y);
                for (let x = 0; x <= w; x += 18) {
                    const yy = y + Math.sin(x / (150 + i * 50) + i + variant) * 22;
                    ctx.lineTo(x, yy);
                }
                ctx.lineTo(w, h);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
            });
            // Солнце пустыни
            const sx = w * 0.24, sy = h * 0.3;
            const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, 90);
            g.addColorStop(0, "rgba(255,200,120,0.5)");
            g.addColorStop(1, "rgba(255,140,60,0)");
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(sx, sy, 90, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "rgba(255,214,150,0.55)";
            ctx.beginPath(); ctx.arc(sx, sy, 26, 0, Math.PI * 2); ctx.fill();
        },

        sceneOcean(ctx, w, h, theme, variant) {
            ctx.fillStyle = "rgba(4,40,58,0.9)";
            ctx.fillRect(0, h * 0.6, w, h * 0.4);
            for (let i = 0; i < 6; i++) {
                ctx.strokeStyle = `rgba(120,220,240,${0.05 + i * 0.012})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                const y = h * (0.62 + i * 0.06);
                for (let x = 0; x <= w; x += 20) {
                    ctx.lineTo(x, y + Math.sin(x / 90 + i + variant) * 6);
                }
                ctx.stroke();
            }
            // Кораллы / водоросли
            for (let i = 0; i < 7; i++) {
                const x = w * (0.08 + i * 0.14);
                const hh = 40 + (i % 3) * 24;
                ctx.strokeStyle = "rgba(40,120,110,0.5)";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(x, h);
                ctx.quadraticCurveTo(x + 12, h - hh * 0.6, x + 2, h - hh);
                ctx.stroke();
            }
        },

        sceneCrystals(ctx, w, h, theme, variant) {
            this.mountainLayers(ctx, w, h, ["rgba(20,10,44,0.9)", "rgba(30,16,60,0.92)"], 0.8, 60, variant);
            const crystals = [
                [0.12, 70], [0.24, 120], [0.33, 60], [0.62, 150], [0.72, 80], [0.86, 110]
            ];
            crystals.forEach(([px, size], i) => {
                const x = w * px;
                const y = h * 0.9;
                const grd = ctx.createLinearGradient(x, y - size, x, y);
                grd.addColorStop(0, i % 2 ? "rgba(179,136,255,0.55)" : "rgba(120,180,255,0.5)");
                grd.addColorStop(1, "rgba(40,20,80,0.15)");
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.moveTo(x - size * 0.18, y);
                ctx.lineTo(x - size * 0.06, y - size);
                ctx.lineTo(x + size * 0.08, y - size * 0.86);
                ctx.lineTo(x + size * 0.2, y);
                ctx.closePath();
                ctx.fill();
            });
        },

        sceneSnow(ctx, w, h, theme, variant) {
            this.mountainLayers(ctx, w, h, ["rgba(20,42,64,0.85)", "rgba(30,60,88,0.9)", "rgba(44,80,110,0.95)"], 0.72, 95, variant);
            ctx.fillStyle = "rgba(225,240,255,0.14)";
            ctx.beginPath();
            ctx.moveTo(0, h);
            for (let x = 0; x <= w; x += 24) {
                ctx.lineTo(x, h * 0.88 + Math.sin(x / 120 + variant) * 10);
            }
            ctx.lineTo(w, h);
            ctx.closePath();
            ctx.fill();
        },

        sceneReactor(ctx, w, h, theme, variant) {
            ctx.fillStyle = "rgba(20,8,4,0.92)";
            ctx.fillRect(0, h * 0.58, w, h * 0.42);
            // Трубы и корпуса
            for (let i = 0; i < 6; i++) {
                const x = w * (0.06 + i * 0.17);
                const bw = w * 0.08;
                const bh = h * (0.16 + (i % 3) * 0.07);
                ctx.fillStyle = "rgba(48,22,12,0.95)";
                ctx.fillRect(x, h * 0.72 - bh, bw, bh + h * 0.28);
                ctx.fillStyle = "rgba(255,150,90,0.35)";
                for (let wy = h * 0.74; wy < h * 0.9; wy += 18) {
                    for (let wx = x + 6; wx < x + bw - 8; wx += 14) {
                        if ((wx + wy) % 3 === 0) ctx.fillRect(wx, wy, 5, 4);
                    }
                }
                ctx.strokeStyle = "rgba(255,120,60,0.25)";
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(x + bw, h * 0.4);
                ctx.lineTo(x + bw, h * 0.72 - bh);
                ctx.stroke();
            }
            const g = ctx.createRadialGradient(w * 0.5, h * 0.62, 0, w * 0.5, h * 0.62, w * 0.3);
            g.addColorStop(0, "rgba(255,140,60,0.35)");
            g.addColorStop(1, "rgba(255,80,20,0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, h * 0.4, w, h * 0.5);
        },

        sceneJungle(ctx, w, h, theme, variant) {
            ctx.fillStyle = "rgba(4,22,14,0.95)";
            ctx.fillRect(0, h * 0.62, w, h * 0.38);
            for (let i = 0; i < 9; i++) {
                const x = w * (0.04 + i * 0.115);
                const th = h * (0.26 + (i % 3) * 0.08);
                ctx.strokeStyle = "rgba(10,40,26,0.95)";
                ctx.lineWidth = 8 + (i % 3) * 3;
                ctx.beginPath();
                ctx.moveTo(x, h);
                ctx.quadraticCurveTo(x + 16, h - th * 0.6, x + 4, h - th);
                ctx.stroke();
                ctx.fillStyle = "rgba(16,60,38,0.85)";
                for (let leaf = 0; leaf < 4; leaf++) {
                    const ang = -Math.PI / 2 + (leaf - 1.5) * 0.5;
                    ctx.beginPath();
                    ctx.ellipse(x + 4 + Math.cos(ang) * 26, h - th + Math.sin(ang) * 20, 26, 10, ang, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        },

        sceneSolar(ctx, w, h, theme, variant) {
            ctx.fillStyle = "rgba(40,10,8,0.9)";
            ctx.fillRect(0, h * 0.7, w, h * 0.3);
            // Протуберанцы
            for (let i = 0; i < 4; i++) {
                const x = w * (0.12 + i * 0.24);
                ctx.strokeStyle = `rgba(255,160,70,${0.16 + i * 0.03})`;
                ctx.lineWidth = 10;
                ctx.beginPath();
                ctx.arc(x, h * 0.24, 70 + i * 18, Math.PI * 0.15, Math.PI * 0.85);
                ctx.stroke();
            }
            this.mountainLayers(ctx, w, h, ["rgba(50,12,8,0.9)", "rgba(70,18,10,0.92)"], 0.82, 50, variant);
        },

        sceneGrid(ctx, w, h, theme, variant) {
            ctx.strokeStyle = "rgba(100,181,246,0.16)";
            ctx.lineWidth = 1;
            const horizon = h * 0.58;
            for (let i = 0; i <= 12; i++) {
                const x = (w / 12) * i;
                ctx.beginPath();
                ctx.moveTo(x, h);
                ctx.lineTo(w * 0.5 + (x - w * 0.5) * 0.12, horizon);
                ctx.stroke();
            }
            for (let i = 1; i <= 8; i++) {
                const t = i / 8;
                const y = horizon + (h - horizon) * Math.pow(t, 1.7);
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
            ctx.fillStyle = "rgba(100,181,246,0.08)";
            ctx.fillRect(0, horizon - 2, w, 3);
        },

        sceneVolcano(ctx, w, h, theme, variant) {
            ctx.fillStyle = "rgba(26,6,4,0.95)";
            ctx.beginPath();
            ctx.moveTo(-20, h);
            ctx.lineTo(w * 0.38, h * 0.48);
            ctx.lineTo(w * 0.5, h * 0.66);
            ctx.lineTo(w * 0.62, h * 0.48);
            ctx.lineTo(w + 20, h);
            ctx.closePath();
            ctx.fill();
            const g = ctx.createLinearGradient(w * 0.5, h * 0.48, w * 0.5, h * 0.78);
            g.addColorStop(0, "rgba(255,120,40,0.55)");
            g.addColorStop(1, "rgba(255,60,10,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.moveTo(w * 0.47, h * 0.5);
            ctx.lineTo(w * 0.5, h * 0.62);
            ctx.lineTo(w * 0.53, h * 0.5);
            ctx.lineTo(w * 0.58, h * 0.8);
            ctx.lineTo(w * 0.42, h * 0.8);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "rgba(255,80,20,0.18)";
            ctx.fillRect(0, h * 0.72, w, 70);
        },

        sceneNebula(ctx, w, h, theme, variant) {
            const blobs = [
                [0.24, 0.34, 240, "rgba(120,40,220,0.25)"],
                [0.68, 0.26, 300, "rgba(50,120,240,0.18)"],
                [0.52, 0.62, 260, "rgba(220,60,200,0.14)"]
            ];
            blobs.forEach(([px, py, r, color]) => {
                const g = ctx.createRadialGradient(w * px, h * py, 0, w * px, h * py, r);
                g.addColorStop(0, color);
                g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g;
                ctx.fillRect(w * px - r, h * py - r, r * 2, r * 2);
            });
            ctx.fillStyle = "rgba(15,5,36,0.85)";
            ctx.fillRect(0, h * 0.84, w, h * 0.16);
        },

        sceneObservatory(ctx, w, h, theme, variant) {
            const cx = w * 0.5, baseY = h * 0.84;
            this.mountainLayers(ctx, w, h, ["rgba(8,14,32,0.9)", "rgba(12,22,44,0.95)"], 0.84, 60, variant);
            ctx.fillStyle = "#0a1428";
            ctx.fillRect(cx - 110, baseY - 120, 220, 120);
            ctx.beginPath();
            ctx.arc(cx, baseY - 120, 110, Math.PI, 0);
            ctx.fillStyle = "#101d38";
            ctx.fill();
            ctx.fillStyle = "rgba(255,224,130,0.5)";
            ctx.fillRect(cx - 30, baseY - 160, 60, 16);
            ctx.strokeStyle = "#1b2c4d";
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(cx + 40, baseY - 160);
            ctx.lineTo(cx + 130, baseY - 250);
            ctx.stroke();
            ctx.fillStyle = "rgba(255,224,130,0.65)";
            ctx.beginPath();
            ctx.arc(cx + 130, baseY - 250, 9, 0, Math.PI * 2);
            ctx.fill();
        },

        sceneClouds(ctx, w, h, theme, variant) {
            const horizon = h * 0.86;
            const g = ctx.createLinearGradient(0, horizon - 120, 0, h);
            g.addColorStop(0, "rgba(30,60,88,0)");
            g.addColorStop(1, "rgba(12,28,44,0.9)");
            ctx.fillStyle = g;
            ctx.fillRect(0, horizon - 120, w, h);
            for (let i = 0; i < 5; i++) this.cloud(ctx, w * (0.1 + i * 0.2), horizon - 70 - (i % 2) * 26, 100 + i * 12, 0.12);
        },

        init() {
            if (Game.__pqThemes) return;
            if (typeof Game === "undefined") {
                this._tries = (this._tries || 0) + 1;
                if (this._tries < 60) setTimeout(() => this.init(), 120);
                return;
            }
            Game.__pqThemes = true;
            const origStart = Game.startLevel;
            Game.startLevel = function () {
                const result = origStart.apply(this, arguments);
                try { LevelThemes.apply(this.currentLevel, this.levelConfig); } catch (_) {}
                return result;
            };
            const origResize = Game.resize;
            if (typeof origResize === "function") {
                Game.resize = function () {
                    const r = origResize.apply(this, arguments);
                    LevelThemes._cache = null;
                    return r;
                };
            }
        }
    };

    window.LevelThemes = LevelThemes;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(() => LevelThemes.init(), 0));
    } else {
        setTimeout(() => LevelThemes.init(), 0);
    }
})();
