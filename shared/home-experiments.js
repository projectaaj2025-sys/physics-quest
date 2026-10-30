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
        ru:{home:'🏠 Попробуй дома',ready:'Верно! Теперь нажми «Проверить», чтобы продолжить.',again:'Пока не получилось — попробуй ещё раз.',reset:'Начать заново',lever:'Перетащи груз на деление или выбери его кнопкой:',left:'Слева: 2 Н × 2 = 4 Н·дел.',right:'Справа:',mark:'деление',next:'Выбери следующий элемент:',battery:'🔋 Батарея',sw:'🔘 Выключатель',lamp:'💡 Лампа',return:'↩ Возврат к батарее',wrong:'Это не следующий элемент. Попробуй ещё.',short:'Короткий: 25 см',long:'Длинный: 100 см',run:'Запустить',measure:'Время 10 колебаний',question:'Какой период больше?',notyet:'Сначала запусти оба маятника.',shorter:'Короткий',longer:'Длинный',hint:'Подсказка: сравни время десяти колебаний.',homeLever:'Положи линейку на карандаш. Размести две одинаковые монеты на одной стороне и одну на другой. Передвигай одиночную монету, пока линейка не уравновесится. Делай опыт на устойчивом столе.',homeCircuit:'Вырежи из бумаги батарею, выключатель, лампу и провода. Выложи замкнутый круг и проследи путь от батареи обратно к ней. Это безопасная модель без электричества: не подключай её к розетке.',homePend:'С помощью взрослого подвесь небольшой груз на нитях длиной примерно 25 и 100 см. Отклоняй каждый маятник на небольшой одинаковый угол и измерь секундомером время 10 полных колебаний. Сравни времена; держи груз подальше от лица.'},
        en:{home:'🏠 Try it at home',ready:'Correct! Press Check to continue.',again:'Not quite — try again.',reset:'Start again',lever:'Drag the weight to a mark or select it with a button:',left:'Left: 2 N × 2 = 4 N·marks',right:'Right:',mark:'mark',next:'Choose the next component:',battery:'🔋 Battery',sw:'🔘 Switch',lamp:'💡 Lamp',return:'↩ Return to battery',wrong:'That is not the next component. Try again.',short:'Short: 25 cm',long:'Long: 100 cm',run:'Run',measure:'Time for 10 oscillations',question:'Which period is longer?',notyet:'Run both pendulums first.',shorter:'Short',longer:'Long',hint:'Compare the time for ten oscillations.',homeLever:'Balance a ruler on a pencil on a stable table. Place two identical coins on one side and one on the other. Move the single coin until the ruler balances.',homeCircuit:'Cut a battery, switch, lamp and wires out of paper. Arrange them in a closed loop and trace the path back to the battery. This is a model without electricity: never connect it to a mains socket.',homePend:'With an adult, hang a small weight from strings roughly 25 and 100 cm long. Release each from the same small angle and time 10 complete oscillations. Compare the times; keep the weight away from your face.'},
        kk:{home:'🏠 Үйде байқап көр',ready:'Дұрыс! Жалғастыру үшін «Тексеру» түймесін бас.',again:'Әзірге дұрыс емес — қайталап көр.',reset:'Қайта бастау',lever:'Жүкті белгіге сүйре немесе түймемен таңда:',left:'Сол жақ: 2 Н × 2 = 4 Н·бөлік',right:'Оң жақ:',mark:'бөлік',next:'Келесі бөлшекті таңда:',battery:'🔋 Батарея',sw:'🔘 Ажыратқыш',lamp:'💡 Шам',return:'↩ Батареяға қайту',wrong:'Бұл келесі бөлшек емес. Қайта көр.',short:'Қысқа: 25 см',long:'Ұзын: 100 см',run:'Іске қосу',measure:'10 тербеліс уақыты',question:'Қайсының периоды ұзақ?',notyet:'Алдымен екі маятникті іске қос.',shorter:'Қысқа',longer:'Ұзын',hint:'Он тербеліс уақытын салыстыр.',homeLever:'Тұрақты үстелде сызғышты қарындашқа қой. Бір жағына екі бірдей тиын, екінші жағына бір тиын қой. Жалғыз тиынды сызғыш теңескенше жылжыт.',homeCircuit:'Қағаздан батарея, ажыратқыш, шам және сымдарды қи. Тұйық шеңбер құрып, батареяға қайтатын жолды қадағала. Бұл электрсіз қауіпсіз модель: розеткаға қоспа.',homePend:'Ересек адаммен бірге шағын жүкті ұзындығы шамамен 25 және 100 см жіптерге іл. Әр маятникті бірдей шағын бұрыштан жіберіп, 10 толық тербеліс уақытын өлше. Уақыттарды салыстыр; жүкті бетіңнен алыс ұста.'}
    };
    const css = `
    .pqh-wrap{font:15px/1.5 system-ui,sans-serif;color:#193951}.pqh-home{border:1px solid #b7dce7;background:#f0f9fc;border-radius:12px;padding:10px 14px;margin:10px 0}.pqh-home summary{font-weight:800;cursor:pointer;color:#075d78}.pqh-home p{margin:8px 0 2px}.pqh-box{padding:15px;border:1px solid #cbe3ee;border-radius:14px;background:#f7fbff}.pqh-box button{border:1px solid #90c7d8;border-radius:9px;background:#fff;color:#16445c;padding:9px 12px;font:700 14px system-ui;cursor:pointer}.pqh-box button:hover,.pqh-box button[aria-pressed=true]{background:#cdeef6;border-color:#007e9d}.pqh-box button:focus-visible{outline:3px solid #eaa523;outline-offset:2px}.pqh-row{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}.pqh-beam{height:12px;background:#3688a1;border-radius:6px;margin:20px 10px 0}.pqh-pivot{text-align:center;color:#24738d;font-size:24px;line-height:1}.pqh-weight{display:inline-block;cursor:grab;padding:10px;background:#dff5fc;border:1px solid #7dbaca;border-radius:10px}.pqh-track{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;color:#086c89;font-weight:700}.pqh-read{min-height:25px;font-weight:700;color:#175c72}.pqh-pendulums{display:flex;gap:28px;align-items:flex-start;height:150px;margin:8px 0}.pqh-pendulum{width:80px;border-top:3px solid #58869c;text-align:center}.pqh-string{width:2px;margin:auto;background:#477083;position:relative;transform-origin:top center}.pqh-string::after{content:'';position:absolute;width:20px;height:20px;border-radius:50%;background:#1698b3;bottom:-10px;left:-9px}.pqh-short{height:60px}.pqh-long{height:120px}.pqh-swing{animation:pqh-swing var(--period) ease-in-out infinite alternate}@keyframes pqh-swing{from{transform:rotate(-12deg)}to{transform:rotate(12deg)}}@media(prefers-reduced-motion:reduce){.pqh-swing{animation:none}}.pqh-home,.pqh-box{color:#193951}html[data-theme=dark] .pqh-home,html[data-theme=dark] .pqh-box{background:#122b42;color:#e1f3ff;border-color:#3a667b}html[data-theme=dark] .pqh-home summary{color:#a1e9f8}html[data-theme=dark] .pqh-read,html[data-theme=dark] .pqh-track{color:#a1e9f8}`;
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
