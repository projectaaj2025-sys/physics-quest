/* ============================================================
   PQ BATTLE PHONE — телефон ученика.
   Открывается по QR с доски: battle.html?room=CODE&grade=8
   Ученик вводит имя, ждёт старт, отвечает на вопросы.
   Команду он не видит до финала — состав команд случайный.
   ============================================================ */
(function () {
    "use strict";

    const T = {
        ru: {
            title: "БИТВА ЭКИПАЖЕЙ",
            joinTitle: "Зайти в игру",
            joinLead: "Введи имя — доска увидит тебя в списке. Команды собираются случайно, поэтому до финала никто не знает, кто с кем.",
            nameLabel: "Твоё имя",
            namePh: "Например, Айдана",
            join: "Войти в игру",
            joining: "Подключаемся к доске…",
            waitTitle: "Ты в игре",
            waitLead: "Смотри на доску: учитель начнёт битву. Отвечать будешь здесь, на телефоне.",
            playersOnBoard: "Игроков на доске: {0}",
            teamHidden: "Команду узнаешь в конце игры.",
            started: "Битва началась! Приготовься…",
            question: "Вопрос {0} из {1}",
            answered: "Ответ принят",
            answeredLead: "Ждём остальных…",
            right: "Верно!",
            wrong: "Неверно",
            rightAnswer: "Правильный ответ — {0}",
            nextWait: "Смотри на доску: дальше — снова здесь.",
            resultTitle: "Игра окончена",
            resultLead: "Твой результат: {0} из {1}",
            crewLine: "Твоя команда: {0}",
            placeLine: "Итог команды: {0} место",
            notFound: "Комната не найдена",
            notFoundLead: "Проверь код на доске или попроси новый QR.",
            lost: "Связь с доской потерялась",
            lostLead: "Обнови страницу и зайди снова по QR.",
            codeLabel: "Код комнаты",
            codePh: "4 символа",
            enter: "Подключиться",
            offline: "Нет связи с доской. Проверь интернет и попробуй ещё раз.",
            localNote: "Локальный режим: доска в этом же браузере.",
            waitingTeacher: "Ждём учителя…",
            you: "ты"
        },
        kk: {
            title: "ЭКИПАЖТАР ШАЙҚАСЫ",
            joinTitle: "Ойынға кіру",
            joinLead: "Атыңды жаз — тақта сені тізімде көреді. Командалар кездейсоқ жиналады, сондықтан финалға дейін кіммен бірге екеніңді ешкім білмейді.",
            nameLabel: "Сенің атың",
            namePh: "Мысалы, Айдана",
            join: "Ойынға кіру",
            joining: "Тақтаға қосылып жатырмыз…",
            waitTitle: "Сен ойындасың",
            waitLead: "Тақтаға қара: мұғалім шайқасты бастайды. Жауапты осы жерде, телефонда бересің.",
            playersOnBoard: "Тақтадағы ойыншылар: {0}",
            teamHidden: "Командаңды ойын соңында білесің.",
            started: "Шайқас басталды! Дайындал…",
            question: "{1} сұрақтың {0}-сы",
            answered: "Жауап қабылданды",
            answeredLead: "Қалғандарын күтіп отырмыз…",
            right: "Дұрыс!",
            wrong: "Қате",
            rightAnswer: "Дұрыс жауап — {0}",
            nextWait: "Тақтаға қара: әрі қарай тағы осында.",
            resultTitle: "Ойын аяқталды",
            resultLead: "Сенің нәтижең: {1} ішінен {0}",
            crewLine: "Сенің командаң: {0}",
            placeLine: "Команда қорытындысы: {0} орын",
            notFound: "Бөлме табылмады",
            notFoundLead: "Тақтадағы кодты тексер немесе жаңа QR сұра.",
            lost: "Тақтамен байланыс үзілді",
            lostLead: "Бетті жаңартып, QR арқылы қайта кір.",
            codeLabel: "Бөлме коды",
            codePh: "4 таңба",
            enter: "Қосылу",
            offline: "Тақтамен байланыс жоқ. Интернетті тексеріп, қайталап көр.",
            localNote: "Жергілікті режим: тақта осы браузерде.",
            waitingTeacher: "Мұғалімді күтіп отырмыз…",
            you: "сен"
        },
        en: {
            title: "CREW BATTLE",
            joinTitle: "Join the game",
            joinLead: "Type your name — the board will show you in the list. Crews are drawn at random, so nobody knows their team until the end.",
            nameLabel: "Your name",
            namePh: "e.g. Aidana",
            join: "Join the game",
            joining: "Connecting to the board…",
            waitTitle: "You are in",
            waitLead: "Watch the board: the teacher will start the battle. You answer here, on your phone.",
            playersOnBoard: "Players on the board: {0}",
            teamHidden: "You will learn your crew at the end of the game.",
            started: "The battle has started! Get ready…",
            question: "Question {0} of {1}",
            answered: "Answer sent",
            answeredLead: "Waiting for the others…",
            right: "Correct!",
            wrong: "Wrong",
            rightAnswer: "The right answer is {0}",
            nextWait: "Watch the board: the next question appears here.",
            resultTitle: "Game over",
            resultLead: "Your result: {0} of {1}",
            crewLine: "Your crew: {0}",
            placeLine: "Crew result: place {0}",
            notFound: "Room not found",
            notFoundLead: "Check the code on the board or ask for a new QR.",
            lost: "Connection to the board lost",
            lostLead: "Reload the page and join again with the QR.",
            codeLabel: "Room code",
            codePh: "4 characters",
            enter: "Connect",
            offline: "No connection to the board. Check the internet and try again.",
            localNote: "Local mode: the board is in this same browser.",
            waitingTeacher: "Waiting for the teacher…",
            you: "you"
        }
    };

    const LETTERS = ["A", "B", "C", "D", "E"];

    function detectLang() {
        const q = new URLSearchParams(location.search).get("lang");
        if (q && T[q]) return q;
        const nav = (navigator.language || "ru").slice(0, 2).toLowerCase();
        return T[nav] ? nav : "ru";
    }

    const lang = detectLang();
    const t = (key) => (T[lang] && T[lang][key]) || T.ru[key] || key;
    const fmt = (key, ...args) => String(t(key)).replace(/\{(\d)\}/g, (m, i) => (args[Number(i)] !== undefined ? args[Number(i)] : m));

    const params = new URLSearchParams(location.search);
    const code = (params.get("room") || params.get("code") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    const grade = params.get("grade") || "8";

    const app = document.getElementById("bp-app");
    const body = document.getElementById("bp-body");
    const roomBadge = document.getElementById("bp-room");
    if (roomBadge) roomBadge.textContent = code || "—";
    const headTitle = document.querySelector(".bp-head b");
    if (headTitle) headTitle.textContent = t("title");

    let client = null;
    let screen = "join";
    let answers = { right: 0, total: 0 };
    let timerId = null;
    let current = null;

    function esc(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    function savedName() {
        try {
            const raw = localStorage.getItem("physicsquest_account_v1");
            if (!raw) return "";
            const acc = JSON.parse(raw);
            return acc && acc.name ? String(acc.name) : "";
        } catch (_) { return ""; }
    }

    function stopTimer() {
        if (timerId) { clearInterval(timerId); timerId = null; }
    }

    /* ---------- экраны ---------- */

    function renderJoin(note) {
        screen = "join";
        stopTimer();
        body.innerHTML = `
            <div class="bp-card">
                <h1>${esc(t("joinTitle"))}</h1>
                <p>${esc(t("joinLead"))}</p>
                ${note ? `<p class="bp-note">${esc(note)}</p>` : ""}
                <label for="bp-name">${esc(t("nameLabel"))}</label>
                <input type="text" id="bp-name" maxlength="24" autocomplete="name" value="${esc(savedName())}" placeholder="${esc(t("namePh"))}">
            </div>
            <button type="button" class="bp-btn" id="bp-join">${esc(t("join"))}</button>
        `;
        const input = document.getElementById("bp-name");
        const go = () => {
            const name = (input.value || "").trim() || (lang === "en" ? "Player" : lang === "kk" ? "Ойыншы" : "Игрок");
            startJoin(name);
        };
        document.getElementById("bp-join").addEventListener("click", go);
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    }

    function renderConnecting() {
        screen = "connecting";
        body.innerHTML = `
            <div class="bp-card bp-center">
                <div class="bp-emoji bp-pulse">📡</div>
                <h1>${esc(t("joining"))}</h1>
                <p>${esc(t("teamHidden"))}</p>
            </div>`;
    }

    function renderWait(count) {
        screen = "wait";
        body.innerHTML = `
            <div class="bp-card bp-center">
                <div class="bp-emoji">✅</div>
                <h1>${esc(t("waitTitle"))}</h1>
                <p class="bp-big">${esc(t("waitLead"))}</p>
                <p class="bp-note">${esc(fmt("playersOnBoard", count != null ? count : 1))}</p>
                <p class="bp-note">${esc(t("teamHidden"))}</p>
            </div>`;
    }

    function renderQuestion(q) {
        screen = "question";
        current = q;
        const secs = Number(q.seconds) || 45;
        const deadline = Date.now() + secs * 1000;
        body.innerHTML = `
            <div class="bp-card">
                <div class="bp-meta"><span>${esc(fmt("question", q.i, q.total))}</span><span id="bp-left">${secs} с</span></div>
                <div class="bp-timer"><i id="bp-bar"></i></div>
                <p class="bp-question">${esc(q.question)}</p>
                <div class="bp-options" id="bp-opts">
                    ${(q.options || []).map((o, i) => `
                        <button type="button" class="bp-opt" data-opt="${i}">
                            <b>${LETTERS[i] || i + 1}</b><span>${esc(o)}</span>
                        </button>`).join("")}
                </div>
            </div>`;
        document.querySelectorAll("#bp-opts .bp-opt").forEach((btn) => {
            btn.onclick = () => pick(Number(btn.dataset.opt));
        });
        stopTimer();
        timerId = setInterval(() => {
            const left = Math.max(0, deadline - Date.now());
            const bar = document.getElementById("bp-bar");
            const lab = document.getElementById("bp-left");
            if (bar) bar.style.width = (left / (secs * 1000)) * 100 + "%";
            if (lab) lab.textContent = Math.ceil(left / 1000) + " с";
            if (left <= 0) {
                stopTimer();
                if (screen === "question") markPicked(-1);
            }
        }, 150);
    }

    function markPicked(idx) {
        document.querySelectorAll("#bp-opts .bp-opt").forEach((b) => {
            b.disabled = true;
            if (Number(b.dataset.opt) === idx) b.classList.add("picked");
        });
        screen = "answered";
        const card = document.querySelector(".bp-card");
        if (card) {
            const note = document.createElement("p");
            note.className = "bp-note bp-center";
            note.style.marginTop = "14px";
            note.textContent = t("answeredLead");
            card.appendChild(note);
        }
    }

    function pick(opt) {
        if (screen !== "question") return;
        stopTimer();
        if (client) client.send({ t: "answer", opt });
        markPicked(opt);
    }

    function renderReveal(msg) {
        screen = "reveal";
        stopTimer();
        const opts = (current && current.options) || [];
        body.innerHTML = `
            <div class="bp-card">
                <div class="bp-center">
                    <div class="bp-emoji ${msg.right ? "bp-ok" : "bp-bad"}">${msg.right ? "🎉" : "🙈"}</div>
                    <h1 class="${msg.right ? "bp-ok" : "bp-bad"}">${esc(msg.right ? t("right") : t("wrong"))}</h1>
                    <p class="bp-note">${esc(fmt("rightAnswer", LETTERS[msg.correct] || msg.correct + 1))}</p>
                </div>
                <div class="bp-options" style="margin-top:14px">
                    ${opts.map((o, i) => `
                        <div class="bp-opt ${i === msg.correct ? "good" : ""}" style="cursor:default">
                            <b>${LETTERS[i] || i + 1}</b><span>${esc(o)}</span>
                        </div>`).join("")}
                </div>
            </div>
            <p class="bp-note bp-center">${esc(t("nextWait"))}</p>`;
    }

    function renderResult(msg) {
        screen = "end";
        stopTimer();
        const crews = Array.isArray(msg.crews) ? msg.crews : [];
        body.innerHTML = `
            <div class="bp-card bp-center">
                <div class="bp-emoji">🏁</div>
                <h1>${esc(t("resultTitle"))}</h1>
                <p class="bp-big">${esc(fmt("resultLead", msg.right, msg.total))}</p>
                <p class="bp-note">${esc(fmt("crewLine", msg.crew))}</p>
                <p class="bp-note">${esc(fmt("placeLine", msg.place))}</p>
            </div>
            ${crews.length ? `<div class="bp-card">
                ${crews.map((c) => `
                    <div class="bp-crew${c.place === msg.place ? " mine" : ""}">
                        <span>${esc(c.name)}</span><b>${c.score}</b>
                    </div>`).join("")}
            </div>` : ""}`;
    }

    function renderError(title, lead) {
        screen = "error";
        stopTimer();
        body.innerHTML = `
            <div class="bp-card bp-center">
                <div class="bp-emoji">📵</div>
                <h1>${esc(title)}</h1>
                <p>${esc(lead)}</p>
            </div>`;
    }

    /* ---------- связь с доской ---------- */

    function startJoin(name) {
        renderConnecting();
        const room = code || "";
        if (!room) { renderJoin(t("offline")); return; }
        client = window.PQBattleRoom.join(room, name, {
            onMode(mode) {
                if (mode === "local") {
                    const wait = document.querySelector(".bp-card .bp-note");
                    if (wait && screen === "connecting") wait.textContent = t("localNote");
                }
            },
            onStatus(status) {
                if (status === "not-found") renderError(t("notFound"), t("notFoundLead"));
                else if (status === "closed") renderError(t("lost"), t("lostLead"));
            },
            onData(msg) {
                if (!msg || !msg.t) return;
                if (msg.t === "lobby") renderWait(msg.n);
                else if (msg.t === "start") renderWait(null);
                else if (msg.t === "q") renderQuestion(msg);
                else if (msg.t === "reveal") renderReveal(msg);
                else if (msg.t === "end") renderResult(msg);
                else if (msg.t === "closed") renderError(t("notFound"), t("notFoundLead"));
            }
        });
    }

    /* ---------- старт ---------- */

    if (!code) {
        renderJoin(t("waitingTeacher"));
    } else {
        renderJoin("");
    }
})();
