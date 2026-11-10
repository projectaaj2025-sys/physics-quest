// Загрузка всех банков заданий классов 7–9 в JSON для аудита.
// Использование: node load-tasks.js > /tmp/tasks-inventory.json
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..', '..');
const out = {};

for (const grade of [7, 8, 9]) {
  const sandbox = { window: {} };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  for (const rel of [`${grade}/tasks.js`]) {
    const code = fs.readFileSync(path.join(root, rel), 'utf8');
    vm.runInContext(code, sandbox, { filename: rel });
  }
  // tasks.js определяет const внутри скрипта — они не попадают в sandbox напрямую,
  // поэтому дописываем сборщик прямо в контекст.
  const collector = `
    ({
      TASKS_DATABASE: typeof TASKS_DATABASE !== 'undefined' ? TASKS_DATABASE : null,
      TASKS_DATABASE_EXT: typeof TASKS_DATABASE_EXT !== 'undefined' ? TASKS_DATABASE_EXT : null,
      TASKS_DATABASE_CH: typeof TASKS_DATABASE_CH !== 'undefined' ? TASKS_DATABASE_CH : null,
      TASKS_DATABASE_EXT2: typeof TASKS_DATABASE_EXT2 !== 'undefined' ? TASKS_DATABASE_EXT2 : null,
      TASKS_DATABASE_PRACTICAL: typeof TASKS_DATABASE_PRACTICAL !== 'undefined' ? TASKS_DATABASE_PRACTICAL : null,
    })
  `;
  const gathered = vm.runInContext(collector, sandbox);
  out[grade] = gathered;
}
process.stdout.write(JSON.stringify(out, null, 0));
