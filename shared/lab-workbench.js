/* ============================================================
   PQ WORKBENCH — «живая» лаборатория для мини-игр 8–9 классов.
   Вместо ползунков ученик работает руками:
     • берёт предметы с полки (гирю, колбу, резистор, магнит) и кладёт их в установку;
     • крутит настоящие ручки-верньеры (drag по кругу);
     • нажимает «Провести опыт» и сам снимает показания приборов (стрелка, шкала);
     • только потом жмёт «Проверить».
   Значения по-прежнему живут в скрытых input'ах #lab-<id>, поэтому
   игровая логика, бонусы и автотесты работают без изменений.
   ============================================================ */
(function () {
    "use strict";

    function lang() {
        if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
        return "ru";
    }
    function tr(ru, kk, en) {
        const l = lang();
        return l === "kk" ? kk : l === "en" ? en : ru;
    }
    function esc(v) {
        return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function pick(o, key) {
        if (!o) return "";
        const l = lang();
        if (l === "kk" && o[key + "Kk"] != null) return o[key + "Kk"];
        if (l === "en" && o[key + "En"] != null) return o[key + "En"];
        return o[key] != null ? o[key] : "";
    }
    function num(v) {
        const l = lang();
        const s = String(v);
        return l === "en" ? s : s.replace(".", ",");
    }

    // Иконка и подпись предмета по смыслу параметра
    const SEMANTICS = [
        { re: /масс|mass|масса|massa/i, icon: "⚖️" },
        { re: /температ|temp|t₁|t2|t₂|нагрев/i, icon: "🌡️" },
        { re: /напряж|voltage|кернеу|\bU\b/i, icon: "🔋" },
        { re: /сопротив|resistance|кедергі|\bR\b/i, icon: "🧱" },
        { re: /ток|current|ток күші|\bI\b/i, icon: "⚡" },
        { re: /врем|time|уақыт|τ/i, icon: "⏱️" },
        { re: /мощност|power|қуат|\bP\b/i, icon: "🔥" },
        { re: /длин|length|ұзындық|\bL\b/i, icon: "📏" },
        { re: /индукц|induction|индукция|\bB\b/i, icon: "🧲" },
        { re: /угол|angle|бұрыш/i, icon: "📐" },
        { re: /теплот|heat|жылу|\bQ\b/i, icon: "♨️" }
    ];
    function iconFor(slider) {
        const text = (pick(slider, "label") || "") + " " + (slider.id || "");
        for (const s of SEMANTICS) if (s.re.test(text)) return s.icon;
        return "🔧";
    }

    function stepsOf(slider) {
        const n = Math.floor((Number(slider.max) - Number(slider.min)) / Number(slider.step) + 1e-6) + 1;
        return Math.max(2, Math.min(80, n));
    }

    function snap(value, slider) {
        const min = Number(slider.min), step = Number(slider.step);
        const v = Math.round((Number(value) - min) / step) * step + min;
        const clamped = Math.min(Number(slider.max), Math.max(min, v));
        const decimals = Math.max(0, String(step).split(".")[1] ? String(step).split(".")[1].length : 0);
        return Number(clamped.toFixed(Math.max(decimals, 2)));
    }

    const Workbench = {
        _root: null,
        _cfg: null,
        _values: null,
        _ran: false,

        css() {
            if (document.getElementById("pqw-css")) return;
            const st = document.createElement("style");
            st.id = "pqw-css";
            st.textContent = `
.pqw { display: grid; gap: 12px; }
.pqw-top { display: grid; grid-template-columns: 188px 1fr; gap: 12px; align-items: stretch; }
.pqw-shelf {
    border-radius: 14px; padding: 10px; display: grid; gap: 7px; align-content: start;
    background: #f6f9fd; border: 1px dashed rgba(20, 80, 140, 0.28);
}
.pqw-shelf-title { font-size: 10.5px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; color: #6b8299; }
.pqw-group { margin-top: 4px; font-size: 11px; font-weight: 800; color: #4d7192; }
.pqw-item {
    display: flex; align-items: center; gap: 8px; padding: 7px 9px; border-radius: 10px; cursor: grab;
    background: #fff; border: 1px solid rgba(20, 80, 140, 0.2); font-size: 12px; font-weight: 700; color: #14365a;
    box-shadow: 0 2px 6px rgba(16, 52, 90, 0.07); user-select: none; touch-action: none;
}
.pqw-item i { font-style: normal; font-size: 15px; }
.pqw-item span.v { margin-left: auto; font-variant-numeric: tabular-nums; color: #0b6fa4; font-weight: 900; }
.pqw-item.active { border-color: #0ea5e9; box-shadow: 0 0 0 2px rgba(14, 165, 233, .22); background: #f0faff; }
.pqw-item.ghost { position: fixed; z-index: 9999; pointer-events: none; opacity: .92; transform: translate(-50%, -50%) scale(1.03); }
.pqw-scene {
    position: relative; border-radius: 16px; padding: 12px 14px; min-height: 190px; overflow: hidden;
    background: linear-gradient(180deg, #fbfdff 0%, #eef5fb 100%);
    border: 1px solid rgba(20, 80, 140, 0.18);
}
.pqw-scene.dragover { border-color: #0ea5e9; box-shadow: inset 0 0 0 2px rgba(14, 165, 233, .25); }
.pqw-scene-title { font-size: 11px; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; color: #5b7municipal; }
.pqw-scene-title { color: #5b7a96; }
.pqw-rig { position: relative; height: 148px; margin-top: 6px; }
.pqw-rig svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.pqw-drop {
    position: absolute; right: 12px; bottom: 12px; width: 168px; min-height: 74px; border-radius: 12px;
    border: 2px dashed rgba(20, 110, 180, 0.35); display: grid; place-items: center; text-align: center;
    font-size: 11.5px; font-weight: 800; color: #6f8aa5; padding: 8px; line-height: 1.35; background: rgba(255,255,255,.55);
}
.pqw-drop.filled { border-style: solid; border-color: rgba(14, 165, 233, .6); color: #0b4f7a; background: #fff; }
.pqw-gauges { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 8px; }
.pqw-gauge {
    display: flex; align-items: center; gap: 9px; padding: 6px 10px 6px 6px; border-radius: 12px;
    background: #fff; border: 1px solid rgba(20, 80, 140, 0.16); box-shadow: 0 2px 8px rgba(16,52,90,.06);
}
.pqw-dial { position: relative; width: 62px; height: 62px; border-radius: 50%;
    background: radial-gradient(circle at 50% 42%, #ffffff 0%, #eef4fa 62%, #dfe9f3 100%);
    border: 2px solid #c7d7e6; flex: none; }
.pqw-dial::after { content: ""; position: absolute; left: 50%; top: 50%; width: 8px; height: 8px; border-radius: 50%;
    transform: translate(-50%, -50%); background: #33526f; }
.pqw-needle { position: absolute; left: 50%; bottom: 50%; width: 2.6px; height: 26px; border-radius: 2px;
    background: linear-gradient(180deg, #e11d48, #b31237); transform-origin: 50% 100%; transform: translateX(-50%) rotate(-115deg);
    transition: transform .5s cubic-bezier(.34,1.4,.5,1); }
.pqw-dial-label { font-size: 10px; font-weight: 900; letter-spacing: .06em; text-transform: uppercase; color: #7b93aa; }
.pqw-dial-value { font-size: 15px; font-weight: 900; color: #0b3b5e; font-variant-numeric: tabular-nums; }
.pqw-tools { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.pqw-knobs { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
.pqw-knob {
    display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 14px; background: #fff;
    border: 1px solid rgba(20, 80, 140, 0.18); box-shadow: 0 2px 8px rgba(16,52,90,.06);
}
.pqw-knob-dial { position: relative; width: 56px; height: 56px; border-radius: 50%; flex: none; cursor: grab; touch-action: none;
    background: conic-gradient(from 210deg, #e8f2fb, #cfe3f5 65%, #b9d3ea 100%);
    border: 2px solid #9fc0dc; box-shadow: inset 0 2px 6px rgba(255,255,255,.9), inset 0 -3px 8px rgba(20,60,100,.16); }
.pqw-knob-dial::before { content: ""; position: absolute; left: 50%; top: 5px; width: 3px; height: 17px; border-radius: 2px;
    background: #1c5f96; transform: translateX(-50%); }
.pqw-knob-dial::after { content: ""; position: absolute; left: 50%; top: 50%; width: 22px; height: 22px; border-radius: 50%;
    transform: translate(-50%, -50%); background: radial-gradient(circle at 40% 35%, #fff, #dbe8f4); border: 1px solid #b6cee2; }
.pqw-knob-meta { display: grid; gap: 2px; min-width: 0; }
.pqw-knob-label { font-size: 11px; font-weight: 800; color: #5b7a96; line-height: 1.3; }
.pqw-knob-value { font-size: 15px; font-weight: 900; color: #0b3b5e; font-variant-numeric: tabular-nums; }
.pqw-run {
    border: 0; border-radius: 11px; padding: 9px 16px; font-size: 13px; font-weight: 900; cursor: pointer; color: #fff;
    background: linear-gradient(135deg, #0ea5e9, #0369a1); box-shadow: 0 6px 16px rgba(3, 105, 161, .28);
}
.pqw-run:disabled { opacity: .55; cursor: default; }
.pqw-steps { font-size: 11.5px; font-weight: 700; color: #7b93aa; }
.pqw-ok { color: #0f7b4f; font-weight: 900; }
.pqw-bad { color: #b42338; font-weight: 900; }
.pqw-reading { font-size: 12.5px; font-weight: 800; color: #14365a; }
@media (max-width: 720px) {
    .pqw-top { grid-template-columns: 1fr; }
    .pqw-drop { position: static; width: auto; margin-top: 8px; }
}
`;
            document.head.appendChild(st);
        },

        render(content, cfg, values, onChange) {
            this.css();
            this._cfg = cfg;
            this._ran = false;
            const sliders = cfg.sliders || [];
            const vals = {};
            sliders.forEach((s) => { vals[s.id] = Number((values && values[s.id] != null) ? values[s.id] : s.val); });
            this._values = vals;
            this._onChange = onChange;

            // Короткие ряды удобно раскладывать на полке, длинные — крутить ручкой.
            // Иначе два ряда по 9–12 деталей делали панель выше экрана.
            const dropTargets = sliders.filter((s) => stepsOf(s) <= 8);
            const knobs = sliders.filter((s) => stepsOf(s) > 8);

            content.innerHTML = `
                <div class="pqw">
                    <div class="pqw-top" style="${dropTargets.length ? "" : "grid-template-columns:1fr"}">
                        ${dropTargets.length ? `<div class="pqw-shelf" id="pqw-shelf">
                            <div class="pqw-shelf-title">${esc(tr("Полка с деталями", "Бөлшектер сөресі", "Parts shelf"))}</div>
                            ${dropTargets.map((s) => this.chipsHtml(s, vals[s.id])).join("")}
                        </div>` : ""}
                        <div class="pqw-scene" id="pqw-scene">
                            <div class="pqw-scene-title">${esc(tr("Установка", "Қондырғы", "Apparatus"))}</div>
                            <div class="pqw-rig" id="pqw-rig">
                                ${this.rigHtml(cfg, vals)}
                            </div>
                            <div class="pqw-gauges" id="pqw-gauges">${this.gaugesHtml(cfg, vals)}</div>
                        </div>
                    </div>
                    <div class="pqw-knobs">
                        ${knobs.map((s) => `
                            <div class="pqw-knob">
                                <div class="pqw-knob-dial" data-knob="${s.id}" role="slider" tabindex="0"
                                     aria-valuemin="${s.min}" aria-valuemax="${s.max}" aria-valuenow="${vals[s.id]}"
                                     aria-label="${esc(pick(s, "label"))}" title="${esc(tr("Потяни и поверни ручку", "Тартып бұра", "Drag to turn"))}"></div>
                                <div class="pqw-knob-meta">
                                    <span class="pqw-knob-label">${esc(pick(s, "label"))}</span>
                                    <span class="pqw-knob-value" id="pqw-v-${s.id}">${num(vals[s.id])} ${esc(pick(s, "unit") || "")}</span>
                                </div>
                            </div>`).join("")}
                    </div>
                    <div class="pqw-tools">
                        <button type="button" class="pqw-run" id="pqw-run">${esc(tr("⏱ Провести опыт", "⏱ Тәжірибе жасау", "⏱ Run experiment"))}</button>
                        <span class="pqw-steps" id="pqw-hint">${esc(tr("Расставь детали, поверни ручки и измерь результат.", "Бөлшектерді қой, тұтқаларды бұра да нәтижені өлше.", "Place the parts, turn the knobs, then measure."))}</span>
                    </div>
                    ${sliders.map((s) => `<input type="hidden" id="lab-${s.id}" value="${vals[s.id]}" data-min="${s.min}" data-max="${s.max}" data-step="${s.step}">`).join("")}
                </div>`;

            const initialDrop = content.querySelector("#pqw-drop");
            if (initialDrop && !dropTargets.length) initialDrop.style.display = "none";
            content.querySelectorAll(".pqw-item").forEach((chip) => {
                this.bindChip(chip, content);
            });
            content.querySelectorAll("[data-knob]").forEach((dial) => {
                this.bindKnob(dial, content);
            });
            content.querySelector("#pqw-run").addEventListener("click", () => this.run(true));
            // Стартовые позиции стрелок и тематической установки.
            this.paintGauges(content, false);
            if (window.PQLabScenes) window.PQLabScenes.update(content, cfg, vals, false);
        },

        chipsHtml(slider, value) {
            const n = stepsOf(slider);
            const unit = pick(slider, "unit") || "";
            const icon = iconFor(slider);
            let out = `<div class="pqw-group">${esc(pick(slider, "label"))}</div><div style="display:grid;grid-template-columns:1fr;gap:5px">`;
            for (let i = 0; i < Math.min(n, 12); i++) {
                const v = snap(Number(slider.min) + i * Number(slider.step), slider);
                const active = Math.abs(Number(v) - Number(value)) < 1e-6;
                out += `<button type="button" class="pqw-item${active ? " active" : ""}" data-param="${slider.id}" data-value="${v}">
                    <i>${icon}</i><span>${num(v)} ${esc(unit)}</span><span class="v">${active ? "✓" : ""}</span>
                </button>`;
            }
            out += `</div>`;
            return out;
        },

        // Тематическая установка мини-игры; универсальный стенд остаётся
        // только запасным вариантом для старых конфигураций без scene.
        rigHtml(cfg, vals) {
            if (window.PQLabScenes && cfg.scene && window.PQLabScenes.has(cfg.scene)) {
                return window.PQLabScenes.render(cfg, vals);
            }
            const label = Object.entries(vals)
                .slice(0, 2)
                .map(([k, v]) => {
                    const s = (cfg.sliders || []).find((x) => x.id === k) || {};
                    return `${k} ${num(v)}${pick(s, "unit") || ""}`;
                })
                .join(" · ");
            return `
                <svg viewBox="0 0 620 148" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="pqwGlass" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#eaf5ff"/><stop offset="1" stop-color="#cfe6f8"/>
                        </linearGradient>
                        <linearGradient id="pqwSteel" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stop-color="#f4f8fc"/><stop offset="1" stop-color="#c9d8e6"/>
                        </linearGradient>
                    </defs>
                    <rect x="0" y="118" width="620" height="12" rx="6" fill="#d7e4f0"/>
                    <rect x="34" y="30" width="150" height="88" rx="12" fill="url(#pqwGlass)" stroke="#9dc0da" stroke-width="2"/>
                    <rect x="40" y="86" width="138" height="28" rx="8" fill="#bfe0f7" opacity="0.85"/>
                    <line x1="34" y1="70" x2="184" y2="70" stroke="#7fa8c6" stroke-width="1.5" stroke-dasharray="5 4"/>
                    <text x="44" y="64" font-size="11" fill="#5b7a96" font-family="Trebuchet MS, sans-serif">${esc(label)}</text>
                    <rect x="214" y="24" width="8" height="94" fill="url(#pqwSteel)" stroke="#a9c1d4"/>
                    <rect x="222" y="24" width="120" height="8" rx="4" fill="url(#pqwSteel)" stroke="#a9c1d4"/>
                    <circle cx="352" cy="104" r="26" fill="#eaf3fb" stroke="#9dc0da" stroke-width="2"/>
                    <circle cx="352" cy="104" r="10" fill="#cde3f5" stroke="#8fb5d1"/>
                    <rect x="404" y="46" width="188" height="66" rx="12" fill="#f7fbff" stroke="#b6cee2" stroke-width="2"/>
                    <line x1="418" y1="92" x2="578" y2="92" stroke="#9fc0dc" stroke-width="2"/>
                    <g stroke="#8fb5d1" stroke-width="1.4">
                        <line x1="430" y1="92" x2="430" y2="84"/><line x1="460" y1="92" x2="460" y2="80"/>
                        <line x1="490" y1="92" x2="490" y2="84"/><line x1="520" y1="92" x2="520" y2="80"/>
                        <line x1="550" y1="92" x2="550" y2="84"/>
                    </g>
                    <text x="418" y="70" font-size="11" fill="#5b7a96" font-family="Trebuchet MS, sans-serif">${esc(tr("прибор", "аспап", "instrument"))}</text>
                </svg>
                <div class="pqw-drop" id="pqw-drop">${esc(tr("Перетащи деталь сюда", "Бөлшекті осында сүйре", "Drag a part here"))}</div>`;
        },

        gaugesHtml(cfg, vals) {
            const sliders = cfg.sliders || [];
            return sliders.map((s) => `
                <div class="pqw-gauge" data-gauge="${s.id}">
                    <div class="pqw-dial"><div class="pqw-needle" id="pqw-n-${s.id}"></div></div>
                    <div>
                        <div class="pqw-dial-label">${esc((pick(s, "label") || s.id).slice(0, 22))}</div>
                        <div class="pqw-dial-value" id="pqw-r-${s.id}">—</div>
                    </div>
                </div>`).join("");
        },

        bindChip(chip, content) {
            const apply = () => {
                const id = chip.getAttribute("data-param");
                const v = Number(chip.getAttribute("data-value"));
                content.querySelectorAll(`.pqw-item[data-param="${id}"]`).forEach((c) => {
                    const on = c === chip;
                    c.classList.toggle("active", on);
                    const mark = c.querySelector(".v");
                    if (mark) mark.textContent = on ? "✓" : "";
                });
                const slider = (this._cfg.sliders || []).find((s) => s.id === id);
                if (slider) this.setValue(id, v, content);
                const drop = content.querySelector("#pqw-drop");
                if (drop) {
                    drop.classList.add("filled");
                    drop.textContent = `${chip.querySelector("i")?.textContent || ""} ${chip.querySelector("span")?.textContent || ""}`.trim();
                }
            };
            chip.addEventListener("click", apply);
            // перетаскивание: реальный «взять со полки и положить в установку»
            chip.addEventListener("pointerdown", (e) => {
                const ghost = chip.cloneNode(true);
                ghost.classList.add("ghost");
                ghost.style.left = e.clientX + "px";
                ghost.style.top = e.clientY + "px";
                ghost.style.width = chip.offsetWidth + "px";
                document.body.appendChild(ghost);
                chip.setPointerCapture?.(e.pointerId);
                const move = (ev) => {
                    ghost.style.left = ev.clientX + "px";
                    ghost.style.top = ev.clientY + "px";
                    const scene = content.querySelector("#pqw-scene");
                    const r = scene.getBoundingClientRect();
                    scene.classList.toggle("dragover", ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom);
                };
                const up = (ev) => {
                    chip.removeEventListener("pointermove", move);
                    chip.removeEventListener("pointerup", up);
                    ghost.remove();
                    const scene = content.querySelector("#pqw-scene");
                    if (scene) scene.classList.remove("dragover");
                    const r = scene.getBoundingClientRect();
                    const inside = ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom;
                    if (inside) apply();
                };
                chip.addEventListener("pointermove", move);
                chip.addEventListener("pointerup", up);
            });
        },

        /* Публичный «верньер»: ручка, которую поворачивают мышью/пальцем.
           Используется и мини-играми, и canvas-симуляторами 8–9 классов. */
        dialHtml(id, def, value, extraClass) {
            const cls = "pqw-knob-dial" + (extraClass ? " " + extraClass : "");
            return `<div class="${cls}" data-dial="${esc(id)}" role="slider" tabindex="0"
                aria-valuemin="${def.min}" aria-valuemax="${def.max}" aria-valuenow="${value}"
                aria-label="${esc(def.label || id)}" title="${esc(tr("Потяни и поверни ручку", "Тартып бұра", "Drag to turn"))}"></div>`;
        },

        bindDial(dial, def, getValue, setValue) {
            this.css();
            let dragging = false;
            let lastAngle = 0;
            const angleOf = (e) => {
                const r = dial.getBoundingClientRect();
                return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
            };
            const span = Number(def.max) - Number(def.min) || 1;
            const perDegree = span / 270;              // полный ход ручки — 270°
            // Копим «сырой» угол, иначе мелкие движения мыши округлялись до нуля
            // и ручка не поворачивалась вовсе.
            let raw = Number(getValue());
            const clampRaw = (v) => Math.min(Number(def.max), Math.max(Number(def.min), v));
            const turn = (delta) => {
                raw = clampRaw(raw + delta * perDegree);
                const next = snap(raw, { min: def.min, max: def.max, step: def.step });
                setValue(next);
                this.paintDial(dial, def, next);
            };
            const stepTo = (dir) => {
                raw = clampRaw(Number(getValue()) + dir * Number(def.step || 1));
                const next = snap(raw, { min: def.min, max: def.max, step: def.step });
                setValue(next);
                this.paintDial(dial, def, next);
            };
            dial.addEventListener("pointerdown", (e) => {
                dragging = true;
                raw = Number(getValue());
                lastAngle = angleOf(e);
                dial.setPointerCapture?.(e.pointerId);
            });
            dial.addEventListener("pointermove", (e) => {
                if (!dragging) return;
                const a = angleOf(e);
                let d = a - lastAngle;
                if (d > 180) d -= 360;
                if (d < -180) d += 360;
                lastAngle = a;
                turn(d);
            });
            const stop = () => { dragging = false; };
            dial.addEventListener("pointerup", stop);
            dial.addEventListener("pointercancel", stop);
            dial.addEventListener("pointerleave", stop);
            dial.addEventListener("wheel", (e) => { e.preventDefault(); stepTo(e.deltaY > 0 ? -1 : 1); }, { passive: false });
            dial.addEventListener("keydown", (e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowUp") { stepTo(1); e.preventDefault(); }
                if (e.key === "ArrowLeft" || e.key === "ArrowDown") { stepTo(-1); e.preventDefault(); }
            });
            this.paintDial(dial, def, getValue());
        },

        paintDial(dial, def, value) {
            const span = Number(def.max) - Number(def.min) || 1;
            const pct = Math.min(1, Math.max(0, (Number(value) - Number(def.min)) / span));
            dial.style.transform = `rotate(${-135 + pct * 270}deg)`;
            dial.setAttribute("aria-valuenow", String(value));
        },

        bindKnob(dial, content) {
            const id = dial.getAttribute("data-knob");
            const slider = (this._cfg.sliders || []).find((s) => s.id === id);
            if (!slider) return;
            this.bindDial(
                dial,
                { min: slider.min, max: slider.max, step: slider.step, label: pick(slider, "label") },
                () => this._values[id],
                (next) => this.setValue(id, next, content)
            );
        },

        setValue(id, value, content) {
            const slider = (this._cfg.sliders || []).find((s) => s.id === id);
            if (!slider) return;
            const v = snap(value, slider);
            this._values[id] = v;
            this._ran = false;
            const out = content.querySelector(`#pqw-v-${id}`);
            if (out) out.textContent = `${num(v)} ${pick(slider, "unit") || ""}`;
            const input = document.getElementById(`lab-${id}`);
            if (input) {
                input.value = String(v);
                input.dispatchEvent(new Event("input", { bubbles: true }));
            }
            const dial = content.querySelector(`[data-knob="${id}"]`);
            if (dial) dial.setAttribute("aria-valuenow", String(v));
            if (dial) this.paintDial(dial, slider, v);
            this.paintGauges(content, false);
            if (window.PQLabScenes) window.PQLabScenes.update(content, this._cfg, this._values, false);
            const hint = content.querySelector("#pqw-hint");
            if (hint) {
                hint.innerHTML = esc(tr("Параметры изменились — проведи опыт заново.", "Параметрлер өзгерді — тәжірибені қайта жаса.", "Parameters changed — run the experiment again."));
            }
        },

        // Стрелки приборов показывают измерение только после опыта (как в реальной
        // лаборатории: пока не включил установку, шкала стоит на нуле).
        paintGauges(content, measured) {
            const sliders = this._cfg.sliders || [];
            sliders.forEach((s) => {
                const needle = content.querySelector(`#pqw-n-${s.id}`);
                const readout = content.querySelector(`#pqw-r-${s.id}`);
                if (!needle || !readout) return;
                if (!measured) {
                    readout.textContent = "—";
                    needle.style.transform = "translateX(-50%) rotate(-115deg)";
                    return;
                }
                const span = Number(s.max) - Number(s.min) || 1;
                const pct = Math.min(1, Math.max(0, (Number(this._values[s.id]) - Number(s.min)) / span));
                needle.style.transform = `translateX(-50%) rotate(${-115 + pct * 230}deg)`;
                readout.textContent = `${num(this._values[s.id])} ${pick(s, "unit") || ""}`.trim();
            });
        },

        run(animate) {
            const content = this._root;
            if (!content) return;
            this._ran = true;
            // После опыта приборы сняли показания — отдаём их игровой логике
            (this._cfg.sliders || []).forEach((s) => {
                document.getElementById(`lab-${s.id}`)?.dispatchEvent(new Event("input", { bubbles: true }));
            });
            const btn = content.querySelector("#pqw-run");
            if (btn && animate) {
                btn.disabled = true;
                btn.textContent = tr("⏳ Идёт опыт…", "⏳ Тәжірибе жүріп жатыр…", "⏳ Running…");
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = tr("⏱ Провести ещё раз", "⏱ Тағы да жасау", "⏱ Run again");
                }, 700);
            }
            this.paintGauges(content, true);
            if (window.PQLabScenes) window.PQLabScenes.update(content, this._cfg, this._values, true);
            const hint = content.querySelector("#pqw-hint");
            if (hint) {
                const cfg = this._cfg;
                const value = cfg.formula ? cfg.formula(Object.assign({}, this._values)) : 0;
                const ok = Math.abs(value - Number(cfg.target)) <= Number(cfg.tol || 0);
                const unit = (cfg.unitEn && lang() === "en") ? cfg.unitEn : (cfg.unit || "");
                const shown = `${num(Number(value).toFixed(2))} ${unit}`.trim();
                const goal = `${num(cfg.target)} ±${num(cfg.tol || 0)} ${unit}`.trim();
                const resultLine = `<span class="pqw-reading">${esc(tr("Результат", "Нәтиже", "Result"))}: ${esc(shown)} · ${esc(tr("цель", "мақсат", "target"))} ${esc(goal)}</span>`;
                hint.innerHTML = (ok
                    ? `<span class="pqw-ok">✓ ${esc(tr("Показания совпали с целью — жми «Проверить».", "Көрсеткіш мақсатқа сай — «Тексеру» бас.", "Readings match the target — press Check."))}</span>`
                    : `<span class="pqw-bad">${esc(tr("Мимо цели: подбери детали точнее.", "Мақсаттан ауытқу: бөлшектерді дәлірек таңда.", "Off target: pick the parts more precisely."))}</span>`)
                    + `<br>${resultLine}`;
            }
        },

        /* Программно повернуть ручку/взять деталь (нужно тестам и подсказкам) */
        setParam(id, value) {
            if (!this._root) return false;
            const slider = (this._cfg.sliders || []).find((s) => s.id === id);
            if (!slider) return false;
            this.setValue(id, value, this._root);
            this._root.querySelectorAll(`.pqw-item[data-param="${id}"]`).forEach((c) => {
                const on = Math.abs(Number(c.getAttribute("data-value")) - Number(this._values[id])) < 1e-6;
                c.classList.toggle("active", on);
                const mark = c.querySelector(".v");
                if (mark) mark.textContent = on ? "✓" : "";
            });
            return true;
        },

        attach(content, cfg, values, onChange) {
            this._root = content;
            this.render(content, cfg, values, onChange);
            // скрытые input'ы нужны игровой логике — сообщаем о стартовых значениях
            Object.keys(this._values).forEach((id) => {
                const input = document.getElementById(`lab-${id}`);
                if (input) input.dispatchEvent(new Event("input", { bubbles: true }));
            });
        },

        reset() {
            this._root = null;
            this._cfg = null;
            this._values = null;
            this._ran = false;
        }
    };

    window.PQWorkbench = Workbench;
})();
