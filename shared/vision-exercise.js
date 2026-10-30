/* Задания о зрении в галерее симуляторов 8 класса. */
(function () {
    'use strict';
    if (Number(window.CURRENT_GRADE) !== 8) return;
    const text = {
        ru: { title: 'Зрение и линзы', desc: 'Определи недостаток зрения и нарисуй его коррекцию.', chapter: '§ 42 · Оптика', open: 'Открыть задания →', close: 'Закрыть' },
        kk: { title: 'Көру және линзалар', desc: 'Көру кемістігін анықтап, оны түзетуді сал.', chapter: '§ 42 · Оптика', open: 'Тапсырмаларды ашу →', close: 'Жабу' },
        en: { title: 'Vision and lenses', desc: 'Identify a vision defect and draw its correction.', chapter: '§ 42 · Optics', open: 'Open exercises →', close: 'Close' }
    };
    function lang() { try { return (typeof I18n !== 'undefined' && I18n.currentLang) || localStorage.getItem('pq_lang') || 'ru'; } catch (_) { return 'ru'; } }
    function open() {
        const t = text[lang()] || text.ru;
        const previous = document.activeElement;
        const overlay = document.createElement('div');
        overlay.className = 'pqvision-overlay';
        const dialog = document.createElement('div');
        dialog.className = 'pqvision-dialog';
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-label', t.title);
        const head = document.createElement('div'); head.className = 'pqvision-head';
        const title = document.createElement('b'); title.textContent = t.title;
        const closeButton = document.createElement('button'); closeButton.type = 'button'; closeButton.textContent = '✕ ' + t.close;
        const iframe = document.createElement('iframe'); iframe.src = './shared/vision-exercise.html?lang=' + encodeURIComponent(lang()); iframe.title = t.title;
        function onKey(e) { if (e.key === 'Escape') close(); }
        function close() { document.removeEventListener('keydown', onKey); overlay.remove(); if (previous && previous.focus) previous.focus(); }
        closeButton.addEventListener('click', close);
        overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
        iframe.addEventListener('load', () => { try { iframe.contentDocument.addEventListener('keydown', onKey); } catch (_) {} });
        head.append(title, closeButton); dialog.append(head, iframe); overlay.appendChild(dialog); document.body.appendChild(overlay);
        document.addEventListener('keydown', onKey); closeButton.focus();
    }
    function mountGallery() {
        const grid = document.getElementById('pq-sim89-grid');
        if (!grid || grid.querySelector('[data-vision-exercise]')) return;
        const anchor = grid.querySelector('[data-s89="g8_eye"]');
        if (!anchor) return;
        const t = text[lang()] || text.ru;
        const card = document.createElement('button'); card.type = 'button'; card.className = 'pq-sim89-card'; card.dataset.visionExercise = 'true';
        const icon = document.createElement('span'); icon.className = 'pq-sim89-card-icon'; icon.textContent = '👁️';
        const chapter = document.createElement('span'); chapter.className = 'pq-sim89-card-chapter'; chapter.textContent = t.chapter;
        const title = document.createElement('b'); title.textContent = t.title;
        const desc = document.createElement('small'); desc.textContent = t.desc;
        const action = document.createElement('em'); action.textContent = t.open;
        card.append(icon, chapter, title, desc, action); card.addEventListener('click', open);
        anchor.parentNode.insertBefore(card, anchor.nextSibling);
    }
    const style = document.createElement('style');
    style.textContent = '.pqvision-overlay{position:fixed;inset:0;z-index:9900;background:#061020cc;display:flex;align-items:center;justify-content:center;padding:12px}.pqvision-dialog{width:min(1180px,100%);height:min(92vh,1000px);background:#f4f7fb;border-radius:16px;overflow:hidden;display:flex;flex-direction:column}.pqvision-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 16px;color:#202b3c;font:700 18px system-ui}.pqvision-head button{font:600 14px system-ui;cursor:pointer;padding:8px 12px;border:1px solid #9aaec4;border-radius:8px;background:white;color:#202b3c}.pqvision-head button:focus-visible{outline:3px solid #4678f5}.pqvision-dialog iframe{display:block;border:0;width:100%;flex:1;min-height:0;background:#f4f7fb}';
    document.head.appendChild(style);
    window.PQVisionExercise = { mountGallery };
    mountGallery();
})();
