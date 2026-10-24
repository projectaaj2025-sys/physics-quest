/* ===== Уникальные модули 9 класса: Лаб. мини-игры (45-48), Комикс «Дневник экспедиции», Боссы и Механики ===== */
window.GRADE_LAB_GAMES_CONFIG = {
        // 9 класс лабы 45-48 - виртуальный эксперимент со слайдерами
        45: { type:"slider", title:"🔬 Лаб 45: Желоб — ускорение", desc:"Шарик катится по наклонному желобу. Формула: a = 2·s / t². Эксперимент показал a≈1.4 м/с². Подбери s (путь) и t (время) чтобы попасть в цель.", sliders:[{id:"s", label:"Путь s, м", labelEn:"Distance s, m", labelKk:"Жол s, м", min:0.4, max:1.6, step:0.1, val:0.8}, {id:"t", label:"Время t, с", labelEn:"Time t, s", labelKk:"Уақыт t, с", min:0.7, max:2.0, step:0.1, val:1.0}], formula:(v)=>2*v.s/(v.t*v.t), target:1.4, tol:0.15, unit:"м/с²", formulaStr:"a = 2·s / t²", hint:"Увеличь s или уменьши t чтобы увеличить a", titleEn:"🔬 Lab 45: Ramp — acceleration", titleKk:"🔬 45-зертхана: Науа — үдеу", descEn:"A ball rolls down an inclined ramp. Formula: a = 2·s / t². The experiment gave a≈1.4 m/s². Pick s (distance) and t (time) to hit the target.", descKk:"Шарик көлбеу науамен домалайды. Формула: a = 2·s / t². Тәжірибе a≈1,4 м/с² көрсетті. Мақсатқа жету үшін s (жол) және t (уақыт) мәндерін таңда.", hintEn:"Increase s or decrease t to raise a", hintKk:"a-ны өсіру үшін s-ті ұлғайт немесе t-ны азайт" },
        46: { type:"slider", title:"🔬 Лаб 46: Полет со стола", desc:"Шарик слетает со стола: дальность s, высота h. Начальная скорость v₀ = s·√(g/2h), g=9.8. Dobейся v₀≈2.2 м/с как в опыте.", sliders:[{id:"s", label:"Дальность s, м", labelEn:"Range s, m", labelKk:"Қашықтық s, м", min:0.3, max:1.0, step:0.05, val:0.5}, {id:"h", label:"Высота h, м", labelEn:"Height h, m", labelKk:"Биіктік h, м", min:0.4, max:1.1, step:0.05, val:0.7}], formula:(v)=>v.s*Math.sqrt(9.8/(2*v.h)), target:2.2, tol:0.2, unit:"м/с", formulaStr:"v₀ = s·√(g/2h)", hint:"Больше s и меньше h — больше скорость", titleEn:"🔬 Lab 46: Flight off the table", titleKk:"🔬 46-зертхана: Үстелден ұшу", descEn:"The ball flies off the table: range s, height h. Initial speed v₀ = s·√(g/2h), g=9.8. Reach v₀≈2.2 m/s as in the experiment.", descKk:"Шарик үстелден ұшады: қашықтық s, биіктік h. Бастапқы жылдамдық v₀ = s·√(g/2h), g=9,8. Тәжірибедегідей v₀≈2,2 м/с ал.", hintEn:"Larger s and smaller h give a larger speed", hintKk:"s көп, h аз болса — жылдамдық көбірек" },
        47: { type:"slider", title:"🔬 Лаб 47: Маятник — измерь g", desc:"Математический маятник: период T=2π·√(L/g). Ты меняешь длину L, измеряешь T. Подбери L чтобы T≈1.4 с (тогда g≈9.8).", sliders:[{id:"L", label:"Длина L, м", labelEn:"Length L, m", labelKk:"Ұзындық L, м", min:0.3, max:1.2, step:0.05, val:0.5}], formula:(v)=>2*Math.PI*Math.sqrt(v.L/9.8), target:1.42, tol:0.1, unit:"с", formulaStr:"T = 2π·√(L/g)", hint:"T растет как √L — длиннее маятник = больше период", titleEn:"🔬 Lab 47: Pendulum — measure g", titleKk:"🔬 47-зертхана: Маятник — g өлшеу", descEn:"A simple pendulum: period T=2π·√(L/g). You change the length L and measure T. Pick L so that T≈1.4 s (then g≈9.8).", descKk:"Математикалық маятник: период T=2π·√(L/g). Ұзындық L-ді өзгертіп, T-ны өлшейсің. T≈1,4 с болатындай L таңда (сонда g≈9,8).", hintEn:"T grows as √L — a longer pendulum means a longer period", hintKk:"T √L бойынша өседі — маятник ұзын болса, период көбірек" },
        48: { type:"slider", title:"🔬 Лаб 48: Волны на воде", desc:"Скорость волны v = λ·ν (длина волны × частота). Подбери λ и ν чтобы v≈0.45 м/с как в кювете.", sliders:[{id:"lam", label:"Длина λ, м", labelEn:"Wavelength λ, m", labelKk:"Ұзындық λ, м", min:0.04, max:0.12, step:0.01, val:0.06}, {id:"nu", label:"Частота ν, Гц", labelEn:"Frequency ν, Hz", labelKk:"Жиілік ν, Гц", min:2, max:8, step:0.5, val:4}], formula:(v)=>v.lam*v.nu, target:0.45, tol:0.06, unit:"м/с", formulaStr:"v = λ·ν", hint:"v = длина × частота", titleEn:"🔬 Lab 48: Waves on water", titleKk:"🔬 48-зертхана: Судағы толқындар", descEn:"Wave speed v = λ·ν (wavelength × frequency). Pick λ and ν to get v≈0.45 m/s as in the tank.", descKk:"Толқын жылдамдығы v = λ·ν (толқын ұзындығы × жиілік). Кюветадағыдай v≈0,45 м/с алу үшін λ мен ν таңда.", hintEn:"v = wavelength × frequency", hintKk:"v = ұзындық × жиілік" },

    };

function episodeForLevel(levelId) {
    if (typeof EPISODES === "undefined") return null;
    const n = Number(levelId);
    return EPISODES.find(ep => Array.isArray(ep.levels) && ep.levels.includes(n)) || null;
}

function epText(ep, field) {
    if (!ep) return "";
    const L = (typeof I18n !== "undefined" && I18n.currentLang) || "ru";
    const suf = L === "en" ? "En" : L === "kk" ? "Kk" : "";
    return (suf && ep[field + suf]) || ep[field] || "";
}

function episodeBriefingHtml(levelId) {
    const ep = episodeForLevel(levelId);
    if (!ep) return "";
    return `<div class="episode-briefing" style="border-left:4px solid ${ep.color || '#00b8d4'}; padding:10px 14px; margin-bottom:14px; background:rgba(0,184,212,0.06); border-radius:10px;">
        <div style="font-weight:800; color:${ep.color || '#008ba3'}; margin-bottom:4px;">🛰️ ${escapeHtml(epText(ep, "title"))}</div>
        <div style="font-size:0.93rem; line-height:1.45;">${escapeHtml(epText(ep, "briefing"))}</div>
    </div>`;
}

