/* ============================================================
   PQ PRINT CARDS — печать карточек-бейджей класса (A4)
   Имя ученика + постоянный 4-символьный код + QR-код входа.
   Кнопка появляется у каждого класса в кабинете учителя.
   ============================================================ */
(function () {
    "use strict";

    const L = {
        ru: {
            btn: "🖨 Карточки кодов",
            btnAll: "🖨 Все карточки классов",
            title: "Карточки кодов класса",
            print: "🖨 Печать / PDF",
            close: "Закрыть",
            hint: "Вход на портал: play.html → «Профиль» → введите код. Или отсканируйте QR-камерой телефона.",
            note: "Сохраните карточку — код постоянный для 7, 8 и 9 класса.",
            kicker: "ФИЗИКА-КВЕСТ · 7–9 КЛАССЫ",
            grade: "класс",
            codeLabel: "Код пилота",
            empty: "В классе пока нет учеников — добавьте список на вкладке «Класс».",
            page: "Лист",
            cut: "✂ линия разреза",
            nameMissing: "Ученик",
            qrHint: "QR входа",
            school: "Школа / кабинет физики"
        },
        en: {
            btn: "🖨 Code cards",
            btnAll: "🖨 All class cards",
            title: "Class code cards",
            print: "🖨 Print / PDF",
            close: "Close",
            hint: "Portal login: play.html → Profile → enter the code. Or scan the QR with a phone camera.",
            note: "Keep this card — the code is permanent for Grades 7, 8 and 9.",
            kicker: "PHYSICS QUEST · GRADES 7–9",
            grade: "grade",
            codeLabel: "Pilot code",
            empty: "No students in this class yet — add a list on the Class tab.",
            page: "Sheet",
            cut: "✂ cut line",
            nameMissing: "Student",
            qrHint: "Login QR",
            school: "School / physics room"
        },
        kk: {
            btn: "🖨 Код карточкалары",
            btnAll: "🖨 Барлық сынып карточкалары",
            title: "Сынып код карточкалары",
            print: "🖨 Басып шығару / PDF",
            close: "Жабу",
            hint: "Порталға кіру: play.html → «Профиль» → кодты енгізіңіз. Немесе QR-ды телефон камерасымен сканерлеңіз.",
            note: "Карточканы сақтаңыз — код 7, 8 және 9 сыныптар үшін тұрақты.",
            kicker: "ФИЗИКА-КВЕСТ · 7–9 СЫНЫП",
            grade: "сынып",
            codeLabel: "Пилот коды",
            empty: "Сыныпта әзірге оқушы жоқ — «Сынып» қосымшасында тізім қосыңыз.",
            page: "Парақ",
            cut: "✂ кесу сызығы",
            nameMissing: "Оқушы",
            qrHint: "Кіру QR",
            school: "Мектеп / физика кабинеті"
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

    function qrSvg(text, px) {
        try {
            if (typeof qrcode !== "function") return "";
            const qr = qrcode(0, "M");
            qr.addData(text);
            qr.make();
            return qr.createSvgTag({ cellSize: 3, margin: 0, scalable: true }).replace("<svg ", `<svg style="width:${px}px;height:${px}px" `);
        } catch (_) { return ""; }
    }

    function baseUrl() {
        try {
            const path = window.location.pathname.replace(/[^/]*$/, "");
            return window.location.origin + path;
        } catch (_) { return "./"; }
    }

    function loginUrl(student, cls) {
        const grade = Number(cls.grade) || Number(window.CURRENT_GRADE) || 8;
        const code = encodeURIComponent(Storage.canonicalStudentCode(student.studentCode || student.playerId || ""));
        const name = encodeURIComponent(student.name || "");
        return `${baseUrl()}play.html?grade=${grade}&code=${code}${name ? "&name=" + name : ""}`;
    }

    const PrintCards = {
        init() {
            if (this._inited) return;
            this._inited = true;
            this.hook();
            this.addAllButton();
            document.addEventListener("pq:lang-changed", () => {
                const btn = document.getElementById("pq-print-all-btn");
                if (btn) btn.remove();
                this.addAllButton();
                this.decorate();
            });
        },

        hook() {
            if (typeof Teacher === "undefined" || Teacher.__pqPrint) return;
            Teacher.__pqPrint = true;
            const self = this;
            const orig = Teacher.renderClasses;
            Teacher.renderClasses = function () {
                const r = orig.apply(this, arguments);
                setTimeout(() => self.decorate(), 0);
                return r;
            };
            if (typeof showTeacherScreen === "function") {
                // при повторном открытии кабинета кнопки восстанавливаются
                setTimeout(() => self.decorate(), 0);
            }
        },

        addAllButton() {
            const list = document.getElementById("classes-list");
            if (!list || document.getElementById("pq-print-all-btn")) return;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.id = "pq-print-all-btn";
            btn.className = "btn btn-secondary pq-print-all";
            btn.textContent = t("btnAll");
            btn.addEventListener("click", () => this.openAll());
            list.parentNode.insertBefore(btn, list);
        },

        decorate() {
            this.addAllButton();
            const classes = (typeof Storage !== "undefined") ? Storage.getClasses() : [];
            document.querySelectorAll("#classes-list .class-item").forEach((item) => {
                if (item.querySelector("[data-pq-print-class]")) return;
                const del = item.querySelector("[data-class-delete]");
                if (!del) return;
                const id = del.getAttribute("data-class-delete");
                if (!classes.some((c) => c.id === id)) return;
                const actions = item.querySelector(".class-item-actions") || item;
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "btn-icon-only pq-print-class-btn";
                btn.setAttribute("data-pq-print-class", id);
                btn.title = t("btn");
                btn.textContent = "🖨";
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.open(id);
                });
                actions.insertBefore(btn, actions.firstChild);
            });
        },

        openAll() {
            const classes = (typeof Storage !== "undefined") ? Storage.getClasses() : [];
            if (!classes.length) return this.toast(t("empty"));
            this.render(classes, t("title"));
        },

        open(classId) {
            const classes = (typeof Storage !== "undefined") ? Storage.getClasses() : [];
            const cls = classes.find((c) => c.id === classId);
            if (!cls) return;
            this.render([cls], `${t("title")} · ${cls.name}`);
        },

        render(classes, title) {
            this.close();
            const overlay = document.createElement("div");
            overlay.id = "pq-print-overlay";
            overlay.className = "pq-print-overlay";
            const students = [];
            classes.forEach((cls) => {
                (cls.students || []).forEach((st) => students.push({ student: st, cls: cls }));
            });
            if (!students.length) {
                this.toast(t("empty"));
                return;
            }
            const perPage = 9;
            const pages = [];
            for (let i = 0; i < students.length; i += perPage) pages.push(students.slice(i, i + perPage));

            overlay.innerHTML = `
                <div class="pq-print-toolbar no-print">
                    <div class="pq-print-title">🖨 ${esc(title)}</div>
                    <div class="pq-print-actions">
                        <button type="button" class="btn btn-primary" id="pq-print-go">${esc(t("print"))}</button>
                        <button type="button" class="btn btn-secondary" id="pq-print-close">${esc(t("close"))}</button>
                    </div>
                </div>
                <div class="pq-print-pages" id="pq-print-pages"></div>
            `;
            document.body.appendChild(overlay);
            document.body.classList.add("pq-print-open");

            const pagesRoot = overlay.querySelector("#pq-print-pages");
            pagesRoot.innerHTML = pages.map((chunk, pageIdx) => `
                <section class="pq-sheet">
                    <div class="pq-sheet-head">
                        <span>${esc(t("kicker"))}</span>
                        <span>${esc(t("page"))} ${pageIdx + 1} / ${pages.length}</span>
                    </div>
                    <div class="pq-card-grid">
                        ${chunk.map(({ student, cls }) => this.cardHtml(student, cls)).join("")}
                    </div>
                    <div class="pq-sheet-foot">${esc(t("note"))}</div>
                </section>
            `).join("");

            overlay.querySelector("#pq-print-go").addEventListener("click", () => {
                document.body.classList.add("pq-printing-cards");
                setTimeout(() => {
                    window.print();
                    setTimeout(() => document.body.classList.remove("pq-printing-cards"), 400);
                }, 60);
            });
            overlay.querySelector("#pq-print-close").addEventListener("click", () => this.close());
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) this.close();
            });
            document.addEventListener("keydown", this._esc = (e) => {
                if (e.key === "Escape") this.close();
            });
        },

        cardHtml(student, cls) {
            const grade = Number(cls.grade) || Number(window.CURRENT_GRADE) || 8;
            const name = student.name || t("nameMissing");
            const code = Storage.canonicalStudentCode(student.studentCode || student.playerId || "") || "—";
            return `
                <article class="pq-card">
                    <div class="pq-card-top">
                        <div>
                            <div class="pq-card-kicker">${esc(t("kicker"))}</div>
                            <div class="pq-card-class">${esc(cls.name)} · ${grade} ${esc(t("grade"))}</div>
                        </div>
                        <div class="pq-card-emblem">🚀</div>
                    </div>
                    <div class="pq-card-name">${esc(name)}</div>
                    <div class="pq-card-code-row">
                        <div>
                            <div class="pq-card-label">${esc(t("codeLabel"))}</div>
                            <div class="pq-card-code">${esc(code)}</div>
                        </div>
                        <div class="pq-card-qr">
                            ${qrSvg(loginUrl(student, cls), 92)}
                            <span>${esc(t("qrHint"))}</span>
                        </div>
                    </div>
                    <div class="pq-card-hint">${esc(t("hint"))}</div>
                    <div class="pq-card-cut">${esc(t("cut"))}</div>
                </article>
            `;
        },

        close() {
            const overlay = document.getElementById("pq-print-overlay");
            if (overlay) overlay.remove();
            document.body.classList.remove("pq-print-open", "pq-printing-cards");
            if (this._esc) {
                document.removeEventListener("keydown", this._esc);
                this._esc = null;
            }
        },

        toast(text) {
            if (typeof showNotification === "function") {
                try { showNotification(text, "info"); return; } catch (_) {}
            }
            alert(text);
        }
    };

    window.PQPrintCards = PrintCards;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(() => PrintCards.init(), 1500));
    } else {
        setTimeout(() => PrintCards.init(), 1500);
    }
})();
