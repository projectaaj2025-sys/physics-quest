/* ===== ЕДИНЫЙ АККАУНТ УЧЕНИКА И УЧИТЕЛЯ + СКВОЗНАЯ ПАНЕЛЬ (7–9 КЛАССЫ) =====
   • Единый постоянный короткий 4-символьный код ученика (напр. K7M2) для всех 3 игр
   • Однократный стартовый экран выбора аккаунта (Ученик / Учитель)
   • Вход для учителя (имя + ПИН)
   • Кабинет учителя остаётся открытым и для учеников (по требованию автора) */

(function () {
    const ACCOUNT_KEY = "physicsquest_account_v1";
    const GLOBAL_SETTINGS_KEY = "physicsquest_global_settings";
    const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    const ACC_I18N = {
        ru: {
            kicker: "ЕДИНЫЙ ПРОФИЛЬ · ФИЗИКА-КВЕСТ 7–9",
            titleWelcome: "Добро пожаловать в «Физика-Квест»!",
            titleManage: "Аккаунт ученика и учителя",
            sub: "Выбери роль один раз: твой профиль и короткий код будут едиными во всех играх 7, 8 и 9 классов.",
            roleStudent: "🎒 Ученик",
            roleTeacher: "👩‍🏫 Учитель",
            studentNameLabel: "Имя и фамилия ученика",
            studentNamePh: "Например: Алия Серикова",
            gradeLabel: "Параллель",
            grade7: "7 класс",
            grade8: "8 класс",
            grade9: "9 класс",
            classLabel: "Класс (по желанию)",
            classPh: "Напр.: 7А, 8Б, 9В",
            permCodeTitle: "Постоянный короткий код ученика (единый для 7–9 кл.):",
            copyBtn: "📋 Скопировать",
            copiedBtn: "✓ Скопировано!",
            permCodeNote: "Запомни или передай эти 4 символа учителю — по ним твои результаты в 7, 8 и 9 классах всегда определяются точно, даже при одинаковых именах.",
            haveCodeLink: "У меня уже есть свой короткий код (ввести вручную)",
            enterCodeLabel: "Введи свой существующий код ученика (4–6 символов):",
            enterCodePh: "Напр.: K7M2",
            applyCodeBtn: "Применить",
            studentSaveBtn: "Сохранить и продолжить →",
            teacherNameLabel: "ФИО / Имя учителя",
            teacherNamePh: "Например: Богомолова Дарья",
            teacherPinCreateLabel: "Придумайте ПИН-код учителя (минимум 4 символа)",
            teacherPinEnterLabel: "Введите ПИН-код учителя",
            teacherPinPh: "Например: 2026",
            teacherPinHintNew: "ПИН сохраняется в браузере этого устройства для быстрого входа учителя.",
            teacherPinHintExisting: "Введите установленный ранее ПИН-код учителя.",
            teacherResetPin: "Сбросить ПИН на этом устройстве",
            teacherResetConfirm: "Сбросить сохранённый ПИН учителя на этом устройстве? Данные журнала и классов НЕ удалятся.",
            teacherSaveBtn: "Войти как учитель →",
            errStudentName: "Пожалуйста, укажи имя ученика.",
            errBadCode: "Код ученика должен содержать 4–6 латинских букв или цифр (например, K7M2).",
            errTeacherName: "Пожалуйста, укажите имя учителя.",
            errPinShort: "ПИН должен содержать минимум 4 символа.",
            errPinWrong: "Неверный ПИН-код учителя. Проверьте ввод или сбросьте ПИН ниже.",
            portalBtn: "Портал 7–9",
            gradeShort7: "7 кл.",
            gradeShort8: "8 кл.",
            gradeShort9: "9 кл.",
            teacherBadge: "Учитель",
            studentFallback: "Ученик",
            teacherCabinetShort: "Журнал 7–9"
        },
        kk: {
            kicker: "БІРЫҢҒАЙ ПРОФИЛЬ · ФИЗИКА-КВЕСТ 7–9",
            titleWelcome: "«Физика-Квест» сериясына қош келдің!",
            titleManage: "Оқушы мен мұғалім аккаунты",
            sub: "Рөлді бір рет таңда: профилің мен қысқа кодың 7, 8 және 9-сынып ойындарының барлығында ортақ болады.",
            roleStudent: "🎒 Оқушы",
            roleTeacher: "👩‍🏫 Мұғалім",
            studentNameLabel: "Оқушының аты-жөні",
            studentNamePh: "Мысалы: Әлия Серікова",
            gradeLabel: "Параллель",
            grade7: "7-сынып",
            grade8: "8-сынып",
            grade9: "9-сынып",
            classLabel: "Сыныбы (қалауы бойынша)",
            classPh: "Мыс.: 7А, 8Б, 9В",
            permCodeTitle: "Оқушының тұрақты қысқа коды (7–9 сыныпқа ортақ):",
            copyBtn: "📋 Көшіру",
            copiedBtn: "✓ Көшірілді!",
            permCodeNote: "Осы 4 таңбаны сақтап ал немесе мұғалімге айт — есімдер бірдей болса да, 7, 8 және 9-сыныптағы барлық нәтижелерің дәл сәйкестендіріледі.",
            haveCodeLink: "Менде дайын қысқа код бар (қолмен енгізу)",
            enterCodeLabel: "Бар оқушы кодын енгіз (4–6 таңба):",
            enterCodePh: "Мыс.: K7M2",
            applyCodeBtn: "Қолдану",
            studentSaveBtn: "Сақтау және жалғастыру →",
            teacherNameLabel: "Мұғалімнің аты-жөні",
            teacherNamePh: "Мысалы: Богомолова Дарья",
            teacherPinCreateLabel: "Мұғалім ПИН-кодын ойлап табыңыз (кемінде 4 таңба)",
            teacherPinEnterLabel: "Мұғалім ПИН-кодын енгізіңіз",
            teacherPinPh: "Мысалы: 2026",
            teacherPinHintNew: "ПИН осы құрылғыда мұғалімнің жылдам кіруі үшін сақталады.",
            teacherPinHintExisting: "Бұрын орнатылған мұғалім ПИН-кодын енгізіңіз.",
            teacherResetPin: "Осы құрылғыдағы ПИН-ді қалпына келтіру",
            teacherResetConfirm: "Мұғалімнің сақталған ПИН-кодын өшіру керек пе? Журнал мен сынып деректері ӨШІРІЛМЕЙДІ.",
            teacherSaveBtn: "Мұғалім ретінде кіру →",
            errStudentName: "Оқушының атын көрсетіңіз.",
            errBadCode: "Оқушы коды 4–6 латын әрпінен немесе цифрдан тұруы керек (мысалы, K7M2).",
            errTeacherName: "Мұғалімнің аты-жөнін көрсетіңіз.",
            errPinShort: "ПИН кемінде 4 таңбадан тұруы керек.",
            errPinWrong: "ПИН-код қате. Қайта тексеріңіз немесе төменнен қалпына келтіріңіз.",
            portalBtn: "Портал 7–9",
            gradeShort7: "7-сын.",
            gradeShort8: "8-сын.",
            gradeShort9: "9-сын.",
            teacherBadge: "Мұғалім",
            studentFallback: "Оқушы",
            teacherCabinetShort: "Журнал 7–9"
        },
        en: {
            kicker: "UNIFIED PROFILE · PHYSICS QUEST 7–9",
            titleWelcome: "Welcome to Physics Quest!",
            titleManage: "Student & Teacher Account",
            sub: "Choose your role once: your profile and short permanent code work across all Grade 7, 8, and 9 games.",
            roleStudent: "🎒 Student",
            roleTeacher: "👩‍🏫 Teacher",
            studentNameLabel: "Student full name",
            studentNamePh: "e.g., Aliya Serikova",
            gradeLabel: "Grade",
            grade7: "Grade 7",
            grade8: "Grade 8",
            grade9: "Grade 9",
            classLabel: "Class (optional)",
            classPh: "e.g., 7A, 8B, 9C",
            permCodeTitle: "Permanent short student code (shared across Grades 7–9):",
            copyBtn: "📋 Copy",
            copiedBtn: "✓ Copied!",
            permCodeNote: "Share these 4 characters with your teacher — all your results across Grades 7, 8, and 9 are matched accurately even if names repeat.",
            haveCodeLink: "I already have a short student code (enter manually)",
            enterCodeLabel: "Enter your existing student code (4–6 chars):",
            enterCodePh: "e.g., K7M2",
            applyCodeBtn: "Apply",
            studentSaveBtn: "Save & continue →",
            teacherNameLabel: "Teacher name",
            teacherNamePh: "e.g., Darya Bogomolova",
            teacherPinCreateLabel: "Create a Teacher PIN (at least 4 chars)",
            teacherPinEnterLabel: "Enter Teacher PIN",
            teacherPinPh: "e.g., 2026",
            teacherPinHintNew: "Saved in this browser for quick teacher sign-in.",
            teacherPinHintExisting: "Enter the Teacher PIN previously set on this device.",
            teacherResetPin: "Reset PIN on this device",
            teacherResetConfirm: "Reset saved Teacher PIN on this device? Class lists and results will NOT be deleted.",
            teacherSaveBtn: "Sign in as Teacher →",
            errStudentName: "Please enter the student's name.",
            errBadCode: "Student code must be 4–6 Latin letters or digits (e.g., K7M2).",
            errTeacherName: "Please enter the teacher's name.",
            errPinShort: "PIN must be at least 4 characters.",
            errPinWrong: "Incorrect Teacher PIN. Check your input or reset PIN below.",
            portalBtn: "Portal 7–9",
            gradeShort7: "Gr. 7",
            gradeShort8: "Gr. 8",
            gradeShort9: "Gr. 9",
            teacherBadge: "Teacher",
            studentFallback: "Student",
            teacherCabinetShort: "Journal 7–9"
        }
    };

    function safeJsonLoad(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (_) {
            return fallback;
        }
    }

    function safeJsonSave(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (_) {}
    }

    function generateShortCode(len = 4) {
        let code = "";
        for (let i = 0; i < len; i++) {
            code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
        }
        return code;
    }

    function normalizeShortCode(raw) {
        return String(raw || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    }

    function makePlayerId() {
        return "player_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
    }

    function readLegacySettings() {
        const sGlobal = safeJsonLoad(GLOBAL_SETTINGS_KEY, null);
        if (sGlobal && typeof sGlobal === "object") return sGlobal;
        const s8 = safeJsonLoad("physicsquest8_settings", null);
        if (s8 && typeof s8 === "object") return s8;
        const s7 = safeJsonLoad("physicsquest_settings", null);
        if (s7 && typeof s7 === "object") return s7;
        return null;
    }

    function ensureAccount() {
        const saved = safeJsonLoad(ACCOUNT_KEY, null);
        const legacy = readLegacySettings() || {};
        const defaultLang = (saved && saved.language) || legacy.language || "ru";
        // Если раньше был 5-символьный Pxxxx код — сохраняем совместимость, иначе генерируем сверхкороткий 4-символьный код!
        const legacyCode = normalizeShortCode(legacy.playerCode);
        const studentCode = normalizeShortCode(saved && saved.student && saved.student.studentCode)
            || (legacyCode.length >= 4 ? legacyCode : generateShortCode(4));
        const playerId = (saved && saved.student && saved.student.playerId) || legacy.playerId || makePlayerId();
        const studentName = String((saved && saved.student && saved.student.name) ?? legacy.playerName ?? "").trim();

        const acc = {
            onboarded: !!(saved && saved.onboarded),
            role: (saved && saved.role === "teacher") ? "teacher" : "student",
            language: ["ru", "kk", "en"].includes(defaultLang) ? defaultLang : "ru",
            student: {
                name: studentName,
                studentCode,
                playerId,
                grade: Number((saved && saved.student && saved.student.grade) || window.CURRENT_GRADE || 8),
                className: String((saved && saved.student && saved.student.className) || "").trim()
            },
            teacher: {
                name: String((saved && saved.teacher && saved.teacher.name) || "").trim(),
                pin: String((saved && saved.teacher && saved.teacher.pin) || ""),
                loggedIn: !!(saved && saved.teacher && saved.teacher.loggedIn)
            }
        };
        // Вход по QR-коду с распечатанной карточки ученика:
        // play.html?grade=8&code=K7M2&name=Айдана  (или #s=K7M2~Айдана)
        try {
            const params = new URLSearchParams(window.location.search);
            let linkCode = String(params.get("code") || "").trim();
            let linkName = String(params.get("name") || "").trim();
            const hashMatch = String(window.location.hash || "").match(/[#&]s=([A-Za-z0-9]{4,6})(?:~([^&]*))?/);
            if (!linkCode && hashMatch) {
                linkCode = hashMatch[1];
                linkName = decodeURIComponent(hashMatch[2] || "");
            }
            linkCode = normalizeShortCode(linkCode);
            if (linkCode.length >= 4 && !(saved && saved.onboarded)) {
                const gParam = Number(params.get("grade"));
                acc.student.studentCode = linkCode;
                if (linkName) acc.student.name = linkName.slice(0, 60);
                if ([7, 8, 9].includes(gParam)) acc.student.grade = gParam;
                acc.onboarded = true;
                acc.role = "student";
                if (window.history && history.replaceState) {
                    const keep = [7, 8, 9].includes(gParam) ? "?grade=" + gParam : location.pathname;
                    history.replaceState(null, "", keep);
                }
            }
        } catch (_) {}

        safeJsonSave(ACCOUNT_KEY, acc);
        return acc;
    }

    function syncAccountToGameSettings(acc) {
        const existing = safeJsonLoad(GLOBAL_SETTINGS_KEY, {}) || {};
        const nextSettings = {
            ...existing,
            language: acc.language || existing.language || "ru",
            playerName: acc.role === "teacher" && !acc.student.name ? acc.teacher.name : acc.student.name,
            playerId: acc.student.playerId,
            playerCode: acc.student.studentCode
        };
        safeJsonSave(GLOBAL_SETTINGS_KEY, nextSettings);
        // Поддерживаем синхронизацию и если открыта игра
        if (typeof Storage !== "undefined" && typeof Storage.setSettings === "function") {
            try {
                Storage.setSettings({
                    language: nextSettings.language,
                    playerName: nextSettings.playerName,
                    playerId: nextSettings.playerId,
                    playerCode: nextSettings.playerCode
                });
            } catch (_) {}
        }
        const profName = document.getElementById("profile-name");
        if (profName) profName.value = nextSettings.playerName || "";
        const profId = document.getElementById("profile-player-id");
        if (profId) profId.value = acc.student.studentCode;
    }

    const PQAccount = {
        CODE_ALPHABET,
        generateShortCode,
        normalizeShortCode,
        get() {
            return ensureAccount();
        },
        save(acc) {
            safeJsonSave(ACCOUNT_KEY, acc);
            syncAccountToGameSettings(acc);
            this.refreshTopbar();
            window.dispatchEvent(new CustomEvent("pq:account-changed", { detail: acc }));
            return acc;
        },
        getLang() {
            if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
            return this.get().language || "ru";
        },
        t(key) {
            const L = this.getLang();
            return (ACC_I18N[L] && ACC_I18N[L][key]) || ACC_I18N.ru[key] || key;
        },
        setLanguage(lang) {
            if (!["ru", "kk", "en"].includes(lang)) return;
            const acc = this.get();
            acc.language = lang;
            safeJsonSave(ACCOUNT_KEY, acc);
            syncAccountToGameSettings(acc);
            if (typeof I18n !== "undefined" && I18n.currentLang !== lang) {
                try { I18n.setLanguage(lang); } catch (_) {}
            }
            this.refreshTopbar();
            window.dispatchEvent(new CustomEvent("pq:lang-changed", { detail: lang }));
        },
        updateStudentNameAndSync(name) {
            const acc = this.get();
            acc.student.name = String(name || "").trim();
            safeJsonSave(ACCOUNT_KEY, acc);
            this.refreshTopbar();
        },
        openModal(opts = {}) {
            const forceOnboarding = !!opts.onboarding;
            const initialRole = opts.role || this.get().role || "student";
            this._mountModal(forceOnboarding, initialRole, opts.onComplete || null);
        },
        maybeShowOnboarding(opts = {}) {
            const acc = this.get();
            syncAccountToGameSettings(acc);
            if (!acc.onboarded) {
                this.openModal({ onboarding: true, onComplete: opts.onComplete || null });
                return true;
            }
            return false;
        },
        _mountModal(isOnboarding, activeRole, onComplete) {
            let backdrop = document.getElementById("pq-account-modal");
            if (!backdrop) {
                backdrop = document.createElement("div");
                backdrop.id = "pq-account-modal";
                backdrop.className = "pq-acc-backdrop";
                document.body.appendChild(backdrop);
            }
            const state = {
                role: activeRole === "teacher" ? "teacher" : "student",
                showCustomCode: false,
                error: ""
            };

            const render = () => {
                const acc = this.get();
                const L = this.getLang();
                const hasExistingPin = !!acc.teacher.pin;
                backdrop.innerHTML = `
                    <div class="pq-acc-card" role="dialog" aria-modal="true" aria-labelledby="pq-acc-heading">
                        <div class="pq-acc-head">
                            <span class="pq-acc-kicker">${this.t("kicker")}</span>
                            <div style="display:flex;align-items:center;gap:8px;">
                                <div class="pq-acc-langs" role="group" aria-label="Language">
                                    <button type="button" data-acc-lang="ru" class="${L === "ru" ? "active" : ""}">RU</button>
                                    <button type="button" data-acc-lang="kk" class="${L === "kk" ? "active" : ""}">ҚАЗ</button>
                                    <button type="button" data-acc-lang="en" class="${L === "en" ? "active" : ""}">EN</button>
                                </div>
                                ${!isOnboarding ? `<button type="button" class="pq-acc-close" id="pq-acc-close" aria-label="Close">✕</button>` : ""}
                            </div>
                        </div>
                        <h2 class="pq-acc-title" id="pq-acc-heading">${isOnboarding ? this.t("titleWelcome") : this.t("titleManage")}</h2>
                        <p class="pq-acc-sub">${this.t("sub")}</p>

                        <div class="pq-role-tabs" role="tablist">
                            <button type="button" class="pq-role-tab ${state.role === "student" ? "active" : ""}" data-role="student">
                                ${this.t("roleStudent")}
                            </button>
                            <button type="button" class="pq-role-tab ${state.role === "teacher" ? "active" : ""}" data-role="teacher">
                                ${this.t("roleTeacher")}
                            </button>
                        </div>

                        <div class="pq-acc-error ${state.error ? "show" : ""}" id="pq-acc-err">${state.error}</div>

                        ${state.role === "student" ? `
                            <form id="pq-student-form" novalidate>
                                <div class="pq-acc-field">
                                    <label for="pq-st-name">${this.t("studentNameLabel")}</label>
                                    <input class="pq-acc-input" id="pq-st-name" type="text" maxlength="50"
                                        placeholder="${this.t("studentNamePh")}"
                                        value="${escapeAttr(acc.student.name)}" autocomplete="name">
                                </div>
                                <div class="pq-acc-row">
                                    <div class="pq-acc-field">
                                        <label for="pq-st-grade">${this.t("gradeLabel")}</label>
                                        <select class="pq-acc-input" id="pq-st-grade">
                                            <option value="7" ${acc.student.grade === 7 ? "selected" : ""}>${this.t("grade7")}</option>
                                            <option value="8" ${acc.student.grade === 8 ? "selected" : ""}>${this.t("grade8")}</option>
                                            <option value="9" ${acc.student.grade === 9 ? "selected" : ""}>${this.t("grade9")}</option>
                                        </select>
                                    </div>
                                    <div class="pq-acc-field">
                                        <label for="pq-st-class">${this.t("classLabel")}</label>
                                        <input class="pq-acc-input" id="pq-st-class" type="text" maxlength="12"
                                            placeholder="${this.t("classPh")}"
                                            value="${escapeAttr(acc.student.className)}">
                                    </div>
                                </div>

                                <div class="pq-code-box">
                                    <div style="font-size:12px;font-weight:800;color:#0b4f5c;margin-bottom:7px;">
                                        ${this.t("permCodeTitle")}
                                    </div>
                                    <div class="pq-code-box-top">
                                        <span class="pq-code-big" id="pq-st-code-display">${escapeAttr(acc.student.studentCode)}</span>
                                        <button type="button" class="pq-code-copy" id="pq-st-copy">${this.t("copyBtn")}</button>
                                    </div>
                                    <p class="pq-code-note">${this.t("permCodeNote")}</p>
                                    ${!state.showCustomCode ? `
                                        <button type="button" class="pq-code-custom-toggle" id="pq-st-have-code">${this.t("haveCodeLink")}</button>
                                    ` : `
                                        <div style="margin-top:10px;display:flex;gap:8px;align-items:center;">
                                            <input class="pq-acc-input" id="pq-st-custom-code" type="text" maxlength="6"
                                                style="text-transform:uppercase;font-family:monospace;font-weight:900;letter-spacing:0.12em;"
                                                placeholder="${this.t("enterCodePh")}" value="${escapeAttr(acc.student.studentCode)}">
                                            <button type="button" class="pq-code-copy" id="pq-st-apply-code" style="white-space:nowrap;padding:11px 14px;">${this.t("applyCodeBtn")}</button>
                                        </div>
                                    `}
                                </div>

                                <button type="submit" class="pq-acc-submit">${this.t("studentSaveBtn")}</button>
                            </form>
                        ` : `
                            <form id="pq-teacher-form" novalidate>
                                <div class="pq-acc-field">
                                    <label for="pq-tc-name">${this.t("teacherNameLabel")}</label>
                                    <input class="pq-acc-input" id="pq-tc-name" type="text" maxlength="60"
                                        placeholder="${this.t("teacherNamePh")}"
                                        value="${escapeAttr(acc.teacher.name)}" autocomplete="name">
                                </div>
                                <div class="pq-acc-field">
                                    <label for="pq-tc-pin">${hasExistingPin ? this.t("teacherPinEnterLabel") : this.t("teacherPinCreateLabel")}</label>
                                    <input class="pq-acc-input" id="pq-tc-pin" type="password" maxlength="24"
                                        placeholder="${this.t("teacherPinPh")}" value="">
                                    <small style="display:block;margin-top:5px;font-size:12px;color:#5b6d88;">
                                        ${hasExistingPin ? this.t("teacherPinHintExisting") : this.t("teacherPinHintNew")}
                                    </small>
                                </div>
                                <button type="submit" class="pq-acc-submit teacher-btn">${this.t("teacherSaveBtn")}</button>
                                ${hasExistingPin ? `
                                    <div class="pq-acc-foot">
                                        <button type="button" class="pq-acc-link" id="pq-tc-reset-pin">${this.t("teacherResetPin")}</button>
                                    </div>
                                ` : ""}
                            </form>
                        `}
                    </div>
                `;

                backdrop.querySelectorAll("[data-acc-lang]").forEach(btn => {
                    btn.addEventListener("click", () => {
                        this.setLanguage(btn.dataset.accLang);
                        render();
                    });
                });

                backdrop.querySelectorAll(".pq-role-tab").forEach(tab => {
                    tab.addEventListener("click", () => {
                        state.role = tab.dataset.role;
                        state.error = "";
                        render();
                    });
                });

                backdrop.querySelector("#pq-acc-close")?.addEventListener("click", () => {
                    backdrop.classList.remove("open");
                });

                backdrop.querySelector("#pq-st-copy")?.addEventListener("click", (e) => {
                    const code = this.get().student.studentCode;
                    copyText(code);
                    e.currentTarget.textContent = this.t("copiedBtn");
                    setTimeout(() => {
                        if (e.currentTarget) e.currentTarget.textContent = this.t("copyBtn");
                    }, 1500);
                });

                backdrop.querySelector("#pq-st-have-code")?.addEventListener("click", () => {
                    state.showCustomCode = true;
                    render();
                });

                backdrop.querySelector("#pq-st-apply-code")?.addEventListener("click", () => {
                    const inp = backdrop.querySelector("#pq-st-custom-code");
                    const cleaned = normalizeShortCode(inp ? inp.value : "");
                    if (cleaned.length < 4 || cleaned.length > 6) {
                        state.error = this.t("errBadCode");
                        render();
                        return;
                    }
                    const cur = this.get();
                    // Сохраняем введённые поля формы перед перерисовкой
                    const nameVal = backdrop.querySelector("#pq-st-name")?.value;
                    if (nameVal !== undefined) cur.student.name = nameVal.trim();
                    cur.student.studentCode = cleaned;
                    safeJsonSave(ACCOUNT_KEY, cur);
                    state.showCustomCode = false;
                    state.error = "";
                    render();
                });

                backdrop.querySelector("#pq-student-form")?.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const name = String(backdrop.querySelector("#pq-st-name")?.value || "").trim();
                    const grade = Number(backdrop.querySelector("#pq-st-grade")?.value || 8);
                    const className = String(backdrop.querySelector("#pq-st-class")?.value || "").trim();
                    const customInp = backdrop.querySelector("#pq-st-custom-code");
                    if (!name) {
                        state.error = this.t("errStudentName");
                        render();
                        backdrop.querySelector("#pq-st-name")?.focus();
                        return;
                    }
                    const cur = this.get();
                    if (customInp) {
                        const cleaned = normalizeShortCode(customInp.value);
                        if (cleaned.length < 4 || cleaned.length > 6) {
                            state.error = this.t("errBadCode");
                            render();
                            return;
                        }
                        cur.student.studentCode = cleaned;
                    }
                    cur.onboarded = true;
                    cur.role = "student";
                    cur.student.name = name;
                    cur.student.grade = [7, 8, 9].includes(grade) ? grade : 8;
                    cur.student.className = className;
                    this.save(cur);
                    backdrop.classList.remove("open");
                    if (typeof onComplete === "function") onComplete(cur);
                });

                backdrop.querySelector("#pq-teacher-form")?.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const name = String(backdrop.querySelector("#pq-tc-name")?.value || "").trim();
                    const pin = String(backdrop.querySelector("#pq-tc-pin")?.value || "").trim();
                    const cur = this.get();
                    if (!name) {
                        state.error = this.t("errTeacherName");
                        render();
                        backdrop.querySelector("#pq-tc-name")?.focus();
                        return;
                    }
                    if (!cur.teacher.pin) {
                        if (pin.length < 4) {
                            state.error = this.t("errPinShort");
                            render();
                            backdrop.querySelector("#pq-tc-pin")?.focus();
                            return;
                        }
                        cur.teacher.pin = pin;
                    } else if (pin !== cur.teacher.pin) {
                        state.error = this.t("errPinWrong");
                        render();
                        backdrop.querySelector("#pq-tc-pin")?.focus();
                        return;
                    }
                    cur.onboarded = true;
                    cur.role = "teacher";
                    cur.teacher.name = name;
                    cur.teacher.loggedIn = true;
                    this.save(cur);
                    backdrop.classList.remove("open");
                    if (typeof onComplete === "function") onComplete(cur);
                });

                backdrop.querySelector("#pq-tc-reset-pin")?.addEventListener("click", () => {
                    if (!window.confirm(this.t("teacherResetConfirm"))) return;
                    const cur = this.get();
                    cur.teacher.pin = "";
                    cur.teacher.loggedIn = false;
                    safeJsonSave(ACCOUNT_KEY, cur);
                    state.error = "";
                    render();
                });
            };

            render();
            backdrop.classList.add("open");
            backdrop.onclick = (e) => {
                if (!isOnboarding && e.target === backdrop) backdrop.classList.remove("open");
            };
        },

        mountTopbar(currentGrade) {
            if (document.getElementById("pq-topbar")) {
                this.refreshTopbar(currentGrade);
                return;
            }
            document.body.classList.add("pq-has-topbar");
            const bar = document.createElement("header");
            bar.id = "pq-topbar";
            bar.className = "pq-topbar";
            document.body.prepend(bar);
            this.refreshTopbar(currentGrade);

            // Автоматически скрывать шапку на время активного аркадного экрана боя (#game-screen.active)
            const syncGameScreen = () => {
                const gs = document.getElementById("game-screen");
                document.body.classList.toggle("pq-in-gameplay", !!(gs && gs.classList.contains("active")));
            };
            syncGameScreen();
            const gs = document.getElementById("game-screen");
            if (gs && typeof MutationObserver !== "undefined") {
                new MutationObserver(syncGameScreen).observe(gs, { attributes: true, attributeFilter: ["class"] });
            }
        },

        refreshTopbar(gradeOverride) {
            const bar = document.getElementById("pq-topbar");
            if (!bar) return;
            const g = Number(gradeOverride || window.CURRENT_GRADE || 8);
            const acc = this.get();
            const isTeacher = acc.role === "teacher";
            const dispName = isTeacher
                ? (acc.teacher.name || this.t("teacherBadge"))
                : (acc.student.name || this.t("studentFallback"));

            bar.innerHTML = `
                <div class="pq-topbar-left">
                    <a class="pq-portal-link" href="./index.html" title="${escapeAttr(this.t("portalBtn"))}">
                        <span>🏠</span>
                        <span class="pq-portal-txt">${escapeHtmlText(this.t("portalBtn"))}</span>
                    </a>
                </div>
                <nav class="pq-topbar-center" aria-label="Grade switcher">
                    <div class="pq-grade-switcher">
                        <a class="pq-grade-pill ${g === 7 ? "active" : ""}" data-g="7" href="./play.html?grade=7">${escapeHtmlText(this.t("gradeShort7"))}</a>
                        <a class="pq-grade-pill ${g === 8 ? "active" : ""}" data-g="8" href="./play.html?grade=8">${escapeHtmlText(this.t("gradeShort8"))}</a>
                        <a class="pq-grade-pill ${g === 9 ? "active" : ""}" data-g="9" href="./play.html?grade=9">${escapeHtmlText(this.t("gradeShort9"))}</a>
                    </div>
                </nav>
                <div class="pq-topbar-right">
                    <button type="button" class="pq-account-btn ${isTeacher ? "is-teacher" : ""}" id="pq-open-account-btn">
                        <span>${isTeacher ? "👩‍🏫" : "🎒"}</span>
                        <span class="pq-account-name">${escapeHtmlText(dispName)}</span>
                        ${!isTeacher ? `<span class="pq-code-tag">${escapeHtmlText(acc.student.studentCode)}</span>` : ""}
                    </button>
                </div>
            `;

            bar.querySelector("#pq-open-account-btn")?.addEventListener("click", () => {
                this.openModal({ onboarding: false });
            });
        }
    };

    function escapeHtmlText(str) {
        return String(str == null ? "" : str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function escapeAttr(str) {
        return escapeHtmlText(str).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }

    function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (_) {}
        ta.remove();
    }

    window.PQAccount = PQAccount;
})();
