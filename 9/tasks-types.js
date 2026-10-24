/* ===== Задания новых типов, 9 класс =====
   Сгенерировано tools/gen-task-types.js — правки вносить в генератор.
   Типы: multi-select (отметь все), short-answer (короткий ответ),
   matching (сопоставление величины и единицы СИ).
   Всего заданий: 189 (набор зависит от того, каких типов не хватает в банке уровня). */
const TASKS_DATABASE_TYPES = [
 {
  "id": "t9_l1_safety_ms",
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
    "ампер",
    "градус Цельсия",
    "литр",
    "килограмм",
    "джоуль"
   ],
   "en": [
    "ampere",
    "degree Celsius",
    "litre",
    "kilogram",
    "joule"
   ],
   "kk": [
    "ампер",
    "Цельсий градусы",
    "литр",
    "килограмм",
    "джоуль"
   ]
  },
  "correctAnswer": [
   0,
   3,
   4
  ],
  "hint": {
   "ru": "В СИ входят метр, килограмм, секунда, ампер, кельвин и производные от них. Литр и градус Цельсия — внесистемные.",
   "en": "SI includes metre, kilogram, second, ampere, kelvin and their derivatives. Litre and degree Celsius are non-SI.",
   "kk": "ХБЖ-ға метр, килограмм, секунд, ампер, кельвин және туынды бірліктер кіреді. Литр мен Цельсий градусы — жүйеден тыс."
  },
  "explanation": {
   "ru": "Единицы СИ: килограмм, ампер, джоуль. Внесистемные: литр, градус Цельсия.",
   "en": "SI units: kilogram, ampere, joule. Non-SI: litre, degree Celsius.",
   "kk": "ХБЖ бірліктері: килограмм, ампер, джоуль. Жүйеден тыс: литр, Цельсий градусы."
  }
 },
 {
  "id": "t9_l1_safety_sa",
  "type": "short-answer",
  "topic": "safety",
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
  "id": "t9_l1_safety_fb",
  "type": "fill-blank",
  "topic": "safety",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «импульс тела» — ___.",
   "en": "The unit of «momentum of a body» is ___.",
   "kk": "«дене импульсі» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "кг·м/с",
    "кг*м/с",
    "kg*m/s"
   ],
   "en": [
    "kg·m/s",
    "kg*m/s",
    "kg m/s"
   ],
   "kk": [
    "кг·м/с",
    "кг*м/с"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «импульс тела» — кг·м/с.",
   "en": "The SI unit of «momentum of a body» is kg·m/s.",
   "kk": "«дене импульсі» шамасының ХБЖ бірлігі — кг·м/с."
  }
 },
 {
  "id": "t9_l1_safety_num",
  "type": "numeric",
  "topic": "safety",
  "difficulty": 1,
  "question": {
   "ru": "Переведи в единицы СИ: 2 л = ___ м³.",
   "en": "Convert to SI units: 2 L = ___ m³.",
   "kk": "ХБЖ-ға келтір: 2 л = ___ м³."
  },
  "correctAnswer": 0.002,
  "tolerance": 0.0001,
  "hint": {
   "ru": "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
   "en": "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
   "kk": "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
  },
  "explanation": {
   "ru": "Ответ: 0.002.",
   "en": "Answer: 0.002.",
   "kk": "Жауабы: 0.002."
  }
 },
 {
  "id": "t9_l1_safety_mt",
  "type": "matching",
  "topic": "safety",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Допуск к полётам: техника безопасности» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Flight Clearance: Safety Rules» with their SI units.",
   "kk": "«Ұшуға рұқсат: қауіпсіздік ережелері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "время",
     "сила"
    ],
    "en": [
     "mass",
     "time",
     "force"
    ],
    "kk": [
     "масса",
     "уақыт",
     "күш"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "килограмм (кг)",
     "секунда (с)"
    ],
    "en": [
     "newton (N)",
     "kilogram (kg)",
     "second (s)"
    ],
    "kk": [
     "ньютон (Н)",
     "килограмм (кг)",
     "секунд (с)"
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
   "ru": "Верные пары: масса — килограмм (кг); время — секунда (с); сила — ньютон (Н).",
   "en": "Correct pairs: mass — kilogram (kg); time — second (s); force — newton (N).",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); уақыт — секунд (с); күш — ньютон (Н)."
  }
 },
 {
  "id": "t9_l2_p1_ms",
  "type": "multi-select",
  "topic": "p1",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Механическое движение».",
   "en": "Select all quantities studied in the topic «Mechanical motion».",
   "kk": "«Механикалық қозғалыс» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "время",
    "скорость",
    "амплитуда колебаний",
    "электроёмкость конденсатора"
   ],
   "en": [
    "time",
    "velocity",
    "amplitude of oscillation",
    "capacitance of a capacitor"
   ],
   "kk": [
    "уақыт",
    "жылдамдық",
    "тербеліс амплитудасы",
    "конденсатор сыйымдылығы"
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
   "ru": "Верных вариантов несколько — отметь их все. скорость, время.",
   "en": "More than one option is correct — select them all. velocity, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылдамдық, уақыт."
  }
 },
 {
  "id": "t9_l2_p1_sa",
  "type": "short-answer",
  "topic": "p1",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «перемещение»? Запиши единицу.",
   "en": "Which SI unit is used to measure «displacement»? Write the unit.",
   "kk": "«орын ауыстыру» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «перемещение» — метр (м).",
   "en": "The SI unit of «displacement» is metre (m).",
   "kk": "«орын ауыстыру» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l2_p1_mt",
  "type": "matching",
  "topic": "p1",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Механическое движение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Mechanical motion» with their SI units.",
   "kk": "«Механикалық қозғалыс» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "перемещение",
     "время",
     "скорость"
    ],
    "en": [
     "displacement",
     "time",
     "velocity"
    ],
    "kk": [
     "орын ауыстыру",
     "уақыт",
     "жылдамдық"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "секунда (с)",
     "м/с"
    ],
    "en": [
     "metre (m)",
     "second (s)",
     "m/s"
    ],
    "kk": [
     "метр (м)",
     "секунд (с)",
     "м/с"
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
   "ru": "Верные пары: перемещение — метр (м); время — секунда (с); скорость — м/с.",
   "en": "Correct pairs: displacement — metre (m); time — second (s); velocity — m/s.",
   "kk": "Дұрыс жұптар: орын ауыстыру — метр (м); уақыт — секунд (с); жылдамдық — м/с."
  }
 },
 {
  "id": "t9_l3_p2_ms",
  "type": "multi-select",
  "topic": "p2",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Векторы и действия над ними».",
   "en": "Select all quantities studied in the topic «Vectors and operations on them».",
   "kk": "«Векторлар және олармен әрекеттер» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период колебаний",
    "расстояние до небесного тела",
    "частота обращения",
    "время"
   ],
   "en": [
    "period of oscillation",
    "distance to a celestial body",
    "frequency of revolution",
    "time"
   ],
   "kk": [
    "тербеліс периоды",
    "аспан денесіне дейінгі қашықтық",
    "айналу жиілігі",
    "уақыт"
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
   "ru": "Верных вариантов несколько — отметь их все. частота обращения, время.",
   "en": "More than one option is correct — select them all. frequency of revolution, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. айналу жиілігі, уақыт."
  }
 },
 {
  "id": "t9_l3_p2_sa",
  "type": "short-answer",
  "topic": "p2",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «период обращения»? Запиши единицу.",
   "en": "Which SI unit is used to measure «period of revolution»? Write the unit.",
   "kk": "«айналу периоды» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период обращения» — секунда (с).",
   "en": "The SI unit of «period of revolution» is second (s).",
   "kk": "«айналу периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l3_p2_mt",
  "type": "matching",
  "topic": "p2",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Векторы и действия над ними» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Vectors and operations on them» with their SI units.",
   "kk": "«Векторлар және олармен әрекеттер» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "перемещение",
     "центростремительное ускорение",
     "скорость"
    ],
    "en": [
     "displacement",
     "centripetal acceleration",
     "velocity"
    ],
    "kk": [
     "орын ауыстыру",
     "центрге тартқыш үдеу",
     "жылдамдық"
    ]
   },
   "right": {
    "ru": [
     "м/с²",
     "метр (м)",
     "м/с"
    ],
    "en": [
     "m/s²",
     "metre (m)",
     "m/s"
    ],
    "kk": [
     "м/с²",
     "метр (м)",
     "м/с"
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
   "ru": "Верные пары: перемещение — метр (м); центростремительное ускорение — м/с²; скорость — м/с.",
   "en": "Correct pairs: displacement — metre (m); centripetal acceleration — m/s²; velocity — m/s.",
   "kk": "Дұрыс жұптар: орын ауыстыру — метр (м); центрге тартқыш үдеу — м/с²; жылдамдық — м/с."
  }
 },
 {
  "id": "t9_l4_p3_ms",
  "type": "multi-select",
  "topic": "p3",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Равнопеременное движение, ускорение».",
   "en": "Select all quantities studied in the topic «Uniformly variable motion, acceleration».",
   "kk": "«Тең үдемелі қозғалыс, үдеу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "время",
    "ускорение",
    "угловой размер светила",
    "дефект масс"
   ],
   "en": [
    "time",
    "acceleration",
    "angular size of a celestial body",
    "mass defect"
   ],
   "kk": [
    "уақыт",
    "үдеу",
    "жарық шырағының бұрыштық мөлшері",
    "масса ақауы"
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
   "ru": "Верных вариантов несколько — отметь их все. ускорение, время.",
   "en": "More than one option is correct — select them all. acceleration, time.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. үдеу, уақыт."
  }
 },
 {
  "id": "t9_l4_p3_sa",
  "type": "short-answer",
  "topic": "p3",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «скорость»? Запиши единицу.",
   "en": "Which SI unit is used to measure «velocity»? Write the unit.",
   "kk": "«жылдамдық» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с",
    "m/s",
    "метр в секунду"
   ],
   "en": [
    "m/s",
    "metre per second"
   ],
   "kk": [
    "м/с",
    "m/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «скорость» — м/с.",
   "en": "The SI unit of «velocity» is m/s.",
   "kk": "«жылдамдық» шамасының ХБЖ бірлігі — м/с."
  }
 },
 {
  "id": "t9_l4_p3_mt",
  "type": "matching",
  "topic": "p3",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Равнопеременное движение, ускорение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Uniformly variable motion, acceleration» with their SI units.",
   "kk": "«Тең үдемелі қозғалыс, үдеу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "скорость",
     "время",
     "ускорение"
    ],
    "en": [
     "velocity",
     "time",
     "acceleration"
    ],
    "kk": [
     "жылдамдық",
     "уақыт",
     "үдеу"
    ]
   },
   "right": {
    "ru": [
     "м/с",
     "секунда (с)",
     "м/с²"
    ],
    "en": [
     "m/s",
     "second (s)",
     "m/s²"
    ],
    "kk": [
     "м/с",
     "секунд (с)",
     "м/с²"
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
   "ru": "Верные пары: скорость — м/с; время — секунда (с); ускорение — м/с².",
   "en": "Correct pairs: velocity — m/s; time — second (s); acceleration — m/s².",
   "kk": "Дұрыс жұптар: жылдамдық — м/с; уақыт — секунд (с); үдеу — м/с²."
  }
 },
 {
  "id": "t9_l5_p4_ms",
  "type": "multi-select",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Скорость и перемещение при равноускоренном движении».",
   "en": "Select all quantities studied in the topic «Speed and displacement in uniformly accelerated motion».",
   "kk": "«Тең үдеумен қозғалыста жылдамдық пен орын ауыстыру» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "перемещение",
    "скорость волны",
    "время",
    "поглощённая доза излучения"
   ],
   "en": [
    "displacement",
    "wave speed",
    "time",
    "absorbed radiation dose"
   ],
   "kk": [
    "орын ауыстыру",
    "толқын жылдамдығы",
    "уақыт",
    "сіңірілген сәулелену дозасы"
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
   "ru": "Верных вариантов несколько — отметь их все. время, перемещение.",
   "en": "More than one option is correct — select them all. time, displacement.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. уақыт, орын ауыстыру."
  }
 },
 {
  "id": "t9_l5_p4_sa",
  "type": "short-answer",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «путь»? Запиши единицу.",
   "en": "Which SI unit is used to measure «distance travelled»? Write the unit.",
   "kk": "«жол» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «путь» — метр (м).",
   "en": "The SI unit of «distance travelled» is metre (m).",
   "kk": "«жол» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l5_p4_fb",
  "type": "fill-blank",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «время» — ___.",
   "en": "The unit of «time» is ___.",
   "kk": "«уақыт» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "секунда (с)",
    "секунда",
    "с",
    "s",
    "сек"
   ],
   "en": [
    "second (s)",
    "second",
    "s",
    "sec"
   ],
   "kk": [
    "секунд (с)",
    "секунд",
    "с",
    "s"
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
  "id": "t9_l5_p4_mt",
  "type": "matching",
  "topic": "p4",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Скорость и перемещение при равноускоренном движении» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Speed and displacement in uniformly accelerated motion» with their SI units.",
   "kk": "«Тең үдеумен қозғалыста жылдамдық пен орын ауыстыру» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "путь",
     "время",
     "скорость"
    ],
    "en": [
     "distance travelled",
     "time",
     "velocity"
    ],
    "kk": [
     "жол",
     "уақыт",
     "жылдамдық"
    ]
   },
   "right": {
    "ru": [
     "м/с",
     "метр (м)",
     "секунда (с)"
    ],
    "en": [
     "m/s",
     "metre (m)",
     "second (s)"
    ],
    "kk": [
     "м/с",
     "метр (м)",
     "секунд (с)"
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
   "ru": "Верные пары: путь — метр (м); время — секунда (с); скорость — м/с.",
   "en": "Correct pairs: distance travelled — metre (m); time — second (s); velocity — m/s.",
   "kk": "Дұрыс жұптар: жол — метр (м); уақыт — секунд (с); жылдамдық — м/с."
  }
 },
 {
  "id": "t9_l6_p5_ms",
  "type": "multi-select",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Свободное падение тел».",
   "en": "Select all quantities studied in the topic «Free fall of bodies».",
   "kk": "«Денелердің еркін түсуі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "эквивалентная доза",
    "ускорение",
    "путь",
    "угловой размер светила"
   ],
   "en": [
    "equivalent dose",
    "acceleration",
    "distance travelled",
    "angular size of a celestial body"
   ],
   "kk": [
    "эквивалентті доза",
    "үдеу",
    "жол",
    "жарық шырағының бұрыштық мөлшері"
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
   "ru": "Верных вариантов несколько — отметь их все. путь, ускорение.",
   "en": "More than one option is correct — select them all. distance travelled, acceleration.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жол, үдеу."
  }
 },
 {
  "id": "t9_l6_p5_sa",
  "type": "short-answer",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «ускорение свободного падения»? Запиши единицу.",
   "en": "Which SI unit is used to measure «acceleration due to gravity»? Write the unit.",
   "kk": "«еркін түсу үдеуі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с2",
    "м/с²",
    "m/s2",
    "m/s²"
   ],
   "en": [
    "m/s²",
    "m/s2"
   ],
   "kk": [
    "м/с2",
    "м/с²",
    "m/s²"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «ускорение свободного падения» — м/с².",
   "en": "The SI unit of «acceleration due to gravity» is m/s².",
   "kk": "«еркін түсу үдеуі» шамасының ХБЖ бірлігі — м/с²."
  }
 },
 {
  "id": "t9_l6_p5_fb",
  "type": "fill-blank",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «перемещение» — ___.",
   "en": "The unit of «displacement» is ___.",
   "kk": "«орын ауыстыру» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "метр (м)",
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre (m)",
    "metre",
    "m",
    "meter",
    "M"
   ],
   "kk": [
    "метр (м)",
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
   "ru": "Единица СИ для величины «перемещение» — метр (м).",
   "en": "The SI unit of «displacement» is metre (m).",
   "kk": "«орын ауыстыру» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l6_p5_mt",
  "type": "matching",
  "topic": "p5",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Свободное падение тел» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Free fall of bodies» with their SI units.",
   "kk": "«Денелердің еркін түсуі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "время",
     "ускорение",
     "скорость"
    ],
    "en": [
     "time",
     "acceleration",
     "velocity"
    ],
    "kk": [
     "уақыт",
     "үдеу",
     "жылдамдық"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "м/с²",
     "м/с"
    ],
    "en": [
     "second (s)",
     "m/s²",
     "m/s"
    ],
    "kk": [
     "секунд (с)",
     "м/с²",
     "м/с"
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
   "ru": "Верные пары: время — секунда (с); ускорение — м/с²; скорость — м/с.",
   "en": "Correct pairs: time — second (s); acceleration — m/s²; velocity — m/s.",
   "kk": "Дұрыс жұптар: уақыт — секунд (с); үдеу — м/с²; жылдамдық — м/с."
  }
 },
 {
  "id": "t9_l7_p6_ms",
  "type": "multi-select",
  "topic": "p6",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Криволинейное движение. Движение по окружности».",
   "en": "Select all quantities studied in the topic «Curvilinear motion. Circular motion».",
   "kk": "«Қисық сызықты қозғалыс. Шеңбер бойымен қозғалыс» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "время",
    "энергия фотона",
    "дефект масс",
    "период обращения"
   ],
   "en": [
    "time",
    "photon energy",
    "mass defect",
    "period of revolution"
   ],
   "kk": [
    "уақыт",
    "фотон энергиясы",
    "масса ақауы",
    "айналу периоды"
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
   "ru": "Верных вариантов несколько — отметь их все. время, период обращения.",
   "en": "More than one option is correct — select them all. time, period of revolution.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. уақыт, айналу периоды."
  }
 },
 {
  "id": "t9_l7_p6_sa",
  "type": "short-answer",
  "topic": "p6",
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
    "s"
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
  "id": "t9_l7_p6_mt",
  "type": "matching",
  "topic": "p6",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Криволинейное движение. Движение по окружности» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Curvilinear motion. Circular motion» with their SI units.",
   "kk": "«Қисық сызықты қозғалыс. Шеңбер бойымен қозғалыс» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "центростремительное ускорение",
     "скорость",
     "период обращения"
    ],
    "en": [
     "centripetal acceleration",
     "velocity",
     "period of revolution"
    ],
    "kk": [
     "центрге тартқыш үдеу",
     "жылдамдық",
     "айналу периоды"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "м/с²",
     "м/с"
    ],
    "en": [
     "second (s)",
     "m/s²",
     "m/s"
    ],
    "kk": [
     "секунд (с)",
     "м/с²",
     "м/с"
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
   "ru": "Верные пары: центростремительное ускорение — м/с²; скорость — м/с; период обращения — секунда (с).",
   "en": "Correct pairs: centripetal acceleration — m/s²; velocity — m/s; period of revolution — second (s).",
   "kk": "Дұрыс жұптар: центрге тартқыш үдеу — м/с²; жылдамдық — м/с; айналу периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l8_p7_ms",
  "type": "multi-select",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Центростремительное ускорение».",
   "en": "Select all quantities studied in the topic «Centripetal acceleration».",
   "kk": "«Центрге тартқыш үдеу» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "амплитуда колебаний",
    "расстояние до небесного тела",
    "частота обращения",
    "центростремительное ускорение"
   ],
   "en": [
    "amplitude of oscillation",
    "distance to a celestial body",
    "frequency of revolution",
    "centripetal acceleration"
   ],
   "kk": [
    "тербеліс амплитудасы",
    "аспан денесіне дейінгі қашықтық",
    "айналу жиілігі",
    "центрге тартқыш үдеу"
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
   "ru": "Верных вариантов несколько — отметь их все. центростремительное ускорение, частота обращения.",
   "en": "More than one option is correct — select them all. centripetal acceleration, frequency of revolution.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. центрге тартқыш үдеу, айналу жиілігі."
  }
 },
 {
  "id": "t9_l8_p7_sa",
  "type": "short-answer",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «частота обращения»? Запиши единицу.",
   "en": "Which SI unit is used to measure «frequency of revolution»? Write the unit.",
   "kk": "«айналу жиілігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ],
   "en": [
    "hertz",
    "hz",
    "Hz"
   ],
   "kk": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота обращения» — герц (Гц).",
   "en": "The SI unit of «frequency of revolution» is hertz (Hz).",
   "kk": "«айналу жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l8_p7_fb",
  "type": "fill-blank",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «ускорение»? Запиши единицу.",
   "en": "In which units is «acceleration» measured? Write the unit.",
   "kk": "«үдеу» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с²",
    "м/с2",
    "m/s2",
    "m/s²"
   ],
   "en": [
    "m/s²",
    "m/s2",
    "metre per second squared"
   ],
   "kk": [
    "м/с²",
    "м/с2",
    "m/s²"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «ускорение» — м/с².",
   "en": "The SI unit of «acceleration» is m/s².",
   "kk": "«үдеу» шамасының ХБЖ бірлігі — м/с²."
  }
 },
 {
  "id": "t9_l8_p7_mt",
  "type": "matching",
  "topic": "p7",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Центростремительное ускорение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Centripetal acceleration» with their SI units.",
   "kk": "«Центрге тартқыш үдеу» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "время",
     "частота обращения",
     "ускорение"
    ],
    "en": [
     "time",
     "frequency of revolution",
     "acceleration"
    ],
    "kk": [
     "уақыт",
     "айналу жиілігі",
     "үдеу"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "м/с²",
     "герц (Гц)"
    ],
    "en": [
     "second (s)",
     "m/s²",
     "hertz (Hz)"
    ],
    "kk": [
     "секунд (с)",
     "м/с²",
     "герц (Гц)"
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
   "ru": "Верные пары: время — секунда (с); частота обращения — герц (Гц); ускорение — м/с².",
   "en": "Correct pairs: time — second (s); frequency of revolution — hertz (Hz); acceleration — m/s².",
   "kk": "Дұрыс жұптар: уақыт — секунд (с); айналу жиілігі — герц (Гц); үдеу — м/с²."
  }
 },
 {
  "id": "t9_l9_p8_ms",
  "type": "multi-select",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Звёздное небо».",
   "en": "Select all quantities studied in the topic «Starry Sky».",
   "kk": "«Жұлдызды аспан» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "угловой размер светила",
    "механическая работа",
    "годичный параллакс",
    "электроёмкость конденсатора"
   ],
   "en": [
    "angular size of a celestial body",
    "mechanical work",
    "annual parallax",
    "capacitance of a capacitor"
   ],
   "kk": [
    "жарық шырағының бұрыштық мөлшері",
    "механикалық жұмыс",
    "жылдық параллакс",
    "конденсатор сыйымдылығы"
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
   "ru": "Верных вариантов несколько — отметь их все. годичный параллакс, угловой размер светила.",
   "en": "More than one option is correct — select them all. annual parallax, angular size of a celestial body.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылдық параллакс, жарық шырағының бұрыштық мөлшері."
  }
 },
 {
  "id": "t9_l9_p8_sa",
  "type": "short-answer",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «годичный параллакс»? Запиши единицу.",
   "en": "Which SI unit is used to measure «annual parallax»? Write the unit.",
   "kk": "«жылдық параллакс» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "угловая секунда",
    "секунда дуги",
    "″",
    "\""
   ],
   "en": [
    "arcsecond",
    "arc second",
    "″"
   ],
   "kk": [
    "бұрыштық секунд",
    "″"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «годичный параллакс» — угловая секунда (″).",
   "en": "The SI unit of «annual parallax» is arcsecond (″).",
   "kk": "«жылдық параллакс» шамасының ХБЖ бірлігі — бұрыштық секунд (″)."
  }
 },
 {
  "id": "t9_l9_p8_fb",
  "type": "fill-blank",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «угловой размер светила»: ___.",
   "en": "Name the SI unit of «angular size of a celestial body»: ___.",
   "kk": "«жарық шырағының бұрыштық мөлшері» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "градус (°)",
    "градус",
    "°",
    "град"
   ],
   "en": [
    "degree (°)",
    "degree",
    "°",
    "deg"
   ],
   "kk": [
    "градус (°)",
    "градус",
    "°"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «угловой размер светила» — градус (°).",
   "en": "The SI unit of «angular size of a celestial body» is degree (°).",
   "kk": "«жарық шырағының бұрыштық мөлшері» шамасының ХБЖ бірлігі — градус (°)."
  }
 },
 {
  "id": "t9_l9_p8_mt",
  "type": "matching",
  "topic": "p8",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Звёздное небо» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Starry Sky» with their SI units.",
   "kk": "«Жұлдызды аспан» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "расстояние до небесного тела",
     "годичный параллакс",
     "угловой размер светила"
    ],
    "en": [
     "distance to a celestial body",
     "annual parallax",
     "angular size of a celestial body"
    ],
    "kk": [
     "аспан денесіне дейінгі қашықтық",
     "жылдық параллакс",
     "жарық шырағының бұрыштық мөлшері"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "угловая секунда (″)",
     "градус (°)"
    ],
    "en": [
     "metre (m)",
     "arcsecond (″)",
     "degree (°)"
    ],
    "kk": [
     "метр (м)",
     "бұрыштық секунд (″)",
     "градус (°)"
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
   "ru": "Верные пары: расстояние до небесного тела — метр (м); годичный параллакс — угловая секунда (″); угловой размер светила — градус (°).",
   "en": "Correct pairs: distance to a celestial body — metre (m); annual parallax — arcsecond (″); angular size of a celestial body — degree (°).",
   "kk": "Дұрыс жұптар: аспан денесіне дейінгі қашықтық — метр (м); жылдық параллакс — бұрыштық секунд (″); жарық шырағының бұрыштық мөлшері — градус (°)."
  }
 },
 {
  "id": "t9_l10_p9_ms",
  "type": "multi-select",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Небесная сфера, системы небесных координат».",
   "en": "Select all quantities studied in the topic «Celestial sphere, celestial coordinate systems».",
   "kk": "«Аспан сферасы, аспан координаталар жүйесі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электроёмкость конденсатора",
    "скорость",
    "годичный параллакс",
    "период обращения планеты"
   ],
   "en": [
    "capacitance of a capacitor",
    "velocity",
    "annual parallax",
    "orbital period of a planet"
   ],
   "kk": [
    "конденсатор сыйымдылығы",
    "жылдамдық",
    "жылдық параллакс",
    "планетаның айналу периоды"
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
   "ru": "Верных вариантов несколько — отметь их все. годичный параллакс, период обращения планеты.",
   "en": "More than one option is correct — select them all. annual parallax, orbital period of a planet.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылдық параллакс, планетаның айналу периоды."
  }
 },
 {
  "id": "t9_l10_p9_sa",
  "type": "short-answer",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «период обращения планеты»? Запиши единицу.",
   "en": "Which SI unit is used to measure «orbital period of a planet»? Write the unit.",
   "kk": "«планетаның айналу периоды» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "секунда",
    "с",
    "s",
    "сек",
    "сутки",
    "год"
   ],
   "en": [
    "second",
    "s",
    "sec",
    "day",
    "year"
   ],
   "kk": [
    "секунд",
    "с",
    "s",
    "тәулік",
    "жыл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период обращения планеты» — секунда (с).",
   "en": "The SI unit of «orbital period of a planet» is second (s).",
   "kk": "«планетаның айналу периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l10_p9_fb",
  "type": "fill-blank",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «годичный параллакс»? Запиши единицу.",
   "en": "In which units is «annual parallax» measured? Write the unit.",
   "kk": "«жылдық параллакс» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "угловая секунда (″)",
    "угловая секунда",
    "″",
    "секунда дуги",
    "\""
   ],
   "en": [
    "arcsecond (″)",
    "arcsecond",
    "″",
    "arc second"
   ],
   "kk": [
    "бұрыштық секунд (″)",
    "бұрыштық секунд",
    "″"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «годичный параллакс» — угловая секунда (″).",
   "en": "The SI unit of «annual parallax» is arcsecond (″).",
   "kk": "«жылдық параллакс» шамасының ХБЖ бірлігі — бұрыштық секунд (″)."
  }
 },
 {
  "id": "t9_l10_p9_mt",
  "type": "matching",
  "topic": "p9",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Небесная сфера, системы небесных координат» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Celestial sphere, celestial coordinate systems» with their SI units.",
   "kk": "«Аспан сферасы, аспан координаталар жүйесі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "расстояние до небесного тела",
     "угловой размер светила",
     "годичный параллакс"
    ],
    "en": [
     "distance to a celestial body",
     "angular size of a celestial body",
     "annual parallax"
    ],
    "kk": [
     "аспан денесіне дейінгі қашықтық",
     "жарық шырағының бұрыштық мөлшері",
     "жылдық параллакс"
    ]
   },
   "right": {
    "ru": [
     "градус (°)",
     "угловая секунда (″)",
     "метр (м)"
    ],
    "en": [
     "degree (°)",
     "arcsecond (″)",
     "metre (m)"
    ],
    "kk": [
     "градус (°)",
     "бұрыштық секунд (″)",
     "метр (м)"
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
   "ru": "Верные пары: расстояние до небесного тела — метр (м); угловой размер светила — градус (°); годичный параллакс — угловая секунда (″).",
   "en": "Correct pairs: distance to a celestial body — metre (m); angular size of a celestial body — degree (°); annual parallax — arcsecond (″).",
   "kk": "Дұрыс жұптар: аспан денесіне дейінгі қашықтық — метр (м); жарық шырағының бұрыштық мөлшері — градус (°); жылдық параллакс — бұрыштық секунд (″)."
  }
 },
 {
  "id": "t9_l11_p10_ms",
  "type": "multi-select",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Видимое движение светил. Местное, поясное и всемирное время».",
   "en": "Select all quantities studied in the topic «Apparent motion of celestial bodies. Local, zone, and universal time».",
   "kk": "«Аспан денелерінің көрінетін қозғалысы. Жергілікті, белдеулік және дүниежүзілік уақыт» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "ускорение",
    "период обращения планеты",
    "расстояние до небесного тела",
    "поглощённая доза излучения"
   ],
   "en": [
    "acceleration",
    "orbital period of a planet",
    "distance to a celestial body",
    "absorbed radiation dose"
   ],
   "kk": [
    "үдеу",
    "планетаның айналу периоды",
    "аспан денесіне дейінгі қашықтық",
    "сіңірілген сәулелену дозасы"
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
   "ru": "Верных вариантов несколько — отметь их все. расстояние до небесного тела, период обращения планеты.",
   "en": "More than one option is correct — select them all. distance to a celestial body, orbital period of a planet.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. аспан денесіне дейінгі қашықтық, планетаның айналу периоды."
  }
 },
 {
  "id": "t9_l11_p10_sa",
  "type": "short-answer",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «угловой размер светила»? Запиши единицу.",
   "en": "Which SI unit is used to measure «angular size of a celestial body»? Write the unit.",
   "kk": "«жарық шырағының бұрыштық мөлшері» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "градус",
    "°",
    "град"
   ],
   "en": [
    "degree",
    "°",
    "deg"
   ],
   "kk": [
    "градус",
    "°"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «угловой размер светила» — градус (°).",
   "en": "The SI unit of «angular size of a celestial body» is degree (°).",
   "kk": "«жарық шырағының бұрыштық мөлшері» шамасының ХБЖ бірлігі — градус (°)."
  }
 },
 {
  "id": "t9_l11_p10_fb",
  "type": "fill-blank",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «период обращения планеты»? Запиши единицу.",
   "en": "In which units is «orbital period of a planet» measured? Write the unit.",
   "kk": "«планетаның айналу периоды» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "секунда (с)",
    "секунда",
    "с",
    "s",
    "сек",
    "сутки",
    "год"
   ],
   "en": [
    "second (s)",
    "second",
    "s",
    "sec",
    "day",
    "year"
   ],
   "kk": [
    "секунд (с)",
    "секунд",
    "с",
    "s",
    "тәулік",
    "жыл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период обращения планеты» — секунда (с).",
   "en": "The SI unit of «orbital period of a planet» is second (s).",
   "kk": "«планетаның айналу периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l11_p10_mt",
  "type": "matching",
  "topic": "p10",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Видимое движение светил. Местное, поясное и всемирное время» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Apparent motion of celestial bodies. Local, zone, and universal time» with their SI units.",
   "kk": "«Аспан денелерінің көрінетін қозғалысы. Жергілікті, белдеулік және дүниежүзілік уақыт» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "угловой размер светила",
     "период обращения планеты",
     "расстояние до небесного тела"
    ],
    "en": [
     "angular size of a celestial body",
     "orbital period of a planet",
     "distance to a celestial body"
    ],
    "kk": [
     "жарық шырағының бұрыштық мөлшері",
     "планетаның айналу периоды",
     "аспан денесіне дейінгі қашықтық"
    ]
   },
   "right": {
    "ru": [
     "градус (°)",
     "метр (м)",
     "секунда (с)"
    ],
    "en": [
     "degree (°)",
     "metre (m)",
     "second (s)"
    ],
    "kk": [
     "градус (°)",
     "метр (м)",
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
   "ru": "Верные пары: угловой размер светила — градус (°); период обращения планеты — секунда (с); расстояние до небесного тела — метр (м).",
   "en": "Correct pairs: angular size of a celestial body — degree (°); orbital period of a planet — second (s); distance to a celestial body — metre (m).",
   "kk": "Дұрыс жұптар: жарық шырағының бұрыштық мөлшері — градус (°); планетаның айналу периоды — секунд (с); аспан денесіне дейінгі қашықтық — метр (м)."
  }
 },
 {
  "id": "t9_l12_p11_ms",
  "type": "multi-select",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Законы движения планет Солнечной системы».",
   "en": "Select all quantities studied in the topic «Laws of motion of the planets of the Solar System».",
   "kk": "«Күн жүйесіндегі планеталардың қозғалыс заңдары» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "уровень громкости",
    "ускорение свободного падения",
    "период обращения планеты",
    "период обращения"
   ],
   "en": [
    "loudness level",
    "acceleration due to gravity",
    "orbital period of a planet",
    "period of revolution"
   ],
   "kk": [
    "дыбыс қаттылығының деңгейі",
    "еркін түсу үдеуі",
    "планетаның айналу периоды",
    "айналу периоды"
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
   "ru": "Верных вариантов несколько — отметь их все. период обращения, период обращения планеты.",
   "en": "More than one option is correct — select them all. period of revolution, orbital period of a planet.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. айналу периоды, планетаның айналу периоды."
  }
 },
 {
  "id": "t9_l12_p11_sa",
  "type": "short-answer",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «угловая скорость»? Запиши единицу.",
   "en": "Which SI unit is used to measure «angular velocity»? Write the unit.",
   "kk": "«бұрыштық жылдамдық» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "рад/с",
    "rad/s"
   ],
   "en": [
    "rad/s",
    "radian per second"
   ],
   "kk": [
    "рад/с",
    "rad/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «угловая скорость» — рад/с.",
   "en": "The SI unit of «angular velocity» is rad/s.",
   "kk": "«бұрыштық жылдамдық» шамасының ХБЖ бірлігі — рад/с."
  }
 },
 {
  "id": "t9_l12_p11_fb",
  "type": "fill-blank",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «расстояние до небесного тела»? Запиши единицу.",
   "en": "In which units is «distance to a celestial body» measured? Write the unit.",
   "kk": "«аспан денесіне дейінгі қашықтық» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "метр (м)",
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre (m)",
    "metre",
    "m",
    "meter"
   ],
   "kk": [
    "метр (м)",
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «расстояние до небесного тела» — метр (м).",
   "en": "The SI unit of «distance to a celestial body» is metre (m).",
   "kk": "«аспан денесіне дейінгі қашықтық» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l12_p11_mt",
  "type": "matching",
  "topic": "p11",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Законы движения планет Солнечной системы» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Laws of motion of the planets of the Solar System» with their SI units.",
   "kk": "«Күн жүйесіндегі планеталардың қозғалыс заңдары» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "период обращения планеты",
     "расстояние до небесного тела",
     "годичный параллакс"
    ],
    "en": [
     "orbital period of a planet",
     "distance to a celestial body",
     "annual parallax"
    ],
    "kk": [
     "планетаның айналу периоды",
     "аспан денесіне дейінгі қашықтық",
     "жылдық параллакс"
    ]
   },
   "right": {
    "ru": [
     "угловая секунда (″)",
     "секунда (с)",
     "метр (м)"
    ],
    "en": [
     "arcsecond (″)",
     "second (s)",
     "metre (m)"
    ],
    "kk": [
     "бұрыштық секунд (″)",
     "секунд (с)",
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
   "ru": "Верные пары: период обращения планеты — секунда (с); расстояние до небесного тела — метр (м); годичный параллакс — угловая секунда (″).",
   "en": "Correct pairs: orbital period of a planet — second (s); distance to a celestial body — metre (m); annual parallax — arcsecond (″).",
   "kk": "Дұрыс жұптар: планетаның айналу периоды — секунд (с); аспан денесіне дейінгі қашықтық — метр (м); жылдық параллакс — бұрыштық секунд (″)."
  }
 },
 {
  "id": "t9_l13_p12_ms",
  "type": "multi-select",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Определение расстояний в астрономии методом параллакса».",
   "en": "Select all quantities studied in the topic «Determining distances in astronomy by the parallax method».",
   "kk": "«Астрономияда параллакс әдісімен қашықтықтарды анықтау» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "мощность",
    "расстояние до небесного тела",
    "ускорение",
    "годичный параллакс"
   ],
   "en": [
    "power",
    "distance to a celestial body",
    "acceleration",
    "annual parallax"
   ],
   "kk": [
    "қуат",
    "аспан денесіне дейінгі қашықтық",
    "үдеу",
    "жылдық параллакс"
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
   "ru": "Верных вариантов несколько — отметь их все. расстояние до небесного тела, годичный параллакс.",
   "en": "More than one option is correct — select them all. distance to a celestial body, annual parallax.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. аспан денесіне дейінгі қашықтық, жылдық параллакс."
  }
 },
 {
  "id": "t9_l13_p12_sa",
  "type": "short-answer",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «расстояние до небесного тела»? Запиши единицу.",
   "en": "Which SI unit is used to measure «distance to a celestial body»? Write the unit.",
   "kk": "«аспан денесіне дейінгі қашықтық» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "m"
   ],
   "kk": [
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «расстояние до небесного тела» — метр (м).",
   "en": "The SI unit of «distance to a celestial body» is metre (m).",
   "kk": "«аспан денесіне дейінгі қашықтық» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l13_p12_fb",
  "type": "fill-blank",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "Какую величину измеряют в «беккерель (Бк)»? Запиши название величины.",
   "en": "Which quantity is measured in becquerel (Bq)? Write its name.",
   "kk": "«беккерель (Бк)» бірлігімен қандай шама өлшенеді? Шаманың атауын жаз."
  },
  "correctAnswer": {
   "ru": [
    "активность радиоактивного образца"
   ],
   "en": [
    "activity of a radioactive sample"
   ],
   "kk": [
    "радиоактивті үлгінің белсенділігі"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В беккерель (Бк) измеряется активность радиоактивного образца.",
   "en": "The quantity measured in becquerel (Bq) is activity of a radioactive sample.",
   "kk": "беккерель (Бк) бірлігімен радиоактивті үлгінің белсенділігі өлшенеді."
  }
 },
 {
  "id": "t9_l13_p12_mt",
  "type": "matching",
  "topic": "p12",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Определение расстояний в астрономии методом параллакса» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Determining distances in astronomy by the parallax method» with their SI units.",
   "kk": "«Астрономияда параллакс әдісімен қашықтықтарды анықтау» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "годичный параллакс",
     "период обращения",
     "расстояние до небесного тела"
    ],
    "en": [
     "annual parallax",
     "period of revolution",
     "distance to a celestial body"
    ],
    "kk": [
     "жылдық параллакс",
     "айналу периоды",
     "аспан денесіне дейінгі қашықтық"
    ]
   },
   "right": {
    "ru": [
     "угловая секунда (″)",
     "метр (м)",
     "секунда (с)"
    ],
    "en": [
     "arcsecond (″)",
     "metre (m)",
     "second (s)"
    ],
    "kk": [
     "бұрыштық секунд (″)",
     "метр (м)",
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
   "ru": "Верные пары: годичный параллакс — угловая секунда (″); период обращения — секунда (с); расстояние до небесного тела — метр (м).",
   "en": "Correct pairs: annual parallax — arcsecond (″); period of revolution — second (s); distance to a celestial body — metre (m).",
   "kk": "Дұрыс жұптар: жылдық параллакс — бұрыштық секунд (″); айналу периоды — секунд (с); аспан денесіне дейінгі қашықтық — метр (м)."
  }
 },
 {
  "id": "t9_l14_p13_ms",
  "type": "multi-select",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Первый закон Ньютона. Инерциальные системы отсчёта».",
   "en": "Select all quantities studied in the topic «Newton's first law. Inertial frames of reference».",
   "kk": "«Ньютонның бірінші заңы. Инерциялық санау жүйелері» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "вес тела",
    "длина волны",
    "ускорение свободного падения",
    "энергия связи ядра"
   ],
   "en": [
    "weight of a body",
    "wavelength",
    "acceleration due to gravity",
    "nuclear binding energy"
   ],
   "kk": [
    "дене салмағы",
    "толқын ұзындығы",
    "еркін түсу үдеуі",
    "ядроның байланыс энергиясы"
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
   "ru": "Верных вариантов несколько — отметь их все. ускорение свободного падения, вес тела.",
   "en": "More than one option is correct — select them all. acceleration due to gravity, weight of a body.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. еркін түсу үдеуі, дене салмағы."
  }
 },
 {
  "id": "t9_l14_p13_sa",
  "type": "short-answer",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «импульс тела»? Запиши единицу.",
   "en": "Which SI unit is used to measure «momentum of a body»? Write the unit.",
   "kk": "«дене импульсі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "кг·м/с",
    "кг*м/с",
    "kg*m/s"
   ],
   "en": [
    "kg·m/s",
    "kg*m/s",
    "kg m/s"
   ],
   "kk": [
    "кг·м/с",
    "кг*м/с"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «импульс тела» — кг·м/с.",
   "en": "The SI unit of «momentum of a body» is kg·m/s.",
   "kk": "«дене импульсі» шамасының ХБЖ бірлігі — кг·м/с."
  }
 },
 {
  "id": "t9_l14_p13_fb",
  "type": "fill-blank",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «вес тела»? Запиши единицу.",
   "en": "In which units is «weight of a body» measured? Write the unit.",
   "kk": "«дене салмағы» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ньютон (Н)",
    "ньютон",
    "Н",
    "н",
    "n",
    "N"
   ],
   "en": [
    "newton (N)",
    "newton",
    "N",
    "n"
   ],
   "kk": [
    "ньютон (Н)",
    "ньютон",
    "Н",
    "н",
    "n",
    "N"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «вес тела» — ньютон (Н).",
   "en": "The SI unit of «weight of a body» is newton (N).",
   "kk": "«дене салмағы» шамасының ХБЖ бірлігі — ньютон (Н)."
  }
 },
 {
  "id": "t9_l14_p13_mt",
  "type": "matching",
  "topic": "p13",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Первый закон Ньютона. Инерциальные системы отсчёта» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Newton's first law. Inertial frames of reference» with their SI units.",
   "kk": "«Ньютонның бірінші заңы. Инерциялық санау жүйелері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила",
     "ускорение свободного падения",
     "масса"
    ],
    "en": [
     "force",
     "acceleration due to gravity",
     "mass"
    ],
    "kk": [
     "күш",
     "еркін түсу үдеуі",
     "масса"
    ]
   },
   "right": {
    "ru": [
     "м/с²",
     "килограмм (кг)",
     "ньютон (Н)"
    ],
    "en": [
     "m/s²",
     "kilogram (kg)",
     "newton (N)"
    ],
    "kk": [
     "м/с²",
     "килограмм (кг)",
     "ньютон (Н)"
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
   "ru": "Верные пары: сила — ньютон (Н); ускорение свободного падения — м/с²; масса — килограмм (кг).",
   "en": "Correct pairs: force — newton (N); acceleration due to gravity — m/s²; mass — kilogram (kg).",
   "kk": "Дұрыс жұптар: күш — ньютон (Н); еркін түсу үдеуі — м/с²; масса — килограмм (кг)."
  }
 },
 {
  "id": "t9_l15_p14_ms",
  "type": "multi-select",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Силы в механике».",
   "en": "Select all quantities studied in the topic «Forces in mechanics».",
   "kk": "«Механикадағы күштер» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "путь",
    "импульс тела",
    "масса",
    "работа выхода электрона"
   ],
   "en": [
    "distance travelled",
    "momentum of a body",
    "mass",
    "work function"
   ],
   "kk": [
    "жол",
    "дене импульсі",
    "масса",
    "электронның шығу жұмысы"
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
   "ru": "Верных вариантов несколько — отметь их все. масса, импульс тела.",
   "en": "More than one option is correct — select them all. mass, momentum of a body.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. масса, дене импульсі."
  }
 },
 {
  "id": "t9_l15_p14_sa",
  "type": "short-answer",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «вес тела»? Запиши единицу.",
   "en": "Which SI unit is used to measure «weight of a body»? Write the unit.",
   "kk": "«дене салмағы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «вес тела» — ньютон (Н).",
   "en": "The SI unit of «weight of a body» is newton (N).",
   "kk": "«дене салмағы» шамасының ХБЖ бірлігі — ньютон (Н)."
  }
 },
 {
  "id": "t9_l15_p14_fb",
  "type": "fill-blank",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "Какую величину измеряют в «килограмм (кг)»? Запиши название величины.",
   "en": "Which quantity is measured in kilogram (kg)? Write its name.",
   "kk": "«килограмм (кг)» бірлігімен қандай шама өлшенеді? Шаманың атауын жаз."
  },
  "correctAnswer": {
   "ru": [
    "масса"
   ],
   "en": [
    "mass"
   ],
   "kk": [
    "масса"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В килограмм (кг) измеряется масса.",
   "en": "The quantity measured in kilogram (kg) is mass.",
   "kk": "килограмм (кг) бірлігімен масса өлшенеді."
  }
 },
 {
  "id": "t9_l15_p14_mt",
  "type": "matching",
  "topic": "p14",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Силы в механике» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Forces in mechanics» with their SI units.",
   "kk": "«Механикадағы күштер» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила",
     "ускорение свободного падения",
     "масса"
    ],
    "en": [
     "force",
     "acceleration due to gravity",
     "mass"
    ],
    "kk": [
     "күш",
     "еркін түсу үдеуі",
     "масса"
    ]
   },
   "right": {
    "ru": [
     "килограмм (кг)",
     "м/с²",
     "ньютон (Н)"
    ],
    "en": [
     "kilogram (kg)",
     "m/s²",
     "newton (N)"
    ],
    "kk": [
     "килограмм (кг)",
     "м/с²",
     "ньютон (Н)"
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
   "ru": "Верные пары: сила — ньютон (Н); ускорение свободного падения — м/с²; масса — килограмм (кг).",
   "en": "Correct pairs: force — newton (N); acceleration due to gravity — m/s²; mass — kilogram (kg).",
   "kk": "Дұрыс жұптар: күш — ньютон (Н); еркін түсу үдеуі — м/с²; масса — килограмм (кг)."
  }
 },
 {
  "id": "t9_l16_p15_ms",
  "type": "multi-select",
  "topic": "p15",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Второй закон Ньютона, масса».",
   "en": "Select all quantities studied in the topic «Newton's second law, mass».",
   "kk": "«Ньютонның екінші заңы, масса» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "вес тела",
    "масса",
    "период обращения",
    "годичный параллакс"
   ],
   "en": [
    "weight of a body",
    "mass",
    "period of revolution",
    "annual parallax"
   ],
   "kk": [
    "дене салмағы",
    "масса",
    "айналу периоды",
    "жылдық параллакс"
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
   "ru": "Верных вариантов несколько — отметь их все. вес тела, масса.",
   "en": "More than one option is correct — select them all. weight of a body, mass.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. дене салмағы, масса."
  }
 },
 {
  "id": "t9_l16_p15_sa",
  "type": "short-answer",
  "topic": "p15",
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
  "id": "t9_l16_p15_fb",
  "type": "fill-blank",
  "topic": "p15",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «сила»? Запиши единицу.",
   "en": "In which units is «force» measured? Write the unit.",
   "kk": "«күш» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "ньютон (Н)",
    "ньютон",
    "Н",
    "н",
    "n",
    "N"
   ],
   "en": [
    "newton (N)",
    "newton",
    "N",
    "n"
   ],
   "kk": [
    "ньютон (Н)",
    "ньютон",
    "Н",
    "н",
    "n",
    "N"
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
  "id": "t9_l16_p15_mt",
  "type": "matching",
  "topic": "p15",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Второй закон Ньютона, масса» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Newton's second law, mass» with their SI units.",
   "kk": "«Ньютонның екінші заңы, масса» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "сила",
     "ускорение свободного падения"
    ],
    "en": [
     "mass",
     "force",
     "acceleration due to gravity"
    ],
    "kk": [
     "масса",
     "күш",
     "еркін түсу үдеуі"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "килограмм (кг)",
     "м/с²"
    ],
    "en": [
     "newton (N)",
     "kilogram (kg)",
     "m/s²"
    ],
    "kk": [
     "ньютон (Н)",
     "килограмм (кг)",
     "м/с²"
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
   "ru": "Верные пары: масса — килограмм (кг); сила — ньютон (Н); ускорение свободного падения — м/с².",
   "en": "Correct pairs: mass — kilogram (kg); force — newton (N); acceleration due to gravity — m/s².",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); күш — ньютон (Н); еркін түсу үдеуі — м/с²."
  }
 },
 {
  "id": "t9_l17_p16_ms",
  "type": "multi-select",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Третий закон Ньютона».",
   "en": "Select all quantities studied in the topic «Newton's third law».",
   "kk": "«Ньютонның үшінші заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период полураспада",
    "частота обращения",
    "масса",
    "ускорение свободного падения"
   ],
   "en": [
    "half-life",
    "frequency of revolution",
    "mass",
    "acceleration due to gravity"
   ],
   "kk": [
    "жартылай ыдырау периоды",
    "айналу жиілігі",
    "масса",
    "еркін түсу үдеуі"
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
   "ru": "Верных вариантов несколько — отметь их все. ускорение свободного падения, масса.",
   "en": "More than one option is correct — select them all. acceleration due to gravity, mass.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. еркін түсу үдеуі, масса."
  }
 },
 {
  "id": "t9_l17_p16_sa",
  "type": "short-answer",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «скорость волны»? Запиши единицу.",
   "en": "Which SI unit is used to measure «wave speed»? Write the unit.",
   "kk": "«толқын жылдамдығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с",
    "m/s"
   ],
   "en": [
    "m/s"
   ],
   "kk": [
    "м/с",
    "m/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «скорость волны» — м/с.",
   "en": "The SI unit of «wave speed» is m/s.",
   "kk": "«толқын жылдамдығы» шамасының ХБЖ бірлігі — м/с."
  }
 },
 {
  "id": "t9_l17_p16_fb",
  "type": "fill-blank",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «ускорение свободного падения»? Запиши единицу.",
   "en": "In which units is «acceleration due to gravity» measured? Write the unit.",
   "kk": "«еркін түсу үдеуі» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с²",
    "м/с2",
    "m/s2",
    "m/s²"
   ],
   "en": [
    "m/s²",
    "m/s2"
   ],
   "kk": [
    "м/с²",
    "м/с2",
    "m/s²"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «ускорение свободного падения» — м/с².",
   "en": "The SI unit of «acceleration due to gravity» is m/s².",
   "kk": "«еркін түсу үдеуі» шамасының ХБЖ бірлігі — м/с²."
  }
 },
 {
  "id": "t9_l17_p16_mt",
  "type": "matching",
  "topic": "p16",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Третий закон Ньютона» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Newton's third law» with their SI units.",
   "kk": "«Ньютонның үшінші заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила",
     "масса",
     "ускорение свободного падения"
    ],
    "en": [
     "force",
     "mass",
     "acceleration due to gravity"
    ],
    "kk": [
     "күш",
     "масса",
     "еркін түсу үдеуі"
    ]
   },
   "right": {
    "ru": [
     "ньютон (Н)",
     "килограмм (кг)",
     "м/с²"
    ],
    "en": [
     "newton (N)",
     "kilogram (kg)",
     "m/s²"
    ],
    "kk": [
     "ньютон (Н)",
     "килограмм (кг)",
     "м/с²"
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
   "ru": "Верные пары: сила — ньютон (Н); масса — килограмм (кг); ускорение свободного падения — м/с².",
   "en": "Correct pairs: force — newton (N); mass — kilogram (kg); acceleration due to gravity — m/s².",
   "kk": "Дұрыс жұптар: күш — ньютон (Н); масса — килограмм (кг); еркін түсу үдеуі — м/с²."
  }
 },
 {
  "id": "t9_l18_p17_ms",
  "type": "multi-select",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Закон всемирного тяготения».",
   "en": "Select all quantities studied in the topic «Law of universal gravitation».",
   "kk": "«Ғаламдық тартылу заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "частота колебаний",
    "масса",
    "ускорение свободного падения",
    "частота обращения"
   ],
   "en": [
    "frequency of oscillation",
    "mass",
    "acceleration due to gravity",
    "frequency of revolution"
   ],
   "kk": [
    "тербеліс жиілігі",
    "масса",
    "еркін түсу үдеуі",
    "айналу жиілігі"
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
   "ru": "Верных вариантов несколько — отметь их все. масса, ускорение свободного падения.",
   "en": "More than one option is correct — select them all. mass, acceleration due to gravity.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. масса, еркін түсу үдеуі."
  }
 },
 {
  "id": "t9_l18_p17_sa",
  "type": "short-answer",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «частота колебаний»? Запиши единицу.",
   "en": "Which SI unit is used to measure «frequency of oscillation»? Write the unit.",
   "kk": "«тербеліс жиілігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ],
   "en": [
    "hertz",
    "hz",
    "Hz"
   ],
   "kk": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота колебаний» — герц (Гц).",
   "en": "The SI unit of «frequency of oscillation» is hertz (Hz).",
   "kk": "«тербеліс жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l18_p17_fb",
  "type": "fill-blank",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «поглощённая доза излучения»: ___.",
   "en": "Name the SI unit of «absorbed radiation dose»: ___.",
   "kk": "«сіңірілген сәулелену дозасы» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "грей (Гр)",
    "грей",
    "Гр",
    "гр",
    "gy",
    "Gy"
   ],
   "en": [
    "gray (Gy)",
    "gray",
    "Gy",
    "gy"
   ],
   "kk": [
    "грей (Гр)",
    "грей",
    "Гр",
    "гр",
    "gy",
    "Gy"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «поглощённая доза излучения» — грей (Гр).",
   "en": "The SI unit of «absorbed radiation dose» is gray (Gy).",
   "kk": "«сіңірілген сәулелену дозасы» шамасының ХБЖ бірлігі — грей (Гр)."
  }
 },
 {
  "id": "t9_l18_p17_mt",
  "type": "matching",
  "topic": "p17",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Закон всемирного тяготения» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Law of universal gravitation» with their SI units.",
   "kk": "«Ғаламдық тартылу заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила",
     "масса",
     "ускорение свободного падения"
    ],
    "en": [
     "force",
     "mass",
     "acceleration due to gravity"
    ],
    "kk": [
     "күш",
     "масса",
     "еркін түсу үдеуі"
    ]
   },
   "right": {
    "ru": [
     "килограмм (кг)",
     "ньютон (Н)",
     "м/с²"
    ],
    "en": [
     "kilogram (kg)",
     "newton (N)",
     "m/s²"
    ],
    "kk": [
     "килограмм (кг)",
     "ньютон (Н)",
     "м/с²"
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
   "ru": "Верные пары: сила — ньютон (Н); масса — килограмм (кг); ускорение свободного падения — м/с².",
   "en": "Correct pairs: force — newton (N); mass — kilogram (kg); acceleration due to gravity — m/s².",
   "kk": "Дұрыс жұптар: күш — ньютон (Н); масса — килограмм (кг); еркін түсу үдеуі — м/с²."
  }
 },
 {
  "id": "t9_l19_p18_ms",
  "type": "multi-select",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Вес тела, невесомость».",
   "en": "Select all quantities studied in the topic «Body weight, weightlessness».",
   "kk": "«Дененің салмағы, салмақсыздық» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "индуктивность катушки",
    "ускорение свободного падения",
    "сила",
    "высота подъёма тела"
   ],
   "en": [
    "inductance of a coil",
    "acceleration due to gravity",
    "force",
    "height of a body above the ground"
   ],
   "kk": [
    "шарғы индуктивтілігі",
    "еркін түсу үдеуі",
    "күш",
    "дененің көтерілу биіктігі"
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
   "ru": "Верных вариантов несколько — отметь их все. ускорение свободного падения, сила.",
   "en": "More than one option is correct — select them all. acceleration due to gravity, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. еркін түсу үдеуі, күш."
  }
 },
 {
  "id": "t9_l19_p18_sa",
  "type": "short-answer",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «дефект масс»? Запиши единицу.",
   "en": "Which SI unit is used to measure «mass defect»? Write the unit.",
   "kk": "«масса ақауы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "а.е.м.",
    "аем",
    "атомная единица массы"
   ],
   "en": [
    "u",
    "amu",
    "atomic mass unit"
   ],
   "kk": [
    "а.е.м.",
    "аем"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «дефект масс» — атомная единица массы (а.е.м.).",
   "en": "The SI unit of «mass defect» is atomic mass unit (u).",
   "kk": "«масса ақауы» шамасының ХБЖ бірлігі — атомдық масса бірлігі (а.е.м.)."
  }
 },
 {
  "id": "t9_l19_p18_fb",
  "type": "fill-blank",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «период полураспада»? Запиши единицу.",
   "en": "In which units is «half-life» measured? Write the unit.",
   "kk": "«жартылай ыдырау периоды» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "секунда (с)",
    "секунда",
    "с",
    "s",
    "сек"
   ],
   "en": [
    "second (s)",
    "second",
    "s",
    "sec"
   ],
   "kk": [
    "секунд (с)",
    "секунд",
    "с",
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период полураспада» — секунда (с).",
   "en": "The SI unit of «half-life» is second (s).",
   "kk": "«жартылай ыдырау периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l19_p18_mt",
  "type": "matching",
  "topic": "p18",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Вес тела, невесомость» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Body weight, weightlessness» with their SI units.",
   "kk": "«Дененің салмағы, салмақсыздық» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "вес тела",
     "ускорение свободного падения",
     "масса"
    ],
    "en": [
     "weight of a body",
     "acceleration due to gravity",
     "mass"
    ],
    "kk": [
     "дене салмағы",
     "еркін түсу үдеуі",
     "масса"
    ]
   },
   "right": {
    "ru": [
     "килограмм (кг)",
     "м/с²",
     "ньютон (Н)"
    ],
    "en": [
     "kilogram (kg)",
     "m/s²",
     "newton (N)"
    ],
    "kk": [
     "килограмм (кг)",
     "м/с²",
     "ньютон (Н)"
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
   "ru": "Верные пары: вес тела — ньютон (Н); ускорение свободного падения — м/с²; масса — килограмм (кг).",
   "en": "Correct pairs: weight of a body — newton (N); acceleration due to gravity — m/s²; mass — kilogram (kg).",
   "kk": "Дұрыс жұптар: дене салмағы — ньютон (Н); еркін түсу үдеуі — м/с²; масса — килограмм (кг)."
  }
 },
 {
  "id": "t9_l20_p19_ms",
  "type": "multi-select",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Движение тела под действием силы тяжести. Спутники».",
   "en": "Select all quantities studied in the topic «Motion of a body under the influence of gravity. Satellites».",
   "kk": "«Дененің ауырлық күшінің әрекетімен қозғалысы. Жасанды серіктер» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "вес тела",
    "длина волны",
    "сила",
    "высота подъёма тела"
   ],
   "en": [
    "weight of a body",
    "wavelength",
    "force",
    "height of a body above the ground"
   ],
   "kk": [
    "дене салмағы",
    "толқын ұзындығы",
    "күш",
    "дененің көтерілу биіктігі"
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
   "ru": "Верных вариантов несколько — отметь их все. сила, вес тела.",
   "en": "More than one option is correct — select them all. force, weight of a body.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. күш, дене салмағы."
  }
 },
 {
  "id": "t9_l20_p19_sa",
  "type": "short-answer",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «работа выхода электрона»? Запиши единицу.",
   "en": "Which SI unit is used to measure «work function»? Write the unit.",
   "kk": "«электронның шығу жұмысы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "эв",
    "электрон-вольт",
    "ev",
    "eV"
   ],
   "en": [
    "ev",
    "eV",
    "electronvolt"
   ],
   "kk": [
    "эв",
    "электрон-вольт",
    "ev",
    "eV"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «работа выхода электрона» — электрон-вольт (эВ).",
   "en": "The SI unit of «work function» is electronvolt (eV).",
   "kk": "«электронның шығу жұмысы» шамасының ХБЖ бірлігі — электрон-вольт (эВ)."
  }
 },
 {
  "id": "t9_l20_p19_fb",
  "type": "fill-blank",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "Единица «мегаэлектрон-вольт (МэВ)» соответствует величине ___.",
   "en": "The unit megaelectronvolt (MeV) corresponds to the quantity ___.",
   "kk": "«мегаэлектрон-вольт (МэВ)» бірлігі ___ шамасына сәйкес келеді."
  },
  "correctAnswer": {
   "ru": [
    "энергия связи ядра",
    "энергия связи"
   ],
   "en": [
    "nuclear binding energy"
   ],
   "kk": [
    "ядроның байланыс энергиясы"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В мегаэлектрон-вольт (МэВ) измеряется энергия связи ядра.",
   "en": "The quantity measured in megaelectronvolt (MeV) is nuclear binding energy.",
   "kk": "мегаэлектрон-вольт (МэВ) бірлігімен ядроның байланыс энергиясы өлшенеді."
  }
 },
 {
  "id": "t9_l20_p19_mt",
  "type": "matching",
  "topic": "p19",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Движение тела под действием силы тяжести. Спутники» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Motion of a body under the influence of gravity. Satellites» with their SI units.",
   "kk": "«Дененің ауырлық күшінің әрекетімен қозғалысы. Жасанды серіктер» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "сила",
     "ускорение свободного падения",
     "импульс тела"
    ],
    "en": [
     "force",
     "acceleration due to gravity",
     "momentum of a body"
    ],
    "kk": [
     "күш",
     "еркін түсу үдеуі",
     "дене импульсі"
    ]
   },
   "right": {
    "ru": [
     "м/с²",
     "кг·м/с",
     "ньютон (Н)"
    ],
    "en": [
     "m/s²",
     "kg·m/s",
     "newton (N)"
    ],
    "kk": [
     "м/с²",
     "кг·м/с",
     "ньютон (Н)"
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
   "ru": "Верные пары: сила — ньютон (Н); ускорение свободного падения — м/с²; импульс тела — кг·м/с.",
   "en": "Correct pairs: force — newton (N); acceleration due to gravity — m/s²; momentum of a body — kg·m/s.",
   "kk": "Дұрыс жұптар: күш — ньютон (Н); еркін түсу үдеуі — м/с²; дене импульсі — кг·м/с."
  }
 },
 {
  "id": "t9_l21_p20_ms",
  "type": "multi-select",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Импульс тела и импульс силы. Закон сохранения импульса».",
   "en": "Select all quantities studied in the topic «Momentum of a body and momentum of a force. Law of conservation of momentum».",
   "kk": "«Дененің импульсі және күш импульсі. Импульстің сақталу заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "эквивалентная доза",
    "высота подъёма тела",
    "импульс тела",
    "сила"
   ],
   "en": [
    "equivalent dose",
    "height of a body above the ground",
    "momentum of a body",
    "force"
   ],
   "kk": [
    "эквивалентті доза",
    "дененің көтерілу биіктігі",
    "дене импульсі",
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
   "ru": "Верных вариантов несколько — отметь их все. импульс тела, сила.",
   "en": "More than one option is correct — select them all. momentum of a body, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. дене импульсі, күш."
  }
 },
 {
  "id": "t9_l21_p20_sa",
  "type": "short-answer",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «амплитуда колебаний»? Запиши единицу.",
   "en": "Which SI unit is used to measure «amplitude of oscillation»? Write the unit.",
   "kk": "«тербеліс амплитудасы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "m"
   ],
   "kk": [
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «амплитуда колебаний» — метр (м).",
   "en": "The SI unit of «amplitude of oscillation» is metre (m).",
   "kk": "«тербеліс амплитудасы» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l21_p20_fb",
  "type": "fill-blank",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "Единица «зиверт (Зв)» соответствует величине ___.",
   "en": "The unit sievert (Sv) corresponds to the quantity ___.",
   "kk": "«зиверт (Зв)» бірлігі ___ шамасына сәйкес келеді."
  },
  "correctAnswer": {
   "ru": [
    "эквивалентная доза"
   ],
   "en": [
    "equivalent dose"
   ],
   "kk": [
    "эквивалентті доза"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В зиверт (Зв) измеряется эквивалентная доза.",
   "en": "The quantity measured in sievert (Sv) is equivalent dose.",
   "kk": "зиверт (Зв) бірлігімен эквивалентті доза өлшенеді."
  }
 },
 {
  "id": "t9_l21_p20_mt",
  "type": "matching",
  "topic": "p20",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Импульс тела и импульс силы. Закон сохранения импульса» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Momentum of a body and momentum of a force. Law of conservation of momentum» with their SI units.",
   "kk": "«Дененің импульсі және күш импульсі. Импульстің сақталу заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "импульс тела",
     "масса",
     "сила"
    ],
    "en": [
     "momentum of a body",
     "mass",
     "force"
    ],
    "kk": [
     "дене импульсі",
     "масса",
     "күш"
    ]
   },
   "right": {
    "ru": [
     "кг·м/с",
     "килограмм (кг)",
     "ньютон (Н)"
    ],
    "en": [
     "kg·m/s",
     "kilogram (kg)",
     "newton (N)"
    ],
    "kk": [
     "кг·м/с",
     "килограмм (кг)",
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
   "ru": "Верные пары: импульс тела — кг·м/с; масса — килограмм (кг); сила — ньютон (Н).",
   "en": "Correct pairs: momentum of a body — kg·m/s; mass — kilogram (kg); force — newton (N).",
   "kk": "Дұрыс жұптар: дене импульсі — кг·м/с; масса — килограмм (кг); күш — ньютон (Н)."
  }
 },
 {
  "id": "t9_l22_p21_ms",
  "type": "multi-select",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Реактивное движение».",
   "en": "Select all quantities studied in the topic «Reactive motion».",
   "kk": "«Реактивті қозғалыс» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила",
    "импульс тела",
    "амплитуда колебаний",
    "работа выхода электрона"
   ],
   "en": [
    "force",
    "momentum of a body",
    "amplitude of oscillation",
    "work function"
   ],
   "kk": [
    "күш",
    "дене импульсі",
    "тербеліс амплитудасы",
    "электронның шығу жұмысы"
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
   "ru": "Верных вариантов несколько — отметь их все. импульс тела, сила.",
   "en": "More than one option is correct — select them all. momentum of a body, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. дене импульсі, күш."
  }
 },
 {
  "id": "t9_l22_p21_sa",
  "type": "short-answer",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «период колебаний»? Запиши единицу.",
   "en": "Which SI unit is used to measure «period of oscillation»? Write the unit.",
   "kk": "«тербеліс периоды» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период колебаний» — секунда (с).",
   "en": "The SI unit of «period of oscillation» is second (s).",
   "kk": "«тербеліс периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l22_p21_fb",
  "type": "fill-blank",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "Единица «атомная единица массы (а.е.м.)» соответствует величине ___.",
   "en": "The unit atomic mass unit (u) corresponds to the quantity ___.",
   "kk": "«атомдық масса бірлігі (а.е.м.)» бірлігі ___ шамасына сәйкес келеді."
  },
  "correctAnswer": {
   "ru": [
    "дефект масс"
   ],
   "en": [
    "mass defect"
   ],
   "kk": [
    "масса ақауы"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В атомная единица массы (а.е.м.) измеряется дефект масс.",
   "en": "The quantity measured in atomic mass unit (u) is mass defect.",
   "kk": "атомдық масса бірлігі (а.е.м.) бірлігімен масса ақауы өлшенеді."
  }
 },
 {
  "id": "t9_l22_p21_mt",
  "type": "matching",
  "topic": "p21",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Реактивное движение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Reactive motion» with their SI units.",
   "kk": "«Реактивті қозғалыс» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "импульс тела",
     "масса",
     "ускорение свободного падения"
    ],
    "en": [
     "momentum of a body",
     "mass",
     "acceleration due to gravity"
    ],
    "kk": [
     "дене импульсі",
     "масса",
     "еркін түсу үдеуі"
    ]
   },
   "right": {
    "ru": [
     "кг·м/с",
     "килограмм (кг)",
     "м/с²"
    ],
    "en": [
     "kg·m/s",
     "kilogram (kg)",
     "m/s²"
    ],
    "kk": [
     "кг·м/с",
     "килограмм (кг)",
     "м/с²"
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
   "ru": "Верные пары: импульс тела — кг·м/с; масса — килограмм (кг); ускорение свободного падения — м/с².",
   "en": "Correct pairs: momentum of a body — kg·m/s; mass — kilogram (kg); acceleration due to gravity — m/s².",
   "kk": "Дұрыс жұптар: дене импульсі — кг·м/с; масса — килограмм (кг); еркін түсу үдеуі — м/с²."
  }
 },
 {
  "id": "t9_l23_p22_ms",
  "type": "multi-select",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Механическая работа и энергия».",
   "en": "Select all quantities studied in the topic «Mechanical work and energy».",
   "kk": "«Механикалық жұмыс және энергия» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "потенциальная энергия",
    "кинетическая энергия",
    "время",
    "частота колебаний"
   ],
   "en": [
    "potential energy",
    "kinetic energy",
    "time",
    "frequency of oscillation"
   ],
   "kk": [
    "потенциалдық энергия",
    "кинетикалық энергия",
    "уақыт",
    "тербеліс жиілігі"
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
   "ru": "Верных вариантов несколько — отметь их все. потенциальная энергия, кинетическая энергия.",
   "en": "More than one option is correct — select them all. potential energy, kinetic energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. потенциалдық энергия, кинетикалық энергия."
  }
 },
 {
  "id": "t9_l23_p22_sa",
  "type": "short-answer",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «механическая работа»? Запиши единицу.",
   "en": "Which SI unit is used to measure «mechanical work»? Write the unit.",
   "kk": "«механикалық жұмыс» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «механическая работа» — джоуль (Дж).",
   "en": "The SI unit of «mechanical work» is joule (J).",
   "kk": "«механикалық жұмыс» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l23_p22_fb",
  "type": "fill-blank",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "Какую величину измеряют в «ватт (Вт)»? Запиши название величины.",
   "en": "Which quantity is measured in watt (W)? Write its name.",
   "kk": "«ватт (Вт)» бірлігімен қандай шама өлшенеді? Шаманың атауын жаз."
  },
  "correctAnswer": {
   "ru": [
    "мощность"
   ],
   "en": [
    "power"
   ],
   "kk": [
    "қуат"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В ватт (Вт) измеряется мощность.",
   "en": "The quantity measured in watt (W) is power.",
   "kk": "ватт (Вт) бірлігімен қуат өлшенеді."
  }
 },
 {
  "id": "t9_l23_p22_mt",
  "type": "matching",
  "topic": "p22",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Механическая работа и энергия» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Mechanical work and energy» with their SI units.",
   "kk": "«Механикалық жұмыс және энергия» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "кинетическая энергия",
     "мощность",
     "высота подъёма тела"
    ],
    "en": [
     "kinetic energy",
     "power",
     "height of a body above the ground"
    ],
    "kk": [
     "кинетикалық энергия",
     "қуат",
     "дененің көтерілу биіктігі"
    ]
   },
   "right": {
    "ru": [
     "ватт (Вт)",
     "джоуль (Дж)",
     "метр (м)"
    ],
    "en": [
     "watt (W)",
     "joule (J)",
     "metre (m)"
    ],
    "kk": [
     "ватт (Вт)",
     "джоуль (Дж)",
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
   "ru": "Верные пары: кинетическая энергия — джоуль (Дж); мощность — ватт (Вт); высота подъёма тела — метр (м).",
   "en": "Correct pairs: kinetic energy — joule (J); power — watt (W); height of a body above the ground — metre (m).",
   "kk": "Дұрыс жұптар: кинетикалық энергия — джоуль (Дж); қуат — ватт (Вт); дененің көтерілу биіктігі — метр (м)."
  }
 },
 {
  "id": "t9_l24_p23_ms",
  "type": "multi-select",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Закон сохранения и превращения энергии».",
   "en": "Select all quantities studied in the topic «Law of conservation and transformation of energy».",
   "kk": "«Энергияны сақтау және түрлендіру заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "потенциальная энергия",
    "ускорение свободного падения",
    "кинетическая энергия",
    "скорость света"
   ],
   "en": [
    "potential energy",
    "acceleration due to gravity",
    "kinetic energy",
    "speed of light"
   ],
   "kk": [
    "потенциалдық энергия",
    "еркін түсу үдеуі",
    "кинетикалық энергия",
    "жарық жылдамдығы"
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
   "ru": "Верных вариантов несколько — отметь их все. потенциальная энергия, кинетическая энергия.",
   "en": "More than one option is correct — select them all. potential energy, kinetic energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. потенциалдық энергия, кинетикалық энергия."
  }
 },
 {
  "id": "t9_l24_p23_sa",
  "type": "short-answer",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «высота подъёма тела»? Запиши единицу.",
   "en": "Which SI unit is used to measure «height of a body above the ground»? Write the unit.",
   "kk": "«дененің көтерілу биіктігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "m"
   ],
   "kk": [
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «высота подъёма тела» — метр (м).",
   "en": "The SI unit of «height of a body above the ground» is metre (m).",
   "kk": "«дененің көтерілу биіктігі» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l24_p23_fb",
  "type": "fill-blank",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «механическая работа»: ___.",
   "en": "Name the SI unit of «mechanical work»: ___.",
   "kk": "«механикалық жұмыс» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ],
   "en": [
    "joule (J)",
    "joule",
    "J",
    "j"
   ],
   "kk": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «механическая работа» — джоуль (Дж).",
   "en": "The SI unit of «mechanical work» is joule (J).",
   "kk": "«механикалық жұмыс» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l24_p23_mt",
  "type": "matching",
  "topic": "p23",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Закон сохранения и превращения энергии» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Law of conservation and transformation of energy» with their SI units.",
   "kk": "«Энергияны сақтау және түрлендіру заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "кинетическая энергия",
     "мощность",
     "высота подъёма тела"
    ],
    "en": [
     "kinetic energy",
     "power",
     "height of a body above the ground"
    ],
    "kk": [
     "кинетикалық энергия",
     "қуат",
     "дененің көтерілу биіктігі"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "метр (м)",
     "ватт (Вт)"
    ],
    "en": [
     "joule (J)",
     "metre (m)",
     "watt (W)"
    ],
    "kk": [
     "джоуль (Дж)",
     "метр (м)",
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
   "ru": "Верные пары: кинетическая энергия — джоуль (Дж); мощность — ватт (Вт); высота подъёма тела — метр (м).",
   "en": "Correct pairs: kinetic energy — joule (J); power — watt (W); height of a body above the ground — metre (m).",
   "kk": "Дұрыс жұптар: кинетикалық энергия — джоуль (Дж); қуат — ватт (Вт); дененің көтерілу биіктігі — метр (м)."
  }
 },
 {
  "id": "t9_l25_p24_ms",
  "type": "multi-select",
  "topic": "p24",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Колебательное движение».",
   "en": "Select all quantities studied in the topic «Oscillatory motion».",
   "kk": "«Тербелмелі қозғалыс» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "энергия связи ядра",
    "длина волны",
    "частота колебаний",
    "период колебаний"
   ],
   "en": [
    "nuclear binding energy",
    "wavelength",
    "frequency of oscillation",
    "period of oscillation"
   ],
   "kk": [
    "ядроның байланыс энергиясы",
    "толқын ұзындығы",
    "тербеліс жиілігі",
    "тербеліс периоды"
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
   "ru": "Верных вариантов несколько — отметь их все. частота колебаний, период колебаний.",
   "en": "More than one option is correct — select them all. frequency of oscillation, period of oscillation.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. тербеліс жиілігі, тербеліс периоды."
  }
 },
 {
  "id": "t9_l25_p24_sa",
  "type": "short-answer",
  "topic": "p24",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «кинетическая энергия»? Запиши единицу.",
   "en": "Which SI unit is used to measure «kinetic energy»? Write the unit.",
   "kk": "«кинетикалық энергия» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «кинетическая энергия» — джоуль (Дж).",
   "en": "The SI unit of «kinetic energy» is joule (J).",
   "kk": "«кинетикалық энергия» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l25_p24_mt",
  "type": "matching",
  "topic": "p24",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Колебательное движение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Oscillatory motion» with their SI units.",
   "kk": "«Тербелмелі қозғалыс» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "амплитуда колебаний",
     "частота колебаний",
     "период колебаний"
    ],
    "en": [
     "amplitude of oscillation",
     "frequency of oscillation",
     "period of oscillation"
    ],
    "kk": [
     "тербеліс амплитудасы",
     "тербеліс жиілігі",
     "тербеліс периоды"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "герц (Гц)",
     "секунда (с)"
    ],
    "en": [
     "metre (m)",
     "hertz (Hz)",
     "second (s)"
    ],
    "kk": [
     "метр (м)",
     "герц (Гц)",
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
   "ru": "Верные пары: амплитуда колебаний — метр (м); частота колебаний — герц (Гц); период колебаний — секунда (с).",
   "en": "Correct pairs: amplitude of oscillation — metre (m); frequency of oscillation — hertz (Hz); period of oscillation — second (s).",
   "kk": "Дұрыс жұптар: тербеліс амплитудасы — метр (м); тербеліс жиілігі — герц (Гц); тербеліс периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l26_p25_ms",
  "type": "multi-select",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Превращение энергии при колебаниях. Уравнение колебаний».",
   "en": "Select all quantities studied in the topic «Energy transformation in oscillations. Oscillation equation».",
   "kk": "«Тербелістер кезіндегі энергияның түрленуі. Тербеліс теңдеуі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "механическая работа",
    "амплитуда колебаний",
    "потенциальная энергия",
    "частота колебаний"
   ],
   "en": [
    "mechanical work",
    "amplitude of oscillation",
    "potential energy",
    "frequency of oscillation"
   ],
   "kk": [
    "механикалық жұмыс",
    "тербеліс амплитудасы",
    "потенциалдық энергия",
    "тербеліс жиілігі"
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
   "ru": "Верных вариантов несколько — отметь их все. частота колебаний, амплитуда колебаний.",
   "en": "More than one option is correct — select them all. frequency of oscillation, amplitude of oscillation.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. тербеліс жиілігі, тербеліс амплитудасы."
  }
 },
 {
  "id": "t9_l26_p25_sa",
  "type": "short-answer",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «индуктивность катушки»? Запиши единицу.",
   "en": "Which SI unit is used to measure «inductance of a coil»? Write the unit.",
   "kk": "«шарғы индуктивтілігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "генри",
    "гн",
    "h",
    "H",
    "Гн"
   ],
   "en": [
    "henry",
    "h",
    "H"
   ],
   "kk": [
    "генри",
    "гн",
    "h",
    "H",
    "Гн"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «индуктивность катушки» — генри (Гн).",
   "en": "The SI unit of «inductance of a coil» is henry (H).",
   "kk": "«шарғы индуктивтілігі» шамасының ХБЖ бірлігі — генри (Гн)."
  }
 },
 {
  "id": "t9_l26_p25_fb",
  "type": "fill-blank",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "Единица «фарад (Ф)» соответствует величине ___.",
   "en": "The unit farad (F) corresponds to the quantity ___.",
   "kk": "«фарад (Ф)» бірлігі ___ шамасына сәйкес келеді."
  },
  "correctAnswer": {
   "ru": [
    "электроёмкость конденсатора",
    "электроёмкость"
   ],
   "en": [
    "capacitance of a capacitor",
    "capacitance"
   ],
   "kk": [
    "конденсатор сыйымдылығы"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В фарад (Ф) измеряется электроёмкость конденсатора.",
   "en": "The quantity measured in farad (F) is capacitance of a capacitor.",
   "kk": "фарад (Ф) бірлігімен конденсатор сыйымдылығы өлшенеді."
  }
 },
 {
  "id": "t9_l26_p25_mt",
  "type": "matching",
  "topic": "p25",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Превращение энергии при колебаниях. Уравнение колебаний» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Energy transformation in oscillations. Oscillation equation» with their SI units.",
   "kk": "«Тербелістер кезіндегі энергияның түрленуі. Тербеліс теңдеуі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "период колебаний",
     "амплитуда колебаний",
     "частота колебаний"
    ],
    "en": [
     "period of oscillation",
     "amplitude of oscillation",
     "frequency of oscillation"
    ],
    "kk": [
     "тербеліс периоды",
     "тербеліс амплитудасы",
     "тербеліс жиілігі"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "секунда (с)",
     "герц (Гц)"
    ],
    "en": [
     "metre (m)",
     "second (s)",
     "hertz (Hz)"
    ],
    "kk": [
     "метр (м)",
     "секунд (с)",
     "герц (Гц)"
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
   "ru": "Верные пары: период колебаний — секунда (с); амплитуда колебаний — метр (м); частота колебаний — герц (Гц).",
   "en": "Correct pairs: period of oscillation — second (s); amplitude of oscillation — metre (m); frequency of oscillation — hertz (Hz).",
   "kk": "Дұрыс жұптар: тербеліс периоды — секунд (с); тербеліс амплитудасы — метр (м); тербеліс жиілігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l27_p26_ms",
  "type": "multi-select",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Колебания математического и пружинного маятников».",
   "en": "Select all quantities studied in the topic «Oscillations of mathematical and spring pendulums».",
   "kk": "«Математикалық және серіппелі маятниктердің тербелістері» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "активность радиоактивного образца",
    "амплитуда колебаний",
    "скорость света",
    "частота колебаний"
   ],
   "en": [
    "activity of a radioactive sample",
    "amplitude of oscillation",
    "speed of light",
    "frequency of oscillation"
   ],
   "kk": [
    "радиоактивті үлгінің белсенділігі",
    "тербеліс амплитудасы",
    "жарық жылдамдығы",
    "тербеліс жиілігі"
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
   "ru": "Верных вариантов несколько — отметь их все. амплитуда колебаний, частота колебаний.",
   "en": "More than one option is correct — select them all. amplitude of oscillation, frequency of oscillation.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. тербеліс амплитудасы, тербеліс жиілігі."
  }
 },
 {
  "id": "t9_l27_p26_sa",
  "type": "short-answer",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «активность радиоактивного образца»? Запиши единицу.",
   "en": "Which SI unit is used to measure «activity of a radioactive sample»? Write the unit.",
   "kk": "«радиоактивті үлгінің белсенділігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "беккерель",
    "бк",
    "bq",
    "Bq"
   ],
   "en": [
    "becquerel",
    "bq",
    "Bq"
   ],
   "kk": [
    "беккерель",
    "бк",
    "bq",
    "Bq"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «активность радиоактивного образца» — беккерель (Бк).",
   "en": "The SI unit of «activity of a radioactive sample» is becquerel (Bq).",
   "kk": "«радиоактивті үлгінің белсенділігі» шамасының ХБЖ бірлігі — беккерель (Бк)."
  }
 },
 {
  "id": "t9_l27_p26_fb",
  "type": "fill-blank",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «частота колебаний» — ___.",
   "en": "The unit of «frequency of oscillation» is ___.",
   "kk": "«тербеліс жиілігі» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "герц (Гц)",
    "герц",
    "Гц",
    "гц",
    "hz",
    "Hz"
   ],
   "en": [
    "hertz (Hz)",
    "hertz",
    "Hz",
    "hz"
   ],
   "kk": [
    "герц (Гц)",
    "герц",
    "Гц",
    "гц",
    "hz",
    "Hz"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота колебаний» — герц (Гц).",
   "en": "The SI unit of «frequency of oscillation» is hertz (Hz).",
   "kk": "«тербеліс жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l27_p26_mt",
  "type": "matching",
  "topic": "p26",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Колебания математического и пружинного маятников» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Oscillations of mathematical and spring pendulums» with their SI units.",
   "kk": "«Математикалық және серіппелі маятниктердің тербелістері» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "частота колебаний",
     "амплитуда колебаний",
     "период колебаний"
    ],
    "en": [
     "frequency of oscillation",
     "amplitude of oscillation",
     "period of oscillation"
    ],
    "kk": [
     "тербеліс жиілігі",
     "тербеліс амплитудасы",
     "тербеліс периоды"
    ]
   },
   "right": {
    "ru": [
     "герц (Гц)",
     "метр (м)",
     "секунда (с)"
    ],
    "en": [
     "hertz (Hz)",
     "metre (m)",
     "second (s)"
    ],
    "kk": [
     "герц (Гц)",
     "метр (м)",
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
   "ru": "Верные пары: частота колебаний — герц (Гц); амплитуда колебаний — метр (м); период колебаний — секунда (с).",
   "en": "Correct pairs: frequency of oscillation — hertz (Hz); amplitude of oscillation — metre (m); period of oscillation — second (s).",
   "kk": "Дұрыс жұптар: тербеліс жиілігі — герц (Гц); тербеліс амплитудасы — метр (м); тербеліс периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l28_p27_ms",
  "type": "multi-select",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Свободные и вынужденные колебания, резонанс».",
   "en": "Select all quantities studied in the topic «Free and forced oscillations, resonance».",
   "kk": "«Еркін және мәжбүрлі тербелістер, резонанс» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "время",
    "электроёмкость конденсатора",
    "индуктивность катушки",
    "скорость волны"
   ],
   "en": [
    "time",
    "capacitance of a capacitor",
    "inductance of a coil",
    "wave speed"
   ],
   "kk": [
    "уақыт",
    "конденсатор сыйымдылығы",
    "шарғы индуктивтілігі",
    "толқын жылдамдығы"
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
   "ru": "Верных вариантов несколько — отметь их все. электроёмкость конденсатора, индуктивность катушки.",
   "en": "More than one option is correct — select them all. capacitance of a capacitor, inductance of a coil.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. конденсатор сыйымдылығы, шарғы индуктивтілігі."
  }
 },
 {
  "id": "t9_l28_p27_sa",
  "type": "short-answer",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «электроёмкость конденсатора»? Запиши единицу.",
   "en": "Which SI unit is used to measure «capacitance of a capacitor»? Write the unit.",
   "kk": "«конденсатор сыйымдылығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «электроёмкость конденсатора» — фарад (Ф).",
   "en": "The SI unit of «capacitance of a capacitor» is farad (F).",
   "kk": "«конденсатор сыйымдылығы» шамасының ХБЖ бірлігі — фарад (Ф)."
  }
 },
 {
  "id": "t9_l28_p27_fb",
  "type": "fill-blank",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "В единицах «генри (Гн)» измеряется величина ___.",
   "en": "The quantity measured in henry (H) is ___.",
   "kk": "«генри (Гн)» бірлігімен өлшенетін шама — ___."
  },
  "correctAnswer": {
   "ru": [
    "индуктивность катушки",
    "индуктивность"
   ],
   "en": [
    "inductance of a coil",
    "inductance"
   ],
   "kk": [
    "шарғы индуктивтілігі"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В генри (Гн) измеряется индуктивность катушки.",
   "en": "The quantity measured in henry (H) is inductance of a coil.",
   "kk": "генри (Гн) бірлігімен шарғы индуктивтілігі өлшенеді."
  }
 },
 {
  "id": "t9_l28_p27_mt",
  "type": "matching",
  "topic": "p27",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Свободные и вынужденные колебания, резонанс» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Free and forced oscillations, resonance» with their SI units.",
   "kk": "«Еркін және мәжбүрлі тербелістер, резонанс» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "период колебаний",
     "частота колебаний",
     "амплитуда колебаний"
    ],
    "en": [
     "period of oscillation",
     "frequency of oscillation",
     "amplitude of oscillation"
    ],
    "kk": [
     "тербеліс периоды",
     "тербеліс жиілігі",
     "тербеліс амплитудасы"
    ]
   },
   "right": {
    "ru": [
     "герц (Гц)",
     "метр (м)",
     "секунда (с)"
    ],
    "en": [
     "hertz (Hz)",
     "metre (m)",
     "second (s)"
    ],
    "kk": [
     "герц (Гц)",
     "метр (м)",
     "секунд (с)"
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
   "ru": "Верные пары: период колебаний — секунда (с); частота колебаний — герц (Гц); амплитуда колебаний — метр (м).",
   "en": "Correct pairs: period of oscillation — second (s); frequency of oscillation — hertz (Hz); amplitude of oscillation — metre (m).",
   "kk": "Дұрыс жұптар: тербеліс периоды — секунд (с); тербеліс жиілігі — герц (Гц); тербеліс амплитудасы — метр (м)."
  }
 },
 {
  "id": "t9_l29_p28_ms",
  "type": "multi-select",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Свободные электромагнитные колебания».",
   "en": "Select all quantities studied in the topic «Free electromagnetic oscillations».",
   "kk": "«Еркін электромагниттік тербелістер» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "скорость",
    "амплитуда колебаний",
    "период колебаний",
    "скорость волны"
   ],
   "en": [
    "velocity",
    "amplitude of oscillation",
    "period of oscillation",
    "wave speed"
   ],
   "kk": [
    "жылдамдық",
    "тербеліс амплитудасы",
    "тербеліс периоды",
    "толқын жылдамдығы"
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
   "ru": "Верных вариантов несколько — отметь их все. амплитуда колебаний, период колебаний.",
   "en": "More than one option is correct — select them all. amplitude of oscillation, period of oscillation.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. тербеліс амплитудасы, тербеліс периоды."
  }
 },
 {
  "id": "t9_l29_p28_sa",
  "type": "short-answer",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «энергия связи ядра»? Запиши единицу.",
   "en": "Which SI unit is used to measure «nuclear binding energy»? Write the unit.",
   "kk": "«ядроның байланыс энергиясы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "мэв",
    "mev",
    "MeV"
   ],
   "en": [
    "mev",
    "MeV"
   ],
   "kk": [
    "мэв",
    "mev",
    "MeV"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «энергия связи ядра» — мегаэлектрон-вольт (МэВ).",
   "en": "The SI unit of «nuclear binding energy» is megaelectronvolt (MeV).",
   "kk": "«ядроның байланыс энергиясы» шамасының ХБЖ бірлігі — мегаэлектрон-вольт (МэВ)."
  }
 },
 {
  "id": "t9_l29_p28_fb",
  "type": "fill-blank",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «амплитуда колебаний»? Запиши единицу.",
   "en": "In which units is «amplitude of oscillation» measured? Write the unit.",
   "kk": "«тербеліс амплитудасы» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "метр (м)",
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre (m)",
    "metre",
    "m",
    "meter"
   ],
   "kk": [
    "метр (м)",
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «амплитуда колебаний» — метр (м).",
   "en": "The SI unit of «amplitude of oscillation» is metre (m).",
   "kk": "«тербеліс амплитудасы» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l29_p28_mt",
  "type": "matching",
  "topic": "p28",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Свободные электромагнитные колебания» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Free electromagnetic oscillations» with their SI units.",
   "kk": "«Еркін электромагниттік тербелістер» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "электроёмкость конденсатора",
     "индуктивность катушки",
     "период колебаний"
    ],
    "en": [
     "capacitance of a capacitor",
     "inductance of a coil",
     "period of oscillation"
    ],
    "kk": [
     "конденсатор сыйымдылығы",
     "шарғы индуктивтілігі",
     "тербеліс периоды"
    ]
   },
   "right": {
    "ru": [
     "генри (Гн)",
     "секунда (с)",
     "фарад (Ф)"
    ],
    "en": [
     "henry (H)",
     "second (s)",
     "farad (F)"
    ],
    "kk": [
     "генри (Гн)",
     "секунд (с)",
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
   "ru": "Верные пары: электроёмкость конденсатора — фарад (Ф); индуктивность катушки — генри (Гн); период колебаний — секунда (с).",
   "en": "Correct pairs: capacitance of a capacitor — farad (F); inductance of a coil — henry (H); period of oscillation — second (s).",
   "kk": "Дұрыс жұптар: конденсатор сыйымдылығы — фарад (Ф); шарғы индуктивтілігі — генри (Гн); тербеліс периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l30_p29_ms",
  "type": "multi-select",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Волновое движение».",
   "en": "Select all quantities studied in the topic «Wave motion».",
   "kk": "«Толқындық қозғалыс» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "энергия связи ядра",
    "длина волны",
    "скорость волны",
    "ускорение свободного падения"
   ],
   "en": [
    "nuclear binding energy",
    "wavelength",
    "wave speed",
    "acceleration due to gravity"
   ],
   "kk": [
    "ядроның байланыс энергиясы",
    "толқын ұзындығы",
    "толқын жылдамдығы",
    "еркін түсу үдеуі"
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
   "ru": "Верных вариантов несколько — отметь их все. длина волны, скорость волны.",
   "en": "More than one option is correct — select them all. wavelength, wave speed.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. толқын ұзындығы, толқын жылдамдығы."
  }
 },
 {
  "id": "t9_l30_p29_sa",
  "type": "short-answer",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «частота звука»? Запиши единицу.",
   "en": "Which SI unit is used to measure «sound frequency»? Write the unit.",
   "kk": "«дыбыс жиілігі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ],
   "en": [
    "hertz",
    "hz",
    "Hz"
   ],
   "kk": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота звука» — герц (Гц).",
   "en": "The SI unit of «sound frequency» is hertz (Hz).",
   "kk": "«дыбыс жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l30_p29_fb",
  "type": "fill-blank",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «скорость света»? Запиши единицу.",
   "en": "In which units is «speed of light» measured? Write the unit.",
   "kk": "«жарық жылдамдығы» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с",
    "m/s"
   ],
   "en": [
    "m/s"
   ],
   "kk": [
    "м/с",
    "m/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «скорость света» — м/с.",
   "en": "The SI unit of «speed of light» is m/s.",
   "kk": "«жарық жылдамдығы» шамасының ХБЖ бірлігі — м/с."
  }
 },
 {
  "id": "t9_l30_p29_mt",
  "type": "matching",
  "topic": "p29",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Волновое движение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Wave motion» with their SI units.",
   "kk": "«Толқындық қозғалыс» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "длина волны",
     "скорость волны",
     "уровень громкости"
    ],
    "en": [
     "wavelength",
     "wave speed",
     "loudness level"
    ],
    "kk": [
     "толқын ұзындығы",
     "толқын жылдамдығы",
     "дыбыс қаттылығының деңгейі"
    ]
   },
   "right": {
    "ru": [
     "м/с",
     "децибел (дБ)",
     "метр (м)"
    ],
    "en": [
     "m/s",
     "decibel (dB)",
     "metre (m)"
    ],
    "kk": [
     "м/с",
     "децибел (дБ)",
     "метр (м)"
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
   "ru": "Верные пары: длина волны — метр (м); скорость волны — м/с; уровень громкости — децибел (дБ).",
   "en": "Correct pairs: wavelength — metre (m); wave speed — m/s; loudness level — decibel (dB).",
   "kk": "Дұрыс жұптар: толқын ұзындығы — метр (м); толқын жылдамдығы — м/с; дыбыс қаттылығының деңгейі — децибел (дБ)."
  }
 },
 {
  "id": "t9_l31_p30_ms",
  "type": "multi-select",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Звук, характеристики звука, резонанс, эхо».",
   "en": "Select all quantities studied in the topic «Sound, characteristics of sound, resonance, echo».",
   "kk": "«Дыбыс, дыбыстың сипаттары, резонанс, эхо» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "электроёмкость конденсатора",
    "частота звука",
    "скорость волны",
    "сила"
   ],
   "en": [
    "capacitance of a capacitor",
    "sound frequency",
    "wave speed",
    "force"
   ],
   "kk": [
    "конденсатор сыйымдылығы",
    "дыбыс жиілігі",
    "толқын жылдамдығы",
    "күш"
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
   "ru": "Верных вариантов несколько — отметь их все. частота звука, скорость волны.",
   "en": "More than one option is correct — select them all. sound frequency, wave speed.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. дыбыс жиілігі, толқын жылдамдығы."
  }
 },
 {
  "id": "t9_l31_p30_sa",
  "type": "short-answer",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «длина волны»? Запиши единицу.",
   "en": "Which SI unit is used to measure «wavelength»? Write the unit.",
   "kk": "«толқын ұзындығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "m"
   ],
   "kk": [
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «длина волны» — метр (м).",
   "en": "The SI unit of «wavelength» is metre (m).",
   "kk": "«толқын ұзындығы» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l31_p30_fb",
  "type": "fill-blank",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "Единица «децибел (дБ)» соответствует величине ___.",
   "en": "The unit decibel (dB) corresponds to the quantity ___.",
   "kk": "«децибел (дБ)» бірлігі ___ шамасына сәйкес келеді."
  },
  "correctAnswer": {
   "ru": [
    "уровень громкости"
   ],
   "en": [
    "loudness level"
   ],
   "kk": [
    "дыбыс қаттылығының деңгейі"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В децибел (дБ) измеряется уровень громкости.",
   "en": "The quantity measured in decibel (dB) is loudness level.",
   "kk": "децибел (дБ) бірлігімен дыбыс қаттылығының деңгейі өлшенеді."
  }
 },
 {
  "id": "t9_l31_p30_mt",
  "type": "matching",
  "topic": "p30",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Звук, характеристики звука, резонанс, эхо» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Sound, characteristics of sound, resonance, echo» with their SI units.",
   "kk": "«Дыбыс, дыбыстың сипаттары, резонанс, эхо» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "скорость волны",
     "длина волны",
     "уровень громкости"
    ],
    "en": [
     "wave speed",
     "wavelength",
     "loudness level"
    ],
    "kk": [
     "толқын жылдамдығы",
     "толқын ұзындығы",
     "дыбыс қаттылығының деңгейі"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "децибел (дБ)",
     "м/с"
    ],
    "en": [
     "metre (m)",
     "decibel (dB)",
     "m/s"
    ],
    "kk": [
     "метр (м)",
     "децибел (дБ)",
     "м/с"
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
   "ru": "Верные пары: скорость волны — м/с; длина волны — метр (м); уровень громкости — децибел (дБ).",
   "en": "Correct pairs: wave speed — m/s; wavelength — metre (m); loudness level — decibel (dB).",
   "kk": "Дұрыс жұптар: толқын жылдамдығы — м/с; толқын ұзындығы — метр (м); дыбыс қаттылығының деңгейі — децибел (дБ)."
  }
 },
 {
  "id": "t9_l32_p31_ms",
  "type": "multi-select",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Электромагнитные волны. Шкала электромагнитных волн».",
   "en": "Select all quantities studied in the topic «Electromagnetic waves. Electromagnetic wave scale».",
   "kk": "«Электромагниттік толқындар. Электромагниттік толқындардың шкаласы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "скорость света",
    "индуктивность катушки",
    "скорость волны",
    "вес тела"
   ],
   "en": [
    "speed of light",
    "inductance of a coil",
    "wave speed",
    "weight of a body"
   ],
   "kk": [
    "жарық жылдамдығы",
    "шарғы индуктивтілігі",
    "толқын жылдамдығы",
    "дене салмағы"
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
   "ru": "Верных вариантов несколько — отметь их все. скорость света, скорость волны.",
   "en": "More than one option is correct — select them all. speed of light, wave speed.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жарық жылдамдығы, толқын жылдамдығы."
  }
 },
 {
  "id": "t9_l32_p31_sa",
  "type": "short-answer",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «скорость света»? Запиши единицу.",
   "en": "Which SI unit is used to measure «speed of light»? Write the unit.",
   "kk": "«жарық жылдамдығы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с",
    "m/s"
   ],
   "en": [
    "m/s"
   ],
   "kk": [
    "м/с",
    "m/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «скорость света» — м/с.",
   "en": "The SI unit of «speed of light» is m/s.",
   "kk": "«жарық жылдамдығы» шамасының ХБЖ бірлігі — м/с."
  }
 },
 {
  "id": "t9_l32_p31_fb",
  "type": "fill-blank",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «частота звука»? Запиши единицу.",
   "en": "In which units is «sound frequency» measured? Write the unit.",
   "kk": "«дыбыс жиілігі» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "герц (Гц)",
    "герц",
    "Гц",
    "гц",
    "hz",
    "Hz"
   ],
   "en": [
    "hertz (Hz)",
    "hertz",
    "Hz",
    "hz"
   ],
   "kk": [
    "герц (Гц)",
    "герц",
    "Гц",
    "гц",
    "hz",
    "Hz"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота звука» — герц (Гц).",
   "en": "The SI unit of «sound frequency» is hertz (Hz).",
   "kk": "«дыбыс жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l32_p31_mt",
  "type": "matching",
  "topic": "p31",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Электромагнитные волны. Шкала электромагнитных волн» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Electromagnetic waves. Electromagnetic wave scale» with their SI units.",
   "kk": "«Электромагниттік толқындар. Электромагниттік толқындардың шкаласы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "скорость света",
     "длина волны",
     "частота звука"
    ],
    "en": [
     "speed of light",
     "wavelength",
     "sound frequency"
    ],
    "kk": [
     "жарық жылдамдығы",
     "толқын ұзындығы",
     "дыбыс жиілігі"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "герц (Гц)",
     "м/с"
    ],
    "en": [
     "metre (m)",
     "hertz (Hz)",
     "m/s"
    ],
    "kk": [
     "метр (м)",
     "герц (Гц)",
     "м/с"
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
   "ru": "Верные пары: скорость света — м/с; длина волны — метр (м); частота звука — герц (Гц).",
   "en": "Correct pairs: speed of light — m/s; wavelength — metre (m); sound frequency — hertz (Hz).",
   "kk": "Дұрыс жұптар: жарық жылдамдығы — м/с; толқын ұзындығы — метр (м); дыбыс жиілігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l33_p32_ms",
  "type": "multi-select",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Тепловое излучение».",
   "en": "Select all quantities studied in the topic «Thermal radiation».",
   "kk": "«Жылулық сәулелену» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "время",
    "скорость света",
    "работа выхода электрона",
    "кинетическая энергия"
   ],
   "en": [
    "time",
    "speed of light",
    "work function",
    "kinetic energy"
   ],
   "kk": [
    "уақыт",
    "жарық жылдамдығы",
    "электронның шығу жұмысы",
    "кинетикалық энергия"
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
   "ru": "Верных вариантов несколько — отметь их все. работа выхода электрона, скорость света.",
   "en": "More than one option is correct — select them all. work function, speed of light.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электронның шығу жұмысы, жарық жылдамдығы."
  }
 },
 {
  "id": "t9_l33_p32_sa",
  "type": "short-answer",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «период полураспада»? Запиши единицу.",
   "en": "Which SI unit is used to measure «half-life»? Write the unit.",
   "kk": "«жартылай ыдырау периоды» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период полураспада» — секунда (с).",
   "en": "The SI unit of «half-life» is second (s).",
   "kk": "«жартылай ыдырау периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l33_p32_fb",
  "type": "fill-blank",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "Какую величину измеряют в «электрон-вольт (эВ)»? Запиши название величины.",
   "en": "Which quantity is measured in electronvolt (eV)? Write its name.",
   "kk": "«электрон-вольт (эВ)» бірлігімен қандай шама өлшенеді? Шаманың атауын жаз."
  },
  "correctAnswer": {
   "ru": [
    "работа выхода электрона",
    "работа выхода"
   ],
   "en": [
    "work function"
   ],
   "kk": [
    "электронның шығу жұмысы"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В электрон-вольт (эВ) измеряется работа выхода электрона.",
   "en": "The quantity measured in electronvolt (eV) is work function.",
   "kk": "электрон-вольт (эВ) бірлігімен электронның шығу жұмысы өлшенеді."
  }
 },
 {
  "id": "t9_l33_p32_mt",
  "type": "matching",
  "topic": "p32",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Тепловое излучение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Thermal radiation» with their SI units.",
   "kk": "«Жылулық сәулелену» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "скорость света",
     "период полураспада",
     "энергия связи ядра"
    ],
    "en": [
     "speed of light",
     "half-life",
     "nuclear binding energy"
    ],
    "kk": [
     "жарық жылдамдығы",
     "жартылай ыдырау периоды",
     "ядроның байланыс энергиясы"
    ]
   },
   "right": {
    "ru": [
     "мегаэлектрон-вольт (МэВ)",
     "м/с",
     "секунда (с)"
    ],
    "en": [
     "megaelectronvolt (MeV)",
     "m/s",
     "second (s)"
    ],
    "kk": [
     "мегаэлектрон-вольт (МэВ)",
     "м/с",
     "секунд (с)"
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
   "ru": "Верные пары: скорость света — м/с; период полураспада — секунда (с); энергия связи ядра — мегаэлектрон-вольт (МэВ).",
   "en": "Correct pairs: speed of light — m/s; half-life — second (s); nuclear binding energy — megaelectronvolt (MeV).",
   "kk": "Дұрыс жұптар: жарық жылдамдығы — м/с; жартылай ыдырау периоды — секунд (с); ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ)."
  }
 },
 {
  "id": "t9_l34_p33_ms",
  "type": "multi-select",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Гипотеза Планка о световых квантах. Фотоэффект».",
   "en": "Select all quantities studied in the topic «Planck's hypothesis about light quanta. Photoelectric effect».",
   "kk": "«Планктің жарық кванттары туралы гипотезасы. Фотоэффект» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "путь",
    "эквивалентная доза",
    "механическая работа",
    "работа выхода электрона"
   ],
   "en": [
    "distance travelled",
    "equivalent dose",
    "mechanical work",
    "work function"
   ],
   "kk": [
    "жол",
    "эквивалентті доза",
    "механикалық жұмыс",
    "электронның шығу жұмысы"
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
   "ru": "Верных вариантов несколько — отметь их все. работа выхода электрона, эквивалентная доза.",
   "en": "More than one option is correct — select them all. work function, equivalent dose.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электронның шығу жұмысы, эквивалентті доза."
  }
 },
 {
  "id": "t9_l34_p33_sa",
  "type": "short-answer",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «эквивалентная доза»? Запиши единицу.",
   "en": "Which SI unit is used to measure «equivalent dose»? Write the unit.",
   "kk": "«эквивалентті доза» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "зиверт",
    "зв",
    "sv",
    "Sv"
   ],
   "en": [
    "sievert",
    "sv",
    "Sv"
   ],
   "kk": [
    "зиверт",
    "зв",
    "sv",
    "Sv"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «эквивалентная доза» — зиверт (Зв).",
   "en": "The SI unit of «equivalent dose» is sievert (Sv).",
   "kk": "«эквивалентті доза» шамасының ХБЖ бірлігі — зиверт (Зв)."
  }
 },
 {
  "id": "t9_l34_p33_fb",
  "type": "fill-blank",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «энергия фотона»? Запиши единицу.",
   "en": "In which units is «photon energy» measured? Write the unit.",
   "kk": "«фотон энергиясы» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ],
   "en": [
    "joule (J)",
    "joule",
    "J",
    "j"
   ],
   "kk": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «энергия фотона» — джоуль (Дж).",
   "en": "The SI unit of «photon energy» is joule (J).",
   "kk": "«фотон энергиясы» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l34_p33_mt",
  "type": "matching",
  "topic": "p33",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Гипотеза Планка о световых квантах. Фотоэффект» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Planck's hypothesis about light quanta. Photoelectric effect» with their SI units.",
   "kk": "«Планктің жарық кванттары туралы гипотезасы. Фотоэффект» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия фотона",
     "работа выхода электрона",
     "дефект масс"
    ],
    "en": [
     "photon energy",
     "work function",
     "mass defect"
    ],
    "kk": [
     "фотон энергиясы",
     "электронның шығу жұмысы",
     "масса ақауы"
    ]
   },
   "right": {
    "ru": [
     "электрон-вольт (эВ)",
     "джоуль (Дж)",
     "атомная единица массы (а.е.м.)"
    ],
    "en": [
     "electronvolt (eV)",
     "joule (J)",
     "atomic mass unit (u)"
    ],
    "kk": [
     "электрон-вольт (эВ)",
     "джоуль (Дж)",
     "атомдық масса бірлігі (а.е.м.)"
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
   "ru": "Верные пары: энергия фотона — джоуль (Дж); работа выхода электрона — электрон-вольт (эВ); дефект масс — атомная единица массы (а.е.м.).",
   "en": "Correct pairs: photon energy — joule (J); work function — electronvolt (eV); mass defect — atomic mass unit (u).",
   "kk": "Дұрыс жұптар: фотон энергиясы — джоуль (Дж); электронның шығу жұмысы — электрон-вольт (эВ); масса ақауы — атомдық масса бірлігі (а.е.м.)."
  }
 },
 {
  "id": "t9_l35_p34_ms",
  "type": "multi-select",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Рентгеновское излучение».",
   "en": "Select all quantities studied in the topic «X-ray radiation».",
   "kk": "«Рентген сәулеленуі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "потенциальная энергия",
    "энергия связи ядра",
    "частота звука",
    "дефект масс"
   ],
   "en": [
    "potential energy",
    "nuclear binding energy",
    "sound frequency",
    "mass defect"
   ],
   "kk": [
    "потенциалдық энергия",
    "ядроның байланыс энергиясы",
    "дыбыс жиілігі",
    "масса ақауы"
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
   "ru": "Верных вариантов несколько — отметь их все. энергия связи ядра, дефект масс.",
   "en": "More than one option is correct — select them all. nuclear binding energy, mass defect.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. ядроның байланыс энергиясы, масса ақауы."
  }
 },
 {
  "id": "t9_l35_p34_sa",
  "type": "short-answer",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «энергия фотона»? Запиши единицу.",
   "en": "Which SI unit is used to measure «photon energy»? Write the unit.",
   "kk": "«фотон энергиясы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «энергия фотона» — джоуль (Дж).",
   "en": "The SI unit of «photon energy» is joule (J).",
   "kk": "«фотон энергиясы» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l35_p34_fb",
  "type": "fill-blank",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «угловая скорость»? Запиши единицу.",
   "en": "In which units is «angular velocity» measured? Write the unit.",
   "kk": "«бұрыштық жылдамдық» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "рад/с",
    "rad/s"
   ],
   "en": [
    "rad/s",
    "radian per second"
   ],
   "kk": [
    "рад/с",
    "rad/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «угловая скорость» — рад/с.",
   "en": "The SI unit of «angular velocity» is rad/s.",
   "kk": "«бұрыштық жылдамдық» шамасының ХБЖ бірлігі — рад/с."
  }
 },
 {
  "id": "t9_l35_p34_mt",
  "type": "matching",
  "topic": "p34",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Рентгеновское излучение» и их единицы измерения в СИ.",
   "en": "Match the quantities from «X-ray radiation» with their SI units.",
   "kk": "«Рентген сәулеленуі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия фотона",
     "энергия связи ядра",
     "период полураспада"
    ],
    "en": [
     "photon energy",
     "nuclear binding energy",
     "half-life"
    ],
    "kk": [
     "фотон энергиясы",
     "ядроның байланыс энергиясы",
     "жартылай ыдырау периоды"
    ]
   },
   "right": {
    "ru": [
     "мегаэлектрон-вольт (МэВ)",
     "секунда (с)",
     "джоуль (Дж)"
    ],
    "en": [
     "megaelectronvolt (MeV)",
     "second (s)",
     "joule (J)"
    ],
    "kk": [
     "мегаэлектрон-вольт (МэВ)",
     "секунд (с)",
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
   "ru": "Верные пары: энергия фотона — джоуль (Дж); энергия связи ядра — мегаэлектрон-вольт (МэВ); период полураспада — секунда (с).",
   "en": "Correct pairs: photon energy — joule (J); nuclear binding energy — megaelectronvolt (MeV); half-life — second (s).",
   "kk": "Дұрыс жұптар: фотон энергиясы — джоуль (Дж); ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ); жартылай ыдырау периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l36_p35_ms",
  "type": "multi-select",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Радиоактивность. Природа радиоактивных излучений».",
   "en": "Select all quantities studied in the topic «Radioactivity. Nature of radioactive emissions».",
   "kk": "«Радиоактивтік. Радиоактивтік сәулеленудің табиғаты» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "частота обращения",
    "энергия фотона",
    "угловой размер светила",
    "дефект масс"
   ],
   "en": [
    "frequency of revolution",
    "photon energy",
    "angular size of a celestial body",
    "mass defect"
   ],
   "kk": [
    "айналу жиілігі",
    "фотон энергиясы",
    "жарық шырағының бұрыштық мөлшері",
    "масса ақауы"
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
   "ru": "Верных вариантов несколько — отметь их все. энергия фотона, дефект масс.",
   "en": "More than one option is correct — select them all. photon energy, mass defect.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. фотон энергиясы, масса ақауы."
  }
 },
 {
  "id": "t9_l36_p35_sa",
  "type": "short-answer",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «поглощённая доза излучения»? Запиши единицу.",
   "en": "Which SI unit is used to measure «absorbed radiation dose»? Write the unit.",
   "kk": "«сіңірілген сәулелену дозасы» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "грей",
    "гр",
    "gy",
    "Gy"
   ],
   "en": [
    "gray",
    "gy",
    "Gy"
   ],
   "kk": [
    "грей",
    "гр",
    "gy",
    "Gy"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «поглощённая доза излучения» — грей (Гр).",
   "en": "The SI unit of «absorbed radiation dose» is gray (Gy).",
   "kk": "«сіңірілген сәулелену дозасы» шамасының ХБЖ бірлігі — грей (Гр)."
  }
 },
 {
  "id": "t9_l36_p35_fb",
  "type": "fill-blank",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «частота обращения»: ___.",
   "en": "Name the SI unit of «frequency of revolution»: ___.",
   "kk": "«айналу жиілігі» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "герц (Гц)",
    "герц",
    "Гц",
    "гц",
    "hz",
    "Hz"
   ],
   "en": [
    "hertz (Hz)",
    "hertz",
    "Hz",
    "hz"
   ],
   "kk": [
    "герц (Гц)",
    "герц",
    "Гц",
    "гц",
    "hz",
    "Hz"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота обращения» — герц (Гц).",
   "en": "The SI unit of «frequency of revolution» is hertz (Hz).",
   "kk": "«айналу жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l36_p35_mt",
  "type": "matching",
  "topic": "p35",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Радиоактивность. Природа радиоактивных излучений» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Radioactivity. Nature of radioactive emissions» with their SI units.",
   "kk": "«Радиоактивтік. Радиоактивтік сәулеленудің табиғаты» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "активность радиоактивного образца",
     "период полураспада",
     "поглощённая доза излучения"
    ],
    "en": [
     "activity of a radioactive sample",
     "half-life",
     "absorbed radiation dose"
    ],
    "kk": [
     "радиоактивті үлгінің белсенділігі",
     "жартылай ыдырау периоды",
     "сіңірілген сәулелену дозасы"
    ]
   },
   "right": {
    "ru": [
     "грей (Гр)",
     "беккерель (Бк)",
     "секунда (с)"
    ],
    "en": [
     "gray (Gy)",
     "becquerel (Bq)",
     "second (s)"
    ],
    "kk": [
     "грей (Гр)",
     "беккерель (Бк)",
     "секунд (с)"
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
   "ru": "Верные пары: активность радиоактивного образца — беккерель (Бк); период полураспада — секунда (с); поглощённая доза излучения — грей (Гр).",
   "en": "Correct pairs: activity of a radioactive sample — becquerel (Bq); half-life — second (s); absorbed radiation dose — gray (Gy).",
   "kk": "Дұрыс жұптар: радиоактивті үлгінің белсенділігі — беккерель (Бк); жартылай ыдырау периоды — секунд (с); сіңірілген сәулелену дозасы — грей (Гр)."
  }
 },
 {
  "id": "t9_l37_p36_ms",
  "type": "multi-select",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Опыт Резерфорда, строение атома».",
   "en": "Select all quantities studied in the topic «Rutherford experiment, atomic structure».",
   "kk": "«Резерфорд тәжірибесі, атомның құрылысы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа выхода электрона",
    "период колебаний",
    "поглощённая доза излучения",
    "потенциальная энергия"
   ],
   "en": [
    "work function",
    "period of oscillation",
    "absorbed radiation dose",
    "potential energy"
   ],
   "kk": [
    "электронның шығу жұмысы",
    "тербеліс периоды",
    "сіңірілген сәулелену дозасы",
    "потенциалдық энергия"
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
   "ru": "Верных вариантов несколько — отметь их все. поглощённая доза излучения, работа выхода электрона.",
   "en": "More than one option is correct — select them all. absorbed radiation dose, work function.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. сіңірілген сәулелену дозасы, электронның шығу жұмысы."
  }
 },
 {
  "id": "t9_l37_p36_sa",
  "type": "short-answer",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «мощность»? Запиши единицу.",
   "en": "Which SI unit is used to measure «power»? Write the unit.",
   "kk": "«қуат» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «мощность» — ватт (Вт).",
   "en": "The SI unit of «power» is watt (W).",
   "kk": "«қуат» шамасының ХБЖ бірлігі — ватт (Вт)."
  }
 },
 {
  "id": "t9_l37_p36_fb",
  "type": "fill-blank",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «центростремительное ускорение» — ___.",
   "en": "The unit of «centripetal acceleration» is ___.",
   "kk": "«центрге тартқыш үдеу» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "м/с²",
    "м/с2",
    "m/s2",
    "m/s²"
   ],
   "en": [
    "m/s²",
    "m/s2"
   ],
   "kk": [
    "м/с²",
    "м/с2",
    "m/s²"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «центростремительное ускорение» — м/с².",
   "en": "The SI unit of «centripetal acceleration» is m/s².",
   "kk": "«центрге тартқыш үдеу» шамасының ХБЖ бірлігі — м/с²."
  }
 },
 {
  "id": "t9_l37_p36_mt",
  "type": "matching",
  "topic": "p36",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Опыт Резерфорда, строение атома» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Rutherford experiment, atomic structure» with their SI units.",
   "kk": "«Резерфорд тәжірибесі, атомның құрылысы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия фотона",
     "работа выхода электрона",
     "период полураспада"
    ],
    "en": [
     "photon energy",
     "work function",
     "half-life"
    ],
    "kk": [
     "фотон энергиясы",
     "электронның шығу жұмысы",
     "жартылай ыдырау периоды"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "джоуль (Дж)",
     "электрон-вольт (эВ)"
    ],
    "en": [
     "second (s)",
     "joule (J)",
     "electronvolt (eV)"
    ],
    "kk": [
     "секунд (с)",
     "джоуль (Дж)",
     "электрон-вольт (эВ)"
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
   "ru": "Верные пары: энергия фотона — джоуль (Дж); работа выхода электрона — электрон-вольт (эВ); период полураспада — секунда (с).",
   "en": "Correct pairs: photon energy — joule (J); work function — electronvolt (eV); half-life — second (s).",
   "kk": "Дұрыс жұптар: фотон энергиясы — джоуль (Дж); электронның шығу жұмысы — электрон-вольт (эВ); жартылай ыдырау периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l38_p37_ms",
  "type": "multi-select",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Ядерное взаимодействие. Дефект масс, энергия связи».",
   "en": "Select all quantities studied in the topic «Nuclear interaction. Mass defect, binding energy».",
   "kk": "«Ядролық өзара әрекеттесу. Масса ақауы, байланыс энергиясы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период полураспада",
    "поглощённая доза излучения",
    "высота подъёма тела",
    "вес тела"
   ],
   "en": [
    "half-life",
    "absorbed radiation dose",
    "height of a body above the ground",
    "weight of a body"
   ],
   "kk": [
    "жартылай ыдырау периоды",
    "сіңірілген сәулелену дозасы",
    "дененің көтерілу биіктігі",
    "дене салмағы"
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
   "ru": "Верных вариантов несколько — отметь их все. период полураспада, поглощённая доза излучения.",
   "en": "More than one option is correct — select them all. half-life, absorbed radiation dose.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жартылай ыдырау периоды, сіңірілген сәулелену дозасы."
  }
 },
 {
  "id": "t9_l38_p37_sa",
  "type": "short-answer",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «центростремительное ускорение»? Запиши единицу.",
   "en": "Which SI unit is used to measure «centripetal acceleration»? Write the unit.",
   "kk": "«центрге тартқыш үдеу» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с2",
    "м/с²",
    "m/s2",
    "m/s²"
   ],
   "en": [
    "m/s²",
    "m/s2"
   ],
   "kk": [
    "м/с2",
    "м/с²",
    "m/s²"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «центростремительное ускорение» — м/с².",
   "en": "The SI unit of «centripetal acceleration» is m/s².",
   "kk": "«центрге тартқыш үдеу» шамасының ХБЖ бірлігі — м/с²."
  }
 },
 {
  "id": "t9_l38_p37_fb",
  "type": "fill-blank",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «период обращения»? Запиши единицу.",
   "en": "In which units is «period of revolution» measured? Write the unit.",
   "kk": "«айналу периоды» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "секунда (с)",
    "секунда",
    "с",
    "s",
    "сек"
   ],
   "en": [
    "second (s)",
    "second",
    "s",
    "sec"
   ],
   "kk": [
    "секунд (с)",
    "секунд",
    "с",
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период обращения» — секунда (с).",
   "en": "The SI unit of «period of revolution» is second (s).",
   "kk": "«айналу периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l38_p37_mt",
  "type": "matching",
  "topic": "p37",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Ядерное взаимодействие. Дефект масс, энергия связи» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Nuclear interaction. Mass defect, binding energy» with their SI units.",
   "kk": "«Ядролық өзара әрекеттесу. Масса ақауы, байланыс энергиясы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия связи ядра",
     "дефект масс",
     "активность радиоактивного образца"
    ],
    "en": [
     "nuclear binding energy",
     "mass defect",
     "activity of a radioactive sample"
    ],
    "kk": [
     "ядроның байланыс энергиясы",
     "масса ақауы",
     "радиоактивті үлгінің белсенділігі"
    ]
   },
   "right": {
    "ru": [
     "атомная единица массы (а.е.м.)",
     "беккерель (Бк)",
     "мегаэлектрон-вольт (МэВ)"
    ],
    "en": [
     "atomic mass unit (u)",
     "becquerel (Bq)",
     "megaelectronvolt (MeV)"
    ],
    "kk": [
     "атомдық масса бірлігі (а.е.м.)",
     "беккерель (Бк)",
     "мегаэлектрон-вольт (МэВ)"
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
   "ru": "Верные пары: энергия связи ядра — мегаэлектрон-вольт (МэВ); дефект масс — атомная единица массы (а.е.м.); активность радиоактивного образца — беккерель (Бк).",
   "en": "Correct pairs: nuclear binding energy — megaelectronvolt (MeV); mass defect — atomic mass unit (u); activity of a radioactive sample — becquerel (Bq).",
   "kk": "Дұрыс жұптар: ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ); масса ақауы — атомдық масса бірлігі (а.е.м.); радиоактивті үлгінің белсенділігі — беккерель (Бк)."
  }
 },
 {
  "id": "t9_l39_p38_ms",
  "type": "multi-select",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Ядерные реакции, закон радиоактивного распада».",
   "en": "Select all quantities studied in the topic «Nuclear reactions, law of radioactive decay».",
   "kk": "«Ядролық реакциялар, радиоактивтік ыдырап кету заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "центростремительное ускорение",
    "период полураспада",
    "энергия связи ядра",
    "период обращения"
   ],
   "en": [
    "centripetal acceleration",
    "half-life",
    "nuclear binding energy",
    "period of revolution"
   ],
   "kk": [
    "центрге тартқыш үдеу",
    "жартылай ыдырау периоды",
    "ядроның байланыс энергиясы",
    "айналу периоды"
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
   "ru": "Верных вариантов несколько — отметь их все. период полураспада, энергия связи ядра.",
   "en": "More than one option is correct — select them all. half-life, nuclear binding energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жартылай ыдырау периоды, ядроның байланыс энергиясы."
  }
 },
 {
  "id": "t9_l39_p38_sa",
  "type": "short-answer",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «ускорение»? Запиши единицу.",
   "en": "Which SI unit is used to measure «acceleration»? Write the unit.",
   "kk": "«үдеу» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "м/с2",
    "м/с²",
    "m/s2",
    "m/s²"
   ],
   "en": [
    "m/s²",
    "m/s2",
    "metre per second squared"
   ],
   "kk": [
    "м/с2",
    "м/с²",
    "m/s²"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «ускорение» — м/с².",
   "en": "The SI unit of «acceleration» is m/s².",
   "kk": "«үдеу» шамасының ХБЖ бірлігі — м/с²."
  }
 },
 {
  "id": "t9_l39_p38_fb",
  "type": "fill-blank",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «скорость» — ___.",
   "en": "The unit of «velocity» is ___.",
   "kk": "«жылдамдық» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "м/с",
    "m/s",
    "метр в секунду"
   ],
   "en": [
    "m/s",
    "metre per second"
   ],
   "kk": [
    "м/с",
    "m/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «скорость» — м/с.",
   "en": "The SI unit of «velocity» is m/s.",
   "kk": "«жылдамдық» шамасының ХБЖ бірлігі — м/с."
  }
 },
 {
  "id": "t9_l39_p38_mt",
  "type": "matching",
  "topic": "p38",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Ядерные реакции, закон радиоактивного распада» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Nuclear reactions, law of radioactive decay» with their SI units.",
   "kk": "«Ядролық реакциялар, радиоактивтік ыдырап кету заңы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия связи ядра",
     "период полураспада",
     "активность радиоактивного образца"
    ],
    "en": [
     "nuclear binding energy",
     "half-life",
     "activity of a radioactive sample"
    ],
    "kk": [
     "ядроның байланыс энергиясы",
     "жартылай ыдырау периоды",
     "радиоактивті үлгінің белсенділігі"
    ]
   },
   "right": {
    "ru": [
     "мегаэлектрон-вольт (МэВ)",
     "беккерель (Бк)",
     "секунда (с)"
    ],
    "en": [
     "megaelectronvolt (MeV)",
     "becquerel (Bq)",
     "second (s)"
    ],
    "kk": [
     "мегаэлектрон-вольт (МэВ)",
     "беккерель (Бк)",
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
   "ru": "Верные пары: энергия связи ядра — мегаэлектрон-вольт (МэВ); период полураспада — секунда (с); активность радиоактивного образца — беккерель (Бк).",
   "en": "Correct pairs: nuclear binding energy — megaelectronvolt (MeV); half-life — second (s); activity of a radioactive sample — becquerel (Bq).",
   "kk": "Дұрыс жұптар: ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ); жартылай ыдырау периоды — секунд (с); радиоактивті үлгінің белсенділігі — беккерель (Бк)."
  }
 },
 {
  "id": "t9_l40_p39_ms",
  "type": "multi-select",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Деление тяжёлых ядер, цепная реакция. Ядерный реактор».",
   "en": "Select all quantities studied in the topic «Fission of heavy nuclei, chain reaction. Nuclear reactor».",
   "kk": "«Ауыр ядролардың бөлінуі, тізбекті реакция. Ядролық реактор» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "работа выхода электрона",
    "дефект масс",
    "высота подъёма тела",
    "масса"
   ],
   "en": [
    "work function",
    "mass defect",
    "height of a body above the ground",
    "mass"
   ],
   "kk": [
    "электронның шығу жұмысы",
    "масса ақауы",
    "дененің көтерілу биіктігі",
    "масса"
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
   "ru": "Верных вариантов несколько — отметь их все. дефект масс, работа выхода электрона.",
   "en": "More than one option is correct — select them all. mass defect, work function.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. масса ақауы, электронның шығу жұмысы."
  }
 },
 {
  "id": "t9_l40_p39_sa",
  "type": "short-answer",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «уровень громкости»? Запиши единицу.",
   "en": "Which SI unit is used to measure «loudness level»? Write the unit.",
   "kk": "«дыбыс қаттылығының деңгейі» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "децибел",
    "дб",
    "db",
    "dB"
   ],
   "en": [
    "decibel",
    "db",
    "dB"
   ],
   "kk": [
    "децибел",
    "дб",
    "db",
    "dB"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «уровень громкости» — децибел (дБ).",
   "en": "The SI unit of «loudness level» is decibel (dB).",
   "kk": "«дыбыс қаттылығының деңгейі» шамасының ХБЖ бірлігі — децибел (дБ)."
  }
 },
 {
  "id": "t9_l40_p39_fb",
  "type": "fill-blank",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «путь»? Запиши единицу.",
   "en": "In which units is «distance travelled» measured? Write the unit.",
   "kk": "«жол» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "метр (м)",
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre (m)",
    "metre",
    "m",
    "meter",
    "M"
   ],
   "kk": [
    "метр (м)",
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
   "ru": "Единица СИ для величины «путь» — метр (м).",
   "en": "The SI unit of «distance travelled» is metre (m).",
   "kk": "«жол» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l40_p39_mt",
  "type": "matching",
  "topic": "p39",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Деление тяжёлых ядер, цепная реакция. Ядерный реактор» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Fission of heavy nuclei, chain reaction. Nuclear reactor» with their SI units.",
   "kk": "«Ауыр ядролардың бөлінуі, тізбекті реакция. Ядролық реактор» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия связи ядра",
     "эквивалентная доза",
     "работа выхода электрона"
    ],
    "en": [
     "nuclear binding energy",
     "equivalent dose",
     "work function"
    ],
    "kk": [
     "ядроның байланыс энергиясы",
     "эквивалентті доза",
     "электронның шығу жұмысы"
    ]
   },
   "right": {
    "ru": [
     "зиверт (Зв)",
     "электрон-вольт (эВ)",
     "мегаэлектрон-вольт (МэВ)"
    ],
    "en": [
     "sievert (Sv)",
     "electronvolt (eV)",
     "megaelectronvolt (MeV)"
    ],
    "kk": [
     "зиверт (Зв)",
     "электрон-вольт (эВ)",
     "мегаэлектрон-вольт (МэВ)"
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
   "ru": "Верные пары: энергия связи ядра — мегаэлектрон-вольт (МэВ); эквивалентная доза — зиверт (Зв); работа выхода электрона — электрон-вольт (эВ).",
   "en": "Correct pairs: nuclear binding energy — megaelectronvolt (MeV); equivalent dose — sievert (Sv); work function — electronvolt (eV).",
   "kk": "Дұрыс жұптар: ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ); эквивалентті доза — зиверт (Зв); электронның шығу жұмысы — электрон-вольт (эВ)."
  }
 },
 {
  "id": "t9_l41_p40_ms",
  "type": "multi-select",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Термоядерные реакции. Радиоизотопы, защита от радиации».",
   "en": "Select all quantities studied in the topic «Thermonuclear reactions. Radioisotopes, radiation protection».",
   "kk": "«Термоядролық реакциялар. Радиоизотоптар, радиациядан қорғау» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "эквивалентная доза",
    "поглощённая доза излучения",
    "импульс тела",
    "угловая скорость"
   ],
   "en": [
    "equivalent dose",
    "absorbed radiation dose",
    "momentum of a body",
    "angular velocity"
   ],
   "kk": [
    "эквивалентті доза",
    "сіңірілген сәулелену дозасы",
    "дене импульсі",
    "бұрыштық жылдамдық"
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
   "ru": "Верных вариантов несколько — отметь их все. поглощённая доза излучения, эквивалентная доза.",
   "en": "More than one option is correct — select them all. absorbed radiation dose, equivalent dose.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. сіңірілген сәулелену дозасы, эквивалентті доза."
  }
 },
 {
  "id": "t9_l41_p40_sa",
  "type": "short-answer",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах СИ измеряется величина «потенциальная энергия»? Запиши единицу.",
   "en": "Which SI unit is used to measure «potential energy»? Write the unit.",
   "kk": "«потенциалдық энергия» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
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
   "ru": "Единица СИ для величины «потенциальная энергия» — джоуль (Дж).",
   "en": "The SI unit of «potential energy» is joule (J).",
   "kk": "«потенциалдық энергия» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l41_p40_fb",
  "type": "fill-blank",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «период колебаний»: ___.",
   "en": "Name the SI unit of «period of oscillation»: ___.",
   "kk": "«тербеліс периоды» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "секунда (с)",
    "секунда",
    "с",
    "s",
    "сек"
   ],
   "en": [
    "second (s)",
    "second",
    "s",
    "sec"
   ],
   "kk": [
    "секунд (с)",
    "секунд",
    "с",
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период колебаний» — секунда (с).",
   "en": "The SI unit of «period of oscillation» is second (s).",
   "kk": "«тербеліс периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l41_p40_mt",
  "type": "matching",
  "topic": "p40",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Термоядерные реакции. Радиоизотопы, защита от радиации» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Thermonuclear reactions. Radioisotopes, radiation protection» with their SI units.",
   "kk": "«Термоядролық реакциялар. Радиоизотоптар, радиациядан қорғау» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "поглощённая доза излучения",
     "эквивалентная доза",
     "энергия связи ядра"
    ],
    "en": [
     "absorbed radiation dose",
     "equivalent dose",
     "nuclear binding energy"
    ],
    "kk": [
     "сіңірілген сәулелену дозасы",
     "эквивалентті доза",
     "ядроның байланыс энергиясы"
    ]
   },
   "right": {
    "ru": [
     "грей (Гр)",
     "зиверт (Зв)",
     "мегаэлектрон-вольт (МэВ)"
    ],
    "en": [
     "gray (Gy)",
     "sievert (Sv)",
     "megaelectronvolt (MeV)"
    ],
    "kk": [
     "грей (Гр)",
     "зиверт (Зв)",
     "мегаэлектрон-вольт (МэВ)"
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
   "ru": "Верные пары: поглощённая доза излучения — грей (Гр); эквивалентная доза — зиверт (Зв); энергия связи ядра — мегаэлектрон-вольт (МэВ).",
   "en": "Correct pairs: absorbed radiation dose — gray (Gy); equivalent dose — sievert (Sv); nuclear binding energy — megaelectronvolt (MeV).",
   "kk": "Дұрыс жұптар: сіңірілген сәулелену дозасы — грей (Гр); эквивалентті доза — зиверт (Зв); ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ)."
  }
 },
 {
  "id": "t9_l42_p41_ms",
  "type": "multi-select",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Элементарные частицы».",
   "en": "Select all quantities studied in the topic «Elementary particles».",
   "kk": "«Элементарлық бөлшектер» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "высота подъёма тела",
    "время",
    "энергия фотона",
    "работа выхода электрона"
   ],
   "en": [
    "height of a body above the ground",
    "time",
    "photon energy",
    "work function"
   ],
   "kk": [
    "дененің көтерілу биіктігі",
    "уақыт",
    "фотон энергиясы",
    "электронның шығу жұмысы"
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
   "ru": "Верных вариантов несколько — отметь их все. работа выхода электрона, энергия фотона.",
   "en": "More than one option is correct — select them all. work function, photon energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. электронның шығу жұмысы, фотон энергиясы."
  }
 },
 {
  "id": "t9_l42_p41_sa",
  "type": "short-answer",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «расстояние до небесного тела» в СИ.",
   "en": "Name the SI unit of «distance to a celestial body».",
   "kk": "«аспан денесіне дейінгі қашықтық» шамасының ХБЖ-дағы өлшем бірлігін ата."
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
    "m"
   ],
   "kk": [
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «расстояние до небесного тела» — метр (м).",
   "en": "The SI unit of «distance to a celestial body» is metre (m).",
   "kk": "«аспан денесіне дейінгі қашықтық» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l42_p41_fb",
  "type": "fill-blank",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Единица измерения величины «потенциальная энергия» — ___.",
   "en": "The unit of «potential energy» is ___.",
   "kk": "«потенциалдық энергия» шамасының өлшем бірлігі — ___."
  },
  "correctAnswer": {
   "ru": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ],
   "en": [
    "joule (J)",
    "joule",
    "J",
    "j"
   ],
   "kk": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «потенциальная энергия» — джоуль (Дж).",
   "en": "The SI unit of «potential energy» is joule (J).",
   "kk": "«потенциалдық энергия» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l42_p41_mt",
  "type": "matching",
  "topic": "p41",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Элементарные частицы» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Elementary particles» with their SI units.",
   "kk": "«Элементарлық бөлшектер» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "дефект масс",
     "энергия фотона",
     "период полураспада"
    ],
    "en": [
     "mass defect",
     "photon energy",
     "half-life"
    ],
    "kk": [
     "масса ақауы",
     "фотон энергиясы",
     "жартылай ыдырау периоды"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "атомная единица массы (а.е.м.)",
     "джоуль (Дж)"
    ],
    "en": [
     "second (s)",
     "atomic mass unit (u)",
     "joule (J)"
    ],
    "kk": [
     "секунд (с)",
     "атомдық масса бірлігі (а.е.м.)",
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
   "ru": "Верные пары: дефект масс — атомная единица массы (а.е.м.); энергия фотона — джоуль (Дж); период полураспада — секунда (с).",
   "en": "Correct pairs: mass defect — atomic mass unit (u); photon energy — joule (J); half-life — second (s).",
   "kk": "Дұрыс жұптар: масса ақауы — атомдық масса бірлігі (а.е.м.); фотон энергиясы — джоуль (Дж); жартылай ыдырау периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l43_p42_ms",
  "type": "multi-select",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Мировоззренческое значение физики и астрономии».",
   "en": "Select all quantities studied in the topic «Worldview significance of physics and astronomy».",
   "kk": "«Физика мен астрономияның дүниетанымдық мәні» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "дефект масс",
    "потенциальная энергия",
    "кинетическая энергия",
    "энергия фотона"
   ],
   "en": [
    "mass defect",
    "potential energy",
    "kinetic energy",
    "photon energy"
   ],
   "kk": [
    "масса ақауы",
    "потенциалдық энергия",
    "кинетикалық энергия",
    "фотон энергиясы"
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
   "ru": "Верных вариантов несколько — отметь их все. энергия фотона, дефект масс.",
   "en": "More than one option is correct — select them all. photon energy, mass defect.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. фотон энергиясы, масса ақауы."
  }
 },
 {
  "id": "t9_l43_p42_sa",
  "type": "short-answer",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «частота колебаний» в СИ.",
   "en": "Name the SI unit of «frequency of oscillation».",
   "kk": "«тербеліс жиілігі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ],
   "en": [
    "hertz",
    "hz",
    "Hz"
   ],
   "kk": [
    "герц",
    "гц",
    "hz",
    "Hz",
    "Гц"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «частота колебаний» — герц (Гц).",
   "en": "The SI unit of «frequency of oscillation» is hertz (Hz).",
   "kk": "«тербеліс жиілігі» шамасының ХБЖ бірлігі — герц (Гц)."
  }
 },
 {
  "id": "t9_l43_p42_fb",
  "type": "fill-blank",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «кинетическая энергия»: ___.",
   "en": "Name the SI unit of «kinetic energy»: ___.",
   "kk": "«кинетикалық энергия» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ],
   "en": [
    "joule (J)",
    "joule",
    "J",
    "j"
   ],
   "kk": [
    "джоуль (Дж)",
    "джоуль",
    "Дж",
    "дж",
    "j",
    "J"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «кинетическая энергия» — джоуль (Дж).",
   "en": "The SI unit of «kinetic energy» is joule (J).",
   "kk": "«кинетикалық энергия» шамасының ХБЖ бірлігі — джоуль (Дж)."
  }
 },
 {
  "id": "t9_l43_p42_num",
  "type": "numeric",
  "topic": "p42",
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
  "id": "t9_l43_p42_mt",
  "type": "matching",
  "topic": "p42",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Мировоззренческое значение физики и астрономии» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Worldview significance of physics and astronomy» with their SI units.",
   "kk": "«Физика мен астрономияның дүниетанымдық мәні» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "скорость света",
     "работа выхода электрона",
     "период полураспада"
    ],
    "en": [
     "speed of light",
     "work function",
     "half-life"
    ],
    "kk": [
     "жарық жылдамдығы",
     "электронның шығу жұмысы",
     "жартылай ыдырау периоды"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "м/с",
     "электрон-вольт (эВ)"
    ],
    "en": [
     "second (s)",
     "m/s",
     "electronvolt (eV)"
    ],
    "kk": [
     "секунд (с)",
     "м/с",
     "электрон-вольт (эВ)"
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
   "ru": "Верные пары: скорость света — м/с; работа выхода электрона — электрон-вольт (эВ); период полураспада — секунда (с).",
   "en": "Correct pairs: speed of light — m/s; work function — electronvolt (eV); half-life — second (s).",
   "kk": "Дұрыс жұптар: жарық жылдамдығы — м/с; электронның шығу жұмысы — электрон-вольт (эВ); жартылай ыдырау периоды — секунд (с)."
  }
 },
 {
  "id": "t9_l44_p43_ms",
  "type": "multi-select",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Экологическая культура».",
   "en": "Select all quantities studied in the topic «Environmental culture».",
   "kk": "«Экологиялық мәдениет» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "расстояние до небесного тела",
    "путь",
    "поглощённая доза излучения",
    "энергия связи ядра"
   ],
   "en": [
    "distance to a celestial body",
    "distance travelled",
    "absorbed radiation dose",
    "nuclear binding energy"
   ],
   "kk": [
    "аспан денесіне дейінгі қашықтық",
    "жол",
    "сіңірілген сәулелену дозасы",
    "ядроның байланыс энергиясы"
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
   "ru": "Верных вариантов несколько — отметь их все. поглощённая доза излучения, энергия связи ядра.",
   "en": "More than one option is correct — select them all. absorbed radiation dose, nuclear binding energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. сіңірілген сәулелену дозасы, ядроның байланыс энергиясы."
  }
 },
 {
  "id": "t9_l44_p43_sa",
  "type": "short-answer",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «эквивалентная доза» в СИ.",
   "en": "Name the SI unit of «equivalent dose».",
   "kk": "«эквивалентті доза» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "зиверт",
    "зв",
    "sv",
    "Sv"
   ],
   "en": [
    "sievert",
    "sv",
    "Sv"
   ],
   "kk": [
    "зиверт",
    "зв",
    "sv",
    "Sv"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «эквивалентная доза» — зиверт (Зв).",
   "en": "The SI unit of «equivalent dose» is sievert (Sv).",
   "kk": "«эквивалентті доза» шамасының ХБЖ бірлігі — зиверт (Зв)."
  }
 },
 {
  "id": "t9_l44_p43_fb",
  "type": "fill-blank",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу СИ для величины «скорость волны»: ___.",
   "en": "Name the SI unit of «wave speed»: ___.",
   "kk": "«толқын жылдамдығы» шамасының ХБЖ бірлігін ата: ___."
  },
  "correctAnswer": {
   "ru": [
    "м/с",
    "m/s"
   ],
   "en": [
    "m/s"
   ],
   "kk": [
    "м/с",
    "m/s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «скорость волны» — м/с.",
   "en": "The SI unit of «wave speed» is m/s.",
   "kk": "«толқын жылдамдығы» шамасының ХБЖ бірлігі — м/с."
  }
 },
 {
  "id": "t9_l44_p43_mt",
  "type": "matching",
  "topic": "p43",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Экологическая культура» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Environmental culture» with their SI units.",
   "kk": "«Экологиялық мәдениет» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "энергия связи ядра",
     "энергия фотона",
     "активность радиоактивного образца"
    ],
    "en": [
     "nuclear binding energy",
     "photon energy",
     "activity of a radioactive sample"
    ],
    "kk": [
     "ядроның байланыс энергиясы",
     "фотон энергиясы",
     "радиоактивті үлгінің белсенділігі"
    ]
   },
   "right": {
    "ru": [
     "мегаэлектрон-вольт (МэВ)",
     "джоуль (Дж)",
     "беккерель (Бк)"
    ],
    "en": [
     "megaelectronvolt (MeV)",
     "joule (J)",
     "becquerel (Bq)"
    ],
    "kk": [
     "мегаэлектрон-вольт (МэВ)",
     "джоуль (Дж)",
     "беккерель (Бк)"
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
   "ru": "Верные пары: энергия связи ядра — мегаэлектрон-вольт (МэВ); энергия фотона — джоуль (Дж); активность радиоактивного образца — беккерель (Бк).",
   "en": "Correct pairs: nuclear binding energy — megaelectronvolt (MeV); photon energy — joule (J); activity of a radioactive sample — becquerel (Bq).",
   "kk": "Дұрыс жұптар: ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ); фотон энергиясы — джоуль (Дж); радиоактивті үлгінің белсенділігі — беккерель (Бк)."
  }
 },
 {
  "id": "t9_l45_lab1_ms",
  "type": "multi-select",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №1: Ускорение при равноускоренном движении». Отметь все величины, которые относятся к разделу «механическое движение».",
   "en": "Topic «Lab #1: Acceleration in uniformly accelerated motion». Select all quantities that belong to the section «mechanics of motion».",
   "kk": "«Зерт. №1: Бірқалыпты үдемелі қозғалыстың үдеуі» тақырыбы. «механикалық қозғалыс» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "скорость",
    "центростремительное ускорение",
    "сила",
    "эквивалентная доза"
   ],
   "en": [
    "velocity",
    "centripetal acceleration",
    "force",
    "equivalent dose"
   ],
   "kk": [
    "жылдамдық",
    "центрге тартқыш үдеу",
    "күш",
    "эквивалентті доза"
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
   "ru": "Верных вариантов несколько — отметь их все. скорость, центростремительное ускорение.",
   "en": "More than one option is correct — select them all. velocity, centripetal acceleration.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. жылдамдық, центрге тартқыш үдеу."
  }
 },
 {
  "id": "t9_l45_lab1_sa",
  "type": "short-answer",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «активность радиоактивного образца» в СИ.",
   "en": "Name the SI unit of «activity of a radioactive sample».",
   "kk": "«радиоактивті үлгінің белсенділігі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "беккерель",
    "бк",
    "bq",
    "Bq"
   ],
   "en": [
    "becquerel",
    "bq",
    "Bq"
   ],
   "kk": [
    "беккерель",
    "бк",
    "bq",
    "Bq"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «активность радиоактивного образца» — беккерель (Бк).",
   "en": "The SI unit of «activity of a radioactive sample» is becquerel (Bq).",
   "kk": "«радиоактивті үлгінің белсенділігі» шамасының ХБЖ бірлігі — беккерель (Бк)."
  }
 },
 {
  "id": "t9_l45_lab1_fb",
  "type": "fill-blank",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «высота подъёма тела»? Запиши единицу.",
   "en": "In which units is «height of a body above the ground» measured? Write the unit.",
   "kk": "«дененің көтерілу биіктігі» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "метр (м)",
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre (m)",
    "metre",
    "m",
    "meter"
   ],
   "kk": [
    "метр (м)",
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «высота подъёма тела» — метр (м).",
   "en": "The SI unit of «height of a body above the ground» is metre (m).",
   "kk": "«дененің көтерілу биіктігі» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l45_lab1_mt",
  "type": "matching",
  "topic": "lab1",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №1: Ускорение при равноускоренном движении» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab #1: Acceleration in uniformly accelerated motion» with their SI units.",
   "kk": "«Зерт. №1: Бірқалыпты үдемелі қозғалыстың үдеуі» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "путь",
     "центростремительное ускорение",
     "время"
    ],
    "en": [
     "distance travelled",
     "centripetal acceleration",
     "time"
    ],
    "kk": [
     "жол",
     "центрге тартқыш үдеу",
     "уақыт"
    ]
   },
   "right": {
    "ru": [
     "метр (м)",
     "м/с²",
     "секунда (с)"
    ],
    "en": [
     "metre (m)",
     "m/s²",
     "second (s)"
    ],
    "kk": [
     "метр (м)",
     "м/с²",
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
   "ru": "Верные пары: путь — метр (м); центростремительное ускорение — м/с²; время — секунда (с).",
   "en": "Correct pairs: distance travelled — metre (m); centripetal acceleration — m/s²; time — second (s).",
   "kk": "Дұрыс жұптар: жол — метр (м); центрге тартқыш үдеу — м/с²; уақыт — секунд (с)."
  }
 },
 {
  "id": "t9_l46_lab2_ms",
  "type": "multi-select",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №2: Движение тела, брошенного горизонтально». Отметь все величины, которые относятся к разделу «механическое движение».",
   "en": "Topic «Lab #2: Motion of a body thrown horizontally». Select all quantities that belong to the section «mechanics of motion».",
   "kk": "«Зерт. №2: Көлденең лақтырылған дененің қозғалысы» тақырыбы. «механикалық қозғалыс» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период колебаний",
    "работа выхода электрона",
    "перемещение",
    "ускорение"
   ],
   "en": [
    "period of oscillation",
    "work function",
    "displacement",
    "acceleration"
   ],
   "kk": [
    "тербеліс периоды",
    "электронның шығу жұмысы",
    "орын ауыстыру",
    "үдеу"
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
   "ru": "Верных вариантов несколько — отметь их все. ускорение, перемещение.",
   "en": "More than one option is correct — select them all. acceleration, displacement.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. үдеу, орын ауыстыру."
  }
 },
 {
  "id": "t9_l46_lab2_sa",
  "type": "short-answer",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «период полураспада» в СИ.",
   "en": "Name the SI unit of «half-life».",
   "kk": "«жартылай ыдырау периоды» шамасының ХБЖ-дағы өлшем бірлігін ата."
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
    "s"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период полураспада» — секунда (с).",
   "en": "The SI unit of «half-life» is second (s).",
   "kk": "«жартылай ыдырау периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l46_lab2_fb",
  "type": "fill-blank",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «длина волны»? Запиши единицу.",
   "en": "In which units is «wavelength» measured? Write the unit.",
   "kk": "«толқын ұзындығы» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "метр (м)",
    "метр",
    "м",
    "m",
    "M"
   ],
   "en": [
    "metre (m)",
    "metre",
    "m",
    "meter"
   ],
   "kk": [
    "метр (м)",
    "метр",
    "м",
    "m"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «длина волны» — метр (м).",
   "en": "The SI unit of «wavelength» is metre (m).",
   "kk": "«толқын ұзындығы» шамасының ХБЖ бірлігі — метр (м)."
  }
 },
 {
  "id": "t9_l46_lab2_mt",
  "type": "matching",
  "topic": "lab2",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №2: Движение тела, брошенного горизонтально» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab #2: Motion of a body thrown horizontally» with their SI units.",
   "kk": "«Зерт. №2: Көлденең лақтырылған дененің қозғалысы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "ускорение",
     "путь",
     "время"
    ],
    "en": [
     "acceleration",
     "distance travelled",
     "time"
    ],
    "kk": [
     "үдеу",
     "жол",
     "уақыт"
    ]
   },
   "right": {
    "ru": [
     "секунда (с)",
     "м/с²",
     "метр (м)"
    ],
    "en": [
     "second (s)",
     "m/s²",
     "metre (m)"
    ],
    "kk": [
     "секунд (с)",
     "м/с²",
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
   "ru": "Верные пары: ускорение — м/с²; путь — метр (м); время — секунда (с).",
   "en": "Correct pairs: acceleration — m/s²; distance travelled — metre (m); time — second (s).",
   "kk": "Дұрыс жұптар: үдеу — м/с²; жол — метр (м); уақыт — секунд (с)."
  }
 },
 {
  "id": "t9_l47_lab3_ms",
  "type": "multi-select",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №3: Ускорение свободного падения (маятник)». Отметь все величины, которые относятся к разделу «динамика».",
   "en": "Topic «Lab #3: Acceleration due to gravity (pendulum)». Select all quantities that belong to the section «dynamics».",
   "kk": "«Зерт. №3: Еркін түсу үдеуі (маятник)» тақырыбы. «динамика» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "длина волны",
    "сила",
    "период обращения планеты",
    "масса"
   ],
   "en": [
    "wavelength",
    "force",
    "orbital period of a planet",
    "mass"
   ],
   "kk": [
    "толқын ұзындығы",
    "күш",
    "планетаның айналу периоды",
    "масса"
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
   "ru": "Верных вариантов несколько — отметь их все. сила, масса.",
   "en": "More than one option is correct — select them all. force, mass.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. күш, масса."
  }
 },
 {
  "id": "t9_l47_lab3_sa",
  "type": "short-answer",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «период обращения планеты» в СИ.",
   "en": "Name the SI unit of «orbital period of a planet».",
   "kk": "«планетаның айналу периоды» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "секунда",
    "с",
    "s",
    "сек",
    "сутки",
    "год"
   ],
   "en": [
    "second",
    "s",
    "sec",
    "day",
    "year"
   ],
   "kk": [
    "секунд",
    "с",
    "s",
    "тәулік",
    "жыл"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «период обращения планеты» — секунда (с).",
   "en": "The SI unit of «orbital period of a planet» is second (s).",
   "kk": "«планетаның айналу периоды» шамасының ХБЖ бірлігі — секунд (с)."
  }
 },
 {
  "id": "t9_l47_lab3_fb",
  "type": "fill-blank",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "В каких единицах измеряется величина «масса»? Запиши единицу.",
   "en": "In which units is «mass» measured? Write the unit.",
   "kk": "«масса» шамасы қандай бірліктермен өлшенеді? Бірлікті жаз."
  },
  "correctAnswer": {
   "ru": [
    "килограмм (кг)",
    "килограмм",
    "кг",
    "kg"
   ],
   "en": [
    "kilogram (kg)",
    "kilogram",
    "kg"
   ],
   "kk": [
    "килограмм (кг)",
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
  "id": "t9_l47_lab3_mt",
  "type": "matching",
  "topic": "lab3",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №3: Ускорение свободного падения (маятник)» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab #3: Acceleration due to gravity (pendulum)» with their SI units.",
   "kk": "«Зерт. №3: Еркін түсу үдеуі (маятник)» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "масса",
     "импульс тела",
     "ускорение свободного падения"
    ],
    "en": [
     "mass",
     "momentum of a body",
     "acceleration due to gravity"
    ],
    "kk": [
     "масса",
     "дене импульсі",
     "еркін түсу үдеуі"
    ]
   },
   "right": {
    "ru": [
     "кг·м/с",
     "м/с²",
     "килограмм (кг)"
    ],
    "en": [
     "kg·m/s",
     "m/s²",
     "kilogram (kg)"
    ],
    "kk": [
     "кг·м/с",
     "м/с²",
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
   "ru": "Верные пары: масса — килограмм (кг); импульс тела — кг·м/с; ускорение свободного падения — м/с².",
   "en": "Correct pairs: mass — kilogram (kg); momentum of a body — kg·m/s; acceleration due to gravity — m/s².",
   "kk": "Дұрыс жұптар: масса — килограмм (кг); дене импульсі — кг·м/с; еркін түсу үдеуі — м/с²."
  }
 },
 {
  "id": "t9_l48_lab4_ms",
  "type": "multi-select",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "Тема «Лаб. №4: Скорость поверхностной волны». Отметь все величины, которые относятся к разделу «квантовая и ядерная физика».",
   "en": "Topic «Lab #4: Speed of a surface wave». Select all quantities that belong to the section «quantum and nuclear physics».",
   "kk": "«Зерт. №4: Беттік толқынның жылдамдығы» тақырыбы. «кванттық және ядролық физика» бөліміне жататын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "перемещение",
    "вес тела",
    "эквивалентная доза",
    "энергия фотона"
   ],
   "en": [
    "displacement",
    "weight of a body",
    "equivalent dose",
    "photon energy"
   ],
   "kk": [
    "орын ауыстыру",
    "дене салмағы",
    "эквивалентті доза",
    "фотон энергиясы"
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
   "ru": "Верных вариантов несколько — отметь их все. эквивалентная доза, энергия фотона.",
   "en": "More than one option is correct — select them all. equivalent dose, photon energy.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. эквивалентті доза, фотон энергиясы."
  }
 },
 {
  "id": "t9_l48_lab4_sa",
  "type": "short-answer",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "Назови единицу измерения величины «индуктивность катушки» в СИ.",
   "en": "Name the SI unit of «inductance of a coil».",
   "kk": "«шарғы индуктивтілігі» шамасының ХБЖ-дағы өлшем бірлігін ата."
  },
  "correctAnswer": {
   "ru": [
    "генри",
    "гн",
    "h",
    "H",
    "Гн"
   ],
   "en": [
    "henry",
    "h",
    "H"
   ],
   "kk": [
    "генри",
    "гн",
    "h",
    "H",
    "Гн"
   ]
  },
  "hint": {
   "ru": "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
   "en": "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
   "kk": "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
  },
  "explanation": {
   "ru": "Единица СИ для величины «индуктивность катушки» — генри (Гн).",
   "en": "The SI unit of «inductance of a coil» is henry (H).",
   "kk": "«шарғы индуктивтілігі» шамасының ХБЖ бірлігі — генри (Гн)."
  }
 },
 {
  "id": "t9_l48_lab4_fb",
  "type": "fill-blank",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "В единицах «грей (Гр)» измеряется величина ___.",
   "en": "The quantity measured in gray (Gy) is ___.",
   "kk": "«грей (Гр)» бірлігімен өлшенетін шама — ___."
  },
  "correctAnswer": {
   "ru": [
    "поглощённая доза излучения",
    "поглощённая доза"
   ],
   "en": [
    "absorbed radiation dose"
   ],
   "kk": [
    "сіңірілген сәулелену дозасы"
   ]
  },
  "hint": {
   "ru": "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
   "en": "The unit's name hints at the quantity it measures. It belongs to this topic.",
   "kk": "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
  },
  "explanation": {
   "ru": "В грей (Гр) измеряется поглощённая доза излучения.",
   "en": "The quantity measured in gray (Gy) is absorbed radiation dose.",
   "kk": "грей (Гр) бірлігімен сіңірілген сәулелену дозасы өлшенеді."
  }
 },
 {
  "id": "t9_l48_lab4_mt",
  "type": "matching",
  "topic": "lab4",
  "difficulty": 2,
  "question": {
   "ru": "Сопоставь величины из темы «Лаб. №4: Скорость поверхностной волны» и их единицы измерения в СИ.",
   "en": "Match the quantities from «Lab #4: Speed of a surface wave» with their SI units.",
   "kk": "«Зерт. №4: Беттік толқынның жылдамдығы» тақырыбындағы шамаларды олардың ХБЖ бірліктерімен сәйкестендір."
  },
  "pairs": {
   "left": {
    "ru": [
     "дефект масс",
     "энергия фотона",
     "энергия связи ядра"
    ],
    "en": [
     "mass defect",
     "photon energy",
     "nuclear binding energy"
    ],
    "kk": [
     "масса ақауы",
     "фотон энергиясы",
     "ядроның байланыс энергиясы"
    ]
   },
   "right": {
    "ru": [
     "джоуль (Дж)",
     "мегаэлектрон-вольт (МэВ)",
     "атомная единица массы (а.е.м.)"
    ],
    "en": [
     "joule (J)",
     "megaelectronvolt (MeV)",
     "atomic mass unit (u)"
    ],
    "kk": [
     "джоуль (Дж)",
     "мегаэлектрон-вольт (МэВ)",
     "атомдық масса бірлігі (а.е.м.)"
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
   "ru": "Верные пары: дефект масс — атомная единица массы (а.е.м.); энергия фотона — джоуль (Дж); энергия связи ядра — мегаэлектрон-вольт (МэВ).",
   "en": "Correct pairs: mass defect — atomic mass unit (u); photon energy — joule (J); nuclear binding energy — megaelectronvolt (MeV).",
   "kk": "Дұрыс жұптар: масса ақауы — атомдық масса бірлігі (а.е.м.); фотон энергиясы — джоуль (Дж); ядроның байланыс энергиясы — мегаэлектрон-вольт (МэВ)."
  }
 }
];
window.TASKS_DATABASE_TYPES = TASKS_DATABASE_TYPES;
