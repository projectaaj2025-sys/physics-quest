/* ===== js/teacher.js ===== */
/* ============================================
   TEACHER MODE — Режим учителя
   Создание/редактирование/удаление заданий разных типов
   ============================================ */

const Teacher = {
    editingId: null,

    init() {
        // Переключение вкладок
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => this.switchTab(btn.dataset.tab));
        });

        // Заполнить список тем — все уроки игры (уровни 1-50)
        this.populateTopicSelect();

        // Смена типа задания → обновить поля ответа
        document.getElementById("form-type").addEventListener("change", () => this.renderAnswerFields());

        // Сохранение формы
        document.getElementById("task-form").addEventListener("submit", (e) => {
            e.preventDefault();
            this.saveTask();
        });

        // Сброс формы
        document.getElementById("task-form").addEventListener("reset", () => {
            setTimeout(() => this.renderAnswerFields(), 0);
            this.editingId = null;
        });

        // Инициализация полей ответа
        this.renderAnswerFields();

        // Кнопка "Назад" в режиме учителя
        document.getElementById("btn-teacher-back").addEventListener("click", () => {
            showScreen("menu-screen");
        });

        // Добавление своих уроков
        document.getElementById("btn-add-lesson").addEventListener("click", () => this.addLesson());

        // Назначения ученикам и классам
        document.getElementById("btn-add-assignment").addEventListener("click", () => this.addAssignment());
        document.getElementById("btn-save-class").addEventListener("click", () => this.addClass());
        document.getElementById("btn-assign-class").addEventListener("click", () => this.assignToClass());
        document.getElementById("btn-export-assignments").addEventListener("click", () => this.exportAssignments());
        document.getElementById("assignment-import-file").addEventListener("change", (event) => this.importAssignments(event));
        this.populateAssignmentLevelSelect();
        this.populateAssignmentLevelSelect(true, "class-assignment-level");
        this.populateClassSelect();
        this.renderClasses();
    },

    switchTab(tabName) {
        // Rebuild dynamic topic labels on every teacher-tab entry.
        this.populateTopicSelect(true);
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tabName));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.toggle("active", c.id === `tab-${tabName}`));

        if (tabName === "lessons") this.renderLessonsList();
        if (tabName === "assignments") {
            this.populateAssignmentLevelSelect();
            this.populateAssignmentLevelSelect(true, "class-assignment-level");
            this.populateClassSelect();
            this.renderClasses();
            this.renderAssignments();
        }
        if (tabName === "manage") this.renderTasksList();
        if (tabName === "stats") this.renderStats();
    },

    getAssignmentLevelLabel(levelId) {
        if (typeof catalogLevelLabel === "function") {
            return catalogLevelLabel(levelId, Storage.grade(), true);
        }
        const raw = String(levelId);
        if (raw.indexOf("custom:") === 0) {
            const lesson = Storage.getCustomLessons().find(l => `custom:${l.id}` === raw);
            return lesson ? `📝 ${I18n.getLocalized(lesson, "name")}` : raw;
        }
        const n = parseInt(raw, 10);
        return Number.isFinite(n) ? `#${n} — ${I18n.t(getLevelNameKey(n))}` : raw;
    },

    populateAssignmentLevelSelect(keepValue = true, selectId = "assignment-level") {
        const select = document.getElementById(selectId);
        if (!select) return;
        const previous = keepValue ? select.value : "";
        select.innerHTML = LEVELS_CONFIG.map(level =>
            `<option value="${level.id}">#${level.id} — ${escapeHtml(I18n.t(getLevelNameKey(level.id)))}</option>`
        ).join("") + Storage.getCustomLessons().map(lesson =>
            `<option value="custom:${lesson.id}">📝 ${escapeHtml(I18n.getLocalized(lesson, "name"))}</option>`
        ).join("");
        if (previous && Array.from(select.options).some(option => option.value === previous)) {
            select.value = previous;
        }
    },

    parseClassStudents(text) {
        return String(text || "").split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
            const parts = line.split("|");
            const name = String(parts.shift() || "").trim();
            const studentCode = parts.join("|").trim();
            return {
                name,
                playerId: studentCode,
                studentCode
            };
        }).filter(student => student.name || student.playerId);
    },

    addClass() {
        const nameInput = document.getElementById("class-name");
        const studentsInput = document.getElementById("class-students");
        const name = nameInput.value.trim();
        const students = this.parseClassStudents(studentsInput.value);
        if (!name) {
            showNotification(I18n.t("classNeedName"), "warning");
            return;
        }
        if (!students.length) {
            showNotification(I18n.t("classNeedStudents"), "warning");
            return;
        }
        const saved = Storage.addClass({ name, students });
        if (!saved) {
            showNotification(I18n.t("classNeedStudents"), "warning");
            return;
        }
        nameInput.value = "";
        studentsInput.value = "";
        this.populateClassSelect(false);
        const classSelect = document.getElementById("assignment-class");
        classSelect.value = saved.id;
        this.renderClasses();
        showNotification(I18n.t("classSaved"), "success");
    },

    populateClassSelect(keepValue = true) {
        const select = document.getElementById("assignment-class");
        if (!select) return;
        const previous = keepValue ? select.value : "";
        const classes = Storage.getClasses();
        select.innerHTML = classes.length
            ? classes.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)} (${item.students.length})</option>`).join("")
            : `<option value="">${I18n.t("noClasses")}</option>`;
        if (previous && Array.from(select.options).some(option => option.value === previous)) {
            select.value = previous;
        }
    },

    renderClasses() {
        const container = document.getElementById("classes-list");
        if (!container) return;
        const classes = Storage.getClasses();
        if (!classes.length) {
            container.innerHTML = `<p class="empty-message">${I18n.t("noClasses")}</p>`;
            return;
        }
        container.innerHTML = classes.map(item => {
            const students = item.students.map(student => {
                const studentCode = student.studentCode || student.playerId;
                const label = student.name || studentCode;
                return studentCode && student.name
                    ? `${escapeHtml(label)} <span class="class-student-id">(${escapeHtml(studentCode)})</span>`
                    : escapeHtml(label);
            }).join(", ");
            return `
                <div class="class-item">
                    <div class="class-item-main">
                        <div class="class-item-title">👥 ${escapeHtml(item.name)} — ${item.students.length}</div>
                        <div class="class-item-meta">${students}</div>
                    </div>
                    <div class="class-item-actions">
                        <button type="button" class="btn-icon-only danger" data-class-delete="${escapeHtml(item.id)}" title="${I18n.t("delete")}">×</button>
                    </div>
                </div>
            `;
        }).join("");
        container.querySelectorAll("[data-class-delete]").forEach(button => {
            button.addEventListener("click", () => {
                if (confirm(I18n.t("deleteClassConfirm"))) {
                    Storage.deleteClass(button.dataset.classDelete);
                    this.populateClassSelect(false);
                    this.renderClasses();
                    this.renderAssignments();
                }
            });
        });
    },

    assignToClass() {
        const classId = document.getElementById("assignment-class").value;
        const levelInput = document.getElementById("class-assignment-level");
        const noteInput = document.getElementById("class-assignment-note");
        if (!classId) {
            showNotification(I18n.t("chooseClassFirst"), "warning");
            return;
        }
        if (!levelInput.value) {
            showNotification(I18n.t("assignmentNeedLevel"), "warning");
            return;
        }
        const levelId = levelInput.value.indexOf("custom:") === 0 ? levelInput.value : parseInt(levelInput.value, 10);
        const added = Storage.addAssignmentsForClass(classId, levelId, noteInput.value);
        if (!added.length) {
            showNotification(I18n.t("classNeedStudents"), "warning");
            return;
        }
        noteInput.value = "";
        this.renderAssignments();
        showNotification(I18n.t("classAssignmentSaved", added.length, added[0]?.assignmentCode || "—"), "success");
    },

    addAssignment() {
        const nameInput = document.getElementById("assignment-student-name");
        const idInput = document.getElementById("assignment-player-id");
        const levelInput = document.getElementById("assignment-level");
        const noteInput = document.getElementById("assignment-note");
        const studentName = nameInput.value.trim();
        const playerId = idInput.value.trim();
        if (!studentName && !playerId) {
            showNotification(I18n.t("assignmentNeedStudent"), "warning");
            return;
        }
        if (!levelInput.value) {
            showNotification(I18n.t("assignmentNeedLevel"), "warning");
            return;
        }
        const saved = Storage.addAssignment({
            studentName,
            playerId,
            studentCode: playerId,
            levelId: levelInput.value.indexOf("custom:") === 0 ? levelInput.value : parseInt(levelInput.value, 10),
            note: noteInput.value
        });
        nameInput.value = "";
        idInput.value = "";
        noteInput.value = "";
        this.renderAssignments();
        showNotification(I18n.t("assignmentSavedWithCode", saved.assignmentCode), "success");
    },

    exportAssignments() {
        const blob = new Blob([Storage.exportAssignments()], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "physics-quest-assignments.json";
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 0);
        showNotification(I18n.t("assignmentsExported"), "success");
    },

    importAssignments(event) {
        const file = event.target.files && event.target.files[0];
        event.target.value = "";
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const imported = Storage.importAssignments(JSON.parse(reader.result));
                this.populateClassSelect(false);
                this.renderClasses();
                this.renderAssignments();
                showNotification(I18n.t("assignmentsImported", imported.assignments.length), "success");
            } catch (error) {
                console.error("Assignment import error:", error);
                showNotification(I18n.t("assignmentsImportError"), "warning");
            }
        };
        reader.readAsText(file);
    },

    renderAssignments() {
        const container = document.getElementById("assignments-list");
        if (!container) return;
        const assignments = Storage.getAssignments().slice().sort((a, b) =>
            String(b.assignedAt || "").localeCompare(String(a.assignedAt || ""))
        );
        if (assignments.length === 0) {
            container.innerHTML = `<p class="empty-message">${I18n.t("noAssignments")}</p>`;
            return;
        }
        container.innerHTML = assignments.map(assignment => {
            const result = Storage.getAssignmentResult(assignment);
            // Неудачные попытки — «В процессе» с результатом последней попытки.
            const lastAttempt = result ? null : Storage.getAssignmentLastAttempt(assignment);
            const completed = !!result;
            const target = assignment.studentName
                ? escapeHtml(assignment.studentName)
                : escapeHtml(assignment.playerId);
            const meta = [
                escapeHtml(this.getAssignmentLevelLabel(assignment.levelId)),
                assignment.className ? `👥 ${escapeHtml(assignment.className)}` : "",
                assignment.note ? escapeHtml(assignment.note) : "",
                formatRecordDate(assignment.assignedAt)
            ].filter(Boolean).join(" • ");
            const statusHtml = completed
                ? "✅ " + I18n.t("assignmentCompleted")
                : lastAttempt ? "⏳ " + I18n.t("assignmentInProgress") : "🕘 " + I18n.t("assignmentPending");
            const resultLine = result
                ? `<div class="assignment-item-result">${I18n.t("assignmentResult", result.score || 0, result.accuracy || 0)} · ${I18n.t("assignmentPassedAt", formatRecordDate(result.date))}</div>`
                : lastAttempt
                    ? `<div class="assignment-item-result">${I18n.t("assignmentResult", lastAttempt.score || 0, lastAttempt.accuracy || 0)} · ${I18n.t("assignmentLastAttempt", formatRecordDate(lastAttempt.date))}</div>`
                    : "";
            return `
                <div class="assignment-item">
                    <div class="assignment-item-main">
                        <div class="assignment-item-title">${target} — ${statusHtml}</div>
                        <div class="assignment-item-meta">${meta}</div>
                        <div class="assignment-item-meta">🔑 ${escapeHtml(I18n.t("assignmentCodePrefix"))}: ${escapeHtml(assignment.assignmentCode || "—")}</div>
                        ${(assignment.studentCode || assignment.playerId) ? `<div class="assignment-item-meta">${escapeHtml(I18n.t("playerIdLabel"))}: ${escapeHtml(assignment.studentCode || assignment.playerId)}</div>` : ""}
                        ${resultLine}
                    </div>
                    <div class="assignment-item-actions">
                        <button type="button" class="btn-icon-only danger" data-assignment-delete="${escapeHtml(assignment.id)}" title="${I18n.t("delete")}">×</button>
                    </div>
                </div>
            `;
        }).join("");
        container.querySelectorAll("[data-assignment-delete]").forEach(button => {
            button.addEventListener("click", () => {
                if (confirm(I18n.t("deleteAssignmentConfirm"))) {
                    Storage.deleteAssignment(button.dataset.assignmentDelete);
                    this.renderAssignments();
                }
            });
        });
    },

    // Список тем = все уроки игры (§1-§43, техника безопасности, лабораторные)
    populateTopicSelect(keepValue = true) {
        const sel = document.getElementById("form-topic");
        if (!sel) return;
        const prev = keepValue ? sel.value : "";
        sel.innerHTML = LEVELS_CONFIG.map(lvl =>
            `<option value="lesson:${lvl.id}">${escapeHtml(I18n.t(getLevelNameKey(lvl.id)))}</option>`
        ).join("") + Storage.getCustomLessons().map(l =>
            `<option value="custom:${l.id}">📝 ${escapeHtml(I18n.getLocalized(l, "name"))}</option>`
        ).join("");
        if (prev && Array.from(sel.options).some(o => o.value === prev)) sel.value = prev;
    },

    // Динамические поля в зависимости от типа
    renderAnswerFields() {
        const type = document.getElementById("form-type").value;
        const container = document.getElementById("answer-fields");
        const lang = I18n.currentLang;

        let html = "";

        switch (type) {
            case "multiple-choice":
            case "multi-select":
                html = `
                    <div class="form-group">
                        <label>${I18n.t("addOption")}:</label>
                        <div id="options-list"></div>
                        <button type="button" class="btn btn-secondary" id="btn-add-option" style="margin-top:8px">
                            + ${I18n.t("addOption")}
                        </button>
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")}</label>
                        <div id="correct-indicators"></div>
                        <small style="color: var(--text-dim)">
                            ${I18n.t("correctAnswer")}: ${type === "multi-select"
                                ? I18n.t("multiCorrectNote")
                                : I18n.t("singleCorrectNote")}
                        </small>
                    </div>
                `;
                break;

            case "short-answer":
                html = `
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")} (RU)</label>
                        <input type="text" id="form-answer-ru" placeholder="траектория" />
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")} (EN)</label>
                        <input type="text" id="form-answer-en" placeholder="trajectory" />
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")} (KK)</label>
                        <input type="text" id="form-answer-kk" placeholder="траектория" />
                    </div>
                    <small style="color: var(--text-dim)">${I18n.t("severalVariantsNote")}</small>
                `;
                break;

            case "numeric":
                html = `
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")}</label>
                        <input type="number" id="form-correct-value" step="any" />
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("toleranceLabel")}</label>
                        <input type="number" id="form-tolerance" step="any" value="0.1" />
                    </div>
                `;
                break;

            case "true-false":
                html = `
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")}</label>
                        <select id="form-true-false">
                            <option value="true">${I18n.t("trueLabel")}</option>
                            <option value="false">${I18n.t("falseLabel")}</option>
                        </select>
                    </div>
                `;
                break;

            case "matching":
                html = `
                    <div class="form-group">
                        <label>${I18n.t("leftColumn")} (RU | EN | KK)</label>
                        <textarea id="form-left" rows="4" placeholder="${I18n.t("matchingLeftPlaceholder")}"></textarea>
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("rightColumn")} (RU | EN | KK)</label>
                        <textarea id="form-right" rows="4" placeholder="${I18n.t("matchingRightPlaceholder")}"></textarea>
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("pairs")}</label>
                        <input type="text" id="form-pairs" placeholder="0,1 | 1,0 | 2,2" />
                        <small style="color: var(--text-dim)">${I18n.t("matchingPairsHelp")}</small>
                    </div>
                `;
                break;

            case "fill-blank":
                html = `
                    <div class="form-group">
                        <label>${I18n.t("correctAnswer")} (${I18n.t("blankAnswerWhat")})</label>
                        <input type="text" id="form-blank-answer" />
                    </div>
                    <div class="form-group">
                        <label>${I18n.t("alternativesLabel")}</label>
                        <input type="text" id="form-blank-alternatives" placeholder="${I18n.t("alternativesPlaceholder")}" />
                    </div>
                    <small style="color: var(--text-dim)">${I18n.t("blankNote")}</small>
                `;
                break;
        }

        container.innerHTML = html;

        // После рендера — навесить обработчики
        if (type === "multiple-choice" || type === "multi-select") {
            this.renderOptions(type === "multi-select");
            document.getElementById("btn-add-option").addEventListener("click", () => this.addOption(null, type === "multi-select"));
        }
    },

    renderOptions(multiSelect = false) {
        const list = document.getElementById("options-list");
        if (!list) return;
        const count = Math.max(list.children.length, 3);
        list.innerHTML = "";
        for (let i = 0; i < count; i++) this.addOption(i, multiSelect);
    },

    addOption(idx = null, multiSelect = false) {
        const list = document.getElementById("options-list");
        if (!list) return;
        const i = idx !== null ? idx : list.children.length;
        const row = document.createElement("div");
        row.className = "form-group";
        row.style.cssText = "display: flex; gap: 6px; align-items: center; margin-bottom: 4px";
        row.innerHTML = `
            <span style="min-width: 24px; color: var(--text-dim)">${i + 1}.</span>
            <input type="${multiSelect ? "checkbox" : "radio"}" name="correct" class="correct-cb" data-idx="${i}" title="${I18n.t("correctAnswer")}" style="flex:none; width:18px; height:18px; cursor:pointer" />
            <input type="text" class="opt-ru" placeholder="RU" style="flex:1" />
            <input type="text" class="opt-en" placeholder="EN" style="flex:1" />
            <input type="text" class="opt-kk" placeholder="KK" style="flex:1" />
            <button type="button" class="btn-icon-only danger" title="${I18n.t('delete')}">×</button>
        `;
        row.querySelector("button").addEventListener("click", () => {
            row.remove();
            this.refreshOptionIndices();
        });
        list.appendChild(row);
    },

    refreshOptionIndices() {
        document.querySelectorAll("#options-list .form-group").forEach((row, idx) => {
            row.querySelector("span").textContent = `${idx + 1}.`;
            const cb = row.querySelector(".correct-cb");
            if (cb) cb.dataset.idx = idx;
        });
    },

    saveTask() {
        const type = document.getElementById("form-type").value;
        const topic = document.getElementById("form-topic").value;
        const difficulty = parseInt(document.getElementById("form-difficulty").value, 10);

        const question = {
            ru: document.getElementById("form-question-ru").value.trim(),
            en: document.getElementById("form-question-en").value.trim(),
            kk: document.getElementById("form-question-kk").value.trim()
        };
        if (!question.ru) {
            showNotification(I18n.t("fillQuestionRu"), "warning");
            return;
        }
        if (!question.en) question.en = question.ru;
        if (!question.kk) question.kk = question.ru;

        const formula = document.getElementById("form-formula").value.trim();
        const hint = document.getElementById("form-hint").value.trim();
        const explanation = {
            ru: document.getElementById("form-explanation").value.trim(),
            en: document.getElementById("form-explanation").value.trim(),
            kk: document.getElementById("form-explanation").value.trim()
        };

        const task = {
            type, topic, difficulty, question, formula, explanation,
            isCustom: true
        };

        if (hint) {
            task.hint = { ru: hint, en: hint, kk: hint };
        }

        switch (type) {
            case "multiple-choice":
            case "multi-select": {
                const options = [];
                const correct = [];
                const indexMap = {}; // индекс строки -> индекс варианта (пустые строки пропускаются)
                document.querySelectorAll("#options-list .form-group").forEach((row, idx) => {
                    const ru = row.querySelector(".opt-ru").value.trim();
                    const en = row.querySelector(".opt-en").value.trim();
                    const kk = row.querySelector(".opt-kk").value.trim();
                    if (ru) {
                        indexMap[idx] = options.length;
                        options.push({ ru, en: en || ru, kk: kk || ru });
                    }
                });
                if (options.length < 2) {
                    showNotification(I18n.t("minTwoOptions"), "warning");
                    return;
                }
                // Получим отмеченные правильные
                const checked = document.querySelectorAll("#options-list .correct-cb:checked");
                checked.forEach(cb => {
                    const mapped = indexMap[parseInt(cb.dataset.idx, 10)];
                    if (mapped !== undefined) correct.push(mapped);
                });
                if (type === "multiple-choice" && correct.length !== 1) {
                    showNotification(I18n.t("chooseOneCorrect"), "warning");
                    return;
                }
                if (type === "multi-select" && correct.length === 0) {
                    showNotification(I18n.t("chooseAtLeastOne"), "warning");
                    return;
                }
                task.options = options;
                task.correctAnswer = type === "multiple-choice" ? correct[0] : correct;
                break;
            }
            case "short-answer": {
                const ru = document.getElementById("form-answer-ru").value.trim();
                const en = document.getElementById("form-answer-en").value.trim();
                const kk = document.getElementById("form-answer-kk").value.trim();
                if (!ru) {
                    showNotification(I18n.t("fillCorrectAnswer"), "warning");
                    return;
                }
                task.correctAnswer = {
                    ru: ru.split(",").map(s => s.trim()).filter(Boolean),
                    en: en ? en.split(",").map(s => s.trim()).filter(Boolean) : ru.split(",").map(s => s.trim()),
                    kk: kk ? kk.split(",").map(s => s.trim()).filter(Boolean) : ru.split(",").map(s => s.trim())
                };
                break;
            }
            case "numeric": {
                const v = parseFloat(document.getElementById("form-correct-value").value);
                const tol = parseFloat(document.getElementById("form-tolerance").value) || 0.1;
                if (isNaN(v)) {
                    showNotification(I18n.t("enterNumericAnswer"), "warning");
                    return;
                }
                task.correctAnswer = v;
                task.tolerance = tol;
                break;
            }
            case "true-false": {
                task.correctAnswer = document.getElementById("form-true-false").value === "true";
                break;
            }
            case "matching": {
                const parseCol = (txt) => txt.split("\n").map(l => {
                    const parts = l.split("|").map(s => s.trim());
                    return { ru: parts[0] || "", en: parts[1] || parts[0] || "", kk: parts[2] || parts[0] || "" };
                }).filter(c => c.ru);

                const left = parseCol(document.getElementById("form-left").value);
                const right = parseCol(document.getElementById("form-right").value);
                if (left.length < 2 || right.length < 2) {
                    showNotification(I18n.t("minTwoItems"), "warning");
                    return;
                }
                const pairs = document.getElementById("form-pairs").value
                    .split("|").map(s => s.trim()).filter(Boolean)
                    .map(p => p.split(",").map(n => parseInt(n.trim(), 10)));
                if (pairs.length === 0) {
                    showNotification(I18n.t("specifyPairs"), "warning");
                    return;
                }
                const badPair = pairs.some(p =>
                    p.length !== 2 || p.some(n => isNaN(n)) ||
                    p[0] < 0 || p[0] >= left.length || p[1] < 0 || p[1] >= right.length);
                if (badPair) {
                    showNotification(I18n.t("pairsOutOfRange"), "warning");
                    return;
                }
                if (new Set(pairs.map(p => p[0])).size !== pairs.length ||
                    new Set(pairs.map(p => p[1])).size !== pairs.length) {
                    showNotification(I18n.t("pairsMustBeUnique"), "warning");
                    return;
                }
                if (pairs.length !== left.length || pairs.length !== right.length) {
                    showNotification(I18n.t("pairsCountMismatch"), "warning");
                    return;
                }
                task.pairs = { left, right };
                task.correctPairs = pairs;
                break;
            }
            case "fill-blank": {
                const ans = document.getElementById("form-blank-answer").value.trim();
                const alts = document.getElementById("form-blank-alternatives").value.trim();
                if (!ans) {
                    showNotification(I18n.t("fillCorrectAnswer"), "warning");
                    return;
                }
                task.correctAnswer = ans;
                if (alts) {
                    task.alternatives = alts.split(",").map(s => s.trim()).filter(Boolean);
                }
                break;
            }
        }

        // Сохранение / обновление
        if (this.editingId) {
            Storage.updateCustomTask(this.editingId, task);
            showNotification(I18n.t("taskUpdated"), "success");
            this.editingId = null;
        } else {
            Storage.addCustomTask(task);
            showNotification(I18n.t("saveSuccess"), "success");
        }

        document.getElementById("task-form").reset();
        setTimeout(() => this.renderAnswerFields(), 0);
    },

    renderTasksList() {
        const tasks = Storage.getCustomTasks();
        const container = document.getElementById("custom-tasks-list");
        if (tasks.length === 0) {
            container.innerHTML = `<p class="empty-message">${I18n.t("noCustomTasks")}</p>`;
            return;
        }
        container.innerHTML = tasks.map(t => `
            <div class="task-item">
                <div class="task-item-info">
                    <div class="task-item-title">${formatFormula(I18n.getLocalized(t, "question"))}</div>
                    <div class="task-item-meta">
                        ${I18n.t(i18nTypeKey(t.type))} • ${this.getTopicDisplayName(t.topic)} • ${I18n.t(t.difficulty === 1 ? "easy" : t.difficulty === 2 ? "medium" : "hard")}
                    </div>
                </div>
                <div class="task-item-actions">
                    <button class="btn-icon-only" data-action="edit" data-id="${t.id}" title="${I18n.t("edit")}">✎</button>
                    <button class="btn-icon-only danger" data-action="delete" data-id="${t.id}" title="${I18n.t("delete")}">×</button>
                </div>
            </div>
        `).join("");

        container.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                const action = btn.dataset.action;
                const id = btn.dataset.id;
                if (action === "delete") {
                    if (confirm(I18n.t("deleteConfirm"))) {
                        Storage.deleteCustomTask(id);
                        this.renderTasksList();
                    }
                } else if (action === "edit") {
                    this.editTask(id);
                }
            });
        });
    },

    editTask(id) {
        const task = Storage.getCustomTasks().find(t => t.id === id);
        if (!task) return;
        this.editingId = id;
        this.switchTab("create");

        document.getElementById("form-type").value = task.type;
        document.getElementById("form-topic").value = task.topic;
        document.getElementById("form-difficulty").value = task.difficulty;
        document.getElementById("form-question-ru").value = task.question.ru || "";
        document.getElementById("form-question-en").value = task.question.en || "";
        document.getElementById("form-question-kk").value = task.question.kk || "";
        const formulaValue = task.formula && typeof task.formula === "object"
            ? (task.formula.ru || task.formula.en || task.formula.kk || "")
            : (task.formula || "");
        document.getElementById("form-formula").value = formulaValue;
        document.getElementById("form-hint").value = task.hint?.ru || "";
        document.getElementById("form-explanation").value = task.explanation?.ru || "";

        this.renderAnswerFields();

        // Заполнить поля в зависимости от типа
        setTimeout(() => {
            switch (task.type) {
                case "multiple-choice":
                case "multi-select": {
                    const list = document.getElementById("options-list");
                    // Нормализация: options — массив {ru,en,kk} (форма) или словарь {ru:[...],en:[...],kk:[...]}
                    const optList = Array.isArray(task.options) ? task.options
                        : (task.options && Array.isArray(task.options.ru)
                            ? task.options.ru.map((ru, i) => ({
                                ru,
                                en: (task.options.en && task.options.en[i]) || ru,
                                kk: (task.options.kk && task.options.kk[i]) || ru
                              }))
                            : []);
                    list.innerHTML = "";
                    optList.forEach((opt, idx) => this.addOption(idx, task.type === "multi-select"));
                    // Дополнить поля
                    const rows = list.querySelectorAll(".form-group");
                    optList.forEach((opt, idx) => {
                        if (rows[idx]) {
                            rows[idx].querySelector(".opt-ru").value = opt.ru || "";
                            rows[idx].querySelector(".opt-en").value = opt.en || "";
                            rows[idx].querySelector(".opt-kk").value = opt.kk || "";
                        }
                    });
                    // Отметить правильные варианты (чекбоксы находятся в самих строках)
                    const correctArr = Array.isArray(task.correctAnswer) ? task.correctAnswer : [task.correctAnswer];
                    rows.forEach((row, idx) => {
                        const cb = row.querySelector(".correct-cb");
                        if (cb) cb.checked = correctArr.includes(idx);
                    });
                    break;
                }
                case "short-answer": {
                    const ca = task.correctAnswer;
                    const dict = (ca && typeof ca === "object" && !Array.isArray(ca)) ? ca : { ru: ca, en: ca, kk: ca };
                    const asArr = (v) => Array.isArray(v) ? v : (v == null ? [] : [String(v)]);
                    document.getElementById("form-answer-ru").value = asArr(dict.ru).join(", ");
                    document.getElementById("form-answer-en").value = asArr(dict.en).join(", ");
                    document.getElementById("form-answer-kk").value = asArr(dict.kk).join(", ");
                    break;
                }
                case "numeric": {
                    document.getElementById("form-correct-value").value = task.correctAnswer;
                    document.getElementById("form-tolerance").value = task.tolerance || 0.1;
                    break;
                }
                case "true-false": {
                    document.getElementById("form-true-false").value = task.correctAnswer ? "true" : "false";
                    break;
                }
                case "matching": {
                    // Колонки: массив {ru,en,kk} (форма) или словарь {ru:[...],en:[...],kk:[...]}
                    const colText = (col) => {
                        if (Array.isArray(col)) return col.map(c => `${c.ru || ""} | ${c.en || ""} | ${c.kk || ""}`).join("\n");
                        if (col && Array.isArray(col.ru)) {
                            return col.ru.map((ru, i) =>
                                `${ru} | ${(col.en && col.en[i]) || ru} | ${(col.kk && col.kk[i]) || ru}`).join("\n");
                        }
                        return "";
                    };
                    document.getElementById("form-left").value = colText(task.pairs.left);
                    document.getElementById("form-right").value = colText(task.pairs.right);
                    document.getElementById("form-pairs").value = task.correctPairs
                        .map(p => Array.isArray(p) ? p.join(",") : `${p.left},${p.right}`)
                        .join(" | ");
                    break;
                }
                case "fill-blank": {
                    const ca = task.correctAnswer;
                    let main = "";
                    if (Array.isArray(ca)) main = String(ca[0] == null ? "" : ca[0]);
                    else if (ca && typeof ca === "object") {
                        const ru = Array.isArray(ca.ru) ? ca.ru[0] : ca.ru;
                        main = String(ru == null ? "" : ru);
                    } else main = String(ca == null ? "" : ca);
                    document.getElementById("form-blank-answer").value = main;
                    document.getElementById("form-blank-alternatives").value = (task.alternatives || []).join(", ");
                    break;
                }
            }
        }, 0);
    },

    renderStats() {
        const stats = Storage.getStats();
        const progress = Storage.getProgress();

        document.getElementById("stat-total").textContent = stats.totalAnswered || 0;
        document.getElementById("stat-correct").textContent = stats.correctAnswers || 0;
        const acc = stats.totalAnswered > 0
            ? Math.round((stats.correctAnswers / stats.totalAnswered) * 100)
            : 0;
        document.getElementById("stat-accuracy").textContent = acc + "%";
        document.getElementById("stat-best").textContent = progress.bestScore || 0;

        // По темам
        const topicsContainer = document.getElementById("topic-stats");
        const topics = stats.byTopic || {};
        const topicKeys = Object.keys(topics);

        if (topicKeys.length === 0) {
            topicsContainer.innerHTML = `<p class="empty-message">${I18n.t("noData")}</p>`;
        } else {
            topicsContainer.innerHTML = topicKeys.map(topic => {
                const t = topics[topic];
                const pct = t.answered > 0 ? Math.round((t.correct / t.answered) * 100) : 0;
                return `
                    <div class="topic-stat-bar">
                        <div class="topic-stat-name">${this.getTopicDisplayName(topic)}</div>
                        <div class="topic-stat-bar-bg">
                            <div class="topic-stat-bar-fill" style="width: ${pct}%"></div>
                        </div>
                        <div class="topic-stat-percent">${pct}% (${t.correct}/${t.answered})</div>
                    </div>
                `;
            }).join("");
        }
    },

    // Получить все задания (стандартные + расширенные + главы/лабораторные + доп. (general/solar) + пользовательские)
    getAllTasks() {
        const base = Array.isArray(TASKS_DATABASE) ? TASKS_DATABASE : [];
        const ext = (typeof TASKS_DATABASE_EXT !== "undefined" && Array.isArray(TASKS_DATABASE_EXT)) ? TASKS_DATABASE_EXT : [];
        const ch = (typeof TASKS_DATABASE_CH !== "undefined" && Array.isArray(TASKS_DATABASE_CH)) ? TASKS_DATABASE_CH : [];
        const ext2 = (typeof TASKS_DATABASE_EXT2 !== "undefined" && Array.isArray(TASKS_DATABASE_EXT2)) ? TASKS_DATABASE_EXT2 : [];
        const practical = (typeof TASKS_DATABASE_PRACTICAL !== "undefined" && Array.isArray(TASKS_DATABASE_PRACTICAL)) ? TASKS_DATABASE_PRACTICAL : [];
        // Задания интерактивных типов для 8–9 классов (сгенерированы tools/gen-task-types.js)
        const types = (typeof TASKS_DATABASE_TYPES !== "undefined" && Array.isArray(TASKS_DATABASE_TYPES)) ? TASKS_DATABASE_TYPES : [];
        return [...base, ...ext, ...ch, ...ext2, ...practical, ...types, ...Storage.getCustomTasks()];
    },

    // План уровня: 20 случайных заданий из пула темы.
    // Гарантирует, что за один заход не будет повторов, попадут практические
    // вопросы и встретятся все доступные типы заданий (в 7–9 классах — до 7 типов).
    buildLevelTaskPlan(levelConfig, count = 20) {
        const all = this.getAllTasks();
        const cfgId = String(levelConfig.id);
        const lessonKey = cfgId.indexOf("custom:") === 0 ? cfgId : "lesson:" + cfgId;
        const pool = all.filter(t => t.topic === lessonKey || (levelConfig.topics || []).includes(t.topic));
        if (pool.length === 0) return [];
        const target = Math.max(1, Math.min(Number(count) || 20, pool.length));
        const plan = [];
        const take = (t) => {
            if (t && plan.length < target && !plan.some(p => p.id === t.id)) plan.push(t);
        };
        const randomOf = (arr) => arr[Math.floor(Math.random() * arr.length)];
        // 1. Практические (бытовые) вопросы — не больше двух, как и раньше
        pool.filter(t => t.isPractical).slice(0, 2).forEach(take);
        // 2. По одному заданию каждого типа — знакомство со всеми форматами
        [...new Set(pool.map(t => t.type))].forEach(type => {
            const candidates = pool.filter(t => t.type === type && !plan.some(p => p.id === t.id));
            if (candidates.length) take(randomOf(candidates));
        });
        // 3. Добираем случайные до 20
        const rest = pool.filter(t => !plan.some(p => p.id === t.id));
        while (plan.length < target && rest.length) take(rest.splice(Math.floor(Math.random() * rest.length), 1)[0]);
        // 4. Перемешиваем порядок
        for (let i = plan.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [plan[i], plan[j]] = [plan[j], plan[i]];
        }
        return plan;
    },

    // Получить задание для текущего уровня.
    // excludeIds — уже решённые задания (не повторяем).
    // deprioritizeIds — проваленные задания (5 попыток истрачено): выдаём, только если свежих не осталось.
    // Пользовательские задания учителя привязаны к уроку: topic = "lesson:<id уровня>".
    getTaskForLevel(levelConfig, excludeIds = [], deprioritizeIds = [], requiredIds = []) {
        const all = this.getAllTasks();
        const cfgId = String(levelConfig.id);
        const lessonKey = cfgId.indexOf("custom:") === 0 ? cfgId : "lesson:" + cfgId;
        const matchesLevel = (t) => t.topic === lessonKey || (levelConfig.topics || []).includes(t.topic);
        // Практические бытовые вопросы обязательны к выдаче, но общий порог
        // уровня остаётся прежним: 20 заданий из расширенного пула.
        const required = all.filter(t => matchesLevel(t) && requiredIds.includes(t.id)
            && !excludeIds.includes(t.id) && !deprioritizeIds.includes(t.id));
        if (required.length > 0) return required[Math.floor(Math.random() * required.length)];
        let candidates = all.filter(t => matchesLevel(t) && !excludeIds.includes(t.id));
        const fresh = candidates.filter(t => !deprioritizeIds.includes(t.id));
        if (fresh.length > 0) candidates = fresh;
        if (candidates.length === 0) {
            // Все задания урока уже решены — разрешаем повторы (для коротких учительских уроков)
            const lessonOnly = all.filter(t => matchesLevel(t));
            if (lessonOnly.length > 0) return lessonOnly[Math.floor(Math.random() * lessonOnly.length)];
            // У учительского урока без заданий — чужие темы не выдаём
            if (cfgId.indexOf("custom:") === 0) return null;
            const rest = all.filter(t => !excludeIds.includes(t.id));
            if (rest.length === 0) return null;
            return rest[Math.floor(Math.random() * rest.length)];
        }
        return candidates[Math.floor(Math.random() * candidates.length)];
    },

    // Отображаемое имя темы: обычные темы — из словаря, уроки — по имени уровня
    getTopicDisplayName(topic) {
        if (typeof topic === "string" && topic.indexOf("custom:") === 0) {
            const lesson = Storage.getCustomLessons().find(l => "custom:" + l.id === topic);
            if (lesson) return I18n.getLocalized(lesson, "name");
        }
        if (typeof topic === "string" && topic.indexOf("lesson:") === 0) {
            const id = parseInt(topic.split(":")[1], 10);
            if (!isNaN(id)) return I18n.t(getLevelNameKey(id));
        }
        return I18n.t("topic_" + topic);
    },

    // === Свои уроки учителя ===
    addLesson() {
        const ru = document.getElementById("lesson-name-ru").value.trim();
        if (!ru) {
            showNotification(I18n.t("fillLessonNameRu"), "warning");
            return;
        }
        const en = document.getElementById("lesson-name-en").value.trim() || ru;
        const kk = document.getElementById("lesson-name-kk").value.trim() || ru;
        Storage.addCustomLesson({ name: { ru, en, kk } });
        showNotification(I18n.t("lessonSaved"), "success");
        document.getElementById("lesson-name-ru").value = "";
        document.getElementById("lesson-name-en").value = "";
        document.getElementById("lesson-name-kk").value = "";
        this.renderLessonsList();
        this.populateTopicSelect(true);
        this.populateAssignmentLevelSelect(false);
        this.populateAssignmentLevelSelect(false, "class-assignment-level");
    },

    renderLessonsList() {
        const lessons = Storage.getCustomLessons();
        const container = document.getElementById("custom-lessons-list");
        if (!container) return;
        if (lessons.length === 0) {
            container.innerHTML = `<p class="empty-message">${I18n.t("noCustomLessons")}</p>`;
            return;
        }
        const all = this.getAllTasks();
        container.innerHTML = lessons.map(l => {
            const n = all.filter(t => t.topic === "custom:" + l.id).length;
            return `
            <div class="task-item">
                <div class="task-item-info">
                    <div class="task-item-title">📝 ${escapeHtml(I18n.getLocalized(l, "name"))}</div>
                    <div class="task-item-meta">${I18n.t("tasksCountLabel")}: ${n}</div>
                </div>
                <div class="task-item-actions">
                    <button class="btn-icon-only danger" data-action="delete-lesson" data-id="${l.id}" title="${I18n.t("delete")}">×</button>
                </div>
            </div>`;
        }).join("");

        container.querySelectorAll("button[data-action='delete-lesson']").forEach(btn => {
            btn.addEventListener("click", () => {
                if (confirm(I18n.t("deleteLessonConfirm"))) {
                    const id = btn.dataset.id;
                    // Удалить вместе с уроком и его задания
                    Storage.getCustomTasks()
                        .filter(t => t.topic === "custom:" + id)
                        .forEach(t => Storage.deleteCustomTask(t.id));
                    Storage.deleteCustomLesson(id);
                    this.renderLessonsList();
                    this.populateTopicSelect(true);
                }
            });
        });
    }
};


