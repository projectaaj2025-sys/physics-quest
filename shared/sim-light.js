/* ============================================================
   PQ SIM LIGHT — светлая «фотореалистичная» отрисовка опытов
   для 18 canvas-симуляторов 8–9 классов + прямое управление мышью.
   Если модуль не загружен, shared/simulators-89.js рисует как раньше.
   ============================================================ */
(function () {
    "use strict";

    const VERSION = "1.1";
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
        // подсказка — под надписью ε, чтобы не накрывать магнит в левом положении
        dragChip(ctx, 66, 44, tr3("оттяни магнит — скорость", "магнитті тарт — жылдамдық", "pull the magnet — speed"));
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

    /* ============================ НОВЫЕ ОПЫТЫ (по темам) ============================ */

    SCENES.g8_heat_cond = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.84 });
        const base = h * 0.84;
        const cx = w * 0.5, wallW = map(p.d, 5, 50, 26, 96), wallH = 132;
        const x0 = cx - wallW / 2, y0 = base - wallH;
        // «горячая» зона слева, «холодная» справа
        ctx.fillStyle = rad(ctx, x0 - 40, base - wallH / 2, 6, 120, [[0, "rgba(255,140,70,0.35)"], [1, "rgba(255,140,70,0)"]]);
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = rad(ctx, x0 + wallW + 46, base - wallH / 2, 6, 120, [[0, "rgba(90,170,235,0.32)"], [1, "rgba(90,170,235,0)"]]);
        ctx.fillRect(0, 0, w, h);
        // нагреватель
        contactShadow(ctx, x0 - 34, base - 4, 26, 6, 0.2);
        fillRR(ctx, x0 - 62, base - 26, 58, 22, 5, lin(ctx, 0, base - 26, 0, base - 4, [[0, "#f3f7fb"], [1, "#b9c6d4"]]));
        flameShape(ctx, x0 - 33, base - 26, 26, 16, t);
        lampGlow(ctx, x0 - 33, base - 20, 20, 0.7);
        // стенка с текстурой материала
        const tex = { cu: ["#f2b98a", "#b6703a"], steel: ["#dfe7ef", "#8b9bab"], glass: ["#d7f0fb", "#8fc6dd"], foam: ["#fff8e2", "#dcc38c"] }[p.mat] || ["#dfe7ef", "#8b9bab"];
        shadowed(ctx, 12, "rgba(40,60,90,0.25)", 5, () => {
            fillRR(ctx, x0, y0, wallW, wallH, 4, lin(ctx, x0, 0, x0 + wallW, 0, [[0, tex[0]], [1, tex[1]]]));
        });
        ctx.save(); ctx.beginPath(); fillRR(ctx, x0, y0, wallW, wallH, 4, "rgba(0,0,0,0)");
        ctx.clip();
        if (p.mat === "foam") {
            const r2 = rnd(5);
            for (let i = 0; i < 40; i++) { ctx.beginPath(); ctx.arc(x0 + r2() * wallW, y0 + r2() * wallH, 1.6, 0, Math.PI * 2); ctx.fillStyle = "rgba(180,150,90,0.45)"; ctx.fill(); }
        } else if (p.mat === "glass") {
            ctx.fillStyle = "rgba(255,255,255,0.45)";
            ctx.beginPath(); ctx.moveTo(x0 + 8, y0); ctx.lineTo(x0 + wallW * 0.5, y0); ctx.lineTo(x0 + 4, y0 + wallH); ctx.lineTo(x0, y0 + wallH); ctx.closePath(); ctx.fill();
        } else {
            for (let i = 1; i < 5; i++) { ctx.fillStyle = "rgba(255,255,255,0.18)"; ctx.fillRect(x0, y0 + wallH * i / 5, wallW, 1); }
        }
        ctx.restore();
        strokeRR(ctx, x0, y0, wallW, wallH, 4, "rgba(70,92,116,0.4)", 1.2);
        // стрелки теплового потока
        const fluxK = clamp(calc.q / 5000, 0, 1);
        const n = 3;
        for (let i = 0; i < n; i++) {
            const yy = y0 + wallH * (i + 1) / (n + 1);
            arrow(ctx, x0 - 16, yy, x0 + wallW + 16, yy, `rgba(226,110,40,${0.35 + fluxK * 0.55})`, 2 + fluxK * 2.4);
        }
        text(ctx, tr3("нагреватель", "қыздырғыш", "heater"), x0 - 74, base + 22, { size: 10, color: "#b4632a", weight: 700 });
        text(ctx, tr3("холодный контур", "суық контур", "cold loop"), x0 + wallW + 12, y0 - 10, { size: 10, color: "#2f6fb0", weight: 700 });
        // ручки
        handle(ctx, x0 + wallW + 6, y0 + 8, "d", { key: "d", axis: "x", x: x0 + wallW + 6, y: y0 + 8, from: x0 + 24, to: x0 + 120, min: 5, max: 50 });
        handle(ctx, x0 - 96, y0 + 12, "ΔT", { key: "dT", axis: "y", x: x0 - 96, y: y0 + 12, from: y0 + 40, to: 18, min: 5, max: 80 });
        // выбор материала
        const mats = [["cu", "Медь", "Мыс", "Copper"], ["steel", "Сталь", "Болат", "Steel"], ["glass", "Стекло", "Шыны", "Glass"], ["foam", "Пенопласт", "Пенопласт", "Foam"]];
        mats.forEach((md, i) => {
            const x = 24 + i * 92, y = 20, on = p.mat === md[0];
            fillRR(ctx, x, y, 84, 22, 11, on ? "rgba(226,110,40,0.18)" : "rgba(255,255,255,0.88)");
            strokeRR(ctx, x, y, 84, 22, 11, on ? "#d2732c" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(md[1], md[2], md[3]), x + 42, y + 15, { size: 10, align: "center", color: on ? "#a9551d" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "mat", value: md[0], x: x + 42, y: y + 11, r: 22 });
        });
        pillText(ctx, `q = ${fmt2(calc.q)} Вт/м²`, 24, 66, { size: 11.5, color: calc.pass ? "#227a4d" : "#b4632a" });
        pillText(ctx, `λ = ${calc.lam} Вт/(м·К)`, 24, 90, { size: 10.5, color: "#1f6f9c" });
    };

    SCENES.g8_engine = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.86 });
        const base = h * 0.86;
        const cylX = 360, cylW = 100, cylTop = base - 128, cylH = 122;
        // радиатор-холодильник слева
        const radX = 96;
        for (let i = 0; i < 7; i++) steelBar(ctx, radX - 30, base - 120 + i * 15, 60, 6, 3);
        text(ctx, tr3("холодильник", "тоңазытқыш", "cooler"), radX, base - 132, { size: 10, align: "center", color: "#2f6fb0", weight: 700 });
        // цилиндр
        shadowed(ctx, 14, "rgba(40,60,90,0.24)", 6, () => {
            fillRR(ctx, cylX, cylTop, cylW, cylH, 10, lin(ctx, cylX, 0, cylX + cylW, 0, [[0, "#ffffff"], [0.45, "#dfe7ef"], [1, "#a9b8c8"]]));
        });
        strokeRR(ctx, cylX, cylTop, cylW, cylH, 10, "rgba(70,92,116,0.42)", 1.4);
        // рёбра охлаждения
        for (let i = 0; i < 4; i++) {
            fillRR(ctx, cylX - 10, cylTop + 20 + i * 26, cylW + 20, 6, 3, "rgba(160,180,200,0.85)");
        }
        // поршень
        const phase = (Math.sin(t * 0.028) + 1) / 2;
        const pistonY = cylTop + 16 + phase * 38;
        fillRR(ctx, cylX + 5, pistonY, cylW - 10, 12, 4, lin(ctx, 0, pistonY, 0, pistonY + 12, [[0, "#ffffff"], [1, "#9fb0c1"]]));
        ctx.strokeStyle = "rgba(70,92,116,0.45)"; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(cylX + 5, pistonY); ctx.lineTo(cylX + cylW - 5, pistonY); ctx.stroke();
        // шток и крейцкопф
        steelBar(ctx, cylX + cylW / 2 - 4, pistonY - 42, 8, 44, 3);
        fillRR(ctx, cylX + cylW / 2 - 18, pistonY - 52, 36, 12, 5, lin(ctx, 0, pistonY - 52, 0, pistonY - 40, [[0, "#ffffff"], [1, "#a9b8c8"]]));
        // маховик
        const flyX = 604, flyY = base - 74, flyR = 36;
        ctx.beginPath(); ctx.arc(flyX, flyY, flyR, 0, Math.PI * 2);
        ctx.fillStyle = lin(ctx, flyX - flyR, flyY - flyR, flyX + flyR, flyY + flyR, [[0, "#f2f6fa"], [1, "#9aa9ba"]]); ctx.fill();
        ctx.strokeStyle = "rgba(70,92,116,0.45)"; ctx.lineWidth = 3; ctx.stroke();
        ctx.save(); ctx.translate(flyX, flyY); ctx.rotate(t * 0.028);
        for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); ctx.fillStyle = "rgba(120,146,172,0.32)"; ctx.fillRect(flyR - 13, -2, 11, 4); }
        ctx.restore();
        brassKnob(ctx, flyX, flyY, 8, 0);
        // шатун от крейцкопфа к маховику
        wire(ctx, [[cylX + cylW / 2, pistonY - 46], [flyX - 8, flyY - 14]], "#8c9cae", 5);
        // нагреватель с пламенем
        fillRR(ctx, cylX + 12, base - 24, cylW - 24, 20, 6, lin(ctx, 0, base - 24, 0, base - 4, [[0, "#f3f7fb"], [1, "#b0bfcd"]]));
        flameShape(ctx, cylX + cylW / 2, base - 24, 30, 22, t);
        lampGlow(ctx, cylX + cylW / 2, base - 20, 22, 0.7);
        // тепловые потоки
        arrow(ctx, cylX + cylW / 2 + 54, base - 60, cylX + cylW + 6, base - 60, "rgba(226,110,40,0.8)", 2.6);
        arrow(ctx, cylX - 12, cylTop + 44, radX + 34, cylTop + 44, "rgba(70,140,205,0.75)", 2.6);
        text(ctx, `Q₁ = ${p.q1} кДж`, cylX + cylW + 12, base - 66, { size: 10, color: "#b4392f", weight: 700 });
        text(ctx, `Q₂ = ${p.q2} кДж`, radX - 30, base - 142, { size: 10, color: "#2f6fb0", weight: 700 });
        // индикатор КПД
        gauge(ctx, 706, 74, 32, clamp(calc.eta / 60, 0, 1), "η", "%");
        text(ctx, `${fmt2(calc.eta)} %`, 706, 124, { size: 11.5, align: "center", color: calc.pass ? "#227a4d" : "#b4632a", weight: 800 });
        // ручки
        handle(ctx, radX, base - 96, "Q₂", { key: "q2", axis: "y", x: radX, y: base - 96, from: base - 60, to: base - 150, min: 10, max: 900 });
        handle(ctx, cylX + cylW + 60, base - 96, "Q₁", { key: "q1", axis: "y", x: cylX + cylW + 60, y: base - 96, from: base - 60, to: base - 150, min: 100, max: 1000 });
        pillText(ctx, `A = ${fmt2(calc.work)} кДж`, 24, 30, { size: 11, color: "#1f6f9c" });
    };

    SCENES.g8_coulomb = (ctx, w, h, p, calc, t) => {
        spaceBackdrop(ctx, w, h, t);
        const cy = h * 0.6;
        const gapPx = map(p.r, 2, 12, 60, 470);
        const ax = w * 0.5 - gapPx / 2, bx = w * 0.5 + gapPx / 2;
        const radP = map(p.q1, 1, 10, 12, 26), radQ = map(p.q2, 1, 10, 12, 26);
        // силовые линии
        for (let i = 0; i < 5; i++) {
            const off = (i - 2) * 26;
            ctx.strokeStyle = "rgba(70,130,190,0.22)"; ctx.lineWidth = 1.1;
            ctx.beginPath(); ctx.moveTo(ax + 26, cy + off * 0.6);
            ctx.quadraticCurveTo(w * 0.5, cy + off * 1.7, bx - 26, cy + off * 0.6); ctx.stroke();
        }
        // зонды
        [[ax, radP, "q₁", "#e2626a", "#a5293a"], [bx, radQ, "q₂", "#6a9fe0", "#22497f"]].forEach(([x, r, lbl, c1, c2]) => {
            contactShadow(ctx, x, cy + r + 10, r * 1.1, 7, 0.22);
            shadowed(ctx, 16, "rgba(30,60,100,0.3)", 8, () => {
                ctx.beginPath(); ctx.arc(x, cy, r, 0, Math.PI * 2);
                ctx.fillStyle = rad(ctx, x - r * 0.35, cy - r * 0.4, 2, r * 1.25, [[0, "#ffffff"], [0.35, c1], [1, c2]]);
                ctx.fill();
            });
            ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(x, cy, r, 0, Math.PI * 2); ctx.stroke();
            text(ctx, lbl, x, cy + 5, { size: 13, align: "center", color: "#fff", weight: 900 });
            // панель-держатель
            steelBar(ctx, x - 3, cy + r, 6, 52, 3);
            fillRR(ctx, x - 24, cy + r + 50, 48, 8, 4, "rgba(150,175,200,0.8)");
        });
        // векторы силы
        const fk = clamp(calc.micro / 320, 0.1, 1);
        arrow(ctx, ax - radP - 6, cy - 26, ax - radP - 6 - 30 - fk * 40, cy - 26, "#c2483c", 2.6, "F");
        arrow(ctx, bx + radQ + 6, cy - 26, bx + radQ + 6 + 30 + fk * 40, cy - 26, "#c2483c", 2.6, "F");
        // линейка расстояния
        ctx.strokeStyle = "rgba(60,110,160,0.55)"; ctx.lineWidth = 1.4; ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(ax, cy + 74); ctx.lineTo(bx, cy + 74); ctx.stroke(); ctx.setLineDash([]);
        pillText(ctx, `r = ${p.r} см`, w * 0.5 - 34, cy + 96, { size: 10.5, color: "#134a70" });
        handle(ctx, w * 0.5, cy + 74, "r", { key: "r", axis: "x", x: w * 0.5, y: cy + 74, from: w * 0.5 - 240, to: w * 0.5 + 240, min: 2, max: 12, r: 26 });
        dragChip(ctx, 24, 96, tr3("тяни зонды — меняется r", "зондтарды тарт", "drag probes — change r"));
        handle(ctx, ax, cy - radP - 16, "q₁", { key: "q1", axis: "y", x: ax, y: cy - radP - 16, from: cy - 10, to: 20, min: 1, max: 10 });
        handle(ctx, bx, cy - radQ - 16, "q₂", { key: "q2", axis: "y", x: bx, y: cy - radQ - 16, from: cy - 10, to: 20, min: 1, max: 10 });
        pillText(ctx, `F = ${fmt2(calc.micro)} мкН`, 24, 32, { size: 12, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g8_capacitor = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.84 });
        const base = h * 0.84, cx = w * 0.46;
        const plateH = map(p.s, 10, 100, 54, 122);
        const gap = map(p.d, 0.5, 5, 10, 54);
        // стойки
        steelBar(ctx, cx - 110, base - 8, 220, 8, 4);
        // нижняя пластина
        contactShadow(ctx, cx, base - 8, 96, 7, 0.2);
        shadowed(ctx, 10, "rgba(40,60,90,0.28)", 5, () => {
            fillRR(ctx, cx - 92, base - 22, 184, 16, 5, lin(ctx, 0, base - 22, 0, base - 6, [[0, "#f7fafd"], [0.5, "#ccd8e4"], [1, "#93a5b7"]]));
        });
        // верхняя пластина
        const topY = base - 30 - gap - 16;
        shadowed(ctx, 10, "rgba(40,60,90,0.24)", 4, () => {
            fillRR(ctx, cx - 92, topY, 184, 14, 5, lin(ctx, 0, topY, 0, topY + 14, [[0, "#ffffff"], [0.6, "#d9e3ed"], [1, "#a2b2c2"]]));
        });
        steelBar(ctx, cx - 3, topY - 54, 6, 56, 3);
        brassKnob(ctx, cx, topY - 58, 9, 0);
        // диэлектрик
        const epsK = { air: 0, glass: 1, mica: 1 }[p.mat];
        fillRR(ctx, cx - 82, base - 24 - gap, 164, gap, 3, epsK ? (p.mat === "glass" ? "rgba(150,215,240,0.62)" : "rgba(230,205,150,0.7)") : "rgba(200,225,245,0.18)");
        strokeRR(ctx, cx - 82, base - 24 - gap, 164, gap, 3, "rgba(90,130,170,0.35)", 1);
        text(ctx, epsK ? tr3("диэлектрик", "диэлектрик", "dielectric") : tr3("воздух", "ауа", "air"), cx, base - 30 - gap / 2, { size: 10, align: "center", color: C.ink2, weight: 700 });
        // пластины-выводы и мультиметр
        wire(ctx, [[cx - 92, base - 14], [210, base - 14], [210, base - 64]], "#b1442f", 3);
        wire(ctx, [[cx + 92, base - 14], [640, base - 14], [640, base - 64]], "#2f6fb0", 3);
        fillRR(ctx, 168, 26, 128, 76, 10, "#fdfefe");
        strokeRR(ctx, 168, 26, 128, 76, 10, "rgba(90,116,145,0.45)", 1.4);
        ctx.fillStyle = "rgba(190,225,205,0.85)"; ctx.fillRect(178, 38, 108, 30);
        text(ctx, `${fmt2(calc.c)} pF`, 232, 60, { size: 16, align: "center", color: "#1c5a41", weight: 800, family: "'Courier New', monospace" });
        text(ctx, tr3("измеритель ёмкости", "сыйымдылық өлшегіш", "capacitance meter"), 232, 88, { size: 9.5, align: "center", color: C.soft, weight: 700 });
        // ручки
        handle(ctx, cx + 104, topY + 4, "d", { key: "d", axis: "y", x: cx + 104, y: topY + 4, from: base - 34, to: base - 96, min: 0.5, max: 5 });
        handle(ctx, cx + 116, base - 40, "S", { key: "s", axis: "x", x: cx + 116, y: base - 40, from: cx + 70, to: cx + 170, min: 10, max: 100 });
        const mats = [["air", "Воздух", "Ауа", "Air"], ["glass", "Стекло", "Шыны", "Glass"], ["mica", "Слюда", "Слюда", "Mica"]];
        mats.forEach((md, i) => {
            const x = 560 + (i % 2) * 96, y = 26 + Math.floor(i / 2) * 30, on = p.mat === md[0];
            fillRR(ctx, x, y, 88, 24, 12, on ? "rgba(47,125,184,0.18)" : "rgba(255,255,255,0.9)");
            strokeRR(ctx, x, y, 88, 24, 12, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(md[1], md[2], md[3]), x + 44, y + 16, { size: 10, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "mat", value: md[0], x: x + 44, y: y + 12, r: 24 });
        });
    };

    SCENES.g8_resistivity = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.84 });
        const base = h * 0.84;
        // каркас с намотанным проводом
        const cwx = 250, cwy = base - 62;
        contactShadow(ctx, cwx, base - 6, 54, 7, 0.22);
        ctx.beginPath(); ctx.arc(cwx, cwy, 46, 0, Math.PI * 2);
        ctx.fillStyle = lin(ctx, cwx - 46, cwy - 46, cwx + 46, cwy + 46, [[0, "#f4f8fc"], [1, "#c0cdda"]]); ctx.fill();
        ctx.strokeStyle = "rgba(80,104,130,0.4)"; ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); ctx.arc(cwx, cwy, 12, 0, Math.PI * 2); ctx.fillStyle = "#9fb0c1"; ctx.fill();
        const wireCol = { cu: "#c9773c", fe: "#8e9aa8", ni: "#9aa9a4", chr: "#7f8b99" }[p.mat] || "#c9773c";
        const turns = Math.round(map(p.len, 1, 20, 6, 22));
        for (let i = 0; i < turns; i++) {
            ctx.strokeStyle = wireCol; ctx.lineWidth = 3.4;
            ctx.beginPath(); ctx.ellipse(cwx, cwy - 30 + i * 2.7, 47, 12, 0, 0, Math.PI * 2); ctx.stroke();
        }
        // участок провода с линейкой
        wire(ctx, [[cwx + 46, cwy], [360, cwy], [360, base - 16], [470, base - 16], [470, base - 74]], wireCol, 3.4);
        ctx.strokeStyle = "rgba(60,110,160,0.5)"; ctx.lineWidth = 1.4; ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(360, base - 30); ctx.lineTo(470, base - 30); ctx.stroke(); ctx.setLineDash([]);
        for (let i = 0; i <= 5; i++) { const x = 360 + i * 22; ctx.strokeStyle = "rgba(60,110,160,0.6)"; ctx.beginPath(); ctx.moveTo(x, base - 34); ctx.lineTo(x, base - 26); ctx.stroke(); }
        text(ctx, `L = ${p.len} м`, 415, base - 40, { size: 10, align: "center", color: "#134a70", weight: 700 });
        // микрометр / сечение
        const gx = 560, gy = base - 56;
        fillRR(ctx, gx - 46, gy - 16, 92, 40, 8, lin(ctx, 0, gy - 16, 0, gy + 24, [[0, "#f7fafd"], [1, "#b9c6d4"]]));
        strokeRR(ctx, gx - 46, gy - 16, 92, 40, 8, "rgba(70,92,116,0.4)", 1.2);
        const dotR = clamp(map(p.s, 0.1, 2, 2, 13), 2, 13);
        ctx.beginPath(); ctx.arc(gx, gy + 4, dotR, 0, Math.PI * 2); ctx.fillStyle = wireCol; ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 1; ctx.stroke();
        text(ctx, `S = ${p.s} мм²`, gx, gy - 24, { size: 10, align: "center", color: C.ink2, weight: 700 });
        // омметр
        wire(ctx, [[gx - 46, gy + 4], [700, gy + 4], [700, base - 74]], "#b1442f", 2.6);
        gauge(ctx, 668, 66, 34, clamp(calc.r / 12, 0, 1), "R", "Ом");
        handle(ctx, cwx + 62, cwy - 6, "L", { key: "len", axis: "x", x: cwx + 62, y: cwy - 6, from: cwx + 40, to: cwx + 180, min: 1, max: 20 });
        handle(ctx, gx, gy + 40, "S", { key: "s", axis: "y", x: gx, y: gy + 40, from: gy + 34, to: gy - 40, min: 0.1, max: 2 });
        const mats = [["cu", "Медь", "Мыс", "Copper"], ["fe", "Железо", "Темір", "Iron"], ["ni", "Никель", "Никель", "Nickel"], ["chr", "Нихром", "Нихром", "Nichrome"]];
        mats.forEach((md, i) => {
            const x = 24 + i * 92, y = 20, on = p.mat === md[0];
            fillRR(ctx, x, y, 84, 22, 11, on ? "rgba(47,125,184,0.18)" : "rgba(255,255,255,0.88)");
            strokeRR(ctx, x, y, 84, 22, 11, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(md[1], md[2], md[3]), x + 42, y + 15, { size: 10, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "mat", value: md[0], x: x + 42, y: y + 11, r: 22 });
        });
        pillText(ctx, `R = ${fmt2(calc.r)} Ом`, 24, 66, { size: 12, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g8_electromagnet = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.9 });
        const base = h * 0.9, hx = w * 0.52;
        // балка крана
        fillRR(ctx, 0, 16, w, 16, 4, lin(ctx, 0, 16, 0, 32, [[0, "#ffe9a8"], [1, "#d9a94a"]]));
        for (let x = 0; x < w; x += 40) { ctx.fillStyle = "rgba(120,90,30,0.22)"; ctx.fillRect(x, 16, 8, 16); }
        // трос
        wire(ctx, [[hx, 32], [hx, 78]], "#7d8fa2", 3);
        // катушка на сердечнике
        const coilY = 96;
        fillRR(ctx, hx - 14, coilY, 28, 74, 4, lin(ctx, hx - 14, 0, hx + 14, 0, [[0, "#e8eef5"], [0.5, "#c3cfdb"], [1, "#93a3b4"]]));
        const turns = Math.round(map(p.n, 100, 1000, 5, 14));
        for (let i = 0; i < turns; i++) {
            ctx.strokeStyle = i % 2 ? "#c07a3a" : "#d9974f"; ctx.lineWidth = 5;
            ctx.beginPath(); ctx.ellipse(hx, coilY + 8 + i * 4.4, 26, 7, 0, 0, Math.PI * 2); ctx.stroke();
        }
        // якорь + контейнер
        const lift = clamp(calc.b / 15, 0, 1);
        fillRR(ctx, hx - 60, coilY + 74, 120, 12, 4, lin(ctx, 0, coilY + 74, 0, coilY + 86, [[0, "#f2f6fa"], [1, "#a8b6c5"]]));
        const cyy = coilY + 96 + (1 - lift) * 8;
        shadowed(ctx, 12, "rgba(40,60,90,0.28)", 6, () => {
            fillRR(ctx, hx - 40, cyy, 80, 52, 6, lin(ctx, 0, cyy, 0, cyy + 52, [[0, "#7fb6e0"], [1, "#2f6f9c"]]));
        });
        ctx.strokeStyle = "rgba(255,255,255,0.45)"; ctx.lineWidth = 1.4;
        for (let i = 1; i < 3; i++) { ctx.beginPath(); ctx.moveTo(hx - 40, cyy + 52 * i / 3); ctx.lineTo(hx + 40, cyy + 52 * i / 3); ctx.stroke(); }
        text(ctx, tr3("контейнер", "контейнер", "container"), hx, cyy + 32, { size: 10, align: "center", color: "#eaf5ff", weight: 700 });
        // силовые линии
        const fieldK = clamp(calc.b / 15, 0.05, 1);
        for (let i = 0; i < 4; i++) {
            const off = (i - 1.5) * 30;
            ctx.strokeStyle = `rgba(47,125,184,${0.2 + fieldK * 0.45})`; ctx.lineWidth = 1.3;
            ctx.beginPath();
            ctx.moveTo(hx + 18, coilY + 16 + i * 14);
            ctx.bezierCurveTo(hx + 90 + off * 0.2, coilY + 30 + i * 12, hx + 60, coilY + 100, hx + 16, coilY + 70);
            ctx.stroke();
        }
        // пульт
        fillRR(ctx, 596, base - 132, 140, 118, 10, "#fdfefe");
        strokeRR(ctx, 596, base - 132, 140, 118, 10, "rgba(90,116,145,0.45)", 1.4);
        ctx.fillStyle = "rgba(190,225,205,0.9)"; ctx.fillRect(608, base - 122, 116, 30);
        text(ctx, `${fmt2(calc.b)} мТл`, 666, base - 101, { size: 15, align: "center", color: "#1c5a41", weight: 800, family: "'Courier New', monospace" });
        text(ctx, `N = ${p.n} · I = ${p.i} А`, 666, base - 76, { size: 10, align: "center", color: C.ink2, weight: 700 });
        text(ctx, `L = ${p.len} см`, 666, base - 58, { size: 10, align: "center", color: C.ink2, weight: 700 });
        // ручки
        handle(ctx, hx + 60, coilY + 20, "N", { key: "n", axis: "y", x: hx + 60, y: coilY + 20, from: coilY + 60, to: 46, min: 100, max: 1000 });
        handle(ctx, hx - 70, coilY + 40, "I", { key: "i", axis: "y", x: hx - 70, y: coilY + 40, from: coilY + 70, to: 60, min: 0.5, max: 5 });
        handle(ctx, 560, base - 40, "L", { key: "len", axis: "x", x: 560, y: base - 40, from: 500, to: 640, min: 5, max: 20 });
        const cores = [["air", "Без сердечника", "Өзексіз", "No core"], ["steel", "Сталь", "Болат", "Steel"], ["iron", "Железо", "Темір", "Iron"]];
        cores.forEach((cd, i) => {
            const x = 24 + i * 108, y = 56, on = p.core === cd[0];
            fillRR(ctx, x, y, 100, 24, 12, on ? "rgba(47,125,184,0.18)" : "rgba(255,255,255,0.9)");
            strokeRR(ctx, x, y, 100, 24, 12, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(cd[1], cd[2], cd[3]), x + 50, y + 16, { size: 9.5, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "core", value: cd[0], x: x + 50, y: y + 12, r: 24 });
        });
        pillText(ctx, `F ~ ${fmt2(calc.b * 12)} Н`, 24, 30, { size: 11, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g8_reflection = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.88 });
        const base = h * 0.88;
        const mirX = w * 0.68;
        const personH = map(p.hs, 160, 200, 120, 168);
        // человек (силуэт)
        const px = 220, headR = personH * 0.075;
        const topY = base - personH;
        ctx.strokeStyle = "#3d5a78"; ctx.fillStyle = "#3d5a78"; ctx.lineWidth = 7; ctx.lineCap = "round";
        ctx.beginPath(); ctx.arc(px, topY + headR, headR, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(px, topY + headR * 2); ctx.lineTo(px, base - personH * 0.42); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px - personH * 0.13, topY + headR * 2.6); ctx.lineTo(px + personH * 0.13, topY + headR * 2.6); ctx.stroke();
        ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(px, base - personH * 0.42); ctx.lineTo(px - personH * 0.1, base); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, base - personH * 0.42); ctx.lineTo(px + personH * 0.1, base); ctx.stroke();
        text(ctx, `H = ${p.hs} см`, px - 46, base - personH - 12, { size: 10.5, color: C.ink2, weight: 700 });
        // зеркало
        const mirH = map(p.mir, 60, 120, 62, 176);
        const mirTop = base - 10 - mirH;
        shadowed(ctx, 14, "rgba(40,60,90,0.25)", 6, () => {
            fillRR(ctx, mirX - 8, mirTop, 16, mirH + 10, 4, lin(ctx, mirX - 8, 0, mirX + 8, 0, [[0, "#d9b98a"], [0.5, "#c39a63"], [1, "#9c7443"]]));
        });
        fillRR(ctx, mirX - 30, mirTop, 60, mirH, 3, lin(ctx, mirX - 30, mirTop, mirX + 30, mirTop + mirH, [[0, "rgba(226,244,255,0.95)"], [0.5, "rgba(200,230,250,0.8)"], [1, "rgba(235,248,255,0.95)"]]));
        strokeRR(ctx, mirX - 30, mirTop, 60, mirH, 3, "rgba(120,160,195,0.7)", 1.4);
        // блик
        ctx.save(); ctx.beginPath(); ctx.rect(mirX - 30, mirTop, 60, mirH); ctx.clip();
        ctx.fillStyle = "rgba(255,255,255,0.75)";
        ctx.beginPath(); ctx.moveTo(mirX - 26, mirTop + 8); ctx.lineTo(mirX + 6, mirTop); ctx.lineTo(mirX - 8, mirTop + mirH); ctx.lineTo(mirX - 26, mirTop + mirH); ctx.closePath(); ctx.fill();
        ctx.restore();
        // отражение инженера внутри полотна: если зеркало ниже H/2 — фигура обрезается
        ctx.save();
        ctx.beginPath(); ctx.rect(mirX - 30, mirTop, 60, mirH); ctx.clip();
        ctx.globalAlpha = 0.32; ctx.strokeStyle = "#5c7896"; ctx.fillStyle = "#5c7896";
        const rH = Math.min(personH, mirH);
        const rFeet = mirTop + mirH, rTop = rFeet - rH, rrHead = rH * 0.075;
        ctx.beginPath(); ctx.arc(mirX, rTop + rrHead, rrHead, 0, Math.PI * 2); ctx.fill();
        ctx.lineWidth = Math.max(3, rH * 0.045);
        ctx.beginPath(); ctx.moveTo(mirX, rTop + rrHead * 2); ctx.lineTo(mirX, rFeet - rH * 0.42); ctx.stroke();
        ctx.lineWidth = Math.max(2.5, rH * 0.04);
        ctx.beginPath(); ctx.moveTo(mirX, rFeet - rH * 0.42); ctx.lineTo(mirX - rH * 0.09, rFeet); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(mirX, rFeet - rH * 0.42); ctx.lineTo(mirX + rH * 0.09, rFeet); ctx.stroke();
        ctx.restore();
        // лучи от глаз к зеркалу и к ногам
        ctx.strokeStyle = "rgba(240,170,70,0.75)"; ctx.lineWidth = 1.5;
        const eyeY = topY + headR * 2.4;
        ctx.beginPath(); ctx.moveTo(px + headR, eyeY); ctx.lineTo(mirX - 30, eyeY); ctx.lineTo(px + headR, mirTop + 4); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px + headR, base - 6); ctx.lineTo(mirX - 30, base - 6); ctx.lineTo(px + headR, mirTop + mirH); ctx.stroke();
        // требуемая высота — пунктир
        const needH = map(p.hs / 2, 60, 120, 62, 176);
        const bx2 = mirX + 48, by2 = base - 10;
        fillRR(ctx, bx2 - 5, by2 - needH, 10, needH, 4, "rgba(46,163,106,0.16)");
        ctx.strokeStyle = "rgba(46,163,106,0.85)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(bx2, by2); ctx.lineTo(bx2, by2 - needH); ctx.stroke();
        [[by2, 1], [by2 - needH, -1]].forEach(([y]) => { ctx.beginPath(); ctx.moveTo(bx2 - 7, y); ctx.lineTo(bx2 + 7, y); ctx.stroke(); });
        text(ctx, tr3("нужно H/2", "керек H/2", "need H/2"), bx2 + 12, by2 - needH + 4, { size: 10, color: "#227a4d", weight: 700 });
        handle(ctx, mirX - 44, mirTop, "h", { key: "mir", axis: "y", x: mirX - 44, y: mirTop, from: base - 20, to: 40, min: 60, max: 120 });
        handle(ctx, px + 60, topY + 30, "H", { key: "hs", axis: "y", x: px + 60, y: topY + 30, from: topY + 60, to: 30, min: 160, max: 200 });
        pillText(ctx, `h = ${p.mir} см · H/2 = ${fmt2(calc.need)} см`, 24, 30, { size: 11, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g8_refraction = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.86 });
        const base = h * 0.86;
        // стеклянный блок
        const bx = 250, by = base - 96, bw = 260, bh = 92;
        shadowed(ctx, 14, "rgba(40,60,90,0.2)", 6, () => {
            fillRR(ctx, bx, by, bw, bh, 6, "rgba(200,232,248,0.55)");
        });
        strokeRR(ctx, bx, by, bw, bh, 6, "rgba(110,160,195,0.8)", 1.6);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath(); ctx.moveTo(bx + 12, by + bh - 10); ctx.lineTo(bx + 74, by + 6); ctx.lineTo(bx + 96, by + 6); ctx.lineTo(bx + 34, by + bh - 10); ctx.closePath(); ctx.fill();
        text(ctx, { water: "вода n = 1,33", glass: "стекло n = 1,5", diamond: "алмаз n = 2,42" }[p.mat], bx + 12, by + 18, { size: 10, color: "#2f6f9c", weight: 700 });
        // нормаль
        const hitX = bx + bw * 0.5, hitY = by;
        ctx.strokeStyle = "rgba(90,116,145,0.6)"; ctx.lineWidth = 1.2; ctx.setLineDash([7, 5]);
        ctx.beginPath(); ctx.moveTo(hitX, by - 92); ctx.lineTo(hitX, by + bh - 6); ctx.stroke(); ctx.setLineDash([]);
        // падающий луч
        const a = p.alpha * Math.PI / 180;
        const inLen = 130;
        const ix = hitX - Math.sin(a) * inLen, iy = hitY - Math.cos(a) * inLen;
        ctx.strokeStyle = "#e0632f"; ctx.lineWidth = 2.6; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(ix, iy); ctx.lineTo(hitX, hitY); ctx.stroke();
        arrow(ctx, hitX - Math.sin(a) * 24, hitY - Math.cos(a) * 24, hitX - Math.sin(a) * 4, hitY - Math.cos(a) * 4, "#e0632f", 2.4);
        // преломлённый луч
        const b = calc.beta * Math.PI / 180;
        const outLen = 170;
        ctx.strokeStyle = "#d9a94a"; ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.moveTo(hitX, hitY); ctx.lineTo(hitX + Math.sin(b) * outLen, hitY + Math.cos(b) * outLen); ctx.stroke();
        // отражённый луч
        ctx.strokeStyle = "rgba(224,99,47,0.3)"; ctx.lineWidth = 1.6; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(hitX, hitY); ctx.lineTo(hitX + Math.sin(a) * 120, hitY - Math.cos(a) * 120); ctx.stroke(); ctx.setLineDash([]);
        // углы
        ctx.strokeStyle = "rgba(224,99,47,0.85)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(hitX, hitY, 44, -Math.PI / 2 - a, -Math.PI / 2); ctx.stroke();
        text(ctx, `α = ${p.alpha}°`, hitX - 66, hitY - 48, { size: 10.5, color: "#b4392f", weight: 700 });
        ctx.strokeStyle = "rgba(217,169,74,0.95)";
        ctx.beginPath(); ctx.arc(hitX, hitY, 58, Math.PI / 2 - b, Math.PI / 2); ctx.stroke();
        text(ctx, `β = ${fmt2(calc.beta)}°`, hitX + 34, hitY + bh + 20, { size: 10.5, color: "#8a6318", weight: 700 });
        // лазер
        fillRR(ctx, ix - 18, iy - 12, 40, 24, 6, lin(ctx, 0, iy - 12, 0, iy + 12, [[0, "#f4f7fa"], [1, "#9aa9ba"]]));
        lampGlow(ctx, ix + 4, iy, 10, 0.8);
        // транспортир-шкала
        for (let dg = 0; dg <= 90; dg += 10) {
            const rr2 = 92, aa = -Math.PI / 2 - dg * Math.PI / 180;
            ctx.strokeStyle = "rgba(90,116,145,0.45)"; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(hitX + Math.cos(aa) * (rr2 - 6), hitY + Math.sin(aa) * (rr2 - 6));
            ctx.lineTo(hitX + Math.cos(aa) * rr2, hitY + Math.sin(aa) * rr2); ctx.stroke();
        }
        handle(ctx, ix, iy, "α", { kind: "drag", key: "alpha", axis: "y", x: ix, y: iy, from: 100, to: 10, min: 20, max: 70 });
        const mats = [["water", "Вода", "Су", "Water"], ["glass", "Стекло", "Шыны", "Glass"], ["diamond", "Алмаз", "Алмаз", "Diamond"]];
        mats.forEach((md, i) => {
            const x = 560 + (i % 2) * 96, y = 22 + Math.floor(i / 2) * 30, on = p.mat === md[0];
            fillRR(ctx, x, y, 88, 24, 12, on ? "rgba(47,125,184,0.18)" : "rgba(255,255,255,0.9)");
            strokeRR(ctx, x, y, 88, 24, 12, on ? "#2f7db8" : "rgba(120,146,172,0.45)", on ? 1.6 : 1);
            text(ctx, tr3(md[1], md[2], md[3]), x + 44, y + 16, { size: 10, align: "center", color: on ? "#1f6f9c" : C.ink2, weight: 700 });
            hit({ kind: "tap", key: "mat", value: md[0], x: x + 44, y: y + 12, r: 24 });
        });
        pillText(ctx, `sin α / sin β = ${fmt2(calc.n)}`, 24, 30, { size: 11, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g8_eye = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.88 });
        const base = h * 0.88, ex = 430, ey = h * 0.46;
        // глазное яблоко
        shadowed(ctx, 16, "rgba(40,60,90,0.26)", 6, () => {
            ctx.beginPath(); ctx.arc(ex, ey, 74, 0, Math.PI * 2);
            ctx.fillStyle = rad(ctx, ex - 24, ey - 28, 6, 104, [[0, "#ffffff"], [0.75, "#eef4fa"], [1, "#c9d8e6"]]);
            ctx.fill();
        });
        ctx.strokeStyle = "rgba(90,116,145,0.5)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(ex, ey, 74, 0, Math.PI * 2); ctx.stroke();
        // сетчатка
        ctx.strokeStyle = "#d9736b"; ctx.lineWidth = 7;
        ctx.beginPath(); ctx.arc(ex, ey, 66, Math.PI * 0.62, Math.PI * 1.38); ctx.stroke();
        text(ctx, tr3("сетчатка", "тор", "retina"), ex - 96, ey + 92, { size: 9.5, color: "#b4392f", weight: 700 });
        // роговица + хрусталик настройки
        const dptK = clamp((p.dpt - 40) / 20, 0, 1);
        ctx.beginPath(); ctx.ellipse(ex - 74, ey, 12 + dptK * 10, 30, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(170,215,240,0.75)"; ctx.fill();
        ctx.strokeStyle = "rgba(110,160,195,0.9)"; ctx.lineWidth = 2; ctx.stroke();
        // глазная ось и фокус
        const axLen = map(p.d, 25, 200, 60, 250);
        const objX = Math.max(36, ex - 78 - axLen);
        ctx.strokeStyle = "rgba(90,116,145,0.45)"; ctx.lineWidth = 1; ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(objX, ey); ctx.lineTo(ex + 66, ey); ctx.stroke(); ctx.setLineDash([]);
        // предмет (стрелка)
        arrow(ctx, objX, ey + 30, objX, ey - 20, "#3d5a78", 3);
        text(ctx, tr3("предмет", "зат", "object"), objX - 18, ey + 48, { size: 9.5, color: C.ink2, weight: 700 });
        // лучи
        const focusX = ex + map(Math.abs(calc.need - p.dpt), 0, 6, 62, 20);
        ctx.strokeStyle = "rgba(240,170,70,0.6)"; ctx.lineWidth = 1.3;
        [[-20, -1], [0, 0], [20, 1]].forEach(([oy, k]) => {
            ctx.beginPath(); ctx.moveTo(objX, ey + oy);
            ctx.lineTo(ex - 78, ey + oy * 0.35);
            ctx.lineTo(focusX, ey + k * 14); ctx.stroke();
        });
        // точка фокуса
        const sharp = Math.abs(calc.need - p.dpt) <= 0.4;
        ctx.beginPath(); ctx.arc(focusX, ey, 5, 0, Math.PI * 2);
        ctx.fillStyle = sharp ? "rgba(46,163,106,0.95)" : "rgba(217,130,43,0.9)"; ctx.fill();
        pillText(ctx, sharp ? tr3("резко", "анық", "sharp") : tr3("размыто", "бұлыңғыр", "blurred"), focusX + 16, ey - 26, { size: 10, color: sharp ? "#227a4d" : "#b4632a" });
        // мерная линейка до предмета
        ctx.strokeStyle = "rgba(60,110,160,0.5)"; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(objX, base - 26); ctx.lineTo(ex - 78, base - 26); ctx.stroke();
        for (let i = 0; i <= 5; i++) { const x = lerp(objX, ex - 78, i / 5); ctx.beginPath(); ctx.moveTo(x, base - 31); ctx.lineTo(x, base - 21); ctx.stroke(); }
        text(ctx, `d = ${p.d} см`, (objX + ex - 78) / 2, base - 36, { size: 10, align: "center", color: "#134a70", weight: 700 });
        handle(ctx, objX, ey - 30, "d", { kind: "drag", key: "d", axis: "x", x: objX, y: ey - 30, from: ex - 138, to: 60, min: 25, max: 200 });
        // ручка оптической силы
        handle(ctx, 700, 70, "D", { kind: "drag", key: "dpt", axis: "y", x: 700, y: 70, from: 130, to: 30, min: 40, max: 60 });
        gauge(ctx, 702, 186, 30, clamp((p.dpt - 40) / 20, 0, 1), "D", "дптр");
        pillText(ctx, `нужно D = ${fmt2(calc.need)} дптр`, 24, 30, { size: 11, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    /* ---------------------------- 9 класс ---------------------------- */

    SCENES.g9_speed = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const base = h * 0.86;
        // беговая дорожка
        fillRR(ctx, 0, base - 26, w, 60, 0, lin(ctx, 0, base - 26, 0, base + 34, [[0, "#e0795f"], [1, "#b9523c"]]));
        for (let x = 0; x < w; x += 52) { ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillRect(x, base - 26, 26, 2); }
        for (let x = 8; x < w; x += 52) { ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.fillRect(x, base + 6, 24, 2); }
        // разметка дистанции
        const sPx = map(p.s, 20, 200, 120, w - 70);
        const tx = 70;
        ctx.strokeStyle = "rgba(60,110,160,0.55)"; ctx.lineWidth = 1.6; ctx.setLineDash([7, 5]);
        ctx.beginPath(); ctx.moveTo(tx, base - 42); ctx.lineTo(sPx, base - 42); ctx.stroke(); ctx.setLineDash([]);
        [tx, sPx].forEach((x) => { ctx.fillStyle = "#fff"; ctx.fillRect(x - 2, base - 60, 4, 26); });
        pillText(ctx, `s = ${p.s} м`, (tx + sPx) / 2 - 24, base - 72, { size: 10.5, color: "#134a70" });
        // финишная арка
        steelBar(ctx, sPx, base - 118, 6, 96, 3);
        steelBar(ctx, sPx - 42, base - 122, 48, 8, 3);
        // бегун: бежит по дистанции в цикле
        const ph = (t * 0.012 * (10 / p.t)) % 1;
        const runX = lerp(tx, sPx, ph);
        contactShadow(ctx, runX, base - 6, 14, 4, 0.22);
        ctx.strokeStyle = "#26435f"; ctx.fillStyle = "#26435f"; ctx.lineWidth = 4; ctx.lineCap = "round";
        ctx.beginPath(); ctx.arc(runX, base - 62, 8, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(runX, base - 54); ctx.lineTo(runX, base - 26); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(runX, base - 48); ctx.lineTo(runX + 14, base - 40); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(runX, base - 26); ctx.lineTo(runX + 12, base - 4); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(runX, base - 26); ctx.lineTo(runX - 12, base - 4); ctx.stroke();
        // секундомер
        fillRR(ctx, 566, 26, 140, 78, 12, "#fdfefe");
        strokeRR(ctx, 566, 26, 140, 78, 12, "rgba(90,116,145,0.45)", 1.4);
        ctx.fillStyle = "rgba(190,225,205,0.85)"; ctx.fillRect(578, 38, 116, 30);
        text(ctx, `${fmt2(p.t)} с`, 636, 60, { size: 16, align: "center", color: "#1c5a41", weight: 800, family: "'Courier New', monospace" });
        text(ctx, tr3("секундомер", "секундомер", "stopwatch"), 636, 90, { size: 9.5, align: "center", color: C.soft, weight: 700 });
        handle(ctx, (tx + sPx) / 2, base - 42, "s", { kind: "drag", key: "s", axis: "x", x: (tx + sPx) / 2, y: base - 42, from: tx + 40, to: w - 90, min: 20, max: 200 });
        handle(ctx, 636, 112, "t", { kind: "drag", key: "t", axis: "y", x: 636, y: 112, from: 132, to: 26, min: 2, max: 20 });
        pillText(ctx, `v = ${fmt2(calc.v)} м/с`, 24, 32, { size: 12.5, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g9_accel = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const base = h * 0.86;
        // рельс
        fillRR(ctx, 0, base - 30, w, 14, 4, lin(ctx, 0, base - 30, 0, base - 16, [[0, "#eef3f9"], [1, "#a7b6c6"]]));
        for (let x = 12; x < w; x += 34) { fillRR(ctx, x, base - 16, 22, 8, 2, "#8c9cae"); }
        // платформа
        const aPx = clamp(map(p.v - p.v0, -10, 25, -60, 200), -60, 200);
        const carX = 280 + Math.sin(t * 0.02) * 30;
        contactShadow(ctx, carX, base - 34, 62, 8, 0.24);
        shadowed(ctx, 14, "rgba(40,60,90,0.26)", 6, () => {
            fillRR(ctx, carX - 62, base - 74, 124, 42, 8, lin(ctx, 0, base - 74, 0, base - 32, [[0, "#f7fafd"], [0.5, "#d6e0ea"], [1, "#9fb0c1"]]));
        });
        fillRR(ctx, carX - 40, base - 92, 80, 22, 6, "rgba(120,190,225,0.75)");
        strokeRR(ctx, carX - 40, base - 92, 80, 22, 6, "rgba(90,140,180,0.6)", 1);
        [[-40, 0], [40, 0]].forEach(([dx]) => {
            ctx.beginPath(); ctx.arc(carX + dx, base - 30, 9, 0, Math.PI * 2); ctx.fillStyle = "#5d6f80"; ctx.fill();
            ctx.beginPath(); ctx.arc(carX + dx, base - 30, 3.4, 0, Math.PI * 2); ctx.fillStyle = "#c9d6e2"; ctx.fill();
        });
        // стрелки ускорения и скорости
        arrow(ctx, carX - 62, base - 106, carX - 62 - 30 - aPx * 0.35, base - 106, "#c2483c", 3, "a");
        arrow(ctx, carX + 62, base - 106, carX + 62 + 24 + p.v * 3, base - 106, "#2f7db8", 3, "v");
        // шкала скорости
        ctx.strokeStyle = "rgba(60,110,160,0.5)"; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(60, base + 14); ctx.lineTo(w - 60, base + 14); ctx.stroke();
        for (let i = 0; i <= 5; i++) { const x = 60 + i * (w - 120) / 5; ctx.beginPath(); ctx.moveTo(x, base + 8); ctx.lineTo(x, base + 20); ctx.stroke(); }
        const vmax = 25;
        const mk = 60 + clamp(p.v / vmax, 0, 1) * (w - 120);
        ctx.beginPath(); ctx.arc(mk, base + 14, 6, 0, Math.PI * 2); ctx.fillStyle = "#2f7db8"; ctx.fill();
        text(ctx, `v = ${p.v} м/с`, mk, base + 34, { size: 10, align: "center", color: "#134a70", weight: 700 });
        // график v(t)
        const gx = 566, gy = 40;
        fillRR(ctx, gx - 10, gy - 10, 168, 96, 10, "rgba(255,255,255,0.92)");
        strokeRR(ctx, gx - 10, gy - 10, 168, 96, 10, "rgba(90,116,145,0.4)", 1.2);
        ctx.strokeStyle = "rgba(90,116,145,0.5)"; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(gx + 4, gy + 72); ctx.lineTo(gx + 148, gy + 72); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(gx + 4, gy + 72); ctx.lineTo(gx + 4, gy + 4); ctx.stroke();
        const slope = clamp((p.v - p.v0) / p.t, -6, 12);
        ctx.strokeStyle = "#c2483c"; ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.moveTo(gx + 4, gy + 72 - clamp(p.v0 / 25, 0, 1) * 60);
        ctx.lineTo(gx + 140, gy + 72 - clamp(p.v / 25, 0, 1) * 60); ctx.stroke();
        text(ctx, "v(t)", gx + 112, gy + 16, { size: 9.5, color: C.soft, weight: 700 });
        text(ctx, `a = ${fmt2(calc.a)} м/с²`, gx + 74, gy + 100, { size: 10.5, align: "center", color: calc.pass ? "#227a4d" : "#b4632a", weight: 800 });
        handle(ctx, carX - 62, base - 106, "v₀", { kind: "drag", key: "v0", axis: "y", x: carX - 62, y: base - 106, from: base - 80, to: base - 150, min: 0, max: 10 });
        handle(ctx, carX + 62, base - 106, "v", { kind: "drag", key: "v", axis: "y", x: carX + 62, y: base - 106, from: base - 80, to: base - 150, min: 5, max: 25 });
        handle(ctx, carX + 110, base - 60, "t", { kind: "drag", key: "t", axis: "x", x: carX + 110, y: base - 60, from: carX + 80, to: carX + 240, min: 2, max: 10 });
        pillText(ctx, `a = Δv/Δt`, 24, 32, { size: 11, color: "#1f6f9c" });
    };

    SCENES.g9_newton2 = (ctx, w, h, p, calc, t) => {
        spaceBackdrop(ctx, w, h, t);
        const cy = h * 0.52, cx = w * 0.44;
        // капсула
        const bodyW = map(p.m, 0.5, 5, 90, 150);
        shadowed(ctx, 16, "rgba(30,60,100,0.3)", 8, () => {
            fillRR(ctx, cx - bodyW / 2, cy - 42, bodyW, 84, 26, lin(ctx, 0, cy - 42, 0, cy + 42, [[0, "#ffffff"], [0.45, "#d5e0ea"], [1, "#8fa2b5"]]));
        });
        strokeRR(ctx, cx - bodyW / 2, cy - 42, bodyW, 84, 26, "rgba(70,92,116,0.45)", 1.4);
        ctx.beginPath(); ctx.ellipse(cx, cy - 6, bodyW * 0.22, 12, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(110,178,220,0.8)"; ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 2; ctx.stroke();
        // маршевый двигатель + пламя
        steelBar(ctx, cx + bodyW / 2 - 6, cy - 18, 26, 36, 6);
        flameShape(ctx, cx + bodyW / 2 + 34, cy + 4, 46 + p.f * 2.4, 26, t);
        lampGlow(ctx, cx + bodyW / 2 + 30, cy, 22, 0.6);
        // стрелка силы
        const fk = clamp(p.f / 20, 0.1, 1);
        arrow(ctx, cx - bodyW / 2 - 6, cy - 70, cx - bodyW / 2 - 16 - 50 - fk * 90, cy - 70, "#c2483c", 3.2, `F = ${p.f} Н`);
        // «блоки массы»
        text(ctx, `m = ${p.m} кг`, cx, cy + 68, { size: 11, align: "center", color: "#134a70", weight: 800 });
        // шкала ускорения
        const bx = 520, by = 60;
        fillRR(ctx, bx, by, 200, 88, 12, "rgba(255,255,255,0.9)");
        strokeRR(ctx, bx, by, 200, 88, 12, "rgba(90,116,145,0.4)", 1.2);
        text(ctx, "a = F / m", bx + 100, by + 22, { size: 10.5, align: "center", color: C.soft, weight: 700 });
        const frac = clamp(calc.a / 8, 0, 1);
        fillRR(ctx, bx + 16, by + 36, 168, 14, 7, "rgba(120,146,172,0.22)");
        fillRR(ctx, bx + 16, by + 36, 168 * frac, 14, 7, lin(ctx, bx + 16, 0, bx + 184, 0, [[0, "#8fd0a8"], [1, "#2ea36a"]]));
        text(ctx, `${fmt2(calc.a)} м/с²`, bx + 100, by + 74, { size: 14, align: "center", color: calc.pass ? "#227a4d" : "#b4632a", weight: 800 });
        // разгонные штрихи
        for (let i = 0; i < 4; i++) {
            const ph = ((t * 0.02 + i * 0.25) % 1);
            ctx.strokeStyle = `rgba(255,255,255,${0.5 * (1 - ph)})`; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(cx - bodyW / 2 - 90 - ph * 60, cy + (i - 1.5) * 18); ctx.lineTo(cx - bodyW / 2 - 60 - ph * 60, cy + (i - 1.5) * 18); ctx.stroke();
        }
        handle(ctx, cx - bodyW / 2 - 16, cy - 70, "F", { kind: "drag", key: "f", axis: "y", x: cx - bodyW / 2 - 16, y: cy - 70, from: cy - 20, to: 30, min: 2, max: 20 });
        handle(ctx, cx + bodyW / 2 + 34, cy + 66, "m", { kind: "drag", key: "m", axis: "y", x: cx + bodyW / 2 + 34, y: cy + 66, from: cy + 90, to: cy + 10, min: 0.5, max: 5 });
        pillText(ctx, `F = ${p.f} Н · m = ${p.m} кг`, 24, 32, { size: 11, color: "#1f6f9c" });
    };

    SCENES.g9_fall = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const base = h * 0.88;
        // капсула сверху
        const capX = 300;
        fillRR(ctx, capX - 90, 16, 190, 34, 12, lin(ctx, 0, 16, 0, 50, [[0, "#ffffff"], [0.5, "#d9e3ed"], [1, "#a2b2c2"]]));
        strokeRR(ctx, capX - 90, 16, 190, 34, 12, "rgba(70,92,116,0.4)", 1.2);
        fillRR(ctx, capX - 56, 24, 60, 16, 8, "rgba(120,190,225,0.8)");
        text(ctx, tr3("капсула", "капсула", "capsule"), capX + 16, 40, { size: 10, color: C.ink2, weight: 700 });
        // шкала высоты
        const hPx = map(p.h, 5, 45, 100, 176);
        const topY = base - hPx;
        ctx.strokeStyle = "rgba(60,110,160,0.5)"; ctx.lineWidth = 1.4; ctx.setLineDash([7, 5]);
        ctx.beginPath(); ctx.moveTo(120, topY); ctx.lineTo(120, base); ctx.stroke(); ctx.setLineDash([]);
        for (let i = 0; i <= 4; i++) {
            const y = lerp(topY, base, i / 4);
            ctx.strokeStyle = "rgba(60,110,160,0.6)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(112, y); ctx.lineTo(128, y); ctx.stroke();
        }
        text(ctx, `h = ${p.h} м`, 90, topY - 8, { size: 10.5, color: "#134a70", weight: 700 });
        // зонд падает
        const cyc = (t * 0.03) % 1;
        const probeY = lerp(topY, base - 22, cyc * cyc);
        contactShadow(ctx, capX + 40, base - 2, 12, 4, 0.2);
        shadowed(ctx, 10, "rgba(40,60,90,0.26)", 4, () => {
            fillRR(ctx, capX + 28, probeY, 24, 20, 8, lin(ctx, 0, probeY, 0, probeY + 20, [[0, "#ffe9a8"], [1, "#d9a94a"]]));
        });
        // парашют-маркер цели
        ctx.strokeStyle = "rgba(46,163,106,0.75)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(capX + 40, topY + 4); ctx.lineTo(capX + 40, base - 6); ctx.stroke();
        fillRR(ctx, capX + 8, topY, 64, 8, 4, "rgba(46,163,106,0.22)");
        // секундомер
        fillRR(ctx, 520, 40, 168, 92, 12, "#fdfefe");
        strokeRR(ctx, 520, 40, 168, 92, 12, "rgba(90,116,145,0.45)", 1.4);
        ctx.fillStyle = "rgba(190,225,205,0.85)"; ctx.fillRect(532, 52, 144, 34);
        text(ctx, `${fmt2(p.h)} м`, 604, 76, { size: 17, align: "center", color: "#1c5a41", weight: 800, family: "'Courier New', monospace" });
        text(ctx, tr3("высота сброса", "тастау биіктігі", "drop height"), 604, 102, { size: 9.5, align: "center", color: C.soft, weight: 700 });
        text(ctx, `t = ${fmt2(calc.t)} с`, 604, 122, { size: 12, align: "center", color: calc.pass ? "#227a4d" : "#b4632a", weight: 800 });
        handle(ctx, capX + 40, topY + 4, "h", { kind: "drag", key: "h", axis: "y", x: capX + 40, y: topY + 4, from: base - 40, to: 70, min: 5, max: 45 });
        dragChip(ctx, 150, 62, tr3("тяни зонд — высота сброса", "зондты тарт", "drag the probe"));
        pillText(ctx, `t = √(2h/g)`, 24, 32, { size: 11, color: "#1f6f9c" });
    };

    SCENES.g9_energy = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const base = h * 0.86;
        // наклонная плоскость
        const rampX0 = 90, rampX1 = 470;
        const rampH = map(p.h, 1, 10, 40, 170);
        const topY = base - rampH;
        ctx.beginPath();
        ctx.moveTo(rampX0, base); ctx.lineTo(rampX0, topY); ctx.lineTo(rampX1, base); ctx.closePath();
        ctx.fillStyle = lin(ctx, 0, topY, 0, base, [[0, "#e6edf5"], [1, "#b7c5d3"]]); ctx.fill();
        ctx.strokeStyle = "rgba(70,92,116,0.45)"; ctx.lineWidth = 1.6; ctx.stroke();
        // высота
        ctx.strokeStyle = "rgba(60,110,160,0.6)"; ctx.lineWidth = 1.4; ctx.setLineDash([7, 5]);
        ctx.beginPath(); ctx.moveTo(rampX0 - 26, topY); ctx.lineTo(rampX0 - 26, base); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.moveTo(rampX0 - 32, topY); ctx.lineTo(rampX0 - 20, topY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(rampX0 - 32, base); ctx.lineTo(rampX0 - 20, base); ctx.stroke();
        text(ctx, `h = ${p.h} м`, rampX0 - 66, (topY + base) / 2, { size: 10.5, color: "#134a70", weight: 700 });
        // груз скатывается
        const cyc = (t * 0.012) % 1;
        const pos = Math.min(0.98, cyc);
        const gx = lerp(rampX0 + 16, rampX1 - 26, pos);
        const gy = lerp(topY + 10, base - 10, pos);
        contactShadow(ctx, gx, gy + 12, 16, 5, 0.22);
        shadowed(ctx, 12, "rgba(40,60,90,0.28)", 5, () => {
            ctx.beginPath(); ctx.arc(gx, gy, 14, 0, Math.PI * 2);
            ctx.fillStyle = rad(ctx, gx - 5, gy - 6, 2, 18, [[0, "#ffffff"], [0.55, "#9fb0c1"], [1, "#5d7183"]]);
            ctx.fill();
        });
        text(ctx, `m = ${p.m} кг`, gx - 14, gy + 32, { size: 10, align: "center", color: "#134a70", weight: 800 });
        // столб энергии
        const bx = 560, by = base - 150;
        fillRR(ctx, bx, by, 150, 150, 10, "rgba(255,255,255,0.9)");
        strokeRR(ctx, bx, by, 150, 150, 10, "rgba(90,116,145,0.4)", 1.2);
        text(ctx, tr3("энергия", "энергия", "energy"), bx + 75, by + 20, { size: 10.5, align: "center", color: C.soft, weight: 700 });
        const eK = clamp(calc.e / 180, 0, 1);
        const potK = Math.max(0, 1 - pos);
        fillRR(ctx, bx + 20, by + 136, 46, -(136 - 30) * potK, 5, "rgba(47,125,184,0.75)");
        fillRR(ctx, bx + 84, by + 136, 46, -(136 - 30) * (1 - potK) * clamp(1 - Math.abs(calc.e / 150 - 1) * 0.06, 0.2, 1), 5, "rgba(46,163,106,0.8)");
        text(ctx, "Eₖ", bx + 43, by + 148, { size: 9.5, align: "center", color: "#1f6f9c", weight: 700 });
        text(ctx, "Eₚ", bx + 107, by + 148, { size: 9.5, align: "center", color: "#227a4d", weight: 700 });
        text(ctx, `${fmt2(calc.e)} Дж`, bx + 75, by + 170, { size: 13, align: "center", color: calc.pass ? "#227a4d" : "#b4632a", weight: 800 });
        handle(ctx, gx, gy - 24, "h", { kind: "drag", key: "h", axis: "y", x: gx, y: gy - 24, from: base - 20, to: topY - 40, min: 1, max: 10 });
        handle(ctx, rampX1 + 26, base - 20, "m", { kind: "drag", key: "m", axis: "x", x: rampX1 + 26, y: base - 20, from: rampX1 + 10, to: rampX1 + 120, min: 0.5, max: 5 });
        pillText(ctx, "E = m·g·h", 24, 32, { size: 11, color: "#1f6f9c" });
    };

    SCENES.g9_resonance = (ctx, w, h, p, calc, t) => {
        labRoom(ctx, w, h, t, { horizon: 0.9 });
        const base = h * 0.9;
        // опоры моста
        steelBar(ctx, 120, base - 96, 22, 96, 4);
        steelBar(ctx, 520, base - 96, 22, 96, 4);
        // пролёт моста (колеблется)
        const amp = calc.amp * 14;
        const wob = Math.sin(t * 0.06) * amp;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(131, base - 96);
        ctx.quadraticCurveTo(336, base - 96 + wob * 1.5, 531, base - 96);
        ctx.lineWidth = 7; ctx.strokeStyle = "#9aa9ba"; ctx.stroke();
        ctx.lineWidth = 4; ctx.strokeStyle = "#c3cfdb"; ctx.stroke();
        ctx.restore();
        // перила
        ctx.strokeStyle = "rgba(120,146,172,0.7)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(131, base - 118); ctx.quadraticCurveTo(336, base - 118 + wob * 1.5, 531, base - 118); ctx.stroke();
        for (let i = 1; i < 9; i++) {
            const x = 131 + i * 50, k = Math.sin((i / 9) * Math.PI);
            ctx.beginPath(); ctx.moveTo(x, base - 96 + wob * 1.5 * k); ctx.lineTo(x, base - 118 + wob * 1.5 * k); ctx.stroke();
        }
        // генератор толчков
        const gx = 100;
        fillRR(ctx, gx - 54, base - 46, 108, 44, 8, lin(ctx, 0, base - 46, 0, base - 2, [[0, "#f7fafd"], [1, "#b9c6d4"]]));
        strokeRR(ctx, gx - 54, base - 46, 108, 44, 8, "rgba(70,92,116,0.4)", 1.2);
        const armY = base - 52 - Math.abs(Math.sin(t * 0.06)) * 10 * clamp(calc.amp + 0.2, 0, 1.2);
        steelBar(ctx, gx - 5, armY, 10, base - 50 - armY + 4, 3);
        brassKnob(ctx, gx, base - 24, 9, t * 0.02);
        text(ctx, tr3("вибростенд", "вибростенд", "shaker"), gx, base - 56, { size: 9.5, align: "center", color: C.ink2, weight: 700 });
        // шкала амплитуды + резонансная кривая
        const bx = 590, by = 34, bw = 146, bh = 108;
        fillRR(ctx, bx, by, bw, bh, 10, "rgba(255,255,255,0.92)");
        strokeRR(ctx, bx, by, bw, bh, 10, "rgba(90,116,145,0.4)", 1.2);
        ctx.strokeStyle = "rgba(90,116,145,0.5)"; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(bx + 10, by + bh - 14); ctx.lineTo(bx + bw - 10, by + bh - 14); ctx.stroke();
        // кривая
        ctx.strokeStyle = "rgba(47,125,184,0.55)"; ctx.lineWidth = 1.8;
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
            const f = 4 + (i / 60) * 8;
            const a2 = 1 / Math.sqrt(1 + Math.pow((f - p.f0) / 0.35, 2));
            const x = bx + 10 + (i / 60) * (bw - 20);
            const y = by + bh - 14 - a2 * (bh - 30);
            i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
        // рабочая точка
        const fk = clamp((p.f - 4) / 8, 0, 1);
        const px2 = bx + 10 + fk * (bw - 20);
        const py2 = by + bh - 14 - calc.amp * (bh - 30);
        ctx.beginPath(); ctx.arc(px2, py2, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = calc.pass ? "rgba(46,163,106,0.95)" : "rgba(207,74,74,0.9)"; ctx.fill();
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.6; ctx.stroke();
        text(ctx, `A ≈ ${(calc.amp * 100).toFixed(0)} %`, bx + bw / 2, by + 16, { size: 10, align: "center", color: C.ink2, weight: 700 });
        text(ctx, `f₀ = ${p.f0} Гц`, bx + 8, by + bh + 18, { size: 9.5, color: C.soft, weight: 700 });
        // ручки
        handle(ctx, bx + bw / 2, by + bh + 26, "f", { kind: "drag", key: "f", axis: "x", x: bx + bw / 2, y: by + bh + 26, from: bx + 10, to: bx + bw - 10, min: 2, max: 12 });
        handle(ctx, 90, base - 118, "f₀", { kind: "drag", key: "f0", axis: "x", x: 90, y: base - 118, from: 70, to: 220, min: 4, max: 9 });
        pillText(ctx, `f = ${fmt2(p.f)} Гц`, 24, 32, { size: 11.5, color: calc.pass ? "#227a4d" : "#b4632a" });
    };

    SCENES.g9_emwave = (ctx, w, h, p, calc, t) => {
        skyBackdrop(ctx, w, h, t);
        const base = h * 0.86;
        // мачта антенны
        const mx = 150;
        ctx.beginPath();
        ctx.moveTo(mx - 14, base); ctx.lineTo(mx, 34); ctx.lineTo(mx + 14, base); ctx.closePath();
        ctx.fillStyle = lin(ctx, mx - 14, 0, mx + 14, 0, [[0, "#c3cfdb"], [0.45, "#f4f8fc"], [1, "#9aa9ba"]]); ctx.fill();
        ctx.strokeStyle = "rgba(70,92,116,0.4)"; ctx.lineWidth = 1.2; ctx.stroke();
        for (let i = 1; i < 7; i++) {
            const y = 34 + i * 26, k = i / 7;
            ctx.strokeStyle = "rgba(90,116,145,0.55)"; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(mx - 14 * k, y); ctx.lineTo(mx + 14 * k, y); ctx.stroke();
        }
        // параболическая тарелка
        ctx.beginPath(); ctx.arc(mx, 40, 26, Math.PI * 0.15, Math.PI * 0.85, true);
        ctx.fillStyle = "rgba(230,238,246,0.95)"; ctx.fill();
        ctx.strokeStyle = "rgba(120,146,172,0.8)"; ctx.lineWidth = 2; ctx.stroke();
        // волны
        const lamPx = map(p.lam, 0.5, 5, 34, 128);
        for (let k = 0; k < 3; k++) {
            ctx.strokeStyle = `rgba(47,125,184,${0.5 - k * 0.12})`; ctx.lineWidth = 1.8;
            ctx.beginPath();
            for (let x = 0; x <= 520; x += 4) {
                const y = 70 + k * 34 + Math.sin((x / lamPx) * Math.PI * 2 - t * 0.06) * 11;
                x ? ctx.lineTo(mx + 30 + x, y) : ctx.moveTo(mx + 30, y);
            }
            ctx.stroke();
        }
        // длина волны — мерная скоба
        const wx = mx + 90;
        ctx.strokeStyle = "rgba(207,74,74,0.85)"; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(wx, 168); ctx.lineTo(wx + lamPx, 168); ctx.stroke();
        [[wx, 1], [wx + lamPx, -1]].forEach(([x]) => {
            ctx.beginPath(); ctx.moveTo(x, 162); ctx.lineTo(x, 174); ctx.stroke();
        });
        pillText(ctx, `λ = ${fmt2(p.lam)} м`, wx + lamPx / 2 - 22, 188, { size: 10.5, color: "#a4342c" });
        // приёмник
        const rx = clamp(mx + 470, 560, w - 60);
        steelBar(ctx, rx, base - 120, 6, 120, 3);
        fillRR(ctx, rx - 30, base - 148, 66, 30, 8, lin(ctx, 0, base - 148, 0, base - 118, [[0, "#ffffff"], [1, "#c3cfdb"]]));
        strokeRR(ctx, rx - 30, base - 148, 66, 30, 8, "rgba(70,92,116,0.4)", 1.2);
        fillRR(ctx, rx - 14, base - 144, 14, 8, 3, calc.pass ? "rgba(46,163,106,0.9)" : "rgba(180,200,215,0.9)");
        // шкала диапазона
        const bx = 500, by = 26;
        fillRR(ctx, bx, by, 236, 74, 10, "rgba(255,255,255,0.92)");
        strokeRR(ctx, bx, by, 236, 74, 10, "rgba(90,116,145,0.4)", 1.2);
        text(ctx, "FM 88–108 МГц", bx + 12, by + 18, { size: 9.5, color: C.soft, weight: 700 });
        const barX = bx + 12, barW = 212;
        fillRR(ctx, barX, by + 28, barW, 12, 6, "rgba(120,146,172,0.22)");
        const bandA = barX + barW * (88 - 60) / 60, bandB = barX + barW * (108 - 60) / 60;
        fillRR(ctx, bandA, by + 28, bandB - bandA, 12, 6, "rgba(46,163,106,0.35)");
        const nk = barX + clamp((calc.nu - 60) / 60, 0, 1) * barW;
        ctx.beginPath(); ctx.arc(nk, by + 34, 6, 0, Math.PI * 2);
        ctx.fillStyle = calc.pass ? "#2ea36a" : "#cf4a4a"; ctx.fill();
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.6; ctx.stroke();
        text(ctx, `ν = ${fmt2(calc.nu)} МГц`, nk, by + 64, { size: 10, align: "center", color: calc.pass ? "#227a4d" : "#a4342c", weight: 800 });
        handle(ctx, wx + lamPx, 168, "λ", { kind: "drag", key: "lam", axis: "x", x: wx + lamPx, y: 168, from: wx + 20, to: mx + 560, min: 0.5, max: 5 });
        pillText(ctx, `ν = c/λ`, 24, 32, { size: 11, color: "#1f6f9c" });
    };

    SCENES.g9_binding = (ctx, w, h, p, calc, t) => {
        spaceBackdrop(ctx, w, h, t);
        const cx = 290, cy = h * 0.54;
        // ядро: протоны и нейтроны
        const positions = [];
        const rGen = rnd(7);
        for (let i = 0; i < 13; i++) {
            const a = i * 2.399, rr2 = 12 + Math.sqrt(i) * 9;
            positions.push([Math.cos(a) * rr2, Math.sin(a) * rr2 * 0.86]);
        }
        positions.forEach(([dx, dy], i) => {
            const jitter = Math.sin(t * 0.01 + i) * 1.6;
            ctx.beginPath(); ctx.arc(cx + dx + jitter, cy + dy + jitter, 11, 0, Math.PI * 2);
            ctx.fillStyle = i % 2
                ? rad(ctx, cx + dx - 3, cy + dy - 3, 1, 12, [[0, "#ffd9c9"], [1, "#c2483c"]])
                : rad(ctx, cx + dx - 3, cy + dy - 3, 1, 12, [[0, "#dbe9f7"], [1, "#4a7ba8"]]);
            ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,0.55)"; ctx.lineWidth = 1.2; ctx.stroke();
        });
        text(ctx, tr3("ядро", "ядро", "nucleus"), cx, cy + 86, { size: 10.5, align: "center", color: C.ink2, weight: 700 });
        // дефект масс — весы
        const sx = 560, sy = h * 0.36;
        ctx.strokeStyle = "#8c9cae"; ctx.lineWidth = 4; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(sx, sy - 46); ctx.lineTo(sx, sy + 58); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx - 74, sy - 46); ctx.lineTo(sx + 74, sy - 46); ctx.stroke();
        ctx.lineWidth = 2;
        [[-62, 1], [62, -1]].forEach(([dx, sgn]) => {
            const drop = clamp(calc.e / 90, 0, 1) * 12 * sgn;
            ctx.beginPath(); ctx.moveTo(sx + dx, sy - 46); ctx.lineTo(sx + dx, sy - 6 + drop); ctx.stroke();
            fillRR(ctx, sx + dx - 30, sy - 6 + drop, 60, 16, 5, "rgba(255,255,255,0.95)");
            strokeRR(ctx, sx + dx - 30, sy - 6 + drop, 60, 16, 5, "rgba(90,116,145,0.5)", 1);
        });
        text(ctx, "Z·mₚ + N·mₙ", sx - 62, sy + 26, { size: 8.8, align: "center", color: C.soft, weight: 700 });
        text(ctx, "M ядра", sx + 62, sy + 26, { size: 8.8, align: "center", color: C.soft, weight: 700 });
        text(ctx, `Δm = ${p.dm.toFixed(3)} а.е.м.`, sx, sy + 52, { size: 10.5, align: "center", color: "#134a70", weight: 800 });
        // энергия связи — шкала
        const bx = 470, by = 190;
        fillRR(ctx, bx, by, 250, 34, 10, "rgba(255,255,255,0.9)");
        strokeRR(ctx, bx, by, 250, 34, 10, "rgba(90,116,145,0.4)", 1.2);
        fillRR(ctx, bx + 8, by + 10, 234 * clamp(calc.e / 90, 0, 1), 14, 7, lin(ctx, bx + 8, 0, bx + 242, 0, [[0, "#8fd0a8"], [1, "#2ea36a"]]));
        text(ctx, `E = ${fmt2(calc.e)} МэВ`, bx + 125, by + 56, { size: 12, align: "center", color: calc.pass ? "#227a4d" : "#b4632a", weight: 800 });
        // ручка дефекта масс
        handle(ctx, sx + 100, sy - 6, "Δm", { kind: "drag", key: "dm", axis: "y", x: sx + 100, y: sy - 6, from: sy + 44, to: sy - 60, min: 0.01, max: 0.3 });
        pillText(ctx, "E = Δm · 931,5 МэВ", 24, 32, { size: 11, color: "#1f6f9c" });
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
            /* Светлая лабораторная палитра — только в светлой теме */
            html[data-theme="light"] #pq-sim89-modal .pq-s89-dialog {
                background: linear-gradient(168deg, #ffffff 0%, #f4f8fd 52%, #eaf1f9 100%) !important;
                border: 1px solid rgba(120, 152, 186, 0.45) !important;
                box-shadow: 0 30px 80px rgba(28, 48, 76, 0.35) !important;
                color: #152a40 !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-sim89-kicker { color: #2f7db8 !important; }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-dialog h2 { color: #10263c !important; }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-dialog p { color: #59748f !important; }
            html[data-theme="light"] #pq-sim89-modal .pq-td-x {
                background: rgba(20, 40, 70, 0.06) !important;
                border: 1px solid rgba(120, 152, 186, 0.5) !important;
                color: #3d5a78 !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-canvas {
                background: #eef4fb !important;
                border: 1px solid rgba(120, 152, 186, 0.45) !important;
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 10px 26px rgba(40, 64, 96, 0.14);
                border-radius: 18px !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-telemetry {
                background: #ffffff !important;
                border: 1px solid rgba(120, 152, 186, 0.42) !important;
                color: #1f6f9c !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-telemetry.pass {
                background: #f0fbf5 !important;
                border-color: rgba(46, 163, 106, 0.55) !important;
                color: #1d7a4c !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-ctrl {
                background: rgba(255, 255, 255, 0.9) !important;
                border: 1px solid rgba(120, 152, 186, 0.32) !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-ctrl label { color: #26415c !important; }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-ctrl select {
                background: #ffffff !important;
                color: #152a40 !important;
                border: 1px solid rgba(120, 152, 186, 0.5) !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-ctrl input[type=range] { accent-color: #2f7db8; }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-verify {
                background: rgba(226, 240, 252, 0.85) !important;
                border: 1px solid rgba(120, 152, 186, 0.42) !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-verify div { color: #26415c !important; }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-verify input {
                background: #ffffff !important;
                color: #152a40 !important;
                border: 1px solid rgba(120, 152, 186, 0.55) !important;
            }
            html[data-theme="light"] #pq-sim89-modal .pq-s89-verify span { color: #a9762a !important; }
            html[data-theme="light"] #pq-sim89-modal .btn-primary {
                background: linear-gradient(135deg, #3a9ad9, #2f6fb0) !important;
                border-color: transparent !important;
                color: #fff !important;
            }

            /* Секция «Визуальные лаборатории» на экране уровней */
            html[data-theme="light"] #pq-sim89-section {
                background: linear-gradient(155deg, #ffffff 0%, #f2f8ff 100%);
                border: 1px solid rgba(120, 152, 186, 0.34);
                box-shadow: 0 14px 36px rgba(28, 48, 76, 0.10);
            }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-head h2 { color: #10263c; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-head p { color: #4b6683; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-kicker { color: #2f7db8; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-prog {
                background: rgba(47, 125, 184, 0.10);
                border: 1px solid rgba(47, 125, 184, 0.28);
                color: #1d6fb8;
            }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card,
            html[data-theme="light"] #pq-sim89-modal .pq-sim89-card {
                background: #ffffff;
                border: 1px solid rgba(120, 152, 186, 0.38);
                color: #152a40;
                box-shadow: 0 10px 26px rgba(28, 48, 76, 0.08);
            }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card:hover { border-color: #2f7db8; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card b { color: #0f2740; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card small { color: #4b6683; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card-top { color: #2f7db8; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card-icon { filter: saturate(1.05); }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card-chapter { color: #2f7db8; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-topic-head {
                background: rgba(47, 125, 184, 0.08);
                border: 1px solid rgba(47, 125, 184, 0.26);
            }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-topic-head b { color: #10263c; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-topic-head span { color: #1d6fb8; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card-tip {
                background: rgba(47, 125, 184, 0.08);
                border: 1px solid rgba(47, 125, 184, 0.2);
                color: #33587c !important;
            }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card em { color: #1d6fb8; }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card.done {
                background: #f2fbf5;
                border-color: rgba(34, 197, 94, 0.5);
            }
            html[data-theme="light"] #pq-sim89-section .pq-sim89-card.done em { color: #178a4a; }

            /* Подсказки-«чипы» под сценой — читаемы в обеих темах */
            .pq-sim89-hint {
                display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
                margin: 8px 0 2px; font-size: 11.5px; color: var(--text-dim, #46688c);
            }
            .pq-sim89-hint span {
                padding: 4px 10px; border-radius: 999px; background: rgba(47,125,184,0.1);
                border: 1px solid rgba(47,125,184,0.24); font-weight: 700;
                color: var(--text, #1a2942);
            }
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
