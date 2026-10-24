/* ===== Контент 9 класса: уровни, теория, конспект, эксперименты, эпизоды ===== */
window.CURRENT_GRADE = 9;
window.GRADE_META = {
  grade: 9,
  code: "9",
  titleLine2: {
    ru: "ОРБИТА-9 — ЩИТ ЗЕМЛИ · 9 КЛАСС",
    kk: "ОРБИТА-9 — ЖЕР ҚАЛҚАНЫ · 9-СЫНЫП",
    en: "ORBIT-9 — EARTH SHIELD · GRADE 9"
  },
  subtitle: {
    ru: "Защити Землю от космических угроз знаниями физики 9 класса",
    kk: "9-сынып физика білімімен Жерді ғарыштық қауіптерден қорға",
    en: "Defend Earth from cosmic threats with 9th-grade physics knowledge"
  },
  pdfFiles: {
    ru: { url: "assets/pdf/grade9-ru.pdf", filename: "Физика_9_класс_Конспект_РУС.pdf" },
    kk: { url: "assets/pdf/grade9-kk.pdf", filename: "Физика_9_сынып_Конспект_ҚАЗ.pdf" },
    en: { url: "assets/pdf/grade9-en.pdf", filename: "Physics_Grade9_Notes_ENG.pdf" }
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
    "mechanic": "classic",
    "boss": false,
    "chapter": "bonus",
    "kind": "safety",
    "desc": "Допуск к полётам: правила безопасной работы в кабинете физики"
  },
  {
    "id": 2,
    "topics": [
      "p1"
    ],
    "asteroidInterval": 5961,
    "asteroidSpeed": 0.82,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p1",
    "kind": "lesson",
    "desc": "кинематика, материальная точка, система отсчёта, относительность движения"
  },
  {
    "id": 3,
    "topics": [
      "p2"
    ],
    "asteroidInterval": 5923,
    "asteroidSpeed": 0.85,
    "cityHealth": 100,
    "shieldCapacity": 51,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p2",
    "kind": "lesson",
    "desc": "сложение векторов, проекции на оси координат"
  },
  {
    "id": 4,
    "topics": [
      "p3"
    ],
    "asteroidInterval": 5885,
    "asteroidSpeed": 0.87,
    "cityHealth": 100,
    "shieldCapacity": 51,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p3",
    "kind": "lesson",
    "desc": "мгновенная скорость, ускорение, графики движения"
  },
  {
    "id": 5,
    "topics": [
      "p4"
    ],
    "asteroidInterval": 5846,
    "asteroidSpeed": 0.9,
    "cityHealth": 100,
    "shieldCapacity": 52,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p4",
    "kind": "lesson",
    "desc": "формулы скорости, перемещения и координаты при РУД"
  },
  {
    "id": 6,
    "topics": [
      "p5"
    ],
    "asteroidInterval": 5808,
    "asteroidSpeed": 0.92,
    "cityHealth": 100,
    "shieldCapacity": 53,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p5",
    "kind": "lesson",
    "desc": "опыт Галилея, ускорение свободного падения, падение тел"
  },
  {
    "id": 7,
    "topics": [
      "p6"
    ],
    "asteroidInterval": 5770,
    "asteroidSpeed": 0.95,
    "cityHealth": 100,
    "shieldCapacity": 53,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p6",
    "kind": "lesson",
    "desc": "период, частота, линейная и угловая скорости"
  },
  {
    "id": 8,
    "topics": [
      "p7"
    ],
    "asteroidInterval": 5731,
    "asteroidSpeed": 0.97,
    "cityHealth": 100,
    "shieldCapacity": 54,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": true,
    "chapter": "p7",
    "kind": "lesson",
    "desc": "ускорение при движении по окружности"
  },
  {
    "id": 9,
    "topics": [
      "p8"
    ],
    "asteroidInterval": 5693,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "orbital",
    "boss": false,
    "chapter": "p8",
    "kind": "lesson",
    "desc": "галактики, созвездия, звёздные величины, световой год"
  },
  {
    "id": 10,
    "topics": [
      "p9"
    ],
    "asteroidInterval": 5655,
    "asteroidSpeed": 1.02,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "orbital",
    "boss": false,
    "chapter": "p9",
    "kind": "lesson",
    "desc": "небесная сфера, склонение, прямое восхождение"
  },
  {
    "id": 11,
    "topics": [
      "p10"
    ],
    "asteroidInterval": 5617,
    "asteroidSpeed": 1.04,
    "cityHealth": 100,
    "shieldCapacity": 56,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "orbital",
    "boss": false,
    "chapter": "p10",
    "kind": "lesson",
    "desc": "кульминации, местное, поясное и всемирное время"
  },
  {
    "id": 12,
    "topics": [
      "p11"
    ],
    "asteroidInterval": 5578,
    "asteroidSpeed": 1.07,
    "cityHealth": 100,
    "shieldCapacity": 57,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "orbital",
    "boss": false,
    "chapter": "p11",
    "kind": "lesson",
    "desc": "Коперник, законы Кеплера, эллиптические орбиты"
  },
  {
    "id": 13,
    "topics": [
      "p12"
    ],
    "asteroidInterval": 5540,
    "asteroidSpeed": 1.09,
    "cityHealth": 100,
    "shieldCapacity": 57,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "orbital",
    "boss": true,
    "chapter": "p12",
    "kind": "lesson",
    "desc": "параллактическое смещение, расстояния до небесных тел"
  },
  {
    "id": 14,
    "topics": [
      "p13"
    ],
    "asteroidInterval": 5502,
    "asteroidSpeed": 1.12,
    "cityHealth": 100,
    "shieldCapacity": 58,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": false,
    "chapter": "p13",
    "kind": "lesson",
    "desc": "инерция, инерциальные системы отсчёта"
  },
  {
    "id": 15,
    "topics": [
      "p14"
    ],
    "asteroidInterval": 5463,
    "asteroidSpeed": 1.14,
    "cityHealth": 100,
    "shieldCapacity": 58,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": false,
    "chapter": "p14",
    "kind": "lesson",
    "desc": "сила тяжести, упругости, трения"
  },
  {
    "id": 16,
    "topics": [
      "p15"
    ],
    "asteroidInterval": 5425,
    "asteroidSpeed": 1.17,
    "cityHealth": 100,
    "shieldCapacity": 59,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": false,
    "chapter": "p15",
    "kind": "lesson",
    "desc": "основной закон динамики, масса как мера инертности"
  },
  {
    "id": 17,
    "topics": [
      "p16"
    ],
    "asteroidInterval": 5387,
    "asteroidSpeed": 1.19,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": false,
    "chapter": "p16",
    "kind": "lesson",
    "desc": "действие и противодействие, вес и реакция опоры"
  },
  {
    "id": 18,
    "topics": [
      "p17"
    ],
    "asteroidInterval": 5348,
    "asteroidSpeed": 1.22,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": false,
    "chapter": "p17",
    "kind": "lesson",
    "desc": "гравитационная постоянная, закон обратных квадратов"
  },
  {
    "id": 19,
    "topics": [
      "p18"
    ],
    "asteroidInterval": 5310,
    "asteroidSpeed": 1.24,
    "cityHealth": 100,
    "shieldCapacity": 61,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": false,
    "chapter": "p18",
    "kind": "lesson",
    "desc": "перегрузки, невесомость, вес в движущемся лифте"
  },
  {
    "id": 20,
    "topics": [
      "p19"
    ],
    "asteroidInterval": 5272,
    "asteroidSpeed": 1.26,
    "cityHealth": 100,
    "shieldCapacity": 62,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "gravity",
    "boss": true,
    "chapter": "p19",
    "kind": "lesson",
    "desc": "баллистика, первая космическая скорость, спутники"
  },
  {
    "id": 21,
    "topics": [
      "p20"
    ],
    "asteroidInterval": 5234,
    "asteroidSpeed": 1.29,
    "cityHealth": 100,
    "shieldCapacity": 62,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "energy",
    "boss": false,
    "chapter": "p20",
    "kind": "lesson",
    "desc": "импульс тела и силы, замкнутая система"
  },
  {
    "id": 22,
    "topics": [
      "p21"
    ],
    "asteroidInterval": 5195,
    "asteroidSpeed": 1.31,
    "cityHealth": 100,
    "shieldCapacity": 63,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "energy",
    "boss": false,
    "chapter": "p21",
    "kind": "lesson",
    "desc": "ракеты, Циолковский, многоступенчатость"
  },
  {
    "id": 23,
    "topics": [
      "p22"
    ],
    "asteroidInterval": 5157,
    "asteroidSpeed": 1.34,
    "cityHealth": 100,
    "shieldCapacity": 64,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "energy",
    "boss": false,
    "chapter": "p22",
    "kind": "lesson",
    "desc": "работа, кинетическая и потенциальная энергия, мощность"
  },
  {
    "id": 24,
    "topics": [
      "p23"
    ],
    "asteroidInterval": 5119,
    "asteroidSpeed": 1.36,
    "cityHealth": 100,
    "shieldCapacity": 64,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "energy",
    "boss": true,
    "chapter": "p23",
    "kind": "lesson",
    "desc": "полная механическая энергия, превращения энергии"
  },
  {
    "id": 25,
    "topics": [
      "p24"
    ],
    "asteroidInterval": 5080,
    "asteroidSpeed": 1.39,
    "cityHealth": 100,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p24",
    "kind": "lesson",
    "desc": "амплитуда, период, частота, колебательные системы"
  },
  {
    "id": 26,
    "topics": [
      "p25"
    ],
    "asteroidInterval": 5042,
    "asteroidSpeed": 1.41,
    "cityHealth": 100,
    "shieldCapacity": 65,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p25",
    "kind": "lesson",
    "desc": "уравнение гармонических колебаний, энергия колебаний"
  },
  {
    "id": 27,
    "topics": [
      "p26"
    ],
    "asteroidInterval": 5004,
    "asteroidSpeed": 1.44,
    "cityHealth": 100,
    "shieldCapacity": 66,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p26",
    "kind": "lesson",
    "desc": "формулы периодов маятников"
  },
  {
    "id": 28,
    "topics": [
      "p27"
    ],
    "asteroidInterval": 4965,
    "asteroidSpeed": 1.46,
    "cityHealth": 100,
    "shieldCapacity": 67,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p27",
    "kind": "lesson",
    "desc": "затухание, резонанс: польза и вред"
  },
  {
    "id": 29,
    "topics": [
      "p28"
    ],
    "asteroidInterval": 4927,
    "asteroidSpeed": 1.49,
    "cityHealth": 100,
    "shieldCapacity": 67,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p28",
    "kind": "lesson",
    "desc": "колебательный контур, формула Томсона, переменный ток"
  },
  {
    "id": 30,
    "topics": [
      "p29"
    ],
    "asteroidInterval": 4889,
    "asteroidSpeed": 1.51,
    "cityHealth": 100,
    "shieldCapacity": 68,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p29",
    "kind": "lesson",
    "desc": "продольные и поперечные волны, длина волны"
  },
  {
    "id": 31,
    "topics": [
      "p30"
    ],
    "asteroidInterval": 4851,
    "asteroidSpeed": 1.53,
    "cityHealth": 100,
    "shieldCapacity": 69,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": false,
    "chapter": "p30",
    "kind": "lesson",
    "desc": "скорость звука, высота и громкость, ультразвук, эхо"
  },
  {
    "id": 32,
    "topics": [
      "p31"
    ],
    "asteroidInterval": 4812,
    "asteroidSpeed": 1.56,
    "cityHealth": 100,
    "shieldCapacity": 69,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "resonance",
    "boss": true,
    "chapter": "p31",
    "kind": "lesson",
    "desc": "Максвелл, Герц, шкала электромагнитных волн, дисперсия"
  },
  {
    "id": 33,
    "topics": [
      "p32"
    ],
    "asteroidInterval": 4774,
    "asteroidSpeed": 1.58,
    "cityHealth": 100,
    "shieldCapacity": 70,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "radiation",
    "boss": false,
    "chapter": "p32",
    "kind": "lesson",
    "desc": "излучение и поглощение, абсолютно чёрное тело"
  },
  {
    "id": 34,
    "topics": [
      "p33"
    ],
    "asteroidInterval": 4736,
    "asteroidSpeed": 1.61,
    "cityHealth": 100,
    "shieldCapacity": 71,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "radiation",
    "boss": false,
    "chapter": "p33",
    "kind": "lesson",
    "desc": "кванты, фотоны, уравнение Эйнштейна для фотоэффекта"
  },
  {
    "id": 35,
    "topics": [
      "p34"
    ],
    "asteroidInterval": 4697,
    "asteroidSpeed": 1.63,
    "cityHealth": 100,
    "shieldCapacity": 71,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "radiation",
    "boss": false,
    "chapter": "p34",
    "kind": "lesson",
    "desc": "рентгеновская трубка, проникающая способность"
  },
  {
    "id": 36,
    "topics": [
      "p35"
    ],
    "asteroidInterval": 4659,
    "asteroidSpeed": 1.66,
    "cityHealth": 100,
    "shieldCapacity": 72,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "radiation",
    "boss": false,
    "chapter": "p35",
    "kind": "lesson",
    "desc": "Беккерель, Кюри, альфа-, бета-, гамма-лучи"
  },
  {
    "id": 37,
    "topics": [
      "p36"
    ],
    "asteroidInterval": 4621,
    "asteroidSpeed": 1.68,
    "cityHealth": 100,
    "shieldCapacity": 72,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "radiation",
    "boss": true,
    "chapter": "p36",
    "kind": "lesson",
    "desc": "планетарная модель атома, спектры, спектральный анализ"
  },
  {
    "id": 38,
    "topics": [
      "p37"
    ],
    "asteroidInterval": 4582,
    "asteroidSpeed": 1.71,
    "cityHealth": 100,
    "shieldCapacity": 73,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "fusion",
    "boss": false,
    "chapter": "p37",
    "kind": "lesson",
    "desc": "протоны и нейтроны, изотопы, дефект масс"
  },
  {
    "id": 39,
    "topics": [
      "p38"
    ],
    "asteroidInterval": 4544,
    "asteroidSpeed": 1.73,
    "cityHealth": 100,
    "shieldCapacity": 74,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "fusion",
    "boss": false,
    "chapter": "p38",
    "kind": "lesson",
    "desc": "законы сохранения в реакциях, период полураспада"
  },
  {
    "id": 40,
    "topics": [
      "p39"
    ],
    "asteroidInterval": 4506,
    "asteroidSpeed": 1.75,
    "cityHealth": 100,
    "shieldCapacity": 74,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "fusion",
    "boss": false,
    "chapter": "p39",
    "kind": "lesson",
    "desc": "цепная реакция, коэффициент размножения, АЭС"
  },
  {
    "id": 41,
    "topics": [
      "p40"
    ],
    "asteroidInterval": 4468,
    "asteroidSpeed": 1.78,
    "cityHealth": 100,
    "shieldCapacity": 75,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "fusion",
    "boss": false,
    "chapter": "p40",
    "kind": "lesson",
    "desc": "термоядерный синтез, плазма, радиоизотопы"
  },
  {
    "id": 42,
    "topics": [
      "p41"
    ],
    "asteroidInterval": 4429,
    "asteroidSpeed": 1.8,
    "cityHealth": 100,
    "shieldCapacity": 76,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "fusion",
    "boss": true,
    "chapter": "p41",
    "kind": "lesson",
    "desc": "частицы и античастицы, аннигиляция, Большой взрыв"
  },
  {
    "id": 43,
    "topics": [
      "p42"
    ],
    "asteroidInterval": 4391,
    "asteroidSpeed": 1.83,
    "cityHealth": 100,
    "shieldCapacity": 76,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": false,
    "chapter": "p42",
    "kind": "lesson",
    "desc": "физическая картина мира, место Земли во Вселенной"
  },
  {
    "id": 44,
    "topics": [
      "p43"
    ],
    "asteroidInterval": 4353,
    "asteroidSpeed": 1.85,
    "cityHealth": 100,
    "shieldCapacity": 77,
    "tasksToWin": 20,
    "tasksTotal": 20,
    "energySpawnRate": 3600,
    "mechanic": "classic",
    "boss": true,
    "chapter": "p43",
    "kind": "lesson",
    "desc": "парниковый эффект, радиация, энергосбережение"
  },
  {
    "id": 45,
    "topics": [
      "lab1"
    ],
    "asteroidInterval": 4314,
    "asteroidSpeed": 1.88,
    "cityHealth": 100,
    "shieldCapacity": 78,
    "tasksToWin": 8,
    "tasksTotal": 20,
    "energySpawnRate": 3400,
    "mechanic": "lab",
    "boss": false,
    "chapter": "lab",
    "kind": "lab1",
    "desc": "шарик скатывается по наклонному желобу: путь, время, a = 2s/t²"
  },
  {
    "id": 46,
    "topics": [
      "lab2"
    ],
    "asteroidInterval": 4276,
    "asteroidSpeed": 1.9,
    "cityHealth": 100,
    "shieldCapacity": 78,
    "tasksToWin": 8,
    "tasksTotal": 20,
    "energySpawnRate": 3400,
    "mechanic": "lab",
    "boss": false,
    "chapter": "lab",
    "kind": "lab2",
    "desc": "начальная скорость шарика по дальности полёта со стола"
  },
  {
    "id": 47,
    "topics": [
      "lab3"
    ],
    "asteroidInterval": 4238,
    "asteroidSpeed": 1.93,
    "cityHealth": 100,
    "shieldCapacity": 79,
    "tasksToWin": 8,
    "tasksTotal": 20,
    "energySpawnRate": 3400,
    "mechanic": "lab",
    "boss": false,
    "chapter": "lab",
    "kind": "lab3",
    "desc": "измерение g через период математического маятника"
  },
  {
    "id": 48,
    "topics": [
      "lab4"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1.95,
    "cityHealth": 100,
    "shieldCapacity": 80,
    "tasksToWin": 8,
    "tasksTotal": 20,
    "energySpawnRate": 3400,
    "mechanic": "lab",
    "boss": true,
    "chapter": "lab",
    "kind": "lab4",
    "desc": "скорость волн на поверхности воды в кювете"
  }
];
const LEVEL_DESC_TR = {
  "1": {
    "ru": "Допуск к полётам: правила безопасной работы в кабинете физики",
    "en": "Flight clearance: safety rules for working in the physics classroom",
    "kk": "Ұшуға рұқсат: физика кабинетіндегі қауіпсіз жұмыс ережелері"
  },
  "2": {
    "ru": "кинематика, материальная точка, система отсчёта, относительность движения",
    "en": "kinematics, material point, reference frame, relativity of motion",
    "kk": "кинематика, материалдық нүкте, есеп жүйесі, қозғалыстың салыстырмалылығы"
  },
  "3": {
    "ru": "сложение векторов, проекции на оси координат",
    "en": "vector addition, projections on coordinate axes",
    "kk": "векторларды қосу, координат осьтеріне проекциясы"
  },
  "4": {
    "ru": "мгновенная скорость, ускорение, графики движения",
    "en": "instantaneous speed, acceleration, motion graphs",
    "kk": "жедел жылдамдық, үдеу, қозғалыс графиктері"
  },
  "5": {
    "ru": "формулы скорости, перемещения и координаты при РУД",
    "en": "formulas for speed, displacement, and coordinate in uniformly accelerated motion",
    "kk": "Жылдамдық, орын ауыстыру және координата формулалары РУД кезінде"
  },
  "6": {
    "ru": "опыт Галилея, ускорение свободного падения, падение тел",
    "en": "Galileo's experiment, acceleration due to gravity, falling bodies",
    "kk": "Галилей тәжірибесі, еркін түсу үдеуі, денелердің түсуі"
  },
  "7": {
    "ru": "период, частота, линейная и угловая скорости",
    "en": "period, frequency, linear and angular velocities",
    "kk": "период, жиілік, сызықтық және бұрыштық жылдамдықтар"
  },
  "8": {
    "ru": "ускорение при движении по окружности",
    "en": "acceleration in circular motion",
    "kk": "шеңбер бойымен қозғалғандағы үдеу"
  },
  "9": {
    "ru": "галактики, созвездия, звёздные величины, световой год",
    "en": "galaxies, constellations, stellar magnitudes, light year",
    "kk": "галактикалар, жұлдыздық топтар, жұлдыздардың шамалары, жарық жылы"
  },
  "10": {
    "ru": "небесная сфера, склонение, прямое восхождение",
    "en": "celestial sphere, declination, right ascension",
    "kk": "аспан сферасы, көлбеу, тура көтерілу"
  },
  "11": {
    "ru": "кульминации, местное, поясное и всемирное время",
    "en": "culminations, local, standard and universal time",
    "kk": "кульминациялар, жергілікті, белдік және ғаламдық уақыт"
  },
  "12": {
    "ru": "Коперник, законы Кеплера, эллиптические орбиты",
    "en": "Copernicus, Kepler's laws, elliptical orbits",
    "kk": "Коперник, Кеплер заңдары, эллипстік орбиталар"
  },
  "13": {
    "ru": "параллактическое смещение, расстояния до небесных тел",
    "en": "parallax shift, distances to celestial bodies",
    "kk": "параллактикалық ығыс, аспан денелеріне қашықтықтар"
  },
  "14": {
    "ru": "инерция, инерциальные системы отсчёта",
    "en": "inertia, inertial reference frames",
    "kk": "инерция, инерциялық есеп жүйелері"
  },
  "15": {
    "ru": "сила тяжести, упругости, трения",
    "en": "gravitational, elastic, frictional forces",
    "kk": "гравитациялық күш, серпімділік, үйкеліс"
  },
  "16": {
    "ru": "основной закон динамики, масса как мера инертности",
    "en": "fundamental law of dynamics, mass as a measure of inertia",
    "kk": "динамиканың негізгі заңы, инерттіліктің өлшемі ретінде масса"
  },
  "17": {
    "ru": "действие и противодействие, вес и реакция опоры",
    "en": "action and counteraction, weight and reaction of a support",
    "kk": "әрекет және қарсы әрекет, тірек салмағы мен реакциясы"
  },
  "18": {
    "ru": "гравитационная постоянная, закон обратных квадратов",
    "en": "gravitational constant, inverse-square law",
    "kk": "гравитациялық тұрақты, кері квадрат заңы"
  },
  "19": {
    "ru": "перегрузки, невесомость, вес в движущемся лифте",
    "en": "overloads, weightlessness, weight in a moving elevator",
    "kk": "артық жүктемелер, салмақсыздық, қозғалып жатқан лифттегі салмақ"
  },
  "20": {
    "ru": "баллистика, первая космическая скорость, спутники",
    "en": "ballistics, first cosmic velocity, satellites",
    "kk": "баллистика, бірінші космостық жылдамдық, спутниктер"
  },
  "21": {
    "ru": "импульс тела и силы, замкнутая система",
    "en": "momentum of a body and forces, closed system",
    "kk": "дененің импульсі және күш, жабық жүйе"
  },
  "22": {
    "ru": "ракеты, Циолковский, многоступенчатость",
    "en": "rockets, Tsiolkovsky, multistaging",
    "kk": "зымырандар, Циолковский, көп сатылы болу"
  },
  "23": {
    "ru": "работа, кинетическая и потенциальная энергия, мощность",
    "en": "work, kinetic and potential energy, power",
    "kk": "жұмыс, кинетикалық және потенциалдық энергия, қуат"
  },
  "24": {
    "ru": "полная механическая энергия, превращения энергии",
    "en": "total mechanical energy, energy transformations",
    "kk": "толық механикалық энергия, энергияның түрленуі"
  },
  "25": {
    "ru": "амплитуда, период, частота, колебательные системы",
    "en": "amplitude, period, frequency, oscillatory systems",
    "kk": "амплитуда, период, жиілік, тербелмелі жүйелер"
  },
  "26": {
    "ru": "уравнение гармонических колебаний, энергия колебаний",
    "en": "equation of harmonic oscillations, oscillation energy",
    "kk": "гармоникалық тербелістер теңдеуі, тербелістер энергиясы"
  },
  "27": {
    "ru": "формулы периодов маятников",
    "en": "pendulum period formulas",
    "kk": "Маятниктің периоды формулалары"
  },
  "28": {
    "ru": "затухание, резонанс: польза и вред",
    "en": "damping, resonance: benefit and harm",
    "kk": "сөну, резонанс: пайдасы мен зияны"
  },
  "29": {
    "ru": "колебательный контур, формула Томсона, переменный ток",
    "en": "oscillatory circuit, Thomson's formula, alternating current",
    "kk": "компьютерлік контур, Томсон формуласы, айнымалы ток"
  },
  "30": {
    "ru": "продольные и поперечные волны, длина волны",
    "en": "longitudinal and transverse waves, wavelength",
    "kk": "созылмалы және көлденең толқындар, толқын ұзындығы"
  },
  "31": {
    "ru": "скорость звука, высота и громкость, ультразвук, эхо",
    "en": "speed of sound, pitch and loudness, ultrasound, echo",
    "kk": "дыбыс жылдамдығы, биіктік және дыбыс көлемі, ультрадыбыс, эхо"
  },
  "32": {
    "ru": "Максвелл, Герц, шкала электромагнитных волн, дисперсия",
    "en": "Maxwell, Hertz, electromagnetic wave scale, dispersion",
    "kk": "Максвелл, Герц, электромагниттік толқындардың шкаласы, дисперсия"
  },
  "33": {
    "ru": "излучение и поглощение, абсолютно чёрное тело",
    "en": "radiation and absorption, absolute black body",
    "kk": "сәулелену және сіңу, толық қара дене"
  },
  "34": {
    "ru": "кванты, фотоны, уравнение Эйнштейна для фотоэффекта",
    "en": "quanta, photons, Einstein's equation for the photoelectric effect",
    "kk": "кванттар, фотондар, фотоэффект үшін Эйнштейн теңдеуі"
  },
  "35": {
    "ru": "рентгеновская трубка, проникающая способность",
    "en": "X-ray tube, penetrating ability",
    "kk": "рентгендік түтік, өткізгіштік қабілет"
  },
  "36": {
    "ru": "Беккерель, Кюри, альфа-, бета-, гамма-лучи",
    "en": "Becquerel, Curie, alpha-, beta-, gamma-rays",
    "kk": "Беккерель, Кюри, альфа-, бета-, гамма-сәулелері"
  },
  "37": {
    "ru": "планетарная модель атома, спектры, спектральный анализ",
    "en": "planetary model of the atom, spectra, spectral analysis",
    "kk": "планеталық атом моделі, спектрлер, спектрлік талдау"
  },
  "38": {
    "ru": "протоны и нейтроны, изотопы, дефект масс",
    "en": "protons and neutrons, isotopes, mass defect",
    "kk": "протондар мен нейтрондар, изотоптар, масса дефекті"
  },
  "39": {
    "ru": "законы сохранения в реакциях, период полураспада",
    "en": "conservation laws in reactions, half-life",
    "kk": "реакциядағы энергияның сақталу заңдары, жартылай ыдырау периоды"
  },
  "40": {
    "ru": "цепная реакция, коэффициент размножения, АЭС",
    "en": "chain reaction, multiplication factor, nuclear power plant",
    "kk": "Серіктес реакция, көбейту коэффициенті, АЭС"
  },
  "41": {
    "ru": "термоядерный синтез, плазма, радиоизотопы",
    "en": "thermonuclear fusion, plasma, radioisotopes",
    "kk": "термоядролық синтез, плазма, радиоизотоптар"
  },
  "42": {
    "ru": "частицы и античастицы, аннигиляция, Большой взрыв",
    "en": "particles and antiparticles, annihilation, Big Bang",
    "kk": "Бөлшектер мен антибөлшектер, жою, Үлкен жарылыс"
  },
  "43": {
    "ru": "физическая картина мира, место Земли во Вселенной",
    "en": "physical picture of the world, place of the Earth in the Universe",
    "kk": "физикалық дүниетаным, Жердің Ғаламдағы орны"
  },
  "44": {
    "ru": "парниковый эффект, радиация, энергосбережение",
    "en": "greenhouse effect, radiation, energy saving",
    "kk": "тыныс алу эффекті, радиация, энергияны үнемдеу"
  },
  "45": {
    "ru": "шарик скатывается по наклонному желобу: путь, время, a = 2s/t²",
    "en": "a ball rolls down an inclined groove: distance, time, a = 2s/t²",
    "kk": "Шарик көлбеу арна арқылы сырғиды: жолы, уақыты, a = 2s/t²"
  },
  "46": {
    "ru": "начальная скорость шарика по дальности полёта со стола",
    "en": "initial speed of a ball by flight range from a table",
    "kk": "үстелден ұшқан доптың қашықтықтағы бастапқы жылдамдығы"
  },
  "47": {
    "ru": "измерение g через период математического маятника",
    "en": "measurement of g through the period of a mathematical pendulum",
    "kk": "математикалық маятник периоды арқылы g өлшеу"
  },
  "48": {
    "ru": "скорость волн на поверхности воды в кювете",
    "en": "wave speed on the water surface in a flume",
    "kk": "құбырдағы суда толқындардың жылдамдығы"
  }
};
const STORY_CHAPTERS = [
  {
    "id": "ep0",
    "from": 1,
    "to": 1,
    "title": {
      "ru": "ДОПУСК К ПОЛЁТАМ",
      "en": "FLIGHT CLEARANCE",
      "kk": "ҰШУҒА РҰҚСАТ"
    },
    "intro": {
      "ru": "КВАНТ: «Курсант, прежде чем сесть за штурвал — допуск. Правила безопасности в кабинете физики: это твой первый щит. Пройди инструктаж!»",
      "en": "QUANT: \"Cadet, before you take the helm — clearance. Safety rules in the physics lab: this is your first shield. Go through the briefing!\"",
      "kk": "КВАНТ: «Курсант, штурвалға отырмас бұрын рұқсаттан өту керек. Физика кабинетіндегі қауіпсіздік ережелері — сенің алғашқы қалқаның. Инструктажды орында!»"
    },
    "narrative": {
      "ru": "Год 2087. Над Землёй, на высоте четырёхсот километров, висит «ОРБИТА-9» — орбитальный оборонный щит, о котором младшие поколения знают только из учебников. Полвека назад его построили, чтобы отражать космические угрозы: метеорные потоки, радиационные вспышки, обломки погибших спутников. За десять лет щит отбил семь атак, а потом угрозы прекратились, и щит уснул. Реакторы заглушили, экипажи вернулись на Землю, и только искусственный интеллект КВАНТ остался на посту — в режиме ожидания, с приказом: «Разбудить, если опасность вернётся».\nОпасность вернулась. В ночь на 12 марта обсерватории всех континентов зафиксировали одно и то же: из глубин Солнечной системы к Земле движется каскад угроз. Метеорный рой «Персеиды-Х», за ним — волна магнитных бурь, а следом аномальная радиация неизвестного происхождения. КВАНТ проснулся сам. Его первое сообщение ушло в Академию космической физики: «Щит цел, но у меня нет пилота. Пришлите того, кто понимает физику. У нас мало времени».\nКурсантов в Академии сотни, но симулятор КВАНТА выбрал одного. Тебя. Сегодня утром тебе вручили курсантский комбинезон и сказали: «Летишь на „Орбиту-9“. Захвати учебник физики — он тебе понадобится».",
      "en": "The year is 2087. Four hundred kilometres above the Earth hangs ORBITA-9 — an orbital defence shield that younger generations know only from textbooks. Half a century ago it was built to repel cosmic threats: meteor showers, radiation bursts, debris from dead satellites. For ten years the shield beat back seven attacks, and then the threats stopped, and the shield fell asleep. The reactors were shut down, the crews returned to Earth, and only QUANT — the artificial intelligence created to command the shield — remained on duty, in standby mode, under a single order: “Wake me if the danger returns.”\nThe danger has returned. On the night of March 12, observatories on every continent recorded the same thing: from the depths of the Solar System, a cascade of threats is moving toward Earth. The meteor shower “Perseids-X”, then a wave of magnetic storms, and behind them — anomalous radiation of unknown origin. QUANT woke up on its own. Its first message went to the Academy of Space Physics: “The shield is intact, but I have no pilot. Send someone who understands physics. We have little time.”\nThe Academy has hundreds of cadets, but QUANT's simulator chose one. You. This morning you were handed a cadet's flight suit and told: “You're flying to Orbita-9. Take your physics textbook — you're going to need it.”",
      "kk": "2087 жыл. Жерден төрт жүз шақырым биіктікте «ОРБИТА-9» орбиталық қорғаныс қалқаны ілініп тұр — оны жас ұрпақ тек оқулықтардан біледі. Жарты ғасыр бұрын оны ғарыштық қауіптерді тойтару үшін салған: метеор ағындары, радиациялық жарқылдар, істен шыққан жерсеріктердің сынықтары. Он жыл бойы қалқан жеті шабуылды қайтарды, сосын қауіптер тиылды да, қалқан ұйқыға кетті. Реакторларды сөндірді, экипаждар Жерге қайтты, тек қалқанды басқару үшін жасалған жасанды интеллект КВАНТ қарауылда қалды — күту режимінде, бұйрықпен: «Қауіп қайта оралса — ояту».\nҚауіп қайта оралды. 12 наурызға қараған түні барлық құрлықтағы обсерваториялар бір нәрсені тіркеді: Күн жүйесінің тереңінен Жерге қарай қауіптер легі жылжып келеді. «Персеидтер-Х» метеор ағыны, оның артынан магниттік дауылдар толқыны, сосын шығу тегі белгісіз аномальді радиация. КВАНТ өздігінен оянды. Оның алғашқы хабарламасы Ғарыш физикасы академиясына кетті: «Қалқан бүтін, бірақ менде ұшқыш жоқ. Физиканы түсінетін біреуді жіберіңдер. Уақытымыз аз».\nАкадемияда курсанттар жүздеген, бірақ КВАНТ-тың симуляторы біреуді таңдады. Сені. Бүгін таңертең саған курсант комбинезонын табыстап: «„Орбита-9“-ға ұшасың. Физика оқулығын ал — ол саған керек болады», — деді."
    },
    "goal": {
      "ru": "КВАНТ: «Курсант, прежде чем сесть за штурвал — допуск. Правила безопасности в кабинете физики: это твой первый щит. Пройди инструктаж!»",
      "en": "QUANT: \"Cadet, before you take the helm — clearance. Safety rules in the physics lab: this is your first shield. Go through the briefing!\"",
      "kk": "КВАНТ: «Курсант, штурвалға отырмас бұрын рұқсаттан өту керек. Физика кабинетіндегі қауіпсіздік ережелері — сенің алғашқы қалқаның. Инструктажды орында!»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 1,
        "title": {
          "ru": "Пролог. Сигнал из глубины веков",
          "en": "Prologue. A Signal from the Depths of Ages",
          "kk": "Кіріспе. Уақыт тереңінен келген сигнал"
        },
        "text": {
          "ru": "КВАНТ: «Курсант, прежде чем сесть за штурвал — допуск. Правила безопасности в кабинете физики: это твой первый щит. Пройди инструктаж!»",
          "en": "QUANT: \"Cadet, before you take the helm — clearance. Safety rules in the physics lab: this is your first shield. Go through the briefing!\"",
          "kk": "КВАНТ: «Курсант, штурвалға отырмас бұрын рұқсаттан өту керек. Физика кабинетіндегі қауіпсіздік ережелері — сенің алғашқы қалқаның. Инструктажды орында!»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep1",
    "from": 2,
    "to": 8,
    "title": {
      "ru": "ЛЁТНАЯ ШКОЛА: КИНЕМАТИКА",
      "en": "FLIGHT SCHOOL: KINEMATICS",
      "kk": "ҰШУ МЕКТЕБІ: КИНЕМАТИКА"
    },
    "intro": {
      "ru": "КВАНТ: «Чтобы перехватывать метеоры, нужно уметь рассчитывать их движение: траектории, скорости, ускорения. Лётная школа открывает свои двери!»",
      "en": "KVANT: \"To intercept meteors, you need to be able to calculate their movement: trajectories, speeds, accelerations. The flight school opens its doors!\"",
      "kk": "КВАНТ: «Метеорларды ұстап алу үшін олардың қозғалысын есептей білу қажет: траекториялары, жылдамдықтары, үдеулері. Ұшу мектебі өз есігін ашады!»"
    },
    "narrative": {
      "ru": "Стыковочный шлюз встречает курсанта холодным светом и голосом из динамиков: «Кадет, прежде чем сесть за штурвал, пройдём допуск. Первый щит физика — не скафандр и не броня. Правила. Их пишут те, кто выжил».\nКВАНТ не признаёт поблажек. Экзамен идёт прямо в лаборатории станции: вот незаземлённый прибор — что произойдёт, если его включить? Вот реактивы на одной полке — какие нельзя ставить рядом? Вот скафандр с повреждённым шлемом — в чём подвох? За каждой ошибкой в этих вопросах когда-то стояла настоящая авария, и КВАНТ знает их все по именам и датам.\nК концу проверки голос ИИ теплеет на полградуса: «Неплохо. Люди часто думают, что техника безопасности — это скучно. На самом деле это самая короткая запись чужого опыта. Теперь ты готов». Панель мигает зелёным: сертификат пилота получен, допуск к полётам открыт. Впереди — первый настоящий вылет.",
      "en": "The docking airlock greets the cadet with cold light and a voice from the speakers: “Cadet, before you take the helm, we go through clearance. A physicist's first shield is not a spacesuit and not armour. It is the rules. They are written by those who survived.”\nQUANT allows no mercy. The exam takes place right in the station's laboratory: here is an ungrounded instrument — what happens if you switch it on? Here are reagents on one shelf — which ones must never stand together? Here is a spacesuit with a damaged helmet — what is the trap behind it? Behind each of these questions there once stood a real accident, and QUANT knows them all by name and date.\nBy the end of the check the AI's voice warms by half a degree: “Not bad. People often think safety rules are boring. In fact they are the shortest record of someone else's experience. Now you are ready.” The panel flashes green: the pilot certificate is issued, flight clearance is granted. Ahead lies the first real flight.",
      "kk": "Тіркесу шлюзі курсантты суық жарықпен және динамиктерден шыққан дауыспен қарсы алады: «Кадет, штурвалға отырмас бұрын рұқсаттан өтейік. Физиктің бірінші қалқаны — скафандр да, сауыт та емес. Ережелер. Оларды аман қалғандар жазады».\nКВАНТ жеңілдік бермейді. Емтихан станцияның зертханасында өтеді: мынау жерленбеген аспап — оны қоссаң не болады? Мынау бір сөредегі реактивтер — қайсысын қатар қоюға болмайды? Мынау дулығасы зақымданған скафандр — тұзағы неде? Бұл сұрақтардың әрқайсысының артында кезінде нақты апат тұр, оларды КВАНТ аты-жөнімен, күнімен біледі.\nТексеру соңында ИИ дауысы жарты градусқа жылиды: «Жаман емес. Адамдар техника қауіпсіздігін жалықтырады деп ойлайды. Шын мәнінде ол — өзгенің тәжірибесінің ең қысқа жазбасы. Енді сен дайынсың». Панель жасыл болып жыпылықтайды: ұшқыш сертификаты алынды, ұшуға рұқсат ашылды. Алда — алғашқы нағыз ұшу."
    },
    "goal": {
      "ru": "КВАНТ: «Чтобы перехватывать метеоры, нужно уметь рассчитывать их движение: траектории, скорости, ускорения. Лётная школа открывает свои двери!»",
      "en": "KVANT: \"To intercept meteors, you need to be able to calculate their movement: trajectories, speeds, accelerations. The flight school opens its doors!\"",
      "kk": "КВАНТ: «Метеорларды ұстап алу үшін олардың қозғалысын есептей білу қажет: траекториялары, жылдамдықтары, үдеулері. Ұшу мектебі өз есігін ашады!»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 2,
        "title": {
          "ru": "Глава 1. Допуск к полётам",
          "en": "Chapter 1. Flight Clearance",
          "kk": "1-тарау. Ұшуға рұқсат"
        },
        "text": {
          "ru": "КВАНТ: «Чтобы перехватывать метеоры, нужно уметь рассчитывать их движение: траектории, скорости, ускорения. Лётная школа открывает свои двери!»",
          "en": "KVANT: \"To intercept meteors, you need to be able to calculate their movement: trajectories, speeds, accelerations. The flight school opens its doors!\"",
          "kk": "КВАНТ: «Метеорларды ұстап алу үшін олардың қозғалысын есептей білу қажет: траекториялары, жылдамдықтары, үдеулері. Ұшу мектебі өз есігін ашады!»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep2",
    "from": 9,
    "to": 13,
    "title": {
      "ru": "ЗВЁЗДНАЯ КАРТА: АСТРОНОМИЯ",
      "en": "STAR MAP: ASTRONOMY",
      "kk": "ЖҰЛДЫЗ КАРТАСЫ: АСТРОНОМИЯ"
    },
    "intro": {
      "ru": "КВАНТ: «Угроза пришла из глубины космоса. Чтобы найти её источник, научись читать звёздную карту и измерять расстояния до светил.»",
      "en": "QUANT: \"The threat has come from the depths of space. To find its source, learn to read the star chart and measure the distances to the stars.\"",
      "kk": "КВАНТ: «Қауіп космостың тереңінен келді. Оның көзін табу үшін жұлдыздық картаны оқуға және жарық нүктелеріне дейінгі қашықтықты өлшеуді үйрен.»"
    },
    "narrative": {
      "ru": "Первый вылет едва не стал последним. КВАНТ бросил курсанту учебную цель — метеор-имитатор, летящий к станции. «Рассчитай точку перехвата», — скомандовал ИИ. Курсант направил корабль «на глаз» — и промахнулся на двести метров. Метеор растаял в темноте, а в наушниках повисла пауза.\n«Космос не прощает глазомера, — сказал наконец КВАНТ. — Возвращаемся на тренировочную орбиту». Целую неделю станция слушала, как курсант бормочет формулы: путь и перемещение, мгновенная скорость, ускорение, графики движения. Каждый день — новый перехват, и каждый раз расчёт точнее: вот корабль выходит на равноускоренный разгон, вот тормозит строго по графику, вот сближается с целью по рассчитанной траектории.\nНа седьмой день перехват прошёл идеально: точка встречи совпала до метра. Модуль «НАВИГАЦИЯ» на панели вспыхнул голубым. «Неплохо, кадет, — произнёс КВАНТ. — Теперь полетим по-настоящему: за пределами тренировочной орбиты у нас нет права на вторую попытку».",
      "en": "The first sortie almost became the last. QUANT threw the cadet a training target — a meteor-simulator flying toward the station. “Calculate the intercept point,” the AI ordered. The cadet aimed the ship “by eye” — and missed by two hundred metres. The meteor melted into the darkness, and silence hung in the headphones.\n“Space does not forgive eyeballing,” QUANT said at last. “Back to the training orbit.” For a whole week the station listened to the cadet muttering formulas: distance and displacement, instantaneous velocity, acceleration, graphs of motion. Every day a new intercept, and each time the calculation grew more precise: here the ship accelerates uniformly, here it brakes exactly along the graph, here it closes in on the target along a calculated trajectory.\nOn the seventh day the intercept went perfectly: the meeting point matched down to the metre. The NAVIGATION module flared blue on the panel. “Not bad, cadet,” said QUANT. “Now we fly for real: beyond the training orbit we have no right to a second attempt.”",
      "kk": "Алғашқы ұшу соңғы ұшу бола жаздады. КВАНТ курсантқа оқу нысанасын тастады — станцияға қарай ұшып келе жатқан метеор-имитатор. «Кездесу нүктесін есепте», — деп бұйырды ИИ. Курсант кемені «көзбен шамалап» бағыттады — екі жүз метрге қате кетті. Метеор қараңғыда еріп кетті, құлаққапта үнсіздік орнады.\n«Ғарыш көзбен шамалауды кешірмейді, — деді ақыры КВАНТ. — Жаттығу орбитасына қайтамыз». Бір апта бойы станция курсанттың формулаларды күбірлегенін тыңдады: жол мен орын ауыстыру, лездік жылдамдық, үдеу, қозғалыс графиктері. Күн сайын — жаңа ұстап алу, әр жолы есеп дәлірек: міне, кеме бірқалыпты үдемелі қозғалыспен жүреді, міне, график бойынша дәл тежейді, міне, есептелген траекториямен нысанаға жақындайды.\nЖетінші күні ұстап алу мінсіз өтті: кездесу нүктесі метріне дейін сәйкес келді. Панельдегі «НАВИГАЦИЯ» модулі көк түспен жанды. «Жаман емес, кадет, — деді КВАНТ. — Енді нағыз ұшамыз: жаттығу орбитасынан тыс жерде бізде екінші мүмкіндік жоқ»."
    },
    "goal": {
      "ru": "КВАНТ: «Угроза пришла из глубины космоса. Чтобы найти её источник, научись читать звёздную карту и измерять расстояния до светил.»",
      "en": "QUANT: \"The threat has come from the depths of space. To find its source, learn to read the star chart and measure the distances to the stars.\"",
      "kk": "КВАНТ: «Қауіп космостың тереңінен келді. Оның көзін табу үшін жұлдыздық картаны оқуға және жарық нүктелеріне дейінгі қашықтықты өлшеуді үйрен.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 9,
        "title": {
          "ru": "Глава 2. Лётная школа: кинематика",
          "en": "Chapter 2. Flight School: Kinematics",
          "kk": "2-тарау. Ұшу мектебі: кинематика"
        },
        "text": {
          "ru": "КВАНТ: «Угроза пришла из глубины космоса. Чтобы найти её источник, научись читать звёздную карту и измерять расстояния до светил.»",
          "en": "QUANT: \"The threat has come from the depths of space. To find its source, learn to read the star chart and measure the distances to the stars.\"",
          "kk": "КВАНТ: «Қауіп космостың тереңінен келді. Оның көзін табу үшін жұлдыздық картаны оқуға және жарық нүктелеріне дейінгі қашықтықты өлшеуді үйрен.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep3",
    "from": 14,
    "to": 20,
    "title": {
      "ru": "ГРАВИТАЦИЯ: ДИНАМИКА",
      "en": "GRAVITATION: DYNAMICS",
      "kk": "ГРАВИТАЦИЯ: ДИНАМИКА"
    },
    "intro": {
      "ru": "КВАНТ: «Гравитационные манёвры! Законы Ньютона и тяготения позволят использовать планеты как пращу для перехватчика.»",
      "en": "QUANT: \"Gravitational maneuvers! Newton's laws and gravitation will allow us to use planets as a slingshot for the interceptor.\"",
      "kk": "КВАНТ: «Гравитациялық маневрлер! Ньютон заңдары мен бүкіләлемдік тартылыс заңы ғаламшарларды маневр тіректері ретінде пайдаланып, ұстағышты нысанаға жеткізуге мүмкіндік береді.»"
    },
    "narrative": {
      "ru": "У границы системы случилось то, чего боялись: навигационные датчики захлебнулись в магнитном шуме. Координаты поплыли, экраны покрылись помехами — корабль ослеп посреди пустоты.\n«Спокойно, кадет. Электроника подводит первой. Звёзды — никогда», — голос КВАНТА звучал почти как у старого штурмана. Он открыл курсанту древнюю науку: вот созвездия, по которым люди тысячи лет находили дорогу; вот Темірқазық — Полярная звезда, неподвижная ось ночного неба; вот небесная сфера, по которой движутся светила. А когда курсант освоился — показал, как измерить расстояние до далёкого объекта методом параллакса, взглянув на него «двумя глазами», как это делают с большим пальцем вытянутой руки.\nРасчёт лёг на карту, и та ожила: координаты сошлись, источник угрозы выстроился в чёткую точку на экране. «АСТРОНАВИГАЦИЯ» засияла зелёным. «Мы снова видим, — сказал КВАНТ. — И теперь мы знаем, куда лететь. Пристегнись: впереди поле обломков».",
      "en": "At the edge of the system the thing they feared happened: the navigation sensors drowned in magnetic noise. The coordinates drifted, the screens filled with static — the ship had gone blind in the middle of nowhere.\n“Stay calm, cadet. Electronics fail first. The stars never do.” QUANT's voice sounded almost like an old navigator's. It opened up an ancient science to the cadet: here are the constellations by which people found their way for thousands of years; here is Polaris, the motionless axis of the night sky; here is the celestial sphere along which the heavenly bodies move. And when the cadet had settled in, QUANT showed how to measure the distance to a faraway object by parallax — looking at it with “two eyes”, the way you do with the thumb of an outstretched hand.\nThe calculation fell onto the map, and the map came alive: the coordinates converged, and the source of the threat snapped into a sharp point on the screen. ASTRONAVIGATION glowed green. “We can see again,” said QUANT. “And now we know where to fly. Buckle up: a field of wreckage lies ahead.”",
      "kk": "Жүйенің шекарасында қорыққан нәрсе болды: навигациялық датчиктер магниттік шуға тұншығып қалды. Координаттар жылжи бастады, экрандарды кедергі басты — кеме бос кеңістіктің ортасында соқыр болып қалды.\n«Сабыр бол, кадет. Электроника бірінші болып сатады. Жұлдыздар — ешқашан», — КВАНТ-тың дауысы ескі штурманға ұқсап кетті. Ол курсантқа ежелгі ғылымды ашты: міне, мыңдаған жылдар бойы адамдар жол тауып келе жатқан жұлдыз топтары; міне, түнгі аспанның қозғалмайтын осі — Темірқазық; міне, аспан сферасы, оның бойымен шырақтар қозғалады. Ал курсант дағдыланған соң, алыстағы нысанға дейінгі қашықтықты параллакс әдісімен өлшеуді көрсетті: созылған қолдың бас бармағымен жасайтындай, нысанға «екі көзбен» қарап.\nЕсеп картаға түсіп, карта жанды: координаттар сәйкес келді, қауіп көзі экраннан нақты нүкте болып көрінді. «АСТРОНАВИГАЦИЯ» жасыл болып жанды. «Біз қайта көріп тұрмыз, — деді КВАНТ. — Енді қайда ұшатынымызды білеміз. Белбеуіңді тақ: алда сынықтар өрісі»."
    },
    "goal": {
      "ru": "КВАНТ: «Гравитационные манёвры! Законы Ньютона и тяготения позволят использовать планеты как пращу для перехватчика.»",
      "en": "QUANT: \"Gravitational maneuvers! Newton's laws and gravitation will allow us to use planets as a slingshot for the interceptor.\"",
      "kk": "КВАНТ: «Гравитациялық маневрлер! Ньютон заңдары мен бүкіләлемдік тартылыс заңы ғаламшарларды маневр тіректері ретінде пайдаланып, ұстағышты нысанаға жеткізуге мүмкіндік береді.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 14,
        "title": {
          "ru": "Глава 3. Звёздная карта: астрономия",
          "en": "Chapter 3. Star Map: Astronomy",
          "kk": "3-тарау. Жұлдыз картасы: астрономия"
        },
        "text": {
          "ru": "КВАНТ: «Гравитационные манёвры! Законы Ньютона и тяготения позволят использовать планеты как пращу для перехватчика.»",
          "en": "QUANT: \"Gravitational maneuvers! Newton's laws and gravitation will allow us to use planets as a slingshot for the interceptor.\"",
          "kk": "КВАНТ: «Гравитациялық маневрлер! Ньютон заңдары мен бүкіләлемдік тартылыс заңы ғаламшарларды маневр тіректері ретінде пайдаланып, ұстағышты нысанаға жеткізуге мүмкіндік береді.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep4",
    "from": 21,
    "to": 24,
    "title": {
      "ru": "ЭНЕРГЕТИЧЕСКОЕ ЯДРО: ЗАКОНЫ СОХРАНЕНИЯ",
      "en": "ENERGY CORE: LAWS OF CONSERVATION",
      "kk": "ЭНЕРГИЯЛЫҚ ЯДРО: САҚТАУ ЗАҢДАРЫ"
    },
    "intro": {
      "ru": "КВАНТ: «Щит „Орбиты‑9“ питается энергией. Импульс, работа, энергия — законы сохранения сделают тебя повелителем реактора станции.»",
      "en": "KVANT: \"The shield 'Orbit-9' is powered by energy. Impulse, work, energy — the laws of conservation will make you the master of the station's reactor.\"",
      "kk": "КВАНТ: «„Орбита‑9“ қалқаны энергиямен қамтамасыз етіледі. Импульс, жұмыс, энергия — сақталу заңдары саған станцияның реакторын басқаруға мүмкіндік береді.»"
    },
    "narrative": {
      "ru": "Поле обломков встретило тишиной и тысячей молчаливых камней, каждый размером с дом. Лететь напрямую — безумие: первый же осколок разнесёт корабль. «Здесь нельзя лететь на силе, кадет. Здесь летят на законах Ньютона», — предупредил КВАНТ.\nИ курсант начал считать силы. Тяготение и вес, свободное падение и невесомость, инерция, которая швыряет корабль вперёд на каждом вираже. Он понял главное: каждый камень вокруг — не враг, а союзник, если правильно рассчитать его притяжение. У края самого крупного астероида корабль нырнул в его гравитационное поле и выполнил «рогатку» — манёвр, при котором чужая тяжесть разгоняет корабль лучше любого двигателя, не тратя ни капли топлива.\nКогда поле обломков осталось позади, КВАНТ долго молчал. Потом произнёс: «Модуль „МАНЁВР“ активирован. Знаешь, что отличает хорошего пилота от великого? Великий чувствует силы так, будто они натянуты у него между пальцами. У тебя начинает получаться».",
      "en": "The wreckage field met them with silence and a thousand mute stones, each the size of a house. Flying straight through was madness: the very first fragment would tear the ship apart. “You cannot fly on power here, cadet. Here you fly on Newton's laws,” QUANT warned.\nAnd the cadet began to count forces. Gravity and weight, free fall and weightlessness, the inertia that flings the ship forward on every turn. He understood the main thing: every stone around him is not an enemy but an ally — if you calculate its pull correctly. At the edge of the largest asteroid the ship dove into its gravitational field and performed the slingshot — a manoeuvre in which someone else's gravity accelerates the ship better than any engine, without spending a single drop of fuel.\nWhen the wreckage field was left behind, QUANT was silent for a long time. Then it said: “MANEUVER module activated. Do you know what separates a good pilot from a great one? A great one feels forces as if they were stretched between his fingers. You are starting to get there.”",
      "kk": "Сынықтар өрісін тыныштық пен мыңдаған үнсіз тас қарсы алды, олардың әрқайсысы үйдің көлеміндей. Тікелей ұшу — ақылсыздық: бірінші сынық кемені талқандайды. «Мұнда күшпен ұшуға болмайды, кадет. Мұнда Ньютон заңдарымен ұшады», — деп ескертті КВАНТ.\nСөйтіп курсант күштерді есептей бастады. Тартылыс пен салмақ, еркін түсу мен салмақсыздық, әр бұрылыста кемені алға лақтыратын инерция. Ол бастысын түсінді: айналадағы әр тас — дұшпан емес, оның тартылысын дұрыс есептесең — одақтас. Ең ірі астероидтың шетінде кеме оның гравитациялық өрісіне сүңгіп, «рогатка» жасады — өзге ауырлық кемені отынның бір тамшысын жұмсамай-ақ үдететін маневр.\nСынықтар өрісі артта қалғанда КВАНТ ұзақ үнсіз отырды. Сосын: «„МАНЁВР“ модулі іске қосылды. Жақсы ұшқышты ұлы ұшқыштан не ерекшелейді, білесің бе? Ұлысы күштерді саусақтарының арасында керілгендей сезеді. Сенде енді осылай бола бастады», — деді."
    },
    "goal": {
      "ru": "КВАНТ: «Щит „Орбиты‑9“ питается энергией. Импульс, работа, энергия — законы сохранения сделают тебя повелителем реактора станции.»",
      "en": "KVANT: \"The shield 'Orbit-9' is powered by energy. Impulse, work, energy — the laws of conservation will make you the master of the station's reactor.\"",
      "kk": "КВАНТ: «„Орбита‑9“ қалқаны энергиямен қамтамасыз етіледі. Импульс, жұмыс, энергия — сақталу заңдары саған станцияның реакторын басқаруға мүмкіндік береді.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 21,
        "title": {
          "ru": "Глава 4. Гравитация: динамика",
          "en": "Chapter 4. Gravitation: Dynamics",
          "kk": "4-тарау. Гравитация: динамика"
        },
        "text": {
          "ru": "КВАНТ: «Щит „Орбиты‑9“ питается энергией. Импульс, работа, энергия — законы сохранения сделают тебя повелителем реактора станции.»",
          "en": "KVANT: \"The shield 'Orbit-9' is powered by energy. Impulse, work, energy — the laws of conservation will make you the master of the station's reactor.\"",
          "kk": "КВАНТ: «„Орбита‑9“ қалқаны энергиямен қамтамасыз етіледі. Импульс, жұмыс, энергия — сақталу заңдары саған станцияның реакторын басқаруға мүмкіндік береді.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep5",
    "from": 25,
    "to": 32,
    "title": {
      "ru": "СИГНАЛ: КОЛЕБАНИЯ И ВОЛНЫ",
      "en": "SIGNAL: OSCILLATIONS AND WAVES",
      "kk": "СИГНАЛ: ТЕРБЕЛІСТЕР МЕН ТОЛҚЫНДАР"
    },
    "intro": {
      "ru": "КВАНТ: «Связь с Землёй теряется! Настрой колебательные контуры, поймай резонанс и восстанови сигнал сквозь радиационный шторм.»",
      "en": "QUANT: \"Communication with Earth is lost! Tune the oscillatory circuits, catch the resonance and restore the signal through the radiation storm.\"",
      "kk": "КВАНТ: «Жермен байланыс жоғалып кетті! Тербеліс контурларын реттеп, резонансты таб және сәулелік дауыл арқылы сигналды қалпына келтір.»"
    },
    "narrative": {
      "ru": "Посреди манёвра станцию накрыла темнота. Погасли экраны, стихли вентиляторы, и только аварийные огни окрасили коридоры красным. «Энергетическое ядро на исходе, — доложил КВАНТ удивительно спокойно. — Резерва хватит на два часа».\nКурсант бросился к реакторному отсеку, но ИИ остановил его: «Паника расходует энергию быстрее, чем приборы. Вспомни главное: энергия не исчезает. Она только переходит из формы в форму. Найди, где она прячется». И курсант начал искать. Кинетическая энергия вращающихся маховиков-накопителей. Потенциальная энергия поднятых грузов балласта. Даже тепло радиаторов — и то можно собрать. Он пересчитал каждый джоуль, перенастроил реактивное движение так, чтобы оно расходовало минимум, и соединил разрозненные запасы в одну цепь.\nКогда рубильник щёлкнул, свет вернулся разом — и станция загудела, как камертон. «ЭНЕРГЕТИЧЕСКОЕ ЯДРО» на панели налилось янтарным светом. «Щит снова запитан, — сказал КВАНТ. — Ты только что доказал закон сохранения на практике. Но не расслабляйся: я перестал слышать Землю».",
      "en": "In the middle of the manoeuvre darkness fell over the station. Screens went out, fans fell silent, and only the emergency lights painted the corridors red. “The energy core is running out,” QUANT reported, surprisingly calm. “The reserve will last two hours.”\nThe cadet rushed to the reactor bay, but the AI stopped him: “Panic burns energy faster than instruments do. Remember the main thing: energy does not vanish. It only changes from one form to another. Find where it is hiding.” And the cadet began to search. Kinetic energy in the spinning flywheel storage units. Potential energy in the raised ballast weights. Even the heat of the radiators — that too can be gathered. He recomputed every joule, retuned the jet propulsion to spend as little as possible, and linked the scattered reserves into a single circuit.\nWhen the breaker clicked, the light returned all at once — and the station hummed like a tuning fork. The ENERGY CORE on the panel filled with amber light. “The shield is powered again,” said QUANT. “You have just proved the law of conservation in practice. But don't relax: I have stopped hearing Earth.”",
      "kk": "Маневр ортасында станцияны қараңғылық басты. Экрандар сөнді, желдеткіштер тынды, дәліздерді тек апаттық шамдар қызылға бояды. «Энергетикалық ядро таусылып келеді, — деп хабарлады КВАНТ таңғаларлықтай сабырмен. — Қор екі сағатқа жетеді».\nКурсант реактор бөліміне ұмтылды, бірақ ИИ оны тоқтатты: «Дүрбелең энергияны аспаптардан да тез жейді. Бастысын есіңе ал: энергия жоғалмайды. Ол тек бір түрден екінші түрге ауысады. Оның қайда жасырынғанын тап». Сөйтіп курсант іздей бастады. Маховик-жинақтағыштардың айналуындағы кинетикалық энергия. Балласт жүктерінің көтерілуіндегі потенциалдық энергия. Тіпті радиаторлардың жылуын да жинауға болады. Ол әр джоульді қайта есептеп, реактивті қозғалысты аз шығындайтындай етіп қайта баптады да, бытыраңқы қорларды бір тізбекке біріктірді.\nАжыратқыш шерт еткенде жарық бірден қайта оралды — станция камертондай күңіреніп қоя берді. Панельдегі «ЭНЕРГЕТИКАЛЫҚ ЯДРО» кәріптас түспен толды. «Қалқан қайта қуат алды, — деді КВАНТ. — Сен сақталу заңын іс жүзінде дәлелдедің. Бірақ босаңсыма: мен Жерді естімей қалдым»."
    },
    "goal": {
      "ru": "КВАНТ: «Связь с Землёй теряется! Настрой колебательные контуры, поймай резонанс и восстанови сигнал сквозь радиационный шторм.»",
      "en": "QUANT: \"Communication with Earth is lost! Tune the oscillatory circuits, catch the resonance and restore the signal through the radiation storm.\"",
      "kk": "КВАНТ: «Жермен байланыс жоғалып кетті! Тербеліс контурларын реттеп, резонансты таб және сәулелік дауыл арқылы сигналды қалпына келтір.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 25,
        "title": {
          "ru": "Глава 5. Энергетическое ядро: законы сохранения",
          "en": "Chapter 5. The Energy Core: Laws of Conservation",
          "kk": "5-тарау. Энергетикалық ядро: сақталу заңдары"
        },
        "text": {
          "ru": "КВАНТ: «Связь с Землёй теряется! Настрой колебательные контуры, поймай резонанс и восстанови сигнал сквозь радиационный шторм.»",
          "en": "QUANT: \"Communication with Earth is lost! Tune the oscillatory circuits, catch the resonance and restore the signal through the radiation storm.\"",
          "kk": "КВАНТ: «Жермен байланыс жоғалып кетті! Тербеліс контурларын реттеп, резонансты таб және сәулелік дауыл арқылы сигналды қалпына келтір.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep6",
    "from": 33,
    "to": 37,
    "title": {
      "ru": "АТОМНЫЙ РУБЕЖ: СТРОЕНИЕ АТОМА",
      "en": "ATOMIC FRONTIER: THE STRUCTURE OF THE ATOM",
      "kk": "АТОМДЫҚ ШЕП: АТОМ ҚҰРЫЛЫСЫ"
    },
    "intro": {
      "ru": "КВАНТ: «Впереди радиационный пояс. Кванты, фотоэффект, рентген и радиоактивность — пойми природу излучений, чтобы пройти рубеж.»",
      "en": "QUANTUM: \"Ahead is the radiation belt. Quanta, photoelectric effect, X-rays, and radioactivity—understand the nature of radiation to pass the frontier.\"",
      "kk": "КВАНТ: «Алда радиациялық белдеу бар. Кванттар, фотоэффект, рентген және радиоактивтілік — сәулеленудің табиғатын түсіну үшін шекті өту.»"
    },
    "narrative": {
      "ru": "Земля молчала третий час. Канал связи оборвался резко, словно кто-то перерезал нить: ни шороха, ни писка, одна пустота на частотах.\n«Антенну сбило манёвром, — определил КВАНТ. — Но антенна — это колебания. А значит, нам нужна не отвёртка, а физика». Курсант поднялся на внешнюю палубу и увидел её: громадная чаша антенны застыла под нештатным углом, маятник привода раскачивался вразнобой. Он начал с простого: измерил период и частоту, понял, куда «уплыл» сигнал, шаг за шагом вернул маятники станции в ритм. Оставалось последнее — резонанс: поймать ту самую частоту, на которой антенна отзовётся полной силой.\nКогда стрелка индикатора дрогнула и поползла вверх, из динамиков сквозь треск пробился голос Земли: «„Орбита-9“, слышим вас. Как вы там?» Курсант рассмеялся впервые за много дней. «Система „СВЯЗЬ“ восстановлена, — констатировал КВАНТ. — А теперь улыбку долой. По курсу радиационный пояс, и он не будет с нами разговаривать».",
      "en": "Earth had been silent for three hours. The communication channel had snapped as if someone cut a thread: not a rustle, not a beep, only emptiness on every frequency.\n“The antenna was knocked out of alignment by the manoeuvre,” QUANT diagnosed. “But an antenna is oscillations. Which means we need physics, not a screwdriver.” The cadet climbed onto the outer deck and saw it: the enormous dish of the antenna frozen at an odd angle, its drive pendulum swinging out of rhythm. He started with the basics: measured the period and the frequency, understood where the signal had “drifted”, step by step bringing the station's pendulums back into rhythm. Only one thing remained — resonance: catching the very frequency at which the antenna answers at full strength.\nWhen the indicator needle trembled and began to climb, a voice from Earth broke through the static in the speakers: “Orbita-9, we hear you. How are you doing up there?” The cadet laughed for the first time in days. “COMMUNICATION system restored,” QUANT stated. “Now wipe off the smile. Ahead of us is the radiation belt, and it will not be making conversation.”",
      "kk": "Жер үшінші сағат үндемейді. Байланыс арнасы біреу жіпті қиып тастағандай үзілді: сыбдыр да, сигнал да жоқ, жиіліктерде тек бос кеңістік.\n«Антеннаны маневр қисайтқан, — деп анықтады КВАНТ. — Бірақ антенна — ол тербелістер. Демек, бізге бұрағыш емес, физика керек». Курсант сыртқы палубаға шығып, оны көрді: антеннаның зор тостағаны қисық бұрышта қатып қалған, жетек маятнигі әрқалай тербеледі. Ол қарапайымынан бастады: период пен жиілікті өлшеді, сигналдың қайда «жүзіп кеткенін» түсінді, станцияның маятниктерін қадам сайын ырғаққа қайтарды. Соңғысы қалды — резонанс: антенна толық қуатымен жауап беретін дәл сол жиілікті ұстау.\nИндикатор тілі дірілдеп, жоғары жылжи бастағанда, динамиктерден сытыр арасынан Жердің дауысы естілді: «„Орбита-9“, естіп тұрмыз. Жағдайларың қалай?» Курсант талай күннен кейін алғаш рет күліп жіберді. «„БАЙЛАНЫС“ жүйесі қалпына келтірілді, — деп түйіндеді КВАНТ. — Енді күлкіні қоя тұр. Бағытымызда радиациялық белдеу бар, ол бізбен сөйлеспейді»."
    },
    "goal": {
      "ru": "КВАНТ: «Впереди радиационный пояс. Кванты, фотоэффект, рентген и радиоактивность — пойми природу излучений, чтобы пройти рубеж.»",
      "en": "QUANTUM: \"Ahead is the radiation belt. Quanta, photoelectric effect, X-rays, and radioactivity—understand the nature of radiation to pass the frontier.\"",
      "kk": "КВАНТ: «Алда радиациялық белдеу бар. Кванттар, фотоэффект, рентген және радиоактивтілік — сәулеленудің табиғатын түсіну үшін шекті өту.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 33,
        "title": {
          "ru": "Глава 6. Сигнал: колебания и волны",
          "en": "Chapter 6. The Signal: Oscillations and Waves",
          "kk": "6-тарау. Сигнал: тербелістер мен толқындар"
        },
        "text": {
          "ru": "КВАНТ: «Впереди радиационный пояс. Кванты, фотоэффект, рентген и радиоактивность — пойми природу излучений, чтобы пройти рубеж.»",
          "en": "QUANTUM: \"Ahead is the radiation belt. Quanta, photoelectric effect, X-rays, and radioactivity—understand the nature of radiation to pass the frontier.\"",
          "kk": "КВАНТ: «Алда радиациялық белдеу бар. Кванттар, фотоэффект, рентген және радиоактивтілік — сәулеленудің табиғатын түсіну үшін шекті өту.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep7",
    "from": 38,
    "to": 42,
    "title": {
      "ru": "СЕРДЦЕ ЯДРА: АТОМНОЕ ЯДРО",
      "en": "HEART OF THE CORE: THE ATOMIC NUCLEUS",
      "kk": "ЯДРОНЫҢ ЖҮРЕГІ: АТОМ ЯДРОСЫ"
    },
    "intro": {
      "ru": "КВАНТ: «Финал близок. Источник угрозы — нестабильное ядро древнего реактора. Энергия связи, деление и синтез: останови цепную реакцию!»",
      "en": "QUANT: \"The finale is near. The source of the threat is the unstable core of an ancient reactor. Energy of connection, fission and synthesis: stop the chain reaction!\"",
      "kk": "КВАНТ: «Финал жақын. Қауіптің көзі — ежелгі реактордың тұрақсыз өзегі. Энергия байланысы, бөліну және синтез: тізбекті реакцияны тоқтат!»"
    },
    "narrative": {
      "ru": "Радиационный пояс невидим — и в этом его коварство. Датчики показали: поток частиц такой плотности, что обшивка продержится минуты. «Обычная броня здесь бесполезна, кадет. Придётся защищаться тем, из чего состоит сама угроза, — атомами», — сказал КВАНТ.\nИ открыл курсанту физику микромира. Вот тепловое излучение: любое тело светится, если знать его температуру. Вот свет, который ведёт себя как поток частиц — квантов — фотонов. Вот фотоэффект, выбивающий электроны из металла, и постоянная Планка — число, на котором держится весь квантовый мир. Понимая это, курсант собрал то, что никто не собирал полвека: защитное поле, настроенное точно на частоту смертоносных частиц.\nПоле включилось тихо, без фанфар. А снаружи от него начали отскакивать кванты — как горох от стены. «Радиационный щит» вспыхнул на панели синим. «Поздравляю, кадет. Ты только что переиграл радиацию в её собственную игру, — произнёс КВАНТ. — Но дальше будет сложнее. За поясом — источник всех наших бед. Древний реактор. И он проснулся».",
      "en": "The radiation belt is invisible — and that is what makes it treacherous. The sensors showed a particle flux so dense that the hull would last minutes. “Ordinary armour is useless here, cadet. We will have to defend ourselves with the very thing the threat itself is made of — atoms,” said QUANT.\nAnd it opened the physics of the microworld to the cadet. Here is thermal radiation: every body glows if you know its temperature. Here is light behaving as a stream of particles — quanta called photons. Here is the photoelectric effect, knocking electrons out of metal, and Planck's constant — the number the whole quantum world rests on. Understanding all this, the cadet built what nobody had built for half a century: a protective field tuned exactly to the frequency of the deadly particles.\nThe field switched on quietly, without fanfare. And outside, quanta began bouncing off it like peas off a wall. The RADIATION SHIELD flared blue on the panel. “Congratulations, cadet. You have just outplayed radiation at its own game,” said QUANT. “But further on it gets harder. Beyond the belt lies the source of all our troubles. An ancient reactor. And it has woken up.”",
      "kk": "Радиациялық белдеу көзге көрінбейді — оның қулығы да осында. Датчиктер көрсетті: бөлшектер ағыны соншалық тығыз, қаптама минуттар ғана шыдайды. «Кәдімгі сауыт мұнда пайдасыз, кадет. Қауіптің өзі тұратын нәрсемен — атомдармен қорғанамыз», — деді КВАНТ.\nСөйтіп ол курсантқа микроәлем физикасын ашты. Міне, жылулық сәуле шығару: температурасын білсең, кез келген дене сәуле шашады. Міне, бөлшектер — фотон-кванттар ағыны ретінде жүретін жарық. Міне, металдан электрондарды ұшырып шығаратын фотоэффект және бүкіл кванттық әлем тіреліп тұрған Планк тұрақтысы. Осыны түсінген курсант жарты ғасыр бойы ешкім құрастырмағанды құрастырды: өлімші бөлшектердің жиілігіне дәл бапталған қорғаныс өрісін.\nӨріс салтанатсыз, тыныш қосылды. Ал оның сыртында кванттар қабырғаға соққан бұршақтай секіре бастады. Панельде «Радиациялық қалқан» көк түспен жанып кетті. «Құттықтаймын, кадет. Сен радиацияны оның өз ойынында жеңдің, — деді КВАНТ. — Бірақ әрі қарай қиынырақ болады. Белдеудің арғы жағында — барлық бәлеміздің бастауы. Ежелгі реактор. Ол оянды»."
    },
    "goal": {
      "ru": "КВАНТ: «Финал близок. Источник угрозы — нестабильное ядро древнего реактора. Энергия связи, деление и синтез: останови цепную реакцию!»",
      "en": "QUANT: \"The finale is near. The source of the threat is the unstable core of an ancient reactor. Energy of connection, fission and synthesis: stop the chain reaction!\"",
      "kk": "КВАНТ: «Финал жақын. Қауіптің көзі — ежелгі реактордың тұрақсыз өзегі. Энергия байланысы, бөліну және синтез: тізбекті реакцияны тоқтат!»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 38,
        "title": {
          "ru": "Глава 7. Атомный рубеж: строение атома",
          "en": "Chapter 7. Atomic Frontier: The Structure of the Atom",
          "kk": "7-тарау. Атомдық шебі: атом құрылысы"
        },
        "text": {
          "ru": "КВАНТ: «Финал близок. Источник угрозы — нестабильное ядро древнего реактора. Энергия связи, деление и синтез: останови цепную реакцию!»",
          "en": "QUANT: \"The finale is near. The source of the threat is the unstable core of an ancient reactor. Energy of connection, fission and synthesis: stop the chain reaction!\"",
          "kk": "КВАНТ: «Финал жақын. Қауіптің көзі — ежелгі реактордың тұрақсыз өзегі. Энергия байланысы, бөліну және синтез: тізбекті реакцияны тоқтат!»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "ep8",
    "from": 43,
    "to": 44,
    "title": {
      "ru": "ЭПИЛОГ: КАРТИНА МИРА",
      "en": "EPILOGUE: THE PICTURE OF THE WORLD",
      "kk": "ЭПИЛОГ: ӘЛЕМ БЕЙНЕСІ"
    },
    "intro": {
      "ru": "КВАНТ: «Ты прошёл все испытания. Теперь взгляни на мир глазами физика — от элементарных частиц до Вселенной. И сохрани нашу планету.»",
      "en": "QUANT: \"You have passed all the tests. Now look at the world through the eyes of a physicist — from elementary particles to the Universe. And preserve our planet.\"",
      "kk": "КВАНТ: «Сен барлық сынақтардан өттің. Енді физиктің көзқарасымен әлемге қара — элементарлық бөлшектерден бастап Ғаламға дейін. Және біздің планетамызды сақта.»"
    },
    "narrative": {
      "ru": "Древний реактор висел перед иллюминатором — тёмная громада заброшенной станции, внутри которой что-то слабо светилось. «Неуправляемая цепная реакция, — голос КВАНТА звучал тише обычного. — Она разгоняется. Если не остановить — вспышка достанет и до Земли. У нас один заход, кадет».\nКурсант спустился в самое сердце физики. Строение атомного ядра: протоны и нейтроны, удерживаемые самой мощной силой природы. Энергия связи — та, что прячется внутри каждого ядра, и которую человечество научилось высвобождать. Деление тяжёлых ядер и синтез лёгких — две стороны одного процесса, который сейчас вышел из-под контроля. Расчёт за расчётом курсант искал способ оборвать цепь: какие стержни поглотят лишние нейтроны, в каком порядке их ввести, сколько секунд осталось до точки невозврата.\nПоследняя команда ушла в реактор. Секунда. Две. Свечение за обшивкой дрогнуло — и начало гаснуть. «Цепная реакция остановлена, — сказал КВАНТ после долгой паузы. — Опасный реактор обезврежен. Ты справился, кадет. Это была не задача из учебника. Это была настоящая физика».",
      "en": "The ancient reactor hung before the porthole — the dark bulk of an abandoned station, inside which something glowed faintly. “An uncontrolled chain reaction.” QUANT's voice was quieter than usual. “It is accelerating. If we don't stop it, the flash will reach Earth. We get one pass, cadet.”\nThe cadet descended into the very heart of physics. The structure of the atomic nucleus: protons and neutrons held together by the most powerful force in nature. Binding energy — the energy hidden inside every nucleus, which humanity learned to release. Fission of heavy nuclei and fusion of light ones — two sides of the same process, now out of control. Calculation after calculation, the cadet searched for a way to break the chain: which rods would absorb the surplus neutrons, in what order to insert them, how many seconds remained before the point of no return.\nThe final command went into the reactor. One second. Two. The glow beyond the hull trembled — and began to fade. “The chain reaction is stopped,” QUANT said after a long pause. “The dangerous reactor has been neutralised. You did it, cadet. That was not a textbook problem. That was real physics.”",
      "kk": "Ежелгі реактор иллюминатордың алдында тұрды — қараңғы зор денелі, тасталған станция, оның ішінде бірдеңе бәсең жарқырайды. «Басқарылмайтын тізбекті реакция, — КВАНТ-тың дауысы әдеттегіден тыныш шықты. — Ол үдей түсуде. Тоқтата алмасақ — жарқыл Жерге де жетеді. Бізде бір ғана мүмкіндік, кадет».\nКурсант физиканың ең жүрегіне түсті. Атом ядросының құрылысы: табиғаттағы ең қуатты күш ұстап тұрған протондар мен нейтрондар. Байланыс энергиясы — әр ядроның ішінде жасырынған, адамзат оны босатуды үйренген энергия. Ауыр ядролардың бөлінуі мен жеңіл ядролардың синтезі — қазір бақылаудан шығып кеткен бір процестің екі жағы. Есептеу артынан есептеу жасап, курсант тізбекті үзу жолын іздеді: қай стерженьдер артық нейтрондарды жұтады, оларды қандай ретпен енгізу керек, қайтарылмас нүктеге дейін неше секунд қалды.\nСоңғы бұйрық реакторға кетті. Бір секунд. Екі. Қаптама артындағы жарқыл дірілдеді — сөне бастады. «Тізбекті реакция тоқтатылды, — деді КВАНТ ұзақ паузадан кейін. — Қауіпті реактор залалсыздандырылды. Сен бұған шамаң жетті, кадет. Бұл оқулықтағы есеп емес еді. Бұл нағыз физика еді»."
    },
    "goal": {
      "ru": "КВАНТ: «Ты прошёл все испытания. Теперь взгляни на мир глазами физика — от элементарных частиц до Вселенной. И сохрани нашу планету.»",
      "en": "QUANT: \"You have passed all the tests. Now look at the world through the eyes of a physicist — from elementary particles to the Universe. And preserve our planet.\"",
      "kk": "КВАНТ: «Сен барлық сынақтардан өттің. Енді физиктің көзқарасымен әлемге қара — элементарлық бөлшектерден бастап Ғаламға дейін. Және біздің планетамызды сақта.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 43,
        "title": {
          "ru": "Глава 8. Сердце ядра: атомное ядро",
          "en": "Chapter 8. Heart of the Core: The Atomic Nucleus",
          "kk": "8-тарау. Ядроның жүрегі: атом ядросы"
        },
        "text": {
          "ru": "КВАНТ: «Ты прошёл все испытания. Теперь взгляни на мир глазами физика — от элементарных частиц до Вселенной. И сохрани нашу планету.»",
          "en": "QUANT: \"You have passed all the tests. Now look at the world through the eyes of a physicist — from elementary particles to the Universe. And preserve our planet.\"",
          "kk": "КВАНТ: «Сен барлық сынақтардан өттің. Енді физиктің көзқарасымен әлемге қара — элементарлық бөлшектерден бастап Ғаламға дейін. Және біздің планетамызды сақта.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  },
  {
    "id": "labs",
    "from": 45,
    "to": 48,
    "title": {
      "ru": "КОСМОЛАБОРАТОРИЯ",
      "en": "SPACE LABORATORY",
      "kk": "КОСМОЛАБОРАТОРИЯ"
    },
    "intro": {
      "ru": "КВАНТ: «Практика — критерий истины! Проведи лабораторные исследования на борту станции и подтверди теорию экспериментом.»",
      "en": "QUANT: \"Practice is the criterion of truth! Conduct laboratory research aboard the station and confirm the theory through experiment.\"",
      "kk": "КВАНТ: «Практика — шындық критерийі! Станцияда зертханалық жұмыстар жүргіз және теорияны тәжірибе арқылы растайтын бол.»"
    },
    "narrative": {
      "ru": "Земля была прикрыта щитом, и впервые за долгие недели на станции стояла настоящая тишина. Курсант думал, что миссия окончена, но КВАНТ попросил задержаться: «Прежде чем ты уйдёшь, покажу тебе главное оружие. Не станции и не поля. Картину мира».\nИ они прошли весь путь науки за один вечер. От первого человека, измерившего тень гномона, — до звёздных карт и параллакса. От падающего яблока и законов Ньютона — до гравитационных манёвров. От закона сохранения энергии — до квантов Планка и ядра атома. И курсант вдруг увидел, что всё это — не разрозненные главы учебника, а одна история о том, как устроен мир, рассказанная на языке физики.\n«Щит снова заступил на дежурство, — сказал КВАНТ на прощание. — Я постою на вахте. А ты возвращайся на Землю и помни: знания — самая надёжная броня. И самая острая стрела».",
      "en": "The Earth was covered by the shield, and for the first time in weeks true silence stood on the station. The cadet thought the mission was over, but QUANT asked him to stay: “Before you leave, I will show you the main weapon. Not the station. Not the field. The picture of the world.”\nAnd together they walked the whole road of science in one evening. From the first person who measured the shadow of a gnomon — to star maps and parallax. From a falling apple and Newton's laws — to gravitational manoeuvres. From the law of conservation of energy — to Planck's quanta and the atomic nucleus. And the cadet suddenly saw that all of it is not separate chapters of a textbook, but a single story about how the world is made, told in the language of physics.\n“The shield is back on duty,” QUANT said in farewell. “I will stand watch. And you go back to Earth and remember: knowledge is the most reliable armour. And the sharpest arrow.”",
      "kk": "Жер қалқанмен жабылды, ал апта бойы алғаш рет станцияда нағыз тыныштық орнады. Курсант миссия бітті деп ойлаған, бірақ КВАНТ аялдауды өтінді: «Кетер алдында саған басты қаруды көрсетейін. Станция емес. Өріс емес. Әлем бейнесі».\nСөйтіп олар бір кеште ғылымның бүкіл жолын жүріп өтті. Гномонның көлеңкесін өлшеген алғашқы адамнан — жұлдыз карталары мен параллаксқа дейін. Түскен алма мен Ньютон заңдарынан — гравитациялық маневрлерге дейін. Энергияның сақталу заңынан — Планк кванттары мен атом ядросына дейін. Сөйтіп курсант мұның бәрі оқулықтың бөлек тараулары емес, физика тілінде айтылған, әлемнің қалай құрылғаны туралы бір ғана әңгіме екенін көрді.\n«Қалқан қайтадан қарауылға тұрды, — деді КВАНТ қоштасарда. — Мен қарауылда тұрамын. Ал сен Жерге қайт және есте сақта: білім — ең сенімді сауыт. Әрі ең өткір жебе»."
    },
    "goal": {
      "ru": "КВАНТ: «Практика — критерий истины! Проведи лабораторные исследования на борту станции и подтверди теорию экспериментом.»",
      "en": "QUANT: \"Practice is the criterion of truth! Conduct laboratory research aboard the station and confirm the theory through experiment.\"",
      "kk": "КВАНТ: «Практика — шындық критерийі! Станцияда зертханалық жұмыстар жүргіз және теорияны тәжірибе арқылы растайтын бол.»"
    },
    "setting": {
      "ru": "Орбитальная станция «Орбита-9» · 2087 год",
      "en": "Orbital Station 'Orbit-9' · Year 2087",
      "kk": "«Орбита-9» орбиталық станциясы · 2087 жыл"
    },
    "revelations": [
      {
        "required": 45,
        "title": {
          "ru": "Глава 9. Эпилог: картина мира",
          "en": "Chapter 9. Epilogue: The Picture of the World",
          "kk": "9-тарау. Эпилог: әлем бейнесі"
        },
        "text": {
          "ru": "КВАНТ: «Практика — критерий истины! Проведи лабораторные исследования на борту станции и подтверди теорию экспериментом.»",
          "en": "QUANT: \"Practice is the criterion of truth! Conduct laboratory research aboard the station and confirm the theory through experiment.\"",
          "kk": "КВАНТ: «Практика — шындық критерийі! Станцияда зертханалық жұмыстар жүргіз және теорияны тәжірибе арқылы растайтын бол.»"
        }
      }
    ],
    "victory": {
      "ru": "Сектор «Орбиты-9» защищён! Щит Земли укреплён.",
      "en": "Orbit-9 sector secured! Earth's shield reinforced.",
      "kk": "«Орбита-9» секторы қорғалды! Жер қалқаны нығайтылды."
    },
    "defeat": {
      "ru": "Орбитальный сектор перегружен. Проверь расчёты с ИИ КВАНТ и повтори манёвр!",
      "en": "Orbital sector overloaded. Review your calculations with AI QUANT and retry!",
      "kk": "Орбиталық сектор шамадан тыс жүктелді. КВАНТ ЖИ-мен есептеулерді тексеріп, маневрді қайтала!"
    }
  }
];
const EPISODES = [
  {
    "id": "ep0",
    "title": "ДОПУСК К ПОЛЁТАМ",
    "titleEn": "FLIGHT CLEARANCE",
    "titleKk": "ҰШУҒА РҰҚСАТ",
    "levels": [
      1
    ],
    "color": "#ffb300",
    "briefing": "КВАНТ: «Курсант, прежде чем сесть за штурвал — допуск. Правила безопасности в кабинете физики: это твой первый щит. Пройди инструктаж!»",
    "briefingEn": "QUANT: \"Cadet, before you take the helm — clearance. Safety rules in the physics lab: this is your first shield. Go through the briefing!\"",
    "briefingKk": "КВАНТ: «Курсант, штурвалға отырмас бұрын рұқсаттан өту керек. Физика кабинетіндегі қауіпсіздік ережелері — сенің алғашқы қалқаның. Инструктажды орында!»",
    "module": "Сертификат пилота получен",
    "moduleEn": "Pilot certificate obtained",
    "moduleKk": "Ұшқыштық сертификат алынды"
  },
  {
    "id": "ep1",
    "title": "ЛЁТНАЯ ШКОЛА: КИНЕМАТИКА",
    "titleEn": "FLIGHT SCHOOL: KINEMATICS",
    "titleKk": "ҰШУ МЕКТЕБІ: КИНЕМАТИКА",
    "levels": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "color": "#00b8d4",
    "briefing": "КВАНТ: «Чтобы перехватывать метеоры, нужно уметь рассчитывать их движение: траектории, скорости, ускорения. Лётная школа открывает свои двери!»",
    "briefingEn": "KVANT: \"To intercept meteors, you need to be able to calculate their movement: trajectories, speeds, accelerations. The flight school opens its doors!\"",
    "briefingKk": "КВАНТ: «Метеорларды ұстап алу үшін олардың қозғалысын есептей білу қажет: траекториялары, жылдамдықтары, үдеулері. Ұшу мектебі өз есігін ашады!»",
    "module": "Модуль НАВИГАЦИИ активирован",
    "moduleEn": "NAVIGATION module activated",
    "moduleKk": "НАВИГАЦИЯ модулі іске қосылды"
  },
  {
    "id": "ep2",
    "title": "ЗВЁЗДНАЯ КАРТА: АСТРОНОМИЯ",
    "titleEn": "STAR MAP: ASTRONOMY",
    "titleKk": "ЖҰЛДЫЗ КАРТАСЫ: АСТРОНОМИЯ",
    "levels": [
      9,
      10,
      11,
      12,
      13
    ],
    "color": "#7c4dff",
    "briefing": "КВАНТ: «Угроза пришла из глубины космоса. Чтобы найти её источник, научись читать звёздную карту и измерять расстояния до светил.»",
    "briefingEn": "QUANT: \"The threat has come from the depths of space. To find its source, learn to read the star chart and measure the distances to the stars.\"",
    "briefingKk": "КВАНТ: «Қауіп космостың тереңінен келді. Оның көзін табу үшін жұлдыздық картаны оқуға және жарық нүктелеріне дейінгі қашықтықты өлшеуді үйрен.»",
    "module": "Модуль АСТРОНАВИГАЦИИ активирован",
    "moduleEn": "ASTRONAVIGATION module activated",
    "moduleKk": "АСТРОНАВИГАЦИЯ модулі іске қосылды"
  },
  {
    "id": "ep3",
    "title": "ГРАВИТАЦИЯ: ДИНАМИКА",
    "titleEn": "GRAVITATION: DYNAMICS",
    "titleKk": "ГРАВИТАЦИЯ: ДИНАМИКА",
    "levels": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "color": "#d81b60",
    "briefing": "КВАНТ: «Гравитационные манёвры! Законы Ньютона и тяготения позволят использовать планеты как пращу для перехватчика.»",
    "briefingEn": "QUANT: \"Gravitational maneuvers! Newton's laws and gravitation will allow us to use planets as a slingshot for the interceptor.\"",
    "briefingKk": "КВАНТ: «Гравитациялық маневрлер! Ньютон заңдары мен бүкіләлемдік тартылыс заңы ғаламшарларды маневр тіректері ретінде пайдаланып, ұстағышты нысанаға жеткізуге мүмкіндік береді.»",
    "module": "Модуль МАНЁВРОВ активирован",
    "moduleEn": "MANEUVERS module activated",
    "moduleKk": "МАНЁВР модулі іске қосылды"
  },
  {
    "id": "ep4",
    "title": "ЭНЕРГЕТИЧЕСКОЕ ЯДРО: ЗАКОНЫ СОХРАНЕНИЯ",
    "titleEn": "ENERGY CORE: LAWS OF CONSERVATION",
    "titleKk": "ЭНЕРГИЯЛЫҚ ЯДРО: САҚТАУ ЗАҢДАРЫ",
    "levels": [
      21,
      22,
      23,
      24
    ],
    "color": "#ff8a00",
    "briefing": "КВАНТ: «Щит „Орбиты‑9“ питается энергией. Импульс, работа, энергия — законы сохранения сделают тебя повелителем реактора станции.»",
    "briefingEn": "KVANT: \"The shield 'Orbit-9' is powered by energy. Impulse, work, energy — the laws of conservation will make you the master of the station's reactor.\"",
    "briefingKk": "КВАНТ: «„Орбита‑9“ қалқаны энергиямен қамтамасыз етіледі. Импульс, жұмыс, энергия — сақталу заңдары саған станцияның реакторын басқаруға мүмкіндік береді.»",
    "module": "Энергоядро станции запущено",
    "moduleEn": "The station's energy core is launched",
    "moduleKk": "Станцияның ЭНЕРГИЯ ЯДРОСЫ іске қосылды"
  },
  {
    "id": "ep5",
    "title": "СИГНАЛ: КОЛЕБАНИЯ И ВОЛНЫ",
    "titleEn": "SIGNAL: OSCILLATIONS AND WAVES",
    "titleKk": "СИГНАЛ: ТЕРБЕЛІСТЕР МЕН ТОЛҚЫНДАР",
    "levels": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ],
    "color": "#00c853",
    "briefing": "КВАНТ: «Связь с Землёй теряется! Настрой колебательные контуры, поймай резонанс и восстанови сигнал сквозь радиационный шторм.»",
    "briefingEn": "QUANT: \"Communication with Earth is lost! Tune the oscillatory circuits, catch the resonance and restore the signal through the radiation storm.\"",
    "briefingKk": "КВАНТ: «Жермен байланыс жоғалып кетті! Тербеліс контурларын реттеп, резонансты таб және сәулелік дауыл арқылы сигналды қалпына келтір.»",
    "module": "Система СВЯЗИ восстановлена",
    "moduleEn": "COMMUNICATION system restored",
    "moduleKk": "БАЙЛАНЫС жүйесі қалпына келтірілді"
  },
  {
    "id": "ep6",
    "title": "АТОМНЫЙ РУБЕЖ: СТРОЕНИЕ АТОМА",
    "titleEn": "ATOMIC FRONTIER: THE STRUCTURE OF THE ATOM",
    "titleKk": "АТОМДЫҚ ШЕП: АТОМ ҚҰРЫЛЫСЫ",
    "levels": [
      33,
      34,
      35,
      36,
      37
    ],
    "color": "#1976d2",
    "briefing": "КВАНТ: «Впереди радиационный пояс. Кванты, фотоэффект, рентген и радиоактивность — пойми природу излучений, чтобы пройти рубеж.»",
    "briefingEn": "QUANTUM: \"Ahead is the radiation belt. Quanta, photoelectric effect, X-rays, and radioactivity—understand the nature of radiation to pass the frontier.\"",
    "briefingKk": "КВАНТ: «Алда радиациялық белдеу бар. Кванттар, фотоэффект, рентген және радиоактивтілік — сәулеленудің табиғатын түсіну үшін шекті өту.»",
    "module": "Радиационный ЩИТ активирован",
    "moduleEn": "Radiation SHIELD activated",
    "moduleKk": "Радиациялық ҚАЛҚАН қосылды"
  },
  {
    "id": "ep7",
    "title": "СЕРДЦЕ ЯДРА: АТОМНОЕ ЯДРО",
    "titleEn": "HEART OF THE CORE: THE ATOMIC NUCLEUS",
    "titleKk": "ЯДРОНЫҢ ЖҮРЕГІ: АТОМ ЯДРОСЫ",
    "levels": [
      38,
      39,
      40,
      41,
      42
    ],
    "color": "#e53935",
    "briefing": "КВАНТ: «Финал близок. Источник угрозы — нестабильное ядро древнего реактора. Энергия связи, деление и синтез: останови цепную реакцию!»",
    "briefingEn": "QUANT: \"The finale is near. The source of the threat is the unstable core of an ancient reactor. Energy of connection, fission and synthesis: stop the chain reaction!\"",
    "briefingKk": "КВАНТ: «Финал жақын. Қауіптің көзі — ежелгі реактордың тұрақсыз өзегі. Энергия байланысы, бөліну және синтез: тізбекті реакцияны тоқтат!»",
    "module": "Реактор угрозы ОБЕЗВРЕЖЕН",
    "moduleEn": "Threat reactor NEUTRALIZED",
    "moduleKk": "Қауіп реакторы ЗАЛАЛСЫЗДАНДЫРЫЛДЫ"
  },
  {
    "id": "ep8",
    "title": "ЭПИЛОГ: КАРТИНА МИРА",
    "titleEn": "EPILOGUE: THE PICTURE OF THE WORLD",
    "titleKk": "ЭПИЛОГ: ӘЛЕМ БЕЙНЕСІ",
    "levels": [
      43,
      44
    ],
    "color": "#455a64",
    "briefing": "КВАНТ: «Ты прошёл все испытания. Теперь взгляни на мир глазами физика — от элементарных частиц до Вселенной. И сохрани нашу планету.»",
    "briefingEn": "QUANT: \"You have passed all the tests. Now look at the world through the eyes of a physicist — from elementary particles to the Universe. And preserve our planet.\"",
    "briefingKk": "КВАНТ: «Сен барлық сынақтардан өттің. Енді физиктің көзқарасымен әлемге қара — элементарлық бөлшектерден бастап Ғаламға дейін. Және біздің планетамызды сақта.»",
    "module": "ЗЕМЛЯ ЗАЩИЩЕНА!",
    "moduleEn": "EARTH IS PROTECTED!",
    "moduleKk": "ЖЕР ҚОРҒАЛДЫ!"
  },
  {
    "id": "labs",
    "title": "КОСМОЛАБОРАТОРИЯ",
    "titleEn": "SPACE LABORATORY",
    "titleKk": "КОСМОЛАБОРАТОРИЯ",
    "levels": [
      45,
      46,
      47,
      48
    ],
    "color": "#6d4c41",
    "briefing": "КВАНТ: «Практика — критерий истины! Проведи лабораторные исследования на борту станции и подтверди теорию экспериментом.»",
    "briefingEn": "QUANT: \"Practice is the criterion of truth! Conduct laboratory research aboard the station and confirm the theory through experiment.\"",
    "briefingKk": "КВАНТ: «Практика — шындық критерийі! Станцияда зертханалық жұмыстар жүргіз және теорияны тәжірибе арқылы растайтын бол.»",
    "module": "Данные экспериментов переданы на Землю",
    "moduleEn": "Experimental data transmitted to Earth",
    "moduleKk": "Эксперименттік деректер Жерге жеткізілді"
  }
];
const STORY_INTRO = "2087 год. Над Землёй активирована древняя орбитальная оборонная сеть «ОРБИТА‑9». К планете приближаются волны космических угроз: метеорные потоки, магнитные бури, радиационные вспышки. Ты — курсант Академии космической физики. Наставник-ИИ «КВАНТ» проведёт тебя через семь испытаний: от Лётной школы до Сердца Ядра. Освой законы физики — и щит Земли устоит!";
const STORY_LORE = {
  "ru": [
    {
      "title": "Пролог. Сигнал из глубины веков",
      "text": "Год 2087. Над Землёй, на высоте четырёхсот километров, висит «ОРБИТА-9» — орбитальный оборонный щит, о котором младшие поколения знают только из учебников. Полвека назад его построили, чтобы отражать космические угрозы: метеорные потоки, радиационные вспышки, обломки погибших спутников. За десять лет щит отбил семь атак, а потом угрозы прекратились, и щит уснул. Реакторы заглушили, экипажи вернулись на Землю, и только искусственный интеллект КВАНТ остался на посту — в режиме ожидания, с приказом: «Разбудить, если опасность вернётся».\nОпасность вернулась. В ночь на 12 марта обсерватории всех континентов зафиксировали одно и то же: из глубин Солнечной системы к Земле движется каскад угроз. Метеорный рой «Персеиды-Х», за ним — волна магнитных бурь, а следом аномальная радиация неизвестного происхождения. КВАНТ проснулся сам. Его первое сообщение ушло в Академию космической физики: «Щит цел, но у меня нет пилота. Пришлите того, кто понимает физику. У нас мало времени».\nКурсантов в Академии сотни, но симулятор КВАНТА выбрал одного. Тебя. Сегодня утром тебе вручили курсантский комбинезон и сказали: «Летишь на „Орбиту-9“. Захвати учебник физики — он тебе понадобится»."
    },
    {
      "title": "Глава 1. Допуск к полётам",
      "text": "Стыковочный шлюз встречает курсанта холодным светом и голосом из динамиков: «Кадет, прежде чем сесть за штурвал, пройдём допуск. Первый щит физика — не скафандр и не броня. Правила. Их пишут те, кто выжил».\nКВАНТ не признаёт поблажек. Экзамен идёт прямо в лаборатории станции: вот незаземлённый прибор — что произойдёт, если его включить? Вот реактивы на одной полке — какие нельзя ставить рядом? Вот скафандр с повреждённым шлемом — в чём подвох? За каждой ошибкой в этих вопросах когда-то стояла настоящая авария, и КВАНТ знает их все по именам и датам.\nК концу проверки голос ИИ теплеет на полградуса: «Неплохо. Люди часто думают, что техника безопасности — это скучно. На самом деле это самая короткая запись чужого опыта. Теперь ты готов». Панель мигает зелёным: сертификат пилота получен, допуск к полётам открыт. Впереди — первый настоящий вылет."
    },
    {
      "title": "Глава 2. Лётная школа: кинематика",
      "text": "Первый вылет едва не стал последним. КВАНТ бросил курсанту учебную цель — метеор-имитатор, летящий к станции. «Рассчитай точку перехвата», — скомандовал ИИ. Курсант направил корабль «на глаз» — и промахнулся на двести метров. Метеор растаял в темноте, а в наушниках повисла пауза.\n«Космос не прощает глазомера, — сказал наконец КВАНТ. — Возвращаемся на тренировочную орбиту». Целую неделю станция слушала, как курсант бормочет формулы: путь и перемещение, мгновенная скорость, ускорение, графики движения. Каждый день — новый перехват, и каждый раз расчёт точнее: вот корабль выходит на равноускоренный разгон, вот тормозит строго по графику, вот сближается с целью по рассчитанной траектории.\nНа седьмой день перехват прошёл идеально: точка встречи совпала до метра. Модуль «НАВИГАЦИЯ» на панели вспыхнул голубым. «Неплохо, кадет, — произнёс КВАНТ. — Теперь полетим по-настоящему: за пределами тренировочной орбиты у нас нет права на вторую попытку»."
    },
    {
      "title": "Глава 3. Звёздная карта: астрономия",
      "text": "У границы системы случилось то, чего боялись: навигационные датчики захлебнулись в магнитном шуме. Координаты поплыли, экраны покрылись помехами — корабль ослеп посреди пустоты.\n«Спокойно, кадет. Электроника подводит первой. Звёзды — никогда», — голос КВАНТА звучал почти как у старого штурмана. Он открыл курсанту древнюю науку: вот созвездия, по которым люди тысячи лет находили дорогу; вот Темірқазық — Полярная звезда, неподвижная ось ночного неба; вот небесная сфера, по которой движутся светила. А когда курсант освоился — показал, как измерить расстояние до далёкого объекта методом параллакса, взглянув на него «двумя глазами», как это делают с большим пальцем вытянутой руки.\nРасчёт лёг на карту, и та ожила: координаты сошлись, источник угрозы выстроился в чёткую точку на экране. «АСТРОНАВИГАЦИЯ» засияла зелёным. «Мы снова видим, — сказал КВАНТ. — И теперь мы знаем, куда лететь. Пристегнись: впереди поле обломков»."
    },
    {
      "title": "Глава 4. Гравитация: динамика",
      "text": "Поле обломков встретило тишиной и тысячей молчаливых камней, каждый размером с дом. Лететь напрямую — безумие: первый же осколок разнесёт корабль. «Здесь нельзя лететь на силе, кадет. Здесь летят на законах Ньютона», — предупредил КВАНТ.\nИ курсант начал считать силы. Тяготение и вес, свободное падение и невесомость, инерция, которая швыряет корабль вперёд на каждом вираже. Он понял главное: каждый камень вокруг — не враг, а союзник, если правильно рассчитать его притяжение. У края самого крупного астероида корабль нырнул в его гравитационное поле и выполнил «рогатку» — манёвр, при котором чужая тяжесть разгоняет корабль лучше любого двигателя, не тратя ни капли топлива.\nКогда поле обломков осталось позади, КВАНТ долго молчал. Потом произнёс: «Модуль „МАНЁВР“ активирован. Знаешь, что отличает хорошего пилота от великого? Великий чувствует силы так, будто они натянуты у него между пальцами. У тебя начинает получаться»."
    },
    {
      "title": "Глава 5. Энергетическое ядро: законы сохранения",
      "text": "Посреди манёвра станцию накрыла темнота. Погасли экраны, стихли вентиляторы, и только аварийные огни окрасили коридоры красным. «Энергетическое ядро на исходе, — доложил КВАНТ удивительно спокойно. — Резерва хватит на два часа».\nКурсант бросился к реакторному отсеку, но ИИ остановил его: «Паника расходует энергию быстрее, чем приборы. Вспомни главное: энергия не исчезает. Она только переходит из формы в форму. Найди, где она прячется». И курсант начал искать. Кинетическая энергия вращающихся маховиков-накопителей. Потенциальная энергия поднятых грузов балласта. Даже тепло радиаторов — и то можно собрать. Он пересчитал каждый джоуль, перенастроил реактивное движение так, чтобы оно расходовало минимум, и соединил разрозненные запасы в одну цепь.\nКогда рубильник щёлкнул, свет вернулся разом — и станция загудела, как камертон. «ЭНЕРГЕТИЧЕСКОЕ ЯДРО» на панели налилось янтарным светом. «Щит снова запитан, — сказал КВАНТ. — Ты только что доказал закон сохранения на практике. Но не расслабляйся: я перестал слышать Землю»."
    },
    {
      "title": "Глава 6. Сигнал: колебания и волны",
      "text": "Земля молчала третий час. Канал связи оборвался резко, словно кто-то перерезал нить: ни шороха, ни писка, одна пустота на частотах.\n«Антенну сбило манёвром, — определил КВАНТ. — Но антенна — это колебания. А значит, нам нужна не отвёртка, а физика». Курсант поднялся на внешнюю палубу и увидел её: громадная чаша антенны застыла под нештатным углом, маятник привода раскачивался вразнобой. Он начал с простого: измерил период и частоту, понял, куда «уплыл» сигнал, шаг за шагом вернул маятники станции в ритм. Оставалось последнее — резонанс: поймать ту самую частоту, на которой антенна отзовётся полной силой.\nКогда стрелка индикатора дрогнула и поползла вверх, из динамиков сквозь треск пробился голос Земли: «„Орбита-9“, слышим вас. Как вы там?» Курсант рассмеялся впервые за много дней. «Система „СВЯЗЬ“ восстановлена, — констатировал КВАНТ. — А теперь улыбку долой. По курсу радиационный пояс, и он не будет с нами разговаривать»."
    },
    {
      "title": "Глава 7. Атомный рубеж: строение атома",
      "text": "Радиационный пояс невидим — и в этом его коварство. Датчики показали: поток частиц такой плотности, что обшивка продержится минуты. «Обычная броня здесь бесполезна, кадет. Придётся защищаться тем, из чего состоит сама угроза, — атомами», — сказал КВАНТ.\nИ открыл курсанту физику микромира. Вот тепловое излучение: любое тело светится, если знать его температуру. Вот свет, который ведёт себя как поток частиц — квантов — фотонов. Вот фотоэффект, выбивающий электроны из металла, и постоянная Планка — число, на котором держится весь квантовый мир. Понимая это, курсант собрал то, что никто не собирал полвека: защитное поле, настроенное точно на частоту смертоносных частиц.\nПоле включилось тихо, без фанфар. А снаружи от него начали отскакивать кванты — как горох от стены. «Радиационный щит» вспыхнул на панели синим. «Поздравляю, кадет. Ты только что переиграл радиацию в её собственную игру, — произнёс КВАНТ. — Но дальше будет сложнее. За поясом — источник всех наших бед. Древний реактор. И он проснулся»."
    },
    {
      "title": "Глава 8. Сердце ядра: атомное ядро",
      "text": "Древний реактор висел перед иллюминатором — тёмная громада заброшенной станции, внутри которой что-то слабо светилось. «Неуправляемая цепная реакция, — голос КВАНТА звучал тише обычного. — Она разгоняется. Если не остановить — вспышка достанет и до Земли. У нас один заход, кадет».\nКурсант спустился в самое сердце физики. Строение атомного ядра: протоны и нейтроны, удерживаемые самой мощной силой природы. Энергия связи — та, что прячется внутри каждого ядра, и которую человечество научилось высвобождать. Деление тяжёлых ядер и синтез лёгких — две стороны одного процесса, который сейчас вышел из-под контроля. Расчёт за расчётом курсант искал способ оборвать цепь: какие стержни поглотят лишние нейтроны, в каком порядке их ввести, сколько секунд осталось до точки невозврата.\nПоследняя команда ушла в реактор. Секунда. Две. Свечение за обшивкой дрогнуло — и начало гаснуть. «Цепная реакция остановлена, — сказал КВАНТ после долгой паузы. — Опасный реактор обезврежен. Ты справился, кадет. Это была не задача из учебника. Это была настоящая физика»."
    },
    {
      "title": "Глава 9. Эпилог: картина мира",
      "text": "Земля была прикрыта щитом, и впервые за долгие недели на станции стояла настоящая тишина. Курсант думал, что миссия окончена, но КВАНТ попросил задержаться: «Прежде чем ты уйдёшь, покажу тебе главное оружие. Не станции и не поля. Картину мира».\nИ они прошли весь путь науки за один вечер. От первого человека, измерившего тень гномона, — до звёздных карт и параллакса. От падающего яблока и законов Ньютона — до гравитационных манёвров. От закона сохранения энергии — до квантов Планка и ядра атома. И курсант вдруг увидел, что всё это — не разрозненные главы учебника, а одна история о том, как устроен мир, рассказанная на языке физики.\n«Щит снова заступил на дежурство, — сказал КВАНТ на прощание. — Я постою на вахте. А ты возвращайся на Землю и помни: знания — самая надёжная броня. И самая острая стрела»."
    },
    {
      "title": "Глава 10. Космолаборатория",
      "text": "На Земле курсанта встречали как героя, но КВАНТ прислал последнее сообщение: «Праздновать будешь потом. Практика — критерий истины: всё, что ты измерил в полёте, должно стать данными. Жду тебя в космолаборатории».\nИ курсант вернулся — теперь уже к приборам. Повторить на Земле то, что довелось пережить в космосе: измерить ускорение тела, скатывающегося по желобу, и сравнить его с расчётом. Определить начальную скорость тела, брошенного горизонтально. Найти ускорение свободного падения с помощью маятника — того самого, что вернул станции связь, когда сбилась антенна. Измерить скорость волны, бегущей по поверхности воды, — той самой волны, по которой станция звала Землю.\nКаждое измерение, каждый график, каждый вывод превращал пережитое в знание, которым можно поделиться. «Хорошо, кадет, — сказал КВАНТ, принимая отчёт. — Теперь это не только твоя история. Теперь это наука»."
    },
    {
      "title": "Финал. Щит Земли",
      "text": "«ОРБИТА-9» снова несёт вахту над планетой. На доске почёта Академии космической физики появилось новое имя — твоё. А в архиве КВАНТа рядом с записью о миссии появилась короткая пометка: «Пилот аттестован. Рекомендация: допустить к звёздам».\nНо сам КВАНТ на церемонии сказал другое: «Не думайте, что это конец. Каждый день физика открывает новую главу: новые частицы, новые волны, новые звёзды и новые вопросы. А значит — полёт продолжается». И где-то там, на орбите, старый искусственный интеллект смотрит на звёзды и ждёт: когда его пилот подрастёт достаточно, чтобы полететь дальше."
    }
  ],
  "en": [
    {
      "title": "Prologue. A Signal from the Depths of Ages",
      "text": "The year is 2087. Four hundred kilometres above the Earth hangs ORBITA-9 — an orbital defence shield that younger generations know only from textbooks. Half a century ago it was built to repel cosmic threats: meteor showers, radiation bursts, debris from dead satellites. For ten years the shield beat back seven attacks, and then the threats stopped, and the shield fell asleep. The reactors were shut down, the crews returned to Earth, and only QUANT — the artificial intelligence created to command the shield — remained on duty, in standby mode, under a single order: “Wake me if the danger returns.”\nThe danger has returned. On the night of March 12, observatories on every continent recorded the same thing: from the depths of the Solar System, a cascade of threats is moving toward Earth. The meteor shower “Perseids-X”, then a wave of magnetic storms, and behind them — anomalous radiation of unknown origin. QUANT woke up on its own. Its first message went to the Academy of Space Physics: “The shield is intact, but I have no pilot. Send someone who understands physics. We have little time.”\nThe Academy has hundreds of cadets, but QUANT's simulator chose one. You. This morning you were handed a cadet's flight suit and told: “You're flying to Orbita-9. Take your physics textbook — you're going to need it.”"
    },
    {
      "title": "Chapter 1. Flight Clearance",
      "text": "The docking airlock greets the cadet with cold light and a voice from the speakers: “Cadet, before you take the helm, we go through clearance. A physicist's first shield is not a spacesuit and not armour. It is the rules. They are written by those who survived.”\nQUANT allows no mercy. The exam takes place right in the station's laboratory: here is an ungrounded instrument — what happens if you switch it on? Here are reagents on one shelf — which ones must never stand together? Here is a spacesuit with a damaged helmet — what is the trap behind it? Behind each of these questions there once stood a real accident, and QUANT knows them all by name and date.\nBy the end of the check the AI's voice warms by half a degree: “Not bad. People often think safety rules are boring. In fact they are the shortest record of someone else's experience. Now you are ready.” The panel flashes green: the pilot certificate is issued, flight clearance is granted. Ahead lies the first real flight."
    },
    {
      "title": "Chapter 2. Flight School: Kinematics",
      "text": "The first sortie almost became the last. QUANT threw the cadet a training target — a meteor-simulator flying toward the station. “Calculate the intercept point,” the AI ordered. The cadet aimed the ship “by eye” — and missed by two hundred metres. The meteor melted into the darkness, and silence hung in the headphones.\n“Space does not forgive eyeballing,” QUANT said at last. “Back to the training orbit.” For a whole week the station listened to the cadet muttering formulas: distance and displacement, instantaneous velocity, acceleration, graphs of motion. Every day a new intercept, and each time the calculation grew more precise: here the ship accelerates uniformly, here it brakes exactly along the graph, here it closes in on the target along a calculated trajectory.\nOn the seventh day the intercept went perfectly: the meeting point matched down to the metre. The NAVIGATION module flared blue on the panel. “Not bad, cadet,” said QUANT. “Now we fly for real: beyond the training orbit we have no right to a second attempt.”"
    },
    {
      "title": "Chapter 3. Star Map: Astronomy",
      "text": "At the edge of the system the thing they feared happened: the navigation sensors drowned in magnetic noise. The coordinates drifted, the screens filled with static — the ship had gone blind in the middle of nowhere.\n“Stay calm, cadet. Electronics fail first. The stars never do.” QUANT's voice sounded almost like an old navigator's. It opened up an ancient science to the cadet: here are the constellations by which people found their way for thousands of years; here is Polaris, the motionless axis of the night sky; here is the celestial sphere along which the heavenly bodies move. And when the cadet had settled in, QUANT showed how to measure the distance to a faraway object by parallax — looking at it with “two eyes”, the way you do with the thumb of an outstretched hand.\nThe calculation fell onto the map, and the map came alive: the coordinates converged, and the source of the threat snapped into a sharp point on the screen. ASTRONAVIGATION glowed green. “We can see again,” said QUANT. “And now we know where to fly. Buckle up: a field of wreckage lies ahead.”"
    },
    {
      "title": "Chapter 4. Gravitation: Dynamics",
      "text": "The wreckage field met them with silence and a thousand mute stones, each the size of a house. Flying straight through was madness: the very first fragment would tear the ship apart. “You cannot fly on power here, cadet. Here you fly on Newton's laws,” QUANT warned.\nAnd the cadet began to count forces. Gravity and weight, free fall and weightlessness, the inertia that flings the ship forward on every turn. He understood the main thing: every stone around him is not an enemy but an ally — if you calculate its pull correctly. At the edge of the largest asteroid the ship dove into its gravitational field and performed the slingshot — a manoeuvre in which someone else's gravity accelerates the ship better than any engine, without spending a single drop of fuel.\nWhen the wreckage field was left behind, QUANT was silent for a long time. Then it said: “MANEUVER module activated. Do you know what separates a good pilot from a great one? A great one feels forces as if they were stretched between his fingers. You are starting to get there.”"
    },
    {
      "title": "Chapter 5. The Energy Core: Laws of Conservation",
      "text": "In the middle of the manoeuvre darkness fell over the station. Screens went out, fans fell silent, and only the emergency lights painted the corridors red. “The energy core is running out,” QUANT reported, surprisingly calm. “The reserve will last two hours.”\nThe cadet rushed to the reactor bay, but the AI stopped him: “Panic burns energy faster than instruments do. Remember the main thing: energy does not vanish. It only changes from one form to another. Find where it is hiding.” And the cadet began to search. Kinetic energy in the spinning flywheel storage units. Potential energy in the raised ballast weights. Even the heat of the radiators — that too can be gathered. He recomputed every joule, retuned the jet propulsion to spend as little as possible, and linked the scattered reserves into a single circuit.\nWhen the breaker clicked, the light returned all at once — and the station hummed like a tuning fork. The ENERGY CORE on the panel filled with amber light. “The shield is powered again,” said QUANT. “You have just proved the law of conservation in practice. But don't relax: I have stopped hearing Earth.”"
    },
    {
      "title": "Chapter 6. The Signal: Oscillations and Waves",
      "text": "Earth had been silent for three hours. The communication channel had snapped as if someone cut a thread: not a rustle, not a beep, only emptiness on every frequency.\n“The antenna was knocked out of alignment by the manoeuvre,” QUANT diagnosed. “But an antenna is oscillations. Which means we need physics, not a screwdriver.” The cadet climbed onto the outer deck and saw it: the enormous dish of the antenna frozen at an odd angle, its drive pendulum swinging out of rhythm. He started with the basics: measured the period and the frequency, understood where the signal had “drifted”, step by step bringing the station's pendulums back into rhythm. Only one thing remained — resonance: catching the very frequency at which the antenna answers at full strength.\nWhen the indicator needle trembled and began to climb, a voice from Earth broke through the static in the speakers: “Orbita-9, we hear you. How are you doing up there?” The cadet laughed for the first time in days. “COMMUNICATION system restored,” QUANT stated. “Now wipe off the smile. Ahead of us is the radiation belt, and it will not be making conversation.”"
    },
    {
      "title": "Chapter 7. Atomic Frontier: The Structure of the Atom",
      "text": "The radiation belt is invisible — and that is what makes it treacherous. The sensors showed a particle flux so dense that the hull would last minutes. “Ordinary armour is useless here, cadet. We will have to defend ourselves with the very thing the threat itself is made of — atoms,” said QUANT.\nAnd it opened the physics of the microworld to the cadet. Here is thermal radiation: every body glows if you know its temperature. Here is light behaving as a stream of particles — quanta called photons. Here is the photoelectric effect, knocking electrons out of metal, and Planck's constant — the number the whole quantum world rests on. Understanding all this, the cadet built what nobody had built for half a century: a protective field tuned exactly to the frequency of the deadly particles.\nThe field switched on quietly, without fanfare. And outside, quanta began bouncing off it like peas off a wall. The RADIATION SHIELD flared blue on the panel. “Congratulations, cadet. You have just outplayed radiation at its own game,” said QUANT. “But further on it gets harder. Beyond the belt lies the source of all our troubles. An ancient reactor. And it has woken up.”"
    },
    {
      "title": "Chapter 8. Heart of the Core: The Atomic Nucleus",
      "text": "The ancient reactor hung before the porthole — the dark bulk of an abandoned station, inside which something glowed faintly. “An uncontrolled chain reaction.” QUANT's voice was quieter than usual. “It is accelerating. If we don't stop it, the flash will reach Earth. We get one pass, cadet.”\nThe cadet descended into the very heart of physics. The structure of the atomic nucleus: protons and neutrons held together by the most powerful force in nature. Binding energy — the energy hidden inside every nucleus, which humanity learned to release. Fission of heavy nuclei and fusion of light ones — two sides of the same process, now out of control. Calculation after calculation, the cadet searched for a way to break the chain: which rods would absorb the surplus neutrons, in what order to insert them, how many seconds remained before the point of no return.\nThe final command went into the reactor. One second. Two. The glow beyond the hull trembled — and began to fade. “The chain reaction is stopped,” QUANT said after a long pause. “The dangerous reactor has been neutralised. You did it, cadet. That was not a textbook problem. That was real physics.”"
    },
    {
      "title": "Chapter 9. Epilogue: The Picture of the World",
      "text": "The Earth was covered by the shield, and for the first time in weeks true silence stood on the station. The cadet thought the mission was over, but QUANT asked him to stay: “Before you leave, I will show you the main weapon. Not the station. Not the field. The picture of the world.”\nAnd together they walked the whole road of science in one evening. From the first person who measured the shadow of a gnomon — to star maps and parallax. From a falling apple and Newton's laws — to gravitational manoeuvres. From the law of conservation of energy — to Planck's quanta and the atomic nucleus. And the cadet suddenly saw that all of it is not separate chapters of a textbook, but a single story about how the world is made, told in the language of physics.\n“The shield is back on duty,” QUANT said in farewell. “I will stand watch. And you go back to Earth and remember: knowledge is the most reliable armour. And the sharpest arrow.”"
    },
    {
      "title": "Chapter 10. Space Laboratory",
      "text": "On Earth the cadet was welcomed as a hero, but QUANT sent one last message: “Celebrate later. Practice is the criterion of truth: everything you measured in flight must become data. I am waiting for you in the space laboratory.”\nAnd the cadet returned — this time to the instruments. To repeat on Earth what had been lived through in space: to measure the acceleration of a body rolling down a chute and compare it with the calculation. To determine the initial velocity of a body thrown horizontally. To find the acceleration of free fall with a pendulum — the very one that saved the station when the antenna failed. To measure the speed of a wave running across the surface of water — the very wave by which the station called for Earth.\nEvery measurement, every graph, every conclusion turned what had been lived through into knowledge that can be shared. “Well done, cadet,” QUANT said, accepting the report. “Now this is not only your story. Now this is science.”"
    },
    {
      "title": "Finale. The Shield of the Earth",
      "text": "ORBITA-9 stands watch over the planet once again. A new name has appeared on the Academy of Space Physics' honour board — yours. And in QUANT's archive, next to the mission record, a short note has appeared: “Pilot certified. Recommendation: cleared for the stars.”\nBut QUANT itself said something else at the ceremony: “Do not think this is the end. Every day physics opens a new chapter: new particles, new waves, new stars and new questions. Which means — the flight continues.” And somewhere up there, in orbit, an old artificial intelligence looks at the stars and waits: for its pilot to grow enough to fly further."
    }
  ],
  "kk": [
    {
      "title": "Кіріспе. Уақыт тереңінен келген сигнал",
      "text": "2087 жыл. Жерден төрт жүз шақырым биіктікте «ОРБИТА-9» орбиталық қорғаныс қалқаны ілініп тұр — оны жас ұрпақ тек оқулықтардан біледі. Жарты ғасыр бұрын оны ғарыштық қауіптерді тойтару үшін салған: метеор ағындары, радиациялық жарқылдар, істен шыққан жерсеріктердің сынықтары. Он жыл бойы қалқан жеті шабуылды қайтарды, сосын қауіптер тиылды да, қалқан ұйқыға кетті. Реакторларды сөндірді, экипаждар Жерге қайтты, тек қалқанды басқару үшін жасалған жасанды интеллект КВАНТ қарауылда қалды — күту режимінде, бұйрықпен: «Қауіп қайта оралса — ояту».\nҚауіп қайта оралды. 12 наурызға қараған түні барлық құрлықтағы обсерваториялар бір нәрсені тіркеді: Күн жүйесінің тереңінен Жерге қарай қауіптер легі жылжып келеді. «Персеидтер-Х» метеор ағыны, оның артынан магниттік дауылдар толқыны, сосын шығу тегі белгісіз аномальді радиация. КВАНТ өздігінен оянды. Оның алғашқы хабарламасы Ғарыш физикасы академиясына кетті: «Қалқан бүтін, бірақ менде ұшқыш жоқ. Физиканы түсінетін біреуді жіберіңдер. Уақытымыз аз».\nАкадемияда курсанттар жүздеген, бірақ КВАНТ-тың симуляторы біреуді таңдады. Сені. Бүгін таңертең саған курсант комбинезонын табыстап: «„Орбита-9“-ға ұшасың. Физика оқулығын ал — ол саған керек болады», — деді."
    },
    {
      "title": "1-тарау. Ұшуға рұқсат",
      "text": "Тіркесу шлюзі курсантты суық жарықпен және динамиктерден шыққан дауыспен қарсы алады: «Кадет, штурвалға отырмас бұрын рұқсаттан өтейік. Физиктің бірінші қалқаны — скафандр да, сауыт та емес. Ережелер. Оларды аман қалғандар жазады».\nКВАНТ жеңілдік бермейді. Емтихан станцияның зертханасында өтеді: мынау жерленбеген аспап — оны қоссаң не болады? Мынау бір сөредегі реактивтер — қайсысын қатар қоюға болмайды? Мынау дулығасы зақымданған скафандр — тұзағы неде? Бұл сұрақтардың әрқайсысының артында кезінде нақты апат тұр, оларды КВАНТ аты-жөнімен, күнімен біледі.\nТексеру соңында ИИ дауысы жарты градусқа жылиды: «Жаман емес. Адамдар техника қауіпсіздігін жалықтырады деп ойлайды. Шын мәнінде ол — өзгенің тәжірибесінің ең қысқа жазбасы. Енді сен дайынсың». Панель жасыл болып жыпылықтайды: ұшқыш сертификаты алынды, ұшуға рұқсат ашылды. Алда — алғашқы нағыз ұшу."
    },
    {
      "title": "2-тарау. Ұшу мектебі: кинематика",
      "text": "Алғашқы ұшу соңғы ұшу бола жаздады. КВАНТ курсантқа оқу нысанасын тастады — станцияға қарай ұшып келе жатқан метеор-имитатор. «Кездесу нүктесін есепте», — деп бұйырды ИИ. Курсант кемені «көзбен шамалап» бағыттады — екі жүз метрге қате кетті. Метеор қараңғыда еріп кетті, құлаққапта үнсіздік орнады.\n«Ғарыш көзбен шамалауды кешірмейді, — деді ақыры КВАНТ. — Жаттығу орбитасына қайтамыз». Бір апта бойы станция курсанттың формулаларды күбірлегенін тыңдады: жол мен орын ауыстыру, лездік жылдамдық, үдеу, қозғалыс графиктері. Күн сайын — жаңа ұстап алу, әр жолы есеп дәлірек: міне, кеме бірқалыпты үдемелі қозғалыспен жүреді, міне, график бойынша дәл тежейді, міне, есептелген траекториямен нысанаға жақындайды.\nЖетінші күні ұстап алу мінсіз өтті: кездесу нүктесі метріне дейін сәйкес келді. Панельдегі «НАВИГАЦИЯ» модулі көк түспен жанды. «Жаман емес, кадет, — деді КВАНТ. — Енді нағыз ұшамыз: жаттығу орбитасынан тыс жерде бізде екінші мүмкіндік жоқ»."
    },
    {
      "title": "3-тарау. Жұлдыз картасы: астрономия",
      "text": "Жүйенің шекарасында қорыққан нәрсе болды: навигациялық датчиктер магниттік шуға тұншығып қалды. Координаттар жылжи бастады, экрандарды кедергі басты — кеме бос кеңістіктің ортасында соқыр болып қалды.\n«Сабыр бол, кадет. Электроника бірінші болып сатады. Жұлдыздар — ешқашан», — КВАНТ-тың дауысы ескі штурманға ұқсап кетті. Ол курсантқа ежелгі ғылымды ашты: міне, мыңдаған жылдар бойы адамдар жол тауып келе жатқан жұлдыз топтары; міне, түнгі аспанның қозғалмайтын осі — Темірқазық; міне, аспан сферасы, оның бойымен шырақтар қозғалады. Ал курсант дағдыланған соң, алыстағы нысанға дейінгі қашықтықты параллакс әдісімен өлшеуді көрсетті: созылған қолдың бас бармағымен жасайтындай, нысанға «екі көзбен» қарап.\nЕсеп картаға түсіп, карта жанды: координаттар сәйкес келді, қауіп көзі экраннан нақты нүкте болып көрінді. «АСТРОНАВИГАЦИЯ» жасыл болып жанды. «Біз қайта көріп тұрмыз, — деді КВАНТ. — Енді қайда ұшатынымызды білеміз. Белбеуіңді тақ: алда сынықтар өрісі»."
    },
    {
      "title": "4-тарау. Гравитация: динамика",
      "text": "Сынықтар өрісін тыныштық пен мыңдаған үнсіз тас қарсы алды, олардың әрқайсысы үйдің көлеміндей. Тікелей ұшу — ақылсыздық: бірінші сынық кемені талқандайды. «Мұнда күшпен ұшуға болмайды, кадет. Мұнда Ньютон заңдарымен ұшады», — деп ескертті КВАНТ.\nСөйтіп курсант күштерді есептей бастады. Тартылыс пен салмақ, еркін түсу мен салмақсыздық, әр бұрылыста кемені алға лақтыратын инерция. Ол бастысын түсінді: айналадағы әр тас — дұшпан емес, оның тартылысын дұрыс есептесең — одақтас. Ең ірі астероидтың шетінде кеме оның гравитациялық өрісіне сүңгіп, «рогатка» жасады — өзге ауырлық кемені отынның бір тамшысын жұмсамай-ақ үдететін маневр.\nСынықтар өрісі артта қалғанда КВАНТ ұзақ үнсіз отырды. Сосын: «„МАНЁВР“ модулі іске қосылды. Жақсы ұшқышты ұлы ұшқыштан не ерекшелейді, білесің бе? Ұлысы күштерді саусақтарының арасында керілгендей сезеді. Сенде енді осылай бола бастады», — деді."
    },
    {
      "title": "5-тарау. Энергетикалық ядро: сақталу заңдары",
      "text": "Маневр ортасында станцияны қараңғылық басты. Экрандар сөнді, желдеткіштер тынды, дәліздерді тек апаттық шамдар қызылға бояды. «Энергетикалық ядро таусылып келеді, — деп хабарлады КВАНТ таңғаларлықтай сабырмен. — Қор екі сағатқа жетеді».\nКурсант реактор бөліміне ұмтылды, бірақ ИИ оны тоқтатты: «Дүрбелең энергияны аспаптардан да тез жейді. Бастысын есіңе ал: энергия жоғалмайды. Ол тек бір түрден екінші түрге ауысады. Оның қайда жасырынғанын тап». Сөйтіп курсант іздей бастады. Маховик-жинақтағыштардың айналуындағы кинетикалық энергия. Балласт жүктерінің көтерілуіндегі потенциалдық энергия. Тіпті радиаторлардың жылуын да жинауға болады. Ол әр джоульді қайта есептеп, реактивті қозғалысты аз шығындайтындай етіп қайта баптады да, бытыраңқы қорларды бір тізбекке біріктірді.\nАжыратқыш шерт еткенде жарық бірден қайта оралды — станция камертондай күңіреніп қоя берді. Панельдегі «ЭНЕРГЕТИКАЛЫҚ ЯДРО» кәріптас түспен толды. «Қалқан қайта қуат алды, — деді КВАНТ. — Сен сақталу заңын іс жүзінде дәлелдедің. Бірақ босаңсыма: мен Жерді естімей қалдым»."
    },
    {
      "title": "6-тарау. Сигнал: тербелістер мен толқындар",
      "text": "Жер үшінші сағат үндемейді. Байланыс арнасы біреу жіпті қиып тастағандай үзілді: сыбдыр да, сигнал да жоқ, жиіліктерде тек бос кеңістік.\n«Антеннаны маневр қисайтқан, — деп анықтады КВАНТ. — Бірақ антенна — ол тербелістер. Демек, бізге бұрағыш емес, физика керек». Курсант сыртқы палубаға шығып, оны көрді: антеннаның зор тостағаны қисық бұрышта қатып қалған, жетек маятнигі әрқалай тербеледі. Ол қарапайымынан бастады: период пен жиілікті өлшеді, сигналдың қайда «жүзіп кеткенін» түсінді, станцияның маятниктерін қадам сайын ырғаққа қайтарды. Соңғысы қалды — резонанс: антенна толық қуатымен жауап беретін дәл сол жиілікті ұстау.\nИндикатор тілі дірілдеп, жоғары жылжи бастағанда, динамиктерден сытыр арасынан Жердің дауысы естілді: «„Орбита-9“, естіп тұрмыз. Жағдайларың қалай?» Курсант талай күннен кейін алғаш рет күліп жіберді. «„БАЙЛАНЫС“ жүйесі қалпына келтірілді, — деп түйіндеді КВАНТ. — Енді күлкіні қоя тұр. Бағытымызда радиациялық белдеу бар, ол бізбен сөйлеспейді»."
    },
    {
      "title": "7-тарау. Атомдық шебі: атом құрылысы",
      "text": "Радиациялық белдеу көзге көрінбейді — оның қулығы да осында. Датчиктер көрсетті: бөлшектер ағыны соншалық тығыз, қаптама минуттар ғана шыдайды. «Кәдімгі сауыт мұнда пайдасыз, кадет. Қауіптің өзі тұратын нәрсемен — атомдармен қорғанамыз», — деді КВАНТ.\nСөйтіп ол курсантқа микроәлем физикасын ашты. Міне, жылулық сәуле шығару: температурасын білсең, кез келген дене сәуле шашады. Міне, бөлшектер — фотон-кванттар ағыны ретінде жүретін жарық. Міне, металдан электрондарды ұшырып шығаратын фотоэффект және бүкіл кванттық әлем тіреліп тұрған Планк тұрақтысы. Осыны түсінген курсант жарты ғасыр бойы ешкім құрастырмағанды құрастырды: өлімші бөлшектердің жиілігіне дәл бапталған қорғаныс өрісін.\nӨріс салтанатсыз, тыныш қосылды. Ал оның сыртында кванттар қабырғаға соққан бұршақтай секіре бастады. Панельде «Радиациялық қалқан» көк түспен жанып кетті. «Құттықтаймын, кадет. Сен радиацияны оның өз ойынында жеңдің, — деді КВАНТ. — Бірақ әрі қарай қиынырақ болады. Белдеудің арғы жағында — барлық бәлеміздің бастауы. Ежелгі реактор. Ол оянды»."
    },
    {
      "title": "8-тарау. Ядроның жүрегі: атом ядросы",
      "text": "Ежелгі реактор иллюминатордың алдында тұрды — қараңғы зор денелі, тасталған станция, оның ішінде бірдеңе бәсең жарқырайды. «Басқарылмайтын тізбекті реакция, — КВАНТ-тың дауысы әдеттегіден тыныш шықты. — Ол үдей түсуде. Тоқтата алмасақ — жарқыл Жерге де жетеді. Бізде бір ғана мүмкіндік, кадет».\nКурсант физиканың ең жүрегіне түсті. Атом ядросының құрылысы: табиғаттағы ең қуатты күш ұстап тұрған протондар мен нейтрондар. Байланыс энергиясы — әр ядроның ішінде жасырынған, адамзат оны босатуды үйренген энергия. Ауыр ядролардың бөлінуі мен жеңіл ядролардың синтезі — қазір бақылаудан шығып кеткен бір процестің екі жағы. Есептеу артынан есептеу жасап, курсант тізбекті үзу жолын іздеді: қай стерженьдер артық нейтрондарды жұтады, оларды қандай ретпен енгізу керек, қайтарылмас нүктеге дейін неше секунд қалды.\nСоңғы бұйрық реакторға кетті. Бір секунд. Екі. Қаптама артындағы жарқыл дірілдеді — сөне бастады. «Тізбекті реакция тоқтатылды, — деді КВАНТ ұзақ паузадан кейін. — Қауіпті реактор залалсыздандырылды. Сен бұған шамаң жетті, кадет. Бұл оқулықтағы есеп емес еді. Бұл нағыз физика еді»."
    },
    {
      "title": "9-тарау. Эпилог: әлем бейнесі",
      "text": "Жер қалқанмен жабылды, ал апта бойы алғаш рет станцияда нағыз тыныштық орнады. Курсант миссия бітті деп ойлаған, бірақ КВАНТ аялдауды өтінді: «Кетер алдында саған басты қаруды көрсетейін. Станция емес. Өріс емес. Әлем бейнесі».\nСөйтіп олар бір кеште ғылымның бүкіл жолын жүріп өтті. Гномонның көлеңкесін өлшеген алғашқы адамнан — жұлдыз карталары мен параллаксқа дейін. Түскен алма мен Ньютон заңдарынан — гравитациялық маневрлерге дейін. Энергияның сақталу заңынан — Планк кванттары мен атом ядросына дейін. Сөйтіп курсант мұның бәрі оқулықтың бөлек тараулары емес, физика тілінде айтылған, әлемнің қалай құрылғаны туралы бір ғана әңгіме екенін көрді.\n«Қалқан қайтадан қарауылға тұрды, — деді КВАНТ қоштасарда. — Мен қарауылда тұрамын. Ал сен Жерге қайт және есте сақта: білім — ең сенімді сауыт. Әрі ең өткір жебе»."
    },
    {
      "title": "10-тарау. Космолаборатория",
      "text": "Жерде курсантты батыр ретінде қарсы алды, бірақ КВАНТ соңғы хабарламасын жіберді: «Мерекені кейін тойлайсың. Практика — ақиқаттың критерийі: ұшу кезінде өлшегеннің бәрі дерек болуы тиіс. Сені космолабораторияда күтемін».\nСөйтіп курсант қайта оралды — енді аспаптарға. Ғарышта бастан кешкенін Жерде қайталау: науамен домалаған дененің үдеуін өлшеп, оны есептеумен салыстыру. Көлденең лақтырылған дененің бастапқы жылдамдығын анықтау. Антенна істен шыққанда станцияны құтқарған маятниктің көмегімен еркін түсу үдеуін табу. Су бетімен жүгірген толқынның жылдамдығын өлшеу — станция Жерді шақырған сол толқынның.\nӘр өлшеу, әр график, әр қорытынды бастан кешкенді бөлісуге болатын білімге айналдырды. «Жақсы, кадет, — деді КВАНТ есепті қабылдап алып. — Енді бұл тек сенің ғана тарихың емес. Енді бұл — ғылым»."
    },
    {
      "title": "Финал. Жер қалқаны",
      "text": "«ОРБИТА-9» қайтадан планета үстінде қарауылда. Ғарыш физикасы академиясының құрмет тақтасында жаңа есім пайда болды — сенің есімің. Ал КВАНТ-тың мұрағатында миссия туралы жазбаның қасында қысқаша белгі пайда болды: «Ұшқыш аттестацияланды. Ұсыныс: жұлдыздарға жіберу».\nБірақ КВАНТ-тың өзі салтанатта басқа сөз айтты: «Бұл соңы деп ойламаңдар. Физика күн сайын жаңа тарау ашады: жаңа бөлшектер, жаңа толқындар, жаңа жұлдыздар мен жаңа сұрақтар. Демек — ұшу жалғасады». Ал орбитада бір жерде ескі жасанды интеллект жұлдыздарға қарап, күтіп тұр: оның ұшқышы әрі қарай ұшуға жеткілікті есейгенше."
    }
  ]
};
const LEVEL_NAMES_RU = {
  "1": "🛡 Допуск к полётам: техника безопасности",
  "2": "§1. Механическое движение",
  "3": "§2. Векторы и действия над ними",
  "4": "§3. Равнопеременное движение, ускорение",
  "5": "§4. Скорость и перемещение при равноускоренном движении",
  "6": "§5. Свободное падение тел",
  "7": "§6. Криволинейное движение. Движение по окружности",
  "8": "§7. Центростремительное ускорение",
  "9": "§8. Звёздное небо",
  "10": "§9. Небесная сфера, системы небесных координат",
  "11": "§10. Видимое движение светил. Местное, поясное и всемирное время",
  "12": "§11. Законы движения планет Солнечной системы",
  "13": "§12. Определение расстояний в астрономии методом параллакса",
  "14": "§13. Первый закон Ньютона. Инерциальные системы отсчёта",
  "15": "§14. Силы в механике",
  "16": "§15. Второй закон Ньютона, масса",
  "17": "§16. Третий закон Ньютона",
  "18": "§17. Закон всемирного тяготения",
  "19": "§18. Вес тела, невесомость",
  "20": "§19. Движение тела под действием силы тяжести. Спутники",
  "21": "§20. Импульс тела и импульс силы. Закон сохранения импульса",
  "22": "§21. Реактивное движение",
  "23": "§22. Механическая работа и энергия",
  "24": "§23. Закон сохранения и превращения энергии",
  "25": "§24. Колебательное движение",
  "26": "§25. Превращение энергии при колебаниях. Уравнение колебаний",
  "27": "§26. Колебания математического и пружинного маятников",
  "28": "§27. Свободные и вынужденные колебания, резонанс",
  "29": "§28. Свободные электромагнитные колебания",
  "30": "§29. Волновое движение",
  "31": "§30. Звук, характеристики звука, резонанс, эхо",
  "32": "§31. Электромагнитные волны. Шкала электромагнитных волн",
  "33": "§32. Тепловое излучение",
  "34": "§33. Гипотеза Планка о световых квантах. Фотоэффект",
  "35": "§34. Рентгеновское излучение",
  "36": "§35. Радиоактивность. Природа радиоактивных излучений",
  "37": "§36. Опыт Резерфорда, строение атома",
  "38": "§37. Ядерное взаимодействие. Дефект масс, энергия связи",
  "39": "§38. Ядерные реакции, закон радиоактивного распада",
  "40": "§39. Деление тяжёлых ядер, цепная реакция. Ядерный реактор",
  "41": "§40. Термоядерные реакции. Радиоизотопы, защита от радиации",
  "42": "§41. Элементарные частицы",
  "43": "§42. Мировоззренческое значение физики и астрономии",
  "44": "§43. Экологическая культура",
  "45": "🔬 Лаб. №1: Ускорение при равноускоренном движении",
  "46": "🔬 Лаб. №2: Движение тела, брошенного горизонтально",
  "47": "🔬 Лаб. №3: Ускорение свободного падения (маятник)",
  "48": "🔬 Лаб. №4: Скорость поверхностной волны"
};
const LEVEL_NAMES_EN = {
  "1": "🛡 Flight Clearance: Safety Rules",
  "2": "§1. Mechanical motion",
  "3": "§2. Vectors and operations on them",
  "4": "§3. Uniformly variable motion, acceleration",
  "5": "§4. Speed and displacement in uniformly accelerated motion",
  "6": "§5. Free fall of bodies",
  "7": "§6. Curvilinear motion. Circular motion",
  "8": "§7. Centripetal acceleration",
  "9": "§8. Starry Sky",
  "10": "§9. Celestial sphere, celestial coordinate systems",
  "11": "§10. Apparent motion of celestial bodies. Local, zone, and universal time",
  "12": "§11. Laws of motion of the planets of the Solar System",
  "13": "§12. Determining distances in astronomy by the parallax method",
  "14": "§13. Newton's first law. Inertial frames of reference",
  "15": "§14. Forces in mechanics",
  "16": "§15. Newton's second law, mass",
  "17": "§16. Newton's third law",
  "18": "§17. Law of universal gravitation",
  "19": "§18. Body weight, weightlessness",
  "20": "§19. Motion of a body under the influence of gravity. Satellites",
  "21": "§20. Momentum of a body and momentum of a force. Law of conservation of momentum",
  "22": "§21. Reactive motion",
  "23": "§22. Mechanical work and energy",
  "24": "§23. Law of conservation and transformation of energy",
  "25": "§24. Oscillatory motion",
  "26": "§25. Energy transformation in oscillations. Oscillation equation",
  "27": "§26. Oscillations of mathematical and spring pendulums",
  "28": "§27. Free and forced oscillations, resonance",
  "29": "§28. Free electromagnetic oscillations",
  "30": "§29. Wave motion",
  "31": "§30. Sound, characteristics of sound, resonance, echo",
  "32": "§31. Electromagnetic waves. Electromagnetic wave scale",
  "33": "§32. Thermal radiation",
  "34": "§33. Planck's hypothesis about light quanta. Photoelectric effect",
  "35": "§34. X-ray radiation",
  "36": "§35. Radioactivity. Nature of radioactive emissions",
  "37": "§36. Rutherford experiment, atomic structure",
  "38": "§37. Nuclear interaction. Mass defect, binding energy",
  "39": "§38. Nuclear reactions, law of radioactive decay",
  "40": "§39. Fission of heavy nuclei, chain reaction. Nuclear reactor",
  "41": "§40. Thermonuclear reactions. Radioisotopes, radiation protection",
  "42": "§41. Elementary particles",
  "43": "§42. Worldview significance of physics and astronomy",
  "44": "§43. Environmental culture",
  "45": "🔬 Lab #1: Acceleration in uniformly accelerated motion",
  "46": "🔬 Lab #2: Motion of a body thrown horizontally",
  "47": "🔬 Lab #3: Acceleration due to gravity (pendulum)",
  "48": "🔬 Lab #4: Speed of a surface wave"
};
const LEVEL_NAMES_KK = {
  "1": "🛡 Ұшуға рұқсат: қауіпсіздік ережелері",
  "2": "§1. Механикалық қозғалыс",
  "3": "§2. Векторлар және олармен әрекеттер",
  "4": "§3. Тең үдемелі қозғалыс, үдеу",
  "5": "§4. Тең үдеумен қозғалыста жылдамдық пен орын ауыстыру",
  "6": "§5. Денелердің еркін түсуі",
  "7": "§6. Қисық сызықты қозғалыс. Шеңбер бойымен қозғалыс",
  "8": "§7. Центрге тартқыш үдеу",
  "9": "§8. Жұлдызды аспан",
  "10": "§9. Аспан сферасы, аспан координаталар жүйесі",
  "11": "§10. Аспан денелерінің көрінетін қозғалысы. Жергілікті, белдеулік және дүниежүзілік уақыт",
  "12": "§11. Күн жүйесіндегі планеталардың қозғалыс заңдары",
  "13": "§12. Астрономияда параллакс әдісімен қашықтықтарды анықтау",
  "14": "§13. Ньютонның бірінші заңы. Инерциялық санау жүйелері",
  "15": "§14. Механикадағы күштер",
  "16": "§15. Ньютонның екінші заңы, масса",
  "17": "§16. Ньютонның үшінші заңы",
  "18": "§17. Ғаламдық тартылу заңы",
  "19": "§18. Дененің салмағы, салмақсыздық",
  "20": "§19. Дененің ауырлық күшінің әрекетімен қозғалысы. Жасанды серіктер",
  "21": "§20. Дененің импульсі және күш импульсі. Импульстің сақталу заңы",
  "22": "§21. Реактивті қозғалыс",
  "23": "§22. Механикалық жұмыс және энергия",
  "24": "§23. Энергияны сақтау және түрлендіру заңы",
  "25": "§24. Тербелмелі қозғалыс",
  "26": "§25. Тербелістер кезіндегі энергияның түрленуі. Тербеліс теңдеуі",
  "27": "§26. Математикалық және серіппелі маятниктердің тербелістері",
  "28": "§27. Еркін және мәжбүрлі тербелістер, резонанс",
  "29": "§28. Еркін электромагниттік тербелістер",
  "30": "§29. Толқындық қозғалыс",
  "31": "§30. Дыбыс, дыбыстың сипаттары, резонанс, эхо",
  "32": "§31. Электромагниттік толқындар. Электромагниттік толқындардың шкаласы",
  "33": "§32. Жылулық сәулелену",
  "34": "§33. Планктің жарық кванттары туралы гипотезасы. Фотоэффект",
  "35": "§34. Рентген сәулеленуі",
  "36": "§35. Радиоактивтік. Радиоактивтік сәулеленудің табиғаты",
  "37": "§36. Резерфорд тәжірибесі, атомның құрылысы",
  "38": "§37. Ядролық өзара әрекеттесу. Масса ақауы, байланыс энергиясы",
  "39": "§38. Ядролық реакциялар, радиоактивтік ыдырап кету заңы",
  "40": "§39. Ауыр ядролардың бөлінуі, тізбекті реакция. Ядролық реактор",
  "41": "§40. Термоядролық реакциялар. Радиоизотоптар, радиациядан қорғау",
  "42": "§41. Элементарлық бөлшектер",
  "43": "§42. Физика мен астрономияның дүниетанымдық мәні",
  "44": "§43. Экологиялық мәдениет",
  "45": "🔬 Зерт. №1: Бірқалыпты үдемелі қозғалыстың үдеуі",
  "46": "🔬 Зерт. №2: Көлденең лақтырылған дененің қозғалысы",
  "47": "🔬 Зерт. №3: Еркін түсу үдеуі (маятник)",
  "48": "🔬 Зерт. №4: Беттік толқынның жылдамдығы"
};
const LEVEL_THEORY = {
  "p1": {
    "ru": "## Кинематика и механическое движение\n• Механическое движение — изменение положения тела в пространстве относительно других тел с течением времени.\n• Кинематика — раздел механики, в котором движение изучается без выяснения его причин.\n• Материальная точка — тело, формой и размерами которого в данной задаче можно пренебречь.\n• Система отсчёта: тело отсчёта + система координат + часы.\n## Относительность движения\n• Скорость тела зависит от выбора системы отсчёта.\n> υ = υ_пер + υ_отн (теорема сложения скоростей)\n• Переносная скорость — скорость подвижной системы отсчёта; относительная — скорость тела в этой системе.\n## Практика\n• Координата тела зависит от точки отсчёта, вида движения, скорости и времени.",
    "en": "## Kinematics and Mechanical Motion\n• Mechanical motion is the change in the position of a body in space relative to other bodies over time.\n• Kinematics is a branch of mechanics in which motion is studied without determining its causes.\n• Material point is a body whose shape and size can be neglected in the given problem.\n• Frame of reference: reference body + coordinate system + clock.\n## Relativity of Motion\n• The speed of a body depends on the choice of the frame of reference.\n> υ = υ_trans + υ_rel (theorem of velocity addition)\n• Transport velocity is the velocity of a moving reference system; relative velocity is the velocity of a body in this system.\n## Practice\n• The coordinate of a body depends on the reference point, type of motion, velocity, and time.",
    "kk": "## Кинематика және механикалық қозғалыс\n• Механикалық қозғалыс — дененің уақыт өте келе басқа денелерге қатысты кеңістіктегі орнының өзгеруі.\n• Кинематика — қозғалысты оның себептерін анықтамай оқытатын механиканың саласы.\n• Материалдық нүкте — пішіні мен өлшемдері аталған тапсырмада еленбейтін дене.\n• Есептеу жүйесі: есептегіш дене + координаталар жүйесі + сағат.\n## Қозғалыстың салыстырмалылығы\n• Дененің жылдамдығы есептеу жүйесін таңдауға байланысты.\n> υ = υ_пер + υ_отн (жылдамдықтарды қосу теоремасы)\n• Жылжымалы жылдамдық — қозғалмалы есептеу жүйесінің жылдамдығы; салыстырмалы — дененің осы жүйедегі жылдамдығы.\n## Практика\n• Дененің координатасы есептеу нүктесіне, қозғалыс түріне, жылдамдыққа және уақытқа байланысты."
  },
  "p2": {
    "ru": "## Векторы и действия над ними\n• Векторные величины имеют числовое значение и направление; складывать их алгебраически нельзя.\n• Правила сложения: треугольника, параллелограмма, многоугольника.\n• Коллинеарные векторы лежат на одной прямой или параллельных прямых.\n## Проекция вектора\n• Проекция вектора на ось — отрезок между проекциями начала и конца вектора.\n• Проекция положительна, если вектор направлен вдоль оси, отрицательна — против, равна нулю — если вектор перпендикулярен оси.\n## Пример (§2)\n• Чабан прошёл 4 км на север и 3 км на восток: перемещение по теореме Пифагора\n> s = √(s₁² + s₂²) = √(16+9) = 5 км",
    "en": "## Vectors and operations on them\n• Vector quantities have a numerical value and direction; they cannot be added algebraically.\n• Addition rules: triangle, parallelogram, polygon.\n• Collinear vectors lie on the same line or on parallel lines.\n## Vector projection\n• The projection of a vector onto an axis is the segment between the projections of the start and end of the vector.\n• The projection is positive if the vector is directed along the axis, negative if against, zero if the vector is perpendicular to the axis.\n## Example (§2)\n• The shepherd walked 4 km north and 3 km east: displacement according to the Pythagorean theorem\n> s = √(s₁² + s₂²) = √(16+9) = 5 km",
    "kk": "## Векторлар және олармен әрекеттер\n• Векторлық шамалар сандық мәнге және бағытқа ие; оларды алгебралық жолмен қосуға болмайды.\n• Қосу ережелері: үшбұрыш, параллелограмм, көпбұрыш.\n• Коллинеарлық векторлар бір сызықта немесе параллель сызықтарда жатады.\n## Вектор проекциясы\n• Векторды оське проекциялау — вектордың басы мен соңының проекциялары арасындағы кесінді.\n• Проекция оң болады, егер вектор ось бойымен бағытталған болса, теріс — қарсы бағытта, нөлге тең — егер вектор оське перпендикуляр болса.\n## Мысал (§2)\n• Шопан солтүстікке 4 км, шығысқа 3 км жүрді: Пифагор теоремасы бойынша орын ауыстыру\n> s = √(s₁² + s₂²) = √(16+9) = 5 км"
  },
  "p3": {
    "ru": "## Равнопеременное движение. Ускорение\n• Равнопеременное движение — скорость за любые равные промежутки времени изменяется на одно и то же значение.\n• Мгновенная скорость — скорость в данный момент времени: υ = Δs/Δt при Δt → 0.\n• Ускорение — изменение скорости за единицу времени:\n> a = (υ − υ₀)/t,  [a] = м/с²\n• Если a направлено вдоль υ — движение равноускоренное, против υ — равнозамедленное.\n## Графики\n• Площадь под графиком υ(t) равна пройденному пути.\n• Средняя скорость: υ_ср = (s₁ + s₂ + …)/(t₁ + t₂ + …).",
    "en": "## Uniformly Accelerated Motion. Acceleration\n• Uniformly accelerated motion — the velocity changes by the same amount for any equal time intervals.\n• Instantaneous velocity — the velocity at a given moment in time: υ = Δs/Δt as Δt → 0.\n• Acceleration — the change in velocity per unit of time:\n> a = (υ − υ₀)/t, [a] = m/s²\n• If a is directed along υ — the motion is uniformly accelerated; opposite to υ — uniformly decelerated.\n## Graphs\n• The area under the υ(t) graph equals the distance traveled.\n• Average velocity: υ_avg = (s₁ + s₂ + …)/(t₁ + t₂ + …).",
    "kk": "## Бірқалыпты үдеумен қозғалыс. Үдеу\n• Бірқалыпты үдеумен қозғалыс — кез келген тең уақыт аралығында жылдамдық бірдей мәнге өзгереді.\n• Лезде жылдамдық — белгілі бір сәттегі жылдамдық: υ = Δs/Δt, Δt → 0 болғанда.\n• Үдеу — уақыт бірлігіне жылдамдықтың өзгеруі:\n> a = (υ − υ₀)/t,  [a] = м/с²\n• Егер a υ бойымен бағытталған болса — қозғалыс бірқалыпты үдемелі, υ-ге қарсы бағытталған болса — бірқалыпты тежелген.\n## Графиктер\n• υ(t) графигінің астындағы аудан жүрген жолға тең.\n• Орташа жылдамдық: υ_ср = (s₁ + s₂ + …)/(t₁ + t₂ + …)."
  },
  "p4": {
    "ru": "## Скорость и перемещение при равноускоренном движении\n• Основная задача кинематики — найти положение тела в любой момент времени.\n> υₓ = υ₀ₓ + aₓt\n> sₓ = υ₀ₓt + aₓt²/2\n> x = x₀ + υ₀ₓt + aₓt²/2\n• При равноускоренном движении aₓ > 0 (вдоль оси), при равнозамедленном — aₓ < 0.\n• График υ(t) — прямая; график s(t) и x(t) — парабола.\n• Перемещение равно площади фигуры под графиком υ(t).",
    "en": "## Speed and displacement in uniformly accelerated motion\n• The main task of kinematics is to find the position of a body at any moment in time.\n> υₓ = υ₀ₓ + aₓt\n> sₓ = υ₀ₓt + aₓt²/2\n> x = x₀ + υ₀ₓt + aₓt²/2\n• In uniformly accelerated motion aₓ > 0 (along the axis), in uniformly decelerated motion — aₓ < 0.\n• The graph of υ(t) is a straight line; the graph of s(t) and x(t) is a parabola.\n• Displacement is equal to the area of the figure under the υ(t) graph.",
    "kk": "## Тұрақты үдеумен қозғалыс кезінде жылдамдық пен орын ауыстыру\n• Кинематикадағы негізгі міндет — дененің кез келген уақыт сәтіндегі орнын табу.\n> υₓ = υ₀ₓ + aₓt\n> sₓ = υ₀ₓt + aₓt²/2\n> x = x₀ + υ₀ₓt + aₓt²/2\n• Тұрақты үдеумен қозғалыста aₓ > 0 (тық осінің бойымен), біркелкі баяулау кезінде — aₓ < 0.\n• υ(t) графигі — тік сызық; s(t) және x(t) графигі — парабола.\n• Орын ауыстыру υ(t) графигінің астындағы фигураның ауданына тең."
  },
  "p5": {
    "ru": "## Свободное падение тел\n• Свободное падение — движение тел в безвоздушном пространстве под действием силы тяжести.\n• Галилей опроверг Аристотеля: в отсутствии воздуха все тела падают одинаково.\n• Перемещения за последовательные секунды относятся как 1 : 3 : 5 : …\n> g ≈ 9,8 м/с² (направлено вертикально вниз)\n> υ = gt;  h = gt²/2\n## Практика\n• В воздухе падение замедляется сопротивлением: лист бумаги падает дольше смятого шарика.\n• Парашютист спускается равномерно, когда сопротивление воздуха уравновешивает силу тяжести.",
    "en": "## Free Fall of Bodies\n• Free fall is the motion of bodies in a vacuum under the action of gravity.\n• Galileo refuted Aristotle: in the absence of air, all bodies fall the same way.\n• Displacements over successive seconds are in the ratio 1 : 3 : 5 : …\n> g ≈ 9.8 m/s² (directed vertically downward)\n> υ = gt;  h = gt²/2\n## Practice\n• In air, falling is slowed by resistance: a sheet of paper falls longer than a crumpled ball.\n• A parachutist descends uniformly when air resistance balances the force of gravity.",
    "kk": "## Денелердің еркін түсуі\n• Еркін түсу — ауа жоқ кеңістікте денелердің тартылыс күші әсерінен қозғалысы.\n• Галилей Аристотельді теріскен етті: ауа жоқ болса, барлық денелер бірдей жылдамдықпен құлайды.\n• Кезекті секундтардағы орын ауыстырулар 1 : 3 : 5 : … қатынасында болады.\n> g ≈ 9,8 м/с² (тік төмен бағытталған)\n> υ = gt;  h = gt²/2\n## Практика\n• Ауада түсу қарсылықпен баяулайды: қағаз парағы қысылған шардан ұзақ уақыт құлайды.\n• Парашютші тұрақты түрде төмендейді, егер ауа қарсылығы тартылыс күшін теңестірсе."
  },
  "p6": {
    "ru": "## Движение по окружности\n• Криволинейное движение — траектория является кривой линией.\n• Период T — время одного полного оборота; частота ν — число оборотов в единицу времени: ν = 1/T, [ν] = Гц.\n• Угловое перемещение φ — угол поворота радиуса.\n• Угловая скорость: ω = φ/t = 2π/T = 2πν, [ω] = рад/с.\n• Линейная скорость направлена по касательной:\n> υ = 2πR/T = ωR\n• Движение по окружности с постоянной по модулю скоростью называют равномерным движением по окружности.",
    "en": "## Circular Motion\n• Curvilinear motion — the trajectory is a curved line.\n• Period T — the time of one complete revolution; frequency ν — the number of revolutions per unit of time: ν = 1/T, [ν] = Hz.\n• Angular displacement φ — the angle of rotation of the radius.\n• Angular velocity: ω = φ/t = 2π/T = 2πν, [ω] = rad/s.\n• Linear velocity is directed along the tangent:\n> υ = 2πR/T = ωR\n• Motion along a circle with a constant speed magnitude is called uniform circular motion.",
    "kk": "## Дөңгелек бойымен қозғалыс\n• Қисық сызықты қозғалыс — траекториясы қисық сызық болып табылады.\n• Период T — бір толық айналымға кеткен уақыт; жиілік ν — бірліктік уақытта айналым саны: ν = 1/T, [ν] = Гц.\n• Бұрыштық орын ауыстыру φ — радиустың бұрылу бұрышы.\n• Бұрыштық жылдамдық: ω = φ/t = 2π/T = 2πν, [ω] = рад/с.\n• Сызықтық жылдамдық жанамаға бағытталған:\n> υ = 2πR/T = ωR\n• Модуль бойынша тұрақты жылдамдықпен қозғалысты тең жылдамдықпен дөңгелек бойымен қозғалыс деп атайды."
  },
  "p7": {
    "ru": "## Центростремительное ускорение\n• При равномерном движении по окружности скорость меняет направление — значит, есть ускорение.\n• Оно направлено к центру окружности, поэтому называется центростремительным:\n> a = υ²/R = ω²R = 4π²R/T²\n## Практика\n• Грязь с колеса летит по касательной в момент отрыва.\n• Центростремительное ускорение создаётся силой (трение шин о дорогу на повороте, натяжение нити у шарика).",
    "en": "## Centripetal Acceleration\n• In uniform circular motion, the velocity changes direction — which means there is acceleration.\n• It is directed toward the center of the circle, therefore it is called centripetal:\n> a = υ²/R = ω²R = 4π²R/T²\n## Practice\n• Mud from the wheel flies off tangentially at the moment of detachment.\n• Centripetal acceleration is created by a force (friction of the tires on the road during a turn, tension of the string on a ball).",
    "kk": "## Орталыққа тартылатын үдеу\n• Шеңбер бойымен бірқалыпты қозғалыста жылдамдық бағытын өзгертеді — демек, үдеу болады.\n• Ол шеңбердің орталығына бағытталған, сондықтан орталыққа тартылатын деп аталады:\n> a = υ²/R = ω²R = 4π²R/T²\n## Практика\n• Дөңгелектен кір бөлшектері жанасу сәтінде жанама бағытта ұшып кетеді.\n• Орталыққа тартылатын үдеу күшпен жасалады (бұрылыс кезінде шинаның жолға үйкелісі, шариктегі жіптің тартылуы)."
  },
  "p8": {
    "ru": "## Звёздное небо\n• Вселенная — весь существующий материальный мир: планеты, звёзды, межзвёздное вещество, космические лучи.\n• Солнце — звезда галактики Млечный Путь, находится в 2,8·10⁴ св. лет от её центра.\n• Диаметр диска Галактики ≈ 10⁵ св. лет; в ней около 10¹² звёзд.\n> 1 св. год = 9,46·10¹⁵ м\n## Созвездия\n• Созвездие — участок небесной сферы со строго определёнными границами.\n• По решению МАС (1922) на небе 88 созвездий: 31 в Северном полушарии, 48 в Южном, 9 на экваторе.\n• Большую Медведицу казахи называли «Жеті қарақшы» (Семь разбойников).\n## Характеристики звёзд\n• Видимая звёздная величина — блеск с Земли; абсолютная М — блеск с расстояния 32,6 св. года.\n• Светимость — полная энергия, излучаемая звездой за единицу времени.",
    "en": "## Starry Sky\n• Universe — the entire existing material world: planets, stars, interstellar matter, cosmic rays.\n• Sun — a star of the Milky Way galaxy, located 2.8·10⁴ ly from its center.\n• Diameter of the Galaxy disk ≈ 10⁵ ly; it contains about 10¹² stars.\n> 1 ly = 9.46·10¹⁵ m\n## Constellations\n• Constellation — a section of the celestial sphere with strictly defined boundaries.\n• According to the IAU decision (1922), there are 88 constellations in the sky: 31 in the Northern Hemisphere, 48 in the Southern, 9 on the equator.\n• The Kazakhs called the Big Dipper “Zheti Karaqshy” (Seven Robbers).\n## Characteristics of Stars\n• Apparent magnitude — brightness from Earth; absolute M — brightness from a distance of 32.6 ly.\n• Luminosity — the total energy emitted by a star per unit of time.",
    "kk": "## Жұлдызды аспан\n• Ғалам — барша бар заттық әлем: планеталар, жұлдыздар, жұлдызаралық заттар, ғарыштық сәулелер.\n• Күн — Шоқжұлдыздар Млечный жол галактикасының жұлдызы, оның центрінен 2,8·10⁴ жарық жылы қашықтықта орналасқан.\n• Галактиканың дискісінің диаметрі ≈ 10⁵ жарық жылы; онда шамамен 10¹² жұлдыз бар.\n> 1 жарық жылы = 9,46·10¹⁵ м\n## Жұлдыздар жүйелері\n• Жұлдыздар жүйесі — аспан сферасының нақты шекарасы бар бөлімі.\n• Халықаралық астрономия одағының (1922) шешімі бойынша аспанда 88 жұлдыздар жүйесі бар: Солтүстік жарты шарда 31, Оңтүстік жарты шарда 48, экваторда 9.\n• Қазактар Үлкен Аюды «Жеті қарақшы» деп атаған.\n## Жұлдыздардың сипаттамалары\n• Көрінетін жұлдыздық өлшем — Жерден көрінетін жарықтылығы; абсолюттік М — 32,6 жарық жылы қашықтықтағы жарықтылығы.\n• Жарықтылық — жұлдыз бірлік уақыт ішінде шығаратын толық энергия."
  },
  "p9": {
    "ru": "## Небесная сфера и координаты\n• Небесная сфера — воображаемая сфера, на которую проецируются все видимые небесные тела.\n• Ось мира — ось вращения небесной сферы; Северный полюс мира — вблизи Полярной звезды.\n• Зенит и надир — точки пересечения отвесной линии со сферой; между ними — небесный меридиан.\n• Небесный экватор — линия пересечения плоскости экватора Земли со сферой.\n## Координаты светил\n• Склонение δ — угловое расстояние звезды от небесного экватора вдоль круга склонения.\n• Прямое восхождение — угловое расстояние от точки весеннего равноденствия до круга склонения.\n• Высота светила — угловое расстояние от горизонта вдоль вертикала.\n## Практика\n• Подвижная карта звёздного неба (ПКЗН) позволяет определить координаты светил.",
    "en": "## Celestial Sphere and Coordinates\n• The celestial sphere is an imaginary sphere onto which all visible celestial bodies are projected.\n• The axis of the world is the axis of rotation of the celestial sphere; the North Pole of the world is near the Polaris.\n• Zenith and nadir are the points where the plumb line intersects the sphere; between them lies the celestial meridian.\n• The celestial equator is the line of intersection of the Earth's equatorial plane with the sphere.\n## Coordinates of Celestial Bodies\n• Declination δ is the angular distance of a star from the celestial equator along the declination circle.\n• Right ascension is the angular distance from the vernal equinox to the declination circle.\n• Altitude of a celestial body is the angular distance from the horizon along the vertical.\n## Practice\n• The movable star map (MSM) allows the determination of celestial bodies' coordinates.",
    "kk": "## Аспан сферасы және координаттар\n• Аспан сферасы — барлық көрінетін аспан денелері проекцияланатын ойдан шыққан сфера.\n• Ғалам осі — аспан сферасының айналу осі; Ғаламның Солтүстік полюсі — Солтүстік жұлдызға жақын орналасқан.\n• Зенит және надир — тік сызық сферамен қиылысатын нүктелер; олардың арасында — аспан меридианы.\n• Аспан экваторы — Жер экваторы жазықтығының сферамен қиылысы.\n## Жұлдыздардың координаттары\n• Қисықтық δ — жұлдыздың аспан экваторынан қисықтық шеңбері бойымен бұрыштық қашықтығы.\n• Тік көтеріліс — көктемгі күн теңізі нүктесінен қисықтық шеңберге дейінгі бұрыштық қашықтық.\n• Жұлдыз биіктігі — көлденеңінен бойымен вертикаль бойымен бұрыштық қашықтық.\n## Практика\n• Жұлдызды аспанның қозғалмалы картасы (ЖАК) жұлдыздардың координаттарын анықтауға мүмкіндік береді."
  },
  "p10": {
    "ru": "## Видимое движение светил. Время\n• Суточные движения светил — следствие вращения Земли вокруг оси.\n• Солнечные сутки — между двумя верхними кульминациями Солнца; звёздные — относительно звёзд.\n• Кульминация — прохождение светила через небесный меридиан.\n## Время\n• Местное время — одинаково во всех точках одного меридиана.\n• Всемирное время T₀ — местное время гринвичского меридиана.\n• Поясное время: 24 пояса по 15° долготы; разница соседних поясов — 1 час.\n## Практика\n• Широту местности определяют по высоте Полярной звезды.\n• Гномон помогает найти полуденную линию и истинный полдень.",
    "en": "## Apparent Motion of Celestial Bodies. Time\n• Daily motions of celestial bodies are a consequence of the Earth's rotation around its axis.\n• Solar day — between two upper culminations of the Sun; sidereal day — relative to the stars.\n• Culmination — the passage of a celestial body through the celestial meridian.\n## Time\n• Local time — the same at all points of one meridian.\n• Universal time T₀ — local time of the Greenwich meridian.\n• Time zones: 24 zones of 15° longitude each; the difference between adjacent zones is 1 hour.\n## Practice\n• The latitude of a place is determined by the altitude of the Pole Star.\n• A gnomon helps to find the noon line and the true noon.",
    "kk": "## Көрінетін аспан денелерінің қозғалысы. Уақыт\n• Күнделікті қозғалыстар аспан денелерінің Жердің өз осі айналасындағы айналуынан туындайды.\n• Күн сағаты — Күннің екі жоғарғы кульминациясы арасындағы уақыт; жұлдызды сағаттар — жұлдыздарға қатысты.\n• Кульминация — аспан денесінің аспан меридианын кесіп өтуі.\n## Уақыт\n• Жергілікті уақыт — бір меридиан бойындағы барлық нүктелерде бірдей.\n• Дүниежүзілік уақыт T₀ — Гринвич меридианының жергілікті уақыты.\n• Белдікті уақыт: 24 белдік, әрқайсысы 15° ұзындық; көршілес белдіктер арасындағы айырмашылық — 1 сағат.\n## Практика\n• Аумақтың енділігін Поляр жұлдыздың биіктігі арқылы анықтайды.\n• Гномон түскі сызықты және нақты түскі уақытты табуға көмектеседі."
  },
  "p11": {
    "ru": "## Законы движения планет\n• Геоцентрическая система Птолемея (Земля в центре) сменилась гелиоцентрической системой Коперника (Солнце в центре).\n• Коперник объяснил петлеобразное движение планет движением Земли и изложил систему в книге «О вращении небесных сфер».\n## Законы Кеплера\n• 1-й закон: планеты движутся по эллипсам, в одном из фокусов — Солнце.\n• Перигелий — ближайшая к Солнцу точка орбиты, афелий — самая удалённая.\n• Эксцентриситет e = c/a; при e = 0 орбита — окружность; самые вытянутые орбиты у Меркурия и Марса.\n• 2-й закон: радиус-вектор планеты за равные времена описывает равные площади.\n• 3-й закон: T²/a³ = const для всех планет.\n> 1 а.е. = 149 600 000 км ≈ 1,5·10⁸ км",
    "en": "## Laws of Planetary Motion\n• The geocentric system of Ptolemy (Earth at the center) was replaced by the heliocentric system of Copernicus (Sun at the center).\n• Copernicus explained the retrograde motion of planets by the movement of the Earth and presented the system in the book \"On the Revolutions of the Celestial Spheres\".\n## Kepler's Laws\n• 1st law: planets move in ellipses, with the Sun at one focus.\n• Perihelion is the closest point to the Sun in the orbit, aphelion is the farthest.\n• Eccentricity e = c/a; when e = 0 the orbit is a circle; the most elongated orbits are those of Mercury and Mars.\n• 2nd law: the radius vector of a planet sweeps out equal areas in equal times.\n• 3rd law: T²/a³ = const for all planets.\n> 1 AU = 149,600,000 km ≈ 1.5·10⁸ km",
    "kk": "## Планеталардың қозғалыс заңдары\n• Птолемейдің геоорталық жүйесі (Жер ортасында) Коперниктің гелиоорталық жүйесіне (Күн ортасында) ауысты.\n• Коперник планеталардың шеңберлі қозғалысын Жердің қозғалысы арқылы түсіндірді және жүйесін «Аспан сфераларының айналуы туралы» атты кітапта баяндады.\n## Кеплер заңдары\n• 1-заң: планеталар эллипс бойымен қозғалады, фокустың бірінде — Күн орналасқан.\n• Перигелий — орбитаның Күнге ең жақын нүктесі, афелий — ең алысы.\n• Эксцентриситет e = c/a; e = 0 болғанда орбита — шеңбер; Меркурий мен Марстың орбиталары ең созылған.\n• 2-заң: радиус-вектор планета тең уақыт аралығында тең аудандар сипаттайды.\n• 3-заң: T²/a³ = тұрақты барлық планеталар үшін.\n> 1 а.е. = 149 600 000 км ≈ 1,5·10⁸ км"
  },
  "p12": {
    "ru": "## Метод параллакса\n• Параллактическое смещение: при взгляде с разных точек тело меняет положение на далёком фоне.\n• Базис — отрезок между точками наблюдения; параллакс p₀ — угол смещения.\n• Горизонтальный параллакс — угол, под которым с небесного тела виден радиус Земли.\n> D = R / sin p₀;  при малых углах D = 206265″·R / p₀″\n## Размеры тел\n• Радиус планеты: r = ρ·R/p₀, где ρ — угловой радиус планеты.\n## Величины\n• 206265″ — число угловых секунд в одном радиане.\n• Параллакс Луны 57′, Солнца 8,8″; чем больше параллакс, тем ближе тело.",
    "en": "## Parallax Method\n• Parallax shift: when viewed from different points, a body changes its position against a distant background.\n• Baseline — the segment between observation points; parallax p₀ — the angle of shift.\n• Horizontal parallax — the angle under which the radius of the Earth is seen from a celestial body.\n> D = R / sin p₀; for small angles D = 206265\"·R / p₀\"\n## Sizes of bodies\n• Planet radius: r = ρ·R/p₀, where ρ is the angular radius of the planet.\n## Quantities\n• 206265\" — number of arcseconds in one radian.\n• Parallax of the Moon 57′, of the Sun 8.8″; the greater the parallax, the closer the body.",
    "kk": "## Параллакс әдісі\n• Параллакс ығысуы: әртүрлі нүктеден қарағанда, дене алыс жерде орналасқан фонға қатысты өз орнын өзгертеді.\n• База — бақылау нүктелері арасындағы сегмент; параллакс p₀ — ығысу бұрышы.\n• Горизонталь параллакс — аспан денесінен Жер радиусы көрінетін бұрыш.\n> D = R / sin p₀; шағын бұрыштарда D = 206265″·R / p₀″\n## Денелердің өлшемдері\n• Планетаның радиусы: r = ρ·R/p₀, мұнда ρ — планетаның бұрыштық радиусы.\n## Сандық мәндер\n• 206265″ — бір радиандағы бұрыштық секундтар саны.\n• Айдың параллаксы 57′, Күннің 8,8″; параллакс неғұрлым үлкен болса, дене оған соғұрлым жақын."
  },
  "p13": {
    "ru": "## Первый закон Ньютона. Инерция\n• Инертность — свойство тела сохранять свою скорость неизменной.\n• Инерция — явление сохранения скорости тела при отсутствии действия на него других тел.\n• Инерциальные системы отсчёта (ИСО) — системы, в которых закон инерции выполняется.\n• Системы, связанные с телами, движущимися с ускорением, — неинерциальные.\n• ИСО — модель, вводимая для упрощения решения задач; система, связанная с Землёй, ИСО приближённо.",
    "en": "## Newton's First Law. Inertia\n• Inertness is the property of a body to maintain its speed unchanged.\n• Inertia is the phenomenon of a body maintaining its speed in the absence of action by other bodies.\n• Inertial reference frames (IRF) are systems in which the law of inertia is fulfilled.\n• Systems associated with bodies moving with acceleration are non-inertial.\n• IRF is a model introduced to simplify problem solving; the system associated with the Earth is an approximate IRF.",
    "kk": "## Ньютонның бірінші заңы. Инерция\n• Инерттік — дененің жылдамдығын өзгеріссіз сақтау қасиеті.\n• Инерция — басқа денелердің әрекеті болмаған жағдайда, дененің жылдамдығын сақтау құбылысы.\n• Инерциялық есеп жүйелері (ИЕЖ) — инерция заңы орындалатын жүйелер.\n• Жылдамдықпен үдеумен қозғалып жатқан денелерге байланысты жүйелер — инерциялық емес.\n• ИЕЖ — есептерді шешуді жеңілдету үшін енгізілетін модель; Жерге байланысты жүйе, ИЕЖ жуықтап ала."
  },
  "p14": {
    "ru": "## Силы в механике\n• Сила — векторная величина, мера взаимодействия тел; единица — ньютон (Н).\n• Сила тяжести — частный случай силы всемирного тяготения: F = mg.\n• Сила упругости: закон Гука F_упр = k·|x|; вес, реакция опоры, натяжение нити, сила Архимеда — проявления упругости.\n• Сила трения: скольжения, покоя, качения; F_тр = μN.\n## Практика\n• Коэффициент трения находят как μ = F_тр/N.",
    "en": "## Forces in Mechanics\n• Force — a vector quantity, a measure of the interaction of bodies; unit — newton (N).\n• Gravitational force — a special case of universal gravitation force: F = mg.\n• Elastic force: Hooke's law F_elastic = k·|x|; weight, support reaction, string tension, Archimedes' force — manifestations of elasticity.\n• Friction force: sliding, static, rolling; F_friction = μN.\n## Practice\n• The coefficient of friction is found as μ = F_friction / N.",
    "kk": "## Механикадағы күші\n• Күш — векторлық шама, денелердің өзара әрекеттесу өлшемі; бірлігі — ньютон (Н).\n• Гравитациялық күш — жалпы тартылыс күшінің бір түрі: F = mg.\n• Серпімділік күші: Гук заңы F_упр = k·|x|; салмақ, тірек реакциясы, жіптұтқыш күш, Архимед күші — серпімділіктің көріністері.\n• Тысырылу күші: сырғу, тыныштық, домалау; F_тр = μN.\n## Практика\n• Тысырылу коэффициенті мынадай есептеледі: μ = F_тр/N."
  },
  "p15": {
    "ru": "## Второй закон Ньютона. Масса\n• Масса — мера инертности тела; единица — килограмм.\n• Основной закон динамики:\n> F = ma (точнее: ma = F₁ + F₂ + … — равнодействующая всех сил)\n• Ускорение направлено вдоль равнодействующей сил.\n• Импульсная форма: F·t = Δ(mυ) — второй закон Ньютона в импульсном виде.\n## Алгоритм решения задач\n1) силы на тело; 2) равнодействующая; 3) a = F/m; 4) кинематика по a.",
    "en": "## Newton's Second Law. Mass\n• Mass is a measure of a body's inertia; unit — kilogram.\n• Fundamental law of dynamics:\n> F = ma (more precisely: ma = F₁ + F₂ + … — the resultant of all forces)\n• Acceleration is directed along the resultant of the forces.\n• Impulse form: F·t = Δ(mv) — Newton's second law in impulse form.\n## Algorithm for solving problems\n1) forces on the body; 2) resultant; 3) a = F/m; 4) kinematics using a.",
    "kk": "## Ньютоның екінші заңы. Массa\n• Массa — дененің инерциясының өлшемі; бірлігі — килограмм.\n• Динамиканың негізгі заңы:\n> F = ma (дәл айтқанда: ma = F₁ + F₂ + … — барлы күштердің тең әсері)\n• Жылдамдық күштердің тең әсерінің бағыты бойынша бағытталады.\n• Импульстік форма: F·t = Δ(mυ) — Ньютоның екінші заңы импульстік формада.\n## Мәселелерді шешу алгоритмі\n1) денеге әсер ететін күштер; 2) тең әсер; 3) a = F/m; 4) a бойынша кинематика."
  },
  "p16": {
    "ru": "## Третий закон Ньютона\n> F₁ = −F₂\n• Тела взаимодействуют с силами, равными по модулю и противоположными по направлению.\n• Силы взаимодействия одной природы, приложены к разным телам, действуют вдоль одной прямой.\n• Вес — сила, с которой тело давит на опору; сила реакции опоры — сила опоры, действующая на тело.\n• Внутренние силы — силы взаимодействия частей одного тела или системы связанных тел.",
    "en": "## Newton's Third Law\n> F₁ = −F₂\n• Bodies interact with forces that are equal in magnitude and opposite in direction.\n• Interaction forces of the same nature, applied to different bodies, act along the same line.\n• Weight is the force with which a body presses on a support; the reaction force of the support is the force exerted by the support on the body.\n• Internal forces are the forces of interaction between parts of a single body or a system of connected bodies.",
    "kk": "## Ньютонның үшінші заңы\n> F₁ = −F₂\n• Денелер өзара әрекеттескенде күштердің модулі тең және бағыттары қарама-қарсы болады.\n• Бір табиғаттағы әрекеттесу күштері әртүрлі денелерге қолданылады және бір түзу бойымен әрекет етеді.\n• Салмақ — дененің тірекке күшпен қысымы; тіректің реакция күші — тіректің денеге әсер ететін күші.\n• Ішкі күштер — бір дененің немесе байланысқан денелер жүйесінің бөліктерінің өзара әрекеттесу күштері."
  },
  "p17": {
    "ru": "## Закон всемирного тяготения\n> F = G·m₁m₂/R²,  G = 6,67·10⁻¹¹ Н·м²/кг²\n• Гравитационная постоянная — сила взаимодействия двух тел по 1 кг на расстоянии 1 м.\n• Закон открыт И. Ньютоном в 1687 г.; Г. Кавендиш измерил G («взвесил Землю»).\n• Ускорение Луны в 3600 = 60² раз меньше, чем у поверхности Земли, — сила убывает как 1/R².\n• Свободное падение тел и движение Луны, планет — проявление одной силы тяготения.",
    "en": "## Law of Universal Gravitation\n> F = G·m₁m₂/R²,  G = 6.67·10⁻¹¹ N·m²/kg²\n• Gravitational constant — the force of interaction between two bodies of 1 kg at a distance of 1 m.\n• The law was discovered by I. Newton in 1687; H. Cavendish measured G (\"weighed the Earth\").\n• The acceleration of the Moon is 3600 = 60² times less than that on the Earth's surface — the force decreases as 1/R².\n• Free fall of bodies and the motion of the Moon and planets are manifestations of the same gravitational force.",
    "kk": "## Дүниежүзілік тартылыс заңы\n> F = G·m₁m₂/R²,  G = 6,67·10⁻¹¹ Н·м²/кг²\n• Гравитациялық тұрақты — екі дененің 1 кг салмақта және 1 м қашықтықта әрекет ететін күші.\n• Заңды И. Ньютон 1687 жылы ашты; Г. Кавендиш G мәнін өлшеді («Жерді салмаққа тартты»).\n• Айдың үдеуі 3600 = 60² есе аз, жер бетіндегі үдеуден — күш 1/R² бойынша кемиді.\n• Денелердің еркін түсуі және Ай, планеталардың қозғалысы — бір тартылыс күшінің көрінісі."
  },
  "p18": {
    "ru": "## Вес тела. Невесомость\n• Вес тела — сила, с которой тело действует на опору или подвес вследствие притяжения к Земле.\n• Покоящееся тело: P = mg.\n• При ускорении опоры вверх: P = m(g + a); вниз: P = m(g − a).\n• Перегрузка — увеличение веса при ускоренном движении.\n• Невесомость — состояние, при котором вес тела равен нулю (свободное падение).",
    "en": "## Body Weight. Weightlessness\n• Body weight is the force with which a body acts on a support or suspension due to attraction to the Earth.\n• A resting body: P = mg.\n• When the support accelerates upward: P = m(g + a); downward: P = m(g − a).\n• Overload is an increase in weight during accelerated motion.\n• Weightlessness is a state in which the body’s weight is zero (free fall).",
    "kk": "## Дененің салмағы. Салмақсыздық\n• Дененің салмағы — дененің Жерге тартылу салдарынан тірекке немесе ілініске әрекет ететін күші.\n• Демеулі дене: P = mg.\n• Тірек жоғары қозғалған кезде: P = m(g + a); төмен қозғалған кезде: P = m(g − a).\n• Артық салмақ — үдеуі бар қозғалыс кезінде салмақтың артуы.\n• Салмақсыздық — дененің салмағы нөлге тең болатын жағдай (еркін түсу)."
  },
  "p19": {
    "ru": "## Движение под действием силы тяжести. Спутники\n• Свободное падение по вертикали: υ = υ₀ ± gt; тело вверх — замедленно, вниз — ускоренно.\n• Брошенное горизонтально: по 0x равномерно, по 0y — с ускорением g.\n> l = υ₀t;  t = √(2h/g)\n• Брошенное под углом α: υ₀ₓ = υ₀cosα, υ₀ᵧ = υ₀sinα; наибольшая дальность при α = 45°.\n• Первая космическая скорость — скорость круговой орбиты у поверхности:\n> υ₁ = √(gR) ≈ 7,9 км/с\n• Спутники Земли — пример свободного падения тел с большой горизонтальной скоростью.",
    "en": "## Motion under the action of gravity. Satellites\n• Free fall vertically: υ = υ₀ ± gt; body moving upward — decelerated, downward — accelerated.\n• Thrown horizontally: along 0x uniformly, along 0y — with acceleration g.\n> l = υ₀t;  t = √(2h/g)\n• Thrown at an angle α: υ₀ₓ = υ₀cosα, υ₀ᵧ = υ₀sinα; maximum range at α = 45°.\n• First cosmic velocity — the velocity of a circular orbit at the surface:\n> υ₁ = √(gR) ≈ 7.9 km/s\n• Earth satellites are an example of free fall of bodies with a high horizontal velocity.",
    "kk": "## Тартылыс күшінің әсерінен қозғалыс. Жер серіктері\n• Тік бағытта еркін төу: υ = υ₀ ± gt; дене жоғары шыққанда — баяулайды, төменге — үдейді.\n• Деңгейлі қашықтыққа лақтырылған: 0x бойынша бірқалыпты, 0y бойынша g үдеуімен.\n> l = υ₀t;  t = √(2h/g)\n• α бұрышпен лақтырылған: υ₀ₓ = υ₀cosα, υ₀ᵧ = υ₀sinα; ең үлкен қашықтық α = 45° кезінде.\n• Бірінші космостық жылдамдық — беттің жанындағы дөңгелек орбита жылдамдығы:\n> υ₁ = √(gR) ≈ 7,9 км/с\n• Жер серіктері — үлкен көлденең жылдамдықпен денелердің еркін төуінің мысалы."
  },
  "p20": {
    "ru": "## Импульс. Закон сохранения импульса\n• Импульс тела (количество движения) — произведение массы на скорость:\n> p = mυ,  [p] = кг·м/с\n• Импульс силы — произведение силы на время её действия:\n> F·t,  [F·t] = Н·с\n• Второй закон Ньютона в импульсном виде: F·t = Δ(mυ).\n• Замкнутая система — система тел, на которую не действуют внешние силы.\n• Закон сохранения импульса: в замкнутой системе суммарный импульс тел сохраняется:\n> m₁υ₁ + m₂υ₂ = m₁υ₁′ + m₂υ₂′",
    "en": "## Momentum. Law of Conservation of Momentum\n• Momentum of a body (quantity of motion) — the product of mass and velocity:\n> p = mυ,  [p] = kg·m/s\n• Impulse of a force — the product of force and the time of its action:\n> F·t,  [F·t] = N·s\n• Newton's second law in momentum form: F·t = Δ(mυ).\n• A closed system — a system of bodies on which no external forces act.\n• Law of conservation of momentum: in a closed system, the total momentum of bodies is conserved:\n> m₁υ₁ + m₂υ₂ = m₁υ₁′ + m₂υ₂′",
    "kk": "## Импульс. Импульстің сақталу заңы\n• Денең импульсі (қозғалыс мөлшері) — массаның жылдамдыққа көбейтіндісі:\n> p = mυ,  [p] = кг·м/с\n• Күш импульсі — күштің әсер ету уақытқа көбейтіндісі:\n> F·t,  [F·t] = Н·с\n• Ньютонның екінші заңы импульстік формада: F·t = Δ(mυ).\n• Жабық жүйе — сыртқы күштер әсер етпейтін денелер жүйесі.\n• Импульстің сақталу заңы: жабық жүйеде денелердің жиынтық импульсі сақталады:\n> m₁υ₁ + m₂υ₂ = m₁υ₁′ + m₂υ₂′"
  },
  "p21": {
    "ru": "## Реактивное движение\n• Реактивное движение — движение тела, возникающее в результате отделения от него некоторой части с какой-либо скоростью.\n• Основано на законе сохранения импульса и третьем законе Ньютона.\n• Примеры: ракета, реактивный самолёт, кальмар, медуза.\n• Ракета может двигаться в вакууме — ей не нужна опора.\n• Многоступенчатые ракеты сбрасывают отработанные ступени, уменьшая массу.",
    "en": "## Reactive Motion\n• Reactive motion is the movement of a body that occurs as a result of a part of it separating with some speed.\n• It is based on the law of conservation of momentum and Newton's third law.\n• Examples: rocket, jet plane, squid, jellyfish.\n• A rocket can move in a vacuum — it does not need support.\n• Multistage rockets drop spent stages, reducing mass.",
    "kk": "## Реактивті қозғалыс\n• Реактивті қозғалыс — денеден кейбір бөлігінің қандай да бір жылдамдықпен бөлінуінің нәтижесінде пайда болатын қозғалыс.\n• Импульстің сақталу заңы мен Ньютонның үшінші заңына негізделген.\n• Мысалдар: зымыран, реактивті ұшақ, кальмар, медуза.\n• Зымыран вакуумде қозғала алады — оған тіреу қажет емес.\n• Көп сатылы зымырандар пайдаланылған сатыларды тастап, массасын азайтуды қамтамасыз етеді."
  },
  "p22": {
    "ru": "## Механическая работа и энергия\n• Работа силы:\n> A = F·s·cosα,  [A] = Дж\n• Кинетическая энергия:\n> E_к = mυ²/2\n• Потенциальная энергия:\n> E_п = mgh  (для поднятого тела);  E_п = kx²/2 (для пружины)\n• Теорема об изменении кинетической энергии: A = ΔE_к.\n• Мощность:\n> N = A/t,  [N] = Вт",
    "en": "## Mechanical Work and Energy\n• Work of a force:\n> A = F·s·cosα,  [A] = J\n• Kinetic energy:\n> E_k = mυ²/2\n• Potential energy:\n> E_p = mgh  (for a lifted body);  E_p = kx²/2 (for a spring)\n• The theorem of kinetic energy change: A = ΔE_k.\n• Power:\n> N = A/t,  [N] = W",
    "kk": "## Механикалық жұмыс және энергия\n• Күш жұмысы:\n> A = F·s·cosα,  [A] = Дж\n• Кинетикалық энергия:\n> E_к = mυ²/2\n• Потенциалдық энергия:\n> E_п = mgh  (көтерілген дене үшін);  E_п = kx²/2 (серіппеге арналған)\n• Кинетикалық энергияның өзгеру теоремасы: A = ΔE_к.\n• Қуат:\n> N = A/t,  [N] = Вт"
  },
  "p23": {
    "ru": "## Закон сохранения и превращения энергии\n• Полная механическая энергия — сумма кинетической и потенциальной:\n> E = E_к + E_п\n• В замкнутой системе без трения полная механическая энергия сохраняется.\n• При совершении работы силами трения механическая энергия превращается во внутреннюю (тепловую).\n• Работа — мера превращения одного вида энергии в другой.\n• Замкнутая система тел — система, на которую не действуют внешние силы.",
    "en": "## Law of Conservation and Transformation of Energy\n• Total mechanical energy is the sum of kinetic and potential energy:\n> E = E_k + E_p\n• In a closed system without friction, total mechanical energy is conserved.\n• When work is done by friction forces, mechanical energy is transformed into internal (thermal) energy.\n• Work is a measure of the transformation of one type of energy into another.\n• A closed system of bodies is a system on which no external forces act.",
    "kk": "## Энергияны сақтаудың және түрлендірудің заңы\n• Толық механикалық энергия — кинетикалық және потенциалдық энергиялардың қосындысы:\n> E = E_к + E_п\n• Тартымсыз жабық жүйеде толық механикалық энергия сақталады.\n• Сырғанау күштерінің жұмысы кезінде механикалық энергия ішкі (жылулық) энергияға айналады.\n• Жұмыс — бір түрдегі энергияны екінші түрге айналдыру өлшемі.\n• Жабық денелер жүйесі — оған сыртқы күштер әсер етпейтін жүйе."
  },
  "p24": {
    "ru": "## Колебательное движение\n• Колебательное движение — движение, периодически повторяющееся во времени.\n• Свободные колебания — происходят под действием внутренних сил системы после выведения из равновесия.\n• Вынужденные колебания — происходят под действием внешней периодически изменяющейся силы.\n• Колебательная система — система тел, способная совершать свободные колебания (маятник, груз на пружине).\n• Положение равновесия — устойчивое состояние колебательной системы.\n## Величины\n• Амплитуда A — максимальное смещение от положения равновесия, [A] = м.\n• Смещение x — отклонение тела от положения равновесия.\n• Период T — время одного полного колебания: T = t/N.\n• Частота ν — число колебаний в единицу времени: ν = N/t = 1/T, [ν] = Гц.",
    "en": "## Oscillatory Motion\n• Oscillatory motion is motion that periodically repeats over time.\n• Free oscillations occur under the action of internal forces of the system after being displaced from equilibrium.\n• Forced oscillations occur under the action of an external periodically varying force.\n• Oscillatory system is a system of bodies capable of performing free oscillations (pendulum, mass on a spring).\n• Equilibrium position is a stable state of an oscillatory system.\n## Quantities\n• Amplitude A — the maximum displacement from the equilibrium position, [A] = m.\n• Displacement x — the deviation of the body from the equilibrium position.\n• Period T — the time of one complete oscillation: T = t/N.\n• Frequency ν — the number of oscillations per unit time: ν = N/t = 1/T, [ν] = Hz.",
    "kk": "## Тербелмелі қозғалыс\n• Тербелмелі қозғалыс — уақыт бойынша периодты түрде қайталанатын қозғалыс.\n• Еркін тербелістер — тепе-теңдіктен шығарылғаннан кейін жүйенің ішкі күштер әсерінен болады.\n• Міндетті тербелістер — сыртқы периодты өзгеретін күш әсерінен болады.\n• Тербелмелі жүйе — еркін тербеліс жасай алатын денелер жүйесі (маятник, серіппідегі салмақ).\n• Тепе-теңдік жағдайы — тербелмелі жүйенің тұрақты күйі.\n## Өлшемдер\n• Амплитуда A — тепе-теңдік жағдайынан ең үлкен ығысу, [A] = м.\n• Ығысу x — дененің тепе-теңдік жағдайынан ауытқуы.\n• Период T — бір толық тербеліс уақыты: T = t/N.\n• Жиілік ν — бір уақыт бірлігіндегі тербеліс саны: ν = N/t = 1/T, [ν] = Гц."
  },
  "p25": {
    "ru": "## Энергия при колебаниях. Уравнение колебаний\n• Уравнение колебательного движения:\n> x = A·cos(ωt + φ₀)\n• Циклическая частота ω = 2π/T = 2πν.\n• За одно колебание тело проходит путь 4A.\n• В идеальной системе энергия сохраняется: в крайних точках она потенциальная и максимальна, в положении равновесия — кинетическая.\n• В реальных системах колебания затухают: амплитуда уменьшается из-за трения.",
    "en": "## Energy in Oscillations. Oscillation Equation\n• Equation of oscillatory motion:\n> x = A·cos(ωt + φ₀)\n• Angular frequency ω = 2π/T = 2πν.\n• In one oscillation, the body travels a distance of 4A.\n• In an ideal system, energy is conserved: at the extreme points it is potential and maximal, at the equilibrium position — kinetic.\n• In real systems, oscillations decay: the amplitude decreases due to friction.",
    "kk": "## Тербелістердегі энергия. Тербеліс теңдеуі\n• Тербелмелі қозғалыс теңдеуі:\n> x = A·cos(ωt + φ₀)\n• Циклдік жиілік ω = 2π/T = 2πν.\n• Бір тербеліс кезінде дене 4A жол өтеді.\n• Идеалды жүйеде энергия сақталады: шектік нүктелерде ол потенциалдық және максималды, тепе-теңдік жағдайында — кинетикалық.\n• Нақты жүйелерде тербелістер бәсеңдейді: амплитуда үйкеліс салдарынан азаяды."
  },
  "p26": {
    "ru": "## Математический и пружинный маятники\n• Математический маятник — груз на длинной нерастяжимой нити.\n> T = 2π√(l/g)\n• Период не зависит от массы груза и амплитуды (при малых углах).\n• Пружинный маятник — груз на пружине:\n> T = 2π√(m/k)\n• Период пружинного маятника зависит от массы и жёсткости, но не от g.",
    "en": "## Mathematical and Spring Pendulums\n• A mathematical pendulum is a weight on a long inextensible string.\n> T = 2π√(l/g)\n• The period does not depend on the mass of the weight or the amplitude (for small angles).\n• A spring pendulum is a weight on a spring:\n> T = 2π√(m/k)\n• The period of a spring pendulum depends on the mass and stiffness, but not on g.",
    "kk": "## Математикалық және серіппелі маховиктер\n• Математикалық маховик — ұзын созылмайтын жіпке байланған салмақ.\n> T = 2π√(l/g)\n• Период салмақ массасына және амплитудасына (кіші бұрыштарда) байланысты емес.\n• Серіппелі маховик — серіппеге байланған салмақ:\n> T = 2π√(m/k)\n• Серіппелі маховиктің периоді массасына және қатаңдығына байланысты, бірақ g-ге байланысты емес."
  },
  "p27": {
    "ru": "## Свободные и вынужденные колебания. Резонанс\n• Затухающие колебания — колебания, амплитуда которых со временем уменьшается.\n• Вынужденные колебания поддерживает внешняя периодическая сила; их частота равна частоте этой силы.\n• Резонанс — явление резкого увеличения амплитуды вынужденных колебаний при совпадении частоты внешней силы с собственной частотой системы.\n• Резонанс бывает полезным (музыкальные инструменты, радиоприём) и вредным (разрушение мостов, машин).",
    "en": "## Free and forced oscillations. Resonance\n• Damped oscillations are oscillations whose amplitude decreases over time.\n• Forced oscillations are maintained by an external periodic force; their frequency equals the frequency of this force.\n• Resonance is the phenomenon of a sharp increase in the amplitude of forced oscillations when the frequency of the external force matches the natural frequency of the system.\n• Resonance can be useful (musical instruments, radio reception) or harmful (destruction of bridges, machines).",
    "kk": "## Еркін және мәжбүрлі тербелістер. Резонанс\n• Сөнетін тербелістер — амплитудасы уақыт өте келе кемитін тербелістер.\n• Мәжбүрлі тербелістерді сыртқы периодтық күш қолдайды; олардың жиілігі осы күштің жиілігіне тең.\n• Резонанс — сыртқы күштің жиілігі жүйенің өздік жиілігімен сәйкес келгенде мәжбүрлі тербелістердің амплитудасының күрт арту құбылысы.\n• Резонанс пайдалы болуы мүмкін (музыкалық аспаптар, радиоқабылдау) және зиянды болуы мүмкін (көпірлердің, машиналардың бұзылуы)."
  },
  "p28": {
    "ru": "## Свободные электромагнитные колебания\n• Электромагнитные колебания — периодическое изменение заряда, силы тока и напряжения.\n• Колебательный контур — цепь из последовательно соединённых конденсатора и катушки.\n• Энергия электрического поля конденсатора переходит в энергию магнитного поля катушки и обратно.\n• Формула Томсона:\n> T = 2π√(LC)\n• Индуктивность — величина, характеризующая инерционность катушки.\n• В сети Казахстана используется переменный ток 50 Гц, 220 В.",
    "en": "## Free Electromagnetic Oscillations\n• Electromagnetic oscillations are the periodic changes of charge, current, and voltage.\n• Oscillatory circuit — a circuit consisting of a capacitor and a coil connected in series.\n• The energy of the capacitor's electric field is converted into the energy of the coil's magnetic field and back.\n• Thomson's formula:\n> T = 2π√(LC)\n• Inductance is a quantity that characterizes the inertia of a coil.\n• In Kazakhstan's power grid, alternating current of 50 Hz, 220 V is used.",
    "kk": "## Еркін электромагниттік тербелістер\n• Электромагниттік тербелістер — зарядтың, ток күшінің және кернеудің периодтық өзгеруі.\n• Тербелмелі контур — конденсатор мен орамның ретті жолмен қосылған тізбегі.\n• Конденсатордың электр өрісінің энергиясы орамның магнит өрісінің энергиясына өтеді және керісінше.\n• Томсон формуласы:\n> T = 2π√(LC)\n• Индуктивтік — орамның инерциясын сипаттайтын шамасы.\n• Қазақстан жүйесінде 50 Гц, 220 В ауыспалы ток қолданылады."
  },
  "p29": {
    "ru": "## Волновое движение\n• Механическая волна — явление распространения колебательного движения в упругой среде.\n• Продольная волна — частицы колеблются вдоль направления распространения волны.\n• Поперечная волна — частицы колеблются перпендикулярно направлению распространения.\n• Волна переносит энергию без переноса вещества.\n## Величины\n• Длина волны λ — расстояние между ближайшими точками, колеблющимися в одной фазе.\n> λ = υT = υ/ν",
    "en": "## Wave Motion\n• Mechanical wave — a phenomenon of the propagation of oscillatory motion in an elastic medium.\n• Longitudinal wave — particles oscillate along the direction of wave propagation.\n• Transverse wave — particles oscillate perpendicular to the direction of propagation.\n• A wave carries energy without transferring matter.\n## Quantities\n• Wavelength λ — the distance between the nearest points oscillating in the same phase.\n> λ = υT = υ/ν",
    "kk": "## Толқындық қозғалыс\n• Механикалық толқын — серпімді ортада тербелмелі қозғалыстың таралу құбылысы.\n• Ұзындық толқын — бөлшектер толқынның таралу бағыты бойынша тербеледі.\n• Көлденең толқын — бөлшектер толқынның таралу бағытына перпендикуляр тербеледі.\n• Толқын зат тасымалдамай, энергияны тасымалдайды.\n## Шамалар\n• Толқын ұзындығы λ — бір фазада тербелетін жақын нүктелер арасындағы қашықтық.\n> λ = υT = υ/ν"
  },
  "p30": {
    "ru": "## Звук\n• Звук — механические волны, распространяющиеся в упругих средах и воспринимаемые органами слуха.\n• Человек слышит звук частотой от 16 Гц до 20 000 Гц; ниже — инфразвук, выше — ультразвук.\n• В газах и жидкостях звук — продольная волна; в вакууме звук не распространяется.\n• Скорость звука: воздух ≈ 340 м/с, вода ≈ 1480 м/с, сталь ≈ 5000 м/с.\n## Характеристики\n• Высота звука определяется частотой; громкость — амплитудой.\n• Акустический резонанс — усиление колебаний при совпадении частот.\n• Эхо — отражение звука от преграды; реверберация — увеличение длительности звука из-за отражений.",
    "en": "## Sound\n• Sound is mechanical waves propagating in elastic media and perceived by the organs of hearing.\n• Humans can hear sound with a frequency from 16 Hz to 20,000 Hz; below — infrasound, above — ultrasound.\n• In gases and liquids, sound is a longitudinal wave; in a vacuum, sound does not propagate.\n• Speed of sound: air ≈ 340 m/s, water ≈ 1480 m/s, steel ≈ 5000 m/s.\n## Characteristics\n• The pitch of a sound is determined by its frequency; loudness — by its amplitude.\n• Acoustic resonance is the amplification of oscillations when frequencies match.\n• Echo is the reflection of sound from an obstacle; reverberation is the increase in sound duration due to reflections.",
    "kk": "## Дыбыс\n• Дыбыс — серпімді орталарда таралатын және есту мүшелері арқылы қабылданатын механикалық толқындар.\n• Адам 16 Гц-тен 20 000 Гц-ге дейінгі жиіліктегі дыбысты естиді; төменірек — инфрадыбыс, жоғарырақ — ультрадыбыс.\n• Газдар мен сұйықтықтарда дыбыс — бойлық толқын; вакуумда дыбыс таралмайды.\n• Дыбыс жылдамдығы: ауа шамамен ≈ 340 м/с, су ≈ 1480 м/с, болат ≈ 5000 м/с.\n## Ерекшеліктері\n• Дыбыстың биіктігі жиілігімен анықталады; қаттылығы — амплитудасымен.\n• Аккустикалық резонанс — жиіліктер сәйкес келгенде тербелістердің күшеюі.\n• Эхо — дыбыстың кедергіден шағылуы; реверберация — шағылысуларға байланысты дыбыстың ұзақтығының ұзаруы."
  },
  "p31": {
    "ru": "## Электромагнитные волны\n• Электромагнитная волна — распространение колебаний электромагнитного поля в пространстве.\n• Предсказаны Дж. Максвеллом (1864), экспериментально получены Г. Герцем.\n• Электромагнитная волна — поперечная: колебания E и B перпендикулярны направлению распространения.\n• Скорость электромагнитных волн в вакууме:\n> c = 3·10⁸ м/с;  c = λν\n• Свет — электромагнитная волна видимого диапазона (400–750 нм; ν ≈ 4·10¹⁴–7,5·10¹⁴ Гц).\n• Шкала: радио → ИК → видимый свет → УФ → рентген → γ.\n• Открытый колебательный контур — передающая антенна; дисперсия — разложение света в спектр.",
    "en": "## Electromagnetic Waves\n• An electromagnetic wave is the propagation of oscillations of the electromagnetic field in space.\n• Predicted by J. Maxwell (1864), experimentally obtained by H. Hertz.\n• An electromagnetic wave is transverse: the oscillations of E and B are perpendicular to the direction of propagation.\n• Speed of electromagnetic waves in a vacuum:\n> c = 3·10⁸ m/s;  c = λν\n• Light is an electromagnetic wave of the visible range (400–750 nm; ν ≈ 4·10¹⁴–7.5·10¹⁴ Hz).\n• Scale: radio → IR → visible light → UV → X-ray → γ.\n• An open oscillatory circuit is a transmitting antenna; dispersion is the decomposition of light into a spectrum.",
    "kk": "## Электромагниттік толқындар\n• Электромагниттік толқын — электромагниттік өрістің тербелістерінің кеңістікте таралуы.\n• Дж. Максвеллмен (1864) болжанған, Г. Герц арқылы тәжірибелік жолмен алынды.\n• Электромагниттік толқын — көлденең: E және B тербелістері таралу бағытына перпендикуляр.\n• Электромагниттік толқындардың вакуумдағы жылдамдығы:\n> c = 3·10⁸ м/с;  c = λν\n• Жарық — көрінетін диапазондағы (400–750 нм; ν ≈ 4·10¹⁴–7,5·10¹⁴ Гц) электромагниттік толқын.\n• Шкала: радио → ЖҚ → көрінетін жарық → УФ → рентген → γ.\n• Ашық тербелмелі тізбек — тарату антеннасы; дисперсия — жарықтың спектрге бөлінуі."
  },
  "p32": {
    "ru": "## Тепловое излучение\n• Тепловое излучение — электромагнитное излучение, возникающее за счёт внутренней энергии вещества (теплового движения частиц).\n• Каждое тело одновременно излучает и поглощает энергию.\n• Абсолютно чёрное тело — тело, излучающее и поглощающее во всём диапазоне частот тепловых волн.\n• Чем выше температура тела, тем интенсивнее излучение и тем короче волны.\n## Практика\n• Тёмные поверхности лучше поглощают и лучше излучают, светлые — хуже (эксперимент §32).",
    "en": "## Thermal Radiation\n• Thermal radiation is electromagnetic radiation that arises due to the internal energy of a substance (thermal motion of particles).\n• Every body simultaneously emits and absorbs energy.\n• An ideal black body is a body that emits and absorbs across the entire range of thermal wave frequencies.\n• The higher the temperature of a body, the more intense the radiation and the shorter the waves.\n## Practice\n• Dark surfaces absorb and emit better, light surfaces - worse (experiment §32).",
    "kk": "## Тептік сәуле шығару\n• Тептік сәуле шығару — бұл заттың ішкі энергиясына (бөлшектердің жылулық қозғалысына) байланысты пайда болатын электромагниттік сәуле шығару.\n• Әрбір дене бір уақытта энергияны сәуле шығарады да, сіңіреді де.\n• Абсолютті қара дене — барлық жиілік диапазонында жылулық толқындарды сәуле шығаратын және сіңіретін дене.\n• Денеңіздің температурасы неғұрлым жоғары болса, сәуле шығару соғұрлым қарқынды, ал толқындары қысқа болады.\n## Практика\n• Қараңғы беттер энергияны жақсы сіңіреді және жақсы сәуле шығарады, ал ашық беттер нашар (эксперимент §32)."
  },
  "p33": {
    "ru": "## Кванты. Фотоэффект\n• Гипотеза Планка: энергия излучается и поглощается порциями — квантами.\n> E = hν,  h = 6,63·10⁻³⁴ Дж·с — постоянная Планка\n• Фотон — квант электромагнитного излучения.\n• Фотоэффект — вырывание электронов из вещества под действием электромагнитного излучения.\n• Красная граница фотоэффекта — минимальная частота, при которой он возможен.\n• Уравнение Эйнштейна для фотоэффекта:\n> hν = A_вых + E_к max\n• Фотоэлемент — устройство, в котором свет вызывает электрический ток.",
    "en": "## Quanta. Photoelectric Effect\n• Planck's hypothesis: energy is emitted and absorbed in portions — quanta.\n> E = hν,  h = 6.63·10⁻³⁴ J·s — Planck's constant\n• Photon — a quantum of electromagnetic radiation.\n• Photoelectric effect — the ejection of electrons from a substance under the action of electromagnetic radiation.\n• Red limit of the photoelectric effect — the minimum frequency at which it is possible.\n• Einstein's equation for the photoelectric effect:\n> hν = A_exit + E_k max\n• Photoelement — a device in which light causes an electric current.",
    "kk": "## Кванттар. Фотоэффект\n• Планктің гипотезасы: энергия бөліктермен — кванттармен — шашырап шығарылады және сіңіріледі.\n> E = hν,  h = 6,63·10⁻³⁴ Дж·с — Планк тұрақтысы\n• Фотон — электромагниттік сәулеленудің кванты.\n• Фотоэффект — электромагниттік сәулеленудің әсерінен заттан электрондардың шығуы.\n• Фотоэффектінің қызыл шегі — оның мүмкін болатын минималды жиілігі.\n• Фотоэффект үшін Эйнштейн теңдеуі:\n> hν = A_шығ + E_к max\n• Фотоэлемент — жарық электр тогын тудыратын құрылғы."
  },
  "p34": {
    "ru": "## Рентгеновское излучение\n• Возникает при торможении быстрых электронов препятствием (тормозное излучение) и при переходах электронов в атомах анода (характеристическое излучение).\n• Рентгеновские лучи — электромагнитные волны с очень короткой длиной волны (10⁻⁸–10⁻¹² м).\n• Открыты В. Рентгеном в 1895 г.\n• Обладают большой проникающей способностью; применяются в медицине (рентгенография), дефектоскопии, кристаллографии.\n• Облучение нужно ограничивать — оно опасно для живых клеток.",
    "en": "## X-ray Radiation\n• Occurs when fast electrons are decelerated by an obstacle (bremsstrahlung) and when electrons transition in the atoms of the anode (characteristic radiation).\n• X-rays are electromagnetic waves with a very short wavelength (10⁻⁸–10⁻¹² m).\n• Discovered by W. Röntgen in 1895.\n• Have high penetrating power; used in medicine (radiography), defectoscopy, crystallography.\n• Exposure should be limited — it is dangerous for living cells.",
    "kk": "## Рентген сәулесі\n• Жылдам электрондардың кедергіге соғылғанда (тежелу сәулесі) және анод атомдарындағы электрондардың өтулерінде (ерекше сәуле) пайда болады.\n• Рентген сәулелері — өте қысқа толқынды электромагниттік толқындар (10⁻⁸–10⁻¹² м).\n• 1895 жылы В. Рентген арқылы ашылған.\n• Үлкен өту қабілетіне ие; медицинада (рентгенография), ақаулықты тексеруде, кристаллографияда қолданылады.\n• Сәулеленуді шектеу қажет — ол тірі жасушалар үшін қауіпті."
  },
  "p35": {
    "ru": "## Радиоактивность\n• Радиоактивность — самопроизвольное излучение ядер атомов (открыта А. Беккерелем в 1896 г. у солей урана).\n• М. и П. Кюри открыли полоний и радий; Э. Резерфорд исследовал состав излучения.\n## Состав излучения\n• α-лучи — ядра атомов гелия (заряд +, задерживаются листом бумаги, сильная ионизация).\n• β-лучи — поток электронов (отклоняются сильнее, задерживаются алюминием).\n• γ-лучи — электромагнитные волны (не заряжены, наибольшая проникающая способность, задерживаются свинцом).\n• Все элементы с порядковым номером более 83 радиоактивны.",
    "en": "## Radioactivity\n• Radioactivity is the spontaneous emission of atomic nuclei (discovered by A. Becquerel in 1896 in uranium salts).\n• M. and P. Curie discovered polonium and radium; E. Rutherford studied the composition of radiation.\n## Composition of Radiation\n• α-rays — helium atomic nuclei (positive charge, stopped by a sheet of paper, strong ionization).\n• β-rays — stream of electrons (deflected more, stopped by aluminum).\n• γ-rays — electromagnetic waves (uncharged, highest penetrating power, stopped by lead).\n• All elements with atomic numbers greater than 83 are radioactive.",
    "kk": "## Радиоактивтік\n• Радиоактивтік — атом ядроларының өздігінен сәулеленуі (А. Беккерель 1896 жылы уран тұздарында ашты).\n• М. және П. Кюри полоний мен радийді ашты; Э. Резерфорд сәулеленудің құрамын зерттеді.\n## Сәулеленудің құрамы\n• α-сәулелер — гелий атомдарының ядролары (заряд +, қағаз парағымен тоқтайды, күшті ионизация).\n• β-сәулелер — электрондардың ағыны (көп бұрылады, алюминиймен тоқтайды).\n• γ-сәулелер — электромагниттік толқындар (зарядсыз, ең жоғарғы өтімділікке ие, қорғасынмен тоқтайды).\n• Барлық элементтер реттік нөмірі 83-тен жоғары болса радиоактивті болады."
  },
  "p36": {
    "ru": "## Опыт Резерфорда. Строение атома\n• Резерфорд бомбардировал золотую фольгу α-частицами: большинство прошло насквозь, единицы отскочили.\n• Вывод: в центре атома — маленькое положительное ядро (≈10⁻¹⁵ м), вокруг него электроны; размер атома ≈10⁻¹⁰ м.\n• Планетарная (ядерная) модель атома.\n## Спектры\n• Спектр — радужная полоса при дисперсии видимого излучения.\n• Сплошной спектр дают нагретые твёрдые тела и жидкости; линейчатый — разреженные газы.\n• Каждый элемент имеет свой уникальный линейчатый спектр — основа спектрального анализа.\n• Серия Бальмера — переходы атома водорода на второй уровень.",
    "en": "## Rutherford's Experiment. Atomic Structure\n• Rutherford bombarded gold foil with α-particles: most passed through, a few bounced back.\n• Conclusion: in the center of an atom there is a small positive nucleus (≈10⁻¹⁵ m), electrons around it; the size of the atom is ≈10⁻¹⁰ m.\n• Planetary (nuclear) model of the atom.\n## Spectra\n• A spectrum is a rainbow stripe when dispersing visible radiation.\n• Heated solids and liquids give a continuous spectrum; sparse gases give a line spectrum.\n• Each element has its own unique line spectrum — the basis of spectral analysis.\n• Balmer series — transitions of the hydrogen atom to the second level.",
    "kk": "## Резерфорд тәжірибесі. Атом құрылысы\n• Резерфорд алтын фольганы α-бөлшектермен жарықтандырды: көбісі тесіктен өтіп кетті, кейбіреулері кері шағылды.\n• Қорытынды: атомның ортасында кішкентай оң зарядталған ядро бар (≈10⁻¹⁵ м), оның айналасында электрондар орналасқан; атомның мөлшері ≈10⁻¹⁰ м.\n• Атомның планетарлық (ядерлік) моделі.\n## Спектрлер\n• Спектр — көрінетін сәулеленуді жіктегенде пайда болатын кемпірқосақ тәрізді жолақ.\n• Созылмалы спектрді қыздырылған қатты денелер мен сұйықтықтар береді; сызықты спектрді — сирек газдар.\n• Әр элементтің өзіндік бірегей сызықты спектрі бар — спектрлік талдаудың негізі.\n• Бальмер сериясы — сутегі атомының екінші деңгейге өтуі."
  },
  "p37": {
    "ru": "## Ядерные силы. Энергия связи\n• Протон (¹₁p) открыт Э. Резерфордом в 1919 г., нейтрон (¹₀n) — Дж. Чедвиком в 1932 г.\n• Нуклоны — протоны и нейтроны, из которых состоит ядро.\n• Число протонов Z равно порядковому номеру элемента; A = Z + N.\n• Изотопы — ядра с одинаковым числом протонов, но разным числом нейтронов.\n• Ядерные силы (сильное взаимодействие) — короткодействующие силы, удерживающие нуклоны в ядре.\n• Дефект масс ΔM = Z·m_p + N·m_n − M_ядра.\n• Энергия связи:\n> E_св = ΔM·c²\n• Удельная энергия связи — энергия связи на один нуклон; максимальна у ядер середины таблицы Менделеева.",
    "en": "## Nuclear Forces. Binding Energy\n• Proton (¹₁p) discovered by E. Rutherford in 1919, neutron (¹₀n) — by J. Chadwick in 1932.\n• Nucleons — protons and neutrons that make up the nucleus.\n• The number of protons Z equals the atomic number of the element; A = Z + N.\n• Isotopes — nuclei with the same number of protons but different number of neutrons.\n• Nuclear forces (strong interaction) — short-range forces that hold nucleons in the nucleus.\n• Mass defect ΔM = Z·m_p + N·m_n − M_nucleus.\n• Binding energy:\n> E_b = ΔM·c²\n• Specific binding energy — binding energy per nucleon; maximum in nuclei of the middle of the periodic table.",
    "kk": "## Ядролық күштер. Байланыс энергиясы\n• Протон (¹₁p) Э. Резерфорд арқылы 1919 жылы ашылған, нейтрон (¹₀n) — Дж. Чедвик арқылы 1932 жылы ашылған.\n• Нуклондар — ядроны құрайтын протондар мен нейтрондар.\n• Протондар саны Z элементтің реттік нөміріне тең; A = Z + N.\n• Изотоптар — протондар саны бірдей, бірақ нейтрондар саны әртүрлі ядролар.\n• Ядролық күштер (күшті өзара әрекеттесу) — нуклондарды ядро ішінде ұстап тұратын қысқа әрекет ететін күштер.\n• Масса дефициті ΔM = Z·m_p + N·m_n − M_ядро.\n• Байланыс энергиясы:\n> E_бай = ΔM·c²\n• Бір нуклонға шаққандағы байланыс энергиясы — бір нуклонға шаққандағы байланыс энергиясы; ең жоғарғысы Менделеев кестесінің ортасындағы ядроларда."
  },
  "p38": {
    "ru": "## Ядерные реакции. Закон распада\n• Ядерная реакция — изменение атомных ядер при их взаимодействии с частицами или друг с другом.\n• В ядерных реакциях сохраняются электрический заряд и массовое число.\n• Пример Резерфорда: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H.\n• α-распад: Z → Z−2, A → A−4; β-распад: Z → Z+1, A не меняется.\n• Период полураспада T — время, за которое распадается половина радиоактивных ядер.\n• Закон радиоактивного распада открыли Э. Резерфорд и Ф. Содди (1902).",
    "en": "## Nuclear Reactions. Decay Law\n• A nuclear reaction is a change in atomic nuclei when they interact with particles or with each other.\n• In nuclear reactions, electric charge and mass number are conserved.\n• Rutherford's example: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H.\n• α-decay: Z → Z−2, A → A−4; β-decay: Z → Z+1, A does not change.\n• Half-life T is the time during which half of the radioactive nuclei decay.\n• The law of radioactive decay was discovered by E. Rutherford and F. Soddy (1902).",
    "kk": "## Ядролық реакциялар. Шіру заңы\n• Ядролық реакция — атом ядроларының бөлшектермен немесе бір-бірімен әрекеттесу кезінде өзгеруі.\n• Ядролық реакцияларда электрлік заряд пен масса саны сақталады.\n• Резерфордтың мысалы: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H.\n• α-шіру: Z → Z−2, A → A−4; β-шіру: Z → Z+1, A өзгермейді.\n• Жартылай шіру кезеңі T — радиоактивті ядролардың жартысы шіретін уақыт.\n• Радиоактивті шіру заңын Э. Резерфорд пен Ф. Содди (1902) ашты."
  },
  "p39": {
    "ru": "## Деление ядер. Реактор\n• Деление ²³⁵₉₂U нейтронами осуществили О. Ган и Ф. Штрассман (1938); механизм объяснил Н. Бор (капельная модель).\n• При делении ядра образуются два осколка и 2–3 нейтрона; выделяется ≈200 МэВ.\n• 1 г урана при делении даёт столько же энергии, сколько 3 т угля.\n• Цепная реакция — самоподдерживающаяся реакция деления.\n• Коэффициент размножения нейтронов k: k < 1 — реакция затухает, k = 1 — управляемая, k > 1 — взрывная.\n• Ядерный реактор: топливо, замедлитель, регулирующие стержни, защитная оболочка.",
    "en": "## Nuclear Fission. Reactor\n• Fission of ²³⁵₉₂U by neutrons was carried out by O. Hahn and F. Strassmann (1938); the mechanism was explained by N. Bohr (drop model).\n• During fission, the nucleus produces two fragments and 2–3 neutrons; approximately 200 MeV is released.\n• 1 g of uranium during fission gives as much energy as 3 tons of coal.\n• Chain reaction — a self-sustaining fission reaction.\n• Neutron multiplication factor k: k < 1 — reaction dies out, k = 1 — controlled, k > 1 — explosive.\n• Nuclear reactor: fuel, moderator, control rods, containment vessel.",
    "kk": "## Ядролардың бөлінуі. Реактор\n• ²³⁵₉₂U изотопының нейтрондармен бөлінуін О. Ган және Ф. Штрассман жүзеге асырды (1938); механизмін Н. Бор түсіндірді (тамшы моделі).\n• Ядро бөлінген кезде екі бөлшек және 2–3 нейтрон пайда болады; шамамен 200 МэВ энергия бөлінеді.\n• 1 г уран бөліну кезінде 3 т көмірге тең энергия береді.\n• Тізбектелген реакция — өздігінен тұрақты бөліну реакциясы.\n• Нейтрондардың қалпына келу коэффициенті k: k < 1 — реакция бәсеңдейді, k = 1 — басқарылатын, k > 1 — жарылғыш.\n• Ядролық реактор: отын, баяулатқыш, реттегіш стерженьдер, қорғаныс қабығы."
  },
  "p40": {
    "ru": "## Термоядерные реакции. Радиоизотопы\n• Термоядерная реакция — слияние лёгких ядер при температуре свыше 100 млн К.\n• Вещество при этом — плазма (полностью ионизованный газ).\n• Пример: ²₁H + ³₁H → ⁴₂He + ¹₀n (выделяется ~3,5 МэВ на нуклон).\n• Термоядерные реакции — источник энергии Солнца и звёзд.\n• Радиоизотопы — нестабильные ядра, полученные искусственно; применяются в медицине, дефектоскопии, как меченые атомы.\n• Защита от радиации: время, расстояние, экранирование.",
    "en": "## Thermonuclear Reactions. Radioisotopes\n• A thermonuclear reaction is the fusion of light nuclei at a temperature above 100 million K.\n• The substance in this case is plasma (fully ionized gas).\n• Example: ²₁H + ³₁H → ⁴₂He + ¹₀n (approximately 3.5 MeV per nucleon is released).\n• Thermonuclear reactions are the source of energy for the Sun and stars.\n• Radioisotopes are unstable nuclei obtained artificially; they are used in medicine, defectoscopy, and as tracer atoms.\n• Radiation protection: time, distance, shielding.",
    "kk": "## Термоядролық реакциялар. Радиоизотоптар\n• Термоядролық реакция — бұл 100 млн К-ден жоғары температурада жеңіл ядролардың бірігуі.\n• Осы кезде зат — плазма (толық иондалған газ).\n• Мысалы: ²₁H + ³₁H → ⁴₂He + ¹₀n (нуклонға шамамен ~3,5 МэВ бөлінеді).\n• Термоядролық реакциялар — Күн мен жұлдыздардың энергиясының көзі.\n• Радиоизотоптар — жасанды жолмен алынған тұрақсыз ядролар; медицинада, дефектоскопияда, белгіленген атомдар ретінде қолданылады.\n• Радиациядан қорғау: уақыт, қашықтық, экранировка."
  },
  "p41": {
    "ru": "## Элементарные частицы\n• Элементарные частицы — частицы, из которых состоит материя; их известно несколько сотен.\n• У каждой частицы есть античастица (та же масса, противоположный заряд); при встрече — аннигиляция.\n• Позитрон — античастица электрона.\n• Нейтрон свободен ~15 мин, затем распадается: n → p + e + ν̄.\n• Нейтрино обладает огромной проникающей способностью.\n• Классификация: фотон, лептоны, адроны; адроны состоят из кварков.\n• По современным представлениям Вселенная возникла в результате Большого взрыва; первые звёзды зажглись через 200 млн лет, галактики сформировались к 1 млрд лет.",
    "en": "## Elementary Particles\n• Elementary particles are particles that make up matter; several hundred are known.\n• Each particle has an antiparticle (same mass, opposite charge); upon meeting — annihilation.\n• A positron is the antiparticle of the electron.\n• A free neutron lasts ~15 minutes, then decays: n → p + e + ν̄.\n• Neutrinos have enormous penetrating ability.\n• Classification: photon, leptons, hadrons; hadrons consist of quarks.\n• According to modern concepts, the Universe arose as a result of the Big Bang; the first stars ignited after 200 million years, galaxies formed by 1 billion years.",
    "kk": "## Элементарлік бөлшектер\n• Элементарлік бөлшектер — материяны құрайтын бөлшектер; олардың бірнеше жүздеген түрлері белгілі.\n• Әр бөлшектің антибөлшегі бар (сол масса, қарама-қарсы заряд); кездескенде — жойылу.\n• Позитрон — электронның антибөлшегі.\n• Нейтрон бостандықта шамамен 15 минут, содан кейін ыдырайды: n → p + e + ν̄.\n• Нейтрино үлкен өту қабілетіне ие.\n• Сыныптау: фотон, лептондар, адрондар; адрондар кварктардан тұрады.\n• Қазіргі түсініктерге сәйкес, Ғалам Үлкен жарылыс нәтижесінде пайда болған; алғашқы жұлдыздар 200 млн жылдан кейін жанып, галактикалар 1 млрд жылға дейін қалыптасты."
  },
  "p42": {
    "ru": "## Физика и астрономия в картине мира\n• Физическая картина мира — целостное представление о материи, движении и взаимодействии.\n• Механика, электродинамика, квантовая физика описывают разные уровни природы.\n• Астрономия определяет наше место во Вселенной: Земля — планета Солнечной системы, одной из миллиардов звёзд Галактики, одной из миллиардов галактик.\n• Научное мировоззрение опирается на опыт, эксперимент и проверяемость теорий.",
    "en": "## Physics and Astronomy in the Worldview\n• The physical worldview is a holistic understanding of matter, motion, and interaction.\n• Mechanics, electrodynamics, and quantum physics describe different levels of nature.\n• Astronomy determines our place in the Universe: the Earth is a planet of the Solar System, one of billions of stars in the Galaxy, one of billions of galaxies.\n• The scientific worldview is based on experience, experiment, and the verifiability of theories.",
    "kk": "## Физика және астрономия әлем көрінісінде\n• Физикалық әлем көрінісі — материя, қозғалыс және өзара әрекеттестік туралы тұтас түсінік.\n• Механика, электродинамика, кванттық физика табиғаттың әртүрлі деңгейлерін сипаттайды.\n• Астрономия біздің Ғаламдағы орнымызды анықтайды: Жер — Күн жүйесінің планетасы, Галактиканың миллиардтаған жұлдыздарының бірі, миллиардтаған галактикалардың бірі.\n• Ғылыми дүниетаным тәжірибе, эксперимент және теориялардың тексерілуіне негізделген."
  },
  "p43": {
    "ru": "## Экологическая культура\n• Технический прогресс влияет на окружающую среду: выбросы, отходы, радиация.\n• Атомная энергетика требует строгой безопасности; трагедия Семипалатинского полигона — урок для Казахстана.\n• Парниковый эффект связан с ростом содержания углекислого газа.\n• Экологическая культура — ответственное отношение каждого человека к природе: энергосбережение, сортировка отходов, защита водоёмов.\n• Возобновляемые источники энергии (солнце, ветер) особенно актуальны для Казахстана.",
    "en": "## Environmental Culture\n• Technical progress affects the environment: emissions, waste, radiation.\n• Nuclear energy requires strict safety; the tragedy of the Semipalatinsk test site is a lesson for Kazakhstan.\n• The greenhouse effect is associated with the increase in carbon dioxide content.\n• Environmental culture is the responsible attitude of each person toward nature: energy saving, waste sorting, protection of water bodies.\n• Renewable energy sources (sun, wind) are especially relevant for Kazakhstan.",
    "kk": "## Экологиялық мәдениет\n• Техникалық прогресс қоршаған ортаға әсер етеді: шығарындылар, қалдықтар, радиация.\n• Атом энергетикасы қатаң қауіпсіздікті талап етеді; Семей полигонының трагедиясы Қазақстанға сабақ.\n• Жылу қалқанының әсері көмірқышқыл газының мөлшерінің өсуімен байланысты.\n• Экологиялық мәдениет — әр адамның табиғатқа жауапкершілікпен қарауы: энергияны үнемдеу, қалдықтарды сұрыптау, су айдындарын қорғау.\n• Қалпына келетін энергия көздері (күн, жел) Қазақстан үшін әсіресе өзекті."
  },
  "lab1": {
    "ru": "## ЛР №1. Определение ускорения тела при равноускоренном движении\n• Цель: измерить ускорение, с которым шарик скатывается по наклонному желобу.\n• Оборудование: штатив с муфтой и лапкой, металлический желоб, шарик, цилиндрическое тело, измерительная лента, секундомер.\n• При υ₀ = 0 перемещение\n> s = at²/2  →  a = 2s/t²\n## Ход работы\n• Собрать установку; у основания желоба положить цилиндрическое тело.\n• Пустить шарик, измерить время движения; измерить расстояние до цилиндра.\n• Повторить 5 раз без изменения угла наклона; найти среднее ускорение.\n• Оценить погрешности статистическим методом.\n> Дополнительно: сравнить с a = g·sinα",
    "en": "## Lab #1. Determining the acceleration of a body in uniformly accelerated motion\n• Objective: to measure the acceleration with which a ball rolls down an inclined groove.\n• Equipment: stand with clamp and base, metal groove, ball, cylindrical body, measuring tape, stopwatch.\n• For υ₀ = 0, displacement\n> s = at²/2  →  a = 2s/t²\n## Procedure\n• Assemble the setup; place the cylindrical body at the base of the groove.\n• Release the ball, measure the time of motion; measure the distance to the cylinder.\n• Repeat 5 times without changing the angle of inclination; find the average acceleration.\n• Estimate errors using the statistical method.\n> Additionally: compare with a = g·sinα",
    "kk": "## ЛР №1. Дене тең үдеумен қозғалғандағы үдеуді анықтау\n• Мақсаты: шариктің көлбеу арнадан қалай сырғитынынан үдеуді өлшеу.\n• Жабдықтар: муфта мен лапкасы бар штатив, металл арна, шарик, цилиндр пішінді дене, өлшеу таспасы, секундомер.\n• υ₀ = 0 болғанда орын ауыстыру\n> s = at²/2  →  a = 2s/t²\n## Жұмыс барысы\n• Құрылғыны жинау; арнаның түбіне цилиндр денені қою.\n• Шарикті жіберу, қозғалыс уақытын өлшеу; цилиндрге дейінгі қашықтықты өлшеу.\n• Қалта бұрышын өзгертпей 5 рет қайталау; орташа үдеуді табу.\n• Қателіктерді статистикалық әдіспен бағалау.\n> Қосымша: a = g·sinα-пен салыстыру"
  },
  "lab2": {
    "ru": "## ЛР №2. Изучение движения тела, брошенного горизонтально\n• Цель: определить начальную скорость тела, брошенного горизонтально.\n• Оборудование: штатив, стальной шарик, лабораторный желоб, линейка, листы белой и копировальной бумаги.\n• По вертикали движение равнопеременное (с ускорением g), по горизонтали — равномерное.\n> t = √(2h/g);  υ₀ = l/t = l·√(g/2h)\n## Ход работы\n• Собрать установку; пускать шарик с одной и той же высоты.\n• Измерить высоту стола и дальность полёта; повторить 5 раз.\n• Рассчитать υ₀ и среднее значение; оценить погрешности.",
    "en": "## Lab #2. Study of the motion of a body thrown horizontally\n• Objective: to determine the initial speed of a body thrown horizontally.\n• Equipment: stand, steel ball, laboratory trough, ruler, sheets of white and carbon paper.\n• Vertically, the motion is uniformly accelerated (with acceleration g), horizontally — uniform.\n> t = √(2h/g);  υ₀ = l/t = l·√(g/2h)\n## Procedure\n• Set up the apparatus; release the ball from the same height each time.\n• Measure the height of the table and the flight distance; repeat 5 times.\n• Calculate υ₀ and the average value; estimate errors.",
    "kk": "## ЛР №2. Деңгейі бойынша тік бағытталған денені қалқытқанда қозғалысты зерттеу\n• Мақсат: денені көлденең бағытта лақтырғандағы бастапқы жылдамдықты анықтау.\n• Жабдықтар: штатив, болат шар, зертханалық жолақ, сызғыш, ақ және көшірме қағаз парақтары.\n• Тігінен қозғалыс бірқалыпты үдеумен (g үдеуімен), көлденең қозғалыс — бірқалыпты.\n> t = √(2h/g); υ₀ = l/t = l·√(g/2h)\n## Жұмыс барысы\n• Құрылғыны жинау; шарды бірдей биіктіктен жіберу.\n• Үстелдің биіктігі мен ұшу ұзындығын өлшеу; 5 рет қайталау.\n• υ₀ және орташа мәнін есептеу; қателіктерді бағалау."
  },
  "lab3": {
    "ru": "## ЛР №3. Определение ускорения свободного падения с использованием математического маятника\n• Цель: определить g и сравнить с 9,8 м/с².\n• Оборудование: секундомер, измерительная лента, шарик на нити, штатив с муфтой и кольцом.\n• Период маятника:\n> T = 2π√(l/g);  T = t/N  →  g = 4π²l/T²\n## Ход работы\n• Подвесить шарик на нити длиной около 1 м; шарик в 3–5 см от пола.\n• Измерить длину подвеса; измерить время 40 колебаний.\n• Повторить 5 раз; найти среднее g и погрешности.",
    "en": "## Lab #3. Determination of the Acceleration of Free Fall Using a Mathematical Pendulum\n• Objective: to determine g and compare it with 9.8 m/s².\n• Equipment: stopwatch, measuring tape, ball on a string, stand with a clamp and ring.\n• Pendulum period:\n> T = 2π√(l/g);  T = t/N  →  g = 4π²l/T²\n## Procedure\n• Suspend the ball on a string about 1 m long; the ball 3–5 cm from the floor.\n• Measure the suspension length; measure the time of 40 oscillations.\n• Repeat 5 times; find the average g and errors.",
    "kk": "## ЛР №3. Математикалық маятникті пайдаланып еркін түсу үдеуді анықтау\n• Мақсат: g-ны анықтап, оны 9,8 м/с²-пен салыстыру.\n• Құрал-жабдықтар: секундомер, өлшеу таспасы, жіпке байланған шар, муфтасы мен сақинасы бар штатив.\n• Маятниктің периоды:\n> T = 2π√(l/g);  T = t/N  →  g = 4π²l/T²\n## Жұмыс барысы\n• Шарды шамамен 1 м жіпке асып ілу; шар еденнен 3–5 см биіктікте болу керек.\n• Асып ілінген ұзындықты өлшеу; 40 тербелістің уақытын өлшеу.\n• 5 рет қайталау; орташа g және қателіктерді есептеу."
  },
  "lab4": {
    "ru": "## ЛР №4. Определение скорости распространения поверхностной волны\n• Цель: измерить скорость волн на поверхности воды.\n• Оборудование: кювета с водой, поплавок, секундомер, измерительная лента.\n• Волны распространяются в однородной среде с постоянной скоростью:\n> υ = l/t\n## Ход работы\n• Налить воду в кювету; опустить поплавок у края.\n• Привести поплавок в колебательное движение; засечь время прихода волны к противоположному борту.\n• Повторить 5 раз; рассчитать среднюю скорость и погрешности.",
    "en": "## Lab Work No. 4. Determination of the Speed of a Surface Wave\n• Objective: to measure the speed of waves on the water surface.\n• Equipment: water cuvette, float, stopwatch, measuring tape.\n• Waves propagate in a homogeneous medium at a constant speed:\n> υ = l/t\n## Procedure\n• Pour water into the cuvette; place the float at the edge.\n• Set the float into oscillatory motion; record the time it takes for the wave to reach the opposite side.\n• Repeat 5 times; calculate the average speed and errors.",
    "kk": "## ЛР №4. Беттің толқынын таралу жылдамдығын анықтау\n• Мақсат: судың бетінде толқынның жылдамдығын өлшеу.\n• Құрал-жабдықтар: суы бар кювета, қалқымалы таяқша, секундомер, өлшеу таспасы.\n• Толқын біркелкі ортада тұрақты жылдамдықпен таралады:\n> υ = l/t\n## Жұмыс барысы\n• Кюветаны сумен толтырыңыз; қалқымалы таяқшаны шетке қойыңыз.\n• Қалқымалы таяқшаны тербелісте қалдырыңыз; толқынның қарсы бортқа жету уақытын өлшеңіз.\n• 5 рет қайталаңыз; орташа жылдамдықты және қателіктерді есептеңіз."
  },
  "bonus": {
    "ru": "## Техника безопасности (9 класс)\n• Перед началом лабораторной работы прочитай инструкцию и работай только с разрешения учителя.\n• Не включай электрические цепи без проверки схемы; о неисправностях сразу сообщай учителю.\n• Осторожно обращайся со стеклом, горячей водой, пламенем и острыми предметами.\n• При работе с маятниками, желобами и кюветами закрепляй оборудование в штативе, не ставь приборы на край стола.\n• Не прикасайся к оголённым проводам и не оставляй включённые приборы без присмотра.\n• После работы приведи рабочее место в порядок.",
    "en": "## Safety Rules (9th Grade)\n• Before starting the laboratory work, read the instructions and work only with the teacher's permission.\n• Do not turn on electrical circuits without checking the diagram; immediately report any malfunctions to the teacher.\n• Handle glassware, hot water, flames, and sharp objects carefully.\n• When working with pendulums, troughs, and cuvettes, secure the equipment in a stand; do not place instruments on the edge of the table.\n• Do not touch exposed wires and do not leave turned-on equipment unattended.\n• After work, tidy up your workplace.",
    "kk": "## Қауіпсіздік техникасы (9 сынып)\n• Лабораториялық жұмыс басталар алдында нұсқаулықты оқы және тек мұғалім рұқсатын алғаннан кейін жұмыс істеңіз.\n• Схеманы тексермей электр тізбектерін қоспа; ақаулар туралы дереу мұғалімге хабарла.\n• Шыныға, ыстық суға, отқа және өткір заттарға абайлап қара.\n• Ауытқыштармен, ұзын қашықтықтағы жолақтармен және кюветтермен жұмыс істегенде құралдарды штативке бекітің, аспаптарды үстел шетіне қойма.\n• Ашық сымдарға тиіспе және қоспа тұрған приборларды қараусыз қалдырма.\n• Жұмыс аяқталғаннан кейін жұмыс орнын ретте."
  }
};
const EXPERIMENTS_BY_PARAGRAPH = {
  "p2": {
    "title": {
      "ru": "Эксперимент: координаты углов стола",
      "en": "Experiment: coordinates of table corners",
      "kk": "Эксперимент: үстел бұрыштарының координаттары"
    },
    "description": {
      "ru": "Свяжите декартову систему координат с комнатой: ось 0x — линия пересечения пола и наружной стены, 0y — линия пересечения наружных стен, 0z — линия пересечения пола со смежной стеной. Определите координаты углов стола, изобразите их в тетради в выбранном масштабе. Найдите наибольшее расстояние между углами и изобразите стол в проекции на плоскость х0у.",
      "en": "Connect the Cartesian coordinate system with the room: the 0x axis — the line of intersection of the floor and the outer wall, 0y — the line of intersection of the outer walls, 0z — the line of intersection of the floor with the adjacent wall. Determine the coordinates of the corners of the table, depict them in a notebook at the chosen scale. Find the greatest distance between the corners and depict the table in projection onto the x0y plane.",
      "kk": "Декарттық координат жүйесін бөлмемен байланыстырыңыз: 0x осі — еден мен сыртқы қабырғаның қиылысы сызығы, 0y — сыртқы қабырғалардың қиылысы сызығы, 0z — еден мен көршілес қабырғаның қиылысы сызығы. Үстелдің бұрыштарының координаттарын анықтаңыз, оларды дәптерде таңдалған масштабта бейнелеңіз. Бұрыштар арасындағы ең үлкен қашықтықты табыңыз және үстелді x0у жазықтығына проекцияда бейнелеңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Симулятор для выполнения экспериментального задания",
          "en": "Simulator for performing the experimental task",
          "kk": "Эксперименттік тапсырманы орындауға арналған симулятор"
        },
        "url": "https://share.gemini.google/LzT3nS2Pyu3n"
      },
      {
        "label": {
          "ru": "Симулятор с автопроверкой решения",
          "en": "Simulator with automatic solution checking",
          "kk": "Шешімді автоматты түрде тексеретін симулятор"
        },
        "url": "https://share.gemini.google/cLul37isYdiW"
      }
    ]
  },
  "p3": {
    "title": {
      "ru": "Эксперимент: ускорение тормозящего автомобиля",
      "en": "Experiment: acceleration of a braking car",
      "kk": "Эксперимент: тежегіш автокөліктің үдеуі"
    },
    "description": {
      "ru": "Определите ускорение, с которым двигался автомобиль, по значению его начальной скорости и времени торможения до полной остановки. Подумайте, какие измерительные приборы необходимы для выполнения задания.",
      "en": "Determine the acceleration with which the car was moving, based on its initial speed and the braking time to a complete stop. Consider which measuring instruments are necessary to complete the task.",
      "kk": "Автокөліктің қозғалысындағы үдеуді оның бастапқы жылдамдығы мен толық тоқтағанға дейінгі тежелу уақытын пайдаланып анықтаңыз. Тапсырманы орындауға қажетті өлшеу құралдарын ойластырыңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Видео: ускорение и равноускоренное движение (9 класс)",
          "en": "Video: acceleration and uniformly accelerated motion (9th grade)",
          "kk": "Үдеу және бірқалыпты үдемелі қозғалыс (9 сынып)"
        },
        "url": "https://youtu.be/yYttAwCurHM?si=jpIwpnF4J9xDGD9I"
      },
      {
        "label": {
          "ru": "Симулятор: ускорение автомобиля при торможении",
          "en": "Simulator: car acceleration during braking",
          "kk": "Симулятор: көліктің тежелу кезіндегі үдеуі"
        },
        "url": "https://share.gemini.google/fImy1pLXTJEA"
      },
      {
        "label": {
          "ru": "Статья: скорость — виды и значение в жизни человека",
          "en": "Article: speed — types and significance in human life",
          "kk": "Мақала: жылдамдық — түрлері және адамның өміріндегі мәні"
        },
        "url": "https://www.pravda.ru/tags/skorost-/"
      }
    ]
  },
  "p4": {
    "title": {
      "ru": "Эксперимент: скатывание тела с наклонной плоскости",
      "en": "Experiment: rolling a body down an inclined plane",
      "kk": "Эксперимент: денені көлбеу жазықтықтан сырғыту"
    },
    "description": {
      "ru": "Скатывая тело с наклонной плоскости, определите перемещение тела за первую, вторую и третью секунды. Найдите соотношение между полученными результатами и проверьте, выполняется ли соотношение S₁ : S₂ : S₃ = 1 : 3 : 5.",
      "en": "By rolling a body down an inclined plane, determine the displacement of the body during the first, second, and third seconds. Find the ratio between the obtained results and check whether the ratio S₁ : S₂ : S₃ = 1 : 3 : 5 holds.",
      "kk": "Тігінен жатқан жазықтыдан денені түсу кезінде дененің бірінші, екінші және үшінші секундтағы орнын анықтаңыз. Алынған нәтижелер арасындағы қатынасты табыңыз және S₁ : S₂ : S₃ = 1 : 3 : 5 қатынасы орындалатынын тексеріңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Видео: скатывание тела с наклонной плоскости",
          "en": "Video: rolling a body down an inclined plane",
          "kk": "Бейне: денені көлбеу жазықтықтан сырғыту"
        },
        "url": "https://www.youtube.com/live/tFypPlkUMdU?si=jZW_4WOIMkXGcJEs"
      },
      {
        "label": {
          "ru": "Симулятор: движение по наклонной плоскости",
          "en": "Simulator: motion on an inclined plane",
          "kk": "Симулятор: көлбеу жазықтық бойынша қозғалыс"
        },
        "url": "https://share.gemini.google/nUPoweJKIaGX"
      },
      {
        "label": {
          "ru": "Видео: скатывание тела с наклонной плоскости (измерение ускорения)",
          "en": "Video: an object rolling down an inclined plane (measuring acceleration)",
          "kk": "Видео: дененің көлбеу жазықтықтан домалауы (үдеуді өлшеу)"
        },
        "url": "https://youtu.be/oLjvciFi8BE?si=vas3tGsYpdSr1O3G"
      }
    ]
  },
  "p5": {
    "title": {
      "ru": "Эксперимент: измерение ускорения свободного падения",
      "en": "Experiment: measurement of free-fall acceleration",
      "kk": "Эксперимент: еркін түсу үдеуін өлшеу"
    },
    "description": {
      "ru": "Используя секундомер и сантиметровую ленту, определите ускорение свободного падения. Подумайте, что необходимо изменить в постановке опыта для повышения точности измерения.",
      "en": "Using a stopwatch and a measuring tape, determine the acceleration due to gravity. Think about what needs to be changed in the experiment setup to increase measurement accuracy.",
      "kk": "Секундомер мен сантиметрлік таспаны пайдаланып, еркін түсу үдеуімен анықтаңыз. Өлшеу дәлдігін арттыру үшін тәжірибе жүргізу тәсілінде нені өзгерту керектігін ойлаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Симулятор: измерение g",
          "en": "Simulator: measuring g",
          "kk": "Симулятор: g өлшеу"
        },
        "url": "https://share.gemini.google/ISlNSlLx0wle"
      }
    ]
  },
  "p6": {
    "title": {
      "ru": "Эксперимент: грязь с колеса и курвиметр",
      "en": "Experiment: dirt from a wheel and the curvimeter",
      "kk": "Эксперимент: дөңгелектен кір мен қисық өлшегіш"
    },
    "description": {
      "ru": "1. Проследите за движением комков грязи и камней, срывающихся с протекторов колёс машины или велосипеда. Какое направление имеет скорость в момент отрыва? 2. Подготовьте сообщение о курвиметре и изготовьте самодельный курвиметр для измерения расстояний по картам; проверьте протяжённость автомобильных дорог между населёнными пунктами Казахстана.",
      "en": "1. Watch the motion of lumps of mud and stones flying off the tyre treads of a moving car or bicycle. What direction does the velocity have at the moment of separation? 2. Prepare a short report about the curvimeter and make a homemade curvimeter for measuring distances on maps; check the length of roads between settlements of Kazakhstan.",
      "kk": "1. Көлік немесе велосипед дөңгелектерінің протекторынан ұшып шыққан лай мен тас кесектерінің қозғалысын бақылаңыз. Үзілу сәтінде жылдамдық қандай бағытта болады? 2. Курвиметр туралы хабарлама дайындаңыз және картадағы қашықтықтарды өлшеуге арналған өз қолыңызбен курвиметр жасаңыз; Қазақстан елді мекендері арасындағы автомобиль жолдарының ұзындығын тексеріңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Симулятор: отрыв частиц и брызг с колеса",
          "en": "Simulator: detachment of particles and splashes from a wheel",
          "kk": "Симулятор: дөңгелектен бөлшектер мен шашырандылардың босатылуы"
        },
        "url": "https://share.gemini.google/6R3I2QYQRo9k"
      },
      {
        "label": {
          "ru": "Что такое дорожный курвиметр и как им пользоваться",
          "en": "What a road curvimeter is and how to use it",
          "kk": "Жол қисық өлшегіші деген не және оны қалай пайдалану керек"
        },
        "url": "https://blog.rusgeocom.ru/informatsiya/stati/chto-takoe-kurvimetr"
      },
      {
        "label": {
          "ru": "Курвиметр своими руками (видео)",
          "en": "DIY curvimeter (video)",
          "kk": "Өз қолыңызбен кривиметр (видео)"
        },
        "url": "https://youtu.be/gK21HPucCt0?si=ZW7xEIReD2zgfJeb"
      },
      {
        "label": {
          "ru": "Симулятор: криволинейное движение (вариант)",
          "en": "Simulator: curvilinear motion (variant)",
          "kk": "Симулятор: қисық сызықты қозғалыс (нұсқа)"
        },
        "url": "https://share.gemini.google/09pIuIzK4aSD"
      },
      {
        "label": {
          "ru": "В каком направлении слетает грязь с колеса велосипеда (обсуждение)",
          "en": "Which direction does mud fly off a bicycle wheel (discussion)",
          "kk": "Велосипед дөңгелегінен лай қай бағытта ұшып түседі (талқылау)"
        },
        "url": "https://physics.stackexchange.com/questions/184787/in-which-direction-does-mud-fly-off-a-moving-bikes-tire-why"
      },
      {
        "label": {
          "ru": "Курвиметр (статья «Математические этюды»)",
          "en": "Curvimeter (article “Mathematical Etudes”)",
          "kk": "Курвиметр («Математикалық этюдтар» мақаласы)"
        },
        "url": "https://book.etudes.ru/articles/curvimeter/"
      },
      {
        "label": {
          "ru": "Видео: курвиметр своими руками (вариант)",
          "en": "Video: DIY curvimeter (variant)",
          "kk": "Видео: өз қолыңмен жасалған курвиметр (нұсқа)"
        },
        "url": "https://youtu.be/TO8sISEW0rw?si=veHIrZWwhkkg_CDs"
      }
    ]
  },
  "p8": {
    "title": {
      "ru": "Эксперимент: наблюдение Большой Медведицы",
      "en": "Experiment: observing the Big Dipper",
      "kk": "Эксперимент: Үлкен Аюды бақылау"
    },
    "description": {
      "ru": "Проведите наблюдение за звёздами Большой Медведицы. Запомните расположение звёзд относительно друг друга. Сравните яркость звёзд и выясните, какая из них двойная.",
      "en": "Observe the stars of the Big Dipper. Memorize the positions of the stars relative to each other. Compare the brightness of the stars and find out which one is double.",
      "kk": "Үлкен Аю жұлдыздар тобын бақылаңыз. Жұлдыздардың бір-біріне қарағандағы орналасуын есте сақтаңыз. Жұлдыздардың жарықтылығын салыстырыңыз және олардың қайсысы қосарланғанын анықтаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Как найти главные созвездия на небе",
          "en": "How to find the main constellations in the sky",
          "kk": "Аспандағы негізгі жұлдыздық тізбектерді қалай табуға болады"
        },
        "url": "https://dzen.ru/a/akXpNs3OSmgBBgDG"
      },
      {
        "label": {
          "ru": "Изучение созвездия Большой Медведицы",
          "en": "Studying the Big Dipper constellation",
          "kk": "Үлкен Аю жұлдызды тобын зерттеу"
        },
        "url": "https://share.gemini.google/ZpGImZjp7Tsl"
      }
    ]
  },
  "p9": {
    "title": {
      "ru": "Эксперимент: координаты звёзд Пегаса по ПКЗН",
      "en": "Experiment: coordinates of Pegasus stars according to the PCZN",
      "kk": "Эксперимент: ПКЗН бойынша Пегас жұлдыздарының координаттары"
    },
    "description": {
      "ru": "Определите горизонтальные координаты звёзд созвездия Пегас на время их наблюдения с использованием подвижной карты звёздного неба (ПКЗН). По полученным результатам найдите их на небосводе и изобразите расположение звёзд относительно друг друга.",
      "en": "Determine the horizontal coordinates of the stars of the Pegasus constellation at the time of their observation using the movable star map (PKZN). Based on the obtained results, locate them in the sky and depict the arrangement of the stars relative to each other.",
      "kk": "Жылжымалы жұлдыз картасы (ЖЖК) арқылы бақылау кезінде Пегас шоқжұлдызындағы жұлдыздардың көлденең координаталарын анықтаңыз. Алынған нәтижелер бойынша оларды аспаннан тауып, жұлдыздардың бір-біріне қатысты орналасуын бейнелеңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Подвижная карта звёздного неба с заданиями",
          "en": "Movable star map with tasks",
          "kk": "Тапсырмалары бар жұлдызды аспанның қозғалмалы картасы"
        },
        "url": "https://sky-map.ru/"
      },
      {
        "label": {
          "ru": "Созвездие Пегас на небе",
          "en": "The Pegasus constellation in the sky",
          "kk": "Аспандағы Пегас жұлдыздық жүйесі"
        },
        "url": "https://4glaza.ru/articles/sozvezdie-pegas/"
      },
      {
        "label": {
          "ru": "Карта звёздного неба онлайн",
          "en": "Star map online",
          "kk": "Жұлдызды аспан картасы онлайн"
        },
        "url": "https://in-space.ru/skyonline/"
      }
    ]
  },
  "p10": {
    "title": {
      "ru": "Эксперимент: широта по Полярной звезде и гномон",
      "en": "Experiment: latitude using the North Star and gnomon",
      "kk": "Эксперимент: Поляр жұлдызымен және гномон арқылы ендік"
    },
    "description": {
      "ru": "1. Определите широту вашей местности по Полярной звезде. 2. С помощью гномона определите направление полуденной линии и момент истинного полдня. Совпадает ли он с полднем по вашим часам?",
      "en": "1. Determine the latitude of your location using the North Star. 2. Using a gnomon, determine the direction of the noon line and the moment of true noon. Does it match noon by your clock?",
      "kk": "1. Темірқазық жұлдызы арқылы тұрған жеріңіздің ендігін анықтаңыз. 2. Гномон көмегімен талтүс сызығының бағытын және нағыз талтүс сәтін анықтаңыз. Ол сағатыңыздағы талтүспен сәйкес келе ме?"
    },
    "links": [
      {
        "label": {
          "ru": "Ваше небо — в выбранном месте и времени",
          "en": "Your sky — in the selected place and time",
          "kk": "Сіздің аспаныңыз — таңдалған орнында және уақытында"
        },
        "url": "https://in-the-sky.pw/map/"
      },
      {
        "label": {
          "ru": "Широта местности и Полярная звезда (видео)",
          "en": "Latitude of a location and the North Star (video)",
          "kk": "Жердің ендігі және Поляр жұлдызы (видео)"
        },
        "url": "https://youtu.be/iv2zkBPPTMA?si=3fDXGBylxolkjkXR"
      },
      {
        "label": {
          "ru": "Гномон. Определение географических координат",
          "en": "Gnomon. Determining geographical coordinates",
          "kk": "Гномон. Географиялық координаттарды анықтау"
        },
        "url": "http://astroexperiment.ru/astro/gnomon2.shtml"
      },
      {
        "label": {
          "ru": "Видео: находим время истинного солнечного полдня",
          "en": "Video: finding the time of true solar noon",
          "kk": "Видео: нағыз талтүс уақытын табу"
        },
        "url": "https://rutube.ru/video/b726a8f975aa3acdb526732f299c0ba9/?r=wd"
      },
      {
        "label": {
          "ru": "Солнечные часы в полевых условиях (гномон)",
          "en": "A field sundial (gnomon)",
          "kk": "Дала жағдайындағы күн сағаты (гномон)"
        },
        "url": "https://outdooredu.geo.uni-halle.de/?q=node/368&language=en"
      }
    ]
  },
  "p12": {
    "title": {
      "ru": "Эксперимент: расстояние до прохожего методом параллакса",
      "en": "Experiment: distance to a passerby using parallax",
      "kk": "Эксперимент: параллакс әдісімен өтіп бара жатқан адамға дейінгі қашықтық"
    },
    "description": {
      "ru": "Определите расстояние до человека, идущего по улице: вытянув руку, смотрите на большой палец правым глазом; когда прохожий скроется за пальцем, закройте правый глаз и откройте левый — посчитайте число шагов «смещения». Умножьте их на 10 (средний шаг 75 см). Объясните множитель 10 построением: расстояние между глазами 6 см, от глаз до пальца — 60 см.",
      "en": "Determine the distance to a person walking on the street: stretch out your hand, look at your thumb with your right eye; when the passerby disappears behind the thumb, close your right eye and open your left — count the number of \"shift\" steps. Multiply them by 10 (average step 75 cm). Explain the multiplier 10 with the following construction: the distance between the eyes is 6 cm, from the eyes to the thumb — 60 cm.",
      "kk": "Көшеде жүрген адамға дейінгі қашықтықты анықтаңыз: қолыңызды созып, оң көзбен бас саусағыңызды қараңыз; жүргінші саусақтың ар жағында жоғалған кезде оң көзді жауып, сол көзді ашыңыз — \"жылжу\" қадамдарының санын есептеңіз. Оны 10-ға көбейтіңіз (орташа қадам 75 см). 10 көбейткішін салуды түсіндіріңіз: көздер арасындағы қашықтық 6 см, көзден саусаққа дейін — 60 см."
    },
    "links": [
      {
        "label": {
          "ru": "How to Estimate Distances (by Using Your Thumb and Eyes)",
          "en": "How to Estimate Distances (by Using Your Thumb and Eyes)",
          "kk": "Қашықтықты бағалау жолдары (бас бармақ пен көз арқылы)"
        },
        "url": "https://www.wikihow.com/Estimate-Distances-(by-Using-Your-Thumb-and-Eyes)"
      },
      {
        "label": {
          "ru": "Практикум: измерение расстояния глазомером",
          "en": "Practical work: measuring distance with a simple eye device",
          "kk": "Практикум: көзбен қашықтықты өлшеу"
        },
        "url": "https://share.gemini.google/dMasdEhc0Xif"
      },
      {
        "label": {
          "ru": "Как оценить расстояние на море (статья)",
          "en": "How to judge distance at sea (article)",
          "kk": "Теңізде қашықтықты қалай бағалауға болады (мақала)"
        },
        "url": "https://www.yachting.com/en-gb/news/how-to-judge-distance-at-sea"
      }
    ]
  },
  "p14": {
    "title": {
      "ru": "Эксперимент: коэффициент трения бумаги о стол",
      "en": "Experiment: paper friction coefficient on the table",
      "kk": "Эксперимент: қағаздың үстелге үйкеліс коэффиценті"
    },
    "description": {
      "ru": "Используя лист бумаги и линейку, определите коэффициент трения бумаги о стол. Подготовьте отчёт по выполненной работе.",
      "en": "Using a sheet of paper and a ruler, determine the coefficient of friction of the paper on the table. Prepare a report on the work carried out.",
      "kk": "Қағаз парағы мен сызғышты пайдаланып, столға деген қағаздың үйкеліс коэффициентін анықтаңыз. Орындаған жұмысыңыз бойынша есеп дайындаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Лабораторный практикум: трение бумаги о стол",
          "en": "Laboratory practical: friction of paper on a table",
          "kk": "Зертханалық практикум: қағазды үстелге үйкелту"
        },
        "url": "https://share.gemini.google/RlQaceQ3luJv"
      },
      {
        "label": {
          "ru": "Видео: сила трения и коэффициент трения",
          "en": "Video: friction force and coefficient of friction",
          "kk": "Бейне: үйкеліс күші және үйкеліс коэффициенті"
        },
        "url": "https://youtu.be/-puJShgtdK0?si=B_OHk4D45BYmk_MJ"
      }
    ]
  },
  "p17": {
    "title": {
      "ru": "Эксперимент: гравитационные поля планет",
      "en": "Experiment: gravitational fields of planets",
      "kk": "Эксперимент: планеталардың гравитациялық алаңдары"
    },
    "description": {
      "ru": "1. Рассчитайте напряжённости полей Солнца и планет Солнечной системы (нужны массы и радиусы из справочника). Результаты сведите в таблицу и сделайте сравнительный анализ. 2. Подготовьте сообщение о Г. Кавендише.",
      "en": "1. Calculate the field intensities of the Sun and the planets of the Solar System (you will need masses and radii from a reference book). Summarize the results in a table and make a comparative analysis. 2. Prepare a report about H. Cavendish.",
      "kk": "1. Күн мен Күн жүйесінің планеталарының өріс күшін есептеңіз (кіріс үшін массалар мен радиустар анықтама кітабынан қажет). Нәтижелерді кестеге жинап, салыстырмалы талдау жасаңыз. 2. Г. Кавендиш туралы хабарлама дайындаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Основные данные о планетах Солнечной системы",
          "en": "Basic data about the planets of the Solar System",
          "kk": "Күн жүйесінің планеталары туралы негізгі мәліметтер"
        },
        "url": "https://physics-engineers.ru/media-resources/102c8582-0b87-4e33-b9d0-98e32de0e721"
      },
      {
        "label": {
          "ru": "Gravity Simulator",
          "en": "Gravity Simulator",
          "kk": "Гравитация симуляторы"
        },
        "url": "https://gravitysimulator.org/solar-system"
      },
      {
        "label": {
          "ru": "Генри Кавендиш: тот, кто взвесил Землю",
          "en": "Henry Cavendish: the one who weighed the Earth",
          "kk": "Генри Кавендиш: Жердің салмағын өлшеген адам"
        },
        "url": "https://elementy.ru/nauchno-populyarnaya_biblioteka/435329/Genri_Kavendish_tot_kto_vzvesil_Zemlyu"
      },
      {
        "label": {
          "ru": "Симулятор: гравитационные поля Солнечной системы (вариант)",
          "en": "Simulator: gravitational fields of the Solar System (variant)",
          "kk": "Симулятор: Күн жүйесінің гравитациялық өрістері (нұсқа)"
        },
        "url": "https://share.gemini.google/5fNn0sVB5qBd"
      }
    ]
  },
  "p18": {
    "title": {
      "ru": "Эксперимент: вес в движущемся лифте",
      "en": "Experiment: weight in a moving elevator",
      "kk": "Эксперимент: қозғалыстағы лифттегі салмақ"
    },
    "description": {
      "ru": "Используя напольные весы, определите свой вес в момент начала движения лифта, в период его подъёма и в момент торможения. Аналогичные замеры сделайте при спуске. По результатам определите перегрузку и ускорение лифта; выясните, на каком участке движение равномерное.",
      "en": "Using a floor scale, determine your weight at the moment the elevator starts moving, during its ascent, and at the moment it stops. Perform similar measurements during descent. Based on the results, determine the overload and acceleration of the elevator; find out on which sections the motion is uniform.",
      "kk": "Палата таразыларын пайдаланып, лифтің қозғалыс басталғандағы, көтеріліс кезеңіндегі және тежелу кезіндегі салмағыңызды анықтаңыз. Ұқсас өлшемдерді төмен түсуде де жасаңыз. Нәтижелер бойынша лифтің жүктемесін және үдеуін анықтаңыз; қозғалыстың қай бөлігінде біркелкі екенін анықтаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Вес тела в ускоряющемся лифте",
          "en": "Weight of a body in an accelerating elevator",
          "kk": "Жылдамдайтын лифттегі дененің салмағы"
        },
        "url": "https://dzen.ru/a/aOSIpaU3wFycD-7Z"
      },
      {
        "label": {
          "ru": "Видео: как найти вес тела в лифте",
          "en": "Video: how to find the body weight in an elevator",
          "kk": "Бейне: лифттегі дене салмағын қалай табуға болады"
        },
        "url": "https://rutube.ru/video/eea10d6078e34cb05b79bda7d6d1d108/?r=wd"
      }
    ]
  },
  "p21": {
    "title": {
      "ru": "Эксперимент: реактивный двигатель на игрушечной машине",
      "en": "Experiment: jet engine on a toy car",
      "kk": "Эксперимент: ойыншық автокөліктегі реактивті қозғалтқыш"
    },
    "description": {
      "ru": "Сконструируйте реактивный двигатель, действующий на воздушной или водяной струе. Испытайте его, закрепив на игрушечной машине.",
      "en": "Construct a jet engine that acts on an air or water stream. Test it by fixing it on a toy car.",
      "kk": "Ауалы немесе су ағысына әсер ететін реактивті қозғалтқышты құрастырыңыз. Оны ойыншық машинаның үстіне бекітіп сынап көріңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Реактивный двигатель на машинке (симулятор)",
          "en": "Jet engine on a small machine (simulator)",
          "kk": "Машинкaдағы реактивті қозғалтқыш (симулятор)"
        },
        "url": "https://share.gemini.google/nmC3N9jwMt8p"
      },
      {
        "label": {
          "ru": "Реактивный двигатель в домашних условиях (видео)",
          "en": "Jet engine at home (video)",
          "kk": "Үй жағдайында реактивті қозғалтқыш (видео)"
        },
        "url": "https://vkvideo.ru/video-59108158_456241764"
      }
    ]
  },
  "p22": {
    "title": {
      "ru": "Эксперимент: работа при тяге санок под углом",
      "en": "Experiment: work when pulling a sled at an angle",
      "kk": "Эксперимент: шананы көлбеу бұрышта сүйреу жұмысы"
    },
    "description": {
      "ru": "Исследуйте зависимость силы трения от угла между направлением силы, приложенной к санкам, и перемещением. Как изменение угла наклона влияет на работу, совершённую при перемещении санок на одно и то же расстояние?",
      "en": "Investigate the dependence of friction force on the angle between the direction of the force applied to the sled and the movement. How does changing the angle of inclination affect the work done when moving the sled the same distance?",
      "kk": "Шанамен қозғалатын күш бағыты мен орын ауыстыру арасындағы бұрышқа байланысты үйкеліс күшін зерттеңіз. Бұрыштың өзгеруі бірдей қашықтыққа шананы жылжыту кезінде атқарылатын жұмысқа қалай әсер етеді?"
    },
    "links": [
      {
        "label": {
          "ru": "Симулятор: сила трения и работа при тяге под углом",
          "en": "Simulator: force of friction and work when pulling at an angle",
          "kk": "Симулятор: тарту кезіндегі үйкеліс күші мен жұмыс"
        },
        "url": "https://share.gemini.google/1fYDl4QB3xoZ"
      }
    ]
  },
  "p24": {
    "title": {
      "ru": "Эксперимент: период колебаний качелей",
      "en": "Experiment: swing oscillation period",
      "kk": "Эксперимент: арқанның тербелу кезеңі"
    },
    "description": {
      "ru": "Определите период колебаний качелей, находящихся во дворе вашего дома. Исследуйте, зависит ли амплитуда колебаний от массы тела.",
      "en": "Determine the period of oscillation of the swings located in your yard. Investigate whether the amplitude of oscillation depends on body mass.",
      "kk": "Үйіңіздің ауласындағы арбақтардың тербеліс периодын анықтаңыз. Тербеліс амплитудасының дене массасына байланысты екенін зерттеңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Величины, характеризующие колебательное движение",
          "en": "Quantities characterizing oscillatory motion",
          "kk": "Діріл қозғалысты сипаттайтын шамалар"
        },
        "url": "https://lc.rt.ru/classbook/fizika-9-klass/mehanicheskie-kolebaniya-i-volny-zvuk-863/5838"
      },
      {
        "label": {
          "ru": "Симулятор: колебания качелей",
          "en": "Simulator: oscillations of a swing",
          "kk": "Симулятор: әткеншектердің дірілі"
        },
        "url": "https://share.gemini.google/vtGwEveIEB7J"
      }
    ]
  },
  "p25": {
    "title": {
      "ru": "Эксперимент: максимальная скорость качелей",
      "en": "Experiment: maximum swing speed",
      "kk": "Эксперимент: ең жоғары аулақтық жылдамдық"
    },
    "description": {
      "ru": "Определите максимальную скорость качелей, находящихся во дворе вашего дома. Выполните измерение необходимых для этого величин (высоту подъёма используйте для расчёта по закону сохранения энергии).",
      "en": "Determine the maximum speed of the swings located in your yard. Measure the necessary quantities for this (use the height of the lift for calculation according to the law of conservation of energy).",
      "kk": "Үйіңіздің ауласындағы арбақтардың максималды жылдамдығын анықтаңыз. Бұны жасау үшін қажетті шамаларды өлшеңіз (жоғары көтерілу биіктігін энергияның сақталу заңы бойынша есептеуде пайдаланыңыз)."
    },
    "links": [
      {
        "label": {
          "ru": "Симулятор: максимальная скорость качелей",
          "en": "Simulator: maximum speed of the swing",
          "kk": "Симулятор: әткеншектің максималды жылдамдығы"
        },
        "url": "https://share.gemini.google/cvlu8NtNe54u"
      },
      {
        "label": {
          "ru": "Wave Simulation",
          "en": "Wave Simulation",
          "kk": "Толқын симуляциясы"
        },
        "url": "https://sim.physicslens.com/wave-graph/"
      }
    ]
  },
  "p26": {
    "title": {
      "ru": "Эксперимент: магнитный маятник",
      "en": "Experiment: magnetic pendulum",
      "kk": "Эксперимент: магнитті маятник"
    },
    "description": {
      "ru": "1. Привяжите кусок железа, обладающего магнитными свойствами, к нити. Определите период колебаний полученного маятника. 2. Повторите измерение периода, расположив под маятником металлический лист. Сделайте вывод о влиянии торможения.",
      "en": "1. Tie a piece of iron with magnetic properties to a thread. Determine the period of oscillation of the resulting pendulum. 2. Repeat the measurement with a metal sheet placed beneath the pendulum. Draw a conclusion about the effect of damping.",
      "kk": "1. Магниттік қасиеті бар темір бөлігін жіпке байлаңыз. Шыққан маятниктің тербеліс периодын анықтаңыз. 2. Маятниктің астына металл пластина қойып, периодты қайта өлшеңіз. Тежелудің әсері туралы қорытынды жасаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Магнитный маятник и металлическая пластина",
          "en": "Magnetic pendulum and metal plate",
          "kk": "Магниттік маятник және металл пластина"
        },
        "url": "https://share.gemini.google/6HDqpfliKImh"
      },
      {
        "label": {
          "ru": "Интерактивный рабочий лист: магнитный маятник",
          "en": "Interactive worksheet: magnetic pendulum",
          "kk": "Интерактивті жұмыс парағы: магниттік сермелгі"
        },
        "url": "https://share.gemini.google/CGWqQhdmanj6"
      }
    ]
  },
  "p29": {
    "title": {
      "ru": "Эксперимент: волны на поверхности воды",
      "en": "Experiment: waves on the water surface",
      "kk": "Эксперимент: судың бетінде толқындар"
    },
    "description": {
      "ru": "Понаблюдайте и выясните причины возникновения волн на поверхности воды в ёмкостях и естественных водоёмах.",
      "en": "Observe and find out the causes of wave formation on the surface of water in containers and natural bodies of water.",
      "kk": "Құмыралар мен табиғи су айдындарында судың бетінде толқындардың пайда болу себептерін байқаңыз және анықтаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Волны: что нужно знать об одном из самых величественных явлений природы",
          "en": "Waves: what you need to know about one of the most magnificent phenomena of nature",
          "kk": "Толқындар: табиғаттағы ең керемет құбылыстардың бірі туралы не білу керек"
        },
        "url": "https://www.sportmaster.ru/media/articles/volny-chto-nuzhno-znat-ob-odnom-iz-samyh-velichestvennyh-yavlenij-prirody/"
      },
      {
        "label": {
          "ru": "Как возникают волны",
          "en": "How waves are formed",
          "kk": "Толқындар қалай пайда болады"
        },
        "url": "https://externat.foxford.ru/polezno-znat/wiki-kak-voznikayut-volny"
      }
    ]
  },
  "p30": {
    "title": {
      "ru": "Эксперимент: музыкальные бутылки",
      "en": "Experiment: musical bottles",
      "kk": "Эксперимент: музыкалық бөтелкелер"
    },
    "description": {
      "ru": "Поставьте несколько пустых стеклянных бутылок в ряд и наливайте в них воду, увеличивая уровень в каждой следующей. Испытайте инструмент, ударяя по бутылкам ложкой. У какой бутылки высота тона выше? Объясните действие прибора.",
      "en": "Place several empty glass bottles in a row and pour water into them, increasing the level in each subsequent bottle. Test the instrument by hitting the bottles with a spoon. Which bottle has a higher pitch? Explain the operation of the device.",
      "kk": "Бірнеше бос шыны бөтелкені қатар қойып, оларға суды құйыңыз, әр келесі бөтелкенің деңгейін арттырыңыз. Бөтелкелерді қасықпен соғып қарап көріңіз. Қай бөтелкенің үні жоғары? Құрылғының әрекетін түсіндіріңіз."
    },
    "links": [
      {
        "label": {
          "ru": "Опыты со звуком для детей",
          "en": "Experiments with sound for children",
          "kk": "Балаларға арналған дыбыс тәжірибелері"
        },
        "url": "https://academy-of-curiosity.ru/eksperimenty-i-opyty/opyty-so-zvukom-dlya-detej/"
      },
      {
        "label": {
          "ru": "Музыкальные бутылки: акустика и частота звука",
          "en": "Musical bottles: acoustics and sound frequency",
          "kk": "Музыкалық бөтелкелер: акустика және дыбыс жиілігі"
        },
        "url": "https://share.gemini.google/gqWY9VkwqLmX"
      }
    ]
  },
  "p32": {
    "title": {
      "ru": "Эксперимент: светлый и тёмный сосуды",
      "en": "Experiment: light and dark vessels",
      "kk": "Эксперимент: ашық және қара ыдыстар"
    },
    "description": {
      "ru": "1. Налейте равное количество воды в светлый и тёмный сосуд и поставьте их под солнечные лучи. В каком сосуде температура воды станет выше через равный промежуток времени? 2. Налейте в сосуды горячую воду одной температуры. В каком сосуде вода охладится быстрее? Сделайте выводы.",
      "en": "1. Pour equal amounts of water into a light-coloured container and a dark-coloured container and place both in sunlight. In which container will the water temperature be higher after the same period of time? 2. Pour hot water of the same temperature into both containers. In which one will the water cool down faster? Draw your conclusions.",
      "kk": "1. Ашық түсті және қараңғы түсті екі ыдысқа бірдей мөлшерде су құйып, екеуін де күн сәулесінің астына қойыңыз. Бірдей уақыт аралығында қай ыдыстағы судың температурасы жоғары болады? 2. Екі ыдысқа бірдей температурадағы ыстық су құйыңыз. Қай ыдыстағы су тезірек суиды? Қорытынды жасаңыз."
    },
    "links": [
      {
        "label": {
          "ru": "Тепловое излучение: светлые и тёмные сосуды",
          "en": "Thermal radiation: light and dark vessels",
          "kk": "Жылулық сәулелену: ашық және қара ыдыстар"
        },
        "url": "https://share.gemini.google/PrY7478wuszf"
      },
      {
        "label": {
          "ru": "Разбор качественных задач по тепловым явлениям",
          "en": "Analysis of qualitative problems on thermal phenomena",
          "kk": "Ыстық құбылыстар бойынша сапалық есептерді талдау"
        },
        "url": "https://www.fizika-online.ru/?page_id=4831"
      }
    ]
  }
};
const LAB_INFO = {
  "lab1": {
    "title": {
      "ru": "Лабораторная работа № 1. Определение ускорения тела при равноускоренном движении",
      "en": "Laboratory Work No. 1. Determination of the acceleration of a body in uniformly accelerated motion",
      "kk": "Зертханалық жұмыс № 1. Бірқалыпты үдеумен қозғалыста дененің үдеуін анықтау"
    },
    "goal": {
      "ru": "Измерить ускорение, с которым шарик скатывается по наклонному желобу.",
      "en": "Measure the acceleration with which the ball rolls down the inclined groove.",
      "kk": "Доптың еңістелген жолақ бойымен төмен сырғу үдеуін өлшеу."
    },
    "equipment": {
      "ru": "Штатив с муфтой и лапкой, металлический желоб, шарик, цилиндрическое тело, измерительная лента, секундомер.",
      "en": "Tripod with clamp and holder, metal chute, ball, cylindrical body, measuring tape, stopwatch.",
      "kk": "Штатив муфтамен және аяғы бар, металл арна, шар, цилиндрлік дене, өлшейтін таспа, секундомер."
    },
    "steps": [
      {
        "ru": "Соберите установку; у основания желоба положите цилиндрическое тело.",
        "en": "Assemble the setup; place a cylindrical body at the base of the chute.",
        "kk": "Құрылғыны жинаңыз; арнаның түбіне цилиндрлі денені қойыңыз."
      },
      {
        "ru": "Пустите шарик по желобу и измерьте время его движения.",
        "en": "Roll a ball down a groove and measure the time of its motion.",
        "kk": "Шарды арнамен жіберіп, оның қозғалыс уақытын өлшеңіз."
      },
      {
        "ru": "Измерительной лентой определите расстояние от начального положения шарика до цилиндра.",
        "en": "Use a measuring tape to determine the distance from the initial position of the ball to the cylinder.",
        "kk": "Өлшеу лентасын пайдаланып, доптың бастапқы жағдайынан цилиндрге дейінгі қашықтықты анықтаңыз."
      },
      {
        "ru": "Повторите опыт 5 раз, не изменяя угла наклона желоба.",
        "en": "Repeat the experiment 5 times without changing the angle of the chute.",
        "kk": "Тәжірибені 5 рет қайталап, жолақтың бұрышын өзгертпеңіз."
      },
      {
        "ru": "Рассчитайте ускорение для каждого опыта и найдите среднее значение; оцените погрешности.",
        "en": "Calculate the acceleration for each experiment and find the average value; estimate the errors.",
        "kk": "Әр тәжірибе үшін үдеуді есептеп, орташа мәнін табыңыз; қателіктерді бағалаңыз."
      }
    ],
    "formulas": {
      "ru": [
        "s = at²/2 (υ₀ = 0)",
        "a = 2s/t²",
        "a_ср = (a₁+…+a₅)/5",
        "доп.: a = g·sinα"
      ],
      "en": [
        "s = at²/2 (υ₀ = 0)",
        "a = 2s/t²",
        "a_avg = (a₁+…+a₅)/5",
        "extra: a = g·sinα"
      ],
      "kk": [
        "s = at²/2 (υ₀ = 0)",
        "a = 2s/t²",
        "a_орт = (a₁+…+a₅)/5",
        "қосымша: a = g·sinα"
      ]
    },
    "questions": [
      {
        "ru": "Сделайте вывод о причине возникновения ускорения шарика, скатывающегося по желобу.",
        "en": "Draw a conclusion about the reason for the acceleration of the ball rolling down the chute.",
        "kk": "Желоб арқылы сырғанаған шардың үдеудің пайда болу себебі туралы қорытынды жасаңыз."
      },
      {
        "ru": "Сравните результат со значением a = g·sinα.",
        "en": "Compare the result with the value a = g·sinα.",
        "kk": "Нәтижені a = g·sinα мәнімен салыстырыңыз."
      }
    ],
    "links": [
      {
        "label": {
          "ru": "Физика 9 — ЛР «Исследование равноускоренного движения без начальной скорости» (видео)",
          "en": "Physics 9 — Lab Work \"Investigation of Uniformly Accelerated Motion Without Initial Velocity\" (video)",
          "kk": "Физика 9 — ЛР «Бастапқы жылдамсыз біркелкі үдемелі қозғалысты зерттеу» (видео)"
        },
        "url": "https://www.youtube.com/watch?v=-4KjGGWRGJM"
      },
      {
        "label": {
          "ru": "ЛР №1 «Определение ускорения тела…» (видео)",
          "en": "Lab Work №1 \"Determining the acceleration of a body…\" (video)",
          "kk": "ЛР №1 «Дененің үдеуін анықтау…» (видео)"
        },
        "url": "https://youtu.be/okRu_b-Oa0o?si=zW8OHn_O2X8qdb5U"
      }
    ]
  },
  "lab2": {
    "title": {
      "ru": "Лабораторная работа № 2. Изучение движения тела, брошенного горизонтально",
      "en": "Laboratory Work No. 2. Study of the motion of a body thrown horizontally",
      "kk": "Зертханалық жұмыс № 2. Көлденең түрде лақтырылған дененің қозғалысын зерттеу"
    },
    "goal": {
      "ru": "Определить начальную скорость тела, брошенного горизонтально.",
      "en": "Determine the initial velocity of a body thrown horizontally.",
      "kk": "Денені көлденеңінен тастағанда бастапқы жылдамдықты анықтау."
    },
    "equipment": {
      "ru": "Штатив, стальной шарик, лабораторный желоб, линейка, листы белой и копировальной бумаги.",
      "en": "Tripod, steel ball, laboratory chute, ruler, sheets of white and carbon paper.",
      "kk": "Штатив, болат шар, лабораториялық арна, сызық, ақ және көшірме қағаз беттері."
    },
    "steps": [
      {
        "ru": "Соберите установку: желоб закреплён горизонтально на штативе.",
        "en": "Assemble the setup: a chute is fixed horizontally on a stand.",
        "kk": "Құрылғыны жинаңыз: арна штативке көлденеңінен бекітілген."
      },
      {
        "ru": "Пустите шарик по желобу от зафиксированной на ней пластинки.",
        "en": "Roll a ball down a groove from a plate fixed on it.",
        "kk": "Шарды арнадағы бекітілген тақтадан жіберіңіз."
      },
      {
        "ru": "Измерьте высоту падения и дальность полёта.",
        "en": "Measure the fall height and flight distance.",
        "kk": "Түсу биіктігін және ұшу қашықтығын өлшеу."
      },
      {
        "ru": "Повторите опыт 5 раз, не изменяя уровень спуска шарика по желобу.",
        "en": "Repeat the experiment 5 times without changing the level from which the ball rolls down the chute.",
        "kk": "Тәжірибені 5 рет қайталап, шариктің жолақ бойынша түсу деңгейін өзгертпеңіз."
      },
      {
        "ru": "Рассчитайте начальную скорость и её среднее значение; оцените погрешности.",
        "en": "Calculate the initial velocity and its average value; estimate the errors.",
        "kk": "Бастапқы жылдамдықты және оның орташа мәнін есептеңіз; қателіктерді бағалаңыз."
      }
    ],
    "formulas": [
      "t = √(2h/g)",
      "υ₀ = l/t",
      "υ₀ = l·√(g/2h)"
    ],
    "questions": [
      {
        "ru": "Почему в проведённых опытах нельзя менять уровень, с которого шарик спускается по желобу?",
        "en": "Why is it not allowed to change the level from which the ball rolls down the chute in the conducted experiments?",
        "kk": "Неліктен жүргізілген тәжірибелерде шариктің жолақ бойынша түсу деңгейін өзгертуге болмайды?"
      }
    ],
    "links": [
      {
        "label": {
          "ru": "Измерение ускорения свободного падения (9 класс, видео)",
          "en": "Measuring the acceleration of free fall (9th grade, video)",
          "kk": "Бос түсу үдеуін өлшеу (9-сынып, видео)"
        },
        "url": "https://www.youtube.com/watch?v=WWbHN4Rmbjg"
      },
      {
        "label": {
          "ru": "Виртуальная лаборатория «Изучение движения тела, брошенного горизонтально»",
          "en": "Virtual laboratory \"Studying the motion of a body thrown horizontally\"",
          "kk": "Виртуалды лаборатория «Денені көлденең бағытта лақтырғандағы қозғалысты зерттеу»"
        },
        "url": "https://efizika.ru/html5/118/index.html"
      },
      {
        "label": {
          "ru": "ЛР 2 «Изучение движения тела, брошенного горизонтально» (видео)",
          "en": "Lab Work 2 \"Studying the motion of a body thrown horizontally\" (video)",
          "kk": "ЛР 2 «Тікелей лақтырылған дененің қозғалысын зерттеу» (видео)"
        },
        "url": "https://rutube.ru/video/3d7c406c8cc0b9edf3f12c1d73b7055f/?r=wd"
      }
    ]
  },
  "lab3": {
    "title": {
      "ru": "Лабораторная работа № 3. Определение ускорения свободного падения с использованием математического маятника",
      "en": "Laboratory Work No. 3. Determination of free fall acceleration using a mathematical pendulum",
      "kk": "Зертханалық жұмыс № 3. Математикалық серіппелі маятник қолдану арқылы еркін түсу үдеуін анықтау"
    },
    "goal": {
      "ru": "При помощи математического маятника определить ускорение свободного падения на Земле и сравнить его с истинным значением 9,8 м/с².",
      "en": "Using a mathematical pendulum, determine the acceleration due to gravity on Earth and compare it with the true value of 9.8 m/s².",
      "kk": "Математикалық маятник көмегімен Жердегі еркін түсу үдеуді анықтап, оны нақты мәні 9,8 м/с²-мен салыстырыңыз."
    },
    "equipment": {
      "ru": "Электронный секундомер (или часы с секундной стрелкой), измерительная лента, шарик на нити, штатив с муфтой и кольцом.",
      "en": "Electronic stopwatch (or clock with a second hand), measuring tape, ball on a string, stand with clamp and ring.",
      "kk": "Электрондық секундомер (немесе секундтық көрсеткісі бар сағат), өлшеу таспасы, жіптегі шар, муфталы және сақиналы штатив."
    },
    "steps": [
      {
        "ru": "Установите штатив на краю стола, укрепите кольцо и подвесьте шарик на нити (3–5 см от пола).",
        "en": "Set up the tripod at the edge of the table, secure the ring, and hang the ball on a string (3–5 cm from the floor).",
        "kk": "Триггерді үстел шетіне қойып, сақинаны бекітіңіз де, шарды жіпке тағыңыз (қабырғадан 3–5 см қашықтықта)."
      },
      {
        "ru": "Измерьте длину подвеса измерительной лентой.",
        "en": "Measure the suspension length with a measuring tape.",
        "kk": "Өлшеу лентасымен ілініс ұзындығын өлшеу."
      },
      {
        "ru": "Измерьте время 40 колебаний маятника.",
        "en": "Measure the time of 40 pendulum swings.",
        "kk": "Сермелгінің 40 тербелісін өлшеу."
      },
      {
        "ru": "Повторите опыт 5 раз, не изменяя условий опыта.",
        "en": "Repeat the experiment 5 times without changing the experimental conditions.",
        "kk": "Тәжірибені 5 рет қайталап, тәжірибенің жағдайларын өзгертпеңіз."
      },
      {
        "ru": "Вычислите ускорение свободного падения для каждого опыта и найдите среднее; оцените погрешности.",
        "en": "Calculate the acceleration of free fall for each experiment and find the average; estimate the errors.",
        "kk": "Әрбір тәжірибе үшін еркін түсу үдеуін есептеп, орташа мәнін табыңыз; қателіктерді бағалаңыз."
      }
    ],
    "formulas": [
      "T = 2π√(l/g)",
      "T = t/N",
      "g = 4π²l/T²"
    ],
    "questions": [
      {
        "ru": "Сравните полученное значение с истинным 9,8 м/с² и объясните расхождение.",
        "en": "Compare the obtained value with the true 9.8 m/s² and explain the discrepancy.",
        "kk": "Алынған мәнді шын 9,8 м/с² мәнімен салыстырып, айырмашылықты түсіндіріңіз."
      },
      {
        "ru": "Почему выгодно измерять время большого числа колебаний?",
        "en": "Why is it advantageous to measure the time of a large number of oscillations?",
        "kk": "Неліктен көптеген тербелістердің уақытын өлшеу тиімді?"
      }
    ],
    "links": [
      {
        "label": {
          "ru": "Зависимость периода маятника от его длины (видео)",
          "en": "Dependence of the pendulum period on its length (video)",
          "kk": "Маятниктің периоды оның ұзындығына байланысты (бейне)"
        },
        "url": "https://www.youtube.com/watch?v=CeOrX97vu48"
      },
      {
        "label": {
          "ru": "ЛР №3 «Определение ускорения свободного падения…» (видео)",
          "en": "Lab Work №3 \"Determining the acceleration due to gravity…\" (video)",
          "kk": "ЛР №3 «Еркін түсу үдеуін анықтау…» (видео)"
        },
        "url": "https://rutube.ru/video/66526bf3e0b1d7e77ac7ec96fef9a8d7/?r=wd"
      },
      {
        "label": {
          "ru": "Виртуальная лаборатория: определение g с помощью маятника",
          "en": "Virtual laboratory: determining g using a pendulum",
          "kk": "Виртуалды лаборатория: маятникті қолданып g-ні анықтау"
        },
        "url": "https://efizika.ru/html5/01/index.html"
      }
    ]
  },
  "lab4": {
    "title": {
      "ru": "Лабораторная работа № 4. Определение скорости распространения поверхностной волны",
      "en": "Laboratory Work No. 4. Determination of the speed of propagation of a surface wave",
      "kk": "Зертханалық жұмыс № 4. Жер бетінің толқынының таралу жылдамдығын анықтау"
    },
    "goal": {
      "ru": "Измерить скорость распространения волн на поверхности воды.",
      "en": "Measure the speed of wave propagation on the water surface.",
      "kk": "Судан бетіндегі толқындардың таралу жылдамдығын өлшеу."
    },
    "equipment": {
      "ru": "Кювета с водой, поплавок, секундомер, измерительная лента.",
      "en": "Cuvette with water, float, stopwatch, measuring tape.",
      "kk": "Суға толтырылған кювета, қалқыма, секундомер, өлшеу таспасы."
    },
    "steps": [
      {
        "ru": "Залейте кювету водой, опустите на край кюветы поплавок.",
        "en": "Fill the trough with water, lower a float onto the edge of the trough.",
        "kk": "Кюветаны сумен толтырыңыз, кювет шетіне қалқыманы қойыңыз."
      },
      {
        "ru": "Приведите поплавок в колебательное движение, погрузив его глубже в воду.",
        "en": "Set the float into oscillatory motion by submerging it deeper into the water.",
        "kk": "Суда қалқымалы затты тереңірек батыртып, оны тербеліс қозғалысына келтіріңіз."
      },
      {
        "ru": "Зафиксируйте время, за которое волна достигнет противоположного борта кюветы.",
        "en": "Record the time it takes for the wave to reach the opposite side of the trough.",
        "kk": "Толқын кюветтің қарама-қарсы жағына жететін уақытты тіркеңіз."
      },
      {
        "ru": "Повторите опыт 5 раз и занесите результаты в таблицу.",
        "en": "Repeat the experiment 5 times and record the results in a table.",
        "kk": "Тәжірибені 5 рет қайталап, нәтижелерді кестеге енгізіңіз."
      },
      {
        "ru": "Рассчитайте скорость волны, среднее значение и погрешности.",
        "en": "Calculate the wave velocity, its average value, and errors.",
        "kk": "Толқынның жылдамдығын, орташа мәнін және қателіктерін есептеңіз."
      }
    ],
    "formulas": {
      "ru": [
        "υ = l/t",
        "υ_ср = (υ₁+…+υ₅)/5"
      ],
      "en": [
        "υ = l/t",
        "υ_avg = (υ₁+…+υ₅)/5"
      ],
      "kk": [
        "υ = l/t",
        "υ_орт = (υ₁+…+υ₅)/5"
      ]
    },
    "questions": [
      {
        "ru": "Какие условия нужно создать для повышения точности измерения?",
        "en": "What conditions need to be created to increase measurement accuracy?",
        "kk": "Өлшеу дәлдігін арттыру үшін қандай жағдай жасау керек?"
      }
    ],
    "links": [
      {
        "label": {
          "ru": "Изучение треков заряженных частиц (видео)",
          "en": "Studying the tracks of charged particles (video)",
          "kk": "Зарядталған бөлшектердің жолын зерттеу (видео)"
        },
        "url": "https://www.youtube.com/watch?v=0huk-cFIUGw"
      },
      {
        "label": {
          "ru": "ЛР №4 «Определение скорости распространения поверхностных волн» (видео)",
          "en": "Lab No. 4 \"Determination of the speed of propagation of surface waves\" (video)",
          "kk": "ЛР №4 «Жер бетінің толқынының таралу жылдамдығын анықтау» (видео)"
        },
        "url": "https://rutube.ru/video/9e4d43ae01a5a37f30123007033a1bbd/?r=wd"
      },
      {
        "label": {
          "ru": "Теория по механическим волнам (конспект)",
          "en": "Theory on mechanical waves (summary)",
          "kk": "Механикалық толқындар теориясы (конспект)"
        },
        "url": "https://fizclass.ru/wp-content/uploads/2015/08/%D0%9C%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BD%D1%8B.pdf"
      }
    ]
  }
};
const CONSPECT = {
  "p1": {
    "title": "§1. Механическое движение",
    "titleEn": "§1. Mechanical motion",
    "titleKk": "§1. Механикалық қозғалыс",
    "ru": "## Кинематика и механическое движение\n• Механическое движение — изменение положения тела в пространстве относительно других тел с течением времени.\n• Кинематика — раздел механики, в котором движение изучается без выяснения его причин.\n• Материальная точка — тело, формой и размерами которого в данной задаче можно пренебречь.\n• Система отсчёта: тело отсчёта + система координат + часы.\n## Относительность движения\n• Скорость тела зависит от выбора системы отсчёта.\n> υ = υ_пер + υ_отн (теорема сложения скоростей)\n• Переносная скорость — скорость подвижной системы отсчёта; относительная — скорость тела в этой системе.\n## Практика\n• Координата тела зависит от точки отсчёта, вида движения, скорости и времени.",
    "en": "## Kinematics and Mechanical Motion\n• Mechanical motion is the change in the position of a body in space relative to other bodies over time.\n• Kinematics is a branch of mechanics in which motion is studied without determining its causes.\n• Material point is a body whose shape and size can be neglected in the given problem.\n• Frame of reference: reference body + coordinate system + clock.\n## Relativity of Motion\n• The speed of a body depends on the choice of the frame of reference.\n> υ = υ_trans + υ_rel (theorem of velocity addition)\n• Transport velocity is the velocity of a moving reference system; relative velocity is the velocity of a body in this system.\n## Practice\n• The coordinate of a body depends on the reference point, type of motion, velocity, and time.",
    "kk": "## Кинематика және механикалық қозғалыс\n• Механикалық қозғалыс — дененің уақыт өте келе басқа денелерге қатысты кеңістіктегі орнының өзгеруі.\n• Кинематика — қозғалысты оның себептерін анықтамай оқытатын механиканың саласы.\n• Материалдық нүкте — пішіні мен өлшемдері аталған тапсырмада еленбейтін дене.\n• Есептеу жүйесі: есептегіш дене + координаталар жүйесі + сағат.\n## Қозғалыстың салыстырмалылығы\n• Дененің жылдамдығы есептеу жүйесін таңдауға байланысты.\n> υ = υ_пер + υ_отн (жылдамдықтарды қосу теоремасы)\n• Жылжымалы жылдамдық — қозғалмалы есептеу жүйесінің жылдамдығы; салыстырмалы — дененің осы жүйедегі жылдамдығы.\n## Практика\n• Дененің координатасы есептеу нүктесіне, қозғалыс түріне, жылдамдыққа және уақытқа байланысты."
  },
  "p2": {
    "title": "§2. Векторы и действия над ними",
    "titleEn": "§2. Vectors and operations on them",
    "titleKk": "§2. Векторлар және олармен әрекеттер",
    "ru": "## Векторы и действия над ними\n• Векторные величины имеют числовое значение и направление; складывать их алгебраически нельзя.\n• Правила сложения: треугольника, параллелограмма, многоугольника.\n• Коллинеарные векторы лежат на одной прямой или параллельных прямых.\n## Проекция вектора\n• Проекция вектора на ось — отрезок между проекциями начала и конца вектора.\n• Проекция положительна, если вектор направлен вдоль оси, отрицательна — против, равна нулю — если вектор перпендикулярен оси.\n## Пример (§2)\n• Чабан прошёл 4 км на север и 3 км на восток: перемещение по теореме Пифагора\n> s = √(s₁² + s₂²) = √(16+9) = 5 км",
    "en": "## Vectors and operations on them\n• Vector quantities have a numerical value and direction; they cannot be added algebraically.\n• Addition rules: triangle, parallelogram, polygon.\n• Collinear vectors lie on the same line or on parallel lines.\n## Vector projection\n• The projection of a vector onto an axis is the segment between the projections of the start and end of the vector.\n• The projection is positive if the vector is directed along the axis, negative if against, zero if the vector is perpendicular to the axis.\n## Example (§2)\n• The shepherd walked 4 km north and 3 km east: displacement according to the Pythagorean theorem\n> s = √(s₁² + s₂²) = √(16+9) = 5 km",
    "kk": "## Векторлар және олармен әрекеттер\n• Векторлық шамалар сандық мәнге және бағытқа ие; оларды алгебралық жолмен қосуға болмайды.\n• Қосу ережелері: үшбұрыш, параллелограмм, көпбұрыш.\n• Коллинеарлық векторлар бір сызықта немесе параллель сызықтарда жатады.\n## Вектор проекциясы\n• Векторды оське проекциялау — вектордың басы мен соңының проекциялары арасындағы кесінді.\n• Проекция оң болады, егер вектор ось бойымен бағытталған болса, теріс — қарсы бағытта, нөлге тең — егер вектор оське перпендикуляр болса.\n## Мысал (§2)\n• Шопан солтүстікке 4 км, шығысқа 3 км жүрді: Пифагор теоремасы бойынша орын ауыстыру\n> s = √(s₁² + s₂²) = √(16+9) = 5 км"
  },
  "p3": {
    "title": "§3. Равнопеременное движение, ускорение",
    "titleEn": "§3. Uniformly variable motion, acceleration",
    "titleKk": "§3. Тең үдемелі қозғалыс, үдеу",
    "ru": "## Равнопеременное движение. Ускорение\n• Равнопеременное движение — скорость за любые равные промежутки времени изменяется на одно и то же значение.\n• Мгновенная скорость — скорость в данный момент времени: υ = Δs/Δt при Δt → 0.\n• Ускорение — изменение скорости за единицу времени:\n> a = (υ − υ₀)/t,  [a] = м/с²\n• Если a направлено вдоль υ — движение равноускоренное, против υ — равнозамедленное.\n## Графики\n• Площадь под графиком υ(t) равна пройденному пути.\n• Средняя скорость: υ_ср = (s₁ + s₂ + …)/(t₁ + t₂ + …).",
    "en": "## Uniformly Accelerated Motion. Acceleration\n• Uniformly accelerated motion — the velocity changes by the same amount for any equal time intervals.\n• Instantaneous velocity — the velocity at a given moment in time: υ = Δs/Δt as Δt → 0.\n• Acceleration — the change in velocity per unit of time:\n> a = (υ − υ₀)/t, [a] = m/s²\n• If a is directed along υ — the motion is uniformly accelerated; opposite to υ — uniformly decelerated.\n## Graphs\n• The area under the υ(t) graph equals the distance traveled.\n• Average velocity: υ_avg = (s₁ + s₂ + …)/(t₁ + t₂ + …).",
    "kk": "## Бірқалыпты үдеумен қозғалыс. Үдеу\n• Бірқалыпты үдеумен қозғалыс — кез келген тең уақыт аралығында жылдамдық бірдей мәнге өзгереді.\n• Лезде жылдамдық — белгілі бір сәттегі жылдамдық: υ = Δs/Δt, Δt → 0 болғанда.\n• Үдеу — уақыт бірлігіне жылдамдықтың өзгеруі:\n> a = (υ − υ₀)/t,  [a] = м/с²\n• Егер a υ бойымен бағытталған болса — қозғалыс бірқалыпты үдемелі, υ-ге қарсы бағытталған болса — бірқалыпты тежелген.\n## Графиктер\n• υ(t) графигінің астындағы аудан жүрген жолға тең.\n• Орташа жылдамдық: υ_ср = (s₁ + s₂ + …)/(t₁ + t₂ + …)."
  },
  "p4": {
    "title": "§4. Скорость и перемещение при равноускоренном движении",
    "titleEn": "§4. Speed and displacement in uniformly accelerated motion",
    "titleKk": "§4. Тең үдеумен қозғалыста жылдамдық пен орын ауыстыру",
    "ru": "## Скорость и перемещение при равноускоренном движении\n• Основная задача кинематики — найти положение тела в любой момент времени.\n> υₓ = υ₀ₓ + aₓt\n> sₓ = υ₀ₓt + aₓt²/2\n> x = x₀ + υ₀ₓt + aₓt²/2\n• При равноускоренном движении aₓ > 0 (вдоль оси), при равнозамедленном — aₓ < 0.\n• График υ(t) — прямая; график s(t) и x(t) — парабола.\n• Перемещение равно площади фигуры под графиком υ(t).",
    "en": "## Speed and displacement in uniformly accelerated motion\n• The main task of kinematics is to find the position of a body at any moment in time.\n> υₓ = υ₀ₓ + aₓt\n> sₓ = υ₀ₓt + aₓt²/2\n> x = x₀ + υ₀ₓt + aₓt²/2\n• In uniformly accelerated motion aₓ > 0 (along the axis), in uniformly decelerated motion — aₓ < 0.\n• The graph of υ(t) is a straight line; the graph of s(t) and x(t) is a parabola.\n• Displacement is equal to the area of the figure under the υ(t) graph.",
    "kk": "## Тұрақты үдеумен қозғалыс кезінде жылдамдық пен орын ауыстыру\n• Кинематикадағы негізгі міндет — дененің кез келген уақыт сәтіндегі орнын табу.\n> υₓ = υ₀ₓ + aₓt\n> sₓ = υ₀ₓt + aₓt²/2\n> x = x₀ + υ₀ₓt + aₓt²/2\n• Тұрақты үдеумен қозғалыста aₓ > 0 (тық осінің бойымен), біркелкі баяулау кезінде — aₓ < 0.\n• υ(t) графигі — тік сызық; s(t) және x(t) графигі — парабола.\n• Орын ауыстыру υ(t) графигінің астындағы фигураның ауданына тең."
  },
  "p5": {
    "title": "§5. Свободное падение тел",
    "titleEn": "§5. Free fall of bodies",
    "titleKk": "§5. Денелердің еркін түсуі",
    "ru": "## Свободное падение тел\n• Свободное падение — движение тел в безвоздушном пространстве под действием силы тяжести.\n• Галилей опроверг Аристотеля: в отсутствии воздуха все тела падают одинаково.\n• Перемещения за последовательные секунды относятся как 1 : 3 : 5 : …\n> g ≈ 9,8 м/с² (направлено вертикально вниз)\n> υ = gt;  h = gt²/2\n## Практика\n• В воздухе падение замедляется сопротивлением: лист бумаги падает дольше смятого шарика.\n• Парашютист спускается равномерно, когда сопротивление воздуха уравновешивает силу тяжести.",
    "en": "## Free Fall of Bodies\n• Free fall is the motion of bodies in a vacuum under the action of gravity.\n• Galileo refuted Aristotle: in the absence of air, all bodies fall the same way.\n• Displacements over successive seconds are in the ratio 1 : 3 : 5 : …\n> g ≈ 9.8 m/s² (directed vertically downward)\n> υ = gt;  h = gt²/2\n## Practice\n• In air, falling is slowed by resistance: a sheet of paper falls longer than a crumpled ball.\n• A parachutist descends uniformly when air resistance balances the force of gravity.",
    "kk": "## Денелердің еркін түсуі\n• Еркін түсу — ауа жоқ кеңістікте денелердің тартылыс күші әсерінен қозғалысы.\n• Галилей Аристотельді теріскен етті: ауа жоқ болса, барлық денелер бірдей жылдамдықпен құлайды.\n• Кезекті секундтардағы орын ауыстырулар 1 : 3 : 5 : … қатынасында болады.\n> g ≈ 9,8 м/с² (тік төмен бағытталған)\n> υ = gt;  h = gt²/2\n## Практика\n• Ауада түсу қарсылықпен баяулайды: қағаз парағы қысылған шардан ұзақ уақыт құлайды.\n• Парашютші тұрақты түрде төмендейді, егер ауа қарсылығы тартылыс күшін теңестірсе."
  },
  "p6": {
    "title": "§6. Криволинейное движение. Движение по окружности",
    "titleEn": "§6. Curvilinear motion. Circular motion",
    "titleKk": "§6. Қисық сызықты қозғалыс. Шеңбер бойымен қозғалыс",
    "ru": "## Движение по окружности\n• Криволинейное движение — траектория является кривой линией.\n• Период T — время одного полного оборота; частота ν — число оборотов в единицу времени: ν = 1/T, [ν] = Гц.\n• Угловое перемещение φ — угол поворота радиуса.\n• Угловая скорость: ω = φ/t = 2π/T = 2πν, [ω] = рад/с.\n• Линейная скорость направлена по касательной:\n> υ = 2πR/T = ωR\n• Движение по окружности с постоянной по модулю скоростью называют равномерным движением по окружности.",
    "en": "## Circular Motion\n• Curvilinear motion — the trajectory is a curved line.\n• Period T — the time of one complete revolution; frequency ν — the number of revolutions per unit of time: ν = 1/T, [ν] = Hz.\n• Angular displacement φ — the angle of rotation of the radius.\n• Angular velocity: ω = φ/t = 2π/T = 2πν, [ω] = rad/s.\n• Linear velocity is directed along the tangent:\n> υ = 2πR/T = ωR\n• Motion along a circle with a constant speed magnitude is called uniform circular motion.",
    "kk": "## Дөңгелек бойымен қозғалыс\n• Қисық сызықты қозғалыс — траекториясы қисық сызық болып табылады.\n• Период T — бір толық айналымға кеткен уақыт; жиілік ν — бірліктік уақытта айналым саны: ν = 1/T, [ν] = Гц.\n• Бұрыштық орын ауыстыру φ — радиустың бұрылу бұрышы.\n• Бұрыштық жылдамдық: ω = φ/t = 2π/T = 2πν, [ω] = рад/с.\n• Сызықтық жылдамдық жанамаға бағытталған:\n> υ = 2πR/T = ωR\n• Модуль бойынша тұрақты жылдамдықпен қозғалысты тең жылдамдықпен дөңгелек бойымен қозғалыс деп атайды."
  },
  "p7": {
    "title": "§7. Центростремительное ускорение",
    "titleEn": "§7. Centripetal acceleration",
    "titleKk": "§7. Центрге тартқыш үдеу",
    "ru": "## Центростремительное ускорение\n• При равномерном движении по окружности скорость меняет направление — значит, есть ускорение.\n• Оно направлено к центру окружности, поэтому называется центростремительным:\n> a = υ²/R = ω²R = 4π²R/T²\n## Практика\n• Грязь с колеса летит по касательной в момент отрыва.\n• Центростремительное ускорение создаётся силой (трение шин о дорогу на повороте, натяжение нити у шарика).",
    "en": "## Centripetal Acceleration\n• In uniform circular motion, the velocity changes direction — which means there is acceleration.\n• It is directed toward the center of the circle, therefore it is called centripetal:\n> a = υ²/R = ω²R = 4π²R/T²\n## Practice\n• Mud from the wheel flies off tangentially at the moment of detachment.\n• Centripetal acceleration is created by a force (friction of the tires on the road during a turn, tension of the string on a ball).",
    "kk": "## Орталыққа тартылатын үдеу\n• Шеңбер бойымен бірқалыпты қозғалыста жылдамдық бағытын өзгертеді — демек, үдеу болады.\n• Ол шеңбердің орталығына бағытталған, сондықтан орталыққа тартылатын деп аталады:\n> a = υ²/R = ω²R = 4π²R/T²\n## Практика\n• Дөңгелектен кір бөлшектері жанасу сәтінде жанама бағытта ұшып кетеді.\n• Орталыққа тартылатын үдеу күшпен жасалады (бұрылыс кезінде шинаның жолға үйкелісі, шариктегі жіптің тартылуы)."
  },
  "p8": {
    "title": "§8. Звёздное небо",
    "titleEn": "§8. Starry Sky",
    "titleKk": "§8. Жұлдызды аспан",
    "ru": "## Звёздное небо\n• Вселенная — весь существующий материальный мир: планеты, звёзды, межзвёздное вещество, космические лучи.\n• Солнце — звезда галактики Млечный Путь, находится в 2,8·10⁴ св. лет от её центра.\n• Диаметр диска Галактики ≈ 10⁵ св. лет; в ней около 10¹² звёзд.\n> 1 св. год = 9,46·10¹⁵ м\n## Созвездия\n• Созвездие — участок небесной сферы со строго определёнными границами.\n• По решению МАС (1922) на небе 88 созвездий: 31 в Северном полушарии, 48 в Южном, 9 на экваторе.\n• Большую Медведицу казахи называли «Жеті қарақшы» (Семь разбойников).\n## Характеристики звёзд\n• Видимая звёздная величина — блеск с Земли; абсолютная М — блеск с расстояния 32,6 св. года.\n• Светимость — полная энергия, излучаемая звездой за единицу времени.",
    "en": "## Starry Sky\n• Universe — the entire existing material world: planets, stars, interstellar matter, cosmic rays.\n• Sun — a star of the Milky Way galaxy, located 2.8·10⁴ ly from its center.\n• Diameter of the Galaxy disk ≈ 10⁵ ly; it contains about 10¹² stars.\n> 1 ly = 9.46·10¹⁵ m\n## Constellations\n• Constellation — a section of the celestial sphere with strictly defined boundaries.\n• According to the IAU decision (1922), there are 88 constellations in the sky: 31 in the Northern Hemisphere, 48 in the Southern, 9 on the equator.\n• The Kazakhs called the Big Dipper “Zheti Karaqshy” (Seven Robbers).\n## Characteristics of Stars\n• Apparent magnitude — brightness from Earth; absolute M — brightness from a distance of 32.6 ly.\n• Luminosity — the total energy emitted by a star per unit of time.",
    "kk": "## Жұлдызды аспан\n• Ғалам — барша бар заттық әлем: планеталар, жұлдыздар, жұлдызаралық заттар, ғарыштық сәулелер.\n• Күн — Шоқжұлдыздар Млечный жол галактикасының жұлдызы, оның центрінен 2,8·10⁴ жарық жылы қашықтықта орналасқан.\n• Галактиканың дискісінің диаметрі ≈ 10⁵ жарық жылы; онда шамамен 10¹² жұлдыз бар.\n> 1 жарық жылы = 9,46·10¹⁵ м\n## Жұлдыздар жүйелері\n• Жұлдыздар жүйесі — аспан сферасының нақты шекарасы бар бөлімі.\n• Халықаралық астрономия одағының (1922) шешімі бойынша аспанда 88 жұлдыздар жүйесі бар: Солтүстік жарты шарда 31, Оңтүстік жарты шарда 48, экваторда 9.\n• Қазактар Үлкен Аюды «Жеті қарақшы» деп атаған.\n## Жұлдыздардың сипаттамалары\n• Көрінетін жұлдыздық өлшем — Жерден көрінетін жарықтылығы; абсолюттік М — 32,6 жарық жылы қашықтықтағы жарықтылығы.\n• Жарықтылық — жұлдыз бірлік уақыт ішінде шығаратын толық энергия."
  },
  "p9": {
    "title": "§9. Небесная сфера, системы небесных координат",
    "titleEn": "§9. Celestial sphere, celestial coordinate systems",
    "titleKk": "§9. Аспан сферасы, аспан координаталар жүйесі",
    "ru": "## Небесная сфера и координаты\n• Небесная сфера — воображаемая сфера, на которую проецируются все видимые небесные тела.\n• Ось мира — ось вращения небесной сферы; Северный полюс мира — вблизи Полярной звезды.\n• Зенит и надир — точки пересечения отвесной линии со сферой; между ними — небесный меридиан.\n• Небесный экватор — линия пересечения плоскости экватора Земли со сферой.\n## Координаты светил\n• Склонение δ — угловое расстояние звезды от небесного экватора вдоль круга склонения.\n• Прямое восхождение — угловое расстояние от точки весеннего равноденствия до круга склонения.\n• Высота светила — угловое расстояние от горизонта вдоль вертикала.\n## Практика\n• Подвижная карта звёздного неба (ПКЗН) позволяет определить координаты светил.",
    "en": "## Celestial Sphere and Coordinates\n• The celestial sphere is an imaginary sphere onto which all visible celestial bodies are projected.\n• The axis of the world is the axis of rotation of the celestial sphere; the North Pole of the world is near the Polaris.\n• Zenith and nadir are the points where the plumb line intersects the sphere; between them lies the celestial meridian.\n• The celestial equator is the line of intersection of the Earth's equatorial plane with the sphere.\n## Coordinates of Celestial Bodies\n• Declination δ is the angular distance of a star from the celestial equator along the declination circle.\n• Right ascension is the angular distance from the vernal equinox to the declination circle.\n• Altitude of a celestial body is the angular distance from the horizon along the vertical.\n## Practice\n• The movable star map (MSM) allows the determination of celestial bodies' coordinates.",
    "kk": "## Аспан сферасы және координаттар\n• Аспан сферасы — барлық көрінетін аспан денелері проекцияланатын ойдан шыққан сфера.\n• Ғалам осі — аспан сферасының айналу осі; Ғаламның Солтүстік полюсі — Солтүстік жұлдызға жақын орналасқан.\n• Зенит және надир — тік сызық сферамен қиылысатын нүктелер; олардың арасында — аспан меридианы.\n• Аспан экваторы — Жер экваторы жазықтығының сферамен қиылысы.\n## Жұлдыздардың координаттары\n• Қисықтық δ — жұлдыздың аспан экваторынан қисықтық шеңбері бойымен бұрыштық қашықтығы.\n• Тік көтеріліс — көктемгі күн теңізі нүктесінен қисықтық шеңберге дейінгі бұрыштық қашықтық.\n• Жұлдыз биіктігі — көлденеңінен бойымен вертикаль бойымен бұрыштық қашықтық.\n## Практика\n• Жұлдызды аспанның қозғалмалы картасы (ЖАК) жұлдыздардың координаттарын анықтауға мүмкіндік береді."
  },
  "p10": {
    "title": "§10. Видимое движение светил. Местное, поясное и всемирное время",
    "titleEn": "§10. Apparent motion of celestial bodies. Local, zone, and universal time",
    "titleKk": "§10. Аспан денелерінің көрінетін қозғалысы. Жергілікті, белдеулік және дүниежүзілік уақыт",
    "ru": "## Видимое движение светил. Время\n• Суточные движения светил — следствие вращения Земли вокруг оси.\n• Солнечные сутки — между двумя верхними кульминациями Солнца; звёздные — относительно звёзд.\n• Кульминация — прохождение светила через небесный меридиан.\n## Время\n• Местное время — одинаково во всех точках одного меридиана.\n• Всемирное время T₀ — местное время гринвичского меридиана.\n• Поясное время: 24 пояса по 15° долготы; разница соседних поясов — 1 час.\n## Практика\n• Широту местности определяют по высоте Полярной звезды.\n• Гномон помогает найти полуденную линию и истинный полдень.",
    "en": "## Apparent Motion of Celestial Bodies. Time\n• Daily motions of celestial bodies are a consequence of the Earth's rotation around its axis.\n• Solar day — between two upper culminations of the Sun; sidereal day — relative to the stars.\n• Culmination — the passage of a celestial body through the celestial meridian.\n## Time\n• Local time — the same at all points of one meridian.\n• Universal time T₀ — local time of the Greenwich meridian.\n• Time zones: 24 zones of 15° longitude each; the difference between adjacent zones is 1 hour.\n## Practice\n• The latitude of a place is determined by the altitude of the Pole Star.\n• A gnomon helps to find the noon line and the true noon.",
    "kk": "## Көрінетін аспан денелерінің қозғалысы. Уақыт\n• Күнделікті қозғалыстар аспан денелерінің Жердің өз осі айналасындағы айналуынан туындайды.\n• Күн сағаты — Күннің екі жоғарғы кульминациясы арасындағы уақыт; жұлдызды сағаттар — жұлдыздарға қатысты.\n• Кульминация — аспан денесінің аспан меридианын кесіп өтуі.\n## Уақыт\n• Жергілікті уақыт — бір меридиан бойындағы барлық нүктелерде бірдей.\n• Дүниежүзілік уақыт T₀ — Гринвич меридианының жергілікті уақыты.\n• Белдікті уақыт: 24 белдік, әрқайсысы 15° ұзындық; көршілес белдіктер арасындағы айырмашылық — 1 сағат.\n## Практика\n• Аумақтың енділігін Поляр жұлдыздың биіктігі арқылы анықтайды.\n• Гномон түскі сызықты және нақты түскі уақытты табуға көмектеседі."
  },
  "p11": {
    "title": "§11. Законы движения планет Солнечной системы",
    "titleEn": "§11. Laws of motion of the planets of the Solar System",
    "titleKk": "§11. Күн жүйесіндегі планеталардың қозғалыс заңдары",
    "ru": "## Законы движения планет\n• Геоцентрическая система Птолемея (Земля в центре) сменилась гелиоцентрической системой Коперника (Солнце в центре).\n• Коперник объяснил петлеобразное движение планет движением Земли и изложил систему в книге «О вращении небесных сфер».\n## Законы Кеплера\n• 1-й закон: планеты движутся по эллипсам, в одном из фокусов — Солнце.\n• Перигелий — ближайшая к Солнцу точка орбиты, афелий — самая удалённая.\n• Эксцентриситет e = c/a; при e = 0 орбита — окружность; самые вытянутые орбиты у Меркурия и Марса.\n• 2-й закон: радиус-вектор планеты за равные времена описывает равные площади.\n• 3-й закон: T²/a³ = const для всех планет.\n> 1 а.е. = 149 600 000 км ≈ 1,5·10⁸ км",
    "en": "## Laws of Planetary Motion\n• The geocentric system of Ptolemy (Earth at the center) was replaced by the heliocentric system of Copernicus (Sun at the center).\n• Copernicus explained the retrograde motion of planets by the movement of the Earth and presented the system in the book \"On the Revolutions of the Celestial Spheres\".\n## Kepler's Laws\n• 1st law: planets move in ellipses, with the Sun at one focus.\n• Perihelion is the closest point to the Sun in the orbit, aphelion is the farthest.\n• Eccentricity e = c/a; when e = 0 the orbit is a circle; the most elongated orbits are those of Mercury and Mars.\n• 2nd law: the radius vector of a planet sweeps out equal areas in equal times.\n• 3rd law: T²/a³ = const for all planets.\n> 1 AU = 149,600,000 km ≈ 1.5·10⁸ km",
    "kk": "## Планеталардың қозғалыс заңдары\n• Птолемейдің геоорталық жүйесі (Жер ортасында) Коперниктің гелиоорталық жүйесіне (Күн ортасында) ауысты.\n• Коперник планеталардың шеңберлі қозғалысын Жердің қозғалысы арқылы түсіндірді және жүйесін «Аспан сфераларының айналуы туралы» атты кітапта баяндады.\n## Кеплер заңдары\n• 1-заң: планеталар эллипс бойымен қозғалады, фокустың бірінде — Күн орналасқан.\n• Перигелий — орбитаның Күнге ең жақын нүктесі, афелий — ең алысы.\n• Эксцентриситет e = c/a; e = 0 болғанда орбита — шеңбер; Меркурий мен Марстың орбиталары ең созылған.\n• 2-заң: радиус-вектор планета тең уақыт аралығында тең аудандар сипаттайды.\n• 3-заң: T²/a³ = тұрақты барлық планеталар үшін.\n> 1 а.е. = 149 600 000 км ≈ 1,5·10⁸ км"
  },
  "p12": {
    "title": "§12. Определение расстояний в астрономии методом параллакса",
    "titleEn": "§12. Determining distances in astronomy by the parallax method",
    "titleKk": "§12. Астрономияда параллакс әдісімен қашықтықтарды анықтау",
    "ru": "## Метод параллакса\n• Параллактическое смещение: при взгляде с разных точек тело меняет положение на далёком фоне.\n• Базис — отрезок между точками наблюдения; параллакс p₀ — угол смещения.\n• Горизонтальный параллакс — угол, под которым с небесного тела виден радиус Земли.\n> D = R / sin p₀;  при малых углах D = 206265″·R / p₀″\n## Размеры тел\n• Радиус планеты: r = ρ·R/p₀, где ρ — угловой радиус планеты.\n## Величины\n• 206265″ — число угловых секунд в одном радиане.\n• Параллакс Луны 57′, Солнца 8,8″; чем больше параллакс, тем ближе тело.",
    "en": "## Parallax Method\n• Parallax shift: when viewed from different points, a body changes its position against a distant background.\n• Baseline — the segment between observation points; parallax p₀ — the angle of shift.\n• Horizontal parallax — the angle under which the radius of the Earth is seen from a celestial body.\n> D = R / sin p₀; for small angles D = 206265\"·R / p₀\"\n## Sizes of bodies\n• Planet radius: r = ρ·R/p₀, where ρ is the angular radius of the planet.\n## Quantities\n• 206265\" — number of arcseconds in one radian.\n• Parallax of the Moon 57′, of the Sun 8.8″; the greater the parallax, the closer the body.",
    "kk": "## Параллакс әдісі\n• Параллакс ығысуы: әртүрлі нүктеден қарағанда, дене алыс жерде орналасқан фонға қатысты өз орнын өзгертеді.\n• База — бақылау нүктелері арасындағы сегмент; параллакс p₀ — ығысу бұрышы.\n• Горизонталь параллакс — аспан денесінен Жер радиусы көрінетін бұрыш.\n> D = R / sin p₀; шағын бұрыштарда D = 206265″·R / p₀″\n## Денелердің өлшемдері\n• Планетаның радиусы: r = ρ·R/p₀, мұнда ρ — планетаның бұрыштық радиусы.\n## Сандық мәндер\n• 206265″ — бір радиандағы бұрыштық секундтар саны.\n• Айдың параллаксы 57′, Күннің 8,8″; параллакс неғұрлым үлкен болса, дене оған соғұрлым жақын."
  },
  "p13": {
    "title": "§13. Первый закон Ньютона. Инерциальные системы отсчёта",
    "titleEn": "§13. Newton's first law. Inertial frames of reference",
    "titleKk": "§13. Ньютонның бірінші заңы. Инерциялық санау жүйелері",
    "ru": "## Первый закон Ньютона. Инерция\n• Инертность — свойство тела сохранять свою скорость неизменной.\n• Инерция — явление сохранения скорости тела при отсутствии действия на него других тел.\n• Инерциальные системы отсчёта (ИСО) — системы, в которых закон инерции выполняется.\n• Системы, связанные с телами, движущимися с ускорением, — неинерциальные.\n• ИСО — модель, вводимая для упрощения решения задач; система, связанная с Землёй, ИСО приближённо.",
    "en": "## Newton's First Law. Inertia\n• Inertness is the property of a body to maintain its speed unchanged.\n• Inertia is the phenomenon of a body maintaining its speed in the absence of action by other bodies.\n• Inertial reference frames (IRF) are systems in which the law of inertia is fulfilled.\n• Systems associated with bodies moving with acceleration are non-inertial.\n• IRF is a model introduced to simplify problem solving; the system associated with the Earth is an approximate IRF.",
    "kk": "## Ньютонның бірінші заңы. Инерция\n• Инерттік — дененің жылдамдығын өзгеріссіз сақтау қасиеті.\n• Инерция — басқа денелердің әрекеті болмаған жағдайда, дененің жылдамдығын сақтау құбылысы.\n• Инерциялық есеп жүйелері (ИЕЖ) — инерция заңы орындалатын жүйелер.\n• Жылдамдықпен үдеумен қозғалып жатқан денелерге байланысты жүйелер — инерциялық емес.\n• ИЕЖ — есептерді шешуді жеңілдету үшін енгізілетін модель; Жерге байланысты жүйе, ИЕЖ жуықтап ала."
  },
  "p14": {
    "title": "§14. Силы в механике",
    "titleEn": "§14. Forces in mechanics",
    "titleKk": "§14. Механикадағы күштер",
    "ru": "## Силы в механике\n• Сила — векторная величина, мера взаимодействия тел; единица — ньютон (Н).\n• Сила тяжести — частный случай силы всемирного тяготения: F = mg.\n• Сила упругости: закон Гука F_упр = k·|x|; вес, реакция опоры, натяжение нити, сила Архимеда — проявления упругости.\n• Сила трения: скольжения, покоя, качения; F_тр = μN.\n## Практика\n• Коэффициент трения находят как μ = F_тр/N.",
    "en": "## Forces in Mechanics\n• Force — a vector quantity, a measure of the interaction of bodies; unit — newton (N).\n• Gravitational force — a special case of universal gravitation force: F = mg.\n• Elastic force: Hooke's law F_elastic = k·|x|; weight, support reaction, string tension, Archimedes' force — manifestations of elasticity.\n• Friction force: sliding, static, rolling; F_friction = μN.\n## Practice\n• The coefficient of friction is found as μ = F_friction / N.",
    "kk": "## Механикадағы күші\n• Күш — векторлық шама, денелердің өзара әрекеттесу өлшемі; бірлігі — ньютон (Н).\n• Гравитациялық күш — жалпы тартылыс күшінің бір түрі: F = mg.\n• Серпімділік күші: Гук заңы F_упр = k·|x|; салмақ, тірек реакциясы, жіптұтқыш күш, Архимед күші — серпімділіктің көріністері.\n• Тысырылу күші: сырғу, тыныштық, домалау; F_тр = μN.\n## Практика\n• Тысырылу коэффициенті мынадай есептеледі: μ = F_тр/N."
  },
  "p15": {
    "title": "§15. Второй закон Ньютона, масса",
    "titleEn": "§15. Newton's second law, mass",
    "titleKk": "§15. Ньютонның екінші заңы, масса",
    "ru": "## Второй закон Ньютона. Масса\n• Масса — мера инертности тела; единица — килограмм.\n• Основной закон динамики:\n> F = ma (точнее: ma = F₁ + F₂ + … — равнодействующая всех сил)\n• Ускорение направлено вдоль равнодействующей сил.\n• Импульсная форма: F·t = Δ(mυ) — второй закон Ньютона в импульсном виде.\n## Алгоритм решения задач\n1) силы на тело; 2) равнодействующая; 3) a = F/m; 4) кинематика по a.",
    "en": "## Newton's Second Law. Mass\n• Mass is a measure of a body's inertia; unit — kilogram.\n• Fundamental law of dynamics:\n> F = ma (more precisely: ma = F₁ + F₂ + … — the resultant of all forces)\n• Acceleration is directed along the resultant of the forces.\n• Impulse form: F·t = Δ(mv) — Newton's second law in impulse form.\n## Algorithm for solving problems\n1) forces on the body; 2) resultant; 3) a = F/m; 4) kinematics using a.",
    "kk": "## Ньютоның екінші заңы. Массa\n• Массa — дененің инерциясының өлшемі; бірлігі — килограмм.\n• Динамиканың негізгі заңы:\n> F = ma (дәл айтқанда: ma = F₁ + F₂ + … — барлы күштердің тең әсері)\n• Жылдамдық күштердің тең әсерінің бағыты бойынша бағытталады.\n• Импульстік форма: F·t = Δ(mυ) — Ньютоның екінші заңы импульстік формада.\n## Мәселелерді шешу алгоритмі\n1) денеге әсер ететін күштер; 2) тең әсер; 3) a = F/m; 4) a бойынша кинематика."
  },
  "p16": {
    "title": "§16. Третий закон Ньютона",
    "titleEn": "§16. Newton's third law",
    "titleKk": "§16. Ньютонның үшінші заңы",
    "ru": "## Третий закон Ньютона\n> F₁ = −F₂\n• Тела взаимодействуют с силами, равными по модулю и противоположными по направлению.\n• Силы взаимодействия одной природы, приложены к разным телам, действуют вдоль одной прямой.\n• Вес — сила, с которой тело давит на опору; сила реакции опоры — сила опоры, действующая на тело.\n• Внутренние силы — силы взаимодействия частей одного тела или системы связанных тел.",
    "en": "## Newton's Third Law\n> F₁ = −F₂\n• Bodies interact with forces that are equal in magnitude and opposite in direction.\n• Interaction forces of the same nature, applied to different bodies, act along the same line.\n• Weight is the force with which a body presses on a support; the reaction force of the support is the force exerted by the support on the body.\n• Internal forces are the forces of interaction between parts of a single body or a system of connected bodies.",
    "kk": "## Ньютонның үшінші заңы\n> F₁ = −F₂\n• Денелер өзара әрекеттескенде күштердің модулі тең және бағыттары қарама-қарсы болады.\n• Бір табиғаттағы әрекеттесу күштері әртүрлі денелерге қолданылады және бір түзу бойымен әрекет етеді.\n• Салмақ — дененің тірекке күшпен қысымы; тіректің реакция күші — тіректің денеге әсер ететін күші.\n• Ішкі күштер — бір дененің немесе байланысқан денелер жүйесінің бөліктерінің өзара әрекеттесу күштері."
  },
  "p17": {
    "title": "§17. Закон всемирного тяготения",
    "titleEn": "§17. Law of universal gravitation",
    "titleKk": "§17. Ғаламдық тартылу заңы",
    "ru": "## Закон всемирного тяготения\n> F = G·m₁m₂/R²,  G = 6,67·10⁻¹¹ Н·м²/кг²\n• Гравитационная постоянная — сила взаимодействия двух тел по 1 кг на расстоянии 1 м.\n• Закон открыт И. Ньютоном в 1687 г.; Г. Кавендиш измерил G («взвесил Землю»).\n• Ускорение Луны в 3600 = 60² раз меньше, чем у поверхности Земли, — сила убывает как 1/R².\n• Свободное падение тел и движение Луны, планет — проявление одной силы тяготения.",
    "en": "## Law of Universal Gravitation\n> F = G·m₁m₂/R²,  G = 6.67·10⁻¹¹ N·m²/kg²\n• Gravitational constant — the force of interaction between two bodies of 1 kg at a distance of 1 m.\n• The law was discovered by I. Newton in 1687; H. Cavendish measured G (\"weighed the Earth\").\n• The acceleration of the Moon is 3600 = 60² times less than that on the Earth's surface — the force decreases as 1/R².\n• Free fall of bodies and the motion of the Moon and planets are manifestations of the same gravitational force.",
    "kk": "## Дүниежүзілік тартылыс заңы\n> F = G·m₁m₂/R²,  G = 6,67·10⁻¹¹ Н·м²/кг²\n• Гравитациялық тұрақты — екі дененің 1 кг салмақта және 1 м қашықтықта әрекет ететін күші.\n• Заңды И. Ньютон 1687 жылы ашты; Г. Кавендиш G мәнін өлшеді («Жерді салмаққа тартты»).\n• Айдың үдеуі 3600 = 60² есе аз, жер бетіндегі үдеуден — күш 1/R² бойынша кемиді.\n• Денелердің еркін түсуі және Ай, планеталардың қозғалысы — бір тартылыс күшінің көрінісі."
  },
  "p18": {
    "title": "§18. Вес тела, невесомость",
    "titleEn": "§18. Body weight, weightlessness",
    "titleKk": "§18. Дененің салмағы, салмақсыздық",
    "ru": "## Вес тела. Невесомость\n• Вес тела — сила, с которой тело действует на опору или подвес вследствие притяжения к Земле.\n• Покоящееся тело: P = mg.\n• При ускорении опоры вверх: P = m(g + a); вниз: P = m(g − a).\n• Перегрузка — увеличение веса при ускоренном движении.\n• Невесомость — состояние, при котором вес тела равен нулю (свободное падение).",
    "en": "## Body Weight. Weightlessness\n• Body weight is the force with which a body acts on a support or suspension due to attraction to the Earth.\n• A resting body: P = mg.\n• When the support accelerates upward: P = m(g + a); downward: P = m(g − a).\n• Overload is an increase in weight during accelerated motion.\n• Weightlessness is a state in which the body’s weight is zero (free fall).",
    "kk": "## Дененің салмағы. Салмақсыздық\n• Дененің салмағы — дененің Жерге тартылу салдарынан тірекке немесе ілініске әрекет ететін күші.\n• Демеулі дене: P = mg.\n• Тірек жоғары қозғалған кезде: P = m(g + a); төмен қозғалған кезде: P = m(g − a).\n• Артық салмақ — үдеуі бар қозғалыс кезінде салмақтың артуы.\n• Салмақсыздық — дененің салмағы нөлге тең болатын жағдай (еркін түсу)."
  },
  "p19": {
    "title": "§19. Движение тела под действием силы тяжести. Спутники",
    "titleEn": "§19. Motion of a body under the influence of gravity. Satellites",
    "titleKk": "§19. Дененің ауырлық күшінің әрекетімен қозғалысы. Жасанды серіктер",
    "ru": "## Движение под действием силы тяжести. Спутники\n• Свободное падение по вертикали: υ = υ₀ ± gt; тело вверх — замедленно, вниз — ускоренно.\n• Брошенное горизонтально: по 0x равномерно, по 0y — с ускорением g.\n> l = υ₀t;  t = √(2h/g)\n• Брошенное под углом α: υ₀ₓ = υ₀cosα, υ₀ᵧ = υ₀sinα; наибольшая дальность при α = 45°.\n• Первая космическая скорость — скорость круговой орбиты у поверхности:\n> υ₁ = √(gR) ≈ 7,9 км/с\n• Спутники Земли — пример свободного падения тел с большой горизонтальной скоростью.",
    "en": "## Motion under the action of gravity. Satellites\n• Free fall vertically: υ = υ₀ ± gt; body moving upward — decelerated, downward — accelerated.\n• Thrown horizontally: along 0x uniformly, along 0y — with acceleration g.\n> l = υ₀t;  t = √(2h/g)\n• Thrown at an angle α: υ₀ₓ = υ₀cosα, υ₀ᵧ = υ₀sinα; maximum range at α = 45°.\n• First cosmic velocity — the velocity of a circular orbit at the surface:\n> υ₁ = √(gR) ≈ 7.9 km/s\n• Earth satellites are an example of free fall of bodies with a high horizontal velocity.",
    "kk": "## Тартылыс күшінің әсерінен қозғалыс. Жер серіктері\n• Тік бағытта еркін төу: υ = υ₀ ± gt; дене жоғары шыққанда — баяулайды, төменге — үдейді.\n• Деңгейлі қашықтыққа лақтырылған: 0x бойынша бірқалыпты, 0y бойынша g үдеуімен.\n> l = υ₀t;  t = √(2h/g)\n• α бұрышпен лақтырылған: υ₀ₓ = υ₀cosα, υ₀ᵧ = υ₀sinα; ең үлкен қашықтық α = 45° кезінде.\n• Бірінші космостық жылдамдық — беттің жанындағы дөңгелек орбита жылдамдығы:\n> υ₁ = √(gR) ≈ 7,9 км/с\n• Жер серіктері — үлкен көлденең жылдамдықпен денелердің еркін төуінің мысалы."
  },
  "p20": {
    "title": "§20. Импульс тела и импульс силы. Закон сохранения импульса",
    "titleEn": "§20. Momentum of a body and momentum of a force. Law of conservation of momentum",
    "titleKk": "§20. Дененің импульсі және күш импульсі. Импульстің сақталу заңы",
    "ru": "## Импульс. Закон сохранения импульса\n• Импульс тела (количество движения) — произведение массы на скорость:\n> p = mυ,  [p] = кг·м/с\n• Импульс силы — произведение силы на время её действия:\n> F·t,  [F·t] = Н·с\n• Второй закон Ньютона в импульсном виде: F·t = Δ(mυ).\n• Замкнутая система — система тел, на которую не действуют внешние силы.\n• Закон сохранения импульса: в замкнутой системе суммарный импульс тел сохраняется:\n> m₁υ₁ + m₂υ₂ = m₁υ₁′ + m₂υ₂′",
    "en": "## Momentum. Law of Conservation of Momentum\n• Momentum of a body (quantity of motion) — the product of mass and velocity:\n> p = mυ,  [p] = kg·m/s\n• Impulse of a force — the product of force and the time of its action:\n> F·t,  [F·t] = N·s\n• Newton's second law in momentum form: F·t = Δ(mυ).\n• A closed system — a system of bodies on which no external forces act.\n• Law of conservation of momentum: in a closed system, the total momentum of bodies is conserved:\n> m₁υ₁ + m₂υ₂ = m₁υ₁′ + m₂υ₂′",
    "kk": "## Импульс. Импульстің сақталу заңы\n• Денең импульсі (қозғалыс мөлшері) — массаның жылдамдыққа көбейтіндісі:\n> p = mυ,  [p] = кг·м/с\n• Күш импульсі — күштің әсер ету уақытқа көбейтіндісі:\n> F·t,  [F·t] = Н·с\n• Ньютонның екінші заңы импульстік формада: F·t = Δ(mυ).\n• Жабық жүйе — сыртқы күштер әсер етпейтін денелер жүйесі.\n• Импульстің сақталу заңы: жабық жүйеде денелердің жиынтық импульсі сақталады:\n> m₁υ₁ + m₂υ₂ = m₁υ₁′ + m₂υ₂′"
  },
  "p21": {
    "title": "§21. Реактивное движение",
    "titleEn": "§21. Reactive motion",
    "titleKk": "§21. Реактивті қозғалыс",
    "ru": "## Реактивное движение\n• Реактивное движение — движение тела, возникающее в результате отделения от него некоторой части с какой-либо скоростью.\n• Основано на законе сохранения импульса и третьем законе Ньютона.\n• Примеры: ракета, реактивный самолёт, кальмар, медуза.\n• Ракета может двигаться в вакууме — ей не нужна опора.\n• Многоступенчатые ракеты сбрасывают отработанные ступени, уменьшая массу.",
    "en": "## Reactive Motion\n• Reactive motion is the movement of a body that occurs as a result of a part of it separating with some speed.\n• It is based on the law of conservation of momentum and Newton's third law.\n• Examples: rocket, jet plane, squid, jellyfish.\n• A rocket can move in a vacuum — it does not need support.\n• Multistage rockets drop spent stages, reducing mass.",
    "kk": "## Реактивті қозғалыс\n• Реактивті қозғалыс — денеден кейбір бөлігінің қандай да бір жылдамдықпен бөлінуінің нәтижесінде пайда болатын қозғалыс.\n• Импульстің сақталу заңы мен Ньютонның үшінші заңына негізделген.\n• Мысалдар: зымыран, реактивті ұшақ, кальмар, медуза.\n• Зымыран вакуумде қозғала алады — оған тіреу қажет емес.\n• Көп сатылы зымырандар пайдаланылған сатыларды тастап, массасын азайтуды қамтамасыз етеді."
  },
  "p22": {
    "title": "§22. Механическая работа и энергия",
    "titleEn": "§22. Mechanical work and energy",
    "titleKk": "§22. Механикалық жұмыс және энергия",
    "ru": "## Механическая работа и энергия\n• Работа силы:\n> A = F·s·cosα,  [A] = Дж\n• Кинетическая энергия:\n> E_к = mυ²/2\n• Потенциальная энергия:\n> E_п = mgh  (для поднятого тела);  E_п = kx²/2 (для пружины)\n• Теорема об изменении кинетической энергии: A = ΔE_к.\n• Мощность:\n> N = A/t,  [N] = Вт",
    "en": "## Mechanical Work and Energy\n• Work of a force:\n> A = F·s·cosα,  [A] = J\n• Kinetic energy:\n> E_k = mυ²/2\n• Potential energy:\n> E_p = mgh  (for a lifted body);  E_p = kx²/2 (for a spring)\n• The theorem of kinetic energy change: A = ΔE_k.\n• Power:\n> N = A/t,  [N] = W",
    "kk": "## Механикалық жұмыс және энергия\n• Күш жұмысы:\n> A = F·s·cosα,  [A] = Дж\n• Кинетикалық энергия:\n> E_к = mυ²/2\n• Потенциалдық энергия:\n> E_п = mgh  (көтерілген дене үшін);  E_п = kx²/2 (серіппеге арналған)\n• Кинетикалық энергияның өзгеру теоремасы: A = ΔE_к.\n• Қуат:\n> N = A/t,  [N] = Вт"
  },
  "p23": {
    "title": "§23. Закон сохранения и превращения энергии",
    "titleEn": "§23. Law of conservation and transformation of energy",
    "titleKk": "§23. Энергияны сақтау және түрлендіру заңы",
    "ru": "## Закон сохранения и превращения энергии\n• Полная механическая энергия — сумма кинетической и потенциальной:\n> E = E_к + E_п\n• В замкнутой системе без трения полная механическая энергия сохраняется.\n• При совершении работы силами трения механическая энергия превращается во внутреннюю (тепловую).\n• Работа — мера превращения одного вида энергии в другой.\n• Замкнутая система тел — система, на которую не действуют внешние силы.",
    "en": "## Law of Conservation and Transformation of Energy\n• Total mechanical energy is the sum of kinetic and potential energy:\n> E = E_k + E_p\n• In a closed system without friction, total mechanical energy is conserved.\n• When work is done by friction forces, mechanical energy is transformed into internal (thermal) energy.\n• Work is a measure of the transformation of one type of energy into another.\n• A closed system of bodies is a system on which no external forces act.",
    "kk": "## Энергияны сақтаудың және түрлендірудің заңы\n• Толық механикалық энергия — кинетикалық және потенциалдық энергиялардың қосындысы:\n> E = E_к + E_п\n• Тартымсыз жабық жүйеде толық механикалық энергия сақталады.\n• Сырғанау күштерінің жұмысы кезінде механикалық энергия ішкі (жылулық) энергияға айналады.\n• Жұмыс — бір түрдегі энергияны екінші түрге айналдыру өлшемі.\n• Жабық денелер жүйесі — оған сыртқы күштер әсер етпейтін жүйе."
  },
  "p24": {
    "title": "§24. Колебательное движение",
    "titleEn": "§24. Oscillatory motion",
    "titleKk": "§24. Тербелмелі қозғалыс",
    "ru": "## Колебательное движение\n• Колебательное движение — движение, периодически повторяющееся во времени.\n• Свободные колебания — происходят под действием внутренних сил системы после выведения из равновесия.\n• Вынужденные колебания — происходят под действием внешней периодически изменяющейся силы.\n• Колебательная система — система тел, способная совершать свободные колебания (маятник, груз на пружине).\n• Положение равновесия — устойчивое состояние колебательной системы.\n## Величины\n• Амплитуда A — максимальное смещение от положения равновесия, [A] = м.\n• Смещение x — отклонение тела от положения равновесия.\n• Период T — время одного полного колебания: T = t/N.\n• Частота ν — число колебаний в единицу времени: ν = N/t = 1/T, [ν] = Гц.",
    "en": "## Oscillatory Motion\n• Oscillatory motion is motion that periodically repeats over time.\n• Free oscillations occur under the action of internal forces of the system after being displaced from equilibrium.\n• Forced oscillations occur under the action of an external periodically varying force.\n• Oscillatory system is a system of bodies capable of performing free oscillations (pendulum, mass on a spring).\n• Equilibrium position is a stable state of an oscillatory system.\n## Quantities\n• Amplitude A — the maximum displacement from the equilibrium position, [A] = m.\n• Displacement x — the deviation of the body from the equilibrium position.\n• Period T — the time of one complete oscillation: T = t/N.\n• Frequency ν — the number of oscillations per unit time: ν = N/t = 1/T, [ν] = Hz.",
    "kk": "## Тербелмелі қозғалыс\n• Тербелмелі қозғалыс — уақыт бойынша периодты түрде қайталанатын қозғалыс.\n• Еркін тербелістер — тепе-теңдіктен шығарылғаннан кейін жүйенің ішкі күштер әсерінен болады.\n• Міндетті тербелістер — сыртқы периодты өзгеретін күш әсерінен болады.\n• Тербелмелі жүйе — еркін тербеліс жасай алатын денелер жүйесі (маятник, серіппідегі салмақ).\n• Тепе-теңдік жағдайы — тербелмелі жүйенің тұрақты күйі.\n## Өлшемдер\n• Амплитуда A — тепе-теңдік жағдайынан ең үлкен ығысу, [A] = м.\n• Ығысу x — дененің тепе-теңдік жағдайынан ауытқуы.\n• Период T — бір толық тербеліс уақыты: T = t/N.\n• Жиілік ν — бір уақыт бірлігіндегі тербеліс саны: ν = N/t = 1/T, [ν] = Гц."
  },
  "p25": {
    "title": "§25. Превращение энергии при колебаниях. Уравнение колебаний",
    "titleEn": "§25. Energy transformation in oscillations. Oscillation equation",
    "titleKk": "§25. Тербелістер кезіндегі энергияның түрленуі. Тербеліс теңдеуі",
    "ru": "## Энергия при колебаниях. Уравнение колебаний\n• Уравнение колебательного движения:\n> x = A·cos(ωt + φ₀)\n• Циклическая частота ω = 2π/T = 2πν.\n• За одно колебание тело проходит путь 4A.\n• В идеальной системе энергия сохраняется: в крайних точках она потенциальная и максимальна, в положении равновесия — кинетическая.\n• В реальных системах колебания затухают: амплитуда уменьшается из-за трения.",
    "en": "## Energy in Oscillations. Oscillation Equation\n• Equation of oscillatory motion:\n> x = A·cos(ωt + φ₀)\n• Angular frequency ω = 2π/T = 2πν.\n• In one oscillation, the body travels a distance of 4A.\n• In an ideal system, energy is conserved: at the extreme points it is potential and maximal, at the equilibrium position — kinetic.\n• In real systems, oscillations decay: the amplitude decreases due to friction.",
    "kk": "## Тербелістердегі энергия. Тербеліс теңдеуі\n• Тербелмелі қозғалыс теңдеуі:\n> x = A·cos(ωt + φ₀)\n• Циклдік жиілік ω = 2π/T = 2πν.\n• Бір тербеліс кезінде дене 4A жол өтеді.\n• Идеалды жүйеде энергия сақталады: шектік нүктелерде ол потенциалдық және максималды, тепе-теңдік жағдайында — кинетикалық.\n• Нақты жүйелерде тербелістер бәсеңдейді: амплитуда үйкеліс салдарынан азаяды."
  },
  "p26": {
    "title": "§26. Колебания математического и пружинного маятников",
    "titleEn": "§26. Oscillations of mathematical and spring pendulums",
    "titleKk": "§26. Математикалық және серіппелі маятниктердің тербелістері",
    "ru": "## Математический и пружинный маятники\n• Математический маятник — груз на длинной нерастяжимой нити.\n> T = 2π√(l/g)\n• Период не зависит от массы груза и амплитуды (при малых углах).\n• Пружинный маятник — груз на пружине:\n> T = 2π√(m/k)\n• Период пружинного маятника зависит от массы и жёсткости, но не от g.",
    "en": "## Mathematical and Spring Pendulums\n• A mathematical pendulum is a weight on a long inextensible string.\n> T = 2π√(l/g)\n• The period does not depend on the mass of the weight or the amplitude (for small angles).\n• A spring pendulum is a weight on a spring:\n> T = 2π√(m/k)\n• The period of a spring pendulum depends on the mass and stiffness, but not on g.",
    "kk": "## Математикалық және серіппелі маховиктер\n• Математикалық маховик — ұзын созылмайтын жіпке байланған салмақ.\n> T = 2π√(l/g)\n• Период салмақ массасына және амплитудасына (кіші бұрыштарда) байланысты емес.\n• Серіппелі маховик — серіппеге байланған салмақ:\n> T = 2π√(m/k)\n• Серіппелі маховиктің периоді массасына және қатаңдығына байланысты, бірақ g-ге байланысты емес."
  },
  "p27": {
    "title": "§27. Свободные и вынужденные колебания, резонанс",
    "titleEn": "§27. Free and forced oscillations, resonance",
    "titleKk": "§27. Еркін және мәжбүрлі тербелістер, резонанс",
    "ru": "## Свободные и вынужденные колебания. Резонанс\n• Затухающие колебания — колебания, амплитуда которых со временем уменьшается.\n• Вынужденные колебания поддерживает внешняя периодическая сила; их частота равна частоте этой силы.\n• Резонанс — явление резкого увеличения амплитуды вынужденных колебаний при совпадении частоты внешней силы с собственной частотой системы.\n• Резонанс бывает полезным (музыкальные инструменты, радиоприём) и вредным (разрушение мостов, машин).",
    "en": "## Free and forced oscillations. Resonance\n• Damped oscillations are oscillations whose amplitude decreases over time.\n• Forced oscillations are maintained by an external periodic force; their frequency equals the frequency of this force.\n• Resonance is the phenomenon of a sharp increase in the amplitude of forced oscillations when the frequency of the external force matches the natural frequency of the system.\n• Resonance can be useful (musical instruments, radio reception) or harmful (destruction of bridges, machines).",
    "kk": "## Еркін және мәжбүрлі тербелістер. Резонанс\n• Сөнетін тербелістер — амплитудасы уақыт өте келе кемитін тербелістер.\n• Мәжбүрлі тербелістерді сыртқы периодтық күш қолдайды; олардың жиілігі осы күштің жиілігіне тең.\n• Резонанс — сыртқы күштің жиілігі жүйенің өздік жиілігімен сәйкес келгенде мәжбүрлі тербелістердің амплитудасының күрт арту құбылысы.\n• Резонанс пайдалы болуы мүмкін (музыкалық аспаптар, радиоқабылдау) және зиянды болуы мүмкін (көпірлердің, машиналардың бұзылуы)."
  },
  "p28": {
    "title": "§28. Свободные электромагнитные колебания",
    "titleEn": "§28. Free electromagnetic oscillations",
    "titleKk": "§28. Еркін электромагниттік тербелістер",
    "ru": "## Свободные электромагнитные колебания\n• Электромагнитные колебания — периодическое изменение заряда, силы тока и напряжения.\n• Колебательный контур — цепь из последовательно соединённых конденсатора и катушки.\n• Энергия электрического поля конденсатора переходит в энергию магнитного поля катушки и обратно.\n• Формула Томсона:\n> T = 2π√(LC)\n• Индуктивность — величина, характеризующая инерционность катушки.\n• В сети Казахстана используется переменный ток 50 Гц, 220 В.",
    "en": "## Free Electromagnetic Oscillations\n• Electromagnetic oscillations are the periodic changes of charge, current, and voltage.\n• Oscillatory circuit — a circuit consisting of a capacitor and a coil connected in series.\n• The energy of the capacitor's electric field is converted into the energy of the coil's magnetic field and back.\n• Thomson's formula:\n> T = 2π√(LC)\n• Inductance is a quantity that characterizes the inertia of a coil.\n• In Kazakhstan's power grid, alternating current of 50 Hz, 220 V is used.",
    "kk": "## Еркін электромагниттік тербелістер\n• Электромагниттік тербелістер — зарядтың, ток күшінің және кернеудің периодтық өзгеруі.\n• Тербелмелі контур — конденсатор мен орамның ретті жолмен қосылған тізбегі.\n• Конденсатордың электр өрісінің энергиясы орамның магнит өрісінің энергиясына өтеді және керісінше.\n• Томсон формуласы:\n> T = 2π√(LC)\n• Индуктивтік — орамның инерциясын сипаттайтын шамасы.\n• Қазақстан жүйесінде 50 Гц, 220 В ауыспалы ток қолданылады."
  },
  "p29": {
    "title": "§29. Волновое движение",
    "titleEn": "§29. Wave motion",
    "titleKk": "§29. Толқындық қозғалыс",
    "ru": "## Волновое движение\n• Механическая волна — явление распространения колебательного движения в упругой среде.\n• Продольная волна — частицы колеблются вдоль направления распространения волны.\n• Поперечная волна — частицы колеблются перпендикулярно направлению распространения.\n• Волна переносит энергию без переноса вещества.\n## Величины\n• Длина волны λ — расстояние между ближайшими точками, колеблющимися в одной фазе.\n> λ = υT = υ/ν",
    "en": "## Wave Motion\n• Mechanical wave — a phenomenon of the propagation of oscillatory motion in an elastic medium.\n• Longitudinal wave — particles oscillate along the direction of wave propagation.\n• Transverse wave — particles oscillate perpendicular to the direction of propagation.\n• A wave carries energy without transferring matter.\n## Quantities\n• Wavelength λ — the distance between the nearest points oscillating in the same phase.\n> λ = υT = υ/ν",
    "kk": "## Толқындық қозғалыс\n• Механикалық толқын — серпімді ортада тербелмелі қозғалыстың таралу құбылысы.\n• Ұзындық толқын — бөлшектер толқынның таралу бағыты бойынша тербеледі.\n• Көлденең толқын — бөлшектер толқынның таралу бағытына перпендикуляр тербеледі.\n• Толқын зат тасымалдамай, энергияны тасымалдайды.\n## Шамалар\n• Толқын ұзындығы λ — бір фазада тербелетін жақын нүктелер арасындағы қашықтық.\n> λ = υT = υ/ν"
  },
  "p30": {
    "title": "§30. Звук, характеристики звука, резонанс, эхо",
    "titleEn": "§30. Sound, characteristics of sound, resonance, echo",
    "titleKk": "§30. Дыбыс, дыбыстың сипаттары, резонанс, эхо",
    "ru": "## Звук\n• Звук — механические волны, распространяющиеся в упругих средах и воспринимаемые органами слуха.\n• Человек слышит звук частотой от 16 Гц до 20 000 Гц; ниже — инфразвук, выше — ультразвук.\n• В газах и жидкостях звук — продольная волна; в вакууме звук не распространяется.\n• Скорость звука: воздух ≈ 340 м/с, вода ≈ 1480 м/с, сталь ≈ 5000 м/с.\n## Характеристики\n• Высота звука определяется частотой; громкость — амплитудой.\n• Акустический резонанс — усиление колебаний при совпадении частот.\n• Эхо — отражение звука от преграды; реверберация — увеличение длительности звука из-за отражений.",
    "en": "## Sound\n• Sound is mechanical waves propagating in elastic media and perceived by the organs of hearing.\n• Humans can hear sound with a frequency from 16 Hz to 20,000 Hz; below — infrasound, above — ultrasound.\n• In gases and liquids, sound is a longitudinal wave; in a vacuum, sound does not propagate.\n• Speed of sound: air ≈ 340 m/s, water ≈ 1480 m/s, steel ≈ 5000 m/s.\n## Characteristics\n• The pitch of a sound is determined by its frequency; loudness — by its amplitude.\n• Acoustic resonance is the amplification of oscillations when frequencies match.\n• Echo is the reflection of sound from an obstacle; reverberation is the increase in sound duration due to reflections.",
    "kk": "## Дыбыс\n• Дыбыс — серпімді орталарда таралатын және есту мүшелері арқылы қабылданатын механикалық толқындар.\n• Адам 16 Гц-тен 20 000 Гц-ге дейінгі жиіліктегі дыбысты естиді; төменірек — инфрадыбыс, жоғарырақ — ультрадыбыс.\n• Газдар мен сұйықтықтарда дыбыс — бойлық толқын; вакуумда дыбыс таралмайды.\n• Дыбыс жылдамдығы: ауа шамамен ≈ 340 м/с, су ≈ 1480 м/с, болат ≈ 5000 м/с.\n## Ерекшеліктері\n• Дыбыстың биіктігі жиілігімен анықталады; қаттылығы — амплитудасымен.\n• Аккустикалық резонанс — жиіліктер сәйкес келгенде тербелістердің күшеюі.\n• Эхо — дыбыстың кедергіден шағылуы; реверберация — шағылысуларға байланысты дыбыстың ұзақтығының ұзаруы."
  },
  "p31": {
    "title": "§31. Электромагнитные волны. Шкала электромагнитных волн",
    "titleEn": "§31. Electromagnetic waves. Electromagnetic wave scale",
    "titleKk": "§31. Электромагниттік толқындар. Электромагниттік толқындардың шкаласы",
    "ru": "## Электромагнитные волны\n• Электромагнитная волна — распространение колебаний электромагнитного поля в пространстве.\n• Предсказаны Дж. Максвеллом (1864), экспериментально получены Г. Герцем.\n• Электромагнитная волна — поперечная: колебания E и B перпендикулярны направлению распространения.\n• Скорость электромагнитных волн в вакууме:\n> c = 3·10⁸ м/с;  c = λν\n• Свет — электромагнитная волна видимого диапазона (400–750 нм; ν ≈ 4·10¹⁴–7,5·10¹⁴ Гц).\n• Шкала: радио → ИК → видимый свет → УФ → рентген → γ.\n• Открытый колебательный контур — передающая антенна; дисперсия — разложение света в спектр.",
    "en": "## Electromagnetic Waves\n• An electromagnetic wave is the propagation of oscillations of the electromagnetic field in space.\n• Predicted by J. Maxwell (1864), experimentally obtained by H. Hertz.\n• An electromagnetic wave is transverse: the oscillations of E and B are perpendicular to the direction of propagation.\n• Speed of electromagnetic waves in a vacuum:\n> c = 3·10⁸ m/s;  c = λν\n• Light is an electromagnetic wave of the visible range (400–750 nm; ν ≈ 4·10¹⁴–7.5·10¹⁴ Hz).\n• Scale: radio → IR → visible light → UV → X-ray → γ.\n• An open oscillatory circuit is a transmitting antenna; dispersion is the decomposition of light into a spectrum.",
    "kk": "## Электромагниттік толқындар\n• Электромагниттік толқын — электромагниттік өрістің тербелістерінің кеңістікте таралуы.\n• Дж. Максвеллмен (1864) болжанған, Г. Герц арқылы тәжірибелік жолмен алынды.\n• Электромагниттік толқын — көлденең: E және B тербелістері таралу бағытына перпендикуляр.\n• Электромагниттік толқындардың вакуумдағы жылдамдығы:\n> c = 3·10⁸ м/с;  c = λν\n• Жарық — көрінетін диапазондағы (400–750 нм; ν ≈ 4·10¹⁴–7,5·10¹⁴ Гц) электромагниттік толқын.\n• Шкала: радио → ЖҚ → көрінетін жарық → УФ → рентген → γ.\n• Ашық тербелмелі тізбек — тарату антеннасы; дисперсия — жарықтың спектрге бөлінуі."
  },
  "p32": {
    "title": "§32. Тепловое излучение",
    "titleEn": "§32. Thermal radiation",
    "titleKk": "§32. Жылулық сәулелену",
    "ru": "## Тепловое излучение\n• Тепловое излучение — электромагнитное излучение, возникающее за счёт внутренней энергии вещества (теплового движения частиц).\n• Каждое тело одновременно излучает и поглощает энергию.\n• Абсолютно чёрное тело — тело, излучающее и поглощающее во всём диапазоне частот тепловых волн.\n• Чем выше температура тела, тем интенсивнее излучение и тем короче волны.\n## Практика\n• Тёмные поверхности лучше поглощают и лучше излучают, светлые — хуже (эксперимент §32).",
    "en": "## Thermal Radiation\n• Thermal radiation is electromagnetic radiation that arises due to the internal energy of a substance (thermal motion of particles).\n• Every body simultaneously emits and absorbs energy.\n• An ideal black body is a body that emits and absorbs across the entire range of thermal wave frequencies.\n• The higher the temperature of a body, the more intense the radiation and the shorter the waves.\n## Practice\n• Dark surfaces absorb and emit better, light surfaces - worse (experiment §32).",
    "kk": "## Тептік сәуле шығару\n• Тептік сәуле шығару — бұл заттың ішкі энергиясына (бөлшектердің жылулық қозғалысына) байланысты пайда болатын электромагниттік сәуле шығару.\n• Әрбір дене бір уақытта энергияны сәуле шығарады да, сіңіреді де.\n• Абсолютті қара дене — барлық жиілік диапазонында жылулық толқындарды сәуле шығаратын және сіңіретін дене.\n• Денеңіздің температурасы неғұрлым жоғары болса, сәуле шығару соғұрлым қарқынды, ал толқындары қысқа болады.\n## Практика\n• Қараңғы беттер энергияны жақсы сіңіреді және жақсы сәуле шығарады, ал ашық беттер нашар (эксперимент §32)."
  },
  "p33": {
    "title": "§33. Гипотеза Планка о световых квантах. Фотоэффект",
    "titleEn": "§33. Planck's hypothesis about light quanta. Photoelectric effect",
    "titleKk": "§33. Планктің жарық кванттары туралы гипотезасы. Фотоэффект",
    "ru": "## Кванты. Фотоэффект\n• Гипотеза Планка: энергия излучается и поглощается порциями — квантами.\n> E = hν,  h = 6,63·10⁻³⁴ Дж·с — постоянная Планка\n• Фотон — квант электромагнитного излучения.\n• Фотоэффект — вырывание электронов из вещества под действием электромагнитного излучения.\n• Красная граница фотоэффекта — минимальная частота, при которой он возможен.\n• Уравнение Эйнштейна для фотоэффекта:\n> hν = A_вых + E_к max\n• Фотоэлемент — устройство, в котором свет вызывает электрический ток.",
    "en": "## Quanta. Photoelectric Effect\n• Planck's hypothesis: energy is emitted and absorbed in portions — quanta.\n> E = hν,  h = 6.63·10⁻³⁴ J·s — Planck's constant\n• Photon — a quantum of electromagnetic radiation.\n• Photoelectric effect — the ejection of electrons from a substance under the action of electromagnetic radiation.\n• Red limit of the photoelectric effect — the minimum frequency at which it is possible.\n• Einstein's equation for the photoelectric effect:\n> hν = A_exit + E_k max\n• Photoelement — a device in which light causes an electric current.",
    "kk": "## Кванттар. Фотоэффект\n• Планктің гипотезасы: энергия бөліктермен — кванттармен — шашырап шығарылады және сіңіріледі.\n> E = hν,  h = 6,63·10⁻³⁴ Дж·с — Планк тұрақтысы\n• Фотон — электромагниттік сәулеленудің кванты.\n• Фотоэффект — электромагниттік сәулеленудің әсерінен заттан электрондардың шығуы.\n• Фотоэффектінің қызыл шегі — оның мүмкін болатын минималды жиілігі.\n• Фотоэффект үшін Эйнштейн теңдеуі:\n> hν = A_шығ + E_к max\n• Фотоэлемент — жарық электр тогын тудыратын құрылғы."
  },
  "p34": {
    "title": "§34. Рентгеновское излучение",
    "titleEn": "§34. X-ray radiation",
    "titleKk": "§34. Рентген сәулеленуі",
    "ru": "## Рентгеновское излучение\n• Возникает при торможении быстрых электронов препятствием (тормозное излучение) и при переходах электронов в атомах анода (характеристическое излучение).\n• Рентгеновские лучи — электромагнитные волны с очень короткой длиной волны (10⁻⁸–10⁻¹² м).\n• Открыты В. Рентгеном в 1895 г.\n• Обладают большой проникающей способностью; применяются в медицине (рентгенография), дефектоскопии, кристаллографии.\n• Облучение нужно ограничивать — оно опасно для живых клеток.",
    "en": "## X-ray Radiation\n• Occurs when fast electrons are decelerated by an obstacle (bremsstrahlung) and when electrons transition in the atoms of the anode (characteristic radiation).\n• X-rays are electromagnetic waves with a very short wavelength (10⁻⁸–10⁻¹² m).\n• Discovered by W. Röntgen in 1895.\n• Have high penetrating power; used in medicine (radiography), defectoscopy, crystallography.\n• Exposure should be limited — it is dangerous for living cells.",
    "kk": "## Рентген сәулесі\n• Жылдам электрондардың кедергіге соғылғанда (тежелу сәулесі) және анод атомдарындағы электрондардың өтулерінде (ерекше сәуле) пайда болады.\n• Рентген сәулелері — өте қысқа толқынды электромагниттік толқындар (10⁻⁸–10⁻¹² м).\n• 1895 жылы В. Рентген арқылы ашылған.\n• Үлкен өту қабілетіне ие; медицинада (рентгенография), ақаулықты тексеруде, кристаллографияда қолданылады.\n• Сәулеленуді шектеу қажет — ол тірі жасушалар үшін қауіпті."
  },
  "p35": {
    "title": "§35. Радиоактивность. Природа радиоактивных излучений",
    "titleEn": "§35. Radioactivity. Nature of radioactive emissions",
    "titleKk": "§35. Радиоактивтік. Радиоактивтік сәулеленудің табиғаты",
    "ru": "## Радиоактивность\n• Радиоактивность — самопроизвольное излучение ядер атомов (открыта А. Беккерелем в 1896 г. у солей урана).\n• М. и П. Кюри открыли полоний и радий; Э. Резерфорд исследовал состав излучения.\n## Состав излучения\n• α-лучи — ядра атомов гелия (заряд +, задерживаются листом бумаги, сильная ионизация).\n• β-лучи — поток электронов (отклоняются сильнее, задерживаются алюминием).\n• γ-лучи — электромагнитные волны (не заряжены, наибольшая проникающая способность, задерживаются свинцом).\n• Все элементы с порядковым номером более 83 радиоактивны.",
    "en": "## Radioactivity\n• Radioactivity is the spontaneous emission of atomic nuclei (discovered by A. Becquerel in 1896 in uranium salts).\n• M. and P. Curie discovered polonium and radium; E. Rutherford studied the composition of radiation.\n## Composition of Radiation\n• α-rays — helium atomic nuclei (positive charge, stopped by a sheet of paper, strong ionization).\n• β-rays — stream of electrons (deflected more, stopped by aluminum).\n• γ-rays — electromagnetic waves (uncharged, highest penetrating power, stopped by lead).\n• All elements with atomic numbers greater than 83 are radioactive.",
    "kk": "## Радиоактивтік\n• Радиоактивтік — атом ядроларының өздігінен сәулеленуі (А. Беккерель 1896 жылы уран тұздарында ашты).\n• М. және П. Кюри полоний мен радийді ашты; Э. Резерфорд сәулеленудің құрамын зерттеді.\n## Сәулеленудің құрамы\n• α-сәулелер — гелий атомдарының ядролары (заряд +, қағаз парағымен тоқтайды, күшті ионизация).\n• β-сәулелер — электрондардың ағыны (көп бұрылады, алюминиймен тоқтайды).\n• γ-сәулелер — электромагниттік толқындар (зарядсыз, ең жоғарғы өтімділікке ие, қорғасынмен тоқтайды).\n• Барлық элементтер реттік нөмірі 83-тен жоғары болса радиоактивті болады."
  },
  "p36": {
    "title": "§36. Опыт Резерфорда, строение атома",
    "titleEn": "§36. Rutherford experiment, atomic structure",
    "titleKk": "§36. Резерфорд тәжірибесі, атомның құрылысы",
    "ru": "## Опыт Резерфорда. Строение атома\n• Резерфорд бомбардировал золотую фольгу α-частицами: большинство прошло насквозь, единицы отскочили.\n• Вывод: в центре атома — маленькое положительное ядро (≈10⁻¹⁵ м), вокруг него электроны; размер атома ≈10⁻¹⁰ м.\n• Планетарная (ядерная) модель атома.\n## Спектры\n• Спектр — радужная полоса при дисперсии видимого излучения.\n• Сплошной спектр дают нагретые твёрдые тела и жидкости; линейчатый — разреженные газы.\n• Каждый элемент имеет свой уникальный линейчатый спектр — основа спектрального анализа.\n• Серия Бальмера — переходы атома водорода на второй уровень.",
    "en": "## Rutherford's Experiment. Atomic Structure\n• Rutherford bombarded gold foil with α-particles: most passed through, a few bounced back.\n• Conclusion: in the center of an atom there is a small positive nucleus (≈10⁻¹⁵ m), electrons around it; the size of the atom is ≈10⁻¹⁰ m.\n• Planetary (nuclear) model of the atom.\n## Spectra\n• A spectrum is a rainbow stripe when dispersing visible radiation.\n• Heated solids and liquids give a continuous spectrum; sparse gases give a line spectrum.\n• Each element has its own unique line spectrum — the basis of spectral analysis.\n• Balmer series — transitions of the hydrogen atom to the second level.",
    "kk": "## Резерфорд тәжірибесі. Атом құрылысы\n• Резерфорд алтын фольганы α-бөлшектермен жарықтандырды: көбісі тесіктен өтіп кетті, кейбіреулері кері шағылды.\n• Қорытынды: атомның ортасында кішкентай оң зарядталған ядро бар (≈10⁻¹⁵ м), оның айналасында электрондар орналасқан; атомның мөлшері ≈10⁻¹⁰ м.\n• Атомның планетарлық (ядерлік) моделі.\n## Спектрлер\n• Спектр — көрінетін сәулеленуді жіктегенде пайда болатын кемпірқосақ тәрізді жолақ.\n• Созылмалы спектрді қыздырылған қатты денелер мен сұйықтықтар береді; сызықты спектрді — сирек газдар.\n• Әр элементтің өзіндік бірегей сызықты спектрі бар — спектрлік талдаудың негізі.\n• Бальмер сериясы — сутегі атомының екінші деңгейге өтуі."
  },
  "p37": {
    "title": "§37. Ядерное взаимодействие. Дефект масс, энергия связи",
    "titleEn": "§37. Nuclear interaction. Mass defect, binding energy",
    "titleKk": "§37. Ядролық өзара әрекеттесу. Масса ақауы, байланыс энергиясы",
    "ru": "## Ядерные силы. Энергия связи\n• Протон (¹₁p) открыт Э. Резерфордом в 1919 г., нейтрон (¹₀n) — Дж. Чедвиком в 1932 г.\n• Нуклоны — протоны и нейтроны, из которых состоит ядро.\n• Число протонов Z равно порядковому номеру элемента; A = Z + N.\n• Изотопы — ядра с одинаковым числом протонов, но разным числом нейтронов.\n• Ядерные силы (сильное взаимодействие) — короткодействующие силы, удерживающие нуклоны в ядре.\n• Дефект масс ΔM = Z·m_p + N·m_n − M_ядра.\n• Энергия связи:\n> E_св = ΔM·c²\n• Удельная энергия связи — энергия связи на один нуклон; максимальна у ядер середины таблицы Менделеева.",
    "en": "## Nuclear Forces. Binding Energy\n• Proton (¹₁p) discovered by E. Rutherford in 1919, neutron (¹₀n) — by J. Chadwick in 1932.\n• Nucleons — protons and neutrons that make up the nucleus.\n• The number of protons Z equals the atomic number of the element; A = Z + N.\n• Isotopes — nuclei with the same number of protons but different number of neutrons.\n• Nuclear forces (strong interaction) — short-range forces that hold nucleons in the nucleus.\n• Mass defect ΔM = Z·m_p + N·m_n − M_nucleus.\n• Binding energy:\n> E_b = ΔM·c²\n• Specific binding energy — binding energy per nucleon; maximum in nuclei of the middle of the periodic table.",
    "kk": "## Ядролық күштер. Байланыс энергиясы\n• Протон (¹₁p) Э. Резерфорд арқылы 1919 жылы ашылған, нейтрон (¹₀n) — Дж. Чедвик арқылы 1932 жылы ашылған.\n• Нуклондар — ядроны құрайтын протондар мен нейтрондар.\n• Протондар саны Z элементтің реттік нөміріне тең; A = Z + N.\n• Изотоптар — протондар саны бірдей, бірақ нейтрондар саны әртүрлі ядролар.\n• Ядролық күштер (күшті өзара әрекеттесу) — нуклондарды ядро ішінде ұстап тұратын қысқа әрекет ететін күштер.\n• Масса дефициті ΔM = Z·m_p + N·m_n − M_ядро.\n• Байланыс энергиясы:\n> E_бай = ΔM·c²\n• Бір нуклонға шаққандағы байланыс энергиясы — бір нуклонға шаққандағы байланыс энергиясы; ең жоғарғысы Менделеев кестесінің ортасындағы ядроларда."
  },
  "p38": {
    "title": "§38. Ядерные реакции, закон радиоактивного распада",
    "titleEn": "§38. Nuclear reactions, law of radioactive decay",
    "titleKk": "§38. Ядролық реакциялар, радиоактивтік ыдырап кету заңы",
    "ru": "## Ядерные реакции. Закон распада\n• Ядерная реакция — изменение атомных ядер при их взаимодействии с частицами или друг с другом.\n• В ядерных реакциях сохраняются электрический заряд и массовое число.\n• Пример Резерфорда: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H.\n• α-распад: Z → Z−2, A → A−4; β-распад: Z → Z+1, A не меняется.\n• Период полураспада T — время, за которое распадается половина радиоактивных ядер.\n• Закон радиоактивного распада открыли Э. Резерфорд и Ф. Содди (1902).",
    "en": "## Nuclear Reactions. Decay Law\n• A nuclear reaction is a change in atomic nuclei when they interact with particles or with each other.\n• In nuclear reactions, electric charge and mass number are conserved.\n• Rutherford's example: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H.\n• α-decay: Z → Z−2, A → A−4; β-decay: Z → Z+1, A does not change.\n• Half-life T is the time during which half of the radioactive nuclei decay.\n• The law of radioactive decay was discovered by E. Rutherford and F. Soddy (1902).",
    "kk": "## Ядролық реакциялар. Шіру заңы\n• Ядролық реакция — атом ядроларының бөлшектермен немесе бір-бірімен әрекеттесу кезінде өзгеруі.\n• Ядролық реакцияларда электрлік заряд пен масса саны сақталады.\n• Резерфордтың мысалы: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H.\n• α-шіру: Z → Z−2, A → A−4; β-шіру: Z → Z+1, A өзгермейді.\n• Жартылай шіру кезеңі T — радиоактивті ядролардың жартысы шіретін уақыт.\n• Радиоактивті шіру заңын Э. Резерфорд пен Ф. Содди (1902) ашты."
  },
  "p39": {
    "title": "§39. Деление тяжёлых ядер, цепная реакция. Ядерный реактор",
    "titleEn": "§39. Fission of heavy nuclei, chain reaction. Nuclear reactor",
    "titleKk": "§39. Ауыр ядролардың бөлінуі, тізбекті реакция. Ядролық реактор",
    "ru": "## Деление ядер. Реактор\n• Деление ²³⁵₉₂U нейтронами осуществили О. Ган и Ф. Штрассман (1938); механизм объяснил Н. Бор (капельная модель).\n• При делении ядра образуются два осколка и 2–3 нейтрона; выделяется ≈200 МэВ.\n• 1 г урана при делении даёт столько же энергии, сколько 3 т угля.\n• Цепная реакция — самоподдерживающаяся реакция деления.\n• Коэффициент размножения нейтронов k: k < 1 — реакция затухает, k = 1 — управляемая, k > 1 — взрывная.\n• Ядерный реактор: топливо, замедлитель, регулирующие стержни, защитная оболочка.",
    "en": "## Nuclear Fission. Reactor\n• Fission of ²³⁵₉₂U by neutrons was carried out by O. Hahn and F. Strassmann (1938); the mechanism was explained by N. Bohr (drop model).\n• During fission, the nucleus produces two fragments and 2–3 neutrons; approximately 200 MeV is released.\n• 1 g of uranium during fission gives as much energy as 3 tons of coal.\n• Chain reaction — a self-sustaining fission reaction.\n• Neutron multiplication factor k: k < 1 — reaction dies out, k = 1 — controlled, k > 1 — explosive.\n• Nuclear reactor: fuel, moderator, control rods, containment vessel.",
    "kk": "## Ядролардың бөлінуі. Реактор\n• ²³⁵₉₂U изотопының нейтрондармен бөлінуін О. Ган және Ф. Штрассман жүзеге асырды (1938); механизмін Н. Бор түсіндірді (тамшы моделі).\n• Ядро бөлінген кезде екі бөлшек және 2–3 нейтрон пайда болады; шамамен 200 МэВ энергия бөлінеді.\n• 1 г уран бөліну кезінде 3 т көмірге тең энергия береді.\n• Тізбектелген реакция — өздігінен тұрақты бөліну реакциясы.\n• Нейтрондардың қалпына келу коэффициенті k: k < 1 — реакция бәсеңдейді, k = 1 — басқарылатын, k > 1 — жарылғыш.\n• Ядролық реактор: отын, баяулатқыш, реттегіш стерженьдер, қорғаныс қабығы."
  },
  "p40": {
    "title": "§40. Термоядерные реакции. Радиоизотопы, защита от радиации",
    "titleEn": "§40. Thermonuclear reactions. Radioisotopes, radiation protection",
    "titleKk": "§40. Термоядролық реакциялар. Радиоизотоптар, радиациядан қорғау",
    "ru": "## Термоядерные реакции. Радиоизотопы\n• Термоядерная реакция — слияние лёгких ядер при температуре свыше 100 млн К.\n• Вещество при этом — плазма (полностью ионизованный газ).\n• Пример: ²₁H + ³₁H → ⁴₂He + ¹₀n (выделяется ~3,5 МэВ на нуклон).\n• Термоядерные реакции — источник энергии Солнца и звёзд.\n• Радиоизотопы — нестабильные ядра, полученные искусственно; применяются в медицине, дефектоскопии, как меченые атомы.\n• Защита от радиации: время, расстояние, экранирование.",
    "en": "## Thermonuclear Reactions. Radioisotopes\n• A thermonuclear reaction is the fusion of light nuclei at a temperature above 100 million K.\n• The substance in this case is plasma (fully ionized gas).\n• Example: ²₁H + ³₁H → ⁴₂He + ¹₀n (approximately 3.5 MeV per nucleon is released).\n• Thermonuclear reactions are the source of energy for the Sun and stars.\n• Radioisotopes are unstable nuclei obtained artificially; they are used in medicine, defectoscopy, and as tracer atoms.\n• Radiation protection: time, distance, shielding.",
    "kk": "## Термоядролық реакциялар. Радиоизотоптар\n• Термоядролық реакция — бұл 100 млн К-ден жоғары температурада жеңіл ядролардың бірігуі.\n• Осы кезде зат — плазма (толық иондалған газ).\n• Мысалы: ²₁H + ³₁H → ⁴₂He + ¹₀n (нуклонға шамамен ~3,5 МэВ бөлінеді).\n• Термоядролық реакциялар — Күн мен жұлдыздардың энергиясының көзі.\n• Радиоизотоптар — жасанды жолмен алынған тұрақсыз ядролар; медицинада, дефектоскопияда, белгіленген атомдар ретінде қолданылады.\n• Радиациядан қорғау: уақыт, қашықтық, экранировка."
  },
  "p41": {
    "title": "§41. Элементарные частицы",
    "titleEn": "§41. Elementary particles",
    "titleKk": "§41. Элементарлық бөлшектер",
    "ru": "## Элементарные частицы\n• Элементарные частицы — частицы, из которых состоит материя; их известно несколько сотен.\n• У каждой частицы есть античастица (та же масса, противоположный заряд); при встрече — аннигиляция.\n• Позитрон — античастица электрона.\n• Нейтрон свободен ~15 мин, затем распадается: n → p + e + ν̄.\n• Нейтрино обладает огромной проникающей способностью.\n• Классификация: фотон, лептоны, адроны; адроны состоят из кварков.\n• По современным представлениям Вселенная возникла в результате Большого взрыва; первые звёзды зажглись через 200 млн лет, галактики сформировались к 1 млрд лет.",
    "en": "## Elementary Particles\n• Elementary particles are particles that make up matter; several hundred are known.\n• Each particle has an antiparticle (same mass, opposite charge); upon meeting — annihilation.\n• A positron is the antiparticle of the electron.\n• A free neutron lasts ~15 minutes, then decays: n → p + e + ν̄.\n• Neutrinos have enormous penetrating ability.\n• Classification: photon, leptons, hadrons; hadrons consist of quarks.\n• According to modern concepts, the Universe arose as a result of the Big Bang; the first stars ignited after 200 million years, galaxies formed by 1 billion years.",
    "kk": "## Элементарлік бөлшектер\n• Элементарлік бөлшектер — материяны құрайтын бөлшектер; олардың бірнеше жүздеген түрлері белгілі.\n• Әр бөлшектің антибөлшегі бар (сол масса, қарама-қарсы заряд); кездескенде — жойылу.\n• Позитрон — электронның антибөлшегі.\n• Нейтрон бостандықта шамамен 15 минут, содан кейін ыдырайды: n → p + e + ν̄.\n• Нейтрино үлкен өту қабілетіне ие.\n• Сыныптау: фотон, лептондар, адрондар; адрондар кварктардан тұрады.\n• Қазіргі түсініктерге сәйкес, Ғалам Үлкен жарылыс нәтижесінде пайда болған; алғашқы жұлдыздар 200 млн жылдан кейін жанып, галактикалар 1 млрд жылға дейін қалыптасты."
  },
  "p42": {
    "title": "§42. Мировоззренческое значение физики и астрономии",
    "titleEn": "§42. Worldview significance of physics and astronomy",
    "titleKk": "§42. Физика мен астрономияның дүниетанымдық мәні",
    "ru": "## Физика и астрономия в картине мира\n• Физическая картина мира — целостное представление о материи, движении и взаимодействии.\n• Механика, электродинамика, квантовая физика описывают разные уровни природы.\n• Астрономия определяет наше место во Вселенной: Земля — планета Солнечной системы, одной из миллиардов звёзд Галактики, одной из миллиардов галактик.\n• Научное мировоззрение опирается на опыт, эксперимент и проверяемость теорий.",
    "en": "## Physics and Astronomy in the Worldview\n• The physical worldview is a holistic understanding of matter, motion, and interaction.\n• Mechanics, electrodynamics, and quantum physics describe different levels of nature.\n• Astronomy determines our place in the Universe: the Earth is a planet of the Solar System, one of billions of stars in the Galaxy, one of billions of galaxies.\n• The scientific worldview is based on experience, experiment, and the verifiability of theories.",
    "kk": "## Физика және астрономия әлем көрінісінде\n• Физикалық әлем көрінісі — материя, қозғалыс және өзара әрекеттестік туралы тұтас түсінік.\n• Механика, электродинамика, кванттық физика табиғаттың әртүрлі деңгейлерін сипаттайды.\n• Астрономия біздің Ғаламдағы орнымызды анықтайды: Жер — Күн жүйесінің планетасы, Галактиканың миллиардтаған жұлдыздарының бірі, миллиардтаған галактикалардың бірі.\n• Ғылыми дүниетаным тәжірибе, эксперимент және теориялардың тексерілуіне негізделген."
  },
  "p43": {
    "title": "§43. Экологическая культура",
    "titleEn": "§43. Environmental culture",
    "titleKk": "§43. Экологиялық мәдениет",
    "ru": "## Экологическая культура\n• Технический прогресс влияет на окружающую среду: выбросы, отходы, радиация.\n• Атомная энергетика требует строгой безопасности; трагедия Семипалатинского полигона — урок для Казахстана.\n• Парниковый эффект связан с ростом содержания углекислого газа.\n• Экологическая культура — ответственное отношение каждого человека к природе: энергосбережение, сортировка отходов, защита водоёмов.\n• Возобновляемые источники энергии (солнце, ветер) особенно актуальны для Казахстана.",
    "en": "## Environmental Culture\n• Technical progress affects the environment: emissions, waste, radiation.\n• Nuclear energy requires strict safety; the tragedy of the Semipalatinsk test site is a lesson for Kazakhstan.\n• The greenhouse effect is associated with the increase in carbon dioxide content.\n• Environmental culture is the responsible attitude of each person toward nature: energy saving, waste sorting, protection of water bodies.\n• Renewable energy sources (sun, wind) are especially relevant for Kazakhstan.",
    "kk": "## Экологиялық мәдениет\n• Техникалық прогресс қоршаған ортаға әсер етеді: шығарындылар, қалдықтар, радиация.\n• Атом энергетикасы қатаң қауіпсіздікті талап етеді; Семей полигонының трагедиясы Қазақстанға сабақ.\n• Жылу қалқанының әсері көмірқышқыл газының мөлшерінің өсуімен байланысты.\n• Экологиялық мәдениет — әр адамның табиғатқа жауапкершілікпен қарауы: энергияны үнемдеу, қалдықтарды сұрыптау, су айдындарын қорғау.\n• Қалпына келетін энергия көздері (күн, жел) Қазақстан үшін әсіресе өзекті."
  }
};
window.SECTION_THEMES = {
  "bonus": {
    "bg": [
      "#1a0f00",
      "#0a1235"
    ],
    "stars": 140,
    "starColor": "#ffd54f",
    "hues": [
      30,
      45
    ],
    "dome": "#ffb300",
    "labelKey": "themeBonus"
  },
  "mechanics": {
    "bg": [
      "#0a1235",
      "#001a33"
    ],
    "stars": 180,
    "starColor": "#80deea",
    "hues": [
      195,
      210
    ],
    "dome": "#00acc1",
    "labelKey": "themeMechanics"
  },
  "astronomy": {
    "bg": [
      "#0d0a2e",
      "#1a0a35"
    ],
    "stars": 320,
    "starColor": "#b39ddb",
    "hues": [
      260,
      285
    ],
    "dome": "#7c4dff",
    "labelKey": "themeAstronomy"
  },
  "dynamics": {
    "bg": [
      "#051a0f",
      "#0a2e1a"
    ],
    "stars": 160,
    "starColor": "#a5d6a7",
    "hues": [
      120,
      140
    ],
    "dome": "#00c853",
    "labelKey": "themeDynamics"
  },
  "energy": {
    "bg": [
      "#1a1200",
      "#2e1f00"
    ],
    "stars": 130,
    "starColor": "#ffcc80",
    "hues": [
      25,
      45
    ],
    "dome": "#ff8f00",
    "labelKey": "themeEnergy"
  },
  "oscillations": {
    "bg": [
      "#0a1e2e",
      "#0d2b36"
    ],
    "stars": 210,
    "starColor": "#80cbc4",
    "hues": [
      175,
      195
    ],
    "dome": "#00acc1",
    "labelKey": "themeOscillations"
  },
  "em": {
    "bg": [
      "#1a0a1e",
      "#2e0a2e"
    ],
    "stars": 260,
    "starColor": "#f48fb1",
    "hues": [
      280,
      320
    ],
    "dome": "#d81b60",
    "labelKey": "themeEM"
  },
  "atomic": {
    "bg": [
      "#1a0a0a",
      "#2e0a0a"
    ],
    "stars": 190,
    "starColor": "#ef9a9a",
    "hues": [
      0,
      20
    ],
    "dome": "#ff3d00",
    "labelKey": "themeAtomic"
  },
  "lab": {
    "bg": [
      "#1a0a1a",
      "#1e0a2e"
    ],
    "stars": 110,
    "starColor": "#ce93d8",
    "hues": [
      300,
      330
    ],
    "dome": "#e040fb",
    "labelKey": "themeLab"
  }
};
window.GRADE_LOCALES_PATCH = {
  "ru": {
    "titleLine2": "ЩИТ ЗЕМЛИ: ОРБИТА-9",
    "subtitle": "Защити Землю от космических угроз знаниями физики 9 класса",
    "level1Name": "🛡 Допуск к полётам: техника безопасности",
    "level2Name": "§1. Механическое движение",
    "level3Name": "§2. Векторы и действия над ними",
    "level4Name": "§3. Равнопеременное движение, ускорение",
    "level5Name": "§4. Скорость и перемещение при равноускоренном движении",
    "level6Name": "§5. Свободное падение тел",
    "level7Name": "§6. Криволинейное движение. Движение по окружности",
    "level8Name": "§7. Центростремительное ускорение",
    "level9Name": "§8. Звёздное небо",
    "level10Name": "§9. Небесная сфера, системы небесных координат",
    "level11Name": "§10. Видимое движение светил. Местное, поясное и всемирное время",
    "level12Name": "§11. Законы движения планет Солнечной системы",
    "level13Name": "§12. Определение расстояний в астрономии методом параллакса",
    "level14Name": "§13. Первый закон Ньютона. Инерциальные системы отсчёта",
    "level15Name": "§14. Силы в механике",
    "level16Name": "§15. Второй закон Ньютона, масса",
    "level17Name": "§16. Третий закон Ньютона",
    "level18Name": "§17. Закон всемирного тяготения",
    "level19Name": "§18. Вес тела, невесомость",
    "level20Name": "§19. Движение тела под действием силы тяжести. Спутники",
    "level21Name": "§20. Импульс тела и импульс силы. Закон сохранения импульса",
    "level22Name": "§21. Реактивное движение",
    "level23Name": "§22. Механическая работа и энергия",
    "level24Name": "§23. Закон сохранения и превращения энергии",
    "level25Name": "§24. Колебательное движение",
    "level26Name": "§25. Превращение энергии при колебаниях. Уравнение колебаний",
    "level27Name": "§26. Колебания математического и пружинного маятников",
    "level28Name": "§27. Свободные и вынужденные колебания, резонанс",
    "level29Name": "§28. Свободные электромагнитные колебания",
    "level30Name": "§29. Волновое движение",
    "level31Name": "§30. Звук, характеристики звука, резонанс, эхо",
    "level32Name": "§31. Электромагнитные волны. Шкала электромагнитных волн",
    "level33Name": "§32. Тепловое излучение",
    "level34Name": "§33. Гипотеза Планка о световых квантах. Фотоэффект",
    "level35Name": "§34. Рентгеновское излучение",
    "level36Name": "§35. Радиоактивность. Природа радиоактивных излучений",
    "level37Name": "§36. Опыт Резерфорда, строение атома",
    "level38Name": "§37. Ядерное взаимодействие. Дефект масс, энергия связи",
    "level39Name": "§38. Ядерные реакции, закон радиоактивного распада",
    "level40Name": "§39. Деление тяжёлых ядер, цепная реакция. Ядерный реактор",
    "level41Name": "§40. Термоядерные реакции. Радиоизотопы, защита от радиации",
    "level42Name": "§41. Элементарные частицы",
    "level43Name": "§42. Мировоззренческое значение физики и астрономии",
    "level44Name": "§43. Экологическая культура",
    "level45Name": "🔬 Лаб. №1: Ускорение при равноускоренном движении",
    "level46Name": "🔬 Лаб. №2: Движение тела, брошенного горизонтально",
    "level47Name": "🔬 Лаб. №3: Ускорение свободного падения (маятник)",
    "level48Name": "🔬 Лаб. №4: Скорость поверхностной волны",
    "level49Name": "🔬 Лаб. №9: Равновесие рычага",
    "level50Name": "🔬 Лаб. №10: КПД наклонной плоскости",
    "levelSafetyDesc": "⚠ Правила безопасности на уроке физики (бонусный)",
  },
  "en": {
    "titleLine2": "ORBITA-9: SHIELD OF EARTH",
    "subtitle": "Defend the Earth with 9th-grade physics knowledge",
    "level1Name": "🛡 Flight Clearance: Safety Rules",
    "level2Name": "§1. Mechanical motion",
    "level3Name": "§2. Vectors and operations on them",
    "level4Name": "§3. Uniformly variable motion, acceleration",
    "level5Name": "§4. Speed and displacement in uniformly accelerated motion",
    "level6Name": "§5. Free fall of bodies",
    "level7Name": "§6. Curvilinear motion. Circular motion",
    "level8Name": "§7. Centripetal acceleration",
    "level9Name": "§8. Starry Sky",
    "level10Name": "§9. Celestial sphere, celestial coordinate systems",
    "level11Name": "§10. Apparent motion of celestial bodies. Local, zone, and universal time",
    "level12Name": "§11. Laws of motion of the planets of the Solar System",
    "level13Name": "§12. Determining distances in astronomy by the parallax method",
    "level14Name": "§13. Newton's first law. Inertial frames of reference",
    "level15Name": "§14. Forces in mechanics",
    "level16Name": "§15. Newton's second law, mass",
    "level17Name": "§16. Newton's third law",
    "level18Name": "§17. Law of universal gravitation",
    "level19Name": "§18. Body weight, weightlessness",
    "level20Name": "§19. Motion of a body under the influence of gravity. Satellites",
    "level21Name": "§20. Momentum of a body and momentum of a force. Law of conservation of momentum",
    "level22Name": "§21. Reactive motion",
    "level23Name": "§22. Mechanical work and energy",
    "level24Name": "§23. Law of conservation and transformation of energy",
    "level25Name": "§24. Oscillatory motion",
    "level26Name": "§25. Energy transformation in oscillations. Oscillation equation",
    "level27Name": "§26. Oscillations of mathematical and spring pendulums",
    "level28Name": "§27. Free and forced oscillations, resonance",
    "level29Name": "§28. Free electromagnetic oscillations",
    "level30Name": "§29. Wave motion",
    "level31Name": "§30. Sound, characteristics of sound, resonance, echo",
    "level32Name": "§31. Electromagnetic waves. Electromagnetic wave scale",
    "level33Name": "§32. Thermal radiation",
    "level34Name": "§33. Planck's hypothesis about light quanta. Photoelectric effect",
    "level35Name": "§34. X-ray radiation",
    "level36Name": "§35. Radioactivity. Nature of radioactive emissions",
    "level37Name": "§36. Rutherford experiment, atomic structure",
    "level38Name": "§37. Nuclear interaction. Mass defect, binding energy",
    "level39Name": "§38. Nuclear reactions, law of radioactive decay",
    "level40Name": "§39. Fission of heavy nuclei, chain reaction. Nuclear reactor",
    "level41Name": "§40. Thermonuclear reactions. Radioisotopes, radiation protection",
    "level42Name": "§41. Elementary particles",
    "level43Name": "§42. Worldview significance of physics and astronomy",
    "level44Name": "§43. Environmental culture",
    "level45Name": "🔬 Lab #1: Acceleration in uniformly accelerated motion",
    "level46Name": "🔬 Lab #2: Motion of a body thrown horizontally",
    "level47Name": "🔬 Lab #3: Acceleration due to gravity (pendulum)",
    "level48Name": "🔬 Lab #4: Speed of a surface wave",
    "level49Name": "🔬 Lab #9: Lever Equilibrium",
    "level50Name": "🔬 Lab #10: Efficiency of an Inclined Plane",
    "levelSafetyDesc": "⚠ Physics lab safety rules (bonus)",
  },
  "kk": {
    "titleLine2": "ЖЕР ҚАЛҚАНЫ: ОРБИТА-9",
    "subtitle": "9-сынып физикасы білімімен Жерді ғарыштық қауіптерден қорға",
    "level1Name": "🛡 Ұшуға рұқсат: қауіпсіздік ережелері",
    "level2Name": "§1. Механикалық қозғалыс",
    "level3Name": "§2. Векторлар және олармен әрекеттер",
    "level4Name": "§3. Тең үдемелі қозғалыс, үдеу",
    "level5Name": "§4. Тең үдеумен қозғалыста жылдамдық пен орын ауыстыру",
    "level6Name": "§5. Денелердің еркін түсуі",
    "level7Name": "§6. Қисық сызықты қозғалыс. Шеңбер бойымен қозғалыс",
    "level8Name": "§7. Центрге тартқыш үдеу",
    "level9Name": "§8. Жұлдызды аспан",
    "level10Name": "§9. Аспан сферасы, аспан координаталар жүйесі",
    "level11Name": "§10. Аспан денелерінің көрінетін қозғалысы. Жергілікті, белдеулік және дүниежүзілік уақыт",
    "level12Name": "§11. Күн жүйесіндегі планеталардың қозғалыс заңдары",
    "level13Name": "§12. Астрономияда параллакс әдісімен қашықтықтарды анықтау",
    "level14Name": "§13. Ньютонның бірінші заңы. Инерциялық санау жүйелері",
    "level15Name": "§14. Механикадағы күштер",
    "level16Name": "§15. Ньютонның екінші заңы, масса",
    "level17Name": "§16. Ньютонның үшінші заңы",
    "level18Name": "§17. Ғаламдық тартылу заңы",
    "level19Name": "§18. Дененің салмағы, салмақсыздық",
    "level20Name": "§19. Дененің ауырлық күшінің әрекетімен қозғалысы. Жасанды серіктер",
    "level21Name": "§20. Дененің импульсі және күш импульсі. Импульстің сақталу заңы",
    "level22Name": "§21. Реактивті қозғалыс",
    "level23Name": "§22. Механикалық жұмыс және энергия",
    "level24Name": "§23. Энергияны сақтау және түрлендіру заңы",
    "level25Name": "§24. Тербелмелі қозғалыс",
    "level26Name": "§25. Тербелістер кезіндегі энергияның түрленуі. Тербеліс теңдеуі",
    "level27Name": "§26. Математикалық және серіппелі маятниктердің тербелістері",
    "level28Name": "§27. Еркін және мәжбүрлі тербелістер, резонанс",
    "level29Name": "§28. Еркін электромагниттік тербелістер",
    "level30Name": "§29. Толқындық қозғалыс",
    "level31Name": "§30. Дыбыс, дыбыстың сипаттары, резонанс, эхо",
    "level32Name": "§31. Электромагниттік толқындар. Электромагниттік толқындардың шкаласы",
    "level33Name": "§32. Жылулық сәулелену",
    "level34Name": "§33. Планктің жарық кванттары туралы гипотезасы. Фотоэффект",
    "level35Name": "§34. Рентген сәулеленуі",
    "level36Name": "§35. Радиоактивтік. Радиоактивтік сәулеленудің табиғаты",
    "level37Name": "§36. Резерфорд тәжірибесі, атомның құрылысы",
    "level38Name": "§37. Ядролық өзара әрекеттесу. Масса ақауы, байланыс энергиясы",
    "level39Name": "§38. Ядролық реакциялар, радиоактивтік ыдырап кету заңы",
    "level40Name": "§39. Ауыр ядролардың бөлінуі, тізбекті реакция. Ядролық реактор",
    "level41Name": "§40. Термоядролық реакциялар. Радиоизотоптар, радиациядан қорғау",
    "level42Name": "§41. Элементарлық бөлшектер",
    "level43Name": "§42. Физика мен астрономияның дүниетанымдық мәні",
    "level44Name": "§43. Экологиялық мәдениет",
    "level45Name": "🔬 Зерт. №1: Бірқалыпты үдемелі қозғалыстың үдеуі",
    "level46Name": "🔬 Зерт. №2: Көлденең лақтырылған дененің қозғалысы",
    "level47Name": "🔬 Зерт. №3: Еркін түсу үдеуі (маятник)",
    "level48Name": "🔬 Зерт. №4: Беттік толқынның жылдамдығы",
    "level49Name": "🔬 Зерт. №9: Иінтірек тепе-теңдігі",
    "level50Name": "🔬 Зерт. №10: Көлбеу жазықтықтың ПӘК-і",
    "levelSafetyDesc": "⚠ Физика кабинетінде қауіпсіздік ережелері (бонус)",
  }
};
