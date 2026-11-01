/* ============================================================
   PQ INQUIRY LABS — практические исследования по мотивам PhET.
   7 класс: закон Гука; 8 класс: диффузия; 9 класс: реактивное движение.
   Ученик не только двигает регулятор: он проводит опыт, записывает
   измерения и делает вывод. К каждой сцене приложен безопасный
   домашний эксперимент с доступными материалами.
   ============================================================ */
(function () {
    "use strict";

    const grade = Number(window.CURRENT_GRADE) || 7;
    const $ = (selector, root) => (root || document).querySelector(selector);
    const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || "ru"; } catch (_) { return "ru"; }
    }
    function L(ru, kk, en) {
        const l = lang();
        return l === "kk" ? kk : l === "en" ? en : ru;
    }
    function esc(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[ch]));
    }
    function num(value, digits) {
        const text = Number(value).toFixed(digits == null ? 1 : digits);
        return lang() === "en" ? text : text.replace(".", ",");
    }
    function clone(value) {
        try { return JSON.parse(JSON.stringify(value)); } catch (_) { return {}; }
    }

    const SPECS = {
        7: {
            level: 44, inquiry: "spring", icon: "🌀",
            title: "🌀 Лаб. №4: Пружина и закон Гука",
            titleKk: "🌀 №4 зертхана: Серіппе және Гук заңы",
            titleEn: "🌀 Lab #4: Spring and Hooke's law",
            desc: "Подвешивай одинаковые грузы, записывай силу и удлинение при двух нагрузках, затем вычисли жёсткость пружины k = F/x.",
            descKk: "Бірдей жүктерді іліп, екі жүктемедегі күш пен ұзаруды жазып ал, содан кейін серіппенің қатаңдығын k = F/x бойынша есепте.",
            descEn: "Hang identical masses, record force and extension for two loads, then calculate the spring constant k = F/x.",
            hint: "При расчёте переведи удлинение из сантиметров в метры.",
            hintKk: "Есептегенде ұзаруды сантиметрден метрге аудар.",
            hintEn: "Convert the extension from centimetres to metres before calculating."
        },
        8: {
            level: 2, inquiry: "diffusion", icon: "🧪",
            title: "🧪 Диффузия в холодной и тёплой воде",
            titleKk: "🧪 Суық және жылы судағы диффузия",
            titleEn: "🧪 Diffusion in cold and warm water",
            desc: "Капни краситель в два стакана одновременно, сравни условное время перемешивания и объясни связь диффузии с тепловым движением.",
            descKk: "Екі стақанға бояуды бір уақытта тамыз, араласудың шартты уақытын салыстыр және диффузияның жылулық қозғалыспен байланысын түсіндір.",
            descEn: "Drop dye into two cups at the same time, compare their model mixing times, and explain how diffusion depends on thermal motion.",
            hint: "Сравнивай одинаковые объёмы воды; меняется только температура.",
            hintKk: "Су көлемі бірдей болсын; тек температура өзгереді.",
            hintEn: "Keep the water volumes equal; only the temperature changes."
        },
        9: {
            level: 22, inquiry: "rocket", icon: "🎈",
            title: "🎈 Реактивное движение: шарик на нитке",
            titleKk: "🎈 Реактивті қозғалыс: жіптегі шар",
            titleEn: "🎈 Rocket motion: balloon on a string",
            desc: "Надувай шарик на разное число делений, выпускай воздух и сравни модельную дальность двух запусков.",
            descKk: "Шарды әртүрлі бөлікке үрле, ауаны шығарып, екі ұшырудың модельдік қашықтығын салыстыр.",
            descEn: "Inflate the balloon to different levels, release the air, and compare the model range of two launches.",
            hint: "Струя воздуха движется назад, а шарик — в противоположную сторону.",
            hintKk: "Ауа ағыны артқа, ал шар қарама-қарсы бағытта қозғалады.",
            hintEn: "The air jet moves backwards and the balloon moves in the opposite direction."
        }
    };

    const GUIDES = {
        spring: {
            ru: {
                title: "Дома: резинка и одинаковые монеты",
                materials: ["Тонкая резинка для денег", "Линейка, карандаш и бумага", "3–4 одинаковые монеты и небольшой бумажный пакетик", "Стопка книг и скотч для опоры"],
                steps: ["Положи на стол стопку книг и закрепи скотчем один конец резинки на верхней книге так, чтобы другой свисал с края. Отметь положение нижнего края без нагрузки.", "Положи в пакетик одну монету, аккуратно подвесь и измерь удлинение резинки.", "Повтори с двумя и тремя монетами. Каждый раз снимай нагрузку и проверяй, что резинка возвращается к отметке.", "Сравни: во сколько раз выросло число монет и во сколько раз — удлинение."],
                observe: "Если резинка не перерастянута, удлинение примерно пропорционально нагрузке — это проявление закона Гука.",
                safety: "Не натягивай резинку возле лица, не используй тяжёлые предметы и прекрати опыт, если резинка повреждена или не восстанавливает длину."
            },
            kk: {
                title: "Үйде: серпімді резеңке және бірдей тиындар",
                materials: ["Ақшаға арналған жұқа резеңке", "Сызғыш, қарындаш және қағаз", "3–4 бірдей тиын және кішкентай қағаз қалта", "Тірек үшін кітаптар мен желім таспа"],
                steps: ["Үстелге кітаптарды қойып, резеңкенің бір ұшын жоғарғы кітапқа желім таспамен бекіт. Екінші ұшы үстелдің шетінен төмен ілініп тұрсын. Жүксіз төменгі шетін белгіле.", "Қалтаға бір тиын салып, абайлап іл де, резеңкенің ұзаруын өлше.", "Екі және үш тиынмен қайтала. Әр жолы жүкті алып, резеңкенің бастапқы белгіге оралғанын тексер.", "Тиын саны неше есе өсті және ұзару неше есе өсті — салыстыр."],
                observe: "Резеңке шамадан тыс созылмаса, ұзару жүктемеге шамамен пропорционал болады — бұл Гук заңының көрінісі.",
                safety: "Резеңкені бетке жақын созба, ауыр заттарды пайдаланба; резеңке зақымдалса немесе ұзындығы қалпына келмесе, тәжірибені тоқтат."
            },
            en: {
                title: "At home: a rubber band and identical coins",
                materials: ["A thin elastic band", "A ruler, pencil, and paper", "3–4 identical coins and a small paper pouch", "A stack of books and tape for the support"],
                steps: ["Place a stack of books on a table and tape one end of the band to the top book so the other end hangs over the edge. Mark the lower edge with no load.", "Put one coin in the pouch, hang it gently, and measure the extension.", "Repeat with two and three coins. Remove the load each time and check that the band returns to the mark.", "Compare how many times the number of coins increased with how many times the extension increased."],
                observe: "If the band is not overstretched, the extension is approximately proportional to the load — Hooke's law in action.",
                safety: "Never stretch the band near your face, do not use heavy objects, and stop if the band is damaged or does not recover its length."
            }
        },
        diffusion: {
            ru: {
                title: "Дома: два стакана и капля чая",
                materials: ["2 одинаковых прозрачных стакана", "Холодная вода и тёплая вода примерно 40–50 °C — не кипяток", "Немного заваренного чая или пищевой краситель, чайная ложка"],
                steps: ["Поставь стаканы на светлую салфетку и налей в них одинаковое количество холодной и тёплой воды.", "Дождись, пока вода перестанет двигаться. Одновременно добавь по одной ложке чая, не помешивая.", "Наблюдай сверху и сбоку 3–5 минут. Отметь, где чай распространяется быстрее.", "Повтори опыт, если случайно помешал воду: движение стакана тоже перемешивает жидкость."],
                observe: "В тёплой воде чай обычно распространяется быстрее: молекулы участвуют в более интенсивном тепловом движении.",
                safety: "Используй только тёплую, а не обжигающую воду. Поставь стаканы на устойчивую поверхность, не пробуй окрашенную жидкость и вытри пролитое."
            },
            kk: {
                title: "Үйде: екі стақан және бір ас шай",
                materials: ["2 бірдей мөлдір стақан", "Суық су және шамамен 40–50 °C жылы су — қайнаған су емес", "Аздап дайындалған шай немесе тамақ бояуы, шай қасық"],
                steps: ["Стақандарды ашық түсті сілкішке қой да, бірдей мөлшерде суық және жылы су құй.", "Судың қозғалысы тоқтағанын күт. Араластырмай, бір уақытта бір қасықтан шай құй.", "3–5 минут жоғарыдан және жанынан бақыла. Шай қай стақанда тезірек таралғанын белгіле.", "Суды байқамай араластырсаң, тәжірибені қайтала: стақанның қозғалысы да сұйықтықты араластырады."],
                observe: "Жылы суда шай әдетте тезірек тарайды: молекулалардың жылулық қозғалысы қарқындырақ болады.",
                safety: "Тек жылы, күйдірмейтін суды пайдалан. Стақандарды тұрақты бетке қой, боялған сұйықтықты ішпе және төгілгенін сүрт."
            },
            en: {
                title: "At home: two cups and a spoonful of tea",
                materials: ["2 identical transparent cups", "Cold water and warm water at about 40–50 °C — not boiling water", "A little brewed tea or food colouring and a teaspoon"],
                steps: ["Place the cups on a light-coloured cloth and pour equal amounts of cold and warm water.", "Wait until the water is still. Add one spoonful of tea to each cup at the same time without stirring.", "Watch from above and from the side for 3–5 minutes. Note where the tea spreads faster.", "Repeat if you accidentally stirred the water: moving a cup also mixes the liquid."],
                observe: "Tea usually spreads faster in warm water because the molecules undergo more intense thermal motion.",
                safety: "Use warm, not scalding, water. Keep the cups on a stable surface, do not drink the coloured liquid, and wipe up spills."
            }
        },
        rocket: {
            ru: {
                title: "Дома: воздушный шарик на леске",
                materials: ["Воздушный шарик", "2–3 м лески или гладкой нитки", "Коктейльная трубочка, скотч, линейка и две устойчивые опоры"],
                steps: ["Продень леску через трубочку и натяни её горизонтально между двумя опорами.", "Немного надуй шарик и, не завязывая, придерживай отверстие. Прикрепи шарик к трубочке скотчем.", "Отпусти отверстие, направленное назад. Отметь место остановки и измерь расстояние.", "Повтори с большим количеством воздуха при той же длине лески. Сравни не менее двух запусков."],
                observe: "Воздух выходит назад, а шарик с трубочкой движется вперёд. Обычно больший запас воздуха даёт большую дальность, хотя форма шарика и трение тоже влияют на результат.",
                safety: "Не надувай шарик чрезмерно, держи его подальше от лица и не направляй на людей. Не используй стеклянные опоры; убери с пути опытные и бьющиеся предметы."
            },
            kk: {
                title: "Үйде: жіптегі ауа шары",
                materials: ["Ауа шары", "2–3 м жібек жіп немесе тегіс жіп", "Коктейль түтігі, желім таспа, сызғыш және екі тұрақты тірек"],
                steps: ["Жіпті түтіктен өткізіп, екі тіректің арасына көлденең тартып байла.", "Шарды аздап үрле және байламай, аузын ұстап тұр. Шарды желім таспамен түтікке бекіт.", "Артқа қаратылған аузын босат. Тоқтаған жерін белгілеп, қашықтықты өлше.", "Жіп ұзындығын өзгертпей, ауасы көбірек шармен қайтала. Кемінде екі ұшыруды салыстыр."],
                observe: "Ауа артқа шығады, ал шар мен түтік алға қозғалады. Әдетте ауа көбірек болса, қашықтық та артады, бірақ шардың пішіні мен үйкеліс те нәтижеге әсер етеді.",
                safety: "Шарды шамадан тыс үрлеме, беттен алыс ұста және адамдарға бағыттама. Шыны тіректерді пайдаланба; жолдағы сынғыш заттарды алыстат."
            },
            en: {
                title: "At home: a balloon on a string",
                materials: ["A balloon", "2–3 m of fishing line or smooth string", "A drinking straw, tape, a ruler, and two stable supports"],
                steps: ["Thread the line through the straw and stretch it horizontally between two supports.", "Partially inflate the balloon and hold its opening without tying it. Tape the balloon to the straw.", "Release the backward-facing opening. Mark where the balloon stops and measure the distance.", "Repeat with more air while keeping the line the same length. Compare at least two launches."],
                observe: "Air flows backwards while the balloon and straw move forwards. More air usually gives a longer range, although balloon shape and friction also affect the result.",
                safety: "Do not overinflate the balloon, keep it away from your face, and never aim it at people. Avoid glass supports and remove fragile objects from the flight path."
            }
        }
    };

    function addStyles() {
        if (document.getElementById("pq-inquiry-labs-style")) return;
        const style = document.createElement("style");
        style.id = "pq-inquiry-labs-style";
        style.textContent = `
            .pq-iq{--iq-blue:#087ea4;--iq-ink:#143c55;color:var(--iq-ink);font-size:13px;line-height:1.42}
            .pq-iq *{box-sizing:border-box}.pq-iq-scene{border:1px solid #c4dce8;border-radius:14px;background:linear-gradient(145deg,#f5fcff,#eaf5fa);overflow:hidden;margin:6px 0 10px}
            .pq-iq-scene svg{display:block;width:100%;height:auto;max-height:48vh}.pq-iq-controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:8px 0}
            .pq-iq-controls label{display:flex;align-items:center;gap:7px;font-weight:750}.pq-iq-controls label>span{white-space:nowrap}.pq-iq select,.pq-iq input[type=number]{min-height:38px;border:1px solid #9bb9ca;border-radius:9px;background:#fff;color:#153c55;padding:7px 9px;font:inherit}
            .pq-iq input[type=range]{min-width:110px;accent-color:#0788ad}.pq-iq input:focus-visible,.pq-iq select:focus-visible{outline:3px solid #e0a52d;outline-offset:2px}
            .pq-iq-btn{min-height:38px;border:1px solid #1685a4;border-radius:9px;background:#e7f7fb;color:#10506a;padding:8px 12px;font:inherit;font-weight:800;cursor:pointer;touch-action:manipulation}
            .pq-iq-btn:hover:not(:disabled){background:#d3f0f7}.pq-iq-btn.primary{background:#087ea4;color:#fff}.pq-iq-btn.primary:hover:not(:disabled){background:#066884}
            .pq-iq-btn.choice{background:#fff;border-color:#a9bfcc}.pq-iq-btn.choice.selected{border-color:#18845d;background:#e5f7ed;color:#155d43}.pq-iq-btn:disabled{opacity:.48;cursor:not-allowed}
            .pq-iq-btn:focus-visible{outline:3px solid #e0a52d;outline-offset:2px}.pq-iq-formula{padding:8px 10px;border-radius:10px;background:#eef0ff;color:#3e4a86;font-weight:850;text-align:center;margin:8px 0}
            .pq-iq-table{width:100%;border-collapse:collapse;margin:8px 0;background:#fff;border-radius:10px;overflow:hidden}.pq-iq-table th,.pq-iq-table td{border-bottom:1px solid #dce8ef;padding:6px 8px;text-align:center}.pq-iq-table th{background:#eaf5fa;color:#315a70;font-size:12px}
            .pq-iq-note{color:#4c6878;margin:6px 0}.pq-iq-answer{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:9px 0}.pq-iq-answer input{width:120px}.pq-iq-answer output{font-weight:850;color:#087a5a}
            .pq-iq-home{margin-top:12px;border:1px solid #b9d8c8;border-radius:12px;background:#f4fcf7;overflow:hidden}.pq-iq-home summary{cursor:pointer;padding:11px 12px;font-weight:850;color:#236148;min-height:44px}
            .pq-iq-home summary:focus-visible{outline:3px solid #d99918;outline-offset:-3px}.pq-iq-home-body{padding:0 13px 13px}.pq-iq-home h4{margin:7px 0 4px;color:#245b47}.pq-iq-home ul,.pq-iq-home ol{margin:5px 0 8px;padding-left:22px}.pq-iq-home li{margin:4px 0}
            .pq-iq-observe{padding:9px 10px;background:#e3f4ea;border-radius:9px}.pq-iq-safety{padding:9px 10px;background:#fff4df;border-left:4px solid #d99117;border-radius:7px;color:#694719}
            .pq-iq-dye{transform-box:fill-box;transform-origin:center;animation:pq-iq-diffuse var(--dur) var(--delay) cubic-bezier(.2,.65,.35,1) both}
            .pq-iq-flight{transform-box:fill-box;transform-origin:center;animation:pq-iq-fly 1.1s cubic-bezier(.18,.7,.25,1) both}
            @keyframes pq-iq-diffuse{from{transform:translate(var(--sx),var(--sy)) scale(.45);opacity:.9}to{transform:translate(0,0) scale(1);opacity:.62}}
            @keyframes pq-iq-fly{from{transform:translate(var(--flight-back),0)}to{transform:translate(0,0)}}
            .lab-overlay.pq-is-fullscreen .pq-iq{max-width:1100px;margin:0 auto}.lab-overlay.pq-is-fullscreen .pq-iq-scene svg{max-height:48vh}
            @media(max-width:520px){.pq-iq-controls{align-items:stretch}.pq-iq-controls label{width:100%;justify-content:space-between}.pq-iq-controls input[type=range]{flex:1}.pq-iq-btn{min-height:42px}.pq-iq-scene svg{max-height:none}.pq-iq-table{font-size:12px}}
            @media(prefers-reduced-motion:reduce){.pq-iq-dye,.pq-iq-flight{animation:none}}
            html[data-theme=dark] .pq-iq{color:#e4f2f8}html[data-theme=dark] .pq-iq-note{color:#b5ccd8}html[data-theme=dark] .pq-iq select,html[data-theme=dark] .pq-iq input[type=number]{background:#17364b;color:#eefaff;border-color:#628297}
            html[data-theme=dark] .pq-iq-table{background:#17364b}html[data-theme=dark] .pq-iq-table th{background:#21475f;color:#d6edf8}html[data-theme=dark] .pq-iq-home{background:#153b34}html[data-theme=dark] .pq-iq-home summary,html[data-theme=dark] .pq-iq-home h4{color:#b8efd3}
        `;
        document.head.appendChild(style);
    }

    function homeHtml(kind, state) {
        const guide = GUIDES[kind][lang()] || GUIDES[kind].ru;
        return `<details class="pq-iq-home"${state.homeOpen ? " open" : ""}>
            <summary>🏠 ${esc(guide.title)}</summary><div class="pq-iq-home-body">
            <h4>${esc(L("Понадобится", "Қажет заттар", "You will need"))}</h4><ul>${guide.materials.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            <h4>${esc(L("Как провести", "Қалай жүргізу керек", "How to do it"))}</h4><ol>${guide.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
            <p class="pq-iq-observe"><b>${esc(L("Что наблюдать:", "Не байқау керек:", "What to observe:"))}</b> ${esc(guide.observe)}</p>
            <p class="pq-iq-safety"><b>⚠ ${esc(L("Безопасность:", "Қауіпсіздік:", "Safety:"))}</b> ${esc(guide.safety)}</p>
            </div></details>`;
    }
    function bindHome(container, state) {
        const details = $(".pq-iq-home", container);
        if (details) details.addEventListener("toggle", () => { state.homeOpen = details.open; });
    }
    function baseState(initial) {
        const source = initial && typeof initial === "object" ? initial : {};
        return Object.assign({ homeOpen: false }, clone(source));
    }
    function controller(state, getMessage, isSuccess, onChange, timers) {
        function notify() {
            if (typeof onChange === "function") onChange(clone(state), { success: !!isSuccess(), message: getMessage() });
        }
        return {
            notify,
            getState() { const copy = clone(state); delete copy.flight; return copy; },
            destroy() { timers.forEach((timer) => clearTimeout(timer)); timers.length = 0; }
        };
    }

    function mountSpring(container, options) {
        const initial = baseState(options.state);
        const state = Object.assign({ spring: "medium", loads: 1, log: [], answer: "", verified: false }, initial);
        if (!({ soft: 1, medium: 1, stiff: 1 })[state.spring]) state.spring = "medium";
        state.loads = Math.max(1, Math.min(4, Math.round(Number(state.loads) || 1)));
        state.log = Array.isArray(state.log) ? state.log.slice(0, 4) : [];
        const timers = [];
        const constants = { soft: 10, medium: 20, stiff: 40 };
        const names = {
            soft: L("мягкая", "жұмсақ", "soft"), medium: L("средняя", "орташа", "medium"), stiff: L("жёсткая", "қатты", "stiff")
        };
        function force() { return state.loads * 0.1 * 9.8; }
        function extension() { return force() / constants[state.spring]; }
        function distinctLoads() { return new Set(state.log.map((row) => row.loads)).size; }
        function message() {
            if (state.verified && distinctLoads() >= 2) return L("✅ Два измерения согласуются: F/x даёт одну жёсткость. Закон Гука подтверждён!", "✅ Екі өлшем сәйкес: F/x бір қатаңдықты береді. Гук заңы расталды!", "✅ Two measurements agree: F/x gives the same spring constant. Hooke's law confirmed!");
            if (distinctLoads() >= 2) return L("Два разных измерения записаны. Вычисли k = F/x в Н/м и нажми «Проверить k».", "Екі әртүрлі өлшем жазылды. k = F/x мәнін Н/м бойынша есептеп, «k тексеру» түймесін бас.", "Two different measurements are recorded. Calculate k = F/x in N/m and select ‘Check k’.");
            return L("Запиши измерения при двух разных нагрузках.", "Екі әртүрлі жүктемеде өлшемдерді жазып ал.", "Record measurements at two different loads.");
        }
        const api = controller(state, message, () => state.verified && distinctLoads() >= 2, options.onChange, timers);
        function render() {
            const k = constants[state.spring], f = force(), x = extension(), xCm = x * 100;
            const endY = 91 + xCm * 2;
            let springPath = `M180 38 L180 51`;
            for (let i = 0; i <= 24; i++) {
                const px = 180 + (i % 2 ? 16 : -16), py = 53 + (endY - 60) * i / 24;
                springPath += ` L${px.toFixed(1)} ${py.toFixed(1)}`;
            }
            springPath += ` L180 ${endY.toFixed(1)}`;
            const weights = Array.from({ length: state.loads }, (_, i) => `<rect x="158" y="${endY + i * 17}" width="44" height="15" rx="4" fill="${i % 2 ? "#f0a44c" : "#f6bc68"}" stroke="#9e6628"/><text x="180" y="${endY + 11 + i * 17}" text-anchor="middle" font-size="10" font-weight="800" fill="#664317">100 g</text>`).join("");
            const rows = state.log.map((row) => `<tr><td>${row.loads}</td><td>${num(row.force, 2)}</td><td>${num(row.xCm, 1)}</td></tr>`).join("");
            container.innerHTML = `<div class="pq-iq pq-iq-spring">
                <div class="pq-iq-scene"><svg viewBox="0 0 720 260" role="img" aria-label="${esc(L("Пружина с грузами и линейкой", "Жүктері мен сызғышы бар серіппе", "Spring with masses and a ruler"))}">
                    <path d="M35 31 H325 M180 31 V39" stroke="#52768b" stroke-width="6" stroke-linecap="round"/>
                    <path d="${springPath}" fill="none" stroke="#367a9c" stroke-width="4" stroke-linejoin="round"/>
                    <path d="M142 ${endY - 1} H218" stroke="#52768b" stroke-width="4"/>${weights}
                    <path d="M280 52 V226 M270 52 H290 M270 226 H290" stroke="#8ba7b7" stroke-width="2"/>
                    ${Array.from({ length: 9 }, (_, i) => `<path d="M280 ${57 + i * 20} h${i % 2 ? 9 : 15}" stroke="#7895a6"/><text x="301" y="${61 + i * 20}" font-size="10" fill="#577386">${i * 10}</text>`).join("")}
                    <text x="318" y="46" font-size="12" fill="#577386">cm</text>
                    <path d="M387 72 H688 V226 H387 Z" fill="#ffffff" opacity=".72" stroke="#c4dce8"/>
                    <text x="410" y="101" font-size="15" font-weight="800" fill="#214d65">${esc(L("Текущая установка", "Қазіргі қондырғы", "Current setup"))}</text>
                    <text x="410" y="132" font-size="15" fill="#214d65">m = ${num(state.loads * 0.1, 1)} kg</text>
                    <text x="410" y="160" font-size="15" fill="#214d65">F = mg = ${num(f, 2)} N</text>
                    <text x="410" y="188" font-size="15" fill="#214d65">x = ${num(xCm, 1)} cm = ${num(x, 3)} m</text>
                    <text x="410" y="216" font-size="13" fill="#537386">${esc(L("Пружина:", "Серіппе:", "Spring:"))} ${esc(names[state.spring])}</text>
                </svg></div>
                <div class="pq-iq-formula">F = kx &nbsp; → &nbsp; k = F/x</div>
                <div class="pq-iq-controls"><label>${esc(L("Пружина", "Серіппе", "Spring"))}<select data-field="spring">
                    ${Object.keys(constants).map((id) => `<option value="${id}"${state.spring === id ? " selected" : ""}>${esc(names[id])}</option>`).join("")}</select></label>
                    <button type="button" class="pq-iq-btn" data-action="minus" aria-label="${esc(L("Убрать груз", "Жүкті алу", "Remove a mass"))}">−</button>
                    <b>${esc(L("Грузы:", "Жүктер:", "Masses:"))} ${state.loads}</b>
                    <button type="button" class="pq-iq-btn" data-action="plus" aria-label="${esc(L("Добавить груз", "Жүк қосу", "Add a mass"))}">+</button>
                    <button type="button" class="pq-iq-btn primary" data-action="measure">✎ ${esc(L("Записать измерение", "Өлшемді жазу", "Record measurement"))}</button></div>
                <table class="pq-iq-table"><thead><tr><th>${esc(L("Число грузов", "Жүк саны", "Number of masses"))}</th><th>F, N</th><th>x, cm</th></tr></thead><tbody>${rows || `<tr><td colspan="3">${esc(L("Журнал пока пуст", "Журнал әзірге бос", "The log is empty"))}</td></tr>`}</tbody></table>
                <div class="pq-iq-answer"><label for="pq-iq-k">${esc(L("Твой расчёт k, Н/м:", "Сенің k есебің, Н/м:", "Your calculated k, N/m:"))}</label>
                    <input id="pq-iq-k" data-field="answer" type="number" min="0.1" step="0.1" inputmode="decimal" value="${esc(state.answer)}">
                    <button type="button" class="pq-iq-btn primary" data-action="verify">${esc(L("Проверить k", "k тексеру", "Check k"))}</button>
                    <button type="button" class="pq-iq-btn" data-action="reset">${esc(L("Очистить журнал", "Журналды тазалау", "Clear log"))}</button></div>
                <p class="pq-iq-note">${esc(L("Для зачёта нужны две разные нагрузки и самостоятельно вычисленное k.", "Зачётке екі әртүрлі жүктеме және өзің есептеген k қажет.", "To pass, use two different loads and calculate k yourself."))}</p>
                ${homeHtml("spring", state)}</div>`;
            bindHome(container, state);
            $("[data-field=spring]", container).addEventListener("change", (event) => {
                state.spring = event.target.value; state.log = []; state.verified = false; state.answer = ""; render(); api.notify();
            });
            $("[data-field=answer]", container).addEventListener("input", (event) => {
                state.answer = event.target.value; state.verified = false; api.notify();
            });
            $$('[data-action]', container).forEach((button) => button.addEventListener("click", () => {
                const action = button.dataset.action;
                if (action === "verify") state._checked = true;
                if (action === "measure" || action === "reset") state._checked = false;
                if (action === "minus") { state.loads = Math.max(1, state.loads - 1); state.verified = false; }
                if (action === "plus") { state.loads = Math.min(4, state.loads + 1); state.verified = false; }
                if (action === "measure") {
                    const previous = state.log.find((row) => row.loads === state.loads);
                    const row = { loads: state.loads, force: f, xCm, x };
                    if (previous) Object.assign(previous, row); else state.log.push(row);
                    state.log = state.log.slice(-4); state.verified = false;
                }
                if (action === "verify") {
                    const answer = Number(String(state.answer).replace(",", "."));
                    const average = state.log.reduce((sum, row) => sum + row.force / row.x, 0) / Math.max(1, state.log.length);
                    state.verified = distinctLoads() >= 2 && isFinite(answer) && Math.abs(answer - average) <= Math.max(0.8, average * 0.06);
                }
                if (action === "reset") { state.log = []; state.answer = ""; state.verified = false; }
                render(); api.notify();
            }));
        }
        // Отдельное сообщение после неверного числового ответа не подменяет физику.
        const originalMessage = message;
        api.notify = function () {
            const wrong = distinctLoads() >= 2 && state.answer !== "" && !state.verified && state._checked;
            if (typeof options.onChange === "function") options.onChange(clone(state), {
                success: state.verified && distinctLoads() >= 2,
                message: wrong ? L("Пока не сходится. Используй x в метрах и повтори расчёт F/x.", "Әзірге сәйкес емес. x мәнін метрмен алып, F/x есебін қайтала.", "Not quite. Use x in metres and recalculate F/x.") : originalMessage()
            });
        };
        render(); api.notify();
        return { getState: api.getState, destroy: api.destroy };
    }

    function diffusionDots(cx, temperature) {
        const duration = 4.2 * 293 / (temperature + 273);
        return Array.from({ length: 30 }, (_, i) => {
            const angle = i * 2.39996, radius = 10 + (i % 7) * 12;
            const x = cx + Math.cos(angle) * radius * 1.25;
            const y = 162 + Math.sin(angle) * radius * 0.72 + (i % 3) * 10;
            return `<circle class="pq-iq-dye" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${4 + i % 3}" fill="#b03a79" style="--sx:${(cx - x).toFixed(1)}px;--sy:${(105 - y).toFixed(1)}px;--dur:${duration.toFixed(2)}s;--delay:${(i % 5) * 0.05}s"/>`;
        }).join("");
    }
    function mountDiffusion(container, options) {
        const state = Object.assign({ cold: 10, warm: 60, measured: false, coldTime: 0, warmTime: 0, conclusion: "" }, baseState(options.state));
        state.cold = Math.max(0, Math.min(30, Number(state.cold) || 10));
        state.warm = Math.max(40, Math.min(80, Number(state.warm) || 60));
        const timers = [];
        const api = controller(state, () => {
            if (state.measured && state.conclusion === "warm") return L("✅ Верно: в тёплой воде диффузия быстрее — тепловое движение молекул интенсивнее.", "✅ Дұрыс: жылы суда диффузия тезірек — молекулалардың жылулық қозғалысы қарқындырақ.", "✅ Correct: diffusion is faster in warm water because molecular thermal motion is more intense.");
            if (state.measured && state.conclusion) return L("Сравни условное время в журнале: где окрашивание распространилось быстрее?", "Журналдағы шартты уақытты салыстыр: бояу қай жерде тезірек таралды?", "Compare the model times in the log: where did the colour spread faster?");
            if (state.measured) return L("Опыт проведён. Теперь выбери вывод по результатам двух стаканов.", "Тәжірибе жүргізілді. Енді екі стақанның нәтижесі бойынша қорытынды таңда.", "The experiment is complete. Now choose a conclusion from the two cups.");
            return L("Капни краситель в оба стакана и наблюдай без помешивания.", "Екі стақанға бояу тамыз да, араластырмай бақыла.", "Drop dye into both cups and observe without stirring.");
        }, () => state.measured && state.conclusion === "warm", options.onChange, timers);
        function render() {
            const coldDots = state.measured ? diffusionDots(190, state.cold) : `<circle cx="190" cy="105" r="8" fill="#b03a79"/>`;
            const warmDots = state.measured ? diffusionDots(530, state.warm) : `<circle cx="530" cy="105" r="8" fill="#b03a79"/>`;
            container.innerHTML = `<div class="pq-iq pq-iq-diffusion">
                <div class="pq-iq-scene"><svg viewBox="0 0 720 270" role="img" aria-label="${esc(L("Два стакана с красителем при разной температуре", "Әртүрлі температурадағы бояуы бар екі стақан", "Two cups of dye at different temperatures"))}">
                    <text x="190" y="31" text-anchor="middle" font-size="17" font-weight="800" fill="#24536c">${esc(L("Холодная вода", "Суық су", "Cold water"))} · ${state.cold} °C</text>
                    <text x="530" y="31" text-anchor="middle" font-size="17" font-weight="800" fill="#24536c">${esc(L("Тёплая вода", "Жылы су", "Warm water"))} · ${state.warm} °C</text>
                    ${[70, 410].map((x) => `<path d="M${x} 62 L${x + 17} 239 Q${x + 120} 260 ${x + 223} 239 L${x + 240} 62" fill="#ffffff" fill-opacity=".45" stroke="#6593aa" stroke-width="3"/><path d="M${x + 8} 111 L${x + 17} 237 Q${x + 120} 251 ${x + 223} 237 L${x + 232} 111 Z" fill="#aee1ef" fill-opacity=".47"/>`).join("")}
                    <g>${coldDots}</g><g>${warmDots}</g>
                    <text x="190" y="254" text-anchor="middle" font-size="12" fill="#4b6f82">${state.measured ? esc(L("условное время", "шартты уақыт", "model time")) + " " + state.coldTime + " s" : ""}</text>
                    <text x="530" y="254" text-anchor="middle" font-size="12" fill="#4b6f82">${state.measured ? esc(L("условное время", "шартты уақыт", "model time")) + " " + state.warmTime + " s" : ""}</text>
                </svg></div>
                <div class="pq-iq-controls"><label><span>${esc(L("Холодная, °C", "Суық, °C", "Cold, °C"))}</span><input data-field="cold" type="range" min="0" max="30" step="5" value="${state.cold}"><output data-output="cold">${state.cold}</output></label>
                    <label><span>${esc(L("Тёплая, °C", "Жылы, °C", "Warm, °C"))}</span><input data-field="warm" type="range" min="40" max="80" step="5" value="${state.warm}"><output data-output="warm">${state.warm}</output></label>
                    <button type="button" class="pq-iq-btn primary" data-action="drop">💧 ${esc(L("Капнуть в оба стакана", "Екі стақанға тамызу", "Drop into both cups"))}</button></div>
                <p class="pq-iq-note">${esc(L("Это замедленная качественная модель: секунды на экране не являются реальным временем домашнего опыта.", "Бұл баяулатылған сапалық модель: экрандағы секундтар үй тәжірибесінің нақты уақыты емес.", "This is a slowed qualitative model: the on-screen seconds are not the real time of the home experiment."))}</p>
                <div class="pq-iq-controls" role="group" aria-label="${esc(L("Вывод", "Қорытынды", "Conclusion"))}"><b>${esc(L("Твой вывод:", "Сенің қорытындың:", "Your conclusion:"))}</b>
                    <button type="button" class="pq-iq-btn choice${state.conclusion === "warm" ? " selected" : ""}" data-choice="warm" ${state.measured ? "" : "disabled"}>${esc(L("В тёплой быстрее", "Жылы суда тезірек", "Faster in warm water"))}</button>
                    <button type="button" class="pq-iq-btn choice${state.conclusion === "same" ? " selected" : ""}" data-choice="same" ${state.measured ? "" : "disabled"}>${esc(L("Одинаково", "Бірдей", "The same"))}</button>
                    <button type="button" class="pq-iq-btn choice${state.conclusion === "cold" ? " selected" : ""}" data-choice="cold" ${state.measured ? "" : "disabled"}>${esc(L("В холодной быстрее", "Суық суда тезірек", "Faster in cold water"))}</button></div>
                <div class="pq-iq-formula">${esc(L("Температура ↑ → тепловое движение интенсивнее → диффузия быстрее", "Температура ↑ → жылулық қозғалыс қарқындырақ → диффузия тезірек", "Temperature ↑ → more intense thermal motion → faster diffusion"))}</div>
                ${homeHtml("diffusion", state)}</div>`;
            bindHome(container, state);
            ["cold", "warm"].forEach((field) => {
                const input = $(`[data-field=${field}]`, container);
                input.addEventListener("input", () => { $(`[data-output=${field}]`, container).textContent = input.value; });
                input.addEventListener("change", () => {
                    state[field] = Number(input.value); state.measured = false; state.conclusion = ""; render(); api.notify();
                });
            });
            $("[data-action=drop]", container).addEventListener("click", () => {
                // Для одинакового характерного размера области время диффузии
                // качественно обратно пропорционально абсолютной температуре.
                state.coldTime = Math.round(180 * 293 / (state.cold + 273));
                state.warmTime = Math.round(180 * 293 / (state.warm + 273));
                state.measured = true; state.conclusion = ""; render(); api.notify();
            });
            $$('[data-choice]', container).forEach((button) => button.addEventListener("click", () => {
                state.conclusion = button.dataset.choice; render(); api.notify();
            }));
        }
        render(); api.notify();
        return { getState: api.getState, destroy: api.destroy };
    }

    function mountRocket(container, options) {
        const state = Object.assign({ air: 2, launches: [], conclusion: "", lastDistance: null, flight: false }, baseState(options.state));
        state.air = Math.max(1, Math.min(5, Math.round(Number(state.air) || 2)));
        state.launches = Array.isArray(state.launches) ? state.launches.slice(-6) : [];
        const timers = [];
        function distinctAir() { return new Set(state.launches.map((row) => row.air)).size; }
        const api = controller(state, () => {
            if (distinctAir() >= 2 && state.conclusion === "more") return L("✅ Два запуска подтверждают вывод: воздух движется назад, шарик — вперёд; больший запас воздуха дал большую дальность.", "✅ Екі ұшыру қорытындыны растайды: ауа артқа, шар алға қозғалады; ауа көбірек болса, қашықтық артты.", "✅ Two launches support the conclusion: air moves backwards, the balloon forwards; more air gave a longer range.");
            if (distinctAir() >= 2 && state.conclusion) return L("Посмотри на обе строки журнала: при каком запасе воздуха дальность оказалась больше?", "Журналдың екі жолын қара: ауа қоры қандайда қашықтық артық болды?", "Look at both log entries: which amount of air gave the longer range?");
            if (distinctAir() >= 2) return L("Два разных запуска записаны. Выбери вывод о влиянии запаса воздуха.", "Екі әртүрлі ұшыру жазылды. Ауа қорының әсері туралы қорытынды таңда.", "Two different launches are recorded. Choose a conclusion about the amount of air.");
            if (state.launches.length) return L("Теперь измени количество воздуха и выполни ещё один запуск.", "Енді ауа мөлшерін өзгертіп, тағы бір ұшыру жүргіз.", "Now change the amount of air and make another launch.");
            return L("Надуй шарик и отпусти. Для сравнения нужны два запуска с разным запасом воздуха.", "Шарды үрлеп, босат. Салыстыру үшін ауа қоры әртүрлі екі ұшыру қажет.", "Inflate and release the balloon. You need two launches with different amounts of air.");
        }, () => distinctAir() >= 2 && state.conclusion === "more", options.onChange, timers);
        function render() {
            const distance = state.lastDistance == null ? 0 : Number(state.lastDistance);
            const finalX = 112 + distance * 240;
            const flightStyle = state.flight ? ` style="--flight-back:-${(finalX - 112).toFixed(1)}px"` : "";
            const groupClass = state.flight ? "pq-iq-flight" : "";
            const rows = state.launches.map((row, index) => `<tr><td>${index + 1}</td><td>${row.air}</td><td>${num(row.distance, 2)}</td></tr>`).join("");
            container.innerHTML = `<div class="pq-iq pq-iq-rocket">
                <div class="pq-iq-scene"><svg viewBox="0 0 720 260" role="img" aria-label="${esc(L("Воздушный шарик движется вдоль натянутой нитки", "Ауа шары тартылған жіп бойымен қозғалады", "A balloon moving along a stretched string"))}">
                    <path d="M48 116 H675" stroke="#6d8290" stroke-width="3"/><path d="M48 91 V142 M675 91 V142" stroke="#526b7b" stroke-width="7" stroke-linecap="round"/>
                    ${Array.from({ length: 11 }, (_, i) => `<path d="M${112 + i * 48} 205 v${i % 2 ? 8 : 14}" stroke="#9bb0bc"/><text x="${112 + i * 48}" y="232" text-anchor="middle" font-size="10" fill="#688394">${num(i * 0.2, 1)}</text>`).join("")}
                    <text x="670" y="233" text-anchor="end" font-size="11" fill="#688394">m</text>
                    <g transform="translate(${finalX.toFixed(1)} 0)"><g class="${groupClass}"${flightStyle}>
                        <rect x="-43" y="105" width="86" height="20" rx="9" fill="#e7f5fa" stroke="#4a7a90" stroke-width="2"/>
                        <path d="M-25 109 V121 M25 109 V121" stroke="#d3a43d" stroke-width="7"/>
                        <path d="M-48 85 C-49 38 40 34 48 82 C55 113 27 128 4 105 L-8 105 C-34 129 -50 111 -48 85 Z" fill="#f28b82" stroke="#ad524d" stroke-width="2"/>
                        <path d="M-49 94 L-62 99 L-50 105 Z" fill="#d66c65" stroke="#ad524d"/>
                        ${state.lastDistance != null ? `<path d="M-70 99 H-112 M-112 99 l14 -8 M-112 99 l14 8" stroke="#3d8caf" stroke-width="4" fill="none"/><path d="M58 78 H96 M96 78 l-14 -8 M96 78 l-14 8" stroke="#24815d" stroke-width="4" fill="none"/>` : ""}
                    </g></g>
                    ${state.lastDistance != null ? `<text x="76" y="55" font-size="13" font-weight="800" fill="#2a7799">${esc(L("воздух назад", "ауа артқа", "air backwards"))}</text><text x="550" y="55" font-size="13" font-weight="800" fill="#247452">${esc(L("шарик вперёд", "шар алға", "balloon forwards"))}</text>` : `<text x="360" y="55" text-anchor="middle" font-size="14" fill="#527386">${esc(L("Запас воздуха:", "Ауа қоры:", "Air level:"))} ${state.air} / 5</text>`}
                </svg></div>
                <div class="pq-iq-controls"><b>${esc(L("Накачать воздух:", "Ауа құю:", "Add air:"))}</b><button type="button" class="pq-iq-btn" data-action="minus" aria-label="${esc(L("Уменьшить запас воздуха", "Ауа қорын азайту", "Reduce air"))}">−</button><span>${state.air} / 5</span><button type="button" class="pq-iq-btn" data-action="plus" aria-label="${esc(L("Увеличить запас воздуха", "Ауа қорын арттыру", "Increase air"))}">+</button>
                    <button type="button" class="pq-iq-btn primary" data-action="launch">🚀 ${esc(L("Отпустить шарик", "Шарды босату", "Release balloon"))}</button></div>
                <table class="pq-iq-table"><thead><tr><th>${esc(L("Запуск", "Ұшыру", "Launch"))}</th><th>${esc(L("Воздух, деления", "Ауа, бөлік", "Air, levels"))}</th><th>${esc(L("Модельная дальность, м", "Модельдік қашықтық, м", "Model range, m"))}</th></tr></thead><tbody>${rows || `<tr><td colspan="3">${esc(L("Журнал пока пуст", "Журнал әзірге бос", "The log is empty"))}</td></tr>`}</tbody></table>
                <p class="pq-iq-note">${esc(L("Дальность здесь — учебная модель для сравнения, а не универсальная формула настоящего шарика.", "Мұндағы қашықтық — салыстыруға арналған оқу моделі, нақты шардың әмбебап формуласы емес.", "The range is a teaching model for comparison, not a universal formula for a real balloon."))}</p>
                <div class="pq-iq-controls" role="group" aria-label="${esc(L("Вывод", "Қорытынды", "Conclusion"))}"><b>${esc(L("Больше воздуха — обычно…", "Ауа көбірек болса — әдетте…", "More air usually means…"))}</b>
                    <button type="button" class="pq-iq-btn choice${state.conclusion === "more" ? " selected" : ""}" data-choice="more" ${distinctAir() >= 2 ? "" : "disabled"}>${esc(L("больше дальность", "қашықтық артады", "a longer range"))}</button>
                    <button type="button" class="pq-iq-btn choice${state.conclusion === "same" ? " selected" : ""}" data-choice="same" ${distinctAir() >= 2 ? "" : "disabled"}>${esc(L("та же дальность", "қашықтық бірдей", "the same range"))}</button>
                    <button type="button" class="pq-iq-btn choice${state.conclusion === "less" ? " selected" : ""}" data-choice="less" ${distinctAir() >= 2 ? "" : "disabled"}>${esc(L("меньше дальность", "қашықтық азаяды", "a shorter range"))}</button></div>
                <div class="pq-iq-formula">${esc(L("Струя воздуха назад → шарик вперёд (действие и противодействие)", "Ауа ағыны артқа → шар алға (әсер және қарсы әсер)", "Air jet backwards → balloon forwards (action and reaction)"))}</div>
                ${homeHtml("rocket", state)}</div>`;
            bindHome(container, state);
            $$('[data-action]', container).forEach((button) => button.addEventListener("click", () => {
                const action = button.dataset.action;
                if (action === "minus" || action === "plus") {
                    state.air = Math.max(1, Math.min(5, state.air + (action === "plus" ? 1 : -1)));
                    state.lastDistance = null; state.flight = false; state.conclusion = "";
                }
                if (action === "launch") {
                    const distanceNow = Number((0.3 + state.air * 0.35).toFixed(2));
                    state.launches.push({ air: state.air, distance: distanceNow });
                    state.launches = state.launches.slice(-6); state.lastDistance = distanceNow; state.flight = true; state.conclusion = "";
                    timers.push(setTimeout(() => { state.flight = false; }, 1200));
                }
                render(); api.notify();
            }));
            $$('[data-choice]', container).forEach((button) => button.addEventListener("click", () => {
                state.conclusion = button.dataset.choice; state.flight = false; render(); api.notify();
            }));
        }
        render(); api.notify();
        return { getState: api.getState, destroy: api.destroy };
    }

    function mount(kind, container, options) {
        addStyles();
        container.innerHTML = "";
        if (kind === "spring") return mountSpring(container, options || {});
        if (kind === "diffusion") return mountDiffusion(container, options || {});
        if (kind === "rocket") return mountRocket(container, options || {});
        throw new Error("Unknown inquiry lab: " + kind);
    }

    function mountGallery() {
        const spec = SPECS[grade];
        if (!spec) return;
        const host = grade === 7 ? document.getElementById("field-sim-grid") : document.getElementById("pq-sim89-grid");
        if (!host || host.querySelector(`[data-inquiry-game="${spec.level}"]`)) return;
        const card = document.createElement("button");
        card.type = "button";
        card.className = grade === 7 ? "field-sim-card" : "pq-sim89-card";
        card.dataset.inquiryGame = String(spec.level);
        const icon = document.createElement("span"); icon.className = grade === 7 ? "field-sim-icon" : "pq-sim89-card-icon"; icon.textContent = spec.icon;
        const chapter = document.createElement("span"); chapter.className = grade === 7 ? "field-sim-card-chapter" : "pq-sim89-card-chapter";
        chapter.textContent = L("Практика + домашний опыт", "Практика + үй тәжірибесі", "Hands-on + home experiment");
        const title = document.createElement("b"); title.textContent = lang() === "kk" ? spec.titleKk : lang() === "en" ? spec.titleEn : spec.title;
        const description = document.createElement("small"); description.textContent = lang() === "kk" ? spec.descKk : lang() === "en" ? spec.descEn : spec.desc;
        const action = document.createElement("em"); action.textContent = L("Провести исследование →", "Зерттеу жүргізу →", "Start investigation →");
        card.append(icon, chapter, title, description, action);
        card.addEventListener("click", () => {
            if (typeof LabGames !== "undefined") LabGames.show(window.GRADE_LAB_GAMES_CONFIG[spec.level], null);
        });
        let target = null;
        if (grade === 7) target = host.querySelector('[data-sim="p15_weight"]');
        if (grade === 8) target = host.querySelector('[data-s89="g8_heat_cond"]');
        if (grade === 9) target = host.querySelector('[data-s89="g9_ballistics"]');
        if (target && target.parentNode) target.parentNode.insertBefore(card, grade === 8 ? target : target.nextSibling);
        else if (grade === 7) host.appendChild(card);
        else (host.querySelector(".pq-sim89-topic-grid") || host).appendChild(card);
    }

    const spec = SPECS[grade];
    if (spec) {
        window.GRADE_LAB_GAMES_CONFIG = window.GRADE_LAB_GAMES_CONFIG || {};
        window.GRADE_LAB_GAMES_CONFIG[spec.level] = Object.assign({ type: "inquiry" }, spec);
    }
    window.PQInquiryLabs = { mount, mountGallery };
    mountGallery();
})();