const KvantArchive = {
    logs: [
        { id:1, stars:3, ico:"📡",
          title:{ru:"Лог 01: Первый контакт",en:"Log 01: First Contact",kk:"01-лог: Алғашқы байланыс"},
          text:{ru:"Квант записал: «Я ждал 50 лет. Сканеры шептали, что угроза вернётся. Когда ты нажал „Начать игру“ — мои реакторы впервые за полвека вышли на 100%. Спасибо.»",
                en:"QUANT recorded: “I waited 50 years. The scanners whispered that the threat would return. When you pressed ‘Start game’, my reactors reached 100% for the first time in half a century. Thank you.”",
                kk:"Квант жазды: «Мен 50 жыл күттім. Сканерлер қауіп қайтады деп сыбырлады. Сен „Ойынды бастау“ түймесін басқанда, реакторларым жарты ғасырда алғаш рет 100%-ға шықты. Рахмет.»"},
          meta:{ru:"Открывается за 3★ на ур.1",en:"Unlocked at 3★ on level 1",kk:"1-деңгейде 3★-пен ашылады"} },
        { id:2, stars:12, ico:"🛰️",
          title:{ru:"Лог 12: О звёздах",en:"Log 12: About the Stars",kk:"12-лог: Жұлдыздар туралы"},
          text:{ru:"«Ты знаешь, почему я люблю астрономию? Звёзды не врут. Люди придумали созвездия, чтобы не заблудиться. Ты уже не заблудишься — твоя карта работает.»",
                en:"“Do you know why I love astronomy? The stars never lie. People invented constellations so as not to get lost. You will not get lost any more — your map works.”",
                kk:"«Астрономияны неге жақсы көретінімді білесің бе? Жұлдыздар алдамайды. Адамдар адаспау үшін шоқжұлдыздарды ойлап тапты. Енді сен адаспайсың — картаң жұмыс істейді.»"},
          meta:{ru:"12★ всего",en:"12★ total",kk:"Барлығы 12★"} },
        { id:3, stars:24, ico:"⚛️",
          title:{ru:"Лог 24: О делении",en:"Log 24: About Fission",kk:"24-лог: Бөліну туралы"},
          text:{ru:"«Я видел, как делили ядро в 1942. Страшно. Но ты сегодня делишь только задачи на шаги. И это правильно. Сила — не во взрыве, а в контроле.»",
                en:"“I saw a nucleus split in 1942. It was terrifying. But today you only split problems into steps. And that is right. Strength lies not in the explosion, but in control.”",
                kk:"«1942 жылы ядроның бөлінгенін көрдім. Қорқынышты. Ал бүгін сен тек есептерді қадамдарға бөлесің. Бұл дұрыс. Күш — жарылыста емес, бақылауда.»"},
          meta:{ru:"24★ всего",en:"24★ total",kk:"Барлығы 24★"} },
        { id:4, stars:36, ico:"💾",
          title:{ru:"Лог 36: О тебе",en:"Log 36: About You",kk:"36-лог: Сен туралы"},
          text:{ru:"«Я храню твоё имя в самом защищённом кластере. Не за очки. За то, как ты не сдался на боссе §19. Это было… по-человечески.»",
                en:"“I keep your name in the most protected cluster. Not for points. For the way you did not give up at the §19 boss. That was… very human.”",
                kk:"«Есіміңді ең қорғалған кластерде сақтаймын. Ұпай үшін емес. §19 боссында берілмегенің үшін. Бұл… адамға тән еді.»"},
          meta:{ru:"36★ всего",en:"36★ total",kk:"Барлығы 36★"} },
        { id:5, stars:48, ico:"🌍",
          title:{ru:"Секретный лог: Земля",en:"Secret Log: Earth",kk:"Құпия лог: Жер"},
          text:{ru:"«Слушай… на самом деле я мог справиться сам. Но мне нужен был не пилот. Мне нужен был тот, кто потом расскажет другим. Ты — мой передатчик. Лети. Расскажи.»",
                en:"“Listen… in fact I could have managed alone. But I did not need a pilot. I needed someone who would tell others afterwards. You are my transmitter. Fly. Tell them.”",
                kk:"«Тыңда… шын мәнінде мен өзім де бітіре алар едім. Бірақ маған ұшқыш керек емес еді. Маған кейін басқаларға айтатын адам керек болды. Сен — менің таратқышымсың. Ұш. Айт.»"},
          meta:{ru:"48★ — все лабы на 3★",en:"48★ — all labs at 3★",kk:"48★ — барлық зертхана 3★-пен"} }
    ],
    _t(o){ if(!o) return ""; if(typeof o==="string") return o; const L=(typeof I18n!=="undefined"&&I18n.currentLang)||"ru"; return o[L]||o.ru||o.en||o.kk||""; },
    render(){
        const el=document.getElementById("kvant-archive");
        if(!el) return;
        const L=(typeof I18n!=="undefined"&&I18n.currentLang)||"ru";
        const txt={
            ru:{lock:"— закрой "+"{n}"+"★", hidden:"??? Заработай звёзды, чтобы расшифровать сигнал.", decoded:"расшифровано ✅", encoded:"зашифровано", foot:"Всего звёзд: {s} / 144 • Открой все 5 логов!"},
            en:{lock:"— earn "+"{n}"+"★", hidden:"??? Earn stars to decrypt the signal.", decoded:"decrypted ✅", encoded:"encrypted", foot:"Total stars: {s} / 144 • Unlock all 5 logs!"},
            kk:{lock:"— "+"{n}"+"★ жина", hidden:"??? Сигналды шешу үшін жұлдыз жина.", decoded:"шешілді ✅", encoded:"шифрланған", foot:"Барлық жұлдыз: {s} / 144 • 5 логтың бәрін аш!"}
        }[L]||{};
        const totalStars = (()=>{
            try{
                const hist=Storage.getHistory();
                let s=0;
                hist.forEach(r=>{ if(r.victory) s+=(r.stars||1); });
                return s;
            }catch(e){ return 0; }
        })();
        el.innerHTML = this.logs.map(l=>{
            const unlocked = totalStars >= l.stars;
            const lockTxt = (txt.lock||"").replace("{n}", l.stars);
            return `<div class="kvant-log ${unlocked?'':'locked'}">
                <div class="log-ico">${unlocked?l.ico:'🔒'}</div>
                <div style="flex:1">
                    <b>${this._t(l.title)} ${unlocked?'':lockTxt}</b>
                    <p>${unlocked?this._t(l.text):(txt.hidden||"")}</p>
                    <div class="log-meta">${this._t(l.meta)} • ${unlocked?(txt.decoded||""):(txt.encoded||"")}</div>
                </div>
            </div>`;
        }).join("") + `<div style="text-align:center; font-size:12px; color:var(--text-dim); margin-top:6px">${(txt.foot||"").replace("{s}", totalStars)}</div>`;
    }
};

