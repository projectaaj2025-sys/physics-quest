/* ============================================================
   PQ LAB SCENES — тематические живые установки для мини-игр.
   Каждая сцена рисует свой физический процесс и реагирует на
   детали/ручки workbench. Общими остаются только рамка и приборы.
   ============================================================ */
(function () {
    "use strict";

    function lang() {
        return (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    }
    function tr(ru, kk, en) {
        const L = lang();
        return L === "kk" ? kk : L === "en" ? en : ru;
    }
    function esc(value) {
        return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function titleOf(cfg) {
        const L = lang();
        return (L === "kk" && cfg.titleKk) || (L === "en" && cfg.titleEn) || cfg.title || tr("Физическая установка", "Физикалық қондырғы", "Physics apparatus");
    }
    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    const SCENES = {
        heat: `
            <path d="M18 125H602" class="pqs-bench"/>
            <g class="pqs-source-hot">
                <path d="M45 28h72l-7 72H52z" class="pqs-glass"/>
                <path d="M52 66h58l-4 30H56z" class="pqs-water-hot"/>
                <path d="M65 19c-8-9 8-10 0-19M88 19c-8-9 8-10 0-19" class="pqs-steam pqs-anim"/>
                <text x="62" y="52" class="pqs-svg-label">70°</text>
            </g>
            <g class="pqs-source-cold">
                <path d="M145 28h72l-7 72h-58z" class="pqs-glass"/>
                <path d="M153 72h56l-4 24h-48z" class="pqs-water-cold"/>
                <text x="163" y="52" class="pqs-svg-label">20°</text>
            </g>
            <path d="M117 42c34 3 29 20 58 27M217 42c24 5 17 19-5 28" class="pqs-water-stream pqs-anim"/>
            <g class="pqs-calorimeter">
                <path d="M239 29h142l-9 91H248z" class="pqs-glass pqs-glass-strong"/>
                <path d="M250 77h120l-5 39H255z" class="pqs-water-mix"/>
                <path d="M235 29h150M248 120h125" class="pqs-metal-line"/>
                <g class="pqs-bubbles pqs-anim">
                    <circle cx="278" cy="94" r="3"/><circle cx="310" cy="105" r="2.5"/><circle cx="342" cy="88" r="3.5"/>
                </g>
            </g>
            <g class="pqs-thermometer">
                <rect x="405" y="20" width="17" height="90" rx="8" class="pqs-glass-strong"/>
                <rect x="410" y="44" width="7" height="58" rx="3" class="pqs-mercury"/>
                <circle cx="413.5" cy="105" r="12" class="pqs-mercury-dot"/>
                <path d="M426 34h9M426 51h6M426 68h9M426 85h6" class="pqs-ticks"/>
            </g>
            <g transform="translate(475 36)">
                <rect width="104" height="65" rx="12" class="pqs-instrument"/>
                <text x="52" y="23" text-anchor="middle" class="pqs-svg-label">Q = cmΔt</text>
                <text x="52" y="48" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text>
            </g>`,
        melting: `
            <path d="M18 125H602" class="pqs-bench"/>
            <g class="pqs-heater">
                <rect x="83" y="103" width="170" height="19" rx="7" class="pqs-metal"/>
                <path d="M110 103c12-14 24 0 36-14s24 0 36-14 24 0 36-14 24 0 36-14" class="pqs-heating-coil"/>
                <path d="M143 99c-14-16 10-22 0-39 23 13 25 25 13 39z" class="pqs-flame pqs-anim"/>
                <path d="M181 99c-12-13 8-19 0-32 19 11 20 21 11 32z" class="pqs-flame pqs-flame-small pqs-anim"/>
            </g>
            <path d="M102 17h130l-10 75H112z" class="pqs-glass pqs-glass-strong"/>
            <path d="M113 66h108l-5 23h-98z" class="pqs-melt-water"/>
            <g class="pqs-ice">
                <rect x="128" y="42" width="35" height="31" rx="5" transform="rotate(-8 145 58)"/>
                <rect x="164" y="35" width="38" height="36" rx="5" transform="rotate(7 183 53)"/>
                <path d="M133 48l25 18M170 42l25 22" class="pqs-ice-shine"/>
            </g>
            <g class="pqs-thermometer" transform="translate(202 -2)">
                <rect x="405" y="20" width="17" height="90" rx="8" class="pqs-glass-strong"/>
                <rect x="410" y="60" width="7" height="42" rx="3" class="pqs-mercury"/>
                <circle cx="413.5" cy="105" r="12" class="pqs-mercury-dot"/>
            </g>
            <g transform="translate(470 34)">
                <rect width="112" height="68" rx="12" class="pqs-instrument"/>
                <text x="56" y="24" text-anchor="middle" class="pqs-svg-label">λ = Q / m</text>
                <text x="56" y="50" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text>
            </g>`,
        ohm: `
            <path d="M70 105V34h180M400 34h125v71H70" class="pqs-wire"/>
            <g class="pqs-battery" transform="translate(47 62)">
                <rect width="48" height="45" rx="7"/><path d="M15 12v21M5 22h20M34 15v14M27 22h14"/><text x="24" y="58" text-anchor="middle" class="pqs-svg-label">U</text>
            </g>
            <g class="pqs-resistor" transform="translate(250 17)">
                <path d="M0 17h25l10-11 18 22 18-22 18 22 18-22 10 11h25" class="pqs-wire"/>
                <rect x="24" y="0" width="75" height="34" rx="7" class="pqs-resistor-body"/>
                <text x="62" y="23" text-anchor="middle" class="pqs-svg-label">R</text>
            </g>
            <g class="pqs-meter" transform="translate(360 3)">
                <circle cx="40" cy="31" r="30" class="pqs-instrument"/>
                <path d="M19 40a23 23 0 0 1 42 0" class="pqs-ticks"/>
                <path d="M40 37l-13-18" class="pqs-meter-needle"/>
                <text x="40" y="53" text-anchor="middle" class="pqs-svg-label">A</text>
            </g>
            <g class="pqs-electrons">
                <circle cx="133" cy="34" r="4" class="pqs-electron pqs-anim"/><circle cx="188" cy="34" r="4" class="pqs-electron pqs-anim"/><circle cx="474" cy="34" r="4" class="pqs-electron pqs-anim"/>
                <circle cx="510" cy="76" r="4" class="pqs-electron pqs-anim"/><circle cx="222" cy="105" r="4" class="pqs-electron pqs-anim"/>
            </g>
            <g transform="translate(235 81)">
                <rect width="168" height="52" rx="10" class="pqs-instrument"/>
                <text x="84" y="18" text-anchor="middle" class="pqs-svg-label">I = U / R</text>
                <text x="84" y="41" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text>
            </g>`,
        series: `
            <path d="M55 106V38h505v68H55" class="pqs-wire"/>
            <g class="pqs-battery" transform="translate(32 62)"><rect width="45" height="44" rx="7"/><path d="M14 12v20M5 22h18M32 15v14M25 22h14"/></g>
            <g class="pqs-series-resistors">
                <g transform="translate(145 20)"><rect width="86" height="36" rx="7" class="pqs-resistor-body"/><text x="43" y="24" text-anchor="middle" class="pqs-svg-label">R₁</text></g>
                <g transform="translate(267 20)"><rect width="86" height="36" rx="7" class="pqs-resistor-body"/><text x="43" y="24" text-anchor="middle" class="pqs-svg-label">R₂</text></g>
                <g transform="translate(389 20)"><rect width="86" height="36" rx="7" class="pqs-resistor-body"/><text x="43" y="24" text-anchor="middle" class="pqs-svg-label">R₃</text></g>
            </g>
            <path d="M96 38h49M231 38h36M353 38h36M475 38h85" class="pqs-current-line pqs-anim"/>
            <g transform="translate(224 81)"><rect width="190" height="52" rx="10" class="pqs-instrument"/><text x="95" y="18" text-anchor="middle" class="pqs-svg-label">R = R₁ + R₂ + R₃</text><text x="95" y="41" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        parallel: `
            <path d="M66 119V25h480v94H66M66 73h480" class="pqs-wire"/>
            <g class="pqs-battery" transform="translate(42 52)"><rect width="46" height="45" rx="7"/><path d="M14 12v21M5 22h20M33 15v14M26 22h14"/></g>
            <g transform="translate(260 7)"><rect width="115" height="36" rx="7" class="pqs-resistor-body"/><text x="57" y="24" text-anchor="middle" class="pqs-svg-label">R₁</text></g>
            <g transform="translate(260 55)"><rect width="115" height="36" rx="7" class="pqs-resistor-body"/><text x="57" y="24" text-anchor="middle" class="pqs-svg-label">R₂</text></g>
            <path d="M96 25h164M375 25h141M96 73h164M375 73h141" class="pqs-current-line pqs-anim"/>
            <g class="pqs-junctions"><circle cx="190" cy="25" r="5"/><circle cx="450" cy="25" r="5"/><circle cx="190" cy="73" r="5"/><circle cx="450" cy="73" r="5"/></g>
            <g transform="translate(205 92)"><rect width="235" height="52" rx="10" class="pqs-instrument"/><text x="117.5" y="17" text-anchor="middle" class="pqs-svg-label">R = R₁R₂/(R₁+R₂)</text><text x="117.5" y="41" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        power: `
            <path d="M55 110V83h105M390 83h165v27H55" class="pqs-wire"/>
            <g class="pqs-battery" transform="translate(31 64)"><rect width="46" height="45" rx="7"/><path d="M14 12v21M5 22h20M33 15v14M26 22h14"/></g>
            <g class="pqs-lamp" transform="translate(212 13)">
                <circle cx="55" cy="46" r="35" class="pqs-lamp-glow"/>
                <path d="M35 36c0-30 43-30 43 0 0 13-9 15-9 27H44c0-12-9-14-9-27z" class="pqs-lamp-bulb"/>
                <path d="M44 65h25M45 72h23M49 79h15M47 47l8 9 9-9" class="pqs-lamp-detail"/>
                <g class="pqs-lamp-rays"><path d="M55 0v-9M17 13l-8-8M93 13l8-8M8 46h-12M102 46h12"/></g>
            </g>
            <g transform="translate(402 24)"><rect width="125" height="77" rx="13" class="pqs-instrument"/><text x="62" y="24" text-anchor="middle" class="pqs-svg-label">W · P = UI</text><path d="M30 54a34 34 0 0 1 64 0" class="pqs-ticks"/><path d="M62 55l20-22" class="pqs-meter-needle pqs-power-needle"/><text x="62" y="70" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        ampere: `
            <path d="M22 125H598" class="pqs-bench"/>
            <g class="pqs-magnet">
                <path d="M122 18v75c0 52 136 52 136 0V18h-52v72c0 18-32 18-32 0V18z" class="pqs-magnet-body"/>
                <path d="M122 18h52v38h-52zM206 18h52v38h-52z" class="pqs-magnet-poles"/>
                <text x="148" y="45" text-anchor="middle" class="pqs-pole-label">N</text><text x="232" y="45" text-anchor="middle" class="pqs-pole-label">S</text>
            </g>
            <g class="pqs-field-lines"><path d="M173 62c25-18 35-18 58 0M173 73c25-12 35-12 58 0M173 84c25-6 35-6 58 0"/></g>
            <g class="pqs-conductor"><path d="M137 76h108" class="pqs-conductor-wire"/><circle cx="190" cy="76" r="12" class="pqs-conductor-core"/><text x="190" y="81" text-anchor="middle" class="pqs-pole-label">I</text></g>
            <g class="pqs-force-arrow"><path d="M290 93V29M290 29l-10 15M290 29l10 15"/><text x="307" y="42" class="pqs-svg-value">F</text></g>
            <g transform="translate(390 38)"><rect width="154" height="66" rx="12" class="pqs-instrument"/><text x="77" y="24" text-anchor="middle" class="pqs-svg-label">F = B · I · L</text><text x="77" y="50" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        electromagnet: `
            <path d="M22 125H598" class="pqs-bench"/>
            <g class="pqs-battery" transform="translate(40 61)"><rect width="48" height="45" rx="7"/><path d="M15 12v21M5 22h20M34 15v14M27 22h14"/></g>
            <path d="M88 74h55M334 74h93v35H88" class="pqs-wire"/>
            <g class="pqs-coil">
                <rect x="137" y="49" width="205" height="49" rx="21" class="pqs-core"/>
                <path d="M154 49c-24 0-24 49 0 49M177 49c-24 0-24 49 0 49M200 49c-24 0-24 49 0 49M223 49c-24 0-24 49 0 49M246 49c-24 0-24 49 0 49M269 49c-24 0-24 49 0 49M292 49c-24 0-24 49 0 49M315 49c-24 0-24 49 0 49" class="pqs-coil-wire"/>
            </g>
            <g class="pqs-field-lines pqs-anim"><path d="M151 38c44-35 133-35 177 0M151 109c44 30 133 30 177 0M143 29c54-43 166-43 193 0"/></g>
            <g class="pqs-paperclips">
                <path d="M371 82c20-12 27 15 8 24-17 8-25-14-9-22 12-6 18 9 7 14" class="pqs-paperclip pqs-clip-one"/>
                <path d="M410 91c18-11 25 13 8 21-15 8-23-12-8-20 11-5 16 8 6 13" class="pqs-paperclip pqs-clip-two"/>
            </g>
            <g transform="translate(461 22)"><rect width="116" height="62" rx="12" class="pqs-instrument"/><text x="58" y="22" text-anchor="middle" class="pqs-svg-label">B = μ₀NI/L</text><text x="58" y="47" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        refraction: `
            <path d="M24 125H596" class="pqs-bench"/>
            <rect x="71" y="74" width="426" height="49" rx="5" class="pqs-glass-slab"/>
            <path d="M71 74h426" class="pqs-glass-edge"/>
            <path d="M285 12v116" class="pqs-normal"/>
            <path d="M105 74a65 65 0 0 1 65-65M285 139a65 65 0 0 0 65-65" class="pqs-angle-arc"/>
            <g class="pqs-ray-incident"><path d="M285 74L132 12"/><path d="M132 12l18 3M132 12l7 16"/><text x="168" y="30" class="pqs-svg-label">α</text></g>
            <g class="pqs-ray-refracted"><path d="M285 74l86 65"/><path d="M371 139l-4-18M371 139l-18-3"/><text x="340" y="119" class="pqs-svg-label">β</text></g>
            <circle cx="285" cy="74" r="5" class="pqs-junctions"/>
            <g transform="translate(443 13)"><rect width="130" height="48" rx="11" class="pqs-instrument"/><text x="65" y="19" text-anchor="middle" class="pqs-svg-label">n = sinα/sinβ</text><text x="65" y="39" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        lens: `
            <path d="M35 78H585M35 125H585" class="pqs-bench"/>
            <g class="pqs-lens-shape"><path d="M305 15c-32 29-32 98 0 126 32-28 32-97 0-126z"/><path d="M305 15v126" class="pqs-normal"/></g>
            <g class="pqs-focus-points"><circle cx="235" cy="78" r="4"/><circle cx="375" cy="78" r="4"/><text x="228" y="96" class="pqs-svg-label">F</text><text x="371" y="96" class="pqs-svg-label">F</text></g>
            <g class="pqs-object"><path d="M105 78V28M105 28l-9 15M105 28l9 15" class="pqs-object-arrow"/><rect x="87" y="78" width="36" height="8" rx="3" class="pqs-metal"/></g>
            <g class="pqs-image"><path d="M485 78v40M485 118l-9-15M485 118l9-15" class="pqs-image-arrow"/></g>
            <g class="pqs-light-rays"><path d="M105 28l200 38 180 52M105 28h200l180 90M105 28l200 50"/></g>
            <g transform="translate(454 9)"><rect width="127" height="52" rx="10" class="pqs-instrument"/><text x="63" y="17" text-anchor="middle" class="pqs-svg-label">1/F = 1/d + 1/o</text><text x="63" y="41" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        ramp: `
            <path d="M25 125H595" class="pqs-bench"/>
            <g class="pqs-ramp-track"><path d="M70 29l300 86H70z" class="pqs-ramp-body"/><path d="M70 29l300 86" class="pqs-ramp-edge"/></g>
            <g class="pqs-ramp-ruler"><path d="M88 116v9M128 116v9M168 116v9M208 116v9M248 116v9M288 116v9M328 116v9"/><text x="197" y="139" class="pqs-svg-label">s</text></g>
            <g class="pqs-ramp-ball"><circle cx="90" cy="25" r="15" class="pqs-ball"/><path d="M82 18l16 14M98 18l-16 14" class="pqs-ball-detail"/></g>
            <path d="M96 14l275 80" class="pqs-motion-guide"/>
            <g transform="translate(438 25)"><circle cx="49" cy="40" r="36" class="pqs-instrument"/><path d="M49 40V18M49 40l18 8" class="pqs-stopwatch-hand"/><rect x="39" y="-2" width="20" height="9" rx="3" class="pqs-metal"/><text x="49" y="94" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>
            <text x="394" y="102" class="pqs-svg-label">a = 2s/t²</text>`,
        projectile: `
            <path d="M25 126H595" class="pqs-bench"/>
            <g class="pqs-table"><rect x="48" y="48" width="155" height="16" rx="4" class="pqs-metal"/><path d="M65 64v60M183 64v60" class="pqs-table-leg"/></g>
            <path d="M203 42c112-37 222 15 278 78" class="pqs-trajectory"/>
            <path d="M226 118h255M226 112v12M481 112v12" class="pqs-ramp-ruler"/>
            <text x="337" y="113" class="pqs-svg-label">s</text>
            <path d="M35 48v76M29 48h12M29 124h12" class="pqs-table-leg"/><text x="17" y="91" class="pqs-svg-label">h</text>
            <g class="pqs-projectile-ball"><circle cx="202" cy="41" r="13" class="pqs-ball"/><path d="M195 34l14 14" class="pqs-ball-detail"/></g>
            <g transform="translate(453 10)"><rect width="119" height="47" rx="11" class="pqs-instrument"/><text x="59" y="18" text-anchor="middle" class="pqs-svg-label">v₀ = s√(g/2h)</text><text x="59" y="38" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`,
        pendulum: `
            <path d="M25 126H595" class="pqs-bench"/>
            <g class="pqs-stand"><path d="M93 124V18h240M77 124h50M317 18h32" class="pqs-metal-line"/><circle cx="317" cy="20" r="6" class="pqs-junctions"/></g>
            <path d="M206 107a119 119 0 0 1 222 0" class="pqs-angle-arc"/>
            <path d="M317 20v105" class="pqs-normal"/>
            <g class="pqs-pendulum-bob pqs-anim"><path d="M317 20l-54 88" class="pqs-pendulum-string"/><circle cx="263" cy="108" r="18" class="pqs-ball"/><circle cx="257" cy="102" r="5" class="pqs-ball-highlight"/></g>
            <g transform="translate(435 25)"><circle cx="49" cy="40" r="36" class="pqs-instrument"/><path d="M49 40V18M49 40l18 8" class="pqs-stopwatch-hand"/><rect x="39" y="-2" width="20" height="9" rx="3" class="pqs-metal"/><text x="49" y="94" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>
            <text x="185" y="140" text-anchor="middle" class="pqs-svg-label">T = 2π√(L/g)</text>`,
        waves: `
            <path d="M25 126H595" class="pqs-bench"/>
            <g class="pqs-wave-tank"><path d="M69 25h412v93H69z" class="pqs-glass"/><path d="M74 52h402v61H74z" class="pqs-wave-water"/></g>
            <g class="pqs-wave-maker"><rect x="82" y="15" width="22" height="64" rx="5" class="pqs-metal"/><path d="M93 15V5M74 5h38" class="pqs-metal-line"/></g>
            <g class="pqs-wave-lines pqs-anim">
                <path d="M110 65c20-24 40-24 60 0s40 24 60 0 40-24 60 0 40 24 60 0 40-24 60 0"/>
                <path d="M110 88c20-24 40-24 60 0s40 24 60 0 40-24 60 0 40 24 60 0 40-24 60 0"/>
            </g>
            <g class="pqs-wave-measure"><path d="M170 43h60M170 37v12M230 37v12"/><text x="193" y="35" class="pqs-svg-label">λ</text></g>
            <g transform="translate(495 35)"><rect width="91" height="65" rx="11" class="pqs-instrument"/><text x="45" y="22" text-anchor="middle" class="pqs-svg-label">v = λν</text><text x="45" y="48" text-anchor="middle" class="pqs-svg-value" data-pqs-result>—</text></g>`
    };

    function injectStyles() {
        if (document.getElementById("pq-lab-scenes-css")) return;
        const style = document.createElement("style");
        style.id = "pq-lab-scenes-css";
        style.textContent = `
.pqs { position:absolute; inset:0; --p1:.5; --p2:.5; --p3:.5; --result:.5; --motion:1; }
.pqs-svg { position:absolute !important; inset:0; width:100%; height:100%; overflow:visible; }
.pqs-svg text { font-family:"Trebuchet MS","Segoe UI",sans-serif; }
.pqs-bench { fill:none; stroke:#b9cddd; stroke-width:8; stroke-linecap:round; }
.pqs-glass { fill:rgba(211,236,250,.42); stroke:#7ca6c2; stroke-width:2; }
.pqs-glass-strong { fill:rgba(225,242,252,.58); stroke:#7098b5; stroke-width:2.2; }
.pqs-metal { fill:#d5e1eb; stroke:#7893aa; stroke-width:1.6; }
.pqs-metal-line { fill:none; stroke:#7893aa; stroke-width:6; stroke-linecap:round; stroke-linejoin:round; }
.pqs-water-hot { fill:#fb7185; opacity:.68; }
.pqs-water-cold { fill:#38bdf8; opacity:.62; }
.pqs-water-mix { fill:#8bcdf0; opacity:.8; transform-origin:center bottom; transform-box:fill-box; transform:scaleY(calc(.5 + var(--p1)*.5)); transition:transform .3s; }
.pqs-water-stream { fill:none; stroke:#0ea5e9; stroke-width:5; stroke-linecap:round; stroke-dasharray:8 7; animation:pqs-dash 1.2s linear infinite; }
.pqs-steam { fill:none; stroke:#f97316; stroke-width:3; stroke-linecap:round; opacity:calc(.2 + var(--p2)*.8); animation:pqs-steam 1.8s ease-in-out infinite; }
.pqs-bubbles { fill:#fff; opacity:.72; animation:pqs-bubbles 1.5s ease-in-out infinite; }
.pqs-mercury { fill:#ef4444; transform-origin:center bottom; transform-box:fill-box; transform:scaleY(calc(.3 + var(--p2)*.7)); transition:transform .35s; }
.pqs-mercury-dot { fill:#dc2626; }
.pqs-ticks { fill:none; stroke:#5f7d95; stroke-width:2; stroke-linecap:round; }
.pqs-svg-label { fill:#34536d; font-size:14px; font-weight:800; }
.pqs-svg-value { fill:#073b5c; font-size:15px; font-weight:900; font-variant-numeric:tabular-nums; }
.pqs-instrument { fill:#fff; stroke:#8fb0c7; stroke-width:2; }
.pqs-heating-coil { fill:none; stroke:#ef4444; stroke-width:4; stroke-linecap:round; }
.pqs-flame { fill:#f59e0b; stroke:#f97316; stroke-width:1.5; transform-origin:center bottom; transform-box:fill-box; transform:scale(calc(.6 + var(--p1)*.55)); animation:pqs-flame .55s ease-in-out infinite alternate; }
.pqs-flame-small { fill:#fde047; animation-delay:.2s; }
.pqs-melt-water { fill:#60c7ed; opacity:calc(.25 + var(--p1)*.55); transition:opacity .3s; }
.pqs-ice rect { fill:#dff6ff; stroke:#67b6da; stroke-width:2; }
.pqs-ice { transform-origin:center bottom; transform-box:fill-box; transition:opacity .5s,transform .5s; }
.pqs-melting.measured .pqs-ice { opacity:calc(.9 - var(--p1)*.65); transform:translateY(5px) scale(.94); }
.pqs-ice-shine { fill:none; stroke:#fff; stroke-width:2; }
.pqs-wire { fill:none; stroke:#45647c; stroke-width:4; stroke-linecap:round; stroke-linejoin:round; }
.pqs-battery rect { fill:#e5edf4; stroke:#607e96; stroke-width:2; }
.pqs-battery path { fill:none; stroke:#173c59; stroke-width:3; stroke-linecap:round; }
.pqs-resistor-body { fill:#fef3c7; stroke:#b7791f; stroke-width:2; }
.pqs-ohm .pqs-resistor-body { fill:#fee2e2; stroke:#b45309; }
.pqs-meter-needle { fill:none; stroke:#e11d48; stroke-width:3; stroke-linecap:round; transform-origin:40px 37px; transform-box:view-box; transform:rotate(calc(-25deg + var(--result)*50deg)); transition:transform .45s; }
.pqs-electron { fill:#0284c7; stroke:#fff; stroke-width:1; animation:pqs-electron 1.8s ease-in-out infinite alternate; animation-duration:calc(2.5s - var(--result)*1.6s); }
.pqs-electrons .pqs-electron:nth-child(2n) { animation-delay:.35s; }
.pqs-current-line { fill:none; stroke:#0ea5e9; stroke-width:3; stroke-linecap:round; stroke-dasharray:7 10; animation:pqs-dash 1.2s linear infinite; }
.pqs-junctions { fill:#0e7490; }
.pqs-lamp-glow { fill:#fde047; opacity:calc(.08 + var(--result)*.62); filter:drop-shadow(0 0 12px #fbbf24); transition:opacity .35s; }
.pqs-lamp-bulb { fill:#fffbeb; stroke:#b45309; stroke-width:2; }
.pqs-lamp-detail { fill:none; stroke:#8a5a17; stroke-width:2.5; stroke-linecap:round; }
.pqs-lamp-rays { fill:none; stroke:#f59e0b; stroke-width:3; stroke-linecap:round; opacity:calc(.2 + var(--result)*.8); }
.pqs-power-needle { transform-origin:62px 55px; }
.pqs-magnet-body { fill:#dbe5ee; stroke:#526e85; stroke-width:2; }
.pqs-magnet-poles { fill:#ef4444; stroke:#9f2939; stroke-width:1.5; }
.pqs-magnet-poles + text { fill:#fff; }
.pqs-pole-label { fill:#fff; font-size:16px; font-weight:900; }
.pqs-field-lines { fill:none; stroke:#0ea5e9; stroke-width:2; stroke-dasharray:5 5; opacity:calc(.25 + var(--p1)*.7); }
.pqs-conductor { transition:transform .45s; }
.pqs-ampere.measured .pqs-conductor { transform:translateY(calc(var(--result)*-9px)); }
.pqs-conductor-wire { stroke:#b45309; stroke-width:6; stroke-linecap:round; }
.pqs-conductor-core { fill:#0e7490; }
.pqs-force-arrow { fill:none; stroke:#dc2626; stroke-width:4; stroke-linecap:round; stroke-linejoin:round; transform-origin:center bottom; transform-box:fill-box; transform:scaleY(calc(.45 + var(--result)*.55)); transition:transform .35s; }
.pqs-force-arrow text { fill:#b91c1c; stroke:none; }
.pqs-core { fill:#b8c7d3; stroke:#607d93; stroke-width:2; }
.pqs-coil-wire { fill:none; stroke:#b45309; stroke-width:5; }
.pqs-electromagnet .pqs-field-lines { animation:pqs-dash 1.5s linear infinite; opacity:calc(.15 + var(--result)*.8); }
.pqs-paperclip { fill:none; stroke:#52677a; stroke-width:3; stroke-linecap:round; transition:transform .5s; }
.pqs-electromagnet.measured .pqs-clip-one { transform:translate(-10px,calc(var(--result)*-13px)) rotate(-18deg); }
.pqs-electromagnet.measured .pqs-clip-two { transform:translate(-18px,calc(var(--result)*-17px)) rotate(12deg); }
.pqs-glass-slab { fill:rgba(125,211,252,.35); stroke:#4c9bc2; stroke-width:2; }
.pqs-glass-edge { stroke:#257ba3; stroke-width:2; }
.pqs-normal { fill:none; stroke:#7b8fa0; stroke-width:1.5; stroke-dasharray:5 5; }
.pqs-angle-arc { fill:none; stroke:#7c3aed; stroke-width:2; stroke-dasharray:4 4; }
.pqs-ray-incident,.pqs-ray-refracted { fill:none; stroke:#f59e0b; stroke-width:4; stroke-linecap:round; stroke-linejoin:round; transition:transform .3s; }
.pqs-ray-incident text,.pqs-ray-refracted text { fill:#7c3aed; stroke:none; }
.pqs-lens-shape path:first-child { fill:rgba(125,211,252,.45); stroke:#1683b5; stroke-width:2.5; }
.pqs-focus-points { fill:#dc2626; }
.pqs-object-arrow { fill:none; stroke:#dc2626; stroke-width:5; stroke-linecap:round; }
.pqs-image-arrow { fill:none; stroke:#7c3aed; stroke-width:5; stroke-linecap:round; }
.pqs-light-rays { fill:none; stroke:#f59e0b; stroke-width:2.5; }
.pqs-object,.pqs-image,.pqs-light-rays { transition:transform .35s,opacity .35s; }
.pqs-ramp-body { fill:#d9e5ee; stroke:#68869d; stroke-width:2; }
.pqs-ramp-edge { fill:none; stroke:#35637f; stroke-width:5; stroke-linecap:round; }
.pqs-ramp-ruler { fill:none; stroke:#718a9e; stroke-width:2; }
.pqs-ball { fill:#0ea5e9; stroke:#075985; stroke-width:2.5; }
.pqs-ball-detail { fill:none; stroke:#e0f2fe; stroke-width:2; }
.pqs-ball-highlight { fill:#bae6fd; }
.pqs-motion-guide,.pqs-trajectory { fill:none; stroke:#0e7490; stroke-width:2; stroke-dasharray:6 6; }
.pqs-ramp-ball { transition:transform .7s cubic-bezier(.2,.8,.3,1); }
.pqs-ramp.measured .pqs-ramp-ball { transform:translate(calc(var(--p1)*205px),calc(var(--p1)*59px)) rotate(calc(var(--p1)*240deg)); }
.pqs-stopwatch-hand { fill:none; stroke:#e11d48; stroke-width:3; stroke-linecap:round; }
.pqs-table-leg { fill:none; stroke:#607d93; stroke-width:6; stroke-linecap:round; }
.pqs-trajectory { stroke:#7c3aed; stroke-width:3; }
.pqs-projectile-ball { transition:transform .75s cubic-bezier(.25,.7,.35,1); }
.pqs-projectile.measured .pqs-projectile-ball { transform:translate(calc(80px + var(--p1)*190px),calc(18px + var(--p2)*42px)); }
.pqs-pendulum-bob { transform-origin:317px 20px; transform-box:view-box; animation:pqs-swing 1.8s ease-in-out infinite alternate; animation-duration:calc(2.5s - var(--p1)*.7s); }
.pqs-pendulum-string { fill:none; stroke:#4f677b; stroke-width:3; }
.pqs-wave-water { fill:rgba(56,189,248,.2); }
.pqs-wave-lines { fill:none; stroke:#0284c7; stroke-width:3; stroke-linecap:round; animation:pqs-wave 1.6s linear infinite; animation-duration:calc(2.6s - var(--p2)*1.5s); transform-origin:110px 80px; transform-box:view-box; }
.pqs-wave-measure { fill:none; stroke:#7c3aed; stroke-width:2; }
.pqs .pqs-anim { animation-play-state:paused; }
.pqs.measured .pqs-anim { animation-play-state:running; }
.pqs-drop { left:10px; right:auto; bottom:3px; width:auto; max-width:210px; min-height:0; padding:4px 9px; border-width:1px; border-radius:8px; background:rgba(255,255,255,.92); font-size:10px; }
@keyframes pqs-dash { to { stroke-dashoffset:-34; } }
@keyframes pqs-electron { from { transform:translateX(-10px); } to { transform:translateX(18px); } }
@keyframes pqs-steam { 50% { transform:translateY(-5px); opacity:.35; } }
@keyframes pqs-bubbles { 50% { transform:translateY(-8px); opacity:.35; } }
@keyframes pqs-flame { to { transform:scale(calc(.65 + var(--p1)*.55),.8); } }
@keyframes pqs-swing { from { transform:rotate(-16deg); } to { transform:rotate(31deg); } }
@keyframes pqs-wave { 50% { transform:translateX(13px); } }
@media (max-width:720px) { .pqs-drop { position:absolute; left:8px; right:auto; bottom:2px; margin:0; max-width:180px; } }
@media (prefers-reduced-motion:reduce) { .pqs * { animation:none !important; transition:none !important; } }
`;
        document.head.appendChild(style);
    }

    function render(cfg) {
        injectStyles();
        const scene = SCENES[cfg.scene] ? cfg.scene : "heat";
        const body = SCENES[scene];
        return `<div class="pqs pqs-${esc(scene)}" data-pqs="${esc(scene)}">
            <svg class="pqs-svg" viewBox="0 0 620 148" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(titleOf(cfg))}">${body}</svg>
        </div>
        <div class="pqw-drop pqs-drop" id="pqw-drop">${esc(tr("Перетащи деталь сюда", "Бөлшекті осында сүйре", "Drag a part here"))}</div>`;
    }

    function update(root, cfg, values, measured) {
        const sceneEl = root && root.querySelector("[data-pqs]");
        if (!sceneEl) return;
        const sliders = cfg.sliders || [];
        sliders.slice(0, 3).forEach((slider, index) => {
            const span = Number(slider.max) - Number(slider.min) || 1;
            const ratio = clamp((Number(values[slider.id]) - Number(slider.min)) / span, 0, 1);
            sceneEl.style.setProperty("--p" + (index + 1), ratio.toFixed(4));
        });
        let result = 0;
        try { result = Number(cfg.formula ? cfg.formula(Object.assign({}, values)) : 0); } catch (e) { result = 0; }
        const target = Number(cfg.target) || 1;
        const ratio = clamp(Math.abs(result) / Math.max(Math.abs(target), 0.0001), 0, 1.5) / 1.5;
        sceneEl.style.setProperty("--result", ratio.toFixed(4));
        sceneEl.classList.toggle("measured", !!measured);
        sceneEl.querySelectorAll("[data-pqs-result]").forEach(el => {
            if (!measured) {
                el.textContent = "—";
                return;
            }
            const unit = lang() === "en" ? (cfg.unitEn || cfg.unit || "") : (lang() === "kk" ? (cfg.unitKk || cfg.unit || "") : (cfg.unit || ""));
            const number = Math.abs(result) >= 100 ? result.toFixed(0) : result.toFixed(2);
            el.textContent = (lang() === "en" ? number : number.replace(".", ",")) + (unit ? " " + unit : "");
        });

        if (cfg.scene === "refraction") {
            const a = Number(values.a || 40), b = Number(values.b || 30);
            const incident = sceneEl.querySelector(".pqs-ray-incident");
            const refracted = sceneEl.querySelector(".pqs-ray-refracted");
            if (incident) incident.setAttribute("transform", `rotate(${(a - 40) * 0.65} 285 74)`);
            if (refracted) refracted.setAttribute("transform", `rotate(${(b - 30) * 0.8} 285 74)`);
        } else if (cfg.scene === "lens") {
            const object = sceneEl.querySelector(".pqs-object");
            const image = sceneEl.querySelector(".pqs-image");
            const rays = sceneEl.querySelector(".pqs-light-rays");
            const p1 = Number(sceneEl.style.getPropertyValue("--p1")) || 0;
            const p2 = Number(sceneEl.style.getPropertyValue("--p2")) || 0;
            const dx1 = p1 * 70, dx2 = -p2 * 65;
            if (object) object.setAttribute("transform", `translate(${dx1} 0)`);
            if (image) image.setAttribute("transform", `translate(${dx2} 0)`);
            if (rays) rays.setAttribute("transform", `translate(${dx1 * 0.35} 0) scale(${1 - (dx1 + dx2) * 0.0007} 1)`);
        }
    }

    window.PQLabScenes = { render, update, has: scene => !!SCENES[scene] };
})();
