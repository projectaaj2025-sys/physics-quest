/* ===== Единая работа с уровнями и ссылками параллелей (7–9) ===== */

function parseLevelRef(ref, defaultGrade) {
    const fallbackGrade = Number(defaultGrade || window.CURRENT_GRADE || 8);
    const raw = String(ref == null ? "" : ref).trim();
    if (raw.indexOf("custom:") === 0) {
        const id = raw.slice(7);
        let lessonGrade = fallbackGrade;
        try {
            const l = (typeof Storage !== "undefined" && Storage.getCustomLessons ? Storage.getCustomLessons(true) : []).find(x => String(x.id) === id);
            if (l && l.grade) lessonGrade = Number(l.grade);
        } catch (_) {}
        return { grade: lessonGrade, levelId: raw, isCustom: true, canonical: raw };
    }
    const gm = raw.match(/^g([789]):(\d+)$/i);
    if (gm) {
        const g = Number(gm[1]);
        const n = Number(gm[2]);
        return { grade: g, levelId: n, isCustom: false, canonical: "g" + g + ":" + n };
    }
    const n = parseInt(raw, 10);
    const lvl = Number.isFinite(n) && n > 0 ? n : 1;
    return { grade: fallbackGrade, levelId: lvl, isCustom: false, canonical: "g" + fallbackGrade + ":" + lvl };
}

function catalogLevelInfo(ref, defaultGrade) {
    const parsed = parseLevelRef(ref, defaultGrade);
    if (parsed.isCustom) return null;
    const cat = window.GRADE_CATALOG && window.GRADE_CATALOG[parsed.grade];
    if (!cat || !Array.isArray(cat.levels)) return null;
    const found = cat.levels.find(l => Number(l.id) === Number(parsed.levelId));
    return found ? { ...found, grade: parsed.grade } : null;
}

function catalogGradePrefix(grade) {
    const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    if (L === "kk") return grade + "-сын.";
    if (L === "en") return "Gr. " + grade;
    return grade + " кл.";
}

function catalogLevelLabel(ref, defaultGrade, includeGrade = true) {
    const parsed = parseLevelRef(ref, defaultGrade);
    const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    if (parsed.isCustom) {
        const id = parsed.levelId.slice(7);
        const lesson = (typeof Storage !== "undefined" && Storage.getCustomLessons ? Storage.getCustomLessons(true) : []).find(x => String(x.id) === id);
        const name = lesson
            ? ((lesson.name && (lesson.name[L] || lesson.name.ru || lesson.name.en || lesson.name.kk)) || id)
            : id;
        return (includeGrade ? "[" + catalogGradePrefix(parsed.grade) + "] " : "") + "📝 " + name;
    }
    const info = catalogLevelInfo(parsed.canonical, parsed.grade);
    if (info) {
        const nm = (info.name && (info.name[L] || info.name.ru)) || ("#" + info.id);
        return (includeGrade ? catalogGradePrefix(info.grade) + " · " : "") + "#" + info.id + " — " + nm;
    }
    return (includeGrade ? catalogGradePrefix(parsed.grade) + " · " : "") + "#" + parsed.levelId;
}

function getStoryChapter(levelId) {
    if (typeof STORY_CHAPTERS === "undefined" || !Array.isArray(STORY_CHAPTERS) || !STORY_CHAPTERS.length) {
        return { id: "default", from: 1, to: 60, title: { ru: "Миссия", en: "Mission", kk: "Миссия" }, intro: {}, narrative: {}, goal: {}, setting: {}, revelations: [], victory: {}, defeat: {} };
    }
    const parsed = parseLevelRef(levelId);
    const numeric = typeof parsed.levelId === "number" ? parsed.levelId : parseInt(parsed.levelId, 10);
    return STORY_CHAPTERS.find(ch => Number.isFinite(numeric) && numeric >= ch.from && numeric <= ch.to)
        || STORY_CHAPTERS[STORY_CHAPTERS.length - 1];
}

function storyText(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    return value[L] || value.ru || value.en || value.kk || "";
}

function getLevelConfig(levelId) {
    const parsed = parseLevelRef(levelId);
    if (parsed.isCustom) {
        const lesson = Storage.getCustomLessons(true).find(l => "custom:" + l.id === parsed.levelId);
        const taskCount = Teacher.getAllTasks().filter(t => t.topic === parsed.levelId).length;
        return {
            id: parsed.levelId,
            topics: [],
            asteroidInterval: 9500, asteroidSpeed: 1.0,
            cityHealth: 100, shieldCapacity: 60,
            tasksToWin: Math.max(1, Math.min(10, taskCount)),
            tasksTotal: Math.max(1, taskCount),
            energySpawnRate: 4000,
            chapter: "custom", kind: "custom",
            description: { key: "" },
            customLesson: lesson || null
        };
    }
    return LEVELS_CONFIG[parsed.levelId - 1] || LEVELS_CONFIG[0];
}

function isLevelAvailable(levelId, explicitGrade) {
    const parsed = parseLevelRef(levelId, explicitGrade);
    if (parsed.isCustom) {
        return (Storage.getCustomLessons(true) || []).some(l => "custom:" + l.id === parsed.levelId);
    }
    const cat = window.GRADE_CATALOG && window.GRADE_CATALOG[parsed.grade];
    const maxLen = (cat && cat.levels && cat.levels.length) || (typeof LEVELS_CONFIG !== "undefined" ? LEVELS_CONFIG.length : 55);
    return Number.isFinite(parsed.levelId) && parsed.levelId >= 1 && parsed.levelId <= maxLen;
}

function getLevelNameKey(levelId) {
    const parsed = parseLevelRef(levelId);
    return `level${parsed.levelId}Name`;
}
