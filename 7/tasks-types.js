/* ===== Задания новых типов, 7 класс =====
   Сгенерировано tools/gen-task-types.js — правки вносить в генератор.
   Типы: multi-select (отметь все), short-answer (короткий ответ),
   matching (сопоставление величины и единицы СИ).
   Всего заданий: 21 (по 3 на каждый уровень). */
const TASKS_DATABASE_TYPES = [
 {
  "id": "t7_l1_safety_num",
  "type": "numeric",
  "topic": "safety",
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
  "id": "t7_l2_general_num",
  "type": "numeric",
  "topic": "general",
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
  "id": "t7_l3_general_num",
  "type": "numeric",
  "topic": "general",
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
  "id": "t7_l22_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Молекулярное строение тел».",
   "en": "Select all quantities studied in the topic «Molecular structure».",
   "kk": "«Денелердің молекулалық құрылысы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "температура",
    "давление",
    "площадь",
    "сила"
   ],
   "en": [
    "temperature",
    "pressure",
    "area",
    "force"
   ],
   "kk": [
    "температура",
    "қысым",
    "аудан",
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l23_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Давление твёрдых тел».",
   "en": "Select all quantities studied in the topic «Pressure of solids».",
   "kk": "«Қатты денелердің қысымы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "давление",
    "масса",
    "энергия",
    "площадь"
   ],
   "en": [
    "pressure",
    "mass",
    "energy",
    "area"
   ],
   "kk": [
    "қысым",
    "масса",
    "энергия",
    "аудан"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l24_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Давление в жидкостях и газах. Закон Паскаля».",
   "en": "Select all quantities studied in the topic «Pressure in liquids and gases. Pascal's law».",
   "kk": "«Сұйықтар мен газдардағы қысым. Паскаль заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "объём",
    "период обращения планеты",
    "площадь",
    "давление"
   ],
   "en": [
    "volume",
    "orbital period of a planet",
    "area",
    "pressure"
   ],
   "kk": [
    "көлем",
    "планетаның айналу периоды",
    "аудан",
    "қысым"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l25_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Сообщающиеся сосуды».",
   "en": "Select all quantities studied in the topic «Communicating vessels».",
   "kk": "«Қатынас ыдыстар» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период обращения планеты",
    "давление",
    "площадь",
    "путь"
   ],
   "en": [
    "orbital period of a planet",
    "pressure",
    "area",
    "distance travelled"
   ],
   "kk": [
    "планетаның айналу периоды",
    "қысым",
    "аудан",
    "жол"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l26_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Гидравлическая машина».",
   "en": "Select all quantities studied in the topic «Hydraulic machine».",
   "kk": "«Гидравликалық машина» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "давление",
    "температура",
    "расстояние до планеты",
    "площадь"
   ],
   "en": [
    "pressure",
    "temperature",
    "distance to a planet",
    "area"
   ],
   "kk": [
    "қысым",
    "температура",
    "планетаға дейінгі қашықтық",
    "аудан"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l27_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Атмосферное давление».",
   "en": "Select all quantities studied in the topic «Atmospheric pressure».",
   "kk": "«Атмосфералық қысым» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "скорость",
    "путь",
    "площадь",
    "давление"
   ],
   "en": [
    "speed",
    "distance travelled",
    "area",
    "pressure"
   ],
   "kk": [
    "жылдамдық",
    "жол",
    "аудан",
    "қысым"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l28_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Манометры. Насосы».",
   "en": "Select all quantities studied in the topic «Manometers. Pumps».",
   "kk": "«Манометрлер. Сорғылар» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "давление",
    "длина",
    "площадь",
    "КПД механизма"
   ],
   "en": [
    "pressure",
    "length",
    "area",
    "efficiency of a machine"
   ],
   "kk": [
    "қысым",
    "ұзындық",
    "аудан",
    "механизмнің ПӘК"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l29_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Выталкивающая сила. Закон Архимеда».",
   "en": "Select all quantities studied in the topic «Buoyancy. Archimedes' law».",
   "kk": "«Кері итеруші күш. Архимед заңы» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "давление",
    "энергия",
    "температура",
    "площадь"
   ],
   "en": [
    "pressure",
    "energy",
    "temperature",
    "area"
   ],
   "kk": [
    "қысым",
    "энергия",
    "температура",
    "аудан"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l30_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Условия плавания тел».",
   "en": "Select all quantities studied in the topic «Flotation conditions».",
   "kk": "«Денелердің жүзу шарттары» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "путь",
    "сила",
    "площадь",
    "давление"
   ],
   "en": [
    "distance travelled",
    "force",
    "area",
    "pressure"
   ],
   "kk": [
    "жол",
    "күш",
    "аудан",
    "қысым"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l34_mechanical_ms",
  "type": "multi-select",
  "topic": "mechanical",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Простые механизмы. Рычаг. Блок».",
   "en": "Select all quantities studied in the topic «Simple machines. Lever. Pulley».",
   "kk": "«Қарапайым механизмдер. Иінтірек. Блок» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "длина",
    "период обращения планеты",
    "механическая работа",
    "КПД механизма"
   ],
   "en": [
    "length",
    "orbital period of a planet",
    "mechanical work",
    "efficiency of a machine"
   ],
   "kk": [
    "ұзындық",
    "планетаның айналу периоды",
    "механикалық жұмыс",
    "механизмнің ПӘК"
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
   "ru": "Верных вариантов несколько — отметь их все. КПД механизма, механическая работа.",
   "en": "More than one option is correct — select them all. efficiency of a machine, mechanical work.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. механизмнің ПӘК, механикалық жұмыс."
  }
 },
 {
  "id": "t7_l35_mechanical_ms",
  "type": "multi-select",
  "topic": "mechanical",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Центр масс тел».",
   "en": "Select all quantities studied in the topic «Center of mass».",
   "kk": "«Денелердің масса центрі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "КПД механизма",
    "плотность",
    "механическая работа",
    "масса"
   ],
   "en": [
    "efficiency of a machine",
    "density",
    "mechanical work",
    "mass"
   ],
   "kk": [
    "механизмнің ПӘК",
    "тығыздық",
    "механикалық жұмыс",
    "масса"
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
   "ru": "Верных вариантов несколько — отметь их все. механическая работа, КПД механизма.",
   "en": "More than one option is correct — select them all. mechanical work, efficiency of a machine.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. механикалық жұмыс, механизмнің ПӘК."
  }
 },
 {
  "id": "t7_l36_mechanical_ms",
  "type": "multi-select",
  "topic": "mechanical",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Условие равновесия рычага».",
   "en": "Select all quantities studied in the topic «Lever equilibrium».",
   "kk": "«Иінтірек тепе-теңдігінің шарты» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "сила",
    "температура",
    "длина",
    "КПД механизма"
   ],
   "en": [
    "force",
    "temperature",
    "length",
    "efficiency of a machine"
   ],
   "kk": [
    "күш",
    "температура",
    "ұзындық",
    "механизмнің ПӘК"
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
   "ru": "Верных вариантов несколько — отметь их все. КПД механизма, сила.",
   "en": "More than one option is correct — select them all. efficiency of a machine, force.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. механизмнің ПӘК, күш."
  }
 },
 {
  "id": "t7_l37_mechanical_ms",
  "type": "multi-select",
  "topic": "mechanical",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Коэффициент полезного действия (КПД)».",
   "en": "Select all quantities studied in the topic «Efficiency (KPD)».",
   "kk": "«Пайдалы әсер коэффициенті (ПӘК)» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период обращения планеты",
    "сила",
    "КПД механизма",
    "длина"
   ],
   "en": [
    "orbital period of a planet",
    "force",
    "efficiency of a machine",
    "length"
   ],
   "kk": [
    "планетаның айналу периоды",
    "күш",
    "механизмнің ПӘК",
    "ұзындық"
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
   "ru": "Верных вариантов несколько — отметь их все. сила, КПД механизма.",
   "en": "More than one option is correct — select them all. force, efficiency of a machine.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. күш, механизмнің ПӘК."
  }
 },
 {
  "id": "t7_l38_solar_ms",
  "type": "multi-select",
  "topic": "solar",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Наука о небесных телах».",
   "en": "Select all quantities studied in the topic «Science of celestial bodies».",
   "kk": "«Аспан денелері туралы ғылым» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период обращения планеты",
    "время",
    "давление",
    "расстояние до планеты"
   ],
   "en": [
    "orbital period of a planet",
    "time",
    "pressure",
    "distance to a planet"
   ],
   "kk": [
    "планетаның айналу периоды",
    "уақыт",
    "қысым",
    "планетаға дейінгі қашықтық"
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
   "ru": "Верных вариантов несколько — отметь их все. период обращения планеты, расстояние до планеты.",
   "en": "More than one option is correct — select them all. orbital period of a planet, distance to a planet.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. планетаның айналу периоды, планетаға дейінгі қашықтық."
  }
 },
 {
  "id": "t7_l39_solar_ms",
  "type": "multi-select",
  "topic": "solar",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Солнечная система».",
   "en": "Select all quantities studied in the topic «Solar system».",
   "kk": "«Күн жүйесі» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "расстояние до планеты",
    "время",
    "температура",
    "период обращения планеты"
   ],
   "en": [
    "distance to a planet",
    "time",
    "temperature",
    "orbital period of a planet"
   ],
   "kk": [
    "планетаға дейінгі қашықтық",
    "уақыт",
    "температура",
    "планетаның айналу периоды"
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
   "ru": "Верных вариантов несколько — отметь их все. период обращения планеты, расстояние до планеты.",
   "en": "More than one option is correct — select them all. orbital period of a planet, distance to a planet.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. планетаның айналу периоды, планетаға дейінгі қашықтық."
  }
 },
 {
  "id": "t7_l40_solar_ms",
  "type": "multi-select",
  "topic": "solar",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «Основы календаря».",
   "en": "Select all quantities studied in the topic «Calendar basics».",
   "kk": "«Күнтізбенің негіздері» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "период обращения планеты",
    "расстояние до планеты",
    "скорость",
    "механическая работа"
   ],
   "en": [
    "orbital period of a planet",
    "distance to a planet",
    "speed",
    "mechanical work"
   ],
   "kk": [
    "планетаның айналу периоды",
    "планетаға дейінгі қашықтық",
    "жылдамдық",
    "механикалық жұмыс"
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
   "ru": "Верных вариантов несколько — отметь их все. период обращения планеты, расстояние до планеты.",
   "en": "More than one option is correct — select them all. orbital period of a planet, distance to a planet.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. планетаның айналу периоды, планетаға дейінгі қашықтық."
  }
 },
 {
  "id": "t7_l46_pressure_ms",
  "type": "multi-select",
  "topic": "pressure",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «🔬 Лаб. №6: Закон Архимеда».",
   "en": "Select all quantities studied in the topic «🔬 Lab #6: Archimedes' law».",
   "kk": "«🔬 Лаб. №6: Закон Архимеда» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "давление",
    "площадь",
    "плотность",
    "скорость"
   ],
   "en": [
    "pressure",
    "area",
    "density",
    "speed"
   ],
   "kk": [
    "қысым",
    "аудан",
    "тығыздық",
    "жылдамдық"
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
   "ru": "Верных вариантов несколько — отметь их все. давление, площадь.",
   "en": "More than one option is correct — select them all. pressure, area.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. қысым, аудан."
  }
 },
 {
  "id": "t7_l49_mechanical_ms",
  "type": "multi-select",
  "topic": "mechanical",
  "difficulty": 2,
  "question": {
   "ru": "Отметь все величины, которые изучаются в теме «🔬 Лаб. №9: Равновесие рычага».",
   "en": "Select all quantities studied in the topic «🔬 Lab #9: Lever equilibrium».",
   "kk": "«🔬 Лаб. №9: Равновесие рычага» тақырыбында оқылатын барлық шамаларды белгіле."
  },
  "options": {
   "ru": [
    "путь",
    "объём",
    "механическая работа",
    "сила"
   ],
   "en": [
    "distance travelled",
    "volume",
    "mechanical work",
    "force"
   ],
   "kk": [
    "жол",
    "көлем",
    "механикалық жұмыс",
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
   "ru": "Верных вариантов несколько — отметь их все. сила, механическая работа.",
   "en": "More than one option is correct — select them all. force, mechanical work.",
   "kk": "Дұрыс нұсқалар бірнешеу — барлығын белгіле. күш, механикалық жұмыс."
  }
 }
];
window.TASKS_DATABASE_TYPES = TASKS_DATABASE_TYPES;
