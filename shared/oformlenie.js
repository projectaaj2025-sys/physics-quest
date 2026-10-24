/* ============================================================
   PQ OFORMLENIE — «Образец оформления задачи» для вкладки
   «Конспект». Показывает, КАК записать задачу в тетради:
   Дано → СИ → Формула → Решение → Ответ.
   Никаких «готовых ответов» в окне задачи: в задаче ученик
   видит только шаблон, а образец записи живёт в конспекте.
   ============================================================ */
(function () {
    "use strict";

    const VERSION = "1.0";

    const T = {
        ru: {
            kicker: "ОБРАЗЕЦ ОФОРМЛЕНИЯ",
            title: "Как записать решение в тетради",
            intro: "Любую задачу по физике оформляют по одной схеме: слева «Дано» и «СИ», справа «Решение». Сначала формула в буквах, потом подстановка чисел, потом ответ с единицей.",
            given: "Дано",
            si: "СИ",
            solution: "Решение",
            answer: "Ответ",
            blank: "Пустой шаблон для тетради",
            blankHint: "Перепиши столбики в тетрадь и заполняй их по шагам — так проверяющий увидит ход мысли, а не только число.",
            steps: "Порядок действий",
            stepList: [
                "Записываем, что дано, и что нужно найти (с буквой и единицей).",
                "Переводим все величины в СИ: г → кг, см → м, мин → с, кПа → Па.",
                "Пишем формулу в общем виде и выражаем неизвестную величину.",
                "Подставляем числа с единицами и считаем.",
                "Записываем ответ с единицей и проверяем его «на здравый смысл»."
            ],
            taskHint: "В окне задачи показывается только этот шаблон — числа подставляй сам."
        },
        kk: {
            kicker: "БЕЗЕНДІРУ ҮЛГІСІ",
            title: "Шешімді дәптерге қалай жазу керек",
            intro: "Физикадағы кез келген есеп бір схемамен безендіріледі: сол жақта «Берілгені» мен «ХБЖ», оң жақта «Шешуі». Алдымен әріптермен формула, сосын сандарды қою, соңында өлшем бірлігімен жауап.",
            given: "Берілгені",
            si: "ХБЖ",
            solution: "Шешуі",
            answer: "Жауабы",
            blank: "Дәптерге арналған бос үлгі",
            blankHint: "Бағандарды дәптерге көшіріп, қадам бойынша толтыр — сонда тек сан емес, ой жүгірту жолы көрінеді.",
            steps: "Әрекет тәртібі",
            stepList: [
                "Берілгенін және табу керегін (әріппен және өлшем бірлігімен) жазамыз.",
                "Барлық шаманы ХБЖ-ға келтіреміз: г → кг, см → м, мин → с, кПа → Па.",
                "Формуланы жалпы түрде жазып, белгісіз шаманы өрнектейміз.",
                "Сандарды өлшем бірліктерімен қойып, есептейміз.",
                "Жауапты өлшем бірлігімен жазып, «мағынасына» қарап тексереміз."
            ],
            taskHint: "Есеп терезесінде тек осы үлгі көрсетіледі — сандарды өзің қоясың."
        },
        en: {
            kicker: "WORKED FORMAT",
            title: "How to write a solution in your notebook",
            intro: "Every physics problem follows one layout: “Given” and “SI” on the left, “Solution” on the right. First the formula in letters, then substitute numbers, then the answer with a unit.",
            given: "Given",
            si: "SI",
            solution: "Solution",
            answer: "Answer",
            blank: "Blank notebook template",
            blankHint: "Copy these columns into your notebook and fill them step by step — then the reader sees your reasoning, not just a number.",
            steps: "Order of steps",
            stepList: [
                "Write down the given values and what to find (letter + unit).",
                "Convert everything to SI: g → kg, cm → m, min → s, kPa → Pa.",
                "Write the formula in general form and express the unknown.",
                "Substitute the numbers with units and calculate.",
                "Write the answer with a unit and sanity-check it."
            ],
            taskHint: "The task window shows only this template — substitute the numbers yourself."
        }
    };

    /* ---------- образцы: по одному на ключевую формулу ---------- */
    const SAMPLES = {
        7: [
            {
                id: "density", topics: ["p4", "p5", "p6"],
                title: { ru: "Плотность вещества", kk: "Заттың тығыздығы", en: "Density of matter" },
                given: [["m", "780 г"], ["V", "100 см³"]],
                si: [["m", "0,78 кг"], ["V", "1·10⁻⁴ м³"]],
                formula: "ρ = m / V",
                solution: ["ρ = 0,78 кг / 1·10⁻⁴ м³ = 7800 кг/м³"],
                answer: "ρ = 7800 кг/м³ (сталь)"
            },
            {
                id: "force", topics: ["p10", "p11", "p12"],
                title: { ru: "Сила тяжести и вес", kk: "Ауырлық күші және салмақ", en: "Gravity and weight" },
                given: [["m", "2,5 кг"], ["g", "9,8 Н/кг"]],
                si: [["m", "2,5 кг"], ["g", "9,8 Н/кг"]],
                formula: "F = m · g",
                solution: ["F = 2,5 кг · 9,8 Н/кг = 24,5 Н"],
                answer: "F ≈ 25 Н"
            },
            {
                id: "pressure", topics: ["p15", "p16", "p17", "p18"],
                title: { ru: "Давление твёрдого тела", kk: "Қатты дененің қысымы", en: "Pressure of a solid body" },
                given: [["F", "600 Н"], ["S", "0,02 м²"]],
                si: [["F", "600 Н"], ["S", "0,02 м²"]],
                formula: "p = F / S",
                solution: ["p = 600 Н / 0,02 м² = 30 000 Па"],
                answer: "p = 30 кПа"
            },
            {
                id: "hydro", topics: ["p19", "p20", "p21", "p22"],
                title: { ru: "Давление жидкости", kk: "Сұйықтық қысымы", en: "Pressure in a liquid" },
                given: [["ρ", "1000 кг/м³"], ["h", "12 м"], ["g", "9,8 Н/кг"]],
                si: [["ρ", "1000 кг/м³"], ["h", "12 м"], ["g", "9,8 Н/кг"]],
                formula: "p = ρ · g · h",
                solution: ["p = 1000 · 9,8 · 12 = 117 600 Па"],
                answer: "p ≈ 118 кПа"
            },
            {
                id: "arch", topics: ["p23", "p24", "p25", "p26"],
                title: { ru: "Сила Архимеда", kk: "Архимед күші", en: "Archimedes force" },
                given: [["V", "0,5 м³"], ["ρж", "1000 кг/м³"]],
                si: [["V", "0,5 м³"], ["ρж", "1000 кг/м³"]],
                formula: "F_A = ρж · g · V",
                solution: ["F_A = 1000 · 9,8 · 0,5 = 4900 Н"],
                answer: "F_A = 4,9 кН"
            },
            {
                id: "work", topics: ["p27", "p28", "p29"],
                title: { ru: "Работа и мощность", kk: "Жұмыс және қуат", en: "Work and power" },
                given: [["F", "200 Н"], ["s", "15 м"], ["t", "30 с"]],
                si: [["F", "200 Н"], ["s", "15 м"], ["t", "30 с"]],
                formula: "A = F · s;  N = A / t",
                solution: ["A = 200 · 15 = 3000 Дж", "N = 3000 / 30 = 100 Вт"],
                answer: "A = 3 кДж; N = 100 Вт"
            },
            {
                id: "eff", topics: ["p30", "p31", "p32"],
                title: { ru: "КПД простого механизма", kk: "Қарапайым механизмнің ПӘК", en: "Efficiency of a machine" },
                given: [["Aп", "480 Дж"], ["Aзатр", "600 Дж"]],
                si: [["Aп", "480 Дж"], ["Aзатр", "600 Дж"]],
                formula: "η = Aп / Aзатр · 100 %",
                solution: ["η = 480 / 600 · 100 % = 80 %"],
                answer: "η = 80 %"
            },
            {
                id: "speed", topics: ["p33", "p34", "p35", "p36"],
                title: { ru: "Скорость и путь", kk: "Жылдамдық және жол", en: "Speed and distance" },
                given: [["s", "1,8 км"], ["t", "6 мин"]],
                si: [["s", "1800 м"], ["t", "360 с"]],
                formula: "v = s / t",
                solution: ["v = 1800 м / 360 с = 5 м/с"],
                answer: "v = 5 м/с (18 км/ч)"
            }
        ],
        8: [
            {
                id: "heat", topics: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
                title: { ru: "Количество теплоты при нагревании", kk: "Қыздырғандағы жылу мөлшері", en: "Heat for heating" },
                given: [["m", "2 кг"], ["c", "4200 Дж/(кг·°C)"], ["t₁", "20 °C"], ["t₂", "70 °C"]],
                si: [["m", "2 кг"], ["c", "4200 Дж/(кг·°C)"], ["Δt", "50 °C"]],
                formula: "Q = c · m · Δt",
                solution: ["Δt = 70 − 20 = 50 °C", "Q = 4200 · 2 · 50 = 420 000 Дж"],
                answer: "Q = 420 кДж"
            },
            {
                id: "burn", topics: ["p9", "p10", "p11", "p12"],
                title: { ru: "Сгорание топлива и плавление", kk: "Отынның жануы және балқу", en: "Fuel burning and melting" },
                given: [["m", "0,5 кг"], ["q", "46·10⁶ Дж/кг"]],
                si: [["m", "0,5 кг"], ["q", "46·10⁶ Дж/кг"]],
                formula: "Q = q · m",
                solution: ["Q = 46·10⁶ · 0,5 = 23·10⁶ Дж"],
                answer: "Q = 23 МДж"
            },
            {
                id: "ohm", topics: ["p13", "p14", "p15", "p16", "p17", "p18"],
                title: { ru: "Закон Ома для участка цепи", kk: "Тізбек бөлігі үшін Ом заңы", en: "Ohm's law" },
                given: [["U", "12 В"], ["R", "6 Ом"]],
                si: [["U", "12 В"], ["R", "6 Ом"]],
                formula: "I = U / R",
                solution: ["I = 12 В / 6 Ом = 2 А"],
                answer: "I = 2 А"
            },
            {
                id: "power", topics: ["p19", "p20", "p21", "p22", "p23"],
                title: { ru: "Мощность и закон Джоуля–Ленца", kk: "Қуат және Джоуль–Ленц заңы", en: "Power and Joule–Lenz law" },
                given: [["I", "2 А"], ["R", "6 Ом"], ["t", "5 мин"]],
                si: [["I", "2 А"], ["R", "6 Ом"], ["t", "300 с"]],
                formula: "Q = I² · R · t",
                solution: ["Q = 2² · 6 · 300 = 7200 Дж"],
                answer: "Q = 7,2 кДж"
            },
            {
                id: "faraday", topics: ["p32", "p33", "p34", "p35", "p36", "p37"],
                title: { ru: "ЭДС индукции", kk: "Индукция ЭҚК", en: "Induced EMF" },
                given: [["N", "200"], ["ΔΦ", "0,004 Вб"], ["Δt", "0,4 с"]],
                si: [["N", "200"], ["ΔΦ", "4·10⁻³ Вб"], ["Δt", "0,4 с"]],
                formula: "ε = N · ΔΦ / Δt",
                solution: ["ε = 200 · 0,004 / 0,4 = 2 В"],
                answer: "ε = 2 В"
            },
            {
                id: "optics", topics: ["p38", "p39", "p40", "p41", "p42"],
                title: { ru: "Тонкая линза", kk: "Жұқа линза", en: "Thin lens" },
                given: [["F", "10 см"], ["d", "30 см"]],
                si: [["F", "0,1 м"], ["d", "0,3 м"]],
                formula: "1/F = 1/d + 1/f",
                solution: ["1/f = 1/10 − 1/30 = 2/30", "f = 15 см"],
                answer: "f = 15 см; Γ = 0,5×"
            },
            {
                id: "press", topics: ["p24", "p25", "p26", "p27", "p28"],
                title: { ru: "Гидравлический пресс", kk: "Гидравликалық пресс", en: "Hydraulic press" },
                given: [["F₁", "300 Н"], ["S₁", "8 см²"], ["S₂", "60 см²"]],
                si: [["F₁", "300 Н"], ["S₁", "8·10⁻⁴ м²"], ["S₂", "6·10⁻³ м²"]],
                formula: "F₂ = F₁ · S₂ / S₁",
                solution: ["F₂ = 300 · 60 / 8 = 2250 Н"],
                answer: "F₂ = 2,25 кН"
            }
        ],
        9: [
            {
                id: "kinematics", topics: ["p2", "p3", "p4", "p5", "p6", "p7"],
                title: { ru: "Путь при равноускоренном движении", kk: "Бірқалыпты үдемелі қозғалыстағы жол", en: "Distance under acceleration" },
                given: [["v₀", "5 м/с"], ["a", "2 м/с²"], ["t", "4 с"]],
                si: [["v₀", "5 м/с"], ["a", "2 м/с²"], ["t", "4 с"]],
                formula: "s = v₀·t + a·t²/2",
                solution: ["s = 5·4 + 2·16/2 = 20 + 16 = 36 м"],
                answer: "s = 36 м"
            },
            {
                id: "newton", topics: ["p8", "p9", "p10", "p11", "p12", "p13"],
                title: { ru: "Второй закон Ньютона", kk: "Ньютонның екінші заңы", en: "Newton's second law" },
                given: [["F", "24 Н"], ["m", "4 кг"]],
                si: [["F", "24 Н"], ["m", "4 кг"]],
                formula: "a = F / m",
                solution: ["a = 24 / 4 = 6 м/с²"],
                answer: "a = 6 м/с²"
            },
            {
                id: "momentum", topics: ["p14", "p15", "p16", "p17", "p18"],
                title: { ru: "Закон сохранения импульса", kk: "Импульстің сақталу заңы", en: "Momentum conservation" },
                given: [["m₁", "4 кг"], ["v₁", "6 м/с"], ["m₂", "4 кг"], ["v₂", "−1 м/с"]],
                si: [["m₁", "4 кг"], ["v₁", "6 м/с"], ["m₂", "4 кг"], ["v₂", "−1 м/с"]],
                formula: "m₁v₁ + m₂v₂ = (m₁ + m₂)·u",
                solution: ["u = (4·6 + 4·(−1)) / 8 = 20/8 = 2,5 м/с"],
                answer: "u = 2,5 м/с"
            },
            {
                id: "osc", topics: ["p21", "p22", "p23", "p24"],
                title: { ru: "Период математического маятника", kk: "Математикалық маятниктің периоды", en: "Pendulum period" },
                given: [["l", "0,5 м"], ["g", "9,8 м/с²"]],
                si: [["l", "0,5 м"], ["g", "9,8 м/с²"]],
                formula: "T = 2π·√(l/g)",
                solution: ["T = 2·3,14·√(0,5/9,8) ≈ 1,42 с"],
                answer: "T ≈ 1,42 с"
            },
            {
                id: "waves", topics: ["p25", "p26", "p27", "p28"],
                title: { ru: "Длина волны", kk: "Толқын ұзындығы", en: "Wavelength" },
                given: [["v", "60 м/с"], ["ν", "15 Гц"]],
                si: [["v", "60 м/с"], ["ν", "15 Гц"]],
                formula: "λ = v / ν",
                solution: ["λ = 60 / 15 = 4 м"],
                answer: "λ = 4 м"
            },
            {
                id: "quantum", topics: ["p29", "p30", "p31", "p32", "p33"],
                title: { ru: "Фотоэффект", kk: "Фотоэффект", en: "Photoelectric effect" },
                given: [["A", "2,3 эВ"], ["Eф", "3,0 эВ"]],
                si: [["A", "3,68·10⁻¹⁹ Дж"], ["Eф", "4,8·10⁻¹⁹ Дж"]],
                formula: "hν = A + E_к",
                solution: ["E_к = 4,8·10⁻¹⁹ − 3,68·10⁻¹⁹ = 1,12·10⁻¹⁹ Дж"],
                answer: "E_к ≈ 0,7 эВ"
            },
            {
                id: "coulomb", topics: ["p36", "p37", "p38"],
                title: { ru: "Закон Кулона", kk: "Кулон заңы", en: "Coulomb's law" },
                given: [["q₁", "2 мкКл"], ["q₂", "3 мкКл"], ["r", "0,3 м"]],
                si: [["q₁", "2·10⁻⁶ Кл"], ["q₂", "3·10⁻⁶ Кл"], ["r", "0,3 м"]],
                formula: "F = k·q₁q₂ / r²",
                solution: ["F = 9·10⁹ · 2·10⁻⁶ · 3·10⁻⁶ / 0,09 = 0,6 Н"],
                answer: "F = 0,6 Н"
            },
            {
                id: "decay", topics: ["p39", "p40", "p41", "p42"],
                title: { ru: "Закон радиоактивного распада", kk: "Радиоактивті ыдырау заңы", en: "Radioactive decay law" },
                given: [["N₀", "4000"], ["T", "6 сут"], ["t", "6 сут"]],
                si: [["N₀", "4000"], ["T", "6 сут"], ["t", "6 сут"]],
                formula: "N = N₀ · 2^(−t/T)",
                solution: ["t/T = 1 → N = 4000 · 2⁻¹ = 2000"],
                answer: "N = 2000 ядер"
            },
            {
                id: "induction", topics: ["p43", "p44", "p45", "p46", "p47", "p48"],
                title: { ru: "ЭДС индукции в катушке", kk: "Орамдағы индукция ЭҚК", en: "Coil induced EMF" },
                given: [["N", "50"], ["B", "0,5 Тл"], ["S", "40 см²"], ["Δt", "0,5 с"]],
                si: [["N", "50"], ["B", "0,5 Тл"], ["S", "4·10⁻³ м²"], ["Δt", "0,5 с"]],
                formula: "ε = N·B·S / Δt",
                solution: ["ε = 50 · 0,5 · 4·10⁻³ / 0,5 = 0,2 В"],
                answer: "ε = 0,2 В"
            }
        ]
    };

    function lang() {
        try { if (window.I18n && I18n.currentLang) return I18n.currentLang; } catch (e) {}
        try { const l = localStorage.getItem("pq_lang"); if (l) return l; } catch (e) {}
        return "ru";
    }
    function pick(obj) {
        if (!obj) return "";
        const l = lang();
        return obj[l] || obj.ru || obj.en || obj.kk || "";
    }
    function esc(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }
    function gradeSamples() {
        const g = Number(window.CURRENT_GRADE) || 8;
        return SAMPLES[g] || SAMPLES[8];
    }
    function sampleFor(topic) {
        const list = gradeSamples();
        const key = String(topic || "").replace(/^lab/, "p");
        const hit = list.find((s) => s.topics.indexOf(key) !== -1);
        return hit || list[0];
    }

    function injectCss() {
        if (document.getElementById("pq-oformlenie-css")) return;
        const st = document.createElement("style");
        st.id = "pq-oformlenie-css";
        st.textContent = `
            .pq-of-card {
                margin: 16px 0 8px;
                padding: 16px 18px;
                border-radius: 16px;
                background: linear-gradient(160deg, #ffffff 0%, #f2f7fd 100%);
                border: 1px solid rgba(47, 125, 184, 0.28);
                color: #152a40;
                box-shadow: 0 10px 26px rgba(40, 64, 96, 0.12);
            }
            .pq-of-kicker {
                font-size: 10.5px; font-weight: 900; letter-spacing: 0.09em;
                color: #2f7db8; text-transform: uppercase;
            }
            .pq-of-card h3 { margin: 4px 0 6px; font-size: 17px; color: #10263c; }
            .pq-of-intro { margin: 0 0 12px; font-size: 13px; line-height: 1.5; color: #46688c; }
            .pq-of-table {
                display: grid;
                grid-template-columns: 1.05fr 0.85fr 1.6fr;
                gap: 0;
                border: 1px solid rgba(120, 152, 186, 0.45);
                border-radius: 12px;
                overflow: hidden;
                background: #fff;
            }
            .pq-of-table > div { padding: 8px 10px; border-bottom: 1px solid rgba(120, 152, 186, 0.28); font-size: 13px; }
            .pq-of-table .pq-of-head {
                font-weight: 900; font-size: 11.5px; letter-spacing: 0.04em; text-transform: uppercase;
                background: rgba(47, 125, 184, 0.12); color: #1f5f8c;
            }
            .pq-of-table .pq-of-main { grid-row: span 2; border-left: 1px solid rgba(120, 152, 186, 0.28); }
            .pq-of-table .pq-of-row-eq { font-family: ui-monospace, Menlo, Consolas, monospace; font-weight: 800; color: #17324d; }
            .pq-of-table .pq-of-answer { font-weight: 900; color: #1d7a4c; }
            .pq-of-var { font-family: ui-monospace, Menlo, Consolas, monospace; font-weight: 800; color: #2f7db8; }
            .pq-of-fig { font-style: italic; color: #46688c; font-size: 12px; }
            .pq-of-steps { margin: 12px 0 0; padding-left: 20px; font-size: 12.5px; line-height: 1.55; color: #33546f; }
            .pq-of-steps li { margin-bottom: 3px; }
            .pq-of-blank {
                margin-top: 12px; padding: 12px;
                border-radius: 12px; border: 1.5px dashed rgba(47, 125, 184, 0.5);
                background: rgba(226, 240, 252, 0.5);
            }
            .pq-of-blank b { display: block; margin-bottom: 6px; font-size: 12.5px; color: #1f5f8c; }
            .pq-of-blank pre {
                margin: 0; font-family: ui-monospace, Menlo, Consolas, monospace;
                font-size: 12px; line-height: 1.75; color: #33546f; white-space: pre-wrap;
            }
            .pq-of-note { margin: 10px 0 0; font-size: 11.5px; color: #7d95ae; }
        `;
        document.head.appendChild(st);
    }

    function render(topic) {
        injectCss();
        const t = T[lang()] || T.ru;
        const s = sampleFor(topic);
        const givens = s.given.map(([sym, val]) => `<div><span class="pq-of-var">${esc(sym)}</span> = ${esc(val)}</div>`).join("");
        const sis = s.si.map(([sym, val]) => `<div>${esc(sym)} = ${esc(val)}</div>`).join("");
        const sol = [
            `<div class="pq-of-row-eq">${esc(s.formula)}</div>`,
            ...s.solution.map((line) => `<div class="pq-of-row-eq">${esc(line)}</div>`),
            `<div class="pq-of-answer">${esc(t.answer)}: ${esc(s.answer)}</div>`
        ].join("");
        const blanks = [
            t.given + ": " + s.given.map(([sym]) => sym + " = ").join("; "),
            t.si + ": " + s.si.slice(0, 1).map(([sym]) => sym + " = ").join("; "),
            t.solution + ": " + s.formula,
            "____________________ = ______",
            t.answer + ": ____________"
        ].join("\n");
        return `<section class="pq-of-card" data-sample="${esc(s.id)}">
            <div class="pq-of-kicker">📓 ${esc(t.kicker)}</div>
            <h3>${esc(t.title)}</h3>
            <p class="pq-of-intro">${esc(t.intro)}</p>
            <div class="pq-of-table">
                <div class="pq-of-head">${esc(t.given)}</div>
                <div class="pq-of-head">${esc(t.si)}</div>
                <div class="pq-of-head pq-of-main" style="grid-row:span 1;border-left:1px solid rgba(120,152,186,0.28);">${esc(t.solution)} — ${esc(pick(s.title))}</div>
                <div>${givens}</div>
                <div>${sis}</div>
                <div class="pq-of-main">${sol}</div>
            </div>
            <ol class="pq-of-steps">${t.stepList.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
            <div class="pq-of-blank">
                <b>${esc(t.blank)}</b>
                <pre>${esc(blanks)}</pre>
            </div>
        </section>`;
    }

    function html(topic) {
        try {
            return render(topic);
        } catch (e) {
            return "";
        }
    }

    window.PQOformlenie = { version: VERSION, render: html, sampleFor: sampleFor, samples: SAMPLES };
})();
