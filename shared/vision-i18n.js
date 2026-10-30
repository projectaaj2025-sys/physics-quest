/* Localisation for the vision exercise, selected by the parent simulator. */
(function () {
  'use strict';
  const requested = new URLSearchParams(location.search).get('lang');
  const lang = ['ru','kk','en'].includes(requested) ? requested : 'ru';
  const dictionary = {
  "Зрение и линзы": {
    "kk": "Көру және линзалар",
    "en": "Vision and lenses"
  },
  "Назови недостаток зрения": {
    "kk": "Көру кемістігін ата",
    "en": "Name the vision defect"
  },
  "Посмотри на схему и напиши свой ответ.": {
    "kk": "Сызбаны қарап, жауабыңды жаз.",
    "en": "Look at the diagram and write your answer."
  },
  "2 балла": {
    "kk": "2 балл",
    "en": "2 points"
  },
  "6 баллов": {
    "kk": "6 балл",
    "en": "6 points"
  },
  "3 балла": {
    "kk": "3 балл",
    "en": "3 points"
  },
  "Круглый глаз с фокусом перед сетчаткой": {
    "kk": "Фокусы тор қабықтың алдында орналасқан көз",
    "en": "Eye with focus in front of the retina"
  },
  "Параллельные лучи проходят через роговицу и хрусталик, а затем сходятся перед задней стенкой глаза.": {
    "kk": "Параллель сәулелер қасаң қабық пен көз бұршағынан өтіп, көздің артқы қабырғасының алдында жинақталады.",
    "en": "Parallel rays pass through the cornea and lens, then converge in front of the back of the eye."
  },
  "фокус": {
    "kk": "фокус",
    "en": "focus"
  },
  "сетчатка": {
    "kk": "тор қабық",
    "en": "retina"
  },
  "роговица": {
    "kk": "қасаң қабық",
    "en": "cornea"
  },
  "хрусталик": {
    "kk": "көз бұршағы",
    "en": "eye lens"
  },
  "линза": {
    "kk": "линза",
    "en": "lens"
  },
  "зона линзы": {
    "kk": "линза аймағы",
    "en": "lens area"
  },
  "Схема глаза и ход лучей.": {
    "kk": "Көз сызбасы және сәулелердің жолы.",
    "en": "Eye diagram and ray paths."
  },
  "Ответ ученика": {
    "kk": "Оқушы жауабы",
    "en": "Your answer"
  },
  "Введите свой ответ": {
    "kk": "Жауабыңды жаз",
    "en": "Enter your answer"
  },
  "Проверить": {
    "kk": "Тексеру",
    "en": "Check"
  },
  "Объясни, чем он характеризуется": {
    "kk": "Оның белгілерін түсіндір",
    "en": "Explain its characteristics"
  },
  "Сформулируй ответ самостоятельно.": {
    "kk": "Жауабыңды өз сөзіңмен жаз.",
    "en": "Write your answer in your own words."
  },
  "0 знаков": {
    "kk": "0 таңба",
    "en": "0 characters"
  },
  "Проверить текст": {
    "kk": "Мәтінді тексеру",
    "en": "Check text"
  },
  "Нарисуй коррекцию сам": {
    "kk": "Түзетуді өзің сал",
    "en": "Draw the correction yourself"
  },
  "Нарисуй вогнутую линзу и ход лучей после неё. Готового рисунка среди вариантов нет.": {
    "kk": "Ойыс линзаны және одан кейінгі сәулелердің жолын сал. Дайын сурет берілмеген.",
    "en": "Draw a concave lens and the paths of the rays after it. There is no ready-made drawing to choose."
  },
  "Свободное рисование": {
    "kk": "Еркін сурет салу",
    "en": "Freehand drawing"
  },
  "за линзу  +": {
    "kk": "линза үшін  +",
    "en": "for the lens  +"
  },
  "за лучи": {
    "kk": "сәулелер үшін",
    "en": "for the rays"
  },
  "3а. Корректирующая линза": {
    "kk": "3а. Түзетуші линза",
    "en": "3a. Corrective lens"
  },
  "Обведи контур рассеивающей линзы в пунктирной зоне.": {
    "kk": "Үзік сызықпен белгіленген аймақта шашыратқыш линзаның контурын сал.",
    "en": "Draw the outline of a diverging lens in the dashed area."
  },
  "Круглый глаз и пунктирная зона для рисунка линзы": {
    "kk": "Көз және линза салуға арналған үзік сызықты аймақ",
    "en": "Eye and dashed area for drawing the lens"
  },
  "Поле для свободного рисунка линзы": {
    "kk": "Линзаны еркін салу аймағы",
    "en": "Freehand lens drawing area"
  },
  "0 штрихов": {
    "kk": "0 штрих",
    "en": "0 strokes"
  },
  "Отменить": {
    "kk": "Болдырмау",
    "en": "Undo"
  },
  "Очистить": {
    "kk": "Тазалау",
    "en": "Clear"
  },
  "3б. Ход лучей после коррекции": {
    "kk": "3ә. Түзетуден кейінгі сәулелер жолы",
    "en": "3b. Ray paths after correction"
  },
  "Покажи ход лучей при исправлении зрения. Каждый луч рисуй одним непрерывным штрихом до сетчатки.": {
    "kk": "Көру түзетілгендегі сәулелердің жолын көрсет. Әр сәулені тор қабыққа дейін бір үздіксіз сызықпен сал.",
    "en": "Show the ray paths after correction. Draw each ray in one continuous stroke to the retina."
  },
  "Круглый глаз и поле для рисунка хода лучей": {
    "kk": "Көз және сәулелер жолын салу аймағы",
    "en": "Eye and area for drawing ray paths"
  },
  "Поле для свободного рисунка лучей": {
    "kk": "Сәулелерді еркін салу аймағы",
    "en": "Freehand ray drawing area"
  },
  "Автопроверка рисунка приблизительная: рисуй линии чётко и непрерывно.": {
    "kk": "Суретті автоматты тексеру жуықталған: сызықтарды анық әрі үздіксіз сал.",
    "en": "Drawing checks are approximate: draw clear, continuous lines."
  },
  "Завершить попытку": {
    "kk": "Әрекетті аяқтау",
    "en": "Finish attempt"
  },
  "БАЛЛОВ": {
    "kk": "БАЛЛ",
    "en": "POINTS"
  },
  "Начни с первого вопроса": {
    "kk": "Бірінші сұрақтан баста",
    "en": "Start with the first question"
  },
  "Напиши ответы и выполни рисунок — результат обновится автоматически.": {
    "kk": "Жауаптарды жазып, суретті сал — нәтиже автоматты түрде жаңарады.",
    "en": "Write your answers and draw the diagram; your result updates automatically."
  },
  "Показать разбор": {
    "kk": "Түсіндірмені көрсету",
    "en": "Show explanation"
  },
  "Скрыть разбор": {
    "kk": "Түсіндірмені жасыру",
    "en": "Hide explanation"
  },
  "Начать заново": {
    "kk": "Қайта бастау",
    "en": "Start again"
  },
  "Ключ и критерии автопроверки": {
    "kk": "Жауаптар және автоматты тексеру критерийлері",
    "en": "Answer key and checking criteria"
  },
  "1 · 2 балла": {
    "kk": "1 · 2 балл",
    "en": "1 · 2 points"
  },
  "2 · 2 балла": {
    "kk": "2 · 2 балл",
    "en": "2 · 2 points"
  },
  "3а · 3 балла": {
    "kk": "3а · 3 балл",
    "en": "3a · 3 points"
  },
  "3б · 3 балла": {
    "kk": "3ә · 3 балл",
    "en": "3b · 3 points"
  },
  "Близорукость, или миопия.": {
    "kk": "Жақыннан көргіштік немесе миопия.",
    "en": "Nearsightedness, or myopia."
  },
  "При ней фокус находится перед сетчаткой.": {
    "kk": "Бұл кезде фокус тор қабықтың алдында орналасады.",
    "en": "The focus lies in front of the retina."
  },
  "В тексте должны быть признаки:": {
    "kk": "Мәтінде мына белгілер болуы керек:",
    "en": "The answer should mention:"
  },
  "далёкие предметы видны нечётко; фокус расположен перед сетчаткой.": {
    "kk": "алыстағы заттар анық көрінбейді; фокус тор қабықтың алдында орналасады.",
    "en": "distant objects appear blurry; the focus lies in front of the retina."
  },
  "Рассеивающая линза:": {
    "kk": "Шашыратқыш линза:",
    "en": "Diverging lens:"
  },
  "вогнутый контур, середина каждой боковой грани смещена внутрь.": {
    "kk": "ойыс контур, екі бүйір жиегінің ортасы ішке қарай иілген.",
    "en": "a concave outline, with the middle of each side curving inward."
  },
  "Ход лучей:": {
    "kk": "Сәулелер жолы:",
    "en": "Ray paths:"
  },
  "после рассеивающей линзы верхний и нижний лучи расходятся, затем хрусталик глаза собирает их на сетчатке.": {
    "kk": "шашыратқыш линзадан кейін жоғарғы және төменгі сәулелер алшақтайды, содан кейін көз бұршағы оларды тор қабыққа жинайды.",
    "en": "after the diverging lens, the upper and lower rays diverge; the eye lens then brings them together on the retina."
  },
  "Работа начата": {
    "kk": "Жұмыс басталды",
    "en": "Work started"
  },
  "Отлично! Работа выполнена": {
    "kk": "Тамаша! Жұмыс орындалды",
    "en": "Great! Work completed"
  },
  "Все ответы и оба рисунка соответствуют критериям задания.": {
    "kk": "Барлық жауаптар мен екі сурет тапсырма критерийлеріне сәйкес келеді.",
    "en": "All answers and both drawings meet the criteria."
  },
  "Попытка завершена": {
    "kk": "Әрекет аяқталды",
    "en": "Attempt completed"
  },
  "Проверь результат и при необходимости исправь текст или рисунок.": {
    "kk": "Нәтижені тексеріп, қажет болса мәтінді немесе суретті түзет.",
    "en": "Check your result and correct the text or drawing if needed."
  },
  "Верно! Это близорукость, или миопия.": {
    "kk": "Дұрыс! Бұл жақыннан көргіштік немесе миопия.",
    "en": "Correct! This is nearsightedness, or myopia."
  },
  "Ответ не засчитан: 0 из 2 баллов.": {
    "kk": "Жауап қабылданбады: 2 баллдан 0.",
    "en": "Answer not accepted: 0 out of 2 points."
  },
  "Верно! В тексте названы оба признака: нечёткое зрение вдаль и фокус перед сетчаткой.": {
    "kk": "Дұрыс! Екі белгі де көрсетілген: алысты анық көрмеу және фокустың тор қабық алдында болуы.",
    "en": "Correct! Both signs are mentioned: blurry distance vision and focus in front of the retina."
  },
  "1 из 2 баллов.": {
    "kk": "2 баллдан 1.",
    "en": "1 out of 2 points."
  },
  "Линза распознана: контур вогнутый, то есть рассеивающий. 3 из 3 баллов.": {
    "kk": "Линза анықталды: контуры ойыс, яғни шашыратқыш. 3 баллдан 3.",
    "en": "Lens recognised: the outline is concave, so the lens is diverging. 3 out of 3 points."
  },
  "Рисунок проверен: 1 из 3 баллов.": {
    "kk": "Сурет тексерілді: 3 баллдан 1.",
    "en": "Drawing checked: 1 out of 3 points."
  },
  "Рисунок не засчитан: 0 из 3 баллов.": {
    "kk": "Сурет қабылданбады: 3 баллдан 0.",
    "en": "Drawing not accepted: 0 out of 3 points."
  },
  "Ход лучей распознан: после линзы верхний и нижний лучи расходятся, затем три луча сходятся на сетчатке. 3 из 3 баллов.": {
    "kk": "Сәулелер жолы анықталды: линзадан кейін жоғарғы және төменгі сәулелер алшақтап, үш сәуле тор қабықта түйіседі. 3 баллдан 3.",
    "en": "Ray paths recognised: the upper and lower rays diverge after the lens, then all three meet at the retina. 3 out of 3 points."
  },
  "Рисунок проверен: 6 из 6 баллов. Линза и ход лучей подходят для коррекции миопии.": {
    "kk": "Сурет тексерілді: 6 баллдан 6. Линза мен сәулелер жолы миопияны түзетуге сәйкес келеді.",
    "en": "Drawing checked: 6 out of 6 points. The lens and rays are suitable for correcting myopia."
  },
  "Сначала выполни этот пункт, чтобы система могла его проверить.": {
    "kk": "Жүйе тексеруі үшін алдымен осы тармақты орында.",
    "en": "Complete this part first so it can be checked."
  }
};
  function tr(value) { return (dictionary[value] && dictionary[value][lang]) || value; }
  document.documentElement.lang = lang;
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (/^(SCRIPT|STYLE)$/.test(node.parentNode.nodeName)) continue;
    const original = node.nodeValue.trim();
    if (dictionary[original] && lang !== 'ru') node.nodeValue = node.nodeValue.replace(original, tr(original));
  }
  document.querySelectorAll('[aria-label],[placeholder]').forEach(el => {
    ['aria-label','placeholder'].forEach(attr => { if (el.hasAttribute(attr)) el.setAttribute(attr, tr(el.getAttribute(attr))); });
  });
  window.visionLanguage = lang;
  window.visionTranslate = tr;
})();
