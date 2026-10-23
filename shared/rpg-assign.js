/* ============================================================
   ASSIGNMENTS 2.0 (E6)
   Мастер назначений (класс → уровень → срок → проверка),
   фильтры и поиск, прогресс по ученикам, QR-код и ссылка,
   дублирование / продление / архив / удаление,
   приём назначения по ссылке #a=… и результата по #res=…
   ============================================================ */

const RPG_AS = {
    URL: "physicsquest_unified_game_url",
    SEEN: "physicsquest_unified_assignment_seen"
};

const AS_STATUSES = ["pending", "started", "done", "overdue"];
const AS_ARCHIVE_FLAG = "archivedAt";

/* ---------- утилиты ---------- */

function asEscape(value) {
    return escapeHtml(value == null ? "" : String(value));
}

/** Безопасное значение для атрибута (escapeHtml не экранирует кавычки). */
function asAttr(value) {
    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function asLevelLabel(levelId) {
    try { return TeacherHQ.levelLabel(levelId); } catch (e) { return String(levelId); }
}

function asDayStart(ts) {
    const d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}

function asDueIso(dateValue) {
    if (!dateValue) return "";
    const parts = String(dateValue).split("-");
    if (parts.length !== 3) return "";
    const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), 23, 59, 0, 0);
    return isNaN(d.getTime()) ? "" : d.toISOString();
}

