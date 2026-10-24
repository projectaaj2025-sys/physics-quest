/* ===== js/i18n.js ===== */
/* ============================================
   I18N — Модуль интернационализации
   ============================================ */

const I18n = {
    currentLang: "ru",

    init() {
        if (window.GRADE_LOCALES_PATCH && typeof LOCALES !== "undefined") {
            for (const lang of ["ru", "en", "kk"]) {
                if (LOCALES[lang] && window.GRADE_LOCALES_PATCH[lang]) {
                    Object.assign(LOCALES[lang], window.GRADE_LOCALES_PATCH[lang]);
                }
            }
        }
        const settings = Storage.getSettings();
        this.currentLang = settings.language || "ru";
        document.documentElement.lang = this.currentLang;
        document.documentElement.setAttribute("data-lang", this.currentLang);
        this.apply();
    },

    setLanguage(lang) {
        if (!LOCALES[lang]) return;
        this.currentLang = lang;
        Storage.setSettings({ ...Storage.getSettings(), language: lang });
        if (window.PQAccount) {
            const acc = window.PQAccount.get();
            if (acc.language !== lang) {
                acc.language = lang;
                window.PQAccount.save(acc);
            } else {
                window.PQAccount.refreshTopbar();
            }
        }
        document.documentElement.lang = lang;
        document.documentElement.setAttribute("data-lang", lang);
        this.apply();
        this.emitLangChange(lang);
    },

    // Единое событие смены языка: слушатели исторически подписаны и на document, и на window,
    // поэтому оповещаем оба объекта — иначе часть кнопок оставалась на прежнем языке.
    emitLangChange(lang) {
        const detail = { detail: { lang } };
        ["pq:lang-changed", "pq-lang-change"].forEach((name) => {
            try { document.dispatchEvent(new CustomEvent(name, detail)); } catch (e) {}
            try { window.dispatchEvent(new CustomEvent(name, detail)); } catch (e) {}
        });
    },

    t(key, ...args) {
        const dict = LOCALES[this.currentLang] || LOCALES.ru;
        let text = dict[key];
        if (text === undefined) {
            // Fallback на русский
            text = LOCALES.ru[key] || key;
        }
        if (args.length > 0) {
            args.forEach((arg, i) => {
                text = text.replace(`{${i}}`, arg);
            });
        }
        return text;
    },

    // Применить переводы ко всем элементам с data-i18n
    apply() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = this.t(key);
        });
        // Placeholder'ы
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            el.placeholder = this.t(key);
        });
        // Активная кнопка языка
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === this.currentLang);
        });
        if (window.GRADE_META) {
            const L = this.currentLang || "ru";
            const t2 = document.querySelector(".game-title .title-line2");
            if (t2 && window.GRADE_META.titleLine2) t2.textContent = window.GRADE_META.titleLine2[L] || window.GRADE_META.titleLine2.ru;
            const sub = document.querySelector(".menu-subtitle");
            if (sub && window.GRADE_META.subtitle) sub.textContent = window.GRADE_META.subtitle[L] || window.GRADE_META.subtitle.ru;
            document.title = "Физика-Квест · " + (window.GRADE_META.titleLine2[L] || window.GRADE_META.titleLine2.ru);
        }
    },

    // Локализованное содержимое задания (вопрос, опции, объяснение)
    getLocalized(task, field, fallback = "") {
        if (!task[field]) return fallback;
        if (typeof task[field] === "string") return task[field];
        return task[field][this.currentLang] ||
               task[field].ru ||
               task[field].en ||
               task[field].kk ||
               fallback;
    },

    // Получить массив локализованных строк (для options, left, right)
    getLocalizedArray(task, field) {
        if (!task[field]) return [];
        const data = task[field];
        if (Array.isArray(data)) return data;
        return data[this.currentLang] || data.ru || data.en || data.kk || [];
    }
};


