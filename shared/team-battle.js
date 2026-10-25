/* ============================================================
   PQ TEAM BATTLE — «Интерактивная доска / Битва экипажей»
   Командный режим как в Kahoot: вопрос один на всех и висит на доске,
   оба экипажа отвечают на него одновременно — каждый игрок своим
   вариантом. Экипаж получает очки, только если верно ответила
   БОЛЬШАЯ ПОЛОВИНА команды; чем дружнее ответ, тем выше коэффициент.
   Светлая тема — по умолчанию, тёмная включается ползунком.
   ============================================================ */
(function () {
    "use strict";

    const L = {
        ru: {
            menuBtn: "Битва команд",
            kicker: "ИНТЕРАКТИВНАЯ ДОСКА · 7–9 КЛАСС",
            title: "БИТВА ЭКИПАЖЕЙ",
            lead: "Вопрос один на всех и висит на доске. Каждый игрок экипажа отвечает своим вариантом — команда получает очки, если верно ответила большая половина. Чем дружнее ответ, тем выше коэффициент.",
            crews: "Сколько экипажей?",
            players: "Игроков в экипаже",
            names: "Название экипажа",
            rounds: "Вопросов на доске",
            topic: "Тема",
            topicOf: "Тема · {0} класс",
            allTopics: "Все темы класса",
            start: "🚀 Начать битву",
            rules: "Каждый игрок отвечает своим вариантом · Enter — дальше · Esc — выход",
            round: "Вопрос",
            of: "из",
            shield: "Щит",
            score: "Очки",
            player: "Игрок",
            answeredAll: "Ответили все",
            answerFor: "Отвечает",
            answerOf: "Отвечает игрок {0} из {1}",
            boardHint: "Выберите вариант в панели экипажа",
            correct: "✅ Верно!",
            wrong: "❌ Ошибка",
            timeout: "⏰ Время вышло",
            next: "Дальше →",
            finish: "Итоги",
            winner: "Победил",
            again: "🔁 Ещё раз",
            exit: "Выйти",
            noTasks: "Не удалось найти подходящие вопросы для этой темы.",
            close: "Закрыть",
            tie: "Ничья — дружба побеждает!",
            right: "Верный ответ",
            time: "сек",
            shareLine: "Верно {0} из {1}",
            coefLine: "коэффициент ×{0}",
            gain: "+{0} очков",
            noGain: "меньше половины — без очков",
            halfGain: "ровно половина — без очков",
            teamDone: "ответили все",
            waiting: "отвечают",
            rulePoints: "Очки: 100 за вопрос, если верна большая половина команды. 75 % и выше — ×1,25, все верно — ×1,5.",
            ruleShield: "Щит: +4 % за дружный ответ, −14 % если половина и меньше ответили верно.",
            pointsShort: "очк.",
            place: "{0} место",
            playersShort: "игр."
        },
        en: {
            menuBtn: "Team battle",
            kicker: "INTERACTIVE BOARD · GRADES 7–9",
            title: "CREW BATTLE",
            lead: "One question on the board for everyone. Each crew member answers on their own — the crew scores only if the majority answered correctly, and the more united the crew, the higher the coefficient.",
            crews: "How many crews?",
            players: "Players per crew",
            names: "Crew name",
            rounds: "Questions on the board",
            topic: "Topic",
            topicOf: "Topic · grade {0}",
            allTopics: "All topics of the grade",
            start: "🚀 Start the battle",
            rules: "Each player answers on their own · Enter — next · Esc — exit",
            round: "Question",
            of: "of",
            shield: "Shield",
            score: "Score",
            player: "Player",
            answeredAll: "Everyone answered",
            answerFor: "Answering",
            answerOf: "Player {0} of {1} answering",
            boardHint: "Pick an option in the crew panel",
            correct: "✅ Correct!",
            wrong: "❌ Wrong",
            timeout: "⏰ Time is up",
            next: "Next →",
            finish: "Results",
            winner: "Winner",
            again: "🔁 Again",
            exit: "Exit",
            noTasks: "No suitable questions were found for this topic.",
            close: "Close",
            tie: "A draw — friendship wins!",
            right: "Correct answer",
            time: "sec",
            shareLine: "{0} of {1} correct",
            coefLine: "coefficient ×{0}",
            gain: "+{0} points",
            noGain: "less than half — no points",
            halfGain: "exactly half — no points",
            teamDone: "everyone answered",
            waiting: "answering",
            rulePoints: "Points: 100 per question when the majority of the crew is correct. 75 % and above — ×1.25, all correct — ×1.5.",
            ruleShield: "Shield: +4 % for a united answer, −14 % when half or fewer were correct.",
            pointsShort: "pts",
            place: "Place {0}",
            playersShort: "pl."
        },
        kk: {
            menuBtn: "Командалық сайыс",
            kicker: "ИНТЕРАКТИВТІ ТАҚТА · 7–9 СЫНЫП",
            title: "ЭКИПАЖДАР САЙЫСЫ",
            lead: "Сұрақ бәріне бір және тақтада тұрады. Әр ойыншы өз нұсқасын таңдайды — экипаж ұпайды команданың басым бөлігі дұрыс жауап берсе ғана алады; жауап неғұрлым біртұтас болса, коэффициент соғұрлым жоғары.",
            crews: "Қанша экипаж?",
            players: "Экипаждағы ойыншылар",
            names: "Экипаж атауы",
            rounds: "Тақтадағы сұрақтар",
            topic: "Тақырып",
            topicOf: "Тақырып · {0} сынып",
            allTopics: "Сыныптың барлық тақырыптары",
            start: "🚀 Сайысты бастау",
            rules: "Әр ойыншы өз нұсқасын таңдайды · Enter — келесі · Esc — шығу",
            round: "Сұрақ",
            of: "/",
            shield: "Қалқан",
            score: "Ұпай",
            player: "Ойыншы",
            answeredAll: "Барлығы жауап берді",
            answerFor: "Жауап беретін",
            answerOf: "{1} ішінен {0}-ойыншы жауап береді",
            boardHint: "Экипаж панелінде нұсқаны таңдаңыз",
            correct: "✅ Дұрыс!",
            wrong: "❌ Қате",
            timeout: "⏰ Уақыт бітті",
            next: "Келесі →",
            finish: "Қорытынды",
            winner: "Жеңімпаз",
            again: "🔁 Қайтадан",
            exit: "Шығу",
            noTasks: "Бұл тақырыпқа сәйкес сұрақтар табылмады.",
            close: "Жабу",
            tie: "Тең түсті — достық жеңді!",
            right: "Дұрыс жауап",
            time: "сек",
            shareLine: "{1} ішінен {0} дұрыс",
            coefLine: "коэффициент ×{0}",
            gain: "+{0} ұпай",
            noGain: "жартысынан азы — ұпай жоқ",
            halfGain: "дәл жартысы — ұпай жоқ",
            teamDone: "барлығы жауап берді",
            waiting: "жауап беруде",
            rulePoints: "Ұпай: команданың басым бөлігі дұрыс болса, сұраққа 100. 75 % және одан жоғары — ×1,25, барлығы дұрыс — ×1,5.",
            ruleShield: "Қалқан: біртұтас жауап үшін +4 %, жартысы және одан азы дұрыс болса −14 %.",
            pointsShort: "ұп.",
            place: "{0} орын",
            playersShort: "ойын."
        }
    };

    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || localStorage.getItem("pq_lang") || "ru"; } catch (_) { return "ru"; }
    }
    function t(key) {
        const l = lang();
        return (L[l] && L[l][key]) || L.ru[key] || key;
    }
    function fmt(key, ...args) {
        return String(t(key)).replace(/\{(\d+)\}/g, (m, i) => (args[Number(i)] !== undefined ? String(args[Number(i)]) : m));
    }
    function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function loc(obj) {
        if (!obj) return "";
        if (typeof obj === "string") return obj;
        if (Array.isArray(obj)) return obj.map(loc);
        const l = lang();
        return obj[l] || obj.ru || obj.en || obj.kk || "";
    }
    function num(v) {
        const n = Number(String(v == null ? "" : v).replace(",", "."));
        return Number.isFinite(n) ? n : NaN;
    }

    const COLORS = ["#00a6c8", "#ef8b1f", "#7c5cff"];
    const ICONS = ["🛡️", "⚡", "🔥"];
    const LETTERS = ["A", "B", "C", "D", "E"];
    const SECONDS = 45;

    /* Коэффициент за «дружность» ответа команды. */
    function coefFor(share) {
        if (share >= 0.999) return 1.5;
        if (share >= 0.75) return 1.25;
        if (share > 0.5) return 1;
        return 0;
    }
    function fmtCoef(c) {
        return String(c).replace(".", ",");
    }

    const Battle = {
        state: null,
        timer: null,
        _inited: false,

        init() {
            if (this._inited) return;
            this._inited = true;
            this.injectButtons();
            this.bindKeys();
            document.addEventListener("pq:lang-changed", () => this.refreshLabels());
            document.addEventListener("pq-theme-change", () => {
                const root = document.getElementById("pq-battle");
                if (root) root.dataset.theme = document.documentElement.getAttribute("data-theme") || "light";
            });
        },

        refreshLabels() {
            ["pq-battle-menu-btn", "pq-battle-teacher-btn"].forEach((id) => {
                const el = document.getElementById(id);
                if (el) el.remove();
            });
            this.injectButtons();
            const root = document.getElementById("pq-battle");
            if (!root) return;
            if (!this.state) this.renderSetup();
            else if (this.state.phase === "reveal") this.renderReveal();
            else this.renderQuestion();
        },

        injectButtons() {
            const menu = document.querySelector("#menu-screen .menu-buttons");
            if (menu && !document.getElementById("pq-battle-menu-btn")) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.id = "pq-battle-menu-btn";
                btn.className = "btn btn-battle";
                btn.innerHTML = `<span class="btn-icon">🏟</span><span>${esc(t("menuBtn"))}</span>`;
                btn.addEventListener("click", () => this.open());
                const start = menu.querySelector("#btn-start");
                if (start && start.nextSibling) menu.insertBefore(btn, start.nextSibling);
                else menu.insertBefore(btn, menu.firstChild);
            }
            const teacher = document.getElementById("teacher-screen");
            if (teacher && !document.getElementById("pq-battle-teacher-btn")) {
                const host = teacher.querySelector(".teacher-tabs") || teacher.querySelector(".modal-content") || teacher;
                const btn = document.createElement("button");
                btn.type = "button";
                btn.id = "pq-battle-teacher-btn";
                btn.className = "btn btn-secondary pq-battle-teacher";
                btn.innerHTML = `🏟 ${esc(t("menuBtn"))}`;
                btn.addEventListener("click", () => this.open());
                host.parentNode.insertBefore(btn, host.nextSibling);
            }
        },

        bindKeys() {
            if (this._keysBound) return;
            this._keysBound = true;
            document.addEventListener("keydown", (e) => {
                const root = document.getElementById("pq-battle");
                if (!root) return;
                if (e.key === "Escape") { this.close(); return; }
                if (this.state && this.state.phase === "reveal" && e.key === "Enter") { this.next(); }
            });
        },

        open() {
            this.close();
            const root = document.createElement("div");
            root.id = "pq-battle";
            root.className = "pq-battle";
            root.dataset.theme = document.documentElement.getAttribute("data-theme") || "light";
            document.body.appendChild(root);
            document.body.classList.add("pq-battle-open");
            this.renderSetup();
            if (typeof PQSound !== "undefined") PQSound.play("boss");
        },

        close() {
            if (this.timer) { clearInterval(this.timer); this.timer = null; }
            const el = document.getElementById("pq-battle");
            if (el) el.remove();
            document.body.classList.remove("pq-battle-open");
            this.state = null;
        },

        /* ---------- настройка ---------- */
        renderSetup() {
            const root = document.getElementById("pq-battle");
            if (!root) return;
            const grade = Number(window.CURRENT_GRADE) || 8;
            const levels = this.levelOptions();
            root.innerHTML = `
                <div class="pq-battle-setup">
                    <div class="pq-battle-kicker">${esc(t("kicker"))}</div>
                    <h1>${esc(t("title"))}</h1>
                    <p class="pq-battle-lead">${esc(t("lead"))}</p>
                    <div class="pq-battle-form">
                        <div class="pq-battle-field">
                            <label>${esc(t("crews"))}</label>
                            <div class="pq-battle-seg" id="pq-battle-count">
                                <button type="button" class="active" data-count="2">2</button>
                                <button type="button" data-count="3">3</button>
                            </div>
                        </div>
                        <div class="pq-battle-field">
                            <label>${esc(t("players"))}</label>
                            <div class="pq-battle-seg" id="pq-battle-players">
                                <button type="button" data-players="2">2</button>
                                <button type="button" class="active" data-players="4">4</button>
                                <button type="button" data-players="6">6</button>
                            </div>
                        </div>
                        <div class="pq-battle-field">
                            <label>${esc(t("rounds"))}</label>
                            <select id="pq-battle-rounds">
                                <option value="5">5</option>
                                <option value="8" selected>8</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="pq-battle-field">
                            <label>${esc(fmt("topicOf", grade))}</label>
                            <select id="pq-battle-topic">
                                <option value="all">${esc(t("allTopics"))}</option>
                                ${levels.map((l) => `<option value="${l.id}">${esc(l.name)}</option>`).join("")}
                            </select>
                        </div>
                    </div>
                    <div class="pq-battle-crew-inputs" id="pq-battle-crew-inputs"></div>
                    <div class="pq-battle-actions">
                        <button type="button" class="btn btn-primary pq-battle-start" id="pq-battle-start">${esc(t("start"))}</button>
                        <button type="button" class="btn btn-secondary" id="pq-battle-exit">${esc(t("exit"))}</button>
                    </div>
                    <div class="pq-battle-rules">
                        <div>${esc(t("rules"))}</div>
                        <div>${esc(t("rulePoints"))}</div>
                        <div>${esc(t("ruleShield"))}</div>
                    </div>
                </div>
            `;
            const countBox = root.querySelector("#pq-battle-count");
            countBox.querySelectorAll("button").forEach((b) => {
                b.addEventListener("click", () => {
                    countBox.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
                    b.classList.add("active");
                    this.renderCrewInputs(Number(b.dataset.count));
                });
            });
            root.querySelector("#pq-battle-players").querySelectorAll("button").forEach((b) => {
                b.addEventListener("click", () => {
                    root.querySelectorAll("#pq-battle-players button").forEach((x) => x.classList.remove("active"));
                    b.classList.add("active");
                });
            });
            this.renderCrewInputs(2);
            root.querySelector("#pq-battle-start").addEventListener("click", () => this.start());
            root.querySelector("#pq-battle-exit").addEventListener("click", () => this.close());
        },

        levelOptions() {
            const grade = Number(window.CURRENT_GRADE) || 8;
            const out = [];
            try {
                const cat = window.GRADE_CATALOG && window.GRADE_CATALOG[grade];
                if (cat && Array.isArray(cat.levels)) {
                    cat.levels.forEach((l) => {
                        const name = loc(l.name) || `#${l.id}`;
                        out.push({ id: l.id, name: `${l.id}. ${name}` });
                    });
                    return out;
                }
            } catch (_) {}
            if (typeof LEVELS_CONFIG !== "undefined") {
                LEVELS_CONFIG.forEach((l) => out.push({ id: l.id, name: `#${l.id} · ${l.topics ? l.topics.join(", ") : ""}` }));
            }
            return out;
        },

        renderCrewInputs(count) {
            const box = document.getElementById("pq-battle-crew-inputs");
            if (!box) return;
            const defaults = lang() === "en" ? ["Alpha", "Beta", "Gamma"] : lang() === "kk" ? ["Альфа", "Бета", "Гамма"] : ["Альфа", "Бета", "Гамма"];
            const prev = Array.from(box.querySelectorAll("input")).map((i) => i.value);
            box.innerHTML = Array.from({ length: count }).map((_, i) => `
                <label class="pq-battle-crew-input" style="--crew-color:${COLORS[i]}">
                    <span>${ICONS[i]} ${esc(t("names"))} ${i + 1}</span>
                    <input type="text" maxlength="18" value="${esc(prev[i] || defaults[i])}" data-crew="${i}">
                </label>
            `).join("");
        },

        /* ---------- игра ---------- */
        start() {
            const root = document.getElementById("pq-battle");
            if (!root) return;
            const count = Number(root.querySelector("#pq-battle-count .active")?.dataset.count || 2);
            const players = Number(root.querySelector("#pq-battle-players .active")?.dataset.players || 4);
            const names = Array.from(root.querySelectorAll("#pq-battle-crew-inputs input")).map((i, idx) => i.value.trim() || `Crew ${idx + 1}`);
            const rounds = Number(root.querySelector("#pq-battle-rounds").value) || 8;
            const topic = root.querySelector("#pq-battle-topic").value;
            const pool = this.buildPool(topic);
            if (!pool.length) {
                this.toast(t("noTasks"));
                return;
            }
            this.state = {
                phase: "ask",
                rounds,
                round: 1,
                index: 0,
                pool,
                question: pool[0],
                crews: names.slice(0, count).map((name, i) => ({
                    name, color: COLORS[i], icon: ICONS[i],
                    score: 0, shield: 100, correct: 0, wrong: 0,
                    share: 0, points: 0, coef: 0, delta: 0,
                    players: Array.from({ length: players }, () => ({ ans: null }))
                }))
            };
            this.renderQuestion();
            if (typeof PQSound !== "undefined") PQSound.play("open");
        },

        buildPool(topic) {
            let tasks = [];
            try {
                if (typeof Teacher !== "undefined" && Teacher.getAllTasks) tasks = Teacher.getAllTasks();
            } catch (_) {}
            if (!tasks.length) {
                try { if (typeof TASKS_DATABASE !== "undefined" && Array.isArray(TASKS_DATABASE)) tasks = tasks.concat(TASKS_DATABASE); } catch (_) {}
                try { if (typeof TASKS_DATABASE_EXT !== "undefined" && Array.isArray(TASKS_DATABASE_EXT)) tasks = tasks.concat(TASKS_DATABASE_EXT); } catch (_) {}
                try { if (typeof TASKS_DATABASE_CH !== "undefined" && Array.isArray(TASKS_DATABASE_CH)) tasks = tasks.concat(TASKS_DATABASE_CH); } catch (_) {}
                try { if (typeof TASKS_DATABASE_EXT2 !== "undefined" && Array.isArray(TASKS_DATABASE_EXT2)) tasks = tasks.concat(TASKS_DATABASE_EXT2); } catch (_) {}
                try { if (typeof TASKS_DATABASE_PRACTICAL !== "undefined" && Array.isArray(TASKS_DATABASE_PRACTICAL)) tasks = tasks.concat(TASKS_DATABASE_PRACTICAL); } catch (_) {}
                try { if (typeof TASKS_DATABASE_TYPES !== "undefined" && Array.isArray(TASKS_DATABASE_TYPES)) tasks = tasks.concat(TASKS_DATABASE_TYPES); } catch (_) {}
            }
            const grade = Number(window.CURRENT_GRADE) || 8;
            // На доске — только варианты ответа: так команда отвечает «как в Kahoot».
            const allowed = ["multiple-choice", "true-false"];
            return tasks.filter((task) => {
                if (!task || allowed.indexOf(task.type) === -1) return false;
                if (Number(task.grade) && Number(task.grade) !== grade) return false;
                if (topic !== "all") {
                    const topics = this.topicsForLevel(Number(topic));
                    if (topics.length && topics.indexOf(task.topic) === -1 && String(task.topic) !== "lesson:" + topic) return false;
                }
                if (task.type === "multiple-choice") {
                    const opts = task.options && (task.options[lang()] || task.options.ru);
                    if (!Array.isArray(opts) || opts.length < 2) return false;
                }
                return true;
            }).sort(() => Math.random() - 0.5).slice(0, 200);
        },

        topicsForLevel(id) {
            try {
                if (typeof LEVELS_CONFIG !== "undefined" && LEVELS_CONFIG[id - 1]) return LEVELS_CONFIG[id - 1].topics || [];
            } catch (_) {}
            return [];
        },

        optionsOf(task) {
            if (!task) return [];
            if (task.type === "true-false") {
                return [
                    lang() === "en" ? "True" : lang() === "kk" ? "Дұрыс" : "Верно",
                    lang() === "en" ? "False" : lang() === "kk" ? "Бұрыс" : "Неверно"
                ];
            }
            const opts = task.options && (task.options[lang()] || task.options.ru || []);
            return Array.isArray(opts) ? opts.map((o) => String(o)) : [];
        },

        correctIndex(task) {
            if (!task) return -1;
            if (task.type === "true-false") {
                const expected = typeof task.correctAnswer === "string" ? task.correctAnswer === "true" : !!task.correctAnswer;
                return expected ? 0 : 1;
            }
            return Number(task.correctAnswer);
        },

        renderQuestion() {
            const root = document.getElementById("pq-battle");
            const s = this.state;
            if (!root || !s) return;
            s.phase = "ask";
            s.answered = false;
            const task = s.question;
            const options = this.optionsOf(task);
            const answeredTotal = s.crews.reduce((n, c) => n + c.players.filter((p) => p.ans !== null).length, 0);
            const playersTotal = s.crews.reduce((n, c) => n + c.players.length, 0);

            root.innerHTML = `
                <div class="pq-battle-top">
                    <div class="pq-battle-brand">${esc(t("title"))}<span>${esc(t("kicker"))}</span></div>
                    <div class="pq-battle-crews" id="pq-battle-crews">${s.crews.map((c, i) => this.crewHudHtml(c, i)).join("")}</div>
                    <button type="button" class="pq-battle-close" id="pq-battle-close" aria-label="${esc(t("close"))}">×</button>
                </div>
                <div class="pq-battle-progress"><i style="width:${Math.round((answeredTotal / Math.max(1, playersTotal)) * 100)}%" id="pq-battle-progress"></i></div>
                <div class="pq-battle-stage">
                    <div class="pq-battle-roundno">${esc(t("round"))} ${s.round} ${esc(t("of"))} ${s.rounds} · ${esc(this.shortTopic(task))}</div>
                    <div class="pq-battle-question">${esc(loc(task.question))}</div>
                    <div class="pq-battle-answers${options.length <= 2 ? " single" : ""}" id="pq-battle-board">
                        ${options.map((o, i) => `
                            <div class="pq-battle-option" data-opt="${i}">
                                <span class="pq-battle-letter">${LETTERS[i] || i + 1}</span>
                                <span>${esc(o)}</span>
                            </div>`).join("")}
                    </div>
                    <div class="pq-battle-pads" id="pq-battle-pads">
                        ${s.crews.map((c, i) => this.crewPadHtml(c, i, options)).join("")}
                    </div>
                </div>
                <div class="pq-battle-bottom">
                    <div class="pq-battle-timer"><i id="pq-battle-timer-bar" style="width:100%"></i></div>
                    <div class="pq-battle-time" id="pq-battle-time">${SECONDS} ${esc(t("time"))}</div>
                    <div class="pq-battle-board-hint">${esc(t("boardHint"))}</div>
                </div>
            `;
            root.querySelector("#pq-battle-close").addEventListener("click", () => this.close());
            // onclick, а не addEventListener: панель перерисовывается после каждого
            // ответа, и повторная привязка не должна давать двойной клик.
            root.querySelectorAll("[data-pad-opt]").forEach((btn) => {
                btn.onclick = () => this.answerMember(Number(btn.dataset.crew), Number(btn.dataset.padOpt));
            });
            this.startTimer(SECONDS);
        },

        crewHudHtml(c, i) {
            return `
                <div class="pq-battle-crew" style="--crew-color:${c.color}">
                    <div class="pq-battle-crew-head"><span>${c.icon} ${esc(c.name)}</span><b>${c.score}</b></div>
                    <div class="pq-battle-shield"><i style="width:${Math.max(0, Math.min(100, c.shield))}%"></i></div>
                    <div class="pq-battle-crew-sub">${esc(t("shield"))} ${Math.round(c.shield)}%</div>
                </div>`;
        },

        crewPadHtml(c, ci, options) {
            const next = c.players.findIndex((p) => p.ans === null);
            const done = next === -1;
            const current = done ? -1 : next;
            const chips = c.players.map((p, i) => {
                let cls = "pq-battle-player";
                let mark = String(i + 1);
                if (p.ans !== null) {
                    cls += " answered";
                    mark = p.ans >= 0 && LETTERS[p.ans] ? LETTERS[p.ans] : "—";
                }
                if (i === current) cls += " current";
                return `<span class="${cls}" title="${esc(t("player"))} ${i + 1}">${mark}</span>`;
            }).join("");
            const pad = done
                ? `<div class="pq-battle-pad-done">✓ ${esc(t("teamDone"))}</div>`
                : options.map((o, i) => `
                    <button type="button" class="pq-battle-pad-btn" data-crew="${ci}" data-pad-opt="${i}"
                        aria-label="${esc(t("answerFor"))} ${current + 1}: ${esc(o)}">${LETTERS[i] || i + 1}</button>`).join("");
            return `
                <div class="pq-battle-pad" style="--crew-color:${c.color}" data-crew-panel="${ci}">
                    <div class="pq-battle-pad-head">
                        <span class="pq-battle-pad-name">${c.icon} ${esc(c.name)}</span>
                        <span class="pq-battle-pad-status">${done ? esc(t("answeredAll")) : esc(fmt("answerOf", current + 1, c.players.length))}</span>
                    </div>
                    <div class="pq-battle-players">${chips}</div>
                    <div class="pq-battle-pad-buttons">${pad}</div>
                </div>`;
        },

        answerMember(ci, oi) {
            const s = this.state;
            if (!s || s.phase !== "ask") return;
            const crew = s.crews[ci];
            if (!crew) return;
            const idx = crew.players.findIndex((p) => p.ans === null);
            if (idx === -1) return;
            crew.players[idx].ans = oi;
            if (typeof PQSound !== "undefined") PQSound.play("click");

            const panel = document.querySelector(`[data-crew-panel="${ci}"]`);
            if (panel && s.question) panel.outerHTML = this.crewPadHtml(crew, ci, this.optionsOf(s.question));
            const root = document.getElementById("pq-battle");
            if (root) {
                root.querySelectorAll("[data-pad-opt]").forEach((btn) => {
                    btn.onclick = () => this.answerMember(Number(btn.dataset.crew), Number(btn.dataset.padOpt));
                });
            }
            const answered = s.crews.reduce((n, c) => n + c.players.filter((p) => p.ans !== null).length, 0);
            const total = s.crews.reduce((n, c) => n + c.players.length, 0);
            const bar = document.getElementById("pq-battle-progress");
            if (bar) bar.style.width = Math.round((answered / Math.max(1, total)) * 100) + "%";
            if (answered >= total) this.resolve(false);
        },

        startTimer(seconds) {
            if (this.timer) clearInterval(this.timer);
            const total = seconds * 1000;
            const end = Date.now() + total;
            if (this.state) this.state.deadline = end;
            this.timer = setInterval(() => {
                const left = Math.max(0, end - Date.now());
                const bar = document.getElementById("pq-battle-timer-bar");
                const label = document.getElementById("pq-battle-time");
                if (bar) bar.style.width = (left / total) * 100 + "%";
                if (label) label.textContent = `${Math.ceil(left / 1000)} ${t("time")}`;
                if (left <= 0) {
                    clearInterval(this.timer);
                    this.timer = null;
                    if (this.state && this.state.phase === "ask") this.resolve(true);
                }
            }, 120);
        },

        resolve(byTimeout) {
            const s = this.state;
            if (!s || s.phase !== "ask") return;
            s.phase = "reveal";
            if (this.timer) { clearInterval(this.timer); this.timer = null; }
            const task = s.question;
            const correct = this.correctIndex(task);
            s.crews.forEach((c) => {
                c.players.forEach((p) => { if (p.ans === null) p.ans = -1; });
                const ok = c.players.filter((p) => p.ans === correct).length;
                const total = c.players.length;
                const share = total ? ok / total : 0;
                const coef = coefFor(share);
                const points = coef ? Math.round(100 * coef) : 0;
                c.share = share;
                c.solved = ok;
                c.coef = coef;
                c.points = points;
                c.score += points;
                c.correct += ok;
                c.wrong += total - ok;
                if (share > 0.5) {
                    c.delta = 4;
                    c.shield = Math.min(100, c.shield + 4);
                } else if (Math.abs(share - 0.5) < 1e-9) {
                    c.delta = 0;
                } else {
                    c.delta = -14;
                    c.shield = Math.max(0, c.shield - 14);
                }
            });
            if (typeof PQSound !== "undefined") PQSound.play(s.crews.some((c) => c.share > 0.5) ? "correct" : "wrong");
            this.renderReveal(byTimeout);
        },

        renderReveal(byTimeout) {
            const root = document.getElementById("pq-battle");
            const s = this.state;
            if (!root || !s) return;
            const task = s.question;
            const options = this.optionsOf(task);
            const correct = this.correctIndex(task);
            const last = s.round >= s.rounds;
            root.innerHTML = `
                <div class="pq-battle-top">
                    <div class="pq-battle-brand">${esc(t("title"))}<span>${esc(t("kicker"))}</span></div>
                    <div class="pq-battle-crews">${s.crews.map((c, i) => this.crewHudHtml(c, i)).join("")}</div>
                    <button type="button" class="pq-battle-close" id="pq-battle-close" aria-label="${esc(t("close"))}">×</button>
                </div>
                <div class="pq-battle-progress"><i style="width:100%"></i></div>
                <div class="pq-battle-stage">
                    <div class="pq-battle-roundno">${esc(t("round"))} ${s.round} ${esc(t("of"))} ${s.rounds}</div>
                    <div class="pq-battle-question">${esc(loc(task.question))}</div>
                    <div class="pq-battle-answers${options.length <= 2 ? " single" : ""}">
                        ${options.map((o, i) => `
                            <div class="pq-battle-option${i === correct ? " right" : ""}">
                                <span class="pq-battle-letter">${LETTERS[i] || i + 1}</span>
                                <span>${esc(o)}</span>
                                ${i === correct ? `<span class="pq-battle-option-tag">${esc(t("right"))}</span>` : ""}
                            </div>`).join("")}
                    </div>
                    <div class="pq-battle-reveal">
                        ${s.crews.map((c) => `
                            <div class="pq-battle-reveal-row" style="--crew-color:${c.color}">
                                <div class="pq-battle-reveal-name">${c.icon} ${esc(c.name)}</div>
                                <div class="pq-battle-reveal-share">${fmt("shareLine", c.solved, c.players.length)} · ${Math.round(c.share * 100)}%</div>
                                <div class="pq-battle-reveal-points ${c.points ? "good" : "bad"}">
                                    ${c.points
                                        ? `${esc(fmt("gain", c.points))} <span class="pq-battle-reveal-coef">${esc(fmt("coefLine", fmtCoef(c.coef)))}</span>`
                                        : esc(Math.abs(c.share - 0.5) < 1e-9 ? t("halfGain") : t("noGain"))}
                                </div>
                                <div class="pq-battle-reveal-shield ${c.delta > 0 ? "good" : c.delta < 0 ? "bad" : ""}">
                                    ${esc(t("shield"))} ${c.delta > 0 ? "+" : ""}${c.delta}%
                                </div>
                            </div>`).join("")}
                    </div>
                    <div class="pq-battle-feedback">
                        ${byTimeout ? `<div class="pq-battle-timeup">${esc(t("timeout"))}</div>` : ""}
                        <button type="button" class="btn btn-primary pq-battle-next" id="pq-battle-next">${esc(last ? t("finish") : t("next"))}</button>
                    </div>
                </div>
            `;
            root.querySelector("#pq-battle-close").addEventListener("click", () => this.close());
            root.querySelector("#pq-battle-next").addEventListener("click", () => this.next());
        },

        next() {
            const s = this.state;
            if (!s) return;
            if (s.round >= s.rounds) return this.showResults();
            s.round += 1;
            s.index += 1;
            if (s.index >= s.pool.length) s.index = 0;
            s.question = s.pool[s.index];
            s.crews.forEach((c) => c.players.forEach((p) => { p.ans = null; }));
            this.renderQuestion();
        },

        showResults() {
            const root = document.getElementById("pq-battle");
            const s = this.state;
            if (!root || !s) return;
            s.phase = "results";
            if (this.timer) { clearInterval(this.timer); this.timer = null; }
            const sorted = [...s.crews].sort((a, b) => b.score - a.score || b.shield - a.shield);
            const best = sorted[0];
            const tie = sorted.length > 1 && sorted[1].score === best.score && sorted[1].shield === best.shield;
            if (typeof PQSound !== "undefined") PQSound.play("victory");
            root.innerHTML = `
                <div class="pq-battle-results">
                    <div class="pq-battle-kicker">${esc(t("finish"))}</div>
                    <h1>${tie ? esc(t("tie")) : `${esc(t("winner"))}: ${esc(best.name)}`}</h1>
                    <div class="pq-battle-podium">
                        ${sorted.map((c, i) => `
                            <div class="pq-battle-place place-${i + 1}" style="--crew-color:${c.color}">
                                <div class="place-medal">${["🥇", "🥈", "🥉"][i] || "🎖"}</div>
                                <div class="place-name">${c.icon} ${esc(c.name)}</div>
                                <div class="place-score">${c.score} ${esc(t("score"))}</div>
                                <div class="place-shield">${esc(t("shield"))}: ${Math.round(c.shield)}% · ✅ ${c.correct} / ❌ ${c.wrong}</div>
                            </div>`).join("")}
                    </div>
                    <div class="pq-battle-actions">
                        <button type="button" class="btn btn-primary" id="pq-battle-again">${esc(t("again"))}</button>
                        <button type="button" class="btn btn-secondary" id="pq-battle-exit2">${esc(t("exit"))}</button>
                    </div>
                </div>
            `;
            root.querySelector("#pq-battle-again").addEventListener("click", () => this.open());
            root.querySelector("#pq-battle-exit2").addEventListener("click", () => this.close());
        },

        shortTopic(task) {
            const raw = String(this.topicLabel(task) || "");
            const clean = raw.replace(/^\s*#\d+\s*—\s*/, "").trim();
            return clean.length > 52 ? clean.slice(0, 51).trimEnd() + "…" : clean;
        },

        topicLabel(task) {
            if (!task) return "";
            const grade = Number(window.CURRENT_GRADE) || 8;
            // Тема задания вида «p4» — это параграф: показываем название уровня,
            // к которому он относится, а не технический ключ.
            try {
                if (typeof catalogLevelLabel === "function" && typeof LEVELS_CONFIG !== "undefined") {
                    const lvl = LEVELS_CONFIG.find((l) => Array.isArray(l.topics) && l.topics.indexOf(task.topic) !== -1);
                    if (lvl) return catalogLevelLabel(lvl.id, grade, false);
                }
            } catch (_) {}
            try {
                if (typeof I18n !== "undefined" && I18n.t) {
                    const label = I18n.t("topic_" + task.topic);
                    if (label && label !== "topic_" + task.topic) return label;
                }
            } catch (_) {}
            const raw = String(task.topic || "");
            return raw ? raw.replace(/^topic_/, "").toUpperCase() : "";
        },

        toast(text) {
            if (typeof showNotification === "function") {
                try { showNotification(text, "warning"); return; } catch (_) {}
            }
            const el = document.createElement("div");
            el.className = "pq-battle-toast";
            el.textContent = text;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 2200);
        }
    };

    window.PQTeamBattle = Battle;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(() => Battle.init(), 700));
    } else {
        setTimeout(() => Battle.init(), 700);
    }
})();