function asDueInput(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function asAddDays(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function asLevelOptions(gradeFilter = "all") {
    const out = [];
    const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    const cat = window.GRADE_CATALOG || {};
    const grades = gradeFilter === "7" || gradeFilter === 7 ? [7]
        : gradeFilter === "8" || gradeFilter === 8 ? [8]
        : gradeFilter === "9" || gradeFilter === 9 ? [9]
        : [7, 8, 9];
    grades.forEach(g => {
        const gCat = cat[g];
        if (!gCat || !Array.isArray(gCat.levels)) return;
        const gPref = catalogGradePrefix(g);
        gCat.levels.forEach(lvl => {
            const nm = (lvl.name && (lvl.name[L] || lvl.name.ru)) || ("§" + lvl.id);
            out.push({
                grade: g,
                value: `g${g}:${lvl.id}`,
                label: `[${gPref}] #${lvl.id} · ${nm}`,
                name: nm
            });
        });
    });
    (Storage.getCustomLessons(true) || []).forEach(lesson => {
        const lg = Number(lesson.grade || 8);
        if (gradeFilter !== "all" && Number(gradeFilter) !== lg) return;
        let name = "";
        try { name = I18n.getLocalized(lesson, "name"); } catch (e) { name = (lesson.name && lesson.name.ru) || "—"; }
        out.push({
            grade: lg,
            value: "custom:" + lesson.id,
            label: `[${catalogGradePrefix(lg)}] 📝 ${name}`,
            name
        });
    });
    return out;
}

/* ============================================================
   МОДУЛЬ
   ============================================================ */

const AssignHQ = {
    filters: { search: "", classId: "all", status: "all", archive: false, sort: "due" },
    expanded: {},
    wizard: null,
    quickLink: null,

    /* ---------- УСТАНОВКА ---------- */

    install() {
        this.buildShell();
        this.buildModals();
        this.bind();
        this.wrapTeacher();
        this.refresh();
        // Хеш разбираем только после загрузочного экрана, иначе boot вернёт меню.
        this.waitBoot(0);
        window.addEventListener("hashchange", () => {
            try { this.handleHash(); } catch (e) { console.warn("AS hash", e); }
        });
    },

    waitBoot(attempt) {
        const loading = document.getElementById("loading-screen");
        if (loading && loading.classList.contains("active") && attempt < 40) {
            setTimeout(() => this.waitBoot(attempt + 1), 250);
            return;
        }
        try { this.handleHash(); } catch (e) { console.warn("AS hash", e); }
    },

    buildShell() {
        const tab = document.getElementById("tab-assignments");
        if (!tab || tab.querySelector(".as-shell")) return;

        const legacy = document.createElement("details");
        legacy.className = "as-legacy";
        const summary = document.createElement("summary");
        summary.textContent = rpgT("asLegacy");
        legacy.appendChild(summary);
        const body = document.createElement("div");
        body.className = "as-legacy-body";
        while (tab.firstChild) body.appendChild(tab.firstChild);
        legacy.appendChild(body);

        const shell = document.createElement("div");
        shell.className = "as-shell";
        shell.innerHTML = `
            <div class="as-toolbar">
                <button type="button" class="btn btn-primary" data-as-action="quick-link">${escapeHtml(rpgT("asQuickLink"))}</button>
                <button type="button" class="btn btn-secondary" data-as-action="wizard">${escapeHtml(rpgT("asNew"))}</button>
                <button type="button" class="btn btn-secondary" data-as-action="new-class">${escapeHtml(rpgT("asNewClass"))}</button>
                <button type="button" class="btn btn-secondary" data-as-action="transfer">${escapeHtml(rpgT("asTransfer"))}</button>
            </div>
            <div class="as-filters">
                <input type="search" id="as-search" placeholder="${escapeHtml(rpgT("asSearch"))}" autocomplete="off">
                <select id="as-class-filter"></select>
                <div class="as-chips" id="as-status-chips"></div>
                <label class="as-archive"><input type="checkbox" id="as-archive"> <span>${escapeHtml(rpgT("asArchived"))}</span></label>
            </div>
            <div class="as-list" id="as-list"></div>
            <div class="as-classes-block">
                <div class="as-block-head">
                    <h3>${escapeHtml(rpgT("asClasses"))}</h3>
                    <button type="button" class="as-link-btn" data-as-action="new-class">${escapeHtml(rpgT("asNewClass"))}</button>
                </div>
                <div class="as-classes" id="as-classes"></div>
            </div>`;
        tab.appendChild(shell);
        tab.appendChild(legacy);
    },

    buildModals() {
        if (document.getElementById("as-modal")) return;
        const modal = document.createElement("div");
        modal.className = "as-modal";
        modal.id = "as-modal";
        modal.hidden = true;
        modal.innerHTML = `<div class="as-sheet"><button type="button" class="as-x" data-as-action="close" aria-label="${escapeHtml(rpgT("asClose"))}">×</button><div id="as-modal-body"></div></div>`;
        document.body.appendChild(modal);

    },

    bind() {
        if (this.__bound) return;
        this.__bound = true;

        document.addEventListener("click", event => {
            const target = event.target.closest("[data-as-action]");
            if (!target) return;
            try { this.action(target.getAttribute("data-as-action"), target, event); } catch (e) { console.warn("AS action", e); }
        });

        document.addEventListener("input", event => {
            const t = event.target;
            if (!t || !t.id) return;
            if (t.id === "as-search") {
                this.filters.search = t.value;
                this.renderList();
                return;
            }
            if (!this.wizard) return;
            if (t.id === "as-wiz-name") { this.wizard.name = t.value; return; }
            if (t.id === "as-wiz-code") { this.wizard.code = t.value; return; }
            if (t.id === "as-wiz-note") { this.wizard.note = t.value; return; }
            if (this.quickLink && t.id === "as-quick-note") { this.quickLink.note = t.value; return; }
            if (t.id === "as-wiz-search") {
                this.wizard.search = t.value;
                this.renderLevelList();
            }
        });

        document.addEventListener("change", event => {
            const t = event.target;
            if (!t) return;
            if (t.id === "as-class-filter") { this.filters.classId = t.value; this.renderList(); }
            if (t.id === "as-archive") { this.filters.archive = !!t.checked; this.renderList(); }
            if (t.id === "as-wiz-due" && this.wizard) {
                this.wizard.due = String(t.value || "");
                this.renderWizard();
            }
            if (t.id === "as-quick-class" && this.quickLink) this.quickLink.classId = t.value;
            if (t.id === "as-quick-level" && this.quickLink) this.quickLink.levelId = t.value;
            if (t.id === "as-quick-due" && this.quickLink) this.quickLink.due = String(t.value || "");
            if (t.id === "as-file") {
                const file = t.files && t.files[0];
                if (file) {
                    try { Teacher.importAssignments({ target: t }); } catch (e) { console.warn(e); }
                    setTimeout(() => this.refresh(), 600);
                }
                t.value = "";
            }
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && !document.getElementById("as-modal").hidden) this.close();
        });
    },

    wrapTeacher() {
        if (typeof Teacher === "undefined" || Teacher.__asWrapped) return;
        Teacher.__asWrapped = true;
        const orig = Teacher.switchTab;
        Teacher.switchTab = function (tabName) {
            const result = orig.apply(this, arguments);
            try {
                if (tabName === "assignments") AssignHQ.refresh();
            } catch (e) { console.warn("AS switchTab", e); }
            return result;
        };
        const origLang = I18n.setLanguage;
        I18n.__asWrapped = true;
        I18n.setLanguage = function () {
            const result = origLang.apply(this, arguments);
            try { AssignHQ.relabel(); } catch (e) {}
            return result;
        };
    },

    relabel() {
        const tab = document.querySelector("#tab-assignments .as-shell");
        if (!tab) return;
        const shell = tab;
        const quickLink = shell.querySelector('[data-as-action="quick-link"]');
        if (quickLink) quickLink.textContent = rpgT("asQuickLink");
        const wizard = shell.querySelector('[data-as-action="wizard"]');
        if (wizard) wizard.textContent = rpgT("asNew");
        shell.querySelectorAll('[data-as-action="new-class"]').forEach(el => { el.textContent = rpgT("asNewClass"); });
        const transfer = shell.querySelector('[data-as-action="transfer"]');
        if (transfer) transfer.textContent = rpgT("asTransfer");
        const search = document.getElementById("as-search");
        if (search) search.placeholder = rpgT("asSearch");
        const arch = shell.querySelector("#as-archive + span");
        if (arch) arch.textContent = rpgT("asArchived");
        const legacySummary = shell.parentElement?.querySelector(".as-legacy summary");
        if (legacySummary) legacySummary.textContent = rpgT("asLegacy");
        if (this.quickLink && !document.getElementById("as-modal")?.hidden) this.renderQuickLink();
        this.refresh();
    },

    /* ---------- ДАННЫЕ ---------- */

    allResults() {
        return (typeof TeacherHQ !== "undefined") ? TeacherHQ.allResults() : [];
    },

    resultsForRow(row, all) {
        const code = String(row.studentCode || row.playerId || "").toUpperCase();
        const hash = hqNameHash(row.studentName || "");
        return all.filter(r => {
            if (code && r.studentCode && String(r.studentCode).toUpperCase() === code) return true;
            if (row.studentName && r.nameHash && r.nameHash === hash) {
                if (code && r.studentCode && String(r.studentCode).toUpperCase() !== code) return false;
                return true;
            }
            return false;
        });
    },

    batches() {
        const rows = Storage.getAssignments() || [];
        const all = this.allResults();
        const map = new Map();
        rows.forEach(row => {
            if (!row) return;
            const key = row.assignmentCode || row.id;
            let batch = map.get(key);
            if (!batch) {
                batch = {
                    key,
                    code: row.assignmentCode || "",
                    levelId: row.levelId,
                    levelToken: TeacherHQ.levelToken(row.levelId),
                    classId: row.classId || "",
                    className: row.className || "",
                    kind: (row.classId || row.className) ? "class" : "solo",
                    assignedAt: row.assignedAt || "",
                    dueAt: row.dueAt || "",
                    note: row.note || "",
                    archived: !!row.archivedAt,
                    rows: []
                };
                map.set(key, batch);
            }
            if (!batch.dueAt && row.dueAt) batch.dueAt = row.dueAt;
            if (!batch.note && row.note) batch.note = row.note;
            if (row.archivedAt) batch.archived = true;
            const own = this.resultsForRow(row, all);
            const status = TeacherHQ.assignmentStatus(row, own);
            batch.rows.push({ row, status: status.status, result: status.result });
        });
        const list = Array.from(map.values());
        list.forEach(batch => {
            batch.total = batch.rows.length;
            batch.done = batch.rows.filter(r => r.status === "done").length;
            batch.started = batch.rows.filter(r => r.status === "started").length;
            batch.overdue = batch.rows.filter(r => r.status === "overdue").length;
            batch.pending = batch.rows.filter(r => r.status === "pending").length;
            batch.pct = batch.total ? Math.round((batch.done / batch.total) * 100) : 0;
            batch.students = batch.rows.map(r => r.row.studentName || r.row.studentCode || "—");
        });
        return list;
    },

    classes() {
        return Storage.getClasses() || [];
    },

    filtered() {
        const f = this.filters;
        const search = String(f.search || "").trim().toLowerCase();
        let list = this.batches().filter(b => (f.archive ? true : !b.archived));
        if (f.classId && f.classId !== "all") list = list.filter(b => b.classId === f.classId || (!b.classId && f.classId === "solo"));
        if (f.status && f.status !== "all") {
            if (f.status === "archived") list = list.filter(b => b.archived);
            else list = list.filter(b => b.rows.some(r => r.status === f.status));
        }
        if (search) {
            list = list.filter(b => {
                const haystack = [asLevelLabel(b.levelId), b.className, b.code, b.note]
                    .concat(b.students).join(" ").toLowerCase();
                return haystack.indexOf(search) >= 0;
            });
        }
        list.sort((a, b) => {
            if (f.sort === "new") return String(b.assignedAt).localeCompare(String(a.assignedAt));
            const ad = a.dueAt ? new Date(a.dueAt).getTime() : Infinity;
            const bd = b.dueAt ? new Date(b.dueAt).getTime() : Infinity;
            if (ad !== bd) return ad - bd;
            return String(b.assignedAt).localeCompare(String(a.assignedAt));
        });
        return list;
    },

    /* ---------- РЕНДЕР ---------- */

    refresh() {
        this.renderClassFilter();
        this.renderStatusChips();
        this.renderList();
        this.renderClasses();
    },

    renderClassFilter() {
        const select = document.getElementById("as-class-filter");
        if (!select) return;
        const prev = this.filters.classId || "all";
        const classes = this.classes();
        select.innerHTML = `<option value="all">${escapeHtml(rpgT("asAllClasses"))}</option>`
            + classes.map(c => `<option value="${asEscape(c.id)}">${asEscape(c.name)}</option>`).join("")
            + `<option value="solo">${escapeHtml(rpgT("asSolo"))}</option>`;
        select.value = Array.from(select.options).some(o => o.value === prev) ? prev : "all";
        this.filters.classId = select.value;
    },

    statusCounts() {
        const list = this.batches().filter(b => this.filters.archive ? b.archived : !b.archived);
        const counts = { all: list.length, pending: 0, started: 0, done: 0, overdue: 0 };
        list.forEach(b => {
            AS_STATUSES.forEach(st => { if (b.rows.some(r => r.status === st)) counts[st] += 1; });
        });
        return counts;
    },

    renderStatusChips() {
        const wrap = document.getElementById("as-status-chips");
        if (!wrap) return;
        const counts = this.statusCounts();
        const items = [
            { id: "all", label: rpgT("asAll") },
            { id: "pending", label: rpgT("asPending") },
            { id: "started", label: rpgT("asStarted") },
            { id: "done", label: rpgT("asDone") },
            { id: "overdue", label: rpgT("asOverdue") }
        ];
        wrap.innerHTML = items.map(item => `
            <button type="button" class="as-chip${this.filters.status === item.id ? " active" : ""}" data-as-action="filter" data-status="${item.id}">
                ${escapeHtml(item.label)} <span>${counts[item.id] || 0}</span>
            </button>`).join("");
    },

    renderList() {
        const box = document.getElementById("as-list");
        if (!box) return;
        const list = this.filtered();
        if (!list.length) {
            box.innerHTML = `
                <div class="as-empty">
                    <div class="as-empty-icon">📭</div>
                    <b>${escapeHtml(rpgT("asEmpty"))}</b>
                    <p>${escapeHtml(rpgT("asEmptyHint"))}</p>
                    <button type="button" class="btn btn-primary" data-as-action="wizard">${escapeHtml(rpgT("asNew"))}</button>
                </div>`;
            return;
        }
        box.innerHTML = list.map(batch => this.cardHtml(batch)).join("");
    },

    cardHtml(batch) {
        const dueClass = batch.dueAt ? rpgDueChipClass(batch.dueAt, batch.done >= batch.total) : "";
        const dueText = batch.dueAt ? rpgDueLabel(batch.dueAt) : rpgT("asNoDue");
        const open = !!this.expanded[batch.key];
        const chips = [
            batch.className ? `<span class="as-meta-class">👥 ${asEscape(batch.className)}</span>` : `<span class="as-meta-class">👤 ${asEscape(batch.students[0] || rpgT("asSolo"))}</span>`,
            batch.code ? `<span class="as-meta-code">🔑 ${asEscape(batch.code)}</span>` : "",
            `<span class="as-due ${dueClass}">${dueClass === "overdue" ? "⚠️" : "⏳"} ${asEscape(dueText)}</span>`,
            batch.note ? `<span class="as-meta-note">💬 ${asEscape(batch.note)}</span>` : ""
        ].filter(Boolean).join("");

        const statusChips = `<div class="as-statuses">
            <span class="as-mini done" title="${asAttr(rpgT("asDone"))}">✓ ${batch.done}</span>
            <span class="as-mini started" title="${asAttr(rpgT("asStarted"))}">● ${batch.started}</span>
            <span class="as-mini overdue" title="${asAttr(rpgT("asOverdue"))}">! ${batch.overdue}</span>
            <span class="as-mini pending" title="${asAttr(rpgT("asPending"))}">○ ${batch.pending}</span>
        </div>`;

        const rows = open ? `<div class="as-students">${batch.rows.map(item => {
            const label = item.row.studentName || item.row.studentCode || "—";
            const statusKey = item.status === "done" ? "asDone" : item.status === "overdue" ? "asOverdue" : item.status === "started" ? "asStarted" : "asPending";
            const result = item.result ? ` · ${Math.round(Number(item.result.accuracy) || 0)}%` : "";
            return `<div class="as-student-row">
                <span class="as-st-name">${asEscape(label)}</span>
                <span class="as-st-code">${asEscape(item.row.studentCode || item.row.playerId || "")}</span>
                <span class="hq-status ${item.status}">${escapeHtml(rpgT(statusKey))}${result}</span>
            </div>`;
        }).join("")}</div>` : "";

        return `
            <article class="as-card${batch.archived ? " archived" : ""}" data-key="${asAttr(batch.key)}">
                <div class="as-card-head">
                    <div class="as-card-title">
                        <b>${asEscape(asLevelLabel(batch.levelId))}</b>
                        <div class="as-meta">${chips}</div>
                    </div>
                    <div class="as-card-progress">
                        ${statusChips}
                        <span class="as-progress-num">${batch.done} / ${batch.total}</span>
                    </div>
                </div>
                <div class="as-bar"><i style="width:${batch.pct}%"></i></div>
                <div class="as-card-actions">
                    <button type="button" class="as-btn primary" data-as-action="qr" data-key="${asAttr(batch.key)}">${escapeHtml(rpgT("asQrBtn"))}</button>
                    <button type="button" class="as-btn" data-as-action="copy-link" data-key="${asAttr(batch.key)}">🔗 ${escapeHtml(rpgT("asLink"))}</button>
                    <button type="button" class="as-btn" data-as-action="copy-text" data-key="${asAttr(batch.key)}">💬 ${escapeHtml(rpgT("asText"))}</button>
                    <button type="button" class="as-btn" data-as-action="toggle" data-key="${asAttr(batch.key)}">${escapeHtml(open ? rpgT("asHideStudents") : rpgT("asShowStudents"))}</button>
                    <button type="button" class="as-btn" data-as-action="duplicate" data-key="${asAttr(batch.key)}">${escapeHtml(rpgT("asDuplicate"))}</button>
                    <button type="button" class="as-btn" data-as-action="extend" data-key="${asAttr(batch.key)}">${escapeHtml(rpgT("asExtend"))}</button>
                    <button type="button" class="as-btn" data-as-action="archive" data-key="${asAttr(batch.key)}">${escapeHtml(batch.archived ? rpgT("asUnarchive") : rpgT("asArchive"))}</button>
                    <button type="button" class="as-btn danger" data-as-action="delete" data-key="${asAttr(batch.key)}">${escapeHtml(rpgT("asDeleteBtn"))}</button>
                </div>
                ${rows}
            </article>`;
    },

    renderClasses() {
        const box = document.getElementById("as-classes");
        if (!box) return;
        const classes = this.classes();
        if (!classes.length) {
            box.innerHTML = `<div class="as-empty-mini">${escapeHtml(rpgT("asNoClasses"))}</div>`;
            return;
        }
        box.innerHTML = classes.map(cls => `
            <div class="as-class-card">
                <div class="as-class-head">
                    <b>${asEscape(cls.name)}</b>
                    <span>${(cls.students || []).length} ${escapeHtml(rpgT("asPeople"))}</span>
                </div>
                <div class="as-class-students">${(cls.students || []).map(st =>
                    `<span class="as-st-pill">${asEscape(st.name || "")}${st.studentCode ? `<i>${asEscape(st.studentCode)}</i>` : ""}</span>`
                ).join("")}</div>
                <div class="as-class-actions">
                    <button type="button" class="as-btn" data-as-action="edit-class" data-key="${asAttr(cls.id)}">✎ ${escapeHtml(rpgT("asEdit"))}</button>
                    <button type="button" class="as-btn danger" data-as-action="delete-class" data-key="${asAttr(cls.id)}" title="${asAttr(rpgT("asDeleteBtn"))}" aria-label="${asAttr(rpgT("asDeleteBtn"))}">🗑 ${escapeHtml(rpgT("asDeleteBtn"))}</button>
                </div>
            </div>`).join("");
    },

    /* ---------- ДЕЙСТВИЯ ---------- */

    action(name, target, event) {
        const key = target.getAttribute("data-key") || "";
        switch (name) {
            case "quick-link":
                this.openQuickLink();
                break;
            case "quick-create":
                this.createQuickLink();
                break;
            case "wizard":
                this.openWizard();
                break;
            case "close":
                this.close();
                break;
            case "filter":
                this.filters.status = target.getAttribute("data-status") || "all";
                this.renderStatusChips();
                this.renderList();
                break;
            case "toggle":
                this.expanded[key] = !this.expanded[key];
                this.renderList();
                break;
            case "qr": {
                const batch = this.batches().find(b => b.key === key);
                if (batch) this.openQr(batch);
                break;
            }
            case "copy-link": {
                const batch = this.batches().find(b => b.key === key);
                if (batch) this.copyLink(batch, target);
                break;
            }
            case "copy-text": {
                const batch = this.batches().find(b => b.key === key);
                if (batch) hqCopy(this.assignmentText(batch));
                if (typeof RPG !== "undefined") RPG.toast("💬", rpgT("asCopied"), "", "tier-gold");
                break;
            }
            case "duplicate":
                this.duplicate(key);
                break;
            case "extend":
                this.extend(key);
                break;
            case "due-quick": {
                const input = document.getElementById("as-due-input");
                if (input) input.value = target.getAttribute("data-due") || "";
                break;
            }
            case "due-save": {
                const input = document.getElementById("as-due-input");
                const dueKey = target.getAttribute("data-key") || (document.getElementById("as-due-key") || {}).value;
                this.applyDue(dueKey, input ? input.value : "");
                this.close();
                break;
            }
            case "archive":
                this.archive(key);
                break;
            case "delete":
                this.removeBatch(key);
                break;
            case "new-class":
                this.openClassModal("");
                break;
            case "edit-class":
                this.openClassModal(key);
                break;
            case "delete-class":
                this.deleteClass(key);
                break;
            case "save-class":
                this.saveClass();
                break;
            case "transfer":
                this.openTransfer();
                break;
            case "export": {
                const area = document.getElementById("as-transfer-area");
                const payload = Storage.exportAssignments();
                if (area) area.value = payload;
                try { Teacher.exportAssignments(); } catch (e) {}
                break;
            }
            case "import-file":
                document.getElementById("as-file").click();
                break;
            case "save-url":
                this.saveBaseUrl();
                break;
            case "print-poster":
                this.printPoster();
                break;
            case "copy-link-text": {
                const input = document.getElementById("as-link-value");
                hqCopy(input ? input.value : "");
                if (typeof RPG !== "undefined") RPG.toast("🔗", rpgT("asCopied"), "", "tier-gold");
                break;
            }
            /* --- мастер --- */
            case "wiz-mode":
                this.wizard.mode = target.getAttribute("data-mode");
                this.renderWizard();
                break;
            case "wiz-class":
                this.toggleWizardClass(target.getAttribute("data-id"));
                break;
            case "wiz-grade":
                if (this.wizard) {
                    this.wizard.gradeFilter = target.getAttribute("data-grade") || "all";
                    this.renderWizard();
                }
                break;
            case "wiz-level":
                this.wizard.levelId = target.getAttribute("data-id");
                this.renderWizard();
                break;
            case "wiz-due":
                this.wizard.due = target.getAttribute("data-due") || "";
                this.renderWizard();
                break;
            case "wiz-next":
                this.wizardStep(1);
                break;
            case "wiz-back":
                this.wizardStep(-1);
                break;
            case "wiz-create":
                this.createFromWizard();
                break;
            case "qr-result": {
                const result = this.wizard && this.wizard.result;
                if (!result) break;
                const batch = this.batches().find(b => b.code === result.code);
                if (batch) this.openQr(batch);
                break;
            }
            default:
                break;
        }
        return false;
    },

    /* ---------- МАСТЕР ---------- */

    openWizard() {
        this.wizard = {
            step: 0,
            mode: this.classes().length ? "class" : "solo",
            classIds: [],
            name: "",
            code: "",
            levelId: "",
            search: "",
            due: "",
            note: "",
            result: null
        };
        const modal = document.getElementById("as-modal");
        if (!modal) return;
        modal.hidden = false;
        this.renderWizard();
    },

    close() {
        const modal = document.getElementById("as-modal");
        if (modal) modal.hidden = true;
        this.quickLink = null;
    },

    openQuickLink() {
        const classes = this.classes();
        if (!classes.length) {
            this.warn(rpgT("asPickClass"));
            this.openClassModal("");
            return;
        }
        const levels = asLevelOptions();
        this.quickLink = {
            classId: classes[0].id,
            levelId: levels.length ? levels[0].value : "",
            due: "",
            note: ""
        };
        const modal = document.getElementById("as-modal");
        if (!modal) return;
        modal.hidden = false;
        this.renderQuickLink();
    },

    renderQuickLink() {
        const body = document.getElementById("as-modal-body");
        if (!body || !this.quickLink) return;
        const quick = this.quickLink;
        const classes = this.classes();
        const levels = asLevelOptions();
        if (!classes.some(cls => cls.id === quick.classId)) quick.classId = classes.length ? classes[0].id : "";
        if (!levels.some(level => level.value === quick.levelId)) quick.levelId = levels.length ? levels[0].value : "";
        body.innerHTML = `
            <h2>${escapeHtml(rpgT("asQuickTitle"))}</h2>
            <p class="as-quick-form-note">${escapeHtml(rpgT("asQuickHint"))}</p>
            <label class="as-field"><span>${escapeHtml(rpgT("asQuickChooseClass"))}</span>
                <select id="as-quick-class">${classes.map(cls => `<option value="${asAttr(cls.id)}"${cls.id === quick.classId ? " selected" : ""}>${asEscape(cls.name)} · ${(cls.students || []).length} ${escapeHtml(rpgT("asPeople"))}</option>`).join("")}</select>
            </label>
            <label class="as-field"><span>${escapeHtml(rpgT("asQuickChooseLesson"))}</span>
                <select id="as-quick-level">${levels.map(level => `<option value="${asAttr(level.value)}"${level.value === quick.levelId ? " selected" : ""}>${asEscape(level.label)}</option>`).join("")}</select>
            </label>
            <label class="as-field"><span>${escapeHtml(rpgT("asDue"))}</span>
                <input type="date" id="as-quick-due" value="${asAttr(quick.due)}">
            </label>
            <label class="as-field"><span>${escapeHtml(rpgT("asNote"))}</span>
                <input type="text" id="as-quick-note" maxlength="160" value="${asAttr(quick.note)}" placeholder="${escapeHtml(rpgT("asNotePh"))}">
            </label>
            <div class="as-wiz-foot">
                <button type="button" class="btn btn-secondary" data-as-action="close">${escapeHtml(rpgT("asCancel"))}</button>
                <button type="button" class="btn btn-primary" data-as-action="quick-create">${escapeHtml(rpgT("asQuickCreate"))}</button>
            </div>`;
    },

    createQuickLink() {
        const quick = this.quickLink;
        if (!quick) return;
        const cls = this.classes().find(item => item.id === quick.classId);
        if (!cls) {
            this.warn(rpgT("asPickClass"));
            return;
        }
        if (!quick.levelId) {
            this.warn(rpgT("asPickLevel"));
            return;
        }
        const students = Array.isArray(cls.students) ? cls.students : [];
        if (!students.length) {
            this.warn(rpgT("asQuickNoStudents"));
            return;
        }
        const levelId = parseLevelRef(quick.levelId, Storage.grade()).canonical;
        const assignmentCode = Storage.makeAssignmentCode(levelId);
        const assignedAt = new Date().toISOString();
        const dueAt = asDueIso(quick.due);
        const loadedAssignments = Storage.load(Storage.KEYS.ASSIGNMENTS, []);
        const list = Array.isArray(loadedAssignments) ? loadedAssignments : [];
        students.forEach(student => list.push({
            id: Storage.makeId("assignment"),
            studentName: String(student.name || "").trim(),
            playerId: String(student.playerId || "").trim(),
            studentCode: String(student.studentCode || student.playerCode || student.playerId || "").trim().toUpperCase(),
            levelId,
            assignmentCode,
            note: String(quick.note || "").trim(),
            classId: cls.id,
            className: cls.name,
            assignedAt,
            createdVia: "quick-link",
            ...(dueAt ? { dueAt } : {})
        }));
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        this.close();
        this.refresh();
        try { Teacher.renderAssignments(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
        const batch = this.batches().find(item => item.code === assignmentCode);
        if (batch) this.openQr(batch);
    },

    wizardStep(delta) {
        const w = this.wizard;
        if (!w) return;
        if (delta > 0 && !this.validateStep(w.step)) return;
        if (w.step === 3 && delta > 0) return;
        w.step = Math.max(0, Math.min(3, w.step + delta));
        if (w.step < 3) w.result = null;
        this.renderWizard();
    },

    validateStep(step) {
        const w = this.wizard;
        if (step === 0) {
            if (w.mode === "class" && !w.classIds.length) {
                this.warn(rpgT("asPickClass"));
                return false;
            }
            if (w.mode === "class") {
                // Назначение не создаётся, если среди выбранных классов нет учеников.
                const total = this.classes()
                    .filter(c => w.classIds.includes(c.id))
                    .reduce((sum, c) => sum + ((c.students || []).length), 0);
                if (!total) {
                    this.warn(rpgT("asWizardNoStudents"));
                    return false;
                }
            }
            if (w.mode === "solo" && !String(w.name || "").trim()) {
                this.warn(rpgT("asNeedStudent"));
                return false;
            }
        }
        if (step === 1 && !w.levelId) {
            this.warn(rpgT("asPickLevel"));
            return false;
        }
        return true;
    },

    warn(text) {
        if (typeof RPG !== "undefined" && RPG.toast) RPG.toast("⚠️", text, "", "warning");
        else console.warn(text);
    },

    toggleWizardClass(id) {
        const w = this.wizard;
        if (!id) return;
        const index = w.classIds.indexOf(id);
        if (index >= 0) w.classIds.splice(index, 1);
        else w.classIds.push(id);
        this.renderWizard();
    },

    renderWizard() {
        const body = document.getElementById("as-modal-body");
        if (!body || !this.wizard) return;
        const w = this.wizard;
        const steps = [rpgT("asStepWho"), rpgT("asStepWhat"), rpgT("asStepWhen"), rpgT("asStepCheck")];
        const head = `
            <h2>${escapeHtml(rpgT("asWizardTitle"))}</h2>
            <div class="as-steps">${steps.map((label, i) => `
                <span class="as-step${i === w.step ? " active" : ""}${i < w.step ? " done" : ""}">
                    <i>${i < w.step ? "✓" : i + 1}</i>${escapeHtml(label)}
                </span>`).join("")}</div>`;
        const foot = `
            <div class="as-wiz-foot">
                <button type="button" class="btn btn-secondary" data-as-action="${w.step === 0 ? "close" : "wiz-back"}">${escapeHtml(w.step === 0 ? rpgT("asCancel") : rpgT("asBack"))}</button>
                ${w.step < 3
                    ? `<button type="button" class="btn btn-primary" data-as-action="wiz-next">${escapeHtml(rpgT("asNext"))}</button>`
                    : `<button type="button" class="btn btn-primary" data-as-action="wiz-create">${escapeHtml(rpgT("asCreate"))}</button>`}
            </div>`;
        body.innerHTML = head + `<div class="as-wiz-body">${this.stepHtml(w)}</div>` + foot;
    },

    stepHtml(w) {
        if (w.step === 0) return this.stepWho(w);
        if (w.step === 1) return this.stepWhat(w);
        if (w.step === 2) return this.stepWhen(w);
        return this.stepCheck(w);
    },

    stepWho(w) {
        const classes = this.classes();
        const classChips = classes.map(cls => `
            <button type="button" class="as-pick${w.classIds.includes(cls.id) ? " active" : ""}" data-as-action="wiz-class" data-id="${asAttr(cls.id)}">
                <b>${asEscape(cls.name)}</b>
                <span>${(cls.students || []).length} ${escapeHtml(rpgT("asPeople"))}</span>
            </button>`).join("");
        return `
            <div class="as-modes">
                <button type="button" class="as-mode${w.mode === "class" ? " active" : ""}" data-as-action="wiz-mode" data-mode="class">👥 ${escapeHtml(rpgT("asWholeClass"))}</button>
                <button type="button" class="as-mode${w.mode === "solo" ? " active" : ""}" data-as-action="wiz-mode" data-mode="solo">👤 ${escapeHtml(rpgT("asOneStudent"))}</button>
            </div>
            ${w.mode === "class" ? `
                <p class="as-hint">${escapeHtml(rpgT("asSeveralHint"))}</p>
                <div class="as-picks">${classChips || `<div class="as-empty-mini">${escapeHtml(rpgT("asNoClasses"))}</div>`}</div>
                ${classes.length ? `<div class="as-hint">${escapeHtml(rpgT("asSelected"))}: ${w.classIds.map(id => (classes.find(c => c.id === id) || {}).name).filter(Boolean).map(asEscape).join(", ") || "—"}</div>` : ""}
            ` : `
                <label class="as-field"><span>${escapeHtml(rpgT("asStudentName"))}</span>
                    <input type="text" id="as-wiz-name" maxlength="80" value="${asAttr(w.name)}" placeholder="${escapeHtml(rpgT("asStudentNamePh"))}">
                </label>
                <label class="as-field"><span>${escapeHtml(rpgT("asStudentCode"))}</span>
                    <input type="text" id="as-wiz-code" maxlength="12" value="${asAttr(w.code)}" placeholder="P1234">
                </label>
            `}`;
    },

    renderLevelList() {
        const box = document.querySelector("#as-modal .as-levels");
        const w = this.wizard;
        if (!box || !w) return;
        const options = asLevelOptions(w.gradeFilter || "all").filter(item => {
            const q = String(w.search || "").trim().toLowerCase();
            if (!q) return true;
            return item.label.toLowerCase().indexOf(q) >= 0;
        });
        box.innerHTML = options.length ? options.map(item => `
            <button type="button" class="as-level${w.levelId === item.value ? " active" : ""}" data-as-action="wiz-level" data-id="${asAttr(item.value)}">
                ${asEscape(item.label)}
            </button>`).join("") : `<div class="as-empty-mini">${escapeHtml(rpgT("asNothingFound"))}</div>`;
    },

    stepWhat(w) {
        if (!w.gradeFilter) {
            const selectedCls = (this.classes() || []).find(c => (w.classIds || []).includes(c.id));
            w.gradeFilter = selectedCls && [7, 8, 9].includes(Number(selectedCls.grade)) ? String(selectedCls.grade) : "all";
        }
        const gf = w.gradeFilter || "all";
        const options = asLevelOptions(gf).filter(item => {
            const q = String(w.search || "").trim().toLowerCase();
            if (!q) return true;
            return item.label.toLowerCase().indexOf(q) >= 0;
        });
        const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
        const allTxt = L === "kk" ? "Барлығы (7–9)" : L === "en" ? "All (7–9)" : "Все (7–9)";
        return `
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
                ${[["all", allTxt], ["7", catalogGradePrefix(7)], ["8", catalogGradePrefix(8)], ["9", catalogGradePrefix(9)]].map(([val, lbl]) => `
                    <button type="button" class="hq-chip ${gf === val ? "active" : ""}" data-as-action="wiz-grade" data-grade="${val}">${escapeHtml(lbl)}</button>
                `).join("")}
            </div>
            <label class="as-field"><span>${escapeHtml(rpgT("asSearchLevel"))}</span>
                <input type="search" id="as-wiz-search" value="${asAttr(w.search)}" placeholder="${escapeHtml(rpgT("asSearchLevelPh"))}" autocomplete="off">
            </label>
            <div class="as-levels">
                ${options.length ? options.map(item => `
                    <button type="button" class="as-level${w.levelId === item.value ? " active" : ""}" data-as-action="wiz-level" data-id="${asAttr(item.value)}">
                        ${asEscape(item.label)}
                    </button>`).join("") : `<div class="as-empty-mini">${escapeHtml(rpgT("asNothingFound"))}</div>`}
            </div>`;
    },

    stepWhen(w) {
        const quick = [
            { value: "", key: "asNoDueBtn" },
            { value: asAddDays(1), key: "asTomorrow" },
            { value: asAddDays(3), key: "asIn3" },
            { value: asAddDays(7), key: "asInWeek" },
            { value: asAddDays(14), key: "asIn2Weeks" }
        ];
        return `
            <label class="as-field"><span>${escapeHtml(rpgT("asDue"))}</span>
                <input type="date" id="as-wiz-due" value="${asAttr(w.due)}">
            </label>
            <div class="as-quick">
                ${quick.map(item => `<button type="button" class="as-chip${w.due === item.value ? " active" : ""}" data-as-action="wiz-due" data-due="${asAttr(item.value)}">${escapeHtml(rpgT(item.key))}</button>`).join("")}
            </div>
            <label class="as-field"><span>${escapeHtml(rpgT("asNote"))}</span>
                <input type="text" id="as-wiz-note" maxlength="160" value="${asAttr(w.note)}" placeholder="${escapeHtml(rpgT("asNotePh"))}">
            </label>`;
    },

    stepCheck(w) {
        if (w.result) {
            const link = this.buildLink(w.result);
            return `
                <div class="as-done">
                    <div class="as-done-icon">✅</div>
                    <h3>${escapeHtml(rpgT("asCreated"))}</h3>
                    <p>${escapeHtml(rpgT("asCreatedHint"))}</p>
                    <div class="as-code-big">${asEscape(w.result.code)}</div>
                    ${link ? `<div class="as-qr-mini">${this.qrSvg(link, 4)}</div>` : ""}
                    <div class="as-done-actions">
                        <button type="button" class="btn btn-primary" data-as-action="qr-result">${escapeHtml(rpgT("asQrBtn"))}</button>
                        ${link ? `<button type="button" class="btn btn-secondary" data-as-action="copy-link-text">${escapeHtml(rpgT("asCopyLink"))}</button>` : ""}
                        <button type="button" class="btn btn-secondary" data-as-action="close">${escapeHtml(rpgT("asClose"))}</button>
                    </div>
                    ${!link ? `<p class="as-hint">${escapeHtml(rpgT("asQrNeedUrl"))}</p>` : ""}
                    <input type="hidden" id="as-link-value" value="${asAttr(link)}">
                </div>`;
        }
        const name = w.mode === "class"
            ? this.classes().filter(c => w.classIds.includes(c.id)).map(c => c.name).join(", ")
            : (w.name || w.code);
        const dueText = w.due ? rpgT("asDueOn", w.due.split("-").reverse().join(".")) : rpgT("asNoDue");
        const count = w.mode === "class"
            ? this.classes().filter(c => w.classIds.includes(c.id)).reduce((sum, c) => sum + (c.students || []).length, 0)
            : 1;
        return `
            <div class="as-preview">
                <div><span>${escapeHtml(rpgT("asPreviewTo"))}</span><b>${asEscape(name)}</b><small>${count} ${escapeHtml(rpgT("asPeople"))}</small></div>
                <div><span>${escapeHtml(rpgT("asPreviewWhat"))}</span><b>${asEscape(asLevelLabel(w.levelId))}</b></div>
                <div><span>${escapeHtml(rpgT("asPreviewWhen"))}</span><b>${asEscape(dueText)}</b></div>
                ${w.note ? `<div><span>${escapeHtml(rpgT("asNote"))}</span><b>${asEscape(w.note)}</b></div>` : ""}
            </div>`;
    },

    createFromWizard() {
        const w = this.wizard;
        if (!w || !this.validateStep(0) || !this.validateStep(1)) return;
        const levelId = w.levelId;
        const code = Storage.makeAssignmentCode(levelId);
        const assignedAt = new Date().toISOString();
        const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []);
        if (!Array.isArray(list)) return;
        const created = [];
        const pushRow = payload => {
            const row = {
                id: Storage.makeId("assignment"),
                studentName: payload.studentName || "",
                playerId: payload.playerId || "",
                studentCode: String(payload.studentCode || "").toUpperCase(),
                levelId,
                assignmentCode: code,
                note: String(w.note || "").trim(),
                classId: payload.classId || "",
                className: payload.className || "",
                assignedAt,
                createdVia: "wizard"
            };
            if (w.due) row.dueAt = asDueIso(w.due);
            list.push(row);
            created.push(row);
        };
        if (w.mode === "class") {
            this.classes().filter(c => w.classIds.includes(c.id)).forEach(cls => {
                (cls.students || []).forEach(st => pushRow({
                    studentName: st.name,
                    playerId: st.playerId || "",
                    studentCode: st.studentCode || st.playerId || "",
                    classId: cls.id,
                    className: cls.name
                }));
            });
        } else {
            pushRow({ studentName: w.name.trim(), studentCode: w.code.trim(), playerId: "" });
        }
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        const firstClass = created.length ? (created[0].className || "") : "";
        w.result = {
            code,
            levelId,
            count: created.length,
            dueAt: w.due ? asDueIso(w.due) : "",
            className: firstClass
        };
        w.step = 3;
        this.renderWizard();
        this.refresh();
        try { Teacher.renderAssignments(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
    },

    /* ---------- QR, ССЫЛКИ, ПЛАКАТ ---------- */

    baseUrl(targetGrade) {
        const g = [7, 8, 9].includes(Number(targetGrade)) ? Number(targetGrade) : Storage.grade();
        const saved = Storage.load(RPG_AS.URL, "");
        if (saved) {
            const clean = String(saved).trim().split("#")[0].split("?")[0];
            return clean.endsWith("play.html") ? `${clean}?grade=${g}` : `${clean.replace(/\/+$/, "")}/play.html?grade=${g}`;
        }
        const originPath = location.href.split("#")[0].split("?")[0];
        if (!/^https?:/i.test(originPath)) return "";
        const dir = originPath.replace(/\/(index|play)\.html$/i, "").replace(/\/+$/, "");
        return `${dir}/play.html?grade=${g}`;
    },

    linkLevelToken(levelId) {
        const parsed = parseLevelRef(levelId, Storage.grade());
        if (parsed.isCustom) {
            const token = TeacherHQ.levelToken(parsed.canonical, parsed.grade);
            return "c" + token;
        }
        return `g${parsed.grade}l${parsed.levelId}`;
    },

    buildLink(batch) {
        if (!batch || !batch.code) return "";
        const parsed = parseLevelRef(batch.levelId, batch.grade || Storage.grade());
        const base = this.baseUrl(parsed.grade);
        if (!base) return "";
        const token = this.linkLevelToken(parsed.canonical);
        const due = batch.dueAt ? hqDateToken(batch.dueAt) : "-";
        const cls = batch.className ? encodeURIComponent(batch.className) : "";
        return `${base}#a=${batch.code}.${token}.${due}.${cls}`;
    },

    qrSvg(text, cell) {
        try {
            if (typeof qrcode !== "function") return "";
            const qr = qrcode(0, "M");
            qr.addData(text);
            qr.make();
            return qr.createSvgTag({ cellSize: cell || 5, margin: 8, scalable: true });
        } catch (e) {
            console.warn("QR failed", e);
            return "";
        }
    },

    assignmentText(batch) {
        const lines = [];
        lines.push(`${rpgT("asTextTitle")}: ${asLevelLabel(batch.levelId)}`);
        if (batch.className) lines.push(`${rpgT("asClass")}: ${batch.className}`);
        lines.push(`${rpgT("asCode")}: ${batch.code}`);
        if (batch.dueAt) lines.push(`${rpgT("asDueWord")}: ${rpgDueShort(batch.dueAt)} (${rpgDueLabel(batch.dueAt)})`);
        if (batch.note) lines.push(`${rpgT("asNote")}: ${batch.note}`);
        const link = this.buildLink(batch);
        if (link) lines.push(`${rpgT("asLink")}: ${link}`);
        lines.push(rpgT("asHowTo"));
        return lines.join("\n");
    },

    openQr(batch) {
        const modal = document.getElementById("as-modal");
        const body = document.getElementById("as-modal-body");
        if (!modal || !body) return;
        const link = this.buildLink(batch);
        const base = this.baseUrl();
        body.innerHTML = `
            <h2>${escapeHtml(rpgT("asQrTitle"))}</h2>
            <p class="as-hint">${escapeHtml(rpgT("asQrHint"))}</p>
            <div class="as-qr-box">${link ? this.qrSvg(link, 6) : `<div class="as-qr-empty">${escapeHtml(rpgT("asQrNeedUrl"))}</div>`}</div>
            <div class="as-code-big">${asEscape(batch.code)}</div>
            <div class="as-meta">${asEscape(asLevelLabel(batch.levelId))}${batch.className ? " · 👥 " + asEscape(batch.className) : ""}${batch.dueAt ? " · ⏳ " + asEscape(rpgDueLabel(batch.dueAt)) : ""}</div>
            <label class="as-field"><span>${escapeHtml(rpgT("asGameUrl"))}</span>
                <input type="url" id="as-game-url" value="${asAttr(base)}" placeholder="https://username.github.io/physics-quest/">
            </label>
            <p class="as-hint">${escapeHtml(rpgT("asGameUrlHint"))}</p>
            <div class="as-wiz-foot">
                <button type="button" class="btn btn-secondary" data-as-action="save-url">${escapeHtml(rpgT("asSaveUrl"))}</button>
                <button type="button" class="btn btn-secondary" data-as-action="print-poster">${escapeHtml(rpgT("asPrintPoster"))}</button>
                ${link ? `<button type="button" class="btn btn-primary" data-as-action="copy-link-text">${escapeHtml(rpgT("asCopyLink"))}</button>` : ""}
            </div>
            <input type="hidden" id="as-link-value" value="${asAttr(link)}">
            <input type="hidden" id="as-poster-key" value="${asAttr(batch.key)}">`;
        modal.hidden = false;
    },

    saveBaseUrl() {
        const input = document.getElementById("as-game-url");
        if (!input) return;
        let value = String(input.value || "").trim();
        if (value && !/^https?:/i.test(value)) value = "https://" + value;
        Storage.save(RPG_AS.URL, value);
        if (typeof RPG !== "undefined") RPG.toast("🔗", rpgT("asUrlSaved"), value, "tier-gold");
        const key = document.getElementById("as-poster-key")?.value;
        const batch = this.batches().find(b => b.key === key);
        if (batch) this.openQr(batch);
    },

    printPoster() {
        const key = document.getElementById("as-poster-key")?.value;
        const batch = this.batches().find(b => b.key === key);
        if (!batch) return;
        const link = this.buildLink(batch);
        let sheet = document.getElementById("hq-print-sheet");
        if (!sheet) {
            sheet = document.createElement("div");
            sheet.id = "hq-print-sheet";
            sheet.className = "hq-print-sheet";
            document.body.appendChild(sheet);
        }
        sheet.innerHTML = `
            <div class="as-poster">
                <div class="as-poster-kicker">${escapeHtml(rpgT("asPosterKicker"))}</div>
                <h1>${asEscape(asLevelLabel(batch.levelId))}</h1>
                ${batch.className ? `<div class="as-poster-class">${asEscape(batch.className)}</div>` : ""}
                <div class="as-poster-qr">${link ? this.qrSvg(link, 9) : ""}</div>
                <div class="as-poster-code">${escapeHtml(rpgT("asCode"))}: <b>${asEscape(batch.code)}</b></div>
                ${batch.dueAt ? `<div class="as-poster-due">${escapeHtml(rpgT("asDueWord"))}: <b>${asEscape(rpgDueShort(batch.dueAt))}</b></div>` : ""}
                <div class="as-poster-how">${escapeHtml(rpgT("asPosterHow"))}</div>
                <div class="as-poster-url">${link ? asEscape(link.split("#")[0]) : ""}</div>
            </div>`;
        // Прячем интерфейс: у некоторых экранов display:… !important, поэтому
        // надёжнее всего — инлайновый !important, который перебивает любые правила.
        const hidden = [];
        Array.prototype.forEach.call(document.body.children, el => {
            if (el === sheet) return;
            hidden.push([el, el.style.getPropertyValue("display"), el.style.getPropertyPriority("display")]);
            el.style.setProperty("display", "none", "important");
        });
        const restore = () => {
            hidden.forEach(([el, value, priority]) => {
                if (value) el.style.setProperty("display", value, priority);
                else el.style.removeProperty("display");
            });
        };
        window.addEventListener("afterprint", restore, { once: true });
        setTimeout(restore, 4000);
        try { window.print(); } catch (e) { console.warn("print", e); restore(); }
    },

    copyLink(batch, target) {
        const link = this.buildLink(batch);
        if (!link) {
            this.warn(rpgT("asQrNeedUrl"));
            this.openQr(batch);
            return;
        }
        hqCopy(link);
        if (typeof RPG !== "undefined") RPG.toast("🔗", rpgT("asLinkCopied"), "", "tier-gold");
    },

    /* ---------- ПРОЧИЕ ДЕЙСТВИЯ ---------- */

    duplicate(key) {
        const batch = this.batches().find(b => b.key === key);
        if (!batch) return;
        const code = Storage.makeAssignmentCode(batch.levelId);
        const assignedAt = new Date().toISOString();
        const due = batch.dueAt ? new Date(batch.dueAt) : null;
        const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []) || [];
        batch.rows.forEach(item => {
            const row = Object.assign({}, item.row, {
                id: Storage.makeId("assignment"),
                assignmentCode: code,
                assignedAt,
                createdVia: "duplicate"
            });
            delete row.dueAt;
            delete row.archivedAt;
            if (due && !isNaN(due.getTime())) row.dueAt = new Date(due.getTime()).toISOString();
            list.push(row);
        });
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        this.refresh();
        try { Teacher.renderAssignments(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
        if (typeof RPG !== "undefined") RPG.toast("⧉", rpgT("asDuplicated"), code, "tier-gold");
    },

    extend(key) {
        const batch = this.batches().find(b => b.key === key);
        if (!batch) return;
        this.openDueModal(batch);
    },

    openDueModal(batch) {
        const modal = document.getElementById("as-modal");
        const body = document.getElementById("as-modal-body");
        if (!modal || !body || !batch) return;
        const quick = [
            { value: "", key: "asNoDueBtn" },
            { value: asAddDays(1), key: "asTomorrow" },
            { value: asAddDays(3), key: "asIn3" },
            { value: asAddDays(7), key: "asInWeek" },
            { value: asAddDays(14), key: "asIn2Weeks" }
        ];
        body.innerHTML = `
            <h2>${escapeHtml(rpgT("asDueTitle"))}</h2>
            <p class="as-hint">${escapeHtml(asLevelLabel(batch.levelId))}${batch.className ? " · 👥 " + asEscape(batch.className) : ""}</p>
            <label class="as-field"><span>${escapeHtml(rpgT("asDue"))}</span>
                <input type="date" id="as-due-input" value="${asAttr(asDueInput(batch.dueAt))}">
            </label>
            <div class="as-quick">
                ${quick.map(item => `<button type="button" class="as-chip" data-as-action="due-quick" data-due="${asAttr(item.value)}">${escapeHtml(rpgT(item.key))}</button>`).join("")}
            </div>
            <div class="as-wiz-foot">
                <button type="button" class="btn btn-secondary" data-as-action="close">${escapeHtml(rpgT("asCancel"))}</button>
                <button type="button" class="btn btn-primary" data-as-action="due-save" data-key="${asAttr(batch.key)}">${escapeHtml(rpgT("asSave"))}</button>
            </div>
            <input type="hidden" id="as-due-key" value="${asAttr(batch.key)}">`;
        modal.hidden = false;
    },

    applyDue(key, value) {
        const iso = asDueIso(String(value || "").trim());
        const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []) || [];
        list.forEach(row => {
            if ((row.assignmentCode || row.id) !== key) return;
            if (iso) row.dueAt = iso;
            else delete row.dueAt;
        });
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        this.refresh();
        try { Teacher.renderAssignments(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
        if (typeof RPG !== "undefined") RPG.toast("📅", iso ? rpgT("asExtended") : rpgT("asDueCleared"), "", "tier-gold");
    },

    archive(key) {
        const batch = this.batches().find(b => b.key === key);
        if (!batch) return;
        const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []) || [];
        list.forEach(row => {
            if ((row.assignmentCode || row.id) !== key) return;
            if (batch.archived) delete row.archivedAt;
            else row.archivedAt = new Date().toISOString();
        });
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        this.refresh();
        try { Teacher.renderAssignments(); } catch (e) {}
    },

    removeBatch(key) {
        if (!confirm(rpgT("asDeleteConfirm"))) return;
        const list = (Storage.load(Storage.KEYS.ASSIGNMENTS, []) || []).filter(row => (row.assignmentCode || row.id) !== key);
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        this.refresh();
        try { Teacher.renderAssignments(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
    },

    /* ---------- КЛАССЫ ---------- */

    openClassModal(id) {
        const cls = id ? this.classes().find(c => c.id === id) : null;
        const modal = document.getElementById("as-modal");
        const body = document.getElementById("as-modal-body");
        if (!modal || !body) return;
        const studentsText = cls ? (cls.students || []).map(st => st.studentCode ? `${st.name} | ${st.studentCode}` : st.name).join("\n") : "";
        body.innerHTML = `
            <h2>${escapeHtml(cls ? rpgT("asClassEditTitle") : rpgT("asClassTitle"))}</h2>
            <label class="as-field"><span>${escapeHtml(rpgT("asClassName"))}</span>
                <input type="text" id="as-class-name" maxlength="40" value="${asAttr(cls ? cls.name : "")}" placeholder="8А">
            </label>
            <label class="as-field"><span>${escapeHtml(rpgT("asClassStudents"))}</span>
                <textarea id="as-class-students" rows="6" spellcheck="false" placeholder="Айдана | P1234&#10;Данияр | P5678">${asEscape(studentsText)}</textarea>
            </label>
            <p class="as-hint">${escapeHtml(rpgT("asClassStudentsHint"))}</p>
            <div class="as-wiz-foot">
                <button type="button" class="btn btn-secondary" data-as-action="close">${escapeHtml(rpgT("asCancel"))}</button>
                <button type="button" class="btn btn-primary" data-as-action="save-class" data-key="${asAttr(cls ? cls.id : "")}">${escapeHtml(rpgT("asClassSave"))}</button>
            </div>`;
        modal.hidden = false;
        modal.dataset.classId = cls ? cls.id : "";
    },

    parseStudents(text) {
        return String(text || "").split(/\n/).map(line => line.trim()).filter(Boolean).map(line => {
            const parts = line.split("|");
            const name = parts[0].trim();
            const code = (parts[1] || "").trim().toUpperCase();
            return { name, playerId: "", studentCode: code || "" };
        }).filter(st => st.name || st.studentCode);
    },

    saveClass() {
        const nameInput = document.getElementById("as-class-name");
        const studentsInput = document.getElementById("as-class-students");
        const name = String(nameInput ? nameInput.value : "").trim();
        const students = this.parseStudents(studentsInput ? studentsInput.value : "");
        const editingId = document.getElementById("as-modal").dataset.classId || "";
        if (!name || !students.length) {
            this.warn(rpgT("asClassEmpty"));
            return;
        }
        const studentsWithCodes = students.map(st => ({
            ...st,
            studentCode: st.studentCode || Storage.makePlayerCode()
        }));
        const gm = name.match(/([789])/);
        const inferredGrade = gm ? Number(gm[1]) : Storage.grade();
        if (editingId) {
            const list = this.classes().map(cls => cls.id === editingId ? Object.assign({}, cls, { name, grade: inferredGrade, students: studentsWithCodes }) : cls);
            Storage.save(Storage.KEYS.CLASSES, list);
        } else {
            Storage.addClass({ name, students });
        }
        this.close();
        this.refresh();
        try { Teacher.populateClassSelect(false); } catch (e) {}
        try { Teacher.renderClasses(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
        if (typeof RPG !== "undefined") RPG.toast("👥", rpgT("asClassSaved"), name, "tier-gold");
    },

    deleteClass(id) {
        if (!confirm(rpgT("asDeleteClassConfirm"))) return;
        Storage.deleteClass(id);
        this.refresh();
        try { Teacher.renderClasses(); } catch (e) {}
        try { TeacherHQ.render(); } catch (e) {}
    },

    /* ---------- ЭКСПОРТ / ИМПОРТ ---------- */

    openTransfer() {
        const modal = document.getElementById("as-modal");
        const body = document.getElementById("as-modal-body");
        if (!modal || !body) return;
        body.innerHTML = `
            <h2>${escapeHtml(rpgT("asTransferTitle"))}</h2>
            <p class="as-hint">${escapeHtml(rpgT("asTransferHint"))}</p>
            <div class="as-wiz-foot start">
                <button type="button" class="btn btn-secondary" data-as-action="export">${escapeHtml(rpgT("asExport"))}</button>
                <button type="button" class="btn btn-secondary" data-as-action="import-file">${escapeHtml(rpgT("asImport"))}</button>
            </div>
            <input type="file" id="as-file" accept="application/json,.json" hidden>
            <textarea id="as-transfer-area" rows="6" readonly placeholder="${escapeHtml(rpgT("asTransferPh"))}"></textarea>`;
        modal.hidden = false;
    },

    /* ---------- ССЫЛКИ В АДРЕСЕ (#a= и #res=) ---------- */

    handleHash() {
        const hash = String(location.hash || "");
        if (!hash || hash.length < 3) return;
        if (hash.indexOf("#a=") === 0) {
            const payload = this.parseAssignLink(hash.slice(3));
            if (!payload) {
                // Понятное сообщение вместо молчаливого отказа: ссылка повреждена.
                this.warn(rpgT("asLinkBroken"));
                this.clearHash();
                return;
            }
            const result = this.attachFromLink(payload);
            if (result.ok) {
                if (typeof showLevelSelect === "function") {
                    showLevelSelect();
                    if (typeof setLevelScreenTab === "function") setLevelScreenTab("assignments");
                }
                if (typeof RPG !== "undefined") {
                    RPG.toast("📥", rpgT("asAttached"), asLevelLabel(result.levelId), "tier-gold");
                }
            } else if (result.reason === "lesson") {
                // Пользовательский урок из ссылки не импортирован на это устройство.
                this.warn(rpgT("asLessonMissing"));
            } else {
                this.warn(rpgT("asLinkBroken"));
            }
            this.clearHash();
            return;
        }
        if (hash.indexOf("#res=") === 0) {
            const code = decodeURIComponent(hash.slice(5)).toUpperCase();
            try {
                const parsed = TeacherHQ.parseCode(code);
                if (parsed.ok) {
                    TeacherHQ.importCodes(code);
                    if (typeof showScreen === "function") showScreen("teacher-screen");
                    if (typeof Teacher !== "undefined") Teacher.switchTab("class");
                    if (typeof RPG !== "undefined") RPG.toast("📥", rpgT("asResultImported"), "", "tier-gold");
                } else {
                    this.warn(rpgT("asResultBad"));
                }
            } catch (e) { console.warn("res link", e); }
            this.clearHash();
        }
    },

    clearHash() {
        try {
            history.replaceState(null, "", location.pathname + location.search);
        } catch (e) {}
    },

    parseAssignLink(raw) {
        const text = String(raw || "");
        const match = text.match(/^([A-Z0-9]{3,12})\.(g[789]l\d{1,2}|[0-9]{1,2}|c[A-Z0-9]{6,10})\.(\d{6}|-)\.?(.*)$/i);
        if (!match) return null;
        if (!/^Q/i.test(match[1])) return null;
        return {
            code: match[1].toUpperCase(),
            levelToken: match[2],
            due: match[3] === "-" ? "" : match[3],
            className: match[4] ? decodeURIComponent(match[4]) : ""
        };
    },

    attachFromLink(payload) {
        const assignments = Storage.getAssignments() || [];
        const currentPlayer = Storage.getCurrentPlayer();
        const existing = assignments.find(a =>
            String(a.assignmentCode).toUpperCase() === payload.code
            && Storage.assignmentMatchesPlayer(a, currentPlayer)
        );
        if (existing) return { ok: true, existing: true, levelId: existing.levelId };
        let levelId = null;
        const glm = String(payload.levelToken).match(/^g([789])l(\d{1,2})$/i);
        if (glm) {
            levelId = `g${glm[1]}:${parseInt(glm[2], 10)}`;
        } else if (/^c/i.test(payload.levelToken)) {
            const tok = payload.levelToken.slice(1).toUpperCase();
            levelId = TeacherHQ.resolveToken(tok.startsWith("G") || tok.startsWith("K") ? tok : ("K" + tok));
            if (levelId === null) return { ok: false, reason: "lesson" };
        } else {
            const n = parseInt(payload.levelToken, 10);
            if (Number.isFinite(n) && n > 0) levelId = `g8:${n}`;
        }
        if (levelId === null) return { ok: false, reason: "level" };
        let settings = {};
        try { settings = Storage.getSettings() || {}; } catch (e) {}
        const row = {
            id: Storage.makeId("assignment"),
            studentName: settings.playerName || "",
            playerId: settings.playerId || "",
            studentCode: String(settings.playerCode || "").toUpperCase(),
            levelId,
            assignmentCode: payload.code,
            note: "",
            classId: "",
            className: payload.className || "",
            assignedAt: new Date().toISOString(),
            connectedByCode: true
        };
        if (payload.due) {
            const d = new Date(hqFromDateToken(payload.due));
            d.setHours(23, 59, 0, 0);
            row.dueAt = d.toISOString();
        }
        const list = Storage.load(Storage.KEYS.ASSIGNMENTS, []) || [];
        list.push(row);
        Storage.save(Storage.KEYS.ASSIGNMENTS, list);
        try { if (typeof renderStudentAssignments === "function") renderStudentAssignments(); } catch (e) {}
        try { RPG.refreshDueBanner(); } catch (e) {}
        return { ok: true, levelId };
    }
};

/* ---------------- УСТАНОВКА ---------------- */
(function bootAssignHQ() {
    if (typeof RPG === "undefined" || !RPG || typeof RPG.boot !== "function") return;
    const origBoot = RPG.boot;
    RPG.boot = function () {
        const result = origBoot.apply(this, arguments);
        try { AssignHQ.install(); } catch (e) { console.error("AssignHQ install failed", e); }
        return result;
    };
    window.AssignHQ = AssignHQ;
})();
