/* ============================================================
   PQ STORY CAST — знакомство с героями и общий сюжет трилогии.
   Показывается ПЕРЕД комиксом в разделе «Лор и сюжет»,
   чтобы ученик сначала узнал персонажей, а потом читал главы.
   Полная поддержка RU / ҚАЗ / EN.
   ============================================================ */

(function () {
    "use strict";

    const CAST = [
        {
            icon: "🤖",
            color: "#38bdf8",
            grades: [7, 8, 9],
            name: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
            nameByGrade: {
                7: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" }
            },
            role: {
                ru: "ИИ-наставник серии",
                kk: "Серияның ЖИ тәлімгері",
                en: "AI mentor of the series"
            },
            bio: {
                ru: "Спутник-наставник, который ведёт тебя от купола Астерии до орбитального щита Земли. Объясняет законы коротко и сразу проверяет их задачей.",
                kk: "Астерия күмбезінен Жердің орбиталық қалқанына дейін жетелейтін серік-тәлімгер. Заңдарды қысқа түсіндіріп, бірден есеппен тексереді.",
                en: "The mentor satellite that guides you from Dome Asteria to Earth's orbital shield. Explains each law briefly and immediately tests it with a task."
            }
        },
        {
            icon: "👩‍🔬",
            color: "#22d3ee",
            grades: [7, 8, 9],
            name: { ru: "Алия", kk: "Әлия", en: "Aliya" },
            role: {
                ru: "Юный инженер Астерии",
                kk: "Астерияның жас инженері",
                en: "Young engineer of Asteria"
            },
            bio: {
                ru: "Собирает датчики купола и первой замечает метеорный рой Нокта. Считает быстрее всех и не боится перепроверять расчёт.",
                kk: "Күмбез датчиктерін жинап, Нокт метеор ағынын бірінші байқайды. Барлығынан жылдам есептейді және есебін қайта тексеруден қорықпайды.",
                en: "Builds the dome sensors and is the first to spot the Noct meteor stream. The fastest with numbers, and never afraid to double-check a calculation."
            }
        },
        {
            icon: "👨‍🔧",
            color: "#fbbf24",
            grades: [7, 8, 9],
            name: { ru: "Тимур", kk: "Тимур", en: "Timur" },
            role: {
                ru: "Юный инженер Астерии",
                kk: "Астерияның жас инженері",
                en: "Young engineer of Asteria"
            },
            bio: {
                ru: "Отвечает за приборы и измерения. Любит проверять формулу опытом: рычагом, блоком и наклонной плоскостью.",
                kk: "Аспаптар мен өлшеулерге жауап береді. Формуланы тәжірибемен тексеруді жақсы көреді: иінтірек, блок және көлбеу жазықтық.",
                en: "Handles the instruments and measurements. Prefers to test every formula with an experiment: a lever, a pulley, an inclined plane."
            }
        },
        {
            icon: "🛠️",
            color: "#34d399",
            grades: [9],
            name: { ru: "Инженер", kk: "Инженер", en: "Engineer" },
            role: {
                ru: "Инженер станции «Орбита-9»",
                kk: "«Орбита-9» станциясының инженері",
                en: "Engineer of station Orbita-9"
            },
            bio: {
                ru: "Держит реактор, связь и обшивку станции. Проверяет каждый расчёт перед запуском двигателей — на нём держатся жизни экипажа.",
                kk: "Станцияның реакторын, байланысын және қаптамасын ұстап тұрады. Қозғалтқыштарды іске қоспас бұрын әр есепті тексереді — экипаж өмірі соған байланысты.",
                en: "Keeps the reactor, comms and hull of the station running. Checks every calculation before the engines fire — the crew's lives depend on it."
            }
        },
        {
            icon: "🧑‍🚀",
            color: "#a78bfa",
            grades: [7, 8, 9],
            name: { ru: "Ты", kk: "Сен", en: "You" },
            role: {
                ru: "Пилот, а затем курсант-инженер",
                kk: "Ұшқыш, кейін курсант-инженер",
                en: "Pilot, later cadet-engineer"
            },
            roleByGrade: {
                7: { ru: "Пилот щита Астерии", kk: "Астерия қалқанының ұшқышы", en: "Pilot of the Asteria shield" },
                8: { ru: "Пилот щита Эквилибриума", kk: "Эквилибриум қалқанының ұшқышы", en: "Pilot of the Equilibrium shield" },
                9: { ru: "Курсант-пилот «Орбиты-9»", kk: "«Орбита-9» курсант-ұшқышы", en: "Cadet pilot of Orbita-9" }
            },
            bio: {
                ru: "Главный герой. В 7–8 классах держишь щит города, в 9 классе садишься за штурвал станции «Орбита-9».",
                kk: "Басты кейіпкер. 7–8 сыныптарда қала қалқанын ұстайсың, 9 сыныпта «Орбита-9» станциясының штурвалына отырасың.",
                en: "The main character. In Grades 7–8 you hold the city shield; in Grade 9 you take the controls of station Orbita-9."
            }
        }
    ];

    /* Общий сюжет — сплошной текст, без разбивки на пункты */
    const PLOT = {
        ru: [
            "2087 год. Над Землёй просыпается древняя орбитальная сеть «Орбита-9», но её щит повреждён. Осколки метеорного роя Нокта идут к планете, и остановить их можно только точным расчётом.",
            "Первым принимает удар город-купол Астерия. Здесь ты вместе с Алией, Тимуром и ИИ-наставником КВАНТ учишься измерять, считать плотность и давление, поднимать грузы рычагом и блоком. Дальше эстафету берёт мегаполис Эквилибриум — город, который держится на тепле и электричестве: теплота, ток, оптика.",
            "Финал — станция «Орбита-9». Щит Земли держится на законах Ньютона, волнах и ядерной энергии. КВАНТ ведёт тебя от первого измерения до последнего расчёта: каждое задание возвращает на место ещё один кусочек щита."
        ],
        kk: [
            "2087 жыл. Жердің үстінде ежелгі «Орбита-9» орбиталық желісі оянады, бірақ оның қалқаны зақымдалған. Нокт метеор ағынының сынықтары планетаға бет алады, оларды тек дәл есеп тоқтата алады.",
            "Бірінші соққыны Астерия күмбез-қаласы қабылдайды. Мұнда сен Әлиямен, Тимурмен және КВАНТ ЖИ тәлімгерімен бірге өлшеуді, тығыздық пен қысымды есептеуді, жүкті иінтірекпен және блокпен көтеруді үйренесің. Кейін эстафетаны жылу мен электрге сүйенетін Эквилибриум мегаполисі қабылдайды: жылулық, ток, оптика.",
            "Финал — «Орбита-9» станциясы. Жер қалқаны Ньютон заңдарына, толқындарға және ядролық энергияға сүйенеді. КВАНТ сені бірінші өлшеуден соңғы есепке дейін жетелейді: әр тапсырма қалқанның тағы бір бөлігін орнына қояды."
        ],
        en: [
            "Year 2087. Above Earth an ancient orbital network, Orbita-9, wakes up — but its shield is damaged. Fragments of the Noct meteor stream are heading for the planet, and only precise calculations can stop them.",
            "Dome-city Asteria takes the first hit. There, together with Aliya, Timur and the AI mentor KVANT, you learn to measure, to work out density and pressure, and to lift loads with a lever and a pulley. Then the relay passes to the megacity Equilibrium, a city that runs on heat and electricity: thermal physics, current, optics.",
            "The finale is station Orbita-9. Earth's shield rests on Newton's laws, waves and nuclear energy. KVANT leads you from the very first measurement to the last calculation: every task puts one more piece of the shield back in place."
        ]
    };

    function lang() {
        // I18n объявлен как const на верхнем уровне — это не свойство window,
        // поэтому проверяем и лексическую переменную, и data-lang на <html>.
        try {
            if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
        } catch (e) {}
        try {
            if (window.I18n && window.I18n.currentLang) return window.I18n.currentLang;
        } catch (e) {}
        const attr = document.documentElement.getAttribute("data-lang");
        return attr === "en" || attr === "kk" ? attr : "ru";
    }

    function pick(value) {
        if (!value) return "";
        if (typeof value === "string") return value;
        const l = lang();
        return value[l] || value.ru || value.en || value.kk || "";
    }

    function esc(str) {
        return String(str == null ? "" : str)
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    const T = {
        ru: { castTitle: "Герои серии", plotTitle: "Общий сюжет трилогии", jump: "⬇ Комикс по главам" },
        kk: { castTitle: "Серия кейіпкерлері", plotTitle: "Трилогияның жалпы сюжеті", jump: "⬇ Тараулар бойынша комикс" },
        en: { castTitle: "Characters of the series", plotTitle: "Story of the trilogy", jump: "⬇ Comic by chapter" }
    };

    function t(key) {
        const d = T[lang()] || T.ru;
        return d[key];
    }

    /* Сплошной текст: абзацы идут как есть, без дробления на пункты и карточки */
    function plotHtml() {
        const paragraphs = PLOT[lang()] || PLOT.ru;
        return paragraphs.map((p) => `<p class="pq-story-plot-p">${esc(p)}</p>`).join("");
    }

    function currentGrade() {
        const g = Number(window.CURRENT_GRADE);
        return [7, 8, 9].includes(g) ? g : 8;
    }

    function castHtml() {
        const grade = currentGrade();
        return CAST.filter((c) => !c.grades || c.grades.includes(grade)).map((c) => {
            const name = (c.nameByGrade && c.nameByGrade[grade]) || c.name;
            const role = (c.roleByGrade && c.roleByGrade[grade]) || c.role;
            return `
            <article class="pq-story-cast-card" style="--cast-color:${c.color}">
                <div class="pq-story-cast-icon">${c.icon}</div>
                <div class="pq-story-cast-body">
                    <div class="pq-story-cast-name">${esc(pick(name))}</div>
                    <div class="pq-story-cast-role">${esc(pick(role))}</div>
                    <p class="pq-story-cast-bio">${esc(pick(c.bio))}</p>
                </div>
            </article>`;
        }).join("");
    }

    const PQStoryCast = {
        CAST: CAST,
        PLOT: PLOT,

        /* Блок знакомства: герои, затем общий сюжет сплошным текстом */
        introHtml() {
            return `
                <section class="pq-story-intro">
                    <h3 class="pq-story-h3">${esc(t("castTitle"))}</h3>
                    <div class="pq-story-cast">${castHtml()}</div>
                    <h3 class="pq-story-h3">${esc(t("plotTitle"))}</h3>
                    <div class="pq-story-plot">${plotHtml()}</div>
                    <button type="button" class="pq-story-jump" data-pq-jump="comic">${esc(t("jump"))}</button>
                </section>`;
        }
    };

    window.PQStoryCast = PQStoryCast;
})();
