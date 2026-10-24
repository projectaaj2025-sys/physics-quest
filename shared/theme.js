/* ============================================================
   PQ THEME — светлая тема по умолчанию + переключатель на тёмную
   Тема хранится в localStorage("pq-theme") и применяется
   атрибутом data-theme на <html>.
   ============================================================ */
(function () {
    "use strict";

    var KEY = "pq-theme";
    var DEFAULT = "light";
    var META_COLOR = { light: "#eef4fb", dark: "#081121" };

    var TEXT = {
        ru: { toDark: "🌙 Тёмная", toLight: "☀️ Светлая", label: "Тема оформления", title: "Переключить тему" },
        kk: { toDark: "🌙 Қараңғы", toLight: "☀️ Ашық", label: "Безендіру тақырыбы", title: "Тақырыпты ауыстыру" },
        en: { toDark: "🌙 Dark", toLight: "☀️ Light", label: "Theme", title: "Switch theme" }
    };

    function lang() {
        try {
            if (window.I18n && I18n.currentLang) return I18n.currentLang;
            var l = localStorage.getItem("pq_lang");
            if (l && TEXT[l]) return l;
        } catch (e) {}
        var html = document.documentElement.getAttribute("lang");
        return TEXT[html] ? html : "ru";
    }

    function t(key) {
        var d = TEXT[lang()] || TEXT.ru;
        return d[key];
    }

    function read() {
        try {
            var v = localStorage.getItem(KEY);
            return v === "dark" ? "dark" : DEFAULT;
        } catch (e) {
            return DEFAULT;
        }
    }

    function syncMeta(mode) {
        var m = document.querySelector('meta[name="theme-color"]');
        if (m) m.setAttribute("content", META_COLOR[mode] || META_COLOR.light);
    }

    function syncButtons(mode) {
        var list = document.querySelectorAll("[data-pq-theme-toggle]");
        for (var i = 0; i < list.length; i++) {
            var btn = list[i];
            btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
            btn.setAttribute("title", t("title"));
            btn.setAttribute("aria-label", t("label") + ": " + t(mode === "dark" ? "toLight" : "toDark"));
            var txt = btn.querySelector(".pq-theme-txt");
            if (txt) txt.textContent = t(mode === "dark" ? "toLight" : "toDark");
            var ico = btn.querySelector(".pq-theme-icon");
            if (ico) ico.textContent = mode === "dark" ? "☀️" : "🌙";
        }
    }

    var Theme = {
        KEY: KEY,

        get: function () {
            var v = document.documentElement.getAttribute("data-theme");
            return v === "dark" ? "dark" : (v === "light" ? "light" : read());
        },

        apply: function (mode, opts) {
            mode = mode === "dark" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", mode);
            syncMeta(mode);
            syncButtons(mode);
            if (!opts || !opts.silent) {
                try { localStorage.setItem(KEY, mode); } catch (e) {}
            }
            try {
                document.dispatchEvent(new CustomEvent("pq-theme-change", { detail: { theme: mode } }));
            } catch (e) {}
            return mode;
        },

        set: function (mode) { return this.apply(mode); },

        toggle: function () { return this.apply(this.get() === "dark" ? "light" : "dark"); },

        mountButton: function (host, before) {
            if (!host) return null;
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "pq-theme-toggle";
            btn.setAttribute("data-pq-theme-toggle", "1");
            btn.innerHTML = '<span class="pq-theme-icon">🌙</span><span class="pq-theme-txt"></span>';
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                Theme.toggle();
            });
            if (before && before.parentNode === host) host.insertBefore(btn, before);
            else host.appendChild(btn);
            // если шапка появилась позже плавающей кнопки — убираем дубль
            if (host !== document.body) {
                var fab = document.querySelector(".pq-theme-fab");
                if (fab) fab.parentNode.removeChild(fab);
            }
            return btn;
        },

        init: function () {
            var mode = this.apply(this.get(), { silent: true });
            // звук в шапке вставляется позже — ставим переключатель темы рядом с ним
            var right = document.querySelector("#pq-topbar .pq-topbar-right");
            var hub = document.querySelector(".hub-nav .hub-nav-right");
            var host = right || hub;
            var before = right ? right.firstChild : null;
            if (host && !host.querySelector("[data-pq-theme-toggle]")) this.mountButton(host, before);
            if (!host && !document.querySelector(".pq-theme-toggle")) {
                var fab = this.mountButton(document.body, null);
                if (fab) fab.classList.add("pq-theme-fab");
            }
            syncButtons(mode);

            // переключение языка/пересборка шапки — обновляем подписи
            function onLang() { syncButtons(Theme.get()); }
            document.addEventListener("pq-lang-change", onLang);
            document.addEventListener("pq:lang-changed", onLang);
            window.addEventListener("storage", function (e) {
                if (e.key === KEY && e.newValue) Theme.apply(e.newValue, { silent: true });
            });
            return mode;
        }
    };

    window.PQTheme = Theme;

    // Применяем тему сразу, не дожидаясь DOMContentLoaded (без вспышки тёмного экрана)
    document.documentElement.setAttribute("data-theme", read());
    syncMeta(read());

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () { Theme.init(); });
    } else {
        Theme.init();
    }

    // шапка игры строится динамически — досаживаем переключатель после её перерисовки
    if (typeof MutationObserver !== "undefined") {
        var pending = false;
        var obs = new MutationObserver(function () {
            if (pending) return;
            pending = true;
            setTimeout(function () {
                pending = false;
                var right = document.querySelector("#pq-topbar .pq-topbar-right");
                if (right && !right.querySelector("[data-pq-theme-toggle]")) {
                    Theme.mountButton(right, right.firstChild);
                    syncButtons(Theme.get());
                }
            }, 40);
        });
        document.addEventListener("DOMContentLoaded", function () {
            var bar = document.getElementById("pq-topbar");
            if (bar) obs.observe(bar, { childList: true, subtree: false });
        });
    }
})();
