/* ===== ВИЗУАЛЬНЫЕ ИНТЕРАКТИВНЫЕ CANVAS-СИМУЛЯТОРЫ ДЛЯ 8 И 9 КЛАССОВ (RU / ҚАЗ / EN) =====
   • 8 класс (6 лабораторий): Калориметр, Фазовый переход льда, Цепь Ома с реостатом,
     Подстанция Джоуля–Ленца, Индукция Фарадея, Оптическая скамья с тонкой линзой.
   • 9 класс (6 лабораторий): Баллистический полигон, Орбита спутника «Беркут»,
     Воздушная дорожка импульса, Маятник и осциллограф, Волновая ванна, Фотоэффект Эйнштейна. */

(function () {
    function getLang() {
        if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
        if (window.PQAccount) return window.PQAccount.getLang();
        return "ru";
    }
    function tr(ru, kk, en) {
        const l = getLang();
        if (l === "kk") return kk;
        if (l === "en") return en;
        return ru;
    }
    function loc(v) {
        if (!v) return "";
        if (typeof v === "string") return v;
        const l = getLang();
        return v[l] || v.ru || v.en || v.kk || "";
    }

    const LABS_BY_GRADE = {
        8: [
            {
                id: "g8_calorimeter",
                icon: "🔥",
                para: "§ 7–9",
                title: { ru: "Калориметр и тепловой баланс", kk: "Калориметр және жылу балансы", en: "Calorimeter & Thermal Balance" },
                chapter: { ru: "Тепловые явления · Q = cmΔt", kk: "Жылу құбылыстары · Q = cmΔt", en: "Thermal Physics · Q = cmΔt" },
                story: {
                    ru: "Квант: горячий металлический цилиндр погружается в воду калориметра (t₂ = 20 °C). Подбери металл, массы и начальную температуру так, чтобы равновесная температура смеси попала в рабочий коридор реактора 32–45 °C.",
                    kk: "Квант: ыстық металл цилиндр калориметрдегі суға (t₂ = 20 °C) батырылады. Қоспаның тепе-теңдік температурасы 32–45 °C дәлізіне түсетіндей етіп параметрлерді таңда.",
                    en: "KVANT: a hot metal cylinder is lowered into calorimeter water (t₂ = 20 °C). Tune metal type, masses, and temperature so equilibrium lands within 32–45 °C."
                },
                goal: {
                    ru: "Достигни t_уст = 32–45 °C и введи её значение (°C).",
                    kk: "t_орн = 32–45 °C мәніне жетіп, оны енгіз (°C).",
                    en: "Achieve t_eq = 32–45 °C and enter its value (°C)."
                },
                unit: "°C",
                tol: 0.6,
                defaults: { metal: "cu", m1: 400, t1: 180, m2: 250 },
                controls: [
                    { id: "metal", type: "select", label: { ru: "Металл цилиндра", kk: "Цилиндр металы", en: "Cylinder metal" }, options: [
                        { value: "cu", label: { ru: "Медь (c = 380 Дж/кг·°C)", kk: "Мыс (c = 380 Дж/кг·°C)", en: "Copper (c = 380 J/kg·°C)" } },
                        { value: "fe", label: { ru: "Сталь (c = 500 Дж/кг·°C)", kk: "Болат (c = 500 Дж/кг·°C)", en: "Steel (c = 500 J/kg·°C)" } },
                        { value: "al", label: { ru: "Алюминий (c = 920 Дж/кг·°C)", kk: "Алюминий (c = 920 Дж/кг·°C)", en: "Aluminum (c = 920 J/kg·°C)" } }
                    ] },
                    { id: "m1", type: "range", min: 100, max: 800, step: 50, unit: { ru: "г", kk: "г", en: "g" }, label: { ru: "Масса металла m₁", kk: "Металл массасы m₁", en: "Metal mass m₁" } },
                    { id: "t1", type: "range", min: 80, max: 300, step: 10, unit: { ru: "°C", kk: "°C", en: "°C" }, label: { ru: "Нач. температура металла t₁", kk: "Металдың баст. температурасы t₁", en: "Initial metal temp t₁" } },
                    { id: "m2", type: "range", min: 150, max: 600, step: 50, unit: { ru: "г", kk: "г", en: "g" }, label: { ru: "Масса воды m₂ (20 °C)", kk: "Су массасы m₂ (20 °C)", en: "Water mass m₂ (20 °C)" } }
                ],
                compute(p) {
                    const cMap = { cu: 380, fe: 500, al: 920 };
                    const c1 = cMap[p.metal] || 380, c2 = 4200, t2 = 20;
                    const m1 = p.m1 / 1000, m2 = p.m2 / 1000;
                    const teq = (c1 * m1 * p.t1 + c2 * m2 * t2) / (c1 * m1 + c2 * m2);
                    const q = c2 * m2 * (teq - t2);
                    return {
                        expected: Number(teq.toFixed(1)),
                        pass: teq >= 32 && teq <= 45,
                        teq, q, c1,
                        readout: tr(
                            `t_уст = ${teq.toFixed(1)} °C · Передано тепла Q = ${(q / 1000).toFixed(2)} кДж`,
                            `t_орн = ${teq.toFixed(1)} °C · Берілген жылу Q = ${(q / 1000).toFixed(2)} кДж`,
                            `t_eq = ${teq.toFixed(1)} °C · Heat exchanged Q = ${(q / 1000).toFixed(2)} kJ`
                        )
                    };
                }
            },
            {
                id: "g8_phase",
                icon: "🧊",
                para: "§ 10–14",
                title: { ru: "Плавление льда и кривая нагрева", kk: "Мұздың балқуы және қыздыру қисығы", en: "Ice Melting & Phase Curve" },
                chapter: { ru: "Агрегатные переходы · Q = λm + cmΔt", kk: "Агрегаттық ауысулар · Q = λm + cmΔt", en: "Phase Transitions · Q = λm + cmΔt" },
                story: {
                    ru: "Замёрзший трубопровод Эквилибриума содержит лёд при 0 °C. Подбери мощность горелки и время нагрева так, чтобы весь лёд растаял, а вода прогрелась до 40–75 °C.",
                    kk: "Эквилибриум құбырында 0 °C температурадағы мұз бар. Мұз толық еріп, су 40–75 °C дейін жылынуы үшін қыздырғыш қуаты мен уақытты таңда.",
                    en: "Equilibrium's conduit holds ice at 0 °C. Set heater power and time so all ice melts and the water warms to 40–75 °C."
                },
                goal: {
                    ru: "Прогрей воду до 40–75 °C и введи затраченную теплоту Q (кДж).",
                    kk: "Суды 40–75 °C дейін қыздырып, жұмсалған Q жылу мөлшерін енгіз (кДж).",
                    en: "Heat the water to 40–75 °C and enter total supplied heat Q (kJ)."
                },
                unit: "kJ",
                tol: 2.0,
                defaults: { mass: 200, power: 1500, time: 75 },
                controls: [
                    { id: "mass", type: "range", min: 100, max: 500, step: 50, unit: { ru: "г", kk: "г", en: "g" }, label: { ru: "Масса льда (при 0 °C)", kk: "Мұз массасы (0 °C)", en: "Ice mass (at 0 °C)" } },
                    { id: "power", type: "range", min: 500, max: 3000, step: 100, unit: { ru: "Вт", kk: "Вт", en: "W" }, label: { ru: "Мощность нагревателя P", kk: "Қыздырғыш қуаты P", en: "Heater power P" } },
                    { id: "time", type: "range", min: 20, max: 180, step: 5, unit: { ru: "с", kk: "с", en: "s" }, label: { ru: "Время нагрева τ", kk: "Қыздыру уақыты τ", en: "Heating time τ" } }
                ],
                compute(p) {
                    const m = p.mass / 1000;
                    const Q = p.power * p.time; // J
                    const Qmelt = 330000 * m;
                    const QboilStart = Qmelt + 4200 * m * 100;
                    let temp = 0, meltFrac = 0, stateName = "";
                    if (Q < Qmelt) {
                        meltFrac = Q / Qmelt;
                        temp = 0;
                        stateName = tr("Плавление (0 °C)", "Балқу (0 °C)", "Melting (0 °C)");
                    } else if (Q <= QboilStart) {
                        meltFrac = 1;
                        temp = (Q - Qmelt) / (4200 * m);
                        stateName = tr("Нагрев воды", "Суды қыздыру", "Heating liquid water");
                    } else {
                        meltFrac = 1;
                        temp = 100;
                        stateName = tr("Кипение (100 °C)", "Қайнау (100 °C)", "Boiling (100 °C)");
                    }
                    const qKj = Q / 1000;
                    return {
                        expected: Number(qKj.toFixed(1)),
                        pass: meltFrac >= 1 && temp >= 40 && temp <= 75,
                        temp, meltFrac, qKj, QmeltKj: Qmelt / 1000,
                        readout: `${stateName} · t = ${temp.toFixed(1)} °C · Q = ${qKj.toFixed(1)} ${tr("кДж", "кДж", "kJ")}`
                    };
                }
            },
            {
                id: "g8_ohm",
                icon: "💡",
                para: "§ 22–26",
                title: { ru: "Цепь постоянного тока и реостат", kk: "Тұрақты ток тізбегі және реостат", en: "DC Circuit & Sliding Rheostat" },
                chapter: { ru: "Закон Ома · I = U / (R₁ + R₂)", kk: "Ом заңы · I = U / (R₁ + R₂)", en: "Ohm's Law · I = U / (R₁ + R₂)" },
                story: {
                    ru: "Настрой напряжение источника и ползунок реостата, чтобы лампа маяка горела в номинальном режиме (сила тока 1,5–2,5 А). Осторожно: при I > 3,5 А перегорает предохранитель!",
                    kk: "Маяк шамы номиналды режимде (ток күші 1,5–2,5 А) жануы үшін кернеу мен реостат сырғымасын ретте. І > 3,5 А болса, сақтандырғыш күйеді!",
                    en: "Adjust source voltage and rheostat slider so the beacon lamp runs at nominal current (1.5–2.5 A). Above 3.5 A the fuse blows!"
                },
                goal: {
                    ru: "Выстави ток 1,5–2,5 А и введи силу тока I (А).",
                    kk: "Ток күшін 1,5–2,5 А аралығына қойып, I мәнін енгіз (А).",
                    en: "Set current to 1.5–2.5 A and enter current I (A)."
                },
                unit: "A",
                tol: 0.08,
                defaults: { U: 18, Rlamp: 4, Rrheo: 8 },
                controls: [
                    { id: "U", type: "range", min: 4, max: 24, step: 1, unit: { ru: "В", kk: "В", en: "V" }, label: { ru: "Напряжение источника U", kk: "Көз кернеуі U", en: "Source voltage U" } },
                    { id: "Rlamp", type: "range", min: 2, max: 10, step: 1, unit: { ru: "Ом", kk: "Ом", en: "Ω" }, label: { ru: "Сопротивление лампы R₁", kk: "Шам кедергісі R₁", en: "Lamp resistance R₁" } },
                    { id: "Rrheo", type: "range", min: 0, max: 16, step: 1, unit: { ru: "Ом", kk: "Ом", en: "Ω" }, label: { ru: "Реостат R₂", kk: "Реостат R₂", en: "Rheostat R₂" } }
                ],
                compute(p) {
                    const Rtot = p.Rlamp + p.Rrheo;
                    const Iraw = p.U / Rtot;
                    const blown = Iraw > 3.5;
                    const I = blown ? 0 : Iraw;
                    return {
                        expected: Number(I.toFixed(2)),
                        pass: !blown && I >= 1.5 && I <= 2.5,
                        I, Iraw, Rtot, blown,
                        readout: blown
                            ? tr(`💥 Предохранитель сработал (${Iraw.toFixed(2)} А > 3,5 А)! Увеличь R₂ или снизь U.`, `💥 Сақтандырғыш күйді (${Iraw.toFixed(2)} А > 3,5 А)! R₂ арттыр немесе U азайт.`, `💥 Fuse blown (${Iraw.toFixed(2)} A > 3.5 A)! Increase R₂ or lower U.`)
                            : `R_общ = ${Rtot} Ω · I = ${I.toFixed(2)} A · P_ламп = ${(I * I * p.Rlamp).toFixed(1)} W`
                    };
                }
            },
            {
                id: "g8_joule",
                icon: "🏙️",
                para: "§ 27–30",
                title: { ru: "Энергосеть кварталов · Джоуль–Ленц", kk: "Орамдар желісі · Джоуль–Ленц", en: "District Power Grid · Joule–Lenz" },
                chapter: { ru: "Соединение проводников · P = U²/R", kk: "Өткізгіштерді жалғау · P = U²/R", en: "Series & Parallel Grid · P = U²/R" },
                story: {
                    ru: "Два жилых сектора подключены к подстанции U = 120 В. Переключи сеть в параллельный режим и подбери сопротивления секторов R₁, R₂ так, чтобы суммарная мощность составила 1800–3000 Вт.",
                    kk: "Екі тұрғын сектор U = 120 В қосалқы станцияға қосылған. Параллель режимге ауыстырып, жалпы қуат 1800–3000 Вт болатындай R₁, R₂ таңда.",
                    en: "Two city sectors connect to a U = 120 V substation. Switch to parallel wiring and tune R₁, R₂ for a total power of 1800–3000 W."
                },
                goal: {
                    ru: "В параллельном режиме выведи мощность в 1800–3000 Вт и введи P (Вт).",
                    kk: "Параллель режимде қуатты 1800–3000 Вт етіп, P мәнін енгіз (Вт).",
                    en: "In parallel mode set total power to 1800–3000 W and enter P (W)."
                },
                unit: "W",
                tol: 15,
                defaults: { mode: "series", R1: 12, R2: 15 },
                controls: [
                    { id: "mode", type: "select", label: { ru: "Схема включения (U = 120 В)", kk: "Жалғау сұлбасы (U = 120 В)", en: "Wiring topology (U = 120 V)" }, options: [
                        { value: "series", label: { ru: "Последовательно (R = R₁ + R₂)", kk: "Тізбектей (R = R₁ + R₂)", en: "Series (R = R₁ + R₂)" } },
                        { value: "parallel", label: { ru: "Параллельно (1/R = 1/R₁ + 1/R₂)", kk: "Параллель (1/R = 1/R₁ + 1/R₂)", en: "Parallel (1/R = 1/R₁ + 1/R₂)" } }
                    ] },
                    { id: "R1", type: "range", min: 6, max: 30, step: 2, unit: { ru: "Ом", kk: "Ом", en: "Ω" }, label: { ru: "Сектор А: R₁", kk: "А секторы: R₁", en: "Sector A: R₁" } },
                    { id: "R2", type: "range", min: 6, max: 30, step: 2, unit: { ru: "Ом", kk: "Ом", en: "Ω" }, label: { ru: "Сектор Б: R₂", kk: "Б секторы: R₂", en: "Sector B: R₂" } }
                ],
                compute(p) {
                    const U = 120;
                    const Reqv = p.mode === "parallel" ? (p.R1 * p.R2) / (p.R1 + p.R2) : (p.R1 + p.R2);
                    const I = U / Reqv;
                    const P = U * I;
                    return {
                        expected: Math.round(P),
                        pass: p.mode === "parallel" && P >= 1800 && P <= 3000,
                        Reqv, I, P,
                        readout: `R_экв = ${Reqv.toFixed(2)} Ω · I = ${I.toFixed(1)} A · P = ${Math.round(P)} W`
                    };
                }
            },
            {
                id: "g8_faraday",
                icon: "🧲",
                para: "§ 31–36",
                title: { ru: "Электромагнитная индукция Фарадея", kk: "Фарадейдің электромагниттік индукциясы", en: "Faraday Electromagnetic Induction" },
                chapter: { ru: "Магнитный поток · ℰ = N·B·S·v/L", kk: "Магниттік ағын · ℰ = N·B·S·v/L", en: "Magnetic Flux · ℰ ∝ N·B·v" },
                story: {
                    ru: "Магнитный челнок пролетает сквозь катушку рекуперации энергии. Подбери число витков N, индукцию магнита B и скорость движения v, чтобы получить пиковую ЭДС индукции 12–28 В.",
                    kk: "Магниттік челнок индукциялық катушка арқылы өтеді. Индукция ЭҚК-і 12–28 В болуы үшін орам саны N, B индукциясы мен v жылдамдығын ретте.",
                    en: "A magnetic shuttle plunges through a recovery coil. Tune turns N, field B, and speed v to induce a peak EMF between 12 and 28 V."
                },
                goal: {
                    ru: "Получи пиковую ЭДС 12–28 В и введи её значение (В).",
                    kk: "12–28 В индукция ЭҚК-ін алып, мәнін енгіз (В).",
                    en: "Achieve a peak induced EMF of 12–28 V and enter its value (V)."
                },
                unit: "V",
                tol: 0.4,
                defaults: { N: 150, B: 0.4, v: 4 },
                controls: [
                    { id: "N", type: "range", min: 50, max: 400, step: 25, unit: { ru: "витков", kk: "орам", en: "turns" }, label: { ru: "Число витков катушки N", kk: "Катушка орам саны N", en: "Coil turns N" } },
                    { id: "B", type: "range", min: 0.2, max: 1.2, step: 0.1, unit: { ru: "Тл", kk: "Тл", en: "T" }, label: { ru: "Магнитная индукция B", kk: "Магнит индукциясы B", en: "Magnetic field B" } },
                    { id: "v", type: "range", min: 1, max: 10, step: 1, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Скорость магнита v", kk: "Магнит жылдамдығы v", en: "Magnet speed v" } }
                ],
                compute(p) {
                    // Эффективная площадь витка S/L = 0.025 м
                    const emf = p.N * p.B * p.v * 0.025;
                    return {
                        expected: Number(emf.toFixed(1)),
                        pass: emf >= 12 && emf <= 28,
                        emf,
                        readout: `ℰ_max = ${emf.toFixed(1)} V · I_инд = ${(emf / 5).toFixed(2)} A`
                    };
                }
            },
            {
                id: "g8_optics",
                icon: "🔭",
                para: "§ 37–43",
                title: { ru: "Оптическая скамья и тонкая линза", kk: "Оптикалық орындық және жұқа линза", en: "Optical Bench & Thin Converging Lens" },
                chapter: { ru: "Геометрическая оптика · 1/F = 1/d + 1/f", kk: "Геометриялық оптика · 1/F = 1/d + 1/f", en: "Ray Optics · 1/F = 1/d + 1/f" },
                story: {
                    ru: "Три лазерных луча проходят через собирающую линзу обсерватории. Размести предмет дальше фокуса (d > F) и передвинь экран точно в плоскость резкого действительного изображения!",
                    kk: "Үш лазер сәулесі жинағыш линзадан өтеді. Денені фокустан алыс қойып (d > F), экранды нақты кескін жазықтығына дәл келтір!",
                    en: "Three principal rays pass through the observatory's converging lens. Place the object beyond F (d > F) and move the screen to focus a sharp real image!"
                },
                goal: {
                    ru: "Сфокусируй резкое изображение на экране (|f_экр − f| ≤ 1,5 см) и введи f (см).",
                    kk: "Экранда анық кескін алып (|f_экр − f| ≤ 1,5 см), f мәнін енгіз (см).",
                    en: "Focus a sharp image on the screen (|f_scr − f| ≤ 1.5 cm) and enter f (cm)."
                },
                unit: "cm",
                tol: 0.8,
                defaults: { F: 12, d: 30, screen: 28 },
                controls: [
                    { id: "F", type: "range", min: 8, max: 18, step: 2, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Фокусное расстояние F", kk: "Фокус аралығы F", en: "Focal length F" } },
                    { id: "d", type: "range", min: 14, max: 50, step: 2, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Расстояние предмета d", kk: "Дене арақашықтығы d", en: "Object distance d" } },
                    { id: "screen", type: "range", min: 12, max: 60, step: 1, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Положение экрана f_экр", kk: "Экран орны f_экр", en: "Screen position f_scr" } }
                ],
                compute(p) {
                    if (p.d <= p.F) {
                        return {
                            expected: 0, pass: false, real: false, f: Infinity,
                            readout: tr("Мнимое изображение (d ≤ F) — отодвинь предмет дальше фокуса!", "Жалған кескін (d ≤ F) — денені фокустан алыстат!", "Virtual image (d ≤ F) — move object beyond focal length!")
                        };
                    }
                    const f = (p.d * p.F) / (p.d - p.F);
                    const mag = f / p.d;
                    const blur = Math.abs(p.screen - f);
                    return {
                        expected: Number(f.toFixed(1)),
                        pass: blur <= 1.5 && f <= 60,
                        real: true, f, mag, blur,
                        readout: `f = ${f.toFixed(1)} cm · Γ = ${mag.toFixed(2)}× · ${blur <= 1.5 ? tr("✨ Чёткий фокус!", "✨ Анық фокус!", "✨ Sharp focus!") : tr(`Размытие: ${blur.toFixed(1)} см`, `Бұлдырау: ${blur.toFixed(1)} см`, `Defocus: ${blur.toFixed(1)} cm`)}`
                    };
                }
            }
        ],

        9: [
            {
                id: "g9_ballistics",
                icon: "🎯",
                para: "§ 6–10",
                title: { ru: "Баллистический полигон", kk: "Баллистикалық полигон", en: "Ballistic Trajectory Range" },
                chapter: { ru: "Движение в поле тяжести · L = v₀² sin(2α)/g", kk: "Ауырлық өрісіндегі қозғалыс · L = v₀² sin(2α)/g", en: "Projectile Motion · L = v₀² sin(2α)/g" },
                story: {
                    ru: "Запусти исследовательский зонд под углом к горизонту и попади точно в посадочную платформу на отметке 80–120 м! Следи за разложением вектора скорости на v_x и v_y.",
                    kk: "Зерттеу зондын көкжиекке бұрыш жасай ұшырып, 80–120 м белгісіндегі қону алаңына дәл түсір! v_x және v_y векторларын бақыла.",
                    en: "Launch the survey probe at an angle and land squarely on the 80–120 m pad! Watch real-time velocity components v_x and v_y."
                },
                goal: {
                    ru: "Попади в зону 80–120 м и введи дальность полёта L (м).",
                    kk: "80–120 м аймағына дәл түсіп, L ұшу қашықтығын енгіз (м).",
                    en: "Land within 80–120 m and enter horizontal range L (m)."
                },
                unit: "m",
                tol: 1.5,
                defaults: { v0: 30, angle: 35, g: "9.8" },
                controls: [
                    { id: "g", type: "select", label: { ru: "Небесное тело (g)", kk: "Аспан денесі (g)", en: "Gravity field (g)" }, options: [
                        { value: "9.8", label: { ru: "Земля (g = 9,8 м/с²)", kk: "Жер (g = 9,8 м/с²)", en: "Earth (g = 9.8 m/s²)" } },
                        { value: "3.7", label: { ru: "Марс (g = 3,7 м/с²)", kk: "Марс (g = 3,7 м/с²)", en: "Mars (g = 3.7 m/s²)" } }
                    ] },
                    { id: "v0", type: "range", min: 15, max: 45, step: 1, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Начальная скорость v₀", kk: "Бастапқы жылдамдық v₀", en: "Initial speed v₀" } },
                    { id: "angle", type: "range", min: 15, max: 75, step: 5, unit: { ru: "°", kk: "°", en: "°" }, label: { ru: "Угол броска α", kk: "Лақтыру бұрышы α", en: "Launch angle α" } }
                ],
                compute(p) {
                    const g = Number(p.g) || 9.8;
                    const rad = p.angle * Math.PI / 180;
                    const L = (p.v0 * p.v0 * Math.sin(2 * rad)) / g;
                    const H = (p.v0 * p.v0 * Math.pow(Math.sin(rad), 2)) / (2 * g);
                    const T = (2 * p.v0 * Math.sin(rad)) / g;
                    return {
                        expected: Number(L.toFixed(1)),
                        pass: L >= 80 && L <= 120,
                        L, H, T, g, rad,
                        readout: `L = ${L.toFixed(1)} m · H_max = ${H.toFixed(1)} m · t = ${T.toFixed(2)} s`
                    };
                }
            },
            {
                id: "g9_orbit",
                icon: "🛰️",
                para: "§ 15–19",
                title: { ru: "Орбита спутника «Беркут»", kk: "«Бүркіт» серігінің орбитасы", en: "Berkut Satellite Orbital Insertion" },
                chapter: { ru: "Всемирное тяготение · v₁ = √(GM/(R+h))", kk: "Бүкіләлемдік тартылыс · v₁ = √(GM/(R+h))", en: "Orbital Mechanics · v₁ = √(GM/(R+h))" },
                story: {
                    ru: "Выведи спутник «Беркут» на устойчивую круговую орбиту вокруг Земли (R_З = 6400 км)! Подбери орбитальную скорость v так, чтобы она совпала с круговой скоростью на выбранной высоте h (±0,3 км/с).",
                    kk: "«Бүркіт» серігін Жер айналасындағы тұрақты дөңгелек орбитаға шығар (R_Ж = 6400 км)! Биіктікке h сәйкес дөңгелек жылдамдықты (±0,3 км/с) дәл таңда.",
                    en: "Insert satellite Berkut into a stable circular Earth orbit (R_E = 6400 km)! Match tangential speed v to circular orbital velocity at altitude h (±0.3 km/s)."
                },
                goal: {
                    ru: "Стабилизируй круговую орбиту (|v − v_кр| ≤ 0,3 км/с) и введи v_кр (км/с).",
                    kk: "Дөңгелек орбитаны тұрақтандырып (|v − v_дөң| ≤ 0,3 км/с), v_дөң мәнін енгіз (км/с).",
                    en: "Stabilize a circular orbit (|v − v_circ| ≤ 0.3 km/s) and enter v_circ (km/s)."
                },
                unit: "km/s",
                tol: 0.2,
                defaults: { h: 1600, v: 6.2 },
                controls: [
                    { id: "h", type: "range", min: 400, max: 6400, step: 400, unit: { ru: "км", kk: "км", en: "km" }, label: { ru: "Высота орбиты h", kk: "Орбита биіктігі h", en: "Orbit altitude h" } },
                    { id: "v", type: "range", min: 5.0, max: 10.5, step: 0.1, unit: { ru: "км/с", kk: "км/с", en: "km/s" }, label: { ru: "Скорость запуска v", kk: "Ұшыру жылдамдығы v", en: "Injection speed v" } }
                ],
                compute(p) {
                    const GM = 398600; // km^3 / s^2
                    const r = 6400 + p.h;
                    const vCirc = Math.sqrt(GM / r);
                    const vEsc = Math.SQRT2 * vCirc;
                    const diff = Math.abs(p.v - vCirc);
                    let regime = tr("Круговая орбита ✨", "Дөңгелек орбита ✨", "Circular orbit ✨");
                    if (p.v < vCirc - 0.3) regime = tr("Суборбитальное падение ⚠️", "Суборбиталық құлау ⚠️", "Sub-orbital decay ⚠️");
                    else if (p.v >= vEsc) regime = tr("Уход от Земли (v ≥ v₂)", "Жерден кету (v ≥ v₂)", "Escape trajectory (v ≥ v₂)");
                    else if (p.v > vCirc + 0.3) regime = tr("Вытянутый эллипс", "Созылған эллипс", "Elliptical orbit");
                    return {
                        expected: Number(vCirc.toFixed(2)),
                        pass: diff <= 0.3,
                        vCirc, vEsc, r, regime,
                        readout: `${regime} · v_кр = ${vCirc.toFixed(2)} km/s · v₂ = ${vEsc.toFixed(2)} km/s`
                    };
                }
            },
            {
                id: "g9_collision",
                icon: "🚀",
                para: "§ 20–23",
                title: { ru: "Орбитальная стыковка и импульс", kk: "Орбиталық түйісу және импульс", en: "Orbital Docking & Momentum Track" },
                chapter: { ru: "Закон сохранения импульса · m₁v₁ + m₂v₂ = (m₁+m₂)u", kk: "Импульстің сақталу заңы · m₁v₁ + m₂v₂ = (m₁+m₂)u", en: "Momentum Conservation · m₁v₁ + m₂v₂ = (m₁+m₂)u" },
                story: {
                    ru: "Грузовой модуль m₁ стыкуется со шлюзовой платформой m₂ в режиме неупругого захвата. Подбери массы и скорости так, чтобы скорость сцепки после стыковки составила 1,5–4,0 м/с.",
                    kk: "m₁ жүк модулі m₂ платформасымен серпімсіз түйіседі. Түйіскеннен кейінгі ортақ жылдамдық 1,5–4,0 м/с болатындай массалар мен жылдамдықтарды таңда.",
                    en: "Cargo module m₁ docks inelastically with platform m₂. Tune masses and velocities so the coupled post-docking speed u is 1.5–4.0 m/s."
                },
                goal: {
                    ru: "В режиме сцепки получи скорость u = 1,5–4,0 м/с и введи u (м/с).",
                    kk: "Түйісу режимінде u = 1,5–4,0 м/с жылдамдық алып, u мәнін енгіз (м/с).",
                    en: "In docking mode achieve coupled velocity u = 1.5–4.0 m/s and enter u (m/s)."
                },
                unit: "m/s",
                tol: 0.12,
                defaults: { mode: "inelastic", m1: 4, v1: 6, m2: 4, v2: -1 },
                controls: [
                    { id: "mode", type: "select", label: { ru: "Режим соударения", kk: "Соқтығысу режимі", en: "Collision mode" }, options: [
                        { value: "inelastic", label: { ru: "Неупругая стыковка (захват)", kk: "Серпімсіз түйісу", en: "Inelastic docking (latch)" } },
                        { value: "elastic", label: { ru: "Упругий отскок", kk: "Серпімді соқтығысу", en: "Elastic bounce" } }
                    ] },
                    { id: "m1", type: "range", min: 1, max: 8, step: 1, unit: { ru: "т", kk: "т", en: "t" }, label: { ru: "Масса модуля m₁", kk: "m₁ модуль массасы", en: "Module mass m₁" } },
                    { id: "v1", type: "range", min: 2, max: 10, step: 1, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Скорость v₁", kk: "v₁ жылдамдығы", en: "Velocity v₁" } },
                    { id: "m2", type: "range", min: 1, max: 8, step: 1, unit: { ru: "т", kk: "т", en: "t" }, label: { ru: "Масса платформы m₂", kk: "m₂ платформа массасы", en: "Platform mass m₂" } },
                    { id: "v2", type: "range", min: -4, max: 2, step: 1, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Скорость v₂", kk: "v₂ жылдамдығы", en: "Velocity v₂" } }
                ],
                compute(p) {
                    const Ptot = p.m1 * p.v1 + p.m2 * p.v2;
                    const u = Ptot / (p.m1 + p.m2);
                    const u1 = ((p.m1 - p.m2) * p.v1 + 2 * p.m2 * p.v2) / (p.m1 + p.m2);
                    const u2 = ((p.m2 - p.m1) * p.v2 + 2 * p.m1 * p.v1) / (p.m1 + p.m2);
                    return {
                        expected: Number(u.toFixed(2)),
                        pass: p.mode === "inelastic" && u >= 1.5 && u <= 4.0,
                        Ptot, u, u1, u2,
                        readout: p.mode === "inelastic"
                            ? `p_Σ = ${Ptot.toFixed(1)} · u = ${u.toFixed(2)} m/s`
                            : `p_Σ = ${Ptot.toFixed(1)} · u₁' = ${u1.toFixed(2)} m/s, u₂' = ${u2.toFixed(2)} m/s`
                    };
                }
            },
            {
                id: "g9_oscillator",
                icon: "🕰️",
                para: "§ 24–29",
                title: { ru: "Маятник Гюйгенса и осциллограф", kk: "Гюйгенс маятнигі және осциллограф", en: "Pendulum & Live Oscilloscope" },
                chapter: { ru: "Гармонические колебания · T = 2π√(l/g)", kk: "Гармоникалық тербелістер · T = 2π√(l/g)", en: "Harmonic Motion · T = 2π√(l/g)" },
                story: {
                    ru: "Настрой длину нити маятника так, чтобы его период колебаний составил 1,8–2,2 с (классические астрономические часы), и проверь развёртку x(t) на осциллографе!",
                    kk: "Маятниктің тербеліс периоды 1,8–2,2 с болатындай жіп ұзындығын таңдап, осциллографтағы x(t) графигін тексер!",
                    en: "Tune pendulum length l so its oscillation period is 1.8–2.2 s (an astronomical seconds pendulum) and observe the live x(t) oscilloscope trace!"
                },
                goal: {
                    ru: "Настрой период T = 1,8–2,2 с и введи T (с).",
                    kk: "Периодты T = 1,8–2,2 с етіп, T мәнін енгіз (с).",
                    en: "Set period T = 1.8–2.2 s and enter T (s)."
                },
                unit: "s",
                tol: 0.06,
                defaults: { l: 0.5, amp: 20, g: "9.8" },
                controls: [
                    { id: "g", type: "select", label: { ru: "Планета", kk: "Планета", en: "Gravity" }, options: [
                        { value: "9.8", label: { ru: "Земля (g = 9,8 м/с²)", kk: "Жер (g = 9,8 м/с²)", en: "Earth (g = 9.8 m/s²)" } },
                        { value: "1.6", label: { ru: "Луна (g = 1,6 м/с²)", kk: "Ай (g = 1,6 м/с²)", en: "Moon (g = 1.6 m/s²)" } }
                    ] },
                    { id: "l", type: "range", min: 0.2, max: 2.0, step: 0.05, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Длина нити l", kk: "Жіп ұзындығы l", en: "String length l" } },
                    { id: "amp", type: "range", min: 8, max: 30, step: 2, unit: { ru: "°", kk: "°", en: "°" }, label: { ru: "Амплитуда", kk: "Амплитуда", en: "Amplitude" } }
                ],
                compute(p) {
                    const g = Number(p.g) || 9.8;
                    const T = 2 * Math.PI * Math.sqrt(p.l / g);
                    const nu = 1 / T;
                    return {
                        expected: Number(T.toFixed(2)),
                        pass: T >= 1.8 && T <= 2.2,
                        T, nu, g,
                        readout: `T = ${T.toFixed(2)} s · ν = ${nu.toFixed(2)} Hz`
                    };
                }
            },
            {
                id: "g9_waves",
                icon: "🌊",
                para: "§ 30–35",
                title: { ru: "Волновая камера и эффект Доплера", kk: "Толқындық камера және Доплер эффектісі", en: "Wave Tank & Doppler Shift" },
                chapter: { ru: "Волны · λ = v / ν", kk: "Толқындар · λ = v / ν", en: "Wave Physics · λ = v / ν" },
                story: {
                    ru: "Настрой скорость распространения волны и частоту излучателя (при неподвижном источнике v_ист = 0), чтобы длина резонансной волны составила 4,0–8,0 м, а также понаблюдай сжатие фронтов Доплера при движении источника!",
                    kk: "Қозғалмайтын көз (v_көз = 0) үшін толқын ұзындығын 4,0–8,0 м аралығына келтір және көз қозғалғандағы Доплер толқындарының сығылуын бақыла!",
                    en: "With a stationary emitter (v_s = 0), tune wave speed and frequency for a wavelength λ of 4.0–8.0 m — and explore Doppler wavefront compression when moving!"
                },
                goal: {
                    ru: "При v_ист = 0 настрой λ = 4,0–8,0 м и введи λ (м).",
                    kk: "v_көз = 0 кезінде λ = 4,0–8,0 м орнатып, λ мәнін енгіз (м).",
                    en: "With v_s = 0 set λ = 4.0–8.0 m and enter λ (m)."
                },
                unit: "m",
                tol: 0.15,
                defaults: { v: 60, nu: 15, vs: 12 },
                controls: [
                    { id: "v", type: "range", min: 30, max: 100, step: 5, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Скорость волны v", kk: "Толқын жылдамдығы v", en: "Wave speed v" } },
                    { id: "nu", type: "range", min: 5, max: 25, step: 1, unit: { ru: "Гц", kk: "Гц", en: "Hz" }, label: { ru: "Частота источника ν", kk: "Көз жиілігі ν", en: "Source frequency ν" } },
                    { id: "vs", type: "range", min: 0, max: 20, step: 2, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Скорость источника v_ист", kk: "Көз жылдамдығы v_көз", en: "Source speed v_s" } }
                ],
                compute(p) {
                    const lam = p.v / p.nu;
                    const nuFront = p.nu * (p.v / Math.max(2, p.v - p.vs));
                    return {
                        expected: Number(lam.toFixed(2)),
                        pass: p.vs === 0 && lam >= 4.0 && lam <= 8.0,
                        lam, nuFront,
                        readout: `λ = ${lam.toFixed(2)} m · ν_приём = ${nuFront.toFixed(1)} Hz`
                    };
                }
            },
            {
                id: "g9_quantum",
                icon: "⚛️",
                para: "§ 36–43",
                title: { ru: "Фотоэлемент Эйнштейна", kk: "Эйнштейн фотоэлементі", en: "Einstein Vacuum Photocell" },
                chapter: { ru: "Квантовая физика · hν = A_вых + E_к", kk: "Кванттық физика · hν = A_шығ + E_к", en: "Quantum Physics · hν = W + E_k" },
                story: {
                    ru: "Освети катод вакуумного фотоэлемента монохроматическим лазером (E_ф = 1240 / λ эВ). Подбери металл катода и длину волны света так, чтобы вырванные фотоэлектроны имели кинетическую энергию 0,8–2,5 эВ!",
                    kk: "Вакуумдық фотоэлемент катодын лазермен жарықтандыр (E_ф = 1240 / λ эВ). Фотоэлектрондардың кинетикалық энергиясы 0,8–2,5 эВ болуы үшін металл мен толқын ұзындығын таңда!",
                    en: "Illuminate the vacuum photocell cathode with a laser (E_ph = 1240 / λ eV). Choose cathode metal and wavelength λ so photoelectrons emerge with E_k = 0.8–2.5 eV!"
                },
                goal: {
                    ru: "Получи фотоэффект с E_к = 0,8–2,5 эВ и введи E_к (эВ).",
                    kk: "E_к = 0,8–2,5 эВ фотоэффект алып, E_к мәнін енгіз (эВ).",
                    en: "Achieve photoemission with E_k = 0.8–2.5 eV and enter E_k (eV)."
                },
                unit: "eV",
                tol: 0.1,
                defaults: { work: "2.3", wavelength: 620 },
                controls: [
                    { id: "work", type: "select", label: { ru: "Металл катода (A_вых)", kk: "Катод металы (A_шығ)", en: "Cathode metal (W)" }, options: [
                        { value: "1.9", label: { ru: "Цезий (A_вых = 1,9 эВ)", kk: "Цезий (A_шығ = 1,9 эВ)", en: "Cesium (W = 1.9 eV)" } },
                        { value: "2.3", label: { ru: "Калий (A_вых = 2,3 эВ)", kk: "Калий (A_шығ = 2,3 эВ)", en: "Potassium (W = 2.3 eV)" } },
                        { value: "4.3", label: { ru: "Цинк (A_вых = 4,3 эВ)", kk: "Мырыш (A_шығ = 4,3 эВ)", en: "Zinc (W = 4.3 eV)" } }
                    ] },
                    { id: "wavelength", type: "range", min: 240, max: 700, step: 20, unit: { ru: "нм", kk: "нм", en: "nm" }, label: { ru: "Длина волны света λ", kk: "Жарық толқын ұзындығы λ", en: "Light wavelength λ" } }
                ],
                compute(p) {
                    const W = Number(p.work) || 2.3;
                    const Eph = 1240 / p.wavelength;
                    const Ek = Math.max(0, Eph - W);
                    const active = Eph > W;
                    return {
                        expected: Number(Ek.toFixed(2)),
                        pass: active && Ek >= 0.8 && Ek <= 2.5,
                        W, Eph, Ek, active,
                        readout: active
                            ? `E_ф = ${Eph.toFixed(2)} eV · E_к = ${Ek.toFixed(2)} eV · ⚡ Фототок идёт!`
                            : tr(`E_ф = ${Eph.toFixed(2)} эВ < A_вых (${W} эВ) — красная граница не пройдена!`, `E_ф = ${Eph.toFixed(2)} эВ < A_шығ (${W} эВ) — фотоэффект жоқ!`, `E_ph = ${Eph.toFixed(2)} eV < W (${W} eV) — below threshold!`)
                    };
                }
            }
        ]
    };

    function storageKey(grade) {
        const prefix = (window.PQAccount && window.PQAccount.getActiveStudentPrefix) ? window.PQAccount.getActiveStudentPrefix() : "";
        return prefix + "pq_canvas_sims_g" + grade;
    }
    function loadDone(grade) {
        try { return JSON.parse(localStorage.getItem(storageKey(grade)) || "{}"); } catch (_) { return {}; }
    }
    function saveDone(grade, map) {
        try { localStorage.setItem(storageKey(grade), JSON.stringify(map)); } catch (_) {}
    }

    function wavelengthToColor(nm) {
        if (nm < 380) return "#a855f7"; // UV
        if (nm < 440) return "#6366f1";
        if (nm < 490) return "#06b6d4";
        if (nm < 550) return "#22c55e";
        if (nm < 590) return "#eab308";
        if (nm < 630) return "#f97316";
        return "#ef4444";
    }

    function drawCanvasFrame(ctx, w, h, lab, params, calc, tick) {
        ctx.clearRect(0, 0, w, h);
        const bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, "#061126");
        bg.addColorStop(1, "#0b1e3d");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Тонкая инженерная сетка
        ctx.strokeStyle = "rgba(56, 189, 248, 0.07)";
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 32) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
        for (let y = 0; y < h; y += 32) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

        const id = lab.id;

        if (id === "g8_calorimeter") {
            // Сосуд калориметра
            const bx = w * 0.25, by = h * 0.22, bw = w * 0.34, bh = h * 0.65;
            ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 4;
            ctx.strokeRect(bx - 8, by - 4, bw + 16, bh + 10);
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2;
            ctx.strokeRect(bx, by, bw, bh);

            // Вода с цветом температуры
            const ratio = Math.min(1, Math.max(0, (calc.teq - 20) / 60));
            const rCol = Math.round(30 + 215 * ratio), bCol = Math.round(245 - 160 * ratio);
            ctx.fillStyle = `rgba(${rCol}, 130, ${bCol}, 0.52)`;
            const wh = bh * (0.45 + params.m2 / 1800);
            ctx.fillRect(bx + 2, by + bh - wh, bw - 4, wh);

            // Металлический цилиндр на нити
            const cylColors = { cu: "#ea580c", fe: "#94a3b8", al: "#e2e8f0" };
            const cw = 36 + params.m1 / 30, ch = 54;
            const cx = bx + bw * 0.5 - cw / 2, cy = by + bh - wh * 0.65;
            ctx.strokeStyle = "#cbd5e1"; ctx.beginPath(); ctx.moveTo(bx + bw * 0.5, 12); ctx.lineTo(bx + bw * 0.5, cy); ctx.stroke();
            ctx.fillStyle = cylColors[params.metal] || "#ea580c";
            ctx.fillRect(cx, cy, cw, ch);
            ctx.strokeStyle = "#fbbf24"; ctx.strokeRect(cx, cy, cw, ch);

            // Движущиеся молекулы тепла
            for (let i = 0; i < 22; i++) {
                const ang = tick * (0.03 + ratio * 0.06) + i * 1.7;
                const px = bx + 18 + ((i * 37 + Math.sin(ang) * 22) % (bw - 36));
                const py = by + bh - wh + 14 + ((i * 23 + Math.cos(ang * 1.3) * 16) % Math.max(20, wh - 24));
                ctx.fillStyle = i % 2 ? "#fde047" : "#7dd3fc";
                ctx.beginPath(); ctx.arc(Math.abs(px), py, 3, 0, Math.PI * 2); ctx.fill();
            }

            // Термометр справа
            const tx = w * 0.74, ty = h * 0.16, th = h * 0.68;
            ctx.fillStyle = "#1e293b"; ctx.fillRect(tx - 10, ty, 20, th);
            ctx.strokeStyle = "#cbd5e1"; ctx.strokeRect(tx - 10, ty, 20, th);
            const mercH = Math.min(th - 10, Math.max(12, (calc.teq / 100) * (th - 16)));
            ctx.fillStyle = calc.pass ? "#22c55e" : "#ef4444";
            ctx.fillRect(tx - 5, ty + th - mercH, 10, mercH);
            // Зелёная целевая зона 32–45 °C
            const y45 = ty + th - (45 / 100) * (th - 16);
            const y32 = ty + th - (32 / 100) * (th - 16);
            ctx.strokeStyle = "#22c55e"; ctx.setLineDash([4, 3]);
            ctx.strokeRect(tx - 16, y45, 32, y32 - y45);
            ctx.setLineDash([]);
            ctx.fillStyle = "#86efac"; ctx.font = "bold 12px sans-serif";
            ctx.fillText("32–45 °C", tx + 22, (y32 + y45) / 2 + 4);
            ctx.fillStyle = "#f8fafc"; ctx.font = "bold 15px sans-serif";
            ctx.fillText(`${calc.teq.toFixed(1)} °C`, tx - 24, ty - 8);
        }

        else if (id === "g8_phase") {
            // Слева колба с горелкой
            const fx = 48, fy = 36, fw = 150, fh = h - 88;
            ctx.strokeStyle = "#7dd3fc"; ctx.lineWidth = 2.5;
            ctx.strokeRect(fx, fy, fw, fh);
            ctx.fillStyle = "rgba(56, 189, 248, 0.35)";
            ctx.fillRect(fx + 3, fy + fh * 0.35, fw - 6, fh * 0.63);
            // Кубики льда (тают)
            if (calc.meltFrac < 1) {
                const sz = 28 * (1 - calc.meltFrac * 0.85);
                ctx.fillStyle = "rgba(224, 242, 254, 0.88)";
                for (let k = 0; k < 3; k++) {
                    ctx.fillRect(fx + 22 + k * 40, fy + fh * 0.42 + Math.sin(tick * 0.06 + k) * 4, sz, sz);
                }
            }
            // Пламя горелки
            const flameH = 14 + (params.power / 3000) * 20 + Math.sin(tick * 0.25) * 4;
            ctx.fillStyle = "#f97316";
            ctx.beginPath();
            ctx.moveTo(fx + fw / 2 - 22, h - 14);
            ctx.quadraticCurveTo(fx + fw / 2, h - 22 - flameH, fx + fw / 2 + 22, h - 14);
            ctx.fill();

            // Справа живой график T(Q)
            const gx = 245, gy = 34, gw = w - 275, gh = h - 72;
            ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
            // Целевой коридор 40–75 °C
            const y75 = gy + gh - 0.75 * gh, y40 = gy + gh - 0.40 * gh;
            ctx.fillStyle = "rgba(34, 197, 94, 0.14)";
            ctx.fillRect(gx + 1, y75, gw - 2, y40 - y75);
            // Ломаная фазового перехода
            const xMelt = gx + gw * 0.38, xBoil = gx + gw * 0.85;
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(gx, gy + gh);
            ctx.lineTo(xMelt, gy + gh);
            ctx.lineTo(xBoil, gy);
            ctx.lineTo(gx + gw, gy);
            ctx.stroke();
            // Текущая точка состояния
            let dotX = gx, dotY = gy + gh;
            if (calc.meltFrac < 1) {
                dotX = gx + (xMelt - gx) * calc.meltFrac;
                dotY = gy + gh;
            } else if (calc.temp < 100) {
                dotX = xMelt + (xBoil - xMelt) * (calc.temp / 100);
                dotY = gy + gh - (calc.temp / 100) * gh;
            } else {
                dotX = xBoil + 18; dotY = gy;
            }
            ctx.fillStyle = calc.pass ? "#22c55e" : "#fbbf24";
            ctx.beginPath(); ctx.arc(dotX, dotY, 7, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#e2e8f0"; ctx.font = "bold 12px sans-serif";
            ctx.fillText("T (°C)", gx + 6, gy + 12);
            ctx.fillText("Q (кДж)", gx + gw - 52, gy + gh + 18);
            ctx.fillText("0 °C (λm)", gx + 14, gy + gh - 8);
            ctx.fillStyle = "#86efac";
            ctx.fillText("40–75 °C", gx + 8, (y40 + y75) / 2);
        }

        else if (id === "g8_ohm") {
            const padX = 70, padY = 44, cw = w - 140, ch = h - 88;
            ctx.strokeStyle = calc.blown ? "#ef4444" : "#38bdf8";
            ctx.lineWidth = 3;
            ctx.strokeRect(padX, padY, cw, ch);

            // Дрейфующие электроны
            if (!calc.blown && calc.I > 0) {
                const perim = 2 * (cw + ch);
                for (let i = 0; i < 18; i++) {
                    const pos = ((i / 18) * perim + tick * calc.I * 1.9) % perim;
                    let ex = padX, ey = padY;
                    if (pos < cw) { ex = padX + pos; ey = padY; }
                    else if (pos < cw + ch) { ex = padX + cw; ey = padY + (pos - cw); }
                    else if (pos < 2 * cw + ch) { ex = padX + cw - (pos - cw - ch); ey = padY + ch; }
                    else { ex = padX; ey = padY + ch - (pos - 2 * cw - ch); }
                    ctx.fillStyle = "#fde047";
                    ctx.beginPath(); ctx.arc(ex, ey, 3.5, 0, Math.PI * 2); ctx.fill();
                }
            }

            // Источник тока слева
            ctx.fillStyle = "#0f172a"; ctx.fillRect(padX - 24, h / 2 - 26, 48, 52);
            ctx.strokeStyle = "#fbbf24"; ctx.strokeRect(padX - 24, h / 2 - 26, 48, 52);
            ctx.fillStyle = "#fbbf24"; ctx.font = "bold 12px sans-serif";
            ctx.fillText(`${params.U}V`, padX - 13, h / 2 + 5);

            // Реостат сверху
            const rx = padX + cw * 0.25, rw = cw * 0.45, ry = padY - 14;
            ctx.fillStyle = "#1e293b"; ctx.fillRect(rx, ry, rw, 28);
            ctx.strokeStyle = "#f97316"; ctx.strokeRect(rx, ry, rw, 28);
            const sliderX = rx + (params.Rrheo / 16) * rw;
            ctx.fillStyle = "#fb923c"; ctx.fillRect(sliderX - 6, ry - 8, 12, 44);
            ctx.fillStyle = "#fed7aa"; ctx.fillText(`R₂=${params.Rrheo}Ω`, rx + rw / 2 - 26, ry - 12);

            // Лампа накаливания справа
            const lx = padX + cw, ly = h / 2;
            const glow = Math.min(1, calc.I / 2.5);
            if (!calc.blown && glow > 0) {
                const rad = ctx.createRadialGradient(lx, ly, 6, lx, ly, 68 * glow + 16);
                rad.addColorStop(0, `rgba(254, 240, 138, ${0.85 * glow})`);
                rad.addColorStop(1, "rgba(250, 204, 21, 0)");
                ctx.fillStyle = rad;
                ctx.beginPath(); ctx.arc(lx, ly, 68 * glow + 16, 0, Math.PI * 2); ctx.fill();
            }
            ctx.fillStyle = calc.blown ? "#450a0a" : "#1e293b";
            ctx.beginPath(); ctx.arc(lx, ly, 24, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = calc.blown ? "#ef4444" : "#fde047";
            ctx.stroke();
            ctx.fillStyle = "#fff"; ctx.fillText(calc.blown ? "💥" : "💡", lx - 8, ly + 5);

            // Амперметр внизу
            ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(padX + cw / 2, padY + ch, 24, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = calc.pass ? "#22c55e" : "#38bdf8"; ctx.stroke();
            ctx.fillStyle = "#f8fafc"; ctx.font = "bold 12px sans-serif";
            ctx.fillText(`${calc.I.toFixed(2)}A`, padX + cw / 2 - 17, padY + ch + 4);
        }

        else if (id === "g8_joule") {
            const isPar = params.mode === "parallel";
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3;
            // Главная шина подстанции
            ctx.fillStyle = "#1e293b"; ctx.fillRect(36, h / 2 - 36, 84, 72);
            ctx.strokeRect(36, h / 2 - 36, 84, 72);
            ctx.fillStyle = "#fde047"; ctx.font = "bold 13px sans-serif";
            ctx.fillText("120 V", 56, h / 2 + 5);

            // Два небоскрёба-потребителя
            const drawBuilding = (bx, by, label, R) => {
                ctx.fillStyle = "#0f2447"; ctx.fillRect(bx, by, 110, 74);
                ctx.strokeStyle = calc.pass ? "#22c55e" : "#60a5fa"; ctx.strokeRect(bx, by, 110, 74);
                for (let r = 0; r < 2; r++) {
                    for (let c = 0; c < 4; c++) {
                        ctx.fillStyle = isPar ? "#fde047" : "rgba(253, 224, 71, 0.45)";
                        ctx.fillRect(bx + 12 + c * 24, by + 12 + r * 22, 14, 14);
                    }
                }
                ctx.fillStyle = "#e2e8f0"; ctx.font = "bold 12px sans-serif";
                ctx.fillText(`${label}: ${R} Ω`, bx + 16, by + 66);
            };

            if (isPar) {
                ctx.beginPath();
                ctx.moveTo(120, h / 2 - 14); ctx.lineTo(240, 34 + 37); ctx.lineTo(420, 34 + 37);
                ctx.moveTo(120, h / 2 + 14); ctx.lineTo(240, h - 108 + 37); ctx.lineTo(420, h - 108 + 37);
                ctx.stroke();
                drawBuilding(260, 26, "A", params.R1);
                drawBuilding(260, h - 104, "B", params.R2);
            } else {
                ctx.beginPath();
                ctx.moveTo(120, h / 2); ctx.lineTo(500, h / 2);
                ctx.stroke();
                drawBuilding(180, h / 2 - 37, "A", params.R1);
                drawBuilding(340, h / 2 - 37, "B", params.R2);
            }
            ctx.fillStyle = calc.pass ? "#4ade80" : "#fbbf24";
            ctx.font = "bold 16px sans-serif";
            ctx.fillText(`P = ${Math.round(calc.P)} W`, w - 145, 34);
        }

        else if (id === "g8_faraday") {
            const cy = h / 2, coilX = w * 0.48, coilW = 140;
            // Движущийся постоянный магнит N-S
            const magX = coilX - 95 + Math.sin(tick * 0.03 * params.v) * 95;
            ctx.fillStyle = "#ef4444"; ctx.fillRect(magX - 55, cy - 18, 55, 36);
            ctx.fillStyle = "#3b82f6"; ctx.fillRect(magX, cy - 18, 55, 36);
            ctx.fillStyle = "#fff"; ctx.font = "bold 14px sans-serif";
            ctx.fillText("S", magX - 34, cy + 5); ctx.fillText("N", magX + 22, cy + 5);

            // Медные витки соленоида
            const loops = Math.min(16, Math.round(params.N / 25));
            ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 3;
            for (let i = 0; i < loops; i++) {
                const lx = coilX + (i / loops) * coilW;
                ctx.beginPath(); ctx.ellipse(lx, cy, 8, 42, 0, 0, Math.PI * 2); ctx.stroke();
            }

            // Гальванометр справа
            const gx = w - 95, gy = cy;
            ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(gx, gy, 46, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = calc.pass ? "#22c55e" : "#38bdf8"; ctx.lineWidth = 3; ctx.stroke();
            const needleAng = -Math.PI / 2 + Math.cos(tick * 0.03 * params.v) * Math.min(1.2, calc.emf / 25);
            ctx.strokeStyle = "#fde047";
            ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx + Math.cos(needleAng) * 36, gy + Math.sin(needleAng) * 36); ctx.stroke();
            ctx.fillStyle = "#f8fafc"; ctx.font = "bold 13px sans-serif";
            ctx.fillText(`${calc.emf.toFixed(1)} V`, gx - 20, gy + 32);
        }

        else if (id === "g8_optics") {
            const axisY = h / 2, lensX = w * 0.45, scale = 3.8;
            // Главная оптическая ось
            ctx.strokeStyle = "#64748b"; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(16, axisY); ctx.lineTo(w - 16, axisY); ctx.stroke();

            // Собирающая линза
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3;
            ctx.fillStyle = "rgba(56, 189, 248, 0.18)";
            ctx.beginPath(); ctx.ellipse(lensX, axisY, 10, 76, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

            // Отметки фокусов F
            const fPx = params.F * scale;
            [lensX - fPx, lensX + fPx].forEach(fx => {
                ctx.fillStyle = "#fbbf24"; ctx.beginPath(); ctx.arc(fx, axisY, 4, 0, Math.PI * 2); ctx.fill();
                ctx.fillText("F", fx - 4, axisY + 18);
            });

            // Предмет (светящаяся стрелка слева)
            const objX = lensX - params.d * scale, objH = 42;
            ctx.strokeStyle = "#4ade80"; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(objX, axisY); ctx.lineTo(objX, axisY - objH); ctx.stroke();
            ctx.fillStyle = "#4ade80"; ctx.beginPath(); ctx.arc(objX, axisY - objH, 4, 0, Math.PI * 2); ctx.fill();

            // Экран справа
            const scrX = lensX + params.screen * scale;
            ctx.strokeStyle = calc.pass ? "#22c55e" : "#e2e8f0"; ctx.lineWidth = 4;
            ctx.beginPath(); ctx.moveTo(scrX, axisY - 82); ctx.lineTo(scrX, axisY + 82); ctx.stroke();

            if (calc.real) {
                const imgX = lensX + calc.f * scale;
                const imgH = objH * calc.mag;
                // 2 главных луча
                ctx.strokeStyle = "rgba(250, 204, 21, 0.85)"; ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.moveTo(objX, axisY - objH); ctx.lineTo(lensX, axisY - objH); ctx.lineTo(imgX, axisY + imgH);
                ctx.moveTo(objX, axisY - objH); ctx.lineTo(imgX, axisY + imgH);
                ctx.stroke();

                // Действительное перевёрнутое изображение
                ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.moveTo(imgX, axisY); ctx.lineTo(imgX, axisY + Math.min(80, imgH)); ctx.stroke();
            }
        }

        else if (id === "g9_ballistics") {
            const groundY = h - 32, startX = 42, scale = 3.2;
            ctx.fillStyle = "#1e293b"; ctx.fillRect(0, groundY, w, 32);
            // Целевая зона 80–120 м
            ctx.fillStyle = "rgba(34, 197, 94, 0.35)";
            ctx.fillRect(startX + 80 * scale, groundY - 6, 40 * scale, 10);
            ctx.fillStyle = "#86efac"; ctx.font = "bold 11px sans-serif";
            ctx.fillText("80–120 m", startX + 85 * scale, groundY + 18);

            // Парабола траектории
            ctx.strokeStyle = "rgba(56, 189, 248, 0.55)"; ctx.setLineDash([4, 4]); ctx.lineWidth = 2;
            ctx.beginPath();
            for (let s = 0; s <= 1; s += 0.02) {
                const t = s * calc.T;
                const x = startX + params.v0 * Math.cos(calc.rad) * t * scale;
                const y = groundY - (params.v0 * Math.sin(calc.rad) * t - 0.5 * calc.g * t * t) * scale;
                if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke(); ctx.setLineDash([]);

            // Летящий зонд и векторы v_x, v_y
            const prog = ((tick * 0.012) % 1);
            const tNow = prog * calc.T;
            const px = startX + params.v0 * Math.cos(calc.rad) * tNow * scale;
            const py = groundY - (params.v0 * Math.sin(calc.rad) * tNow - 0.5 * calc.g * tNow * tNow) * scale;
            const vx = params.v0 * Math.cos(calc.rad);
            const vy = params.v0 * Math.sin(calc.rad) - calc.g * tNow;
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + vx * 0.9, py); ctx.stroke();
            ctx.strokeStyle = "#fbbf24";
            ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py - vy * 0.9); ctx.stroke();
            ctx.fillStyle = "#f8fafc"; ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill();
        }

        else if (id === "g9_orbit") {
            const cx = w / 2, cy = h / 2;
            const earthR = 38;
            const orbR = earthR + (params.h / 6400) * 42;
            const ratio = params.v / calc.vCirc;

            // Траектория спутника
            ctx.strokeStyle = calc.pass ? "#22c55e" : "#fbbf24";
            ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
            const rx = Math.min(w * 0.44, orbR * Math.max(0.65, Math.min(1.6, ratio * ratio)));
            const ry = Math.min(h * 0.44, orbR * Math.max(0.65, Math.min(1.3, ratio)));
            ctx.beginPath(); ctx.ellipse(cx + (rx - orbR) * 0.5, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.setLineDash([]);

            // Земля
            const eg = ctx.createRadialGradient(cx - 10, cy - 10, 6, cx, cy, earthR);
            eg.addColorStop(0, "#38bdf8"); eg.addColorStop(1, "#1d4ed8");
            ctx.fillStyle = eg; ctx.beginPath(); ctx.arc(cx, cy, earthR, 0, Math.PI * 2); ctx.fill();

            // Спутник «Беркут»
            const ang = tick * 0.025 * ratio;
            const sx = cx + (rx - orbR) * 0.5 + Math.cos(ang) * rx;
            const sy = cy + Math.sin(ang) * ry;
            ctx.fillStyle = "#fde047"; ctx.beginPath(); ctx.arc(sx, sy, 6, 0, Math.PI * 2); ctx.fill();
            // Вектор силы тяжести к центру Земли
            ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 1.8;
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + (cx - sx) * 0.28, sy + (cy - sy) * 0.28); ctx.stroke();
        }

        else if (id === "g9_collision") {
            const trackY = h * 0.62;
            ctx.fillStyle = "#334155"; ctx.fillRect(24, trackY, w - 48, 10);
            const cycle = (tick % 180) / 180;
            let x1, x2;
            const mid = w * 0.5;
            if (cycle < 0.45) {
                const k = cycle / 0.45;
                x1 = 70 + (mid - 34 - 70) * k;
                x2 = (w - 110) + (mid + 6 - (w - 110)) * k;
            } else {
                const k = (cycle - 0.45) / 0.55;
                if (params.mode === "inelastic") {
                    x1 = mid - 34 + calc.u * 22 * k;
                    x2 = x1 + 40;
                } else {
                    x1 = mid - 34 + calc.u1 * 18 * k;
                    x2 = mid + 6 + calc.u2 * 18 * k;
                }
            }
            ctx.fillStyle = "#0ea5e9"; ctx.fillRect(x1, trackY - 34, 38, 32);
            ctx.fillStyle = "#10b981"; ctx.fillRect(x2, trackY - 34, 38, 32);
            ctx.fillStyle = "#fff"; ctx.font = "bold 11px sans-serif";
            ctx.fillText(`m₁=${params.m1}`, x1 + 4, trackY - 14);
            ctx.fillText(`m₂=${params.m2}`, x2 + 4, trackY - 14);
        }

        else if (id === "g9_oscillator") {
            const pivotX = w * 0.24, pivotY = 24;
            const lenPx = 50 + params.l * 62;
            const omega = (2 * Math.PI) / calc.T;
            const theta = (params.amp * Math.PI / 180) * Math.cos(tick * 0.03 * omega);
            const bobX = pivotX + Math.sin(theta) * lenPx;
            const bobY = pivotY + Math.cos(theta) * lenPx;
            ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(pivotX, pivotY); ctx.lineTo(bobX, bobY); ctx.stroke();
            ctx.fillStyle = "#38bdf8"; ctx.beginPath(); ctx.arc(bobX, bobY, 13, 0, Math.PI * 2); ctx.fill();

            // Живой осциллограф x(t) справа
            const ox = w * 0.48, oy = 28, ow = w * 0.47, oh = h - 56;
            ctx.fillStyle = "#02120a"; ctx.fillRect(ox, oy, ow, oh);
            ctx.strokeStyle = "#22c55e"; ctx.strokeRect(ox, oy, ow, oh);
            ctx.beginPath();
            for (let x = 0; x < ow; x += 2) {
                const y = oy + oh / 2 - Math.cos((tick * 0.03 - x * 0.035) * omega) * (oh * 0.36);
                if (x === 0) ctx.moveTo(ox + x, y); else ctx.lineTo(ox + x, y);
            }
            ctx.stroke();
        }

        else if (id === "g9_waves") {
            const cy = h / 2;
            const srcX = w * 0.35 + Math.sin(tick * 0.015) * (params.vs * 2.5);
            for (let k = 1; k <= 7; k++) {
                const r = ((tick * 0.9 + k * (calc.lam * 4.5)) % 190);
                const shift = (r / 190) * params.vs * 3.2;
                ctx.strokeStyle = `rgba(56, 189, 248, ${1 - r / 195})`;
                ctx.lineWidth = 2;
                ctx.beginPath(); ctx.arc(srcX - shift, cy, r, 0, Math.PI * 2); ctx.stroke();
            }
            ctx.fillStyle = "#fde047"; ctx.beginPath(); ctx.arc(srcX, cy, 7, 0, Math.PI * 2); ctx.fill();
            // Приёмник справа
            ctx.fillStyle = calc.pass ? "#22c55e" : "#f472b6";
            ctx.fillRect(w - 42, cy - 28, 12, 56);
        }

        else if (id === "g9_quantum") {
            const beamCol = wavelengthToColor(params.wavelength);
            const cx = w / 2, cy = h / 2;
            // Колба фотоэлемента
            ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.ellipse(cx, cy, 130, 68, 0, 0, Math.PI * 2); ctx.stroke();
            // Катод слева и анод справа
            ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 6;
            ctx.beginPath(); ctx.arc(cx - 70, cy, 38, Math.PI * 0.65, Math.PI * 1.35); ctx.stroke();
            ctx.fillStyle = "#fbbf24"; ctx.fillRect(cx + 82, cy - 26, 8, 52);

            // Падающие фотоны лазера
            ctx.strokeStyle = beamCol; ctx.lineWidth = 3;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath(); ctx.moveTo(30 + i * 18, 16); ctx.lineTo(cx - 88, cy - 16 + i * 16); ctx.stroke();
            }

            // Вылетающие фотоэлектроны (если E_ф > A_вых)
            if (calc.active) {
                for (let e = 0; e < 10; e++) {
                    const prog = ((tick * (0.015 + calc.Ek * 0.01) + e * 0.1) % 1);
                    const ex = (cx - 84) + prog * 166;
                    const ey = cy - 20 + (e % 5) * 10;
                    ctx.fillStyle = "#38bdf8";
                    ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2); ctx.fill();
                }
            }
        }
    }

    function injectStyles() {
        if (document.getElementById("pq-sim89-css")) return;
        const st = document.createElement("style");
        st.id = "pq-sim89-css";
        st.textContent = `
            .pq-sim89-sec {
                margin: 26px auto 18px;
                max-width: 1120px;
                padding: 20px 22px;
                border-radius: 22px;
                background: linear-gradient(155deg, rgba(12, 25, 52, 0.9), rgba(7, 15, 34, 0.94));
                border: 1px solid rgba(56, 189, 248, 0.28);
                box-shadow: 0 18px 46px rgba(0, 0, 0, 0.42);
            }
            .pq-sim89-head {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                margin-bottom: 16px;
            }
            .pq-sim89-head h2 { margin: 4px 0; font-size: 21px; color: #f0f9ff; }
            .pq-sim89-head p { margin: 0; font-size: 13.5px; color: #94a3b8; }
            .pq-sim89-kicker { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; color: #38bdf8; }
            .pq-sim89-prog {
                padding: 8px 14px;
                border-radius: 999px;
                background: rgba(14, 165, 233, 0.16);
                border: 1px solid rgba(56, 189, 248, 0.4);
                color: #e0f2fe;
                font-weight: 800;
                font-size: 13px;
            }
            .pq-sim89-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 12px;
            }
            .pq-sim89-card {
                text-align: left;
                padding: 15px 16px;
                border-radius: 16px;
                background: rgba(15, 28, 56, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.2);
                color: #f8fafc;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 6px;
                transition: transform 0.16s ease, border-color 0.16s ease;
            }
            .pq-sim89-card:hover { transform: translateY(-3px); border-color: #38bdf8; }
            .pq-sim89-card.done { border-color: rgba(34, 197, 94, 0.55); background: rgba(13, 38, 44, 0.72); }
            .pq-sim89-card-top { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #7dd3fc; font-weight: 800; }
            .pq-sim89-card b { font-size: 15.5px; color: #fff; }
            .pq-sim89-card small { font-size: 12.5px; color: #cbd5e1; line-height: 1.4; }
            .pq-sim89-card em { font-style: normal; font-size: 12px; font-weight: 800; color: #38bdf8; margin-top: auto; padding-top: 4px; }
            .pq-sim89-card.done em { color: #4ade80; }

            #pq-sim89-modal {
                position: fixed;
                inset: 0;
                z-index: 9400;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 16px;
                background: rgba(3, 8, 20, 0.85);
                backdrop-filter: blur(10px);
                overflow-y: auto;
            }
            #pq-sim89-modal.open { display: flex; }
            .pq-s89-dialog {
                width: min(900px, 100%);
                max-height: 92vh;
                overflow-y: auto;
                padding: 22px 24px;
                border-radius: 24px;
                background: linear-gradient(160deg, #0d1c38 0%, #071022 100%);
                border: 1px solid rgba(56, 189, 248, 0.38);
                color: #f8fafc;
                box-shadow: 0 28px 70px rgba(0, 0, 0, 0.72);
            }
            .pq-s89-canvas {
                width: 100%;
                height: auto;
                border-radius: 16px;
                border: 1px solid rgba(125, 211, 252, 0.3);
                background: #061126;
                display: block;
                margin: 12px 0;
            }
            .pq-s89-telemetry {
                padding: 10px 14px;
                border-radius: 12px;
                background: rgba(15, 23, 42, 0.9);
                border: 1px solid rgba(56, 189, 248, 0.3);
                font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
                font-size: 13.5px;
                font-weight: 800;
                color: #7dd3fc;
                margin-bottom: 12px;
            }
            .pq-s89-telemetry.pass { border-color: rgba(34, 197, 94, 0.65); color: #86efac; }
            .pq-s89-controls {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                gap: 10px;
                margin-bottom: 14px;
            }
            .pq-s89-ctrl {
                padding: 10px 12px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(148, 163, 184, 0.2);
                font-size: 12.5px;
            }
            .pq-s89-ctrl label { display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 6px; color: #e2e8f0; }
            .pq-s89-ctrl input[type=range], .pq-s89-ctrl select { width: 100%; }
            .pq-s89-ctrl select {
                padding: 6px 8px;
                border-radius: 8px;
                background: #0f172a;
                color: #f8fafc;
                border: 1px solid rgba(148, 163, 184, 0.35);
            }
            .pq-s89-verify {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
                padding: 12px 14px;
                border-radius: 14px;
                background: rgba(14, 116, 144, 0.18);
                border: 1px solid rgba(56, 189, 248, 0.3);
            }
            .pq-s89-verify input {
                width: 130px;
                padding: 8px 10px;
                border-radius: 10px;
                border: 1px solid rgba(125, 211, 252, 0.45);
                background: #061126;
                color: #fff;
                font-weight: 800;
                font-size: 14px;
            }
        `;
        document.head.appendChild(st);
    }

    const Simulators89 = {
        activeLab: null,

        // Поиск элементов внутри модального окна: надёжнее, чем глобальный
        // getElementById (учитывает перерисовку innerHTML и вложенные документы).
        $(id) {
            if (id === "pq-sim89-modal") {
                return document.querySelector("#pq-sim89-modal") || document.getElementById("pq-sim89-modal");
            }
            const modal = document.querySelector("#pq-sim89-modal");
            if (modal) {
                const found = modal.querySelector("#" + id);
                if (found) return found;
            }
            return document.querySelector("#" + id) || document.getElementById(id);
        },
        params: {},
        rafId: null,
        tick: 0,

        init() {
            const g = Number(window.CURRENT_GRADE);
            if (g !== 8 && g !== 9) return;
            injectStyles();
            this.mountSection(g);
            this.renderCards(g);

            // Подключаем кнопку «🔬 Лаборатория» в 8 и 9 классах к визуальным симуляторам.
            // Клонируем узел, чтобы снять обработчики LabGames из старых модулей.
            const oldBtnLab = document.getElementById("btn-lab");
            if (oldBtnLab) {
                const btnLab = oldBtnLab.cloneNode(true);
                oldBtnLab.parentNode.replaceChild(btnLab, oldBtnLab);
                btnLab.style.display = "inline-flex";
                btnLab.onclick = (e) => {
                    e.preventDefault();
                    if (typeof App !== "undefined" && App.showLevelSelect) App.showLevelSelect();
                    setTimeout(() => {
                        const sec = document.getElementById("pq-sim89-section");
                        if (sec && typeof sec.scrollIntoView === "function") sec.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 80);
                };
            }

            window.addEventListener("pq:lang-changed", () => {
                this.renderCards(g);
                if (this.activeLab && this.$("pq-sim89-modal")?.classList.contains("open")) {
                    this.openLab(this.activeLab.id, true);
                }
            });
        },

        mountSection(grade) {
            if (document.getElementById("pq-sim89-section")) return;
            const sec = document.createElement("section");
            sec.id = "pq-sim89-section";
            sec.className = "pq-sim89-sec";
            sec.innerHTML = `
                <div class="pq-sim89-head">
                    <div>
                        <span class="pq-sim89-kicker" id="pq-sim89-kicker"></span>
                        <h2 id="pq-sim89-title"></h2>
                        <p id="pq-sim89-sub"></p>
                    </div>
                    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                        <span class="pq-sim89-prog" id="pq-sim89-prog"></span>
                        <button type="button" class="btn btn-small btn-secondary" id="pq-sim89-classic-btn"></button>
                    </div>
                </div>
                <div class="pq-sim89-grid" id="pq-sim89-grid"></div>
            `;
            const host = document.getElementById("levels-panel")
                || document.getElementById("levels-tab-panel")
                || document.getElementById("level-select-screen");
            const backBtn = document.getElementById("btn-back-to-menu");
            if (host) host.appendChild(sec);
            else if (backBtn && backBtn.parentNode) backBtn.parentNode.insertBefore(sec, backBtn);
            else document.body.appendChild(sec);
        },

        renderCards(grade) {
            const labs = LABS_BY_GRADE[grade] || [];
            const doneMap = loadDone(grade);
            const doneCount = labs.filter(l => doneMap[l.id]).length;

            const k = document.getElementById("pq-sim89-kicker");
            const t = document.getElementById("pq-sim89-title");
            const s = document.getElementById("pq-sim89-sub");
            const p = document.getElementById("pq-sim89-prog");
            const cb = document.getElementById("pq-sim89-classic-btn");
            if (k) k.textContent = tr("ИНТЕРАКТИВНЫЕ ФИЗИЧЕСКИЕ СИМУЛЯТОРЫ · CANVAS 2D", "ИНТЕРАКТИВТІ ФИЗИКАЛЫҚ СИМУЛЯТОРЛАР · CANVAS 2D", "INTERACTIVE PHYSICS SIMULATORS · CANVAS 2D");
            if (t) t.textContent = grade === 8
                ? tr("🔬 Лабораторный комплекс «Эквилибриум» (6 симуляторов)", "🔬 «Эквилибриум» зертханалық кешені (6 симулятор)", "🔬 Equilibrium Interactive Lab Suite (6 Simulators)")
                : tr("🛰️ Испытательный полигон «Орбита-9» (6 симуляторов)", "🛰️ «Орбита-9» сынақ полигоны (6 симулятор)", "🛰️ Orbita-9 Proving Grounds (6 Simulators)");
            if (s) s.textContent = tr(
                "Реалистичные модели с живой анимацией: управляй приборами, выводи установку в целевой режим и подтверждай расчёт (+30 XP и +5 💎).",
                "Жанды анимациясы бар шынайы модельдер: аспаптарды басқарып, есепті дәлелде (+30 XP және +5 💎).",
                "Realistic live-animated apparatus: adjust parameters, reach target regime, and verify your calculation (+30 XP & +5 💎)."
            );
            if (p) p.textContent = `🔑 ${doneCount} / ${labs.length}`;
            if (cb) {
                cb.textContent = tr("📐 Тренажёр расчётов", "📐 Есептеу жаттықтырғышы", "📐 Calculation Bench");
                cb.onclick = () => {
                    const configs = window.GRADE_LAB_GAMES_CONFIG || {};
                    const keys = Object.keys(configs);
                    const lvl = (typeof Game !== "undefined" && Game.currentLevel) || keys[0];
                    const cfg = configs[lvl] || (keys.length ? configs[keys[0]] : null);
                    if (cfg && typeof LabGames !== "undefined" && typeof LabGames.show === "function") {
                        LabGames.show(cfg, typeof Game !== "undefined" ? Game : null);
                    } else {
                        cb.style.display = "none";
                    }
                };
            }

            const grid = document.getElementById("pq-sim89-grid");
            if (!grid) return;
            grid.innerHTML = labs.map(l => {
                const isDone = !!doneMap[l.id];
                return `
                    <button type="button" class="pq-sim89-card ${isDone ? "done" : ""}" data-s89="${l.id}">
                        <div class="pq-sim89-card-top">
                            <span>${l.icon} ${l.para}</span>
                            <span>${loc(l.chapter)}</span>
                        </div>
                        <b>${loc(l.title)}</b>
                        <small>${loc(l.goal)}</small>
                        <em>${isDone ? tr("✓ Испытание пройдено", "✓ Сынақ өтілді", "✓ Trial Completed") : tr("▶ Открыть установку →", "▶ Қондырғыны ашу →", "▶ Launch Apparatus →")}</em>
                    </button>
                `;
            }).join("");
            grid.querySelectorAll("[data-s89]").forEach(btn => {
                btn.onclick = () => this.openLab(btn.getAttribute("data-s89"));
            });
        },

        ensureModal() {
            let m = document.querySelector("#pq-sim89-modal") || document.getElementById("pq-sim89-modal");
            if (!m) {
                m = document.createElement("div");
                m.id = "pq-sim89-modal";
                document.body.appendChild(m);
                m.addEventListener("click", (e) => { if (e.target === m) this.close(); });
            }
            return m;
        },

        openLab(id, keepParams = false) {
            const g = Number(window.CURRENT_GRADE);
            const labs = LABS_BY_GRADE[g] || [];
            const lab = labs.find(x => x.id === id);
            if (!lab) return;
            this.activeLab = lab;
            if (!keepParams) this.params = { ...lab.defaults };
            const modal = this.ensureModal();

            modal.innerHTML = `
                <div class="pq-s89-dialog">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
                        <div>
                            <div class="pq-sim89-kicker">${lab.icon} ${lab.para} · ${loc(lab.chapter)}</div>
                            <h2 style="margin:4px 0 6px;font-size:21px;">${loc(lab.title)}</h2>
                            <p style="margin:0;font-size:13.5px;color:#cbd5e1;line-height:1.45;">${loc(lab.story)}</p>
                        </div>
                        <button type="button" class="pq-td-x" id="pq-s89-close" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.08);border:1px solid rgba(148,163,184,0.3);color:#fff;cursor:pointer;">✕</button>
                    </div>

                    <canvas id="pq-s89-canvas" class="pq-s89-canvas" width="760" height="270"></canvas>
                    <div id="pq-s89-telemetry" class="pq-s89-telemetry"></div>

                    <div class="pq-s89-controls">
                        ${lab.controls.map(c => {
                            if (c.type === "select") {
                                return `<div class="pq-s89-ctrl">
                                    <label><span>${loc(c.label)}</span></label>
                                    <select data-ctrl="${c.id}">
                                        ${c.options.map(o => `<option value="${o.value}" ${String(this.params[c.id]) === String(o.value) ? "selected" : ""}>${loc(o.label)}</option>`).join("")}
                                    </select>
                                </div>`;
                            }
                            return `<div class="pq-s89-ctrl">
                                <label><span>${loc(c.label)}</span><strong id="val-${c.id}">${this.params[c.id]} ${loc(c.unit)}</strong></label>
                                <input type="range" data-ctrl="${c.id}" min="${c.min}" max="${c.max}" step="${c.step}" value="${this.params[c.id]}">
                            </div>`;
                        }).join("")}
                    </div>

                    <div class="pq-s89-verify">
                        <div style="flex:1;min-width:220px;">
                            <div style="font-weight:800;font-size:13.5px;color:#f0f9ff;">🎯 ${loc(lab.goal)}</div>
                            <div id="pq-s89-msg" style="font-size:12.5px;color:#94a3b8;margin-top:3px;">
                                ${tr("Выведи установку в зелёный целевой режим и введи расчётное значение.", "Қондырғыны жасыл мақсатты режимге шығарып, есептік мәнді енгіз.", "Bring the setup into the green target zone and enter the value.")}
                            </div>
                        </div>
                        <input type="number" step="any" id="pq-s89-ans" placeholder="0.0">
                        <span style="font-weight:900;color:#fde68a;">${lab.unit}</span>
                        <button type="button" class="btn btn-primary btn-small" id="pq-s89-check">
                            ${tr("✅ Подтвердить опыт", "✅ Тәжірибені растау", "✅ Verify Experiment")}
                        </button>
                    </div>
                </div>
            `;

            modal.classList.add("open");
            this.$("pq-s89-close").onclick = () => this.close();

            modal.querySelectorAll("[data-ctrl]").forEach(el => {
                const handler = () => {
                    const key = el.getAttribute("data-ctrl");
                    const ctrlDef = lab.controls.find(c => c.id === key);
                    this.params[key] = ctrlDef.type === "range" ? Number(el.value) : el.value;
                    const vEl = this.$("val-" + key);
                    if (vEl && ctrlDef.unit) vEl.textContent = `${this.params[key]} ${loc(ctrlDef.unit)}`;
                    this.updateTelemetry();
                };
                el.addEventListener("input", handler);
                el.addEventListener("change", handler);
            });

            this.$("pq-s89-check").onclick = () => this.verify();
            this.updateTelemetry();
            this.startLoop();
        },

        updateTelemetry() {
            if (!this.activeLab) return;
            const calc = this.activeLab.compute(this.params);
            const tel = this.$("pq-s89-telemetry");
            if (tel) {
                tel.textContent = `📟 ${calc.readout}`;
                tel.classList.toggle("pass", !!calc.pass);
            }
        },

        verify() {
            if (!this.activeLab) return;
            const g = Number(window.CURRENT_GRADE);
            const calc = this.activeLab.compute(this.params);
            const raw = this.$("pq-s89-ans")?.value || "";
            const val = Number(raw.replace(",", "."));
            const msg = this.$("pq-s89-msg");
            if (!calc.pass) {
                msg.style.color = "#fca5a5";
                msg.textContent = tr(
                    "⚠️ Установка ещё не в целевом режиме — настрой регуляторы так, чтобы индикатор стал зелёным.",
                    "⚠️ Қондырғы әлі мақсатты режимде емес — индикатор жасыл болғанша ретте.",
                    "⚠️ Apparatus is outside target range — adjust parameters until the telemetry turns green."
                );
                return;
            }
            if (!Number.isFinite(val) || Math.abs(val - calc.expected) > (this.activeLab.tol || 0.5)) {
                msg.style.color = "#fcd34d";
                msg.textContent = tr(
                    "📐 Режим верный, но численный ответ не совпадает с показанием прибора. Проверь число!",
                    "📐 Режим дұрыс, бірақ сандық жауап сәйкес келмейді. Санды тексер!",
                    "📐 Target regime reached, but numerical value doesn't match. Check your reading!"
                );
                return;
            }
            const doneMap = loadDone(g);
            const firstTime = !doneMap[this.activeLab.id];
            doneMap[this.activeLab.id] = true;
            saveDone(g, doneMap);
            if (firstTime && typeof RPG !== "undefined") {
                try { RPG.addXP(30); RPG.addCrystals(5); } catch (_) {}
            }
            msg.style.color = "#86efac";
            msg.textContent = firstTime
                ? tr("✅ Блестяще! Лаборатория защитана: +30 XP и +5 💎!", "✅ Тамаша! Зертхана есептелді: +30 XP және +5 💎!", "✅ Excellent! Laboratory verified: +30 XP & +5 💎!")
                : tr("✅ Опыт подтверждён повторно!", "✅ Тәжірибе қайта расталды!", "✅ Experiment verified again!");
            this.renderCards(g);
        },

        startLoop() {
            if (this.rafId) cancelAnimationFrame(this.rafId);
            const step = () => {
                const canvas = this.$("pq-s89-canvas");
                if (!canvas || !this.activeLab) return;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    const calc = this.activeLab.compute(this.params);
                    drawCanvasFrame(ctx, canvas.width, canvas.height, this.activeLab, this.params, calc, this.tick++);
                }
                this.rafId = requestAnimationFrame(step);
            };
            step();
        },

        close() {
            if (this.rafId) cancelAnimationFrame(this.rafId);
            this.rafId = null;
            this.activeLab = null;
            const m = this.$("pq-sim89-modal");
            if (m) m.classList.remove("open");
        }
    };

    window.Simulators89 = Simulators89;
})();
