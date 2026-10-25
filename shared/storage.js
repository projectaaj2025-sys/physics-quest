/* ===== js/storage.js ===== */
/* ============================================
   STORAGE — Работа с localStorage
   Сохранение прогресса, рекордов, заданий учителя, статистики
   ============================================ */

const Storage = {
    grade() {
        return Number(window.CURRENT_GRADE) || 8;
    },

    get KEYS() {
        const g = this.grade();
        return {
            RECORDS: `physicsquest${g}_records`,
            HISTORY: `physicsquest${g}_playthrough_history`,
            PROGRESS: `physicsquest${g}_progress`,
            STATS: `physicsquest${g}_stats`,
            ASSIGNMENTS: "physicsquest_unified_assignments",
            CLASSES: "physicsquest_unified_classes",
            CUSTOM_TASKS: "physicsquest_unified_custom_tasks",
            CUSTOM_LESSONS: "physicsquest_unified_custom_lessons",
            SETTINGS: "physicsquest_global_settings"
        };
    },

    _migrated: false,
    ensureMigrated() {
        if (this._migrated) return;
        this._migrated = true;
        try {
            for (const suffix of ["progress", "stats", "records", "playthrough_history"]) {
                const old7 = localStorage.getItem("physicsquest_" + suffix);
                const new7 = localStorage.getItem("physicsquest7_" + suffix);
                if (old7 && !new7) localStorage.setItem("physicsquest7_" + suffix, old7);
            }
            if (!localStorage.getItem("physicsquest_unified_classes")) {
                const c8 = this.load("physicsquest8_classes", []);
                const c7 = this.load("physicsquest_classes", []);
                const merged = [];
                for (const c of [...(Array.isArray(c8) ? c8 : []), ...(Array.isArray(c7) ? c7 : [])]) {
                    if (!c || !c.name) continue;
                    const gm = String(c.name).match(/([789])/);
                    const g = c.grade || (gm ? Number(gm[1]) : 8);
                    const students = (c.students || []).map(st => ({
                        name: String(st.name || "").trim(),
                        playerId: String(st.playerId || "").trim(),
                        studentCode: this.canonicalStudentCode(st.studentCode || st.playerCode || "") || this.makePlayerCode()
                    }));
                    merged.push({ ...c, grade: g, students });
                }
                localStorage.setItem("physicsquest_unified_classes", JSON.stringify(merged));
            }
            if (!localStorage.getItem("physicsquest_unified_assignments")) {
                const a8 = (this.load("physicsquest8_assignments", []) || []).map(a => ({ ...a, grade: a.grade || 8, levelId: String(a.levelId || "").startsWith("g") || String(a.levelId || "").startsWith("custom:") ? a.levelId : "g8:" + a.levelId }));
                const a7 = (this.load("physicsquest_assignments", []) || []).map(a => ({ ...a, grade: a.grade || 7, levelId: String(a.levelId || "").startsWith("g") || String(a.levelId || "").startsWith("custom:") ? a.levelId : "g7:" + a.levelId }));
                localStorage.setItem("physicsquest_unified_assignments", JSON.stringify([...a8, ...a7]));
            }
            if (!localStorage.getItem("physicsquest_unified_custom_tasks")) {
                const t8 = (this.load("physicsquest8_custom_tasks", []) || []).map(t => ({ ...t, grade: t.grade || 8 }));
                const t7 = (this.load("physicsquest_custom_tasks", []) || []).map(t => ({ ...t, grade: t.grade || 7 }));
                localStorage.setItem("physicsquest_unified_custom_tasks", JSON.stringify([...t8, ...t7]));
            }
            if (!localStorage.getItem("physicsquest_unified_custom_lessons")) {
                const l8 = (this.load("physicsquest8_custom_lessons", []) || []).map(l => ({ ...l, grade: l.grade || 8 }));
                const l7 = (this.load("physicsquest_custom_lessons", []) || []).map(l => ({ ...l, grade: l.grade || 7 }));
                localStorage.setItem("physicsquest_unified_custom_lessons", JSON.stringify([...l8, ...l7]));
            }
        } catch (e) {
            console.warn("Storage migration warning:", e);
        }
    },

    // Универсальный save
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error("Storage save error:", e);
            return false;
        }
    },

    // Универсальный load
    load(key, defaultValue = null) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : defaultValue;
        } catch (e) {
            console.error("Storage load error:", e);
            return defaultValue;
        }
    },

    // === ИДЕНТИФИКАЦИЯ ИГРОКА, РЕКОРДЫ И ИСТОРИЯ ===
    makeId(prefix = "id") {
        const random = Math.random().toString(36).slice(2, 10);
        return `${prefix}_${Date.now().toString(36)}_${random}`;
    },

    makePlayerCode() {
        if (window.PQAccount && typeof window.PQAccount.generateShortCode === "function") {
            return window.PQAccount.generateShortCode(4);
        }
        const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 4; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
        return code;
    },

    // Код ученика всегда 4 символа. Старый формат 8 класса «P + 4 знака»
    // приводим к 4 символам (P7X4K → 7X4K), чтобы совпадали старые журналы.
    canonicalStudentCode(code) {
        let c = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
        if (c.length === 5 && c.charAt(0) === "P") c = c.slice(1);
        if (c.length > 4) c = c.slice(0, 4);
        return c;
    },

    sameStudentCode(a, b) {
        const x = this.canonicalStudentCode(a);
        const y = this.canonicalStudentCode(b);
        return !!x && !!y && x === y;
    },

    // Короткий код назначения: Q + двухсимвольный номер уровня + 3 символа.
    // Для пользовательского урока используется ZZ; если данные есть на устройстве
    // учителя, такой код всё равно подключается через экспорт/импорт назначений.
    normalizeAssignmentCode(code) {
        return String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
    },

    makeAssignmentCode(levelId, explicitGrade) {
        this.ensureMigrated();
        const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        const parsed = typeof parseLevelRef === "function"
            ? parseLevelRef(levelId, explicitGrade)
            : { grade: Number(explicitGrade || this.grade()), levelId: Number(levelId), isCustom: String(levelId).startsWith("custom:") };
        const g = [7, 8, 9].includes(Number(parsed.grade)) ? Number(parsed.grade) : this.grade();
        const numericLevel = Number(parsed.levelId);
        const levelPart = !parsed.isCustom && Number.isInteger(numericLevel) && numericLevel >= 1 && numericLevel <= 60
            ? numericLevel.toString(36).toUpperCase().padStart(2, "0")
            : "ZZ";
        const existing = this.load(this.KEYS.ASSIGNMENTS, []);
        let code = "";
        do {
            let suffix = "";
            for (let i = 0; i < 3; i++) suffix += alphabet[Math.floor(Math.random() * alphabet.length)];
            code = `Q${g}${levelPart}${suffix}`;
        } while (Array.isArray(existing) && existing.some(item => this.normalizeAssignmentCode(item?.assignmentCode) === code));
        return code;
    },

    decodeAssignmentCode(code) {
        const normalized = this.normalizeAssignmentCode(code);
        if (/^Q[789][A-Z0-9]{5}$/.test(normalized)) {
            const grade = Number(normalized[1]);
            const encodedLevel = normalized.slice(2, 4);
            const num = parseInt(encodedLevel, 36);
            if (Number.isInteger(num) && num >= 1 && num <= 60) {
                return { grade, numericLevel: num, levelId: `g${grade}:${num}` };
            }
            return null;
        }
        if (/^Q[A-Z0-9]{5}$/.test(normalized)) {
            const encodedLevel = normalized.slice(1, 3);
            const num = parseInt(encodedLevel, 36);
            return Number.isInteger(num) && num >= 1 && num <= 60 ? { grade: 8, numericLevel: num, levelId: `g8:${num}` } : null;
        }
        return null;
    },

    getRecords() {
        const records = this.load(this.KEYS.RECORDS, []);
        return Array.isArray(records) ? records : [];
    },

    getHistory() {
        const stored = this.load(this.KEYS.HISTORY, null);
        if (Array.isArray(stored)) return stored;
        // Миграция старых успешных рекордов в историю, чтобы обновление не потеряло данные.
        const legacy = this.getRecords().map(record => ({
            ...record,
            id: record.id || this.makeId("legacy-run"),
            levelLabel: record.levelLabel ?? record.level,
            victory: record.victory !== false,
            language: record.language || this.getSettings().language || "ru",
            date: record.date || new Date().toISOString()
        }));
        this.save(this.KEYS.HISTORY, legacy);
        return legacy;
    },

    normalizeName(name) {
        return String(name || "").trim().toLocaleLowerCase();
    },

    getCurrentPlayer() {
        const settings = this.getSettings();
        return {
            playerId: settings.playerId,
            playerCode: settings.playerCode || "",
            name: String(settings.playerName || "").trim()
        };
    },

    normalizePlaythrough(record = {}) {
        const settings = this.getSettings();
        const levelValue = record.level ?? record.levelId ?? "";
        const score = Number(record.score);
        const time = Number(record.time);
        const accuracy = Number(record.accuracy);
        const runGrade = Number(record.grade || this.grade());
        return {
            id: record.id || this.makeId("run"),
            grade: runGrade,
            playerId: record.playerId || settings.playerId,
            name: String(record.name ?? settings.playerName ?? "").trim(),
            level: levelValue,
            levelLabel: record.levelLabel ?? levelValue,
            score: Number.isFinite(score) ? score : 0,
            time: Number.isFinite(time) ? time : 0,
            accuracy: Number.isFinite(accuracy) ? accuracy : 0,
            tasksSolved: Number(record.tasksSolved) || 0,
            tasksAttempted: Number(record.tasksAttempted) || 0,
            tasksTotal: Number(record.tasksTotal) || 0,
            asteroidsDeflected: Number(record.asteroidsDeflected) || 0,
            playerCode: String(record.playerCode || settings.playerCode || "").trim().toUpperCase(),
            assignmentCode: this.normalizeAssignmentCode(record.assignmentCode),
            victory: !!record.victory,
            language: record.language || I18n.currentLang || settings.language || "ru",
            date: record.date || new Date().toISOString()
        };
    },

    // Каждое завершение уровня попадает и в полную историю, и в общий рейтинг.
    // Оба списка сохраняются локально; история дополнительно хранит каждую попытку.
    addPlaythrough(record) {
        const entry = this.normalizePlaythrough(record);
        const history = this.getHistory();
        history.push(entry);
        this.save(this.KEYS.HISTORY, history);

        const records = this.getRecords();
        records.push(entry);
        records.sort((a, b) => {
            const scoreDiff = (Number(b.score) || 0) - (Number(a.score) || 0);
            return scoreDiff || String(b.date || "").localeCompare(String(a.date || ""));
        });
        this.save(this.KEYS.RECORDS, records);
        return entry;
    },

    // Совместимость со старым кодом и сохранёнными данными.
    addRecord(record) {
        return this.addPlaythrough(record);
    },

    getMyRecords(playerId = null, playerName = null) {
        const current = this.getCurrentPlayer();
        const id = playerId || current.playerId;
        const name = this.normalizeName(playerName ?? current.name);
        return this.getRecords().filter(r =>
            (id && r.playerId && r.playerId === id) ||
            (!r.playerId && name && this.normalizeName(r.name) === name)
        );
    },

    clearRecords() {
        this.save(this.KEYS.RECORDS, []);
    },

    clearHistory() {
        this.save(this.KEYS.HISTORY, []);
    },

    getAllGradesHistory() {
        this.ensureMigrated();
        const all = [];
        for (const g of [7, 8, 9]) {
            const list = this.load(`physicsquest${g}_playthrough_history`, null);
            const rows = Array.isArray(list) ? list : (this.load(`physicsquest${g}_records`, []) || []);
            rows.forEach(r => {
                if (!r) return;
                const rawLvl = String(r.level ?? r.levelId ?? "");
                const canonicalLvl = rawLvl.startsWith("custom:") || rawLvl.startsWith("g")
                    ? rawLvl
                    : `g${g}:${rawLvl}`;
                all.push({ ...r, grade: g, canonicalLevel: canonicalLvl });
            });
        }
        return all;
    },

    getProgressForGrade(g) {
        this.ensureMigrated();
        return this.load(`physicsquest${g}_progress`, {
            unlockedLevel: 1,
            completedLevels: {},
            totalScore: 0,
            bestScore: 0
        });
    },

    // === КЛАССЫ И НАЗНАЧЕНИЯ УЧЕНИКАМ ===
    getClasses() {
        this.ensureMigrated();
        const classes = this.load(this.KEYS.CLASSES, []);
        return Array.isArray(classes) ? classes : [];
    },

    addClass(classData = {}) {
        this.ensureMigrated();
        const classes = this.getClasses();
        const students = Array.isArray(classData.students) ? classData.students : [];
        const seen = new Set();
        const cleanStudents = students.map(student => {
            const rawCode = this.canonicalStudentCode(student.studentCode || student.playerCode || "");
            return {
                name: String(student.name || "").trim(),
                playerId: String(student.playerId || "").trim(),
                studentCode: rawCode || this.makePlayerCode()
            };
        }).filter(student => {
            if (!student.name && !student.playerId && !student.studentCode) return false;
            const key = student.studentCode || student.playerId || this.normalizeName(student.name);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
        const trimmedName = String(classData.name || "").trim();
        const gm = trimmedName.match(/([789])/);
        const inferredGrade = Number(classData.grade) || (gm ? Number(gm[1]) : this.grade());
        const item = {
            id: classData.id || this.makeId("class"),
            name: trimmedName,
            grade: [7, 8, 9].includes(inferredGrade) ? inferredGrade : this.grade(),
            students: cleanStudents,
            createdAt: classData.createdAt || new Date().toISOString()
        };
        if (!item.name || !item.students.length) return null;
        classes.push(item);
        this.save(this.KEYS.CLASSES, classes);
        return item;
    },

    deleteClass(id) {
        const classes = this.getClasses().filter(item => item.id !== id);
        this.save(this.KEYS.CLASSES, classes);
        // Назначения, созданные именно для удалённого класса, больше неактуальны.
        const assignments = this.getAssignments().filter(item => item.classId !== id);
        this.save(this.KEYS.ASSIGNMENTS, assignments);
        return classes;
    },

    addAssignmentsForClass(classId, levelId, note = "", limits = null) {
        const classItem = this.getClasses().find(item => item.id === classId);
        if (!classItem) return [];
        const assignedAt = new Date().toISOString();
        const assignments = this.getAssignments();
        const parsedLvl = parseLevelRef(levelId, classItem.grade || this.grade());
        const canonicalLevelId = parsedLvl.canonical;
        const assignmentCode = this.makeAssignmentCode(canonicalLevelId, parsedLvl.grade);
        const added = classItem.students.map(student => ({
            id: this.makeId("assignment"),
            grade: parsedLvl.grade,
            studentName: student.name,
            playerId: student.playerId,
            studentCode: student.studentCode || student.playerId,
            levelId: canonicalLevelId,
            assignmentCode,
            note: String(note || "").trim(),
            classId: classItem.id,
            className: classItem.name,
            assignedAt
        }));
        if (limits && (limits.hints != null || limits.attempts != null)) {
            const fixed = this.clampQuestLimits({ hints: limits.hints, attempts: limits.attempts });
            added.forEach(row => {
                row.hints = fixed.hints;
                row.attempts = fixed.attempts;
            });
        }
        assignments.push(...added);
        this.save(this.KEYS.ASSIGNMENTS, assignments);
        return added;
    },

    getAssignments() {
        this.ensureMigrated();
        const loaded = this.load(this.KEYS.ASSIGNMENTS, []);
        if (!Array.isArray(loaded)) return [];
        let changed = false;
        const usedCodes = new Set(loaded.map(item => this.normalizeAssignmentCode(item?.assignmentCode)).filter(Boolean));
        const batchCodes = new Map();
        const assignments = loaded.map(assignment => {
            if (!assignment) return assignment;
            const existingCode = this.normalizeAssignmentCode(assignment.assignmentCode);
            if (existingCode) {
                if (existingCode !== assignment.assignmentCode) {
                    changed = true;
                    return { ...assignment, assignmentCode: existingCode };
                }
                return assignment;
            }

            // All rows created for one class assignment share one code. The
            // assignment date separates two different assignments of the same
            // lesson to the same class.
            const isClassAssignment = !!assignment.classId || !!assignment.className;
            const batchKey = isClassAssignment
                ? `class|${assignment.classId || assignment.className}|${String(assignment.levelId)}|${assignment.assignedAt || ""}`
                : `individual|${assignment.id || this.makeId("assignment")}`;
            let assignmentCode = batchCodes.get(batchKey);
            if (!assignmentCode) {
                assignmentCode = this.makeAssignmentCode(assignment.levelId);
                while (usedCodes.has(assignmentCode)) assignmentCode = this.makeAssignmentCode(assignment.levelId);
                batchCodes.set(batchKey, assignmentCode);
                usedCodes.add(assignmentCode);
            }
            changed = true;
            return { ...assignment, assignmentCode };
        });
        if (changed) this.save(this.KEYS.ASSIGNMENTS, assignments);
        return assignments;
    },

    assignmentMatchesPlayer(assignment, player = this.getCurrentPlayer()) {
        const playerId = String(player.playerId || "").trim();
        const playerCode = String(player.playerCode || "").trim().toUpperCase();
        const assignmentId = String(assignment.playerId || "").trim();
        const assignmentCode = String(assignment.studentCode || "").trim().toUpperCase();
        const name = this.normalizeName(player.name);
        const sameId = !!playerId && !!assignmentId && assignmentId === playerId;
        const sameCode = !!playerCode && ((!!assignmentCode && this.sameStudentCode(assignmentCode, playerCode)) || this.sameStudentCode(assignmentId, playerCode));
        const sameName = !!name && !!assignment.studentName && this.normalizeName(assignment.studentName) === name;
        const conflictingId = !!playerId && !!assignmentId && assignmentId !== playerId;
        const conflictingCode = !!playerCode && !!assignmentCode && !this.sameStudentCode(assignmentCode, playerCode);
        return sameId || sameCode || (!conflictingId && !conflictingCode && sameName);
    },

    attachAssignmentCode(code) {
        const normalized = this.normalizeAssignmentCode(code);
        if (!normalized) return { added: [], existing: null, notFound: true };
        const current = this.getCurrentPlayer();
        const assignments = this.getAssignments();
        const byCode = assignments.filter(item => this.normalizeAssignmentCode(item.assignmentCode) === normalized);
        const existing = byCode.find(item => this.assignmentMatchesPlayer(item, current));
        if (existing) return { added: [], existing, notFound: false };

        // On the teacher's device use the matching assignment as a template.
        // The class code is shared, but only one row is copied for the current student.
        let template = byCode[0] || null;
        if (!template) {
            const decoded = this.decodeAssignmentCode(normalized);
            if (!decoded) return { added: [], existing: null, notFound: true };
            template = { grade: decoded.grade, levelId: decoded.levelId, note: "", classId: "", className: "" };
        }
        const parsedTpl = parseLevelRef(template.levelId, template.grade || this.grade());
        const item = {
            id: this.makeId("assignment"),
            grade: parsedTpl.grade,
            studentName: current.name || String(template.studentName || "").trim(),
            playerId: current.playerId || "",
            studentCode: current.playerCode || "",
            levelId: parsedTpl.canonical,
            assignmentCode: normalized,
            note: String(template.note || "").trim(),
            classId: String(template.classId || "").trim(),
            className: String(template.className || "").trim(),
            assignedAt: template.assignedAt || new Date().toISOString(),
            connectedByCode: true
        };
        assignments.push(item);
        this.save(this.KEYS.ASSIGNMENTS, assignments);
        return { added: [item], existing: null, notFound: false };
    },

    addAssignment(assignment = {}) {
        const assignments = this.getAssignments();
        const parsed = parseLevelRef(assignment.levelId, assignment.grade || this.grade());
        const item = {
            id: assignment.id || this.makeId("assignment"),
            grade: parsed.grade,
            studentName: String(assignment.studentName || "").trim(),
            playerId: String(assignment.playerId || "").trim(),
            studentCode: String(assignment.studentCode || assignment.playerCode || "").trim().toUpperCase(),
            levelId: parsed.canonical,
            assignmentCode: this.normalizeAssignmentCode(assignment.assignmentCode || assignment.code) || this.makeAssignmentCode(parsed.canonical, parsed.grade),
            note: String(assignment.note || "").trim(),
            classId: String(assignment.classId || "").trim(),
            className: String(assignment.className || "").trim(),
            assignedAt: assignment.assignedAt || new Date().toISOString()
        };
        if (assignment.hints != null || assignment.attempts != null) {
            const limits = this.clampQuestLimits({ hints: assignment.hints, attempts: assignment.attempts });
            item.hints = limits.hints;
            item.attempts = limits.attempts;
        }
        assignments.push(item);
        this.save(this.KEYS.ASSIGNMENTS, assignments);
        return item;
    },

    deleteAssignment(id) {
        const assignments = this.getAssignments().filter(a => a.id !== id);
        this.save(this.KEYS.ASSIGNMENTS, assignments);
        return assignments;
    },

    getAssignmentsForCurrentPlayer() {
        const current = this.getCurrentPlayer();
        return this.getAssignments().filter(a => this.assignmentMatchesPlayer(a, current));
    },

    // Совпадает ли запись истории с назначением (уровень, срок, ученик).
    // Код назначения ограничивает результат этим назначением учителя.
    assignmentRunMatches(assignment, r, assignmentCode) {
        const level = String(assignment.levelId);
        if (String(r.level) !== level) return false;
        const assignedAt = new Date(assignment.assignedAt || 0).getTime();
        const playedAt = new Date(r.date || 0).getTime();
        if (Number.isFinite(assignedAt) && assignedAt > 0 && Number.isFinite(playedAt) && playedAt < assignedAt) return false;
        const sameId = !!assignment.playerId && !!r.playerId && String(r.playerId) === String(assignment.playerId);
        const samePlayerCode = !!assignment.studentCode && !!r.playerCode && String(r.playerCode).toUpperCase() === String(assignment.studentCode).toUpperCase();
        const sameName = !!assignment.studentName && this.normalizeName(r.name) === this.normalizeName(assignment.studentName);
        const conflictingId = !!assignment.playerId && !!r.playerId && String(r.playerId) !== String(assignment.playerId);
        const conflictingCode = !!assignment.studentCode && !!r.playerCode && String(r.playerCode).toUpperCase() !== String(assignment.studentCode).toUpperCase();
        const samePerson = sameId || samePlayerCode || (!conflictingId && !conflictingCode && sameName);
        const sameCode = !!assignmentCode && assignmentCode === this.normalizeAssignmentCode(r.assignmentCode);
        // A code limits the result to this teacher's assignment. For an
        // individual assignment the code itself is enough; class rows still
        // require a matching student identity (short code, ID, or safe name).
        const isClassRow = !!assignment.classId || !!assignment.className;
        return sameCode ? (!isClassRow || samePerson) : samePerson;
    },

    getAssignmentResult(assignment) {
        const assignmentCode = this.normalizeAssignmentCode(assignment.assignmentCode);
        return this.getHistory().slice().reverse().find(r =>
            r.victory && this.assignmentRunMatches(assignment, r, assignmentCode)
        ) || null;
    },

    // Последняя попытка по назначению, включая неудачные: так «В процессе»
    // показывается с результатом последней попытки, а не только победы.
    getAssignmentLastAttempt(assignment) {
        const assignmentCode = this.normalizeAssignmentCode(assignment.assignmentCode);
        return this.getHistory().slice().reverse().find(r =>
            this.assignmentRunMatches(assignment, r, assignmentCode)
        ) || null;
    },

    isAssignmentCompleted(assignment) {
        return !!this.getAssignmentResult(assignment);
    },

    exportAssignments() {
        return JSON.stringify({
            app: "physics-quest-8-grade",
            exportedAt: new Date().toISOString(),
            classes: this.getClasses(),
            assignments: this.getAssignments()
        }, null, 2);
    },

    importAssignments(payload) {
        const incoming = Array.isArray(payload) ? payload : payload?.assignments;
        if (!Array.isArray(incoming)) throw new Error("Invalid assignments file");

        const incomingClasses = Array.isArray(payload?.classes) ? payload.classes : [];
        const currentClasses = this.getClasses();
        const knownClasses = new Set(currentClasses.map(item => item.id));
        const cleanClasses = incomingClasses.filter(item => item && item.name && Array.isArray(item.students)).map(item => ({
            id: item.id || this.makeId("class"),
            name: String(item.name).trim(),
            students: item.students.map(student => ({
                name: String(student.name || "").trim(),
                playerId: String(student.playerId || "").trim(),
                studentCode: String(student.studentCode || student.playerCode || student.playerId || "").trim().toUpperCase()
            })).filter(student => student.name || student.playerId || student.studentCode),
            createdAt: item.createdAt || new Date().toISOString()
        })).filter(item => item.name && item.students.length && !knownClasses.has(item.id));
        if (cleanClasses.length) this.save(this.KEYS.CLASSES, currentClasses.concat(cleanClasses));

        const current = this.getAssignments();
        const known = new Set(current.map(a => a.id));
        const clean = incoming.filter(a => a && (a.studentName || a.playerId || a.studentCode) && a.levelId !== undefined && a.levelId !== null).map(a => ({
            id: a.id || this.makeId("assignment"),
            studentName: String(a.studentName || "").trim(),
            playerId: String(a.playerId || "").trim(),
            studentCode: String(a.studentCode || a.playerCode || "").trim().toUpperCase(),
            levelId: a.levelId,
            assignmentCode: this.normalizeAssignmentCode(a.assignmentCode || a.code),
            note: String(a.note || "").trim(),
            classId: String(a.classId || "").trim(),
            className: String(a.className || "").trim(),
            assignedAt: a.assignedAt || new Date().toISOString()
        })).filter(a => !known.has(a.id));
        this.save(this.KEYS.ASSIGNMENTS, current.concat(clean));
        const normalizedAssignments = this.getAssignments();
        const importedIds = new Set(clean.map(item => item.id));
        return {
            assignments: normalizedAssignments.filter(item => importedIds.has(item.id)),
            classes: cleanClasses
        };
    },

    // === ПРОГРЕСС ===
    getProgress() {
        return this.load(this.KEYS.PROGRESS, {
            unlockedLevel: 1,
            completedLevels: {}, // { levelId: { score, stars, tasksSolved, time } }
            bestScore: 0
        });
    },

    setProgress(progress) {
        this.save(this.KEYS.PROGRESS, progress);
    },

    saveLevelResult(levelId, result) {
        const progress = this.getProgress();
        if (!progress.completedLevels[levelId] ||
            progress.completedLevels[levelId].score < result.score) {
            progress.completedLevels[levelId] = result;
        }
        if (result.score > (progress.bestScore || 0)) {
            progress.bestScore = result.score;
        }
        // Открыть следующий
        if (progress.unlockedLevel <= levelId) {
            progress.unlockedLevel = Math.min(levelId + 1, LEVELS_CONFIG.length);
        }
        this.setProgress(progress);
        return progress;
    },

    // === СТАТИСТИКА ===
    getStats() {
        return this.load(this.KEYS.STATS, {
            totalAnswered: 0,
            correctAnswers: 0,
            byTopic: {}, // { topic: { answered, correct } }
            byType: {}   // { type: { answered, correct } }
        });
    },

    updateStats(isCorrect, topic, type) {
        const stats = this.getStats();
        stats.totalAnswered = (stats.totalAnswered || 0) + 1;
        if (isCorrect) {
            stats.correctAnswers = (stats.correctAnswers || 0) + 1;
        }
        if (topic) {
            if (!stats.byTopic[topic]) {
                stats.byTopic[topic] = { answered: 0, correct: 0 };
            }
            stats.byTopic[topic].answered++;
            if (isCorrect) stats.byTopic[topic].correct++;
        }
        if (type) {
            if (!stats.byType[type]) {
                stats.byType[type] = { answered: 0, correct: 0 };
            }
            stats.byType[type].answered++;
            if (isCorrect) stats.byType[type].correct++;
        }
        this.save(this.KEYS.STATS, stats);
        return stats;
    },

    resetStats() {
        this.save(this.KEYS.STATS, {
            totalAnswered: 0,
            correctAnswers: 0,
            byTopic: {},
            byType: {}
        });
    },

    // === ЗАДАНИЯ УЧИТЕЛЯ ===
    getCustomTasks(allGrades = false) {
        this.ensureMigrated();
        const all = this.load(this.KEYS.CUSTOM_TASKS, []) || [];
        if (allGrades) return all;
        const g = this.grade();
        return all.filter(t => !t.grade || Number(t.grade) === g);
    },

    addCustomTask(task) {
        const tasks = this.getCustomTasks(true);
        task.id = "custom_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
        task.isCustom = true;
        task.grade = Number(task.grade || this.grade());
        tasks.push(task);
        this.save(this.KEYS.CUSTOM_TASKS, tasks);
        return tasks;
    },

    updateCustomTask(id, updates) {
        const tasks = this.getCustomTasks(true);
        const idx = tasks.findIndex(t => t.id === id);
        if (idx >= 0) {
            tasks[idx] = { ...tasks[idx], ...updates };
            this.save(this.KEYS.CUSTOM_TASKS, tasks);
        }
        return tasks;
    },

    deleteCustomTask(id) {
        const tasks = this.getCustomTasks(true).filter(t => t.id !== id);
        this.save(this.KEYS.CUSTOM_TASKS, tasks);
        return tasks;
    },

    // === УРОКИ УЧИТЕЛЯ ===
    getCustomLessons(allGrades = false) {
        this.ensureMigrated();
        const all = this.load(this.KEYS.CUSTOM_LESSONS, []) || [];
        if (allGrades) return all;
        const g = this.grade();
        return all.filter(l => !l.grade || Number(l.grade) === g);
    },

    addCustomLesson(lesson) {
        const lessons = this.getCustomLessons(true);
        lesson.id = "clesson_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
        lesson.grade = Number(lesson.grade || this.grade());
        lessons.push(lesson);
        this.save(this.KEYS.CUSTOM_LESSONS, lessons);
        return lesson;
    },

    deleteCustomLesson(id) {
        const lessons = this.getCustomLessons(true).filter(l => l.id !== id);
        this.save(this.KEYS.CUSTOM_LESSONS, lessons);
        return lessons;
    },

    // === НАСТРОЙКИ (ЕДИНЫЕ ДЛЯ 7–9 КЛАССОВ + СИНХРОНИЗАЦИЯ С PQAccount) ===
    // Лимиты задания: сколько подсказок и попыток даётся ученику.
    // Учитель задаёт их при назначении, ученик — в профиле для самостоятельной игры.
    DEFAULT_QUEST_LIMITS: { hints: 3, attempts: 5 },

    clampQuestLimits(raw = {}) {
        const defaults = this.DEFAULT_QUEST_LIMITS;
        const hints = Number(raw && raw.hints);
        const attempts = Number(raw && raw.attempts);
        return {
            hints: Number.isFinite(hints) ? Math.max(0, Math.min(10, Math.round(hints))) : defaults.hints,
            attempts: Number.isFinite(attempts) ? Math.max(1, Math.min(10, Math.round(attempts))) : defaults.attempts
        };
    },

    getQuestLimits() {
        const settings = this.getSettings();
        return this.clampQuestLimits(settings.questLimits || {});
    },

    setQuestLimits(limits = {}) {
        const merged = this.clampQuestLimits({ ...this.getQuestLimits(), ...(limits || {}) });
        this.setSettings({ questLimits: merged });
        return merged;
    },

    // Лимиты из назначения учителя. Если учитель их не задавал — null,
    // и тогда действуют настройки профиля ученика.
    getAssignmentLimits(code) {
        const normalized = this.normalizeAssignmentCode(code);
        if (!normalized) return null;
        const row = this.getAssignments().find(item =>
            this.normalizeAssignmentCode(item.assignmentCode) === normalized &&
            (item.hints != null || item.attempts != null)
        );
        if (!row) return null;
        return this.clampQuestLimits({ hints: row.hints, attempts: row.attempts });
    },

    // Итоговые лимиты для старта уровня: назначение важнее профиля.
    resolveQuestLimits(code) {
        return this.getAssignmentLimits(code) || this.getQuestLimits();
    },

    getSettings() {
        this.ensureMigrated();
        const acc = window.PQAccount ? window.PQAccount.get() : null;
        const defaults = {
            language: (acc && acc.language) || "ru",
            playerName: (acc && acc.student && acc.student.name) || "",
            playerId: (acc && acc.student && acc.student.playerId) || this.makeId("player"),
            playerCode: (acc && acc.student && acc.student.studentCode) || this.makePlayerCode()
        };
        const saved = this.load(this.KEYS.SETTINGS, null);
        const settings = { ...defaults, ...(saved && typeof saved === "object" ? saved : {}) };
        if (acc && acc.student) {
            settings.playerCode = acc.student.studentCode || settings.playerCode;
            settings.playerId = acc.student.playerId || settings.playerId;
            if (acc.student.name) settings.playerName = acc.student.name;
            if (acc.language) settings.language = acc.language;
        }
        // В настройках мог остаться старый 5-символьный код (P7X4K) — приводим к 4.
        settings.playerCode = this.canonicalStudentCode(settings.playerCode) || settings.playerCode;
        if (!saved || !settings.playerId || !settings.playerCode) {
            this.save(this.KEYS.SETTINGS, settings);
        }
        return settings;
    },

    setSettings(settings) {
        const current = this.getSettings();
        const merged = {
            ...current,
            ...settings,
            playerId: settings.playerId || current.playerId,
            playerCode: this.canonicalStudentCode(settings.playerCode || current.playerCode)
        };
        this.save(this.KEYS.SETTINGS, merged);
        if (window.PQAccount && settings.playerName !== undefined) {
            window.PQAccount.updateStudentNameAndSync(merged.playerName);
        }
    }
};


