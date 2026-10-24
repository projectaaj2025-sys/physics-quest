/* ============================================================
   PQ SIM LIGHT — светлая «фотореалистичная» отрисовка опытов
   для 18 canvas-симуляторов 8–9 классов + прямое управление мышью.
   Если модуль не загружен, shared/simulators-89.js рисует как раньше.
   ============================================================ */
(function () {
    "use strict";

    const VERSION = "1.0";
    const LW = 760, LH = 270;          // логический размер сцены

    /* ---------------- палитра ---------------- */
    const C = {
        ink: "#152a40", ink2: "#3d5a78", soft: "#7d95ae",
        paper: "#fbfdff", line: "rgba(90,116,145,0.28)",
        steelA: "#ffffff", steelB: "#e2e9f1", steelC: "#b9c6d4", steelD: "#8c9cae",
        brassA: "#ffe9a8", brassB: "#d9a94a", brassC: "#a9762a",
        water: "rgba(86, 176, 226, 0.55)", waterDeep: "rgba(38, 118, 172, 0.65)",
        wood1: "#e2c69c", wood2: "#bd9260",
        flame: "#ff9b39", ember: "#e2571f",
        ok: "#2ea36a", warn: "#d9822b", bad: "#cf4a4a", ice: "rgba(210,240,255,0.85)"
    };

    /* ---------------- микро-утилиты ---------------- */
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const lerp = (a, b, t) => a + (b - a) * t;
    // map поддерживает и «перевёрнутые» диапазоны (a > b): тянем вверх — значение растёт
    const map = (v, a, b, c, d) => {
        const lo = Math.min(a, b), hi = Math.max(a, b);
        const vv = Math.max(lo, Math.min(hi, v));
        return c + (vv - a) / (b - a || 1) * (d - c);
    };
    const rnd = (seed) => { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; };

    function rr(ctx, x, y, w, h, r) {
        const k = Math.min(r === undefined ? 8 : r, Math.abs(w) / 2, Math.abs(h) / 2);
        ctx.beginPath();
        ctx.moveTo(x + k, y);
        ctx.arcTo(x + w, y, x + w, y + h, k);
        ctx.arcTo(x + w, y + h, x, y + h, k);
        ctx.arcTo(x, y + h, x, y, k);
        ctx.arcTo(x, y, x + w, y, k);
        ctx.closePath();
    }
    function fillRR(ctx, x, y, w, h, r, fill) {
        rr(ctx, x, y, w, h, r);
        ctx.fillStyle = fill;
        ctx.fill();
    }
    function strokeRR(ctx, x, y, w, h, r, stroke, lw) {
        rr(ctx, x, y, w, h, r);
        ctx.strokeStyle = stroke;
        ctx.lineWidth = lw || 1;
        ctx.stroke();
    }
    function lin(ctx, x0, y0, x1, y1, stops) {
        const g = ctx.createLinearGradient(x0, y0, x1, y1);
        stops.forEach((s) => g.addColorStop(s[0], s[1]));
        return g;
    }
    function rad(ctx, x, y, r0, r1, stops) {
        const g = ctx.createRadialGradient(x, y, r0, x, y, r1);
        stops.forEach((s) => g.addColorStop(s[0], s[1]));
        return g;
    }
    function shadowed(ctx, blur, color, dy, fn) {
        ctx.save();
        ctx.shadowColor = color || "rgba(38,58,84,0.30)";
        ctx.shadowBlur = blur === undefined ? 14 : blur;
        ctx.shadowOffsetY = dy === undefined ? 6 : dy;
        fn();
        ctx.restore();
    }
    function text(ctx, str, x, y, opt) {
        const o = opt || {};
        ctx.font = `${o.weight || 600} ${o.size || 12}px ${o.family || "system-ui, 'Segoe UI', Arial, sans-serif"}`;
        ctx.fillStyle = o.color || C.ink;
        ctx.textAlign = o.align || "left";
        ctx.textBaseline = o.baseline || "alphabetic";
        if (o.shadow) { ctx.save(); ctx.shadowColor = "rgba(255,255,255,0.9)"; ctx.shadowBlur = 4; ctx.fillText(str, x, y); ctx.restore(); }
        else ctx.fillText(str, x, y);
    }
    function pillText(ctx, str, x, y, opt) {
        const o = opt || {};
        const size = o.size || 11;
        ctx.font = `700 ${size}px system-ui, 'Segoe UI', Arial, sans-serif`;
        const tw = ctx.measureText(str).width;
        const padX = 7, hgt = size + 9;
        fillRR(ctx, x - 2, y - size - 3, tw + padX * 2, hgt, hgt / 2, o.bg || "rgba(255,255,255,0.86)");
        strokeRR(ctx, x - 2, y - size - 3, tw + padX * 2, hgt, hgt / 2, o.border || "rgba(90,116,145,0.25)", 1);
        text(ctx, str, x + padX - 2, y, { size, color: o.color || C.ink, weight: o.weight || 700 });
        return tw + padX * 2;
    }
    function arrow(ctx, x1, y1, x2, y2, color, width, label) {
        const ang = Math.atan2(y2 - y1, x2 - x1);
        ctx.strokeStyle = color; ctx.fillStyle = color;
        ctx.lineWidth = width || 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - Math.cos(ang) * 8, y2 - Math.sin(ang) * 8); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - Math.cos(ang - 0.4) * 12, y2 - Math.sin(ang - 0.4) * 12);
        ctx.lineTo(x2 - Math.cos(ang + 0.4) * 12, y2 - Math.sin(ang + 0.4) * 12);
        ctx.closePath(); ctx.fill();
        if (label) {
            const lx = (x1 + x2) / 2 + Math.cos(ang + Math.PI / 2) * 14;
            const ly = (y1 + y2) / 2 + Math.sin(ang + Math.PI / 2) * 14;
            pillText(ctx, label, lx - 18, ly + 4, { size: 10, color });
        }
    }
    function contactShadow(ctx, cx, cy, rx, ry, a) {
        ctx.fillStyle = rad(ctx, cx, cy, 1, Math.max(rx, ry), [[0, `rgba(44,66,92,${a || 0.28})`], [1, "rgba(44,66,92,0)"]]);
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry || rx * 0.3, 0, 0, Math.PI * 2); ctx.fill();
    }
    function steelBar(ctx, x, y, w, h, r) {
        fillRR(ctx, x, y, w, h, r === undefined ? 6 : r, lin(ctx, x, y, x, y + h, [[0, C.steelA], [0.18, C.steelB], [0.62, C.steelC], [1, C.steelD]]));
        strokeRR(ctx, x, y, w, h, r === undefined ? 6 : r, "rgba(70,92,116,0.35)", 1);
        fillRR(ctx, x + Math.max(3, w * 0.1), y + 3, Math.max(3, w * 0.14), Math.max(2, h - 6), 3, "rgba(255,255,255,0.6)");
    }
    function brassKnob(ctx, x, y, r, angle) {
        shadowed(ctx, 10, "rgba(40,60,80,0.3)", 4, () => {
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = rad(ctx, x - r * 0.4, y - r * 0.5, 1, r * 1.2, [[0, C.brassA], [0.6, C.brassB], [1, C.brassC]]);
            ctx.fill();
        });
        ctx.strokeStyle = "rgba(90,70,30,0.4)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = "#5d4420"; ctx.lineWidth = 2; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(angle) * r * 0.75, y + Math.sin(angle) * r * 0.75); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, r * 0.28, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.fill();
    }
    function gauge(ctx, cx, cy, r, frac, label, unit) {
        shadowed(ctx, 12, "rgba(40,60,80,0.30)", 4, () => {
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fillStyle = lin(ctx, cx, cy - r, cx, cy + r, [[0, "#ffffff"], [1, "#e6edf5"]]);
            ctx.fill();
        });
        ctx.strokeStyle = "#b8c6d5"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
        const a0 = Math.PI * 0.78, a1 = Math.PI * 2.22;
        for (let i = 0; i <= 10; i++) {
            const a = a0 + (a1 - a0) * i / 10;
            ctx.strokeStyle = i % 5 === 0 ? "#59748f" : "rgba(89,116,143,0.55)";
            ctx.lineWidth = i % 5 === 0 ? 2 : 1;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(a) * (r - 3), cy + Math.sin(a) * (r - 3));
            ctx.lineTo(cx + Math.cos(a) * (r - (i % 5 === 0 ? 11 : 7)), cy + Math.sin(a) * (r - (i % 5 === 0 ? 11 : 7)));
            ctx.stroke();
        }
        ctx.fillStyle = "rgba(46,163,106,0.16)";
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r - 6, a1 - (a1 - a0) * 0.34, a1); ctx.closePath(); ctx.fill();
        const ang = a0 + (a1 - a0) * clamp(frac, 0, 1);
        ctx.strokeStyle = "#cf4a4a"; ctx.lineWidth = 2.4; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ang) * (r - 9), cy + Math.sin(ang) * (r - 9)); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, 3.4, 0, Math.PI * 2); ctx.fillStyle = "#59748f"; ctx.fill();
        if (label) text(ctx, label, cx, cy + r * 0.62, { size: 9.5, align: "center", color: C.ink2, weight: 700 });
        if (unit) text(ctx, unit, cx, cy + r * 0.82, { size: 8, align: "center", color: C.soft, weight: 600 });
    }
    function wire(ctx, pts, color, width) {
        ctx.strokeStyle = color || "#b1442f"; ctx.lineWidth = width || 3; ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.beginPath();
        pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.45)"; ctx.lineWidth = 1;
        ctx.stroke();
    }
    function lampGlow(ctx, x, y, r, power) {
        const k = clamp(power, 0, 1);
        ctx.fillStyle = rad(ctx, x, y, 2, r * 2.2, [[0, `rgba(255,236,170,${0.85 * k})`], [0.45, `rgba(255,206,100,${0.35 * k})`], [1, "rgba(255,206,100,0)"]]);
        ctx.beginPath(); ctx.arc(x, y, r * 2.2, 0, Math.PI * 2); ctx.fill();
    }
    function flameShape(ctx, x, y, hgt, wdt, t) {
        const flick = 0.9 + Math.sin(t * 0.22) * 0.1;
        for (let i = 0; i < 3; i++) {
            const hh = hgt * flick * (1 - i * 0.22);
            const ww = wdt * (1 - i * 0.22);
            const g = ctx.createLinearGradient(x, y, x, y - hh);
            const colors = [["rgba(255,178,66,0.95)", "rgba(255,120,30,0.15)"], ["rgba(255,232,150,0.95)", "rgba(255,180,60,0.1)"], ["rgba(210,240,255,0.95)", "rgba(140,200,255,0)"]];
            g.addColorStop(0, colors[i][0]); g.addColorStop(1, colors[i][1]);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.moveTo(x - ww / 2, y);
            ctx.quadraticCurveTo(x - ww * 0.55, y - hh * 0.55, x + Math.sin(t * 0.12 + i) * ww * 0.15, y - hh);
            ctx.quadraticCurveTo(x + ww * 0.55, y - hh * 0.55, x + ww / 2, y);
            ctx.closePath(); ctx.fill();
        }
    }
    function steam(ctx, x, y, t, n, spread, color) {
        for (let i = 0; i < (n || 4); i++) {
            const ph = (t * 0.028 + i * 0.25) % 1;
            const yy = y - ph * 56;
            const xx = x + Math.sin(ph * 6 + i) * (spread || 10) * ph;
            ctx.fillStyle = color || `rgba(255,255,255,${0.5 * (1 - ph)})`;
            ctx.beginPath(); ctx.arc(xx, yy, 4 + ph * 9, 0, Math.PI * 2); ctx.fill();
        }
    }
    function bubbles(ctx, x, y, wdt, hgt, t, n) {
        for (let i = 0; i < (n || 8); i++) {
            const ph = (t * 0.02 + i * 0.17) % 1;
            const xx = x + ((i * 37) % wdt);
            const yy = y + hgt - ph * hgt;
            ctx.strokeStyle = `rgba(255,255,255,${0.55 * (1 - ph)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(xx, yy, 1.6 + (i % 3), 0, Math.PI * 2); ctx.stroke();
        }
    }

    /* ---------------- окружение ---------------- */
    function labRoom(ctx, w, h, t, opt) {
        const o = opt || {};
        const horizon = h * (o.horizon || 0.7);
        ctx.fillStyle = lin(ctx, 0, 0, 0, horizon, [[0, "#fcfeff"], [0.5, "#f1f7fd"], [1, "#e4eef8"]]);
        ctx.fillRect(0, 0, w, horizon);
        // плитка стены
        ctx.strokeStyle = "rgba(120,150,180,0.14)";
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 54) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, horizon); ctx.stroke(); }
        for (let y = 18; y < horizon; y += 46) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
        // мягкий свет (окно слева)
        ctx.fillStyle = rad(ctx, w * 0.16, -20, 10, w * 0.8, [[0, "rgba(255,255,255,0.95)"], [1, "rgba(255,255,255,0)"]]);
        ctx.fillRect(0, 0, w, horizon);
        const sun = ctx.createLinearGradient(w * 0.05, 0, w * 0.45, horizon);
        sun.addColorStop(0, "rgba(255,252,235,0.55)");
        sun.addColorStop(1, "rgba(255,252,235,0)");
        ctx.fillStyle = sun;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(w * 0.42, 0); ctx.lineTo(w * 0.12, horizon); ctx.lineTo(0, horizon); ctx.closePath(); ctx.fill();
        // столешница
        ctx.fillStyle = lin(ctx, 0, horizon, 0, h, [[0, "#f4f8fc"], [0.16, "#e6edf5"], [0.7, "#d5dfe9"], [1, "#c3d0dd"]]);
        ctx.fillRect(0, horizon, w, h - horizon);
        // блик на столе
        ctx.fillStyle = lin(ctx, 0, horizon, w, h, [[0, "rgba(255,255,255,0.55)"], [0.45, "rgba(255,255,255,0.12)"], [1, "rgba(255,255,255,0)"]]);
        ctx.fillRect(0, horizon, w, h - horizon);
        // край стола
        ctx.fillStyle = "rgba(120,146,172,0.35)";
        ctx.fillRect(0, horizon - 2, w, 2);
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.fillRect(0, horizon, w, 1.5);
        // тень у стены
        ctx.fillStyle = lin(ctx, 0, horizon - 16, 0, horizon + 10, [[0, "rgba(70,96,126,0)"], [1, "rgba(70,96,126,0.16)"]]);
        ctx.fillRect(0, horizon - 16, w, 26);
        vignette(ctx, w, h);
    }
    function skyBackdrop(ctx, w, h, t) {
        const horizon = h * 0.68;
        ctx.fillStyle = lin(ctx, 0, 0, 0, horizon, [[0, "#dff1ff"], [0.6, "#eef8ff"], [1, "#f8fdff"]]);
        ctx.fillRect(0, 0, w, horizon);
        ctx.fillStyle = rad(ctx, w * 0.78, h * 0.2, 6, 90, [[0, "rgba(255,246,214,1)"], [0.35, "rgba(255,238,180,0.75)"], [1, "rgba(255,238,180,0)"]]);
        ctx.fillRect(0, 0, w, horizon);
        ctx.beginPath(); ctx.arc(w * 0.78, h * 0.2, 18, 0, Math.PI * 2);
        ctx.fillStyle = "#fff8dc"; ctx.fill();
        // облака
        const r = rnd(11);
        for (let i = 0; i < 5; i++) {
            const cx = (r() * w + t * 0.05) % (w + 120) - 60;
            const cy = 22 + r() * 54;
            ctx.fillStyle = "rgba(255,255,255,0.75)";
            for (let k = 0; k < 3; k++) {
                ctx.beginPath(); ctx.ellipse(cx + k * 22 - 22, cy + (k % 2) * 5, 26, 12, 0, 0, Math.PI * 2); ctx.fill();
            }
        }
        // холмы
        ctx.fillStyle = "#cfe4d3";
        ctx.beginPath(); ctx.moveTo(0, horizon);
        for (let x = 0; x <= w; x += 40) ctx.lineTo(x, horizon - 26 - Math.sin(x * 0.011) * 16 - Math.sin(x * 0.03) * 8);
        ctx.lineTo(w, horizon); ctx.closePath(); ctx.fill();
        ctx.fillStyle = "#bcd9c2";
        ctx.beginPath(); ctx.moveTo(0, horizon);
        for (let x = 0; x <= w; x += 30) ctx.lineTo(x, horizon - 10 - Math.sin(x * 0.02 + 1) * 10);
        ctx.lineTo(w, horizon); ctx.closePath(); ctx.fill();
        ctx.fillStyle = lin(ctx, 0, horizon, 0, h, [[0, "#f2f8f4"], [1, "#dfeee6"]]);
        ctx.fillRect(0, horizon, w, h - horizon);
        vignette(ctx, w, h);
    }
    function spaceBackdrop(ctx, w, h, t) {
        ctx.fillStyle = lin(ctx, 0, 0, 0, h, [[0, "#f6fbff"], [0.55, "#e8f2fd"], [1, "#dbe8f8"]]);
        ctx.fillRect(0, 0, w, h);
        const g = rad(ctx, w * 0.72, h * 0.34, 4, 200, [[0, "rgba(150,200,255,0.35)"], [1, "rgba(150,200,255,0)"]]);
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        const r = rnd(29);
        for (let i = 0; i < 90; i++) {
            const x = r() * w, y = r() * h, s = r() * 1.3 + 0.3;
            ctx.fillStyle = `rgba(70,110,160,${0.12 + r() * 0.35})`;
            ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
        }
        vignette(ctx, w, h);
    }
    function vignette(ctx, w, h) {
        ctx.fillStyle = rad(ctx, w * 0.5, h * 0.42, Math.min(w, h) * 0.35, Math.max(w, h) * 0.78, [[0, "rgba(40,70,110,0)"], [1, "rgba(40,70,110,0.16)"]]);
        ctx.fillRect(0, 0, w, h);
        // лёгкий блик стекла
        const gl = ctx.createLinearGradient(0, 0, w, h * 0.6);
        gl.addColorStop(0, "rgba(255,255,255,0.22)");
        gl.addColorStop(0.35, "rgba(255,255,255,0.03)");
        gl.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gl; ctx.fillRect(0, 0, w, h);
    }
    function planet(ctx, cx, cy, r, t) {
        ctx.save();
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = rad(ctx, cx - r * 0.35, cy - r * 0.4, r * 0.1, r * 1.25, [[0, "#bfe6ff"], [0.55, "#5fb2e8"], [1, "#1d5f92"]]);
        ctx.fill();
        ctx.clip();
        ctx.fillStyle = "rgba(90,180,120,0.65)";
        const r2 = rnd(7);
        for (let i = 0; i < 7; i++) {
            const a = r2() * Math.PI * 2, d = r2() * r * 0.9;
            ctx.beginPath();
            ctx.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, r * (0.12 + r2() * 0.22), r * (0.08 + r2() * 0.16), r2() * 3, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        for (let i = 0; i < 5; i++) {
            const a = r2() * Math.PI * 2, d = r2() * r * 0.8;
            ctx.beginPath(); ctx.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, r * 0.2, r * 0.07, 0.3, 0, Math.PI * 2); ctx.fill();
        }
        // ночная сторона
        ctx.fillStyle = lin(ctx, cx - r, cy, cx + r, cy, [[0, "rgba(10,40,70,0)"], [1, "rgba(10,40,70,0.45)"]]);
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
        ctx.restore();
        ctx.strokeStyle = "rgba(160,220,255,0.55)"; ctx.lineWidth = r * 0.06;
        ctx.beginPath(); ctx.arc(cx, cy, r * 1.02, 0, Math.PI * 2); ctx.stroke();
        // атмосферное свечение
        ctx.fillStyle = rad(ctx, cx, cy, r, r * 1.25, [[0, "rgba(140,205,255,0.35)"], [1, "rgba(140,205,255,0)"]]);
        ctx.beginPath(); ctx.arc(cx, cy, r * 1.25, 0, Math.PI * 2); ctx.fill();
    }

    /* ---------------- подсказки-действия ---------------- */
    function dragChip(ctx, x, y, label) {
        const txt = label;
        ctx.font = "700 10px system-ui, 'Segoe UI', Arial, sans-serif";
        const tw = ctx.measureText(txt).width;
        fillRR(ctx, x, y, tw + 30, 19, 9, "rgba(255,255,255,0.92)");
        strokeRR(ctx, x, y, tw + 30, 19, 9, "rgba(60,130,190,0.45)", 1);
        // нарисованная «рука-курсор» (без эмодзи, чтобы не было «тофу»)
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
        text(ctx, txt, x + 25, y + 13.5, { size: 10, color: C.ink2, weight: 700 });
    }

    // предупреждение без символа ⚠ (рисуем сами)
    function warnChip(ctx, x, y, label) {
        ctx.font = "700 10.5px system-ui, 'Segoe UI', Arial, sans-serif";
        const tw = ctx.measureText(label).width;
        fillRR(ctx, x, y, tw + 34, 20, 10, "rgba(255,240,240,0.96)");
        strokeRR(ctx, x, y, tw + 34, 20, 10, "rgba(196,60,48,0.55)", 1);
        ctx.beginPath(); ctx.arc(x + 12, y + 10, 6.4, 0, Math.PI * 2); ctx.fillStyle = "#cf4a3d"; ctx.fill();
        text(ctx, "!", x + 12, y + 14, { size: 10, color: "#fff", align: "center", weight: 900 });
        text(ctx, label, x + 23, y + 14, { size: 10.5, color: "#a8382c", weight: 800 });
    }

    const HITS = [];
    let CURRENT = { w: LW, h: LH };
    function hit(h) { HITS.push(h); }
    function clearHits() { HITS.length = 0; }
    function handle(ctx, x, y, label, spec) {
        // визуальная ручка
        ctx.save();
        ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.fill();
        ctx.strokeStyle = "rgba(47,125,184,0.85)"; ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 3.2, 0, Math.PI * 2); ctx.fillStyle = "#2f7db8"; ctx.fill();
        ctx.restore();
        if (label) {
            ctx.font = "700 9.5px system-ui, 'Segoe UI', Arial, sans-serif";
            text(ctx, label, x + 15, y + 4, { size: 9.5, color: "#2f7db8", weight: 800 });
        }
        if (spec) hit(Object.assign({ kind: "drag", x: x, y: y }, spec));
    }
    const SCENES = {};

    /* ============================ 8 КЛАСС ============================ */

    SCENES.g8_calorimeter = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.80 });
        const base = h * 0.80;
        const metals = { cu: ["#e7b184", "#a9612f"], fe: ["#cfd7e0", "#7b8794"], al: ["#eef4f9", "#a9b7c5"] };
        const mc = metals[p.metal] || metals.cu;
        const hotK = map(p.t1, 80, 300, 0, 1);
        const warmK = map(calc.teq, 15, 85, 0, 1);

        /* ---------- горелка + штатив + тигель ---------- */
        contactShadow(ctx, 133, base + 2, 60, 9, 0.28);
        // корпус горелки
        fillRR(ctx, 106, base - 34, 54, 34, 10, lin(ctx, 106, base - 34, 106, base, [[0, "#e2eaf3"], [1, "#93a2b3"]]));
        fillRR(ctx, 110, base - 40, 46, 8, 4, lin(ctx, 0, base - 40, 0, base - 32, [[0, "#b6c3d1"], [1, "#7d8c9c"]]));
        fillRR(ctx, 128, base - 44, 10, 6, 2, "#7d8b9b");
        // вентиль газа
        brassKnob(ctx, 112, base - 16, 10, -Math.PI / 2 + hotK * Math.PI * 1.4);
        ctx.strokeStyle = "rgba(96,116,140,0.85)"; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.moveTo(104, base - 16); ctx.bezierCurveTo(86, base - 20, 82, base - 40, 92, base - 54); ctx.stroke();
        // пламя (под тиглем)
        if (p.t1 > 90) {
            flameShape(ctx, 133, base - 42, 30 + hotK * 16, 15, t);
            ctx.fillStyle = rad(ctx, 133, base - 52, 2, 26, [[0, `rgba(255,190,90,${0.3 + hotK * 0.25})`], [1, "rgba(255,190,90,0)"]]);
            ctx.beginPath(); ctx.arc(133, base - 52, 26, 0, Math.PI * 2); ctx.fill();
        }
        // тренога
        [[94, base - 2, 104, base - 90], [172, base - 2, 162, base - 90]].forEach((lg) => {
            ctx.strokeStyle = "#7e8c9b"; ctx.lineWidth = 3.2; ctx.lineCap = "round";
            ctx.beginPath(); ctx.moveTo(lg[0], lg[1]); ctx.lineTo(lg[2], lg[3]); ctx.stroke();
            ctx.strokeStyle = "rgba(255,255,255,0.55)"; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(lg[0] - 1.5, lg[1] - 5); ctx.lineTo(lg[2] - 1.5, lg[3] + 5); ctx.stroke();
        });
        // кольцо треноги
        ctx.beginPath(); ctx.ellipse(133, base - 90, 34, 7.5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "#77869a"; ctx.lineWidth = 3.2; ctx.stroke();
        ctx.beginPath(); ctx.ellipse(133, base - 90, 34, 7.5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 1; ctx.stroke();
        // тигель-чаша
        ctx.beginPath();
        ctx.moveTo(112, base - 100);
        ctx.lineTo(154, base - 100);
        ctx.quadraticCurveTo(154, base - 88, 133, base - 86);
        ctx.quadraticCurveTo(112, base - 88, 112, base - 100);
        ctx.closePath();
        ctx.fillStyle = lin(ctx, 112, base - 100, 154, base - 86, [[0, "#f6fafd"], [1, "#a3b1c0"]]); ctx.fill();
        ctx.strokeStyle = "rgba(90,110,135,0.75)"; ctx.lineWidth = 1.6; ctx.stroke();
        ctx.beginPath(); ctx.ellipse(133, base - 100, 21, 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#94a3b3"; ctx.fill();
        // металлический образец
        const mR = map(p.m1, 100, 800, 6, 12);
        shadowed(ctx, 8, "rgba(40,60,85,0.25)", 2, () => {
            fillRR(ctx, 133 - mR, base - 108 - mR * 0.45, mR * 2, mR * 0.95, 2.5, lin(ctx, 0, base - 108, 0, base - 98, [[0, mc[0]], [1, mc[1]]]));
        });
        if (hotK > 0.25) {
            ctx.fillStyle = rad(ctx, 133, base - 104, 2, 24, [[0, `rgba(255,150,70,${0.4 * hotK})`], [1, "rgba(255,150,70,0)"]]);
            ctx.beginPath(); ctx.arc(133, base - 104, 24, 0, Math.PI * 2); ctx.fill();
        }
        pillText(ctx, `${p.t1} °C`, 88, base - 132, { size: 10.5, color: "#b4392f" });
        handle(ctx, 66, base - 108, "t₁", { key: "t1", axis: "y", from: base - 50, to: base - 140, min: 80, max: 300 });
        handle(ctx, 190, base - 108, "m₁", { key: "m1", axis: "x", from: 178, to: 264, min: 100, max: 800 });
        dragChip(ctx, 24, 24, tr3("t₁ — крути нагрев, m₁ — тяни кусок", "t₁ — қыздыру, m₁ — кескінді тарт", "t₁ heats, m₁ big piece"));

        /* ---------- калориметр ---------- */
        const bx = 330, bw = 136, bTop = 116, bBot = base - 6;
        contactShadow(ctx, bx + bw / 2, bBot + 3, bw * 0.54, 10, 0.26);
        fillRR(ctx, bx - 12, bBot + 1, bw + 24, 9, 4, lin(ctx, 0, bBot + 1, 0, bBot + 10, [[0, "#d9e2ec"], [1, "#96a5b5"]]));
        const level = map(p.m2, 150, 600, 0.30, 0.68);
        const wy = bTop + (bBot - bTop) * (1 - level);
        ctx.save();
        rr(ctx, bx, bTop, bw, bBot - bTop, 12); ctx.clip();
        ctx.fillStyle = "rgba(244,250,255,0.9)"; ctx.fillRect(bx, bTop, bw, bBot - bTop);
        const wcol = `rgba(${Math.round(118 + 110 * warmK)}, ${Math.round(200 - 60 * warmK)}, ${Math.round(238 - 120 * warmK)}, 0.72)`;
        ctx.fillStyle = lin(ctx, bx, wy, bx, bBot, [[0, wcol], [1, "rgba(96,166,214,0.66)"]]);
        ctx.fillRect(bx, wy, bw, bBot - wy);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(bx, wy - 1.2, bw, 2.4);
        ctx.beginPath(); ctx.ellipse(bx + bw / 2, wy, bw / 2 - 2, 3.4, 0, 0, Math.PI * 2); ctx.fill();
        bubbles(ctx, bx + 8, wy, bw - 24, bBot - wy - 6, t, warmK > 0.55 ? 10 : 3);
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = "rgba(120,150,180,0.6)"; ctx.lineWidth = 2.4; rr(ctx, bx, bTop, bw, bBot - bTop, 12); ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.9)"; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(bx + 9, bTop + 20); ctx.lineTo(bx + 9, bBot - 24); ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,0.35)"; ctx.fillRect(bx + bw - 16, bTop + 14, 8, bBot - bTop - 40);
        ctx.restore();
        // термометр
        fillRR(ctx, bx + bw - 32, bTop + 10, 10, bBot - bTop - 38, 5, "rgba(255,255,255,0.96)");
        strokeRR(ctx, bx + bw - 32, bTop + 10, 10, bBot - bTop - 38, 5, "rgba(120,150,180,0.5)", 1);
        const ty0 = bTop + 16, ty1 = bBot - 30;
        ctx.strokeStyle = "#d24b3f"; ctx.lineWidth = 3.6; ctx.lineCap = "round";
        const thK = clamp((calc.teq - 10) / 90, 0, 1);
        ctx.beginPath(); ctx.moveTo(bx + bw - 27, ty1); ctx.lineTo(bx + bw - 27, lerp(ty1, ty0, thK)); ctx.stroke();
        ctx.fillStyle = "#d24b3f"; ctx.beginPath(); ctx.arc(bx + bw - 27, ty1 + 3, 5.5, 0, Math.PI * 2); ctx.fill();
        pillText(ctx, `${fmt2(calc.teq)} °C`, bx + 4, bTop - 26, { size: 11.5, color: "#b4392f", bg: "rgba(255,255,255,0.96)" });
        text(ctx, tr3("вода", "су", "water"), bx + 12, bBot - 12, { size: 9.5, color: "rgba(30,90,130,0.75)", weight: 800 });
        handle(ctx, bx + bw - 4, wy - 2, "m₂", { key: "m2", axis: "y", from: bBot - 22, to: bTop + 24, min: 150, max: 600 });
        hit({ kind: "drag", key: "m2", axis: "y", x: bx + bw / 2, y: wy, from: bBot - 22, to: bTop + 24, min: 150, max: 600, r: 46 });
        ctx.strokeStyle = "rgba(47,125,184,0.5)"; ctx.lineWidth = 1.8; ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(206, base - 126); ctx.quadraticCurveTo(262, base - 152, 318, base - 126); ctx.stroke(); ctx.setLineDash([]);
        arrow(ctx, 300, base - 128, 318, base - 124, "#2f7db8", 2, "");

        /* ---------- карточка данных ---------- */
        const cx0 = 540, cy0 = 30, cw = 196, chh = 150;
        shadowed(ctx, 14, "rgba(40,70,110,0.2)", 6, () => fillRR(ctx, cx0, cy0, cw, chh, 14, "rgba(255,255,255,0.95)"));
        strokeRR(ctx, cx0, cy0, cw, chh, 14, "rgba(120,150,180,0.35)", 1);
        text(ctx, tr3("Калориметрия", "Калориметрия", "Calorimetry"), cx0 + 14, cy0 + 22, { size: 11, weight: 800, color: C.ink2 });
        const rows = [
            [tr3("металл", "металл", "metal"), { cu: "медь", fe: "железо", al: "алюминий" }[p.metal] || "медь"],
            ["m₁", `${p.m1} г`],
            ["t₁", `${p.t1} °C`],
            ["m₂", `${p.m2} г`]
        ];
        rows.forEach((r, i) => {
            text(ctx, r[0], cx0 + 14, cy0 + 46 + i * 20, { size: 10.5, color: C.soft, weight: 700 });
            text(ctx, r[1], cx0 + cw - 14, cy0 + 46 + i * 20, { size: 11, color: C.ink, align: "right", weight: 800 });
        });
        fillRR(ctx, cx0 + 12, cy0 + 126, cw - 24, 18, 9, "rgba(226,240,252,0.9)");
        text(ctx, `Q = ${fmt2(calc.q / 1000)} кДж`, cx0 + cw / 2, cy0 + 139, { size: 10.5, align: "center", color: "#1f6f9c", weight: 900 });
        // выбор металла
        ["cu", "fe", "al"].forEach((mt, i) => {
            const x = 540 + i * 66, y = 192;
            const on = p.metal === mt;
            fillRR(ctx, x, y, 58, 20, 10, on ? "rgba(47,125,184,0.18)" : "rgba(255,255,255,0.9)");
            strokeRR(ctx, x, y, 58, 20, 10, on ? "#2f7db8" : "rgba(120,146,172,0.42)", on ? 1.6 : 1);
            text(ctx, { cu: "Cu", fe: "Fe", al: "Al" }[mt], x + 29, y + 14, { size: 10.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 800 });
            hit({ kind: "tap", key: "metal", value: mt, x: x + 29, y: y + 10, r: 22 });
        });
    };

    SCENES.g8_phase = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.80 });
        const base = h * 0.80;
        const hot = map(p.power, 500, 3000, 0, 1);
        const warm = map(calc.temp, 0, 100, 0, 1);

        /* ---------- электроплитка ---------- */
        contactShadow(ctx, 182, base + 2, 108, 11, 0.26);
        fillRR(ctx, 82, base - 34, 200, 34, 10, lin(ctx, 82, base - 34, 82, base, [[0, "#eef4fa"], [1, "#9dabbb"]]));
        fillRR(ctx, 90, base - 20, 184, 10, 5, "rgba(255,255,255,0.55)");
        // конфорка
        ctx.beginPath(); ctx.ellipse(182, base - 34, 84, 15, 0, 0, Math.PI * 2);
        ctx.fillStyle = lin(ctx, 0, base - 49, 0, base - 19, [[0, "#5f6b78"], [1, "#39434e"]]); ctx.fill();
        ctx.beginPath(); ctx.ellipse(182, base - 35, 72, 12, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,${Math.round(140 - 60 * hot)},${Math.round(80 - 40 * hot)},${0.35 + hot * 0.62})`;
        ctx.lineWidth = 3;
        for (let k = 0; k < 3; k++) {
            ctx.beginPath();
            for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.12) {
                const rr2 = (k + 1) * 19 + Math.sin(a * 6 + t * 0.02) * 1.5;
                const x = 182 + Math.cos(a) * rr2, y = base - 35 + Math.sin(a) * rr2 * 0.18;
                a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        // ручка мощности
        brassKnob(ctx, 268, base - 16, 12, -Math.PI / 2 + hot * Math.PI * 1.5);
        handle(ctx, 268, base - 16, "", { key: "power", axis: "y", x: 268, y: base - 16, from: base - 4, to: base - 84, min: 500, max: 3000, r: 22 });

        /* ---------- стакан ---------- */
        const bw = 116, bx = 124, bTop = 96, bBot = base - 40;
        const level = map(p.mass, 100, 500, 0.38, 0.72);
        const wy = bTop + (bBot - bTop) * (1 - level);
        ctx.save(); rr(ctx, bx, bTop, bw, bBot - bTop, 10); ctx.clip();
        ctx.fillStyle = "rgba(250,253,255,0.92)"; ctx.fillRect(bx, bTop, bw, bBot - bTop);
        ctx.fillStyle = lin(ctx, bx, wy, bx, bBot, [[0, `rgba(${Math.round(116 + 112 * warm)},${Math.round(192 - 16 * warm)},${Math.round(232 - 92 * warm)},0.72)`], [1, "rgba(86,156,204,0.7)"]]);
        ctx.fillRect(bx, wy, bw, bBot - wy);
        ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillRect(bx, wy - 1, bw, 2.2);
        // лёд
        const melt = clamp(calc.meltFrac || 0, 0, 1);
        const iceCount = Math.round(5 * (1 - melt));
        for (let i = 0; i < 5; i++) {
            if (i >= iceCount) continue;
            const ix = bx + 22 + (i % 3) * 30 + Math.sin(t * 0.01 + i) * 2;
            const iy = wy - 4 + Math.floor(i / 3) * 16 - (1 - melt) * 6;
            ctx.save(); ctx.translate(ix, iy); ctx.rotate((i % 2 ? 0.3 : -0.2) + Math.sin(t * 0.02 + i) * 0.03);
            fillRR(ctx, -13, -9, 26, 18, 4, "rgba(226,246,255,0.94)");
            strokeRR(ctx, -13, -9, 26, 18, 4, "rgba(150,205,235,0.9)", 1.2);
            ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillRect(-8, -5, 7, 10);
            ctx.restore();
        }
        bubbles(ctx, bx + 10, wy + 8, bw - 24, bBot - wy - 12, t, warm > 0.5 ? 8 : 2);
        if (calc.temp > 60) steam(ctx, bx + bw / 2, wy - 10, t, 6, 16);
        ctx.restore();
        ctx.strokeStyle = "rgba(120,150,180,0.7)"; ctx.lineWidth = 2.2; rr(ctx, bx, bTop, bw, bBot - bTop, 10); ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.92)"; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.moveTo(bx + 8, bTop + 16); ctx.lineTo(bx + 8, bBot - 18); ctx.stroke();
        // деления
        ctx.strokeStyle = "rgba(90,120,150,0.45)"; ctx.lineWidth = 1;
        for (let i = 1; i <= 4; i++) {
            const y = lerp(bTop + 12, bBot - 10, i / 5);
            ctx.beginPath(); ctx.moveTo(bx + bw - 18, y); ctx.lineTo(bx + bw - 6, y); ctx.stroke();
        }
        // термометр
        fillRR(ctx, bx + 26, bTop - 16, 9, 74, 4.5, "rgba(255,255,255,0.96)");
        strokeRR(ctx, bx + 26, bTop - 16, 9, 74, 4.5, "rgba(120,150,180,0.5)", 1);
        const tTop = bTop - 10, tBot = bTop + 52;
        ctx.strokeStyle = "#d24b3f"; ctx.lineWidth = 3.2; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(bx + 30.5, tBot); ctx.lineTo(bx + 30.5, lerp(tBot, tTop, clamp((calc.temp + 5) / 110, 0, 1))); ctx.stroke();
        pillText(ctx, `${fmt2(calc.temp)} °C`, bx - 12, bTop - 26, { size: 11.5, color: "#b4392f", bg: "rgba(255,255,255,0.96)" });
        handle(ctx, bx - 20, wy, "", { key: "mass", axis: "y", x: bx - 20, y: wy, from: bBot - 16, to: bTop + 30, min: 100, max: 500 });
        text(ctx, `m = ${p.mass} г`, 248, base - 88, { size: 10, color: C.ink2, weight: 800 });
        text(ctx, `P = ${p.power} Вт`, 248, base - 72, { size: 10, color: "#b4632a", weight: 800 });
        hit({ kind: "drag", key: "mass", axis: "y", x: bx + bw / 2, y: wy, from: bBot - 16, to: bTop + 30, min: 100, max: 500, r: 52 });

        /* ---------- график ---------- */
        const gx = 356, gy = 26, gw = 386, gh = 224;
        shadowed(ctx, 16, "rgba(40,60,90,0.2)", 8, () => fillRR(ctx, gx, gy, gw, gh, 16, "rgba(255,255,255,0.97)"));
        strokeRR(ctx, gx, gy, gw, gh, 16, "rgba(120,150,180,0.32)", 1);
        text(ctx, tr3("Кривая нагрева", "Қыздыру қисығы", "Heating curve"), gx + 16, gy + 24, { size: 12, weight: 800, color: C.ink2 });
        pillText(ctx, `Q = ${fmt2(calc.qKj)} кДж`, gx + gw - 118, gy + 10, { size: 11, color: "#1f6f9c", bg: "rgba(226,240,252,0.95)" });
        const px0 = gx + 46, px1 = gx + gw - 20, py0 = gy + 44, py1 = gy + gh - 46;
        ctx.strokeStyle = "rgba(120,150,180,0.22)"; ctx.lineWidth = 1;
        [100, 75, 50, 25, 0].forEach((tv) => {
            const y = map(tv, -12, 104, py1, py0);
            ctx.beginPath(); ctx.moveTo(px0, y); ctx.lineTo(px1, y); ctx.stroke();
            text(ctx, `${tv}`, px0 - 8, y + 3.5, { size: 8.5, color: C.soft, align: "right" });
        });
        ctx.strokeStyle = "#8fa2b6"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(px0, py0 - 6); ctx.lineTo(px0, py1); ctx.lineTo(px1, py1); ctx.stroke();
        text(ctx, "t, °C", px0 - 30, py0 - 8, { size: 9.5, color: C.soft });
        text(ctx, "τ, с", px1 - 8, py1 + 16, { size: 9.5, color: C.soft });
        const pts = [];
        for (let i = 0; i <= 120; i++) {
            const u = i / 120;
            const T = u < 0.18 ? lerp(-10, 0, u / 0.18) : u < 0.52 ? 0 : lerp(0, 100, (u - 0.52) / 0.48);
            pts.push([lerp(px0, px1, u), map(T, -12, 104, py1, py0)]);
        }
        ctx.strokeStyle = "#d2603f"; ctx.lineWidth = 2.8; ctx.lineJoin = "round";
        ctx.beginPath(); pts.forEach((q, i) => i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])); ctx.stroke();
        // подписи участков
        pillText(ctx, tr3("лёд", "мұз", "ice"), lerp(px0, px1, 0.09) - 12, lerp(py0, py1, 0.92) + 4, { size: 8.5, color: "#3d7fa8" });
        pillText(ctx, tr3("плавление", "балқу", "melting"), lerp(px0, px1, 0.3) - 16, lerp(py0, py1, 0.98) + 2, { size: 8.5, color: "#3d7fa8" });
        pillText(ctx, tr3("вода", "су", "water"), lerp(px0, px1, 0.78) - 12, lerp(py0, py1, 0.42) + 4, { size: 8.5, color: "#3d7fa8" });
        const uT = clamp((p.time - 20) / 160, 0, 1);
        const mx = lerp(px0, px1, uT);
        const my = pts[Math.round(uT * 120)][1];
        ctx.strokeStyle = "rgba(47,125,184,0.55)"; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.moveTo(mx, py0); ctx.lineTo(mx, py1); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.arc(mx, my, 3.6, 0, Math.PI * 2); ctx.fillStyle = "#2f7db8"; ctx.fill();
        // дорожка времени
        const trkY = py1 + 22;
        fillRR(ctx, px0, trkY - 3, px1 - px0, 6, 3, "rgba(150,170,190,0.28)");
        fillRR(ctx, px0, trkY - 3, mx - px0, 6, 3, "rgba(47,125,184,0.55)");
        ctx.beginPath(); ctx.arc(mx, trkY, 8, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
        ctx.strokeStyle = "#2f7db8"; ctx.lineWidth = 2.4; ctx.stroke();
        hit({ kind: "drag", key: "time", axis: "x", x: mx, y: trkY, from: px0, to: px1, min: 20, max: 180, r: 20 });
        text(ctx, `${p.time} с`, Math.min(mx + 14, px1 - 26), trkY + 4, { size: 9.5, color: "#1f6f9c", weight: 800 });
        dragChip(ctx, 24, 24, tr3("P — мощность, m — масса, τ — время", "P — қуат, m — масса, τ — уақыт", "P power, m mass, τ time"));
    };

    SCENES.g8_ohm = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.82 });
        const base = h * 0.82;
        const I = calc.I || 0;
        const blown = calc.blown;
        const topY = base - 104, botY = base - 30;

        /* ---------- монтажная плата ---------- */
        shadowed(ctx, 18, "rgba(38,58,84,0.28)", 10, () => {
            fillRR(ctx, 44, base - 138, w - 88, 138, 16, lin(ctx, 0, base - 138, 0, base, [[0, "#fdfeff"], [1, "#e4ecf5"]]));
        });
        strokeRR(ctx, 44, base - 138, w - 88, 138, 16, "rgba(110,140,170,0.42)", 1.2);
        ctx.fillStyle = "rgba(120,146,172,0.12)";
        for (let x = 62; x < w - 52; x += 22) for (let y = base - 130; y < base - 10; y += 22) {
            ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill();
        }

        /* ---------- цепь (прямоугольник) ---------- */
        const L = 118, R = 706;
        wire(ctx, [[L, botY], [L, topY], [270, topY]], "#b8422c", 3.4);          // левая стойка + верх слева до амперметра
        wire(ctx, [[330, topY], [412, topY]], "#b8422c", 3.4);                    // амперметр → лампа
        wire(ctx, [[468, topY], [R, topY]], "#b8422c", 3.4);                      // лампа → правый верх
        wire(ctx, [[R, topY], [R, botY]], "#2f6fb0", 3.4);                        // правая стойка
        wire(ctx, [[R, botY], [604, botY]], "#2f6fb0", 3.4);                      // низ справа до реостата
        wire(ctx, [[466, botY], [172, botY]], "#2f6fb0", 3.4);                    // реостат → батарея
        wire(ctx, [[96, botY], [L, botY]], "#2f6fb0", 3.4);                       // батарея → левая стойка
        // узлы
        [[L, botY], [L, topY], [R, topY], [R, botY]].forEach((n) => {
            ctx.beginPath(); ctx.arc(n[0], n[1], 3.4, 0, Math.PI * 2);
            ctx.fillStyle = "#7e8c9b"; ctx.fill();
        });

        /* ---------- амперметр ---------- */
        gauge(ctx, 300, topY, 30, clamp(I / 5, 0, 1), "A", "");
        if (blown) {
            warnChip(ctx, 232, topY - 62, tr3("предохранитель сгорел", "сақтандырғыш күйді", "fuse blown"));
            ctx.strokeStyle = "#cf4a4a"; ctx.lineWidth = 3.2; ctx.setLineDash([5, 4]);
            ctx.beginPath(); ctx.moveTo(300, topY - 8); ctx.lineTo(300, topY - 2); ctx.stroke(); ctx.setLineDash([]);
        }

        /* ---------- лампа ---------- */
        const lx = 440, lb = topY;
        const glow = clamp((I * I * p.Rlamp) / 30, 0, 1);
        if (glow > 0.02) lampGlow(ctx, lx, lb - 34, 20, glow);
        // патрон
        fillRR(ctx, lx - 13, lb - 16, 26, 16, 3, lin(ctx, lx - 13, lb - 16, lx + 13, lb, [[0, "#e3cf9d"], [1, "#b39a5d"]]));
        ctx.strokeStyle = "rgba(120,96,40,0.55)"; ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(lx - 13, lb - 12 + i * 4); ctx.lineTo(lx + 13, lb - 10 + i * 4); ctx.stroke(); }
        // стекло
        ctx.beginPath();
        ctx.moveTo(lx - 11, lb - 16);
        ctx.bezierCurveTo(lx - 21, lb - 34, lx - 12, lb - 54, lx, lb - 54);
        ctx.bezierCurveTo(lx + 12, lb - 54, lx + 21, lb - 34, lx + 11, lb - 16);
        ctx.closePath();
        ctx.fillStyle = rad(ctx, lx - 4, lb - 40, 2, 26, [[0, `rgba(255,253,228,${0.9})`], [0.55, `rgba(255,${Math.round(226 - 66 * glow)},${Math.round(168 - 108 * glow)},${0.62 + 0.3 * glow})`], [1, "rgba(214,230,244,0.5)"]]);
        ctx.fill();
        ctx.strokeStyle = "rgba(120,150,180,0.8)"; ctx.lineWidth = 1.4; ctx.stroke();
        // нить
        ctx.strokeStyle = glow > 0.25 ? "#ffb347" : "#a97f3d"; ctx.lineWidth = 1.6;
        if (glow > 0.25) { ctx.shadowColor = "rgba(255,170,60,0.9)"; ctx.shadowBlur = 10; }
        ctx.beginPath();
        ctx.moveTo(lx - 5, lb - 18);
        for (let i = 0; i <= 8; i++) ctx.lineTo(lx - 5 + (i % 2 ? 5 : 0), lb - 18 - i * 2.6);
        ctx.lineTo(lx + 5, lb - 18);
        ctx.stroke();
        ctx.shadowBlur = 0;
        handle(ctx, lx + 34, lb - 42, "", { key: "Rlamp", axis: "x", x: lx + 34, y: lb - 42, from: lx + 26, to: lx + 96, min: 2, max: 10 });
        text(ctx, `Rл = ${p.Rlamp} Ом`, lx + 34, lb - 62, { size: 10, color: "#1f6f9c", weight: 800, align: "center" });
        pillText(ctx, `${fmt2(I)} А`, lx + 4, lb - 88, { size: 11, color: I > 2.8 ? "#b4392f" : "#1f6f9c" });

        /* ---------- реостат ---------- */
        const rx = 466, ry = botY - 30;
        shadowed(ctx, 12, "rgba(40,60,90,0.24)", 5, () => {
            fillRR(ctx, rx, ry, 138, 30, 9, lin(ctx, rx, ry, rx, ry + 30, [[0, "#f7fafd"], [1, "#c7d3e0"]]));
        });
        strokeRR(ctx, rx, ry, 138, 30, 9, "rgba(110,140,170,0.5)", 1.2);
        for (let i = 0; i < 14; i++) {
            ctx.strokeStyle = "#c08a3e"; ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.arc(rx + 14 + i * 8.6, ry + 15, 6, Math.PI * 1.12, Math.PI * 1.88, true); ctx.stroke();
        }
        wire(ctx, [[rx, botY], [rx, ry + 30]], "#2f6fb0", 2.4);
        wire(ctx, [[rx + 138, botY], [rx + 138, ry + 30]], "#2f6fb0", 2.4);
        const sliderX = map(p.Rrheo, 0, 16, rx + 12, rx + 124);
        steelBar(ctx, sliderX - 2.5, ry - 14, 5, 22, 2);
        shadowed(ctx, 6, "rgba(40,60,90,0.28)", 3, () => fillRR(ctx, sliderX - 11, ry - 22, 22, 10, 5, lin(ctx, 0, ry - 22, 0, ry - 12, [[0, "#f0d08a"], [1, "#b8892f"]])));
        hit({ kind: "drag", key: "Rrheo", axis: "x", x: sliderX, y: ry - 16, from: rx + 12, to: rx + 124, min: 0, max: 16, r: 24 });
        text(ctx, tr3("реостат", "реостат", "rheostat"), rx + 69, ry - 30, { size: 9.5, color: C.soft, weight: 700, align: "center" });
        text(ctx, `${p.Rrheo} Ом`, rx + 69, ry + 46, { size: 9.5, color: C.ink2, weight: 800, align: "center" });

        /* ---------- батарея ---------- */
        const bx = 96, bw2 = 76;
        shadowed(ctx, 14, "rgba(40,60,90,0.3)", 6, () => {
            fillRR(ctx, bx, botY - 52, bw2, 52, 8, lin(ctx, bx, botY - 52, bx, botY, [[0, "#4c5c6e"], [1, "#232e3a"]]));
        });
        fillRR(ctx, bx + 6, botY - 46, bw2 - 12, 14, 5, lin(ctx, 0, botY - 46, 0, botY - 32, [[0, "#6a7d92"], [1, "#3d4c5c"]]));
        text(ctx, p.U + " V", bx + bw2 / 2, botY - 22, { size: 12, color: "#eaf6ff", align: "center", weight: 900 });
        fillRR(ctx, bx + 12, botY - 8, 16, 6, 3, "#c9a13a");
        fillRR(ctx, bx + bw2 - 28, botY - 8, 16, 6, 3, "#9fc7e8");
        text(ctx, "+", bx + 20, botY - 26, { size: 11, color: "#ffd479", align: "center", weight: 900 });
        text(ctx, "−", bx + bw2 - 20, botY - 26, { size: 11, color: "#bcd9f2", align: "center", weight: 900 });
        handle(ctx, bx + bw2 / 2, botY - 62, "", { key: "U", axis: "y", x: bx + bw2 / 2, y: botY - 62, from: botY - 20, to: botY - 96, min: 4, max: 24 });
        text(ctx, `U = ${p.U} В`, bx + bw2 / 2, botY - 76, { size: 10, color: C.ink2, weight: 800, align: "center" });

        pillText(ctx, `R = ${fmt2(calc.Rtot)} Ом`, 56, 26, { size: 11.5, color: "#1f6f9c" });
        pillText(ctx, `P = ${fmt2(I * I * p.Rlamp)} Вт`, 56, 52, { size: 11, color: "#b4632a" });
        dragChip(ctx, 226, 26, tr3("крути U, R лампы и реостат", "U, шам R және реостатты бұр", "spin U, lamp R and rheostat"));
    };

    SCENES.g8_joule = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.80 });
        const base = h * 0.80;
        const series = p.mode === "series";

        /* ---------- щит ---------- */
        shadowed(ctx, 18, "rgba(38,58,84,0.26)", 10, () => {
            fillRR(ctx, 36, base - 132, w - 72, 132, 16, lin(ctx, 0, base - 132, 0, base, [[0, "#fdfeff"], [1, "#e3ecf5"]]));
        });
        strokeRR(ctx, 36, base - 132, w - 72, 132, 16, "rgba(110,140,170,0.42)", 1.2);
        ctx.fillStyle = "rgba(120,146,172,0.12)";
        for (let x = 48; x < w - 40; x += 18) ctx.fillRect(x, base - 132, 1, 132);
        text(ctx, tr3("Распределительный щит", "Тарату қалқаны", "Distribution board"), 56, base - 112, { size: 10.5, weight: 800, color: C.soft });

        /* ---------- нагреватели ---------- */
        const heaters = [
            { x: 168, key: "R1", val: p.R1, share: series ? calc.I * calc.I * p.R1 : (calc.U ? calc.U * calc.U / p.R1 : 0) },
            { x: 372, key: "R2", val: p.R2, share: series ? calc.I * calc.I * p.R2 : (calc.U ? calc.U * calc.U / p.R2 : 0) }
        ];
        heaters.forEach((ht, i) => {
            const cx = ht.x, cy = base - 62;
            contactShadow(ctx, cx, base - 20, 62, 8, 0.2);
            // корпус радиатора
            fillRR(ctx, cx - 64, cy + 2, 128, 14, 7, lin(ctx, 0, cy + 2, 0, cy + 16, [[0, "#eef4fa"], [1, "#a9b7c6"]]));
            ctx.strokeStyle = "rgba(120,146,172,0.35)"; ctx.lineWidth = 1;
            for (let k = 0; k < 6; k++) { ctx.beginPath(); ctx.moveTo(cx - 52 + k * 21, cy + 4); ctx.lineTo(cx - 52 + k * 21, cy + 14); ctx.stroke(); }
            const gl = clamp(ht.share / 700, 0, 1);
            // нихромовая спираль
            ctx.lineCap = "round";
            for (let k = 0; k < 11; k++) {
                const x = cx - 50 + k * 10;
                ctx.strokeStyle = `rgba(${Math.round(150 + 105 * gl)},${Math.round(110 + 80 * gl)},${Math.round(90 - 40 * gl)},${0.5 + 0.5 * gl})`;
                ctx.lineWidth = 3.4;
                ctx.beginPath();
                for (let yy = cy - 26; yy <= cy - 2; yy += 2.5) {
                    const xx = x + Math.sin((yy + t * 2.4) * 0.95) * 2.1;
                    yy === cy - 26 ? ctx.moveTo(xx, yy) : ctx.lineTo(xx, yy);
                }
                ctx.stroke();
            }
            if (gl > 0.05) {
                ctx.fillStyle = rad(ctx, cx, cy - 14, 4, 46, [[0, `rgba(255,150,70,${0.26 * gl})`], [1, "rgba(255,150,70,0)"]]);
                ctx.fillRect(cx - 60, cy - 42, 120, 50);
            }
            // клеммы
            [cx - 52, cx + 52].forEach((kx) => {
                ctx.beginPath(); ctx.arc(kx, cy + 9, 4.4, 0, Math.PI * 2);
                ctx.fillStyle = "#b98a4a"; ctx.fill();
                ctx.strokeStyle = "rgba(120,86,30,0.7)"; ctx.lineWidth = 1; ctx.stroke();
            });
            handle(ctx, cx + 66, cy - 40, "", { key: ht.key, axis: "x", x: cx + 66, y: cy - 40, from: cx + 54, to: cx + 104, min: 6, max: 30, r: 18 });
            fillRR(ctx, cx - 46, cy + 22, 92, 18, 9, "rgba(255,255,255,0.92)");
            text(ctx, `${ht.key} = ${ht.val} Ом`, cx, cy + 35, { size: 10, align: "center", color: "#1f6f9c", weight: 800 });
            text(ctx, `${Math.round(ht.share)} Вт`, cx, cy - 32, { size: 9.5, align: "center", color: "#b4632a", weight: 800 });
        });

        /* ---------- переключатель ---------- */
        const sx = 560, sy = base - 84;
        fillRR(ctx, sx - 46, sy - 26, 92, 60, 12, lin(ctx, 0, sy - 26, 0, sy + 34, [[0, "#f7fafd"], [1, "#cbd7e3"]]));
        strokeRR(ctx, sx - 46, sy - 26, 92, 60, 12, "rgba(110,140,170,0.45)", 1.2);
        const ang = series ? -0.62 : 0.62;
        ctx.strokeStyle = "#5c6f83"; ctx.lineWidth = 5.5; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(sx, sy + 18); ctx.lineTo(sx + Math.sin(ang) * 30, sy + 18 - Math.cos(ang) * 30); ctx.stroke();
        fillRR(ctx, sx + Math.sin(ang) * 30 - 4, sy + 18 - Math.cos(ang) * 30 - 4, 8, 8, 4, "#cf4a3d");
        ctx.beginPath(); ctx.arc(sx, sy + 18, 5, 0, Math.PI * 2); ctx.fillStyle = "#3f4e5e"; ctx.fill();
        hit({ kind: "tap", key: "mode", value: "series", x: sx - 26, y: sy + 44, r: 26 });
        hit({ kind: "tap", key: "mode", value: "parallel", x: sx + 26, y: sy + 44, r: 26 });
        text(ctx, tr3("послед.", "тізбектей", "series"), sx - 26, sy + 44, { size: 8.5, align: "center", color: series ? "#1f6f9c" : C.soft, weight: 800 });
        text(ctx, tr3("паралл.", "параллель", "parallel"), sx + 26, sy + 44, { size: 8.5, align: "center", color: series ? C.soft : "#1f6f9c", weight: 800 });

        /* ---------- приборы ---------- */
        gauge(ctx, 678, base - 74, 34, clamp(calc.I / 12, 0, 1), "A", "");
        const cx0 = 560, cy0 = 24;
        shadowed(ctx, 12, "rgba(40,70,110,0.2)", 5, () => fillRR(ctx, cx0, cy0, 176, 66, 12, "rgba(255,255,255,0.95)"));
        strokeRR(ctx, cx0, cy0, 176, 66, 12, "rgba(120,150,180,0.34)", 1);
        text(ctx, series ? "R = R₁ + R₂" : "1/R = 1/R₁ + 1/R₂", cx0 + 88, cy0 + 20, { size: 10.5, align: "center", color: C.ink2, weight: 800 });
        text(ctx, `R = ${fmt2(calc.Reqv)} Ом`, cx0 + 88, cy0 + 38, { size: 10.5, align: "center", color: "#1f6f9c", weight: 800 });
        text(ctx, `I = ${fmt2(calc.I)} А`, cx0 + 88, cy0 + 55, { size: 10.5, align: "center", color: "#1f6f9c", weight: 800 });
        pillText(ctx, `P = ${Math.round(calc.P)} Вт`, 56, 26, { size: 12, color: "#b4632a" });
        dragChip(ctx, 56, 52, tr3("крути R₁ и R₂, щёлкни переключатель", "R₁ мен R₂ бұр, ауыстырғышты бас", "spin R₁/R₂, tap the switch"));
    };

    SCENES.g8_faraday = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.75 });
        const base = h * 0.75;
        // рейка
        fillRR(ctx, 60, base - 26, 420, 10, 5, lin(ctx, 0, base - 26, 0, base - 16, [[0, "#dfe7ef"], [1, "#a7b6c6"]]));
        for (let x = 80; x < 470; x += 30) {
            ctx.strokeStyle = "rgba(120,146,172,0.5)"; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(x, base - 26); ctx.lineTo(x, base - 32); ctx.stroke();
        }
        // катушка
        const coilX = 330;
        const turns = Math.round(map(p.N, 50, 400, 3, 9));
        const coilH = 26 + turns * 4;
        contactShadow(ctx, coilX, base - 12, 40, 6, 0.2);
        for (let i = 0; i < turns; i++) {
            ctx.strokeStyle = i % 2 ? "#c07a3a" : "#d9974f";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.ellipse(coilX, base - 40 - i * (coilH / turns / 1.4) + 14, 26, 7, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
        // магнит
        const cycle = (Math.sin(t * 0.035 * clamp(p.v, 1, 10)) + 1) / 2;
        const mx = lerp(coilX - 250, coilX - 40, cycle);
        const glowK = clamp(calc.emf / 8, 0, 1);
        lampGlow(ctx, coilX, base - 60, 26, glowK);
        shadowed(ctx, 12, "rgba(40,60,90,0.3)", 5, () => {
            fillRR(ctx, mx - 34, base - 56, 26, 20, 4, lin(ctx, 0, base - 56, 0, base - 36, [[0, "#e2626a"], [1, "#a5293a"]]));
            fillRR(ctx, mx - 8, base - 56, 26, 20, 4, lin(ctx, 0, base - 56, 0, base - 36, [[0, "#6a9fe0"], [1, "#22497f"]]));
        });
        text(ctx, "N", mx - 21, base - 43, { size: 10, color: "#fff", align: "center", weight: 900 });
        text(ctx, "S", mx + 5, base - 43, { size: 10, color: "#fff", align: "center", weight: 900 });
        // магнитная индукция ручка
        handle(ctx, mx - 46, base - 70, "B", { key: "B", axis: "x", x: mx - 46, y: base - 70, from: mx - 46, to: mx + 10, min: 0.2, max: 1.2 });
        // связь катушка-гальванометр
        wire(ctx, [[coilX - 26, base - 44], [coilX - 70, base - 44], [coilX - 70, base - 14], [600, base - 14], [600, base - 62]], "#b1442f", 2.6);
        wire(ctx, [[coilX + 26, base - 34], [coilX + 60, base - 34], [coilX + 60, base - 8], [630, base - 8], [630, base - 62]], "#2f6fb0", 2.6);
        gauge(ctx, 615, base - 92, 34, clamp(calc.emf / 10, 0, 1), "V", "");
        // скорость
        arrow(ctx, mx + 40, base - 46, mx + 84, base - 46, "#2f7db8", 2.5, `v = ${p.v}`);
        hit({ kind: "drag", key: "v", axis: "x", x: mx, y: base - 46, from: 340, to: 60, min: 1, max: 10 });
        dragChip(ctx, 62, base - 78, tr3("оттяни магнит — скорость", "магнитті тарт — жылдамдық", "pull the magnet — speed"));
        handle(ctx, coilX + 40, base - 96, "N", { key: "N", axis: "y", x: coilX + 40, y: base - 96, from: base - 60, to: base - 150, min: 50, max: 400 });
        pillText(ctx, `ε = ${fmt2(calc.emf)} В`, 66, 30, { size: 12, color: "#1f6f9c" });
    };

    SCENES.g8_optics = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.8 });
        const base = h * 0.8;
        // оптическая скамья
        shadowed(ctx, 12, "rgba(40,60,90,0.22)", 6, () => {
            fillRR(ctx, 50, base - 16, w - 100, 16, 8, lin(ctx, 0, base - 16, 0, base, [[0, "#eef3f9"], [1, "#b9c6d4"]]));
        });
        for (let x = 70; x < w - 70; x += 20) {
            ctx.strokeStyle = "rgba(120,146,172,0.45)"; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(x, base - 16); ctx.lineTo(x, base - 21); ctx.stroke();
        }
        const lensX = 420;
        const candleX = map(p.d, 14, 50, 100, 340);
        const screenX = clamp(lensX + map(p.screen, 12, 60, 70, 260), lensX + 50, w - 40);
        // свеча
        contactShadow(ctx, candleX, base - 12, 16, 5, 0.2);
        fillRR(ctx, candleX - 9, base - 56, 18, 44, 6, lin(ctx, candleX - 9, base - 56, candleX + 9, base - 12, [[0, "#fff6dc"], [1, "#e6d3a3"]]));
        ctx.beginPath(); ctx.ellipse(candleX, base - 56, 9, 3.5, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff8e6"; ctx.fill();
        flameShape(ctx, candleX, base - 58, 18, 8, t);
        lampGlow(ctx, candleX, base - 62, 10, 0.85);
        handle(ctx, candleX, base - 78, "d", { key: "d", axis: "x", x: candleX, y: base - 78, from: 100, to: 340, min: 14, max: 50 });
        // линза
        steelBar(ctx, lensX - 3, base - 92, 6, 82, 3);
        steelBar(ctx, lensX - 20, base - 96, 40, 6, 3);
        const lensH = 52 + map(p.F, 8, 18, 16, -10);
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(lensX, base - 56, 12, lensH / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = rad(ctx, lensX - 4, base - 66, 2, lensH, [[0, "rgba(255,255,255,0.9)"], [0.5, "rgba(180,220,245,0.55)"], [1, "rgba(140,190,225,0.4)"]]);
        ctx.fill();
        ctx.strokeStyle = "rgba(120,160,200,0.85)"; ctx.lineWidth = 2; ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.8)"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(lensX - 5, base - 56 - lensH / 4); ctx.lineTo(lensX - 5, base - 56 + lensH / 4); ctx.stroke();
        ctx.restore();
        handle(ctx, lensX + 26, base - 86, "F", { key: "F", axis: "y", x: lensX + 26, y: base - 86, from: base - 64, to: base - 118, min: 8, max: 18 });
        // экран
        contactShadow(ctx, screenX, base - 12, 22, 5, 0.2);
        fillRR(ctx, screenX - 4, base - 92, 8, 78, 3, lin(ctx, 0, base - 92, 0, base - 14, [[0, "#dfe7ef"], [1, "#9aa9ba"]]));
        fillRR(ctx, screenX - 26, base - 96, 52, 58, 5, lin(ctx, 0, base - 96, 0, base - 38, [[0, "#ffffff"], [1, "#eef3f8"]]));
        strokeRR(ctx, screenX - 26, base - 96, 52, 58, 5, "rgba(120,146,172,0.6)", 1.2);
        const sharp = clamp(1 - (calc.blur || 0) / 20, 0.1, 1);
        const imgH = clamp(32 * (calc.mag || 1), 8, 50);
        const flick = 0.55 + sharp * 0.4;
        ctx.save();
        ctx.beginPath(); ctx.ellipse(screenX, base - 66, 10 + (1 - sharp) * 8, imgH / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,180,80,${0.35 + 0.45 * flick})`;
        ctx.shadowColor = "rgba(255,170,60,0.6)"; ctx.shadowBlur = 12 * flick;
        ctx.fill();
        ctx.restore();
        handle(ctx, screenX + 6, base - 108, "экран", { key: "screen", axis: "x", x: screenX, y: base - 108, from: lensX + 60, to: w - 50, min: 12, max: 60 });
        // лучи
        ctx.strokeStyle = "rgba(240,170,70,0.5)"; ctx.lineWidth = 1.4;
        [[-1, -1], [0, 0], [1, 1]].forEach(([a, b]) => {
            ctx.beginPath();
            ctx.moveTo(candleX, base - 60);
            ctx.lineTo(lensX, base - 56 + a * 22);
            ctx.lineTo(screenX, base - 66 + b * (imgH / 2) * 0.9);
            ctx.stroke();
        });
        pillText(ctx, `Γ = ${fmt2(calc.mag)}×`, 66, 30, { size: 11.5, color: "#1f6f9c" });
        pillText(ctx, `${calc.blur > 6 ? tr3("изображение размыто", "кескін бұлыңғыр", "image blurred") : tr3("резкое изображение", "анық кескін", "sharp image")}`, 66, 54, { size: 10.5, color: calc.blur > 6 ? "#b4392f" : "#227a4d" });
    };

    SCENES.g8_hydraulic = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.82 });
        const base = h * 0.82;
        const oilLevel = base - 66;
        const s1w = map(p.S1, 2, 20, 34, 78);
        const s2w = map(p.S2, 20, 200, 90, 210);
        const smallX = 118, bigX = 420;
        // соединительная труба
        fillRR(ctx, smallX + s1w / 2, base - 34, bigX + s2w / 2 - smallX - s1w / 2, 26, 6, lin(ctx, 0, base - 34, 0, base - 8, [[0, "#d3dde7"], [1, "#9aa9ba"]]));
        fillRR(ctx, smallX + s1w / 2 + 4, base - 31, bigX + s2w / 2 - smallX - s1w / 2 - 8, 20, 5, "rgba(214,160,70,0.85)");

        const drawCyl = (x, wd, topY) => {
            // стенки
            fillRR(ctx, x - 2, topY, wd + 4, base - topY, 7, lin(ctx, 0, topY, 0, base, [[0, "#eef4fa"], [1, "#c3d1de"]]));
            ctx.save(); rr(ctx, x + 4, topY + 6, wd - 8, base - topY - 10, 5); ctx.clip();
            ctx.fillStyle = lin(ctx, 0, oilLevel, 0, base, [[0, "rgba(226,178,86,0.9)"], [1, "rgba(180,124,40,0.92)"]]);
            ctx.fillRect(x, oilLevel, wd, base - oilLevel);
            ctx.fillStyle = "rgba(255,246,214,0.55)";
            ctx.beginPath(); ctx.ellipse(x + wd / 2, oilLevel, wd / 2 - 6, 3.5, 0, 0, Math.PI * 2); ctx.fill();
            bubbles(ctx, x + 6, oilLevel, wd - 14, base - oilLevel - 6, t, 3);
            ctx.restore();
            strokeRR(ctx, x - 2, topY, wd + 4, base - topY, 7, "rgba(110,140,170,0.55)", 1.6);
            ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fillRect(x + 6, topY + 10, 5, base - topY - 24);
        };
        const p1y = oilLevel - 24 + Math.sin(t * 0.03) * 1.5;
        const p2y = oilLevel - 74 + map(calc.F2, 0, 60, 60, 0) * 0.35;
        drawCyl(smallX, s1w, p1y);
        drawCyl(bigX, s2w, p2y);
        // поршни
        steelBar(ctx, smallX - 4, p1y, s1w + 8, 10, 4);
        steelBar(ctx, bigX - 4, p2y, s2w + 8, 12, 5);
        // шток малого
        steelBar(ctx, smallX + s1w / 2 - 5, p1y - 54, 10, 54, 4);
        // груз
        shadowed(ctx, 12, "rgba(40,60,90,0.3)", 6, () => {
            fillRR(ctx, bigX + s2w / 2 - 34, p2y - 44, 68, 40, 6, lin(ctx, 0, p2y - 44, 0, p2y - 4, [[0, "#e8c579"], [1, "#b8892f"]]));
        });
        ctx.strokeStyle = "rgba(120,86,30,0.5)"; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(bigX + s2w / 2 - 34, p2y - 24); ctx.lineTo(bigX + s2w / 2 + 34, p2y - 24); ctx.stroke();
        text(ctx, "800 kg", bigX + s2w / 2, p2y - 18, { size: 11, color: "#4b3410", align: "center", weight: 900 });
        // стрелки сил
        arrow(ctx, smallX + s1w / 2, p1y - 76, smallX + s1w / 2, p1y - 56, "#cf4a4a", 3.4, `F₁ = ${p.F1} Н`);
        arrow(ctx, bigX + s2w / 2, p2y - 60, bigX + s2w / 2, p2y - 80, "#2ea36a", 3.4, `F₂ = ${fmt2(calc.F2 / 1000)} кН`);
        // ручки
        hit({ kind: "drag", key: "F1", axis: "y", x: smallX + s1w / 2, y: p1y - 60, from: p1y - 10, to: p1y - 110, min: 100, max: 800 });
        handle(ctx, smallX + s1w / 2 + 22, p1y - 60, "F₁", { key: "F1", axis: "y", x: smallX + s1w / 2 + 22, y: p1y - 60, from: p1y - 10, to: p1y - 110, min: 100, max: 800 });
        handle(ctx, bigX + s2w + 14, base - 80, "S₂", { key: "S2", axis: "x", x: bigX + s2w + 14, y: base - 80, from: bigX + 90, to: bigX + 220, min: 20, max: 200 });
        handle(ctx, smallX + s1w + 12, base - 40, "S₁", { key: "S1", axis: "x", x: smallX + s1w + 12, y: base - 40, from: smallX + 34, to: smallX + 96, min: 2, max: 20 });
        dragChip(ctx, 40, 34, tr3("тяни поршни и стенки цилиндров", "поршеньдерді тарт", "drag pistons & cylinder walls"));
        pillText(ctx, calc.pass ? tr3("груз поднят", "жүк көтерілді", "load lifted") : tr3("силы не хватает", "күш жетпейді", "not enough force"), w - 190, 30, { size: 11, color: calc.pass ? "#227a4d" : "#b4392f" });
    };

    SCENES.g8_archimedes = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.84 });
        const base = h * 0.84;
        const tx = 60, tw = 430, tTop = 74, tBot = base - 8;
        // аквариум
        contactShadow(ctx, tx + tw / 2, tBot + 2, tw * 0.5, 9, 0.22);
        ctx.save();
        rr(ctx, tx, tTop, tw, tBot - tTop, 12); ctx.clip();
        const waterTop = tTop + 26;
        const g = ctx.createLinearGradient(0, waterTop, 0, tBot);
        g.addColorStop(0, "rgba(120,205,240,0.55)");
        g.addColorStop(0.55, "rgba(60,150,205,0.62)");
        g.addColorStop(1, "rgba(28,96,150,0.7)");
        ctx.fillStyle = g; ctx.fillRect(tx, waterTop, tw, tBot - waterTop);
        // волны на поверхности
        ctx.strokeStyle = "rgba(255,255,255,0.65)"; ctx.lineWidth = 1.6;
        ctx.beginPath();
        for (let x = tx; x <= tx + tw; x += 6) {
            const y = waterTop + Math.sin((x + t * 2) * 0.06) * 2.2;
            x === tx ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        // каустика
        for (let i = 0; i < 7; i++) {
            ctx.fillStyle = "rgba(255,255,255,0.08)";
            ctx.beginPath();
            ctx.ellipse(tx + 40 + i * 60 + Math.sin(t * 0.01 + i) * 8, waterTop + 30 + (i % 3) * 34, 26, 8, 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
        // батискаф
        const subX = tx + tw / 2, subR = map(p.V, 0.5, 4, 22, 44);
        const subY = clamp(waterTop + 34 + subR + map(p.V, 0.5, 4, 0, 26), waterTop + 30, tBot - subR - 6);
        ctx.save();
        shadowed(ctx, 16, "rgba(10,50,80,0.35)", 8, () => {
            ctx.beginPath(); ctx.ellipse(subX, subY, subR, subR * 0.62, 0, 0, Math.PI * 2);
            ctx.fillStyle = lin(ctx, subX - subR, subY - subR, subX + subR, subY + subR, [[0, "#ffe9a3"], [0.55, "#f0c14b"], [1, "#b78a24"]]);
            ctx.fill();
        });
        ctx.beginPath(); ctx.ellipse(subX, subY, subR * 0.92, subR * 0.55, 0, Math.PI * 0.15, Math.PI * 0.85);
        ctx.strokeStyle = "rgba(120,86,20,0.55)"; ctx.lineWidth = 2; ctx.stroke();
        [0.5, 0.22].forEach((k, i) => {
            ctx.beginPath(); ctx.arc(subX - subR * k, subY - subR * 0.16, subR * 0.19, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(40,180,220,${0.75 + Math.sin(t * 0.06 + i) * 0.2})`; ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,0.8)"; ctx.lineWidth = 1.4; ctx.stroke();
        });
        ctx.fillStyle = "#c9a13a"; ctx.fillRect(subX - subR * 0.1, subY - subR * 1.02, subR * 0.2, subR * 0.35);
        ctx.beginPath(); ctx.arc(subX, subY - subR * 1.05, subR * 0.12, 0, Math.PI * 2); ctx.fillStyle = "#ffe9a3"; ctx.fill();
        ctx.restore();
        bubbles(ctx, subX - 6, subY - subR, 14, 40, t, 6);
        ctx.restore();
        // стекло
        strokeRR(ctx, tx, tTop, tw, tBot - tTop, 12, "rgba(110,145,180,0.7)", 2.4);
        ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.fillRect(tx + 8, tTop + 12, 6, tBot - tTop - 30);
        ctx.fillStyle = "rgba(255,255,255,0.28)"; ctx.fillRect(tx + tw - 16, tTop + 20, 7, tBot - tTop - 56);
        fillRR(ctx, tx - 8, tBot, tw + 16, 12, 6, lin(ctx, 0, tBot, 0, tBot + 12, [[0, "#dfe7ef"], [1, "#9aa9ba"]]));
        // силы
        arrow(ctx, subX, subY, subX, subY + 54, "#cf4a4a", 3, `mg = ${fmt2(calc.W / 1000)} кН`);
        arrow(ctx, subX, subY, subX, subY - 54, "#2ea36a", 3, `F_A = ${fmt2(calc.FA / 1000)} кН`);
        // ручки
        handle(ctx, subX + subR + 16, subY, "V", { key: "V", axis: "x", x: subX + subR + 16, y: subY, from: subX + 20, to: subX + 70, min: 0.5, max: 4 });
        dragChip(ctx, tx + 8, tTop + 8, tr3("тяни батискаф", "батискафты тарт", "drag the sub"));
        hit({ kind: "drag", key: "V", axis: "y", x: subX, y: subY, from: tBot - 20, to: waterTop + 20, min: 4, max: 0.5 });
        // балласт
        const balX = 560, balY = base - 60;
        contactShadow(ctx, balX + 26, base - 12, 40, 7, 0.24);
        fillRR(ctx, balX - 10, balY, 74, 44, 6, lin(ctx, 0, balY, 0, balY + 44, [[0, "#b9c6d4"], [1, "#6d7d8e"]]));
        text(ctx, "m", balX + 27, balY + 27, { size: 13, color: "#f4f9ff", align: "center", weight: 900 });
        handle(ctx, balX + 80, balY + 10, "масса", { key: "m", axis: "y", x: balX + 80, y: balY + 10, from: base - 20, to: base - 120, min: 200, max: 3000 });
        // жидкости
        const liquids = [["water", "Вода", "Су", "Water"], ["sea", "Море", "Теңіз", "Sea"], ["oil", "Масло", "Май", "Oil"]];
        liquids.forEach((liq, i) => {
            const x = 540 + i * 0, y = 40 + i * 28;
            const on = p.liquid === liq[0];
            fillRR(ctx, 524, y, 106, 22, 11, on ? "rgba(47,125,184,0.16)" : "rgba(255,255,255,0.8)");
            strokeRR(ctx, 524, y, 106, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.4)", on ? 1.6 : 1);
            text(ctx, tr3(liq[1], liq[2], liq[3]), 577, y + 15, { size: 10.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "liquid", value: liq[0], x: 577, y: y + 11, r: 26 });
        });
        pillText(ctx, `ρ = ${calc.rho} кг/м³`, 540, base - 76, { size: 10, color: "#1f6f9c" });
    };

    SCENES.g8_echo = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const seaTop = h * 0.34;
        const g = ctx.createLinearGradient(0, seaTop, 0, h);
        g.addColorStop(0, "rgba(120,200,235,0.85)");
        g.addColorStop(0.4, "rgba(52,140,190,0.9)");
        g.addColorStop(1, "rgba(16,72,112,0.95)");
        ctx.fillStyle = g; ctx.fillRect(0, seaTop, w, h - seaTop);
        // блики
        for (let i = 0; i < 6; i++) {
            ctx.fillStyle = "rgba(255,255,255,0.12)";
            ctx.beginPath(); ctx.ellipse(w * 0.2 + i * 90, seaTop + 22 + (i % 3) * 20, 40, 6, 0, 0, Math.PI * 2); ctx.fill();
        }
        // дно
        const depth = map(p.t, 0.02, 0.6, h * 0.55, h - 14);
        ctx.fillStyle = "#cfe0d2";
        ctx.beginPath(); ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 26) ctx.lineTo(x, depth + Math.sin(x * 0.03) * 7);
        ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = "rgba(90,130,110,0.4)"; ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 26) {
            const y = depth + Math.sin(x * 0.03) * 7;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        // корабль
        const sx = w * 0.5;
        shadowed(ctx, 14, "rgba(20,60,90,0.3)", 7, () => {
            ctx.beginPath();
            ctx.moveTo(sx - 84, seaTop - 18);
            ctx.lineTo(sx + 92, seaTop - 18);
            ctx.lineTo(sx + 66, seaTop + 6);
            ctx.lineTo(sx - 62, seaTop + 6);
            ctx.closePath();
            ctx.fillStyle = lin(ctx, 0, seaTop - 18, 0, seaTop + 8, [[0, "#f6fafd"], [0.6, "#d5dde6"], [1, "#a3392f"]]);
            ctx.fill();
        });
        fillRR(ctx, sx - 26, seaTop - 48, 54, 30, 5, lin(ctx, 0, seaTop - 48, 0, seaTop - 18, [[0, "#ffffff"], [1, "#dbe4ed"]]));
        fillRR(ctx, sx - 18, seaTop - 44, 14, 12, 2, "rgba(120,190,225,0.9)");
        fillRR(ctx, sx + 2, seaTop - 44, 14, 12, 2, "rgba(120,190,225,0.9)");
        steelBar(ctx, sx - 2, seaTop - 78, 4, 32, 2);
        ctx.beginPath(); ctx.arc(sx, seaTop - 80, 3.4, 0, Math.PI * 2); ctx.fillStyle = "#cf4a4a"; ctx.fill();
        // луч
        const bx = sx, by = seaTop;
        const grad = ctx.createLinearGradient(bx, by, bx, depth);
        grad.addColorStop(0, "rgba(255,255,255,0.45)");
        grad.addColorStop(1, "rgba(255,255,255,0.02)");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.moveTo(bx - 5, by); ctx.lineTo(bx + 5, by); ctx.lineTo(bx + 42, depth); ctx.lineTo(bx - 42, depth); ctx.closePath(); ctx.fill();
        // импульс
        for (let i = 0; i < 4; i++) {
            const ph = ((t * 0.012 + i * 0.25) % 1);
            const yy = lerp(by, depth, ph);
            ctx.strokeStyle = `rgba(255,255,255,${0.5 - ph * 0.35})`; ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.arc(bx, yy, 14 + ph * 34, Math.PI * 0.12, Math.PI * 0.88);
            ctx.stroke();
        }
        // отметка глубины
        ctx.strokeStyle = "rgba(255,255,255,0.8)"; ctx.lineWidth = 1.4; ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(w - 74, seaTop); ctx.lineTo(w - 74, depth); ctx.stroke(); ctx.setLineDash([]);
        pillText(ctx, `h = ${fmt2(calc.h)} м`, w - 168, (seaTop + depth) / 2, { size: 11, color: "#134a70", bg: "rgba(255,255,255,0.95)" });
        dragChip(ctx, 24, seaTop + 10, tr3("тяни дно — время эха", "түбін тарт — жаңғырық", "drag seabed — echo time"));
        hit({ kind: "drag", key: "t", axis: "y", x: w * 0.3, y: depth, from: h - 20, to: seaTop + 40, min: 0.02, max: 0.6 });
        handle(ctx, w * 0.3, depth - 12, "t", { key: "t", axis: "y", x: w * 0.3, y: depth - 12, from: h - 20, to: seaTop + 40, min: 0.02, max: 0.6 });
        // среда
        const mediums = [["water", "Вода", "Су", "Water"], ["steel", "Сталь", "Болат", "Steel"], ["air", "Воздух", "Ауа", "Air"]];
        mediums.forEach((md, i) => {
            const x = 24 + i * 96, y = 24;
            const on = p.medium === md[0];
            fillRR(ctx, x, y, 88, 22, 11, on ? "rgba(47,125,184,0.2)" : "rgba(255,255,255,0.86)");
            strokeRR(ctx, x, y, 88, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(md[1], md[2], md[3]), x + 44, y + 15, { size: 10.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "medium", value: md[0], x: x + 44, y: y + 11, r: 22 });
        });
        pillText(ctx, `v = ${calc.v} м/с`, 24, 68, { size: 10.5, color: "#134a70" });
    };

    /* ============================ 9 КЛАСС ============================ */

    SCENES.g9_ballistics = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const groundY = h * 0.86;
        // полигон
        ctx.fillStyle = lin(ctx, 0, groundY - 20, 0, h, [[0, "#d7e9d9"], [1, "#bcd6c1"]]);
        ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, groundY - 8);
        for (let x = 0; x <= w; x += 40) ctx.lineTo(x, groundY - 8 + Math.sin(x * 0.02) * 3);
        ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
        // разметка — от точки вылета, чтобы цели совпадали с траекторией
        const originX = 116 + 10 + 40;
        for (let m = 0; m <= 100; m += 20) {
            const x = originX + m * 5.6;
            ctx.strokeStyle = "rgba(70,110,90,0.35)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(x, groundY - 4); ctx.lineTo(x, groundY + 10); ctx.stroke();
            text(ctx, `${m}`, x, groundY + 22, { size: 9, color: "rgba(46,84,64,0.75)", align: "center" });
        }
        // пушка
        const px = 116, py = groundY - 24;
        contactShadow(ctx, px + 8, groundY - 2, 40, 8, 0.22);
        ctx.beginPath(); ctx.arc(px + 10, groundY - 12, 13, 0, Math.PI * 2); ctx.fillStyle = "#8c9cae"; ctx.fill();
        ctx.beginPath(); ctx.arc(px + 10, groundY - 12, 6, 0, Math.PI * 2); ctx.fillStyle = "#5d6c7c"; ctx.fill();
        const ang = -p.angle * Math.PI / 180;
        ctx.save();
        ctx.translate(px + 10, py);
        ctx.rotate(ang);
        shadowed(ctx, 12, "rgba(40,60,80,0.3)", 5, () => {
            fillRR(ctx, 0, -9, 74, 18, 9, lin(ctx, 0, -9, 0, 9, [[0, "#c9d5e2"], [0.5, "#8b9cad"], [1, "#5e6d7d"]]));
        });
        fillRR(ctx, 58, -11, 16, 22, 6, "#4c5966");
        ctx.restore();
        // угол
        ctx.strokeStyle = "rgba(47,125,184,0.55)"; ctx.lineWidth = 1.6; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(px + 10, py); ctx.lineTo(px + 96, py); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.arc(px + 10, py, 34, ang, 0); ctx.strokeStyle = "rgba(47,125,184,0.75)"; ctx.stroke();
        pillText(ctx, `${p.angle}°`, px + 46, py - 14, { size: 10.5, color: "#1f6f9c" });
        handle(ctx, px + 96, py + 6, "угол", { kind: "angle", key: "angle", cx: px + 10, cy: py, min: 15, max: 75, x: px + 96, y: py + 6 });
        // траектория — тот же масштаб, что и разметка (5.6 px на метр)
        const Lpx = clamp(calc.L * 5.6, 0, 560);
        const Hpx = clamp(calc.H * 2.6, 0, 118);
        ctx.strokeStyle = "rgba(47,125,184,0.4)"; ctx.lineWidth = 2; ctx.setLineDash([7, 6]);
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
            const u = i / 60;
            const x = originX + Lpx * u;
            const y = py - 4 * Hpx * u * (1 - u);
            i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke(); ctx.setLineDash([]);
        // снаряд
        const cyc = (t * 0.006) % 1;
        const bx = originX + Lpx * cyc, by = py - 4 * Hpx * cyc * (1 - cyc);
        ctx.fillStyle = rad(ctx, bx - 2, by - 2, 1, 7, [[0, "#ffffff"], [1, "#5d6c7c"]]);
        ctx.beginPath(); ctx.arc(bx, by, 5, 0, Math.PI * 2); ctx.fill();
        // цель стоит ровно там, куда ложится снаряд
        const tgtX = originX + clamp(calc.L * 5.6, 0, 560);
        ctx.strokeStyle = "#cf4a4a"; ctx.lineWidth = 2;
        [8, 16].forEach((r) => { ctx.beginPath(); ctx.ellipse(tgtX, groundY - 2, r, r * 0.35, 0, 0, Math.PI * 2); ctx.stroke(); });
        steelBar(ctx, tgtX + 8, groundY - 40, 3, 38, 1.5);
        ctx.fillStyle = "#cf4a4a"; ctx.beginPath(); ctx.moveTo(tgtX + 11, groundY - 40); ctx.lineTo(tgtX + 30, groundY - 34); ctx.lineTo(tgtX + 11, groundY - 28); ctx.closePath(); ctx.fill();
        // ручка заряда
        brassKnob(ctx, 60, groundY - 46, 12, -Math.PI / 2 + map(p.v0, 15, 45, 0, Math.PI * 1.4));
        handle(ctx, 40, groundY - 66, "v₀", { kind: "drag", key: "v0", axis: "y", x: 40, y: groundY - 66, from: groundY - 20, to: groundY - 110, min: 15, max: 45 });
        dragChip(ctx, 30, 24, tr3("крути ствол и заряд", "оқпаны мен зарядты бұр", "aim the barrel & charge"));
        // гравитация
        [["9.8", "Земля", "Жер", "Earth"], ["3.7", "Марс", "Марс", "Mars"]].forEach((gr, i) => {
            const x = w - 190, y = 24 + i * 26;
            const on = String(p.g) === gr[0];
            fillRR(ctx, x, y, 158, 22, 11, on ? "rgba(47,125,184,0.2)" : "rgba(255,255,255,0.85)");
            strokeRR(ctx, x, y, 158, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, `${tr3(gr[1], gr[2], gr[3])} · g = ${gr[0]}`, x + 79, y + 15, { size: 10, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "g", value: gr[0], x: x + 79, y: y + 11, r: 26 });
        });
        pillText(ctx, `L = ${fmt2(calc.L)} м`, 30, 66, { size: 11, color: "#1f6f9c" });
        pillText(ctx, `H = ${fmt2(calc.H)} м`, 30, 92, { size: 10.5, color: "#2b7f52" });
    };

    SCENES.g9_orbit = (ctx, w, h, p, calc, t) => {
        spaceBackdrop(ctx, w, h, t);
        const cx = 248, cy = 136;
        const R = 70;
        planet(ctx, cx, cy, R, t);
        // орбита — эллипс: так она целиком помещается в кадр при любой высоте
        const RX = R + map(p.h, 400, 6400, 14, 92), RY = RX * 0.62;
        ctx.strokeStyle = "rgba(47,125,184,0.35)"; ctx.lineWidth = 1.6; ctx.setLineDash([7, 6]);
        ctx.beginPath(); ctx.ellipse(cx, cy, RX, RY, 0, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
        // спутник
        const a = t * 0.012 + 0.6;
        const sx = cx + Math.cos(a) * RX, sy = cy + Math.sin(a) * RY;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(a + Math.PI / 2);
        shadowed(ctx, 14, "rgba(30,60,100,0.35)", 5, () => {
            fillRR(ctx, -10, -17, 20, 34, 4, lin(ctx, -10, 0, 10, 0, [[0, "#f7fafd"], [1, "#aab9c9"]]));
        });
        strokeRR(ctx, -10, -17, 20, 34, 4, "rgba(90,116,145,0.5)", 1);
        [-1, 1].forEach((s) => {
            const bx = s * 13 - (s > 0 ? 0 : 26);
            fillRR(ctx, bx, -11, 26, 16, 2.5, lin(ctx, 0, -11, 0, 5, [[0, "#7cb7e8"], [1, "#35699f"]]));
            ctx.strokeStyle = "rgba(255,255,255,0.62)"; ctx.lineWidth = 0.8;
            for (let i = 1; i < 6; i++) { ctx.beginPath(); ctx.moveTo(bx + i * 4.2, -10); ctx.lineTo(bx + i * 4.2, 4); ctx.stroke(); }
            ctx.strokeStyle = "rgba(90,116,145,0.55)"; ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(s * 10, -3); ctx.lineTo(bx + (s > 0 ? 0 : 26), -3); ctx.stroke();
        });
        ctx.beginPath(); ctx.arc(0, 0, 3.4, 0, Math.PI * 2); ctx.fillStyle = "#e2a13a"; ctx.fill();
        ctx.restore();
        // вектор скорости — по касательной к эллипсу
        const tvx = -Math.sin(a) * RX, tvy = Math.cos(a) * RY;
        const tlen = Math.hypot(tvx, tvy) || 1;
        const vx = tvx / tlen, vy = tvy / tlen;
        arrow(ctx, sx + vx * 30, sy + vy * 30, sx + vx * 74, sy + vy * 74, "#2f9e6a", 2.6);
        // подпись скорости — у самого острия, чтобы не ложилась на панели спутника
        {
            const lbl = `${fmt2(p.v)} км/с`;
            ctx.font = "700 10px system-ui, 'Segoe UI', Arial, sans-serif";
            const lw = ctx.measureText(lbl).width;
            pillText(ctx, lbl, sx + vx * 82 - lw / 2 - 6, sy + vy * 82 + 4, { size: 10, color: "#2f9e6a" });
        }
        // радиус-вектор до спутника
        ctx.strokeStyle = "rgba(47,125,184,0.45)"; ctx.lineWidth = 1.2; ctx.setLineDash([3, 4]);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(sx, sy); ctx.stroke(); ctx.setLineDash([]);
        handle(ctx, sx, sy, "", { kind: "drag", key: "h", axis: "y", x: sx, y: sy, from: cy + RY, to: cy - 60, min: 400, max: 6400 });
        dragChip(ctx, 20, 22, tr3("тяни спутник — высота орбиты", "серікті тарт — орбита биіктігі", "drag the satellite"));
        text(ctx, tr3("скорость спутника", "серік жылдамдығы", "satellite speed"), 636, 196, { size: 10, align: "center", color: C.ink2, weight: 700 });
        handle(ctx, 636, 216, "v", { kind: "drag", key: "v", axis: "x", x: 636, y: 216, from: 540, to: 720, min: 5, max: 10.5 });
        // правая панель
        const px = 520, py = 26;
        shadowed(ctx, 14, "rgba(40,70,110,0.22)", 6, () => fillRR(ctx, px, py, 218, 104, 14, "rgba(255,255,255,0.94)"));
        strokeRR(ctx, px, py, 218, 104, 14, "rgba(120,150,180,0.35)", 1);
        text(ctx, tr3("Орбита «Беркута»", "«Бүркіт» орбитасы", "Berkut orbit"), px + 14, py + 22, { size: 11, weight: 800, color: C.ink2 });
        const rows = [
            [tr3("высота", "биіктік", "altitude"), `${p.h} км`],
            [tr3("круговая", "шеңберлік", "circular"), `${fmt2(calc.vCirc)} км/с`],
            [tr3("вторая косм.", "екінші ғарыш.", "escape"), `${fmt2(calc.vEsc)} км/с`]
        ];
        rows.forEach((r, i) => {
            text(ctx, r[0], px + 14, py + 46 + i * 20, { size: 10.5, color: C.soft });
            text(ctx, r[1], px + 204, py + 46 + i * 20, { size: 11, color: C.ink, align: "right", weight: 800 });
        });
        const ok = calc.regime && calc.regime !== "suborbital";
        pillText(ctx, ok ? tr3("● стабильная орбита", "● тұрақты орбита", "● stable orbit") : tr3("● падение на Землю", "● Жерге құлау", "● falling to Earth"),
            px + 12, py + 122, { size: 10.5, color: ok ? "#227a4d" : "#b4392f", bg: "rgba(255,255,255,0.95)" });
    };

    SCENES.g9_collision = (ctx, w, h, p, calc, t) => {
        spaceBackdrop(ctx, w, h, t);
        const axisY = h * 0.56;
        // стыковочная ось
        ctx.strokeStyle = "rgba(47,125,184,0.4)"; ctx.lineWidth = 1.4; ctx.setLineDash([8, 6]);
        ctx.beginPath(); ctx.moveTo(40, axisY); ctx.lineTo(w - 40, axisY); ctx.stroke(); ctx.setLineDash([]);
        const drawCraft = (x, R, col, dir, label, mass) => {
            ctx.save();
            ctx.translate(x, axisY);
            shadowed(ctx, 12, "rgba(30,60,100,0.32)", 5, () => {
                ctx.beginPath(); ctx.ellipse(0, 0, R, R * 0.6, 0, 0, Math.PI * 2);
                ctx.fillStyle = lin(ctx, -R, -R * 0.6, R, R * 0.6, [[0, "#ffffff"], [0.6, col[0]], [1, col[1]]]);
                ctx.fill();
            });
            ctx.beginPath(); ctx.arc(-dir * R * 0.25, -R * 0.06, R * 0.2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(60,180,220,0.85)"; ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,0.8)"; ctx.lineWidth = 1.2; ctx.stroke();
            fillRR(ctx, dir > 0 ? R * 0.7 : -R * 0.7 - 10, -R * 0.3, 10, R * 0.6, 2, "#c9d5e2");
            ctx.restore();
            pillText(ctx, `${label} · ${mass} кг`, x - 36, axisY + R * 0.9 + 16, { size: 10, color: C.ink2 });
        };
        drawCraft(w * 0.3, 24 + p.m1 * 2.2, ["#cfe3ff", "#7ba7d6"], 1, "A", p.m1);
        drawCraft(w * 0.68, 24 + p.m2 * 2.2, ["#ffe4c4", "#d9a05b"], -1, "B", p.m2);
        arrow(ctx, w * 0.3 + 34, axisY - 44, w * 0.3 + 34 + p.v1 * 7, axisY - 44, "#2f7db8", 3, `v₁ = ${p.v1} м/с`);
        arrow(ctx, w * 0.68 - 34, axisY - 44, w * 0.68 - 34 + p.v2 * 7, axisY - 44, "#c9742f", 3, `v₂ = ${p.v2} м/с`);
        // ручки скорости — под подписью массы, чтобы не перекрывать «A · 4 кг»
        const R1 = 24 + p.m1 * 2.2, R2 = 24 + p.m2 * 2.2;
        const hy = (R) => axisY + R * 0.9 + 54;
        handle(ctx, w * 0.3 - 12, hy(R1), "v₁", { kind: "drag", key: "v1", axis: "x", x: w * 0.3 - 12, y: hy(R1), from: w * 0.3 - 12, to: w * 0.3 + 78, min: 2, max: 10 });
        handle(ctx, w * 0.68 - 12, hy(R2), "v₂", { kind: "drag", key: "v2", axis: "x", x: w * 0.68 - 12, y: hy(R2), from: w * 0.68 - 12, to: w * 0.68 - 102, min: -4, max: 2 });
        handle(ctx, w * 0.3 - 30, axisY - 30, "m₁", { kind: "drag", key: "m1", axis: "y", x: w * 0.3 - 30, y: axisY - 30, from: axisY, to: axisY - 80, min: 1, max: 8 });
        handle(ctx, w * 0.68 + 34, axisY - 30, "m₂", { kind: "drag", key: "m2", axis: "y", x: w * 0.68 + 34, y: axisY - 30, from: axisY, to: axisY - 80, min: 1, max: 8 });
        // режим
        [["inelastic", "неупругий", "inel", "inelastic"], ["elastic", "упругий", "серп", "elastic"]].forEach((md, i) => {
            const x = 24 + i * 128, y = 24;
            const on = p.mode === md[0];
            fillRR(ctx, x, y, 120, 22, 11, on ? "rgba(47,125,184,0.2)" : "rgba(255,255,255,0.88)");
            strokeRR(ctx, x, y, 120, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(md[1], md[2], md[3]), x + 60, y + 15, { size: 10.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "mode", value: md[0], x: x + 60, y: y + 11, r: 28 });
        });
        pillText(ctx, `p = ${fmt2(calc.Ptot)} кг·м/с`, 24, 68, { size: 11, color: "#1f6f9c" });
        pillText(ctx, `u = ${fmt2(calc.u)} м/с`, 24, 92, { size: 11, color: "#2b7f52" });
    };

    SCENES.g9_oscillator = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.88 });
        const pivotX = 210, pivotY = 34;
        const Lp = map(p.l, 0.2, 2, 60, 150);
        // штатив
        steelBar(ctx, pivotX - 46, pivotY, 92, 8, 4);
        steelBar(ctx, pivotX - 44, pivotY, 8, h * 0.88 - pivotY, 4);
        fillRR(ctx, pivotX - 66, h * 0.88 - 10, 108, 12, 6, lin(ctx, 0, h * 0.88 - 10, 0, h * 0.88 + 2, [[0, "#dfe7ef"], [1, "#96a5b5"]]));
        hit({ kind: "drag", key: "l", axis: "y", x: pivotX - 60, y: pivotY + 12, from: 24, to: 120, min: 0.2, max: 2 });
        handle(ctx, pivotX - 62, pivotY + 14, "L", { kind: "drag", key: "l", axis: "y", x: pivotX - 62, y: pivotY + 14, from: 24, to: 120, min: 0.2, max: 2 });
        // шкала-транспортир
        ctx.strokeStyle = "rgba(120,146,172,0.5)"; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(pivotX, pivotY, Lp * 0.9, Math.PI * 0.12, Math.PI * 0.88); ctx.stroke();
        for (let dgr = 15; dgr <= 165; dgr += 15) {
            const ang = dgr * Math.PI / 180;
            const r1 = Lp * 0.9, r2 = Lp * (dgr % 45 === 0 ? 0.82 : 0.86);
            ctx.beginPath();
            ctx.moveTo(pivotX + Math.cos(ang) * r1, pivotY + Math.sin(ang) * r1);
            ctx.lineTo(pivotX + Math.cos(ang) * r2, pivotY + Math.sin(ang) * r2);
            ctx.stroke();
        }
        const amp = p.amp * Math.PI / 180;
        const phase = Math.sin(t * 0.06 * (calc.nu || 1)) * amp;
        const bobX = pivotX + Math.sin(phase) * Lp, bobY = pivotY + Math.cos(phase) * Lp;
        ctx.strokeStyle = "#6d7d8e"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(pivotX, pivotY); ctx.lineTo(bobX, bobY); ctx.stroke();
        shadowed(ctx, 14, "rgba(40,60,80,0.32)", 6, () => {
            ctx.beginPath(); ctx.arc(bobX, bobY, 15, 0, Math.PI * 2);
            ctx.fillStyle = rad(ctx, bobX - 5, bobY - 6, 1, 17, [[0, "#ffe9a8"], [0.55, "#d9a94a"], [1, "#9a6f1f"]]);
            ctx.fill();
        });
        ctx.beginPath(); ctx.arc(bobX - 4, bobY - 5, 4, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fill();
        handle(ctx, bobX + 24, bobY, "A", { kind: "drag", key: "amp", axis: "x", x: bobX + 24, y: bobY, from: pivotX, to: pivotX + Lp * 0.7, min: 0, max: 30 });
        // осциллограф
        const ox = 430, oy = 28, ow = 300, oh = 168;
        shadowed(ctx, 16, "rgba(40,60,90,0.22)", 8, () => fillRR(ctx, ox, oy, ow, oh, 14, "rgba(255,255,255,0.96)"));
        strokeRR(ctx, ox, oy, ow, oh, 14, "rgba(120,150,180,0.36)", 1);
        text(ctx, "T = " + fmt2(calc.T) + " s", ox + 16, oy + 22, { size: 12, weight: 800, color: C.ink2 });
        text(ctx, "ν = " + fmt2(calc.nu) + " Hz", ox + ow - 16, oy + 22, { size: 11, weight: 700, color: C.soft, align: "right" });
        const gx = ox + 22, gy = oy + 40, gw = ow - 44, gh = oh - 66;
        ctx.strokeStyle = "rgba(120,150,180,0.28)"; ctx.lineWidth = 1;
        for (let i = 0; i <= 6; i++) {
            const x = lerp(gx, gx + gw, i / 6);
            ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x, gy + gh); ctx.stroke();
        }
        for (let i = 0; i <= 4; i++) {
            const y = lerp(gy, gy + gh, i / 4);
            ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx + gw, y); ctx.stroke();
        }
        ctx.strokeStyle = "#2ea36a"; ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i <= 120; i++) {
            const u = i / 120;
            const x = gx + gw * u;
            const y = gy + gh / 2 - Math.sin(u * Math.PI * 6 + t * 0.06) * gh * 0.32;
            i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
        // гравитация
        [["9.8", "Земля", "Жер", "Earth"], ["1.6", "Луна", "Ай", "Moon"]].forEach((gr, i) => {
            const x = 430 + i * 112, y = oy + oh + 12;
            const on = String(p.g) === gr[0];
            fillRR(ctx, x, y, 104, 22, 11, on ? "rgba(47,125,184,0.2)" : "rgba(255,255,255,0.9)");
            strokeRR(ctx, x, y, 104, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(gr[1], gr[2], gr[3]), x + 52, y + 15, { size: 10.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "g", value: gr[0], x: x + 52, y: y + 11, r: 24 });
        });
    };

    SCENES.g9_waves = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.9 });
        // волновой лоток
        const tx = 50, ty = 24, tw = 470, th = 196;
        shadowed(ctx, 16, "rgba(40,60,90,0.24)", 8, () => fillRR(ctx, tx, ty, tw, th, 14, "#e8f1f8"));
        ctx.save(); rr(ctx, tx, ty, tw, th, 14); ctx.clip();
        ctx.fillStyle = lin(ctx, 0, ty, 0, ty + th, [[0, "rgba(190,228,248,0.85)"], [1, "rgba(120,190,230,0.9)"]]);
        ctx.fillRect(tx, ty, tw, th);
        // источник
        const srcX = tx + 40, srcY = ty + th / 2;
        const lam = map(calc.lam, 1, 20, 12, 34);
        for (let k = 0; k < 9; k++) {
            const r = ((t * 1.4 + k * lam) % (tw * 0.9));
            ctx.strokeStyle = `rgba(255,255,255,${0.5 * (1 - r / (tw * 0.9))})`;
            ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.arc(srcX + p.vs * 1.2, srcY, r, 0, Math.PI * 2); ctx.stroke();
        }
        // приёмник
        const recX = tx + tw - 56;
        fillRR(ctx, recX - 12, srcY - 22, 24, 44, 6, lin(ctx, 0, srcY - 22, 0, srcY + 22, [[0, "#e9eff6"], [1, "#9aa9ba"]]));
        text(ctx, "R", recX, srcY + 4, { size: 11, color: "#fff", align: "center", weight: 900 });
        // диполь источника
        ctx.beginPath(); ctx.arc(srcX + p.vs * 1.2, srcY, 9, 0, Math.PI * 2);
        ctx.fillStyle = lin(ctx, srcX - 9, srcY - 9, srcX + 9, srcY + 9, [[0, "#ffd479"], [1, "#c9742f"]]); ctx.fill();
        ctx.strokeStyle = "rgba(160,100,20,0.6)"; ctx.lineWidth = 1.4; ctx.stroke();
        ctx.restore();
        strokeRR(ctx, tx, ty, tw, th, 14, "rgba(110,145,180,0.6)", 2);
        // стрелка движения источника
        arrow(ctx, srcX + p.vs * 1.2, ty - 6, srcX + p.vs * 1.2 + p.vs * 3 + 12, ty - 6, "#cf4a4a", 2.4, `${p.vs} м/с`);
        // ручку ставим на сам излучатель; подпись — над ним, чтобы не закрывать диполь
        const sxh = srcX + p.vs * 1.2;
        handle(ctx, sxh, srcY, "", { kind: "drag", key: "vs", axis: "x", x: sxh, y: srcY, from: tx + 30, to: tx + 250, min: 0, max: 20 });
        text(ctx, tr3("источник", "көз", "source"), sxh, srcY - 22, { size: 9.5, align: "center", color: "#2f7db8", weight: 800 });
        // панель
        const px = 540, py = 28;
        shadowed(ctx, 14, "rgba(40,60,90,0.22)", 6, () => fillRR(ctx, px, py, 196, 178, 14, "rgba(255,255,255,0.96)"));
        strokeRR(ctx, px, py, 196, 178, 14, "rgba(120,150,180,0.36)", 1);
        text(ctx, tr3("Параметры волны", "Толқын параметрлері", "Wave parameters"), px + 14, py + 22, { size: 11, weight: 800, color: C.ink2 });
        const rows = [
            ["λ", `${fmt2(calc.lam)} м`],
            [tr3("ν приёмника", "қабылдағыш ν", "receiver ν"), `${fmt2(calc.nuFront)} Гц`],
            ["v", `${p.v} м/с`]
        ];
        rows.forEach((r, i) => {
            text(ctx, r[0], px + 14, py + 52 + i * 22, { size: 11, color: C.soft, weight: 700 });
            text(ctx, r[1], px + 182, py + 52 + i * 22, { size: 11.5, color: C.ink, align: "right", weight: 800 });
        });
        brassKnob(ctx, px + 40, py + 140, 14, -Math.PI / 2 + map(p.nu, 5, 25, 0, Math.PI * 1.5));
        text(ctx, tr3("частота", "жиілік", "frequency"), px + 62, py + 144, { size: 10.5, color: C.ink2, weight: 700 });
        handle(ctx, px + 148, py + 128, "v", { kind: "drag", key: "v", axis: "y", x: px + 148, y: py + 128, from: py + 160, to: py + 96, min: 30, max: 100, r: 20 });
        hit({ kind: "drag", key: "nu", axis: "y", x: px + 40, y: py + 140, from: py + 160, to: py + 110, min: 5, max: 25, r: 22 });
        dragChip(ctx, tx + 8, ty + th + 6, tr3("тяни источник — эффект Доплера", "көзді жылжыт — Доплер", "drag the source — Doppler"));
    };

    SCENES.g9_quantum = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.86 });
        const base = h * 0.86;
        const nm = p.wavelength;
        const hue = map(nm, 700, 400, 0, 285);
        const beamCol = nm > 620 ? "#e2573a" : nm > 570 ? "#e8c341" : nm > 490 ? "#3ea86b" : nm > 450 ? "#3a7fd0" : "#7a4fd0";
        // лампа
        const lx = 96;
        contactShadow(ctx, lx + 12, base - 4, 42, 8, 0.24);
        fillRR(ctx, lx - 24, base - 26, 74, 24, 8, lin(ctx, 0, base - 26, 0, base - 2, [[0, "#e9eff6"], [1, "#a9b7c6"]]));
        shadowed(ctx, 12, "rgba(40,60,90,0.26)", 5, () => {
            ctx.beginPath(); ctx.arc(lx + 14, base - 62, 26, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(245,250,255,0.92)"; ctx.fill();
        });
        ctx.strokeStyle = "rgba(120,146,172,0.7)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.arc(lx + 14, base - 62, 26, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = rad(ctx, lx + 14, base - 62, 2, 24, [[0, beamCol], [1, "rgba(255,255,255,0)"]]);
        ctx.beginPath(); ctx.arc(lx + 14, base - 62, 22, 0, Math.PI * 2); ctx.fill();
        // луч
        const grad = ctx.createLinearGradient(lx + 40, base - 62, 360, base - 62);
        grad.addColorStop(0, beamCol);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad; ctx.lineWidth = 9; ctx.lineCap = "round";
        ctx.globalAlpha = 0.55;
        ctx.beginPath(); ctx.moveTo(lx + 38, base - 62); ctx.lineTo(360, base - 62); ctx.stroke();
        ctx.globalAlpha = 1;
        // вакуумная трубка
        const tx = 300, ty = base - 116, tw = 210, th = 92;
        ctx.save(); rr(ctx, tx, ty, tw, th, 14); ctx.clip();
        ctx.fillStyle = "rgba(236,246,255,0.7)"; ctx.fillRect(tx, ty, tw, th);
        // катод
        const catX = tx + 36;
        const metalCol = { "1.9": "#e8c96a", "2.3": "#cfd8e0", "4.3": "#b6a58f" }[String(p.work)] || "#cfd8e0";
        fillRR(ctx, catX - 6, ty + 22, 12, th - 44, 4, metalCol);
        text(ctx, "K", catX, ty + th - 10, { size: 9.5, align: "center", color: C.soft, weight: 800 });
        fillRR(ctx, tx + tw - 40, ty + 22, 12, th - 44, 4, "#aab8c6");
        text(ctx, "A", tx + tw - 34, ty + th - 10, { size: 9.5, align: "center", color: C.soft, weight: 800 });
        if (calc.active) {
            for (let i = 0; i < 7; i++) {
                const ph = (t * 0.02 + i * 0.15) % 1;
                const ex = lerp(catX + 12, tx + tw - 42, ph);
                const ey = ty + 34 + (i % 3) * 18 + Math.sin(ph * 6 + i) * 4;
                ctx.fillStyle = `rgba(60,120,200,${0.85 - ph * 0.5})`;
                ctx.beginPath(); ctx.arc(ex, ey, 2.8, 0, Math.PI * 2); ctx.fill();
            }
        }
        ctx.restore();
        strokeRR(ctx, tx, ty, tw, th, 14, "rgba(120,150,180,0.6)", 2);
        // гальванометр
        gauge(ctx, 610, base - 74, 30, calc.active ? clamp(calc.Ek / 3, 0, 1) : 0, "µA", "");
        // ручки
        hit({ kind: "drag", key: "wavelength", axis: "x", x: lx + 14, y: base - 62, from: 40, to: 150, min: 240, max: 700, r: 34 });
        handle(ctx, 190, base - 130, "λ", { kind: "drag", key: "wavelength", axis: "x", x: 150, y: base - 130, from: 150, to: 330, min: 700, max: 240, r: 18 });
        pillText(ctx, `${nm} нм`, 150, base - 106, { size: 10.5, color: beamCol === "#e2573a" ? "#b4392f" : "#1f6f9c" });
        // металлы
        [["1.9", "Cs", "1,9 эВ"], ["2.3", "Na", "2,3 эВ"], ["4.3", "Cu", "4,3 эВ"]].forEach((mt, i) => {
            const x = 300 + i * 74, y = 26;
            const on = String(p.work) === mt[0];
            fillRR(ctx, x, y, 66, 22, 11, on ? "rgba(47,125,184,0.2)" : "rgba(255,255,255,0.9)");
            strokeRR(ctx, x, y, 66, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, `${mt[1]} ${mt[2]}`, x + 33, y + 15, { size: 9.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "work", value: mt[0], x: x + 33, y: y + 11, r: 24 });
        });
        pillText(ctx, `E_ф = ${fmt2(calc.Eph)} эВ`, 24, 40, { size: 11, color: "#1f6f9c" });
        pillText(ctx, calc.active ? `E_к = ${fmt2(calc.Ek)} эВ` : tr3("фотоэффекта нет", "фотоэффект жоқ", "no photocurrent"), 24, 66, { size: 11, color: calc.active ? "#227a4d" : "#b4392f" });
    };

    SCENES.g9_coulomb = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.84 });
        const base = h * 0.84;
        const cx = 380, cy = base - 60;
        const sepPx = map(p.r, 0.05, 0.5, 44, 210);
        const r1 = 10 + p.q1 * 1.8, r2 = 10 + p.q2 * 1.8;
        // силовые линии
        for (let i = 0; i < 5; i++) {
            const off = (i - 2) * 18;
            ctx.strokeStyle = "rgba(47,125,184,0.28)"; ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(cx - sepPx + r1, cy + off * 0.4);
            ctx.bezierCurveTo(cx - sepPx * 0.35, cy + off, cx + sepPx * 0.35, cy + off, cx + sepPx - r2, cy + off * 0.4);
            ctx.stroke();
        }
        // стойки
        const standX = [cx - sepPx, cx + sepPx];
        standX.forEach((x, i) => {
            contactShadow(ctx, x, base - 2, 30, 7, 0.2);
            fillRR(ctx, x - 3, cy + 26, 6, base - cy - 28, 3, lin(ctx, 0, cy + 26, 0, base - 4, [[0, "#dfe7ef"], [1, "#9aa9ba"]]));
            fillRR(ctx, x - 22, base - 12, 44, 10, 5, lin(ctx, 0, base - 12, 0, base - 2, [[0, "#e9eff6"], [1, "#a9b7c6"]]));
        });
        // сферы
        const drawSphere = (x, r, charge, col) => {
            ctx.save();
            ctx.beginPath(); ctx.arc(x, cy, r, 0, Math.PI * 2);
            const g = ctx.createRadialGradient(x - r * 0.4, cy - r * 0.45, r * 0.1, x, cy, r * 1.15);
            g.addColorStop(0, "#ffffff");
            g.addColorStop(0.45, col[0]);
            g.addColorStop(1, col[1]);
            ctx.fillStyle = g;
            ctx.shadowColor = "rgba(40,60,90,0.35)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 5;
            ctx.fill();
            ctx.restore();
            ctx.beginPath(); ctx.arc(x, cy, r * 0.96, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255,255,255,0.55)"; ctx.lineWidth = 2; ctx.stroke();
            text(ctx, charge > 0 ? "+" : "−", x, cy + r * 0.34, { size: r * 0.9, align: "center", color: "rgba(255,255,255,0.95)", weight: 900 });
            pillText(ctx, `${charge} мкКл`, x - 22, cy + r + 20, { size: 10, color: C.ink2 });
        };
        drawSphere(cx - sepPx, r1, p.q1, ["#f7b9c0", "#c23a52"]);
        drawSphere(cx + sepPx, r2, p.q2, ["#b9d8f7", "#2f6fb0"]);
        // силы наружу
        arrow(ctx, cx - sepPx - r1 - 4, cy, cx - sepPx - r1 - 52, cy, "#c9742f", 3, "F");
        arrow(ctx, cx + sepPx + r2 + 4, cy, cx + sepPx + r2 + 52, cy, "#c9742f", 3, "F");
        // расстояние
        ctx.strokeStyle = "rgba(47,125,184,0.55)"; ctx.lineWidth = 1.4; ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(cx - sepPx, base - 26); ctx.lineTo(cx + sepPx, base - 26); ctx.stroke(); ctx.setLineDash([]);
        pillText(ctx, `r = ${fmt2(p.r)} м`, cx - 32, base - 8, { size: 10.5, color: "#1f6f9c" });
        // ручки
        hit({ kind: "drag", key: "r", axis: "x", x: cx + sepPx, y: cy, from: cx + 44, to: cx + 220, min: 0.05, max: 0.5, r: 26 });
        handle(ctx, cx + sepPx + 26, cy - 34, "r", { kind: "drag", key: "r", axis: "x", x: cx + sepPx + 26, y: cy - 34, from: cx + 44, to: cx + 220, min: 0.05, max: 0.5 });
        handle(ctx, cx - sepPx, cy - r1 - 26, "q₁", { kind: "drag", key: "q1", axis: "y", x: cx - sepPx, y: cy - r1 - 26, from: cy - 20, to: cy - 96, min: 1, max: 10 });
        handle(ctx, cx + sepPx, cy - r2 - 26, "q₂", { kind: "drag", key: "q2", axis: "y", x: cx + sepPx, y: cy - r2 - 26, from: cy - 20, to: cy - 96, min: 1, max: 10 });
        dragChip(ctx, 24, 26, tr3("раздвигай заряды мышью", "зарядтарды жылжыт", "drag the charges"));
        pillText(ctx, `F = ${fmt2(calc.F)} Н`, 24, 52, { size: 12, color: calc.pass ? "#227a4d" : "#b4632a" });
        // формула
        text(ctx, "F = k · q₁q₂ / r²", w - 24, 32, { size: 12, align: "right", color: C.ink2, weight: 700 });
    };

    SCENES.g9_decay = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.86 });
        const base = h * 0.86;
        // камера
        const bx = 60, by = 44, bw = 380, bh = 156;
        shadowed(ctx, 16, "rgba(40,60,90,0.24)", 8, () => fillRR(ctx, bx, by, bw, bh, 14, "rgba(250,253,255,0.96)"));
        strokeRR(ctx, bx, by, bw, bh, 14, "rgba(110,140,170,0.5)", 1.6);
        text(ctx, tr3("Образец", "Үлгі", "Sample"), bx + 14, by + 20, { size: 10.5, weight: 800, color: C.soft });
        const cols = 14, rows = 7;
        const alive = Math.round(cols * rows * clamp(calc.frac, 0, 1));
        const cellW = (bw - 40) / cols, cellH = (bh - 52) / rows;
        for (let i = 0; i < cols * rows; i++) {
            const x = bx + 20 + (i % cols) * cellW + cellW / 2;
            const y = by + 38 + Math.floor(i / cols) * cellH;
            const on = i < alive;
            if (on) {
                const pulse = 0.65 + Math.abs(Math.sin(t * 0.03 + i)) * 0.35;
                ctx.fillStyle = `rgba(46,163,106,${pulse})`;
                ctx.shadowColor = "rgba(46,163,106,0.8)"; ctx.shadowBlur = 7;
            } else {
                ctx.fillStyle = "rgba(150,170,190,0.35)";
                ctx.shadowBlur = 0;
            }
            ctx.beginPath(); ctx.arc(x, y, 3.4, 0, Math.PI * 2); ctx.fill();
        }
        ctx.shadowBlur = 0;
        // шкала
        const barY = by + bh + 12;
        fillRR(ctx, bx + 16, barY, bw - 32, 12, 6, "rgba(150,170,190,0.25)");
        const frac = clamp(calc.frac, 0, 1);
        fillRR(ctx, bx + 16, barY, (bw - 32) * frac, 12, 6, calc.pass ? "#2ea36a" : "#d9a94a");
        text(ctx, "10%", bx + 16 + (bw - 32) * 0.1, barY + 26, { size: 8.5, color: C.soft, align: "center" });
        text(ctx, "25%", bx + 16 + (bw - 32) * 0.25, barY + 26, { size: 8.5, color: C.soft, align: "center" });
        // счётчик Гейгера
        const gx = 486;
        shadowed(ctx, 12, "rgba(40,60,90,0.24)", 6, () => fillRR(ctx, gx, 44, 122, 96, 12, lin(ctx, 0, 44, 0, 140, [[0, "#f7fafc"], [1, "#dbe4ee"]])));
        strokeRR(ctx, gx, 44, 122, 96, 12, "rgba(110,140,170,0.45)", 1.2);
        fillRR(ctx, gx + 14, 58, 94, 34, 6, "#20303f");
        text(ctx, String(Math.round(calc.N)), gx + 61, 82, { size: 17, color: "#7dffb4", align: "center", weight: 900, family: "ui-monospace, monospace" });
        text(ctx, "имп/с", gx + 61, 106, { size: 9, color: "#8fb4c9", align: "center" });
        // ручки
        brassKnob(ctx, gx + 30, 128, 11, -Math.PI / 2 + map(p.T, 2, 20, 0, Math.PI * 1.5));
        text(ctx, "T½", gx + 50, 132, { size: 10.5, color: C.ink2, weight: 800 });
        hit({ kind: "drag", key: "T", axis: "y", x: gx + 30, y: 128, from: 140, to: 104, min: 2, max: 20, r: 20 });
        // таймлайн
        const tlX = gx, tlY = 168, tlW = 210;
        fillRR(ctx, tlX, tlY, tlW, 10, 5, "rgba(150,170,190,0.3)");
        const tx = map(p.t, 2, 40, tlX, tlX + tlW);
        fillRR(ctx, tlX, tlY, tx - tlX, 10, 5, "#2f7db8");
        ctx.beginPath(); ctx.arc(tx, tlY + 5, 8, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
        ctx.strokeStyle = "#2f7db8"; ctx.lineWidth = 2.4; ctx.stroke();
        hit({ kind: "drag", key: "t", axis: "x", x: tx, y: tlY + 5, from: tlX, to: tlX + tlW, min: 2, max: 40, r: 20 });
        text(ctx, `${p.t} сут`, tx, tlY + 30, { size: 10, color: C.ink2, align: "center", weight: 700 });
        pillText(ctx, `N = ${Math.round(calc.N)} / ${p.N0}`, 486, 240, { size: 11, color: "#1f6f9c" });
        handle(ctx, 640, 74, "N₀", { kind: "drag", key: "N0", axis: "y", x: 640, y: 74, from: 130, to: 56, min: 1000, max: 10000 });
    };

    SCENES.g9_induction = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.86 });
        const base = h * 0.86;
        const coilX = 380;
        const turns = Math.round(map(p.N, 10, 100, 3, 9));
        // рейка
        fillRR(ctx, 60, base - 24, 420, 10, 5, lin(ctx, 0, base - 24, 0, base - 14, [[0, "#dfe7ef"], [1, "#a7b6c6"]]));
        // катушка
        contactShadow(ctx, coilX, base - 12, 44, 6, 0.2);
        for (let i = 0; i < turns; i++) {
            ctx.strokeStyle = i % 2 ? "#c07a3a" : "#d9974f";
            ctx.lineWidth = 5.5;
            ctx.beginPath();
            ctx.ellipse(coilX, base - 44 - i * 5.2, 26, 8, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
        // магнит
        const cycle = (Math.sin(t * 0.02 * clamp(1 / p.dt, 1, 10)) + 1) / 2;
        const mx = lerp(coilX - 250, coilX - 50, cycle);
        const glowK = clamp(calc.emf / 30, 0, 1);
        lampGlow(ctx, coilX, base - 66, 30, glowK);
        shadowed(ctx, 12, "rgba(40,60,90,0.3)", 5, () => {
            fillRR(ctx, mx - 30, base - 54, 24, 20, 4, lin(ctx, 0, base - 54, 0, base - 34, [[0, "#e2626a"], [1, "#a5293a"]]));
            fillRR(ctx, mx - 6, base - 54, 24, 20, 4, lin(ctx, 0, base - 54, 0, base - 34, [[0, "#6a9fe0"], [1, "#22497f"]]));
        });
        text(ctx, "N", mx - 18, base - 41, { size: 9.5, color: "#fff", align: "center", weight: 900 });
        text(ctx, "S", mx + 6, base - 41, { size: 9.5, color: "#fff", align: "center", weight: 900 });
        // линии поля
        for (let i = 0; i < 4; i++) {
            const y = base - 50 + i * 5;
            ctx.strokeStyle = "rgba(47,125,184,0.3)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(mx + 18, y); ctx.bezierCurveTo(mx + 90, y - 12, coilX - 60, y + 12, coilX - 26, y); ctx.stroke();
        }
        // провода + гальванометр
        wire(ctx, [[coilX - 26, base - 44], [coilX - 70, base - 44], [coilX - 70, base - 12], [600, base - 12], [600, base - 60]], "#b1442f", 2.6);
        wire(ctx, [[coilX + 26, base - 34], [coilX + 60, base - 34], [coilX + 60, base - 6], [634, base - 6], [634, base - 60]], "#2f6fb0", 2.6);
        gauge(ctx, 616, base - 92, 34, clamp(calc.emf / 34, 0, 1), "V", "");
        // ручки
        hit({ kind: "drag", key: "dt", axis: "x", x: mx, y: base - 44, from: 120, to: 330, min: 1, max: 0.1, r: 26 });
        dragChip(ctx, 60, base - 74, tr3("двигай магнит — скорость изменения", "магнитті жылжыт", "move the magnet"));
        handle(ctx, coilX + 42, base - 92, "N", { kind: "drag", key: "N", axis: "y", x: coilX + 42, y: base - 92, from: base - 60, to: base - 150, min: 10, max: 100 });
        handle(ctx, 640, 60, "B", { kind: "drag", key: "B", axis: "y", x: 640, y: 60, from: 110, to: 40, min: 0.1, max: 1.2 });
        handle(ctx, 690, 60, "S", { kind: "drag", key: "S", axis: "y", x: 690, y: 60, from: 110, to: 40, min: 10, max: 100 });
        pillText(ctx, `ε = ${fmt2(calc.emf)} В`, 60, 34, { size: 12, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    /* ======================= ВЗАИМОДЕЙСТВИЕ ======================= */
    function currentLang() {
        try { if (window.I18n && I18n.currentLang) return I18n.currentLang; } catch (e) {}
        try { const l = localStorage.getItem("pq_lang"); if (l) return l; } catch (e) {}
        return "ru";
    }
    function tr3(ru, kk, en) {
        const l = currentLang();
        return l === "kk" ? kk : l === "en" ? en : ru;
    }
    function fmt2(v) {
        if (!isFinite(v)) return "—";
        const abs = Math.abs(v);
        const d = abs >= 1000 ? 0 : abs >= 100 ? 1 : abs >= 10 ? 2 : abs >= 1 ? 2 : 3;
        return String(Number(Number(v).toFixed(d))).replace(".", ",");
    }

    function setParam(key, value) {
        const S = window.Simulators89;
        if (!S || !S.params || !S.activeLab) return;
        const ctrl = (S.activeLab.controls || []).find((c) => c.id === key);
        if (ctrl && ctrl.type !== "select" && typeof value === "number") {
            const step = Number(ctrl.step) || 1;
            value = clamp(Math.round(value / step) * step, ctrl.min, ctrl.max);
            const dec = (String(step).split(".")[1] || "").length;
            value = Number(value.toFixed(dec + 1));
        }
        S.params[key] = value;
        const input = document.querySelector('#pq-sim89-modal [data-ctrl="' + key + '"]');
        if (input) {
            input.value = value;
            try { input.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
        }
        if (typeof S.updateTelemetry === "function") {
            try { S.updateTelemetry(); } catch (e) {}
        }
        try { if (window.PQSound && PQSound.play) PQSound.play("hover"); } catch (e) {}
    }

    function valueFor(h, x, y) {
        if (h.kind === "angle") {
            let deg = -Math.atan2(y - h.cy, x - h.cx) * 180 / Math.PI;
            deg = ((deg % 360) + 360) % 360;
            if (deg > 180) deg -= 360;
            return clamp(deg, h.min, h.max);
        }
        if (h.axis === "y") return map(y, h.from, h.to, h.min, h.max);
        return map(x, h.from, h.to, h.min, h.max);
    }

    function pickHit(x, y) {
        let best = null;
        for (let i = 0; i < HITS.length; i++) {
            const h = HITS[i];
            const d = Math.hypot(x - h.x, y - h.y);
            const r = h.r || 20;
            if (d <= r && (!best || d < best.d)) best = { h: h, d: d };
        }
        return best ? best.h : null;
    }

    function bindCanvas(canvas) {
        if (!canvas || !canvas.addEventListener || !canvas.style || canvas.__pqLightBound) return;
        canvas.__pqLightBound = true;
        canvas.style.touchAction = "none";
        canvas.style.cursor = "grab";
        const pos = (e) => {
            const r = canvas.getBoundingClientRect();
            return { x: (e.clientX - r.left) * (LW / (r.width || LW)), y: (e.clientY - r.top) * (LH / (r.height || LH)) };
        };
        let active = null;
        const onDown = (e) => {
            const pt = pos(e);
            const h = pickHit(pt.x, pt.y);
            if (!h) return;
            e.preventDefault();
            if (canvas.setPointerCapture) { try { canvas.setPointerCapture(e.pointerId); } catch (err) {} }
            canvas.style.cursor = "grabbing";
            if (h.kind === "drag") { active = h; setParam(h.key, valueFor(h, pt.x, pt.y)); }
            else if (h.kind === "tap") setParam(h.key, h.value);
            else if (h.kind === "click" && h.action === "toggle-mode") {
                const S = window.Simulators89;
                if (S && S.params) setParam("mode", S.params.mode === "series" ? "parallel" : "series");
            }
        };
        const onMove = (e) => {
            const pt = pos(e);
            if (!active) {
                canvas.style.cursor = pickHit(pt.x, pt.y) ? "grab" : "default";
                return;
            }
            e.preventDefault();
            setParam(active.key, valueFor(active, pt.x, pt.y));
        };
        const onUp = () => { active = null; canvas.style.cursor = "grab"; };
        canvas.addEventListener("pointerdown", onDown);
        canvas.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        canvas.addEventListener("pointercancel", onUp);
        canvas.addEventListener("pointerleave", () => { if (!active) canvas.style.cursor = "default"; });
    }

    /* ======================= РЕНДЕР + CSS ======================= */
    function render(ctx, w, h, lab, params, calc, tick) {
        if (!ctx || typeof ctx.save !== "function" || !lab) return false;
        const scene = SCENES[lab.id];
        if (!scene) return false;
        LW2 = w; LH2 = h;
        CURRENT = { w: w, h: h };
        clearHits();
        ctx.save();
        try {
            scene(ctx, w, h, params || {}, calc || {}, tick || 0);
        } catch (e) {
            ctx.restore();
            try { console.warn("PQSimLight scene failed", lab.id, e); } catch (err) {}
            return false;
        }
        ctx.restore();
        const canvas = ctx.canvas;
        if (canvas) bindCanvas(canvas);
        return true;
    }

    let LW2 = LW, LH2 = LH;

    function installCss() {
        if (document.getElementById("pq-simlight-css")) return;
        const st = document.createElement("style");
        st.id = "pq-simlight-css";
        st.textContent = `
            #pq-sim89-modal .pq-s89-dialog {
                background: linear-gradient(168deg, #ffffff 0%, #f4f8fd 52%, #eaf1f9 100%) !important;
                border: 1px solid rgba(120, 152, 186, 0.45) !important;
                box-shadow: 0 30px 80px rgba(28, 48, 76, 0.35) !important;
                color: #152a40 !important;
            }
            #pq-sim89-modal .pq-sim89-kicker { color: #2f7db8 !important; }
            #pq-sim89-modal .pq-s89-dialog h2 { color: #10263c !important; }
            #pq-sim89-modal .pq-s89-dialog p { color: #59748f !important; }
            #pq-sim89-modal .pq-td-x {
                background: rgba(20, 40, 70, 0.06) !important;
                border: 1px solid rgba(120, 152, 186, 0.5) !important;
                color: #3d5a78 !important;
            }
            #pq-sim89-modal .pq-s89-canvas {
                background: #eef4fb !important;
                border: 1px solid rgba(120, 152, 186, 0.45) !important;
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 10px 26px rgba(40, 64, 96, 0.14);
                border-radius: 18px !important;
            }
            #pq-sim89-modal .pq-s89-telemetry {
                background: #ffffff !important;
                border: 1px solid rgba(120, 152, 186, 0.42) !important;
                color: #1f6f9c !important;
            }
            #pq-sim89-modal .pq-s89-telemetry.pass {
                background: #f0fbf5 !important;
                border-color: rgba(46, 163, 106, 0.55) !important;
                color: #1d7a4c !important;
            }
            #pq-sim89-modal .pq-s89-ctrl {
                background: rgba(255, 255, 255, 0.9) !important;
                border: 1px solid rgba(120, 152, 186, 0.32) !important;
            }
            #pq-sim89-modal .pq-s89-ctrl label { color: #26415c !important; }
            #pq-sim89-modal .pq-s89-ctrl select {
                background: #ffffff !important;
                color: #152a40 !important;
                border: 1px solid rgba(120, 152, 186, 0.5) !important;
            }
            #pq-sim89-modal .pq-s89-ctrl input[type=range] { accent-color: #2f7db8; }
            #pq-sim89-modal .pq-s89-verify {
                background: rgba(226, 240, 252, 0.85) !important;
                border: 1px solid rgba(120, 152, 186, 0.42) !important;
            }
            #pq-sim89-modal .pq-s89-verify div { color: #26415c !important; }
            #pq-sim89-modal .pq-s89-verify input {
                background: #ffffff !important;
                color: #152a40 !important;
                border: 1px solid rgba(120, 152, 186, 0.55) !important;
            }
            #pq-sim89-modal .pq-s89-verify span { color: #a9762a !important; }
            #pq-sim89-modal .btn-primary {
                background: linear-gradient(135deg, #3a9ad9, #2f6fb0) !important;
                border-color: transparent !important;
                color: #fff !important;
            }
            .pq-sim89-hint {
                display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
                margin: 8px 0 2px; font-size: 11.5px; color: #46688c;
            }
            .pq-sim89-hint span {
                padding: 4px 10px; border-radius: 999px; background: rgba(47,125,184,0.1);
                border: 1px solid rgba(47,125,184,0.24); font-weight: 700;
            }
            #pq-sim89-modal .pq-sim89-card,
            #pq-sim89-section .pq-sim89-card { background: #ffffff; }
        `;
        document.head.appendChild(st);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", installCss);
    else installCss();

    window.PQSimLight = {
        version: VERSION,
        render: render,
        scenes: SCENES,
        setParam: setParam,
        bind: bindCanvas,
        has: (id) => !!SCENES[id],
        bindCanvas: bindCanvas,
        dragChip: dragChip,
        warnChip: warnChip
    };

})();
