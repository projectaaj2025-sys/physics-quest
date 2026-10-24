/* ===== js/game.js ===== */
/* ============================================
   GAME — Игровая механика
   Поле, персонаж, астероиды, энергия, задания
   ============================================ */

// Максимум попыток на одно задание
const MAX_TASK_ATTEMPTS = 5;
// Лимит астероидов на экране одновременно
const MAX_ASTEROIDS_ON_SCREEN = 5;
// Сколько HP города восстанавливается за каждый правильный ответ
const CITY_HEAL_PER_CORRECT = 5;
// Каждые N астероидов (сбитых щитом или упавших) — вопрос по физике (~1 вопрос в 15 секунд)
const ASTEROIDS_PER_TASK = 3;

// Нормализация текстового ответа: регистр, ё→е, лишние пробелы (в т.ч. внутри ответа)
function normalizeAnswerText(str) {
    return String(str == null ? "" : str)
        .trim()
        .replace(/ё/gi, "е")
        .replace(/\s+/g, " ")
        .toLowerCase();
}

// Ключ локализации для типа задания: "multiple-choice" -> "type_multiple_choice"
function i18nTypeKey(type) {
    return "type_" + String(type).replace(/-/g, "_");
}

// Нормализация локализованного списка строк.
// Поддерживает оба формата данных:
//   1) { ru: [...], en: [...], kk: [...] }         — стандартная база
//   2) [ { ru, en, kk }, ... ]                     — задания учителя
function localizeStringList(field) {
    if (!field) return [];
    const lang = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    const pick = (item) => {
        if (item === null || item === undefined) return "";
        if (typeof item === "string" || typeof item === "number") return String(item);
        return String(item[lang] || item.ru || item.en || item.kk || "");
    };
    if (Array.isArray(field)) return field.map(pick);
    const arr = field[lang] || field.ru || field.en || field.kk || [];
    return (Array.isArray(arr) ? arr : []).map(pick);
}

// Локализованные варианты текстового ответа. Для встроенной базы это объект
// {ru: [...], en: [...], kk: [...]}; пользовательские задания могут хранить
// обычную строку или массив, поэтому поддерживаем оба формата.
function localizeAnswerValues(value) {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value.map(v => String(v));
    if (typeof value === "object") {
        const lang = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
        const chosen = value[lang] ?? value.ru ?? value.en ?? value.kk;
        if (Array.isArray(chosen)) return chosen.map(v => String(v));
        return chosen === undefined || chosen === null ? [] : [String(chosen)];
    }
    return [String(value)];
}

// ============ ДИЗАЙНЫ РАКЕТЫ (РПГ) ============
const ROCKET_STYLES = [
{ id: "classic", name: { ru: "Классик",      en: "Classic",      kk: "Классика" },      shape: "classic",  body: "#0099cc", accent: "#00d9ff", cockpit: "#00ffff", flame: "rgba(0,217,255,0.6)" },
    { id: "fire",    name: { ru: "Огонь",        en: "Flame",        kk: "От" },            shape: "classic",  body: "#e53935", accent: "#ff6d00", cockpit: "#ffe082", flame: "rgba(255,109,0,0.65)" },
    { id: "emerald", name: { ru: "Изумруд",      en: "Emerald",      kk: "Зүбәржат" },      shape: "classic",  body: "#2e7d32", accent: "#69f0ae", cockpit: "#b9f6ca", flame: "rgba(105,240,174,0.6)" },
    { id: "violet",  name: { ru: "Неон-фиолет",  en: "Neon Violet",  kk: "Неон күлгін" },   shape: "classic",  body: "#7b1fa2", accent: "#e040fb", cockpit: "#ea80fc", flame: "rgba(224,64,251,0.6)" },
    { id: "gold",    name: { ru: "Золото",       en: "Gold",         kk: "Алтын" },         shape: "classic",  body: "#f9a825", accent: "#ffd54f", cockpit: "#fff8e1", flame: "rgba(255,213,79,0.65)" },
    { id: "ice",     name: { ru: "Лёд",          en: "Ice",          kk: "Мұз" },           shape: "classic",  body: "#64b5f6", accent: "#e1f5fe", cockpit: "#ffffff", flame: "rgba(225,245,254,0.7)" },
    { id: "pink",    name: { ru: "Розовая комета", en: "Pink Comet", kk: "Қызғылт комета" }, shape: "comet", body: "#d81b60", accent: "#ff80ab", cockpit: "#ffccde", flame: "rgba(255,128,171,0.65)" },
    { id: "steel",   name: { ru: "Сталь",        en: "Steel",        kk: "Болат" },         shape: "explorer", body: "#78909c", accent: "#cfd8dc", cockpit: "#eceff1", flame: "rgba(207,216,220,0.6)" },
    { id: "delta",   name: { ru: "Дельта",       en: "Delta",         kk: "Дельта" },        shape: "delta",   body: "#1565c0", accent: "#40c4ff", cockpit: "#b3e5fc", flame: "rgba(64,196,255,0.7)" },
    { id: "lunar",   name: { ru: "Лунный модуль", en: "Lunar Module", kk: "Ай модулі" },     shape: "lunar",   body: "#6d4c41", accent: "#ffcc80", cockpit: "#fff3e0", flame: "rgba(255,183,77,0.7)" },
    { id: "nebula",  name: { ru: "Туманность",   en: "Nebula",        kk: "Тұмандық" },      shape: "nebula",  body: "#4527a0", accent: "#b388ff", cockpit: "#e1bee7", flame: "rgba(179,136,255,0.7)" },
    { id: "dragon",  name: { ru: "Дракон",       en: "Dragon",        kk: "Айдаһар" },       shape: "dragon",  body: "#00695c", accent: "#64ffda", cockpit: "#b2dfdb", flame: "rgba(100,255,218,0.7)" },
    { id: "comet",   name: { ru: "Солнечная комета", en: "Solar Comet", kk: "Күн кометасы" }, shape: "comet", body: "#ad1457", accent: "#ffca28", cockpit: "#fff59d", flame: "rgba(255,202,40,0.75)" },
    { id: "scout",   name: { ru: "Разведчик",    en: "Scout",         kk: "Барлаушы" },      shape: "scout",   body: "#37474f", accent: "#80cbc4", cockpit: "#e0f2f1", flame: "rgba(128,203,196,0.7)" },
// — Корабли миссии «Орбита-9» —
    { id: "berkut",     name: { ru: "Беркут",      en: "Golden Eagle",  kk: "Бүркіт" },      shape: "berkut",     body: "#b0742e", accent: "#ffd54f", cockpit: "#fff3c4", flame: "rgba(255,213,79,0.7)" },
    { id: "tulpar",     name: { ru: "Тулпар",      en: "Tulpar",        kk: "Тұлпар" },      shape: "tulpar",     body: "#5e35b1", accent: "#b388ff", cockpit: "#e1bee7", flame: "rgba(179,136,255,0.7)" },
    { id: "sunkar",     name: { ru: "Сокол",       en: "Falcon",        kk: "Сұңқар" },      shape: "sunkar",     body: "#37474f", accent: "#ff5252", cockpit: "#ff8a80", flame: "rgba(255,82,82,0.7)" },
    { id: "baiterek",   name: { ru: "Байтерек",    en: "Baiterek",      kk: "Бәйтерек" },    shape: "baiterek",   body: "#90a4ae", accent: "#ffd700", cockpit: "#ffe082", flame: "rgba(255,215,0,0.65)" },
    { id: "aral",       name: { ru: "Арал",        en: "Aral",          kk: "Арал" },        shape: "aral",       body: "#0277bd", accent: "#4fc3f7", cockpit: "#e1f5fe", flame: "rgba(79,195,247,0.7)" },
    { id: "kvant",      name: { ru: "КВАНТ-1",     en: "KVANT-1",       kk: "КВАНТ-1" },     shape: "kvant",      body: "#1a237e", accent: "#00e5ff", cockpit: "#84ffff", flame: "rgba(0,229,255,0.75)" },
    // — Корабли-созвездия (астрономия, §8–§12) —
    { id: "temirkazyk", name: { ru: "Полярная звезда", en: "Polaris",   kk: "Темірқазық" },  shape: "temirkazyk", body: "#fbc02d", accent: "#fff59d", cockpit: "#fffde7", flame: "rgba(255,245,157,0.7)" },
    { id: "sumbile",    name: { ru: "Сириус",      en: "Sirius",        kk: "Сүмбіле" },     shape: "sumbile",    body: "#1e88e5", accent: "#90caf9", cockpit: "#e3f2fd", flame: "rgba(144,202,249,0.75)" },
    { id: "zheti",      name: { ru: "Большая Медведица", en: "Big Dipper", kk: "Жеті қарақшы" }, shape: "zheti",     body: "#311b92", accent: "#ffd54f", cockpit: "#ffe082", flame: "rgba(255,213,79,0.7)" },
    { id: "orion",      name: { ru: "Орион",       en: "Orion",         kk: "Орион" },       shape: "orion",      body: "#ef6c00", accent: "#ffcc80", cockpit: "#ffe0b2", flame: "rgba(255,171,64,0.7)" },
    // — НЛО: объект, зафиксированный датчиками «Орбиты-9» —
    { id: "ufo",        name: { ru: "НЛО",         en: "UFO",           kk: "Ұшатын нысан" },         shape: "ufo",        body: "#9e9e9e", accent: "#76ff03", cockpit: "#c5e1a5", flame: "rgba(118,255,3,0.7)" }
];

function getRocketStyle(id) {
    return ROCKET_STYLES.find(s => s.id === id) || ROCKET_STYLES[0];
}

function localName(name) {
    if (!name) return "";
    if (typeof name === "string") return name;
    return name[I18n.currentLang] || name.ru || "";
}

const ROCKET_SHAPES_9 = new Set(["berkut","tulpar","sunkar","baiterek","aral","kvant","temirkazyk","sumbile","zheti","orion","ufo"]);

function rocketSVG8(st) {
    const shape = st.shape || "classic";
    const gradId = `rocket-grad-${st.id}`;
    const defs = `<defs><linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${st.accent}"/><stop offset="0.42" stop-color="${st.body}"/><stop offset="1" stop-color="#101c3d"/></linearGradient></defs>`;
    const classic = `<path d="M32 2 C38 14 40 22 40 30 L24 30 C24 22 26 14 32 2 Z" fill="url(#${gradId})"/>
        <rect x="22" y="30" width="20" height="34" rx="4" fill="url(#${gradId})"/>
        <path d="M22 44 L8 64 L22 58 Z" fill="${st.accent}"/><path d="M42 44 L56 64 L42 58 Z" fill="${st.accent}"/>
        <path d="M26 64 L32 80 L38 64 Z" fill="${st.flame}"/><circle cx="32" cy="36" r="6" fill="${st.cockpit}"/>`;
    const comet = `<path d="M8 61 C17 52 22 42 28 26 C31 17 38 8 47 5 C48 17 44 28 38 35 C31 44 24 51 14 66 Z" fill="url(#${gradId})"/>
        <path d="M13 67 C7 74 4 80 2 87 C13 82 20 77 25 69 Z" fill="${st.flame}" opacity=".8"/><circle cx="36" cy="25" r="5" fill="${st.cockpit}"/>`;
    const delta = `<path d="M32 4 L54 67 L32 58 L10 67 Z" fill="url(#${gradId})"/>
        <path d="M21 48 L7 69 L23 62 Z" fill="${st.accent}"/><path d="M43 48 L57 69 L41 62 Z" fill="${st.accent}"/>
        <path d="M26 65 L32 83 L38 65 Z" fill="${st.flame}"/><circle cx="32" cy="35" r="5" fill="${st.cockpit}"/>`;
    const explorer = `<rect x="20" y="14" width="24" height="54" rx="12" fill="url(#${gradId})"/>
        <path d="M20 39 L6 56 L20 55 Z M44 39 L58 56 L44 55 Z" fill="${st.accent}"/>
        <path d="M26 68 L32 83 L38 68 Z" fill="${st.flame}"/><circle cx="32" cy="29" r="6" fill="${st.cockpit}"/>
        <path d="M32 13 V5 M28 7 H36" stroke="${st.accent}" stroke-width="2"/>`;
    const lunar = `<rect x="19" y="25" width="26" height="30" rx="4" fill="url(#${gradId})"/>
        <path d="M19 33 L9 24 L15 43 Z M45 33 L55 24 L49 43 Z" fill="${st.accent}"/>
        <path d="M20 55 L13 72 M44 55 L51 72 M25 55 L22 74 M39 55 L42 74" stroke="${st.accent}" stroke-width="3"/>
        <path d="M27 73 L32 84 L37 73 Z" fill="${st.flame}"/><rect x="25" y="15" width="14" height="11" rx="3" fill="${st.cockpit}"/>`;
    const nebula = `<ellipse cx="32" cy="38" rx="22" ry="18" fill="url(#${gradId})"/><ellipse cx="32" cy="38" rx="29" ry="8" fill="none" stroke="${st.accent}" stroke-width="3"/>
        <path d="M24 55 L32 81 L40 55 Z" fill="${st.flame}"/><circle cx="32" cy="34" r="7" fill="${st.cockpit}"/>`;
    const dragon = `<path d="M32 3 L39 18 L51 13 L44 31 L54 54 L39 51 L32 68 L25 51 L10 54 L20 31 L13 13 L25 18 Z" fill="url(#${gradId})"/>
        <path d="M25 18 L18 7 L29 14 M39 18 L46 7 L35 14" fill="${st.accent}"/><path d="M27 63 L32 83 L37 63 Z" fill="${st.flame}"/><circle cx="32" cy="33" r="5" fill="${st.cockpit}"/>`;
    const scout = `<path d="M32 5 L43 25 L43 59 L21 59 L21 25 Z" fill="url(#${gradId})"/><path d="M21 40 L6 51 L21 54 Z M43 40 L58 51 L43 54 Z" fill="${st.accent}"/>
        <path d="M26 59 L32 82 L38 59 Z" fill="${st.flame}"/><rect x="26" y="28" width="12" height="9" rx="2" fill="${st.cockpit}"/>`;
    const body = { classic, comet, delta, explorer, lunar, nebula, dragon, scout }[shape] || classic;
    return `<svg class="rocket-preview" width="64" height="90" viewBox="0 0 64 90" xmlns="http://www.w3.org/2000/svg">${defs}${body}</svg>`;
}

