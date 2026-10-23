/* ============================================================
   PQ SOUND — синтезированные звуки и космо-эмбиент на Web Audio API
   Без тяжёлых аудиофайлов: всё генерируется в браузере.
   Кнопка 🔊 / 🔇 в шапке, состояние сохраняется в профиле.
   ============================================================ */
(function () {
    "use strict";

    const L = {
        ru: { on: "Звук включён", off: "Звук выключен", toggle: "Включить/выключить звук", ambient: "Космо-эмбиент" },
        en: { on: "Sound on", off: "Sound muted", toggle: "Toggle sound", ambient: "Space ambient" },
        kk: { on: "Дыбыс қосулы", off: "Дыбыс өшірулі", toggle: "Дыбысты қосу/өшіру", ambient: "Ғарыш эмбиенті" }
    };
    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || localStorage.getItem("pq_lang") || "ru"; }
        catch (_) { return "ru"; }
    }
    function t(key) {
        const l = lang();
        return (L[l] && L[l][key]) || L.ru[key] || key;
    }

    const PQSound = {
        ctx: null,
        master: null,
        sfxBus: null,
        ambientBus: null,
        ambientNodes: [],
        enabled: true,
        ambientEnabled: true,
        ambientPlaying: false,
        _hooked: false,
        _unlocked: false,
        _noiseBuffer: null,
        _lastPlay: {},

        // ---------- настройки ----------
        readSettings() {
            let s = {};
            try { s = (typeof Storage !== "undefined" && Storage.getSettings) ? Storage.getSettings() : {}; } catch (_) {}
            this.enabled = s.soundEnabled !== false;
            this.ambientEnabled = s.ambientEnabled !== false;
            return s;
        },
        saveSettings(patch) {
            try {
                if (typeof Storage !== "undefined" && Storage.setSettings) {
                    Storage.setSettings(Object.assign({}, Storage.getSettings(), patch));
                } else {
                    const key = "physicsquest_global_settings";
                    const raw = JSON.parse(localStorage.getItem(key) || "{}");
                    localStorage.setItem(key, JSON.stringify(Object.assign(raw, patch)));
                }
            } catch (_) {}
        },

        // ---------- граф ----------
        ensureCtx() {
            if (this.ctx) return this.ctx;
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return null;
            try {
                this.ctx = new AC();
                this.master = this.ctx.createGain();
                this.master.gain.value = this.enabled ? 0.55 : 0;
                this.master.connect(this.ctx.destination);

                this.sfxBus = this.ctx.createGain();
                this.sfxBus.gain.value = 0.9;
                this.sfxBus.connect(this.master);

                this.ambientBus = this.ctx.createGain();
                this.ambientBus.gain.value = 0;
                this.ambientBus.connect(this.master);

                this._noiseBuffer = this.makeNoise(2.0);
            } catch (_) {
                this.ctx = null;
            }
            return this.ctx;
        },

        resume() {
            if (this.ctx && this.ctx.state === "suspended") {
                this.ctx.resume().catch(() => {});
            }
        },

        makeNoise(seconds) {
            const ctx = this.ctx;
            if (!ctx) return null;
            const len = Math.max(1, Math.floor(ctx.sampleRate * seconds));
            const buf = ctx.createBuffer(1, len, ctx.sampleRate);
            const data = buf.getChannelData(0);
            let last = 0;
            for (let i = 0; i < len; i++) {
                const white = Math.random() * 2 - 1;
                last = (last + 0.02 * white) / 1.02; // мягкий «космический ветер»
                data[i] = last * 3.2;
            }
            return buf;
        },

        // ---------- примитивы ----------
        tone(opts) {
            const ctx = this.ctx;
            if (!ctx) return;
            const now = ctx.currentTime + (opts.delay || 0);
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            filter.type = opts.filterType || "lowpass";
            filter.frequency.value = opts.filter || 9000;
            filter.Q.value = opts.q || 0.8;

            osc.type = opts.type || "sine";
            osc.frequency.setValueAtTime(Math.max(20, opts.from || 440), now);
            if (opts.to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.to), now + (opts.dur || 0.2));

            const peak = Math.max(0.0001, opts.gain == null ? 0.18 : opts.gain);
            const attack = opts.attack == null ? 0.012 : opts.attack;
            const dur = opts.dur || 0.2;
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(peak, now + attack);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(opts.bus || this.sfxBus);
            osc.start(now);
            osc.stop(now + dur + 0.05);
        },

        noise(opts) {
            const ctx = this.ctx;
            if (!ctx || !this._noiseBuffer) return;
            const now = ctx.currentTime + (opts.delay || 0);
            const src = ctx.createBufferSource();
            src.buffer = this._noiseBuffer;
            src.loop = true;
            const filter = ctx.createBiquadFilter();
            filter.type = opts.filterType || "bandpass";
            filter.frequency.setValueAtTime(opts.from || 600, now);
            if (opts.to) filter.frequency.exponentialRampToValueAtTime(opts.to, now + (opts.dur || 0.4));
            filter.Q.value = opts.q || 1.2;
            const gain = ctx.createGain();
            const peak = opts.gain == null ? 0.12 : opts.gain;
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(peak, now + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + (opts.dur || 0.4));
            src.connect(filter); filter.connect(gain); gain.connect(opts.bus || this.sfxBus);
            src.start(now);
            src.stop(now + (opts.dur || 0.4) + 0.05);
        },

        // ---------- эффекты ----------
        play(name) {
            if (!this.enabled) return;
            if (!this.ensureCtx()) return;
            this.resume();
            const now = Date.now();
            if (this._lastPlay[name] && now - this._lastPlay[name] < 60) return;
            this._lastPlay[name] = now;

            switch (name) {
                case "click":
                    this.tone({ type: "square", from: 760, to: 620, dur: 0.06, gain: 0.05, filter: 2600 });
                    break;
                case "hover":
                    this.tone({ type: "sine", from: 980, to: 1080, dur: 0.05, gain: 0.025 });
                    break;
                case "open":
                    this.tone({ type: "triangle", from: 420, to: 840, dur: 0.16, gain: 0.08 });
                    this.tone({ type: "sine", from: 840, to: 1260, dur: 0.22, gain: 0.05, delay: 0.08 });
                    break;
                case "correct":
                    [523.25, 659.25, 783.99].forEach((f, i) => {
                        this.tone({ type: "triangle", from: f, to: f * 1.002, dur: 0.24, gain: 0.14, delay: i * 0.085 });
                    });
                    this.tone({ type: "sine", from: 1046.5, dur: 0.4, gain: 0.07, delay: 0.25 });
                    break;
                case "wrong":
                    this.tone({ type: "sawtooth", from: 190, to: 92, dur: 0.36, gain: 0.12, filter: 700 });
                    this.tone({ type: "square", from: 150, to: 74, dur: 0.3, gain: 0.05, filter: 500, delay: 0.04 });
                    break;
                case "shield":
                    this.tone({ type: "sine", from: 360, to: 1180, dur: 0.32, gain: 0.12 });
                    this.tone({ type: "triangle", from: 720, to: 1560, dur: 0.28, gain: 0.06, delay: 0.05 });
                    this.noise({ from: 700, to: 2400, dur: 0.34, gain: 0.05, q: 0.9 });
                    break;
                case "energy":
                    this.tone({ type: "sine", from: 1180, to: 1720, dur: 0.12, gain: 0.09 });
                    this.tone({ type: "sine", from: 1580, to: 2100, dur: 0.1, gain: 0.05, delay: 0.07 });
                    break;
                case "boss":
                    [0, 0.28, 0.56].forEach((d) => {
                        this.tone({ type: "sawtooth", from: 128, to: 96, dur: 0.2, gain: 0.14, filter: 380, delay: d });
                    });
                    this.noise({ from: 260, to: 160, dur: 0.9, gain: 0.06, q: 0.7 });
                    break;
                case "levelup":
                    [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
                        this.tone({ type: "triangle", from: f, dur: 0.3, gain: 0.1, delay: i * 0.09 });
                    });
                    break;
                case "victory":
                    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
                        this.tone({ type: "triangle", from: f, dur: 0.42, gain: 0.12, delay: i * 0.12 });
                    });
                    [523.25, 659.25, 783.99].forEach((f) => {
                        this.tone({ type: "sine", from: f, dur: 1.4, gain: 0.05, delay: 0.5, attack: 0.18 });
                    });
                    break;
                case "defeat":
                    [330, 262, 196, 131].forEach((f, i) => {
                        this.tone({ type: "sawtooth", from: f, to: f * 0.94, dur: 0.45, gain: 0.09, filter: 620, delay: i * 0.16 });
                    });
                    break;
                case "coin":
                    this.tone({ type: "square", from: 987, to: 987, dur: 0.07, gain: 0.05, filter: 3000 });
                    this.tone({ type: "square", from: 1318, dur: 0.14, gain: 0.05, filter: 3000, delay: 0.06 });
                    break;
                case "tick":
                    this.tone({ type: "sine", from: 1500, dur: 0.03, gain: 0.03 });
                    break;
            }
        },

        // ---------- эмбиент ----------
        startAmbient() {
            if (!this.ambientEnabled || !this.enabled) return;
            if (this.ambientPlaying) return;
            if (!this.ensureCtx()) return;
            this.resume();
            const ctx = this.ctx;
            const bus = this.ambientBus;
            const nodes = [];

            // Глубокий дрон (две расстроенные волны)
            [55, 55.6, 82.5].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const filter = ctx.createBiquadFilter();
                osc.type = idx === 2 ? "triangle" : "sine";
                osc.frequency.value = freq;
                filter.type = "lowpass";
                filter.frequency.value = 420;
                filter.Q.value = 0.6;
                gain.gain.value = idx === 2 ? 0.06 : 0.1;

                // медленное дыхание
                const lfo = ctx.createOscillator();
                const lfoGain = ctx.createGain();
                lfo.frequency.value = 0.035 + idx * 0.012;
                lfoGain.gain.value = idx === 2 ? 0.03 : 0.05;
                lfo.connect(lfoGain);
                lfoGain.connect(gain.gain);
                lfo.start();

                osc.connect(filter); filter.connect(gain); gain.connect(bus);
                osc.start();
                nodes.push(osc, lfo);
            });

            // «Космический ветер»
            if (this._noiseBuffer) {
                const src = ctx.createBufferSource();
                src.buffer = this._noiseBuffer;
                src.loop = true;
                const filter = ctx.createBiquadFilter();
                filter.type = "bandpass";
                filter.frequency.value = 820;
                filter.Q.value = 0.7;
                const gain = ctx.createGain();
                gain.gain.value = 0.035;
                const lfo = ctx.createOscillator();
                const lfoGain = ctx.createGain();
                lfo.frequency.value = 0.02;
                lfoGain.gain.value = 420;
                lfo.connect(lfoGain);
                lfoGain.connect(filter.frequency);
                lfo.start();
                src.connect(filter); filter.connect(gain); gain.connect(bus);
                src.start();
                nodes.push(src, lfo);
            }

            // редкие «звёздные» блики
            const sparkle = () => {
                if (!this.ambientPlaying || !this.enabled) return;
                const notes = [1318.5, 1567.98, 1760, 2093];
                this.tone({
                    type: "sine",
                    from: notes[Math.floor(Math.random() * notes.length)],
                    dur: 1.4,
                    gain: 0.012,
                    attack: 0.4,
                    bus: this.ambientBus
                });
            };
            this._sparkleTimer = setInterval(sparkle, 9000);

            this.ambientNodes = nodes;
            this.ambientPlaying = true;
            bus.gain.cancelScheduledValues(ctx.currentTime);
            bus.gain.setValueAtTime(0.0001, ctx.currentTime);
            bus.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 1.6);
        },

        stopAmbient() {
            if (!this.ambientPlaying) return;
            this.ambientPlaying = false;
            if (this._sparkleTimer) { clearInterval(this._sparkleTimer); this._sparkleTimer = null; }
            const ctx = this.ctx;
            if (ctx && this.ambientBus) {
                try {
                    this.ambientBus.gain.cancelScheduledValues(ctx.currentTime);
                    this.ambientBus.gain.setValueAtTime(this.ambientBus.gain.value || 0.0001, ctx.currentTime);
                    this.ambientBus.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
                } catch (_) {}
            }
            const nodes = this.ambientNodes;
            this.ambientNodes = [];
            setTimeout(() => {
                nodes.forEach((n) => { try { n.stop(); } catch (_) {} });
            }, 900);
        },

        // ---------- публичное управление ----------
        setEnabled(value, opts) {
            this.enabled = !!value;
            this.saveSettings({ soundEnabled: this.enabled });
            if (!this.enabled) {
                if (this.ctx && this.master) this.master.gain.value = 0;
                this.stopAmbient();
            } else {
                if (this.ensureCtx() && this.master) {
                    this.resume();
                    this.master.gain.value = 0.55;
                    this.startAmbient();
                    this.play("coin");
                }
            }
            this.syncButtons();
            if (opts && opts.toast) this.toast(this.enabled ? t("on") : t("off"));
        },

        toggle() {
            this.setEnabled(!this.enabled, { toast: true });
        },

        setAmbient(value) {
            this.ambientEnabled = !!value;
            this.saveSettings({ ambientEnabled: this.ambientEnabled });
            if (this.ambientEnabled && this.enabled) this.startAmbient();
            else this.stopAmbient();
            this.syncButtons();
        },

        toast(text) {
            if (typeof showNotification === "function") {
                try { showNotification(text, "info"); return; } catch (_) {}
            }
            const el = document.createElement("div");
            el.textContent = text;
            el.style.cssText = "position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:rgba(12,22,44,.94);color:#eaf2ff;border:1px solid rgba(120,200,255,.4);padding:10px 18px;border-radius:12px;z-index:99999;font:600 14px/1.2 system-ui,sans-serif;box-shadow:0 12px 32px rgba(0,0,0,.45)";
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 1600);
        },

        syncButtons() {
            document.querySelectorAll("[data-pq-sound-toggle]").forEach((btn) => {
                btn.textContent = this.enabled ? "🔊" : "🔇";
                btn.classList.toggle("is-muted", !this.enabled);
                btn.setAttribute("aria-pressed", this.enabled ? "true" : "false");
                btn.setAttribute("title", t("toggle"));
            });
            const amb = document.getElementById("pq-ambient-toggle");
            if (amb) {
                amb.textContent = this.ambientEnabled ? "🌌 " + t("ambient") + " ✓" : "🌌 " + t("ambient") + " ✕";
                amb.classList.toggle("is-off", !this.ambientEnabled);
            }
        },

        bindButton(el) {
            if (!el || el.dataset.pqSoundBound) return;
            el.dataset.pqSoundBound = "1";
            el.addEventListener("click", (e) => {
                e.preventDefault();
                this.toggle();
            });
        },

        injectTopbarButton() {
            const right = document.querySelector("#pq-topbar .pq-topbar-right");
            if (!right) return;
            const existing = right.querySelector("[data-pq-sound-toggle]");
            if (existing) { this.bindButton(existing); this.syncButtons(); return; }
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "pq-sound-toggle";
            btn.setAttribute("data-pq-sound-toggle", "1");
            right.insertBefore(btn, right.firstChild);
            this.bindButton(btn);
            this.syncButtons();
        },

        injectFloatingButton() {
            if (document.querySelector("#pq-topbar [data-pq-sound-toggle]")) return;
            const oldFab = document.querySelector(".pq-sound-fab");
            if (oldFab) { this.bindButton(oldFab); this.syncButtons(); return; }
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "pq-sound-fab";
            btn.setAttribute("data-pq-sound-toggle", "1");
            document.body.appendChild(btn);
            this.bindButton(btn);
            this.syncButtons();
        },

        // ---------- интеграция с игрой ----------
        hookGame() {
            if (this._hooked) return;
            if (typeof Game === "undefined") {
                if (!this._gameRetry) this._gameRetry = 0;
                if (this._gameRetry++ < 60) setTimeout(() => this.hookGame(), 150);
                return;
            }
            this._hooked = true;
            const self = this;
            const wrap = (name, after) => {
                const orig = Game[name];
                if (typeof orig !== "function" || orig.__pqSound) return;
                const wrapped = function () {
                    const result = orig.apply(this, arguments);
                    try { after.call(this, result, arguments); } catch (_) {}
                    return result;
                };
                wrapped.__pqSound = true;
                Game[name] = wrapped;
            };

            wrap("checkAnswer", function (result, args) {
                const solved = (Game.completedTaskIds || []).length;
                const failed = (Game.failedTaskIds || []).length;
                const before = this.__pqSoundMarks || (this.__pqSoundMarks = { solved: 0, failed: 0, level: Game.currentLevel });
                if (solved > before.solved) self.play("correct");
                else if (failed > before.failed) self.play("wrong");
                else if (Game.taskAttempts > 0 && result !== false) self.play("wrong");
                this.__pqSoundMarks = { solved, failed, level: Game.currentLevel };
            });
            wrap("spawnShieldWave", function () { self.play("shield"); });
            wrap("showVictory", function () { self.play("victory"); });
            wrap("showGameOver", function () { self.play("defeat"); });
            wrap("startLevel", function () {
                this.__pqSoundMarks = { solved: 0, failed: 0, level: Game.currentLevel };
                self.play("open");
            });
            wrap("triggerTask", function () { self.play("open"); });
            wrap("togglePause", function () { self.play("click"); });
        },

        hookDocument() {
            // Клики по кнопкам — ненавязчивый UI-звук
            document.addEventListener("click", (e) => {
                const el = e.target && e.target.closest ? e.target.closest("button, .answer-option, .level-card, .pq-grade-pill") : null;
                if (!el) return;
                if (el.matches("[data-pq-sound-toggle]")) return;
                this.play("click");
            }, true);
            // Разблокировка аудио после первого жеста
            const unlock = () => {
                this._unlocked = true;
                if (this.enabled) {
                    this.ensureCtx();
                    this.resume();
                    this.startAmbient();
                }
                document.removeEventListener("pointerdown", unlock);
                document.removeEventListener("keydown", unlock);
            };
            document.addEventListener("pointerdown", unlock);
            document.addEventListener("keydown", unlock);

            document.addEventListener("pq:lang-changed", () => this.syncButtons());
        },

        init() {
            this.readSettings();
            this.injectTopbarButton();
            this.injectFloatingButton();
            this.hookDocument();
            this.hookGame();
            // Шапка перерисовывается при смене класса — возвращаем кнопку.
            // Важно: не вызываем syncButtons из наблюдателя, иначе запись
            // textContent каждый раз порождает новую мутацию (бесконечный цикл).
            const observer = new MutationObserver(() => {
                const right = document.querySelector("#pq-topbar .pq-topbar-right");
                if (!right) return;
                if (!right.querySelector("[data-pq-sound-toggle]")) this.injectTopbarButton();
            });
            const topbar = document.getElementById("pq-topbar");
            if (topbar) observer.observe(topbar, { childList: true, subtree: true });
            window.addEventListener("pageshow", () => {
                this.injectTopbarButton();
                if (this.enabled && this._unlocked) this.startAmbient();
            });
            document.addEventListener("visibilitychange", () => {
                if (document.hidden) this.stopAmbient();
                else if (this.enabled && this._unlocked) this.startAmbient();
            });
            this.syncButtons();
        }
    };

    window.PQSound = PQSound;
    PQSound.readSettings();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(() => PQSound.init(), 0));
    } else {
        setTimeout(() => PQSound.init(), 0);
    }
})();
