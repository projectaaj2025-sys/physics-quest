/* ============================================================
   ОЦЕНКИ — перевод точности в 10-балльную шкалу.
   Используется в экране победы, кабинете учителя, журнале и CSV.
   Шкала дополнительная: проценты и звёзды остаются как были.
   ============================================================ */
(function () {
    "use strict";

    // Порог (в процентах), начиная с которого выставляется оценка.
    // 90–100 → 10, 80–89 → 9, 70–79 → 8 и так далее до 1.
    const STEPS = [
        { min: 90, mark: 10 },
        { min: 80, mark: 9 },
        { min: 70, mark: 8 },
        { min: 60, mark: 7 },
        { min: 50, mark: 6 },
        { min: 40, mark: 5 },
        { min: 30, mark: 4 },
        { min: 20, mark: 3 },
        { min: 10, mark: 2 },
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