function rocketSVG9(st) {
    const shape = st.shape || "classic";
    const gradId = `rocket-grad-${st.id}`;
    const defs = `<defs><linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${st.accent}"/><stop offset="0.42" stop-color="${st.body}"/><stop offset="1" stop-color="#101c3d"/></linearGradient></defs>`;
    const classic = `<path d="M32 2 C38 14 40 22 40 30 L24 30 C24 22 26 14 32 2 Z" fill="url(#${gradId})"/>
        <rect x="22" y="30" width="20" height="34" rx="4" fill="url(#${gradId})"/>
        <path d="M22 44 L8 64 L22 58 Z" fill="${st.accent}"/><path d="M42 44 L56 64 L42 58 Z" fill="${st.accent}"/>
        <path d="M26 64 L32 80 L38 64 Z" fill="${st.flame}"/><circle cx="32" cy="36" r="6" fill="${st.cockpit}"/>`;
    const comet = `<path d="M8 61 C17 52 22 42 28 26 C31 17 38 8 47 5 C48 17 44 28 38 35 C31 44 24 51 14 66 Z" fill="url(#${gradId})"/>
        <path d="M13 67 C7 74 4 80 2 87 C13 82 20 77 25 69 Z" fill="${st.flame}" opacity=".8"/><circle cx="36" cy="25" r="5" fill="${st.cockpit}"/>`;
    const delta = `<path d="M32 4 L54 67 L32 58 L10 67 Z" fill="url(#${gradId})"/>
        <path d="M21 48 L7 69 L23 62 Z" fill="${st.accent}"/><path d="M43 48 L57 69 L41 62 Z" fill="${st.accent}"/>
        <path d="M26 65 L32 83 L38 65 Z" fill="${st.flame}"/><circle cx="32" cy="35" r="5" fill="${st.cockpit}"/>`;
    const explorer = `<rect x="20" y="14" width="24" height="54" rx="12" fill="url(#${gradId})"/>
        <path d="M20 39 L6 56 L20 55 Z M44 39 L58 56 L44 55 Z" fill="${st.accent}"/>
        <path d="M26 68 L32 83 L38 68 Z" fill="${st.flame}"/><circle cx="32" cy="29" r="6" fill="${st.cockpit}"/>
        <path d="M32 13 V5 M28 7 H36" stroke="${st.accent}" stroke-width="2"/>`;
    const lunar = `<rect x="19" y="25" width="26" height="30" rx="4" fill="url(#${gradId})"/>
        <path d="M19 33 L9 24 L15 43 Z M45 33 L55 24 L49 43 Z" fill="${st.accent}"/>
        <path d="M20 55 L13 72 M44 55 L51 72 M25 55 L22 74 M39 55 L42 74" stroke="${st.accent}" stroke-width="3"/>
        <path d="M27 73 L32 84 L37 73 Z" fill="${st.flame}"/><rect x="25" y="15" width="14" height="11" rx="3" fill="${st.cockpit}"/>`;
    const nebula = `<ellipse cx="32" cy="38" rx="22" ry="18" fill="url(#${gradId})"/><ellipse cx="32" cy="38" rx="29" ry="8" fill="none" stroke="${st.accent}" stroke-width="3"/>
        <path d="M24 55 L32 81 L40 55 Z" fill="${st.flame}"/><circle cx="32" cy="34" r="7" fill="${st.cockpit}"/>`;
    const dragon = `<path d="M32 3 L39 18 L51 13 L44 31 L54 54 L39 51 L32 68 L25 51 L10 54 L20 31 L13 13 L25 18 Z" fill="url(#${gradId})"/>
        <path d="M25 18 L18 7 L29 14 M39 18 L46 7 L35 14" fill="${st.accent}"/><path d="M27 63 L32 83 L37 63 Z" fill="${st.flame}"/><circle cx="32" cy="33" r="5" fill="${st.cockpit}"/>`;
    const scout = `<path d="M32 5 L43 25 L43 59 L21 59 L21 25 Z" fill="url(#${gradId})"/><path d="M21 40 L6 51 L21 54 Z M43 40 L58 51 L43 54 Z" fill="${st.accent}"/>
        <path d="M26 59 L32 82 L38 59 Z" fill="${st.flame}"/><rect x="26" y="28" width="12" height="9" rx="2" fill="${st.cockpit}"/>`;
    const berkut = `<path d="M32 3 L38 24 L62 58 L40 54 L36 70 L28 70 L24 54 L2 58 L26 24 Z" fill="url(#${gradId})"/>
        <path d="M8 55 L18 40 M56 55 L46 40" stroke="${st.accent}" stroke-width="2"/>
        <path d="M26 70 L32 86 L38 70 Z" fill="${st.flame}"/><circle cx="32" cy="30" r="5" fill="${st.cockpit}"/>`;
    const tulpar = `<path d="M32 2 L38 26 L58 38 L40 46 L37 66 L32 56 L27 66 L24 46 L6 38 L26 26 Z" fill="url(#${gradId})"/>
        <path d="M26 66 L32 86 L38 66 Z" fill="${st.flame}"/><circle cx="32" cy="30" r="5" fill="${st.cockpit}"/>`;
    const sunkar = `<path d="M32 1 L38 44 L50 70 L32 58 L14 70 L26 44 Z" fill="url(#${gradId})"/>
        <path d="M27 60 L32 84 L37 60 Z" fill="${st.flame}"/><circle cx="32" cy="34" r="4" fill="${st.cockpit}"/>`;
    const baiterek = `<rect x="24" y="26" width="16" height="48" rx="8" fill="url(#${gradId})"/>
        <path d="M22 26 L14 8 M32 24 L32 3 M42 26 L50 8" stroke="${st.accent}" stroke-width="3"/>
        <circle cx="32" cy="9" r="6" fill="${st.cockpit}"/>
        <path d="M27 74 L32 87 L37 74 Z" fill="${st.flame}"/>`;
    const aral = `<rect x="22" y="12" width="20" height="56" rx="10" fill="url(#${gradId})"/>
        <rect x="2" y="30" width="18" height="16" rx="2" fill="none" stroke="${st.accent}" stroke-width="2"/>
        <rect x="44" y="30" width="18" height="16" rx="2" fill="none" stroke="${st.accent}" stroke-width="2"/>
        <path d="M11 30 V46 M53 30 V46" stroke="${st.accent}" stroke-width="1.5"/>
        <path d="M27 68 L32 85 L37 68 Z" fill="${st.flame}"/><circle cx="32" cy="24" r="5" fill="${st.cockpit}"/>`;
    const kvant = `<path d="M32 4 L43 22 L60 62 L36 50 L32 66 L28 50 L4 62 L21 22 Z" fill="url(#${gradId})"/>
        <path d="M32 14 V58" stroke="${st.accent}" stroke-width="2"/>
        <path d="M26 64 L32 86 L38 64 Z" fill="${st.flame}"/><circle cx="32" cy="28" r="5" fill="${st.cockpit}"/>`;
    const temirkazyk = `<path d="M32 4 L38 28 L60 38 L38 46 L32 76 L26 46 L4 38 L26 28 Z" fill="url(#${gradId})"/>
        <path d="M32 20 V56" stroke="${st.accent}" stroke-width="2"/>
        <path d="M27 76 L32 88 L37 76 Z" fill="${st.flame}"/><circle cx="32" cy="38" r="6" fill="${st.cockpit}"/>`;
    const sumbile = `<path d="M32 2 L37 30 L58 40 L37 48 L32 80 L27 48 L6 40 L27 30 Z" fill="url(#${gradId})"/>
        <path d="M26 82 L32 88 L38 82 Z" fill="${st.flame}"/><circle cx="32" cy="40" r="6" fill="${st.cockpit}"/>`;
    const zheti = `<path d="M32 14 L60 34 L49 64 L15 64 L4 34 Z" fill="url(#${gradId})"/>
        <circle cx="10" cy="36" r="2.5" fill="${st.accent}"/><circle cx="17" cy="29" r="2.5" fill="${st.accent}"/><circle cx="25" cy="25" r="2.5" fill="${st.accent}"/><circle cx="33" cy="24" r="2.5" fill="${st.accent}"/><circle cx="41" cy="25" r="2.5" fill="${st.accent}"/><circle cx="49" cy="29" r="2.5" fill="${st.accent}"/><circle cx="56" cy="36" r="2.5" fill="${st.accent}"/>
        <path d="M27 64 L32 86 L37 64 Z" fill="${st.flame}"/><rect x="25" y="38" width="14" height="12" rx="3" fill="${st.cockpit}"/>`;
    const orion = `<path d="M32 4 L54 15 L40 42 L54 70 L10 70 L24 42 L10 15 Z" fill="url(#${gradId})"/>
        <circle cx="22" cy="44" r="2.6" fill="${st.accent}"/><circle cx="32" cy="44" r="2.6" fill="${st.accent}"/><circle cx="42" cy="44" r="2.6" fill="${st.accent}"/>
        <path d="M27 70 L32 88 L37 70 Z" fill="${st.flame}"/><circle cx="32" cy="20" r="5" fill="${st.cockpit}"/>`;
    const ufo = `<ellipse cx="32" cy="50" rx="29" ry="11" fill="url(#${gradId})"/>
        <path d="M15 46 Q32 14 49 46 Z" fill="${st.cockpit}"/>
        <circle cx="12" cy="50" r="2.6" fill="${st.accent}"/><circle cx="32" cy="55" r="2.6" fill="${st.accent}"/><circle cx="52" cy="50" r="2.6" fill="${st.accent}"/>
        <path d="M24 61 L32 86 L40 61 Z" fill="${st.flame}"/>`;
    const body = { berkut, tulpar, sunkar, baiterek, aral, kvant, temirkazyk, sumbile, zheti, orion, ufo }[shape] || berkut;
    return `<svg class="rocket-preview" width="64" height="90" viewBox="0 0 64 90" xmlns="http://www.w3.org/2000/svg">${defs}${body}</svg>`;
}


/* ===== SECTION THEMES — разные фоны и астероиды для разделов ===== */

function rocketSVG(st) {
    return ROCKET_SHAPES_9.has(st && st.shape) ? rocketSVG9(st) : rocketSVG8(st);
}

