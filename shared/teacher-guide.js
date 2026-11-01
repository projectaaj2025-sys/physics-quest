/* ============================================================
   ПОШАГОВОЕ РУКОВОДСТВО УЧИТЕЛЯ — RU / ҚАЗ / EN
   Структура всех языков одинакова; перевод не подменяется русским.
   ============================================================ */
(function () {
    "use strict";

    const TEACHER_GUIDE_LOCALES = {
        ru: {
            pageTitle: "Подробная инструкция учителя — Физика-Квест",
            brand: "ФИЗИКА-КВЕСТ",
            skip: "Перейти к инструкции",
            languageLabel: "Язык инструкции",
            print: "Печать / PDF",
            heroEyebrow: "Руководство для учителя · 7–9 классы",
            heroTitle: "Всё по шагам: от первого входа до отчёта",
            heroDescription: "Подробная инструкция по кабинету и основным возможностям сайта. Нажимайте указанные кнопки по порядку или откройте нужный раздел через содержание.",
            heroChips: ["10 разделов", "66 практических шагов", "RU · ҚАЗ · EN"],
            quickTitle: "Быстрый старт: шесть действий",
            quickHint: "Если нужно провести первый урок как можно скорее, начните здесь. Подробности каждого действия — ниже.",
            quickSteps: [
                { section: "start", text: "Войдите как учитель и задайте ПИН на своём устройстве." },
                { section: "class", text: "Создайте класс и добавьте учеников вместе с их короткими кодами." },
                { section: "assignment", text: "Откройте подробное назначение и выберите класс и урок." },
                { section: "assignment", text: "Передайте классу QR-код, ссылку или короткий код назначения." },
                { section: "student", text: "После работы получите от учеников коды результатов или JSON-отчёты." },
                { section: "results", text: "Добавьте результаты на вкладке «Класс» и проверьте точность и слабые темы." }
            ],
            contents: "Содержание",
            sidebarNote: "Кнопка «Печать / PDF» сохраняет всю инструкцию на выбранном языке.",
            sectionLabel: "Раздел",
            noteLabel: "Важно",
            exampleLabel: "Пример",
            cabinet: "Открыть кабинет учителя",
            top: "Наверх ↑",
            footer: "Данные классов, назначений и результатов хранятся локально в браузере. Для работы на другом устройстве используйте экспорт, а для получения работ учеников — коды или файлы отчётов.",
            sections: [
                {
                    id: "start", icon: "🚀", title: "Первый вход и настройка",
                    lead: "Настройте профиль один раз. После этого кабинет будет открываться на этом устройстве через сохранённый ПИН.",
                    steps: [
                        { title: "Откройте сайт", text: "Перейдите по адресу сайта или отсканируйте QR-код на его первом экране. Для первой загрузки нужен интернет." },
                        { title: "Выберите язык", text: "В окне профиля нажмите RU, ҚАЗ или EN. Этот же выбор доступен в главном меню; инструкция откроется на языке сайта." },
                        { title: "Укажите роль «Учитель»", text: "Выберите «Учитель», введите имя и придумайте ПИН не короче 4 символов. Подтвердите вход кнопкой «Войти как учитель»." },
                        { title: "Выберите класс игры", text: "На главной странице нажмите «Начать игру» у части для 7, 8 или 9 класса. Внутри игры класс можно сменить без потери общего профиля." },
                        { title: "Откройте кабинет", text: "В главном меню нажмите «Режим учителя». Сначала откроется вкладка «Класс» — сводная панель по всем параллелям 7–9." },
                        { title: "Проверьте ученический профиль отдельно", text: "На устройстве ученика выберите роль «Ученик», введите имя и сохраните предложенный четырёхсимвольный код. Не используйте ПИН учителя на общем экране учеников." }
                    ],
                    note: "ПИН нужен для входа учителя только в этом браузере. Это не серверный аккаунт: другой браузер или другое устройство настраивается отдельно."
                },
                {
                    id: "class", icon: "👥", title: "Создание класса и списка учеников",
                    lead: "Список с правильными кодами — основа точного журнала. Сначала соберите коды учеников, затем создавайте назначения.",
                    steps: [
                        { title: "Соберите короткие коды", text: "Попросите каждого ученика открыть «Профиль» и переписать четыре символа из поля кода. Код не является паролем — его можно передать учителю." },
                        { title: "Откройте создание класса", text: "В кабинете перейдите «Назначения» → «+ Класс». Эта кнопка есть и наверху, и под списком назначений." },
                        { title: "Назовите класс", text: "Введите понятное название, например «7А», «8Б» или «9А». Цифра в названии помогает мастеру сразу предложить уроки нужной параллели." },
                        { title: "Добавьте учеников", text: "Записывайте одного ученика в строке в формате «Имя | код». Не ставьте лишние вертикальные линии и проверьте код по профилю ученика." },
                        { title: "Сохраните и повторите", text: "Нажмите «Сохранить класс». Для другой параллели снова нажмите «+ Класс» и заполните отдельный список." },
                        { title: "Проверьте состав", text: "Откройте блок «Классы» на вкладке «Назначения». Используйте редактирование, если изменилось имя, состав или код; удаление требует подтверждения." }
                    ],
                    example: "Айдана Серикова | K7M2\nДанияр Нурланов | LBA6",
                    note: "Если код не указан, сайт создаёт служебный код в списке, но он может не совпасть с профилем ученика. Всегда переносите настоящий код — особенно при одинаковых именах."
                },
                {
                    id: "assignment", icon: "📌", title: "Назначение готового урока",
                    lead: "Подробный мастер подходит и одному ученику, и нескольким классам. Быстрый вариант нужен, когда класс уже создан и требуется только QR или ссылка.",
                    steps: [
                        { title: "Запустите мастер", text: "Откройте «Назначения» → «+ Подробное назначение». Для короткого сценария выберите «Быстро: QR / ссылка», укажите класс, урок и срок, затем создайте назначение." },
                        { title: "Шаг «Кому»: выберите получателей", text: "Выберите «Всему классу» и отметьте один или несколько классов. Для индивидуальной работы выберите «Одному ученику», введите имя и его настоящий код." },
                        { title: "Шаг «Что»: найдите урок", text: "Отфильтруйте список по 7–9 классу или начните вводить название темы в поиске. Нажмите на нужный урок и перейдите дальше." },
                        { title: "Шаг «Когда»: задайте условия", text: "Выберите дату в поле «Срок сдачи» или используйте готовые варианты «Завтра», «Через неделю». Добавьте короткий комментарий, например что взять на урок или что повторить." },
                        { title: "Настройте попытки и подсказки", text: "Укажите число подсказок и попыток на каждое задание. Метрики вовлечённости включайте только если действительно планируете анализировать дополнительные показатели." },
                        { title: "Шаг «Проверка»: подтвердите", text: "Сверьте получателей, тему, срок и ограничения. Если всё верно, нажмите «Создать»; сайт покажет общий код созданной группы назначений." },
                        { title: "Передайте работу ученикам", text: "Нажмите «QR-код», покажите код на проекторе или распечатайте плакат. Также можно скопировать ссылку либо отправить короткий код в классный чат." }
                    ],
                    note: "Один код объединяет учеников созданной группы. Статусы «Не начал», «В процессе», «Сдал» и «Просрочил» появятся после сопоставления результатов с учениками."
                },
                {
                    id: "custom", icon: "📝", title: "Свой урок и собственные задания",
                    lead: "Используйте этот раздел, если готовых вопросов недостаточно. Создание вопроса и назначение урока — два разных действия.",
                    steps: [
                        { title: "Создайте название урока", text: "Откройте «Мои уроки», заполните названия RU, EN и KK и нажмите «+ Добавить урок». Пустые EN/KK будут заменены русским названием." },
                        { title: "Откройте конструктор", text: "Перейдите «Создать задание». Выберите тип: один или несколько ответов, сопоставление, краткий или числовой ответ, верно/неверно, заполнение пропуска." },
                        { title: "Выберите тему и сложность", text: "В поле «Урок» выберите готовый параграф или свой урок. Установите сложность — она будет видна в списке собственных заданий." },
                        { title: "Заполните вопрос на трёх языках", text: "Введите русский текст обязательно, а английский и казахский — для полноценного переключения языка. Добавьте формулу, если она нужна." },
                        { title: "Введите и отметьте ответы", text: "Для теста заполните варианты RU/EN/KK и отметьте правильные. Для числа задайте допуск; для сопоставления используйте показанный в форме формат строк и пар." },
                        { title: "Добавьте обучающую обратную связь", text: "Напишите подсказку и объяснение, которое ученик увидит после ответа. Нажмите «Сохранить» и проверьте карточку в разделе «Мои задания»." },
                        { title: "Назначьте свой урок", text: "Вернитесь в «Назначения», откройте мастер и найдите свой урок в списке тем. На этом же устройстве проверьте прохождение как ученик перед выдачей классу." }
                    ],
                    note: "Собственные уроки и вопросы хранятся на устройстве учителя. Ссылка на такой урок не переносит его содержимое на другое устройство; для работы на других устройствах выбирайте встроенные уроки."
                },
                {
                    id: "student", icon: "🎒", title: "Что должен сделать ученик",
                    lead: "Этот раздел можно показать классу или распечатать отдельно. Он объясняет весь путь от полученной ссылки до передачи результата.",
                    steps: [
                        { title: "Открыть назначение", text: "Ученик сканирует QR или открывает ссылку. Если есть только код, он выбирает «Начать игру» → «Назначенные уроки» и вводит код в поле назначения." },
                        { title: "Проверить имя и код", text: "До начала работы ученик открывает «Профиль» и проверяет своё имя и четырёхсимвольный код. Именно эти данные свяжут результат со списком класса." },
                        { title: "Повторить теорию", text: "Перед миссией можно открыть теорию, формулы и разбор задачи. Полный конспект и PDF доступны в профиле на выбранном языке." },
                        { title: "Пройти миссию", text: "Ученик нажимает «Начать», выполняет задания и использует разрешённые подсказки. Число попыток и подсказок берётся из назначения учителя." },
                        { title: "Завершить все вопросы", text: "Не закрывайте страницу сразу после последнего ответа: дождитесь экрана итогов. Там отображаются счёт, точность и результат миссии." },
                        { title: "Передать код результата", text: "На экране итогов ученик копирует «Код результата для учителя» и отправляет его вам. Один код соответствует одной попытке." },
                        { title: "Или отправить файл отчёта", text: "Для передачи истории нажмите «Отчёт для учителя», сохраните JSON-файл и отправьте его без редактирования. Это удобнее, если нужно передать сразу несколько работ." }
                    ],
                    note: "Без интернета между устройствами автоматической отправки нет. Ученик должен передать код или файл, а учитель — добавить их в кабинет."
                },
                {
                    id: "results", icon: "📊", title: "Получение результатов и работа с журналом",
                    lead: "Вкладка «Класс» объединяет назначения и результаты 7–9 классов. С этого же устройства история подтягивается автоматически, с других — через импорт.",
                    steps: [
                        { title: "Выберите класс и период", text: "Откройте «Класс». Нажмите нужный класс и период «7 дней», «30 дней» или «Всё время» — показатели и списки пересчитаются." },
                        { title: "Откройте добавление результатов", text: "Разверните «Добавить результаты учеников». Для истории текущего устройства нажмите «С этого устройства»." },
                        { title: "Импортируйте коды или файл", text: "Вставьте коды результатов по одному в строке и нажмите «Добавить коды» либо выберите JSON через «Файл отчёта». Повторные записи будут пропущены." },
                        { title: "Прочитайте общие показатели", text: "Проверьте число учеников, назначений, сдавших, среднюю точность и активность за семь дней. Проценты дополнены десятибалльной отметкой." },
                        { title: "Разберите блок «Требуют внимания»", text: "Откройте просроченные назначения, низкую точность по теме или список неактивных учеников. Кнопка «Напомнить» готовит текст для классного чата." },
                        { title: "Откройте карточку ученика", text: "Нажмите на строку ученика. Внутри доступны динамика, слабые темы, назначения и все попытки; сохраните комментарий или скопируйте готовый отзыв." },
                        { title: "Назначьте следующий шаг", text: "Из карточки или списка слабых тем выберите повторное назначение. После новой попытки импортируйте результат и сравните точность." }
                    ],
                    note: "Если результат попал не к тому ученику, сначала проверьте код профиля в списке класса. Совпадение только по имени менее надёжно, особенно при однофамильцах или одинаковых именах."
                },
                {
                    id: "practice", icon: "🧪", title: "Теория, мини-игры и практические работы",
                    lead: "Сайт можно использовать не только для назначений: конспекты, симуляторы и командные режимы подходят для объяснения и живой практики на уроке.",
                    steps: [
                        { title: "Подготовьте объяснение", text: "Выберите урок нужной параллели, откройте теорию перед миссией и используйте формулы и пошаговый разбор. Полный конспект находится в профиле." },
                        { title: "Откройте практическую миссию", text: "Выберите лабораторный уровень по теме класса. Покажите цель и попросите учеников предсказать результат до изменения параметров." },
                        { title: "Проведите исследование", text: "Ученик сам перемещает детали, соединяет цепь, меняет условия и записывает показания. Сравните минимум два опыта и сформулируйте вывод по наблюдениям." },
                        { title: "Используйте полный экран", text: "Нажмите кнопку полноэкранного режима в симуляторе для проектора. Управление мышью и касанием сохраняется; выход выполняется повторной кнопкой или Escape." },
                        { title: "Задайте домашний опыт", text: "Откройте инструкцию домашнего эксперимента в практической миссии. Используйте только указанные безопасные материалы и соблюдайте ограничения по воде, резинкам и запуску шарика." },
                        { title: "Проведите командное повторение", text: "Откройте «Битву команд», создайте команды и покажите общий вопрос на экране. После раундов разберите не только счёт, но и задания с наибольшим числом ошибок." },
                        { title: "Сохраните достижение", text: "Для итогового портфолио откройте «Паспорт пилота» в профиле ученика, проверьте имя и выберите скачивание PNG или печать PDF доступного сертификата." }
                    ],
                    note: "Домашний эксперимент не заменяет правила безопасности: не используйте розетки, открытый огонь, кипяток и тяжёлые грузы. Останавливайте опыт при повреждении материалов."
                },
                {
                    id: "reports", icon: "📥", title: "Отчёты, печать и перенос данных",
                    lead: "Используйте разные форматы для разных задач: CSV — для таблицы, A4 — для печати, JSON — для переноса назначений или результатов.",
                    steps: [
                        { title: "Откройте блок «Отчёты»", text: "На вкладке «Класс» выберите нужный класс и период, затем прокрутите до «Отчёты». Экспорт учитывает выбранный фильтр." },
                        { title: "Выгрузите CSV", text: "Выберите «CSV: результаты», «CSV: темы» или «CSV: активность». Откройте скачанный файл в Excel или другой таблице и проверьте нужные столбцы." },
                        { title: "Подготовьте печатную сводку", text: "Нажмите «Сводка A4», проверьте класс, период, точность и список требующих внимания. Затем распечатайте или сохраните как PDF." },
                        { title: "Перенесите классы и назначения", text: "Откройте «Назначения» → «Экспорт / импорт» и нажмите «Скачать JSON». На другом устройстве выберите «Загрузить JSON» и укажите полученный файл." },
                        { title: "Сделайте резервную копию", text: "Периодически сохраняйте экспорт назначений и нужные отчёты в надёжном школьном хранилище. Не отправляйте файлы с персональными данными в открытые чаты." },
                        { title: "Проверьте данные после импорта", text: "Сверьте список классов, названия уроков и назначения. Импорт не заменяет проверку настроек: при необходимости отредактируйте срок и условия на новом устройстве." }
                    ],
                    note: "Не очищайте данные браузера без резервной копии. Очистка хранилища или использование другого браузера может скрыть локальные классы и журнал."
                },
                {
                    id: "languages", icon: "🌐", title: "Три языка и работа без интернета",
                    lead: "Интерфейс и встроенные материалы переключаются между русским, казахским и английским. Новая инструкция имеет собственный переключатель и печатается на выбранном языке.",
                    steps: [
                        { title: "Смените язык сайта", text: "Нажмите RU, ҚАЗ или EN в профиле либо в главном меню. Проверьте заголовки кабинета и текущий урок после переключения." },
                        { title: "Смените язык инструкции", text: "Используйте кнопки языка вверху этой страницы. Содержание и все шаги обновятся без закрытия вкладки; адрес сохранит выбранный параметр lang." },
                        { title: "Проверьте собственные материалы", text: "У созданного вопроса заполните RU, EN и KK отдельно. Если перевод не заполнен, сайт показывает русский текст — это запасной вариант, а не автоматический перевод." },
                        { title: "Подготовьте офлайн-работу заранее", text: "При работающем интернете откройте сайт и нужные классы, дождитесь полной загрузки. Service worker сохраняет оболочку и материалы для последующего открытия без сети." },
                        { title: "Проверьте офлайн перед уроком", text: "Отключите сеть на тестовом устройстве и откройте нужную страницу ещё раз. Заранее проверьте конкретный урок и симулятор, а не только главный экран." },
                        { title: "Организуйте обмен без сети", text: "QR и короткие коды можно показать на экране, но передачу результатов между разными устройствами выполните позже через код или сохранённый JSON-файл." }
                    ],
                    note: "Офлайн-кэш относится к конкретному браузеру и устройству. На новом устройстве сначала нужна одна полная загрузка с интернетом."
                },
                {
                    id: "troubleshooting", icon: "🛠", title: "Если что-то не получилось",
                    lead: "Проверяйте по одному пункту: чаще всего причина в другом профиле, не импортированном результате или очищенном локальном хранилище.",
                    steps: [
                        { title: "Назначение не открывается", text: "Проверьте код без лишних пробелов и выбранную параллель. Если QR повреждён, откройте скопированную ссылку или введите короткий код на вкладке назначенных уроков." },
                        { title: "Свой урок не найден у ученика", text: "Собственный урок существует только на устройстве, где его создали. Для разных устройств выберите встроенный урок либо проведите собственную работу на устройстве учителя." },
                        { title: "Результат не появился", text: "Убедитесь, что ученик дошёл до итогового экрана и передал код именно этой попытки. Затем повторите импорт на вкладке «Класс» и проверьте сообщение о добавленных записях." },
                        { title: "Результат привязался не туда", text: "Сверьте четырёхсимвольный код в профиле ученика и в списке класса. Исправьте список и используйте настоящие коды для всех учеников." },
                        { title: "Текст остался на русском", text: "Для встроенного интерфейса повторно выберите язык. Для собственного задания откройте редактирование и заполните английское и казахское поля вручную." },
                        { title: "Пропали классы или журнал", text: "Проверьте, тот ли это браузер и устройство. Не очищайте хранилище; восстановите переносимые данные из заранее сохранённого экспорта, если он есть." },
                        { title: "Страница выглядит устаревшей", text: "При доступном интернете обновите страницу и дождитесь установки новой версии. Если новая кнопка не появилась, закройте старую вкладку и откройте сайт заново." }
                    ],
                    note: "Не удаляйте прогресс и не сбрасывайте ПИН как первое действие: это не восстанавливает результаты. Сначала сохраните доступные отчёты и проверьте коды, вкладки и импорт."
                }
            ]
        },

        en: {
            pageTitle: "Detailed Teacher Guide — Physics Quest",
            brand: "PHYSICS QUEST",
            skip: "Skip to the guide",
            languageLabel: "Guide language",
            print: "Print / PDF",
            heroEyebrow: "Teacher guide · Grades 7–9",
            heroTitle: "Step by step: from first sign-in to reports",
            heroDescription: "A detailed guide to the teacher cabinet and the main site features. Follow the buttons in order or jump to any section from the contents.",
            heroChips: ["10 sections", "66 practical steps", "RU · ҚАЗ · EN"],
            quickTitle: "Quick start: six actions",
            quickHint: "If you need to run your first lesson soon, start here. Each action is explained in detail below.",
            quickSteps: [
                { section: "start", text: "Sign in as a teacher and create a PIN on your device." },
                { section: "class", text: "Create a class and add students with their short profile codes." },
                { section: "assignment", text: "Open the detailed assignment wizard and choose a class and lesson." },
                { section: "assignment", text: "Share the QR code, link, or short assignment code with the class." },
                { section: "student", text: "Collect result codes or JSON reports after students finish." },
                { section: "results", text: "Import the results on the Class tab and review accuracy and weak topics." }
            ],
            contents: "Contents",
            sidebarNote: "Use Print / PDF to save the complete guide in the selected language.",
            sectionLabel: "Section",
            noteLabel: "Important",
            exampleLabel: "Example",
            cabinet: "Open teacher cabinet",
            top: "Back to top ↑",
            footer: "Classes, assignments, and results are stored locally in the browser. Use export to move to another device, and collect student work through result codes or report files.",
            sections: [
                {
                    id: "start", icon: "🚀", title: "First visit and setup",
                    lead: "Set up the profile once. The cabinet will then open on this device with the saved teacher PIN.",
                    steps: [
                        { title: "Open the site", text: "Follow the site address or scan the QR code on its first screen. An internet connection is required for the initial load." },
                        { title: "Choose a language", text: "Select RU, ҚАЗ, or EN in the profile window. The same controls are available in the main menu, and the guide opens in the site language." },
                        { title: "Choose the Teacher role", text: "Select Teacher, enter your name, and create a PIN of at least 4 characters. Confirm with Sign in as Teacher." },
                        { title: "Choose a game grade", text: "On the home page, select Start Game for Grade 7, 8, or 9. You can change grades inside the game without losing the shared profile." },
                        { title: "Open the cabinet", text: "Select Teacher Mode in the main menu. The Class tab opens first: a combined dashboard for Grades 7–9." },
                        { title: "Set up student profiles separately", text: "On each student device, choose Student, enter the student's name, and save the suggested four-character code. Do not use the teacher PIN on a shared student screen." }
                    ],
                    note: "The PIN signs the teacher in only in this browser. It is not a server account: another browser or device must be set up separately."
                },
                {
                    id: "class", icon: "👥", title: "Creating a class and student roster",
                    lead: "A roster with the correct codes is the foundation of an accurate journal. Collect student codes before creating assignments.",
                    steps: [
                        { title: "Collect short codes", text: "Ask every student to open Profile and copy the four characters in the code field. This code is not a password and can safely be shared with the teacher." },
                        { title: "Open class creation", text: "In the cabinet, go to Assignments → + Class. This button is available both at the top and below the assignment list." },
                        { title: "Name the class", text: "Enter a clear name such as 7A, 8B, or 9A. A grade digit in the name helps the wizard suggest lessons for the right grade." },
                        { title: "Add students", text: "Enter one student per line as Name | code. Do not add extra vertical bars, and check every code against the student's profile." },
                        { title: "Save and repeat", text: "Select Save Class. For another grade or group, select + Class again and create a separate roster." },
                        { title: "Check the roster", text: "Open the Classes block on the Assignments tab. Edit the roster if a name, student, or code changes; deletion requires confirmation." }
                    ],
                    example: "Aidana Serikova | K7M2\nDaniyar Nurlanov | LBA6",
                    note: "If no code is entered, the site generates an internal roster code, but it may not match the student's profile. Always use the real code, especially when names are identical."
                },
                {
                    id: "assignment", icon: "📌", title: "Assigning a ready-made lesson",
                    lead: "The detailed wizard works for one student or several classes. Use the quick option when the class already exists and you only need a QR code or link.",
                    steps: [
                        { title: "Start the wizard", text: "Go to Assignments → + Detailed Assignment. For a shorter flow, choose Quick: QR / link, select a class, lesson, and due date, then create the assignment." },
                        { title: "Who: choose recipients", text: "Choose Whole Class and select one or several classes. For individual work, choose One Student and enter the student's name and real code." },
                        { title: "What: find a lesson", text: "Filter the list for Grades 7–9 or type part of the topic in Search. Select the required lesson and continue." },
                        { title: "When: set the conditions", text: "Choose a date under Due date or use a preset such as Tomorrow or In a Week. Add a short note, for example what to bring or review." },
                        { title: "Set attempts and hints", text: "Choose how many hints and attempts are allowed per task. Enable engagement metrics only if you actually plan to analyse the additional data." },
                        { title: "Check: confirm the assignment", text: "Review recipients, topic, due date, and limits. If everything is correct, select Create; the site displays the shared code for the new assignment group." },
                        { title: "Share the work", text: "Select QR Code to show it on a projector or print a poster. You can also copy the link or send the short code to the class chat." }
                    ],
                    note: "One code connects the students in the created group. Not Started, In Progress, Done, and Overdue statuses appear after results are matched to students."
                },
                {
                    id: "custom", icon: "📝", title: "Custom lessons and questions",
                    lead: "Use this area when the built-in questions are not enough. Creating a question and assigning a lesson are two separate actions.",
                    steps: [
                        { title: "Create the lesson name", text: "Open My Lessons, fill in the RU, EN, and KK names, and select + Add Lesson. Empty EN/KK names fall back to Russian." },
                        { title: "Open the question builder", text: "Go to Create Task. Choose single or multiple choice, matching, short or numeric answer, true/false, or fill in the blank." },
                        { title: "Choose topic and difficulty", text: "Under Lesson, choose a built-in topic or your custom lesson. Set the difficulty shown in your custom task list." },
                        { title: "Write the question in three languages", text: "Russian is required; add English and Kazakh for full language switching. Add a formula if students need it." },
                        { title: "Enter and mark answers", text: "For choice tasks, fill in RU/EN/KK options and mark the correct ones. For numbers, set a tolerance; for matching, follow the row and pair format shown in the form." },
                        { title: "Add learning feedback", text: "Write a hint and an explanation shown after the answer. Select Save, then review the card under My Tasks." },
                        { title: "Assign the custom lesson", text: "Return to Assignments, open the wizard, and find your lesson in the topic list. Test it as a student on the same device before giving it to a class." }
                    ],
                    note: "Custom lessons and questions remain on the teacher's device. A link does not transfer custom content to another device; use built-in lessons for work across student devices."
                },
                {
                    id: "student", icon: "🎒", title: "What the student needs to do",
                    lead: "You can show or print this section for the class. It explains the full route from receiving a link to submitting the result.",
                    steps: [
                        { title: "Open the assignment", text: "The student scans the QR code or opens the link. With only a code, they choose Start Game → Assigned Lessons and enter it in the assignment field." },
                        { title: "Check name and code", text: "Before starting, the student opens Profile and checks their name and four-character code. These details match the result to the class roster." },
                        { title: "Review the theory", text: "Before a mission, students can open theory, formulas, and worked solutions. The full notes and PDF are available in Profile in the selected language." },
                        { title: "Complete the mission", text: "The student selects Start, answers the tasks, and uses permitted hints. The teacher's assignment controls the number of attempts and hints." },
                        { title: "Finish every question", text: "Do not close the page immediately after the last answer: wait for the results screen. It shows the score, accuracy, and mission outcome." },
                        { title: "Send the result code", text: "On the results screen, the student copies Result Code for the Teacher and sends it to you. Each code represents one attempt." },
                        { title: "Or send a report file", text: "To share history, select Report for the Teacher, save the JSON file, and send it unchanged. This is more convenient for several completed assignments." }
                    ],
                    note: "There is no automatic transfer between devices without a connection. The student must provide a code or file, and the teacher must import it into the cabinet."
                },
                {
                    id: "results", icon: "📊", title: "Collecting results and using the journal",
                    lead: "The Class tab combines assignments and results for Grades 7–9. History from the same device is imported automatically; other devices require an import.",
                    steps: [
                        { title: "Choose class and period", text: "Open Class. Select a class and 7 Days, 30 Days, or All Time; the indicators and lists update for that view." },
                        { title: "Open result import", text: "Expand Add Student Results. To import history from the current device, select From This Device." },
                        { title: "Import codes or a file", text: "Paste one result code per line and select Add Codes, or choose a JSON file through Report File. Duplicate records are skipped." },
                        { title: "Read the overview", text: "Check student, assignment, and completion counts, average accuracy, and seven-day activity. Percentages are accompanied by a ten-point mark." },
                        { title: "Review Needs Attention", text: "Open overdue assignments, low topic accuracy, or the inactive student list. Remind prepares a message you can send to the class chat." },
                        { title: "Open a student card", text: "Select a student row. The card shows trends, weak topics, assignments, and every attempt; save a comment or copy the prepared review." },
                        { title: "Assign the next step", text: "Use the student card or weak-topic list to assign another attempt. Import the new result and compare accuracy." }
                    ],
                    note: "If a result is matched to the wrong student, first check the profile code in the class roster. Name-only matching is less reliable, especially for duplicate names."
                },
                {
                    id: "practice", icon: "🧪", title: "Theory, mini-games, and practical work",
                    lead: "The site is not only for assignments: notes, simulations, and team modes support explanations and active classroom practice.",
                    steps: [
                        { title: "Prepare the explanation", text: "Choose a lesson for the grade, open its theory before the mission, and use formulas and step-by-step solutions. Full notes are available in Profile." },
                        { title: "Open a practical mission", text: "Choose a laboratory level for the class topic. State the goal and ask students to predict the result before changing any parameters." },
                        { title: "Run an investigation", text: "Students move parts, build circuits, change conditions, and record readings themselves. Compare at least two trials and draw a conclusion from the observations." },
                        { title: "Use fullscreen", text: "Select the simulator's fullscreen button for a projector. Mouse and touch controls still work; use the button again or Escape to exit." },
                        { title: "Assign a home experiment", text: "Open the home experiment guide in a practical mission. Use only the listed safe materials and follow the limits for water, elastic bands, and balloon launches." },
                        { title: "Run a team review", text: "Open Team Battle, create teams, and show the shared question on screen. After the rounds, discuss the tasks with the most errors as well as the score." },
                        { title: "Save an achievement", text: "For a final portfolio, open Pilot Passport in the student profile, check the name, and download a PNG or print a PDF of an unlocked certificate." }
                    ],
                    note: "Home experiments still require safety rules: never use mains electricity, open flames, boiling water, or heavy weights. Stop if any material is damaged."
                },
                {
                    id: "reports", icon: "📥", title: "Reports, printing, and data transfer",
                    lead: "Use each format for its purpose: CSV for spreadsheets, A4 for printing, and JSON for moving assignments or results.",
                    steps: [
                        { title: "Open Reports", text: "On the Class tab, choose the required class and period, then scroll to Reports. The export uses the selected filter." },
                        { title: "Export CSV", text: "Choose CSV: Results, CSV: Topics, or CSV: Activity. Open the downloaded file in Excel or another spreadsheet and check the columns you need." },
                        { title: "Prepare an A4 summary", text: "Select A4 Summary and review the class, period, accuracy, and students needing attention. Then print it or save it as a PDF." },
                        { title: "Move classes and assignments", text: "Go to Assignments → Export / Import and select Download JSON. On the other device, choose Load JSON and upload the file you received." },
                        { title: "Keep a backup", text: "Regularly save assignment exports and required reports in a secure school storage location. Do not post files containing personal data in public chats." },
                        { title: "Check imported data", text: "Review class rosters, lesson names, and assignments. Import does not replace a settings check: edit due dates and conditions on the new device if needed." }
                    ],
                    note: "Do not clear browser data without a backup. Clearing storage or switching browsers can hide locally stored classes and journal records."
                },
                {
                    id: "languages", icon: "🌐", title: "Three languages and offline work",
                    lead: "The interface and built-in materials switch between Russian, Kazakh, and English. This guide has its own language switcher and prints in the selected language.",
                    steps: [
                        { title: "Change the site language", text: "Select RU, ҚАЗ, or EN in the profile or main menu. Check the cabinet headings and current lesson after switching." },
                        { title: "Change the guide language", text: "Use the language buttons at the top of this page. The contents and every step update without closing the tab, and the address keeps the selected lang parameter." },
                        { title: "Check custom materials", text: "Fill in the RU, EN, and KK fields for each custom question. If a translation is empty, the site shows Russian as a fallback rather than translating automatically." },
                        { title: "Prepare offline work in advance", text: "With the internet available, open the site and required grades and wait for them to load fully. The service worker stores the app shell and materials for later use without a connection." },
                        { title: "Test offline before the lesson", text: "Disable the network on a test device and reopen the required page. Test the exact lesson and simulator, not only the home screen." },
                        { title: "Plan offline exchange", text: "QR images and short codes can be shown on screen, but transfer results between different devices later using a code or a saved JSON file." }
                    ],
                    note: "The offline cache belongs to a specific browser and device. A new device first needs one complete load with an internet connection."
                },
                {
                    id: "troubleshooting", icon: "🛠", title: "If something goes wrong",
                    lead: "Check one item at a time: the usual causes are a different profile, results that were not imported, or cleared local storage.",
                    steps: [
                        { title: "An assignment will not open", text: "Check the code for extra spaces and confirm the selected grade. If the QR code is damaged, open the copied link or enter the short code on the Assigned Lessons tab." },
                        { title: "A student cannot find a custom lesson", text: "A custom lesson exists only on the device where it was created. For multiple devices, choose a built-in lesson or run the custom activity on the teacher's device." },
                        { title: "A result is missing", text: "Make sure the student reached the results screen and sent the code for that attempt. Import it again on the Class tab and check the added-record message." },
                        { title: "A result matched the wrong student", text: "Compare the four-character code in the student profile with the class roster. Correct the roster and use real codes for every student." },
                        { title: "Text remains in Russian", text: "For the built-in interface, select the language again. For a custom question, open it for editing and fill in the English and Kazakh fields manually." },
                        { title: "Classes or journal records disappeared", text: "Check whether you are using the same browser and device. Do not clear storage; restore transferable data from a previous export if available." },
                        { title: "The page looks outdated", text: "With internet access, reload the page and allow the new version to install. If a new button is missing, close the old tab and reopen the site." }
                    ],
                    note: "Do not reset progress or the PIN as a first response: this does not restore results. Save available reports and check codes, tabs, and imports first."
                }
            ]
        },

        kk: {
            pageTitle: "Мұғалімге арналған толық нұсқаулық — Физика-Квест",
            brand: "ФИЗИКА-КВЕСТ",
            skip: "Нұсқаулыққа өту",
            languageLabel: "Нұсқаулық тілі",
            print: "Басып шығару / PDF",
            heroEyebrow: "Мұғалім нұсқаулығы · 7–9 сыныптар",
            heroTitle: "Барлығы қадам-қадаммен: алғашқы кіруден есепке дейін",
            heroDescription: "Мұғалім кабинеті мен сайттың негізгі мүмкіндіктеріне арналған толық нұсқаулық. Батырмаларды ретімен басыңыз немесе мазмұннан қажетті бөлімді таңдаңыз.",
            heroChips: ["10 бөлім", "66 практикалық қадам", "RU · ҚАЗ · EN"],
            quickTitle: "Жылдам бастау: алты әрекет",
            quickHint: "Алғашқы сабағыңызды жақын уақытта өткізу керек болса, осы жерден бастаңыз. Әр әрекеттің толық түсініктемесі төменде берілген.",
            quickSteps: [
                { section: "start", text: "Мұғалім ретінде кіріп, құрылғыңызда ПИН-код жасаңыз." },
                { section: "class", text: "Сынып құрып, оқушыларды қысқа профиль кодтарымен қосыңыз." },
                { section: "assignment", text: "Толық тағайындау шеберін ашып, сынып пен сабақты таңдаңыз." },
                { section: "assignment", text: "Сыныпқа QR кодты, сілтемені немесе қысқа тағайындау кодын жіберіңіз." },
                { section: "student", text: "Оқушылар аяқтағаннан кейін нәтиже кодтарын немесе JSON есептерін жинаңыз." },
                { section: "results", text: "Нәтижелерді «Сынып» қойындысына қосып, дәлдік пен әлсіз тақырыптарды тексеріңіз." }
            ],
            contents: "Мазмұны",
            sidebarNote: "«Басып шығару / PDF» батырмасы толық нұсқаулықты таңдалған тілде сақтайды.",
            sectionLabel: "Бөлім",
            noteLabel: "Маңызды",
            exampleLabel: "Мысал",
            cabinet: "Мұғалім кабинетін ашу",
            top: "Жоғарыға ↑",
            footer: "Сыныптар, тағайындаулар және нәтижелер браузерде жергілікті сақталады. Басқа құрылғыға көшу үшін экспортты, ал оқушы жұмыстарын алу үшін нәтиже кодтарын немесе есеп файлдарын пайдаланыңыз.",
            sections: [
                {
                    id: "start", icon: "🚀", title: "Алғашқы кіру және баптау",
                    lead: "Профильді бір рет баптаңыз. Бұдан кейін кабинет осы құрылғыда сақталған мұғалім ПИН-кодымен ашылады.",
                    steps: [
                        { title: "Сайтты ашыңыз", text: "Сайт мекенжайымен өтіңіз немесе алғашқы экрандағы QR кодты сканерлеңіз. Алғашқы жүктеу үшін интернет қажет." },
                        { title: "Тілді таңдаңыз", text: "Профиль терезесінде RU, ҚАЗ немесе EN батырмасын басыңыз. Бұл таңдау басты мәзірде де бар; нұсқаулық сайт тілінде ашылады." },
                        { title: "«Мұғалім» рөлін таңдаңыз", text: "«Мұғалім» рөлін белгілеп, атыңызды енгізіңіз және кемінде 4 таңбадан тұратын ПИН-код ойлап табыңыз. «Мұғалім ретінде кіру» батырмасын басыңыз." },
                        { title: "Ойын сыныбын таңдаңыз", text: "Басты бетте 7, 8 немесе 9 сыныпқа арналған бөлімдегі «Ойынды бастау» батырмасын басыңыз. Ойын ішінде сыныпты ортақ профильді жоғалтпай ауыстыруға болады." },
                        { title: "Кабинетті ашыңыз", text: "Басты мәзірден «Мұғалім режимі» батырмасын басыңыз. Алдымен 7–9 сыныптардың біріктірілген панелі — «Сынып» қойындысы ашылады." },
                        { title: "Оқушы профилін жеке баптаңыз", text: "Әр оқушының құрылғысында «Оқушы» рөлін таңдап, атын енгізіңіз және ұсынылған төрт таңбалы кодты сақтаңыз. Оқушылардың ортақ экранында мұғалім ПИН-кодын қолданбаңыз." }
                    ],
                    note: "ПИН-код тек осы браузерде мұғалімнің кіруі үшін қажет. Бұл серверлік аккаунт емес: басқа браузерді немесе құрылғыны жеке баптау керек."
                },
                {
                    id: "class", icon: "👥", title: "Сынып және оқушылар тізімін құру",
                    lead: "Кодтары дұрыс тізім — дәл журналдың негізі. Тағайындау жасамас бұрын оқушылардың кодтарын жинаңыз.",
                    steps: [
                        { title: "Қысқа кодтарды жинаңыз", text: "Әр оқушыдан «Профиль» бөлімін ашып, код өрісіндегі төрт таңбаны көшіріп беруді сұраңыз. Бұл код құпиясөз емес, оны мұғалімге беруге болады." },
                        { title: "Сынып құру терезесін ашыңыз", text: "Кабинетте «Тағайындаулар» → «+ Сынып» жолын таңдаңыз. Бұл батырма жоғарыда да, тағайындаулар тізімінің астында да бар." },
                        { title: "Сыныпқа ат беріңіз", text: "«7А», «8Б» немесе «9А» сияқты түсінікті ат енгізіңіз. Аттағы сынып саны шеберге қажетті параллельдің сабақтарын бірден ұсынуға көмектеседі." },
                        { title: "Оқушыларды қосыңыз", text: "Әр жолға бір оқушыны «Аты | коды» пішімінде жазыңыз. Артық тік сызықша қоймаңыз және әр кодты оқушы профилімен салыстырыңыз." },
                        { title: "Сақтап, қайталаңыз", text: "«Сыныпты сақтау» батырмасын басыңыз. Басқа параллель үшін «+ Сынып» батырмасын қайта басып, жеке тізім құрыңыз." },
                        { title: "Құрамды тексеріңіз", text: "«Тағайындаулар» қойындысындағы «Сыныптар» блогын ашыңыз. Аты, құрамы немесе коды өзгерсе, тізімді өңдеңіз; жою әрекеті растауды қажет етеді." }
                    ],
                    example: "Әйдана Серікова | K7M2\nДанияр Нұрланов | LBA6",
                    note: "Код енгізілмесе, сайт тізімге қызметтік код жасайды, бірақ ол оқушы профиліне сәйкес келмеуі мүмкін. Әсіресе аты бірдей оқушыларда нақты кодты міндетті түрде жазыңыз."
                },
                {
                    id: "assignment", icon: "📌", title: "Дайын сабақты тағайындау",
                    lead: "Толық шебер бір оқушыға да, бірнеше сыныпқа да жарайды. Сынып дайын болып, тек QR код немесе сілтеме қажет болса, жылдам нұсқаны таңдаңыз.",
                    steps: [
                        { title: "Шеберді іске қосыңыз", text: "«Тағайындаулар» → «+ Толық тағайындау» жолын ашыңыз. Қысқа жол үшін «Жылдам: QR / сілтеме» батырмасын басып, сыныпты, сабақты және мерзімді таңдап, тағайындау жасаңыз." },
                        { title: "«Кімге» қадамы: алушыларды таңдаңыз", text: "«Бүкіл сыныпқа» режимін таңдап, бір немесе бірнеше сыныпты белгілеңіз. Жеке жұмыс үшін «Бір оқушыға» режимін таңдап, оқушының аты мен нақты кодын енгізіңіз." },
                        { title: "«Не» қадамы: сабақты табыңыз", text: "Тізімді 7–9 сынып бойынша сүзгілеңіз немесе іздеуге тақырыптың атын жаза бастаңыз. Қажетті сабақты басып, келесі қадамға өтіңіз." },
                        { title: "«Қашан» қадамы: шарттарды белгілеңіз", text: "«Тапсыру мерзімі» өрісінен күнді таңдаңыз немесе «Ертең», «Бір аптадан кейін» дайын нұсқаларын пайдаланыңыз. Не әкелу немесе не қайталау керегін қысқа түсініктемеге жазыңыз." },
                        { title: "Әрекеттер мен кеңестерді баптаңыз", text: "Әр тапсырмаға берілетін кеңестер мен әрекеттер санын таңдаңыз. Қосымша көрсеткіштерді талдауды шынымен жоспарласаңыз ғана қатысу метрикаларын қосыңыз." },
                        { title: "«Тексеру» қадамы: растаңыз", text: "Алушыларды, тақырыпты, мерзімді және шектеулерді салыстырыңыз. Барлығы дұрыс болса, «Жасау» батырмасын басыңыз; сайт жаңа топтың ортақ кодын көрсетеді." },
                        { title: "Жұмысты оқушыларға жіберіңіз", text: "«QR код» батырмасын басып, оны проекторда көрсетіңіз немесе плакатты басып шығарыңыз. Сондай-ақ сілтемені көшіріп немесе қысқа кодты сынып чатына жіберуге болады." }
                    ],
                    note: "Бір код жасалған топтағы оқушыларды біріктіреді. Нәтижелер оқушылармен салыстырылғаннан кейін «Бастамады», «Орындалуда», «Тапсырды» және «Мерзімі өтті» мәртебелері пайда болады."
                },
                {
                    id: "custom", icon: "📝", title: "Өз сабағыңыз және жеке тапсырмалар",
                    lead: "Дайын сұрақтар жеткіліксіз болса, осы бөлімді пайдаланыңыз. Сұрақ құру мен сабақты тағайындау — екі бөлек әрекет.",
                    steps: [
                        { title: "Сабақтың атын жасаңыз", text: "«Менің сабақтарым» бөлімін ашып, RU, EN және KK аттарын толтырып, «+ Сабақ қосу» батырмасын басыңыз. Бос EN/KK өрістерінің орнына орысша ат пайдаланылады." },
                        { title: "Тапсырма құрастырушысын ашыңыз", text: "«Тапсырма жасау» бөліміне өтіңіз. Бір немесе бірнеше жауап, сәйкестендіру, қысқа немесе сандық жауап, дұрыс/бұрыс, бос орынды толтыру түрін таңдаңыз." },
                        { title: "Тақырып пен қиындықты таңдаңыз", text: "«Сабақ» өрісінде дайын параграфты немесе өз сабағыңызды таңдаңыз. Жеке тапсырмалар тізімінде көрінетін қиындық деңгейін белгілеңіз." },
                        { title: "Сұрақты үш тілде жазыңыз", text: "Орысша мәтінді міндетті түрде енгізіп, толық тіл ауыстыру үшін ағылшын және қазақша нұсқаларын қосыңыз. Қажет болса, формуланы жазыңыз." },
                        { title: "Жауаптарды енгізіп, белгілеңіз", text: "Тестте RU/EN/KK нұсқаларын толтырып, дұрыс жауаптарды белгілеңіз. Сан үшін дәлдік шегін, ал сәйкестендіруде формада көрсетілген жолдар мен жұптар пішімін пайдаланыңыз." },
                        { title: "Оқытатын кері байланыс қосыңыз", text: "Кеңес және жауаптан кейін көрінетін түсініктеме жазыңыз. «Сақтау» батырмасын басып, «Менің тапсырмаларым» бөліміндегі карточканы тексеріңіз." },
                        { title: "Өз сабағыңызды тағайындаңыз", text: "«Тағайындаулар» бөліміне оралып, шеберді ашып, тақырыптар тізімінен өз сабағыңызды табыңыз. Сыныпқа бермес бұрын осы құрылғыда оқушы ретінде өтіп көріңіз." }
                    ],
                    note: "Жеке сабақтар мен сұрақтар мұғалім құрылғысында сақталады. Сілтеме жеке мазмұнды басқа құрылғыға көшірмейді; оқушылардың әртүрлі құрылғыларында жұмыс істеу үшін кірістірілген сабақтарды таңдаңыз."
                },
                {
                    id: "student", icon: "🎒", title: "Оқушы не істеуі керек",
                    lead: "Бұл бөлімді сыныпқа көрсетуге немесе жеке басып шығаруға болады. Онда сілтемені алудан нәтижені тапсыруға дейінгі толық жол түсіндіріледі.",
                    steps: [
                        { title: "Тағайындауды ашу", text: "Оқушы QR кодты сканерлейді немесе сілтемені ашады. Тек код болса, «Ойынды бастау» → «Тағайындалған сабақтар» жолын таңдап, кодты тағайындау өрісіне енгізеді." },
                        { title: "Аты мен кодын тексеру", text: "Жұмысты бастамас бұрын оқушы «Профиль» бөлімін ашып, аты мен төрт таңбалы кодын тексереді. Нәтижені сынып тізімімен осы деректер байланыстырады." },
                        { title: "Теорияны қайталау", text: "Миссиядан бұрын теорияны, формулаларды және есеп талдауын ашуға болады. Толық конспект пен PDF профильде таңдалған тілде қолжетімді." },
                        { title: "Миссияны орындау", text: "Оқушы «Бастау» батырмасын басып, тапсырмаларды орындайды және рұқсат етілген кеңестерді пайдаланады. Әрекеттер мен кеңестер санын мұғалімнің тағайындауы анықтайды." },
                        { title: "Барлық сұрақты аяқтау", text: "Соңғы жауаптан кейін бетті дереу жаппаңыз: қорытынды экранын күтіңіз. Онда ұпай, дәлдік және миссия нәтижесі көрсетіледі." },
                        { title: "Нәтиже кодын жіберу", text: "Қорытынды экранда оқушы «Мұғалімге арналған нәтиже кодын» көшіріп, сізге жібереді. Әр код бір әрекетке сәйкес келеді." },
                        { title: "Немесе есеп файлын жіберу", text: "Тарихты беру үшін «Мұғалімге есеп» батырмасын басып, JSON файлын сақтап, өзгертпей жіберіңіз. Бірнеше жұмысты бірден бергенде бұл ыңғайлы." }
                    ],
                    note: "Интернетсіз құрылғылар арасында автоматты жіберу жоқ. Оқушы кодты немесе файлды беруі, ал мұғалім оларды кабинетке қосуы керек."
                },
                {
                    id: "results", icon: "📊", title: "Нәтижелерді жинау және журналмен жұмыс",
                    lead: "«Сынып» қойындысы 7–9 сыныптардың тағайындаулары мен нәтижелерін біріктіреді. Осы құрылғының тарихы автоматты қосылады, басқа құрылғылардан импорт қажет.",
                    steps: [
                        { title: "Сынып пен кезеңді таңдаңыз", text: "«Сынып» бөлімін ашыңыз. Қажетті сыныпты және «7 күн», «30 күн» немесе «Барлық уақыт» кезеңін басыңыз — көрсеткіштер мен тізімдер жаңарады." },
                        { title: "Нәтиже қосу блогын ашыңыз", text: "«Оқушылардың нәтижелерін қосу» блогын ашыңыз. Осы құрылғының тарихын алу үшін «Осы құрылғыдан» батырмасын басыңыз." },
                        { title: "Кодтарды немесе файлды импорттаңыз", text: "Әр жолға бір нәтиже кодынан қойып, «Кодтарды қосу» батырмасын басыңыз немесе «Есеп файлы» арқылы JSON таңдаңыз. Қайталанған жазбалар өткізіліп жіберіледі." },
                        { title: "Жалпы көрсеткіштерді оқыңыз", text: "Оқушылар, тағайындаулар және тапсырғандар санын, орташа дәлдікті және жеті күндік белсенділікті тексеріңіз. Пайызбен қатар он балдық баға да көрсетіледі." },
                        { title: "«Назар аудару керек» блогын талдаңыз", text: "Мерзімі өткен тағайындауларды, тақырыптағы төмен дәлдікті немесе белсенді емес оқушылар тізімін ашыңыз. «Еске салу» батырмасы сынып чатына арналған мәтінді дайындайды." },
                        { title: "Оқушы карточкасын ашыңыз", text: "Оқушы жолын басыңыз. Карточкада динамика, әлсіз тақырыптар, тағайындаулар және барлық әрекеттер бар; түсініктемені сақтаңыз немесе дайын пікірді көшіріңіз." },
                        { title: "Келесі қадамды тағайындаңыз", text: "Оқушы карточкасынан немесе әлсіз тақырыптар тізімінен қайта әрекетті тағайындаңыз. Жаңа нәтижені импорттап, дәлдікті салыстырыңыз." }
                    ],
                    note: "Нәтиже басқа оқушыға байланысса, алдымен сынып тізіміндегі профиль кодын тексеріңіз. Тек ат бойынша сәйкестендіру, әсіресе аттары бірдей болса, сенімді емес."
                },
                {
                    id: "practice", icon: "🧪", title: "Теория, шағын ойындар және практикалық жұмыстар",
                    lead: "Сайт тек тағайындауға емес, конспекттер, симуляторлар және командалық режимдер сабақтағы түсіндіру мен белсенді практикаға да арналған.",
                    steps: [
                        { title: "Түсіндіруді дайындаңыз", text: "Сыныпқа сай сабақты таңдап, миссиядан бұрын теорияны ашыңыз және формулалар мен қадамдық талдауды пайдаланыңыз. Толық конспект профильде орналасқан." },
                        { title: "Практикалық миссияны ашыңыз", text: "Сынып тақырыбына сай зертханалық деңгейді таңдаңыз. Мақсатты айтып, параметрлерді өзгертпес бұрын оқушылардан нәтижені болжауды сұраңыз." },
                        { title: "Зерттеу жүргізіңіз", text: "Оқушы бөлшектерді өзі жылжытады, тізбекті құрастырады, шарттарды өзгертеді және көрсеткіштерді жазады. Кемінде екі тәжірибені салыстырып, бақылау бойынша қорытынды жасаңыз." },
                        { title: "Толық экранды пайдаланыңыз", text: "Проектор үшін симулятордағы толық экран батырмасын басыңыз. Тышқан және сенсорлық басқару сақталады; шығу үшін батырманы қайта басыңыз немесе Escape пернесін пайдаланыңыз." },
                        { title: "Үй тәжірибесін беріңіз", text: "Практикалық миссиядағы үй тәжірибесінің нұсқаулығын ашыңыз. Тек көрсетілген қауіпсіз материалдарды пайдаланып, су, серпімді резеңке және шарды ұшыру шектеулерін сақтаңыз." },
                        { title: "Командалық қайталау өткізіңіз", text: "«Командалық шайқас» бөлімін ашып, командаларды құрыңыз және ортақ сұрақты экранда көрсетіңіз. Кезеңдерден кейін ұпаймен қатар қатесі ең көп тапсырмаларды талдаңыз." },
                        { title: "Жетістікті сақтаңыз", text: "Қорытынды портфолио үшін оқушы профиліндегі «Пилот паспортын» ашып, атын тексеріңіз және ашылған сертификаттың PNG нұсқасын жүктеп немесе PDF форматында басып шығарыңыз." }
                    ],
                    note: "Үй тәжірибесінде қауіпсіздік ережелері сақталуы керек: розетканы, ашық отты, қайнаған суды және ауыр жүктерді пайдаланбаңыз. Материал зақымдалса, тәжірибені тоқтатыңыз."
                },
                {
                    id: "reports", icon: "📥", title: "Есептер, басып шығару және деректерді көшіру",
                    lead: "Әр форматтың мақсаты бөлек: CSV — кестеге, A4 — басып шығаруға, JSON — тағайындаулар мен нәтижелерді көшіруге арналған.",
                    steps: [
                        { title: "«Есептер» блогын ашыңыз", text: "«Сынып» қойындысында қажетті сынып пен кезеңді таңдап, «Есептер» блогына дейін түсіңіз. Экспортта таңдалған сүзгі ескеріледі." },
                        { title: "CSV форматында жүктеңіз", text: "«CSV: нәтижелер», «CSV: тақырыптар» немесе «CSV: белсенділік» батырмасын таңдаңыз. Жүктелген файлды Excel-де немесе басқа кестеде ашып, қажетті бағандарды тексеріңіз." },
                        { title: "A4 жиынтығын дайындаңыз", text: "«A4 жиынтығы» батырмасын басып, сыныпты, кезеңді, дәлдікті және назар аудару қажет оқушыларды тексеріңіз. Содан кейін басып шығарыңыз немесе PDF ретінде сақтаңыз." },
                        { title: "Сыныптар мен тағайындауларды көшіріңіз", text: "«Тағайындаулар» → «Экспорт / импорт» бөлімін ашып, экспортқа арналған «JSON жүктеу» батырмасын басыңыз. Басқа құрылғыда сол бөлімдегі импортқа арналған «JSON жүктеу» батырмасын таңдап, алынған файлды жүктеңіз." },
                        { title: "Сақтық көшірме жасаңыз", text: "Тағайындау экспорттары мен қажетті есептерді мектептің қорғалған қоймасына үнемі сақтап отырыңыз. Жеке деректері бар файлдарды ашық чаттарға жібермеңіз." },
                        { title: "Импорттан кейін деректерді тексеріңіз", text: "Сынып тізімдерін, сабақ аттарын және тағайындауларды салыстырыңыз. Импорт баптауды тексеруді алмастырмайды: қажет болса, жаңа құрылғыда мерзім мен шарттарды өңдеңіз." }
                    ],
                    note: "Сақтық көшірмесіз браузер деректерін тазаламаңыз. Қойманы тазалау немесе басқа браузерге өту жергілікті сыныптар мен журнал жазбаларын көрсетпеуі мүмкін."
                },
                {
                    id: "languages", icon: "🌐", title: "Үш тіл және интернетсіз жұмыс",
                    lead: "Интерфейс пен кірістірілген материалдар орыс, қазақ және ағылшын тілдеріне ауысады. Бұл нұсқаулықтың жеке тіл ауыстыру батырмалары бар және ол таңдалған тілде басылады.",
                    steps: [
                        { title: "Сайт тілін ауыстырыңыз", text: "Профильде немесе басты мәзірде RU, ҚАЗ не EN батырмасын басыңыз. Ауыстырғаннан кейін кабинет тақырыптары мен ағымдағы сабақты тексеріңіз." },
                        { title: "Нұсқаулық тілін ауыстырыңыз", text: "Осы беттің жоғарғы жағындағы тіл батырмаларын пайдаланыңыз. Бетті жаппай-ақ мазмұн мен барлық қадам жаңарады, ал мекенжайда таңдалған lang параметрі сақталады." },
                        { title: "Жеке материалдарды тексеріңіз", text: "Әр жеке сұрақта RU, EN және KK өрістерін толтырыңыз. Аударма бос болса, сайт автоматты аудармай, қосалқы нұсқа ретінде орысша мәтінді көрсетеді." },
                        { title: "Офлайн жұмысты алдын ала дайындаңыз", text: "Интернет қосулы кезде сайт пен қажетті сыныптарды ашып, толық жүктелуін күтіңіз. Service worker кейін желісіз ашу үшін қосымша қабығы мен материалдарды сақтайды." },
                        { title: "Сабақтан бұрын офлайн режимді тексеріңіз", text: "Сынақ құрылғысында желіні өшіріп, қажетті бетті қайта ашыңыз. Тек басты экранды емес, нақты сабақ пен симуляторды тексеріңіз." },
                        { title: "Желісіз алмасуды жоспарлаңыз", text: "QR код пен қысқа кодты экранда көрсетуге болады, бірақ әртүрлі құрылғылар арасындағы нәтижелерді кейін код немесе сақталған JSON файлы арқылы беріңіз." }
                    ],
                    note: "Офлайн кэш белгілі бір браузер мен құрылғыға тиесілі. Жаңа құрылғыда алдымен интернет қосулы кезде бір толық жүктеу қажет."
                },
                {
                    id: "troubleshooting", icon: "🛠", title: "Бір нәрсе шықпай қалса",
                    lead: "Әр тармақты жеке тексеріңіз: көбінесе себебі — басқа профиль, импортталмаған нәтиже немесе тазаланған жергілікті қойма.",
                    steps: [
                        { title: "Тағайындау ашылмайды", text: "Кодта артық бос орын жоғын және таңдалған параллельді тексеріңіз. QR код бұзылса, көшірілген сілтемені ашыңыз немесе «Тағайындалған сабақтар» қойындысына қысқа кодты енгізіңіз." },
                        { title: "Оқушы жеке сабақты таппайды", text: "Жеке сабақ тек жасалған құрылғыда болады. Әртүрлі құрылғылар үшін кірістірілген сабақты таңдаңыз немесе жеке жұмысты мұғалім құрылғысында өткізіңіз." },
                        { title: "Нәтиже пайда болмайды", text: "Оқушы қорытынды экранға жеткенін және дәл осы әрекеттің кодын жібергенін тексеріңіз. Содан кейін «Сынып» қойындысында импортты қайталап, қосылған жазбалар туралы хабарды оқыңыз." },
                        { title: "Нәтиже басқа оқушыға байланысты", text: "Оқушы профиліндегі төрт таңбалы кодты сынып тізімімен салыстырыңыз. Тізімді түзетіп, барлық оқушы үшін нақты кодтарды пайдаланыңыз." },
                        { title: "Мәтін орысша күйінде қалады", text: "Кірістірілген интерфейс үшін тілді қайта таңдаңыз. Жеке сұрақта өңдеуді ашып, ағылшын және қазақша өрістерін қолмен толтырыңыз." },
                        { title: "Сыныптар немесе журнал жоғалды", text: "Браузер мен құрылғының сол екенін тексеріңіз. Қойманы тазаламаңыз; алдын ала сақталған экспорт болса, көшірілетін деректерді одан қалпына келтіріңіз." },
                        { title: "Бет ескі нұсқада көрінеді", text: "Интернет қосулы кезде бетті жаңартып, жаңа нұсқаның орнатылуын күтіңіз. Жаңа батырма шықпаса, ескі бетті жауып, сайтты қайта ашыңыз." }
                    ],
                    note: "Алғашқы әрекет ретінде прогресс пен ПИН-кодды қалпына келтірмеңіз: бұл нәтижелерді қайтармайды. Алдымен қолда бар есептерді сақтап, кодтарды, қойындыларды және импортты тексеріңіз."
                }
            ]
        }
    };

    const LANGUAGE_NAMES = { ru: "Русский", kk: "Қазақша", en: "English" };
    let currentLang = "ru";

    function esc(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[ch]));
    }

    function readInitialLanguage() {
        const query = new URLSearchParams(window.location.search).get("lang");
        if (Object.hasOwn(LANGUAGE_NAMES, query)) return query;
        try {
            const settings = JSON.parse(localStorage.getItem("physicsquest_global_settings") || "null");
            if (settings && Object.hasOwn(LANGUAGE_NAMES, settings.language)) return settings.language;
            const saved = localStorage.getItem("pq-teacher-guide-language");
            if (Object.hasOwn(LANGUAGE_NAMES, saved)) return saved;
        } catch (_) {}
        return "ru";
    }

    function validateTranslations() {
        const base = TEACHER_GUIDE_LOCALES.ru;
        const required = ["pageTitle", "brand", "skip", "languageLabel", "print", "heroEyebrow", "heroTitle", "heroDescription", "quickTitle", "quickHint", "contents", "sidebarNote", "sectionLabel", "noteLabel", "exampleLabel", "cabinet", "top", "footer"];
        Object.entries(TEACHER_GUIDE_LOCALES).forEach(([lang, data]) => {
            required.forEach(key => {
                if (typeof data[key] !== "string" || !data[key].trim()) throw new Error(`Guide translation missing: ${lang}.${key}`);
            });
            if (!Array.isArray(data.heroChips) || data.heroChips.length !== 3) throw new Error(`Guide chips incomplete: ${lang}`);
            if (data.quickSteps.length !== base.quickSteps.length || data.sections.length !== base.sections.length) throw new Error(`Guide structure incomplete: ${lang}`);
            data.sections.forEach((section, index) => {
                const reference = base.sections[index];
                if (section.id !== reference.id || section.steps.length !== reference.steps.length) throw new Error(`Guide section mismatch: ${lang}.${section.id}`);
                ["title", "lead"].forEach(key => {
                    if (!String(section[key] || "").trim()) throw new Error(`Guide section text missing: ${lang}.${section.id}.${key}`);
                });
                section.steps.forEach((step, stepIndex) => {
                    if (!String(step.title || "").trim() || !String(step.text || "").trim()) throw new Error(`Guide step missing: ${lang}.${section.id}.${stepIndex}`);
                });
            });
        });
    }

    function sectionHtml(section, index, data) {
        const steps = section.steps.map(step => `
            <li class="tg-step">
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.text)}</p>
            </li>`).join("");
        return `
            <section class="tg-section" id="${esc(section.id)}" aria-labelledby="${esc(section.id)}-title">
                <div class="tg-section-head">
                    <span class="tg-section-icon" aria-hidden="true">${section.icon}</span>
                    <div class="tg-section-heading">
                        <p class="tg-section-kicker">${esc(data.sectionLabel)} ${index + 1}</p>
                        <h2 id="${esc(section.id)}-title">${esc(section.title)}</h2>
                        <p class="tg-section-lead">${esc(section.lead)}</p>
                    </div>
                </div>
                <ol class="tg-steps">${steps}</ol>
                ${section.example ? `<div class="tg-example"><strong>${esc(data.exampleLabel)}:</strong>\n${esc(section.example)}</div>` : ""}
                ${section.note ? `<p class="tg-note"><strong>${esc(data.noteLabel)}:</strong> ${esc(section.note)}</p>` : ""}
            </section>`;
    }

    function render() {
        const data = TEACHER_GUIDE_LOCALES[currentLang];
        document.documentElement.lang = currentLang;
        document.documentElement.dataset.lang = currentLang;
        document.title = data.pageTitle;
        const description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute("content", data.heroDescription);

        const languages = Object.keys(LANGUAGE_NAMES).map(lang => `
            <button type="button" class="tg-language" data-guide-lang="${lang}"
                aria-pressed="${lang === currentLang}" aria-label="${esc(LANGUAGE_NAMES[lang])}">${LANGUAGE_NAMES[lang]}</button>`).join("");
        const quick = data.quickSteps.map((item, index) => `
            <a class="tg-quick-item" href="#${esc(item.section)}">
                <span class="tg-quick-number">${index + 1}</span><span>${esc(item.text)}</span>
            </a>`).join("");
        const toc = data.sections.map((section, index) => `
            <li><a href="#${esc(section.id)}"><span class="tg-toc-index">${String(index + 1).padStart(2, "0")}</span><span>${esc(section.title)}</span></a></li>`).join("");

        document.getElementById("teacher-guide-app").innerHTML = `
            <a class="tg-skip" href="#guide-content">${esc(data.skip)}</a>
            <header class="tg-header">
                <div class="tg-header-inner">
                    <a class="tg-brand" href="./index.html" aria-label="${esc(data.brand)}">
                        <span class="tg-brand-mark" aria-hidden="true">⚛</span><span>${esc(data.brand)}</span>
                    </a>
                    <div class="tg-header-actions">
                        <div class="tg-languages" role="group" aria-label="${esc(data.languageLabel)}">${languages}</div>
                        <button type="button" class="tg-print" id="guide-print" aria-label="${esc(data.print)}">
                            <span aria-hidden="true">🖨</span><span class="tg-print-label">${esc(data.print)}</span>
                        </button>
                    </div>
                </div>
            </header>
            <main class="tg-container" id="guide-content">
                <section class="tg-hero" aria-labelledby="guide-title">
                    <p class="tg-eyebrow">${esc(data.heroEyebrow)}</p>
                    <h1 id="guide-title">${esc(data.heroTitle)}</h1>
                    <p class="tg-hero-description">${esc(data.heroDescription)}</p>
                    <div class="tg-hero-meta">${data.heroChips.map(chip => `<span class="tg-meta-chip">${esc(chip)}</span>`).join("")}</div>
                </section>
                <section class="tg-quick" aria-labelledby="quick-title">
                    <h2 id="quick-title">${esc(data.quickTitle)}</h2>
                    <p>${esc(data.quickHint)}</p>
                    <div class="tg-quick-grid">${quick}</div>
                </section>
                <div class="tg-layout">
                    <aside class="tg-sidebar">
                        <nav class="tg-toc" aria-label="${esc(data.contents)}">
                            <h2>${esc(data.contents)}</h2>
                            <ol>${toc}</ol>
                        </nav>
                        <p class="tg-sidebar-note">${esc(data.sidebarNote)}</p>
                    </aside>
                    <div class="tg-sections">${data.sections.map((section, index) => sectionHtml(section, index, data)).join("")}</div>
                </div>
                <footer class="tg-footer">
                    <p>${esc(data.footer)}</p>
                    <div class="tg-footer-actions">
                        <a class="tg-cabinet-link" href="./play.html#teacher">👩‍🏫 ${esc(data.cabinet)}</a>
                        <a class="tg-top-link" href="#guide-content">${esc(data.top)}</a>
                    </div>
                </footer>
            </main>`;
    }

    function setLanguage(lang) {
        if (!Object.hasOwn(LANGUAGE_NAMES, lang)) return;
        currentLang = lang;
        try { localStorage.setItem("pq-teacher-guide-language", lang); } catch (_) {}
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState(null, "", url);
        const y = window.scrollY;
        render();
        window.scrollTo(0, y);
    }

    validateTranslations();
    currentLang = readInitialLanguage();
    render();

    document.addEventListener("click", event => {
        const language = event.target.closest("[data-guide-lang]");
        if (language) {
            setLanguage(language.dataset.guideLang);
            return;
        }
        if (event.target.closest("#guide-print")) window.print();
    });

    window.PQTeacherGuide = {
        getLanguage: () => currentLang,
        setLanguage,
        locales: TEACHER_GUIDE_LOCALES
    };
})();
