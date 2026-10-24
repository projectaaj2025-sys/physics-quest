/* ===== ЕДИНЫЙ ВИЗУАЛЬНЫЙ КОМИКС-ДНЕВНИК ТРИЛОГИИ «ФИЗИКА-КВЕСТ» (7–9 КЛАССЫ) =====
   Связывает сюжет трёх игр через ИИ-спутника «КВАНТ»:
   • Часть I (7 класс): «Энергетический щит Астерии»
   • Часть II (8 класс): «Хроники щита Эквилибриума»
   • Часть III (9 класс): «Орбита-9: Щит Земли»
   Полная поддержка 3 языков: RU / ҚАЗ / EN */

(function () {
    const TRILOGY_UI = {
        ru: {
            modalTitle: "📖 Комикс-дневник трилогии «Физика-Квест»",
            modalSub: "Единая история ИИ «Квант» и юных инженеров: от купола Астерии до орбитального щита Земли",
            part7: "🛡 7 кл. · Астерия",
            part8: "⚡ 8 кл. · Эквилибриум",
            part9: "🛰 9 кл. · Орбита-9",
            prev: "← Предыдущая",
            next: "Следующая →",
            close: "🚀 Вернуться",
            physKey: "⚛️ Физический ключ главы:",
            levelsRange: "Миссии #{0}–#{1}",
            diaryBtn: "Комикс трилогии",
            nextHint: "Намёк на следующее приключение:",
            storyBtn: "📖 Комикс трилогии",
            storyHint: "Сюжет всех трёх игр в одном комиксе"
        },
        kk: {
            modalTitle: "📖 «Физика-Квест» трилогиясының комикс-күнделігі",
            modalSub: "«Квант» ЖИ мен жас инженерлердің біртұтас тарихы: Астерия күмбезінен Жердің орбиталық қалқанына дейін",
            part7: "🛡 7-сын. · Астерия",
            part8: "⚡ 8-сын. · Эквилибриум",
            part9: "🛰 9-сын. · Орбита-9",
            prev: "← Алдыңғы",
            next: "Келесі →",
            close: "🚀 Оралу",
            physKey: "⚛️ Тараудың физикалық кілті:",
            levelsRange: "Миссиялар #{0}–#{1}",
            diaryBtn: "Трилогия комиксі",
            nextHint: "Келесі оқиғаға нұсқау:",
            storyBtn: "📖 Трилогия комиксі",
            storyHint: "Үш ойынның сюжеті бір комиксте",
            lockedTitle: "Тарау әзірге жабық",
            lockedText: "Комикс #{0}-миссияға жеткенде ашылады. Әзірге өткен тараулар қолжетімді.",
            lockedHint: "#{0}-миссиядан ашылады"
        },
        en: {
            modalTitle: "📖 Physics Quest Trilogy Comic Diary",
            modalSub: "One continuous story of AI KVANT and young engineers: from Dome Asteria to Earth's Orbital Shield",
            part7: "🛡 Gr. 7 · Asteria",
            part8: "⚡ Gr. 8 · Equilibrium",
            part9: "🛰 Gr. 9 · Orbita-9",
            prev: "← Previous",
            next: "Next →",
            close: "🚀 Continue",
            physKey: "⚛️ Physics Key of the Chapter:",
            levelsRange: "Missions #{0}–#{1}",
            diaryBtn: "Trilogy Comic",
            nextHint: "A hint at the next adventure:",
            storyBtn: "📖 Trilogy comic",
            storyHint: "The story of all three games in one comic",
            lockedTitle: "This chapter is still locked",
            lockedText: "The comic unlocks when you reach mission #{0}. Chapters you have already passed are available.",
            lockedHint: "Unlocks from mission #{0}"
        }
    };

    const TRILOGY_BOOKS = {
        7: [
            {
                ep: 1, from: 1, to: 6, img: "./assets/comics/g7-ep1.jpg",
                formula: "Δx = |x − x₀| · СИ: м, кг, с",
                title: {
                    ru: "Глава 1. Звездопад над Астерией",
                    kk: "1-тарау. Астерия үстіндегі жұлдызды жауын",
                    en: "Chapter 1. Starfall Over Asteria"
                },
                date: {
                    ru: "Астерия · Купол №1 · §1–§5",
                    kk: "Астерия · №1 күмбез · §1–§5",
                    en: "Asteria · Dome #1 · §1–§5"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
                        color: "#38bdf8",
                        text: {
                            ru: "Внимание, курсанты Алия и Тимур! Метеорный поток Нокта вошёл в атмосферу. Датчики купола Астерии сбиты — без точных измерений в системе СИ щит ослепнет!",
                            kk: "Назар аударыңдар, курсанттар Әлия мен Тимур! Нокт метеор ағыны атмосфераға кірді. Астерия күмбезінің датчиктері ауытқыды — ХБЖ дәл өлшемдерінсіз қалқан соқыр қалады!",
                            en: "Attention, cadets Aliya and Timur! The Noct meteor stream has entered the atmosphere. Asteria's dome sensors are off-calibration — without accurate SI measurements, the shield is blind!"
                        }
                    },
                    {
                        who: { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
                        color: "#f472b6",
                        text: {
                            ru: "Вижу цену деления оптических линеек и погрешность таймеров! Переводим километры и минуты в метры и секунды.",
                            kk: "Оптикалық сызғыштардың бөлік құнын және таймерлердің қателігін көріп тұрмын! Километр мен минутты метр мен секундқа айналдырамыз.",
                            en: "I've got the scale divisions and timer uncertainties! Converting kilometers and minutes into meters and seconds now."
                        }
                    },
                    {
                        who: { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
                        color: "#fbbf24",
                        text: {
                            ru: "Калибровка завершена! Первый контур Астерии видит каждую цель.",
                            kk: "Калибрлеу аяқталды! Астерияның бірінші контуры әр нысананы көріп тұр.",
                            en: "Calibration complete! Asteria's primary perimeter locks onto every target."
                        }
                    }
                ],
                note: {
                    ru: "Точность измерений и единицы СИ — фундамент любой инженерной защиты.",
                    kk: "Өлшеу дәлдігі мен ХБЖ бірліктері — кез келген инженерлік қорғаныстың іргетасы.",
                    en: "Measurement accuracy and SI units are the foundation of all engineering defense."
                }
            },
            {
                ep: 2, from: 7, to: 14, img: "./assets/comics/g7-ep2.jpg",
                formula: "v = s / t · ρ = m / V",
                title: {
                    ru: "Глава 2. Код вещества и траекторий",
                    kk: "2-тарау. Зат пен траектория коды",
                    en: "Chapter 2. Code of Matter & Trajectories"
                },
                date: {
                    ru: "Лаборатория сплавов Астерии · §6–§13",
                    kk: "Астерия қорытпалар зертханасы · §6–§13",
                    en: "Asteria Alloy Lab · §6–§13"
                },
                panels: [
                    {
                        who: { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
                        color: "#fbbf24",
                        text: {
                            ru: "Осколки летят с разной скоростью! Нам нужно рассчитать точку перехвата по графикам пути s(t) и подобрать лёгкий, но прочный сплав для обшивки дронов.",
                            kk: "Сынықтар әртүрлі жылдамдықпен ұшып келеді! s(t) жол графиктері бойынша тосқауыл нүктесін есептеп, дрондарға жеңіл әрі берік қорытпа таңдау керек.",
                            en: "Fragments are coming in at varying speeds! We must plot the intercept from s(t) graphs and select a light yet strong alloy for our drones."
                        }
                    },
                    {
                        who: { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
                        color: "#f472b6",
                        text: {
                            ru: "Измерим объём образца мензуркой, а массу на электронных весах: ρ = 2700 кг/м³ — это чистый авиационный дюралюминий!",
                            kk: "Үлгінің көлемін мензуркамен, ал массасын таразымен өлшейік: ρ = 2700 кг/м³ — бұл таза авиациялық дюралюминий!",
                            en: "Measuring volume by water displacement and mass on the digital scale: ρ = 2700 kg/m³ — aerospace duralumin!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
                        color: "#38bdf8",
                        text: {
                            ru: "Блестяще! Дроны-перехватчики вышли на расчётную скорость v = s / t.",
                            kk: "Тамаша! Тосқауылшы дрондар есептік v = s / t жылдамдыққа шықты.",
                            en: "Brilliant! Interceptor drones have reached target velocity v = s / t."
                        }
                    }
                ],
                note: {
                    ru: "Зная плотность ρ = m/V и графики движения, инженер управляет и материалом, и временем.",
                    kk: "ρ = m/V тығыздығы мен қозғалыс графиктерін біле отырып, инженер материалды да, уақытты да басқарады.",
                    en: "Knowing density ρ = m/V and motion graphs lets an engineer master both matter and time."
                }
            },
            {
                ep: 3, from: 15, to: 21, img: "./assets/comics/g7-ep3.jpg",
                formula: "F_тяж = mg · F_упр = kx · F_тр = μN",
                title: {
                    ru: "Глава 3. Рейд сквозь бурю хребта",
                    kk: "3-тарау. Жота дауылы арқылы рейд",
                    en: "Chapter 3. Raid Across the Storm Ridge"
                },
                date: {
                    ru: "Горный тракт Астерии · §14–§20",
                    kk: "Астерия тау жолы · §14–§20",
                    en: "Asteria Mountain Pass · §14–§20"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
                        color: "#38bdf8",
                        text: {
                            ru: "Внешний ретранслятор на ледяном перевале обесточен! Вездеход скользит на подъёме, а порывы ветра гнут мачту антенны.",
                            kk: "Мұзды асудағы сыртқы ретранслятор өшіп қалды! Жол талғамайтын көлік өрде тайғанап барады, ал жел антенна діңгегін майыстыруда.",
                            en: "The outer relay on the icy pass lost power! Our rover is slipping on the climb while wind gusts bend the antenna mast."
                        }
                    },
                    {
                        who: { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
                        color: "#fbbf24",
                        text: {
                            ru: "Увеличиваем коэффициент трения протекторов μ и настраиваем жёсткость пружин подвески по закону Гука F = kx!",
                            kk: "Протекторлардың үйкеліс коэффициентін μ арттырып, аспа серіппелерінің қатаңдығын Гук заңы F = kx бойынша баптаймыз!",
                            en: "Increasing tire tread friction μ and tuning suspension stiffness via Hooke's law F = kx!"
                        }
                    },
                    {
                        who: { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
                        color: "#f472b6",
                        text: {
                            ru: "Равнодействующая всех сил направлена точно вдоль склона. Вездеход взял вершину!",
                            kk: "Барлық күштердің теңәрекетті күші дәл беткей бойымен бағытталды. Көлік шыңға шықты!",
                            en: "The net force points straight up the slope. The rover has conquered the summit!"
                        }
                    }
                ],
                note: {
                    ru: "Сила упругости защищает от ударов, а сила трения даёт сцепление даже на льду.",
                    kk: "Серпімділік күші соққыдан қорғайды, ал үйкеліс күші мұзда да ілінісуді қамтамасыз етеді.",
                    en: "Elastic force absorbs impacts, while friction provides traction even on ice."
                }
            },
            {
                ep: 4, from: 22, to: 30, img: "./assets/comics/g7-ep4.jpg",
                formula: "p = ρgh · F₁/S₁ = F₂/S₂ · F_А = ρ_ж g V",
                title: {
                    ru: "Глава 4. Глубинный шлюз Паскаля",
                    kk: "4-тарау. Паскальдың терең шлюзі",
                    en: "Chapter 4. Pascal's Deepwater Lock"
                },
                date: {
                    ru: "Подводный резервуар охлаждения · §21–§29",
                    kk: "Суасты салқындату резервуары · §21–§29",
                    en: "Subsea Cooling Reservoir · §21–§29"
                },
                panels: [
                    {
                        who: { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
                        color: "#f472b6",
                        text: {
                            ru: "На глубине 40 метров заклинило затвор охлаждения щита! Гидростатическое давление p = ρgh почти 400 кПа — вручную створку не сдвинуть.",
                            kk: "40 метр тереңдікте қалқанды салқындату қақпасы тұрып қалды! Гидростатикалық қысым p = ρgh шамамен 400 кПа — қолмен қозғалту мүмкін емес.",
                            en: "At 40 meters depth, the shield's cooling gate is jammed! Hydrostatic pressure p = ρgh is nearly 400 kPa — impossible to move manually."
                        }
                    },
                    {
                        who: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
                        color: "#38bdf8",
                        text: {
                            ru: "Используйте гидравлический пресс! Отношение площадей поршней S₂ / S₁ = 50 даст пятидесятикратный выигрыш в силе по закону Паскаля.",
                            kk: "Гидравликалық престі қолданыңдар! Поршень аудандарының қатынасы S₂ / S₁ = 50 Паскаль заңы бойынша күштен 50 есе ұтыс береді.",
                            en: "Use the hydraulic press! A piston area ratio S₂ / S₁ = 50 multiplies our force fiftyfold by Pascal's law."
                        }
                    },
                    {
                        who: { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
                        color: "#fbbf24",
                        text: {
                            ru: "Продуваем балласт батискафа — выталкивающая сила Архимеда F_А = ρgV мягко поднимает нас к поверхности!",
                            kk: "Батискаф балластын үрлейміз — Архимедтің ығыстырушы күші F_А = ρgV бізді су бетіне жұмсақ көтереді!",
                            en: "Blowing bathysphere ballast — Archimedes' buoyant force F_A = ρgV lifts us smoothly to the surface!"
                        }
                    }
                ],
                note: {
                    ru: "Законы Паскаля и Архимеда позволяют управлять тоннами воды и поднимать корабли из глубин.",
                    kk: "Паскаль мен Архимед заңдары тонналаған суды басқаруға және кемелерді тереңдіктен көтеруге мүмкіндік береді.",
                    en: "Pascal's and Archimedes' laws let humans command tons of water and raise vessels from the deep."
                }
            },
            {
                ep: 5, from: 31, to: 37, img: "./assets/comics/g7-ep5.jpg",
                formula: "A = Fs · N = A/t · F₁l₁ = F₂l₂ · η = A_п/A_з",
                title: {
                    ru: "Глава 5. Рычаг Титанов и ядро энергии",
                    kk: "5-тарау. Титандар иінтірегі және энергия ядросы",
                    en: "Chapter 5. Lever of Titans & Energy Core"
                },
                date: {
                    ru: "Центральный шпиль Астерии · §30–§36",
                    kk: "Астерия орталық шпилі · §30–§36",
                    en: "Asteria Central Spire · §30–§36"
                },
                panels: [
                    {
                        who: { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
                        color: "#fbbf24",
                        text: {
                            ru: "Главный кристалл щита весит 12 кН, а мощность подъёмника ограничена! Как поднять его в гнездо шпиля до удара главной кометы?",
                            kk: "Қалқанның бас кристалының салмағы 12 кН, ал көтергіштің қуаты шектеулі! Басты комета соққысына дейін оны шпиль ұясына қалай көтереміз?",
                            en: "The main shield crystal weighs 12 kN and hoist power is limited! How do we lift it into the spire socket before the main comet strikes?"
                        }
                    },
                    {
                        who: { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
                        color: "#f472b6",
                        text: {
                            ru: "Соберём полиспаст из подвижных блоков и уравновесим кран правилом моментов M₁ = M₂! Смазка подшипников поднимет КПД η до 92%.",
                            kk: "Жылжымалы блоктардан полиспаст жинап, кранды моменттер ережесімен M₁ = M₂ теңестірейік! Мойынтіректерді майлау ПӘК-ті η = 92%-ға дейін арттырады.",
                            en: "Let's rig movable pulleys and balance the crane arm with torque equilibrium M₁ = M₂! Lubricating the bearings boosts efficiency η to 92%."
                        }
                    },
                    {
                        who: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
                        color: "#38bdf8",
                        text: {
                            ru: "Потенциальная энергия переходит в энергию поля! Золотое правило механики сработало безупречно.",
                            kk: "Потенциалдық энергия өріс энергиясына айналды! Механиканың алтын ережесі мінсіз жұмыс істеді.",
                            en: "Potential energy converts into shield-field energy! The golden rule of mechanics worked flawlessly."
                        }
                    }
                ],
                note: {
                    ru: "Простые механизмы не дают выигрыша в работе, но позволяют малым усилием совершать великие дела.",
                    kk: "Жай механизмдер жұмыстан ұтыс бермейді, бірақ аз күшпен үлкен істер атқаруға мүмкіндік береді.",
                    en: "Simple machines don't multiply work, yet let small forces accomplish monumental feats."
                }
            },
            {
                ep: 6, from: 38, to: 50, img: "./assets/comics/g7-ep6.jpg",
                formula: "E_мех = E_к + E_п = const",
                title: {
                    ru: "Глава 6. Щит Астерии и луч на Север",
                    kk: "6-тарау. Астерия қалқаны және Солтүстікке сәуле",
                    en: "Chapter 6. Shield of Asteria & Northern Beam"
                },
                date: {
                    ru: "Финал I части · §37–§39 и Лаб. №1–10",
                    kk: "I бөлім финалы · §37–§39 және №1–10 зерт.",
                    en: "Part I Finale · §37–§39 & Labs #1–10"
                },
                panels: [
                    {
                        who: { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
                        color: "#f472b6",
                        text: {
                            ru: "Изумрудно-бирюзовый купол раскрылся над всей Астерией! Метеоры сгорают по касательной, не причиняя вреда городу.",
                            kk: "Зүбәржат-көгілдір күмбез бүкіл Астерияның үстінде ашылды! Метеорлар қалаға зиян тигізбей, жанама бойымен жанып кетуде.",
                            en: "The turquoise dome has bloomed across all of Asteria! Meteors burn harmlessly along the tangent."
                        }
                    },
                    {
                        who: { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
                        color: "#38bdf8",
                        text: {
                            ru: "Я перехватил тревожный радиосигнал с севера! Мегаполис Эквилибриум теряет тепло и электроэнергию — им нужна моя обновлённая матрица.",
                            kk: "Мен солтүстіктен дабылды радиосигнал қабылдадым! Эквилибриум мегаполисі жылу мен электр қуатын жоғалтуда — оларға менің жаңартылған матрицам қажет.",
                            en: "I just intercepted a distress signal from the north! Metropolis Equilibrium is losing heat and electric power — they need my upgraded matrix."
                        }
                    },
                    {
                        who: { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
                        color: "#fbbf24",
                        text: {
                            ru: "Астерия в безопасности. Вперёд, в 8 класс — зажжём тепловой и электрический щит Эквилибриума!",
                            kk: "Астерия қауіпсіз. Алға, 8-сыныпқа — Эквилибриумның жылу және электр қалқанын жағайық!",
                            en: "Asteria is safe. Onward to Grade 8 — let's ignite Equilibrium's thermal and electric shield!"
                        }
                    }
                ],
                note: {
                    ru: "Конец Части I. Сигнал Астерии передаёт ядро ИИ «Квант» в северный мегаполис Эквилибриум (8 класс).",
                    kk: "I бөлімнің соңы. Астерия сигналы «Квант» ЖИ ядросын солтүстік Эквилибриум мегаполисіне (8-сынып) жеткізеді.",
                    en: "End of Part I. Asteria's beacon transmits AI KVANT to the northern metropolis Equilibrium (Grade 8)."
                }
            }
        ],

        8: [
            {
                ep: 1, from: 1, to: 10, img: "./assets/comics/g8-ep1.jpg",
                formula: "Q = cm(t₂ − t₁) · ΣQ = 0",
                title: {
                    ru: "Глава 1. Замёрзшее сердце Эквилибриума",
                    kk: "1-тарау. Эквилибриумның мұздаған жүрегі",
                    en: "Chapter 1. Frozen Heart of Equilibrium"
                },
                date: {
                    ru: "Мегаполис Эквилибриум · §1–§9",
                    kk: "Эквилибриум мегаполисі · §1–§9",
                    en: "Metropolis Equilibrium · §1–§9"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Мы прибыли из Астерии вовремя! Температура в жилых секторах Эквилибриума падает к нулю — теплообменники центрального реактора разбалансированы.",
                            kk: "Біз Астериядан дер кезінде жеттік! Эквилибриумның тұрғын секторларындағы температура нөлге түсуде — орталық реактордың жылу алмастырғыштары теңгерімсіз.",
                            en: "We arrived from Asteria just in time! Temperatures in Equilibrium's districts are dropping toward zero — the central heat exchangers are unbalanced."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Водяной контур обладает максимальной удельной теплоёмкостью c = 4200 Дж/(кг·°C)! Рассчитываем уравнение теплового баланса Q_отд = Q_пол.",
                            kk: "Су контуры ең жоғары меншікті жылусыйымдылыққа ие: c = 4200 Дж/(кг·°C)! Жылу балансы теңдеуін есептейміз: Q_бер = Q_ал.",
                            en: "Water has an immense specific heat capacity c = 4200 J/(kg·°C)! Solving the thermal balance equation Q_lost = Q_gained."
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Конвекция и теплопроводность в норме — золотистое тепло возвращается в кварталы города!",
                            kk: "Конвекция мен жылуөткізгіштік қалыпқа келді — алтын жылу қала орамдарына оралуда!",
                            en: "Convection and conduction stabilized — golden warmth flows back into the city districts!"
                        }
                    }
                ],
                note: {
                    ru: "Высокая удельная теплоёмкость воды делает её идеальным хранителем тепла для целых городов.",
                    kk: "Судың жоғары меншікті жылусыйымдылығы оны тұтас қалалар үшін мінсіз жылу сақтаушы етеді.",
                    en: "Water's high specific heat capacity makes it the ideal thermal reservoir for entire cities."
                }
            },
            {
                ep: 2, from: 11, to: 18, img: "./assets/comics/g8-ep2.jpg",
                formula: "Q_пл = λm · Q_пар = Lm · η = (Q₁ − Q₂)/Q₁",
                title: {
                    ru: "Глава 2. Паровой пульс турбин",
                    kk: "2-тарау. Турбиналардың бу импульсі",
                    en: "Chapter 2. Steam Pulse of the Turbines"
                },
                date: {
                    ru: "Геотермальный зал · §10–§18",
                    kk: "Геотермалдық зал · §10–§18",
                    en: "Geothermal Hall · §10–§18"
                },
                panels: [
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Магистрали скованы льдом! Смотри на график: пока весь лёд при 0 °C не получит теплоту плавления Q = λm, температура не растёт.",
                            kk: "Магистральдарды мұз басқан! Графикке қара: 0 °C-тағы барлық мұз Q = λm балқу жылуын алмайынша, температура көтерілмейді.",
                            en: "Main conduits are frozen solid! Watch the graph: until all 0 °C ice absorbs latent heat Q = λm, temperature stays flat."
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Лёд растоплен, перегретый пар вращает лопатки турбин! По первому закону термодинамики ΔU = Q − A пар совершает мощную механическую работу.",
                            kk: "Мұз еріді, қызған бу турбина қалақтарын айналдыруда! Термодинамиканың бірінші заңы ΔU = Q − A бойынша бу қуатты жұмыс атқарады.",
                            en: "Ice melted — superheated steam spins the turbine blades! By the first law ΔU = Q − A, internal energy drives mechanical work."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "КПД тепловых турбин вышел на расчётный максимум — генераторы готовы дать ток!",
                            kk: "Жылу турбиналарының ПӘК-і есептік максимумға шықты — генераторлар ток беруге дайын!",
                            en: "Thermal turbine efficiency is at peak — the generators are ready to energize the grid!"
                        }
                    }
                ],
                note: {
                    ru: "Фазовые переходы и термодинамика превращают тепловую энергию недр в движение генераторов.",
                    kk: "Фазалық ауысулар мен термодинамика жер қойнауының жылуын генераторлар қозғалысына айналдырады.",
                    en: "Phase transitions and thermodynamics turn thermal energy into generator motion."
                }
            },
            {
                ep: 3, from: 19, to: 31, img: "./assets/comics/g8-ep3.jpg",
                formula: "I = U / R · P = UI · Q = I²Rt",
                title: {
                    ru: "Глава 3. Пробуждение энергосети",
                    kk: "3-тарау. Энергия желісінің оянуы",
                    en: "Chapter 3. Awakening the Power Grid"
                },
                date: {
                    ru: "Центральная подстанция · §19–§30",
                    kk: "Орталық қосалқы станция · §19–§30",
                    en: "Central Substation · §19–§30"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Осторожно! При последовательном включении кварталов обрыв одной линии гасит весь сектор, а при перегрузке кабели раскаляются по закону Джоуля–Ленца Q = I²Rt!",
                            kk: "Абайла! Орамдарды тізбектей қосқанда бір желі үзілсе бүкіл сектор өшеді, ал асқын жүктемеде кабельдер Джоуль–Ленц заңымен Q = I²Rt қызады!",
                            en: "Careful! In series wiring a single break blackouts the whole sector, while overload overheats cables via Joule–Lenz heating Q = I²Rt!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Переключаем районы параллельно, выставляем реостаты по закону Ома I = U/R и ставим плавкие предохранители на 20 А!",
                            kk: "Аудандарды параллель қосып, реостаттарды Ом заңымен I = U/R реттейміз және 20 А балқымалы сақтандырғыштар қоямыз!",
                            en: "Switching districts to parallel branches, balancing rheostats via Ohm's law I = U/R, and setting 20 A fuses!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Небоскрёбы Эквилибриума вспыхнули один за другим! Электрический контур стабилен.",
                            kk: "Эквилибриумның зәулім ғимараттары бірінен соң бірі жарқырады! Электр контуры тұрақты.",
                            en: "Equilibrium's skyscrapers light up row by row! The electrical grid is rock-steady."
                        }
                    }
                ],
                note: {
                    ru: "Параллельное соединение и закон Ома обеспечивают независимое и безопасное питание каждого дома.",
                    kk: "Параллель жалғау мен Ом заңы әр үйді тәуелсіз әрі қауіпсіз электрмен қамтамасыз етеді.",
                    en: "Parallel circuits and Ohm's law guarantee independent, safe power for every building."
                }
            },
            {
                ep: 4, from: 32, to: 37, img: "./assets/comics/g8-ep4.jpg",
                formula: "F_А = BIL sinα · Φ = BS cosα",
                title: {
                    ru: "Глава 4. Магнитный мост над каньоном",
                    kk: "4-тарау. Шатқал үстіндегі магниттік көпір",
                    en: "Chapter 4. Magnetic Bridge Over the Canyon"
                },
                date: {
                    ru: "Магнитная переправа · §31–§36",
                    kk: "Магниттік өткел · §31–§36",
                    en: "Maglev Crossing · §31–§36"
                },
                panels: [
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Лавина снесла опоры старого моста, а нам нужно доставить линзы для орбитального маяка на пик обсерватории!",
                            kk: "Көшкін ескі көпірдің тіректерін құлатты, ал біз орбиталық маяктың линзаларын обсерватория шыңына жеткізуіміз керек!",
                            en: "An avalanche swept away the old bridge piers, and we must haul the beacon lenses up to the observatory peak!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Подаём ток в медные соленоиды с железными сердечниками! Сила Ампера F = BIL удерживает грузовую платформу прямо в воздухе над пропастью.",
                            kk: "Темір өзекшесі бар мыс соленоидтарға ток береміз! Ампер күші F = BIL жүк платформасын шыңырау үстінде ауада ұстап тұр.",
                            en: "Energizing iron-core copper solenoids! Ampere's force F = BIL levitates the cargo pod right across the chasm."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "А при торможении платформы электромагнитная индукция Фарадея возвращает энергию обратно в батареи!",
                            kk: "Ал платформа тежелгенде Фарадейдің электромагниттік индукциясы энергияны батареяларға қайтарады!",
                            en: "And during braking, Faraday's electromagnetic induction regenerates energy right back into the batteries!"
                        }
                    }
                ],
                note: {
                    ru: "Единство электричества и магнетизма лежит в основе электродвигателей, генераторов и поездов маглев.",
                    kk: "Электр мен магнетизмнің бірлігі электр қозғалтқыштарының, генераторлардың және маглев пойыздарының негізінде жатыр.",
                    en: "The unity of electricity and magnetism powers electric motors, generators, and maglev trains."
                }
            },
            {
                ep: 5, from: 38, to: 44, img: "./assets/comics/g8-ep5.jpg",
                formula: "n₁ sinα = n₂ sinβ · 1/F = 1/d + 1/f",
                title: {
                    ru: "Глава 5. Хрустальная обсерватория света",
                    kk: "5-тарау. Хрусталь жарық обсерваториясы",
                    en: "Chapter 5. Crystal Observatory of Light"
                },
                date: {
                    ru: "Пик Эквилибриума · §37–§43",
                    kk: "Эквилибриум шыңы · §37–§43",
                    en: "Equilibrium Peak · §37–§43"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Чтобы разбудить спящую станцию «Орбита-9» в космосе, нужно сфокусировать оптический луч сквозь плотные грозовые облака без рассеяния!",
                            kk: "Ғарыштағы ұйықтап жатқан «Орбита-9» станциясын ояту үшін оптикалық сәулені қалың бұлттар арқылы шашыратпай фокустау керек!",
                            en: "To wake the dormant Orbita-9 station in space, we must collimate a laser beam straight through dense storm clouds!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Помещаем источник точно в главный фокус собирающей линзы (d = F) и учитываем преломление Снеллиуса n₁ sinα = n₂ sinβ в кварцевой призме!",
                            kk: "Жарық көзін жинағыш линзаның бас фокусына (d = F) дәл орналастырып, кварц призмадағы Снеллиус сыну заңын n₁ sinα = n₂ sinβ ескереміз!",
                            en: "Placing the emitter right at the converging lens focal point (d = F) and aligning the quartz prism via Snell's law n₁ sinα = n₂ sinβ!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Ослепительный параллельный столб света пробил облака и ушёл в стратосферу!",
                            kk: "Көз қарықтырар параллель жарық бағаны бұлттарды тесіп өтіп, стратосфераға кетті!",
                            en: "A dazzling parallel column of light pierces the storm clouds into the stratosphere!"
                        }
                    }
                ],
                note: {
                    ru: "Источник в фокусе собирающей линзы даёт идеально параллельный пучок прожектора и лазерного маяка.",
                    kk: "Жинағыш линзаның фокусындағы көз прожектор мен лазерлік маяктың мінсіз параллель шоғын береді.",
                    en: "A light source placed at a converging lens's focus produces a perfectly parallel searchlight beam."
                }
            },
            {
                ep: 6, from: 45, to: 55, img: "./assets/comics/g8-ep6.jpg",
                formula: "Q = cmΔt · I = U/R · 1/F = 1/d + 1/f",
                title: {
                    ru: "Глава 6. Ответ с орбиты",
                    kk: "6-тарау. Орбитадан келген жауап",
                    en: "Chapter 6. Answer from Orbit"
                },
                date: {
                    ru: "Финал II части · Лаб. №1–11",
                    kk: "II бөлім финалы · №1–11 зерт.",
                    en: "Part II Finale · Labs #1–11"
                },
                panels: [
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Двойной тепло-электромагнитный купол Эквилибриума замкнулся! Астерия на юге и Эквилибриум на севере теперь работают в единой сети.",
                            kk: "Эквилибриумның қос жылу-электромагниттік күмбезі тұйықталды! Оңтүстіктегі Астерия мен солтүстіктегі Эквилибриум енді бірыңғай желіде.",
                            en: "Equilibrium's dual thermal-electromagnetic dome is sealed! Asteria in the south and Equilibrium in the north now share one united grid."
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Есть отклик! На высоте 420 км проснулась кольцевая станция «Орбита-9». К Земле приближается главный пояс астероидов Персеиды-Х!",
                            kk: "Жауап келді! 420 км биіктікте «Орбита-9» сақиналы станциясы оянды. Жерге Персеида-Х негізгі астероидтар белдеуі жақындап келеді!",
                            en: "Response received! At 420 km altitude, ring station Orbita-9 has awakened. The main Perseid-X asteroid swarm is heading for Earth!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#fbbf24",
                        text: {
                            ru: "Готовим орбитальный шаттл! В 9 классе битва за планету продолжится в открытом космосе.",
                            kk: "Орбиталық шаттлды дайындаймыз! 9-сыныпта планета үшін шайқас ашық ғарышта жалғасады.",
                            en: "Prepping the orbital shuttle! In Grade 9, the battle for our planet ascends into deep space."
                        }
                    }
                ],
                note: {
                    ru: "Конец Части II. Лазерный маяк Эквилибриума пробуждает орбитальную станцию «Орбита-9» (9 класс).",
                    kk: "II бөлімнің соңы. Эквилибриумның лазерлік маягы «Орбита-9» станциясын (9-сынып) оятады.",
                    en: "End of Part II. Equilibrium's optical beacon awakens orbital station Orbita-9 (Grade 9)."
                }
            }
        ],

        9: [
                        {
                ep: 1, from: 1, to: 1, img: "./assets/comics/g9-ch01.jpg",
                formula: "v = s / t · правила ТБ = допуск к полёту",
                title: {
                    ru: "Глава 1. Допуск к полётам",
                    kk: "1-тарау. Ұшуға жолдама",
                    en: "Chapter 1. Flight Clearance"
                },
                date: {
                    ru: "Стыковочный шлюз «Орбиты-9» · ТБ и §1",
                    kk: "«Орбита-9» түйісу шлюзі · ҚТ және §1",
                    en: "Orbita-9 airlock · Safety & §1"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Курсант, прежде чем сесть за штурвал — допуск. Станция просыпается после пятидесяти лет сна, и первым делом мы проверяем, что ты знаешь правила безопасности.",
                            kk: "Курсант, штурвалға отырмас бұрын — жолдама. Станция елу жылдық ұйқыдан оянып жатыр, ең алдымен қауіпсіздік ережелерін білетініңді тексереміз.",
                            en: "Cadet, before you take the controls you need clearance. The station is waking after fifty years, and first we check that you know the safety rules."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Ремни затянуты, шлем герметичен, приборы проверены. Полёт начинается не с двигателя, а с дисциплины!",
                            kk: "Белдік тартылды, дулыға герметикалық, аспаптар тексерілді. Ұшу қозғалтқыштан емес, тәртіптен басталады!",
                            en: "Harness tight, helmet sealed, instruments checked. A flight starts with discipline, not with the engine!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Допуск принят. Шлюз открыт — впереди лётная школа, где ты научишься рассчитывать движение метеоров.",
                            kk: "Жолдама қабылданды. Шлюз ашық — алда метеорлардың қозғалысын есептеуді үйренетін ұшқыштар мектебі.",
                            en: "Clearance accepted. The airlock is open — ahead lies flight school, where you will learn to calculate meteor motion."
                        }
                    }
                ],
                note: {
                    ru: "Безопасность — это первая формула лётчика: цена ошибки здесь измеряется не баллами, а жизнью экипажа.",
                    kk: "Қауіпсіздік — ұшқыштың бірінші формуласы: мұнда қатенің бағасы баллмен емес, экипаж өмірімен өлшенеді.",
                    en: "Safety is a pilot's first formula: here a mistake costs not points but the crew's lives."
                }
            },
            {
                ep: 2, from: 2, to: 8, img: "./assets/comics/g9-ch02.jpg",
                formula: "x = x₀ + v₀ₓt + aₓt²/2 · vₓ = v₀ₓ + aₓt",
                title: {
                    ru: "Глава 2. Пробуждение «Орбиты-9»",
                    kk: "2-тарау. «Орбита-9» станциясының оянуы",
                    en: "Chapter 2. Awakening of Orbita-9"
                },
                date: {
                    ru: "Стыковочный узел, 420 км над Землёй · ТБ и §1–§7",
                    kk: "Түйісу торабы, Жерден 420 км биіктікте · ҚТ және §1–§7",
                    en: "Docking Hub, 420 km Above Earth · Safety & §1–§7"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Пятьдесят лет станция спала на орбите, пока лазерный луч из Эквилибриума не перезапустил мои реакторы! Добро пожаловать на борт, старший курсант.",
                            kk: "Эквилибриумнан келген лазер сәулесі реакторларымды қайта іске қосқанша, станция елу жыл орбитада ұйықтап тұрды! Бортқа қош келдің, аға курсант.",
                            en: "For fifty years this station slept in orbit until Equilibrium's laser beam restarted my reactors! Welcome aboard, Senior Cadet."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "В космосе нет верха и низа — раскладываем векторы скорости и ускорения по осям Ox и Oy для точной стыковки!",
                            kk: "Ғарышта жоғары мен төмен жоқ — дәл түйісу үшін жылдамдық пен үдеу векторларын Ox және Oy осьтеріне жіктейміз!",
                            en: "In space there's no up or down — resolving velocity and acceleration vectors along Ox and Oy for precision docking!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Шлюз герметичен. Корабли «Беркут» и «Тулпар» в ангаре ждут твоего вылета!",
                            kk: "Шлюз герметикалық жабылды. Ангардағы «Бүркіт» пен «Тұлпар» кемелері ұшуыңды күтіп тұр!",
                            en: "Airlock sealed. Starships Berkut and Tulpar in the hangar await your launch!"
                        }
                    }
                ],
                note: {
                    ru: "Векторная кинематика — язык навигации каждого космического корабля.",
                    kk: "Векторлық кинематика — әрбір ғарыш кемесінің навигация тілі.",
                    en: "Vector kinematics is the navigation language of every spacecraft."
                }
            },
                        {
                ep: 3, from: 9, to: 13, img: "./assets/comics/g9-ch03.jpg",
                formula: "M = F · d · sin α · звёздная карта = навигация",
                title: {
                    ru: "Глава 3. Звёздная карта: астрономия",
                    kk: "3-тарау. Жұлдыз картасы: астрономия",
                    en: "Chapter 3. Star Chart: Astronomy"
                },
                date: {
                    ru: "Обсерватория «Орбиты-9» · §9–§13",
                    kk: "«Орбита-9» обсерваториясы · §9–§13",
                    en: "Orbita-9 observatory · §9–§13"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Угроза пришла из глубины космоса. Чтобы найти её источник, научись читать звёздную карту: параллакс, годичное движение Земли, масштабы расстояний.",
                            kk: "Қауіп ғарыш тереңдігінен келді. Оның көзін табу үшін жұлдыз картасын оқуды үйрен: параллакс, Жердің жылдық қозғалысы, қашықтықтар масштабы.",
                            en: "The threat came from deep space. To find its source, learn to read the star chart: parallax, Earth's yearly motion, distance scales."
                        }
                    },
                    {
                        who: { ru: "ИНЖЕНЕР", kk: "ИНЖЕНЕР", en: "ENGINEER" },
                        color: "#f59e0b",
                        text: {
                            ru: "Смотри: одна и та же звезда смещается по небу на полградуса за полгода. Значит, до неё — парсеки, а не километры!",
                            kk: "Қара: бір жұлдыз жарты жылда аспанда жарты градусқа ығысады. Демек, оған дейін километр емес, парсектер!",
                            en: "Look: the same star shifts half a degree across the sky in six months. So it lies parsecs away, not kilometres!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Курс проложен по трём опорным звёздам. Метеорный поток Персеиды-Х идёт точно из созвездия Кассиопеи!",
                            kk: "Курс үш тірек жұлдыз бойынша салынды. Персеида-Х метеор ағыны дәл Кассиопея шоқжұлдызынан келеді!",
                            en: "Course plotted by three reference stars. The Perseid-X stream comes exactly from the constellation Cassiopeia!"
                        }
                    }
                ],
                note: {
                    ru: "Астрономия — это навигация: измерив угол и параллакс, мы находим расстояние до объекта, который ещё не видим.",
                    kk: "Астрономия — навигация: бұрыш пен параллаксты өлшеп, әлі көрмеген нысанға дейінгі қашықтықты табамыз.",
                    en: "Astronomy is navigation: by measuring an angle and a parallax we find the distance to an object we cannot yet see."
                }
            },
            {
                ep: 4, from: 14, to: 20, img: "./assets/comics/g9-ch04.jpg",
                formula: "F = Gm₁m₂/R² · v₁ = √(GM/R) ≈ 7,9 км/с",
                title: {
                    ru: "Глава 4. Крылья «Беркута» и гравитация",
                    kk: "4-тарау. «Бүркіт» қанаттары және гравитация",
                    en: "Chapter 4. Wings of Berkut & Gravity"
                },
                date: {
                    ru: "Околоземная орбита · §8–§19",
                    kk: "Жер маңы орбитасы · §8–§19",
                    en: "Low Earth Orbit · §8–§19"
                },
                panels: [
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Ориентируемся по Темірқазық (Полярной звезде) и выводим «Беркут» на круговую орбиту перехвата с первой космической скоростью!",
                            kk: "Темірқазық жұлдызы бойынша бағдар алып, «Бүркітті» бірінші ғарыштық жылдамдықпен дөңгелек тосқауыл орбитасына шығарамыз!",
                            en: "Orienting by Polaris (Temirqazyq) and inserting Berkut into circular intercept orbit at first cosmic velocity!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Помни: на орбите центростремительное ускорение a = v²/r создаётся исключительно силой всемирного тяготения Ньютона F = GMm/r²!",
                            kk: "Есіңде болсын: орбитада центрге тартқыш үдеуді a = v²/r тек Ньютонның бүкіләлемдік тартылыс күші F = GMm/r² тудырады!",
                            en: "Remember: in orbit, centripetal acceleration a = v²/r is supplied purely by Newton's universal gravitation F = GMm/r²!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Невесомость на борту штатная — авангард роя Персеиды-Х прямо по курсу!",
                            kk: "Борттағы салмақсыздық қалыпты — Персеида-Х ағынының алдыңғы легі дәл алдымызда!",
                            en: "Zero-G nominal aboard — the vanguard of the Perseid-X swarm is dead ahead!"
                        }
                    }
                ],
                note: {
                    ru: "Законы Ньютона и всемирного тяготения объединяют падение яблока и полёт орбитальных станций.",
                    kk: "Ньютон заңдары мен бүкіләлемдік тартылыс алманың құлауы мен орбиталық станциялардың ұшуын біріктіреді.",
                    en: "Newton's laws and universal gravitation unite a falling apple with orbiting space stations."
                }
            },
            {
                ep: 5, from: 21, to: 24, img: "./assets/comics/g9-ch05.jpg",
                formula: "m₁v⃗₁ + m₂v⃗₂ = const · E_к = mv²/2",
                title: {
                    ru: "Глава 5. Импульсный щит против болида",
                    kk: "5-тарау. Болидке қарсы импульстік қалқан",
                    en: "Chapter 5. Momentum Shield Against the Bolide"
                },
                date: {
                    ru: "Внешний периметр · §20–§23",
                    kk: "Сыртқы периметр · §20–§23",
                    en: "Outer Perimeter · §20–§23"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Тяжёлый железо-никелевый болид идёт прямо на купол Астерии! Взрывать его нельзя — осколки накроют континент.",
                            kk: "Ауыр темір-никель болиді тікелей Астерия күмбезіне бет алды! Оны жаруға болмайды — сынықтары құрлықты жауып қалады.",
                            en: "A massive iron-nickel bolide is heading straight for Asteria's dome! Shattering it would rain debris across the continent."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Применим боковой кинетический ударник! По закону сохранения импульса Δp⃗ = F⃗Δt даже малое отклонение скорости уведёт болид мимо Земли.",
                            kk: "Бүйірлік кинетикалық соққышты қолданайық! Импульстің сақталу заңы Δp⃗ = F⃗Δt бойынша жылдамдықтың аз ауытқуының өзі болидті Жерден алып кетеді.",
                            en: "Firing lateral kinetic impactor! By conservation of momentum Δp⃗ = F⃗Δt, even a slight velocity deflection steers the bolide clear of Earth."
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Траектория изменена на 4,2 градуса — болид уходит в безопасный пролёт!",
                            kk: "Траектория 4,2 градусқа өзгерді — болид қауіпсіз кеңістікке өтіп барады!",
                            en: "Trajectory deflected by 4.2 degrees — the bolide passes safely into deep space!"
                        }
                    }
                ],
                note: {
                    ru: "Реактивное движение и реальная планетарная защита Земли (миссия DART) работают на законе сохранения импульса.",
                    kk: "Реактивті қозғалыс пен Жердің нақты планеталық қорғанысы (DART миссиясы) импульстің сақталу заңына негізделген.",
                    en: "Rocket propulsion and real planetary defense (like NASA's DART mission) rely on momentum conservation."
                }
            },
            {
                ep: 6, from: 25, to: 32, img: "./assets/comics/g9-ch06.jpg",
                formula: "T = 2π√(l/g) · λ = v / ν · c = 3·10⁸ м/с",
                title: {
                    ru: "Глава 6. Резонансная волна",
                    kk: "6-тарау. Резонанстық толқын",
                    en: "Chapter 6. Resonance Wave"
                },
                date: {
                    ru: "Волновой излучатель «Орбиты-9» · §24–§35",
                    kk: "«Орбита-9» толқындық сәулелендіргіші · §24–§35",
                    en: "Orbita-9 Wave Array · §24–§35"
                },
                panels: [
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Магнитная буря вызвала опасные вибрации солнечных панелей станции, а рой мелких метеоров приближается сотнями!",
                            kk: "Магниттік дауыл станцияның күн панельдерінде қауіпті діріл тудырды, ал ұсақ метеорлар жүздеп жақындауда!",
                            en: "The magnetic storm triggered dangerous vibrations in the station's solar wings while hundreds of micro-meteors close in!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Гасим паразитный резонанс демпферами, а излучатели настраиваем точно на собственную частоту ν ледяных ядер роя: λ = c / ν!",
                            kk: "Зиянды резонансты демпферлермен өшіріп, сәулелендіргіштерді мұз ядроларының меншікті жиілігіне ν дәл баптаймыз: λ = c / ν!",
                            en: "Damping structural resonance on the wings while tuning our emitters to the ice-cores' natural frequency ν: λ = c / ν!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Резонансный импульс распылил ледяное облако в безвредную пыль!",
                            kk: "Резонанстық импульс мұз бұлтын зиянсыз шаңға айналдырды!",
                            en: "The resonance pulse vaporized the ice swarm into harmless cosmic dust!"
                        }
                    }
                ],
                note: {
                    ru: "Резонанс может разрушать мосты, но в руках физика становится точнейшим инструментом связи и защиты.",
                    kk: "Резонанс көпірлерді бұзуы мүмкін, бірақ физиктің қолында байланыс пен қорғаныстың ең дәл құралына айналады.",
                    en: "Resonance can shatter bridges, yet in a physicist's hands becomes a precision tool for communication and defense."
                }
            },
                        {
                ep: 7, from: 33, to: 37, img: "./assets/comics/g9-ch07.jpg",
                formula: "hν = A + E_к · E = mc² · закон радиоактивного распада",
                title: {
                    ru: "Глава 7. Атомный рубеж",
                    kk: "7-тарау. Атомдық шеп",
                    en: "Chapter 7. Atomic Frontier"
                },
                date: {
                    ru: "Радиационный пояс · §33–§37",
                    kk: "Радиация белдеуі · §33–§37",
                    en: "Radiation belt · §33–§37"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Впереди радиационный пояс. Кванты, фотоэффект, рентген и радиоактивность — вот что нам нужно понять, чтобы пройти его без потерь.",
                            kk: "Алда радиация белдеуі. Кванттар, фотоэффект, рентген және радиоактивтілік — оны шығынсыз өту үшін осыны түсінуіміз керек.",
                            en: "A radiation belt lies ahead. Quanta, the photoelectric effect, X-rays and radioactivity are what we must understand to cross it safely."
                        }
                    },
                    {
                        who: { ru: "ИНЖЕНЕР", kk: "ИНЖЕНЕР", en: "ENGINEER" },
                        color: "#f59e0b",
                        text: {
                            ru: "Защита из свинца и водорода гасит частицы: тяжёлые ядра берут энергию на себя, а лёгкие замедляют нейтроны.",
                            kk: "Қорғасын мен сутектен жасалған қорғаныс бөлшектерді сөндіреді: ауыр ядролар энергияны өзіне алады, жеңілдері нейтрондарды баяулатады.",
                            en: "Lead-and-hydrogen shielding absorbs particles: heavy nuclei take the energy while light ones slow the neutrons."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Фотоэлементы на обшивке ловят каждый квант света. Энергии хватает, чтобы щит держался на минимуме.",
                            kk: "Қаптамадағы фотоэлементтер әрбір жарық квантын ұстайды. Қалқанды ең төменгі деңгейде ұстауға энергия жетеді.",
                            en: "The photovoltaic cells on the hull catch every light quantum. It is enough energy to keep the shield at minimum."
                        }
                    }
                ],
                note: {
                    ru: "Энергия кванта E = hν связывает свет и атом: от неё зависит, вырвет ли фотон электрон из металла.",
                    kk: "Квант энергиясы E = hν жарық пен атомды байланыстырады: фотон металдан электронды жұлып алатыны осыған байланысты.",
                    en: "The quantum energy E = hν links light and the atom: it decides whether a photon frees an electron from a metal."
                }
            },
            {
                ep: 8, from: 38, to: 42, img: "./assets/comics/g9-ch08.jpg",
                formula: "hν = A_вых + E_к · E = Δmc² · N = N₀·2^(−t/T)",
                title: {
                    ru: "Глава 8. Квантовое сердце станции",
                    kk: "8-тарау. Станцияның кванттық жүрегі",
                    en: "Chapter 8. Quantum Heart of the Station"
                },
                date: {
                    ru: "Квантово-ядерный реактор · §36–§43",
                    kk: "Кванттық-ядролық реактор · §36–§43",
                    en: "Quantum-Nuclear Core · §36–§43"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Для раскрытия глобального планетарного щита нужна максимальная мощность! Фотоэлементы улавливают ультрафиолет Солнца по уравнению Эйнштейна hν = A_вых + mv²/2.",
                            kk: "Ғаламдық планеталық қалқанды ашу үшін максималды қуат қажет! Фотоэлементтер Күн ультракүлгінін Эйнштейн теңдеуімен hν = A_шығ + mv²/2 ұстайды.",
                            en: "Deploying the global planetary shield demands peak power! Solar photocells harvest UV photons via Einstein's equation hν = W + mv²/2."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Контролируем стержни замедлителя и период полураспада изотопов: дефект массы Δm даёт колоссальный выход энергии E = Δmc²!",
                            kk: "Баяулатқыш өзектерді және изотоптардың жартылай ыдырау периодын бақылаймыз: Δm масса ақауы орасан зор E = Δmc² энергия береді!",
                            en: "Regulating moderator rods and isotope half-life: mass defect Δm unlocks tremendous clean energy E = Δmc²!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Синее черенковское свечение стабильно. Мощность реактора — 100%!",
                            kk: "Көгілдір Черенков жарқылы тұрақты. Реактор қуаты — 100%!",
                            en: "Cherenkov blue glow steady. Reactor output at 100%!"
                        }
                    }
                ],
                note: {
                    ru: "Квантовая и ядерная физика открыли человечеству энергию звёзд и солнечных батарей.",
                    kk: "Кванттық және ядролық физика адамзатқа жұлдыздар мен күн батареяларының энергиясын ашты.",
                    en: "Quantum and nuclear physics unlocked the power of stars and solar cells for humanity."
                }
            },
            {
                ep: 9, from: 43, to: 44, img: "./assets/comics/g9-ch09.jpg",
                formula: "Астерия (7) → Эквилибриум (8) → Орбита-9 (9)",
                title: {
                    ru: "Глава 9. Единый щит Земли",
                    kk: "9-тарау. Жердің біртұтас қалқаны",
                    en: "Chapter 9. United Shield of Earth"
                },
                date: {
                    ru: "Гранд-финал трилогии · Лаб. №1–4",
                    kk: "Трилогияның гранд-финалы · №1–4 зерт.",
                    en: "Trilogy Grand Finale · Labs #1–4"
                },
                panels: [
                    {
                        who: { ru: "АЛИЯ И ТИМУР", kk: "ӘЛИЯ МЕН ТИМУР", en: "ALIYA & TIMUR" },
                        color: "#f472b6",
                        text: {
                            ru: "На связи Астерия и Эквилибриум! Наземные купола синхронизированы с вашим орбитальным кольцом!",
                            kk: "Байланыста Астерия мен Эквилибриум! Жерүсті күмбездері сіздердің орбиталық сақиналарыңызбен синхрондалды!",
                            en: "Asteria and Equilibrium online! Surface domes are synchronized with your orbital ring!"
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Механика, теплота, электричество, свет и энергия атома слились в единую решётку вокруг всей планеты. Персеиды-Х отражены!",
                            kk: "Механика, жылу, электр, жарық және атом энергиясы бүкіл планета айналасында біртұтас торға бірікті. Персеида-Х тойтарылды!",
                            en: "Mechanics, heat, electricity, light, and atomic energy have merged into one planetary lattice. Perseid-X is repelled!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Поздравляю, Инженер! Ты прошёл путь от первых измерений в 7 классе до защиты планеты в 9 классе. Знание физики — твой непобедимый щит!",
                            kk: "Құттықтаймын, Инженер! Сен 7-сыныптағы алғашқы өлшеулерден 9-сыныпта планетаны қорғауға дейінгі жолдан өттің. Физика білімі — сенің жеңілмес қалқаның!",
                            en: "Congratulations, Engineer! You rose from your first measurements in Grade 7 to defending Earth in Grade 9. Physics is your invincible shield!"
                        }
                    }
                ],
                note: {
                    ru: "Трилогия завершена! Все три звена планетарной защиты — Астерия, Эквилибриум и Орбита-9 — объединены твоими знаниями.",
                    kk: "Трилогия аяқталды! Планеталық қорғаныстың үш буыны — Астерия, Эквилибриум және Орбита-9 — сенің біліміңмен біріктірілді.",
                    en: "Trilogy complete! All three links of planetary defense — Asteria, Equilibrium, and Orbita-9 — stand united through your knowledge."
                }
            },
            {
                ep: 10, from: 45, to: 48, img: "./assets/comics/g9-ch10.jpg",
                formula: "T = 2π√(l/g) · λ = v/ν · ε = NΔΦ/Δt · F = kq₁q₂/r²",
                title: {
                    ru: "Глава 10. Космолаборатория",
                    kk: "10-тарау. Ғарыш зертханасы",
                    en: "Chapter 10. Space Laboratory"
                },
                date: {
                    ru: "Научный отсек «Орбиты-9» · Лаб. №1–4",
                    kk: "«Орбита-9» ғылыми бөлімі · №1–4 зерт.",
                    en: "Orbita-9 science bay · Labs #1–4"
                },
                panels: [
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Практика — критерий истины! На борту открыта космолаборатория: маятник, волновая камера, фотоэлемент и катушка индуктивности.",
                            kk: "Тәжірибе — ақиқат өлшемі! Бортта ғарыш зертханасы ашылды: маятник, толқын камерасы, фотоэлемент және индуктивтік орама.",
                            en: "Practice is the test of truth! A space lab is open aboard: a pendulum, a wave tank, a photocell and an induction coil."
                        }
                    },
                    {
                        who: { ru: "ПИЛОТ", kk: "ҰШҚЫШ", en: "PILOT" },
                        color: "#34d399",
                        text: {
                            ru: "Ставлю маятник на 0,5 метра — и осциллограф показывает период 1,42 секунды. Ровно как в формуле!",
                            kk: "Маятникті 0,5 метрге қоямын — осциллограф 1,42 секунд период көрсетеді. Дәл формуладағыдай!",
                            en: "I set the pendulum to 0.5 metres and the oscilloscope shows a period of 1.42 seconds — exactly as the formula says!"
                        }
                    },
                    {
                        who: { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
                        color: "#38bdf8",
                        text: {
                            ru: "Каждая лаборатория — это +30 XP и +5 алмазов. Собери все четыре — и станция получит полный научный архив.",
                            kk: "Әр зертхана — +30 XP және +5 алмаз. Төртеуін де жина — станция толық ғылыми мұрағат алады.",
                            en: "Each lab earns +30 XP and +5 diamonds. Complete all four and the station gains a full science archive."
                        }
                    }
                ],
                note: {
                    ru: "Лаборатория превращает формулы в опыт: измеряем период, длину волны, ЭДС и заряд — и сравниваем с расчётом.",
                    kk: "Зертхана формулаларды тәжірибеге айналдырады: период, толқын ұзындығы, ЭҚК және зарядты өлшеп, есеппен салыстырамыз.",
                    en: "The lab turns formulas into experiment: we measure period, wavelength, EMF and charge, then compare with the calculation."
                }
            }
        ]
    };

    // Намёки на продолжение в конце комикса каждого класса (связка трилогии)
    const TEASERS = {
        7: {
            ru: "В финале Астерии КВАНТ ловит сигнал с замёрзшей станции «Эквилибриум»: её реактор остыл, теплосеть молчит, а город ждёт новый экипаж. Продолжение — в 8 классе: тепловые и электрические явления.",
            kk: "Астерия финалында КВАНТ мұздаған «Эквилибриум» станциясынан сигнал қабылдайды: реакторы суып, жылу желісі үнсіз, қала жаңа экипажды күтеді. Жалғасы — 8 сыныпта: жылу және электр құбылыстары.",
            en: "In the Asteria finale KVANT picks up a signal from the frozen Equilibrium station: its reactor has cooled, the heat grid is silent, and the city awaits a new crew. The story continues in Grade 8 with thermal and electrical phenomena."
        },
        8: {
            ru: "С орбиты приходит ответ: станция «Орбита-9» теряет управление, а её щит должен прикрыть Землю. Продолжение — в 9 классе: механика, колебания и волны, электромагнетизм и квантовая физика.",
            kk: "Орбитадан жауап келеді: «Орбита-9» станциясы басқаруды жоғалтып, оның қалқаны Жерді жабуы керек. Жалғасы — 9 сыныпта: механика, тербелістер мен толқындар, электромагнетизм және кванттық физика.",
            en: "An answer comes from orbit: the Orbit-9 station is losing control, and its shield must cover the Earth. The story continues in Grade 9 with mechanics, oscillations and waves, electromagnetism and quantum physics."
        },
        9: {
            ru: "Три щита соединяются в один: Астерия, Эквилибриум и Орбита-9. Но КВАНТ оставляет координаты нового задания — значит, история продолжается.",
            kk: "Үш қалқан бірігеді: Астерия, Эквилибриум және Орбита-9. Бірақ КВАНТ жаңа тапсырманың координаттарын қалдырады — демек, тарих жалғасады.",
            en: "Three shields merge into one: Asteria, Equilibrium and Orbit-9. But KVANT leaves the coordinates of a new mission — the story goes on."
        }
    };
    Object.keys(TEASERS).forEach(function (g) {
        const list = TRILOGY_BOOKS[g];
        if (list && list.length) list[list.length - 1].teaser = TEASERS[g];
    });

    function getLang() {
        if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
        if (window.PQAccount) return window.PQAccount.getLang();
        return "ru";
    }

    function loc(val) {
        if (!val) return "";
        if (typeof val === "string") return val;
        const L = getLang();
        return val[L] || val.ru || val.en || val.kk || "";
    }

    function ui(key, ...args) {
        const L = getLang();
        let s = (TRILOGY_UI[L] && TRILOGY_UI[L][key]) || TRILOGY_UI.ru[key] || key;
        args.forEach((a, i) => { s = s.replace("{" + i + "}", a); });
        return s;
    }

    function esc(s) {
        return String(s == null ? "" : s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function injectStyles() {
        if (document.getElementById("pq-trilogy-diary-css")) return;
        const st = document.createElement("style");
        st.id = "pq-trilogy-diary-css";
        st.textContent = `
            .pq-td-teaser {
                display: flex; gap: 12px; align-items: flex-start;
                margin: 12px 18px 4px; padding: 13px 16px;
                border-radius: 14px; border: 1px dashed rgba(255, 213, 79, 0.5);
                background: linear-gradient(135deg, rgba(255, 213, 79, 0.12), rgba(56, 189, 248, 0.08));
                color: #e8f2ff; font-size: 13.5px; line-height: 1.5;
            }
            .pq-td-teaser strong { color: #ffd54f; display: block; margin-bottom: 3px; }
            .pq-td-teaser-icon { font-size: 22px; line-height: 1; }
            .pq-story-comics { display: inline-flex; flex-direction: column; align-items: flex-start; gap: 2px; }
            .pq-story-comics small { font-weight: 500; opacity: .75; font-size: 11.5px; }

            #pq-trilogy-modal {
                position: fixed;
                inset: 0;
                z-index: 9500;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 16px;
                background: rgba(3, 8, 20, 0.84);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                overflow-y: auto;
            }
            #pq-trilogy-modal.open { display: flex; }
            .pq-td-card {
                width: min(920px, 100%);
                max-height: 92vh;
                overflow-y: auto;
                border-radius: 24px;
                padding: 22px 24px;
                background: linear-gradient(160deg, #0d1b36 0%, #071022 100%);
                border: 1px solid rgba(56, 189, 248, 0.35);
                box-shadow: 0 28px 70px rgba(0, 0, 0, 0.72);
                color: #f8fafc;
                font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
            }
            .pq-td-top {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 12px;
                margin-bottom: 12px;
            }
            .pq-td-top h2 {
                margin: 0 0 4px;
                font-size: 21px;
                font-weight: 900;
                color: #f0f9ff;
            }
            .pq-td-top p {
                margin: 0;
                font-size: 13px;
                color: #94a3b8;
            }
            .pq-td-x {
                width: 34px; height: 34px;
                border-radius: 50%;
                border: 1px solid rgba(148, 163, 184, 0.3);
                background: rgba(255, 255, 255, 0.06);
                color: #e2e8f0;
                cursor: pointer;
                font-size: 16px;
                flex-shrink: 0;
            }
            .pq-td-parts {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
                margin-bottom: 12px;
            }
            .pq-td-part {
                padding: 9px 12px;
                border-radius: 12px;
                border: 1px solid rgba(148, 163, 184, 0.22);
                background: rgba(255, 255, 255, 0.04);
                color: #cbd5e1;
                font-weight: 800;
                font-size: 13px;
                cursor: pointer;
                transition: all 0.16s ease;
            }
            .pq-td-part.active {
                background: linear-gradient(135deg, rgba(14, 165, 233, 0.32), rgba(99, 102, 241, 0.32));
                border-color: #38bdf8;
                color: #ffffff;
                box-shadow: 0 6px 18px rgba(56, 189, 248, 0.22);
            }
            .pq-td-eps {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
                margin-bottom: 14px;
            }
            .pq-td-ep {
                padding: 5px 12px;
                border-radius: 999px;
                border: 1px solid rgba(148, 163, 184, 0.25);
                background: rgba(15, 23, 42, 0.7);
                color: #cbd5e1;
                font-size: 12px;
                font-weight: 800;
                cursor: pointer;
            }
            .pq-td-ep.active {
                background: #38bdf8;
                border-color: #38bdf8;
                color: #061224;
            }
            .pq-td-art-wrap {
                position: relative;
                border-radius: 18px;
                overflow: hidden;
                border: 2px solid rgba(125, 211, 252, 0.35);
                background: #040915;
                aspect-ratio: 16 / 9;
                margin-bottom: 14px;
                box-shadow: 0 14px 36px rgba(0, 0, 0, 0.55);
            }
            .pq-td-art-wrap img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            .pq-td-art-caption {
                position: absolute;
                left: 0; right: 0; bottom: 0;
                padding: 18px 18px 12px;
                background: linear-gradient(180deg, transparent 0%, rgba(4, 9, 21, 0.92) 78%);
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                gap: 10px;
                flex-wrap: wrap;
            }
            .pq-td-ch-title {
                font-size: 19px;
                font-weight: 900;
                color: #ffffff;
                text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
            }
            .pq-td-ch-date {
                font-size: 12px;
                font-weight: 700;
                color: #7dd3fc;
            }
            .pq-td-range {
                padding: 4px 10px;
                border-radius: 999px;
                background: rgba(56, 189, 248, 0.22);
                border: 1px solid rgba(125, 211, 252, 0.45);
                font-size: 11.5px;
                font-weight: 800;
                color: #e0f2fe;
            }
            .pq-td-bubbles {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                margin-bottom: 12px;
            }
            .pq-td-bubble {
                padding: 12px 14px;
                border-radius: 14px;
                background: rgba(15, 29, 56, 0.9);
                border: 1px solid rgba(148, 163, 184, 0.22);
                border-top: 3px solid var(--sp-color, #38bdf8);
                font-size: 13px;
                line-height: 1.45;
                color: #e2e8f0;
            }
            .pq-td-who {
                display: inline-block;
                font-size: 11px;
                font-weight: 900;
                letter-spacing: 0.06em;
                color: var(--sp-color, #38bdf8);
                margin-bottom: 5px;
                text-transform: uppercase;
            }
            .pq-td-keybox {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                padding: 11px 15px;
                border-radius: 13px;
                background: rgba(14, 116, 144, 0.2);
                border: 1px solid rgba(56, 189, 248, 0.32);
                margin-bottom: 14px;
                font-size: 13px;
            }
            .pq-td-formula {
                font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                font-weight: 900;
                color: #fde68a;
                background: rgba(0, 0, 0, 0.32);
                padding: 4px 10px;
                border-radius: 8px;
            }
            .pq-td-foot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
            }
            .pq-td-navbtn {
                padding: 9px 15px;
                border-radius: 11px;
                border: 1px solid rgba(148, 163, 184, 0.3);
                background: rgba(255, 255, 255, 0.07);
                color: #f8fafc;
                font-weight: 800;
                font-size: 13px;
                cursor: pointer;
            }
            .pq-td-ep.locked {
                opacity: 0.62;
                border-style: dashed;
                filter: grayscale(0.5);
            }
            .pq-td-ep.locked:hover { transform: none; border-color: rgba(148, 163, 184, 0.35); }
            .pq-td-ep.shake { animation: pq-td-shake 0.4s ease; }
            @keyframes pq-td-shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-4px); }
                50% { transform: translateX(4px); }
                75% { transform: translateX(-3px); }
            }
            .pq-td-locked {
                display: flex; gap: 14px; align-items: center;
                margin: 14px 18px; padding: 26px 20px;
                border-radius: 16px;
                border: 1.5px dashed rgba(148, 163, 184, 0.45);
                background: rgba(15, 23, 42, 0.55);
                color: #cbd5e1;
            }
            .pq-td-locked-icon {
                font-size: 30px; width: 58px; height: 58px; flex: 0 0 58px;
                display: flex; align-items: center; justify-content: center;
                border-radius: 50%; background: rgba(56, 189, 248, 0.14);
                border: 1px solid rgba(56, 189, 248, 0.3);
            }
            .pq-td-locked strong { display: block; font-size: 15px; color: #e2e8f0; margin-bottom: 4px; }
            .pq-td-locked p { margin: 0; font-size: 13px; line-height: 1.5; color: #94a3b8; }
            .pq-td-navbtn.primary {
                background: linear-gradient(135deg, #0ea5e9, #2563eb);
                border-color: transparent;
            }
            @media (max-width: 760px) {
                .pq-td-parts, .pq-td-bubbles { grid-template-columns: 1fr; }
                .pq-td-card { padding: 16px; }
            }
        `;
        document.head.appendChild(st);
    }

    const TrilogyDiary = {
        grade: 7,
        index: 0,
        books: TRILOGY_BOOKS,

        init() {
            injectStyles();
            const g = Number(window.CURRENT_GRADE) || 7;
            this.grade = [7, 8, 9].includes(g) ? g : 7;
            const oldBtn = document.getElementById("btn-diary");
            if (oldBtn) {
                // Комикс переехал в раздел «Лор и сюжет»: кнопку меню скрываем,
                // но оставляем узел для совместимости со старыми обработчиками.
                const btn = oldBtn.cloneNode(true);
                oldBtn.parentNode.replaceChild(btn, oldBtn);
                btn.style.display = "none";
                const span = btn.querySelector("[data-i18n]");
                if (span) span.textContent = ui("diaryBtn");
                btn.onclick = (e) => {
                    e.preventDefault();
                    this.open(Number(window.CURRENT_GRADE) || 7, 0);
                };
            }
            this.injectStoryButton();
            window.addEventListener("pq:lang-changed", () => {
                const b = document.getElementById("btn-diary")?.querySelector("[data-i18n]");
                if (b) b.textContent = ui("diaryBtn");
                this.updateStoryButton();
                const modal = document.getElementById("pq-trilogy-modal");
                if (modal && modal.classList.contains("open")) this.render();
            });
        },

        injectStoryButton() {
            const story = document.getElementById("story-modal");
            if (!story) return;
            const content = story.querySelector(".modal-content") || story;
            let btn = document.getElementById("pq-story-comics");
            if (!btn) {
                btn = document.createElement("button");
                btn.type = "button";
                btn.id = "pq-story-comics";
                btn.className = "btn btn-primary pq-story-comics";
                const actions = content.querySelector(".modal-actions");
                if (actions) actions.insertBefore(btn, actions.firstChild);
                else content.appendChild(btn);
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.open(Number(window.CURRENT_GRADE) || 7, 0);
                });
            }
            this.updateStoryButton();
        },

        updateStoryButton() {
            const btn = document.getElementById("pq-story-comics");
            if (!btn) return;
            btn.innerHTML = `<span>${esc(ui("storyBtn"))}</span><small>${esc(ui("storyHint"))}</small>`;
        },

        ensureModal() {
            injectStyles();
            let modal = document.getElementById("pq-trilogy-modal");
            if (!modal) {
                modal = document.createElement("div");
                modal.id = "pq-trilogy-modal";
                modal.setAttribute("role", "dialog");
                modal.setAttribute("aria-modal", "true");
                document.body.appendChild(modal);
                modal.addEventListener("click", (e) => {
                    if (e.target === modal) this.close();
                });
            }
            return modal;
        },

        unlockedLevel(grade) {
            let lvl = 1;
            try {
                if (window.Storage && Storage.getProgressForGrade) {
                    const prog = Storage.getProgressForGrade(Number(grade) || 7) || {};
                    lvl = Math.max(lvl, Number(prog.unlockedLevel) || 1);
                    const done = prog.completedLevels || {};
                    Object.keys(done).forEach((k) => { lvl = Math.max(lvl, Number(k) + 1); });
                }
            } catch (e) {}
            try {
                if (Number(window.CURRENT_GRADE) === Number(grade) && window.Game && Number(Game.currentLevel)) {
                    lvl = Math.max(lvl, Number(Game.currentLevel));
                }
            } catch (e) {}
            return lvl;
        },

        isLocked(item, grade) {
            if (!item) return false;
            return this.unlockedLevel(grade) < Number(item.from || 1);
        },

        open(grade, chapterIndex = 0) {
            if ([7, 8, 9].includes(Number(grade))) this.grade = Number(grade);
            const list = TRILOGY_BOOKS[this.grade] || TRILOGY_BOOKS[7];
            this.index = Math.max(0, Math.min(list.length - 1, Number(chapterIndex) || 0));
            const modal = this.ensureModal();
            this.render();
            modal.classList.add("open");
        },

        close() {
            const modal = document.getElementById("pq-trilogy-modal");
            if (modal) modal.classList.remove("open");
        },

        tryAutoShow(levelId) {
            const g = Number(window.CURRENT_GRADE) || 7;
            const list = TRILOGY_BOOKS[g] || [];
            const num = Number(levelId);
            const idx = list.findIndex(ch => ch.to === num || ch.from === num && num === 1);
            if (idx === -1) return;
            const seenKey = `pq_trilogy_seen_g${g}_ep${list[idx].ep}`;
            try {
                if (localStorage.getItem(seenKey)) return;
                localStorage.setItem(seenKey, "1");
            } catch (_) {}
            setTimeout(() => this.open(g, idx), 650);
        },

        render() {
            const modal = this.ensureModal();
            const list = TRILOGY_BOOKS[this.grade] || TRILOGY_BOOKS[7];
            const item = list[this.index] || list[0];

            modal.innerHTML = `
                <div class="pq-td-card">
                    <div class="pq-td-top">
                        <div>
                            <h2>${esc(ui("modalTitle"))}</h2>
                            <p>${esc(ui("modalSub"))}</p>
                        </div>
                        <button type="button" class="pq-td-x" data-td="close" aria-label="Close">✕</button>
                    </div>

                    <div class="pq-td-parts">
                        ${[7, 8, 9].map(g => `
                            <button type="button" class="pq-td-part ${this.grade === g ? "active" : ""}" data-td-grade="${g}">
                                ${esc(ui("part" + g))}
                            </button>
                        `).join("")}
                    </div>

                    <div class="pq-td-eps">
                        ${list.map((ch, idx) => {
                            const locked = this.isLocked(ch, this.grade);
                            return `
                            <button type="button" class="pq-td-ep ${idx === this.index ? "active" : ""} ${locked ? "locked" : ""}" data-td-idx="${idx}" data-locked="${locked ? 1 : 0}" title="${locked ? esc(ui("lockedHint", ch.from)) : ""}">
                                ${locked ? "🔒 " : ""}#${ch.ep} · ${esc(loc(ch.title).replace(/^Глава \d+\.\s*|^\d+-тарау\.\s*|^Chapter \d+\.\s*/i, ""))}
                            </button>`;
                        }).join("")}
                    </div>

                    ${this.isLocked(item, this.grade) ? `
                    <div class="pq-td-locked">
                        <div class="pq-td-locked-icon">🔒</div>
                        <div>
                            <strong>${esc(ui("lockedTitle"))}</strong>
                            <p>${esc(ui("lockedText", item.from))}</p>
                        </div>
                    </div>` : `
                    <div class="pq-td-art-wrap">
                        <img src="${esc(item.img)}" alt="${esc(loc(item.title))}">
                        <div class="pq-td-art-caption">
                            <div>
                                <div class="pq-td-ch-date">${esc(loc(item.date))}</div>
                                <div class="pq-td-ch-title">${esc(loc(item.title))}</div>
                            </div>
                            <span class="pq-td-range">${esc(ui("levelsRange", item.from, item.to))}</span>
                        </div>
                    </div>

                    <div class="pq-td-bubbles">
                        ${item.panels.map(p => `
                            <div class="pq-td-bubble" style="--sp-color:${p.color || '#38bdf8'}">
                                <div class="pq-td-who">${esc(loc(p.who))}</div>
                                <div>${esc(loc(p.text))}</div>
                            </div>
                        `).join("")}
                    </div>

                    <div class="pq-td-keybox">
                        <div><strong>${esc(ui("physKey"))}</strong> ${esc(loc(item.note))}</div>
                        <span class="pq-td-formula">${esc(item.formula)}</span>
                    </div>
                    </div>`}

                    ${item.teaser ? `
                    <div class="pq-td-teaser">
                        <div class="pq-td-teaser-icon">🔭</div>
                        <div>
                            <strong>${esc(ui("nextHint"))}</strong>
                            <div>${esc(loc(item.teaser))}</div>
                        </div>
                    </div>` : ""}

                    <div class="pq-td-foot">
                        <div style="display:flex;gap:8px;">
                            <button type="button" class="pq-td-navbtn" data-td="prev">${esc(ui("prev"))}</button>
                            <button type="button" class="pq-td-navbtn" data-td="next">${esc(ui("next"))}</button>
                        </div>
                        <span style="font-size:12.5px;color:#94a3b8;font-weight:800;">${this.index + 1} / ${list.length}</span>
                        <button type="button" class="pq-td-navbtn primary" data-td="close">${esc(ui("close"))}</button>
                    </div>
                </div>
            `;

            modal.querySelectorAll("[data-td-grade]").forEach(b => {
                b.onclick = () => {
                    this.grade = Number(b.getAttribute("data-td-grade"));
                    this.index = 0;
                    this.render();
                };
            });
            modal.querySelectorAll("[data-td-idx]").forEach(b => {
                b.onclick = () => {
                    const idx = Number(b.getAttribute("data-td-idx"));
                    if (b.getAttribute("data-locked") === "1") {
                        try { if (window.PQSound) PQSound.play("wrong"); } catch (e) {}
                        b.classList.add("shake");
                        setTimeout(() => b.classList.remove("shake"), 420);
                        return;
                    }
                    this.index = idx;
                    this.render();
                };
            });
            modal.querySelector('[data-td="prev"]').onclick = () => {
                if (this.index > 0) {
                    this.index--;
                } else if (this.grade > 7) {
                    this.grade--;
                    this.index = TRILOGY_BOOKS[this.grade].length - 1;
                }
                this.render();
            };
            modal.querySelector('[data-td="next"]').onclick = () => {
                if (this.index < list.length - 1) {
                    this.index++;
                } else if (this.grade < 9) {
                    this.grade++;
                    this.index = 0;
                }
                this.render();
            };
            modal.querySelectorAll('[data-td="close"]').forEach(b => {
                b.onclick = () => this.close();
            });
        }
    };

    window.TrilogyDiary = TrilogyDiary;
    // Переопределяем глобальный Diary, чтобы вызовы из shared/game.js работали одинаково в 7, 8 и 9 классах
    window.Diary = TrilogyDiary;
})();
