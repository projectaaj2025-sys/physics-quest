/* ============================================================
   ОЦЕНКИ — перевод точности в 10-балльную шкалу.
   Используется в экране победы, кабинете учителя, журнале и CSV.
   Шкала дополнительная: проценты и звёзды остаются как были.
   ============================================================ */
(function () {
    "use strict";

    // Порог (в процентах), начиная с которого выставляется оценка.
    // 95–100 → 10, 85–94 → 9, 75–84 → 8, 65–74 → 7, 55–64 → 6,
    // 45–54 → 5, 35–44 → 4, 25–34 → 3, 15–24 → 2, ниже 15 → 1.
    const STEPS = [
        { min: 95, mark: 10 },
        { min: 85, mark: 9 },
        { min: 75, mark: 8 },
        { min: 65, mark: 7 },
        { min: 55, mark: 6 },
        { min: 45, mark: 5 },
        { min: 35, mark: 4 },
        { min: 25, mark: 3 },
        { min: 15, mark: 2 },
        { min: 0, mark: 1 }
    ];

    function tenPoint(percent) {
        const value = Number(percent);
        if (!Number.isFinite(value)) return 0;
        const clamped = Math.max(0, Math.min(100, Math.round(value)));
        for (const step of STEPS) {
            if (clamped >= step.min) return step.mark;
        }
        return 1;
    }

    function hasResult(percent) {
        return Number.isFinite(Number(percent)) && Number(percent) > 0;
    }

    // «9/10» — компактная подпись для журнала, ею же пользуется CSV.
    function tenPointShort(percent) {
        return hasResult(percent) ? tenPoint(percent) + "/10" : "—";
    }

    window.PQMarks = {
        STEPS,
        tenPoint,
        tenPointShort,
        hasResult
    };
})();
