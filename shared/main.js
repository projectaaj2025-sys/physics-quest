/* ===== js/main.js ===== */
/* ============================================
   MAIN — Главный модуль, связывающий всё
   ============================================ */

// Глобальный показ уведомлений
function showNotification(text, type = "info") {
    const el = document.getElementById("notification");
    el.textContent = text;
    el.className = `notification ${type} show`;
    setTimeout(() => el.classList.remove("show"), 2500);
}

// Показ экрана
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id)?.classList.add("active");
}

let storyModalMode = "journal";
let storyBriefingLevel = null;
let levelScreenTab = "levels";

/* Окно «Лор и сюжет» содержит две части в одном окне:
   1) .story-lore — текст лора, 2) #pq-comic-zone — комикс трилогии.
   Так комикс живёт вместе с лором, а не отдельной кнопкой. */
function ensureStoryLayout() {
    const content = document.getElementById("story-content");
    if (!content) return null;
    let lore = content.querySelector("#story-lore");
    let zone = content.querySelector("#pq-comic-zone");
    if (!lore || !zone) {
        content.innerHTML = "";
        lore = document.createElement("div");
        lore.id = "story-lore";
        lore.className = "story-lore";
        zone = document.createElement("section");
        zone.id = "pq-comic-zone";
        zone.className = "pq-comic-zone";
        zone.setAttribute("aria-live", "polite");
        content.appendChild(lore);
        content.appendChild(zone);
    }
    return { lore, zone };
}

function setStoryModalContent(kicker, title, html, mode = "journal") {
    storyModalMode = mode;
    document.getElementById("story-kicker").textContent = kicker || "";
    document.getElementById("story-title").textContent = title || "";
    const layout = ensureStoryLayout();
    const target = layout ? layout.lore : document.getElementById("story-content");
    target.innerHTML = html || "";
    if (layout) {
        layout.zone.style.display = "none";
        layout.zone.innerHTML = "";
        document.querySelector(".story-modal-content")?.classList.remove("story-has-comic");
    }
    const continueButton = document.getElementById("btn-story-continue");
    continueButton.style.display = mode === "briefing" ? "inline-flex" : "none";
    document.getElementById("story-modal").classList.add("active");
    if (layout && mode === "journal") {
        // Комикс больше не живёт отдельной секцией: он встроен в каждую главу
        // лора (см. showStoryJournal → TrilogyDiary.inlineHtml).
        if (typeof TrilogyDiary !== "undefined" && TrilogyDiary.bindInline) {
            try { TrilogyDiary.bindInline(target); } catch (e) { console.error(e); }
        }
        // Кнопка «Комикс по главам» у героев ведёт к комиксу первой главы
        const jump = target.querySelector('[data-pq-jump="comic"]');
        if (jump) jump.onclick = (e) => {
            e.preventDefault();
            const first = target.querySelector(".pq-td-inline");
            try { (first || target).scrollIntoView({ block: "start", behavior: "smooth" }); } catch (err) {}
        };
    }
}

function showStoryBriefing(levelId) {
    const chapter = getStoryChapter(levelId);
    storyBriefingLevel = levelId;
    if (typeof Game !== "undefined" && Game.running && !Game.storyOpen) {
        Game.storyOpen = true;
        Game.paused = true;
        Game.pauseStartedAt = Date.now();
    }
    const levelName = typeof levelTitleText === "function" ? levelTitleText(levelId) : String(levelId);
    const chapterProgress = Storage.getProgress();
    const completedInChapter = Array.from({ length: chapter.to - chapter.from + 1 }, (_, i) => chapter.from + i)
        .filter(id => chapterProgress.completedLevels[id]).length;
    const latestReveal = (chapter.revelations || []).filter(item => completedInChapter >= item.required).slice(-1)[0];
    const kicker = `${I18n.t("storyMissionBriefing")} · ${storyText(chapter.title)}`;
    const html = `
        <p class="story-setting"><strong>${I18n.t("storySettingLabel")}:</strong> ${escapeHtml(storyText(chapter.setting))}</p>
        <p>${escapeHtml(storyText(chapter.intro))}</p>
        ${latestReveal ? `<p class="story-mission"><strong>🔓 ${escapeHtml(storyText(latestReveal.title))}:</strong> ${escapeHtml(storyText(latestReveal.text))}</p>` : ""}
        <p class="story-mission"><strong>${I18n.t("storyLevelLabel")}:</strong> ${escapeHtml(levelName)}</p>
        <p class="story-goal"><strong>${I18n.t("storyMissionGoal")}:</strong> ${escapeHtml(storyText(chapter.goal))}</p>
    `;
    setStoryModalContent(kicker, storyText(chapter.title), html, "briefing");
}

function storyParagraphsHtml(text, className = "") {
    const localizedText = text && typeof text === "object" ? storyText(text) : text;
    return String(localizedText || "").split(/\n\s*\n/).filter(Boolean)
        .map(paragraph => `<p class="${className}">${escapeHtml(paragraph)}</p>`).join("");
}

function completedStoryLevels(progress) {
    return Array.from({ length: LEVELS_CONFIG.length }, (_, i) => i + 1)
        .filter(id => progress.completedLevels[id]).length;
}

function showStoryJournal() {
    const progress = Storage.getProgress();
    const currentLevel = Math.max(1, Math.min(LEVELS_CONFIG.length, Number(progress.unlockedLevel) || 1));
    const totalCompleted = completedStoryLevels(progress);
    const totalLevels = LEVELS_CONFIG.length;
    const percentage = Math.round((totalCompleted / totalLevels) * 100);
    const castIntro = window.PQStoryCast && PQStoryCast.introHtml ? PQStoryCast.introHtml() : "";
    const html = `
        ${castIntro}
        <div class="story-overall-progress">
            <strong>${I18n.t("storyGlobalProgress")}</strong>
            <div class="story-progress-track"><div class="story-progress-fill" style="width:${percentage}%"></div></div>
            <div class="story-chapter-meta">${I18n.t("storyLevelsCompleted", totalCompleted, totalLevels)} · ${percentage}%</div>
        </div>
        <p>${I18n.t("storyJournalIntro")}</p>
        <div class="story-journal-list">
            ${STORY_CHAPTERS.map(chapter => {
                const total = chapter.to - chapter.from + 1;
                const completed = Array.from({ length: total }, (_, i) => chapter.from + i)
                    .filter(id => progress.completedLevels[id]).length;
                const current = currentLevel >= chapter.from && currentLevel <= chapter.to;
                const done = completed >= total;
                const status = done ? I18n.t("storyChapterCompleted") : current ? I18n.t("storyChapterCurrent") : I18n.t("storyChapterPending");
                const revelations = chapter.revelations || [];
                const unlocked = revelations.filter(item => completed >= item.required);
                const locked = revelations.filter(item => completed < item.required);
                const story = completed > 0 || current ? (chapter.narrative || chapter.intro) : chapter.intro;
                // Комикс этой главы идёт сразу под её лором — одной лентой, без
                // переключателя классов: ученик видит только свой класс.
                const comicBlock = (typeof TrilogyDiary !== "undefined" && TrilogyDiary.inlineHtml)
                    ? (() => { try { return TrilogyDiary.inlineHtml(chapter.from, chapter.to); } catch (e) { return ""; } })()
                    : "";
                const evidence = revelations.length
                    ? `<div class="story-revelations"><div class="story-story-label">${I18n.t("storyEvidenceTitle")}</div>${unlocked.map(item => `<div class="story-revelation"><h4>🔓 ${escapeHtml(storyText(item.title))}</h4><p>${escapeHtml(storyText(item.text))}</p></div>`).join("")}${locked.map(item => `<div class="story-locked-revelation">🔒 ${I18n.t("storyLockedDetail", item.required - completed)}</div>`).join("")}</div>`
                    : `<div class="story-revelations"><div class="story-locked-revelation">🔒 ${I18n.t("storyNoEvidence")}</div></div>`;
                const epilogue = done && chapter.epilogue && totalCompleted >= totalLevels
                    ? `<div class="story-epilogue"><h3>${I18n.t("storyEpilogueTitle")}</h3>${storyParagraphsHtml(storyText(chapter.epilogue))}</div>`
                    : "";
                return `<article class="story-chapter-card ${current ? "current" : ""} ${done ? "completed" : ""}">
                    <h3>${escapeHtml(storyText(chapter.title))}</h3>
                    <div class="story-chapter-meta">${status} · ${I18n.t("storyProgressLabel", completed, total)}</div>
                    <div class="story-story-label">${I18n.t("storyChapterStory")}</div>
                    <div class="story-setting"><strong>${I18n.t("storySettingLabel")}:</strong> ${escapeHtml(storyText(chapter.setting))}</div>
                    <div class="story-chapter-story">${storyParagraphsHtml(story)}</div>
                    ${comicBlock}
                    <div class="story-goal"><strong>${I18n.t("storyMissionGoal")}:</strong> ${escapeHtml(storyText(chapter.goal))}</div>
                    ${evidence}
                    ${epilogue}
                </article>`;
            }).join("")}
        </div>
    `;
    storyBriefingLevel = null;
    setStoryModalContent(I18n.t("storyChronicle"), I18n.t("storyJournal"), html, "journal");
}