const BossIntro = {
    bossQuotes: {
        8: {ru:"КВАНТ: «Курсант, это Гравитрон! Он искривляет пространство — даже свет не убежит. Смотри на колодцы, не лети в лоб!\"",en:"QUANT: \"Cadet, this is Gravitron! It bends space — even light can't escape. Watch the wells!\"",kk:"КВАНТ: «Курсант, бұл Гравитрон! Ол кеңістікті иеді — тіпті жарық қашып құтылмайды. Құдықтарға қара!\""},
        13: {ru:"КВАНТ: «Это — Параллакс. Он прячется за звездами. Измерь его смещение, иначе не найдешь!\"",en:"QUANT: \"This is Parallax. It hides behind stars. Measure its shift!\"",kk:"КВАНТ: «Бұл — Параллакс. Ол жұлдыздар артында жасырынады. Ығысуын өлше!\""},
        20: {ru:"КВАНТ: «Встречай Баллистику — королеву спутников. Она знает первую космическую лучше тебя. Докажи обратное!\"",en:"QUANT: \"Meet Ballistics — queen of satellites. She knows first cosmic better than you!\"",kk:"КВАНТ: «Баллистиканы қарсы ал — спутниктер патшайымы. Бірінші ғарыштықты сенен жақсы біледі!\""},
        24: {ru:"КВАНТ: «Ядро Энергии проснулось! Оно питается твоими ошибками. Бей точно — и оно уснет.\"",en:"QUANT: \"Energy Core awakened! It feeds on your mistakes. Hit precisely!\"",kk:"КВАНТ: «Энергия Ядросы оянды! Қателеріңмен қоректенеді. Дәл ти!\""},
        32: {ru:"КВАНТ: «Резонатор! Он ловит твою частоту. Нажми ИМПУЛЬС в такт, иначе разнесет щит.\"",en:"QUANT: \"Resonator! It catches your frequency. Press PULSE in rhythm!\"",kk:"КВАНТ: «Резонатор! Жиілігіңді ұстайды. Ырғақта ИМПУЛЬС бас!\""},
        37: {ru:"КВАНТ: «Атомный Призрак — он из квантов. Фотоэффект остановит его. Помни про h·ν!\"",en:"QUANT: \"Atomic Ghost — made of quanta. Photoeffect will stop it. Remember h·ν!\"",kk:"КВАНТ: «Атомдық Елес — кванттардан. Фотоэффект тоқтатады. h·ν есіңде!\""},
        42: {ru:"КВАНТ: «Это Ядро древнего реактора. Финальный босс. Если проиграешь — Земля получит дозу. Ты готов?\"",en:"QUANT: \"This is Core of ancient reactor. Final boss. If you lose — Earth gets irradiated. Ready?\"",kk:"КВАНТ: «Бұл ежелгі реактор Ядросы. Финал босс. Жеңілсең — Жер сәуле алады. Дайынсың ба?\""},
        48: {ru:"КВАНТ: «Последний эксперимент — сама вода! Волны в кювете шепчут: v=λ·ν. Услышишь?\"",en:"QUANT: \"Final experiment — water itself! Waves whisper: v=λ·ν. Will you hear?\"",kk:"КВАНТ: «Соңғы тәжірибе — судың өзі! Толқындар сыбырлайды: v=λ·ν. Естисің бе?\""}
    },
    show(levelId, levelConfig, onGo){
        const raw=this.bossQuotes[levelId];
        const L=(typeof I18n!=="undefined"&&I18n.currentLang)||"ru";
        let quotes="";
        if(raw){ quotes= typeof raw==="string" ? raw : (raw[L]||raw.ru||raw.en); } else { quotes= L==="en" ? `QUANT: "Boss level ${levelId}. Ready? This is your exam."` : L==="kk" ? `КВАНТ: «${levelId} деңгей боссы. Дайынсың ба? Бұл емтиханың.»` : `КВАНТ: «Босс уровня ${levelId}. Готов? Это твой экзамен.»`; }
        const epData = typeof EPISODES!=="undefined" ? EPISODES.find(e=>e.levels.includes(levelId)) : null;
        const epTitle = epData ? (L==="kk" ? (epData.titleKk||epData.title) : L==="en" ? (epData.titleEn||epData.title) : epData.title) : I18n.t("bossIntroBossWord")+" "+levelId;
        if(document.getElementById("boss-intro-ep")) document.getElementById("boss-intro-ep").textContent= epTitle;
        const bossDesc = (typeof levelDescText==="function" && levelDescText(levelConfig)) || levelConfig.desc || I18n.t("bossIntroThreat");
        if(document.getElementById("boss-intro-title")) document.getElementById("boss-intro-title").textContent= levelConfig.boss ? I18n.t("bossIntroLabel", levelId, bossDesc) : I18n.t("bossIntroFinale");
        if(document.getElementById("boss-intro-quote")) document.getElementById("boss-intro-quote").textContent= quotes;
        const overlay=document.getElementById("boss-intro");
        overlay.classList.add("active");
        const goBtn=document.getElementById("boss-intro-go");
        let done=false;
        const finish=()=>{
            if(done) return;
            done=true;
            overlay.classList.remove("active");
            document.removeEventListener("keydown", onKey);
            // onGo необязателен: движок может открыть интро и без колбэка
            if (typeof onGo === "function") { try { onGo(); } catch (e) {} }
        };
        const onKey=(e)=>{ if(e.code==="Space"||e.code==="Enter") finish(); };
        goBtn.onclick=finish;
        document.addEventListener("keydown", onKey);
        // авто через 6 сек
        setTimeout(()=>{ if(!done) { goBtn.textContent=I18n.t("bossIntroGoNow"); goBtn.classList.add("pulse"); } }, 2500);
    }
};

