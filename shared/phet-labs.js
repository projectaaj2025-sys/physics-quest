/* ============================================================
   OFFICIAL PHET LABS — каталог официальных симуляторов PhET.
   Внешний симулятор загружается только по явному действию ученика.
   Задания выполняются внутри PhET; отметки самоконтроля сохраняются
   отдельно для каждого класса и не выдаются за автоматическую проверку.
   ============================================================ */
(function () {
    "use strict";

    const L = (ru, kk, en) => ({ ru, kk, en });
    const T = (title, instruction) => ({ title, instruction });
    const SIMS = {
        7: [
            {
                id: "forces-and-motion-basics",
                slug: "forces-and-motion-basics",
                icon: "F",
                accent: "#1479b8",
                title: L("Сила и движение: основы", "Күш және қозғалыс: негіздері", "Forces and Motion: Basics"),
                description: L(
                    "Перетягивание каната, движение, трение и ускорение: меняй силы и наблюдай за движением тела.",
                    "Арқан тарту, қозғалыс, үйкеліс және үдеу: күштерді өзгертіп, дененің қозғалысын бақыла.",
                    "Tug of war, motion, friction and acceleration: change forces and observe how an object moves."
                ),
                tasks: [
                    T(
                        L("Уравновешенные силы", "Теңгерілген күштер", "Balanced forces"),
                        L(
                            "Открой «Перетягивание каната», включи сумму сил и значения. Подбери одинаковые по модулю силы вправо и влево: сумма должна стать нулевой, а канат — неподвижным.",
                            "«Арқан тартыс» экранын ашып, күштердің қосындысы мен мәндерін қос. Оңға және солға модулі бірдей күштер таңда: қосынды нөлге тең болсын, арқан қозғалмасын.",
                            "Open Tug of War and turn on the sum of forces and values. Choose equal forces to the right and left: the sum must be zero and the rope must stay still."
                        )
                    ),
                    T(
                        L("Движение под действием силы", "Күш әсеріндегі қозғалыс", "Motion under a force"),
                        L(
                            "На экране «Движение» включи значения и скорость. Приложи постоянную силу к тележке, затем убери её и сравни, как скорость меняется в обоих случаях.",
                            "«Қозғалыс» экранында мәндер мен жылдамдықты қос. Арбаға тұрақты күш түсір, содан кейін күшті алып тастап, жылдамдықтың екі жағдайда қалай өзгеретінін салыстыр.",
                            "On the Motion screen, enable values and speed. Apply a constant force to the cart, then remove it and compare how the speed changes in each case."
                        )
                    ),
                    T(
                        L("Масса и ускорение", "Масса және үдеу", "Mass and acceleration"),
                        L(
                            "Открой «Ускорение». Не меняя приложенную силу, сравни движение малой и большой массы по графику ускорения и сделай вывод.",
                            "«Үдеу» экранын аш. Түсірілген күшті өзгертпей, кіші және үлкен массаның қозғалысын үдеу графигі арқылы салыстырып, қорытынды жаса.",
                            "Open Acceleration. Without changing the applied force, compare a small and a large mass using the acceleration graph and state your conclusion."
                        )
                    )
                ]
            },
            {
                id: "masses-and-springs",
                slug: "masses-and-springs",
                icon: "m",
                accent: "#8256b8",
                title: L("Массы и пружины", "Массалар мен серіппелер", "Masses and Springs"),
                description: L(
                    "Подвешивай грузы, измеряй растяжение и период колебаний, исследуй энергию пружинного маятника.",
                    "Жүктерді іліп, серіппенің созылуы мен тербеліс периодын өлше, серіппелі маятниктің энергиясын зертте.",
                    "Hang masses, measure spring extension and the period of oscillation, and investigate the energy of a mass–spring oscillator."
                ),
                tasks: [
                    T(
                        L("Равновесие груза", "Жүктің тепе-теңдігі", "Equilibrium of a mass"),
                        L(
                            "Открой «Лабораторию», включи линейку и подвесь груз. Увеличь массу и проследи, как меняется растяжение пружины и положение равновесия.",
                            "«Зертхана» экранын ашып, сызғышты қос және жүк іл. Массаны арттырып, серіппенің созылуы мен тепе-теңдік орнының қалай өзгеретінін бақыла.",
                            "Open Lab and enable the ruler, then hang a mass. Increase the mass and observe how the spring extension and equilibrium position change."
                        )
                    ),
                    T(
                        L("Период и масса", "Период және масса", "Period and mass"),
                        L(
                            "Включи секундомер. Запусти колебания с одинаковой начальной амплитудой для двух разных масс и сравни время десяти полных колебаний.",
                            "Секундомерді қос. Екі түрлі массаны бірдей бастапқы амплитудамен тербетіп, он толық тербеліске кеткен уақытты салыстыр.",
                            "Enable the stopwatch. Start oscillations with the same initial amplitude for two different masses and compare the time for ten complete cycles."
                        )
                    ),
                    T(
                        L("Превращения энергии", "Энергияның түрленуі", "Energy transformations"),
                        L(
                            "Открой «Энергия», включи диаграмму энергии и медленный режим. Проследи, как при колебаниях потенциальная энергия переходит в кинетическую и обратно.",
                            "«Энергия» экранын ашып, энергия диаграммасы мен баяу режимді қос. Тербеліс кезінде потенциалдық энергияның кинетикалық энергияға және керісінше қалай түрленетінін бақыла.",
                            "Open Energy, enable the energy graph and slow motion. Observe how potential energy changes into kinetic energy and back during oscillation."
                        )
                    )
                ]
            },
            {
                id: "energy-skate-park-basics",
                slug: "energy-skate-park-basics",
                icon: "E",
                accent: "#16866f",
                title: L("Скейт-парк: энергия", "Скейт саябағы: энергия", "Energy Skate Park: Basics"),
                description: L(
                    "Запускай скейтеров на разных трассах и наблюдай кинетическую, потенциальную и тепловую энергию.",
                    "Скейтерлерді әртүрлі трассаларда жүргізіп, кинетикалық, потенциалдық және жылу энергиясын бақыла.",
                    "Send skaters along different tracks and observe kinetic, potential and thermal energy."
                ),
                tasks: [
                    T(
                        L("Высота и энергия", "Биіктік және энергия", "Height and energy"),
                        L(
                            "На экране «Введение» включи столбчатую диаграмму и сетку. Помести скейтера в высшую точку трассы, затем в низшую и сравни запасы энергии.",
                            "«Кіріспе» экранында бағандық диаграмма мен торды қос. Скейтерді трассаның ең биік, содан кейін ең төмен нүктесіне қойып, энергияларды салыстыр.",
                            "On the Intro screen, enable the bar graph and grid. Place the skater at the highest and then the lowest point of the track and compare the energies."
                        )
                    ),
                    T(
                        L("Скорость внизу", "Төменгі нүктедегі жылдамдық", "Speed at the bottom"),
                        L(
                            "Включи спидометр. Отпусти скейтера с двух разных высот без трения и сравни его скорость в низшей точке одной и той же трассы.",
                            "Спидометрді қос. Үйкеліссіз скейтерді екі түрлі биіктіктен жіберіп, бір трассаның төменгі нүктесіндегі жылдамдықтарын салыстыр.",
                            "Enable the speedometer. Release the skater from two different heights without friction and compare the speeds at the bottom of the same track."
                        )
                    ),
                    T(
                        L("Работа трения", "Үйкелістің жұмысы", "Work done by friction"),
                        L(
                            "Открой «Трение» и повтори одинаковый спуск сначала без трения, затем с трением. Проследи рост тепловой энергии и остановку скейтера.",
                            "«Үйкеліс» экранын ашып, бірдей сырғанауды алдымен үйкеліссіз, содан кейін үйкеліспен қайтала. Жылу энергиясының өсуін және скейтердің тоқтауын бақыла.",
                            "Open Friction and repeat the same descent first without friction and then with friction. Observe the increase in thermal energy and the skater stopping."
                        )
                    )
                ]
            }
        ],
        8: [
            {
                id: "circuit-construction-kit-dc",
                slug: "circuit-construction-kit-dc",
                icon: "U",
                accent: "#c37a08",
                title: L("Конструктор цепей: постоянный ток", "Тізбек құрастыру жинағы: тұрақты ток", "Circuit Construction Kit: DC"),
                description: L(
                    "Собирай цепи из батарей, проводов, ламп и выключателей, подключай измерительные приборы.",
                    "Батареялар, сымдар, шамдар мен ажыратқыштардан тізбек құрастырып, өлшеу құралдарын қос.",
                    "Build circuits from batteries, wires, bulbs and switches, then connect measuring instruments."
                ),
                tasks: [
                    T(
                        L("Замкнутая цепь", "Тұйықталған тізбек", "A closed circuit"),
                        L(
                            "Открой «Лабораторию». Перенеси на стол батарею, лампу, провода и выключатель. Собери цепь так, чтобы при замыкании выключателя лампа загоралась.",
                            "«Зертхана» экранын аш. Батареяны, шамды, сымдар мен ажыратқышты жұмыс үстеліне апар. Ажыратқыш тұйықталғанда шам жанатындай тізбек құрастыр.",
                            "Open Lab. Drag a battery, a bulb, wires and a switch onto the workbench. Build a circuit in which the bulb lights when the switch is closed."
                        )
                    ),
                    T(
                        L("Измерение тока и напряжения", "Ток пен кернеуді өлшеу", "Measuring current and voltage"),
                        L(
                            "В собранной цепи подключи амперметр последовательно, а вольтметр — параллельно лампе. Запиши оба показания при замкнутой цепи.",
                            "Құрастырылған тізбекке амперметрді тізбектей, вольтметрді шамға параллель қос. Тізбек тұйықталғандағы екі көрсеткішті жазып ал.",
                            "In the circuit you built, connect the ammeter in series and the voltmeter in parallel with the bulb. Record both readings with the circuit closed."
                        )
                    ),
                    T(
                        L("Две лампы", "Екі шам", "Two bulbs"),
                        L(
                            "Собери по очереди последовательное и параллельное соединение двух одинаковых ламп. Сравни их накал и проверь, что происходит при размыкании одной ветви.",
                            "Екі бірдей шамды алдымен тізбектей, содан кейін параллель жалға. Жарқырауын салыстыр және бір тармақ ажыратылғанда не болатынын тексер.",
                            "Connect two identical bulbs first in series and then in parallel. Compare their brightness and observe what happens when one branch is opened."
                        )
                    )
                ]
            },
            {
                id: "states-of-matter-basics",
                slug: "states-of-matter-basics",
                icon: "T",
                accent: "#3479c5",
                title: L("Агрегатные состояния вещества", "Заттың агрегаттық күйлері", "States of Matter: Basics"),
                description: L(
                    "Нагревай и охлаждай вещество, наблюдай частицы, температуру и переходы между состояниями.",
                    "Затты қыздырып, салқындат, бөлшектерді, температураны және агрегаттық күйлердің ауысуын бақыла.",
                    "Heat and cool substances while observing particles, temperature and changes of state."
                ),
                tasks: [
                    T(
                        L("Три состояния", "Үш агрегаттық күй", "Three states"),
                        L(
                            "На экране «Состояния» выбери по очереди твёрдое, жидкое и газообразное состояние. Сравни расположение и движение частиц в трёх случаях.",
                            "«Жағдайлар» экранында қатты, сұйық және газ күйін кезекпен таңда. Үш жағдайдағы бөлшектердің орналасуын және қозғалысын салыстыр.",
                            "On the States screen, select solid, liquid and gas in turn. Compare the arrangement and motion of the particles in all three cases."
                        )
                    ),
                    T(
                        L("Нагрев и движение частиц", "Қыздыру және бөлшектер қозғалысы", "Heating and particle motion"),
                        L(
                            "Добавляй тепло небольшими порциями и наблюдай термометр и скорость движения частиц. Затем отбери тепло и сравни результат.",
                            "Жылуды аз мөлшермен қосып, термометр мен бөлшектердің қозғалыс жылдамдығын бақыла. Содан кейін жылуды алып, нәтижені салыстыр.",
                            "Add heat in small steps while observing the thermometer and the speed of the particles. Then remove heat and compare the result."
                        )
                    ),
                    T(
                        L("Фазовый переход", "Фазаның өзгеруі", "A change of phase"),
                        L(
                            "Открой «Фазовые изменения», выбери воду. Медленно нагрей лёд до плавления и проследи температуру и вид вещества до и после перехода.",
                            "«Фазаның өзгерістері» экранын ашып, суды таңда. Мұзды ерігенге дейін баяу қыздыр және ауысуға дейінгі және кейінгі температура мен заттың түрін бақыла.",
                            "Open Phase Changes and choose water. Slowly heat the ice until it melts, observing the temperature and appearance before and after the transition."
                        )
                    )
                ]
            },
            {
                id: "geometric-optics",
                slug: "geometric-optics",
                icon: "F",
                accent: "#7354bc",
                title: L("Геометрическая оптика", "Геометриялық оптика", "Geometric Optics"),
                description: L(
                    "Перемещай предмет, линзу и зеркало, наблюдай ход лучей, фокус и изображение.",
                    "Затты, линзаны және айнаны жылжытып, сәулелердің жүруін, фокус пен кескінді бақыла.",
                    "Move the object, lens and mirror while observing rays, focus and the image."
                ),
                tasks: [
                    T(
                        L("Фокус линзы", "Линзаның фокусы", "Focal point of a lens"),
                        L(
                            "Открой «Линза» и включи ход нескольких лучей. Перемещай предмет вдоль главной оптической оси и найди точки, через которые проходят лучи после преломления.",
                            "«Линза» экранын ашып, бірнеше сәуленің жүруін қос. Затты бас оптикалық өське бойлай жылжытып, сынған сәулелер өтетін нүктелерді тап.",
                            "Open Lens and enable several rays. Move the object along the principal optical axis and locate the points through which the refracted rays pass."
                        )
                    ),
                    T(
                        L("Размер изображения", "Кескіннің өлшемі", "Image size"),
                        L(
                            "Не меняя линзу, приближай и удаляй предмет. Для каждого положения отметь размер, ориентацию и тип изображения: действительное или мнимое.",
                            "Линзаны өзгертпей, затты жақындатып, алыстат. Әр орын үшін кескіннің өлшемін, бағытын және түрін: нақты немесе жалған екенін белгіле.",
                            "Without changing the lens, move the object nearer and farther away. For each position, note the image size, orientation and whether it is real or virtual."
                        )
                    ),
                    T(
                        L("Изображение в зеркале", "Айнадағы кескін", "Image in a mirror"),
                        L(
                            "Открой «Зеркало» и перемещай предмет перед зеркалом. Проследи, где появляется изображение и как оно меняется; сравни отражение света с преломлением в линзе.",
                            "«Айна» экранын ашып, затты айна алдында жылжыт. Кескіннің қайда пайда болатынын және қалай өзгеретінін бақылап, жарықтың шағылуын линзадағы сынумен салыстыр.",
                            "Open Mirror and move the object in front of the mirror. Observe where the image appears and how it changes; compare reflection with refraction in the lens."
                        )
                    )
                ]
            }
        ],
        9: [
            {
                id: "pendulum-lab",
                slug: "pendulum-lab",
                icon: "T",
                accent: "#1a8095",
                title: L("Лаборатория маятника", "Маятник зертханасы", "Pendulum Lab"),
                description: L(
                    "Исследуй один или два маятника: изменяй длину, массу и гравитацию, измеряй период и энергию.",
                    "Бір немесе екі маятникті зертте: ұзындықты, массаны және гравитацияны өзгертіп, период пен энергияны өлше.",
                    "Investigate one or two pendulums: change length, mass and gravity, and measure period and energy."
                ),
                tasks: [
                    T(
                        L("Измерение периода", "Периодты өлшеу", "Measuring the period"),
                        L(
                            "Открой «Лабораторию», включи секундомер и линейку. Отклоняй маятник на небольшой угол и измерь время десяти полных колебаний.",
                            "«Зертхана» экранын ашып, секундомер мен сызғышты қос. Маятникті шағын бұрышқа ауытқып, он толық тербеліске кеткен уақытты өлше.",
                            "Open Lab and enable the stopwatch and ruler. Displace the pendulum through a small angle and measure the time for ten complete oscillations."
                        )
                    ),
                    T(
                        L("Зависимость от длины", "Ұзындыққа тәуелділік", "Dependence on length"),
                        L(
                            "Не меняя массу и гравитацию, измерь период при короткой и длинной нити. Используй одинаковый начальный угол и сравни результаты.",
                            "Масса мен гравитацияны өзгертпей, қысқа және ұзын жіп кезіндегі периодты өлше. Бастапқы бұрышты бірдей етіп, нәтижелерді салыстыр.",
                            "Without changing mass or gravity, measure the period with a short and a long string. Use the same initial angle and compare the results."
                        )
                    ),
                    T(
                        L("Другая гравитация", "Басқа гравитация", "Different gravity"),
                        L(
                            "При неизменной длине сравни период на Земле и на Луне. Запиши, где маятник колеблется медленнее, и проверь результат на другой планете.",
                            "Ұзындықты өзгертпей, Жер мен Айдағы периодты салыстыр. Маятникнің қай жерде баяу тербелетінін жазып, нәтижені басқа планетада тексер.",
                            "With the length unchanged, compare the period on Earth and the Moon. Record where the pendulum oscillates more slowly and check the result on another planet."
                        )
                    )
                ]
            },
            {
                id: "projectile-motion",
                slug: "projectile-motion",
                icon: "v",
                accent: "#b85a35",
                title: L("Движение снаряда", "Снаряд қозғалысы", "Projectile Motion"),
                description: L(
                    "Запускай снаряды под разными углами, измеряй дальность и исследуй компоненты скорости.",
                    "Снарядтарды әртүрлі бұрышпен атып, ұшу қашықтығын өлшеп, жылдамдық құрауыштарын зертте.",
                    "Launch projectiles at different angles, measure range and investigate the components of velocity."
                ),
                tasks: [
                    T(
                        L("Дальность полёта", "Ұшу қашықтығы", "Range of flight"),
                        L(
                            "На экране «Введение» выбери угол 45° и включи измерительную ленту. Запусти снаряд и измерь дальность от пусковой установки до точки приземления.",
                            "«Кіріспе» экранында 45° бұрышты таңдап, өлшеу лентасын қос. Снарядты атып, атқыштан жерге түскен нүктеге дейінгі қашықтықты өлше.",
                            "On the Intro screen, choose 45° and enable the measuring tape. Launch the projectile and measure the distance from the launcher to the landing point."
                        )
                    ),
                    T(
                        L("Сравнение углов", "Бұрыштарды салыстыру", "Comparing angles"),
                        L(
                            "Сохрани начальную скорость, высоту и тип снаряда. Сравни дальность при углах 30° и 60° с одинаковыми остальными настройками и объясни результат.",
                            "Бастапқы жылдамдықты, биіктікті және снаряд түрін сақта. Басқа параметрлер бірдей болғанда 30° және 60° бұрыштардағы ұшу қашықтығын салыстырып, нәтижені түсіндір.",
                            "Keep the initial speed, height and projectile type unchanged. Compare the ranges at 30° and 60° with all other settings identical and explain the result."
                        )
                    ),
                    T(
                        L("Скорость в высшей точке", "Ең биік нүктедегі жылдамдық", "Velocity at the highest point"),
                        L(
                            "Открой «Векторы», включи компоненты скорости. Запусти снаряд, поставь паузу в высшей точке и проверь горизонтальную и вертикальную компоненты.",
                            "«Векторлар» экранын ашып, жылдамдық құрауыштарын қос. Снарядты атып, ең биік нүктеде тоқтатып, көлденең және тік құрауыштарды тексер.",
                            "Open Vectors and enable velocity components. Launch the projectile, pause at the highest point and inspect the horizontal and vertical components."
                        )
                    )
                ]
            },
            {
                id: "waves-intro",
                slug: "waves-intro",
                icon: "λ",
                accent: "#2570bc",
                title: L("Волны: введение", "Толқындар: кіріспе", "Waves: Introduction"),
                description: L(
                    "Исследуй волны на воде, звуковые и световые волны с лентой, секундомером и графиками.",
                    "Су толқындарын, дыбыс және жарық толқындарын өлшеу лентасы, секундомер және графиктермен зертте.",
                    "Investigate water, sound and light waves using a measuring tape, stopwatch and graphs."
                ),
                tasks: [
                    T(
                        L("Длина волны", "Толқын ұзындығы", "Wavelength"),
                        L(
                            "Открой «Вода» с одним источником. Включи измерительную ленту, поставь паузу и измерь расстояние между двумя соседними гребнями.",
                            "Бір көзі бар «Су» экранын аш. Өлшеу лентасын қосып, тоқтат және көрші екі толқын шыңының ара қашықтығын өлше.",
                            "Open Water with one source. Enable the measuring tape, pause the simulation and measure the distance between two neighbouring crests."
                        )
                    ),
                    T(
                        L("Частота и длина волны", "Жиілік және толқын ұзындығы", "Frequency and wavelength"),
                        L(
                            "Не меняя скорость распространения, увеличь частоту источника. Повтори измерение длины волны и сравни её с первым результатом.",
                            "Таралу жылдамдығын өзгертпей, көздің жиілігін арттыр. Толқын ұзындығын қайта өлшеп, алғашқы нәтижемен салыстыр.",
                            "Without changing the propagation speed, increase the source frequency. Measure the wavelength again and compare it with the first result."
                        )
                    ),
                    T(
                        L("Два источника", "Екі көз", "Two sources"),
                        L(
                            "На экране «Вода» включи два источника с одинаковой частотой. Проследи области усиления и ослабления волн и отметь их на неподвижном кадре.",
                            "«Су» экранында жиілігі бірдей екі көзді қос. Толқындардың күшею және әлсіреу аймақтарын бақылап, оларды тоқтатылған кадрда белгіле.",
                            "On the Water screen, enable two sources with the same frequency. Observe regions of reinforcement and cancellation and identify them in a paused frame."
                        )
                    )
                ]
            }
        ]
    };

    const UI = {
        ru: {
            open: "Официальные PhET-симуляторы",
            entryKicker: "ОФИЦИАЛЬНЫЙ PHET · {grade} КЛАСС",
            entryTitle: "Симуляторы с практическими заданиями",
            entryDescription: "Выбери одну из {count} установок. Задания видны рядом с симулятором, а отметки сохраняются на этом устройстве.",
            overallProgress: "Выполнено заданий: {done} из {total}",
            taskCount: "{count} задания в симуляторе",
            launch: "Запустить",
            levelKicker: "УРОВЕНЬ {level} · ОФИЦИАЛЬНЫЙ PHET",
            levelTasks: "{count} практических задания по теме уровня",
            launchLevel: "Открыть лабораторию",
            official: "Официальный симулятор PhET",
            university: "Интерактивная лаборатория University of Colorado Boulder",
            guide: "Задания в симуляторе",
            selfReport: "Выполни действие в PhET, затем отметь его. Это самоконтроль, а не автоматическая проверка внутри PhET.",
            taskNumber: "Задание {number}",
            taskProgress: "Выполнено: {done} из {total}",
            markDone: "Отметить выполненным",
            done: "Выполнено",
            external: "Открыть на сайте PhET ↗",
            reload: "Перезагрузить",
            close: "Закрыть и вернуться",
            closeShort: "Закрыть симулятор",
            loading: "Загружаем официальный симулятор PhET…",
            loadError: "Симулятор долго загружается. Проверь интернет или открой его по прямой ссылке на сайте PhET.",
            online: "Для PhET нужен интернет. Отметки заданий и прогресс Физика-Квеста сохраняются.",
            grade: "{grade} класс · PhET",
            gradeLevel: "{grade} класс · уровень {level} · PhET",
            dialog: "Официальный PhET-симулятор: {title}"
        },
        kk: {
            open: "Ресми PhET симуляторлары",
            entryKicker: "РЕСМИ PHET · {grade}-СЫНЫП",
            entryTitle: "Практикалық тапсырмасы бар симуляторлар",
            entryDescription: "{count} құралдың бірін таңда. Тапсырмалар симулятордың қасында көрінеді, белгілер осы құрылғыда сақталады.",
            overallProgress: "Орындалған тапсырмалар: {total} ішінен {done}",
            taskCount: "Симулятордағы {count} тапсырма",
            launch: "Іске қосу",
            levelKicker: "{level}-ДЕҢГЕЙ · РЕСМИ PHET",
            levelTasks: "Деңгей тақырыбы бойынша {count} практикалық тапсырма",
            launchLevel: "Зертхананы ашу",
            official: "Ресми PhET симуляторы",
            university: "University of Colorado Boulder интерактивті зертханасы",
            guide: "Симулятордағы тапсырмалар",
            selfReport: "Әрекетті PhET ішінде орындап, содан кейін белгіле. Бұл өзін-өзі тексеру, PhET ішіндегі автоматты тексеру емес.",
            taskNumber: "{number}-тапсырма",
            taskProgress: "Орындалды: {total} ішінен {done}",
            markDone: "Орындалды деп белгілеу",
            done: "Орындалды",
            external: "PhET сайтында ашу ↗",
            reload: "Қайта жүктеу",
            close: "Жабу және оралу",
            closeShort: "Симуляторды жабу",
            loading: "Ресми PhET симуляторы жүктелуде…",
            loadError: "Симулятор ұзақ жүктелуде. Интернетті тексер немесе PhET сайтындағы тікелей сілтеме арқылы аш.",
            online: "PhET үшін интернет қажет. Тапсырма белгілері мен «Физика-Квест» прогресі сақталады.",
            grade: "{grade}-сынып · PhET",
            gradeLevel: "{grade}-сынып · {level}-деңгей · PhET",
            dialog: "Ресми PhET симуляторы: {title}"
        },
        en: {
            open: "Official PhET simulations",
            entryKicker: "OFFICIAL PHET · GRADE {grade}",
            entryTitle: "Simulations with practical tasks",
            entryDescription: "Choose one of {count} simulations. Tasks appear beside the simulation, and your checkmarks are saved on this device.",
            overallProgress: "Tasks completed: {done} of {total}",
            taskCount: "{count} tasks in the simulation",
            launch: "Launch",
            levelKicker: "LEVEL {level} · OFFICIAL PHET",
            levelTasks: "{count} practical tasks on this level topic",
            launchLevel: "Open laboratory",
            official: "Official PhET simulation",
            university: "Interactive laboratory by University of Colorado Boulder",
            guide: "Tasks in the simulation",
            selfReport: "Perform the action in PhET, then mark it complete. This is self-assessment, not automatic verification inside PhET.",
            taskNumber: "Task {number}",
            taskProgress: "Completed: {done} of {total}",
            markDone: "Mark as completed",
            done: "Completed",
            external: "Open on the PhET website ↗",
            reload: "Reload",
            close: "Close and return",
            closeShort: "Close simulation",
            loading: "Loading the official PhET simulation…",
            loadError: "The simulation is taking a long time to load. Check your connection or use the direct PhET link.",
            online: "PhET requires an internet connection. Task checkmarks and Physics Quest progress are preserved.",
            grade: "Grade {grade} · PhET",
            gradeLevel: "Grade {grade} · Level {level} · PhET",
            dialog: "Official PhET simulation: {title}"
        }
    };

    // Официальные симуляторы живут только внутри тематических мини-игр.
    // Общего каталога и отдельной кнопки PhET больше нет.
    const LEVEL_SIMULATIONS = {
        7: {
            16: "forces-and-motion-basics",
            19: "masses-and-springs",
            33: "energy-skate-park-basics"
        },
        8: {
            8: "states-of-matter-basics",
            25: "circuit-construction-kit-dc",
            45: "states-of-matter-basics",
            46: "states-of-matter-basics",
            47: "circuit-construction-kit-dc",
            48: "circuit-construction-kit-dc",
            49: "circuit-construction-kit-dc",
            50: "circuit-construction-kit-dc",
            51: "circuit-construction-kit-dc",
            55: "geometric-optics"
        },
        9: {
            30: "waves-intro",
            46: "projectile-motion",
            47: "pendulum-lab",
            48: "waves-intro"
        }
    };
    const PHET_ONLY_LEVELS = { 7: [16, 19, 33], 8: [], 9: [] };

    let initialized = false;
    let active = false;
    let activeGrade = null;
    let activeSimulation = null;
    let activeLevelId = null;
    let returnFocus = null;
    let pausedByPhet = false;
    let previousBodyOverflow = "";
    let loadTimer = 0;

    function grade() {
        const value = Number(window.CURRENT_GRADE);
        return SIMS[value] ? value : 8;
    }
    function lang() {
        const value = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
        return UI[value] ? value : "ru";
    }
    function text(key, replacements) {
        let value = UI[lang()][key] || UI.en[key] || key;
        Object.entries(replacements || {}).forEach(([name, replacement]) => {
            value = value.replace("{" + name + "}", String(replacement));
        });
        return value;
    }
    function localized(value) {
        return value[lang()] || value.en;
    }
    function simulations(forGrade) {
        return SIMS[forGrade] || [];
    }
    function exactSimulation(forGrade, simulationId) {
        return simulations(forGrade).find((sim) => sim.id === simulationId) || null;
    }
    function suggestedSimulation(forGrade) {
        const level = typeof Game !== "undefined" ? Number(Game.currentLevel) : 0;
        const suggestedId = LEVEL_SIMULATIONS[forGrade] && LEVEL_SIMULATIONS[forGrade][level];
        return exactSimulation(forGrade, suggestedId) || simulations(forGrade)[0] || null;
    }
    function selectedSimulation(forGrade, simulationId) {
        return exactSimulation(forGrade, simulationId) || suggestedSimulation(forGrade);
    }
    function simulationUrl(forGrade, simulationId) {
        const cfg = selectedSimulation(forGrade, simulationId);
        if (!cfg) return "";
        return `https://phet.colorado.edu/sims/html/${cfg.slug}/latest/${cfg.slug}_all.html?locale=${lang()}`;
    }
    function byId(id) {
        return document.getElementById(id);
    }
    function setText(id, value) {
        const element = byId(id);
        if (element) element.textContent = value;
    }
    function element(tag, className, value) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (value !== undefined) node.textContent = value;
        return node;
    }

    function storageKey(forGrade) {
        return `physicsquest${forGrade}_phet_tasks_v1`;
    }
    function readStoredTasks(forGrade) {
        const key = storageKey(forGrade);
        let value = null;
        if (typeof Storage !== "undefined" && typeof Storage.load === "function") value = Storage.load(key, {});
        else {
            try { value = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { value = {}; }
        }
        return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    }
    function writeStoredTasks(forGrade, value) {
        const key = storageKey(forGrade);
        if (typeof Storage !== "undefined" && typeof Storage.save === "function") return Storage.save(key, value);
        try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
    }
    function completedTasks(forGrade, simulationId) {
        const cfg = exactSimulation(forGrade, simulationId);
        if (!cfg) return new Set();
        const saved = readStoredTasks(forGrade)[simulationId];
        if (!Array.isArray(saved)) return new Set();
        return new Set(saved.map(Number).filter((index) => Number.isInteger(index) && index >= 0 && index < cfg.tasks.length));
    }
    function progress(forGrade, simulationId) {
        const cfg = exactSimulation(forGrade, simulationId);
        return { done: completedTasks(forGrade, simulationId).size, total: cfg ? cfg.tasks.length : 0 };
    }
    function toggleTask(taskIndex) {
        if (!active || !activeGrade || !activeSimulation) return;
        const cfg = exactSimulation(activeGrade, activeSimulation);
        if (!cfg || !Number.isInteger(taskIndex) || taskIndex < 0 || taskIndex >= cfg.tasks.length) return;
        const done = completedTasks(activeGrade, activeSimulation);
        if (done.has(taskIndex)) done.delete(taskIndex); else done.add(taskIndex);
        const all = readStoredTasks(activeGrade);
        all[activeSimulation] = [...done].sort((a, b) => a - b);
        writeStoredTasks(activeGrade, all);
        renderTasks(activeGrade, cfg);
        refreshLevelCards();
        document.dispatchEvent(new CustomEvent("pq:phet-task-changed", {
            detail: { grade: activeGrade, simulation: activeSimulation, taskIndex, done: done.has(taskIndex) }
        }));
    }

    function ensureDOM() {
        if (byId("pq-phet-overlay")) return;
        const overlay = document.createElement("div");
        overlay.id = "pq-phet-overlay";
        overlay.className = "pq-phet-overlay";
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-hidden", "true");
        overlay.setAttribute("aria-labelledby", "pq-phet-title");
        overlay.setAttribute("aria-describedby", "pq-phet-description");
        overlay.innerHTML = `
            <div class="pq-phet-panel" data-pq-fullscreen-dialog>
                <header class="pq-phet-header">
                    <div class="pq-phet-heading">
                        <span class="pq-phet-grade" id="pq-phet-grade"></span>
                        <div>
                            <h2 id="pq-phet-title"></h2>
                            <p id="pq-phet-university"></p>
                        </div>
                    </div>
                    <div class="pq-phet-header-actions">
                        <a class="pq-phet-external" id="pq-phet-external-top" target="_blank" rel="noopener noreferrer"></a>
                        <button class="pq-phet-tool" id="pq-phet-fullscreen" type="button"></button>
                        <button class="pq-phet-x" id="pq-phet-x" type="button">×</button>
                    </div>
                </header>
                <div class="pq-phet-body">
                    <aside class="pq-phet-guide">
                        <span class="pq-phet-official" id="pq-phet-official"></span>
                        <p id="pq-phet-description"></p>
                        <h3 id="pq-phet-guide-title"></h3>
                        <div class="pq-phet-task-progress" id="pq-phet-task-progress" role="status"></div>
                        <ol id="pq-phet-tasks"></ol>
                        <p class="pq-phet-self-report" id="pq-phet-self-report"></p>
                        <a class="pq-phet-external pq-phet-external-side" id="pq-phet-external-side" target="_blank" rel="noopener noreferrer"></a>
                    </aside>
                    <div class="pq-phet-frame-wrap">
                        <iframe id="pq-phet-frame" src="about:blank" allow="fullscreen; autoplay; clipboard-write" referrerpolicy="no-referrer"></iframe>
                        <div class="pq-phet-loading" id="pq-phet-loading" role="status" hidden>
                            <span class="pq-phet-spinner" aria-hidden="true"></span>
                            <strong id="pq-phet-loading-text"></strong>
                        </div>
                        <div class="pq-phet-load-error" id="pq-phet-load-error" role="alert" hidden></div>
                    </div>
                </div>
                <footer class="pq-phet-footer">
                    <small id="pq-phet-online"></small>
                    <div class="pq-phet-footer-actions">
                        <a class="pq-phet-external pq-phet-external-mobile" id="pq-phet-external-mobile" target="_blank" rel="noopener noreferrer" aria-label="PhET">PhET ↗</a>
                        <button class="pq-phet-tool" id="pq-phet-reload" type="button"></button>
                        <button class="pq-phet-close" id="pq-phet-close" type="button"></button>
                    </div>
                </footer>
            </div>`;
        document.body.appendChild(overlay);
    }

    function levelSimulation(forGrade, levelId) {
        const simulationId = LEVEL_SIMULATIONS[forGrade] && LEVEL_SIMULATIONS[forGrade][Number(levelId)];
        return exactSimulation(forGrade, simulationId);
    }

    function createLevelCard(forGrade, levelId, expanded = false) {
        const cfg = levelSimulation(forGrade, levelId);
        if (!cfg) return null;
        const state = progress(forGrade, cfg.id);
        const card = element("section", "pq-phet-level-card" + (state.done === state.total ? " complete" : ""));
        card.dataset.phetLevelCard = "true";
        card.dataset.grade = String(forGrade);
        card.dataset.levelId = String(levelId);
        card.dataset.simulation = cfg.id;
        card.dataset.expanded = expanded ? "true" : "false";
        card.style.setProperty("--phet-accent", cfg.accent);
        card.setAttribute("aria-labelledby", `pq-phet-level-title-${forGrade}-${levelId}`);

        const mark = element("div", "pq-phet-level-mark", "PhET");
        mark.setAttribute("aria-hidden", "true");
        const body = element("div", "pq-phet-level-body");
        const kicker = element("span", "pq-phet-level-kicker", text("levelKicker", { level: levelId }));
        const title = element("h4", "pq-phet-level-title", localized(cfg.title));
        title.id = `pq-phet-level-title-${forGrade}-${levelId}`;
        const meta = element("div", "pq-phet-level-meta");
        const taskCount = element("span", "", text("levelTasks", { count: cfg.tasks.length }));
        const progressEl = element("strong", "pq-phet-level-progress", `${state.done}/${state.total}`);
        progressEl.setAttribute("aria-label", text("taskProgress", state));
        meta.append(taskCount, progressEl);
        body.append(kicker, title);
        if (expanded) body.appendChild(element("p", "pq-phet-level-description", localized(cfg.description)));
        body.appendChild(meta);

        const launch = element("button", "pq-phet-level-open", "▶ " + text("launchLevel"));
        launch.type = "button";
        launch.dataset.phetSim = cfg.id;
        launch.dataset.levelId = String(levelId);
        launch.setAttribute("aria-label", `${text("launchLevel")}: ${localized(cfg.title)}`);
        launch.addEventListener("click", () => open(forGrade, launch, cfg.id, { levelId: Number(levelId) }));
        card.append(mark, body, launch);
        return card;
    }

    function refreshLevelCards() {
        document.querySelectorAll("[data-phet-level-card]").forEach((card) => {
            const fresh = createLevelCard(Number(card.dataset.grade), Number(card.dataset.levelId), card.dataset.expanded === "true");
            if (fresh) card.replaceWith(fresh);
        });
    }

    function installLevelConfigs() {
        const configs = window.GRADE_LAB_GAMES_CONFIG || {};
        Object.entries(configs).forEach(([levelId, cfg]) => {
            if (cfg && !cfg.levelId) cfg.levelId = Number(levelId);
        });
        const currentGrade = grade();
        (PHET_ONLY_LEVELS[currentGrade] || []).forEach((levelId) => {
            if (configs[levelId]) return;
            const cfg = levelSimulation(currentGrade, levelId);
            if (!cfg) return;
            configs[levelId] = {
                type: "phet",
                levelId,
                phetSimulation: cfg.id,
                title: "🌐 " + cfg.title.ru,
                titleKk: "🌐 " + cfg.title.kk,
                titleEn: "🌐 " + cfg.title.en,
                desc: "Исследуй тему уровня в официальном симуляторе PhET и выполни три практических задания.",
                descKk: "Деңгей тақырыбын ресми PhET симуляторында зерттеп, үш практикалық тапсырманы орында.",
                descEn: "Explore the level topic in the official PhET simulation and complete three practical tasks."
            };
        });
        window.GRADE_LAB_GAMES_CONFIG = configs;
        // Удаляем каталог старой версии, если страница была перерисована без перезагрузки.
        byId("pq-phet-entry")?.remove();
    }

    function renderTasks(forGrade, cfg) {
        const tasks = byId("pq-phet-tasks");
        if (!tasks || !cfg) return;
        const done = completedTasks(forGrade, cfg.id);
        tasks.replaceChildren();
        cfg.tasks.forEach((task, index) => {
            const complete = done.has(index);
            const item = element("li", "pq-phet-task" + (complete ? " done" : ""));
            const heading = element("div", "pq-phet-task-heading");
            heading.append(
                element("span", "pq-phet-task-number", text("taskNumber", { number: index + 1 })),
                complete ? element("span", "pq-phet-task-check", "✓") : document.createTextNode("")
            );
            const title = element("strong", "pq-phet-task-title", localized(task.title));
            const instruction = element("p", "pq-phet-task-instruction", localized(task.instruction));
            const button = element("button", "pq-phet-task-button", complete ? "✓ " + text("done") : text("markDone"));
            button.type = "button";
            button.dataset.taskIndex = String(index);
            button.setAttribute("aria-pressed", String(complete));
            item.append(heading, title, instruction, button);
            tasks.appendChild(item);
        });
        setText("pq-phet-task-progress", text("taskProgress", { done: done.size, total: cfg.tasks.length }));
    }

    function renderDialog() {
        const currentGrade = activeGrade || grade();
        const cfg = activeGrade ? selectedSimulation(currentGrade, activeSimulation) : suggestedSimulation(currentGrade);
        if (!cfg) return;
        const url = simulationUrl(currentGrade, cfg.id);
        setText("pq-phet-grade", activeLevelId
            ? text("gradeLevel", { grade: currentGrade, level: activeLevelId })
            : text("grade", { grade: currentGrade }));
        setText("pq-phet-title", localized(cfg.title));
        setText("pq-phet-university", text("university"));
        setText("pq-phet-official", "✓ " + text("official"));
        setText("pq-phet-description", localized(cfg.description));
        setText("pq-phet-guide-title", text("guide"));
        setText("pq-phet-self-report", text("selfReport"));
        setText("pq-phet-online", text("online"));
        setText("pq-phet-loading-text", text("loading"));
        setText("pq-phet-load-error", text("loadError"));
        setText("pq-phet-external-top", text("external"));
        setText("pq-phet-external-side", text("external"));
        setText("pq-phet-reload", "↻ " + text("reload"));
        setText("pq-phet-close", text("close"));
        const closeX = byId("pq-phet-x");
        if (closeX) {
            closeX.title = text("closeShort");
            closeX.setAttribute("aria-label", text("closeShort"));
        }
        renderTasks(currentGrade, cfg);
        ["pq-phet-external-top", "pq-phet-external-side", "pq-phet-external-mobile"].forEach((id) => {
            const link = byId(id);
            if (link) {
                link.href = url;
                link.setAttribute("aria-label", text("external"));
            }
        });
        const frame = byId("pq-phet-frame");
        if (frame) frame.title = text("dialog", { title: localized(cfg.title) });
        const overlay = byId("pq-phet-overlay");
        if (overlay) {
            overlay.setAttribute("aria-label", text("dialog", { title: localized(cfg.title) }));
            overlay.dataset.grade = String(currentGrade);
            overlay.dataset.simulation = cfg.slug;
        }
        if (window.PQFullscreen) window.PQFullscreen.syncAll();
    }

    function clearLoadTimer() {
        if (loadTimer) window.clearTimeout(loadTimer);
        loadTimer = 0;
    }

    function loadSimulation() {
        if (!active) return;
        clearLoadTimer();
        const frame = byId("pq-phet-frame");
        const url = simulationUrl(activeGrade, activeSimulation);
        if (!frame || !url) return;
        frame.dataset.requestedUrl = url;
        frame.dataset.loadedUrl = "";
        byId("pq-phet-loading").hidden = false;
        byId("pq-phet-load-error").hidden = true;
        frame.src = url;
        loadTimer = window.setTimeout(() => {
            if (!active || frame.dataset.requestedUrl !== url || frame.dataset.loadedUrl === url) return;
            byId("pq-phet-loading").hidden = true;
            byId("pq-phet-load-error").hidden = false;
        }, 20000);
    }

    function open(forGrade, trigger, simulationId, context = {}) {
        if (!SIMS[forGrade]) return;
        if (!initialized) init();
        if (active) return;
        const cfg = selectedSimulation(forGrade, simulationId);
        if (!cfg) return;
        active = true;
        activeGrade = forGrade;
        activeSimulation = cfg.id;
        activeLevelId = Number(context.levelId || trigger?.dataset?.levelId) || null;
        returnFocus = trigger || document.activeElement;
        pausedByPhet = false;

        // PhET открывается поверх текущей мини-игры, не уничтожая её состояние.
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
        if (fullscreenElement && window.PQFullscreen) window.PQFullscreen.exit(fullscreenElement);

        const anotherGameOpen = !!document.querySelector("#lab-overlay.active, #pq-sim89-modal.open, #field-sim-modal.open");
        if (!anotherGameOpen && typeof Game !== "undefined" && Game.running && !Game.paused) {
            Game.pauseGame();
            pausedByPhet = true;
        }

        renderDialog();
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const overlay = byId("pq-phet-overlay");
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        loadSimulation();
        window.setTimeout(() => byId("pq-phet-x")?.focus(), 0);
        document.dispatchEvent(new CustomEvent("pq:phet-opened", { detail: { grade: activeGrade, simulation: activeSimulation, levelId: activeLevelId } }));
    }

    function close() {
        if (!active) return;
        active = false;
        clearLoadTimer();
        const overlay = byId("pq-phet-overlay");
        const finish = () => {
            document.body.style.overflow = previousBodyOverflow;
            if (pausedByPhet && typeof Game !== "undefined" && Game.paused) Game.resumeGame();
            pausedByPhet = false;
            let focusTarget = returnFocus && returnFocus.isConnected ? returnFocus : null;
            const simulationId = returnFocus && returnFocus.dataset ? returnFocus.dataset.phetSim : "";
            if (!focusTarget && simulationId) {
                focusTarget = [...document.querySelectorAll("[data-phet-sim]")].find((button) => button.dataset.phetSim === simulationId) || null;
            }
            if (focusTarget && typeof focusTarget.focus === "function") focusTarget.focus();
            returnFocus = null;
        };
        if (overlay) {
            overlay.classList.remove("active");
            overlay.setAttribute("aria-hidden", "true");
        }
        const frame = byId("pq-phet-frame");
        if (frame) {
            frame.src = "about:blank";
            frame.dataset.requestedUrl = "";
            frame.dataset.loadedUrl = "";
        }
        byId("pq-phet-loading").hidden = true;
        byId("pq-phet-load-error").hidden = true;
        if (window.PQFullscreen) {
            Promise.resolve(window.PQFullscreen.exit(overlay)).then(finish, finish);
        } else finish();
        document.dispatchEvent(new CustomEvent("pq:phet-closed", { detail: { grade: activeGrade, simulation: activeSimulation, levelId: activeLevelId } }));
        activeGrade = null;
        activeSimulation = null;
        activeLevelId = null;
    }

    function trapFocus(event) {
        const panel = byId("pq-phet-overlay")?.querySelector(".pq-phet-panel");
        if (!panel) return;
        const focusable = [...panel.querySelectorAll("button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex='-1'])")]
            .filter((element) => !element.hidden && element.getClientRects().length);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function bind() {
        byId("pq-phet-close").addEventListener("click", close);
        byId("pq-phet-x").addEventListener("click", close);
        byId("pq-phet-reload").addEventListener("click", loadSimulation);
        byId("pq-phet-tasks").addEventListener("click", (event) => {
            const button = event.target.closest("[data-task-index]");
            if (button) toggleTask(Number(button.dataset.taskIndex));
        });
        byId("pq-phet-overlay").addEventListener("click", (event) => {
            if (event.target === byId("pq-phet-overlay")) close();
        });
        byId("pq-phet-frame").addEventListener("load", () => {
            const frame = byId("pq-phet-frame");
            if (!active || !frame.dataset.requestedUrl || frame.src === "about:blank") return;
            frame.dataset.loadedUrl = frame.dataset.requestedUrl;
            clearLoadTimer();
            byId("pq-phet-loading").hidden = true;
            byId("pq-phet-load-error").hidden = true;
        });
        byId("pq-phet-frame").addEventListener("error", () => {
            if (!active) return;
            byId("pq-phet-loading").hidden = true;
            byId("pq-phet-load-error").hidden = false;
        });
        document.addEventListener("keydown", (event) => {
            if (!active) return;
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopImmediatePropagation();
                close();
            } else if (event.key === "Tab") trapFocus(event);
        }, true);
        if (window.PQFullscreen) {
            window.PQFullscreen.bind(byId("pq-phet-overlay"), byId("pq-phet-fullscreen"), byId("pq-phet-overlay").querySelector(".pq-phet-panel"));
        }
        window.addEventListener("pq:lang-changed", () => {
            const previousLang = byId("pq-phet-frame")?.dataset.lang || "";
            refreshLevelCards();
            renderDialog();
            if (active && previousLang !== lang()) loadSimulation();
            const frame = byId("pq-phet-frame");
            if (frame) frame.dataset.lang = lang();
        });
    }

    function init() {
        if (initialized) return;
        initialized = true;
        installLevelConfigs();
        ensureDOM();
        bind();
        refreshLevelCards();
        renderDialog();
        const frame = byId("pq-phet-frame");
        if (frame) frame.dataset.lang = lang();
    }

    window.PQPhETLabs = {
        init,
        open,
        close,
        reload: loadSimulation,
        createLevelCard,
        getLevelSimulation: levelSimulation,
        getLevelSimulations: () => LEVEL_SIMULATIONS,
        getUrl: (forGrade, simulationId) => simulationUrl(Number(forGrade) || grade(), simulationId),
        getSimulations: () => SIMS,
        getTaskProgress: (forGrade, simulationId) => progress(Number(forGrade) || grade(), simulationId),
        isOpen: () => active
    };
})();
