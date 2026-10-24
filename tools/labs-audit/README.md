# Аудит лабораторий 8–9 классов

Два скрипта, которыми проверялись мини-игры трилогии (см. отчёт `docs/playthrough/lesson36-labs-audit.md`).

## 1. `audit-formulas.js` — без браузера

Перебирает регуляторы всех 18 canvas-симуляторов (`shared/simulators-89.js`) и полную сетку шагов всех лабораторных мини-игр (`window.GRADE_LAB_GAMES_CONFIG` в `8/content.js` и `9/extras.js`).

```bash
node tools/labs-audit/audit-formulas.js
```

Проверяет: цель достижима, стартовое положение регуляторов не даёт цель, телеметрия содержит искомое число, подписи RU/KK/EN заполнены.

## 2. `check-dom.js` — живая страница в headless-DOM

Поднимает `play.html?grade=N` в jsdom, запускает уровни настоящим `RPG.startMission(...)`, открывает лабораторные мини-игры, решает их перебором сетки слайдеров и читает HUD всех пяти миссий.

```bash
python3 -m http.server 8000        # из корня репозитория, в отдельном терминале
npm i jsdom                        # один раз
node tools/labs-audit/check-dom.js --grade 8
node tools/labs-audit/check-dom.js --grade 9
```

Флаги: `--base http://127.0.0.1:8000` (адрес сервера), `--grade 8,9` (какие классы).

Скрипт не снимает скриншоты — в окружении без libnss3 нет Chromium. Для снимков экрана нужен браузер с поддержкой CDP (см. `docs/playthrough/README.md`).