function closeStoryModal() {
    const modal = document.getElementById("story-modal");
    if (typeof Game !== "undefined" && Game.storyOpen) {
        const pausedForStory = Game.pauseStartedAt ? Date.now() - Game.pauseStartedAt : 0;
        Game.pausedTotal += pausedForStory;
        Game.pauseStartedAt = 0;
        Game.paused = false;
        Game.storyOpen = false;
        Game.lastTime = performance.now();
        if (Game.running && Game.canvas) Game.canvas.focus();
    }
    storyBriefingLevel = null;
    modal.classList.remove("active");
}

function continueStory() {
    closeStoryModal();
}

// Экранирование HTML
function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    const div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
}

// Форматирование формул: превращает ASCII- и Unicode-индексы
// в настоящие подстрочные/надстрочные элементы <sub>/<sup>.
// Строка сначала экранируется через escapeHtml (безопасно вставлять как innerHTML),
// затем все "_имя" заменяются на "<sub>имя</sub>".
function formatUnicodeIndices(html) {
    // Превращаем готовые Unicode-индексы и степени в семантические sub/sup.
    // Это сохраняет правильное отображение и на узких экранах, и при масштабировании.
    const subMap = {
        "₀":"0", "₁":"1", "₂":"2", "₃":"3", "₄":"4", "₅":"5",
        "₆":"6", "₇":"7", "₈":"8", "₉":"9", "₊":"+", "₋":"−",
        "₌":"=", "₍":"(", "₎":")", "ₖ":"k", "ₚ":"p"
    };
    const supMap = {
        "⁰":"0", "¹":"1", "²":"2", "³":"3", "⁴":"4", "⁵":"5",
        "⁶":"6", "⁷":"7", "⁸":"8", "⁹":"9", "⁺":"+", "⁻":"−",
        "⁼":"=", "⁽":"(", "⁾":")", "ⁿ":"n", "ⁱ":"i"
    };
    return html
        .replace(/[₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₖₚ]+/g, m => `<sub>${[...m].map(ch => subMap[ch]).join("")}</sub>`)
        .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ]+/g, m => `<sup>${[...m].map(ch => supMap[ch]).join("")}</sup>`);
}

function formatFormula(str) {
    if (str === null || str === undefined) return "";
    const escaped = escapeHtml(str);
    const withAsciiIndices = escaped
        .replace(/_([A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9]+)/g, "<sub>$1</sub>")
        .replace(/\^([A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9]+)/g, "<sup>$1</sup>");
    return formatUnicodeIndices(withAsciiIndices);
}

// Форматирование времени
function formatTime(ms) {
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}
function formatTimeShort(ms) {
    return formatTime(ms);
}

// ============ ЗАГРУЗКА ============
window.startPhysicsQuestBoot = function () {
    const fill = document.getElementById("loading-fill");
    if (fill) fill.style.width = "100%";
    initApp();
};

function initApp() {
    I18n.init();
    Game.init();
    Teacher.init();
    setupMainMenu();
    setupModals();

    const params = new URLSearchParams(window.location.search);
    const hash = String(window.location.hash || "");

    const assignParam = params.get("assign") || (hash.match(/(?:#|&)assign=([A-Za-z0-9]+)/) || [])[1] || "";
    if (assignParam) {
        Storage.attachAssignmentCode(assignParam);
    }

    if (hash === "#teacher" || params.get("screen") === "teacher") {
        showScreen("teacher-screen");
        Teacher.populateTopicSelect(true);
        Teacher.populateAssignmentLevelSelect(true);
        Teacher.populateAssignmentLevelSelect(true, "class-assignment-level");
        Teacher.switchTab("class");
        return;
    }

    const autostart = params.get("autostart");
    if (autostart) {
        const lvl = autostart.startsWith("custom:") ? autostart : parseInt(autostart, 10);
        if (isLevelAvailable(lvl)) {
            Game.startLevel(lvl, assignParam);
            return;
        }
    }

    if (hash === "#assignments") {
        showLevelSelect();
        setLevelScreenTab("assignments");
        return;
    }

    if (hash === "#levels") {
        showLevelSelect();
        return;
    }

    if (hash === "#continue") {
        const progress = Storage.getProgress();
        const last = Math.max(1, Number(progress.unlockedLevel) || 1);
        Game.startLevel(last);
        return;
    }

    showScreen("menu-screen");
    if (window.PQAccount) {
        window.PQAccount.maybeShowOnboarding();
    }
}

// ============ ГЛАВНОЕ МЕНЮ ============
function setupMainMenu() {
    document.getElementById("btn-start").addEventListener("click", () => {
        showLevelSelect();
    });

    document.getElementById("btn-continue").addEventListener("click", () => {
        const progress = Storage.getProgress();
        const last = progress.completedLevels[progress.unlockedLevel - 1] ? progress.unlockedLevel : 1;
        Game.startLevel(last);
    });

    document.getElementById("btn-teacher").addEventListener("click", () => {
        showScreen("teacher-screen");
        Teacher.populateTopicSelect(true);
        Teacher.populateAssignmentLevelSelect(true);
        Teacher.populateAssignmentLevelSelect(true, "class-assignment-level");
        Teacher.switchTab("create");
    });

    document.getElementById("btn-records").addEventListener("click", () => {
        showRecords();
    });

    document.getElementById("btn-howto").addEventListener("click", () => {
        showHowToPlay();
    });

    document.getElementById("btn-about").addEventListener("click", () => {
        showAbout();
    });
    document.getElementById("btn-level-story").addEventListener("click", () => {
        showStoryJournal();
    });
    // Смена языка перерисовывает открытое окно лора вместе с комиксом
    window.addEventListener("pq:lang-changed", () => {
        const modal = document.getElementById("story-modal");
        if (!modal || !modal.classList.contains("active") || storyModalMode !== "journal" || storyBriefingLevel !== null) return;
        showStoryJournal();
    });
    document.getElementById("btn-levels-tab").addEventListener("click", () => {
        setLevelScreenTab("levels");
    });
    document.getElementById("btn-student-assignments-tab").addEventListener("click", () => {
        setLevelScreenTab("assignments");
    });
    document.getElementById("btn-add-student-assignment-code").addEventListener("click", () => {
        const input = document.getElementById("student-assignment-code");
        const outcome = Storage.attachAssignmentCode(input.value);
        if (outcome.notFound) {
            showNotification(I18n.t("assignmentCodeNotFound"), "warning");
            return;
        }
        input.value = "";
        renderStudentAssignments();
        showNotification(outcome.existing ? I18n.t("assignmentCodeAlreadyAdded") : I18n.t("assignmentCodeAdded"), "success");
    });

    // Профиль пилота (РПГ)
    document.getElementById("btn-profile").addEventListener("click", () => {
        showProfile();
    });
    document.getElementById("btn-profile-back").addEventListener("click", () => {
        showScreen("menu-screen");
    });
    document.getElementById("profile-name").addEventListener("input", (e) => {
        const s = Storage.getSettings();
        s.playerName = e.target.value.trim();
        Storage.setSettings(s);
    });

    // Профиль ученика: лимиты подсказок и попыток для самостоятельной игры
    const limitsGrid = document.querySelector(".quest-limits-grid");
    if (limitsGrid) {
        limitsGrid.addEventListener("change", () => {
            const hintsSelect = document.getElementById("profile-hints");
            const attemptsSelect = document.getElementById("profile-attempts");
            const limits = Storage.setQuestLimits({
                hints: hintsSelect ? hintsSelect.value : undefined,
                attempts: attemptsSelect ? attemptsSelect.value : undefined
            });
            if (hintsSelect) hintsSelect.value = String(limits.hints);
            if (attemptsSelect) attemptsSelect.value = String(limits.attempts);
            showNotification(I18n.t("questLimitsSaved"), "success");
        });
    }

    // Теория перед уровнем
    document.getElementById("btn-theory-start").addEventListener("click", () => {
        const id = pendingLevelId;
        closeTheory();
        if (id !== null && id !== undefined) Game.startLevel(id);
    });
    document.getElementById("btn-theory-back").addEventListener("click", () => {
        closeTheory();
    });

    document.getElementById("btn-back-to-menu").addEventListener("click", () => {
        showScreen("menu-screen");
    });

    // Пауза: HUD-кнопка и кнопка «Продолжить» на оверлее
    document.getElementById("btn-pause").addEventListener("click", (e) => {
        Game.togglePause();
        e.currentTarget.blur(); // чтобы пробел после клика не «жмякал» кнопку снова
    });
    document.getElementById("btn-resume").addEventListener("click", () => {
        Game.togglePause();
    });

    // Кнопка выхода из уровня (в HUD, видна на каждом уровне)
    document.getElementById("btn-exit-level").addEventListener("click", () => {
        if (!Game.running) return;
        if (confirm(I18n.t("exitConfirm"))) Game.exitLevel();
    });

    // Кнопка continue видна, если есть прогресс
    const progress = Storage.getProgress();
    if (Object.keys(progress.completedLevels).length > 0) {
        document.getElementById("btn-continue").style.display = "inline-flex";
    }

    // Кнопка retry
    document.getElementById("btn-retry").addEventListener("click", () => {
        Game.startLevel(Game.currentLevel, Game.activeAssignmentCode || "");
    });
    document.getElementById("btn-menu").addEventListener("click", () => {
        showScreen("menu-screen");
    });
    document.getElementById("btn-next-level").addEventListener("click", () => {
        Game.startLevel(Game.currentLevel + 1);
    });
    document.getElementById("btn-victory-menu").addEventListener("click", () => {
        showScreen("menu-screen");
    });

    // Языки
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            I18n.setLanguage(btn.dataset.lang);
            // Обновить динамические элементы
            refreshAfterLangChange();
        });
    });
}

