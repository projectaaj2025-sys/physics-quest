/* ============================================================
   PQ TEAM BATTLE — «Интерактивная доска / Битва команд»
   Крупный интерфейс для проектора: 2–3 экипажа по очереди
   защищают щит города, отвечая на вопросы по физике.
   ============================================================ */
(function () {
    "use strict";

    const L = {
        ru: {
            menuBtn: "Битва команд",
            kicker: "ИНТЕРАКТИВНАЯ ДОСКА · 7–9 КЛАСС",
            title: "БИТВА ЭКИПАЖЕЙ",
            lead: "Класс делится на 2–3 экипажа. Команды по очереди отвечают на вопросы выбранного класса: на ход даётся 45 секунд. Верный ответ приносит +100 очков и +4% щита этой команды, ошибка или тайм-аут снимает у неё 14%. Выберите 5, 8 или 12 вопросов каждому экипажу; итоговый счёт и победитель появятся на доске.",
            crews: "Сколько экипажей?",
            names: "Названия экипажей",
            rounds: "Вопросов каждому экипажу",
            topic: "Тема",
            allTopics: "Все темы класса",
            start: "🚀 Начать битву",
            rules: "1–4 — выбрать ответ · Enter — дальше · Esc — выход",
            round: "Раунд",
            turnOf: "Отвечает",
            shield: "Щит",
            score: "Очки",
            correct: "✅ Верно! Щит укреплён",
            wrong: "❌ Ошибка! Щит пробит",
            timeout: "⏰ Время вышло",
            next: "Дальше →",
            finish: "Итоги",
            winner: "Победил",
            again: "🔁 Ещё раз",
            exit: "Выйти",
            answerPh: "Введите число",
            check: "Ответить",
            noTasks: "Не удалось найти подходящие вопросы для этой темы.",
            close: "Закрыть",
            tie: "Ничья — дружба побеждает!",
            right: "Верно",
            wrongShort: "Неверно",
            hint: "Подсказка класса",
            time: "сек"
        },
        en: {
            menuBtn: "Team battle",
            kicker: "INTERACTIVE BOARD · GRADES 7–9",
            title: "CREW BATTLE",
            lead: "Split the class into 2–3 crews. Teams take turns answering questions for the selected grade, with 45 seconds per turn. A correct answer earns 100 points and restores 4% of that crew’s shield; a wrong answer or timeout removes 14% from it. Choose 5, 8 or 12 questions per crew; the board shows the final score and winner.",
            crews: "How many crews?",
            names: "Crew names",
            rounds: "Questions per crew",
            topic: "Topic",
            allTopics: "All topics of the grade",
            start: "🚀 Start the battle",
            rules: "1–4 — choose an answer · Enter — next · Esc — exit",
            round: "Round",
            turnOf: "Now answering",
            shield: "Shield",
            score: "Score",
            correct: "✅ Correct! Shield reinforced",
            wrong: "❌ Wrong! Shield breached",
            timeout: "⏰ Time is up",
            next: "Next →",
            finish: "Results",
            winner: "Winner",
            again: "🔁 Again",
            exit: "Exit",
            answerPh: "Enter a number",
            check: "Answer",
            noTasks: "No suitable questions were found for this topic.",
            close: "Close",
            tie: "A draw — friendship wins!",
            right: "Correct",
            wrongShort: "Wrong",
            hint: "Class hint",
            time: "sec"
        },
        kk: {
            menuBtn: "Командалық сайыс",
            kicker: "ИНТЕРАКТИВТІ ТАҚТА · 7–9 СЫНЫП",
            title: "ЭКИПАЖДАР САЙЫСЫ",
            lead: "Сынып 2–3 экипажға бөлінеді. Экипаждар таңдалған сыныптың сұрақтарына кезекпен жауап береді, әр кезекке 45 секунд беріледі. Дұрыс жауап +100 ұпай және осы экипаж қалқанына +4% береді; қате жауап не уақыттың бітуі одан 14% алады. Әр экипажға 5, 8 немесе 12 сұрақ таңдаңыз; соңында тақтада ұпай мен жеңімпаз көрсетіледі.",
            crews: "Қанша экипаж?",
            names: "Экипаж атаулары",
            rounds: "Әр экипажқа сұрақ саны",
            topic: "Тақырып",
            allTopics: "Сыныптың барлық тақырыптары",
            start: "🚀 Сайысты бастау",
            rules: "1–4 — жауап таңдау · Enter — келесі · Esc — шығу",
            round: "Раунд",
            turnOf: "Жауап беретін",
            shield: "Қалқан",
            score: "Ұпай",
            correct: "✅ Дұрыс! Қалқан нығайтылды",
            wrong: "❌ Қате! Қалқан бұзылды",
            timeout: "⏰ Уақыт бітті",
            next: "Келесі →",
            finish: "Қорытынды",
            winner: "Жеңімпаз",
            again: "🔁 Қайтадан",
            exit: "Шығу",
            answerPh: "Санды енгізіңіз",
            check: "Жауап беру",
            noTasks: "Бұл тақырыпқа сәйкес сұрақтар табылмады.",
            close: "Жабу",
            tie: "Тең түсті — достық жеңді!",
            right: "Дұрыс",
            wrongShort: "Қате",
            hint: "Сынып кеңесі",
            time: "сек"
        }
    };
    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || "ru"; } catch (_) { return "ru"; }
    }
    function t(key) {
        const l = lang();
        return (L[l] && L[l][key]) || L.ru[key] || key;
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

    const COLORS = ["#00d9ff", "#ffb74d", "#b388ff"];
    const ICONS = ["🛡️", "⚡", "🔥"];

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
            else this.renderQuestion(true);
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
                if (this.state && this.state.phase === "question") {
                    if (e.key === "Enter" && this.state.answered) { this.next(); return; }
                    const n = parseInt(e.key, 10);
                    if (n >= 1 && n <= 4) {
                        const btn = root.querySelector(`[data-battle-answer="${n - 1}"]`);
                        if (btn && !btn.disabled) btn.click();
                    }
                }
            });
        },

        open() {
            this.close();
            const root = document.createElement("div");
            root.id = "pq-battle";
            root.className = "pq-battle";
            document.body.appendChild(root);
            document.body.classList.add("pq-battle-open");
            this.renderSetup();
            if (typeof PQSound !== "undefined") PQSound.play("boss");
        },

        close() {
            if (this.timer) { clearInterval(this.timer); this.timer = null; }
            document.getElementById("pq-battle")?.remove();
            document.body.classList.remove("pq-battle-open");
            this.state = null;
        },

        // ---------- настройка ----------
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
                            <label>${esc(t("rounds"))}</label>
                            <select id="pq-battle-rounds">
                                <option value="5">5</option>
                                <option value="8" selected>8</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="pq-battle-field">
                            <label>${esc(t("topic"))} · ${grade} ${esc(t("grade"))}</label>
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
                    <div class="pq-battle-rules">${esc(t("rules"))}</div>
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

        start() {
            const root = document.getElementById("pq-battle");
            if (!root) return;
            const count = Number(root.querySelector("#pq-battle-count .active")?.dataset.count || 2);
            const names = Array.from(root.querySelectorAll("#pq-battle-crew-inputs input")).map((i, idx) => i.value.trim() || `Crew ${idx + 1}`);
            const rounds = Number(root.querySelector("#pq-battle-rounds").value) || 8;
            const topic = root.querySelector("#pq-battle-topic").value;
            const pool = this.buildPool(topic);
            if (!pool.length) {
                this.toast(t("noTasks"));
                return;
            }
            this.state = {
                phase: "question",
                crews: names.slice(0, count).map((name, i) => ({ name: name, color: COLORS[i], icon: ICONS[i], score: 0, shield: 100, correct: 0, wrong: 0 })),
                rounds: rounds,
                round: 1,
                turn: 0,
                pool: pool,
                index: 0,
                question: null,
                answered: false,
                startedAt: Date.now()
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
                // без Teacher (например, страница без teacher.js) собираем все банки заданий сами,
                // иначе битва молча оставалась без вопросов
                try { if (typeof TASKS_DATABASE !== "undefined" && Array.isArray(TASKS_DATABASE)) tasks = tasks.concat(TASKS_DATABASE); } catch (_) {}
                try { if (typeof TASKS_DATABASE_EXT !== "undefined" && Array.isArray(TASKS_DATABASE_EXT)) tasks = tasks.concat(TASKS_DATABASE_EXT); } catch (_) {}
                try { if (typeof TASKS_DATABASE_CH !== "undefined" && Array.isArray(TASKS_DATABASE_CH)) tasks = tasks.concat(TASKS_DATABASE_CH); } catch (_) {}
                try { if (typeof TASKS_DATABASE_EXT2 !== "undefined" && Array.isArray(TASKS_DATABASE_EXT2)) tasks = tasks.concat(TASKS_DATABASE_EXT2); } catch (_) {}
                try { if (typeof TASKS_DATABASE_PRACTICAL !== "undefined" && Array.isArray(TASKS_DATABASE_PRACTICAL)) tasks = tasks.concat(TASKS_DATABASE_PRACTICAL); } catch (_) {}
                try { if (typeof TASKS_DATABASE_TYPES !== "undefined" && Array.isArray(TASKS_DATABASE_TYPES)) tasks = tasks.concat(TASKS_DATABASE_TYPES); } catch (_) {}
            }
            const grade = Number(window.CURRENT_GRADE) || 8;
            const allowed = ["multiple-choice", "true-false", "numeric"];
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
            }).sort(() => Math.random() - 0.5).slice(0, 160);
        },

        topicsForLevel(id) {
            try {
                if (typeof LEVELS_CONFIG !== "undefined" && LEVELS_CONFIG[id - 1]) return LEVELS_CONFIG[id - 1].topics || [];
            } catch (_) {}
            return [];
        },

        // ---------- игра ----------
        renderHud() {
            const s = this.state;
            if (!s) return "";
            const totalTurns = s.rounds * s.crews.length;
            const done = (s.round - 1) * s.crews.length + s.turn;
            const pct = totalTurns ? Math.min(100, Math.round((done / totalTurns) * 100)) : 0;
            return `
                <div class="pq-battle-top">
                    <div class="pq-battle-brand">🏟 ${esc(t("title"))} <span>${esc(t("round"))} ${s.round} / ${s.rounds}</span></div>
                    <div class="pq-battle-crews">
                        ${s.crews.map((c, i) => `
                            <div class="pq-battle-crew ${i === s.turn ? "active" : ""}" style="--crew-color:${c.color}">
                                <div class="pq-battle-crew-head"><span>${c.icon} ${esc(c.name)}</span><b>${c.score}</b></div>
                                <div class="pq-battle-shield"><i style="width:${Math.max(0, c.shield)}%"></i></div>
                                <div class="pq-battle-crew-sub">${esc(t("shield"))} ${Math.max(0, Math.round(c.shield))}%</div>
                            </div>`).join("")}
                    </div>
                    <button type="button" class="pq-battle-close" id="pq-battle-close" aria-label="${esc(t("close"))}">×</button>
                </div>
                <div class="pq-battle-progress"><i style="width:${pct}%"></i></div>
            `;
        },

        renderQuestion(reuse) {
            const root = document.getElementById("pq-battle");
            const s = this.state;
            if (!root || !s) return;
            let q;
            if (reuse && s.question) {
                // повторный рендер (например, смена языка) — тот же вопрос и тот же таймер
                q = s.question;
            } else {
                q = s.pool[s.index % s.pool.length];
                s.index++;
                s.question = q;
                s.answered = false;
            }
            const crew = s.crews[s.turn];
            const question = loc(q.question);
            const type = q.type;
            let answers = "";
            if (type === "multiple-choice") {
                const opts = q.options ? (q.options[lang()] || q.options.ru || []) : [];
                answers = opts.map((opt, i) => `
                    <button type="button" class="pq-battle-answer" data-battle-answer="${i}" style="--crew-color:${crew.color}">
                        <span class="pq-battle-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${esc(loc(opt))}</span>
                    </button>`).join("");
            } else if (type === "true-false") {
                answers = `
                    <button type="button" class="pq-battle-answer" data-battle-answer="0"><span class="pq-battle-letter">✓</span><span>${lang() === "en" ? "True" : lang() === "kk" ? "Шын" : "Верно"}</span></button>
                    <button type="button" class="pq-battle-answer" data-battle-answer="1"><span class="pq-battle-letter">×</span><span>${lang() === "en" ? "False" : lang() === "kk" ? "Жалған" : "Неверно"}</span></button>`;
            } else {
                answers = `<div class="pq-battle-numeric">
                    <input type="text" inputmode="decimal" id="pq-battle-input" placeholder="${esc(t("answerPh"))}" autocomplete="off">
                    <button type="button" class="btn btn-primary" id="pq-battle-submit-num">${esc(t("check"))}</button>
                </div>`;
            }
            root.innerHTML = `
                ${this.renderHud()}
                <div class="pq-battle-stage">
                    <div class="pq-battle-turn" style="--crew-color:${crew.color}"><span>${crew.icon} ${esc(t("turnOf"))}:</span> ${esc(crew.name)}</div>
                    <div class="pq-battle-question">${esc(question)}</div>
                    <div class="pq-battle-answers ${type === "numeric" ? "single" : ""}">${answers}</div>
                    <div class="pq-battle-feedback" id="pq-battle-feedback"></div>
                </div>
                <div class="pq-battle-bottom">
                    <div class="pq-battle-timer"><i id="pq-battle-timer-bar"></i></div>
                    <div class="pq-battle-time" id="pq-battle-time">45 ${esc(t("time"))}</div>
                </div>
            `;
            root.querySelector("#pq-battle-close").addEventListener("click", () => this.close());

            if (type === "numeric") {
                const submit = () => this.answerNumeric();
                root.querySelector("#pq-battle-submit-num").addEventListener("click", submit);
                root.querySelector("#pq-battle-input").addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
                setTimeout(() => root.querySelector("#pq-battle-input")?.focus(), 80);
            } else {
                root.querySelectorAll("[data-battle-answer]").forEach((btn) => {
                    btn.addEventListener("click", () => this.answerChoice(Number(btn.dataset.battleAnswer)));
                });
            }
            if (reuse) {
                const left = s.deadline ? Math.max(1, Math.ceil((s.deadline - Date.now()) / 1000)) : 45;
                this.startTimer(left, s.deadline);
            } else {
                this.startTimer(45);
            }
        },

        startTimer(seconds, deadline) {
            if (this.timer) clearInterval(this.timer);
            const total = seconds * 1000;
            const end = deadline || (Date.now() + total);
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
                    if (this.state && !this.state.answered) this.answerChoice(-1);
                }
            }, 120);
        },

        answerNumeric() {
            const s = this.state;
            if (!s || s.answered) return;
            const input = document.getElementById("pq-battle-input");
            if (!input) return;
            const value = Number(String(input.value).replace(",", "."));
            if (!Number.isFinite(value)) {
                input.classList.add("pq-invalid");
                return;
            }
            const expected = Number(s.question.correctAnswer);
            const tol = Number(s.question.tolerance) || Math.max(Math.abs(expected) * 0.02, 0.01);
            this.resolve(Math.abs(value - expected) <= tol, lang() === "en" ? `${expected}` : `${expected}`);
        },

        answerChoice(idx) {
            const s = this.state;
            if (!s || s.answered) return;
            if (idx === -1) return this.resolve(false, "");
            const q = s.question;
            let correct = false;
            if (q.type === "multiple-choice") correct = Number(idx) === Number(q.correctAnswer);
            else if (q.type === "true-false") {
                const expected = typeof q.correctAnswer === "string" ? q.correctAnswer === "true" : !!q.correctAnswer;
                correct = (idx === 0) === expected;
            }
            const truth = typeof q.correctAnswer === "string" ? q.correctAnswer === "true" : !!q.correctAnswer;
            const answerText = q.type === "multiple-choice"
                ? loc((q.options[lang()] || q.options.ru || [])[q.correctAnswer])
                : (truth ? (lang() === "en" ? "True" : lang() === "kk" ? "Шын" : "Верно") : (lang() === "en" ? "False" : lang() === "kk" ? "Жалған" : "Неверно"));
            this.resolve(correct, answerText, idx);
        },

        resolve(correct, answerText, idx) {
            const s = this.state;
            if (!s || s.answered) return;
            s.answered = true;
            if (this.timer) { clearInterval(this.timer); this.timer = null; }
            const crew = s.crews[s.turn];
            if (correct) {
                crew.score += 100;
                crew.correct++;
                crew.shield = Math.min(100, crew.shield + 4);
                if (typeof PQSound !== "undefined") PQSound.play("correct");
            } else {
                crew.wrong++;
                crew.shield = Math.max(0, crew.shield - 14);
                if (typeof PQSound !== "undefined") PQSound.play("wrong");
            }
            const fb = document.getElementById("pq-battle-feedback");
            if (fb) {
                fb.innerHTML = `
                    <div class="pq-battle-result ${correct ? "good" : "bad"}">
                        <strong>${correct ? esc(t("correct")) : (answerText ? esc(t("wrong")) : esc(t("timeout") + " · " + t("wrong")))}</strong>
                        ${answerText ? `<span>${esc(t("right"))}: <b>${esc(answerText)}</b></span>` : ""}
                    </div>
                    <button type="button" class="btn btn-primary pq-battle-next" id="pq-battle-next">${esc(t("next"))}</button>`;
                fb.querySelector("#pq-battle-next").addEventListener("click", () => this.next());
                fb.querySelector("#pq-battle-next").focus();
            }
            document.querySelectorAll("#pq-battle [data-battle-answer]").forEach((b) => { b.disabled = true; });
            document.querySelectorAll("#pq-battle .pq-battle-crew").forEach((el, i) => {
                if (i === s.turn) {
                    const bar = el.querySelector(".pq-battle-shield i");
                    if (bar) bar.style.width = Math.max(0, s.crews[i].shield) + "%";
                    const sub = el.querySelector(".pq-battle-crew-sub");
                    if (sub) sub.textContent = `${t("shield")} ${Math.round(s.crews[i].shield)}%`;
                }
            });
        },

        next() {
            const s = this.state;
            if (!s || !s.answered) return;
            const totalTurns = s.rounds * s.crews.length;
            const done = (s.round - 1) * s.crews.length + s.turn + 1;
            if (done >= totalTurns) return this.showResults();
            s.turn = (s.turn + 1) % s.crews.length;
            if (s.turn === 0) s.round++;
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
