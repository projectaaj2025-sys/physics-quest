/* ============================================================
   Генератор заданий новых типов для 8 и 9 классов
   ------------------------------------------------------------
   В 7 классе ученик встречает 7 типов заданий. У 8–9 классов
   раньше было только 4 (выбор ответа, верно/неверно, пропуск,
   число). Этот скрипт добавляет три интерактивных типа:

     • multi-select  — «Отметь все …» (несколько верных вариантов)
     • short-answer  — короткий текстовый ответ
     • matching      — сопоставление величин и единиц СИ

   Источники — только проверенные величины курса: единицы СИ,
   названия величин и разделы, в которых они изучаются. Поэтому
   каждый сгенерированный ответ корректен по построению.

   Запуск (из корня репозитория):
       node tools/gen-task-types.js
   Файлы на выходе: 8/tasks-types.js, 9/tasks-types.js
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

/* ---------- 1. Справочник величин ---------- */
/* name — как называется величина, unit — единица СИ (для сопоставления
   и для ответа), ans — варианты ответа, которые принимает движок,
   chapters — параграфы, в которых величина изучается. */
const UNITS = {
    8: [
        { id: "temp", name: { ru: "температура", kk: "температура", en: "temperature" }, unit: { ru: "кельвин (К)", kk: "кельвин (К)", en: "kelvin (K)" }, ans: { ru: ["кельвин", "к", "k", "kelvin", "К"], en: ["kelvin", "k", "K"], kk: ["кельвин", "к", "k", "К"] }, chapters: ["p2", "p10", "p12"], section: "heat" },
        { id: "u_internal", name: { ru: "внутренняя энергия", kk: "ішкі энергия", en: "internal energy" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p3", "p4", "p9", "p13", "p14"], section: "heat" },
        { id: "heat", name: { ru: "количество теплоты", kk: "жылу мөлшері", en: "amount of heat" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p7", "p8", "p10", "p11", "p28"], section: "heat" },
        { id: "c_spec", name: { ru: "удельная теплоёмкость", kk: "меншікті жылу сыйымдылығы", en: "specific heat capacity" }, unit: { ru: "Дж/(кг·°C)", kk: "Дж/(кг·°C)", en: "J/(kg·°C)" }, ans: { ru: ["дж/(кг·°c)", "дж/кг·°c", "дж/кг°c", "дж/(кг·с)"], en: ["j/(kg·°c)", "j/kg°c", "j/(kg·k)"], kk: ["дж/(кг·°c)", "дж/кг·°c"] }, chapters: ["p7"], section: "heat" },
        { id: "q_burn", name: { ru: "удельная теплота сгорания топлива", kk: "отынның меншікті жану жылуы", en: "specific heat of fuel combustion" }, unit: { ru: "Дж/кг", kk: "Дж/кг", en: "J/kg" }, ans: { ru: ["дж/кг", "j/kg"], en: ["j/kg", "j·kg⁻¹"], kk: ["дж/кг", "j/kg"] }, chapters: ["p8"], section: "heat" },
        { id: "q_melt", name: { ru: "удельная теплота плавления", kk: "меншікті балқу жылуы", en: "specific heat of fusion" }, unit: { ru: "Дж/кг", kk: "Дж/кг", en: "J/kg" }, ans: { ru: ["дж/кг", "j/kg"], en: ["j/kg"], kk: ["дж/кг", "j/kg"] }, chapters: ["p10"], section: "heat" },
        { id: "q_vap", name: { ru: "удельная теплота парообразования", kk: "меншікті булану жылуы", en: "specific heat of vaporization" }, unit: { ru: "Дж/кг", kk: "Дж/кг", en: "J/kg" }, ans: { ru: ["дж/кг", "j/kg"], en: ["j/kg"], kk: ["дж/кг", "j/kg"] }, chapters: ["p11", "p12"], section: "heat" },
        { id: "work_gas", name: { ru: "работа газа", kk: "газ жұмысы", en: "work done by a gas" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p13", "p15"], section: "heat" },
        { id: "eff", name: { ru: "КПД теплового двигателя", kk: "жылу қозғалтқышының ПӘК", en: "efficiency of a heat engine" }, unit: { ru: "процент (%)", kk: "процент (%)", en: "percent (%)" }, ans: { ru: ["процент", "%", "процентов"], en: ["percent", "%", "per cent"], kk: ["процент", "%", "пайыз"] }, chapters: ["p15", "p16"], section: "heat" },
        { id: "charge", name: { ru: "электрический заряд", kk: "электр заряды", en: "electric charge" }, unit: { ru: "кулон (Кл)", kk: "кулон (Кл)", en: "coulomb (C)" }, ans: { ru: ["кулон", "кл", "c", "C", "Кл"], en: ["coulomb", "c", "C"], kk: ["кулон", "кл", "c", "C", "Кл"] }, chapters: ["p18", "p19", "p20", "p22", "p23"], section: "electric" },
        { id: "current", name: { ru: "сила тока", kk: "ток күші", en: "current" }, unit: { ru: "ампер (А)", kk: "ампер (А)", en: "ampere (A)" }, ans: { ru: ["ампер", "а", "a", "A", "А"], en: ["ampere", "amp", "a", "A"], kk: ["ампер", "а", "a", "A", "А"] }, chapters: ["p22", "p23", "p24", "p26", "p31"], section: "electric" },
        { id: "voltage", name: { ru: "электрическое напряжение", kk: "электр кернеуі", en: "voltage" }, unit: { ru: "вольт (В)", kk: "вольт (В)", en: "volt (V)" }, ans: { ru: ["вольт", "в", "v", "V", "В"], en: ["volt", "v", "V"], kk: ["вольт", "в", "v", "V", "В"] }, chapters: ["p23", "p24", "p26"], section: "electric" },
        { id: "resistance", name: { ru: "электрическое сопротивление", kk: "электр кедергісі", en: "electrical resistance" }, unit: { ru: "ом (Ом)", kk: "ом (Ом)", en: "ohm (Ω)" }, ans: { ru: ["ом", "ом", "ohm", "Ω"], en: ["ohm", "Ω", "ohms"], kk: ["ом", "ohm", "Ω"] }, chapters: ["p24", "p25", "p26", "p29"], section: "electric" },
        { id: "rho", name: { ru: "удельное сопротивление", kk: "меншікті кедергі", en: "resistivity" }, unit: { ru: "Ом·м", kk: "Ом·м", en: "Ω·m" }, ans: { ru: ["ом·м", "ом*м", "ohm·m"], en: ["Ω·m", "ohm·m", "ohm·meter"], kk: ["ом·м", "ohm·m"] }, chapters: ["p25"], section: "electric" },
        { id: "capac", name: { ru: "электроёмкость", kk: "электр сыйымдылығы", en: "capacitance" }, unit: { ru: "фарад (Ф)", kk: "фарад (Ф)", en: "farad (F)" }, ans: { ru: ["фарад", "ф", "f", "F", "Ф"], en: ["farad", "f", "F"], kk: ["фарад", "ф", "f", "F", "Ф"] }, chapters: ["p21"], section: "electric" },
        { id: "e_field", name: { ru: "напряжённость электрического поля", kk: "электр өрісінің кернеулігі", en: "electric field strength" }, unit: { ru: "В/м", kk: "В/м", en: "V/m" }, ans: { ru: ["в/м", "v/m"], en: ["v/m"], kk: ["в/м", "v/m"] }, chapters: ["p20", "p21"], section: "electric" },
        { id: "work_cur", name: { ru: "работа электрического тока", kk: "электр тогының жұмысы", en: "work of electric current" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p27", "p28"], section: "electric" },
        { id: "power_cur", name: { ru: "мощность электрического тока", kk: "электр тогының қуаты", en: "power of electric current" }, unit: { ru: "ватт (Вт)", kk: "ватт (Вт)", en: "watt (W)" }, ans: { ru: ["ватт", "вт", "w", "W", "Вт"], en: ["watt", "w", "W"], kk: ["ватт", "вт", "w", "W", "Вт"] }, chapters: ["p27", "p30"], section: "electric" },
        { id: "b_field", name: { ru: "магнитная индукция", kk: "магнит индукциясы", en: "magnetic flux density" }, unit: { ru: "тесла (Тл)", kk: "тесла (Тл)", en: "tesla (T)" }, ans: { ru: ["тесла", "тл", "t", "T", "Тл"], en: ["tesla", "t", "T"], kk: ["тесла", "тл", "t", "T", "Тл"] }, chapters: ["p32", "p33", "p34", "p35", "p36"], section: "magnet" },
        { id: "mag_flux", name: { ru: "магнитный поток", kk: "магнит ағыны", en: "magnetic flux" }, unit: { ru: "вебер (Вб)", kk: "вебер (Вб)", en: "weber (Wb)" }, ans: { ru: ["вебер", "вб", "wb", "Wb"], en: ["weber", "wb", "Wb"], kk: ["вебер", "вб", "wb", "Wb"] }, chapters: ["p34", "p36"], section: "magnet" },
        { id: "ampere", name: { ru: "сила Ампера", kk: "Ампер күші", en: "Ampere force" }, unit: { ru: "ньютон (Н)", kk: "ньютон (Н)", en: "newton (N)" }, ans: { ru: ["ньютон", "н", "n", "N", "Н"], en: ["newton", "n", "N"], kk: ["ньютон", "н", "n", "N", "Н"] }, chapters: ["p35"], section: "magnet" },
        { id: "focal", name: { ru: "фокусное расстояние линзы", kk: "линзаның фокустық қашықтығы", en: "focal length of a lens" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m", "M"], kk: ["метр", "м", "m", "M"] }, chapters: ["p39", "p41", "p42"], section: "optics" },
        { id: "opt_power", name: { ru: "оптическая сила линзы", kk: "линзаның оптикалық күші", en: "optical power of a lens" }, unit: { ru: "диоптрия (дптр)", kk: "диоптрия (дптр)", en: "dioptre (dpt)" }, ans: { ru: ["диоптрия", "дптр", "dioptre"], en: ["dioptre", "diopter", "dpt"], kk: ["диоптрия", "дптр"] }, chapters: ["p41", "p42", "p43"], section: "optics" },
        { id: "wavelength", name: { ru: "длина световой волны", kk: "жарық толқынының ұзындығы", en: "wavelength of light" }, unit: { ru: "нанометр (нм)", kk: "нанометр (нм)", en: "nanometre (nm)" }, ans: { ru: ["нанометр", "нм", "nm"], en: ["nanometre", "nanometer", "nm"], kk: ["нанометр", "нм", "nm"] }, chapters: ["p37", "p38", "p40"], section: "optics" },
        { id: "mass", name: { ru: "масса", kk: "масса", en: "mass" }, unit: { ru: "килограмм (кг)", kk: "килограмм (кг)", en: "kilogram (kg)" }, ans: { ru: ["килограмм", "кг", "kg"], en: ["kilogram", "kg"], kk: ["килограмм", "кг", "kg"] }, chapters: ["p7", "p8", "p10"], section: "heat" },
        { id: "force", name: { ru: "сила", kk: "күш", en: "force" }, unit: { ru: "ньютон (Н)", kk: "ньютон (Н)", en: "newton (N)" }, ans: { ru: ["ньютон", "н", "n", "N", "Н"], en: ["newton", "n", "N"], kk: ["ньютон", "н", "n", "N", "Н"] }, chapters: ["p19", "p35"], section: "electric" },
        { id: "volume", name: { ru: "объём", kk: "көлем", en: "volume" }, unit: { ru: "кубический метр (м³)", kk: "текше метр (м³)", en: "cubic metre (m³)" }, ans: { ru: ["м3", "м³", "кубический метр", "m3"], en: ["m3", "m³", "cubic metre", "cubic meter"], kk: ["м3", "м³", "текше метр"] }, chapters: ["p7"], section: "heat" },
        { id: "time", name: { ru: "время", kk: "уақыт", en: "time" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек"], en: ["second", "s", "sec"], kk: ["секунд", "с", "s", "сек"] }, chapters: ["p15", "p16", "p27"], section: "heat" }
    ],
    9: [
        { id: "disp", name: { ru: "перемещение", kk: "орын ауыстыру", en: "displacement" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m", "M"], kk: ["метр", "м", "m", "M"] }, chapters: ["p1", "p2", "p4"], section: "kinematics" },
        { id: "path", name: { ru: "путь", kk: "жол", en: "distance travelled" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m", "M"], kk: ["метр", "м", "m", "M"] }, chapters: ["p1", "p4", "p5"], section: "kinematics" },
        { id: "velocity", name: { ru: "скорость", kk: "жылдамдық", en: "velocity" }, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, ans: { ru: ["м/с", "m/s", "метр в секунду"], en: ["m/s", "metre per second"], kk: ["м/с", "m/s"] }, chapters: ["p1", "p3", "p4", "p5", "p6", "p7"], section: "kinematics" },
        { id: "accel", name: { ru: "ускорение", kk: "үдеу", en: "acceleration" }, unit: { ru: "м/с²", kk: "м/с²", en: "m/s²" }, ans: { ru: ["м/с2", "м/с²", "m/s2", "m/s²"], en: ["m/s²", "m/s2", "metre per second squared"], kk: ["м/с2", "м/с²", "m/s²"] }, chapters: ["p3", "p5", "p7"], section: "kinematics" },
        { id: "period_rev", name: { ru: "период обращения", kk: "айналу периоды", en: "period of revolution" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек"], en: ["second", "s", "sec"], kk: ["секунд", "с", "s"] }, chapters: ["p6", "p7", "p11", "p12"], section: "kinematics" },
        { id: "freq_rev", name: { ru: "частота обращения", kk: "айналу жиілігі", en: "frequency of revolution" }, unit: { ru: "герц (Гц)", kk: "герц (Гц)", en: "hertz (Hz)" }, ans: { ru: ["герц", "гц", "hz", "Hz", "Гц"], en: ["hertz", "hz", "Hz"], kk: ["герц", "гц", "hz", "Hz", "Гц"] }, chapters: ["p6", "p7"], section: "kinematics" },
        { id: "omega", name: { ru: "угловая скорость", kk: "бұрыштық жылдамдық", en: "angular velocity" }, unit: { ru: "рад/с", kk: "рад/с", en: "rad/s" }, ans: { ru: ["рад/с", "rad/s"], en: ["rad/s", "radian per second"], kk: ["рад/с", "rad/s"] }, chapters: ["p6"], section: "kinematics" },
        { id: "centrip", name: { ru: "центростремительное ускорение", kk: "центрге тартқыш үдеу", en: "centripetal acceleration" }, unit: { ru: "м/с²", kk: "м/с²", en: "m/s²" }, ans: { ru: ["м/с2", "м/с²", "m/s2", "m/s²"], en: ["m/s²", "m/s2"], kk: ["м/с2", "м/с²", "m/s²"] }, chapters: ["p6", "p7"], section: "kinematics" },
        { id: "orb_period", name: { ru: "период обращения планеты", kk: "планетаның айналу периоды", en: "orbital period of a planet" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек", "сутки", "год"], en: ["second", "s", "sec", "day", "year"], kk: ["секунд", "с", "s", "тәулік", "жыл"] }, chapters: ["p11", "p10"], section: "astro" },
        { id: "angular", name: { ru: "угловой размер светила", kk: "жарық шырағының бұрыштық мөлшері", en: "angular size of a celestial body" }, unit: { ru: "градус (°)", kk: "градус (°)", en: "degree (°)" }, ans: { ru: ["градус", "°", "град"], en: ["degree", "°", "deg"], kk: ["градус", "°"] }, chapters: ["p9", "p10", "p12"], section: "astro" },
        { id: "distance", name: { ru: "расстояние до небесного тела", kk: "аспан денесіне дейінгі қашықтық", en: "distance to a celestial body" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["p8", "p9", "p10", "p11", "p12"], section: "astro" },
        { id: "parallax", name: { ru: "годичный параллакс", kk: "жылдық параллакс", en: "annual parallax" }, unit: { ru: "угловая секунда (″)", kk: "бұрыштық секунд (″)", en: "arcsecond (″)" }, ans: { ru: ["угловая секунда", "секунда дуги", "″", "\""], en: ["arcsecond", "arc second", "″"], kk: ["бұрыштық секунд", "″"] }, chapters: ["p12"], section: "astro" },
        { id: "force9", name: { ru: "сила", kk: "күш", en: "force" }, unit: { ru: "ньютон (Н)", kk: "ньютон (Н)", en: "newton (N)" }, ans: { ru: ["ньютон", "н", "n", "N", "Н"], en: ["newton", "n", "N"], kk: ["ньютон", "н", "n", "N", "Н"] }, chapters: ["p13", "p14", "p15", "p16", "p17", "p18", "p19"], section: "dynamics" },
        { id: "mass9", name: { ru: "масса", kk: "масса", en: "mass" }, unit: { ru: "килограмм (кг)", kk: "килограмм (кг)", en: "kilogram (kg)" }, ans: { ru: ["килограмм", "кг", "kg"], en: ["kilogram", "kg"], kk: ["килограмм", "кг", "kg"] }, chapters: ["p15", "p16", "p17", "p20", "p21"], section: "dynamics" },
        { id: "weight", name: { ru: "вес тела", kk: "дене салмағы", en: "weight of a body" }, unit: { ru: "ньютон (Н)", kk: "ньютон (Н)", en: "newton (N)" }, ans: { ru: ["ньютон", "н", "n", "N", "Н"], en: ["newton", "n", "N"], kk: ["ньютон", "н", "n", "N", "Н"] }, chapters: ["p18", "p19"], section: "dynamics" },
        { id: "g_accel", name: { ru: "ускорение свободного падения", kk: "еркін түсу үдеуі", en: "acceleration due to gravity" }, unit: { ru: "м/с²", kk: "м/с²", en: "m/s²" }, ans: { ru: ["м/с2", "м/с²", "m/s2", "m/s²"], en: ["m/s²", "m/s2"], kk: ["м/с2", "м/с²", "m/s²"] }, chapters: ["p5", "p17", "p18", "p19"], section: "dynamics" },
        { id: "momentum", name: { ru: "импульс тела", kk: "дене импульсі", en: "momentum of a body" }, unit: { ru: "кг·м/с", kk: "кг·м/с", en: "kg·m/s" }, ans: { ru: ["кг·м/с", "кг*м/с", "kg*m/s"], en: ["kg·m/s", "kg*m/s", "kg m/s"], kk: ["кг·м/с", "кг*м/с"] }, chapters: ["p20", "p21"], section: "dynamics" },
        { id: "work9", name: { ru: "механическая работа", kk: "механикалық жұмыс", en: "mechanical work" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p22", "p23"], section: "energy" },
        { id: "height", name: { ru: "высота подъёма тела", kk: "дененің көтерілу биіктігі", en: "height of a body above the ground" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["p22", "p23"], section: "energy" },
        { id: "power9", name: { ru: "мощность", kk: "қуат", en: "power" }, unit: { ru: "ватт (Вт)", kk: "ватт (Вт)", en: "watt (W)" }, ans: { ru: ["ватт", "вт", "w", "W", "Вт"], en: ["watt", "w", "W"], kk: ["ватт", "вт", "w", "W", "Вт"] }, chapters: ["p22", "p23"], section: "energy" },
        { id: "kin_energy", name: { ru: "кинетическая энергия", kk: "кинетикалық энергия", en: "kinetic energy" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p22", "p23"], section: "energy" },
        { id: "pot_energy", name: { ru: "потенциальная энергия", kk: "потенциалдық энергия", en: "potential energy" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p22", "p23"], section: "energy" },
        { id: "period_osc", name: { ru: "период колебаний", kk: "тербеліс периоды", en: "period of oscillation" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек"], en: ["second", "s", "sec"], kk: ["секунд", "с", "s"] }, chapters: ["p24", "p25", "p26", "p27"], section: "osc" },
        { id: "freq_osc", name: { ru: "частота колебаний", kk: "тербеліс жиілігі", en: "frequency of oscillation" }, unit: { ru: "герц (Гц)", kk: "герц (Гц)", en: "hertz (Hz)" }, ans: { ru: ["герц", "гц", "hz", "Hz", "Гц"], en: ["hertz", "hz", "Hz"], kk: ["герц", "гц", "hz", "Hz", "Гц"] }, chapters: ["p24", "p26", "p27"], section: "osc" },
        { id: "amplitude", name: { ru: "амплитуда колебаний", kk: "тербеліс амплитудасы", en: "amplitude of oscillation" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["p24", "p25", "p26"], section: "osc" },
        { id: "capac9", name: { ru: "электроёмкость конденсатора", kk: "конденсатор сыйымдылығы", en: "capacitance of a capacitor" }, unit: { ru: "фарад (Ф)", kk: "фарад (Ф)", en: "farad (F)" }, ans: { ru: ["фарад", "ф", "f", "F", "Ф"], en: ["farad", "f", "F"], kk: ["фарад", "ф", "f", "F", "Ф"] }, chapters: ["p28"], section: "osc" },
        { id: "induct", name: { ru: "индуктивность катушки", kk: "шарғы индуктивтілігі", en: "inductance of a coil" }, unit: { ru: "генри (Гн)", kk: "генри (Гн)", en: "henry (H)" }, ans: { ru: ["генри", "гн", "h", "H", "Гн"], en: ["henry", "h", "H"], kk: ["генри", "гн", "h", "H", "Гн"] }, chapters: ["p28"], section: "osc" },
        { id: "wavelength9", name: { ru: "длина волны", kk: "толқын ұзындығы", en: "wavelength" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["p29", "p30", "p31"], section: "waves" },
        { id: "wave_speed", name: { ru: "скорость волны", kk: "толқын жылдамдығы", en: "wave speed" }, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, ans: { ru: ["м/с", "m/s"], en: ["m/s"], kk: ["м/с", "m/s"] }, chapters: ["p29", "p30", "p31"], section: "waves" },
        { id: "sound_freq", name: { ru: "частота звука", kk: "дыбыс жиілігі", en: "sound frequency" }, unit: { ru: "герц (Гц)", kk: "герц (Гц)", en: "hertz (Hz)" }, ans: { ru: ["герц", "гц", "hz", "Hz", "Гц"], en: ["hertz", "hz", "Hz"], kk: ["герц", "гц", "hz", "Hz", "Гц"] }, chapters: ["p30"], section: "waves" },
        { id: "loudness", name: { ru: "уровень громкости", kk: "дыбыс қаттылығының деңгейі", en: "loudness level" }, unit: { ru: "децибел (дБ)", kk: "децибел (дБ)", en: "decibel (dB)" }, ans: { ru: ["децибел", "дб", "db", "dB"], en: ["decibel", "db", "dB"], kk: ["децибел", "дб", "db", "dB"] }, chapters: ["p30"], section: "waves" },
        { id: "light_speed", name: { ru: "скорость света", kk: "жарық жылдамдығы", en: "speed of light" }, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, ans: { ru: ["м/с", "m/s"], en: ["m/s"], kk: ["м/с", "m/s"] }, chapters: ["p31", "p32", "p42"], section: "waves" },
        { id: "photon", name: { ru: "энергия фотона", kk: "фотон энергиясы", en: "photon energy" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["p33"], section: "quantum" },
        { id: "work_out", name: { ru: "работа выхода электрона", kk: "электронның шығу жұмысы", en: "work function" }, unit: { ru: "электрон-вольт (эВ)", kk: "электрон-вольт (эВ)", en: "electronvolt (eV)" }, ans: { ru: ["эв", "электрон-вольт", "ev", "eV"], en: ["ev", "eV", "electronvolt"], kk: ["эв", "электрон-вольт", "ev", "eV"] }, chapters: ["p33"], section: "quantum" },
        { id: "mass_defect", name: { ru: "дефект масс", kk: "масса ақауы", en: "mass defect" }, unit: { ru: "атомная единица массы (а.е.м.)", kk: "атомдық масса бірлігі (а.е.м.)", en: "atomic mass unit (u)" }, ans: { ru: ["а.е.м.", "аем", "атомная единица массы"], en: ["u", "amu", "atomic mass unit"], kk: ["а.е.м.", "аем"] }, chapters: ["p37"], section: "quantum" },
        { id: "binding", name: { ru: "энергия связи ядра", kk: "ядроның байланыс энергиясы", en: "nuclear binding energy" }, unit: { ru: "мегаэлектрон-вольт (МэВ)", kk: "мегаэлектрон-вольт (МэВ)", en: "megaelectronvolt (MeV)" }, ans: { ru: ["мэв", "mev", "MeV"], en: ["mev", "MeV"], kk: ["мэв", "mev", "MeV"] }, chapters: ["p37", "p38", "p39", "p40"], section: "quantum" },
        { id: "halflife", name: { ru: "период полураспада", kk: "жартылай ыдырау периоды", en: "half-life" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек"], en: ["second", "s", "sec"], kk: ["секунд", "с", "s"] }, chapters: ["p35", "p38"], section: "quantum" },
        { id: "activity", name: { ru: "активность радиоактивного образца", kk: "радиоактивті үлгінің белсенділігі", en: "activity of a radioactive sample" }, unit: { ru: "беккерель (Бк)", kk: "беккерель (Бк)", en: "becquerel (Bq)" }, ans: { ru: ["беккерель", "бк", "bq", "Bq"], en: ["becquerel", "bq", "Bq"], kk: ["беккерель", "бк", "bq", "Bq"] }, chapters: ["p35", "p38"], section: "quantum" },
        { id: "dose", name: { ru: "поглощённая доза излучения", kk: "сіңірілген сәулелену дозасы", en: "absorbed radiation dose" }, unit: { ru: "грей (Гр)", kk: "грей (Гр)", en: "gray (Gy)" }, ans: { ru: ["грей", "гр", "gy", "Gy"], en: ["gray", "gy", "Gy"], kk: ["грей", "гр", "gy", "Gy"] }, chapters: ["p40"], section: "quantum" },
        { id: "eq_dose", name: { ru: "эквивалентная доза", kk: "эквивалентті доза", en: "equivalent dose" }, unit: { ru: "зиверт (Зв)", kk: "зиверт (Зв)", en: "sievert (Sv)" }, ans: { ru: ["зиверт", "зв", "sv", "Sv"], en: ["sievert", "sv", "Sv"], kk: ["зиверт", "зв", "sv", "Sv"] }, chapters: ["p40"], section: "quantum" },
        { id: "time9", name: { ru: "время", kk: "уақыт", en: "time" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек"], en: ["second", "s", "sec"], kk: ["секунд", "с", "s"] }, chapters: ["p1", "p3", "p4", "p5", "p6", "p7"], section: "kinematics" }
    ]
};

const UNITS_7 = [
    { id: "len7", name: { ru: "длина", kk: "ұзындық", en: "length" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["general", "safety"], section: "measure" },
    { id: "area7", name: { ru: "площадь", kk: "аудан", en: "area" }, unit: { ru: "квадратный метр (м²)", kk: "шаршы метр (м²)", en: "square metre (m²)" }, ans: { ru: ["м2", "м²", "квадратный метр"], en: ["m2", "m²", "square metre"], kk: ["м2", "м²", "шаршы метр"] }, chapters: ["general", "pressure"], section: "measure" },
    { id: "vol7", name: { ru: "объём", kk: "көлем", en: "volume" }, unit: { ru: "кубический метр (м³)", kk: "текше метр (м³)", en: "cubic metre (m³)" }, ans: { ru: ["м3", "м³", "кубический метр"], en: ["m3", "m³", "cubic metre"], kk: ["м3", "м³", "текше метр"] }, chapters: ["general", "density"], section: "measure" },
    { id: "mass7", name: { ru: "масса", kk: "масса", en: "mass" }, unit: { ru: "килограмм (кг)", kk: "килограмм (кг)", en: "kilogram (kg)" }, ans: { ru: ["килограмм", "кг", "kg"], en: ["kilogram", "kg"], kk: ["килограмм", "кг", "kg"] }, chapters: ["general", "density", "dynamics"], section: "measure" },
    { id: "time7", name: { ru: "время", kk: "уақыт", en: "time" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "сек"], en: ["second", "s", "sec"], kk: ["секунд", "с", "s"] }, chapters: ["general", "kinematics"], section: "measure" },
    { id: "path7", name: { ru: "путь", kk: "жол", en: "distance travelled" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m", "M"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["kinematics"], section: "motion" },
    { id: "speed7", name: { ru: "скорость", kk: "жылдамдық", en: "speed" }, unit: { ru: "м/с", kk: "м/с", en: "m/s" }, ans: { ru: ["м/с", "m/s"], en: ["m/s"], kk: ["м/с", "m/s"] }, chapters: ["kinematics"], section: "motion" },
    { id: "density7", name: { ru: "плотность", kk: "тығыздық", en: "density" }, unit: { ru: "кг/м³", kk: "кг/м³", en: "kg/m³" }, ans: { ru: ["кг/м3", "кг/м³", "kg/m3", "г/см³"], en: ["kg/m³", "kg/m3", "g/cm³"], kk: ["кг/м3", "кг/м³", "kg/m³"] }, chapters: ["density"], section: "density" },
    { id: "force7", name: { ru: "сила", kk: "күш", en: "force" }, unit: { ru: "ньютон (Н)", kk: "ньютон (Н)", en: "newton (N)" }, ans: { ru: ["ньютон", "н", "n", "N", "Н"], en: ["newton", "n", "N"], kk: ["ньютон", "н", "n", "N", "Н"] }, chapters: ["dynamics", "mechanical"], section: "force" },
    { id: "pressure7", name: { ru: "давление", kk: "қысым", en: "pressure" }, unit: { ru: "паскаль (Па)", kk: "паскаль (Па)", en: "pascal (Pa)" }, ans: { ru: ["паскаль", "па", "pa", "Pa", "Па"], en: ["pascal", "pa", "Pa"], kk: ["паскаль", "па", "pa", "Pa", "Па"] }, chapters: ["pressure"], section: "pressure" },
    { id: "work7", name: { ru: "механическая работа", kk: "механикалық жұмыс", en: "mechanical work" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["energy", "mechanical"], section: "work" },
    { id: "power7", name: { ru: "мощность", kk: "қуат", en: "power" }, unit: { ru: "ватт (Вт)", kk: "ватт (Вт)", en: "watt (W)" }, ans: { ru: ["ватт", "вт", "w", "W", "Вт"], en: ["watt", "w", "W"], kk: ["ватт", "вт", "w", "W", "Вт"] }, chapters: ["energy", "mechanical"], section: "work" },
    { id: "energy7", name: { ru: "энергия", kk: "энергия", en: "energy" }, unit: { ru: "джоуль (Дж)", kk: "джоуль (Дж)", en: "joule (J)" }, ans: { ru: ["джоуль", "дж", "j", "J", "Дж"], en: ["joule", "j", "J"], kk: ["джоуль", "дж", "j", "J", "Дж"] }, chapters: ["energy"], section: "work" },
    { id: "eff7", name: { ru: "КПД механизма", kk: "механизмнің ПӘК", en: "efficiency of a machine" }, unit: { ru: "процент (%)", kk: "процент (%)", en: "percent (%)" }, ans: { ru: ["процент", "%", "процентов"], en: ["percent", "%"], kk: ["процент", "%", "пайыз"] }, chapters: ["mechanical", "energy"], section: "work" },
    { id: "temp7", name: { ru: "температура", kk: "температура", en: "temperature" }, unit: { ru: "кельвин (К)", kk: "кельвин (К)", en: "kelvin (K)" }, ans: { ru: ["кельвин", "к", "k", "K", "К"], en: ["kelvin", "k", "K"], kk: ["кельвин", "к", "k", "K", "К"] }, chapters: ["general"], section: "measure" },
    { id: "distance7", name: { ru: "расстояние до планеты", kk: "планетаға дейінгі қашықтық", en: "distance to a planet" }, unit: { ru: "метр (м)", kk: "метр (м)", en: "metre (m)" }, ans: { ru: ["метр", "м", "m"], en: ["metre", "meter", "m"], kk: ["метр", "м", "m"] }, chapters: ["solar"], section: "space" },
    { id: "period7", name: { ru: "период обращения планеты", kk: "планетаның айналу периоды", en: "orbital period of a planet" }, unit: { ru: "секунда (с)", kk: "секунд (с)", en: "second (s)" }, ans: { ru: ["секунда", "с", "s", "год"], en: ["second", "s", "year"], kk: ["секунд", "с", "s", "жыл"] }, chapters: ["solar"], section: "space" },
    { id: "gravity7", name: { ru: "ускорение свободного падения", kk: "еркін түсу үдеуі", en: "acceleration due to gravity" }, unit: { ru: "м/с²", kk: "м/с²", en: "m/s²" }, ans: { ru: ["м/с2", "м/с²", "m/s²"], en: ["m/s²", "m/s2"], kk: ["м/с2", "м/с²"] }, chapters: ["dynamics", "solar"], section: "space" }
];

const SECTIONS = {
    7: ["measure", "motion", "density", "force", "pressure", "work", "space"],
    8: ["heat", "electric", "magnet", "optics"],
    9: ["kinematics", "astro", "dynamics", "energy", "osc", "waves", "quantum"]
};

/* Какие параграфы к какому разделу относятся (нужно, когда у параграфа
   нет собственных величин — например, вводные параграфы и лабораторные). */
const TOPIC_SECTION = {
    7: { safety: "measure", general: "measure", kinematics: "motion", density: "density", dynamics: "force", pressure: "pressure", energy: "work", mechanical: "work", solar: "space" },
    8: { p1: "heat", p2: "heat", p3: "heat", p4: "heat", p5: "heat", p6: "heat", p7: "heat", p8: "heat", p9: "heat", p10: "heat", p11: "heat", p12: "heat", p13: "heat", p14: "heat", p15: "heat", p16: "heat", p17: "heat",
        p18: "electric", p19: "electric", p20: "electric", p21: "electric", p22: "electric", p23: "electric", p24: "electric", p25: "electric", p26: "electric", p27: "electric", p28: "electric", p29: "electric", p30: "electric", p31: "electric",
        p32: "magnet", p33: "magnet", p34: "magnet", p35: "magnet", p36: "magnet",
        p37: "optics", p38: "optics", p39: "optics", p40: "optics", p41: "optics", p42: "optics", p43: "optics" },
    9: { p1: "kinematics", p2: "kinematics", p3: "kinematics", p4: "kinematics", p5: "kinematics", p6: "kinematics", p7: "kinematics",
        p8: "astro", p9: "astro", p10: "astro", p11: "astro", p12: "astro",
        p13: "dynamics", p14: "dynamics", p15: "dynamics", p16: "dynamics", p17: "dynamics", p18: "dynamics", p19: "dynamics", p20: "dynamics", p21: "dynamics",
        p22: "energy", p23: "energy",
        p24: "osc", p25: "osc", p26: "osc", p27: "osc", p28: "osc",
        p29: "waves", p30: "waves", p31: "waves",
        p32: "quantum", p33: "quantum", p34: "quantum", p35: "quantum", p36: "quantum", p37: "quantum", p38: "quantum", p39: "quantum", p40: "quantum", p41: "quantum",
        p42: "quantum", p43: "quantum" }
};

/* Лабораторные работы по разделам */
const LAB_SECTION = {
    7: ["measure", "motion", "density", "force", "pressure", "work", "space", "measure", "motion", "density"],
    8: ["heat", "heat", "heat", "electric", "electric", "electric", "electric", "magnet", "magnet", "optics", "optics"],
    9: ["kinematics", "kinematics", "dynamics", "quantum"]
};

/* Близкие разделы: используются, если в своём разделе не хватает
   величин с разными единицами для задания «сопоставь». */
const RELATED = {
    8: {
        heat: ["heat", "electric"],
        electric: ["electric", "magnet", "heat"],
        magnet: ["magnet", "electric"],
        optics: ["optics", "electric"]
    },
    9: {
        kinematics: ["kinematics", "dynamics", "astro"],
        astro: ["astro", "kinematics"],
        dynamics: ["dynamics", "kinematics", "energy"],
        energy: ["energy", "dynamics", "osc"],
        osc: ["osc", "energy", "waves"],
        waves: ["waves", "osc", "quantum"],
        quantum: ["quantum", "waves", "dynamics"]
    }
};

/* Приборы и единицы, которые НЕ входят в СИ (для задания 1 уровня). */
const NON_SI_UNITS = {
    ru: ["литр", "градус Цельсия", "миллиметр ртутного столба", "киловатт-час"],
    en: ["litre", "degree Celsius", "millimetre of mercury", "kilowatt-hour"],
    kk: ["литр", "Цельсий градусы", "сынап бағанының миллиметрі", "киловатт-сағат"]
};
const SI_UNITS_SAMPLE = {
    ru: ["метр", "килограмм", "секунда", "ампер", "кельвин", "джоуль"],
    en: ["metre", "kilogram", "second", "ampere", "kelvin", "joule"],
    kk: ["метр", "килограмм", "секунд", "ампер", "кельвин", "джоуль"]
};

const SECTION_TITLES = {
    measure: { ru: "измерения и единицы СИ", kk: "өлшеулер және ХБЖ бірліктері", en: "measurements and SI units" },
    motion: { ru: "механическое движение", kk: "механикалық қозғалыс", en: "mechanical motion" },
    density: { ru: "плотность вещества", kk: "заттың тығыздығы", en: "density of matter" },
    force: { ru: "силы", kk: "күштер", en: "forces" },
    pressure: { ru: "давление", kk: "қысым", en: "pressure" },
    work: { ru: "работа, мощность, энергия", kk: "жұмыс, қуат, энергия", en: "work, power, energy" },
    space: { ru: "космос и планеты", kk: "ғарыш және планеталар", en: "space and planets" },
    heat: { ru: "тепловые явления", kk: "жылулық құбылыстар", en: "thermal phenomena" },
    electric: { ru: "электрические явления", kk: "электр құбылыстары", en: "electrical phenomena" },
    magnet: { ru: "магнитные явления", kk: "магниттік құбылыстар", en: "magnetic phenomena" },
    optics: { ru: "оптика", kk: "оптика", en: "optics" },
    kinematics: { ru: "механическое движение", kk: "механикалық қозғалыс", en: "mechanics of motion" },
    astro: { ru: "астрономия", kk: "астрономия", en: "astronomy" },
    dynamics: { ru: "динамика", kk: "динамика", en: "dynamics" },
    energy: { ru: "работа и энергия", kk: "жұмыс және энергия", en: "work and energy" },
    osc: { ru: "колебания", kk: "тербелістер", en: "oscillations" },
    waves: { ru: "волны и звук", kk: "толқындар және дыбыс", en: "waves and sound" },
    quantum: { ru: "квантовая и ядерная физика", kk: "кванттық және ядролық физика", en: "quantum and nuclear physics" }
};

/* ---------- 2. Вспомогательные функции ---------- */
function seededRandom(seed) {
    let s = 0;
    for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

function shuffle(arr, rnd) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function loadInVm(relFile) {
    const ctx = { window: {}, document: { getElementById: () => null, querySelectorAll: () => [], addEventListener() {} }, console };
    ctx.window = ctx;
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(ROOT, relFile), "utf8"), ctx, { filename: relFile });
    return ctx;
}

function localized(field, lang) {
    if (!field) return "";
    if (typeof field === "string") return field;
    return String(field[lang] || field.ru || field.en || field.kk || "");
}

/* ---------- 3. Тексты заданий (три языка) ---------- */
const T = {
    matchQ: {
        ru: "Сопоставь физическую величину и её единицу измерения в СИ.",
        en: "Match each physical quantity with its SI unit.",
        kk: "Физикалық шаманы оның ХБЖ-дағы өлшем бірлігімен сәйкестендір."
    },
    matchHint: {
        ru: "Сначала найди величины, которые ты точно знаешь: например, сила измеряется в ньютонах.",
        en: "Start with the quantities you already know: force, for example, is measured in newtons.",
        kk: "Алдымен нақты білетін шамалардан баста: мысалы, күш ньютонмен өлшенеді."
    },
    unitQ: {
        ru: "В каких единицах СИ измеряется величина «{name}»? Запиши единицу.",
        en: "Which SI unit is used to measure «{name}»? Write the unit.",
        kk: "«{name}» шамасы ХБЖ-да қандай бірлікпен өлшенеді? Бірлікті жаз."
    },
    unitHint: {
        ru: "Подумай, к какой группе относится величина: теплота, электричество, волны или движение. Единица этой группы и будет ответом.",
        en: "Think about the group this quantity belongs to: heat, electricity, waves or motion. The unit of that group is the answer.",
        kk: "Шама қай топқа жататынын ойла: жылу, электр, толқын немесе қозғалыс. Сол топтың бірлігі дұрыс жауап."
    },
    unitExpl: {
        ru: "Единица СИ для величины «{name}» — {unit}.",
        en: "The SI unit of «{name}» is {unit}.",
        kk: "«{name}» шамасының ХБЖ бірлігі — {unit}."
    },
    msQ: {
        ru: "Отметь все величины, которые изучаются в теме «{title}».",
        en: "Select all quantities studied in the topic «{title}».",
        kk: "«{title}» тақырыбында оқылатын барлық шамаларды белгіле."
    },
    msQSec: {
        ru: "Отметь все величины, которые относятся к разделу «{section}».",
        en: "Select all quantities that belong to the section «{section}».",
        kk: "«{section}» бөліміне жататын барлық шамаларды белгіле."
    },
    msHint: {
        ru: "Убери величины из других разделов физики: они изучаются в других параграфах.",
        en: "Cross out quantities from other branches of physics — they belong to other paragraphs.",
        kk: "Басқа физика салаларына жататын шамаларды алып таста: олар басқа параграфтарда оқылады."
    },
    msNote: {
        ru: "Верных вариантов несколько — отметь их все.",
        en: "More than one option is correct — select them all.",
        kk: "Дұрыс нұсқалар бірнешеу — барлығын белгіле."
    }
};

/* Если у уровня в банке нет какого-то из семи типов, добиваем его
   коротким заданием того же типа: обратный вопрос про единицу
   (fill-blank) и перевод единиц (numeric). */
const FILL_TPL = {
    unitQ: {
        ru: "В единицах «{unit}» измеряется величина ___.",
        en: "The quantity measured in {unit} is ___.",
        kk: "«{unit}» бірлігімен өлшенетін шама — ___."
    }
};
const CONVERSIONS = [
    { ru: "Переведи в единицы СИ: 250 г = ___ кг.", en: "Convert to SI units: 250 g = ___ kg.", kk: "ХБЖ-ға келтір: 250 г = ___ кг.", answer: 0.25, tolerance: 0.001 },
    { ru: "Переведи в единицы СИ: 40 см = ___ м.", en: "Convert to SI units: 40 cm = ___ m.", kk: "ХБЖ-ға келтір: 40 см = ___ м.", answer: 0.4, tolerance: 0.001 },
    { ru: "Переведи в единицы СИ: 2 л = ___ м³.", en: "Convert to SI units: 2 L = ___ m³.", kk: "ХБЖ-ға келтір: 2 л = ___ м³.", answer: 0.002, tolerance: 0.0001 },
    { ru: "Переведи в единицы СИ: 3 мин = ___ с.", en: "Convert to SI units: 3 min = ___ s.", kk: "ХБЖ-ға келтір: 3 мин = ___ с.", answer: 180, tolerance: 0.5 },
    { ru: "Переведи в единицы СИ: 5 кПа = ___ Па.", en: "Convert to SI units: 5 kPa = ___ Pa.", kk: "ХБЖ-ға келтір: 5 кПа = ___ Па.", answer: 5000, tolerance: 1 },
    { ru: "Переведи в единицы СИ: 0,8 кДж = ___ Дж.", en: "Convert to SI units: 0.8 kJ = ___ J.", kk: "ХБЖ-ға келтір: 0,8 кДж = ___ Дж.", answer: 800, tolerance: 1 },
    { ru: "Переведи в единицы СИ: 250 мА = ___ А.", en: "Convert to SI units: 250 mA = ___ A.", kk: "ХБЖ-ға келтір: 250 мА = ___ А.", answer: 0.25, tolerance: 0.001 },
    { ru: "Переведи в единицы СИ: 500 мс = ___ с.", en: "Convert to SI units: 500 ms = ___ s.", kk: "ХБЖ-ға келтір: 500 мс = ___ с.", answer: 0.5, tolerance: 0.001 }
];

/* Варианты написания названия величины: полное и без уточняющего хвоста
   («импульс тела» → «импульс»), чтобы ответ не был слишком строгим. */
const GENERIC_TAILS = {
    ru: ["тела", "светила", "ядра", "планеты", "линзы", "катушки", "конденсатора", "электрона", "излучения", "колебаний", "тока", "поля", "двигателя", "нагревателя"],
    en: ["of a body", "of a planet", "of a lens", "of a coil", "of a capacitor", "of an electron", "of radiation", "of oscillation", "of current", "of a field", "of a heat engine", "of a celestial body", "above the ground"],
    kk: ["денесі", "денесінің", "жұлдыздың", "ядросының", "планетаның", "линзаның", "шарғының", "конденсатордың", "электронның", "сәулеленудің", "тербелістің", "тоғының", "өрісінің"]
};
function nameVariants(name, lang) {
    const out = [name];
    const tails = GENERIC_TAILS[lang] || [];
    for (const tail of tails) {
        if (name.length > tail.length + 2 && name.toLowerCase().endsWith(" " + tail)) {
            out.push(name.slice(0, -(tail.length + 1)));
        }
    }
    return out;
}

/* Многоязычное сообщение о правильном ответе */
function correctText(msgs, lang) { return msgs[lang] || msgs.ru; }
function fillTemplate(str, vars) {
    return String(str).replace(/\{(\w+)\}/g, (m, k) => (vars[k] === undefined ? m : vars[k]));
}

/* ---------- 4. Генерация ---------- */
function generate(grade) {
    const learning = loadInVm(`${grade}/content.js`);
    const levels = vm.runInContext("LEVELS_CONFIG", learning);
    const conspect = vm.runInContext("CONSPECT", learning);
    const catalogCtx = loadInVm("shared/catalog-789.js");
    const catalog = vm.runInContext(`GRADE_CATALOG[${grade}]`, catalogCtx) || {};
    vm.runInContext("1", catalogCtx);
    const tasksCtx = loadInVm(`${grade}/tasks.js`);
    const bank = vm.runInContext("[].concat(TASKS_DATABASE,TASKS_DATABASE_EXT,TASKS_DATABASE_CH,TASKS_DATABASE_EXT2,TASKS_DATABASE_PRACTICAL)", tasksCtx);
    const units = grade === 7 ? UNITS_7 : UNITS[grade];
    const sections = SECTIONS[grade];
    const out = [];

    const bySection = (sec) => units.filter(u => u.section === sec);

    levels.forEach((level, index) => {
        const topic = (level.topics || [])[0] || "safety";
        const isLab = /^lab\d+$/.test(topic);
        const isSafety = topic === "safety";
        const cons = conspect[topic] || {};
        const catLevel = (catalog && catalog.levels || []).find(l => l.id === level.id) || {};
        const stripNum = (str) => String(str || "").replace(/^§\d+\.\s*/, "").trim();
        const levelTitle = {
            ru: stripNum((catLevel.name && catLevel.name.ru) || cons.title || level.desc || "§" + level.id),
            en: stripNum((catLevel.name && catLevel.name.en) || cons.titleEn || cons.title || "§" + level.id),
            kk: stripNum((catLevel.name && catLevel.name.kk) || cons.titleKk || cons.title || "§" + level.id)
        };

        // Раздел уровня: явная карта параграфов, для лабораторных — LAB_SECTION
        let section = TOPIC_SECTION[grade][topic] || null;
        if (!section) {
            if (isLab) section = (LAB_SECTION[grade] || [])[parseInt(topic.replace(/\D/g, ""), 10) - 1] || sections[0];
            else section = sections[(index + grade) % sections.length];
        }
        const own = units.filter(u => u.chapters.includes(topic));
        const sameSection = bySection(section);
        // Кандидаты уровня: сначала свои параграфы, потом весь раздел
        const local = own.length >= 2 ? own.slice() : own.concat(sameSection.filter(u => !own.includes(u)));
        const pool = local.length >= 3 ? local : local.concat(sameSection.filter(u => !local.includes(u)));

        const rnd = seededRandom(`${grade}-${topic}-${level.id}`);

        // Какие типы уже есть в банке уровня
        const poolTypes = new Set(bank.filter(t => t.topic === topic || (level.topics || []).includes(t.topic)).map(t => t.type));
        // 8–9 классы: интерактивные типы добавляем всегда (их в банке не было),
        // пропуски и числа — только если их нет. 7 класс: генерируем только
        // недостающие типы, чтобы не дублировать уже готовые задания.
        const want = (type) => {
            const missing = !poolTypes.has(type);
            if (grade === 7) return missing;
            if (type === "fill-blank" || type === "numeric") return missing;
            return true;
        };

        /* --- multi-select: 2 верные величины + 2 из другого раздела --- */
        let msTask;
        if (isSafety) {
            // Уровень 1 — техника безопасности: проверяем, что ученик знает единицы СИ
            const si = shuffle(SI_UNITS_SAMPLE.ru.map((_, i) => i), rnd).slice(0, 3);
            const siNames = si.map(i => ({
                ru: SI_UNITS_SAMPLE.ru[i], en: SI_UNITS_SAMPLE.en[i], kk: SI_UNITS_SAMPLE.kk[i]
            }));
            const nonSi = shuffle(NON_SI_UNITS.ru.map((_, i) => i), rnd).slice(0, 2).map(i => ({
                ru: NON_SI_UNITS.ru[i], en: NON_SI_UNITS.en[i], kk: NON_SI_UNITS.kk[i]
            }));
            const opts = shuffle(siNames.concat(nonSi), rnd);
            msTask = {
                id: `t${grade}_l${level.id}_${topic}_ms`,
                type: "multi-select",
                topic,
                difficulty: 1,
                question: {
                    ru: "Отметь все единицы, которые входят в Международную систему единиц (СИ).",
                    en: "Select all units that belong to the International System of Units (SI).",
                    kk: "Халықаралық бірліктер жүйесіне (ХБЖ) кіретін барлық бірліктерді белгіле."
                },
                options: {
                    ru: opts.map(o => o.ru), en: opts.map(o => o.en), kk: opts.map(o => o.kk)
                },
                correctAnswer: opts.map((o, i) => (siNames.includes(o) ? i : -1)).filter(i => i >= 0),
                hint: {
                    ru: "В СИ входят метр, килограмм, секунда, ампер, кельвин и производные от них. Литр и градус Цельсия — внесистемные.",
                    en: "SI includes metre, kilogram, second, ampere, kelvin and their derivatives. Litre and degree Celsius are non-SI.",
                    kk: "ХБЖ-ға метр, килограмм, секунд, ампер, кельвин және туынды бірліктер кіреді. Литр мен Цельсий градусы — жүйеден тыс."
                },
                explanation: {
                    ru: "Единицы СИ: " + siNames.map(o => o.ru).join(", ") + ". Внесистемные: " + nonSi.map(o => o.ru).join(", ") + ".",
                    en: "SI units: " + siNames.map(o => o.en).join(", ") + ". Non-SI: " + nonSi.map(o => o.en).join(", ") + ".",
                    kk: "ХБЖ бірліктері: " + siNames.map(o => o.kk).join(", ") + ". Жүйеден тыс: " + nonSi.map(o => o.kk).join(", ") + "."
                }
            };
        } else {
            const correct = shuffle(pool, rnd).slice(0, 2);
            const foreignPool = units.filter(u => u.section !== section && !pool.includes(u));
            const wrong = shuffle(foreignPool, rnd).slice(0, 2);
            const optionsList = shuffle(correct.concat(wrong), rnd);
            msTask = {
                id: `t${grade}_l${level.id}_${topic}_ms`,
                type: "multi-select",
                topic,
                difficulty: 2,
                question: {
                    ru: fillTemplate(T.msQ.ru, { title: levelTitle.ru }),
                    en: fillTemplate(T.msQ.en, { title: levelTitle.en }),
                    kk: fillTemplate(T.msQ.kk, { title: levelTitle.kk })
                },
                options: {
                    ru: optionsList.map(u => u.name.ru),
                    en: optionsList.map(u => u.name.en),
                    kk: optionsList.map(u => u.name.kk)
                },
                correctAnswer: optionsList.map((u, i) => (correct.includes(u) ? i : -1)).filter(i => i >= 0),
                hint: T.msHint,
                explanation: {
                    ru: T.msNote.ru + " " + correct.map(u => u.name.ru).join(", ") + ".",
                    en: T.msNote.en + " " + correct.map(u => u.name.en).join(", ") + ".",
                    kk: T.msNote.kk + " " + correct.map(u => u.name.kk).join(", ") + "."
                }
            };
        }
        if (want("multi-select")) out.push(msTask);

        /* --- short-answer: единица измерения величины --- */
        const saUnit = shuffle(pool, rnd)[0] || units[0];
        if (want("short-answer")) out.push({
            id: `t${grade}_l${level.id}_${topic}_sa`,
            type: "short-answer",
            topic,
            difficulty: 2,
            question: {
                ru: fillTemplate(T.unitQ.ru, { name: saUnit.name.ru }),
                en: fillTemplate(T.unitQ.en, { name: saUnit.name.en }),
                kk: fillTemplate(T.unitQ.kk, { name: saUnit.name.kk })
            },
            correctAnswer: {
                ru: saUnit.ans.ru,
                en: saUnit.ans.en,
                kk: saUnit.ans.kk
            },
            hint: T.unitHint,
            explanation: {
                ru: fillTemplate(T.unitExpl.ru, { name: saUnit.name.ru, unit: saUnit.unit.ru }),
                en: fillTemplate(T.unitExpl.en, { name: saUnit.name.en, unit: saUnit.unit.en }),
                kk: fillTemplate(T.unitExpl.kk, { name: saUnit.name.kk, unit: saUnit.unit.kk })
            }
        });

        /* --- matching: 3 пары «величина ↔ единица СИ» (единицы не повторяются) --- */
        const relatedOrder = (RELATED[grade] && RELATED[grade][section]) || [section];
        const matchUnits = [];
        const addCandidate = (u) => {
            if (matchUnits.length >= 3) return;
            if (matchUnits.some(m => m.unit.ru === u.unit.ru || m.name.ru === u.name.ru)) return;
            matchUnits.push(u);
        };
        // 1) величины своего параграфа, 2) своего раздела, 3) близких разделов, 4) любые.
        // Единицы внутри одного задания не повторяются.
        shuffle(units.filter(u => u.chapters.includes(topic)), rnd).forEach(addCandidate);
        if (matchUnits.length < 3) shuffle(units.filter(u => u.section === section), rnd).forEach(addCandidate);
        for (const sec of relatedOrder) {
            if (matchUnits.length >= 3) break;
            shuffle(units.filter(u => u.section === sec), rnd).forEach(addCandidate);
        }
        if (matchUnits.length < 3) shuffle(units, rnd).forEach(addCandidate);
        // Уровень 1 — техника безопасности: только базовые единицы СИ
        if (isSafety) {
            const baseIds = grade === 8 ? ["mass", "time", "temp"] : ["mass9", "time9", "force9"];
            matchUnits.length = 0;
            baseIds.forEach(id => { const u = units.find(x => x.id === id); if (u) matchUnits.push(u); });
            shuffle(units.filter(u => u.section === section), rnd).forEach(addCandidate);
        }
        const rightOrder = shuffle(matchUnits.map((_, i) => i), rnd);
        /* --- добивка: если в пуле уровня нет fill-blank или numeric --- */
        if (want("fill-blank") && matchUnits.length) {
            // Берём величину, чья единица в этом классе встречается ровно один раз, —
            // иначе вопрос «какая величина измеряется в секундах» был бы неоднозначным.
            const uniqueUnit = (u) => units.filter(x => x.unit.ru === u.unit.ru).length === 1;
            const fbCandidates = matchUnits.concat(units.filter(u => u.section === section))
                .filter((u, i, arr) => arr.indexOf(u) === i && uniqueUnit(u))
                .sort((a, b) => a.name.ru.length - b.name.ru.length);
            // Разные уровни получают разные вопросы — берём по кругу
            const fbUnit = fbCandidates.length ? fbCandidates[level.id % fbCandidates.length] : null;
            if (fbUnit) {
                out.push({
                    id: `t${grade}_l${level.id}_${topic}_fb`,
                    type: "fill-blank",
                    topic,
                    difficulty: 2,
                    question: {
                        ru: fillTemplate(FILL_TPL.unitQ.ru, { unit: fbUnit.unit.ru }),
                        en: fillTemplate(FILL_TPL.unitQ.en, { unit: fbUnit.unit.en }),
                        kk: fillTemplate(FILL_TPL.unitQ.kk, { unit: fbUnit.unit.kk })
                    },
                    correctAnswer: {
                        ru: nameVariants(fbUnit.name.ru, "ru"),
                        en: nameVariants(fbUnit.name.en, "en"),
                        kk: nameVariants(fbUnit.name.kk, "kk")
                    },
                    hint: {
                        ru: "Название единицы подсказывает, какую величину она измеряет. Это величина из этой темы.",
                        en: "The unit's name hints at the quantity it measures. It belongs to this topic.",
                        kk: "Бірліктің атауы қандай шама өлшенетінін көрсетеді. Бұл — осы тақырыптың шамасы."
                    },
                    explanation: {
                        ru: `В ${fbUnit.unit.ru} измеряется ${fbUnit.name.ru}.`,
                        en: `The quantity measured in ${fbUnit.unit.en} is ${fbUnit.name.en}.`,
                        kk: `${fbUnit.unit.kk} бірлігімен ${fbUnit.name.kk} өлшенеді.`
                    }
                });
            } else {
                // Резерв: спрашиваем единицу величины (ответ — единица)
                const fbAlt = pool.slice().sort((a, b) => a.name.ru.length - b.name.ru.length)[0] || units[0];
                out.push({
                    id: `t${grade}_l${level.id}_${topic}_fb`,
                    type: "fill-blank",
                    topic,
                    difficulty: 2,
                    question: {
                        ru: `Единица измерения величины «${fbAlt.name.ru}» в СИ — ___.`,
                        en: `The SI unit of «${fbAlt.name.en}» is ___.`,
                        kk: `«${fbAlt.name.kk}» шамасының ХБЖ-дағы бірлігі — ___.`
                    },
                    correctAnswer: { ru: fbAlt.ans.ru, en: fbAlt.ans.en, kk: fbAlt.ans.kk },
                    hint: T.unitHint,
                    explanation: {
                        ru: fillTemplate(T.unitExpl.ru, { name: fbAlt.name.ru, unit: fbAlt.unit.ru }),
                        en: fillTemplate(T.unitExpl.en, { name: fbAlt.name.en, unit: fbAlt.unit.en }),
                        kk: fillTemplate(T.unitExpl.kk, { name: fbAlt.name.kk, unit: fbAlt.unit.kk })
                    }
                });
            }
        }
        if (want("numeric")) {
            const conv = CONVERSIONS[(level.id + grade) % CONVERSIONS.length];
            out.push({
                id: `t${grade}_l${level.id}_${topic}_num`,
                type: "numeric",
                topic,
                difficulty: 1,
                question: { ru: conv.ru, en: conv.en, kk: conv.kk },
                correctAnswer: conv.answer,
                tolerance: conv.tolerance,
                hint: {
                    ru: "Кило- — это 1000, милли- — это 0,001, а 1 л = 0,001 м³.",
                    en: "Kilo- means 1000, milli- means 0.001, and 1 L = 0.001 m³.",
                    kk: "Кило- — бұл 1000, милли- — 0,001, ал 1 л = 0,001 м³."
                },
                explanation: {
                    ru: "Ответ: " + conv.answer + ".",
                    en: "Answer: " + conv.answer + ".",
                    kk: "Жауабы: " + conv.answer + "."
                }
            });
        }

        if (want("matching")) out.push({
            id: `t${grade}_l${level.id}_${topic}_mt`,
            type: "matching",
            topic,
            difficulty: 2,
            question: T.matchQ,
            pairs: {
                left: {
                    ru: matchUnits.map(u => u.name.ru),
                    en: matchUnits.map(u => u.name.en),
                    kk: matchUnits.map(u => u.name.kk)
                },
                right: {
                    ru: rightOrder.map(i => matchUnits[i].unit.ru),
                    en: rightOrder.map(i => matchUnits[i].unit.en),
                    kk: rightOrder.map(i => matchUnits[i].unit.kk)
                }
            },
            correctPairs: matchUnits.map((_, i) => [i, rightOrder.indexOf(i)]),
            hint: T.matchHint,
            explanation: {
                ru: "Верные пары: " + matchUnits.map(u => `${u.name.ru} — ${u.unit.ru}`).join("; ") + ".",
                en: "Correct pairs: " + matchUnits.map(u => `${u.name.en} — ${u.unit.en}`).join("; ") + ".",
                kk: "Дұрыс жұптар: " + matchUnits.map(u => `${u.name.kk} — ${u.unit.kk}`).join("; ") + "."
            }
        });
    });

    return out;
}

/* ---------- 5. Запись файлов ---------- */
const banner = (grade, tasks) => `/* ===== Задания новых типов, ${grade} класс =====
   Сгенерировано tools/gen-task-types.js — правки вносить в генератор.
   Типы: multi-select (отметь все), short-answer (короткий ответ),
   matching (сопоставление величины и единицы СИ).
   Всего заданий: ${tasks.length} (по 3 на каждый уровень). */
const TASKS_DATABASE_TYPES = ${JSON.stringify(tasks, null, 1)};
window.TASKS_DATABASE_TYPES = TASKS_DATABASE_TYPES;
`;

for (const grade of [7, 8, 9]) {
    const tasks = generate(grade);
    const file = path.join(ROOT, String(grade), "tasks-types.js");
    fs.writeFileSync(file, banner(grade, tasks), "utf8");
    const byType = tasks.reduce((m, t) => (m[t.type] = (m[t.type] || 0) + 1, m), {});
    console.log(`${grade} класс: ${tasks.length} заданий  ${JSON.stringify(byType)} → ${path.relative(ROOT, file)}`);
}
