/* ============================================================
   TEACHER CABINET 2.0 — «Пульт класса»
   E2 «Мост результатов»: коды результатов и импорт файла отчёта
   E1 «Пульт класса»: KPI, «требуют внимания», сроки, список учеников
   E4 «Карточка ученика»: слабые темы, история, комментарий учителя
   E5 «Отчёты»: CSV ×3 и печатная сводка A4
   E9 «Мобильный кабинет»: прокрутка вкладок, одна колонка, отступы
   ============================================================ */

const RPG_HQ_KEYS = {
    RESULTS: "physicsquest_unified_teacher_results",
    COMMENTS: "physicsquest_unified_teacher_comments",
    VIEW: "physicsquest_unified_teacher_view"
};
(function migrateTeacherHQKeys() {
    try {
        for (const [oldK, newK] of [
            ["physicsquest8_teacher_results", RPG_HQ_KEYS.RESULTS],
            ["physicsquest8_teacher_comments", RPG_HQ_KEYS.COMMENTS],
            ["physicsquest8_teacher_view", RPG_HQ_KEYS.VIEW]
        ]) {
            const v = localStorage.getItem(oldK);
            if (v && !localStorage.getItem(newK)) localStorage.setItem(newK, v);
        }
    } catch (_) {}
})();

const RPG_HQ_ALPH = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const RPG_HQ_DAY = 24 * 60 * 60 * 1000;
const RPG_HQ_CODE_RE = /R[12]-[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+-[VD]-\d{1,3}-\d{1,3}-\d{1,5}-\d{6}(?:-G[A-Z0-9]{5})?(?:-A[A-Z0-9]{3,8})?-[A-Z0-9]{4}/;

/* ---------------- МЕЛКИЕ УТИЛИТЫ ---------------- */

/** Устойчивый короткий хеш: одинаковый на всех устройствах. */
function hqHash(text, len) {
    let h1 = 2166136261;
    let h2 = 5381;
    const s = String(text == null ? "" : text);
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        h1 ^= c;
        h1 = Math.imul(h1, 16777619);
        h2 = (Math.imul(h2, 33) + c) >>> 0;
    }
    let n = (h1 ^ (h2 >>> 1)) >>> 0;
    let out = "";
    for (let i = 0; i < len; i++) {
        out += RPG_HQ_ALPH[n % RPG_HQ_ALPH.length];
        const next = Math.floor(n / RPG_HQ_ALPH.length);
        n = next || ((Math.imul(n, 1103515245) + 12345) >>> 0);
    }
    return out;
}

function hqNorm(value) {
    return String(value == null ? "" : value).trim().toLowerCase().replace(/\s+/g, " ");
}

function hqNameHash(name) {
    return hqHash(hqNorm(name), 6);
}

function hqNum(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? n : (fallback || 0);
}

function hqDayStart(ts) {
    const d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}

function hqPct(part, total) {
    if (!total) return 0;
    return Math.round((part / total) * 100);
}

function hqInitials(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
}

function hqDateToken(iso) {
    const d = iso ? new Date(iso) : new Date();
    if (isNaN(d.getTime())) return "000101";
    return String(d.getFullYear()).slice(2)
        + String(d.getMonth() + 1).padStart(2, "0")
        + String(d.getDate()).padStart(2, "0");
}

function hqFromDateToken(token) {
    const t = String(token || "");
    if (!/^\d{6}$/.test(t)) return new Date().toISOString();
    const y = 2000 + parseInt(t.slice(0, 2), 10);
    const m = parseInt(t.slice(2, 4), 10);
    const d = parseInt(t.slice(4, 6), 10);
    const date = new Date(y, Math.max(0, m - 1), Math.max(1, d), 12, 0, 0, 0);
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function hqFileDate() {
    const d = new Date();
    return String(d.getFullYear()) + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
}

function hqDownload(filename, content, mime) {
    try {
        const blob = new Blob([content], { type: mime || "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            try { URL.revokeObjectURL(url); } catch (e) {}
            link.remove();
        }, 800);
        return true;
    } catch (e) {
        console.warn("HQ download failed", e);
        return false;
    }
}

function hqCopy(text) {
    const value = String(text == null ? "" : text);
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).catch(() => {});
            return true;
        }
    } catch (e) {}
    try {
        const area = document.createElement("textarea");
        area.value = value;
        area.setAttribute("readonly", "readonly");
        area.style.position = "fixed";
        area.style.left = "-1000px";
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand("copy");
        area.remove();
        return ok;
    } catch (e) {
        return false;
    }
}

/* ============================================================
   ОСНОВНОЙ МОДУЛЬ
   ============================================================ */