function refreshAfterLangChange() {
    // Если язык переключили прямо во время задания, перерисовать его тело:
    // вопрос, варианты, формулу и локализованные поля ответа должны смениться сразу.
    if (typeof Game !== "undefined" && Game.running) {
        const storyHud = document.getElementById("hud-story");
        if (storyHud) storyHud.textContent = storyText(getStoryChapter(Game.currentLevel).title);
    }
    if (typeof Game !== "undefined" && Game.isTaskActive && Game.currentTask) {
        Game.renderTaskBody(Game.currentTask);
        document.getElementById("task-title").textContent = I18n.t("task") + " #" + (Game.completedTaskIds.length + 1);
        document.getElementById("task-type-badge").textContent = I18n.t(i18nTypeKey(Game.currentTask.type));
        document.getElementById("btn-submit").textContent = I18n.t("submit");
        const taskFeedback = document.getElementById("task-feedback");
        if (taskFeedback) {
            taskFeedback.className = "task-feedback";
            taskFeedback.textContent = "";
            taskFeedback.removeAttribute("style");
        }
        Game.updateTaskStats();
    }
    // Обновить заголовки экранов, если они уже были открыты
    const active = document.querySelector(".screen.active");
    if (active?.id === "level-screen") showLevelSelect();
    if (active?.id === "profile-screen") showProfile();
    if (active?.id === "teacher-screen") {
        Teacher.populateTopicSelect(true);
        Teacher.renderAnswerFields();
        const activeTab = document.querySelector(".tab-content.active");
        if (activeTab?.id === "tab-lessons") Teacher.renderLessonsList();
        if (activeTab?.id === "tab-assignments") {
            Teacher.populateAssignmentLevelSelect(true);
            Teacher.populateAssignmentLevelSelect(true, "class-assignment-level");
            Teacher.populateClassSelect(true);
            Teacher.renderClasses();
            Teacher.renderAssignments();
        }
        if (activeTab?.id === "tab-manage") Teacher.renderTasksList();
        if (activeTab?.id === "tab-stats") Teacher.renderStats();
    }
    if (document.getElementById("records-modal")?.classList.contains("active")) {
        showRecords(currentRecordsView);
    }
    if (document.getElementById("story-modal")?.classList.contains("active")) {
        if (storyModalMode === "briefing" && storyBriefingLevel !== null) showStoryBriefing(storyBriefingLevel);
        else showStoryJournal();
    }
    if (document.getElementById("theory-modal")?.classList.contains("active") && currentTheoryKey) {
        const activeTheoryTab = document.querySelector("#theory-tabs .theory-tab.active");
        document.getElementById("theory-title").textContent = levelTitleText(pendingLevelId);
        renderTheoryContent(activeTheoryTab?.dataset.tab || "textbook");
    }
}

// ============ ВЫБОР УРОВНЯ ============
function setLevelScreenTab(tabName) {
    levelScreenTab = tabName === "assignments" ? "assignments" : "levels";
    const levelsTab = document.getElementById("btn-levels-tab");
    const assignmentsTab = document.getElementById("btn-student-assignments-tab");
    const levelsPanel = document.getElementById("levels-panel");
    const assignmentsPanel = document.getElementById("student-assignments-panel");
    const showingAssignments = levelScreenTab === "assignments";
    const levelScreen = document.getElementById("level-screen");
    levelScreen?.classList.toggle("showing-assignments", showingAssignments);
    levelsTab?.classList.toggle("active", !showingAssignments);
    assignmentsTab?.classList.toggle("active", showingAssignments);
    levelsTab?.setAttribute("aria-selected", String(!showingAssignments));
    assignmentsTab?.setAttribute("aria-selected", String(showingAssignments));
    if (levelsPanel) levelsPanel.hidden = showingAssignments;
    if (assignmentsPanel) assignmentsPanel.hidden = !showingAssignments;
    if (showingAssignments) renderStudentAssignments();
}

function renderStudentAssignments() {
    const list = document.getElementById("student-assignments-list");
    const badge = document.getElementById("student-assignments-count");
    if (!list) return;
    const assignments = Storage.getAssignmentsForCurrentPlayer().slice().sort((a, b) =>
        String(b.assignedAt || "").localeCompare(String(a.assignedAt || ""))
    );
    if (badge) {
        badge.textContent = assignments.length ? String(assignments.length) : "";
        badge.hidden = assignments.length === 0;
    }
    if (!assignments.length) {
        list.innerHTML = `<div class="student-assignment-empty">📭 ${I18n.t("noStudentAssignments")}</div>`;
        return;
    }
    list.innerHTML = assignments.map(assignment => {
        const result = Storage.getAssignmentResult(assignment);
        // Неудачные попытки — «В процессе» с результатом последней попытки.
        const lastAttempt = result ? null : Storage.getAssignmentLastAttempt(assignment);
        const completed = !!result;
        const parsedAss = parseLevelRef(assignment.levelId, assignment.grade || Storage.grade());
        const isOtherGrade = !parsedAss.isCustom && parsedAss.grade !== Storage.grade();
        const rawId = String(assignment.levelId);
        const target = escapeHtml(isOtherGrade ? catalogLevelLabel(parsedAss.canonical, parsedAss.grade, true) : levelTitleText(parsedAss.levelId));
        const details = [
            assignment.className ? `👥 ${escapeHtml(assignment.className)}` : "",
            assignment.note ? `💬 ${escapeHtml(assignment.note)}` : `💬 ${I18n.t("assignmentNoNote")}`,
            formatRecordDate(assignment.assignedAt)
        ].filter(Boolean).join(" · ");
        const statusHtml = completed
            ? "✅ " + I18n.t("assignmentCompleted")
            : lastAttempt ? "⏳ " + I18n.t("assignmentInProgress") : "🕘 " + I18n.t("assignmentPending");
        const resultLine = result
            ? `<div class="student-assignment-meta assignment-item-result">${I18n.t("assignmentResult", result.score || 0, result.accuracy || 0)} · ${I18n.t("assignmentPassedAt", formatRecordDate(result.date))}</div>`
            : lastAttempt
                ? `<div class="student-assignment-meta assignment-item-result">${I18n.t("assignmentResult", lastAttempt.score || 0, lastAttempt.accuracy || 0)} · ${I18n.t("assignmentLastAttempt", formatRecordDate(lastAttempt.date))}</div>`
                : "";
        return `<article class="student-assignment-card ${completed ? "completed" : ""}">
            <div class="student-assignment-main">
                <div class="student-assignment-level">${target}</div>
                <div class="student-assignment-status">${statusHtml}</div>
                <div class="student-assignment-meta">${details}</div>
                ${resultLine}
            </div>
            <button type="button" class="btn btn-primary" data-student-assignment-start="${escapeHtml(rawId)}" data-student-assignment-code="${escapeHtml(assignment.assignmentCode || "")}">${I18n.t("openAssignment")}</button>
        </article>`;
    }).join("");
    // Кнопка «Открыть» в карточке назначения: атрибуты те же, что в разметке выше
    // (data-student-assignment-start / -code). Раньше селектор и dataset не совпадали
    // с разметкой, и назначение нельзя было начать — исправлено.
    list.querySelectorAll("[data-student-assignment-start]").forEach(btn => {
        btn.addEventListener("click", () => {
            const raw = btn.getAttribute("data-student-assignment-start");
            const code = btn.getAttribute("data-student-assignment-code") || "";
            const parsed = parseLevelRef(raw, Storage.grade());
            if (!parsed.isCustom && parsed.grade !== Storage.grade()) {
                const codeParam = code ? `&assign=${encodeURIComponent(code)}` : "";
                window.location.href = `./play.html?grade=${parsed.grade}&autostart=${parsed.levelId}${codeParam}`;
                return;
            }
            if (!isLevelAvailable(parsed.levelId, parsed.grade)) {
                showNotification(I18n.t("assignmentLessonMissing"), "warning");
                return;
            }
            Game.startLevel(parsed.levelId, code);
        });
    });
}

