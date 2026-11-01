/* ============================================================
   PQ CANVAS QUALITY — чёткий canvas при HiDPI и fullscreen.
   Рисование по-прежнему ведётся в логических координатах сцены,
   поэтому формулы, hit-area и pointer/touch управление не меняются.
   Меняется только backing store: он соответствует реальному
   отображаемому размеру и devicePixelRatio устройства.
   ============================================================ */
(function () {
    "use strict";

    const states = typeof WeakMap !== "undefined" ? new WeakMap() : null;
    const MAX_SIDE = 4096;
    const MAX_PIXELS = 16000000;

    function begin(canvas, logicalWidth, logicalHeight) {
        if (!canvas || typeof canvas.getContext !== "function") return null;
        const lw = Math.max(1, Number(logicalWidth) || canvas.width || 1);
        const lh = Math.max(1, Number(logicalHeight) || canvas.height || 1);
        const now = (window.performance && performance.now) ? performance.now() : Date.now();
        let state = states ? states.get(canvas) : canvas._pqCanvasQuality;
        if (!state) {
            state = { checkedAt: 0 };
            if (states) states.set(canvas, state);
            else canvas._pqCanvasQuality = state;
        }

        // getBoundingClientRect нужен только изредка, а не для каждого примитива.
        // Интервал 100 мс также надёжно ловит fullscreen и поворот устройства.
        if (!state.checkedAt || now - state.checkedAt >= 100) {
            state.checkedAt = now;
            const rect = canvas.getBoundingClientRect();
            const cssWidth = rect.width > 0 ? rect.width : lw;
            const cssHeight = rect.height > 0 ? rect.height : cssWidth * lh / lw;
            const dpr = Math.max(1, Math.min(4, Number(window.devicePixelRatio) || 1));
            let pixelWidth = Math.max(lw, Math.round(cssWidth * dpr));
            let pixelHeight = Math.max(lh, Math.round(cssHeight * dpr));
            const limit = Math.min(1, MAX_SIDE / pixelWidth, MAX_SIDE / pixelHeight,
                Math.sqrt(MAX_PIXELS / (pixelWidth * pixelHeight)));
            pixelWidth = Math.max(1, Math.round(pixelWidth * limit));
            pixelHeight = Math.max(1, Math.round(pixelHeight * limit));
            if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
            if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
            // Сохраняем исходные пропорции, даже когда CSS ещё пересчитывает
            // развернутое окно. Это не затрагивает заданные внешние размеры.
            canvas.style.aspectRatio = lw + " / " + lh;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) return null;
        ctx.setTransform(canvas.width / lw, 0, 0, canvas.height / lh, 0, 0);
        ctx.imageSmoothingEnabled = true;
        if ("imageSmoothingQuality" in ctx) ctx.imageSmoothingQuality = "high";
        return { ctx, width: lw, height: lh, pixelWidth: canvas.width, pixelHeight: canvas.height };
    }

    window.PQCanvasQuality = { begin };
})();
