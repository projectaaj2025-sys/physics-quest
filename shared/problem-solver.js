/* ============================================================
   PQ PROBLEM SOLVER 2.0 — «Дано → СИ → Формула → Решение»
   Плюс «Карточка формул параграфа» прямо в окне задания.
   Работает в 7, 8 и 9 классах, RU / ҚАЗ / EN.
   ============================================================ */
(function () {
    "use strict";

    const VERSION = "2.0";

    const T = {
        ru: {
            open: "🧮 Разбор задачи",
            openHint: "Дано → СИ → Формула → Решение",
            formulas: "📐 Формулы §",
            formulasHint: "Карточка формул параграфа",
            tabSolution: "Дано → Решение",
            tabFormulas: "Карточка формул",
            given: "Дано",
            si: "СИ",
            formula: "Формула",
            solution: "Решение",
            answer: "Ответ",
            showAnswer: "Показать ответ",
            hideAnswer: "Скрыть ответ",
            symbol: "Обозн.",
            value: "Величина",
            givenCol: "Дано",
            siCol: "СИ",
            noData: "В условии нет числовых данных — это качественная задача. Разбери формулу и объясни явление.",
            noDataShort: "числовых данных нет",
            convertNone: "все величины уже в СИ",
            convert: "Перевод единиц",
            stepFormula: "Записываем формулу в буквенном виде",
            stepSub: "Подставляем значения",
            stepCalc: "Считаем",
            stepAnswer: "Записываем ответ",
            unknown: "Не хватает данных: ",
            autoNote: "Открыто автоматически после второй попытки — разберись по шагам и попробуй ещё раз.",
            topicFallback: "Ключевые формулы",
            noFormulas: "В этом параграфе нет расчётных формул — только определения и качественные закономерности.",
            legend: "Обозначения",
            answerReady: "Ответ задачи",
            approx: "≈",
            copy: "Копировать разбор",
            copied: "Разбор скопирован",
            close: "Свернуть",
            givenIntro: "Выпиши из условия все величины с единицами измерения.",
            siIntro: "Переведи единицы в СИ: г → кг, см → м, л → м³, мин → с, ч → 3600 с.",
            answerIntro: "Ответ записывай с единицей измерения и округляй до 2–3 значащих цифр."
        },
        kk: {
            open: "🧮 Есепті талдау",
            openHint: "Берілгені → ХБ → Формула → Шешуі",
            formulas: "📐 § формулалары",
            formulasHint: "Параграф формулаларының карточкасы",
            tabSolution: "Берілгені → Шешуі",
            tabFormulas: "Формулалар карточкасы",
            given: "Берілгені",
            si: "ХБ",
            formula: "Формула",
            solution: "Шешуі",
            answer: "Жауабы",
            showAnswer: "Жауапты көрсету",
            hideAnswer: "Жауапты жасыру",
            symbol: "Белгі",
            value: "Шама",
            givenCol: "Берілгені",
            siCol: "ХБ",
            noData: "Шартта сандық мәлімет жоқ — бұл сапалық есеп. Формуланы талдап, құбылысты түсіндір.",
            noDataShort: "сандық мәлімет жоқ",
            convertNone: "барлық шамалар ХБ-де",
            convert: "Өлшем бірліктерін түрлендіру",
            stepFormula: "Формуланы әріп түрінде жазамыз",
            stepSub: "Мәндерді қоямыз",
            stepCalc: "Есептейміз",
            stepAnswer: "Жауапты жазамыз",
            unknown: "Деректер жетіспейді: ",
            autoNote: "Екінші әрекеттен кейін автоматты ашылды — қадамдармен талдап, қайта көр.",
            topicFallback: "Негізгі формулалар",
            noFormulas: "Бұл параграфта есептеу формуласы жоқ — тек анықтамалар мен сапалық заңдылықтар.",
            legend: "Белгілер",
            answerReady: "Есептің жауабы",
            approx: "≈",
            copy: "Талдауды көшіру",
            copied: "Талдау көшірілді",
            close: "Жию",
            givenIntro: "Шарттан барлық шамаларды өлшем бірліктерімен қатар жаз.",
            siIntro: "Бірліктерді ХБ-ге келтір: г → кг, см → м, л → м³, мин → с, сағ → 3600 с.",
            answerIntro: "Жауапты өлшем бірлігімен жазып, 2–3 мәнді цифрға дейін дөңгелекте."
        },
        en: {
            open: "🧮 Solve step by step",
            openHint: "Given → SI → Formula → Solution",
            formulas: "📐 § formulas",
            formulasHint: "Formula card of the paragraph",
            tabSolution: "Given → Solution",
            tabFormulas: "Formula card",
            given: "Given",
            si: "SI",
            formula: "Formula",
            solution: "Solution",
            answer: "Answer",
            showAnswer: "Show answer",
            hideAnswer: "Hide answer",
            symbol: "Symbol",
            value: "Quantity",
            givenCol: "Given",
            siCol: "SI",
            noData: "There are no numbers in the statement — this is a qualitative task. Analyse the formula and explain the phenomenon.",
            noDataShort: "no numerical data",
            convertNone: "all values are already in SI",
            convert: "Unit conversion",
            stepFormula: "Write the formula in symbols",
            stepSub: "Substitute the values",
            stepCalc: "Calculate",
            stepAnswer: "Write the answer",
            unknown: "Missing data: ",
            autoNote: "Opened automatically after the second attempt — go step by step and try again.",
            topicFallback: "Key formulas",
            noFormulas: "This paragraph has no calculation formulas — only definitions and qualitative laws.",
            legend: "Legend",
            answerReady: "Answer",
            approx: "≈",
            copy: "Copy the solution",
            copied: "Solution copied",
            close: "Collapse",
            givenIntro: "Write out every quantity from the statement with its unit.",
            siIntro: "Convert to SI: g → kg, cm → m, L → m³, min → s, h → 3600 s.",
            answerIntro: "Give the answer with a unit and round to 2–3 significant digits."
        }
    };

    const tr = (key) => {
        const lang = currentLang();
        const pack = T[lang] || T.ru;
        return pack[key] !== undefined ? pack[key] : T.ru[key];
    };

    function currentLang() {
        try {
            if (window.I18n && I18n.currentLang) return I18n.currentLang;
        } catch (e) {}
        try {
            const l = localStorage.getItem("pq_lang");
            if (l && T[l]) return l;
        } catch (e) {}
        return "ru";
    }

    const esc = (s) => String(s === undefined || s === null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

    const pick = (value) => {
        if (value === undefined || value === null) return "";
        if (typeof value === "string") return value;
        const lang = currentLang();
        return value[lang] || value.ru || value.en || value.kk || "";
    };

    /* ---------- ЕДИНИЦЫ ИЗМЕРЕНИЯ ---------- */

    function normUnit(raw) {
        return String(raw || "")
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/³/g, "3")
            .replace(/²/g, "2")
            .replace(/[×·⋅]/g, "·")
            .replace(/[–—]/g, "-")
            .replace(/℃/g, "°c")
            .replace(/°с/g, "°c")
            .replace(/⁰/g, "0");
    }

    // aliases -> { sym, base, k, kind }
    const UNITS = [
        { a: ["дж/(кг·°c)", "дж/(кг·град)", "дж/кг·°c"], sym: "c", base: "Дж/(кг·°C)", k: 1, kind: "heatcap" },
        { a: ["кдж/(кг·°c)", "кдж/(кг·град)"], sym: "c", base: "Дж/(кг·°C)", k: 1000, kind: "heatcap" },
        { a: ["кг/м3", "кг/м³"], sym: "ρ", base: "кг/м³", k: 1, kind: "density" },
        { a: ["г/см3", "г/см³"], sym: "ρ", base: "кг/м³", k: 1000, kind: "density" },
        { a: ["мдж/кг"], sym: "q", base: "Дж/кг", k: 1000000, kind: "heat" },
        { a: ["кдж/кг"], sym: "q", base: "Дж/кг", k: 1000, kind: "heat" },
        { a: ["дж/кг"], sym: "q", base: "Дж/кг", k: 1, kind: "heat" },
        { a: ["км/ч"], sym: "v", base: "м/с", k: 1 / 3.6, kind: "speed" },
        { a: ["м/с"], sym: "v", base: "м/с", k: 1, kind: "speed" },
        { a: ["см/с"], sym: "v", base: "м/с", k: 0.01, kind: "speed" },
        { a: ["м/с2", "м/с²"], sym: "a", base: "м/с²", k: 1, kind: "accel" },
        { a: ["кн"], sym: "F", base: "Н", k: 1000, kind: "force" },
        { a: ["мн"], sym: "F", base: "Н", k: 1000000, kind: "force" },
        { a: ["н"], sym: "F", base: "Н", k: 1, kind: "force" },
        { a: ["мдж"], sym: "Q", base: "Дж", k: 1000000, kind: "energy" },
        { a: ["кдж"], sym: "Q", base: "Дж", k: 1000, kind: "energy" },
        { a: ["дж"], sym: "Q", base: "Дж", k: 1, kind: "energy" },
        { a: ["квт"], sym: "P", base: "Вт", k: 1000, kind: "power" },
        { a: ["вт"], sym: "P", base: "Вт", k: 1, kind: "power" },
        { a: ["мпа"], sym: "p", base: "Па", k: 1000000, kind: "pressure" },
        { a: ["кпа"], sym: "p", base: "Па", k: 1000, kind: "pressure" },
        { a: ["па"], sym: "p", base: "Па", k: 1, kind: "pressure" },
        { a: ["мом"], sym: "R", base: "Ом", k: 1000000, kind: "resistance" },
        { a: ["ком"], sym: "R", base: "Ом", k: 1000, kind: "resistance" },
        { a: ["ом"], sym: "R", base: "Ом", k: 1, kind: "resistance" },
        { a: ["кв"], sym: "U", base: "В", k: 1000, kind: "voltage" },
        { a: ["мв"], sym: "U", base: "В", k: 0.001, kind: "voltage" },
        { a: ["в"], sym: "U", base: "В", k: 1, kind: "voltage" },
        { a: ["ма"], sym: "I", base: "А", k: 0.001, kind: "current" },
        { a: ["а"], sym: "I", base: "А", k: 1, kind: "current" },
        { a: ["мккл"], sym: "q", base: "Кл", k: 0.000001, kind: "charge" },
        { a: ["нкл"], sym: "q", base: "Кл", k: 0.000000001, kind: "charge" },
        { a: ["кл"], sym: "q", base: "Кл", k: 1, kind: "charge" },
        { a: ["мтл"], sym: "B", base: "Тл", k: 0.001, kind: "field" },
        { a: ["тл"], sym: "B", base: "Тл", k: 1, kind: "field" },
        { a: ["мгц"], sym: "ν", base: "Гц", k: 1000000, kind: "freq" },
        { a: ["кгц"], sym: "ν", base: "Гц", k: 1000, kind: "freq" },
        { a: ["гц"], sym: "ν", base: "Гц", k: 1, kind: "freq" },
        { a: ["км"], sym: "s", base: "м", k: 1000, kind: "length" },
        { a: ["дм"], sym: "s", base: "м", k: 0.1, kind: "length" },
        { a: ["см"], sym: "s", base: "м", k: 0.01, kind: "length" },
        { a: ["мм"], sym: "s", base: "м", k: 0.001, kind: "length" },
        { a: ["м"], sym: "s", base: "м", k: 1, kind: "length" },
        { a: ["сут"], sym: "t", base: "с", k: 86400, kind: "time" },
        { a: ["ч", "сағ", "час"], sym: "t", base: "с", k: 3600, kind: "time" },
        { a: ["мин"], sym: "t", base: "с", k: 60, kind: "time" },
        { a: ["мс"], sym: "t", base: "с", k: 0.001, kind: "time" },
        { a: ["с"], sym: "t", base: "с", k: 1, kind: "time" },
        { a: ["т"], sym: "m", base: "кг", k: 1000, kind: "mass" },
        { a: ["кг"], sym: "m", base: "кг", k: 1, kind: "mass" },
        { a: ["мг"], sym: "m", base: "кг", k: 0.000001, kind: "mass" },
        { a: ["г"], sym: "m", base: "кг", k: 0.001, kind: "mass" },
        { a: ["см2", "см²"], sym: "S", base: "м²", k: 0.0001, kind: "area" },
        { a: ["мм2", "мм²"], sym: "S", base: "м²", k: 0.000001, kind: "area" },
        { a: ["м2", "м²"], sym: "S", base: "м²", k: 1, kind: "area" },
        { a: ["см3", "см³"], sym: "V", base: "м³", k: 0.000001, kind: "volume" },
        { a: ["мл"], sym: "V", base: "м³", k: 0.000001, kind: "volume" },
        { a: ["л"], sym: "V", base: "м³", k: 0.001, kind: "volume" },
        { a: ["м3", "м³"], sym: "V", base: "м³", k: 1, kind: "volume" },
        { a: ["°c", "c°"], sym: "t", base: "°C", k: 1, kind: "temperature" },
        { a: ["к", "k", "°k"], sym: "T", base: "К", k: 1, kind: "temperature" },
        { a: ["дж/к", "дж/(кг·к)"], sym: "C", base: "Дж/К", k: 1, kind: "heatcap" },
        { a: ["вб"], sym: "Φ", base: "Вб", k: 1, kind: "flux" },
        { a: ["в·с"], sym: "Φ", base: "Вб", k: 1, kind: "flux" },
        { a: ["в/м"], sym: "E", base: "В/м", k: 1, kind: "intensity" },
        { a: ["ф"], sym: "C", base: "Ф", k: 1, kind: "capacitance" },
        { a: ["мкф"], sym: "C", base: "Ф", k: 0.000001, kind: "capacitance" },
        { a: ["пф"], sym: "C", base: "Ф", k: 1e-12, kind: "capacitance" },
        { a: ["гн"], sym: "L", base: "Гн", k: 1, kind: "inductance" },
        { a: ["мгн"], sym: "L", base: "Гн", k: 0.001, kind: "inductance" },
        { a: ["эв"], sym: "E", base: "эВ", k: 1, kind: "energy_ev" },
        { a: ["%"], sym: "η", base: "%", k: 1, kind: "percent" }
    ];

    const UNIT_MAP = {};
    UNITS.forEach((u) => { u.a.forEach((alias) => { UNIT_MAP[normUnit(alias)] = u; }); });
    const UNIT_KEYS = Object.keys(UNIT_MAP).sort((a, b) => b.length - a.length);

    const NAME = {
        m: { ru: "масса", kk: "масса", en: "mass" },
        m1: { ru: "масса первого тела", kk: "бірінші дененің массасы", en: "mass of the first body" },
        m2: { ru: "масса второго тела", kk: "екінші дененің массасы", en: "mass of the second body" },
        V: { ru: "объём", kk: "көлем", en: "volume" },
        ρ: { ru: "плотность", kk: "тығыздық", en: "density" },
        t: { ru: "время / температура", kk: "уақыт / температура", en: "time / temperature" },
        t1: { ru: "начальная температура", kk: "бастапқы температура", en: "initial temperature" },
        t2: { ru: "конечная температура", kk: "соңғы температура", en: "final temperature" },
        "Δt": { ru: "изменение температуры", kk: "температура өзгерісі", en: "temperature change" },
        T: { ru: "период / абсолютная температура", kk: "период / абсолютті температура", en: "period / absolute temperature" },
        c: { ru: "удельная теплоёмкость", kk: "меншікті жылу сыйымдылығы", en: "specific heat capacity" },
        q: { ru: "удельная теплота / заряд", kk: "меншікті жылу / заряд", en: "specific heat / charge" },
        Q: { ru: "количество теплоты", kk: "жылу мөлшері", en: "heat" },
        F: { ru: "сила", kk: "күш", en: "force" },
        F1: { ru: "сила на малый поршень", kk: "кіші поршень күші", en: "force on the small piston" },
        F2: { ru: "сила на большой поршень", kk: "үлкен поршень күші", en: "force on the large piston" },
        S: { ru: "площадь / путь", kk: "аудан / жол", en: "area / distance" },
        s: { ru: "путь", kk: "жол", en: "distance" },
        v: { ru: "скорость", kk: "жылдамдық", en: "speed" },
        v0: { ru: "начальная скорость", kk: "бастапқы жылдамдық", en: "initial speed" },
        a: { ru: "ускорение", kk: "үдеу", en: "acceleration" },
        g: { ru: "ускорение свободного падения", kk: "еркін түсу үдеуі", en: "free-fall acceleration" },
        P: { ru: "мощность / вес", kk: "қуат / салмақ", en: "power / weight" },
        p: { ru: "давление", kk: "қысым", en: "pressure" },
        U: { ru: "напряжение", kk: "кернеу", en: "voltage" },
        I: { ru: "сила тока", kk: "ток күші", en: "current" },
        R: { ru: "сопротивление", kk: "кедергі", en: "resistance" },
        A: { ru: "работа", kk: "жұмыс", en: "work" },
        N: { ru: "мощность / число витков", kk: "қуат / орама саны", en: "power / turns" },
        η: { ru: "КПД", kk: "ПӘК", en: "efficiency" },
        λ: { ru: "удельная теплота плавления / длина волны", kk: "меншікті балқу жылуы / толқын ұзындығы", en: "specific heat of fusion / wavelength" },
        L: { ru: "удельная теплота парообразования", kk: "меншікті булану жылуы", en: "specific heat of vaporisation" },
        k: { ru: "коэффициент / постоянная", kk: "коэффициент / тұрақты", en: "coefficient / constant" },
        B: { ru: "магнитная индукция", kk: "магнит индукциясы", en: "magnetic flux density" },
        ε: { ru: "ЭДС индукции", kk: "индукция ЭҚК", en: "induced EMF" },
        Φ: { ru: "магнитный поток", kk: "магнит ағыны", en: "magnetic flux" },
        ν: { ru: "частота", kk: "жиілік", en: "frequency" },
        f: { ru: "фокусное расстояние", kk: "фокус қашықтығы", en: "focal length" },
        d: { ru: "расстояние до предмета", kk: "затқа дейінгі қашықтық", en: "object distance" },
        D: { ru: "оптическая сила линзы", kk: "линзаның оптикалық күші", en: "optical power" },
        h: { ru: "высота / глубина", kk: "биіктік / тереңдік", en: "height / depth" },
        N0: { ru: "начальное число ядер", kk: "бастапқы ядро саны", en: "initial number of nuclei" },
        r: { ru: "расстояние", kk: "қашықтық", en: "distance" },
        E: { ru: "энергия", kk: "энергия", en: "energy" }
    };

    const CONSTANTS = { g: 9.8, "π": 3.14, "G": 6.67e-11, "k": 9e9, "c": 3e8 };

    /* ---------- ЧИСЛА ---------- */

    function toNum(raw) {
        if (typeof raw === "number") return raw;
        let text = String(raw).trim().replace(/\s+/g, "").replace(/[−–—]/g, "-").replace(/,/g, ".");
        // 4,6·10⁷ → 4.6e7
        text = text.replace(/(\d)(?:\*|·|×)?10\^?([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)/g, (m, mantissa, sup) => {
            const digits = "⁰¹²³⁴⁵⁶⁷⁸⁹";
            const exp = Array.from(sup).map((c) => (c === "⁻" ? "-" : String(digits.indexOf(c)))).join("");
            return `${mantissa}e${exp}`;
        });
        text = text.replace(/[·×]/g, "*");
        const pow = text.match(/^(-?\d+(?:\.\d+)?)\*10\^(-?\d+)$/);
        if (pow) return parseFloat(pow[1]) * Math.pow(10, Number(pow[2]));
        const value = parseFloat(text);
        return isFinite(value) ? value : NaN;
    }

    function fmt(num, digits) {
        if (!isFinite(num)) return "—";
        const abs = Math.abs(num);
        if (digits === undefined && abs > 0 && abs < 0.01) {
            return String(Number(num.toPrecision(3))).replace(".", ",");
        }
        let d = digits;
        if (d === undefined) {
            if (abs === 0) d = 0;
            else if (abs >= 1000) d = 0;
            else if (abs >= 100) d = 1;
            else if (abs >= 10) d = 2;
            else if (abs >= 1) d = 2;
            else if (abs >= 0.01) d = 3;
            else d = 4;
        }
        let out = Number(num.toFixed(d));
        if (Math.abs(out) >= 1000) out = Math.round(out);
        return String(out).replace(".", ",");
    }

    const normSym = (value) => String(value || "").replace(/υ/g, "v").replace(/α/g, "a").replace(/β/g, "b");
    const SUB = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉" };
    const toSub = (s) => String(s).replace(/([A-Za-zА-Яа-яΔ])(\d)/g, (m, a, b) => a + (SUB[b] || b));
    const fromSub = (s) => String(s).replace(/[₀-₉]/g, (c) => String("₀₁₂₃₄₅₆₇₈₉".indexOf(c)));

    /* ---------- РАЗБОР «ДАНО» ---------- */

    const EXPLICIT_RE = /(^|[^A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FF0-9])([A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FFΔ][A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FF0-9₀-₉]{0,3})\s*(?:=|—|–|:)\s*(-?\d+(?:[.,]\d+)?(?:\s*[·×]\s*10\s*(?:\^?\s*-?\d+|[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+))?)\s*([A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FF°%²³·/0-9()]+)?/g;

    const BARE_RE = /(-?\d+(?:[.,]\d+)?)\s*([A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FF°%²³·/0-9()]+)/g;

    function findUnit(chunk) {
        const normalized = normUnit(chunk);
        if (UNIT_MAP[normalized]) return { unit: UNIT_MAP[normalized], length: normalized.length };
        for (let i = 0; i < UNIT_KEYS.length; i++) {
            const key = UNIT_KEYS[i];
            if (normalized.indexOf(key) === 0 && key.length >= normalized.length) {
                return { unit: UNIT_MAP[key], length: key.length };
            }
        }
        for (let i = 0; i < UNIT_KEYS.length; i++) {
            const key = UNIT_KEYS[i];
            if (normalized.indexOf(key) === 0) return { unit: UNIT_MAP[key], length: key.length };
        }
        return null;
    }

    function parseGivens(text, task) {
        const source = String(text || "")
            .replace(/\u00a0/g, " ")
            .replace(/×/g, "·")
            .replace(/(\d)\s*-\s*(\d)/g, "$1–$2");
        const items = [];
        const usedRanges = [];
        let match;
        EXPLICIT_RE.lastIndex = 0;
        while ((match = EXPLICIT_RE.exec(source))) {
            const symbol = match[2];
            const value = toNum(match[3]);
            const unitInfo = match[4] ? findUnit(match[4]) : null;
            if (!isFinite(value)) continue;
            if (!unitInfo) continue;
            const resolved = resolveSymbol(symbol, unitInfo.unit);
            items.push(makeItem(symbol, resolved, unitInfo.unit, value, match[3], match[4]));
            usedRanges.push([match.index, match.index + match[0].length]);
        }
        BARE_RE.lastIndex = 0;
        while ((match = BARE_RE.exec(source))) {
            const start = match.index;
            const end = start + match[0].length;
            if (usedRanges.some((range) => start < range[1] && end > range[0])) continue;
            const value = toNum(match[1]);
            if (!isFinite(value)) continue;
            const found = findUnit(match[2]);
            if (!found) continue;
            const unit = found.unit;
            // «1 г меди» — единица должна занимать начало захваченного куска
            if (normUnit(match[2]).indexOf(normUnit(unit.a[0])) !== 0) continue;
            const symbol = unit.sym;
            if (items.some((it) => it.kind === unit.kind && Math.abs(it.base - value * unit.k) < 1e-9)) continue;
            items.push(makeItem("", unit.sym, unit, value, match[1], match[2]));
        }
        // нумерация одноимённых величин: v₁, v₂ (первая — начальная, вторая — конечная)
        const totals = {};
        items.forEach((item) => {
            const base = item.symbol || item.unit.sym;
            totals[base] = (totals[base] || 0) + 1;
        });
        const counters = {};
        items.forEach((item) => {
            const base = item.symbol || item.unit.sym;
            counters[base] = (counters[base] || 0) + 1;
            if (!item.explicit && totals[base] > 1) {
                item.label = base + toSub(counters[base]);
            } else {
                item.label = toSub(base);
            }
        });
        return items.filter((item) => !isNoise(item));
    }

    function isNoise(item) {
        // отбрасываем очевидные ложные срабатывания (например, «2 с» внутри «2 см»)
        if (!item || !item.unit) return true;
        if (item.kind === "percent" && item.value > 100) return true;
        return false;
    }

    function resolveSymbol(symbol, unit) {
        const sym = normSym(String(symbol || "").replace(/[₀-₉]/g, (c) => String("₀₁₂₃₄₅₆₇₈₉".indexOf(c))));
        if (/^[A-Za-z]$/.test(sym) || /^[A-Za-z][0-9]$/.test(sym)) {
            // одиночный символ из условия (υ, s, t, m₁…) — сохраняем его
            if (sym === "m" || /^m[0-9]?$/.test(sym) || unit.kind === "mass") return sym;
            if (unit.kind === "temperature" || unit.kind === "time" || unit.kind === "speed" || unit.kind === "length" || unit.kind === "energy" || unit.kind === "force") return sym;
        }
        if (unit.kind === "mass") return /^m/.test(sym) ? sym : unit.sym;
        if (unit.kind === "temperature") return /^[tT]/.test(sym) ? sym : unit.sym;
        if (unit.kind === "time") return /^t/.test(sym) ? sym : unit.sym;
        return unit.sym;
    }

    function makeItem(explicitSymbol, symbol, unit, value, rawText, rawUnit) {
        const k = unit.k || 1;
        return {
            explicit: !!explicitSymbol,
            explicitSymbol: explicitSymbol || "",
            symbol: symbol || unit.sym,
            unit,
            kind: unit.kind,
            value,
            rawText,
            rawUnit: rawUnit || unit.a[0],
            base: value * k,
            siText: k === 1 ? "—" : `${fmt(value * k)} ${unit.base}`,
            name: NAME[symbol] || NAME[unit.sym] || { ru: "", kk: "", en: "" }
        };
    }

    /* ---------- ФОРМУЛЫ ---------- */

    function conspectusFor(topic) {
        try {
            if (typeof CONSPECT === "undefined" || !CONSPECT) return null;
            return CONSPECT[topic] || null;
        } catch (e) {
            return null;
        }
    }

    function conspectFormulas(topic) {
        const node = conspectusFor(topic);
        if (!node) return [];
        const lang = currentLang();
        const body = node[lang] || node.ru || "";
        const lines = String(body).split(/\n+/);
        const out = [];
        lines.forEach((line) => {
            const trimmed = line.trim();
            if (trimmed.indexOf(">") === 0) {
                const formula = trimmed.replace(/^>\s*/, "").trim();
                if (formula && formula.indexOf("=") > 0) out.push(formula);
            }
        });
        return out;
    }

    const CURRICULUM = {
        7: [
            "ρ = m / V", "F = m · g", "p = F / S", "p = ρ · g · h",
            "A = F · s", "N = A / t", "η = A_полезн / A_затр · 100 %",
            "F_A = ρ_ж · g · V", "P = m · g", "v = s / t"
        ],
        8: [
            "Q = c · m · Δt", "Q = λ · m", "Q = L · m", "Q = q · m",
            "U = I · R", "P = U · I", "Q = I² · R · t",
            "1/F = 1/d + 1/f", "D = 1 / F", "F₂ = F₁ · S₂ / S₁",
            "F_A = ρ · g · V", "η = A_полезн / Q_затр · 100 %"
        ],
        9: [
            "v = v₀ + a · t", "s = v₀ · t + a · t² / 2", "F = m · a",
            "T = 2π · √(l / g)", "λ = v / ν", "E = h · ν",
            "F = k · q₁ · q₂ / r²", "N = N₀ · 2^(−t/T)",
            "ε = N · ΔΦ / Δt", "hν = A + E_к", "m₁v₁ + m₂v₂ = m₁u₁ + m₂u₂"
        ]
    };

    function taskFormula(task) {
        if (!task) return "";
        if (task.formula) {
            const value = pick(task.formula);
            if (value) return String(value).split(";")[0].trim();
        }
        if (Array.isArray(task.formulas) && task.formulas.length) {
            const value = pick(task.formulas[0]);
            if (value) return value;
        }
        return "";
    }

    function gradeOf(task) {
        try {
            if (window.CURRENT_GRADE) return Number(window.CURRENT_GRADE);
            if (window.Game && Game.currentGrade) return Number(Game.currentGrade);
        } catch (e) {}
        const id = String((task && task.id) || "");
        if (/^p\d/.test(id) && window.CURRENT_GRADE) return Number(window.CURRENT_GRADE);
        return Number(window.CURRENT_GRADE) || 8;
    }

    function formulaCard(task) {
        const grade = gradeOf(task);
        const list = [];
        const push = (f) => {
            const clean = String(f || "").replace(/^>\s*/, "").trim();
            if (!clean || clean.indexOf("=") < 0) return;
            if (!list.some((item) => item.replace(/\s+/g, "") === clean.replace(/\s+/g, ""))) list.push(clean);
        };
        taskFormula(task) && push(taskFormula(task));
        conspectFormulas(task && task.topic).forEach(push);
        if (list.length < 3) {
            (CURRICULUM[grade] || CURRICULUM[8]).forEach((f) => { if (list.length < 6) push(f); });
        }
        return list.slice(0, 8);
    }

    function topicTitle(task) {
        const node = conspectusFor(task && task.topic);
        if (node) {
            const lang = currentLang();
            return node["title" + (lang === "en" ? "En" : lang === "kk" ? "Kk" : "")] || node.title || "";
        }
        return "";
    }

    /* ---------- ПОДСТАНОВКА И ВЫЧИСЛЕНИЕ ---------- */

    function symbolValues(givens, raw) {
        const map = {};
        const temps = [];
        givens.forEach((item) => {
            const key = fromSub(item.label || item.symbol);
            map[key] = raw ? item.value : item.base;
            if (item.kind === "temperature") temps.push(item.base);
        });
        if (map.t1 !== undefined && map.t2 !== undefined) map["Δt"] = Math.abs(map.t2 - map.t1);
        else if (map["Δt"] === undefined && temps.length === 1 && map.t === undefined) {
            // одна температура в задачах на нагрев — это изменение
            const tKey = givens.find((i) => i.kind === "temperature");
            if (tKey) map["Δt"] = Math.abs(tKey.base);
        }
        return map;
    }

    const ALIAS_GROUPS = [
        ["s", "S", "l", "L", "h", "x"],
        ["A", "Q", "W", "E", "ΔU", "U"],
        ["N", "P"],
        ["v", "v0", "υ", "υ₀", "υ0", "u", "u0", "υ1", "v1", "υ2", "v2"],
        ["m", "M"],
        ["F", "F_A", "P"],
        ["t", "T", "τ"],
        ["V", "v"]
    ];

    function aliasSymbols(rhs, symbols) {
        if (!rhs) return symbols;
        const tokens = String(rhs).match(/[A-Za-zА-Яа-яΔͰ-Ͽ][A-Za-z0-9₀-₉Ͱ-Ͽ]*/g) || [];
        tokens.forEach((token) => {
            if (symbols[token] !== undefined) return;
            const key = fromSub(token);
            if (symbols[key] !== undefined) { symbols[token] = symbols[key]; return; }
            const group = ALIAS_GROUPS.find((list) => list.indexOf(token) >= 0);
            if (!group) return;
            const available = group.filter((sym) => symbols[sym] !== undefined);
            if (!available.length) return;
            const isInitial = /0$/.test(key) || /₁$/.test(token);
            const wantsFinal = /^[A-Za-z\u0370-\u03FF]$/.test(key);
            let source;
            if (isInitial) {
                source = available.find((sym) => /^[A-Za-z]0$/.test(sym))
                    || available.find((sym) => /1$|₁$/.test(sym))
                    || available[0];
            } else if (wantsFinal) {
                source = available.find((sym) => /^[A-Za-z]$/.test(sym)) || available[available.length - 1];
            } else {
                source = available[0];
            }
            if (source === undefined) source = available[0];
            symbols[token] = symbols[source];
        });
        return symbols;
    }

    function tokenize(rhs, symbols) {
        const keys = Object.keys(symbols).sort((a, b) => b.length - a.length);
        const pieces = [];
        let i = 0;
        const unknown = [];
        while (i < rhs.length) {
            const ch = rhs[i];
            if (/[A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FFΔπ]/.test(ch)) {
                let matched = "";
                for (let k = 0; k < keys.length; k++) {
                    if (keys[k] && rhs.startsWith(keys[k], i)) { matched = keys[k]; break; }
                }
                if (matched) {
                    const rawValue = symbols[matched];
                    pieces.push({ t: "val", s: fmt(rawValue), v: String(rawValue).replace(",", ".") });
                    i += matched.length;
                    continue;
                }
                let j = i;
                while (j < rhs.length && /[A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі\u0370-\u03FFΔ0-9₀-₉]/.test(rhs[j])) j++;
                const run = rhs.slice(i, j);
                unknown.push(run);
                pieces.push({ t: "unk", s: run });
                i = j;
                continue;
            }
            if (/[0-9]/.test(ch)) {
                let j = i;
                while (j < rhs.length && /[0-9.,]/.test(rhs[j])) j++;
                const numText = rhs.slice(i, j);
                pieces.push({ t: "num", s: numText, v: numText.replace(",", ".") });
                i = j;
                continue;
            }
            if (/[+\-*/^()=·×:]/.test(ch)) {
                const op = ch === "·" || ch === "×" ? "*" : ch === ":" ? "/" : ch;
                pieces.push({ t: "op", s: op });
                i++;
                continue;
            }
            if (/\s/.test(ch)) { i++; continue; }
            pieces.push({ t: "op", s: ch });
            i++;
        }
        // неявное умножение: 4200·0,2·10, а не 4200(0,2)
        let expr = "";
        let display = "";
        pieces.forEach((piece, idx) => {
            const prev = pieces[idx - 1];
            const isOperand = piece.t === "val" || piece.t === "num" || piece.t === "unk";
            const prevIsOperand = prev && (prev.t === "val" || prev.t === "num" || prev.t === "unk" || prev.s === ")");
            const needMul = (isOperand && prevIsOperand) || (piece.s === "(" && prevIsOperand);
            if (needMul) { expr += "*"; display += " · "; }
            expr += piece.v !== undefined ? piece.v : piece.s;
            display += piece.s;
        });
        return { expr, display, unknown };
    }

    function prepareExpr(expr) {
        return expr
            .replace(/√\s*\(/g, "sqrt(")
            .replace(/√/g, "sqrt")
            .replace(/[·×]/g, "*")
            .replace(/:/g, "/")
            .replace(/²/g, "^2")
            .replace(/³/g, "^3")
            .replace(/−/g, "-")
            .replace(/\s+/g, "")
            .replace(/(\d),(\d)/g, "$1.$2")
            .replace(/\*/g, "*");
    }

    function evalExpr(expr) {
        const src = prepareExpr(expr);
        if (!src) return NaN;
        if (/[^0-9+\-*/^().πsqrta-z]/.test(src)) return NaN;
        if (/[a-z]/.test(src.replace(/sqrt/g, ""))) return NaN;
        let pos = 0;
        function peek() { return src[pos]; }
        function parseExpr() {
            let value = parseTerm();
            while (peek() === "+" || peek() === "-") {
                const op = src[pos++];
                const rhs = parseTerm();
                value = op === "+" ? value + rhs : value - rhs;
            }
            return value;
        }
        function parseTerm() {
            let value = parseFactor();
            while (peek() === "*" || peek() === "/") {
                const op = src[pos++];
                const rhs = parseFactor();
                value = op === "*" ? value * rhs : value / rhs;
            }
            return value;
        }
        function parseFactor() {
            if (peek() === "-") { pos++; return -parseFactor(); }
            if (peek() === "+") { pos++; return parseFactor(); }
            if (src.startsWith("sqrt", pos)) {
                pos += 4;
                const open = peek() === "(";
                if (open) pos++;
                const inner = parseExpr();
                if (open && peek() === ")") pos++;
                return Math.sqrt(inner);
            }
            if (peek() === "π") { pos++; return Math.PI; }
            let value;
            if (peek() === "(") {
                pos++;
                value = parseExpr();
                if (peek() === ")") pos++;
            } else {
                const start = pos;
                while (pos < src.length && /[0-9.]/.test(src[pos])) pos++;
                const token = src.slice(start, pos);
                if (!token) throw new Error("empty");
                value = parseFloat(token);
            }
            if (peek() === "^") {
                pos++;
                value = Math.pow(value, parseFactor());
            }
            return value;
        }
        try {
            const result = parseExpr();
            if (pos !== src.length) return NaN;
            return result;
        } catch (e) {
            return NaN;
        }
    }

    function normalizeFormula(formula) {
        return String(formula || "")
            .replace(/[′'ʹ]/g, "")
            .replace(/([A-Za-zυ])_[A-Za-zа-яА-Я]+/g, "$1")
            .replace(/[ₓ]/g, "")
            .replace(/\s*\[.*?\]\s*/g, " ");
    }

    function splitFormula(formula) {
        let text = String(formula || "").trim();
        const eq = text.indexOf("=");
        if (eq < 1) return null;
        let rhs = text.slice(eq + 1).trim();
        const secondEq = rhs.indexOf("=");
        if (secondEq > 0) rhs = rhs.slice(0, secondEq).trim();
        rhs = rhs.replace(/[,;.]+$/, "").trim();
        return { lhs: text.slice(0, eq).trim(), rhs };
    }

    /* ---------- СБОРКА РАЗБОРА ---------- */

    function analyze(task) {
        const lang = currentLang();
        const question = pick(task && task.question);
        const givens = parseGivens(question, task);
        let formula = taskFormula(task);
        let fromConspectus = false;
        if (!formula) {
            const list = conspectFormulas(task && task.topic);
            if (list.length) { formula = list[0]; fromConspectus = true; }
        }
        if (!formula) {
            const grade = gradeOf(task);
            formula = (CURRICULUM[grade] || CURRICULUM[8])[0];
            fromConspectus = true;
        }
        const parts = splitFormula(normalizeFormula(formula));
        const symbolsSi = symbolValues(givens, false);
        const symbolsRaw = symbolValues(givens, true);
        // константы добавляем только если в формуле они есть и не заданы в «Дано»
        const constants = Object.assign({}, CONSTANTS, { g: gradeOf(task) === 9 ? 9.8 : 10 });
        Object.keys(constants).forEach((key) => {
            if (parts && new RegExp("(^|[^A-Za-zА-Яа-я])" + key + "($|[^A-Za-zА-Яа-я])").test(parts.rhs)) {
                if (symbolsSi[key] === undefined) symbolsSi[key] = constants[key];
                if (symbolsRaw[key] === undefined) symbolsRaw[key] = constants[key];
            }
        });
        // Δt: если формула содержит Δt, а в «Дано» одна температура — это и есть изменение
        const tempItems = givens.filter((g) => g.kind === "temperature");
        if (parts && /Δ\s*t/.test(parts.rhs) && tempItems.length === 1) {
            if (symbolsSi["Δt"] === undefined) symbolsSi["Δt"] = Math.abs(tempItems[0].base);
            if (symbolsRaw["Δt"] === undefined) symbolsRaw["Δt"] = Math.abs(tempItems[0].value);
        }
        // неявные нули: «из состояния покоя», «до остановки»
        const text = pick(task && task.question);
        const setImplicit = (map) => {
            if (/состояния покоя|из покоя|from rest|тыныштық|бастапқы жылдамдық/i.test(text)) {
                ["v0", "υ₀", "υ0", "u0", "s0"].forEach((key) => { if (map[key] === undefined) map[key] = 0; });
            }
            if (/до остановки|останавливается|to rest|тоқтайды/i.test(text)) {
                ["v", "υ"].forEach((key) => { if (map[key] === undefined) map[key] = 0; });
            }
        };
        setImplicit(symbolsSi);
        setImplicit(symbolsRaw);
        aliasSymbols(parts && parts.rhs, symbolsSi);
        aliasSymbols(parts && parts.rhs, symbolsRaw);

        let substituted = "";
        let numeric = NaN;
        const unknown = [];
        let tokSi = null, tokRaw = null;
        if (parts) {
            tokSi = tokenize(parts.rhs, symbolsSi);
            tokRaw = tokenize(parts.rhs, symbolsRaw);
            tokSi.unknown.forEach((u) => unknown.push(u));
        }
        const official = toNum(task && task.correctAnswer);
        const tolOf = (official) => Math.max(Number(task && task.tolerance) || 0, Math.abs(official) * 0.02, 0.01);
        const rawValue = tokRaw && tokRaw.unknown.length === 0 ? evalExpr(tokRaw.expr) : NaN;
        const siValue = tokSi && tokSi.unknown.length === 0 ? evalExpr(tokSi.expr) : NaN;
        let chosen = "si";
        if (isFinite(official) && isFinite(rawValue) && Math.abs(rawValue - official) <= tolOf(official)) {
            chosen = "raw";
        } else if (isFinite(official) && isFinite(siValue) && Math.abs(siValue - official) <= tolOf(official)) {
            chosen = "si";
        } else if (!isFinite(siValue) && isFinite(rawValue)) {
            chosen = "raw";
        }
        const tok = chosen === "raw" ? tokRaw : tokSi;
        if (tok && tok.unknown.length === 0) {
            substituted = tok.display || tok.expr;
            numeric = evalExpr(tok.expr);
        } else if (tok) {
            substituted = tok.display || tok.expr;
        }
        // Приводим результат к единице ответа: Дж → кДж, Вт → кВт, Н → кН, м/с → км/ч и т. п.
        if (isFinite(numeric) && isFinite(official) && Math.abs(numeric - official) > tolOf(official)) {
            const factors = [1e-3, 1e3, 1e-6, 1e6, 3600, 1 / 3600, 3.6, 1 / 3.6, 1e-4, 1e4];
            for (let i = 0; i < factors.length; i++) {
                const scaled = numeric * factors[i];
                if (Math.abs(scaled - official) <= tolOf(official)) { numeric = scaled; break; }
            }
        }
        const close = isFinite(numeric) && (!isFinite(official) || Math.abs(numeric - official) <= tolOf(official));
        const reliable = isFinite(numeric) && (!isFinite(official) || close);
        const answerValue = isFinite(official) ? official : numeric;
        return {
            lang,
            givens,
            formula,
            fromConspectus,
            parts,
            substituted,
            unknown: Array.from(new Set(unknown)),
            numeric: reliable ? numeric : NaN,
            reliable,
            unitMode: chosen,
            answerValue,
            answerText: formatAnswer(task, answerValue),
            formulas: formulaCard(task),
            topic: topicTitle(task),
            task
        };
    }

    function unitFromQuestion(task) {
        const text = pick(task && task.question) + " " + pick(task && task.explanation);
        const m = text.match(/(?:Ответ|Жауабы|Answer)\s*(?:в|in|—|-|:)?\s*([A-Za-zА-Яа-я°%²³·/0-9]+)/i);
        if (!m) return "";
        return m[1];
    }

    function formatAnswer(task, value) {
        if (!task) return "";
        if (task.type === "numeric") {
            if (!isFinite(value)) return "";
            const unit = task.unit || task.answerUnit || unitFromQuestion(task) || "";
            return `${fmt(value)}${unit ? " " + unit : ""}`;
        }
        if (task.type === "multiple-choice" || task.type === "multi-select") {
            const options = task.options ? (task.options[currentLang()] || task.options.ru || []) : [];
            if (Array.isArray(task.correctAnswer)) {
                return task.correctAnswer.map((idx) => options[idx]).filter(Boolean).join("; ");
            }
            if (typeof task.correctAnswer === "number") return options[task.correctAnswer] || "";
        }
        if (task.type === "true-false") {
            const bool = task.correctAnswer === true || task.correctAnswer === "true" || task.correctAnswer === 1;
            return bool ? { ru: "Верно", kk: "Дұрыс", en: "True" }[currentLang()] : { ru: "Неверно", kk: "Дұрыс емес", en: "False" }[currentLang()];
        }
        return "";
    }

    /* ---------- РЕНДЕР ---------- */

    function solveMarkup(data) {
        const lang = data.lang;
        const pack = T[lang] || T.ru;
        const rows = data.givens.map((item) => `
            <tr>
                <td class="pq-g-sym">${esc(item.label)}</td>
                <td class="pq-g-name">${esc(item.name[lang] || item.name.ru || "—")}</td>
                <td class="pq-g-val">${esc(item.rawText)} ${esc(item.rawUnit)}</td>
                <td class="pq-g-si">${esc(item.siText)}</td>
            </tr>`).join("");

        const givenBlock = data.givens.length
            ? `<table class="pq-given-table">
                   <thead><tr><th>${esc(pack.symbol)}</th><th>${esc(pack.value)}</th><th>${esc(pack.givenCol)}</th><th>${esc(pack.siCol)}</th></tr></thead>
                   <tbody>${rows}</tbody>
               </table>`
            : `<p class="pq-solver-empty">${esc(pack.noData)}</p>`;

        const conversions = data.givens.filter((item) => item.siText !== "—");
        const siNote = conversions.length
            ? conversions.map((i) => `${i.label} = ${i.siText}`).join("; ")
            : pack.convertNone;

        const steps = [];
        steps.push(`<li><b>1.</b> ${esc(pack.stepFormula)}: <span class="pq-formula-inline">${esc(data.formula)}</span></li>`);
        if (data.givens.length) {
            steps.push(`<li><b>2.</b> ${esc(pack.stepSub)}: <span class="pq-formula-inline">${esc(data.parts ? data.parts.lhs + " = " + data.substituted : "—")}</span></li>`);
            if (isFinite(data.numeric)) {
                const unit = data.task && data.task.type === "numeric" ? (data.task.unit || unitFromQuestion(data.task) || "") : "";
                steps.push(`<li><b>3.</b> ${esc(pack.stepCalc)}: <span class="pq-formula-inline">${esc(data.parts.lhs)} = ${esc(fmt(data.numeric))} ${esc(unit)}</span></li>`);
            } else if (!data.reliable && data.parts) {
                steps.push(`<li><b>3.</b> ${esc(pack.stepCalc)}: <span class="pq-formula-inline">${esc(data.parts.lhs)} = ?</span> — ${esc({ ru: "подставь свои значения", kk: "өз мәндеріңді қой", en: "substitute your values" }[lang])}</li>`);
            }
        } else {
            steps.push(`<li><b>2.</b> ${esc(pack.noDataShort)}</li>`);
        }

        const unknownNote = data.unknown.length
            ? `<p class="pq-solver-unknown">${esc(pack.unknown)}<b>${esc(data.unknown.join(", "))}</b></p>`
            : "";

        const answer = data.answerText || (isFinite(data.numeric) ? fmt(data.numeric) : "");

        return `
            <div class="pq-solver-grid">
                <section class="pq-solver-block pq-block-given">
                    <h4>📋 ${esc(pack.given)}</h4>
                    ${givenBlock}
                    <p class="pq-solver-hint">${esc(pack.givenIntro)}</p>
                </section>
                <section class="pq-solver-block pq-block-si">
                    <h4>🔁 ${esc(pack.convert)}</h4>
                    <p class="pq-si-note">${esc(siNote)}</p>
                    <p class="pq-solver-hint">${esc(pack.siIntro)}</p>
                </section>
                <section class="pq-solver-block pq-block-formula">
                    <h4>📐 ${esc(pack.formula)}</h4>
                    <div class="pq-formula-big">${esc(data.formula)}</div>
                    <p class="pq-solver-hint">${esc(pack.stepFormula)}.</p>
                </section>
                <section class="pq-solver-block pq-block-solution">
                    <h4>✏️ ${esc(pack.solution)}</h4>
                    <ol class="pq-steps">${steps.join("")}</ol>
                    ${unknownNote}
                    <div class="pq-answer-slot">
                        <button type="button" class="pq-solver-reveal" id="pq-solver-reveal">${esc(pack.showAnswer)}</button>
                        <div class="pq-answer-value" id="pq-answer-value" hidden>
                            <span class="pq-answer-label">${esc(pack.answer)}</span>
                            <b>${esc(answer)}</b>
                        </div>
                    </div>
                    <p class="pq-solver-hint">${esc(pack.answerIntro)}</p>
                </section>
            </div>`;
    }

    function formulaMarkup(data) {
        const pack = T[data.lang] || T.ru;
        const items = data.formulas.map((formula) => {
            const legend = formulaLegend(formula, data.lang);
            return `<li><span class="pq-fc-f">${esc(formula)}</span>${legend ? `<span class="pq-fc-legend">${esc(legend)}</span>` : ""}</li>`;
        }).join("");
        return `
            <div class="pq-formula-card">
                <div class="pq-fc-head">
                    <div>
                        <div class="pq-fc-kicker">${esc(pack.formulasHint)}</div>
                        <h4>${esc(data.topic || pack.topicFallback)}</h4>
                    </div>
                    <span class="pq-fc-count">${data.formulas.length}</span>
                </div>
                ${data.formulas.length ? `<ul class="pq-fc-list">${items}</ul>` : `<p class="pq-solver-empty">${esc(pack.noFormulas)}</p>`}
                <p class="pq-fc-note">💡 ${esc(pack.siIntro)}</p>
            </div>`;
    }

    function formulaLegend(formula, lang) {
        const parts = formula.split("=");
        const rhs = parts.length > 1 ? parts[1] : formula;
        const found = [];
        const re = /[A-Za-zА-Яа-яΔͰ-Ͽ][A-Za-z0-9₀-₉Ͱ-Ͽ]*/g;
        let m;
        while ((m = re.exec(rhs))) {
            const key = fromSub(m[0]);
            if (NAME[key] && found.indexOf(key) < 0) found.push(key);
        }
        return found.slice(0, 4).map((key) => `${key} — ${NAME[key][lang] || NAME[key].ru}`).join("; ");
    }

    /* ---------- UI ---------- */

    const state = {
        task: null,
        open: false,
        tab: "solution",
        data: null,
        revealed: false,
        autoOpened: false
    };

    function ensureBar() {
        const modal = document.getElementById("task-modal");
        if (!modal) return null;
        let bar = document.getElementById("pq-solver-bar");
        if (bar) return bar;
        bar = document.createElement("div");
        bar.id = "pq-solver-bar";
        bar.className = "pq-solver-bar";
        bar.innerHTML = `
            <button type="button" class="pq-solver-btn" id="pq-solver-toggle">
                <span class="pq-solver-btn-icon">🧮</span>
                <span class="pq-solver-btn-text"><b>${esc(tr("open"))}</b><small>${esc(tr("openHint"))}</small></span>
            </button>
            <button type="button" class="pq-solver-btn pq-solver-btn-formula" id="pq-formula-toggle">
                <span class="pq-solver-btn-icon">📐</span>
                <span class="pq-solver-btn-text"><b>${esc(tr("formulas"))}</b><small>${esc(tr("formulasHint"))}</small></span>
            </button>`;
        const feedback = document.getElementById("task-feedback");
        if (feedback && feedback.parentNode) feedback.parentNode.insertBefore(bar, feedback);
        else (modal.querySelector(".task-content") || modal).appendChild(bar);

        bar.querySelector("#pq-solver-toggle").addEventListener("click", () => toggle("solution"));
        bar.querySelector("#pq-formula-toggle").addEventListener("click", () => toggle("formulas"));
        return bar;
    }

    function ensurePanel() {
        let panel = document.getElementById("pq-solver-panel");
        if (panel) return panel;
        panel = document.createElement("div");
        panel.id = "pq-solver-panel";
        panel.className = "pq-solver-panel";
        panel.hidden = true;
        const bar = ensureBar();
        if (bar && bar.parentNode) bar.parentNode.insertBefore(panel, bar.nextSibling);
        return panel;
    }

    function toggle(tab) {
        const panel = ensurePanel();
        if (!panel) return;
        if (state.open && state.tab === tab) {
            closePanel();
            return;
        }
        state.open = true;
        state.tab = tab;
        state.revealed = false;
        render();
        panel.hidden = false;
        const bar = document.getElementById("pq-solver-bar");
        if (bar) {
            bar.querySelectorAll(".pq-solver-btn").forEach((btn) => btn.classList.remove("active"));
            const active = bar.querySelector(tab === "formulas" ? "#pq-formula-toggle" : "#pq-solver-toggle");
            if (active) active.classList.add("active");
        }
        try {
            if (window.PQSound && PQSound.play) PQSound.play("click");
        } catch (e) {}
        setTimeout(() => {
            const target = panel.getBoundingClientRect();
            if (target.bottom > window.innerHeight) panel.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }, 40);
    }

    function closePanel() {
        const panel = document.getElementById("pq-solver-panel");
        if (panel) panel.hidden = true;
        state.open = false;
        const bar = document.getElementById("pq-solver-bar");
        if (bar) bar.querySelectorAll(".pq-solver-btn").forEach((btn) => btn.classList.remove("active"));
    }

    function render() {
        const panel = ensurePanel();
        if (!panel) return;
        const task = state.task || (window.Game && Game.currentTask);
        if (!task) return;
        state.task = task;
        const data = analyze(task);
        state.data = data;
        const tabs = `
            <div class="pq-solver-tabs" role="tablist">
                <button type="button" class="pq-solver-tab ${state.tab === "solution" ? "active" : ""}" data-pq-tab="solution">📋 ${esc(tr("tabSolution"))}</button>
                <button type="button" class="pq-solver-tab ${state.tab === "formulas" ? "active" : ""}" data-pq-tab="formulas">📐 ${esc(tr("tabFormulas"))}</button>
                <button type="button" class="pq-solver-collapse" id="pq-solver-collapse" aria-label="${esc(tr("close"))}">×</button>
            </div>`;
        const body = state.tab === "formulas" ? formulaMarkup(data) : solveMarkup(data);
        const autoNote = state.autoOpened ? `<p class="pq-solver-auto">💡 ${esc(tr("autoNote"))}</p>` : "";
        panel.innerHTML = tabs + autoNote + body;

        panel.querySelectorAll("[data-pq-tab]").forEach((btn) => {
            btn.addEventListener("click", () => {
                state.tab = btn.getAttribute("data-pq-tab");
                state.revealed = false;
                render();
            });
        });
        const collapse = panel.querySelector("#pq-solver-collapse");
        if (collapse) collapse.addEventListener("click", closePanel);
        const reveal = panel.querySelector("#pq-solver-reveal");
        if (reveal) {
            reveal.addEventListener("click", () => {
                state.revealed = !state.revealed;
                const slot = panel.querySelector("#pq-answer-value");
                if (slot) slot.hidden = !state.revealed;
                reveal.textContent = state.revealed ? tr("hideAnswer") : tr("showAnswer");
                try { if (window.PQSound) PQSound.play("energy"); } catch (e) {}
            });
        }
    }

    function reset() {
        state.open = false;
        state.revealed = false;
        state.autoOpened = false;
        const panel = document.getElementById("pq-solver-panel");
        if (panel) { panel.hidden = true; panel.innerHTML = ""; }
        const bar = document.getElementById("pq-solver-bar");
        if (bar) {
            bar.querySelectorAll(".pq-solver-btn").forEach((btn) => btn.classList.remove("active"));
            const label = bar.querySelector("#pq-solver-toggle .pq-solver-btn-text b");
            if (label) label.textContent = tr("open");
            const hint = bar.querySelector("#pq-solver-toggle .pq-solver-btn-text small");
            if (hint) hint.textContent = tr("openHint");
            const fLabel = bar.querySelector("#pq-formula-toggle .pq-solver-btn-text b");
            if (fLabel) fLabel.textContent = tr("formulas");
        }
    }

    /* ---------- ИНТЕГРАЦИЯ ---------- */

    function install() {
        if (typeof Game === "undefined" || !Game) return false;
        if (Game.__pqSolverInstalled) return true;
        Game.__pqSolverInstalled = true;

        const origShowTask = Game.showTask;
        Game.showTask = function (task) {
            const result = origShowTask.apply(this, arguments);
            try {
                state.task = task;
                reset();
                ensureBar();
                ensurePanel();
            } catch (e) { console.warn("PQProblemSolver.showTask", e); }
            return result;
        };

        if (typeof Game.renderTaskBody === "function") {
            const origRenderBody = Game.renderTaskBody;
            Game.renderTaskBody = function (task) {
                const result = origRenderBody.apply(this, arguments);
                try {
                    ensureBar();
                    if (state.open) render();
                } catch (e) {}
                return result;
            };
        }

        if (typeof Game.checkAnswer === "function") {
            const origCheck = Game.checkAnswer;
            Game.checkAnswer = function () {
                const before = this.taskAttempts || 0;
                const result = origCheck.apply(this, arguments);
                try {
                    const now = this.taskAttempts || 0;
                    if (now > before && now >= 2 && !state.open) {
                        state.autoOpened = true;
                        state.tab = "solution";
                        // даём игре отрисовать фидбек, затем мягко открываем разбор
                        setTimeout(() => { state.open = true; render(); const p = document.getElementById("pq-solver-panel"); if (p) p.hidden = false; }, 420);
                    }
                } catch (e) {}
                return result;
            };
        }

        document.addEventListener("pq:lang-changed", () => {
            try {
                reset();
                if (state.open) render();
            } catch (e) {}
        });
        return true;
    }

    function boot() {
        if (!install()) {
            let tries = 0;
            const timer = setInterval(() => {
                tries += 1;
                if (install() || tries > 40) clearInterval(timer);
            }, 250);
        }
        ensureBar();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        setTimeout(boot, 0);
    }

    window.PQProblemSolver = {
        version: VERSION,
        open: () => toggle("solution"),
        openFormulas: () => toggle("formulas"),
        close: closePanel,
        analyze,
        parseGivens,
        _tokenize: tokenize,
        _evalExpr: evalExpr,
        _normUnit: normUnit,
        _units: UNITS
    };
})();
