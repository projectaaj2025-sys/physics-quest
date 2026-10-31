/* ===== ВИЗУАЛЬНЫЕ ИНТЕРАКТИВНЫЕ CANVAS-СИМУЛЯТОРЫ ДЛЯ 8 И 9 КЛАССОВ (RU / ҚАЗ / EN) =====
   • 8 класс (9 лабораторий): Калориметр, Фазовый переход льда, Цепь Ома с реостатом,
     Подстанция Джоуля–Ленца, Индукция Фарадея, Оптическая скамья с тонкой линзой,
     Гидравлический пресс, Архимед и плотность, Эхо и звук.
   • 9 класс (9 лабораторий): Баллистический полигон, Орбита спутника «Беркут»,
     Воздушная дорожка импульса, Маятник и осциллограф, Волновая ванна, Фотоэффект Эйнштейна,
     Закон Кулона, Радиоактивный распад, Электромагнитная индукция. */

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
                topic: "heat",
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
                defaults: { metal: "cu", m1: 400, t1: 100, m2: 250 },
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
                topic: "heat",
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
                defaults: { mass: 200, power: 1500, time: 45 },
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
                topic: "electro",
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
                defaults: { U: 12, Rlamp: 4, Rrheo: 8 },
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
                topic: "electro",
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
                topic: "magnets",
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
                topic: "optics",
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
            },
            {
                id: "g8_hydraulic",
                topic: "mech",
                icon: "🛠️",
                para: "§ 24–28",
                title: { ru: "Гидравлический пресс", kk: "Гидравликалық пресс", en: "Hydraulic Press" },
                chapter: { ru: "Давление и сила · F₂ = F₁·S₂/S₁", kk: "Қысым және күш · F₂ = F₁·S₂/S₁", en: "Pressure and force · F₂ = F₁·S₂/S₁" },
                story: {
                    ru: "В ремонтном ангаре Эквилибриума нужно поднять 800-килограммовый блок щита. Малый поршень пресса давит с силой F₁, а большой должен поднять груз весом ≈ 7,8 кН. Подбери силу и площади поршней!",
                    kk: "Эквилибриум жөндеу ангарында 800 кг салмақтағы қалқан блогын көтеру керек. Кіші поршень F₁ күшімен басады, үлкен поршень ≈ 7,8 кН жүкті көтеруі тиіс. Күш пен поршень аудандарын таңда!",
                    en: "A 800 kg shield block must be lifted in the Equilibrium repair hangar. The small piston applies F₁, the large one must lift ≈ 7.8 kN. Tune the force and piston areas!"
                },
                goal: {
                    ru: "Добейся F₂ ≥ 7,8 кН и введи F₂ в кН.",
                    kk: "F₂ ≥ 7,8 кН болуын қамтамасыз етіп, F₂ мәнін кН-мен енгіз.",
                    en: "Reach F₂ ≥ 7.8 kN and enter F₂ in kN."
                },
                unit: "kN",
                tol: 0.25,
                defaults: { F1: 300, S1: 8, S2: 60 },
                controls: [
                    { id: "F1", type: "range", min: 100, max: 800, step: 50, unit: { ru: "Н", kk: "Н", en: "N" }, label: { ru: "Сила на малый поршень F₁", kk: "Кіші поршеньге күш F₁", en: "Force on small piston F₁" } },
                    { id: "S1", type: "range", min: 2, max: 20, step: 1, unit: { ru: "см²", kk: "см²", en: "cm²" }, label: { ru: "Площадь малого поршня S₁", kk: "Кіші поршень ауданы S₁", en: "Small piston area S₁" } },
                    { id: "S2", type: "range", min: 20, max: 200, step: 10, unit: { ru: "см²", kk: "см²", en: "cm²" }, label: { ru: "Площадь большого поршня S₂", kk: "Үлкен поршень ауданы S₂", en: "Large piston area S₂" } }
                ],
                compute(p) {
                    const F2 = p.F1 * p.S2 / p.S1;
                    const need = 7848;
                    return {
                        expected: Number((F2 / 1000).toFixed(2)),
                        pass: F2 >= need,
                        F2, need,
                        readout: tr(
                            `F₂ = ${(F2 / 1000).toFixed(2)} кН · груз 800 кг требует ${(need / 1000).toFixed(2)} кН`,
                            `F₂ = ${(F2 / 1000).toFixed(2)} кН · 800 кг жүк ${(need / 1000).toFixed(2)} кН қажет`,
                            `F₂ = ${(F2 / 1000).toFixed(2)} kN · an 800 kg load needs ${(need / 1000).toFixed(2)} kN`
                        )
                    };
                }
            },
            {
                id: "g8_archimedes",
                topic: "mech",
                icon: "🚢",
                para: "§ 46–49",
                title: { ru: "Плавучесть батискафа", kk: "Батискафтың қалқуы", en: "Bathyscaphe Buoyancy" },
                chapter: { ru: "Сила Архимеда · F_A = ρ_ж·g·V", kk: "Архимед күші · F_A = ρ_с·g·V", en: "Buoyancy · F_A = ρ·g·V" },
                story: {
                    ru: "Глубинный шлюз Астерии заполнен жидкостью. Батискаф массой m и объёмом V должен держаться на плаву (F_A ≥ mg), иначе он либо утонет, либо взлетит к куполу. Подбери объём, жидкость и массу!",
                    kk: "Астерияның тереңдік шлюзі сұйықтыққа толы. Массасы m, көлемі V батискаф қалқып тұруы керек (F_A ≥ mg). Көлем, сұйықтық және массаны таңда!",
                    en: "Asteria's deep lock is filled with liquid. A bathyscaphe of mass m and volume V must stay afloat (F_A ≥ mg). Tune volume, liquid and mass!"
                },
                goal: {
                    ru: "Добейся F_A ≥ mg и введи F_A в кН.",
                    kk: "F_A ≥ mg болуын қамтамасыз етіп, F_A мәнін кН-мен енгіз.",
                    en: "Reach F_A ≥ mg and enter F_A in kN."
                },
                unit: "kN",
                tol: 0.2,
                defaults: { V: 1, liquid: "water", m: 1500 },
                controls: [
                    { id: "V", type: "range", min: 0.5, max: 4, step: 0.5, unit: { ru: "м³", kk: "м³", en: "m³" }, label: { ru: "Объём батискафа V", kk: "Батискаф көлемі V", en: "Bathyscaphe volume V" } },
                    { id: "liquid", type: "select", label: { ru: "Жидкость", kk: "Сұйықтық", en: "Liquid" }, options: [
                        { value: "water", label: { ru: "Вода (ρ = 1000 кг/м³)", kk: "Су (ρ = 1000 кг/м³)", en: "Water (ρ = 1000 kg/m³)" } },
                        { value: "sea", label: { ru: "Морская вода (ρ = 1030 кг/м³)", kk: "Теңіз суы (ρ = 1030 кг/м³)", en: "Sea water (ρ = 1030 kg/m³)" } },
                        { value: "oil", label: { ru: "Нефть (ρ = 900 кг/м³)", kk: "Мұнай (ρ = 900 кг/м³)", en: "Oil (ρ = 900 kg/m³)" } }
                    ] },
                    { id: "m", type: "range", min: 200, max: 3000, step: 100, unit: { ru: "кг", kk: "кг", en: "kg" }, label: { ru: "Масса батискафа m", kk: "Батискаф массасы m", en: "Bathyscaphe mass m" } }
                ],
                compute(p) {
                    const rho = p.liquid === "sea" ? 1030 : p.liquid === "oil" ? 900 : 1000;
                    const FA = rho * 9.8 * p.V;
                    const W = p.m * 9.8;
                    return {
                        expected: Number((FA / 1000).toFixed(1)),
                        pass: FA >= W,
                        FA, W, rho,
                        readout: tr(
                            `F_A = ${(FA / 1000).toFixed(2)} кН · вес ${(W / 1000).toFixed(2)} кН · ${FA >= W ? "держится на плаву" : "тонет"}`,
                            `F_A = ${(FA / 1000).toFixed(2)} кН · салмақ ${(W / 1000).toFixed(2)} кН · ${FA >= W ? "қалқып тұр" : "батып кетеді"}`,
                            `F_A = ${(FA / 1000).toFixed(2)} kN · weight ${(W / 1000).toFixed(2)} kN · ${FA >= W ? "afloat" : "sinking"}`
                        )
                    };
                }
            },
            {
                id: "g8_echo",
                topic: "waves",
                icon: "📡",
                para: "§ 30–33",
                title: { ru: "Эхолот и ультразвук", kk: "Эхолот және ультрадыбыс", en: "Sonar & Ultrasound" },
                chapter: { ru: "Звук и эхо · h = v·t/2", kk: "Дыбыс және жаңғырық · h = v·t/2", en: "Sound and echo · h = v·t/2" },
                story: {
                    ru: "Корабль «Гидра» сканирует дно океана. Импульс уходит вниз, отражается и возвращается через время t. Скорость звука зависит от среды. Найди глубину h под килем!",
                    kk: "«Гидра» кемесі мұхит түбін сканерлейді. Импульс төмен түсіп, t уақыттан кейін қайтады. Дыбыс жылдамдығы ортаға байланысты. Киль астындағы h тереңдікті тап!",
                    en: "The ship Hydra scans the ocean floor. A pulse travels down and returns after time t. Sound speed depends on the medium. Find the depth h!"
                },
                goal: {
                    ru: "Получи глубину 30–150 м и введи h (м).",
                    kk: "30–150 м тереңдікке жетіп, h мәнін енгіз (м).",
                    en: "Get a depth of 30–150 m and enter h (m)."
                },
                unit: "m",
                tol: 1.5,
                defaults: { t: 0.3, medium: "water" },
                controls: [
                    { id: "t", type: "range", min: 0.02, max: 0.6, step: 0.02, unit: { ru: "с", kk: "с", en: "s" }, label: { ru: "Время возврата эха t", kk: "Жаңғырық қайту уақыты t", en: "Echo return time t" } },
                    { id: "medium", type: "select", label: { ru: "Среда", kk: "Орта", en: "Medium" }, options: [
                        { value: "water", label: { ru: "Вода (v = 1500 м/с)", kk: "Су (v = 1500 м/с)", en: "Water (v = 1500 m/s)" } },
                        { value: "steel", label: { ru: "Сталь (v = 5000 м/с)", kk: "Болат (v = 5000 м/с)", en: "Steel (v = 5000 m/s)" } },
                        { value: "air", label: { ru: "Воздух (v = 340 м/с)", kk: "Ауа (v = 340 м/с)", en: "Air (v = 340 m/s)" } }
                    ] }
                ],
                compute(p) {
                    const v = p.medium === "steel" ? 5000 : p.medium === "air" ? 340 : 1500;
                    const h = v * p.t / 2;
                    return {
                        expected: Number(h.toFixed(1)),
                        pass: h >= 30 && h <= 150,
                        h, v,
                        readout: tr(
                            `h = v·t/2 = ${h.toFixed(1)} м · скорость ${v} м/с`,
                            `h = v·t/2 = ${h.toFixed(1)} м · жылдамдық ${v} м/с`,
                            `h = v·t/2 = ${h.toFixed(1)} m · speed ${v} m/s`
                        )
                    };
                }
            },
            {
                id: "g8_heat_cond",
                topic: "heat",
                icon: "🧱",
                para: "§ 4",
                title: { ru: "Теплопроводность обшивки", kk: "Қаптаманың жылу өткізгіштігі", en: "Hull Thermal Conductivity" },
                chapter: { ru: "Тепловые явления · q = λ·ΔT/d", kk: "Жылу құбылыстары · q = λ·ΔT/d", en: "Thermal Physics · q = λ·ΔT/d" },
                story: {
                    ru: "Квант: обшивка купола теряет тепло. Сравни медь, сталь, стекло и пенопласт и подбери стенку, через которую уходит 2000–5000 Вт с каждого квадратного метра.",
                    kk: "Квант: күмбез қаптамасы жылу жоғалтып жатыр. Мыс, болат, шыны және пенопластты салыстырып, әр шаршы метрден 2000–5000 Вт кететін қабырғаны таңда.",
                    en: "KVANT: the dome hull is losing heat. Compare copper, steel, glass and foam and pick a wall that leaks 2000–5000 W per square metre."
                },
                goal: {
                    ru: "Тепловой поток 2–5 кВт/м²: подбери материал, толщину и перепад температур, затем введи q (Вт/м²).",
                    kk: "Жылу ағыны 2–5 кВт/м²: материал, қалыңдық және температура айырмасын таңдап, q енгіз (Вт/м²).",
                    en: "Heat flux 2–5 kW/m²: choose material, thickness and temperature difference, then enter q (W/m²)."
                },
                tip: {
                    ru: "q = λ·ΔT/d: медь проводит тепло лучше стали, а пенопласт почти не проводит.",
                    kk: "q = λ·ΔT/d: мыс болаттан жақсы өткізеді, пенопласт дерлік өткізбейді.",
                    en: "q = λ·ΔT/d: copper conducts better than steel, foam conducts almost nothing."
                },
                unit: "W/m²",
                tol: 60,
                defaults: { mat: "steel", d: 20, dT: 40 },
                controls: [
                    { id: "mat", type: "select", label: { ru: "Материал стенки", kk: "Қабырға материалы", en: "Wall material" }, options: [
                        { value: "cu", label: { ru: "Медь (λ = 380 Вт/(м·К))", kk: "Мыс (λ = 380 Вт/(м·К))", en: "Copper (λ = 380 W/(m·K))" } },
                        { value: "steel", label: { ru: "Сталь (λ = 45 Вт/(м·К))", kk: "Болат (λ = 45 Вт/(м·К))", en: "Steel (λ = 45 W/(m·K))" } },
                        { value: "glass", label: { ru: "Стекло (λ = 0,8 Вт/(м·К))", kk: "Шыны (λ = 0,8 Вт/(м·К))", en: "Glass (λ = 0.8 W/(m·K))" } },
                        { value: "foam", label: { ru: "Пенопласт (λ = 0,04 Вт/(м·К))", kk: "Пенопласт (λ = 0,04 Вт/(м·К))", en: "Foam (λ = 0.04 W/(m·K))" } }
                    ] },
                    { id: "d", type: "range", min: 5, max: 50, step: 5, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Толщина стенки d", kk: "Қабырға қалыңдығы d", en: "Wall thickness d" } },
                    { id: "dT", type: "range", min: 5, max: 80, step: 5, unit: { ru: "К", kk: "К", en: "K" }, label: { ru: "Перепад температур ΔT", kk: "Температура айырмасы ΔT", en: "Temperature difference ΔT" } }
                ],
                compute(p) {
                    const lam = { cu: 380, steel: 45, glass: 0.8, foam: 0.04 }[p.mat] || 45;
                    const d = p.d / 100;
                    const q = lam * p.dT / d;
                    return {
                        expected: Number(q.toFixed(0)),
                        pass: q >= 2000 && q <= 5000,
                        q, lam,
                        readout: tr(
                            `q = λ·ΔT/d = ${lam}·${p.dT}/${d.toFixed(2)} = ${q.toFixed(0)} Вт/м²`,
                            `q = λ·ΔT/d = ${lam}·${p.dT}/${d.toFixed(2)} = ${q.toFixed(0)} Вт/м²`,
                            `q = λ·ΔT/d = ${lam}·${p.dT}/${d.toFixed(2)} = ${q.toFixed(0)} W/m²`
                        )
                    };
                }
            },
            {
                id: "g8_engine",
                topic: "heat",
                icon: "🔥",
                para: "§ 15–16",
                title: { ru: "Тепловой двигатель и КПД", kk: "Жылу қозғалтқышы және ПӘК", en: "Heat Engine & Efficiency" },
                chapter: { ru: "Тепловые машины · η = (Q₁ − Q₂)/Q₁", kk: "Жылу машиналары · η = (Q₁ − Q₂)/Q₁", en: "Heat Engines · η = (Q₁ − Q₂)/Q₁" },
                story: {
                    ru: "Инженер: турбина получает от нагревателя Q₁ и отдаёт холодильнику Q₂. Выведи КПД в рабочий коридор 35–45 % и подтверди расчёт.",
                    kk: "Инженер: турбина қыздырғыштан Q₁ алып, тоңазытқышқа Q₂ береді. ПӘК-ті 35–45 % дәлізіне шығарып, есепті раста.",
                    en: "ENGINEER: the turbine takes Q₁ from the heater and gives Q₂ to the cooler. Bring efficiency into the 35–45 % band and verify the calculation."
                },
                goal: {
                    ru: "КПД 35–45 %: подбери Q₁ и Q₂ и введи η (%).",
                    kk: "ПӘК 35–45 %: Q₁ мен Q₂ таңдап, η енгіз (%).",
                    en: "Efficiency 35–45 %: tune Q₁ and Q₂ and enter η (%)."
                },
                tip: {
                    ru: "η = (Q₁ − Q₂)/Q₁ · 100 %, полезная работа A = Q₁ − Q₂.",
                    kk: "η = (Q₁ − Q₂)/Q₁ · 100 %, пайдалы жұмыс A = Q₁ − Q₂.",
                    en: "η = (Q₁ − Q₂)/Q₁ · 100 %, useful work A = Q₁ − Q₂."
                },
                unit: "%",
                tol: 0.6,
                defaults: { q1: 500, q2: 400 },
                controls: [
                    { id: "q1", type: "range", min: 100, max: 1000, step: 50, unit: { ru: "кДж", kk: "кДж", en: "kJ" }, label: { ru: "Теплота от нагревателя Q₁", kk: "Қыздырғыштан алынған жылу Q₁", en: "Heat from heater Q₁" } },
                    { id: "q2", type: "range", min: 10, max: 900, step: 10, unit: { ru: "кДж", kk: "кДж", en: "kJ" }, label: { ru: "Теплота холодильнику Q₂", kk: "Тоңазытқышқа берілген жылу Q₂", en: "Heat to cooler Q₂" } }
                ],
                compute(p) {
                    const a = p.q1 - p.q2;
                    const eta = p.q1 > 0 ? (a / p.q1) * 100 : 0;
                    return {
                        expected: Number(eta.toFixed(1)),
                        pass: eta >= 35 && eta <= 45,
                        eta, work: a,
                        readout: tr(
                            `η = (${p.q1} − ${p.q2})/${p.q1}·100 % = ${eta.toFixed(1)} % · A = ${a} кДж`,
                            `η = (${p.q1} − ${p.q2})/${p.q1}·100 % = ${eta.toFixed(1)} % · A = ${a} кДж`,
                            `η = (${p.q1} − ${p.q2})/${p.q1}·100 % = ${eta.toFixed(1)} % · A = ${a} kJ`
                        )
                    };
                }
            },
            {
                id: "g8_coulomb",
                topic: "electro",
                icon: "⚡",
                para: "§ 19",
                title: { ru: "Закон Кулона: два зонда", kk: "Кулон заңы: екі зонд", en: "Coulomb's Law: Two Probes" },
                chapter: { ru: "Электростатика · F = k·q₁·q₂/r²", kk: "Электростатика · F = k·q₁·q₂/r²", en: "Electrostatics · F = k·q₁·q₂/r²" },
                story: {
                    ru: "Квант: два заряженных зонда на орбите отталкиваются. Подбери заряды и расстояние так, чтобы сила Кулона попала в диапазон 200–300 мкН.",
                    kk: "Квант: орбитадағы екі зарядталған зонд тебіседі. Кулон күші 200–300 мкН диапазонына түсетіндей зарядтар мен қашықтықты таңда.",
                    en: "KVANT: two charged probes on orbit repel each other. Tune charges and distance until the Coulomb force lands within 200–300 µN."
                },
                goal: {
                    ru: "Сила 200–300 мкН, затем введи F (мкН).",
                    kk: "Күш 200–300 мкН, сосын F енгіз (мкН).",
                    en: "Force 200–300 µN, then enter F (µN)."
                },
                tip: {
                    ru: "F = k·q₁·q₂/r², k = 9·10⁹ Н·м²/Кл². Сила падает как квадрат расстояния.",
                    kk: "F = k·q₁·q₂/r², k = 9·10⁹ Н·м²/Кл². Күш қашықтықтың квадратына кері пропорционал.",
                    en: "F = k·q₁·q₂/r², k = 9·10⁹ N·m²/C². The force falls as the square of the distance."
                },
                unit: "µN",
                tol: 4,
                defaults: { q1: 4, q2: 4, r: 8 },
                controls: [
                    { id: "q1", type: "range", min: 1, max: 10, step: 1, unit: { ru: "нКл", kk: "нКл", en: "nC" }, label: { ru: "Заряд первого зонда q₁", kk: "Бірінші зондтың заряды q₁", en: "First probe charge q₁" } },
                    { id: "q2", type: "range", min: 1, max: 10, step: 1, unit: { ru: "нКл", kk: "нКл", en: "nC" }, label: { ru: "Заряд второго зонда q₂", kk: "Екінші зондтың заряды q₂", en: "Second probe charge q₂" } },
                    { id: "r", type: "range", min: 2, max: 12, step: 1, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Расстояние r", kk: "Қашықтық r", en: "Distance r" } }
                ],
                compute(p) {
                    const r = p.r / 100;
                    const f = 9e9 * (p.q1 * 1e-9) * (p.q2 * 1e-9) / (r * r);
                    const micro = f * 1e6;
                    return {
                        expected: Number(micro.toFixed(1)),
                        pass: micro >= 200 && micro <= 300,
                        f, micro,
                        readout: tr(
                            `F = k·q₁·q₂/r² = ${micro.toFixed(1)} мкН`,
                            `F = k·q₁·q₂/r² = ${micro.toFixed(1)} мкН`,
                            `F = k·q₁·q₂/r² = ${micro.toFixed(1)} µN`
                        )
                    };
                }
            },
            {
                id: "g8_capacitor",
                topic: "electro",
                icon: "🔋",
                para: "§ 21",
                title: { ru: "Конденсатор сенсора", kk: "Сенсор конденсаторы", en: "Sensor Capacitor" },
                chapter: { ru: "Электроёмкость · C = ε₀·ε·S/d", kk: "Электр сыйымдылығы · C = ε₀·ε·S/d", en: "Capacitance · C = ε₀·ε·S/d" },
                story: {
                    ru: "Сенсор купола настраивают под ёмкость 35–55 пФ. Выбери диэлектрик, площадь пластин и зазор между ними.",
                    kk: "Күмбез сенсоры 35–55 пФ сыйымдылыққа реттеледі. Диэлектрик, пластина ауданы мен саңылауды таңда.",
                    en: "The dome sensor is tuned to 35–55 pF. Choose the dielectric, plate area and gap."
                },
                goal: {
                    ru: "Ёмкость 35–55 пФ, затем введи C (пФ).",
                    kk: "Сыйымдылық 35–55 пФ, сосын C енгіз (пФ).",
                    en: "Capacitance 35–55 pF, then enter C (pF)."
                },
                tip: {
                    ru: "C = ε₀·ε·S/d: больше площадь — больше C, больше зазор — меньше C.",
                    kk: "C = ε₀·ε·S/d: аудан үлкен — C үлкен, саңылау үлкен — C кіші.",
                    en: "C = ε₀·ε·S/d: more area means more C, a bigger gap means less C."
                },
                unit: "pF",
                tol: 1.2,
                defaults: { mat: "glass", s: 20, d: 4 },
                controls: [
                    { id: "mat", type: "select", label: { ru: "Диэлектрик", kk: "Диэлектрик", en: "Dielectric" }, options: [
                        { value: "air", label: { ru: "Воздух (ε = 1)", kk: "Ауа (ε = 1)", en: "Air (ε = 1)" } },
                        { value: "glass", label: { ru: "Стекло (ε = 6)", kk: "Шыны (ε = 6)", en: "Glass (ε = 6)" } },
                        { value: "mica", label: { ru: "Слюда (ε = 5,4)", kk: "Слюда (ε = 5,4)", en: "Mica (ε = 5.4)" } }
                    ] },
                    { id: "s", type: "range", min: 10, max: 100, step: 5, unit: { ru: "см²", kk: "см²", en: "cm²" }, label: { ru: "Площадь пластин S", kk: "Пластина ауданы S", en: "Plate area S" } },
                    { id: "d", type: "range", min: 0.5, max: 5, step: 0.5, unit: { ru: "мм", kk: "мм", en: "mm" }, label: { ru: "Зазор d", kk: "Саңылау d", en: "Gap d" } }
                ],
                compute(p) {
                    const eps = { air: 1, glass: 6, mica: 5.4 }[p.mat] || 1;
                    const c = 0.8854 * eps * p.s / p.d;
                    return {
                        expected: Number(c.toFixed(1)),
                        pass: c >= 35 && c <= 55,
                        c, eps,
                        readout: tr(
                            `C = ε₀·ε·S/d = ${c.toFixed(1)} пФ`,
                            `C = ε₀·ε·S/d = ${c.toFixed(1)} пФ`,
                            `C = ε₀·ε·S/d = ${c.toFixed(1)} pF`
                        )
                    };
                }
            },
            {
                id: "g8_resistivity",
                topic: "electro",
                icon: "🧵",
                para: "§ 25",
                title: { ru: "Сопротивление обмотки", kk: "Орама кедергісі", en: "Coil Resistance" },
                chapter: { ru: "Сопротивление проводника · R = ρ·L/S", kk: "Өткізгіш кедергісі · R = ρ·L/S", en: "Conductor Resistance · R = ρ·L/S" },
                story: {
                    ru: "Обмотке реле нужен провод с сопротивлением 4–6 Ом. Материал, длина и сечение — на твой выбор.",
                    kk: "Реле орамасына кедергісі 4–6 Ом сым керек. Материал, ұзындық және қима — өз таңдауың.",
                    en: "The relay coil needs a wire with 4–6 Ω resistance. Material, length and cross-section are up to you."
                },
                goal: {
                    ru: "Сопротивление 4–6 Ом, затем введи R (Ом).",
                    kk: "Кедергі 4–6 Ом, сосын R енгіз (Ом).",
                    en: "Resistance 4–6 Ω, then enter R (Ω)."
                },
                tip: {
                    ru: "R = ρ·L/S. У меди ρ = 0,017, у нихрома — 1,1 Ом·мм²/м.",
                    kk: "R = ρ·L/S. Мыста ρ = 0,017, нихромда — 1,1 Ом·мм²/м.",
                    en: "R = ρ·L/S. Copper has ρ = 0.017, nichrome 1.1 Ω·mm²/m."
                },
                unit: "Ω",
                tol: 0.15,
                defaults: { mat: "fe", len: 5, s: 0.5 },
                controls: [
                    { id: "mat", type: "select", label: { ru: "Материал провода", kk: "Сым материалы", en: "Wire material" }, options: [
                        { value: "cu", label: { ru: "Медь (ρ = 0,017)", kk: "Мыс (ρ = 0,017)", en: "Copper (ρ = 0.017)" } },
                        { value: "fe", label: { ru: "Железо (ρ = 0,10)", kk: "Темір (ρ = 0,10)", en: "Iron (ρ = 0.10)" } },
                        { value: "ni", label: { ru: "Никель (ρ = 0,42)", kk: "Никель (ρ = 0,42)", en: "Nickel (ρ = 0.42)" } },
                        { value: "chr", label: { ru: "Нихром (ρ = 1,1)", kk: "Нихром (ρ = 1,1)", en: "Nichrome (ρ = 1.1)" } }
                    ] },
                    { id: "len", type: "range", min: 1, max: 20, step: 1, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Длина провода L", kk: "Сым ұзындығы L", en: "Wire length L" } },
                    { id: "s", type: "range", min: 0.1, max: 2, step: 0.1, unit: { ru: "мм²", kk: "мм²", en: "mm²" }, label: { ru: "Сечение S", kk: "Қима S", en: "Cross-section S" } }
                ],
                compute(p) {
                    const rho = { cu: 0.017, fe: 0.10, ni: 0.42, chr: 1.1 }[p.mat] || 0.1;
                    const r = rho * p.len / p.s;
                    return {
                        expected: Number(r.toFixed(2)),
                        pass: r >= 4 && r <= 6,
                        r, rho,
                        readout: tr(
                            `R = ρ·L/S = ${rho}·${p.len}/${p.s} = ${r.toFixed(2)} Ом`,
                            `R = ρ·L/S = ${rho}·${p.len}/${p.s} = ${r.toFixed(2)} Ом`,
                            `R = ρ·L/S = ${rho}·${p.len}/${p.s} = ${r.toFixed(2)} Ω`
                        )
                    };
                }
            },
            {
                id: "g8_electromagnet",
                topic: "magnets",
                icon: "🧲",
                para: "§ 33–34",
                title: { ru: "Электромагнит крана", kk: "Кран электромагниті", en: "Crane Electromagnet" },
                chapter: { ru: "Магнитное поле катушки · B = μ₀·μ·N·I/L", kk: "Ораманың магнит өрісі · B = μ₀·μ·N·I/L", en: "Coil Magnetic Field · B = μ₀·μ·N·I/L" },
                story: {
                    ru: "Подъёмный кран удерживает контейнер на электромагните. Катушка с сердечником должна дать индукцию 8–15 мТл.",
                    kk: "Көтергіш кран контейнерді электромагнитте ұстап тұр. Өзекті орама 8–15 мТл индукция беруі керек.",
                    en: "The crane holds a container on an electromagnet. The cored coil must produce 8–15 mT."
                },
                goal: {
                    ru: "Индукция 8–15 мТл, затем введи B (мТл).",
                    kk: "Индукция 8–15 мТл, сосын B енгіз (мТл).",
                    en: "Flux density 8–15 mT, then enter B (mT)."
                },
                tip: {
                    ru: "B = μ₀·μ·N·I/L: больше витков и тока — сильнее поле, сердечник усиливает его.",
                    kk: "B = μ₀·μ·N·I/L: орам мен ток көбейсе — өріс күшейеді, өзек оны күшейтеді.",
                    en: "B = μ₀·μ·N·I/L: more turns and current mean a stronger field; the core amplifies it."
                },
                unit: "mT",
                tol: 0.4,
                defaults: { core: "air", n: 200, i: 1, len: 20 },
                controls: [
                    { id: "core", type: "select", label: { ru: "Сердечник", kk: "Өзек", en: "Core" }, options: [
                        { value: "air", label: { ru: "Без сердечника (μ = 1)", kk: "Өзексіз (μ = 1)", en: "No core (μ = 1)" } },
                        { value: "steel", label: { ru: "Стальной (μ = 100)", kk: "Болат (μ = 100)", en: "Steel (μ = 100)" } },
                        { value: "iron", label: { ru: "Железный (μ = 200)", kk: "Темір (μ = 200)", en: "Iron (μ = 200)" } }
                    ] },
                    { id: "n", type: "range", min: 100, max: 1000, step: 50, unit: { ru: "вит.", kk: "орам", en: "turns" }, label: { ru: "Число витков N", kk: "Орам саны N", en: "Number of turns N" } },
                    { id: "i", type: "range", min: 0.5, max: 5, step: 0.5, unit: { ru: "А", kk: "А", en: "A" }, label: { ru: "Сила тока I", kk: "Ток күші I", en: "Current I" } },
                    { id: "len", type: "range", min: 5, max: 20, step: 1, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Длина катушки L", kk: "Орама ұзындығы L", en: "Coil length L" } }
                ],
                compute(p) {
                    const mu = { air: 1, steel: 100, iron: 200 }[p.core] || 1;
                    const b = 0.12566 * mu * p.n * p.i / p.len;
                    return {
                        expected: Number(b.toFixed(2)),
                        pass: b >= 8 && b <= 15,
                        b, mu,
                        readout: tr(
                            `B = μ₀·μ·N·I/L = ${b.toFixed(2)} мТл`,
                            `B = μ₀·μ·N·I/L = ${b.toFixed(2)} мТл`,
                            `B = μ₀·μ·N·I/L = ${b.toFixed(2)} mT`
                        )
                    };
                }
            },
            {
                id: "g8_reflection",
                topic: "optics",
                icon: "🪞",
                para: "§ 38",
                title: { ru: "Зеркало примерочной", kk: "Киім бөлмесінің айнасы", en: "Fitting-Room Mirror" },
                chapter: { ru: "Отражение света · h = H/2", kk: "Жарықтың шағылуы · h = H/2", en: "Light Reflection · h = H/2" },
                story: {
                    ru: "В куполе ставят зеркало для проверки скафандров. Инженер ростом H должен видеть себя в полный рост — подбери высоту зеркала.",
                    kk: "Күмбезде скафандрларды тексеруге айна қойылады. Биіктігі H инженер өзін толық көруі керек — айна биіктігін таңда.",
                    en: "A mirror is installed in the dome for suit checks. An engineer of height H must see the full figure — choose the mirror height."
                },
                goal: {
                    ru: "Высота зеркала должна равняться половине роста (±2 см), затем введи h (см).",
                    kk: "Айна биіктігі бойдың жартысына тең болуы керек (±2 см), сосын h енгіз (см).",
                    en: "Mirror height must equal half the person's height (±2 cm); then enter h (cm)."
                },
                tip: {
                    ru: "Чтобы увидеть себя в полный рост, нужно зеркало h = H/2 — расстояние до зеркала не важно.",
                    kk: "Өзіңді толық көру үшін h = H/2 айна керек — айнаға дейінгі қашықтық маңызды емес.",
                    en: "To see your full height you need a mirror of h = H/2 — the distance to it does not matter."
                },
                unit: "cm",
                tol: 2,
                defaults: { hs: 180, mir: 70 },
                controls: [
                    { id: "hs", type: "range", min: 160, max: 200, step: 5, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Рост инженера H", kk: "Инженер бойы H", en: "Engineer height H" } },
                    { id: "mir", type: "range", min: 60, max: 120, step: 5, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Высота зеркала h", kk: "Айна биіктігі h", en: "Mirror height h" } }
                ],
                compute(p) {
                    const need = p.hs / 2;
                    return {
                        expected: Number(need.toFixed(1)),
                        pass: Math.abs(p.mir - need) <= 2,
                        need, mir: p.mir,
                        readout: tr(
                            `нужно h = H/2 = ${need.toFixed(1)} см · сейчас ${p.mir} см`,
                            `керек h = H/2 = ${need.toFixed(1)} см · қазір ${p.mir} см`,
                            `need h = H/2 = ${need.toFixed(1)} cm · now ${p.mir} cm`
                        )
                    };
                }
            },
            {
                id: "g8_refraction",
                topic: "optics",
                icon: "🔷",
                para: "§ 40",
                title: { ru: "Преломление в пластине", kk: "Пластинадағы сыну", en: "Refraction in a Plate" },
                chapter: { ru: "Преломление света · sin α / sin β = n", kk: "Жарықтың сынуы · sin α / sin β = n", en: "Light Refraction · sin α / sin β = n" },
                story: {
                    ru: "Луч входит в стеклянную пластину. Угол преломления должен попасть в 22–30°, иначе прибор не откалибруется.",
                    kk: "Сәуле шыны пластинаға кіреді. Сыну бұрышы 22–30° болуы керек, әйтпесе аспап калибрленбейді.",
                    en: "A ray enters a glass plate. The angle of refraction must land in 22–30°, otherwise the instrument stays uncalibrated."
                },
                goal: {
                    ru: "Угол преломления 22–30°, затем введи β (°).",
                    kk: "Сыну бұрышы 22–30°, сосын β енгіз (°).",
                    en: "Angle of refraction 22–30°, then enter β (°)."
                },
                tip: {
                    ru: "sin α / sin β = n. В плотной среде луч идёт ближе к нормали.",
                    kk: "sin α / sin β = n. Тығыз ортада сәуле нормальға жақындайды.",
                    en: "sin α / sin β = n. In a denser medium the ray bends toward the normal."
                },
                unit: "°",
                tol: 0.6,
                defaults: { alpha: 30, mat: "glass" },
                controls: [
                    { id: "alpha", type: "range", min: 20, max: 70, step: 5, unit: { ru: "°", kk: "°", en: "°" }, label: { ru: "Угол падения α", kk: "Түсу бұрышы α", en: "Angle of incidence α" } },
                    { id: "mat", type: "select", label: { ru: "Среда", kk: "Орта", en: "Medium" }, options: [
                        { value: "water", label: { ru: "Вода (n = 1,33)", kk: "Су (n = 1,33)", en: "Water (n = 1.33)" } },
                        { value: "glass", label: { ru: "Стекло (n = 1,5)", kk: "Шыны (n = 1,5)", en: "Glass (n = 1.5)" } },
                        { value: "diamond", label: { ru: "Алмаз (n = 2,42)", kk: "Алмаз (n = 2,42)", en: "Diamond (n = 2.42)" } }
                    ] }
                ],
                compute(p) {
                    const n = { water: 1.33, glass: 1.5, diamond: 2.42 }[p.mat] || 1.5;
                    const beta = Math.asin(Math.sin(p.alpha * Math.PI / 180) / n) * 180 / Math.PI;
                    return {
                        expected: Number(beta.toFixed(1)),
                        pass: beta >= 22 && beta <= 30,
                        beta, n,
                        readout: tr(
                            `β = arcsin(sin α / n) = ${beta.toFixed(1)}° · n = ${n}`,
                            `β = arcsin(sin α / n) = ${beta.toFixed(1)}° · n = ${n}`,
                            `β = arcsin(sin α / n) = ${beta.toFixed(1)}° · n = ${n}`
                        )
                    };
                }
            },
            {
                id: "g8_eye",
                topic: "optics",
                icon: "👁️",
                para: "§ 42",
                title: { ru: "Глаз и очки", kk: "Көз және көзілдірік", en: "Eye & Glasses" },
                chapter: { ru: "Оптическая система глаза · D = 1/d + 1/f", kk: "Көздің оптикалық жүйесі · D = 1/d + 1/f", en: "Eye Optics · D = 1/d + 1/f" },
                story: {
                    ru: "Окуляр скафандра: глаз фокусирует изображение на сетчатке в 2,4 см от линзы. Подбери оптическую силу глаза так, чтобы предмет на заданном расстоянии был резким.",
                    kk: "Скафандр окуляры: көз бейнені линзадан 2,4 см қашықтықтағы торға фокустайды. Берілген қашықтықтағы зат анық көрінетіндей көздің оптикалық күшін таңда.",
                    en: "Suit visor: the eye focuses the image on the retina 2.4 cm behind the lens. Choose the eye's optical power so an object at the set distance is sharp."
                },
                goal: {
                    ru: "Сфокусируй глаз на предмете и введи нужную оптическую силу D (дптр).",
                    kk: "Көзді затқа фокустап, қажет оптикалық күшті енгіз D (дптр).",
                    en: "Focus the eye on the object and enter the required optical power D (dpt)."
                },
                tip: {
                    ru: "1/F = 1/d + 1/f, F = 1/D. Сетчатка в 2,4 см от линзы.",
                    kk: "1/F = 1/d + 1/f, F = 1/D. Тор линзадан 2,4 см қашықтықта.",
                    en: "1/F = 1/d + 1/f, F = 1/D. The retina is 2.4 cm behind the lens."
                },
                unit: "dpt",
                tol: 0.4,
                defaults: { d: 100, dpt: 46 },
                controls: [
                    { id: "d", type: "range", min: 25, max: 200, step: 5, unit: { ru: "см", kk: "см", en: "cm" }, label: { ru: "Расстояние до предмета d", kk: "Затқа дейінгі қашықтық d", en: "Object distance d" } },
                    { id: "dpt", type: "range", min: 40, max: 60, step: 0.5, unit: { ru: "дптр", kk: "дптр", en: "dpt" }, label: { ru: "Оптическая сила глаза D", kk: "Көздің оптикалық күші D", en: "Eye optical power D" } }
                ],
                compute(p) {
                    const need = 100 / p.d + 1 / 0.024;
                    return {
                        expected: Number(need.toFixed(1)),
                        pass: Math.abs(p.dpt - need) <= 0.4,
                        need, dpt: p.dpt,
                        readout: tr(
                            `нужно D = 1/d + 1/f = ${need.toFixed(1)} дптр · сейчас ${p.dpt.toFixed(1)}`,
                            `керек D = 1/d + 1/f = ${need.toFixed(1)} дптр · қазір ${p.dpt.toFixed(1)}`,
                            `need D = 1/d + 1/f = ${need.toFixed(1)} dpt · now ${p.dpt.toFixed(1)}`
                        )
                    };
                }
            }
        ],

        9: [
            {
                id: "g9_ballistics",
                topic: "kinematics",
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
                defaults: { v0: 30, angle: 25, g: "9.8" },
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
                topic: "dynamics",
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
                topic: "dynamics",
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
                defaults: { mode: "inelastic", m1: 2, v1: 6, m2: 6, v2: -1 },
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
                topic: "osc",
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
                topic: "osc",
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
                topic: "quantum",
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
            },
            {
                id: "g9_coulomb",
                topic: "electro9",
                icon: "⚡",
                para: "§ 1–8",
                title: { ru: "Закон Кулона: два заряда", kk: "Кулон заңы: екі заряд", en: "Coulomb's Law: Two Charges" },
                chapter: { ru: "Электростатика · F = k·q₁q₂/r²", kk: "Электростатика · F = k·q₁q₂/r²", en: "Electrostatics · F = k·q₁q₂/r²" },
                story: {
                    ru: "Два заряда удерживают магнитный парус «Беркута». Слишком большая сила разорвёт крепления, слишком малая — парус не раскроется. Подбери заряды и расстояние так, чтобы сила Кулона попала в рабочий диапазон 0,8–2,5 Н!",
                    kk: "Екі заряд «Беркут» магнит желкенін ұстап тұр. Тым үлкен күш бекітпелерді жыртады, тым аз күш желкенді ашпайды. Кулон күші 0,8–2,5 Н диапазонына түсуі үшін зарядтар мен қашықтықты таңда!",
                    en: "Two charges hold the Berkut magnetic sail. Too much force tears the mounts, too little and the sail will not open. Tune charges and distance so the Coulomb force lands in 0.8–2.5 N!"
                },
                goal: {
                    ru: "Получи F = 0,8–2,5 Н и введи F (Н).",
                    kk: "F = 0,8–2,5 Н алып, F мәнін енгіз (Н).",
                    en: "Reach F = 0.8–2.5 N and enter F (N)."
                },
                unit: "N",
                tol: 0.04,
                defaults: { q1: 2, q2: 3, r: 0.3 },
                controls: [
                    { id: "q1", type: "range", min: 1, max: 10, step: 1, unit: { ru: "мкКл", kk: "мкКл", en: "μC" }, label: { ru: "Заряд q₁", kk: "Заряд q₁", en: "Charge q₁" } },
                    { id: "q2", type: "range", min: 1, max: 10, step: 1, unit: { ru: "мкКл", kk: "мкКл", en: "μC" }, label: { ru: "Заряд q₂", kk: "Заряд q₂", en: "Charge q₂" } },
                    { id: "r", type: "range", min: 0.05, max: 0.5, step: 0.05, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Расстояние r", kk: "Қашықтық r", en: "Distance r" } }
                ],
                compute(p) {
                    const F = 9e9 * (p.q1 * 1e-6) * (p.q2 * 1e-6) / (p.r * p.r);
                    return {
                        expected: Number(F.toFixed(2)),
                        pass: F >= 0.8 && F <= 2.5,
                        F, q1: p.q1, q2: p.q2, r: p.r,
                        readout: tr(
                            `F = 9·10⁹ · ${p.q1}·10⁻⁶ · ${p.q2}·10⁻⁶ / ${p.r}² = ${F.toFixed(2)} Н`,
                            `F = 9·10⁹ · ${p.q1}·10⁻⁶ · ${p.q2}·10⁻⁶ / ${p.r}² = ${F.toFixed(2)} Н`,
                            `F = 9·10⁹ · ${p.q1}·10⁻⁶ · ${p.q2}·10⁻⁶ / ${p.r}² = ${F.toFixed(2)} N`
                        )
                    };
                }
            },
            {
                id: "g9_decay",
                topic: "quantum",
                icon: "☢️",
                para: "§ 29–36",
                title: { ru: "Радиоактивный распад", kk: "Радиоактивті ыдырау", en: "Radioactive Decay" },
                chapter: { ru: "Ядерная физика · N = N₀·2^(−t/T)", kk: "Ядролық физика · N = N₀·2^(−t/T)", en: "Nuclear physics · N = N₀·2^(−t/T)" },
                story: {
                    ru: "Изотоп в энергоячейке Орбиты-9 распадается. Нужно оставить 10–25 % ядер — это рабочий режим реактора. Подбери период полураспада T и время t при заданном N₀!",
                    kk: "Орбита-9 энергия ұяшығындағы изотоп ыдырайды. Ядролардың 10–25 % қалуы керек — бұл реактордың жұмыс режимі. N₀ берілгенде T жартылай ыдырау периоды мен t уақытты таңда!",
                    en: "The isotope in an Orbit-9 power cell decays. 10–25 % of the nuclei must remain for the reactor's working mode. Tune half-life T and time t for a given N₀!"
                },
                goal: {
                    ru: "Оставь 10–25 % ядер и введи N (шт.).",
                    kk: "Ядролардың 10–25 % қалдырып, N мәнін енгіз (дана).",
                    en: "Leave 10–25 % of the nuclei and enter N (count)."
                },
                unit: "pcs",
                tol: 15,
                defaults: { N0: 4000, T: 6, t: 6 },
                controls: [
                    { id: "N0", type: "range", min: 1000, max: 10000, step: 500, unit: { ru: "шт.", kk: "дана", en: "pcs" }, label: { ru: "Начальное число ядер N₀", kk: "Бастапқы ядро саны N₀", en: "Initial nuclei N₀" } },
                    { id: "T", type: "range", min: 2, max: 20, step: 1, unit: { ru: "сут", kk: "тәул", en: "days" }, label: { ru: "Период полураспада T", kk: "Жартылай ыдырау периоды T", en: "Half-life T" } },
                    { id: "t", type: "range", min: 2, max: 40, step: 1, unit: { ru: "сут", kk: "тәул", en: "days" }, label: { ru: "Время t", kk: "Уақыт t", en: "Time t" } }
                ],
                compute(p) {
                    const N = p.N0 * Math.pow(2, -p.t / p.T);
                    const frac = N / p.N0;
                    return {
                        expected: Math.round(N),
                        pass: frac >= 0.10 && frac <= 0.25,
                        N, frac, halves: p.t / p.T,
                        readout: tr(
                            `N = ${Math.round(N)} из ${p.N0} (${(frac * 100).toFixed(1)} %) · прошло ${(p.t / p.T).toFixed(2)} периода`,
                            `N = ${Math.round(N)} / ${p.N0} (${(frac * 100).toFixed(1)} %) · ${(p.t / p.T).toFixed(2)} период өтті`,
                            `N = ${Math.round(N)} of ${p.N0} (${(frac * 100).toFixed(1)} %) · ${(p.t / p.T).toFixed(2)} half-lives`
                        )
                    };
                }
            },
            {
                id: "g9_induction",
                topic: "electro9",
                icon: "🧲",
                para: "§ 37–44",
                title: { ru: "ЭДС индукции в катушке", kk: "Орамадағы индукция ЭҚК", en: "Induced EMF in a Coil" },
                chapter: { ru: "Электромагнитная индукция · ε = N·B·S/Δt", kk: "Электромагниттік индукция · ε = N·B·S/Δt", en: "Electromagnetic induction · ε = N·B·S/Δt" },
                story: {
                    ru: "Генератор аварийного щита Орбиты-9 наводит ЭДС в катушке: магнитное поле B исчезает за время Δt. Подбери индукцию, площадь витка, число витков и время так, чтобы ЭДС была 4–30 В!",
                    kk: "Орбита-9 апаттық қалқанының генераторы орамада ЭҚК тудырады: B магнит өрісі Δt уақытта жоғалады. ЭҚК 4–30 В болуы үшін индукция, виток ауданы, виток саны мен уақытты таңда!",
                    en: "The Orbit-9 emergency shield generator induces EMF in a coil: field B collapses in time Δt. Tune induction, turn area, number of turns and time so the EMF is 4–30 V!"
                },
                goal: {
                    ru: "Получи ε = 4–30 В и введи ЭДС (В).",
                    kk: "ε = 4–30 В алып, ЭҚК мәнін енгіз (В).",
                    en: "Reach ε = 4–30 V and enter the EMF (V)."
                },
                unit: "V",
                tol: 0.2,
                defaults: { B: 0.5, S: 40, N: 50, dt: 0.5 },
                controls: [
                    { id: "B", type: "range", min: 0.1, max: 1.2, step: 0.1, unit: { ru: "Тл", kk: "Тл", en: "T" }, label: { ru: "Магнитная индукция B", kk: "Магнит индукциясы B", en: "Magnetic field B" } },
                    { id: "S", type: "range", min: 10, max: 100, step: 10, unit: { ru: "см²", kk: "см²", en: "cm²" }, label: { ru: "Площадь витка S", kk: "Виток ауданы S", en: "Turn area S" } },
                    { id: "N", type: "range", min: 10, max: 100, step: 10, unit: { ru: "вит.", kk: "вит.", en: "turns" }, label: { ru: "Число витков N", kk: "Виток саны N", en: "Number of turns N" } },
                    { id: "dt", type: "range", min: 0.1, max: 1, step: 0.1, unit: { ru: "с", kk: "с", en: "s" }, label: { ru: "Время исчезновения поля Δt", kk: "Өріс жоғалу уақыты Δt", en: "Field collapse time Δt" } }
                ],
                compute(p) {
                    const S = p.S * 1e-4;
                    const emf = p.N * p.B * S / p.dt;
                    return {
                        expected: Number(emf.toFixed(2)),
                        pass: emf >= 4 && emf <= 30,
                        emf, flux: p.B * S,
                        readout: tr(
                            `ε = ${p.N} · ${p.B} · ${p.S}·10⁻⁴ / ${p.dt} = ${emf.toFixed(2)} В`,
                            `ε = ${p.N} · ${p.B} · ${p.S}·10⁻⁴ / ${p.dt} = ${emf.toFixed(2)} В`,
                            `ε = ${p.N} · ${p.B} · ${p.S}·10⁻⁴ / ${p.dt} = ${emf.toFixed(2)} V`
                        )
                    };
                }
            },
            {
                id: "g9_speed",
                topic: "kinematics",
                icon: "🛰️",
                para: "§ 1–2",
                title: { ru: "Трасса разведчика", kk: "Барлаушы трассасы", en: "Scout Track" },
                chapter: { ru: "Механическое движение · v = s/t", kk: "Механикалық қозғалыс · v = s/t", en: "Motion · v = s/t" },
                story: {
                    ru: "Разведчик «Орбиты-9» проходит трассу. Подбери путь и время так, чтобы скорость была 6–8 м/с.",
                    kk: "«Орбита-9» барлаушысы трассадан өтеді. Жылдамдығы 6–8 м/с болатындай жол мен уақытты таңда.",
                    en: "The Orbita-9 scout runs the track. Choose distance and time so the speed is 6–8 m/s."
                },
                goal: {
                    ru: "Скорость 6–8 м/с, затем введи v (м/с).",
                    kk: "Жылдамдық 6–8 м/с, сосын v енгіз (м/с).",
                    en: "Speed 6–8 m/s, then enter v (m/s)."
                },
                tip: {
                    ru: "v = s/t: скорость — это путь за единицу времени.",
                    kk: "v = s/t: жылдамдық — уақыт бірлігіндегі жол.",
                    en: "v = s/t: speed is the distance covered per unit time."
                },
                unit: "m/s",
                tol: 0.15,
                defaults: { s: 100, t: 20 },
                controls: [
                    { id: "s", type: "range", min: 20, max: 200, step: 10, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Путь s", kk: "Жол s", en: "Distance s" } },
                    { id: "t", type: "range", min: 2, max: 20, step: 1, unit: { ru: "с", kk: "с", en: "s" }, label: { ru: "Время t", kk: "Уақыт t", en: "Time t" } }
                ],
                compute(p) {
                    const v = p.s / p.t;
                    return {
                        expected: Number(v.toFixed(2)),
                        pass: v >= 6 && v <= 8,
                        v,
                        readout: tr(
                            `v = s/t = ${p.s}/${p.t} = ${v.toFixed(2)} м/с`,
                            `v = s/t = ${p.s}/${p.t} = ${v.toFixed(2)} м/с`,
                            `v = s/t = ${p.s}/${p.t} = ${v.toFixed(2)} m/s`
                        )
                    };
                }
            },
            {
                id: "g9_accel",
                topic: "kinematics",
                icon: "🏁",
                para: "§ 3–4",
                title: { ru: "Разгон платформы", kk: "Платформаның үдеуі", en: "Platform Acceleration" },
                chapter: { ru: "Равноускоренное движение · a = (v − v₀)/t", kk: "Бірқалыпты үдемелі қозғалыс · a = (v − v₀)/t", en: "Uniform Acceleration · a = (v − v₀)/t" },
                story: {
                    ru: "Платформа разгоняется на испытательном треке. Нужно ускорение 1,5–2,5 м/с² — иначе груз сорвётся с креплений.",
                    kk: "Платформа сынақ трегінде үдейді. 1,5–2,5 м/с² үдеу керек — әйтпесе жүк бекітпестен шығып кетеді.",
                    en: "The platform accelerates on the test track. It needs 1.5–2.5 m/s², or the cargo tears loose."
                },
                goal: {
                    ru: "Ускорение 1,5–2,5 м/с², затем введи a (м/с²).",
                    kk: "Үдеу 1,5–2,5 м/с², сосын a енгіз (м/с²).",
                    en: "Acceleration 1.5–2.5 m/s², then enter a (m/s²)."
                },
                tip: {
                    ru: "a = (v − v₀)/t: разность скоростей делим на время разгона.",
                    kk: "a = (v − v₀)/t: жылдамдықтар айырмасын уақытқа бөлеміз.",
                    en: "a = (v − v₀)/t: divide the speed change by the time."
                },
                unit: "m/s²",
                tol: 0.08,
                defaults: { v0: 0, v: 20, t: 4 },
                controls: [
                    { id: "v0", type: "range", min: 0, max: 10, step: 1, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Начальная скорость v₀", kk: "Бастапқы жылдамдық v₀", en: "Initial speed v₀" } },
                    { id: "v", type: "range", min: 5, max: 25, step: 1, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, label: { ru: "Конечная скорость v", kk: "Соңғы жылдамдық v", en: "Final speed v" } },
                    { id: "t", type: "range", min: 2, max: 10, step: 0.5, unit: { ru: "с", kk: "с", en: "s" }, label: { ru: "Время разгона t", kk: "Үдеу уақыты t", en: "Acceleration time t" } }
                ],
                compute(p) {
                    const a = (p.v - p.v0) / p.t;
                    return {
                        expected: Number(a.toFixed(2)),
                        pass: a >= 1.5 && a <= 2.5,
                        a,
                        readout: tr(
                            `a = (${p.v} − ${p.v0})/${p.t} = ${a.toFixed(2)} м/с²`,
                            `a = (${p.v} − ${p.v0})/${p.t} = ${a.toFixed(2)} м/с²`,
                            `a = (${p.v} − ${p.v0})/${p.t} = ${a.toFixed(2)} m/s²`
                        )
                    };
                }
            },
            {
                id: "g9_newton2",
                topic: "dynamics",
                icon: "🚚",
                para: "§ 15",
                title: { ru: "Второй закон Ньютона", kk: "Ньютонның екінші заңы", en: "Newton's Second Law" },
                chapter: { ru: "Динамика · a = F/m", kk: "Динамика · a = F/m", en: "Dynamics · a = F/m" },
                story: {
                    ru: "Маневровый двигатель толкает капсулу. Подбери силу и массу так, чтобы ускорение было 2–3 м/с².",
                    kk: "Маневрлік қозғалтқыш капсуланы итереді. Үдеу 2–3 м/с² болатындай күш пен массаны таңда.",
                    en: "A manoeuvring engine pushes the capsule. Choose force and mass so the acceleration is 2–3 m/s²."
                },
                goal: {
                    ru: "Ускорение 2–3 м/с², затем введи a (м/с²).",
                    kk: "Үдеу 2–3 м/с², сосын a енгіз (м/с²).",
                    en: "Acceleration 2–3 m/s², then enter a (m/s²)."
                },
                tip: {
                    ru: "a = F/m: чем больше сила и меньше масса, тем больше ускорение.",
                    kk: "a = F/m: күш үлкен, масса кіші болса — үдеу үлкен.",
                    en: "a = F/m: more force and less mass give more acceleration."
                },
                unit: "m/s²",
                tol: 0.08,
                defaults: { f: 20, m: 2 },
                controls: [
                    { id: "f", type: "range", min: 2, max: 20, step: 0.5, unit: { ru: "Н", kk: "Н", en: "N" }, label: { ru: "Сила тяги F", kk: "Тарту күші F", en: "Thrust F" } },
                    { id: "m", type: "range", min: 0.5, max: 5, step: 0.5, unit: { ru: "кг", kk: "кг", en: "kg" }, label: { ru: "Масса капсулы m", kk: "Капсула массасы m", en: "Capsule mass m" } }
                ],
                compute(p) {
                    const a = p.f / p.m;
                    return {
                        expected: Number(a.toFixed(2)),
                        pass: a >= 2 && a <= 3,
                        a,
                        readout: tr(
                            `a = F/m = ${p.f}/${p.m} = ${a.toFixed(2)} м/с²`,
                            `a = F/m = ${p.f}/${p.m} = ${a.toFixed(2)} м/с²`,
                            `a = F/m = ${p.f}/${p.m} = ${a.toFixed(2)} m/s²`
                        )
                    };
                }
            },
            {
                id: "g9_fall",
                topic: "kinematics",
                icon: "🪂",
                para: "§ 5",
                title: { ru: "Свободное падение зонда", kk: "Зондтың еркін құлауы", en: "Free Fall of a Probe" },
                chapter: { ru: "Свободное падение · t = √(2h/g)", kk: "Еркін құлау · t = √(2h/g)", en: "Free Fall · t = √(2h/g)" },
                story: {
                    ru: "Капсула сбрасывает зонд с высоты. Время падения должно быть 1,2–1,6 с — иначе парашют не успеет раскрыться.",
                    kk: "Капсула зондты биіктіктен тастайды. Құлау уақыты 1,2–1,6 с болуы керек — әйтпесе парашют ашылмайды.",
                    en: "The capsule drops a probe. The fall time must be 1.2–1.6 s, or the parachute will not open in time."
                },
                goal: {
                    ru: "Время падения 1,1–1,8 с, затем введи t (с).",
                    kk: "Құлау уақыты 1,1–1,8 с, сосын t енгіз (с).",
                    en: "Fall time 1.1–1.8 s, then enter t (s)."
                },
                tip: {
                    ru: "h = g·t²/2, значит t = √(2h/g), g = 9,8 м/с².",
                    kk: "h = g·t²/2, демек t = √(2h/g), g = 9,8 м/с².",
                    en: "h = g·t²/2, so t = √(2h/g) with g = 9.8 m/s²."
                },
                unit: "s",
                tol: 0.05,
                defaults: { h: 45 },
                controls: [
                    { id: "h", type: "range", min: 5, max: 45, step: 1, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Высота сброса h", kk: "Тастау биіктігі h", en: "Drop height h" } }
                ],
                compute(p) {
                    const t = Math.sqrt(2 * p.h / 9.8);
                    return {
                        expected: Number(t.toFixed(2)),
                        pass: t >= 1.1 && t <= 1.8,
                        t,
                        readout: tr(
                            `t = √(2h/g) = √(2·${p.h}/9,8) = ${t.toFixed(2)} с`,
                            `t = √(2h/g) = √(2·${p.h}/9,8) = ${t.toFixed(2)} с`,
                            `t = √(2h/g) = √(2·${p.h}/9.8) = ${t.toFixed(2)} s`
                        )
                    };
                }
            },
            {
                id: "g9_energy",
                topic: "dynamics",
                icon: "⛰️",
                para: "§ 22–23",
                title: { ru: "Энергия на наклонной", kk: "Көлбеудегі энергия", en: "Energy on a Ramp" },
                chapter: { ru: "Закон сохранения энергии · E = m·g·h", kk: "Энергияның сақталу заңы · E = m·g·h", en: "Energy Conservation · E = m·g·h" },
                story: {
                    ru: "Груз скатывается по наклонной без трения. Энергия системы должна попасть в 100–150 Дж — это рабочий режим генератора.",
                    kk: "Жүк үйкеліссіз көлбеуден сырғанайды. Жүйе энергиясы 100–150 Дж болуы керек — бұл генератордың жұмыс режимі.",
                    en: "A load rolls down a frictionless ramp. The system energy must land in 100–150 J — the generator's working band."
                },
                goal: {
                    ru: "Энергия 100–150 Дж, затем введи E (Дж).",
                    kk: "Энергия 100–150 Дж, сосын E енгіз (Дж).",
                    en: "Energy 100–150 J, then enter E (J)."
                },
                tip: {
                    ru: "E = m·g·h: вся потенциальная энергия переходит в кинетическую.",
                    kk: "E = m·g·h: барлық потенциалдық энергия кинетикалыққа айналады.",
                    en: "E = m·g·h: all potential energy turns into kinetic energy."
                },
                unit: "J",
                tol: 1,
                defaults: { m: 1, h: 2 },
                controls: [
                    { id: "m", type: "range", min: 0.5, max: 5, step: 0.5, unit: { ru: "кг", kk: "кг", en: "kg" }, label: { ru: "Масса груза m", kk: "Жүк массасы m", en: "Load mass m" } },
                    { id: "h", type: "range", min: 1, max: 10, step: 0.5, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Высота h", kk: "Биіктік h", en: "Height h" } }
                ],
                compute(p) {
                    const e = p.m * 9.8 * p.h;
                    return {
                        expected: Number(e.toFixed(1)),
                        pass: e >= 100 && e <= 150,
                        e,
                        readout: tr(
                            `E = m·g·h = ${p.m}·9,8·${p.h} = ${e.toFixed(1)} Дж`,
                            `E = m·g·h = ${p.m}·9,8·${p.h} = ${e.toFixed(1)} Дж`,
                            `E = m·g·h = ${p.m}·9.8·${p.h} = ${e.toFixed(1)} J`
                        )
                    };
                }
            },
            {
                id: "g9_resonance",
                topic: "osc",
                icon: "🌉",
                para: "§ 27",
                title: { ru: "Резонанс моста", kk: "Көпір резонансы", en: "Bridge Resonance" },
                chapter: { ru: "Резонанс · f = f₀", kk: "Резонанс · f = f₀", en: "Resonance · f = f₀" },
                story: {
                    ru: "Мост входит в резонанс, когда частота толчков совпадает с собственной частотой. Настрой генератор и определи резонансную частоту.",
                    kk: "Көпір серпіліс жиілігі меншікті жиілікке сәйкес келгенде резонансқа түседі. Генераторды реттеп, резонанс жиілігін анықта.",
                    en: "The bridge resonates when the drive frequency matches its natural frequency. Tune the generator and find the resonant frequency."
                },
                goal: {
                    ru: "Совпади с собственной частотой (±0,3 Гц) и введи резонансную частоту (Гц).",
                    kk: "Меншікті жиілікке дәл кел (±0,3 Гц) және резонанс жиілігін енгіз (Гц).",
                    en: "Match the natural frequency (±0.3 Hz) and enter the resonant frequency (Hz)."
                },
                tip: {
                    ru: "Резонанс наступает при f = f₀: амплитуда резко растёт.",
                    kk: "Резонанс f = f₀ кезінде болады: амплитуда күрт өседі.",
                    en: "Resonance happens at f = f₀: the amplitude shoots up."
                },
                unit: "Hz",
                tol: 0.1,
                defaults: { f0: 6, f: 2 },
                controls: [
                    { id: "f0", type: "range", min: 4, max: 9, step: 0.5, unit: { ru: "Гц", kk: "Гц", en: "Hz" }, label: { ru: "Собственная частота моста f₀", kk: "Көпірдің меншікті жиілігі f₀", en: "Bridge natural frequency f₀" } },
                    { id: "f", type: "range", min: 2, max: 12, step: 0.1, unit: { ru: "Гц", kk: "Гц", en: "Hz" }, label: { ru: "Частота толчков f", kk: "Серпіліс жиілігі f", en: "Drive frequency f" } }
                ],
                compute(p) {
                    const detune = Math.abs(p.f - p.f0);
                    const amp = 1 / Math.sqrt(1 + Math.pow(detune / 0.35, 2));
                    return {
                        expected: Number(p.f0.toFixed(1)),
                        pass: detune <= 0.3,
                        amp, detune,
                        readout: tr(
                            `f = ${p.f.toFixed(1)} Гц, f₀ = ${p.f0.toFixed(1)} Гц · амплитуда ${(amp * 100).toFixed(0)} %`,
                            `f = ${p.f.toFixed(1)} Гц, f₀ = ${p.f0.toFixed(1)} Гц · амплитуда ${(amp * 100).toFixed(0)} %`,
                            `f = ${p.f.toFixed(1)} Hz, f₀ = ${p.f0.toFixed(1)} Hz · amplitude ${(amp * 100).toFixed(0)} %`
                        )
                    };
                }
            },
            {
                id: "g9_emwave",
                topic: "osc",
                icon: "📡",
                para: "§ 31",
                title: { ru: "Антенна и длина волны", kk: "Антенна және толқын ұзындығы", en: "Antenna & Wavelength" },
                chapter: { ru: "Электромагнитные волны · ν = c/λ", kk: "Электромагниттік толқындар · ν = c/λ", en: "Electromagnetic Waves · ν = c/λ" },
                story: {
                    ru: "Антенна должна принять сигнал в диапазоне 90–110 МГц. Подбери длину волны так, чтобы попасть в этот канал.",
                    kk: "Антенна 90–110 МГц диапазонындағы сигналды қабылдауы керек. Осы арнаға түсетіндей толқын ұзындығын таңда.",
                    en: "The antenna must receive a 90–110 MHz signal. Choose the wavelength that lands in this channel."
                },
                goal: {
                    ru: "Частота 90–110 МГц, затем введи ν (МГц).",
                    kk: "Жиілік 90–110 МГц, сосын ν енгіз (МГц).",
                    en: "Frequency 90–110 MHz, then enter ν (MHz)."
                },
                tip: {
                    ru: "ν = c/λ, c = 3·10⁸ м/с. Чем короче волна, тем выше частота.",
                    kk: "ν = c/λ, c = 3·10⁸ м/с. Толқын қысқа болса, жиілік жоғары.",
                    en: "ν = c/λ with c = 3·10⁸ m/s. Shorter waves mean higher frequency."
                },
                unit: "MHz",
                tol: 1,
                defaults: { lam: 5 },
                controls: [
                    { id: "lam", type: "range", min: 0.5, max: 5, step: 0.1, unit: { ru: "м", kk: "м", en: "m" }, label: { ru: "Длина волны λ", kk: "Толқын ұзындығы λ", en: "Wavelength λ" } }
                ],
                compute(p) {
                    const nu = 300 / p.lam;
                    return {
                        expected: Number(nu.toFixed(1)),
                        pass: nu >= 90 && nu <= 110,
                        nu,
                        readout: tr(
                            `ν = c/λ = 300/${p.lam.toFixed(1)} = ${nu.toFixed(1)} МГц`,
                            `ν = c/λ = 300/${p.lam.toFixed(1)} = ${nu.toFixed(1)} МГц`,
                            `ν = c/λ = 300/${p.lam.toFixed(1)} = ${nu.toFixed(1)} MHz`
                        )
                    };
                }
            },
            {
                id: "g9_binding",
                topic: "quantum",
                icon: "⚛️",
                para: "§ 37",
                title: { ru: "Энергия связи ядра", kk: "Ядроның байланыс энергиясы", en: "Nuclear Binding Energy" },
                chapter: { ru: "Дефект масс · E = Δm·931,5 МэВ", kk: "Масса ақауы · E = Δm·931,5 МэВ", en: "Mass Defect · E = Δm·931.5 MeV" },
                story: {
                    ru: "Реактору нужна энергия связи 50–70 МэВ. Подбери дефект масс ядра и подтверди расчёт.",
                    kk: "Реакторға 55–65 МэВ байланыс энергиясы керек. Ядроның масса ақауын таңдап, есепті раста.",
                    en: "The reactor needs 55–65 MeV of binding energy. Choose the nuclear mass defect and verify the calculation."
                },
                goal: {
                    ru: "Энергия связи 50–70 МэВ, затем введи E (МэВ).",
                    kk: "Байланыс энергиясы 50–70 МэВ, сосын E енгіз (МэВ).",
                    en: "Binding energy 50–70 MeV, then enter E (MeV)."
                },
                tip: {
                    ru: "E = Δm · 931,5 МэВ/а.е.м.: дефект масс превращается в энергию связи.",
                    kk: "E = Δm · 931,5 МэВ/а.е.м.: масса ақауы байланыс энергиясына айналады.",
                    en: "E = Δm · 931.5 MeV/u: the mass defect becomes binding energy."
                },
                unit: "MeV",
                tol: 0.6,
                defaults: { dm: 0.02 },
                controls: [
                    { id: "dm", type: "range", min: 0.01, max: 0.3, step: 0.005, unit: { ru: "а.е.м.", kk: "а.е.м.", en: "u" }, label: { ru: "Дефект масс Δm", kk: "Масса ақауы Δm", en: "Mass defect Δm" } }
                ],
                compute(p) {
                    const e = p.dm * 931.5;
                    return {
                        expected: Number(e.toFixed(1)),
                        pass: e >= 50 && e <= 70,
                        e,
                        readout: tr(
                            `E = Δm·931,5 = ${p.dm.toFixed(3)}·931,5 = ${e.toFixed(1)} МэВ`,
                            `E = Δm·931,5 = ${p.dm.toFixed(3)}·931,5 = ${e.toFixed(1)} МэВ`,
                            `E = Δm·931.5 = ${p.dm.toFixed(3)}·931.5 = ${e.toFixed(1)} MeV`
                        )
                    };
                }
            }
        ]
    };

    /* Темы галереи: каждая карточка относится к своей теме (порядок = порядок изучения) */
    const TOPICS_BY_GRADE = {
        8: [
            { id: "heat", range: "§§ 1–17", title: { ru: "Тепловые явления", kk: "Жылу құбылыстары", en: "Thermal Phenomena" } },
            { id: "electro", range: "§§ 18–30", title: { ru: "Электричество", kk: "Электричество", en: "Electricity" } },
            { id: "mech", range: "§§ 24–28, 46–49", title: { ru: "Давление и плавучесть", kk: "Қысым және жүзу", en: "Pressure & Buoyancy" } },
            { id: "magnets", range: "§§ 31–36", title: { ru: "Магнетизм", kk: "Магнетизм", en: "Magnetism" } },
            { id: "waves", range: "§§ 30–33", title: { ru: "Звук и волны", kk: "Дыбыс және толқындар", en: "Sound & Waves" } },
            { id: "optics", range: "§§ 37–43", title: { ru: "Оптика", kk: "Оптика", en: "Optics" } }
        ],
        9: [
            { id: "kinematics", range: "§§ 1–12", title: { ru: "Кинематика", kk: "Кинематика", en: "Kinematics" } },
            { id: "dynamics", range: "§§ 13–23", title: { ru: "Динамика и законы сохранения", kk: "Динамика және сақталу заңдары", en: "Dynamics & Conservation Laws" } },
            { id: "osc", range: "§§ 24–31", title: { ru: "Колебания, волны и излучение", kk: "Тербелістер, толқындар және сәулелену", en: "Oscillations, Waves & Radiation" } },
            { id: "electro9", range: "§§ 1–8, 37–44", title: { ru: "Электростатика и индукция", kk: "Электростатика және индукция", en: "Electrostatics & Induction" } },
            { id: "quantum", range: "§§ 29–43", title: { ru: "Квантовая и ядерная физика", kk: "Кванттық және ядролық физика", en: "Quantum & Nuclear Physics" } }
        ]
    };

    function paraStart(lab) {
        const m = String((lab && lab.para) || "").match(/(\d+)/);
        return m ? Number(m[1]) : 999;
    }
    function labsWord(n) {
        const mod10 = n % 10, mod100 = n % 100;
        if (mod10 === 1 && mod100 !== 11) return "симулятор";
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "симулятора";
        return "симуляторов";
    }

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

    // Локализация единиц измерения для поля ответа: unit хранится в «нейтральном» виде.
    const UNIT_I18N = {
        "kJ": { ru: "кДж", kk: "кДж", en: "kJ" },
        "kJ/kg": { ru: "кДж/кг", kk: "кДж/кг", en: "kJ/kg" },
        "cm": { ru: "см", kk: "см", en: "cm" },
        "km": { ru: "км", kk: "км", en: "km" },
        "km/s": { ru: "км/с", kk: "км/с", en: "km/s" },
        "m/s": { ru: "м/с", kk: "м/с", en: "m/s" },
        "m/s²": { ru: "м/с²", kk: "м/с²", en: "m/s²" },
        "m": { ru: "м", kk: "м", en: "m" },
        "s": { ru: "с", kk: "с", en: "s" },
        "A": { ru: "А", kk: "А", en: "A" },
        "V": { ru: "В", kk: "В", en: "V" },
        "W": { ru: "Вт", kk: "Вт", en: "W" },
        "N": { ru: "Н", kk: "Н", en: "N" },
        "kN": { ru: "кН", kk: "кН", en: "kN" },
        "eV": { ru: "эВ", kk: "эВ", en: "eV" },
        "Ω": { ru: "Ом", kk: "Ом", en: "Ω" },
        "pcs": { ru: "шт.", kk: "дана", en: "pcs" },
        "°C": { ru: "°C", kk: "°C", en: "°C" }
    };
    function unitText(unit) {
        const row = UNIT_I18N[unit];
        if (!row) return unit || "";
        return row[getLang()] || row.ru || unit;
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
        // Светлая «фотореалистичная» отрисовка с управлением мышью.
        // Если модуль не загружен — работаем по-старому (тёмная схема).
        if (window.PQSimLight && window.PQSimLight.has(lab.id)) {
            try {
                if (window.PQSimLight.render(ctx, w, h, lab, params, calc, tick)) return;
            } catch (e) {
                try { console.warn("PQSimLight fallback:", e); } catch (err) {}
            }
        }
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
        else if (id === "g8_hydraulic") {
            const fluidY = h * 0.72;
            // Соединительная трубка и жидкость
            ctx.fillStyle = "rgba(56, 189, 248, 0.22)";
            ctx.fillRect(w * 0.22, fluidY, w * 0.56, h * 0.16);
            ctx.strokeStyle = "rgba(125, 211, 252, 0.6)";
            ctx.lineWidth = 2;
            ctx.strokeRect(w * 0.22, fluidY, w * 0.56, h * 0.16);

            const smallX = w * 0.2, bigX = w * 0.72;
            // Малый цилиндр
            ctx.fillStyle = "rgba(56, 189, 248, 0.16)";
            ctx.fillRect(smallX, h * 0.36, w * 0.1, fluidY - h * 0.36 + h * 0.1);
            ctx.strokeStyle = "#38bdf8"; ctx.strokeRect(smallX, h * 0.36, w * 0.1, fluidY - h * 0.36 + h * 0.1);
            // Большой цилиндр
            ctx.fillStyle = "rgba(56, 189, 248, 0.16)";
            ctx.fillRect(bigX, h * 0.22, w * 0.2, fluidY - h * 0.22 + h * 0.1);
            ctx.strokeStyle = "#38bdf8"; ctx.strokeRect(bigX, h * 0.22, w * 0.2, fluidY - h * 0.22 + h * 0.1);

            // Поршни
            ctx.fillStyle = "#94a3b8";
            ctx.fillRect(smallX - 4, h * 0.36, w * 0.1 + 8, 10);
            ctx.fillRect(bigX - 4, h * 0.22, w * 0.2 + 8, 10);
            // Груз
            ctx.fillStyle = "#fbbf24";
            ctx.fillRect(bigX + w * 0.05, h * 0.1, w * 0.1, h * 0.08);
            ctx.fillStyle = "#fde68a";
            ctx.font = "bold 11px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("800 kg", bigX + w * 0.1, h * 0.075);

            // Стрелки сил
            const arrow = (x, y1, y2, color) => {
                ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(x, y2); ctx.lineTo(x - 6, y2 - 8); ctx.lineTo(x + 6, y2 - 8); ctx.closePath(); ctx.fill();
            };
            arrow(smallX + w * 0.05, h * 0.2, h * 0.35, "#f87171");
            arrow(bigX + w * 0.1, h * 0.19, h * 0.11, "#4ade80");

            ctx.textAlign = "left";
            ctx.font = "bold 12px system-ui, sans-serif";
            ctx.fillStyle = "#fca5a5";
            ctx.fillText(`F₁ = ${params.F1} Н`, 18, h * 0.18);
            ctx.fillStyle = "#86efac";
            ctx.fillText(`F₂ = ${(calc.F2 / 1000).toFixed(2)} кН`, w * 0.68, h * 0.08);
            ctx.fillStyle = "#7dd3fc";
            ctx.fillText(`S₁ = ${params.S1} см²`, smallX, h * 0.94);
            ctx.fillText(`S₂ = ${params.S2} см²`, bigX, h * 0.94);
            // Уровень жидкости
            ctx.fillStyle = "rgba(56, 189, 248, 0.35)";
            ctx.fillRect(w * 0.22, fluidY + 8, w * 0.56, h * 0.08);
        }
        else if (id === "g8_archimedes") {
            // Вода
            const waterTop = h * 0.3;
            const water = ctx.createLinearGradient(0, waterTop, 0, h);
            water.addColorStop(0, "rgba(14, 116, 144, 0.45)");
            water.addColorStop(1, "rgba(8, 47, 73, 0.85)");
            ctx.fillStyle = water;
            ctx.fillRect(0, waterTop, w, h - waterTop);
            ctx.strokeStyle = "rgba(103, 232, 249, 0.6)";
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(0, waterTop); ctx.lineTo(w, waterTop); ctx.stroke();
            for (let i = 0; i < 8; i++) {
                ctx.beginPath();
                ctx.moveTo(0, waterTop + 8 + i * 26);
                for (let x = 0; x < w; x += 20) ctx.lineTo(x, waterTop + 8 + i * 26 + Math.sin((x + tick * 2) / 40 + i) * 3);
                ctx.strokeStyle = "rgba(125, 211, 252, 0.12)";
                ctx.stroke();
            }

            // Батискаф
            const cx = w * 0.5, cy = h * 0.52;
            ctx.fillStyle = "#fbbf24";
            ctx.beginPath(); ctx.ellipse(cx, cy, 92, 40, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#0f172a";
            ctx.beginPath(); ctx.arc(cx - 40, cy - 4, 14, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.arc(cx - 5, cy - 4, 14, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#fbbf24";
            ctx.fillRect(cx - 6, cy - 62, 12, 24);
            ctx.beginPath(); ctx.arc(cx, cy - 64, 8, 0, Math.PI * 2); ctx.fill();

            // Силы
            const drawArrow = (x, y1, y2, color) => {
                ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 4;
                ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(x, y2); ctx.lineTo(x - 8, y2 + (y2 > y1 ? -12 : 12)); ctx.lineTo(x + 8, y2 + (y2 > y1 ? -12 : 12)); ctx.closePath(); ctx.fill();
            };
            drawArrow(cx + 118, cy + 30, cy - 30, "#4ade80");
            drawArrow(cx - 118, cy - 30, cy + 30, "#f87171");

            ctx.textAlign = "left";
            ctx.font = "bold 12px system-ui, sans-serif";
            ctx.fillStyle = "#86efac";
            ctx.fillText(`F_A = ${(calc.FA / 1000).toFixed(2)} кН`, cx + 130, cy - 34);
            ctx.fillStyle = "#fca5a5";
            ctx.fillText(`mg = ${(calc.W / 1000).toFixed(2)} кН`, cx - 230, cy + 44);
            ctx.fillStyle = "#7dd3fc";
            ctx.fillText(`ρ = ${calc.rho} кг/м³ · V = ${params.V} м³ · m = ${params.m} кг`, 16, h - 14);
            ctx.fillStyle = calc.pass ? "#4ade80" : "#f87171";
            ctx.font = "bold 13px system-ui, sans-serif";
            ctx.fillText(calc.pass ? "● НА ПЛАВУ" : "● ТОНЕТ", 16, h * 0.14);
        }
        else if (id === "g8_echo") {
            // Море
            ctx.fillStyle = "rgba(8, 47, 73, 0.65)";
            ctx.fillRect(0, h * 0.22, w, h * 0.7);
            // Дно
            ctx.fillStyle = "#0b2a1e";
            const depthPx = Math.min(h * 0.62, 40 + calc.h * 1.4);
            ctx.beginPath();
            ctx.moveTo(0, h);
            for (let x = 0; x <= w; x += 30) ctx.lineTo(x, h * 0.22 + depthPx + Math.sin(x / 60) * 6);
            ctx.lineTo(w, h); ctx.closePath(); ctx.fill();

            // Корабль
            const sx = w * 0.5;
            ctx.fillStyle = "#cbd5e1";
            ctx.beginPath();
            ctx.moveTo(sx - 70, h * 0.16);
            ctx.lineTo(sx + 80, h * 0.16);
            ctx.lineTo(sx + 58, h * 0.22);
            ctx.lineTo(sx - 50, h * 0.22);
            ctx.closePath(); ctx.fill();
            ctx.fillStyle = "#38bdf8";
            ctx.fillRect(sx - 24, h * 0.1, 48, h * 0.06);
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(sx - 12, h * 0.115, 8, 8);
            ctx.fillRect(sx + 4, h * 0.115, 8, 8);

            // Луч эхолота
            const bottomY = h * 0.22 + depthPx;
            ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(sx, h * 0.22); ctx.lineTo(sx - 40, bottomY); ctx.moveTo(sx, h * 0.22); ctx.lineTo(sx + 40, bottomY); ctx.stroke();
            // Волны импульса
            for (let i = 0; i < 4; i++) {
                const prog = ((tick * 0.012 + i * 0.25) % 1);
                const y = h * 0.24 + prog * (bottomY - h * 0.24);
                ctx.strokeStyle = `rgba(125, 211, 252, ${0.5 - prog * 0.4})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(sx, y, 10 + prog * 26, Math.PI * 0.15, Math.PI * 0.85);
                ctx.stroke();
            }
            // Отметка глубины
            ctx.strokeStyle = "#fbbf24";
            ctx.setLineDash([6, 6]);
            ctx.beginPath(); ctx.moveTo(w * 0.86, h * 0.22); ctx.lineTo(w * 0.86, bottomY); ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = "#fde68a";
            ctx.font = "bold 13px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`${calc.h.toFixed(1)} м`, w * 0.86, (h * 0.22 + bottomY) / 2);
            ctx.textAlign = "left";
            ctx.fillStyle = "#7dd3fc";
            ctx.font = "bold 12px system-ui, sans-serif";
            ctx.fillText(`t = ${params.t.toFixed(2)} с · v = ${calc.v} м/с`, 16, h - 16);
        }
        else if (id === "g9_coulomb") {
            const cx1 = w * 0.26, cx2 = w * 0.74, cy = h * 0.5;
            // Поле между зарядами
            for (let i = 0; i < 7; i++) {
                const yy = cy - 78 + i * 26;
                ctx.strokeStyle = "rgba(56, 189, 248, 0.18)";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(cx1 + 30, yy);
                ctx.bezierCurveTo(cx1 + 120, yy - 26, cx2 - 120, yy - 26, cx2 - 30, yy);
                ctx.stroke();
            }
            // Заряды
            const drawCharge = (x, label, r, color) => {
                const g = ctx.createRadialGradient(x, cy, 2, x, cy, r);
                g.addColorStop(0, "#fff");
                g.addColorStop(0.4, color);
                g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g;
                ctx.beginPath(); ctx.arc(x, cy, r, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = color; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.arc(x, cy, r * 0.62, 0, Math.PI * 2); ctx.stroke();
                ctx.fillStyle = "#0f172a";
                ctx.font = "bold 20px system-ui, sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("+", x, cy + 7);
                ctx.fillStyle = color;
                ctx.font = "bold 13px system-ui, sans-serif";
                ctx.fillText(label, x, cy + r + 22);
            };
            drawCharge(cx1, `q₁ = ${params.q1} мкКл`, 44, "#f472b6");
            drawCharge(cx2, `q₂ = ${params.q2} мкКл`, 44, "#38bdf8");

            // Силы
            const drawForce = (x1, x2, color) => {
                ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 4;
                ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x2, cy); ctx.stroke();
                const dir = x2 > x1 ? 1 : -1;
                ctx.beginPath(); ctx.moveTo(x2, cy); ctx.lineTo(x2 - 12 * dir, cy - 8); ctx.lineTo(x2 - 12 * dir, cy + 8); ctx.closePath(); ctx.fill();
            };
            // Одноимённые заряды отталкиваются: стрелки направлены наружу
            drawForce(cx1 - 62, cx1 - 122, "#fbbf24");
            drawForce(cx2 + 62, cx2 + 122, "#fbbf24");

            // Расстояние
            ctx.strokeStyle = "#94a3b8"; ctx.setLineDash([5, 5]);
            ctx.beginPath(); ctx.moveTo(cx1, h * 0.84); ctx.lineTo(cx2, h * 0.84); ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = "#cbd5e1";
            ctx.font = "bold 12px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`r = ${params.r} м`, (cx1 + cx2) / 2, h * 0.84 + 18);
            // Результат
            ctx.textAlign = "left";
            ctx.fillStyle = calc.pass ? "#4ade80" : "#f87171";
            ctx.font = "bold 15px system-ui, sans-serif";
            ctx.fillText(`F = ${calc.F.toFixed(2)} Н`, 16, 28);
            ctx.fillStyle = "#94a3b8";
            ctx.font = "12px system-ui, sans-serif";
            ctx.fillText(tr("рабочий диапазон 0,8–2,5 Н", "жұмыс диапазоны 0,8–2,5 Н", "working range 0.8–2.5 N"), 16, 48);
        }
        else if (id === "g9_decay") {
            const cols = 12, rows = 6;
            const total = cols * rows;
            const alive = Math.round(total * calc.frac);
            const cellW = 34, cellH = 24;
            const startX = (w - cols * cellW) / 2, startY = h * 0.22;
            for (let i = 0; i < total; i++) {
                const col = i % cols, row = Math.floor(i / cols);
                const x = startX + col * cellW + cellW / 2;
                const y = startY + row * cellH;
                const isAlive = i < alive;
                const pulse = 0.6 + Math.abs(Math.sin(tick * 0.05 + i)) * 0.4;
                if (isAlive) {
                    ctx.fillStyle = `rgba(74, 222, 128, ${pulse})`;
                    ctx.shadowColor = "#4ade80"; ctx.shadowBlur = 8;
                } else {
                    ctx.fillStyle = "rgba(148, 163, 184, 0.18)";
                    ctx.shadowBlur = 0;
                }
                ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
            }
            ctx.shadowBlur = 0;
            // Полоса доли
            const barY = h * 0.82;
            ctx.fillStyle = "rgba(148,163,184,0.2)";
            ctx.fillRect(w * 0.2, barY, w * 0.6, 12);
            ctx.fillStyle = calc.pass ? "#4ade80" : "#fbbf24";
            ctx.fillRect(w * 0.2, barY, w * 0.6 * calc.frac, 12);
            ctx.fillStyle = "#0f172a";
            ctx.font = "bold 10px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("10 %", w * 0.2 + w * 0.06, barY + 26);
            ctx.fillText("25 %", w * 0.2 + w * 0.15, barY + 26);

            ctx.textAlign = "left";
            ctx.fillStyle = "#e2e8f0";
            ctx.font = "bold 13px system-ui, sans-serif";
            ctx.fillText(`N = ${Math.round(calc.N)} / ${params.N0} · ${(calc.frac * 100).toFixed(1)} %`, 16, 26);
            ctx.fillStyle = "#7dd3fc";
            ctx.font = "12px system-ui, sans-serif";
            ctx.fillText(`T = ${params.T} сут · t = ${params.t} сут · ${calc.halves.toFixed(2)} T`, 16, 46);
            const status = calc.pass
                ? tr("● рабочий режим", "● жұмыс режимі", "● working mode")
                : tr("● вне рабочего режима", "● жұмыс режимінен тыс", "● outside working mode");
            ctx.fillStyle = calc.pass ? "#4ade80" : "#f87171";
            ctx.font = "bold 13px system-ui, sans-serif";
            ctx.fillText(status, 16, 68);
        }
        else if (id === "g9_induction") {
            const cx = w * 0.62, cy = h * 0.5;
            // Магнит
            ctx.fillStyle = "#ef4444";
            ctx.fillRect(w * 0.1, cy - 26, 54, 52);
            ctx.fillStyle = "#3b82f6";
            ctx.fillRect(w * 0.1, cy, 54, 26);
            ctx.fillStyle = "#fff";
            ctx.font = "bold 14px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("N", w * 0.1 + 27, cy - 6);
            ctx.fillText("S", w * 0.1 + 27, cy + 20);

            // Силовые линии
            for (let i = 0; i < 4; i++) {
                const y = cy - 20 + i * 13;
                ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(w * 0.1 + 54, y);
                ctx.bezierCurveTo(w * 0.32, y - 16, w * 0.42, y + 16, cx - 60, y);
                ctx.stroke();
            }
            // Катушка
            for (let i = 0; i < 7; i++) {
                ctx.strokeStyle = "#fbbf24";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.ellipse(cx - 30 + i * 16, cy, 12, 44, 0, 0, Math.PI * 2);
                ctx.stroke();
            }
            // Провода к гальванометру
            ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(cx - 30, cy + 44); ctx.lineTo(cx - 30, h * 0.86); ctx.lineTo(w * 0.9, h * 0.86); ctx.lineTo(w * 0.9, h * 0.62);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx + 66, cy + 44); ctx.lineTo(cx + 66, h * 0.72); ctx.lineTo(w * 0.9, h * 0.72);
            ctx.stroke();

            // Гальванометр
            ctx.fillStyle = "#0f172a";
            ctx.beginPath(); ctx.arc(w * 0.9, h * 0.44, 32, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.arc(w * 0.9, h * 0.44, 32, 0, Math.PI * 2); ctx.stroke();
            const angle = -Math.PI / 2 + Math.max(-0.9, Math.min(0.9, calc.emf / 30)) * 1.2;
            ctx.strokeStyle = "#f87171"; ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(w * 0.9, h * 0.44);
            ctx.lineTo(w * 0.9 + Math.cos(angle) * 24, h * 0.44 + Math.sin(angle) * 24);
            ctx.stroke();

            ctx.textAlign = "left";
            ctx.fillStyle = "#e2e8f0";
            ctx.font = "bold 14px system-ui, sans-serif";
            ctx.fillText(`ε = ${calc.emf.toFixed(2)} В`, 16, 28);
            ctx.fillStyle = "#7dd3fc";
            ctx.font = "12px system-ui, sans-serif";
            ctx.fillText(`B = ${params.B} Тл · S = ${params.S} см² · N = ${params.N}`, 16, 48);
            ctx.fillText(`Δt = ${params.dt} с`, 16, 66);
            ctx.fillStyle = calc.pass ? "#4ade80" : "#f87171";
            ctx.font = "bold 12px system-ui, sans-serif";
            ctx.fillText(calc.pass ? tr("● генератор в норме", "● генератор қалыпты", "● generator nominal") : tr("● недопустимое напряжение", "● рұқсат етілмеген кернеу", "● voltage out of range"), 16, 88);
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
                display: flex;
                flex-direction: column;
                gap: 18px;
            }
            .pq-sim89-topic {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .pq-sim89-topic-head {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;
                padding: 8px 12px;
                border-radius: 12px;
                background: rgba(56, 189, 248, 0.09);
                border: 1px solid rgba(56, 189, 248, 0.26);
            }
            .pq-sim89-topic-head b { font-size: 14px; color: #e0f2fe; letter-spacing: 0.01em; }
            .pq-sim89-topic-head span { font-size: 11.5px; font-weight: 800; color: #7dd3fc; }
            .pq-sim89-topic-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 12px;
            }
            .pq-sim89-card-icon { font-size: 22px; line-height: 1; }
            .pq-sim89-card-chapter { font-size: 11.5px; font-weight: 800; color: #7dd3fc; letter-spacing: 0.01em; }
            .pq-sim89-card-tip {
                padding: 7px 10px;
                border-radius: 10px;
                background: rgba(56, 189, 248, 0.1);
                border: 1px solid rgba(56, 189, 248, 0.22);
                color: #bae6fd !important;
                font-size: 11.5px !important;
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
            .pq-s89-head-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap; flex: none; }
            @media (max-width: 600px) { .pq-s89-head { flex-wrap: wrap; } .pq-s89-head-actions { width: 100%; justify-content: flex-start; } }
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
            .pq-s89-ctrl-dial { display: flex; flex-direction: column; }
            .pq-s89-dialrow { display: flex; align-items: center; gap: 12px; }
            .pq-s89-dialrow .pqw-knob-dial { width: 54px; height: 54px; }
            .pq-s89-dialhint { font-size: 11px; color: #94a3b8; line-height: 1.35; max-width: 120px; }
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

            // Подключаем кнопку «🔬 Лаборатория» в 8 и 9 классах.
            // Клонируем узел, чтобы снять обработчики LabGames из старых модулей, и вешаем единый роутер:
            // если у текущего уровня есть лабораторная мини-игра — открываем её, иначе — галерею симуляторов.
            const oldBtnLab = document.getElementById("btn-lab");
            if (oldBtnLab) {
                const btnLab = oldBtnLab.cloneNode(true);
                oldBtnLab.parentNode.replaceChild(btnLab, oldBtnLab);
                btnLab.style.display = "inline-flex";
                btnLab.onclick = (e) => {
                    e.preventDefault();
                    const configs = window.GRADE_LAB_GAMES_CONFIG || {};
                    const lvl = (typeof Game !== "undefined" && Game.currentLevel) || null;
                    const cfg = lvl != null ? configs[lvl] : null;
                    if (cfg && typeof LabGames !== "undefined" && typeof LabGames.show === "function") {
                        // Не открываем лабораторию поверх активного вопроса — сначала ответ.
                        if (typeof Game !== "undefined" && Game.isTaskActive) {
                            if (typeof showNotification === "function" && typeof I18n !== "undefined") {
                                showNotification(I18n.t("pauseUnavailable"), "warning");
                            }
                            return;
                        }
                        LabGames.show(cfg, typeof Game !== "undefined" ? Game : null);
                        return;
                    }
                    // Галерея живёт на экране выбора уровня: ставим игру на паузу и уходим туда.
                    if (typeof Game !== "undefined" && Game.running && !Game.paused) {
                        try { Game.togglePause(); } catch (e) {}
                    }
                    const showLevels = (typeof window.showLevelSelect === "function") ? window.showLevelSelect
                        : (typeof App !== "undefined" && App.showLevelSelect) ? App.showLevelSelect.bind(App) : null;
                    if (showLevels) showLevels();
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
            const countRu = `${labs.length} ${labsWord(labs.length)}`;
            if (t) t.textContent = grade === 8
                ? tr(`🔬 Лабораторный комплекс «Эквилибриум» (${countRu})`, `🔬 «Эквилибриум» зертханалық кешені (${labs.length} симулятор)`, `🔬 Equilibrium Interactive Lab Suite (${labs.length} Simulators)`)
                : tr(`🛰️ Испытательный полигон «Орбита-9» (${countRu})`, `🛰️ «Орбита-9» сынақ полигоны (${labs.length} симулятор)`, `🛰️ Orbita-9 Proving Grounds (${labs.length} Simulators)`);
            const topicCount = (TOPICS_BY_GRADE[grade] || []).length;
            if (s) s.textContent = tr(
                `${labs.length} лабораторий по ${topicCount} темам курса и дополнительный домашний опыт: управляй приборами, выводи установку в целевой режим и подтверждай расчёт (+30 XP и +5 💎 за лабораторные испытания).`,
                `${labs.length} зертхана курстың ${topicCount} тақырыбы бойынша және қосымша үй тәжірибесі: аспаптарды басқарып, есепті дәлелде (зертханалық сынақтар үшін +30 XP және +5 💎).`,
                `${labs.length} labs across ${topicCount} course topics plus an extra home experiment: adjust the apparatus and verify your calculation (+30 XP & +5 💎 for lab trials).`
            );
            if (p) p.textContent = tr(
                `🔑 Фрагменты ключа: ${doneCount} / ${labs.length}`,
                `🔑 Кілт фрагменттері: ${doneCount} / ${labs.length}`,
                `🔑 Key fragments: ${doneCount} / ${labs.length}`
            );
            if (cb) {
                const configs = window.GRADE_LAB_GAMES_CONFIG || {};
                const hasBench = Object.keys(configs).length > 0 && typeof LabGames !== "undefined";
                cb.style.display = hasBench ? "" : "none";
                cb.textContent = tr("📐 Тренажёр расчётов", "📐 Есептеу жаттықтырғышы", "📐 Calculation Bench");
                cb.onclick = () => {
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
            const topics = TOPICS_BY_GRADE[grade] || [];
            const ordered = labs.slice().sort((a, b) => paraStart(a) - paraStart(b));
            const used = new Set();
            const groups = topics.map(tp => {
                const list = ordered.filter(l => l.topic === tp.id);
                list.forEach(l => used.add(l.id));
                return { tp, list };
            }).filter(g => g.list.length);
            const rest = ordered.filter(l => !used.has(l.id));
            if (rest.length) groups.push({ tp: { range: "", title: { ru: "Дополнительные опыты", kk: "Қосымша тәжірибелер", en: "Extra Trials" } }, list: rest });
            grid.innerHTML = groups.map(g => `
                <div class="pq-sim89-topic">
                    <div class="pq-sim89-topic-head">
                        <b>${loc(g.tp.title)}</b>
                        <span>${g.tp.range ? g.tp.range + " · " : ""}${g.list.length} ${tr(labsWord(g.list.length), "симулятор", g.list.length === 1 ? "simulator" : "simulators")}</span>
                    </div>
                    <div class="pq-sim89-topic-grid">
                        ${g.list.map(l => {
                            const isDone = !!doneMap[l.id];
                            return `
                            <button type="button" class="pq-sim89-card ${isDone ? "done" : ""}" data-s89="${l.id}">
                                <span class="pq-sim89-card-icon">${l.icon}</span>
                                <span class="pq-sim89-card-chapter">${l.para} · ${loc(l.chapter)}</span>
                                <b>${loc(l.title)}</b>
                                <small>${isDone ? tr("Испытание пройдено — можно повторить опыт", "Сынақ өтілді — тәжірибені қайталауға болады", "Trial completed — you can repeat it") : loc(l.goal)}</small>
                                ${l.tip ? `<small class="pq-sim89-card-tip">💡 ${loc(l.tip)}</small>` : ""}
                                <em>${isDone ? tr("✓ Испытание пройдено", "✓ Сынақ өтілді", "✓ Trial Completed") : tr("▶ Открыть установку →", "▶ Қондырғыны ашу →", "▶ Launch Apparatus →")}</em>
                            </button>`;
                        }).join("")}
                    </div>
                </div>
            `).join("");
            grid.querySelectorAll("[data-s89]").forEach(btn => {
                btn.onclick = () => this.openLab(btn.getAttribute("data-s89"));
            });
            if (window.PQHomeExperiments) window.PQHomeExperiments.mountGallery();
            if (window.PQDiagramGames) window.PQDiagramGames.mountGallery();
            if (window.PQVisionExercise) window.PQVisionExercise.mountGallery();
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
                    <div class="pq-s89-head" style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
                        <div>
                            <div class="pq-sim89-kicker">${lab.icon} ${lab.para} · ${loc(lab.chapter)}</div>
                            <h2 style="margin:4px 0 6px;font-size:21px;">${loc(lab.title)}</h2>
                            <p style="margin:0;font-size:13.5px;color:#cbd5e1;line-height:1.45;">${loc(lab.story)}</p>
                        </div>
                        <div class="pq-s89-head-actions">
                            <button type="button" id="pq-s89-fullscreen"></button>
                            <button type="button" class="pq-td-x" id="pq-s89-close" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.08);border:1px solid rgba(148,163,184,0.3);color:#fff;cursor:pointer;">✕</button>
                        </div>
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
                            // Никаких ползунков: ученик сам поворачивает ручку прибора.
                            return `<div class="pq-s89-ctrl pq-s89-ctrl-dial">
                                <label><span>${loc(c.label)}</span><strong id="val-${c.id}">${this.params[c.id]} ${loc(c.unit)}</strong></label>
                                <div class="pq-s89-dialrow">
                                    ${window.PQWorkbench
                                        ? window.PQWorkbench.dialHtml(c.id, { min: c.min, max: c.max, step: c.step, label: loc(c.label) }, this.params[c.id])
                                        : `<div class="pqw-knob-dial" data-dial="${c.id}"></div>`}
                                    <div class="pq-s89-dialhint">${tr("Поверни ручку прибора", "Аспап тұтқасын бұра", "Turn the dial")}</div>
                                </div>
                                <input type="hidden" data-ctrl="${c.id}" value="${this.params[c.id]}">
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
                        <span style="font-weight:900;color:#fde68a;">${unitText(lab.unit)}</span>
                        <button type="button" class="btn btn-primary btn-small" id="pq-s89-check">
                            ${tr("✅ Подтвердить опыт", "✅ Тәжірибені растау", "✅ Verify Experiment")}
                        </button>
                    </div>
                </div>
            `;

            modal.classList.add("open");
            this.$("pq-s89-close").onclick = () => this.close();
            if (window.PQFullscreen) {
                window.PQFullscreen.bind(modal, this.$("pq-s89-fullscreen"), modal.querySelector(".pq-s89-dialog"));
            }

            // select остаются списками, а числовые параметры — вращающимися ручками
            modal.querySelectorAll("select[data-ctrl]").forEach(el => {
                const handler = () => {
                    const key = el.getAttribute("data-ctrl");
                    this.params[key] = el.value;
                    this.updateTelemetry();
                };
                el.addEventListener("input", handler);
                el.addEventListener("change", handler);
            });
            modal.querySelectorAll("[data-dial]").forEach(dial => {
                const key = dial.getAttribute("data-dial");
                const ctrlDef = lab.controls.find(c => c.id === key);
                if (!ctrlDef || !window.PQWorkbench) return;
                const hidden = modal.querySelector(`input[data-ctrl="${key}"]`);
                window.PQWorkbench.bindDial(
                    dial,
                    { min: ctrlDef.min, max: ctrlDef.max, step: ctrlDef.step, label: loc(ctrlDef.label) },
                    () => this.params[key],
                    (next) => {
                        this.params[key] = next;
                        if (hidden) hidden.value = String(next);
                        const vEl = this.$("val-" + key);
                        if (vEl && ctrlDef.unit) vEl.textContent = `${next} ${loc(ctrlDef.unit)}`;
                        this.updateTelemetry();
                    }
                );
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
            if (window.PQFullscreen) window.PQFullscreen.exit(m);
            if (m) m.classList.remove("open");
        }
    };

    // Экспорт для страницы галереи скриншотов и инструментов предпросмотра
    Simulators89._drawFrame = drawCanvasFrame;
    Simulators89._labs = LABS_BY_GRADE;
    window.Simulators89 = Simulators89;
})();
