/* ============================================================
   PQ SIM LIGHT 7 — светлые «фотореалистичные» сцены для 15
   полевых лабораторий 7 класса. Рисуем на canvas предметы,
   а не эмодзи, и даём ученику тянуть/нажимать мышью.
   Мост к 7/simulators.js: window.PQSim7Bridge.
   ============================================================ */
(function () {
    "use strict";
    const VERSION = "1.0";
    const LW = 760, LH = 260;

    /* ---------- палитра ---------- */
    function tr7(ru, kk, en) {
        let l = "ru";
        try { if (window.I18n && I18n.currentLang) l = I18n.currentLang; } catch (e) {}
        return l === "kk" ? kk : l === "en" ? en : ru;
    }

    const C = {
        ink: "#152a40", ink2: "#3d5a78", soft: "#7d95ae",
        steelA: "#ffffff", steelB: "#e2e9f1", steelC: "#b9c6d4", steelD: "#8c9cae",
        brassA: "#ffe9a8", brassB: "#d9a94a", brassC: "#a9762a",
        water: "rgba(86,176,226,0.55)", waterDeep: "rgba(38,118,172,0.66)",
        wood1: "#e2c69c", wood2: "#bd9260"
    };
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const lerp = (a, b, t) => a + (b - a) * t;
    // map поддерживает и «перевёрнутые» диапазоны (a > b): тянем вверх — значение растёт
    const map = (v, a, b, c, d) => {
        const lo = Math.min(a, b), hi = Math.max(a, b);
        const vv = Math.max(lo, Math.min(hi, v));
        return c + (vv - a) / (b - a || 1) * (d - c);
    };

    function rr(ctx, x, y, w, h, r) {
        const rad = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
        ctx.beginPath();
        ctx.moveTo(x + rad, y);
        ctx.arcTo(x + w, y, x + w, y + h, rad);
        ctx.arcTo(x + w, y + h, x, y + h, rad);
        ctx.arcTo(x, y + h, x, y, rad);
        ctx.arcTo(x, y, x + w, y, rad);
        ctx.closePath();
    }
    function fillRR(ctx, x, y, w, h, r, fill) { rr(ctx, x, y, w, h, r); ctx.fillStyle = fill; ctx.fill(); }
    function strokeRR(ctx, x, y, w, h, r, stroke, lw) { rr(ctx, x, y, w, h, r); ctx.strokeStyle = stroke; ctx.lineWidth = lw || 1; ctx.stroke(); }
    function lin(ctx, x0, y0, x1, y1, stops) {
        const g = ctx.createLinearGradient(x0, y0, x1, y1);
        stops.forEach(([p, c]) => g.addColorStop(p, c));
        return g;
    }
    function rad(ctx, x, y, r0, r1, stops) {
        const g = ctx.createRadialGradient(x, y, r0, x, y, r1);
        stops.forEach(([p, c]) => g.addColorStop(p, c));
        return g;
    }
    function shadowed(ctx, blur, color, dy, fn) {
        ctx.save();
        ctx.shadowColor = color; ctx.shadowBlur = blur; ctx.shadowOffsetY = dy || 0;
        fn();
        ctx.restore();
    }
    function text(ctx, str, x, y, opt) {
        const o = opt || {};
        ctx.font = `${o.weight || 500} ${o.size || 12}px ${o.family || "system-ui, 'Segoe UI', Arial, sans-serif"}`;
        ctx.fillStyle = o.color || C.ink;
        ctx.textAlign = o.align || "left";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(str, x, y);
    }
    function pill(ctx, str, x, y, opt) {
        const o = opt || {};
        ctx.font = `800 ${o.size || 10.5}px system-ui, 'Segoe UI', Arial, sans-serif`;
        const w = ctx.measureText(str).width + 20;
        fillRR(ctx, x, y, w, 20, 10, o.bg || "rgba(255,255,255,0.94)");
        strokeRR(ctx, x, y, w, 20, 10, o.border || "rgba(60,130,190,0.32)", 1);
        text(ctx, str, x + w / 2, y + 14, { size: o.size || 10.5, color: o.color || "#1f6f9c", align: "center", weight: 800 });
        return w;
    }
    function contactShadow(ctx, cx, cy, rx, ry, a) {
        ctx.fillStyle = `rgba(60,84,110,${a || 0.18})`;
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
    }
    function steelBar(ctx, x, y, w, h, r) {
        fillRR(ctx, x, y, w, h, r, lin(ctx, x, y, x + w, y + h, [[0, C.steelA], [0.45, C.steelB], [1, C.steelD]]));
    }
    function brassKnob(ctx, x, y, r, angle) {
        shadowed(ctx, 8, "rgba(40,60,90,0.3)", 3, () => {
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = lin(ctx, x - r, y - r, x + r, y + r, [[0, C.brassA], [0.55, C.brassB], [1, C.brassC]]);
            ctx.fill();
        });
        ctx.beginPath(); ctx.arc(x, y, r * 0.94, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.55)"; ctx.lineWidth = 1.6; ctx.stroke();
        ctx.strokeStyle = "#7a5518"; ctx.lineWidth = 2; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle || -Math.PI / 2) * r * 0.78, y + Math.sin(angle || -Math.PI / 2) * r * 0.78);
        ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, r * 0.2, 0, Math.PI * 2); ctx.fillStyle = "#8a6420"; ctx.fill();
    }
    function woodTop(ctx, w, h, horizon) {
        const y = h * horizon;
        ctx.fillStyle = lin(ctx, 0, y, 0, h, [[0, "#f7f3ea"], [0.12, "#efe6d5"], [1, "#e0d2b8"]]);
        ctx.fillRect(0, y, w, h - y);
        ctx.strokeStyle = "rgba(150,120,80,0.16)"; ctx.lineWidth = 1;
        for (let i = 1; i < 5; i++) {
            ctx.beginPath(); ctx.moveTo(0, y + i * (h - y) / 5); ctx.lineTo(w, y + i * (h - y) / 5); ctx.stroke();
        }
        ctx.fillStyle = "rgba(255,255,255,0.75)"; ctx.fillRect(0, y - 1.5, w, 2);
        return y;
    }
    function room(ctx, w, h, horizon, opt) {
        const o = opt || {};
        const y = h * (horizon || 0.72);
        ctx.fillStyle = lin(ctx, 0, 0, 0, y, [[0, "#fcfeff"], [0.55, "#f2f7fd"], [1, "#e6eef8"]]);
        ctx.fillRect(0, 0, w, y);
        ctx.strokeStyle = "rgba(120,150,180,0.13)"; ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 52) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, y); ctx.stroke(); }
        for (let yy = 20; yy < y; yy += 44) { ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(w, yy); ctx.stroke(); }
        ctx.fillStyle = rad(ctx, w * 0.14, -10, 8, w * 0.7, [[0, "rgba(255,255,255,0.95)"], [1, "rgba(255,255,255,0)"]]);
        ctx.fillRect(0, 0, w, y);
        if (o.sky) {
            ctx.fillStyle = lin(ctx, 0, 0, 0, y, [[0, "#dff1ff"], [1, "#f6fcff"]]);
            ctx.fillRect(0, 0, w, y);
            ctx.fillStyle = rad(ctx, w * 0.82, y * 0.28, 4, 70, [[0, "rgba(255,247,210,1)"], [1, "rgba(255,240,190,0)"]]);
            ctx.fillRect(0, 0, w, y);
            ctx.fillStyle = "#d6e7d8";
            ctx.beginPath(); ctx.moveTo(0, y);
            for (let x = 0; x <= w; x += 36) ctx.lineTo(x, y - 20 - Math.sin(x * 0.013) * 12);
            ctx.lineTo(w, y); ctx.closePath(); ctx.fill();
        }
        woodTop(ctx, w, h, horizon || 0.72);
        ctx.fillStyle = rad(ctx, w * 0.5, h * 0.42, Math.min(w, h) * 0.36, Math.max(w, h) * 0.8, [[0, "rgba(40,70,110,0)"], [1, "rgba(40,70,110,0.13)"]]);
        ctx.fillRect(0, 0, w, h);
        return y;
    }

    /* ---------- ручки / подсказки ---------- */
    const HITS = [];
    function hit(h) { HITS.push(h); }
    function handle(ctx, x, y, label, spec) {
        ctx.save();
        ctx.beginPath(); ctx.arc(x, y, 10.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.94)"; ctx.fill();
        ctx.strokeStyle = "rgba(47,125,184,0.9)"; ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fillStyle = "#2f7db8"; ctx.fill();
        ctx.restore();
        if (label) text(ctx, label, x + 14, y + 4, { size: 9.5, color: "#2f7db8", weight: 800 });
        if (spec) hit(Object.assign({ kind: "drag", x: x, y: y }, spec));
    }
    function gripChip(ctx, x, y, label) {
        ctx.font = "700 10px system-ui, 'Segoe UI', Arial, sans-serif";
        const tw = ctx.measureText(label).width;
        fillRR(ctx, x, y, tw + 30, 19, 9, "rgba(255,255,255,0.93)");
        strokeRR(ctx, x, y, tw + 30, 19, 9, "rgba(60,130,190,0.45)", 1);
        const ix = x + 8, iy = y + 3.5;
        ctx.save();
        ctx.strokeStyle = "#2f7db8"; ctx.fillStyle = "#2f7db8"; ctx.lineWidth = 1.15; ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(ix + 5, iy + 1); ctx.lineTo(ix + 5, iy + 11.5);
        ctx.moveTo(ix, iy + 6.2); ctx.lineTo(ix + 10, iy + 6.2);
        ctx.stroke();
        [[5, 1, 0, -1], [5, 11.5, 0, 1], [0, 6.2, -1, 0], [10, 6.2, 1, 0]].forEach((a) => {
            ctx.beginPath();
            ctx.moveTo(ix + a[0] + a[2] * 2.4, iy + a[1] + a[3] * 2.4);
            ctx.lineTo(ix + a[0] + a[2] * -1.4 + a[3] * 2, iy + a[1] + a[3] * -1.4 + a[2] * 2);
            ctx.lineTo(ix + a[0] + a[2] * -1.4 - a[3] * 2, iy + a[1] + a[3] * -1.4 - a[2] * 2);
            ctx.closePath(); ctx.fill();
        });
        ctx.restore();
        text(ctx, label, x + 25, y + 13.5, { size: 10, color: C.ink2, weight: 700 });
    }
    function chipBtn(ctx, x, y, wdt, label, on) {
        fillRR(ctx, x, y, wdt, 22, 11, on ? "rgba(47,125,184,0.18)" : "rgba(255,255,255,0.92)");
        strokeRR(ctx, x, y, wdt, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
        text(ctx, label, x + wdt / 2, y + 15, { size: 10, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 800 });
    }

    /* ---------- вспомогательные предметы ---------- */
    function beaker(ctx, x, y, w, h, level, colorTop, colorBot) {
        ctx.save();
        rr(ctx, x, y, w, h, 9); ctx.clip();
        const wy = y + h * (1 - level);
        ctx.fillStyle = lin(ctx, x, wy, x, y + h, [[0, colorTop || "rgba(126,200,236,0.62)"], [1, colorBot || "rgba(64,150,200,0.7)"]]);
        ctx.fillRect(x, wy, w, y + h - wy);
        ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fillRect(x, wy - 1, w, 2);
        ctx.restore();
        ctx.strokeStyle = "rgba(120,150,180,0.7)"; ctx.lineWidth = 2; rr(ctx, x, y, w, h, 9); ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(x + 7, y + 14); ctx.lineTo(x + 7, y + h - 16); ctx.stroke();
        return y + h * (1 - level);
    }
    function springScale(ctx, x, y, len, load, label) {
        steelBar(ctx, x - 13, y, 26, 20, 6);
        fillRR(ctx, x - 15, y - 12, 30, 14, 5, lin(ctx, 0, y - 12, 0, y + 2, [[0, "#f7fafd"], [1, "#c7d3e0"]]));
        ctx.strokeStyle = "#7d8c9b"; ctx.lineWidth = 1.6;
        for (let i = 0; i < 7; i++) {
            ctx.beginPath();
            ctx.moveTo(x - 6, y + 20 + i * (len / 7));
            ctx.quadraticCurveTo(x + 8, y + 24 + i * (len / 7), x - 6, y + 28 + i * (len / 7));
            ctx.stroke();
        }
        ctx.strokeStyle = "rgba(90,110,135,0.7)"; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(x, y + 20 + len); ctx.lineTo(x, y + 32 + len); ctx.stroke();
        fillRR(ctx, x - 16, y + 30 + len, 32, 22, 4, lin(ctx, 0, y + 30 + len, 0, y + 52 + len, [[0, "#cfd9e3"], [1, "#8b9bad"]]));
        if (label) text(ctx, label, x, y + 46 + len, { size: 10, align: "center", color: "#25455f", weight: 800 });
    }
    function crate(ctx, x, y, w, h, label, col) {
        shadowed(ctx, 10, "rgba(40,60,85,0.26)", 4, () => {
            fillRR(ctx, x, y, w, h, 5, lin(ctx, x, y, x + w, y + h, [[0, col ? col[0] : "#e8c579"], [1, col ? col[1] : "#b8892f"]]));
        });
        strokeRR(ctx, x, y, w, h, 5, "rgba(120,86,30,0.4)", 1.2);
        if (label) text(ctx, label, x + w / 2, y + h / 2 + 4, { size: 11, align: "center", color: "#4b3410", weight: 900 });
    }

    /* ============================ СЦЕНЫ ============================ */
    const SCENES = {};

    /* §3 — единицы измерения: деталь на линейке */
    SCENES.units = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.74);
        const L = Number(st.length) || 65;
        // линейка
        shadowed(ctx, 12, "rgba(40,60,90,0.22)", 6, () => {
            fillRR(ctx, 80, base - 54, 600, 46, 8, lin(ctx, 0, base - 54, 0, base - 8, [[0, "#fffdf4"], [1, "#e8dfc4"]]));
        });
        for (let i = 0; i <= 100; i++) {
            const x = 88 + i * 5.86;
            const big = i % 10 === 0;
            ctx.strokeStyle = big ? "rgba(40,60,80,0.75)" : "rgba(60,80,100,0.45)";
            ctx.lineWidth = big ? 1.6 : 1;
            ctx.beginPath(); ctx.moveTo(x, base - 14); ctx.lineTo(x, base - 14 - (big ? 14 : i % 5 === 0 ? 9 : 5)); ctx.stroke();
            if (big) text(ctx, `${i}`, x, base - 34, { size: 8.5, align: "center", color: C.soft });
        }
        // деталь
        const lenPx = L * 5.86;
        shadowed(ctx, 10, "rgba(40,60,90,0.3)", 5, () => {
            fillRR(ctx, 88, base - 96, lenPx, 36, 4, lin(ctx, 0, base - 96, 0, base - 60, [[0, "#eef4fa"], [0.5, "#c4d2e0"], [1, "#8e9dae"]]));
        });
        strokeRR(ctx, 88, base - 96, lenPx, 36, 4, "rgba(90,110,135,0.6)", 1);
        for (let i = 0; i < Math.floor(L / 10); i++) {
            ctx.beginPath(); ctx.arc(110 + i * 58, base - 78, 4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(90,110,135,0.5)"; ctx.fill();
        }
        handle(ctx, 88 + lenPx, base - 78, "", { kind: "drag", key: "length", axis: "x", from: 88 + 20 * 5.86, to: 88 + 80 * 5.86, min: 20, max: 80 });
        pill(ctx, `${L} см`, 92, base - 128, { size: 11.5 });
        gripChip(ctx, 24, 22, "тяни правый край детали");
        // памятка перевода единиц
        const mx = 486, my = base - 170;
        fillRR(ctx, mx, my, 250, 26, 13, "rgba(255,255,255,0.94)");
        strokeRR(ctx, mx, my, 250, 26, 13, "rgba(120,146,172,0.4)", 1);
        text(ctx, "1 м = 100 см = 1000 мм", mx + 125, my + 17, { size: 11, align: "center", color: "#1f6f9c", weight: 800 });
        text(ctx, tr7("цена деления 1 см = 10 мм", "бөлік бағасы 1 см = 10 мм", "division 1 cm = 10 mm"), mx + 125, my + 42, { size: 9.5, align: "center", color: C.soft, weight: 700 });
    };

    /* §5 — измерение длины: карандаш на линейке */
    SCENES.lab_measure = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.76);
        const L = clamp(Number(st.length) || 20, 1, 60);
        shadowed(ctx, 12, "rgba(40,60,90,0.22)", 6, () => {
            fillRR(ctx, 70, base - 70, 620, 62, 9, lin(ctx, 0, base - 70, 0, base - 8, [[0, "#fffdf5"], [1, "#e7ddc2"]]));
        });
        for (let i = 0; i <= 100; i++) {
            const x = 78 + i * 6.02;
            const big = i % 10 === 0;
            ctx.strokeStyle = big ? "rgba(40,60,80,0.75)" : "rgba(60,80,100,0.4)";
            ctx.lineWidth = big ? 1.6 : 1;
            ctx.beginPath(); ctx.moveTo(x, base - 12); ctx.lineTo(x, base - 12 - (big ? 18 : i % 5 === 0 ? 12 : 7)); ctx.stroke();
            if (big) text(ctx, `${i}`, x, base - 34, { size: 8.5, align: "center", color: C.soft });
        }
        // карандаш
        const px = 78 + 30 * 6.02, pLen = L * 6.02;
        handle(ctx, px, base - 96, "", { kind: "drag", key: "length", axis: "x", from: 78 + 1 * 6.02, to: 78 + 60 * 6.02, min: 1, max: 60 });
        shadowed(ctx, 10, "rgba(40,60,90,0.28)", 5, () => {
            fillRR(ctx, px, base - 108, pLen, 20, 3, lin(ctx, 0, base - 108, 0, base - 88, [[0, "#ffe9a8"], [1, "#d9a94a"]]));
            ctx.beginPath();
            ctx.moveTo(px + pLen, base - 108); ctx.lineTo(px + pLen + 16, base - 98); ctx.lineTo(px + pLen, base - 88);
            ctx.closePath(); ctx.fillStyle = "#f3e4c4"; ctx.fill();
            ctx.beginPath();
            ctx.moveTo(px + pLen + 10, base - 102); ctx.lineTo(px + pLen + 16, base - 98); ctx.lineTo(px + pLen + 10, base - 94);
            ctx.closePath(); ctx.fillStyle = "#3d4a58"; ctx.fill();
            ctx.fillStyle = "#e2686f"; ctx.fillRect(px - 8, base - 108, 8, 20);
        });
        ctx.strokeStyle = "rgba(47,125,184,0.7)"; ctx.lineWidth = 1.6; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(px, base - 118); ctx.lineTo(px, base - 44); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px + pLen, base - 118); ctx.lineTo(px + pLen, base - 44); ctx.stroke(); ctx.setLineDash([]);
        pill(ctx, `${L} см = ${(L / 100).toFixed(2)} м`, px + 6, base - 148, { size: 11 });
        gripChip(ctx, 24, 22, "тяни остриё карандаша");
    };

    /* §7 — относительность движения: дорога и автобус */
    SCENES.lab_relative = (ctx, w, h, st) => {
        room(ctx, w, h, 0.78, { sky: true });
        const roadY = h * 0.78;
        // дорога
        ctx.fillStyle = lin(ctx, 0, roadY - 66, 0, h, [[0, "#e7ebef"], [0.4, "#b9c3cd"], [1, "#9aa6b2"]]);
        ctx.fillRect(0, roadY - 66, w, h - roadY + 66);
        ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 3; ctx.setLineDash([26, 20]);
        ctx.beginPath(); ctx.moveTo(0, roadY - 4); ctx.lineTo(w, roadY - 4); ctx.stroke(); ctx.setLineDash([]);
        // автобус
        const busX = 250, busY = roadY - 86;
        shadowed(ctx, 18, "rgba(30,50,70,0.3)", 8, () => {
            fillRR(ctx, busX, busY, 240, 78, 12, lin(ctx, 0, busY, 0, busY + 78, [[0, "#fdfefe"], [0.55, "#eaf1f7"], [1, "#c8d5e1"]]));
        });
        fillRR(ctx, busX + 14, busY + 10, 212, 32, 6, lin(ctx, 0, busY + 10, 0, busY + 42, [[0, "#bfe4f5"], [1, "#8ec4de"]]));
        fillRR(ctx, busX + 14, busY + 18, 212, 2, 1, "rgba(255,255,255,0.7)");
        fillRR(ctx, busX + 14, busY + 58, 212, 8, 4, "#2f7db8");
        [busX + 52, busX + 190].forEach((wx) => {
            ctx.beginPath(); ctx.arc(wx, busY + 82, 14, 0, Math.PI * 2); ctx.fillStyle = "#39434e"; ctx.fill();
            ctx.beginPath(); ctx.arc(wx, busY + 82, 6, 0, Math.PI * 2); ctx.fillStyle = "#9fb0c2"; ctx.fill();
        });
        // наблюдатели
        const groundOn = st.frame === "ground";
        chipBtn(ctx, 24, 22, 172, "наблюдатель на дороге", groundOn);
        hit({ kind: "tap", key: "frame", value: "ground", x: 110, y: 33, r: 30 });
        chipBtn(ctx, 206, 22, 176, "пассажир в автобусе", !groundOn);
        hit({ kind: "tap", key: "frame", value: "train", x: 294, y: 33, r: 30 });
        // капли
        for (let i = 0; i < 7; i++) {
            const x = 120 + i * 84 + ((st.phase || 0) * 12 + i * 9) % 60;
            const y = 70 + ((i * 53 + (st.phase || 0) * 6) % 90);
            ctx.strokeStyle = "rgba(96,150,200,0.85)"; ctx.lineWidth = 2.4; ctx.lineCap = "round";
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 10, y + 16); ctx.stroke();
        }
        // стрелка скорости
        const arrowY = roadY - 116;
        ctx.strokeStyle = "#2f7db8"; ctx.lineWidth = 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(120, arrowY); ctx.lineTo(300, arrowY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(300, arrowY - 6); ctx.lineTo(312, arrowY); ctx.lineTo(300, arrowY + 6); ctx.closePath(); ctx.fillStyle = "#2f7db8"; ctx.fill();
        pill(ctx, "капля 6 м/с · автобус 5 м/с", 24, 56, { size: 10.5 });
        pill(ctx, groundOn ? "скорость капли 6 м/с" : "в автобусе капля 1 м/с", 24, 82, { size: 10.5, color: groundOn ? "#1f6f9c" : "#227a4d" });
        gripChip(ctx, 470, 56, "выбери систему отсчёта");
    };

    /* §8–9 — движение: ровер и маяк */
    SCENES.lab_motion = (ctx, w, h, st) => {
        room(ctx, w, h, 0.72, { sky: true });
        const trackY = h * 0.72 - 8;
        const target = Number(st.targetDistance) || 60;
        const dist = Number(st.distance) || 0;
        // дорожка
        fillRR(ctx, 60, trackY, 640, 10, 5, lin(ctx, 0, trackY, 0, trackY + 10, [[0, "#e9eff6"], [1, "#b9c6d4"]]));
        const total = Math.max(target, 30);
        const roverX = 70 + (dist / total) * 600;
        const beaconX = 70 + (target / total) * 600;
        // маяк
        ctx.strokeStyle = "#8c9cae"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(beaconX, trackY); ctx.lineTo(beaconX, trackY - 92); ctx.stroke();
        ctx.beginPath(); ctx.arc(beaconX, trackY - 96, 8, 0, Math.PI * 2); ctx.fillStyle = "#cf4a3d"; ctx.fill();
        ctx.fillStyle = rad(ctx, beaconX, trackY - 96, 3, 26, [[0, "rgba(220,90,70,0.45)"], [1, "rgba(220,90,70,0)"]]);
        ctx.beginPath(); ctx.arc(beaconX, trackY - 96, 26, 0, Math.PI * 2); ctx.fill();
        pill(ctx, `${target} м`, beaconX - 26, trackY - 132, { size: 9.5 });
        // ровер
        shadowed(ctx, 12, "rgba(40,60,90,0.3)", 5, () => {
            fillRR(ctx, roverX - 26, trackY - 34, 54, 22, 5, lin(ctx, 0, trackY - 34, 0, trackY - 12, [[0, "#fdfdfe"], [1, "#c2cfdc"]]));
        });
        fillRR(ctx, roverX - 16, trackY - 46, 30, 14, 4, "#dce7f2");
        fillRR(ctx, roverX - 12, trackY - 43, 22, 7, 2, "rgba(120,190,225,0.95)");
        [-16, 16].forEach((dx) => {
            ctx.beginPath(); ctx.arc(roverX + dx, trackY - 8, 7, 0, Math.PI * 2); ctx.fillStyle = "#4d5964"; ctx.fill();
            ctx.beginPath(); ctx.arc(roverX + dx, trackY - 8, 3, 0, Math.PI * 2); ctx.fillStyle = "#9fb0c2"; ctx.fill();
        });
        steelBar(ctx, roverX + 22, trackY - 60, 3, 26, 1.5);
        ctx.beginPath(); ctx.arc(roverX + 24, trackY - 62, 4, 0, Math.PI * 2); ctx.fillStyle = "#2ea36a"; ctx.fill();
        // шкала пройденного
        ctx.strokeStyle = "rgba(47,125,184,0.6)"; ctx.lineWidth = 2; ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(70, trackY + 34); ctx.lineTo(roverX, trackY + 34); ctx.stroke(); ctx.setLineDash([]);
        pill(ctx, `s = ${Math.round(dist)} м · t = ${Math.round(Number(st.time) || 0)} с · v = ${Number(st.speed) || 4} м/с`, 70, trackY + 46, { size: 10.5 });
        hit({ kind: "drag", key: "distance", axis: "x", x: roverX, y: trackY - 26, from: 70, to: 670, min: 0, max: total, r: 34 });
        gripChip(ctx, 24, 22, "тяни ровер к маяку");
        // солнце/пыль
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        for (let i = 0; i < 4; i++) {
            ctx.beginPath(); ctx.ellipse(roverX - 60 - i * 18, trackY - 6 + (i % 2) * 4, 14 - i * 2, 4, 0, 0, Math.PI * 2); ctx.fill();
        }
    };

    /* §13 — плотность: весы и мензурка */
    SCENES.lab_density = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.78);
        // весы
        contactShadow(ctx, 196, base - 6, 92, 10, 0.22);
        fillRR(ctx, 120, base - 26, 152, 22, 8, lin(ctx, 0, base - 26, 0, base - 4, [[0, "#eef4fa"], [1, "#a9b7c6"]]));
        steelBar(ctx, 190, base - 86, 8, 62, 4);
        fillRR(ctx, 122, base - 92, 144, 10, 5, lin(ctx, 0, base - 92, 0, base - 82, [[0, "#f4f8fc"], [1, "#a9b7c6"]]));
        // чашка
        for (let i = 0; i < 6; i++) {
            ctx.strokeStyle = "rgba(110,130,150,0.5)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(170 + i * 8, base - 86); ctx.lineTo(178 + i * 8, base - 74); ctx.stroke();
        }
        fillRR(ctx, 158, base - 78, 64, 9, 4, "#cfd9e3");
        const weighed = st.weighed;
        crate(ctx, 130, base - 112, 118, 22, weighed ? `${st.mass} г` : "?", ["#eef4fa", "#93a2b3"]);
        // мензурка
        const wx = 430, wy = base - 118, ww = 96, wh = 100;
        beaker(ctx, wx, wy, ww, wh, st.immersed ? 0.72 : 0.52);
        for (let i = 0; i < 5; i++) {
            const y = wy + 22 + i * 16;
            ctx.strokeStyle = "rgba(60,90,120,0.45)"; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(wx + ww - 20, y); ctx.lineTo(wx + ww - 6, y); ctx.stroke();
            text(ctx, `${(i + 1) * 100}`, wx + ww - 24, y + 3, { size: 7.5, align: "right", color: C.soft });
        }
        // образец
        const sx = st.immersed ? wx + 34 : 336, sy = st.immersed ? wy + 60 : base - 40;
        shadowed(ctx, 10, "rgba(40,60,90,0.3)", 4, () => {
            fillRR(ctx, sx, sy, 28, 20, 3, lin(ctx, 0, sy, 0, sy + 20, [[0, "#cbb79b"], [1, "#8c7256"]]));
        });
        text(ctx, st.sample || "A", sx + 14, sy + 14, { size: 10, align: "center", color: "#fdf8ee", weight: 900 });
        pill(ctx, `m = ${weighed ? st.mass + " г" : "—"}`, 96, 26, { size: 10.5 });
        pill(ctx, `V = ${st.immersed ? st.volume + " см³" : "—"}`, 220, 26, { size: 10.5 });
        // кнопки-цели
        chipBtn(ctx, 560, 24, 88, "A", st.sample === "A");
        chipBtn(ctx, 656, 24, 88, "B", st.sample === "B");
        chipBtn(ctx, 656, 52, 88, "C", st.sample === "C");
        hit({ kind: "tap", key: "sample", value: "A", x: 604, y: 35, r: 24 });
        hit({ kind: "tap", key: "sample", value: "B", x: 700, y: 35, r: 24 });
        hit({ kind: "tap", key: "sample", value: "C", x: 700, y: 63, r: 24 });
        // «взвесить» — тянем образец на чашку
        hit({ kind: "drag", key: "weigh", axis: "y", x: sx + 14, y: sy + 10, from: sy, to: sy - 40, min: 0, max: 1, r: 30 });
        gripChip(ctx, 24, 58, "тяни образец на весы");
        // мензурка — тоже цель: клик погружает образец (как кнопка «Погрузить в воду»)
        hit({ kind: "tap", key: "immerse", x: wx + ww / 2, y: wy + wh / 2, r: 62 });
        text(ctx, "погрузи в мензурку →", wx - 6, base - 138, { size: 9.5, color: C.soft, weight: 700 });
    };

    /* §15 — вес на разных планетах */
    SCENES.lab_gravity = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.8);
        const moon = st.body === "Moon";
        const g = moon ? 1.6 : 9.8;
        // планета
        const px = 132, py = base - 40, pr = moon ? 40 : 54;
        shadowed(ctx, 20, "rgba(40,60,90,0.32)", 8, () => {
            ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2);
            ctx.fillStyle = moon
                ? rad(ctx, px - 12, py - 14, 4, pr * 1.2, [[0, "#f4f7fa"], [0.6, "#cfd8e2"], [1, "#9aa9ba"]])
                : rad(ctx, px - 14, py - 16, 4, pr * 1.2, [[0, "#9fd8ff"], [0.55, "#3f9bd6"], [1, "#1d5f92"]]);
            ctx.fill();
        });
        if (!moon) {
            ctx.save();
            ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2); ctx.clip();
            ctx.fillStyle = "rgba(96,190,130,0.55)";
            [[-16, -10, 16, 9], [10, 12, 14, 8], [-2, 24, 18, 7]].forEach((c) => {
                ctx.beginPath(); ctx.ellipse(px + c[0], py + c[1], c[2], c[3], 0.3, 0, Math.PI * 2); ctx.fill();
            });
            ctx.restore();
        } else {
            [[-12, -8, 9], [10, 6, 7], [-4, 16, 5]].forEach((c) => {
                ctx.beginPath(); ctx.arc(px + c[0], py + c[1], c[2], 0, Math.PI * 2);
                ctx.fillStyle = "rgba(150,165,180,0.5)"; ctx.fill();
            });
        }
        pill(ctx, moon ? "Луна · g = 1,6 Н/кг" : "Земля · g = 9,8 Н/кг", 60, 26, { size: 10.5, color: moon ? "#4b5b6d" : "#1f6f9c" });
        chipBtn(ctx, 250, 24, 92, "Земля", !moon);
        chipBtn(ctx, 350, 24, 92, "Луна", moon);
        hit({ kind: "tap", key: "body", value: "Earth", x: 296, y: 35, r: 26 });
        hit({ kind: "tap", key: "body", value: "Moon", x: 396, y: 35, r: 26 });
        // динамометр на штативе: стойка доходит до пола, подпись — слева от пружины
        const sx = 604;
        steelBar(ctx, sx - 132, 46, 172, 7, 3.5);
        steelBar(ctx, sx + 36, 46, 8, base - 66, 3.5);
        fillRR(ctx, sx + 10, base - 20, 60, 10, 5, lin(ctx, 0, base - 20, 0, base - 10, [[0, "#eef4fa"], [1, "#9aa9ba"]]));
        springScale(ctx, sx, 56, moon ? 26 : 46, st.massKg);
        const wgt = st.massKg * g;
        pill(ctx, `P = ${wgt.toFixed(1).replace(".", ",")} Н`, sx - 132, 78, { size: 11, color: "#227a4d" });
        // груз висит на крючке динамометра
        const hookY = 56 + 52 + (moon ? 26 : 46);
        ctx.strokeStyle = "rgba(90,110,135,0.75)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(sx, hookY - 10); ctx.lineTo(sx, hookY + 2); ctx.stroke();
        crate(ctx, sx - 26, hookY + 2, 52, 34, `${st.massKg} кг`);
        // выбор массы
        [1, 2, 3].forEach((m, i) => {
            chipBtn(ctx, 250 + i * 64, 196, 58, `${m} кг`, Number(st.massKg) === m);
            hit({ kind: "tap", key: "massKg", value: m, x: 279 + i * 64, y: 207, r: 22 });
        });
        gripChip(ctx, 250, 226, "выбери планету и массу");
        if (st.earthWeight || st.moonWeight) {
            const list = [];
            if (st.earthWeight) list.push(`Земля: ${st.earthWeight.toFixed(1).replace(".", ",")} Н`);
            if (st.moonWeight) list.push(`Луна: ${st.moonWeight.toFixed(1).replace(".", ",")} Н`);
            pill(ctx, list.join("  ·  "), 250, 154, { size: 10, color: C.ink2 });
        }
    };

    /* §19 — трение */
    SCENES.friction = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.8);
        const N = Number(st.normal) || 50;
        const mu = Number(st.surface) || 0.15;
        const y = base - 18;
        // поверхность
        const surf = mu < 0.2 ? lin(ctx, 0, y - 14, 0, y, [[0, "#eaf8ff"], [1, "#bfe4f5"]])
            : mu < 0.45 ? lin(ctx, 0, y - 14, 0, y, [[0, "#e6ecf2"], [1, "#aab7c4"]])
                : lin(ctx, 0, y - 14, 0, y, [[0, "#5d6670"], [1, "#3b444d"]]);
        ctx.fillStyle = surf; ctx.fillRect(40, y - 14, 680, 14);
        ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.fillRect(40, y - 14, 680, 1.6);
        // брусок
        const bw = 116, bh = 56;
        shadowed(ctx, 14, "rgba(40,60,90,0.3)", 6, () => {
            fillRR(ctx, 190, y - 14 - bh, bw, bh, 6, lin(ctx, 0, y - 14 - bh, 0, y - 14, [[0, "#f2d9b0"], [1, "#c39a62"]]));
        });
        for (let i = 0; i < 4; i++) {
            ctx.strokeStyle = "rgba(150,110,60,0.45)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(196, y - 14 - bh + 10 + i * 12); ctx.lineTo(300, y - 14 - bh + 8 + i * 12); ctx.stroke();
        }
        // груз сверху
        crate(ctx, 216, y - 14 - bh - 40, 62, 34, `${N} Н`, ["#eaf1f8", "#9aa9ba"]);
        // сила трения
        const F = mu * N;
        const arrowLen = map(F, 0, 60, 16, 120);
        ctx.strokeStyle = "#cf4a3d"; ctx.lineWidth = 3.4; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(190, y - 14 - bh / 2); ctx.lineTo(190 - arrowLen, y - 14 - bh / 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(190 - arrowLen - 10, y - 14 - bh / 2); ctx.lineTo(190 - arrowLen, y - 14 - bh / 2 - 6); ctx.lineTo(190 - arrowLen, y - 14 - bh / 2 + 6); ctx.closePath(); ctx.fillStyle = "#cf4a3d"; ctx.fill();
        pill(ctx, `F = μ·N = ${F.toFixed(1)} Н`, 24, 24, { size: 11, color: "#b4392f" });
        // регулировка N: тянем груз вверх/вниз
        handle(ctx, 340, y - 14 - bh - 30, "", { kind: "drag", key: "normal", axis: "y", from: y - 60, to: y - 160, min: 10, max: 100 });
        pill(ctx, `N = ${N} Н`, 300, y - 14 - bh - 56, { size: 10.5 });
        // выбор поверхности
        const opts = [[0.15, "лёд"], [0.35, "металл"], [0.6, "резина"]];
        opts.forEach((op, i) => {
            chipBtn(ctx, 452 + i * 96, 24, 90, `${op[1]} μ=${String(op[0]).replace(".", ",")}`, Math.abs(mu - op[0]) < 0.01);
            hit({ kind: "tap", key: "surface", value: op[0], x: 497 + i * 96, y: 35, r: 26 });
        });
        gripChip(ctx, 470, 58, "тяни груз — меняется N");
    };

    /* §22 — давление: кирпич на песке */
    SCENES.pressure = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.84);
        const F = Number(st.force) || 600;
        const S = Number(st.area) || 2;   // дм²
        // песок
        ctx.fillStyle = lin(ctx, 0, base - 22, 0, h, [[0, "#f3e8ce"], [1, "#dfcea8"]]);
        ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, base - 18);
        for (let x = 0; x <= w; x += 20) ctx.lineTo(x, base - 18 + Math.sin(x * 0.03) * 3);
        ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
        // кирпич: размер зависит от площади
        const bw = map(S, 2, 20, 108, 260);
        const bh = 62;
        shadowed(ctx, 16, "rgba(90,70,40,0.32)", 7, () => {
            fillRR(ctx, 370 - bw / 2, base - 22 - bh, bw, bh, 5, lin(ctx, 0, base - 22 - bh, 0, base - 22, [[0, "#c2745a"], [1, "#94452f"]]));
        });
        for (let i = 0; i < 3; i++) {
            ctx.strokeStyle = "rgba(255,235,220,0.35)"; ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(370 - bw / 2 + 8, base - 22 - bh + 12 + i * 16); ctx.lineTo(370 + bw / 2 - 8, base - 22 - bh + 12 + i * 16); ctx.stroke();
        }
        // продавливание
        const dent = map(S, 2, 20, 14, 3);
        ctx.fillStyle = "rgba(120,95,55,0.35)";
        ctx.beginPath(); ctx.ellipse(370, base - 20, bw / 2 + 4, dent, 0, 0, Math.PI * 2); ctx.fill();
        // груз
        crate(ctx, 370 - 34, base - 22 - bh - 44, 68, 38, `${F} Н`, ["#eef4fa", "#93a2b3"]);
        // ручки
        handle(ctx, 370 + bw / 2 + 22, base - 22 - bh / 2, "", { kind: "drag", key: "area", axis: "x", from: 370 + 54, to: 370 + 140, min: 2, max: 20 });
        handle(ctx, 470, base - 22 - bh - 30, "", { kind: "drag", key: "force", axis: "y", from: base - 120, to: base - 220, min: 100, max: 600 });
        const p = F / (S / 100); // S в дм² → м²
        pill(ctx, `p = F / S = ${Math.round(p / 1000)} кПа`, 24, 24, { size: 12, color: "#1f6f9c" });
        pill(ctx, `S = ${S} дм²`, 370 + bw / 2 + 14, base - 12, { size: 10, color: "#8a4b32" });
        gripChip(ctx, 24, 54, "тяни кирпич за бок — меняется S");
    };

    /* §24 — давление жидкости: датчик в баке */
    SCENES.lab_liquid = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.86);
        const depth = Number(st.depth) || 10;
        const fluid = st.fluid || "water";
        const rho = Number(st.rho) || 1000;
        const tx = 120, tw = 300, tTop = 52, tBot = base - 6;
        const col = fluid === "oil" ? ["rgba(232,196,96,0.72)", "rgba(186,146,44,0.8)"]
            : fluid === "brine" ? ["rgba(150,206,190,0.7)", "rgba(74,152,140,0.8)"]
                : ["rgba(126,200,236,0.66)", "rgba(46,132,186,0.74)"];
        contactShadow(ctx, tx + tw / 2, tBot + 2, tw * 0.52, 9, 0.22);
        ctx.save(); rr(ctx, tx, tTop, tw, tBot - tTop, 12); ctx.clip();
        ctx.fillStyle = lin(ctx, 0, tTop, 0, tBot, [[0, col[0]], [1, col[1]]]);
        ctx.fillRect(tx, tTop, tw, tBot - tTop);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath(); ctx.ellipse(tx + tw / 2, tTop + 4, tw / 2 - 6, 4, 0, 0, Math.PI * 2); ctx.fill();
        // блики
        for (let i = 0; i < 4; i++) {
            ctx.fillStyle = "rgba(255,255,255,0.1)";
            ctx.beginPath(); ctx.ellipse(tx + 40 + i * 70, tTop + 40 + (i % 2) * 30, 26, 6, 0.2, 0, Math.PI * 2); ctx.fill();
        }
        // датчик
        const py = map(depth, 0, 50, tTop + 14, tBot - 14);
        ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(tx + tw / 2, tTop - 26); ctx.lineTo(tx + tw / 2, py); ctx.stroke();
        fillRR(ctx, tx + tw / 2 - 9, py - 8, 18, 20, 4, "#c9d5e2");
        fillRR(ctx, tx + tw / 2 - 6, py + 10, 12, 6, 3, "#2f7db8");
        ctx.restore();
        strokeRR(ctx, tx, tTop, tw, tBot - tTop, 12, "rgba(110,145,180,0.7)", 2.2);
        // шкала глубины
        for (let d = 10; d <= 50; d += 10) {
            const y = map(d, 0, 50, tTop + 14, tBot - 14);
            ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(tx + tw - 26, y); ctx.lineTo(tx + tw - 6, y); ctx.stroke();
            text(ctx, `${d}`, tx + tw - 30, y + 3.5, { size: 8.5, align: "right", color: "#eaf6ff" });
        }
        // манометр
        const gx = 530, gy = 92;
        shadowed(ctx, 14, "rgba(40,60,90,0.24)", 6, () => {
            ctx.beginPath(); ctx.arc(gx, gy, 46, 0, Math.PI * 2);
            ctx.fillStyle = lin(ctx, gx - 46, gy - 46, gx + 46, gy + 46, [[0, "#fdfdfe"], [1, "#d8e2ec"]]); ctx.fill();
        });
        ctx.strokeStyle = "rgba(110,140,170,0.7)"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(gx, gy, 46, 0, Math.PI * 2); ctx.stroke();
        const pval = rho * 9.8 * (depth / 100);
        const frac = clamp(pval / 5000, 0, 1);
        for (let i = 0; i <= 10; i++) {
            const a = Math.PI * 0.75 + (i / 10) * Math.PI * 1.5;
            ctx.strokeStyle = "rgba(90,116,145,0.55)"; ctx.lineWidth = i % 5 === 0 ? 2 : 1;
            ctx.beginPath();
            ctx.moveTo(gx + Math.cos(a) * 36, gy + Math.sin(a) * 36);
            ctx.lineTo(gx + Math.cos(a) * 42, gy + Math.sin(a) * 42);
            ctx.stroke();
        }
        const a2 = Math.PI * 0.75 + frac * Math.PI * 1.5;
        ctx.strokeStyle = "#cf4a3d"; ctx.lineWidth = 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx + Math.cos(a2) * 36, gy + Math.sin(a2) * 36); ctx.stroke();
        ctx.beginPath(); ctx.arc(gx, gy, 4, 0, Math.PI * 2); ctx.fillStyle = "#3f4e5e"; ctx.fill();
        text(ctx, "кПа", gx, gy + 26, { size: 9.5, align: "center", color: C.soft });
        pill(ctx, `${(pval / 1000).toFixed(1)} кПа`, gx - 34, gy + 52, { size: 10.5, color: "#b4392f" });
        // жидкости
        const fluids = [["water", "вода", 1000], ["oil", "масло", 800], ["brine", "рассол", 1200]];
        fluids.forEach((f, i) => {
            chipBtn(ctx, 470 + i * 88, 24, 82, f[1], fluid === f[0]);
            hit({ kind: "tap", key: "fluid", value: f[0], x: 511 + i * 88, y: 35, r: 24 });
        });
        pill(ctx, `ρ = ${rho} кг/м³`, 24, 24, { size: 10.5 });
        hit({ kind: "drag", key: "depth", axis: "y", x: tx + tw / 2, y: py, from: tTop + 10, to: tBot - 10, min: 0, max: 50, r: 30 });
        gripChip(ctx, 24, 52, "тяни датчик вверх-вниз");
    };

    /* §25 — гидравлический пресс */
    SCENES.hydraulic = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.86);
        const F1 = Number(st.inputForce) || 50;
        const S1 = Number(st.smallArea) || 5;
        const S2 = Number(st.largeArea) || 10;
        const w1 = map(S1, 1, 10, 30, 74);
        const w2 = map(S2, 5, 40, 70, 190);
        const x1 = 170, x2 = 470;
        // соединительная труба
        fillRR(ctx, x1, base - 34, x2 - x1 + w2 / 2, 26, 6, lin(ctx, 0, base - 34, 0, base - 8, [[0, "#d3dde7"], [1, "#9aa9ba"]]));
        fillRR(ctx, x1 + 4, base - 31, x2 - x1 + w2 / 2 - 8, 20, 5, "rgba(214,160,70,0.85)");
        const draw = (x, wd, topY, big) => {
            fillRR(ctx, x - wd / 2 - 2, topY, wd + 4, base - topY, 7, lin(ctx, 0, topY, 0, base, [[0, "#eef4fa"], [1, "#c3d1de"]]));
            ctx.save(); rr(ctx, x - wd / 2 + 3, topY + 6, wd - 6, base - topY - 10, 5); ctx.clip();
            ctx.fillStyle = lin(ctx, 0, base - 60, 0, base, [[0, "rgba(226,178,86,0.9)"], [1, "rgba(180,124,40,0.92)"]]);
            ctx.fillRect(x - wd / 2, base - 60, wd, 60);
            ctx.restore();
            strokeRR(ctx, x - wd / 2 - 2, topY, wd + 4, base - topY, 7, "rgba(110,140,170,0.55)", 1.6);
            ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fillRect(x - wd / 2 + 5, topY + 10, 5, base - topY - 24);
        };
        const p1y = base - 60 - S1 * 3;
        const p2y = base - 60 - map(S2, 5, 40, 30, 4);
        draw(x1, w1, p1y, false);
        draw(x2, w2, p2y, true);
        steelBar(ctx, x1 - w1 / 2, p1y, w1, 10, 4);
        steelBar(ctx, x2 - w2 / 2, p2y, w2, 12, 5);
        steelBar(ctx, x1 - 4, p1y - 72, 8, 72, 4);
        // груз
        crate(ctx, x2 - 34, p2y - 46, 68, 40, "800 кг");
        // силы
        ctx.strokeStyle = "#cf4a3d"; ctx.lineWidth = 3.4; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x1, p1y - 86); ctx.lineTo(x1, p1y - 62); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x1 - 7, p1y - 70); ctx.lineTo(x1, p1y - 58); ctx.lineTo(x1 + 7, p1y - 70); ctx.closePath(); ctx.fillStyle = "#cf4a3d"; ctx.fill();
        pill(ctx, `F₁ = ${F1} Н`, x1 - 70, p1y - 108, { size: 10.5, color: "#b4392f" });
        const F2 = F1 * S2 / S1;
        pill(ctx, `F₂ = ${(F2 / 1000).toFixed(2)} кН`, x2 + 8, p2y - 76, { size: 11, color: "#227a4d" });
        // ручки
        handle(ctx, x1, p1y - 96, "", { kind: "drag", key: "inputForce", axis: "y", from: p1y - 40, to: p1y - 140, min: 20, max: 150 });
        handle(ctx, x1 + w1 / 2 + 16, base - 34, "S₁", { kind: "drag", key: "smallArea", axis: "x", from: x1 + 16, to: x1 + 90, min: 1, max: 10 });
        handle(ctx, x2 + w2 / 2 + 16, base - 80, "S₂", { kind: "drag", key: "largeArea", axis: "x", from: x2 + 40, to: x2 + 200, min: 5, max: 40 });
        gripChip(ctx, 24, 24, "тяни малый поршень и стенки цилиндров");
    };

    /* §26 — сообщающиеся сосуды */
    SCENES.lab_vessels = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.86);
        const fills = Number(st.fills) || 0;
        const level = clamp(0.18 + fills * 0.11, 0, 0.82);
        const wideX = 300, wideW = 132, narX = 566, narW = 66;
        const topY = 74, botY = base - 10;
        const wy = botY - (botY - 20 - topY) * level;
        // соединительная трубка у дна — вода в ней на том же уровне
        const tubeTop = botY - 54, tubeBot = botY - 18;
        fillRR(ctx, wideX, tubeTop, narX - wideX + narW, tubeBot - tubeTop, 8, lin(ctx, 0, tubeTop, 0, tubeBot, [[0, "#f4f9fd"], [1, "#cfdce8"]]));
        ctx.save();
        rr(ctx, wideX, tubeTop, narX - wideX + narW, tubeBot - tubeTop, 8); ctx.clip();
        const tubeWy = clamp(wy, tubeTop, tubeBot);
        ctx.fillStyle = lin(ctx, 0, tubeWy, 0, tubeBot, [[0, "rgba(126,200,236,0.72)"], [1, "rgba(46,132,186,0.8)"]]);
        ctx.fillRect(wideX, tubeWy, narX - wideX + narW, tubeBot - tubeWy);
        ctx.restore();
        strokeRR(ctx, wideX, tubeTop, narX - wideX + narW, tubeBot - tubeTop, 8, "rgba(110,140,170,0.55)", 1.6);
        const drawV = (x, wd) => {
            fillRR(ctx, x - 2, topY, wd + 4, botY - topY, 8, lin(ctx, 0, topY, 0, botY, [[0, "#f2f7fc"], [1, "#dbe5ee"]]));
            ctx.save(); rr(ctx, x + 4, topY + 4, wd - 8, botY - topY - 8, 6); ctx.clip();
            ctx.fillStyle = lin(ctx, 0, wy, 0, botY, [[0, "rgba(126,200,236,0.72)"], [1, "rgba(46,132,186,0.8)"]]);
            ctx.fillRect(x, wy, wd, botY - wy);
            ctx.fillStyle = "rgba(255,255,255,0.82)"; ctx.fillRect(x + 4, wy - 1.5, wd - 8, 3);
            ctx.restore();
            strokeRR(ctx, x - 2, topY, wd + 4, botY - topY, 8, "rgba(110,140,170,0.65)", 2);
            return wy;
        };
        drawV(wideX, wideW);
        drawV(narX, narW);
        // линейки
        [wideX - 32, narX + narW + 14].forEach((lx) => {
            ctx.strokeStyle = "rgba(120,146,172,0.7)"; ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(lx, topY + 10); ctx.lineTo(lx, botY - 10); ctx.stroke();
            for (let i = 0; i <= 6; i++) {
                const y = topY + 10 + i * (botY - 20 - topY) / 6;
                ctx.beginPath(); ctx.moveTo(lx, y); ctx.lineTo(lx + 6, y); ctx.stroke();
            }
        });
        // кран над узкой ветвью
        const tapX = narX + narW / 2;
        fillRR(ctx, tapX - 34, topY - 34, 68, 12, 5, "#9aa9ba");
        fillRR(ctx, tapX - 9, topY - 48, 18, 16, 4, lin(ctx, 0, topY - 48, 0, topY - 32, [[0, "#e9eff6"], [1, "#a9b7c6"]]));
        brassKnob(ctx, tapX + 22, topY - 42, 9, -Math.PI / 2 + fills * 0.5);
        ctx.strokeStyle = "rgba(47,125,184,0.55)"; ctx.lineWidth = 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(tapX, topY - 32); ctx.lineTo(tapX, topY + 4); ctx.stroke();
        chipBtn(ctx, 24, 24, 112, "подать воду", false);
        hit({ kind: "tap", key: "fill", x: 80, y: 35, r: 30 });
        chipBtn(ctx, 648, 24, 116, "сравнить уровни", false);
        hit({ kind: "tap", key: "measure", x: 706, y: 35, r: 30 });
        const lvlCm = Math.round(level * 40);
        pill(ctx, `вода: ${lvlCm} см · порций ${fills}`, 24, 60, { size: 10 });
        if (st.measured) pill(ctx, "уровни равны — закон сосудов", 24, 88, { size: 9.5, color: "#227a4d" });
        gripChip(ctx, 24, 116, "нажимай кран и сравнивай уровни");
    };

    /* §28 — плавучесть */
    SCENES.lab_buoyancy = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.82);
        const V = Number(st.volume) || 200, m = Number(st.mass) || 600;
        const FA = 1000 * 9.8 * V / 1e6, P = m * 9.8 / 1000;
        const tx = 120, tw = 380, tTop = 54, tBot = base - 6;
        contactShadow(ctx, tx + tw / 2, tBot + 2, tw * 0.52, 9, 0.22);
        ctx.save(); rr(ctx, tx, tTop, tw, tBot - tTop, 12); ctx.clip();
        const wt = tTop + 26;
        ctx.fillStyle = lin(ctx, 0, wt, 0, tBot, [[0, "rgba(126,205,240,0.62)"], [0.5, "rgba(60,152,206,0.68)"], [1, "rgba(28,96,150,0.75)"]]);
        ctx.fillRect(tx, wt, tw, tBot - wt);
        ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.lineWidth = 1.6;
        ctx.beginPath();
        for (let x = tx; x <= tx + tw; x += 6) {
            const y = wt + Math.sin(x * 0.05) * 2;
            x === tx ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        // поплавок
        const sink = clamp((P - FA) / 12, -1, 1);
        const fy = wt + 20 + sink * 34;
        shadowed(ctx, 16, "rgba(10,50,80,0.35)", 8, () => {
            fillRR(ctx, tx + tw / 2 - 62, fy - 20, 124, 42, 12, lin(ctx, 0, fy - 20, 0, fy + 22, [[0, "#ffe9a3"], [0.55, "#f0c14b"], [1, "#b78a24"]]));
        });
        fillRR(ctx, tx + tw / 2 - 44, fy - 34, 90, 18, 5, "#d9e2ec");
        crate(ctx, tx + tw / 2 - 22, fy - 58, 44, 26, `${m} г`, ["#eef4fa", "#93a2b3"]);
        bubbles(ctx, tx + tw / 2 - 40, fy + 8, 80, 30, 2000, 5);
        ctx.restore();
        strokeRR(ctx, tx, tTop, tw, tBot - tTop, 12, "rgba(110,145,180,0.7)", 2.2);
        // стрелки
        ctx.strokeStyle = "#cf4a3d"; ctx.lineWidth = 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(tx + tw / 2, fy + 26); ctx.lineTo(tx + tw / 2, fy + 26 + clamp(P * 1.6, 16, 52)); ctx.stroke();
        ctx.strokeStyle = "#2ea36a";
        ctx.beginPath(); ctx.moveTo(tx + tw / 2 + 4, fy - 24); ctx.lineTo(tx + tw / 2 + 4, fy - 24 - clamp(FA * 1.6, 16, 52)); ctx.stroke();
        pill(ctx, `F_A = ${FA.toFixed(2)} Н`, tx + tw / 2 + 24, fy - 62, { size: 10.5, color: "#227a4d" });
        pill(ctx, `P = ${P.toFixed(2)} Н`, tx + tw / 2 + 16, fy + 30, { size: 10.5, color: "#b4392f" });
        pill(ctx, P > FA ? "тонет" : P < FA ? "всплывает" : "плавает", 24, 78, { size: 10.5, color: P > FA ? "#b4392f" : "#227a4d" });
        // ручки
        handle(ctx, tx + tw / 2 + 34, fy - 4, "", { kind: "drag", key: "volume", axis: "x", from: tx + tw / 2 + 20, to: tx + tw / 2 + 80, min: 100, max: 1200, r: 18 });
        handle(ctx, tx + tw / 2 - 40, fy - 64, "", { kind: "drag", key: "mass", axis: "y", from: fy - 30, to: fy - 100, min: 100, max: 1000, r: 18 });
        pill(ctx, `V = ${V} см³`, 24, 24, { size: 10.5 });
        pill(ctx, `m = ${m} г`, 132, 24, { size: 10.5 });
        gripChip(ctx, 24, 52, "тяни поплавок и груз");
    };

    /* §30 — мощность: поршень и турбина */
    SCENES.power = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.84);
        const F = Number(st.workForce) || 250;
        const s = Number(st.workDistance) || 8;
        const t = Number(st.workTime) || 2;
        const N = F * s / t;
        // цилиндр
        const cx = 150, cTop = 80, cBot = base - 18, cw = 120;
        fillRR(ctx, cx, cTop, cw, cBot - cTop, 8, lin(ctx, 0, cTop, 0, cBot, [[0, "#f4f8fc"], [1, "#c3d1de"]]));
        ctx.save(); rr(ctx, cx + 4, cTop + 4, cw - 8, cBot - cTop - 8, 6); ctx.clip();
        ctx.fillStyle = lin(ctx, 0, cBot - 70, 0, cBot, [[0, "rgba(226,178,86,0.85)"], [1, "rgba(180,124,40,0.9)"]]);
        ctx.fillRect(cx, cBot - 70, cw, 70);
        ctx.restore();
        strokeRR(ctx, cx, cTop, cw, cBot - cTop, 8, "rgba(110,140,170,0.6)", 2);
        const py = cTop + map(Number(st.workDistance) || 8, 1, 8, 90, 20);
        steelBar(ctx, cx + 8, py, cw - 16, 10, 4);
        steelBar(ctx, cx + cw / 2 - 4, py - 56, 8, 56, 4);
        // турбина
        const tx = 470, ty = 128;
        // паровая труба к турбине
        ctx.strokeStyle = "#b9c6d4"; ctx.lineWidth = 12; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(cx + cw, cTop + 46); ctx.lineTo(330, cTop + 46); ctx.lineTo(330, 100); ctx.lineTo(tx - 52, 100); ctx.stroke();
        ctx.strokeStyle = "#e9eff6"; ctx.lineWidth = 7; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(cx + cw, cTop + 46); ctx.lineTo(330, cTop + 46); ctx.lineTo(330, 100); ctx.lineTo(tx - 52, 100); ctx.stroke();
        for (let i = 0; i < 10; i++) {
            const a = i * Math.PI / 5 + (st.phase || 0) * 0.02;
            ctx.save();
            ctx.translate(tx + Math.cos(a) * 30, ty + Math.sin(a) * 30);
            ctx.rotate(a);
            ctx.beginPath();
            ctx.moveTo(0, -8); ctx.lineTo(20, -12); ctx.lineTo(20, 12); ctx.lineTo(0, 8);
            ctx.closePath();
            ctx.fillStyle = lin(ctx, 0, -12, 0, 12, [[0, "#f2f7fc"], [1, "#93a2b3"]]);
            ctx.fill();
            ctx.strokeStyle = "rgba(110,140,170,0.55)"; ctx.lineWidth = 1; ctx.stroke();
            ctx.restore();
        }
        shadowed(ctx, 18, "rgba(40,60,90,0.3)", 8, () => {
            ctx.beginPath(); ctx.arc(tx, ty, 36, 0, Math.PI * 2);
            ctx.fillStyle = lin(ctx, tx - 36, ty - 36, tx + 36, ty + 36, [[0, "#f7fbfe"], [1, "#a9b7c6"]]); ctx.fill();
        });
        ctx.strokeStyle = "rgba(110,140,170,0.75)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tx, ty, 36, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(tx, ty, 7, 0, Math.PI * 2); ctx.fillStyle = "#2f7db8"; ctx.fill();
        // генератор
        shadowed(ctx, 12, "rgba(40,60,90,0.24)", 5, () => {
            fillRR(ctx, 596, 150, 118, 58, 10, lin(ctx, 0, 150, 0, 208, [[0, "#f7fbfe"], [1, "#a9b7c6"]]));
        });
        strokeRR(ctx, 596, 150, 118, 58, 10, "rgba(110,140,170,0.55)", 1.4);
        text(ctx, "P", 655, 186, { size: 24, align: "center", color: "#227a4d", weight: 900 });
        pill(ctx, `${Math.round(N)} Вт`, 596, 120, { size: 12, color: "#227a4d" });
        // ручки
        handle(ctx, cx + cw / 2, py - 68, "", { kind: "drag", key: "workForce", axis: "y", from: py - 20, to: py - 120, min: 50, max: 250 });
        handle(ctx, cx + cw + 22, py, "s", { kind: "drag", key: "workDistance", axis: "y", from: cTop + 70, to: cTop + 10, min: 1, max: 8 });
        text(ctx, `t = ${t} с`, 300, 190, { size: 10, color: C.ink2, weight: 800 });
        fillRR(ctx, 366, 178, 62, 12, 6, "rgba(255,255,255,0.9)");
        strokeRR(ctx, 366, 178, 62, 12, 6, "rgba(120,146,172,0.4)", 1);
        handle(ctx, 366, 184, "", { kind: "drag", key: "workTime", axis: "x", from: 306, to: 400, min: 2, max: 10 });
        pill(ctx, `A = ${Math.round(F * s)} Дж`, 24, 24, { size: 10.5 });
        pill(ctx, `F = ${F} Н`, 24, 50, { size: 10.5, color: "#1f6f9c" });
        // подсказка — сверху справа, чтобы не закрывать цилиндр и ручки
        gripChip(ctx, 430, 22, "тяни поршень, ход и время");
    };

    /* §32 — энергия: шахта и капсула */
    SCENES.energy = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.88);
        const m = Number(st.dropMass) || 5, hh = Number(st.height) || 8, pct = Number(st.dropPercent) || 20;
        const sx = 220, sw = 150, sTop = 24, sBot = base - 6;
        // шахта
        fillRR(ctx, sx, sTop, sw, sBot - sTop, 10, lin(ctx, 0, sTop, 0, sBot, [[0, "#e8eef6"], [0.45, "#d5dfea"], [1, "#c1cfdd"]]));
        // бетонные крепления шахты
        for (let i = 1; i < 7; i++) {
            fillRR(ctx, sx - 8, sTop + i * (sBot - sTop) / 7, sw + 16, 8, 3, lin(ctx, 0, sTop + i * (sBot - sTop) / 7, 0, sTop + i * (sBot - sTop) / 7 + 8, [[0, "#f2f6fb"], [1, "#aab8c6"]]));
        }
        strokeRR(ctx, sx, sTop, sw, sBot - sTop, 10, "rgba(110,140,170,0.55)", 2);
        // капсула
        const cy = sTop + 20 + (sBot - sTop - 60) * (pct / 100);
        shadowed(ctx, 14, "rgba(0,0,0,0.5)", 5, () => {
            fillRR(ctx, sx + sw / 2 - 26, cy, 52, 40, 8, lin(ctx, 0, cy, 0, cy + 40, [[0, "#ffe9a3"], [1, "#cf9c34"]]));
        });
        ctx.strokeStyle = "rgba(120,86,20,0.6)"; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(sx + sw / 2 - 26, cy + 18); ctx.lineTo(sx + sw / 2 + 26, cy + 18); ctx.stroke();
        text(ctx, `${m} кг`, sx + sw / 2, cy + 28, { size: 10, align: "center", color: "#4b3410", weight: 900 });
        // трос
        ctx.strokeStyle = "rgba(200,210,220,0.8)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(sx + sw / 2, sTop); ctx.lineTo(sx + sw / 2, cy); ctx.stroke();
        // шкала
        ctx.strokeStyle = "rgba(120,146,172,0.7)"; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(sx + sw + 18, sTop + 10); ctx.lineTo(sx + sw + 18, sBot - 10); ctx.stroke();
        for (let i = 0; i <= 8; i++) {
            const y = sTop + 10 + i * (sBot - 20 - sTop) / 8;
            ctx.beginPath(); ctx.moveTo(sx + sw + 18, y); ctx.lineTo(sx + sw + 30, y); ctx.stroke();
            if (i % 2 === 0) text(ctx, `${i}`, sx + sw + 34, y + 3.5, { size: 8.5, color: C.soft });
        }
        const Ek = m * 9.8 * hh * (pct / 100);
        const Ep = m * 9.8 * hh * (1 - pct / 100);
        pill(ctx, `E_п = ${Math.round(Ep)} Дж`, 430, 28, { size: 11, color: "#1f6f9c" });
        pill(ctx, `E_к = ${Math.round(Ek)} Дж`, 430, 56, { size: 11, color: "#227a4d" });
        pill(ctx, `E = ${Math.round(Ep + Ek)} Дж`, 430, 84, { size: 11.5, color: "#b4632a" });
        // ручки
        handle(ctx, sx + sw / 2, cy + 58, "", { kind: "drag", key: "dropPercent", axis: "y", from: sTop + 16, to: sBot - 50, min: 0, max: 100 });
        // ручки массы и высоты — справа от подписей, чтобы не закрывать текст
        text(ctx, `m = ${m} кг`, 470, 132, { size: 10, color: C.ink2, weight: 800 });
        fillRR(ctx, 566, 118, 76, 12, 6, "rgba(255,255,255,0.9)");
        strokeRR(ctx, 566, 118, 76, 12, 6, "rgba(120,146,172,0.4)", 1);
        handle(ctx, 604, 124, "", { kind: "drag", key: "dropMass", axis: "x", from: 520, to: 620, min: 1, max: 10 });
        text(ctx, `h = ${hh} м`, 470, 182, { size: 10, color: C.ink2, weight: 800 });
        fillRR(ctx, 566, 168, 76, 12, 6, "rgba(255,255,255,0.9)");
        strokeRR(ctx, 566, 168, 76, 12, 6, "rgba(120,146,172,0.4)", 1);
        handle(ctx, 604, 174, "", { kind: "drag", key: "height", axis: "x", from: 520, to: 620, min: 1, max: 10 });
        gripChip(ctx, 24, 24, "тяни капсулу вниз по шахте");
    };

    /* §35 — рычаг */
    SCENES.lab_lever = (ctx, w, h, st) => {
        const base = room(ctx, w, h, 0.84);
        const pivot = clamp(Number(st.pivot) || 50, 5, 95);
        const px = 80 + pivot * 6;
        const beamY = base - 96;
        // опора
        ctx.beginPath();
        ctx.moveTo(px, beamY + 8);
        ctx.lineTo(px - 26, base + 2);
        ctx.lineTo(px + 26, base + 2);
        ctx.closePath();
        ctx.fillStyle = lin(ctx, px - 26, beamY, px + 26, base, [[0, "#e6edf5"], [1, "#9aa9ba"]]);
        ctx.fill();
        ctx.strokeStyle = "rgba(90,110,135,0.6)"; ctx.lineWidth = 1.6; ctx.stroke();
        // балка
        shadowed(ctx, 14, "rgba(40,60,90,0.3)", 6, () => {
            fillRR(ctx, 70, beamY, 632, 16, 8, lin(ctx, 0, beamY, 0, beamY + 16, [[0, "#f0dcb4"], [1, "#c39a62"]]));
        });
        ctx.strokeStyle = "rgba(150,110,60,0.4)"; ctx.lineWidth = 1;
        for (let i = 0; i < 10; i++) {
            ctx.beginPath(); ctx.moveTo(80 + i * 62, beamY + 2); ctx.lineTo(80 + i * 62, beamY + 14); ctx.stroke();
        }
        // грузы
        crate(ctx, 80, beamY - 42, 66, 42, "100 Н", ["#eef4fa", "#93a2b3"]);
        crate(ctx, 640, beamY - 42, 66, 42, "40 Н", ["#f2d9b0", "#c39a62"]);
        // стрелки
        ctx.strokeStyle = "#cf4a3d"; ctx.lineWidth = 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(113, beamY - 52); ctx.lineTo(113, beamY - 90); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(673, beamY - 52); ctx.lineTo(673, beamY - 68); ctx.stroke();
        // плечи
        ctx.strokeStyle = "rgba(47,125,184,0.6)"; ctx.lineWidth = 1.6; ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(113, beamY + 44); ctx.lineTo(px, beamY + 44); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, beamY + 44); ctx.lineTo(673, beamY + 44); ctx.stroke(); ctx.setLineDash([]);
        const l1 = ((px - 113) / 6).toFixed(0), l2 = ((673 - px) / 6).toFixed(0);
        pill(ctx, `l₁ = ${l1} см`, 90, beamY + 64, { size: 9.5 });
        pill(ctx, `l₂ = ${l2} см`, 610, beamY + 64, { size: 9.5 });
        const m1 = 100 * (px - 113), m2 = 40 * (673 - px);
        pill(ctx, m1 === m2 ? "равновесие!" : m1 > m2 ? "перевес слева" : "перевес справа", 310, 24, { size: 11, color: m1 === m2 ? "#227a4d" : "#b4632a" });
        hit({ kind: "drag", key: "pivot", axis: "x", x: px, y: beamY + 8, from: 110, to: 670, min: 5, max: 95, r: 26 });
        handle(ctx, px, beamY + 46, "", { kind: "drag", key: "pivot", axis: "x", x: px, y: beamY + 46, from: 110, to: 670, min: 5, max: 95 });
        gripChip(ctx, 24, 52, "двигай опору под балкой");
    };

    function bubbles(ctx, x, y, wdt, hgt, t, n) {
        for (let i = 0; i < n; i++) {
            const ph = (t * 0.012 + i * 0.19) % 1;
            const bx = x + ((i * 37) % Math.max(6, wdt));
            const by = y + hgt * (1 - ph);
            ctx.beginPath(); ctx.arc(bx, by, 1.6 + (i % 3) * 0.9, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 1; ctx.stroke();
        }
    }

    /* ======================= МОСТ И ВЗАИМОДЕЙСТВИЕ ======================= */
    let bridge = null;
    let hits = [];
    let bound = new WeakSet();

    function state() {
        const b = bridge;
        if (!b || !b.get) return { control: "", apparatus: {} };
        const s = b.get() || {};
        const a = s.apparatus || {};
        return Object.assign({ control: s.control }, a);
    }

    function act(key, value, kind) {
        if (!bridge || !bridge.act) return;
        try { bridge.act(key, value, kind); } catch (e) { console.warn("PQSim7 act", e); }
    }

    function valueFor(h, x, y) {
        const t = h.axis === "y" ? y : x;
        return map(t, h.from, h.to, h.min, h.max);
    }

    function draw(ctx, w, h, tick) {
        hits = [];
        const st = state();
        st.phase = Math.floor(tick / 12) % 1000;
        const fn = SCENES[st.control];
        if (!fn) return false;
        // перехватываем hit() через локальный массив
        hits = HITS;
        HITS.length = 0;
        try {
            fn(ctx, w, h, st);
        } catch (e) {
            try { console.warn("PQSim7 scene failed", st.control, e); } catch (err) {}
            return false;
        }
        hits = HITS.slice();
        return true;
    }

    function pick(x, y) {
        let best = null;
        for (let i = 0; i < hits.length; i++) {
            const d = Math.hypot(x - hits[i].x, y - hits[i].y);
            if (d <= (hits[i].r || 20) && (!best || d < best.d)) best = { h: hits[i], d: d };
        }
        return best ? best.h : null;
    }

    function bind(canvas) {
        if (!canvas || !canvas.addEventListener || bound.has(canvas)) return;
        bound.add(canvas);
        canvas.style.touchAction = "none";
        canvas.style.cursor = "grab";
        let active = null;
        const pos = (e) => {
            const r = canvas.getBoundingClientRect();
            return { x: (e.clientX - r.left) * (LW / (r.width || LW)), y: (e.clientY - r.top) * (LH / (r.height || LH)) };
        };
        canvas.addEventListener("pointerdown", (e) => {
            const p = pos(e);
            const hh = pick(p.x, p.y);
            if (!hh || !bridge) return;
            e.preventDefault();
            if (canvas.setPointerCapture) { try { canvas.setPointerCapture(e.pointerId); } catch (err) {} }
            canvas.style.cursor = "grabbing";
            if (hh.kind === "drag") {
                active = hh;
                act(hh.key, valueFor(hh, p.x, p.y), "drag");
            } else if (hh.kind === "tap") {
                act(hh.key, hh.value, "tap");
            }
        });
        canvas.addEventListener("pointermove", (e) => {
            const p = pos(e);
            if (!active) {
                canvas.style.cursor = pick(p.x, p.y) ? "grab" : "default";
                return;
            }
            e.preventDefault();
            act(active.key, valueFor(active, p.x, p.y), "drag");
        });
        const up = () => { active = null; canvas.style.cursor = "grab"; };
        window.addEventListener("pointerup", up);
        canvas.addEventListener("pointercancel", up);
    }

    function render(ctx, w, h, tick) {
        if (!ctx || typeof ctx.save !== "function") return false;
        ctx.save();
        const ok = draw(ctx, w, h, tick || 0);
        ctx.restore();
        if (ok && ctx.canvas) bind(ctx.canvas);
        return ok;
    }

    window.PQSimLight7 = {
        version: VERSION,
        render: render,
        scenes: SCENES,
        has: (kind) => !!SCENES[kind],
        bind: bind,
        setBridge: (b) => { bridge = b; },
        size: { w: LW, h: LH }
    };
})();