function showLevelSelect() {
    const grid = document.getElementById("levels-grid");
    const progress = Storage.getProgress();

    // Строка пилота (РПГ)
    const settings = Storage.getSettings();
    const pname = settings.playerName ? escapeHtml(settings.playerName) : I18n.t("anonymous");
    const st = getRocketStyle(settings.rocketStyle);
    document.getElementById("pilot-line").innerHTML =
        `👨‍🚀 ${I18n.t("pilot")}: <strong style="--pilot-accent:${st.accent}">${pname}</strong>`;
    const storyProgress = document.getElementById("story-progress");
    if (storyProgress) {
        const currentChapter = getStoryChapter(Number(progress.unlockedLevel) || 1);
        storyProgress.innerHTML = `<strong>${I18n.t("storyCurrentArc")}:</strong> ${escapeHtml(storyText(currentChapter.title))}<br><span>${escapeHtml(storyText(currentChapter.goal))}</span>`;
    }

    const L = I18n.currentLang || "ru";
    const studentAssignments = Storage.getAssignmentsForCurrentPlayer();
    const assignedIds = new Set();
    studentAssignments.forEach(a => {
        const p = parseLevelRef(a.levelId, a.grade || Storage.grade());
        if (p.isCustom || p.grade === Storage.grade()) {
            assignedIds.add(String(p.levelId));
        }
    });
    const badgeText = {
        safety:  { ru: "⚠ Бонус",   en: "⚠ Bonus",  kk: "⚠ Бонус" },
        chapter: { ru: "📖 §",      en: "📖 §",     kk: "📖 §" },
        lab:     { ru: "🔬 Лаб.",   en: "🔬 Lab",   kk: "🔬 Зерт." },
        custom:  { ru: "👩‍🏫 Урок учителя", en: "👩‍🏫 Teacher lesson", kk: "👩‍🏫 Мұғалім сабағы" }
    };
    const assignedBadge = { ru: "👩‍🏫 Назначено", en: "👩‍🏫 Assigned", kk: "👩‍🏫 Тағайындалды" };
    const bonusCount = LEVELS_CONFIG.filter(l => l.chapter === "bonus" || l.kind === "safety").length;
    const lessonsCount = LEVELS_CONFIG.filter(l => l.chapter && /^p\d+$/.test(l.chapter)).length;
    const labCount = LEVELS_CONFIG.filter(l => String(l.chapter || "").indexOf("lab") === 0).length;
    const sectionTitles = {
        bonus:  { ru: "⚠ БОНУСНЫЙ УРОВЕНЬ — ТЕХНИКА БЕЗОПАСНОСТИ",
                  en: "⚠ BONUS — LAB SAFETY",
                  kk: "⚠ БОНУС — ҚАУІПСІЗДІК" },
        lessons: { ru: `📖 УРОВНИ ПО § УЧЕБНИКА (${lessonsCount})`,
                   en: `📖 LEVELS BY § (${lessonsCount} paragraphs)`,
                   kk: `📖 § БОЙЫНША ДЕҢГЕЙЛЕР (${lessonsCount} параграф)` },
        lab:    { ru: `🔬 ЛАБОРАТОРНЫЕ РАБОТЫ (${labCount})`,
                  en: `🔬 LABORATORY WORKS (${labCount})`,
                  kk: `🔬 ЗЕРТХАНАЛЫҚ ЖҰМЫСТАР (${labCount})` },
        custom: { ru: "👩‍🏫 УРОКИ УЧИТЕЛЯ",
                  en: "👩‍🏫 TEACHER'S LESSONS",
                  kk: "👩‍🏫 МҰҒАЛІМ САБАҚТАРЫ" }
    };

    function badgeOf(level) {
        const ch = String(level.chapter || "lesson");
        if (ch.indexOf("lab") === 0) return "lab";
        if (ch === "bonus" || ch === "safety" || level.kind === "safety") return "safety";
        return "chapter";
    }

    function card(level) {
        const isUnlocked = true; // ВСЕ УРОВНИ ОТКРЫТЫ — можно играть в любом порядке
        const completed = progress.completedLevels[level.id];
        // Звёзд ровно 0–3: чужие/старые данные не должны ломать карточку.
        const stars = Math.max(0, Math.min(3, Math.round(Number(completed?.stars) || 0)));
        const isCompleted = !!completed;
        const badge = badgeOf(level);
        const badgeLabel = badgeText[badge][L];
        const assigned = assignedIds.has(String(level.id));
        return `
            <div class="level-card ${isUnlocked ? "" : "locked"} ${isCompleted ? "completed" : ""} ${assigned ? "assigned" : ""} level-${badge}"
                 data-id="${level.id}">
                <button class="level-theory-btn" type="button" data-id="${level.id}">${I18n.t("theoryBtn")}</button>
                <div class="level-badge">${assigned ? assignedBadge[L] : badgeLabel}</div>
                <div class="level-number">${level.id}</div>
                <div class="level-title">${I18n.t(getLevelNameKey(level.id))}</div>
                <div class="level-desc">${escapeHtml(levelDescriptionText(level))}</div>
                <div class="level-stars">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
            </div>
        `;
    }

    // Секции: 1) назначенные 2) bonus (safety) 3) lessons (chapter p1-p39) 4) lab 5) уроки учителя
    const bonus  = LEVELS_CONFIG.filter(l => l.chapter === "bonus" || l.kind === "safety");
    const lessons = LEVELS_CONFIG.filter(l => l.chapter && /^p\d+$/.test(l.chapter));
    const lab    = LEVELS_CONFIG.filter(l => String(l.chapter || "").indexOf("lab") === 0);
    const customLessons = Storage.getCustomLessons();


    function customCard(lesson, num) {
        const cid = "custom:" + lesson.id;
        const completed = progress.completedLevels[cid];
        const stars = Math.max(0, Math.min(3, Math.round(Number(completed?.stars) || 0)));
        const nTasks = Teacher.getAllTasks().filter(t => t.topic === cid).length;
        const assigned = assignedIds.has(cid);
        return `
            <div class="level-card ${completed ? "completed" : ""} ${assigned ? "assigned" : ""} level-custom" data-id="${cid}">
                <button class="level-theory-btn" type="button" data-id="${cid}">${I18n.t("theoryBtn")}</button>
                <div class="level-badge">${assigned ? assignedBadge[L] : badgeText.custom[L]}</div>
                <div class="level-number">${num}</div>
                <div class="level-title">📝 ${escapeHtml(I18n.getLocalized(lesson, "name"))}</div>
                <div class="level-desc">${I18n.t("tasksCountLabel")}: ${nTasks}</div>
                <div class="level-stars">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
            </div>
        `;
    }

    let mainLevelsHtml = "";
    if (typeof EPISODES !== "undefined" && Array.isArray(EPISODES) && EPISODES.length && typeof epText === "function") {
        mainLevelsHtml = EPISODES.map(ep => {
            const epLvls = (ep.levels || []).map(id => LEVELS_CONFIG.find(l => l.id === id)).filter(Boolean);
            if (!epLvls.length) return "";
            return `<div class="episode-banner" style="--ep-color:${ep.color || '#00b8d4'}">🛰️ ${escapeHtml(epText(ep, "title"))}</div>`
                + epLvls.map(card).join("");
        }).join("");
    } else {
        mainLevelsHtml =
            (bonus.length   ? `<div class="level-section-title">${sectionTitles.bonus[L]}</div>` : "") +
            bonus.map(card).join("") +
            (lessons.length ? `<div class="level-section-title">${sectionTitles.lessons[L]}</div>` : "") +
            lessons.map(card).join("") +
            (lab.length     ? `<div class="level-section-title">${sectionTitles.lab[L]}</div>` : "") +
            lab.map(card).join("");
    }
    grid.innerHTML = mainLevelsHtml +
        (customLessons.length ? `<div class="level-section-title">${sectionTitles.custom[L]}</div>` : "") +
        customLessons.map((l, idx) => customCard(l, idx + 1)).join("");

    grid.querySelectorAll("[data-assignment-start]").forEach(button => {
        button.addEventListener("click", () => {
            const raw = button.dataset.assignmentStart;
            const id = raw.indexOf("custom:") === 0 ? raw : parseInt(raw, 10);
            if (!isLevelAvailable(id)) {
                showNotification(I18n.t("lessonMissing"), "warning");
                return;
            }
            Game.startLevel(id);
        });
    });

    grid.querySelectorAll(".level-card").forEach(c => {
        c.addEventListener("click", (e) => {
            // Отдельная кнопка «Теория» на карточке
            const tbtn = e.target.closest(".level-theory-btn");
            if (tbtn) {
                e.stopPropagation();
                const raw = tbtn.dataset.id;
                const tid = raw.indexOf("custom:") === 0 ? raw : parseInt(raw, 10);
                openTheory(tid);
                return;
            }
            if (c.classList.contains("locked")) {
                showNotification(I18n.t("locked"), "warning");
                return;
            }
            const raw = c.dataset.id;
            const id = raw.indexOf("custom:") === 0 ? raw : parseInt(raw, 10);
            Game.startLevel(id);
        });
    });

    renderStudentAssignments();
    setLevelScreenTab(levelScreenTab);
    showScreen("level-screen");
}

