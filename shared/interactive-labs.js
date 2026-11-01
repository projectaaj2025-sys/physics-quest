/* ============================================================
   PQ INTERACTIVE LABS — монтаж цепи и магнитная индукция.
   Прямые действия ученика: детали, провода, клеммы, ключ и магнит.
   Работает без внешних библиотек и остаётся доступным офлайн.
   ============================================================ */
(function () {
    "use strict";

    const PARTS = ["battery", "switch", "lamp", "rheostat"];
    const PART_BITS = { switch: 1, lamp: 2, rheostat: 4 };

    function language() {
        return (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    }
    function tr(ru, kk, en) {
        const l = language();
        return l === "kk" ? kk : l === "en" ? en : ru;
    }
    function clamp(min, max, value) { return Math.max(min, Math.min(max, value)); }
    function number(value, fallback) {
        const n = Number(value);
        return Number.isFinite(n) ? n : fallback;
    }
    function partName(part) {
        return {
            battery: tr("Батарея", "Батарея", "Battery"),
            switch: tr("Ключ", "Кілт", "Switch"),
            lamp: tr("Лампа", "Шам", "Lamp"),
            rheostat: tr("Реостат", "Реостат", "Rheostat")
        }[part] || part;
    }

    function injectStyles() {
        if (document.getElementById("pq-interactive-labs-css")) return;
        const style = document.createElement("style");
        style.id = "pq-interactive-labs-css";
        style.textContent = `
            .pq-il { --il-ink:#17324a; --il-blue:#087ea4; --il-line:#b76432; width:100%; color:var(--il-ink); font:600 14px/1.4 system-ui,-apple-system,sans-serif; }
            .pq-il *, .pq-il *::before, .pq-il *::after { box-sizing:border-box; }
            .pq-il button, .pq-il input { font:inherit; }
            .pq-il button { touch-action:manipulation; }
            .pq-il-instructions { margin:0 0 10px; padding:10px 12px; border:1px solid #b9d6e4; border-radius:12px; background:#edf7fc; color:#234a63; font-size:13px; }
            .pq-il-palette { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:8px; margin:0 0 10px; }
            .pq-il-part { min-width:0; min-height:48px; padding:8px 9px; border:1px solid #9dbbca; border-radius:11px; background:#fff; color:#173d53; cursor:grab; font-weight:800; }
            .pq-il-part:active { cursor:grabbing; }
            .pq-il-part.selected { border-color:#087ea4; background:#d9f2fb; box-shadow:0 0 0 3px #58b9d844; }
            .pq-il-part:disabled { opacity:.42; cursor:default; }
            .pq-il-board { position:relative; width:100%; overflow:hidden; border:1px solid #9db8c8; border-radius:16px; background-color:#f7fbfd; background-image:linear-gradient(#dcebf255 1px,transparent 1px),linear-gradient(90deg,#dcebf255 1px,transparent 1px); background-size:24px 24px; box-shadow:inset 0 1px 8px #16344b12; }
            .pq-il-board > svg { position:absolute; inset:0; z-index:2; display:block; width:100%; height:100%; pointer-events:none; }
            .pq-il-slots { position:absolute; inset:0; z-index:1; pointer-events:none; }
            .pq-il-slot { position:absolute; transform:translate(-50%,-50%); aspect-ratio:1.55; padding:0; border:2px dashed #8da9b9; border-radius:13px; background:#edf4f7cc; color:#587386; cursor:pointer; pointer-events:auto; overflow:visible; }
            .pq-il-slot.filled { border-style:solid; border-color:#a9bfcb; background:#ffffff9e; }
            .pq-il-slot.selected-target { border-color:#087ea4; background:#d9f2fb; }
            .pq-il-slot.switch-live { border-color:#36a166; box-shadow:0 0 18px #4ade8066; }
            .pq-il-slot svg { display:block; width:100%; height:100%; overflow:visible; }
            .pq-il-slot-label { position:absolute; left:50%; bottom:-21px; transform:translateX(-50%); white-space:nowrap; font-size:11px; font-weight:800; color:#3d6074; }
            .pq-il-placeholder { display:grid; place-items:center; width:100%; height:100%; padding:4px; text-align:center; font-size:11px; line-height:1.2; }
            .pq-il-wire { stroke:var(--il-line); stroke-width:8; stroke-linecap:round; pointer-events:none; }
            .pq-il-wire-hit { stroke:transparent; stroke-width:28; pointer-events:stroke; cursor:pointer; }
            .pq-il-wire-hit:hover + .pq-il-wire, .pq-il-wire-hit:focus + .pq-il-wire { stroke:#d13c3c; }
            .pq-il-terminal { cursor:crosshair; outline:none; pointer-events:all; }
            .pq-il-terminal-hit { fill:transparent; pointer-events:all; }
            .pq-il-terminal-core { fill:#fff; stroke:#315c74; stroke-width:4; pointer-events:none; }
            .pq-il-terminal:hover .pq-il-terminal-core, .pq-il-terminal:focus .pq-il-terminal-core, .pq-il-terminal.selected .pq-il-terminal-core { fill:#d9f2fb; stroke:#087ea4; stroke-width:6; }
            .pq-il-draft { stroke:#087ea4; stroke-width:5; stroke-dasharray:10 8; pointer-events:none; }
            .pq-il-meter-row { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; margin-top:12px; }
            .pq-il-meter { min-width:0; padding:9px 11px; border:1px solid #b5cbd7; border-radius:11px; background:#fff; }
            .pq-il-meter small { display:block; color:#60798a; font-size:11px; }
            .pq-il-meter strong { display:block; margin-top:2px; color:#123c55; font-size:17px; font-variant-numeric:tabular-nums; }
            .pq-il-actions { display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
            .pq-il-action { min-height:42px; padding:9px 13px; border:1px solid #8faebe; border-radius:11px; background:#fff; color:#173d53; cursor:pointer; font-weight:800; }
            .pq-il-action.primary { background:#087ea4; border-color:#087ea4; color:#fff; }
            .pq-il-action:focus-visible, .pq-il-part:focus-visible, .pq-il-slot:focus-visible { outline:3px solid #c77a08; outline-offset:2px; }
            .pq-il-controls { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; margin-top:10px; }
            .pq-il-control { min-width:0; padding:10px 11px; border:1px solid #bfd1db; border-radius:11px; background:#f5fafc; }
            .pq-il-control label { display:flex; justify-content:space-between; gap:8px; font-size:12px; font-weight:800; }
            .pq-il-control output { flex:none; color:#087ea4; font-variant-numeric:tabular-nums; }
            .pq-il-control input { width:100%; margin-top:9px; accent-color:#087ea4; }
            .pq-il-status { margin-top:10px; padding:10px 12px; border:1px solid #b7cbd7; border-radius:11px; background:#f2f7fa; color:#38586b; font-size:13px; }
            .pq-il-status.good { border-color:#69b98b; background:#e8f8ee; color:#176139; }
            .pq-il-status.bad { border-color:#e1a15c; background:#fff5e8; color:#88450b; }
            .pq-il-canvas { display:block; width:100%; height:auto; border:1px solid #9db8c8; border-radius:16px; background:#f7fbfd; touch-action:none; cursor:grab; }
            .pq-il-canvas.dragging { cursor:grabbing; }
            @media (max-width:640px) {
                .pq-il { font-size:13px; }
                .pq-il-palette { grid-template-columns:repeat(2,minmax(0,1fr)); }
                .pq-il-controls { grid-template-columns:1fr; }
                .pq-il-meter-row { grid-template-columns:repeat(2,minmax(0,1fr)); }
                .pq-il-meter:last-child { grid-column:1/-1; }
                .pq-il-action { flex:1 1 140px; }
                .pq-il-slot-label { font-size:10px; bottom:-18px; }
            }
            @media (prefers-reduced-motion:reduce) { .pq-il * { scroll-behavior:auto!important; } }
        `;
        document.head.appendChild(style);
    }

    function circuitLayout(container) {
        const portrait = container.clientWidth < 560;
        return portrait ? {
            portrait, w: 600, h: 700, slot: 132,
            positions: { battery: { x: 96, y: 345 }, switch: { x: 300, y: 105 }, lamp: { x: 504, y: 345 }, rheostat: { x: 300, y: 590 } }
        } : {
            portrait, w: 1000, h: 540, slot: 140,
            positions: { battery: { x: 145, y: 275 }, switch: { x: 500, y: 82 }, lamp: { x: 855, y: 275 }, rheostat: { x: 500, y: 465 } }
        };
    }

    function componentSvg(part, state, metrics) {
        if (part === "battery") return `<svg viewBox="0 0 140 84" aria-hidden="true"><rect x="15" y="15" width="110" height="54" rx="12" fill="#263c4b"/><path d="M28 30h18M37 21v18M98 30h16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><text x="70" y="56" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">${state.U} V</text></svg>`;
        if (part === "switch") return `<svg viewBox="0 0 140 84" aria-hidden="true"><path d="M16 62h108" stroke="#8ba0ac" stroke-width="5" stroke-linecap="round"/><circle cx="30" cy="50" r="7" fill="#39586a"/><circle cx="110" cy="50" r="7" fill="#39586a"/><path d="M30 50 L${state.switchClosed ? 110 : 92} ${state.switchClosed ? 50 : 20}" stroke="${state.switchClosed ? "#27955a" : "#b4533c"}" stroke-width="7" stroke-linecap="round"/><circle cx="30" cy="50" r="4" fill="#fff"/></svg>`;
        if (part === "lamp") return `<svg viewBox="0 0 140 84" aria-hidden="true">${metrics.current > 0 ? `<circle cx="70" cy="36" r="31" fill="#ffd84d" opacity=".55"/><circle cx="70" cy="36" r="23" fill="#fff3a6"/>` : `<circle cx="70" cy="36" r="23" fill="#e9f0f3"/>`}<circle cx="70" cy="36" r="23" fill="none" stroke="#6f8997" stroke-width="3"/><path d="M56 48l10-25 8 25 9-25M57 63h26M60 70h20" fill="none" stroke="#6f632e" stroke-width="3" stroke-linecap="round"/></svg>`;
        return `<svg viewBox="0 0 140 84" aria-hidden="true"><rect x="12" y="25" width="116" height="36" rx="10" fill="#e4edf1" stroke="#6f8997" stroke-width="3"/><path d="M20 44h12l7-12 12 24 12-24 12 24 12-24 12 12h21" fill="none" stroke="#b36b32" stroke-width="4" stroke-linejoin="round"/><path d="M${30 + state.Rrheo * 5} 15v35" stroke="#087ea4" stroke-width="5" stroke-linecap="round"/><circle cx="${30 + state.Rrheo * 5}" cy="15" r="7" fill="#087ea4"/></svg>`;
    }

    function mountCircuit(container, options) {
        const source = options.state || {};
        const simple = !!options.simple;
        const state = {
            placed: {},
            wires: Array.isArray(source.wires) ? source.wires.map(w => ({ a: String(w.a), b: String(w.b) })) : [],
            switchClosed: !!source.switchClosed,
            U: number(source.U, 12),
            Rlamp: number(source.Rlamp, 4),
            Rrheo: number(source.Rrheo, simple ? 0 : 8)
        };
        PARTS.forEach(part => { state.placed[part] = !!(source.placed && source.placed[part]); });
        let selectedPart = null;
        let selectedTerminal = null;
        let draft = null;
        let destroyed = false;
        let wasPortrait = container.clientWidth < 560;

        function ports(layout) {
            const out = {};
            PARTS.forEach(part => {
                if (!state.placed[part]) return;
                const p = layout.positions[part];
                out[part + ":a"] = { x: p.x - layout.slot / 2, y: p.y };
                out[part + ":b"] = { x: p.x + layout.slot / 2, y: p.y };
            });
            return out;
        }

        function analyze() {
            const placedCount = PARTS.filter(part => state.placed[part]).length;
            let complete = false;
            if (placedCount === PARTS.length) {
                const available = ports(circuitLayout(container));
                const graph = new Map();
                const add = (a, b, bit) => {
                    if (!available[a] || !available[b]) return;
                    if (!graph.has(a)) graph.set(a, []);
                    if (!graph.has(b)) graph.set(b, []);
                    graph.get(a).push({ to: b, bit: bit || 0 });
                    graph.get(b).push({ to: a, bit: bit || 0 });
                };
                state.wires.forEach(w => add(w.a, w.b, 0));
                ["switch", "lamp", "rheostat"].forEach(part => add(part + ":a", part + ":b", PART_BITS[part]));
                const queue = [{ at: "battery:a", mask: 0 }];
                const seen = new Set();
                for (let i = 0; i < queue.length && !complete; i++) {
                    const cur = queue[i];
                    const key = cur.at + "|" + cur.mask;
                    if (seen.has(key)) continue;
                    seen.add(key);
                    if (cur.at === "battery:b" && cur.mask === 7) { complete = true; break; }
                    (graph.get(cur.at) || []).forEach(edge => queue.push({ at: edge.to, mask: cur.mask | edge.bit }));
                }
            }
            const raw = complete && state.switchClosed ? state.U / Math.max(0.1, state.Rlamp + state.Rrheo) : 0;
            const blown = raw > 3.5;
            return { complete, closed: state.switchClosed, placedCount, wireCount: state.wires.length, raw, current: blown ? 0 : raw, blown };
        }

        function status(metrics) {
            if (metrics.placedCount < PARTS.length) return { kind: "", text: tr("Установи все четыре детали на монтажное поле.", "Төрт бөлшектің бәрін орнату алаңына қой.", "Place all four parts on the board.") };
            if (!metrics.complete) return { kind: "", text: tr("Соедини батарею, ключ, лампу и реостат в один контур.", "Батареяны, кілтті, шамды және реостатты бір тізбекке қос.", "Connect the battery, switch, lamp and rheostat in one loop.") };
            if (!metrics.closed) return { kind: "", text: tr("Контур собран. Теперь замкни ключ.", "Тізбек дайын. Енді кілтті тұйықта.", "The loop is ready. Now close the switch.") };
            if (metrics.blown) return { kind: "bad", text: tr("Предохранитель перегорел! Снизь напряжение или увеличь сопротивление.", "Сақтандырғыш күйді! Кернеуді азайт немесе кедергіні арттыр.", "The fuse blew! Lower voltage or increase resistance.") };
            return { kind: "good", text: tr("Цепь замкнута — ток идёт, лампа светится.", "Тізбек тұйық — ток жүруде, шам жанып тұр.", "The circuit is closed — current flows and the lamp glows.") };
        }

        function exported() {
            return {
                U: state.U, Rlamp: state.Rlamp, Rrheo: state.Rrheo,
                placed: { ...state.placed }, wires: state.wires.map(w => ({ ...w })),
                switchClosed: state.switchClosed, circuitComplete: analyze().complete
            };
        }
        function emit() {
            const metrics = analyze();
            const info = status(metrics);
            options.onChange?.(exported(), { ...metrics, success: metrics.complete && metrics.closed && !metrics.blown, message: info.text });
        }

        function range(id, key, min, max, step, unit) {
            return `<div class="pq-il-control"><label for="${id}"><span>${{ U: tr("Напряжение", "Кернеу", "Voltage"), Rlamp: tr("Лампа R₁", "Шам R₁", "Lamp R₁"), Rrheo: tr("Реостат R₂", "Реостат R₂", "Rheostat R₂") }[key]}</span><output for="${id}" data-output="${key}">${state[key]} ${unit}</output></label><input id="${id}" data-range="${key}" type="range" min="${min}" max="${max}" step="${step}" value="${state[key]}"></div>`;
        }

        function connect(a, b) {
            if (!a || !b || a === b) return;
            const duplicate = state.wires.some(w => (w.a === a && w.b === b) || (w.a === b && w.b === a));
            if (!duplicate && state.wires.length < 20) state.wires.push({ a, b });
        }

        function render() {
            if (destroyed) return;
            const layout = circuitLayout(container);
            wasPortrait = layout.portrait;
            const available = ports(layout);
            const metrics = analyze();
            const info = status(metrics);
            const wireSvg = state.wires.map((w, i) => {
                const a = available[w.a], b = available[w.b];
                if (!a || !b) return "";
                return `<line class="pq-il-wire-hit" data-wire="${i}" tabindex="0" role="button" aria-label="${tr("Удалить провод", "Сымды өшіру", "Delete wire")}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"><title>${tr("Удалить провод", "Сымды өшіру", "Delete wire")}</title></line><line class="pq-il-wire" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
            }).join("");
            const terminalSvg = Object.entries(available).map(([id, p]) => `<g class="pq-il-terminal ${selectedTerminal === id ? "selected" : ""}" data-port="${id}" tabindex="0" role="button" aria-label="${tr("Клемма", "Қысқыш", "Terminal")} ${id}"><circle class="pq-il-terminal-hit" cx="${p.x}" cy="${p.y}" r="30"/><circle class="pq-il-terminal-core" cx="${p.x}" cy="${p.y}" r="10"/></g>`).join("");
            const slots = PARTS.map(part => {
                const p = layout.positions[part];
                const filled = state.placed[part];
                return `<button type="button" class="pq-il-slot ${filled ? "filled" : ""} ${part === "switch" && state.switchClosed ? "switch-live" : ""} ${selectedPart === part && !filled ? "selected-target" : ""}" data-slot="${part}" style="left:${p.x / layout.w * 100}%;top:${p.y / layout.h * 100}%;width:${layout.slot / layout.w * 100}%" aria-label="${filled ? partName(part) : tr("Место для детали", "Бөлшек орны", "Part slot")}: ${partName(part)}">${filled ? componentSvg(part, state, metrics) : `<span class="pq-il-placeholder">${partName(part)}</span>`}<span class="pq-il-slot-label">${partName(part)}</span></button>`;
            }).join("");
            container.innerHTML = `<div class="pq-il pq-il-circuit">
                <p class="pq-il-instructions">${tr("1. Перетащи детали в контуры (или коснись детали и контура). 2. Потяни провод от клеммы к клемме либо коснись двух клемм. 3. Замкни ключ.", "1. Бөлшектерді контурға сүйре (немесе бөлшек пен контурды бас). 2. Қысқыштан қысқышқа сым сүйре немесе екі қысқышты бас. 3. Кілтті тұйықта.", "1. Drag parts into the outlines (or tap a part and its slot). 2. Drag between terminals or tap two terminals. 3. Close the switch.")}</p>
                <div class="pq-il-palette">${PARTS.map(part => `<button type="button" draggable="${!state.placed[part]}" class="pq-il-part ${selectedPart === part ? "selected" : ""}" data-part="${part}" ${state.placed[part] ? "disabled" : ""}>${selectedPart === part ? "✓ " : ""}${partName(part)}</button>`).join("")}</div>
                <div class="pq-il-board" style="aspect-ratio:${layout.w}/${layout.h}">
                    <svg viewBox="0 0 ${layout.w} ${layout.h}" aria-label="${tr("Монтажное поле", "Орнату алаңы", "Circuit board")}">${wireSvg}<line class="pq-il-draft" data-draft-line x1="0" y1="0" x2="0" y2="0" visibility="hidden"/>${terminalSvg}</svg>
                    <div class="pq-il-slots">${slots}</div>
                </div>
                <div class="pq-il-meter-row"><div class="pq-il-meter"><small>${tr("Амперметр", "Амперметр", "Ammeter")}</small><strong>${metrics.current.toFixed(2)} A</strong></div><div class="pq-il-meter"><small>${tr("Проводов", "Сымдар", "Wires")}</small><strong>${metrics.wireCount}</strong></div><div class="pq-il-meter"><small>${tr("Деталей", "Бөлшектер", "Parts")}</small><strong>${metrics.placedCount} / 4</strong></div></div>
                <div class="pq-il-actions"><button type="button" class="pq-il-action primary" data-action="switch" ${!state.placed.switch ? "disabled" : ""}>${state.switchClosed ? tr("Разомкнуть ключ", "Кілтті ажырату", "Open switch") : tr("Замкнуть ключ", "Кілтті тұйықтау", "Close switch")}</button><button type="button" class="pq-il-action" data-action="reset">${tr("Собрать заново", "Қайта құрастыру", "Start over")}</button></div>
                ${simple ? "" : `<div class="pq-il-controls">${range("pq-il-u", "U", 4, 24, 1, "V")}${range("pq-il-rl", "Rlamp", 2, 10, 1, "Ω")}${range("pq-il-rr", "Rrheo", 0, 16, 1, "Ω")}</div>`}
                <div class="pq-il-status ${info.kind}" data-il-status>${info.text} ${selectedTerminal ? tr("Выбрана первая клемма — выбери вторую.", "Бірінші қысқыш таңдалды — екіншісін таңда.", "First terminal selected — choose the second.") : ""}</div>
            </div>`;
            bind();
            emit();
        }

        function place(part) {
            if (!PARTS.includes(part) || state.placed[part]) return;
            state.placed[part] = true;
            selectedPart = null;
            selectedTerminal = null;
            render();
        }

        function bind() {
            container.querySelectorAll("[data-part]").forEach(button => {
                button.addEventListener("click", () => { selectedPart = button.dataset.part; selectedTerminal = null; render(); });
                button.addEventListener("dragstart", event => { selectedPart = button.dataset.part; event.dataTransfer?.setData("text/plain", selectedPart); });
            });
            container.querySelectorAll("[data-slot]").forEach(slot => {
                slot.addEventListener("click", () => {
                    const part = slot.dataset.slot;
                    if (selectedPart === part) place(part);
                    else if (!selectedPart && part === "switch" && state.placed.switch) { state.switchClosed = !state.switchClosed; render(); }
                });
                slot.addEventListener("dragover", event => event.preventDefault());
                slot.addEventListener("drop", event => {
                    event.preventDefault();
                    const dragged = event.dataTransfer?.getData("text/plain") || selectedPart;
                    if (dragged === slot.dataset.slot) place(dragged);
                });
            });
            container.querySelector('[data-action="reset"]')?.addEventListener("click", () => {
                PARTS.forEach(part => { state.placed[part] = false; });
                state.wires = []; state.switchClosed = false; selectedPart = null; selectedTerminal = null; render();
            });
            container.querySelector('[data-action="switch"]')?.addEventListener("click", () => { state.switchClosed = !state.switchClosed; render(); });
            container.querySelectorAll("[data-wire]").forEach(wire => {
                const remove = () => { state.wires.splice(Number(wire.dataset.wire), 1); selectedTerminal = null; render(); };
                wire.addEventListener("click", remove);
                wire.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); remove(); }
                });
            });
            container.querySelectorAll("[data-range]").forEach(input => {
                input.addEventListener("input", () => {
                    const key = input.dataset.range;
                    state[key] = Number(input.value);
                    const unit = key === "U" ? "V" : "Ω";
                    const output = container.querySelector(`[data-output="${key}"]`);
                    if (output) output.textContent = `${state[key]} ${unit}`;
                });
                input.addEventListener("change", render);
            });
            const svg = container.querySelector(".pq-il-board > svg");
            if (!svg) return;
            const point = event => {
                const r = svg.getBoundingClientRect();
                const layout = circuitLayout(container);
                return { x: (event.clientX - r.left) / r.width * layout.w, y: (event.clientY - r.top) / r.height * layout.h };
            };
            const terminalAt = event => {
                const elements = document.elementsFromPoint ? document.elementsFromPoint(event.clientX, event.clientY) : [document.elementFromPoint(event.clientX, event.clientY)];
                for (const el of elements) { const terminal = el?.closest?.("[data-port]"); if (terminal) return terminal.dataset.port; }
                return null;
            };
            svg.querySelectorAll("[data-port]").forEach(terminal => {
                terminal.addEventListener("pointerdown", event => {
                    event.preventDefault();
                    const p = point(event);
                    draft = { port: terminal.dataset.port, start: p, moved: false, pointerId: event.pointerId };
                    svg.setPointerCapture?.(event.pointerId);
                });
                terminal.addEventListener("keydown", event => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    const port = terminal.dataset.port;
                    if (selectedTerminal && selectedTerminal !== port) { connect(selectedTerminal, port); selectedTerminal = null; }
                    else selectedTerminal = port;
                    render();
                });
            });
            svg.addEventListener("pointermove", event => {
                if (!draft) return;
                const p = point(event);
                if (Math.hypot(p.x - draft.start.x, p.y - draft.start.y) > 12) draft.moved = true;
                const line = svg.querySelector("[data-draft-line]");
                if (line && draft.moved) {
                    line.setAttribute("x1", draft.start.x); line.setAttribute("y1", draft.start.y);
                    line.setAttribute("x2", p.x); line.setAttribute("y2", p.y); line.setAttribute("visibility", "visible");
                }
            });
            svg.addEventListener("pointerup", event => {
                if (!draft) return;
                const current = draft; draft = null;
                const target = terminalAt(event);
                if (current.moved && target && target !== current.port) { connect(current.port, target); selectedTerminal = null; }
                else if (selectedTerminal && selectedTerminal !== current.port) { connect(selectedTerminal, current.port); selectedTerminal = null; }
                else selectedTerminal = current.port;
                render();
            });
            svg.addEventListener("pointercancel", () => { draft = null; });
        }

        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => {
            if (!destroyed && wasPortrait !== (container.clientWidth < 560)) render();
        }) : null;
        observer?.observe(container);
        render();
        return { destroy() { destroyed = true; observer?.disconnect(); }, getState: exported };
    }

    function mountMagnet(container, options) {
        const source = options.state || {};
        const state = {
            B: number(source.B, 0.5), S: number(source.S, 40), N: number(source.N, 50), dt: number(source.dt, 0.5),
            experiment: !!source.experiment, polarity: number(source.polarity, 1) < 0 ? -1 : 1,
            x: clamp(0.05, 0.95, number(source.magnetX, 0.16)), y: clamp(0.15, 0.85, number(source.magnetY, 0.52)),
            lastEmf: number(source.lastEmf, 0), direction: number(source.lastDirection, 1) < 0 ? -1 : 1
        };
        let canvas, ctx, W = 900, H = 420, raf = 0, destroyed = false, dragging = false, lastPointer = null, lastEmit = 0;
        let needleEmf = 0, needleUntil = 0;
        let wasCompact = container.clientWidth < 560;

        function exportState() {
            return { B: state.B, S: state.S, N: state.N, dt: state.dt, experiment: state.experiment, polarity: state.polarity, magnetX: state.x, magnetY: state.y, lastEmf: state.lastEmf, lastDirection: state.direction };
        }
        function emit() { options.onChange?.(exportState(), { success: state.experiment, emf: state.lastEmf }); }
        function emf() { return state.N * state.B * state.S * 1e-4 / state.dt; }
        function size() {
            const compact = container.clientWidth < 560;
            W = compact ? 600 : 900; H = compact ? 460 : 420;
            if (canvas) { canvas.width = W; canvas.height = H; canvas.style.aspectRatio = `${W}/${H}`; }
            wasCompact = compact;
        }
        function compass(x, y) {
            const mx = state.x * W, my = state.y * H;
            const dx = x - mx, dy = y - my;
            const r2 = Math.max(900, dx * dx + dy * dy), r = Math.sqrt(r2), r3 = r2 * r, r5 = r3 * r2;
            const mdotr = state.polarity * dx;
            const bx = 3 * dx * mdotr / r5 - state.polarity / r3;
            const by = 3 * dy * mdotr / r5;
            const angle = Math.atan2(by, bx);
            ctx.save(); ctx.translate(x, y); ctx.rotate(angle);
            ctx.fillStyle = "#ffffff"; ctx.strokeStyle = "#7290a1"; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(0, 0, 15, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.strokeStyle = "#d84b45"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-10, 0); ctx.lineTo(10, 0); ctx.stroke();
            ctx.fillStyle = "#d84b45"; ctx.beginPath(); ctx.moveTo(12, 0); ctx.lineTo(5, -5); ctx.lineTo(5, 5); ctx.closePath(); ctx.fill(); ctx.restore();
        }
        function draw() {
            if (destroyed || !ctx) return;
            const mx = state.x * W, my = state.y * H, coilX = W * 0.65, coilY = H * 0.52;
            ctx.clearRect(0, 0, W, H);
            const gradient = ctx.createLinearGradient(0, 0, 0, H); gradient.addColorStop(0, "#fbfeff"); gradient.addColorStop(1, "#e9f2f6"); ctx.fillStyle = gradient; ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#dbe8ee"; ctx.lineWidth = 1;
            for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
            for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
            ctx.fillStyle = "#31576e"; ctx.font = `700 ${Math.max(13, W * 0.016)}px system-ui`; ctx.fillText(tr("Перетащи магнит через катушку", "Магнитті орама арқылы сүйре", "Drag the magnet through the coil"), 18, 27);

            // Линии поля постоянного магнита.
            ctx.save(); ctx.globalAlpha = 0.18 + state.B * 0.35; ctx.strokeStyle = "#3184ad"; ctx.lineWidth = 2;
            for (let i = 1; i <= 4; i++) {
                const spread = i * 23;
                ctx.beginPath(); ctx.moveTo(mx - 48 * state.polarity, my); ctx.bezierCurveTo(mx - 30, my - spread * 2, mx + 30, my - spread * 2, mx + 48 * state.polarity, my); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(mx - 48 * state.polarity, my); ctx.bezierCurveTo(mx - 30, my + spread * 2, mx + 30, my + spread * 2, mx + 48 * state.polarity, my); ctx.stroke();
            }
            ctx.restore();

            // Провод от катушки к вольтметру.
            ctx.strokeStyle = "#a65b3b"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(coilX + 42, coilY + 30); ctx.lineTo(coilX + 70, H - 48); ctx.lineTo(W - 78, H - 48); ctx.lineTo(W - 78, 105); ctx.stroke();
            ctx.strokeStyle = "#31749b"; ctx.beginPath(); ctx.moveTo(coilX - 42, coilY + 30); ctx.lineTo(coilX - 65, H - 32); ctx.lineTo(W - 112, H - 32); ctx.lineTo(W - 112, 105); ctx.stroke();

            // Катушка.
            for (let i = -3; i <= 3; i++) { ctx.strokeStyle = "#bd742b"; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(coilX + i * 10, coilY, 15, 58, 0, 0, Math.PI * 2); ctx.stroke(); }
            ctx.fillStyle = "#8b5b28"; ctx.font = "800 14px system-ui"; ctx.fillText(`N = ${state.N}`, coilX - 35, coilY + 84);

            // Вольтметр.
            const vx = W - 95, vy = 83, signed = performance.now() < needleUntil ? needleEmf : 0;
            ctx.fillStyle = "#fff"; ctx.strokeStyle = "#537588"; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(vx, vy, 45, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.strokeStyle = "#b7c8d1"; ctx.lineWidth = 2; for (let i = -2; i <= 2; i++) { const a = -Math.PI / 2 + i * 0.45; ctx.beginPath(); ctx.moveTo(vx + Math.cos(a) * 30, vy + Math.sin(a) * 30); ctx.lineTo(vx + Math.cos(a) * 37, vy + Math.sin(a) * 37); ctx.stroke(); }
            const angle = -Math.PI / 2 + clamp(-1, 1, signed / 30) * 1.1; ctx.strokeStyle = "#d64b43"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(vx, vy); ctx.lineTo(vx + Math.cos(angle) * 30, vy + Math.sin(angle) * 30); ctx.stroke();
            ctx.fillStyle = "#234a61"; ctx.font = "800 15px system-ui"; ctx.textAlign = "center"; ctx.fillText("V", vx, vy + 27); ctx.textAlign = "start";

            compass(W * 0.36, H * 0.25); compass(W * 0.38, H * 0.78); compass(W * 0.78, H * 0.78);

            // Перетаскиваемый магнит.
            const mw = W < 700 ? 86 : 104, mh = W < 700 ? 42 : 48;
            ctx.save(); ctx.translate(mx, my); if (dragging) { ctx.shadowColor = "#38bdf8"; ctx.shadowBlur = 22; }
            const leftNorth = state.polarity > 0;
            ctx.fillStyle = leftNorth ? "#d84b45" : "#3180b7"; ctx.fillRect(-mw / 2, -mh / 2, mw / 2, mh);
            ctx.fillStyle = leftNorth ? "#3180b7" : "#d84b45"; ctx.fillRect(0, -mh / 2, mw / 2, mh);
            ctx.strokeStyle = "#173d54"; ctx.lineWidth = 2; ctx.strokeRect(-mw / 2, -mh / 2, mw, mh);
            ctx.fillStyle = "#fff"; ctx.font = "900 19px system-ui"; ctx.textAlign = "center"; ctx.fillText(leftNorth ? "N" : "S", -mw / 4, 7); ctx.fillText(leftNorth ? "S" : "N", mw / 4, 7); ctx.restore(); ctx.textAlign = "start";
            ctx.fillStyle = "#42677b"; ctx.font = "700 12px system-ui"; ctx.fillText(tr("Магнит", "Магнит", "Magnet"), mx - 25, my + mh);

            const emfText = container.querySelector("[data-il-emf]");
            if (emfText) emfText.textContent = `${state.lastEmf.toFixed(2)} V`;
            const statusEl = container.querySelector("[data-il-magnet-status]");
            if (statusEl) statusEl.textContent = state.experiment ? tr("Измерение получено. Можно ввести ЭДС и проверить опыт.", "Өлшем алынды. ЭҚК мәнін енгізіп, тәжірибені тексеруге болады.", "Measurement captured. Enter the EMF and verify the experiment.") : tr("Проведи магнитом рядом с катушкой — вольтметр отклонится.", "Магнитті ораманың жанына жүргіз — вольтметр ығысады.", "Move the magnet near the coil — the voltmeter will deflect.");
            raf = requestAnimationFrame(draw);
        }

        function measure(x, y, dtSeconds, direction) {
            const near = Math.abs(x - 0.65) < 0.16;
            if (!near) return;
            const speed = Math.hypot(x - lastPointer.x, y - lastPointer.y) / Math.max(0.008, dtSeconds);
            if (speed < 0.025) return;
            state.dt = clamp(0.1, 1, 0.28 / Math.max(0.28, speed));
            state.lastEmf = emf(); state.direction = direction < 0 ? -1 : 1; state.experiment = true;
            needleEmf = state.lastEmf * state.polarity * state.direction;
            needleUntil = performance.now() + 220;
            const now = performance.now(); if (now - lastEmit > 55) { lastEmit = now; emit(); }
        }
        function pointerPosition(event) {
            const r = canvas.getBoundingClientRect();
            return { x: clamp(0.04, 0.96, (event.clientX - r.left) / r.width), y: clamp(0.12, 0.88, (event.clientY - r.top) / r.height), px: (event.clientX - r.left) / r.width * W, py: (event.clientY - r.top) / r.height * H };
        }

        container.innerHTML = `<div class="pq-il pq-il-magnet">
            <p class="pq-il-instructions">${tr("Возьми магнит мышью или пальцем и проведи им сквозь катушку. Меняй скорость и полюсы: ЭДС возникает только при изменении магнитного потока.", "Магнитті тышқанмен немесе саусақпен ұстап, орама арқылы жүргіз. Жылдамдық пен полюстерді өзгерт: ЭҚК магнит ағыны өзгергенде ғана пайда болады.", "Drag the magnet through the coil with a mouse or finger. Change speed and poles: EMF appears only when magnetic flux changes.")}</p>
            <canvas class="pq-il-canvas" width="900" height="420" tabindex="0" aria-label="${tr("Перетаскиваемый магнит и катушка с вольтметром", "Сүйренетін магнит, орама және вольтметр", "Draggable magnet and coil with a voltmeter")}"></canvas>
            <div class="pq-il-meter-row"><div class="pq-il-meter"><small>${tr("ЭДС последнего движения", "Соңғы қозғалыстың ЭҚК", "EMF from last movement")}</small><strong data-il-emf>${state.lastEmf.toFixed(2)} V</strong></div><div class="pq-il-meter"><small>${tr("Время изменения потока Δt", "Ағын өзгеру уақыты Δt", "Flux change time Δt")}</small><strong data-il-dt>${state.dt.toFixed(2)} s</strong></div><div class="pq-il-meter"><small>${tr("Полюсы", "Полюстер", "Poles")}</small><strong data-il-poles>${state.polarity > 0 ? "N → S" : "S → N"}</strong></div></div>
            <div class="pq-il-controls">
                <div class="pq-il-control"><label for="pq-il-b"><span>${tr("Индукция B", "Индукция B", "Field B")}</span><output data-output="B" for="pq-il-b">${state.B} T</output></label><input id="pq-il-b" data-range="B" type="range" min="0.1" max="1.2" step="0.1" value="${state.B}"></div>
                <div class="pq-il-control"><label for="pq-il-s"><span>${tr("Площадь S", "Аудан S", "Area S")}</span><output data-output="S" for="pq-il-s">${state.S} cm²</output></label><input id="pq-il-s" data-range="S" type="range" min="10" max="100" step="10" value="${state.S}"></div>
                <div class="pq-il-control"><label for="pq-il-n"><span>${tr("Число витков N", "Орам саны N", "Turns N")}</span><output data-output="N" for="pq-il-n">${state.N}</output></label><input id="pq-il-n" data-range="N" type="range" min="10" max="100" step="10" value="${state.N}"></div>
            </div>
            <div class="pq-il-actions"><button type="button" class="pq-il-action primary" data-action="flip">${tr("Поменять полюсы", "Полюстерді ауыстыру", "Reverse poles")}</button><button type="button" class="pq-il-action" data-action="reset">${tr("Новое измерение", "Жаңа өлшем", "New measurement")}</button></div>
            <div class="pq-il-status" data-il-magnet-status></div>
        </div>`;
        canvas = container.querySelector("canvas"); ctx = canvas.getContext("2d"); size();

        function refreshLabels() {
            const dtEl = container.querySelector("[data-il-dt]"); if (dtEl) dtEl.textContent = `${state.dt.toFixed(2)} s`;
            const polesEl = container.querySelector("[data-il-poles]"); if (polesEl) polesEl.textContent = state.polarity > 0 ? "N → S" : "S → N";
        }
        canvas.addEventListener("pointerdown", event => {
            const p = pointerPosition(event), mx = state.x * W, my = state.y * H;
            if (Math.abs(p.px - mx) > 85 || Math.abs(p.py - my) > 65) return;
            event.preventDefault(); dragging = true; canvas.classList.add("dragging"); canvas.setPointerCapture?.(event.pointerId);
            lastPointer = { x: p.x, y: p.y, time: performance.now() };
        });
        canvas.addEventListener("pointermove", event => {
            if (!dragging || !lastPointer) return;
            const p = pointerPosition(event), now = performance.now(), dt = (now - lastPointer.time) / 1000;
            const direction = p.x < lastPointer.x ? -1 : 1;
            state.x = p.x; state.y = p.y; measure(p.x, p.y, dt, direction);
            lastPointer = { x: p.x, y: p.y, time: now }; refreshLabels();
        });
        const release = () => { if (!dragging) return; dragging = false; lastPointer = null; canvas.classList.remove("dragging"); emit(); refreshLabels(); };
        canvas.addEventListener("pointerup", release); canvas.addEventListener("pointercancel", release);
        canvas.addEventListener("keydown", event => {
            const moves = { ArrowLeft: [-0.025, 0], ArrowRight: [0.025, 0], ArrowUp: [0, -0.035], ArrowDown: [0, 0.035] };
            const move = moves[event.key]; if (!move) return;
            event.preventDefault(); const oldX = state.x; state.x = clamp(0.04, 0.96, state.x + move[0]); state.y = clamp(0.12, 0.88, state.y + move[1]);
            lastPointer = { x: oldX, y: state.y, time: performance.now() }; measure(state.x, state.y, 0.025, move[0]); lastPointer = null; emit(); refreshLabels();
        });
        container.querySelectorAll("[data-range]").forEach(input => input.addEventListener("input", () => {
            const key = input.dataset.range; state[key] = Number(input.value); state.lastEmf = emf();
            const output = container.querySelector(`[data-output="${key}"]`);
            if (output) output.textContent = key === "B" ? `${state.B} T` : key === "S" ? `${state.S} cm²` : String(state.N);
            emit();
        }));
        container.querySelector('[data-action="flip"]')?.addEventListener("click", () => { state.polarity *= -1; emit(); refreshLabels(); });
        container.querySelector('[data-action="reset"]')?.addEventListener("click", () => {
            state.x = 0.16; state.y = 0.52; state.dt = 0.5; state.lastEmf = 0; state.experiment = false; needleEmf = 0; needleUntil = 0; emit(); refreshLabels();
        });
        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => {
            if (!destroyed && wasCompact !== (container.clientWidth < 560)) size();
        }) : null;
        observer?.observe(container); emit(); draw();
        return { destroy() { destroyed = true; dragging = false; cancelAnimationFrame(raf); observer?.disconnect(); }, getState: exportState };
    }

    function mount(type, container, options = {}) {
        if (!container) throw new Error("Interactive lab container is required");
        injectStyles();
        if (type === "circuit") return mountCircuit(container, options);
        if (type === "magnet") return mountMagnet(container, options);
        throw new Error("Unknown interactive lab: " + type);
    }

    window.PQInteractiveLabs = { mount };
})();
