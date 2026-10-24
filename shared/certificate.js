/* ============================================================
   PQ CERTIFICATE — «Сертификат / Паспорт пилота трилогии»
   Именной диплом с рангами по 7, 8 и 9 классам.
   Имя и фамилия вводятся отдельно, результат сохраняется в PNG/PDF.
   ============================================================ */
(function () {
    "use strict";

    const L = {
        ru: {
            open: "Паспорт пилота",
            title: "Сертификат пилота трилогии",
            subtitle: "Именной диплом с рангами по 7, 8 и 9 классам. Сохрани как PNG или распечатай в PDF для портфолио.",
            tabAll: "Вся трилогия",
            surname: "Фамилия",
            name: "Имя",
            surnamePh: "Например: Ахметова",
            namePh: "Например: Айдана",
            get: "🎖 Получить сертификат",
            download: "💾 Скачать PNG",
            print: "🖨 Печать / PDF",
            design: "Оформление",
            designs: { space: "Космос", light: "Светлый", paper: "Пергамент", sky: "Небо" },
            close: "Закрыть",
            errName: "Введите фамилию и имя — сертификат должен быть именным.",
            grade: "класс",
            levels: "Уровней пройдено",
            tasks: "Очков за миссии",
            rank: "Ранг",
            code: "Код пилота",
            date: "Дата",
            mentor: "Наставник",
            certificate: "СЕРТИФИКАТ",
            pilot: "ПИЛОТА",
            passport: "ПАСПОРТ ПИЛОТА ТРИЛОГИИ",
            awarded: "награждается за прохождение образовательной RPG-трилогии",
            trilogy: "Физика-Квест · Астерия → Эквилибриум → Орбита-9",
            kicker: "ФИЗИКА-КВЕСТ · ОБРАЗОВАТЕЛЬНАЯ RPG · 7–9",
            progress: "Прогресс",
            saved: "Сертификат сохранён",
            none: "Пока нет данных — пройди хотя бы один уровень.",
            titles: {
                7: "АСТЕРИЯ · 7 КЛАСС",
                8: "ЭКВИЛИБРИУМ · 8 КЛАСС",
                9: "ОРБИТА-9 · 9 КЛАСС",
                all: "ВСЯ ТРИЛОГИЯ · 7–9 КЛАССЫ"
            }
        },
        en: {
            open: "Pilot passport",
            title: "Trilogy pilot certificate",
            subtitle: "A personalised diploma with ranks for Grades 7, 8 and 9. Save it as PNG or print to PDF for your portfolio.",
            tabAll: "Whole trilogy",
            surname: "Surname",
            name: "First name",
            surnamePh: "e.g. Akhmetova",
            namePh: "e.g. Aidana",
            get: "🎖 Generate certificate",
            download: "💾 Download PNG",
            print: "🖨 Print / PDF",
            design: "Design",
            designs: { space: "Space", light: "Light", paper: "Parchment", sky: "Sky" },
            close: "Close",
            errName: "Enter both first name and surname — the certificate is personalised.",
            grade: "grade",
            levels: "Levels completed",
            tasks: "Mission score",
            rank: "Rank",
            code: "Pilot code",
            date: "Date",
            mentor: "Mentor",
            certificate: "CERTIFICATE",
            pilot: "OF A PILOT",
            passport: "TRILOGY PILOT PASSPORT",
            awarded: "is awarded for completing the educational RPG trilogy",
            trilogy: "Physics Quest · Asteria → Equilibrium → Orbit-9",
            kicker: "PHYSICS QUEST · EDUCATIONAL RPG · 7–9",
            progress: "Progress",
            saved: "Certificate saved",
            none: "No data yet — complete at least one level.",
            titles: {
                7: "ASTERIA · GRADE 7",
                8: "EQUILIBRIUM · GRADE 8",
                9: "ORBIT-9 · GRADE 9",
                all: "WHOLE TRILOGY · GRADES 7–9"
            }
        },
        kk: {
            open: "Пилот паспорты",
            title: "Трилогия пилотының сертификаты",
            subtitle: "7, 8 және 9 сынып рангылары бар атаулы диплом. PNG форматында сақтап, PDF ретінде басып шығарыңыз.",
            tabAll: "Бүкіл трилогия",
            surname: "Тегі",
            name: "Аты",
            surnamePh: "Мысалы: Ахметова",
            namePh: "Мысалы: Айдана",
            get: "🎖 Сертификат алу",
            download: "💾 PNG жүктеу",
            print: "🖨 Басып шығару / PDF",
            design: "Безендіру",
            designs: { space: "Ғарыш", light: "Ашық", paper: "Пергамент", sky: "Аспан" },
            close: "Жабу",
            errName: "Тегі мен атын енгізіңіз — сертификат атаулы болуы керек.",
            grade: "сынып",
            levels: "Өткен деңгейлер",
            tasks: "Миссия ұпайлары",
            rank: "Ранг",
            code: "Пилот коды",
            date: "Күні",
            mentor: "Тәлімгер",
            certificate: "СЕРТИФИКАТ",
            pilot: "ПИЛОТЫ",
            passport: "ТРИЛОГИЯ ПИЛОТЫНЫҢ ПАСПОРТЫ",
            awarded: "білім беру RPG-трилогиясын өткені үшін марапатталады",
            trilogy: "Физика-Квест · Астерия → Эквилибриум → Орбита-9",
            kicker: "ФИЗИКА-КВЕСТ · БІЛІМ БЕРУ RPG · 7–9",
            progress: "Прогресс",
            saved: "Сертификат сақталды",
            none: "Әзірге дерек жоқ — кемінде бір деңгейді өтіңіз.",
            titles: {
                7: "АСТЕРИЯ · 7 СЫНЫП",
                8: "ЭКВИЛИБРИУМ · 8 СЫНЫП",
                9: "ОРБИТА-9 · 9 СЫНЫП",
                all: "БҮКІЛ ТРИЛОГИЯ · 7–9 СЫНЫП"
            }
        }
    };
    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || "ru"; } catch (_) { return "ru"; }
    }
    function t(key) {
        const l = lang();
        return (L[l] && L[l][key]) || L.ru[key] || key;
    }
    function titles(key) {
        const l = lang();
        return (L[l] && L[l].titles && L[l].titles[key]) || L.ru.titles[key];
    }
    function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    const RANKS = {
        7: [
            ["Кадет Астерии", "Asteria Cadet", "Астерия кадеті"],
            ["Пилот купола", "Dome Pilot", "Күмбез пилоты"],
            ["Мастер дронов", "Drone Master", "Дрон шебері"],
            ["Хранитель Астерии", "Guardian of Asteria", "Астерия қорғаушысы"],
            ["Легенда Астерии", "Legend of Asteria", "Астерия аңызы"]
        ],
        8: [
            ["Кадет Эквилибриума", "Equilibrium Cadet", "Эквилибриум кадеті"],
            ["Инженер тепла", "Thermal Engineer", "Жылу инженері"],
            ["Энергетик щита", "Shield Engineer", "Қалқан энергетигі"],
            ["Хранитель реактора", "Reactor Guardian", "Реактор қорғаушысы"],
            ["Легенда Эквилибриума", "Legend of Equilibrium", "Эквилибриум аңызы"]
        ],
        9: [
            ["Кадет Орбиты", "Orbit Cadet", "Орбита кадеті"],
            ["Навигатор", "Navigator", "Навигатор"],
            ["Пилот «Беркута»", "Berkut Pilot", "«Беркут» пилоты"],
            ["Командир станции", "Station Commander", "Станция командирі"],
            ["Легенда Орбиты-9", "Legend of Orbit-9", "Орбита-9 аңызы"]
        ]
    };

    // Четыре готовых оформления сертификата: «Космос» — прежние сгенерированные
    // фоны, три светлых варианта рисуются прямо на canvas (их можно печатать на
    // обычной бумаге без тёмной заливки).
    const DESIGNS = {
        space: {
            kind: "image",
            text: "#ffffff", sub: "rgba(220,235,255,0.8)", accent: "#ffd479",
            frame: "rgba(255,214,120,0.85)", frameSoft: "rgba(255,214,120,0.3)",
            rule: "rgba(255,212,121,0.55)", bar: "rgba(255,255,255,0.16)",
            seal: "rgba(255,212,121,0.95)", sealAlpha: 0.92
        },
        light: {
            kind: "light", bgTop: "#ffffff", bgBottom: "#eef2f8",
            text: "#14213d", sub: "#4a5c7c", accent: "#a97a1c",
            frame: "#c9a24a", frameSoft: "rgba(201,162,74,0.45)",
            rule: "rgba(169,122,28,0.5)", bar: "rgba(20,33,61,0.12)",
            seal: "rgba(168,58,46,0.82)", sealAlpha: 0.82
        },
        paper: {
            kind: "paper", bgTop: "#fbf5e6", bgBottom: "#efe2c4",
            text: "#3a2a14", sub: "#6b5636", accent: "#8a5a1e",
            frame: "#9c7a44", frameSoft: "rgba(156,122,68,0.5)",
            rule: "rgba(138,90,30,0.55)", bar: "rgba(58,42,20,0.14)",
            seal: "rgba(128,36,44,0.8)", sealAlpha: 0.8
        },
        sky: {
            kind: "sky", bgTop: "#eaf6ff", bgBottom: "#fdfefe",
            text: "#0b2545", sub: "#3f5f85", accent: "#1769aa",
            frame: "#2b6cb0", frameSoft: "rgba(43,108,176,0.35)",
            rule: "rgba(23,105,170,0.45)", bar: "rgba(11,37,69,0.12)",
            seal: "rgba(29,111,184,0.78)", sealAlpha: 0.8
        }
    };
    const DESIGN_ORDER = ["space", "light", "paper", "sky"];

    const MONTHS = {
        ru: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        kk: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"]
    };

    // Дату печатаем сами: встроенный toLocaleDateString для kk-KZ отдаёт
    // английские названия месяцев, и на казахском сертификате было «October».
    function formatDate(l) {
        const d = new Date();
        if (l === "en") {
            return d.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
        }
        const months = MONTHS[l] || MONTHS.ru;
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    function rankFor(grade, pct) {
        const idx = pct >= 0.99 ? 4 : pct >= 0.7 ? 3 : pct >= 0.4 ? 2 : pct >= 0.15 ? 1 : 0;
        const row = (RANKS[grade] || RANKS[8])[idx];
        const l = lang();
        return l === "en" ? row[1] : l === "kk" ? row[2] : row[0];
    }

    function totalLevels(grade) {
        try {
            if (typeof LEVELS_CONFIG !== "undefined" && Number(window.CURRENT_GRADE) === Number(grade)) return LEVELS_CONFIG.length;
        } catch (_) {}
        const cat = window.GRADE_CATALOG && window.GRADE_CATALOG[grade];
        if (cat && Array.isArray(cat.levels) && cat.levels.length) return cat.levels.length;
        return { 7: 50, 8: 55, 9: 48 }[grade] || 50;
    }

    function gradeStats(grade) {
        let progress = { completedLevels: {}, totalScore: 0, bestScore: 0 };
        try {
            if (typeof Storage !== "undefined" && Storage.getProgressForGrade) progress = Storage.getProgressForGrade(grade) || progress;
        } catch (_) {}
        const completed = Object.keys(progress.completedLevels || {}).length;
        const total = totalLevels(grade);
        const pct = total ? completed / total : 0;
        return {
            grade: grade,
            completed: completed,
            total: total,
            pct: pct,
            score: Number(progress.totalScore) || Object.values(progress.completedLevels || {}).reduce((a, b) => a + (Number(b && b.score) || 0), 0),
            rank: rankFor(grade, pct)
        };
    }

    const Certificate = {
        mode: 7,
        design: "space",
        canvas: null,
        _bg: {},
        _inited: false,

        init() {
            if (this._inited) return;
            this._inited = true;
            this.injectEntry();
            document.addEventListener("pq:lang-changed", () => {
                const modal = document.getElementById("pq-cert-modal");
                if (modal) this.buildModal();
            });
        },

        injectEntry() {
            const profile = document.getElementById("profile-screen");
            if (!profile || document.getElementById("pq-cert-open")) return;
            const back = document.getElementById("btn-profile-back");
            const btn = document.createElement("button");
            btn.type = "button";
            btn.id = "pq-cert-open";
            btn.className = "btn btn-secondary pq-cert-open";
            btn.innerHTML = `<span>🎖</span><span>${esc(t("open"))}</span>`;
            btn.addEventListener("click", () => this.open());
            if (back && back.parentNode) back.parentNode.insertBefore(btn, back);
            else profile.appendChild(btn);
        },

        open(grade) {
            try {
                const saved = localStorage.getItem("pq_cert_design");
                if (saved && DESIGNS[saved]) this.design = saved;
            } catch (_) {}
            if (!document.getElementById("pq-cert-modal")) this.buildModal();
            this.mode = Number(grade) || Number(window.CURRENT_GRADE) || 8;
            const modal = document.getElementById("pq-cert-modal");
            modal.classList.add("active");
            this.syncTabs();
            this.syncDesigns();
            this.prefillName();
            this.draw();
        },

        close() {
            document.getElementById("pq-cert-modal")?.classList.remove("active");
        },

        buildModal() {
            const old = document.getElementById("pq-cert-modal");
            if (old) old.remove();
            const modal = document.createElement("div");
            modal.id = "pq-cert-modal";
            modal.className = "modal pq-cert-modal";
            modal.innerHTML = `
                <div class="modal-content pq-cert-content">
                    <div class="pq-cert-head">
                        <div>
                            <h2 class="pq-cert-title">🎖 ${esc(t("title"))}</h2>
                            <p class="pq-cert-sub">${esc(t("subtitle"))}</p>
                        </div>
                        <button type="button" class="btn-icon-only" id="pq-cert-x" aria-label="${esc(t("close"))}">×</button>
                    </div>
                    <div class="pq-cert-body">
                        <div class="pq-cert-controls">
                            <div class="pq-cert-tabs" role="tablist">
                                ${[7, 8, 9].map((g) => `<button type="button" class="pq-cert-tab" data-cert-grade="${g}">${g} ${esc(t("grade"))}</button>`).join("")}
                                <button type="button" class="pq-cert-tab" data-cert-grade="all">🏆 ${esc(t("tabAll"))}</button>
                            </div>
                            <div class="pq-cert-designs" role="group" aria-label="${esc(t("design"))}">
                                ${DESIGN_ORDER.map((id) => `<button type="button" class="pq-cert-design" data-cert-design="${id}"><i class="dot dot-${id}"></i>${esc((t("designs") || {})[id] || id)}</button>`).join("")}
                            </div>
                            <label class="pq-cert-label">${esc(t("surname"))}
                                <input type="text" id="pq-cert-surname" maxlength="40" autocomplete="off" placeholder="${esc(t("surnamePh"))}">
                            </label>
                            <label class="pq-cert-label">${esc(t("name"))}
                                <input type="text" id="pq-cert-name" maxlength="40" autocomplete="off" placeholder="${esc(t("namePh"))}">
                            </label>
                            <button type="button" class="btn btn-primary pq-cert-get" id="pq-cert-get">${esc(t("get"))}</button>
                            <div class="pq-cert-row">
                                <button type="button" class="btn btn-secondary" id="pq-cert-download">${esc(t("download"))}</button>
                                <button type="button" class="btn btn-secondary" id="pq-cert-print">${esc(t("print"))}</button>
                            </div>
                            <p class="pq-cert-note">💡 ${esc(t("subtitle"))}</p>
                        </div>
                        <div class="pq-cert-preview">
                            <canvas id="pq-cert-canvas" width="1600" height="1120" aria-label="${esc(t("title"))}"></canvas>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.addEventListener("click", (e) => { if (e.target === modal) this.close(); });
            modal.querySelector("#pq-cert-x").addEventListener("click", () => this.close());
            modal.querySelectorAll("[data-cert-grade]").forEach((btn) => {
                btn.addEventListener("click", () => {
                    const g = btn.getAttribute("data-cert-grade");
                    this.mode = g === "all" ? "all" : Number(g);
                    this.syncTabs();
                    this.draw();
                });
            });
            modal.querySelectorAll("[data-cert-design]").forEach((btn) => {
                btn.addEventListener("click", () => {
                    this.design = btn.getAttribute("data-cert-design");
                    try { localStorage.setItem("pq_cert_design", this.design); } catch (_) {}
                    this.syncDesigns();
                    this.draw();
                });
            });
            modal.querySelector("#pq-cert-get").addEventListener("click", () => {
                const sur = modal.querySelector("#pq-cert-surname").value.trim();
                const nm = modal.querySelector("#pq-cert-name").value.trim();
                if (!sur || !nm) {
                    modal.querySelector("#pq-cert-surname").classList.add("pq-invalid");
                    modal.querySelector("#pq-cert-name").classList.add("pq-invalid");
                    this.toast(t("errName"));
                    return;
                }
                try { localStorage.setItem("pq_cert_name", JSON.stringify({ surname: sur, name: nm })); } catch (_) {}
                if (typeof PQAccount !== "undefined") {
                    try {
                        const full = `${sur} ${nm}`.trim();
                        if (typeof PQAccount.updateStudentNameAndSync === "function") PQAccount.updateStudentNameAndSync(full);
                    } catch (_) {}
                }
                this.draw();
                this.toast(t("saved"));
            });
            modal.querySelector("#pq-cert-download").addEventListener("click", () => this.download());
            modal.querySelector("#pq-cert-print").addEventListener("click", () => this.print());
            this.syncTabs();
            this.syncDesigns();
        },

        syncDesigns() {
            document.querySelectorAll("#pq-cert-modal [data-cert-design]").forEach((btn) => {
                btn.classList.toggle("active", btn.getAttribute("data-cert-design") === this.design);
            });
        },

        syncTabs() {
            document.querySelectorAll("#pq-cert-modal [data-cert-grade]").forEach((btn) => {
                const g = btn.getAttribute("data-cert-grade");
                btn.classList.toggle("active", String(this.mode) === g);
            });
        },

        prefillName() {
            const surInput = document.getElementById("pq-cert-surname");
            const nameInput = document.getElementById("pq-cert-name");
            if (!surInput || !nameInput) return;
            let saved = null;
            try { saved = JSON.parse(localStorage.getItem("pq_cert_name") || "null"); } catch (_) {}
            if (saved && saved.surname) {
                surInput.value = saved.surname;
                nameInput.value = saved.name || "";
                return;
            }
            let full = "";
            try {
                const acc = window.PQAccount && PQAccount.get();
                full = (acc && acc.student && acc.student.name) || (typeof Storage !== "undefined" && Storage.getSettings().playerName) || "";
            } catch (_) {}
            if (!full) return;
            const parts = String(full).trim().split(/\s+/);
            if (parts.length === 1) nameInput.value = parts[0];
            else { surInput.value = parts[0]; nameInput.value = parts.slice(1).join(" "); }
        },

        fullName() {
            const sur = (document.getElementById("pq-cert-surname")?.value || "").trim();
            const nm = (document.getElementById("pq-cert-name")?.value || "").trim();
            if (!sur && !nm) return lang() === "en" ? "Cadet Pilot" : lang() === "kk" ? "Курсант пилот" : "Курсант-пилот";
            return `${sur} ${nm}`.trim();
        },

        ensureBg(mode) {
            const key = String(mode);
            if (this._bg[key]) return Promise.resolve(this._bg[key]);
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => { this._bg[key] = img; resolve(img); };
                img.onerror = () => { this._bg[key] = null; resolve(null); };
                img.src = mode === "all" ? "./assets/certs/cert-all.jpg" : `./assets/certs/cert-g${mode}.jpg`;
            });
        },

        designOf(id) {
            return DESIGNS[id] || DESIGNS.space;
        },

        // Фон: «Космос» — сгенерированная картинка под тёмной заливкой,
        // остальные три оформления целиком рисуются кодом, поэтому печатаются
        // на белой бумаге без расхода краски.
        paintBg(ctx, w, h, th, bg) {
            if (th.kind === "image") {
                if (bg) {
                    const ratio = Math.max(w / bg.width, h / bg.height);
                    const dw = bg.width * ratio, dh = bg.height * ratio;
                    ctx.drawImage(bg, (w - dw) / 2, (h - dh) / 2, dw, dh);
                    const scrim = ctx.createLinearGradient(0, 0, w * 0.72, 0);
                    scrim.addColorStop(0, "rgba(4,8,20,0.86)");
                    scrim.addColorStop(0.55, "rgba(4,8,20,0.55)");
                    scrim.addColorStop(1, "rgba(4,8,20,0.1)");
                    ctx.fillStyle = scrim;
                    ctx.fillRect(0, 0, w, h);
                    return;
                }
                const g = ctx.createLinearGradient(0, 0, w, h);
                g.addColorStop(0, "#070d20");
                g.addColorStop(0.5, "#0d1c3d");
                g.addColorStop(1, "#1a0f33");
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, w, h);
                this.stars(ctx, w, h);
                return;
            }

            const g = ctx.createLinearGradient(0, 0, w, h);
            g.addColorStop(0, th.bgTop);
            g.addColorStop(1, th.bgBottom);
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);

            if (th.kind === "paper") {
                // тонкая диагональная фактура бумаги и мягкая виньетка
                ctx.strokeStyle = "rgba(138,106,60,0.07)";
                ctx.lineWidth = 1;
                for (let x = -h; x < w; x += 26) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x + h, h);
                    ctx.stroke();
                }
                const vg = ctx.createRadialGradient(w * 0.5, h * 0.45, h * 0.25, w * 0.5, h * 0.45, w * 0.72);
                vg.addColorStop(0, "rgba(255,255,255,0)");
                vg.addColorStop(1, "rgba(120,86,40,0.16)");
                ctx.fillStyle = vg;
                ctx.fillRect(0, 0, w, h);
                return;
            }

            if (th.kind === "sky") {
                // орбитальные дуги и солнце — отсылка к «Орбите-9»
                ctx.strokeStyle = "rgba(43,108,176,0.10)";
                ctx.lineWidth = 2;
                for (let i = 1; i <= 5; i++) {
                    ctx.beginPath();
                    ctx.arc(w * 0.84, h * 0.62, 110 + i * 90, Math.PI * 0.92, Math.PI * 1.92);
                    ctx.stroke();
                }
                const sun = ctx.createRadialGradient(w * 0.9, h * 0.14, 8, w * 0.9, h * 0.14, 300);
                sun.addColorStop(0, "rgba(255,236,180,0.6)");
                sun.addColorStop(1, "rgba(255,236,180,0)");
                ctx.fillStyle = sun;
                ctx.fillRect(0, 0, w, h);
                return;
            }

            // «Светлый»: мягкое свечение сверху слева и еле заметная сетка
            const glow = ctx.createRadialGradient(w * 0.22, h * 0.1, 20, w * 0.22, h * 0.1, w * 0.7);
            glow.addColorStop(0, "rgba(255,255,255,0.95)");
            glow.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "rgba(20,33,61,0.04)";
            ctx.lineWidth = 1;
            for (let y = 120; y < h - 100; y += 34) {
                ctx.beginPath();
                ctx.moveTo(90, y);
                ctx.lineTo(w - 90, y);
                ctx.stroke();
            }
        },

        // Еле заметный знак в свободной правой части светлых сертификатов:
        // заполняет пустоту, но не мешает печати и тексту.
        paintWatermark(ctx, w, h, th) {
            if (th.kind === "image") return;
            ctx.save();
            ctx.translate(w * 0.655, h * 0.575);
            ctx.strokeStyle = th.accent;
            // тонкие орбитальные кольца + контур звезды: заполняют пустоту,
            // но на печати выглядят как гильош, а не как клякса
            ctx.globalAlpha = 0.16;
            ctx.lineWidth = 1.4;
            [96, 138, 180].forEach((r, i) => {
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.stroke();
                if (i === 1) {
                    ctx.beginPath();
                    ctx.arc(0, 0, r, -0.5, 0.5);
                    ctx.stroke();
                }
            });
            ctx.globalAlpha = 0.13;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            for (let i = 0; i < 10; i++) {
                const rad = i % 2 === 0 ? 74 : 31;
                const ang = -Math.PI / 2 + (i * Math.PI) / 5;
                const px = Math.cos(ang) * rad, py = Math.sin(ang) * rad;
                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 0.09;
            ctx.lineWidth = 1;
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 24) {
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * 186, Math.sin(a) * 186);
                ctx.lineTo(Math.cos(a) * 198, Math.sin(a) * 198);
                ctx.stroke();
            }
            ctx.restore();
        },

        paintFrame(ctx, w, h, th) {
            ctx.strokeStyle = th.frame;
            ctx.lineWidth = 3;
            ctx.strokeRect(34, 34, w - 68, h - 68);
            ctx.strokeStyle = th.frameSoft;
            ctx.lineWidth = 1;
            ctx.strokeRect(46, 46, w - 92, h - 92);

            // золотые уголки рамки
            ctx.strokeStyle = th.frame;
            ctx.lineWidth = 4;
            const m = 34, l = 84;
            [[m, m, 1, 1], [w - m, m, -1, 1], [m, h - m, 1, -1], [w - m, h - m, -1, -1]].forEach(([x, y, dx, dy]) => {
                ctx.beginPath();
                ctx.moveTo(x + dx * l, y);
                ctx.lineTo(x, y);
                ctx.lineTo(x, y + dy * l);
                ctx.stroke();
            });
        },

        // Круглая печать: надпись по дуге сверху и снизу, звезда и номер класса
        // в центре. Наклонена, как настоящий штамп.
        paintSeal(ctx, x, y, r, th, gradeText) {
            const L = lang();
            const top = L === "en" ? "PHYSICS QUEST" : "ФИЗИКА-КВЕСТ";
            const bottom = L === "en" ? "EDUCATIONAL RPG · 7–9" : L === "kk" ? "БІЛІМ БЕРУ RPG · 7–9" : "ОБРАЗОВАТЕЛЬНАЯ RPG · 7–9";
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-0.18);
            if (th.kind === "image") {
                // на пёстром космическом фоне печать читается только на подложке
                const back = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 1.16);
                back.addColorStop(0, "rgba(7,12,26,0.72)");
                back.addColorStop(1, "rgba(7,12,26,0)");
                ctx.fillStyle = back;
                ctx.beginPath(); ctx.arc(0, 0, r * 1.16, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = th.sealAlpha == null ? 0.9 : th.sealAlpha;
            ctx.strokeStyle = th.seal;
            ctx.fillStyle = th.seal;

            ctx.lineWidth = 4;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
            ctx.lineWidth = 1.8;
            ctx.beginPath(); ctx.arc(0, 0, r - 8, 0, Math.PI * 2); ctx.stroke();
            ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.arc(0, 0, r - 42, 0, Math.PI * 2); ctx.stroke();

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "700 15px 'Trebuchet MS', Arial, sans-serif";
            this.arcText(ctx, top, r - 22, -Math.PI / 2, false);
            ctx.font = "600 12px 'Trebuchet MS', Arial, sans-serif";
            this.arcText(ctx, bottom, r - 22, Math.PI / 2, true);

            this.star(ctx, 0, -13, 16);
            ctx.fillStyle = th.seal;
            ctx.font = "700 17px Georgia, 'Times New Roman', serif";
            ctx.fillText(gradeText, 0, 16);
            ctx.restore();
        },

        arcText(ctx, text, radius, center, below) {
            const chars = [...String(text)];
            const widths = chars.map((c) => ctx.measureText(c).width);
            const total = widths.reduce((a, b) => a + b, 0) || 1;
            const span = total / radius;
            let a = below ? center + span / 2 : center - span / 2;
            chars.forEach((ch, i) => {
                const dA = widths[i] / radius;
                const mid = below ? a - dA / 2 : a + dA / 2;
                ctx.save();
                if (below) { ctx.rotate(mid - Math.PI / 2); ctx.translate(0, radius); }
                else { ctx.rotate(mid + Math.PI / 2); ctx.translate(0, -radius); }
                ctx.fillText(ch, 0, 0);
                ctx.restore();
                a += below ? -dA : dA;
            });
        },

        star(ctx, x, y, r) {
            ctx.beginPath();
            for (let i = 0; i < 10; i++) {
                const rad = i % 2 === 0 ? r : r * 0.45;
                const ang = -Math.PI / 2 + (i * Math.PI) / 5;
                const px = x + Math.cos(ang) * rad;
                const py = y + Math.sin(ang) * rad;
                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
        },

        draw() {
            const canvas = document.getElementById("pq-cert-canvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            this.canvas = canvas;
            const w = canvas.width, h = canvas.height;
            const mode = this.mode;
            const isAll = mode === "all";
            const grade = isAll ? 9 : Number(mode);
            const stats = isAll ? [7, 8, 9].map(gradeStats) : [gradeStats(grade)];
            const name = this.fullName();
            const th = this.designOf(this.design);
            const ink = th.text, sub = th.sub, accent = th.accent;

            const paint = (bg) => {
                this.paintBg(ctx, w, h, th, bg);
                this.paintWatermark(ctx, w, h, th);
                this.paintFrame(ctx, w, h, th);

                ctx.textAlign = "left";
                ctx.textBaseline = "alphabetic";
                ctx.fillStyle = sub;
                ctx.font = "600 20px 'Trebuchet MS', Arial, sans-serif";
                ctx.fillText(t("kicker"), 92, 108);

                ctx.fillStyle = accent;
                ctx.font = "700 30px Georgia, 'Times New Roman', serif";
                ctx.fillText(titles(isAll ? "all" : grade), 92, 168);

                ctx.fillStyle = ink;
                if (isAll) {
                    this.fitText(ctx, t("passport"), 92, 268, w - 500);
                } else {
                    ctx.font = "700 78px Georgia, 'Times New Roman', serif";
                    ctx.fillText(t("certificate"), 92, 268);
                }
                if (!isAll) {
                    ctx.font = "700 78px Georgia, 'Times New Roman', serif";
                    ctx.fillStyle = accent;
                    const w1 = ctx.measureText(t("certificate")).width;
                    ctx.fillText(t("pilot"), 92 + w1 + 22, 268);
                }

                ctx.fillStyle = sub;
                ctx.font = "400 24px 'Trebuchet MS', Arial, sans-serif";
                ctx.fillText(t("awarded"), 92, 318);

                ctx.fillStyle = ink;
                ctx.font = "700 66px Georgia, 'Times New Roman', serif";
                this.fitText(ctx, name, 92, 412, w - 260);
                ctx.strokeStyle = th.rule;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(92, 442);
                ctx.lineTo(w - 160, 442);
                ctx.stroke();

                if (isAll) {
                    let y = 520;
                    stats.forEach((s) => {
                        ctx.fillStyle = ink;
                        ctx.font = "700 30px 'Trebuchet MS', Arial, sans-serif";
                        ctx.fillText(`${s.grade} ${t("grade")} · ${s.rank}`, 92, y);
                        ctx.fillStyle = sub;
                        ctx.font = "400 24px 'Trebuchet MS', Arial, sans-serif";
                        ctx.fillText(`${t("levels")}: ${s.completed} / ${s.total}   ·   ${t("tasks")}: ${s.score}`, 92, y + 36);
                        this.progressBar(ctx, 92, y + 54, 520, 10, s.pct, accent, th.bar);
                        y += 118;
                    });
                } else {
                    const s = stats[0];
                    ctx.fillStyle = accent;
                    ctx.font = "700 34px 'Trebuchet MS', Arial, sans-serif";
                    ctx.fillText(`${s.grade} ${t("grade")} · ${s.rank}`, 92, 512);
                    ctx.fillStyle = ink;
                    ctx.font = "600 28px 'Trebuchet MS', Arial, sans-serif";
                    ctx.fillText(`${t("levels")}: ${s.completed} / ${s.total}`, 92, 566);
                    ctx.fillText(`${t("tasks")}: ${s.score}`, 92, 608);
                    this.progressBar(ctx, 92, 634, 560, 12, s.pct, accent, th.bar);
                }

                const acc = (() => { try { return window.PQAccount ? PQAccount.get() : null; } catch (_) { return null; } })();
                const code = (acc && acc.student && acc.student.studentCode) || "—";
                const mentor = (acc && acc.teacher && acc.teacher.name) || "";
                const date = formatDate(lang());

                ctx.fillStyle = sub;
                ctx.font = "400 22px 'Trebuchet MS', Arial, sans-serif";
                ctx.fillText(`${t("code")}: ${code}`, 92, h - 128);
                ctx.fillText(`${t("date")}: ${date}`, 92, h - 92);
                if (mentor) ctx.fillText(`${t("mentor")}: ${mentor}`, 92, h - 56);

                ctx.textAlign = "right";
                ctx.fillStyle = accent;
                ctx.font = "700 26px Georgia, 'Times New Roman', serif";
                ctx.fillText("Asteria · Equilibrium · Orbit-9", w - 120, h - 92);
                ctx.fillStyle = sub;
                ctx.font = "400 20px 'Trebuchet MS', Arial, sans-serif";
                ctx.fillText(t("trilogy"), w - 120, h - 60);
                ctx.textAlign = "left";

                this.paintSeal(ctx, w - 300, h - 300, 78, th, isAll ? "7–9" : String(grade));

                this._lastName = name;
                this._lastMode = mode;
            };

            if (th.kind === "image") this.ensureBg(mode).then((img) => paint(img)).catch(() => paint(null));
            else paint(null);
        },

        stars(ctx, w, h) {
            let seed = 7;
            const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
            for (let i = 0; i < 160; i++) {
                const x = rnd() * w, y = rnd() * h, r = rnd() * 1.8 + 0.3;
                ctx.fillStyle = `rgba(220,235,255,${0.15 + rnd() * 0.6})`;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
        },

        progressBar(ctx, x, y, w, h, pct, color, track) {
            ctx.fillStyle = track || "rgba(255,255,255,0.16)";
            this.roundRect(ctx, x, y, w, h, h / 2);
            ctx.fill();
            ctx.fillStyle = color;
            this.roundRect(ctx, x, y, Math.max(h, w * Math.max(0, Math.min(1, pct))), h, h / 2);
            ctx.fill();
        },

        roundRect(ctx, x, y, w, h, r) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
        },

        fitText(ctx, text, x, y, maxWidth) {
            let size = 66;
            ctx.font = `700 ${size}px Georgia, 'Times New Roman', serif`;
            while (ctx.measureText(text).width > maxWidth && size > 34) {
                size -= 2;
                ctx.font = `700 ${size}px Georgia, 'Times New Roman', serif`;
            }
            ctx.fillText(text, x, y);
        },

        download() {
            const canvas = this.canvas || document.getElementById("pq-cert-canvas");
            if (!canvas) return;
            try {
                const link = document.createElement("a");
                const mode = this.mode === "all" ? "trilogy" : this.mode;
                const safe = String(this._lastName || this.fullName()).replace(/[^\p{L}\p{N}]+/gu, "-").slice(0, 40);
                link.download = `physics-quest-certificate-${mode}-${safe}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
                this.toast(t("saved"));
            } catch (e) {
                this.toast("PNG: " + e.message);
            }
        },

        print() {
            const canvas = this.canvas || document.getElementById("pq-cert-canvas");
            if (!canvas) return;
            const data = canvas.toDataURL("image/png");
            const win = window.open("", "_blank");
            if (!win) return this.toast("Pop-up blocked");
            win.document.write(`<!DOCTYPE html><html><head><title>${esc(t("title"))}</title>
                <style>@page{size:A4 landscape;margin:0}body{margin:0;display:flex;align-items:center;justify-content:center;background:#fff}img{width:100%;height:auto}</style>
                </head><body><img src="${data}" onload="setTimeout(function(){window.print()},250)"></body></html>`);
            win.document.close();
        },

        toast(text) {
            if (typeof showNotification === "function") {
                try { showNotification(text, "success"); return; } catch (_) {}
            }
        }
    };

    window.PQCertificate = Certificate;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(() => Certificate.init(), 800));
    } else {
        setTimeout(() => Certificate.init(), 800);
    }
})();