// ============ ТЕОРИЯ ПЕРЕД УРОВНЕМ ============
let pendingLevelId = null;

function theoryKeyFor(levelId) {
    const cfg = getLevelConfig(levelId);
    if (!cfg) return "custom";
    if (cfg.chapter === "lab") return cfg.kind || "lab1";
    if (cfg.kind === "safety" || cfg.chapter === "bonus") return "bonus";
    if (cfg.chapter && /^p\d+$/.test(cfg.chapter)) return cfg.chapter;
    return "custom";
}

function levelTitleText(levelId) {
    if (typeof levelId === "string" && levelId.indexOf("custom:") === 0) {
        const lesson = Storage.getCustomLessons().find(l => "custom:" + l.id === levelId);
        if (lesson) return "📝 " + I18n.getLocalized(lesson, "name");
    }
    return I18n.t(getLevelNameKey(levelId));
}

function levelDescriptionText(level) {
    if (!level) return "";
    const langKey = I18n.currentLang || "ru";
    const keys = [];
    if (level.description && typeof level.description === "object" && level.description.key) {
        keys.push(level.description.key);
    }
    keys.push(`level${level.id}Desc`);
    for (const key of keys) {
        const localized = I18n.t(key);
        if (localized !== key && localized) return decorateLevelDesc(localized, level);
    }
    if (level.kind === "safety") {
        const safety = I18n.t("levelSafetyDesc");
        if (safety !== "levelSafetyDesc" && safety) return decorateLevelDesc(safety, level);
    }
    if (typeof LEVEL_DESC_TR !== "undefined" && LEVEL_DESC_TR && LEVEL_DESC_TR[level.id]) {
        const tr = LEVEL_DESC_TR[level.id][langKey] || LEVEL_DESC_TR[level.id].ru;
        if (tr) return decorateLevelDesc(tr, level);
    }
    const descMaps = {
        ru: typeof LEVEL_DESCRIPTIONS_RU !== "undefined" ? LEVEL_DESCRIPTIONS_RU : null,
        en: typeof LEVEL_DESCRIPTIONS_EN !== "undefined" ? LEVEL_DESCRIPTIONS_EN : null,
        kk: typeof LEVEL_DESCRIPTIONS_KK !== "undefined" ? LEVEL_DESCRIPTIONS_KK : null
    };
    const map = descMaps[langKey];
    if (map && map[level.id]) return decorateLevelDesc(map[level.id], level);
    const labText = labGoalLine(level, langKey);
    if (labText) return labText;
    const plain = typeof level.desc === "string" ? level.desc : (typeof level.description === "string" ? level.description : "");
    return decorateLevelDesc(plain, level);
}

// Единый вид описания на карточке уровня: ⚠ безопасность, 🔬 лаборатория, 📖 теория
function decorateLevelDesc(text, level) {
    const clean = String(text == null ? "" : text).trim();
    if (!clean) return "";
    if (/^[\u26A0\uD83D\uDCD6\uD83D\uDD2C\uD83D\uDCDD\uD83D\uDEE1]/.test(clean)) return clean;
    const kind = String((level && level.kind) || "");
    const icon = kind === "safety" ? "\u26A0 " : kind.indexOf("lab") === 0 ? "\uD83D\uDD2C " : "\uD83D\uDCD6 ";
    return icon + clean;
}

// Лабораторные уровни: короткое описание берём из цели работы
function labGoalLine(level, langKey) {
    const kind = String(level.kind || "");
    if (kind.indexOf("lab") !== 0) return "";
    if (typeof LAB_INFO !== "undefined" && LAB_INFO && LAB_INFO[kind]) {
        const goal = LAB_INFO[kind].goal;
        const text = typeof goal === "string" ? goal : (goal && (goal[langKey] || goal.ru));
        if (text) return "🔬 " + text;
    }
    if (typeof LAB_WORKS !== "undefined" && LAB_WORKS && LAB_WORKS[kind]) {
        const entry = LAB_WORKS[kind];
        const md = entry[langKey] || entry.ru || "";
        const match = String(md).match(/## [^\n]*\n• ([^\n]+)/);
        if (match) return "🔬 " + match[1].trim();
    }
    return "";
}

function renderTheoryText(text) {
    const fmt = s => formatUnicodeIndices(s
        .replace(/_([A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9]+)/g, "<sub>$1</sub>")
        .replace(/\^([A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі0-9]+)/g, "<sup>$1</sup>"));
    return String(text || "").split("\n").map(raw => {
        const line = raw.replace(/\s+$/, "");
        if (!line.trim()) return "";
        if (line.startsWith("## ")) return `<h4 class="theory-h">${fmt(escapeHtml(line.slice(3)))}</h4>`;
        if (line.startsWith("> "))  return `<div class="t-formula">${fmt(escapeHtml(line.slice(2)))}</div>`;
        if (line.startsWith("• "))  return `<div class="t-line t-bullet">${fmt(escapeHtml(line))}</div>`;
        return `<div class="t-line">${fmt(escapeHtml(line))}</div>`;
    }).join("");
}

let currentTheoryKey = null;

function openTheory(levelId) {
    currentTheoryKey = theoryKeyFor(levelId);
    pendingLevelId = levelId;
    document.getElementById("theory-title").textContent = levelTitleText(levelId);
    const tabs = document.getElementById("theory-tabs");
    const conspektTab = tabs.querySelector('[data-tab="conspekt"]');
    const experimentTab = tabs.querySelector('[data-tab="experiment"]');
    const solutionTab = tabs.querySelector('[data-tab="solution"]');
    const formulasTab = tabs.querySelector('[data-tab="formulas"]');
    const hasConspekt = !!CONSPECT[currentTheoryKey];
    const hasExperiment = !!getExperimentResource(currentTheoryKey) || !!(window.PQHomeExperiments && PQHomeExperiments.theoryHtml(levelId, I18n.currentLang));
    // «Разбор задачи» и «Формулы §» переехали из окна задания в теорию перед уровнем.
    const hasSolver = !!(window.PQProblemSolver && typeof PQProblemSolver.renderTheory === "function");
    if (conspektTab) conspektTab.style.display = hasConspekt ? "inline-flex" : "none";
    if (experimentTab) experimentTab.style.display = hasExperiment ? "inline-flex" : "none";
    if (solutionTab) solutionTab.style.display = hasSolver ? "inline-flex" : "none";
    if (formulasTab) formulasTab.style.display = hasSolver ? "inline-flex" : "none";
    if (hasConspekt || hasExperiment || hasSolver) {
        tabs.style.display = "flex";
        setTheoryTab("textbook");
    } else {
        tabs.style.display = "none";
        renderTheoryContent("textbook");
    }
    document.getElementById("theory-modal").classList.add("active");
}

function setTheoryTab(tab) {
    document.querySelectorAll("#theory-tabs .theory-tab").forEach(b => {
        b.classList.toggle("active", b.dataset.tab === tab);
    });
    // разбору задачи и карточке формул нужно больше места, чем тексту учебника
    const modal = document.getElementById("theory-modal");
    if (modal) modal.classList.toggle("theory-wide", tab === "solution" || tab === "formulas");
    renderTheoryContent(tab);
}

function conspektTitle(c) {
    const L = I18n.currentLang;
    return (L === "en" && c.titleEn) || (L === "kk" && c.titleKk) || c.title;
}

function conspektText(c) {
    const L = I18n.currentLang;
    return (L === "en" && c.en) || (L === "kk" && c.kk) || c.ru;
}

function localizedExperimentValue(value) {
    const lang = I18n.currentLang || "ru";
    if (Array.isArray(value)) return value.map(localizedExperimentValue);
    if (value && typeof value === "object") {
        const localized = ["ru", "en", "kk"].some(key => Object.prototype.hasOwnProperty.call(value, key));
        if (localized) return value[lang] || value.ru || value.en || value.kk || "";
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localizedExperimentValue(item)]));
    }
    return value;
}

