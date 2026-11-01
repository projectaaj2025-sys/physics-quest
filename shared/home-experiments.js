/* Домашние опыты, встроенные в лаборатории соответствующих уровней. */
(function () {
    'use strict';
    const grade = Number(window.CURRENT_GRADE);
    const specs = {
        7: { level:36, id:'lever', title:'⚖️ Уравновесь рычаг', titleEn:'⚖️ Balance the lever', titleKk:'⚖️ Иінтіректі теңестір', desc:'Слева груз 2 Н на расстоянии 2 деления. Перемести груз 1 Н справа так, чтобы рычаг был в равновесии.', descEn:'A 2 N weight is 2 marks to the left. Move the 1 N weight on the right to balance the lever.', descKk:'Сол жақта 2 Н жүк тіректен 2 бөлік қашықтықта. Тепе-теңдік үшін оң жақтағы 1 Н жүкті жылжыт.' },
        8: { level:24, id:'circuit', title:'💡 Собери цепь', titleEn:'💡 Build a circuit', titleKk:'💡 Тізбекті құрастыр', desc:'Собери модель цепи по порядку: батарея → выключатель → лампа → обратно к батарее.', descEn:'Build the model circuit in order: battery → switch → lamp → back to the battery.', descKk:'Тізбек моделін ретімен жина: батарея → ажыратқыш → шам → батареяға қайту.' },
        9: { level:27, id:'pendulum', title:'🕰 Тайна маятников', titleEn:'🕰 The pendulum mystery', titleKk:'🕰 Маятник құпиясы', desc:'Запусти два маятника и сравни время 10 колебаний. Какой из них имеет больший период?', descEn:'Run both pendulums and compare the time for 10 oscillations. Which has the longer period?', descKk:'Екі маятникті іске қосып, 10 тербеліс уақытын салыстыр. Қайсысының периоды ұзақ?' }
    };
    const cfg = specs[grade];
    if (!cfg) return;
    window.GRADE_LAB_GAMES_CONFIG = window.GRADE_LAB_GAMES_CONFIG || {};
    window.GRADE_LAB_GAMES_CONFIG[cfg.level] = Object.assign({type:'home-experiment'}, cfg);
    const words = {
        ru:{home:'🏠 Попробуй дома',ready:'Верно! Теперь нажми «Проверить», чтобы продолжить.',again:'Пока не получилось — попробуй ещё раз.',reset:'Начать заново',lever:'Перетащи груз на деление или выбери его кнопкой:',left:'Слева: 2 Н × 2 = 4 Н·дел.',right:'Справа:',mark:'деление',next:'Выбери следующий элемент:',battery:'🔋 Батарея',sw:'🔘 Выключатель',lamp:'💡 Лампа',return:'↩ Возврат к батарее',wrong:'Это не следующий элемент. Попробуй ещё.',short:'Короткий: 25 см',long:'Длинный: 100 см',run:'Запустить',measure:'Время 10 колебаний',question:'Какой период больше?',notyet:'Сначала запусти оба маятника.',shorter:'Короткий',longer:'Длинный',hint:'Подсказка: сравни время десяти колебаний.',homeLever:'Понадобится: линейка, карандаш и 3 одинаковые монеты.\n1. Положи линейку на карандаш посередине на устойчивом столе.\n2. Поставь две монеты вместе слева, а одну — справа.\n3. Медленно передвигай одиночную монету до равновесия и измерь расстояния от карандаша до стопки и до одиночной монеты.\n4. Сравни произведения «число монет × расстояние» с двух сторон.\nНаблюдение: при равновесии моменты нагрузок примерно равны.\nБезопасность: не ставь на линейку тяжёлые или бьющиеся предметы; следи, чтобы монеты не падали на ноги.',homeCircuit:'Понадобится: исправный карманный фонарик на батарейках, бумага и карандаш.\n1. Нарисуй батарею, выключатель, лампу и соединительные провода.\n2. Включи фонарик и на бумажной модели проследи замкнутый путь тока от батареи через выключатель и лампу обратно к батарее.\n3. Выключи фонарик и покажи на модели разрыв цепи. Объясни, почему лампа гаснет.\n4. Сложи бумажные элементы в правильном порядке и проверь, получился ли замкнутый контур.\nНаблюдение: лампа работает только при замкнутой цепи.\nБезопасность: используй только готовый фонарик на батарейках; ничего не разбирай, не делай самодельную проводку и не подходи к розетке.',homePend:'Понадобится: 2 нити длиной 25 и 100 см, маленький ластик или бумажный пакетик с монетой, скотч, линейка и секундомер.\n1. Закрепи нити на устойчивой опоре и привяжи лёгкий груз. Длину измеряй от точки подвеса до середины груза.\n2. Отклоняй каждый маятник на одинаковый небольшой угол (около 10°) и отпускай без толчка.\n3. Измерь время 10 полных колебаний. Повтори каждый опыт 3 раза и найди среднее время.\n4. Раздели среднее время на 10 — получишь период T. Сравни маятники.\nНаблюдение: длинный маятник колеблется медленнее, его период больше.\nБезопасность: используй только лёгкий груз и устойчивую опору; не раскачивай маятник возле лица и других людей.'},
        en:{home:'🏠 Try it at home',ready:'Correct! Press Check to continue.',again:'Not quite — try again.',reset:'Start again',lever:'Drag the weight to a mark or select it with a button:',left:'Left: 2 N × 2 = 4 N·marks',right:'Right:',mark:'mark',next:'Choose the next component:',battery:'🔋 Battery',sw:'🔘 Switch',lamp:'💡 Lamp',return:'↩ Return to battery',wrong:'That is not the next component. Try again.',short:'Short: 25 cm',long:'Long: 100 cm',run:'Run',measure:'Time for 10 oscillations',question:'Which period is longer?',notyet:'Run both pendulums first.',shorter:'Short',longer:'Long',hint:'Compare the time for ten oscillations.',homeLever:'You will need: a ruler, a pencil, and 3 identical coins.\n1. Balance the ruler at its centre on the pencil on a stable table.\n2. Place two coins together on the left and one coin on the right.\n3. Slowly move the single coin until the ruler balances. Measure both distances from the pencil.\n4. Compare “number of coins × distance” on the two sides.\nObserve: at balance, the moments of the loads are approximately equal.\nSafety: do not put heavy or fragile objects on the ruler, and keep falling coins away from your feet.',homeCircuit:'You will need: a working battery-powered pocket torch, paper, and a pencil.\n1. Draw a battery, switch, lamp, and connecting wires.\n2. Switch on the torch and trace a closed current path on your paper model: battery → switch → lamp → battery.\n3. Switch off the torch and show the break in the model circuit. Explain why the lamp goes out.\n4. Arrange the paper parts in the correct order and check that the loop is closed.\nObserve: the lamp works only when the circuit is complete.\nSafety: use only the ready-made battery torch; do not disassemble it, make homemade wiring, or go near a mains socket.',homePend:'You will need: two strings 25 and 100 cm long, a small eraser or a paper pouch with one coin, tape, a ruler, and a timer.\n1. Attach the strings to a stable support and tie on the light weight. Measure from the support to the centre of the weight.\n2. Pull each pendulum aside by the same small angle (about 10°) and release without pushing.\n3. Time 10 complete oscillations. Repeat each trial 3 times and find the average.\n4. Divide the average time by 10 to find the period T. Compare the pendulums.\nObserve: the long pendulum oscillates more slowly and has the longer period.\nSafety: use only a light weight and a stable support; do not swing it near your face or other people.'},
        kk:{home:'🏠 Үйде байқап көр',ready:'Дұрыс! Жалғастыру үшін «Тексеру» түймесін бас.',again:'Әзірге дұрыс емес — қайталап көр.',reset:'Қайта бастау',lever:'Жүкті белгіге сүйре немесе түймемен таңда:',left:'Сол жақ: 2 Н × 2 = 4 Н·бөлік',right:'Оң жақ:',mark:'бөлік',next:'Келесі бөлшекті таңда:',battery:'🔋 Батарея',sw:'🔘 Ажыратқыш',lamp:'💡 Шам',return:'↩ Батареяға қайту',wrong:'Бұл келесі бөлшек емес. Қайта көр.',short:'Қысқа: 25 см',long:'Ұзын: 100 см',run:'Іске қосу',measure:'10 тербеліс уақыты',question:'Қайсының периоды ұзақ?',notyet:'Алдымен екі маятникті іске қос.',shorter:'Қысқа',longer:'Ұзын',hint:'Он тербеліс уақытын салыстыр.',homeLever:'Қажет заттар: сызғыш, қарындаш және 3 бірдей тиын.\n1. Сызғышты тұрақты үстелде қарындаштың үстіне ортасымен қой.\n2. Сол жағына қатар екі тиын, оң жағына бір тиын қой.\n3. Жалғыз тиынды сызғыш теңескенше баяу жылжыт. Қарындаштан екі жүкке дейінгі қашықтықты өлше.\n4. Екі жақтағы «тиын саны × қашықтық» көбейтіндісін салыстыр.\nБақылау: тепе-теңдік кезінде жүктемелердің моменттері шамамен тең болады.\nҚауіпсіздік: сызғышқа ауыр немесе сынғыш зат қойма; түскен тиындардың аяғыңа түспеуін қадағала.',homeCircuit:'Қажет заттар: батареямен жұмыс істейтін іскер шам, қағаз және қарындаш.\n1. Батареяны, ажыратқышты, шамды және жалғау сымдарын сыз.\n2. Шамды жақ та, қағаз моделінде токтың тұйық жолын қадағала: батарея → ажыратқыш → шам → батарея.\n3. Шамды өшіріп, модельдегі тізбек үзілісін көрсет. Шамның неге өшетінін түсіндір.\n4. Қағаз бөлшектерді дұрыс ретпен қойып, контурдың тұйықталғанын тексер.\nБақылау: шам тек тұйық тізбекте жұмыс істейді.\nҚауіпсіздік: тек дайын батареялық шамды пайдалан; оны бөлшектеме, өз бетіңше сым тартуға болмайды және розеткаға жақындама.',homePend:'Қажет заттар: ұзындығы 25 және 100 см екі жіп, кішкентай өшіргіш немесе бір тиын салынған қағаз қалта, желім таспа, сызғыш және секундомер.\n1. Жіптерді тұрақты тірекке бекітіп, жеңіл жүкті байла. Ұзындықты ілу нүктесінен жүктің ортасына дейін өлше.\n2. Әр маятникті бірдей шағын бұрышқа (шамамен 10°) ығыстырып, итермей жіберіп жібер.\n3. 10 толық тербелістің уақытын өлше. Әр тәжірибені 3 рет қайталап, орташа уақытты тап.\n4. Орташа уақытты 10-ға бөл — период T шығады. Маятниктерді салыстыр.\nБақылау: ұзын маятник баяу тербеледі, оның периоды ұзақ.\nҚауіпсіздік: тек жеңіл жүк пен тұрақты тіректі пайдалан; маятникті бетіңе және басқа адамдарға жақын серпіме.'}
    };
    const css = `
    .pqh-wrap{font:15px/1.5 system-ui,sans-serif;color:#193951}.pqh-home{border:1px solid #b7dce7;background:#f0f9fc;border-radius:12px;padding:10px 14px;margin:10px 0}.pqh-home summary{font-weight:800;cursor:pointer;color:#075d78}.pqh-home p{margin:8px 0 2px;white-space:pre-line}.pq-home-theory p{white-space:pre-line}.pqh-box{padding:15px;border:1px solid #cbe3ee;border-radius:14px;background:#f7fbff}.pqh-box button{border:1px solid #90c7d8;border-radius:9px;background:#fff;color:#16445c;padding:9px 12px;font:700 14px system-ui;cursor:pointer}.pqh-box button:hover,.pqh-box button[aria-pressed=true]{background:#cdeef6;border-color:#007e9d}.pqh-box button:focus-visible{outline:3px solid #eaa523;outline-offset:2px}.pqh-row{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}.pqh-beam{height:12px;background:#3688a1;border-radius:6px;margin:20px 10px 0}.pqh-pivot{text-align:center;color:#24738d;font-size:24px;line-height:1}.pqh-weight{display:inline-block;cursor:grab;padding:10px;background:#dff5fc;border:1px solid #7dbaca;border-radius:10px}.pqh-track{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;color:#086c89;font-weight:700}.pqh-read{min-height:25px;font-weight:700;color:#175c72}.pqh-pendulums{display:flex;gap:28px;align-items:flex-start;height:150px;margin:8px 0}.pqh-pendulum{width:80px;border-top:3px solid #58869c;text-align:center}.pqh-string{width:2px;margin:auto;background:#477083;position:relative;transform-origin:top center}.pqh-string::after{content:'';position:absolute;width:20px;height:20px;border-radius:50%;background:#1698b3;bottom:-10px;left:-9px}.pqh-short{height:60px}.pqh-long{height:120px}.pqh-swing{animation:pqh-swing var(--period) ease-in-out infinite alternate}@keyframes pqh-swing{from{transform:rotate(-12deg)}to{transform:rotate(12deg)}}@media(prefers-reduced-motion:reduce){.pqh-swing{animation:none}}.pqh-home,.pqh-box{color:#193951}html[data-theme=dark] .pqh-home,html[data-theme=dark] .pqh-box{background:#122b42;color:#e1f3ff;border-color:#3a667b}html[data-theme=dark] .pqh-home summary{color:#a1e9f8}html[data-theme=dark] .pqh-read,html[data-theme=dark] .pqh-track{color:#a1e9f8}`;
    function render(root, config, result, lang) {
        const t = words[lang] || words.ru;
        if (!document.getElementById('pqh-style')) { const style=document.createElement('style');style.id='pqh-style';style.textContent=css;document.head.appendChild(style); }
        root.className = 'pqh-wrap';
        const home = document.createElement('details');home.className='pqh-home';
        const summary=document.createElement('summary');summary.textContent=t.home;const p=document.createElement('p');p.textContent=t[config.id==='lever'?'homeLever':config.id==='circuit'?'homeCircuit':'homePend'];home.append(summary,p);root.appendChild(home);
        const box=document.createElement('div');box.className='pqh-box';root.appendChild(box);
        result._ok=false; result.className='lab-result';result.textContent='';
        function done(ok) { result._ok=ok;result.className='lab-result '+(ok?'ok':'bad');result.textContent=ok?t.ready:t.again; }
        function el(tag,text,cls) { const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(cls)node.className=cls;return node; }
        function button(text,fn) { const b=el('button',text);b.type='button';b.addEventListener('click',fn);return b; }
        if (config.id==='lever') {
            box.append(el('p',t.lever));const weight=el('span','⚖️ 1 Н','pqh-weight');weight.draggable=true;weight.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain','weight'));box.appendChild(weight);
            box.append(el('div',null,'pqh-beam'),el('div','▲','pqh-pivot'),el('p',t.left));
            const row=el('div',null,'pqh-row'),read=el('p','','pqh-read'); box.append(row,read);
            for(let i=1;i<=4;i++){const b=button(`${i} · ${t.mark}`,()=>choose(i));b.setAttribute('aria-pressed','false');b.addEventListener('dragover',e=>e.preventDefault());b.addEventListener('drop',e=>{e.preventDefault();choose(i)});row.appendChild(b);}
            function choose(i){row.querySelectorAll('button').forEach((b,n)=>b.setAttribute('aria-pressed',String(n===i-1)));read.textContent=`${t.right} 1 Н × ${i} = ${i} Н·`;done(i===4);}
        } else if (config.id==='circuit') {
            box.append(el('p',t.next));const track=el('div',null,'pqh-track'),row=el('div',null,'pqh-row'),read=el('p','','pqh-read');box.append(track,row,read);let sequence=[];
            const parts=[t.battery,t.sw,t.lamp,t.return];
            parts.forEach((name,i)=>row.appendChild(button(name,()=>{if(i!==sequence.length){read.textContent=t.wrong;result._ok=false;return;}sequence.push(i);track.textContent=sequence.map(n=>parts[n]).join(' → ');read.textContent='';if(sequence.length===4)done(true);})));box.appendChild(button(t.reset,()=>{sequence=[];track.textContent='';read.textContent='';result._ok=false;result.textContent='';}));
        } else {
            const stage=el('div',null,'pqh-pendulums'); const strings=['pqh-short','pqh-long'].map((name,i)=>{const holder=el('div',null,'pqh-pendulum'), string=el('div',null,'pqh-string '+name);string.style.setProperty('--period',i ? '1s' : '.5s');holder.appendChild(string);stage.appendChild(holder);return string;});box.appendChild(stage);
            const read=el('p','','pqh-read'),short=button(`${t.run}: ${t.short}`,()=>measure(0)),long=button(`${t.run}: ${t.long}`,()=>measure(1));const row=el('div',null,'pqh-row');row.append(short,long);box.append(row,read);const observed=[false,false];
            function measure(i){observed[i]=true;strings[i].classList.add('pqh-swing');read.textContent=`${t.measure}: ${observed[0]?t.short+' ≈ 10 s':''} ${observed[0]&&observed[1]?' · ':''}${observed[1]?t.long+' ≈ 20 s':''}`;}
            box.append(el('p',t.question));const answers=el('div',null,'pqh-row');answers.append(button(t.shorter,()=>answer(false)),button(t.longer,()=>answer(true)));box.appendChild(answers);
            function answer(correct){if(!observed[0]||!observed[1]){read.textContent=t.notyet;result._ok=false;return;}done(correct);}
        }
    }
    function theoryHtml(level, lang) {
        if (Number(level) !== cfg.level) return "";
        const t = words[lang] || words.ru;
        const home = t[cfg.id === 'lever' ? 'homeLever' : cfg.id === 'circuit' ? 'homeCircuit' : 'homePend'];
        const esc = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        return `<section class="experiment-box pq-home-theory"><h3>${esc(t.home)}</h3><p>${esc(home)}</p></section>`;
    }
    function mountGallery() {
        const host = grade === 7 ? document.getElementById('field-sim-grid') : document.getElementById('pq-sim89-grid');
        if (!host || host.querySelector('[data-home-game]')) return;
        let lang = 'ru';
        try { lang = (typeof I18n !== 'undefined' && I18n.currentLang) || 'ru'; } catch (_) {}
        const idx = lang === 'kk' ? 'Kk' : lang === 'en' ? 'En' : '';
        const card = document.createElement('button');
        card.type = 'button';
        card.className = grade === 7 ? 'field-sim-card' : 'pq-sim89-card';
        card.dataset.homeGame = String(cfg.level);
        const icon = document.createElement('span');
        icon.className = grade === 7 ? 'field-sim-icon' : 'pq-sim89-card-icon';
        icon.textContent = grade === 7 ? '⚖️' : grade === 8 ? '💡' : '🕰';
        const chapter = document.createElement('span');
        chapter.className = grade === 7 ? 'field-sim-card-chapter' : 'pq-sim89-card-chapter';
        chapter.textContent = ({ru: 'Домашний опыт · уровень ', kk: 'Үй тәжірибесі · деңгей ', en: 'Home experiment · level '})[lang] + cfg.level;
        const title = document.createElement('b');
        title.textContent = (cfg['title' + idx] || cfg.title).replace(/^[^\p{L}\p{N}]+/u, '');
        const description = document.createElement('small');
        description.textContent = cfg['desc' + idx] || cfg.desc;
        const action = document.createElement('em');
        action.textContent = ({ru: 'Начать опыт →', kk: 'Тәжірибені бастау →', en: 'Start experiment →'})[lang] || 'Начать опыт →';
        card.append(icon, chapter, title, description, action);
        card.addEventListener('click', () => {
            if (typeof LabGames !== 'undefined') LabGames.show(window.GRADE_LAB_GAMES_CONFIG[cfg.level], null);
        });
        const target = grade === 7 ? host.querySelector('[data-sim="p35_lever"]')
            : host.querySelector(grade === 8 ? '[data-s89="g8_ohm"]' : '[data-s89="g9_oscillator"]');
        if (target && target.parentNode) target.parentNode.insertBefore(card, target.nextSibling);
        else if (grade === 7) host.appendChild(card);
        else (host.querySelector('.pq-sim89-topic-grid') || host).appendChild(card);
    }
    window.PQHomeExperiments={render, theoryHtml, mountGallery};
    mountGallery();
})();