const TeacherHQ = {
    viewState: { classId: "all", days: 30 },
    activeStudent: null,
    lastImport: null,

    /* ---------- ЖИЗНЕННЫЙ ЦИКЛ ---------- */

    install() {
        this.injectMarkup();
        this.injectStylesForBase();
        this.bindDelegates();
        this.refreshLabels();
        this.wrapTeacher();
        this.wrapSummary();
    },

    injectMarkup() {
        const tabs = document.querySelector(".teacher-tabs");
        if (!tabs || document.getElementById("hq-tab-class")) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tab-btn";
        btn.id = "hq-tab-class";
        btn.dataset.tab = "class";
        btn.dataset.hqKey = "hqTabClass";
        btn.textContent = rpgT("hqTabClass");
        tabs.insertBefore(btn, tabs.firstChild);

        const panel = document.createElement("div");
        panel.className = "tab-content";
        panel.id = "tab-class";
        panel.innerHTML = this.panelShell();
        const create = document.getElementById("tab-create");
        if (create && create.parentElement) create.parentElement.insertBefore(panel, create);
        else document.querySelector(".teacher-inner").appendChild(panel);

        // Модальное окно карточки ученика
        if (!document.getElementById("hq-student-modal")) {
            const modal = document.createElement("div");
            modal.className = "hq-modal";
            modal.id = "hq-student-modal";
            modal.hidden = true;
            modal.innerHTML = `
                <div class="hq-sheet" role="dialog" aria-modal="true" aria-labelledby="hq-student-title">
                    <button type="button" class="hq-sheet-x" data-hq-action="close-student" aria-label="${escapeHtml(rpgT("hqClose"))}">×</button>
                    <div id="hq-student-body"></div>
                </div>`;
            document.body.appendChild(modal);
        }

        // Подсказка в «Статистике»: это статистика устройства, а не класса
        const statsTab = document.getElementById("tab-stats");
        if (statsTab && !statsTab.querySelector(".hq-stats-note")) {
            const note = document.createElement("p");
            note.className = "hq-stats-note";
            note.dataset.hqKey = "hqStatsNote";
            note.textContent = rpgT("hqStatsNote");
            statsTab.insertBefore(note, statsTab.firstChild);
        }
    },

    panelShell() {
        return `
            <div class="hq-topbar">
                <div class="hq-classes" id="hq-classes"></div>
                <div class="hq-period" id="hq-period">
                    <button type="button" data-hq-action="period" data-days="7">7 ${escapeHtml(rpgT("hqDaysShort"))}</button>
                    <button type="button" data-hq-action="period" data-days="30">30 ${escapeHtml(rpgT("hqDaysShort"))}</button>
                    <button type="button" data-hq-action="period" data-days="0" data-hq-key="hqPeriodAll">${escapeHtml(rpgT("hqPeriodAll"))}</button>
                </div>
            </div>
            <p class="hq-sync-note" data-hq-key="hqSyncNote">${escapeHtml(rpgT("hqSyncNote"))}</p>
            <div id="hq-body"></div>`;
    },

    /** Мобильные правки для базовых элементов кабинета (E9). */
    injectStylesForBase() {
        if (document.getElementById("hq-base-style")) return;
        const style = document.createElement("style");
        style.id = "hq-base-style";
        style.textContent = `
            @media (max-width: 768px) {
                .teacher-tabs {
                    flex-wrap: nowrap !important;
                    overflow-x: auto;
                    justify-content: flex-start !important;
                    padding: 2px 2px 8px;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }
                .teacher-tabs::-webkit-scrollbar { display: none; }
                .tab-btn { flex: 0 0 auto; white-space: nowrap; font-size: 13px; padding: 9px 14px; }
                #btn-teacher-back { position: static !important; display: block; margin: 8px auto 24px; }
                .assignment-form, .class-bulk-form { grid-template-columns: 1fr !important; }
                .class-bulk-form .btn, .assignment-form .btn { width: 100%; }
                #btn-assign-class { white-space: normal; line-height: 1.25; }
            }`;
        document.head.appendChild(style);
    },

    wrapTeacher() {
        if (typeof Teacher === "undefined" || Teacher.__hqWrapped) return;
        Teacher.__hqWrapped = true;

        const origInit = Teacher.init;
        Teacher.init = function () {
            const result = origInit.apply(this, arguments);
            try { TeacherHQ.refreshLabels(); } catch (e) {}
            return result;
        };

        const origSwitch = Teacher.switchTab;
        Teacher.switchTab = function (tabName) {
            const result = origSwitch.apply(this, arguments);
            try {
                if (tabName === "class") TeacherHQ.render();
                if (tabName === "assignments" || tabName === "stats") TeacherHQ.render(true);
            } catch (e) { console.warn("HQ switchTab", e); }
            return result;
        };

        // Кабинет открывается на «Пульте класса», а не на форме задания.
        const entry = document.getElementById("btn-teacher");
        if (entry && !entry.__hqBound) {
            entry.__hqBound = true;
            entry.addEventListener("click", () => {
                setTimeout(() => {
                    try { Teacher.switchTab("class"); } catch (e) {}
                }, 0);
            });
        }

        const origLang = (typeof I18n !== "undefined" && I18n.setLanguage) ? I18n.setLanguage : null;
        if (origLang && !I18n.__hqWrapped) {
            I18n.__hqWrapped = true;
            I18n.setLanguage = function () {
                const result = origLang.apply(this, arguments);
                try { TeacherHQ.refreshLabels(); } catch (e) {}
                try {
                    if (document.getElementById("teacher-screen")?.classList.contains("active")) {
                        const active = document.querySelector(".tab-content.active");
                        if (active && active.id === "tab-class") TeacherHQ.render();
                    }
                } catch (e) {}
                return result;
            };
        }
    },

    wrapSummary() {
        if (typeof RPG === "undefined" || !RPG || RPG.__hqSummaryWrapped) return;
        RPG.__hqSummaryWrapped = true;
        const orig = RPG.renderRunSummary;
        if (typeof orig !== "function") return;
        RPG.renderRunSummary = function (victory, summary) {
            const result = orig.apply(this, arguments);
            try { TeacherHQ.attachResultCode(victory, summary); } catch (e) { console.warn("HQ result code", e); }
            return result;
        };
    },

    refreshLabels() {
        const tab = document.getElementById("hq-tab-class");
        if (tab) tab.textContent = rpgT("hqTabClass");
        document.querySelectorAll("[data-hq-key]").forEach(el => {
            const key = el.getAttribute("data-hq-key");
            if (key) el.textContent = rpgT(key);
        });
        const statsNote = document.querySelector(".hq-stats-note");
        if (statsNote) statsNote.textContent = rpgT("hqStatsNote");
        const periodAll = document.querySelector('[data-hq-action="period"][data-days="0"]');
        if (periodAll) periodAll.textContent = rpgT("hqPeriodAll");
    },

    /* ---------- СОСТОЯНИЕ ПРОСМОТРА ---------- */

    view() {
        const saved = Storage.load(RPG_HQ_KEYS.VIEW, null);
        if (saved && typeof saved === "object") {
            this.viewState.classId = saved.classId || "all";
            this.viewState.days = Number.isFinite(Number(saved.days)) ? Number(saved.days) : 30;
        }
        const classes = Storage.getClasses() || [];
        if (this.viewState.classId !== "all" && !classes.some(c => c.id === this.viewState.classId)) {
            this.viewState.classId = "all";
        }
        return this.viewState;
    },

    setView(patch) {
        this.viewState = Object.assign({}, this.view(), patch);
        Storage.save(RPG_HQ_KEYS.VIEW, this.viewState);
        this.render();
    },

    localHistorySignature() {
        const history = (Storage.getAllGradesHistory ? Storage.getAllGradesHistory() : Storage.getHistory()) || [];
        if (!history.length) return "empty";
        const signature = history.map(row => [
            row && row.id || "",
            row && row.date || "",
            row && row.score || 0,
            row && row.playerCode || ""
        ].join(":")).join("|");
        return hqHash(signature, 8);
    },

    syncLocalHistory() {
        const signature = this.localHistorySignature();
        if (signature === this._localHistorySignature) return null;
        this._localHistorySignature = signature;
        const previousImport = this.lastImport;
        let result = null;
        try { result = this.importLocalHistory(); } catch (e) { console.warn("HQ local history", e); }
        this.lastImport = previousImport;
        return result;
    },

    /* ---------- УРОВНИ И ТЕМЫ ---------- */

    levelToken(levelId, explicitGrade) {
        const parsed = typeof parseLevelRef === "function"
            ? parseLevelRef(levelId, explicitGrade)
            : { grade: Number(explicitGrade || Storage.grade()), levelId, isCustom: String(levelId || "").startsWith("custom:") };
        const g = [7, 8, 9].includes(Number(parsed.grade)) ? Number(parsed.grade) : 8;
        if (parsed.isCustom) {
            const id = String(parsed.levelId).slice(7);
            const lesson = (Storage.getCustomLessons(true) || []).find(l => String(l.id) === id);
            const name = lesson ? (lesson.name && (lesson.name.ru || lesson.name.en || lesson.name.kk)) : id;
            return "G" + g + "K" + hqHash(hqNorm(name), 6);
        }
        const n = parseInt(parsed.levelId, 10);
        return "G" + g + "L" + (Number.isFinite(n) && n > 0 ? n : 0);
    },

    resolveToken(token) {
        const t = String(token || "").toUpperCase();
        const gm = t.match(/^G([789])L(\d+)$/);
        if (gm) {
            const n = parseInt(gm[2], 10);
            return n > 0 ? `g${gm[1]}:${n}` : null;
        }
        if (/^L\d+$/.test(t)) {
            const n = parseInt(t.slice(1), 10);
            return n > 0 ? `g8:${n}` : null;
        }
        const km = t.match(/^(?:G[789])?K([A-Z0-9]{4,})$/);
        if (km) {
            const hash = km[1];
            const lesson = (Storage.getCustomLessons(true) || []).find(l => {
                const name = l.name && (l.name.ru || l.name.en || l.name.kk);
                return hqHash(hqNorm(name || ""), 6) === hash;
            });
            return lesson ? "custom:" + lesson.id : null;
        }
        return null;
    },

    levelLabel(levelId) {
        if (levelId === null || levelId === undefined) return rpgT("hqForeignLevel");
        if (typeof catalogLevelLabel === "function") {
            return this.shortenLevel(catalogLevelLabel(levelId, Storage.grade(), true));
        }
        return String(levelId);
    },

    /** «#31 — §30. Очень длинное название, продолжение» → «#31 · §30. Очень длинное название». */
    shortenLevel(raw) {
        let text = String(raw || "");
        const dash = text.indexOf(" — ");
        if (dash > 0 && /^#\d+$/.test(text.slice(0, dash))) {
            const num = text.slice(0, dash);
            let name = text.slice(dash + 3);
            const comma = name.indexOf(",");
            if (comma > 0) name = name.slice(0, comma);
            text = num + " · " + name;
        } else {
            const comma = text.indexOf(",");
            if (comma > 30) text = text.slice(0, comma);
        }
        if (text.length > 60) text = text.slice(0, 58).replace(/[\s,;:—-]+$/, "") + "…";
        return text;
    },

    topicOf(levelId) {
        if (levelId === null || levelId === undefined) return "";
        const raw = String(levelId);
        if (raw.indexOf("custom:") === 0) return raw;
        const n = parseInt(raw, 10);
        return Number.isFinite(n) ? "lesson:" + n : "";
    },

    topicLabel(levelId) {
        if (levelId !== null && levelId !== undefined && typeof catalogLevelLabel === "function") {
            return this.shortenLevel(catalogLevelLabel(levelId, Storage.grade(), true));
        }
        const topic = this.topicOf(levelId);
        if (!topic) return rpgT("hqForeignLevel");
        let raw = topic;
        try { raw = Teacher.getTopicDisplayName(topic); } catch (e) { raw = topic; }
        return this.shortenLevel(raw);
    },

    /* ---------- КОДЫ РЕЗУЛЬТАТОВ (E2) ---------- */

    /* Стабильный токен прогона: G + хеш id записи истории. */
    runTokenOf(entry) {
        return entry.runToken || (entry.runId ? "G" + hqHash(entry.runId, 5) : "");
    },

    buildCode(entry) {
        const studentCode = String(entry.studentCode || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10) || "X0";
        const nameHash = entry.nameHash || hqNameHash(entry.name);
        const lvl = entry.levelToken || this.levelToken(entry.levelId);
        const win = entry.victory ? "V" : "D";
        const solved = Math.max(0, Math.min(999, Math.round(hqNum(entry.solved))));
        const attempted = Math.max(solved, Math.min(999, Math.round(hqNum(entry.attempted))));
        const score = Math.max(0, Math.min(99999, Math.round(hqNum(entry.score))));
        const date = hqDateToken(entry.date);
        // Include a stable per-run token so two identical games on the same day
        // remain distinct in the teacher's complete history.
        const runToken = this.runTokenOf(entry);
        const assignCode = entry.assignmentCode
            ? String(Storage.normalizeAssignmentCode(entry.assignmentCode) || "").replace(/[^A-Z0-9]/g, "").slice(0, 8)
            : "";
        // R2 — новый формат кода результата (код назначения — необязательный сегмент).
        // R1 — старый формат, по-прежнему принимается parseCode ради совместимости.
        const version = "R2";
        const payloadParts = [version, studentCode, nameHash, lvl, win, solved, attempted, score, date];
        if (runToken) payloadParts.push(runToken);
        if (assignCode) payloadParts.push("A" + assignCode);
        const payload = payloadParts.join("-");
        return payload + "-" + hqHash(payload, 4);
    },

    parseCode(raw) {
        const source = String(raw || "").toUpperCase().replace(/[|.:;]/g, "-").replace(/\s+/g, "");
        const match = source.match(RPG_HQ_CODE_RE);
        if (!match) return { ok: false, raw: String(raw || ""), reason: "format" };
        const code = match[0];
        const parts = code.split("-");
        if (parts[0] !== "R1" && parts[0] !== "R2") return { ok: false, raw: code, reason: "format" };
        let runToken = "";
        let assignmentCode = "";
        const extra = parts.slice(9, -1);
        for (const part of extra) {
            if (/^G[A-Z0-9]{5}$/.test(part)) {
                if (runToken) return { ok: false, raw: code, reason: "format" };
                runToken = part;
            } else if (/^A[A-Z0-9]{3,8}$/.test(part)) {
                if (assignmentCode) return { ok: false, raw: code, reason: "format" };
                assignmentCode = part.slice(1);
            } else {
                return { ok: false, raw: code, reason: "format" };
            }
        }
        const payload = parts.slice(0, -1).join("-");
        const check = parts[parts.length - 1];
        if (hqHash(payload, 4) !== check) return { ok: false, raw: code, reason: "checksum" };
        const entry = {
            code,
            studentCode: parts[1] === "X0" ? "" : parts[1],
            nameHash: parts[2],
            levelToken: parts[3],
            victory: parts[4] === "V",
            solved: parseInt(parts[5], 10) || 0,
            attempted: parseInt(parts[6], 10) || 0,
            score: parseInt(parts[7], 10) || 0,
            date: hqFromDateToken(parts[8]),
            runToken,
            assignmentCode
        };
        entry.levelId = this.resolveToken(entry.levelToken);
        entry.accuracy = hqPct(entry.solved, entry.attempted);
        return { ok: true, entry };
    },

    candidates(text) {
        const out = [];
        String(text || "").split(/[\n\r]+/).forEach(line => {
            if (!line.trim()) return;
            const up = line.toUpperCase().replace(/[|.:;]/g, "-");
            const match = up.match(/R[12]-[A-Z0-9-]{12,90}/);
            if (!match) return;
            out.push(match[0].replace(/[^A-Z0-9-]/g, "").replace(/-+$/, ""));
        });
        return out;
    },

    /* ---------- ХРАНИЛИЩЕ РЕЗУЛЬТАТОВ ---------- */

    allResults() {
        const list = Storage.load(RPG_HQ_KEYS.RESULTS, []);
        return Array.isArray(list) ? list.filter(r => r && r.code) : [];
    },

    saveResults(list) {
        Storage.save(RPG_HQ_KEYS.RESULTS, list);
    },

    normalizeResult(entry) {
        const copy = Object.assign({}, entry);
        copy.solved = Math.max(0, hqNum(copy.solved));
        copy.attempted = Math.max(copy.solved, hqNum(copy.attempted));
        copy.score = Math.max(0, hqNum(copy.score));
        copy.accuracy = hqPct(copy.solved, copy.attempted);
        copy.victory = !!copy.victory;
        copy.date = copy.date || new Date().toISOString();
        if (!copy.levelToken && copy.levelId !== undefined) {
            copy.levelToken = this.levelToken(copy.levelId);
        }
        const resolved = copy.levelToken ? this.resolveToken(copy.levelToken) : null;
        if (resolved) {
            copy.levelId = resolved;
        } else if (copy.levelId !== undefined && typeof parseLevelRef === "function") {
            copy.levelId = parseLevelRef(copy.levelId, Storage.grade()).canonical;
        }
        return copy;
    },

    /* Подпись попытки без учёта версии кода (R1/R2), кода назначения и
       токена прогона — нужна, чтобы одна и та же игра не попадала в
       кабинет дважды при переходе со старых кодов R1 на новые R2. */
    resultSignature(entry) {
        return [
            String(entry.studentCode || "").toUpperCase(),
            entry.nameHash || hqNameHash(entry.name || ""),
            String(entry.levelToken || this.levelToken(entry.levelId)),
            entry.victory ? "V" : "D",
            Math.round(hqNum(entry.solved)),
            Math.round(hqNum(entry.attempted)),
            Math.round(hqNum(entry.score)),
            hqDateToken(entry.date)
        ].join("|");
    },

    addResults(entries) {
        const list = this.allResults();
        const seen = new Set(list.map(r => r.code));
        const tokenSet = new Set();
        const sigMap = new Map();
        const indexEntry = e => {
            const token = this.runTokenOf(e);
            const sig = this.resultSignature(e);
            let slot = sigMap.get(sig);
            if (!slot) {
                slot = { tokens: new Set(), tokenless: 0 };
                sigMap.set(sig, slot);
            }
            if (token) {
                slot.tokens.add(token);
                tokenSet.add(token);
            } else {
                slot.tokenless += 1;
            }
        };
        list.forEach(indexEntry);
        let added = 0;
        let dup = 0;
        entries.forEach(raw => {
            if (!raw || !raw.code) return;
            const token = this.runTokenOf(raw);
            const sig = this.resultSignature(raw);
            const slot = sigMap.get(sig);
            // Тот же код, тот же токен прогона или «та же игра» в другом
            // формате кода (R1 ↔ R2) — считаем повтором.
            const isDup = seen.has(raw.code)
                || (!!token && tokenSet.has(token))
                || (!!slot && (token
                    ? (slot.tokens.has(token) || slot.tokenless > 0)
                    : (slot.tokens.size > 0 || slot.tokenless > 0)));
            if (isDup) {
                dup += 1;
                return;
            }
            seen.add(raw.code);
            list.push(this.normalizeResult(Object.assign({}, raw, { importedAt: new Date().toISOString() })));
            indexEntry(raw);
            added += 1;
        });
        list.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
        if (added) this.saveResults(list);
        return { added, dup };
    },

    importCodes(text) {
        const found = this.candidates(text);
        const good = [];
        const bad = [];
        found.forEach(code => {
            const parsed = this.parseCode(code);
            if (parsed.ok) good.push(parsed.entry);
            else bad.push(parsed.raw || code);
        });
        const result = this.addResults(good);
        this.lastImport = { added: result.added, dup: result.dup, bad: bad.length, badList: bad };
        return this.lastImport;
    },

    entryFromRecord(record, player) {
        if (!record || typeof record !== "object") return null;
        const rawLevel = record.canonicalLevel || (record.level !== undefined && record.level !== null && record.level !== "" ? record.level : record.levelId);
        if (rawLevel === undefined || rawLevel === null || rawLevel === "") return null;
        const levelId = typeof parseLevelRef === "function" ? parseLevelRef(rawLevel, record.grade || Storage.grade()).canonical : rawLevel;
        const nested = player || {};
        const entry = {
            studentCode: String(record.playerCode || nested.code || nested.playerCode || "").toUpperCase(),
            // The name stored with that run is stable even if the profile is renamed later.
            nameHash: hqNameHash(record.name || nested.name || ""),
            levelToken: this.levelToken(levelId),
            levelId: levelId,
            victory: !!record.victory,
            solved: record.tasksSolved,
            attempted: record.tasksAttempted,
            score: record.score,
            date: record.date || new Date().toISOString(),
            runId: record.id || "",
            assignmentCode: record.assignmentCode || ""
        };
        entry.code = this.buildCode(entry);
        return entry;
    },

    importReport(data) {
        let payload = data;
        if (typeof payload === "string") {
            try { payload = JSON.parse(payload); } catch (e) { return { added: 0, dup: 0, bad: 1, badList: [rpgT("hqBadFile")] }; }
        }
        if (!payload || typeof payload !== "object") {
            return { added: 0, dup: 0, bad: 1, badList: [rpgT("hqBadFile")] };
        }
        const player = payload.player || {};
        const history = Array.isArray(payload.history) ? payload.history
            : Array.isArray(payload.records) ? payload.records : [];
        if (!history.length) {
            return { added: 0, dup: 0, bad: 1, badList: [rpgT("hqBadFile")] };
        }
        const entries = history.map(row => this.entryFromRecord(row, player)).filter(Boolean);
        const result = this.addResults(entries);
        this.lastImport = { added: result.added, dup: result.dup, bad: 0, badList: [] };
        return this.lastImport;
    },

    importLocalHistory() {
        let settings = {};
        try { settings = Storage.getSettings() || {}; } catch (e) {}
        const player = { code: settings.playerCode || "", name: settings.playerName || "" };
        const history = (Storage.getAllGradesHistory ? Storage.getAllGradesHistory() : Storage.getHistory()) || [];
        const entries = history.map(row => this.entryFromRecord(row, player)).filter(Boolean);
        const result = this.addResults(entries);
        this.lastImport = { added: result.added, dup: result.dup, bad: 0, badList: [] };
        return this.lastImport;
    },

    exportStudentReport() {
        let settings = {};
        let stats = {};
        try { settings = Storage.getSettings() || {}; } catch (e) {}
        try { stats = Storage.getStats() || {}; } catch (e) {}
        const payload = {
            app: "physics-quest",
            kind: "student-report",
            version: 1,
            exportedAt: new Date().toISOString(),
            player: {
                name: settings.playerName || "",
                code: settings.playerCode || ""
            },
            stats: { byTopic: stats.byTopic || {}, totalAnswered: stats.totalAnswered || 0, correctAnswers: stats.correctAnswers || 0 },
            history: (Storage.getHistory() || []).map(row => ({
                level: row.level,
                levelLabel: row.levelLabel,
                victory: !!row.victory,
                score: row.score,
                accuracy: row.accuracy,
                tasksSolved: row.tasksSolved,
                tasksAttempted: row.tasksAttempted,
                tasksTotal: row.tasksTotal,
                date: row.date,
                playerCode: row.playerCode,
                name: row.name,
                id: row.id,
                assignmentCode: row.assignmentCode
            }))
        };
        const name = "physics-quest-report-" + (settings.playerCode || "player") + "-" + hqFileDate() + ".json";
        hqDownload(name, JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
        return payload;
    },

    /* ---------- КЛАССЫ, УЧЕНИКИ, НАЗНАЧЕНИЯ ---------- */

    classById(id) {
        return (Storage.getClasses() || []).find(c => c.id === id) || null;
    },

    scopeClasses(classId) {
        const classes = Storage.getClasses() || [];
        if (!classId || classId === "all") return classes;
        return classes.filter(c => c.id === classId);
    },

    resultsForStudent(student, cls, results) {
        const code = String(student.studentCode || student.playerId || "").toUpperCase();
        const hash = hqNameHash(student.name);
        return (results || this.allResults()).filter(r => {
            if (code && r.studentCode && String(r.studentCode).toUpperCase() === code) return true;
            if (r.nameHash && r.nameHash === hash) {
                // Если в коде есть чужой код ученика — это другой человек.
                if (code && r.studentCode && String(r.studentCode).toUpperCase() !== code) return false;
                return true;
            }
            return false;
        });
    },

    studentKey(cls, student) {
        const code = String(student.studentCode || student.playerId || "").toUpperCase();
        return String(cls.id) + "|" + (code || "n:" + hqNameHash(student.name));
    },

    assignmentsFor(cls, student) {
        const rows = Storage.getAssignments() || [];
        const name = hqNorm(student.name);
        const code = String(student.studentCode || student.playerId || "").toUpperCase();
        return rows.filter(a => {
            if (!a) return false;
            if (a.classId) return a.classId === cls.id && (
                (code && String(a.studentCode || a.playerId || "").toUpperCase() === code)
                || (!!name && hqNorm(a.studentName) === name)
            );
            return (code && String(a.studentCode || a.playerId || "").toUpperCase() === code)
                || (!!name && hqNorm(a.studentName) === name);
        });
    },

    assignmentStatus(assignment, studentResults) {
        const token = this.levelToken(assignment.levelId);
        const assignedAt = new Date(assignment.assignedAt || 0).getTime();
        const own = (studentResults || []).filter(r =>
            r.levelToken === token && new Date(r.date || 0).getTime() >= assignedAt
        );
        const latest = own.reduce((acc, r) =>
            !acc || new Date(r.date || 0).getTime() >= new Date(acc.date || 0).getTime() ? r : acc, null);
        const latestVictory = own.reduce((acc, r) =>
            r.victory && (!acc || new Date(r.date || 0).getTime() >= new Date(acc.date || 0).getTime()) ? r : acc, null);
        if (latestVictory) return { status: "done", result: latestVictory };
        const due = assignment.dueAt ? new Date(assignment.dueAt).getTime() : 0;
        // Неудачные попытки — «В процессе», показываем результат последней попытки.
        if (due && due < Date.now()) return { status: "overdue", result: latest };
        if (own.length) return { status: "started", result: latest };
        return { status: "pending", result: null };
    },

    roster(classId) {
        const results = this.allResults();
        const classes = this.scopeClasses(classId);
        const rows = [];
        classes.forEach(cls => {
            (cls.students || []).forEach(student => {
                const own = this.resultsForStudent(student, cls, results);
                const assignments = this.assignmentsFor(cls, student).map(a => {
                    const st = this.assignmentStatus(a, own);
                    return Object.assign({ assignment: a }, st);
                });
                const solved = own.reduce((sum, r) => sum + hqNum(r.solved), 0);
                const attempted = own.reduce((sum, r) => sum + hqNum(r.attempted), 0);
                const last = own.reduce((acc, r) => {
                    const ts = new Date(r.date || 0).getTime();
                    return ts > acc ? ts : acc;
                }, 0);
                const day = Date.now() - RPG_HQ_DAY;
                const week = Date.now() - 7 * RPG_HQ_DAY;
                const month = Date.now() - 30 * RPG_HQ_DAY;
                const accFor = since => {
                    const list = own.filter(r => new Date(r.date || 0).getTime() >= since);
                    const s = list.reduce((sum, r) => sum + hqNum(r.solved), 0);
                    const a = list.reduce((sum, r) => sum + hqNum(r.attempted), 0);
                    return { accuracy: hqPct(s, a), attempts: a, missions: list.length };
                };
                const doneCount = assignments.filter(x => x.status === "done").length;
                const overdueCount = assignments.filter(x => x.status === "overdue").length;
                rows.push({
                    key: this.studentKey(cls, student),
                    classId: cls.id,
                    className: cls.name,
                    name: student.name || student.studentCode || "—",
                    code: String(student.studentCode || student.playerId || "").toUpperCase(),
                    results: own,
                    assignments,
                    solved,
                    attempted,
                    accuracy: hqPct(solved, attempted),
                    missions: own.length,
                    lastAt: last,
                    day: accFor(day),
                    week: accFor(week),
                    month: accFor(month),
                    doneCount,
                    overdueCount,
                    status: doneCount > 0 ? "done" : overdueCount > 0 ? "overdue" : own.length ? "started" : "idle"
                });
            });
        });
        rows.sort((a, b) => {
            if (b.overdueCount !== a.overdueCount) return b.overdueCount - a.overdueCount;
            if (a.status === "idle" && b.status !== "idle") return 1;
            if (b.status === "idle" && a.status !== "idle") return -1;
            return String(a.name).localeCompare(String(b.name), "ru");
        });
        return rows;
    },

    batches(classId) {
        const rows = (Storage.getAssignments() || []).filter(a => {
            if (!a) return false;
            if (!classId || classId === "all") return true;
            return a.classId === classId;
        });
        const all = this.allResults();
        const map = new Map();
        rows.forEach(a => {
            const key = (a.classId || "solo") + "|" + (a.assignmentCode || a.id);
            let batch = map.get(key);
            if (!batch) {
                batch = {
                    key,
                    classId: a.classId || "",
                    className: a.className || "",
                    levelId: a.levelId,
                    levelToken: this.levelToken(a.levelId),
                    code: a.assignmentCode || "",
                    assignedAt: a.assignedAt || "",
                    dueAt: a.dueAt || "",
                    rows: []
                };
                map.set(key, batch);
            }
            if (!batch.dueAt && a.dueAt) batch.dueAt = a.dueAt;
            batch.rows.push(a);
        });
        const result = Array.from(map.values()).map(batch => {
            let done = 0;
            let overdue = 0;
            let started = 0;
            let pending = 0;
            batch.rows.forEach(a => {
                const own = all.filter(r => {
                    if (a.studentCode && r.studentCode && String(r.studentCode).toUpperCase() === String(a.studentCode).toUpperCase()) return true;
                    if (a.studentName && r.nameHash && r.nameHash === hqNameHash(a.studentName)) return true;
                    return false;
                });
                const st = this.assignmentStatus(a, own);
                if (st.status === "done") done += 1;
                else if (st.status === "overdue") overdue += 1;
                else if (st.status === "started") started += 1;
                else pending += 1;
            });
            return Object.assign(batch, { done, overdue, started, pending, total: batch.rows.length });
        });
        result.sort((a, b) => {
            const ad = a.dueAt ? new Date(a.dueAt).getTime() : Infinity;
            const bd = b.dueAt ? new Date(b.dueAt).getTime() : Infinity;
            if (ad !== bd) return ad - bd;
            return String(b.assignedAt).localeCompare(String(a.assignedAt));
        });
        return result;
    },

    inPeriod(list, days) {
        if (!days) return list;
        const since = Date.now() - days * RPG_HQ_DAY;
        return list.filter(r => new Date(r.date || 0).getTime() >= since);
    },

    /* ---------- СВОДКА ---------- */

    summary(classId, days) {
        const roster = this.roster(classId);
        const batches = this.batches(classId);
        const students = roster.length;
        const results = this.inPeriod(roster.flatMap(r => r.results), days);
        const solved = results.reduce((sum, r) => sum + hqNum(r.solved), 0);
        const attempted = results.reduce((sum, r) => sum + hqNum(r.attempted), 0);
        const active = roster.filter(r => r.lastAt >= Date.now() - 7 * RPG_HQ_DAY).length;
        const doneStudents = roster.filter(r => r.doneCount > 0).length;
        return {
            roster,
            batches,
            students,
            assignments: batches.length,
            doneStudents,
            donePct: hqPct(doneStudents, students),
            accuracy: hqPct(solved, attempted),
            attempts: attempted,
            active,
            results
        };
    },

    weakTopics(roster, minAttempts) {
        const map = new Map();
        roster.forEach(row => {
            row.results.forEach(r => {
                const key = r.levelToken || "?";
                if (!map.has(key)) {
                    map.set(key, {
                        key,
                        levelId: r.levelId,
                        label: this.topicLabel(r.levelId),
                        solved: 0,
                        attempted: 0,
                        students: new Set()
                    });
                }
                const item = map.get(key);
                item.solved += hqNum(r.solved);
                item.attempted += hqNum(r.attempted);
                if (hqNum(r.attempted)) item.students.add(row.key);
            });
        });
        return Array.from(map.values())
            .filter(item => item.attempted >= (minAttempts || 3))
            .map(item => Object.assign(item, {
                accuracy: hqPct(item.solved, item.attempted),
                studentsCount: item.students.size
            }))
            .sort((a, b) => a.accuracy - b.accuracy);
    },

    /* ---------- РЕНДЕР ---------- */

    render(quiet) {
        const body = document.getElementById("hq-body");
        if (!body) return;
        this.syncLocalHistory();
        const view = this.view();
        this.renderClassChips(view);
        this.renderPeriod(view);
        const data = this.summary(view.classId, view.days);
        const classes = Storage.getClasses() || [];

        if (!classes.length) {
            body.innerHTML = this.onboardingHtml();
            return;
        }

        body.innerHTML = [
            this.kpiHtml(data, view),
            this.attentionHtml(data, view),
            this.deadlinesHtml(data, view),
            this.rosterHtml(data, view),
            this.bridgeHtml(),
            this.exportsHtml()
        ].join("");
        if (!quiet && this.lastImport) this.showImportSummary();
    },

    renderClassChips(view) {
        const wrap = document.getElementById("hq-classes");
        if (!wrap) return;
        const classes = Storage.getClasses() || [];
        const chips = [];
        chips.push(`<button type="button" class="hq-chip${view.classId === "all" ? " active" : ""}" data-hq-action="class" data-class="all">${escapeHtml(rpgT("hqAllClasses"))}</button>`);
        classes.forEach(cls => {
            chips.push(`<button type="button" class="hq-chip${view.classId === cls.id ? " active" : ""}" data-hq-action="class" data-class="${escapeHtml(cls.id)}">${escapeHtml(cls.name)} <span>${(cls.students || []).length}</span></button>`);
        });
        chips.push(`<button type="button" class="hq-chip ghost" data-hq-action="add-class">${escapeHtml(rpgT("hqAddClass"))}</button>`);
        wrap.innerHTML = chips.join("");
    },

    renderPeriod(view) {
        document.querySelectorAll('#hq-period [data-hq-action="period"]').forEach(btn => {
            const days = Number(btn.getAttribute("data-days"));
            btn.classList.toggle("active", days === view.days);
        });
    },

    kpiHtml(data, view) {
        const classLabel = view.classId === "all"
            ? rpgT("hqAllClasses")
            : (this.classById(view.classId) || {}).name || "";
        const doneText = data.students ? `${data.doneStudents} / ${data.students} · ${data.donePct}%` : "—";
        const accuracyText = data.attempts ? data.accuracy + "%" : "—";
        return `
            <section class="hq-section">
                <div class="hq-section-head">
                    <div>
                        <h3>${escapeHtml(rpgT("hqTitle"))}</h3>
                        <p>${escapeHtml(classLabel)} · ${escapeHtml(this.periodLabel(view.days))}</p>
                    </div>
                </div>
                <div class="hq-kpis">
                    <div class="hq-kpi"><b>${data.students}</b><span>${escapeHtml(rpgT("hqKpiStudents"))}</span></div>
                    <div class="hq-kpi"><b>${data.assignments}</b><span>${escapeHtml(rpgT("hqKpiAssignments"))}</span></div>
                    <div class="hq-kpi"><b>${doneText}</b><span>${escapeHtml(rpgT("hqKpiDone"))}</span></div>
                    <div class="hq-kpi"><b>${accuracyText}</b><span>${escapeHtml(rpgT("hqKpiAccuracy"))}</span></div>
                    <div class="hq-kpi"><b>${data.active}</b><span>${escapeHtml(rpgT("hqKpiActive"))}</span></div>
                </div>
            </section>`;
    },

    periodLabel(days) {
        if (!days) return rpgT("hqPeriodAll");
        return rpgT("hqPeriodDays", days);
    },

    attentionItems(data, view) {
        const items = [];
        const now = Date.now();

        data.batches.forEach(batch => {
            const missing = batch.total - batch.done;
            if (!missing) return;
            const due = batch.dueAt ? new Date(batch.dueAt).getTime() : 0;
            if (!due) return;
            const cal = Math.round((hqDayStart(due) - hqDayStart(now)) / RPG_HQ_DAY);
            if (cal > 7) return;
            items.push({
                type: "deadline",
                severity: cal < 0 ? "danger" : cal <= 1 ? "warning" : "calm",
                icon: cal < 0 ? "⚠️" : "⏳",
                text: rpgT("hqMissingLine", this.levelLabel(batch.levelId), missing, batch.total, rpgDueLabel(batch.dueAt)),
                action: "remind",
                actionLabel: rpgT("hqRemind"),
                key: batch.key
            });
        });

        const weak = this.weakTopics(data.roster, 3).filter(t => t.accuracy < 60);
        const clsName = String(((this.classById(view.classId) || {}).name || "")).trim();
        const clsSuffix = clsName ? rpgT("hqWeakTopicClass", clsName) : "";
        weak.slice(0, 2).forEach(topic => {
            items.push({
                type: "topic",
                severity: topic.accuracy < 45 ? "danger" : "warning",
                icon: "📉",
                text: rpgT("hqWeakTopic", topic.label, topic.accuracy, clsSuffix) + ` · ${topic.attempted} ${rpgT("hqAnswersShort")}`,
                action: "topic",
                actionLabel: rpgT("hqReview"),
                key: topic.key
            });
        });

        const idle = data.roster.filter(r => !r.lastAt || r.lastAt < now - 7 * RPG_HQ_DAY);
        if (idle.length && data.assignments) {
            items.push({
                type: "idle",
                severity: idle.length >= Math.max(3, Math.round(data.students / 3)) ? "warning" : "calm",
                icon: "💤",
                text: rpgT("hqIdleLine", idle.length, data.students),
                action: "idle",
                actionLabel: rpgT("hqList"),
                key: "idle"
            });
        }
        return items;
    },

    attentionHtml(data, view) {
        const items = this.attentionItems(data, view);
        if (!items.length) {
            return `
                <section class="hq-section">
                    <div class="hq-section-head"><h3>${escapeHtml(rpgT("hqAttention"))}</h3></div>
                    <div class="hq-ok">✅ ${escapeHtml(rpgT("hqAllGood"))}</div>
                </section>`;
        }
        return `
            <section class="hq-section">
                <div class="hq-section-head"><h3>${escapeHtml(rpgT("hqAttention"))}</h3></div>
                <div class="hq-attn">
                    ${items.map(item => `
                        <div class="hq-attn-row ${item.severity}">
                            <span class="hq-attn-icon">${item.icon}</span>
                            <span class="hq-attn-text">${escapeHtml(item.text)}</span>
                            <button type="button" class="hq-mini-btn" data-hq-action="${item.action}" data-key="${escapeHtml(item.key)}">${escapeHtml(item.actionLabel)}</button>
                        </div>`).join("")}
                </div>
            </section>`;
    },

    deadlinesHtml(data, view) {
        const rows = data.batches
            .filter(b => b.dueAt || b.done < b.total)
            .slice(0, 4);
        if (!rows.length) {
            return `
                <section class="hq-section">
                    <div class="hq-section-head"><h3>${escapeHtml(rpgT("hqDeadlines"))}</h3></div>
                    <div class="hq-empty">${escapeHtml(rpgT("hqNoDeadlines"))}</div>
                </section>`;
        }
        return `
            <section class="hq-section">
                <div class="hq-section-head"><h3>${escapeHtml(rpgT("hqDeadlines"))}</h3></div>
                <div class="hq-deadlines">
                    ${rows.map(batch => {
                        const pct = hqPct(batch.done, batch.total);
                        const dueClass = batch.dueAt ? rpgDueChipClass(batch.dueAt, batch.done >= batch.total) : "";
                        return `
                        <div class="hq-dead-row">
                            <div class="hq-dead-main">
                                <div class="hq-dead-title">${escapeHtml(this.levelLabel(batch.levelId))}</div>
                                <div class="hq-dead-meta">
                                    ${batch.className ? `<span>👥 ${escapeHtml(batch.className)}</span>` : ""}
                                    ${batch.code ? `<span>🔑 ${escapeHtml(batch.code)}</span>` : ""}
                                    ${batch.dueAt ? `<span class="hq-due ${dueClass}">${escapeHtml(rpgDueLabel(batch.dueAt))}</span>` : `<span class="hq-due">${escapeHtml(rpgT("hqNoDue"))}</span>`}
                                </div>
                                <div class="hq-progress"><i style="width:${pct}%"></i><b>${batch.done} / ${batch.total}</b></div>
                            </div>
                            <div class="hq-dead-actions">
                                <button type="button" class="hq-mini-btn" data-hq-action="open-batch" data-key="${escapeHtml(batch.key)}">${escapeHtml(rpgT("hqOpen"))}</button>
                                <button type="button" class="hq-mini-btn ghost" data-hq-action="assign-more" data-key="${escapeHtml(batch.key)}">${escapeHtml(rpgT("hqAssignMore"))}</button>
                            </div>
                        </div>`;
                    }).join("")}
                </div>
            </section>`;
    },

    rosterHtml(data, view) {
        if (!data.students) {
            return `
                <section class="hq-section">
                    <div class="hq-section-head"><h3>${escapeHtml(rpgT("hqRoster"))}</h3></div>
                    <div class="hq-empty">${escapeHtml(rpgT("hqNoStudents"))}</div>
                </section>`;
        }
        const cards = data.roster.map(row => {
            const statusKey = row.status === "done" ? "hqDone" : row.status === "overdue" ? "hqOverdue" : row.status === "started" ? "hqStarted" : "hqIdle";
            const lastText = row.lastAt ? this.relativeDay(row.lastAt) : rpgT("hqNever");
            return `
                <button type="button" class="hq-student ${row.status}" data-hq-action="student" data-key="${escapeHtml(row.key)}">
                    <span class="hq-avatar">${escapeHtml(hqInitials(row.name))}</span>
                    <span class="hq-st-main">
                        <span class="hq-st-name">${escapeHtml(row.name)}</span>
                        <span class="hq-st-meta">${escapeHtml(row.code || "—")} · ${escapeHtml(lastText)}</span>
                        <span class="hq-st-bar"><i style="width:${row.accuracy}%"></i></span>
                    </span>
                    <span class="hq-st-right">
                        <b class="hq-status ${row.status}">${escapeHtml(rpgT(statusKey))}</b>
                        <span class="hq-st-acc">${row.attempted ? row.accuracy + "%" : "—"}</span>
                    </span>
                </button>`;
        }).join("");
        return `
            <section class="hq-section">
                <div class="hq-section-head">
                    <h3>${escapeHtml(rpgT("hqRoster"))}</h3>
                    <p>${data.students} ${escapeHtml(rpgT("hqPeopleShort"))} · ${escapeHtml(rpgT("hqTapHint"))}</p>
                </div>
                <div class="hq-roster" id="hq-roster">${cards}</div>
            </section>`;
    },

    bridgeHtml() {
        const total = this.allResults().length;
        const open = total ? "" : " open";
        return `
            <section class="hq-section hq-bridge">
                <details${open}>
                    <summary>📥 ${escapeHtml(rpgT("hqImportTitle"))}</summary>
                    <p class="hq-hint">${escapeHtml(rpgT("hqImportHint"))}</p>
                    <textarea id="hq-codes" rows="4" spellcheck="false" placeholder="R1-P1234-7K2QX9-L31-V-9-10-1840-261018-4M8T"></textarea>
                    <div class="hq-bridge-actions">
                        <button type="button" class="btn btn-primary" data-hq-action="import-codes">${escapeHtml(rpgT("hqImportBtn"))}</button>
                        <label class="btn btn-secondary hq-file-btn" for="hq-report-file">${escapeHtml(rpgT("hqImportFile"))}</label>
                        <input type="file" id="hq-report-file" accept="application/json,.json" hidden>
                        <button type="button" class="btn btn-secondary" data-hq-action="import-local">${escapeHtml(rpgT("hqImportLocal"))}</button>
                    </div>
                    <div class="hq-import-result" id="hq-import-result"></div>
                    <div class="hq-hint">${escapeHtml(rpgT("hqInBase", total))}</div>
                </details>
            </section>`;
    },

    exportsHtml() {
        return `
            <section class="hq-section hq-exports">
                <div class="hq-section-head">
                    <h3>${escapeHtml(rpgT("hqExports"))}</h3>
                    <p>${escapeHtml(rpgT("hqExportsHint"))}</p>
                </div>
                <div class="hq-export-actions">
                    <button type="button" class="btn btn-secondary" data-hq-action="csv" data-kind="results">${escapeHtml(rpgT("hqCsvResults"))}</button>
                    <button type="button" class="btn btn-secondary" data-hq-action="csv" data-kind="topics">${escapeHtml(rpgT("hqCsvTopics"))}</button>
                    <button type="button" class="btn btn-secondary" data-hq-action="csv" data-kind="activity">${escapeHtml(rpgT("hqCsvActivity"))}</button>
                    <button type="button" class="btn btn-secondary" data-hq-action="print">${escapeHtml(rpgT("hqPrint"))}</button>
                </div>
            </section>`;
    },

    onboardingHtml() {
        return `
            <section class="hq-section">
                <div class="hq-onboard">
                    <div class="hq-onboard-icon">👥</div>
                    <h3>${escapeHtml(rpgT("hqOnboardTitle"))}</h3>
                    <p>${escapeHtml(rpgT("hqOnboardText"))}</p>
                    <button type="button" class="btn btn-primary" data-hq-action="add-class">${escapeHtml(rpgT("hqAddClass"))}</button>
                </div>
            </section>`;
    },

    relativeDay(ts) {
        if (!ts) return rpgT("hqNever");
        const cal = Math.round((hqDayStart(ts) - hqDayStart(Date.now())) / RPG_HQ_DAY);
        if (cal === 0) return rpgT("hqToday");
        if (cal === -1) return rpgT("hqYesterday");
        if (cal < 0) return rpgT("hqDaysAgo", Math.abs(cal));
        return rpgT("hqToday");
    },

    /* ---------- СОБЫТИЯ ---------- */

    bindDelegates() {
        if (this.__bound) return;
        this.__bound = true;
        document.addEventListener("click", event => {
            const target = event.target.closest("[data-hq-action]");
            if (!target) return;
            const action = target.getAttribute("data-hq-action");
            try { this.handleAction(action, target, event); } catch (e) { console.warn("HQ action", e); }
        });
        document.addEventListener("change", event => {
            if (event.target && event.target.id === "hq-report-file") {
                const file = event.target.files && event.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                    try {
                        this.importReport(String(reader.result || ""));
                    } catch (e) {
                        this.lastImport = { added: 0, dup: 0, bad: 1, badList: [rpgT("hqBadFile")] };
                    }
                    this.render();
                };
                reader.readAsText(file);
                event.target.value = "";
            }
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && this.activeStudent) {
                this.closeStudent();
            }
        });
    },

    handleAction(action, target, event) {
        const key = target.getAttribute("data-key") || "";
        switch (action) {
            case "class":
                this.setView({ classId: target.getAttribute("data-class") || "all" });
                break;
            case "period":
                this.setView({ days: Number(target.getAttribute("data-days")) });
                break;
            case "add-class": {
                Teacher.switchTab("assignments");
                const input = document.getElementById("class-name");
                if (input) {
                    input.focus();
                    input.scrollIntoView({ block: "center", behavior: "smooth" });
                }
                break;
            }
            case "student":
                this.openStudent(key);
                break;
            case "close-student":
                this.closeStudent();
                break;
            case "remind":
                this.openReminder(key);
                break;
            case "topic":
                this.openTopicSheet(key);
                break;
            case "idle": {
                const roster = document.getElementById("hq-roster");
                if (roster) {
                    roster.scrollIntoView({ block: "start", behavior: "smooth" });
                    roster.classList.add("hq-flash");
                    setTimeout(() => roster.classList.remove("hq-flash"), 1400);
                }
                break;
            }
            case "open-batch":
                this.openReminder(key);
                break;
            case "assign-more": {
                const batch = this.batches(this.view().classId).find(b => b.key === key);
                Teacher.switchTab("assignments");
                if (batch) {
                    const select = document.getElementById("class-assignment-level");
                    if (select) select.value = String(batch.levelId);
                    const cls = document.getElementById("assignment-class");
                    if (cls && batch.classId) cls.value = batch.classId;
                    const block = document.querySelector(".class-bulk-form");
                    if (block) block.scrollIntoView({ block: "center", behavior: "smooth" });
                }
                break;
            }
            case "assign-again":
                this.assignAgain(this.activeStudent);
                break;
            case "assign-topic":
                this.assignTopic(key);
                break;
            case "import-codes": {
                const area = document.getElementById("hq-codes");
                this.importCodes(area ? area.value : "");
                if (area) area.value = "";
                this.render();
                break;
            }
            case "import-local":
                this.importLocalHistory();
                this.render();
                break;
            case "copy":
                hqCopy(target.getAttribute("data-copy") || "");
                this.flash(target, rpgT("hqCopied"));
                break;
            case "csv":
                this.exportCsv(target.getAttribute("data-kind") || "results");
                break;
            case "print":
                this.printSummary();
                break;
            case "save-comment":
                this.saveComment();
                break;
            case "copy-review":
                this.copyReview();
                break;
            case "copy-code":
                hqCopy(target.getAttribute("data-copy") || "");
                this.flash(target, rpgT("hqCopied"));
                break;
            case "close-reminder": {
                const modal = document.getElementById("hq-remind-modal");
                if (modal) modal.remove();
                break;
            }
            case "copy-remind": {
                const area = document.getElementById("hq-remind-text");
                hqCopy(area ? area.value : "");
                this.flash(target, rpgT("hqCopied"));
                break;
            }
            default:
                break;
        }
        return false;
    },

    flash(element, text) {
        if (!element) return;
        const old = element.getAttribute("data-old-label");
        if (!old) element.setAttribute("data-old-label", element.textContent);
        element.textContent = text;
        setTimeout(() => {
            const back = element.getAttribute("data-old-label");
            if (back) element.textContent = back;
        }, 1200);
    },

    showImportSummary() {
        const box = document.getElementById("hq-import-result");
        if (!box) return;
        const info = this.lastImport || { added: 0, dup: 0, bad: 0, badList: [] };
        const parts = [rpgT("hqImportDone", info.added || 0, info.dup || 0, info.bad || 0)];
        if (info.badList && info.badList.length) {
            parts.push(rpgT("hqImportBad", info.badList.slice(0, 3).join(", ")));
        }
        box.innerHTML = `<div class="hq-import-line ${info.added ? "ok" : "warn"}">${escapeHtml(parts.join(" · "))}</div>`;
    },

    /* ---------- КАРТОЧКА УЧЕНИКА (E4) ---------- */

    findRosterRow(key) {
        const rows = this.roster(this.view().classId);
        return rows.find(r => r.key === key) || null;
    },

    openStudent(key) {
        const row = this.findRosterRow(key);
        if (!row) return;
        this.activeStudent = row;
        const body = document.getElementById("hq-student-body");
        const modal = document.getElementById("hq-student-modal");
        if (!body || !modal) return;

        const comments = this.getComments();
        const comment = comments[row.key] || { text: "" };
        const weak = this.weakTopics([row], 1).filter(t => t.accuracy < 60);
        const topics = weak.length
            ? weak.map(t => `
                <div class="hq-topic-row">
                    <span>${escapeHtml(t.label)}</span>
                    <span class="hq-topic-bar"><i style="width:${t.accuracy}%"></i></span>
                    <b>${t.accuracy}%</b>
                    <button type="button" class="hq-mini-btn ghost" data-hq-action="assign-topic" data-key="${escapeHtml(t.levelId == null ? "" : String(t.levelId))}">${escapeHtml(rpgT("hqAssign"))}</button>
                </div>`).join("")
            : `<div class="hq-empty-mini">${escapeHtml(rpgT("hqNoWeak"))}</div>`;

        const assignmentRows = row.assignments.length
            ? row.assignments.map(item => {
                const a = item.assignment;
                const label = item.status === "done" ? rpgT("hqDone")
                    : item.status === "overdue" ? rpgT("hqOverdue")
                        : item.status === "started" ? rpgT("hqStarted") : rpgT("hqPending");
                // Показываем результат последней попытки (в том числе неудачной).
                const attempt = item.result ? ` · ${hqNum(item.result.score)} · ${Math.round(Number(item.result.accuracy) || 0)}%` : "";
                return `
                    <div class="hq-assign-row">
                        <span class="hq-assign-level">${escapeHtml(this.levelLabel(a.levelId))}</span>
                        <span class="hq-status ${item.status}">${escapeHtml(label)}${attempt}</span>
                        <span class="hq-assign-due">${a.dueAt ? escapeHtml(rpgDueLabel(a.dueAt)) : ""}</span>
                    </div>`;
            }).join("")
            : `<div class="hq-empty-mini">${escapeHtml(rpgT("hqNoAssignments"))}</div>`;

        const historyRows = row.results.map(r => `
            <tr>
                <td>${escapeHtml(this.shortDate(r.date))}</td>
                <td>${escapeHtml(this.shortLevel(r))}</td>
                <td>${r.victory ? "✅" : "—"}</td>
                <td>${hqNum(r.score)}</td>
                <td>${hqNum(r.accuracy)}%</td>
            </tr>`).join("");

        body.innerHTML = `
            <div class="hq-sc-head">
                <span class="hq-avatar big">${escapeHtml(hqInitials(row.name))}</span>
                <div>
                    <h2 id="hq-student-title">${escapeHtml(row.name)}</h2>
                    <p>${escapeHtml(row.className)} · ${escapeHtml(rpgT("hqCode"))}: ${escapeHtml(row.code || "—")}</p>
                </div>
            </div>
            <div class="hq-sc-kpis">
                <div><b>${row.lastAt ? escapeHtml(this.relativeDay(row.lastAt)) : "—"}</b><span>${escapeHtml(rpgT("hqLastActivity"))}</span></div>
                <div><b>${row.week.attempts ? row.week.accuracy + "%" : "—"}</b><span>${escapeHtml(rpgT("hqAccuracy7"))}</span></div>
                <div><b>${row.month.attempts ? row.month.accuracy + "%" : "—"}</b><span>${escapeHtml(rpgT("hqAccuracy30"))}</span></div>
                <div><b>${row.missions}</b><span>${escapeHtml(rpgT("hqMissions"))}</span></div>
            </div>
            <div class="hq-sc-block">
                <h4>${escapeHtml(rpgT("hqChartTitle"))}</h4>
                ${this.sparkHtml(row.results.slice(0, 12))}
            </div>
            <div class="hq-sc-block">
                <h4>${escapeHtml(rpgT("hqWeakTopics"))}</h4>
                <div class="hq-topics">${topics}</div>
            </div>
            <div class="hq-sc-block">
                <h4>${escapeHtml(rpgT("hqStudentAssignments"))}</h4>
                <div class="hq-assigns">${assignmentRows}</div>
            </div>
            <div class="hq-sc-block">
                <h4>${escapeHtml(rpgT("hqHistory"))}</h4>
                ${historyRows ? `<div class="hq-history-wrap"><table class="hq-table"><thead><tr>
                    <th>${escapeHtml(rpgT("hqDate"))}</th>
                    <th>${escapeHtml(rpgT("hqLevel"))}</th>
                    <th>${escapeHtml(rpgT("hqWin"))}</th>
                    <th>${escapeHtml(rpgT("hqScore"))}</th>
                    <th>${escapeHtml(rpgT("hqAccuracyShort"))}</th>
                </tr></thead><tbody>${historyRows}</tbody></table></div>` : `<div class="hq-empty-mini">${escapeHtml(rpgT("hqNoHistory"))}</div>`}
            </div>
            <div class="hq-sc-block">
                <h4>${escapeHtml(rpgT("hqComment"))}</h4>
                <textarea id="hq-comment" rows="3" maxlength="400" placeholder="${escapeHtml(rpgT("hqCommentPlaceholder"))}">${escapeHtml(comment.text || "")}</textarea>
                <p class="hq-hint">${escapeHtml(rpgT("hqCommentHint"))}</p>
                <div class="hq-sc-actions">
                    <button type="button" class="btn btn-primary" data-hq-action="save-comment">${escapeHtml(rpgT("hqCommentSave"))}</button>
                    <button type="button" class="btn btn-secondary" data-hq-action="copy-review">${escapeHtml(rpgT("hqCopyReview"))}</button>
                </div>
            </div>
            <div class="hq-sc-actions main">
                <button type="button" class="btn btn-primary" data-hq-action="assign-again">${escapeHtml(rpgT("hqAssignAgain"))}</button>
                <button type="button" class="btn btn-secondary" data-hq-action="copy-code" data-copy="${escapeHtml((row.results[0] || {}).code || "")}">${escapeHtml(rpgT("hqCopyCode"))}</button>
            </div>`;
        modal.hidden = false;
        document.body.classList.add("hq-modal-open");
    },

    closeStudent() {
        const modal = document.getElementById("hq-student-modal");
        if (modal) modal.hidden = true;
        document.body.classList.remove("hq-modal-open");
        this.activeStudent = null;
    },

    sparkHtml(results) {
        if (!results.length) return `<div class="hq-empty-mini">${escapeHtml(rpgT("hqNoHistory"))}</div>`;
        const list = results.slice().reverse();
        return `<div class="hq-spark">${list.map(r => {
            const height = Math.max(8, Math.min(100, hqNum(r.accuracy)));
            return `<i class="${r.victory ? "win" : "loss"}" style="height:${height}%" title="${escapeHtml(this.shortDate(r.date) + " · " + hqNum(r.accuracy) + "%")}"></i>`;
        }).join("")}</div>`;
    },

    shortDate(iso) {
        const d = new Date(iso);
        if (isNaN(d.getTime())) return "—";
        return String(d.getDate()).padStart(2, "0") + "." + String(d.getMonth() + 1).padStart(2, "0");
    },

    shortLevel(result) {
        const label = this.levelLabel(result.levelId);
        return label.length > 26 ? label.slice(0, 24) + "…" : label;
    },

    getComments() {
        const saved = Storage.load(RPG_HQ_KEYS.COMMENTS, {});
        return saved && typeof saved === "object" ? saved : {};
    },

    saveComment() {
        if (!this.activeStudent) return;
        const area = document.getElementById("hq-comment");
        const comments = this.getComments();
        comments[this.activeStudent.key] = {
            text: String(area ? area.value : "").trim().slice(0, 400),
            updatedAt: new Date().toISOString()
        };
        Storage.save(RPG_HQ_KEYS.COMMENTS, comments);
        try { RPG.toast("💬", rpgT("hqCommentSaved"), "", "tier-gold"); } catch (e) {}
    },

    copyReview() {
        const row = this.activeStudent;
        if (!row) return;
        const comments = this.getComments();
        const text = (comments[row.key] || {}).text || "";
        if (!text) {
            try { RPG.toast("💬", rpgT("hqCommentEmpty"), "", "warning"); } catch (e) {}
            return;
        }
        const header = `${rpgT("hqCommentFor")} ${row.name} (${row.className})`;
        hqCopy(header + "\n" + text);
        try { RPG.toast("📋", rpgT("hqCopied"), "", "tier-gold"); } catch (e) {}
    },

    assignAgain(row) {
        if (!row) return;
        this.closeStudent();
        Teacher.switchTab("assignments");
        const name = document.getElementById("assignment-student-name");
        const code = document.getElementById("assignment-player-id");
        if (name) name.value = row.name;
        if (code) code.value = row.code || "";
        const weak = this.weakTopics([row], 1)[0];
        const select = document.getElementById("assignment-level");
        if (weak && weak.levelId != null && select) select.value = String(weak.levelId);
        const form = document.querySelector(".assignment-form");
        if (form) form.scrollIntoView({ block: "center", behavior: "smooth" });
    },

    assignTopic(levelId) {
        const raw = String(levelId || "");
        this.closeStudent();
        Teacher.switchTab("assignments");
        const select = document.getElementById("assignment-level");
        if (select && raw) {
            const token = this.levelToken(raw);
            const option = Array.from(select.options).find(o => this.levelToken(o.value) === token);
            if (option) select.value = option.value;
        }
        const form = document.querySelector(".assignment-form");
        if (form) form.scrollIntoView({ block: "center", behavior: "smooth" });
    },

    /* ---------- НАПОМИНАНИЕ И ТЕМА ---------- */

    batchByKey(key) {
        const batches = this.batches(this.view().classId);
        return batches.find(b => b.key === key) || this.batches("all").find(b => b.key === key) || null;
    },

    reminderText(batch) {
        if (!batch) return "";
        const lines = [];
        lines.push(`${this.levelLabel(batch.levelId)}${batch.className ? " — " + batch.className : ""}`);
        if (batch.code) lines.push(`${rpgT("hqAssignCode")}: ${batch.code}`);
        if (batch.dueAt) lines.push(`${rpgT("hqDueWord")}: ${rpgDueShort(batch.dueAt)} (${rpgDueLabel(batch.dueAt)})`);
        const all = this.allResults();
        const missing = [];
        batch.rows.forEach(a => {
            const own = all.filter(r => {
                if (a.studentCode && r.studentCode && String(r.studentCode).toUpperCase() === String(a.studentCode).toUpperCase()) return true;
                if (a.studentName && r.nameHash && r.nameHash === hqNameHash(a.studentName)) return true;
                return false;
            });
            const st = this.assignmentStatus(a, own);
            if (st.status !== "done") missing.push(a.studentName || a.studentCode || "—");
        });
        if (missing.length) lines.push(`${rpgT("hqNotDone")} (${missing.length}): ${missing.join(", ")}`);
        lines.push("");
        lines.push(rpgT("hqHowToOpen"));
        return lines.join("\n");
    },

    openReminder(key) {
        const batch = this.batchByKey(key);
        if (!batch) return;
        const old = document.getElementById("hq-remind-modal");
        if (old) old.remove();
        const modal = document.createElement("div");
        modal.className = "hq-modal";
        modal.id = "hq-remind-modal";
        modal.innerHTML = `
            <div class="hq-sheet narrow" role="dialog" aria-modal="true">
                <button type="button" class="hq-sheet-x" data-hq-action="close-reminder" aria-label="${escapeHtml(rpgT("hqClose"))}">×</button>
                <h2>${escapeHtml(rpgT("hqRemindTitle"))}</h2>
                <p class="hq-hint">${escapeHtml(rpgT("hqRemindHint"))}</p>
                <textarea id="hq-remind-text" rows="7" readonly>${escapeHtml(this.reminderText(batch))}</textarea>
                <div class="hq-sc-actions">
                    <button type="button" class="btn btn-primary" data-hq-action="copy-remind">${escapeHtml(rpgT("hqCopy"))}</button>
                    <button type="button" class="btn btn-secondary" data-hq-action="close-reminder">${escapeHtml(rpgT("hqClose"))}</button>
                </div>
            </div>`;
        document.body.appendChild(modal);
    },

    openTopicSheet(token) {
        const rows = this.roster(this.view().classId)
            .map(row => {
                const list = row.results.filter(r => (r.levelToken || "?") === token);
                const s = list.reduce((sum, r) => sum + hqNum(r.solved), 0);
                const a = list.reduce((sum, r) => sum + hqNum(r.attempted), 0);
                return { row, solved: s, attempted: a, accuracy: hqPct(s, a) };
            })
            .filter(item => item.attempted > 0)
            .sort((x, y) => x.accuracy - y.accuracy);
        const sample = rows[0];
        const label = sample ? this.topicLabel((sample.row.results.find(r => r.levelToken === token) || {}).levelId) : token;
        const levelId = sample ? (sample.row.results.find(r => r.levelToken === token) || {}).levelId : "";
        const old = document.getElementById("hq-remind-modal");
        if (old) old.remove();
        const modal = document.createElement("div");
        modal.className = "hq-modal";
        modal.id = "hq-remind-modal";
        modal.innerHTML = `
            <div class="hq-sheet narrow" role="dialog" aria-modal="true">
                <button type="button" class="hq-sheet-x" data-hq-action="close-reminder" aria-label="${escapeHtml(rpgT("hqClose"))}">×</button>
                <h2>${escapeHtml(label)}</h2>
                <p class="hq-hint">${escapeHtml(rpgT("hqTopicHint"))}</p>
                <div class="hq-topics">
                    ${rows.map(item => `
                        <div class="hq-topic-row">
                            <span>${escapeHtml(item.row.name)}</span>
                            <span class="hq-topic-bar"><i style="width:${item.accuracy}%"></i></span>
                            <b>${item.accuracy}%</b>
                            <small>${item.attempted}</small>
                        </div>`).join("") || `<div class="hq-empty-mini">${escapeHtml(rpgT("hqNoData"))}</div>`}
                </div>
                <div class="hq-sc-actions">
                    <button type="button" class="btn btn-primary" data-hq-action="assign-topic" data-key="${escapeHtml(levelId == null ? "" : String(levelId))}">${escapeHtml(rpgT("hqAssignTopic"))}</button>
                    <button type="button" class="btn btn-secondary" data-hq-action="close-reminder">${escapeHtml(rpgT("hqClose"))}</button>
                </div>
            </div>`;
        document.body.appendChild(modal);
    },

    /* ---------- ОТЧЁТЫ (E5) ---------- */

    csvEscape(value) {
        const text = String(value == null ? "" : value);
        return `"${text.replace(/"/g, '""')}"`;
    },

    toCsv(rows) {
        return "\ufeff" + rows.map(row => row.map(cell => this.csvEscape(cell)).join(";")).join("\r\n");
    },

    buildCsv(kind) {
        const view = this.view();
        const data = this.summary(view.classId, view.days);
        if (kind === "results") {
            const rows = [[
                rpgT("hqCsvDate"), rpgT("hqCsvClass"), rpgT("hqCsvStudent"), rpgT("hqCsvCode"),
                rpgT("hqCsvLevel"), rpgT("hqCsvScore"), rpgT("hqCsvAccuracy"), rpgT("hqCsvSolved"),
                rpgT("hqCsvAttempts"), rpgT("hqCsvStatus")
            ]];
            data.roster.forEach(student => {
                const list = this.inPeriod(student.results, view.days);
                if (!list.length) return;
                list.forEach(r => {
                    rows.push([
                        this.shortDate(r.date) + "." + new Date(r.date).getFullYear(),
                        student.className,
                        student.name,
                        student.code,
                        this.levelLabel(r.levelId),
                        hqNum(r.score),
                        hqNum(r.accuracy) + "%",
                        hqNum(r.solved),
                        hqNum(r.attempted),
                        r.victory ? rpgT("hqDone") : "—"
                    ]);
                });
            });
            return this.toCsv(rows);
        }
        if (kind === "topics") {
            const rows = [[rpgT("hqCsvClass"), rpgT("hqCsvTopic"), rpgT("hqCsvAnswers"), rpgT("hqCsvCorrect"), rpgT("hqCsvAccuracy")]];
            const classes = this.scopeClasses(view.classId);
            classes.forEach(cls => {
                const roster = this.roster(cls.id);
                this.weakTopics(roster, 1).forEach(topic => {
                    rows.push([cls.name, topic.label, topic.attempted, topic.solved, topic.accuracy + "%"]);
                });
            });
            return this.toCsv(rows);
        }
        const rows = [[
            rpgT("hqCsvClass"), rpgT("hqCsvStudent"), rpgT("hqCsvCode"), rpgT("hqCsvLastSeen"),
            rpgT("hqCsvDaysAgo"), rpgT("hqCsvMissions"), rpgT("hqCsvAccuracy")
        ]];
        data.roster.forEach(student => {
            const days = student.lastAt ? Math.max(0, Math.round((hqDayStart(Date.now()) - hqDayStart(student.lastAt)) / RPG_HQ_DAY)) : "";
            rows.push([
                student.className, student.name, student.code,
                student.lastAt ? this.shortDate(student.lastAt) + "." + new Date(student.lastAt).getFullYear() : "",
                days, student.missions, student.attempted ? student.accuracy + "%" : ""
            ]);
        });
        return this.toCsv(rows);
    },

    exportCsv(kind) {
        const csv = this.buildCsv(kind);
        const view = this.view();
        const cls = view.classId === "all" ? "all" : (this.classById(view.classId) || {}).name || "class";
        const name = `physics-quest-${kind}-${String(cls).replace(/\s+/g, "")}-${hqFileDate()}.csv`;
        hqDownload(name, csv, "text/csv;charset=utf-8");
        try { RPG.toast("📄", rpgT("hqCsvReady"), name, "tier-gold"); } catch (e) {}
        return csv;
    },

    buildPrintSheet() {
        const view = this.view();
        const data = this.summary(view.classId, view.days);
        const clsName = view.classId === "all" ? rpgT("hqAllClasses") : (this.classById(view.classId) || {}).name || "";
        const weak = this.weakTopics(data.roster, 3).filter(t => t.accuracy < 70).slice(0, 6);
        const debtors = data.roster.filter(r => r.overdueCount > 0 || (r.assignments.some(a => a.status === "pending") && r.lastAt < Date.now() - 7 * RPG_HQ_DAY));
        const solved = data.results.reduce((sum, r) => sum + hqNum(r.solved), 0);
        const attempted = data.results.reduce((sum, r) => sum + hqNum(r.attempted), 0);
        const lines = [];
        lines.push(`<h1>${escapeHtml(rpgT("hqPrintTitle"))}</h1>`);
        lines.push(`<p class="meta">${escapeHtml(rpgT("hqPrintMeta", clsName, this.periodLabel(view.days), this.todayText()))}</p>`);
        lines.push(`<div class="grid">
            <div><b>${data.students}</b><span>${escapeHtml(rpgT("hqKpiStudents"))}</span></div>
            <div><b>${data.assignments}</b><span>${escapeHtml(rpgT("hqKpiAssignments"))}</span></div>
            <div><b>${data.doneStudents}/${data.students}</b><span>${escapeHtml(rpgT("hqKpiDone"))}</span></div>
            <div><b>${attempted ? hqPct(solved, attempted) + "%" : "—"}</b><span>${escapeHtml(rpgT("hqPrintAvg"))}</span></div>
        </div>`);
        lines.push(`<h2>${escapeHtml(rpgT("hqPrintProblemTopics"))}</h2>`);
        lines.push(weak.length
            ? `<ul>${weak.map(t => `<li>${escapeHtml(t.label)} — <b>${t.accuracy}%</b> (${t.attempted} ${escapeHtml(rpgT("hqAnswersShort"))})</li>`).join("")}</ul>`
            : `<p>${escapeHtml(rpgT("hqNoWeak"))}</p>`);
        lines.push(`<h2>${escapeHtml(rpgT("hqPrintDebtors"))}</h2>`);
        lines.push(debtors.length
            ? `<table><tr><th>${escapeHtml(rpgT("hqCsvStudent"))}</th><th>${escapeHtml(rpgT("hqCsvClass"))}</th><th>${escapeHtml(rpgT("hqCsvStatus"))}</th></tr>
                ${debtors.map(r => `<tr><td>${escapeHtml(r.name)}</td><td>${escapeHtml(r.className)}</td><td>${escapeHtml(this.relativeDay(r.lastAt))}</td></tr>`).join("")}
               </table>`
            : `<p>${escapeHtml(rpgT("hqPrintNoDebtors"))}</p>`);
        lines.push(`<p class="foot">${escapeHtml(rpgT("hqPrintFoot"))}</p>`);
        return lines.join("");
    },

    todayText() {
        const d = new Date();
        return String(d.getDate()).padStart(2, "0") + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + d.getFullYear();
    },

    printSummary() {
        let sheet = document.getElementById("hq-print-sheet");
        if (!sheet) {
            sheet = document.createElement("div");
            sheet.id = "hq-print-sheet";
            sheet.className = "hq-print-sheet";
            document.body.appendChild(sheet);
        }
        sheet.innerHTML = this.buildPrintSheet();
        try {
            window.print();
        } catch (e) {
            console.warn("print failed", e);
            try { RPG.toast("🖨", rpgT("hqPrintFail"), "", "warning"); } catch (err) {}
        }
        return sheet.innerHTML;
    },

    /* ---------- КОД РЕЗУЛЬТАТА НА ЭКРАНЕ ИТОГОВ (E2) ---------- */

    attachResultCode(victory, summary) {
        const container = document.querySelector(victory ? ".victory-content" : ".gameover-content");
        if (!container || !summary) return;
        const old = container.querySelector(".hq-result-code");
        if (old) old.remove();
        let settings = {};
        try { settings = Storage.getSettings() || {}; } catch (e) {}
        const history = Storage.getHistory() || [];
        const activeAssignmentCode = Storage.normalizeAssignmentCode(Game.activeAssignmentCode || "");
        const run = history.slice().reverse().find(row =>
            String(row.level !== undefined ? row.level : row.levelId) === String(summary.levelId)
            && !!row.victory === !!victory
            && Math.round(hqNum(row.score)) === Math.round(hqNum(summary.score))
            && Math.round(hqNum(row.tasksSolved)) === Math.round(hqNum(summary.solved))
            && Math.round(hqNum(row.tasksAttempted)) === Math.round(hqNum(summary.attempted))
            && (!activeAssignmentCode || Storage.normalizeAssignmentCode(row.assignmentCode) === activeAssignmentCode)
        );
        const canonicalLevelId = typeof parseLevelRef === "function"
            ? parseLevelRef(summary.levelId, (run && run.grade) || Storage.grade()).canonical
            : summary.levelId;
        const entry = {
            studentCode: (run && run.playerCode) || settings.playerCode || "",
            name: (run && run.name) || settings.playerName || "",
            levelId: canonicalLevelId,
            levelToken: this.levelToken(canonicalLevelId),
            victory: !!victory,
            solved: summary.solved,
            attempted: summary.attempted,
            score: summary.score,
            date: (run && run.date) || new Date().toISOString(),
            runId: run && run.id || "",
            assignmentCode: (run && run.assignmentCode) || activeAssignmentCode || ""
        };
        let code = "";
        try { code = this.buildCode(entry); } catch (e) { return; }
        entry.code = code;
        this.addResults([entry]);
        const block = document.createElement("div");
        block.className = "hq-result-code";
        block.innerHTML = `
            <div class="hq-rc-head">📤 ${escapeHtml(rpgT("hqResultCode"))}</div>
            <div class="hq-rc-code" id="hq-rc-value">${escapeHtml(code)}</div>
            <p class="hq-rc-hint">${escapeHtml(rpgT("hqResultHint"))}</p>
            <div class="hq-rc-actions">
                <button type="button" class="btn btn-secondary" data-hq-action="copy-code" data-copy="${escapeHtml(code)}">${escapeHtml(rpgT("hqCopyCode"))}</button>
                <button type="button" class="btn btn-secondary" data-hq-action="student-report">${escapeHtml(rpgT("hqReportBtn"))}</button>
            </div>`;
        const buttons = container.querySelector(victory ? ".victory-buttons" : ".gameover-buttons");
        if (buttons) container.insertBefore(block, buttons);
        else container.appendChild(block);
    }
};

/* Кнопка «Отчёт для учителя» на экране итогов */
document.addEventListener("click", event => {
    const target = event.target.closest('[data-hq-action="student-report"]');
    if (!target) return;
    try { TeacherHQ.exportStudentReport(); } catch (e) { console.warn("HQ report", e); }
});

/* ---------------- УСТАНОВКА ---------------- */
(function bootTeacherHQ() {
    if (typeof RPG === "undefined" || !RPG || typeof RPG.boot !== "function") return;
    const origBoot = RPG.boot;
    RPG.boot = function () {
        const result = origBoot.apply(this, arguments);
        try { TeacherHQ.install(); } catch (e) { console.error("HQ install failed", e); }
        return result;
    };
    window.TeacherHQ = TeacherHQ;
})();