// 3 концовки на экране победы
const Endings = {
    getEnding(result, totalStars){
        const acc=result.accuracy||0;
        const s=totalStars||0;
        const L=(typeof I18n!=="undefined"&&I18n.currentLang)||"ru";
        const pick=(o)=>o[L]||o.ru;
        let e;
        if(acc>=90 && s>=80) e={ key:"perfect", badge:"good",
            title:{ru:"🌟 ЗЕМЛЯ СПАСЕНА ИДЕАЛЬНО!",en:"🌟 EARTH SAVED PERFECTLY!",kk:"🌟 ЖЕР МІНСІЗ ҚҰТҚАРЫЛДЫ!"},
            desc:{ru:"Квант плачет (насколько может ИИ): «Ты не просто пилот — ты легенда. Щит держит 100 лет. Я ухожу в сон… но оставлю тебе ключ от мостика.»",
                  en:"QUANT weeps (as far as an AI can): “You are not just a pilot — you are a legend. The shield will hold for 100 years. I am going back to sleep… but I will leave you the key to the bridge.”",
                  kk:"Квант жылайды (ЖИ қаншалықты жылай алса): «Сен тек ұшқыш емес — сен аңызсың. Қалқан 100 жыл ұстайды. Мен ұйқыға кетемін… бірақ саған көпірдің кілтін қалдырамын.»"},
            reward:{ru:"+ секретный скин «Квант»",en:"+ secret QUANT skin",kk:"+ құпия «Квант» бейнесі"} };
        else if(result.victory && acc>=60) e={ key:"good", badge:"good",
            title:{ru:"🌍 ЗЕМЛЯ СПАСЕНА!",en:"🌍 EARTH SAVED!",kk:"🌍 ЖЕР ҚҰТҚАРЫЛДЫ!"},
            desc:{ru:"«Мы сделали это! Реактор заглушён. Экипаж с Земли уже летит. А тебе — отпуск. И мой личный лог #5.»",
                  en:"“We did it! The reactor is shut down. The crew from Earth is already on its way. And you get a holiday. Plus my personal log #5.”",
                  kk:"«Біз бұны істедік! Реактор сөндірілді. Жерден экипаж келе жатыр. Ал саған — демалыс. Және менің жеке 5-логым.»"},
            reward:{ru:"+ 50 💎",en:"+ 50 💎",kk:"+ 50 💎"} };
        else e={ key:"neutral", badge:"neutral",
            title:{ru:"⚠️ ЗЕМЛЯ ПОВРЕЖДЕНА, НО ЖИВА",en:"⚠️ EARTH DAMAGED BUT ALIVE",kk:"⚠️ ЖЕР ЗАҚЫМДАЛДЫ, БІРАҚ ТІРІ"},
            desc:{ru:"«Щит выдержал, но города получили урон. Это — не поражение. Это — твой первый урок. Вернись и закрой уровень на 3 звезды.»",
                  en:"“The shield held, but the cities took damage. This is not a defeat. This is your first lesson. Come back and finish the level with 3 stars.”",
                  kk:"«Қалқан шыдады, бірақ қалалар зақым алды. Бұл — жеңіліс емес. Бұл — саған берілген бірінші сабақ. Қайта оралып, деңгейді 3 жұлдызбен бітір.»"},
            reward:{ru:"",en:"",kk:""} };
        return { key:e.key, badge:e.badge, title:pick(e.title), desc:pick(e.desc), reward:pick(e.reward) };
    }
};


/* ===== Дневник экспедиции — комикс между эпизодами ===== */