function getExperimentResource(key) {
    const isLab = String(key || "").indexOf("lab") === 0;
    if (typeof EXPERIMENTS_LOCALIZED !== "undefined" && EXPERIMENTS_LOCALIZED) {
        const table = isLab ? EXPERIMENTS_LOCALIZED.LAB_INFO : EXPERIMENTS_LOCALIZED.EXPERIMENTS_BY_PARAGRAPH;
        if (table && table[key]) return localizedExperimentValue(table[key]);
    }
    if (isLab && typeof LAB_INFO !== "undefined" && LAB_INFO[key]) {
        return localizedExperimentValue(LAB_INFO[key]);
    }
    if (!isLab && typeof EXPERIMENTS_BY_PARAGRAPH !== "undefined" && EXPERIMENTS_BY_PARAGRAPH[key]) {
        return localizedExperimentValue(EXPERIMENTS_BY_PARAGRAPH[key]);
    }
    if (isLab && typeof LAB_WORKS !== "undefined" && LAB_WORKS[key]) {
        const entry = LAB_WORKS[key];
        return { __markdown: entry[I18n.currentLang] || entry.ru || "" };
    }
    if (!isLab && typeof CONSPECT_EXPERIMENTS !== "undefined" && CONSPECT_EXPERIMENTS[key]) {
        const entry = CONSPECT_EXPERIMENTS[key];
        return { __markdown: entry[I18n.currentLang] || entry.ru || "" };
    }
    return null;
}

function resourceLinksHtml(items) {
    if (!items || !items.length) return "";
    return `<div class="resource-list">${items.map(item => `<a class="resource-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(item.label)}</a>`).join("")}</div>`;
}

