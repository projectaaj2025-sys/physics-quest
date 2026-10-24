/* ============================================================
   РАСШИРЕНИЕ КОМИКСА ТРИЛОГИИ — вторая страница каждой главы.
   Подключается к shared/trilogy-diary.js: если у главы есть вторая
   страница с иллюстрацией, она рисуется под первой; если картинки
   ещё нет — добавляются только реплики, чтобы глава не обрывалась.
   RU / KK / EN.
   ============================================================ */
(function () {
    "use strict";

    // Имена героев — из общего каста (shared/story-cast.js), поэтому локализуются.
    const NAMES = {
        "КВАНТ": { ru: "КВАНТ", kk: "КВАНТ", en: "KVANT" },
        "КВАНТ-0": { ru: "КВАНТ-0", kk: "КВАНТ-0", en: "KVANT-0" },
        "АЛИЯ": { ru: "АЛИЯ", kk: "ӘЛИЯ", en: "ALIYA" },
        "ТИМУР": { ru: "ТИМУР", kk: "ТИМУР", en: "TIMUR" },
        "ТЫ": { ru: "ТЫ", kk: "СЕН", en: "YOU" },
        "ИНЖЕНЕР": { ru: "ИНЖЕНЕР", kk: "ИНЖЕНЕР", en: "ENGINEER" }
    };

    const P = (who, color, ru, kk, en) => ({
        who: NAMES[who] || { ru: who, kk: who, en: who },
        color: color,
        text: { ru: ru, kk: kk, en: en }
    });

    const KVANT = "#38bdf8";
    const ALIYA = "#f472b6";
    const TIMUR = "#fbbf24";
    const PLAYER = "#34d399";
    const ENGINEER = "#fb923c";

    const EXTRA = {
        7: {
            1: {
                img: "./assets/comics/g7-ep1b.jpg",
                note: {
                    ru: "Цена деления и погрешность — это не формальность: от них зависит, увидит ли щит цель.",
                    kk: "Бөлік құны мен қателік — формальдылық емес: қалқанның нысананы көретіні соларға байланысты.",
                    en: "Scale division and uncertainty are no formality: they decide whether the shield sees a target."
                },
                panels: [
                    P("КВАНТ-0", KVANT,
                        "Проверка приборов: у линейки цена деления 1 мм, у таймера — 0,1 с. Переведите показания в СИ и запишите погрешность.",
                        "Аспаптарды тексеру: сызғыштың бөлік құны 1 мм, таймердікі — 0,1 с. Көрсеткіштерді ХБЖ-ге келтіріп, қателікті жаз.",
                        "Instrument check: the ruler's division is 1 mm, the timer's is 0.1 s. Convert the readings to SI and record the uncertainty."),
                    P("АЛИЯ", ALIYA,
                        "Датчик показал 42 мм — записываю 0,042 м. Таймер дал 3,5 с, значит 0,1 с идёт в погрешность.",
                        "Датчик 42 мм көрсетті — 0,042 м деп жазамын. Таймер 3,5 с берді, яғни 0,1 с қателікке кетеді.",
                        "The sensor reads 42 mm — I write 0.042 m. The timer gives 3.5 s, so 0.1 s goes into the uncertainty."),
                    P("ТИМУР", TIMUR,
                        "Первый контур откалиброван. Второй держит сектор, пока мы снимаем новые показания.",
                        "Бірінші контур калибрленді. Екіншісі біз жаңа көрсеткіштерді алып жатқанда секторды ұстап тұр.",
                        "The first perimeter is calibrated. The second holds the sector while we take fresh readings.")
                ]
            },
            2: {
                img: "./assets/comics/g7-ep2b.jpg",
                note: {
                    ru: "Плотность и скорость — два ключа к грузу: по массе и объёму видно, что внутри контейнера.",
                    kk: "Тығыздық пен жылдамдық — жүктің екі кілті: масса мен көлем арқылы контейнерде не бар екені көрінеді.",
                    en: "Density and speed are the two keys to the cargo: mass and volume reveal what is inside the container."
                },
                panels: [
                    P("АЛИЯ", ALIYA,
                        "Маглев идёт 180 км за 2 часа. Считаем среднюю скорость и сверяем с графиком доставки.",
                        "Маглев 180 км-ді 2 сағатта жүреді. Орташа жылдамдықты есептеп, жеткізу кестесімен салыстырамыз.",
                        "The maglev covers 180 km in 2 hours. We take the average speed and check it against the delivery schedule."),
                    P("КВАНТ-0", KVANT,
                        "Контейнер: масса 360 г, объём 400 см³. Плотность 900 кг/м³ — это масло, не вода.",
                        "Контейнер: массасы 360 г, көлемі 400 см³. Тығыздығы 900 кг/м³ — бұл май, су емес.",
                        "Container: mass 360 g, volume 400 cm³. Density 900 kg/m³ — this is oil, not water."),
                    P("ТИМУР", TIMUR,
                        "Подмену нашли на третьем вагоне. Пересчитываем путь по новому графику — и никто не опоздает.",
                        "Ауыстыру үшінші вагонда табылды. Жаңа кесте бойынша жолды қайта есептейміз — ешкім кешікпейді.",
                        "We found the swap in the third car. Recalculating the route on the new schedule — nobody will be late.")
                ]
            },
            3: {
                img: "./assets/comics/g7-ep4b.jpg",
                note: {
                    ru: "Вес, упругость и трение складываются: пока силы уравновешены, груз едет ровно.",
                    kk: "Салмақ, серпімділік және үйкеліс қосылады: күштер теңгерілгенде жүк бірқалыпты жүреді.",
                    en: "Weight, elasticity and friction add up: while the forces balance, the load rides steady."
                },
                panels: [
                    P("ТИМУР", TIMUR,
                        "Ящик 60 кг — вес 600 Н. Трос держит ровно 600 Н, иначе груз пойдёт вниз с ускорением.",
                        "Жәшік 60 кг — салмағы 600 Н. Арқан дәл 600 Н ұстайды, әйтпесе жүк үдеумен төмен кетеді.",
                        "A 60 kg crate weighs 600 N. The cable holds exactly 600 N, otherwise the load accelerates downward."),
                    P("АЛИЯ", ALIYA,
                        "На льду μ = 0,1, значит трение 60 Н. Толкаем с 200 Н — остаток 140 Н идёт в разгон.",
                        "Мұзда μ = 0,1, демек үйкеліс 60 Н. 200 Н-мен итереміз — қалған 140 Н үдеуге кетеді.",
                        "On ice μ = 0.1, so friction is 60 N. Push with 200 N and the remaining 140 N goes into acceleration."),
                    P("КВАНТ-0", KVANT,
                        "Амортизатор сжался на 5 см при k = 20 кН/м — это 1 кН упругости. Курс держим, раму не рвём.",
                        "Амортизатор k = 20 кН/м кезінде 5 см сығылды — бұл 1 кН серпімділік. Курсты ұстаймыз, раманы үзбейміз.",
                        "The shock compressed 5 cm at k = 20 kN/m — that is 1 kN of elastic force. Hold the course, don't tear the frame.")
                ]
            },
            4: {
                img: "./assets/comics/g7-ep3b.jpg",
                note: {
                    ru: "Давление — это сила на площадь: меньше площадь, больше давление при той же силе.",
                    kk: "Қысым — ауданға түсетін күш: аудан неғұрлым кіші болса, сол күшпен қысым соғұрлым үлкен.",
                    en: "Pressure is force over area: the smaller the area, the greater the pressure for the same force."
                },
                panels: [
                    P("ИНЖЕНЕР", ENGINEER,
                        "Пресс давит с силой 600 Н на площадку 0,02 м². Какое давление выдержит образец?",
                        "Пресс 0,02 м² ауданға 600 Н күшпен басады. Үлгі қандай қысымға шыдайды?",
                        "The press applies 600 N to an area of 0.02 m². What pressure can the sample take?"),
                    P("АЛИЯ", ALIYA,
                        "p = F / S = 600 / 0,02 = 30 000 Па, то есть 30 кПа. Значит, деталь проходит испытание.",
                        "p = F / S = 600 / 0,02 = 30 000 Па, яғни 30 кПа. Демек, бөлшек сынақтан өтеді.",
                        "p = F / S = 600 / 0.02 = 30,000 Pa, that is 30 kPa. So the part passes the test."),
                    P("КВАНТ-0", KVANT,
                        "В шлюзе та же вода: на глубине 100 м давление ρgh ≈ 1 МПа. Корпус держит, люк — тоже.",
                        "Шлюзде сол су: 100 м тереңдікте қысым ρgh ≈ 1 МПа. Корпус та, люк те шыдайды.",
                        "In the lock the same water: at 100 m depth ρgh ≈ 1 MPa. The hull holds, and so does the hatch.")
                ]
            },
            5: {
                img: "./assets/comics/g7-ep5b.jpg",
                note: {
                    ru: "Работа и мощность показывают не только «сколько», но и «как быстро»; рычаг меняет силу, но не работу.",
                    kk: "Жұмыс пен қуат тек «қанша» емес, «қаншалықты жылдам» екенін де көрсетеді; иінтірек күшті өзгертеді, жұмысты емес.",
                    en: "Work and power show not only 'how much' but 'how fast'; a lever changes force, not work."
                },
                panels: [
                    P("ТИМУР", TIMUR,
                        "Плиту щита массой 40 кг поднимаем на 2 м. A = F · s ≈ 800 Дж — считаю вместе с весом.",
                        "40 кг қалқан плитасын 2 м-ге көтереміз. A = F · s ≈ 800 Дж — салмақпен бірге есептеймін.",
                        "We lift a 40 kg shield plate by 2 m. A = F · s ≈ 800 J — counting with the weight."),
                    P("АЛИЯ", ALIYA,
                        "За 8 секунд это 100 Вт. Заменим лебёдку на помощнее — и управимся вдвое быстрее.",
                        "8 секундта бұл 100 Вт. Күшірек шығыр қойсақ — екі есе жылдам бітіреміз.",
                        "That is 100 W in 8 seconds. Swap in a stronger winch and we finish twice as fast."),
                    P("ИНЖЕНЕР", ENGINEER,
                        "Пусковая рама весит 1,2 кН. Рычаг с плечами 1:4 даст на дальнем конце 300 Н вместо 1200.",
                        "Ұшыру рамасы 1,2 кН тартады. Иіндері 1:4 иінтірек алыс ұшында 1200 орнына 300 Н береді.",
                        "The launch frame weighs 1.2 kN. A lever with 1:4 arms gives 300 N instead of 1200 at the far end.")
                ]
            },
            6: {
                img: "./assets/comics/g7-ep6b.jpg",
                note: {
                    ru: "Первый контур Астерии закрыт. Дальше — Эквилибриум, где щит держится на тепле и электричестве.",
                    kk: "Астерияның бірінші контуры жабылды. Әрі қарай — қалқаны жылу мен электрге сүйенетін Эквилибриум.",
                    en: "The first perimeter of Asteria is closed. Next is Equilibrium, whose shield rests on heat and electricity."
                },
                panels: [
                    P("КВАНТ-0", KVANT,
                        "Астерия в безопасности на 97%. Данные калибровки передаю в Эквилибриум.",
                        "Астерия 97% қауіпсіз. Калибрлеу деректерін Эквилибриумге жіберемін.",
                        "Asteria is 97% safe. Sending the calibration data to Equilibrium."),
                    P("АЛИЯ", ALIYA,
                        "Первый щит держался на измерении длины, массы и времени. Второй держится на тепле.",
                        "Бірінші қалқан ұзындық, масса және уақыт өлшеміне сүйенді. Екіншісі жылуға сүйенеді.",
                        "The first shield held on length, mass and time. The second holds on heat."),
                    P("ТИМУР", TIMUR,
                        "Курсант, готовь журнал: впереди три города и три разных щита — но физика одна.",
                        "Курсант, журналды дайында: алда үш қала мен үш түрлі қалқан — бірақ физика бір.",
                        "Cadet, get the log ready: three cities and three different shields lie ahead — but the physics is one.")
                ]
            }
        },
        8: {
            1: {
                img: "./assets/comics/g8-ep1b.jpg",
                note: {
                    ru: "Тепло — это энергия, которую переносят молекулы. Тепловое сердце считает её количеством теплоты Q.",
                    kk: "Жылу — молекулалар тасымалдайтын энергия. Жылу жүрегі оны Q жылу мөлшері деп есептейді.",
                    en: "Heat is energy carried by molecules. The thermal heart counts it as the quantity of heat Q."
                },
                panels: [
                    P("АЛИЯ", ALIYA,
                        "Воду массой 2 кг греем на 30 °C. Q = c · m · Δt = 4200 · 2 · 30 = 252 кДж.",
                        "Массасы 2 кг суды 30 °C-қа жылытамыз. Q = c · m · Δt = 4200 · 2 · 30 = 252 кДж.",
                        "We heat 2 kg of water by 30 °C. Q = c·m·Δt = 4200·2·30 = 252 kJ."),
                    P("ИНЖЕНЕР", ENGINEER,
                        "Та же энергия уходит из города за минуту. Нужна не камера, а обменник побольше.",
                        "Сол энергия қаладан бір минутта кетеді. Камера емес, үлкенірек алмастырғыш керек.",
                        "The same energy leaves the city in a minute. We need a bigger exchanger, not another chamber."),
                    P("КВАНТ-0", KVANT,
                        "Купол держит двое суток на резерве. Хватит, если считать без потерь — а потерь у нас 18%.",
                        "Күмбез қорда екі тәулік ұстайды. Шығынсыз санасақ жетеді — ал шығыныз 18%.",
                        "The dome holds two days on reserve. Enough if counted without losses — and ours are 18%.")
                ]
            },
            2: {
                img: "./assets/comics/g8-ep2b.jpg",
                note: {
                    ru: "Плавление и парообразование тоже считаются формулами: Q = λ · m и Q = L · m.",
                    kk: "Балқу мен булану да формуламен есептеледі: Q = λ · m және Q = L · m.",
                    en: "Melting and vaporisation are calculated too: Q = λ·m and Q = L·m."
                },
                panels: [
                    P("ТИМУР", TIMUR,
                        "Деталь массой 0,5 кг: сначала нагрев, потом плавление. Считаем двумя строчками и складываем.",
                        "Массасы 0,5 кг бөлшек: әуелі қыздыру, сонан кейін балқу. Екі жолмен есептеп қосамыз.",
                        "Part of mass 0.5 kg: heat first, then melt. Two lines of calculation, then add them up."),
                    P("АЛИЯ", ALIYA,
                        "λ для стали 84 кДж/кг — плавление дороже нагрева. Значит, форму меняем, а не режим печи.",
                        "Болат үшін λ 84 кДж/кг — балқу қыздырудан қымбат. Демек, режимді емес, пішінді өзгертеміз.",
                        "λ for steel is 84 kJ/kg — melting costs more than heating. So we change the shape, not the furnace."),
                    P("КВАНТ-0", KVANT,
                        "Экономия 12% тепла. Купол получит её как запас на ночную бурю.",
                        "12% жылу үнемделді. Күмбез оны түнгі дауылға қор ретінде алады.",
                        "A 12% heat saving. The dome receives it as reserve for the night storm.")
                ]
            },
            3: {
                img: "./assets/comics/g8-ep3b.jpg",
                note: {
                    ru: "Закон Ома связывает три величины: U = I · R. Меняется одна — меняются все.",
                    kk: "Ом заңы үш шаманы байланыстырады: U = I · R. Біреуі өзгерсе — бәрі өзгереді.",
                    en: "Ohm's law ties three quantities: U = I·R. Change one and the others follow."
                },
                panels: [
                    P("ИНЖЕНЕР", ENGINEER,
                        "Купол потребляет 40 А при 220 В. Мощность P = U · I ≈ 8,8 кВт — считай на два контура.",
                        "Күмбез 220 В кезінде 40 А тұтынады. Қуат P = U · I ≈ 8,8 кВт — екі контурға сана.",
                        "The dome draws 40 A at 220 V. Power P = U·I ≈ 8.8 kW — plan for two circuits."),
                    P("АЛИЯ", ALIYA,
                        "Сопротивление линии 0,5 Ом. Потери Q = I² · R · t будут греться — провод толще.",
                        "Желі кедергісі 0,5 Ом. Шығын Q = I² · R · t қызады — сымды қалыңдатамыз.",
                        "Line resistance is 0.5 Ω. The Q = I²·R·t losses turn into heat — make the wire thicker."),
                    P("КВАНТ-0", KVANT,
                        "Схема собрана. Эквилибриум снова видит тепловой контур.",
                        "Схема жиналды. Эквилибриум жылу контурын қайта көріп тұр.",
                        "The circuit is closed. Equilibrium sees the thermal loop again.")
                ]
            },
            4: {
                img: "./assets/comics/g8-ep4c.jpg",
                note: {
                    ru: "Магнитное поле и индукция: щит Эквилибриума работает на токе, который рождается из движения.",
                    kk: "Магнит өрісі мен индукция: Эквилибриум қалқаны қозғалыстан туған токпен жұмыс істейді.",
                    en: "Magnetic field and induction: the Equilibrium shield runs on current born from motion."
                },
                panels: [
                    P("ИНЖЕНЕР", ENGINEER,
                        "Турбина дала 50 Гц. Частоту держим, иначе индукционные катушки уйдут в резонанс.",
                        "Турбина 50 Гц берді. Жиілікті ұстаймыз, әйтпесе индукция катушкалары резонансқа кетеді.",
                        "The turbine gives 50 Hz. Hold the frequency or the induction coils hit resonance."),
                    P("АЛИЯ", ALIYA,
                        "ЭДС растёт, пока растёт поток. Значит, нам важна не сила магнита, а скорость поворота рамки.",
                        "ЭҚК ағын өскенде өседі. Демек, магнит күші емес, раманың айналу жылдамдығы маңызды.",
                        "EMF grows while flux grows. So what matters is the coil's turning speed, not magnet strength."),
                    P("КВАНТ", KVANT,
                        "Сила Ампера держит мост: B·I·L. Убери ток — и мост просто упадёт в каньон.",
                        "Ампер күші көпірді ұстап тұр: B·I·L. Токты өшірсең — көпір шатқалға құлайды.",
                        "The Ampère force holds the bridge: B·I·L. Cut the current and the bridge drops into the canyon.")
                ]
            },
            5: {
                img: "./assets/comics/g8-ep4b.jpg",
                note: {
                    ru: "Линза собирает лучи: D = 1 / F, а 1/F = 1/d + 1/f даёт положение изображения.",
                    kk: "Линза сәулелерді жинайды: D = 1 / F, ал 1/F = 1/d + 1/f кескіннің орнын береді.",
                    en: "A lens gathers rays: D = 1/F, and 1/F = 1/d + 1/f gives the image position."
                },
                panels: [
                    P("АЛИЯ", ALIYA,
                        "Звезда дала изображение на 30 см при предмете в 60 см. Считаем фокус: F = 20 см, D = 5 дптр.",
                        "Жұлдыз 60 см қашықтықта 30 см-де кескін берді. Фокусты санаймыз: F = 20 см, D = 5 дптр.",
                        "The star imaged at 30 cm with the object at 60 cm. Focal length: F = 20 cm, D = 5 dioptres."),
                    P("КВАНТ", KVANT,
                        "Призму повернули — луч ушёл по закону Снеллиуса. Угол входа не равен углу выхода.",
                        "Призманы бұрдық — сәуле Снеллиус заңымен кетті. Кіру бұрышы шығу бұрышына тең емес.",
                        "We turned the prism and the ray followed Snell's law. The angle in is not the angle out."),
                    P("ИНЖЕНЕР", ENGINEER,
                        "Световой столб в 45° уходит к облакам: параллельный пучок — это источник в фокусе линзы.",
                        "45°-тағы жарық бағанасы бұлттарға кетеді: параллель шоқ — линза фокусындағы көз.",
                        "The 45° light column climbs to the clouds: a parallel beam comes from a source at the lens focus.")
                ]
            },
            6: {
                img: "./assets/comics/g8-ep6b.jpg",
                note: {
                    ru: "Финал Эквилибриума: три контура держат город, а журнал экспедиции уже открыт для Орбиты-9.",
                    kk: "Эквилибриум финалы: үш контур қаланы ұстап тұр, ал экспедиция журналы Орбита-9 үшін ашық.",
                    en: "Equilibrium's finale: three circuits hold the city, and the expedition log opens for Orbita-9."
                },
                panels: [
                    P("АЛИЯ", ALIYA,
                        "Купол снова прозрачный. Тепло, свет и токи сошлись в одну схему.",
                        "Күмбез қайта мөлдір. Жылу, жарық және токтар бір схемаға бірікті.",
                        "The dome is clear again. Heat, light and currents converge into one scheme."),
                    P("КВАНТ-0", KVANT,
                        "Курсант, следующий город — над Землёй. Там щит держится на движении и электричестве.",
                        "Курсант, келесі қала — Жер үстінде. Онда қалқан қозғалыс пен электрге сүйенеді.",
                        "Cadet, the next city is above Earth. There the shield rests on motion and electricity.")
                ]
            }
        },
        9: {
            1: {
                img: "./assets/comics/g9-ep1b.jpg",
                note: {
                    ru: "Прежде чем лететь — допуск: безопасность в кабинете физики и первая запись в журнале.",
                    kk: "Ұшу алдында — рұқсат: физика кабинетіндегі қауіпсіздік және журналдағы бірінші жазба.",
                    en: "Before flying — clearance: lab safety and the first entry in the log."
                },
                panels: [
                    P("КВАНТ", KVANT,
                        "Инструктаж пройден. Теперь каждая ошибка в расчёте — это трещина в орбитальном щите.",
                        "Инструктаж өтілді. Енді есептегі әр қате — орбиталық қалқандағы жарық.",
                        "The briefing is done. Now every calculation error is a crack in the orbital shield."),
                    P("АЛИЯ", ALIYA,
                        "Курсант, я Алия с Орбиты-9. Показываю пульт — тут всё считается в СИ и без округлений.",
                        "Курсант, мен Орбита-9-дан Әлиямын. Пультты көрсетемін — бәрі ХБЖ-де, дөңгелектеусіз.",
                        "Cadet, I'm Aliya from Orbita-9. Here is the console — everything in SI, no early rounding.")
                ]
            },
            2: {
                img: "./assets/comics/g9-ep2b.jpg",
                note: {
                    ru: "Путь и перемещение — разные величины. Вектор важнее пройденного расстояния.",
                    kk: "Жол мен орын ауыстыру — әр түрлі шамалар. Вектор жүрілген қашықтықтан маңызды.",
                    en: "Distance and displacement differ. The vector matters more than the path travelled."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Ты прошёл 4 км на север и 3 км на восток. Путь 7 км, а перемещение — 5 км.",
                        "Сен 4 км солтүстікке, 3 км шығысқа жүрдің. Жол 7 км, ал орын ауыстыру — 5 км.",
                        "You walked 4 km north and 3 km east. Path 7 km, displacement 5 km."),
                    P("КВАНТ", KVANT,
                        "Щит считает именно вектор: ему нужна цель, а не длина маршрута.",
                        "Қалқан дәл векторды санайды: оған маршрут ұзындығы емес, нысана керек.",
                        "The shield uses the vector: it needs the target, not the route length.")
                ]
            },
            3: {
                img: "./assets/comics/g9-ep3b.jpg",
                note: {
                    ru: "Момент силы — это сила, умноженная на плечо: тяжёлый телескоп поворачивают не сильнее, а дальше от оси.",
                    kk: "Күш моменті — күш пен иіннің көбейтіндісі: ауыр телескопты күшейтіп емес, осьтен алысырақ ұстап бұрады.",
                    en: "Moment of force is force times lever arm: a heavy telescope turns not with more force, but further from the axis."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Антенна массой 200 кг. Жму в 0,5 м от оси с силой 40 Н — момент 20 Н·м, и привод справляется.",
                        "Антеннаның массасы 200 кг. Осьтен 0,5 м жерде 40 Н күшпен басамын — момент 20 Н·м, жетек көтереді.",
                        "The dish weighs 200 kg. I push 40 N at 0.5 m from the axis — a 20 N·m moment, and the drive holds it."),
                    P("КВАНТ", KVANT,
                        "Звёздная карта строится по углам: поворот на 1° смещает цель на 300 км. Проверяй и плечо, и угол.",
                        "Жұлдыз картасы бұрыштар бойынша құрылады: 1°-қа бұрылу нысананы 300 км-ге жылжытады. Иінді де, бұрышты да тексер.",
                        "The star chart is built from angles: a 1° turn shifts the target by 300 km. Check both arm and angle.")
                ]
            },
            4: {
                img: "./assets/comics/g9-ep4b.jpg",
                note: {
                    ru: "Гравитация не исчезает на орбите: это она держит «Беркута» на витке и задаёт первую космическую скорость.",
                    kk: "Орбитада гравитация жоғалмайды: ол «Бүркітті» витокта ұстап, бірінші ғарыштық жылдамдықты анықтайды.",
                    en: "Gravity does not vanish in orbit: it keeps Berkut on its loop and sets the first cosmic velocity."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "На высоте 400 км g меньше всего на 11%. Поэтому первая космическая — 7,9 км/с, а не «тяжести нет».",
                        "400 км биіктікте g небәрі 11%-ға кіші. Сондықтан бірінші ғарыштық — 7,9 км/с, «ауырлық жоқ» емес.",
                        "At 400 km altitude g is only 11% lower. That's why the first cosmic velocity is 7.9 km/s, not 'no gravity'."),
                    P("КВАНТ", KVANT,
                        "В атмосфере крылья дают подъёмную силу, на орбите — только тяга и притяжение Земли. Не путай два режима.",
                        "Атмосферада қанаттар көтеру күшін береді, орбитада — тек тарту мен Жердің тартылысы. Екі режимді шатастырма.",
                        "In the atmosphere wings give lift; in orbit only thrust and Earth's pull. Don't mix the two modes.")
                ]
            },
            5: {
                img: "./assets/comics/g9-ep5b.jpg",
                note: {
                    ru: "Импульс сохраняется: удар о щит меняет направление, но не общий импульс системы.",
                    kk: "Импульс сақталады: қалқанға тию бағытты өзгертеді, бірақ жүйенің жалпы импульсін емес.",
                    en: "Momentum is conserved: a hit on the shield turns direction, not the system's total momentum."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Две тележки 2 и 3 кг: после сцепки скорость 2 м/с. Значит, до сцепки импульс был 10 кг·м/с.",
                        "Екі арба 2 және 3 кг: тіркелгеннен кейін жылдамдық 2 м/с. Демек, бұрын импульс 10 кг·м/с.",
                        "Two carts of 2 and 3 kg: 2 m/s after coupling. So momentum before was 10 kg·m/s."),
                    P("КВАНТ", KVANT,
                        "Тот же закон спасает станцию: удар принимает щит, а не корпус.",
                        "Сол заң станцияны сақтайды: соққыны корпус емес, қалқан қабылдайды.",
                        "The same law saves the station: the shield takes the blow, not the hull.")
                ]
            },
            6: {
                img: "./assets/comics/g9-ep6b.jpg",
                note: {
                    ru: "Период и частота: маятник и спутник подчиняются одной математике.",
                    kk: "Период мен жиілік: маятник пен спутник бір математикаға бағынады.",
                    en: "Period and frequency: a pendulum and a satellite obey the same mathematics."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Маятник длиной 1 м даёт период 2 с. На орбите при другом g период тоже другой.",
                        "Ұзындығы 1 м маятник 2 с период береді. Орбитада g басқа, сондықтан период та басқа.",
                        "A 1 m pendulum gives a 2 s period. On orbit, with another g, the period changes too."),
                    P("КВАНТ", KVANT,
                        "Частота — обратная величина. Считай аккуратно: одна ошибка в периоде — и щит мимо.",
                        "Жиілік — кері шама. Мұқият сана: периодтағы бір қате — және қалқан мақсаттан адасады.",
                        "Frequency is the reciprocal. Be precise: one period error and the shield misses.")
                ]
            },
            7: {
                img: "./assets/comics/g9-ep7b.jpg",
                note: {
                    ru: "Атомный рубеж: фотон с энергией hν выбивает электрон, а ядро распадается по закону N = N₀ · 2^(−t/T).",
                    kk: "Атомдық шеп: энергиясы hν фотон электронды ұшырады, ал ядро N = N₀ · 2^(−t/T) заңымен ыдырайды.",
                    en: "Atomic frontier: a photon of energy hν knocks out an electron, and a nucleus decays by N = N₀ · 2^(−t/T)."
                },
                panels: [
                    P("ИНЖЕНЕР", ENGINEER,
                        "Красная лампа не тянет: энергия фотона меньше работы выхода. Ставим ультрафиолет — датчик оживает.",
                        "Қызыл шам тартпайды: фотон энергиясы шығу жұмысынан аз. Ультракүлгін қоямыз — датчик оянады.",
                        "The red lamp fails: photon energy is below the work function. Switch to ultraviolet — the sensor wakes up."),
                    P("КВАНТ", KVANT,
                        "Каждый распад отдаёт энергию. Считай не «сколько осталось», а сколько успело распасться за время t.",
                        "Әр ыдырау энергия береді. «Қанша қалды» емес, t уақытта қанша ыдырағанын сана.",
                        "Every decay releases energy. Count not 'what's left' but how much decayed in time t.")
                ]
            },
            8: {
                img: "./assets/comics/g9-ep8b.jpg",
                note: {
                    ru: "Квантовое сердце: энергия фотона E = hν и дефект массы E = Δmc² — два способа получить одну и ту же энергию.",
                    kk: "Кванттық жүрек: фотон энергиясы E = hν және масса ақауы E = Δmc² — бір энергияны алудың екі жолы.",
                    en: "Quantum heart: photon energy E = hν and mass defect E = Δmc² — two ways to get the same energy."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Фотон с частотой 5·10¹⁴ Гц даёт E ≈ 3,3·10⁻¹⁹ Дж. Мало по одному, много в пучке.",
                        "Жиілігі 5·10¹⁴ Гц фотон E ≈ 3,3·10⁻¹⁹ Дж береді. Біреуі аз, шоғырда көп.",
                        "A photon at 5·10¹⁴ Hz carries E ≈ 3.3·10⁻¹⁹ J. Tiny alone, huge in a beam."),
                    P("КВАНТ", KVANT,
                        "Сердце станции питается светом: каждая пластина щита — квантовая батарея. Считаем поток, а не один фотон.",
                        "Станция жүрегі жарықпен қоректенеді: қалқанның әр пластинасы — кванттық батарея. Бір фотонды емес, ағынды сана.",
                        "The station heart feeds on light: every shield plate is a quantum battery. Count the flux, not one photon.")
                ]
            },
            9: {
                img: "./assets/comics/g9-ep9b.jpg",
                note: {
                    ru: "Три щита — одна система: энергия не появляется из ниоткуда, поэтому запас считают заранее.",
                    kk: "Үш қалқан — бір жүйе: энергия жоқтан пайда болмайды, сондықтан қорды алдын ала санайды.",
                    en: "Three shields, one system: energy never appears from nowhere, so the reserve is calculated in advance."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Три щита дают 97% защиты. Остальное — запас, который мы держим в журнале.",
                        "Үш қалқан 97% қорғаныс береді. Қалғаны — журналда ұстаған қор.",
                        "Three shields give 97% protection. The rest is reserve kept in the log."),
                    P("КВАНТ", KVANT,
                        "Астерия, Эквилибриум, Орбита-9. Три города, три расчёта — и один общий щит над Землёй.",
                        "Астерия, Эквилибриум, Орбита-9. Үш қала, үш есеп — және Жер үстіндегі бір ортақ қалқан.",
                        "Asteria, Equilibrium, Orbita-9. Three cities, three calculations — and one shared shield above Earth.")
                ]
            },
            10: {
                img: "./assets/comics/g9-ep10b.jpg",
                note: {
                    ru: "Космолаборатория: маятник, волна, индукция и закон Кулона — четыре опыта, которые проверяют всю трилогию.",
                    kk: "Ғарыш зертханасы: маятник, толқын, индукция және Кулон заңы — бүкіл трилогияны тексеретін төрт тәжірибе.",
                    en: "Space laboratory: pendulum, wave, induction and Coulomb's law — four experiments that test the whole trilogy."
                },
                panels: [
                    P("ТЫ", PLAYER,
                        "Маятник 1 м даёт период 2 с, волна 30 МГц — длину 10 м. Сходится с расчётом, значит, приборы в порядке.",
                        "1 м маятник 2 с период береді, 30 МГц толқын — 10 м ұзындық. Есеппен сәйкес, аспаптар тәртіпте.",
                        "A 1 m pendulum gives 2 s, a 30 MHz wave gives 10 m. It matches the maths, so the instruments are fine."),
                    P("КВАНТ", KVANT,
                        "Курсант, курс пройден. Четыре опыта сходятся с формулами — щит держится на расчёте, а не на удаче.",
                        "Курсант, курс аяқталды. Төрт тәжірибе формулалармен сәйкеседі — қалқан сәттілікке емес, есепке сүйенеді.",
                        "Cadet, the course is complete. Four experiments match the formulas — the shield rests on maths, not luck.")
                ]
            }
        }
    };

    window.TRILOGY_EXTRA = EXTRA;
})();