const Diary = {
    // helper для локализации
    _t(obj){ if(!obj) return ""; if(typeof obj==="string") return obj; const L=(typeof I18n!=="undefined"&&I18n.currentLang)||"ru"; return obj[L]||obj.ru||obj.en||obj.kk||""; },
    entries: [
        { ep:0, title:{ru:"Пролог: Сигнал",en:"Prologue: Signal",kk:"Пролог: Сигнал"}, date:{ru:"12 марта 2087, 03:14",en:"March 12, 2087, 03:14",kk:"12 наурыз 2087, 03:14"}, panels:[
            { art:"🛰️💤", who:{ru:"КВАНТ",en:"QUANT",kk:"КВАНТ"}, text:{ru:"Я спал 50 лет. Реакторы — 0%. Экипаж — на Земле. Приказ: ждать.",en:"I slept for 50 years. Reactors at 0%. Crew on Earth. Order: wait.",kk:"Мен 50 жыл ұйықтадым. Реакторлар — 0%. Экипаж — Жерде. Бұйрық: күту."} },
            { art:"📡⚡", who:{ru:"СИГНАЛ",en:"SIGNAL",kk:"СИГНАЛ"}, text:{ru:"Внезапно — всплеск. Метеорный рой Персеиды-Х + магнитная буря. Я проснулся.",en:"Suddenly — a surge. Perseid-X meteor swarm + magnetic storm. I woke up.",kk:"Кенеттен — жарқыл. Персеид-Х метеор ағыны + магниттік дауыл. Мен ояндым."} },
            { art:"👤🚀", who:{ru:"ТЫ",en:"YOU",kk:"СЕН"}, text:{ru:"Курсант, твой шаттл уже на подходе. Надень комбинезон. Физика — твой щит.",en:"Cadet, your shuttle is approaching. Put on the suit. Physics is your shield.",kk:"Курсант, шаттлың жақындап қалды. Комбинезон ки. Физика — сенің қалқаның."} }
        ], bubble:{ru:"Впервые за полвека вышел на связь и сказал: „Привет“.",en:"Spoke up for the first time in half a century and said: \"Hello\".",kk:"Жарты ғасырда алғаш рет байланысқа шығып: «Сәлем» деді."} },
        { ep:1, title:{ru:"Эп.1: Допуск",en:"Ep.1: Clearance",kk:"Эп.1: Рұқсат"}, date:{ru:"13 марта, лаборатория",en:"March 13, lab",kk:"13 наурыз, зертхана"}, panels:[
            { art:"⚠️🧤", who:{ru:"ИНСТРУКТАЖ",en:"BRIEFING",kk:"НҰСҚАУЛЫҚ"}, text:{ru:"Незаземлённый прибор? Реактив не там? Квант помнит каждую аварию 2030-х.",en:"Ungrounded device? Reagent in wrong place? Quant remembers every accident of the 2030s.",kk:"Жерге қосылмаған құрылғы? Реактив орнында емес пе? Квант 2030-жылдардағы әр апатты еске алады."} },
            { art:"✅📋", who:{ru:"ТЫ",en:"YOU",kk:"СЕН"}, text:{ru:"Сдал допуск на 100%. Квант: 'Неплохо. Люди думают ТБ — скучно. Это — опыт выживших.'",en:"Passed clearance 100%. Quant: 'Not bad. People think safety is boring. It's the experience of survivors.'",kk:"Рұқсатты 100% тапсырдың. Квант: 'Жақсы. Адамдар ҚТ-ны жалықтырады деп ойлайды. Бұл — тірі қалғандар тәжірибесі.'"} },
            { art:"🚪🌌", who:{ru:"ШЛЮЗ",en:"AIRLOCK",kk:"ШЛЮЗ"}, text:{ru:"Сертификат получен. Шлюз открыт. Впереди — настоящий космос.",en:"Certificate received. Airlock open. Ahead — real space.",kk:"Сертификат алынды. Шлюз ашық. Алда — нағыз космос."} }
        ], bubble:{ru:"Допуск сдан. С этого дня ты не стажёр, а кадет станции — штурвал твой.",en:"Clearance passed. From today you are no trainee — you are a station cadet, and the helm is yours.",kk:"Рұқсат тапсырылды. Бүгіннен бастап сен — станция кадетісің, штурвал сенікі."} },
        { ep:2, title:{ru:"Эп.2: Кинематика",en:"Ep.2: Kinematics",kk:"Эп.2: Кинематика"}, date:{ru:"14-20 марта, орбита-тренажёр",en:"March 14-20, orbital trainer",kk:"14-20 наурыз, орбита-жаттықтырушы"}, panels:[
            { art:"☄️📐", who:{ru:"ПРОМАХ",en:"MISS",kk:"ҚАТЕ"}, text:{ru:"Первый перехват — мимо на 200 м. Глазомер в космосе = смерть.",en:"First intercept — you missed by 200 m. Eyeballing in space = death.",kk:"Алғашқы ұстап алу — 200 м қате. Көзбен өлшеу космоста = өлім."} },
            { art:"📈🧮", who:{ru:"ТРЕНИРОВКИ",en:"TRAINING",kk:"ЖАТТЫҒУЛАР"}, text:{ru:"7 дней графиков, a, v, s. Каждый расчёт точнее. Точка встречи сошлась.",en:"7 days of graphs, a, v, s. Each calculation more accurate. Rendezvous point converged.",kk:"7 күн графиктер, a, v, s. Әр есеп дәлірек. Кездесу нүктесі сәйкес келді."} },
            { art:"🎯💥", who:{ru:"ПОПАДАНИЕ",en:"HIT",kk:"ТИЮ"}, text:{ru:"Модуль НАВИГАЦИЯ загорелся. Квант: 'Теперь полетим по-настоящему.'",en:"NAVIGATION module lit up. Quant: 'Now we fly for real.'",kk:"НАВИГАЦИЯ модулі жанды. Квант: 'Енді нағыз ұшамыз.'"} }
        ], bubble:{ru:"Ты выучил: путь ≠ перемещение. Квант записал это в лог #2.",en:"You learned: distance ≠ displacement. Quant logged it as #2.",kk:"Сен үйрендің: жол ≠ орын ауыстыру. Квант оны лог #2-ге жазды."} },
        { ep:3, title:{ru:"Эп.3: Звезды",en:"Ep.3: Stars",kk:"Эп.3: Жұлдыздар"}, date:{ru:"21 марта, край системы",en:"March 21, system edge",kk:"21 наурыз, жүйе шеті"}, panels:[
            { art:"🌌😵", who:{ru:"СЛЕПОТА",en:"BLINDNESS",kk:"СОҚЫРЛЫҚ"}, text:{ru:"Датчики захлебнулись шумом. Экраны в помехах. Корабль ослеп.",en:"Sensors choked with noise. Screens jammed. Ship blinded.",kk:"Датчиктер шуға тұншықты. Экрандар бөгетте. Кеме соқыр болды."} },
            { art:"✨🧭", who:{ru:"КВАНТ-ШТУРМАН",en:"QUANT-NAV",kk:"КВАНТ-ШТУРМАН"}, text:{ru:"'Звёзды никогда не врут. Вот Полярная. Вот сфера. Измерь параллакс.'",en:"'Stars never lie. Here is Polaris. Here is the sphere. Measure the parallax.'",kk:"'Жұлдыздар ешқашан алдамайды. Міне Темірқазық. Міне сфера. Параллаксты өлше.'"} },
            { art:"🗺️📍", who:{ru:"КАРТА",en:"MAP",kk:"КАРТА"}, text:{ru:"Координаты сошлись. Источник угрозы — точка на экране. Впереди поле обломков.",en:"Coordinates converged. Threat source — dot on screen. Ahead — debris field.",kk:"Координаталар сәйкес келді. Қауіп көзі — экрандағы нүкте. Алда — сынықтар алаңы."} }
        ], bubble:{ru:"Астронавигация восстановлена. Ты нашёл Полярную звезду.",en:"Astronavigation restored. You found Polaris.",kk:"Астронавигация қалпына келді. Темірқазықты таптың."} },
        { ep:4, title:{ru:"Эп.4: Гравитация",en:"Ep.4: Gravity",kk:"Эп.4: Гравитация"}, date:{ru:"22 марта, поле астероидов",en:"March 22, asteroid field",kk:"22 наурыз, астероид алаңы"}, panels:[
            { art:"🪨🪨🪨", who:{ru:"ПОЛЕ",en:"FIELD",kk:"АЛАҢ"}, text:{ru:"Тысяча камней размером с дом. Лететь в лоб — самоубийство.",en:"A thousand house-sized rocks. Flying head-on — suicide.",kk:"Мың үйдей тастар. Маңдаймен ұшу — өз-өзіне қол жұмсау."} },
            { art:"🍎⚖️", who:{ru:"НЬЮТОН",en:"NEWTON",kk:"НЬЮТОН"}, text:{ru:"'Лети не силой, а законами. Каждый камень — твой союзник, если считать притяжение.'",en:"'Fly not by force, but by laws. Every rock is your ally if you calculate gravity.'",kk:"'Күшпен емес, заңмен ұш. Әр тас — тартылысты есептесең, одақтасың.'"} },
            { art:"↗️🚀", who:{ru:"РОГАТКА",en:"SLINGSHOT",kk:"РОГАТКА"}, text:{ru:"Грави-манёвр! Камни разогнали тебя без топлива. Модуль МАНЁВР активен.",en:"Gravity maneuver! Rocks accelerated you without fuel. MANEUVER module active.",kk:"Грави-маневр! Тастар сені отынсыз үдетті. МАНЕВР модулі белсенді."} }
        ], bubble:{ru:"Босс 20 повержен — ты освоил первую космическую скорость.",en:"Boss 20 defeated — you mastered the first cosmic velocity.",kk:"Босс 20 жеңілді — 1-ші ғарыштық жылдамдықты меңгердің."} },
        { ep:5, title:{ru:"Эп.5: Энергия",en:"Ep.5: Energy",kk:"Эп.5: Энергия"}, date:{ru:"23 марта, 02:11 — блэкаут",en:"March 23, 02:11 — blackout",kk:"23 наурыз, 02:11 — блэкаут"}, panels:[
            { art:"🌑🔴", who:{ru:"ТЬМА",en:"DARKNESS",kk:"ТҮНЕК"}, text:{ru:"Энергоядро село. Резерв 2 часа. Паника жрёт энергию быстрее приборов.",en:"Power core down. 2 hours reserve. Panic drains energy faster than devices.",kk:"Энергоядро таусылды. Резерв 2 сағат. Үрей құрылғылардан тез энергия жейді."} },
            { art:"♻️🔋", who:{ru:"СБОР",en:"COLLECTION",kk:"ЖЫЮ"}, text:{ru:"Маховики, балласт, тепло радиаторов — каждый джоуль в цепь. Закон сохранения в деле.",en:"Flywheels, ballast, radiator heat — every joule into circuit. Conservation law in action.",kk:"Маховиктер, балласт, радиатор жылуы — әр джоуль тізбекке. Сақталу заңы іс жүзінде."} },
            { art:"💡⚡", who:{ru:"СВЕТ",en:"LIGHT",kk:"ЖАРЫҚ"}, text:{ru:"Щелчок рубильника — станция загудела. Энергоядро янтарное. Связь... пропала.",en:"The switch clicked — the station hummed. Core amber. Connection... lost.",kk:"Ажыратқыш шерт етті — станция гуілдеді. Ядро кәріптас түсті. Байланыс... үзілді."} }
        ], bubble:{ru:"Босс 24 — энергоядро — ожил твоими руками.",en:"Boss 24 — power core — revived by your hands.",kk:"Босс 24 — энергоядро — қолыңмен тірілді."} },
        { ep:6, title:{ru:"Эп.6: Сигнал",en:"Ep.6: Signal",kk:"Эп.6: Сигнал"}, date:{ru:"23 марта, антенна",en:"March 23, antenna",kk:"23 наурыз, антенна"}, panels:[
            { art:"📡❌", who:{ru:"ТИШИНА",en:"SILENCE",kk:"ТЫНЫШТЫҚ"}, text:{ru:"Земля молчит 3 часа. Антенна сбита манёвром. Маятник качается вразнобой.",en:"Earth has been silent for 3 hours. The antenna was knocked out of alignment by the manoeuvre. The pendulum swings out of sync.",kk:"Жер 3 сағат үнсіз. Антенна маневрдан қисайды. Маятник келіссіз тербеледі."} },
            { art:"🎛️📻", who:{ru:"РЕЗОНАНС",en:"RESONANCE",kk:"РЕЗОНАНС"}, text:{ru:"Период, частота, резонанс — поймал ту самую волну. Стрелка дрогнула.",en:"Period, frequency, resonance — caught that very wave. Needle twitched.",kk:"Период, жиілік, резонанс — сол толқынды ұстадың. Тіл дірілдеді."} },
            { art:"👋🌍", who:{ru:"ЗЕМЛЯ",en:"EARTH",kk:"ЖЕР"}, text:{ru:"'Орбита-9, слышим вас!' Ты рассмеялся впервые за дни. Связь восстановлена.",en:"'Orbit-9, we hear you!' You laughed for the first time in days. Connection restored.",kk:"'Орбита-9, естиміз!' Бірнеше күннен кейін алғаш рет күлдің. Байланыс қалпына келді."} }
        ], bubble:{ru:"Босс-резонатор 32 пал — ты вернул голос Земле.",en:"Boss-resonator 32 fell — you gave Earth its voice back.",kk:"Босс-резонатор 32 құлады — Жерге дауысты қайтардың."} },
        { ep:7, title:{ru:"Эп.7: Атом",en:"Ep.7: Atom",kk:"Эп.7: Атом"}, date:{ru:"24 марта, радиационный пояс",en:"March 24, radiation belt",kk:"24 наурыз, радиациялық белдеу"}, panels:[
            { art:"☢️👻", who:{ru:"НЕВИДИМКА",en:"INVISIBLE",kk:"КӨРІНБЕЙТІН"}, text:{ru:"Поток частиц невидим. Обшивка держит минуты. Обычная броня бесполезна.",en:"Particle flow invisible. Hull holds minutes. Ordinary armour useless.",kk:"Бөлшектер ағыны көрінбейді. Қабық минуттар ұстайды. Кәдімгі сауыт пайдасыз."} },
            { art:"🔬✨", who:{ru:"КВАНТЫ",en:"QUANTA",kk:"КВАНТТАР"}, text:{ru:"Фотоэффект, h·ν, Планк — настроил поле на частоту частиц. Они отскакивают как горох!",en:"Photoelectric effect, h·ν, Planck — tuned field to particle frequency. They bounce like peas!",kk:"Фотоэффект, h·ν, Планк — өрісті бөлшектер жиілігіне баптадың. Олар бұршақтай секіреді!"} },
            { art:"🛡️🔵", who:{ru:"ЩИТ",en:"SHIELD",kk:"ҚАЛҚАН"}, text:{ru:"Радиационный щит синий. Квант: 'Ты переиграл радиацию в её игру.'",en:"Radiation shield blue. Quant: 'You outplayed radiation at its own game.'",kk:"Радиация қалқаны көк. Квант: 'Сен радиацияны өз ойынында жеңдің.'"} }
        ], bubble:{ru:"Босс-атом 37 — щит держит. Дальше — древний реактор.",en:"Boss-atom 37 — shield holds. Next — ancient reactor.",kk:"Босс-атом 37 — қалқан ұстайды. Әрі қарай — ежелгі реактор."} },
        { ep:8, title:{ru:"Эп.8: Ядро",en:"Ep.8: Core",kk:"Эп.8: Ядро"}, date:{ru:"24 марта, древний реактор",en:"March 24, ancient reactor",kk:"24 наурыз, ежелгі реактор"}, panels:[
            { art:"🏚️☢️", who:{ru:"РЕАКТОР",en:"REACTOR",kk:"РЕАКТОР"}, text:{ru:"Тёмная громада, внутри свет. Цепная реакция разгоняется. Один заход.",en:"Dark bulk, light inside. Chain reaction accelerating. One approach.",kk:"Қараңғы алып, ішінде жарық. Тізбекті реакция үдейді. Бір кіру."} },
            { art:"⚛️💥", who:{ru:"ДЕЛЕНИЕ",en:"FISSION",kk:"БӨЛІНУ"}, text:{ru:"Протоны, нейтроны, энергия связи — понял, как остановить распад.",en:"Protons, neutrons, binding energy — understood how to stop decay.",kk:"Протондар, нейтрондар, байланыс энергиясы — ыдырауды қалай тоқтатуды түсіндің."} },
            { art:"🤝🔒", who:{ru:"ФИНАЛ",en:"FINALE",kk:"ФИНАЛ"}, text:{ru:"Реактор уснул. Квант тихо: 'Ты остановил взрыв, который летел к Земле.'",en:"Reactor fell asleep. Quant quietly: 'You stopped the explosion heading for Earth.'",kk:"Реактор ұйықтады. Квант жай: 'Жерге ұшқан жарылысты тоқтаттың.'"} }
        ], bubble:{ru:"Финальный босс 42 — сердце ядра обезврежено.",en:"Final boss 42 — the heart of the core — neutralised.",kk:"Финал босс 42 — ядро жүрегі — залалсыздандырылды."} },
        { ep:9, title:{ru:"Эпилог: Картина мира",en:"Epilogue: Picture of World",kk:"Эпилог: Әлем бейнесі"}, date:{ru:"25 марта, вид на Землю",en:"March 25, view of Earth",kk:"25 наурыз, Жерге көрініс"}, panels:[
            { art:"🌍💙", who:{ru:"ДОМ",en:"HOME",kk:"ҮЙ"}, text:{ru:"Смотришь на Землю глазами физика — от частиц до Галактик.",en:"You look at Earth through physicist's eyes — from particles to galaxies.",kk:"Жерге физик көзімен қарайсың — бөлшектерден Галактикаларға дейін."} },
            { art:"📼💾", who:{ru:"АРХИВ",en:"ARCHIVE",kk:"МҰРАҒАТ"}, text:{ru:"Все логи Кванта открыты. Его последняя фраза: 'Расскажи другим.'",en:"All Quant logs open. His last phrase: 'Tell others.'",kk:"Кванттың барлық логтары ашық. Соңғы сөзі: 'Басқаларға айт.'"} },
            { art:"🎖️🚀", who:{ru:"ЛЕГЕНДА",en:"LEGEND",kk:"АҢЫЗ"}, text:{ru:"Ты — не курсант. Ты — Легенда Орбиты-9. Щит держит. Миссия выполнена.",en:"You are no cadet. You are Legend of Orbit-9. Shield holds. Mission complete.",kk:"Сен курсант емессің. Сен — Орбита-9 Аңызысың. Қалқан ұстайды. Миссия орындалды."} }
        ], bubble:{ru:"3 концовки ждут: спаси идеально (90%+80★) — получи скин Кванта!",en:"3 endings await you: save the station perfectly (90% + 80★) — unlock the QUANT skin!",kk:"3 аяқталу жолы күтеді: станцияны мінсіз құтқар (90% + 80★) — Квант бейнесін ал!"} }
    ],
    current: 0,
    isUnlocked(entry){
        // разблокировка по прогрессу эпизодов
        try{
            const prog=Storage.getProgress();
            const done=prog.completedLevels||{};
            // лог 0 открыт сразу, остальные — когда предыдущий эпизод пройден
            if(entry.ep===0) return true;
            const idx = EPISODES.findIndex(e=>e.id==="ep"+entry.ep) // ep1-> index1 etc
            // проще: требуем что хотя бы 1 уровень из предыдущего эпизода пройден
            // для эпилога требуем все основные 43 уровня
            if(entry.ep>=9) return Object.keys(done).length>=43;
            const prevEp = EPISODES[entry.ep-1]; // ep1 предыдущий ep0 и т.д.
            if(!prevEp) return true;
            return prevEp.levels.some(l=>done[l]);
        }catch(e){ return entry.ep===0; }
    },
    open(page){
        if(typeof page==="number") this.current=page;
        const entry=this.entries[this.current];
        if(!entry) return;
        const L=(typeof I18n!=="undefined"&&I18n.currentLang)||"ru";
        if(document.getElementById("diary-title")) document.getElementById("diary-title").textContent="📖 "+this._t(entry.title);
        if(document.getElementById("diary-subtitle")) document.getElementById("diary-subtitle").textContent=this._t(entry.date);
        const comic=document.getElementById("diary-comic");
        const unlocked=this.isUnlocked(entry);
        if(!unlocked){
            comic.innerHTML=`<div class="diary-locked">🔒 ${I18n.t("diaryLocked")}<br><small>${I18n.t("diaryLockedNote")} ${EPISODES[entry.ep-1]?.title||""}</small></div>`;
        } else {
            comic.innerHTML=entry.panels.map(p=>`
                <div class="comic-panel">
                    <div class="comic-art">${p.art}</div>
                    <div class="comic-caption"><small>${this._t(p.who)}</small>${this._t(p.text)}</div>
                </div>
            `).join("");
        }
        // Полный текст главы (как в оригинальной истории) — под кадрами комикса.
        const storyBox=document.getElementById("diary-story");
        const lore=(typeof STORY_LORE!=="undefined" && STORY_LORE[L]) ? STORY_LORE[L][this.current] : null;
        if(storyBox){
            if(unlocked && lore && lore.text){
                const paras=String(lore.text).split(/\n+/).map(t=>t.trim()).filter(Boolean)
                    .map(t=>`<p>${escapeHtml(t)}</p>`).join("");
                storyBox.innerHTML=`<p style="font-weight:800;color:#8d4b00;margin-bottom:8px">📖 ${escapeHtml(lore.title||"")}</p>${paras}`;
                storyBox.style.display="";
                storyBox.scrollTop=0;
            } else {
                storyBox.innerHTML="";
                storyBox.style.display="none";
            }
        }
        const bubble=document.getElementById("diary-bubble");
        if(unlocked && entry.bubble){
            bubble.style.display="flex";
            bubble.innerHTML=`<span>🤖</span><span><b>${I18n.t("quantName")}:</b> ${this._t(entry.bubble)}</span>`;
        } else bubble.style.display="none";
        if(document.getElementById("diary-page")) document.getElementById("diary-page").textContent=(this.current+1)+" / "+this.entries.length;
        if(document.getElementById("diary-meta")) document.getElementById("diary-meta").textContent= unlocked ? `${I18n.t("storyLevelWord")} ${this.current+1} • ${entry.panels.length} ${L==="en"?"frames":L==="kk"?"кадр":"кадров"}` : "🔒 "+I18n.t("locked");
        document.getElementById("diary-modal")?.classList.add("active");
        if(navigator.vibrate && unlocked) navigator.vibrate(30);
    },
    next(){ this.current=(this.current+1)%this.entries.length; this.open(); },
    prev(){ this.current=(this.current-1+this.entries.length)%this.entries.length; this.open(); },
    // авто-показать между эпизодами при победе
    tryAutoShow(levelId){
        try{
            const ep = episodeForLevel(levelId);
            if(!ep) return;
            // если это последний уровень эпизода и эпизод только что закрыт
            const isLast = levelId===Math.max(...ep.levels);
            if(!isLast) return;
            const prog=Storage.getProgress();
            const allDone = ep.levels.every(l=>prog.completedLevels[l]);
            if(!allDone) return;
            // не показывать повторно если уже видел этот дневник
            const seen = JSON.parse(localStorage.getItem("physicsquest9_diarySeen")||"[]");
            const diaryIdx = this.entries.findIndex(e=>e.ep===EPISODES.indexOf(ep)+1); // следующий дневник
            // если победил ep1 (уровни 2-8) → показать diary ep2
            const nextEpIdx = EPISODES.indexOf(ep)+1;
            const diaryEntry = this.entries.find(e=>e.ep===nextEpIdx);
            if(!diaryEntry) return;
            if(seen.includes(diaryEntry.ep)) return;
            seen.push(diaryEntry.ep);
            localStorage.setItem("physicsquest9_diarySeen", JSON.stringify(seen));
            setTimeout(()=>{ this.current=this.entries.indexOf(diaryEntry); this.open(); }, 900);
        }catch(e){}
    }
};

