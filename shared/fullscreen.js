/* ============================================================
   PQ FULLSCREEN — общий полноэкранный режим мини-игр.
   Использует Fullscreen API, а при его отсутствии или запрете —
   разворачивает текущее игровое окно на всю доступную область.
   ============================================================ */
(function () {
    "use strict";

    const FALLBACK_CLASS = "pq-fullscreen-fallback";
    const ACTIVE_CLASS = "pq-is-fullscreen";

    function currentLanguage() {
        if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
        return "ru";
    }

    function label(key) {
        if (typeof I18n !== "undefined" && typeof I18n.t === "function") {
            const translated = I18n.t(key);
            if (translated && translated !== key) return translated;
        }
        const en = currentLanguage() === "en";
        const kk = currentLanguage() === "kk";
        if (key === "fullscreenExit") {
            return kk ? "Толық экраннан шығу" : en ? "Exit full screen" : "Выйти из полноэкранного режима";
        }
        return kk ? "Толық экранға өту" : en ? "Full screen" : "На весь экран";
    }

    function nativeElement() {
        return document.fullscreenElement || document.webkitFullscreenElement || null;
    }

    function isActive(target) {
        return !!target && (nativeElement() === target || target.classList.contains(ACTIVE_CLASS));
    }

    function syncButton(button, target) {
        if (!button || !target) return;
        const active = isActive(target);
        const text = label(active ? "fullscreenExit" : "fullscreenEnter");
        button.textContent = "⛶ " + text;
        button.setAttribute("aria-label", text);
        button.setAttribute("title", text);
        button.setAttribute("aria-pressed", String(active));
    }

    function syncAll() {
        document.querySelectorAll(".pq-fullscreen-btn[data-pq-fullscreen-button]").forEach((button) => {
            syncButton(button, button._pqFullscreenTarget);
        });
    }

    function restoreFallbackScroll(target) {
        if (!target || target._pqPreviousBodyOverflow === undefined) return;
        document.body.style.overflow = target._pqPreviousBodyOverflow;
        delete target._pqPreviousBodyOverflow;
    }

    function activateFallback(target) {
        if (target._pqPreviousBodyOverflow === undefined) {
            target._pqPreviousBodyOverflow = document.body.style.overflow;
        }
        document.body.style.overflow = "hidden";
        target.classList.add(FALLBACK_CLASS, ACTIVE_CLASS);
    }

    async function exitNative(target) {
        if (nativeElement() !== target) return;
        try {
            const close = document.exitFullscreen || document.webkitExitFullscreen;
            if (close) await Promise.resolve(close.call(document));
        } catch (_) {}
    }

    async function enter(target, button) {
        if (!target) return;
        const operation = (target._pqFullscreenOperation || 0) + 1;
        target._pqFullscreenOperation = operation;

        // Сначала раскрываем игру средствами CSS. Некоторые WebView оставляют
        // Promise requestFullscreen() навсегда в ожидании: даже тогда кнопка
        // обязана немедленно развернуть окно, а не ждать ответа браузера.
        activateFallback(target);
        syncButton(button, target);

        try {
            const request = target.requestFullscreen || target.webkitRequestFullscreen;
            if (!request) return;
            await Promise.resolve(request.call(target));
            if (target._pqFullscreenOperation !== operation) {
                // Пользователь успел выйти или закрыть игру до ответа браузера.
                // Не даём позднему ответу снова захватить экран. Если уже началась
                // новая попытка входа для этого же окна, её состояние не трогаем.
                if (!isActive(target)) await exitNative(target);
                return;
            }
            if (nativeElement() === target) {
                target.classList.remove(FALLBACK_CLASS);
                restoreFallbackScroll(target);
            }
            target.classList.add(ACTIVE_CLASS);
        } catch (_) {
            // iPhone Safari и некоторые встроенные браузеры запрещают
            // requestFullscreen(). Немедленный CSS-режим в этом случае остаётся.
            if (target._pqFullscreenOperation !== operation) return;
            activateFallback(target);
        }
        syncButton(button, target);
    }

    async function exit(target) {
        if (!target) return;
        target._pqFullscreenOperation = (target._pqFullscreenOperation || 0) + 1;
        target.classList.remove(FALLBACK_CLASS, ACTIVE_CLASS);
        restoreFallbackScroll(target);
        syncAll();
        await exitNative(target);
        syncAll();
    }

    async function toggle(target, button) {
        if (isActive(target)) await exit(target);
        else await enter(target, button);
    }

    function bind(target, button, dialog) {
        if (!target || !button) return;
        const panel = dialog || target.firstElementChild;
        if (panel) panel.setAttribute("data-pq-fullscreen-dialog", "");
        button.type = "button";
        button.classList.add("pq-fullscreen-btn");
        button.setAttribute("data-pq-fullscreen-button", "");
        button._pqFullscreenTarget = target;
        if (!button._pqFullscreenBound) {
            button._pqFullscreenBound = true;
            button.addEventListener("click", () => toggle(target, button));
        }
        syncButton(button, target);
    }

    function onFullscreenChange() {
        const current = nativeElement();
        document.querySelectorAll("." + ACTIVE_CLASS).forEach((target) => {
            if (current === target) {
                // Нативный режим мог завершиться позже CSS-раскрытия.
                // Убираем fallback и возвращаем странице исходную прокрутку.
                target.classList.remove(FALLBACK_CLASS);
                restoreFallbackScroll(target);
            } else if (!target.classList.contains(FALLBACK_CLASS)) {
                target.classList.remove(ACTIVE_CLASS);
            }
        });
        syncAll();
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        const target = nativeElement() || document.querySelector("." + FALLBACK_CLASS) || document.querySelector("." + ACTIVE_CLASS);
        if (!target || !target.classList.contains(ACTIVE_CLASS)) return;
        // Первый Esc только выходит из полноэкранного режима. Он не должен
        // одновременно закрывать мини-игру обработчиком самого окна.
        event.preventDefault();
        event.stopImmediatePropagation();
        exit(target);
    }, true);
    window.addEventListener("pq:lang-changed", syncAll);

    window.PQFullscreen = { bind, toggle, exit, isActive, syncAll };
})();
