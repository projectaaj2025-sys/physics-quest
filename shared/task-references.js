/* ============================================================
   Справочные таблицы для заданий.
   Таблица является частью условия и показывается до ответа.
   Формулы и решения в этом файле не хранятся.
   ============================================================ */
(function (global) {
    "use strict";

    const TABLES = {
        density: {
            id: "density",
            caption: { ru: "Плотность веществ", en: "Density of substances", kk: "Заттардың тығыздығы" },
            columns: [
                { ru: "Вещество", en: "Substance", kk: "Зат" },
                { ru: "ρ, кг/м³", en: "ρ, kg/m³", kk: "ρ, кг/м³" }
            ],
            rows: [
                [{ ru: "Воздух", en: "Air", kk: "Ауа" }, { ru: "1,2", en: "1.2", kk: "1,2" }],
                [{ ru: "Лёд", en: "Ice", kk: "Мұз" }, "900"],
                [{ ru: "Вода", en: "Water", kk: "Су" }, "1000"],
                [{ ru: "Алюминий", en: "Aluminium", kk: "Алюминий" }, "2700"],
                [{ ru: "Железо", en: "Iron", kk: "Темір" }, "7800"],
                [{ ru: "Медь", en: "Copper", kk: "Мыс" }, "8900"],
                [{ ru: "Свинец", en: "Lead", kk: "Қорғасын" }, "11300"],
                [{ ru: "Золото", en: "Gold", kk: "Алтын" }, "19300"]
            ]
        },
        thermalConductivity: {
            id: "thermalConductivity",
            caption: { ru: "Теплопроводность веществ", en: "Thermal conductivity of substances", kk: "Заттардың жылу өткізгіштігі" },
            columns: [
                { ru: "Вещество", en: "Substance", kk: "Зат" },
                { ru: "λ, Вт/(м·°C)", en: "λ, W/(m·°C)", kk: "λ, Вт/(м·°C)" }
            ],
            rows: [
                [{ ru: "Металл (железо)", en: "Metal (iron)", kk: "Металл (темір)" }, "80"],
                [{ ru: "Вода", en: "Water", kk: "Су" }, { ru: "0,60", en: "0.60", kk: "0,60" }],
                [{ ru: "Воздух", en: "Air", kk: "Ауа" }, { ru: "0,025", en: "0.025", kk: "0,025" }],
                [{ ru: "Дерево", en: "Wood", kk: "Ағаш" }, { ru: "0,15", en: "0.15", kk: "0,15" }]
            ]
        },
        specificHeat: {
            id: "specificHeat",
            caption: { ru: "Удельная теплоёмкость веществ", en: "Specific heat capacity of substances", kk: "Заттардың меншікті жылу сыйымдылығы" },
            columns: [
                { ru: "Вещество", en: "Substance", kk: "Зат" },
                { ru: "c, Дж/(кг·°C)", en: "c, J/(kg·°C)", kk: "c, Дж/(кг·°C)" }
            ],
            rows: [
                [{ ru: "Железо", en: "Iron", kk: "Темір" }, "460"],
                [{ ru: "Вода", en: "Water", kk: "Су" }, "4200"],
                [{ ru: "Медь", en: "Copper", kk: "Мыс" }, "400"],
                [{ ru: "Свинец", en: "Lead", kk: "Қорғасын" }, "130"]
            ]
        },
        fuelHeat: {
            id: "fuelHeat",
            caption: { ru: "Удельная теплота сгорания топлива", en: "Specific heat of combustion of fuels", kk: "Отынның меншікті жану жылуы" },
            columns: [
                { ru: "Топливо", en: "Fuel", kk: "Отын" },
                { ru: "q, МДж/кг", en: "q, MJ/kg", kk: "q, МДж/кг" }
            ],
            rows: [
                [{ ru: "Дрова", en: "Firewood", kk: "Отын" }, "10"],
                [{ ru: "Каменный уголь", en: "Coal", kk: "Тас көмір" }, "27"],
                [{ ru: "Нефть", en: "Oil", kk: "Мұнай" }, "44"],
                [{ ru: "Водород", en: "Hydrogen", kk: "Сутегі" }, "120"]
            ]
        },
        meltingPoints: {
            id: "meltingPoints",
            caption: { ru: "Температура плавления веществ", en: "Melting points of substances", kk: "Заттардың балқу температурасы" },
            columns: [
                { ru: "Вещество", en: "Substance", kk: "Зат" },
                { ru: "t, °C", en: "t, °C", kk: "t, °C" }
            ],
            rows: [
                [{ ru: "Лёд", en: "Ice", kk: "Мұз" }, "0"],
                [{ ru: "Свинец", en: "Lead", kk: "Қорғасын" }, "327"],
                [{ ru: "Ртуть", en: "Mercury", kk: "Сынап" }, "−39"],
                [{ ru: "Железо", en: "Iron", kk: "Темір" }, "1539"]
            ]
        },
        boilingPoints: {
            id: "boilingPoints",
            caption: { ru: "Температура кипения жидкостей", en: "Boiling points of liquids", kk: "Сұйықтықтардың қайнау температурасы" },
            columns: [
                { ru: "Жидкость", en: "Liquid", kk: "Сұйықтық" },
                { ru: "t, °C", en: "t, °C", kk: "t, °C" }
            ],
            rows: [
                [{ ru: "Вода", en: "Water", kk: "Су" }, "100"],
                [{ ru: "Спирт", en: "Alcohol", kk: "Спирт" }, "78"],
                [{ ru: "Ртуть", en: "Mercury", kk: "Сынап" }, "357"],
                [{ ru: "Эфир", en: "Ether", kk: "Эфир" }, "35"]
            ]
        },
        resistivity: {
            id: "resistivity",
            caption: { ru: "Удельное сопротивление проводников", en: "Resistivity of conductors", kk: "Өткізгіштердің меншікті кедергісі" },
            columns: [
                { ru: "Вещество", en: "Substance", kk: "Зат" },
                { ru: "ρ, Ом·мм²/м", en: "ρ, Ω·mm²/m", kk: "ρ, Ом·мм²/м" }
            ],
            rows: [
                [{ ru: "Серебро", en: "Silver", kk: "Күміс" }, { ru: "0,016", en: "0.016", kk: "0,016" }],
                [{ ru: "Медь", en: "Copper", kk: "Мыс" }, { ru: "0,017", en: "0.017", kk: "0,017" }],
                [{ ru: "Алюминий", en: "Aluminium", kk: "Алюминий" }, { ru: "0,028", en: "0.028", kk: "0,028" }],
                [{ ru: "Железо", en: "Iron", kk: "Темір" }, { ru: "0,10", en: "0.10", kk: "0,10" }]
            ]
        },
        superconductivity: {
            id: "superconductivity",
            caption: { ru: "Критическая температура сверхпроводимости", en: "Critical temperature for superconductivity", kk: "Асқын өткізгіштіктің критикалық температурасы" },
            columns: [
                { ru: "Металл", en: "Metal", kk: "Металл" },
                { ru: "T_кр, К", en: "T_c, K", kk: "T_кр, К" }
            ],
            rows: [
                [{ ru: "Ртуть", en: "Mercury", kk: "Сынап" }, { ru: "4,2", en: "4.2", kk: "4,2" }],
                [{ ru: "Свинец", en: "Lead", kk: "Қорғасын" }, { ru: "7,3", en: "7.3", kk: "7,3" }],
                [{ ru: "Алюминий", en: "Aluminium", kk: "Алюминий" }, { ru: "1,2", en: "1.2", kk: "1,2" }]
            ]
        }
    };

    // Встроенные задания, которым для самостоятельного ответа нужны
    // справочные значения. Пользовательское задание может вместо id
    // передать собственный объект в поле referenceTable.
    const BY_TASK_ID = {
        de2: "density",
        de5: "density",
        de6: "density",
        lab3_7: "density",
        lab6_2: "density",
        g7x_30_5: "density",
        g7x_47_1: "density",
        g7x_47_2: "density",
        p4q5: "thermalConductivity",
        p7q7: "specificHeat",
        p8q4: "fuelHeat",
        p8q14: "fuelHeat",
        p10q11: "meltingPoints",
        p12q12: "boilingPoints",
        p25q13: "resistivity",
        p29q19: "superconductivity"
    };

    function localize(value) {
        if (value === null || value === undefined) return "";
        if (typeof value !== "object") return String(value);
        const lang = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
        return String(value[lang] ?? value.ru ?? value.en ?? value.kk ?? "");
    }

    function getTable(task) {
        if (!task) return null;
        if (task.referenceTable && typeof task.referenceTable === "object") return task.referenceTable;
        const key = typeof task.referenceTable === "string"
            ? task.referenceTable
            : BY_TASK_ID[String(task.id || "")];
        return key && TABLES[key] ? TABLES[key] : null;
    }

    function render(task) {
        const table = getTable(task);
        if (!table || !Array.isArray(table.columns) || !Array.isArray(table.rows)) return "";
        const rich = (value) => typeof formatFormula === "function"
            ? formatFormula(localize(value))
            : localize(value)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;");
        const plain = (value) => localize(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
        const id = plain(table.id || "reference");
        const caption = table.caption ? `<caption>${rich(table.caption)}</caption>` : "";
        const head = table.columns.map(column => `<th scope="col">${rich(column)}</th>`).join("");
        const rows = table.rows.map(row => {
            const cells = Array.isArray(row) ? row : [];
            return `<tr>${cells.map((cell, index) => index === 0
                ? `<th scope="row">${rich(cell)}</th>`
                : `<td>${rich(cell)}</td>`).join("")}</tr>`;
        }).join("");
        return `<div class="task-reference"><table class="task-reference-table" data-reference-table="${id}">${caption}<thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }

    global.PQTaskReferences = Object.freeze({
        tables: TABLES,
        byTaskId: BY_TASK_ID,
        getTable,
        render
    });
})(window);
