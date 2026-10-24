/* ===== Задания новых типов, 8 класс =====
   Сгенерировано tools/gen-task-types.js — правки вносить в генератор.
   Типы: multi-select (отметь все), short-answer (короткий ответ),
   matching (сопоставление величины и единицы СИ).
   Всего заданий: 171 (набор зависит от того, каких типов не хватает в банке уровня). */
const TASKS_DATABASE_TYPES = [
 {
  "id": "t8_l1_safety_ms",
  "type": "multi-select",
  "topic": "safety",
  "difficulty": 1,
  "question": {
   "ru": "Отметь все единицы, которые входят в Международную систему единиц (СИ).",
   "en": "Select all units that belong to the International System of Units (SI).",
   "kk": "Халықаралық бірліктер жүйесіне (ХБЖ) кіретін барлық бірліктерді белгіле."
  },
  "options": {
   "ru": [
    "литр",
    "кельвин",
    "секунда",
    "метр",
    "градус Цельсия"
   ],
   "en": [
    "litre",
    "kelvin",
    "second",
    "metre",
    "degree Celsius"
   ],
   "kk": [
    "литр",
    "кельвин",
    "секунд",
    "метр",
    "Цельсий градусы"
   ]
  },
  "correctAnswer": [
   1,
   2,
   3
  ],
  "hint": {
   "ru": "В СИ входят метр, килограмм, секунда, ампер, кельвин и производные от них. Литр и градус Цельсия — внесистемные.",
   "en": "SI includes metre, kilogram, second, ampere, kelvin and their derivatives. Litre and degree Celsius are non-SI.",
   "kk": "ХБЖ-ға метр, килограмм, секунд, ампер, кельвин және туынды бірліктер кіреді. Литр мен Цельсий градусы — жүйеден тыс."
  },
  "explanation": {
   "ru": "Единицы СИ: метр, кельвин, секунда. Внесистемные: градус Цельсия, литр.",
   "en": "SI units: metre, kelvin, second. Non-SI: degree Celsius, litre.",
   "kk": "ХБЖ бірліктері: метр, кельвин, секунд. Жүйеден тыс: Цельсий градусы, литр."
  }
 },
 {
  "id": "t8_l1_safety_sa",
  "type": "short-answer",
  "topic": "safety",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «количество теплоты»? Запиши единицу.",
   "en": "Which SI unit is used to measure «amount of heat»? Write the unit.",
   "kk": "«жылу мөлшері» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «количество теплоты» — джоуль (Дж).",
   "en": "The SI unit of «amount of heat» is joule (J).",
   "kk": "«жылу мөлшері» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l1_safety_fb",
  "type": "fill-blank",
  "topic": "safety",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «температура» — ___.",
   "en": "The unit of «temperature» is ___.",
   "kk": "«температура» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "кельвин (К)",
    "кельвин",
    "К",
    "к",
    "k",
    "kelvin"
   ],
   "en": [
    "kelvin (K)",
    "kelvin",
    "K",
    "k"
   ],
   "kk": [
    "кельвин (К)",
    "кельвин",
    "К",
    "к",
    "k"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «температура» — кельвин (К).",
   "en": "The SI unit of «temperature» is kelvin (K).",
   "kk": "«температура» шамасының ХБЖ бірлігі — кельвин (К)."
  }
 },
 {
  "id": "t8_l1_safety_num",
  "type": "numeric",
  "topic": "safety",
  "difficulty": 1,
  "question": {
   "ru": "Переведи в единицы СИ: 40 см = ___ м.",
   "en": "Convert to SI units: 40 cm = ___ m.",
   "kk": "ХБЖ-ға келтір: 40 см = ___ м."
  },
  "correctAnswer": 0.4,
  "tolerance": 0.001,
  "hint": {
   "ru": "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
   "en": "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
   "kk": "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
  },
  "explanation": {
   "ru": "Ответ: 0.4.",
   "en": "Answer: 0.4.",
   "kk": "Жауабы: 0.4."
  }
 },
 {
  "id": "t8_l1_safety_mt",
  "type": "matching",
  "topic": "safety",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Техника безопасности» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab Safety» with their SI units.",
   "kk": "«Қауіпсіздік техникасы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "время",
     "температура"
    ],
    "en": [
     "mass",
     "time",
     "temperature"
    ],
    "kk": [
     "масса",
     "уақыт",
     "температура"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "кельвин (К)",
     "килограмм (кг)"
    ],
    "en": [
     "second (s)",
     "kelvin (K)",
     "kilogram (kg)"
    ],
    "kk": [
     "секунд (с)",
     "кельвин (К)",
     "килограмм (кг)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: масса — килограмм (кг); время — секунда (с); температура — кельвин (К).",
   "en": "Correct pairs: mass — kilogram (kg); time — second (s); temperature — kelvin (K).",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); уақыт — секунд (с); температура — кельвин (К)."
  }
 },
 {
  "id": "t8_l2_p1_ms",
  "type": "multi-select",
  "topic": "p1",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Тепловое движение, броуновское движение, диффузия».",
   "en": "Select all quantities studied in the topic «Thermal motion, Brownian motion, diffusion».",
   "kk": "«Жылулық қозғалыс, броундық қозғалыс, диффузия» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электрический заряд",
    "электроёмкость",
    "удельная теплота парообразования",
    "объём"
   ],
   "en": [
    "electric charge",
    "capacitance",
    "specific heat of vaporization",
    "volume"
   ],
   "kk": [
    "электр заряды",
    "электр сыйымдылығы",
    "меншікті булану жылуы",
    "көлем"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельная теплота парообразования, объём.",
   "en": "More than one option is correct — select them all. specific heat of vaporization, volume.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті булану жылуы, көлем."
  }
 },
 {
  "id": "t8_l2_p1_sa",
  "type": "short-answer",
  "topic": "p1",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «удельная теплота парообразования»? Запиши единицу.",
   "en": "Which SI unit is used to measure «specific heat of vaporization»? Write the unit.",
   "kk": "«меншікті булану жылуы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "дж/кг",
    "j/kg"
   ],
   "en": [
    "j/kg"
   ],
   "kk": [
    "дж/кг",
    "j/kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплота парообразования» — Дж/кг.",
   "en": "The SI unit of «specific heat of vaporization» is J/kg.",
   "kk": "«меншікті булану жылуы» шамасының ХБЖ бірлігі — Дж/кг."
  }
 },
 {
  "id": "t8_l2_p1_num",
  "type": "numeric",
  "topic": "p1",
  "difficulty": 1,
  "question": {
   "ru": "Переведи в единицы СИ: 5 кПа = ___ Па.",
   "en": "Convert to SI units: 5 kPa = ___ Pa.",
   "kk": "ХБЖ-ға келтір: 5 кПа = ___ Па."
  },
  "correctAnswer": 5000,
  "tolerance": 1,
  "hint": {
   "ru": "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
   "en": "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
   "kk": "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
  },
  "explanation": {
   "ru": "Ответ: 5000.",
   "en": "Answer: 5000.",
   "kk": "Жауабы: 5000."
  }
 },
 {
  "id": "t8_l2_p1_mt",
  "type": "matching",
  "topic": "p1",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Тепловое движение, броуновское движение, диффузия» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Thermal motion, Brownian motion, diffusion» with their SI units.",
   "kk": "«Жылулық қозғалыс, броундық қозғалыс, диффузия» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "удельная теплоёмкость",
     "количество теплоты",
     "КПД теплового двигателя"
    ],
    "en": [
     "specific heat capacity",
     "amount of heat",
     "efficiency of a heat engine"
    ],
    "kk": [
     "меншікті жылу сыйымдылығы",
     "жылу мөлшері",
     "жылу қозғалтқышының ПӘК"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "Дж/(кг·°C)",
     "процент (%)"
    ],
    "en": [
     "joule (J)",
     "J/(kg·°C)",
     "percent (%)"
    ],
    "kk": [
     "джоуль (Дж)",
     "Дж/(кг·°C)",
     "процент (%)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: удельная теплоёмкость — Дж/(кг·°C); количество теплоты — джоуль (Дж); КПД теплового двигателя — процент (%).",
   "en": "Correct pairs: specific heat capacity — J/(kg·°C); amount of heat — joule (J); efficiency of a heat engine — percent (%).",
   "kk": "Дұрыс жұптар: меншікті жылу сыйымдылығы — Дж/(кг·°C); жылу мөлшері — джоуль (Дж); жылу қозғалтқышының ПӘК — процент (%)."
  }
 },
 {
  "id": "t8_l3_p2_ms",
  "type": "multi-select",
  "topic": "p2",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Температура, способы её измерения, температурные шкалы».",
   "en": "Select all quantities studied in the topic «Temperature, methods of measurement, temperature scales».",
   "kk": "«Температура, өлшеу әдістері, температура шкалалары» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "температура",
    "магнитный поток",
    "работа газа",
    "магнитная индукция"
   ],
   "en": [
    "temperature",
    "magnetic flux",
    "work done by a gas",
    "magnetic flux density"
   ],
   "kk": [
    "температура",
    "магнит ағыны",
    "газ жұмысы",
    "магнит индукциясы"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. работа газа, температура.",
   "en": "More than one option is correct — select them all. work done by a gas, temperature.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. газ жұмысы, температура."
  }
 },
 {
  "id": "t8_l3_p2_sa",
  "type": "short-answer",
  "topic": "p2",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «время»? Запиши единицу.",
   "en": "Which SI unit is used to measure «time»? Write the unit.",
   "kk": "«уақыт» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "секунда",
    "с",
    "s",
    "сек"
   ],
   "en": [
    "second",
    "s",
    "sec"
   ],
   "kk": [
    "секунд",
    "с",
    "s",
    "сек"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «время» — секунда (с).",
   "en": "The SI unit of «time» is second (s).",
   "kk": "«уақыт» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t8_l3_p2_mt",
  "type": "matching",
  "topic": "p2",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Температура, способы её измерения, температурные шкалы» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Temperature, methods of measurement, temperature scales» with their SI units.",
   "kk": "«Температура, өлшеу әдістері, температура шкалалары» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "температура",
     "КПД теплового двигателя",
     "внутренняя энергия"
    ],
    "en": [
     "temperature",
     "efficiency of a heat engine",
     "internal energy"
    ],
    "kk": [
     "температура",
     "жылу қозғалтқышының ПӘК",
     "ішкі энергия"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "кельвин (К)",
     "процент (%)"
    ],
    "en": [
     "joule (J)",
     "kelvin (K)",
     "percent (%)"
    ],
    "kk": [
     "джоуль (Дж)",
     "кельвин (К)",
     "процент (%)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: температура — кельвин (К); КПД теплового двигателя — процент (%); внутренняя энергия — джоуль (Дж).",
   "en": "Correct pairs: temperature — kelvin (K); efficiency of a heat engine — percent (%); internal energy — joule (J).",
   "kk": "Дұрыс жұптар: температура — кельвин (К); жылу қозғалтқышының ПӘК — процент (%); ішкі энергия — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l4_p3_ms",
  "type": "multi-select",
  "topic": "p3",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Внутренняя энергия. Способы изменения внутренней энергии».",
   "en": "Select all quantities studied in the topic «Internal energy. Ways of changing internal energy».",
   "kk": "«Ішкі энергия. Ішкі энергияны өзгерту тәсілдері» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила Ампера",
    "магнитная индукция",
    "время",
    "удельная теплоёмкость"
   ],
   "en": [
    "Ampere force",
    "magnetic flux density",
    "time",
    "specific heat capacity"
   ],
   "kk": [
    "Ампер күші",
    "магнит индукциясы",
    "уақыт",
    "меншікті жылу сыйымдылығы"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельная теплоёмкость, время.",
   "en": "More than one option is correct — select them all. specific heat capacity, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті жылу сыйымдылығы, уақыт."
  }
 },
 {
  "id": "t8_l4_p3_sa",
  "type": "short-answer",
  "topic": "p3",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «КПД теплового двигателя»? Запиши единицу.",
   "en": "Which SI unit is used to measure «efficiency of a heat engine»? Write the unit.",
   "kk": "«жылу қозғалтқышының ПӘК» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "процент",
    "%",
    "процентов"
   ],
   "en": [
    "percent",
    "%",
    "per cent"
   ],
   "kk": [
    "процент",
    "%",
    "пайыз"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «КПД теплового двигателя» — процент (%).",
   "en": "The SI unit of «efficiency of a heat engine» is percent (%).",
   "kk": "«жылу қозғалтқышының ПӘК» шамасының ХБЖ бірлігі — процент (%)."
  }
 },
 {
  "id": "t8_l4_p3_mt",
  "type": "matching",
  "topic": "p3",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Внутренняя энергия. Способы изменения внутренней энергии» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Internal energy. Ways of changing internal energy» with their SI units.",
   "kk": "«Ішкі энергия. Ішкі энергияны өзгерту тәсілдері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "внутренняя энергия",
     "масса",
     "температура"
    ],
    "en": [
     "internal energy",
     "mass",
     "temperature"
    ],
    "kk": [
     "ішкі энергия",
     "масса",
     "температура"
    ]
   },
   "right": {
    "ru": [
     "килограмм (кг)",
     "кельвин (К)",
     "джоуль (Дж)"
    ],
    "en": [
     "kilogram (kg)",
     "kelvin (K)",
     "joule (J)"
    ],
    "kk": [
     "килограмм (кг)",
     "кельвин (К)",
     "джоуль (Дж)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: внутренняя энергия — джоуль (Дж); масса — килограмм (кг); температура — кельвин (К).",
   "en": "Correct pairs: internal energy — joule (J); mass — kilogram (kg); temperature — kelvin (K).",
   "kk": "Дұрыс жұптар: ішкі энергия — джоуль (Дж); масса — килограмм (кг); температура — кельвин (К)."
  }
 },
 {
  "id": "t8_l5_p4_ms",
  "type": "multi-select",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Теплопроводность, конвекция, излучение».",
   "en": "Select all quantities studied in the topic «Thermal conduction, convection, radiation».",
   "kk": "«Жылуөткізгіштік, конвекция, сәуле шығару» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "электроёмкость",
    "масса",
    "фокусное расстояние линзы"
   ],
   "en": [
    "efficiency of a heat engine",
    "capacitance",
    "mass",
    "focal length of a lens"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "электр сыйымдылығы",
    "масса",
    "линзаның фокустық қашықтығы"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. КПД теплового двигателя, масса.",
   "en": "More than one option is correct — select them all. efficiency of a heat engine, mass.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылу қозғалтқышының ПӘК, масса."
  }
 },
 {
  "id": "t8_l5_p4_sa",
  "type": "short-answer",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «работа газа»? Запиши единицу.",
   "en": "Which SI unit is used to measure «work done by a gas»? Write the unit.",
   "kk": "«газ жұмысы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «работа газа» — джоуль (Дж).",
   "en": "The SI unit of «work done by a gas» is joule (J).",
   "kk": "«газ жұмысы» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l5_p4_mt",
  "type": "matching",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Теплопроводность, конвекция, излучение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Thermal conduction, convection, radiation» with their SI units.",
   "kk": "«Жылуөткізгіштік, конвекция, сәуле шығару» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "внутренняя энергия",
     "температура",
     "удельная теплоёмкость"
    ],
    "en": [
     "internal energy",
     "temperature",
     "specific heat capacity"
    ],
    "kk": [
     "ішкі энергия",
     "температура",
     "меншікті жылу сыйымдылығы"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "Дж/(кг·°C)",
     "кельвин (К)"
    ],
    "en": [
     "joule (J)",
     "J/(kg·°C)",
     "kelvin (K)"
    ],
    "kk": [
     "джоуль (Дж)",
     "Дж/(кг·°C)",
     "кельвин (К)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    2
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: внутренняя энергия — джоуль (Дж); температура — кельвин (К); удельная теплоёмкость — Дж/(кг·°C).",
   "en": "Correct pairs: internal energy — joule (J); temperature — kelvin (K); specific heat capacity — J/(kg·°C).",
   "kk": "Дұрыс жұптар: ішкі энергия — джоуль (Дж); температура — кельвин (К); меншікті жылу сыйымдылығы — Дж/(кг·°C)."
  }
 },
 {
  "id": "t8_l6_p5_ms",
  "type": "multi-select",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Теплопередача в природе и технике».",
   "en": "Select all quantities studied in the topic «Heat transfer in nature and technology».",
   "kk": "«Табиғаттағы және техникадағы жылу берілу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа электрического тока",
    "электрический заряд",
    "удельная теплота плавления",
    "работа газа"
   ],
   "en": [
    "work of electric current",
    "electric charge",
    "specific heat of fusion",
    "work done by a gas"
   ],
   "kk": [
    "электр тогының жұмысы",
    "электр заряды",
    "меншікті балқу жылуы",
    "газ жұмысы"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. работа газа, удельная теплота плавления.",
   "en": "More than one option is correct — select them all. work done by a gas, specific heat of fusion.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. газ жұмысы, меншікті балқу жылуы."
  }
 },
 {
  "id": "t8_l6_p5_sa",
  "type": "short-answer",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «объём»? Запиши единицу.",
   "en": "Which SI unit is used to measure «volume»? Write the unit.",
   "kk": "«көлем» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м3",
    "м³",
    "кубический метр",
    "m3"
   ],
   "en": [
    "m3",
    "m³",
    "cubic metre",
    "cubic meter"
   ],
   "kk": [
    "м3",
    "м³",
    "текше метр"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «объём» — кубический метр (м³).",
   "en": "The SI unit of «volume» is cubic metre (m³).",
   "kk": "«көлем» шамасының ХБЖ бірлігі — текше метр (м³)."
  }
 },
 {
  "id": "t8_l6_p5_num",
  "type": "numeric",
  "topic": "p5",
  "difficulty": 1,
  "question": {
   "ru": "Переведи в единицы СИ: 3 мин = ___ с.",
   "en": "Convert to SI units: 3 min = ___ s.",
   "kk": "ХБЖ-ға келтір: 3 мин = ___ с."
  },
  "correctAnswer": 180,
  "tolerance": 0.5,
  "hint": {
   "ru": "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
   "en": "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
   "kk": "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
  },
  "explanation": {
   "ru": "Ответ: 180.",
   "en": "Answer: 180.",
   "kk": "Жауабы: 180."
  }
 },
 {
  "id": "t8_l6_p5_mt",
  "type": "matching",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Теплопередача в природе и технике» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Heat transfer in nature and technology» with their SI units.",
   "kk": "«Табиғаттағы және техникадағы жылу берілу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "объём",
     "количество теплоты",
     "удельная теплота парообразования"
    ],
    "en": [
     "volume",
     "amount of heat",
     "specific heat of vaporization"
    ],
    "kk": [
     "көлем",
     "жылу мөлшері",
     "меншікті булану жылуы"
    ]
   },
   "right": {
    "ru": [
     "кубический метр (м³)",
     "джоуль (Дж)",
     "Дж/кг"
    ],
    "en": [
     "cubic metre (m³)",
     "joule (J)",
     "J/kg"
    ],
    "kk": [
     "текше метр (м³)",
     "джоуль (Дж)",
     "Дж/кг"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: объём — кубический метр (м³); количество теплоты — джоуль (Дж); удельная теплота парообразования — Дж/кг.",
   "en": "Correct pairs: volume — cubic metre (m³); amount of heat — joule (J); specific heat of vaporization — J/kg.",
   "kk": "Дұрыс жұптар: көлем — текше метр (м³); жылу мөлшері — джоуль (Дж); меншікті булану жылуы — Дж/кг."
  }
 },
 {
  "id": "t8_l7_p6_ms",
  "type": "multi-select",
  "topic": "p6",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Роль тепловых явлений в жизни живых организмов».",
   "en": "Select all quantities studied in the topic «The role of thermal phenomena in the life of living organisms».",
   "kk": "«Тірі ағзалар өміріндегі жылулық құбылыстардың рөлі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "мощность электрического тока",
    "масса",
    "температура",
    "удельное сопротивление"
   ],
   "en": [
    "power of electric current",
    "mass",
    "temperature",
    "resistivity"
   ],
   "kk": [
    "электр тогының қуаты",
    "масса",
    "температура",
    "меншікті кедергі"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. масса, температура.",
   "en": "More than one option is correct — select them all. mass, temperature.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. масса, температура."
  }
 },
 {
  "id": "t8_l7_p6_sa",
  "type": "short-answer",
  "topic": "p6",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «удельная теплота сгорания топлива»? Запиши единицу.",
   "en": "Which SI unit is used to measure «specific heat of fuel combustion»? Write the unit.",
   "kk": "«отынның меншікті жану жылуы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "дж/кг",
    "j/kg"
   ],
   "en": [
    "j/kg",
    "j·kg⁻¹"
   ],
   "kk": [
    "дж/кг",
    "j/kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплота сгорания топлива» — Дж/кг.",
   "en": "The SI unit of «specific heat of fuel combustion» is J/kg.",
   "kk": "«отынның меншікті жану жылуы» шамасының ХБЖ бірлігі — Дж/кг."
  }
 },
 {
  "id": "t8_l7_p6_num",
  "type": "numeric",
  "topic": "p6",
  "difficulty": 1,
  "question": {
   "ru": "Переведи в единицы СИ: 250 г = ___ кг.",
   "en": "Convert to SI units: 250 g = ___ kg.",
   "kk": "ХБЖ-ға келтір: 250 г = ___ кг."
  },
  "correctAnswer": 0.25,
  "tolerance": 0.001,
  "hint": {
   "ru": "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
   "en": "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
   "kk": "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
  },
  "explanation": {
   "ru": "Ответ: 0.25.",
   "en": "Answer: 0.25.",
   "kk": "Жауабы: 0.25."
  }
 },
 {
  "id": "t8_l7_p6_mt",
  "type": "matching",
  "topic": "p6",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Роль тепловых явлений в жизни живых организмов» и их единицы измерения в СИ.",
   "en": "Match the quantities from «The role of thermal phenomena in the life of living organisms» with their SI units.",
   "kk": "«Тірі ағзалар өміріндегі жылулық құбылыстардың рөлі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "количество теплоты",
     "удельная теплота плавления"
    ],
    "en": [
     "mass",
     "amount of heat",
     "specific heat of fusion"
    ],
    "kk": [
     "масса",
     "жылу мөлшері",
     "меншікті балқу жылуы"
    ]
   },
   "right": {
    "ru": [
     "Дж/кг",
     "килограмм (кг)",
     "джоуль (Дж)"
    ],
    "en": [
     "J/kg",
     "kilogram (kg)",
     "joule (J)"
    ],
    "kk": [
     "Дж/кг",
     "килограмм (кг)",
     "джоуль (Дж)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: масса — килограмм (кг); количество теплоты — джоуль (Дж); удельная теплота плавления — Дж/кг.",
   "en": "Correct pairs: mass — kilogram (kg); amount of heat — joule (J); specific heat of fusion — J/kg.",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); жылу мөлшері — джоуль (Дж); меншікті балқу жылуы — Дж/кг."
  }
 },
 {
  "id": "t8_l8_p7_ms",
  "type": "multi-select",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Количество теплоты, удельная теплоёмкость вещества».",
   "en": "Select all quantities studied in the topic «Quantity of heat, specific heat capacity of a substance».",
   "kk": "«Жылу мөлшері, заттың меншікті жылу сыйымдылығы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "масса",
    "электроёмкость",
    "сила Ампера",
    "объём"
   ],
   "en": [
    "mass",
    "capacitance",
    "Ampere force",
    "volume"
   ],
   "kk": [
    "масса",
    "электр сыйымдылығы",
    "Ампер күші",
    "көлем"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. объём, масса.",
   "en": "More than one option is correct — select them all. volume, mass.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. көлем, масса."
  }
 },
 {
  "id": "t8_l8_p7_sa",
  "type": "short-answer",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «удельная теплоёмкость»? Запиши единицу.",
   "en": "Which SI unit is used to measure «specific heat capacity»? Write the unit.",
   "kk": "«меншікті жылу сыйымдылығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "дж/(кг·°c)",
    "дж/кг·°c",
    "дж/кг°c",
    "дж/(кг·с)"
   ],
   "en": [
    "j/(kg·°c)",
    "j/kg°c",
    "j/(kg·k)"
   ],
   "kk": [
    "дж/(кг·°c)",
    "дж/кг·°c"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплоёмкость» — Дж/(кг·°C).",
   "en": "The SI unit of «specific heat capacity» is J/(kg·°C).",
   "kk": "«меншікті жылу сыйымдылығы» шамасының ХБЖ бірлігі — Дж/(кг·°C)."
  }
 },
 {
  "id": "t8_l8_p7_mt",
  "type": "matching",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Количество теплоты, удельная теплоёмкость вещества» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Quantity of heat, specific heat capacity of a substance» with their SI units.",
   "kk": "«Жылу мөлшері, заттың меншікті жылу сыйымдылығы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "количество теплоты",
     "удельная теплоёмкость",
     "масса"
    ],
    "en": [
     "amount of heat",
     "specific heat capacity",
     "mass"
    ],
    "kk": [
     "жылу мөлшері",
     "меншікті жылу сыйымдылығы",
     "масса"
    ]
   },
   "right": {
    "ru": [
     "килограмм (кг)",
     "джоуль (Дж)",
     "Дж/(кг·°C)"
    ],
    "en": [
     "kilogram (kg)",
     "joule (J)",
     "J/(kg·°C)"
    ],
    "kk": [
     "килограмм (кг)",
     "джоуль (Дж)",
     "Дж/(кг·°C)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: количество теплоты — джоуль (Дж); удельная теплоёмкость — Дж/(кг·°C); масса — килограмм (кг).",
   "en": "Correct pairs: amount of heat — joule (J); specific heat capacity — J/(kg·°C); mass — kilogram (kg).",
   "kk": "Дұрыс жұптар: жылу мөлшері — джоуль (Дж); меншікті жылу сыйымдылығы — Дж/(кг·°C); масса — килограмм (кг)."
  }
 },
 {
  "id": "t8_l9_p8_ms",
  "type": "multi-select",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Энергия топлива, удельная теплота сгорания топлива».",
   "en": "Select all quantities studied in the topic «Fuel energy, specific heat of combustion».",
   "kk": "«Отын энергиясы, отынның меншікті жану жылуы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "масса",
    "удельная теплота сгорания топлива",
    "магнитный поток",
    "фокусное расстояние линзы"
   ],
   "en": [
    "mass",
    "specific heat of fuel combustion",
    "magnetic flux",
    "focal length of a lens"
   ],
   "kk": [
    "масса",
    "отынның меншікті жану жылуы",
    "магнит ағыны",
    "линзаның фокустық қашықтығы"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. масса, удельная теплота сгорания топлива.",
   "en": "More than one option is correct — select them all. mass, specific heat of fuel combustion.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. масса, отынның меншікті жану жылуы."
  }
 },
 {
  "id": "t8_l9_p8_sa",
  "type": "short-answer",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «масса»? Запиши единицу.",
   "en": "Which SI unit is used to measure «mass»? Write the unit.",
   "kk": "«масса» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "килограмм",
    "кг",
    "kg"
   ],
   "en": [
    "kilogram",
    "kg"
   ],
   "kk": [
    "килограмм",
    "кг",
    "kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «масса» — килограмм (кг).",
   "en": "The SI unit of «mass» is kilogram (kg).",
   "kk": "«масса» шамасының ХБЖ бірлігі — килограмм (кг)."
  }
 },
 {
  "id": "t8_l9_p8_mt",
  "type": "matching",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Энергия топлива, удельная теплота сгорания топлива» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Fuel energy, specific heat of combustion» with their SI units.",
   "kk": "«Отын энергиясы, отынның меншікті жану жылуы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "удельная теплота сгорания топлива",
     "масса",
     "количество теплоты"
    ],
    "en": [
     "specific heat of fuel combustion",
     "mass",
     "amount of heat"
    ],
    "kk": [
     "отынның меншікті жану жылуы",
     "масса",
     "жылу мөлшері"
    ]
   },
   "right": {
    "ru": [
     "Дж/кг",
     "джоуль (Дж)",
     "килограмм (кг)"
    ],
    "en": [
     "J/kg",
     "joule (J)",
     "kilogram (kg)"
    ],
    "kk": [
     "Дж/кг",
     "джоуль (Дж)",
     "килограмм (кг)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    2
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: удельная теплота сгорания топлива — Дж/кг; масса — килограмм (кг); количество теплоты — джоуль (Дж).",
   "en": "Correct pairs: specific heat of fuel combustion — J/kg; mass — kilogram (kg); amount of heat — joule (J).",
   "kk": "Дұрыс жұптар: отынның меншікті жану жылуы — Дж/кг; масса — килограмм (кг); жылу мөлшері — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l10_p9_ms",
  "type": "multi-select",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Закон сохранения и превращения энергии в тепловых процессах».",
   "en": "Select all quantities studied in the topic «Law of conservation and transformation of energy in thermal processes».",
   "kk": "«Жылу процестеріндегі энергияның сақталу және түрлену заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "магнитная индукция",
    "масса",
    "фокусное расстояние линзы"
   ],
   "en": [
    "efficiency of a heat engine",
    "magnetic flux density",
    "mass",
    "focal length of a lens"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "магнит индукциясы",
    "масса",
    "линзаның фокустық қашықтығы"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. КПД теплового двигателя, масса.",
   "en": "More than one option is correct — select them all. efficiency of a heat engine, mass.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылу қозғалтқышының ПӘК, масса."
  }
 },
 {
  "id": "t8_l10_p9_sa",
  "type": "short-answer",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «удельная теплота плавления»? Запиши единицу.",
   "en": "Which SI unit is used to measure «specific heat of fusion»? Write the unit.",
   "kk": "«меншікті балқу жылуы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "дж/кг",
    "j/kg"
   ],
   "en": [
    "j/kg"
   ],
   "kk": [
    "дж/кг",
    "j/kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплота плавления» — Дж/кг.",
   "en": "The SI unit of «specific heat of fusion» is J/kg.",
   "kk": "«меншікті балқу жылуы» шамасының ХБЖ бірлігі — Дж/кг."
  }
 },
 {
  "id": "t8_l10_p9_mt",
  "type": "matching",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Закон сохранения и превращения энергии в тепловых процессах» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Law of conservation and transformation of energy in thermal processes» with their SI units.",
   "kk": "«Жылу процестеріндегі энергияның сақталу және түрлену заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "внутренняя энергия",
     "удельная теплота парообразования",
     "объём"
    ],
    "en": [
     "internal energy",
     "specific heat of vaporization",
     "volume"
    ],
    "kk": [
     "ішкі энергия",
     "меншікті булану жылуы",
     "көлем"
    ]
   },
   "right": {
    "ru": [
     "Дж/кг",
     "кубический метр (м³)",
     "джоуль (Дж)"
    ],
    "en": [
     "J/kg",
     "cubic metre (m³)",
     "joule (J)"
    ],
    "kk": [
     "Дж/кг",
     "текше метр (м³)",
     "джоуль (Дж)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: внутренняя энергия — джоуль (Дж); удельная теплота парообразования — Дж/кг; объём — кубический метр (м³).",
   "en": "Correct pairs: internal energy — joule (J); specific heat of vaporization — J/kg; volume — cubic metre (m³).",
   "kk": "Дұрыс жұптар: ішкі энергия — джоуль (Дж); меншікті булану жылуы — Дж/кг; көлем — текше метр (м³)."
  }
 },
 {
  "id": "t8_l11_p10_ms",
  "type": "multi-select",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Плавление и кристаллизация твердых тел, температура плавления, удельная теплота плавления».",
   "en": "Select all quantities studied in the topic «Melting and crystallization of solids, melting temperature, specific latent heat of fusion».",
   "kk": "«Қатты денелердің балқуы мен кристалдануы, балқу температурасы, меншікті балқу жылуы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "температура",
    "напряжённость электрического поля",
    "количество теплоты",
    "магнитный поток"
   ],
   "en": [
    "temperature",
    "electric field strength",
    "amount of heat",
    "magnetic flux"
   ],
   "kk": [
    "температура",
    "электр өрісінің кернеулігі",
    "жылу мөлшері",
    "магнит ағыны"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. температура, количество теплоты.",
   "en": "More than one option is correct — select them all. temperature, amount of heat.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. температура, жылу мөлшері."
  }
 },
 {
  "id": "t8_l11_p10_sa",
  "type": "short-answer",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «температура»? Запиши единицу.",
   "en": "Which SI unit is used to measure «temperature»? Write the unit.",
   "kk": "«температура» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "кельвин",
    "к",
    "k",
    "kelvin",
    "К"
   ],
   "en": [
    "kelvin",
    "k",
    "K"
   ],
   "kk": [
    "кельвин",
    "к",
    "k",
    "К"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «температура» — кельвин (К).",
   "en": "The SI unit of «temperature» is kelvin (K).",
   "kk": "«температура» шамасының ХБЖ бірлігі — кельвин (К)."
  }
 },
 {
  "id": "t8_l11_p10_mt",
  "type": "matching",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Плавление и кристаллизация твердых тел, температура плавления, удельная теплота плавления» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Melting and crystallization of solids, melting temperature, specific latent heat of fusion» with their SI units.",
   "kk": "«Қатты денелердің балқуы мен кристалдануы, балқу температурасы, меншікті балқу жылуы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "удельная теплота плавления",
     "температура"
    ],
    "en": [
     "mass",
     "specific heat of fusion",
     "temperature"
    ],
    "kk": [
     "масса",
     "меншікті балқу жылуы",
     "температура"
    ]
   },
   "right": {
    "ru": [
     "кельвин (К)",
     "килограмм (кг)",
     "Дж/кг"
    ],
    "en": [
     "kelvin (K)",
     "kilogram (kg)",
     "J/kg"
    ],
    "kk": [
     "кельвин (К)",
     "килограмм (кг)",
     "Дж/кг"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: масса — килограмм (кг); удельная теплота плавления — Дж/кг; температура — кельвин (К).",
   "en": "Correct pairs: mass — kilogram (kg); specific heat of fusion — J/kg; temperature — kelvin (K).",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); меншікті балқу жылуы — Дж/кг; температура — кельвин (К)."
  }
 },
 {
  "id": "t8_l12_p11_ms",
  "type": "multi-select",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Парообразование и конденсация».",
   "en": "Select all quantities studied in the topic «Vaporization and condensation».",
   "kk": "«Булану және конденсация» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельная теплота парообразования",
    "электрический заряд",
    "удельная теплота плавления",
    "сила"
   ],
   "en": [
    "specific heat of vaporization",
    "electric charge",
    "specific heat of fusion",
    "force"
   ],
   "kk": [
    "меншікті булану жылуы",
    "электр заряды",
    "меншікті балқу жылуы",
    "күш"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельная теплота плавления, удельная теплота парообразования.",
   "en": "More than one option is correct — select them all. specific heat of fusion, specific heat of vaporization.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті балқу жылуы, меншікті булану жылуы."
  }
 },
 {
  "id": "t8_l12_p11_sa",
  "type": "short-answer",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «внутренняя энергия»? Запиши единицу.",
   "en": "Which SI unit is used to measure «internal energy»? Write the unit.",
   "kk": "«ішкі энергия» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «внутренняя энергия» — джоуль (Дж).",
   "en": "The SI unit of «internal energy» is joule (J).",
   "kk": "«ішкі энергия» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l12_p11_mt",
  "type": "matching",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Парообразование и конденсация» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Vaporization and condensation» with their SI units.",
   "kk": "«Булану және конденсация» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "удельная теплота парообразования",
     "количество теплоты",
     "температура"
    ],
    "en": [
     "specific heat of vaporization",
     "amount of heat",
     "temperature"
    ],
    "kk": [
     "меншікті булану жылуы",
     "жылу мөлшері",
     "температура"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "Дж/кг",
     "кельвин (К)"
    ],
    "en": [
     "joule (J)",
     "J/kg",
     "kelvin (K)"
    ],
    "kk": [
     "джоуль (Дж)",
     "Дж/кг",
     "кельвин (К)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: удельная теплота парообразования — Дж/кг; количество теплоты — джоуль (Дж); температура — кельвин (К).",
   "en": "Correct pairs: specific heat of vaporization — J/kg; amount of heat — joule (J); temperature — kelvin (K).",
   "kk": "Дұрыс жұптар: меншікті булану жылуы — Дж/кг; жылу мөлшері — джоуль (Дж); температура — кельвин (К)."
  }
 },
 {
  "id": "t8_l13_p12_ms",
  "type": "multi-select",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Кипение, удельная теплота парообразования. Зависимость температуры кипения от внешнего давления».",
   "en": "Select all quantities studied in the topic «Boiling, specific latent heat of vaporization. Dependence of boiling temperature on external pressure».",
   "kk": "«Қайнау, меншікті булану жылуы. Қайнау температурасының сыртқы қысымға тәуелділігі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила",
    "КПД теплового двигателя",
    "количество теплоты",
    "удельное сопротивление"
   ],
   "en": [
    "force",
    "efficiency of a heat engine",
    "amount of heat",
    "resistivity"
   ],
   "kk": [
    "күш",
    "жылу қозғалтқышының ПӘК",
    "жылу мөлшері",
    "меншікті кедергі"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. КПД теплового двигателя, количество теплоты.",
   "en": "More than one option is correct — select them all. efficiency of a heat engine, amount of heat.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылу қозғалтқышының ПӘК, жылу мөлшері."
  }
 },
 {
  "id": "t8_l13_p12_sa",
  "type": "short-answer",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «сила тока»? Запиши единицу.",
   "en": "Which SI unit is used to measure «current»? Write the unit.",
   "kk": "«ток күші» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ампер",
    "а",
    "a",
    "A",
    "А"
   ],
   "en": [
    "ampere",
    "amp",
    "a",
    "A"
   ],
   "kk": [
    "ампер",
    "а",
    "a",
    "A",
    "А"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «сила тока» — ампер (А).",
   "en": "The SI unit of «current» is ampere (A).",
   "kk": "«ток күші» шамасының ХБЖ бірлігі — ампер (А)."
  }
 },
 {
  "id": "t8_l13_p12_mt",
  "type": "matching",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Кипение, удельная теплота парообразования. Зависимость температуры кипения от внешнего давления» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Boiling, specific latent heat of vaporization. Dependence of boiling temperature on external pressure» with their SI units.",
   "kk": "«Қайнау, меншікті булану жылуы. Қайнау температурасының сыртқы қысымға тәуелділігі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "удельная теплота парообразования",
     "температура",
     "внутренняя энергия"
    ],
    "en": [
     "specific heat of vaporization",
     "temperature",
     "internal energy"
    ],
    "kk": [
     "меншікті булану жылуы",
     "температура",
     "ішкі энергия"
    ]
   },
   "right": {
    "ru": [
     "кельвин (К)",
     "джоуль (Дж)",
     "Дж/кг"
    ],
    "en": [
     "kelvin (K)",
     "joule (J)",
     "J/kg"
    ],
    "kk": [
     "кельвин (К)",
     "джоуль (Дж)",
     "Дж/кг"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: удельная теплота парообразования — Дж/кг; температура — кельвин (К); внутренняя энергия — джоуль (Дж).",
   "en": "Correct pairs: specific heat of vaporization — J/kg; temperature — kelvin (K); internal energy — joule (J).",
   "kk": "Дұрыс жұптар: меншікті булану жылуы — Дж/кг; температура — кельвин (К); ішкі энергия — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l14_p13_ms",
  "type": "multi-select",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Первый закон термодинамики, работа газа и пара».",
   "en": "Select all quantities studied in the topic «First law of thermodynamics, work of gas and vapor».",
   "kk": "«Термодинамиканың бірінші заңы, газ бен будың жұмысы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "мощность электрического тока",
    "количество теплоты",
    "удельная теплота парообразования",
    "удельное сопротивление"
   ],
   "en": [
    "power of electric current",
    "amount of heat",
    "specific heat of vaporization",
    "resistivity"
   ],
   "kk": [
    "электр тогының қуаты",
    "жылу мөлшері",
    "меншікті булану жылуы",
    "меншікті кедергі"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельная теплота парообразования, количество теплоты.",
   "en": "More than one option is correct — select them all. specific heat of vaporization, amount of heat.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті булану жылуы, жылу мөлшері."
  }
 },
 {
  "id": "t8_l14_p13_sa",
  "type": "short-answer",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «работа электрического тока»? Запиши единицу.",
   "en": "Which SI unit is used to measure «work of electric current»? Write the unit.",
   "kk": "«электр тогының жұмысы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «работа электрического тока» — джоуль (Дж).",
   "en": "The SI unit of «work of electric current» is joule (J).",
   "kk": "«электр тогының жұмысы» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l14_p13_mt",
  "type": "matching",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Первый закон термодинамики, работа газа и пара» и их единицы измерения в СИ.",
   "en": "Match the quantities from «First law of thermodynamics, work of gas and vapor» with their SI units.",
   "kk": "«Термодинамиканың бірінші заңы, газ бен будың жұмысы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "работа газа",
     "КПД теплового двигателя",
     "температура"
    ],
    "en": [
     "work done by a gas",
     "efficiency of a heat engine",
     "temperature"
    ],
    "kk": [
     "газ жұмысы",
     "жылу қозғалтқышының ПӘК",
     "температура"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "процент (%)",
     "кельвин (К)"
    ],
    "en": [
     "joule (J)",
     "percent (%)",
     "kelvin (K)"
    ],
    "kk": [
     "джоуль (Дж)",
     "процент (%)",
     "кельвин (К)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: работа газа — джоуль (Дж); КПД теплового двигателя — процент (%); температура — кельвин (К).",
   "en": "Correct pairs: work done by a gas — joule (J); efficiency of a heat engine — percent (%); temperature — kelvin (K).",
   "kk": "Дұрыс жұптар: газ жұмысы — джоуль (Дж); жылу қозғалтқышының ПӘК — процент (%); температура — кельвин (К)."
  }
 },
 {
  "id": "t8_l15_p14_ms",
  "type": "multi-select",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Необратимость тепловых процессов, второй закон термодинамики».",
   "en": "Select all quantities studied in the topic «Irreversibility of thermal processes, second law of thermodynamics».",
   "kk": "«Жылу процестерінің қайтымсыздығы, термодинамиканың екінші заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила Ампера",
    "удельная теплота сгорания топлива",
    "электроёмкость",
    "внутренняя энергия"
   ],
   "en": [
    "Ampere force",
    "specific heat of fuel combustion",
    "capacitance",
    "internal energy"
   ],
   "kk": [
    "Ампер күші",
    "отынның меншікті жану жылуы",
    "электр сыйымдылығы",
    "ішкі энергия"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельная теплота сгорания топлива, внутренняя энергия.",
   "en": "More than one option is correct — select them all. specific heat of fuel combustion, internal energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. отынның меншікті жану жылуы, ішкі энергия."
  }
 },
 {
  "id": "t8_l15_p14_sa",
  "type": "short-answer",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «фокусное расстояние линзы»? Запиши единицу.",
   "en": "Which SI unit is used to measure «focal length of a lens»? Write the unit.",
   "kk": "«линзаның фокустық қашықтығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre",
    "meter",
    "m",
    "M"
   ],
   "kk": [
    "метр",
    "м",
    "m",
    "M"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «фокусное расстояние линзы» — метр (м).",
   "en": "The SI unit of «focal length of a lens» is metre (m).",
   "kk": "«линзаның фокустық қашықтығы» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t8_l15_p14_num",
  "type": "numeric",
  "topic": "p14",
  "difficulty": 1,
  "question": {
   "ru": "Переведи в единицы СИ: 500 мс = ___ с.",
   "en": "Convert to SI units: 500 ms = ___ s.",
   "kk": "ХБЖ-ға келтір: 500 мс = ___ с."
  },
  "correctAnswer": 0.5,
  "tolerance": 0.001,
  "hint": {
   "ru": "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
   "en": "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
   "kk": "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
  },
  "explanation": {
   "ru": "Ответ: 0.5.",
   "en": "Answer: 0.5.",
   "kk": "Жауабы: 0.5."
  }
 },
 {
  "id": "t8_l15_p14_mt",
  "type": "matching",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Необратимость тепловых процессов, второй закон термодинамики» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Irreversibility of thermal processes, second law of thermodynamics» with their SI units.",
   "kk": "«Жылу процестерінің қайтымсыздығы, термодинамиканың екінші заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "внутренняя энергия",
     "удельная теплоёмкость",
     "удельная теплота сгорания топлива"
    ],
    "en": [
     "internal energy",
     "specific heat capacity",
     "specific heat of fuel combustion"
    ],
    "kk": [
     "ішкі энергия",
     "меншікті жылу сыйымдылығы",
     "отынның меншікті жану жылуы"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "Дж/(кг·°C)",
     "Дж/кг"
    ],
    "en": [
     "joule (J)",
     "J/(kg·°C)",
     "J/kg"
    ],
    "kk": [
     "джоуль (Дж)",
     "Дж/(кг·°C)",
     "Дж/кг"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: внутренняя энергия — джоуль (Дж); удельная теплоёмкость — Дж/(кг·°C); удельная теплота сгорания топлива — Дж/кг.",
   "en": "Correct pairs: internal energy — joule (J); specific heat capacity — J/(kg·°C); specific heat of fuel combustion — J/kg.",
   "kk": "Дұрыс жұптар: ішкі энергия — джоуль (Дж); меншікті жылу сыйымдылығы — Дж/(кг·°C); отынның меншікті жану жылуы — Дж/кг."
  }
 },
 {
  "id": "t8_l16_p15_ms",
  "type": "multi-select",
  "topic": "p15",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Тепловые двигатели».",
   "en": "Select all quantities studied in the topic «Heat engines».",
   "kk": "«Жылу машиналары» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "магнитный поток",
    "работа газа",
    "электроёмкость"
   ],
   "en": [
    "efficiency of a heat engine",
    "magnetic flux",
    "work done by a gas",
    "capacitance"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "магнит ағыны",
    "газ жұмысы",
    "электр сыйымдылығы"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. работа газа, КПД теплового двигателя.",
   "en": "More than one option is correct — select them all. work done by a gas, efficiency of a heat engine.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. газ жұмысы, жылу қозғалтқышының ПӘК."
  }
 },
 {
  "id": "t8_l16_p15_sa",
  "type": "short-answer",
  "topic": "p15",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «сила Ампера»? Запиши единицу.",
   "en": "Which SI unit is used to measure «Ampere force»? Write the unit.",
   "kk": "«Ампер күші» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ],
   "en": [
    "newton",
    "n",
    "N"
   ],
   "kk": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «сила Ампера» — ньютон (Н).",
   "en": "The SI unit of «Ampere force» is newton (N).",
   "kk": "«Ампер күші» шамасының ХБЖ бірлігі — ньютон (Н)."
  }
 },
 {
  "id": "t8_l16_p15_mt",
  "type": "matching",
  "topic": "p15",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Тепловые двигатели» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Heat engines» with their SI units.",
   "kk": "«Жылу машиналары» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "КПД теплового двигателя",
     "работа газа",
     "время"
    ],
    "en": [
     "efficiency of a heat engine",
     "work done by a gas",
     "time"
    ],
    "kk": [
     "жылу қозғалтқышының ПӘК",
     "газ жұмысы",
     "уақыт"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "джоуль (Дж)",
     "процент (%)"
    ],
    "en": [
     "second (s)",
     "joule (J)",
     "percent (%)"
    ],
    "kk": [
     "секунд (с)",
     "джоуль (Дж)",
     "процент (%)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: КПД теплового двигателя — процент (%); работа газа — джоуль (Дж); время — секунда (с).",
   "en": "Correct pairs: efficiency of a heat engine — percent (%); work done by a gas — joule (J); time — second (s).",
   "kk": "Дұрыс жұптар: жылу қозғалтқышының ПӘК — процент (%); газ жұмысы — джоуль (Дж); уақыт — секунд (с)."
  }
 },
 {
  "id": "t8_l17_p16_ms",
  "type": "multi-select",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Коэффициент полезного действия теплового двигателя».",
   "en": "Select all quantities studied in the topic «Efficiency of a heat engine».",
   "kk": "«Жылу машинасының пайдалы әсер коэффициенті» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельная теплота парообразования",
    "электрический заряд",
    "сила Ампера",
    "температура"
   ],
   "en": [
    "specific heat of vaporization",
    "electric charge",
    "Ampere force",
    "temperature"
   ],
   "kk": [
    "меншікті булану жылуы",
    "электр заряды",
    "Ампер күші",
    "температура"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. температура, удельная теплота парообразования.",
   "en": "More than one option is correct — select them all. temperature, specific heat of vaporization.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. температура, меншікті булану жылуы."
  }
 },
 {
  "id": "t8_l17_p16_sa",
  "type": "short-answer",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «электрический заряд»? Запиши единицу.",
   "en": "Which SI unit is used to measure «electric charge»? Write the unit.",
   "kk": "«электр заряды» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "кулон",
    "кл",
    "c",
    "C",
    "Кл"
   ],
   "en": [
    "coulomb",
    "c",
    "C"
   ],
   "kk": [
    "кулон",
    "кл",
    "c",
    "C",
    "Кл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электрический заряд» — кулон (Кл).",
   "en": "The SI unit of «electric charge» is coulomb (C).",
   "kk": "«электр заряды» шамасының ХБЖ бірлігі — кулон (Кл)."
  }
 },
 {
  "id": "t8_l17_p16_mt",
  "type": "matching",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Коэффициент полезного действия теплового двигателя» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Efficiency of a heat engine» with their SI units.",
   "kk": "«Жылу машинасының пайдалы әсер коэффициенті» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "КПД теплового двигателя",
     "время",
     "масса"
    ],
    "en": [
     "efficiency of a heat engine",
     "time",
     "mass"
    ],
    "kk": [
     "жылу қозғалтқышының ПӘК",
     "уақыт",
     "масса"
    ]
   },
   "right": {
    "ru": [
     "килограмм (кг)",
     "секунда (с)",
     "процент (%)"
    ],
    "en": [
     "kilogram (kg)",
     "second (s)",
     "percent (%)"
    ],
    "kk": [
     "килограмм (кг)",
     "секунд (с)",
     "процент (%)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: КПД теплового двигателя — процент (%); время — секунда (с); масса — килограмм (кг).",
   "en": "Correct pairs: efficiency of a heat engine — percent (%); time — second (s); mass — kilogram (kg).",
   "kk": "Дұрыс жұптар: жылу қозғалтқышының ПӘК — процент (%); уақыт — секунд (с); масса — килограмм (кг)."
  }
 },
 {
  "id": "t8_l18_p17_ms",
  "type": "multi-select",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Экологические проблемы использования тепловых машин».",
   "en": "Select all quantities studied in the topic «Environmental problems caused by heat engines».",
   "kk": "«Жылу машиналарын пайдаланудың экологиялық мәселелері» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электрическое напряжение",
    "время",
    "объём",
    "электрический заряд"
   ],
   "en": [
    "voltage",
    "time",
    "volume",
    "electric charge"
   ],
   "kk": [
    "электр кернеуі",
    "уақыт",
    "көлем",
    "электр заряды"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. объём, время.",
   "en": "More than one option is correct — select them all. volume, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. көлем, уақыт."
  }
 },
 {
  "id": "t8_l18_p17_sa",
  "type": "short-answer",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «электроёмкость»? Запиши единицу.",
   "en": "Which SI unit is used to measure «capacitance»? Write the unit.",
   "kk": "«электр сыйымдылығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "фарад",
    "ф",
    "f",
    "F",
    "Ф"
   ],
   "en": [
    "farad",
    "f",
    "F"
   ],
   "kk": [
    "фарад",
    "ф",
    "f",
    "F",
    "Ф"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электроёмкость» — фарад (Ф).",
   "en": "The SI unit of «capacitance» is farad (F).",
   "kk": "«электр сыйымдылығы» шамасының ХБЖ бірлігі — фарад (Ф)."
  }
 },
 {
  "id": "t8_l18_p17_mt",
  "type": "matching",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Экологические проблемы использования тепловых машин» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Environmental problems caused by heat engines» with their SI units.",
   "kk": "«Жылу машиналарын пайдаланудың экологиялық мәселелері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "объём",
     "время",
     "удельная теплоёмкость"
    ],
    "en": [
     "volume",
     "time",
     "specific heat capacity"
    ],
    "kk": [
     "көлем",
     "уақыт",
     "меншікті жылу сыйымдылығы"
    ]
   },
   "right": {
    "ru": [
     "кубический метр (м³)",
     "секунда (с)",
     "Дж/(кг·°C)"
    ],
    "en": [
     "cubic metre (m³)",
     "second (s)",
     "J/(kg·°C)"
    ],
    "kk": [
     "текше метр (м³)",
     "секунд (с)",
     "Дж/(кг·°C)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: объём — кубический метр (м³); время — секунда (с); удельная теплоёмкость — Дж/(кг·°C).",
   "en": "Correct pairs: volume — cubic metre (m³); time — second (s); specific heat capacity — J/(kg·°C).",
   "kk": "Дұрыс жұптар: көлем — текше метр (м³); уақыт — секунд (с); меншікті жылу сыйымдылығы — Дж/(кг·°C)."
  }
 },
 {
  "id": "t8_l19_p18_ms",
  "type": "multi-select",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электрический заряд, электризация тел, проводники и диэлектрики».",
   "en": "Select all quantities studied in the topic «Electric charge, electrification of bodies, conductors and dielectrics».",
   "kk": "«Электр заряды, денелердің электрленуі, өткізгіштер және диэлектриктер» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила",
    "сила тока",
    "масса",
    "температура"
   ],
   "en": [
    "force",
    "current",
    "mass",
    "temperature"
   ],
   "kk": [
    "күш",
    "ток күші",
    "масса",
    "температура"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила тока, сила.",
   "en": "More than one option is correct — select them all. current, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ток күші, күш."
  }
 },
 {
  "id": "t8_l19_p18_sa",
  "type": "short-answer",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «электрическое напряжение»? Запиши единицу.",
   "en": "Which SI unit is used to measure «voltage»? Write the unit.",
   "kk": "«электр кернеуі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "вольт",
    "в",
    "v",
    "V",
    "В"
   ],
   "en": [
    "volt",
    "v",
    "V"
   ],
   "kk": [
    "вольт",
    "в",
    "v",
    "V",
    "В"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электрическое напряжение» — вольт (В).",
   "en": "The SI unit of «voltage» is volt (V).",
   "kk": "«электр кернеуі» шамасының ХБЖ бірлігі — вольт (В)."
  }
 },
 {
  "id": "t8_l19_p18_mt",
  "type": "matching",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электрический заряд, электризация тел, проводники и диэлектрики» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electric charge, electrification of bodies, conductors and dielectrics» with their SI units.",
   "kk": "«Электр заряды, денелердің электрленуі, өткізгіштер және диэлектриктер» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электрический заряд",
     "мощность электрического тока",
     "электроёмкость"
    ],
    "en": [
     "electric charge",
     "power of electric current",
     "capacitance"
    ],
    "kk": [
     "электр заряды",
     "электр тогының қуаты",
     "электр сыйымдылығы"
    ]
   },
   "right": {
    "ru": [
     "ватт (Вт)",
     "фарад (Ф)",
     "кулон (Кл)"
    ],
    "en": [
     "watt (W)",
     "farad (F)",
     "coulomb (C)"
    ],
    "kk": [
     "ватт (Вт)",
     "фарад (Ф)",
     "кулон (Кл)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электрический заряд — кулон (Кл); мощность электрического тока — ватт (Вт); электроёмкость — фарад (Ф).",
   "en": "Correct pairs: electric charge — coulomb (C); power of electric current — watt (W); capacitance — farad (F).",
   "kk": "Дұрыс жұптар: электр заряды — кулон (Кл); электр тогының қуаты — ватт (Вт); электр сыйымдылығы — фарад (Ф)."
  }
 },
 {
  "id": "t8_l20_p19_ms",
  "type": "multi-select",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Закон сохранения электрического заряда, взаимодействие неподвижных зарядов, закон Кулона, элементарный заряд».",
   "en": "Select all quantities studied in the topic «Conservation of electric charge, interaction of stationary charges, Coulomb's law, elementary charge».",
   "kk": "«Электр зарядының сақталу заңы, тыныштықтағы зарядтардың өзара әсері, Кулон заңы, элементар заряд» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "удельная теплота плавления",
    "сила тока",
    "электрическое сопротивление"
   ],
   "en": [
    "efficiency of a heat engine",
    "specific heat of fusion",
    "current",
    "electrical resistance"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "меншікті балқу жылуы",
    "ток күші",
    "электр кедергісі"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила тока, электрическое сопротивление.",
   "en": "More than one option is correct — select them all. current, electrical resistance.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ток күші, электр кедергісі."
  }
 },
 {
  "id": "t8_l20_p19_sa",
  "type": "short-answer",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «электрическое сопротивление»? Запиши единицу.",
   "en": "Which SI unit is used to measure «electrical resistance»? Write the unit.",
   "kk": "«электр кедергісі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ом",
    "ом",
    "ohm",
    "Ω"
   ],
   "en": [
    "ohm",
    "Ω",
    "ohms"
   ],
   "kk": [
    "ом",
    "ohm",
    "Ω"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электрическое сопротивление» — ом (Ом).",
   "en": "The SI unit of «electrical resistance» is ohm (Ω).",
   "kk": "«электр кедергісі» шамасының ХБЖ бірлігі — ом (Ом)."
  }
 },
 {
  "id": "t8_l20_p19_mt",
  "type": "matching",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Закон сохранения электрического заряда, взаимодействие неподвижных зарядов, закон Кулона, элементарный заряд» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Conservation of electric charge, interaction of stationary charges, Coulomb's law, elementary charge» with their SI units.",
   "kk": "«Электр зарядының сақталу заңы, тыныштықтағы зарядтардың өзара әсері, Кулон заңы, элементар заряд» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электрический заряд",
     "сила",
     "электрическое сопротивление"
    ],
    "en": [
     "electric charge",
     "force",
     "electrical resistance"
    ],
    "kk": [
     "электр заряды",
     "күш",
     "электр кедергісі"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "кулон (Кл)",
     "ом (Ом)"
    ],
    "en": [
     "newton (N)",
     "coulomb (C)",
     "ohm (Ω)"
    ],
    "kk": [
     "ньютон (Н)",
     "кулон (Кл)",
     "ом (Ом)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электрический заряд — кулон (Кл); сила — ньютон (Н); электрическое сопротивление — ом (Ом).",
   "en": "Correct pairs: electric charge — coulomb (C); force — newton (N); electrical resistance — ohm (Ω).",
   "kk": "Дұрыс жұптар: электр заряды — кулон (Кл); күш — ньютон (Н); электр кедергісі — ом (Ом)."
  }
 },
 {
  "id": "t8_l21_p20_ms",
  "type": "multi-select",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электрическое поле, напряжённость электрического поля».",
   "en": "Select all quantities studied in the topic «Electric field, electric field strength».",
   "kk": "«Электр өрісі, электр өрісінің кернеулігі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила тока",
    "количество теплоты",
    "электроёмкость",
    "оптическая сила линзы"
   ],
   "en": [
    "current",
    "amount of heat",
    "capacitance",
    "optical power of a lens"
   ],
   "kk": [
    "ток күші",
    "жылу мөлшері",
    "электр сыйымдылығы",
    "линзаның оптикалық күші"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила тока, электроёмкость.",
   "en": "More than one option is correct — select them all. current, capacitance.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ток күші, электр сыйымдылығы."
  }
 },
 {
  "id": "t8_l21_p20_sa",
  "type": "short-answer",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «напряжённость электрического поля»? Запиши единицу.",
   "en": "Which SI unit is used to measure «electric field strength»? Write the unit.",
   "kk": "«электр өрісінің кернеулігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "в/м",
    "v/m"
   ],
   "en": [
    "v/m"
   ],
   "kk": [
    "в/м",
    "v/m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «напряжённость электрического поля» — В/м.",
   "en": "The SI unit of «electric field strength» is V/m.",
   "kk": "«электр өрісінің кернеулігі» шамасының ХБЖ бірлігі — В/м."
  }
 },
 {
  "id": "t8_l21_p20_mt",
  "type": "matching",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электрическое поле, напряжённость электрического поля» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electric field, electric field strength» with their SI units.",
   "kk": "«Электр өрісі, электр өрісінің кернеулігі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электрический заряд",
     "напряжённость электрического поля",
     "электрическое напряжение"
    ],
    "en": [
     "electric charge",
     "electric field strength",
     "voltage"
    ],
    "kk": [
     "электр заряды",
     "электр өрісінің кернеулігі",
     "электр кернеуі"
    ]
   },
   "right": {
    "ru": [
     "кулон (Кл)",
     "вольт (В)",
     "В/м"
    ],
    "en": [
     "coulomb (C)",
     "volt (V)",
     "V/m"
    ],
    "kk": [
     "кулон (Кл)",
     "вольт (В)",
     "В/м"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    2
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электрический заряд — кулон (Кл); напряжённость электрического поля — В/м; электрическое напряжение — вольт (В).",
   "en": "Correct pairs: electric charge — coulomb (C); electric field strength — V/m; voltage — volt (V).",
   "kk": "Дұрыс жұптар: электр заряды — кулон (Кл); электр өрісінің кернеулігі — В/м; электр кернеуі — вольт (В)."
  }
 },
 {
  "id": "t8_l22_p21_ms",
  "type": "multi-select",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Потенциал и разность потенциалов электрического поля, конденсатор».",
   "en": "Select all quantities studied in the topic «Electric potential and potential difference, capacitor».",
   "kk": "«Электр өрісінің потенциалы және потенциалдар айырымы, конденсатор» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "объём",
    "работа газа",
    "сила",
    "электроёмкость"
   ],
   "en": [
    "volume",
    "work done by a gas",
    "force",
    "capacitance"
   ],
   "kk": [
    "көлем",
    "газ жұмысы",
    "күш",
    "электр сыйымдылығы"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила, электроёмкость.",
   "en": "More than one option is correct — select them all. force, capacitance.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. күш, электр сыйымдылығы."
  }
 },
 {
  "id": "t8_l22_p21_sa",
  "type": "short-answer",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «сила»? Запиши единицу.",
   "en": "Which SI unit is used to measure «force»? Write the unit.",
   "kk": "«күш» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ],
   "en": [
    "newton",
    "n",
    "N"
   ],
   "kk": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «сила» — ньютон (Н).",
   "en": "The SI unit of «force» is newton (N).",
   "kk": "«күш» шамасының ХБЖ бірлігі — ньютон (Н)."
  }
 },
 {
  "id": "t8_l22_p21_mt",
  "type": "matching",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Потенциал и разность потенциалов электрического поля, конденсатор» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electric potential and potential difference, capacitor» with their SI units.",
   "kk": "«Электр өрісінің потенциалы және потенциалдар айырымы, конденсатор» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электроёмкость",
     "напряжённость электрического поля",
     "электрическое сопротивление"
    ],
    "en": [
     "capacitance",
     "electric field strength",
     "electrical resistance"
    ],
    "kk": [
     "электр сыйымдылығы",
     "электр өрісінің кернеулігі",
     "электр кедергісі"
    ]
   },
   "right": {
    "ru": [
     "ом (Ом)",
     "В/м",
     "фарад (Ф)"
    ],
    "en": [
     "ohm (Ω)",
     "V/m",
     "farad (F)"
    ],
    "kk": [
     "ом (Ом)",
     "В/м",
     "фарад (Ф)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электроёмкость — фарад (Ф); напряжённость электрического поля — В/м; электрическое сопротивление — ом (Ом).",
   "en": "Correct pairs: capacitance — farad (F); electric field strength — V/m; electrical resistance — ohm (Ω).",
   "kk": "Дұрыс жұптар: электр сыйымдылығы — фарад (Ф); электр өрісінің кернеулігі — В/м; электр кедергісі — ом (Ом)."
  }
 },
 {
  "id": "t8_l23_p22_ms",
  "type": "multi-select",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электрический ток, источники электрического тока».",
   "en": "Select all quantities studied in the topic «Electric current, sources of electric current».",
   "kk": "«Электр тогы, электр тогының көздері» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельная теплота парообразования",
    "электрический заряд",
    "магнитный поток",
    "сила"
   ],
   "en": [
    "specific heat of vaporization",
    "electric charge",
    "magnetic flux",
    "force"
   ],
   "kk": [
    "меншікті булану жылуы",
    "электр заряды",
    "магнит ағыны",
    "күш"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила, электрический заряд.",
   "en": "More than one option is correct — select them all. force, electric charge.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. күш, электр заряды."
  }
 },
 {
  "id": "t8_l23_p22_sa",
  "type": "short-answer",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «мощность электрического тока»? Запиши единицу.",
   "en": "Which SI unit is used to measure «power of electric current»? Write the unit.",
   "kk": "«электр тогының қуаты» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ватт",
    "вт",
    "w",
    "W",
    "Вт"
   ],
   "en": [
    "watt",
    "w",
    "W"
   ],
   "kk": [
    "ватт",
    "вт",
    "w",
    "W",
    "Вт"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «мощность электрического тока» — ватт (Вт).",
   "en": "The SI unit of «power of electric current» is watt (W).",
   "kk": "«электр тогының қуаты» шамасының ХБЖ бірлігі — ватт (Вт)."
  }
 },
 {
  "id": "t8_l23_p22_mt",
  "type": "matching",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электрический ток, источники электрического тока» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electric current, sources of electric current» with their SI units.",
   "kk": "«Электр тогы, электр тогының көздері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила тока",
     "электрический заряд",
     "мощность электрического тока"
    ],
    "en": [
     "current",
     "electric charge",
     "power of electric current"
    ],
    "kk": [
     "ток күші",
     "электр заряды",
     "электр тогының қуаты"
    ]
   },
   "right": {
    "ru": [
     "кулон (Кл)",
     "ампер (А)",
     "ватт (Вт)"
    ],
    "en": [
     "coulomb (C)",
     "ampere (A)",
     "watt (W)"
    ],
    "kk": [
     "кулон (Кл)",
     "ампер (А)",
     "ватт (Вт)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: сила тока — ампер (А); электрический заряд — кулон (Кл); мощность электрического тока — ватт (Вт).",
   "en": "Correct pairs: current — ampere (A); electric charge — coulomb (C); power of electric current — watt (W).",
   "kk": "Дұрыс жұптар: ток күші — ампер (А); электр заряды — кулон (Кл); электр тогының қуаты — ватт (Вт)."
  }
 },
 {
  "id": "t8_l24_p23_ms",
  "type": "multi-select",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электрическая цепь и её составные части, сила тока, напряжение».",
   "en": "Select all quantities studied in the topic «Electric circuit and its components, current, voltage».",
   "kk": "«Электр тізбегі және оның бөліктері, ток күші, кернеу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "электрический заряд",
    "электрическое напряжение",
    "внутренняя энергия"
   ],
   "en": [
    "efficiency of a heat engine",
    "electric charge",
    "voltage",
    "internal energy"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "электр заряды",
    "электр кернеуі",
    "ішкі энергия"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. электрическое напряжение, электрический заряд.",
   "en": "More than one option is correct — select them all. voltage, electric charge.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электр кернеуі, электр заряды."
  }
 },
 {
  "id": "t8_l24_p23_sa",
  "type": "short-answer",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «оптическая сила линзы»? Запиши единицу.",
   "en": "Which SI unit is used to measure «optical power of a lens»? Write the unit.",
   "kk": "«линзаның оптикалық күші» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "диоптрия",
    "дптр",
    "dioptre"
   ],
   "en": [
    "dioptre",
    "diopter",
    "dpt"
   ],
   "kk": [
    "диоптрия",
    "дптр"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «оптическая сила линзы» — диоптрия (дптр).",
   "en": "The SI unit of «optical power of a lens» is dioptre (dpt).",
   "kk": "«линзаның оптикалық күші» шамасының ХБЖ бірлігі — диоптрия (дптр)."
  }
 },
 {
  "id": "t8_l24_p23_mt",
  "type": "matching",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электрическая цепь и её составные части, сила тока, напряжение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electric circuit and its components, current, voltage» with their SI units.",
   "kk": "«Электр тізбегі және оның бөліктері, ток күші, кернеу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила тока",
     "электрический заряд",
     "электрическое напряжение"
    ],
    "en": [
     "current",
     "electric charge",
     "voltage"
    ],
    "kk": [
     "ток күші",
     "электр заряды",
     "электр кернеуі"
    ]
   },
   "right": {
    "ru": [
     "кулон (Кл)",
     "ампер (А)",
     "вольт (В)"
    ],
    "en": [
     "coulomb (C)",
     "ampere (A)",
     "volt (V)"
    ],
    "kk": [
     "кулон (Кл)",
     "ампер (А)",
     "вольт (В)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: сила тока — ампер (А); электрический заряд — кулон (Кл); электрическое напряжение — вольт (В).",
   "en": "Correct pairs: current — ampere (A); electric charge — coulomb (C); voltage — volt (V).",
   "kk": "Дұрыс жұптар: ток күші — ампер (А); электр заряды — кулон (Кл); электр кернеуі — вольт (В)."
  }
 },
 {
  "id": "t8_l25_p24_ms",
  "type": "multi-select",
  "topic": "p24",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Закон Ома для участка цепи».",
   "en": "Select all quantities studied in the topic «Ohm's law for a section of a circuit».",
   "kk": "«Тізбек бөлігі үшін Ом заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "магнитная индукция",
    "электрическое напряжение",
    "оптическая сила линзы",
    "сила тока"
   ],
   "en": [
    "magnetic flux density",
    "voltage",
    "optical power of a lens",
    "current"
   ],
   "kk": [
    "магнит индукциясы",
    "электр кернеуі",
    "линзаның оптикалық күші",
    "ток күші"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила тока, электрическое напряжение.",
   "en": "More than one option is correct — select them all. current, voltage.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ток күші, электр кернеуі."
  }
 },
 {
  "id": "t8_l25_p24_sa",
  "type": "short-answer",
  "topic": "p24",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «магнитный поток»? Запиши единицу.",
   "en": "Which SI unit is used to measure «magnetic flux»? Write the unit.",
   "kk": "«магнит ағыны» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "вебер",
    "вб",
    "wb",
    "Wb"
   ],
   "en": [
    "weber",
    "wb",
    "Wb"
   ],
   "kk": [
    "вебер",
    "вб",
    "wb",
    "Wb"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «магнитный поток» — вебер (Вб).",
   "en": "The SI unit of «magnetic flux» is weber (Wb).",
   "kk": "«магнит ағыны» шамасының ХБЖ бірлігі — вебер (Вб)."
  }
 },
 {
  "id": "t8_l25_p24_mt",
  "type": "matching",
  "topic": "p24",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Закон Ома для участка цепи» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Ohm's law for a section of a circuit» with their SI units.",
   "kk": "«Тізбек бөлігі үшін Ом заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила тока",
     "электрическое сопротивление",
     "электрическое напряжение"
    ],
    "en": [
     "current",
     "electrical resistance",
     "voltage"
    ],
    "kk": [
     "ток күші",
     "электр кедергісі",
     "электр кернеуі"
    ]
   },
   "right": {
    "ru": [
     "ом (Ом)",
     "ампер (А)",
     "вольт (В)"
    ],
    "en": [
     "ohm (Ω)",
     "ampere (A)",
     "volt (V)"
    ],
    "kk": [
     "ом (Ом)",
     "ампер (А)",
     "вольт (В)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: сила тока — ампер (А); электрическое сопротивление — ом (Ом); электрическое напряжение — вольт (В).",
   "en": "Correct pairs: current — ampere (A); electrical resistance — ohm (Ω); voltage — volt (V).",
   "kk": "Дұрыс жұптар: ток күші — ампер (А); электр кедергісі — ом (Ом); электр кернеуі — вольт (В)."
  }
 },
 {
  "id": "t8_l26_p25_ms",
  "type": "multi-select",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электрическое сопротивление проводника, удельное сопротивление проводника, реостат».",
   "en": "Select all quantities studied in the topic «Electrical resistance, resistivity, rheostat».",
   "kk": "«Өткізгіштің электр кедергісі, меншікті кедергі, реостат» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила тока",
    "удельная теплота парообразования",
    "электроёмкость",
    "объём"
   ],
   "en": [
    "current",
    "specific heat of vaporization",
    "capacitance",
    "volume"
   ],
   "kk": [
    "ток күші",
    "меншікті булану жылуы",
    "электр сыйымдылығы",
    "көлем"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила тока, электроёмкость.",
   "en": "More than one option is correct — select them all. current, capacitance.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ток күші, электр сыйымдылығы."
  }
 },
 {
  "id": "t8_l26_p25_sa",
  "type": "short-answer",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «удельное сопротивление»? Запиши единицу.",
   "en": "Which SI unit is used to measure «resistivity»? Write the unit.",
   "kk": "«меншікті кедергі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ом·м",
    "ом*м",
    "ohm·m"
   ],
   "en": [
    "Ω·m",
    "ohm·m",
    "ohm·meter"
   ],
   "kk": [
    "ом·м",
    "ohm·m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельное сопротивление» — Ом·м.",
   "en": "The SI unit of «resistivity» is Ω·m.",
   "kk": "«меншікті кедергі» шамасының ХБЖ бірлігі — Ом·м."
  }
 },
 {
  "id": "t8_l26_p25_mt",
  "type": "matching",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электрическое сопротивление проводника, удельное сопротивление проводника, реостат» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electrical resistance, resistivity, rheostat» with their SI units.",
   "kk": "«Өткізгіштің электр кедергісі, меншікті кедергі, реостат» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электрическое сопротивление",
     "удельное сопротивление",
     "сила тока"
    ],
    "en": [
     "electrical resistance",
     "resistivity",
     "current"
    ],
    "kk": [
     "электр кедергісі",
     "меншікті кедергі",
     "ток күші"
    ]
   },
   "right": {
    "ru": [
     "Ом·м",
     "ом (Ом)",
     "ампер (А)"
    ],
    "en": [
     "Ω·m",
     "ohm (Ω)",
     "ampere (A)"
    ],
    "kk": [
     "Ом·м",
     "ом (Ом)",
     "ампер (А)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электрическое сопротивление — ом (Ом); удельное сопротивление — Ом·м; сила тока — ампер (А).",
   "en": "Correct pairs: electrical resistance — ohm (Ω); resistivity — Ω·m; current — ampere (A).",
   "kk": "Дұрыс жұптар: электр кедергісі — ом (Ом); меншікті кедергі — Ом·м; ток күші — ампер (А)."
  }
 },
 {
  "id": "t8_l27_p26_ms",
  "type": "multi-select",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Последовательное и параллельное соединение проводников».",
   "en": "Select all quantities studied in the topic «Series and parallel connections of conductors».",
   "kk": "«Өткізгіштерді тізбектей және параллель жалғау» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила тока",
    "удельная теплота сгорания топлива",
    "электрическое сопротивление",
    "фокусное расстояние линзы"
   ],
   "en": [
    "current",
    "specific heat of fuel combustion",
    "electrical resistance",
    "focal length of a lens"
   ],
   "kk": [
    "ток күші",
    "отынның меншікті жану жылуы",
    "электр кедергісі",
    "линзаның фокустық қашықтығы"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила тока, электрическое сопротивление.",
   "en": "More than one option is correct — select them all. current, electrical resistance.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ток күші, электр кедергісі."
  }
 },
 {
  "id": "t8_l27_p26_sa",
  "type": "short-answer",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «длина световой волны»? Запиши единицу.",
   "en": "Which SI unit is used to measure «wavelength of light»? Write the unit.",
   "kk": "«жарық толқынының ұзындығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "нанометр",
    "нм",
    "nm"
   ],
   "en": [
    "nanometre",
    "nanometer",
    "nm"
   ],
   "kk": [
    "нанометр",
    "нм",
    "nm"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «длина световой волны» — нанометр (нм).",
   "en": "The SI unit of «wavelength of light» is nanometre (nm).",
   "kk": "«жарық толқынының ұзындығы» шамасының ХБЖ бірлігі — нанометр (нм)."
  }
 },
 {
  "id": "t8_l27_p26_mt",
  "type": "matching",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Последовательное и параллельное соединение проводников» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Series and parallel connections of conductors» with their SI units.",
   "kk": "«Өткізгіштерді тізбектей және параллель жалғау» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электрическое сопротивление",
     "электрическое напряжение",
     "сила тока"
    ],
    "en": [
     "electrical resistance",
     "voltage",
     "current"
    ],
    "kk": [
     "электр кедергісі",
     "электр кернеуі",
     "ток күші"
    ]
   },
   "right": {
    "ru": [
     "вольт (В)",
     "ампер (А)",
     "ом (Ом)"
    ],
    "en": [
     "volt (V)",
     "ampere (A)",
     "ohm (Ω)"
    ],
    "kk": [
     "вольт (В)",
     "ампер (А)",
     "ом (Ом)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электрическое сопротивление — ом (Ом); электрическое напряжение — вольт (В); сила тока — ампер (А).",
   "en": "Correct pairs: electrical resistance — ohm (Ω); voltage — volt (V); current — ampere (A).",
   "kk": "Дұрыс жұптар: электр кедергісі — ом (Ом); электр кернеуі — вольт (В); ток күші — ампер (А)."
  }
 },
 {
  "id": "t8_l28_p27_ms",
  "type": "multi-select",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Работа и мощность электрического тока».",
   "en": "Select all quantities studied in the topic «Work and power of electric current».",
   "kk": "«Электр тогының жұмысы мен қуаты» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа электрического тока",
    "масса",
    "время",
    "количество теплоты"
   ],
   "en": [
    "work of electric current",
    "mass",
    "time",
    "amount of heat"
   ],
   "kk": [
    "электр тогының жұмысы",
    "масса",
    "уақыт",
    "жылу мөлшері"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. время, работа электрического тока.",
   "en": "More than one option is correct — select them all. time, work of electric current.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. уақыт, электр тогының жұмысы."
  }
 },
 {
  "id": "t8_l28_p27_sa",
  "type": "short-answer",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «магнитная индукция»? Запиши единицу.",
   "en": "Which SI unit is used to measure «magnetic flux density»? Write the unit.",
   "kk": "«магнит индукциясы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "тесла",
    "тл",
    "t",
    "T",
    "Тл"
   ],
   "en": [
    "tesla",
    "t",
    "T"
   ],
   "kk": [
    "тесла",
    "тл",
    "t",
    "T",
    "Тл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «магнитная индукция» — тесла (Тл).",
   "en": "The SI unit of «magnetic flux density» is tesla (T).",
   "kk": "«магнит индукциясы» шамасының ХБЖ бірлігі — тесла (Тл)."
  }
 },
 {
  "id": "t8_l28_p27_mt",
  "type": "matching",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Работа и мощность электрического тока» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Work and power of electric current» with their SI units.",
   "kk": "«Электр тогының жұмысы мен қуаты» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "мощность электрического тока",
     "работа электрического тока",
     "время"
    ],
    "en": [
     "power of electric current",
     "work of electric current",
     "time"
    ],
    "kk": [
     "электр тогының қуаты",
     "электр тогының жұмысы",
     "уақыт"
    ]
   },
   "right": {
    "ru": [
     "ватт (Вт)",
     "джоуль (Дж)",
     "секунда (с)"
    ],
    "en": [
     "watt (W)",
     "joule (J)",
     "second (s)"
    ],
    "kk": [
     "ватт (Вт)",
     "джоуль (Дж)",
     "секунд (с)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: мощность электрического тока — ватт (Вт); работа электрического тока — джоуль (Дж); время — секунда (с).",
   "en": "Correct pairs: power of electric current — watt (W); work of electric current — joule (J); time — second (s).",
   "kk": "Дұрыс жұптар: электр тогының қуаты — ватт (Вт); электр тогының жұмысы — джоуль (Дж); уақыт — секунд (с)."
  }
 },
 {
  "id": "t8_l29_p28_ms",
  "type": "multi-select",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Тепловое действие электрического тока, закон Джоуля — Ленца».",
   "en": "Select all quantities studied in the topic «Thermal effect of electric current, Joule–Lenz law».",
   "kk": "«Электр тогының жылулық әсері, Джоуль–Ленц заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электрический заряд",
    "температура",
    "удельная теплоёмкость",
    "удельное сопротивление"
   ],
   "en": [
    "electric charge",
    "temperature",
    "specific heat capacity",
    "resistivity"
   ],
   "kk": [
    "электр заряды",
    "температура",
    "меншікті жылу сыйымдылығы",
    "меншікті кедергі"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельное сопротивление, электрический заряд.",
   "en": "More than one option is correct — select them all. resistivity, electric charge.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті кедергі, электр заряды."
  }
 },
 {
  "id": "t8_l29_p28_sa",
  "type": "short-answer",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «электрическое напряжение» в СИ.",
   "en": "Name the SI unit of «voltage».",
   "kk": "«электр кернеуі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "вольт",
    "в",
    "v",
    "V",
    "В"
   ],
   "en": [
    "volt",
    "v",
    "V"
   ],
   "kk": [
    "вольт",
    "в",
    "v",
    "V",
    "В"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электрическое напряжение» — вольт (В).",
   "en": "The SI unit of «voltage» is volt (V).",
   "kk": "«электр кернеуі» шамасының ХБЖ бірлігі — вольт (В)."
  }
 },
 {
  "id": "t8_l29_p28_mt",
  "type": "matching",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Тепловое действие электрического тока, закон Джоуля — Ленца» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Thermal effect of electric current, Joule–Lenz law» with their SI units.",
   "kk": "«Электр тогының жылулық әсері, Джоуль–Ленц заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "работа электрического тока",
     "сила",
     "мощность электрического тока"
    ],
    "en": [
     "work of electric current",
     "force",
     "power of electric current"
    ],
    "kk": [
     "электр тогының жұмысы",
     "күш",
     "электр тогының қуаты"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "ньютон (Н)",
     "ватт (Вт)"
    ],
    "en": [
     "joule (J)",
     "newton (N)",
     "watt (W)"
    ],
    "kk": [
     "джоуль (Дж)",
     "ньютон (Н)",
     "ватт (Вт)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: работа электрического тока — джоуль (Дж); сила — ньютон (Н); мощность электрического тока — ватт (Вт).",
   "en": "Correct pairs: work of electric current — joule (J); force — newton (N); power of electric current — watt (W).",
   "kk": "Дұрыс жұптар: электр тогының жұмысы — джоуль (Дж); күш — ньютон (Н); электр тогының қуаты — ватт (Вт)."
  }
 },
 {
  "id": "t8_l30_p29_ms",
  "type": "multi-select",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Зависимость электрического сопротивления металлов от температуры, сверхпроводимость».",
   "en": "Select all quantities studied in the topic «Dependence of metal resistance on temperature, superconductivity».",
   "kk": "«Металдардың электр кедергісінің температураға тәуелділігі, асқынөткізгіштік» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельное сопротивление",
    "оптическая сила линзы",
    "электрическое напряжение",
    "КПД теплового двигателя"
   ],
   "en": [
    "resistivity",
    "optical power of a lens",
    "voltage",
    "efficiency of a heat engine"
   ],
   "kk": [
    "меншікті кедергі",
    "линзаның оптикалық күші",
    "электр кернеуі",
    "жылу қозғалтқышының ПӘК"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. электрическое напряжение, удельное сопротивление.",
   "en": "More than one option is correct — select them all. voltage, resistivity.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электр кернеуі, меншікті кедергі."
  }
 },
 {
  "id": "t8_l30_p29_sa",
  "type": "short-answer",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «сила тока» в СИ.",
   "en": "Name the SI unit of «current».",
   "kk": "«ток күші» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "ампер",
    "а",
    "a",
    "A",
    "А"
   ],
   "en": [
    "ampere",
    "amp",
    "a",
    "A"
   ],
   "kk": [
    "ампер",
    "а",
    "a",
    "A",
    "А"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «сила тока» — ампер (А).",
   "en": "The SI unit of «current» is ampere (A).",
   "kk": "«ток күші» шамасының ХБЖ бірлігі — ампер (А)."
  }
 },
 {
  "id": "t8_l30_p29_mt",
  "type": "matching",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Зависимость электрического сопротивления металлов от температуры, сверхпроводимость» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Dependence of metal resistance on temperature, superconductivity» with their SI units.",
   "kk": "«Металдардың электр кедергісінің температураға тәуелділігі, асқынөткізгіштік» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электрическое сопротивление",
     "электрическое напряжение",
     "напряжённость электрического поля"
    ],
    "en": [
     "electrical resistance",
     "voltage",
     "electric field strength"
    ],
    "kk": [
     "электр кедергісі",
     "электр кернеуі",
     "электр өрісінің кернеулігі"
    ]
   },
   "right": {
    "ru": [
     "В/м",
     "ом (Ом)",
     "вольт (В)"
    ],
    "en": [
     "V/m",
     "ohm (Ω)",
     "volt (V)"
    ],
    "kk": [
     "В/м",
     "ом (Ом)",
     "вольт (В)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: электрическое сопротивление — ом (Ом); электрическое напряжение — вольт (В); напряжённость электрического поля — В/м.",
   "en": "Correct pairs: electrical resistance — ohm (Ω); voltage — volt (V); electric field strength — V/m.",
   "kk": "Дұрыс жұптар: электр кедергісі — ом (Ом); электр кернеуі — вольт (В); электр өрісінің кернеулігі — В/м."
  }
 },
 {
  "id": "t8_l31_p30_ms",
  "type": "multi-select",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электронагревательные приборы, лампа накаливания, короткое замыкание, плавкие предохранители».",
   "en": "Select all quantities studied in the topic «Electric heaters, incandescent lamp, short circuit, fuses».",
   "kk": "«Электр қыздырғыш құрылғылар, қыздыру шамы, қысқа тұйықталу, балқымалы сақтандырғыштар» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа электрического тока",
    "электрическое напряжение",
    "температура",
    "фокусное расстояние линзы"
   ],
   "en": [
    "work of electric current",
    "voltage",
    "temperature",
    "focal length of a lens"
   ],
   "kk": [
    "электр тогының жұмысы",
    "электр кернеуі",
    "температура",
    "линзаның фокустық қашықтығы"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. работа электрического тока, электрическое напряжение.",
   "en": "More than one option is correct — select them all. work of electric current, voltage.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электр тогының жұмысы, электр кернеуі."
  }
 },
 {
  "id": "t8_l31_p30_sa",
  "type": "short-answer",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «масса» в СИ.",
   "en": "Name the SI unit of «mass».",
   "kk": "«масса» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "килограмм",
    "кг",
    "kg"
   ],
   "en": [
    "kilogram",
    "kg"
   ],
   "kk": [
    "килограмм",
    "кг",
    "kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «масса» — килограмм (кг).",
   "en": "The SI unit of «mass» is kilogram (kg).",
   "kk": "«масса» шамасының ХБЖ бірлігі — килограмм (кг)."
  }
 },
 {
  "id": "t8_l31_p30_mt",
  "type": "matching",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электронагревательные приборы, лампа накаливания, короткое замыкание, плавкие предохранители» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electric heaters, incandescent lamp, short circuit, fuses» with their SI units.",
   "kk": "«Электр қыздырғыш құрылғылар, қыздыру шамы, қысқа тұйықталу, балқымалы сақтандырғыштар» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "мощность электрического тока",
     "электрическое напряжение",
     "электрическое сопротивление"
    ],
    "en": [
     "power of electric current",
     "voltage",
     "electrical resistance"
    ],
    "kk": [
     "электр тогының қуаты",
     "электр кернеуі",
     "электр кедергісі"
    ]
   },
   "right": {
    "ru": [
     "ватт (Вт)",
     "ом (Ом)",
     "вольт (В)"
    ],
    "en": [
     "watt (W)",
     "ohm (Ω)",
     "volt (V)"
    ],
    "kk": [
     "ватт (Вт)",
     "ом (Ом)",
     "вольт (В)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    2
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: мощность электрического тока — ватт (Вт); электрическое напряжение — вольт (В); электрическое сопротивление — ом (Ом).",
   "en": "Correct pairs: power of electric current — watt (W); voltage — volt (V); electrical resistance — ohm (Ω).",
   "kk": "Дұрыс жұптар: электр тогының қуаты — ватт (Вт); электр кернеуі — вольт (В); электр кедергісі — ом (Ом)."
  }
 },
 {
  "id": "t8_l32_p31_ms",
  "type": "multi-select",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Химическое действие электрического тока, закон Фарадея».",
   "en": "Select all quantities studied in the topic «Chemical effect of electric current, Faraday's law».",
   "kk": "«Электр тогының химиялық әсері, Фарадей заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа электрического тока",
    "удельная теплота парообразования",
    "мощность электрического тока",
    "удельная теплота сгорания топлива"
   ],
   "en": [
    "work of electric current",
    "specific heat of vaporization",
    "power of electric current",
    "specific heat of fuel combustion"
   ],
   "kk": [
    "электр тогының жұмысы",
    "меншікті булану жылуы",
    "электр тогының қуаты",
    "отынның меншікті жану жылуы"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. мощность электрического тока, работа электрического тока.",
   "en": "More than one option is correct — select them all. power of electric current, work of electric current.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электр тогының қуаты, электр тогының жұмысы."
  }
 },
 {
  "id": "t8_l32_p31_sa",
  "type": "short-answer",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «оптическая сила линзы» в СИ.",
   "en": "Name the SI unit of «optical power of a lens».",
   "kk": "«линзаның оптикалық күші» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "диоптрия",
    "дптр",
    "dioptre"
   ],
   "en": [
    "dioptre",
    "diopter",
    "dpt"
   ],
   "kk": [
    "диоптрия",
    "дптр"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «оптическая сила линзы» — диоптрия (дптр).",
   "en": "The SI unit of «optical power of a lens» is dioptre (dpt).",
   "kk": "«линзаның оптикалық күші» шамасының ХБЖ бірлігі — диоптрия (дптр)."
  }
 },
 {
  "id": "t8_l32_p31_mt",
  "type": "matching",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Химическое действие электрического тока, закон Фарадея» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Chemical effect of electric current, Faraday's law» with their SI units.",
   "kk": "«Электр тогының химиялық әсері, Фарадей заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила тока",
     "мощность электрического тока",
     "электрический заряд"
    ],
    "en": [
     "current",
     "power of electric current",
     "electric charge"
    ],
    "kk": [
     "ток күші",
     "электр тогының қуаты",
     "электр заряды"
    ]
   },
   "right": {
    "ru": [
     "ватт (Вт)",
     "кулон (Кл)",
     "ампер (А)"
    ],
    "en": [
     "watt (W)",
     "coulomb (C)",
     "ampere (A)"
    ],
    "kk": [
     "ватт (Вт)",
     "кулон (Кл)",
     "ампер (А)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: сила тока — ампер (А); мощность электрического тока — ватт (Вт); электрический заряд — кулон (Кл).",
   "en": "Correct pairs: current — ampere (A); power of electric current — watt (W); electric charge — coulomb (C).",
   "kk": "Дұрыс жұптар: ток күші — ампер (А); электр тогының қуаты — ватт (Вт); электр заряды — кулон (Кл)."
  }
 },
 {
  "id": "t8_l33_p32_ms",
  "type": "multi-select",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Постоянные магниты, магнитное поле».",
   "en": "Select all quantities studied in the topic «Permanent magnets, magnetic field».",
   "kk": "«Тұрақты магниттер, магнит өрісі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила Ампера",
    "магнитная индукция",
    "напряжённость электрического поля",
    "время"
   ],
   "en": [
    "Ampere force",
    "magnetic flux density",
    "electric field strength",
    "time"
   ],
   "kk": [
    "Ампер күші",
    "магнит индукциясы",
    "электр өрісінің кернеулігі",
    "уақыт"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила Ампера, магнитная индукция.",
   "en": "More than one option is correct — select them all. Ampere force, magnetic flux density.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. Ампер күші, магнит индукциясы."
  }
 },
 {
  "id": "t8_l33_p32_sa",
  "type": "short-answer",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «сила» в СИ.",
   "en": "Name the SI unit of «force».",
   "kk": "«күш» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ],
   "en": [
    "newton",
    "n",
    "N"
   ],
   "kk": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «сила» — ньютон (Н).",
   "en": "The SI unit of «force» is newton (N).",
   "kk": "«күш» шамасының ХБЖ бірлігі — ньютон (Н)."
  }
 },
 {
  "id": "t8_l33_p32_mt",
  "type": "matching",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Постоянные магниты, магнитное поле» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Permanent magnets, magnetic field» with their SI units.",
   "kk": "«Тұрақты магниттер, магнит өрісі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "магнитная индукция",
     "магнитный поток",
     "сила Ампера"
    ],
    "en": [
     "magnetic flux density",
     "magnetic flux",
     "Ampere force"
    ],
    "kk": [
     "магнит индукциясы",
     "магнит ағыны",
     "Ампер күші"
    ]
   },
   "right": {
    "ru": [
     "вебер (Вб)",
     "ньютон (Н)",
     "тесла (Тл)"
    ],
    "en": [
     "weber (Wb)",
     "newton (N)",
     "tesla (T)"
    ],
    "kk": [
     "вебер (Вб)",
     "ньютон (Н)",
     "тесла (Тл)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: магнитная индукция — тесла (Тл); магнитный поток — вебер (Вб); сила Ампера — ньютон (Н).",
   "en": "Correct pairs: magnetic flux density — tesla (T); magnetic flux — weber (Wb); Ampere force — newton (N).",
   "kk": "Дұрыс жұптар: магнит индукциясы — тесла (Тл); магнит ағыны — вебер (Вб); Ампер күші — ньютон (Н)."
  }
 },
 {
  "id": "t8_l34_p33_ms",
  "type": "multi-select",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Магнитное поле прямого тока. Магнитное поле катушки с током».",
   "en": "Select all quantities studied in the topic «Magnetic field of a straight current. Magnetic field of a current-carrying coil».",
   "kk": "«Түзу токтың магнит өрісі. Ток бар катушканың магнит өрісі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "магнитный поток",
    "работа электрического тока",
    "магнитная индукция"
   ],
   "en": [
    "efficiency of a heat engine",
    "magnetic flux",
    "work of electric current",
    "magnetic flux density"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "магнит ағыны",
    "электр тогының жұмысы",
    "магнит индукциясы"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. магнитный поток, магнитная индукция.",
   "en": "More than one option is correct — select them all. magnetic flux, magnetic flux density.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. магнит ағыны, магнит индукциясы."
  }
 },
 {
  "id": "t8_l34_p33_sa",
  "type": "short-answer",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «температура» в СИ.",
   "en": "Name the SI unit of «temperature».",
   "kk": "«температура» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "кельвин",
    "к",
    "k",
    "kelvin",
    "К"
   ],
   "en": [
    "kelvin",
    "k",
    "K"
   ],
   "kk": [
    "кельвин",
    "к",
    "k",
    "К"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «температура» — кельвин (К).",
   "en": "The SI unit of «temperature» is kelvin (K).",
   "kk": "«температура» шамасының ХБЖ бірлігі — кельвин (К)."
  }
 },
 {
  "id": "t8_l34_p33_mt",
  "type": "matching",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Магнитное поле прямого тока. Магнитное поле катушки с током» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Magnetic field of a straight current. Magnetic field of a current-carrying coil» with their SI units.",
   "kk": "«Түзу токтың магнит өрісі. Ток бар катушканың магнит өрісі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "магнитная индукция",
     "магнитный поток",
     "сила Ампера"
    ],
    "en": [
     "magnetic flux density",
     "magnetic flux",
     "Ampere force"
    ],
    "kk": [
     "магнит индукциясы",
     "магнит ағыны",
     "Ампер күші"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "тесла (Тл)",
     "вебер (Вб)"
    ],
    "en": [
     "newton (N)",
     "tesla (T)",
     "weber (Wb)"
    ],
    "kk": [
     "ньютон (Н)",
     "тесла (Тл)",
     "вебер (Вб)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: магнитная индукция — тесла (Тл); магнитный поток — вебер (Вб); сила Ампера — ньютон (Н).",
   "en": "Correct pairs: magnetic flux density — tesla (T); magnetic flux — weber (Wb); Ampere force — newton (N).",
   "kk": "Дұрыс жұптар: магнит индукциясы — тесла (Тл); магнит ағыны — вебер (Вб); Ампер күші — ньютон (Н)."
  }
 },
 {
  "id": "t8_l35_p34_ms",
  "type": "multi-select",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электромагниты и их применение».",
   "en": "Select all quantities studied in the topic «Electromagnets and their applications».",
   "kk": "«Электромагниттер және олардың қолданылуы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "магнитный поток",
    "время",
    "сила тока",
    "сила Ампера"
   ],
   "en": [
    "magnetic flux",
    "time",
    "current",
    "Ampere force"
   ],
   "kk": [
    "магнит ағыны",
    "уақыт",
    "ток күші",
    "Ампер күші"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила Ампера, магнитный поток.",
   "en": "More than one option is correct — select them all. Ampere force, magnetic flux.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. Ампер күші, магнит ағыны."
  }
 },
 {
  "id": "t8_l35_p34_sa",
  "type": "short-answer",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «удельная теплоёмкость» в СИ.",
   "en": "Name the SI unit of «specific heat capacity».",
   "kk": "«меншікті жылу сыйымдылығы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "дж/(кг·°c)",
    "дж/кг·°c",
    "дж/кг°c",
    "дж/(кг·с)"
   ],
   "en": [
    "j/(kg·°c)",
    "j/kg°c",
    "j/(kg·k)"
   ],
   "kk": [
    "дж/(кг·°c)",
    "дж/кг·°c"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплоёмкость» — Дж/(кг·°C).",
   "en": "The SI unit of «specific heat capacity» is J/(kg·°C).",
   "kk": "«меншікті жылу сыйымдылығы» шамасының ХБЖ бірлігі — Дж/(кг·°C)."
  }
 },
 {
  "id": "t8_l35_p34_mt",
  "type": "matching",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электромагниты и их применение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electromagnets and their applications» with their SI units.",
   "kk": "«Электромагниттер және олардың қолданылуы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "магнитный поток",
     "магнитная индукция",
     "сила Ампера"
    ],
    "en": [
     "magnetic flux",
     "magnetic flux density",
     "Ampere force"
    ],
    "kk": [
     "магнит ағыны",
     "магнит индукциясы",
     "Ампер күші"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "вебер (Вб)",
     "тесла (Тл)"
    ],
    "en": [
     "newton (N)",
     "weber (Wb)",
     "tesla (T)"
    ],
    "kk": [
     "ньютон (Н)",
     "вебер (Вб)",
     "тесла (Тл)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: магнитный поток — вебер (Вб); магнитная индукция — тесла (Тл); сила Ампера — ньютон (Н).",
   "en": "Correct pairs: magnetic flux — weber (Wb); magnetic flux density — tesla (T); Ampere force — newton (N).",
   "kk": "Дұрыс жұптар: магнит ағыны — вебер (Вб); магнит индукциясы — тесла (Тл); Ампер күші — ньютон (Н)."
  }
 },
 {
  "id": "t8_l36_p35_ms",
  "type": "multi-select",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Действие магнитного поля на проводник с током, электродвигатель, электроизмерительные приборы».",
   "en": "Select all quantities studied in the topic «Force of a magnetic field on a current-carrying conductor, electric motor, electrical measuring instruments».",
   "kk": "«Магнит өрісінің тогы бар өткізгішке әсері, электр қозғалтқышы, электр өлшеуіш құралдар» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД теплового двигателя",
    "сила",
    "работа газа",
    "магнитная индукция"
   ],
   "en": [
    "efficiency of a heat engine",
    "force",
    "work done by a gas",
    "magnetic flux density"
   ],
   "kk": [
    "жылу қозғалтқышының ПӘК",
    "күш",
    "газ жұмысы",
    "магнит индукциясы"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. магнитная индукция, сила.",
   "en": "More than one option is correct — select them all. magnetic flux density, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. магнит индукциясы, күш."
  }
 },
 {
  "id": "t8_l36_p35_sa",
  "type": "short-answer",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «электроёмкость» в СИ.",
   "en": "Name the SI unit of «capacitance».",
   "kk": "«электр сыйымдылығы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "фарад",
    "ф",
    "f",
    "F",
    "Ф"
   ],
   "en": [
    "farad",
    "f",
    "F"
   ],
   "kk": [
    "фарад",
    "ф",
    "f",
    "F",
    "Ф"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электроёмкость» — фарад (Ф).",
   "en": "The SI unit of «capacitance» is farad (F).",
   "kk": "«электр сыйымдылығы» шамасының ХБЖ бірлігі — фарад (Ф)."
  }
 },
 {
  "id": "t8_l36_p35_mt",
  "type": "matching",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Действие магнитного поля на проводник с током, электродвигатель, электроизмерительные приборы» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Force of a magnetic field on a current-carrying conductor, electric motor, electrical measuring instruments» with their SI units.",
   "kk": "«Магнит өрісінің тогы бар өткізгішке әсері, электр қозғалтқышы, электр өлшеуіш құралдар» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила",
     "магнитная индукция",
     "магнитный поток"
    ],
    "en": [
     "force",
     "magnetic flux density",
     "magnetic flux"
    ],
    "kk": [
     "күш",
     "магнит индукциясы",
     "магнит ағыны"
    ]
   },
   "right": {
    "ru": [
     "вебер (Вб)",
     "ньютон (Н)",
     "тесла (Тл)"
    ],
    "en": [
     "weber (Wb)",
     "newton (N)",
     "tesla (T)"
    ],
    "kk": [
     "вебер (Вб)",
     "ньютон (Н)",
     "тесла (Тл)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: сила — ньютон (Н); магнитная индукция — тесла (Тл); магнитный поток — вебер (Вб).",
   "en": "Correct pairs: force — newton (N); magnetic flux density — tesla (T); magnetic flux — weber (Wb).",
   "kk": "Дұрыс жұптар: күш — ньютон (Н); магнит индукциясы — тесла (Тл); магнит ағыны — вебер (Вб)."
  }
 },
 {
  "id": "t8_l37_p36_ms",
  "type": "multi-select",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электромагнитная индукция, генератор».",
   "en": "Select all quantities studied in the topic «Electromagnetic induction, generator».",
   "kk": "«Электромагниттік индукция, генератор» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила Ампера",
    "внутренняя энергия",
    "магнитная индукция",
    "сила"
   ],
   "en": [
    "Ampere force",
    "internal energy",
    "magnetic flux density",
    "force"
   ],
   "kk": [
    "Ампер күші",
    "ішкі энергия",
    "магнит индукциясы",
    "күш"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. магнитная индукция, сила Ампера.",
   "en": "More than one option is correct — select them all. magnetic flux density, Ampere force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. магнит индукциясы, Ампер күші."
  }
 },
 {
  "id": "t8_l37_p36_sa",
  "type": "short-answer",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «напряжённость электрического поля» в СИ.",
   "en": "Name the SI unit of «electric field strength».",
   "kk": "«электр өрісінің кернеулігі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "в/м",
    "v/m"
   ],
   "en": [
    "v/m"
   ],
   "kk": [
    "в/м",
    "v/m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «напряжённость электрического поля» — В/м.",
   "en": "The SI unit of «electric field strength» is V/m.",
   "kk": "«электр өрісінің кернеулігі» шамасының ХБЖ бірлігі — В/м."
  }
 },
 {
  "id": "t8_l37_p36_mt",
  "type": "matching",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электромагнитная индукция, генератор» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electromagnetic induction, generator» with their SI units.",
   "kk": "«Электромагниттік индукция, генератор» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "магнитная индукция",
     "магнитный поток",
     "сила Ампера"
    ],
    "en": [
     "magnetic flux density",
     "magnetic flux",
     "Ampere force"
    ],
    "kk": [
     "магнит индукциясы",
     "магнит ағыны",
     "Ампер күші"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "тесла (Тл)",
     "вебер (Вб)"
    ],
    "en": [
     "newton (N)",
     "tesla (T)",
     "weber (Wb)"
    ],
    "kk": [
     "ньютон (Н)",
     "тесла (Тл)",
     "вебер (Вб)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: магнитная индукция — тесла (Тл); магнитный поток — вебер (Вб); сила Ампера — ньютон (Н).",
   "en": "Correct pairs: magnetic flux density — tesla (T); magnetic flux — weber (Wb); Ampere force — newton (N).",
   "kk": "Дұрыс жұптар: магнит индукциясы — тесла (Тл); магнит ағыны — вебер (Вб); Ампер күші — ньютон (Н)."
  }
 },
 {
  "id": "t8_l38_p37_ms",
  "type": "multi-select",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Закон прямолинейного распространения света».",
   "en": "Select all quantities studied in the topic «Law of rectilinear propagation of light».",
   "kk": "«Жарықтың түзу сызықты таралу заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "фокусное расстояние линзы",
    "сила тока",
    "длина световой волны",
    "температура"
   ],
   "en": [
    "focal length of a lens",
    "current",
    "wavelength of light",
    "temperature"
   ],
   "kk": [
    "линзаның фокустық қашықтығы",
    "ток күші",
    "жарық толқынының ұзындығы",
    "температура"
   ]
  },
  "correctAnswer": [
   0,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. фокусное расстояние линзы, длина световой волны.",
   "en": "More than one option is correct — select them all. focal length of a lens, wavelength of light.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның фокустық қашықтығы, жарық толқынының ұзындығы."
  }
 },
 {
  "id": "t8_l38_p37_sa",
  "type": "short-answer",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «внутренняя энергия» в СИ.",
   "en": "Name the SI unit of «internal energy».",
   "kk": "«ішкі энергия» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «внутренняя энергия» — джоуль (Дж).",
   "en": "The SI unit of «internal energy» is joule (J).",
   "kk": "«ішкі энергия» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l38_p37_mt",
  "type": "matching",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Закон прямолинейного распространения света» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Law of rectilinear propagation of light» with their SI units.",
   "kk": "«Жарықтың түзу сызықты таралу заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "длина световой волны",
     "фокусное расстояние линзы",
     "оптическая сила линзы"
    ],
    "en": [
     "wavelength of light",
     "focal length of a lens",
     "optical power of a lens"
    ],
    "kk": [
     "жарық толқынының ұзындығы",
     "линзаның фокустық қашықтығы",
     "линзаның оптикалық күші"
    ]
   },
   "right": {
    "ru": [
     "диоптрия (дптр)",
     "метр (м)",
     "нанометр (нм)"
    ],
    "en": [
     "dioptre (dpt)",
     "metre (m)",
     "nanometre (nm)"
    ],
    "kk": [
     "диоптрия (дптр)",
     "метр (м)",
     "нанометр (нм)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: длина световой волны — нанометр (нм); фокусное расстояние линзы — метр (м); оптическая сила линзы — диоптрия (дптр).",
   "en": "Correct pairs: wavelength of light — nanometre (nm); focal length of a lens — metre (m); optical power of a lens — dioptre (dpt).",
   "kk": "Дұрыс жұптар: жарық толқынының ұзындығы — нанометр (нм); линзаның фокустық қашықтығы — метр (м); линзаның оптикалық күші — диоптрия (дптр)."
  }
 },
 {
  "id": "t8_l39_p38_ms",
  "type": "multi-select",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Отражение света, законы отражения, плоские зеркала».",
   "en": "Select all quantities studied in the topic «Reflection of light, laws of reflection, plane mirrors».",
   "kk": "«Жарықтың шағылуы, шағылу заңдары, жазық айналар» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электрический заряд",
    "электрическое сопротивление",
    "фокусное расстояние линзы",
    "оптическая сила линзы"
   ],
   "en": [
    "electric charge",
    "electrical resistance",
    "focal length of a lens",
    "optical power of a lens"
   ],
   "kk": [
    "электр заряды",
    "электр кедергісі",
    "линзаның фокустық қашықтығы",
    "линзаның оптикалық күші"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. фокусное расстояние линзы, оптическая сила линзы.",
   "en": "More than one option is correct — select them all. focal length of a lens, optical power of a lens.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның фокустық қашықтығы, линзаның оптикалық күші."
  }
 },
 {
  "id": "t8_l39_p38_sa",
  "type": "short-answer",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «сила Ампера» в СИ.",
   "en": "Name the SI unit of «Ampere force».",
   "kk": "«Ампер күші» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ],
   "en": [
    "newton",
    "n",
    "N"
   ],
   "kk": [
    "ньютон",
    "н",
    "n",
    "N",
    "Н"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «сила Ампера» — ньютон (Н).",
   "en": "The SI unit of «Ampere force» is newton (N).",
   "kk": "«Ампер күші» шамасының ХБЖ бірлігі — ньютон (Н)."
  }
 },
 {
  "id": "t8_l39_p38_mt",
  "type": "matching",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Отражение света, законы отражения, плоские зеркала» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Reflection of light, laws of reflection, plane mirrors» with their SI units.",
   "kk": "«Жарықтың шағылуы, шағылу заңдары, жазық айналар» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "длина световой волны",
     "фокусное расстояние линзы",
     "оптическая сила линзы"
    ],
    "en": [
     "wavelength of light",
     "focal length of a lens",
     "optical power of a lens"
    ],
    "kk": [
     "жарық толқынының ұзындығы",
     "линзаның фокустық қашықтығы",
     "линзаның оптикалық күші"
    ]
   },
   "right": {
    "ru": [
     "нанометр (нм)",
     "метр (м)",
     "диоптрия (дптр)"
    ],
    "en": [
     "nanometre (nm)",
     "metre (m)",
     "dioptre (dpt)"
    ],
    "kk": [
     "нанометр (нм)",
     "метр (м)",
     "диоптрия (дптр)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: длина световой волны — нанометр (нм); фокусное расстояние линзы — метр (м); оптическая сила линзы — диоптрия (дптр).",
   "en": "Correct pairs: wavelength of light — nanometre (nm); focal length of a lens — metre (m); optical power of a lens — dioptre (dpt).",
   "kk": "Дұрыс жұптар: жарық толқынының ұзындығы — нанометр (нм); линзаның фокустық қашықтығы — метр (м); линзаның оптикалық күші — диоптрия (дптр)."
  }
 },
 {
  "id": "t8_l40_p39_ms",
  "type": "multi-select",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Сферические зеркала, построение изображения в сферическом зеркале».",
   "en": "Select all quantities studied in the topic «Spherical mirrors, image construction in a spherical mirror».",
   "kk": "«Сфералық айналар, сфералық айнадағы бейнені салу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "количество теплоты",
    "магнитная индукция",
    "оптическая сила линзы",
    "длина световой волны"
   ],
   "en": [
    "amount of heat",
    "magnetic flux density",
    "optical power of a lens",
    "wavelength of light"
   ],
   "kk": [
    "жылу мөлшері",
    "магнит индукциясы",
    "линзаның оптикалық күші",
    "жарық толқынының ұзындығы"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. длина световой волны, оптическая сила линзы.",
   "en": "More than one option is correct — select them all. wavelength of light, optical power of a lens.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жарық толқынының ұзындығы, линзаның оптикалық күші."
  }
 },
 {
  "id": "t8_l40_p39_sa",
  "type": "short-answer",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «длина световой волны» в СИ.",
   "en": "Name the SI unit of «wavelength of light».",
   "kk": "«жарық толқынының ұзындығы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "нанометр",
    "нм",
    "nm"
   ],
   "en": [
    "nanometre",
    "nanometer",
    "nm"
   ],
   "kk": [
    "нанометр",
    "нм",
    "nm"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «длина световой волны» — нанометр (нм).",
   "en": "The SI unit of «wavelength of light» is nanometre (nm).",
   "kk": "«жарық толқынының ұзындығы» шамасының ХБЖ бірлігі — нанометр (нм)."
  }
 },
 {
  "id": "t8_l40_p39_mt",
  "type": "matching",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Сферические зеркала, построение изображения в сферическом зеркале» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Spherical mirrors, image construction in a spherical mirror» with their SI units.",
   "kk": "«Сфералық айналар, сфералық айнадағы бейнені салу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "фокусное расстояние линзы",
     "оптическая сила линзы",
     "длина световой волны"
    ],
    "en": [
     "focal length of a lens",
     "optical power of a lens",
     "wavelength of light"
    ],
    "kk": [
     "линзаның фокустық қашықтығы",
     "линзаның оптикалық күші",
     "жарық толқынының ұзындығы"
    ]
   },
   "right": {
    "ru": [
     "нанометр (нм)",
     "метр (м)",
     "диоптрия (дптр)"
    ],
    "en": [
     "nanometre (nm)",
     "metre (m)",
     "dioptre (dpt)"
    ],
    "kk": [
     "нанометр (нм)",
     "метр (м)",
     "диоптрия (дптр)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: фокусное расстояние линзы — метр (м); оптическая сила линзы — диоптрия (дптр); длина световой волны — нанометр (нм).",
   "en": "Correct pairs: focal length of a lens — metre (m); optical power of a lens — dioptre (dpt); wavelength of light — nanometre (nm).",
   "kk": "Дұрыс жұптар: линзаның фокустық қашықтығы — метр (м); линзаның оптикалық күші — диоптрия (дптр); жарық толқынының ұзындығы — нанометр (нм)."
  }
 },
 {
  "id": "t8_l41_p40_ms",
  "type": "multi-select",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Преломление света, закон преломления света, полное внутреннее отражение».",
   "en": "Select all quantities studied in the topic «Refraction of light, law of refraction, total internal reflection».",
   "kk": "«Жарықтың сынуы, жарықтың сыну заңы, толық ішкі шағылу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельная теплота плавления",
    "оптическая сила линзы",
    "электрический заряд",
    "длина световой волны"
   ],
   "en": [
    "specific heat of fusion",
    "optical power of a lens",
    "electric charge",
    "wavelength of light"
   ],
   "kk": [
    "меншікті балқу жылуы",
    "линзаның оптикалық күші",
    "электр заряды",
    "жарық толқынының ұзындығы"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. длина световой волны, оптическая сила линзы.",
   "en": "More than one option is correct — select them all. wavelength of light, optical power of a lens.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жарық толқынының ұзындығы, линзаның оптикалық күші."
  }
 },
 {
  "id": "t8_l41_p40_sa",
  "type": "short-answer",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «работа газа» в СИ.",
   "en": "Name the SI unit of «work done by a gas».",
   "kk": "«газ жұмысы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «работа газа» — джоуль (Дж).",
   "en": "The SI unit of «work done by a gas» is joule (J).",
   "kk": "«газ жұмысы» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l41_p40_mt",
  "type": "matching",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Преломление света, закон преломления света, полное внутреннее отражение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Refraction of light, law of refraction, total internal reflection» with their SI units.",
   "kk": "«Жарықтың сынуы, жарықтың сыну заңы, толық ішкі шағылу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "длина световой волны",
     "оптическая сила линзы",
     "фокусное расстояние линзы"
    ],
    "en": [
     "wavelength of light",
     "optical power of a lens",
     "focal length of a lens"
    ],
    "kk": [
     "жарық толқынының ұзындығы",
     "линзаның оптикалық күші",
     "линзаның фокустық қашықтығы"
    ]
   },
   "right": {
    "ru": [
     "диоптрия (дптр)",
     "нанометр (нм)",
     "метр (м)"
    ],
    "en": [
     "dioptre (dpt)",
     "nanometre (nm)",
     "metre (m)"
    ],
    "kk": [
     "диоптрия (дптр)",
     "нанометр (нм)",
     "метр (м)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: длина световой волны — нанометр (нм); оптическая сила линзы — диоптрия (дптр); фокусное расстояние линзы — метр (м).",
   "en": "Correct pairs: wavelength of light — nanometre (nm); optical power of a lens — dioptre (dpt); focal length of a lens — metre (m).",
   "kk": "Дұрыс жұптар: жарық толқынының ұзындығы — нанометр (нм); линзаның оптикалық күші — диоптрия (дптр); линзаның фокустық қашықтығы — метр (м)."
  }
 },
 {
  "id": "t8_l42_p41_ms",
  "type": "multi-select",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Линзы, оптическая сила линзы, формула тонкой линзы. Построение изображений в линзах».",
   "en": "Select all quantities studied in the topic «Lenses, optical power, thin-lens formula. Image construction in lenses».",
   "kk": "«Линзалар, линзаның оптикалық күші, жұқа линза формуласы. Линзадағы бейнелерді салу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельная теплота парообразования",
    "температура",
    "длина световой волны",
    "фокусное расстояние линзы"
   ],
   "en": [
    "specific heat of vaporization",
    "temperature",
    "wavelength of light",
    "focal length of a lens"
   ],
   "kk": [
    "меншікті булану жылуы",
    "температура",
    "жарық толқынының ұзындығы",
    "линзаның фокустық қашықтығы"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. фокусное расстояние линзы, длина световой волны.",
   "en": "More than one option is correct — select them all. focal length of a lens, wavelength of light.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның фокустық қашықтығы, жарық толқынының ұзындығы."
  }
 },
 {
  "id": "t8_l42_p41_sa",
  "type": "short-answer",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «магнитная индукция» в СИ.",
   "en": "Name the SI unit of «magnetic flux density».",
   "kk": "«магнит индукциясы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "тесла",
    "тл",
    "t",
    "T",
    "Тл"
   ],
   "en": [
    "tesla",
    "t",
    "T"
   ],
   "kk": [
    "тесла",
    "тл",
    "t",
    "T",
    "Тл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «магнитная индукция» — тесла (Тл).",
   "en": "The SI unit of «magnetic flux density» is tesla (T).",
   "kk": "«магнит индукциясы» шамасының ХБЖ бірлігі — тесла (Тл)."
  }
 },
 {
  "id": "t8_l42_p41_mt",
  "type": "matching",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Линзы, оптическая сила линзы, формула тонкой линзы. Построение изображений в линзах» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lenses, optical power, thin-lens formula. Image construction in lenses» with their SI units.",
   "kk": "«Линзалар, линзаның оптикалық күші, жұқа линза формуласы. Линзадағы бейнелерді салу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "оптическая сила линзы",
     "фокусное расстояние линзы",
     "длина световой волны"
    ],
    "en": [
     "optical power of a lens",
     "focal length of a lens",
     "wavelength of light"
    ],
    "kk": [
     "линзаның оптикалық күші",
     "линзаның фокустық қашықтығы",
     "жарық толқынының ұзындығы"
    ]
   },
   "right": {
    "ru": [
     "нанометр (нм)",
     "диоптрия (дптр)",
     "метр (м)"
    ],
    "en": [
     "nanometre (nm)",
     "dioptre (dpt)",
     "metre (m)"
    ],
    "kk": [
     "нанометр (нм)",
     "диоптрия (дптр)",
     "метр (м)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: оптическая сила линзы — диоптрия (дптр); фокусное расстояние линзы — метр (м); длина световой волны — нанометр (нм).",
   "en": "Correct pairs: optical power of a lens — dioptre (dpt); focal length of a lens — metre (m); wavelength of light — nanometre (nm).",
   "kk": "Дұрыс жұптар: линзаның оптикалық күші — диоптрия (дптр); линзаның фокустық қашықтығы — метр (м); жарық толқынының ұзындығы — нанометр (нм)."
  }
 },
 {
  "id": "t8_l43_p42_ms",
  "type": "multi-select",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Глаз как оптическая система, дефекты зрения и способы их исправления».",
   "en": "Select all quantities studied in the topic «The eye as an optical system, visual defects and their correction».",
   "kk": "«Оптикалық жүйе ретіндегі көз, көру ақаулары және оларды түзету» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "напряжённость электрического поля",
    "фокусное расстояние линзы",
    "оптическая сила линзы",
    "температура"
   ],
   "en": [
    "electric field strength",
    "focal length of a lens",
    "optical power of a lens",
    "temperature"
   ],
   "kk": [
    "электр өрісінің кернеулігі",
    "линзаның фокустық қашықтығы",
    "линзаның оптикалық күші",
    "температура"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. оптическая сила линзы, фокусное расстояние линзы.",
   "en": "More than one option is correct — select them all. optical power of a lens, focal length of a lens.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның оптикалық күші, линзаның фокустық қашықтығы."
  }
 },
 {
  "id": "t8_l43_p42_sa",
  "type": "short-answer",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «удельная теплота парообразования» в СИ.",
   "en": "Name the SI unit of «specific heat of vaporization».",
   "kk": "«меншікті булану жылуы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "дж/кг",
    "j/kg"
   ],
   "en": [
    "j/kg"
   ],
   "kk": [
    "дж/кг",
    "j/kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплота парообразования» — Дж/кг.",
   "en": "The SI unit of «specific heat of vaporization» is J/kg.",
   "kk": "«меншікті булану жылуы» шамасының ХБЖ бірлігі — Дж/кг."
  }
 },
 {
  "id": "t8_l43_p42_mt",
  "type": "matching",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Глаз как оптическая система, дефекты зрения и способы их исправления» и их единицы измерения в СИ.",
   "en": "Match the quantities from «The eye as an optical system, visual defects and their correction» with their SI units.",
   "kk": "«Оптикалық жүйе ретіндегі көз, көру ақаулары және оларды түзету» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "оптическая сила линзы",
     "фокусное расстояние линзы",
     "длина световой волны"
    ],
    "en": [
     "optical power of a lens",
     "focal length of a lens",
     "wavelength of light"
    ],
    "kk": [
     "линзаның оптикалық күші",
     "линзаның фокустық қашықтығы",
     "жарық толқынының ұзындығы"
    ]
   },
   "right": {
    "ru": [
     "нанометр (нм)",
     "диоптрия (дптр)",
     "метр (м)"
    ],
    "en": [
     "nanometre (nm)",
     "dioptre (dpt)",
     "metre (m)"
    ],
    "kk": [
     "нанометр (нм)",
     "диоптрия (дптр)",
     "метр (м)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: оптическая сила линзы — диоптрия (дптр); фокусное расстояние линзы — метр (м); длина световой волны — нанометр (нм).",
   "en": "Correct pairs: optical power of a lens — dioptre (dpt); focal length of a lens — metre (m); wavelength of light — nanometre (nm).",
   "kk": "Дұрыс жұптар: линзаның оптикалық күші — диоптрия (дптр); линзаның фокустық қашықтығы — метр (м); жарық толқынының ұзындығы — нанометр (нм)."
  }
 },
 {
  "id": "t8_l44_p43_ms",
  "type": "multi-select",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Оптические приборы».",
   "en": "Select all quantities studied in the topic «Optical instruments».",
   "kk": "«Оптикалық құралдар» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа электрического тока",
    "фокусное расстояние линзы",
    "длина световой волны",
    "удельная теплота сгорания топлива"
   ],
   "en": [
    "work of electric current",
    "focal length of a lens",
    "wavelength of light",
    "specific heat of fuel combustion"
   ],
   "kk": [
    "электр тогының жұмысы",
    "линзаның фокустық қашықтығы",
    "жарық толқынының ұзындығы",
    "отынның меншікті жану жылуы"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. фокусное расстояние линзы, длина световой волны.",
   "en": "More than one option is correct — select them all. focal length of a lens, wavelength of light.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның фокустық қашықтығы, жарық толқынының ұзындығы."
  }
 },
 {
  "id": "t8_l44_p43_sa",
  "type": "short-answer",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «электрическое сопротивление» в СИ.",
   "en": "Name the SI unit of «electrical resistance».",
   "kk": "«электр кедергісі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "ом",
    "ом",
    "ohm",
    "Ω"
   ],
   "en": [
    "ohm",
    "Ω",
    "ohms"
   ],
   "kk": [
    "ом",
    "ohm",
    "Ω"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электрическое сопротивление» — ом (Ом).",
   "en": "The SI unit of «electrical resistance» is ohm (Ω).",
   "kk": "«электр кедергісі» шамасының ХБЖ бірлігі — ом (Ом)."
  }
 },
 {
  "id": "t8_l44_p43_mt",
  "type": "matching",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Оптические приборы» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Optical instruments» with their SI units.",
   "kk": "«Оптикалық құралдар» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "оптическая сила линзы",
     "фокусное расстояние линзы",
     "длина световой волны"
    ],
    "en": [
     "optical power of a lens",
     "focal length of a lens",
     "wavelength of light"
    ],
    "kk": [
     "линзаның оптикалық күші",
     "линзаның фокустық қашықтығы",
     "жарық толқынының ұзындығы"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "нанометр (нм)",
     "диоптрия (дптр)"
    ],
    "en": [
     "metre (m)",
     "nanometre (nm)",
     "dioptre (dpt)"
    ],
    "kk": [
     "метр (м)",
     "нанометр (нм)",
     "диоптрия (дптр)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: оптическая сила линзы — диоптрия (дптр); фокусное расстояние линзы — метр (м); длина световой волны — нанометр (нм).",
   "en": "Correct pairs: optical power of a lens — dioptre (dpt); focal length of a lens — metre (m); wavelength of light — nanometre (nm).",
   "kk": "Дұрыс жұптар: линзаның оптикалық күші — диоптрия (дптр); линзаның фокустық қашықтығы — метр (м); жарық толқынының ұзындығы — нанометр (нм)."
  }
 },
 {
  "id": "t8_l45_lab1_ms",
  "type": "multi-select",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №1: Смешивание воды и количество теплоты». Отметь все величины, которые относятся к разделу «тепловые явления».",
   "en": "Topic «Lab No. 1: Mixing water and quantity of heat». Select all quantities that belong to the section «thermal phenomena».",
   "kk": "«Зертхана №1: Суды араластыру және жылу мөлшері» тақырыбы. «жылулық құбылыстар» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "температура",
    "работа электрического тока",
    "сила Ампера",
    "время"
   ],
   "en": [
    "temperature",
    "work of electric current",
    "Ampere force",
    "time"
   ],
   "kk": [
    "температура",
    "электр тогының жұмысы",
    "Ампер күші",
    "уақыт"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. температура, время.",
   "en": "More than one option is correct — select them all. temperature, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. температура, уақыт."
  }
 },
 {
  "id": "t8_l45_lab1_sa",
  "type": "short-answer",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «удельное сопротивление» в СИ.",
   "en": "Name the SI unit of «resistivity».",
   "kk": "«меншікті кедергі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "ом·м",
    "ом*м",
    "ohm·m"
   ],
   "en": [
    "Ω·m",
    "ohm·m",
    "ohm·meter"
   ],
   "kk": [
    "ом·м",
    "ohm·m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельное сопротивление» — Ом·м.",
   "en": "The SI unit of «resistivity» is Ω·m.",
   "kk": "«меншікті кедергі» шамасының ХБЖ бірлігі — Ом·м."
  }
 },
 {
  "id": "t8_l45_lab1_mt",
  "type": "matching",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №1: Смешивание воды и количество теплоты» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 1: Mixing water and quantity of heat» with their SI units.",
   "kk": "«Зертхана №1: Суды араластыру және жылу мөлшері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "удельная теплота парообразования",
     "внутренняя энергия",
     "объём"
    ],
    "en": [
     "specific heat of vaporization",
     "internal energy",
     "volume"
    ],
    "kk": [
     "меншікті булану жылуы",
     "ішкі энергия",
     "көлем"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "кубический метр (м³)",
     "Дж/кг"
    ],
    "en": [
     "joule (J)",
     "cubic metre (m³)",
     "J/kg"
    ],
    "kk": [
     "джоуль (Дж)",
     "текше метр (м³)",
     "Дж/кг"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: удельная теплота парообразования — Дж/кг; внутренняя энергия — джоуль (Дж); объём — кубический метр (м³).",
   "en": "Correct pairs: specific heat of vaporization — J/kg; internal energy — joule (J); volume — cubic metre (m³).",
   "kk": "Дұрыс жұптар: меншікті булану жылуы — Дж/кг; ішкі энергия — джоуль (Дж); көлем — текше метр (м³)."
  }
 },
 {
  "id": "t8_l46_lab2_ms",
  "type": "multi-select",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №2: Удельная теплота плавления льда». Отметь все величины, которые относятся к разделу «тепловые явления».",
   "en": "Topic «Lab No. 2: Specific latent heat of fusion of ice». Select all quantities that belong to the section «thermal phenomena».",
   "kk": "«Зертхана №2: Мұздың меншікті балқу жылуы» тақырыбы. «жылулық құбылыстар» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "время",
    "оптическая сила линзы",
    "электроёмкость",
    "работа газа"
   ],
   "en": [
    "time",
    "optical power of a lens",
    "capacitance",
    "work done by a gas"
   ],
   "kk": [
    "уақыт",
    "линзаның оптикалық күші",
    "электр сыйымдылығы",
    "газ жұмысы"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. работа газа, время.",
   "en": "More than one option is correct — select them all. work done by a gas, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. газ жұмысы, уақыт."
  }
 },
 {
  "id": "t8_l46_lab2_sa",
  "type": "short-answer",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «удельная теплота плавления» в СИ.",
   "en": "Name the SI unit of «specific heat of fusion».",
   "kk": "«меншікті балқу жылуы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "дж/кг",
    "j/kg"
   ],
   "en": [
    "j/kg"
   ],
   "kk": [
    "дж/кг",
    "j/kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплота плавления» — Дж/кг.",
   "en": "The SI unit of «specific heat of fusion» is J/kg.",
   "kk": "«меншікті балқу жылуы» шамасының ХБЖ бірлігі — Дж/кг."
  }
 },
 {
  "id": "t8_l46_lab2_mt",
  "type": "matching",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №2: Удельная теплота плавления льда» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 2: Specific latent heat of fusion of ice» with their SI units.",
   "kk": "«Зертхана №2: Мұздың меншікті балқу жылуы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "внутренняя энергия",
     "удельная теплоёмкость",
     "время"
    ],
    "en": [
     "internal energy",
     "specific heat capacity",
     "time"
    ],
    "kk": [
     "ішкі энергия",
     "меншікті жылу сыйымдылығы",
     "уақыт"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "Дж/(кг·°C)",
     "джоуль (Дж)"
    ],
    "en": [
     "second (s)",
     "J/(kg·°C)",
     "joule (J)"
    ],
    "kk": [
     "секунд (с)",
     "Дж/(кг·°C)",
     "джоуль (Дж)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: внутренняя энергия — джоуль (Дж); удельная теплоёмкость — Дж/(кг·°C); время — секунда (с).",
   "en": "Correct pairs: internal energy — joule (J); specific heat capacity — J/(kg·°C); time — second (s).",
   "kk": "Дұрыс жұптар: ішкі энергия — джоуль (Дж); меншікті жылу сыйымдылығы — Дж/(кг·°C); уақыт — секунд (с)."
  }
 },
 {
  "id": "t8_l47_lab3_ms",
  "type": "multi-select",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №3: Цепь: ток и напряжение». Отметь все величины, которые относятся к разделу «тепловые явления».",
   "en": "Topic «Lab No. 3: Circuit: current and voltage». Select all quantities that belong to the section «thermal phenomena».",
   "kk": "«Зертхана №3: Тізбек: ток және кернеу» тақырыбы. «жылулық құбылыстар» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа газа",
    "количество теплоты",
    "магнитная индукция",
    "электрическое напряжение"
   ],
   "en": [
    "work done by a gas",
    "amount of heat",
    "magnetic flux density",
    "voltage"
   ],
   "kk": [
    "газ жұмысы",
    "жылу мөлшері",
    "магнит индукциясы",
    "электр кернеуі"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. работа газа, количество теплоты.",
   "en": "More than one option is correct — select them all. work done by a gas, amount of heat.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. газ жұмысы, жылу мөлшері."
  }
 },
 {
  "id": "t8_l47_lab3_sa",
  "type": "short-answer",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «электрический заряд» в СИ.",
   "en": "Name the SI unit of «electric charge».",
   "kk": "«электр заряды» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "кулон",
    "кл",
    "c",
    "C",
    "Кл"
   ],
   "en": [
    "coulomb",
    "c",
    "C"
   ],
   "kk": [
    "кулон",
    "кл",
    "c",
    "C",
    "Кл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «электрический заряд» — кулон (Кл).",
   "en": "The SI unit of «electric charge» is coulomb (C).",
   "kk": "«электр заряды» шамасының ХБЖ бірлігі — кулон (Кл)."
  }
 },
 {
  "id": "t8_l47_lab3_mt",
  "type": "matching",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №3: Цепь: ток и напряжение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 3: Circuit: current and voltage» with their SI units.",
   "kk": "«Зертхана №3: Тізбек: ток және кернеу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "удельная теплота парообразования",
     "время"
    ],
    "en": [
     "mass",
     "specific heat of vaporization",
     "time"
    ],
    "kk": [
     "масса",
     "меншікті булану жылуы",
     "уақыт"
    ]
   },
   "right": {
    "ru": [
     "Дж/кг",
     "секунда (с)",
     "килограмм (кг)"
    ],
    "en": [
     "J/kg",
     "second (s)",
     "kilogram (kg)"
    ],
    "kk": [
     "Дж/кг",
     "секунд (с)",
     "килограмм (кг)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: масса — килограмм (кг); удельная теплота парообразования — Дж/кг; время — секунда (с).",
   "en": "Correct pairs: mass — kilogram (kg); specific heat of vaporization — J/kg; time — second (s).",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); меншікті булану жылуы — Дж/кг; уақыт — секунд (с)."
  }
 },
 {
  "id": "t8_l48_lab4_ms",
  "type": "multi-select",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №4: Зависимость I от U». Отметь все величины, которые относятся к разделу «электрические явления».",
   "en": "Topic «Lab No. 4: Dependence of I on U». Select all quantities that belong to the section «electrical phenomena».",
   "kk": "«Зертхана №4: I-дің U-ге тәуелділігі» тақырыбы. «электр құбылыстары» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "фокусное расстояние линзы",
    "удельное сопротивление",
    "работа электрического тока",
    "время"
   ],
   "en": [
    "focal length of a lens",
    "resistivity",
    "work of electric current",
    "time"
   ],
   "kk": [
    "линзаның фокустық қашықтығы",
    "меншікті кедергі",
    "электр тогының жұмысы",
    "уақыт"
   ]
  },
  "correctAnswer": [
   1,
   2
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельное сопротивление, работа электрического тока.",
   "en": "More than one option is correct — select them all. resistivity, work of electric current.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті кедергі, электр тогының жұмысы."
  }
 },
 {
  "id": "t8_l48_lab4_sa",
  "type": "short-answer",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «объём» в СИ.",
   "en": "Name the SI unit of «volume».",
   "kk": "«көлем» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "м3",
    "м³",
    "кубический метр",
    "m3"
   ],
   "en": [
    "m3",
    "m³",
    "cubic metre",
    "cubic meter"
   ],
   "kk": [
    "м3",
    "м³",
    "текше метр"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «объём» — кубический метр (м³).",
   "en": "The SI unit of «volume» is cubic metre (m³).",
   "kk": "«көлем» шамасының ХБЖ бірлігі — текше метр (м³)."
  }
 },
 {
  "id": "t8_l48_lab4_mt",
  "type": "matching",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №4: Зависимость I от U» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 4: Dependence of I on U» with their SI units.",
   "kk": "«Зертхана №4: I-дің U-ге тәуелділігі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "удельное сопротивление",
     "мощность электрического тока",
     "сила"
    ],
    "en": [
     "resistivity",
     "power of electric current",
     "force"
    ],
    "kk": [
     "меншікті кедергі",
     "электр тогының қуаты",
     "күш"
    ]
   },
   "right": {
    "ru": [
     "ватт (Вт)",
     "ньютон (Н)",
     "Ом·м"
    ],
    "en": [
     "watt (W)",
     "newton (N)",
     "Ω·m"
    ],
    "kk": [
     "ватт (Вт)",
     "ньютон (Н)",
     "Ом·м"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: удельное сопротивление — Ом·м; мощность электрического тока — ватт (Вт); сила — ньютон (Н).",
   "en": "Correct pairs: resistivity — Ω·m; power of electric current — watt (W); force — newton (N).",
   "kk": "Дұрыс жұптар: меншікті кедергі — Ом·м; электр тогының қуаты — ватт (Вт); күш — ньютон (Н)."
  }
 },
 {
  "id": "t8_l49_lab5_ms",
  "type": "multi-select",
  "topic": "lab5",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №5: Последовательное соединение». Отметь все величины, которые относятся к разделу «электрические явления».",
   "en": "Topic «Lab No. 5: Series connection». Select all quantities that belong to the section «electrical phenomena».",
   "kk": "«Зертхана №5: Тізбектей жалғау» тақырыбы. «электр құбылыстары» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электроёмкость",
    "удельное сопротивление",
    "удельная теплота парообразования",
    "объём"
   ],
   "en": [
    "capacitance",
    "resistivity",
    "specific heat of vaporization",
    "volume"
   ],
   "kk": [
    "электр сыйымдылығы",
    "меншікті кедергі",
    "меншікті булану жылуы",
    "көлем"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. электроёмкость, удельное сопротивление.",
   "en": "More than one option is correct — select them all. capacitance, resistivity.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электр сыйымдылығы, меншікті кедергі."
  }
 },
 {
  "id": "t8_l49_lab5_sa",
  "type": "short-answer",
  "topic": "lab5",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «КПД теплового двигателя» в СИ.",
   "en": "Name the SI unit of «efficiency of a heat engine».",
   "kk": "«жылу қозғалтқышының ПӘК» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "процент",
    "%",
    "процентов"
   ],
   "en": [
    "percent",
    "%",
    "per cent"
   ],
   "kk": [
    "процент",
    "%",
    "пайыз"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «КПД теплового двигателя» — процент (%).",
   "en": "The SI unit of «efficiency of a heat engine» is percent (%).",
   "kk": "«жылу қозғалтқышының ПӘК» шамасының ХБЖ бірлігі — процент (%)."
  }
 },
 {
  "id": "t8_l49_lab5_mt",
  "type": "matching",
  "topic": "lab5",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №5: Последовательное соединение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 5: Series connection» with their SI units.",
   "kk": "«Зертхана №5: Тізбектей жалғау» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "мощность электрического тока",
     "электрическое напряжение",
     "сила"
    ],
    "en": [
     "power of electric current",
     "voltage",
     "force"
    ],
    "kk": [
     "электр тогының қуаты",
     "электр кернеуі",
     "күш"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "вольт (В)",
     "ватт (Вт)"
    ],
    "en": [
     "newton (N)",
     "volt (V)",
     "watt (W)"
    ],
    "kk": [
     "ньютон (Н)",
     "вольт (В)",
     "ватт (Вт)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: мощность электрического тока — ватт (Вт); электрическое напряжение — вольт (В); сила — ньютон (Н).",
   "en": "Correct pairs: power of electric current — watt (W); voltage — volt (V); force — newton (N).",
   "kk": "Дұрыс жұптар: электр тогының қуаты — ватт (Вт); электр кернеуі — вольт (В); күш — ньютон (Н)."
  }
 },
 {
  "id": "t8_l50_lab6_ms",
  "type": "multi-select",
  "topic": "lab6",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №6: Параллельное соединение». Отметь все величины, которые относятся к разделу «электрические явления».",
   "en": "Topic «Lab No. 6: Parallel connection». Select all quantities that belong to the section «electrical phenomena».",
   "kk": "«Зертхана №6: Параллель жалғау» тақырыбы. «электр құбылыстары» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "фокусное расстояние линзы",
    "внутренняя энергия",
    "напряжённость электрического поля",
    "сила"
   ],
   "en": [
    "focal length of a lens",
    "internal energy",
    "electric field strength",
    "force"
   ],
   "kk": [
    "линзаның фокустық қашықтығы",
    "ішкі энергия",
    "электр өрісінің кернеулігі",
    "күш"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. напряжённость электрического поля, сила.",
   "en": "More than one option is correct — select them all. electric field strength, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электр өрісінің кернеулігі, күш."
  }
 },
 {
  "id": "t8_l50_lab6_sa",
  "type": "short-answer",
  "topic": "lab6",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «количество теплоты» в СИ.",
   "en": "Name the SI unit of «amount of heat».",
   "kk": "«жылу мөлшері» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ],
   "en": [
    "joule",
    "j",
    "J"
   ],
   "kk": [
    "джоуль",
    "дж",
    "j",
    "J",
    "Дж"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «количество теплоты» — джоуль (Дж).",
   "en": "The SI unit of «amount of heat» is joule (J).",
   "kk": "«жылу мөлшері» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l50_lab6_mt",
  "type": "matching",
  "topic": "lab6",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №6: Параллельное соединение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 6: Parallel connection» with their SI units.",
   "kk": "«Зертхана №6: Параллель жалғау» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "напряжённость электрического поля",
     "электрическое сопротивление",
     "работа электрического тока"
    ],
    "en": [
     "electric field strength",
     "electrical resistance",
     "work of electric current"
    ],
    "kk": [
     "электр өрісінің кернеулігі",
     "электр кедергісі",
     "электр тогының жұмысы"
    ]
   },
   "right": {
    "ru": [
     "ом (Ом)",
     "В/м",
     "джоуль (Дж)"
    ],
    "en": [
     "ohm (Ω)",
     "V/m",
     "joule (J)"
    ],
    "kk": [
     "ом (Ом)",
     "В/м",
     "джоуль (Дж)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    1
   ],
   [
    1,
    0
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: напряжённость электрического поля — В/м; электрическое сопротивление — ом (Ом); работа электрического тока — джоуль (Дж).",
   "en": "Correct pairs: electric field strength — V/m; electrical resistance — ohm (Ω); work of electric current — joule (J).",
   "kk": "Дұрыс жұптар: электр өрісінің кернеулігі — В/м; электр кедергісі — ом (Ом); электр тогының жұмысы — джоуль (Дж)."
  }
 },
 {
  "id": "t8_l51_lab7_ms",
  "type": "multi-select",
  "topic": "lab7",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №7: Работа и мощность тока». Отметь все величины, которые относятся к разделу «электрические явления».",
   "en": "Topic «Lab No. 7: Work and power of electric current». Select all quantities that belong to the section «electrical phenomena».",
   "kk": "«Зертхана №7: Токтың жұмысы мен қуаты» тақырыбы. «электр құбылыстары» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электрическое напряжение",
    "количество теплоты",
    "удельная теплота сгорания топлива",
    "удельное сопротивление"
   ],
   "en": [
    "voltage",
    "amount of heat",
    "specific heat of fuel combustion",
    "resistivity"
   ],
   "kk": [
    "электр кернеуі",
    "жылу мөлшері",
    "отынның меншікті жану жылуы",
    "меншікті кедергі"
   ]
  },
  "correctAnswer": [
   0,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. удельное сопротивление, электрическое напряжение.",
   "en": "More than one option is correct — select them all. resistivity, voltage.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. меншікті кедергі, электр кернеуі."
  }
 },
 {
  "id": "t8_l51_lab7_sa",
  "type": "short-answer",
  "topic": "lab7",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «фокусное расстояние линзы» в СИ.",
   "en": "Name the SI unit of «focal length of a lens».",
   "kk": "«линзаның фокустық қашықтығы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre",
    "meter",
    "m",
    "M"
   ],
   "kk": [
    "метр",
    "м",
    "m",
    "M"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «фокусное расстояние линзы» — метр (м).",
   "en": "The SI unit of «focal length of a lens» is metre (m).",
   "kk": "«линзаның фокустық қашықтығы» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t8_l51_lab7_mt",
  "type": "matching",
  "topic": "lab7",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №7: Работа и мощность тока» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 7: Work and power of electric current» with their SI units.",
   "kk": "«Зертхана №7: Токтың жұмысы мен қуаты» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "работа электрического тока",
     "электрическое сопротивление",
     "удельное сопротивление"
    ],
    "en": [
     "work of electric current",
     "electrical resistance",
     "resistivity"
    ],
    "kk": [
     "электр тогының жұмысы",
     "электр кедергісі",
     "меншікті кедергі"
    ]
   },
   "right": {
    "ru": [
     "Ом·м",
     "ом (Ом)",
     "джоуль (Дж)"
    ],
    "en": [
     "Ω·m",
     "ohm (Ω)",
     "joule (J)"
    ],
    "kk": [
     "Ом·м",
     "ом (Ом)",
     "джоуль (Дж)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    2
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: работа электрического тока — джоуль (Дж); электрическое сопротивление — ом (Ом); удельное сопротивление — Ом·м.",
   "en": "Correct pairs: work of electric current — joule (J); electrical resistance — ohm (Ω); resistivity — Ω·m.",
   "kk": "Дұрыс жұптар: электр тогының жұмысы — джоуль (Дж); электр кедергісі — ом (Ом); меншікті кедергі — Ом·м."
  }
 },
 {
  "id": "t8_l52_lab8_ms",
  "type": "multi-select",
  "topic": "lab8",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №8: Постоянный магнит и поле». Отметь все величины, которые относятся к разделу «магнитные явления».",
   "en": "Topic «Lab No. 8: Permanent magnet and magnetic field». Select all quantities that belong to the section «magnetic phenomena».",
   "kk": "«Зертхана №8: Тұрақты магнит және магнит өрісі» тақырыбы. «магниттік құбылыстар» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электрическое напряжение",
    "количество теплоты",
    "магнитная индукция",
    "магнитный поток"
   ],
   "en": [
    "voltage",
    "amount of heat",
    "magnetic flux density",
    "magnetic flux"
   ],
   "kk": [
    "электр кернеуі",
    "жылу мөлшері",
    "магнит индукциясы",
    "магнит ағыны"
   ]
  },
  "correctAnswer": [
   2,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. магнитный поток, магнитная индукция.",
   "en": "More than one option is correct — select them all. magnetic flux, magnetic flux density.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. магнит ағыны, магнит индукциясы."
  }
 },
 {
  "id": "t8_l52_lab8_sa",
  "type": "short-answer",
  "topic": "lab8",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «мощность электрического тока» в СИ.",
   "en": "Name the SI unit of «power of electric current».",
   "kk": "«электр тогының қуаты» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "ватт",
    "вт",
    "w",
    "W",
    "Вт"
   ],
   "en": [
    "watt",
    "w",
    "W"
   ],
   "kk": [
    "ватт",
    "вт",
    "w",
    "W",
    "Вт"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «мощность электрического тока» — ватт (Вт).",
   "en": "The SI unit of «power of electric current» is watt (W).",
   "kk": "«электр тогының қуаты» шамасының ХБЖ бірлігі — ватт (Вт)."
  }
 },
 {
  "id": "t8_l52_lab8_mt",
  "type": "matching",
  "topic": "lab8",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №8: Постоянный магнит и поле» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 8: Permanent magnet and magnetic field» with their SI units.",
   "kk": "«Зертхана №8: Тұрақты магнит және магнит өрісі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила Ампера",
     "магнитный поток",
     "магнитная индукция"
    ],
    "en": [
     "Ampere force",
     "magnetic flux",
     "magnetic flux density"
    ],
    "kk": [
     "Ампер күші",
     "магнит ағыны",
     "магнит индукциясы"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "вебер (Вб)",
     "тесла (Тл)"
    ],
    "en": [
     "newton (N)",
     "weber (Wb)",
     "tesla (T)"
    ],
    "kk": [
     "ньютон (Н)",
     "вебер (Вб)",
     "тесла (Тл)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: сила Ампера — ньютон (Н); магнитный поток — вебер (Вб); магнитная индукция — тесла (Тл).",
   "en": "Correct pairs: Ampere force — newton (N); magnetic flux — weber (Wb); magnetic flux density — tesla (T).",
   "kk": "Дұрыс жұптар: Ампер күші — ньютон (Н); магнит ағыны — вебер (Вб); магнит индукциясы — тесла (Тл)."
  }
 },
 {
  "id": "t8_l53_lab9_ms",
  "type": "multi-select",
  "topic": "lab9",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №9: Электромагнит». Отметь все величины, которые относятся к разделу «магнитные явления».",
   "en": "Topic «Lab No. 9: Electromagnet». Select all quantities that belong to the section «magnetic phenomena».",
   "kk": "«Зертхана №9: Электромагнит» тақырыбы. «магниттік құбылыстар» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "магнитный поток",
    "сила Ампера",
    "масса",
    "КПД теплового двигателя"
   ],
   "en": [
    "magnetic flux",
    "Ampere force",
    "mass",
    "efficiency of a heat engine"
   ],
   "kk": [
    "магнит ағыны",
    "Ампер күші",
    "масса",
    "жылу қозғалтқышының ПӘК"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. сила Ампера, магнитный поток.",
   "en": "More than one option is correct — select them all. Ampere force, magnetic flux.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. Ампер күші, магнит ағыны."
  }
 },
 {
  "id": "t8_l53_lab9_sa",
  "type": "short-answer",
  "topic": "lab9",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «удельная теплота сгорания топлива» в СИ.",
   "en": "Name the SI unit of «specific heat of fuel combustion».",
   "kk": "«отынның меншікті жану жылуы» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "дж/кг",
    "j/kg"
   ],
   "en": [
    "j/kg",
    "j·kg⁻¹"
   ],
   "kk": [
    "дж/кг",
    "j/kg"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «удельная теплота сгорания топлива» — Дж/кг.",
   "en": "The SI unit of «specific heat of fuel combustion» is J/kg.",
   "kk": "«отынның меншікті жану жылуы» шамасының ХБЖ бірлігі — Дж/кг."
  }
 },
 {
  "id": "t8_l53_lab9_mt",
  "type": "matching",
  "topic": "lab9",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №9: Электромагнит» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 9: Electromagnet» with their SI units.",
   "kk": "«Зертхана №9: Электромагнит» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "магнитный поток",
     "магнитная индукция",
     "сила Ампера"
    ],
    "en": [
     "magnetic flux",
     "magnetic flux density",
     "Ampere force"
    ],
    "kk": [
     "магнит ағыны",
     "магнит индукциясы",
     "Ампер күші"
    ]
   },
   "right": {
    "ru": [
     "вебер (Вб)",
     "тесла (Тл)",
     "ньютон (Н)"
    ],
    "en": [
     "weber (Wb)",
     "tesla (T)",
     "newton (N)"
    ],
    "kk": [
     "вебер (Вб)",
     "тесла (Тл)",
     "ньютон (Н)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    2
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: магнитный поток — вебер (Вб); магнитная индукция — тесла (Тл); сила Ампера — ньютон (Н).",
   "en": "Correct pairs: magnetic flux — weber (Wb); magnetic flux density — tesla (T); Ampere force — newton (N).",
   "kk": "Дұрыс жұптар: магнит ағыны — вебер (Вб); магнит индукциясы — тесла (Тл); Ампер күші — ньютон (Н)."
  }
 },
 {
  "id": "t8_l54_lab10_ms",
  "type": "multi-select",
  "topic": "lab10",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №10: Показатель преломления стекла». Отметь все величины, которые относятся к разделу «оптика».",
   "en": "Topic «Lab No. 10: Refractive index of glass». Select all quantities that belong to the section «optics».",
   "kk": "«Зертхана №10: Әйнектің сыну көрсеткіші» тақырыбы. «оптика» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "оптическая сила линзы",
    "фокусное расстояние линзы",
    "сила Ампера",
    "удельная теплота плавления"
   ],
   "en": [
    "optical power of a lens",
    "focal length of a lens",
    "Ampere force",
    "specific heat of fusion"
   ],
   "kk": [
    "линзаның оптикалық күші",
    "линзаның фокустық қашықтығы",
    "Ампер күші",
    "меншікті балқу жылуы"
   ]
  },
  "correctAnswer": [
   0,
   1
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. фокусное расстояние линзы, оптическая сила линзы.",
   "en": "More than one option is correct — select them all. focal length of a lens, optical power of a lens.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның фокустық қашықтығы, линзаның оптикалық күші."
  }
 },
 {
  "id": "t8_l54_lab10_sa",
  "type": "short-answer",
  "topic": "lab10",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «время» в СИ.",
   "en": "Name the SI unit of «time».",
   "kk": "«уақыт» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "секунда",
    "с",
    "s",
    "сек"
   ],
   "en": [
    "second",
    "s",
    "sec"
   ],
   "kk": [
    "секунд",
    "с",
    "s",
    "сек"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «время» — секунда (с).",
   "en": "The SI unit of «time» is second (s).",
   "kk": "«уақыт» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t8_l54_lab10_mt",
  "type": "matching",
  "topic": "lab10",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №10: Показатель преломления стекла» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 10: Refractive index of glass» with their SI units.",
   "kk": "«Зертхана №10: Әйнектің сыну көрсеткіші» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "оптическая сила линзы",
     "фокусное расстояние линзы",
     "длина световой волны"
    ],
    "en": [
     "optical power of a lens",
     "focal length of a lens",
     "wavelength of light"
    ],
    "kk": [
     "линзаның оптикалық күші",
     "линзаның фокустық қашықтығы",
     "жарық толқынының ұзындығы"
    ]
   },
   "right": {
    "ru": [
     "диоптрия (дптр)",
     "нанометр (нм)",
     "метр (м)"
    ],
    "en": [
     "dioptre (dpt)",
     "nanometre (nm)",
     "metre (m)"
    ],
    "kk": [
     "диоптрия (дптр)",
     "нанометр (нм)",
     "метр (м)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    2
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: оптическая сила линзы — диоптрия (дптр); фокусное расстояние линзы — метр (м); длина световой волны — нанометр (нм).",
   "en": "Correct pairs: optical power of a lens — dioptre (dpt); focal length of a lens — metre (m); wavelength of light — nanometre (nm).",
   "kk": "Дұрыс жұптар: линзаның оптикалық күші — диоптрия (дптр); линзаның фокустық қашықтығы — метр (м); жарық толқынының ұзындығы — нанометр (нм)."
  }
 },
 {
  "id": "t8_l55_lab11_ms",
  "type": "multi-select",
  "topic": "lab11",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №11: Фокусное расстояние линзы». Отметь все величины, которые относятся к разделу «оптика».",
   "en": "Topic «Lab No. 11: Focal length of a lens». Select all quantities that belong to the section «optics».",
   "kk": "«Зертхана №11: Линзаның фокус аралығы» тақырыбы. «оптика» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "удельное сопротивление",
    "оптическая сила линзы",
    "время",
    "длина световой волны"
   ],
   "en": [
    "resistivity",
    "optical power of a lens",
    "time",
    "wavelength of light"
   ],
   "kk": [
    "меншікті кедергі",
    "линзаның оптикалық күші",
    "уақыт",
    "жарық толқынының ұзындығы"
   ]
  },
  "correctAnswer": [
   1,
   3
  ],
  "hint": {
   "ru": "Убери величины из других разделов физики: они изучаются в других параграфах.",
   "en": "Cross out quantities from other branches of physics — they belong to other paragraphs.",
   "kk": "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
  },
  "explanation": {
   "ru": "Верных вариантов несколько — отметь их все. оптическая сила линзы, длина световой волны.",
   "en": "More than one option is correct — select them all. optical power of a lens, wavelength of light.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. линзаның оптикалық күші, жарық толқынының ұзындығы."
  }
 },
 {
  "id": "t8_l55_lab11_sa",
  "type": "short-answer",
  "topic": "lab11",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «магнитный поток» в СИ.",
   "en": "Name the SI unit of «magnetic flux».",
   "kk": "«магнит ағыны» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "вебер",
    "вб",
    "wb",
    "Wb"
   ],
   "en": [
    "weber",
    "wb",
    "Wb"
   ],
   "kk": [
    "вебер",
    "вб",
    "wb",
    "Wb"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «магнитный поток» — вебер (Вб).",
   "en": "The SI unit of «magnetic flux» is weber (Wb).",
   "kk": "«магнит ағыны» шамасының ХБЖ бірлігі — вебер (Вб)."
  }
 },
 {
  "id": "t8_l55_lab11_mt",
  "type": "matching",
  "topic": "lab11",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №11: Фокусное расстояние линзы» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab No. 11: Focal length of a lens» with their SI units.",
   "kk": "«Зертхана №11: Линзаның фокус аралығы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "длина световой волны",
     "фокусное расстояние линзы",
     "оптическая сила линзы"
    ],
    "en": [
     "wavelength of light",
     "focal length of a lens",
     "optical power of a lens"
    ],
    "kk": [
     "жарық толқынының ұзындығы",
     "линзаның фокустық қашықтығы",
     "линзаның оптикалық күші"
    ]
   },
   "right": {
    "ru": [
     "нанометр (нм)",
     "диоптрия (дптр)",
     "метр (м)"
    ],
    "en": [
     "nanometre (nm)",
     "dioptre (dpt)",
     "metre (m)"
    ],
    "kk": [
     "нанометр (нм)",
     "диоптрия (дптр)",
     "метр (м)"
    ]
   }
  },
  "correctPairs": [
   [
    0,
    0
   ],
   [
    1,
    2
   ],
   [
    2,
    1
   ]
  ],
  "hint": {
   "ru": "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
   "en": "Start with the quantities you already know: force, for example, is measured in newtons.",
   "kk": "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
  },
  "explanation": {
   "ru": "Верные пары: длина световой волны — нанометр (нм); фокусное расстояние линзы — метр (м); оптическая сила линзы — диоптрия (дптр).",
   "en": "Correct pairs: wavelength of light — nanometre (nm); focal length of a lens — metre (m); optical power of a lens — dioptre (dpt).",
   "kk": "Дұрыс жұптар: жарық толқынының ұзындығы — нанометр (нм); линзаның фокустық қашықтығы — метр (м); линзаның оптикалық күші — диоптрия (дптр)."
  }
 }
];
window.TASKS_DATABASE_TYPES = TASKS_DATABASE_TYPES;
