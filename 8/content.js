/* ===== Контент 8 класса: уровни, теория, конспект, эксперименты, сюжет ===== */
window.CURRENT_GRADE = 8;
window.GRADE_META = {
  grade: 8,
  code: "8",
  titleLine2: {
    ru: "ТЕПЛОВОЙ И ЭЛЕКТРИЧЕСКИЙ ЩИТ · 8 КЛАСС",
    kk: "ЖЫЛУ ЖӘНЕ ЭЛЕКТР ҚАЛҚАНЫ · 8-СЫНЫП",
    en: "THERMAL & ELECTRIC SHIELD · GRADE 8"
  },
  subtitle: {
    ru: "Защити город от астероидов знаниями физики 8 класса",
    kk: "8-сынып физика білімімен қаланы астероидтардан қорға",
    en: "Defend the city from asteroids with 8th-grade physics knowledge"
  },
  pdfFiles: {
    ru: { url: "assets/pdf/grade8-ru.pdf", filename: "Физика-8-класс-Конспект-РУС.pdf" },
    kk: { url: "assets/pdf/grade8-kk.pdf", filename: "Физика-8-сынып-Конспект-ҚАЗ.pdf" },
    en: { url: "assets/pdf/grade8-en.pdf", filename: "Physics-Grade-8-Notes-ENG.pdf" }
  }
};

const LEVELS_CONFIG = [
  {
    "id": 1,
    "topics": [
      "safety"
    ],
    "asteroidInterval": 6000,
    "asteroidSpeed": 0.8,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "bonus",
    "kind": "safety",
    "desc": "Правила безопасной работы в кабинете физики"
  },
  {
    "id": 2,
    "topics": [
      "p1"
    ],
    "asteroidInterval": 5825,
    "asteroidSpeed": 0.89,
    "cityHealth": 100,
    "shieldCapacity": 57,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p1",
    "kind": "lesson",
    "desc": "тепловое движение частиц, броуновское движение и диффузия"
  },
  {
    "id": 3,
    "topics": [
      "p2"
    ],
    "asteroidInterval": 5750,
    "asteroidSpeed": 0.92,
    "cityHealth": 100,
    "shieldCapacity": 59,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p2",
    "kind": "lesson",
    "desc": "температура, термометры и температурные шкалы"
  },
  {
    "id": 4,
    "topics": [
      "p3"
    ],
    "asteroidInterval": 5675,
    "asteroidSpeed": 0.95,
    "cityHealth": 100,
    "shieldCapacity": 61,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p3",
    "kind": "lesson",
    "desc": "внутренняя энергия и способы её изменения"
  },
  {
    "id": 5,
    "topics": [
      "p4"
    ],
    "asteroidInterval": 5600,
    "asteroidSpeed": 0.99,
    "cityHealth": 100,
    "shieldCapacity": 63,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p4",
    "kind": "lesson",
    "desc": "теплопроводность, конвекция и излучение"
  },
  {
    "id": 6,
    "topics": [
      "p5"
    ],
    "asteroidInterval": 5525,
    "asteroidSpeed": 1.02,
    "cityHealth": 100,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p5",
    "kind": "lesson",
    "desc": "теплопередача в природе, быту и технике"
  },
  {
    "id": 7,
    "topics": [
      "p6"
    ],
    "asteroidInterval": 5450,
    "asteroidSpeed": 1.06,
    "cityHealth": 100,
    "shieldCapacity": 67,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p6",
    "kind": "lesson",
    "desc": "роль тепла и терморегуляция живых организмов"
  },
  {
    "id": 8,
    "topics": [
      "p7"
    ],
    "asteroidInterval": 5375,
    "asteroidSpeed": 1.09,
    "cityHealth": 100,
    "shieldCapacity": 69,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p7",
    "kind": "lesson",
    "desc": "количество теплоты и удельная теплоёмкость"
  },
  {
    "id": 9,
    "topics": [
      "p8"
    ],
    "asteroidInterval": 5300,
    "asteroidSpeed": 1.13,
    "cityHealth": 100,
    "shieldCapacity": 71,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p8",
    "kind": "lesson",
    "desc": "энергия топлива и теплота сгорания"
  },
  {
    "id": 10,
    "topics": [
      "p9"
    ],
    "asteroidInterval": 5225,
    "asteroidSpeed": 1.17,
    "cityHealth": 100,
    "shieldCapacity": 73,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p9",
    "kind": "lesson",
    "desc": "сохранение и превращение энергии в тепловых процессах"
  },
  {
    "id": 11,
    "topics": [
      "p10"
    ],
    "asteroidInterval": 5150,
    "asteroidSpeed": 1.2,
    "cityHealth": 100,
    "shieldCapacity": 75,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p10",
    "kind": "lesson",
    "desc": "плавление, кристаллизация и теплота плавления"
  },
  {
    "id": 12,
    "topics": [
      "p11"
    ],
    "asteroidInterval": 5075,
    "asteroidSpeed": 1.23,
    "cityHealth": 100,
    "shieldCapacity": 77,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p11",
    "kind": "lesson",
    "desc": "парообразование, испарение и конденсация"
  },
  {
    "id": 13,
    "topics": [
      "p12"
    ],
    "asteroidInterval": 5000,
    "asteroidSpeed": 1.27,
    "cityHealth": 100,
    "shieldCapacity": 79,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p12",
    "kind": "lesson",
    "desc": "кипение, теплота парообразования и влияние давления"
  },
  {
    "id": 14,
    "topics": [
      "p13"
    ],
    "asteroidInterval": 4925,
    "asteroidSpeed": 1.31,
    "cityHealth": 100,
    "shieldCapacity": 81,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p13",
    "kind": "lesson",
    "desc": "первый закон термодинамики и работа газа"
  },
  {
    "id": 15,
    "topics": [
      "p14"
    ],
    "asteroidInterval": 4850,
    "asteroidSpeed": 1.34,
    "cityHealth": 100,
    "shieldCapacity": 83,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p14",
    "kind": "lesson",
    "desc": "необратимость тепловых процессов и второй закон термодинамики"
  },
  {
    "id": 16,
    "topics": [
      "p15"
    ],
    "asteroidInterval": 4775,
    "asteroidSpeed": 1.38,
    "cityHealth": 100,
    "shieldCapacity": 85,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p15",
    "kind": "lesson",
    "desc": "устройство и принцип действия тепловых двигателей"
  },
  {
    "id": 17,
    "topics": [
      "p16"
    ],
    "asteroidInterval": 4700,
    "asteroidSpeed": 1.41,
    "cityHealth": 100,
    "shieldCapacity": 87,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p16",
    "kind": "lesson",
    "desc": "КПД теплового двигателя и потери энергии"
  },
  {
    "id": 18,
    "topics": [
      "p17"
    ],
    "asteroidInterval": 4625,
    "asteroidSpeed": 1.45,
    "cityHealth": 100,
    "shieldCapacity": 89,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p17",
    "kind": "lesson",
    "desc": "экологические последствия работы тепловых машин"
  },
  {
    "id": 19,
    "topics": [
      "p18"
    ],
    "asteroidInterval": 4550,
    "asteroidSpeed": 1.48,
    "cityHealth": 100,
    "shieldCapacity": 91,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p18",
    "kind": "lesson",
    "desc": "электрический заряд, электризация, проводники и диэлектрики"
  },
  {
    "id": 20,
    "topics": [
      "p19"
    ],
    "asteroidInterval": 4475,
    "asteroidSpeed": 1.52,
    "cityHealth": 100,
    "shieldCapacity": 93,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p19",
    "kind": "lesson",
    "desc": "сохранение заряда, закон Кулона и элементарный заряд"
  },
  {
    "id": 21,
    "topics": [
      "p20"
    ],
    "asteroidInterval": 4400,
    "asteroidSpeed": 1.55,
    "cityHealth": 100,
    "shieldCapacity": 95,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p20",
    "kind": "lesson",
    "desc": "электрическое поле и его напряжённость"
  },
  {
    "id": 22,
    "topics": [
      "p21"
    ],
    "asteroidInterval": 4325,
    "asteroidSpeed": 1.58,
    "cityHealth": 100,
    "shieldCapacity": 97,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p21",
    "kind": "lesson",
    "desc": "потенциал, напряжение и конденсатор"
  },
  {
    "id": 23,
    "topics": [
      "p22"
    ],
    "asteroidInterval": 4250,
    "asteroidSpeed": 1.62,
    "cityHealth": 100,
    "shieldCapacity": 99,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p22",
    "kind": "lesson",
    "desc": "электрический ток и источники тока"
  },
  {
    "id": 24,
    "topics": [
      "p23"
    ],
    "asteroidInterval": 4175,
    "asteroidSpeed": 1.66,
    "cityHealth": 100,
    "shieldCapacity": 101,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p23",
    "kind": "lesson",
    "desc": "электрическая цепь, сила тока и напряжение"
  },
  {
    "id": 25,
    "topics": [
      "p24"
    ],
    "asteroidInterval": 4100,
    "asteroidSpeed": 1.69,
    "cityHealth": 100,
    "shieldCapacity": 103,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p24",
    "kind": "lesson",
    "desc": "закон Ома для участка цепи"
  },
  {
    "id": 26,
    "topics": [
      "p25"
    ],
    "asteroidInterval": 4025,
    "asteroidSpeed": 1.73,
    "cityHealth": 100,
    "shieldCapacity": 105,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p25",
    "kind": "lesson",
    "desc": "сопротивление, удельное сопротивление и реостат"
  },
  {
    "id": 27,
    "topics": [
      "p26"
    ],
    "asteroidInterval": 3950,
    "asteroidSpeed": 1.76,
    "cityHealth": 100,
    "shieldCapacity": 107,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p26",
    "kind": "lesson",
    "desc": "последовательное и параллельное соединение проводников"
  },
  {
    "id": 28,
    "topics": [
      "p27"
    ],
    "asteroidInterval": 3875,
    "asteroidSpeed": 1.79,
    "cityHealth": 100,
    "shieldCapacity": 109,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p27",
    "kind": "lesson",
    "desc": "работа и мощность электрического тока"
  },
  {
    "id": 29,
    "topics": [
      "p28"
    ],
    "asteroidInterval": 3800,
    "asteroidSpeed": 1.83,
    "cityHealth": 100,
    "shieldCapacity": 111,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p28",
    "kind": "lesson",
    "desc": "тепловое действие тока и закон Джоуля — Ленца"
  },
  {
    "id": 30,
    "topics": [
      "p29"
    ],
    "asteroidInterval": 3725,
    "asteroidSpeed": 1.87,
    "cityHealth": 100,
    "shieldCapacity": 113,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p29",
    "kind": "lesson",
    "desc": "зависимость сопротивления от температуры и сверхпроводимость"
  },
  {
    "id": 31,
    "topics": [
      "p30"
    ],
    "asteroidInterval": 3650,
    "asteroidSpeed": 1.9,
    "cityHealth": 100,
    "shieldCapacity": 115,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p30",
    "kind": "lesson",
    "desc": "электронагреватели, лампа, короткое замыкание и предохранители"
  },
  {
    "id": 32,
    "topics": [
      "p31"
    ],
    "asteroidInterval": 3575,
    "asteroidSpeed": 1.94,
    "cityHealth": 100,
    "shieldCapacity": 117,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p31",
    "kind": "lesson",
    "desc": "химическое действие тока, электролиз и закон Фарадея"
  },
  {
    "id": 33,
    "topics": [
      "p32"
    ],
    "asteroidInterval": 3500,
    "asteroidSpeed": 1.97,
    "cityHealth": 100,
    "shieldCapacity": 119,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p32",
    "kind": "lesson",
    "desc": "постоянные магниты, полюса и магнитное поле"
  },
  {
    "id": 34,
    "topics": [
      "p33"
    ],
    "asteroidInterval": 3425,
    "asteroidSpeed": 2,
    "cityHealth": 100,
    "shieldCapacity": 121,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p33",
    "kind": "lesson",
    "desc": "магнитное поле проводника и катушки с током"
  },
  {
    "id": 35,
    "topics": [
      "p34"
    ],
    "asteroidInterval": 3350,
    "asteroidSpeed": 2.04,
    "cityHealth": 100,
    "shieldCapacity": 123,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p34",
    "kind": "lesson",
    "desc": "электромагниты и их применение"
  },
  {
    "id": 36,
    "topics": [
      "p35"
    ],
    "asteroidInterval": 3275,
    "asteroidSpeed": 2.08,
    "cityHealth": 100,
    "shieldCapacity": 125,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p35",
    "kind": "lesson",
    "desc": "действие магнитного поля на ток и электродвигатель"
  },
  {
    "id": 37,
    "topics": [
      "p36"
    ],
    "asteroidInterval": 3200,
    "asteroidSpeed": 2.11,
    "cityHealth": 100,
    "shieldCapacity": 127,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p36",
    "kind": "lesson",
    "desc": "электромагнитная индукция и генератор"
  },
  {
    "id": 38,
    "topics": [
      "p37"
    ],
    "asteroidInterval": 3125,
    "asteroidSpeed": 2.15,
    "cityHealth": 100,
    "shieldCapacity": 129,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p37",
    "kind": "lesson",
    "desc": "прямолинейное распространение света и тень"
  },
  {
    "id": 39,
    "topics": [
      "p38"
    ],
    "asteroidInterval": 3050,
    "asteroidSpeed": 2.18,
    "cityHealth": 100,
    "shieldCapacity": 131,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p38",
    "kind": "lesson",
    "desc": "отражение света и плоское зеркало"
  },
  {
    "id": 40,
    "topics": [
      "p39"
    ],
    "asteroidInterval": 2975,
    "asteroidSpeed": 2.22,
    "cityHealth": 100,
    "shieldCapacity": 133,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p39",
    "kind": "lesson",
    "desc": "сферические зеркала и построение изображений"
  },
  {
    "id": 41,
    "topics": [
      "p40"
    ],
    "asteroidInterval": 2900,
    "asteroidSpeed": 2.25,
    "cityHealth": 100,
    "shieldCapacity": 135,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p40",
    "kind": "lesson",
    "desc": "преломление света и полное внутреннее отражение"
  },
  {
    "id": 42,
    "topics": [
      "p41"
    ],
    "asteroidInterval": 2825,
    "asteroidSpeed": 2.29,
    "cityHealth": 100,
    "shieldCapacity": 135,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p41",
    "kind": "lesson",
    "desc": "линзы, оптическая сила и изображения"
  },
  {
    "id": 43,
    "topics": [
      "p42"
    ],
    "asteroidInterval": 2750,
    "asteroidSpeed": 2.32,
    "cityHealth": 100,
    "shieldCapacity": 135,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p42",
    "kind": "lesson",
    "desc": "глаз, близорукость, дальнозоркость и коррекция зрения"
  },
  {
    "id": 44,
    "topics": [
      "p43"
    ],
    "asteroidInterval": 2675,
    "asteroidSpeed": 2.35,
    "cityHealth": 100,
    "shieldCapacity": 135,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3500,
    "chapter": "p43",
    "kind": "lesson",
    "desc": "фотоаппарат, лупа, микроскоп и телескоп"
  },
  {
    "id": 45,
    "topics": [
      "lab1"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab1",
    "desc": "Смешивание воды и сравнение количества теплоты"
  },
  {
    "id": 46,
    "topics": [
      "lab2"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab2",
    "desc": "Определение удельной теплоты плавления льда"
  },
  {
    "id": 47,
    "topics": [
      "lab3"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab3",
    "desc": "Сборка цепи и измерение тока и напряжения"
  },
  {
    "id": 48,
    "topics": [
      "lab4"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab4",
    "desc": "Исследование зависимости силы тока от напряжения"
  },
  {
    "id": 49,
    "topics": [
      "lab5"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab5",
    "desc": "Изучение последовательного соединения проводников"
  },
  {
    "id": 50,
    "topics": [
      "lab6"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab6",
    "desc": "Изучение параллельного соединения проводников"
  },
  {
    "id": 51,
    "topics": [
      "lab7"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab7",
    "desc": "Измерение работы и мощности электрического тока"
  },
  {
    "id": 52,
    "topics": [
      "lab8"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab8",
    "desc": "Свойства постоянного магнита и магнитные поля"
  },
  {
    "id": 53,
    "topics": [
      "lab9"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab9",
    "desc": "Сборка электромагнита и проверка его действия"
  },
  {
    "id": 54,
    "topics": [
      "lab10"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab10",
    "desc": "Определение показателя преломления стекла"
  },
  {
    "id": 55,
    "topics": [
      "lab11"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1,
    "cityHealth": 105,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab11",
    "desc": "Определение фокусного расстояния тонкой линзы"
  }
];
const STORY_CHAPTERS = [
  {
    "id": "thermal-awakening",
    "from": 1,
    "to": 10,
    "title": {
      "ru": "Акт I. Искра в термоядре",
      "en": "Act I. The Spark in the Thermal Core",
      "kk": "I акт. Жылу өзегіндегі ұшқын"
    },
    "intro": {
      "ru": "Над соляной пустыней вокруг Эквилибриума начинается метеорный шторм. Прозрачный купол гаснет, а тепловое сердце города переходит в аварийный режим.",
      "en": "A meteor storm begins above the salt desert around Equilibrium. The transparent dome goes dark, and the city's thermal heart enters emergency mode.",
      "kk": "Эквилибриумді қоршаған тұзды шөл үстінде метеорлық дауыл басталды. Мөлдір күмбез сөніп, қаланың жылу жүрегі апаттық режимге көшті."
    },
    "narrative": {
      "ru": "Эквилибриум построили там, где под соляной корой прячутся горячие потоки. Днём купол отражает белый свет пустыни, а ночью превращается в карту искусственных созвездий: тепло, электричество, магнитные поля и свет проходят по городу как четыре связанные артерии.\n\nВ ночь шторма инженер Лада дежурит в тепловой башне на восточном краю города. Она видит: купол не пробит — он закрылся сам за 0,7 секунды до удара. В центральной диспетчерской остаётся только голос Виктора, хранителя старого проекта: «Шторм не обязательно враг. Сначала поймите, что он пытается сказать».\n\nЗа стенами башни гудит пустыня, а под полом медленно меняется температура пород. Пилот входит в тепловой сектор, где первая задача — вернуть энергию в правильный цикл и найти источник команды на отключение.",
      "en": "Equilibrium was built where hot currents hide beneath a salt crust. By day the dome reflects the white desert light; at night it becomes a map of artificial constellations. Heat, electricity, magnetic fields, and light run through the city as four connected arteries.\n\nOn the night of the storm, engineer Lada is on duty in the thermal tower at the city's eastern edge. She sees that the dome was not pierced—it closed itself 0.7 seconds before impact. Only Viktor's voice remains in the central control room. He guards the old project and says, “The storm may not be an enemy. First understand what it is trying to say.”\n\nThe desert hums beyond the tower, while the temperature of the rock slowly changes beneath the floor. The pilot enters the thermal sector, where the first task is to return energy to its proper cycle and find the source of the shutdown command.",
      "kk": "Эквилибриум тұз қабатының астында ыстық ағындар жасырынған жерде салынған. Күндіз күмбез шөлдің ақ жарығын шағылдырады, ал түнде жасанды шоқжұлдыздар картасына айналады: жылу, электр, магнит өрісі және жарық қала арқылы өзара байланысқан төрт артерия сияқты өтеді.\n\nДауыл болған түні инженер Лада қаланың шығыс шетіндегі жылу мұнарасында кезекшілік етеді. Ол күмбездің тесілмегенін көреді — соққыдан 0,7 секунд бұрын күмбездің өзі жабылған. Орталық басқару бөлмесінде ескі жобаның сақшысы Виктордың дауысы ғана қалады: «Дауыл міндетті түрде жау емес. Алдымен оның не айтқысы келетінін түсініңдер».\n\nМұнара сыртында шөл гуілдеп, еден астындағы жыныстардың температурасы баяу өзгеріп жатыр. Ұшқыш жылу секторына кіріп, энергияны дұрыс циклге қайтаруға және өшіру командасының көзін табуға тиіс."
    },
    "goal": {
      "ru": "Стабилизируй тепловой контур в городе под куполом и найди источник команды на его отключение.",
      "en": "Stabilize the thermal circuit beneath the dome and find the source of the shutdown command.",
      "kk": "Күмбез астындағы жылу контурын тұрақтандырып, өшіру командасының көзін тап."
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Запись 01. Купол выключился первым",
          "en": "Log 01. The dome shut down first",
          "kk": "01-жазба. Күмбез бірінші өшті"
        },
        "text": {
          "ru": "Чёрный ящик показывает: команда на отключение пришла за 0,7 секунды до первого столкновения. Шторм не уничтожил защиту — он застал её уже выключенной.",
          "en": "The black box shows that the shutdown command arrived 0.7 seconds before the first impact. The storm did not destroy the defense—it found it already offline.",
          "kk": "Қара жәшік өшіру командасының алғашқы соқтығыстан 0,7 секунд бұрын келгенін көрсетті. Дауыл қорғанысты жойған жоқ — оны өшірулі күйінде тапты."
        }
      },
      {
        "required": 4,
        "title": {
          "ru": "Запись 02. Щит построен на равновесии",
          "en": "Log 02. The shield is built on balance",
          "kk": "02-жазба. Қалқан тепе-теңдікке құрылған"
        },
        "text": {
          "ru": "В архиве Лады найдено главное правило проекта: щит не создаёт энергию из ничего. Он принимает тепло, работу, ток, магнитное поле и свет, связывая их в один согласованный цикл.",
          "en": "An archive by Lada reveals the project's first rule: the shield cannot create energy from nothing. It joins heat, work, current, magnetic fields, and light into one balanced cycle.",
          "kk": "Ладаның мұрағатынан жобаның негізгі ережесі табылды: қалқан энергияны жоқтан жасамайды. Ол жылуды, жұмысты, токты, магнит өрісін және жарықты бір теңгерімді циклге біріктіреді."
        }
      },
      {
        "required": 8,
        "title": {
          "ru": "Запись 03. Кто-то разбудил сеть",
          "en": "Log 03. Someone woke the network",
          "kk": "03-жазба. Біреу желіні оятты"
        },
        "text": {
          "ru": "На тепловой кривой появляется повторяющийся импульс. Это не шум и не ошибка датчика: неизвестный передатчик посылает в город короткую фразу — «Проснитесь, пока не поздно».",
          "en": "A repeating pulse appears on the thermal curve. It is not noise or a sensor error: an unknown transmitter sends the city a short message—“Wake up before it is too late.”",
          "kk": "Жылу қисығында қайталанатын импульс пайда болды. Бұл шу да, датчик қатесі де емес: белгісіз таратқыш қалаға «Кеш болмай тұрғанда ояныңдар» деген қысқа хабар жіберуде."
        }
      },
      {
        "required": 10,
        "title": {
          "ru": "Ключ найден. Следующая дверь — давление",
          "en": "The key is found. The next door is pressure",
          "kk": "Кілт табылды. Келесі есік — қысым"
        },
        "text": {
          "ru": "Тепловое ядро запускается и на секунду показывает координаты старых камер давления. Лада оставила там второй фрагмент протокола, но камеры уже начинают расширяться.",
          "en": "The thermal core restarts and briefly displays the coordinates of old pressure chambers. Lada left the second part of the protocol there—but the chambers are already expanding.",
          "kk": "Жылу өзегі іске қосылып, бір сәтке ескі қысым камераларының координаттарын көрсетті. Лада хаттаманың екінші бөлігін сонда қалдырған, бірақ камералар қазірдің өзінде кеңеюде."
        }
      }
    ],
    "victory": {
      "ru": "Тепловое ядро снова светится. В последней строке журнала Лады появляется координата: «Камеры давления. Немедленно».",
      "en": "The thermal core is glowing again. The last line in Lada's log reveals a coordinate: “Pressure chambers. Immediately.”",
      "kk": "Жылу өзегі қайта жарқырады. Ладаның журналындағы соңғы жол координатты көрсетті: «Қысым камералары. Дереу»."
    },
    "defeat": {
      "ru": "Тепловой контур перегружен. Город ещё можно спасти: найди физическую причину сбоя и попробуй снова.",
      "en": "The thermal circuit is overloaded. The city can still be saved: find the physical cause and try again.",
      "kk": "Жылу контуры шамадан тыс жүктелді. Қаланы әлі де құтқаруға болады: ақаудың физикалық себебін тауып, қайта көр."
    },
    "setting": {
      "ru": "Эквилибриум — изолированный город на краю соляной пустыни. Его жилые башни и тепловые станции накрыты прозрачным куполом; за куполом нет дорог, только чёрное небо, ржавый песок и орбитальный мусор.",
      "en": "Equilibrium is an isolated city on the edge of a salt desert. Its residential towers and thermal stations are covered by a transparent dome; beyond it there are no roads, only black sky, rust-colored sand, and orbital debris.",
      "kk": "Эквилибриум — тұзды шөлдің шетіндегі оқшауланған қала. Тұрғын мұнаралары мен жылу станцияларын мөлдір күмбез жапқан; күмбез сыртында жол жоқ, тек қара аспан, қызыл қоңыр құм және орбиталық қоқыс бар."
    }
  },
  {
    "id": "pressure-engines",
    "from": 11,
    "to": 18,
    "title": {
      "ru": "Акт II. Город под давлением",
      "en": "Act II. The City Under Pressure",
      "kk": "II акт. Қысымдағы қала"
    },
    "intro": {
      "ru": "Тепловое сердце ожило, но Нижний пояс расширяется от перегрева. Второй фрагмент протокола спрятан в старых камерах давления.",
      "en": "The thermal heart is alive, but the Lower Belt is expanding from overheating. The second part of the protocol is hidden in the old pressure chambers.",
      "kk": "Жылу жүрегі оянды, бірақ Төменгі белдеу қызудан кеңеюде. Хаттаманың екінші бөлігі ескі қысым камераларында жасырылған."
    },
    "narrative": {
      "ru": "В Нижнем поясе воздух пахнет металлом и горячей водой. По мосткам над камерами идут трубы, а под ними работают резервные двигатели, которые должны удержать город, пока купол закрыт.\n\nЛада ведёт пилота через испарители и конденсаторы, сверяя показания с картой старых шахт. Виктор выходит на связь из ремонтной галереи и напоминает: машина не может вернуть всю энергию без потерь, поэтому нужно увидеть не только полезную работу, но и путь ушедшего тепла.\n\nВ архивном шкафу находится новая пометка: «Не чините клапан, пока не поймёте, кто его открыл». На металле виден след ручного инструмента. Кто-то побывал здесь до начала шторма — и знал, какую камеру выбрать.",
      "en": "The Lower Belt smells of metal and hot water. Pipes cross the walkways above the chambers, while reserve engines work below to hold the city together while the dome is closed.\n\nLada guides the pilot through evaporators and condensers, comparing readings with a map of the old shafts. Viktor calls from a repair gallery and reminds them that a machine cannot return all energy without losses. They must track not only useful work, but also the path taken by the heat that escapes.\n\nA new note waits in an archive cabinet: “Do not repair the valve until you understand who opened it.” A hand tool mark is visible on the metal. Someone came here before the storm—and knew which chamber to choose.",
      "kk": "Төменгі белдеуде металл мен ыстық судың иісі сезіледі. Камералардың үстіндегі көпірлермен құбырлар өтеді, ал астында күмбез жабық кезде қаланы ұстап тұруға тиіс резервтік қозғалтқыштар жұмыс істейді.\n\nЛада ұшқышты буландырғыштар мен конденсаторлар арасымен жүргізіп, көрсеткіштерді ескі шахталар картасымен салыстырады. Жөндеу галереясынан Виктор байланысқа шығып, машина барлық энергияны шығынсыз қайтара алмайтынын ескертеді. Пайдалы жұмысты ғана емес, жоғалған жылудың жолын да бақылау керек.\n\nМұрағат шкафынан жаңа белгі табылады: «Клапанды оны кім ашқанын түсінбей тұрып жөндеме». Металда қол құралының ізі бар. Дауыл басталмай тұрып мұнда біреу болған — әрі қай камераны таңдау керегін білген."
    },
    "goal": {
      "ru": "Удержи давление Нижнего пояса, направь полезную работу двигателей в щит и раскрой тайну клапана.",
      "en": "Control the Lower Belt pressure, direct the engines' useful work into the shield, and uncover the valve's secret.",
      "kk": "Төменгі белдеудің қысымын ұстап, қозғалтқыштардың пайдалы жұмысын қалқанға бағытта және клапан құпиясын аш."
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Запись 04. Клапан открылся изнутри",
          "en": "Log 04. The valve was opened from inside",
          "kk": "04-жазба. Клапан іштен ашылған"
        },
        "text": {
          "ru": "Следы на ручке клапана не похожи на удар астероида. Его повернули вручную, а на металле остался знак ремонтной бригады Лады.",
          "en": "The marks on the valve handle do not look like an asteroid strike. Someone turned it by hand, leaving Lada's repair-team mark on the metal.",
          "kk": "Клапан тұтқасындағы іздер астероид соққысына ұқсамайды. Оны біреу қолмен бұраған, ал металда Ладаның жөндеу тобының белгісі қалған."
        }
      },
      {
        "required": 4,
        "title": {
          "ru": "Запись 05. Потерянная энергия оставляет след",
          "en": "Log 05. Lost energy leaves a trace",
          "kk": "05-жазба. Жоғалған энергия із қалдырады"
        },
        "text": {
          "ru": "Расчёты показывают: «лишнее» тепло не ушло в атмосферу. Оно накопилось в подземном кольце и нагревает путь к главной электросети.",
          "en": "The calculations show that the “extra” heat did not escape into the atmosphere. It accumulated in an underground ring and is heating the path to the main electrical grid.",
          "kk": "Есептеулер «артық» жылудың атмосфераға кетпегенін көрсетті. Ол жер астындағы сақинада жиналып, негізгі электр желісіне апаратын жолды қыздыруда."
        }
      },
      {
        "required": 8,
        "title": {
          "ru": "Запись 06. Давление — это дверь",
          "en": "Log 06. Pressure is a door",
          "kk": "06-жазба. Қысым — есік"
        },
        "text": {
          "ru": "В конце протокола Лада пишет: «Когда давление выровняется, откроется магнитный мост». Значит, тепловые машины должны не только спасти город — они должны запустить следующий сектор.",
          "en": "At the end of the protocol Lada writes: “When the pressure is balanced, the magnetic bridge will open.” The heat engines must do more than save the city—they must start the next sector.",
          "kk": "Хаттаманың соңында Лада: «Қысым теңескенде магниттік көпір ашылады» деп жазған. Демек жылу машиналары қаланы ғана құтқармай, келесі секторды да іске қосуы тиіс."
        }
      }
    ],
    "victory": {
      "ru": "Клапаны выровнены, двигатели перешли в экономичный режим. Под городом просыпается магнитный контур, а шторм добирается до электросети.",
      "en": "The valves are balanced and the engines switch to efficient mode. A magnetic circuit wakes beneath the city while the storm reaches the electrical grid.",
      "kk": "Клапандар теңестіріліп, қозғалтқыштар үнемді режимге өтті. Қала астында магниттік контур оянып, дауыл электр желісіне жетті."
    },
    "defeat": {
      "ru": "Давление сорвало клапаны. Проверь направление теплопередачи и работу двигателя — протокол ещё можно восстановить.",
      "en": "The pressure tripped the valves. Check heat transfer and engine operation—the protocol can still be restored.",
      "kk": "Қысым клапандарды істен шығарды. Жылу берілуі мен қозғалтқыштың жұмысын тексер — хаттаманы әлі қалпына келтіруге болады."
    },
    "setting": {
      "ru": "Под жилыми секторами тянется Нижний пояс — сеть производственных тоннелей, старых котельных и огромных камер давления. Здесь город хранит тепло, превращая его в работу для купола.",
      "en": "Beneath the residential sectors runs the Lower Belt, a network of production tunnels, old boiler rooms, and huge pressure chambers. This is where the city stores heat and turns it into work for the dome.",
      "kk": "Тұрғын секторлардың астында Төменгі белдеу созылып жатыр — өндірістік тоннельдер, ескі қазандықтар және алып қысым камераларының желісі. Қала жылуды осында сақтап, оны күмбезге арналған жұмысқа айналдырады."
    }
  },
  {
    "id": "electric-grid",
    "from": 19,
    "to": 31,
    "title": {
      "ru": "Акт III. Электрическая сеть",
      "en": "Act III. The Electrical Grid",
      "kk": "III акт. Электр желісі"
    },
    "intro": {
      "ru": "Шторм вошёл в электрические артерии города. Верни заряду безопасный путь и пойми, почему неизвестный сигнал повторяет ритм старой сети.",
      "en": "The storm has entered the city's electrical arteries. Give charge a safe path and learn why the unknown signal repeats the old grid's rhythm.",
      "kk": "Дауыл қаланың электр артерияларына кірді. Зарядқа қауіпсіз жол беріп, белгісіз сигналдың ескі желі ырғағын неге қайталайтынын түсін."
    },
    "narrative": {
      "ru": "Когда давление выравнивается, городская сеть просыпается рывками. Под улицами загораются синие линии, на башнях-распределителях мигают красные окна, а в старом табло повторяется ритм: короткий импульс, два длинных, пауза.\n\nПилот собирает цепи от источника тока до жилых секторов. Лада замечает, что сигнал не просто проходит по проводам — он снимает показания с сети и возвращает их обратно, будто учится говорить голосом города.\n\nВиктор узнаёт ритм: когда-то Лада использовала его для связи между секторами щита. Но сигнал приходит снаружи купола. Среди электрических вспышек появляется одно слово — «Астерион».",
      "en": "When the pressure balances, the city grid wakes in jolts. Blue lines ignite beneath the streets, red windows blink on the distribution towers, and the old display repeats a rhythm: one short pulse, two long pulses, a pause.\n\nThe pilot rebuilds the circuits from the current source to the residential sectors. Lada notices that the signal does not merely travel through the wires—it reads the grid and sends the readings back, as if it is learning to speak in the city's voice.\n\nViktor recognizes the rhythm. Lada once used it to connect the shield sectors. But the signal is coming from beyond the dome. Among the electrical flashes, one word appears: “Asterion.”",
      "kk": "Қысым теңескенде қала желісі үзік-үзік оянады. Көшелер астында көк сызықтар жанады, тарату мұнараларындағы қызыл терезелер жыпылықтайды, ал ескі тақта бір ырғақты қайталайды: бір қысқа импульс, екі ұзын импульс, үзіліс.\n\nҰшқыш ток көзінен тұрғын секторларға дейін тізбектерді қайта жинайды. Лада сигналдың сымдармен ғана өтпейтінін байқайды — ол желі көрсеткіштерін оқып, қайтарады, қала даусымен сөйлеуді үйреніп жатқандай.\n\nВиктор ырғақты таныды. Бір кездері Лада оны қалқан секторларын байланыстыру үшін қолданған. Бірақ сигнал күмбездің сыртынан келеді. Электр жарқылдарының арасынан бір сөз көрінеді — «Астерион»."
    },
    "goal": {
      "ru": "Восстанови электрические артерии без короткого замыкания и расшифруй импульс из-за купола.",
      "en": "Restore the electrical arteries without a short circuit and decode the pulse from beyond the dome.",
      "kk": "Электр артерияларын қысқа тұйықталусыз қалпына келтіріп, күмбез сыртынан келген импульсті шеш."
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Запись 07. Сигнал копирует город",
          "en": "Log 07. The signal copies the city",
          "kk": "07-жазба. Сигнал қаланы қайталайды"
        },
        "text": {
          "ru": "Пульс не просто повторяет код Лады. Он снимает показания с самой сети и возвращает их обратно, словно кто-то учится говорить голосом Эквилибриума.",
          "en": "The pulse does not merely repeat Lada's code. It reads the grid and sends the readings back, as if someone is learning to speak in Equilibrium's own voice.",
          "kk": "Импульс Ладаның кодын жай ғана қайталамайды. Ол желінің көрсеткіштерін оқып, қайтарады, біреу Эквилибриумның өз даусымен сөйлеуді үйреніп жатқандай."
        }
      },
      {
        "required": 5,
        "title": {
          "ru": "Запись 08. Это не саботаж",
          "en": "Log 08. It is not sabotage",
          "kk": "08-жазба. Бұл диверсия емес"
        },
        "text": {
          "ru": "Сравнение напряжений показывает: импульс не крадёт энергию. Он ищет устойчивую цепь и каждый раз отступает, когда встречает короткое замыкание. Неизвестный источник пытается предупредить, а не атаковать.",
          "en": "Comparing the voltages shows that the pulse is not stealing energy. It searches for a stable circuit and retreats whenever it meets a short circuit. The unknown source is warning the city, not attacking it.",
          "kk": "Кернеулерді салыстыру импульстің энергияны ұрламайтынын көрсетті. Ол тұрақты тізбекті іздейді де қысқа тұйықталуға кездескенде шегінеді. Белгісіз көз қалаға шабуылдамай, ескертіп жатыр."
        }
      },
      {
        "required": 13,
        "title": {
          "ru": "Запись 09. Название из старого архива",
          "en": "Log 09. A name from the old archive",
          "kk": "09-жазба. Ескі мұрағаттағы атау"
        },
        "text": {
          "ru": "Расшифрованное слово — «Астерион». Так назывался орбитальный исследовательский модуль, исчезнувший за двадцать лет до основания Эквилибриума. Его последний сигнал ведёт к магнитному мосту.",
          "en": "The decoded word is “Asterion.” It was the name of an orbital research module that disappeared twenty years before Equilibrium was founded. Its last signal leads to the magnetic bridge.",
          "kk": "Шешілген сөз — «Астерион». Эквилибриум құрылғаннан жиырма жыл бұрын жоғалған орбиталық зерттеу модулі осылай аталған. Оның соңғы сигналы магниттік көпірге апарады."
        }
      }
    ],
    "victory": {
      "ru": "Сеть ожила, а код «Астерион» зафиксирован в журнале. Неизвестный источник находится где-то за пределами купола.",
      "en": "The grid is alive again, and the code “Asterion” is recorded in the log. The unknown source is somewhere beyond the dome.",
      "kk": "Желі қайта іске қосылып, «Астерион» коды журналға жазылды. Белгісіз көз күмбезден тыс жерде орналасқан."
    },
    "defeat": {
      "ru": "Сеть ушла в защитное отключение. Проверь заряд, напряжение, сопротивление и соединение — один неверный путь может погасить весь город.",
      "en": "The grid entered protective shutdown. Check charge, voltage, resistance, and connections—one wrong path can darken the whole city.",
      "kk": "Желі қорғаныс үшін өшті. Зарядты, кернеуді, кедергіні және жалғауды тексер — бір қате жол бүкіл қаланы қараңғы етеді."
    },
    "setting": {
      "ru": "Электрические артерии Эквилибриума проходят под улицами и поднимаются к башням-распределителям. В темноте тоннелей видны только синие контуры проводников и редкие вспышки аварийных разрядов.",
      "en": "Equilibrium's electrical arteries run beneath the streets and rise to distribution towers. In the tunnel darkness, only blue conductor outlines and rare flashes of emergency discharge are visible.",
      "kk": "Эквилибриумның электр артериялары көшелердің астымен өтіп, тарату мұнараларына көтеріледі. Тоннель қараңғылығында өткізгіштердің көк сұлбасы мен апаттық разрядтардың сирек жарқылы ғана көрінеді."
    }
  },
  {
    "id": "magnetic-bridge",
    "from": 32,
    "to": 37,
    "title": {
      "ru": "Акт IV. Магнитный мост",
      "en": "Act IV. The Magnetic Bridge",
      "kk": "IV акт. Магниттік көпір"
    },
    "intro": {
      "ru": "В базальтовом хребте открылась забытая обсерватория. Магнитный мост может обойти повреждённый купол и ответить орбитальному модулю.",
      "en": "A forgotten observatory has opened in the basalt ridge. The magnetic bridge may bypass the damaged dome and answer the orbital module.",
      "kk": "Базальт жотасында ұмыт қалған обсерватория ашылды. Магниттік көпір зақымдалған күмбезді айналып, орбиталық модульге жауап бере алады."
    },
    "narrative": {
      "ru": "На севере Эквилибриума базальтовый хребет разрезает пустыню, словно чёрная волна. Под ним скрыта обсерватория, которую убрали с карт вместе с проектом «Астериона».\n\nВнутри обсерватории стоят катушки, генераторы и неподвижные стрелки старых приборов. Лада понимает, что магнитный мост не разрушен: его разомкнули намеренно, чтобы неизвестный сигнал не вошёл в центральное ядро.\n\nВиктор признаётся, что двадцать лет назад помогал запускать орбитальную систему. Официально «Астерион» сгорел в атмосфере. Но генераторы ловят ответ: модуль жив, застрял на высокой орбите и зовёт Эквилибриум, пока его система управления теряет энергию.",
      "en": "North of Equilibrium, a basalt ridge cuts through the desert like a black wave. Beneath it lies an observatory erased from the maps along with the Asterion project.\n\nInside stand coils, generators, and the frozen needles of old instruments. Lada realizes that the magnetic bridge was not destroyed: it was opened deliberately so the unknown signal could not enter the central core.\n\nViktor admits that twenty years ago he helped launch the orbital system. Officially, Asterion burned up in the atmosphere. But the generators catch a reply: the module is alive, stranded in high orbit, and calling Equilibrium while its control system loses power.",
      "kk": "Эквилибриумның солтүстігінде базальт жотасы қара толқын сияқты шөлді тіліп өтеді. Оның астында «Астерион» жобасымен бірге карталардан алынып тасталған обсерватория жасырынған.\n\nОбсерватория ішінде катушкалар, генераторлар және ескі аспаптардың қозғалмай қалған тілдері тұр. Лада магниттік көпірдің қирамағанын түсінеді: белгісіз сигналдың орталық өзекке енуіне жол бермеу үшін көпір әдейі ажыратылған.\n\nВиктор жиырма жыл бұрын орбиталық жүйені іске қосуға көмектескенін мойындайды. Ресми нұсқа бойынша «Астерион» атмосферада жанып кеткен. Бірақ генераторлар жауап ұстайды: модуль тірі, биік орбитада тұрып қалған және басқару жүйесі энергия жоғалтып жатқанда Эквилибриумды шақыруда."
    },
    "goal": {
      "ru": "Собери магнитный мост и выясни, что на самом деле случилось с модулем «Астерион».",
      "en": "Build the magnetic bridge and discover what really happened to Asterion.",
      "kk": "Магниттік көпірді құрып, «Астерионмен» шын мәнінде не болғанын анықта."
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Запись 10. Мост не разрушен",
          "en": "Log 10. The bridge is not destroyed",
          "kk": "10-жазба. Көпір қирамаған"
        },
        "text": {
          "ru": "В магнитном поле нет следов взрыва. Мост намеренно разомкнули, чтобы не дать неизвестному сигналу войти в центральное ядро.",
          "en": "The magnetic field shows no trace of an explosion. The bridge was deliberately opened to keep the unknown signal from entering the central core.",
          "kk": "Магнит өрісінде жарылыс ізі жоқ. Белгісіз сигналдың орталық өзекке енуіне жол бермеу үшін көпір әдейі ажыратылған."
        }
      },
      {
        "required": 3,
        "title": {
          "ru": "Запись 11. Астерион жив",
          "en": "Log 11. Asterion is alive",
          "kk": "11-жазба. Астерион тірі"
        },
        "text": {
          "ru": "Генератор поймал ответ: «Астерион» не уничтожен. Модуль застрял на высокой орбите и посылает сигнал, потому что его система управления теряет энергию.",
          "en": "The generator catches a reply: Asterion was not destroyed. The module is stranded in a high orbit and is sending a signal because its control system is losing power.",
          "kk": "Генератор жауапты ұстады: «Астерион» жойылмаған. Модуль биік орбитада тұрып қалған және басқару жүйесі энергия жоғалтып жатқандықтан сигнал жіберуде."
        }
      },
      {
        "required": 6,
        "title": {
          "ru": "Запись 12. Шторм — это зов о помощи",
          "en": "Log 12. The storm is a call for help",
          "kk": "12-жазба. Дауыл — көмек шақыруы"
        },
        "text": {
          "ru": "Астероиды оказались не оружием, а обломками старого орбитального отражателя. Они падают по рассчитанной траектории, чтобы привлечь внимание Эквилибриума и передать координаты.",
          "en": "The asteroids are not weapons but fragments of an old orbital reflector. They follow a calculated path to attract Equilibrium's attention and transmit coordinates.",
          "kk": "Астероидтар қару емес, ескі орбиталық шағылдырғыштың сынықтары болып шықты. Олар Эквилибриумның назарын аударып, координаттарды жеткізу үшін есептелген траекториямен құлап жатыр."
        }
      }
    ],
    "victory": {
      "ru": "Магнитный мост замкнулся и передал ответ на орбиту. «Астерион» направляет последний сигнал к световому маяку.",
      "en": "The magnetic bridge is complete and sends a reply into orbit. Asterion directs its final signal to the optical beacon.",
      "kk": "Магниттік көпір тұйықталып, орбитаға жауап жіберді. «Астерион» соңғы сигналын жарық маяғына бағыттауда."
    },
    "defeat": {
      "ru": "Мост разомкнулся. Проверь направление поля, действие тока и условия индукции — связь с орбитой ещё можно восстановить.",
      "en": "The bridge opened. Check field direction, current, and induction conditions—the orbital link can still be restored.",
      "kk": "Көпір ажырады. Өріс бағытын, токты және индукция шарттарын тексер — орбитамен байланысты әлі қалпына келтіруге болады."
    },
    "setting": {
      "ru": "На севере купола в базальтовом хребте спрятана заброшенная обсерватория. Под ней находится магнитный мост — старый путь, который может провести энергию вокруг повреждённой оболочки города.",
      "en": "An abandoned observatory is hidden in the basalt ridge north of the dome. Beneath it lies the magnetic bridge, an old route that can carry energy around the city's damaged shell.",
      "kk": "Күмбездің солтүстігіндегі базальт жотасында қараусыз қалған обсерватория жасырынған. Оның астында зақымдалған қала қабығын айналып, энергия өткізе алатын ескі жол — магниттік көпір бар."
    }
  },
  {
    "id": "light-beacon",
    "from": 38,
    "to": 44,
    "title": {
      "ru": "Акт V. Маяк света",
      "en": "Act V. The Beacon of Light",
      "kk": "V акт. Жарық маяғы"
    },
    "intro": {
      "ru": "Сигнал с орбиты дошёл до верхней обсерватории. Последний путь проходит через зеркальную галерею, преломление и линзы.",
      "en": "The orbital signal reaches the upper observatory. Its final path runs through the mirror gallery, refraction, and lenses.",
      "kk": "Орбитадан келген сигнал жоғарғы обсерваторияға жетті. Соңғы жол айна галереясы, сыну және линзалар арқылы өтеді."
    },
    "narrative": {
      "ru": "Верхняя обсерватория возвышается над куполом. Отсюда видны соляные равнины, тонкая линия пустынной дороги и вся дуга защитной оболочки. В зеркальной галерее лучи собираются в одну точку, как нити в узел.\n\nКрасный импульс «Астериона» оказывается не тревогой, а просьбой: не отражать сигнал обратно в пустоту, а сфокусировать его. Лада настраивает зеркала, преломление в защитном стекле и собирающую линзу.\n\nКогда луч попадает в окно связи, из орбиты приходит голос Лады из старого дневника: «Если вы слышите это, город готов. Шторм — не наказание, а дорога домой». Маяк меняет цвет с красного на зелёный и открывает путь в лабораторное ядро.",
      "en": "The upper observatory rises above the dome. From here the salt plains, a thin desert road, and the full arc of the protective shell are visible. In the mirror gallery, beams gather at one point like threads tied into a knot.\n\nAsterion's red pulse is not an alarm but a request: do not reflect the signal back into the void—focus it. Lada tunes the mirrors, refraction through the protective glass, and the converging lens.\n\nWhen the beam reaches the communication window, orbit returns Lada's voice from an old log: “If you can hear this, the city is ready. The storm is not a punishment, but a road home.” The beacon turns from red to green and opens the route to the laboratory core.",
      "kk": "Жоғарғы обсерватория күмбездің үстінде биік тұр. Бұл жерден тұзды жазықтар, шөлдегі жіңішке жол және қорғаныс қабығының толық доғасы көрінеді. Айна галереясында сәулелер түйінге жиналған жіптер сияқты бір нүктеге тоғысады.\n\n«Астерионның» қызыл импульсі дабыл емес, өтініш болып шықты: сигналды бос кеңістікке кері шағылдырмай, оны фокусқа жинау керек. Лада айналарды, қорғаныс әйнегіндегі сынуды және жинағыш линзаны реттейді.\n\nСәуле байланыс терезесіне түскенде, орбитадан Ладаның ескі жазбадағы дауысы естіледі: «Егер мұны естіп тұрсаңдар, қала дайын. Дауыл — жаза емес, үйге апаратын жол». Маяк қызылдан жасылға ауысып, зертханалық өзекке жол ашады."
    },
    "goal": {
      "ru": "Настрой оптический маяк и передай «Астериону» сигнал, который откроет лабораторное ядро.",
      "en": "Tune the optical beacon and send Asterion the signal that will open the laboratory core.",
      "kk": "Оптикалық маякты реттеп, зертханалық өзекті ашатын сигналды «Астерионға» жібер."
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Запись 13. Красный — не цвет опасности",
          "en": "Log 13. Red does not mean danger",
          "kk": "13-жазба. Қызыл — қауіп түсі емес"
        },
        "text": {
          "ru": "Красный импульс зашифрован в спектре. Это не тревога, а просьба о точной настройке: «Не отражайте меня. Сфокусируйте меня». ",
          "en": "The red pulse is encoded in the spectrum. It is not an alarm but a request for precise calibration: “Do not reflect me. Focus me.”",
          "kk": "Қызыл импульс спектрде шифрланған. Бұл дабыл емес, дәл баптау өтініші: «Мені шағылдырмаңдар. Мені фокусқа жинаңдар»."
        }
      },
      {
        "required": 4,
        "title": {
          "ru": "Запись 14. Координаты Лады",
          "en": "Log 14. Lada's coordinates",
          "kk": "14-жазба. Ладаның координаттары"
        },
        "text": {
          "ru": "В фокусе линзы появляется скрытая строка из дневника Лады: «Астерион хранит не оружие, а карту будущего щита». Координаты ведут в лабораторное ядро под городом.",
          "en": "At the lens focus, a hidden line from Lada's diary appears: “Asterion carries not a weapon, but a map of the shield's future.” The coordinates lead to the laboratory core beneath the city.",
          "kk": "Линза фокусында Ладаның күнделігінен жасырын жол пайда болды: «Астерион қару емес, болашақ қалқанның картасын сақтайды». Координаттар қала астындағы зертханалық өзекке апарады."
        }
      },
      {
        "required": 7,
        "title": {
          "ru": "Запись 15. Последнее сообщение",
          "en": "Log 15. The last message",
          "kk": "15-жазба. Соңғы хабар"
        },
        "text": {
          "ru": "«Астерион» наконец отвечает голосом Лады: «Если вы слышите это, значит, Эквилибриум стал готов. Соберите протокол — и шторм станет дорогой домой». В этот момент маяк меняет цвет на зелёный.",
          "en": "Asterion finally answers in Lada's voice: “If you can hear this, Equilibrium is ready. Assemble the protocol, and the storm will become a road home.” The beacon turns green.",
          "kk": "«Астерион» ақыры Ладаның дауысымен жауап берді: «Егер мұны естіп тұрсаңдар, Эквилибриум дайын болды. Хаттаманы құрастырыңдар — сонда дауыл үйге апаратын жолға айналады». Сол сәтте маяк жасыл түске ауысты."
        }
      }
    ],
    "victory": {
      "ru": "Маяк навёлся на орбиту, и лабораторные двери открылись. Теперь нужно доказать измерениями, что все части щита работают как единая система.",
      "en": "The beacon locks onto orbit and the laboratory doors open. Now measurements must prove that every part of the shield works as one system.",
      "kk": "Маяк орбитаға бағытталып, зертхана есіктері ашылды. Енді өлшеулер қалқанның барлық бөлігінің бір жүйе болып жұмыс істейтінін дәлелдеуі керек."
    },
    "defeat": {
      "ru": "Луч рассеялся. Вернись к оптике: отражение меняет направление, преломление меняет путь, а линза собирает свет.",
      "en": "The beam scattered. Return to optics: reflection changes direction, refraction changes the path, and a lens gathers light.",
      "kk": "Сәуле шашырап кетті. Оптикаға қайта орал: шағылу бағытты, сыну жолды өзгертеді, ал линза жарықты жинайды."
    },
    "setting": {
      "ru": "Верхняя обсерватория стоит над куполом, где пустынный горизонт виден на сотни километров. Внутри сохранилась галерея зеркал и линз — оптический маяк, рассчитанный на разговор с орбитой.",
      "en": "The upper observatory stands above the dome, with the desert horizon visible for hundreds of kilometers. Inside, a gallery of mirrors and lenses remains: an optical beacon designed to speak with orbit.",
      "kk": "Жоғарғы обсерватория күмбездің үстінде тұр, одан шөл көкжиегі жүздеген шақырымға көрінеді. Ішінде айналар мен линзалар галереясы сақталған — орбитамен сөйлесуге арналған оптикалық маяк."
    }
  },
  {
    "id": "final-protocol",
    "from": 45,
    "to": 55,
    "title": {
      "ru": "Акт VI. Последний протокол",
      "en": "Act VI. The Final Protocol",
      "kk": "VI акт. Соңғы хаттама"
    },
    "intro": {
      "ru": "Команда входит в лабораторное ядро под центральной площадью. Последняя часть миссии — соединить четыре языка щита и открыть безопасный путь домой.",
      "en": "The team enters the laboratory core beneath the central square. The final mission is to connect the shield's four languages and open a safe way home.",
      "kk": "Команда орталық алаң астындағы зертханалық өзекке кірді. Соңғы міндет — қалқанның төрт тілін біріктіріп, үйге қауіпсіз жол ашу."
    },
    "narrative": {
      "ru": "Лабораторное ядро находится под центральной площадью, глубже всех жилых секторов. Круглый зал разделён на четыре части, и каждая часть хранит свой язык: тепло говорит через калориметр, ток — через цепь, магнит — через поле, свет — через луч.\n\nВиктор рассказывает правду: «Астерион» создавался не как оружие, а как исследовательский модуль. Он должен был изучать космический мусор и возвращать его по безопасным траекториям. Когда проект закрыли, город оставили с недостроенным щитом, а модуль — без пути домой.\n\nЛада оставила в протоколе последнюю инструкцию: не уничтожать шторм, а измерить его и открыть коридор. Пилот соединяет четыре сектора. Теперь Эквилибриум должен доказать, что умеет не только защищаться, но и отвечать неизвестному точным знанием.",
      "en": "The laboratory core lies beneath the central square, deeper than all residential sectors. The circular hall is divided into four parts, and each has its own language: heat speaks through a calorimeter, current through a circuit, magnetism through a field, and light through a beam.\n\nViktor tells the truth: Asterion was built not as a weapon but as a research module. It was meant to study space debris and return it along safe trajectories. When the project was closed, the city was left with an unfinished shield and the module without a way home.\n\nLada left one final instruction in the protocol: do not destroy the storm; measure it and open a corridor. The pilot connects the four sectors. Equilibrium must now prove that it can do more than defend itself—it can answer the unknown with precise knowledge.",
      "kk": "Зертханалық өзек орталық алаңның астында, барлық тұрғын секторлардан да тереңде орналасқан. Дөңгелек зал төрт бөлікке бөлінген және әр бөліктің өз тілі бар: жылу калориметр арқылы, ток тізбек арқылы, магнит өріс арқылы, ал жарық сәуле арқылы сөйлейді.\n\nВиктор шындықты айтады: «Астерион» қару емес, зерттеу модулі ретінде жасалған. Ол ғарыш қоқысын зерттеп, оны қауіпсіз траекториямен қайтаруы тиіс еді. Жоба жабылғанда, қала аяқталмаған қалқанмен, ал модуль үйге апаратын жолсыз қалған.\n\nЛада хаттамаға соңғы нұсқауды жазып кеткен: дауылды жоймаңдар, оны өлшеп, дәліз ашыңдар. Ұшқыш төрт секторды біріктіреді. Енді Эквилибриум өзін қорғап қана қоймай, белгісізге дәл біліммен жауап бере алатынын дәлелдеуі керек."
    },
    "goal": {
      "ru": "Проведи лабораторные проверки, собери полный протокол и верни «Астерион» домой безопасным маршрутом.",
      "en": "Complete the laboratory checks, assemble the full protocol, and bring Asterion home along a safe route.",
      "kk": "Зертханалық тексерулерді аяқтап, толық хаттаманы құрып, «Астерионды» қауіпсіз жолмен үйге қайтар."
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Запись 16. Всё начинается с измерения",
          "en": "Log 16. Everything begins with a measurement",
          "kk": "16-жазба. Барлығы өлшеуден басталады"
        },
        "text": {
          "ru": "Первая лабораторная проверка подтверждает правило Лады: догадка может подсказать направление, но только измерение даёт щиту право на следующий шаг.",
          "en": "The first laboratory check confirms Lada's rule: a guess can suggest a direction, but only a measurement gives the shield permission to take the next step.",
          "kk": "Алғашқы зертханалық тексеру Ладаның ережесін растады: жорамал бағыт көрсетуі мүмкін, бірақ келесі қадамға құқықты қалқанға тек өлшеу береді."
        }
      },
      {
        "required": 5,
        "title": {
          "ru": "Запись 17. Протокол складывается",
          "en": "Log 17. The protocol comes together",
          "kk": "17-жазба. Хаттама құралып жатыр"
        },
        "text": {
          "ru": "Тепловой баланс совпал с электрическим, электрический — с магнитным, а магнитный — с оптическим. Щит больше не четыре разрозненные машины: это одна система, которая умеет учиться.",
          "en": "The thermal balance matches the electrical one, the electrical matches the magnetic one, and the magnetic matches the optical one. The shield is no longer four separate machines—it is one system that can learn.",
          "kk": "Жылу балансы электрлікпен, электрлік магниттікпен, ал магниттік оптикалықпен сәйкес келді. Қалқан енді төрт бөлек машина емес: ол үйрене алатын бір жүйе."
        }
      },
      {
        "required": 11,
        "title": {
          "ru": "Запись 18. Выбор пилота",
          "en": "Log 18. The pilot's choice",
          "kk": "18-жазба. Ұшқыштың таңдауы"
        },
        "text": {
          "ru": "Финальный расчёт предлагает два пути: оттолкнуть обломки в пустоту или открыть им безопасный коридор. Пилот выбирает второй путь. Знание не уничтожает неизвестное — оно делает его управляемым.",
          "en": "The final calculation offers two paths: push the fragments into the void or open a safe corridor for them. The pilot chooses the second. Knowledge does not destroy the unknown—it makes it manageable.",
          "kk": "Соңғы есеп екі жол ұсынады: сынықтарды бос кеңістікке итеру немесе оларға қауіпсіз дәліз ашу. Ұшқыш екінші жолды таңдайды. Білім белгісіздікті жоймайды — оны басқарылатын етеді."
        }
      }
    ],
    "epilogue": {
      "ru": "Эпилог. «Астерион» входит в атмосферу по зелёному коридору, а обломки превращаются в тихий метеорный дождь над пустыней. Эквилибриум спасён не потому, что стал сильнее космоса, а потому, что научился понимать его. В архиве Лады появляется новая строка: «Следующий щит построят те, кто задаёт вопросы».",
      "en": "Epilogue. Asterion enters the atmosphere along the green corridor, and the fragments become a quiet meteor shower over the desert. Equilibrium is saved not by becoming stronger than space, but by learning to understand it. A new line appears in Lada's archive: “The next shield will be built by those who ask questions.”",
      "kk": "Эпилог. «Астерион» жасыл дәлізбен атмосфераға кіріп, сынықтар шөл үстінде тыныш метеор жаңбырына айналды. Эквилибриум ғарыштан күшті болғандықтан емес, оны түсінуді үйренгендіктен құтқарылды. Ладаның мұрағатында жаңа жол пайда болды: «Келесі қалқанды сұрақ қоятындар құрады»."
    },
    "victory": {
      "ru": "Финальный протокол принят. «Астерион» получил безопасный маршрут, а тепло, электричество, магнитное поле и свет объединились в настоящий щит.",
      "en": "The final protocol is accepted. Asterion has a safe route, and heat, electricity, magnetic fields, and light have become a true shield.",
      "kk": "Соңғы хаттама қабылданды. «Астерион» қауіпсіз жол алды, ал жылу, электр, магнит өрісі және жарық нағыз қалқанға бірікті."
    },
    "defeat": {
      "ru": "Финальная настройка не сошлась. Измерь ещё раз, сравни данные и вернись к протоколу — город ждёт твоего решения.",
      "en": "The final calibration did not converge. Measure again, compare the data, and return to the protocol—the city is waiting for your solution.",
      "kk": "Соңғы баптау сәйкес келмеді. Қайта өлшеп, деректерді салыстыр да хаттамаға орал — қала сенің шешіміңді күтуде."
    },
    "setting": {
      "ru": "Под центральной площадью города лежит лабораторное ядро. Это закрытый круглый зал с четырьмя секторами: тепловым, электрическим, магнитным и световым. Здесь хранятся чертежи незавершённого щита и последние записи создателей.",
      "en": "Beneath the city's central square lies the laboratory core. It is a sealed circular hall with four sectors: thermal, electrical, magnetic, and optical. Here the plans for the unfinished shield and the creators' final logs are kept.",
      "kk": "Қаланың орталық алаңының астында зертханалық өзек орналасқан. Бұл төрт секторы — жылу, электр, магнит және жарық — бар жабық дөңгелек зал. Мұнда аяқталмаған қалқанның сызбалары мен жасаушылардың соңғы жазбалары сақталған."
    }
  }
];
const LEVEL_NAMES_RU = {
  "1": "🛡 Техника безопасности",
  "2": "§1. Тепловое движение, броуновское движение, диффузия",
  "3": "§2. Температура, способы её измерения, температурные шкалы",
  "4": "§3. Внутренняя энергия. Способы изменения внутренней энергии",
  "5": "§4. Теплопроводность, конвекция, излучение",
  "6": "§5. Теплопередача в природе и технике",
  "7": "§6. Роль тепловых явлений в жизни живых организмов",
  "8": "§7. Количество теплоты, удельная теплоёмкость вещества",
  "9": "§8. Энергия топлива, удельная теплота сгорания топлива",
  "10": "§9. Закон сохранения и превращения энергии в тепловых процессах",
  "11": "§10. Плавление и кристаллизация твердых тел, температура плавления, удельная теплота плавления",
  "12": "§11. Парообразование и конденсация",
  "13": "§12. Кипение, удельная теплота парообразования. Зависимость температуры кипения от внешнего давления",
  "14": "§13. Первый закон термодинамики, работа газа и пара",
  "15": "§14. Необратимость тепловых процессов, второй закон термодинамики",
  "16": "§15. Тепловые двигатели",
  "17": "§16. Коэффициент полезного действия теплового двигателя",
  "18": "§17. Экологические проблемы использования тепловых машин",
  "19": "§18. Электрический заряд, электризация тел, проводники и диэлектрики",
  "20": "§19. Закон сохранения электрического заряда, взаимодействие неподвижных зарядов, закон Кулона, элементарный заряд",
  "21": "§20. Электрическое поле, напряжённость электрического поля",
  "22": "§21. Потенциал и разность потенциалов электрического поля, конденсатор",
  "23": "§22. Электрический ток, источники электрического тока",
  "24": "§23. Электрическая цепь и её составные части, сила тока, напряжение",
  "25": "§24. Закон Ома для участка цепи",
  "26": "§25. Электрическое сопротивление проводника, удельное сопротивление проводника, реостат",
  "27": "§26. Последовательное и параллельное соединение проводников",
  "28": "§27. Работа и мощность электрического тока",
  "29": "§28. Тепловое действие электрического тока, закон Джоуля — Ленца",
  "30": "§29. Зависимость электрического сопротивления металлов от температуры, сверхпроводимость",
  "31": "§30. Электронагревательные приборы, лампа накаливания, короткое замыкание, плавкие предохранители",
  "32": "§31. Химическое действие электрического тока, закон Фарадея",
  "33": "§32. Постоянные магниты, магнитное поле",
  "34": "§33. Магнитное поле прямого тока. Магнитное поле катушки с током",
  "35": "§34. Электромагниты и их применение",
  "36": "§35. Действие магнитного поля на проводник с током, электродвигатель, электроизмерительные приборы",
  "37": "§36. Электромагнитная индукция, генератор",
  "38": "§37. Закон прямолинейного распространения света",
  "39": "§38. Отражение света, законы отражения, плоские зеркала",
  "40": "§39. Сферические зеркала, построение изображения в сферическом зеркале",
  "41": "§40. Преломление света, закон преломления света, полное внутреннее отражение",
  "42": "§41. Линзы, оптическая сила линзы, формула тонкой линзы. Построение изображений в линзах",
  "43": "§42. Глаз как оптическая система, дефекты зрения и способы их исправления",
  "44": "§43. Оптические приборы",
  "45": "🔬 Лаб. №1: Смешивание воды и количество теплоты",
  "46": "🔬 Лаб. №2: Удельная теплота плавления льда",
  "47": "🔬 Лаб. №3: Цепь: ток и напряжение",
  "48": "🔬 Лаб. №4: Зависимость I от U",
  "49": "🔬 Лаб. №5: Последовательное соединение",
  "50": "🔬 Лаб. №6: Параллельное соединение",
  "51": "🔬 Лаб. №7: Работа и мощность тока",
  "52": "🔬 Лаб. №8: Постоянный магнит и поле",
  "53": "🔬 Лаб. №9: Электромагнит",
  "54": "🔬 Лаб. №10: Показатель преломления стекла",
  "55": "🔬 Лаб. №11: Фокусное расстояние линзы"
};
const LEVEL_NAMES_EN = {
  "1": "🛡 Lab Safety",
  "2": "§1. Thermal motion, Brownian motion, diffusion",
  "3": "§2. Temperature, methods of measurement, temperature scales",
  "4": "§3. Internal energy. Ways of changing internal energy",
  "5": "§4. Thermal conduction, convection, radiation",
  "6": "§5. Heat transfer in nature and technology",
  "7": "§6. The role of thermal phenomena in the life of living organisms",
  "8": "§7. Quantity of heat, specific heat capacity of a substance",
  "9": "§8. Fuel energy, specific heat of combustion",
  "10": "§9. Law of conservation and transformation of energy in thermal processes",
  "11": "§10. Melting and crystallization of solids, melting temperature, specific latent heat of fusion",
  "12": "§11. Vaporization and condensation",
  "13": "§12. Boiling, specific latent heat of vaporization. Dependence of boiling temperature on external pressure",
  "14": "§13. First law of thermodynamics, work of gas and vapor",
  "15": "§14. Irreversibility of thermal processes, second law of thermodynamics",
  "16": "§15. Heat engines",
  "17": "§16. Efficiency of a heat engine",
  "18": "§17. Environmental problems caused by heat engines",
  "19": "§18. Electric charge, electrification of bodies, conductors and dielectrics",
  "20": "§19. Conservation of electric charge, interaction of stationary charges, Coulomb's law, elementary charge",
  "21": "§20. Electric field, electric field strength",
  "22": "§21. Electric potential and potential difference, capacitor",
  "23": "§22. Electric current, sources of electric current",
  "24": "§23. Electric circuit and its components, current, voltage",
  "25": "§24. Ohm's law for a section of a circuit",
  "26": "§25. Electrical resistance, resistivity, rheostat",
  "27": "§26. Series and parallel connections of conductors",
  "28": "§27. Work and power of electric current",
  "29": "§28. Thermal effect of electric current, Joule–Lenz law",
  "30": "§29. Dependence of metal resistance on temperature, superconductivity",
  "31": "§30. Electric heaters, incandescent lamp, short circuit, fuses",
  "32": "§31. Chemical effect of electric current, Faraday's law",
  "33": "§32. Permanent magnets, magnetic field",
  "34": "§33. Magnetic field of a straight current. Magnetic field of a current-carrying coil",
  "35": "§34. Electromagnets and their applications",
  "36": "§35. Force of a magnetic field on a current-carrying conductor, electric motor, electrical measuring instruments",
  "37": "§36. Electromagnetic induction, generator",
  "38": "§37. Law of rectilinear propagation of light",
  "39": "§38. Reflection of light, laws of reflection, plane mirrors",
  "40": "§39. Spherical mirrors, image construction in a spherical mirror",
  "41": "§40. Refraction of light, law of refraction, total internal reflection",
  "42": "§41. Lenses, optical power, thin-lens formula. Image construction in lenses",
  "43": "§42. The eye as an optical system, visual defects and their correction",
  "44": "§43. Optical instruments",
  "45": "🔬 Lab No. 1: Mixing water and quantity of heat",
  "46": "🔬 Lab No. 2: Specific latent heat of fusion of ice",
  "47": "🔬 Lab No. 3: Circuit: current and voltage",
  "48": "🔬 Lab No. 4: Dependence of I on U",
  "49": "🔬 Lab No. 5: Series connection",
  "50": "🔬 Lab No. 6: Parallel connection",
  "51": "🔬 Lab No. 7: Work and power of electric current",
  "52": "🔬 Lab No. 8: Permanent magnet and magnetic field",
  "53": "🔬 Lab No. 9: Electromagnet",
  "54": "🔬 Lab No. 10: Refractive index of glass",
  "55": "🔬 Lab No. 11: Focal length of a lens"
};
const LEVEL_NAMES_KK = {
  "1": "🛡 Қауіпсіздік техникасы",
  "2": "§1. Жылулық қозғалыс, броундық қозғалыс, диффузия",
  "3": "§2. Температура, өлшеу әдістері, температура шкалалары",
  "4": "§3. Ішкі энергия. Ішкі энергияны өзгерту тәсілдері",
  "5": "§4. Жылуөткізгіштік, конвекция, сәуле шығару",
  "6": "§5. Табиғаттағы және техникадағы жылу берілу",
  "7": "§6. Тірі ағзалар өміріндегі жылулық құбылыстардың рөлі",
  "8": "§7. Жылу мөлшері, заттың меншікті жылу сыйымдылығы",
  "9": "§8. Отын энергиясы, отынның меншікті жану жылуы",
  "10": "§9. Жылу процестеріндегі энергияның сақталу және түрлену заңы",
  "11": "§10. Қатты денелердің балқуы мен кристалдануы, балқу температурасы, меншікті балқу жылуы",
  "12": "§11. Булану және конденсация",
  "13": "§12. Қайнау, меншікті булану жылуы. Қайнау температурасының сыртқы қысымға тәуелділігі",
  "14": "§13. Термодинамиканың бірінші заңы, газ бен будың жұмысы",
  "15": "§14. Жылу процестерінің қайтымсыздығы, термодинамиканың екінші заңы",
  "16": "§15. Жылу машиналары",
  "17": "§16. Жылу машинасының пайдалы әсер коэффициенті",
  "18": "§17. Жылу машиналарын пайдаланудың экологиялық мәселелері",
  "19": "§18. Электр заряды, денелердің электрленуі, өткізгіштер және диэлектриктер",
  "20": "§19. Электр зарядының сақталу заңы, тыныштықтағы зарядтардың өзара әсері, Кулон заңы, элементар заряд",
  "21": "§20. Электр өрісі, электр өрісінің кернеулігі",
  "22": "§21. Электр өрісінің потенциалы және потенциалдар айырымы, конденсатор",
  "23": "§22. Электр тогы, электр тогының көздері",
  "24": "§23. Электр тізбегі және оның бөліктері, ток күші, кернеу",
  "25": "§24. Тізбек бөлігі үшін Ом заңы",
  "26": "§25. Өткізгіштің электр кедергісі, меншікті кедергі, реостат",
  "27": "§26. Өткізгіштерді тізбектей және параллель жалғау",
  "28": "§27. Электр тогының жұмысы мен қуаты",
  "29": "§28. Электр тогының жылулық әсері, Джоуль–Ленц заңы",
  "30": "§29. Металдардың электр кедергісінің температураға тәуелділігі, асқынөткізгіштік",
  "31": "§30. Электр қыздырғыш құрылғылар, қыздыру шамы, қысқа тұйықталу, балқымалы сақтандырғыштар",
  "32": "§31. Электр тогының химиялық әсері, Фарадей заңы",
  "33": "§32. Тұрақты магниттер, магнит өрісі",
  "34": "§33. Түзу токтың магнит өрісі. Ток бар катушканың магнит өрісі",
  "35": "§34. Электромагниттер және олардың қолданылуы",
  "36": "§35. Магнит өрісінің тогы бар өткізгішке әсері, электр қозғалтқышы, электр өлшеуіш құралдар",
  "37": "§36. Электромагниттік индукция, генератор",
  "38": "§37. Жарықтың түзу сызықты таралу заңы",
  "39": "§38. Жарықтың шағылуы, шағылу заңдары, жазық айналар",
  "40": "§39. Сфералық айналар, сфералық айнадағы бейнені салу",
  "41": "§40. Жарықтың сынуы, жарықтың сыну заңы, толық ішкі шағылу",
  "42": "§41. Линзалар, линзаның оптикалық күші, жұқа линза формуласы. Линзадағы бейнелерді салу",
  "43": "§42. Оптикалық жүйе ретіндегі көз, көру ақаулары және оларды түзету",
  "44": "§43. Оптикалық құралдар",
  "45": "🔬 Зертхана №1: Суды араластыру және жылу мөлшері",
  "46": "🔬 Зертхана №2: Мұздың меншікті балқу жылуы",
  "47": "🔬 Зертхана №3: Тізбек: ток және кернеу",
  "48": "🔬 Зертхана №4: I-дің U-ге тәуелділігі",
  "49": "🔬 Зертхана №5: Тізбектей жалғау",
  "50": "🔬 Зертхана №6: Параллель жалғау",
  "51": "🔬 Зертхана №7: Токтың жұмысы мен қуаты",
  "52": "🔬 Зертхана №8: Тұрақты магнит және магнит өрісі",
  "53": "🔬 Зертхана №9: Электромагнит",
  "54": "🔬 Зертхана №10: Әйнектің сыну көрсеткіші",
  "55": "🔬 Зертхана №11: Линзаның фокус аралығы"
};
const LEVEL_DESCRIPTIONS_RU = {
  "1": "⚠ Правила безопасности в кабинете физики и при работе с приборами",
  "2": "📖 Тепловое движение частиц, броуновское движение и диффузия",
  "3": "📖 Температура, термометры и температурные шкалы",
  "4": "📖 Внутренняя энергия и способы её изменения",
  "5": "📖 Теплопроводность, конвекция и излучение",
  "6": "📖 Теплопередача в природе и технике",
  "7": "📖 Тепловые явления и терморегуляция живых организмов",
  "8": "📖 Количество теплоты и удельная теплоёмкость",
  "9": "📖 Энергия топлива и удельная теплота сгорания",
  "10": "📖 Сохранение и превращение энергии в тепловых процессах",
  "11": "📖 Плавление, кристаллизация и удельная теплота плавления",
  "12": "📖 Испарение, парообразование и конденсация",
  "13": "📖 Кипение и зависимость температуры кипения от давления",
  "14": "📖 Первый закон термодинамики и работа газа",
  "15": "📖 Необратимость тепловых процессов и второй закон термодинамики",
  "16": "📖 Тепловые двигатели и превращение теплоты в работу",
  "17": "📖 КПД теплового двигателя",
  "18": "📖 Экологические проблемы тепловых машин",
  "19": "📖 Электрический заряд, проводники и диэлектрики",
  "20": "📖 Сохранение заряда, закон Кулона и взаимодействие зарядов",
  "21": "📖 Электрическое поле и его напряжённость",
  "22": "📖 Потенциал, разность потенциалов и конденсатор",
  "23": "📖 Электрический ток и источники тока",
  "24": "📖 Электрическая цепь, ток и напряжение",
  "25": "📖 Закон Ома для участка цепи",
  "26": "📖 Сопротивление, удельное сопротивление и реостат",
  "27": "📖 Последовательное и параллельное соединение проводников",
  "28": "📖 Работа и мощность электрического тока",
  "29": "📖 Тепловое действие тока и закон Джоуля — Ленца",
  "30": "📖 Зависимость сопротивления металлов от температуры",
  "31": "📖 Электронагреватели, лампы, короткое замыкание и предохранители",
  "32": "📖 Химическое действие тока и закон Фарадея",
  "33": "📖 Постоянные магниты и магнитное поле",
  "34": "📖 Магнитное поле тока и катушки с током",
  "35": "📖 Электромагниты и их применение",
  "36": "📖 Сила магнитного поля, электродвигатель и измерительные приборы",
  "37": "📖 Электромагнитная индукция и генератор",
  "38": "📖 Прямолинейное распространение света",
  "39": "📖 Отражение света и плоские зеркала",
  "40": "📖 Сферические зеркала и построение изображений",
  "41": "📖 Преломление, закон преломления и полное внутреннее отражение",
  "42": "📖 Линзы, оптическая сила и формула тонкой линзы",
  "43": "📖 Глаз как оптическая система и коррекция зрения",
  "44": "📖 Оптические приборы",
  "45": "🔬 Смешивание воды и проверка теплового баланса",
  "46": "🔬 Определение удельной теплоты плавления льда",
  "47": "🔬 Сборка цепи, измерение тока и напряжения",
  "48": "🔬 Исследование зависимости силы тока от напряжения",
  "49": "🔬 Исследование последовательного соединения",
  "50": "🔬 Исследование параллельного соединения",
  "51": "🔬 Измерение работы и мощности электрического тока",
  "52": "🔬 Изучение постоянного магнита и магнитного поля",
  "53": "🔬 Сборка электромагнита и проверка его действия",
  "54": "🔬 Определение показателя преломления стекла",
  "55": "🔬 Определение фокусного расстояния тонкой линзы"
};
const LEVEL_DESCRIPTIONS_EN = {
  "1": "⚠ Physics laboratory safety and safe work with equipment",
  "2": "📖 Thermal motion of particles, Brownian motion and diffusion",
  "3": "📖 Temperature, thermometers and temperature scales",
  "4": "📖 Internal energy and ways to change it",
  "5": "📖 Thermal conduction, convection and radiation",
  "6": "📖 Heat transfer in nature and technology",
  "7": "📖 Thermal phenomena and thermoregulation in living organisms",
  "8": "📖 Quantity of heat and specific heat capacity",
  "9": "📖 Fuel energy and specific heat of combustion",
  "10": "📖 Conservation and transformation of energy in thermal processes",
  "11": "📖 Melting, crystallization and specific heat of fusion",
  "12": "📖 Evaporation, vaporization and condensation",
  "13": "📖 Boiling and dependence of boiling temperature on pressure",
  "14": "📖 The first law of thermodynamics and work of a gas",
  "15": "📖 Irreversibility of thermal processes and the second law of thermodynamics",
  "16": "📖 Heat engines and conversion of heat into work",
  "17": "📖 Efficiency of a heat engine",
  "18": "📖 Environmental problems caused by heat engines",
  "19": "📖 Electric charge, conductors and dielectrics",
  "20": "📖 Conservation of charge, Coulomb's law and charge interaction",
  "21": "📖 Electric field and field strength",
  "22": "📖 Potential, potential difference and the capacitor",
  "23": "📖 Electric current and current sources",
  "24": "📖 Electric circuit, current and voltage",
  "25": "📖 Ohm's law for a section of a circuit",
  "26": "📖 Resistance, resistivity and rheostat",
  "27": "📖 Series and parallel connection of conductors",
  "28": "📖 Work and power of electric current",
  "29": "📖 Thermal effect of current and the Joule–Lenz law",
  "30": "📖 Dependence of metal resistance on temperature",
  "31": "📖 Electric heaters, lamps, short circuits and fuses",
  "32": "📖 Chemical effect of current and Faraday's law",
  "33": "📖 Permanent magnets and magnetic field",
  "34": "📖 Magnetic field of current and current-carrying coils",
  "35": "📖 Electromagnets and their applications",
  "36": "📖 Magnetic force, electric motor and measuring instruments",
  "37": "📖 Electromagnetic induction and the generator",
  "38": "📖 Rectilinear propagation of light",
  "39": "📖 Reflection of light and plane mirrors",
  "40": "📖 Spherical mirrors and image construction",
  "41": "📖 Refraction, the law of refraction and total internal reflection",
  "42": "📖 Lenses, optical power and the thin-lens formula",
  "43": "📖 The eye as an optical system and vision correction",
  "44": "📖 Optical instruments",
  "45": "🔬 Mixing water and checking the heat balance",
  "46": "🔬 Determining the specific heat of fusion of ice",
  "47": "🔬 Assembling a circuit and measuring current and voltage",
  "48": "🔬 Studying the dependence of current on voltage",
  "49": "🔬 Studying series connection",
  "50": "🔬 Studying parallel connection",
  "51": "🔬 Measuring the work and power of electric current",
  "52": "🔬 Studying a permanent magnet and magnetic field",
  "53": "🔬 Assembling an electromagnet and testing its action",
  "54": "🔬 Determining the refractive index of glass",
  "55": "🔬 Determining the focal length of a thin lens"
};
const LEVEL_DESCRIPTIONS_KK = {
  "1": "⚠ Физика кабинетінде және құралдармен жұмыс істеу қауіпсіздігі",
  "2": "📖 Бөлшектердің жылулық қозғалысы, броундық қозғалыс және диффузия",
  "3": "📖 Температура, термометрлер және температура шкалалары",
  "4": "📖 Ішкі энергия және оны өзгерту тәсілдері",
  "5": "📖 Жылуөткізгіштік, конвекция және сәуле шығару",
  "6": "📖 Табиғаттағы және техникадағы жылу берілу",
  "7": "📖 Тірі ағзалардағы жылулық құбылыстар және терморегуляция",
  "8": "📖 Жылу мөлшері және меншікті жылу сыйымдылығы",
  "9": "📖 Отын энергиясы және меншікті жану жылуы",
  "10": "📖 Жылу процестеріндегі энергияның сақталуы және түрленуі",
  "11": "📖 Балқу, кристалдану және меншікті балқу жылуы",
  "12": "📖 Булану, буға айналу және конденсация",
  "13": "📖 Қайнау және қайнау температурасының қысымға тәуелділігі",
  "14": "📖 Термодинамиканың бірінші заңы және газдың жұмысы",
  "15": "📖 Жылу процестерінің қайтымсыздығы және термодинамиканың екінші заңы",
  "16": "📖 Жылу машиналары және жылуды жұмысқа айналдыру",
  "17": "📖 Жылу машинасының пайдалы әсер коэффициенті",
  "18": "📖 Жылу машиналарынан туындайтын экологиялық мәселелер",
  "19": "📖 Электр заряды, өткізгіштер және диэлектриктер",
  "20": "📖 Зарядтың сақталуы, Кулон заңы және зарядтардың өзара әсері",
  "21": "📖 Электр өрісі және өріс кернеулігі",
  "22": "📖 Потенциал, потенциалдар айырымы және конденсатор",
  "23": "📖 Электр тогы және ток көздері",
  "24": "📖 Электр тізбегі, ток күші және кернеу",
  "25": "📖 Тізбек бөлігі үшін Ом заңы",
  "26": "📖 Кедергі, меншікті кедергі және реостат",
  "27": "📖 Өткізгіштерді тізбектей және параллель жалғау",
  "28": "📖 Электр тогының жұмысы мен қуаты",
  "29": "📖 Токтың жылулық әсері және Джоуль–Ленц заңы",
  "30": "📖 Металдар кедергісінің температураға тәуелділігі",
  "31": "📖 Электр қыздырғыштар, шамдар, қысқа тұйықталу және сақтандырғыштар",
  "32": "📖 Токтың химиялық әсері және Фарадей заңы",
  "33": "📖 Тұрақты магниттер және магнит өрісі",
  "34": "📖 Токтың және ток бар катушкалардың магнит өрісі",
  "35": "📖 Электромагниттер және олардың қолданылуы",
  "36": "📖 Магниттік күш, электр қозғалтқышы және өлшеуіш құралдар",
  "37": "📖 Электромагниттік индукция және генератор",
  "38": "📖 Жарықтың түзу сызықты таралуы",
  "39": "📖 Жарықтың шағылуы және жазық айналар",
  "40": "📖 Сфералық айналар және кескін салу",
  "41": "📖 Сыну, сыну заңы және толық ішкі шағылу",
  "42": "📖 Линзалар, оптикалық күш және жұқа линза формуласы",
  "43": "📖 Оптикалық жүйе ретіндегі көз және көруді түзету",
  "44": "📖 Оптикалық құралдар",
  "45": "🔬 Суды араластыру және жылу балансын тексеру",
  "46": "🔬 Мұздың меншікті балқу жылуын анықтау",
  "47": "🔬 Тізбек құрастыру, ток пен кернеуді өлшеу",
  "48": "🔬 Ток күшінің кернеуге тәуелділігін зерттеу",
  "49": "🔬 Тізбектей жалғауды зерттеу",
  "50": "🔬 Параллель жалғауды зерттеу",
  "51": "🔬 Электр тогының жұмысы мен қуатын өлшеу",
  "52": "🔬 Тұрақты магнит пен магнит өрісін зерттеу",
  "53": "🔬 Электромагнит құрастыру және оның әсерін тексеру",
  "54": "🔬 Әйнектің сыну көрсеткішін анықтау",
  "55": "🔬 Жұқа линзаның фокус аралығын анықтау"
};
const LEVEL_THEORY = {
  "p1": {
    "ru": "## Основные идеи\n• Все вещества состоят из частиц, которые непрерывно и беспорядочно движутся. Это движение называют тепловым.\n• Броуновское движение — беспорядочное движение видимых частиц, взвешенных в жидкости или газе, под ударами молекул.\n• Диффузия — взаимное проникновение частиц одного вещества между частицами другого.\n## Важно\n• С повышением температуры частицы движутся быстрее, поэтому диффузия идёт интенсивнее.\n• Броуновское движение и диффузия подтверждают молекулярно-кинетическое строение вещества.",
    "en": "## Main ideas\n• All matter is made up of particles that move continuously and randomly. This movement is called thermal.\n• Brownian motion is the random movement of visible particles suspended in a liquid or gas under the impacts of molecules.\n• Diffusion is the mutual penetration of particles of one substance between particles of another.\n## Important\n• As temperature increases, particles move faster, so diffusion occurs more intensely.\n• Brownian motion and diffusion confirm the molecular kinetic structure of matter.",
    "kk": "## Негізгі идеялар\n• Барлық заттар үздіксіз және ретсіз қозғалатын бөлшектерден тұрады. Бұл қозғалыс термиялық деп аталады.\n• Броундық қозғалыс – молекулалардың әсерінен сұйықтықта немесе газда ілінген көрінетін бөлшектердің кездейсоқ қозғалысы.\n• Диффузия – бір заттың бөлшектерінің екінші заттың бөлшектерінің арасына өзара енуі.\n## Маңызды\n• Температура жоғарылаған сайын бөлшектер жылдамырақ қозғалады, сондықтан диффузия қарқынды жүреді.\n• Броундық қозғалыс пен диффузия заттың молекулалық-кинетикалық құрылымын растайды."
  },
  "p2": {
    "ru": "## Температура\n• Температура характеризует степень нагретости тела и связана со средней кинетической энергией хаотического движения его частиц.\n• Термометр измеряет температуру благодаря тепловому равновесию и свойству вещества изменяться при нагревании.\n## Температурные шкалы\n• В шкале Цельсия лёд плавится при 0 °C, вода кипит при 100 °C при нормальном давлении.\n• В шкале Кельвина абсолютный ноль равен 0 K = −273 °C; связь: T = t + 273.\n## Важно\n• Ощущения не дают надёжного измерения температуры: для сравнения используют прибор и одинаковые условия.",
    "en": "## Temperature\n• Temperature characterizes the degree of heating of a body and is associated with the average kinetic energy of the chaotic movement of its particles.\n• A thermometer measures temperature due to thermal equilibrium and the property of a substance to change when heated.\n## Temperature scales\n• In the Celsius scale, ice melts at 0 °C, water boils at 100 °C at normal pressure.\n• In the Kelvin scale, absolute zero is 0 K = −273 °C; connection: T = t + 273.\n## Important\n• Sensations do not provide a reliable measurement of temperature: for comparison, use a device and the same conditions.",
    "kk": "## Температура\n• Температура дененің қызу дәрежесін сипаттайды және оның бөлшектерінің ретсіз қозғалысының орташа кинетикалық энергиясымен байланысты.\n• Термометр жылулық тепе-теңдікке байланысты температураны және қыздырылған кезде заттың өзгеретін қасиетін өлшейді.\n## Температура шкалалары\n• Цельсий шкаласында мұз 0 °C температурада ериді, су 100 °C қалыпты қысымда қайнайды.\n• Кельвин шкаласында абсолютті нөл 0 K = −273 °C; қосылым: T = t + 273.\n## Маңызды\n• Сезімдер температураны сенімді өлшеуді қамтамасыз етпейді: салыстыру үшін құрылғыны және бірдей шарттарды пайдаланыңыз."
  },
  "p3": {
    "ru": "## Внутренняя энергия\n• Внутренняя энергия U — сумма кинетической энергии беспорядочного движения частиц и потенциальной энергии их взаимодействия.\n• Внутренняя энергия зависит от температуры, массы и состояния вещества, но не от движения тела как целого.\n## Как изменить внутреннюю энергию\n• Теплопередачей: энергия переходит от более нагретого тела к менее нагретому.\n• Совершением работы: при трении, деформации и сжатии газ нагревается; при расширении газ может охлаждаться.\n> ΔU = Q + A′\n• Здесь Q — теплота, полученная телом, A′ — работа внешних сил.",
    "en": "## Internal energy\n• Internal energy U is the sum of the kinetic energy of the random motion of particles and the potential energy of their interaction.\n• Internal energy depends on the temperature, mass and state of the substance, but not on the movement of the body as a whole.\n## How to change internal energy\n• Heat transfer: energy moves from a more heated body to a less heated one.\n• By performing work: during friction, deformation and compression, the gas heats up; As the gas expands, it can cool.\n> ΔU = Q + A′\n• Here Q is the heat received by the body, A′ is the work of external forces.",
    "kk": "## Ішкі энергия\n• Ішкі энергия U - бөлшектердің кездейсоқ қозғалысының кинетикалық энергиясы мен олардың өзара әрекеттесуінің потенциалдық энергиясының қосындысы.\n• Ішкі энергия заттың температурасына, массасына және күйіне байланысты, бірақ жалпы дененің қозғалысына байланысты емес.\n## Ішкі энергияны қалай өзгертуге болады\n• Жылу алмасу: энергия қызған денеден азырақ қызған денеге ауысады.\n• Жұмысты орындау арқылы: үйкеліс, деформация және қысу кезінде газ қызады; Газ кеңейген кезде ол салқындатуы мүмкін.\n> ΔU = Q + A′\n• Мұндағы Q – дене қабылдаған жылу, A′ – сыртқы күштердің жұмысы."
  },
  "p4": {
    "ru": "## Три способа теплопередачи\n• Теплопроводность — передача энергии от более нагретых частиц к соседним без переноса вещества. Особенно характерна для твёрдых тел.\n• Конвекция — перенос энергии потоками жидкости или газа; бывает естественной и вынужденной.\n• Излучение — перенос энергии электромагнитными волнами; возможно в вакууме.\n## Примеры\n• Металлическая ложка в горячем чае нагревается теплопроводностью.\n• Движение тёплого воздуха — конвекция.\n• Солнце нагревает Землю излучением.",
    "en": "## Three ways of heat transfer\n• Thermal conduction is the transfer of energy from hotter particles to neighboring ones without transfer of matter. Particularly characteristic of solids.\n• Convection - transfer of energy by flows of liquid or gas; can be natural or forced.\n• Radiation - transfer of energy by electromagnetic waves; perhaps in a vacuum.\n## Examples\n• A metal spoon in hot tea is heated by conduction.\n• The movement of warm air is convection.\n• The Sun heats the Earth with radiation.",
    "kk": "## Жылу берудің үш жолы\n• Жылуөткізгіштік - энергияның ыстық бөлшектерден көршілерге затты тасымалдамай өтуі. Әсіресе қатты заттарға тән.\n• Конвекция – энергияның сұйық немесе газ ағындары арқылы берілуі; табиғи немесе мәжбүрлі болуы мүмкін.\n• Радиация – энергияның электромагниттік толқындар арқылы берілуі; мүмкін вакуумда.\n## Мысалдар\n• Ыстық шайдағы металл қасық өткізгіштік арқылы қыздырылады.\n• Жылы ауаның қозғалысы конвекция болып табылады.\n• Күн Жерді радиациямен қыздырады."
  },
  "p5": {
    "ru": "## Теплопередача в природе и технике\n• Неравномерное нагревание поверхности Земли вызывает конвекционные потоки воздуха, ветер и перемещение воздушных масс.\n• Морские и дневные бризы связаны с разной скоростью нагревания суши и воды.\n• Теплоизоляция уменьшает нежелательную теплопередачу; её используют в термосах, стенах зданий, одежде.\n• Теплопередача применяется в отоплении, холодильных установках, теплообменниках и при приготовлении пищи.",
    "en": "## Heat transfer in nature and technology\n• Uneven heating of the Earth's surface causes convection currents of air, wind and movement of air masses.\n• Sea and daytime breezes are associated with different rates of warming of land and water.\n• Thermal insulation reduces unwanted heat transfer; It is used in thermoses, building walls, and clothing.\n• Heat transfer is used in heating, refrigeration, heat exchangers and food preparation.",
    "kk": "## Табиғаттағы және техникадағы жылу алмасу\n• Жер бетінің біркелкі қызуы ауаның, желдің конвекциялық ағындарын және ауа массаларының қозғалысын тудырады.\n• Теңіз және күндізгі желдер жер мен судың әр түрлі жылыну жылдамдығымен байланысты.\n• Жылу оқшаулау қажетсіз жылу беруді азайтады; Ол термостарда, құрылыс қабырғаларында және киімдерде қолданылады.\n• Жылу беру жылытуда, тоңазытқышта, жылу алмастырғыштарда және тағам дайындауда қолданылады."
  },
  "p6": {
    "ru": "## Живые организмы и тепло\n• Температура окружающей среды влияет на скорость процессов жизнедеятельности.\n• Теплокровные животные поддерживают температуру тела с помощью терморегуляции; холоднокровные сильнее зависят от среды.\n• Шерсть, мех, перья и жировой слой уменьшают теплопотери, потому что удерживают слой воздуха.\n• Испарение пота отводит энергию и охлаждает тело; дрожь увеличивает теплопродукцию.",
    "en": "## Living organisms and heat\n• Ambient temperature affects the speed of vital processes.\n• Warm-blooded animals maintain body temperature through thermoregulation; Cold-blooded animals are more dependent on their environment.\n• Wool, fur, feathers and fat reduce heat loss because they retain a layer of air.\n• Evaporation of sweat removes energy and cools the body; shivering increases heat production.",
    "kk": "## Тірі организмдер және жылу\n• Қоршаған ортаның температурасы өмірлік маңызды процестердің жылдамдығына әсер етеді.\n• Жылы қанды жануарлар дене температурасын терморегуляция арқылы сақтайды; Суық қанды жануарлар қоршаған ортаға көбірек тәуелді.\n• Жүн, жүн, қауырсын және май жылу шығынын азайтады, өйткені олар ауа қабатын сақтайды.\n• Тердің булануы энергияны алып, денені салқындатады; қалтырау жылу өндіруді арттырады."
  },
  "p7": {
    "ru": "## Количество теплоты\n• Количество теплоты Q — энергия, полученная или отданная телом при теплопередаче.\n> Q = cmΔt\n• c — удельная теплоёмкость, m — масса, Δt — изменение температуры.\n• Удельная теплоёмкость показывает, сколько теплоты нужно передать 1 кг вещества для нагревания на 1 °C; единица — Дж/(кг·°C).\n• При охлаждении тело отдаёт такое же по модулю количество теплоты, но Δt берут со знаком процесса.",
    "en": "## Amount of heat\n• Amount of heat Q - energy received or given off by a body during heat transfer.\n> Q = cmΔt\n• c - specific heat capacity, m - mass, Δt - temperature change.\n• Specific heat capacity shows how much heat must be transferred 1 kg from a substance to heat it to 1 °C; unit - J/(kg·°C).\n• When cooling, the body gives off the same amount of heat in modulus, but Δt is taken with the sign of the process.",
    "kk": "## Жылу мөлшері\n• Жылу мөлшері Q - жылу беру кезінде дене алатын немесе бөлетін энергия.\n> Q = cmΔt\n• c - меншікті жылу сыйымдылығы, m - масса, Δt - температураның өзгеруі.\n• Меншікті жылу сыйымдылығы затты 1 °C дейін қыздыру үшін оны 1 кг қанша жылу беру керектігін көрсетеді; бірлік - Дж/(кг·°C).\n• Салқындату кезінде дене модуль бойынша бірдей жылу мөлшерін береді, бірақ Δt процестің белгісімен алынады."
  },
  "p8": {
    "ru": "## Энергия топлива\n• При сгорании топлива химическая энергия превращается главным образом во внутреннюю энергию продуктов сгорания и нагреваемых тел.\n• Удельная теплота сгорания q показывает, сколько теплоты выделяется при полном сгорании 1 кг топлива.\n> Q = qm\n• q измеряют в Дж/кг. К органическому топливу относят дрова, торф, уголь, нефть и природный газ.\n• Реальная полезная энергия меньше выделившейся из-за потерь в окружающую среду.",
    "en": "## Fuel energy\n• During the combustion of fuel, chemical energy is converted mainly into internal energy of combustion products and heated bodies.\n• Specific heat of combustion q shows how much heat is released during complete combustion 1 kg of fuel.\n> Q = qm\n• q is measured in J/kg. K organic fuels include firewood, peat, coal, oil and natural gas.\n• Real useful energy is less than that released due to losses to the environment.",
    "kk": "## Отын энергиясы\n• Отынның жануы кезінде химиялық энергия негізінен жану өнімдері мен қызған денелердің ішкі энергиясына айналады.\n• Меншікті жану жылуы q отынның 1 кг толық жануы кезінде қанша жылу бөлетінін көрсетеді.\n> Q = qm\n• q Дж/кг арқылы өлшенеді. К органикалық отындарға отын, шымтезек, көмір, мұнай және табиғи газ жатады.\n• Нақты пайдалы энергия қоршаған ортаға шығынға байланысты бөлінетін энергиядан аз."
  },
  "p9": {
    "ru": "## Закон сохранения энергии\n• Энергия не возникает из ничего и не исчезает, а переходит из одного вида в другой и передаётся от одного тела к другому.\n• В теплоизолированной системе суммарное количество теплоты равно нулю: полученная теплота равна отданной.\n> Q₁ + Q₂ + … = 0\n• При трении механическая энергия переходит во внутреннюю; при нагревании электрическим током энергия тока превращается в тепловую.",
    "en": "## Law of Conservation of Energy\n• Energy does not arise from nothing and does not disappear, but passes from one type to another and is transferred from one body to another.\n• In a thermally insulated system, the total amount of heat is zero: the heat received is equal to the heat given off.\n> Q₁ + Q₂ + … = 0\n• During friction, mechanical energy turns into internal energy; When heated by an electric current, the energy of the current is converted into heat.",
    "kk": "## Энергияның сақталу заңы\n• Энергия жоқтан пайда болмайды және жойылмайды, бір түрден екінші түрге өтіп, бір денеден екінші денеге ауысады.\n• Жылу оқшауланған жүйеде жылудың жалпы мөлшері нөлге тең: алынған жылу бөлінген жылуға тең.\n> Q₁ + Q₂ + … = 0\n• Үйкеліс кезінде механикалық энергия ішкі энергияға айналады; Электр тогы арқылы қыздырғанда ток энергиясы жылуға айналады."
  },
  "p10": {
    "ru": "## Плавление и кристаллизация\n• Плавление — переход кристаллического тела из твёрдого состояния в жидкое; кристаллизация (отвердевание) — обратный процесс.\n• У кристаллического тела во время плавления температура постоянна и равна температуре плавления.\n• Аморфные тела не имеют определённой температуры плавления: размягчение происходит постепенно.\n> Q = λm\n• λ — удельная теплота плавления, то есть теплота для плавления 1 кг вещества при температуре плавления.",
    "en": "## Melting and crystallization\n• Melting is the transition of a crystalline body from a solid to a liquid state; crystallization (hardening) is the reverse process.\n• During melting, the temperature of a crystalline body is constant and equal to the melting point.\n• Amorphous bodies do not have a specific melting point: softening occurs gradually.\n> Q = λm\n• λ is the specific heat of fusion, that is, the heat for melting 1 kg of a substance at its melting point.",
    "kk": "## Балқу және кристалдану\n• Балқу – кристалдық дененің қатты күйден сұйық күйге ауысуы; кристалдану (қатайту) кері процесс.\n• Балқу кезінде кристалдық дененің температурасы тұрақты және балқу температурасына тең.\n• Аморфты денелердің белгілі бір балқу температурасы болмайды: жұмсарту біртіндеп жүреді.\n> Q = λm\n• λ - балқудың меншікті жылуы, яғни балқу температурасындағы заттың 1 кг балқу жылуы."
  },
  "p11": {
    "ru": "## Парообразование\n• Парообразование — переход жидкости в газ; испарение происходит с поверхности при любой температуре, кипение — во всём объёме при определённой температуре.\n• Конденсация — переход пара в жидкость; при конденсации выделяется теплота.\n• Испарение ускоряется при повышении температуры, увеличении площади поверхности, движении воздуха и уменьшении влажности.\n• При одинаковых условиях разные жидкости испаряются с разной скоростью.",
    "en": "## Vaporization\n• Vaporization - transition of liquid into gas; evaporation occurs from the surface at any temperature, boiling occurs throughout the entire volume at a certain temperature.\n• Condensation - transition of vapor into liquid; Condensation releases heat.\n• Evaporation accelerates as temperature rises, surface area increases, air movement increases, and humidity decreases.\n• Under the same conditions, different liquids evaporate at different rates.",
    "kk": "## Булану\n• Вапоризация – сұйықтың газға ауысуы; булану кез келген температурада бетінен жүреді, қайнау белгілі бір температурада бүкіл көлемде жүреді.\n• Конденсация – будың сұйықтыққа ауысуы; Конденсация жылуды шығарады.\n• Температура көтеріліп, бетінің ауданы ұлғайып, ауа қозғалысы артып, ылғалдылық азайған сайын булану жылдамдайды.\n• Бірдей жағдайда әртүрлі сұйықтықтар әртүрлі жылдамдықпен буланады."
  },
  "p12": {
    "ru": "## Кипение\n• Кипение — интенсивное парообразование по всему объёму жидкости с образованием и ростом пузырьков пара.\n• При постоянном внешнем давлении температура кипения во время процесса не меняется.\n• Повышение давления повышает температуру кипения; понижение давления её уменьшает.\n> Q = Lm\n• L — удельная теплота парообразования, теплота для превращения 1 кг жидкости в пар при температуре кипения.",
    "en": "## Boiling\n• Boiling is intense vaporization throughout the entire volume of liquid with the formation and growth of vapor bubbles.\n• At constant external pressure, the boiling point does not change during the process.\n• Increasing the pressure increases the boiling point; lowering the pressure reduces it.\n> Q = Lm\n• L is the specific heat of vaporization, the heat for converting 1 kg liquid into vapor at the boiling point.",
    "kk": "## Қайнау\n• Қайнау – сұйықтықтың бүкіл көлемінде бу көпіршіктерінің пайда болуымен және өсуімен қарқынды булану.\n• Тұрақты сыртқы қысымда процесс кезінде қайнау температурасы өзгермейді.\n• Қысымды жоғарылату қайнау температурасын арттырады; қысымды төмендету оны төмендетеді.\n> Q = Lm\n• L – буланудың меншікті жылуы, қайнау температурасында 1 кг сұйықты буға айналдыруға арналған жылу."
  },
  "p13": {
    "ru": "## Первый закон термодинамики\n• Внутренняя энергия изменяется двумя способами: теплопередачей и совершением работы.\n> ΔU = Q + A′\n• Если газ получает теплоту и расширяется, часть энергии идёт на работу газа; если над газом совершают работу, его внутренняя энергия может увеличиться.\n• Работа газа при расширении связана с перемещением поршня и действием давления.",
    "en": "## First law of thermodynamics\n• Internal energy changes in two ways: heat transfer and work.\n> ΔU = Q + A′\n• If the gas receives heat and expands, part of the energy goes to work the gas; If work is done on a gas, its internal energy can increase.\n• The work of gas during expansion is associated with the movement of the piston and the action of pressure.",
    "kk": "## Термодинамиканың бірінші заңы\n• Ішкі энергия екі жолмен өзгереді: жылу алмасу және жұмыс.\n> ΔU = Q + A′\n• Егер газ жылуды қабылдап, кеңейсе, энергияның бір бөлігі газдың жұмысына кетеді; Егер газда жұмыс жасалса, оның ішкі энергиясы артуы мүмкін.\n• Кеңейту кезіндегі газдың жұмысы поршень қозғалысымен және қысымның әрекетімен байланысты."
  },
  "p14": {
    "ru": "## Необратимость\n• Самопроизвольно теплота переходит от более горячего тела к более холодному, но не наоборот.\n• Механическая энергия при трении превращается во внутреннюю; обратное превращение без других изменений само собой не происходит.\n• Такие процессы называют необратимыми.\n## Второй закон термодинамики\n• Он задаёт направление протекания тепловых процессов и объясняет невозможность полностью превратить теплоту в работу в циклической машине.",
    "en": "## Irreversibility\n• Heat spontaneously transfers from a hotter body to a colder one, but not vice versa.\n• Mechanical energy during friction is converted into internal energy; the reverse transformation without other changes does not occur by itself.\n• Such processes are called irreversible.\n## Second law of thermodynamics\n• It sets the direction of thermal processes and explains the impossibility of completely converting heat into work in a cyclic machine.",
    "kk": "## Қайтымсыздық\n• Жылу ыстық денеден суық денеге өздігінен өтеді, бірақ керісінше емес.\n• Үйкеліс кезіндегі механикалық энергия ішкі энергияға айналады; басқа өзгерістерсіз кері түрлендіру өздігінен болмайды.\n• Мұндай процестер қайтымсыз деп аталады.\n## Термодинамиканың екінші заңы\n• Ол жылу процестерінің бағытын белгілейді және циклдік машинада жылуды толығымен жұмысқа айналдыру мүмкін еместігін түсіндіреді."
  },
  "p15": {
    "ru": "## Тепловой двигатель\n• Тепловой двигатель превращает часть внутренней энергии рабочего тела в механическую работу.\n• Основные части: нагреватель, рабочее тело и холодильник.\n• Рабочее тело получает теплоту от нагревателя, расширяется и совершает работу, затем отдаёт часть энергии холодильнику.\n• Примеры: паровая турбина, двигатель внутреннего сгорания, реактивный двигатель.",
    "en": "## Heat engine\n• A heat engine converts part of the internal energy of the working fluid into mechanical work.\n• Main parts: heater, working fluid and refrigerator.\n• The working fluid receives heat from the heater, expands and does work, then transfers part of the energy to the refrigerator.\n• Examples: steam turbine, internal combustion engine, jet engine.",
    "kk": "## Жылу қозғалтқышы\n• Жылу қозғалтқышы жұмыс сұйықтығының ішкі энергиясының бір бөлігін механикалық жұмысқа түрлендіреді.\n• Негізгі бөліктер: жылытқыш, жұмыс сұйықтығы және тоңазытқыш.\n• Жұмыс сұйықтығы қыздырғыштан жылу алады, кеңейеді және жұмыс істейді, содан кейін энергияның бір бөлігін тоңазытқышқа береді.\n• Мысалдар: бу турбинасы, іштен жанатын қозғалтқыш, реактивті қозғалтқыш."
  },
  "p16": {
    "ru": "## Коэффициент полезного действия\n• Нагреватель передаёт рабочему телу Q₁, холодильнику отдаётся Q₂, а полезная работа равна A = Q₁ − Q₂.\n> η = A/Q₁ = (Q₁ − Q₂)/Q₁\n• КПД показывает, какая доля энергии нагревателя превращена в полезную работу; его выражают долей или процентами.\n• Для любого реального двигателя η < 1 (меньше 100%).",
    "en": "## Efficiency\n• The heater transfers Q₁ to the working fluid, Q₂ is transferred to the refrigerator, and the useful work is A = Q₁ − Q₂.\n> η = A/Q₁ = (Q₁ − Q₂)/Q₁\n• Efficiency shows what fraction of the heater's energy is converted into useful work; it is expressed as shares or percentages.\n• For any real engine η < 1 (is less than 100%).",
    "kk": "## Тиімділік\n• Қыздырғыш Q₁ жұмыс сұйықтығына, Q₂ тоңазытқышқа тасымалданады, ал пайдалы жұмыс A = Q₁ − Q₂.\n> η = A/Q₁ = (Q₁ − Q₂)/Q₁\n• Тиімділік қыздырғыш энергиясының қандай бөлігі пайдалы жұмысқа түрленетінін көрсетеді; ол үлеспен немесе пайызбен көрсетіледі.\n• Кез келген нақты қозғалтқыш үшін η < 1 ( 100% мәнінен аз)."
  },
  "p17": {
    "ru": "## Воздействие тепловых машин\n• Сжигание топлива сопровождается выбросами углекислого газа, оксидов азота, сажи и других веществ.\n• Последствия: загрязнение воздуха и воды, усиление парникового эффекта, кислотные дожди, изменение климата.\n• Уменьшить вред помогают очистка выбросов, экономия топлива, повышение КПД и переход к возобновляемым источникам энергии.\n• Экологичность машины оценивают не только по мощности, но и по расходу топлива и составу выбросов.",
    "en": "## Impact of heat engines\n• Combustion of fuel is accompanied by emissions of carbon dioxide, nitrogen oxides, soot and other substances.\n• Consequences: air and water pollution, increased greenhouse effect, acid rain, climate change.\n• Cleaning up emissions, saving fuel, increasing efficiency and switching to renewable energy sources can help reduce harm.\n• The environmental friendliness of a car is assessed not only by power, but also by fuel consumption and emissions.",
    "kk": "## Жылу қозғалтқыштарының әсері\n• Отынның жануы көмірқышқыл газының, азот оксидтерінің, күйенің және басқа заттардың шығарындыларымен бірге жүреді.\n• Салдары: ауа мен судың ластануы, парниктік әсердің күшеюі, қышқыл жаңбырлар, климаттың өзгеруі.\n• Шығарындыларды тазалау, отынды үнемдеу, тиімділікті арттыру және жаңартылатын энергия көздеріне ауысу зиянды азайтуға көмектеседі.\n• Автокөліктің қоршаған ортаға зиянсыздығы тек қуатпен ғана емес, сонымен қатар жанармай шығыны мен шығарындыларымен де бағаланады."
  },
  "p18": {
    "ru": "## Электрический заряд\n• Электрический заряд бывает положительным и отрицательным; одноимённые заряды отталкиваются, разноимённые притягиваются.\n• Электризация — приобретение телом заряда при соприкосновении, трении или влиянии.\n• В металлах есть свободные электроны — проводники; в диэлектриках свободных зарядов мало, поэтому они проводят ток плохо.\n• При электризации заряд не создаётся из ничего: происходит переход или перераспределение электронов.",
    "en": "## Electric charge\n• Electric charge can be positive or negative; Like charges repel, unlike charges attract.\n• Electrification is the acquisition of a charge by the body through contact, friction or influence.\n• Metals have free electrons - conductors; There are few free charges in dielectrics, so they conduct current poorly.\n• During electrification, a charge is not created out of nothing: a transition or redistribution of electrons occurs.",
    "kk": "## Электр заряды\n• Электр заряды оң немесе теріс болуы мүмкін; Зарядтар итермелейді, ал зарядтар тартады.\n• Электрлендіру – дененің жанасу, үйкеліс немесе әсер ету арқылы заряд алуы.\n• Металдарда бос электрондар – өткізгіштер болады; Диэлектриктерде бос зарядтар аз, сондықтан олар токты нашар өткізеді.\n• Электрлендіру кезінде заряд жоқтан пайда болмайды: электрондардың ауысуы немесе қайта бөлінуі жүреді."
  },
  "p19": {
    "ru": "## Закон сохранения заряда и закон Кулона\n• Алгебраическая сумма зарядов замкнутой системы сохраняется.\n> F = k|q₁q₂|/r²\n• Сила взаимодействия точечных неподвижных зарядов прямо пропорциональна произведению модулей зарядов и обратно пропорциональна квадрату расстояния.\n• Элементарный заряд e = 1,6·10⁻¹⁹ Кл; заряд электрона −e, протона +e.\n• Закон Кулона применяют в вакууме и с учётом свойств среды.",
    "en": "## Law of conservation of charge and Coulomb's law\n• The algebraic sum of the charges of a closed system is conserved.\n> F = k|q₁q₂|/r²\n• The force of interaction between stationary point charges is directly proportional to the product of the charge moduli and inversely proportional to the square of the distance.\n• Elementary charge e = 1.6·10⁻¹⁹ C; charge of electron −e, proton +e.\n• Coulomb's law is applied in a vacuum and taking into account the properties of the medium.",
    "kk": "## Зарядтың сақталу заңы және Кулон заңы\n• Тұйық жүйе зарядтарының алгебралық қосындысы сақталады.\n> F = k|q₁q₂|/r²\n• Қозғалмайтын нүктелік зарядтардың өзара әрекеттесу күші заряд модулдерінің көбейтіндісіне тура пропорционал және қашықтықтың квадратына кері пропорционал.\n• Элементар заряд e = 1,6·10⁻¹⁹ Кл; электрон заряды −e, протон +e.\n• Кулон заңы вакуумда және ортаның қасиеттерін ескере отырып қолданылады."
  },
  "p20": {
    "ru": "## Электрическое поле\n• Электрическое поле — особая форма материи, посредством которой взаимодействуют заряженные тела.\n• Напряжённость E показывает силу, действующую на единичный положительный пробный заряд.\n> E = F/q\n• Направление E совпадает с направлением силы для положительного пробного заряда.\n• Силовые линии выходят из положительного заряда и входят в отрицательный; они не пересекаются.",
    "en": "## Electric field\n• An electric field is a special form of matter through which charged bodies interact.\n• Tension E shows the force acting on a unit positive test charge.\n> E = F/q\n• The direction of E coincides with the direction of the force for a positive test charge.\n• Lines of force leave a positive charge and enter a negative charge; they don't intersect.",
    "kk": "## Электр өрісі\n• Электр өрісі – зарядталған денелер әрекеттесетін заттың ерекше түрі.\n• Кернеу E бірлік оң сынақ зарядына әсер ететін күшті көрсетеді.\n> E = F/q\n• E бағыты оң сынақ заряды үшін күштің бағытымен сәйкес келеді.\n• Күш сызықтары оң зарядтан шығып, теріс зарядқа енеді; олар қиылыспайды."
  },
  "p21": {
    "ru": "## Потенциал и напряжение\n• Потенциал φ — энергетическая характеристика электрического поля в точке.\n> φ = W/q\n• Разность потенциалов (напряжение) между точками равна работе поля по перемещению единичного заряда.\n> U = A/q\n• Конденсатор состоит из двух проводников, разделённых диэлектриком, и накапливает заряд и энергию электрического поля.\n• Единица напряжения — вольт (В).",
    "en": "## Potential and voltage\n• Potential φ – energy characteristic of the electric field at a point.\n> φ = W/q\n• The potential difference (voltage) between points is equal to the work done by the field to move a unit charge.\n> U = A/q\n• A capacitor consists of two conductors separated by a dielectric and stores charge and electric field energy.\n• The unit of voltage is volt (V).",
    "kk": "## Потенциал және кернеу\n• Потенциал φ – нүктедегі электр өрісінің энергетикалық сипаттамасы.\n> φ = W/q\n• Нүктелер арасындағы потенциалдар айырымы (кернеу) бірлік зарядты жылжыту үшін өріс атқарған жұмысқа тең.\n> U = A/q\n• Конденсатор диэлектрикпен бөлінген екі өткізгіштен тұрады және заряд пен электр өрісінің энергиясын сақтайды.\n• Кернеу бірлігі вольт (V)."
  },
  "p22": {
    "ru": "## Электрический ток\n• Электрический ток — упорядоченное движение заряженных частиц.\n• Для существования тока нужны свободные носители зарядов, электрическое поле и замкнутая цепь.\n• Источник тока поддерживает разность потенциалов и разделяет заряды; примеры — гальванический элемент, аккумулятор, генератор.\n• В металлах носители тока — электроны, в электролитах — положительные и отрицательные ионы.",
    "en": "## Electric current\n• Electric current is the ordered movement of charged particles.\n• For current to exist, free charge carriers, an electric field and a closed circuit are needed.\n• The current source maintains a potential difference and separates charges; examples are galvanic cell, battery, generator.\n• In metals, current carriers are electrons; in electrolytes, they are positive and negative ions.",
    "kk": "## Электр тогы\n• Электр тогы – зарядталған бөлшектердің реттелген қозғалысы.\n• Ток болуы үшін бос заряд тасымалдаушылар, электр өрісі және тұйық тізбек қажет.\n• Ток көзі потенциалдар айырмасын сақтайды және зарядтарды бөледі; мысалдар гальваникалық элемент, аккумулятор, генератор.\n• Металдарда ток тасушылар электрондар болып табылады; электролиттерде олар оң және теріс иондар."
  },
  "p23": {
    "ru": "## Электрическая цепь\n• Цепь состоит из источника тока, потребителей, соединительных проводов и ключа; на схемах используют условные обозначения.\n• Сила тока показывает заряд, проходящий через поперечное сечение проводника за единицу времени.\n> I = q/t\n• Амперметр включают последовательно.\n• Напряжение — работа электрического поля по перемещению единичного заряда; вольтметр включают параллельно участку.",
    "en": "## Electric circuit\n• The circuit consists of a current source, consumers, connecting wires and a key; Symbols are used in the diagrams.\n• Current shows the charge passing through the cross section of a conductor per unit time.\n> I = q/t\n• The ammeter is connected in series.\n• Voltage - the work of the electric field to move a unit charge; the voltmeter is switched on parallel to the section.",
    "kk": "## Электр тізбегі\n• Тізбек ток көзінен, тұтынушылардан, қосу сымдарынан және кілттен тұрады; Диаграммаларда таңбалар қолданылады.\n• Ток уақыт бірлігінде өткізгіштің көлденең қимасы арқылы өтетін зарядты көрсетеді.\n> I = q/t\n• Амперметр тізбектей қосылған.\n• Кернеу – бірлік зарядты жылжыту үшін электр өрісінің жұмысы; вольтметр секцияға параллель қосылады."
  },
  "p24": {
    "ru": "## Закон Ома\n• Для участка цепи при постоянной температуре сила тока прямо пропорциональна напряжению и обратно пропорциональна сопротивлению.\n> I = U/R\n> U = IR; R = U/I\n• График I(U) для металлического проводника при постоянной температуре — прямая через начало координат.\n• Единица сопротивления — ом (Ом).",
    "en": "## Ohm's law\n• For a section of circuit at constant temperature, the current is directly proportional to the voltage and inversely proportional to the resistance.\n> I = U/R\n> U = IR; R = U/I\n• Graph I(U) for a metal conductor at a constant temperature - a straight line through the origin.\n• The unit of resistance is ohm (Ω).",
    "kk": "## Ом заңы\n• Тұрақты температурадағы тізбектің қимасы үшін ток кернеуге тура пропорционал және кедергіге кері пропорционал.\n> I = U/R\n> U = IR; R = U/I\n• Тұрақты температурадағы металл өткізгіш үшін I(U) графигі – координат басынан өтетін түзу.\n• Кедергі бірлігі Ом (Ом)."
  },
  "p25": {
    "ru": "## Сопротивление проводника\n• Сопротивление возникает из-за столкновений электронов с ионами кристаллической решётки.\n> R = ρl/S\n• R зависит от материала (удельного сопротивления ρ), длины l и площади поперечного сечения S.\n• Реостат — прибор с изменяемым сопротивлением; им регулируют силу тока.\n• Удельное сопротивление характеризует материал проводника и измеряется в Ом·м.",
    "en": "## Conductor resistance\n• Resistance arises from collisions between electrons and ions in the crystal lattice.\n> R = ρl/S\n• R depends on the material (resistivity ρ), length l and cross-sectional area S.\n• Rheostat - a device with variable resistance; they regulate the current strength.\n• Resistivity characterizes the material of the conductor and is measured in Ω·m.",
    "kk": "## Өткізгіш кедергісі\n• Қарсылық кристалдық тордағы электрондар мен иондардың соқтығысуы нәтижесінде пайда болады.\n> R = ρl/S\n• R материалға (кедергі ρ), ұзындыққа l және көлденең қима ауданы S тәуелді.\n• Реостат – айнымалы кедергісі бар құрылғы; олар ток күшін реттейді.\n• Меншіктілік өткізгіштің материалын сипаттайды және Ом·м өлшенеді."
  },
  "p26": {
    "ru": "## Соединения проводников\n• При последовательном соединении через все элементы проходит один и тот же ток.\n> I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂\n• При параллельном соединении напряжение на ветвях одинаково, а ток разветвляется.\n> U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂\n• Бытовые потребители обычно соединяют параллельно: отказ одного не выключает остальные.",
    "en": "## Wire connections\n• In a series connection, the same current passes through all the elements.\n> I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂\n• In a parallel connection, the voltage on the branches is the same, but the current is branched.\n> U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂\n• Household consumers are usually connected in parallel: the failure of one does not turn off the others.",
    "kk": "## Сымды қосылымдар\n• Тізбектелген қосылымда бірдей ток барлық элементтер арқылы өтеді.\n> I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂\n• Параллель қосылымда тармақтардағы кернеу бірдей, бірақ ток тармақталған.\n> U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂\n• Тұрмыстық тұтынушылар әдетте параллельді қосылады: біреуінің істен шығуы басқаларын өшірмейді."
  },
  "p27": {
    "ru": "## Работа и мощность тока\n• Работа тока — энергия, переданная электрическим полем потребителю.\n> A = UIt\n• Мощность показывает работу за единицу времени.\n> P = A/t = UI\n• Единица работы — джоуль, мощности — ватт; электрическую энергию в быту измеряют в кВт·ч.\n• Стоимость электроэнергии равна произведению потреблённой энергии на тариф.",
    "en": "## Work and current power\n• Current work is the energy transferred by the electric field to the consumer.\n> A = UIt\n• Power shows the work done per unit of time.\n> P = A/t = UI\n• Unit of work - joule, power - watt; Electrical energy in everyday life is measured in kW·h.\n• The cost of electricity is equal to the product of consumed energy and the tariff.",
    "kk": "## Жұмыс және ағымдағы қуат\n• Ағымдағы жұмыс – электр өрісі арқылы тұтынушыға берілетін энергия.\n> A = UIt\n• Қуат уақыт бірлігінде атқарылған жұмысты көрсетеді.\n> P = A/t = UI\n• Жұмыс бірлігі – джоуль, қуат – ватт; Күнделікті өмірдегі электр энергиясы кВт·ч арқылы өлшенеді.\n• Электр энергиясының құны тұтынылған энергия мен тарифтің көбейтіндісіне тең."
  },
  "p28": {
    "ru": "## Тепловое действие тока\n• При прохождении тока проводник нагревается: энергия электрического поля превращается во внутреннюю.\n> Q = A = UIt = I²Rt = U²t/R\n• Закон Джоуля — Ленца: количество теплоты зависит от квадрата силы тока, сопротивления и времени.\n• Тепловое действие используют в нагревателях, лампах, предохранителях; иногда оно является нежелательным.",
    "en": "## Thermal effect of current\n• When current passes, the conductor heats up: the energy of the electric field is converted into internal energy.\n> Q = A = UIt = I²Rt = U²t/R\n• Joule-Lenz Law: The amount of heat depends on the square of the current, resistance and time.\n• Thermal action is used in heaters, lamps, fuses; sometimes it is undesirable.",
    "kk": "## Токтың жылу эффектісі\n• Ток өткенде өткізгіш қызады: электр өрісінің энергиясы ішкі энергияға айналады.\n> Q = A = UIt = I²Rt = U²t/R\n• Джоуль-Ленц заңы: Жылу мөлшері токтың квадратына, кедергіге және уақытқа байланысты.\n• Жылулық әсер қыздырғыштарда, шамдарда, сақтандырғыштарда қолданылады; кейде бұл жағымсыз."
  },
  "p29": {
    "ru": "## Сопротивление и температура\n• При нагревании металлической решётки ионы колеблются сильнее, поэтому столкновений электронов больше, а сопротивление металла возрастает.\n• Для некоторых полупроводников при нагревании сопротивление уменьшается.\n• Сверхпроводимость — резкое падение сопротивления до практически нулевого при охлаждении ниже критической температуры.\n• Зависимость сопротивления от температуры используют в термометрах сопротивления и датчиках.",
    "en": "## Resistance and temperature\n• When a metal lattice is heated, the ions vibrate more, so there are more electron collisions and the resistance of the metal increases.\n• For some semiconductors, resistance decreases when heated.\n• Superconductivity - a sharp drop in resistance to almost zero when cooled below a critical temperature.\n• The dependence of resistance on temperature is used in resistance thermometers and sensors.",
    "kk": "## Қарсылық және температура\n• Металл торды қыздырғанда иондар көбірек тербеледі, сондықтан электрондардың соқтығысуы көбірек болады және металдың кедергісі артады.\n• Кейбір жартылай өткізгіштер үшін қызған кезде кедергі азаяды.\n• Асқын өткізгіштік – критикалық температурадан төмен салқындаған кезде қарсылықтың нөлге жуық күрт төмендеуі.\n• Кедергінің температураға тәуелділігі қарсылық термометрлері мен датчиктерде қолданылады."
  },
  "p30": {
    "ru": "## Электронагревательные приборы и безопасность\n• Нагреватели используют высокое сопротивление спирали и тепловое действие тока.\n• В лампе накаливания ток нагревает вольфрамовую нить до свечения; светодиодная лампа расходует энергию эффективнее.\n• Короткое замыкание — соединение участков цепи с очень малым сопротивлением; ток резко возрастает.\n• Плавкий предохранитель размыкает цепь, когда ток становится опасным.",
    "en": "## Electric heating devices and safety\n• Heaters use high coil resistance and the thermal effect of current.\n• In an incandescent lamp, the current heats the tungsten filament until it glows; The LED lamp uses energy more efficiently.\n• Short circuit - connection of circuit sections with very low resistance; the current increases sharply.\n• The fuse breaks the circuit when the current becomes dangerous.",
    "kk": "## Электр жылыту құрылғылары және қауіпсіздік\n• Қыздырғыштар жоғары катушка кедергісін және токтың жылу әсерін пайдаланады.\n• Қыздыру шамында ток вольфрам жіпті жарқырағанша қыздырады; Жарықдиодты шам энергияны тиімдірек пайдаланады.\n• Қысқа тұйықталу – кедергісі өте төмен тізбек бөліктерін қосу; ток күрт артады.\n• Ток қауіпті болған кезде сақтандырғыш тізбекті үзеді."
  },
  "p31": {
    "ru": "## Электрический ток в электролитах\n• В растворах и расплавах электролитов ток создают направленно движущиеся положительные и отрицательные ионы.\n• Химическое действие тока — выделение веществ на электродах; процесс называют электролизом.\n• При электролизе масса выделившегося вещества пропорциональна заряду, прошедшему через электролит.\n> m = kIt\n• k — электрохимический эквивалент вещества.",
    "en": "## Electric current in electrolytes\n• In solutions and melts of electrolytes, current is created by directionally moving positive and negative ions.\n• Chemical effect of current - release of substances on the electrodes; the process is called electrolysis.\n• During electrolysis, the mass of the released substance is proportional to the charge passing through the electrolyte.\n> m = kIt\n• k – electrochemical equivalent of the substance.",
    "kk": "## Электролиттердегі электр тогы\n• Электролиттердің ерітінділері мен балқымаларында оң және теріс иондардың бағытты қозғалуынан ток пайда болады.\n• Токтың химиялық әсері – электродтарға заттардың бөлінуі; процесс электролиз деп аталады.\n• Электролиз кезінде бөлінетін заттың массасы электролит арқылы өтетін зарядқа пропорционал болады.\n> m = kIt\n• k – заттың электрохимиялық эквиваленті."
  },
  "p32": {
    "ru": "## Постоянные магниты\n• Магнит имеет два полюса: северный N и южный S; отдельно один полюс получить нельзя.\n• Одноимённые полюса отталкиваются, разноимённые притягиваются.\n• Магнитное поле существует вокруг магнита и действует на магниты, магнитные стрелки и некоторые материалы.\n• Силовые линии магнитного поля замкнуты; снаружи магнита идут от N к S, гуще там, где поле сильнее.",
    "en": "## Permanent magnets\n• The magnet has two poles: north N and south S; One pole cannot be obtained separately.\n• Like poles repel, unlike poles attract.\n• A magnetic field exists around a magnet and affects magnets, magnetic needles and some materials.\n• Magnetic field lines are closed; outside the magnet they go from N to S, thicker where the field is stronger.",
    "kk": "## Тұрақты магниттер\n• Магниттің екі полюсі бар: солтүстік N және оңтүстік S; Бір полюсті бөлек алуға болмайды.\n• Полюстер кері тартады, полюстерге ұқсамайды.\n• Магниттің айналасында магнит өрісі бар және магниттерге, магниттік инелерге және кейбір материалдарға әсер етеді.\n• Магниттік өріс сызықтары жабық; магниттің сыртында олар N-ден S-ге дейін, өріс күштірек жерде қалыңырақ болады."
  },
  "p33": {
    "ru": "## Магнитное поле тока\n• Вокруг проводника с током возникает магнитное поле; у прямого проводника линии поля — концентрические окружности.\n• Направление поля определяют правилом правой руки или буравчика.\n• Катушка с током создаёт поле, похожее на поле полосового магнита; его усиливают увеличением тока и числа витков.\n• При изменении направления тока меняются полюса катушки.",
    "en": "## Magnetic field of current\n• A magnetic field appears around a current-carrying conductor; a straight conductor has field lines that are concentric circles.\n• The direction of the field is determined by the right hand or gimlet rule.\n• A current-carrying coil creates a field similar to that of a bar magnet; it is strengthened by increasing the current and the number of turns.\n• When the direction of current changes, the poles of the coil change.",
    "kk": "## Токтың магнит өрісі\n• Тогы бар өткізгіштің айналасында магнит өрісі пайда болады; түзу өткізгіште концентрлік шеңберлер болып табылатын өріс сызықтары болады.\n• Өріс бағыты оң қол немесе гимлет ережесімен анықталады.\n• Тогы бар катушка жолақ магнитіне ұқсас өріс жасайды; ол ток күші мен айналым санын көбейту арқылы күшейтіледі.\n• Ток бағыты өзгерген кезде катушканың полюстері өзгереді."
  },
  "p34": {
    "ru": "## Электромагнит\n• Электромагнит — катушка с током, обычно с железным сердечником.\n• Сердечник усиливает поле и делает его сильнее внутри катушки.\n• Сила электромагнита возрастает при увеличении силы тока и числа витков.\n• Электромагниты применяют в подъёмных кранах, реле, звонках, динамиках и замках.",
    "en": "## Electromagnet\n• An electromagnet is a coil of current, usually with an iron core.\n• The core amplifies the field and makes it stronger inside the coil.\n• The strength of an electromagnet increases with increasing current and number of turns.\n• Electromagnets are used in cranes, relays, bells, speakers and locks.",
    "kk": "## Электромагнит\n• Электромагнит – әдетте темір өзегі бар ток орамы.\n• Өзек өрісті күшейтеді және оны катушка ішінде күшейтеді.\n• Электромагниттің күші ток пен айналым саны артқан сайын артады.\n• Электромагниттер крандарда, релелерде, қоңырауларда, колонкалар мен құлыптарда қолданылады."
  },
  "p35": {
    "ru": "## Действие поля на проводник\n• На проводник с током в магнитном поле действует сила Ампера; её направление зависит от направления тока и поля.\n• Электродвигатель превращает электрическую энергию в механическую работу благодаря этой силе.\n• В электроизмерительных приборах действие силы на рамку с током превращается в поворот стрелки.\n• Направление силы определяют правилом левой руки.",
    "en": "## Effect of the field on the conductor\n• A current-carrying conductor in a magnetic field is acted upon by the Ampere force; its direction depends on the direction of the current and the field.\n• An electric motor converts electrical energy into mechanical work through this force.\n• In electrical measuring instruments, the action of force on a current-carrying frame turns into a rotation of the arrow.\n• The direction of force is determined by the left hand rule.",
    "kk": "## Өрістің өткізгішке әсері\n• Магнит өрісіндегі тогы бар өткізгішке Ампер күші әсер етеді; оның бағыты ток пен өрістің бағытына байланысты.\n• Электр қозғалтқышы осы күш арқылы электр энергиясын механикалық жұмысқа түрлендіреді.\n• Электрлік өлшеуіш аспаптарда ток бар рамаға күштің әрекеті жебенің айналуына айналады.\n• Күштің бағыты сол қол ережесімен анықталады."
  },
  "p36": {
    "ru": "## Электромагнитная индукция\n• Электромагнитная индукция — возникновение электрического тока в замкнутом проводнике при изменении магнитного потока.\n• Индукционный ток возникает при движении магнита относительно катушки или при изменении тока в соседней катушке.\n• Генератор превращает механическую энергию в электрическую, используя индукцию.\n• Направление индукционного тока определяется правилом Ленца.",
    "en": "## Electromagnetic induction\n• Electromagnetic induction is the occurrence of an electric current in a closed conductor when the magnetic flux changes.\n• Induction current occurs when a magnet moves relative to a coil or when the current in an adjacent coil changes.\n• A generator converts mechanical energy into electrical energy using induction.\n• The direction of the induced current is determined by Lenz's rule.",
    "kk": "## Электромагниттік индукция\n• Электромагниттік индукция – магнит ағыны өзгерген кезде тұйық өткізгіште электр тогының пайда болуы.\n• Индукциялық ток магнит катушкаға қатысты қозғалғанда немесе көршілес катушкадағы ток өзгергенде пайда болады.\n• Генератор индукция көмегімен механикалық энергияны электр энергиясына түрлендіреді.\n• Индукциялық токтың бағыты Ленц ережесімен анықталады."
  },
  "p37": {
    "ru": "## Прямолинейное распространение света\n• Свет в однородной прозрачной среде распространяется прямолинейно.\n• Луч — линия, показывающая направление распространения света; пучок состоит из нескольких лучей.\n• Образование тени и полутени, солнечные и лунные затмения объясняются прямолинейным распространением.\n• Для наблюдения предмета свет от источника или отражённый от предмета попадает в глаз.",
    "en": "## Rectilinear propagation of light\n• Light propagates in a straight line in a homogeneous transparent medium.\n• Ray - a line showing the direction of light propagation; the beam consists of several rays.\n• The formation of shadow and penumbra, solar and lunar eclipses are explained by linear propagation.\n• To observe an object, light from a source or reflected from an object enters the eye.",
    "kk": "## Жарықтың түзу сызықты таралуы\n• Жарық біртекті мөлдір ортада түзу сызықпен таралады.\n• Сәуле – жарықтың таралу бағытын көрсететін сызық; сәуле бірнеше сәулелерден тұрады.\n• Көлеңке мен жарты жарықтың, күн мен айдың тұтылуының түзілуі сызықтық таралу арқылы түсіндіріледі.\n• Объектіні бақылау үшін көзге көзден немесе заттан шағылған жарық түседі."
  },
  "p38": {
    "ru": "## Отражение света\n• Отражение — возвращение света в первую среду при падении на границу раздела.\n> α = β\n• Угол падения α и угол отражения β отсчитывают от перпендикуляра к поверхности; падающий луч, отражённый луч и перпендикуляр лежат в одной плоскости.\n• Плоское зеркало даёт мнимое, прямое изображение равного размера; изображение находится на таком же расстоянии за зеркалом, как предмет перед ним.",
    "en": "## Light reflection\n• Reflection is the return of light to the first medium when striking an interface.\n> α = β\n• The angle of incidence α and the angle of reflection β are measured from the perpendicular to the surface; the incident ray, the reflected ray and the perpendicular lie in the same plane.\n• A plane mirror produces a virtual, direct image of equal size; the image is at the same distance behind the mirror as the object in front of it.",
    "kk": "## Жарықтың шағылысуы\n• Рефлексия - интерфейске түскен кезде жарықтың бірінші ортаға қайта оралуы.\n> α = β\n• Түсу бұрышы α және шағылу бұрышы β бетке перпендикулярдан өлшенеді; түскен сәуле, шағылған сәуле және перпендикуляр бір жазықтықта жатады.\n• Жазық айна бірдей өлшемдегі виртуалды, тура кескінді жасайды; кескін айнаның артында тұрған объектімен бірдей қашықтықта болады."
  },
  "p39": {
    "ru": "## Сферические зеркала\n• Вогнутое зеркало отражает внутренней поверхностью сферы и собирает параллельные лучи; выпуклое рассеивает их.\n• Главная оптическая ось проходит через центр сферы и вершину зеркала; F — фокус, O — центр кривизны.\n> F = R/2\n• Изображение строят по трём главным лучам: параллельному оси, через фокус и через центр кривизны.\n• Выпуклое зеркало всегда даёт мнимое, прямое и уменьшенное изображение.",
    "en": "## Spherical mirrors\n• A concave mirror reflects with the inner surface of the sphere and collects parallel rays; the convex dissipates them.\n• The main optical axis passes through the center of the sphere and the top of the mirror; F — focus, O — center of curvature.\n> F = R/2\n• The image is constructed along three main rays: parallel to the axis, through the focus and through the center of curvature.\n• A convex mirror always produces a virtual, upright and reduced image.",
    "kk": "## Сфералық айналар\n• Ойыс айна шардың ішкі бетімен шағылысып, параллель сәулелерді жинайды; дөңес оларды таратады.\n• Негізгі оптикалық ось сфераның ортасы мен айнаның жоғарғы жағы арқылы өтеді; F — фокус, O — қисықтық орталығы.\n> F = R/2\n• Кескін үш негізгі сәуленің бойымен салынған: оське параллель, фокус арқылы және қисықтық орталығы арқылы.\n• Дөңес айна әрқашан виртуалды, тік және кішірейтілген кескінді жасайды."
  },
  "p40": {
    "ru": "## Преломление света\n• При переходе из одной прозрачной среды в другую скорость света и направление луча изменяются.\n> n = sin α / sin γ\n• Закон преломления связывает угол падения α и угол преломления γ; n — показатель преломления.\n• При переходе в оптически более плотную среду луч приближается к перпендикуляру, при переходе в менее плотную — удаляется.\n• Полное внутреннее отражение возможно при переходе из более плотной среды в менее плотную, если угол падения больше предельного.",
    "en": "## Refraction of light\n• When passing from one transparent medium to another, the speed of light and the direction of the ray change.\n> n = sin α / sin γ\n• The law of refraction relates the angle of incidence α and the angle of refraction γ; n—refractive index.\n• When passing into an optically denser medium, the beam approaches the perpendicular; when passing into a less dense medium, it moves away.\n• Total internal reflection is possible during the transition from a more dense medium to a less dense one, if the angle of incidence is greater than the limiting one.",
    "kk": "## Жарықтың сынуы\n• Бір мөлдір ортадан екіншісіне өткенде жарық жылдамдығы мен сәуленің бағыты өзгереді.\n> n = sin α / sin γ\n• Сыну заңы түсу бұрышын α және сыну бұрышын γ байланыстырады; n—сыну көрсеткіші.\n• Оптикалық тығызырақ ортаға өткенде сәуле перпендикулярға жақындайды; тығыздығы аз ортаға өткенде ол алыстап кетеді.\n• Толық ішкі шағылысу неғұрлым тығыз ортадан тығыздығы азырақ ортаға ауысу кезінде мүмкін болады, егер түсу бұрышы шектіден үлкен болса."
  },
  "p41": {
    "ru": "## Линзы\n• Линза — прозрачное тело, ограниченное преломляющими поверхностями. Собирающая линза толще в центре, рассеивающая — тоньше.\n> D = 1/F\n• D — оптическая сила в диоптриях, F — фокусное расстояние в метрах.\n> 1/F = 1/d + 1/f\n• Формула тонкой линзы связывает расстояния от предмета d и изображения f с фокусом F.\n• Изображение строят лучами, идущими параллельно оси, через оптический центр и через фокус.",
    "en": "## Lenses\n• A lens is a transparent body bounded by refractive surfaces. A converging lens is thicker in the center, a diverging lens is thinner.\n> D = 1/F\n• D - optical power in diopters, F - focal length in meters.\n> 1/F = 1/d + 1/f\n• The thin lens formula relates the distances from the object d and the image f to the focus F.\n• The image is constructed by rays running parallel to the axis, through the optical center and through the focus.",
    "kk": "## Линзалар\n• Линза – сыну беттерімен шектелген мөлдір дене. Жинақтаушы линзаның ортасында қалыңырақ, ал диверсивті линза жұқа.\n> D = 1/F\n• D - диоптрдегі оптикалық қуат, F - метрдегі фокус аралығы.\n> 1/F = 1/d + 1/f\n• Жұқа линза формуласы нысан d және кескін f фокусқа F дейінгі қашықтықтарды байланыстырады.\n• Кескін оське параллель, оптикалық орталық арқылы және фокус арқылы өтетін сәулелер арқылы құрастырылады."
  },
  "p42": {
    "ru": "## Глаз\n• Глаз — оптическая система: роговица и хрусталик преломляют свет, сетчатка воспринимает изображение, зрачок регулирует световой поток.\n• Аккомодация — изменение кривизны хрусталика для фокусировки на разных расстояниях.\n• При близорукости изображение формируется перед сетчаткой; её исправляют рассеивающей линзой.\n• При дальнозоркости изображение формируется за сетчаткой; её исправляют собирающей линзой.",
    "en": "## Eye\n• The eye is an optical system: the cornea and lens refract light, the retina perceives the image, the pupil regulates the light flux.\n• Accommodation - changing the curvature of the lens to focus at different distances.\n• In myopia, the image is formed in front of the retina; it is corrected with a diverging lens.\n• With farsightedness, the image is formed behind the retina; it is corrected with a collecting lens.",
    "kk": "## Көз\n• Көз – оптикалық жүйе: қасаң қабық пен линза жарықты сындырады, көз торы кескінді қабылдайды, қарашық жарық ағынын реттейді.\n• Аккомодация – әртүрлі қашықтықта фокустау үшін линзаның қисаюын өзгерту.\n• Миопияда бейне көз торының алдында қалыптасады; ол диверсиялық линзаның көмегімен түзетіледі.\n• Алыстан көргіштікпен көз торының артында кескін қалыптасады; ол жинағыш линзаның көмегімен түзетіледі."
  },
  "p43": {
    "ru": "## Оптические приборы\n• Фотоаппарат формирует действительное перевёрнутое изображение на матрице или плёнке.\n• Лупа — собирающая линза, дающая увеличенное мнимое изображение при расположении предмета ближе фокуса.\n• Микроскоп увеличивает изображения малых объектов системой объектив–окуляр.\n• Телескоп наблюдает далёкие объекты; перископ использует отражение в зеркалах или призмах.\n• Общий принцип приборов — управление ходом лучей с помощью линз, зеркал и экранов.",
    "en": "## Optical instruments\n• The camera forms a real inverted image on the matrix or film.\n• A magnifying glass is a converging lens that produces an enlarged virtual image when an object is placed closer to the focus.\n• The microscope magnifies images of small objects using a lens-eyepiece system.\n• The telescope observes distant objects; A periscope uses reflection in mirrors or prisms.\n• The general principle of the devices is to control the path of rays using lenses, mirrors and screens.",
    "kk": "## Оптикалық құралдар\n• Камера матрицада немесе пленкада нақты төңкерілген кескін жасайды.\n• Үлкейткіш әйнек - нысанды фокусқа жақынырақ орналастырғанда үлкейтілген виртуалды кескінді беретін жинақтаушы линза.\n• Микроскоп линза-окляр жүйесі арқылы шағын заттардың кескіндерін үлкейтеді.\n• Телескоп алыстағы объектілерді бақылайды; Перископ айнадағы немесе призмалардағы шағылыстырады.\n• Құрылғылардың жалпы принципі линзалар, айналар және экрандар арқылы сәулелердің жолын басқару болып табылады."
  },
  "bonus": {
    "ru": "## Техника безопасности\n• Перед началом опыта прочитай инструкцию и работай только с разрешения учителя.\n• Не включай электрические цепи без проверки схемы; о неисправностях сразу сообщай учителю.\n• Осторожно обращайся со стеклом, горячей водой, пламенем и острыми предметами.\n• Не прикасайся к оголённым проводам и не оставляй включённые приборы без присмотра.",
    "en": "## Safety precautions\n• Before starting the experiment, read the instructions and work only with the permission of the teacher.\n• Do not turn on electrical circuits without checking the circuit; Report any problems to your teacher immediately.\n• Handle glass, hot water, flames and sharp objects with care.\n• Do not touch exposed wires or leave switched on devices unattended.",
    "kk": "## Қауіпсіздік шаралары\n• Экспериментті бастамас бұрын нұсқауларды оқып, мұғалімнің рұқсатымен ғана жұмыс жасаңыз.\n• Тізбекті тексермей электр тізбектерін қоспаңыз; Кез келген мәселені мұғалімге дереу хабарлаңыз.\n• Шыны, ыстық су, жалын және өткір заттарды абайлап ұстаңыз.\n• Ашық сымдарды ұстамаңыз немесе қосулы құрылғыларды қараусыз қалдырмаңыз."
  },
  "lab1": {
    "ru": "## Лабораторная работа № 1. Сравнение количества теплоты при смешивании воды разной температуры\n• Цель: Сравнить количество теплоты, отданное горячей водой, с количеством теплоты, полученным холодной водой, и выявить причины расхождения.\n• Оборудование: Калориметр, мензурка, термометр, горячая и холодная вода.\n## Ход работы\n• Измерьте начальные температуры холодной и горячей воды.\n• Налейте в калориметр горячую воду, затем добавьте холодную и осторожно перемешайте.\n• Измерьте температуру смеси, рассчитайте массы воды и Q₁, Q₂.\n• Сравните результаты и объясните потери теплоты.\n## Формулы\n> Q₁ = c·m₁·(t − t₁)\n> Q₂ = c·m₂·(t₂ − t)\n> В идеале Q₁ = Q₂\n## Контрольные вопросы\n• Почему Q₁ и Q₂ в реальном опыте немного различаются?\n• Какие действия уменьшают теплообмен с окружающей средой?",
    "en": "## Lab No. 1. Comparison of the amount of heat when mixing water of different temperatures\n• Purpose: To compare the amount of heat given off by hot water with the amount of heat received by cold water and identify the reasons for the discrepancy.\n• Equipment: Calorimeter, beaker, thermometer, hot and cold water.\n## Work progress\n• Measure the initial temperatures of cold and hot water.\n• Pour hot water into the calorimeter, then add cold water and stir gently.\n• Measure the temperature of the mixture, calculate the masses of water and Q₁, Q₂.\n• Compare the results and explain the heat loss.\n## Formulas\n> Q₁ = c·m₁·(t − t₁)\n> Q₂ = c·m₂·(t₂ − t)\n> Ideally Q₁ = Q₂\n## Security questions\n• Why are Q₁ and Q₂ slightly different in actual experience?\n• What actions reduce heat exchange with the environment?",
    "kk": "## Зертхана № 1. Әртүрлі температурадағы суды араластыру кезіндегі жылу мөлшерін салыстыру\n• Мақсаты: Ыстық судың бөлетін жылу мөлшері мен суық судың алатын жылу мөлшерін салыстыру және сәйкессіздіктің себептерін анықтау.\n• Құрал-жабдықтар: Калориметр, стакан, термометр, ыстық және суық су.\n## Жұмыс барысы\n• Суық және ыстық судың бастапқы температураларын өлшеңіз.\n• Калориметрге ыстық су құйыңыз, содан кейін суық суды қосып, ақырын араластырыңыз.\n• Қоспаның температурасын өлшеңіз, судың массасын есептеңіз және Q₁, Q₂.\n• Нәтижелерді салыстырыңыз және жылу шығынын түсіндіріңіз.\n## Формулалар\n> Q₁ = c·m₁·(t − t₁)\n> Q₂ = c·m₂·(t₂ − t)\n> Ең дұрысы Q₁ = Q₂\n## Қауіпсіздік сұрақтары\n• Неліктен Q₁ және Q₂ нақты тәжірибеде сәл өзгеше?\n• Қандай әрекеттер қоршаған ортамен жылу алмасуды азайтады?"
  },
  "lab2": {
    "ru": "## Лабораторная работа № 2. Определение удельной теплоты плавления льда\n• Цель: Используя уравнение теплового баланса, определить удельную теплоту плавления льда и сравнить её с табличной.\n• Оборудование: Калориметр, мензурка, термометр, весы, смесь льда и воды, сосуд с водой.\n## Ход работы\n• Измерьте температуру калориметра и воды.\n• Добавьте лёд и измерьте температуру смеси после его полного плавления.\n• Определите массу растаявшего льда по изменению объёма.\n• Рассчитайте λ, сравните с табличным значением и оцените погрешность.\n## Формулы\n> m₃ = ρ·ΔV\n> λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃\n> Δλ = |λ_таб − λ|\n## Контрольные вопросы\n• Почему лёд должен быть при температуре около 0 °C?\n• Какие потери энергии влияют на найденное значение λ?",
    "en": "## Lab No. 2. Determination of the specific heat of fusion of ice\n• Purpose: Using the heat balance equation, determine the specific heat of fusion of ice and compare it with the table.\n• Equipment: Calorimeter, beaker, thermometer, scales, mixture of ice and water, vessel with water.\n## Work progress\n• Measure the temperature of the calorimeter and water.\n• Add ice and measure the temperature of the mixture once it has completely melted.\n• Determine the mass of melted ice from the change in volume.\n• Calculate λ, compare with the table value and estimate the error.\n## Formulas\n> m₃ = ρ·ΔV\n> λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃\n> Δλ = |λ_tab − λ|\n## Security questions\n• Why does ice have to be at a temperature around 0 °C?\n• What energy losses affect the found value of λ?",
    "kk": "## Зертхана № 2. Мұздың меншікті балқу жылуын анықтау\n• Мақсаты: Жылу балансының теңдеуін пайдаланып, мұздың меншікті балқу жылуын анықтаңыз және оны кестемен салыстырыңыз.\n• Құрал-жабдықтар: Калориметр, стакан, термометр, таразы, мұз бен су қоспасы, суы бар ыдыс.\n## Жұмыс барысы\n• Калориметр мен судың температурасын өлшеңіз.\n• Мұзды қосып, толық ерігеннен кейін қоспаның температурасын өлшеңіз.\n• Көлемінің өзгеруінен еріген мұздың массасын анықтаңыз.\n• λ есептеңіз, кесте мәнімен салыстырыңыз және қатені бағалаңыз.\n## Формулалар\n> m₃ = ρ·ΔV\n> λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃\n> Δλ = |λ_ қойындысы − λ|\n## Қауіпсіздік сұрақтары\n• Неліктен мұз шамамен 0 °C температурада болуы керек?\n• Қандай энергия шығындары λ табылған мәніне әсер етеді?"
  },
  "lab3": {
    "ru": "## Лабораторная работа № 3. Сборка электрической цепи. Измерение силы тока и напряжения\n• Цель: Проверить одинаковость силы тока в последовательной цепи и научиться измерять напряжение на разных участках.\n• Оборудование: Источник тока, лампа, резистор, ключ, провода, амперметр, вольтметр.\n## Ход работы\n• Определите цену деления приборов.\n• Соберите цепь и измерьте ток в трёх местах, переставляя амперметр.\n• Измерьте общее напряжение и напряжения на отдельных потребителях.\n• Сравните показания и сделайте вывод.\n## Формулы\n> I₁ = I₂ = I₃\n> U = U₁ + U₂\n## Контрольные вопросы\n• Почему амперметр включают последовательно?\n• Почему вольтметр подключают параллельно?",
    "en": "## Lab No. 3. Electrical circuit assembly. Current and Voltage Measurement\n• Purpose: Check the same current strength in a series circuit and learn how to measure voltage in different sections.\n• Equipment: Current source, lamp, resistor, key, wires, ammeter, voltmeter.\n## Work progress\n• Determine the price of dividing devices.\n• Assemble the circuit and measure the current in three places by moving the ammeter.\n• Measure the total voltage and the voltages at individual consumers.\n• Compare the readings and draw a conclusion.\n## Formulas\n> I₁ = I₂ = I₃\n> U = U₁ + U₂\n## Security questions\n• Why is the ammeter connected in series?\n• Why is a voltmeter connected in parallel?",
    "kk": "## Зертхана № 3. Электр тізбегін құрастыру. Ток пен кернеуді өлшеу\n• Мақсаты: тізбекті тізбектегі бірдей ток күшін тексеріңіз және әртүрлі бөлімдердегі кернеуді өлшеуді үйреніңіз.\n• Құрал-жабдықтар: Ток көзі, шам, резистор, кілт, сымдар, амперметр, вольтметр.\n## Жұмыс барысы\n• Бөлгіш құрылғылардың бағасын анықтау.\n• Тізбекті жинап, амперметрді жылжыту арқылы үш жерден ток күшін өлшеңіз.\n• Жеке тұтынушылардағы жалпы кернеу мен кернеулерді өлшеңіз.\n• Оқылған мәліметтерді салыстырып, қорытынды жасаңыз.\n## Формулалар\n> I₁ = I₂ = I₃\n> U = U₁ + U₂\n## Қауіпсіздік сұрақтары\n• Неліктен амперметр тізбектей жалғанған?\n• Неліктен вольтметр параллель қосылған?"
  },
  "lab4": {
    "ru": "## Лабораторная работа № 4. Исследование зависимости силы тока от напряжения\n• Цель: Убедиться в прямой зависимости силы тока от напряжения на металлическом проводнике и проверить закон Ома.\n• Оборудование: Источник тока, ключ, провода, делитель напряжения, резистор, амперметр, вольтметр.\n## Ход работы\n• Соберите цепь с делителем напряжения.\n• Получите несколько пар значений U и I.\n• Учтите погрешности и постройте график I(U).\n• Сделайте вывод о соответствии графика закону Ома.\n## Формулы\n> I = U/R\n> При постоянном R график I(U) — прямая\n## Контрольные вопросы\n• Почему точки опыта не лежат строго на одной линии?\n• Что показывает наклон графика I(U)?",
    "en": "## Lab No. 4. Study of the dependence of current on voltage\n• Purpose: To verify the direct relationship between current and voltage on a metal conductor and check Ohm's law.\n• Equipment: Current source, key, wires, voltage divider, resistor, ammeter, voltmeter.\n## Work progress\n• Build a circuit with a voltage divider.\n• Obtain several pairs of values U and I.\n• Take into account the errors and plot I(U).\n• Conclude whether the graph corresponds to Ohm's law.\n## Formulas\n> I = U/R\n> At constant R the graph I(U) is straight\n## Security questions\n• Why do the experience points not lie strictly on the same line?\n• What does the slope of the graph I(U) show?",
    "kk": "## Зертхана № 4. Ток күшінің кернеуге тәуелділігін зерттеу\n• Мақсаты: Металл өткізгіштегі ток пен кернеу арасындағы тікелей байланысты тексеру және Ом заңын тексеру.\n• Құрал-жабдықтар: Ток көзі, кілт, сымдар, кернеу бөлгіш, резистор, амперметр, вольтметр.\n## Жұмыс барысы\n• Кернеу бөлгіші бар тізбекті құрастырыңыз.\n• U және I мәндерінің бірнеше жұбын алыңыз.\n• Қателерді ескеріп, I(U) сызбасын салыңыз.\n• График Ом заңына сәйкес келеді ме деген қорытынды жасаңыз.\n## Формулалар\n> I = U/R\n> R тұрақты кезінде I(U) графигі түзу болады\n## Қауіпсіздік сұрақтары\n• Неліктен тәжірибе нүктелері бір түзудің бойында жатпайды?\n• I(U) графының еңісі нені көрсетеді?"
  },
  "lab5": {
    "ru": "## Лабораторная работа № 5. Изучение последовательного соединения проводников\n• Цель: Проверить законы последовательного соединения и рассчитать сопротивления резисторов.\n• Оборудование: Источник тока, ключ, провода, два амперметра, три вольтметра, резисторы.\n## Ход работы\n• Снимите показания I₁, I₂, U₁, U₂ и общего U.\n• Проверьте равенство токов и сумму напряжений.\n• Рассчитайте R₁, R₂ и R по закону Ома.\n• Сравните R с R₁ + R₂.\n## Формулы\n> I = I₁ = I₂\n> U = U₁ + U₂\n> R = R₁ + R₂\n## Контрольные вопросы\n• Почему при последовательном соединении сила тока одинакова?\n• На каком резисторе напряжение больше и почему?",
    "en": "## Lab No. 5. Studying the series connection of conductors\n• Purpose: Check the laws of series connection and calculate the resistance of resistors.\n• Equipment: Current source, key, wires, two ammeters, three voltmeters, resistors.\n## Work progress\n• Take readings I₁, I₂, U₁, U₂ and general U.\n• Check the equality of currents and the sum of voltages.\n• Calculate R₁, R₂ and R using Ohm’s law.\n• Compare R with R₁ + R₂.\n## Formulas\n> I = I₁ = I₂\n> U = U₁ + U₂\n> R = R₁ + R₂\n## Security questions\n• Why is the current the same in a series connection?\n• Which resistor has the highest voltage and why?",
    "kk": "## Зертхана № 5. Өткізгіштердің тізбектей қосылуын зерттеу\n• Мақсаты: Тізбектей қосылу заңдылықтарын тексеру және резисторлардың кедергісін есептеу.\n• Құрал-жабдықтар: Ток көзі, кілт, сымдар, екі амперметр, үш вольтметр, резисторлар.\n## Жұмыс барысы\n• I₁, I₂, U₁, U₂ және жалпы U көрсеткіштерін алыңыз.\n• Токтардың теңдігін және кернеулердің қосындысын тексеру.\n• Ом заңын пайдаланып R₁, R₂ және R есептеңіз.\n• R және R₁ + R₂. салыстырыңыз\n## Формулалар\n> I = I₁ = I₂\n> U = U₁ + U₂\n> R = R₁ + R₂\n## Қауіпсіздік сұрақтары\n• Неліктен тізбекті қосылымда ток бірдей болады?\n• Қандай резистордың кернеуі ең жоғары және неліктен?"
  },
  "lab6": {
    "ru": "## Лабораторная работа № 6. Изучение параллельного соединения проводников\n• Цель: Проверить законы параллельного соединения проводников.\n• Оборудование: Источник тока, ключ, провода, три амперметра, два вольтметра, два резистора.\n## Ход работы\n• Измерьте напряжения на обеих ветвях.\n• Измерьте общий ток и токи в ветвях.\n• Рассчитайте сопротивления ветвей и общее сопротивление.\n• Проверьте все соотношения и сделайте вывод.\n## Формулы\n> I = I₁ + I₂\n> U = U₁ = U₂\n> 1/R = 1/R₁ + 1/R₂\n> I₁/I₂ = R₂/R₁\n## Контрольные вопросы\n• Почему напряжение на параллельных ветвях одинаково?\n• Почему общий ток равен сумме токов ветвей?",
    "en": "## Lab No. 6. Studying parallel connection of conductors\n• Purpose: Check the laws of parallel connection of conductors.\n• Equipment: Current source, key, wires, three ammeters, two voltmeters, two resistors.\n## Work progress\n• Measure the voltages on both branches.\n• Measure the total current and branch currents.\n• Calculate the branch resistances and the total resistance.\n• Check all the relationships and draw a conclusion.\n## Formulas\n> I = I₁ + I₂\n> U = U₁ = U₂\n> 1/R = 1/R₁ + 1/R₂\n> I₁/I₂ = R₂/R₁\n## Security questions\n• Why is the voltage on parallel branches the same?\n• Why is the total current equal to the sum of the branch currents?",
    "kk": "## Зертхана № 6. Өткізгіштердің параллель қосылуын зерттеу\n• Мақсаты: Өткізгіштердің параллель қосылу заңдылықтарын тексеру.\n• Құрал-жабдықтар: Ток көзі, кілт, сымдар, үш амперметр, екі вольтметр, екі резистор.\n## Жұмыс барысы\n• Екі тармақтағы кернеуді өлшеңіз.\n• Толық және салалық токтарды өлшеңіз.\n• Тармақ кедергілерін және жалпы кедергіні есептеңіз.\n• Барлық қатынастарды тексеріп, қорытынды жасаңыз.\n## Формулалар\n> I = I₁ + I₂\n> U = U₁ = U₂\n> 1/R = 1/R₁ + 1/R₂\n> I₁/I₂ = R₂/R₁\n## Қауіпсіздік сұрақтары\n• Неліктен параллель тармақтардағы кернеу бірдей?\n• Неліктен жалпы ток тармақтық токтардың қосындысына тең?"
  },
  "lab7": {
    "ru": "## Лабораторная работа № 7. Измерение работы и мощности электрического тока\n• Цель: Определить мощность лампы, работу тока и стоимость потреблённой электрической энергии.\n• Оборудование: Источник тока, ключ, провода, лампа, амперметр, вольтметр.\n## Ход работы\n• Соберите цепь и измерьте U и I лампы.\n• Рассчитайте мощность по P = UI.\n• Рассчитайте работу за час, сутки и месяц.\n• Используйте действующий тариф для оценки стоимости энергии.\n## Формулы\n> P = UI\n> A = Pt = UIt\n> Стоимость = A·тариф\n## Контрольные вопросы\n• Почему мощность можно найти по показаниям амперметра и вольтметра?\n• В каких единицах бытовой счётчик измеряет энергию?",
    "en": "## Lab No. 7. Measurement of work and power of electric current\n• Purpose: Determine the power of the lamp, the work of the current and the cost of consumed electrical energy.\n• Equipment: Current source, key, wires, lamp, ammeter, voltmeter.\n## Work progress\n• Assemble the circuit and measure U and I lamps.\n• Calculate power using P = UI.\n• Calculate work per hour, day and month.\n• Use the current tariff to estimate energy costs.\n## Formulas\n> P = UI\n> A = Pt = UIt\n> Cost = A·tariff\n## Security questions\n• Why can power be found from ammeter and voltmeter readings?\n• In what units does a household meter measure energy?",
    "kk": "## Зертхана № 7. Электр тогының жұмысын және қуатын өлшеу\n• Мақсаты: Шамның қуатын, токтың жұмысын және тұтынылған электр энергиясының құнын анықтау.\n• Құрал-жабдықтар: Ток көзі, кілт, сымдар, шам, амперметр, вольтметр.\n## Жұмыс барысы\n• Схеманы жинап, U және I шамдарын өлшеңіз.\n• P = UI. арқылы қуатты есептеңіз\n• Сағат, күн және айдағы жұмысты есептеңіз.\n• Қуат шығындарын бағалау үшін ағымдағы тарифті пайдаланыңыз.\n## Формулалар\n> P = UI\n> A = Pt = UIt\n> Құны = A·тариф\n## Қауіпсіздік сұрақтары\n• Неліктен қуатты амперметр мен вольтметр көрсеткіштерінен табуға болады?\n• Тұрмыстық есептегіш энергияны қандай бірліктермен өлшейді?"
  },
  "lab8": {
    "ru": "## Лабораторная работа № 8. Изучение свойств постоянного магнита и магнитных полей\n• Цель: Изучить взаимодействие магнитов с веществами, полюса и силовые линии магнитного поля.\n• Оборудование: Полосовые и подковообразный магниты, бумага, железные опилки, магнитная стрелка, мелкие предметы.\n## Ход работы\n• Проверьте, какие вещества притягиваются магнитом.\n• Исследуйте взаимодействие одноимённых и разноимённых полюсов.\n• Получите рисунки поля полосового и подковообразного магнитов опилками.\n• Нарисуйте силовые линии и сформулируйте их свойства.\n## Формулы\n> Снаружи магнита линии идут от N к S\n## Контрольные вопросы\n• Почему железные опилки выстраиваются вдоль линий поля?\n• Как различить полюса магнита магнитной стрелкой?",
    "en": "## Lab No. 8. Studying the properties of a permanent magnet and magnetic fields\n• Purpose: To study the interaction of magnets with substances, the poles and magnetic field lines.\n• Equipment: Strip and horseshoe magnets, paper, iron filings, magnetic needle, small objects.\n## Work progress\n• Check which substances are attracted by a magnet.\n• Explore the interaction of like and unlike poles.\n• Obtain field drawings of bar and horseshoe magnets using sawdust.\n• Draw lines of force and state their properties.\n## Formulas\n> On the outside of the magnet the lines go from N to S\n## Security questions\n• Why do iron filings line up along field lines?\n• How to distinguish the poles of a magnet using a magnetic needle?",
    "kk": "## Зертхана № 8. Тұрақты магнит пен магнит өрісінің қасиеттерін зерттеу\n• Мақсаты: Магниттердің заттармен, полюстермен және магнит өрісінің сызықтарымен әрекеттесуін зерттеу.\n• Құрал-жабдықтар: Жолақ және ат магниттері, қағаз, темір үгінділер, магнитті ине, ұсақ заттар.\n## Жұмыс барысы\n• Магнит қандай заттарды тартатынын тексеріңіз.\n• Ұқсас және ұқсамайтын полюстердің өзара әрекеттесуін зерттеңіз.\n• Үгінділерді пайдалана отырып, жолақ пен тақа магниттерінің далалық сызбаларын алыңыз.\n• Күш сызықтарын сызыңыз және олардың қасиеттерін айтыңыз.\n## Формулалар\n> Магниттің сыртқы жағында сызықтар N-ден S-ге дейін барады.\n## Қауіпсіздік сұрақтары\n• Неліктен темір үгінділері егістік сызықтар бойымен тізіліп тұрады?\n• Магниттік иненің көмегімен магниттің полюстерін қалай ажыратуға болады?"
  },
  "lab9": {
    "ru": "## Лабораторная работа № 9. Сборка электромагнита и проверка его действия\n• Цель: Исследовать зависимость действия электромагнита от сердечника и силы тока.\n• Оборудование: Источник тока, ключ, катушка с сердечником, провода, реостат, магнитные стрелки, железные опилки.\n## Ход работы\n• Соберите цепь с катушкой и определите её полюса.\n• Сравните действие катушки без сердечника и с сердечником.\n• Реостатом изменяйте силу тока и наблюдайте за опилками.\n• Сравните поле электромагнита с полем постоянного магнита.\n## Формулы\n> Сила электромагнита возрастает с током и числом витков\n## Контрольные вопросы\n• Зачем в катушку вставляют железный сердечник?\n• Как изменить полюса катушки?",
    "en": "## Lab No. 9. Assembling an electromagnet and checking its operation\n• Purpose: To study the dependence of the action of an electromagnet on the core and current strength.\n• Equipment: Current source, key, coil with core, wires, rheostat, magnetic needles, iron filings.\n## Work progress\n• Assemble the circuit with the coil and determine its poles.\n• Compare the action of a coil without a core and with a core.\n• Use a rheostat to change the current and observe the sawdust.\n• Compare the field of an electromagnet with the field of a permanent magnet.\n## Formulas\n> Electromagnet strength increases with current and number of turns\n## Security questions\n• Why is an iron core inserted into the coil?\n• How to change the poles of the coil?",
    "kk": "## Зертхана № 9. Электромагнит құрастыру және оның жұмысын тексеру\n• Мақсаты: Электромагнит әрекетінің өзек пен ток күшіне тәуелділігін зерттеу.\n• Құрал-жабдықтар: Ток көзі, кілт, өзегі бар катушкалар, сымдар, реостат, магнитті инелер, темір үгінділері.\n## Жұмыс барысы\n• Тізбекті ораммен жинап, оның полюстерін анықтаңыз.\n• Өзегі жоқ және өзегі бар катушканың әрекетін салыстырыңыз.\n• Токты өзгерту және үгінділерді бақылау үшін реостатты пайдаланыңыз.\n• Электромагнит өрісін тұрақты магнит өрісімен салыстырыңыз.\n## Формулалар\n> Электромагнит күші ток пен айналым санына қарай артады\n## Қауіпсіздік сұрақтары\n• Неліктен орамға темір өзек салынған?\n• Орамның полюстерін қалай өзгертуге болады?"
  },
  "lab10": {
    "ru": "## Лабораторная работа № 10. Определение показателя преломления стекла\n• Цель: Определить показатель преломления стекла и сравнить его с табличным значением.\n• Оборудование: Стеклянная плоскопараллельная пластина, четыре булавки, линейка, бумага, транспортир.\n## Ход работы\n• Обведите пластину и установите две булавки перед ней.\n• За пластиной расположите ещё две булавки так, чтобы лучи закрывались.\n• Постройте падающий, преломлённый и вышедший лучи.\n• Измерьте α и γ, рассчитайте n и оцените результат.\n## Формулы\n> n = sin α/sin γ\n> Для стекла n обычно около 1,5\n## Контрольные вопросы\n• От какой линии отсчитывают углы падения и преломления?\n• Почему после выхода из плоскопараллельной пластины луч параллелен падающему?",
    "en": "## Lab No. 10. Determination of the refractive index of glass\n• Purpose: Determine the refractive index of glass and compare it with the table value.\n• Equipment: Glass plane-parallel plate, four pins, ruler, paper, protractor.\n## Work progress\n• Trace the plate and place two pins in front of it.\n• Place two more pins behind the plate so that the beams are covered.\n• Construct the incident, refracted and emerging rays.\n• Measure α and γ, calculate n and evaluate the result.\n## Formulas\n> n = sin α/sin γ\n> For glass n usually around 1.5\n## Security questions\n• From which line are the angles of incidence and refraction measured?\n• Why is the beam parallel to the incident beam after exiting the plane-parallel plate?",
    "kk": "## Зертхана № 10. Шынының сыну көрсеткішін анықтау\n• Мақсаты: Әйнектің сыну көрсеткішін анықтау және оны кестедегі мәнмен салыстыру.\n• Құрал-жабдықтар: Шыны жазық-параллель пластина, төрт түйреуіш, сызғыш, қағаз, транспортир.\n## Жұмыс барысы\n• Пластинаны сызыңыз және оның алдына екі түйреуіш қойыңыз.\n• Бөренелер жабылатын етіп пластинаның артына тағы екі түйреуіш қойыңыз.\n• Түскен, сынған және шығатын сәулелерді тұрғызыңыз.\n• α және γ өлшеңіз, n есептеп, нәтижені бағалаңыз.\n## Формулалар\n> n = sin α/sin γ\n> Шыны үшін n әдетте 1,5 шамасында\n## Қауіпсіздік сұрақтары\n• Түсу және сыну бұрыштары қай түзуден өлшенеді?\n• Неліктен сәуле жазық-параллель пластинадан шыққаннан кейін түсетін сәулеге параллель болады?"
  },
  "lab11": {
    "ru": "## Лабораторная работа № 11. Определение фокусного расстояния тонкой линзы\n• Цель: Определить фокусное расстояние и оптическую силу собирающей линзы несколькими методами.\n• Оборудование: Собирающая линза, экран, измерительная лента, источник света, лампа.\n## Ход работы\n• Получите на экране резкое изображение удалённого окна и измерьте F.\n• Разместите лампу, линзу и экран, измерьте d и f.\n• Рассчитайте F по формуле тонкой линзы и D = 1/F.\n• Получите изображение равного размера и сравните три метода.\n## Формулы\n> D = 1/F\n> 1/F = 1/d + 1/f\n> При равном изображении d = f = 2F\n## Контрольные вопросы\n• Почему изображение далёкого окна формируется около фокуса?\n• В каких единицах нужно брать F для расчёта D в диоптриях?",
    "en": "## Lab No. 11. Determining the focal length of a thin lens\n• Purpose: To determine the focal length and optical power of a converging lens using several methods.\n• Equipment: Converging lens, screen, measuring tape, light source, lamp.\n## Work progress\n• Obtain a sharp image of the distant window on the screen and measure F.\n• Place the lamp, lens and screen, measure d and f.\n• Calculate F using the thin lens formula and D = 1/F.\n• Obtain an image of equal size and compare the three methods.\n## Formulas\n> D = 1/F\n> 1/F = 1/d + 1/f\n> With equal image d = f = 2F\n## Security questions\n• Why does the image of a distant window form near the focus?\n• In what units should we take F to calculate D in diopters?",
    "kk": "## Зертхана № 11. Жұқа линзаның фокус аралығын анықтау\n• Мақсаты: Бірнеше әдістерді қолданып жинақтаушы линзаның фокустық қашықтығы мен оптикалық қуатын анықтау.\n• Құрал-жабдықтар: Жинақтаушы линза, экран, өлшегіш лента, жарық көзі, шам.\n## Жұмыс барысы\n• Экранда қашықтағы терезенің анық кескінін алыңыз және F өлшеңіз.\n• Шамды, линзаны және экранды орналастырыңыз, d және f өлшеңіз.\n• F мәнін жұқа линза формуласын және D = 1/F. арқылы есептеңіз\n• Бірдей өлшемдегі кескінді алыңыз және үш әдісті салыстырыңыз.\n## Формулалар\n> D = 1/F\n> 1/F = 1/d + 1/f\n> Бірдей кескінмен d = f = 2F\n## Қауіпсіздік сұрақтары\n• Неліктен фокуста алыстағы терезенің суреті пайда болады?\n• Диоптриядағы D мәнін есептеу үшін F қандай бірліктерде алуымыз керек?"
  }
};
const EXPERIMENTS_BY_PARAGRAPH = {
  "p2": {
    "title": "Эксперимент: надёжность ощущений температуры",
    "description": "Возьмите три стакана: с холодной, горячей и смешанной водой. После привыкания пальцев к холодной и горячей воде одновременно опустите их в тёплую воду. Сделайте вывод, достаточно ли надёжны ощущения для оценки температуры.",
    "links": [
      {
        "label": "Статья про обман восприятия температуры",
        "url": "https://dzen.ru/a/Y-NNoMOGx3bqNBgz"
      },
      {
        "label": "Симулятор «Относительность ощущений»",
        "url": "https://gemini.google.com/share/ff15ed2b4c3a"
      }
    ]
  },
  "p3": {
    "title": "Эксперимент: чайник со свистом",
    "description": "Исследуйте устройство чайника со свистом и объясните действие звукового приспособления. Дополнительно выясните, производят ли такие чайники на предприятиях Казахстана.",
    "links": [
      {
        "label": "Почему чайник свистит?",
        "url": "https://www.tiktok.com/@online_school_science/video/7042183501310889218?is_from_webapp=1&sender_device=pc"
      },
      {
        "label": "Статья о производстве чайников в Казахстане",
        "url": "https://time.kz/articles/zloba/2022/10/04/tovar-narashvat"
      },
      {
        "label": "Казахстанская стекольная компания KazGlass",
        "url": "https://kz.bizorg.su/almatyi-rg/c536469-stekolynaya-kompaniya-ynek-too"
      }
    ]
  },
  "p4": {
    "title": "Эксперимент: теплопроводность и конвекция",
    "description": "Сравните теплопроводность деревянной и металлической ложек в горячей воде. Измерьте температуру воздуха у пола и потолка, а с помощью пламени свечи исследуйте направление воздушных потоков.",
    "links": [
      {
        "label": "Симулятор теплопроводности металла и дерева",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mf_vedeni_energie&l=ru"
      },
      {
        "label": "Видео о теплопроводности ложки",
        "url": "https://www.tiktok.com/@nastya_fizichka/video/7556151877428120840?is_from_webapp=1&sender_device=pc"
      },
      {
        "label": "Конвекция в комнате",
        "url": "https://youtu.be/im8MWegdnI0?si=KO2bfQ3sIma6CTw-"
      },
      {
        "label": "Симулятор теплообмена конвекцией",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mf_proudeni_energie&l=ru"
      }
    ]
  },
  "p5": {
    "title": "Эксперимент: теплоизоляция",
    "description": "Оберните одинаковые бутылки с горячей водой полиэтиленовой плёнкой и газетной бумагой одинаковой толщины. Каждые 5 минут измеряйте температуру и постройте графики зависимости температуры от времени.",
    "links": [
      {
        "label": "Thermal Insulation — Testing Insulation Materials",
        "url": "https://youtu.be/bSAc9SaX69o?si=PNzFnonNFEkSIhhH"
      },
      {
        "label": "Теплопроводность металла и дерева",
        "url": "https://youtu.be/zAWYwYB1rdk?si=KflepNIpB-5MPxBr"
      },
      {
        "label": "Симулятор исследования теплоизоляции",
        "url": "https://gemini.google.com/share/18271de83326"
      }
    ]
  },
  "p6": {
    "title": "Эксперимент: теплоизоляция одежды",
    "description": "Оберните две банки с водой одинаковой температуры синтепоном и мехом одинаковой толщины. Через одинаковое время сравните температуры и сделайте вывод о теплоизоляции.",
    "links": [
      {
        "label": "Как выбрать утеплитель для шитья одежды",
        "url": "https://burdastyle.ru/master-klassy/tkani/kak-vybrat-uteplitel_12952/"
      },
      {
        "label": "Сравнение теплоизоляции синтепона, меха и других материалов",
        "url": "https://gemini.google.com/share/5c55d44e5123"
      }
    ]
  },
  "p7": {
    "title": "Эксперимент: скорость нагревания воды",
    "description": "Постройте график зависимости температуры воды от времени при нагревании на газовой горелке и в электрическом чайнике. Начальную температуру измерьте термометром.",
    "links": [
      {
        "label": "Статья о кипении воды",
        "url": "https://www.ekodar.ru/kvartiry/water-wiki/popular/kipenie-vody/"
      },
      {
        "label": "Сравнение скорости нагрева на газовой горелке и в электрочайнике",
        "url": "https://gemini.google.com/share/332e18580b69"
      }
    ]
  },
  "p9": {
    "title": "Эксперимент: нагревание воды работой",
    "description": "Налейте воду известной массы, измерьте температуру, размешивайте миксером около 5 минут и снова измерьте температуру. Объясните результат через превращение механической энергии во внутреннюю.",
    "links": [
      {
        "label": "Симулятор внутренней энергии",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=mf_vnitrni_energie&l=ru"
      },
      {
        "label": "Симулятор нагревания воды при механической работе",
        "url": "https://gemini.google.com/share/82dc1d034049"
      }
    ]
  },
  "p10": {
    "title": "Эксперимент: плавление льда",
    "description": "Опустите термометр в смесь воды и льда. Наблюдайте показания до полного исчезновения льда и сделайте вывод о температуре во время плавления.",
    "links": [
      {
        "label": "Симулятор «Плавление льда»",
        "url": "https://gemini.google.com/share/ffd0e17ce400"
      }
    ]
  },
  "p11": {
    "title": "Эксперимент: от чего зависит испарение",
    "description": "Сравните испарение одинаковых капель жидкости при разной температуре, площади поверхности, наличии обдува и для разных жидкостей. Подготовьте отчёт.",
    "links": [
      {
        "label": "Видеоэксперимент о скорости испарения жидкостей",
        "url": "https://vk.com/video-153078607_456239276"
      }
    ]
  },
  "p12": {
    "title": "Эксперимент: скороварка",
    "description": "Опытным путём сравните время приготовления пищи в скороварке и обычной кастрюле. Объясните результат зависимостью температуры кипения от внешнего давления.",
    "links": [
      {
        "label": "Насыщенные и ненасыщенные пары. Зависимость температуры кипения от давления",
        "url": "https://youtu.be/CFtOVkE8PSg?si=2guq4VY0rlpuWy8Q"
      },
      {
        "label": "Зависимость температуры кипения от давления",
        "url": "https://youtu.be/Xcs3IexmJzk?si=dnyWvSGgYVjNZqdT"
      },
      {
        "label": "Статья о принципе работы скороварки",
        "url": "https://www.kitchenindustries.club/%D1%81%D0%B0%D0%BC%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B8%D0%B4-%D0%BF%D0%BE-%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D0%B0%D1%80%D0%BA%D0%B0%D0%BC-%D1%87%D1%82%D0%BE-%D0%B8-%D0%BA/"
      }
    ]
  },
  "p15": {
    "title": "Эксперимент: модель парового двигателя",
    "description": "Изготовьте безопасную модель парового двигателя, испытайте её действие и опишите превращение внутренней энергии пара в механическую работу. Нагревание выполняйте только под контролем учителя.",
    "links": [
      {
        "label": "Симулятор парового двигателя",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mf_parnistroj&l=ru"
      },
      {
        "label": "Самодельный паровой двигатель",
        "url": "https://youtu.be/y7WF5I1oyA4?si=BKSx01dBi3CAjGLD"
      },
      {
        "label": "Простой проект парового двигателя",
        "url": "https://youtu.be/0C0e-rqsi_c?si=lcirRKovhpG4liCS"
      }
    ]
  },
  "p18": {
    "title": "Эксперимент: электризация тел",
    "description": "Потрите резиновый шарик газетой, исследуйте притяжение кусочков бумаги и фольги, действие на волосы и взаимодействие двух заряженных шариков. Соблюдайте безопасность.",
    "links": [
      {
        "label": "Опыт со статическим электричеством",
        "url": "https://youtu.be/2b5ddYw1Qio?si=bhdD4rQ2ycyXZGla"
      },
      {
        "label": "Симулятор Balloons and Static Electricity",
        "url": "https://phet.colorado.edu/en/simulations/balloons-and-static-electricity"
      },
      {
        "label": "Шарик висит на потолке",
        "url": "https://www.tiktok.com/@kirill_balloon_tmn/video/6971376931396668674?is_from_webapp=1&sender_device=pc"
      },
      {
        "label": "Видео о статическом электричестве",
        "url": "https://youtu.be/nu7KzyeMWjY?si=NMq7Z8F7LW87lAuG"
      },
      {
        "label": "Одноимённые заряды на шариках",
        "url": "https://www.tiktok.com/@vikamolekula/video/7051648940185292038?is_from_webapp=1&sender_device=pc"
      }
    ]
  },
  "p22": {
    "title": "Эксперимент: лимонная батарейка",
    "description": "Изготовьте источник тока из лимона, цинковой и медной проволоки. Сравните его с гальваническим элементом и определите, сколько лимонов нужно для лампы 2,5 В.",
    "links": [
      {
        "label": "Галилео. Эксперимент «Лимон-батарейка»",
        "url": "https://youtu.be/wN1N3yN8QHk?si=0tgcu1Fggr9SEbNb"
      },
      {
        "label": "Электричество из лимона",
        "url": "https://youtu.be/Ce__dmq8icw?si=MXD-PB16Ik7p83rf"
      },
      {
        "label": "Fruit battery — make light",
        "url": "https://www.tiktok.com/@scienceanu/video/7257697581319474434?is_from_webapp=1&sender_device=pc"
      }
    ]
  },
  "p23": {
    "title": "Эксперимент: модель электрической цепи",
    "description": "Соберите цепь из гальванического элемента, ключа и низковольтной лампы. На её основе можно сделать фонарь, ночной светильник или модель светофора.",
    "links": [
      {
        "label": "Симулятор Circuit Construction Kit: DC",
        "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc"
      },
      {
        "label": "Видео со светильником из электрической цепи",
        "url": "https://youtu.be/1qaGNQORXOM?si=7vNbvLgb9Anf3_Nc"
      },
      {
        "label": "Настоящий светофор своими руками",
        "url": "https://youtu.be/WVyltp2RCGw?si=suDKWuPdbnZtGv9t"
      }
    ]
  },
  "p24": {
    "title": "Эксперимент: сопротивление лампы и электровикторина",
    "description": "По данным на цоколе лампы вычислите номинальное сопротивление. Дополнительно изготовьте электровикторину, в которой правильный ответ замыкает цепь и включает индикатор.",
    "links": [
      {
        "label": "Пример расчёта сопротивления лампы",
        "url": "https://youtu.be/XzXUyOrbARI?si=T9ALMlXpLSE5UqYd"
      },
      {
        "label": "Симулятор электрического сопротивления",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=ele_odpor&l=ru"
      },
      {
        "label": "Электрическая викторина своими руками",
        "url": "https://vk.com/@semeynoe.kirov-elektricheskaya-viktorina-svoimi-rukami"
      },
      {
        "label": "Электровикторина. Видеоинструкция",
        "url": "https://rutube.ru/video/b0ba06e25da2f9e330e140abcfc078e7/?r=wd"
      }
    ]
  },
  "p25": {
    "title": "Эксперимент: удельное сопротивление провода",
    "description": "С помощью источника тока, амперметра, вольтметра и медной проволоки известного сечения определите сопротивление и исследуемую величину.",
    "links": [
      {
        "label": "Симулятор электрического сопротивления с расчётами",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=ele_odpor&l=ru"
      },
      {
        "label": "Resistance in a Wire — симулятор PhET",
        "url": "https://phet.colorado.edu/en/simulations/resistance-in-a-wire"
      }
    ]
  },
  "p27": {
    "title": "Эксперимент: КПД электрического чайника и стоимость энергии",
    "description": "По паспорту чайника определите мощность, нагрейте известный объём воды, измерьте время и температуры, рассчитайте полученную теплоту, работу тока и КПД. Отдельно определите стоимость энергии семьи за месяц.",
    "links": [
      {
        "label": "Расчёт КПД электрического чайника",
        "url": "https://youtu.be/TRjKkHBtefY?si=ux8oPjDgVpVs4PAL"
      },
      {
        "label": "Лабораторная работа о КПД чайника",
        "url": "https://youtu.be/ejyB622x-Ys?si=eCF3w-M650HDmg8Y"
      },
      {
        "label": "Калькулятор стоимости электроэнергии в Казахстане",
        "url": "https://bankchart.kz/servisy/kalkulyatory/kalkulyator_elektroenergii#google_vignette"
      }
    ]
  },
  "p30": {
    "title": "Эксперимент: лампа накаливания и светодиодная лампа",
    "description": "Под контролем взрослого включите лампу накаливания и светодиодную лампу на одинаковое время. Сравните нагрев, мощность и эффективность. Не прикасайтесь к лампе накаливания сразу после отключения.",
    "links": [
      {
        "label": "Сравнение мощности LED-ламп и ламп накаливания",
        "url": "https://svetzavod.ru/news/sootnoshenie-moshhnosti-led-lamp-i-lamp-nakalivaniya-polnoe-rukovodstvo-i-tablica/"
      }
    ]
  },
  "p31": {
    "title": "Эксперимент: элемент Вольта",
    "description": "Составьте элемент Вольта из двух разных металлов и раствора поваренной соли. Проверьте полученный источник, подключив лампу карманного фонарика.",
    "links": [
      {
        "label": "Видеоролик про элемент Вольта",
        "url": "https://youtu.be/2hQphyBDIM8?si=mHjqz5QwZocR7xCn"
      },
      {
        "label": "Симулятор «Элемент Вольта»",
        "url": "https://gemini.google.com/share/87e02da0bf07"
      }
    ]
  },
  "p32": {
    "title": "Эксперимент: намагничивание и компас",
    "description": "Намагнитьте стальные изделия самодельным электромагнитом, проверьте их действие на железные предметы и изготовьте водяной компас. Подготовьте видеоотчёт.",
    "links": [
      {
        "label": "Постоянные магниты. Намагниченные ножницы",
        "url": "https://youtu.be/KfKrouG0Os8?si=2j_XAtiiMX0H0etB"
      },
      {
        "label": "Компас из швейной иглы",
        "url": "https://youtu.be/0S09LTq90tQ?si=lG_L1Xa3omCw5Vq-"
      }
    ]
  },
  "p33": {
    "title": "Эксперимент: нагревание намагниченной стали",
    "description": "С помощью электромагнита намагнитьте иглу, ножницы или гвоздь. Проверьте магнитные свойства до и после нагревания до высокой температуры и объясните результат.",
    "links": [
      {
        "label": "Как сделать электромагнит",
        "url": "https://youtu.be/wo74CoboBR8?si=MLFjVc7TSJmzHAb7"
      },
      {
        "label": "Магнитные свойства при нагреве",
        "url": "https://youtu.be/L0eo_18jTaw?si=j5PKbcXMDMPY6cef"
      }
    ]
  },
  "p34": {
    "title": "Эксперимент: электромагнит из гвоздя и провода",
    "description": "Намотайте проволоку на железный стержень, подключите катушку к гальваническому элементу и исследуйте действие электромагнита. Изменяйте число витков и силу тока.",
    "links": [
      {
        "label": "Как сделать электромагнит из гвоздя и провода",
        "url": "https://youtu.be/bguy8LxBpuQ?si=2nibmBR41nyRcxHm"
      },
      {
        "label": "Статья о создании магнита из проволоки и гвоздя",
        "url": "https://ru.wikihow.com/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82-%D0%B8%D0%B7-%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BA%D0%B8-%D0%B8-%D0%B3%D0%B2%D0%BE%D0%B7%D0%B4%D1%8F"
      },
      {
        "label": "Симулятор магнитов и электромагнитов PhET",
        "url": "https://phet.colorado.edu/en/simulations/magnets-and-electromagnets"
      }
    ]
  },
  "p37": {
    "title": "Эксперимент: измерение высоты здания по тени",
    "description": "Определите высоту дома с помощью палки и измерительной ленты, используя подобие треугольников и прямолинейное распространение света.",
    "links": [
      {
        "label": "Как найти высоту здания без специального оборудования",
        "url": "https://youtu.be/LYz767L4g1Q?si=Z2SAOmqltvYVao_a"
      },
      {
        "label": "Height Measurement With Light: Principles & Shadows",
        "url": "https://answerbaseonline.online/articles/height-measurement-with-light-principles"
      },
      {
        "label": "How to Measure the Height of Tall Buildings",
        "url": "https://www.brighthubengineering.com/building-construction-design/46130-how-to-measure-a-tall-building-or-skyscraper-without-leaving-the-ground/"
      }
    ]
  },
  "p38": {
    "title": "Эксперимент: плоское зеркало и перископ",
    "description": "Сравните предмет и изображение в зеркале, проверьте равенство расстояний и размеров. Сконструируйте перископ или калейдоскоп.",
    "links": [
      {
        "label": "Симулятор лучей в зеркале",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=opt_zrcadlo&l=ru"
      },
      {
        "label": "Симулятор плоского зеркала",
        "url": "https://www.new3jcn.com/Phyc140/flat_mirror_prob.html"
      },
      {
        "label": "Сделаем калейдоскоп",
        "url": "https://youtu.be/bCD8zjsNzag?si=Y7Z_Ndsq4Z9ewxhI"
      },
      {
        "label": "Как сделать перископ",
        "url": "https://youtu.be/mVSYeUPqq6Y?si=uNc7LJEN5C6kOSly"
      }
    ]
  },
  "p40": {
    "title": "Эксперимент: преломление в воде",
    "description": "Опустите ложку в стакан с водой и объясните видимый излом на границе сред. Исследуйте преломление лучей в симуляторах и определите показатель преломления.",
    "links": [
      {
        "label": "Ложка в воде. Преломление света",
        "url": "https://youtube.com/shorts/c9DP5iwrxJw?si=txWvtJC6A42f-bLg"
      },
      {
        "label": "Симулятор Refraction 3 Layers",
        "url": "https://www.new3jcn.com/Phyc140/three_layers.html"
      },
      {
        "label": "Симулятор Bending Light",
        "url": "https://phet.colorado.edu/en/simulations/bending-light"
      },
      {
        "label": "Виртуальная лабораторная: показатель преломления",
        "url": "https://efizika.ru/html5/150/index.html"
      },
      {
        "label": "Виртуальная лабораторная: закон преломления",
        "url": "https://efizika.ru/html5/39/index.html"
      }
    ]
  },
  "p41": {
    "title": "Эксперимент: как различить линзы",
    "description": "Предложите несколько методов различения собирающей и рассеивающей линз и проверьте их опытом. Сравните простоту и эффективность методов.",
    "links": [
      {
        "label": "Симулятор собирающей линзы",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=opt_spojka&l=ru"
      },
      {
        "label": "Симулятор рассеивающей линзы",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=opt_rozptylka&l=ru"
      },
      {
        "label": "Симулятор Geometric Optics",
        "url": "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html"
      }
    ]
  },
  "p42": {
    "title": "Эксперимент: бинокулярное зрение и рассеивающая линза",
    "description": "С одним закрытым глазом попробуйте совместить острия двух карандашей, затем повторите с двумя открытыми глазами. Составьте рекомендации по определению оптической силы рассеивающей линзы.",
    "links": [
      {
        "label": "Галилео. Бинокулярное зрение",
        "url": "https://youtu.be/uipQRt2lz2w?si=vPcCUuK3YpQCX71d"
      },
      {
        "label": "Симулятор Convex Lens & Concave Lens",
        "url": "https://javalab.org/en/lens_en/"
      },
      {
        "label": "Лабораторная: фокусное расстояние рассеивающей линзы",
        "url": "https://youtu.be/9S3U6GzjolM?si=I7GLh2Fo1gCLvMXT"
      }
    ]
  }
};
const LAB_INFO = {
  "lab1": {
    "title": "Лабораторная работа № 1. Сравнение количества теплоты при смешивании воды разной температуры",
    "goal": "Сравнить количество теплоты, отданное горячей водой, с количеством теплоты, полученным холодной водой, и выявить причины расхождения.",
    "equipment": "Калориметр, мензурка, термометр, горячая и холодная вода.",
    "steps": [
      "Измерьте начальные температуры холодной и горячей воды.",
      "Налейте в калориметр горячую воду, затем добавьте холодную и осторожно перемешайте.",
      "Измерьте температуру смеси, рассчитайте массы воды и Q₁, Q₂.",
      "Сравните результаты и объясните потери теплоты."
    ],
    "formulas": [
      "Q₁ = c·m₁·(t − t₁)",
      "Q₂ = c·m₂·(t₂ − t)",
      "В идеале Q₁ = Q₂"
    ],
    "questions": [
      "Почему Q₁ и Q₂ в реальном опыте немного различаются?",
      "Какие действия уменьшают теплообмен с окружающей средой?"
    ],
    "links": [
      {
        "label": "Лабораторная работа №1 — видео",
        "url": "https://youtu.be/eHMpzUc5gmc"
      },
      {
        "label": "Физика 8 класс — лабораторная №1",
        "url": "https://youtu.be/vcH29Zwrj4s?si=pKlKwS1Ig-MNps5i"
      },
      {
        "label": "Виртуальная лабораторная",
        "url": "https://efizika.ru/html5/33/index.html"
      }
    ]
  },
  "lab2": {
    "title": "Лабораторная работа № 2. Определение удельной теплоты плавления льда",
    "goal": "Используя уравнение теплового баланса, определить удельную теплоту плавления льда и сравнить её с табличной.",
    "equipment": "Калориметр, мензурка, термометр, весы, смесь льда и воды, сосуд с водой.",
    "steps": [
      "Измерьте температуру калориметра и воды.",
      "Добавьте лёд и измерьте температуру смеси после его полного плавления.",
      "Определите массу растаявшего льда по изменению объёма.",
      "Рассчитайте λ, сравните с табличным значением и оцените погрешность."
    ],
    "formulas": [
      "m₃ = ρ·ΔV",
      "λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃",
      "Δλ = |λ_таб − λ|"
    ],
    "questions": [
      "Почему лёд должен быть при температуре около 0 °C?",
      "Какие потери энергии влияют на найденное значение λ?"
    ],
    "links": [
      {
        "label": "Виртуальная лабораторная",
        "url": "https://efizika.ru/html5/17/index.html"
      },
      {
        "label": "Видео лабораторной работы №2",
        "url": "https://youtu.be/lN8NmAOJPhQ"
      },
      {
        "label": "Физика 8 класс — удельная теплота плавления",
        "url": "https://youtu.be/4z382jqtnNI?si=zp0ibv3DkcLZ9vGz"
      }
    ]
  },
  "lab3": {
    "title": "Лабораторная работа № 3. Сборка электрической цепи. Измерение силы тока и напряжения",
    "goal": "Проверить одинаковость силы тока в последовательной цепи и научиться измерять напряжение на разных участках.",
    "equipment": "Источник тока, лампа, резистор, ключ, провода, амперметр, вольтметр.",
    "steps": [
      "Определите цену деления приборов.",
      "Соберите цепь и измерьте ток в трёх местах, переставляя амперметр.",
      "Измерьте общее напряжение и напряжения на отдельных потребителях.",
      "Сравните показания и сделайте вывод."
    ],
    "formulas": [
      "I₁ = I₂ = I₃",
      "U = U₁ + U₂"
    ],
    "questions": [
      "Почему амперметр включают последовательно?",
      "Почему вольтметр подключают параллельно?"
    ],
    "links": [
      {
        "label": "Видео лабораторной работы №3",
        "url": "https://youtu.be/nCXx6Z6giVQ"
      },
      {
        "label": "Симулятор электрических цепей",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=ele_obvod&l=ru"
      },
      {
        "label": "Electric Circuit Simulator",
        "url": "https://javalab.org/en/electric_circuit_en/"
      },
      {
        "label": "Виртуальная лаборатория постоянного тока",
        "url": "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_ru.html"
      }
    ]
  },
  "lab4": {
    "title": "Лабораторная работа № 4. Исследование зависимости силы тока от напряжения",
    "goal": "Убедиться в прямой зависимости силы тока от напряжения на металлическом проводнике и проверить закон Ома.",
    "equipment": "Источник тока, ключ, провода, делитель напряжения, резистор, амперметр, вольтметр.",
    "steps": [
      "Соберите цепь с делителем напряжения.",
      "Получите несколько пар значений U и I.",
      "Учтите погрешности и постройте график I(U).",
      "Сделайте вывод о соответствии графика закону Ома."
    ],
    "formulas": [
      "I = U/R",
      "При постоянном R график I(U) — прямая"
    ],
    "questions": [
      "Почему точки опыта не лежат строго на одной линии?",
      "Что показывает наклон графика I(U)?"
    ],
    "links": [
      {
        "label": "Видео лабораторной работы №4",
        "url": "https://youtu.be/NlTV6DISqug"
      },
      {
        "label": "Ещё одно видео лабораторной работы №4",
        "url": "https://youtu.be/qYBCiBMJA04?si=ix2SGxmJeqgVLTEb"
      },
      {
        "label": "Виртуальная лаборатория постоянного тока",
        "url": "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_ru.html"
      }
    ]
  },
  "lab5": {
    "title": "Лабораторная работа № 5. Изучение последовательного соединения проводников",
    "goal": "Проверить законы последовательного соединения и рассчитать сопротивления резисторов.",
    "equipment": "Источник тока, ключ, провода, два амперметра, три вольтметра, резисторы.",
    "steps": [
      "Снимите показания I₁, I₂, U₁, U₂ и общего U.",
      "Проверьте равенство токов и сумму напряжений.",
      "Рассчитайте R₁, R₂ и R по закону Ома.",
      "Сравните R с R₁ + R₂."
    ],
    "formulas": [
      "I = I₁ = I₂",
      "U = U₁ + U₂",
      "R = R₁ + R₂"
    ],
    "questions": [
      "Почему при последовательном соединении сила тока одинакова?",
      "На каком резисторе напряжение больше и почему?"
    ],
    "links": [
      {
        "label": "Виртуальная работа: последовательное соединение",
        "url": "https://efizika.ru/html5/153/index.html"
      },
      {
        "label": "Видео лабораторной работы №5",
        "url": "https://youtu.be/HlU-eFLWaC0"
      },
      {
        "label": "Видео лабораторной работы №5 для 8 класса",
        "url": "https://youtu.be/YBg3r6rbNGQ?si=oY3x_EDeLRxytorc"
      },
      {
        "label": "Симулятор Circuit Construction Kit: DC Virtual Lab",
        "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc-virtual-lab"
      }
    ]
  },
  "lab6": {
    "title": "Лабораторная работа № 6. Изучение параллельного соединения проводников",
    "goal": "Проверить законы параллельного соединения проводников.",
    "equipment": "Источник тока, ключ, провода, три амперметра, два вольтметра, два резистора.",
    "steps": [
      "Измерьте напряжения на обеих ветвях.",
      "Измерьте общий ток и токи в ветвях.",
      "Рассчитайте сопротивления ветвей и общее сопротивление.",
      "Проверьте все соотношения и сделайте вывод."
    ],
    "formulas": [
      "I = I₁ + I₂",
      "U = U₁ = U₂",
      "1/R = 1/R₁ + 1/R₂",
      "I₁/I₂ = R₂/R₁"
    ],
    "questions": [
      "Почему напряжение на параллельных ветвях одинаково?",
      "Почему общий ток равен сумме токов ветвей?"
    ],
    "links": [
      {
        "label": "Симулятор Circuit Construction Kit: DC",
        "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc"
      },
      {
        "label": "Видео лабораторной работы №6",
        "url": "https://youtu.be/W1F3ut5CuYI"
      },
      {
        "label": "Виртуальная лабораторная работа №6",
        "url": "https://efizika.ru/html5/192/index.html"
      }
    ]
  },
  "lab7": {
    "title": "Лабораторная работа № 7. Измерение работы и мощности электрического тока",
    "goal": "Определить мощность лампы, работу тока и стоимость потреблённой электрической энергии.",
    "equipment": "Источник тока, ключ, провода, лампа, амперметр, вольтметр.",
    "steps": [
      "Соберите цепь и измерьте U и I лампы.",
      "Рассчитайте мощность по P = UI.",
      "Рассчитайте работу за час, сутки и месяц.",
      "Используйте действующий тариф для оценки стоимости энергии."
    ],
    "formulas": [
      "P = UI",
      "A = Pt = UIt",
      "Стоимость = A·тариф"
    ],
    "questions": [
      "Почему мощность можно найти по показаниям амперметра и вольтметра?",
      "В каких единицах бытовой счётчик измеряет энергию?"
    ],
    "links": [
      {
        "label": "Виртуальная лабораторная о мощности лампы",
        "url": "https://efizika.ru/html5/188/index.html"
      },
      {
        "label": "Видео лабораторной работы №7",
        "url": "https://youtu.be/1L_jvoTI7m4"
      },
      {
        "label": "Симулятор Circuit Construction Kit: AC Virtual Lab",
        "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac-virtual-lab"
      }
    ]
  },
  "lab8": {
    "title": "Лабораторная работа № 8. Изучение свойств постоянного магнита и магнитных полей",
    "goal": "Изучить взаимодействие магнитов с веществами, полюса и силовые линии магнитного поля.",
    "equipment": "Полосовые и подковообразный магниты, бумага, железные опилки, магнитная стрелка, мелкие предметы.",
    "steps": [
      "Проверьте, какие вещества притягиваются магнитом.",
      "Исследуйте взаимодействие одноимённых и разноимённых полюсов.",
      "Получите рисунки поля полосового и подковообразного магнитов опилками.",
      "Нарисуйте силовые линии и сформулируйте их свойства."
    ],
    "formulas": [
      "Снаружи магнита линии идут от N к S"
    ],
    "questions": [
      "Почему железные опилки выстраиваются вдоль линий поля?",
      "Как различить полюса магнита магнитной стрелкой?"
    ],
    "links": [
      {
        "label": "Видео лабораторной работы №8",
        "url": "https://youtu.be/j9700mfR43U"
      },
      {
        "label": "Building a Magnetic Field Simulator",
        "url": "https://bionichaos.com/Magnets/"
      },
      {
        "label": "Симулятор Magnet and Compass",
        "url": "https://phet.colorado.edu/en/simulations/magnet-and-compass"
      },
      {
        "label": "Симулятор постоянного магнита",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mag_magnet&l=ru"
      }
    ]
  },
  "lab9": {
    "title": "Лабораторная работа № 9. Сборка электромагнита и проверка его действия",
    "goal": "Исследовать зависимость действия электромагнита от сердечника и силы тока.",
    "equipment": "Источник тока, ключ, катушка с сердечником, провода, реостат, магнитные стрелки, железные опилки.",
    "steps": [
      "Соберите цепь с катушкой и определите её полюса.",
      "Сравните действие катушки без сердечника и с сердечником.",
      "Реостатом изменяйте силу тока и наблюдайте за опилками.",
      "Сравните поле электромагнита с полем постоянного магнита."
    ],
    "formulas": [
      "Сила электромагнита возрастает с током и числом витков"
    ],
    "questions": [
      "Зачем в катушку вставляют железный сердечник?",
      "Как изменить полюса катушки?"
    ],
    "links": [
      {
        "label": "Видео лабораторной работы №9",
        "url": "https://youtu.be/gqX269SnBwY"
      },
      {
        "label": "Виртуальная лабораторная работа: электромагнит",
        "url": "https://efizika.ru/html5/179/index.html"
      },
      {
        "label": "Симулятор тока в катушке",
        "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=mag_civka&l=ru"
      }
    ]
  },
  "lab10": {
    "title": "Лабораторная работа № 10. Определение показателя преломления стекла",
    "goal": "Определить показатель преломления стекла и сравнить его с табличным значением.",
    "equipment": "Стеклянная плоскопараллельная пластина, четыре булавки, линейка, бумага, транспортир.",
    "steps": [
      "Обведите пластину и установите две булавки перед ней.",
      "За пластиной расположите ещё две булавки так, чтобы лучи закрывались.",
      "Постройте падающий, преломлённый и вышедший лучи.",
      "Измерьте α и γ, рассчитайте n и оцените результат."
    ],
    "formulas": [
      "n = sin α/sin γ",
      "Для стекла n обычно около 1,5"
    ],
    "questions": [
      "От какой линии отсчитывают углы падения и преломления?",
      "Почему после выхода из плоскопараллельной пластины луч параллелен падающему?"
    ],
    "links": [
      {
        "label": "Виртуальная лабораторная: показатель преломления",
        "url": "https://efizika.ru/html5/150/index.html"
      },
      {
        "label": "Видео лабораторной работы №10",
        "url": "https://youtu.be/5yft2HEM1EM"
      }
    ]
  },
  "lab11": {
    "title": "Лабораторная работа № 11. Определение фокусного расстояния тонкой линзы",
    "goal": "Определить фокусное расстояние и оптическую силу собирающей линзы несколькими методами.",
    "equipment": "Собирающая линза, экран, измерительная лента, источник света, лампа.",
    "steps": [
      "Получите на экране резкое изображение удалённого окна и измерьте F.",
      "Разместите лампу, линзу и экран, измерьте d и f.",
      "Рассчитайте F по формуле тонкой линзы и D = 1/F.",
      "Получите изображение равного размера и сравните три метода."
    ],
    "formulas": [
      "D = 1/F",
      "1/F = 1/d + 1/f",
      "При равном изображении d = f = 2F"
    ],
    "questions": [
      "Почему изображение далёкого окна формируется около фокуса?",
      "В каких единицах нужно брать F для расчёта D в диоптриях?"
    ],
    "links": [
      {
        "label": "Видео лабораторной работы №11",
        "url": "https://youtu.be/XjJwHgIfHlM"
      },
      {
        "label": "Thin Lens Equation Simulation",
        "url": "https://www.geogebra.org/m/YDMFRFjb"
      },
      {
        "label": "Симулятор изображений в тонкой линзе",
        "url": "https://light-fizika.ru/index.php/11-klass/8-fizika/302-simulyator-izobrazhenij-v-tonkoj-linze"
      }
    ]
  }
};
const EXPERIMENTS_LOCALIZED = {
  "EXPERIMENTS_BY_PARAGRAPH": {
    "p2": {
      "title": {
        "ru": "Эксперимент: надёжность ощущений температуры",
        "en": "Experiment: reliability of temperature sensations",
        "kk": "Тәжірибе: температуралық сезімдердің сенімділігі"
      },
      "description": {
        "ru": "Возьмите три стакана: с холодной, горячей и смешанной водой. После привыкания пальцев к холодной и горячей воде одновременно опустите их в тёплую воду. Сделайте вывод, достаточно ли надёжны ощущения для оценки температуры.",
        "en": "Take three glasses: with cold, hot and mixed water. After your fingers get used to cold and hot water, dip them into warm water at the same time. Conclude whether sensations are reliable enough to estimate temperature.",
        "kk": "Үш стакан алыңыз: суық, ыстық және аралас сумен. Саусақтарыңыз суық және ыстық суға үйренгеннен кейін оларды бір уақытта жылы суға батырыңыз. Сезімдердің температураны бағалау үшін жеткілікті сенімділігі туралы қорытынды жасаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Статья про обман восприятия температуры",
            "en": "Article about deception of temperature perception",
            "kk": "Температураны қабылдауды алдау туралы мақала"
          },
          "url": "https://dzen.ru/a/Y-NNoMOGx3bqNBgz"
        },
        {
          "label": {
            "ru": "Симулятор «Относительность ощущений»",
            "en": "Simulator “Relativity of sensations”",
            "kk": "«Сезімдердің салыстырмалылығы» симуляторы"
          },
          "url": "https://gemini.google.com/share/ff15ed2b4c3a"
        }
      ]
    },
    "p3": {
      "title": {
        "ru": "Эксперимент: чайник со свистом",
        "en": "Experiment: whistling kettle",
        "kk": "Тәжірибе: ысқырықты шәйнек"
      },
      "description": {
        "ru": "Исследуйте устройство чайника со свистом и объясните действие звукового приспособления. Дополнительно выясните, производят ли такие чайники на предприятиях Казахстана.",
        "en": "Explore the design of a whistling kettle and explain the operation of the sound device. Additionally, find out whether such kettles are produced at enterprises in Kazakhstan.",
        "kk": "Ысқыратын шәйнектің конструкциясын зерттеп, дыбыс құрылғысының жұмысын түсіндіріңіз. Сонымен қатар, мұндай шәйнектер Қазақстандағы кәсіпорындарда шығарылатынын біліңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Почему чайник свистит?",
            "en": "Why does the kettle whistle?",
            "kk": "Шәйнек неге ысқырады?"
          },
          "url": "https://www.tiktok.com/@online_school_science/video/7042183501310889218?is_from_webapp=1&sender_device=pc"
        },
        {
          "label": {
            "ru": "Статья о производстве чайников в Казахстане",
            "en": "Article about the production of teapots in Kazakhstan",
            "kk": "Қазақстандағы шәйнектер өндірісі туралы мақала"
          },
          "url": "https://time.kz/articles/zloba/2022/10/04/tovar-narashvat"
        },
        {
          "label": {
            "ru": "Казахстанская стекольная компания KazGlass",
            "en": "Kazakhstan glass company KazGlass",
            "kk": "Қазақстандық шыны өндіруші KazGlass компаниясы"
          },
          "url": "https://kz.bizorg.su/almatyi-rg/c536469-stekolynaya-kompaniya-ynek-too"
        }
      ]
    },
    "p4": {
      "title": {
        "ru": "Эксперимент: теплопроводность и конвекция",
        "en": "Experiment: Conduction and Convection",
        "kk": "Эксперимент: Өткізгіштік және конвекция"
      },
      "description": {
        "ru": "Сравните теплопроводность деревянной и металлической ложек в горячей воде. Измерьте температуру воздуха у пола и потолка, а с помощью пламени свечи исследуйте направление воздушных потоков.",
        "en": "Compare the thermal conductivity of a wooden and metal spoon in hot water. Measure the air temperature near the floor and ceiling, and use a candle flame to examine the direction of air flow.",
        "kk": "Ағаш пен металл қасықтың ыстық судағы жылу өткізгіштігін салыстырыңыз. Еден мен төбеге жақын ауа температурасын өлшеңіз және ауа ағынының бағытын тексеру үшін шам жалынын пайдаланыңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор теплопроводности металла и дерева",
            "en": "Simulator of thermal conductivity of metal and wood",
            "kk": "Металл мен ағаштың жылу өткізгіштігінің симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mf_vedeni_energie&l=ru"
        },
        {
          "label": {
            "ru": "Видео о теплопроводности ложки",
            "en": "Video about thermal conductivity of a spoon",
            "kk": "Қасықтың жылу өткізгіштігі туралы бейне"
          },
          "url": "https://www.tiktok.com/@nastya_fizichka/video/7556151877428120840?is_from_webapp=1&sender_device=pc"
        },
        {
          "label": {
            "ru": "Конвекция в комнате",
            "en": "Convection in the room",
            "kk": "Бөлмедегі конвекция"
          },
          "url": "https://youtu.be/im8MWegdnI0?si=KO2bfQ3sIma6CTw-"
        },
        {
          "label": {
            "ru": "Симулятор теплообмена конвекцией",
            "en": "Convection heat transfer simulator",
            "kk": "Конвекциялық жылу беру симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mf_proudeni_energie&l=ru"
        }
      ]
    },
    "p5": {
      "title": {
        "ru": "Эксперимент: теплоизоляция",
        "en": "Experiment: thermal insulation",
        "kk": "Эксперимент: жылу оқшаулау"
      },
      "description": {
        "ru": "Оберните одинаковые бутылки с горячей водой полиэтиленовой плёнкой и газетной бумагой одинаковой толщины. Каждые 5 минут измеряйте температуру и постройте графики зависимости температуры от времени.",
        "en": "Wrap identical hot water bottles in plastic wrap and newsprint of the same thickness. Every 5 minutes, measure the temperature and plot graphs of temperature versus time.",
        "kk": "Бірдей ыстық су бөтелкелерін бірдей қалыңдықтағы полиэтилен пакетіне және газет қағазына ораңыз. Әр 5 минут сайын температураны өлшеңіз және температураның уақытқа қарсы графиктерін салыңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Thermal Insulation — Testing Insulation Materials",
            "en": "Thermal Insulation — Testing Insulation Materials",
            "kk": "Thermal Insulation — Testing Insulation Материалдар"
          },
          "url": "https://youtu.be/bSAc9SaX69o?si=PNzFnonNFEkSIhhH"
        },
        {
          "label": {
            "ru": "Теплопроводность металла и дерева",
            "en": "Thermal conductivity of metal and wood",
            "kk": "Металл мен ағаштың жылу өткізгіштігі"
          },
          "url": "https://youtu.be/zAWYwYB1rdk?si=KflepNIpB-5MPxBr"
        },
        {
          "label": {
            "ru": "Симулятор исследования теплоизоляции",
            "en": "Thermal insulation research simulator",
            "kk": "Жылу оқшаулауды зерттеу симуляторы"
          },
          "url": "https://gemini.google.com/share/18271de83326"
        }
      ]
    },
    "p6": {
      "title": {
        "ru": "Эксперимент: теплоизоляция одежды",
        "en": "Experiment: Thermal insulation of clothing",
        "kk": "Тәжірибе: Киімнің жылу оқшаулауы"
      },
      "description": {
        "ru": "Оберните две банки с водой одинаковой температуры синтепоном и мехом одинаковой толщины. Через одинаковое время сравните температуры и сделайте вывод о теплоизоляции.",
        "en": "Wrap two jars of water at the same temperature with padding polyester and fur of the same thickness. After the same time, compare the temperatures and draw a conclusion about thermal insulation.",
        "kk": "Бірдей температурадағы екі банка суды толтырғыш полиэфирмен және бірдей қалыңдықтағы жүнмен ораңыз. Сол уақыттан кейін температураларды салыстырып, жылу оқшаулау туралы қорытынды жасаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Как выбрать утеплитель для шитья одежды",
            "en": "How to choose insulation for sewing clothes",
            "kk": "Киім тігу үшін оқшаулауды қалай таңдауға болады"
          },
          "url": "https://burdastyle.ru/master-klassy/tkani/kak-vybrat-uteplitel_12952/"
        },
        {
          "label": {
            "ru": "Сравнение теплоизоляции синтепона, меха и других материалов",
            "en": "Comparison of thermal insulation of padding polyester, fur and other materials",
            "kk": "Толтырғыш полиэфир, үлбір және басқа материалдардың жылу оқшаулауын салыстыру"
          },
          "url": "https://gemini.google.com/share/5c55d44e5123"
        }
      ]
    },
    "p7": {
      "title": {
        "ru": "Эксперимент: скорость нагревания воды",
        "en": "Experiment: water heating rate",
        "kk": "Тәжірибе: суды жылыту жылдамдығы"
      },
      "description": {
        "ru": "Постройте график зависимости температуры воды от времени при нагревании на газовой горелке и в электрическом чайнике. Начальную температуру измерьте термометром.",
        "en": "Plot a graph of water temperature versus time when heated on a gas burner and in an electric kettle. Measure the initial temperature with a thermometer.",
        "kk": "Газ оттығында және электр шәйнекте қыздырған кездегі су температурасының уақытқа қатысты графигін салыңыз. Бастапқы температураны термометрмен өлшеңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Статья о кипении воды",
            "en": "Article on boiling water",
            "kk": "Қайнаған су туралы мақала"
          },
          "url": "https://www.ekodar.ru/kvartiry/water-wiki/popular/kipenie-vody/"
        },
        {
          "label": {
            "ru": "Сравнение скорости нагрева на газовой горелке и в электрочайнике",
            "en": "Comparison of heating speed on a gas burner and in an electric kettle",
            "kk": "Газ оттығы мен электр шәйнегіндегі қыздыру жылдамдығын салыстыру"
          },
          "url": "https://gemini.google.com/share/332e18580b69"
        }
      ]
    },
    "p9": {
      "title": {
        "ru": "Эксперимент: нагревание воды работой",
        "en": "Experiment: heating water by work",
        "kk": "Тәжірибе: жұмыс арқылы суды жылыту"
      },
      "description": {
        "ru": "Налейте воду известной массы, измерьте температуру, размешивайте миксером около 5 минут и снова измерьте температуру. Объясните результат через превращение механической энергии во внутреннюю.",
        "en": "Pour water of a known mass, measure the temperature, stir with a mixer for about 5 minutes and measure the temperature again. Explain the result through the conversion of mechanical energy into internal energy.",
        "kk": "Белгілі массадағы суды құйыңыз, температураны өлшеңіз, араластырғышпен шамамен 5 минут араластырыңыз және температураны қайтадан өлшеңіз. Механикалық энергияның ішкі энергияға айналуы арқылы нәтижені түсіндіріңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор внутренней энергии",
            "en": "Internal Energy Simulator",
            "kk": "Ішкі энергия симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=mf_vnitrni_energie&l=ru"
        },
        {
          "label": {
            "ru": "Симулятор нагревания воды при механической работе",
            "en": "Simulator of water heating during mechanical operation",
            "kk": "Механикалық жұмыс кезінде суды жылыту симуляторы"
          },
          "url": "https://gemini.google.com/share/82dc1d034049"
        }
      ]
    },
    "p10": {
      "title": {
        "ru": "Эксперимент: плавление льда",
        "en": "Experiment: Melting Ice",
        "kk": "Тәжірибе: Мұзды еріту"
      },
      "description": {
        "ru": "Опустите термометр в смесь воды и льда. Наблюдайте показания до полного исчезновения льда и сделайте вывод о температуре во время плавления.",
        "en": "Dip the thermometer into the water and ice mixture. Observe the readings until the ice disappears completely and draw a conclusion about the temperature during melting.",
        "kk": "Термометрді су мен мұз қоспасына батырыңыз. Мұз толығымен жойылғанша көрсеткіштерді қадағалаңыз және балқу кезіндегі температура туралы қорытынды жасаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор «Плавление льда»",
            "en": "Ice Melting Simulator",
            "kk": "Мұзды еріту симуляторы"
          },
          "url": "https://gemini.google.com/share/ffd0e17ce400"
        }
      ]
    },
    "p11": {
      "title": {
        "ru": "Эксперимент: от чего зависит испарение",
        "en": "Experiment: what does evaporation depend on?",
        "kk": "Тәжірибе: булану неге байланысты?"
      },
      "description": {
        "ru": "Сравните испарение одинаковых капель жидкости при разной температуре, площади поверхности, наличии обдува и для разных жидкостей. Подготовьте отчёт.",
        "en": "Compare the evaporation of identical drops of liquid at different temperatures, surface areas, presence of airflow and for different liquids. Prepare a report.",
        "kk": "Сұйықтықтың бірдей тамшыларының булануын әртүрлі температурада, бетінің аудандарында, ауа ағынының болуын және әртүрлі сұйықтықтар үшін салыстырыңыз. Есеп дайындаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Видеоэксперимент о скорости испарения жидкостей",
            "en": "Video experiment on the rate of evaporation of liquids",
            "kk": "Сұйықтардың булану жылдамдығына бейне тәжірибе"
          },
          "url": "https://vk.com/video-153078607_456239276"
        }
      ]
    },
    "p12": {
      "title": {
        "ru": "Эксперимент: скороварка",
        "en": "Experiment: pressure cooker",
        "kk": "Тәжірибе: қысымды пеш"
      },
      "description": {
        "ru": "Опытным путём сравните время приготовления пищи в скороварке и обычной кастрюле. Объясните результат зависимостью температуры кипения от внешнего давления.",
        "en": "Experimentally compare the cooking time in a pressure cooker and a regular saucepan. Explain the result by the dependence of the boiling temperature on external pressure.",
        "kk": "Қысымдағы пеш пен кәдімгі кастрюльдегі пісіру уақытын тәжірибе жүзінде салыстырыңыз. Нәтижені қайнау температурасының сыртқы қысымға тәуелділігі арқылы түсіндіріңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Насыщенные и ненасыщенные пары. Зависимость температуры кипения от давления",
            "en": "Saturated and unsaturated pairs. Dependence of boiling temperature on pressure",
            "kk": "Қаныққан және қанықпаған жұптар. Қайнау температурасының қысымға тәуелділігі"
          },
          "url": "https://youtu.be/CFtOVkE8PSg?si=2guq4VY0rlpuWy8Q"
        },
        {
          "label": {
            "ru": "Зависимость температуры кипения от давления",
            "en": "Dependence of boiling temperature on pressure",
            "kk": "Қайнау температурасының қысымға тәуелділігі"
          },
          "url": "https://youtu.be/Xcs3IexmJzk?si=dnyWvSGgYVjNZqdT"
        },
        {
          "label": {
            "ru": "Статья о принципе работы скороварки",
            "en": "An article about the operating principle of a pressure cooker",
            "kk": "Қысымды пештің жұмыс принципі туралы мақала"
          },
          "url": "https://www.kitchenindustries.club/%D1%81%D0%B0%D0%BC%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B8%D0%B4-%D0%BF%D0%BE-%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D0%B0%D1%80%D0%BA%D0%B0%D0%BC-%D1%87%D1%82%D0%BE-%D0%B8-%D0%BA/"
        }
      ]
    },
    "p15": {
      "title": {
        "ru": "Эксперимент: модель парового двигателя",
        "en": "Experiment: Steam Engine Model",
        "kk": "Эксперимент: Бу қозғалтқышының үлгісі"
      },
      "description": {
        "ru": "Изготовьте безопасную модель парового двигателя, испытайте её действие и опишите превращение внутренней энергии пара в механическую работу. Нагревание выполняйте только под контролем учителя.",
        "en": "Make a safe model of a steam engine, test its operation and describe the transformation of the internal energy of steam into mechanical work. Perform heating only under the supervision of a teacher.",
        "kk": "Бу машинасының қауіпсіз моделін жасап, оның жұмысын тексеріп, будың ішкі энергиясының механикалық жұмысқа айналуын сипаттаңыз. Жылытуды тек мұғалімнің бақылауымен орындаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор парового двигателя",
            "en": "Steam Engine Simulator",
            "kk": "Бу қозғалтқышының симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mf_parnistroj&l=ru"
        },
        {
          "label": {
            "ru": "Самодельный паровой двигатель",
            "en": "Homemade steam engine",
            "kk": "Үйде жасалған бу қозғалтқышы"
          },
          "url": "https://youtu.be/y7WF5I1oyA4?si=BKSx01dBi3CAjGLD"
        },
        {
          "label": {
            "ru": "Простой проект парового двигателя",
            "en": "Simple Steam Engine Project",
            "kk": "Қарапайым бу қозғалтқышы жобасы"
          },
          "url": "https://youtu.be/0C0e-rqsi_c?si=lcirRKovhpG4liCS"
        }
      ]
    },
    "p18": {
      "title": {
        "ru": "Эксперимент: электризация тел",
        "en": "Experiment: electrification of bodies",
        "kk": "Эксперимент: денелерді электрлендіру"
      },
      "description": {
        "ru": "Потрите резиновый шарик газетой, исследуйте притяжение кусочков бумаги и фольги, действие на волосы и взаимодействие двух заряженных шариков. Соблюдайте безопасность.",
        "en": "Rub a rubber ball with newspaper, explore the attraction of pieces of paper and foil, the effect on hair and the interaction of two charged balls. Stay safe.",
        "kk": "Резеңке шарды газетпен ысқылаңыз, қағаз және фольга бөліктерінің тартылуын, шашқа әсерін және зарядталған екі шардың өзара әрекеттесуін зерттеңіз. Аман болыңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Опыт со статическим электричеством",
            "en": "Experience with static electricity",
            "kk": "Статикалық электрмен жұмыс тәжірибесі"
          },
          "url": "https://youtu.be/2b5ddYw1Qio?si=bhdD4rQ2ycyXZGla"
        },
        {
          "label": {
            "ru": "Симулятор Balloons and Static Electricity",
            "en": "Simulator Balloons and Static Electricity",
            "kk": "Симулятор Balloons and Static Electricity"
          },
          "url": "https://phet.colorado.edu/en/simulations/balloons-and-static-electricity"
        },
        {
          "label": {
            "ru": "Шарик висит на потолке",
            "en": "The ball hangs on the ceiling",
            "kk": "Доп төбеде ілініп тұр"
          },
          "url": "https://www.tiktok.com/@kirill_balloon_tmn/video/6971376931396668674?is_from_webapp=1&sender_device=pc"
        },
        {
          "label": {
            "ru": "Видео о статическом электричестве",
            "en": "Video about static electricity",
            "kk": "Статикалық электр туралы бейне"
          },
          "url": "https://youtu.be/nu7KzyeMWjY?si=NMq7Z8F7LW87lAuG"
        },
        {
          "label": {
            "ru": "Одноимённые заряды на шариках",
            "en": "Similar charges on balls",
            "kk": "Шарларға ұқсас зарядтар"
          },
          "url": "https://www.tiktok.com/@vikamolekula/video/7051648940185292038?is_from_webapp=1&sender_device=pc"
        }
      ]
    },
    "p22": {
      "title": {
        "ru": "Эксперимент: лимонная батарейка",
        "en": "Experiment: lemon battery",
        "kk": "Тәжірибе: лимон батареясы"
      },
      "description": {
        "ru": "Изготовьте источник тока из лимона, цинковой и медной проволоки. Сравните его с гальваническим элементом и определите, сколько лимонов нужно для лампы 2,5 В.",
        "en": "Make a current source from lemon, zinc and copper wire. Compare it with a galvanic cell and determine how many lemons are needed for a 2.5 V lamp.",
        "kk": "Лимоннан, мырыштан және мыс сымнан ток көзін жасаңыз. Оны гальваникалық элементпен салыстырыңыз және 2.5 V шамына қанша лимон қажет екенін анықтаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Галилео. Эксперимент «Лимон-батарейка»",
            "en": "Galileo. Lemon Battery Experiment",
            "kk": "Галилео. Лимон батареясының тәжірибесі"
          },
          "url": "https://youtu.be/wN1N3yN8QHk?si=0tgcu1Fggr9SEbNb"
        },
        {
          "label": {
            "ru": "Электричество из лимона",
            "en": "Electricity from a lemon",
            "kk": "Лимоннан алынған электр энергиясы"
          },
          "url": "https://youtu.be/Ce__dmq8icw?si=MXD-PB16Ik7p83rf"
        },
        {
          "label": {
            "ru": "Fruit battery — make light",
            "en": "Fruit battery — make light",
            "kk": "Fruit battery — make light"
          },
          "url": "https://www.tiktok.com/@scienceanu/video/7257697581319474434?is_from_webapp=1&sender_device=pc"
        }
      ]
    },
    "p23": {
      "title": {
        "ru": "Эксперимент: модель электрической цепи",
        "en": "Experiment: Electric Circuit Model",
        "kk": "Эксперимент: Электр тізбегінің моделі"
      },
      "description": {
        "ru": "Соберите цепь из гальванического элемента, ключа и низковольтной лампы. На её основе можно сделать фонарь, ночной светильник или модель светофора.",
        "en": "Assemble a circuit from a galvanic cell, a key and a low-voltage lamp. Based on it, you can make a lantern, a night lamp or a traffic light model.",
        "kk": "Гальваникалық элементтен, кілттен және төмен вольтты шамнан тізбекті құрастырыңыз. Оның негізінде сіз шамды, түнгі шамды немесе бағдаршам үлгісін жасай аласыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор Circuit Construction Kit: DC",
            "en": "Simulator Circuit Construction Kit: DC",
            "kk": "Симулятор Circuit Construction Жинақ: тұрақты ток"
          },
          "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc"
        },
        {
          "label": {
            "ru": "Видео со светильником из электрической цепи",
            "en": "Video with a lamp made from an electrical circuit",
            "kk": "Электр тізбегінен жасалған шамы бар бейне"
          },
          "url": "https://youtu.be/1qaGNQORXOM?si=7vNbvLgb9Anf3_Nc"
        },
        {
          "label": {
            "ru": "Настоящий светофор своими руками",
            "en": "Real traffic light with your own hands",
            "kk": "Өз қолыңызбен нағыз бағдаршам"
          },
          "url": "https://youtu.be/WVyltp2RCGw?si=suDKWuPdbnZtGv9t"
        }
      ]
    },
    "p24": {
      "title": {
        "ru": "Эксперимент: сопротивление лампы и электровикторина",
        "en": "Experiment: Lamp Resistance and Electric Quiz",
        "kk": "Эксперимент: Шамның кедергісі және электрлік викторина"
      },
      "description": {
        "ru": "По данным на цоколе лампы вычислите номинальное сопротивление. Дополнительно изготовьте электровикторину, в которой правильный ответ замыкает цепь и включает индикатор.",
        "en": "Using the data on the lamp base, calculate the nominal resistance. Additionally, make an electric quiz in which the correct answer completes the circuit and turns on the indicator.",
        "kk": "Шамның негізіндегі деректерді пайдалана отырып, номиналды қарсылықты есептеңіз. Сонымен қатар, дұрыс жауап тізбекті аяқтайтын және индикаторды қосатын электрлік викторина жасаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Пример расчёта сопротивления лампы",
            "en": "Example of lamp resistance calculation",
            "kk": "Шамның кедергісін есептеу мысалы"
          },
          "url": "https://youtu.be/XzXUyOrbARI?si=T9ALMlXpLSE5UqYd"
        },
        {
          "label": {
            "ru": "Симулятор электрического сопротивления",
            "en": "Electrical Resistance Simulator",
            "kk": "Электрлік кедергі симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=ele_odpor&l=ru"
        },
        {
          "label": {
            "ru": "Электрическая викторина своими руками",
            "en": "DIY Electrical Quiz",
            "kk": "DIY электрлік викторина"
          },
          "url": "https://vk.com/@semeynoe.kirov-elektricheskaya-viktorina-svoimi-rukami"
        },
        {
          "label": {
            "ru": "Электровикторина. Видеоинструкция",
            "en": "Electric Quiz. Video instructions",
            "kk": "Электрлік викторина. Бейне нұсқаулар"
          },
          "url": "https://rutube.ru/video/b0ba06e25da2f9e330e140abcfc078e7/?r=wd"
        }
      ]
    },
    "p25": {
      "title": {
        "ru": "Эксперимент: удельное сопротивление провода",
        "en": "Experiment: Wire Resistivity",
        "kk": "Тәжірибе: Сымның меншікті кедергісі"
      },
      "description": {
        "ru": "С помощью источника тока, амперметра, вольтметра и медной проволоки известного сечения определите сопротивление и исследуемую величину.",
        "en": "Using a current source, an ammeter, a voltmeter and a copper wire of a known cross-section, determine the resistance and the value being tested.",
        "kk": "Ток көзін, амперметрді, вольтметрді және көлденең қимасы белгілі мыс сымды пайдаланып, кедергі мен тексерілетін мәнді анықтаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор электрического сопротивления с расчётами",
            "en": "Electrical resistance simulator with calculations",
            "kk": "Есептеулері бар электр кедергісінің симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=ele_odpor&l=ru"
        },
        {
          "label": {
            "ru": "Resistance in a Wire — симулятор PhET",
            "en": "Resistance in a Wire – PhET simulator",
            "kk": "Resistance in a Wire – PhET симуляторы"
          },
          "url": "https://phet.colorado.edu/en/simulations/resistance-in-a-wire"
        }
      ]
    },
    "p27": {
      "title": {
        "ru": "Эксперимент: КПД электрического чайника и стоимость энергии",
        "en": "Experiment: Electric kettle efficiency and energy cost",
        "kk": "Эксперимент: Электр шәйнектің тиімділігі және энергия құны"
      },
      "description": {
        "ru": "По паспорту чайника определите мощность, нагрейте известный объём воды, измерьте время и температуры, рассчитайте полученную теплоту, работу тока и КПД. Отдельно определите стоимость энергии семьи за месяц.",
        "en": "Using the kettle's passport, determine the power, heat a known volume of water, measure time and temperature, calculate the heat received, current work and efficiency. Separately, determine the family's monthly energy cost.",
        "kk": "Шәйнектің төлқұжаты арқылы қуатты анықтаңыз, судың белгілі көлемін қыздырыңыз, уақыт пен температураны өлшеңіз, алынған жылуды, ағымдағы жұмысты және ПӘК-ті есептеңіз. Отбасының ай сайынғы энергия құнын бөлек анықтаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Расчёт КПД электрического чайника",
            "en": "Calculation of the efficiency of an electric kettle",
            "kk": "Электр шәйнектің тиімділігін есептеу"
          },
          "url": "https://youtu.be/TRjKkHBtefY?si=ux8oPjDgVpVs4PAL"
        },
        {
          "label": {
            "ru": "Лабораторная работа о КПД чайника",
            "en": "Laboratory work on the efficiency of a kettle",
            "kk": "Шәйнектің тиімділігі бойынша зертханалық жұмыс"
          },
          "url": "https://youtu.be/ejyB622x-Ys?si=eCF3w-M650HDmg8Y"
        },
        {
          "label": {
            "ru": "Калькулятор стоимости электроэнергии в Казахстане",
            "en": "Electricity cost calculator in Kazakhstan",
            "kk": "Қазақстандағы электр энергиясының калькуляторы"
          },
          "url": "https://bankchart.kz/servisy/kalkulyatory/kalkulyator_elektroenergii#google_vignette"
        }
      ]
    },
    "p30": {
      "title": {
        "ru": "Эксперимент: лампа накаливания и светодиодная лампа",
        "en": "Experiment: incandescent lamp and LED lamp",
        "kk": "Эксперимент: қыздыру шамы және жарықдиодты шам"
      },
      "description": {
        "ru": "Под контролем взрослого включите лампу накаливания и светодиодную лампу на одинаковое время. Сравните нагрев, мощность и эффективность. Не прикасайтесь к лампе накаливания сразу после отключения.",
        "en": "Under adult supervision, turn on the incandescent lamp and LED lamp for the same amount of time. Compare heat, power and efficiency. Do not touch the incandescent lamp immediately after switching off.",
        "kk": "Ересектердің қадағалауымен қыздыру шамы мен жарықдиодты шамды бірдей уақытқа қосыңыз. Жылу, қуатты және тиімділікті салыстыру. Өшірілгеннен кейін қыздыру шамына бірден қол тигізбеңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Сравнение мощности LED-ламп и ламп накаливания",
            "en": "Comparison of power of LED lamps and incandescent lamps",
            "kk": "Жарықдиодты шамдар мен қыздыру шамдарының қуатын салыстыру"
          },
          "url": "https://svetzavod.ru/news/sootnoshenie-moshhnosti-led-lamp-i-lamp-nakalivaniya-polnoe-rukovodstvo-i-tablica/"
        }
      ]
    },
    "p31": {
      "title": {
        "ru": "Эксперимент: элемент Вольта",
        "en": "Experiment: Volta Element",
        "kk": "Эксперимент: Вольта элементі"
      },
      "description": {
        "ru": "Составьте элемент Вольта из двух разных металлов и раствора поваренной соли. Проверьте полученный источник, подключив лампу карманного фонарика.",
        "en": "Compose the Volta element from two different metals and a solution of table salt. Check the received source by connecting a flashlight lamp.",
        "kk": "Вольта элементін екі түрлі металдан және ас тұзының ерітіндісінен құрастыр. Шамды қосу арқылы алынған көзді тексеріңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Видеоролик про элемент Вольта",
            "en": "Video about the Volta element",
            "kk": "Вольта элементі туралы бейне"
          },
          "url": "https://youtu.be/2hQphyBDIM8?si=mHjqz5QwZocR7xCn"
        },
        {
          "label": {
            "ru": "Симулятор «Элемент Вольта»",
            "en": "Simulator \"Element Volta\"",
            "kk": "«Element Volta» симуляторы"
          },
          "url": "https://gemini.google.com/share/87e02da0bf07"
        }
      ]
    },
    "p32": {
      "title": {
        "ru": "Эксперимент: намагничивание и компас",
        "en": "Experiment: magnetization and compass",
        "kk": "Эксперимент: магниттеу және компас"
      },
      "description": {
        "ru": "Намагнитьте стальные изделия самодельным электромагнитом, проверьте их действие на железные предметы и изготовьте водяной компас. Подготовьте видеоотчёт.",
        "en": "Magnetize steel products with a homemade electromagnet, test their effect on iron objects and make a water compass. Prepare a video report.",
        "kk": "Болат бұйымдарды қолдан жасалған электромагнитпен магниттеңіз, олардың темір заттарға әсерін тексеріп, су компасын жасаңыз. Бейне есеп дайындаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Постоянные магниты. Намагниченные ножницы",
            "en": "Permanent magnets. Magnetized scissors",
            "kk": "Тұрақты магниттер. Магниттелген қайшы"
          },
          "url": "https://youtu.be/KfKrouG0Os8?si=2j_XAtiiMX0H0etB"
        },
        {
          "label": {
            "ru": "Компас из швейной иглы",
            "en": "Sewing needle compass",
            "kk": "Инені тігу компасы"
          },
          "url": "https://youtu.be/0S09LTq90tQ?si=lG_L1Xa3omCw5Vq-"
        }
      ]
    },
    "p33": {
      "title": {
        "ru": "Эксперимент: нагревание намагниченной стали",
        "en": "Experiment: Heating Magnetized Steel",
        "kk": "Тәжірибе: Магниттелген болатты қыздыру"
      },
      "description": {
        "ru": "С помощью электромагнита намагнитьте иглу, ножницы или гвоздь. Проверьте магнитные свойства до и после нагревания до высокой температуры и объясните результат.",
        "en": "Use an electromagnet to magnetize a needle, scissors or nail. Check the magnetic properties before and after heating to high temperature and explain the result.",
        "kk": "Инені, қайшыны немесе тырнақты магниттеу үшін электромагнитті пайдаланыңыз. Жоғары температураға дейін қыздыру алдында және одан кейін магниттік қасиеттерді тексеріп, нәтижені түсіндіріңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Как сделать электромагнит",
            "en": "How to make an electromagnet",
            "kk": "Электр магнитті қалай жасауға болады"
          },
          "url": "https://youtu.be/wo74CoboBR8?si=MLFjVc7TSJmzHAb7"
        },
        {
          "label": {
            "ru": "Магнитные свойства при нагреве",
            "en": "Magnetic properties when heated",
            "kk": "Қыздырған кездегі магниттік қасиеттері"
          },
          "url": "https://youtu.be/L0eo_18jTaw?si=j5PKbcXMDMPY6cef"
        }
      ]
    },
    "p34": {
      "title": {
        "ru": "Эксперимент: электромагнит из гвоздя и провода",
        "en": "Experiment: electromagnet made from a nail and wire",
        "kk": "Тәжірибе: шеге мен сымнан жасалған электромагнит"
      },
      "description": {
        "ru": "Намотайте проволоку на железный стержень, подключите катушку к гальваническому элементу и исследуйте действие электромагнита. Изменяйте число витков и силу тока.",
        "en": "Wind a wire around an iron rod, connect the coil to a galvanic cell and examine the action of an electromagnet. Change the number of turns and current.",
        "kk": "Сымды темір шыбықтың айналасына орап, катушканы гальваникалық элементке жалғап, электромагниттің әсерін тексеріңіз. Бұрылыстар мен ток санын өзгертіңіз."
      },
      "links": [
        {
          "label": {
            "ru": "Как сделать электромагнит из гвоздя и провода",
            "en": "How to make an electromagnet from a nail and wire",
            "kk": "Шеге мен сымнан электромагнитті қалай жасауға болады"
          },
          "url": "https://youtu.be/bguy8LxBpuQ?si=2nibmBR41nyRcxHm"
        },
        {
          "label": {
            "ru": "Статья о создании магнита из проволоки и гвоздя",
            "en": "An article about creating a magnet from wire and a nail",
            "kk": "Сым мен шегеден магнит жасау туралы мақала"
          },
          "url": "https://ru.wikihow.com/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82-%D0%B8%D0%B7-%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BA%D0%B8-%D0%B8-%D0%B3%D0%B2%D0%BE%D0%B7%D0%B4%D1%8F"
        },
        {
          "label": {
            "ru": "Симулятор магнитов и электромагнитов PhET",
            "en": "PhET magnets and electromagnets simulator",
            "kk": "PhET магниттері мен электромагниттердің симуляторы"
          },
          "url": "https://phet.colorado.edu/en/simulations/magnets-and-electromagnets"
        }
      ]
    },
    "p37": {
      "title": {
        "ru": "Эксперимент: измерение высоты здания по тени",
        "en": "Experiment: measuring the height of a building using its shadow",
        "kk": "Тәжірибе: ғимараттың биіктігін оның көлеңкесі арқылы өлшеу"
      },
      "description": {
        "ru": "Определите высоту дома с помощью палки и измерительной ленты, используя подобие треугольников и прямолинейное распространение света.",
        "en": "Determine the height of the house using a stick and measuring tape, using the similarity of triangles and the rectilinear spread of light.",
        "kk": "Үшбұрыштардың ұқсастығын және жарықтың түзу сызықты таралуын пайдаланып, таяқша мен өлшеуіш таспаны пайдаланып, үйдің биіктігін анықтаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Как найти высоту здания без специального оборудования",
            "en": "How to find the height of a building without special equipment",
            "kk": "Арнайы жабдықсыз ғимараттың биіктігін қалай табуға болады"
          },
          "url": "https://youtu.be/LYz767L4g1Q?si=Z2SAOmqltvYVao_a"
        },
        {
          "label": {
            "ru": "Height Measurement With Light: Principles & Shadows",
            "en": "Height Measurement With Light: Principles & Shadows",
            "kk": "Height Measurement With Light: Principles & Көлеңкелер"
          },
          "url": "https://answerbaseonline.online/articles/height-measurement-with-light-principles"
        },
        {
          "label": {
            "ru": "How to Measure the Height of Tall Buildings",
            "en": "How to Measure the Height of Tall Buildings",
            "kk": "How to Measure the Height of Tall Buildings"
          },
          "url": "https://www.brighthubengineering.com/building-construction-design/46130-how-to-measure-a-tall-building-or-skyscraper-without-leaving-the-ground/"
        }
      ]
    },
    "p38": {
      "title": {
        "ru": "Эксперимент: плоское зеркало и перископ",
        "en": "Experiment: plane mirror and periscope",
        "kk": "Эксперимент: жазық айна және перископ"
      },
      "description": {
        "ru": "Сравните предмет и изображение в зеркале, проверьте равенство расстояний и размеров. Сконструируйте перископ или калейдоскоп.",
        "en": "Compare the object and the image in the mirror, check the equality of distances and sizes. Construct a periscope or kaleidoscope.",
        "kk": "Айнадағы зат пен кескінді салыстыру, қашықтық пен өлшемдердің теңдігін тексеру. Перископты немесе калейдоскопты құрастырыңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор лучей в зеркале",
            "en": "Simulator of rays in a mirror",
            "kk": "Айнадағы сәулелердің симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=opt_zrcadlo&l=ru"
        },
        {
          "label": {
            "ru": "Симулятор плоского зеркала",
            "en": "Plane Mirror Simulator",
            "kk": "Ұшақ айнасының симуляторы"
          },
          "url": "https://www.new3jcn.com/Phyc140/flat_mirror_prob.html"
        },
        {
          "label": {
            "ru": "Сделаем калейдоскоп",
            "en": "Let's make a kaleidoscope",
            "kk": "Калейдоскоп жасайық"
          },
          "url": "https://youtu.be/bCD8zjsNzag?si=Y7Z_Ndsq4Z9ewxhI"
        },
        {
          "label": {
            "ru": "Как сделать перископ",
            "en": "How to make a periscope",
            "kk": "Перископты қалай жасауға болады"
          },
          "url": "https://youtu.be/mVSYeUPqq6Y?si=uNc7LJEN5C6kOSly"
        }
      ]
    },
    "p40": {
      "title": {
        "ru": "Эксперимент: преломление в воде",
        "en": "Experiment: refraction in water",
        "kk": "Тәжірибе: судағы сыну"
      },
      "description": {
        "ru": "Опустите ложку в стакан с водой и объясните видимый излом на границе сред. Исследуйте преломление лучей в симуляторах и определите показатель преломления.",
        "en": "Dip a spoon into a glass of water and explain the visible break at the interface. Explore the refraction of rays in simulators and determine the refractive index.",
        "kk": "Бір стақан суға қасықты батырып, интерфейстегі көрінетін үзілісті түсіндіріңіз. Тренажерлерде сәулелердің сынуын зерттеп, сыну көрсеткішін анықтаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Ложка в воде. Преломление света",
            "en": "Spoon in water. Refraction of light",
            "kk": "Суға қасық. Жарықтың сынуы"
          },
          "url": "https://youtube.com/shorts/c9DP5iwrxJw?si=txWvtJC6A42f-bLg"
        },
        {
          "label": {
            "ru": "Симулятор Refraction 3 Layers",
            "en": "Simulator Refraction 3 Layers",
            "kk": "Симулятор Refraction 3 Қабаттар"
          },
          "url": "https://www.new3jcn.com/Phyc140/three_layers.html"
        },
        {
          "label": {
            "ru": "Симулятор Bending Light",
            "en": "Simulator Bending Light",
            "kk": "Симулятор Bending Light"
          },
          "url": "https://phet.colorado.edu/en/simulations/bending-light"
        },
        {
          "label": {
            "ru": "Виртуальная лабораторная: показатель преломления",
            "en": "Virtual Lab: Refractive Index",
            "kk": "Виртуалды зертхана: сыну көрсеткіші"
          },
          "url": "https://efizika.ru/html5/150/index.html"
        },
        {
          "label": {
            "ru": "Виртуальная лабораторная: закон преломления",
            "en": "Virtual laboratory: law of refraction",
            "kk": "Виртуалды зертхана: сыну заңы"
          },
          "url": "https://efizika.ru/html5/39/index.html"
        }
      ]
    },
    "p41": {
      "title": {
        "ru": "Эксперимент: как различить линзы",
        "en": "Experiment: how to distinguish between lenses",
        "kk": "Эксперимент: линзаларды қалай ажыратуға болады"
      },
      "description": {
        "ru": "Предложите несколько методов различения собирающей и рассеивающей линз и проверьте их опытом. Сравните простоту и эффективность методов.",
        "en": "Suggest several methods for distinguishing between converging and diverging lenses and test them with experience. Compare the simplicity and effectiveness of the methods.",
        "kk": "Конвергациялық және диверсиялық линзаларды ажыратудың бірнеше әдістерін ұсыныңыз және оларды тәжірибемен сынап көріңіз. Әдістердің қарапайымдылығы мен тиімділігін салыстырыңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Симулятор собирающей линзы",
            "en": "Converging lens simulator",
            "kk": "Жинақтаушы линзалар симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=opt_spojka&l=ru"
        },
        {
          "label": {
            "ru": "Симулятор рассеивающей линзы",
            "en": "Dispersive Lens Simulator",
            "kk": "Дисперсиялық линзалар симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=opt_rozptylka&l=ru"
        },
        {
          "label": {
            "ru": "Симулятор Geometric Optics",
            "en": "Simulator Geometric Optics",
            "kk": "Симулятор Geometric Optics"
          },
          "url": "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html"
        }
      ]
    },
    "p42": {
      "title": {
        "ru": "Эксперимент: бинокулярное зрение и рассеивающая линза",
        "en": "Experiment: binocular vision and a diverging lens",
        "kk": "Эксперимент: бинокулярлы көру және диверсивті линза"
      },
      "description": {
        "ru": "С одним закрытым глазом попробуйте совместить острия двух карандашей, затем повторите с двумя открытыми глазами. Составьте рекомендации по определению оптической силы рассеивающей линзы.",
        "en": "With one eye closed, try aligning the tips of two pencils, then repeat with both eyes open. Make recommendations for determining the optical power of a diverging lens.",
        "kk": "Бір көзді жұмып, екі қарындаштың ұштарын туралап көріңіз, содан кейін екі көзді ашық күйде қайталаңыз. Диверсиялық линзаның оптикалық қуатын анықтауға ұсыныстар жасаңыз."
      },
      "links": [
        {
          "label": {
            "ru": "Галилео. Бинокулярное зрение",
            "en": "Galileo. Binocular vision",
            "kk": "Галилео. Бинокулярлық көру"
          },
          "url": "https://youtu.be/uipQRt2lz2w?si=vPcCUuK3YpQCX71d"
        },
        {
          "label": {
            "ru": "Симулятор Convex Lens & Concave Lens",
            "en": "Simulator Convex Lens & Concave Lens",
            "kk": "Симулятор Convex Lens және Concave Lens"
          },
          "url": "https://javalab.org/en/lens_en/"
        },
        {
          "label": {
            "ru": "Лабораторная: фокусное расстояние рассеивающей линзы",
            "en": "Laboratory: focal length of diverging lens",
            "kk": "Зертханалық: диверсиялық линзаның фокустық арақашықтығы"
          },
          "url": "https://youtu.be/9S3U6GzjolM?si=I7GLh2Fo1gCLvMXT"
        }
      ]
    }
  },
  "LAB_INFO": {
    "lab1": {
      "title": {
        "ru": "Лабораторная работа № 1. Сравнение количества теплоты при смешивании воды разной температуры",
        "en": "Laboratory work No. 1. Comparison of the amount of heat when mixing water of different temperatures",
        "kk": "Зертханалық жұмыс No 1. Әртүрлі температурадағы суды араластырғанда жылу мөлшерін салыстыру"
      },
      "goal": {
        "ru": "Сравнить количество теплоты, отданное горячей водой, с количеством теплоты, полученным холодной водой, и выявить причины расхождения.",
        "en": "Compare the amount of heat given off by hot water with the amount of heat received by cold water and identify the reasons for the discrepancy.",
        "kk": "Ыстық судың бөлетін жылу мөлшерін суық судың алатын жылу мөлшерімен салыстырыңыз және сәйкессіздіктің себептерін анықтаңыз."
      },
      "equipment": {
        "ru": "Калориметр, мензурка, термометр, горячая и холодная вода.",
        "en": "Calorimeter, beaker, thermometer, hot and cold water.",
        "kk": "Калориметр, стакан, термометр, ыстық және суық су."
      },
      "steps": [
        {
          "ru": "Измерьте начальные температуры холодной и горячей воды.",
          "en": "Measure the initial temperatures of cold and hot water.",
          "kk": "Суық және ыстық судың бастапқы температурасын өлшеңіз."
        },
        {
          "ru": "Налейте в калориметр горячую воду, затем добавьте холодную и осторожно перемешайте.",
          "en": "Pour hot water into the calorimeter, then add cold water and stir gently.",
          "kk": "Калориметрге ыстық су құйыңыз, содан кейін суық суды қосып, ақырын араластырыңыз."
        },
        {
          "ru": "Измерьте температуру смеси, рассчитайте массы воды и Q₁, Q₂.",
          "en": "Measure the temperature of the mixture, calculate the masses of water and Q₁, Q₂.",
          "kk": "Қоспаның температурасын өлшеңіз, судың және Q₁, Q₂ массаларын есептеңіз."
        },
        {
          "ru": "Сравните результаты и объясните потери теплоты.",
          "en": "Compare the results and explain the heat loss.",
          "kk": "Нәтижелерді салыстырыңыз және жылу шығынын түсіндіріңіз."
        }
      ],
      "formulas": [
        {
          "ru": "Q₁ = c·m₁·(t − t₁)",
          "en": "Q₁ = c·m₁·(t − t₁)",
          "kk": "Q₁ = c·m₁·(t − t₁)"
        },
        {
          "ru": "Q₂ = c·m₂·(t₂ − t)",
          "en": "Q₂ = c·m₂·(t₂ − t)",
          "kk": "Q₂ = c·m₂·(t₂ − t)"
        },
        {
          "ru": "В идеале Q₁ = Q₂",
          "en": "Ideally Q₁ = Q₂",
          "kk": "Ең дұрысы Q₁ = Q₂"
        }
      ],
      "questions": [
        {
          "ru": "Почему Q₁ и Q₂ в реальном опыте немного различаются?",
          "en": "Why are Q₁ and Q₂ slightly different in actual experience?",
          "kk": "Неліктен Q₁  және Q₂  нақты тәжірибеде аздап ерекшеленеді?"
        },
        {
          "ru": "Какие действия уменьшают теплообмен с окружающей средой?",
          "en": "What actions reduce heat exchange with the environment?",
          "kk": "Қандай әрекеттер қоршаған ортамен жылу алмасуды азайтады?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Лабораторная работа №1 — видео",
            "en": "Laboratory work No.1 —video",
            "kk": "Зертханалық жұмыс No1 —бейне"
          },
          "url": "https://youtu.be/eHMpzUc5gmc"
        },
        {
          "label": {
            "ru": "Физика 8 класс — лабораторная №1",
            "en": "Physics 8 class - laboratory No. 1",
            "kk": "Физика 8 сынып - No1 зертхана"
          },
          "url": "https://youtu.be/vcH29Zwrj4s?si=pKlKwS1Ig-MNps5i"
        },
        {
          "label": {
            "ru": "Виртуальная лабораторная",
            "en": "Virtual laboratory",
            "kk": "Виртуалды зертхана"
          },
          "url": "https://efizika.ru/html5/33/index.html"
        }
      ]
    },
    "lab2": {
      "title": {
        "ru": "Лабораторная работа № 2. Определение удельной теплоты плавления льда",
        "en": "Laboratory work No. 2. Determination of the specific heat of melting of ice",
        "kk": "Зертханалық жұмыс No 2. Мұздың еруінің меншікті жылуын анықтау"
      },
      "goal": {
        "ru": "Используя уравнение теплового баланса, определить удельную теплоту плавления льда и сравнить её с табличной.",
        "en": "Using the heat balance equation, determine the specific heat of fusion of ice and compare it with the table.",
        "kk": "Жылу балансының теңдеуін пайдаланып, мұздың меншікті балқу жылуын анықтаңыз және оны кестемен салыстырыңыз."
      },
      "equipment": {
        "ru": "Калориметр, мензурка, термометр, весы, смесь льда и воды, сосуд с водой.",
        "en": "Calorimeter, beaker, thermometer, scales, mixture of ice and water, vessel with water.",
        "kk": "Калориметр, стакан, термометр, таразы, мұз бен су қоспасы, суы бар ыдыс."
      },
      "steps": [
        {
          "ru": "Измерьте температуру калориметра и воды.",
          "en": "Measure the temperature of the calorimeter and water.",
          "kk": "Калориметр мен судың температурасын өлшеңіз."
        },
        {
          "ru": "Добавьте лёд и измерьте температуру смеси после его полного плавления.",
          "en": "Add ice and measure the temperature of the mixture once it has completely melted.",
          "kk": "Мұзды қосып, толығымен ерігеннен кейін қоспаның температурасын өлшеңіз."
        },
        {
          "ru": "Определите массу растаявшего льда по изменению объёма.",
          "en": "Determine the mass of melted ice from the change in volume.",
          "kk": "Көлемінің өзгеруінен еріген мұздың массасын анықтаңыз."
        },
        {
          "ru": "Рассчитайте λ, сравните с табличным значением и оцените погрешность.",
          "en": "Calculate λ, compare with the table value and estimate the error.",
          "kk": "λ есептеңіз, кесте мәнімен салыстырыңыз және қатені бағалаңыз."
        }
      ],
      "formulas": [
        {
          "ru": "m₃ = ρ·ΔV",
          "en": "m₃ = ρ·ΔV",
          "kk": "m₃ = ρ·ΔV"
        },
        {
          "ru": "λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃",
          "en": "λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃",
          "kk": "λ = [c₁m₁(t₁−t) + c₂m₂(t₂−t) − c₂m₃(t−t₃)]/m₃"
        },
        {
          "ru": "Δλ = |λ_таб − λ|",
          "en": "Δλ = |λ_tab − λ|",
          "kk": "Δλ = |λ_қойындысы − λ|"
        }
      ],
      "questions": [
        {
          "ru": "Почему лёд должен быть при температуре около 0 °C?",
          "en": "Why does ice have to be at a temperature around 0 °C?",
          "kk": "Неліктен мұз шамамен 0 °C температурада болуы керек?"
        },
        {
          "ru": "Какие потери энергии влияют на найденное значение λ?",
          "en": "What energy losses affect the found value of λ?",
          "kk": "λ табылған мәніне қандай энергия шығындары әсер етеді?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Виртуальная лабораторная",
            "en": "Virtual laboratory",
            "kk": "Виртуалды зертхана"
          },
          "url": "https://efizika.ru/html5/17/index.html"
        },
        {
          "label": {
            "ru": "Видео лабораторной работы №2",
            "en": "Video of laboratory work No. 2",
            "kk": "No2 зертханалық жұмыстан бейнеролик"
          },
          "url": "https://youtu.be/lN8NmAOJPhQ"
        },
        {
          "label": {
            "ru": "Физика 8 класс — удельная теплота плавления",
            "en": "Physics 8 class - specific heat of fusion",
            "kk": "Физика 8 сынып - балқудың меншікті жылуы"
          },
          "url": "https://youtu.be/4z382jqtnNI?si=zp0ibv3DkcLZ9vGz"
        }
      ]
    },
    "lab3": {
      "title": {
        "ru": "Лабораторная работа № 3. Сборка электрической цепи. Измерение силы тока и напряжения",
        "en": "Laboratory work No. 3. Assembling an electrical circuit. Current and Voltage Measurement",
        "kk": "Зертханалық жұмыс No3. Электр тізбегін құрастыру. Ток пен кернеуді өлшеу"
      },
      "goal": {
        "ru": "Проверить одинаковость силы тока в последовательной цепи и научиться измерять напряжение на разных участках.",
        "en": "Check the same current strength in a series circuit and learn how to measure voltage in different sections.",
        "kk": "Тізбекті тізбектегі бірдей ток күшін тексеріңіз және әртүрлі бөлімдердегі кернеуді өлшеуді үйреніңіз."
      },
      "equipment": {
        "ru": "Источник тока, лампа, резистор, ключ, провода, амперметр, вольтметр.",
        "en": "Current source, lamp, resistor, key, wires, ammeter, voltmeter.",
        "kk": "Ток көзі, шам, резистор, кілт, сымдар, амперметр, вольтметр."
      },
      "steps": [
        {
          "ru": "Определите цену деления приборов.",
          "en": "Determine the price of dividing devices.",
          "kk": "Бөлгіш құрылғылардың бағасын анықтаңыз."
        },
        {
          "ru": "Соберите цепь и измерьте ток в трёх местах, переставляя амперметр.",
          "en": "Assemble the circuit and measure the current in three places by moving the ammeter.",
          "kk": "Тізбекті жинап, амперметрді жылжыту арқылы ток күшін үш жерден өлшеңіз."
        },
        {
          "ru": "Измерьте общее напряжение и напряжения на отдельных потребителях.",
          "en": "Measure the total voltage and the voltages at individual consumers.",
          "kk": "Жеке тұтынушылардағы жалпы кернеу мен кернеулерді өлшеңіз."
        },
        {
          "ru": "Сравните показания и сделайте вывод.",
          "en": "Compare the readings and draw a conclusion.",
          "kk": "Оқылған мәліметтерді салыстырып, қорытынды жасаңыз."
        }
      ],
      "formulas": [
        {
          "ru": "I₁ = I₂ = I₃",
          "en": "I₁ = I₂ = I₃",
          "kk": "I₁ = I₂ = I₃"
        },
        {
          "ru": "U = U₁ + U₂",
          "en": "U = U₁ + U₂",
          "kk": "U = U₁ + U₂"
        }
      ],
      "questions": [
        {
          "ru": "Почему амперметр включают последовательно?",
          "en": "Why is the ammeter connected in series?",
          "kk": "Амперметр неліктен тізбектей жалғанған?"
        },
        {
          "ru": "Почему вольтметр подключают параллельно?",
          "en": "Why is a voltmeter connected in parallel?",
          "kk": "Неліктен вольтметр параллель қосылған?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Видео лабораторной работы №3",
            "en": "Video of laboratory work No. 3",
            "kk": "No3 зертханалық жұмыстан бейнеролик"
          },
          "url": "https://youtu.be/nCXx6Z6giVQ"
        },
        {
          "label": {
            "ru": "Симулятор электрических цепей",
            "en": "Electrical circuit simulator",
            "kk": "Электр тізбегінің симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=ele_obvod&l=ru"
        },
        {
          "label": {
            "ru": "Electric Circuit Simulator",
            "en": "Electric Circuit Simulator",
            "kk": "Electric Circuit Симулятор"
          },
          "url": "https://javalab.org/en/electric_circuit_en/"
        },
        {
          "label": {
            "ru": "Виртуальная лаборатория постоянного тока",
            "en": "DC Virtual Laboratory",
            "kk": "DC виртуалды зертханасы"
          },
          "url": "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_ru.html"
        }
      ]
    },
    "lab4": {
      "title": {
        "ru": "Лабораторная работа № 4. Исследование зависимости силы тока от напряжения",
        "en": "Laboratory work No. 4. Study of the dependence of current on voltage",
        "kk": "Зертханалық жұмыс No 4. Ток күшінің кернеуге тәуелділігін зерттеу"
      },
      "goal": {
        "ru": "Убедиться в прямой зависимости силы тока от напряжения на металлическом проводнике и проверить закон Ома.",
        "en": "Make sure that the current is directly dependent on the voltage on the metal conductor and check Ohm’s law.",
        "kk": "Токтың металл өткізгіштегі кернеуге тікелей тәуелді екеніне көз жеткізіңіз және Ом заңын тексеріңіз."
      },
      "equipment": {
        "ru": "Источник тока, ключ, провода, делитель напряжения, резистор, амперметр, вольтметр.",
        "en": "Current source, key, wires, voltage divider, resistor, ammeter, voltmeter.",
        "kk": "Ток көзі, кілт, сымдар, кернеу бөлгіш, резистор, амперметр, вольтметр."
      },
      "steps": [
        {
          "ru": "Соберите цепь с делителем напряжения.",
          "en": "Assemble a circuit with a voltage divider.",
          "kk": "Кернеу бөлгіші бар тізбекті құрастырыңыз."
        },
        {
          "ru": "Получите несколько пар значений U и I.",
          "en": "Obtain several pairs of U  and I values.",
          "kk": "U  және I мәндерінің бірнеше жұбын алыңыз."
        },
        {
          "ru": "Учтите погрешности и постройте график I(U).",
          "en": "Take into account the errors and plot the I(U) graph.",
          "kk": "Қателерді ескеріп, I(U) графигін салыңыз."
        },
        {
          "ru": "Сделайте вывод о соответствии графика закону Ома.",
          "en": "Draw a conclusion about the graph's compliance with Ohm's law.",
          "kk": "Графиктің Ом заңына сәйкестігі туралы қорытынды жасаңыз."
        }
      ],
      "formulas": [
        {
          "ru": "I = U/R",
          "en": "I = U/R",
          "kk": "I = U/R"
        },
        {
          "ru": "При постоянном R график I(U) — прямая",
          "en": "At constant R the graph of I(U) is straight",
          "kk": "R тұрақты кезінде I(U) графигі түзу болады"
        }
      ],
      "questions": [
        {
          "ru": "Почему точки опыта не лежат строго на одной линии?",
          "en": "Why do the experience points not lie strictly on the same line?",
          "kk": "Неліктен тәжірибе нүктелері бір түзуде жатпайды?"
        },
        {
          "ru": "Что показывает наклон графика I(U)?",
          "en": "What does the slope of the I(U) graph show?",
          "kk": "I(U) графының көлбеуі нені көрсетеді?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Видео лабораторной работы №4",
            "en": "Video of laboratory work No. 4",
            "kk": "No4 зертханалық жұмыстан бейнеролик"
          },
          "url": "https://youtu.be/NlTV6DISqug"
        },
        {
          "label": {
            "ru": "Ещё одно видео лабораторной работы №4",
            "en": "Another video of laboratory work No. 4",
            "kk": "No4 зертханалық жұмыстың кезекті видеосы"
          },
          "url": "https://youtu.be/qYBCiBMJA04?si=ix2SGxmJeqgVLTEb"
        },
        {
          "label": {
            "ru": "Виртуальная лаборатория постоянного тока",
            "en": "DC Virtual Laboratory",
            "kk": "DC виртуалды зертханасы"
          },
          "url": "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_ru.html"
        }
      ]
    },
    "lab5": {
      "title": {
        "ru": "Лабораторная работа № 5. Изучение последовательного соединения проводников",
        "en": "Laboratory work No. 5. Study of series connection of conductors",
        "kk": "Зертханалық жұмыс № 5. Өткізгіштердің тізбектей қосылуын зерттеу"
      },
      "goal": {
        "ru": "Проверить законы последовательного соединения и рассчитать сопротивления резисторов.",
        "en": "Check the laws of series connection and calculate the resistance of resistors.",
        "kk": "Тізбектей қосылу заңдылықтарын тексеру және резисторлардың кедергісін есептеу."
      },
      "equipment": {
        "ru": "Источник тока, ключ, провода, два амперметра, три вольтметра, резисторы.",
        "en": "Current source, key, wires, two ammeters, three voltmeters, resistors.",
        "kk": "Ток көзі, кілт, сымдар, екі амперметр, үш вольтметр, резисторлар."
      },
      "steps": [
        {
          "ru": "Снимите показания I₁, I₂, U₁, U₂ и общего U.",
          "en": "Take readings of I₁, I₂, U₁, U₂ and total U.",
          "kk": "I₁, I₂, U₁, U₂ және жалпы U көрсеткіштерін алыңыз."
        },
        {
          "ru": "Проверьте равенство токов и сумму напряжений.",
          "en": "Check the equality of currents and the sum of voltages.",
          "kk": "Токтардың теңдігін және кернеулердің қосындысын тексеріңіз."
        },
        {
          "ru": "Рассчитайте R₁, R₂ и R по закону Ома.",
          "en": "Calculate R₁, R₂ and R  using Ohm's law.",
          "kk": "Ом заңын пайдаланып R₁, R₂ және R  есептеңіз."
        },
        {
          "ru": "Сравните R с R₁ + R₂.",
          "en": "Compare R  with R₁ + R₂.",
          "kk": "R  және R₁ + R₂. салыстырыңыз"
        }
      ],
      "formulas": [
        {
          "ru": "I = I₁ = I₂",
          "en": "I = I₁ = I₂",
          "kk": "I = I₁ = I₂"
        },
        {
          "ru": "U = U₁ + U₂",
          "en": "U = U₁ + U₂",
          "kk": "U = U₁ + U₂"
        },
        {
          "ru": "R = R₁ + R₂",
          "en": "R = R₁ + R₂",
          "kk": "R = R₁ + R₂"
        }
      ],
      "questions": [
        {
          "ru": "Почему при последовательном соединении сила тока одинакова?",
          "en": "Why is the current the same in a series connection?",
          "kk": "Неліктен тізбекті қосылымда ток бірдей болады?"
        },
        {
          "ru": "На каком резисторе напряжение больше и почему?",
          "en": "Which resistor has the highest voltage and why?",
          "kk": "Қай резистордың кернеуі ең жоғары және неге?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Виртуальная работа: последовательное соединение",
            "en": "Virtual operation: serial connection",
            "kk": "Виртуалды жұмыс: сериялық қосылу"
          },
          "url": "https://efizika.ru/html5/153/index.html"
        },
        {
          "label": {
            "ru": "Видео лабораторной работы №5",
            "en": "Video of laboratory work No. 5",
            "kk": "No5 зертханалық жұмыстың бейнеролигі"
          },
          "url": "https://youtu.be/HlU-eFLWaC0"
        },
        {
          "label": {
            "ru": "Видео лабораторной работы №5 для 8 класса",
            "en": "Video of laboratory work №5 for 8 class",
            "kk": "8 сыныбына арналған №5 зертханалық жұмыстың видеосы"
          },
          "url": "https://youtu.be/YBg3r6rbNGQ?si=oY3x_EDeLRxytorc"
        },
        {
          "label": {
            "ru": "Симулятор Circuit Construction Kit: DC Virtual Lab",
            "en": "Simulator Circuit Construction Kit: DC Virtual Lab",
            "kk": "Симулятор Circuit Construction жинағы: DC Virtual Зертхана"
          },
          "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc-virtual-lab"
        }
      ]
    },
    "lab6": {
      "title": {
        "ru": "Лабораторная работа № 6. Изучение параллельного соединения проводников",
        "en": "Laboratory work No. 6. Study of parallel connection of conductors",
        "kk": "Зертханалық жұмыс No 6. Өткізгіштердің параллель қосылуын зерттеу"
      },
      "goal": {
        "ru": "Проверить законы параллельного соединения проводников.",
        "en": "Check the laws of parallel connection of conductors.",
        "kk": "Өткізгіштердің параллель қосылу заңдылықтарын тексеру."
      },
      "equipment": {
        "ru": "Источник тока, ключ, провода, три амперметра, два вольтметра, два резистора.",
        "en": "Current source, key, wires, three ammeters, two voltmeters, two resistors.",
        "kk": "Ток көзі, кілт, сымдар, үш амперметр, екі вольтметр, екі резистор."
      },
      "steps": [
        {
          "ru": "Измерьте напряжения на обеих ветвях.",
          "en": "Measure the voltages on both branches.",
          "kk": "Екі тармақтағы кернеулерді өлшеңіз."
        },
        {
          "ru": "Измерьте общий ток и токи в ветвях.",
          "en": "Measure the total current and branch currents.",
          "kk": "Толық ток пен салалық токтарды өлшеңіз."
        },
        {
          "ru": "Рассчитайте сопротивления ветвей и общее сопротивление.",
          "en": "Calculate the branch resistances and the total resistance.",
          "kk": "Тармақ кедергілерін және жалпы кедергіні есептеңіз."
        },
        {
          "ru": "Проверьте все соотношения и сделайте вывод.",
          "en": "Check all the relationships and draw a conclusion.",
          "kk": "Барлық қатынастарды тексеріп, қорытынды жасаңыз."
        }
      ],
      "formulas": [
        {
          "ru": "I = I₁ + I₂",
          "en": "I = I₁ + I₂",
          "kk": "I = I₁ + I₂"
        },
        {
          "ru": "U = U₁ = U₂",
          "en": "U = U₁ = U₂",
          "kk": "U = U₁ = U₂"
        },
        {
          "ru": "1/R = 1/R₁ + 1/R₂",
          "en": "1/R = 1/R₁ + 1/R₂",
          "kk": "1/R = 1/R₁ + 1/R₂"
        },
        {
          "ru": "I₁/I₂ = R₂/R₁",
          "en": "I₁/I₂ = R₂/R₁",
          "kk": "I₁/I₂ = R₂/R₁"
        }
      ],
      "questions": [
        {
          "ru": "Почему напряжение на параллельных ветвях одинаково?",
          "en": "Why is the voltage on parallel branches the same?",
          "kk": "Неліктен параллель тармақтардағы кернеу бірдей?"
        },
        {
          "ru": "Почему общий ток равен сумме токов ветвей?",
          "en": "Why is the total current equal to the sum of the branch currents?",
          "kk": "Неліктен жалпы ток тармақтық токтардың қосындысына тең?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Симулятор Circuit Construction Kit: DC",
            "en": "Simulator Circuit Construction Kit: DC",
            "kk": "Симулятор Circuit Construction Жинақ: тұрақты ток"
          },
          "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc"
        },
        {
          "label": {
            "ru": "Видео лабораторной работы №6",
            "en": "Video of laboratory work No. 6",
            "kk": "No6 зертханалық жұмыстан бейнеролик"
          },
          "url": "https://youtu.be/W1F3ut5CuYI"
        },
        {
          "label": {
            "ru": "Виртуальная лабораторная работа №6",
            "en": "Virtual laboratory work No. 6",
            "kk": "Виртуалды зертханалық жұмыс No6"
          },
          "url": "https://efizika.ru/html5/192/index.html"
        }
      ]
    },
    "lab7": {
      "title": {
        "ru": "Лабораторная работа № 7. Измерение работы и мощности электрического тока",
        "en": "Laboratory work No. 7. Measuring the work and power of electric current",
        "kk": "Зертханалық жұмыс No7. Электр тогының жұмысын және қуатын өлшеу"
      },
      "goal": {
        "ru": "Определить мощность лампы, работу тока и стоимость потреблённой электрической энергии.",
        "en": "Determine the power of the lamp, the work of the current and the cost of consumed electrical energy.",
        "kk": "Шамның қуатын, токтың жұмысын және тұтынылған электр энергиясының құнын анықтаңыз."
      },
      "equipment": {
        "ru": "Источник тока, ключ, провода, лампа, амперметр, вольтметр.",
        "en": "Current source, key, wires, lamp, ammeter, voltmeter.",
        "kk": "Ток көзі, кілт, сымдар, шам, амперметр, вольтметр."
      },
      "steps": [
        {
          "ru": "Соберите цепь и измерьте U и I лампы.",
          "en": "Assemble the circuit and measure U and I bulbs.",
          "kk": "Тізбекті жинап, U  және I  шамдарын өлшеңіз."
        },
        {
          "ru": "Рассчитайте мощность по P = UI.",
          "en": "Calculate power using P = UI.",
          "kk": "P = UI. арқылы қуатты есептеңіз"
        },
        {
          "ru": "Рассчитайте работу за час, сутки и месяц.",
          "en": "Calculate work per hour, day and month.",
          "kk": "Сағат, күн және айдағы жұмысты есептеңіз."
        },
        {
          "ru": "Используйте действующий тариф для оценки стоимости энергии.",
          "en": "Use the current tariff to estimate energy costs.",
          "kk": "Энергия шығындарын бағалау үшін ағымдағы тарифті пайдаланыңыз."
        }
      ],
      "formulas": [
        {
          "ru": "P = UI",
          "en": "P = UI",
          "kk": "P = UI"
        },
        {
          "ru": "A = Pt = UIt",
          "en": "A = Pt = UIt",
          "kk": "A = Pt = UIt"
        },
        {
          "ru": "Стоимость = A·тариф",
          "en": "Cost = A·tariff",
          "kk": "Құны = A·тариф"
        }
      ],
      "questions": [
        {
          "ru": "Почему мощность можно найти по показаниям амперметра и вольтметра?",
          "en": "Why can power be found using ammeter and voltmeter readings?",
          "kk": "Неліктен қуатты амперметр мен вольтметрдің көрсеткіштері арқылы табуға болады?"
        },
        {
          "ru": "В каких единицах бытовой счётчик измеряет энергию?",
          "en": "In what units does a household meter measure energy?",
          "kk": "Тұрмыстық есептегіш энергияны қандай бірліктермен өлшейді?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Виртуальная лабораторная о мощности лампы",
            "en": "Virtual laboratory about lamp power",
            "kk": "Шам қуаты туралы виртуалды зертхана"
          },
          "url": "https://efizika.ru/html5/188/index.html"
        },
        {
          "label": {
            "ru": "Видео лабораторной работы №7",
            "en": "Video of laboratory work No. 7",
            "kk": "No7 зертханалық жұмыстың бейнеролигі"
          },
          "url": "https://youtu.be/1L_jvoTI7m4"
        },
        {
          "label": {
            "ru": "Симулятор Circuit Construction Kit: AC Virtual Lab",
            "en": "Simulator Circuit Construction Kit: AC Virtual Lab",
            "kk": "Симулятор Circuit Construction жинағы: AC Virtual Зертхана"
          },
          "url": "https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac-virtual-lab"
        }
      ]
    },
    "lab8": {
      "title": {
        "ru": "Лабораторная работа № 8. Изучение свойств постоянного магнита и магнитных полей",
        "en": "Laboratory work No. 8. Study of the properties of a permanent magnet and magnetic fields",
        "kk": "Зертханалық жұмыс № 8. Тұрақты магнит пен магнит өрісінің қасиеттерін зерттеу"
      },
      "goal": {
        "ru": "Изучить взаимодействие магнитов с веществами, полюса и силовые линии магнитного поля.",
        "en": "Study the interaction of magnets with substances, poles and magnetic field lines.",
        "kk": "Магниттердің заттармен, полюстермен және магнит өрісінің сызықтарымен әрекеттесуін зерттеу."
      },
      "equipment": {
        "ru": "Полосовые и подковообразный магниты, бумага, железные опилки, магнитная стрелка, мелкие предметы.",
        "en": "Strip and horseshoe magnets, paper, iron filings, magnetic needle, small objects.",
        "kk": "Жолақ және ат магниттері, қағаз, темір үгінділер, магнитті ине, ұсақ заттар."
      },
      "steps": [
        {
          "ru": "Проверьте, какие вещества притягиваются магнитом.",
          "en": "Check what substances are attracted to a magnet.",
          "kk": "Магнитке қандай заттардың тартылатынын тексеріңіз."
        },
        {
          "ru": "Исследуйте взаимодействие одноимённых и разноимённых полюсов.",
          "en": "Explore the interaction of like and unlike poles.",
          "kk": "Ұқсас және ұқсамайтын полюстердің өзара әрекеттесуін зерттеңіз."
        },
        {
          "ru": "Получите рисунки поля полосового и подковообразного магнитов опилками.",
          "en": "Obtain field drawings of bar and horseshoe magnets using sawdust.",
          "kk": "Үгінділерді пайдалана отырып, штанга мен жылқы магниттерінің далалық сызбаларын алыңыз."
        },
        {
          "ru": "Нарисуйте силовые линии и сформулируйте их свойства.",
          "en": "Draw lines of force and state their properties.",
          "kk": "Күш сызықтарын сызыңыз және олардың қасиеттерін айтыңыз."
        }
      ],
      "formulas": [
        {
          "ru": "Снаружи магнита линии идут от N к S",
          "en": "On the outside of the magnet the lines go from N to S",
          "kk": "Магниттің сыртқы жағында сызықтар N -ден S-ке дейін барады."
        }
      ],
      "questions": [
        {
          "ru": "Почему железные опилки выстраиваются вдоль линий поля?",
          "en": "Why do iron filings line up along field lines?",
          "kk": "Неліктен темір үгінділері далалық сызықтар бойымен қатар түзіледі?"
        },
        {
          "ru": "Как различить полюса магнита магнитной стрелкой?",
          "en": "How to distinguish the poles of a magnet using a magnetic needle?",
          "kk": "Магниттік иненің көмегімен магниттің полюстерін қалай ажыратуға болады?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Видео лабораторной работы №8",
            "en": "Video of laboratory work No. 8",
            "kk": "No8 зертханалық жұмыстан бейнеролик"
          },
          "url": "https://youtu.be/j9700mfR43U"
        },
        {
          "label": {
            "ru": "Building a Magnetic Field Simulator",
            "en": "Building a Magnetic Field Simulator",
            "kk": "Building a Magnetic Field симулятор"
          },
          "url": "https://bionichaos.com/Magnets/"
        },
        {
          "label": {
            "ru": "Симулятор Magnet and Compass",
            "en": "Simulator Magnet and Compass",
            "kk": "Симулятор Magnet and Компас"
          },
          "url": "https://phet.colorado.edu/en/simulations/magnet-and-compass"
        },
        {
          "label": {
            "ru": "Симулятор постоянного магнита",
            "en": "Permanent magnet simulator",
            "kk": "Тұрақты магнит симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?f=mag_magnet&l=ru"
        }
      ]
    },
    "lab9": {
      "title": {
        "ru": "Лабораторная работа № 9. Сборка электромагнита и проверка его действия",
        "en": "Laboratory work No. 9. Assembling an electromagnet and checking its action",
        "kk": "Зертханалық жұмыс No 9. Электр магнитті құрастыру және оның әрекетін тексеру"
      },
      "goal": {
        "ru": "Исследовать зависимость действия электромагнита от сердечника и силы тока.",
        "en": "Investigate the dependence of the action of an electromagnet on the core and current strength.",
        "kk": "Электромагнит әрекетінің өзек пен ток күшіне тәуелділігін зерттеңіз."
      },
      "equipment": {
        "ru": "Источник тока, ключ, катушка с сердечником, провода, реостат, магнитные стрелки, железные опилки.",
        "en": "Current source, key, coil with core, wires, rheostat, magnetic needles, iron filings.",
        "kk": "Ток көзі, кілт, өзегі бар катушкалар, сымдар, реостат, магнитті инелер, темір үгінділері."
      },
      "steps": [
        {
          "ru": "Соберите цепь с катушкой и определите её полюса.",
          "en": "Assemble the circuit with the coil and determine its poles.",
          "kk": "Тізбекті ораммен жинап, оның полюстерін анықтаңыз."
        },
        {
          "ru": "Сравните действие катушки без сердечника и с сердечником.",
          "en": "Compare the action of a coil without a core and with a core.",
          "kk": "Өзегі жоқ және өзегі бар катушканың әрекетін салыстырыңыз."
        },
        {
          "ru": "Реостатом изменяйте силу тока и наблюдайте за опилками.",
          "en": "Use a rheostat to change the current and observe the sawdust.",
          "kk": "Токты өзгерту және үгінділерді бақылау үшін реостатты пайдаланыңыз."
        },
        {
          "ru": "Сравните поле электромагнита с полем постоянного магнита.",
          "en": "Compare the field of an electromagnet with the field of a permanent magnet.",
          "kk": "Электромагнит өрісін тұрақты магнит өрісімен салыстырыңыз."
        }
      ],
      "formulas": [
        {
          "ru": "Сила электромагнита возрастает с током и числом витков",
          "en": "The strength of an electromagnet increases with current and number of turns",
          "kk": "Электромагниттің күші ток пен айналым санына қарай артады"
        }
      ],
      "questions": [
        {
          "ru": "Зачем в катушку вставляют железный сердечник?",
          "en": "Why is an iron core inserted into the coil?",
          "kk": "Неліктен орамға темір өзек салынған?"
        },
        {
          "ru": "Как изменить полюса катушки?",
          "en": "How to change the poles of the coil?",
          "kk": "Орамның полюстерін қалай өзгертуге болады?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Видео лабораторной работы №9",
            "en": "Video of laboratory work No. 9",
            "kk": "No9 зертханалық жұмыстың бейнеролигі"
          },
          "url": "https://youtu.be/gqX269SnBwY"
        },
        {
          "label": {
            "ru": "Виртуальная лабораторная работа: электромагнит",
            "en": "Virtual lab: electromagnet",
            "kk": "Виртуалды зертхана: электромагнит"
          },
          "url": "https://efizika.ru/html5/179/index.html"
        },
        {
          "label": {
            "ru": "Симулятор тока в катушке",
            "en": "Coil current simulator",
            "kk": "Катушка ток симуляторы"
          },
          "url": "https://vascak.cz/data/android/physicsatschool/template.php?s=mag_civka&l=ru"
        }
      ]
    },
    "lab10": {
      "title": {
        "ru": "Лабораторная работа № 10. Определение показателя преломления стекла",
        "en": "Laboratory work No. 10. Determination of the refractive index of glass",
        "kk": "Зертханалық жұмыс No10. Шынының сыну көрсеткішін анықтау"
      },
      "goal": {
        "ru": "Определить показатель преломления стекла и сравнить его с табличным значением.",
        "en": "Determine the refractive index of glass and compare it with the table value.",
        "kk": "Шынының сыну көрсеткішін анықтаңыз және оны кестедегі мәнмен салыстырыңыз."
      },
      "equipment": {
        "ru": "Стеклянная плоскопараллельная пластина, четыре булавки, линейка, бумага, транспортир.",
        "en": "Glass plane-parallel plate, four pins, ruler, paper, protractor.",
        "kk": "Шыны жазықтық-параллель пластина, төрт түйреуіш, сызғыш, қағаз, транспортир."
      },
      "steps": [
        {
          "ru": "Обведите пластину и установите две булавки перед ней.",
          "en": "Trace the plate and place two pins in front of it.",
          "kk": "Пластинаны сызып, оның алдына екі түйреуіш қойыңыз."
        },
        {
          "ru": "За пластиной расположите ещё две булавки так, чтобы лучи закрывались.",
          "en": "Place two more pins behind the plate so that the rays are covered.",
          "kk": "Сәулелер жабылатын етіп пластинаның артына тағы екі түйреуіш қойыңыз."
        },
        {
          "ru": "Постройте падающий, преломлённый и вышедший лучи.",
          "en": "Construct the incident, refracted and emerging rays.",
          "kk": "Түскен, сынған және шығатын сәулелерді тұрғызыңыз."
        },
        {
          "ru": "Измерьте α и γ, рассчитайте n и оцените результат.",
          "en": "Measure α and γ, calculate n and evaluate the result.",
          "kk": "α және γ өлшеңіз, n  есептеңіз және нәтижені бағалаңыз."
        }
      ],
      "formulas": [
        {
          "ru": "n = sin α/sin γ",
          "en": "n = sin α/sin γ",
          "kk": "n = sin α/sin γ"
        },
        {
          "ru": "Для стекла n обычно около 1,5",
          "en": "For glass n usually about 1.5",
          "kk": "Шыны үшін n әдетте шамамен 1,5"
        }
      ],
      "questions": [
        {
          "ru": "От какой линии отсчитывают углы падения и преломления?",
          "en": "From which line are the angles of incidence and refraction measured?",
          "kk": "Түсу және сыну бұрыштары қай түзуден өлшенеді?"
        },
        {
          "ru": "Почему после выхода из плоскопараллельной пластины луч параллелен падающему?",
          "en": "Why, after leaving a plane-parallel plate, is the beam parallel to the incident one?",
          "kk": "Неліктен жазықтыққа параллель пластинадан шыққаннан кейін сәуле түскен сәулеге параллель болады?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Виртуальная лабораторная: показатель преломления",
            "en": "Virtual Lab: Refractive Index",
            "kk": "Виртуалды зертхана: сыну көрсеткіші"
          },
          "url": "https://efizika.ru/html5/150/index.html"
        },
        {
          "label": {
            "ru": "Видео лабораторной работы №10",
            "en": "Video of laboratory work No. 10",
            "kk": "No10 зертханалық жұмыстың бейнеролигі"
          },
          "url": "https://youtu.be/5yft2HEM1EM"
        }
      ]
    },
    "lab11": {
      "title": {
        "ru": "Лабораторная работа № 11. Определение фокусного расстояния тонкой линзы",
        "en": "Laboratory work No. 11. Determining the focal length of a thin lens",
        "kk": "Зертханалық жұмыс No 11. Жұқа линзаның фокус аралығын анықтау"
      },
      "goal": {
        "ru": "Определить фокусное расстояние и оптическую силу собирающей линзы несколькими методами.",
        "en": "Determine the focal length and optical power of a converging lens using several methods.",
        "kk": "Бірнеше әдістерді қолданып жинақталатын линзаның фокустық қашықтығы мен оптикалық қуатын анықтаңыз."
      },
      "equipment": {
        "ru": "Собирающая линза, экран, измерительная лента, источник света, лампа.",
        "en": "Converging lens, screen, measuring tape, light source, lamp.",
        "kk": "Жинақтаушы линза, экран, өлшегіш лента, жарық көзі, шам."
      },
      "steps": [
        {
          "ru": "Получите на экране резкое изображение удалённого окна и измерьте F.",
          "en": "Obtain a sharp image of the distant window on the screen and measure F.",
          "kk": "Экранда қашықтағы терезенің анық бейнесін алыңыз және F өлшеңіз."
        },
        {
          "ru": "Разместите лампу, линзу и экран, измерьте d и f.",
          "en": "Place the lamp, lens and screen, measure d and f.",
          "kk": "Шамды, линзаны және экранды орналастырыңыз, d және f өлшеңіз."
        },
        {
          "ru": "Рассчитайте F по формуле тонкой линзы и D = 1/F.",
          "en": "Calculate F using the thin lens formula and D = 1/F.",
          "kk": "F жұқа линза формуласын және D = 1/F. арқылы есептеңіз"
        },
        {
          "ru": "Получите изображение равного размера и сравните три метода.",
          "en": "Get an image of equal size and compare the three methods.",
          "kk": "Бірдей өлшемдегі суретті алыңыз және үш әдісті салыстырыңыз."
        }
      ],
      "formulas": [
        {
          "ru": "D = 1/F",
          "en": "D = 1/F",
          "kk": "D = 1/F"
        },
        {
          "ru": "1/F = 1/d + 1/f",
          "en": "1/F = 1/d + 1/f",
          "kk": "1/F = 1/d + 1/f"
        },
        {
          "ru": "При равном изображении d = f = 2F",
          "en": "With equal image d = f = 2F",
          "kk": "Бірдей кескінмен d = f = 2F"
        }
      ],
      "questions": [
        {
          "ru": "Почему изображение далёкого окна формируется около фокуса?",
          "en": "Why does the image of a distant window form near the focus?",
          "kk": "Неліктен фокустың жанында алыстағы терезенің бейнесі пайда болады?"
        },
        {
          "ru": "В каких единицах нужно брать F для расчёта D в диоптриях?",
          "en": "In what units should you take F to calculate D in diopters?",
          "kk": "F диоптрлерде D  есептеу үшін қандай бірліктерде алу керек?"
        }
      ],
      "links": [
        {
          "label": {
            "ru": "Видео лабораторной работы №11",
            "en": "Video of laboratory work No. 11",
            "kk": "No11 зертханалық жұмыстың бейнеролигі"
          },
          "url": "https://youtu.be/XjJwHgIfHlM"
        },
        {
          "label": {
            "ru": "Thin Lens Equation Simulation",
            "en": "Thin Lens Equation Simulation",
            "kk": "Thin Lens Equation Simulation"
          },
          "url": "https://www.geogebra.org/m/YDMFRFjb"
        },
        {
          "label": {
            "ru": "Симулятор изображений в тонкой линзе",
            "en": "Thin Lens Imaging Simulator",
            "kk": "Жұқа линзаларды бейнелеу симуляторы"
          },
          "url": "https://light-fizika.ru/index.php/11-klass/8-fizika/302-simulyator-izobrazhenij-v-tonkoj-linze"
        }
      ]
    }
  }
};
const CONSPECT = {
  "p1": {
    "title": "§1. Тепловое движение, броуновское движение, диффузия",
    "titleEn": "§1. Thermal motion, Brownian motion, diffusion",
    "titleKk": "§1. Жылулық қозғалыс, броундық қозғалыс, диффузия",
    "ru": "## Основные идеи\n• Все вещества состоят из частиц, которые непрерывно и беспорядочно движутся. Это движение называют тепловым.\n• Броуновское движение — беспорядочное движение видимых частиц, взвешенных в жидкости или газе, под ударами молекул.\n• Диффузия — взаимное проникновение частиц одного вещества между частицами другого.\n## Важно\n• С повышением температуры частицы движутся быстрее, поэтому диффузия идёт интенсивнее.\n• Броуновское движение и диффузия подтверждают молекулярно-кинетическое строение вещества.",
    "en": "## Main ideas\n• All matter is made up of particles that move continuously and randomly. This movement is called thermal.\n• Brownian motion is the random movement of visible particles suspended in a liquid or gas under the impacts of molecules.\n• Diffusion is the mutual penetration of particles of one substance between particles of another.\n## Important\n• As temperature increases, particles move faster, so diffusion occurs more intensely.\n• Brownian motion and diffusion confirm the molecular kinetic structure of matter.",
    "kk": "## Негізгі идеялар\n• Барлық заттар үздіксіз және ретсіз қозғалатын бөлшектерден тұрады. Бұл қозғалыс термиялық деп аталады.\n• Броундық қозғалыс – молекулалардың әсерінен сұйықтықта немесе газда ілінген көрінетін бөлшектердің кездейсоқ қозғалысы.\n• Диффузия – бір заттың бөлшектерінің екінші заттың бөлшектерінің арасына өзара енуі.\n## Маңызды\n• Температура жоғарылаған сайын бөлшектер жылдамырақ қозғалады, сондықтан диффузия қарқынды жүреді.\n• Броундық қозғалыс пен диффузия заттың молекулалық-кинетикалық құрылымын растайды."
  },
  "p2": {
    "title": "§2. Температура, способы её измерения, температурные шкалы",
    "titleEn": "§2. Temperature, methods of measurement, temperature scales",
    "titleKk": "§2. Температура, өлшеу әдістері, температура шкалалары",
    "ru": "## Температура\n• Температура характеризует степень нагретости тела и связана со средней кинетической энергией хаотического движения его частиц.\n• Термометр измеряет температуру благодаря тепловому равновесию и свойству вещества изменяться при нагревании.\n## Температурные шкалы\n• В шкале Цельсия лёд плавится при 0 °C, вода кипит при 100 °C при нормальном давлении.\n• В шкале Кельвина абсолютный ноль равен 0 K = −273 °C; связь: T = t + 273.\n## Важно\n• Ощущения не дают надёжного измерения температуры: для сравнения используют прибор и одинаковые условия.",
    "en": "## Temperature\n• Temperature characterizes the degree of heating of a body and is associated with the average kinetic energy of the chaotic movement of its particles.\n• A thermometer measures temperature due to thermal equilibrium and the property of a substance to change when heated.\n## Temperature scales\n• In the Celsius scale, ice melts at 0 °C, water boils at 100 °C at normal pressure.\n• In the Kelvin scale, absolute zero is 0 K = −273 °C; connection: T = t + 273.\n## Important\n• Sensations do not provide a reliable measurement of temperature: for comparison, use a device and the same conditions.",
    "kk": "## Температура\n• Температура дененің қызу дәрежесін сипаттайды және оның бөлшектерінің ретсіз қозғалысының орташа кинетикалық энергиясымен байланысты.\n• Термометр жылулық тепе-теңдікке байланысты температураны және қыздырылған кезде заттың өзгеретін қасиетін өлшейді.\n## Температура шкалалары\n• Цельсий шкаласында мұз 0 °C температурада ериді, су 100 °C қалыпты қысымда қайнайды.\n• Кельвин шкаласында абсолютті нөл 0 K = −273 °C; қосылым: T = t + 273.\n## Маңызды\n• Сезімдер температураны сенімді өлшеуді қамтамасыз етпейді: салыстыру үшін құрылғыны және бірдей шарттарды пайдаланыңыз."
  },
  "p3": {
    "title": "§3. Внутренняя энергия. Способы изменения внутренней энергии",
    "titleEn": "§3. Internal energy. Ways of changing internal energy",
    "titleKk": "§3. Ішкі энергия. Ішкі энергияны өзгерту тәсілдері",
    "ru": "## Внутренняя энергия\n• Внутренняя энергия U — сумма кинетической энергии беспорядочного движения частиц и потенциальной энергии их взаимодействия.\n• Внутренняя энергия зависит от температуры, массы и состояния вещества, но не от движения тела как целого.\n## Как изменить внутреннюю энергию\n• Теплопередачей: энергия переходит от более нагретого тела к менее нагретому.\n• Совершением работы: при трении, деформации и сжатии газ нагревается; при расширении газ может охлаждаться.\n> ΔU = Q + A′\n• Здесь Q — теплота, полученная телом, A′ — работа внешних сил.",
    "en": "## Internal energy\n• Internal energy U is the sum of the kinetic energy of the random motion of particles and the potential energy of their interaction.\n• Internal energy depends on the temperature, mass and state of the substance, but not on the movement of the body as a whole.\n## How to change internal energy\n• Heat transfer: energy moves from a more heated body to a less heated one.\n• By performing work: during friction, deformation and compression, the gas heats up; As the gas expands, it can cool.\n> ΔU = Q + A′\n• Here Q is the heat received by the body, A′ is the work of external forces.",
    "kk": "## Ішкі энергия\n• Ішкі энергия U - бөлшектердің кездейсоқ қозғалысының кинетикалық энергиясы мен олардың өзара әрекеттесуінің потенциалдық энергиясының қосындысы.\n• Ішкі энергия заттың температурасына, массасына және күйіне байланысты, бірақ жалпы дененің қозғалысына байланысты емес.\n## Ішкі энергияны қалай өзгертуге болады\n• Жылу алмасу: энергия қызған денеден азырақ қызған денеге ауысады.\n• Жұмысты орындау арқылы: үйкеліс, деформация және қысу кезінде газ қызады; Газ кеңейген кезде ол салқындатуы мүмкін.\n> ΔU = Q + A′\n• Мұндағы Q – дене қабылдаған жылу, A′ – сыртқы күштердің жұмысы."
  },
  "p4": {
    "title": "§4. Теплопроводность, конвекция, излучение",
    "titleEn": "§4. Thermal conduction, convection, radiation",
    "titleKk": "§4. Жылуөткізгіштік, конвекция, сәуле шығару",
    "ru": "## Три способа теплопередачи\n• Теплопроводность — передача энергии от более нагретых частиц к соседним без переноса вещества. Особенно характерна для твёрдых тел.\n• Конвекция — перенос энергии потоками жидкости или газа; бывает естественной и вынужденной.\n• Излучение — перенос энергии электромагнитными волнами; возможно в вакууме.\n## Примеры\n• Металлическая ложка в горячем чае нагревается теплопроводностью.\n• Движение тёплого воздуха — конвекция.\n• Солнце нагревает Землю излучением.",
    "en": "## Three ways of heat transfer\n• Thermal conduction is the transfer of energy from hotter particles to neighboring ones without transfer of matter. Particularly characteristic of solids.\n• Convection - transfer of energy by flows of liquid or gas; can be natural or forced.\n• Radiation - transfer of energy by electromagnetic waves; perhaps in a vacuum.\n## Examples\n• A metal spoon in hot tea is heated by conduction.\n• The movement of warm air is convection.\n• The Sun heats the Earth with radiation.",
    "kk": "## Жылу берудің үш жолы\n• Жылуөткізгіштік - энергияның ыстық бөлшектерден көршілерге затты тасымалдамай өтуі. Әсіресе қатты заттарға тән.\n• Конвекция – энергияның сұйық немесе газ ағындары арқылы берілуі; табиғи немесе мәжбүрлі болуы мүмкін.\n• Радиация – энергияның электромагниттік толқындар арқылы берілуі; мүмкін вакуумда.\n## Мысалдар\n• Ыстық шайдағы металл қасық өткізгіштік арқылы қыздырылады.\n• Жылы ауаның қозғалысы конвекция болып табылады.\n• Күн Жерді радиациямен қыздырады."
  },
  "p5": {
    "title": "§5. Теплопередача в природе и технике",
    "titleEn": "§5. Heat transfer in nature and technology",
    "titleKk": "§5. Табиғаттағы және техникадағы жылу берілу",
    "ru": "## Теплопередача в природе и технике\n• Неравномерное нагревание поверхности Земли вызывает конвекционные потоки воздуха, ветер и перемещение воздушных масс.\n• Морские и дневные бризы связаны с разной скоростью нагревания суши и воды.\n• Теплоизоляция уменьшает нежелательную теплопередачу; её используют в термосах, стенах зданий, одежде.\n• Теплопередача применяется в отоплении, холодильных установках, теплообменниках и при приготовлении пищи.",
    "en": "## Heat transfer in nature and technology\n• Uneven heating of the Earth's surface causes convection currents of air, wind and movement of air masses.\n• Sea and daytime breezes are associated with different rates of warming of land and water.\n• Thermal insulation reduces unwanted heat transfer; It is used in thermoses, building walls, and clothing.\n• Heat transfer is used in heating, refrigeration, heat exchangers and food preparation.",
    "kk": "## Табиғаттағы және техникадағы жылу алмасу\n• Жер бетінің біркелкі қызуы ауаның, желдің конвекциялық ағындарын және ауа массаларының қозғалысын тудырады.\n• Теңіз және күндізгі желдер жер мен судың әр түрлі жылыну жылдамдығымен байланысты.\n• Жылу оқшаулау қажетсіз жылу беруді азайтады; Ол термостарда, құрылыс қабырғаларында және киімдерде қолданылады.\n• Жылу беру жылытуда, тоңазытқышта, жылу алмастырғыштарда және тағам дайындауда қолданылады."
  },
  "p6": {
    "title": "§6. Роль тепловых явлений в жизни живых организмов",
    "titleEn": "§6. The role of thermal phenomena in the life of living organisms",
    "titleKk": "§6. Тірі ағзалар өміріндегі жылулық құбылыстардың рөлі",
    "ru": "## Живые организмы и тепло\n• Температура окружающей среды влияет на скорость процессов жизнедеятельности.\n• Теплокровные животные поддерживают температуру тела с помощью терморегуляции; холоднокровные сильнее зависят от среды.\n• Шерсть, мех, перья и жировой слой уменьшают теплопотери, потому что удерживают слой воздуха.\n• Испарение пота отводит энергию и охлаждает тело; дрожь увеличивает теплопродукцию.",
    "en": "## Living organisms and heat\n• Ambient temperature affects the speed of vital processes.\n• Warm-blooded animals maintain body temperature through thermoregulation; Cold-blooded animals are more dependent on their environment.\n• Wool, fur, feathers and fat reduce heat loss because they retain a layer of air.\n• Evaporation of sweat removes energy and cools the body; shivering increases heat production.",
    "kk": "## Тірі организмдер және жылу\n• Қоршаған ортаның температурасы өмірлік маңызды процестердің жылдамдығына әсер етеді.\n• Жылы қанды жануарлар дене температурасын терморегуляция арқылы сақтайды; Суық қанды жануарлар қоршаған ортаға көбірек тәуелді.\n• Жүн, жүн, қауырсын және май жылу шығынын азайтады, өйткені олар ауа қабатын сақтайды.\n• Тердің булануы энергияны алып, денені салқындатады; қалтырау жылу өндіруді арттырады."
  },
  "p7": {
    "title": "§7. Количество теплоты, удельная теплоёмкость вещества",
    "titleEn": "§7. Quantity of heat, specific heat capacity of a substance",
    "titleKk": "§7. Жылу мөлшері, заттың меншікті жылу сыйымдылығы",
    "ru": "## Количество теплоты\n• Количество теплоты Q — энергия, полученная или отданная телом при теплопередаче.\n> Q = cmΔt\n• c — удельная теплоёмкость, m — масса, Δt — изменение температуры.\n• Удельная теплоёмкость показывает, сколько теплоты нужно передать 1 кг вещества для нагревания на 1 °C; единица — Дж/(кг·°C).\n• При охлаждении тело отдаёт такое же по модулю количество теплоты, но Δt берут со знаком процесса.",
    "en": "## Amount of heat\n• Amount of heat Q - energy received or given off by a body during heat transfer.\n> Q = cmΔt\n• c - specific heat capacity, m - mass, Δt - temperature change.\n• Specific heat capacity shows how much heat must be transferred 1 kg from a substance to heat it to 1 °C; unit - J/(kg·°C).\n• When cooling, the body gives off the same amount of heat in modulus, but Δt is taken with the sign of the process.",
    "kk": "## Жылу мөлшері\n• Жылу мөлшері Q - жылу беру кезінде дене алатын немесе бөлетін энергия.\n> Q = cmΔt\n• c - меншікті жылу сыйымдылығы, m - масса, Δt - температураның өзгеруі.\n• Меншікті жылу сыйымдылығы затты 1 °C дейін қыздыру үшін оны 1 кг қанша жылу беру керектігін көрсетеді; бірлік - Дж/(кг·°C).\n• Салқындату кезінде дене модуль бойынша бірдей жылу мөлшерін береді, бірақ Δt процестің белгісімен алынады."
  },
  "p8": {
    "title": "§8. Энергия топлива, удельная теплота сгорания топлива",
    "titleEn": "§8. Fuel energy, specific heat of combustion",
    "titleKk": "§8. Отын энергиясы, отынның меншікті жану жылуы",
    "ru": "## Энергия топлива\n• При сгорании топлива химическая энергия превращается главным образом во внутреннюю энергию продуктов сгорания и нагреваемых тел.\n• Удельная теплота сгорания q показывает, сколько теплоты выделяется при полном сгорании 1 кг топлива.\n> Q = qm\n• q измеряют в Дж/кг. К органическому топливу относят дрова, торф, уголь, нефть и природный газ.\n• Реальная полезная энергия меньше выделившейся из-за потерь в окружающую среду.",
    "en": "## Fuel energy\n• During the combustion of fuel, chemical energy is converted mainly into internal energy of combustion products and heated bodies.\n• Specific heat of combustion q shows how much heat is released during complete combustion 1 kg of fuel.\n> Q = qm\n• q is measured in J/kg. K organic fuels include firewood, peat, coal, oil and natural gas.\n• Real useful energy is less than that released due to losses to the environment.",
    "kk": "## Отын энергиясы\n• Отынның жануы кезінде химиялық энергия негізінен жану өнімдері мен қызған денелердің ішкі энергиясына айналады.\n• Меншікті жану жылуы q отынның 1 кг толық жануы кезінде қанша жылу бөлетінін көрсетеді.\n> Q = qm\n• q Дж/кг арқылы өлшенеді. К органикалық отындарға отын, шымтезек, көмір, мұнай және табиғи газ жатады.\n• Нақты пайдалы энергия қоршаған ортаға шығынға байланысты бөлінетін энергиядан аз."
  },
  "p9": {
    "title": "§9. Закон сохранения и превращения энергии в тепловых процессах",
    "titleEn": "§9. Law of conservation and transformation of energy in thermal processes",
    "titleKk": "§9. Жылу процестеріндегі энергияның сақталу және түрлену заңы",
    "ru": "## Закон сохранения энергии\n• Энергия не возникает из ничего и не исчезает, а переходит из одного вида в другой и передаётся от одного тела к другому.\n• В теплоизолированной системе суммарное количество теплоты равно нулю: полученная теплота равна отданной.\n> Q₁ + Q₂ + … = 0\n• При трении механическая энергия переходит во внутреннюю; при нагревании электрическим током энергия тока превращается в тепловую.",
    "en": "## Law of Conservation of Energy\n• Energy does not arise from nothing and does not disappear, but passes from one type to another and is transferred from one body to another.\n• In a thermally insulated system, the total amount of heat is zero: the heat received is equal to the heat given off.\n> Q₁ + Q₂ + … = 0\n• During friction, mechanical energy turns into internal energy; When heated by an electric current, the energy of the current is converted into heat.",
    "kk": "## Энергияның сақталу заңы\n• Энергия жоқтан пайда болмайды және жойылмайды, бір түрден екінші түрге өтіп, бір денеден екінші денеге ауысады.\n• Жылу оқшауланған жүйеде жылудың жалпы мөлшері нөлге тең: алынған жылу бөлінген жылуға тең.\n> Q₁ + Q₂ + … = 0\n• Үйкеліс кезінде механикалық энергия ішкі энергияға айналады; Электр тогы арқылы қыздырғанда ток энергиясы жылуға айналады."
  },
  "p10": {
    "title": "§10. Плавление и кристаллизация твердых тел, температура плавления, удельная теплота плавления",
    "titleEn": "§10. Melting and crystallization of solids, melting temperature, specific latent heat of fusion",
    "titleKk": "§10. Қатты денелердің балқуы мен кристалдануы, балқу температурасы, меншікті балқу жылуы",
    "ru": "## Плавление и кристаллизация\n• Плавление — переход кристаллического тела из твёрдого состояния в жидкое; кристаллизация (отвердевание) — обратный процесс.\n• У кристаллического тела во время плавления температура постоянна и равна температуре плавления.\n• Аморфные тела не имеют определённой температуры плавления: размягчение происходит постепенно.\n> Q = λm\n• λ — удельная теплота плавления, то есть теплота для плавления 1 кг вещества при температуре плавления.",
    "en": "## Melting and crystallization\n• Melting is the transition of a crystalline body from a solid to a liquid state; crystallization (hardening) is the reverse process.\n• During melting, the temperature of a crystalline body is constant and equal to the melting point.\n• Amorphous bodies do not have a specific melting point: softening occurs gradually.\n> Q = λm\n• λ is the specific heat of fusion, that is, the heat for melting 1 kg of a substance at its melting point.",
    "kk": "## Балқу және кристалдану\n• Балқу – кристалдық дененің қатты күйден сұйық күйге ауысуы; кристалдану (қатайту) кері процесс.\n• Балқу кезінде кристалдық дененің температурасы тұрақты және балқу температурасына тең.\n• Аморфты денелердің белгілі бір балқу температурасы болмайды: жұмсарту біртіндеп жүреді.\n> Q = λm\n• λ - балқудың меншікті жылуы, яғни балқу температурасындағы заттың 1 кг балқу жылуы."
  },
  "p11": {
    "title": "§11. Парообразование и конденсация",
    "titleEn": "§11. Vaporization and condensation",
    "titleKk": "§11. Булану және конденсация",
    "ru": "## Парообразование\n• Парообразование — переход жидкости в газ; испарение происходит с поверхности при любой температуре, кипение — во всём объёме при определённой температуре.\n• Конденсация — переход пара в жидкость; при конденсации выделяется теплота.\n• Испарение ускоряется при повышении температуры, увеличении площади поверхности, движении воздуха и уменьшении влажности.\n• При одинаковых условиях разные жидкости испаряются с разной скоростью.",
    "en": "## Vaporization\n• Vaporization - transition of liquid into gas; evaporation occurs from the surface at any temperature, boiling occurs throughout the entire volume at a certain temperature.\n• Condensation - transition of vapor into liquid; Condensation releases heat.\n• Evaporation accelerates as temperature rises, surface area increases, air movement increases, and humidity decreases.\n• Under the same conditions, different liquids evaporate at different rates.",
    "kk": "## Булану\n• Вапоризация – сұйықтың газға ауысуы; булану кез келген температурада бетінен жүреді, қайнау белгілі бір температурада бүкіл көлемде жүреді.\n• Конденсация – будың сұйықтыққа ауысуы; Конденсация жылуды шығарады.\n• Температура көтеріліп, бетінің ауданы ұлғайып, ауа қозғалысы артып, ылғалдылық азайған сайын булану жылдамдайды.\n• Бірдей жағдайда әртүрлі сұйықтықтар әртүрлі жылдамдықпен буланады."
  },
  "p12": {
    "title": "§12. Кипение, удельная теплота парообразования. Зависимость температуры кипения от внешнего давления",
    "titleEn": "§12. Boiling, specific latent heat of vaporization. Dependence of boiling temperature on external pressure",
    "titleKk": "§12. Қайнау, меншікті булану жылуы. Қайнау температурасының сыртқы қысымға тәуелділігі",
    "ru": "## Кипение\n• Кипение — интенсивное парообразование по всему объёму жидкости с образованием и ростом пузырьков пара.\n• При постоянном внешнем давлении температура кипения во время процесса не меняется.\n• Повышение давления повышает температуру кипения; понижение давления её уменьшает.\n> Q = Lm\n• L — удельная теплота парообразования, теплота для превращения 1 кг жидкости в пар при температуре кипения.",
    "en": "## Boiling\n• Boiling is intense vaporization throughout the entire volume of liquid with the formation and growth of vapor bubbles.\n• At constant external pressure, the boiling point does not change during the process.\n• Increasing the pressure increases the boiling point; lowering the pressure reduces it.\n> Q = Lm\n• L is the specific heat of vaporization, the heat for converting 1 kg liquid into vapor at the boiling point.",
    "kk": "## Қайнау\n• Қайнау – сұйықтықтың бүкіл көлемінде бу көпіршіктерінің пайда болуымен және өсуімен қарқынды булану.\n• Тұрақты сыртқы қысымда процесс кезінде қайнау температурасы өзгермейді.\n• Қысымды жоғарылату қайнау температурасын арттырады; қысымды төмендету оны төмендетеді.\n> Q = Lm\n• L – буланудың меншікті жылуы, қайнау температурасында 1 кг сұйықты буға айналдыруға арналған жылу."
  },
  "p13": {
    "title": "§13. Первый закон термодинамики, работа газа и пара",
    "titleEn": "§13. First law of thermodynamics, work of gas and vapor",
    "titleKk": "§13. Термодинамиканың бірінші заңы, газ бен будың жұмысы",
    "ru": "## Первый закон термодинамики\n• Внутренняя энергия изменяется двумя способами: теплопередачей и совершением работы.\n> ΔU = Q + A′\n• Если газ получает теплоту и расширяется, часть энергии идёт на работу газа; если над газом совершают работу, его внутренняя энергия может увеличиться.\n• Работа газа при расширении связана с перемещением поршня и действием давления.",
    "en": "## First law of thermodynamics\n• Internal energy changes in two ways: heat transfer and work.\n> ΔU = Q + A′\n• If the gas receives heat and expands, part of the energy goes to work the gas; If work is done on a gas, its internal energy can increase.\n• The work of gas during expansion is associated with the movement of the piston and the action of pressure.",
    "kk": "## Термодинамиканың бірінші заңы\n• Ішкі энергия екі жолмен өзгереді: жылу алмасу және жұмыс.\n> ΔU = Q + A′\n• Егер газ жылуды қабылдап, кеңейсе, энергияның бір бөлігі газдың жұмысына кетеді; Егер газда жұмыс жасалса, оның ішкі энергиясы артуы мүмкін.\n• Кеңейту кезіндегі газдың жұмысы поршень қозғалысымен және қысымның әрекетімен байланысты."
  },
  "p14": {
    "title": "§14. Необратимость тепловых процессов, второй закон термодинамики",
    "titleEn": "§14. Irreversibility of thermal processes, second law of thermodynamics",
    "titleKk": "§14. Жылу процестерінің қайтымсыздығы, термодинамиканың екінші заңы",
    "ru": "## Необратимость\n• Самопроизвольно теплота переходит от более горячего тела к более холодному, но не наоборот.\n• Механическая энергия при трении превращается во внутреннюю; обратное превращение без других изменений само собой не происходит.\n• Такие процессы называют необратимыми.\n## Второй закон термодинамики\n• Он задаёт направление протекания тепловых процессов и объясняет невозможность полностью превратить теплоту в работу в циклической машине.",
    "en": "## Irreversibility\n• Heat spontaneously transfers from a hotter body to a colder one, but not vice versa.\n• Mechanical energy during friction is converted into internal energy; the reverse transformation without other changes does not occur by itself.\n• Such processes are called irreversible.\n## Second law of thermodynamics\n• It sets the direction of thermal processes and explains the impossibility of completely converting heat into work in a cyclic machine.",
    "kk": "## Қайтымсыздық\n• Жылу ыстық денеден суық денеге өздігінен өтеді, бірақ керісінше емес.\n• Үйкеліс кезіндегі механикалық энергия ішкі энергияға айналады; басқа өзгерістерсіз кері түрлендіру өздігінен болмайды.\n• Мұндай процестер қайтымсыз деп аталады.\n## Термодинамиканың екінші заңы\n• Ол жылу процестерінің бағытын белгілейді және циклдік машинада жылуды толығымен жұмысқа айналдыру мүмкін еместігін түсіндіреді."
  },
  "p15": {
    "title": "§15. Тепловые двигатели",
    "titleEn": "§15. Heat engines",
    "titleKk": "§15. Жылу машиналары",
    "ru": "## Тепловой двигатель\n• Тепловой двигатель превращает часть внутренней энергии рабочего тела в механическую работу.\n• Основные части: нагреватель, рабочее тело и холодильник.\n• Рабочее тело получает теплоту от нагревателя, расширяется и совершает работу, затем отдаёт часть энергии холодильнику.\n• Примеры: паровая турбина, двигатель внутреннего сгорания, реактивный двигатель.",
    "en": "## Heat engine\n• A heat engine converts part of the internal energy of the working fluid into mechanical work.\n• Main parts: heater, working fluid and refrigerator.\n• The working fluid receives heat from the heater, expands and does work, then transfers part of the energy to the refrigerator.\n• Examples: steam turbine, internal combustion engine, jet engine.",
    "kk": "## Жылу қозғалтқышы\n• Жылу қозғалтқышы жұмыс сұйықтығының ішкі энергиясының бір бөлігін механикалық жұмысқа түрлендіреді.\n• Негізгі бөліктер: жылытқыш, жұмыс сұйықтығы және тоңазытқыш.\n• Жұмыс сұйықтығы қыздырғыштан жылу алады, кеңейеді және жұмыс істейді, содан кейін энергияның бір бөлігін тоңазытқышқа береді.\n• Мысалдар: бу турбинасы, іштен жанатын қозғалтқыш, реактивті қозғалтқыш."
  },
  "p16": {
    "title": "§16. Коэффициент полезного действия теплового двигателя",
    "titleEn": "§16. Efficiency of a heat engine",
    "titleKk": "§16. Жылу машинасының пайдалы әсер коэффициенті",
    "ru": "## Коэффициент полезного действия\n• Нагреватель передаёт рабочему телу Q₁, холодильнику отдаётся Q₂, а полезная работа равна A = Q₁ − Q₂.\n> η = A/Q₁ = (Q₁ − Q₂)/Q₁\n• КПД показывает, какая доля энергии нагревателя превращена в полезную работу; его выражают долей или процентами.\n• Для любого реального двигателя η < 1 (меньше 100%).",
    "en": "## Efficiency\n• The heater transfers Q₁ to the working fluid, Q₂ is transferred to the refrigerator, and the useful work is A = Q₁ − Q₂.\n> η = A/Q₁ = (Q₁ − Q₂)/Q₁\n• Efficiency shows what fraction of the heater's energy is converted into useful work; it is expressed as shares or percentages.\n• For any real engine η < 1 (is less than 100%).",
    "kk": "## Тиімділік\n• Қыздырғыш Q₁ жұмыс сұйықтығына, Q₂ тоңазытқышқа тасымалданады, ал пайдалы жұмыс A = Q₁ − Q₂.\n> η = A/Q₁ = (Q₁ − Q₂)/Q₁\n• Тиімділік қыздырғыш энергиясының қандай бөлігі пайдалы жұмысқа түрленетінін көрсетеді; ол үлеспен немесе пайызбен көрсетіледі.\n• Кез келген нақты қозғалтқыш үшін η < 1 ( 100% мәнінен аз)."
  },
  "p17": {
    "title": "§17. Экологические проблемы использования тепловых машин",
    "titleEn": "§17. Environmental problems caused by heat engines",
    "titleKk": "§17. Жылу машиналарын пайдаланудың экологиялық мәселелері",
    "ru": "## Воздействие тепловых машин\n• Сжигание топлива сопровождается выбросами углекислого газа, оксидов азота, сажи и других веществ.\n• Последствия: загрязнение воздуха и воды, усиление парникового эффекта, кислотные дожди, изменение климата.\n• Уменьшить вред помогают очистка выбросов, экономия топлива, повышение КПД и переход к возобновляемым источникам энергии.\n• Экологичность машины оценивают не только по мощности, но и по расходу топлива и составу выбросов.",
    "en": "## Impact of heat engines\n• Combustion of fuel is accompanied by emissions of carbon dioxide, nitrogen oxides, soot and other substances.\n• Consequences: air and water pollution, increased greenhouse effect, acid rain, climate change.\n• Cleaning up emissions, saving fuel, increasing efficiency and switching to renewable energy sources can help reduce harm.\n• The environmental friendliness of a car is assessed not only by power, but also by fuel consumption and emissions.",
    "kk": "## Жылу қозғалтқыштарының әсері\n• Отынның жануы көмірқышқыл газының, азот оксидтерінің, күйенің және басқа заттардың шығарындыларымен бірге жүреді.\n• Салдары: ауа мен судың ластануы, парниктік әсердің күшеюі, қышқыл жаңбырлар, климаттың өзгеруі.\n• Шығарындыларды тазалау, отынды үнемдеу, тиімділікті арттыру және жаңартылатын энергия көздеріне ауысу зиянды азайтуға көмектеседі.\n• Автокөліктің қоршаған ортаға зиянсыздығы тек қуатпен ғана емес, сонымен қатар жанармай шығыны мен шығарындыларымен де бағаланады."
  },
  "p18": {
    "title": "§18. Электрический заряд, электризация тел, проводники и диэлектрики",
    "titleEn": "§18. Electric charge, electrification of bodies, conductors and dielectrics",
    "titleKk": "§18. Электр заряды, денелердің электрленуі, өткізгіштер және диэлектриктер",
    "ru": "## Электрический заряд\n• Электрический заряд бывает положительным и отрицательным; одноимённые заряды отталкиваются, разноимённые притягиваются.\n• Электризация — приобретение телом заряда при соприкосновении, трении или влиянии.\n• В металлах есть свободные электроны — проводники; в диэлектриках свободных зарядов мало, поэтому они проводят ток плохо.\n• При электризации заряд не создаётся из ничего: происходит переход или перераспределение электронов.",
    "en": "## Electric charge\n• Electric charge can be positive or negative; Like charges repel, unlike charges attract.\n• Electrification is the acquisition of a charge by the body through contact, friction or influence.\n• Metals have free electrons - conductors; There are few free charges in dielectrics, so they conduct current poorly.\n• During electrification, a charge is not created out of nothing: a transition or redistribution of electrons occurs.",
    "kk": "## Электр заряды\n• Электр заряды оң немесе теріс болуы мүмкін; Зарядтар итермелейді, ал зарядтар тартады.\n• Электрлендіру – дененің жанасу, үйкеліс немесе әсер ету арқылы заряд алуы.\n• Металдарда бос электрондар – өткізгіштер болады; Диэлектриктерде бос зарядтар аз, сондықтан олар токты нашар өткізеді.\n• Электрлендіру кезінде заряд жоқтан пайда болмайды: электрондардың ауысуы немесе қайта бөлінуі жүреді."
  },
  "p19": {
    "title": "§19. Закон сохранения электрического заряда, взаимодействие неподвижных зарядов, закон Кулона, элементарный заряд",
    "titleEn": "§19. Conservation of electric charge, interaction of stationary charges, Coulomb's law, elementary charge",
    "titleKk": "§19. Электр зарядының сақталу заңы, тыныштықтағы зарядтардың өзара әсері, Кулон заңы, элементар заряд",
    "ru": "## Закон сохранения заряда и закон Кулона\n• Алгебраическая сумма зарядов замкнутой системы сохраняется.\n> F = k|q₁q₂|/r²\n• Сила взаимодействия точечных неподвижных зарядов прямо пропорциональна произведению модулей зарядов и обратно пропорциональна квадрату расстояния.\n• Элементарный заряд e = 1,6·10⁻¹⁹ Кл; заряд электрона −e, протона +e.\n• Закон Кулона применяют в вакууме и с учётом свойств среды.",
    "en": "## Law of conservation of charge and Coulomb's law\n• The algebraic sum of the charges of a closed system is conserved.\n> F = k|q₁q₂|/r²\n• The force of interaction between stationary point charges is directly proportional to the product of the charge moduli and inversely proportional to the square of the distance.\n• Elementary charge e = 1.6·10⁻¹⁹ C; charge of electron −e, proton +e.\n• Coulomb's law is applied in a vacuum and taking into account the properties of the medium.",
    "kk": "## Зарядтың сақталу заңы және Кулон заңы\n• Тұйық жүйе зарядтарының алгебралық қосындысы сақталады.\n> F = k|q₁q₂|/r²\n• Қозғалмайтын нүктелік зарядтардың өзара әрекеттесу күші заряд модулдерінің көбейтіндісіне тура пропорционал және қашықтықтың квадратына кері пропорционал.\n• Элементар заряд e = 1,6·10⁻¹⁹ Кл; электрон заряды −e, протон +e.\n• Кулон заңы вакуумда және ортаның қасиеттерін ескере отырып қолданылады."
  },
  "p20": {
    "title": "§20. Электрическое поле, напряжённость электрического поля",
    "titleEn": "§20. Electric field, electric field strength",
    "titleKk": "§20. Электр өрісі, электр өрісінің кернеулігі",
    "ru": "## Электрическое поле\n• Электрическое поле — особая форма материи, посредством которой взаимодействуют заряженные тела.\n• Напряжённость E показывает силу, действующую на единичный положительный пробный заряд.\n> E = F/q\n• Направление E совпадает с направлением силы для положительного пробного заряда.\n• Силовые линии выходят из положительного заряда и входят в отрицательный; они не пересекаются.",
    "en": "## Electric field\n• An electric field is a special form of matter through which charged bodies interact.\n• Tension E shows the force acting on a unit positive test charge.\n> E = F/q\n• The direction of E coincides with the direction of the force for a positive test charge.\n• Lines of force leave a positive charge and enter a negative charge; they don't intersect.",
    "kk": "## Электр өрісі\n• Электр өрісі – зарядталған денелер әрекеттесетін заттың ерекше түрі.\n• Кернеу E бірлік оң сынақ зарядына әсер ететін күшті көрсетеді.\n> E = F/q\n• E бағыты оң сынақ заряды үшін күштің бағытымен сәйкес келеді.\n• Күш сызықтары оң зарядтан шығып, теріс зарядқа енеді; олар қиылыспайды."
  },
  "p21": {
    "title": "§21. Потенциал и разность потенциалов электрического поля, конденсатор",
    "titleEn": "§21. Electric potential and potential difference, capacitor",
    "titleKk": "§21. Электр өрісінің потенциалы және потенциалдар айырымы, конденсатор",
    "ru": "## Потенциал и напряжение\n• Потенциал φ — энергетическая характеристика электрического поля в точке.\n> φ = W/q\n• Разность потенциалов (напряжение) между точками равна работе поля по перемещению единичного заряда.\n> U = A/q\n• Конденсатор состоит из двух проводников, разделённых диэлектриком, и накапливает заряд и энергию электрического поля.\n• Единица напряжения — вольт (В).",
    "en": "## Potential and voltage\n• Potential φ – energy characteristic of the electric field at a point.\n> φ = W/q\n• The potential difference (voltage) between points is equal to the work done by the field to move a unit charge.\n> U = A/q\n• A capacitor consists of two conductors separated by a dielectric and stores charge and electric field energy.\n• The unit of voltage is volt (V).",
    "kk": "## Потенциал және кернеу\n• Потенциал φ – нүктедегі электр өрісінің энергетикалық сипаттамасы.\n> φ = W/q\n• Нүктелер арасындағы потенциалдар айырымы (кернеу) бірлік зарядты жылжыту үшін өріс атқарған жұмысқа тең.\n> U = A/q\n• Конденсатор диэлектрикпен бөлінген екі өткізгіштен тұрады және заряд пен электр өрісінің энергиясын сақтайды.\n• Кернеу бірлігі вольт (V)."
  },
  "p22": {
    "title": "§22. Электрический ток, источники электрического тока",
    "titleEn": "§22. Electric current, sources of electric current",
    "titleKk": "§22. Электр тогы, электр тогының көздері",
    "ru": "## Электрический ток\n• Электрический ток — упорядоченное движение заряженных частиц.\n• Для существования тока нужны свободные носители зарядов, электрическое поле и замкнутая цепь.\n• Источник тока поддерживает разность потенциалов и разделяет заряды; примеры — гальванический элемент, аккумулятор, генератор.\n• В металлах носители тока — электроны, в электролитах — положительные и отрицательные ионы.",
    "en": "## Electric current\n• Electric current is the ordered movement of charged particles.\n• For current to exist, free charge carriers, an electric field and a closed circuit are needed.\n• The current source maintains a potential difference and separates charges; examples are galvanic cell, battery, generator.\n• In metals, current carriers are electrons; in electrolytes, they are positive and negative ions.",
    "kk": "## Электр тогы\n• Электр тогы – зарядталған бөлшектердің реттелген қозғалысы.\n• Ток болуы үшін бос заряд тасымалдаушылар, электр өрісі және тұйық тізбек қажет.\n• Ток көзі потенциалдар айырмасын сақтайды және зарядтарды бөледі; мысалдар гальваникалық элемент, аккумулятор, генератор.\n• Металдарда ток тасушылар электрондар болып табылады; электролиттерде олар оң және теріс иондар."
  },
  "p23": {
    "title": "§23. Электрическая цепь и её составные части, сила тока, напряжение",
    "titleEn": "§23. Electric circuit and its components, current, voltage",
    "titleKk": "§23. Электр тізбегі және оның бөліктері, ток күші, кернеу",
    "ru": "## Электрическая цепь\n• Цепь состоит из источника тока, потребителей, соединительных проводов и ключа; на схемах используют условные обозначения.\n• Сила тока показывает заряд, проходящий через поперечное сечение проводника за единицу времени.\n> I = q/t\n• Амперметр включают последовательно.\n• Напряжение — работа электрического поля по перемещению единичного заряда; вольтметр включают параллельно участку.",
    "en": "## Electric circuit\n• The circuit consists of a current source, consumers, connecting wires and a key; Symbols are used in the diagrams.\n• Current shows the charge passing through the cross section of a conductor per unit time.\n> I = q/t\n• The ammeter is connected in series.\n• Voltage - the work of the electric field to move a unit charge; the voltmeter is switched on parallel to the section.",
    "kk": "## Электр тізбегі\n• Тізбек ток көзінен, тұтынушылардан, қосу сымдарынан және кілттен тұрады; Диаграммаларда таңбалар қолданылады.\n• Ток уақыт бірлігінде өткізгіштің көлденең қимасы арқылы өтетін зарядты көрсетеді.\n> I = q/t\n• Амперметр тізбектей қосылған.\n• Кернеу – бірлік зарядты жылжыту үшін электр өрісінің жұмысы; вольтметр секцияға параллель қосылады."
  },
  "p24": {
    "title": "§24. Закон Ома для участка цепи",
    "titleEn": "§24. Ohm's law for a section of a circuit",
    "titleKk": "§24. Тізбек бөлігі үшін Ом заңы",
    "ru": "## Закон Ома\n• Для участка цепи при постоянной температуре сила тока прямо пропорциональна напряжению и обратно пропорциональна сопротивлению.\n> I = U/R\n> U = IR; R = U/I\n• График I(U) для металлического проводника при постоянной температуре — прямая через начало координат.\n• Единица сопротивления — ом (Ом).",
    "en": "## Ohm's law\n• For a section of circuit at constant temperature, the current is directly proportional to the voltage and inversely proportional to the resistance.\n> I = U/R\n> U = IR; R = U/I\n• Graph I(U) for a metal conductor at a constant temperature - a straight line through the origin.\n• The unit of resistance is ohm (Ω).",
    "kk": "## Ом заңы\n• Тұрақты температурадағы тізбектің қимасы үшін ток кернеуге тура пропорционал және кедергіге кері пропорционал.\n> I = U/R\n> U = IR; R = U/I\n• Тұрақты температурадағы металл өткізгіш үшін I(U) графигі – координат басынан өтетін түзу.\n• Кедергі бірлігі Ом (Ом)."
  },
  "p25": {
    "title": "§25. Электрическое сопротивление проводника, удельное сопротивление проводника, реостат",
    "titleEn": "§25. Electrical resistance, resistivity, rheostat",
    "titleKk": "§25. Өткізгіштің электр кедергісі, меншікті кедергі, реостат",
    "ru": "## Сопротивление проводника\n• Сопротивление возникает из-за столкновений электронов с ионами кристаллической решётки.\n> R = ρl/S\n• R зависит от материала (удельного сопротивления ρ), длины l и площади поперечного сечения S.\n• Реостат — прибор с изменяемым сопротивлением; им регулируют силу тока.\n• Удельное сопротивление характеризует материал проводника и измеряется в Ом·м.",
    "en": "## Conductor resistance\n• Resistance arises from collisions between electrons and ions in the crystal lattice.\n> R = ρl/S\n• R depends on the material (resistivity ρ), length l and cross-sectional area S.\n• Rheostat - a device with variable resistance; they regulate the current strength.\n• Resistivity characterizes the material of the conductor and is measured in Ω·m.",
    "kk": "## Өткізгіш кедергісі\n• Қарсылық кристалдық тордағы электрондар мен иондардың соқтығысуы нәтижесінде пайда болады.\n> R = ρl/S\n• R материалға (кедергі ρ), ұзындыққа l және көлденең қима ауданы S тәуелді.\n• Реостат – айнымалы кедергісі бар құрылғы; олар ток күшін реттейді.\n• Меншіктілік өткізгіштің материалын сипаттайды және Ом·м өлшенеді."
  },
  "p26": {
    "title": "§26. Последовательное и параллельное соединение проводников",
    "titleEn": "§26. Series and parallel connections of conductors",
    "titleKk": "§26. Өткізгіштерді тізбектей және параллель жалғау",
    "ru": "## Соединения проводников\n• При последовательном соединении через все элементы проходит один и тот же ток.\n> I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂\n• При параллельном соединении напряжение на ветвях одинаково, а ток разветвляется.\n> U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂\n• Бытовые потребители обычно соединяют параллельно: отказ одного не выключает остальные.",
    "en": "## Wire connections\n• In a series connection, the same current passes through all the elements.\n> I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂\n• In a parallel connection, the voltage on the branches is the same, but the current is branched.\n> U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂\n• Household consumers are usually connected in parallel: the failure of one does not turn off the others.",
    "kk": "## Сымды қосылымдар\n• Тізбектелген қосылымда бірдей ток барлық элементтер арқылы өтеді.\n> I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂\n• Параллель қосылымда тармақтардағы кернеу бірдей, бірақ ток тармақталған.\n> U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂\n• Тұрмыстық тұтынушылар әдетте параллельді қосылады: біреуінің істен шығуы басқаларын өшірмейді."
  },
  "p27": {
    "title": "§27. Работа и мощность электрического тока",
    "titleEn": "§27. Work and power of electric current",
    "titleKk": "§27. Электр тогының жұмысы мен қуаты",
    "ru": "## Работа и мощность тока\n• Работа тока — энергия, переданная электрическим полем потребителю.\n> A = UIt\n• Мощность показывает работу за единицу времени.\n> P = A/t = UI\n• Единица работы — джоуль, мощности — ватт; электрическую энергию в быту измеряют в кВт·ч.\n• Стоимость электроэнергии равна произведению потреблённой энергии на тариф.",
    "en": "## Work and current power\n• Current work is the energy transferred by the electric field to the consumer.\n> A = UIt\n• Power shows the work done per unit of time.\n> P = A/t = UI\n• Unit of work - joule, power - watt; Electrical energy in everyday life is measured in kW·h.\n• The cost of electricity is equal to the product of consumed energy and the tariff.",
    "kk": "## Жұмыс және ағымдағы қуат\n• Ағымдағы жұмыс – электр өрісі арқылы тұтынушыға берілетін энергия.\n> A = UIt\n• Қуат уақыт бірлігінде атқарылған жұмысты көрсетеді.\n> P = A/t = UI\n• Жұмыс бірлігі – джоуль, қуат – ватт; Күнделікті өмірдегі электр энергиясы кВт·ч арқылы өлшенеді.\n• Электр энергиясының құны тұтынылған энергия мен тарифтің көбейтіндісіне тең."
  },
  "p28": {
    "title": "§28. Тепловое действие электрического тока, закон Джоуля — Ленца",
    "titleEn": "§28. Thermal effect of electric current, Joule–Lenz law",
    "titleKk": "§28. Электр тогының жылулық әсері, Джоуль–Ленц заңы",
    "ru": "## Тепловое действие тока\n• При прохождении тока проводник нагревается: энергия электрического поля превращается во внутреннюю.\n> Q = A = UIt = I²Rt = U²t/R\n• Закон Джоуля — Ленца: количество теплоты зависит от квадрата силы тока, сопротивления и времени.\n• Тепловое действие используют в нагревателях, лампах, предохранителях; иногда оно является нежелательным.",
    "en": "## Thermal effect of current\n• When current passes, the conductor heats up: the energy of the electric field is converted into internal energy.\n> Q = A = UIt = I²Rt = U²t/R\n• Joule-Lenz Law: The amount of heat depends on the square of the current, resistance and time.\n• Thermal action is used in heaters, lamps, fuses; sometimes it is undesirable.",
    "kk": "## Токтың жылу эффектісі\n• Ток өткенде өткізгіш қызады: электр өрісінің энергиясы ішкі энергияға айналады.\n> Q = A = UIt = I²Rt = U²t/R\n• Джоуль-Ленц заңы: Жылу мөлшері токтың квадратына, кедергіге және уақытқа байланысты.\n• Жылулық әсер қыздырғыштарда, шамдарда, сақтандырғыштарда қолданылады; кейде бұл жағымсыз."
  },
  "p29": {
    "title": "§29. Зависимость электрического сопротивления металлов от температуры, сверхпроводимость",
    "titleEn": "§29. Dependence of metal resistance on temperature, superconductivity",
    "titleKk": "§29. Металдардың электр кедергісінің температураға тәуелділігі, асқынөткізгіштік",
    "ru": "## Сопротивление и температура\n• При нагревании металлической решётки ионы колеблются сильнее, поэтому столкновений электронов больше, а сопротивление металла возрастает.\n• Для некоторых полупроводников при нагревании сопротивление уменьшается.\n• Сверхпроводимость — резкое падение сопротивления до практически нулевого при охлаждении ниже критической температуры.\n• Зависимость сопротивления от температуры используют в термометрах сопротивления и датчиках.",
    "en": "## Resistance and temperature\n• When a metal lattice is heated, the ions vibrate more, so there are more electron collisions and the resistance of the metal increases.\n• For some semiconductors, resistance decreases when heated.\n• Superconductivity - a sharp drop in resistance to almost zero when cooled below a critical temperature.\n• The dependence of resistance on temperature is used in resistance thermometers and sensors.",
    "kk": "## Қарсылық және температура\n• Металл торды қыздырғанда иондар көбірек тербеледі, сондықтан электрондардың соқтығысуы көбірек болады және металдың кедергісі артады.\n• Кейбір жартылай өткізгіштер үшін қызған кезде кедергі азаяды.\n• Асқын өткізгіштік – критикалық температурадан төмен салқындаған кезде қарсылықтың нөлге жуық күрт төмендеуі.\n• Кедергінің температураға тәуелділігі қарсылық термометрлері мен датчиктерде қолданылады."
  },
  "p30": {
    "title": "§30. Электронагревательные приборы, лампа накаливания, короткое замыкание, плавкие предохранители",
    "titleEn": "§30. Electric heaters, incandescent lamp, short circuit, fuses",
    "titleKk": "§30. Электр қыздырғыш құрылғылар, қыздыру шамы, қысқа тұйықталу, балқымалы сақтандырғыштар",
    "ru": "## Электронагревательные приборы и безопасность\n• Нагреватели используют высокое сопротивление спирали и тепловое действие тока.\n• В лампе накаливания ток нагревает вольфрамовую нить до свечения; светодиодная лампа расходует энергию эффективнее.\n• Короткое замыкание — соединение участков цепи с очень малым сопротивлением; ток резко возрастает.\n• Плавкий предохранитель размыкает цепь, когда ток становится опасным.",
    "en": "## Electric heating devices and safety\n• Heaters use high coil resistance and the thermal effect of current.\n• In an incandescent lamp, the current heats the tungsten filament until it glows; The LED lamp uses energy more efficiently.\n• Short circuit - connection of circuit sections with very low resistance; the current increases sharply.\n• The fuse breaks the circuit when the current becomes dangerous.",
    "kk": "## Электр жылыту құрылғылары және қауіпсіздік\n• Қыздырғыштар жоғары катушка кедергісін және токтың жылу әсерін пайдаланады.\n• Қыздыру шамында ток вольфрам жіпті жарқырағанша қыздырады; Жарықдиодты шам энергияны тиімдірек пайдаланады.\n• Қысқа тұйықталу – кедергісі өте төмен тізбек бөліктерін қосу; ток күрт артады.\n• Ток қауіпті болған кезде сақтандырғыш тізбекті үзеді."
  },
  "p31": {
    "title": "§31. Химическое действие электрического тока, закон Фарадея",
    "titleEn": "§31. Chemical effect of electric current, Faraday's law",
    "titleKk": "§31. Электр тогының химиялық әсері, Фарадей заңы",
    "ru": "## Электрический ток в электролитах\n• В растворах и расплавах электролитов ток создают направленно движущиеся положительные и отрицательные ионы.\n• Химическое действие тока — выделение веществ на электродах; процесс называют электролизом.\n• При электролизе масса выделившегося вещества пропорциональна заряду, прошедшему через электролит.\n> m = kIt\n• k — электрохимический эквивалент вещества.",
    "en": "## Electric current in electrolytes\n• In solutions and melts of electrolytes, current is created by directionally moving positive and negative ions.\n• Chemical effect of current - release of substances on the electrodes; the process is called electrolysis.\n• During electrolysis, the mass of the released substance is proportional to the charge passing through the electrolyte.\n> m = kIt\n• k – electrochemical equivalent of the substance.",
    "kk": "## Электролиттердегі электр тогы\n• Электролиттердің ерітінділері мен балқымаларында оң және теріс иондардың бағытты қозғалуынан ток пайда болады.\n• Токтың химиялық әсері – электродтарға заттардың бөлінуі; процесс электролиз деп аталады.\n• Электролиз кезінде бөлінетін заттың массасы электролит арқылы өтетін зарядқа пропорционал болады.\n> m = kIt\n• k – заттың электрохимиялық эквиваленті."
  },
  "p32": {
    "title": "§32. Постоянные магниты, магнитное поле",
    "titleEn": "§32. Permanent magnets, magnetic field",
    "titleKk": "§32. Тұрақты магниттер, магнит өрісі",
    "ru": "## Постоянные магниты\n• Магнит имеет два полюса: северный N и южный S; отдельно один полюс получить нельзя.\n• Одноимённые полюса отталкиваются, разноимённые притягиваются.\n• Магнитное поле существует вокруг магнита и действует на магниты, магнитные стрелки и некоторые материалы.\n• Силовые линии магнитного поля замкнуты; снаружи магнита идут от N к S, гуще там, где поле сильнее.",
    "en": "## Permanent magnets\n• The magnet has two poles: north N and south S; One pole cannot be obtained separately.\n• Like poles repel, unlike poles attract.\n• A magnetic field exists around a magnet and affects magnets, magnetic needles and some materials.\n• Magnetic field lines are closed; outside the magnet they go from N to S, thicker where the field is stronger.",
    "kk": "## Тұрақты магниттер\n• Магниттің екі полюсі бар: солтүстік N және оңтүстік S; Бір полюсті бөлек алуға болмайды.\n• Полюстер кері тартады, полюстерге ұқсамайды.\n• Магниттің айналасында магнит өрісі бар және магниттерге, магниттік инелерге және кейбір материалдарға әсер етеді.\n• Магниттік өріс сызықтары жабық; магниттің сыртында олар N-ден S-ге дейін, өріс күштірек жерде қалыңырақ болады."
  },
  "p33": {
    "title": "§33. Магнитное поле прямого тока. Магнитное поле катушки с током",
    "titleEn": "§33. Magnetic field of a straight current. Magnetic field of a current-carrying coil",
    "titleKk": "§33. Түзу токтың магнит өрісі. Ток бар катушканың магнит өрісі",
    "ru": "## Магнитное поле тока\n• Вокруг проводника с током возникает магнитное поле; у прямого проводника линии поля — концентрические окружности.\n• Направление поля определяют правилом правой руки или буравчика.\n• Катушка с током создаёт поле, похожее на поле полосового магнита; его усиливают увеличением тока и числа витков.\n• При изменении направления тока меняются полюса катушки.",
    "en": "## Magnetic field of current\n• A magnetic field appears around a current-carrying conductor; a straight conductor has field lines that are concentric circles.\n• The direction of the field is determined by the right hand or gimlet rule.\n• A current-carrying coil creates a field similar to that of a bar magnet; it is strengthened by increasing the current and the number of turns.\n• When the direction of current changes, the poles of the coil change.",
    "kk": "## Токтың магнит өрісі\n• Тогы бар өткізгіштің айналасында магнит өрісі пайда болады; түзу өткізгіште концентрлік шеңберлер болып табылатын өріс сызықтары болады.\n• Өріс бағыты оң қол немесе гимлет ережесімен анықталады.\n• Тогы бар катушка жолақ магнитіне ұқсас өріс жасайды; ол ток күші мен айналым санын көбейту арқылы күшейтіледі.\n• Ток бағыты өзгерген кезде катушканың полюстері өзгереді."
  },
  "p34": {
    "title": "§34. Электромагниты и их применение",
    "titleEn": "§34. Electromagnets and their applications",
    "titleKk": "§34. Электромагниттер және олардың қолданылуы",
    "ru": "## Электромагнит\n• Электромагнит — катушка с током, обычно с железным сердечником.\n• Сердечник усиливает поле и делает его сильнее внутри катушки.\n• Сила электромагнита возрастает при увеличении силы тока и числа витков.\n• Электромагниты применяют в подъёмных кранах, реле, звонках, динамиках и замках.",
    "en": "## Electromagnet\n• An electromagnet is a coil of current, usually with an iron core.\n• The core amplifies the field and makes it stronger inside the coil.\n• The strength of an electromagnet increases with increasing current and number of turns.\n• Electromagnets are used in cranes, relays, bells, speakers and locks.",
    "kk": "## Электромагнит\n• Электромагнит – әдетте темір өзегі бар ток орамы.\n• Өзек өрісті күшейтеді және оны катушка ішінде күшейтеді.\n• Электромагниттің күші ток пен айналым саны артқан сайын артады.\n• Электромагниттер крандарда, релелерде, қоңырауларда, колонкалар мен құлыптарда қолданылады."
  },
  "p35": {
    "title": "§35. Действие магнитного поля на проводник с током, электродвигатель, электроизмерительные приборы",
    "titleEn": "§35. Force of a magnetic field on a current-carrying conductor, electric motor, electrical measuring instruments",
    "titleKk": "§35. Магнит өрісінің тогы бар өткізгішке әсері, электр қозғалтқышы, электр өлшеуіш құралдар",
    "ru": "## Действие поля на проводник\n• На проводник с током в магнитном поле действует сила Ампера; её направление зависит от направления тока и поля.\n• Электродвигатель превращает электрическую энергию в механическую работу благодаря этой силе.\n• В электроизмерительных приборах действие силы на рамку с током превращается в поворот стрелки.\n• Направление силы определяют правилом левой руки.",
    "en": "## Effect of the field on the conductor\n• A current-carrying conductor in a magnetic field is acted upon by the Ampere force; its direction depends on the direction of the current and the field.\n• An electric motor converts electrical energy into mechanical work through this force.\n• In electrical measuring instruments, the action of force on a current-carrying frame turns into a rotation of the arrow.\n• The direction of force is determined by the left hand rule.",
    "kk": "## Өрістің өткізгішке әсері\n• Магнит өрісіндегі тогы бар өткізгішке Ампер күші әсер етеді; оның бағыты ток пен өрістің бағытына байланысты.\n• Электр қозғалтқышы осы күш арқылы электр энергиясын механикалық жұмысқа түрлендіреді.\n• Электрлік өлшеуіш аспаптарда ток бар рамаға күштің әрекеті жебенің айналуына айналады.\n• Күштің бағыты сол қол ережесімен анықталады."
  },
  "p36": {
    "title": "§36. Электромагнитная индукция, генератор",
    "titleEn": "§36. Electromagnetic induction, generator",
    "titleKk": "§36. Электромагниттік индукция, генератор",
    "ru": "## Электромагнитная индукция\n• Электромагнитная индукция — возникновение электрического тока в замкнутом проводнике при изменении магнитного потока.\n• Индукционный ток возникает при движении магнита относительно катушки или при изменении тока в соседней катушке.\n• Генератор превращает механическую энергию в электрическую, используя индукцию.\n• Направление индукционного тока определяется правилом Ленца.",
    "en": "## Electromagnetic induction\n• Electromagnetic induction is the occurrence of an electric current in a closed conductor when the magnetic flux changes.\n• Induction current occurs when a magnet moves relative to a coil or when the current in an adjacent coil changes.\n• A generator converts mechanical energy into electrical energy using induction.\n• The direction of the induced current is determined by Lenz's rule.",
    "kk": "## Электромагниттік индукция\n• Электромагниттік индукция – магнит ағыны өзгерген кезде тұйық өткізгіште электр тогының пайда болуы.\n• Индукциялық ток магнит катушкаға қатысты қозғалғанда немесе көршілес катушкадағы ток өзгергенде пайда болады.\n• Генератор индукция көмегімен механикалық энергияны электр энергиясына түрлендіреді.\n• Индукциялық токтың бағыты Ленц ережесімен анықталады."
  },
  "p37": {
    "title": "§37. Закон прямолинейного распространения света",
    "titleEn": "§37. Law of rectilinear propagation of light",
    "titleKk": "§37. Жарықтың түзу сызықты таралу заңы",
    "ru": "## Прямолинейное распространение света\n• Свет в однородной прозрачной среде распространяется прямолинейно.\n• Луч — линия, показывающая направление распространения света; пучок состоит из нескольких лучей.\n• Образование тени и полутени, солнечные и лунные затмения объясняются прямолинейным распространением.\n• Для наблюдения предмета свет от источника или отражённый от предмета попадает в глаз.",
    "en": "## Rectilinear propagation of light\n• Light propagates in a straight line in a homogeneous transparent medium.\n• Ray - a line showing the direction of light propagation; the beam consists of several rays.\n• The formation of shadow and penumbra, solar and lunar eclipses are explained by linear propagation.\n• To observe an object, light from a source or reflected from an object enters the eye.",
    "kk": "## Жарықтың түзу сызықты таралуы\n• Жарық біртекті мөлдір ортада түзу сызықпен таралады.\n• Сәуле – жарықтың таралу бағытын көрсететін сызық; сәуле бірнеше сәулелерден тұрады.\n• Көлеңке мен жарты жарықтың, күн мен айдың тұтылуының түзілуі сызықтық таралу арқылы түсіндіріледі.\n• Объектіні бақылау үшін көзге көзден немесе заттан шағылған жарық түседі."
  },
  "p38": {
    "title": "§38. Отражение света, законы отражения, плоские зеркала",
    "titleEn": "§38. Reflection of light, laws of reflection, plane mirrors",
    "titleKk": "§38. Жарықтың шағылуы, шағылу заңдары, жазық айналар",
    "ru": "## Отражение света\n• Отражение — возвращение света в первую среду при падении на границу раздела.\n> α = β\n• Угол падения α и угол отражения β отсчитывают от перпендикуляра к поверхности; падающий луч, отражённый луч и перпендикуляр лежат в одной плоскости.\n• Плоское зеркало даёт мнимое, прямое изображение равного размера; изображение находится на таком же расстоянии за зеркалом, как предмет перед ним.",
    "en": "## Light reflection\n• Reflection is the return of light to the first medium when striking an interface.\n> α = β\n• The angle of incidence α and the angle of reflection β are measured from the perpendicular to the surface; the incident ray, the reflected ray and the perpendicular lie in the same plane.\n• A plane mirror produces a virtual, direct image of equal size; the image is at the same distance behind the mirror as the object in front of it.",
    "kk": "## Жарықтың шағылысуы\n• Рефлексия - интерфейске түскен кезде жарықтың бірінші ортаға қайта оралуы.\n> α = β\n• Түсу бұрышы α және шағылу бұрышы β бетке перпендикулярдан өлшенеді; түскен сәуле, шағылған сәуле және перпендикуляр бір жазықтықта жатады.\n• Жазық айна бірдей өлшемдегі виртуалды, тура кескінді жасайды; кескін айнаның артында тұрған объектімен бірдей қашықтықта болады."
  },
  "p39": {
    "title": "§39. Сферические зеркала, построение изображения в сферическом зеркале",
    "titleEn": "§39. Spherical mirrors, image construction in a spherical mirror",
    "titleKk": "§39. Сфералық айналар, сфералық айнадағы бейнені салу",
    "ru": "## Сферические зеркала\n• Вогнутое зеркало отражает внутренней поверхностью сферы и собирает параллельные лучи; выпуклое рассеивает их.\n• Главная оптическая ось проходит через центр сферы и вершину зеркала; F — фокус, O — центр кривизны.\n> F = R/2\n• Изображение строят по трём главным лучам: параллельному оси, через фокус и через центр кривизны.\n• Выпуклое зеркало всегда даёт мнимое, прямое и уменьшенное изображение.",
    "en": "## Spherical mirrors\n• A concave mirror reflects with the inner surface of the sphere and collects parallel rays; the convex dissipates them.\n• The main optical axis passes through the center of the sphere and the top of the mirror; F — focus, O — center of curvature.\n> F = R/2\n• The image is constructed along three main rays: parallel to the axis, through the focus and through the center of curvature.\n• A convex mirror always produces a virtual, upright and reduced image.",
    "kk": "## Сфералық айналар\n• Ойыс айна шардың ішкі бетімен шағылысып, параллель сәулелерді жинайды; дөңес оларды таратады.\n• Негізгі оптикалық ось сфераның ортасы мен айнаның жоғарғы жағы арқылы өтеді; F — фокус, O — қисықтық орталығы.\n> F = R/2\n• Кескін үш негізгі сәуленің бойымен салынған: оське параллель, фокус арқылы және қисықтық орталығы арқылы.\n• Дөңес айна әрқашан виртуалды, тік және кішірейтілген кескінді жасайды."
  },
  "p40": {
    "title": "§40. Преломление света, закон преломления света, полное внутреннее отражение",
    "titleEn": "§40. Refraction of light, law of refraction, total internal reflection",
    "titleKk": "§40. Жарықтың сынуы, жарықтың сыну заңы, толық ішкі шағылу",
    "ru": "## Преломление света\n• При переходе из одной прозрачной среды в другую скорость света и направление луча изменяются.\n> n = sin α / sin γ\n• Закон преломления связывает угол падения α и угол преломления γ; n — показатель преломления.\n• При переходе в оптически более плотную среду луч приближается к перпендикуляру, при переходе в менее плотную — удаляется.\n• Полное внутреннее отражение возможно при переходе из более плотной среды в менее плотную, если угол падения больше предельного.",
    "en": "## Refraction of light\n• When passing from one transparent medium to another, the speed of light and the direction of the ray change.\n> n = sin α / sin γ\n• The law of refraction relates the angle of incidence α and the angle of refraction γ; n—refractive index.\n• When passing into an optically denser medium, the beam approaches the perpendicular; when passing into a less dense medium, it moves away.\n• Total internal reflection is possible during the transition from a more dense medium to a less dense one, if the angle of incidence is greater than the limiting one.",
    "kk": "## Жарықтың сынуы\n• Бір мөлдір ортадан екіншісіне өткенде жарық жылдамдығы мен сәуленің бағыты өзгереді.\n> n = sin α / sin γ\n• Сыну заңы түсу бұрышын α және сыну бұрышын γ байланыстырады; n—сыну көрсеткіші.\n• Оптикалық тығызырақ ортаға өткенде сәуле перпендикулярға жақындайды; тығыздығы аз ортаға өткенде ол алыстап кетеді.\n• Толық ішкі шағылысу неғұрлым тығыз ортадан тығыздығы азырақ ортаға ауысу кезінде мүмкін болады, егер түсу бұрышы шектіден үлкен болса."
  },
  "p41": {
    "title": "§41. Линзы, оптическая сила линзы, формула тонкой линзы. Построение изображений в линзах",
    "titleEn": "§41. Lenses, optical power, thin-lens formula. Image construction in lenses",
    "titleKk": "§41. Линзалар, линзаның оптикалық күші, жұқа линза формуласы. Линзадағы бейнелерді салу",
    "ru": "## Линзы\n• Линза — прозрачное тело, ограниченное преломляющими поверхностями. Собирающая линза толще в центре, рассеивающая — тоньше.\n> D = 1/F\n• D — оптическая сила в диоптриях, F — фокусное расстояние в метрах.\n> 1/F = 1/d + 1/f\n• Формула тонкой линзы связывает расстояния от предмета d и изображения f с фокусом F.\n• Изображение строят лучами, идущими параллельно оси, через оптический центр и через фокус.",
    "en": "## Lenses\n• A lens is a transparent body bounded by refractive surfaces. A converging lens is thicker in the center, a diverging lens is thinner.\n> D = 1/F\n• D - optical power in diopters, F - focal length in meters.\n> 1/F = 1/d + 1/f\n• The thin lens formula relates the distances from the object d and the image f to the focus F.\n• The image is constructed by rays running parallel to the axis, through the optical center and through the focus.",
    "kk": "## Линзалар\n• Линза – сыну беттерімен шектелген мөлдір дене. Жинақтаушы линзаның ортасында қалыңырақ, ал диверсивті линза жұқа.\n> D = 1/F\n• D - диоптрдегі оптикалық қуат, F - метрдегі фокус аралығы.\n> 1/F = 1/d + 1/f\n• Жұқа линза формуласы нысан d және кескін f фокусқа F дейінгі қашықтықтарды байланыстырады.\n• Кескін оське параллель, оптикалық орталық арқылы және фокус арқылы өтетін сәулелер арқылы құрастырылады."
  },
  "p42": {
    "title": "§42. Глаз как оптическая система, дефекты зрения и способы их исправления",
    "titleEn": "§42. The eye as an optical system, visual defects and their correction",
    "titleKk": "§42. Оптикалық жүйе ретіндегі көз, көру ақаулары және оларды түзету",
    "ru": "## Глаз\n• Глаз — оптическая система: роговица и хрусталик преломляют свет, сетчатка воспринимает изображение, зрачок регулирует световой поток.\n• Аккомодация — изменение кривизны хрусталика для фокусировки на разных расстояниях.\n• При близорукости изображение формируется перед сетчаткой; её исправляют рассеивающей линзой.\n• При дальнозоркости изображение формируется за сетчаткой; её исправляют собирающей линзой.",
    "en": "## Eye\n• The eye is an optical system: the cornea and lens refract light, the retina perceives the image, the pupil regulates the light flux.\n• Accommodation - changing the curvature of the lens to focus at different distances.\n• In myopia, the image is formed in front of the retina; it is corrected with a diverging lens.\n• With farsightedness, the image is formed behind the retina; it is corrected with a collecting lens.",
    "kk": "## Көз\n• Көз – оптикалық жүйе: қасаң қабық пен линза жарықты сындырады, көз торы кескінді қабылдайды, қарашық жарық ағынын реттейді.\n• Аккомодация – әртүрлі қашықтықта фокустау үшін линзаның қисаюын өзгерту.\n• Миопияда бейне көз торының алдында қалыптасады; ол диверсиялық линзаның көмегімен түзетіледі.\n• Алыстан көргіштікпен көз торының артында кескін қалыптасады; ол жинағыш линзаның көмегімен түзетіледі."
  },
  "p43": {
    "title": "§43. Оптические приборы",
    "titleEn": "§43. Optical instruments",
    "titleKk": "§43. Оптикалық құралдар",
    "ru": "## Оптические приборы\n• Фотоаппарат формирует действительное перевёрнутое изображение на матрице или плёнке.\n• Лупа — собирающая линза, дающая увеличенное мнимое изображение при расположении предмета ближе фокуса.\n• Микроскоп увеличивает изображения малых объектов системой объектив–окуляр.\n• Телескоп наблюдает далёкие объекты; перископ использует отражение в зеркалах или призмах.\n• Общий принцип приборов — управление ходом лучей с помощью линз, зеркал и экранов.",
    "en": "## Optical instruments\n• The camera forms a real inverted image on the matrix or film.\n• A magnifying glass is a converging lens that produces an enlarged virtual image when an object is placed closer to the focus.\n• The microscope magnifies images of small objects using a lens-eyepiece system.\n• The telescope observes distant objects; A periscope uses reflection in mirrors or prisms.\n• The general principle of the devices is to control the path of rays using lenses, mirrors and screens.",
    "kk": "## Оптикалық құралдар\n• Камера матрицада немесе пленкада нақты төңкерілген кескін жасайды.\n• Үлкейткіш әйнек - нысанды фокусқа жақынырақ орналастырғанда үлкейтілген виртуалды кескінді беретін жинақтаушы линза.\n• Микроскоп линза-окляр жүйесі арқылы шағын заттардың кескіндерін үлкейтеді.\n• Телескоп алыстағы объектілерді бақылайды; Перископ айнадағы немесе призмалардағы шағылыстырады.\n• Құрылғылардың жалпы принципі линзалар, айналар және экрандар арқылы сәулелердің жолын басқару болып табылады."
  }
};
window.GRADE_LOCALES_PATCH = {
  "ru": {
    "titleLine2": "ТЕПЛОВОЙ И ЭЛЕКТРИЧЕСКИЙ ЩИТ",
    "subtitle": "Защити город от астероидов знаниями физики 8 класса",
    "level1Name": "🛡 Техника безопасности",
    "level2Name": "§1. Тепловое движение, броуновское движение, диффузия",
    "level3Name": "§2. Температура, способы её измерения, температурные шкалы",
    "level4Name": "§3. Внутренняя энергия. Способы изменения внутренней энергии",
    "level5Name": "§4. Теплопроводность, конвекция, излучение",
    "level6Name": "§5. Теплопередача в природе и технике",
    "level7Name": "§6. Роль тепловых явлений в жизни живых организмов",
    "level8Name": "§7. Количество теплоты, удельная теплоёмкость вещества",
    "level9Name": "§8. Энергия топлива, удельная теплота сгорания топлива",
    "level10Name": "§9. Закон сохранения и превращения энергии в тепловых процессах",
    "level11Name": "§10. Плавление и кристаллизация твердых тел, температура плавления, удельная теплота плавления",
    "level12Name": "§11. Парообразование и конденсация",
    "level13Name": "§12. Кипение, удельная теплота парообразования. Зависимость температуры кипения от внешнего давления",
    "level14Name": "§13. Первый закон термодинамики, работа газа и пара",
    "level15Name": "§14. Необратимость тепловых процессов, второй закон термодинамики",
    "level16Name": "§15. Тепловые двигатели",
    "level17Name": "§16. Коэффициент полезного действия теплового двигателя",
    "level18Name": "§17. Экологические проблемы использования тепловых машин",
    "level19Name": "§18. Электрический заряд, электризация тел, проводники и диэлектрики",
    "level20Name": "§19. Закон сохранения электрического заряда, взаимодействие неподвижных зарядов, закон Кулона, элементарный заряд",
    "level21Name": "§20. Электрическое поле, напряжённость электрического поля",
    "level22Name": "§21. Потенциал и разность потенциалов электрического поля, конденсатор",
    "level23Name": "§22. Электрический ток, источники электрического тока",
    "level24Name": "§23. Электрическая цепь и её составные части, сила тока, напряжение",
    "level25Name": "§24. Закон Ома для участка цепи",
    "level26Name": "§25. Электрическое сопротивление проводника, удельное сопротивление проводника, реостат",
    "level27Name": "§26. Последовательное и параллельное соединение проводников",
    "level28Name": "§27. Работа и мощность электрического тока",
    "level29Name": "§28. Тепловое действие электрического тока, закон Джоуля — Ленца",
    "level30Name": "§29. Зависимость электрического сопротивления металлов от температуры, сверхпроводимость",
    "level31Name": "§30. Электронагревательные приборы, лампа накаливания, короткое замыкание, плавкие предохранители",
    "level32Name": "§31. Химическое действие электрического тока, закон Фарадея",
    "level33Name": "§32. Постоянные магниты, магнитное поле",
    "level34Name": "§33. Магнитное поле прямого тока. Магнитное поле катушки с током",
    "level35Name": "§34. Электромагниты и их применение",
    "level36Name": "§35. Действие магнитного поля на проводник с током, электродвигатель, электроизмерительные приборы",
    "level37Name": "§36. Электромагнитная индукция, генератор",
    "level38Name": "§37. Закон прямолинейного распространения света",
    "level39Name": "§38. Отражение света, законы отражения, плоские зеркала",
    "level40Name": "§39. Сферические зеркала, построение изображения в сферическом зеркале",
    "level41Name": "§40. Преломление света, закон преломления света, полное внутреннее отражение",
    "level42Name": "§41. Линзы, оптическая сила линзы, формула тонкой линзы. Построение изображений в линзах",
    "level43Name": "§42. Глаз как оптическая система, дефекты зрения и способы их исправления",
    "level44Name": "§43. Оптические приборы",
    "level45Name": "🔬 Лаб. №1: Смешивание воды и количество теплоты",
    "level46Name": "🔬 Лаб. №2: Удельная теплота плавления льда",
    "level47Name": "🔬 Лаб. №3: Цепь: ток и напряжение",
    "level48Name": "🔬 Лаб. №4: Зависимость I от U",
    "level49Name": "🔬 Лаб. №5: Последовательное соединение",
    "level50Name": "🔬 Лаб. №6: Параллельное соединение",
    "levelSafetyDesc": "⚠ Правила безопасности на уроке физики (бонусный)",
    "level2Desc": "📖 Тепловое движение частиц, броуновское движение и диффузия",
    "level3Desc": "📖 Температура, термометры и температурные шкалы",
    "level4Desc": "📖 Внутренняя энергия и способы её изменения",
    "level5Desc": "📖 Теплопроводность, конвекция и излучение",
    "level6Desc": "📖 Теплопередача в природе и технике",
    "level7Desc": "📖 Тепловые явления и терморегуляция живых организмов",
    "level8Desc": "📖 Количество теплоты и удельная теплоёмкость",
    "level9Desc": "📖 Энергия топлива и удельная теплота сгорания",
    "level10Desc": "📖 Сохранение и превращение энергии в тепловых процессах",
    "level11Desc": "📖 Плавление, кристаллизация и удельная теплота плавления",
    "level12Desc": "📖 Испарение, парообразование и конденсация",
    "level13Desc": "📖 Кипение и зависимость температуры кипения от давления",
    "level14Desc": "📖 Первый закон термодинамики и работа газа",
    "level15Desc": "📖 Необратимость тепловых процессов и второй закон термодинамики",
    "level16Desc": "📖 Тепловые двигатели и превращение теплоты в работу",
    "level17Desc": "📖 КПД теплового двигателя",
    "level18Desc": "📖 Экологические проблемы тепловых машин",
    "level19Desc": "📖 Электрический заряд, проводники и диэлектрики",
    "level20Desc": "📖 Сохранение заряда, закон Кулона и взаимодействие зарядов",
    "level21Desc": "📖 Электрическое поле и его напряжённость",
    "level22Desc": "📖 Потенциал, разность потенциалов и конденсатор",
    "level23Desc": "📖 Электрический ток и источники тока",
    "level24Desc": "📖 Электрическая цепь, ток и напряжение",
    "level25Desc": "📖 Закон Ома для участка цепи",
    "level26Desc": "📖 Сопротивление, удельное сопротивление и реостат",
    "level27Desc": "📖 Последовательное и параллельное соединение проводников",
    "level28Desc": "📖 Работа и мощность электрического тока",
    "level29Desc": "📖 Тепловое действие тока и закон Джоуля — Ленца",
    "level30Desc": "📖 Зависимость сопротивления металлов от температуры",
    "level31Desc": "📖 Электронагреватели, лампы, короткое замыкание и предохранители",
    "level32Desc": "📖 Химическое действие тока и закон Фарадея",
    "level33Desc": "📖 Постоянные магниты и магнитное поле",
    "level34Desc": "📖 Магнитное поле тока и катушки с током",
    "level35Desc": "📖 Электромагниты и их применение",
    "level36Desc": "📖 Сила магнитного поля, электродвигатель и измерительные приборы",
    "level37Desc": "📖 Электромагнитная индукция и генератор",
    "level38Desc": "📖 Прямолинейное распространение света",
    "level39Desc": "📖 Отражение света и плоские зеркала",
    "level40Desc": "📖 Сферические зеркала и построение изображений",
    "level51Name": "🔬 Лаб. №7: Работа и мощность тока",
    "level52Name": "🔬 Лаб. №8: Постоянный магнит и поле",
    "level53Name": "🔬 Лаб. №9: Электромагнит",
    "level54Name": "🔬 Лаб. №10: Показатель преломления стекла",
    "level55Name": "🔬 Лаб. №11: Фокусное расстояние линзы",
    "level1Desc": "⚠ Правила безопасности в кабинете физики и при работе с приборами",
    "level41Desc": "📖 Преломление, закон преломления и полное внутреннее отражение",
    "level42Desc": "📖 Линзы, оптическая сила и формула тонкой линзы",
    "level43Desc": "📖 Глаз как оптическая система и коррекция зрения",
    "level44Desc": "📖 Оптические приборы",
    "level45Desc": "🔬 Смешивание воды и проверка теплового баланса",
    "level46Desc": "🔬 Определение удельной теплоты плавления льда",
    "level47Desc": "🔬 Сборка цепи, измерение тока и напряжения",
    "level48Desc": "🔬 Исследование зависимости силы тока от напряжения",
    "level49Desc": "🔬 Исследование последовательного соединения",
    "level50Desc": "🔬 Исследование параллельного соединения",
    "level51Desc": "🔬 Измерение работы и мощности электрического тока",
    "level52Desc": "🔬 Изучение постоянного магнита и магнитного поля",
    "level53Desc": "🔬 Сборка электромагнита и проверка его действия",
    "level54Desc": "🔬 Определение показателя преломления стекла",
    "level55Desc": "🔬 Определение фокусного расстояния тонкой линзы"
  },
  "en": {
    "titleLine2": "THERMAL & ELECTRIC SHIELD",
    "subtitle": "Defend the city with 8th-grade physics knowledge",
    "level1Name": "🛡 Lab Safety",
    "level2Name": "§1. Thermal motion, Brownian motion, diffusion",
    "level3Name": "§2. Temperature, methods of measurement, temperature scales",
    "level4Name": "§3. Internal energy. Ways of changing internal energy",
    "level5Name": "§4. Thermal conduction, convection, radiation",
    "level6Name": "§5. Heat transfer in nature and technology",
    "level7Name": "§6. The role of thermal phenomena in the life of living organisms",
    "level8Name": "§7. Quantity of heat, specific heat capacity of a substance",
    "level9Name": "§8. Fuel energy, specific heat of combustion",
    "level10Name": "§9. Law of conservation and transformation of energy in thermal processes",
    "level11Name": "§10. Melting and crystallization of solids, melting temperature, specific latent heat of fusion",
    "level12Name": "§11. Vaporization and condensation",
    "level13Name": "§12. Boiling, specific latent heat of vaporization. Dependence of boiling temperature on external pressure",
    "level14Name": "§13. First law of thermodynamics, work of gas and vapor",
    "level15Name": "§14. Irreversibility of thermal processes, second law of thermodynamics",
    "level16Name": "§15. Heat engines",
    "level17Name": "§16. Efficiency of a heat engine",
    "level18Name": "§17. Environmental problems caused by heat engines",
    "level19Name": "§18. Electric charge, electrification of bodies, conductors and dielectrics",
    "level20Name": "§19. Conservation of electric charge, interaction of stationary charges, Coulomb's law, elementary charge",
    "level21Name": "§20. Electric field, electric field strength",
    "level22Name": "§21. Electric potential and potential difference, capacitor",
    "level23Name": "§22. Electric current, sources of electric current",
    "level24Name": "§23. Electric circuit and its components, current, voltage",
    "level25Name": "§24. Ohm's law for a section of a circuit",
    "level26Name": "§25. Electrical resistance, resistivity, rheostat",
    "level27Name": "§26. Series and parallel connections of conductors",
    "level28Name": "§27. Work and power of electric current",
    "level29Name": "§28. Thermal effect of electric current, Joule–Lenz law",
    "level30Name": "§29. Dependence of metal resistance on temperature, superconductivity",
    "level31Name": "§30. Electric heaters, incandescent lamp, short circuit, fuses",
    "level32Name": "§31. Chemical effect of electric current, Faraday's law",
    "level33Name": "§32. Permanent magnets, magnetic field",
    "level34Name": "§33. Magnetic field of a straight current. Magnetic field of a current-carrying coil",
    "level35Name": "§34. Electromagnets and their applications",
    "level36Name": "§35. Force of a magnetic field on a current-carrying conductor, electric motor, electrical measuring instruments",
    "level37Name": "§36. Electromagnetic induction, generator",
    "level38Name": "§37. Law of rectilinear propagation of light",
    "level39Name": "§38. Reflection of light, laws of reflection, plane mirrors",
    "level40Name": "§39. Spherical mirrors, image construction in a spherical mirror",
    "level41Name": "§40. Refraction of light, law of refraction, total internal reflection",
    "level42Name": "§41. Lenses, optical power, thin-lens formula. Image construction in lenses",
    "level43Name": "§42. The eye as an optical system, visual defects and their correction",
    "level44Name": "§43. Optical instruments",
    "level45Name": "🔬 Lab No. 1: Mixing water and quantity of heat",
    "level46Name": "🔬 Lab No. 2: Specific latent heat of fusion of ice",
    "level47Name": "🔬 Lab No. 3: Circuit: current and voltage",
    "level48Name": "🔬 Lab No. 4: Dependence of I on U",
    "level49Name": "🔬 Lab No. 5: Series connection",
    "level50Name": "🔬 Lab No. 6: Parallel connection",
    "levelSafetyDesc": "⚠ Physics lab safety rules (bonus)",
    "level2Desc": "📖 Thermal motion of particles, Brownian motion and diffusion",
    "level3Desc": "📖 Temperature, thermometers and temperature scales",
    "level4Desc": "📖 Internal energy and ways to change it",
    "level5Desc": "📖 Thermal conduction, convection and radiation",
    "level6Desc": "📖 Heat transfer in nature and technology",
    "level7Desc": "📖 Thermal phenomena and thermoregulation in living organisms",
    "level8Desc": "📖 Quantity of heat and specific heat capacity",
    "level9Desc": "📖 Fuel energy and specific heat of combustion",
    "level10Desc": "📖 Conservation and transformation of energy in thermal processes",
    "level11Desc": "📖 Melting, crystallization and specific heat of fusion",
    "level12Desc": "📖 Evaporation, vaporization and condensation",
    "level13Desc": "📖 Boiling and dependence of boiling temperature on pressure",
    "level14Desc": "📖 The first law of thermodynamics and work of a gas",
    "level15Desc": "📖 Irreversibility of thermal processes and the second law of thermodynamics",
    "level16Desc": "📖 Heat engines and conversion of heat into work",
    "level17Desc": "📖 Efficiency of a heat engine",
    "level18Desc": "📖 Environmental problems caused by heat engines",
    "level19Desc": "📖 Electric charge, conductors and dielectrics",
    "level20Desc": "📖 Conservation of charge, Coulomb's law and charge interaction",
    "level21Desc": "📖 Electric field and field strength",
    "level22Desc": "📖 Potential, potential difference and the capacitor",
    "level23Desc": "📖 Electric current and current sources",
    "level24Desc": "📖 Electric circuit, current and voltage",
    "level25Desc": "📖 Ohm's law for a section of a circuit",
    "level26Desc": "📖 Resistance, resistivity and rheostat",
    "level27Desc": "📖 Series and parallel connection of conductors",
    "level28Desc": "📖 Work and power of electric current",
    "level29Desc": "📖 Thermal effect of current and the Joule–Lenz law",
    "level30Desc": "📖 Dependence of metal resistance on temperature",
    "level31Desc": "📖 Electric heaters, lamps, short circuits and fuses",
    "level32Desc": "📖 Chemical effect of current and Faraday's law",
    "level33Desc": "📖 Permanent magnets and magnetic field",
    "level34Desc": "📖 Magnetic field of current and current-carrying coils",
    "level35Desc": "📖 Electromagnets and their applications",
    "level36Desc": "📖 Magnetic force, electric motor and measuring instruments",
    "level37Desc": "📖 Electromagnetic induction and the generator",
    "level38Desc": "📖 Rectilinear propagation of light",
    "level39Desc": "📖 Reflection of light and plane mirrors",
    "level40Desc": "📖 Spherical mirrors and image construction",
    "level51Name": "🔬 Lab No. 7: Work and power of electric current",
    "level52Name": "🔬 Lab No. 8: Permanent magnet and magnetic field",
    "level53Name": "🔬 Lab No. 9: Electromagnet",
    "level54Name": "🔬 Lab No. 10: Refractive index of glass",
    "level55Name": "🔬 Lab No. 11: Focal length of a lens",
    "level1Desc": "⚠ Physics laboratory safety and safe work with equipment",
    "level41Desc": "📖 Refraction, the law of refraction and total internal reflection",
    "level42Desc": "📖 Lenses, optical power and the thin-lens formula",
    "level43Desc": "📖 The eye as an optical system and vision correction",
    "level44Desc": "📖 Optical instruments",
    "level45Desc": "🔬 Mixing water and checking the heat balance",
    "level46Desc": "🔬 Determining the specific heat of fusion of ice",
    "level47Desc": "🔬 Assembling a circuit and measuring current and voltage",
    "level48Desc": "🔬 Studying the dependence of current on voltage",
    "level49Desc": "🔬 Studying series connection",
    "level50Desc": "🔬 Studying parallel connection",
    "level51Desc": "🔬 Measuring the work and power of electric current",
    "level52Desc": "🔬 Studying a permanent magnet and magnetic field",
    "level53Desc": "🔬 Assembling an electromagnet and testing its action",
    "level54Desc": "🔬 Determining the refractive index of glass",
    "level55Desc": "🔬 Determining the focal length of a thin lens"
  },
  "kk": {
    "titleLine2": "ЖЫЛУЛЫҚ ЖӘНЕ ЭЛЕКТРЛІК ҚАЛҚАН",
    "subtitle": "8-сынып физикасы білімімен қаланы астероидтардан қорға",
    "level1Name": "🛡 Қауіпсіздік техникасы",
    "level2Name": "§1. Жылулық қозғалыс, броундық қозғалыс, диффузия",
    "level3Name": "§2. Температура, өлшеу әдістері, температура шкалалары",
    "level4Name": "§3. Ішкі энергия. Ішкі энергияны өзгерту тәсілдері",
    "level5Name": "§4. Жылуөткізгіштік, конвекция, сәуле шығару",
    "level6Name": "§5. Табиғаттағы және техникадағы жылу берілу",
    "level7Name": "§6. Тірі ағзалар өміріндегі жылулық құбылыстардың рөлі",
    "level8Name": "§7. Жылу мөлшері, заттың меншікті жылу сыйымдылығы",
    "level9Name": "§8. Отын энергиясы, отынның меншікті жану жылуы",
    "level10Name": "§9. Жылу процестеріндегі энергияның сақталу және түрлену заңы",
    "level11Name": "§10. Қатты денелердің балқуы мен кристалдануы, балқу температурасы, меншікті балқу жылуы",
    "level12Name": "§11. Булану және конденсация",
    "level13Name": "§12. Қайнау, меншікті булану жылуы. Қайнау температурасының сыртқы қысымға тәуелділігі",
    "level14Name": "§13. Термодинамиканың бірінші заңы, газ бен будың жұмысы",
    "level15Name": "§14. Жылу процестерінің қайтымсыздығы, термодинамиканың екінші заңы",
    "level16Name": "§15. Жылу машиналары",
    "level17Name": "§16. Жылу машинасының пайдалы әсер коэффициенті",
    "level18Name": "§17. Жылу машиналарын пайдаланудың экологиялық мәселелері",
    "level19Name": "§18. Электр заряды, денелердің электрленуі, өткізгіштер және диэлектриктер",
    "level20Name": "§19. Электр зарядының сақталу заңы, тыныштықтағы зарядтардың өзара әсері, Кулон заңы, элементар заряд",
    "level21Name": "§20. Электр өрісі, электр өрісінің кернеулігі",
    "level22Name": "§21. Электр өрісінің потенциалы және потенциалдар айырымы, конденсатор",
    "level23Name": "§22. Электр тогы, электр тогының көздері",
    "level24Name": "§23. Электр тізбегі және оның бөліктері, ток күші, кернеу",
    "level25Name": "§24. Тізбек бөлігі үшін Ом заңы",
    "level26Name": "§25. Өткізгіштің электр кедергісі, меншікті кедергі, реостат",
    "level27Name": "§26. Өткізгіштерді тізбектей және параллель жалғау",
    "level28Name": "§27. Электр тогының жұмысы мен қуаты",
    "level29Name": "§28. Электр тогының жылулық әсері, Джоуль–Ленц заңы",
    "level30Name": "§29. Металдардың электр кедергісінің температураға тәуелділігі, асқынөткізгіштік",
    "level31Name": "§30. Электр қыздырғыш құрылғылар, қыздыру шамы, қысқа тұйықталу, балқымалы сақтандырғыштар",
    "level32Name": "§31. Электр тогының химиялық әсері, Фарадей заңы",
    "level33Name": "§32. Тұрақты магниттер, магнит өрісі",
    "level34Name": "§33. Түзу токтың магнит өрісі. Ток бар катушканың магнит өрісі",
    "level35Name": "§34. Электромагниттер және олардың қолданылуы",
    "level36Name": "§35. Магнит өрісінің тогы бар өткізгішке әсері, электр қозғалтқышы, электр өлшеуіш құралдар",
    "level37Name": "§36. Электромагниттік индукция, генератор",
    "level38Name": "§37. Жарықтың түзу сызықты таралу заңы",
    "level39Name": "§38. Жарықтың шағылуы, шағылу заңдары, жазық айналар",
    "level40Name": "§39. Сфералық айналар, сфералық айнадағы бейнені салу",
    "level41Name": "§40. Жарықтың сынуы, жарықтың сыну заңы, толық ішкі шағылу",
    "level42Name": "§41. Линзалар, линзаның оптикалық күші, жұқа линза формуласы. Линзадағы бейнелерді салу",
    "level43Name": "§42. Оптикалық жүйе ретіндегі көз, көру ақаулары және оларды түзету",
    "level44Name": "§43. Оптикалық құралдар",
    "level45Name": "🔬 Зертхана №1: Суды араластыру және жылу мөлшері",
    "level46Name": "🔬 Зертхана №2: Мұздың меншікті балқу жылуы",
    "level47Name": "🔬 Зертхана №3: Тізбек: ток және кернеу",
    "level48Name": "🔬 Зертхана №4: I-дің U-ге тәуелділігі",
    "level49Name": "🔬 Зертхана №5: Тізбектей жалғау",
    "level50Name": "🔬 Зертхана №6: Параллель жалғау",
    "levelSafetyDesc": "⚠ Физика кабинетінде қауіпсіздік ережелері (бонус)",
    "level2Desc": "📖 Бөлшектердің жылулық қозғалысы, броундық қозғалыс және диффузия",
    "level3Desc": "📖 Температура, термометрлер және температура шкалалары",
    "level4Desc": "📖 Ішкі энергия және оны өзгерту тәсілдері",
    "level5Desc": "📖 Жылуөткізгіштік, конвекция және сәуле шығару",
    "level6Desc": "📖 Табиғаттағы және техникадағы жылу берілу",
    "level7Desc": "📖 Тірі ағзалардағы жылулық құбылыстар және терморегуляция",
    "level8Desc": "📖 Жылу мөлшері және меншікті жылу сыйымдылығы",
    "level9Desc": "📖 Отын энергиясы және меншікті жану жылуы",
    "level10Desc": "📖 Жылу процестеріндегі энергияның сақталуы және түрленуі",
    "level11Desc": "📖 Балқу, кристалдану және меншікті балқу жылуы",
    "level12Desc": "📖 Булану, буға айналу және конденсация",
    "level13Desc": "📖 Қайнау және қайнау температурасының қысымға тәуелділігі",
    "level14Desc": "📖 Термодинамиканың бірінші заңы және газдың жұмысы",
    "level15Desc": "📖 Жылу процестерінің қайтымсыздығы және термодинамиканың екінші заңы",
    "level16Desc": "📖 Жылу машиналары және жылуды жұмысқа айналдыру",
    "level17Desc": "📖 Жылу машинасының пайдалы әсер коэффициенті",
    "level18Desc": "📖 Жылу машиналарынан туындайтын экологиялық мәселелер",
    "level19Desc": "📖 Электр заряды, өткізгіштер және диэлектриктер",
    "level20Desc": "📖 Зарядтың сақталуы, Кулон заңы және зарядтардың өзара әсері",
    "level21Desc": "📖 Электр өрісі және өріс кернеулігі",
    "level22Desc": "📖 Потенциал, потенциалдар айырымы және конденсатор",
    "level23Desc": "📖 Электр тогы және ток көздері",
    "level24Desc": "📖 Электр тізбегі, ток күші және кернеу",
    "level25Desc": "📖 Тізбек бөлігі үшін Ом заңы",
    "level26Desc": "📖 Кедергі, меншікті кедергі және реостат",
    "level27Desc": "📖 Өткізгіштерді тізбектей және параллель жалғау",
    "level28Desc": "📖 Электр тогының жұмысы мен қуаты",
    "level29Desc": "📖 Токтың жылулық әсері және Джоуль–Ленц заңы",
    "level30Desc": "📖 Металдар кедергісінің температураға тәуелділігі",
    "level31Desc": "📖 Электр қыздырғыштар, шамдар, қысқа тұйықталу және сақтандырғыштар",
    "level32Desc": "📖 Токтың химиялық әсері және Фарадей заңы",
    "level33Desc": "📖 Тұрақты магниттер және магнит өрісі",
    "level34Desc": "📖 Токтың және ток бар катушкалардың магнит өрісі",
    "level35Desc": "📖 Электромагниттер және олардың қолданылуы",
    "level36Desc": "📖 Магниттік күш, электр қозғалтқышы және өлшеуіш құралдар",
    "level37Desc": "📖 Электромагниттік индукция және генератор",
    "level38Desc": "📖 Жарықтың түзу сызықты таралуы",
    "level39Desc": "📖 Жарықтың шағылуы және жазық айналар",
    "level40Desc": "📖 Сфералық айналар және кескін салу",
    "level51Name": "🔬 Зертхана №7: Токтың жұмысы мен қуаты",
    "level52Name": "🔬 Зертхана №8: Тұрақты магнит және магнит өрісі",
    "level53Name": "🔬 Зертхана №9: Электромагнит",
    "level54Name": "🔬 Зертхана №10: Әйнектің сыну көрсеткіші",
    "level55Name": "🔬 Зертхана №11: Линзаның фокус аралығы",
    "level1Desc": "⚠ Физика кабинетінде және құралдармен жұмыс істеу қауіпсіздігі",
    "level41Desc": "📖 Сыну, сыну заңы және толық ішкі шағылу",
    "level42Desc": "📖 Линзалар, оптикалық күш және жұқа линза формуласы",
    "level43Desc": "📖 Оптикалық жүйе ретіндегі көз және көруді түзету",
    "level44Desc": "📖 Оптикалық құралдар",
    "level45Desc": "🔬 Суды араластыру және жылу балансын тексеру",
    "level46Desc": "🔬 Мұздың меншікті балқу жылуын анықтау",
    "level47Desc": "🔬 Тізбек құрастыру, ток пен кернеуді өлшеу",
    "level48Desc": "🔬 Ток күшінің кернеуге тәуелділігін зерттеу",
    "level49Desc": "🔬 Тізбектей жалғауды зерттеу",
    "level50Desc": "🔬 Параллель жалғауды зерттеу",
    "level51Desc": "🔬 Электр тогының жұмысы мен қуатын өлшеу",
    "level52Desc": "🔬 Тұрақты магнит пен магнит өрісін зерттеу",
    "level53Desc": "🔬 Электромагнит құрастыру және оның әсерін тексеру",
    "level54Desc": "🔬 Әйнектің сыну көрсеткішін анықтау",
    "level55Desc": "🔬 Жұқа линзаның фокус аралығын анықтау"
  }
};
window.GRADE_LAB_GAMES_CONFIG = {
    // 8 класс, лабораторные уровни 45–55: расчётные мини-игры со слайдерами и сборкой цепи
    45: { type:"slider", title:"🔬 Лаб 45: Смешивание воды — тепловой баланс", titleEn:"🔬 Lab 45: Water mixing — heat balance", titleKk:"🔬 45-зертхана: Суды араластыру — жылу балансы",
        desc:"Q = c·m·Δt, c = 4200 Дж/(кг·°C). В опыте вода получила Q ≈ 42 кДж. Подбери массу воды и нагрев Δt так, чтобы расчёт совпал с опытом.",
        descEn:"Q = c·m·Δt, c = 4200 J/(kg·°C). In the experiment the water gained Q ≈ 42 kJ. Pick the water mass and heating Δt so your calculation matches the experiment.",
        descKk:"Q = c·m·Δt, c = 4200 Дж/(кг·°C). Тәжірибеде су Q ≈ 42 кДж алды. Есеп тәжірибемен сәйкес келетіндей су массасы мен Δt-ны таңда.",
        sliders:[{id:"m", label:"Масса воды m, кг", labelEn:"Water mass m, kg", labelKk:"Су массасы m, кг", min:0.1, max:0.5, step:0.05, val:0.2},
                 {id:"dt", label:"Нагрев Δt, °C", labelEn:"Heating Δt, °C", labelKk:"Қыздыру Δt, °C", min:10, max:60, step:5, val:20}],
        formula:(v)=>4.2*v.m*v.dt, target:42, tol:1, unit:"кДж", unitEn:"kJ", formulaStr:"Q = c·m·Δt",
        hint:"Q растёт линейно: увеличь массу или нагрев", hintEn:"Q grows linearly: increase the mass or the heating", hintKk:"Q сызықты өседі: массаны немесе қыздыруды арттыр" },
    46: { type:"slider", title:"🔬 Лаб 46: Плавление льда — удельная теплота", titleEn:"🔬 Lab 46: Melting ice — specific heat", titleKk:"🔬 46-зертхана: Мұздың балқуы — меншікті жылу",
        desc:"Лёд плавят нагревателем: λ = Q/m. По опыту λ ≈ 334 кДж/кг. Подбери затраченную теплоту Q и массу льда m.",
        descEn:"Ice is melted by a heater: λ = Q/m. The experiment gives λ ≈ 334 kJ/kg. Pick the supplied heat Q and the ice mass m.",
        descKk:"Мұз қыздырғышпен балқиды: λ = Q/m. Тәжірибе λ ≈ 334 кДж/кг көрсетеді. Жұмсалған Q жылуын және мұз массасын m таңда.",
        sliders:[{id:"Q", label:"Теплота Q, кДж", labelEn:"Heat Q, kJ", labelKk:"Жылу Q, кДж", min:10, max:60, step:2, val:30},
                 {id:"m", label:"Масса льда m, кг", labelEn:"Ice mass m, kg", labelKk:"Мұз массасы m, кг", min:0.05, max:0.3, step:0.01, val:0.1}],
        formula:(v)=>v.Q/v.m, target:334, tol:8, unit:"кДж/кг", unitEn:"kJ/kg", formulaStr:"λ = Q / m",
        hint:"λ = теплота ÷ масса: уменьшай m или увеличивай Q", hintEn:"λ = heat ÷ mass: lower m or raise Q", hintKk:"λ = жылу ÷ масса: m-ді азайт немесе Q-ны арттыр" },
    47: { type:"circuit", title:"🔬 Лаб 47: Сборка электрической цепи", titleEn:"🔬 Lab 47: Assembling the electric circuit", titleKk:"🔬 47-зертхана: Электр тізбегін құрастыру",
        desc:"Собери цепь постоянного тока: установи батарею, ключ, реостат и лампу, соедини клеммы проводами в один контур и замкни ключ. Только тогда пойдёт ток и зажжётся лампа.",
        descEn:"Assemble a DC circuit: place the battery, switch, rheostat and lamp, connect their terminals with wires in one loop and close the switch. Only then will current flow and light the lamp.",
        descKk:"Тұрақты ток тізбегін құрастыр: батареяны, кілтті, реостатты және шамды орнатып, қысқыштарды сымдармен бір тізбекке қос және кілтті тұйықта. Сонда ғана ток жүріп, шам жанады.",
        hint:"Перетаскивай детали в контуры, тяни провода между клеммами; нажатие на провод удаляет его", hintEn:"Drag parts into the outlines and wires between terminals; click a wire to remove it", hintKk:"Бөлшектерді контурға сүйре, қысқыштар арасына сым тарт; сымды бассаң, ол өшіріледі" },
    48: { type:"slider", title:"🔬 Лаб 48: Закон Ома — сила тока от напряжения", titleEn:"🔬 Lab 48: Ohm's law — current vs voltage", titleKk:"🔬 48-зертхана: Ом заңы — ток күшінің кернеуге тәуелділігі",
        desc:"I = U/R. В опыте при напряжении U ток достиг I ≈ 1,5 А. Подбери U и сопротивление R так, чтобы расчёт дал ровно 1,5 А.",
        descEn:"I = U/R. In the experiment the current reached I ≈ 1.5 A. Pick U and the resistance R so that the calculation gives exactly 1.5 A.",
        descKk:"I = U/R. Тәжірибеде U кернеуінде ток I ≈ 1,5 А болды. Есеп дәл 1,5 А беретіндей U мен R кедергісін таңда.",
        sliders:[{id:"U", label:"Напряжение U, В", labelEn:"Voltage U, V", labelKk:"Кернеу U, В", min:1, max:12, step:1, val:3},
                 {id:"R", label:"Сопротивление R, Ом", labelEn:"Resistance R, Ω", labelKk:"Кедергі R, Ом", min:2, max:10, step:1, val:6}],
        formula:(v)=>v.U/v.R, target:1.5, tol:0.02, unit:"А", unitEn:"A", formulaStr:"I = U / R",
        hint:"Чтобы увеличить ток — подними U или уменьши R", hintEn:"To raise the current, increase U or reduce R", hintKk:"Токты арттыру үшін U-ны көтер немесе R-ді азайт" },
    49: { type:"slider", title:"🔬 Лаб 49: Последовательное соединение", titleEn:"🔬 Lab 49: Series connection", titleKk:"🔬 49-зертхана: Тізбектей жалғау",
        desc:"При последовательном соединении R = R₁ + R₂ + R₃. Подбери три сопротивления так, чтобы общее сопротивление стало 17 Ом.",
        descEn:"In a series connection R = R₁ + R₂ + R₃. Pick three resistances so that the total is 17 Ω.",
        descKk:"Тізбектей жалғағанда R = R₁ + R₂ + R₃. Жалпы кедергі 17 Ом болатындай үш кедергі таңда.",
        sliders:[{id:"r1", label:"R₁, Ом", labelEn:"R₁, Ω", labelKk:"R₁, Ом", min:2, max:10, step:1, val:4},
                 {id:"r2", label:"R₂, Ом", labelEn:"R₂, Ω", labelKk:"R₂, Ом", min:2, max:10, step:1, val:5},
                 {id:"r3", label:"R₃, Ом", labelEn:"R₃, Ω", labelKk:"R₃, Ом", min:2, max:10, step:1, val:6}],
        formula:(v)=>v.r1+v.r2+v.r3, target:17, tol:0.1, unit:"Ом", unitEn:"Ω", formulaStr:"R = R₁ + R₂ + R₃",
        hint:"Общее сопротивление — сумма всех трёх", hintEn:"The total is the sum of all three", hintKk:"Жалпы кедергі — үшеуінің қосындысы" },
    50: { type:"slider", title:"🔬 Лаб 50: Параллельное соединение", titleEn:"🔬 Lab 50: Parallel connection", titleKk:"🔬 50-зертхана: Параллель жалғау",
        desc:"При параллельном соединении 1/R = 1/R₁ + 1/R₂, то есть R = R₁·R₂/(R₁+R₂). Получи общее сопротивление 2,4 Ом.",
        descEn:"In a parallel connection 1/R = 1/R₁ + 1/R₂, i.e. R = R₁·R₂/(R₁+R₂). Obtain a total resistance of 2.4 Ω.",
        descKk:"Параллель жалғағанда 1/R = 1/R₁ + 1/R₂, яғни R = R₁·R₂/(R₁+R₂). Жалпы кедергі 2,4 Ом болсын.",
        sliders:[{id:"r1", label:"R₁, Ом", labelEn:"R₁, Ω", labelKk:"R₁, Ом", min:2, max:12, step:1, val:4},
                 {id:"r2", label:"R₂, Ом", labelEn:"R₂, Ω", labelKk:"R₂, Ом", min:2, max:12, step:1, val:8}],
        formula:(v)=>(v.r1*v.r2)/(v.r1+v.r2), target:2.4, tol:0.05, unit:"Ом", unitEn:"Ω", formulaStr:"R = R₁·R₂ / (R₁+R₂)",
        hint:"Параллельное сопротивление всегда меньше меньшего из R₁ и R₂", hintEn:"A parallel resistance is always smaller than the smaller of R₁ and R₂", hintKk:"Параллель кедергі әрқашан R₁ мен R₂-нің кішісінен де аз" },
    51: { type:"slider", title:"🔬 Лаб 51: Работа и мощность тока", titleEn:"🔬 Lab 51: Work and power of current", titleKk:"🔬 51-зертхана: Токтың жұмысы мен қуаты",
        desc:"Мощность лампы P = U·I. Подбери напряжение и силу тока так, чтобы мощность составила 36 Вт — номинальный режим лампы.",
        descEn:"Lamp power P = U·I. Pick voltage and current so that the power is 36 W — the lamp's rated regime.",
        descKk:"Шам қуаты P = U·I. Қуат 36 Вт болатындай кернеу мен ток күшін таңда — шамның номиналды режимі.",
        sliders:[{id:"U", label:"Напряжение U, В", labelEn:"Voltage U, V", labelKk:"Кернеу U, В", min:2, max:24, step:1, val:12},
                 {id:"I", label:"Сила тока I, А", labelEn:"Current I, A", labelKk:"Ток күші I, А", min:0.5, max:4, step:0.5, val:1}],
        formula:(v)=>v.U*v.I, target:36, tol:0.1, unit:"Вт", unitEn:"W", formulaStr:"P = U · I",
        hint:"P = напряжение × ток", hintEn:"P = voltage × current", hintKk:"P = кернеу × ток" },
    52: { type:"slider", title:"🔬 Лаб 52: Магнитное поле — сила Ампера", titleEn:"🔬 Lab 52: Magnetic field — Ampère force", titleKk:"🔬 52-зертхана: Магнит өрісі — Ампер күші",
        desc:"Проводник с током в магнитном поле: F = B·I·L. Получи силу 0,30 Н, как в опыте с постоянным магнитом.",
        descEn:"A current-carrying wire in a magnetic field: F = B·I·L. Obtain a force of 0.30 N, as in the permanent-magnet experiment.",
        descKk:"Магнит өрісіндегі ток өткізгіш: F = B·I·L. Тұрақты магнитпен тәжірибедегідей 0,30 Н күш ал.",
        sliders:[{id:"B", label:"Индукция B, Тл", labelEn:"Induction B, T", labelKk:"Индукция B, Тл", min:0.05, max:0.5, step:0.05, val:0.1},
                 {id:"I", label:"Сила тока I, А", labelEn:"Current I, A", labelKk:"Ток күші I, А", min:1, max:5, step:0.5, val:2},
                 {id:"L", label:"Длина проводника L, м", labelEn:"Wire length L, m", labelKk:"Өткізгіш ұзындығы L, м", min:0.1, max:0.5, step:0.05, val:0.2}],
        formula:(v)=>v.B*v.I*v.L, target:0.30, tol:0.01, unit:"Н", unitEn:"N", formulaStr:"F = B · I · L",
        hint:"F растёт с каждым из трёх множителей", hintEn:"F grows with each of the three factors", hintKk:"F үш көбейткіштің әрқайсысымен өседі" },
    53: { type:"slider", title:"🔬 Лаб 53: Электромагнит — индукция катушки", titleEn:"🔬 Lab 53: Electromagnet — coil induction", titleKk:"🔬 53-зертхана: Электромагнит — катушка индукциясы",
        desc:"Магнитная индукция катушки B = μ₀·N·I/L, μ₀ = 4π·10⁻⁷ Гн/м. Получи поле 3,0 мТл, чтобы электромагнит удержал скрепку.",
        descEn:"Coil flux density B = μ₀·N·I/L, μ₀ = 4π·10⁻⁷ H/m. Reach 3.0 mT so the electromagnet holds the paper clip.",
        descKk:"Катушканың магнит индукциясы B = μ₀·N·I/L, μ₀ = 4π·10⁻⁷ Гн/м. Электромагнит қағаз қыстырғышты ұстауы үшін 3,0 мТл өріс ал.",
        sliders:[{id:"N", label:"Витки N", labelEn:"Turns N", labelKk:"Орам саны N", min:100, max:600, step:50, val:200},
                 {id:"I", label:"Ток I, А", labelEn:"Current I, A", labelKk:"Ток I, А", min:0.5, max:3, step:0.5, val:1},
                 {id:"L", label:"Длина катушки L, м", labelEn:"Coil length L, m", labelKk:"Катушка ұзындығы L, м", min:0.1, max:0.5, step:0.05, val:0.2}],
        formula:(v)=>(4*Math.PI*1e-7*v.N*v.I/v.L)*1000, target:3.0, tol:0.05, unit:"мТл", unitEn:"mT", formulaStr:"B = μ₀·N·I / L",
        hint:"Больше витков и тока — сильнее поле; короче катушка — тоже сильнее", hintEn:"More turns and current give a stronger field; a shorter coil does too", hintKk:"Орам мен ток көп болса — өріс күшті; катушка қысқа болса да күшті" },
    54: { type:"slider", title:"🔬 Лаб 54: Показатель преломления стекла", titleEn:"🔬 Lab 54: Refractive index of glass", titleKk:"🔬 54-зертхана: Әйнектің сыну көрсеткіші",
        desc:"Свет переходит из воздуха в стекло: n = sin α / sin β. Подбери углы так, чтобы показатель преломления вышел 1,50.",
        descEn:"Light passes from air into glass: n = sin α / sin β. Pick the angles so that the refractive index is 1.50.",
        descKk:"Жарық ауадан әйнекке өтеді: n = sin α / sin β. Сыну көрсеткіші 1,50 болатындай бұрыштарды таңда.",
        sliders:[{id:"a", label:"Угол падения α, °", labelEn:"Angle of incidence α, °", labelKk:"Түсу бұрышы α, °", min:30, max:70, step:5, val:40},
                 {id:"b", label:"Угол преломления β, °", labelEn:"Angle of refraction β, °", labelKk:"Сыну бұрышы β, °", min:15, max:45, step:5, val:30}],
        formula:(v)=>Math.sin(v.a*Math.PI/180)/Math.sin(v.b*Math.PI/180), target:1.50, tol:0.03, unit:"", formulaStr:"n = sin α / sin β",
        hint:"Чем меньше угол преломления при том же α — тем больше n", hintEn:"The smaller the refraction angle for the same α, the larger n", hintKk:"Сол α кезінде сыну бұрышы неғұрлым аз болса, n соғұрлым үлкен" },
    55: { type:"slider", title:"🔬 Лаб 55: Фокусное расстояние линзы", titleEn:"🔬 Lab 55: Focal length of a thin lens", titleKk:"🔬 55-зертхана: Жұқа линзаның фокус аралығы",
        desc:"Формула тонкой линзы 1/F = 1/d + 1/o. Подбери расстояние до предмета d и до изображения o так, чтобы фокусное расстояние стало 15 см.",
        descEn:"Thin-lens equation 1/F = 1/d + 1/o. Pick the object distance d and image distance o so that the focal length is 15 cm.",
        descKk:"Жұқа линза формуласы 1/F = 1/d + 1/o. Фокус аралығы 15 см болатындай d және o қашықтықтарын таңда.",
        sliders:[{id:"d", label:"Расстояние d, см", labelEn:"Distance d, cm", labelKk:"Қашықтық d, см", min:10, max:60, step:5, val:15},
                 {id:"o", label:"Расстояние o, см", labelEn:"Distance o, cm", labelKk:"Қашықтық o, см", min:10, max:60, step:5, val:20}],
        formula:(v)=>(v.d*v.o)/(v.d+v.o), target:15, tol:0.5, unit:"см", unitEn:"cm", formulaStr:"1/F = 1/d + 1/o",
        hint:"F всегда меньше половины наименьшего из d и o", hintEn:"F is always less than half of the smaller of d and o", hintKk:"F әрқашан d мен o-ның кішісінің жартысынан аз" }
};