function getThemeForLevel(levelId) {
    if (!window.SECTION_THEMES || typeof LEVELS_CONFIG === "undefined") return null;
    const cfg = LEVELS_CONFIG[levelId - 1];
    if (!cfg) return null;
    const ch = cfg.chapter || "";
    if (ch === "bonus") return window.SECTION_THEMES.safety;
    if (ch.indexOf("lab") === 0) return window.SECTION_THEMES.lab;
    const n = parseInt(ch.replace("p", ""), 10) || 1;
    if (n <= 7) return window.SECTION_THEMES.kinematics;
    if (n <= 12) return window.SECTION_THEMES.astronomy;
    if (n <= 19) return window.SECTION_THEMES.dynamics;
    if (n <= 23) return window.SECTION_THEMES.conservation;
    if (n <= 31) return window.SECTION_THEMES.oscillations;
    if (n <= 35) return window.SECTION_THEMES.emwaves;
    return window.SECTION_THEMES.nuclear;
}
const Game = {
    canvas: null,
    ctx: null,
    minimap: null,
    minimapCtx: null,
    width: 0,
    height: 0,

    // Состояние
    running: false,
    paused: false,
    storyOpen: false,
    pausedTotal: 0,    // суммарное время пауз (мс) — не входит во время уровня
    pauseStartedAt: 0, // момент начала текущей паузы
    currentLevel: 1,
    levelConfig: null,
    score: 0,
    shield: 0,
    cityHealth: 100,
    cityMaxHealth: 100,
    tasksSolved: 0,
    tasksAttempted: 0,
    asteroidsDeflected: 0,
    startTime: 0,
    timeElapsed: 0,

    // Игровые объекты
    player: null,
    asteroids: [],
    energyOrbs: [],
    particles: [],
    explosions: [],
    shieldWaves: [],

    // Задания
    currentTask: null,
    completedTaskIds: [],
    failedTaskIds: [],
    practicalTaskIds: [],
    taskAttempts: 0,
    taskHintsLeft: 3,
    isTaskActive: false,
    pendingTask: null,
    taskTriggeredThisLevel: 0,

    // Управление
    keys: {},
    dragTarget: null,   // точка, к которой летит ракета при сенсорном перетаскивании
    lastTime: 0,

    // Таймеры
    asteroidTimer: null,
    energyTimer: null,

    // Звёзды на фоне
    stars: [],

    init() {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.minimap = document.getElementById("minimap-canvas");
        this.minimapCtx = this.minimap.getContext("2d");

        this.resize();
        window.addEventListener("resize", () => this.resize());

        // Управление.
        // В полях ввода (краткий ответ, форма учителя) игра клавиши НЕ перехватывает:
        // пробел печатается как обычно, стрелки двигают курсор.
        const isFormField = (el) => {
            if (!el || !el.tagName) return false;
            const tag = el.tagName.toUpperCase();
            return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable === true;
        };
        window.addEventListener("keydown", (e) => {
            if (isFormField(e.target)) return;
            const k = e.key.toLowerCase();
            // Пауза: клавиша P (или «з» в русской раскладке). Не работает, пока открыт вопрос.
            if (k === "p" || k === "з") {
                e.preventDefault();
                this.togglePause();
                return;
            }
            this.keys[k] = true;
            if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) {
                e.preventDefault();
            }
        });
        window.addEventListener("keyup", (e) => {
            // Снимаем всегда (даже из поля ввода), чтобы клавиша движения не «залипла»
            this.keys[e.key.toLowerCase()] = false;
        });

        // Сенсорные кнопки для телефонов и планшетов
        this.initMobileControls();

        // Сделать canvas фокусируемым
        this.canvas.tabIndex = 0;
        this.canvas.focus();

        this.generateStars();

        // Анимационный цикл (даже когда не запущен — для фона меню)
        this.lastTime = performance.now();
        requestAnimationFrame((t) => this.loop(t));
    },

    initMobileControls() {
        // Определяем сенсорное устройство
        const isTouch = ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0);
        if (isTouch) document.body.classList.add('touch-device');

        const controls = document.getElementById("mobile-controls");
        if (!controls) return;
        controls.querySelectorAll("[data-mobile-key]").forEach(btn => {
            const key = btn.dataset.mobileKey;
            const press = (e) => {
                e.preventDefault();
                if (e.pointerId !== undefined && btn.setPointerCapture) {
                    try { btn.setPointerCapture(e.pointerId); } catch (_) {}
                }
                btn.classList.add("pressed");
                this.keys[key] = true;
            };
            const release = (e) => {
                if (e) e.preventDefault();
                btn.classList.remove("pressed");
                this.keys[key] = false;
            };
            btn.addEventListener("pointerdown", press, { passive: false });
            ["pointerup", "pointercancel", "pointerleave", "lostpointercapture"].forEach(type => {
                btn.addEventListener(type, release, { passive: false });
            });
            // Запасной вариант для старых мобильных браузеров без Pointer Events
            btn.addEventListener("touchstart", press, { passive: false });
            ["touchend", "touchcancel"].forEach(type => btn.addEventListener(type, release, { passive: false }));
        });

        // Перетаскивание пальцем по игровому полю: ракета летит к пальцу.
        const c = this.canvas;
        if (!c) return;
        let dragPointer = null;
        const toCanvas = (e) => {
            const r = c.getBoundingClientRect();
            return { x: e.clientX - r.left, y: e.clientY - r.top };
        };
        c.addEventListener('pointerdown', (e) => {
            if (!isTouch) return;
            // На гибридных устройствах мышь оставляем клавиатуре, палец/перо — перетаскиванию
            if (e.pointerType === 'mouse') return;
            dragPointer = e.pointerId;
            try { c.setPointerCapture(e.pointerId); } catch (err) { /* не критично */ }
            this.dragTarget = toCanvas(e);
        });
        c.addEventListener('pointermove', (e) => {
            if (dragPointer !== e.pointerId) return;
            this.dragTarget = toCanvas(e);
        });
        const endDrag = (e) => {
            if (dragPointer !== e.pointerId) return;
            dragPointer = null;
            this.dragTarget = null;
        };
        c.addEventListener('pointerup', endDrag);
        c.addEventListener('pointercancel', endDrag);
    },

    resize() {
        if (!this.canvas) return;
        const rect = this.canvas.getBoundingClientRect();
        // Если canvas не виден (display: none у родителя), размеры = 0
        // Используем размеры окна как запасной вариант
        if (rect.width === 0 || rect.height === 0) {
            this.width = window.innerWidth;
            this.height = window.innerHeight - 60;
        } else {
            this.width = rect.width;
            this.height = rect.height;
        }
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        console.log(`Canvas resized: ${this.width}x${this.height}`);
    },

    generateStars() {
        this.stars = [];
        for (let i = 0; i < 200; i++) {
            this.stars.push({
                x: Math.random() * 2000,
                y: Math.random() * 2000,
                size: Math.random() * 1.5 + 0.5,
                twinkle: Math.random() * Math.PI * 2
            });
        }
    },

    // ============ ЗАПУСК УРОВНЯ ============
    startLevel(levelId, assignmentCode = "") {
        const parsedLvl = typeof parseLevelRef === "function" ? parseLevelRef(levelId) : { levelId };
        levelId = parsedLvl.levelId;
        this.activeAssignmentCode = Storage.normalizeAssignmentCode(assignmentCode);
        this.currentLevel = levelId;
        this.currentTheme = typeof getThemeForLevel === "function" ? getThemeForLevel(levelId) : null;
        this.levelConfig = getLevelConfig(levelId);
        const storyHud = document.getElementById("hud-story");
        if (storyHud) storyHud.textContent = storyText(getStoryChapter(levelId).title);
        this.score = 0;
        this.shield = 30;  // стартовый щит чтобы можно было сразу уничтожать
        this.cityHealth = this.levelConfig.cityHealth;
        this.cityMaxHealth = this.levelConfig.cityHealth;
        this.tasksSolved = 0;
        this.tasksAttempted = 0;
        this.asteroidsDeflected = 0;
        this.asteroidsDestroyed = 0;  // счётчик для триггера заданий
        this.asteroidsResolved = 0;   // сбитые щитом + упавшие: каждые 3 — вопрос
        this.completedTaskIds = [];
        this.failedTaskIds = [];
        // Победа = заданы ВСЕ вопросы темы уровня: считаем пул (темы уровня + задания учителя для этого урока)
        const cfgIdStr = String(levelId);
        const lessonKeyStr = cfgIdStr.indexOf("custom:") === 0 ? cfgIdStr : "lesson:" + cfgIdStr;
        const matchingLevelTasks = Teacher.getAllTasks().filter(t =>
            t.topic === lessonKeyStr || (this.levelConfig.topics || []).includes(t.topic)
        );
        // В пуле теперь 22 задания: 20 основных + 2 бытовых. Порог уровня
        // остаётся 20/20, а практические вопросы гарантированно попадут в эти 20.
        const configuredTaskTotal = Number(this.levelConfig.tasksTotal) || 20;
        // План уровня: 20 случайных заданий из пула темы, собранных при старте.
        // Так каждый заход даёт новый набор, без повторов, со всеми типами заданий.
        // образец из «Теории перед уровнем» не должен попадаться в самом забеге
        const theorySampleId = (window.PQProblemSolver && typeof PQProblemSolver.theorySampleId === "function")
            ? PQProblemSolver.theorySampleId(levelId)
            : "";
        this.taskPlan = typeof Teacher.buildLevelTaskPlan === "function"
            ? Teacher.buildLevelTaskPlan(this.levelConfig, configuredTaskTotal, { exclude: theorySampleId ? [theorySampleId] : [] })
            : [];
        this.levelTasksTotal = this.taskPlan.length > 0
            ? this.taskPlan.length
            : Math.min(configuredTaskTotal, matchingLevelTasks.length);
        this.practicalTaskIds = matchingLevelTasks.filter(t => t.isPractical).map(t => t.id);
        this.lastTaskCloseTime = Date.now();
        this.asteroids = [];
        this.energyOrbs = [];
        this.particles = [];
        this.explosions = [];
        this.shieldWaves = [];
        this.startTime = Date.now();
        this.timeElapsed = 0;
        this.taskTriggeredThisLevel = 0;
        this.isTaskActive = false;
        this.pendingTask = null;
        this.dragTarget = null;  // сброс сенсорного перетаскивания

        // Дизайн ракеты и имя пилота из профиля (РПГ)
        this.rocketStyle = getRocketStyle(Storage.getSettings().rocketStyle);
        this.pilotName = Storage.getSettings().playerName || "";

        // Игрок
        this.player = {
            x: this.width / 2,
            y: this.height - 150,  // Выше от земли, чтобы не сразу задевал купол
            size: 20,
            vx: 0,
            vy: 0,
            color: this.rocketStyle.accent,
            shieldActive: true,  // щит сразу активен
            shieldRadius: 0,
            shieldTarget: 55,  // рабочий радиус: щит не «сдувается» сам
            maxShield: 60  // радиус максимального щита
        };

        // Начальные заряды — больше и разнообразнее
        for (let i = 0; i < 5; i++) this.spawnEnergyOrb();

        this.running = true;
        this.paused = false;
        if (typeof Mechanics !== "undefined") {
            try { Mechanics.setup(this.levelConfig, this); } catch (e) {}
        }
        if (typeof LabGames !== "undefined") {
            LabGames.reset();
            const labBtn = document.getElementById("btn-lab");
            if (labBtn) labBtn.style.display = LabGames.configs[this.currentLevel] ? "" : "none";
            if (LabGames.configs[this.currentLevel]) {
                setTimeout(() => LabGames.tryShow(this.currentLevel, this), 700);
            }
        }
        this.storyOpen = false;
        this.pausedTotal = 0;
        this.pauseStartedAt = 0;
        document.getElementById("pause-overlay").classList.remove("active");

        // Интро босса: оверлей поверх поля. Пока он открыт, мир стоит на паузе —
        // иначе астероиды летят за оверлеем и щит города падает «вслепую».
        // Ставим паузу ПОСЛЕ сброса pausedTotal/pauseStartedAt выше.
        this.bossIntroOpen = false;
        if (this.levelConfig && this.levelConfig.boss && typeof BossIntro !== "undefined" && BossIntro.show) {
            try {
                this.paused = true;
                this.pauseStartedAt = Date.now();
                this.bossIntroOpen = true;
                BossIntro.show(this.currentLevel, this, () => {
                    this.bossIntroOpen = false;
                    if (this.paused) this.resumeGame();
                });
            } catch (e) {
                this.bossIntroOpen = false;
                this.paused = false;
                this.pauseStartedAt = 0;
            }
        }

        // Очистить таймеры предыдущего уровня (перезапуск без endLevel)
        clearInterval(this.asteroidTimer);
        clearInterval(this.energyTimer);
        if (this.firstTaskTimeout) { clearTimeout(this.firstTaskTimeout); this.firstTaskTimeout = null; }
        this.sessionId = (this.sessionId || 0) + 1;

        // Запуск таймеров
        // Спавн: ~1 астероид в 4.2-5.6 с; каждые 3 астероида — вопрос (~1 вопрос в 15 секунд)
        const levelNum = typeof this.currentLevel === "number" ? this.currentLevel : 25;
        const spawnInterval = Math.max(4200, Math.min(5600, 5600 - levelNum * 28));
        // На паузе (интро босса, ручная пауза) новые астероиды не появляются:
        // иначе они копятся за оверлеем и разом обрушиваются после снятия паузы.
        this.asteroidTimer = setInterval(() => {
            if (!this.paused) this.spawnAsteroid();
        }, spawnInterval);
        this.energyTimer = setInterval(() => {
            if (this.paused) return;
            if (this.energyOrbs.length < 7) this.spawnEnergyOrb(); // больше энергии — больше динамики
        }, this.levelConfig.energySpawnRate);
        // В начале уровня сразу небольшой поток астероидов (3 штуки), разнесённых
        // по высоте — прилетают один за другим, игра динамична с первых секунд.
        // Порог удаления «улетевших вверх» — y < -250, поэтому старт не выше -220.
        for (let i = 0; i < 3; i++) {
            this.spawnAsteroid();
            const spawned = this.asteroids[this.asteroids.length - 1];
            if (spawned) spawned.y = -40 - i * 90; // -40, -130, -220
        }

        // Первое задание через 5 секунд после старта.
        // Если мир стоит на паузе/открыт брифинг/уже идёт вопрос — ждём и пробуем снова,
        // чтобы первый вопрос не «прозевал» игрока за оверлеем (брифинг миссии, интро босса).
        const sid = this.sessionId;
        const scheduleFirstTask = (delay) => {
            this.firstTaskTimeout = setTimeout(() => {
                this.firstTaskTimeout = null;
                if (sid !== this.sessionId || !this.running) return;
                if (this.paused || this.isTaskActive || this.storyOpen) {
                    scheduleFirstTask(500);
                    return;
                }
                this.taskTriggeredThisLevel++;
                this.triggerTask();
            }, delay);
        };
        scheduleFirstTask(5000);

        showScreen("game-screen");
        showStoryBriefing(levelId);
        // Дать браузеру отрисовать новый экран, потом resize
        requestAnimationFrame(() => {
            this.resize();
            this.player.x = this.width / 2;
            this.player.y = this.height - 150;
        });
        this.updateHUD();
        this.canvas.focus();
    },

    // Выход из уровня по кнопке ✕ (без победы/поражения)
    exitLevel() {
        this.running = false;
        if (this.storyOpen) closeStoryModal();
        clearInterval(this.asteroidTimer);
        clearInterval(this.energyTimer);
        if (this.firstTaskTimeout) { clearTimeout(this.firstTaskTimeout); this.firstTaskTimeout = null; }
        this.sessionId = (this.sessionId || 0) + 1;
        document.getElementById("task-modal").classList.remove("active");
        this.isTaskActive = false;
        this.currentTask = null;
        this.paused = false;
        this.pausedTotal = 0;
        this.pauseStartedAt = 0;
        document.getElementById("pause-overlay").classList.remove("active");
        this.taskPlan = [];
        showLevelSelect();
    },

    // ============ ПАУЗА ============
    // Пауза доступна только когда НЕТ открытого вопроса (модалка задания
    // сама замораживает мир). Во время вопроса — только предупреждение.
    togglePause() {
        if (!this.running) return;
        if (this.isTaskActive) {
            showNotification(I18n.t("pauseUnavailable"), "warning");
            return;
        }
        if (this.paused) {
            this.resumeGame();
        } else {
            this.pauseGame();
        }
    },

    pauseGame() {
        if (!this.running || this.paused) return;
        this.paused = true;
        this.pauseStartedAt = Date.now();
        // Сбросить «залипшие» клавиши движения, чтобы не рванул после снятия паузы
        this.keys = {};
        this.dragTarget = null;
        document.getElementById("pause-overlay").classList.add("active");
        const btn = document.getElementById("btn-pause");
        if (btn) btn.innerHTML = `▶ <span data-i18n="resume">${I18n.t("resume")}</span>`;
        this.updateHUD();
    },

    resumeGame() {
        if (!this.paused) return;
        this.pausedTotal += Date.now() - this.pauseStartedAt;
        this.pauseStartedAt = 0;
        this.paused = false;
        this.lastTime = performance.now(); // без скачка dt после паузы
        document.getElementById("pause-overlay").classList.remove("active");
        const btn = document.getElementById("btn-pause");
        if (btn) btn.innerHTML = `⏸ <span data-i18n="pause">${I18n.t("pause")}</span>`;
        this.canvas.focus();
    },

    // Подпись текущего уровня: номер или название учительского урока
    currentLevelLabel() {
        const cfg = this.levelConfig;
        if (cfg && cfg.customLesson) return I18n.getLocalized(cfg.customLesson, "name");
        return this.currentLevel;
    },

    endLevel(victory) {
        if (this.autoCloseTimeout) { clearTimeout(this.autoCloseTimeout); this.autoCloseTimeout = null; }
        if (this.storyOpen) closeStoryModal();
        this.running = false;
        clearInterval(this.asteroidTimer);
        clearInterval(this.energyTimer);
        if (this.firstTaskTimeout) { clearTimeout(this.firstTaskTimeout); this.firstTaskTimeout = null; }
        this.sessionId = (this.sessionId || 0) + 1; // отложенные триггеры заданий больше не действительны
        // Закрыть модальное задание, если уровень закончился во время вопроса
        document.getElementById("task-modal").classList.remove("active");
        this.isTaskActive = false;
        this.currentTask = null;
        document.getElementById("pause-overlay").classList.remove("active");
        // Время уровня без учёта пауз
        const pausedNow = this.paused ? (Date.now() - this.pauseStartedAt) : 0;
        this.paused = false;
        const timeMs = Date.now() - this.startTime - this.pausedTotal - pausedNow;
        const accuracy = this.tasksAttempted > 0
            ? Math.round((this.tasksSolved / this.tasksAttempted) * 100)
            : 0;

        const result = {
            level: this.currentLevel,
            levelLabel: this.currentLevelLabel(),
            score: this.score,
            time: timeMs,
            tasksSolved: this.tasksSolved,
            tasksAttempted: this.tasksAttempted,
            tasksTotal: this.levelTasksTotal || (this.levelConfig?.tasksTotal || 0),
            accuracy,
            asteroidsDeflected: this.asteroidsDeflected,
            assignmentCode: this.activeAssignmentCode || "",
            victory
        };

        // История должна знать и об успешных, и о неуспешных завершениях.
        const settings = Storage.getSettings();
        Storage.addPlaythrough({
            ...result,
            level: this.currentLevel,
            levelLabel: this.currentLevelLabel(),
            playerId: settings.playerId,
            name: settings.playerName || I18n.t("anonymous"),
            playerCode: settings.playerCode || "",
            assignmentCode: this.activeAssignmentCode || "",
            language: I18n.currentLang || settings.language || "ru"
        });

        if (victory) {
            // Звёзды: 1 — просто пройдено, 2 — accuracy >= 70%, 3 — accuracy >= 90%
            let stars = 1;
            if (accuracy >= 70) stars = 2;
            if (accuracy >= 90) stars = 3;
            result.stars = stars;

            Storage.saveLevelResult(this.currentLevel, {
                score: this.score,
                time: timeMs,
                tasksSolved: this.tasksSolved,
                accuracy,
                stars
            });

            this.showVictory(result);
            if (typeof Diary !== "undefined" && Diary.tryAutoShow) {
                try { Diary.tryAutoShow(this.currentLevel); } catch (e) {}
            }
        } else {
            this.showGameOver(result);
        }
    },

    showVictory(result) {
        const stars = "⭐".repeat(result.stars || 1) + "☆".repeat(3 - (result.stars || 1));
        const chapter = getStoryChapter(this.currentLevel);
        const storyBox = document.getElementById("victory-story");
        if (storyBox) storyBox.innerHTML = `<strong>${escapeHtml(storyText(chapter.title))}</strong><br>${escapeHtml(storyText(chapter.victory))}`;
        const stats = document.getElementById("victory-stats");
        const pname = this.pilotName ? escapeHtml(this.pilotName) : I18n.t("anonymous");
        stats.innerHTML = `
            <div class="stat-line"><span class="stat-line-label">👨‍🚀 ${I18n.t("pilot")}</span><span class="stat-line-value">${pname}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("finalScore")}</span><span class="stat-line-value">${result.score}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("asteroidsDefeated")}</span><span class="stat-line-value">${result.asteroidsDeflected}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("tasksSolved")}</span><span class="stat-line-value">${result.tasksSolved}/${result.tasksAttempted}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("accuracyStat")}</span><span class="stat-line-value">${result.accuracy}%</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("timePlayed")}</span><span class="stat-line-value">${formatTime(result.time)}</span></div>
            <div class="stat-line" style="border:none"><span class="stat-line-label">${I18n.t("starsLabel")}</span><span class="stat-line-value" style="font-size:20px">${stars}</span></div>
        `;

        // Скрыть кнопку следующего уровня если это последний (или урок учителя)
        const nextBtn = document.getElementById("btn-next-level");
        if (typeof this.currentLevel !== "number" || this.currentLevel >= LEVELS_CONFIG.length) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "inline-flex";
        }

        showScreen("victory-screen");
    },

    showGameOver(result) {
        const chapter = getStoryChapter(this.currentLevel);
        const storyBox = document.getElementById("gameover-story");
        if (storyBox) storyBox.innerHTML = `<strong>${escapeHtml(storyText(chapter.title))}</strong><br>${escapeHtml(storyText(chapter.defeat))}`;
        const stats = document.getElementById("gameover-stats");
        stats.innerHTML = `
            <div class="stat-line"><span class="stat-line-label">${I18n.t("finalScore")}</span><span class="stat-line-value">${result.score}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("asteroidsDefeated")}</span><span class="stat-line-value">${result.asteroidsDeflected}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("tasksSolved")}</span><span class="stat-line-value">${result.tasksSolved}/${result.tasksAttempted}</span></div>
            <div class="stat-line"><span class="stat-line-label">${I18n.t("timePlayed")}</span><span class="stat-line-value">${formatTime(result.time)}</span></div>
        `;
        showScreen("gameover-screen");
    },

    // ============ СПАВН ОБЪЕКТОВ ============
    spawnAsteroid() {
        if (!this.running || this.isTaskActive) return;
        if (this.asteroids.length >= MAX_ASTEROIDS_ON_SCREEN) return; // лимит астероидов на экране
        const x = Math.random() * (this.width - 40) + 20;
        // Скорость растёт по ходу уровня: в начале медленнее (0.7x), к 3-й минуте быстрее базовой (1.35x)
        const prog = Math.min(1, this.timeElapsed / 180000);
        const speedMul = 0.7 + 0.65 * prog;
        const speed = this.levelConfig.asteroidSpeed * speedMul * (0.95 + Math.random() * 0.1);
        this.asteroids.push({
            x, y: -40,
            vx: (Math.random() - 0.5) * 1.1,
            vy: speed,
            radius: 20 + Math.random() * 16, // крупные астероиды: 20-36 px
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 0.05,
            color: `hsl(${20 + Math.random() * 20}, 70%, 50%)`,
            hp: 1,
            onGround: false,
            landTimer: 0
        });
    },

    spawnEnergyOrb() {
        const x = Math.random() * (this.width - 60) + 30;
        const y = Math.random() * (this.height - 200) + 80;
        const types = ["kinetic", "potential", "thermal"];
        const type = types[Math.floor(Math.random() * types.length)];
        this.energyOrbs.push({
            x, y,
            radius: 12,
            type,
            pulse: 0,
            collected: false
        });
    },


    // ============ ЗАДАНИЯ ============
    triggerTask() {
        if (this.isTaskActive) return;
        const askedIds = new Set([...this.completedTaskIds, ...this.failedTaskIds]);
        // Основной путь — план уровня (20 случайных заданий, выбранных при старте):
        // задания не повторяются, все типы встречаются хотя бы раз.
        if (Array.isArray(this.taskPlan) && this.taskPlan.length) {
            const next = this.taskPlan.find(t => !askedIds.has(t.id));
            if (next) { this.showTask(next); return; }
            return; // план исчерпан — уровень завершается в closeTask()
        }
        // Резервный путь (учительские уроки без плана и внешние вызовы)
        // Сначала гарантируем два практических бытовых вопроса уровня,
        // затем выдаём остальные задания в обычном порядке.
        const practicalPending = (this.practicalTaskIds || []).filter(id => !askedIds.has(id));
        const task = Teacher.getTaskForLevel(this.levelConfig, this.completedTaskIds, this.failedTaskIds, practicalPending);
        if (!task) return;
        this.showTask(task);
    },

    showTask(task) {
        if (this.autoCloseTimeout) { clearTimeout(this.autoCloseTimeout); this.autoCloseTimeout = null; }
        this.isTaskActive = true;
        this.currentTask = task;
        this.taskAttempts = 0;
        this.taskHintsLeft = 3;
        this.taskResolved = false;

        const modal = document.getElementById("task-modal");
        document.getElementById("task-title").textContent = I18n.t("task") + " #" + (this.completedTaskIds.length + 1);
        document.getElementById("task-type-badge").textContent = I18n.t(i18nTypeKey(task.type));

        // Рендер тела задания
        this.renderTaskBody(task);

        // Сброс feedback (в т.ч. инлайновых стилей от подсказки)
        const feedback = document.getElementById("task-feedback");
        feedback.className = "task-feedback";
        feedback.textContent = "";
        feedback.removeAttribute("style");

        // Статистика попыток
        this.updateTaskStats();

        // Кнопка submit
        const submitBtn = document.getElementById("btn-submit");
        submitBtn.textContent = I18n.t("submit");
        submitBtn.disabled = false;
        submitBtn.onclick = () => this.checkAnswer();

        // Кнопка подсказки
        const hintBtn = document.getElementById("btn-hint");
        hintBtn.disabled = false;
        hintBtn.onclick = () => this.useHint();

        modal.classList.add("active");
    },

    renderTaskBody(task) {
        const body = document.getElementById("task-body");
        const question = I18n.getLocalized(task, "question");
        let html = `<div>${formatFormula(question)}</div>`;

        const formulaText = I18n.getLocalized(task, "formula");
        if (formulaText) {
            html += `<div class="formula">${formatFormula(formulaText)}</div>`;
        }

        switch (task.type) {
            case "multiple-choice":
            case "multi-select": {
                const options = localizeStringList(task.options);
                html += `<div class="answer-options" id="answer-options">`;
                options.forEach((opt, i) => {
                    html += `
                        <div class="answer-option" data-idx="${i}">
                            <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                            <span>${formatFormula(String(opt))}</span>
                        </div>
                    `;
                });
                html += `</div>`;
                if (task.type === "multi-select") {
                    html += `<small style="color: var(--text-dim)">${I18n.t("multiSelectNote")}</small>`;
                }
                break;
            }
            case "short-answer": {
                html += `<input type="text" class="answer-input" id="answer-input" autocomplete="off" placeholder="${escapeHtml(I18n.t("typeWordPlaceholder"))}" />`;
                break;
            }
            case "numeric": {
                html += `<input type="text" class="answer-input" id="answer-input" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(I18n.t("numericPlaceholder"))}" />`;
                break;
            }
            case "true-false": {
                html += `<div class="answer-options">
                    <div class="answer-option" data-idx="true"><span class="opt-letter">✓</span><span>${I18n.t("trueLabel")}</span></div>
                    <div class="answer-option" data-idx="false"><span class="opt-letter">×</span><span>${I18n.t("falseLabel")}</span></div>
                </div>`;
                break;
            }
            case "matching": {
                const left = localizeStringList(task.pairs && task.pairs.left);
                const right = localizeStringList(task.pairs && task.pairs.right);
                html += `<div class="matching-pairs">
                    <div class="matching-column" id="match-left">
                        <div class="matching-col-header">${I18n.t("leftColumn")}</div>`;
                left.forEach((item, i) => {
                    html += `<div class="matching-item" data-col="left" data-idx="${i}">${formatFormula(String(item))}</div>`;
                });
                html += `</div><div class="matching-column" id="match-right">
                        <div class="matching-col-header">${I18n.t("rightColumn")}</div>`;
                // Перемешать правую колонку (data-idx сохраняет исходный индекс)
                const shuffled = right.map((v, i) => ({ v, i })).sort(() => Math.random() - 0.5);
                shuffled.forEach(({ v, i }) => {
                    html += `<div class="matching-item" data-col="right" data-idx="${i}">${formatFormula(String(v))}</div>`;
                });
                html += `</div></div>
                <small style="color: var(--text-dim)">${I18n.t("matchingNote")}</small>`;
                break;
            }
            case "fill-blank": {
                html += `<input type="text" class="answer-input" id="answer-input" autocomplete="off" placeholder="${escapeHtml(I18n.t("fillBlankPlaceholder"))}" />`;
                break;
            }
        }

        body.innerHTML = html;

        // Обработчики в зависимости от типа
        if (task.type === "multiple-choice") {
            body.querySelectorAll(".answer-option").forEach(opt => {
                opt.addEventListener("click", () => {
                    body.querySelectorAll(".answer-option").forEach(o => o.classList.remove("selected"));
                    opt.classList.add("selected");
                });
            });
        } else if (task.type === "multi-select") {
            body.querySelectorAll(".answer-option").forEach(opt => {
                opt.addEventListener("click", () => opt.classList.toggle("selected"));
            });
        } else if (task.type === "true-false") {
            body.querySelectorAll(".answer-option").forEach(opt => {
                opt.addEventListener("click", () => {
                    body.querySelectorAll(".answer-option").forEach(o => o.classList.remove("selected"));
                    opt.classList.add("selected");
                });
            });
        } else if (task.type === "matching") {
            this.initMatching();
        } else {
            const input = body.querySelector("#answer-input");
            if (input) {
                input.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") this.checkAnswer();
                });
                setTimeout(() => input.focus(), 100);
            }
        }
    },

    matchingState: { selected: null, pairs: [] },
    // Таймер автозакрытия модалки задания (отслеживается, чтобы не срабатывал «призраком»)
    autoCloseTimeout: null,

    initMatching() {
        this.matchingState = { selected: null, pairs: [] };
        const body = document.getElementById("task-body");
        body.querySelectorAll(".matching-item").forEach(item => {
            item.addEventListener("click", () => this.handleMatchingClick(item));
        });
    },

    handleMatchingClick(item) {
        if (item.classList.contains("matched")) return;
        const col = item.dataset.col;
        const idx = parseInt(item.dataset.idx, 10);

        if (this.matchingState.selected === null) {
            // Первый выбор
            this.matchingState.selected = { col, idx, el: item };
            item.classList.add("selected");
        } else {
            const first = this.matchingState.selected;
            if (first.col === col) {
                // Тот же столбец — переключаем выбор
                first.el.classList.remove("selected");
                this.matchingState.selected = { col, idx, el: item };
                item.classList.add("selected");
                return;
            }
            // Создать пару
            const leftIdx = col === "left" ? idx : first.idx;
            const rightIdx = col === "right" ? idx : first.idx;

            this.matchingState.pairs.push({ left: leftIdx, right: rightIdx });
            item.classList.add("matched");
            first.el.classList.add("matched");
            item.classList.remove("selected");
            first.el.classList.remove("selected");
            this.matchingState.selected = null;

            // Проверить, все ли пары составлены
            const total = document.querySelectorAll("#match-left .matching-item").length;
            if (this.matchingState.pairs.length === total) {
                this.checkAnswer();
            }
        }
    },

    // Сброс взаимодействия после неверного ответа (для повторной попытки)
    resetTaskInteraction() {
        const body = document.getElementById("task-body");
        if (!this.currentTask) return;
        if (this.currentTask.type === "matching") {
            // Полный перерендер: пары перемешиваются заново
            this.renderTaskBody(this.currentTask);
        } else {
            body.querySelectorAll(".answer-option.selected").forEach(o => o.classList.remove("selected"));
            const input = body.querySelector("#answer-input");
            if (input) { input.value = ""; setTimeout(() => input.focus(), 50); }
        }
    },

    useHint() {
        if (this.taskHintsLeft <= 0 || !this.currentTask) return;
        this.taskHintsLeft--;
        const hintText = I18n.getLocalized(this.currentTask, "hint");
        let hintHtml;
        if (hintText) {
            hintHtml = formatFormula(hintText);
        } else if (I18n.getLocalized(this.currentTask, "formula")) {
            // formatFormula уже экранирует текст и подставляет <sub>,
            // поэтому здесь нельзя ещё раз прогонять через escapeHtml.
            hintHtml = `${escapeHtml(I18n.t("hintFormula"))}: ${formatFormula(I18n.getLocalized(this.currentTask, "formula"))}`;
        } else {
            hintHtml = escapeHtml(I18n.t("hintGeneric"));
        }
        const feedback = document.getElementById("task-feedback");
        feedback.className = "task-feedback show";
        feedback.style.background = "rgba(255, 204, 0, 0.15)";
        feedback.style.borderColor = "var(--warning)";
        feedback.style.color = "var(--warning)";
        feedback.innerHTML = `💡 ${hintHtml}`;
        this.updateTaskStats();

        if (this.taskHintsLeft === 0) {
            document.getElementById("btn-hint").disabled = true;
        }
    },

    updateTaskStats() {
        document.getElementById("task-attempts").textContent =
            `${I18n.t("attempts")} ${this.taskAttempts} / ${MAX_TASK_ATTEMPTS}`;
        document.getElementById("task-hint-stat").textContent =
            `${I18n.t("hintsAvailable")} ${this.taskHintsLeft}`;
        // Прогресс: какой по счёту вопрос темы сейчас задан
        const qStat = document.getElementById("task-question-stat");
        if (this.levelTasksTotal > 0) {
            const askedCount = new Set([...this.completedTaskIds, ...this.failedTaskIds]).size;
            qStat.textContent = `${I18n.t("questionProgress")} ${Math.min(askedCount + 1, this.levelTasksTotal)} / ${this.levelTasksTotal}`;
            qStat.style.display = "";
        } else {
            qStat.style.display = "none";
        }
    },

    checkAnswer() {
        if (!this.currentTask) return;
        if (this.taskResolved) return; // задание уже решено или закрыто — не считаем дважды
        if (this.taskAttempts >= MAX_TASK_ATTEMPTS) return; // попытки исчерпаны
        this.taskAttempts++;
        this.tasksAttempted++;
        this.updateTaskStats();

        const isCorrect = this.evaluateAnswer(this.currentTask);
        const feedback = document.getElementById("task-feedback");

        if (isCorrect) {
            feedback.removeAttribute("style");
            feedback.className = "task-feedback show correct";
            feedback.innerHTML = `✓ ${I18n.t("correct")}`;
            if (this.currentTask.explanation) {
                feedback.innerHTML += `<br><strong>${I18n.t("explanation")}</strong> ${formatFormula(I18n.getLocalized(this.currentTask, "explanation"))}`;
            }
            this.tasksSolved++;
            this.taskResolved = true;
            this.completedTaskIds.push(this.currentTask.id);
            Storage.updateStats(true, this.currentTask.topic, this.currentTask.type);

            // Награда
            const reward = 50 + this.currentTask.difficulty * 30;
            this.score += reward;
            this.shield = Math.min(this.shield + 30, this.levelConfig.shieldCapacity);
            // Правильный ответ слегка укрепляет город (+HP, не выше максимума)
            this.cityHealth = Math.min(this.cityMaxHealth, this.cityHealth + CITY_HEAL_PER_CORRECT);
            this.updateHUD(); // баллы обновляются сразу, не дожидаясь закрытия задания
            showNotification(I18n.t("correctAnswerNotif") + ` +${reward} · ${I18n.t("cityHealed", CITY_HEAL_PER_CORRECT)}`, "success");

            // Активация щита
            this.player.shieldActive = true;
            this.player.shieldTarget = 100;
            this.spawnShieldWave();

            // Отключить кнопки
            document.getElementById("btn-submit").disabled = true;
            document.getElementById("btn-hint").disabled = true;

            // Закрыть через 1.8 сек (таймер отслеживается — см. autoCloseTimeout)
            if (this.autoCloseTimeout) clearTimeout(this.autoCloseTimeout);
            this.autoCloseTimeout = setTimeout(() => { this.autoCloseTimeout = null; this.closeTask(true); }, 1800);
        } else {
            const attemptsLeft = MAX_TASK_ATTEMPTS - this.taskAttempts;
            this.cityHealth = Math.max(0, this.cityHealth - 10);
            this.shakeScreen();
            Storage.updateStats(false, this.currentTask.topic, this.currentTask.type);

            if (attemptsLeft <= 0) {
                // Попытки закончились — показываем правильный ответ и закрываем задание
                feedback.removeAttribute("style");
                feedback.className = "task-feedback show wrong";
                feedback.innerHTML =
                    `✗ ${I18n.t("outOfAttempts")}<br>` +
                    `<strong>${I18n.t("correctAnswerIs")}</strong> ${formatFormula(this.getCorrectAnswerText(this.currentTask))}`;
                if (this.currentTask.explanation) {
                    feedback.innerHTML += `<br><strong>${I18n.t("explanation")}</strong> ${formatFormula(I18n.getLocalized(this.currentTask, "explanation"))}`;
                }
                this.taskResolved = true;
                if (!this.failedTaskIds.includes(this.currentTask.id)) {
                    this.failedTaskIds.push(this.currentTask.id);
                }
                document.getElementById("btn-submit").disabled = true;
                document.getElementById("btn-hint").disabled = true;
                showNotification(I18n.t("outOfAttempts"), "error");
                if (this.cityHealth <= 0) {
                    this.closeTask(false);
                    setTimeout(() => this.endLevel(false), 300);
                } else {
                    if (this.autoCloseTimeout) clearTimeout(this.autoCloseTimeout);
                    this.autoCloseTimeout = setTimeout(() => { this.autoCloseTimeout = null; this.closeTask(false); }, 4000);
                }
                return;
            }

            feedback.removeAttribute("style");
            feedback.className = "task-feedback show wrong";
            // На попытках 1–4 — только «Неверно» и остаток попыток.
            // Правильный ответ и пояснение показываем лишь после 5-й неверной
            // попытки (ветка attemptsLeft <= 0 ниже).
            feedback.innerHTML = `✗ ${I18n.t("wrong")} · ${I18n.t("attemptsLeft", attemptsLeft)}`;
            // Урон городу
            showNotification(I18n.t("wrongAnswer"), "error");
            // Сбросить выбор/пары для новой попытки
            this.resetTaskInteraction();

            if (this.cityHealth <= 0) {
                this.closeTask(false);
                setTimeout(() => this.endLevel(false), 300);
            }
        }
    },

    // Человекочитаемый правильный ответ (для показа после 5 неудачных попыток)
    getCorrectAnswerText(task) {
        switch (task.type) {
            case "multiple-choice": {
                const opts = localizeStringList(task.options);
                const i = task.correctAnswer;
                return `${String.fromCharCode(65 + i)}. ${opts[i] || ""}`;
            }
            case "multi-select": {
                const opts = localizeStringList(task.options);
                return (task.correctAnswer || []).map(i => `${String.fromCharCode(65 + i)}. ${opts[i] || ""}`).join("; ");
            }
            case "true-false":
                return task.correctAnswer ? I18n.t("trueLabel") : I18n.t("falseLabel");
            case "numeric":
                return String(task.correctAnswer);
            case "short-answer": {
                const ca = task.correctAnswer;
                if (typeof ca === "string") return ca;
                const list = (ca && (ca[I18n.currentLang] || ca.ru)) || [];
                return Array.isArray(list) ? list[0] : String(list);
            }
            case "fill-blank":
                return localizeAnswerValues(task.correctAnswer).join(" / ");
            case "matching": {
                const left = localizeStringList(task.pairs && task.pairs.left);
                const right = localizeStringList(task.pairs && task.pairs.right);
                return (task.correctPairs || []).map(p => `${left[p[0]]} ↔ ${right[p[1]]}`).join("; ");
            }
        }
        return "";
    },

    evaluateAnswer(task) {
        switch (task.type) {
            case "multiple-choice": {
                const selected = document.querySelector(".answer-option.selected");
                if (!selected) return false;
                return parseInt(selected.dataset.idx, 10) === task.correctAnswer;
            }
            case "multi-select": {
                const selected = [...document.querySelectorAll(".answer-option.selected")].map(el => parseInt(el.dataset.idx, 10));
                const correct = task.correctAnswer;
                if (selected.length !== correct.length) return false;
                return selected.every(s => correct.includes(s));
            }
            case "short-answer": {
                const input = document.getElementById("answer-input");
                if (!input) return false;
                const val = normalizeAnswerText(input.value);
                if (!val) return false;
                const ca = task.correctAnswer;
                let correct;
                if (typeof ca === "string") correct = [ca];
                else if (Array.isArray(ca)) correct = ca;
                else correct = (ca && (ca[I18n.currentLang] || ca.ru)) || [];
                if (typeof correct === "string") correct = [correct];
                // Пробелы теперь вводятся: сравниваем нормализованно (регистр, ё, двойные пробелы)
                return correct.some(ans => normalizeAnswerText(ans) === val);
            }
            case "numeric": {
                const input = document.getElementById("answer-input");
                if (!input) return false;
                // Принимаем и точку, и запятую: 0.5 и 0,5 равнозначны
                const raw = String(input.value).trim().replace(/\s+/g, "").replace(",", ".");
                const val = parseFloat(raw);
                if (isNaN(val)) return false;
                const tol = typeof task.tolerance === "number" ? task.tolerance : 0.1;
                return Math.abs(val - task.correctAnswer) <= tol;
            }
            case "true-false": {
                const selected = document.querySelector(".answer-option.selected");
                if (!selected) return false;
                const val = selected.dataset.idx === "true";
                return val === task.correctAnswer;
            }
            case "matching": {
                if (!task.correctPairs || !Array.isArray(task.correctPairs)) return false;
                if (this.matchingState.pairs.length !== task.correctPairs.length) return false;
                return this.matchingState.pairs.every(p => {
                    return task.correctPairs.some(cp => cp[0] === p.left && cp[1] === p.right);
                });
            }
            case "fill-blank": {
                const fbInput = document.getElementById("answer-input");
                if (!fbInput) return false;
                const val = normalizeAnswerText(fbInput.value);
                if (!val) return false;
                const caList = localizeAnswerValues(task.correctAnswer);
                if (caList.some(ans => normalizeAnswerText(ans) === val)) return true;
                if (task.alternatives) {
                    return localizeAnswerValues(task.alternatives).some(alt => normalizeAnswerText(alt) === val);
                }
                return false;
            }
        }
        return false;
    },

    // Все вопросы уровня заданы: решённые + разобранные после исчерпания попыток
    allLevelTasksAsked() {
        if (!this.levelTasksTotal) return false;
        const asked = new Set([...this.completedTaskIds, ...this.failedTaskIds]);
        return asked.size >= this.levelTasksTotal;
    },

    closeTask(success) {
        if (this.autoCloseTimeout) { clearTimeout(this.autoCloseTimeout); this.autoCloseTimeout = null; }
        document.getElementById("task-modal").classList.remove("active");
        this.isTaskActive = false;
        this.currentTask = null;
        this.updateHUD();
        this.lastTaskCloseTime = Date.now();
        // Победа: заданы все вопросы темы уровня
        if (this.running && this.allLevelTasksAsked()) {
            this.endLevel(true);
        }
    },

    spawnShieldWave() {
        this.shieldWaves.push({
            x: this.player.x,
            y: this.player.y,
            radius: 0,
            maxRadius: 200,
            alpha: 1
        });
        // Звуковой эффект вибрации
        this.shakeAmount = 5;
    },

    shakeScreen() {
        this.shakeAmount = 8;
    },

    shakeAmount: 0,

    // ============ ОБНОВЛЕНИЕ ============
    update(dt) {
        if (!this.running || this.paused) return;

        this.timeElapsed = Date.now() - this.startTime - this.pausedTotal;

        // Пока задание открыто, мир замирает: астероиды, игрок и энергия не двигаются
        if (!this.isTaskActive) {
            // Медленное восстановление энергии щита (+1.5/с) — защита всегда возвращается
            this.shield = Math.min(this.levelConfig.shieldCapacity, this.shield + 1.5 * dt);

            // Обновление игрока
            this.updatePlayer(dt);

            // Астероиды
            if (typeof Mechanics !== "undefined") {
            try { Mechanics.update(this, dt); } catch (e) {}
        }
        this.updateAsteroids(dt);

            // Энергия
            this.updateEnergyOrbs(dt);
        }

        // Частицы
        this.updateParticles(dt);

        // Волны щита
        this.updateShieldWaves(dt);

        // Задания триггерятся каждые 3 астероида (см. registerAsteroidResolved).
        // Страховка темпа (~1 вопрос в 15 с): если вопроса не было 16 с — задать вопрос
        if (!this.isTaskActive && Date.now() - (this.lastTaskCloseTime || this.startTime) > 16000) {
            this.lastTaskCloseTime = Date.now();
            this.taskTriggeredThisLevel++;
            this.triggerTask();
        }

        // Затухание встряски
        if (this.shakeAmount > 0) this.shakeAmount *= 0.9;
        if (this.shakeAmount < 0.1) this.shakeAmount = 0;

        // HUD
        this.updateHUD();
    },

    updatePlayer(dt) {
        const speed = 330; // управление отзывчивее
        let dx = 0, dy = 0;
        if (this.keys["w"] || this.keys["arrowup"] || this.keys["ц"] || this.keys["ц"]) dy -= 1;
        if (this.keys["s"] || this.keys["arrowdown"] || this.keys["ы"] || this.keys["і"]) dy += 1;
        if (this.keys["a"] || this.keys["arrowleft"] || this.keys["ф"] || this.keys["ж"]) dx -= 1;
        if (this.keys["d"] || this.keys["arrowright"] || this.keys["в"] || this.keys["к"]) dx += 1;

        if (this.dragTarget) {
            // Сенсорное перетаскивание: ракета плавно летит к пальцу
            const tx = this.dragTarget.x, ty = this.dragTarget.y;
            const ddx = tx - this.player.x, ddy = ty - this.player.y;
            const dist = Math.hypot(ddx, ddy);
            if (dist > 3) {
                const step = Math.min(dist, speed * 1.35 * dt);
                this.player.x += ddx / dist * step;
                this.player.y += ddy / dist * step;
            }
        } else {
            // Нормализация для диагоналей
            if (dx !== 0 && dy !== 0) {
                dx *= 0.707;
                dy *= 0.707;
            }

            this.player.x += dx * speed * dt;
            this.player.y += dy * speed * dt;
        }

        // Границы
        this.player.x = Math.max(this.player.size, Math.min(this.width - this.player.size, this.player.x));
        this.player.y = Math.max(this.player.size, Math.min(this.height - this.player.size, this.player.y));

        // Щит вокруг игрока: держится, пока есть энергия (this.shield).
        // Раньше щит «сдувался» сам через 2-3 секунды — теперь стабильный радиус ≈55,
        // гаснет только при нулевой энергии и сам восстанавливается вместе с ней.
        if (this.player.shieldActive) {
            this.player.shieldRadius += (this.player.shieldTarget - this.player.shieldRadius) * 0.1;
            // Импульс после верного ответа (цель 100) возвращается к рабочему радиусу, а не к нулю
            if (this.player.shieldTarget > 55 && this.player.shieldRadius > 90) this.player.shieldTarget = 55;
            if (this.shield <= 0) this.player.shieldTarget = 0; // энергия кончилась — щит гаснет
            if (this.player.shieldRadius < 1 && this.player.shieldTarget === 0) this.player.shieldActive = false;
        } else if (this.shield > 0) {
            // Энергия появилась (орб / регенерация / верный ответ) — щит снова включается
            this.player.shieldActive = true;
            this.player.shieldTarget = 55;
        }
    },

    updateAsteroids(dt) {
        const groundY = this.height - 30;
        const cityCenterX = this.width / 2;
        const cityCenterY = groundY - 50;
        const cityRadius = Math.min(this.width * 0.35, 280);

        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const a = this.asteroids[i];
            a.x += a.vx * 60 * dt;
            a.y += a.vy * 60 * dt;
            a.rotation += a.rotationSpeed;

            // === Столкновение с активным щитом игрока ===
            if (this.player.shieldActive && this.player.shieldRadius > 30) {
                const dist = Math.hypot(a.x - this.player.x, a.y - this.player.y);
                if (dist < this.player.shieldRadius + a.radius) {
                    this.deflectAsteroid(a, i);
                    continue;
                }
            }

            // === Физическое столкновение с кораблём игрока ===
            const pdist = Math.hypot(a.x - this.player.x, a.y - this.player.y);
            if (pdist < a.radius + this.player.size) {
                // Отскок астероида от корпуса корабля
                a.vy = -Math.abs(a.vy) * 0.8 - 1;
                a.vx += (Math.random() - 0.5) * 2;
                a.x = this.player.x + (pdist > 0 ? (a.x - this.player.x) / pdist * (this.player.size + a.radius + 2) : 0);
                a.y = this.player.y + (pdist > 0 ? (a.y - this.player.y) / pdist * (this.player.size + a.radius + 2) : 0);
                this.createExplosion(a.x, a.y, "#ffaa00");
                this.shakeAmount = 4;
                showNotification(I18n.t("bounceHit"), "warning");
                continue;
            }

            // === Проверка попадания в защитный купол города ===
            if (!a.onGround) {
                const distToCity = Math.hypot(a.x - cityCenterX, a.y - cityCenterY);
                if (distToCity < cityRadius + a.radius) {
                    // Попал в купол — отскок
                    const angle = Math.atan2(a.y - cityCenterY, a.x - cityCenterX);
                    const overlap = cityRadius + a.radius - distToCity;
                    a.x += Math.cos(angle) * overlap;
                    a.y += Math.sin(angle) * overlap;
                    a.vx = -a.vx * 0.6 + Math.cos(angle) * 2;
                    a.vy = -Math.abs(a.vy) * 0.5 - 1;
                    a.color = "#ffaa44";
                    this.createExplosion(a.x, a.y, "#ffaa00");
                    showNotification(I18n.t("domeHit"), "warning");
                    continue;
                }
            }

            // === Астероид коснулся земли — УРОН ГОРОДУ + штраф ===
            if (a.y >= groundY - a.radius) {
                a.onGround = true;
                a.landTimer += dt;
                a.vy *= 0.5;
                a.vx *= 0.95;
                if (a.landTimer > 0.1) {
                    // Город страдает, только если астероид долетел до него самого.
                    // Падение в стороне от купола безопасно: раньше оно снимало HP,
                    // и здоровье города «просто так» падало между вопросами.
                    const hitCity = Math.abs(a.x - cityCenterX) <= cityRadius;
                    if (hitCity) {
                        const damage = 12;
                        this.cityHealth = Math.max(0, this.cityHealth - damage);
                        this.score = Math.max(0, this.score - 25);
                        this.shakeAmount = 14;
                        this.createExplosion(a.x, groundY, "#ff3366");
                        // Большой взрыв частиц
                        for (let j = 0; j < 25; j++) {
                            const ang = Math.random() * Math.PI * 2;
                            const sp = 1 + Math.random() * 5;
                            this.particles.push({
                                x: a.x, y: groundY,
                                vx: Math.cos(ang) * sp,
                                vy: Math.sin(ang) * sp - 2,
                                life: 1.2,
                                color: ["#ff3366", "#ff6600", "#ffaa00"][Math.floor(Math.random() * 3)],
                                size: 2 + Math.random() * 4
                            });
                        }
                        showNotification(I18n.t("asteroidLandedNear", damage, 25), "error");
                    } else {
                        // Пылевое облако в стороне от города: ни урона, ни штрафа
                        this.shakeAmount = Math.max(this.shakeAmount, 3);
                        this.createExplosion(a.x, groundY, "#8a7f6d");
                        for (let j = 0; j < 8; j++) {
                            const ang = Math.random() * Math.PI * 2;
                            const sp = 0.5 + Math.random() * 2;
                            this.particles.push({
                                x: a.x, y: groundY,
                                vx: Math.cos(ang) * sp,
                                vy: Math.sin(ang) * sp - 1,
                                life: 0.7,
                                color: ["#8a7f6d", "#b3a68f", "#6b6152"][Math.floor(Math.random() * 3)],
                                size: 2 + Math.random() * 3
                            });
                        }
                        showNotification(I18n.t("asteroidLandedFar"), "info");
                    }
                    this.asteroids.splice(i, 1);
                    // Вопрос каждые 3 астероида: считаем оба исхода, темп не сбивается
                    this.registerAsteroidResolved();
                    if (this.cityHealth <= 0) {
                        setTimeout(() => this.endLevel(false), 300);
                    }
                }
                continue;
            }

            // === Ушёл за экран: вниз или ВВЕРХ после отскока от купола/корабля ===
            // Отскочившие вверх ОБЯЗАНЫ удаляться: иначе невидимые астероиды заполняют
            // лимит MAX_ASTEROIDS_ON_SCREEN и спавн (а с ним и вопросы) навсегда останавливается
            if (a.y > this.height + 50) {
                this.asteroids.splice(i, 1);
            } else if (a.y < -250) {
                this.asteroids.splice(i, 1);
                this.registerAsteroidResolved(); // отскок засчитан — темп вопросов сохраняется
            }
        }
    },

    deflectAsteroid(a, i) {
        this.score += 20;
        this.asteroidsDeflected++;
        // Отбитый астероид расходует энергию щита; при нуле щит гаснет до восстановления
        this.shield = Math.max(0, this.shield - 6);
        if (this.shield <= 0) this.player.shieldTarget = 0;
        this.createExplosion(a.x, a.y, "#00ff88");
        this.asteroids.splice(i, 1);
        showNotification(I18n.t("asteroidDeflected", 20), "success");
        // Частицы разлёта
        for (let j = 0; j < 12; j++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 3;
            this.particles.push({
                x: a.x, y: a.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                color: a.color,
                size: 3
            });
        }
        this.registerAsteroidResolved();
    },

    // Астероид сбит щитом или упал на город: каждые ASTEROIDS_PER_TASK — вопрос по физике
    registerAsteroidResolved() {
        this.asteroidsResolved = (this.asteroidsResolved || 0) + 1;
        if (this.asteroidsResolved % ASTEROIDS_PER_TASK === 0) {
            const sid = this.sessionId;
            setTimeout(() => {
                if (sid === this.sessionId && this.running && !this.isTaskActive) {
                    this.taskTriggeredThisLevel++;
                    this.triggerTask();
                }
            }, 800);
        }
    },

    updateEnergyOrbs(dt) {
        for (let i = this.energyOrbs.length - 1; i >= 0; i--) {
            const o = this.energyOrbs[i];
            o.pulse += dt * 3;

            // Сбор
            const dist = Math.hypot(o.x - this.player.x, o.y - this.player.y);
            if (dist < o.radius + this.player.size) {
                this.energyOrbs.splice(i, 1);
                // Бонус-баллы по типу энергии
                const bonusMap = {
                    kinetic:    { points: 10, energy: 20, labelKey: "orbKinetic",    color: "#00d9ff" },
                    potential:  { points: 15, energy: 15, labelKey: "orbPotential",  color: "#ff00aa" },
                    thermal:    { points: 20, energy: 10, labelKey: "orbThermal",    color: "#ffaa00" }
                };
                const bonus = bonusMap[o.type];
                this.score += bonus.points;
                this.shield = Math.min(this.shield + bonus.energy, this.levelConfig.shieldCapacity);
                this.createExplosion(o.x, o.y, bonus.color);
                showNotification(I18n.t(bonus.labelKey, bonus.points), "success");
            }
        }
    },

    updateParticles(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= dt * 1.5;
            if (p.life <= 0) this.particles.splice(i, 1);
        }
    },

    updateShieldWaves(dt) {
        for (let i = this.shieldWaves.length - 1; i >= 0; i--) {
            const w = this.shieldWaves[i];
            w.radius += 250 * dt;
            w.alpha -= dt * 1.2;
            if (w.alpha <= 0) this.shieldWaves.splice(i, 1);
        }
    },

    createExplosion(x, y, color) {
        for (let i = 0; i < 15; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 4;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                color,
                size: 2 + Math.random() * 3
            });
        }
    },

    // ============ HUD ============
    updateHUD() {
        document.getElementById("score-value").textContent = this.score;
        document.getElementById("level-value").textContent = this.currentLevelLabel();
        document.getElementById("shield-value").textContent = Math.round(this.shield);
        const hpPct = Math.max(0, Math.round((this.cityHealth / this.cityMaxHealth) * 100));
        document.getElementById("city-health-fill").style.width = hpPct + "%";
        document.getElementById("city-health-value").textContent = hpPct + "%";
        if (hpPct < 30) {
            document.getElementById("city-health-fill").style.background = "linear-gradient(90deg, var(--danger), #ff6600)";
        } else if (hpPct < 60) {
            document.getElementById("city-health-fill").style.background = "linear-gradient(90deg, var(--warning), var(--accent))";
        } else {
            document.getElementById("city-health-fill").style.background = "linear-gradient(90deg, var(--success), var(--accent))";
        }
        document.getElementById("time-value").textContent = formatTimeShort(this.timeElapsed);
    },

    // ============ РЕНДЕР ============
    render() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        ctx.save();

        // Встряска экрана
        if (this.shakeAmount > 0) {
            ctx.translate(
                (Math.random() - 0.5) * this.shakeAmount,
                (Math.random() - 0.5) * this.shakeAmount
            );
        }

        // Фон — тематический мир уровня (shared/level-themes.js).
        // Если темы недоступны, рисуем классическое звёздное небо.
        const time = Date.now() / 1000;
        const themed = !!(window.LevelThemes && window.LevelThemes.drawBackground(ctx, this));
        if (!themed) {
            ctx.fillStyle = "#050818";
            ctx.fillRect(-50, -50, this.width + 100, this.height + 100);
            this.stars.forEach(s => {
                const alpha = 0.4 + Math.sin(time * 2 + s.twinkle) * 0.3;
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(s.x % this.width, s.y % this.height, s.size, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        // Город (внизу)
        this.drawCity(ctx);

        // Астероиды
        this.asteroids.forEach(a => {
            ctx.save();
            ctx.translate(a.x, a.y);
            ctx.rotate(a.rotation);
            // Тень
            ctx.shadowColor = a.color;
            ctx.shadowBlur = 20;
            // Тело
            ctx.fillStyle = a.color;
            ctx.beginPath();
            const points = 8;
            for (let i = 0; i < points; i++) {
                const angle = (i / points) * Math.PI * 2;
                const r = a.radius * (0.8 + Math.sin(i * 1.7) * 0.2);
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            // Кратер
            ctx.fillStyle = "rgba(0,0,0,0.3)";
            ctx.beginPath();
            ctx.arc(-a.radius * 0.3, -a.radius * 0.2, a.radius * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        // Энергетические заряды
        this.energyOrbs.forEach(o => {
            const scale = 1 + Math.sin(o.pulse) * 0.2;
            const r = o.radius * scale;
            const colorMap = { kinetic: "#00d9ff", potential: "#ff00aa", thermal: "#ffaa00" };
            const color = colorMap[o.type];
            // Свечение
            ctx.shadowColor = color;
            ctx.shadowBlur = 25;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(o.x, o.y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            // Внутренний круг
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.beginPath();
            ctx.arc(o.x - r * 0.3, o.y - r * 0.3, r * 0.3, 0, Math.PI * 2);
            ctx.fill();
            // Символ типа
            ctx.fillStyle = "rgba(0,0,0,0.7)";
            ctx.font = "bold 10px monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const sym = { kinetic: "Eₖ", potential: "Eₚ", thermal: "Q" }[o.type];
            ctx.fillText(sym, o.x, o.y);
        });

        // Игрок
        this.drawPlayer(ctx);

        // Частицы
        this.particles.forEach(p => {
            ctx.globalAlpha = p.life;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        // Волны щита
        this.shieldWaves.forEach(w => {
            ctx.strokeStyle = `rgba(0, 217, 255, ${w.alpha})`;
            ctx.lineWidth = 3;
            ctx.shadowColor = "#00d9ff";
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
            ctx.stroke();
        });
        ctx.shadowBlur = 0;

        ctx.restore();

        // Мини-карта
        this.renderMinimap();
    },

    drawCity(ctx) {
        const groundY = this.height - 30;
        const baseX = this.width / 2;

        // === ЗАЩИТНЫЙ КУПОЛ (большой щит) ===
        const cityRadius = Math.min(this.width * 0.35, 280);
        const cityCenterY = groundY - 50;
        const hpPct = this.cityHealth / this.cityMaxHealth;
        const domeColor = hpPct > 0.6 ? "#00d9ff" : hpPct > 0.3 ? "#ffaa00" : "#ff3366";

        // Свечение под куполом
        const glowGrad = ctx.createRadialGradient(baseX, cityCenterY, 0, baseX, cityCenterY, cityRadius);
        glowGrad.addColorStop(0, `${domeColor}33`);
        glowGrad.addColorStop(0.7, `${domeColor}11`);
        glowGrad.addColorStop(1, "transparent");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(baseX - cityRadius, cityCenterY - cityRadius, cityRadius * 2, cityRadius * 2);

        // Купол (полусфера)
        ctx.save();
        ctx.beginPath();
        ctx.arc(baseX, cityCenterY, cityRadius, Math.PI, 0, false);
        ctx.closePath();
        ctx.clip();

        // Градиент неба под куполом
        const insideGrad = ctx.createLinearGradient(baseX, cityCenterY - cityRadius, baseX, cityCenterY);
        insideGrad.addColorStop(0, "rgba(10, 18, 53, 0.85)");
        insideGrad.addColorStop(1, "rgba(20, 30, 60, 0.95)");
        ctx.fillStyle = insideGrad;
        ctx.fillRect(baseX - cityRadius, cityCenterY - cityRadius, cityRadius * 2, cityRadius);

        // Здания внутри купола
        const cityBuildings = [
            { ox: -120, w: 50, h: 90 },
            { ox: -60,  w: 45, h: 130 },
            { ox: -5,   w: 55, h: 150 },
            { ox: 55,   w: 50, h: 110 },
            { ox: 110,  w: 45, h: 95 }
        ];
        cityBuildings.forEach(b => {
            const bx = baseX + b.ox;
            const by = groundY - 10;
            ctx.fillStyle = "rgba(20, 30, 60, 1)";
            ctx.fillRect(bx, by - b.h, b.w, b.h);
            // Окна
            ctx.fillStyle = domeColor;
            ctx.shadowColor = domeColor;
            ctx.shadowBlur = 4;
            for (let yy = by - b.h + 8; yy < by - 6; yy += 12) {
                for (let xx = bx + 4; xx < bx + b.w - 3; xx += 10) {
                    if (Math.random() > 0.25) ctx.fillRect(xx, yy, 5, 7);
                }
            }
            ctx.shadowBlur = 0;
        });
        ctx.restore();

        // === ОБОД КУПОЛА ===
        ctx.beginPath();
        ctx.arc(baseX, cityCenterY, cityRadius, Math.PI, 0, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = domeColor;
        ctx.shadowColor = domeColor;
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Энергетические узлы на ободе
        for (let i = 0; i < 8; i++) {
            const angle = Math.PI + (i / 7) * Math.PI;
            const nx = baseX + Math.cos(angle) * cityRadius;
            const ny = cityCenterY + Math.sin(angle) * cityRadius;
            ctx.fillStyle = domeColor;
            ctx.shadowColor = domeColor;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(nx, ny, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.shadowBlur = 0;

        // === ОСНОВАНИЕ (платформа города) ===
        ctx.fillStyle = "rgba(20, 30, 60, 0.9)";
        ctx.beginPath();
        ctx.moveTo(baseX - cityRadius - 20, groundY);
        ctx.lineTo(baseX - cityRadius + 10, groundY - 15);
        ctx.lineTo(baseX + cityRadius - 10, groundY - 15);
        ctx.lineTo(baseX + cityRadius + 20, groundY);
        ctx.closePath();
        ctx.fill();

        // Светящийся обод платформы
        ctx.strokeStyle = domeColor;
        ctx.lineWidth = 2;
        ctx.shadowColor = domeColor;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(baseX - cityRadius + 10, groundY - 15);
        ctx.lineTo(baseX + cityRadius - 10, groundY - 15);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // === ЗЕМЛЯ / ПОВЕРХНОСТЬ ===
        const groundGrad = ctx.createLinearGradient(0, groundY, 0, this.height);
        groundGrad.addColorStop(0, "rgba(10, 14, 39, 0.9)");
        groundGrad.addColorStop(1, "rgba(5, 8, 24, 1)");
        ctx.fillStyle = groundGrad;
        ctx.fillRect(0, groundY, this.width, this.height - groundY);

        // Сетка на земле для sci-fi эффекта
        ctx.strokeStyle = "rgba(0, 217, 255, 0.15)";
        ctx.lineWidth = 1;
        for (let x = 0; x < this.width; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, groundY);
            ctx.lineTo(x, this.height);
            ctx.stroke();
        }

        // === ИНДИКАТОР ЗДОРОВЬЯ ГОРОДА НАД КУПОЛОМ ===
        if (hpPct < 1) {
            const barWidth = cityRadius * 1.4;
            const barX = baseX - barWidth / 2;
            const barY = cityCenterY - cityRadius - 20;
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fillRect(barX - 2, barY - 2, barWidth + 4, 9);
            ctx.fillStyle = "rgba(50,50,50,0.8)";
            ctx.fillRect(barX, barY, barWidth, 5);
            ctx.fillStyle = domeColor;
            ctx.shadowColor = domeColor;
            ctx.shadowBlur = 6;
            ctx.fillRect(barX, barY, barWidth * hpPct, 5);
            ctx.shadowBlur = 0;
        }
    },

    drawPlayer8(ctx) {
const p = this.player;
        const st = this.rocketStyle || ROCKET_STYLES[0];
        // Щит
        if (p.shieldActive && p.shieldRadius > 5) {
            ctx.strokeStyle = st.accent;
            ctx.globalAlpha = 0.6 + Math.sin(Date.now() / 200) * 0.2;
            ctx.lineWidth = 2;
            ctx.shadowColor = st.accent;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.shieldRadius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            // Шестиугольный узор
            ctx.globalAlpha = 0.2;
            ctx.strokeStyle = st.accent;
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const x1 = p.x + Math.cos(angle) * p.shieldRadius;
                const y1 = p.y + Math.sin(angle) * p.shieldRadius;
                const x2 = p.x + Math.cos(angle + Math.PI / 3) * p.shieldRadius;
                const y2 = p.y + Math.sin(angle + Math.PI / 3) * p.shieldRadius;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
        }

        // Корабль игрока
        ctx.save();
        ctx.translate(p.x, p.y);
        // Двигатель
        if (this.keys["w"] || this.keys["arrowup"] || this.keys["s"] || this.keys["arrowdown"] ||
            this.keys["a"] || this.keys["arrowleft"] || this.keys["d"] || this.keys["arrowright"]) {
            ctx.fillStyle = st.flame;
            ctx.shadowColor = st.accent;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.moveTo(-8, p.size * 0.5);
            ctx.lineTo(0, p.size * 0.5 + 15 + Math.random() * 8);
            ctx.lineTo(8, p.size * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        // Тело: у каждой новой ракеты своя силуэтная форма
        const shape = st.shape || "classic";
        const roundedRect = (x, y, w, h, r) => {
            if (typeof ctx.roundRect === "function") ctx.roundRect(x, y, w, h, r);
            else ctx.rect(x, y, w, h);
        };
        ctx.fillStyle = st.body;
        ctx.shadowColor = st.accent;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        if (shape === "delta") {
            ctx.moveTo(0, -p.size * 1.2);
            ctx.lineTo(p.size * 1.05, p.size * 0.7);
            ctx.lineTo(0, p.size * 0.35);
            ctx.lineTo(-p.size * 1.05, p.size * 0.7);
            ctx.closePath();
        } else if (shape === "explorer") {
            roundedRect(-p.size * 0.55, -p.size * 0.95, p.size * 1.1, p.size * 1.7, p.size * 0.45);
        } else if (shape === "comet") {
            ctx.ellipse(0, 0, p.size * 1.05, p.size * 0.6, -0.55, 0, Math.PI * 2);
        } else if (shape === "lunar") {
            roundedRect(-p.size * 0.72, -p.size * 0.55, p.size * 1.44, p.size * 1.2, 4);
        } else if (shape === "nebula") {
            ctx.ellipse(0, 0, p.size * 1.05, p.size * 0.7, 0, 0, Math.PI * 2);
        } else if (shape === "dragon") {
            ctx.moveTo(0, -p.size * 1.15);
            ctx.lineTo(p.size * 0.35, -p.size * 0.45);
            ctx.lineTo(p.size * 0.9, -p.size * 0.75);
            ctx.lineTo(p.size * 0.65, 0);
            ctx.lineTo(p.size * 0.95, p.size * 0.65);
            ctx.lineTo(0, p.size * 0.35);
            ctx.lineTo(-p.size * 0.95, p.size * 0.65);
            ctx.lineTo(-p.size * 0.65, 0);
            ctx.lineTo(-p.size * 0.9, -p.size * 0.75);
            ctx.lineTo(-p.size * 0.35, -p.size * 0.45);
            ctx.closePath();
        } else if (shape === "scout") {
            ctx.moveTo(0, -p.size * 1.15);
            ctx.lineTo(p.size * 0.65, -p.size * 0.1);
            ctx.lineTo(p.size * 0.65, p.size * 0.75);
            ctx.lineTo(-p.size * 0.65, p.size * 0.75);
            ctx.lineTo(-p.size * 0.65, -p.size * 0.1);
            ctx.closePath();
        } else {
            ctx.moveTo(0, -p.size);
            ctx.lineTo(p.size * 0.8, p.size * 0.6);
            ctx.lineTo(0, p.size * 0.4);
            ctx.lineTo(-p.size * 0.8, p.size * 0.6);
            ctx.closePath();
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Декоративные детали силуэта
        ctx.strokeStyle = st.accent;
        ctx.lineWidth = 1.5;
        if (shape === "nebula") {
            ctx.beginPath(); ctx.ellipse(0, 0, p.size * 1.35, p.size * 0.35, 0, 0, Math.PI * 2); ctx.stroke();
        } else if (shape === "lunar") {
            ctx.beginPath();
            ctx.moveTo(-p.size * .55, p.size * .55); ctx.lineTo(-p.size * .85, p.size * 1.05);
            ctx.moveTo(p.size * .55, p.size * .55); ctx.lineTo(p.size * .85, p.size * 1.05);
            ctx.stroke();
        } else if (shape === "explorer" || shape === "scout") {
            ctx.beginPath(); ctx.moveTo(-p.size * .9, p.size * .15); ctx.lineTo(-p.size * 1.25, p.size * .55);
            ctx.moveTo(p.size * .9, p.size * .15); ctx.lineTo(p.size * 1.25, p.size * .55); ctx.stroke();
        }

        // Кокпит
        ctx.fillStyle = st.cockpit;
        ctx.beginPath();
        if (shape === "lunar") {
            roundedRect(-p.size * .35, -p.size * .58, p.size * .7, p.size * .42, 3);
        } else if (shape === "comet") {
            ctx.arc(p.size * .22, -p.size * .15, 4, 0, Math.PI * 2);
        } else {
            ctx.arc(0, shape === "scout" ? -p.size * .18 : 0, 5, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
    
    },

    drawPlayer9(ctx) {
const p = this.player;
        const st = this.rocketStyle || ROCKET_STYLES[0];
        // Щит
        if (p.shieldActive && p.shieldRadius > 5) {
            ctx.strokeStyle = st.accent;
            ctx.globalAlpha = 0.6 + Math.sin(Date.now() / 200) * 0.2;
            ctx.lineWidth = 2;
            ctx.shadowColor = st.accent;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.shieldRadius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            // Шестиугольный узор
            ctx.globalAlpha = 0.2;
            ctx.strokeStyle = st.accent;
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const x1 = p.x + Math.cos(angle) * p.shieldRadius;
                const y1 = p.y + Math.sin(angle) * p.shieldRadius;
                const x2 = p.x + Math.cos(angle + Math.PI / 3) * p.shieldRadius;
                const y2 = p.y + Math.sin(angle + Math.PI / 3) * p.shieldRadius;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
        }

        // Корабль игрока
        ctx.save();
        ctx.translate(p.x, p.y);
        // Двигатель
        if (this.keys["w"] || this.keys["arrowup"] || this.keys["s"] || this.keys["arrowdown"] ||
            this.keys["a"] || this.keys["arrowleft"] || this.keys["d"] || this.keys["arrowright"]) {
            ctx.fillStyle = st.flame;
            ctx.shadowColor = st.accent;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.moveTo(-8, p.size * 0.5);
            ctx.lineTo(0, p.size * 0.5 + 15 + Math.random() * 8);
            ctx.lineTo(8, p.size * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        // Тело: у каждой новой ракеты своя силуэтная форма
        const shape = st.shape || "classic";
        const roundedRect = (x, y, w, h, r) => {
            if (typeof ctx.roundRect === "function") ctx.roundRect(x, y, w, h, r);
            else ctx.rect(x, y, w, h);
        };
        ctx.fillStyle = st.body;
        ctx.shadowColor = st.accent;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        if (shape === "delta") {
            ctx.moveTo(0, -p.size * 1.2);
            ctx.lineTo(p.size * 1.05, p.size * 0.7);
            ctx.lineTo(0, p.size * 0.35);
            ctx.lineTo(-p.size * 1.05, p.size * 0.7);
            ctx.closePath();
        } else if (shape === "explorer") {
            roundedRect(-p.size * 0.55, -p.size * 0.95, p.size * 1.1, p.size * 1.7, p.size * 0.45);
        } else if (shape === "comet") {
            ctx.ellipse(0, 0, p.size * 1.05, p.size * 0.6, -0.55, 0, Math.PI * 2);
        } else if (shape === "lunar") {
            roundedRect(-p.size * 0.72, -p.size * 0.55, p.size * 1.44, p.size * 1.2, 4);
        } else if (shape === "nebula") {
            ctx.ellipse(0, 0, p.size * 1.05, p.size * 0.7, 0, 0, Math.PI * 2);
        } else if (shape === "dragon") {
            ctx.moveTo(0, -p.size * 1.15);
            ctx.lineTo(p.size * 0.35, -p.size * 0.45);
            ctx.lineTo(p.size * 0.9, -p.size * 0.75);
            ctx.lineTo(p.size * 0.65, 0);
            ctx.lineTo(p.size * 0.95, p.size * 0.65);
            ctx.lineTo(0, p.size * 0.35);
            ctx.lineTo(-p.size * 0.95, p.size * 0.65);
            ctx.lineTo(-p.size * 0.65, 0);
            ctx.lineTo(-p.size * 0.9, -p.size * 0.75);
            ctx.lineTo(-p.size * 0.35, -p.size * 0.45);
            ctx.closePath();
        } else if (shape === "scout") {
            ctx.moveTo(0, -p.size * 1.15);
            ctx.lineTo(p.size * 0.65, -p.size * 0.1);
            ctx.lineTo(p.size * 0.65, p.size * 0.75);
            ctx.lineTo(-p.size * 0.65, p.size * 0.75);
            ctx.lineTo(-p.size * 0.65, -p.size * 0.1);
            ctx.closePath();
        } else if (shape === "temirkazyk") {
            // Темірқазық: четырёхлучевая звезда Полярной звезды
            ctx.moveTo(0, -p.size * 1.3);
            ctx.lineTo(p.size * 0.26, -p.size * 0.26);
            ctx.lineTo(p.size * 1.05, 0);
            ctx.lineTo(p.size * 0.26, p.size * 0.26);
            ctx.lineTo(0, p.size * 0.85);
            ctx.lineTo(-p.size * 0.26, p.size * 0.26);
            ctx.lineTo(-p.size * 1.05, 0);
            ctx.lineTo(-p.size * 0.26, -p.size * 0.26);
            ctx.closePath();
        } else if (shape === "sumbile") {
            // Сүмбіле: вытянутая звезда Сириуса
            ctx.moveTo(0, -p.size * 1.35);
            ctx.lineTo(p.size * 0.2, -p.size * 0.2);
            ctx.lineTo(p.size * 0.85, 0);
            ctx.lineTo(p.size * 0.2, p.size * 0.2);
            ctx.lineTo(0, p.size * 0.75);
            ctx.lineTo(-p.size * 0.2, p.size * 0.2);
            ctx.lineTo(-p.size * 0.85, 0);
            ctx.lineTo(-p.size * 0.2, -p.size * 0.2);
            ctx.closePath();
        } else if (shape === "zheti") {
            // Жеті қарақшы: широкий ковш Большой Медведицы
            ctx.moveTo(0, -p.size * 0.75);
            ctx.lineTo(p.size * 1.15, -p.size * 0.15);
            ctx.lineTo(p.size * 0.75, p.size * 0.7);
            ctx.lineTo(-p.size * 0.75, p.size * 0.7);
            ctx.lineTo(-p.size * 1.15, -p.size * 0.15);
            ctx.closePath();
        } else if (shape === "orion") {
            // Орион: песочные часы созвездия
            ctx.moveTo(0, -p.size * 1.2);
            ctx.lineTo(p.size * 0.75, -p.size * 0.85);
            ctx.lineTo(p.size * 0.3, 0);
            ctx.lineTo(p.size * 0.75, p.size * 0.85);
            ctx.lineTo(-p.size * 0.75, p.size * 0.85);
            ctx.lineTo(-p.size * 0.3, 0);
            ctx.lineTo(-p.size * 0.75, -p.size * 0.85);
            ctx.closePath();
        } else if (shape === "ufo") {
            // НЛО: летающая тарелка
            ctx.ellipse(0, 0, p.size * 1.3, p.size * 0.42, 0, 0, Math.PI * 2);
        } else if (shape === "berkut") {
            // Бүркіт: широкий дельтаплан с «крыльями» беркута
            ctx.moveTo(0, -p.size * 1.1);
            ctx.lineTo(p.size * 0.35, -p.size * 0.3);
            ctx.lineTo(p.size * 1.35, p.size * 0.55);
            ctx.lineTo(p.size * 0.45, p.size * 0.5);
            ctx.lineTo(p.size * 0.25, p.size * 0.85);
            ctx.lineTo(-p.size * 0.25, p.size * 0.85);
            ctx.lineTo(-p.size * 0.45, p.size * 0.5);
            ctx.lineTo(-p.size * 1.35, p.size * 0.55);
            ctx.lineTo(-p.size * 0.35, -p.size * 0.3);
            ctx.closePath();
        } else if (shape === "tulpar") {
            // Тұлпар: стремительный корпус с откинутыми назад крыльями
            ctx.moveTo(0, -p.size * 1.2);
            ctx.lineTo(p.size * 0.3, -p.size * 0.2);
            ctx.lineTo(p.size * 1.1, p.size * 0.15);
            ctx.lineTo(p.size * 0.4, p.size * 0.4);
            ctx.lineTo(p.size * 0.3, p.size * 0.8);
            ctx.lineTo(0, p.size * 0.55);
            ctx.lineTo(-p.size * 0.3, p.size * 0.8);
            ctx.lineTo(-p.size * 0.4, p.size * 0.4);
            ctx.lineTo(-p.size * 1.1, p.size * 0.15);
            ctx.lineTo(-p.size * 0.3, -p.size * 0.2);
            ctx.closePath();
        } else if (shape === "sunkar") {
            // Сұңқар: игольчатый истребитель
            ctx.moveTo(0, -p.size * 1.35);
            ctx.lineTo(p.size * 0.28, p.size * 0.2);
            ctx.lineTo(p.size * 0.75, p.size * 0.8);
            ctx.lineTo(0, p.size * 0.5);
            ctx.lineTo(-p.size * 0.75, p.size * 0.8);
            ctx.lineTo(-p.size * 0.28, p.size * 0.2);
            ctx.closePath();
        } else if (shape === "baiterek") {
            // Байтерек: стройная «башня»
            roundedRect(-p.size * 0.32, -p.size * 0.55, p.size * 0.64, p.size * 1.5, p.size * 0.3);
        } else if (shape === "aral") {
            // Арал: научное судно с солнечными панелями
            roundedRect(-p.size * 0.4, -p.size * 0.9, p.size * 0.8, p.size * 1.7, p.size * 0.35);
        } else if (shape === "kvant") {
            // КВАНТ-1: угловатый стелс-прототип
            ctx.moveTo(0, -p.size * 1.15);
            ctx.lineTo(p.size * 0.55, -p.size * 0.5);
            ctx.lineTo(p.size * 1.15, p.size * 0.7);
            ctx.lineTo(p.size * 0.2, p.size * 0.45);
            ctx.lineTo(0, p.size * 0.75);
            ctx.lineTo(-p.size * 0.2, p.size * 0.45);
            ctx.lineTo(-p.size * 1.15, p.size * 0.7);
            ctx.lineTo(-p.size * 0.55, -p.size * 0.5);
            ctx.closePath();
        } else {
            ctx.moveTo(0, -p.size);
            ctx.lineTo(p.size * 0.8, p.size * 0.6);
            ctx.lineTo(0, p.size * 0.4);
            ctx.lineTo(-p.size * 0.8, p.size * 0.6);
            ctx.closePath();
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Декоративные детали силуэта
        ctx.strokeStyle = st.accent;
        ctx.lineWidth = 1.5;
        if (shape === "nebula") {
            ctx.beginPath(); ctx.ellipse(0, 0, p.size * 1.35, p.size * 0.35, 0, 0, Math.PI * 2); ctx.stroke();
        } else if (shape === "lunar") {
            ctx.beginPath();
            ctx.moveTo(-p.size * .55, p.size * .55); ctx.lineTo(-p.size * .85, p.size * 1.05);
            ctx.moveTo(p.size * .55, p.size * .55); ctx.lineTo(p.size * .85, p.size * 1.05);
            ctx.stroke();
        } else if (shape === "explorer" || shape === "scout") {
            ctx.beginPath(); ctx.moveTo(-p.size * .9, p.size * .15); ctx.lineTo(-p.size * 1.25, p.size * .55);
            ctx.moveTo(p.size * .9, p.size * .15); ctx.lineTo(p.size * 1.25, p.size * .55); ctx.stroke();
        } else if (shape === "baiterek") {
            // крона Байтерека + золотой шар
            ctx.beginPath();
            ctx.moveTo(-p.size * .3, -p.size * .5); ctx.lineTo(-p.size * .6, -p.size * 1.05);
            ctx.moveTo(0, -p.size * .55); ctx.lineTo(0, -p.size * 1.2);
            ctx.moveTo(p.size * .3, -p.size * .5); ctx.lineTo(p.size * .6, -p.size * 1.05);
            ctx.stroke();
            ctx.fillStyle = st.accent;
            ctx.beginPath(); ctx.arc(0, -p.size * 1.25, p.size * .16, 0, Math.PI * 2); ctx.fill();
        } else if (shape === "aral") {
            // солнечные панели
            ctx.beginPath();
            ctx.rect(-p.size * 1.45, -p.size * .28, p.size * 1.0, p.size * .56);
            ctx.rect(p.size * .45, -p.size * .28, p.size * 1.0, p.size * .56);
            ctx.moveTo(-p.size * .95, -p.size * .28); ctx.lineTo(-p.size * .95, p.size * .28);
            ctx.moveTo(p.size * .95, -p.size * .28); ctx.lineTo(p.size * .95, p.size * .28);
            ctx.stroke();
        } else if (shape === "berkut") {
            // «перья» на крыльях
            ctx.beginPath();
            ctx.moveTo(-p.size * 1.0, p.size * .42); ctx.lineTo(-p.size * .75, p.size * .12);
            ctx.moveTo(p.size * 1.0, p.size * .42); ctx.lineTo(p.size * .75, p.size * .12);
            ctx.stroke();
        } else if (shape === "zheti") {
            // семь звёзд ковша
            ctx.fillStyle = st.accent;
            [[-.85,-.1],[-.6,-.35],[-.3,-.5],[0,-.52],[.3,-.5],[.6,-.35],[.85,-.1]].forEach(([dx, dy]) => {
                ctx.beginPath(); ctx.arc(p.size * dx, p.size * dy, 2.2, 0, Math.PI * 2); ctx.fill();
            });
        } else if (shape === "orion") {
            // пояс Ориона: три звезды
            ctx.fillStyle = st.accent;
            [-.32, 0, .32].forEach(dx => {
                ctx.beginPath(); ctx.arc(p.size * dx, 0, 2.4, 0, Math.PI * 2); ctx.fill();
            });
        } else if (shape === "temirkazyk" || shape === "sumbile") {
            // луч сияния
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.0); ctx.lineTo(0, -p.size * 0.5);
            ctx.stroke();
        } else if (shape === "ufo") {
            // зелёные огни по ободу тарелки
            ctx.fillStyle = st.accent;
            [-.85, 0, .85].forEach(dx => {
                ctx.beginPath(); ctx.arc(p.size * dx, p.size * 0.12, 2.4, 0, Math.PI * 2); ctx.fill();
            });
        } else if (shape === "kvant") {
            // неоновые линии корпуса
            ctx.beginPath();
            ctx.moveTo(0, -p.size * .9); ctx.lineTo(0, p.size * .5);
            ctx.moveTo(-p.size * .5, -p.size * .35); ctx.lineTo(-p.size * .85, p.size * .45);
            ctx.moveTo(p.size * .5, -p.size * .35); ctx.lineTo(p.size * .85, p.size * .45);
            ctx.stroke();
        }

        // Кокпит
        ctx.fillStyle = st.cockpit;
        ctx.beginPath();
        if (shape === "lunar") {
            roundedRect(-p.size * .35, -p.size * .58, p.size * .7, p.size * .42, 3);
        } else if (shape === "comet") {
            ctx.arc(p.size * .22, -p.size * .15, 4, 0, Math.PI * 2);
        } else if (shape === "ufo") {
            ctx.arc(0, -p.size * 0.22, p.size * 0.45, Math.PI, Math.PI * 2); // ufo-dome-marker
            ctx.closePath();
        } else if (shape === "zheti") {
            roundedRect(-p.size * .22, -p.size * .38, p.size * .44, p.size * .4, 3);
        } else {
            ctx.arc(0, shape === "scout" ? -p.size * .18 : 0, 5, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
    
    },

    drawPlayer(ctx) {
        const st = getRocketStyle(Storage.getSettings().rocketStyle);
        if (ROCKET_SHAPES_9.has(st && st.shape)) return this.drawPlayer9(ctx);
        return this.drawPlayer8(ctx);
    },

    renderMinimap() {
        if (!this.minimapCtx) return;
        const ctx = this.minimapCtx;
        ctx.fillStyle = "#050818";
        ctx.fillRect(0, 0, 150, 150);

        const scale = 150 / Math.max(this.width, this.height);

        // Астероиды
        ctx.fillStyle = "rgba(255, 80, 50, 0.6)";
        this.asteroids.forEach(a => {
            ctx.fillRect(a.x * scale - 1, a.y * scale - 1, 2, 2);
        });

        // Энергия
        ctx.fillStyle = "rgba(0, 217, 255, 0.8)";
        this.energyOrbs.forEach(o => {
            ctx.fillRect(o.x * scale - 1, o.y * scale - 1, 2, 2);
        });

        // Игрок
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(this.player.x * scale - 2, this.player.y * scale - 2, 4, 4);

        // Город (красная зона внизу)
        ctx.strokeStyle = "rgba(255, 51, 102, 0.5)";
        ctx.beginPath();
        ctx.moveTo(0, (this.height - 40) * scale);
        ctx.lineTo(150, (this.height - 40) * scale);
        ctx.stroke();
    },

    // ============ ГЛАВНЫЙ ЦИКЛ ============
    loop(t) {
        const dt = Math.min((t - this.lastTime) / 1000, 0.05);
        this.lastTime = t;
        if (this.running) {
            this.update(dt);
            this.render();
        }
        requestAnimationFrame((tt) => this.loop(tt));
    }
};