function renderResourceBox(data, lab = false) {
    if (!data) return "";
    let html = `<section class="experiment-box ${lab ? "lab-box" : ""}">
        <div class="experiment-kicker">${lab ? I18n.t("experimentLabLabel") : I18n.t("experimentLabel")}</div>
        <h3>${escapeHtml(data.title || "")}</h3>`;
    if (data.goal) html += `<p><strong>${I18n.t("experimentGoal")}:</strong> ${escapeHtml(data.goal)}</p>`;
    if (data.description) html += `<p>${escapeHtml(data.description)}</p>`;
    if (data.equipment) html += `<p><strong>${I18n.t("experimentEquipment")}:</strong> ${escapeHtml(data.equipment)}</p>`;
    if (data.steps && data.steps.length) html += `<div class="experiment-subtitle">${I18n.t("experimentSteps")}</div><ol>${data.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
    if (data.formulas && data.formulas.length) html += `<div class="experiment-subtitle">${I18n.t("experimentFormulas")}</div><div class="experiment-formulas">${data.formulas.map(formula => `<code>${formatFormula(formula)}</code>`).join("")}</div>`;
    if (data.questions && data.questions.length) html += `<div class="experiment-subtitle">${I18n.t("experimentQuestions")}</div><ul>${data.questions.map(question => `<li>${escapeHtml(question)}</li>`).join("")}</ul>`;
    if (data.links && data.links.length) html += `<div class="experiment-subtitle">${I18n.t("experimentResources")}</div>${resourceLinksHtml(data.links)}`;
    html += `</section>`;
    return html;
}

function renderTheoryContent(tab) {
    const key = currentTheoryKey;
    const box = document.getElementById("theory-content");
    if (tab === "solution" || tab === "formulas") {
        if (window.PQProblemSolver && typeof PQProblemSolver.renderTheory === "function") {
            if (tab === "solution") PQProblemSolver.renderTheory(box, pendingLevelId);
            else PQProblemSolver.renderTheoryFormulas(box, pendingLevelId);
        } else {
            box.innerHTML = "";
        }
        const mc = document.querySelector("#theory-modal .modal-content");
        if (mc) mc.scrollTop = 0;
        return;
    }
    if (tab === "experiment") {
        const resource = getExperimentResource(key);
        const homeTheory = window.PQHomeExperiments ? PQHomeExperiments.theoryHtml(pendingLevelId, I18n.currentLang) : "";
        box.innerHTML = (resource
            ? (resource.__markdown ? renderTheoryText(resource.__markdown) : renderResourceBox(resource, String(key).indexOf("lab") === 0))
            : (homeTheory ? "" : `<p class="experiment-empty">${I18n.t("experimentUnavailable")}</p>`)) + homeTheory;
    } else if (tab === "conspekt" && CONSPECT[key]) {
        const c = CONSPECT[key];
        const ofCard = (window.PQOformlenie && PQOformlenie.render) ? PQOformlenie.render(key) : "";
        box.innerHTML = `<div class="theory-conspekt-title">📘 ${escapeHtml(conspektTitle(c))}</div>`
            + renderTheoryText(conspektText(c))
            + ofCard;
    } else {
        const entry = LEVEL_THEORY[key] || LEVEL_THEORY["bonus"] || LEVEL_THEORY["custom"] || { ru: "" };
        const text = entry[I18n.currentLang] || entry.ru || "";
        const epPrefix = (typeof episodeBriefingHtml === "function" && pendingLevelId) ? episodeBriefingHtml(pendingLevelId) : "";
        // пример оформления показываем и в учебнике: слабый ученик видит, как писать решение
        const ofCard = (window.PQOformlenie && PQOformlenie.render) ? PQOformlenie.render(key) : "";
        box.innerHTML = epPrefix + renderTheoryText(text) + ofCard;
    }
    const mc = document.querySelector("#theory-modal .modal-content");
    if (mc) mc.scrollTop = 0;
}

function conspektKeys() {
    return Object.keys(CONSPECT)
        .filter(k => /^p\d+$/.test(k))
        .sort((a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10));
}

function openConspektFull() {
    const keys = conspektKeys();
    document.getElementById("conspekt-toc").innerHTML = keys.map(k =>
        `<button type="button" class="conspekt-toc-item" data-k="${k}">${escapeHtml(conspektTitle(CONSPECT[k]))}</button>`
    ).join("");
    document.querySelectorAll("#conspekt-toc .conspekt-toc-item").forEach(b => {
        b.addEventListener("click", () => {
            const mc = document.querySelector("#conspekt-modal .modal-content");
            const el = document.getElementById("conspekt-sec-" + b.dataset.k);
            if (mc && el) {
                const r = mc.getBoundingClientRect();
                mc.scrollTop += (el.getBoundingClientRect().top - r.top - 12);
            }
        });
    });
    document.getElementById("conspekt-content").innerHTML = keys.map(k => {
        const c = CONSPECT[k];
        return `<section class="conspekt-section" id="conspekt-sec-${k}">
            <h3 class="conspekt-section-title">${escapeHtml(conspektTitle(c))}</h3>
            ${renderTheoryText(conspektText(c))}
        </section>`;
    }).join("");
    const mc = document.querySelector("#conspekt-modal .modal-content");
    if (mc) mc.scrollTop = 0;
    document.getElementById("conspekt-modal").classList.add("active");
}

function downloadConspektPdf() {
    const lang = I18n.currentLang || "ru";
    const pdfMap = window.GRADE_META && window.GRADE_META.pdfFiles;
    if (pdfMap && (pdfMap[lang] || pdfMap.ru)) {
        const item = pdfMap[lang] || pdfMap.ru;
        const a = document.createElement("a");
        a.href = item.url;
        a.download = item.filename || item.url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
    }
    openConspektFull();
}

function closeTheory() {
    const modal = document.getElementById("theory-modal");
    if (modal) {
        modal.classList.remove("active");
        // теорию могли открыть поверх «техобслуживания» — возвращаем обычный слой
        modal.style.zIndex = "";
    }
    pendingLevelId = null;
}

// ============ ПРОФИЛЬ ПИЛОТА (РПГ) ============
// PDF-файлы, прикреплённые к игре: кнопка выбирает файл по текущему языку интерфейса.
const PROFILE_NOTES_FILES = {
    ru: "assets/pdf/grade8-ru.pdf",
    en: "assets/pdf/grade8-en.pdf",
    kk: "assets/pdf/grade8-kk.pdf"
};
const PROFILE_NOTES_LANG_NAMES = {
    ru: "Русский",
    en: "English",
    kk: "Қазақша"
};
const PROFILE_NOTES_V2_FILES = {
    ru: "assets/pdf/grade8-ru.pdf",
    en: "assets/pdf/grade8-en.pdf",
    kk: "assets/pdf/grade8-kk.pdf"
};

function updateProfileNotesDownload() {
    const link = document.getElementById("btn-download-notes-pdf");
    const language = document.getElementById("profile-notes-language");
    const linkV2 = document.getElementById("btn-download-notes-v2-pdf");
    const languageV2 = document.getElementById("profile-notes-v2-language");
    const lang = I18n.currentLang || "ru";
    const languageName = PROFILE_NOTES_LANG_NAMES[lang] || PROFILE_NOTES_LANG_NAMES.ru;
    const pdfMap = window.GRADE_META && window.GRADE_META.pdfFiles;

    if (linkV2) linkV2.style.display = "none";
    if (languageV2) languageV2.style.display = "none";

    if (link) {
        if (pdfMap && (pdfMap[lang] || pdfMap.ru)) {
            const item = pdfMap[lang] || pdfMap.ru;
            link.href = item.url;
            link.download = item.filename;
            link.onclick = null;
        } else {
            link.href = "#conspekt";
            link.removeAttribute("download");
            link.onclick = (e) => { e.preventDefault(); openConspektFull(); };
        }
        if (language) {
            language.textContent = `${I18n.t("profileNotesLanguage")}: ${languageName}`;
        }
    }
}

function showProfile() {
    const s = Storage.getSettings();
    document.getElementById("profile-name").value = s.playerName || "";
    const playerIdField = document.getElementById("profile-player-id");
    if (playerIdField) playerIdField.value = s.playerCode || s.playerId || "";
    // Правила тренировки: сколько подсказок и попыток на задание
    const limits = Storage.getQuestLimits();
    const hintsSelect = document.getElementById("profile-hints");
    const attemptsSelect = document.getElementById("profile-attempts");
    if (hintsSelect) hintsSelect.value = String(limits.hints);
    if (attemptsSelect) attemptsSelect.value = String(limits.attempts);
    renderRocketGrid();
    updateProfileNotesDownload();
    showScreen("profile-screen");
}

function renderRocketGrid() {
    const s = Storage.getSettings();
    const grid = document.getElementById("rocket-grid");
    grid.innerHTML = ROCKET_STYLES.map(st => `
        <div class="rocket-option ${s.rocketStyle === st.id ? "selected" : ""}" data-id="${st.id}">
            ${rocketSVG(st)}
            <div class="rocket-name">${localName(st.name)}</div>
        </div>
    `).join("");
    grid.querySelectorAll(".rocket-option").forEach(el => {
        el.addEventListener("click", () => {
            const cur = Storage.getSettings();
            cur.rocketStyle = el.dataset.id;
            Storage.setSettings(cur);
            renderRocketGrid();
            showNotification(I18n.t("designSaved"), "success");
        });
    });
}

// ============ ЗАЩИЩЁННЫЙ СБРОС ПРОГРЕССА ============
let resetProgressReturnFocus = null;

function normalizedResetWord(value) {
    return String(value || "").trim().toLocaleUpperCase();
}

function syncResetProgressDialog(clearInput = false) {
    const input = document.getElementById("reset-progress-confirmation");
    const confirmButton = document.getElementById("btn-reset-progress-confirm");
    const word = document.getElementById("reset-progress-word");
    const error = document.getElementById("reset-progress-error");
    if (!input || !confirmButton || !word) return;
    if (clearInput) input.value = "";
    word.textContent = I18n.t("resetProgressWord");
    confirmButton.disabled = normalizedResetWord(input.value) !== normalizedResetWord(word.textContent);
    if (error) {
        error.hidden = true;
        error.textContent = "";
    }
}

function showResetProgressError(key) {
    const error = document.getElementById("reset-progress-error");
    if (!error) return;
    error.textContent = I18n.t(key);
    error.hidden = false;
}

function openResetProgressDialog() {
    const modal = document.getElementById("reset-progress-modal");
    if (!modal) return;
    resetProgressReturnFocus = document.activeElement;
    syncResetProgressDialog(true);
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    window.setTimeout(() => document.getElementById("reset-progress-confirmation")?.focus(), 0);
}

function closeResetProgressDialog(restoreFocus = true) {
    const modal = document.getElementById("reset-progress-modal");
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    syncResetProgressDialog(true);
    if (restoreFocus && resetProgressReturnFocus && typeof resetProgressReturnFocus.focus === "function") {
        resetProgressReturnFocus.focus();
    }
    resetProgressReturnFocus = null;
}

function confirmResetAllProgress() {
    const input = document.getElementById("reset-progress-confirmation");
    const confirmButton = document.getElementById("btn-reset-progress-confirm");
    if (!input || !confirmButton) return;
    if (normalizedResetWord(input.value) !== normalizedResetWord(I18n.t("resetProgressWord"))) {
        syncResetProgressDialog(false);
        showResetProgressError("resetProgressMismatch");
        input.focus();
        return;
    }

    confirmButton.disabled = true;
    if (!Storage.resetAllProgress()) {
        syncResetProgressDialog(false);
        showResetProgressError("resetProgressError");
        return;
    }

    // Не даём отложенному RPG-сохранению вернуть старое состояние между
    // удалением ключей и перезагрузкой страницы.
    if (typeof RPG !== "undefined" && RPG.state) {
        if (RPG._saveTimer) window.clearTimeout(RPG._saveTimer);
        RPG._saveTimer = null;
        RPG.state = RPG.defaultState();
        RPG.run = null;
    }
    closeResetProgressDialog(false);
    const continueButton = document.getElementById("btn-continue");
    if (continueButton) continueButton.style.display = "none";
    showNotification(I18n.t("resetProgressDone"), "success");
    window.setTimeout(() => window.location.reload(), 450);
}

// ============ МОДАЛКИ ============
function setupModals() {
    document.getElementById("btn-reset-progress")?.addEventListener("click", openResetProgressDialog);
    document.getElementById("btn-reset-progress-cancel")?.addEventListener("click", () => closeResetProgressDialog());
    document.getElementById("reset-progress-confirmation")?.addEventListener("input", () => syncResetProgressDialog(false));
    document.getElementById("reset-progress-form")?.addEventListener("submit", (event) => {
        event.preventDefault();
        confirmResetAllProgress();
    });
    const resetModal = document.getElementById("reset-progress-modal");
    resetModal?.addEventListener("click", (event) => {
        if (event.target === resetModal) closeResetProgressDialog();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && resetModal?.classList.contains("active")) {
            event.preventDefault();
            closeResetProgressDialog();
        }
    });
    window.addEventListener("pq:lang-changed", () => {
        if (resetModal?.classList.contains("active")) syncResetProgressDialog(true);
    });

    document.getElementById("btn-clear-records").addEventListener("click", () => {
        if (confirm(I18n.t("clearRecordsConfirm"))) {
            Storage.clearRecords();
            showNotification(I18n.t("recordsCleared"), "success");
            showRecords();
        }
    });
    document.getElementById("btn-clear-history").addEventListener("click", () => {
        if (confirm(I18n.t("clearHistoryConfirm"))) {
            Storage.clearHistory();
            showNotification(I18n.t("historyCleared"), "success");
            showRecords();
        }
    });
    document.querySelectorAll("#records-tabs [data-record-view]").forEach(button => {
        button.addEventListener("click", () => showRecords(button.dataset.recordView));
    });
    document.getElementById("btn-records-close").addEventListener("click", () => {
        document.getElementById("records-modal").classList.remove("active");
    });
    document.getElementById("btn-story-close").addEventListener("click", closeStoryModal);
    document.getElementById("btn-story-continue").addEventListener("click", continueStory);
    document.getElementById("btn-howto-close").addEventListener("click", () => {
        document.getElementById("howto-modal").classList.remove("active");
    });
    document.getElementById("btn-about-close").addEventListener("click", () => {
        document.getElementById("about-modal").classList.remove("active");
    });
    document.querySelectorAll("#theory-tabs .theory-tab").forEach(b => {
        b.addEventListener("click", () => setTheoryTab(b.dataset.tab));
    });
    document.getElementById("btn-download-conspekt").addEventListener("click", downloadConspektPdf);
    document.getElementById("btn-conspekt-close").addEventListener("click", () => {
        document.getElementById("conspekt-modal").classList.remove("active");
    });
}

let currentRecordsView = "mine";

function formatRecordDate(value) {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    try {
        const locale = I18n.currentLang === "kk" ? "kk-KZ" : I18n.currentLang === "en" ? "en-US" : "ru-RU";
        return new Intl.DateTimeFormat(locale, { dateStyle: "short", timeStyle: "short" }).format(date);
    } catch (_) {
        return date.toLocaleString();
    }
}

function showRecords(view = currentRecordsView) {
    currentRecordsView = ["mine", "all", "history"].includes(view) ? view : "mine";
    document.querySelectorAll("#records-tabs [data-record-view]").forEach(button => {
        button.classList.toggle("active", button.dataset.recordView === currentRecordsView);
    });

    let records;
    if (currentRecordsView === "history") {
        records = Storage.getHistory().slice().reverse();
    } else if (currentRecordsView === "all") {
        records = Storage.getRecords();
    } else {
        records = Storage.getMyRecords();
    }

    const table = document.getElementById("records-table");
    if (records.length === 0) {
        table.innerHTML = `<p class="no-records">${I18n.t(currentRecordsView === "mine" ? "noMyRecords" : "noRecords")}</p>`;
    } else {
        table.innerHTML = `
            <div class="record-row" style="background: var(--bg-darker); font-weight: 700; color: var(--primary)">
                <div class="record-rank">#</div>
                <div>${I18n.t("playerCol")}</div>
                <div class="record-level">${I18n.t("levelCol")}</div>
                <div class="record-score">${I18n.t("scoreCol")}</div>
                <div class="record-time">${I18n.t("dateCol")}</div>
            </div>
            ${records.map((r, i) => {
                const success = r.victory !== false;
                const status = success ? I18n.t("completedStatus") : I18n.t("failedStatus");
                const language = r.language ? String(r.language).toUpperCase() : "—";
                const levelLabel = r.levelLabel ?? r.level ?? "—";
                return `
                    <div class="record-row ${currentRecordsView === "history" ? "history-row" : ""}">
                        <div class="record-rank ${i === 0 && currentRecordsView !== "history" ? "gold" : i === 1 && currentRecordsView !== "history" ? "silver" : i === 2 && currentRecordsView !== "history" ? "bronze" : ""}">${i + 1}</div>
                        <div class="record-name">
                            ${escapeHtml(r.name || I18n.t("anonymous"))}
                            <div class="record-status">${status} • ${language}</div>
                        </div>
                        <div class="record-level">${escapeHtml(String(levelLabel))}</div>
                        <div class="record-score">
                            ${Number(r.score) || 0}
                            <div class="record-status">${Number(r.accuracy) || 0}% • ${formatTime(Number(r.time) || 0)}</div>
                        </div>
                        <div class="record-time">${formatRecordDate(r.date)}</div>
                    </div>
                `;
            }).join("")}
        `;
    }
    document.getElementById("records-modal").classList.add("active");
}

function showHowToPlay() {
    const content = document.getElementById("howto-content");
    content.innerHTML = `
        <p>${I18n.t("howToPlayIntro")}</p>
        <h3>${I18n.t("howToPlayGoals")}</h3>
        <ul>
            <li>${I18n.t("howToPlayGoal1")}</li>
            <li>${I18n.t("howToPlayGoal2")}</li>
            <li>${I18n.t("howToPlayGoal3")}</li>
            <li>${I18n.t("howToPlayGoal4")}</li>
        </ul>
        <h3>${I18n.t("howToPlayControls")}</h3>
        <p><strong>${I18n.t("howToPlayMove")}:</strong>
            <span class="key-hint">W</span>
            <span class="key-hint">A</span>
            <span class="key-hint">S</span>
            <span class="key-hint">D</span>
            ${I18n.t("orWord")}
            <span class="key-hint">←</span>
            <span class="key-hint">↑</span>
            <span class="key-hint">↓</span>
            <span class="key-hint">→</span>
        </p>
        <h3>${I18n.t("howToPlayObjective")}</h3>
        <ul>
            <li>${I18n.t("howToPlayObj1")}</li>
            <li>${I18n.t("howToPlayObj2")}</li>
            <li>${I18n.t("howToPlayObj3")}</li>
            <li>${I18n.t("howToPlayObj4")}</li>
            <li>${I18n.t("howToPlayObj5")}</li>
            <li>${I18n.t("howToPlayObj6")}</li>
        </ul>
        <h3>${I18n.t("howToPlayTips")}</h3>
        <ol>
            <li>${I18n.t("howToPlayTip1")}</li>
            <li>${I18n.t("howToPlayTip2")}</li>
            <li>${I18n.t("howToPlayTip3")}</li>
        </ol>
        <h3>${I18n.t("howToPlayNumbers")}</h3>
        <ul>
            <li>${I18n.t("howToPlayNum1")}</li>
            <li>${I18n.t("howToPlayNum2")}</li>
            <li>${I18n.t("howToPlayNum3")}</li>
            <li>${I18n.t("howToPlayNum4")}</li>
            <li>${I18n.t("howToPlayNum5")}</li>
            <li>${formatFormula(I18n.t("howToPlayNum6"))}</li>
        </ul>
        <h3>${I18n.t("taskTypesTitle")}</h3>
        <ul>
            <li>🎯 ${I18n.t("type_multiple_choice")} — ${I18n.t("typeHelp_multiple_choice")}</li>
            <li>☑ ${I18n.t("type_multi_select")} — ${I18n.t("typeHelp_multi_select")}</li>
            <li>🔗 ${I18n.t("type_matching")} — ${I18n.t("typeHelp_matching")}</li>
            <li>✍ ${I18n.t("type_short_answer")} — ${I18n.t("typeHelp_short_answer")}</li>
            <li>🔢 ${I18n.t("type_numeric")} — ${I18n.t("typeHelp_numeric")}</li>
            <li>✓✗ ${I18n.t("type_true_false")} — ${I18n.t("typeHelp_true_false")}</li>
            <li>📝 ${I18n.t("type_fill_blank")} — ${I18n.t("typeHelp_fill_blank")}</li>
        </ul>
    `;
    document.getElementById("howto-modal").classList.add("active");
}

function showAbout() {
    const content = document.getElementById("about-content");
    content.innerHTML = `
        <p>${I18n.t("aboutContent")}</p>
        <h3>${I18n.t("aboutFeatures")}</h3>
        <ul>
            ${[1, 2, 3, 4, 5, 6, 7, 8]
                .map(n => `<li>${I18n.t("aboutFeature" + n)}</li>`)
                .join("")}
        </ul>
        <h3>${I18n.t("aboutTech")}</h3>
        <p>${I18n.t("aboutTechText")}</p>
        <h3>${I18n.t("aboutLicense")}</h3>
        <p>${I18n.t("aboutLicenseText")}</p>
    `;
    document.getElementById("about-modal").classList.add("active");
}