const Mechanics = {
    // called on level start
    setup(levelConfig, game){
        game.gravityWells = [];
        game.pulseReady = true;
        game.pulseCd = 0;
        game.bossHP = 0;
        game.bossMax = 0;
        // HUD mechanic badge
        const badge = document.getElementById("hud-mechanic");
        if(badge){
            const mech = levelConfig.mechanic || "classic";
            const names = {
                classic: I18n.t("mechanicClassic"),
                gravity: I18n.t("mechanicGravity"),
                resonance: I18n.t("mechanicResonance"),
                orbital: I18n.t("mechanicOrbital"),
                energy: I18n.t("mechanicEnergy"),
                radiation: I18n.t("mechanicRadiation"),
                fusion: I18n.t("mechanicFusion"),
                lab: I18n.t("mechanicLab")
            };
            badge.textContent = (levelConfig.boss? "👾 "+I18n.t("mechanicBoss")+" • " : "• ") + (names[mech]||mech);
            badge.className = "mechanic-badge "+mech;
            badge.style.display = "inline-flex";
            if(levelConfig.boss) badge.style.background="rgba(229,57,53,0.15)";
        }
        const pulseBtn = document.getElementById("pulse-btn");
        if(pulseBtn) pulseBtn.style.display = (levelConfig.mechanic==="resonance") ? "flex" : "none";
        const labHint = document.getElementById("hud-lab-hint");
        if(labHint) labHint.style.display = (levelConfig.mechanic==="lab"||levelConfig.mechanic==="fusion"||levelConfig.mechanic==="radiation") ? "inline-flex" : "none";
        const labBtn = document.getElementById("btn-lab");
        if(labBtn) labBtn.style.display = (levelConfig.mechanic==="lab" || LabGames.configs[levelConfig.id]) ? "" : "none";
        // setup specific
        if(levelConfig.mechanic==="gravity"){
            // create 2 wells
            game.gravityWells = [
                {x: game.width*0.28, y: game.height*0.32, strength: 90000, radius: 90, color:"#d81b60"},
                {x: game.width*0.72, y: game.height*0.38, strength: 110000, radius: 110, color:"#7c4dff"}
            ];
        } else if(levelConfig.mechanic==="orbital"){
            game.gravityWells = [
                {x: game.width/2, y: game.height*0.35, strength: 150000, radius: 130, color:"#ffb300", central:true, pulse:0}
            ];
        } else if(levelConfig.mechanic==="resonance"){
            game.pulseReady = true;
            game.pulseCd = 0;
            game.pulseActive = 0;
        }
        // boss
        if(levelConfig.boss){
            game.bossHP = 3 + Math.floor(levelConfig.id/10);
            game.bossMax = game.bossHP;
            const bar = document.getElementById("boss-bar");
            if(bar) bar.classList.add("active");
            const fill = document.getElementById("boss-fill");
            if(fill) fill.style.width="100%";
        } else {
            const bar = document.getElementById("boss-bar");
            if(bar) bar.classList.remove("active");
        }
    },
    update(game, dt){
        const mech = game.levelConfig?.mechanic;
        if(mech==="gravity" || mech==="orbital"){
            // attract asteroids
            game.asteroids.forEach(a=>{
                game.gravityWells.forEach(w=>{
                    const dx = w.x - a.x, dy = w.y - a.y;
                    const dist2 = dx*dx + dy*dy;
                    const dist = Math.sqrt(dist2)||1;
                    if(dist < w.radius*2.5){
                        const force = w.strength / (dist2+4000) * dt;
                        a.vx += (dx/dist)*force;
                        a.vy += (dy/dist)*force;
                    }
                });
            });
        }
        if(mech==="resonance"){
            if(game.pulseCd>0){
                game.pulseCd = Math.max(0, game.pulseCd - dt*1000);
                const btn = document.getElementById("pulse-btn");
                if(btn){
                    if(game.pulseCd>0){
                        btn.classList.add("cooldown");
                        btn.innerHTML = Math.ceil(game.pulseCd/1000)+"s";
                    } else {
                        btn.classList.remove("cooldown");
                        btn.innerHTML = "⚡<br>ИМПУЛЬС";
                    }
                }
            }
            if(game.pulseActive>0){
                game.pulseActive -= dt*1000;
                if(game.pulseActive<=0){
                    game.player.shieldActive = false;
                }
            }
        }
        if(mech==="energy"){
            // energy orbs pulsate faster, and matching type gives bonus
        }
    },
    onPulse(game){
        if(!game.running || game.isTaskActive) return;
        if(game.levelConfig.mechanic!=="resonance") return;
        if(game.pulseCd>0) { showNotification(I18n.t("pulseCooldown"), "warning"); return; }
        game.player.shieldActive = true;
        game.player.shieldTarget = 120;
        game.pulseActive = 450;
        const cooldownBase = 1400 - (typeof RPG !== "undefined" && RPG.perkRank ? RPG.perkRank("thrusters") : 0)*100;
        game.pulseCd = Math.max(600, cooldownBase);
        game.spawnShieldWave();
        const btn = document.getElementById("pulse-btn");
        if(btn){
            btn.classList.add("pulsing");
            setTimeout(()=>btn.classList.remove("pulsing"), 500);
        }
        // destroy nearby asteroids
        game.asteroids.slice().forEach(a=>{
            const d = Math.hypot(a.x - game.player.x, a.y - game.player.y);
            if(d < 130){
                // destroy
                const idx = game.asteroids.indexOf(a);
                if(idx>=0){
                    game.asteroids.splice(idx,1);
                    game.score+=40;
                    game.asteroidsDeflected++;
                    for(let j=0;j<10;j++){
                        const ang=Math.random()*Math.PI*2; const sp=1+Math.random()*4;
                        game.particles.push({x:a.x, y:a.y, vx:Math.cos(ang)*sp, vy:Math.sin(ang)*sp, life:500, maxLife:500, color:a.color});
                    }
                    game.updateHUD();
                }
            }
        });
    },
    onBossHit(game){
        if(!game.levelConfig?.boss) return false;
        game.bossHP--;
        const fill = document.getElementById("boss-fill");
        if(fill) fill.style.width = (game.bossHP/game.bossMax*100)+"%";
        if(game.bossHP<=0){
            // boss defeated -> need one more correct answer to win
            game.score+=200;
            showNotification(I18n.t("bossDefeated"), "success");
            // reduce remaining tasks
            game.levelTasksTotal = Math.min(game.levelTasksTotal, game.tasksSolved+2);
            const bar = document.getElementById("boss-bar");
            if(bar) bar.classList.remove("active");
            return true;
        } else {
            showNotification(I18n.t("bossHpLeft", game.bossHP, game.bossMax), "warning");
        }
        return false;
    }
};



(function initGrade9Extras() {
    // Показать кнопку комикс-дневника экспедиции в меню и на экране выбора уровня
    const diaryBtn = document.getElementById("btn-diary");
    if (diaryBtn) {
        diaryBtn.style.display = "";
        diaryBtn.addEventListener("click", () => Diary.open());
    }
    const lvlDiaryBtn = document.getElementById("btn-level-diary");
    if (lvlDiaryBtn) {
        lvlDiaryBtn.style.display = "";
        lvlDiaryBtn.addEventListener("click", () => Diary.open());
    }
    document.getElementById("diary-prev")?.addEventListener("click", () => Diary.prev());
    document.getElementById("diary-next")?.addEventListener("click", () => Diary.next());
    document.getElementById("btn-diary-close")?.addEventListener("click", () => {
        document.getElementById("diary-modal")?.classList.remove("active");
    });
    document.getElementById("diary-modal")?.addEventListener("click", (e) => {
        if (e.target.id === "diary-modal") e.target.classList.remove("active");
    });
    document.getElementById("pulse-btn")?.addEventListener("click", () => {
        if (typeof Game !== "undefined") Mechanics.onPulse(Game);
    });
    if (typeof LabGames !== "undefined") LabGames.init();
})();
