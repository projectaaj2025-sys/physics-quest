/* ============================================================
   РАСШИРЕНИЕ КОМИКСА ТРИЛОГИИ — вторая страница каждой главы.
   Подключается к shared/trilogy-diary.js: если у главы есть вторая
   страница с иллюстрацией, она рисуется под первой; если картинки
   ещё нет — добавляются только реплики, чтобы глава не обрывалась.
   RU / KK / EN.
   ============================================================ */
(function () {
    "use strict";

    const P = (who, color, ru, kk, en) => ({
        who: { ru: who, kk: who, en: who },
        color: color,
        text: { ru: ru, kk: kk, en: en }
    });

    const KVANT = "#38bdf8";
    const ALIYA = "#f472b6";
    const TIMUR = "#fbbf24";
    const LADA = "#a78bfa";
    const VIKTOR = "#fb923c";
    const KIRA = "#34d399";

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
                    P("ЛАДА", LADA,
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
                img: "./assets/comics/g7-ep3b.jpg",
                note: {
                    ru: "Давление — это сила на площадь: меньше площадь, больше давление при той же силе.",
                    kk: "Қысым — ауданға түсетін күш: аудан неғұрлым кіші болса, сол күшпен қысым соғұрлым үлкен.",
                    en: "Pressure is force over area: the smaller the area, the greater the pressure for the same force."
                },
                panels: [
                    P("ВИКТОР", VIKTOR,
                        "Пресс давит с силой 600 Н на площадку 0,02 м². Какое давление выдержит образец?",
                        "Пресс 0,02 м² ауданға 600 Н күшпен басады. Үлгі қандай қысымға шыдайды?",
                        "The press applies 600 N to an area of 0.02 m². What pressure can the sample take?"),
                    P("АЛИЯ", ALIYA,
                        "p = F / S = 600 / 0,02 = 30 000 Па, то есть 30 кПа. Значит, деталь проходит испытание.",
                        "p = F / S = 600 / 0,02 = 30 000 Па, яғни 30 кПа. Демек, бөлшек сынақтан өтеді.",
                        "p = F / S = 600 / 0.02 = 30,000 Pa, that is 30 kPa. So the part passes the test."),
                    P("КВАНТ-0", KVANT,
                        "В гидравлике то же давление передаётся на больший поршень — и даёт выигрыш в силе.",
                        "Гидравликада сол қысым үлкен поршеньге беріледі — және күш ұтысын береді.",
                        "In hydraulics the same pressure reaches the larger piston — and gives a gain in force.")
                ]
            },
            4: {
                img: "./assets/comics/g7-ep4b.jpg",
                note: {
                    ru: "Работа и мощность показывают не только «сколько», но и «как быстро».",
                    kk: "Жұмыс пен қуат тек «қанша» емес, «қаншалықты жылдам» екенін де көрсетеді.",
                    en: "Work and power show not only 'how much' but 'how fast'."
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
                    P("КВАНТ-0", KVANT,
                        "Купол цел. Но запас прочности меньше нормы — следующий метеорный залп придётся встречать щитом.",
                        "Күмбез бүтін. Бірақ беріктік қоры нормадан төмен — келесі метеорлық залпты қалқанмен қарсы аламыз.",
                        "The dome holds. But the safety margin is below norm — the next meteor volley must meet the shield.")
                ]
            },
            5: {
                img: "./assets/comics/g7-ep5b.jpg",
                note: {
                    ru: "Рычаг, сила Архимеда и давление работают вместе — так держится любой инженерный щит.",
                    kk: "Иінтірек, Архимед күші және қысым бірге жұмыс істейді — кез келген инженерлік қалқан осылай тұрады.",
                    en: "The lever, buoyancy and pressure work together — that is how any engineering shield holds."
                },
                panels: [
                    P("ВИКТОР", VIKTOR,
                        "Пусковая рама весит 1,2 кН. Рычаг с плечами 1:4 даст на дальнем конце силу 300 Н вместо 1200.",
                        "Ұшыру рамасы 1,2 кН тартады. Иіндері 1:4 иінтірек алыс ұшында 1200 орнына 300 Н күш береді.",
                        "The launch frame weighs 1.2 kN. A lever with 1:4 arms gives 300 N instead of 1200 at the far end."),
                    P("АЛИЯ", ALIYA,
                        "Понтон держит груз, пока F_A ≈ ρ_ж · g · V. Не хватит объёма — не хватит и силы.",
                        "Понтон жүкті ұстап тұр, әзірге F_A ≈ ρ_с · g · V. Көлем жетпесе — күш те жетпейді.",
                        "The pontoon carries the load while F_A ≈ ρ·g·V. Not enough volume means not enough force."),
                    P("ТИМУР", TIMUR,
                        "Рама встала, ракета на направляющей. Осталось попасть в цель — а это уже физика скорости.",
                        "Рама орнында, зымыран бағыттауышта. Нысанаға тию қалды — бұл жылдамдық физикасы.",
                        "The frame is up, the rocket is on the rail. Only hitting the target remains — that is the physics of speed.")
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
                    P("ЛАДА", LADA,
                        "Воду массой 2 кг греем на 30 °C. Q = c · m · Δt = 4200 · 2 · 30 = 252 кДж.",
                        "Массасы 2 кг суды 30 °C-қа жылытамыз. Q = c · m · Δt = 4200 · 2 · 30 = 252 кДж.",
                        "We heat 2 kg of water by 30 °C. Q = c·m·Δt = 4200·2·30 = 252 kJ."),
                    P("ВИКТОР", VIKTOR,
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
                    P("ЛАДА", LADA,
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
                    P("ВИКТОР", VIKTOR,
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
                img: "./assets/comics/g8-ep4b.jpg",
                note: {
                    ru: "Линза собирает лучи: D = 1 / F, а 1/F = 1/d + 1/f даёт положение изображения.",
                    kk: "Линза сәулелерді жинайды: D = 1 / F, ал 1/F = 1/d + 1/f кескіннің орнын береді.",
                    en: "A lens gathers rays: D = 1/F, and 1/F = 1/d + 1/f gives the image position."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Звезда дала изображение на 30 см при предмете в 60 см. Считаем фокус: F = 20 см.",
                        "Жұлдыз 60 см қашықтықта 30 см-де кескін берді. Фокусты санаймыз: F = 20 см.",
                        "The star imaged at 30 cm with an object at 60 cm. Focal length: F = 20 cm."),
                    P("ЛАДА", LADA,
                        "Оптическая сила очков D = 5 дптр. Значит, для дальнего плана нужен второй объектив.",
                        "Көзілдіріктің оптикалық күші D = 5 дптр. Демек, алыс жоспарға екінші объектив керек.",
                        "The lens power is D = 5 dioptres. So the long-range view needs a second objective."),
                    P("КВАНТ-0", KVANT,
                        "Ночное небо чистое. Метеоров на радаре нет — но щит всё равно держим.",
                        "Түнгі аспан ашық. Радарда метеор жоқ — бірақ қалқанды ұстап тұрамыз.",
                        "The night sky is clear. No meteors on radar — but the shield stays up.")
                ]
            },
            5: {
                note: {
                    ru: "Магнитное поле и индукция: щит Эквилибриума работает на токе, который рождается из движения.",
                    kk: "Магнит өрісі мен индукция: Эквилибриум қалқаны қозғалыстан туған токпен жұмыс істейді.",
                    en: "Magnetic field and induction: the Equilibrium shield runs on current born from motion."
                },
                panels: [
                    P("ВИКТОР", VIKTOR,
                        "Турбина дала 50 Гц. Частоту держим, иначе индукционные катушки уйдут в резонанс.",
                        "Турбина 50 Гц берді. Жиілікті ұстаймыз, әйтпесе индукция катушкалары резонансқа кетеді.",
                        "The turbine gives 50 Hz. Hold the frequency or the induction coils hit resonance."),
                    P("АЛИЯ", ALIYA,
                        "ЭДС растёт, пока растёт поток. Значит, нам важна не сила магнита, а скорость поворота рамки.",
                        "ЭҚК ағын өскенде өседі. Демек, магнит күші емес, раманың айналу жылдамдығы маңызды.",
                        "EMF grows while flux grows. So what matters is the coil's turning speed, not magnet strength.")
                ]
            },
            6: {
                note: {
                    ru: "Финал Эквилибриума: три контура держат город, а журнал экспедиции уже открыт для Орбиты-9.",
                    kk: "Эквилибриум финалы: үш контур қаланы ұстап тұр, ал экспедиция журналы Орбита-9 үшін ашық.",
                    en: "Equilibrium's finale: three circuits hold the city, and the expedition log opens for Orbita-9."
                },
                panels: [
                    P("ЛАДА", LADA,
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
                    P("КИРА", KIRA,
                        "Курсант, я Кира с Орбиты-9. Показываю пульт — тут всё считается в СИ и без округлений.",
                        "Курсант, мен Орбита-9-дан Кирамын. Пультты көрсетемін — бәрі ХБЖ-де, дөңгелектеусіз.",
                        "Cadet, I'm Kira from Orbita-9. Here is the console — everything in SI, no early rounding.")
                ]
            },
            2: {
                note: {
                    ru: "Путь и перемещение — разные величины. Вектор важнее пройденного расстояния.",
                    kk: "Жол мен орын ауыстыру — әр түрлі шамалар. Вектор жүрілген қашықтықтан маңызды.",
                    en: "Distance and displacement differ. The vector matters more than the path travelled."
                },
                panels: [
                    P("КИРА", KIRA,
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
                note: {
                    ru: "Ускорение и графики: наклон прямой говорит больше, чем любая формула в отрыве от графика.",
                    kk: "Үдеу мен графиктер: түзудің көлбеуі графиктен тыс формуладан көп нәрсе айтады.",
                    en: "Acceleration and graphs: the slope says more than a formula taken off the graph."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Разгон до 12 м/с за 4 с — это 3 м/с². Такая перегрузка на орбите уже чувствуется.",
                        "4 с ішінде 12 м/с-қа дейін үдеу — бұл 3 м/с². Орбитада мұндай жүктеме сезіледі.",
                        "0 to 12 m/s in 4 s is 3 m/s². On orbit that load is already felt."),
                    P("КВАНТ", KVANT,
                        "График скорости — прямая. Площадь под ней и есть путь.",
                        "Жылдамдық графигі — түзу. Астындағы аудан — жол.",
                        "The velocity graph is a straight line. The area under it is the distance.")
                ]
            },
            4: {
                note: {
                    ru: "Силы складываются векторно. Равнодействующая показывает, куда реально полетит аппарат.",
                    kk: "Күштер векторлық қосылады. Тең әсерлі күш аппараттың қайда ұшатынын көрсетеді.",
                    en: "Forces add as vectors. The resultant shows where the craft will actually go."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Тяга 8 кН вперёд, сопротивление 2 кН назад. Равнодействующая 6 кН — и уже не в стену.",
                        "Алға 8 кН тарту, кері 2 кН кедергі. Тең әсерлі 6 кН — енді қабырғаға емес.",
                        "8 kN thrust forward, 2 kN drag back. Net force 6 kN — and no longer into the wall."),
                    P("КВАНТ", KVANT,
                        "Запиши это в журнал: сила — причина ускорения, а не сама скорость.",
                        "Мұны журналға жаз: күш — үдеудің себебі, жылдамдықтың өзі емес.",
                        "Log this: force is the cause of acceleration, not speed itself.")
                ]
            },
            5: {
                note: {
                    ru: "Импульс сохраняется: удар о щит меняет направление, но не общий импульс системы.",
                    kk: "Импульс сақталады: қалқанға тию бағытты өзгертеді, бірақ жүйенің жалпы импульсін емес.",
                    en: "Momentum is conserved: a hit on the shield turns direction, not the system's total momentum."
                },
                panels: [
                    P("КИРА", KIRA,
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
                note: {
                    ru: "Период и частота: маятник и спутник подчиняются одной математике.",
                    kk: "Период мен жиілік: маятник пен спутник бір математикаға бағынады.",
                    en: "Period and frequency: a pendulum and a satellite obey the same mathematics."
                },
                panels: [
                    P("КИРА", KIRA,
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
                note: {
                    ru: "Волны: длина, частота и скорость связаны одним уравнением λ = v / ν.",
                    kk: "Толқындар: ұзындық, жиілік және жылдамдық бір теңдеумен байланысады λ = v / ν.",
                    en: "Waves: wavelength, frequency and speed are tied by one equation, λ = v/ν."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Сигнал 30 МГц — длина волны 10 м. Антенну режем под неё, а не под корпус.",
                        "Сигнал 30 МГц — толқын ұзындығы 10 м. Антеннаны корпусқа емес, соған қиямыз.",
                        "A 30 MHz signal means a 10 m wavelength. We size the antenna to it, not to the hull."),
                    P("КВАНТ", KVANT,
                        "Помехи от метеоров — это тоже волны. Их можно отфильтровать, если знать частоту.",
                        "Метеорлардан келетін кедергі де толқын. Жиілігін білсек, сүзгіден өткіземіз.",
                        "Meteor noise is waves too. Know the frequency and you can filter it out.")
                ]
            },
            8: {
                note: {
                    ru: "Свет — тоже волна: отражение и преломление считаются по одним законам.",
                    kk: "Жарық та толқын: шағылу мен сыну бір заңдармен есептеледі.",
                    en: "Light is a wave too: reflection and refraction follow the same laws."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Луч входит в стекло под 45°. Преломление меняет угол, но не частоту.",
                        "Сәуле шыныға 45° бағытпен кіреді. Сыну бұрышты өзгертеді, жиілікті емес.",
                        "A ray enters glass at 45°. Refraction changes the angle, not the frequency."),
                    P("КВАНТ", KVANT,
                        "Так же работает лазерный дальномер: время возврата — и расстояние до цели.",
                        "Лазерлік қашықтық өлшегіш те осылай жұмыс істейді: қайту уақыты — және нысанаға дейінгі қашықтық.",
                        "That is how a laser rangefinder works: return time gives the range to the target.")
                ]
            },
            9: {
                note: {
                    ru: "Квант света: энергия фотона E = h · ν. Здесь физика встречается с энергией щита.",
                    kk: "Жарық кванты: фотон энергиясы E = h · ν. Мұнда физика қалқан энергиясымен кездеседі.",
                    en: "The light quantum: photon energy E = h·ν. Here physics meets shield energy."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Фотон с частотой 5·10¹⁴ Гц даёт E ≈ 3,3·10⁻¹⁹ Дж. Мало по одному, много в пучке.",
                        "Жиілігі 5·10¹⁴ Гц фотон E ≈ 3,3·10⁻¹⁹ Дж береді. Біреуі аз, шоғырда көп.",
                        "A photon at 5·10¹⁴ Hz carries E ≈ 3.3·10⁻¹⁹ J. Tiny alone, huge in a beam."),
                    P("КВАНТ", KVANT,
                        "Щит питается светом станции. Значит, каждая пластина — это квантовая батарея.",
                        "Қалқан станция жарығымен қоректенеді. Демек, әр пластина — кванттық батарея.",
                        "The shield feeds on station light. So every panel is a quantum battery.")
                ]
            },
            10: {
                note: {
                    ru: "Финал трилогии: закон сохранения энергии сводит три щита в одну систему.",
                    kk: "Трилогия финалы: энергияның сақталу заңы үш қалқанды бір жүйеге біріктіреді.",
                    en: "Trilogy finale: conservation of energy joins three shields into one system."
                },
                panels: [
                    P("КИРА", KIRA,
                        "Три щита дают 97% защиты. Остальное — запас, который мы держим в журнале.",
                        "Үш қалқан 97% қорғаныс береді. Қалғаны — журналда ұстаған қор.",
                        "Three shields give 97% protection. The rest is reserve kept in the log."),
                    P("КВАНТ", KVANT,
                        "Курсант, курс пройден. Ты прошёл три города — и ни разу не забыл перевести единицы.",
                        "Курсант, курс аяқталды. Үш қаладан өттің — және бірліктерді аударуды ұмытпадың.",
                        "Cadet, the course is complete. Three cities behind you — and never once a forgotten unit.")
                ]
            }
        }
    };

    window.TRILOGY_EXTRA = EXTRA;
})();
