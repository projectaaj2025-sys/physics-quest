/* ============================================================
   RPG EXTRA — «Чёрный ящик», «Техобслуживание», «Щит класса»,
   сюжетные выборы с последствиями и дедлайны назначений.
   ============================================================ */

const RPG_DAY_MS = 86400000;
const RPG_REVIEW_MAX = 40;
const RPG_MAINT_LEN = 3;

/* ---------------- ЛОКАЛЬНЫЕ ХЕЛПЕРЫ ---------------- */
function rpgL(ru, en, kk) {
    return { ru, en, kk };
}

function rpgPlain(value) {
    if (value === null || value === undefined) return "";
    return String(value).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function rpgTopicLabel(topic) {
    try {
        if (typeof Teacher !== "undefined" && Teacher.getTopicDisplayName) {
            const name = Teacher.getTopicDisplayName(topic);
            if (name && name.indexOf("topic_") !== 0) return name;
        }
    } catch (e) {}
    return String(topic || "").replace(/^lesson:/, "§");
}

function rpgFindTask(taskId) {
    try {
        return Teacher.getAllTasks().find(t => t.id === taskId) || null;
    } catch (e) {
        return null;
    }
}

function rpgDayStart(ts) {
    const d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}

function rpgMissionWord(n) {
    const count = Math.abs(Number(n) || 0);
    const lang = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    if (lang === "en") return count === 1 ? "mission" : "missions";
    if (lang === "kk") return "миссия";
    const m10 = count % 10;
    const m100 = count % 100;
    if (m10 === 1 && m100 !== 11) return "миссия";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "миссии";
    return "миссий";
}

function rpgDayWord(n) {
    const count = Math.abs(Number(n) || 0);
    const lang = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    if (lang === "en") return count === 1 ? "day" : "days";
    if (lang === "kk") return "күн";
    const m10 = count % 10;
    const m100 = count % 100;
    if (m10 === 1 && m100 !== 11) return "день";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "дня";
    return "дней";
}

/** Календарная разница в днях: 0 — сегодня, 1 — завтра, −1 — вчера. */
function rpgDueCal(dueAt) {
    const due = new Date(dueAt);
    if (isNaN(due.getTime())) return null;
    return Math.round((rpgDayStart(due.getTime()) - rpgDayStart(Date.now())) / RPG_DAY_MS);
}

function rpgDueLabel(dueAt) {
    const cal = rpgDueCal(dueAt);
    if (cal === null) return "";
    if (cal === 0) return rpgT("dueToday");
    if (cal === 1) return rpgT("dueTomorrow");
    if (cal > 1) return rpgT("dueDays", cal);
    const ago = Math.abs(cal);
    return rpgT("dueOverdue", ago + " " + rpgDayWord(ago));
}

function rpgDueShort(dueAt) {
    const d = new Date(dueAt);
    if (isNaN(d.getTime())) return "";
    return String(d.getDate()).padStart(2, "0") + "." + String(d.getMonth() + 1).padStart(2, "0");
}

function rpgDueChipClass(dueAt, completed) {
    if (completed) return "done";
    const cal = rpgDueCal(dueAt);
    if (cal === null) return "";
    if (cal < 0) return "overdue";
    if (cal <= 1) return "soon";
    return "calm";
}

/* ---------------- СЮЖЕТНЫЕ ВЫБОРЫ ---------------- */
const RPG_STORY_NODES = [
    {
        id: "act1-dispatch",
        levelId: 10,
        title: rpgL("Купол выдержал. Куда направить резерв?",
            "The dome held. Where does the reserve go?",
            "Күмбез шыдады. Резервді қайда жұмсаймыз?"),
        text: rpgL("Первый шторм позади. В диспетчерской два пути: вернуть генератору полную мощность или вложить резерв в сам купол.",
            "The first storm is over. The control room has two options: restore the generator to full power or pour the reserve into the dome itself.",
            "Бірінші дауыл артта қалды. Диспетчерлік бөлмеде екі жол бар: генераторға толық қуат қайтару немесе резервті күмбездің өзіне салу."),
        options: [
            {
                id: "generator", icon: "⚙️",
                label: rpgL("Починить генератор", "Repair the generator", "Генераторды жөндеу"),
                desc: rpgL("+20% опыта на 3 миссии · запас щита −10%",
                    "+20% XP for 3 missions · shield capacity −10%",
                    "3 миссияға +20% тәжірибе · щит қоры −10%"),
                reply: rpgL("Лада: «Генератор гудит ровно. Энергии больше — но купол теперь держится на честном слове».",
                    "Lada: “The generator hums steadily. More energy — but the dome now holds by a thread.”",
                    "Лада: «Генератор біркелкі гуілдейді. Энергия көбірек — бірақ күмбез әзер ұстап тұр»."),
                mods: { xp: 0.2, shield: -0.1 }, missions: 3
            },
            {
                id: "dome", icon: "🛡",
                label: rpgL("Усилить купол", "Reinforce the dome", "Күмбезді күшейту"),
                desc: rpgL("+15 к стартовому щиту на 2 миссии · кристаллов −15%",
                    "+15 starting shield for 2 missions · crystals −15%",
                    "2 миссияға бастапқы щитке +15 · кристалдар −15%"),
                reply: rpgL("Виктор: «Щит — это не стена, это обещание. Пока он держится, город верит».",
                    "Viktor: “A shield is not a wall, it is a promise. While it holds, the city believes.”",
                    "Виктор: «Щит — қабырға емес, бұл уәде. Ол тұрғанда қала сенеді»."),
                mods: { startShield: 15, crystals: -0.15 }, missions: 2
            }
        ]
    },
    {
        id: "act2-archives",
        levelId: 18,
        title: rpgL("Архив или резонатор?", "Archives or resonator?", "Мұрағат па, резонатор ма?"),
        text: rpgL("Второй контур стабилен. Виктор предлагает открыть старые архивы проекта, Лада — настроить резонатор на новую частоту.",
            "The second circuit is stable. Viktor offers to open the project archives; Lada wants to tune the resonator to a new frequency.",
            "Екінші контур тұрақты. Виктор ескі жоба мұрағатын ашуды ұсынады, Лада резонаторды жаңа жиілікке баптауды ұсынады."),
        options: [
            {
                id: "archives", icon: "📚",
                label: rpgL("Открыть архивы", "Open the archives", "Мұрағатты ашу"),
                desc: rpgL("+2 подсказки в каждой миссии на 3 миссии · опыта −5%",
                    "+2 hints in every mission for 3 missions · XP −5%",
                    "3 миссияға әр миссияда +2 кеңес · тәжірибе −5%"),
                reply: rpgL("Виктор: «Читай внимательно. В архивах больше вопросов, чем ответов, — и это хорошо».",
                    "Viktor: “Read carefully. The archives hold more questions than answers — and that is good.”",
                    "Виктор: «Мұқият оқы. Мұрағатта жауаптан гөрі сұрақ көп — және бұл жақсы»."),
                mods: { hints: 2, xp: -0.05 }, missions: 3
            },
            {
                id: "resonator", icon: "🔆",
                label: rpgL("Настроить резонатор", "Tune the resonator", "Резонаторды баптау"),
                desc: rpgL("+20% очков за ответы на 3 миссии",
                    "+20% score for answers for 3 missions",
                    "3 миссияға жауап үшін +20% ұпай"),
                reply: rpgL("Лада: «Резонатор поёт. Каждый верный ответ теперь звучит громче».",
                    "Lada: “The resonator sings. Every correct answer sounds louder now.”",
                    "Лада: «Резонатор ән салады. Әр дұрыс жауап енді қаттырақ естіледі»."),
                mods: { score: 0.2 }, missions: 3
            }
        ]
    },
    {
        id: "act3-grid",
        levelId: 31,
        title: rpgL("Город просит темпа", "The city asks for pace", "Қала қарқын сұрайды"),
        text: rpgL("Электросеть держит нагрузку. Можно перевести город на ночной режим и сэкономить кристаллы — или вложить всё в щит.",
            "The grid is holding. You can switch the city to night mode and save crystals — or put everything into the shield.",
            "Электр желісі жүктемені ұстап тұр. Қаланы түнгі режимге көшіріп, кристал үнемдеуге болады — немесе бәрін щитқа салуға."),
        options: [
            {
                id: "night", icon: "🌙",
                label: rpgL("Ночной режим", "Night mode", "Түнгі режим"),
                desc: rpgL("+25% кристаллов на 2 миссии · опыта −10%",
                    "+25% crystals for 2 missions · XP −10%",
                    "2 миссияға +25% кристал · тәжірибе −10%"),
                reply: rpgL("Лада: «Огни города притушены. Зато кристаллов хватит на новый контур».",
                    "Lada: “The city lights are dimmed. But there are enough crystals for a new circuit.”",
                    "Лада: «Қала шамдары бәсеңдеді. Бірақ кристал жаңа контурға жетеді»."),
                mods: { crystals: 0.25, xp: -0.1 }, missions: 2
            },
            {
                id: "surge", icon: "⚡",
                label: rpgL("Форсаж щита", "Shield surge", "Щит форсажы"),
                desc: rpgL("−15% темпа астероидов и +10% щита на 3 миссии",
                    "−15% asteroid pace and +10% shield for 3 missions",
                    "3 миссияға астероид қарқыны −15% және щит +10%"),
                reply: rpgL("Виктор: «Щит стал шире. Астероидам придётся подождать».",
                    "Viktor: “The shield grew wider. The asteroids will have to wait.”",
                    "Виктор: «Щит кеңейді. Астероидтар күте тұрады»."),
                mods: { spawn: -0.15, shield: 0.1 }, missions: 3
            }
        ]
    },
    {
        id: "act5-beacon",
        levelId: 44,
        title: rpgL("Маяк зовёт в шторм", "The beacon calls into the storm", "Маяк дауылға шақырады"),
        text: rpgL("Маяк показывает коридор внутрь шторма. Можно довериться сигналу — или укрепить город и ждать.",
            "The beacon reveals a corridor into the storm. You can trust the signal — or fortify the city and wait.",
            "Маяк дауылдың ішіне дәліз көрсетеді. Сигналға сенуге болады — немесе қаланы бекітіп, күтуге."),
        options: [
            {
                id: "storm", icon: "🧭",
                label: rpgL("Довериться шторму", "Trust the storm", "Дауылға сену"),
                desc: rpgL("+15% опыта и +15% кристаллов, но астероиды чаще — 3 миссии",
                    "+15% XP and +15% crystals, but asteroids come faster — 3 missions",
                    "3 миссияға +15% тәжірибе және +15% кристал, бірақ астероидтар жиірек"),
                reply: rpgL("Виктор: «Шторм не враг. Он просто говорит быстрее, чем мы слушаем».",
                    "Viktor: “The storm is no enemy. It just speaks faster than we listen.”",
                    "Виктор: «Дауыл жау емес. Ол біз тыңдағаннан жылдам сөйлейді»."),
                mods: { xp: 0.15, crystals: 0.15, spawn: 0.2 }, missions: 3
            },
            {
                id: "fortify", icon: "🔧",
                label: rpgL("Укрепить город", "Fortify the city", "Қаланы бекіту"),
                desc: rpgL("+25% щита и +20 к старту на 2 миссии · очков −10%",
                    "+25% shield and +20 starting for 2 missions · score −10%",
                    "2 миссияға +25% щит және бастапқыға +20 · ұпай −10%"),
                reply: rpgL("Лада: «Стены держат. Иногда мудрость — это подождать».",
                    "Lada: “The walls hold. Sometimes wisdom is simply waiting.”",
                    "Лада: «Қабырғалар ұстап тұр. Кейде даналық — күту»."),
                mods: { shield: 0.25, startShield: 20, score: -0.1 }, missions: 2
            }
        ]
    }
];

function rpgStoryNode(nodeId) {
    return RPG_STORY_NODES.find(n => n.id === nodeId) || null;
}

function rpgStoryNodeForLevel(levelId) {
    const id = Number(levelId);
    if (!Number.isFinite(id)) return null;
    return RPG_STORY_NODES.find(n => n.levelId === id) || null;
}

/* ---------------- РАСШИРЕНИЕ RPG ---------------- */
Object.assign(RPG, {
    /* ===== A1. ЧЁРНЫЙ ЯЩИК: СБОР ОШИБОК ===== */
    captureGiven(game, task) {
        if (!game || !task) return "";
        if (task.type === "multiple-choice" || task.type === "true-false") {
            const sel = document.querySelector("#task-body .answer-option.selected");
            return sel ? rpgPlain(sel.textContent) : "";
        }
        if (task.type === "fill-blank") {
            const input = document.getElementById("answer-input");
            return input ? String(input.value || "").trim() : "";
        }
        if (task.type === "matching") {
            const pairs = (game.matchingState && game.matchingState.pairs) || [];
            if (!pairs.length) return "";
            const text = idx => {
                const el = document.querySelector(`#match-left .matching-item[data-idx="${idx}"]`);
                return el ? rpgPlain(el.textContent) : String(idx);
            };
            const rightText = idx => {
                const el = document.querySelector(`#match-right .matching-item[data-idx="${idx}"]`);
                return el ? rpgPlain(el.textContent) : String(idx);
            };
            return pairs.map(p => `${text(p.left)} → ${rightText(p.right)}`).join("; ");
        }
        return "";
    },

    captureMiss(game) {
        const run = this.run;
        const task = game && game.currentTask;
        if (!run || !run.active || !task) return;
        run.misses = Array.isArray(run.misses) ? run.misses : [];
        if (run.misses.some(m => m.taskId === task.id)) return;
        const question = rpgPlain(I18n.getLocalized(task, "question"));
        let correct = "";
        try { correct = rpgPlain(game.getCorrectAnswerText(task)); } catch (e) {}
        run.misses.push({
            taskId: task.id,
            levelId: run.levelId,
            topic: task.topic || "",
            type: task.type || "multiple-choice",
            question,
            given: this._pendingGiven || rpgT("bbNoAnswer"),
            correct,
            explanation: rpgPlain(I18n.getLocalized(task, "explanation")),
            formula: rpgPlain(I18n.getLocalized(task, "formula")),
            at: new Date().toISOString()
        });
        this._pendingGiven = "";
    },

    enqueueReview(run, victory) {
        const misses = (run && run.misses) || [];
        if (!misses.length) return 0;
        const queue = this.state.review.queue = Array.isArray(this.state.review.queue) ? this.state.review.queue : [];
        const now = Date.now();
        let added = 0;
        misses.forEach(m => {
            let item = queue.find(q => q.taskId === m.taskId);
            if (!item) {
                item = {
                    id: "rv_" + Math.random().toString(36).slice(2, 9),
                    taskId: m.taskId,
                    addedAt: new Date(now).toISOString(),
                    misses: 0,
                    streak: 0,
                    understood: false
                };
                queue.push(item);
                added += 1;
            }
            Object.assign(item, {
                levelId: m.levelId,
                topic: m.topic,
                topicName: rpgTopicLabel(m.topic),
                type: m.type,
                question: m.question,
                given: m.given,
                correct: m.correct,
                explanation: m.explanation,
                formula: m.formula,
                lastAt: new Date(now).toISOString(),
                dueAt: new Date(now).toISOString(),
                streak: 0,
                understood: false
            });
            item.misses = (Number(item.misses) || 0) + 1;
        });
        queue.sort((a, b) => String(b.lastAt || "").localeCompare(String(a.lastAt || "")));
        this.state.review.queue = queue.slice(0, RPG_REVIEW_MAX);
        this.saveSoon();
        return added;
    },

    reviewQueue() {
        return (this.state && this.state.review && Array.isArray(this.state.review.queue))
            ? this.state.review.queue : [];
    },

    dueReviewItems() {
        const now = Date.now();
        return this.reviewQueue().filter(item => {
            const due = item.dueAt ? new Date(item.dueAt).getTime() : 0;
            return !isNaN(due) && due <= now;
        });
    },

    /* ===== A1. ЧЁРНЫЙ ЯЩИК: РЕНДЕР ===== */
    bbCardHtml(entry, idx, opts = {}) {
        const given = escapeHtml(entry.given || rpgT("bbNoAnswer"));
        const correct = entry.correct ? formatFormula(entry.correct) : "";
        const explain = entry.explanation ? formatFormula(entry.explanation) : "";
        const formula = entry.formula ? `<div class="rpg-bb-formula">${formatFormula(entry.formula)}</div>` : "";
        const theory = `
            <div class="rpg-bb-theory" hidden>
                <div class="rpg-bb-theory-title">📘 ${escapeHtml(rpgT("bbTheoryTitle"))}</div>
                ${formula}
                ${explain ? `<div class="rpg-bb-theory-text">${explain}</div>` : ""}
                <ol class="rpg-bb-steps">
                    <li>${escapeHtml(rpgT("bbTheoryStep1"))}</li>
                    <li>${escapeHtml(rpgT("bbTheoryStep2"))}</li>
                    <li>${escapeHtml(rpgT("bbTheoryStep3"))}</li>
                </ol>
                <small class="rpg-bb-due">${escapeHtml(rpgT("maintDueTomorrow"))}</small>
            </div>`;
        return `
            <article class="rpg-bb-card${entry.understood ? " understood" : ""}" data-bb-card="${idx}">
                <div class="rpg-bb-card-head">
                    <span class="rpg-bb-topic">${escapeHtml(entry.topicName || rpgTopicLabel(entry.topic))}</span>
                    <span class="rpg-bb-idx">#${idx + 1}</span>
                </div>
                <div class="rpg-bb-q">${formatFormula(entry.question || "")}</div>
                <div class="rpg-bb-answers">
                    <div class="rpg-bb-answer given"><span>${escapeHtml(rpgT("bbGiven"))}</span><b>${given}</b></div>
                    <div class="rpg-bb-answer right"><span>${escapeHtml(rpgT("bbCorrect"))}</span><b>${correct}</b></div>
                </div>
                ${explain ? `<div class="rpg-bb-explain">${explain}</div>` : ""}
                ${theory}
                <div class="rpg-bb-actions">
                    <button type="button" class="rpg-bb-btn ok" data-bb-action="understood" data-bb-idx="${idx}" data-bb-task="${escapeHtml(entry.taskId || "")}">✓ ${escapeHtml(rpgT("bbUnderstood"))}</button>
                    <button type="button" class="rpg-bb-btn" data-bb-action="explain" data-bb-idx="${idx}">💡 <span>${escapeHtml(rpgT("bbExplain"))}</span></button>
                </div>
            </article>`;
    },

    renderBlackBox(victory, summary) {
        const container = document.querySelector(victory ? ".victory-content" : ".gameover-content");
        if (!container) return;
        const old = container.querySelector(".rpg-blackbox");
        if (old) old.remove();
        const queue = this.reviewQueue();
        let items = (summary && Array.isArray(summary.misses)) ? summary.misses.slice(0, 4) : [];
        if (items.length < 2) {
            const extra = queue
                .filter(q => !items.some(m => m.taskId === q.taskId))
                .slice(0, 2 - items.length)
                .map(q => ({
                    taskId: q.taskId, topic: q.topic, topicName: q.topicName,
                    question: q.question, given: q.given, correct: q.correct,
                    explanation: q.explanation, formula: q.formula, understood: q.understood
                }));
            items = items.concat(extra);
        }
        if (!items.length) return;
        this._bbEntries = items;
        const block = document.createElement("div");
        block.className = "rpg-blackbox";
        block.innerHTML = `
            <div class="rpg-bb-head">
                <div class="rpg-bb-icon">🗃</div>
                <div class="rpg-bb-head-main">
                    <div class="rpg-bb-kicker">${escapeHtml(rpgT("bbKicker"))}</div>
                    <div class="rpg-bb-title">${escapeHtml(rpgT("bbTitle"))} · ${items.length}</div>
                </div>
            </div>
            <p class="rpg-bb-sub">${escapeHtml(rpgT("bbSub"))}</p>
            <div class="rpg-bb-list">${items.map((it, i) => this.bbCardHtml(it, i)).join("")}</div>
            <div class="rpg-bb-foot">
                <button type="button" class="btn btn-primary rpg-bb-maint" data-bb="maint">${escapeHtml(rpgT("bbMaintenance"))}</button>
                <span class="rpg-bb-saved">${escapeHtml(rpgT("bbSavedLine", queue.length))}</span>
            </div>
        `;
        const anchor = container.querySelector(".rpg-run-result");
        const buttons = container.querySelector(victory ? ".victory-buttons" : ".gameover-buttons");
        if (anchor && anchor.parentNode === container) anchor.insertAdjacentElement("afterend", block);
        else if (buttons && buttons.parentNode === container) container.insertBefore(block, buttons);
        else container.appendChild(block);
    },

    openBlackBox() {
        const modal = document.getElementById("rpg-blackbox-modal");
        if (!modal) return;
        const queue = this.reviewQueue();
        const body = modal.querySelector("#rpg-bb-modal-body");
        this._bbEntries = queue.slice(0, 12);
        const list = queue.length
            ? this._bbEntries.map((it, i) => this.bbCardHtml(it, i)).join("")
            : `<div class="rpg-bb-empty">✅ ${escapeHtml(rpgT("bbEmpty"))}</div>`;
        body.innerHTML = `
            <div class="rpg-bb-kicker">${escapeHtml(rpgT("bbKicker"))}</div>
            <h2 class="rpg-bb-modal-title">${escapeHtml(rpgT("bbArchiveTitle"))}</h2>
            <p class="rpg-bb-sub">${escapeHtml(rpgT("bbArchiveSub"))}</p>
            <div class="rpg-bb-queue-line">${escapeHtml(rpgT("bbQueueLine", queue.length, Number(this.state.review.understood) || 0))}</div>
            <div class="rpg-bb-list">${list}</div>
            <div class="rpg-bb-foot">
                <button type="button" class="btn btn-primary" data-bb="maint">${escapeHtml(rpgT("bbMaintenance"))}</button>
                <button type="button" class="btn btn-secondary" data-bb="close">${escapeHtml(rpgT("maintClose"))}</button>
            </div>
        `;
        modal.classList.add("active");
    },

    closeBlackBox() {
        const modal = document.getElementById("rpg-blackbox-modal");
        if (modal) modal.classList.remove("active");
    },

    markUnderstood(taskId, idx) {
        const item = this.reviewQueue().find(q => q.taskId === taskId) || this._bbEntries?.[idx];
        if (item && !item.understood) {
            item.understood = true;
            this.state.review.understood = (Number(this.state.review.understood) || 0) + 1;
            this.saveSoon();
        }
        document.querySelectorAll(`[data-bb-card="${idx}"]`).forEach(card => {
            card.classList.add("understood");
            const btn = card.querySelector('[data-bb-action="understood"]');
            if (btn) { btn.textContent = "✓ " + rpgT("bbUnderstoodDone"); btn.disabled = true; }
        });
    },

    toggleExplain(idx) {
        document.querySelectorAll(`[data-bb-card="${idx}"] .rpg-bb-theory`).forEach(box => {
            const willShow = box.hasAttribute("hidden");
            if (willShow) box.removeAttribute("hidden");
            else box.setAttribute("hidden", "");
            const btn = box.closest(".rpg-bb-card")?.querySelector('[data-bb-action="explain"] span');
            if (btn) btn.textContent = willShow ? rpgT("bbHideExplain") : rpgT("bbExplain");
        });
    },

    /* ===== A1-БОНУС. ТЕХОБСЛУЖИВАНИЕ ===== */
    maintCandidates() {
        const supported = new Set(["multiple-choice", "true-false", "fill-blank"]);
        const list = [];
        this.reviewQueue().forEach(item => {
            if (!supported.has(item.type)) return;
            const task = rpgFindTask(item.taskId);
            if (!task) return;
            list.push({ item, task, due: item.dueAt ? new Date(item.dueAt).getTime() : 0 });
        });
        list.sort((a, b) => (a.due - b.due) || String(a.item.lastAt || "").localeCompare(String(b.item.lastAt || "")));
        return list;
    },

    startMaintenance() {
        const all = this.maintCandidates();
        if (!all.length) {
            this.toast("🛠", rpgT("maintNoTasks"), "", "warning");
            return;
        }
        const due = all.filter(x => x.due <= Date.now());
        const picked = (due.length ? due : all).slice(0, RPG_MAINT_LEN);
        this._maint = {
            items: picked,
            idx: 0,
            correct: 0,
            answered: false,
            xp: 0,
            crystals: 0
        };
        const modal = document.getElementById("rpg-maint-modal");
        if (modal) modal.classList.add("active");
        this.renderMaintenance();
    },

    renderMaintenance() {
        const modal = document.getElementById("rpg-maint-modal");
        const body = modal && modal.querySelector("#rpg-maint-body");
        const st = this._maint;
        if (!body || !st) return;
        if (st.idx >= st.items.length) return this.renderMaintSummary();
        const { task } = st.items[st.idx];
        const item = st.items[st.idx].item;
        const progress = st.items.map((_, i) =>
            `<i class="${i < st.idx ? "done" : i === st.idx ? "now" : ""}"></i>`).join("");
        let inputHtml = "";
        if (task.type === "fill-blank") {
            inputHtml = `<div class="rpg-maint-fill">
                <input type="text" id="rpg-maint-input" autocomplete="off" placeholder="${escapeHtml(rpgT("maintEnter"))}" />
                <button type="button" class="btn btn-primary" data-maint="check">${escapeHtml(rpgT("maintCheck"))}</button>
            </div>`;
        }
        body.innerHTML = `
            <div class="rpg-maint-head">
                <div class="rpg-maint-kicker">${escapeHtml(rpgT("maintKicker"))}</div>
                <div class="rpg-maint-step">${escapeHtml(rpgT("maintProgress", st.idx + 1, st.items.length))}</div>
            </div>
            <div class="rpg-maint-progress">${progress}</div>
            <div class="rpg-maint-topic">${escapeHtml(rpgTopicLabel(task.topic))}</div>
            <div class="rpg-maint-question">${formatFormula(rpgPlain(I18n.getLocalized(task, "question")))}</div>
            ${inputHtml}
            <div class="rpg-maint-options" id="rpg-maint-options">${this.maintOptionsHtml(task)}</div>
            <div class="rpg-maint-feedback" id="rpg-maint-feedback"></div>
            <div class="rpg-maint-foot" id="rpg-maint-foot" hidden>
                <button type="button" class="btn btn-primary" data-maint="next">${escapeHtml(rpgT("maintNext"))}</button>
            </div>
        `;
        const input = document.getElementById("rpg-maint-input");
        if (input) {
            input.focus();
            input.addEventListener("keydown", e => { if (e.key === "Enter") this.answerMaintenance(input.value); });
        }
    },

    maintOptionsHtml(task) {
        if (task.type === "fill-blank") return "";
        let options = [];
        if (task.type === "true-false") {
            options = [I18n.t("trueLabel"), I18n.t("falseLabel")];
        } else {
            options = Array.isArray(I18n.getLocalized(task, "options")) ? I18n.getLocalized(task, "options") : [];
        }
        return options.map((opt, i) =>
            `<button type="button" class="rpg-maint-opt" data-maint-opt="${i}">${formatFormula(String(opt))}</button>`).join("");
    },

    answerMaintenance(rawValue) {
        const st = this._maint;
        if (!st || st.answered) return;
        const entry = st.items[st.idx];
        const task = entry.task;
        let value = rawValue;
        if (task.type !== "fill-blank") value = Number(rawValue);
        const isCorrect = this.maintCheck(task, value);
        st.answered = true;
        const item = entry.item;
        if (isCorrect) {
            st.correct += 1;
            item.streak = (Number(item.streak) || 0) + 1;
            item.understood = true;
            const steps = [1, 3, 7];
            const nextDays = steps[Math.min(item.streak - 1, steps.length - 1)];
            if (item.streak >= 3) {
                this.state.review.queue = this.reviewQueue().filter(q => q.taskId !== item.taskId);
                this.state.review.fixed = (Number(this.state.review.fixed) || 0) + 1;
            } else {
                item.dueAt = new Date(Date.now() + nextDays * RPG_DAY_MS).toISOString();
            }
        } else {
            item.streak = 0;
            item.misses = (Number(item.misses) || 0) + 1;
            item.dueAt = new Date(Date.now() + RPG_DAY_MS).toISOString();
        }
        this.saveSoon();

        const feedback = document.getElementById("rpg-maint-feedback");
        document.querySelectorAll("#rpg-maint-options .rpg-maint-opt").forEach(btn => {
            const idx = Number(btn.getAttribute("data-maint-opt"));
            btn.disabled = true;
            if (task.type === "true-false") {
                if (idx === (task.correctAnswer ? 0 : 1)) btn.classList.add("right");
            } else if (idx === Number(task.correctAnswer)) {
                btn.classList.add("right");
            }
            if (!isCorrect && String(idx) === String(value)) btn.classList.add("wrong");
        });
        const input = document.getElementById("rpg-maint-input");
        if (input) {
            input.disabled = true;
            input.classList.add(isCorrect ? "right" : "wrong");
        }
        if (feedback) {
            feedback.className = "rpg-maint-feedback show " + (isCorrect ? "ok" : "bad");
            let html = `<b>${escapeHtml(isCorrect ? rpgT("maintCorrect") : rpgT("maintWrong"))}</b>`;
            if (!isCorrect) {
                let correctText = "";
                try { correctText = Game.getCorrectAnswerText(task); } catch (e) {}
                html += `<div class="rpg-maint-answer">${escapeHtml(rpgT("bbCorrect"))}: ${formatFormula(rpgPlain(correctText))}</div>`;
            }
            const explanation = rpgPlain(I18n.getLocalized(task, "explanation"));
            if (explanation) html += `<div class="rpg-maint-explain">${formatFormula(explanation)}</div>`;
            if (!isCorrect) html += `<div class="rpg-maint-due">🕘 ${escapeHtml(rpgT("maintDueTomorrow"))}</div>`;
            feedback.innerHTML = html;
        }
        const foot = document.getElementById("rpg-maint-foot");
        if (foot) foot.removeAttribute("hidden");
    },

    maintCheck(task, value) {
        if (task.type === "true-false") {
            const expected = task.correctAnswer === true || task.correctAnswer === "true" || task.correctAnswer === 1;
            return Boolean(value) === expected;
        }
        if (task.type === "multiple-choice") {
            return Number(value) === Number(task.correctAnswer);
        }
        const normalized = typeof normalizeAnswerText === "function" ? normalizeAnswerText(String(value || "")) : String(value || "").trim().toLowerCase();
        if (!normalized) return false;
        const list = typeof localizeAnswerValues === "function" ? localizeAnswerValues(task.correctAnswer) : [String(task.correctAnswer || "")];
        return list.some(ans => {
            const norm = typeof normalizeAnswerText === "function" ? normalizeAnswerText(String(ans)) : String(ans).trim().toLowerCase();
            return norm && norm === normalized;
        });
    },

    nextMaintenance() {
        const st = this._maint;
        if (!st) return;
        st.idx += 1;
        st.answered = false;
        if (st.idx >= st.items.length) this.renderMaintSummary();
        else this.renderMaintenance();
    },

    renderMaintSummary() {
        const modal = document.getElementById("rpg-maint-modal");
        const body = modal && modal.querySelector("#rpg-maint-body");
        const st = this._maint;
        if (!body || !st) return;
        const xp = st.correct * 18;
        const crystals = st.correct * 3;
        st.xp = xp;
        st.crystals = crystals;
        if (!st.rewarded) {
            st.rewarded = true;
            try { this.addXP(xp, { toast: false }); } catch (e) {}
            try { this.addCrystals(crystals, { silent: true }); } catch (e) {}
            this.state.review.sessions = (Number(this.state.review.sessions) || 0) + 1;
            try { this.addClassEnergy(null, { maintenance: st.correct }); } catch (e) {}
            this.saveSoon();
            this.refreshAll();
        }
        body.innerHTML = `
            <div class="rpg-maint-done">
                <div class="rpg-maint-done-icon">🛠</div>
                <div class="rpg-maint-kicker">${escapeHtml(rpgT("maintKicker"))}</div>
                <h2>${escapeHtml(rpgT("maintDoneTitle"))}</h2>
                <div class="rpg-maint-score">${escapeHtml(rpgT("maintDoneScore", st.correct, st.items.length))}</div>
                <div class="rpg-maint-reward">${escapeHtml(rpgT("maintDoneXp", xp, crystals))}</div>
                <div class="rpg-maint-reward small">🛡 ${escapeHtml(rpgT("maintEnergy", st.correct * 25))}</div>
                <div class="rpg-maint-actions">
                    <button type="button" class="btn btn-secondary" data-maint="again">${escapeHtml(rpgT("maintAgain"))}</button>
                    <button type="button" class="btn btn-primary" data-maint="close">${escapeHtml(rpgT("maintClose"))}</button>
                </div>
            </div>
        `;
    },

    closeMaintenance() {
        const modal = document.getElementById("rpg-maint-modal");
        if (modal) modal.classList.remove("active");
        this._maint = null;
    }
});

/* ---------------- B3. ЩИТ КЛАССА / B4. СЮЖЕТ / C4. ДЕДЛАЙНЫ ---------------- */
Object.assign(RPG, {
    /* ===== B3. ЩИТ КЛАССА ===== */
    refreshClassIdentity() {
        const cs = this.state.classShield;
        let name = "";
        let code = "";
        try {
            const list = Storage.getAssignmentsForCurrentPlayer ? Storage.getAssignmentsForCurrentPlayer() : [];
            const withClass = list.find(a => a && a.className) || null;
            if (withClass) {
                name = String(withClass.className || "").trim();
                code = String(withClass.classId || "").trim();
            }
        } catch (e) {}
        cs.name = name;
        cs.code = code;
        return cs;
    },

    recordClassTopic(topic, correct) {
        if (!topic || !this.state || !this.state.classShield) return;
        const topics = this.state.classShield.topics;
        const key = String(topic);
        if (!topics[key]) topics[key] = { c: 0, w: 0 };
        if (correct) topics[key].c = (Number(topics[key].c) || 0) + 1;
        else topics[key].w = (Number(topics[key].w) || 0) + 1;
        this.saveSoon();
    },

    addClassEnergy(run, info = {}) {
        if (!this.state || !this.state.classShield) return 0;
        const cs = this.state.classShield;
        let gain = 0;
        if (info.maintenance) {
            gain = Math.max(0, Number(info.maintenance) || 0) * 25;
        } else if (info && (info.victory !== undefined || info.stars !== undefined)) {
            gain = (info.victory ? 40 : 12)
                + Math.max(0, Math.min(3, Number(info.stars) || 0)) * 15
                + (info.objectiveDone ? 15 : 0)
                + Math.round((Number(info.accuracy) || 0) / 10) * 2;
        }
        if (!gain) return 0;
        const goal = Math.max(100, Number(cs.goal) || 1200);
        cs.energy = Math.max(0, Number(cs.energy) || 0) + gain;
        cs.total = Math.max(0, Number(cs.total) || 0) + gain;
        cs.contributions = Math.max(0, Number(cs.contributions) || 0) + 1;
        cs.updatedAt = new Date().toISOString();
        let cycles = 0;
        while (cs.energy >= goal) {
            cs.energy -= goal;
            cs.cycles = (Number(cs.cycles) || 0) + 1;
            cycles += 1;
        }
        this.refreshClassIdentity();
        this.save();
        if (cycles > 0) {
            setTimeout(() => {
                try {
                    this.toast("🛡", rpgT("shieldCycleToast"), rpgT("shieldCycleToastText"), "tier-gold");
                    this.showBanner({
                        icon: "🛡",
                        kicker: rpgT("shieldCycleToast"),
                        name: rpgT("shieldCycleToastText"),
                        sub: ""
                    });
                } catch (e) {}
            }, 900);
        }
        return gain;
    },

    contributionCode() {
        const total = Math.max(0, Math.round(Number(this.state.classShield.total) || 0));
        if (!total) return "";
        const body = total.toString(36).toUpperCase().padStart(4, "0").slice(-4);
        let sum = 0;
        for (const ch of body) sum += ch.charCodeAt(0);
        const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return "W" + body + alphabet[sum % 36];
    },

    parseContribution(raw) {
        const norm = String(raw || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
        if (!/^W[A-Z0-9]{5}$/.test(norm)) return null;
        const body = norm.slice(1, 5);
        let sum = 0;
        for (const ch of body) sum += ch.charCodeAt(0);
        const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (norm[5] !== alphabet[sum % 36]) return null;
        return parseInt(body, 36);
    },

    pooledEnergy() {
        const pooled = this.state.classShield.pooled || [];
        return pooled.reduce((sum, code) => sum + (this.parseContribution(code) || 0), 0);
    },

    poolClassCodes(text) {
        const codes = String(text || "").toUpperCase().match(/W[A-Z0-9]{5}/g) || [];
        const cs = this.state.classShield;
        cs.pooled = Array.isArray(cs.pooled) ? cs.pooled : [];
        let addedCodes = 0;
        let addedEnergy = 0;
        let bad = 0;
        codes.forEach(code => {
            const energy = this.parseContribution(code);
            if (energy === null) { bad += 1; return; }
            if (cs.pooled.includes(code)) return;
            cs.pooled.push(code);
            addedCodes += 1;
            addedEnergy += energy;
        });
        if (addedEnergy > 0) {
            const goal = Math.max(100, Number(cs.goal) || 1200);
            cs.energy = (Number(cs.energy) || 0) + addedEnergy;
            cs.total = (Number(cs.total) || 0) + addedEnergy;
            cs.contributions = (Number(cs.contributions) || 0) + addedCodes;
            let cycles = 0;
            while (cs.energy >= goal) {
                cs.energy -= goal;
                cs.cycles = (Number(cs.cycles) || 0) + 1;
                cycles += 1;
            }
            cs.updatedAt = new Date().toISOString();
            this.save();
            this.renderHub();
            this.toast("🛡", rpgT("shieldPooledToast"), rpgT("shieldPoolDone", addedCodes, addedEnergy), "tier-gold");
        } else if (!bad) {
            this.toast("🛡", rpgT("shieldPoolNone"), "", "warning");
        }
        return { addedCodes, addedEnergy, bad };
    },

    shieldTopicRows() {
        const topics = this.state.classShield.topics || {};
        const rows = Object.keys(topics).map(key => {
            const t = topics[key] || {};
            const c = Number(t.c) || 0;
            const w = Number(t.w) || 0;
            const total = c + w;
            return { key, c, w, total, accuracy: total ? Math.round((c / total) * 100) : 0 };
        }).filter(r => r.total >= 4);
        rows.sort((a, b) => a.accuracy - b.accuracy);
        return rows;
    },

    shieldSvg(pct) {
        const fillH = Math.max(0, Math.min(100, pct));
        const y = 140 - (140 * fillH) / 100;
        return `<svg class="rpg-shield-svg" viewBox="0 0 120 144" aria-hidden="true">
            <defs>
                <linearGradient id="rpgShieldGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#00c853"/>
                    <stop offset="55%" stop-color="#00b8d4"/>
                    <stop offset="100%" stop-color="#2979ff"/>
                </linearGradient>
                <clipPath id="rpgShieldClip">
                    <path d="M60 6 L110 24 V72 C110 106 86 128 60 138 C34 128 10 106 10 72 V24 Z"/>
                </clipPath>
            </defs>
            <path d="M60 6 L110 24 V72 C110 106 86 128 60 138 C34 128 10 106 10 72 V24 Z"
                  fill="rgba(10,21,48,0.06)" stroke="rgba(0,184,212,0.45)" stroke-width="2"/>
            <rect x="0" y="${y}" width="120" height="${140 - y}" fill="url(#rpgShieldGrad)" clip-path="url(#rpgShieldClip)"/>
            <path d="M60 6 L110 24 V72 C110 106 86 128 60 138 C34 128 10 106 10 72 V24 Z"
                  fill="none" stroke="rgba(0,184,212,0.85)" stroke-width="3"/>
        </svg>`;
    },

    renderClassShield() {
        const cs = this.refreshClassIdentity();
        const goal = Math.max(100, Number(cs.goal) || 1200);
        const energy = Math.max(0, Number(cs.energy) || 0);
        const pct = Math.max(0, Math.min(100, Math.round((energy / goal) * 100)));
        const className = cs.name || rpgT("shieldLocal");
        const code = this.contributionCode();
        const topicRows = this.shieldTopicRows();
        const topicsHtml = topicRows.length
            ? topicRows.slice(0, 5).map(row => `
                <div class="rpg-shield-topic">
                    <div class="rpg-shield-topic-line">
                        <b>${escapeHtml(rpgTopicLabel(row.key))}</b>
                        <span>${escapeHtml(rpgT("shieldTopicRow", "", row.accuracy, row.total))}</span>
                    </div>
                    <div class="rpg-shield-topic-bar"><i class="${row.accuracy < 60 ? "bad" : row.accuracy < 80 ? "mid" : "ok"}" style="width:${row.accuracy}%"></i></div>
                </div>`).join("")
            : `<div class="rpg-shield-empty-note">${escapeHtml(rpgT("shieldNoTopics"))}</div>`;
        const hasProgress = energy > 0 || Number(cs.total) > 0 || Number(cs.cycles) > 0;
        return `
            <div class="rpg-shield-wrap">
                <div class="rpg-shield-hero">
                    <div class="rpg-shield-visual">${this.shieldSvg(pct)}</div>
                    <div class="rpg-shield-info">
                        <div class="rpg-shield-kicker">${escapeHtml(rpgT("shieldTitle"))}</div>
                        <h3>${escapeHtml(className)}</h3>
                        <div class="rpg-shield-energy">${escapeHtml(rpgT("shieldEnergy", energy, goal))}</div>
                        <div class="rpg-shield-bar"><i style="width:${pct}%"></i></div>
                        <div class="rpg-shield-meta">${escapeHtml(rpgT("shieldCycles", Number(cs.cycles) || 0))}</div>
                        <div class="rpg-shield-meta">${escapeHtml(rpgT("shieldContribLine", Math.round(Number(cs.total) || 0), Number(cs.contributions) || 0))}</div>
                    </div>
                </div>
                <p class="rpg-shield-sub">${escapeHtml(rpgT("shieldSub"))}</p>
                ${hasProgress ? "" : `<div class="rpg-shield-empty">🛡 ${escapeHtml(rpgT("shieldEmpty"))}</div>`}
                <div class="rpg-shield-codebox">
                    <div>
                        <div class="rpg-shield-code-title">${escapeHtml(rpgT("shieldCodeTitle"))}</div>
                        <div class="rpg-shield-code">${code ? escapeHtml(code) : "—"}</div>
                        <small>${escapeHtml(rpgT("shieldCodeHint"))}</small>
                    </div>
                    <button type="button" class="btn btn-secondary" data-shield-copy ${code ? "" : "disabled"}>${escapeHtml(rpgT("shieldCopy"))}</button>
                </div>
                <div class="rpg-shield-topics">
                    <div class="rpg-shield-section-title">${escapeHtml(rpgT("shieldTopicsTitle"))}</div>
                    <p class="rpg-shield-hint">${escapeHtml(rpgT("shieldTopicsHint"))}</p>
                    ${topicsHtml}
                </div>
                <div class="rpg-shield-pool">
                    <div class="rpg-shield-section-title">${escapeHtml(rpgT("shieldPoolTitle"))}</div>
                    <p class="rpg-shield-hint">${escapeHtml(rpgT("shieldPoolHint"))}</p>
                    <textarea id="rpg-shield-codes" rows="3" placeholder="W01K2A&#10;W02F9C"></textarea>
                    <div class="rpg-shield-pool-foot">
                        <button type="button" class="btn btn-primary" data-shield-pool>${escapeHtml(rpgT("shieldPoolBtn"))}</button>
                        <span class="rpg-shield-meta">${escapeHtml(rpgT("shieldPooled", this.pooledEnergy(), (cs.pooled || []).length))}</span>
                    </div>
                </div>
            </div>`;
    },

    /* ===== B4. СЮЖЕТНЫЕ ВЫБОРЫ ===== */
    activeStory() {
        const active = this.state.story && this.state.story.active;
        if (!active) return null;
        const node = rpgStoryNode(active.nodeId);
        if (!node) return null;
        const option = (node.options || []).find(o => o.id === active.optionId);
        if (!option) return null;
        return { node, option, active, left: Math.max(0, Number(active.missionsLeft) || 0) };
    },

    tickStoryEffect() {
        const active = this.state.story && this.state.story.active;
        if (!active) return;
        active.missionsLeft = Math.max(0, (Number(active.missionsLeft) || 0) - 1);
        if (active.missionsLeft === 0) {
            this.state.story.active = null;
            this.saveSoon();
            setTimeout(() => {
                try { this.toast("🎭", rpgT("storyEffectEnded"), "", "warning"); } catch (e) {}
                try { this.refreshAll(); } catch (e) {}
            }, 1200);
        } else {
            this.saveSoon();
        }
    },

    pendingStoryNode() {
        let maxCleared = 0;
        try {
            (this.state.stats.clearedLevels || []).forEach(id => {
                const n = parseInt(id, 10);
                if (Number.isFinite(n)) maxCleared = Math.max(maxCleared, n);
            });
        } catch (e) {}
        const nodes = RPG_STORY_NODES.slice().sort((a, b) => a.levelId - b.levelId);
        return nodes.find(n => n.levelId <= maxCleared && !(this.state.story.choices || {})[n.id]) || null;
    },

    renderStoryChoice(summary) {
        if (!summary || !summary.victory) return;
        if (Number(summary.record && summary.record.wins) !== 1) return;
        const node = rpgStoryNodeForLevel(summary.levelId);
        if (!node) return;
        if (this.state.story.choices[node.id]) return;
        setTimeout(() => {
            try {
                if (!document.querySelector("#victory-screen.active")) return;
                this.showStoryChoice(node);
            } catch (e) {}
        }, 750);
    },

    showStoryChoice(node) {
        const modal = document.getElementById("rpg-choice-modal");
        if (!modal) return;
        const body = modal.querySelector("#rpg-choice-body");
        body.innerHTML = `
            <div class="rpg-choice-kicker">${escapeHtml(rpgT("storyKicker"))}</div>
            <h2>${escapeHtml(rpgT("storyModalTitle"))}</h2>
            <div class="rpg-choice-title">${escapeHtml(rpgLoc(node.title))}</div>
            <p class="rpg-choice-text">${escapeHtml(rpgLoc(node.text))}</p>
            <div class="rpg-choice-options">
                ${node.options.map(opt => `
                    <button type="button" class="rpg-choice-option" data-story-node="${escapeHtml(node.id)}" data-story-option="${escapeHtml(opt.id)}">
                        <span class="rpg-choice-icon">${opt.icon}</span>
                        <span class="rpg-choice-main">
                            <b>${escapeHtml(rpgLoc(opt.label))}</b>
                            <small>${escapeHtml(rpgLoc(opt.desc))}</small>
                        </span>
                        <span class="rpg-choice-missions">${opt.missions}×</span>
                    </button>`).join("")}
            </div>
            <div class="rpg-choice-note">${escapeHtml(rpgT("storyChoose"))}</div>
        `;
        modal.classList.add("active");
    },

    closeStoryChoice() {
        const modal = document.getElementById("rpg-choice-modal");
        if (modal) modal.classList.remove("active");
    },

    chooseStoryOption(nodeId, optionId) {
        const node = rpgStoryNode(nodeId);
        if (!node) return;
        const option = (node.options || []).find(o => o.id === optionId);
        if (!option) return;
        this.state.story.choices[nodeId] = optionId;
        this.state.story.active = {
            nodeId,
            optionId,
            missions: option.missions,
            missionsLeft: option.missions,
            mods: Object.assign({}, option.mods),
            since: new Date().toISOString()
        };
        this.state.story.history.push({ nodeId, optionId, at: new Date().toISOString() });
        this.save();
        this.closeStoryChoice();
        this.toast(option.icon, rpgT("storyChosen"), rpgLoc(option.reply), "tier-gold");
        try { this.refreshAll(); } catch (e) {}
    },

    storyHistoryHtml() {
        const history = (this.state.story.history || []).slice(-4).reverse();
        const active = this.activeStory();
        const lines = history.map(h => {
            const node = rpgStoryNode(h.nodeId);
            const opt = node && (node.options || []).find(o => o.id === h.optionId);
            if (!opt) return "";
            return `<div class="rpg-story-row"><span>${opt.icon} ${escapeHtml(rpgLoc(opt.label))}</span><small>${escapeHtml((h.at || "").slice(0, 10))}</small></div>`;
        }).filter(Boolean).join("");
        return `
            <div class="rpg-story-card">
                <div class="rpg-story-card-head">🎭 ${escapeHtml(rpgT("storyHistory"))}</div>
                ${active ? `<div class="rpg-story-active">${active.option.icon} ${escapeHtml(rpgLoc(active.option.label))} · ${escapeHtml(rpgT("storyEffect", active.left + " " + rpgMissionWord(active.left)))}</div>` : ""}
                ${lines || `<div class="rpg-story-none">${escapeHtml(rpgT("storyNoChoice"))}</div>`}
            </div>`;
    },

    hubExtrasHtml() {
        const queue = this.reviewQueue();
        const due = this.dueReviewItems().length;
        const cs = this.refreshClassIdentity();
        const goal = Math.max(100, Number(cs.goal) || 1200);
        const pct = Math.max(0, Math.min(100, Math.round(((Number(cs.energy) || 0) / goal) * 100)));
        const pending = this.pendingStoryNode();
        const pendingHtml = pending ? `
            <div class="rpg-story-pending">
                <div>
                    <div class="rpg-story-pending-kicker">${escapeHtml(rpgT("storyKicker"))}</div>
                    <div class="rpg-story-pending-title">${escapeHtml(rpgLoc(pending.title))}</div>
                </div>
                <button type="button" class="rpg-mini-btn accent" data-story-open="${escapeHtml(pending.id)}">${escapeHtml(rpgT("storyModalTitle"))}</button>
            </div>` : "";
        return `
            ${pendingHtml}
            <div class="rpg-hub-extra-grid">
                <div class="rpg-hub-extra">
                    <div class="rpg-hub-extra-head">🗃 ${escapeHtml(rpgT("bbTitle"))}</div>
                    <div class="rpg-hub-extra-num">${queue.length}</div>
                    <div class="rpg-hub-extra-sub">${escapeHtml(rpgT("bbQueueLine", queue.length, Number(this.state.review.understood) || 0))}</div>
                    <div class="rpg-hub-extra-actions">
                        <button type="button" class="rpg-mini-btn" data-bb="archive">${escapeHtml(rpgT("bbOpenArchive"))}</button>
                        <button type="button" class="rpg-mini-btn accent" data-bb="maint">${escapeHtml(rpgT("bbMaintenance"))}${due ? " · " + due : ""}</button>
                    </div>
                </div>
                <div class="rpg-hub-extra">
                    <div class="rpg-hub-extra-head">🛡 ${escapeHtml(rpgT("shieldTitle"))}</div>
                    <div class="rpg-hub-extra-num">${pct}%</div>
                    <div class="rpg-hub-extra-sub">${escapeHtml(cs.name || rpgT("shieldLocal"))} · ${escapeHtml(rpgT("shieldCycles", Number(cs.cycles) || 0))}</div>
                    <div class="rpg-hub-extra-bar"><i style="width:${pct}%"></i></div>
                    <div class="rpg-hub-extra-actions">
                        <button type="button" class="rpg-mini-btn" data-hub-tab="shield">${escapeHtml(rpgT("tabShield"))}</button>
                    </div>
                </div>
            </div>
            ${this.storyHistoryHtml()}`;
    },

    /* ===== C4. ДЕДЛАЙНЫ НАЗНАЧЕНИЙ ===== */
    readDueInput(id) {
        const input = document.getElementById(id);
        if (!input) return "";
        const value = String(input.value || "").trim();
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "";
        return value + "T23:59:00";
    },

    dueInputValue(dueAt) {
        if (!dueAt) return "";
        const d = new Date(dueAt);
        if (isNaN(d.getTime())) return "";
        return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    },

    setAssignmentDue(id, dueAt) {
        try {
            const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []);
            if (!Array.isArray(list)) return false;
            const row = list.find(a => a.id === id);
            if (!row) return false;
            if (dueAt) row.dueAt = dueAt;
            else delete row.dueAt;
            Storage.save(Storage.KEYS.ASSIGNMENTS, list);
            return true;
        } catch (e) {
            console.warn("RPG due patch", e);
            return false;
        }
    },

    studentAssignmentsSorted() {
        try {
            return Storage.getAssignmentsForCurrentPlayer().slice().sort((a, b) =>
                String(b.assignedAt || "").localeCompare(String(a.assignedAt || "")));
        } catch (e) {
            return [];
        }
    },

    decorateStudentAssignments() {
        const list = document.getElementById("student-assignments-list");
        if (!list) return;
        const assignments = this.studentAssignmentsSorted();
        list.querySelectorAll(".student-assignment-card").forEach((card, i) => {
            const a = assignments[i];
            if (!a || !a.dueAt) return;
            if (card.querySelector(".rpg-due-chip")) return;
            const completed = (() => { try { return Storage.isAssignmentCompleted(a); } catch (e) { return false; } })();
            const cls = rpgDueChipClass(a.dueAt, completed);
            const label = completed ? rpgT("dueDone") : rpgDueLabel(a.dueAt);
            const chip = document.createElement("span");
            chip.className = "rpg-due-chip " + cls;
            chip.innerHTML = `${completed ? "✅" : cls === "overdue" ? "⚠️" : "⏳"} ${escapeHtml(label)}`;
            const meta = card.querySelector(".student-assignment-meta");
            if (meta) meta.appendChild(chip);
            else card.appendChild(chip);
            card.classList.add("rpg-due-" + (cls || "calm"));
        });
    },

    decorateTeacherAssignments() {
        const container = document.getElementById("assignments-list");
        if (!container) return;
        let assignments = [];
        try { assignments = Storage.getAssignments(); } catch (e) {}
        container.querySelectorAll(".assignment-item").forEach(row => {
            if (row.querySelector(".rpg-due-chip")) return;
            const delBtn = row.querySelector("[data-assignment-delete]");
            const id = delBtn && delBtn.getAttribute("data-assignment-delete");
            const a = assignments.find(x => x.id === id);
            if (!a) return;
            const actions = row.querySelector(".assignment-item-actions");
            const chip = document.createElement("span");
            if (a.dueAt) {
                const cls = rpgDueChipClass(a.dueAt, false);
                chip.className = "rpg-due-chip " + cls;
                chip.innerHTML = `${cls === "overdue" ? "⚠️" : "⏳"} ${escapeHtml(rpgDueLabel(a.dueAt))}`;
            } else {
                chip.className = "rpg-due-chip muted";
                chip.textContent = rpgT("dueNone");
            }
            const meta = row.querySelector(".assignment-item-meta");
            if (meta) meta.appendChild(chip);
            if (actions) {
                const edit = document.createElement("button");
                edit.type = "button";
                edit.className = "btn-icon-only rpg-due-edit";
                edit.setAttribute("data-rpg-due-edit", id);
                edit.title = rpgT("dueEdit");
                edit.textContent = "📅";
                actions.insertBefore(edit, actions.firstChild);
            }
        });
    },

    renderDueBanner() {
        const screen = document.getElementById("level-screen");
        if (!screen) return;
        let banner = document.getElementById("rpg-due-banner");
        if (!banner) {
            banner = document.createElement("div");
            banner.id = "rpg-due-banner";
            banner.className = "rpg-due-banner";
            const anchor = screen.querySelector(".pilot-line");
            if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(banner, anchor);
            else screen.appendChild(banner);
        }
        const list = this.studentAssignmentsSorted().filter(a => a.dueAt && !(() => {
            try { return Storage.isAssignmentCompleted(a); } catch (e) { return false; }
        })());
        if (!list.length) {
            banner.hidden = true;
            banner.innerHTML = "";
            return;
        }
        list.sort((a, b) => new Date(a.dueAt) - new Date(b.dueAt));
        const nearest = list[0];
        const cal = rpgDueCal(nearest.dueAt);
        const overdue = cal !== null && cal < 0;
        let levelLabel = "";
        try {
            levelLabel = typeof levelTitleText === "function" ? levelTitleText(nearest.levelId) : ("§" + nearest.levelId);
        } catch (e) { levelLabel = "§" + nearest.levelId; }
        banner.hidden = false;
        banner.className = "rpg-due-banner " + (overdue ? "overdue" : cal !== null && cal <= 1 ? "soon" : "calm");
        banner.innerHTML = `
            <span class="rpg-due-icon">${overdue ? "⚠️" : "⏳"}</span>
            <span class="rpg-due-text">
                <b>${escapeHtml(overdue ? rpgT("dueOverdue", (Math.abs(cal) + " " + rpgDayWord(cal))) : rpgDueLabel(nearest.dueAt))}</b>
                <small>${escapeHtml(levelLabel)}${list.length > 1 ? ` · ${list.length}` : ""}</small>
            </span>
            <button type="button" class="rpg-due-open" data-rpg-due-open="${escapeHtml(String(nearest.levelId))}" data-rpg-due-code="${escapeHtml(nearest.assignmentCode || "")}">${escapeHtml(I18n.t("openAssignment"))}</button>
        `;
        if (!this._dueToastShown && cal !== null && cal <= 2) {
            this._dueToastShown = true;
            setTimeout(() => {
                try {
                    this.toast("⏳", rpgT("dueRemindToast"), `${levelLabel} · ${rpgDueLabel(nearest.dueAt)}`, "warning");
                } catch (e) {}
            }, 900);
        }
    },

    /* ===== ИНТЕГРАЦИЯ ===== */
    installExtras() {
        const R = this;

        // 1) Фиксируем выбранный ответ до того, как игра очистит задание.
        const prevCheck = Game.checkAnswer;
        Game.checkAnswer = function () {
            try {
                R._pendingTask = this.currentTask || null;
                R._pendingGiven = R.captureGiven(this, this.currentTask);
            } catch (e) {}
            return prevCheck.apply(this, arguments);
        };

        // 2) Ошибки после исчерпания попыток и темы для диагностики класса.
        const prevWrong = R.onWrong;
        R.onWrong = function (game) {
            const result = prevWrong.apply(this, arguments);
            try {
                const maxAttempts = (typeof MAX_TASK_ATTEMPTS !== "undefined") ? MAX_TASK_ATTEMPTS : 5;
                if (game && Number(game.taskAttempts) >= maxAttempts) R.captureMiss(game);
            } catch (e) { console.warn("RPG miss capture", e); }
            try {
                if (game && Number(game.taskAttempts) === 1) R.recordClassTopic(R._pendingTask && R._pendingTask.topic, false);
            } catch (e) {}
            return result;
        };
        const prevCorrect = R.onCorrect;
        R.onCorrect = function (game, task) {
            const result = prevCorrect.apply(this, arguments);
            try {
                if (game && Number(game.taskAttempts) === 1) R.recordClassTopic(task && task.topic, true);
            } catch (e) {}
            return result;
        };

        // 3) Результат миссии: «Чёрный ящик», сюжетный выбор, вклад в щит.
        const prevSummary = R.renderRunSummary;
        R.renderRunSummary = function (victory, summary) {
            const result = prevSummary.apply(this, arguments);
            try { this.renderBlackBox(victory, summary); } catch (e) { console.warn("RPG blackbox", e); }
            try { this.renderStoryChoice(summary); } catch (e) { console.warn("RPG story choice", e); }
            try {
                const block = document.querySelector(victory ? ".victory-content .rpg-run-result" : ".gameover-content .rpg-run-result");
                if (block && summary && summary.classGain > 0 && !block.querySelector(".rpg-rr-class")) {
                    const line = document.createElement("div");
                    line.className = "rpg-rr-ach rpg-rr-class";
                    line.innerHTML = `🛡 ${escapeHtml(rpgT("shieldGainToast"))}: +${summary.classGain} ⚡`;
                    const actions = block.querySelector(".rpg-result-actions");
                    if (actions) block.insertBefore(line, actions);
                    else block.appendChild(line);
                }
            } catch (e) {}
            return result;
        };

        // 4) Полоса уровня: чип активного сюжетного эффекта.
        const prevLevelBar = R.renderLevelBar;
        R.renderLevelBar = function () {
            const result = prevLevelBar.apply(this, arguments);
            try { this.decorateStoryChip(); } catch (e) {}
            return result;
        };

        // 5) Штаб: карточки «Чёрный ящик» и «Щит класса» в профиле пилота.
        const prevCharacter = R.renderCharacter;
        R.renderCharacter = function () {
            let html = prevCharacter.apply(this, arguments);
            try { html += this.hubExtrasHtml(); } catch (e) { console.warn("RPG hub extras", e); }
            return html;
        };

        // 6) Шестая вкладка штаба.
        const prevTabs = R.renderHubTabs;
        R.renderHubTabs = function () {
            const result = prevTabs.apply(this, arguments);
            try {
                const tabs = this.dom.hubTabs;
                if (tabs && !tabs.querySelector('[data-hub-tab="shield"]')) {
                    const btn = document.createElement("button");
                    btn.className = "rpg-hub-tab" + (this._hubTab === "shield" ? " active" : "");
                    btn.type = "button";
                    btn.setAttribute("data-hub-tab", "shield");
                    btn.textContent = rpgT("tabShield");
                    tabs.appendChild(btn);
                }
                if (tabs) tabs.querySelectorAll("[data-hub-tab]").forEach(b =>
                    b.classList.toggle("active", b.getAttribute("data-hub-tab") === this._hubTab));
            } catch (e) {}
            return result;
        };
        const prevBody = R.renderHubBody;
        R.renderHubBody = function () {
            if (this._hubTab === "shield") {
                const body = this.dom.hubBody;
                if (body) body.innerHTML = this.renderClassShield();
                return;
            }
            return prevBody.apply(this, arguments);
        };
        const prevOpenHub = R.openHub;
        R.openHub = function (tab = "char") {
            this._hubTab = ["char", "skills", "ach", "shop", "quests", "shield"].includes(tab) ? tab : "char";
            if (this._hubTab === "shield") {
                this._hubOpen = true;
                this.renderHub();
                if (this.dom.hubModal) this.dom.hubModal.classList.add("active");
                return;
            }
            return prevOpenHub.call(this, tab);
        };

        // 6b) Смена языка: подписи полей и баннер перерисовываются.
        const prevRefresh = R.refreshAll;
        R.refreshAll = function () {
            const result = prevRefresh.apply(this, arguments);
            try { this.refreshDueLabels(); } catch (e) {}
            try { this.renderDueBanner(); } catch (e) {}
            return result;
        };

        // 7) Экран выбора уровня: баннер со сроком.
        const prevScreen = window.showScreen;
        window.showScreen = function (id) {
            const result = prevScreen.apply(this, arguments);
            try { if (id === "level-screen") R.renderDueBanner(); } catch (e) {}
            return result;
        };

        // 8) Назначения: срок в формах учителя.
        this.injectDueInputs();
        this.wrapAssignments();
        this.bindExtraEvents();
        this.refreshClassIdentity();
        try { this.renderDueBanner(); } catch (e) {}
        console.log("[RPG] Extras online: black box, maintenance, class shield, story, due dates");
    },

    refreshDueLabels() {
        document.querySelectorAll(".rpg-due-field").forEach(field => {
            const label = field.querySelector("label");
            if (label) label.textContent = rpgT("dueLabel");
            const hint = field.querySelector("small");
            if (hint) hint.textContent = rpgT("dueHint");
        });
    },

    injectDueInputs() {
        const add = (afterId, id, labelId) => {
            if (document.getElementById(id)) return;
            const anchor = document.getElementById(afterId);
            if (!anchor) return;
            const group = document.createElement("div");
            group.className = "form-group rpg-due-field";
            group.innerHTML = `<label for="${id}">${escapeHtml(rpgT("dueLabel"))}</label>
                <input type="date" id="${id}" />
                <small>${escapeHtml(rpgT("dueHint"))}</small>`;
            anchor.parentNode.insertAdjacentElement("afterend", group);
        };
        add("class-assignment-note", "rpg-class-assignment-due", "dueLabel");
        add("assignment-note", "rpg-assignment-due", "dueLabel");
    },

    wrapAssignments() {
        const R = this;
        if (typeof Storage === "undefined") return;

        // Массовое назначение классу: принимаем 4-й аргумент и проставляем срок.
        const prevForClass = Storage.addAssignmentsForClass;
        Storage.addAssignmentsForClass = function (classId, levelId, note, dueAt) {
            const added = prevForClass.call(Storage, classId, levelId, note);
            if (dueAt && Array.isArray(added)) {
                added.forEach(item => { if (item && item.id) R.setAssignmentDue(item.id, dueAt); });
            }
            return added;
        };

        // Учитель вызывает старые методы — подставляем дату из полей формы.
        if (typeof Teacher !== "undefined") {
            const prevAssignClass = Teacher.assignToClass;
            Teacher.assignToClass = function () {
                const due = R.readDueInput("rpg-class-assignment-due");
                const prev = Storage.addAssignmentsForClass;
                Storage.addAssignmentsForClass = function (c, l, n) { return prev.call(Storage, c, l, n, due); };
                try {
                    return prevAssignClass.apply(this, arguments);
                } finally {
                    Storage.addAssignmentsForClass = prev;
                }
            };

            const prevAddAssignment = Teacher.addAssignment;
            Teacher.addAssignment = function () {
                const due = R.readDueInput("rpg-assignment-due");
                const prev = Storage.addAssignment;
                Storage.addAssignment = function (a) {
                    const item = prev.call(Storage, a);
                    try { if (due && item && item.id) R.setAssignmentDue(item.id, due); } catch (e) {}
                    return item;
                };
                try {
                    return prevAddAssignment.apply(this, arguments);
                } finally {
                    Storage.addAssignment = prev;
                }
            };

            const prevRenderAssignments = Teacher.renderAssignments;
            Teacher.renderAssignments = function () {
                const result = prevRenderAssignments.apply(this, arguments);
                try { R.decorateTeacherAssignments(); } catch (e) {}
                return result;
            };
        }

        // Подключение по коду: срок копируется из шаблона назначения.
        const prevAttach = Storage.attachAssignmentCode;
        Storage.attachAssignmentCode = function (code) {
            const normalized = Storage.normalizeAssignmentCode ? Storage.normalizeAssignmentCode(code) : String(code || "").toUpperCase();
            let templateDue = "";
            try {
                const tpl = (Storage.getAssignments() || []).find(a => a.assignmentCode === normalized && a.dueAt);
                templateDue = tpl ? tpl.dueAt : "";
            } catch (e) {}
            const result = prevAttach.apply(this, arguments);
            if (templateDue && result && Array.isArray(result.added)) {
                result.added.forEach(item => { if (item && item.id) R.setAssignmentDue(item.id, templateDue); });
            }
            return result;
        };

        // Импорт назначений: возвращаем срок, который базовый импорт не переносит.
        const prevImport = Storage.importAssignments;
        if (typeof prevImport === "function") {
            Storage.importAssignments = function (payload) {
                const result = prevImport.apply(this, arguments);
                try {
                    const incoming = Array.isArray(payload) ? payload : (payload && payload.assignments);
                    if (Array.isArray(incoming)) {
                        const dueById = new Map();
                        incoming.forEach(a => { if (a && a.id && a.dueAt) dueById.set(String(a.id), a.dueAt); });
                        if (dueById.size) {
                            const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []);
                            let changed = false;
                            (Array.isArray(list) ? list : []).forEach(row => {
                                const due = dueById.get(String(row.id));
                                if (due) { row.dueAt = due; changed = true; }
                            });
                            if (changed) Storage.save(Storage.KEYS.ASSIGNMENTS, list);
                        }
                    }
                } catch (e) { console.warn("RPG due import", e); }
                return result;
            };
        }

        // Список ученика: чипы сроков.
        const prevRenderStudent = window.renderStudentAssignments;
        if (typeof prevRenderStudent === "function") {
            window.renderStudentAssignments = function () {
                const result = prevRenderStudent.apply(this, arguments);
                try { R.decorateStudentAssignments(); } catch (e) {}
                return result;
            };
        }
    },

    decorateStoryChip() {
        const bar = document.getElementById("rpg-levelbar");
        if (!bar) return;
        const chips = bar.querySelector(".rpg-lb-chips");
        if (!chips) return;
        const old = chips.querySelector(".rpg-story-chip");
        if (old) old.remove();
        const active = this.activeStory();
        if (!active) return;
        const chip = document.createElement("span");
        chip.className = "rpg-chip story";
        chip.textContent = `${active.option.icon} ${rpgLoc(active.option.label)} · ${rpgT("storyEffect", active.left + " " + rpgMissionWord(active.left))}`;
        chips.appendChild(chip);
    },

    bindExtraEvents() {
        const R = this;
        document.addEventListener("click", (e) => {
            const bb = e.target.closest("[data-bb-action]");
            if (bb) {
                const idx = Number(bb.getAttribute("data-bb-idx")) || 0;
                if (bb.getAttribute("data-bb-action") === "understood") {
                    R.markUnderstood(bb.getAttribute("data-bb-task") || "", idx);
                } else {
                    R.toggleExplain(idx);
                }
                return;
            }
            const bbBtn = e.target.closest("[data-bb]");
            if (bbBtn) {
                const what = bbBtn.getAttribute("data-bb");
                if (what === "maint") R.startMaintenance();
                else if (what === "archive") R.openBlackBox();
                else if (what === "close") R.closeBlackBox();
                return;
            }
            const maintBtn = e.target.closest("[data-maint]");
            if (maintBtn) {
                const what = maintBtn.getAttribute("data-maint");
                if (what === "next") R.nextMaintenance();
                else if (what === "close") R.closeMaintenance();
                else if (what === "again") { R._maint = null; R.startMaintenance(); }
                else if (what === "check") {
                    const input = document.getElementById("rpg-maint-input");
                    R.answerMaintenance(input ? input.value : "");
                }
                return;
            }
            const maintOpt = e.target.closest("[data-maint-opt]");
            if (maintOpt) {
                R.answerMaintenance(maintOpt.getAttribute("data-maint-opt"));
                return;
            }
            const storyOpen = e.target.closest("[data-story-open]");
            if (storyOpen) {
                const node = rpgStoryNode(storyOpen.getAttribute("data-story-open"));
                if (node) { R.closeHub(); R.showStoryChoice(node); }
                return;
            }
            const storyOpt = e.target.closest("[data-story-option]");
            if (storyOpt) {
                R.chooseStoryOption(storyOpt.getAttribute("data-story-node"), storyOpt.getAttribute("data-story-option"));
                return;
            }
            if (e.target.closest("[data-shield-copy]")) {
                try {
                    const code = R.contributionCode();
                    if (navigator.clipboard && code) navigator.clipboard.writeText(code);
                    R.toast("🛡", rpgT("shieldCopied"), code, "tier-gold");
                } catch (err) {}
                return;
            }
            if (e.target.closest("[data-shield-pool]")) {
                const area = document.getElementById("rpg-shield-codes");
                const res = R.poolClassCodes(area ? area.value : "");
                if (area && res.addedCodes) area.value = "";
                return;
            }
            const dueEdit = e.target.closest("[data-rpg-due-edit]");
            if (dueEdit) {
                const id = dueEdit.getAttribute("data-rpg-due-edit");
                let current = "";
                try {
                    const row = (Storage.getAssignments() || []).find(a => a.id === id);
                    current = row ? R.dueInputValue(row.dueAt) : "";
                } catch (err) {}
                const answer = prompt(rpgT("duePrompt"), current);
                if (answer === null) return;
                const value = String(answer).trim();
                const ok = R.setAssignmentDue(id, value ? value + "T23:59:00" : "");
                if (ok) {
                    R.toast("📅", value ? rpgT("dueSet") : rpgT("dueCleared"), "", "tier-gold");
                    try { Teacher.renderAssignments(); } catch (err) {}
                    try { if (typeof renderStudentAssignments === "function") renderStudentAssignments(); } catch (err) {}
                    try { R.renderDueBanner(); } catch (err) {}
                }
                return;
            }
            const dueOpen = e.target.closest("[data-rpg-due-open]");
            if (dueOpen) {
                const raw = dueOpen.getAttribute("data-rpg-due-open");
                const id = raw.indexOf("custom:") === 0 ? raw : parseInt(raw, 10);
                const code = dueOpen.getAttribute("data-rpg-due-code") || "";
                if (typeof isLevelAvailable === "function" && !isLevelAvailable(id)) {
                    // Понятное сообщение вместо молчаливого отказа: урока нет на устройстве.
                    if (typeof RPG !== "undefined") RPG.toast("⚠️", rpgT("asLessonMissing"), "", "warning");
                    return;
                }
                Game.startLevel(id, code);
                return;
            }
        });
    }
});


/* ---------------- ЗАПУСК РАСШИРЕНИЙ ---------------- */
(function bootExtras() {
    if (typeof RPG === "undefined" || !RPG || typeof RPG.boot !== "function") return;
    const origBoot = RPG.boot;
    RPG.boot = function () {
        const result = origBoot.apply(this, arguments);
        try {
            this.installExtras();
        } catch (e) {
            console.error("RPG extras install failed", e);
        }
        return result;
    };
})();
