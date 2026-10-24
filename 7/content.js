/* ===== Контент 7 класса: уровни, теория, конспект, эксперименты, сюжет ===== */
window.CURRENT_GRADE = 7;
window.GRADE_META = {
  grade: 7,
  code: "7",
  titleLine2: {
    ru: "ЭНЕРГЕТИЧЕСКИЙ ЩИТ · 7 КЛАСС",
    kk: "ЭНЕРГЕТИКАЛЫҚ ҚАЛҚАН · 7-СЫНЫП",
    en: "ENERGY SHIELD · GRADE 7"
  },
  subtitle: {
    ru: "Защити город Астерию от астероидов знаниями физики 7 класса",
    kk: "7-сынып физика білімімен Астерия қаласын астероидтардан қорға",
    en: "Defend Asteria from asteroids with 7th-grade physics knowledge"
  },
  pdfFiles: {
    ru: { url: "assets/pdf/grade7-ru.pdf", filename: "Конспект-физика-7-класс-RU.pdf" },
    kk: { url: "assets/pdf/grade7-kk.pdf", filename: "Физика-7-сынып-конспект-KZ.pdf" },
    en: { url: "assets/pdf/grade7-en.pdf", filename: "Physics-Grade-7-Notes-EN.pdf" }
  }
};

const LEVELS_CONFIG = [
  {
    "id": 1,
    "topics": [
      "safety"
    ],
    "asteroidInterval": 6000,
    "asteroidSpeed": 0.8,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 12,
    "tasksTotal": 15,
    "energySpawnRate": 4000,
    "chapter": "bonus",
    "kind": "safety",
    "description": {
      "key": "levelSafetyDesc"
    }
  },
  {
    "id": 2,
    "topics": [
      "general"
    ],
    "asteroidInterval": 5800,
    "asteroidSpeed": 0.85,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p1",
    "kind": "lesson",
    "description": {
      "key": "level2Desc"
    }
  },
  {
    "id": 3,
    "topics": [
      "general"
    ],
    "asteroidInterval": 5700,
    "asteroidSpeed": 0.85,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p2",
    "kind": "lesson",
    "description": {
      "key": "level3Desc"
    }
  },
  {
    "id": 4,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5600,
    "asteroidSpeed": 0.9,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p3",
    "kind": "lesson",
    "description": {
      "key": "level4Desc"
    }
  },
  {
    "id": 5,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5500,
    "asteroidSpeed": 0.9,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p4",
    "kind": "lesson",
    "description": {
      "key": "level5Desc"
    }
  },
  {
    "id": 6,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5400,
    "asteroidSpeed": 0.9,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p5",
    "kind": "lesson",
    "description": {
      "key": "level6Desc"
    }
  },
  {
    "id": 7,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5300,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p6",
    "kind": "lesson",
    "description": {
      "key": "level7Desc"
    }
  },
  {
    "id": 8,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5200,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p7",
    "kind": "lesson",
    "description": {
      "key": "level8Desc"
    }
  },
  {
    "id": 9,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5100,
    "asteroidSpeed": 1.05,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p8",
    "kind": "lesson",
    "description": {
      "key": "level9Desc"
    }
  },
  {
    "id": 10,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 5000,
    "asteroidSpeed": 1.1,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p9",
    "kind": "lesson",
    "description": {
      "key": "level10Desc"
    }
  },
  {
    "id": 11,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 4900,
    "asteroidSpeed": 1.1,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p10",
    "kind": "lesson",
    "description": {
      "key": "level11Desc"
    }
  },
  {
    "id": 12,
    "topics": [
      "density"
    ],
    "asteroidInterval": 4800,
    "asteroidSpeed": 1.15,
    "cityHealth": 100,
    "shieldCapacity": 65,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p11",
    "kind": "lesson",
    "description": {
      "key": "level12Desc"
    }
  },
  {
    "id": 13,
    "topics": [
      "density"
    ],
    "asteroidInterval": 4700,
    "asteroidSpeed": 1.2,
    "cityHealth": 100,
    "shieldCapacity": 65,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p12",
    "kind": "lesson",
    "description": {
      "key": "level13Desc"
    }
  },
  {
    "id": 14,
    "topics": [
      "density"
    ],
    "asteroidInterval": 4600,
    "asteroidSpeed": 1.25,
    "cityHealth": 100,
    "shieldCapacity": 70,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 4000,
    "chapter": "p13",
    "kind": "lesson",
    "description": {
      "key": "level14Desc"
    }
  },
  {
    "id": 15,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1.3,
    "cityHealth": 100,
    "shieldCapacity": 70,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p14",
    "kind": "lesson",
    "description": {
      "key": "level15Desc"
    }
  },
  {
    "id": 16,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4400,
    "asteroidSpeed": 1.3,
    "cityHealth": 100,
    "shieldCapacity": 70,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p15",
    "kind": "lesson",
    "description": {
      "key": "level16Desc"
    }
  },
  {
    "id": 17,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4300,
    "asteroidSpeed": 1.35,
    "cityHealth": 100,
    "shieldCapacity": 75,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p16",
    "kind": "lesson",
    "description": {
      "key": "level17Desc"
    }
  },
  {
    "id": 18,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4200,
    "asteroidSpeed": 1.35,
    "cityHealth": 100,
    "shieldCapacity": 75,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p17",
    "kind": "lesson",
    "description": {
      "key": "level18Desc"
    }
  },
  {
    "id": 19,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4100,
    "asteroidSpeed": 1.4,
    "cityHealth": 105,
    "shieldCapacity": 80,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p18",
    "kind": "lesson",
    "description": {
      "key": "level19Desc"
    }
  },
  {
    "id": 20,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4000,
    "asteroidSpeed": 1.4,
    "cityHealth": 105,
    "shieldCapacity": 80,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p19",
    "kind": "lesson",
    "description": {
      "key": "level20Desc"
    }
  },
  {
    "id": 21,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 3900,
    "asteroidSpeed": 1.45,
    "cityHealth": 105,
    "shieldCapacity": 80,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p20",
    "kind": "lesson",
    "description": {
      "key": "level21Desc"
    }
  },
  {
    "id": 22,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3800,
    "asteroidSpeed": 1.5,
    "cityHealth": 110,
    "shieldCapacity": 85,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p21",
    "kind": "lesson",
    "description": {
      "key": "level22Desc"
    }
  },
  {
    "id": 23,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3700,
    "asteroidSpeed": 1.5,
    "cityHealth": 110,
    "shieldCapacity": 85,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3500,
    "chapter": "p22",
    "kind": "lesson",
    "description": {
      "key": "level23Desc"
    }
  },
  {
    "id": 24,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3600,
    "asteroidSpeed": 1.55,
    "cityHealth": 110,
    "shieldCapacity": 90,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p23",
    "kind": "lesson",
    "description": {
      "key": "level24Desc"
    }
  },
  {
    "id": 25,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3500,
    "asteroidSpeed": 1.55,
    "cityHealth": 115,
    "shieldCapacity": 90,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p24",
    "kind": "lesson",
    "description": {
      "key": "level25Desc"
    }
  },
  {
    "id": 26,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3400,
    "asteroidSpeed": 1.6,
    "cityHealth": 115,
    "shieldCapacity": 95,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p25",
    "kind": "lesson",
    "description": {
      "key": "level26Desc"
    }
  },
  {
    "id": 27,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3300,
    "asteroidSpeed": 1.65,
    "cityHealth": 115,
    "shieldCapacity": 95,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p26",
    "kind": "lesson",
    "description": {
      "key": "level27Desc"
    }
  },
  {
    "id": 28,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3200,
    "asteroidSpeed": 1.7,
    "cityHealth": 120,
    "shieldCapacity": 100,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p27",
    "kind": "lesson",
    "description": {
      "key": "level28Desc"
    }
  },
  {
    "id": 29,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3100,
    "asteroidSpeed": 1.75,
    "cityHealth": 120,
    "shieldCapacity": 100,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p28",
    "kind": "lesson",
    "description": {
      "key": "level29Desc"
    }
  },
  {
    "id": 30,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 3000,
    "asteroidSpeed": 1.8,
    "cityHealth": 120,
    "shieldCapacity": 105,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 3000,
    "chapter": "p29",
    "kind": "lesson",
    "description": {
      "key": "level30Desc"
    }
  },
  {
    "id": 31,
    "topics": [
      "energy"
    ],
    "asteroidInterval": 2900,
    "asteroidSpeed": 1.85,
    "cityHealth": 125,
    "shieldCapacity": 110,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p30",
    "kind": "lesson",
    "description": {
      "key": "level31Desc"
    }
  },
  {
    "id": 32,
    "topics": [
      "energy"
    ],
    "asteroidInterval": 2800,
    "asteroidSpeed": 1.9,
    "cityHealth": 125,
    "shieldCapacity": 115,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p31",
    "kind": "lesson",
    "description": {
      "key": "level32Desc"
    }
  },
  {
    "id": 33,
    "topics": [
      "energy"
    ],
    "asteroidInterval": 2700,
    "asteroidSpeed": 1.95,
    "cityHealth": 130,
    "shieldCapacity": 120,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p32",
    "kind": "lesson",
    "description": {
      "key": "level33Desc"
    }
  },
  {
    "id": 34,
    "topics": [
      "mechanical"
    ],
    "asteroidInterval": 2600,
    "asteroidSpeed": 2,
    "cityHealth": 130,
    "shieldCapacity": 125,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p33",
    "kind": "lesson",
    "description": {
      "key": "level34Desc"
    }
  },
  {
    "id": 35,
    "topics": [
      "mechanical"
    ],
    "asteroidInterval": 2500,
    "asteroidSpeed": 2,
    "cityHealth": 130,
    "shieldCapacity": 125,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p34",
    "kind": "lesson",
    "description": {
      "key": "level35Desc"
    }
  },
  {
    "id": 36,
    "topics": [
      "mechanical"
    ],
    "asteroidInterval": 2400,
    "asteroidSpeed": 2.05,
    "cityHealth": 135,
    "shieldCapacity": 130,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p35",
    "kind": "lesson",
    "description": {
      "key": "level36Desc"
    }
  },
  {
    "id": 37,
    "topics": [
      "mechanical"
    ],
    "asteroidInterval": 2300,
    "asteroidSpeed": 2.1,
    "cityHealth": 135,
    "shieldCapacity": 135,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p36",
    "kind": "lesson",
    "description": {
      "key": "level37Desc"
    }
  },
  {
    "id": 38,
    "topics": [
      "solar"
    ],
    "asteroidInterval": 2200,
    "asteroidSpeed": 2.15,
    "cityHealth": 140,
    "shieldCapacity": 140,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p37",
    "kind": "lesson",
    "description": {
      "key": "level38Desc"
    }
  },
  {
    "id": 39,
    "topics": [
      "solar"
    ],
    "asteroidInterval": 2100,
    "asteroidSpeed": 2.2,
    "cityHealth": 140,
    "shieldCapacity": 145,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p38",
    "kind": "lesson",
    "description": {
      "key": "level39Desc"
    }
  },
  {
    "id": 40,
    "topics": [
      "solar"
    ],
    "asteroidInterval": 2000,
    "asteroidSpeed": 2.2,
    "cityHealth": 140,
    "shieldCapacity": 150,
    "tasksToWin": 10,
    "tasksTotal": 12,
    "energySpawnRate": 2800,
    "chapter": "p39",
    "kind": "lesson",
    "description": {
      "key": "level40Desc"
    }
  },
  {
    "id": 41,
    "topics": [
      "kinematics"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab1",
    "description": {
      "key": "levelLab1Desc"
    }
  },
  {
    "id": 42,
    "topics": [
      "kinematics",
      "density"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 50,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab2",
    "description": {
      "key": "levelLab2Desc"
    }
  },
  {
    "id": 43,
    "topics": [
      "density"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab3",
    "description": {
      "key": "levelLab3Desc"
    }
  },
  {
    "id": 44,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab4",
    "description": {
      "key": "levelLab4Desc"
    }
  },
  {
    "id": 45,
    "topics": [
      "dynamics"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1.05,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab5",
    "description": {
      "key": "levelLab5Desc"
    }
  },
  {
    "id": 46,
    "topics": [
      "pressure"
    ],
    "asteroidInterval": 4000,
    "asteroidSpeed": 1.1,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab6",
    "description": {
      "key": "levelLab6Desc"
    }
  },
  {
    "id": 47,
    "topics": [
      "density",
      "pressure"
    ],
    "asteroidInterval": 4000,
    "asteroidSpeed": 1.1,
    "cityHealth": 100,
    "shieldCapacity": 60,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab7",
    "description": {
      "key": "levelLab7Desc"
    }
  },
  {
    "id": 48,
    "topics": [
      "mechanical",
      "dynamics"
    ],
    "asteroidInterval": 4500,
    "asteroidSpeed": 1,
    "cityHealth": 100,
    "shieldCapacity": 55,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab8",
    "description": {
      "key": "levelLab8Desc"
    }
  },
  {
    "id": 49,
    "topics": [
      "mechanical"
    ],
    "asteroidInterval": 4000,
    "asteroidSpeed": 1.1,
    "cityHealth": 110,
    "shieldCapacity": 60,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab9",
    "description": {
      "key": "levelLab9Desc"
    }
  },
  {
    "id": 50,
    "topics": [
      "mechanical",
      "energy"
    ],
    "asteroidInterval": 4000,
    "asteroidSpeed": 1.1,
    "cityHealth": 110,
    "shieldCapacity": 60,
    "tasksToWin": 8,
    "tasksTotal": 10,
    "energySpawnRate": 4000,
    "chapter": "lab",
    "kind": "lab10",
    "description": {
      "key": "levelLab10Desc"
    }
  }
];
const STORY_CHAPTERS = [
  {
    "id": "asteria-act1",
    "from": 1,
    "to": 6,
    "title": {
      "ru": "Акт I. Датчики купола Астерии",
      "kk": "I акт. Астерия күмбезінің датчиктері",
      "en": "Act I. Sensors of Dome Asteria"
    },
    "setting": {
      "ru": "Наблюдательная башня Астерии",
      "kk": "Астерия бақылау мұнарасы",
      "en": "Asteria Observation Spire"
    },
    "intro": {
      "ru": "Метеорный рой Нокта приближается к городу. Алия, Тимур и ИИ «Квант-0» калибруют приборы и систему СИ.",
      "kk": "Нокт метеор ағыны қалаға жақындап келеді. Әлия, Тимур және «Квант-0» ЖИ аспаптар мен ХБЖ жүйесін калибрлейді.",
      "en": "The Noct meteor stream approaches the city. Aliya, Timur, and AI KVANT-0 calibrate instruments and SI units."
    },
    "narrative": {
      "ru": "Без единой системы измерений щит не сможет вычислить координаты осколков.",
      "kk": "Бірыңғай өлшеу жүйесінсіз қалқан сынықтардың координаттарын есептей алмайды.",
      "en": "Without unified measurements, the shield cannot compute fragment coordinates."
    },
    "goal": {
      "ru": "Освоить единицы СИ, цену деления и точность измерений (§1–§5).",
      "kk": "ХБЖ бірліктерін, бөлік құнын және өлшеу дәлдігін меңгеру (§1–§5).",
      "en": "Master SI units, scale division, and measurement accuracy (§1–§5)."
    },
    "revelations": [],
    "victory": {
      "ru": "Датчики откалиброваны! Контур слежения видит каждую цель.",
      "kk": "Датчиктер калибрленді! Бақылау контуры әр нысананы көріп тұр.",
      "en": "Sensors calibrated! Tracking perimeter sees every target."
    },
    "defeat": {
      "ru": "Сбой калибровки — перепроверь перевод единиц в СИ.",
      "kk": "Калибрлеу қатесі — бірліктерді ХБЖ-ға аударуды тексер.",
      "en": "Calibration fault — double-check SI unit conversions."
    }
  },
  {
    "id": "asteria-act2",
    "from": 7,
    "to": 14,
    "title": {
      "ru": "Акт II. Траектории и сплавы",
      "kk": "II акт. Траекториялар мен қорытпалар",
      "en": "Act II. Trajectories & Alloys"
    },
    "setting": {
      "ru": "Лаборатория движения и материалов",
      "kk": "Қозғалыс және материалдар зертханасы",
      "en": "Motion & Materials Lab"
    },
    "intro": {
      "ru": "Дроны-перехватчики выходят на орбиты вокруг купола. Нужно рассчитать их скорость и плотность броневых пластин.",
      "kk": "Тосқауылшы дрондар күмбез айналасына шығады. Олардың жылдамдығы мен бронь пластиналарының тығыздығын есептеу керек.",
      "en": "Interceptor drones launch around the dome. Compute their speed and armor plate density."
    },
    "narrative": {
      "ru": "Формулы v = s/t и ρ = m/V позволяют создать быстрые и прочные перехватчики.",
      "kk": "v = s/t және ρ = m/V формулалары жылдам әрі берік дрондар жасауға мүмкіндік береді.",
      "en": "Formulas v = s/t and ρ = m/V unlock fast, durable interceptors."
    },
    "goal": {
      "ru": "Рассчитывать путь, скорость, графики движения и плотность тел (§6–§13).",
      "kk": "Жолды, жылдамдықты, қозғалыс графиктерін және дене тығыздығын есептеу (§6–§13).",
      "en": "Calculate distance, speed, motion graphs, and density (§6–§13)."
    },
    "revelations": [],
    "victory": {
      "ru": "Эскадрилья дронов из лёгкого дюралюминия заняла рубеж обороны!",
      "kk": "Жеңіл дюралюминийден жасалған дрондар қорғаныс шебіне шықты!",
      "en": "Lightweight duralumin drone squadron is on station!"
    },
    "defeat": {
      "ru": "Ошибка расчёта скорости или плотности — попробуй снова.",
      "kk": "Жылдамдық немесе тығыздық есебінде қате кетті — қайта көрейік.",
      "en": "Speed or density miscalculation — try again."
    }
  },
  {
    "id": "asteria-act3",
    "from": 15,
    "to": 21,
    "title": {
      "ru": "Акт III. Силы горного хребта",
      "kk": "III акт. Тау жотасының күштері",
      "en": "Act III. Forces of the Mountain Ridge"
    },
    "setting": {
      "ru": "Северный перевал Астерии",
      "kk": "Астерияның солтүстік асуы",
      "en": "Asteria Northern Pass"
    },
    "intro": {
      "ru": "Снежная буря бьёт по внешним ретрансляторам. Вездеход должен преодолеть ледяной склон.",
      "kk": "Қарлы дауыл сыртқы ретрансляторларға соғуда. Вездеход мұзды беткейден өтуі тиіс.",
      "en": "A blizzard batters the outer relays. Our rover must climb the icy ridge."
    },
    "narrative": {
      "ru": "Баланс силы тяжести, упругости Гука и силы трения решает судьбу экспедиции.",
      "kk": "Ауырлық, Гук серпімділік және үйкеліс күштерінің теңгерімі экспедиция тағдырын шешеді.",
      "en": "Balancing gravity, Hooke's elasticity, and friction decides the expedition's fate."
    },
    "goal": {
      "ru": "Применить закон Гука F = kx, силу тяжести F = mg и трения (§14–§20).",
      "kk": "Гук заңын F = kx, ауырлық F = mg және үйкеліс күштерін қолдану (§14–§20).",
      "en": "Apply Hooke's law F = kx, gravity F = mg, and friction (§14–§20)."
    },
    "revelations": [],
    "victory": {
      "ru": "Ретранслятор закреплён и запущен!",
      "kk": "Ретранслятор бекітіліп, іске қосылды!",
      "en": "Relay anchored and online!"
    },
    "defeat": {
      "ru": "Равнодействующая сила рассчитана неверно.",
      "kk": "Теңәрекетті күш қате есептелді.",
      "en": "Net force miscalculated."
    }
  },
  {
    "id": "asteria-act4",
    "from": 22,
    "to": 30,
    "title": {
      "ru": "Акт IV. Глубинный шлюз Паскаля",
      "kk": "IV акт. Паскальдың терең шлюзі",
      "en": "Act IV. Pascal's Deepwater Lock"
    },
    "setting": {
      "ru": "Подводный контур охлаждения",
      "kk": "Суасты салқындату контуры",
      "en": "Subsea Cooling Loop"
    },
    "intro": {
      "ru": "На глубине заклинило шлюзы охлаждения генератора щита.",
      "kk": "Тереңдікте қалқан генераторын салқындату шлюздері тұрып қалды.",
      "en": "Deep underwater, the shield generator's cooling locks have jammed."
    },
    "narrative": {
      "ru": "Гидравлический пресс и сила Архимеда помогут открыть затворы и поднять батискаф.",
      "kk": "Гидравликалық пресс пен Архимед күші қақпаларды ашып, батискафты көтеруге көмектеседі.",
      "en": "A hydraulic press and Archimedes' buoyancy will open the gates and lift the bathysphere."
    },
    "goal": {
      "ru": "Освоить давление p = F/S, p = ρgh, гидравлический пресс и закон Архимеда (§21–§29).",
      "kk": "p = F/S, p = ρgh қысымын, гидравликалық престі және Архимед заңын меңгеру (§21–§29).",
      "en": "Master pressure p = F/S, p = ρgh, hydraulic press, and Archimedes' principle (§21–§29)."
    },
    "revelations": [],
    "victory": {
      "ru": "Охлаждение щита восстановлено, батискаф всплыл!",
      "kk": "Қалқанды салқындату қалпына келді, батискаф су бетіне шықты!",
      "en": "Shield cooling restored, bathysphere surfaced!"
    },
    "defeat": {
      "ru": "Проверь расчёт гидростатического давления и силы Архимеда.",
      "kk": "Гидростатикалық қысым мен Архимед күшінің есебін тексер.",
      "en": "Recheck hydrostatic pressure and buoyant force."
    }
  },
  {
    "id": "asteria-act5",
    "from": 31,
    "to": 37,
    "title": {
      "ru": "Акт V. Рычаг Титанов и КПД",
      "kk": "V акт. Титандар иінтірегі және ПӘК",
      "en": "Act V. Lever of Titans & Efficiency"
    },
    "setting": {
      "ru": "Центральный энергетический шпиль",
      "kk": "Орталық энергетикалық шпиль",
      "en": "Central Energy Spire"
    },
    "intro": {
      "ru": "Пора поднять главный кристалл щита на вершину башни и зарядить накопители.",
      "kk": "Қалқанның бас кристалын мұнара шыңына көтеріп, жинақтағыштарды зарядтау уақыты келді.",
      "en": "Time to hoist the main shield crystal atop the spire and charge the capacitors."
    },
    "narrative": {
      "ru": "Работа, мощность, закон сохранения механической энергии и правило рычага работают вместе.",
      "kk": "Жұмыс, қуат, механикалық энергияның сақталу заңы және иінтірек ережесі бірге жұмыс істейді.",
      "en": "Work, power, conservation of mechanical energy, and lever equilibrium unite."
    },
    "goal": {
      "ru": "Рассчитывать работу, мощность, энергию, момент силы и КПД (§30–§36).",
      "kk": "Жұмыс, қуат, энергия, күш моменті және ПӘК есептеу (§30–§36).",
      "en": "Compute work, power, energy, torque, and efficiency (§30–§36)."
    },
    "revelations": [],
    "victory": {
      "ru": "Ядро установлено на вершине шпиля с максимальным КПД!",
      "kk": "Ядро максималды ПӘК-пен шпиль шыңына орнатылды!",
      "en": "Core mounted atop the spire at peak efficiency!"
    },
    "defeat": {
      "ru": "Пересчитай плечи рычага и полезную работу.",
      "kk": "Иінтірек иіндерін және пайдалы жұмысты қайта есепте.",
      "en": "Recalculate lever arms and useful work."
    }
  },
  {
    "id": "asteria-act6",
    "from": 38,
    "to": 50,
    "title": {
      "ru": "Акт VI. Солнечный рубеж и сигнал Эквилибриуму",
      "kk": "VI акт. Күн шебі және Эквилибриумға сигнал",
      "en": "Act VI. Solar Frontier & Signal to Equilibrium"
    },
    "setting": {
      "ru": "Обсерватория и испытательный полигон Астерии",
      "kk": "Астерия обсерваториясы мен сынақ полигоны",
      "en": "Asteria Observatory & Proving Grounds"
    },
    "intro": {
      "ru": "Финальная синхронизация купола по небесным координатам и серия лабораторных испытаний.",
      "kk": "Аспан координаттары бойынша күмбезді финалдық синхрондау және зертханалық сынақтар сериясы.",
      "en": "Final dome synchronization by celestial coordinates and laboratory trials."
    },
    "narrative": {
      "ru": "Защитив Астерию, ИИ «Квант» улавливает сигнал бедствия из северного мегаполиса Эквилибриум (8 класс).",
      "kk": "Астерияны қорғаған соң, «Квант» ЖИ солтүстік Эквилибриум мегаполисінен (8-сынып) апат сигналын қабылдайды.",
      "en": "After securing Asteria, AI KVANT picks up a distress call from northern Metropolis Equilibrium (Grade 8)."
    },
    "goal": {
      "ru": "Завершить темы астрономии (§37–§39) и лабораторный практикум (Лаб. №1–10).",
      "kk": "Астрономия тақырыптарын (§37–§39) және зертханалық практикумды (№1–10 зерт.) аяқтау.",
      "en": "Complete astronomy (§37–§39) and the laboratory practicum (Labs #1–10)."
    },
    "revelations": [],
    "victory": {
      "ru": "Щит Астерии сияет! Путь в Эквилибриум (8 класс) открыт!",
      "kk": "Астерия қалқаны жарқырап тұр! Эквилибриумға (8-сынып) жол ашық!",
      "en": "Asteria's shield shines bright! The road to Equilibrium (Grade 8) is open!"
    },
    "defeat": {
      "ru": "Доведи расчёты орбит и лабораторных измерений до точности.",
      "kk": "Орбиталар мен зертханалық өлшемдерді дәлдікке жеткіз.",
      "en": "Refine your orbital and lab calculations."
    }
  }
];
window.GRADE7_STORY_META = undefined;
const LEVEL_NAMES_RU = {
  "1": "🛡 Техника безопасности",
  "2": "§1. Физика — наука о природе",
  "3": "§2. Научные методы изучения природы",
  "4": "§3. Физические величины и их измерение",
  "5": "§4. Скалярные и векторные величины",
  "6": "§5. Точность измерений и вычислений",
  "7": "§6. Механическое движение",
  "8": "§7. Траектория. Путь. Перемещение",
  "9": "§8. Прямолинейное равномерное и неравномерное",
  "10": "§9. Расчёт скорости и средней скорости",
  "11": "§10. Графики движения",
  "12": "§11. Масса и измерение массы тел",
  "13": "§12. Измерение объёма тел",
  "14": "§13. Плотность вещества",
  "15": "§14. Явление инерции",
  "16": "§15. Сила",
  "17": "§16. Явление тяготения. Сила тяжести. Вес",
  "18": "§17. Деформация",
  "19": "§18. Сила упругости. Закон Гука",
  "20": "§19. Сила трения",
  "21": "§20. Сложение сил",
  "22": "§21. Молекулярное строение тел",
  "23": "§22. Давление твёрдых тел",
  "24": "§23. Давление в жидкостях и газах. Закон Паскаля",
  "25": "§24. Сообщающиеся сосуды",
  "26": "§25. Гидравлическая машина",
  "27": "§26. Атмосферное давление",
  "28": "§27. Манометры. Насосы",
  "29": "§28. Выталкивающая сила. Закон Архимеда",
  "30": "§29. Условия плавания тел",
  "31": "§30. Механическая работа. Мощность",
  "32": "§31. Кинетическая энергия",
  "33": "§32. Превращение и сохранение энергии",
  "34": "§33. Простые механизмы. Рычаг. Блок",
  "35": "§34. Центр масс тел",
  "36": "§35. Условие равновесия рычага",
  "37": "§36. Коэффициент полезного действия (КПД)",
  "38": "§37. Наука о небесных телах",
  "39": "§38. Солнечная система",
  "40": "§39. Основы календаря",
  "41": "🔬 Лаб. №1: Размеры малых тел",
  "42": "🔬 Лаб. №2: Измерение величин",
  "43": "🔬 Лаб. №3: Определение плотности",
  "44": "🔬 Лаб. №4: Упругие деформации",
  "45": "🔬 Лаб. №5: Сила трения",
  "46": "🔬 Лаб. №6: Закон Архимеда",
  "47": "🔬 Лаб. №7: Условия плавания тел",
  "48": "🔬 Лаб. №8: Центр масс",
  "49": "🔬 Лаб. №9: Равновесие рычага",
  "50": "🔬 Лаб. №10: КПД наклонной плоскости"
};
const LEVEL_NAMES_EN = {
  "1": "🛡 Lab Safety",
  "2": "§1. Physics — the science of nature",
  "3": "§2. Scientific methods of studying nature",
  "4": "§3. Physical quantities and their measurement",
  "5": "§4. Scalar and vector quantities",
  "6": "§5. Accuracy of measurements",
  "7": "§6. Mechanical motion",
  "8": "§7. Trajectory. Path. Displacement",
  "9": "§8. Uniform and non-uniform motion",
  "10": "§9. Speed and average speed",
  "11": "§10. Motion graphs",
  "12": "§11. Mass and its measurement",
  "13": "§12. Volume measurement",
  "14": "§13. Density of matter",
  "15": "§14. Inertia",
  "16": "§15. Force",
  "17": "§16. Gravity. Weight",
  "18": "§17. Deformation",
  "19": "§18. Elastic force. Hooke's law",
  "20": "§19. Friction",
  "21": "§20. Adding forces",
  "22": "§21. Molecular structure",
  "23": "§22. Pressure of solids",
  "24": "§23. Pressure in liquids and gases. Pascal's law",
  "25": "§24. Communicating vessels",
  "26": "§25. Hydraulic machine",
  "27": "§26. Atmospheric pressure",
  "28": "§27. Manometers. Pumps",
  "29": "§28. Buoyancy. Archimedes' law",
  "30": "§29. Flotation conditions",
  "31": "§30. Work. Power",
  "32": "§31. Kinetic energy",
  "33": "§32. Energy conservation",
  "34": "§33. Simple machines. Lever. Pulley",
  "35": "§34. Center of mass",
  "36": "§35. Lever equilibrium",
  "37": "§36. Efficiency (KPD)",
  "38": "§37. Science of celestial bodies",
  "39": "§38. Solar system",
  "40": "§39. Calendar basics",
  "41": "🔬 Lab #1: Sizes of small bodies",
  "42": "🔬 Lab #2: Measurement",
  "43": "🔬 Lab #3: Density",
  "44": "🔬 Lab #4: Elastic deformation",
  "45": "🔬 Lab #5: Friction force",
  "46": "🔬 Lab #6: Archimedes' law",
  "47": "🔬 Lab #7: Flotation",
  "48": "🔬 Lab #8: Center of mass",
  "49": "🔬 Lab #9: Lever equilibrium",
  "50": "🔬 Lab #10: Efficiency"
};
const LEVEL_NAMES_KK = {
  "41": "🔬 Лаб. №1: Размеры малых тел",
  "42": "🔬 Лаб. №2: Измерение величин",
  "43": "🔬 Лаб. №3: Определение плотности",
  "44": "🔬 Лаб. №4: Упругие деформации",
  "45": "🔬 Лаб. №5: Сила трения",
  "46": "🔬 Лаб. №6: Закон Архимеда",
  "47": "🔬 Лаб. №7: Условия плавания тел",
  "48": "🔬 Лаб. №8: Центр масс",
  "49": "🔬 Лаб. №9: Равновесие рычага",
  "50": "🔬 Лаб. №10: КПД наклонной плоскости"
};
const LEVEL_THEORY = {
  "bonus": {
    "ru": "## Правила безопасности\n• В кабинете физики работай только с разрешения учителя и не трогай приборы без необходимости.\n• Со стеклянной посудой (мензурки, термометры) обращайся аккуратно: стекло хрупкое.\n• Не пробуй вещества на вкус и не подноси их близко к лицу.\n• При работе с электроприборами проверяй целостность проводов.\n• О любой неисправности сразу сообщай учителю.\n• Порядок на столе — залог безопасной работы.",
    "en": "## Safety rules\n• Work in the physics lab only with the teacher's permission.\n• Glassware (cylinders, thermometers) is fragile — handle it carefully.\n• Never taste substances or bring them close to your face.\n• Check cords of electric devices before use.\n• Report any fault to the teacher immediately.",
    "kk": "## Қауіпсіздік ережелері\n• Физика кабинетінде тек мұғалімнің рұқсатымен жұмыс істе.\n• Шыны ыдыстарды (мензурка, термометр) абайлап ұста: шыны нәзік.\n• Заттардың дәмін татпа және бетіңе жақындатпа.\n• Электр аспаптарының сымдарын тексер.\n• Ақау туралы бірден мұғалімге хабарла."
  },
  "p1": {
    "ru": "## Что изучает физика\n• Физика — наука, изучающая физические явления: механические, тепловые, световые, звуковые, электрические и магнитные.\n## Основные понятия\n• Физическое тело — любой предмет, имеющий форму и объём.\n• Вещество — вид материи определённого свойства, из которого состоит тело.\n• Материя — всё то, что заполняет окружающее нас пространство.\n• Физические термины — специальные слова, обозначающие предмет или явление и их свойства.",
    "en": "## What physics studies\n• Physics is the science that studies physical phenomena: mechanical, thermal, light, sound, electric and magnetic.\n## Key concepts\n• A physical body is any object with shape and volume.\n• Matter is what bodies are made of.\n• Physical terms are special words naming objects, phenomena and their properties.",
    "kk": "## Физика нені зерттейді\n• Физика — физикалық құбылыстарды зерттейтін ғылым: механикалық, жылулық, жарық, дыбыс, электр және магнит.\n## Негізгі ұғымдар\n• Физикалық дене — пішіні мен көлемі бар кез келген зат.\n• Зат — дененің неден жасалғаны.\n• Материя — қоршаған кеңістікті толтыратынның бәрі."
  },
  "p2": {
    "ru": "## Научные методы изучения природы\n• Наблюдение — целенаправленное восприятие явления.\n• Гипотеза — предположение, объясняющее наблюдаемое явление.\n• Эксперимент — метод познания, при котором явление исследуется в лабораторных условиях.\n• Физическая теория — система научных знаний, объясняющая физические явления в их взаимосвязи.\n## Порядок научного познания\n• Наблюдение → гипотеза → эксперимент → вывод (закон).\n## Экспериментальные задания\n• Экспериментальное задание: объясни заинтересовавшие тебя природные явления, используя цепочку научного познания (наблюдение → гипотеза → эксперимент).\n• Наблюдение: в течение месяца ежедневно отмечай положение восхода и захода Солнца относительно здания или дерева; ответы найди в энциклопедии по астрономии (тема «Годичное движение Солнца»).\n• 🔗 [Научный метод — пошаговое объяснение](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Детская энциклопедия. Том 1. Земля](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [Лекция №3 «Восход и заход Солнца»](https://vk.com/video-51126445_456242880)\n• 🔗 [Симулятор движения Земли вокруг Солнца](https://www.new3jcn.com/Phyc140/star-planet.html)",
    "en": "## Scientific methods\n• Observation is a purposeful perception of a phenomenon.\n• Hypothesis is an assumption explaining the observed phenomenon.\n• Experiment is a method of studying a phenomenon in laboratory conditions.\n• Theory is a system of scientific knowledge explaining phenomena.\n## Order of study\n• Observation → hypothesis → experiment → conclusion (law).\n## Experimental tasks\n• Experimental task: explain a natural phenomenon that interests you using the chain of scientific cognition (observation → hypothesis → experiment).\n• Observation: for a month, mark the position of sunrise and sunset relative to a building or tree each day; find answers in an astronomy encyclopaedia (topic «Annual motion of the Sun»).\n• 🔗 [Scientific method — step-by-step explanation](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Children's encyclopaedia. Vol. 1. Earth](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [Lecture №3 «Sunrise and sunset»](https://vk.com/video-51126445_456242880)\n• 🔗 [Simulator of the Earth's motion around the Sun](https://www.new3jcn.com/Phyc140/star-planet.html)",
    "kk": "## Табиғатты зерттеудің ғылыми әдістері\n• Бақылау — құбылысты мақсатты қабылдау.\n• Гипотеза — байқалған құбылысты түсіндіретін болжам.\n• Эксперимент — құбылысты зертханалық жағдайда зерттеу әдісі.\n• Теория — құбылыстарды өзара байланыста түсіндіретін ғылыми білім жүйесі.\n## Таным реті\n• Бақылау → гипотеза → эксперимент → қорытынды (заң).\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: ғылыми таным тізбегін (бақылау → болжам → эксперимент) қолданып, өзіңді қызықтырған табиғат құбылысын түсіндір.\n• Бақылау: бір ай бойы күн сайын Күннің шығуы мен батуының орнын ғимаратқа не ағашқа қатысты белгіле; жауаптарды астрономия энциклопедиясынан тап («Күннің жылдық қозғалысы» тақырыбы).\n• 🔗 [Ғылыми әдіс — қадамдық түсіндіру](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Балалар энциклопедиясы. 1-том. Жер](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [№3 дәріс «Күннің шығуы мен батуы»](https://vk.com/video-51126445_456242880)\n• 🔗 [Жердің Күнді айналу симуляторы](https://www.new3jcn.com/Phyc140/star-planet.html)"
  },
  "p3": {
    "ru": "## Физические величины и их измерение\n• Физическая величина — количественная характеристика свойства тела или явления.\n• Измерение — сравнение величины с единицей измерения.\n• Международная система единиц (СИ) — совокупность основных и производных единиц.\n## Основные единицы СИ\n• Длина — метр (м), масса — килограмм (кг), время — секунда (с).\n• Приборы: линейка, весы, секундомер, термометр.\n• Прямой метод измерения — измерение непосредственно прибором.\n## Экспериментальные задания\n• Экспериментальное задание: линейкой определи размеры бокала и вычисли его объём; результат запиши в м³, дм³, см³, мм³ и литрах.\n• 🔗 [Измерение объёма тела сложной формы](https://www.youtube.com/watch?v=FSVnpPDnVHQ)",
    "en": "## Physical quantities\n• A physical quantity is a measurable characteristic of a body or phenomenon.\n• Measurement compares a quantity with its unit.\n• SI is the set of base and derived units.\n## SI base units\n• Length — metre (m), mass — kilogram (kg), time — second (s).\n• Instruments: ruler, balance, stopwatch, thermometer.\n## Experimental tasks\n• Experimental task: use a ruler to determine the size of a glass and calculate its volume; write the result in m³, dm³, cm³, mm³ and litres.\n• 🔗 [Measuring the volume of a body of complex shape](https://www.youtube.com/watch?v=FSVnpPDnVHQ)",
    "kk": "## Физикалық шамалар\n• Физикалық шама — дене немесе құбылыс қасиетінің сандық сипаттамасы.\n• Өлшеу — шаманы өлшем бірлігімен салыстыру.\n• Халықаралық бірліктер жүйесі (SI) — негізгі және туынды бірліктер жиынтығы.\n## Негізгі SI бірліктері\n• Ұзындық — метр (м), масса — килограмм (кг), уақыт — секунд (с).\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: сызғышпен бокалдың өлшемдерін анықтап, көлемін есепте; нәтижені м³, дм³, см³, мм³ және литрмен жаз.\n• 🔗 [Күрделі пішінді дененің көлемін өлшеу](https://www.youtube.com/watch?v=FSVnpPDnVHQ)"
  },
  "p4": {
    "ru": "## Скалярные и векторные величины\n• Скалярные величины задаются только числом: масса, время, путь, температура.\n• Векторные величины задаются числом и направлением: скорость, сила, перемещение.\n• Вектор изображают стрелкой: длина — модуль (величина), остриё — направление.",
    "en": "## Scalars and vectors\n• Scalars are given only by a number: mass, time, path, temperature.\n• Vectors are given by a number and a direction: velocity, force, displacement.\n• A vector is drawn as an arrow: length is magnitude, head is direction.",
    "kk": "## Скаляр және векторлық шамалар\n• Скаляр шамалар тек санмен беріледі: масса, уақыт, жол, температура.\n• Векторлық шамалар санмен және бағытпен беріледі: жылдамдық, күш, орын ауыстыру.\n• Вектор жебемен кескінделеді: ұзындығы — модулі, ұшы — бағыты."
  },
  "p5": {
    "ru": "## Точность измерений\n• Цена деления шкалы — значение величины, соответствующее одному наименьшему делению прибора.\n• Цена деления = (разность двух соседних отметок) ÷ (число делений между ними).\n• Погрешность измерения обычно равна половине цены деления.\n• Результат записывают: A = a ± Δa.\n## Запись больших и малых чисел\n• Стандартная запись: число вида a × 10^n. Например: 7800 = 7,8 × 10^3.\n## Экспериментальные задания\n• Экспериментальное задание: мерным стаканом определи объём бокала и запиши результат с учётом погрешности.\n• 🔗 [Симулятор измерения объёма бокала](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Урок «Точность измерений и вычислений» (5–6 уроки)](https://youtu.be/FV7cEvoz5q4)",
    "en": "## Measurement accuracy\n• Scale division is the value of the smallest division of the instrument.\n• Division = (difference of two neighbouring marks) ÷ (number of divisions between them).\n• Error is usually half a division: A = a ± Δa.\n## Standard form\n• Large and small numbers are written as a × 10^n. Example: 7800 = 7.8 × 10^3.\n## Experimental tasks\n• Experimental task: use a measuring cup to find the volume of a glass and record the result with the measurement error.\n• 🔗 [Simulator of measuring the volume of a glass](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Lesson «Accuracy of measurements and calculations» (lessons 5–6)](https://youtu.be/FV7cEvoz5q4)",
    "kk": "## Өлшеу дәлдігі\n• Бөлік құны — аспаптың ең кіші бөлігіне сәйкес шама мәні.\n• Бөлік құны = (екі көрші белгінің айырмасы) ÷ (арасындағы бөліктер саны).\n• Қателік әдетте бөлік құнының жартысы: A = a ± Δa.\n## Стандартты жазу\n• a × 10^n түрінде жазу. Мысалы: 7800 = 7,8 × 10^3.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: өлшеуіш стақанмен бокалдың көлемін анықтап, нәтижені қателігімен жаз.\n• 🔗 [Бокал көлемін өлшеу симуляторы](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Сабақ «Өлшеу мен есептеудің дәлдігі» (5–6 сабақтар)](https://youtu.be/FV7cEvoz5q4)"
  },
  "p6": {
    "ru": "## Механическое движение\n• Механическое движение — изменение положения тела в пространстве с течением времени относительно других тел.\n• Тело отсчёта — тело, относительно которого рассматривается изменение положения.\n• Система отсчёта = тело отсчёта + система координат + часы.\n• Материальная точка — тело, размерами которого можно пренебречь в условиях задачи.\n## Экспериментальные задания\n• Экспериментальное задание: сантиметровой лентой измерь длину своего шага, посчитай число шагов от школы до дома и найди пройденный путь; изобрази траекторию в масштабе и построй вектор перемещения.\n• 🔗 [Как измеряется длина шага (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Траектория. Путь. Перемещение](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)",
    "en": "## Mechanical motion\n• Mechanical motion is a change of a body's position over time relative to other bodies.\n• A reference body is the body relative to which motion is considered.\n• A frame of reference = reference body + coordinates + clock.\n• A material point is a body whose size can be neglected.\n## Experimental tasks\n• Experimental task: measure the length of your step with a measuring tape, count the steps from school to home and find the distance travelled; draw the trajectory to scale and show the displacement vector.\n• 🔗 [How step length is measured (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Trajectory. Distance. Displacement](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)",
    "kk": "## Механикалық қозғалыс\n• Механикалық қозғалыс — дененің орнының басқа денелерге қарағанда уақыт бойынша өзгеруі.\n• Санақ денесі — орны өзгеруі қарастырылатын дене.\n• Санақ жүйесі = санақ денесі + координаталар + сағат.\n• Материалдық нүкте — өлшемін ескермеуге болатын дене.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: сантиметрлік таспамен өз қадамыңның ұзындығын өлшеп, мектептен үйге дейінгі қадам санын санап, жүрілген жолды тап; траекторияны масштабпен сызып, орын ауыстыру векторын көрсет.\n• 🔗 [Қадам ұзындығы қалай өлшенеді (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Траектория. Жол. Орын ауыстыру](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)"
  },
  "p7": {
    "ru": "## Траектория, путь, перемещение\n• Траектория — линия, которую описывает тело при движении.\n• Пройденный путь — длина траектории; скалярная величина.\n• Перемещение — направленный отрезок, соединяющий начальное и конечное положение тела.\n## Относительность движения\n• Покой и движение относительны: тело неподвижно относительно одного тела отсчёта и движется относительно другого.\n## Экспериментальные задания\n• Экспериментальное задание: наблюдай за каплями дождя на заднем и боковом стекле покоящегося и движущегося автобуса; сделай выводы.\n• Домашний опыт: сделай отверстие в крышке бутылки, направь струю воды на неподвижную поверхность, затем приведи поверхность в движение; сравни результаты.\n• 🔗 [Симулятор «Дождь в автобусе»](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Система отсчёта](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [Симулятор «Эксперимент с водой и движением»](https://gemini.google.com/share/c077ce897f22)",
    "en": "## Trajectory, path, displacement\n• Trajectory is the line a body describes while moving.\n• Path is the length of the trajectory (scalar).\n• Displacement is the directed segment from the initial to the final position.\n## Relativity of motion\n• Rest and motion are relative to the chosen reference body.\n## Experimental tasks\n• Experimental task: watch raindrops on the rear and side windows of a stationary and a moving bus; draw conclusions.\n• Home experiment: make a hole in a bottle cap, direct the water jet onto a stationary surface, then set the surface in motion; compare the results.\n• 🔗 [Simulator «Rain in a bus»](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Reference frame](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [Simulator «Experiment with water and motion»](https://gemini.google.com/share/c077ce897f22)",
    "kk": "## Траектория, жол, орын ауыстыру\n• Траектория — дене қозғалғанда сызатын сызық.\n• Жол — траекторияның ұзындығы (скаляр).\n• Орын ауыстыру — дененің бастапқы және соңғы орнын қосатын бағытталған кесінді.\n## Қозғалыстың салыстырмалылығы\n• Тыныштық пен қозғалыс санақ денесіне байланысты.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қозғалмайтын және қозғалып келе жатқан автобустың артқы және бүйір әйнегіндегі жаңбыр тамшыларын бақылап, қорытынды жаса.\n• Үй тәжірибесі: бөтелке қақпағын тесіп, су ағынын қозғалмайтын бетке бағытта, сосын бетті қозғалысқа келтір; нәтижелерді салыстыр.\n• 🔗 [«Автобустағы жаңбыр» симуляторы](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Санақ жүйесі](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [«Су мен қозғалыс тәжірибесі» симуляторы](https://gemini.google.com/share/c077ce897f22)"
  },
  "p8": {
    "ru": "## Виды движения\n• Равномерное движение — за любые равные промежутки времени тело проходит одинаковые пути.\n• Неравномерное движение — за равные промежутки времени тело проходит разные пути.\n• Прямолинейное движение — движение по прямой линии.\n• Скорость путевая — быстрота движения вдоль траектории.\n## Экспериментальные задания\n• Экспериментальное задание: наблюдай за движением пешеходов на участке с одинаковыми расстояниями (например, у забора со столбами) и определи, кто движется равномерно.\n• 🔗 [Симулятор «Движущийся человек»](https://phet.colorado.edu/en/simulations/moving-man)",
    "en": "## Types of motion\n• Uniform motion: equal distances in equal time intervals.\n• Non-uniform motion: different distances in equal time intervals.\n• Rectilinear motion follows a straight line.\n## Experimental tasks\n• Experimental task: watch pedestrians on a section with equal spacing (e.g. along a fence with posts) and determine which of them move uniformly.\n• 🔗 [Simulator «The Moving Man»](https://phet.colorado.edu/en/simulations/moving-man)",
    "kk": "## Қозғалыс түрлері\n• Бірқалыпты қозғалыс — тең уақыт аралығында дене бірдей жол жүреді.\n• Бірқалыпсыз қозғалыс — тең уақытта әртүрлі жол жүреді.\n• Түзу сызықты қозғалыс — түзу бойымен қозғалу.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: арақашықтықтары бірдей учаскеде (мысалы, бағаналары бар қоршау жанында) жаяу жүргіншілердің қозғалысын бақылап, кімнің бірқалыпты қозғалатынын анықта.\n• 🔗 [«Қозғалыстағы адам» симуляторы](https://phet.colorado.edu/en/simulations/moving-man)"
  },
  "p9": {
    "ru": "## Скорость\n• Скорость — физическая величина, определяющая быстроту движения.\n> v = S / t\n• Единица СИ — метр в секунду (м/с).\n• Перевод единиц: 1 м/с = 3,6 км/ч.\n## Средняя скорость\n> v_ср = S_весь / t_всё\n• Средняя скорость = весь путь, делённый на всё время движения.\n## Экспериментальные задания\n• Экспериментальное задание: секундомером измерь время движения машин на прямом участке пути и вычисли их скорость; сравни с разрешённой скоростью в городе.\n• 🔗 [Движение (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Скорость](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Радар для измерения скорости](https://ru.ruwiki.ru/wiki/Радар_для_измерения_скорости)",
    "en": "## Speed\n• Speed shows how fast a body moves.\n> v = S / t\n• SI unit: metre per second (m/s). 1 m/s = 3.6 km/h.\n## Average speed\n> v_av = S_total / t_total\n• Average speed = total path divided by total time.\n## Experimental tasks\n• Experimental task: with a stopwatch measure the time cars take on a straight section of road and find their speed; compare with the permitted speed in the city.\n• 🔗 [Motion (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Speed](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Radar for measuring speed](https://ru.ruwiki.ru/wiki/%D0%A0%D0%B0%D0%B4%D0%B0%D1%80_%D0%B4%D0%BB%D1%8F_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%B8)",
    "kk": "## Жылдамдық\n• Жылдамдық — қозғалыстың тездігін анықтайтын шама.\n> v = S / t\n• SI бірлігі — м/с. 1 м/с = 3,6 км/сағ.\n## Орташа жылдамдық\n> v_орт = S_барлық / t_барлық\n• Орташа жылдамдық = барлық жол ÷ барлық уақыт.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: секундомермен түзу жол учаскесінде машиналардың қозғалыс уақытын өлшеп, жылдамдығын есепте; қаладағы рұқсат етілген жылдамдықпен салыстыр.\n• 🔗 [Қозғалыс (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Жылдамдық](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Жылдамдықты өлшеуге арналған радар](https://ru.ruwiki.ru/wiki/Радар_для_измерения_скорости)"
  },
  "p10": {
    "ru": "## Графики движения\n• График пути s(t): прямая линия — равномерное движение.\n• Чем круче график пути, тем больше скорость.\n• График скорости v(t) равномерного движения — горизонтальная линия.\n• Путь численно равен площади фигуры под графиком скорости.",
    "en": "## Motion graphs\n• Path graph s(t): a straight line means uniform motion.\n• The steeper the graph, the greater the speed.\n• Velocity graph v(t) of uniform motion is a horizontal line.\n• The path equals the area under the velocity graph.",
    "kk": "## Қозғалыс графиктері\n• Жол графигі s(t): түзу сызық — бірқалыпты қозғалыс.\n• График неғұрлым тік болса, жылдамдық соғұрлым үлкен.\n• Бірқалыпты қозғалыстың v(t) графигі — көлденең сызық.\n• Жол жылдамдық графигі астындағы ауданға тең."
  },
  "p11": {
    "ru": "## Масса\n• Масса — скалярная физическая величина, определяющая инерционные и гравитационные свойства тела.\n• Инертность — свойство тела сохранять состояние покоя или движения, изменение которого происходит постепенно.\n• Единица массы — килограмм (кг).\n## Измерение массы\n• Массу измеряют рычажными весами, сравнивая тело с гирями.\n## Экспериментальные задания\n• Экспериментальное задание: изготовь рычажные весы из подручного материала; гирьки 1 г, 2 г сделай из проволоки, миллиграммовые — из бумаги; определи массы чайной и столовой ложек круп, соли и сахара.\n• 🔗 [Рычажные весы своими руками](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Определение массы — рычажные весы](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Симулятор самодельных весов и справочник](https://gemini.google.com/share/144615bae955)",
    "en": "## Mass\n• Mass is a scalar quantity defining the inertial and gravitational properties of a body.\n• Inertia is the property of keeping one's state of motion.\n• Unit: kilogram (kg).\n## Measuring mass\n• Mass is measured on a beam balance by comparing a body with weights.\n## Experimental tasks\n• Experimental task: build lever scales from scrap materials; make 1 g and 2 g weights from wire and milligram weights from paper; find the masses of teaspoon and tablespoon portions of grains, salt and sugar.\n• 🔗 [Lever scales with your own hands](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Finding mass — lever scales](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Simulator of homemade scales and reference](https://gemini.google.com/share/144615bae955)",
    "kk": "## Масса\n• Масса — дененің инерттілік және гравитациялық қасиеттерін анықтайтын скаляр шама.\n• Инерттілік — дененің қозғалыс күйін сақтау қасиеті.\n• Бірлігі — килограмм (кг).\n## Массаны өлшеу\n• Массаны таразымен, денені кірлермен салыстырып өлшейді.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолда бар материалдан таразы жаса; 1 г және 2 г кірлерді сымнан, миллиграмдық кірлерді қағаздан дайында; шай және ас қасықтағы жарма, тұз, қанттың массасын анықта.\n• 🔗 [Таразыны өз қолыңмен жасау](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Массаны анықтау — таразы](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Қолдан жасалған таразы симуляторы және анықтамалық](https://gemini.google.com/share/144615bae955)"
  },
  "p12": {
    "ru": "## Измерение объёма\n• Объём жидкостей измеряют мензуркой (миллилитры, см³).\n• 1 мл = 1 см³; 1 л = 1 дм³ = 1000 см³.\n## Объём тела неправильной формы\n> V = V_2 − V_1\n• Тело опускают в воду; разность уровней — объём тела.\n## Объём тел правильной формы\n• Параллелепипед: V = a·b·c; куб: V = a³.\n## Экспериментальные задания\n• Экспериментальное задание: определи объём столовой ложки и вилки методом вытеснения; результат вырази в м³, дм³, см³, мм³.\n• 🔗 [Лабораторная работа «Измерение объёма тел»](https://gemini.google.com/share/258a24f3d31e)",
    "en": "## Volume measurement\n• Liquid volume is measured with a graduated cylinder (ml, cm³).\n• 1 ml = 1 cm³; 1 l = 1000 cm³.\n## Irregular bodies\n> V = V_2 − V_1\n• The water-level difference gives the body's volume.\n## Regular bodies\n• Box: V = a·b·c; cube: V = a³.\n## Experimental tasks\n• Experimental task: find the volume of a tablespoon and a fork by the displacement method; express the result in m³, dm³, cm³ and mm³.\n• 🔗 [Lab work «Measuring the volume of bodies»](https://gemini.google.com/share/258a24f3d31e)",
    "kk": "## Көлемді өлшеу\n• Сұйық көлемін мензуркамен өлшейді (мл, см³).\n• 1 мл = 1 см³; 1 л = 1000 см³.\n## Пішіні бұрыс дене\n> V = V_2 − V_1\n• Су деңгейінің айырмасы — дене көлемі.\n## Дұрыс пішінді денелер\n• Параллелепипед: V = a·b·c; куб: V = a³.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: ас қасық пен шанышқының көлемін ығыстыру әдісімен анықта; нәтижені м³, дм³, см³, мм³-пен өрнекте.\n• 🔗 [«Денелердің көлемін өлшеу» зертханалық жұмысы](https://gemini.google.com/share/258a24f3d31e)"
  },
  "p13": {
    "ru": "## Плотность\n• Плотность вещества — физическая величина, численно равная массе единицы объёма вещества.\n> ρ = m / V\n• Единица СИ — килограмм на кубический метр (кг/м³).\n• Перевод единиц: 1 г/см³ = 1000 кг/м³.\n• Плотность — табличная характеристика каждого вещества.",
    "en": "## Density\n• Density is the mass per unit volume of a substance.\n> ρ = m / V\n• SI unit: kilogram per cubic metre (kg/m³).\n• 1 g/cm³ = 1000 kg/m³.\n• Density is a tabulated property of each substance.",
    "kk": "## Тығыздық\n• Тығыздық — заттың бірлік көлемінің массасына тең шама.\n> ρ = m / V\n• SI бірлігі — кг/м³.\n• 1 г/см³ = 1000 кг/м³.\n• Тығыздық — әр заттың кестелік сипаттамасы."
  },
  "p14": {
    "ru": "## Явление инерции\n• Инерция — явление сохранения скорости тела при отсутствии действия на него других тел.\n• Тело сохраняет покой или равномерное прямолинейное движение, пока действие других тел не изменит это состояние.\n• Пример: пассажир наклоняется вперёд при резкой остановке автобуса; при резком старте — назад.\n## Экспериментальные задания\n• Экспериментальное задание: положи на стол газету так, чтобы край свисал, сверху — книгу; резко выдерни газету, затем медленно; сравни и объясни. Повтори со стопкой книг.\n• 🔗 [«Выдернуть скатерть» — видео от «Чудеса науки»](https://vk.com/video-19801656_164198235)",
    "en": "## Inertia\n• Inertia is the phenomenon of a body keeping its velocity when no other bodies act on it.\n• A body keeps rest or uniform motion until other bodies change this state.\n• Example: a passenger lurches forward when a bus brakes sharply.\n## Experimental tasks\n• Experimental task: lay a newspaper on the table with its edge hanging over, place a book on top; pull the newspaper out sharply, then slowly; compare and explain. Repeat with a stack of books.\n• 🔗 [«Pulling out the tablecloth» — video by «Miracles of science»](https://vk.com/video-19801656_164198235)",
    "kk": "## Инерция құбылысы\n• Инерция — денеге басқа денелер әсер етпегенде жылдамдығын сақтау құбылысы.\n• Басқа денелер әсер етпейінше дене тыныштықты немесе бірқалыпты қозғалысты сақтайды.\n• Мысал: автобус күрт тоқтағанда жолаушы алға еңкейеді.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: үстелге газетті шеті салбырап тұратындай қойып, үстіне кітап қой; газетті күрт тартып ал, сосын баяу; салыстырып, түсіндір. Кітаптар жинағымен қайтала.\n• 🔗 [«Дастарқанды тартып алу» — «Ғылым кереметтері» видеосы](https://vk.com/video-19801656_164198235)"
  },
  "p15": {
    "ru": "## Сила\n• Сила — мера взаимодействия тел; векторная величина.\n• Единица силы — ньютон (Н).\n• Силу обозначают буквой F и измеряют динамометром.\n• Сила может изменить скорость тела или деформировать его.\n• Виды сил: тяжести, упругости, трения, всемирного тяготения.\n## Экспериментальные задания\n• Экспериментальное задание: изготовь самодельный пружинный динамометр и нанеси шкалу, используя грузы разной массы и промышленный динамометр.\n• 🔗 [Динамометр — градуирование шкалы подручными средствами](https://www.youtube.com/watch?v=bzK7Zcm36VM)",
    "en": "## Force\n• Force measures the interaction of bodies; it is a vector quantity.\n• Unit: newton (N).\n• Force is denoted by F and measured with a dynamometer.\n• Force can change a body's speed or deform it.\n## Experimental tasks\n• Experimental task: build a homemade spring dynamometer and mark its scale using loads of different mass and a factory-made dynamometer.\n• 🔗 [Dynamometer — marking the scale with improvised means](https://www.youtube.com/watch?v=bzK7Zcm36VM)",
    "kk": "## Күш\n• Күш — денелердің өзара әрекетінің өлшемі; векторлық шама.\n• Бірлігі — ньютон (Н).\n• Күш F әрпімен белгіленіп, динамометрмен өлшенеді.\n• Күш дененің жылдамдығын өзгертеді немесе оны деформациялайды.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдан серіппелі динамометр жасап, әртүрлі массалы жүктер мен зауыттық динамометрді пайдаланып шкаласын белгіле.\n• 🔗 [Динамометр — шкаланы қолдағы құралдармен белгілеу](https://www.youtube.com/watch?v=bzK7Zcm36VM)"
  },
  "p16": {
    "ru": "## Сила тяжести. Вес\n• Сила всемирного тяготения — сила взаимного притяжения тел во Вселенной.\n• Сила тяжести — сила, с которой Земля притягивает к себе тела.\n> F_т = m · g\n• g ≈ 9,8 Н/кг (при расчётах часто g ≈ 10 Н/кг).\n• Вес тела — сила, с которой тело действует на опору или подвес.\n• Сила реакции опоры и сила натяжения подвеса — силы, с которыми опора/подвес действуют на тело.",
    "en": "## Gravity. Weight\n• Gravity is the mutual attraction of all bodies in the Universe.\n• The weight force (gravity) is the force with which the Earth attracts bodies.\n> F = m · g\n• g ≈ 9.8 N/kg (often g ≈ 10 N/kg in calculations).\n• Weight is the force a body exerts on a support or suspension.",
    "kk": "## Ауырлық күші. Салмақ\n• Бүкіләлемдік тартылыс — Әлемдегі барлық денелердің өзара тартылуы.\n• Ауырлық күші — Жердің денелерді тартатын күші.\n> F_а = m · g\n• g ≈ 9,8 Н/кг (есептеуде көбіне g ≈ 10 Н/кг).\n• Салмақ — дененің тірекке немесе аспаға әсер ететін күші."
  },
  "p17": {
    "ru": "## Деформация\n• Деформация — изменение формы и размеров тела.\n• Виды деформации: растяжение, сжатие, изгиб, кручение, сдвиг.\n• Упругая деформация исчезает после снятия нагрузки.\n• Пластическая деформация сохраняется после снятия нагрузки.\n## Экспериментальные задания\n• Экспериментальное задание: проведи испытание на разрыв швейных ниток разной толщины (одинаковой длины) и одинаковой толщины (разной длины); обсуди результаты с одноклассниками.\n• 🔗 [Испытание швейных ниток на разрыв](https://vk.com/video213138898_456240939)",
    "en": "## Deformation\n• Deformation is a change of a body's shape and size.\n• Types: tension, compression, bending, torsion, shear.\n• Elastic deformation disappears after unloading.\n• Plastic deformation remains after unloading.\n## Experimental tasks\n• Experimental task: test sewing threads of different thickness (same length) and the same thickness (different lengths) to breaking; discuss the results with classmates.\n• 🔗 [Breaking test of sewing threads](https://vk.com/video213138898_456240939)",
    "kk": "## Деформация\n• Деформация — дененің пішіні мен өлшемдерінің өзгеруі.\n• Түрлері: созылу, сығылу, иілу, бұралу, ығысу.\n• Серпімді деформация жүктемені алғанда жоғалады.\n• Пластикалық деформация жүктемені алғаннан кейін қалады.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қалыңдығы әртүрлі (ұзындығы бірдей) және қалыңдығы бірдей (ұзындығы әртүрлі) тігін жіптерін үзуге сына; нәтижелерді сыныптастарыңмен талқыла.\n• 🔗 [Тігін жіптерін үзуге сынау](https://vk.com/video213138898_456240939)"
  },
  "p18": {
    "ru": "## Сила упругости. Закон Гука\n• Сила упругости — сила взаимодействия молекул деформированного тела, стремящаяся вернуть прежнюю форму.\n• Закон Гука: сила упругости прямо пропорциональна удлинению тела.\n> F_упр = k · Δl\n• k — жёсткость (Н/м); Δl — удлинение (сжатие).\n• На законе Гука основана работа динамометра.\n## Экспериментальные задания\n• Экспериментальное задание: исследуй упругие свойства простого листа бумаги и сложенного в гармошку; выясни, где применяется гофрированная бумага.\n• 🔗 [Практическое применение гофрированной бумаги](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)",
    "en": "## Elastic force. Hooke's law\n• Elastic force arises on deformation and restores the shape.\n• Hooke's law: the elastic force is proportional to the extension.\n> F = k · Δl\n• k — stiffness (N/m); Δl — extension (compression).\n• The dynamometer is based on Hooke's law.\n## Experimental tasks\n• Experimental task: study the elastic properties of a plain sheet of paper and one folded into an accordion; find where corrugated paper is used.\n• 🔗 [Practical application of corrugated paper](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)",
    "kk": "## Серпімділік күші. Гук заңы\n• Серпімділік күші — деформацияланған денені бұрынғы пішініне қайтаратын күш.\n• Гук заңы: серпімділік күші ұзаруға тура пропорционал.\n> F_с = k · Δl\n• k — қатаңдық (Н/м); Δl — ұзару (сығылу).\n• Динамометр Гук заңына негізделген.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: жай қағаз бен гармонь тәрізді бүктелген қағаздың серпімді қасиеттерін зертте; гофр қағаздың қайда қолданылатынын анықта.\n• 🔗 [Гофр қағаздың практикалық қолданылуы](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)"
  },
  "p19": {
    "ru": "## Сила трения\n• Сила трения скольжения — сила, возникающая при движении одного тела по поверхности другого, направленная против движения.\n• Сила трения покоя — сила взаимодействия неподвижных относительно друг друга тел.\n• Виды трения: покоя, скольжения, качения.\n• Трение качения меньше трения скольжения.\n• Трение зависит от материала поверхностей и прижимающей силы; в технике трение уменьшают смазкой и подшипниками.\n## Экспериментальные задания\n• Экспериментальное задание: самодельным динамометром определи коэффициент трения скольжения разных поверхностей и составь таблицу.\n• 🔗 [Лабораторная работа «Определение коэффициента трения скольжения»](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)",
    "en": "## Friction\n• Sliding friction arises when one body moves over another and opposes the motion.\n• Static friction acts between bodies at rest relative to each other.\n• Types: static, sliding, rolling.\n• Rolling friction is smaller than sliding friction.\n• Friction is reduced by lubrication and bearings.\n## Experimental tasks\n• Experimental task: with a homemade dynamometer find the sliding friction coefficient of different surfaces and make a table.\n• 🔗 [Lab work «Determining the sliding friction coefficient»](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)",
    "kk": "## Үйкеліс күші\n• Сырғанау үйкелісі — бір дене екіншісінің бетімен қозғалғанда пайда болып, қозғалысқа қарсы бағытталады.\n• Тыныштық үйкелісі — бір-біріне қатысты қозғалмайтын денелер арасындағы күш.\n• Түрлері: тыныштық, сырғанау, домалау.\n• Домалау үйкелісі сырғанау үйкелісінен кіші.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдан жасалған динамометрмен әртүрлі беттердің сырғанау үйкеліс коэффициентін анықтап, кесте құр.\n• 🔗 [«Сырғанау үйкеліс коэффициентін анықтау» зертханалық жұмысы](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)"
  },
  "p20": {
    "ru": "## Сложение сил\n• Равнодействующая сила — сила, производящая такое же действие, как несколько одновременно действующих сил.\n## Правила сложения\n• Силы в одну сторону складываются:\n> R = F_1 + F_2\n• Силы в противоположные стороны вычитаются:\n> R = F_1 − F_2\n• Если равнодействующая равна нулю, тело покоится или движется равномерно.\n## Экспериментальные задания\n• Экспериментальное задание: изготовь динамометр из резинового жгута, проградуируй его, определи вес нескольких тел и составь паспорт динамометра.\n• 🔗 [«Силы и движение: основы»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)",
    "en": "## Adding forces\n• The resultant force produces the same effect as several forces acting together.\n## Rules\n• Forces in the same direction add:\n> R = F_1 + F_2\n• Opposite forces subtract:\n> R = F_1 − F_2\n• Zero resultant means rest or uniform motion.\n## Experimental tasks\n• Experimental task: make a dynamometer from a rubber band, mark its scale, find the weight of several bodies and write a passport for the dynamometer.\n• 🔗 [«Forces and Motion: Basics»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)",
    "kk": "## Күштерді қосу\n• Теңәрекетті күш — бірнеше күштің бірге әсеріндей әсер беретін күш.\n## Ережелер\n• Бір бағыттағы күштер қосылады:\n> R = F_1 + F_2\n• Қарама-қарсы күштер азайтылады:\n> R = F_1 − F_2\n• Теңәрекетті күш нөл болса, дене тыныштықта немесе бірқалыпты қозғалады.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: резеңке бұраудан динамометр жасап, шкаласын белгіле, бірнеше дененің салмағын анықта және динамометрге төлқұжат жаз.\n• 🔗 [«Күштер және қозғалыс: негіздері»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)"
  },
  "p21": {
    "ru": "## Молекулярное строение тел\n• Все вещества состоят из отдельных частиц — молекул и атомов; между ними есть промежутки.\n• Молекула — мельчайшая частица вещества, сохраняющая его свойства.\n• Атом — мельчайшая частица химического элемента.\n• Частицы находятся в непрерывном беспорядочном движении.\n• Между частицами действуют силы притяжения и отталкивания.\n• Диффузия — взаимное проникновение молекул одного вещества между молекулами другого; при нагревании ускоряется.\n## Экспериментальные задания\n• Экспериментальное задание: определи толщину одного листа учебника с учётом погрешности; определи скорость диффузии в газах, открыв флакон духов и замерив время распространения запаха.\n• 🔗 [Симулятор «Определение толщины листа»](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [Симулятор «Диффузия»](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)",
    "en": "## Molecular structure\n• All substances consist of particles — molecules and atoms; there are gaps between them.\n• A molecule is the smallest particle keeping the properties of the substance.\n• Particles are in continuous random motion.\n• Attractive and repulsive forces act between particles.\n• Diffusion is the mixing of molecules of different substances; it speeds up when heated.\n## Experimental tasks\n• Experimental task: find the thickness of one textbook page taking the error into account; find the diffusion rate in gases by opening a perfume bottle and measuring the time the smell spreads.\n• 🔗 [Simulator «Finding the thickness of a page»](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [Simulator «Diffusion»](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)",
    "kk": "## Денелердің молекулалық құрылысы\n• Барлық заттар бөлшектерден — молекулалар мен атомдардан тұрады; арасында бос орын бар.\n• Молекула — зат қасиетін сақтайтын ең кіші бөлшек.\n• Бөлшектер үздіксіз ретсіз қозғалады.\n• Бөлшектер арасында тартылыс және тебіліс күштері әсер етеді.\n• Диффузия — бір зат молекулаларының екінші зат арасына енуі; қыздырғанда жылдамдайды.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: оқулықтың бір парағының қалыңдығын қателігімен анықта; әтір флаконын ашып, иістің таралу уақытын өлшеп, газдардағы диффузия жылдамдығын анықта.\n• 🔗 [«Парақ қалыңдығын анықтау» симуляторы](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [«Диффузия» симуляторы](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)"
  },
  "p22": {
    "ru": "## Давление твёрдых тел\n• Давление — физическая величина, равная отношению силы, действующей перпендикулярно поверхности, к площади этой поверхности.\n> p = F / S\n• Единица — паскаль (Па): 1 Па = 1 Н/м².\n• Давление тем больше, чем больше сила и меньше площадь опоры.\n• Примеры: лыжи уменьшают давление, гвозди и ножи увеличивают.\n## Экспериментальные задания\n• Экспериментальное задание: определи давление стула на пол и выясни, насколько оно изменится, если положить на него груз известной массы.\n• 🔗 [Опыт «Давление стула» (7 класс)](https://www.youtube.com/watch?v=8Pyc04u5ojE)",
    "en": "## Pressure of solids\n• Pressure is the force acting perpendicularly to a surface divided by its area.\n> p = F / S\n• Unit: pascal (Pa), 1 Pa = 1 N/m².\n• Pressure grows with force and shrinks with area.\n• Examples: skis reduce pressure; nails and knives increase it.\n## Experimental tasks\n• Experimental task: find the pressure of a chair on the floor and how much it changes when a load of known mass is placed on it.\n• 🔗 [Experiment «Chair pressure» (grade 7)](https://www.youtube.com/watch?v=8Pyc04u5ojE)",
    "kk": "## Қатты денелердің қысымы\n• Қысым — бетке перпендикуляр әсер ететін күштің осы бет ауданына қатынасы.\n> p = F / S\n• Бірлігі — паскаль (Па): 1 Па = 1 Н/м².\n• Күш артқан сайын және аудан кішірейген сайын қысым артады.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: орындықтың еденге түсіретін қысымын анықта және үстіне белгілі массалы жүк қойғанда қаншаға өзгеретінін анықта.\n• 🔗 [«Орындықтың қысымы» тәжірибесі (7 сынып)](https://www.youtube.com/watch?v=8Pyc04u5ojE)"
  },
  "p23": {
    "ru": "## Давление в жидкостях и газах\n• Закон Паскаля: давление, производимое на жидкость или газ, передаётся без изменения в каждую точку объёма.\n• Давление жидкости на глубине:\n> p = ρ · g · h\n• Давление растёт с глубиной.\n• Агрегатные состояния вещества: твёрдое, жидкое, газообразное.\n## Экспериментальные задания\n• Экспериментальное задание: натяни на цилиндр с поршнем тонкую плёнку; перемещай поршень влево-вправо и наблюдай за изменением положения плёнки; объясни результат.\n• 🔗 [Симулятор работы давления в замкнутом объёме](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)",
    "en": "## Pressure in liquids and gases\n• Pascal's law: pressure on a liquid or gas is transmitted unchanged to every point of its volume.\n• Pressure at depth:\n> p = ρ · g · h\n• Pressure grows with depth.\n• States of matter: solid, liquid, gas.\n## Experimental tasks\n• Experimental task: stretch a thin film over a cylinder with a piston; move the piston left and right and watch how the film changes; explain the result.\n• 🔗 [Simulator of pressure in a closed volume](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)",
    "kk": "## Сұйықтар мен газдардағы қысым\n• Паскаль заңы: сұйыққа немесе газға түсірілген қысым көлемнің әр нүктесіне өзгеріссіз беріледі.\n• Тереңдіктегі қысым:\n> p = ρ · g · h\n• Тереңдік артқан сайын қысым артады.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: поршені бар цилиндрге жұқа қабықша кер; поршеньді солға-оңға жылжытып, қабықшаның өзгеруін бақыла; нәтижені түсіндір.\n• 🔗 [Тұйық көлемдегі қысым жұмысының симуляторы](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)"
  },
  "p24": {
    "ru": "## Сообщающиеся сосуды\n• Сообщающиеся сосуды — сосуды, соединённые между собой.\n• Однородная жидкость в сообщающихся сосудах устанавливается на одном уровне.\n• Для разных жидкостей высота столба обратно пропорциональна плотности.\n• Применение: чайник, водонапорная башня, водомерное стекло, шлюзы.\n## Экспериментальные задания\n• Экспериментальное задание: заполни гибкую трубку подкрашенной жидкостью и меняй положение одного конца; наблюдай за уровнем жидкости и объясни.\n• 🔗 [Опыт «Сообщающиеся сосуды»](https://vk.com/video-211506589_456239651)\n• 🔗 [Симулятор сообщающихся сосудов](https://gemini.google.com/share/e6f7f3488672)",
    "en": "## Communicating vessels\n• Communicating vessels are vessels joined together.\n• A homogeneous liquid settles at the same level in them.\n• For different liquids, column height is inversely proportional to density.\n• Applications: teapots, water towers, canal locks.\n## Experimental tasks\n• Experimental task: fill a flexible tube with coloured liquid and change the position of one end; watch the liquid level and explain.\n• 🔗 [Experiment «Communicating vessels»](https://vk.com/video-211506589_456239651)\n• 🔗 [Simulator of communicating vessels](https://gemini.google.com/share/e6f7f3488672)",
    "kk": "## Қатынас ыдыстар\n• Қатынас ыдыстар — бір-бірімен жалғанған ыдыстар.\n• Біртекті сұйық қатынас ыдыстарда бірдей деңгейде орналасады.\n• Әртүрлі сұйықтар үшін баған биіктігі тығыздыққа кері пропорционал.\n• Қолданылуы: шәйнек, су мұнарасы, шлюздер.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: иілгіш түтікті боялған сұйықпен толтырып, бір ұшының орнын өзгерт; сұйық деңгейін бақылап, түсіндір.\n• 🔗 [«Қатынас ыдыстар» тәжірибесі](https://vk.com/video-211506589_456239651)\n• 🔗 [Қатынас ыдыстар симуляторы](https://gemini.google.com/share/e6f7f3488672)"
  },
  "p25": {
    "ru": "## Гидравлическая машина\n• Гидравлическая машина — устройство, действие которого основано на законах движения и равновесия жидкостей.\n• Гидравлический пресс — машина для обработки материалов давлением.\n> F_2 / F_1 = S_2 / S_1\n• Выигрыш в силе равен отношению площадей поршней.\n• Применение: домкрат, тормозная система автомобилей.",
    "en": "## Hydraulic machine\n• A hydraulic machine works on the laws of liquid motion and equilibrium.\n• A hydraulic press shapes materials by pressure.\n> F_2 / F_1 = S_2 / S_1\n• The gain in force equals the ratio of piston areas.\n• Used in jacks and car brake systems.",
    "kk": "## Гидравликалық машина\n• Гидравликалық машина — сұйықтың қозғалыс және тепе-теңдік заңдарына негізделген құрылғы.\n• Гидравликалық пресс — материалдарды қысыммен өңдейтін машина.\n> F_2 / F_1 = S_2 / S_1\n• Күштен ұту поршеньдер аудандарының қатынасына тең."
  },
  "p26": {
    "ru": "## Атмосферное давление\n• Атмосферное давление — давление атмосферы на поверхность Земли и тела на ней.\n• Нормальное атмосферное давление — давление столба ртути высотой 760 мм при 0 °C.\n> 1 атм ≈ 101 300 Па ≈ 101,3 кПа\n• Барометр — прибор для измерения атмосферного давления.\n• С высотой атмосферное давление уменьшается.\n## Экспериментальные задания\n• Экспериментальное задание: погрузи стакан в воду, переверни и медленно вытаскивай; объясни, почему уровень воды в стакане выше; рассчитай силу давления воздуха на раскрытую тетрадь.\n• 🔗 [Симулятор атмосферного давления](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [Чем удерживается вода в перевёрнутом стакане?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Калькулятор силы атмосферного давления](https://gemini.google.com/share/571f141dd222)",
    "en": "## Atmospheric pressure\n• Atmospheric pressure is the pressure of the atmosphere on the Earth's surface and bodies.\n• Normal atmospheric pressure equals a 760 mm mercury column at 0 °C.\n> 1 atm ≈ 101 300 Pa ≈ 101.3 kPa\n• A barometer measures atmospheric pressure.\n• Pressure decreases with altitude.\n## Experimental tasks\n• Experimental task: dip a glass into water, turn it upside down and slowly pull it out; explain why the water level in the glass is higher; calculate the force of air pressure on an open notebook.\n• 🔗 [Simulator of atmospheric pressure](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [What holds water in an inverted glass?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Calculator of atmospheric pressure force](https://gemini.google.com/share/571f141dd222)",
    "kk": "## Атмосфералық қысым\n• Атмосфералық қысым — атмосфераның Жер бетіне және денелерге қысымы.\n• Қалыпты атмосфералық қысым — 0 °C-та 760 мм сынап бағанының қысымы.\n> 1 атм ≈ 101 300 Па ≈ 101,3 кПа\n• Барометр — атмосфералық қысымды өлшейтін құрал.\n• Биіктік артқан сайын қысым азаяды.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: стақанды суға батырып, төңкеріп, баяу шығар; стақандағы су деңгейінің неге жоғары екенін түсіндір; ашық дәптерге ауаның қысым күшін есепте.\n• 🔗 [Атмосфералық қысым симуляторы](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [Төңкерілген стақандағы суды не ұстап тұр?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Атмосфералық қысым күшінің калькуляторы](https://gemini.google.com/share/571f141dd222)"
  },
  "p27": {
    "ru": "## Манометры и насосы\n• Манометр — прибор для измерения давления большего или меньшего атмосферного.\n• Насосы создают разность давлений и поднимают жидкость.\n• Поршневой насос работает за счёт движения поршня; центробежный — за счёт вращения.\n• Работа насоса основана на разности давлений.\n## Экспериментальные задания\n• Экспериментальное задание: из подручного материала изготовь жидкостный манометр; продумай способ определения давления воздуха внутри надутого шарика.\n• 🔗 [Демонстрация изготовления жидкостного манометра](https://youtu.be/CGn4kWsXe-I)",
    "en": "## Manometers and pumps\n• A manometer measures pressure greater or smaller than atmospheric.\n• Pumps lift liquid by creating a pressure difference.\n• Piston pumps work by piston motion; centrifugal pumps by rotation.\n## Experimental tasks\n• Experimental task: make a liquid manometer from scrap materials; think of a way to find the air pressure inside an inflated balloon.\n• 🔗 [Demonstration of making a liquid manometer](https://youtu.be/CGn4kWsXe-I)",
    "kk": "## Манометрлер мен сорғылар\n• Манометр — атмосфералықтан үлкен немесе кіші қысымды өлшейтін құрал.\n• Сорғылар қысым айырмасын жасап, сұйықты көтереді.\n• Поршеньді сорғы поршень қозғалысымен, орталықтан тепкіш сорғы айналумен жұмыс істейді.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдағы материалдан сұйықтық манометр жаса; үрленген шар ішіндегі ауа қысымын анықтау тәсілін ойлап тап.\n• 🔗 [Сұйықтық манометр жасау көрсетілімі](https://youtu.be/CGn4kWsXe-I)"
  },
  "p28": {
    "ru": "## Выталкивающая сила. Закон Архимеда\n• Закон Архимеда: тело, погружённое в жидкость или газ, теряет в весе столько, сколько весит жидкость (газ) в объёме этого тела.\n> F_А = ρ_ж · g · V_т\n• Сила Архимеда направлена вверх и равна весу вытесненной жидкости.\n• Действует на тела, погружённые в жидкость или газ.",
    "en": "## Buoyant force. Archimedes' law\n• Archimedes' law: a body in a liquid or gas loses as much weight as the weight of the displaced liquid (gas).\n> F = ρ_liquid · g · V_body\n• The buoyant force acts upward and equals the weight of the displaced liquid.",
    "kk": "## Кері итеруші күш. Архимед заңы\n• Архимед заңы: сұйыққа немесе газға батырылған дене салмағынан ығыстырылған сұйық (газ) салмағындай жоғалтады.\n> F_А = ρ_с · g · V_д\n• Архимед күші жоғары бағытталып, ығыстырылған сұйық салмағына тең."
  },
  "p29": {
    "ru": "## Условия плавания тел\n• Тело тонет, если сила тяжести больше силы Архимеда (ρ_т > ρ_ж).\n• Плавает внутри жидкости, если силы равны (ρ_т = ρ_ж).\n• Всплывает, если сила Архимеда больше силы тяжести (ρ_т < ρ_ж).\n• Применение: корабли, подводные лодки, ареометры, воздухоплавание.\n## Экспериментальные задания\n• Экспериментальное задание: брось виноградинку в сильно газированную воду и проследи, как она периодически тонет и всплывает; объясни.\n• 🔗 [Интерактивный симулятор Buoyancy](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Опыт с виноградинкой в газированной воде](https://youtu.be/JldV-8xJr6g)",
    "en": "## Floating conditions\n• A body sinks if gravity exceeds the buoyant force (ρ_body > ρ_liquid).\n• Floats inside if the forces are equal (ρ_body = ρ_liquid).\n• Rises if the buoyant force exceeds gravity (ρ_body < ρ_liquid).\n• Applications: ships, submarines, hydrometers, aerostats.\n## Experimental tasks\n• Experimental task: drop a grape into strongly carbonated water and watch it sink and rise periodically; explain.\n• 🔗 [Interactive simulator Buoyancy](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Experiment with a grape in carbonated water](https://youtu.be/JldV-8xJr6g)",
    "kk": "## Денелердің жүзу шарттары\n• Дене батады, егер ауырлық күші Архимед күшінен артық (ρ_д > ρ_с).\n• Сұйық ішінде жүзеді, егер күштер тең (ρ_д = ρ_с).\n• Қалқып шығады, егер Архимед күші ауырлық күшінен артық (ρ_д < ρ_с).\n• Қолданылуы: кемелер, сүңгуір қайықтар, ареометрлер.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: жүзімді қатты газдалған суға тастап, оның кезекпен батып, қалқып шығуын бақыла; түсіндір.\n• 🔗 [Интерактивті Buoyancy симуляторы](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Газдалған судағы жүзім тәжірибесі](https://youtu.be/JldV-8xJr6g)"
  },
  "p30": {
    "ru": "## Механическая работа. Мощность\n• Механическая работа — работа силы, под воздействием которой тело перемещается.\n> A = F · s\n• Единица работы — джоуль (Дж): 1 Дж = 1 Н·м.\n• Если нет перемещения, работа не совершается.\n## Мощность\n• Мощность — физическая величина, характеризующая быстроту выполнения работы.\n> N = A / t\n• Единица мощности — ватт (Вт): 1 Вт = 1 Дж/с.\n## Экспериментальные задания\n• Экспериментальное задание: рассчитай работу при ходьбе из дома в школу и обратно (≈20 Дж на шаг) и развиваемую при этом мощность.\n• 🔗 [Решение задач. Применение формулы работы](https://youtu.be/Ym-F4DbqrA0)",
    "en": "## Work. Power\n• Work is done by a force that moves a body.\n> A = F · s\n• Unit: joule (J), 1 J = 1 N·m.\n## Power\n• Power shows how fast work is done.\n> N = A / t\n• Unit: watt (W), 1 W = 1 J/s.\n## Experimental tasks\n• Experimental task: calculate the work done walking from home to school and back (≈20 J per step) and the power developed.\n• 🔗 [Solving problems. Applying the work formula](https://youtu.be/Ym-F4DbqrA0)",
    "kk": "## Механикалық жұмыс. Қуат\n• Механикалық жұмыс — денені орын ауыстыратын күштің жұмысы.\n> A = F · s\n• Бірлігі — джоуль (Дж): 1 Дж = 1 Н·м.\n## Қуат\n• Қуат — жұмыстың орындалу жылдамдығын сипаттайтын шама.\n> N = A / t\n• Бірлігі — ватт (Вт): 1 Вт = 1 Дж/с.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: үйден мектепке барып қайтқандағы жұмысты (әр қадамға ≈20 Дж) және соған сәйкес қуатты есепте.\n• 🔗 [Есептер шығару. Жұмыс формуласын қолдану](https://youtu.be/Ym-F4DbqrA0)"
  },
  "p31": {
    "ru": "## Энергия\n• Энергия — величина, характеризующая способность тела совершить механическую работу.\n• Работа — мера изменения энергии тела.\n## Кинетическая энергия\n• Кинетическая энергия — энергия движущихся тел.\n> E_к = m · v^2 / 2\n• Зависит от массы и скорости тела.\n## Потенциальная энергия\n• Потенциальная энергия — энергия взаимодействия тел или частей одного тела.\n> E_п = m · g · h\n## Экспериментальные задания\n• Экспериментальное задание: продумай эксперимент по проверке зависимости кинетической энергии от массы и скорости тела (используй связь работы и энергии); оформи письменный отчёт.\n• 🔗 [Зависимость кинетической энергии от скорости и массы](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Лабораторная установка (отчёт по эксперименту)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)",
    "en": "## Energy\n• Energy is the ability of a body to do work.\n• Work is a measure of the change in energy.\n## Kinetic energy\n• Kinetic energy is the energy of moving bodies.\n> E = m · v^2 / 2\n• It depends on mass and speed.\n## Potential energy\n• Potential energy is the energy of interaction of bodies.\n> E = m · g · h\n## Experimental tasks\n• Experimental task: plan an experiment to check how kinetic energy depends on mass and speed (using the work–energy relation); write a written report.\n• 🔗 [Dependence of kinetic energy on speed and mass](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Laboratory setup (experiment report)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)",
    "kk": "## Энергия\n• Энергия — дененің жұмыс істеу қабілетін сипаттайтын шама.\n• Жұмыс — энергияның өзгеру өлшемі.\n## Кинетикалық энергия\n• Кинетикалық энергия — қозғалатын денелердің энергиясы.\n> E_к = m · v^2 / 2\n• Масса мен жылдамдыққа тәуелді.\n## Потенциалдық энергия\n• Потенциалдық энергия — денелердің өзара әрекеттесу энергиясы.\n> E_п = m · g · h\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: кинетикалық энергияның масса мен жылдамдыққа тәуелділігін тексеру тәжірибесін ойлап тап (жұмыс пен энергия байланысын қолдан); жазбаша есеп дайында.\n• 🔗 [Кинетикалық энергияның жылдамдық пен массаға тәуелділігі](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Зертханалық қондырғы (тәжірибе есебі)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)"
  },
  "p32": {
    "ru": "## Превращение и сохранение энергии\n• Полная механическая энергия — сумма кинетической и потенциальной энергий.\n> E = E_к + E_п\n• Закон сохранения полной механической энергии: полная механическая энергия замкнутой системы тел, взаимодействующих силами тяготения или упругости, остаётся неизменной.\n• Энергия переходит из одного вида в другой: потенциальная ↔ кинетическая.\n## Экспериментальные задания\n• Экспериментальное задание: определи, какая часть полной механической энергии теннисного шарика теряется при одном подскоке; сделай вывод о передаче энергии.\n• 🔗 [Эксперимент. Упругий и неупругий удары](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Модель преобразования энергии (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)",
    "en": "## Energy transformation and conservation\n• Total mechanical energy is the sum of kinetic and potential energy.\n> E = E_kinetic + E_potential\n• Law of conservation: the total mechanical energy of a closed system interacting by gravity or elastic forces stays constant.\n• Energy transforms from one kind into another.\n## Experimental tasks\n• Experimental task: find what part of the total mechanical energy of a tennis ball is lost in one bounce; draw a conclusion about energy transfer.\n• 🔗 [Experiment. Elastic and inelastic collisions](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Energy transformation model (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)",
    "kk": "## Энергияның айналуы мен сақталуы\n• Толық механикалық энергия — кинетикалық және потенциалдық энергиялардың қосындысы.\n> E = E_к + E_п\n• Сақталу заңы: тартылыс немесе серпімділік күштерімен әрекеттесетін тұйық жүйенің толық механикалық энергиясы өзгеріссіз қалады.\n• Энергия бір түрден екіншісіне ауысады.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: теннис добының бір рет секіргенде толық механикалық энергиясының қандай бөлігін жоғалтатынын анықта; энергияның берілуі туралы қорытынды жаса.\n• 🔗 [Тәжірибе. Серпімді және серпімсіз соқтығыстар](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Энергияның түрлену моделі (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)"
  },
  "p33": {
    "ru": "## Простые механизмы\n• Простые механизмы — приспособления, служащие для преобразования силы.\n• Рычаг — твёрдое тело, которое может вращаться вокруг неподвижной опоры.\n• Плечо силы — кратчайшее расстояние от оси вращения до линии действия силы.\n• Блок: неподвижный меняет направление силы; подвижный даёт выигрыш в силе в 2 раза.\n• Наклонная плоскость и ворот также дают выигрыш в силе.\n## Экспериментальные задания\n• Экспериментальное задание: возьми ножницы разных видов, кусачки и линейку; определи выигрыш в силе при использовании этих инструментов.\n• 🔗 [Интерактивная модель рычага (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)",
    "en": "## Simple machines\n• Simple machines transform force.\n• A lever is a rigid body that can rotate about a fixed support.\n• The force arm is the shortest distance from the axis to the line of action of the force.\n• A fixed pulley changes the direction; a movable pulley doubles the force.\n• The inclined plane and windlass also give a gain in force.\n## Experimental tasks\n• Experimental task: take scissors of different kinds, pliers and a ruler; determine the gain in force when using these tools.\n• 🔗 [Interactive lever model (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)",
    "kk": "## Қарапайым механизмдер\n• Қарапайым механизмдер — күшті түрлендіруге арналған құрылғылар.\n• Рычаг — қозғалмайтын тірек маңайында айнала алатын қатты дене.\n• Күш иіні — айналу осінен күш әсер сызығына дейінгі ең қысқа қашықтық.\n• Жылжымайтын блок күш бағытын өзгертеді; жылжымалы блок күштен 2 есе ұтыс береді.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: әртүрлі қайшыларды, қысқышты және сызғышты алып, осы құралдарды қолданғандағы күштен ұтысты анықта.\n• 🔗 [Интерактивті рычаг моделі (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)"
  },
  "p34": {
    "ru": "## Центр масс\n• Центр масс — точка пересечения прямых, вдоль которых должны быть направлены силы, чтобы тело двигалось поступательно.\n• Центр тяжести — точка, к которой приложена равнодействующая сил тяжести, действующих на каждую точку тела.\n• У однородных тел правильной формы центр масс — в геометрическом центре.\n• Устойчивость тела зависит от положения центра масс: чем ниже центр масс, тем устойчивее тело.\n## Экспериментальные задания\n• Экспериментальное задание: определи центр масс тела неправильной формы (например, транспортира).\n• 🔗 [Демонстрация определения центра масс](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)",
    "en": "## Centre of mass\n• The centre of mass is the point where the whole mass is concentrated.\n• The centre of gravity is where the resultant of gravity forces is applied.\n• For uniform symmetric bodies it is at the geometric centre.\n• The lower the centre of mass, the more stable the body.\n## Experimental tasks\n• Experimental task: find the centre of mass of an irregular body (e.g. a protractor).\n• 🔗 [Demonstration of finding the centre of mass](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)",
    "kk": "## Массалар центрі\n• Массалар центрі — дененің барлық массасы шоғырланғандай нүкте.\n• Ауырлық центрі — әр нүктеге әсер ететін ауырлық күштерінің теңәрекетті күші түсетін нүкте.\n• Біртекті дұрыс пішінді денелерде ол геометриялық ортада.\n• Массалар центрі неғұрлым төмен болса, дене соғұрлым орнықты.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: дұрыс емес пішінді дененің (мысалы, транспортирдің) массалар центрін анықта.\n• 🔗 [Массалар центрін анықтау көрсетілімі](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)"
  },
  "p35": {
    "ru": "## Условие равновесия рычага\n• Момент силы — произведение силы на её плечо.\n> M = F · l\n• Рычаг в равновесии, если момент силы, вращающей по часовой стрелке, равен моменту силы, вращающей против часовой стрелки.\n> F_1 · l_1 = F_2 · l_2\n• Силы, действующие на рычаг, обратно пропорциональны плечам.\n• «Золотое правило» механики: во сколько раз выигрываем в силе, во столько раз проигрываем в расстоянии.\n## Экспериментальные задания\n• Экспериментальное задание: проверь соотношение сил и плеч на равноплечем рычаге и на рычаге с разными плечами; собери устойчивую конструкцию из двух вилок и зубочистки.\n• 🔗 [Равенство сил при равных плечах](https://youtu.be/2RPuG362_mI)\n• 🔗 [Интерактивная демонстрация (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Наглядный опыт с объяснением устойчивости](https://youtube.com/shorts/f_0ZGW9NqaI)",
    "en": "## Lever equilibrium\n• Moment of force is the force multiplied by its arm.\n> M = F · l\n• A lever is balanced when the clockwise moment equals the counter-clockwise moment.\n> F_1 · l_1 = F_2 · l_2\n• The golden rule: what we gain in force we lose in distance.\n## Experimental tasks\n• Experimental task: check the ratio of forces and arms on an equal-arm lever and on a lever with different arms; build a stable construction from two forks and a toothpick.\n• 🔗 [Equality of forces with equal arms](https://youtu.be/2RPuG362_mI)\n• 🔗 [Interactive demonstration (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Visual experiment explaining stability](https://youtube.com/shorts/f_0ZGW9NqaI)",
    "kk": "## Рычаг тепе-теңдігі\n• Күш моменті — күштің иініне көбейтіндісі.\n> M = F · l\n• Сағат тілімен және оған қарсы айналдыратын күштердің моменттері тең болғанда рычаг тепе-теңдікте.\n> F_1 · l_1 = F_2 · l_2\n• «Алтын ереже»: күштен қанша ұтсақ, қашықтықтан сонша ұтыламыз.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: иіндері тең және әртүрлі рычагтарда күштер мен иіндер қатынасын тексер; екі шанышқы мен тіс шұқығыштан тұрақты конструкция құрастыр.\n• 🔗 [Иіндер тең болғандағы күштер теңдігі](https://youtu.be/2RPuG362_mI)\n• 🔗 [Интерактивті көрсетілім (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Тұрақтылықты түсіндіретін көрнекі тәжірибе](https://youtube.com/shorts/f_0ZGW9NqaI)"
  },
  "p36": {
    "ru": "## КПД\n• Коэффициент полезного действия — отношение полезной работы к полной (затраченной) работе.\n> η = A_полез / A_затрач · 100%\n• КПД всегда меньше 100% из-за трения и других потерь.\n• Затраченная работа = полезная работа + потери.\n## Пример: наклонная плоскость\n• A_полез = m · g · h; A_затрач = F · s.\n## Экспериментальные задания\n• Экспериментальное задание: из подручного материала изготовь подвижный блок, ворот и наклонную плоскость; определи, КПД какого механизма наибольший.\n• 🔗 [Создание подвижного блока, ворота и наклонной плоскости](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)",
    "en": "## Efficiency\n• Efficiency is the ratio of useful work to total work.\n> η = A_useful / A_total · 100%\n• It is always below 100% because of friction losses.\n## Example: inclined plane\n• A_useful = m · g · h; A_total = F · s.\n## Experimental tasks\n• Experimental task: build a movable pulley, a windlass and an inclined plane from scrap materials; find which mechanism has the highest efficiency.\n• 🔗 [Building a movable pulley, windlass and inclined plane](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)",
    "kk": "## ПӘК\n• Пайдалы әсер коэффициенті — пайдалы жұмыстың толық жұмысқа қатынасы.\n> η = A_пайдалы / A_жұмсалған · 100%\n• Үйкеліс шығындарынан ПӘК әрқашан 100%-дан кем.\n## Мысал: көлбеу жазықтық\n• A_пайдалы = m · g · h; A_жұмсалған = F · s.\n## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдағы материалдан жылжымалы блок, шығыр және көлбеу жазықтық жаса; қай механизмнің ПӘК-і ең үлкен екенін анықта.\n• 🔗 [Жылжымалы блок, шығыр және көлбеу жазықтық жасау](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)"
  },
  "p37": {
    "ru": "## Наука о небесных телах\n• Астрономия — наука, изучающая движение, строение, происхождение и развитие небесных тел и их систем.\n• Астероид — небольшое небесное тело, движущееся по орбите вокруг Солнца.\n• Комета — небесное тело, движущееся вокруг Солнца по вытянутой орбите.\n• Метеор — явление сгорания в атмосфере мелких тел («падающая звезда»).\n• Метеорит — каменное небесное тело, упавшее на поверхность Земли.",
    "en": "## Science of celestial bodies\n• Astronomy studies the motion, structure, origin and evolution of celestial bodies.\n• An asteroid is a small body orbiting the Sun.\n• A comet moves around the Sun in an elongated orbit.\n• A meteor is the burning of small bodies in the atmosphere.\n• A meteorite is a rocky body that fell to Earth.",
    "kk": "## Аспан денелері туралы ғылым\n• Астрономия — аспан денелері мен олардың жүйелерінің қозғалысын, құрылысын, пайда болуын және дамуын зерттейтін ғылым.\n• Астероид — Күнді орбита бойымен айналатын кіші аспан денесі.\n• Комета — Күнді созылыңқы орбитамен айналатын дене.\n• Метеор — ұсақ денелердің атмосферада жану құбылысы.\n• Метеорит — Жер бетіне құлаған тасты аспан денесі."
  },
  "p38": {
    "ru": "## Солнечная система\n• Солнечная система: Солнце, 8 планет, их спутники, астероиды и кометы.\n• Порядок планет от Солнца: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун.\n• Земля — третья планета; Луна — её спутник.\n• Гелиоцентрическая система мира — в центре Солнце; геоцентрическая — в центре Земля.",
    "en": "## Solar system\n• The Solar System: the Sun, 8 planets, their moons, asteroids and comets.\n• Order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n• Earth is the third planet; the Moon is its satellite.\n• Heliocentric system: the Sun in the centre; geocentric: the Earth in the centre.",
    "kk": "## Күн жүйесі\n• Күн жүйесі: Күн, 8 планета, олардың серіктері, астероидтар мен кометалар.\n• Күннен тәртібі: Меркурий, Шолпан, Жер, Марс, Юпитер, Сатурн, Уран, Нептун.\n• Жер — үшінші планета; Ай — оның серігі.\n• Гелиоцентрлік жүйе — ортада Күн; геоцентрлік — ортада Жер."
  },
  "p39": {
    "ru": "## Основы календаря\n• Календарь — система счисления больших промежутков времени, основанная на периодичности движения небесных тел.\n• Тропический год — полный оборот Земли вокруг Солнца ≈ 365,25 суток.\n• Високосный год — 366 дней (29 февраля), бывает раз в 4 года.\n• Сутки — период вращения Земли вокруг оси; месяц связан с движением Луны.",
    "en": "## Calendar basics\n• A calendar is a system of counting long time intervals based on the periodicity of celestial motion.\n• A tropical year — one full revolution of the Earth around the Sun ≈ 365.25 days.\n• A leap year has 366 days (29 February) every 4 years.\n• A day is the Earth's rotation period; a month is linked to the Moon's motion.",
    "kk": "## Күнтізбе негіздері\n• Күнтізбе — аспан денелері қозғалысының мерзімділігіне негізделген ұзақ уақытты есептеу жүйесі.\n• Тропикалық жыл — Жердің Күнді толық айналуы ≈ 365,25 тәулік.\n• Кібісе жылы — 366 күн (29 ақпан), 4 жылда бір келеді.\n• Тәулік — Жердің өз осінен айналу периоды; ай — Айдың қозғалысымен байланысты."
  },
  "lab1": {
    "ru": "## Лабораторная работа: размеры малых тел\n• Метод рядов: малые тела (горошины, дробинки) укладывают плотно в ряд.\n• Размер одного тела = длина ряда ÷ число тел в ряду.\n> d = L / n\n• Чем больше тел в ряду, тем точнее результат.\n## Цель работы\n• определять размер малых тел методом рядов.\n## Видео и материалы\n• 🔗 [Виртуальная лабораторная работа №1 «Измерение размеров малых тел»](https://youtu.be/xvBGMh5R_jg)\n• 🔗 [Виртуальная лабораторная работа (Google Gemini)](https://gemini.google.com/share/c7e5587f0de5)",
    "en": "## Lab: sizes of small bodies\n• Row method: small bodies are packed tightly in a row.\n• Size of one body = row length ÷ number of bodies.\n> d = L / n\n• More bodies in the row — more accurate result.\n## Goal of the work\n• determine the size of small bodies by the row method.\n## Videos and materials\n• 🔗 [Virtual lab work №1 «Measuring the size of small bodies»](https://youtu.be/xvBGMh5R_jg)\n• 🔗 [Virtual lab work (Google Gemini)](https://gemini.google.com/share/c7e5587f0de5)",
    "kk": "## Зертханалық жұмыс: ұсақ денелердің өлшемдері\n• Қатар әдісі: ұсақ денелерді қатарға тығыз орналастырады.\n• Бір дененің өлшемі = қатар ұзындығы ÷ денелер саны.\n> d = L / n\n• Қатардағы дене неғұрлым көп болса, нәтиже соғұрлым дәл.\n## Жұмыстың мақсаты\n• ұсақ денелердің өлшемдерін қатар әдісімен анықтау.\n## Бейнелер мен материалдар\n• 🔗 [№1 виртуалды зертханалық жұмыс «Ұсақ денелердің өлшемдерін өлшеу»](https://youtu.be/xvBGMh5R_jg)\n• 🔗 [Виртуалды зертханалық жұмыс (Google Gemini)](https://gemini.google.com/share/c7e5587f0de5)"
  },
  "lab2": {
    "ru": "## Лабораторная работа: измерение величин\n• Длину измеряют линейкой, объём — мензуркой, время — секундомером.\n• Сначала определи цену деления прибора.\n• Результат записывай с погрешностью: A = a ± Δa.\n## Цель работы\n• измерять длину, объём тела, температуру и время; записывать результаты измерений с учётом погрешности.\n## Видео и материалы\n• 🔗 [Цена деления измерительного прибора](https://vt.tiktok.com/ZSam1nP61/)\n• 🔗 [Определение погрешности](https://youtu.be/rmljEEUpwr8)\n• 🔗 [Симулятор определения объёма тела методом вытеснения воды](https://phet.colorado.edu/en/simulations/density)",
    "en": "## Lab: measuring quantities\n• Measure length with a ruler, volume with a cylinder, time with a stopwatch.\n• First find the scale division of the instrument.\n• Record results with uncertainty: A = a ± Δa.\n## Goal of the work\n• measure length, body volume, temperature and time; record the measurement results with the measurement error.\n## Videos and materials\n• 🔗 [Scale value of a measuring instrument](https://vt.tiktok.com/ZSam1nP61/)\n• 🔗 [Determining the measurement error](https://youtu.be/rmljEEUpwr8)\n• 🔗 [Simulator of finding body volume by water displacement](https://phet.colorado.edu/en/simulations/density)",
    "kk": "## Зертханалық жұмыс: шамаларды өлшеу\n• Ұзындықты сызғышпен, көлемді мензуркамен, уақытты секундомермен өлшейді.\n• Алдымен аспаптың бөлік құнын анықта.\n• Нәтижені қателігімен жаз: A = a ± Δa.\n## Жұмыстың мақсаты\n• дененің ұзындығын, көлемін, температурасын және уақытты өлшеу; өлшеу нәтижелерін қателікті ескеріп жазу.\n## Бейнелер мен материалдар\n• 🔗 [Өлшеуіш аспаптың бөлік құны](https://vt.tiktok.com/ZSam1nP61/)\n• 🔗 [Қателікті анықтау](https://youtu.be/rmljEEUpwr8)\n• 🔗 [Суды ығыстыру әдісімен дене көлемін анықтау симуляторы](https://phet.colorado.edu/en/simulations/density)"
  },
  "lab3": {
    "ru": "## Лабораторная работа: плотность\n• Массу тела определи весами, объём — мензуркой.\n> ρ = m / V\n• Вычисли плотность и сравни с табличным значением вещества.\n## Цель работы\n• научиться определять плотность жидкостей и твёрдого тела с помощью рычажных весов, линейки и измерительного цилиндра.\n## Видео и материалы\n• 🔗 [Плотность вещества и единицы измерения плотности](https://youtu.be/Fda5RH3wIxQ)",
    "en": "## Lab: density\n• Find mass with a balance and volume with a cylinder.\n> ρ = m / V\n• Calculate density and compare with table values.\n## Goal of the work\n• learn to determine the density of liquids and a solid using lever scales, a ruler and a measuring cylinder.\n## Videos and materials\n• 🔗 [Density of matter and units of density](https://youtu.be/Fda5RH3wIxQ)",
    "kk": "## Зертханалық жұмыс: тығыздық\n• Массаны таразымен, көлемді мензуркамен анықта.\n> ρ = m / V\n• Тығыздықты есептеп, кесте мәнімен салыстыр.\n## Жұмыстың мақсаты\n• таразы, сызғыш және өлшеуіш цилиндр арқылы сұйықтар мен қатты дененің тығыздығын анықтауды үйрену.\n## Бейнелер мен материалдар\n• 🔗 [Заттың тығыздығы және тығыздық өлшем бірліктері](https://youtu.be/Fda5RH3wIxQ)"
  },
  "lab4": {
    "ru": "## Лабораторная работа: упругие деформации\n• Подвешивай грузы к пружине и измеряй удлинение.\n> F_упр = k · Δl\n• Построй график F(Δl); по наклону найди жёсткость k.\n## Цель работы\n• определить коэффициент жёсткости по графику зависимости силы упругости от удлинения.\n## Видео и материалы\n• 🔗 [Лабораторная работа №4 «Изучение упругих деформаций»](https://youtu.be/RyGGYzpV3as)",
    "en": "## Lab: elastic deformation\n• Hang weights on a spring and measure the extension.\n> F = k · Δl\n• Plot F(Δl); the slope gives the stiffness k.\n## Goal of the work\n• determine the stiffness from the graph of elastic force versus extension.\n## Videos and materials\n• 🔗 [Lab work №4 «Studying elastic deformations»](https://youtu.be/RyGGYzpV3as)",
    "kk": "## Зертханалық жұмыс: серпімді деформация\n• Серіппеге жүктер іліп, ұзаруды өлше.\n> F_с = k · Δl\n• F(Δl) графигін сал; еңістігі бойынша k қатаңдықты тап.\n## Жұмыстың мақсаты\n• серпімділік күшінің ұзаруға тәуелділік графигі бойынша қатаңдық коэффициентін анықтау.\n## Бейнелер мен материалдар\n• 🔗 [№4 зертханалық жұмыс «Серпімді деформацияларды зерттеу»](https://youtu.be/RyGGYzpV3as)"
  },
  "lab5": {
    "ru": "## Лабораторная работа: сила трения\n• Силу трения измеряют динамометром при равномерном движении тела.\n• Сравни трение скольжения и качения.\n• Трение зависит от материала поверхностей и веса тела.\n## Цель работы\n• исследовать зависимость силы трения скольжения от силы реакции опоры, от площади соприкосновения; определить коэффициент трения поверхностей.\n## Видео и материалы\n• 🔗 [Сила трения. Учёт трения в технике](https://youtu.be/WHOYzydZIfk)",
    "en": "## Lab: friction force\n• Measure friction with a dynamometer during uniform motion.\n• Compare sliding and rolling friction.\n• Friction depends on surface material and body weight.\n## Goal of the work\n• study how sliding friction depends on the normal reaction force and the contact area; determine the coefficient of friction of the surfaces.\n## Videos and materials\n• 🔗 [Friction force. Accounting for friction in technology](https://youtu.be/WHOYzydZIfk)",
    "kk": "## Зертханалық жұмыс: үйкеліс күші\n• Үйкеліс күшін бірқалыпты қозғалыс кезінде динамометрмен өлшейді.\n• Сырғанау мен домалау үйкелісін салыстыр.\n• Үйкеліс бет материалына және дене салмағына тәуелді.\n## Жұмыстың мақсаты\n• сырғанау үйкеліс күшінің тірек реакция күші мен жанасу ауданына тәуелділігін зерттеу; беттердің үйкеліс коэффициентін анықтау.\n## Бейнелер мен материалдар\n• 🔗 [Үйкеліс күші. Техникада үйкелісті ескеру](https://youtu.be/WHOYzydZIfk)"
  },
  "lab6": {
    "ru": "## Лабораторная работа: закон Архимеда\n• Определи вес тела в воздухе и в воде.\n• Выталкивающая сила — разность весов.\n> F_А = P_возд − P_вода\n• Сравни с весом вытесненной воды: F_А = ρ_ж · g · V_т.\n## Цель работы\n• определить силу Архимеда, сравнить её с весом вытесненной телом воды; исследовать её зависимость от объёма тела, погружённого в жидкость; знать и соблюдать технику безопасности в кабинете физики.\n## Видео и материалы\n• 🔗 [Закон Архимеда](https://vt.tiktok.com/ZSamhUUQa/)\n• 🔗 [Симулятор измерения силы Архимеда](https://phet.colorado.edu/en/simulations/buoyancy)",
    "en": "## Lab: Archimedes' law\n• Weigh a body in air and in water.\n• The buoyant force is the difference of the weights.\n> F = P_air − P_water\n• Compare with the displaced water weight: F = ρ_liquid · g · V_body.\n## Goal of the work\n• determine the buoyant force and compare it with the weight of the displaced water; study its dependence on the volume of the body immersed in the liquid; know and follow safety rules in the physics classroom.\n## Videos and materials\n• 🔗 [Archimedes' law](https://vt.tiktok.com/ZSamhUUQa/)\n• 🔗 [Simulator of measuring the buoyant force](https://phet.colorado.edu/en/simulations/buoyancy)",
    "kk": "## Зертханалық жұмыс: Архимед заңы\n• Денені ауада және суда өлше.\n• Кері итеруші күш — салмақтардың айырмасы.\n> F_А = P_ауа − P_су\n• Ығыстырылған су салмағымен салыстыр: F_А = ρ_с · g · V_д.\n## Жұмыстың мақсаты\n• Архимед күшін анықтап, ығыстырылған судың салмағымен салыстыру; оның сұйыққа батырылған дене көлеміне тәуелділігін зерттеу; физика кабинетіндегі қауіпсіздік техникасын білу және сақтау.\n## Бейнелер мен материалдар\n• 🔗 [Архимед заңы](https://vt.tiktok.com/ZSamhUUQa/)\n• 🔗 [Архимед күшін өлшеу симуляторы](https://phet.colorado.edu/en/simulations/buoyancy)"
  },
  "lab7": {
    "ru": "## Лабораторная работа: условия плавания тел\n• Наблюдай поведение тел разной плотности в жидкости.\n• Тонет: ρ_т > ρ_ж; плавает: ρ_т = ρ_ж; всплывает: ρ_т < ρ_ж.\n## Цель работы\n• опытным путём определить условия плавания тел в жидкости; сравнить значение силы тяжести и силы Архимеда в случае, когда тело плавает на поверхности жидкости.\n## Видео и материалы\n• 🔗 [Интерактивный симулятор Buoyancy — условия плавания тел](https://phet.colorado.edu/en/simulations/buoyancy)",
    "en": "## Lab: floating conditions\n• Observe bodies of different densities in a liquid.\n• Sinks: ρ_body > ρ_liquid; floats: equal; rises: smaller.\n## Goal of the work\n• find by experiment the conditions for floating bodies in a liquid; compare gravity and buoyant force for a body floating on the liquid surface.\n## Videos and materials\n• 🔗 [Interactive simulator Buoyancy — floating conditions](https://phet.colorado.edu/en/simulations/buoyancy)",
    "kk": "## Зертханалық жұмыс: жүзу шарттары\n• Әртүрлі тығыздықтағы денелердің сұйықтағы әрекетін бақыла.\n• Батады: ρ_д > ρ_с; жүзеді: тең; қалқып шығады: ρ_д < ρ_с.\n## Жұмыстың мақсаты\n• денелердің сұйықта жүзу шарттарын тәжірибе арқылы анықтау; дене сұйық бетінде жүзіп тұрғандағы ауырлық күші мен Архимед күшін салыстыру.\n## Бейнелер мен материалдар\n• 🔗 [Интерактивті Buoyancy симуляторы — жүзу шарттары](https://phet.colorado.edu/en/simulations/buoyancy)"
  },
  "lab8": {
    "ru": "## Лабораторная работа: центр масс\n• Плоскую фигуру подвешивают за разные точки.\n• Линия отвеса каждый раз проходит через центр масс.\n• Точка пересечения линий отвеса — центр масс фигуры.\n## Цель работы\n• нахождение центра масс плоской фигуры.\n## Видео и материалы\n• 🔗 [Видео: объяснение способа определения центра масс тела неправильной формы](https://vkvideo.ru/video-88693796_456239805)",
    "en": "## Lab: centre of mass\n• Hang a flat shape by different points.\n• The plumb line always passes through the centre of mass.\n• The intersection of the plumb lines is the centre of mass.\n## Goal of the work\n• finding the centre of mass of a plane figure.\n## Videos and materials\n• 🔗 [Video: how to find the centre of mass of an irregular body](https://vkvideo.ru/video-88693796_456239805)",
    "kk": "## Зертханалық жұмыс: массалар центрі\n• Жазық фигураны әртүрлі нүктеден асып қояды.\n• Тіктеуіш сызығы әр жолы массалар центрінен өтеді.\n• Тіктеуіш сызықтарының қиылысуы — массалар центрі.\n## Жұмыстың мақсаты\n• жазық фигураның массалар центрін табу.\n## Бейнелер мен материалдар\n• 🔗 [Бейне: дұрыс емес пішінді дененің массалар центрін анықтау тәсілі](https://vkvideo.ru/video-88693796_456239805)"
  },
  "lab9": {
    "ru": "## Лабораторная работа: равновесие рычага\n• Подбирай грузы и плечи, проверяя правило моментов.\n> F_1 · l_1 = F_2 · l_2\n• Рычаг в равновесии, когда моменты сил равны.\n## Цель работы\n• выяснить, при каком условии рычаг находится в равновесии.\n## Видео и материалы\n• 🔗 [Объяснение: что такое момент силы и как найти момент силы, решение задач на тему рычаг](https://youtu.be/A0aNm__VRUo)",
    "en": "## Lab: lever equilibrium\n• Choose weights and arms to verify the rule of moments.\n> F_1 · l_1 = F_2 · l_2\n• A lever is balanced when the moments are equal.\n## Goal of the work\n• find the condition under which a lever is in equilibrium.\n## Videos and materials\n• 🔗 [Explanation: what a moment of force is and how to find it, solving lever problems](https://youtu.be/A0aNm__VRUo)",
    "kk": "## Зертханалық жұмыс: рычаг тепе-теңдігі\n• Моменттер ережесін тексеру үшін жүктер мен иіндерді таңда.\n> F_1 · l_1 = F_2 · l_2\n• Күш моменттері тең болғанда рычаг тепе-теңдікте.\n## Жұмыстың мақсаты\n• рычагтың қандай жағдайда тепе-теңдікте болатынын анықтау.\n## Бейнелер мен материалдар\n• 🔗 [Түсіндірме: күш моменті дегеніміз не және оны қалай табу, рычаг тақырыбына есеп шығару](https://youtu.be/A0aNm__VRUo)"
  },
  "lab10": {
    "ru": "## Лабораторная работа: КПД наклонной плоскости\n• Полезная работа — подъём груза: A_полез = m · g · h.\n• Затраченная работа — сила вдоль плоскости: A_затрач = F · s.\n> η = A_полез / A_затрач · 100%\n• КПД всегда меньше 100% из-за трения.\n## Цель работы\n• убедиться на опыте в том, что полезная работа меньше полной; научиться определять КПД наклонной плоскости; выяснить, как зависит КПД наклонной плоскости от угла её наклона.\n## Видео и материалы\n• 🔗 [Видеодемонстрация эксперимента по определению работы сил и КПД](https://youtu.be/GrmlHU_f88I)",
    "en": "## Lab: inclined plane efficiency\n• Useful work — lifting the load: A_useful = m · g · h.\n• Total work — force along the plane: A_total = F · s.\n> η = A_useful / A_total · 100%\n• Efficiency is always below 100% because of friction.\n## Goal of the work\n• verify by experiment that useful work is less than total work; learn to determine the efficiency of an inclined plane; find how the efficiency depends on its slope angle.\n## Videos and materials\n• 🔗 [Video demonstration of the experiment on finding work of forces and efficiency](https://youtu.be/GrmlHU_f88I)",
    "kk": "## Зертханалық жұмыс: көлбеу жазықтық ПӘК-і\n• Пайдалы жұмыс — жүкті көтеру: A_пайдалы = m · g · h.\n• Жұмсалған жұмыс — жазықтық бойымен күш: A_жұмсалған = F · s.\n> η = A_пайдалы / A_жұмсалған · 100%\n• Үйкелістен ПӘК әрқашан 100%-дан кем.\n## Жұмыстың мақсаты\n• пайдалы жұмыстың толық жұмыстан аз екеніне тәжірибе жүзінде көз жеткізу; көлбеу жазықтықтың ПӘК-ін анықтауды үйрену; ПӘК-тің көлбеу бұрышына тәуелділігін анықтау.\n## Бейнелер мен материалдар\n• 🔗 [Күштер жұмысы мен ПӘК-ті анықтау тәжірибесінің бейнекөрсетілімі](https://youtu.be/GrmlHU_f88I)"
  },
  "custom": {
    "ru": "## Урок учителя\n• Это урок, созданный учителем.\n• Внимательно читай каждый вопрос — темы могут быть разными.\n• Используй подсказки, если затрудняешься.\n• Вспомни теорию пройденных параграфов перед ответом.",
    "en": "## Teacher's lesson\n• This is a lesson created by the teacher.\n• Read every question carefully — topics may vary.\n• Use hints if you get stuck.\n• Recall the theory of the studied topics before answering.",
    "kk": "## Мұғалім сабағы\n• Бұл — мұғалім жасаған сабақ.\n• Әр сұрақты мұқият оқы — тақырыптар әртүрлі болуы мүмкін.\n• Қиналсаң, кеңестерді қолдан.\n• Жауап алдында өткен параграфтардың теориясын еске түсір."
  }
};
const CONSPECT = {
  "p1": {
    "title": "§ 1. Физика — наука о природе",
    "titleEn": "§ 1. Physics: the Science of Nature",
    "titleKk": "§ 1. Физика — табиғат туралы ғылым",
    "ru": "## Ключевые идеи\n• Физика изучает физические явления: механические, тепловые, звуковые, световые, электрические и магнитные.\n• Задача науки — наблюдать явления, объяснять их причины и открывать законы природы.\n• Физика использует точные термины, чтобы одинаково понимать свойства тел и явлений.\n## Определения\n• Физика — наука, изучающая физические явления.\n• Физическое явление — изменение, при котором не происходит превращения одного вещества в другое.\n• Физическое тело — любой предмет, имеющий форму и объём.\n• Вещество и материя — вещество — вид материи с определёнными свойствами, из которого состоят тела; материя — всё, что существует в окружающем пространстве. Материя бывает в виде вещества и поля.\n## Формулы и связи\n• Формул в параграфе нет\n• Главное — различать виды явлений и точно употреблять термины.\n## Схема: ВИДЫ ФИЗИЧЕСКИХ ЯВЛЕНИЙ\n• Механические • Тепловые • Звуковые\n• Световые • Электрические • Магнитные\n## Важно\n• Пример закономерности: вспышку молнии мы видим раньше грома, потому что свет распространяется быстрее звука.",
    "en": "## Key ideas\n• Physics studies mechanical, thermal, sound, light, electrical and magnetic phenomena.\n• Its task is to observe phenomena, explain their causes and discover the laws of nature.\n• Precise physical terms make it possible to describe bodies, substances and their properties unambiguously.\n## Definitions\n• Physics — the science that studies physical phenomena.\n• Physical phenomenon — a change in which one substance does not turn into another substance.\n• Physical body — any object that has shape and volume.\n• Substance and matter — a substance is a type of matter with specific properties; matter is everything that exists around us. Matter may exist as substance or as a field.\n## Formulas and relations\n• No formulas in this section\n• The main point is to identify types of phenomena and use terms precisely.\n## Diagram\n• Mechanical\n• Thermal\n• Sound\n• Light\n• Electrical\n• Magnetic\n## Note\n• We see lightning before we hear thunder because light travels faster than sound.",
    "kk": "## Негізгі ойлар\n• Физика механикалық, жылулық, дыбыстық, жарық, электрлік және магниттік құбылыстарды зерттейді.\n• Оның міндеті — құбылыстарды бақылау, себептерін түсіндіру және табиғат заңдарын ашу.\n• Нақты физикалық терминдер денелерді, заттарды және олардың қасиеттерін бірдей түсінуге мүмкіндік береді.\n## Анықтамалар\n• Физика — физикалық құбылыстарды зерттейтін ғылым.\n• Физикалық құбылыс — бір заттың басқа затқа айналуы болмайтын өзгеріс.\n• Физикалық дене — пішіні мен көлемі бар кез келген зат.\n• Зат және материя — зат — белгілі қасиеттері бар материяның түрі; материя — қоршаған кеңістікте бардың бәрі. Материя зат және өріс түрінде болады.\n## Формулалар мен байланыстар\n> Бұл параграфта формула жоқ\n• Негізгісі — құбылыстар түрлерін ажырату және терминдерді дәл қолдану.\n## Сызба\n• Механикалық\n• Жылулық\n• Дыбыстық\n• Жарық\n• Электрлік\n• Магниттік\n## Маңызды\n• Найзағайды күркіреген дауыстан бұрын көреміз, себебі жарық дыбыстан жылдамырақ таралады."
  },
  "p2": {
    "title": "§ 2. Научные методы изучения природы",
    "titleEn": "§ 2. Scientific Methods for Studying Nature",
    "titleKk": "§ 2. Табиғатты зерттеудің ғылыми әдістері",
    "ru": "## Ключевые идеи\n• Научное познание начинается с целенаправленного наблюдения.\n• Гипотеза объясняет наблюдаемое явление, но обязательно требует проверки.\n• Результаты повторяемых опытов помогают установить закономерность и построить физическую теорию.\n## Определения\n• Наблюдение — целенаправленное восприятие явления.\n• Гипотеза — предположение, объясняющее наблюдаемое явление; оно требует доказательства.\n• Опыт (эксперимент) — исследование явления в специально созданных, контролируемых условиях.\n• Физическая теория — система научных знаний, объясняющая физические явления в их взаимосвязи.\n## Формулы и связи\n> наблюдение → гипотеза → эксперимент → закономерность → теория\n• Это логическая цепочка научного познания.\n## Схема: ЦЕПОЧКА НАУЧНОГО ПОЗНАНИЯ\n• Наблюдение • Гипотеза • Опыт • Вывод\n## Важно\n• В опыте изменяют условия осознанно, измеряют результат и проверяют, подтверждается ли гипотеза.\n## Экспериментальные задания\n• Экспериментальное задание: объясни заинтересовавшие тебя природные явления, используя цепочку научного познания (наблюдение → гипотеза → эксперимент).\n• Наблюдение: в течение месяца ежедневно отмечай положение восхода и захода Солнца относительно здания или дерева; ответы найди в энциклопедии по астрономии (тема «Годичное движение Солнца»).\n• 🔗 [Научный метод — пошаговое объяснение](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Детская энциклопедия. Том 1. Земля](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [Лекция №3 «Восход и заход Солнца»](https://vk.com/video-51126445_456242880)\n• 🔗 [Симулятор движения Земли вокруг Солнца](https://www.new3jcn.com/Phyc140/star-planet.html)",
    "en": "## Key ideas\n• Scientific inquiry begins with purposeful observation.\n• A hypothesis explains an observed phenomenon, but it must be tested.\n• Repeated experiments lead to a pattern and then to a physical theory.\n## Definitions\n• Observation — purposeful perception of a phenomenon.\n• Hypothesis — an assumption that explains an observed phenomenon and requires proof.\n• Experiment — a method of studying a phenomenon under specially created and controlled conditions.\n• Physical theory — a system of scientific knowledge that explains physical phenomena and their relationships.\n## Formulas and relations\n> observation → hypothesis → experiment → pattern → theory\n• This is the logical sequence of scientific inquiry.\n## Diagram\n• Observe\n• Hypothesis\n• Experiment\n• Pattern\n## Note\n• In an experiment, conditions are changed deliberately, results are measured, and the hypothesis is checked.",
    "kk": "## Негізгі ойлар\n• Ғылыми таным мақсатты бақылаудан басталады.\n• Гипотеза бақыланған құбылысты түсіндіреді, бірақ оны тәжірибемен тексеру қажет.\n• Қайталанған тәжірибелер заңдылықты, ал одан кейін физикалық теорияны қалыптастырады.\n## Анықтамалар\n• Бақылау — құбылысты мақсатты түрде қабылдау.\n• Гипотеза — бақыланған құбылысты түсіндіретін және дәлелдеуді қажет ететін болжам.\n• Тәжірибе (эксперимент) — құбылысты арнайы жасалған әрі бақыланатын жағдайда зерттеу әдісі.\n• Физикалық теория — физикалық құбылыстарды және олардың өзара байланысын түсіндіретін ғылыми білімдер жүйесі.\n## Формулалар мен байланыстар\n> бақылау → гипотеза → тәжірибе → заңдылық → теория\n• Бұл — ғылыми танымның логикалық тізбегі.\n## Сызба\n• Бақылау\n• Гипотеза\n• Тәжірибе\n• Заңдылық\n## Маңызды\n• Тәжірибеде жағдайлар әдейі өзгертіледі, нәтиже өлшенеді және гипотезаның дұрыстығы тексеріледі."
  },
  "p3": {
    "title": "§ 3. Международная система единиц (СИ)",
    "titleEn": "§ 3. The International System of Units (SI)",
    "titleKk": "§ 3. Халықаралық бірліктер жүйесі (ХБЖ)",
    "ru": "## Ключевые идеи\n• Физическая величина описывает измеряемое свойство тела или явления.\n• Измерить величину — сравнить её с однородной величиной, принятой за единицу.\n• Единая система единиц необходима, чтобы результаты измерений были понятны всем.\n## Определения\n• Физическая величина — количественная характеристика свойства тела или явления.\n• Измерение — сравнение величины с её единицей измерения.\n• Международная система единиц (СИ) — согласованная система основных и производных единиц физических величин.\n## Формулы и связи\n> Основные единицы СИ\n• длина — метр (м); масса — килограмм (кг); время — секунда (с); сила тока — ампер (А); температура — кельвин (К); количество вещества — моль (моль); сила света — кандела (кд).\n> Примеры производных единиц\n• скорость — м/с; объём — м³; плотность — кг/м³; сила — ньютон (Н); давление — паскаль (Па).\n## Схема: ВЕЛИЧИНА И ЕДИНИЦА СИ\n• Величина • число × ед. • СИ\n## Важно\n• Перед вычислением все величины следует выразить в СИ. Приставки: кило = 10³, санти = 10⁻², милли = 10⁻³, микро = 10⁻⁶.\n## Пример решения\n• Задача: Определите объём куба со стороной 10 см. Запишите результат в м³, дм³, см³ и мм³.\n• Дано: a = 10 см; V — ?\n• Перевод в СИ: a = 0,1 м\n• Решение: V = a³ → V = (0,1 м)³ = 0,001 м³ → 0,001 м³ = 1 дм³ = 1000 см³ = 1 000 000 мм³\n• Ответ: V = 0,001 м³ = 1 дм³ = 1000 см³ = 1 000 000 мм³.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: линейкой определи размеры бокала и вычисли его объём; результат запиши в м³, дм³, см³, мм³ и литрах.\n• 🔗 [Измерение объёма тела сложной формы](https://www.youtube.com/watch?v=FSVnpPDnVHQ)",
    "en": "## Key ideas\n• A physical quantity describes a measurable property of a body or a phenomenon.\n• Measuring means comparing a quantity with a homogeneous quantity chosen as a unit.\n• A common system of units lets everyone interpret results in the same way.\n## Definitions\n• Physical quantity — a quantitative characteristic of a property of a body or phenomenon.\n• Measurement — comparison of a quantity with its unit.\n• International System of Units (SI) — an agreed system of base and derived units of physical quantities.\n## Formulas and relations\n> SI base units\n• length — metre (m); mass — kilogram (kg); time — second (s); electric current — ampere (A); temperature — kelvin (K); amount of substance — mole (mol); luminous intensity — candela (cd).\n> Examples of derived units\n• speed — m/s; volume — m³; density — kg/m³; force — newton (N); pressure — pascal (Pa).\n## Diagram\n• Quantity\n• Number × unit\n• SI\n## Note\n• Before calculating, express every quantity in SI. Prefixes: kilo = 10³, centi = 10⁻², milli = 10⁻³, micro = 10⁻⁶.\n## Worked example\n• Problem: Find the volume of a cube with side 10 cm. Give the result in m³, dm³, cm³ and mm³.\n• Given: a = 10 cm; V — ?\n• SI conversion: a = 0.1 m\n• Solution: V = a³ → V = (0.1 m)³ = 0.001 m³ → 0.001 m³ = 1 dm³ = 1000 cm³ = 1 000 000 mm³\n• Answer: V = 0.001 m³ = 1 dm³ = 1000 cm³ = 1 000 000 mm³.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Физикалық шама дененің не құбылыстың өлшенетін қасиетін сипаттайды.\n• Өлшеу — шаманы бірлік ретінде қабылданған біртекті шамамен салыстыру.\n• Бірыңғай бірліктер жүйесі өлшеу нәтижесін баршаға түсінікті етеді.\n## Анықтамалар\n• Физикалық шама — дененің немесе құбылыстың қасиетін сандық сипаттайтын шама.\n• Өлшеу — шаманы оның өлшем бірлігімен салыстыру.\n• Халықаралық бірліктер жүйесі (ХБЖ) — физикалық шамалардың негізгі және туынды бірліктерінің келісілген жүйесі.\n## Формулалар мен байланыстар\n> ХБЖ негізгі бірліктері\n• ұзындық — метр (м); масса — килограмм (кг); уақыт — секунд (с); ток күші — ампер (А); температура — кельвин (К); зат мөлшері — моль (моль); жарық күші — кандела (кд).\n> Туынды бірліктер мысалы\n• жылдамдық — м/с; көлем — м³; тығыздық — кг/м³; күш — ньютон (Н); қысым — паскаль (Па).\n## Сызба\n• Шама\n• Сан × бірлік\n• ХБЖ\n## Маңызды\n• Есептеу алдында барлық шаманы ХБЖ-ға келтір. Жұрнақтар: кило = 10³, санти = 10⁻², милли = 10⁻³, микро = 10⁻⁶.\n## Есеп шығару үлгісі\n• Есеп: Қыры 10 см кубтың көлемін анықтаңдар. Нәтижені м³, дм³, см³ және мм³-пен жазыңдар.\n• Берілгені: a = 10 cm; V — ?\n• ХБЖ: a = 0,1 м\n• Шешуі: V = a³ → V = (0.1 m)³ = 0.001 m³ → 0.001 m³ = 1 dm³ = 1000 cm³ = 1 000 000 mm³\n• Жауабы: V = 0,001 м³ = 1 дм³ = 1000 см³ = 1 000 000 мм³.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p4": {
    "title": "§ 4. Скалярные и векторные физические величины",
    "titleEn": "§ 4. Scalar and Vector Physical Quantities",
    "titleKk": "§ 4. Скаляр және векторлық физикалық шамалар",
    "ru": "## Ключевые идеи\n• Скалярная величина задаётся только числовым значением и единицей измерения.\n• Векторная величина, кроме модуля, имеет направление; её изображают стрелкой.\n• Для правильного отсчёта по прибору находят цену деления шкалы.\n## Определения\n• Скалярная величина — величина, для задания которой достаточно числового значения и единицы измерения: масса, время, объём, путь.\n• Векторная величина — величина, имеющая числовое значение и направление: сила, перемещение, скорость перемещения.\n• Шкала прибора — отсчётная панель с делениями и числами.\n• Цена деления — значение величины, соответствующее одному наименьшему делению шкалы.\n## Формулы и связи\n> c = (A₂ − A₁) / n\n• c — цена деления; A₂ и A₁ — соседние подписанные значения; n — число промежутков между ними.\n> A = A₀ + n·c\n• показание равно ближайшему подписанному значению A₀ плюс число делений n, умноженное на цену деления c.\n## Схема: СКАЛЯР И ВЕКТОР\n• СКАЛЯР • ВЕКТОР\n• 5 кг • F = 20 Н\n## Важно\n• Стрелка вектора показывает направление, а её длина в выбранном масштабе — модуль величины.\n## Пример решения\n• Задача: На шкале мензурки соседние подписанные деления: 400 мл и 500 мл. Между ними 10 промежутков. Уровень жидкости расположен на 6 делений выше отметки 500 мл. Определите цену деления и объём жидкости.\n• Дано: A₁ = 400 мл; A₂ = 500 мл; n = 10; N = 6 дел.; V — ? (перевод в СИ не требуется)\n• Решение: c = (A₂ − A₁)/n → c = (500 − 400)/10 = 10 мл → V = 500 мл + 6·10 мл = 560 мл\n• Ответ: Цена деления c = 10 мл; объём V = 560 мл.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.",
    "en": "## Key ideas\n• A scalar quantity needs only a numerical value and a unit.\n• A vector quantity also has a direction and is represented by an arrow.\n• To read a measuring instrument correctly, first determine the value of one scale division.\n## Definitions\n• Scalar quantity — a quantity specified by a numerical value and unit only: mass, time, volume or distance travelled.\n• Vector quantity — a quantity with a magnitude and direction: force, displacement and displacement velocity.\n• Instrument scale — a reading panel marked with divisions and numbers.\n• Value of a division — the value of a quantity corresponding to the smallest division of a scale.\n## Formulas and relations\n> c = (A₂ − A₁) / n\n• c is the value of a division; A₂ and A₁ are neighbouring labelled readings; n is the number of intervals between them.\n> A = A₀ + n·c\n• a reading equals the nearest labelled value A₀ plus n divisions multiplied by c.\n## Diagram\n• Scalar\n• Vector\n## Note\n• The arrow of a vector shows its direction; its length, in the chosen scale, shows the magnitude.\n## Worked example\n• Problem: A measuring cylinder has labelled marks 400 mL and 500 mL with 10 intervals between them. The liquid level is 6 divisions above 500 mL. Find the value of one division and the volume.\n• Given: A₁ = 400 mL; A₂ = 500 mL; n = 10; N = 6 div.; V — ?\n• SI conversion: No conversion needed\n• Solution: c = (A₂ − A₁)/n → c = (500 − 400)/10 = 10 mL → V = 500 mL + 6·10 mL = 560 mL\n• Answer: One division c = 10 mL; liquid volume V = 560 mL.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Скаляр шаманы беру үшін сан мәні мен өлшем бірлігі жеткілікті.\n• Векторлық шаманың бағыты да бар; ол жебемен көрсетіледі.\n• Аспап көрсеткішін дұрыс оқу үшін алдымен шкала бөлігінің құнын анықтайды.\n## Анықтамалар\n• Скаляр шама — тек сан мәнімен және өлшем бірлігімен берілетін шама: масса, уақыт, көлем, жол.\n• Векторлық шама — сан мәні мен бағыты бар шама: күш, орын ауыстыру, орын ауыстыру жылдамдығы.\n• Аспап шкаласы — бөліктері мен сандары түсірілген есептеу панелі.\n• Бөлік құны — шкаланың бір ең кіші бөлігіне сәйкес келетін шаманың мәні.\n## Формулалар мен байланыстар\n> c = (A₂ − A₁) / n\n• c — бөлік құны; A₂ және A₁ — көршілес белгіленген көрсеткіштер; n — олардың арасындағы аралық саны.\n> A = A₀ + n·c\n• көрсеткіш жақын белгіленген A₀ мәніне n·c қосу арқылы табылады.\n## Сызба\n• Скаляр\n• Вектор\n## Маңызды\n• Вектор жебесі оның бағытын, ал таңдалған масштабтағы ұзындығы шаманың модулін көрсетеді.\n## Есеп шығару үлгісі\n• Есеп: Мензурка шкаласында 400 мл және 500 мл белгілерінің арасында 10 аралық бар. Сұйық деңгейі 500 мл белгісінен 6 бөлік жоғары. Бөлік құнын және сұйық көлемін анықтаңдар.\n• Берілгені: A₁ = 400 mL; A₂ = 500 mL; n = 10; N = 6 div.; V — ?\n• ХБЖ: ХБЖ-ға ауыстыру қажет емес\n• Шешуі: c = (A₂ − A₁)/n → c = (500 − 400)/10 = 10 mL → V = 500 mL + 6·10 mL = 560 mL\n• Жауабы: Бөлік құны c = 10 мл; сұйық көлемі V = 560 мл.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p5": {
    "title": "§ 5. Точность измерений и вычислений. Запись больших и малых чисел",
    "titleEn": "§ 5. Accuracy of Measurements and Calculations. Scientific Notation",
    "titleKk": "§ 5. Өлшеулер мен есептеулердің дәлдігі. Сандардың стандарт түрі",
    "ru": "## Ключевые идеи\n• Любое измерение приближённо: на результат влияют прибор, отсчёт по шкале и условия опыта.\n• При прямом измерении погрешность отсчёта обычно принимают равной половине цены деления.\n• Стандартная запись облегчает действия с очень большими и очень малыми числами.\n## Определения\n• Абсолютная погрешность — возможное отклонение измеренного значения от истинного; выражается в тех же единицах, что и величина.\n• Погрешность отсчёта — погрешность считывания по шкале; для однократного отсчёта равна половине цены деления.\n• Стандартный вид числа — запись a·10ⁿ, где 1 ≤ a < 10, а n — целое число.\n## Формулы и связи\n> ΔA = ΔA_инстр + ΔA_отсч; ΔA_отсч = c / 2\n• ΔA — абсолютная погрешность; c — цена деления.\n> A = A_изм ± ΔA\n• истинное значение лежит в интервале от A_изм − ΔA до A_изм + ΔA.\n> (a·10ᵐ)(b·10ⁿ) = ab·10ᵐ⁺ⁿ\n• при умножении показатели складывают; при делении вычитают. Для сложения сначала приводят степени десяти к одной.\n## Схема: КАК ЗАПИСАТЬ РЕЗУЛЬТАТ ИЗМЕРЕНИЯ\n• цена деления  c = (50 − 0) / 5 = 10\n## Важно\n• Пример: 0,000000354 = 3,54·10⁻⁷. Результат измерения записывают с той же точностью, что и его погрешность.\n## Пример решения\n• Задача: Запишите в стандартном виде числа: 1 250 000 000 и 0,000000125.\n• Дано: a₁ = 1 250 000 000; a₂ = 0,000000125 (перевод в СИ не требуется)\n• Решение: a₁ = 1,25·10⁹ → (запятую перенесли на 9 знаков влево) → a₂ = 1,25·10⁻⁷ → (запятую перенесли на 7 знаков вправо)\n• Ответ: 1 250 000 000 = 1,25·10⁹; 0,000000125 = 1,25·10⁻⁷.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: мерным стаканом определи объём бокала и запиши результат с учётом погрешности.\n• 🔗 [Симулятор измерения объёма бокала](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Урок «Точность измерений и вычислений» (5–6 уроки)](https://youtu.be/FV7cEvoz5q4)",
    "en": "## Key ideas\n• Every measurement is approximate: instruments, reading the scale and experimental conditions all affect it.\n• For a direct measurement, the reading uncertainty is usually taken as half of the scale division.\n• Scientific notation makes calculations with very large and very small numbers easier.\n## Definitions\n• Absolute error — the possible deviation of a measured value from the true value; it has the same unit as the quantity.\n• Reading error — an uncertainty caused by reading a scale; for one reading it is half a division.\n• Scientific notation — the form a·10ⁿ, where 1 ≤ a < 10 and n is an integer.\n## Formulas and relations\n> ΔA = ΔA_instr + ΔA_read; ΔA_read = c/2\n• ΔA is absolute error; c is the value of one scale division.\n> A = A_meas ± ΔA\n• the true value lies between A_meas − ΔA and A_meas + ΔA.\n> (a·10ᵐ)(b·10ⁿ) = ab·10ᵐ⁺ⁿ\n• when multiplying, add exponents; when dividing, subtract them. For addition, first make the powers of ten equal.\n## Diagram\n• Scale\n• Division\n• Reading\n## Note\n• Example: 0.000000354 = 3.54·10⁻⁷. Record a measured value to the same precision as its uncertainty.\n## Worked example\n• Problem: Write 1 250 000 000 and 0.000000125 in scientific notation.\n• Given: a₁ = 1 250 000 000; a₂ = 0.000000125\n• SI conversion: No unit conversion\n• Solution: a₁ = 1.25·10⁹ → a₂ = 1.25·10⁻⁷\n• Answer: 1 250 000 000 = 1.25·10⁹; 0.000000125 = 1.25·10⁻⁷.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Кез келген өлшеу жуық: аспап, шкаланы оқу және тәжірибе жағдайы нәтижеге әсер етеді.\n• Тікелей өлшеуде есептеу қателігі әдетте шкала бөлігінің жартысына тең деп алынады.\n• Стандарт түрі өте үлкен және өте кіші сандармен амал жасауды жеңілдетеді.\n## Анықтамалар\n• Абсолют қателік — өлшенген мәннің шын мәннен мүмкін ауытқуы; оның бірлігі шаманың бірлігімен бірдей.\n• Есептеу қателігі — шкала бойынша көрсеткіш алудан болатын қателік; бір өлшеуде ол бөлік құнының жартысына тең.\n• Санның стандарт түрі — a·10ⁿ жазуы, мұндағы 1 ≤ a < 10, ал n — бүтін сан.\n## Формулалар мен байланыстар\n> ΔA = ΔA_аспап + ΔA_есеп; ΔA_есеп = c/2\n• ΔA — абсолют қателік; c — шкаланың бір бөлік құны.\n> A = A_өлш ± ΔA\n• шын мән A_өлш − ΔA мен A_өлш + ΔA аралығында жатады.\n> (a·10ᵐ)(b·10ⁿ) = ab·10ᵐ⁺ⁿ\n• көбейткенде дәреже көрсеткіштері қосылады, бөлгенде азаяды. Қосарда дәрежелерді бірдей ету керек.\n## Сызба\n• Шкала\n• Бөлік\n• Көрсеткіш\n## Маңызды\n• Мысалы: 0,000000354 = 3,54·10⁻⁷. Өлшеу нәтижесін оның қателігімен бірдей дәлдікке дейін жазады.\n## Есеп шығару үлгісі\n• Есеп: 1 250 000 000 және 0,000000125 сандарын стандарт түрінде жазыңдар.\n• Берілгені: a₁ = 1 250 000 000; a₂ = 0.000000125\n• ХБЖ: Бірліктерді ауыстыру қажет емес\n• Шешуі: a₁ = 1.25·10⁹ → a₂ = 1.25·10⁻⁷\n• Жауабы: 1 250 000 000 = 1,25·10⁹; 0,000000125 = 1,25·10⁻⁷.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p6": {
    "title": "§ 6. Механическое движение и его характеристики. Система отсчёта",
    "titleEn": "§ 6. Mechanical Motion and Its Characteristics. Reference Frame",
    "titleKk": "§ 6. Механикалық қозғалыс және оның сипаттамалары. Санақ жүйесі",
    "ru": "## Ключевые идеи\n• Механическое движение всегда рассматривают относительно выбранного тела отсчёта.\n• В задачах протяжённое тело можно считать материальной точкой, если его размерами можно пренебречь.\n• Нужно различать траекторию, путь и перемещение.\n## Определения\n• Механическое движение — изменение положения тела в пространстве с течением времени относительно других тел.\n• Система отсчёта — тело отсчёта, связанная с ним система координат и прибор для измерения времени.\n• Траектория — линия, которую описывает движущееся тело относительно тела отсчёта.\n• Путь и перемещение — путь l — длина траектории; перемещение s⃗ — направленный отрезок от начального положения к конечному.\n## Формулы и связи\n> sₓ = x − x₀\n• проекция перемещения равна разности конечной и начальной координат.\n> l ≥ |s⃗|\n• модуль перемещения не больше пройденного пути; равенство — при прямолинейном движении без изменения направления.\n## Схема: ПУТЬ И ПЕРЕМЕЩЕНИЕ\n• траектория; её длина — путь l\n• перемещение  s⃗\n## Важно\n• Путь — скаляр, а перемещение — вектор. При возвращении в исходную точку перемещение равно нулю, но путь не равен нулю.\n## Пример решения\n• Задача: Материальная точка движется по оси Ox из точки с координатой 2 м в точку с координатой 5 м. Определите проекцию перемещения.\n• Дано: x₀ = 2 м; x = 5 м; sₓ — ? (перевод в СИ не требуется)\n• Решение: sₓ = x − x₀ → sₓ = 5 м − 2 м → sₓ = 3 м\n• Ответ: sₓ = +3 м. Знак «+» означает направление вдоль оси Ox.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: сантиметровой лентой измерь длину своего шага, посчитай число шагов от школы до дома и найди пройденный путь; изобрази траекторию в масштабе и построй вектор перемещения.\n• 🔗 [Как измеряется длина шага (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Траектория. Путь. Перемещение](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)",
    "en": "## Key ideas\n• Mechanical motion is always considered relative to a chosen reference body.\n• An extended body can be treated as a material point when its size is negligible for the problem.\n• Trajectory, distance travelled and displacement must not be confused.\n## Definitions\n• Mechanical motion — a change of a body’s position in space over time relative to other bodies.\n• Reference frame — a reference body, a coordinate system attached to it, and an instrument for measuring time.\n• Trajectory — the line described by a moving body relative to a reference body.\n• Distance and displacement — distance l is the length of the trajectory; displacement s⃗ is the directed segment from the initial position to the final position.\n## Formulas and relations\n> sₓ = x − x₀\n• the displacement projection is the final coordinate minus the initial coordinate.\n> l ≥ |s⃗|\n• the magnitude of displacement cannot exceed distance travelled; equality holds for straight motion without a change of direction.\n## Diagram\n• s⃗\n## Note\n• Distance is a scalar, while displacement is a vector. On returning to the starting point, displacement is zero but distance is not.\n## Worked example\n• Problem: A material point moves on Ox from coordinate 2 m to coordinate 5 m. Find the displacement projection.\n• Given: x₀ = 2 m; x = 5 m; sₓ — ?\n• SI conversion: All values are in SI\n• Solution: sₓ = x − x₀ → sₓ = 5 m − 2 m → sₓ = 3 m\n• Answer: sₓ = +3 m. The plus sign indicates the Ox direction.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Механикалық қозғалыс әрқашан таңдалған санақ денесіне қатысты қарастырылады.\n• Егер есепте дененің өлшемін елемеуге болса, оны материалдық нүкте деп алады.\n• Траекторияны, жолды және орын ауыстыруды шатастырмау керек.\n## Анықтамалар\n• Механикалық қозғалыс — дененің басқа денелерге қатысты кеңістіктегі орнының уақыт өте өзгеруі.\n• Санақ жүйесі — санақ денесі, онымен байланысқан координаталар жүйесі және уақыт өлшейтін аспап.\n• Траектория — дененің санақ денесіне қатысты қозғалғанда сызатын сызығы.\n• Жол және орын ауыстыру — жол l — траектория ұзындығы; орын ауыстыру s⃗ — бастапқы нүктеден соңғы нүктеге бағытталған кесінді.\n## Формулалар мен байланыстар\n> sₓ = x − x₀\n• орын ауыстыру проекциясы соңғы координатадан бастапқы координатаны азайтуға тең.\n> l ≥ |s⃗|\n• орын ауыстыру модулі жолдан артық емес; теңдік бағыт өзгермеген түзу сызықты қозғалыста орындалады.\n## Сызба\n• s⃗\n## Маңызды\n• Жол — скаляр, ал орын ауыстыру — вектор. Дене бастапқы нүктеге қайтса, орын ауыстыру нөл, ал жол нөл емес.\n## Есеп шығару үлгісі\n• Есеп: Материалдық нүкте Ox осі бойымен координатасы 2 м нүктеден координатасы 5 м нүктеге қозғалады. Орын ауыстыру проекциясын табыңдар.\n• Берілгені: x₀ = 2 m; x = 5 m; sₓ — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: sₓ = x − x₀ → sₓ = 5 m − 2 m → sₓ = 3 m\n• Жауабы: sₓ = +3 м. «+» таңбасы Ox осінің оң бағытын көрсетеді.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p7": {
    "title": "§ 7. Относительность механического движения",
    "titleEn": "§ 7. Relativity of Mechanical Motion",
    "titleKk": "§ 7. Механикалық қозғалыстың салыстырмалылығы",
    "ru": "## Ключевые идеи\n• Покой и движение не абсолютны: они зависят от выбора тела отсчёта.\n• Одно и то же тело может двигаться относительно Земли и покоиться относительно другого тела.\n• Траектория и быстрота движения также зависят от системы отсчёта.\n## Определения\n• Относительность движения — свойство движения зависеть от выбранной системы отсчёта.\n• Относительность траектории — траектория одного тела может быть разной для разных наблюдателей.\n• Относительность скорости — скорость тела имеет смысл только относительно выбранного тела отсчёта.\n## Формулы и связи\n> v⃗_отн = v⃗_тела − v⃗_отсч\n• векторная связь скоростей в одной системе отсчёта; для движения вдоль одной прямой важно учитывать знаки направлений.\n## Схема: СМЕНА СИСТЕМЫ ОТСЧЁТА\n• вагон • Земля\n• v относительно Земли\n• v_отн вагона = 0\n## Важно\n• Пример: пассажир покоится относительно вагона, но движется относительно Земли. Точка колеса относительно оси движется по окружности, а относительно дороги — по циклоиде.\n## Экспериментальные задания\n• Экспериментальное задание: наблюдай за каплями дождя на заднем и боковом стекле покоящегося и движущегося автобуса; сделай выводы.\n• Домашний опыт: сделай отверстие в крышке бутылки, направь струю воды на неподвижную поверхность, затем приведи поверхность в движение; сравни результаты.\n• 🔗 [Симулятор «Дождь в автобусе»](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Система отсчёта](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [Симулятор «Эксперимент с водой и движением»](https://gemini.google.com/share/c077ce897f22)",
    "en": "## Key ideas\n• Rest and motion are not absolute: they depend on the reference body selected.\n• The same body may move relative to Earth and be at rest relative to another body.\n• Trajectory and speed also depend on the reference frame.\n## Definitions\n• Relativity of motion — the dependence of motion on the selected reference frame.\n• Relativity of trajectory — the same body can have different trajectories for different observers.\n• Relative velocity — a velocity that has meaning only relative to a chosen reference body.\n## Formulas and relations\n> v⃗_rel = v⃗_body − v⃗_frame\n• vector relation for velocities; for one-dimensional motion, signs show direction.\n## Diagram\n• Reference body\n• Observer\n• Motion\n## Note\n• A passenger is at rest relative to a carriage but moves relative to Earth. A point on a wheel traces a circle relative to its axle and a cycloid relative to the road.",
    "kk": "## Негізгі ойлар\n• Тыныштық пен қозғалыс абсолют емес: олар таңдалған санақ денесіне тәуелді.\n• Бір дене Жерге қатысты қозғалып, басқа денеге қатысты тыныштықта болуы мүмкін.\n• Траектория мен жылдамдық та санақ жүйесіне тәуелді.\n## Анықтамалар\n• Қозғалыстың салыстырмалылығы — қозғалыстың таңдалған санақ жүйесіне тәуелді қасиеті.\n• Траекторияның салыстырмалылығы — бір дененің әр бақылаушы үшін траекториясы әртүрлі болуы мүмкін.\n• Салыстырмалы жылдамдық — таңдалған санақ денесіне қатысты ғана мағынасы бар жылдамдық.\n## Формулалар мен байланыстар\n> v⃗_сал = v⃗_дене − v⃗_санақ\n• жылдамдықтардың векторлық байланысы; бір түзудің бойында бағыт таңбамен ескеріледі.\n## Сызба\n• Санақ денесі\n• Бақылаушы\n• Қозғалыс\n## Маңызды\n• Жолаушы вагонға қатысты тыныштықта, ал Жерге қатысты қозғалады. Дөңгелек нүктесі оське қатысты шеңбер, жолға қатысты циклоида сызады."
  },
  "p8": {
    "title": "§ 8. Прямолинейное равномерное и неравномерное движение",
    "titleEn": "§ 8. Straight Uniform and Non-uniform Motion",
    "titleKk": "§ 8. Түзу сызықты бірқалыпты және бірқалыпсыз қозғалыс",
    "ru": "## Ключевые идеи\n• Критерий вида движения — пути, пройденные за любые равные промежутки времени.\n• При равномерном движении эти пути одинаковы; при неравномерном — различны.\n• Равномерное движение — удобная физическая модель: реальные тела часто движутся так лишь на части пути.\n## Определения\n• Равномерное движение — движение, при котором тело за любые равные промежутки времени проходит одинаковые пути.\n• Неравномерное движение — движение, при котором за любые равные промежутки времени тело проходит разные пути.\n• Прямолинейное движение — движение по траектории — прямой линии.\n## Формулы и связи\n> При равномерном движении: l₁ = l₂ = … при t₁ = t₂ = …\n• равенство путей относится именно к любым равным промежуткам времени.\n> При неравномерном движении: l₁, l₂, … различны при равных t\n• скорость тела меняется — оно ускоряется, замедляется или меняет её по участкам.\n## Схема: РАВНЫЕ ПРОМЕЖУТКИ ВРЕМЕНИ\n• равномерно\n• неравномерно\n## Важно\n• Планеты движутся по криволинейным орбитам неравномерно: ближе к Солнцу их скорость больше.\n## Экспериментальные задания\n• Экспериментальное задание: наблюдай за движением пешеходов на участке с одинаковыми расстояниями (например, у забора со столбами) и определи, кто движется равномерно.\n• 🔗 [Симулятор «Движущийся человек»](https://phet.colorado.edu/en/simulations/moving-man)",
    "en": "## Key ideas\n• The type of motion is determined by distances covered in any equal time intervals.\n• In uniform motion those distances are equal; in non-uniform motion they differ.\n• Uniform motion is a useful model; real bodies often move uniformly only over part of a journey.\n## Definitions\n• Uniform motion — motion in which a body covers equal distances in any equal time intervals.\n• Non-uniform motion — motion in which a body covers unequal distances in equal time intervals.\n• Straight-line motion — motion along a straight trajectory.\n## Formulas and relations\n> Uniform: l₁ = l₂ = … when t₁ = t₂ = …\n• equal distances must correspond to any equal time intervals.\n> Non-uniform: l₁, l₂, … differ for equal t\n• the body speeds up, slows down, or has different speeds on different sections.\n## Diagram\n• equal time\n• equal distance\n## Note\n• Planets move non-uniformly along curved orbits: their speed is greater when they are closer to the Sun.",
    "kk": "## Негізгі ойлар\n• Қозғалыс түрі кез келген бірдей уақыт аралықтарында жүрілген жолмен анықталады.\n• Бірқалыпты қозғалыста бұл жолдар тең, ал бірқалыпсыз қозғалыста әртүрлі.\n• Бірқалыпты қозғалыс — ыңғайлы модель; нақты денелер көбіне жолдың тек бір бөлігінде солай қозғалады.\n## Анықтамалар\n• Бірқалыпты қозғалыс — дене кез келген бірдей уақыт аралықтарында бірдей жол жүретін қозғалыс.\n• Бірқалыпсыз қозғалыс — дене бірдей уақыт аралықтарында әртүрлі жол жүретін қозғалыс.\n• Түзу сызықты қозғалыс — траекториясы түзу сызық болатын қозғалыс.\n## Формулалар мен байланыстар\n> Бірқалыпты: l₁ = l₂ = …, егер t₁ = t₂ = …\n• бірдей жол кез келген тең уақыт аралығына сай болуы тиіс.\n> Бірқалыпсыз: тең t үшін l₁, l₂, … әртүрлі\n• дененің жылдамдығы артады, кемиді не әр бөлікте әртүрлі болады.\n## Сызба\n• Тең уақыт\n• Тең жол\n## Маңызды\n• Планеталар қисық орбитамен бірқалыпсыз қозғалады: олар Күнге жақындағанда жылдамырақ қозғалады."
  },
  "p9": {
    "title": "§ 9. Расчёт скорости и средней скорости",
    "titleEn": "§ 9. Calculating Speed and Average Speed",
    "titleKk": "§ 9. Жылдамдықты және орташа жылдамдықты есептеу",
    "ru": "## Ключевые идеи\n• Путевая скорость характеризует быстроту движения вдоль траектории и является скаляром.\n• Скорость перемещения — вектор; её направление совпадает с направлением перемещения.\n• Среднюю скорость рассчитывают по всему пути и всему времени, а не как обычное среднее скоростей.\n## Определения\n• Путевая скорость — величина, определяющая быстроту движения вдоль траектории.\n• Скорость перемещения — векторная величина, определяющая быстроту перемещения в заданном направлении.\n• Средняя скорость — скорость равномерного движения, при котором за то же время был бы пройден тот же путь, что и при данном неравномерном движении.\n## Формулы и связи\n> v = l / t\n• путевая скорость; [v] = м/с. Также l = vt, t = l/v.\n> vₓ = sₓ / t = (x − x₀) / t\n• проекция скорости перемещения вдоль оси x.\n> v_ср = (l₁ + l₂ + …) / (t₁ + t₂ + …)\n• средняя скорость на нескольких участках.\n> x = x₀ + vₓt\n• закон прямолинейного равномерного движения.\n## Схема: СВЯЗЬ ПУТИ, ВРЕМЕНИ И СКОРОСТИ\n• v = l/t • l = vt\n## Важно\n• Перевод единиц: 1 м/с = 3,6 км/ч; 1 км/ч ≈ 0,28 м/с. Для замкнутой траектории перемещение и скорость перемещения равны нулю.\n## Пример решения\n• Задача: Пригородный поезд проходит 300 км со скоростью 100 км/ч, а возвращается по этому же пути со скоростью 50 км/ч. Определите среднюю скорость за всю поездку.\n• Дано: l₁ = l₂ = 300 км; v₁ = 100 км/ч; v₂ = 50 км/ч; v_ср — ? (перевод в СИ не требуется)\n• Решение: t₁ = l₁/v₁ = 300/100 = 3 ч → t₂ = l₂/v₂ = 300/50 = 6 ч → v_ср = (l₁ + l₂)/(t₁ + t₂) → v_ср = 600/9 = 66,7 км/ч\n• Ответ: v_ср = 66,7 км/ч.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: секундомером измерь время движения машин на прямом участке пути и вычисли их скорость; сравни с разрешённой скоростью в городе.\n• 🔗 [Движение (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Скорость](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Радар для измерения скорости](https://ru.ruwiki.ru/wiki/Радар_для_измерения_скорости)",
    "en": "## Key ideas\n• Path speed describes how fast a body moves along its trajectory and is a scalar.\n• Displacement velocity is a vector; its direction is the direction of displacement.\n• Average speed must be found from total distance and total time, not by simply averaging speeds.\n## Definitions\n• Path speed — a quantity describing how fast a body moves along a trajectory.\n• Displacement velocity — a vector quantity describing the rate of displacement in a chosen direction.\n• Average speed — the speed of uniform motion that would cover the same total distance in the same total time.\n## Formulas and relations\n> v = l/t\n• path speed; [v] = m/s. Hence l = vt and t = l/v.\n> vₓ = sₓ/t = (x − x₀)/t\n• the projection of displacement velocity on the x-axis.\n> v_avg = (l₁+l₂+…)/(t₁+t₂+…)\n• average speed over several sections.\n> x = x₀ + vₓt\n• the equation of straight uniform motion.\n## Diagram\n• l\n• v\n• t\n## Note\n• 1 m/s = 3.6 km/h; 1 km/h ≈ 0.28 m/s. On a closed trajectory, displacement and displacement velocity are zero.\n## Worked example\n• Problem: A commuter train travels 300 km at 100 km/h and returns over the same route at 50 km/h. Find the average speed for the whole trip.\n• Given: l₁ = l₂ = 300 km; v₁ = 100 km/h; v₂ = 50 km/h; v_avg — ?\n• SI conversion: No conversion needed\n• Solution: t₁ = l₁/v₁ = 300/100 = 3 h → t₂ = l₂/v₂ = 300/50 = 6 h → v_avg = (l₁+l₂)/(t₁+t₂) = 600/9 = 66.7 km/h\n• Answer: v_avg = 66.7 km/h.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Жолдық жылдамдық дененің траектория бойымен қозғалыс шапшаңдығын сипаттайды және скаляр шама.\n• Орын ауыстыру жылдамдығы — вектор; оның бағыты орын ауыстыру бағытымен сәйкес.\n• Орташа жылдамдықты барлық жол мен барлық уақыт бойынша есептейді, жай арифметикалық орта емес.\n## Анықтамалар\n• Жолдық жылдамдық — дененің траектория бойымен қозғалыс шапшаңдығын сипаттайтын шама.\n• Орын ауыстыру жылдамдығы — берілген бағытта орын ауыстыру шапшаңдығын сипаттайтын векторлық шама.\n• Орташа жылдамдық — сол толық жолды сол толық уақытта жүріп өтетін бірқалыпты қозғалыстың жылдамдығы.\n## Формулалар мен байланыстар\n> v = l/t\n• жолдық жылдамдық; [v] = м/с. Олай болса l = vt және t = l/v.\n> vₓ = sₓ/t = (x − x₀)/t\n• x осі бойындағы орын ауыстыру жылдамдығының проекциясы.\n> v_орт = (l₁+l₂+…)/(t₁+t₂+…)\n• бірнеше бөлік үшін орташа жылдамдық.\n> x = x₀ + vₓt\n• түзу сызықты бірқалыпты қозғалыс теңдеуі.\n## Сызба\n• l\n• v\n• t\n## Маңызды\n• 1 м/с = 3,6 км/сағ; 1 км/сағ ≈ 0,28 м/с. Тұйық траекторияда орын ауыстыру мен орын ауыстыру жылдамдығы нөлге тең.\n## Есеп шығару үлгісі\n• Есеп: Қала маңы пойызы 300 км жолды 100 км/сағ жылдамдықпен, ал кері жолды 50 км/сағ жылдамдықпен жүреді. Барлық сапардағы орташа жылдамдықты табыңдар.\n• Берілгені: l₁ = l₂ = 300 km; v₁ = 100 km/h; v₂ = 50 km/h; v_орт — ?\n• ХБЖ: ХБЖ-ға ауыстыру қажет емес\n• Шешуі: t₁ = l₁/v₁ = 300/100 = 3 h → t₂ = l₂/v₂ = 300/50 = 6 h → v_орт = (l₁+l₂)/(t₁+t₂) = 600/9 = 66.7 km/h\n• Жауабы: v_орт = 66,7 км/сағ.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p10": {
    "title": "§ 10. Графическое представление различных видов механического движения",
    "titleEn": "§ 10. Graphical Representation of Mechanical Motion",
    "titleKk": "§ 10. Механикалық қозғалысты графикпен кескіндеу",
    "ru": "## Ключевые идеи\n• График показывает зависимость одной величины от другой; на осях всегда подписывают величины и единицы.\n• Для равномерного движения график v(t) — горизонтальная прямая, а график l(t) — прямая через начало координат.\n• По графику l(t) скорость равна угловому коэффициенту прямой; по v(t) путь равен площади под графиком.\n## Определения\n• График постоянной величины — линия, параллельная оси времени: величина не меняется.\n• Прямая пропорциональность — зависимость вида y = kx; график — прямая через начало координат.\n• Угловой коэффициент — отношение изменения величины по вертикальной оси к изменению величины по горизонтальной.\n## Формулы и связи\n> Для равномерного движения: l = vt\n• поэтому l(t) — прямая через начало координат.\n> v = Δl / Δt\n• скорость определяется по наклону графика пути от времени.\n> l = площадь под графиком v(t)\n• для постоянной скорости l = v·t — площадь прямоугольника.\n## Схема: ЧТЕНИЕ ГРАФИКА ДВИЖЕНИЯ\n• наклон = v\n## Важно\n• Если график координаты x(t) горизонтальный, тело покоится. Наклон вниз означает отрицательную проекцию скорости.\n## Пример решения\n• Задача: По графику скорости равномерного движения: v = 3 м/с. Определите путь, пройденный телом за 4 с.\n• Дано: v = 3 м/с; t = 4 с; l — ? (перевод в СИ не требуется)\n• Решение: l = vt → l = 3 м/с · 4 с → l = 12 м\n• Ответ: l = 12 м. Это также площадь прямоугольника под графиком v(t).\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.",
    "en": "## Key ideas\n• A graph shows how one quantity depends on another; both axes need quantities and units.\n• For uniform motion, v(t) is a horizontal line and l(t) is a straight line through the origin.\n• On l(t), speed is the slope; on v(t), distance is the area under the graph.\n## Definitions\n• Graph of a constant quantity — a line parallel to the time axis: the quantity does not change.\n• Direct proportionality — a relationship y = kx; its graph is a straight line through the origin.\n• Slope — the ratio of the vertical change to the horizontal change on a graph.\n## Formulas and relations\n> For uniform motion: l = vt\n• therefore l(t) is a straight line through the origin.\n> v = Δl/Δt\n• speed is found from the slope of a distance–time graph.\n> l = area under v(t)\n• for constant speed, l = vt is the area of a rectangle.\n## Diagram\n• slope = v\n## Note\n• A horizontal coordinate graph x(t) means that the body is at rest. A downward slope means a negative velocity projection.\n## Worked example\n• Problem: On a uniform-motion speed graph, v = 3 m/s. Find the distance travelled in 4 s.\n• Given: v = 3 m/s; t = 4 s; l — ?\n• SI conversion: All values are in SI\n• Solution: l = vt → l = 3 m/s · 4 s → l = 12 m\n• Answer: l = 12 m. It is also the area of the rectangle under v(t).\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• График бір шаманың екіншісіне тәуелділігін көрсетеді; осьтерде шама мен өлшем бірлігі міндетті түрде жазылады.\n• Бірқалыпты қозғалыста v(t) — көлденең түзу, ал l(t) — координаталар басы арқылы өтетін түзу.\n• l(t) графигінде жылдамдық — еңкіштік, ал v(t) графигінде жол — график астындағы аудан.\n## Анықтамалар\n• Тұрақты шаманың графигі — уақыт осіне параллель түзу: шама өзгермейді.\n• Тура пропорционалдық — y = kx түріндегі тәуелділік; графигі координаталар басы арқылы өтетін түзу.\n• Еңкіштік — графиктегі тік бағыттағы өзгерістің көлденең бағыттағы өзгеріске қатынасы.\n## Формулалар мен байланыстар\n> Бірқалыпты қозғалыс үшін: l = vt\n• сондықтан l(t) — координаталар басы арқылы өтетін түзу.\n> v = Δl/Δt\n• жылдамдық жолдың уақытқа тәуелділік графигінің еңкіштігімен табылады.\n> l = v(t) астындағы аудан\n• тұрақты жылдамдықта l = vt — тік төртбұрыш ауданы.\n## Сызба\n• slope = v\n## Маңызды\n• Координатаның x(t) графигі көлденең болса, дене тыныштықта. Төмен қарай еңкіштік жылдамдық проекциясының теріс екенін көрсетеді.\n## Есеп шығару үлгісі\n• Есеп: Бірқалыпты қозғалыс жылдамдығының графигінде v = 3 м/с. 4 с ішінде жүрген жолды табыңдар.\n• Берілгені: v = 3 m/s; t = 4 s; l — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: l = vt → l = 3 m/s · 4 s → l = 12 m\n• Жауабы: l = 12 м. Бұл v(t) графигінің астындағы тік төртбұрыш ауданына да тең.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p11": {
    "title": "§ 11. Масса и измерение массы тел",
    "titleEn": "§ 11. Mass and Measuring the Mass of Bodies",
    "titleKk": "§ 11. Денелердің массасы және массаны өлшеу",
    "ru": "## Ключевые идеи\n• Масса характеризует инертные и гравитационные свойства тела.\n• Чем больше масса, тем труднее изменить скорость тела и тем сильнее Земля его притягивает.\n• Масса сохраняется и обладает свойством аддитивности.\n## Определения\n• Инертность — свойство тела изменять состояние покоя или движения при взаимодействии не мгновенно, а постепенно.\n• Масса — скалярная величина, характеризующая инертные и гравитационные свойства тела.\n• Аддитивность массы — масса тела (или системы) равна сумме масс его частей.\n• Взвешивание — определение массы сравнением с известными массами или по действию тела на весы.\n## Формулы и связи\n> m = m₁ + m₂ + …\n• свойство аддитивности массы.\n> m₁ / m₂ = Δv₂ / Δv₁\n• при взаимодействии: изменения скоростей тел обратно пропорциональны их массам.\n> 1 т = 10³ кг; 1 г = 10⁻³ кг; 1 мг = 10⁻⁶ кг\n• основная единица массы в СИ — килограмм (кг).\n## Схема: МАССА И ВЗВЕШИВАНИЕ\n• в равновесии: m_тела = m_гирь\n• тело • гири\n## Важно\n• Рычажные весы сравнивают массы с гирями, пружинные — используют растяжение пружины, электронные — работу датчиков.\n## Пример решения\n• Задача: Тело на рычажных весах уравновешено гирями 20 г, 10 г, 2 г, 1 г и 500 мг. Определите массу тела в граммах и килограммах.\n• Дано: m₁ = 20 г; m₂ = 10 г; m₃ = 2 г; m₄ = 1 г; m₅ = 500 мг\n• Перевод в СИ: 500 мг = 0,5 г\n• Решение: m = m₁ + m₂ + m₃ + m₄ + m₅ → m = 20 + 10 + 2 + 1 + 0,5 → m = 33,5 г = 0,0335 кг\n• Ответ: m = 33,5 г = 0,0335 кг.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: изготовь рычажные весы из подручного материала; гирьки 1 г, 2 г сделай из проволоки, миллиграммовые — из бумаги; определи массы чайной и столовой ложек круп, соли и сахара.\n• 🔗 [Рычажные весы своими руками](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Определение массы — рычажные весы](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Симулятор самодельных весов и справочник](https://gemini.google.com/share/144615bae955)",
    "en": "## Key ideas\n• Mass characterizes the inertial and gravitational properties of a body.\n• The greater the mass, the harder it is to change a body’s velocity and the stronger Earth’s attraction is.\n• Mass is conserved and additive.\n## Definitions\n• Inertia — a property of bodies: when they interact, their state of rest or motion changes gradually, not instantaneously.\n• Mass — a scalar quantity characterizing a body’s inertial and gravitational properties.\n• Additivity of mass — the mass of a body or system equals the sum of the masses of its parts.\n• Weighing — determining mass by comparison with known masses or by a body’s action on scales.\n## Formulas and relations\n> m = m₁ + m₂ + …\n• the additivity of mass.\n> m₁/m₂ = Δv₂/Δv₁\n• in interaction, changes in velocity are inversely proportional to masses.\n> 1 t = 10³ kg; 1 g = 10⁻³ kg; 1 mg = 10⁻⁶ kg\n• the SI unit of mass is the kilogram.\n## Diagram\n• Body\n• Balance\n• Mass\n## Note\n• Beam balances compare masses with weights; spring balances use spring extension; electronic balances use sensors.\n## Worked example\n• Problem: A body on a beam balance is balanced by weights of 20 g, 10 g, 2 g, 1 g and 500 mg. Find its mass in grams and kilograms.\n• Given: m₁ = 20 g; m₂ = 10 g; m₃ = 2 g; m₄ = 1 g; m₅ = 500 mg\n• SI conversion: 500 mg = 0.5 g\n• Solution: m = m₁+m₂+m₃+m₄+m₅ → m = 20+10+2+1+0.5 → m = 33.5 g = 0.0335 kg\n• Answer: m = 33.5 g = 0.0335 kg.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Масса дененің инерттілік және гравитациялық қасиеттерін сипаттайды.\n• Масса неғұрлым үлкен болса, жылдамдықты өзгерту соғұрлым қиын әрі Жердің тартуы соғұрлым күшті.\n• Масса сақталады және аддитивтілік қасиетіне ие.\n## Анықтамалар\n• Инерттілік — денелер өзара әрекеттескенде тыныштық не қозғалыс күйі лезде емес, біртіндеп өзгеретін қасиет.\n• Масса — дененің инерттілік және гравитациялық қасиеттерін сипаттайтын скаляр шама.\n• Массаның аддитивтілігі — дененің не жүйенің массасы оны құрайтын бөліктер массаларының қосындысына тең.\n• Өлшеу (таразылау) — массаны белгілі массалармен салыстыру не таразыға әсері арқылы анықтау.\n## Формулалар мен байланыстар\n> m = m₁ + m₂ + …\n• массаның аддитивтілік қасиеті.\n> m₁/m₂ = Δv₂/Δv₁\n• өзара әрекеттесуде жылдамдық өзгерістері массаларға кері пропорционал.\n> 1 т = 10³ кг; 1 г = 10⁻³ кг; 1 мг = 10⁻⁶ кг\n• ХБЖ-дағы масса бірлігі — килограмм.\n## Сызба\n• Дене\n• Таразы\n• Масса\n## Маңызды\n• Иіндік таразы массаны гирлермен салыстырады; серіппелі таразы серіппенің созылуын, ал электрондық таразы датчиктерді қолданады.\n## Есеп шығару үлгісі\n• Есеп: Дене иіндік таразыда 20 г, 10 г, 2 г, 1 г және 500 мг гирлермен теңгерілген. Массасын граммен және килограммен табыңдар.\n• Берілгені: m₁ = 20 g; m₂ = 10 g; m₃ = 2 g; m₄ = 1 g; m₅ = 500 mg\n• ХБЖ: 500 мг = 0,5 г\n• Шешуі: m = m₁+m₂+m₃+m₄+m₅ → m = 20+10+2+1+0.5 → m = 33.5 g = 0.0335 kg\n• Жауабы: m = 33,5 г = 0,0335 кг.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p12": {
    "title": "§ 12. Измерение объёма тел правильной и неправильной формы",
    "titleEn": "§ 12. Measuring the Volume of Regular and Irregular Bodies",
    "titleKk": "§ 12. Дұрыс және дұрыс емес пішінді денелердің көлемін өлшеу",
    "ru": "## Ключевые идеи\n• Объём тел правильной формы обычно рассчитывают по измеренным линейным размерам — это косвенное измерение.\n• Объём тела неправильной формы находят по изменению объёма жидкости в мензурке.\n• В отливном сосуде объём вытесненной воды равен объёму полностью погружённого тела.\n## Определения\n• Объём — пространство, занимаемое телом.\n• Прямое измерение — определение величины непосредственно прибором.\n• Косвенное измерение — расчёт величины по формуле с использованием результатов прямых измерений.\n• Мензурка — измерительный цилиндр для определения объёма жидкости.\n## Формулы и связи\n> V_куба = a³; V_параллелепипеда = abc\n• a, b, c — линейные размеры тела.\n> V_цилиндра = πr²h; V_шара = 4πr³/3\n• r — радиус, h — высота цилиндра.\n> V_тела = V₂ − V₁\n• для погружения в мензурку: разность конечного и начального объёмов жидкости.\n> 1 м³ = 10³ дм³ = 10⁶ см³\n• 1 дм³ = 1 л; 1 см³ = 1 мл.\n## Схема: КАК НАЙТИ ОБЪЁМ\n• a × b × c • V₂ − V₁\n## Важно\n• Тело при погружении должно быть полностью покрыто жидкостью и не содержать пузырьков воздуха.\n## Пример решения\n• Задача: Определите объём шара на башне «Байтерек» диаметром 22 м и сравните его с объёмом павильона «Нур-Алем» диаметром 80 м.\n• Дано: d₁ = 22 м; d₂ = 80 м; V₁, V₂ — ?\n• Перевод в СИ: r₁ = 11 м; r₂ = 40 м\n• Решение: V = 4πr³/3 → V₁ ≈ 4·3,14·11³/3 ≈ 5,57·10³ м³ → V₂ ≈ 4·3,14·40³/3 ≈ 2,68·10⁵ м³ → V₂/V₁ = (40/11)³ ≈ 48\n• Ответ: V«Байтерек» ≈ 5,57·10³ м³; V«Нур-Алем» ≈ 2,68·10⁵ м³. Второй объём примерно в 48 раз больше.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: определи объём столовой ложки и вилки методом вытеснения; результат вырази в м³, дм³, см³, мм³.\n• 🔗 [Лабораторная работа «Измерение объёма тел»](https://gemini.google.com/share/258a24f3d31e)",
    "en": "## Key ideas\n• The volume of a regular body is calculated from measured dimensions; this is an indirect measurement.\n• The volume of a small irregular body is found from the change in liquid level in a measuring cylinder.\n• In an overflow vessel, the volume of displaced water equals the volume of a fully submerged body.\n## Definitions\n• Volume — the space occupied by a body.\n• Direct measurement — determination of a quantity directly using an instrument.\n• Indirect measurement — calculation of a quantity using a formula and results of direct measurements.\n• Measuring cylinder — a graduated vessel for finding the volume of a liquid.\n## Formulas and relations\n> V_cube = a³; V_rectangular prism = abc\n• a, b and c are dimensions of the body.\n> V_cylinder = πr²h; V_sphere = 4πr³/3\n• r is radius and h is cylinder height.\n> V_body = V₂ − V₁\n• for a body immersed in a measuring cylinder: final liquid volume minus initial volume.\n> 1 m³ = 10³ dm³ = 10⁶ cm³\n• 1 dm³ = 1 L; 1 cm³ = 1 mL.\n## Diagram\n• Measure\n• Formula\n• Volume\n## Note\n• The body must be completely covered by liquid and have no air bubbles attached to it.\n## Worked example\n• Problem: Find the volume of the sphere on the Baiterek tower with diameter 22 m and compare it with the volume of the Nur-Alem pavilion with diameter 80 m.\n• Given: d₁ = 22 m; d₂ = 80 m; V₁, V₂ — ?\n• SI conversion: r₁ = 11 m r₂ = 40 m\n• Solution: V = 4πr³/3 → V₁ ≈ 4·3.14·11³/3 ≈ 5.57·10³ m³ → V₂ ≈ 4·3.14·40³/3 ≈ 2.68·10⁵ m³ → V₂/V₁ = (40/11)³ ≈ 48\n• Answer: VBaiterek ≈ 5.57·10³ m³; VNur-Alem ≈ 2.68·10⁵ m³. The second volume is about 48 times larger.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Дұрыс пішінді дененің көлемін өлшенген өлшемдері арқылы есептейді — бұл жанама өлшеу.\n• Кіші дұрыс емес пішінді дененің көлемі мензуркадағы сұйық көлемінің өзгеруімен табылады.\n• Ағызғыш ыдыста ығыстырылған судың көлемі толық батырылған дененің көлеміне тең.\n## Анықтамалар\n• Көлем — дене алып жатқан кеңістік.\n• Тікелей өлшеу — шаманы аспаппен тікелей анықтау.\n• Жанама өлшеу — тікелей өлшеу нәтижелері мен формула арқылы шаманы есептеу.\n• Мензурка — сұйық көлемін анықтауға арналған бөліктері бар ыдыс.\n## Формулалар мен байланыстар\n> V_куб = a³; V_параллелепипед = abc\n• a, b, c — дененің сызықтық өлшемдері.\n> V_цилиндр = πr²h; V_шар = 4πr³/3\n• r — радиус, h — цилиндр биіктігі.\n> V_дене = V₂ − V₁\n• мензуркаға батырғанда: соңғы сұйық көлемінен бастапқы көлемді азайту.\n> 1 м³ = 10³ дм³ = 10⁶ см³\n• 1 дм³ = 1 л; 1 см³ = 1 мл.\n## Сызба\n• Өлшеу\n• Формула\n• Көлем\n## Маңызды\n• Дене сұйыққа толық батуы және оның бетінде ауа көпіршіктері болмауы керек.\n## Есеп шығару үлгісі\n• Есеп: Диаметрі 22 м «Бәйтерек» мұнарасындағы шардың көлемін табыңдар және оны диаметрі 80 м «Нұр-Әлем» павильонының көлемімен салыстырыңдар.\n• Берілгені: d₁ = 22 m; d₂ = 80 m; V₁, V₂ — ?\n• ХБЖ: r₁ = 11 м r₂ = 40 м\n• Шешуі: V = 4πr³/3 → V₁ ≈ 4·3.14·11³/3 ≈ 5.57·10³ m³ → V₂ ≈ 4·3.14·40³/3 ≈ 2.68·10⁵ m³ → V₂/V₁ = (40/11)³ ≈ 48\n• Жауабы: V«Бәйтерек» ≈ 5,57·10³ м³; V«Нұр-Әлем» ≈ 2,68·10⁵ м³. Екінші көлем шамамен 48 есе үлкен.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p13": {
    "title": "§ 13. Плотность вещества и единицы измерения плотности. Расчёт плотности",
    "titleEn": "§ 13. Density of a Substance and Density Calculations",
    "titleKk": "§ 13. Заттың тығыздығы және тығыздықты есептеу",
    "ru": "## Ключевые идеи\n• Плотность показывает, какая масса приходится на единицу объёма вещества.\n• Для одного вещества плотность при одинаковых условиях постоянна; у разных веществ она различается.\n• По известной плотности можно найти массу или объём тела.\n## Определения\n• Плотность вещества — физическая величина, равная отношению массы вещества к его объёму.\n• Однородное тело — тело, состоящее из вещества с одинаковой плотностью во всех частях.\n• Удельный объём — объём, приходящийся на единицу массы; величина, обратная плотности.\n## Формулы и связи\n> ρ = m / V\n• ρ — плотность, m — масса, V — объём.\n> m = ρV; V = m/ρ\n• преобразованные формулы для расчётов.\n> [ρ] = кг/м³; 1 г/см³ = 1000 кг/м³\n• единица плотности в СИ — килограмм на кубический метр.\n## Схема: ТРИ ВЕЛИЧИНЫ ПЛОТНОСТИ\n• ρ = m / V\n## Важно\n• Чтобы найти плотность тела опытным путём: измерь массу весами, объём — по форме или мензуркой, затем раздели m на V.\n## Пример решения\n• Задача: Какую массу имеет урановый шар диаметром 10 см? Плотность урана 19 000 кг/м³.\n• Дано: d = 10 см; ρ = 19 000 кг/м³; m — ?\n• Перевод в СИ: d = 0,1 м; r = 0,05 м\n• Решение: V = 4πr³/3 → V ≈ 4·3,14·(0,05)³/3 ≈ 0,00052 м³ → m = ρV → m ≈ 19 000·0,00052 = 9,9 кг\n• Ответ: m ≈ 9,9 кг.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.",
    "en": "## Key ideas\n• Density shows what mass of a substance corresponds to unit volume.\n• For one substance under the same conditions, density is constant; different substances have different densities.\n• Knowing density allows mass or volume to be calculated.\n## Definitions\n• Density — a physical quantity equal to the ratio of a substance’s mass to its volume.\n• Homogeneous body — a body whose density is the same in all parts.\n• Specific volume — the volume per unit mass; a quantity inverse to density.\n## Formulas and relations\n> ρ = m/V\n• ρ is density, m is mass and V is volume.\n> m = ρV; V = m/ρ\n• rearranged formulas.\n> [ρ] = kg/m³; 1 g/cm³ = 1000 kg/m³\n• the SI unit is kilogram per cubic metre.\n## Diagram\n• m\n• V\n• ρ\n## Note\n• To find density experimentally, measure mass with scales, measure volume by shape or displacement, then divide m by V.\n## Worked example\n• Problem: What is the mass of a uranium sphere 10 cm in diameter? Density of uranium is 19 000 kg/m³.\n• Given: d = 10 cm; ρ = 19 000 kg/m³; m — ?\n• SI conversion: d = 0.1 m r = 0.05 m\n• Solution: V = 4πr³/3 → V ≈ 4·3.14·(0.05)³/3 ≈ 0.00052 m³ → m = ρV ≈ 19 000·0.00052 = 9.9 kg\n• Answer: m ≈ 9.9 kg.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Тығыздық заттың бірлік көлеміне қандай масса келетінін көрсетеді.\n• Бір зат үшін бірдей жағдайда тығыздық тұрақты, ал әр заттың тығыздығы әртүрлі.\n• Тығыздық белгілі болса, массаны не көлемді есептеуге болады.\n## Анықтамалар\n• Тығыздық — зат массасының оның көлеміне қатынасына тең физикалық шама.\n• Біртекті дене — барлық бөліктерінде тығыздығы бірдей дене.\n• Меншікті көлем — бірлік массаға келетін көлем; тығыздыққа кері шама.\n## Формулалар мен байланыстар\n> ρ = m/V\n• ρ — тығыздық, m — масса, V — көлем.\n> m = ρV; V = m/ρ\n• түрлендірілген формулалар.\n> [ρ] = кг/м³; 1 г/см³ = 1000 кг/м³\n• ХБЖ-дағы тығыздық бірлігі — килограмм/куб метр.\n## Сызба\n• m\n• V\n• ρ\n## Маңызды\n• Тығыздықты тәжірибеде табу үшін массаны таразымен, көлемді пішіні бойынша не ығыстыру әдісімен өлшеп, m-ді V-ге бөледі.\n## Есеп шығару үлгісі\n• Есеп: Диаметрі 10 см уран шарының массасы қандай? Уранның тығыздығы 19 000 кг/м³.\n• Берілгені: d = 10 cm; ρ = 19 000 kg/m³; m — ?\n• ХБЖ: d = 0,1 м r = 0,05 м\n• Шешуі: V = 4πr³/3 → V ≈ 4·3.14·(0.05)³/3 ≈ 0.00052 m³ → m = ρV ≈ 19 000·0.00052 = 9.9 kg\n• Жауабы: m ≈ 9,9 кг.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p14": {
    "title": "§ 14. Явление инерции",
    "titleEn": "§ 14. The Phenomenon of Inertia",
    "titleKk": "§ 14. Инерция құбылысы",
    "ru": "## Ключевые идеи\n• Тело не начинает движение, не останавливается и не меняет скорость само по себе.\n• При отсутствии действия других тел скорость сохраняется: движение остаётся равномерным и прямолинейным.\n• В земных условиях инерцию трудно наблюдать «в чистом виде» из-за трения и сопротивления воздуха.\n## Определения\n• Инерция — явление сохранения скорости тела при отсутствии действия на него других тел.\n• Инерция покоя — сохранение покоя тела, пока взаимодействие не изменит его состояние.\n• Инерция движения — сохранение скорости движущегося тела, пока другие тела не изменят её.\n## Формулы и связи\n> ΣF⃗ = 0 → v⃗ = const\n• если силы отсутствуют или уравновешены, тело покоится либо движется равномерно и прямолинейно.\n## Схема: ПРОЯВЛЕНИЕ ИНЕРЦИИ\n• автобус • человек\n• резкое торможение\n## Важно\n• При резком торможении автобуса пассажир продолжает двигаться вперёд по инерции; ремень безопасности уменьшает опасные последствия.\n## Экспериментальные задания\n• Экспериментальное задание: положи на стол газету так, чтобы край свисал, сверху — книгу; резко выдерни газету, затем медленно; сравни и объясни. Повтори со стопкой книг.\n• 🔗 [«Выдернуть скатерть» — видео от «Чудеса науки»](https://vk.com/video-19801656_164198235)",
    "en": "## Key ideas\n• A body cannot start moving, stop, or change velocity by itself.\n• Without the action of other bodies, velocity is conserved: motion remains uniform and straight.\n• On Earth, friction and air resistance make pure inertia difficult to observe.\n## Definitions\n• Inertia — the phenomenon of preserving a body’s velocity when no other bodies act on it.\n• Inertia of rest — preservation of rest until interaction changes the state.\n• Inertia of motion — preservation of velocity by a moving body until interaction changes it.\n## Formulas and relations\n> ΣF⃗ = 0 → v⃗ = const\n• if forces are absent or balanced, a body is at rest or moves uniformly in a straight line.\n## Diagram\n• F = 0  →  v = const.\n## Note\n• When a bus brakes sharply, a passenger continues moving forward by inertia; a seat belt reduces the dangerous consequence.",
    "kk": "## Негізгі ойлар\n• Дене өздігінен қозғала, тоқтай немесе жылдамдығын өзгерте алмайды.\n• Басқа денелердің әсері болмаса, жылдамдық сақталады: қозғалыс түзу сызықты және бірқалыпты болады.\n• Жерде үйкеліс пен ауаның кедергісі таза инерцияны бақылауды қиындатады.\n## Анықтамалар\n• Инерция — басқа денелердің әсері болмағанда дененің жылдамдығын сақтау құбылысы.\n• Тыныштық инерциясы — өзара әрекет күйді өзгерткенге дейін дененің тыныштық күйін сақтауы.\n• Қозғалыс инерциясы — өзара әрекет өзгерткенге дейін қозғалған дененің жылдамдығын сақтауы.\n## Формулалар мен байланыстар\n> ΣF⃗ = 0 → v⃗ = const\n• күштер жоқ не теңгерілген болса, дене тыныштықта немесе түзу сызықты бірқалыпты қозғалады.\n## Сызба\n• F = 0  →  v = const.\n## Маңызды\n• Автобус кенет тежелгенде жолаушы инерциямен алға қозғалады; қауіпсіздік белдігі оның қауіпті салдарын азайтады."
  },
  "p15": {
    "title": "§ 15. Сила",
    "titleEn": "§ 15. Force",
    "titleKk": "§ 15. Күш",
    "ru": "## Ключевые идеи\n• Сила характеризует взаимодействие тел и может изменить скорость или вызвать деформацию.\n• Сила — вектор: важны модуль, направление и точка приложения.\n• Силу измеряют динамометром, действие которого основано на деформации пружины.\n## Определения\n• Сила — физическая величина, характеризующая взаимодействие тел.\n• Вектор силы — направленный отрезок: начало — точка приложения, стрелка — направление, длина в масштабе — модуль.\n• Динамометр — прибор для измерения силы.\n## Формулы и связи\n> [F] = 1 Н\n• 1 ньютон — сила, изменяющая скорость тела массой 1 кг на 1 м/с за 1 с.\n> 1 кН = 10³ Н; 1 мН = 10⁻³ Н; 1 МН = 10⁶ Н\n• кратные и дольные единицы силы.\n## Схема: СИЛА — ВЕКТОР\n• F⃗\n• точка приложения\n## Важно\n• На рисунке возле силы ставят стрелку: F⃗. Без стрелки F обычно обозначает только модуль силы.\n## Пример решения\n• Задача: Изобразите силу 100 Н, направленную влево, в масштабе: 1 см — 20 Н.\n• Дано: F = 100 Н; 1 см ↔ 20 Н; l — ? (перевод в СИ не требуется)\n• Решение: l = F / (20 Н/см) → l = 100 Н / (20 Н/см) → l = 5 см → Направление стрелки — влево.\n• Ответ: Нужно начертить вектор длиной 5 см, направленный влево.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: изготовь самодельный пружинный динамометр и нанеси шкалу, используя грузы разной массы и промышленный динамометр.\n• 🔗 [Динамометр — градуирование шкалы подручными средствами](https://www.youtube.com/watch?v=bzK7Zcm36VM)",
    "en": "## Key ideas\n• Force characterizes the interaction of bodies and can change velocity or produce deformation.\n• Force is a vector: magnitude, direction and point of application all matter.\n• Force is measured with a dynamometer whose operation is based on spring deformation.\n## Definitions\n• Force — a physical quantity characterizing interaction between bodies.\n• Force vector — a directed segment: its beginning is the point of application, arrow is direction, and scaled length is magnitude.\n• Dynamometer — an instrument for measuring force.\n## Formulas and relations\n> [F] = 1 N\n• one newton is the force that changes the velocity of a 1 kg body by 1 m/s in 1 s.\n> 1 kN = 10³ N; 1 mN = 10⁻³ N; 1 MN = 10⁶ N\n• multiples and submultiples of force.\n## Diagram\n• F⃗\n## Note\n• A vector force is written F⃗. The symbol F without an arrow usually means only the magnitude.\n## Worked example\n• Problem: Draw a 100 N force directed to the left using the scale 1 cm = 20 N.\n• Given: F = 100 N; 1 cm ↔ 20 N; l — ?\n• SI conversion: No conversion needed\n• Solution: l = F/(20 N/cm) → l = 100/(20) = 5 cm\n• Answer: Draw a vector 5 cm long pointing to the left.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Күш денелердің өзара әрекеттесуін сипаттайды және жылдамдықты өзгерте не деформация тудыра алады.\n• Күш — вектор: модулі, бағыты және түсу нүктесі маңызды.\n• Күш серіппенің деформациясына негізделген динамометрмен өлшенеді.\n## Анықтамалар\n• Күш — денелердің өзара әрекеттесуін сипаттайтын физикалық шама.\n• Күш векторы — бағытталған кесінді: басы — күш түсу нүктесі, жебесі — бағыты, масштабтағы ұзындығы — модулі.\n• Динамометр — күшті өлшейтін аспап.\n## Формулалар мен байланыстар\n> [F] = 1 Н\n• 1 ньютон — массасы 1 кг дененің жылдамдығын 1 с ішінде 1 м/с-қа өзгертетін күш.\n> 1 кН = 10³ Н; 1 мН = 10⁻³ Н; 1 МН = 10⁶ Н\n• күштің еселік және үлестік бірліктері.\n## Сызба\n• F⃗\n## Маңызды\n• Векторлық күш F⃗ деп жазылады. Жебесіз F таңбасы көбіне күш модулін ғана білдіреді.\n## Есеп шығару үлгісі\n• Есеп: 1 см — 20 Н масштабымен солға бағытталған 100 Н күшті кескіндеңдер.\n• Берілгені: F = 100 N; 1 cm ↔ 20 N; l — ?\n• ХБЖ: ХБЖ-ға ауыстыру қажет емес\n• Шешуі: l = F/(20 N/cm) → l = 100/(20) = 5 cm\n• Жауабы: Ұзындығы 5 см, солға бағытталған вектор сызу керек.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p16": {
    "title": "§ 16. Явление тяготения и сила тяжести. Вес",
    "titleEn": "§ 16. Gravitation, Gravitational Force and Weight",
    "titleKk": "§ 16. Тартылыс құбылысы, ауырлық күші және салмақ",
    "ru": "## Ключевые идеи\n• Все тела притягиваются; это взаимодействие называют всемирным тяготением.\n• Сила тяжести — сила, с которой Земля притягивает тело; она направлена к центру Земли.\n• Вес и сила тяжести — разные силы: у них разные точки приложения.\n## Определения\n• Сила тяжести — сила, с которой Земля притягивает к себе тело.\n• Вес тела — сила, с которой тело вследствие действия силы тяжести действует на опору или подвес.\n• Невесомость — состояние тела, при котором оно не действует на опору или подвес, хотя масса и сила тяжести сохраняются.\n• Поле гравитации — область пространства, в которой проявляется притяжение Земли.\n## Формулы и связи\n> F_тяж = mg\n• m — масса, g ≈ 9,8 Н/кг у поверхности Земли.\n> P = F_тяж = mg\n• для неподвижной горизонтальной опоры или вертикального неподвижного подвеса.\n> [P] = [F_тяж] = Н\n• вес — сила, поэтому его не измеряют в килограммах.\n## Схема: СИЛА ТЯЖЕСТИ И ВЕС\n• F_тяж\n• к центру Земли\n## Важно\n• На большей высоте сила притяжения Земли меньше. В свободном падении тело находится в невесомости.\n## Пример решения\n• Задача: Определите силу тяжести, действующую на 20 л воды.\n• Дано: V = 20 л; ρ_воды = 1000 кг/м³; g = 10 Н/кг; F_тяж — ?\n• Перевод в СИ: V = 20·0,001 м³; V = 0,02 м³\n• Решение: m = ρV → m = 1000·0,02 = 20 кг → F_тяж = mg → F_тяж = 20·10 = 200 Н\n• Ответ: F_тяж = 200 Н.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.",
    "en": "## Key ideas\n• All bodies attract one another; this interaction is called universal gravitation.\n• Gravitational force is the force with which Earth attracts a body; it points toward Earth’s centre.\n• Weight and gravitational force are different forces because their points of application differ.\n## Definitions\n• Gravitational force — the force with which Earth attracts a body.\n• Weight — the force with which a body, because of gravity, acts on a support or suspension.\n• Weightlessness — a state in which a body does not act on a support or suspension, although it still has mass and is acted on by gravity.\n• Gravitational field — the region of space in which Earth’s attraction acts.\n## Formulas and relations\n> F_g = mg\n• m is mass; near Earth’s surface g ≈ 9.8 N/kg.\n> P = F_g = mg\n• for a body on a stationary horizontal support or hanging from a stationary vertical suspension.\n> [P] = [F_g] = N\n• weight is a force, so it is not measured in kilograms.\n## Diagram\n• F_g\n## Note\n• At greater altitude Earth’s attraction is smaller. A freely falling body is in weightlessness.\n## Worked example\n• Problem: Find the gravitational force acting on 20 L of water.\n• Given: V = 20 L; ρ = 1000 kg/m³; g = 10 N/kg; F_g — ?\n• SI conversion: V = 20·0.001 m³ V = 0.02 m³\n• Solution: m = ρV → m = 1000·0.02 = 20 kg → F_g = mg → F_g = 20·10 = 200 N\n• Answer: F_g = 200 N.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Барлық денелер бір-бірін тартады; бұл өзара әрекет бүкіләлемдік тартылыс деп аталады.\n• Ауырлық күші — Жердің денені тарту күші; ол Жер центріне бағытталған.\n• Салмақ пен ауырлық күші — түсу нүктелері әртүрлі болғандықтан екі бөлек күш.\n## Анықтамалар\n• Ауырлық күші — Жердің денені өзіне тартатын күші.\n• Дене салмағы — ауырлық күшінің әсерінен дененің тірекке не аспаға түсіретін күші.\n• Салмақсыздық — дене тірекке не аспаға әсер етпейтін, бірақ массасы мен оған әсер ететін ауырлық күші сақталатын күй.\n• Гравитациялық өріс — Жердің тартылыс әсері байқалатын кеңістік аймағы.\n## Формулалар мен байланыстар\n> F_g = mg\n• m — масса; Жер бетіне жақын жерде g ≈ 9,8 Н/кг.\n> P = F_g = mg\n• қозғалмайтын көлденең тіректе не қозғалмайтын тік аспада.\n> [P] = [F_g] = Н\n• салмақ — күш, сондықтан ол килограммен өлшенбейді.\n## Сызба\n• F_g\n## Маңызды\n• Биіктеген сайын Жердің тартылысы кемиді. Еркін құлаған дене салмақсыздық күйінде болады.\n## Есеп шығару үлгісі\n• Есеп: 20 л суға әсер ететін ауырлық күшін анықтаңдар.\n• Берілгені: V = 20 L; ρ = 1000 kg/m³; g = 10 N/kg; F_g — ?\n• ХБЖ: V = 20·0,001 м³ V = 0,02 м³\n• Шешуі: m = ρV → m = 1000·0.02 = 20 kg → F_g = mg → F_g = 20·10 = 200 N\n• Жауабы: F_g = 200 Н.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p17": {
    "title": "§ 17. Деформация",
    "titleEn": "§ 17. Deformation",
    "titleKk": "§ 17. Деформация",
    "ru": "## Ключевые идеи\n• При взаимодействии тела могут изменять форму и размеры — это деформация.\n• Упругая деформация исчезает после снятия силы, пластическая сохраняется.\n• Вид деформации зависит от направления силы и точки её приложения.\n## Определения\n• Деформация — изменение формы и/или размеров тела.\n• Упругая деформация — деформация, после которой тело полностью восстанавливает форму и размеры.\n• Пластическая деформация — деформация, после которой тело сохраняет новую форму или размеры.\n• Виды деформации — растяжение, сжатие, сдвиг, изгиб и кручение.\n## Формулы и связи\n> F_внешняя → деформация → F_упругости\n• упругое тело при деформации создаёт силу, стремящуюся вернуть первоначальную форму.\n## Схема: ВИДЫ ДЕФОРМАЦИЙ\n• растяжение • сжатие • изгиб\n## Важно\n• Пружина и резиновый мяч — примеры упругого поведения; пластилин, воск и глина — пластического.\n## Экспериментальные задания\n• Экспериментальное задание: проведи испытание на разрыв швейных ниток разной толщины (одинаковой длины) и одинаковой толщины (разной длины); обсуди результаты с одноклассниками.\n• 🔗 [Испытание швейных ниток на разрыв](https://vk.com/video213138898_456240939)",
    "en": "## Key ideas\n• When bodies interact, their shape or dimensions can change; this is deformation.\n• Elastic deformation disappears when the force is removed, while plastic deformation remains.\n• The type of deformation depends on the direction and point of application of the force.\n## Definitions\n• Deformation — a change in the shape and/or dimensions of a body.\n• Elastic deformation — a deformation after which the body completely restores its shape and size.\n• Plastic deformation — a deformation after which the body retains its new shape or size.\n• Types of deformation — tension, compression, shear, bending and torsion.\n## Formulas and relations\n> external force → deformation → elastic force\n• an elastic body produces a restoring force when deformed.\n## Diagram\n• Tension\n• Compression\n• Bending\n## Note\n• A spring and a rubber ball behave elastically; plasticine, wax and clay show plastic deformation.",
    "kk": "## Негізгі ойлар\n• Денелер өзара әрекеттескенде пішіні немесе өлшемі өзгеруі мүмкін; бұл — деформация.\n• Серпімді деформация күш алынғанда жоғалады, ал пластикалық деформация сақталады.\n• Деформация түрі күштің бағытына және түсу нүктесіне тәуелді.\n## Анықтамалар\n• Деформация — дене пішінінің және/немесе өлшемдерінің өзгеруі.\n• Серпімді деформация — күш алынған соң дене пішіні мен өлшемін толық қалпына келтіретін деформация.\n• Пластикалық деформация — дене жаңа пішінін не өлшемін сақтайтын деформация.\n• Деформация түрлері — созылу, сығылу, ығысу, иілу және бұралу.\n## Формулалар мен байланыстар\n> сыртқы күш → деформация → серпімділік күші\n• серпімді дене деформацияланғанда бастапқы пішінін қалпына келтіретін күш тудырады.\n## Сызба\n• Созылу\n• Сығылу\n• Иілу\n## Маңызды\n• Серіппе мен резеңке доп серпімді, ал ермексаз, балауыз және саз пластикалық деформацияға мысал болады."
  },
  "p18": {
    "title": "§ 18. Сила упругости, закон Гука",
    "titleEn": "§ 18. Elastic Force and Hooke’s Law",
    "titleKk": "§ 18. Серпімділік күші және Гук заңы",
    "ru": "## Ключевые идеи\n• Сила упругости возникает при деформации тела и направлена против деформации.\n• В пределах упругости растяжение пружины прямо пропорционально приложенной силе.\n• Жёсткая пружина при одинаковом удлинении создаёт большую силу упругости.\n## Определения\n• Сила упругости — сила, возникающая при деформации тела и стремящаяся восстановить его форму и размеры.\n• Удлинение — изменение длины: разность длины деформированного и недеформированного тела.\n• Жёсткость пружины — коэффициент пропорциональности между силой упругости и удлинением.\n## Формулы и связи\n> F_упр = kΔl\n• закон Гука; k — жёсткость пружины, Δl — удлинение.\n> Δl = l − l₀; k = F_упр/Δl\n• l₀ — первоначальная длина пружины.\n> [k] = Н/м\n• закон Гука применяется только при упругой деформации, до предела упругости.\n## Схема: ЗАКОН ГУКА\n• F_упр = kΔl\n## Важно\n• Для подвешенного неподвижного груза сила упругости пружины по модулю равна силе тяжести груза.\n## Пример решения\n• Задача: Под действием силы 320 Н пружина сжалась на 8 мм. На сколько она сожмётся при нагрузке 1,6 кН?\n• Дано: F₁ = 320 Н; Δl₁ = 8 мм; F₂ = 1,6 кН; Δl₂ — ?\n• Перевод в СИ: F₂ = 1600 Н\n• Решение: По закону Гука: F₁/Δl₁ = F₂/Δl₂ → Δl₂ = Δl₁·F₂/F₁ → Δl₂ = 8·1600/320 = 40 мм\n• Ответ: Δl₂ = 40 мм.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: исследуй упругие свойства простого листа бумаги и сложенного в гармошку; выясни, где применяется гофрированная бумага.\n• 🔗 [Практическое применение гофрированной бумаги](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)",
    "en": "## Key ideas\n• Elastic force appears when a body is deformed and is directed against the deformation.\n• Within the elastic limit, a spring’s extension is directly proportional to the applied force.\n• A stiffer spring produces a greater elastic force for the same extension.\n## Definitions\n• Elastic force — the force arising during deformation that tends to restore a body’s original shape and size.\n• Extension — the change in length: deformed length minus original length.\n• Spring constant — the coefficient of proportionality between elastic force and extension.\n## Formulas and relations\n> F_el = kΔl\n• Hooke’s law; k is spring constant and Δl is extension.\n> Δl = l − l₀; k = F_el/Δl\n• l₀ is the original length of the spring.\n> [k] = N/m\n• Hooke’s law applies only to elastic deformation, before the elastic limit is exceeded.\n## Diagram\n• F = kΔl\n## Note\n• For a stationary load hanging on a spring, the elastic force equals the gravitational force in magnitude.\n## Worked example\n• Problem: A spring is compressed by 8 mm under a force of 320 N. How much will it compress under a load of 1.6 kN?\n• Given: F₁ = 320 N; Δl₁ = 8 mm; F₂ = 1.6 kN; Δl₂ — ?\n• SI conversion: F₂ = 1600 N\n• Solution: F₁/Δl₁ = F₂/Δl₂ → Δl₂ = Δl₁·F₂/F₁ → Δl₂ = 8·1600/320 = 40 mm\n• Answer: Δl₂ = 40 mm.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Серпімділік күші дене деформацияланғанда пайда болады және деформацияға қарсы бағытталады.\n• Серпімділік шегінде серіппенің ұзаруы түсірілген күшке тура пропорционал.\n• Бірдей ұзаруда қатаң серіппе үлкен серпімділік күшін тудырады.\n## Анықтамалар\n• Серпімділік күші — деформация кезінде пайда болып, дененің бастапқы пішіні мен өлшемін қалпына келтіруге тырысатын күш.\n• Ұзару — ұзындықтың өзгеруі: деформацияланған ұзындықтан бастапқы ұзындықты азайту.\n• Серіппенің қатаңдығы — серпімділік күші мен ұзару арасындағы пропорционалдық коэффициенті.\n## Формулалар мен байланыстар\n> F_серп = kΔl\n• Гук заңы; k — серіппе қатаңдығы, Δl — ұзару.\n> Δl = l − l₀; k = F_серп/Δl\n• l₀ — серіппенің бастапқы ұзындығы.\n> [k] = Н/м\n• Гук заңы серпімділік шегінен аспайтын серпімді деформацияға ғана қолданылады.\n## Сызба\n• F = kΔl\n## Маңызды\n• Серіппеге ілінген қозғалмайтын жүк үшін серпімділік күшінің модулі ауырлық күшінің модуліне тең.\n## Есеп шығару үлгісі\n• Есеп: 320 Н күштің әсерінен серіппе 8 мм-ге сығылды. 1,6 кН жүктемеде ол неше мм-ге сығылады?\n• Берілгені: F₁ = 320 N; Δl₁ = 8 mm; F₂ = 1.6 kN; Δl₂ — ?\n• ХБЖ: F₂ = 1600 Н\n• Шешуі: F₁/Δl₁ = F₂/Δl₂ → Δl₂ = Δl₁·F₂/F₁ → Δl₂ = 8·1600/320 = 40 mm\n• Жауабы: Δl₂ = 40 мм.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p19": {
    "title": "§ 19. Сила трения. Учёт трения в технике",
    "titleEn": "§ 19. Friction Force. Friction in Engineering",
    "titleKk": "§ 19. Үйкеліс күші. Техникадағы үйкелісті ескеру",
    "ru": "## Ключевые идеи\n• Трение возникает при соприкосновении тел; оно препятствует их относительному движению или его началу.\n• Различают трение покоя, скольжения и качения.\n• Трение может быть полезным (ходьба, торможение) и вредным (износ, нагрев, потери энергии).\n## Определения\n• Сила трения покоя — сила, препятствующая началу относительного движения соприкасающихся тел.\n• Сила трения скольжения — сила при скольжении одного тела по поверхности другого; направлена против движения.\n• Сила трения качения — сила при качении тела по поверхности; обычно меньше силы трения скольжения.\n• Коэффициент трения μ — безразмерная величина, зависящая от материалов и состояния соприкасающихся поверхностей.\n## Формулы и связи\n> F_тр = μN\n• для силы трения скольжения: N — сила реакции опоры.\n> F_тр.пок ≤ F_тр.пок,max\n• трение покоя подстраивается под приложенную силу до предельного значения.\n## Схема: ВИДЫ ТРЕНИЯ\n• движение • F_тр\n## Важно\n• Чтобы уменьшить трение, применяют смазку, полировку и подшипники; чтобы увеличить — используют шероховатость, резину, шипы.\n## Пример решения\n• Задача: Деревянный брусок массой 2 кг тянут равномерно по деревянной доске. Определите силу трения. Коэффициент трения дерева по дереву μ = 0,25.\n• Дано: m = 2 кг; μ = 0,25; g = 10 Н/кг; F_тр — ? (перевод в СИ не требуется)\n• Решение: N = mg = 2·10 = 20 Н → F_тр = μN → F_тр = 0,25·20 = 5 Н → При равномерном движении F_тяги = F_тр.\n• Ответ: F_тр = 5 Н.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: самодельным динамометром определи коэффициент трения скольжения разных поверхностей и составь таблицу.\n• 🔗 [Лабораторная работа «Определение коэффициента трения скольжения»](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)",
    "en": "## Key ideas\n• Friction appears when bodies touch; it opposes relative motion or its beginning.\n• There are static friction, sliding friction and rolling friction.\n• Friction may be useful (walking, braking) or harmful (wear, heating and energy loss).\n## Definitions\n• Static friction — a force that prevents the start of relative motion between contacting bodies.\n• Sliding friction — a force during sliding of one body over another; it points opposite the motion.\n• Rolling friction — a force during rolling; it is usually less than sliding friction.\n• Coefficient of friction μ — a dimensionless number depending on materials and the condition of contacting surfaces.\n## Formulas and relations\n> F_fr = μN\n• for sliding friction: N is the normal reaction force.\n> F_static ≤ F_static,max\n• static friction adjusts to the applied force up to a maximum value.\n## Diagram\n• F_fr  ←   →  v\n## Note\n• To reduce friction, use lubrication, polishing and bearings. To increase it, use roughness, rubber or studs.\n## Worked example\n• Problem: A 2 kg wooden block is pulled uniformly along a wooden board. Find friction if μ = 0.25.\n• Given: m = 2 kg; μ = 0.25; g = 10 N/kg; F_fr — ?\n• SI conversion: All values are in SI\n• Solution: N = mg = 2·10 = 20 N → F_fr = μN → F_fr = 0.25·20 = 5 N\n• Answer: F_fr = 5 N.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Үйкеліс денелер жанасқанда пайда болады және салыстырмалы қозғалысқа не оның басталуына кедергі жасайды.\n• Тыныштық, сырғанау және домалау үйкелісі бар.\n• Үйкеліс пайдалы (жүру, тежеу) да, зиянды (тозу, қызу, энергия шығыны) да болуы мүмкін.\n## Анықтамалар\n• Тыныштық үйкелісі — жанасқан денелердің салыстырмалы қозғалысының басталуына кедергі жасайтын күш.\n• Сырғанау үйкелісі — бір дене екіншісінің бетімен сырғанағанда пайда болатын, қозғалысқа қарсы бағытталған күш.\n• Домалау үйкелісі — дене бетпен домалағанда пайда болатын күш; ол әдетте сырғанау үйкелісінен кіші.\n• Үйкеліс коэффициенті μ — жанасатын материалдар мен бет күйіне тәуелді өлшемсіз шама.\n## Формулалар мен байланыстар\n> F_үйк = μN\n• сырғанау үйкелісі үшін: N — тіректің реакция күші.\n> F_тыныш ≤ F_тыныш,max\n• тыныштық үйкелісі шектік мәнге дейін түсірілген күшке бейімделеді.\n## Сызба\n• F_үйк  ←   →  v\n## Маңызды\n• Үйкелісті азайту үшін майлау, жылтырату және мойынтірек қолданады; арттыру үшін кедір-бұдыр, резеңке және шеге пайдаланады.\n## Есеп шығару үлгісі\n• Есеп: Массасы 2 кг ағаш білеушені ағаш тақтай бойымен бірқалыпты тартады. μ = 0,25 болса, үйкеліс күшін табыңдар.\n• Берілгені: m = 2 kg; μ = 0.25; g = 10 N/kg; F_үйк — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: N = mg = 2·10 = 20 N → F_үйк = μN → F_үйк = 0.25·20 = 5 N\n• Жауабы: F_үйк = 5 Н.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p20": {
    "title": "§ 20. Сложение сил, действующих на тело вдоль одной прямой",
    "titleEn": "§ 20. Adding Forces Acting along One Straight Line",
    "titleKk": "§ 20. Бір түзу бойымен әсер ететін күштерді қосу",
    "ru": "## Ключевые идеи\n• Несколько сил можно заменить одной равнодействующей, если её действие на тело такое же.\n• Силы в одном направлении складывают.\n• Для противоположных сил находят разность и выбирают направление большей силы.\n## Определения\n• Равнодействующая сила — сила, производящая такое же действие, как несколько одновременно действующих сил.\n• Уравновешенные силы — силы, равные по модулю и противоположные по направлению; их равнодействующая равна нулю.\n• Сила натяжения — сила, с которой растянутая нить действует на тело.\n## Формулы и связи\n> R = F₁ + F₂ + …\n• если силы направлены вдоль одной прямой в одну сторону.\n> R = |F₁ − F₂|\n• если силы противоположны; направление R совпадает с большей силой.\n> R = 0\n• при равных противоположно направленных силах: тело покоится или движется равномерно и прямолинейно.\n## Схема: СЛОЖЕНИЕ СИЛ\n• F₁ • F₂\n• R = |F₁ − F₂|\n## Важно\n• Для n одинаково нагруженных вертикальных нитей, удерживающих груз P, натяжение каждой нити T = P/n.\n## Пример решения\n• Задача: На автомобиль действуют сила тяги 1,25 кН, сила трения 600 Н и сила сопротивления воздуха 450 Н. Определите равнодействующую сил.\n• Дано: F_тяги = 1,25 кН; F_тр = 600 Н; F_сопр = 450 Н; R — ?\n• Перевод в СИ: F_тяги = 1250 Н\n• Решение: Сила тяги направлена вперёд, силы → сопротивления — назад. → R = F_тяги − F_тр − F_сопр → R = 1250 − 600 − 450 → R = 200 Н\n• Ответ: R = 200 Н, направлена в сторону движения автомобиля.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: изготовь динамометр из резинового жгута, проградуируй его, определи вес нескольких тел и составь паспорт динамометра.\n• 🔗 [«Силы и движение: основы»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)",
    "en": "## Key ideas\n• Several forces can be replaced by one resultant force with the same effect on a body.\n• Forces in the same direction are added.\n• For opposite forces, find the difference and use the direction of the larger force.\n## Definitions\n• Resultant force — a force that produces the same effect as several forces acting at the same time.\n• Balanced forces — forces equal in magnitude and opposite in direction; their resultant is zero.\n• Tension force — the force with which a stretched string acts on a body.\n## Formulas and relations\n> R = F₁ + F₂ + …\n• when collinear forces act in the same direction.\n> R = |F₁ − F₂|\n• when forces have opposite directions; R points in the direction of the larger force.\n> R = 0\n• for equal opposite forces: a body is at rest or moves uniformly in a straight line.\n## Diagram\n• R = |F₁ − F₂|\n## Note\n• For n equally loaded vertical strings holding a load of weight P, the tension in each string is T = P/n.\n## Worked example\n• Problem: A car is acted on by a tractive force of 1.25 kN, friction of 600 N and air resistance of 450 N. Find the resultant.\n• Given: F₁ = 1.25 kN; F₂ = 600 N; F₃ = 450 N; R — ?\n• SI conversion: F₁ = 1250 N\n• Solution: R = F₁ − F₂ − F₃ → R = 1250 − 600 − 450 → R = 200 N\n• Answer: R = 200 N, directed along the car’s motion.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Бірнеше күштің әсерін денеге сондай әсер ететін бір теңәрекетті күшпен алмастыруға болады.\n• Бір бағыттағы күштер қосылады.\n• Қарама-қарсы бағыттағы күштердің айырмасы алынып, үлкен күш бағыты таңдалады.\n## Анықтамалар\n• Теңәрекетті күш — бір мезгілде әсер ететін бірнеше күшпен бірдей әсер ететін күш.\n• Теңгерілген күштер — модульдері тең, бағыттары қарама-қарсы күштер; олардың теңәрекетті күші нөлге тең.\n• Керілу күші — созылған жіптің денеге әсер ететін күші.\n## Формулалар мен байланыстар\n> R = F₁ + F₂ + …\n• бір түзудің бойындағы күштер бір бағытталса.\n> R = |F₁ − F₂|\n• күштер қарама-қарсы болса; R үлкен күш бағытымен бағытталады.\n> R = 0\n• қарама-қарсы тең күштерде дене тыныштықта не түзу сызықты бірқалыпты қозғалады.\n## Сызба\n• R = |F₁ − F₂|\n## Маңызды\n• Салмағы P жүкті n бірдей жүктелген тік жіп ұстаса, әр жіптің керілу күші T = P/n.\n## Есеп шығару үлгісі\n• Есеп: Автомобильге 1,25 кН тарту күші, 600 Н үйкеліс күші және 450 Н ауа кедергісі әсер етеді. Теңәрекетті күшті табыңдар.\n• Берілгені: F₁ = 1.25 kN; F₂ = 600 N; F₃ = 450 N; R — ?\n• ХБЖ: F₁ = 1250 Н\n• Шешуі: R = F₁ − F₂ − F₃ → R = 1250 − 600 − 450 → R = 200 N\n• Жауабы: R = 200 Н, автомобиль қозғалысы бағытымен бағытталған.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p21": {
    "title": "§ 21. Молекулярное строение твёрдых тел, жидкостей и газов",
    "titleEn": "§ 21. Molecular Structure of Solids, Liquids and Gases",
    "titleKk": "§ 21. Қатты денелердің, сұйықтардың және газдардың молекулалық құрылысы",
    "ru": "## Ключевые идеи\n• Все вещества состоят из мельчайших частиц — атомов и молекул; между частицами есть промежутки.\n• Частицы непрерывно и беспорядочно движутся, что доказывает диффузия.\n• Частицы взаимодействуют: притягиваются и отталкиваются. Этим объясняются свойства агрегатных состояний.\n## Определения\n• Атом — мельчайшая частица химического элемента.\n• Молекула — мельчайшая частица вещества, сохраняющая его свойства.\n• Диффузия — взаимное проникновение частиц одного вещества между частицами другого.\n• Агрегатное состояние — состояние вещества с определёнными качественными свойствами: твёрдое, жидкое или газообразное.\n## Формулы и связи\n> Три положения МКТ\n• 1) вещества состоят из частиц; 2) частицы непрерывно движутся; 3) частицы взаимодействуют.\n> Твёрдое → жидкое → газ\n• ослабляется связь частиц и возрастает их свобода движения: форма и объём сохраняются всё меньше.\n## Схема: ТРИ ПОЛОЖЕНИЯ МКТ\n• частицы • движение • взаимодействие\n## Важно\n• Твёрдые тела сохраняют форму и объём; жидкости сохраняют объём, но принимают форму сосуда; газы не имеют постоянных формы и объёма и легко сжимаются.\n## Экспериментальные задания\n• Экспериментальное задание: определи толщину одного листа учебника с учётом погрешности; определи скорость диффузии в газах, открыв флакон духов и замерив время распространения запаха.\n• 🔗 [Симулятор «Определение толщины листа»](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [Симулятор «Диффузия»](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)",
    "en": "## Key ideas\n• All substances consist of tiny particles — atoms and molecules — with spaces between them.\n• Particles move continuously and randomly; diffusion demonstrates this.\n• Particles interact by attraction and repulsion; this explains the properties of states of matter.\n## Definitions\n• Atom — the smallest particle of a chemical element.\n• Molecule — the smallest particle of a substance that retains that substance’s properties.\n• Diffusion — mutual penetration of particles of one substance between particles of another.\n• State of matter — a state with characteristic properties: solid, liquid or gaseous.\n## Formulas and relations\n> Three statements of molecular-kinetic theory\n• 1) substances consist of particles; 2) particles move continuously; 3) particles interact.\n> solid → liquid → gas\n• particle bonds weaken and freedom of motion increases; shape and volume are retained less and less.\n## Diagram\n• Particles\n• Motion\n• Interaction\n## Note\n• Solids keep shape and volume; liquids keep volume but take the vessel’s shape; gases have neither fixed shape nor volume and are easily compressed.",
    "kk": "## Негізгі ойлар\n• Барлық заттар атомдар мен молекулалардан тұрады; бөлшектер арасында аралық бар.\n• Бөлшектер үздіксіз әрі ретсіз қозғалады, оны диффузия дәлелдейді.\n• Бөлшектер тартылысады және тебіледі; бұл агрегаттық күйлердің қасиеттерін түсіндіреді.\n## Анықтамалар\n• Атом — химиялық элементтің ең кіші бөлшегі.\n• Молекула — заттың қасиетін сақтайтын ең кіші бөлшегі.\n• Диффузия — бір зат бөлшектерінің екінші зат бөлшектерінің арасына өзара енуі.\n• Агрегаттық күй — ерекше сапалық қасиеттері бар күй: қатты, сұйық немесе газ тәрізді.\n## Формулалар мен байланыстар\n> Молекулалық-кинетикалық теорияның үш қағидасы\n• 1) заттар бөлшектерден тұрады; 2) бөлшектер үздіксіз қозғалады; 3) бөлшектер өзара әрекеттеседі.\n> қатты → сұйық → газ\n• бөлшектер байланысы әлсіреп, қозғалу еркіндігі артады; пішін мен көлем аз сақталады.\n## Сызба\n• Бөлшектер\n• Қозғалыс\n• Әсерлесу\n## Маңызды\n• Қатты дене пішіні мен көлемін сақтайды; сұйық көлемін сақтап, ыдыс пішінін алады; газдың тұрақты пішіні де, көлемі де жоқ және ол оңай сығылады."
  },
  "p22": {
    "title": "§ 22. Давление твёрдых тел",
    "titleEn": "§ 22. Pressure of Solids",
    "titleKk": "§ 22. Қатты денелердің қысымы",
    "ru": "## Ключевые идеи\n• Действие силы на поверхность зависит не только от силы, но и от площади соприкосновения.\n• Сила давления всегда перпендикулярна поверхности.\n• Увеличить давление можно ростом силы или уменьшением площади опоры.\n## Определения\n• Сила давления — сила, действующая на поверхность перпендикулярно ей.\n• Давление — величина, равная отношению силы, действующей перпендикулярно поверхности, к площади этой поверхности.\n• Площадь опоры — площадь поверхности соприкосновения тела с опорой.\n## Формулы и связи\n> p = F/S\n• p — давление, F — сила давления, S — площадь опоры.\n> F = pS; S = F/p\n• преобразованные формулы.\n> 1 Па = 1 Н/м²\n• единица давления в СИ — паскаль.\n## Схема: ОТ ЧЕГО ЗАВИСИТ ДАВЛЕНИЕ\n• одинаковая F\n• p = F/S\n• большая S • малая S\n## Важно\n• Лыжи и гусеницы увеличивают площадь опоры — давление уменьшается. Острое лезвие или игла уменьшают площадь — давление возрастает.\n## Пример решения\n• Задача: Каток массой 6000 кг имеет площадь опоры 2000 см². Какое давление он оказывает на поверхность?\n• Дано: m = 6000 кг; S = 2000 см²; g = 10 Н/кг; p — ?\n• Перевод в СИ: S = 2000·10⁻⁴ м²; S = 0,2 м²\n• Решение: F = mg = 6000·10 = 60 000 Н → p = F/S → p = 60 000/0,2 → p = 300 000 Па\n• Ответ: p = 3·10⁵ Па = 300 кПа.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: определи давление стула на пол и выясни, насколько оно изменится, если положить на него груз известной массы.\n• 🔗 [Опыт «Давление стула» (7 класс)](https://www.youtube.com/watch?v=8Pyc04u5ojE)",
    "en": "## Key ideas\n• The effect of a force on a surface depends both on the force and on the contact area.\n• The pressure force is always perpendicular to the surface.\n• Pressure increases when force grows or the support area decreases.\n## Definitions\n• Pressure force — a force acting perpendicular to a surface.\n• Pressure — a quantity equal to force perpendicular to a surface divided by the area of that surface.\n• Support area — the area of contact between a body and its support.\n## Formulas and relations\n> p = F/S\n• p is pressure, F is pressure force and S is support area.\n> F = pS; S = F/p\n• rearranged formulas.\n> 1 Pa = 1 N/m²\n• the SI unit of pressure is the pascal.\n## Diagram\n• p = F/S\n## Note\n• Skis and caterpillar tracks increase support area, reducing pressure. A sharp blade or needle decreases area, increasing pressure.\n## Worked example\n• Problem: A roller of mass 6000 kg has a support area of 2000 cm². What pressure does it exert?\n• Given: m = 6000 kg; S = 2000 cm²; g = 10 N/kg; p — ?\n• SI conversion: S = 2000·10⁻⁴ m² S = 0.2 m²\n• Solution: F = mg = 6000·10 = 60 000 N → p = F/S = 60 000/0.2 → p = 300 000 Pa\n• Answer: p = 3·10⁵ Pa = 300 kPa.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Күштің бетке әсері күшке ғана емес, жанасу ауданына да тәуелді.\n• Қысым күші бетке әрқашан перпендикуляр бағытталады.\n• Күшті арттыру не тірек ауданын азайту қысымды көбейтеді.\n## Анықтамалар\n• Қысым күші — бетке перпендикуляр әсер ететін күш.\n• Қысым — бетке перпендикуляр әсер ететін күштің сол беттің ауданына қатынасына тең шама.\n• Тірек ауданы — дене мен тіректің жанасу ауданы.\n## Формулалар мен байланыстар\n> p = F/S\n• p — қысым, F — қысым күші, S — тірек ауданы.\n> F = pS; S = F/p\n• түрлендірілген формулалар.\n> 1 Па = 1 Н/м²\n• ХБЖ-дағы қысым бірлігі — паскаль.\n## Сызба\n• p = F/S\n## Маңызды\n• Шаңғы мен шынжыр табан тірек ауданын ұлғайтып, қысымды азайтады. Өткір жүз не ине ауданды азайтып, қысымды арттырады.\n## Есеп шығару үлгісі\n• Есеп: Массасы 6000 кг катоктың тірек ауданы 2000 см². Ол қандай қысым түсіреді?\n• Берілгені: m = 6000 kg; S = 2000 cm²; g = 10 N/kg; p — ?\n• ХБЖ: S = 2000·10⁻⁴ м² S = 0,2 м²\n• Шешуі: F = mg = 6000·10 = 60 000 N → p = F/S = 60 000/0.2 → p = 300 000 Pa\n• Жауабы: p = 3·10⁵ Па = 300 кПа.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p23": {
    "title": "§ 23. Давление в жидкостях и газах, закон Паскаля",
    "titleEn": "§ 23. Pressure in Liquids and Gases. Pascal’s Law",
    "titleKk": "§ 23. Сұйықтар мен газдардағы қысым. Паскаль заңы",
    "ru": "## Ключевые идеи\n• Жидкость передаёт давление во все стороны благодаря текучести.\n• Давление жидкости на глубине растёт с увеличением глубины и плотности жидкости.\n• Давление газа создаётся ударами движущихся молекул о стенки сосуда; при сжатии или нагревании оно увеличивается.\n## Определения\n• Гидростатическое давление — весовое давление жидкости, зависящее от плотности и глубины.\n• Закон Паскаля — давление, производимое на жидкость или газ, передаётся без изменения в каждую точку объёма жидкости или газа.\n• Добавочное давление — изменение давления, созданное внешней силой сверх первоначального давления.\n## Формулы и связи\n> p = ρgh\n• давление жидкости на глубине h; ρ — плотность жидкости, g — 9,8 Н/кг.\n> F = pS\n• сила давления на поверхность площадью S.\n> p_ср = (p_верх + p_низ)/2\n• среднее давление для расчёта силы на вертикальную боковую стенку.\n## Схема: ДАВЛЕНИЕ В ЖИДКОСТИ И ГАЗЕ\n• давление передаётся во все стороны\n## Важно\n• В газах давление увеличивают повышением плотности или температуры. В отличие от твёрдых тел жидкость и газ передают добавочное давление во все стороны.\n## Пример решения\n• Задача: Вычислите давление жидкости плотностью 1800 кг/м³ на дно сосуда, если высота её столба равна 10 см.\n• Дано: ρ = 1800 кг/м³; h = 10 см; g = 10 Н/кг; p — ?\n• Перевод в СИ: h = 0,1 м\n• Решение: p = ρgh → p = 1800·10·0,1 → p = 1800 Па\n• Ответ: p = 1800 Па = 1,8 кПа.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: натяни на цилиндр с поршнем тонкую плёнку; перемещай поршень влево-вправо и наблюдай за изменением положения плёнки; объясни результат.\n• 🔗 [Симулятор работы давления в замкнутом объёме](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)",
    "en": "## Key ideas\n• A liquid transmits pressure in all directions because it flows.\n• Liquid pressure increases with depth and with liquid density.\n• Gas pressure is caused by moving molecules striking the vessel walls; compression or heating raises it.\n## Definitions\n• Hydrostatic pressure — the pressure due to the weight of a liquid; it depends on density and depth.\n• Pascal’s law — pressure applied to a liquid or gas is transmitted unchanged to every point in its volume.\n• Additional pressure — a pressure change produced by an external force above the original pressure.\n## Formulas and relations\n> p = ρgh\n• pressure in a liquid at depth h; ρ is density and g ≈ 9.8 N/kg.\n> F = pS\n• pressure force on a surface of area S.\n> p_avg = (p_top + p_bottom)/2\n• average pressure used to calculate force on a vertical side wall.\n## Diagram\n• Pressure\n• all directions\n• unchanged\n## Note\n• In a gas, pressure rises when density or temperature rises. Unlike solids, liquids and gases transmit added pressure in all directions.\n## Worked example\n• Problem: Find the pressure on the bottom from a 10 cm column of liquid with density 1800 kg/m³.\n• Given: ρ = 1800 kg/m³; h = 10 cm; g = 10 N/kg; p — ?\n• SI conversion: h = 0.1 m\n• Solution: p = ρgh → p = 1800·10·0.1 → p = 1800 Pa\n• Answer: p = 1800 Pa = 1.8 kPa.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Сұйық аққыш болғандықтан қысымды барлық бағытқа береді.\n• Сұйықтың қысымы тереңдікпен және сұйық тығыздығымен артады.\n• Газ қысымы молекулалардың ыдыс қабырғасына соғылуынан туады; газды сығу не қыздыру қысымды арттырады.\n## Анықтамалар\n• Гидростатикалық қысым — сұйық салмағынан туатын, тығыздық пен тереңдікке тәуелді қысым.\n• Паскаль заңы — сұйыққа не газға түсірілген қысым оның көлемінің әр нүктесіне өзгеріссіз беріледі.\n• Қосымша қысым — бастапқы қысымнан тыс сыртқы күш тудырған қысым өзгерісі.\n## Формулалар мен байланыстар\n> p = ρgh\n• h тереңдіктегі сұйық қысымы; ρ — тығыздық, g ≈ 9,8 Н/кг.\n> F = pS\n• ауданы S бетке түсетін қысым күші.\n> p_орт = (p_жоғ + p_төмен)/2\n• тік бүйір қабырғаға әсер ететін күшті есептеудегі орташа қысым.\n## Сызба\n• Қысым\n• Барлық бағыт\n• Өзгермейді\n## Маңызды\n• Газда қысым тығыздық не температура артқанда өседі. Қатты денеден айырмасы — сұйық пен газ қосымша қысымды барлық бағытқа таратады.\n## Есеп шығару үлгісі\n• Есеп: Тығыздығы 1800 кг/м³ сұйықтың биіктігі 10 см бағаны ыдыс түбіне қандай қысым түсіреді?\n• Берілгені: ρ = 1800 kg/m³; h = 10 cm; g = 10 N/kg; p — ?\n• ХБЖ: h = 0,1 м\n• Шешуі: p = ρgh → p = 1800·10·0.1 → p = 1800 Pa\n• Жауабы: p = 1800 Па = 1,8 кПа.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p24": {
    "title": "§ 24. Сообщающиеся сосуды",
    "titleEn": "§ 24. Communicating Vessels",
    "titleKk": "§ 24. Қатынас ыдыстар",
    "ru": "## Ключевые идеи\n• Сообщающимися называют сосуды, соединённые между собой так, что жидкость может перетекать.\n• В однородной жидкости свободные поверхности устанавливаются на одной высоте, если давление воздуха над ними одинаково.\n• У несмешивающихся жидкостей большей плотности соответствует меньшая высота столба.\n## Определения\n• Сообщающиеся сосуды — два или несколько сосудов, соединённых между собой.\n• Свободная поверхность жидкости — поверхность жидкости, граничащая с газом.\n• Колено сообщающегося сосуда — одна из ветвей сообщающихся сосудов.\n## Формулы и связи\n> p₁ = p₂; ρ₁gh₁ = ρ₂gh₂\n• в равновесии давления на одном горизонтальном уровне одинаковы.\n> ρ₁h₁ = ρ₂h₂\n• для несмешивающихся жидкостей; чем больше плотность, тем меньше высота столба.\n## Схема: СООБЩАЮЩИЕСЯ СОСУДЫ\n• однородная жидкость: h₁ = h₂\n## Важно\n• Применения: водомерное стекло, водопровод, гидравлические системы, шлюзы, артезианские колодцы.\n## Пример решения\n• Задача: Ширина шлюза 10 м. Шлюз заполнен водой на глубину 5 м. С какой силой вода давит на ворота шлюза?\n• Дано: b = 10 м; H = 5 м; ρ_воды = 1000 кг/м³; g = 10 Н/кг\n• Перевод в СИ: S = bH = 50 м²; h_ср = H/2 = 2,5 м\n• Решение: p_ср = ρ·g·h_ср → p_ср = 1000·10·2,5 = 25 000 Па → F = p_срS → F = 25 000·50 = 1 250 000 Н\n• Ответ: F = 1,25·10⁶ Н = 1,25 МН.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: заполни гибкую трубку подкрашенной жидкостью и меняй положение одного конца; наблюдай за уровнем жидкости и объясни.\n• 🔗 [Опыт «Сообщающиеся сосуды»](https://vk.com/video-211506589_456239651)\n• 🔗 [Симулятор сообщающихся сосудов](https://gemini.google.com/share/e6f7f3488672)",
    "en": "## Key ideas\n• Communicating vessels are connected so that a liquid can flow between them.\n• With one homogeneous liquid, free surfaces settle at the same level if air pressure above them is the same.\n• For immiscible liquids, the greater density corresponds to the smaller column height.\n## Definitions\n• Communicating vessels — two or more vessels connected to one another.\n• Free surface of a liquid — the liquid surface in contact with a gas.\n• Arm of a communicating vessel — one branch of a communicating-vessel system.\n## Formulas and relations\n> p₁ = p₂; ρ₁gh₁ = ρ₂gh₂\n• at equilibrium, pressure at the same horizontal level is equal.\n> ρ₁h₁ = ρ₂h₂\n• for immiscible liquids: the greater the density, the smaller the height.\n## Diagram\n• h₁ = h₂\n## Note\n• Applications include sight glasses, water supply, hydraulic systems, locks and artesian wells.\n## Worked example\n• Problem: A lock is 10 m wide and filled with water to a depth of 5 m. With what force does water press on its gate?\n• Given: b = 10 m; H = 5 m; ρ = 1000 kg/m³; g = 10 N/kg\n• SI conversion: S = bH = 50 m² h̄ = H/2 = 2.5 m\n• Solution: p̄ = ρgh̄ → p̄ = 1000·10·2.5 = 25 000 Pa → F = p̄S = 25 000·50 = 1 250 000 N\n• Answer: F = 1.25·10⁶ N = 1.25 MN.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Қатынас ыдыстар — сұйық бірінен екіншісіне өте алатындай жалғанған ыдыстар.\n• Біртекті сұйықта, сұйық үстіндегі ауа қысымы бірдей болса, еркін беттер бір деңгейде орнығады.\n• Араласпайтын сұйықтарда тығыздығы үлкен сұйыққа баған биіктігінің кішірек мәні сәйкес.\n## Анықтамалар\n• Қатынас ыдыстар — бір-бірімен жалғанған екі не бірнеше ыдыс.\n• Сұйықтың еркін беті — сұйықтың газбен жанасатын беті.\n• Қатынас ыдыс иіні — қатынас ыдыстар жүйесінің бір тармағы.\n## Формулалар мен байланыстар\n> p₁ = p₂; ρ₁gh₁ = ρ₂gh₂\n• тепе-теңдікте бір горизонталь деңгейдегі қысымдар тең.\n> ρ₁h₁ = ρ₂h₂\n• араласпайтын сұйықтар үшін: тығыздық үлкен болса, биіктік кіші.\n## Сызба\n• h₁ = h₂\n## Маңызды\n• Қолданылуы: су өлшеуіш шыны, су құбыры, гидравликалық жүйелер, шлюздер, артезиан құдықтары.\n## Есеп шығару үлгісі\n• Есеп: Шлюз ені 10 м, су тереңдігі 5 м. Су шлюз қақпасына қандай күшпен қысым түсіреді?\n• Берілгені: b = 10 m; H = 5 m; ρ = 1000 kg/m³; g = 10 N/kg\n• ХБЖ: S = bH = 50 м² h̄ = H/2 = 2,5 м\n• Шешуі: p̄ = ρgh̄ → p̄ = 1000·10·2.5 = 25 000 Pa → F = p̄S = 25 000·50 = 1 250 000 N\n• Жауабы: F = 1,25·10⁶ Н = 1,25 МН.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p25": {
    "title": "§ 25. Гидравлическая машина",
    "titleEn": "§ 25. Hydraulic Machine",
    "titleKk": "§ 25. Гидравликалық машина",
    "ru": "## Ключевые идеи\n• Гидравлическая машина состоит из двух цилиндров с поршнями разной площади, соединённых трубкой с жидкостью.\n• По закону Паскаля давление на оба поршня передаётся одинаковым.\n• Большой поршень даёт выигрыш в силе, но проигрыш в перемещении.\n## Определения\n• Гидравлическая машина — устройство, действие которого основано на законах движения и равновесия жидкостей.\n• Гидравлический пресс — машина для обработки материалов давлением: прессования, ковки, штамповки, брикетирования.\n• Гидравлический домкрат — устройство для подъёма тяжёлых грузов за счёт передачи давления жидкостью.\n## Формулы и связи\n> p₁ = p₂; F₁/S₁ = F₂/S₂\n• давления на малом и большом поршнях равны.\n> F₂/F₁ = S₂/S₁\n• выигрыш в силе равен отношению площади большого поршня к площади малого.\n> F₁h₁ = F₂h₂\n• в идеальной гидромашине силы обратно пропорциональны перемещениям поршней.\n## Схема: ПРИНЦИП ГИДРОМАШИНЫ\n• F₁ • F₂/F₁ = S₂/S₁ • F₂\n## Важно\n• В реальном устройстве часть энергии теряется на трение, поэтому реальный выигрыш в силе меньше идеального.\n## Пример решения\n• Задача: Большой поршень гидравлического пресса площадью 180 см² действует на масло с силой 18 кН. Площадь малого поршня 4 см². С какой силой действует малый поршень?\n• Дано: S₂ = 180 см²; F₂ = 18 кН; S₁ = 4 см²; F₁ — ?\n• Перевод в СИ: F₂ = 18 000 Н\n• Решение: F₁/S₁ = F₂/S₂ → F₁ = F₂·S₁/S₂ → F₁ = 18 000·4/180 → F₁ = 400 Н\n• Ответ: F₁ = 400 Н.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.",
    "en": "## Key ideas\n• A hydraulic machine has two cylinders with pistons of different areas, connected by a tube filled with liquid.\n• By Pascal’s law, the pressure on the two pistons is the same.\n• A large piston gives a gain in force but a loss in displacement.\n## Definitions\n• Hydraulic machine — a device whose action is based on the laws of motion and equilibrium of liquids.\n• Hydraulic press — a machine for treating materials by pressure: pressing, forging, stamping or briquetting.\n• Hydraulic jack — a device for lifting heavy loads by transmitting pressure through a liquid.\n## Formulas and relations\n> p₁ = p₂; F₁/S₁ = F₂/S₂\n• pressures on the small and large pistons are equal.\n> F₂/F₁ = S₂/S₁\n• the force gain equals the area ratio of the large piston to the small piston.\n> F₁h₁ = F₂h₂\n• in an ideal hydraulic machine, forces are inversely proportional to piston displacements.\n## Diagram\n• F₂/F₁ = S₂/S₁\n## Note\n• In a real machine, friction causes energy losses, so the real gain is less than the ideal one.\n## Worked example\n• Problem: The large piston of a hydraulic press has area 180 cm² and acts on oil with force 18 kN. The small piston has area 4 cm². Find its force.\n• Given: S₂ = 180 cm²; F₂ = 18 kN; S₁ = 4 cm²; F₁ — ?\n• SI conversion: F₂ = 18 000 N\n• Solution: F₁/S₁ = F₂/S₂ → F₁ = F₂·S₁/S₂ → F₁ = 18 000·4/180 = 400 N\n• Answer: F₁ = 400 N.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Гидравликалық машина аудандары әртүрлі екі поршеньді цилиндрден және сұйық құйылған жалғаушы түтіктен тұрады.\n• Паскаль заңы бойынша екі поршеньге берілетін қысым бірдей.\n• Үлкен поршень күштен ұтыс береді, бірақ орын ауыстырудан ұтылыс болады.\n## Анықтамалар\n• Гидравликалық машина — әсері сұйықтардың қозғалысы мен тепе-теңдік заңдарына негізделген құрылғы.\n• Гидравликалық пресс — материалды қысыммен өңдейтін машина: престеу, соғу, қалыптау, брикеттеу.\n• Гидравликалық домкрат — сұйық арқылы қысым беру көмегімен ауыр жүк көтеретін құрылғы.\n## Формулалар мен байланыстар\n> p₁ = p₂; F₁/S₁ = F₂/S₂\n• кіші және үлкен поршеньдердегі қысымдар тең.\n> F₂/F₁ = S₂/S₁\n• күштен ұтыс үлкен поршень ауданының кіші поршень ауданына қатынасына тең.\n> F₁h₁ = F₂h₂\n• идеал гидромашинада күштер поршень орын ауыстыруларына кері пропорционал.\n## Сызба\n• F₂/F₁ = S₂/S₁\n## Маңызды\n• Нақты машинада үйкелістен энергия шығыны болады, сондықтан нақты ұтыс идеал ұтыстан аз.\n## Есеп шығару үлгісі\n• Есеп: Гидравликалық престің үлкен поршень ауданы 180 см², майға 18 кН күшпен әсер етеді. Кіші поршень ауданы 4 см². Оның күшін табыңдар.\n• Берілгені: S₂ = 180 cm²; F₂ = 18 kN; S₁ = 4 cm²; F₁ — ?\n• ХБЖ: F₂ = 18 000 Н\n• Шешуі: F₁/S₁ = F₂/S₂ → F₁ = F₂·S₁/S₂ → F₁ = 18 000·4/180 = 400 N\n• Жауабы: F₁ = 400 Н.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p26": {
    "title": "§ 26. Атмосферное давление, измерение атмосферного давления",
    "titleEn": "§ 26. Atmospheric Pressure and Its Measurement",
    "titleKk": "§ 26. Атмосфералық қысым және оны өлшеу",
    "ru": "## Ключевые идеи\n• Атмосфера — воздушная оболочка Земли; её вес создаёт атмосферное давление.\n• С высотой плотность воздуха и атмосферное давление уменьшаются.\n• Давление измеряют ртутным барометром или барометром-анероидом.\n## Определения\n• Атмосфера — воздушная оболочка Земли.\n• Атмосферное давление — давление атмосферы на поверхность Земли и тела внутри воздушной оболочки.\n• Барометр — прибор для измерения атмосферного давления.\n• Барометр-анероид — безжидкостный барометр: изменение давления определяют по упругой деформации металлической коробки без воздуха.\n## Формулы и связи\n> p_атм = ρ_рт·g·h\n• в опыте Торричелли атмосферное давление уравновешивает давление столба ртути.\n> 1 мм рт. ст. = 133,3 Па\n• связь внесистемной и единицы СИ.\n> p_норм ≈ 760 мм рт. ст. ≈ 101 300 Па\n• нормальное атмосферное давление у уровня моря.\n## Схема: ИЗМЕРЕНИЕ ДАВЛЕНИЯ АТМОСФЕРЫ\n• h ≈ 760 мм\n• p_атм\n## Важно\n• Приближённо при небольших подъёмах давление уменьшается примерно на 1 мм рт. ст. на каждые 12 м высоты.\n## Пример решения\n• Задача: Определите массу воздуха в комнате размером 4 × 5 × 3 м при нормальных условиях. Плотность воздуха 1,29 кг/м³.\n• Дано: a = 4 м; b = 5 м; h = 3 м; ρ = 1,29 кг/м³; m — ? (перевод в СИ не требуется)\n• Решение: V = abh → V = 4·5·3 = 60 м³ → m = ρV → m = 1,29·60 = 77,4 кг\n• Ответ: m = 77,4 кг.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: погрузи стакан в воду, переверни и медленно вытаскивай; объясни, почему уровень воды в стакане выше; рассчитай силу давления воздуха на раскрытую тетрадь.\n• 🔗 [Симулятор атмосферного давления](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [Чем удерживается вода в перевёрнутом стакане?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Калькулятор силы атмосферного давления](https://gemini.google.com/share/571f141dd222)",
    "en": "## Key ideas\n• The atmosphere is Earth’s air envelope; its weight creates atmospheric pressure.\n• With altitude, air density and atmospheric pressure decrease.\n• Atmospheric pressure is measured by a mercury barometer or an aneroid barometer.\n## Definitions\n• Atmosphere — Earth’s air envelope.\n• Atmospheric pressure — pressure exerted by the atmosphere on Earth’s surface and bodies in the air envelope.\n• Barometer — an instrument for measuring atmospheric pressure.\n• Aneroid barometer — a liquid-free barometer that measures the elastic deformation of an evacuated metal capsule.\n## Formulas and relations\n> p_atm = ρ_Hg·g·h\n• in Torricelli’s experiment, atmospheric pressure balances a column of mercury.\n> 1 mmHg = 133.3 Pa\n• relation between a non-SI unit and SI pressure unit.\n> p_normal ≈ 760 mmHg ≈ 101 300 Pa\n• normal atmospheric pressure at sea level.\n## Diagram\n• h ≈ 760 mm\n## Note\n• For small altitude changes, pressure decreases by about 1 mmHg for every 12 m of ascent.\n## Worked example\n• Problem: Find the mass of air in a room 4 × 5 × 3 m under normal conditions. Air density is 1.29 kg/m³.\n• Given: a = 4 m; b = 5 m; h = 3 m; ρ = 1.29 kg/m³; m — ?\n• SI conversion: All values are in SI\n• Solution: V = abh = 4·5·3 = 60 m³ → m = ρV = 1.29·60 = 77.4 kg\n• Answer: m = 77.4 kg.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Атмосфера — Жердің ауа қабығы; оның салмағы атмосфералық қысым тудырады.\n• Биіктік артқанда ауаның тығыздығы мен атмосфералық қысым кемиді.\n• Атмосфералық қысымды сынапты барометрмен немесе анероид-барометрмен өлшейді.\n## Анықтамалар\n• Атмосфера — Жердің ауа қабығы.\n• Атмосфералық қысым — атмосфераның Жер бетіне және ауа қабығындағы денелерге түсіретін қысымы.\n• Барометр — атмосфералық қысымды өлшейтін аспап.\n• Анероид-барометр — ауа сорылған металл қорапшаның серпімді деформациясын өлшейтін сұйықсыз барометр.\n## Формулалар мен байланыстар\n> p_атм = ρ_Hg·g·h\n• Торричелли тәжірибесінде атмосфералық қысым сынап бағаны қысымымен теңеседі.\n> 1 мм сын.бағ. = 133,3 Па\n• жүйеден тыс және ХБЖ қысым бірліктерінің байланысы.\n> p_қалп ≈ 760 мм сын.бағ. ≈ 101 300 Па\n• теңіз деңгейіндегі қалыпты атмосфералық қысым.\n## Сызба\n• h ≈ 760 mm\n## Маңызды\n• Кіші биіктік өзгерістерінде қысым әр 12 м көтерілгенде шамамен 1 мм сын.бағ.-на азаяды.\n## Есеп шығару үлгісі\n• Есеп: Қалыпты жағдайда өлшемі 4 × 5 × 3 м бөлмедегі ауаның массасын табыңдар. Ауа тығыздығы 1,29 кг/м³.\n• Берілгені: a = 4 m; b = 5 m; h = 3 m; ρ = 1.29 kg/m³; m — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: V = abh = 4·5·3 = 60 m³ → m = ρV = 1.29·60 = 77.4 kg\n• Жауабы: m = 77,4 кг.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p27": {
    "title": "§ 27. Манометры, насосы",
    "titleEn": "§ 27. Manometers and Pumps",
    "titleKk": "§ 27. Манометрлер және сорғылар",
    "ru": "## Ключевые идеи\n• Манометр измеряет давление, большее или меньшее атмосферного.\n• Металлический манометр использует деформацию изогнутой трубки, жидкостный — разность уровней жидкости в U-образной трубке.\n• Поршневые насосы используют разность давлений и клапаны для перемещения жидкости.\n## Определения\n• Манометр — прибор для измерения давления, большего или меньшего атмосферного.\n• Избыточное давление — разность давления газа в сосуде и атмосферного давления.\n• Жидкостный манометр — U-образная трубка с жидкостью известной плотности.\n• Компрессор — устройство для сжатия газа или воздуха.\n## Формулы и связи\n> Δp = ρgh\n• разность давлений по разности уровней h в жидкостном манометре.\n> p_газа = p_атм + Δp\n• если давление газа больше атмосферного; при меньшем давлении p_газа = p_атм − Δp.\n> 1 Н/см² = 10⁴ Па\n• перевод технической единицы давления.\n## Схема: МАНОМЕТР И НАСОС\n• газ • Δp = ρgh\n• атм\n## Важно\n• Обычный поршневой насос, использующий атмосферное давление, не поднимет воду выше примерно 10,3 м; воздушная камера создаёт большее давление.\n## Пример решения\n• Задача: Давление газа в сосуде составляет 8 Н/см². Переведите его в паскали, гектопаскали и килопаскали.\n• Дано: p = 8 Н/см²\n• Перевод в СИ: 1 Н/см² = 10⁴ Па\n• Решение: p = 8·10⁴ Па → p = 80 000 Па → p = 800 гПа → p = 80 кПа\n• Ответ: p = 80 000 Па = 800 гПа = 80 кПа.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: из подручного материала изготовь жидкостный манометр; продумай способ определения давления воздуха внутри надутого шарика.\n• 🔗 [Демонстрация изготовления жидкостного манометра](https://youtu.be/CGn4kWsXe-I)",
    "en": "## Key ideas\n• A manometer measures pressure above or below atmospheric pressure.\n• A metal manometer uses deformation of a curved tube; a liquid manometer uses the difference in liquid levels in a U-tube.\n• Piston pumps use pressure differences and valves to move liquids.\n## Definitions\n• Manometer — an instrument for measuring pressure greater or less than atmospheric pressure.\n• Gauge pressure — the difference between gas pressure in a vessel and atmospheric pressure.\n• Liquid manometer — a U-shaped tube containing a liquid of known density.\n• Compressor — a device for compressing gas or air.\n## Formulas and relations\n> Δp = ρgh\n• pressure difference from height difference h in a liquid manometer.\n> p_gas = p_atm + Δp\n• when gas pressure is greater than atmospheric; if smaller, p_gas = p_atm − Δp.\n> 1 N/cm² = 10⁴ Pa\n• conversion of a technical pressure unit.\n## Diagram\n• Δp = ρgh\n## Note\n• An ordinary piston pump relying on atmospheric pressure cannot lift water higher than about 10.3 m; an air chamber can create higher pressure.\n## Worked example\n• Problem: Gas pressure is 8 N/cm². Convert it to pascals, hectopascals and kilopascals.\n• Given: p = 8 N/cm²\n• SI conversion: 1 N/cm² = 10⁴ Pa\n• Solution: p = 8·10⁴ Pa → p = 80 000 Pa → p = 800 hPa = 80 kPa\n• Answer: p = 80 000 Pa = 800 hPa = 80 kPa.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Манометр атмосфералық қысымнан үлкен не кіші қысымды өлшейді.\n• Металл манометр иілген түтіктің деформациясын, сұйық манометр U-тәрізді түтіктегі деңгейлер айырмасын қолданады.\n• Поршеньді сорғы сұйықты қысым айырмасы мен клапандар арқылы жылжытады.\n## Анықтамалар\n• Манометр — атмосфералық қысымнан үлкен не кіші қысымды өлшейтін аспап.\n• Артық қысым — ыдыстағы газ қысымы мен атмосфералық қысым айырмасы.\n• Сұйық манометр — тығыздығы белгілі сұйық құйылған U-тәрізді түтік.\n• Компрессор — газды не ауаны сығатын құрылғы.\n## Формулалар мен байланыстар\n> Δp = ρgh\n• сұйық манометрдегі h деңгей айырмасы бойынша қысым айырмасы.\n> p_газ = p_атм + Δp\n• газ қысымы атмосфералықтан үлкен болса; кіші болса p_газ = p_атм − Δp.\n> 1 Н/см² = 10⁴ Па\n• қысымның техникалық бірлігін түрлендіру.\n## Сызба\n• Δp = ρgh\n## Маңызды\n• Атмосфералық қысыммен жұмыс істейтін жай поршеньді сорғы суды шамамен 10,3 м-ден жоғары көтере алмайды; ауа камерасы үлкен қысым тудыра алады.\n## Есеп шығару үлгісі\n• Есеп: Ыдыстағы газ қысымы 8 Н/см². Оны паскальға, гектопаскальға және килопаскальға айналдырыңдар.\n• Берілгені: p = 8 N/cm²\n• ХБЖ: 1 Н/см² = 10⁴ Па\n• Шешуі: p = 8·10⁴ Pa → p = 80 000 Pa → p = 800 hPa = 80 kPa\n• Жауабы: p = 80 000 Па = 800 гПа = 80 кПа.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p28": {
    "title": "§ 28. Выталкивающая сила",
    "titleEn": "§ 28. Buoyant Force",
    "titleKk": "§ 28. Кері итеруші күш",
    "ru": "## Ключевые идеи\n• Давление жидкости с глубиной растёт, поэтому на нижнюю грань погружённого тела действует большая сила, чем на верхнюю.\n• Их равнодействующая направлена вверх и называется выталкивающей силой или силой Архимеда.\n• Сила Архимеда зависит от плотности среды и объёма погружённой части тела.\n## Определения\n• Выталкивающая сила — равнодействующая сил давления жидкости или газа на погружённое тело, направленная вверх.\n• Сила Архимеда — выталкивающая сила, равная весу жидкости или газа в объёме погружённого тела.\n• Гидростатическое взвешивание — определение свойств тела по изменению его веса при погружении в жидкость.\n## Формулы и связи\n> F_А = ρ_ж·g·V_погр\n• закон Архимеда; V_погр — объём погружённой части тела.\n> P_в жидкости = P_в воздухе − F_А\n• кажущийся вес тела в жидкости уменьшается на силу Архимеда.\n> ρ_тела = ρ_ж·P_возд/(P_возд − P_жидк)\n• формула гидростатического взвешивания плотного тела.\n## Схема: СИЛА АРХИМЕДА\n• F_тяж\n• F_А\n## Важно\n• Для одинаковых объёмов в одной жидкости сила Архимеда одинакова независимо от материала тела. В более плотной жидкости она больше.\n## Пример решения\n• Задача: Подводная часть патрульного катера имеет объём 220 м³. Определите выталкивающую силу, действующую на катер в воде.\n• Дано: V_погр = 220 м³; ρ_воды = 1000 кг/м³; g = 10 Н/кг; F_А — ? (перевод в СИ не требуется)\n• Решение: F_А = ρ_воды·g·V_погр → F_А = 1000·10·220 → F_А = 2 200 000 Н\n• Ответ: F_А = 2,2·10⁶ Н = 2,2 МН.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.",
    "en": "## Key ideas\n• Liquid pressure increases with depth, so the force on the lower face of a submerged body is greater than the force on its upper face.\n• Their resultant is upward and is called buoyant force or Archimedes’ force.\n• Archimedes’ force depends on the density of the medium and the volume of the submerged part.\n## Definitions\n• Buoyant force — the upward resultant of pressure forces of a liquid or gas on an immersed body.\n• Archimedes’ force — a buoyant force equal to the weight of the liquid or gas displaced by the immersed body.\n• Hydrostatic weighing — determining properties of a body from the change in its apparent weight when immersed.\n## Formulas and relations\n> F_A = ρ_liq·g·V_sub\n• Archimedes’ principle; V_sub is the volume of the submerged part.\n> P_liq = P_air − F_A\n• apparent weight in a liquid is smaller by Archimedes’ force.\n> ρ_body = ρ_liq·P_air/(P_air − P_liq)\n• formula for finding the density of a dense body by hydrostatic weighing.\n## Diagram\n• F_A\n## Note\n• Bodies of equal volume in the same liquid experience equal buoyant force regardless of their material. A denser liquid produces a larger force.\n## Worked example\n• Problem: The submerged part of a patrol boat has volume 220 m³. Find the buoyant force acting on it in water.\n• Given: V = 220 m³; ρ = 1000 kg/m³; g = 10 N/kg; F_A — ?\n• SI conversion: All values are in SI\n• Solution: F_A = ρgV → F_A = 1000·10·220 → F_A = 2 200 000 N\n• Answer: F_A = 2.2·10⁶ N = 2.2 MN.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Сұйық қысымы тереңдеген сайын артады, сондықтан батқан дененің төменгі бетіне түсетін күш жоғарғы бетіндегіден үлкен.\n• Олардың теңәрекетті күші жоғары бағытталып, кері итеруші немесе Архимед күші деп аталады.\n• Архимед күші ортаның тығыздығына және дененің батқан бөлігінің көлеміне тәуелді.\n## Анықтамалар\n• Кері итеруші күш — сұйық не газдың батырылған денеге түсіретін қысым күштерінің жоғары бағытталған теңәрекетті күші.\n• Архимед күші — батырылған дене ығыстырған сұйықтың не газдың салмағына тең кері итеруші күш.\n• Гидростатикалық өлшеу — денені сұйыққа батырғанда көрінерлік салмағының өзгеруі бойынша қасиеттерін анықтау.\n## Формулалар мен байланыстар\n> F_A = ρ_сұй·g·V_бат\n• Архимед заңы; V_бат — дененің батқан бөлігінің көлемі.\n> P_сұй = P_ауа − F_A\n• сұйықтағы көрінерлік салмақ Архимед күшіне кемиді.\n> ρ_дене = ρ_сұй·P_ауа/(P_ауа − P_сұй)\n• тығыз дененің тығыздығын гидростатикалық өлшеумен табу формуласы.\n## Сызба\n• F_A\n## Маңызды\n• Бір сұйықтағы көлемдері тең денелерге материалына қарамастан бірдей кері итеруші күш әсер етеді. Тығыз сұйықта бұл күш үлкен.\n## Есеп шығару үлгісі\n• Есеп: Патрульдік катердің су астындағы бөлігінің көлемі 220 м³. Суда оған әсер ететін кері итеруші күшті анықтаңдар.\n• Берілгені: V = 220 m³; ρ = 1000 kg/m³; g = 10 N/kg; F_A — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: F_A = ρgV → F_A = 1000·10·220 → F_A = 2 200 000 N\n• Жауабы: F_A = 2,2·10⁶ Н = 2,2 МН.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p29": {
    "title": "§ 29. Условия плавания тел",
    "titleEn": "§ 29. Conditions for Floating Bodies",
    "titleKk": "§ 29. Денелердің жүзу шарттары",
    "ru": "## Ключевые идеи\n• На тело в жидкости действуют сила тяжести вниз и сила Архимеда вверх.\n• Сравнение этих сил, а значит и плотностей, определяет: тонет тело, всплывает или плавает внутри жидкости.\n• Плавающее на поверхности тело погружается до тех пор, пока силы не уравновесятся.\n## Определения\n• Плавание внутри жидкости — равновесие полностью погружённого тела при равенстве силы тяжести и силы Архимеда.\n• Всплытие — движение тела вверх, когда при полном погружении сила Архимеда больше силы тяжести.\n• Ареометр — прибор, использующий глубину погружения для измерения плотности жидкости.\n• Центр погружённой части — точка приложения силы Архимеда.\n## Формулы и связи\n> F_тяж = F_А ⇔ ρ_тела = ρ_ж\n• тело плавает внутри жидкости.\n> F_тяж > F_А ⇔ ρ_тела > ρ_ж\n• тело тонет.\n> F_тяж < F_А ⇔ ρ_тела < ρ_ж\n• тело всплывает; на поверхности установится F_тяж = F_А.\n> V_погр/V_тела = ρ_тела/ρ_ж\n• для тела, плавающего на поверхности жидкости.\n## Схема: УСЛОВИЯ ПЛАВАНИЯ\n• F_А = F_тяж\n## Важно\n• Несмешивающиеся жидкости располагаются слоями: более плотная — ниже, менее плотная — выше.\n## Пример решения\n• Задача: Кусок бревна плавает в воде, погрузившись на 2/5 своего объёма. Определите плотность древесины.\n• Дано: V_погр/V = 2/5; ρ_воды = 1000 кг/м³; ρ_древесины — ? (перевод в СИ не требуется)\n• Решение: V_погр/V = ρ_тела/ρ_ж → ρ_тела = ρ_ж·V_погр/V → ρ_тела = 1000·2/5 → ρ_тела = 400 кг/м³\n• Ответ: ρ_древесины = 400 кг/м³.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: брось виноградинку в сильно газированную воду и проследи, как она периодически тонет и всплывает; объясни.\n• 🔗 [Интерактивный симулятор Buoyancy](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Опыт с виноградинкой в газированной воде](https://youtu.be/JldV-8xJr6g)",
    "en": "## Key ideas\n• A body in a liquid is acted on by gravitational force downward and Archimedes’ force upward.\n• Comparing these forces, and therefore densities, shows whether the body sinks, rises or floats within the liquid.\n• A body floating at the surface submerges until the forces balance.\n## Definitions\n• Floating within a liquid — equilibrium of a fully immersed body when gravitational and buoyant forces are equal.\n• Rising — upward movement when buoyant force is greater than gravitational force for the fully immersed body.\n• Hydrometer — an instrument that uses immersion depth to measure liquid density.\n• Centre of the submerged part — the point of application of Archimedes’ force.\n## Formulas and relations\n> F_g = F_A ⇔ ρ_body = ρ_liq\n• the body floats within the liquid.\n> F_g > F_A ⇔ ρ_body > ρ_liq\n• the body sinks.\n> F_g < F_A ⇔ ρ_body < ρ_liq\n• the body rises; at the surface F_g = F_A.\n> V_sub/V_body = ρ_body/ρ_liq\n• for a body floating on the surface.\n## Diagram\n• F_A = F_g\n## Note\n• Immiscible liquids form layers: denser liquid below and less dense liquid above.\n## Worked example\n• Problem: A log floats in water with 2/5 of its volume submerged. Find the density of the wood.\n• Given: V₁/V = 2/5; ρ = 1000 kg/m³; ρ₁ — ?\n• SI conversion: All values are in SI\n• Solution: V₁/V = ρ₁/ρ → ρ₁ = ρ·V₁/V → ρ₁ = 1000·2/5 = 400 kg/m³\n• Answer: ρ_wood = 400 kg/m³.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Сұйықтағы денеге төмен қарай ауырлық күші, жоғары қарай Архимед күші әсер етеді.\n• Бұл күштерді, демек тығыздықтарды, салыстыру дененің бататынын, қалқитынын не сұйық ішінде жүзіп тұратынын көрсетеді.\n• Бетте жүзген дене күштер теңескенге дейін батады.\n## Анықтамалар\n• Сұйық ішінде жүзу — толық батырылған денеге ауырлық күші мен Архимед күші тең болғандағы тепе-теңдік.\n• Қалқу — толық батырылған денеге Архимед күші ауырлық күшінен үлкен болғандағы жоғары қозғалыс.\n• Ареометр — сұйыққа бату тереңдігі арқылы оның тығыздығын өлшейтін аспап.\n• Батқан бөліктің центрі — Архимед күші түсетін нүкте.\n## Формулалар мен байланыстар\n> F_g = F_A ⇔ ρ_дене = ρ_сұй\n• дене сұйық ішінде жүзіп тұрады.\n> F_g > F_A ⇔ ρ_дене > ρ_сұй\n• дене батады.\n> F_g < F_A ⇔ ρ_дене < ρ_сұй\n• дене қалқып шығады; бетте F_g = F_A.\n> V_бат/V_дене = ρ_дене/ρ_сұй\n• сұйық бетінде жүзетін дене үшін.\n## Сызба\n• F_A = F_g\n## Маңызды\n• Араласпайтын сұйықтар қабатталады: тығыз сұйық төменде, тығыздығы кіші сұйық жоғарыда орналасады.\n## Есеп шығару үлгісі\n• Есеп: Бөрене суда көлемінің 2/5 бөлігі батып жүзіп тұр. Ағаштың тығыздығын табыңдар.\n• Берілгені: V₁/V = 2/5; ρ = 1000 kg/m³; ρ₁ — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: V₁/V = ρ₁/ρ → ρ₁ = ρ·V₁/V → ρ₁ = 1000·2/5 = 400 kg/m³\n• Жауабы: ρ_ағаш = 400 кг/м³.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p30": {
    "title": "§ 30. Механическая работа. Мощность",
    "titleEn": "§ 30. Mechanical Work and Power",
    "titleKk": "§ 30. Механикалық жұмыс және қуат",
    "ru": "## Ключевые идеи\n• Механическая работа совершается, если к телу приложена сила и тело перемещается под её действием.\n• При совпадении направления силы и движения работа положительна; при противоположных направлениях — отрицательна.\n• Мощность показывает, как быстро выполняется работа.\n## Определения\n• Механическая работа — величина, характеризующая результат действия силы по перемещению тела.\n• Мощность — величина, характеризующая быстроту выполнения работы.\n• Сила тяги — сила, создаваемая двигателем и направленная вдоль движения транспортного средства.\n## Формулы и связи\n> A = Fl\n• работа силы, направленной вдоль перемещения; [A] = Дж = Н·м.\n> A_тр = −F_тр·l\n• сила трения совершает отрицательную работу.\n> N = A/t\n• мощность; [N] = Вт = Дж/с.\n> N = Fv\n• связь мощности двигателя, силы тяги и скорости при равномерном движении.\n## Схема: РАБОТА И МОЩНОСТЬ\n• A = F·l\n## Важно\n• При одной и той же мощности увеличение силы тяги требует уменьшения скорости — поэтому транспорт замедляется на подъёме.\n## Пример решения\n• Задача: Сила, приложенная к телу, на пути 7,5 м совершила работу 30 кДж. Определите значение силы.\n• Дано: A = 30 кДж; l = 7,5 м; F — ?\n• Перевод в СИ: A = 30 000 Дж\n• Решение: A = Fl → F = A/l → F = 30 000/7,5 → F = 4000 Н\n• Ответ: F = 4000 Н = 4 кН.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: рассчитай работу при ходьбе из дома в школу и обратно (≈20 Дж на шаг) и развиваемую при этом мощность.\n• 🔗 [Решение задач. Применение формулы работы](https://youtu.be/Ym-F4DbqrA0)",
    "en": "## Key ideas\n• Mechanical work is done when a force acts on a body and moves it.\n• Work is positive when force and motion have the same direction, and negative when directions are opposite.\n• Power tells how quickly work is done.\n## Definitions\n• Mechanical work — a quantity characterizing the result of a force acting through a displacement.\n• Power — a quantity characterizing the rate at which work is done.\n• Tractive force — the force created by an engine and directed along a vehicle’s motion.\n## Formulas and relations\n> A = Fl\n• work by a force along the displacement; [A] = J = N·m.\n> A_fr = −F_frl\n• friction does negative work.\n> N = A/t\n• power; [N] = W = J/s.\n> N = Fv\n• relation of engine power, tractive force and speed in uniform motion.\n## Diagram\n• F⃗\n• s⃗\n• A = Fs\n## Note\n• For the same power, increasing tractive force requires a lower speed; this is why vehicles slow down when climbing.\n## Worked example\n• Problem: A force does 30 kJ of work while moving a body through 7.5 m. Find the force.\n• Given: A = 30 kJ; l = 7.5 m; F — ?\n• SI conversion: A = 30 000 J\n• Solution: A = Fl → F = A/l → F = 30 000/7.5 = 4000 N\n• Answer: F = 4000 N = 4 kN.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Механикалық жұмыс күш денеге әсер етіп, оны орын ауыстырғанда атқарылады.\n• Күш пен қозғалыс бағыттары бірдей болса жұмыс оң, қарама-қарсы болса теріс.\n• Қуат жұмыстың қаншалықты тез орындалатынын көрсетеді.\n## Анықтамалар\n• Механикалық жұмыс — күш әсерінен дененің орын ауыстыру нәтижесін сипаттайтын шама.\n• Қуат — жұмыстың орындалу шапшаңдығын сипаттайтын шама.\n• Тарту күші — қозғалтқыш тудыратын және көлік қозғалысы бойымен бағытталатын күш.\n## Формулалар мен байланыстар\n> A = Fl\n• күш орын ауыстыру бойымен бағытталса; [A] = Дж = Н·м.\n> A_үйк = −F_үйкl\n• үйкеліс күші теріс жұмыс атқарады.\n> N = A/t\n• қуат; [N] = Вт = Дж/с.\n> N = Fv\n• бірқалыпты қозғалыстағы қозғалтқыш қуаты, тарту күші және жылдамдық байланысы.\n## Сызба\n• F⃗\n• s⃗\n• A = Fs\n## Маңызды\n• Қуат бірдей болғанда тарту күшін арттыру жылдамдықты азайтуды талап етеді; сондықтан көлік өрге шыққанда баяулайды.\n## Есеп шығару үлгісі\n• Есеп: Күш денені 7,5 м-ге жылжыта отырып 30 кДж жұмыс атқарды. Күшті табыңдар.\n• Берілгені: A = 30 kJ; l = 7.5 m; F — ?\n• ХБЖ: A = 30 000 Дж\n• Шешуі: A = Fl → F = A/l → F = 30 000/7.5 = 4000 N\n• Жауабы: F = 4000 Н = 4 кН.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p31": {
    "title": "§ 31. Кинетическая энергия. Потенциальная энергия",
    "titleEn": "§ 31. Kinetic Energy and Potential Energy",
    "titleKk": "§ 31. Кинетикалық және потенциалдық энергия",
    "ru": "## Ключевые идеи\n• Энергия характеризует способность тела совершить механическую работу; измеряется в джоулях.\n• Кинетическая энергия принадлежит движущемуся телу и зависит от массы и квадрата скорости.\n• Потенциальная энергия — энергия взаимодействия: поднятого тела с Землёй или деформированного тела с его частями.\n## Определения\n• Механическая энергия — энергия механического движения и взаимодействия тел или их частей.\n• Кинетическая энергия — энергия движущегося тела.\n• Потенциальная энергия — энергия взаимодействия тел или частей одного тела.\n• Работа — мера изменения энергии тела.\n## Формулы и связи\n> E_к = mv²/2\n• кинетическая энергия.\n> E_п = mgh\n• потенциальная энергия тела, поднятого над выбранным уровнем.\n> E_упр = k(Δl)²/2\n• потенциальная энергия упруго деформированной пружины.\n> A = ΔE_к = E_к₂ − E_к₁\n• работа равна изменению кинетической энергии.\n## Схема: ВИДЫ МЕХАНИЧЕСКОЙ ЭНЕРГИИ\n• E_п = mgh • E_к = mv²/2\n• энергия положения ↔ энергия движения\n## Важно\n• Если скорость увеличится в 3 раза, кинетическая энергия увеличится в 9 раз. Удвоение высоты удваивает потенциальную энергию mgh.\n## Пример решения\n• Задача: Автомобиль массой 1000 кг уменьшил скорость с 20 м/с до 10 м/с. Определите работу равнодействующей всех сил.\n• Дано: m = 1000 кг; v₁ = 20 м/с; v₂ = 10 м/с; A — ? (перевод в СИ не требуется)\n• Решение: A = ΔE_к = m(v₂² − v₁²)/2 → A = 1000·(10² − 20²)/2 → A = 500·(100 − 400) → A = −150 000 Дж\n• Ответ: A = −150 кДж. Отрицательный знак: равнодействующая уменьшает скорость.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: продумай эксперимент по проверке зависимости кинетической энергии от массы и скорости тела (используй связь работы и энергии); оформи письменный отчёт.\n• 🔗 [Зависимость кинетической энергии от скорости и массы](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Лабораторная установка (отчёт по эксперименту)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)",
    "en": "## Key ideas\n• Energy characterizes a body’s ability to do mechanical work; it is measured in joules.\n• Kinetic energy belongs to a moving body and depends on its mass and the square of speed.\n• Potential energy is interaction energy: of an elevated body with Earth or of a deformed elastic body.\n## Definitions\n• Mechanical energy — energy of mechanical motion and interaction of bodies or their parts.\n• Kinetic energy — energy of a moving body.\n• Potential energy — energy of interaction of bodies or parts of one body.\n• Work — a measure of the change in a body’s energy.\n## Formulas and relations\n> E_k = mv²/2\n• kinetic energy.\n> E_p = mgh\n• potential energy of a body raised above a chosen level.\n> E_el = k(Δl)²/2\n• potential energy of an elastically deformed spring.\n> A = ΔE_k = E_k₂ − E_k₁\n• work equals the change in kinetic energy.\n## Diagram\n• Eₚ = mgh\n• Eₖ = mv²/2\n• E = Eₚ + Eₖ\n## Note\n• If speed is tripled, kinetic energy becomes nine times greater. Doubling height doubles potential energy mgh.\n## Worked example\n• Problem: A car of mass 1000 kg slows from 20 m/s to 10 m/s. Find the work done by the resultant force.\n• Given: m = 1000 kg; v₁ = 20 m/s; v₂ = 10 m/s; A — ?\n• SI conversion: All values are in SI\n• Solution: A = ΔE_k = m(v₂² − v₁²)/2 → A = 1000·(10² − 20²)/2 → A = 500·(100 − 400) → A = −150 000 J\n• Answer: A = −150 kJ. The negative sign shows that the resultant reduces speed.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Энергия дененің механикалық жұмыс атқару қабілетін сипаттайды; ол джоульмен өлшенеді.\n• Кинетикалық энергия қозғалып тұрған денеге тән және масса мен жылдамдық квадратына тәуелді.\n• Потенциалдық энергия — өзара әрекет энергиясы: көтерілген дененің Жермен не серпімді деформацияланған дене бөліктерінің.\n## Анықтамалар\n• Механикалық энергия — механикалық қозғалыс пен денелердің немесе олардың бөліктерінің өзара әрекет энергиясы.\n• Кинетикалық энергия — қозғалып тұрған дененің энергиясы.\n• Потенциалдық энергия — денелердің не бір дене бөліктерінің өзара әрекет энергиясы.\n• Жұмыс — дене энергиясының өзгеру өлшемі.\n## Формулалар мен байланыстар\n> E_k = mv²/2\n• кинетикалық энергия.\n> E_p = mgh\n• таңдалған деңгейден h биіктікте көтерілген дененің потенциалдық энергиясы.\n> E_серп = k(Δl)²/2\n• серпімді деформацияланған серіппенің потенциалдық энергиясы.\n> A = ΔE_k = E_k₂ − E_k₁\n• жұмыс кинетикалық энергияның өзгерісіне тең.\n## Сызба\n• Eₚ = mgh\n• Eₖ = mv²/2\n• E = Eₚ + Eₖ\n## Маңызды\n• Жылдамдық 3 есе артса, кинетикалық энергия 9 есе артады. Биіктікті екі есе арттыру mgh потенциалдық энергиясын екі есе арттырады.\n## Есеп шығару үлгісі\n• Есеп: Массасы 1000 кг автомобиль жылдамдығын 20 м/с-тан 10 м/с-қа дейін азайтты. Барлық күштердің теңәрекетті күшінің жұмысын табыңдар.\n• Берілгені: m = 1000 kg; v₁ = 20 m/s; v₂ = 10 m/s; A — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: A = ΔE_k = m(v₂² − v₁²)/2 → A = 1000·(10² − 20²)/2 → A = 500·(100 − 400) → A = −150 000 J\n• Жауабы: A = −150 кДж. Теріс таңба теңәрекетті күш жылдамдықты азайтатынын көрсетеді.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p32": {
    "title": "§ 32. Превращение и сохранение энергии",
    "titleEn": "§ 32. Transformation and Conservation of Energy",
    "titleKk": "§ 32. Энергияның түрленуі және сақталуы",
    "ru": "## Ключевые идеи\n• Тело может одновременно иметь кинетическую и потенциальную энергию.\n• При движении энергия одного вида может переходить в энергию другого вида.\n• В замкнутой системе без существенного трения полная механическая энергия сохраняется.\n## Определения\n• Полная механическая энергия — сумма кинетической и потенциальной энергий тела.\n• Замкнутая система тел — система тел, взаимодействующих друг с другом и практически не взаимодействующих с окружающими телами.\n• Закон сохранения механической энергии — в замкнутой системе, где действуют силы тяготения или упругости, полная механическая энергия остаётся неизменной.\n## Формулы и связи\n> E = E_к + E_п\n• полная механическая энергия.\n> E₁ = E₂\n• закон сохранения полной механической энергии.\n> mgh₁ + mv₁²/2 = mgh₂ + mv₂²/2\n• для движения тела под действием силы тяжести без сопротивления воздуха.\n## Схема: ПРЕВРАЩЕНИЕ ЭНЕРГИИ\n• E_п = mgh • E = E_п + E_к = const • E_к = mv²/2\n## Важно\n• При трении часть механической энергии превращается во внутреннюю (нагрев) и звук, поэтому только механическая энергия уменьшается.\n## Пример решения\n• Задача: Тело массой 3 кг свободно падает с высоты 5 м. Найдите потенциальную и кинетическую энергии на высоте 2 м. Сопротивлением воздуха пренебречь.\n• Дано: m = 3 кг; h₀ = 5 м; h = 2 м; g = 10 Н/кг (перевод в СИ не требуется)\n• Решение: E = mgh₀ = 3·10·5 = 150 Дж → E_п = mgh = 3·10·2 = 60 Дж → E_к = E − E_п = 150 − 60 = 90 Дж\n• Ответ: E_п = 60 Дж; E_к = 90 Дж.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: определи, какая часть полной механической энергии теннисного шарика теряется при одном подскоке; сделай вывод о передаче энергии.\n• 🔗 [Эксперимент. Упругий и неупругий удары](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Модель преобразования энергии (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)",
    "en": "## Key ideas\n• A body may have kinetic and potential energy at the same time.\n• During motion, energy of one type can transform into energy of another type.\n• In a closed system without significant friction, total mechanical energy is conserved.\n## Definitions\n• Total mechanical energy — the sum of a body’s kinetic and potential energies.\n• Closed system — a system of bodies that interact with one another and practically do not interact with surroundings.\n• Conservation of mechanical energy — in a closed system where gravitational or elastic forces act, total mechanical energy remains constant.\n## Formulas and relations\n> E = E_k + E_p\n• total mechanical energy.\n> E₁ = E₂\n• law of conservation of total mechanical energy.\n> mgh₁ + mv₁²/2 = mgh₂ + mv₂²/2\n• for motion under gravity with negligible air resistance.\n## Diagram\n• Eₚ = mgh\n• Eₖ = mv²/2\n• E = Eₚ + Eₖ\n## Note\n• With friction, part of mechanical energy turns into internal energy (heating) and sound, so mechanical energy decreases.\n## Worked example\n• Problem: A 3 kg body falls freely from height 5 m. Find its potential and kinetic energies at height 2 m. Ignore air resistance.\n• Given: m = 3 kg; h₀ = 5 m; h = 2 m; g = 10 N/kg\n• SI conversion: All values are in SI\n• Solution: E = mgh₀ = 3·10·5 = 150 J → E_p = mgh = 3·10·2 = 60 J → E_k = E − E_p = 150 − 60 = 90 J\n• Answer: E_p = 60 J; E_k = 90 J.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Дене бір мезгілде кинетикалық та, потенциалдық та энергияға ие бола алады.\n• Қозғалыста бір энергия түрі екінші энергия түріне айналуы мүмкін.\n• Үйкелісі елеусіз тұйық жүйеде толық механикалық энергия сақталады.\n## Анықтамалар\n• Толық механикалық энергия — дененің кинетикалық және потенциалдық энергияларының қосындысы.\n• Тұйық жүйе — өзара әрекеттесетін және қоршаған ортамен іс жүзінде өзара әрекеттеспейтін денелер жүйесі.\n• Механикалық энергияның сақталу заңы — тұйық жүйеде тартылыс не серпімділік күштері әсер еткенде толық механикалық энергия тұрақты қалады.\n## Формулалар мен байланыстар\n> E = E_k + E_p\n• толық механикалық энергия.\n> E₁ = E₂\n• толық механикалық энергияның сақталу заңы.\n> mgh₁ + mv₁²/2 = mgh₂ + mv₂²/2\n• ауа кедергісі еленбейтін ауырлық күшінің әсеріндегі қозғалыс үшін.\n## Сызба\n• Eₚ = mgh\n• Eₖ = mv²/2\n• E = Eₚ + Eₖ\n## Маңызды\n• Үйкелісте механикалық энергияның бір бөлігі ішкі энергияға (қызуға) және дыбысқа айналады, сондықтан механикалық энергия азаяды.\n## Есеп шығару үлгісі\n• Есеп: Массасы 3 кг дене 5 м биіктіктен еркін құлайды. 2 м биіктіктегі потенциалдық және кинетикалық энергияларын табыңдар. Ауа кедергісін елемеңдер.\n• Берілгені: m = 3 kg; h₀ = 5 m; h = 2 m; g = 10 N/kg\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: E = mgh₀ = 3·10·5 = 150 J → E_p = mgh = 3·10·2 = 60 J → E_k = E − E_p = 150 − 60 = 90 J\n• Жауабы: E_p = 60 Дж; E_k = 90 Дж.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p33": {
    "title": "§ 33. Простые механизмы",
    "titleEn": "§ 33. Simple Machines",
    "titleKk": "§ 33. Қарапайым механизмдер",
    "ru": "## Ключевые идеи\n• Простые механизмы преобразуют силу: могут менять её величину и направление.\n• К ним относятся рычаг, блок, ворот, наклонная плоскость, клин и винт.\n• Выигрыш в силе обычно сопровождается проигрышем в расстоянии.\n## Определения\n• Простые механизмы — приспособления, служащие для преобразования силы.\n• Рычаг — твёрдое тело, способное вращаться вокруг неподвижной опоры.\n• Плечо силы — кратчайшее расстояние от оси вращения до линии действия силы.\n• Момент силы — произведение силы на её плечо; характеризует вращающее действие силы.\n## Формулы и связи\n> M = Fd\n• момент силы; d — плечо силы; [M] = Н·м.\n> Неподвижный блок: F = P\n• не даёт выигрыша в силе, но меняет направление силы.\n> Подвижный блок: F ≈ P/2\n• в идеальном случае даёт выигрыш в силе примерно в 2 раза.\n> Для наклонной плоскости: F ≈ P·h/l\n• идеальная сила вдоль плоскости; l — длина, h — высота.\n## Схема: ПРОСТЫЕ МЕХАНИЗМЫ\n• рычаг • блок • наклонная плоскость • клин\n## Важно\n• «Золотое правило механики»: ни один простой механизм не даёт выигрыша в работе; во сколько раз выигрывают в силе, во столько проигрывают в расстоянии.\n## Пример решения\n• Задача: При помощи подвижного блока поднимают груз, прикладывая силу 100 Н. Определите вес груза. Весом блока и трением пренебречь.\n• Дано: F = 100 Н; P — ? (перевод в СИ не требуется)\n• Решение: Подвижный блок даёт выигрыш в силе в 2 → раза. → F = P/2 → P = 2F → P = 2·100 = 200 Н\n• Ответ: P = 200 Н.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: возьми ножницы разных видов, кусачки и линейку; определи выигрыш в силе при использовании этих инструментов.\n• 🔗 [Интерактивная модель рычага (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)",
    "en": "## Key ideas\n• Simple machines transform force: they can change its magnitude and direction.\n• They include the lever, pulley, wheel and axle, inclined plane, wedge and screw.\n• A gain in force is usually accompanied by a loss in distance.\n## Definitions\n• Simple machines — devices used to transform force.\n• Lever — a rigid body able to rotate around a fixed support.\n• Lever arm — the shortest distance from the axis of rotation to a force’s line of action.\n• Moment of a force — the product of a force and its lever arm; it characterizes turning effect.\n## Formulas and relations\n> M = Fd\n• moment of force; d is lever arm; [M] = N·m.\n> Fixed pulley: F = P\n• gives no force gain but changes the direction of force.\n> Movable pulley: F ≈ P/2\n• ideally gives a force gain of about two.\n> Inclined plane: F ≈ P·h/l\n• ideal force along the plane; l is length and h is height.\n## Diagram\n• Lever\n• Pulley\n• Inclined plane\n• Wedge\n## Note\n• The golden rule of mechanics: no simple machine gives a gain in work; whatever is gained in force is lost in distance.\n## Worked example\n• Problem: A load is lifted with a movable pulley by applying force 100 N. Ignore pulley weight and friction. Find the load weight.\n• Given: F = 100 N; P — ?\n• SI conversion: All values are in SI\n• Solution: F = P/2 → P = 2F → P = 2·100 = 200 N\n• Answer: P = 200 N.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Қарапайым механизмдер күшті түрлендіреді: оның модулі мен бағытын өзгерте алады.\n• Оларға иіндік, блок, шығыр, көлбеу жазықтық, сына және бұранда жатады.\n• Күштен ұтыс көбіне жолдан ұтылыспен бірге жүреді.\n## Анықтамалар\n• Қарапайым механизмдер — күшті түрлендіруге арналған құрылғылар.\n• Иіндік — қозғалмайтын тірек төңірегінде айнала алатын қатты дене.\n• Күш иіні — айналу осінен күштің әсер ету сызығына дейінгі ең қысқа қашықтық.\n• Күш моменті — күш пен оның иінінің көбейтіндісі; күштің айналдыру әсерін сипаттайды.\n## Формулалар мен байланыстар\n> M = Fd\n• күш моменті; d — күш иіні; [M] = Н·м.\n> Бекітілген блок: F = P\n• күштен ұтыс бермейді, бірақ күш бағытын өзгертеді.\n> Жылжымалы блок: F ≈ P/2\n• идеал жағдайда күштен шамамен 2 есе ұтыс береді.\n> Көлбеу жазықтық: F ≈ P·h/l\n• жазықтық бойындағы идеал күш; l — ұзындығы, h — биіктігі.\n## Сызба\n• Иіндік\n• Блок\n• Көлбеу жазықтық\n• Сына\n## Маңызды\n• Механиканың «алтын ережесі»: бірде-бір қарапайым механизм жұмыстан ұтыс бермейді; күштен қанша ұтсаң, жолдан сонша ұтыласың.\n## Есеп шығару үлгісі\n• Есеп: Жылжымалы блокпен жүкті 100 Н күш түсіріп көтереді. Блок салмағы мен үйкелісті елемеңдер. Жүктің салмағын табыңдар.\n• Берілгені: F = 100 N; P — ?\n• ХБЖ: Барлық дерек ХБЖ-да\n• Шешуі: F = P/2 → P = 2F → P = 2·100 = 200 N\n• Жауабы: P = 200 Н.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p34": {
    "title": "§ 34. Центр масс тел",
    "titleEn": "§ 34. Centre of Mass of Bodies",
    "titleKk": "§ 34. Денелердің масса центрі",
    "ru": "## Ключевые идеи\n• Центр масс — точка, которая движется так, как двигалось бы тело, если бы вся его масса была сосредоточена в этой точке.\n• Для однородных симметричных тел центр масс часто совпадает с геометрическим центром; он может лежать и вне тела.\n• Устойчивость определяется положением центра тяжести и площадью опоры.\n## Определения\n• Центр масс — точка, движение которой характеризует поступательное движение тела.\n• Центр тяжести — точка приложения равнодействующей сил тяжести, действующих на все части тела.\n• Устойчивое равновесие — после малого отклонения тело возвращается к положению равновесия.\n• Неустойчивое / безразличное равновесие — при малом отклонении тело соответственно удаляется от равновесия / остаётся в новом равновесном положении.\n## Формулы и связи\n> Центр тяжести внутри площади опоры → тело устойчиво\n• вертикаль, проведённая из центра тяжести, должна проходить через опору; иначе тело опрокинется.\n## Схема: ЦЕНТР ТЯЖЕСТИ И УСТОЙЧИВОСТЬ\n• вертикаль попадает в опору → устойчиво\n• ЦТ\n## Важно\n• Центр тяжести плоской фигуры произвольной формы находят отвесом: точка пересечения вертикалей, проведённых из двух точек подвеса, и есть искомая точка.\n## Экспериментальные задания\n• Экспериментальное задание: определи центр масс тела неправильной формы (например, транспортира).\n• 🔗 [Демонстрация определения центра масс](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)",
    "en": "## Key ideas\n• The centre of mass is the point that moves as the body would move if all of its mass were concentrated there.\n• For homogeneous symmetric bodies, it often coincides with the geometric centre, but it may lie outside the body.\n• Stability depends on the position of the centre of gravity and the support area.\n## Definitions\n• Centre of mass — a point whose motion characterizes the translational motion of a body.\n• Centre of gravity — the point of application of the resultant gravitational force on all parts of a body.\n• Stable equilibrium — equilibrium in which a body returns after a small displacement.\n• Unstable / neutral equilibrium — equilibrium in which a body moves farther away after a small displacement / remains in a new equilibrium position.\n## Formulas and relations\n> Centre of gravity over support area → stable\n• the vertical through the centre of gravity must pass through the support; otherwise the body tips over.\n## Diagram\n• Centre of gravity\n• Vertical\n• Support\n## Note\n• Use a plumb line to find the centre of gravity of a flat irregular shape: the intersection of vertical lines from two suspension points is the required point.",
    "kk": "## Негізгі ойлар\n• Масса центрі — дененің барлық массасы сонда жинақталғандай қозғалысын сипаттайтын нүкте.\n• Біртекті симметриялы денелерде ол жиі геометриялық центрмен сәйкеседі, бірақ денеден тыс та жатуы мүмкін.\n• Тұрақтылық ауырлық центрінің орналасуына және тірек ауданына тәуелді.\n## Анықтамалар\n• Масса центрі — қозғалысы дененің ілгерлемелі қозғалысын сипаттайтын нүкте.\n• Ауырлық центрі — дененің барлық бөліктеріне әсер ететін ауырлық күштерінің теңәрекетті күші түсетін нүкте.\n• Тұрақты тепе-теңдік — аз ғана ауытқудан кейін дене тепе-теңдік қалпына қайта оралатын тепе-теңдік.\n• Тұрақсыз / талғаусыз тепе-теңдік — аз ауытқығанда дене тепе-теңдіктен алыстайтын / жаңа қалыпта тепе-теңдікті сақтайтын күй.\n## Формулалар мен байланыстар\n> Ауырлық центрі тірек ауданының үстінде → тұрақты\n• ауырлық центрі арқылы жүргізілген тік сызық тірек арқылы өтуі тиіс, әйтпесе дене аударылады.\n## Сызба\n• Ауырлық центрі\n• Тік сызық\n• Тірек\n## Маңызды\n• Жазық дұрыс емес пішіннің ауырлық центрін тіктеуішпен табады: екі ілу нүктесінен жүргізілген тік сызықтардың қиылысуы — ізделінген нүкте."
  },
  "p35": {
    "title": "§ 35. Условие равновесия рычага",
    "titleEn": "§ 35. Condition for Lever Equilibrium",
    "titleKk": "§ 35. Иіндіктің тепе-теңдік шарты",
    "ru": "## Ключевые идеи\n• Рычаг находится в равновесии, когда вращающие действия сил уравновешивают друг друга.\n• Большая сила может уравновешиваться меньшей, если приложена к большему плечу.\n• Правило моментов справедливо для любого тела, вращающегося вокруг закреплённой оси.\n## Определения\n• Равновесие рычага — состояние, при котором рычаг не вращается.\n• Правило моментов — сумма моментов сил, вращающих тело по часовой стрелке, равна сумме моментов сил, вращающих его против часовой стрелки.\n• Равноплечие весы — рычажные весы с равными плечами; в равновесии массы грузов равны.\n## Формулы и связи\n> F₁/F₂ = d₂/d₁\n• силы на рычаге обратно пропорциональны их плечам.\n> F₁d₁ = F₂d₂\n• условие равновесия двух сил — равенство моментов.\n> ΣM_по часовой = ΣM_против часовой\n• правило моментов для нескольких сил.\n## Схема: РАВНОВЕСИЕ РЫЧАГА\n• F₁d₁ = F₂d₂\n• F₁ • F₂\n## Важно\n• Плечо силы всегда измеряют перпендикулярно линии действия силы, а не вдоль рычага.\n## Пример решения\n• Задача: На меньшее плечо рычага действует сила 300 Н, на большее — 20 Н. Длина меньшего плеча 5 см. Определите длину большего плеча.\n• Дано: F₁ = 300 Н; F₂ = 20 Н; d₁ = 5 см; d₂ — ?\n• Перевод в СИ: d₁ = 0,05 м\n• Решение: F₁d₁ = F₂d₂ → d₂ = F₁d₁/F₂ → d₂ = 300·0,05/20 → d₂ = 0,75 м\n• Ответ: d₂ = 0,75 м = 75 см.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: проверь соотношение сил и плеч на равноплечем рычаге и на рычаге с разными плечами; собери устойчивую конструкцию из двух вилок и зубочистки.\n• 🔗 [Равенство сил при равных плечах](https://youtu.be/2RPuG362_mI)\n• 🔗 [Интерактивная демонстрация (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Наглядный опыт с объяснением устойчивости](https://youtube.com/shorts/f_0ZGW9NqaI)",
    "en": "## Key ideas\n• A lever is in equilibrium when the turning effects of forces balance each other.\n• A larger force can be balanced by a smaller force if the smaller force acts at a longer arm.\n• The principle of moments applies to any body rotating about a fixed axis.\n## Definitions\n• Lever equilibrium — a state in which a lever does not rotate.\n• Principle of moments — the sum of moments turning a body clockwise equals the sum of moments turning it counter-clockwise.\n• Equal-arm balance — a beam balance with equal arms; in equilibrium, the masses on its pans are equal.\n## Formulas and relations\n> F₁/F₂ = d₂/d₁\n• forces acting on a lever are inversely proportional to their arms.\n> F₁d₁ = F₂d₂\n• equilibrium of two forces: their moments are equal.\n> ΣM_clockwise = ΣM_counter-clockwise\n• principle of moments for several forces.\n## Diagram\n• F₁d₁ = F₂d₂\n## Note\n• A lever arm is always measured perpendicular to the force’s line of action, not along the lever.\n## Worked example\n• Problem: A 300 N force acts on the shorter arm of a lever and a 20 N force on the longer arm. The short arm is 5 cm. Find the longer arm.\n• Given: F₁ = 300 N; F₂ = 20 N; d₁ = 5 cm; d₂ — ?\n• SI conversion: d₁ = 0.05 m\n• Solution: F₁d₁ = F₂d₂ → d₂ = F₁d₁/F₂ → d₂ = 300·0.05/20 → d₂ = 0.75 m\n• Answer: d₂ = 0.75 m = 75 cm.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Иіндік күштердің айналдыру әсерлері теңескенде тепе-теңдікте болады.\n• Кіші күш үлкен күшті ұзын иінде әсер етсе теңестіре алады.\n• Моменттер ережесі бекітілген ось төңірегінде айналатын кез келген денеге қолданылады.\n## Анықтамалар\n• Иіндіктің тепе-теңдігі — иіндік айналмайтын күй.\n• Моменттер ережесі — денені сағат тілімен айналдыратын күш моменттерінің қосындысы сағат тіліне қарсы айналдыратын моменттер қосындысына тең.\n• Тең иінді таразы — иіндері тең таразы; тепе-теңдікте табақшалардағы массалар тең.\n## Формулалар мен байланыстар\n> F₁/F₂ = d₂/d₁\n• иіндікке әсер ететін күштер олардың иіндеріне кері пропорционал.\n> F₁d₁ = F₂d₂\n• екі күш үшін тепе-теңдік шарты — моменттердің теңдігі.\n> ΣM_сағ.тілімен = ΣM_сағ.тіліне қарсы\n• бірнеше күш үшін моменттер ережесі.\n## Сызба\n• F₁d₁ = F₂d₂\n## Маңызды\n• Күш иіні иіндік бойымен емес, күштің әсер ету сызығына перпендикуляр өлшенеді.\n## Есеп шығару үлгісі\n• Есеп: Иіндіктің кіші иініне 300 Н, ал үлкен иініне 20 Н күш әсер етеді. Кіші иін ұзындығы 5 см. Үлкен иін ұзындығын табыңдар.\n• Берілгені: F₁ = 300 N; F₂ = 20 N; d₁ = 5 cm; d₂ — ?\n• ХБЖ: d₁ = 0,05 м\n• Шешуі: F₁d₁ = F₂d₂ → d₂ = F₁d₁/F₂ → d₂ = 300·0.05/20 → d₂ = 0.75 m\n• Жауабы: d₂ = 0,75 м = 75 см.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p36": {
    "title": "§ 36. Коэффициент полезного действия (КПД)",
    "titleEn": "§ 36. Efficiency (η)",
    "titleKk": "§ 36. Пайдалы әсер коэффициенті (ПӘК)",
    "ru": "## Ключевые идеи\n• В реальных механизмах часть работы расходуется на трение, деформации и другие потери.\n• Полезная работа — та, ради которой используют механизм; полная работа — вся совершённая работа.\n• КПД показывает, какая доля полной работы или мощности стала полезной.\n## Определения\n• Полезная работа (A_пол) — работа, которую необходимо выполнить для достижения цели.\n• Полная работа (A_полн) — работа, фактически совершённая приложенной силой.\n• КПД η — отношение полезной работы (или мощности) к полной; обычно выражают в процентах.\n## Формулы и связи\n> η = A_пол/A_полн · 100%\n• КПД по работам.\n> η = N_пол/N_полн · 100%\n• КПД по мощностям.\n> η < 100%\n• для реальных механизмов, потому что есть неизбежные потери энергии.\n## Схема: КУДА УХОДИТ ЭНЕРГИЯ\n• A_полн • A_пол\n• потери • η < 100%\n## Важно\n• Для повышения КПД уменьшают трение, используют смазку и подшипники, снижают лишние деформации и потери энергии.\n## Пример решения\n• Задача: Груз массой 20 кг равномерно тянут по наклонной плоскости силой 40 Н. Длина плоскости 2 м, высота 10 см. Определите КПД плоскости.\n• Дано: m = 20 кг; F = 40 Н; l = 2 м; h = 10 см; g = 10 Н/кг\n• Перевод в СИ: h = 0,1 м\n• Решение: A_пол = mgh = 20·10·0,1 = 20 Дж → A_полн = Fl = 40·2 = 80 Дж → η = A_пол/A_полн·100% → η = 20/80·100% = 25%\n• Ответ: η = 25%.\n• Оформление: записать величины в СИ → выбрать формулу → подставить числа с единицами → указать единицу в ответе.\n## Экспериментальные задания\n• Экспериментальное задание: из подручного материала изготовь подвижный блок, ворот и наклонную плоскость; определи, КПД какого механизма наибольший.\n• 🔗 [Создание подвижного блока, ворота и наклонной плоскости](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)",
    "en": "## Key ideas\n• In real machines, part of the work is spent on friction, deformation and other losses.\n• Useful work is the intended work; total work is all work done by the applied force.\n• Efficiency shows what fraction of total work or power becomes useful.\n## Definitions\n• Useful work A_useful — the work required to achieve the purpose.\n• Total work A_total — the work actually done by the applied force.\n• Efficiency η — the ratio of useful work or power to total work or power; it is usually expressed as a percentage.\n## Formulas and relations\n> η = A_useful/A_total · 100%\n• efficiency calculated from work.\n> η = N_useful/N_total · 100%\n• efficiency calculated from power.\n> η < 100%\n• for real mechanisms because unavoidable energy losses occur.\n## Diagram\n• Total work\n• Useful work\n• Losses\n## Note\n• Increase efficiency by reducing friction, using lubricants and bearings, and reducing unnecessary deformation and energy losses.\n## Worked example\n• Problem: A 20 kg load is pulled uniformly up a 2 m inclined plane by a force of 40 N. Its height is 10 cm. Find the efficiency.\n• Given: m = 20 kg; F = 40 N; l = 2 m; h = 10 cm; g = 10 N/kg\n• SI conversion: h = 0.1 m\n• Solution: A₁ = mgh = 20·10·0.1 = 20 J → A₂ = Fl = 40·2 = 80 J → η = A₁/A₂·100% = 20/80·100% = 25%\n• Answer: η = 25%.\n• Layout: write the quantities in SI → choose the formula → substitute values with units → state the unit in the answer.",
    "kk": "## Негізгі ойлар\n• Нақты механизмде жұмыстың бір бөлігі үйкеліске, деформацияға және өзге шығындарға кетеді.\n• Пайдалы жұмыс — механизм үшін атқарылатын мақсатты жұмыс; толық жұмыс — түсірілген күш атқарған барлық жұмыс.\n• ПӘК толық жұмыс не қуаттың қандай үлесі пайдалы болғанын көрсетеді.\n## Анықтамалар\n• Пайдалы жұмыс A_пайд — мақсатқа жету үшін қажет жұмыс.\n• Толық жұмыс A_тол — түскен күш шын мәнінде атқарған жұмыс.\n• ПӘК η — пайдалы жұмыстың не қуаттың толық жұмысқа не толық қуатқа қатынасы; көбіне пайызбен өрнектеледі.\n## Формулалар мен байланыстар\n> η = A_пайд/A_тол · 100%\n• жұмыстар арқылы есептелетін ПӘК.\n> η = N_пайд/N_тол · 100%\n• қуаттар арқылы есептелетін ПӘК.\n> η < 100%\n• нақты механизмдерде болмай қоймайтын энергия шығындары болғандықтан.\n## Сызба\n• Толық жұмыс\n• Пайдалы жұмыс\n• Шығын\n## Маңызды\n• ПӘК-ті арттыру үшін үйкелісті азайтады, майлау мен мойынтірек қолданады, артық деформация мен энергия шығынын кемітеді.\n## Есеп шығару үлгісі\n• Есеп: Массасы 20 кг жүк ұзындығы 2 м, биіктігі 10 см көлбеу жазықтық бойымен 40 Н күшпен бірқалыпты тартылады. ПӘК-ін табыңдар.\n• Берілгені: m = 20 kg; F = 40 N; l = 2 m; h = 10 cm; g = 10 N/kg\n• ХБЖ: h = 0,1 м\n• Шешуі: A₁ = mgh = 20·10·0.1 = 20 J → A₂ = Fl = 40·2 = 80 J → η = A₁/A₂·100% = 20/80·100% = 25%\n• Жауабы: η = 25%.\n• Рәсімдеу: шамаларды ХБЖ-ға келтір → формуланы таңда → мәндерді бірліктерімен қой → жауапта өлшем бірлігін жаз."
  },
  "p37": {
    "title": "§ 37. Наука о небесных телах",
    "titleEn": "§ 37. The Science of Celestial Bodies",
    "titleKk": "§ 37. Аспан денелері туралы ғылым",
    "ru": "## Ключевые идеи\n• Астрономия изучает небесные тела и их системы: движение, строение, происхождение и развитие.\n• Исторически существовали геоцентрическая и гелиоцентрическая модели мира.\n• Наблюдения и расчёты Коперника, Галилея, Кеплера и Ньютона сформировали современное понимание движения небесных тел.\n## Определения\n• Астрономия — наука о движении, строении, происхождении и развитии небесных тел и их систем.\n• Геоцентрическая система мира — система, в центре которой находится Земля.\n• Гелиоцентрическая система мира — система, в центре которой находится Солнце.\n• Небесные тела — звёзды, планеты, спутники, астероиды, кометы и другие объекты космоса.\n## Формулы и связи\n> Геоцентризм: Земля в центре\n• модель Аристотеля и Птолемея; петлеобразное движение планет объясняли эпициклами.\n> Гелиоцентризм: Солнце в центре Солнечной системы\n• модель Коперника; видимое петлеобразное движение связано с разными скоростями планет на орбитах.\n## Схема: МОДЕЛИ МИРА\n• геоцентризм • гелиоцентризм\n• Земля • Солнце\n## Важно\n• Галилей телескопическими наблюдениями подтвердил гелиоцентрические идеи, Кеплер описал движение планет, Ньютон объяснил его тяготением.",
    "en": "## Key ideas\n• Astronomy studies celestial bodies and their systems: their motion, structure, origin and development.\n• Historically, geocentric and heliocentric models of the world were proposed.\n• The observations and calculations of Copernicus, Galileo, Kepler and Newton formed the modern view of celestial motion.\n## Definitions\n• Astronomy — the science of motion, structure, origin and development of celestial bodies and their systems.\n• Geocentric system — a system with Earth at the centre.\n• Heliocentric system — a system with the Sun at the centre.\n• Celestial bodies — stars, planets, satellites, asteroids, comets and other space objects.\n## Formulas and relations\n> Geocentrism: Earth at the centre\n• the model of Aristotle and Ptolemy; loops in planet motion were explained by epicycles.\n> Heliocentrism: Sun at the centre of the Solar System\n• the model of Copernicus; apparent loops result from different orbital speeds of planets.\n## Diagram\n• Earth-centred\n• Sun-centred\n## Note\n• Galileo’s telescopic observations supported heliocentric ideas; Kepler described planetary motion, and Newton explained it by gravitation.",
    "kk": "## Негізгі ойлар\n• Астрономия аспан денелерін және олардың жүйелерін: қозғалысын, құрылысын, шығу тегі мен дамуын зерттейді.\n• Тарихта дүниенің геоцентрлік және гелиоцентрлік үлгілері ұсынылды.\n• Коперник, Галилей, Кеплер және Ньютонның бақылауы мен есептеулері аспан қозғалысы туралы қазіргі түсінікті қалыптастырды.\n## Анықтамалар\n• Астрономия — аспан денелері мен олардың жүйелерінің қозғалысын, құрылысын, шығу тегі мен дамуын зерттейтін ғылым.\n• Геоцентрлік жүйе — орталығында Жер орналасқан жүйе.\n• Гелиоцентрлік жүйе — орталығында Күн орналасқан жүйе.\n• Аспан денелері — жұлдыздар, ғаламшарлар, серіктер, астероидтар, кометалар және басқа ғарыш нысандары.\n## Формулалар мен байланыстар\n> Геоцентризм: орталықта Жер\n• Аристотель мен Птолемей үлгісі; ғаламшарлардың ілмек тәрізді қозғалысын эпициклдермен түсіндірді.\n> Гелиоцентризм: Күн жүйесінің орталығында Күн\n• Коперник үлгісі; көрінерлік ілмек тәрізді қозғалыс ғаламшар орбиталарындағы жылдамдықтардың әртүрлілігінен туады.\n## Сызба\n• Геоцентрлік\n• Гелиоцентрлік\n## Маңызды\n• Галилейдің телескоптық бақылаулары гелиоцентрлік идеяны қолдады; Кеплер ғаламшар қозғалысын сипаттады, Ньютон оны тартылыспен түсіндірді."
  },
  "p38": {
    "title": "§ 38. Солнечная система",
    "titleEn": "§ 38. The Solar System",
    "titleKk": "§ 38. Күн жүйесі",
    "ru": "## Ключевые идеи\n• В центре Солнечной системы находится звезда Солнце; вокруг него обращаются восемь планет.\n• Планеты делят на земную группу и планеты-гиганты; у большинства есть спутники.\n• Кроме планет, в системе есть астероиды, кометы, метеорные тела и пояса малых тел.\n## Определения\n• Планета — крупное небесное тело, обращающееся вокруг Солнца; в школьной модели выделяют 8 планет.\n• Астероид — небольшое небесное тело Солнечной системы, движущееся по орбите вокруг Солнца.\n• Комета — малое тело на вытянутой орбите; при приближении к Солнцу образует газопылевой хвост.\n• Метеор / метеорит — метеор — свечение при сгорании малого тела в атмосфере; метеорит — часть тела, достигшая поверхности Земли.\n## Формулы и связи\n> Планеты земной группы\n• Меркурий, Венера, Земля, Марс — имеют твёрдую поверхность.\n> Планеты-гиганты\n• Юпитер, Сатурн, Уран, Нептун — большие преимущественно газовые планеты.\n> 1 а.е. ≈ 150 000 000 км\n• астрономическая единица — среднее расстояние от Земли до Солнца.\n## Схема: СОЛНЕЧНАЯ СИСТЕМА\n• 4 планеты земной группы • 4 планеты-гиганта\n• Солнце\n## Важно\n• Между Марсом и Юпитером расположен главный пояс астероидов; за Нептуном — пояс Койпера. У Меркурия и Венеры нет естественных спутников.",
    "en": "## Key ideas\n• The star Sun is at the centre of the Solar System, and eight planets orbit it.\n• Planets are divided into terrestrial planets and giant planets; most planets have satellites.\n• The system also contains asteroids, comets, meteoroids and belts of small bodies.\n## Definitions\n• Planet — a large celestial body orbiting the Sun; the school model includes eight planets.\n• Asteroid — a small Solar System body moving around the Sun in an orbit.\n• Comet — a small body on an elongated orbit that forms a gas-and-dust tail when near the Sun.\n• Meteor / meteorite — a meteor is light from a small body burning in the atmosphere; a meteorite is a part that reaches Earth’s surface.\n## Formulas and relations\n> Terrestrial planets\n• Mercury, Venus, Earth and Mars; they have solid surfaces.\n> Giant planets\n• Jupiter, Saturn, Uranus and Neptune; large, mainly gaseous planets.\n> 1 AU ≈ 150 000 000 km\n• astronomical unit: the average Earth–Sun distance.\n## Diagram\n• Sun\n• Me\n• V\n• E\n• Ma\n• J\n• S\n• U\n• N\n## Note\n• The main asteroid belt lies between Mars and Jupiter; the Kuiper belt lies beyond Neptune. Mercury and Venus have no natural satellites.",
    "kk": "## Негізгі ойлар\n• Күн жүйесінің орталығында Күн жұлдызы орналасқан, оны сегіз ғаламшар айналады.\n• Ғаламшарлар жер тобына және алып ғаламшарларға бөлінеді; көпшілігінің серіктері бар.\n• Жүйеде астероидтар, кометалар, метеор денелері және кіші денелер белдеулері де бар.\n## Анықтамалар\n• Ғаламшар — Күнді орбита бойымен айналатын ірі аспан денесі; мектептік үлгіде сегіз ғаламшар бар.\n• Астероид — Күнді орбита бойымен айналатын Күн жүйесінің кіші аспан денесі.\n• Комета — созылыңқы орбитамен қозғалатын, Күнге жақындағанда газ-тозаң құйрығын түзетін кіші дене.\n• Метеор / метеорит — метеор — ұсақ дене атмосферада жанғанда пайда болатын жарқыл; метеорит — Жер бетіне жеткен бөлік.\n## Формулалар мен байланыстар\n> Жер тобының ғаламшарлары\n• Меркурий, Шолпан, Жер, Марс; қатты беті бар.\n> Алып ғаламшарлар\n• Юпитер, Сатурн, Уран, Нептун; негізінен газ тәрізді ірі ғаламшарлар.\n> 1 а.б. ≈ 150 000 000 км\n• астрономиялық бірлік: Жер мен Күннің орташа қашықтығы.\n## Сызба\n• Күн\n• Ме\n• Ш\n• Ж\n• Ма\n• Ю\n• С\n• У\n• Н\n## Маңызды\n• Негізгі астероидтар белдеуі Марс пен Юпитер арасында, ал Койпер белдеуі Нептуннан тыс жатыр. Меркурий мен Шолпанның табиғи серігі жоқ."
  },
  "p39": {
    "title": "§ 39. Основы календаря",
    "titleEn": "§ 39. Fundamentals of the Calendar",
    "titleKk": "§ 39. Күнтізбенің негіздері",
    "ru": "## Ключевые идеи\n• Календарь — система отсчёта длительных промежутков времени, основанная на периодичности небесных движений.\n• Основные естественные единицы времени: солнечные сутки, лунный месяц и солнечный (тропический) год.\n• Смена времён года вызвана наклоном оси Земли и её движением вокруг Солнца, а не изменением расстояния до Солнца.\n## Определения\n• Календарь — система счисления больших промежутков времени, основанная на периодичности движения небесных тел.\n• Тропический год — промежуток, за который Земля совершает полный оборот вокруг Солнца; около 365 суток 5 ч 48 мин 46 с.\n• Солнечный календарь — календарь, согласующий сутки и солнечный год.\n• Равноденствие и солнцестояние — дни, связанные с положением Земли на орбите: в равноденствие день и ночь равны, в солнцестояние достигается максимум или минимум длины дня.\n## Формулы и связи\n> Юлианский календарь: средний год 365,25 суток\n• каждый четвёртый год — високосный; календарь постепенно отстаёт от тропического года.\n> Григорианское правило\n• год, кратный 4, високосный; годы, кратные 100, не високосные, кроме кратных 400.\n> Наклон земной оси ≈ 23°27′\n• причина разной высоты Солнца, смены сезонов и разной длины дня на широтах.\n## Схема: ОТ ДВИЖЕНИЯ ЗЕМЛИ К КАЛЕНДАРЮ\n• лето\n• наклон оси Земли + обращение вокруг Солнца\n• весна • осень\n## Важно\n• В Северном полушарии: летнее солнцестояние около 22 июня, зимнее — около 22 декабря; в дни равноденствий день и ночь длятся приблизительно по 12 часов.",
    "en": "## Key ideas\n• A calendar is a system for counting long periods based on recurring celestial motions.\n• The main natural time units are the solar day, lunar month and solar (tropical) year.\n• Seasons are caused by the tilt of Earth’s axis and its revolution around the Sun, not by changing Earth–Sun distance.\n## Definitions\n• Calendar — a system for counting long periods of time based on the periodic motion of celestial bodies.\n• Tropical year — the time for one complete revolution of Earth around the Sun: about 365 days 5 h 48 min 46 s.\n• Solar calendar — a calendar that reconciles days with the solar year.\n• Equinox and solstice — days related to Earth’s orbital position: at an equinox day and night are equal; at solstice day length reaches a maximum or minimum.\n## Formulas and relations\n> Julian calendar: average year 365.25 days\n• every fourth year is a leap year; the calendar slowly drifts from the tropical year.\n> Gregorian rule\n• a year divisible by 4 is leap; century years are not leap unless divisible by 400.\n> Earth’s axial tilt ≈ 23°27′\n• the cause of different Sun heights, seasons and different daylight length by latitude.\n## Diagram\n• Summer\n• Autumn\n• Winter\n• Spring\n## Note\n• In the Northern Hemisphere, the summer solstice is about 22 June and the winter solstice about 22 December; at equinoxes day and night are approximately 12 hours each.",
    "kk": "## Негізгі ойлар\n• Күнтізбе — аспан денелерінің қайталанатын қозғалысына негізделген ұзақ уақыт аралықтарын есептеу жүйесі.\n• Негізгі табиғи уақыт бірліктері: күн тәулігі, ай айы және күндік (тропиктік) жыл.\n• Жыл мезгілдері Жер осінің көлбеулігі мен Жердің Күнді айналуынан ауысады, Жер мен Күн арақашықтығының өзгеруінен емес.\n## Анықтамалар\n• Күнтізбе — аспан денелерінің периодты қозғалысына негізделген ұзақ уақыт аралықтарын санау жүйесі.\n• Тропиктік жыл — Жердің Күнді толық бір айналып шығу уақыты: шамамен 365 тәулік 5 сағ 48 мин 46 с.\n• Күн күнтізбесі — тәулікті Күн жылымен сәйкестендіретін күнтізбе.\n• Күн мен түн теңелуі және күн тоқырауы — Жердің орбитадағы орнына байланысты күндер: теңелуде күн мен түн тең, тоқырауда күн ұзақтығы максимум не минимум болады.\n## Формулалар мен байланыстар\n> Юлиан күнтізбесі: орташа жыл 365,25 тәулік\n• әр төртінші жыл — кібісе; күнтізбе тропиктік жылдан біртіндеп ауытқиды.\n> Григориан ережесі\n• 4-ке бөлінетін жыл кібісе; жүздік жылдар 400-ге бөлінбесе, кібісе емес.\n> Жер осінің көлбеулігі ≈ 23°27′\n• Күн биіктігінің, мезгілдердің және ендік бойынша күн ұзақтығының әртүрлі болуының себебі.\n## Сызба\n• Жаз\n• Күз\n• Қыс\n• Көктем\n## Маңызды\n• Солтүстік жарты шарда жазғы күн тоқырауы шамамен 22 маусымда, қысқысы 22 желтоқсанда; күн мен түн теңелгенде екеуі де шамамен 12 сағатқа созылады."
  }
};
const CONSPECT_EXPERIMENTS = {
  "p2": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: объясни заинтересовавшие тебя природные явления, используя цепочку научного познания (наблюдение → гипотеза → эксперимент).\n• Наблюдение: в течение месяца ежедневно отмечай положение восхода и захода Солнца относительно здания или дерева; ответы найди в энциклопедии по астрономии (тема «Годичное движение Солнца»).\n• 🔗 [Научный метод — пошаговое объяснение](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Детская энциклопедия. Том 1. Земля](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [Лекция №3 «Восход и заход Солнца»](https://vk.com/video-51126445_456242880)\n• 🔗 [Симулятор движения Земли вокруг Солнца](https://www.new3jcn.com/Phyc140/star-planet.html)",
    "en": "## Experimental tasks\n• Experimental task: explain a natural phenomenon that interests you using the chain of scientific cognition (observation → hypothesis → experiment).\n• Observation: for a month, mark the position of sunrise and sunset relative to a building or tree each day; find answers in an astronomy encyclopaedia (topic «Annual motion of the Sun»).\n• 🔗 [Scientific method — step-by-step explanation](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Children's encyclopaedia. Vol. 1. Earth](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [Lecture №3 «Sunrise and sunset»](https://vk.com/video-51126445_456242880)\n• 🔗 [Simulator of the Earth's motion around the Sun](https://www.new3jcn.com/Phyc140/star-planet.html)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: ғылыми таным тізбегін (бақылау → болжам → эксперимент) қолданып, өзіңді қызықтырған табиғат құбылысын түсіндір.\n• Бақылау: бір ай бойы күн сайын Күннің шығуы мен батуының орнын ғимаратқа не ағашқа қатысты белгіле; жауаптарды астрономия энциклопедиясынан тап («Күннің жылдық қозғалысы» тақырыбы).\n• 🔗 [Ғылыми әдіс — қадамдық түсіндіру](https://youtu.be/kwjWiRamL-s)\n• 🔗 [Балалар энциклопедиясы. 1-том. Жер](https://djvu.online/file/lVJMlsNkKxjXA)\n• 🔗 [№3 дәріс «Күннің шығуы мен батуы»](https://vk.com/video-51126445_456242880)\n• 🔗 [Жердің Күнді айналу симуляторы](https://www.new3jcn.com/Phyc140/star-planet.html)"
  },
  "p3": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: линейкой определи размеры бокала и вычисли его объём; результат запиши в м³, дм³, см³, мм³ и литрах.\n• 🔗 [Измерение объёма тела сложной формы](https://www.youtube.com/watch?v=FSVnpPDnVHQ)",
    "en": "## Experimental tasks\n• Experimental task: use a ruler to determine the size of a glass and calculate its volume; write the result in m³, dm³, cm³, mm³ and litres.\n• 🔗 [Measuring the volume of a body of complex shape](https://www.youtube.com/watch?v=FSVnpPDnVHQ)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: сызғышпен бокалдың өлшемдерін анықтап, көлемін есепте; нәтижені м³, дм³, см³, мм³ және литрмен жаз.\n• 🔗 [Күрделі пішінді дененің көлемін өлшеу](https://www.youtube.com/watch?v=FSVnpPDnVHQ)"
  },
  "p5": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: мерным стаканом определи объём бокала и запиши результат с учётом погрешности.\n• 🔗 [Симулятор измерения объёма бокала](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Урок «Точность измерений и вычислений» (5–6 уроки)](https://youtu.be/FV7cEvoz5q4)",
    "en": "## Experimental tasks\n• Experimental task: use a measuring cup to find the volume of a glass and record the result with the measurement error.\n• 🔗 [Simulator of measuring the volume of a glass](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Lesson «Accuracy of measurements and calculations» (lessons 5–6)](https://youtu.be/FV7cEvoz5q4)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: өлшеуіш стақанмен бокалдың көлемін анықтап, нәтижені қателігімен жаз.\n• 🔗 [Бокал көлемін өлшеу симуляторы](https://gemini.google.com/share/8fe0f06138cd)\n• 🔗 [Сабақ «Өлшеу мен есептеудің дәлдігі» (5–6 сабақтар)](https://youtu.be/FV7cEvoz5q4)"
  },
  "p6": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: сантиметровой лентой измерь длину своего шага, посчитай число шагов от школы до дома и найди пройденный путь; изобрази траекторию в масштабе и построй вектор перемещения.\n• 🔗 [Как измеряется длина шага (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Траектория. Путь. Перемещение](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)",
    "en": "## Experimental tasks\n• Experimental task: measure the length of your step with a measuring tape, count the steps from school to home and find the distance travelled; draw the trajectory to scale and show the displacement vector.\n• 🔗 [How step length is measured (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Trajectory. Distance. Displacement](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: сантиметрлік таспамен өз қадамыңның ұзындығын өлшеп, мектептен үйге дейінгі қадам санын санап, жүрілген жолды тап; траекторияны масштабпен сызып, орын ауыстыру векторын көрсет.\n• 🔗 [Қадам ұзындығы қалай өлшенеді (SAV Geonaute Onwalk)](https://rutube.ru/video/c2992e1eb250ea490905baf9498acc41/)\n• 🔗 [Траектория. Жол. Орын ауыстыру](https://rutube.ru/video/82856fad976cee7c2ba1f53ca93101bc/)"
  },
  "p7": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: наблюдай за каплями дождя на заднем и боковом стекле покоящегося и движущегося автобуса; сделай выводы.\n• Домашний опыт: сделай отверстие в крышке бутылки, направь струю воды на неподвижную поверхность, затем приведи поверхность в движение; сравни результаты.\n• 🔗 [Симулятор «Дождь в автобусе»](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Система отсчёта](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [Симулятор «Эксперимент с водой и движением»](https://gemini.google.com/share/c077ce897f22)",
    "en": "## Experimental tasks\n• Experimental task: watch raindrops on the rear and side windows of a stationary and a moving bus; draw conclusions.\n• Home experiment: make a hole in a bottle cap, direct the water jet onto a stationary surface, then set the surface in motion; compare the results.\n• 🔗 [Simulator «Rain in a bus»](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Reference frame](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [Simulator «Experiment with water and motion»](https://gemini.google.com/share/c077ce897f22)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қозғалмайтын және қозғалып келе жатқан автобустың артқы және бүйір әйнегіндегі жаңбыр тамшыларын бақылап, қорытынды жаса.\n• Үй тәжірибесі: бөтелке қақпағын тесіп, су ағынын қозғалмайтын бетке бағытта, сосын бетті қозғалысқа келтір; нәтижелерді салыстыр.\n• 🔗 [«Автобустағы жаңбыр» симуляторы](https://gemini.google.com/share/1ee12ea4c340)\n• 🔗 [Санақ жүйесі](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_kolo&l=ru)\n• 🔗 [«Су мен қозғалыс тәжірибесі» симуляторы](https://gemini.google.com/share/c077ce897f22)"
  },
  "p8": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: наблюдай за движением пешеходов на участке с одинаковыми расстояниями (например, у забора со столбами) и определи, кто движется равномерно.\n• 🔗 [Симулятор «Движущийся человек»](https://phet.colorado.edu/en/simulations/moving-man)",
    "en": "## Experimental tasks\n• Experimental task: watch pedestrians on a section with equal spacing (e.g. along a fence with posts) and determine which of them move uniformly.\n• 🔗 [Simulator «The Moving Man»](https://phet.colorado.edu/en/simulations/moving-man)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: арақашықтықтары бірдей учаскеде (мысалы, бағаналары бар қоршау жанында) жаяу жүргіншілердің қозғалысын бақылап, кімнің бірқалыпты қозғалатынын анықта.\n• 🔗 [«Қозғалыстағы адам» симуляторы](https://phet.colorado.edu/en/simulations/moving-man)"
  },
  "p9": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: секундомером измерь время движения машин на прямом участке пути и вычисли их скорость; сравни с разрешённой скоростью в городе.\n• 🔗 [Движение (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Скорость](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Радар для измерения скорости](https://ru.ruwiki.ru/wiki/Радар_для_измерения_скорости)",
    "en": "## Experimental tasks\n• Experimental task: with a stopwatch measure the time cars take on a straight section of road and find their speed; compare with the permitted speed in the city.\n• 🔗 [Motion (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Speed](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Radar for measuring speed](https://ru.ruwiki.ru/wiki/%D0%A0%D0%B0%D0%B4%D0%B0%D1%80_%D0%B4%D0%BB%D1%8F_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%B8)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: секундомермен түзу жол учаскесінде машиналардың қозғалыс уақытын өлшеп, жылдамдығын есепте; қаладағы рұқсат етілген жылдамдықпен салыстыр.\n• 🔗 [Қозғалыс (Vascak)](https://www.vascak.cz/data/android/physicsatschool/template.php?s=mech_pohyb&l=ru)\n• 🔗 [Жылдамдық](https://youtu.be/XM1F45pKxHk)\n• 🔗 [Жылдамдықты өлшеуге арналған радар](https://ru.ruwiki.ru/wiki/Радар_для_измерения_скорости)"
  },
  "p11": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: изготовь рычажные весы из подручного материала; гирьки 1 г, 2 г сделай из проволоки, миллиграммовые — из бумаги; определи массы чайной и столовой ложек круп, соли и сахара.\n• 🔗 [Рычажные весы своими руками](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Определение массы — рычажные весы](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Симулятор самодельных весов и справочник](https://gemini.google.com/share/144615bae955)",
    "en": "## Experimental tasks\n• Experimental task: build lever scales from scrap materials; make 1 g and 2 g weights from wire and milligram weights from paper; find the masses of teaspoon and tablespoon portions of grains, salt and sugar.\n• 🔗 [Lever scales with your own hands](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Finding mass — lever scales](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Simulator of homemade scales and reference](https://gemini.google.com/share/144615bae955)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолда бар материалдан таразы жаса; 1 г және 2 г кірлерді сымнан, миллиграмдық кірлерді қағаздан дайында; шай және ас қасықтағы жарма, тұз, қанттың массасын анықта.\n• 🔗 [Таразыны өз қолыңмен жасау](https://www.youtube.com/watch?v=hi6XJsWGibM)\n• 🔗 [Массаны анықтау — таразы](https://www.youtube.com/watch?v=NAk8DrMkVnY)\n• 🔗 [Қолдан жасалған таразы симуляторы және анықтамалық](https://gemini.google.com/share/144615bae955)"
  },
  "p12": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: определи объём столовой ложки и вилки методом вытеснения; результат вырази в м³, дм³, см³, мм³.\n• 🔗 [Лабораторная работа «Измерение объёма тел»](https://gemini.google.com/share/258a24f3d31e)",
    "en": "## Experimental tasks\n• Experimental task: find the volume of a tablespoon and a fork by the displacement method; express the result in m³, dm³, cm³ and mm³.\n• 🔗 [Lab work «Measuring the volume of bodies»](https://gemini.google.com/share/258a24f3d31e)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: ас қасық пен шанышқының көлемін ығыстыру әдісімен анықта; нәтижені м³, дм³, см³, мм³-пен өрнекте.\n• 🔗 [«Денелердің көлемін өлшеу» зертханалық жұмысы](https://gemini.google.com/share/258a24f3d31e)"
  },
  "p14": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: положи на стол газету так, чтобы край свисал, сверху — книгу; резко выдерни газету, затем медленно; сравни и объясни. Повтори со стопкой книг.\n• 🔗 [«Выдернуть скатерть» — видео от «Чудеса науки»](https://vk.com/video-19801656_164198235)",
    "en": "## Experimental tasks\n• Experimental task: lay a newspaper on the table with its edge hanging over, place a book on top; pull the newspaper out sharply, then slowly; compare and explain. Repeat with a stack of books.\n• 🔗 [«Pulling out the tablecloth» — video by «Miracles of science»](https://vk.com/video-19801656_164198235)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: үстелге газетті шеті салбырап тұратындай қойып, үстіне кітап қой; газетті күрт тартып ал, сосын баяу; салыстырып, түсіндір. Кітаптар жинағымен қайтала.\n• 🔗 [«Дастарқанды тартып алу» — «Ғылым кереметтері» видеосы](https://vk.com/video-19801656_164198235)"
  },
  "p15": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: изготовь самодельный пружинный динамометр и нанеси шкалу, используя грузы разной массы и промышленный динамометр.\n• 🔗 [Динамометр — градуирование шкалы подручными средствами](https://www.youtube.com/watch?v=bzK7Zcm36VM)",
    "en": "## Experimental tasks\n• Experimental task: build a homemade spring dynamometer and mark its scale using loads of different mass and a factory-made dynamometer.\n• 🔗 [Dynamometer — marking the scale with improvised means](https://www.youtube.com/watch?v=bzK7Zcm36VM)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдан серіппелі динамометр жасап, әртүрлі массалы жүктер мен зауыттық динамометрді пайдаланып шкаласын белгіле.\n• 🔗 [Динамометр — шкаланы қолдағы құралдармен белгілеу](https://www.youtube.com/watch?v=bzK7Zcm36VM)"
  },
  "p17": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: проведи испытание на разрыв швейных ниток разной толщины (одинаковой длины) и одинаковой толщины (разной длины); обсуди результаты с одноклассниками.\n• 🔗 [Испытание швейных ниток на разрыв](https://vk.com/video213138898_456240939)",
    "en": "## Experimental tasks\n• Experimental task: test sewing threads of different thickness (same length) and the same thickness (different lengths) to breaking; discuss the results with classmates.\n• 🔗 [Breaking test of sewing threads](https://vk.com/video213138898_456240939)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қалыңдығы әртүрлі (ұзындығы бірдей) және қалыңдығы бірдей (ұзындығы әртүрлі) тігін жіптерін үзуге сына; нәтижелерді сыныптастарыңмен талқыла.\n• 🔗 [Тігін жіптерін үзуге сынау](https://vk.com/video213138898_456240939)"
  },
  "p18": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: исследуй упругие свойства простого листа бумаги и сложенного в гармошку; выясни, где применяется гофрированная бумага.\n• 🔗 [Практическое применение гофрированной бумаги](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)",
    "en": "## Experimental tasks\n• Experimental task: study the elastic properties of a plain sheet of paper and one folded into an accordion; find where corrugated paper is used.\n• 🔗 [Practical application of corrugated paper](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: жай қағаз бен гармонь тәрізді бүктелген қағаздың серпімді қасиеттерін зертте; гофр қағаздың қайда қолданылатынын анықта.\n• 🔗 [Гофр қағаздың практикалық қолданылуы](https://vimeo.com/reviews/8dfec392-1171-4a73-b020-dad07cbd506a/videos/680295064)"
  },
  "p19": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: самодельным динамометром определи коэффициент трения скольжения разных поверхностей и составь таблицу.\n• 🔗 [Лабораторная работа «Определение коэффициента трения скольжения»](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)",
    "en": "## Experimental tasks\n• Experimental task: with a homemade dynamometer find the sliding friction coefficient of different surfaces and make a table.\n• 🔗 [Lab work «Determining the sliding friction coefficient»](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдан жасалған динамометрмен әртүрлі беттердің сырғанау үйкеліс коэффициентін анықтап, кесте құр.\n• 🔗 [«Сырғанау үйкеліс коэффициентін анықтау» зертханалық жұмысы](https://rutube.ru/video/7deb85ec295d63a2dfe15f7c14da1e47/)"
  },
  "p20": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: изготовь динамометр из резинового жгута, проградуируй его, определи вес нескольких тел и составь паспорт динамометра.\n• 🔗 [«Силы и движение: основы»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)",
    "en": "## Experimental tasks\n• Experimental task: make a dynamometer from a rubber band, mark its scale, find the weight of several bodies and write a passport for the dynamometer.\n• 🔗 [«Forces and Motion: Basics»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: резеңке бұраудан динамометр жасап, шкаласын белгіле, бірнеше дененің салмағын анықта және динамометрге төлқұжат жаз.\n• 🔗 [«Күштер және қозғалыс: негіздері»](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_ru.html)"
  },
  "p21": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: определи толщину одного листа учебника с учётом погрешности; определи скорость диффузии в газах, открыв флакон духов и замерив время распространения запаха.\n• 🔗 [Симулятор «Определение толщины листа»](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [Симулятор «Диффузия»](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)",
    "en": "## Experimental tasks\n• Experimental task: find the thickness of one textbook page taking the error into account; find the diffusion rate in gases by opening a perfume bottle and measuring the time the smell spreads.\n• 🔗 [Simulator «Finding the thickness of a page»](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [Simulator «Diffusion»](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: оқулықтың бір парағының қалыңдығын қателігімен анықта; әтір флаконын ашып, иістің таралу уақытын өлшеп, газдардағы диффузия жылдамдығын анықта.\n• 🔗 [«Парақ қалыңдығын анықтау» симуляторы](https://gemini.google.com/share/dd33be3957f0)\n• 🔗 [«Диффузия» симуляторы](https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html)"
  },
  "p22": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: определи давление стула на пол и выясни, насколько оно изменится, если положить на него груз известной массы.\n• 🔗 [Опыт «Давление стула» (7 класс)](https://www.youtube.com/watch?v=8Pyc04u5ojE)",
    "en": "## Experimental tasks\n• Experimental task: find the pressure of a chair on the floor and how much it changes when a load of known mass is placed on it.\n• 🔗 [Experiment «Chair pressure» (grade 7)](https://www.youtube.com/watch?v=8Pyc04u5ojE)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: орындықтың еденге түсіретін қысымын анықта және үстіне белгілі массалы жүк қойғанда қаншаға өзгеретінін анықта.\n• 🔗 [«Орындықтың қысымы» тәжірибесі (7 сынып)](https://www.youtube.com/watch?v=8Pyc04u5ojE)"
  },
  "p23": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: натяни на цилиндр с поршнем тонкую плёнку; перемещай поршень влево-вправо и наблюдай за изменением положения плёнки; объясни результат.\n• 🔗 [Симулятор работы давления в замкнутом объёме](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)",
    "en": "## Experimental tasks\n• Experimental task: stretch a thin film over a cylinder with a piston; move the piston left and right and watch how the film changes; explain the result.\n• 🔗 [Simulator of pressure in a closed volume](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: поршені бар цилиндрге жұқа қабықша кер; поршеньді солға-оңға жылжытып, қабықшаның өзгеруін бақыла; нәтижені түсіндір.\n• 🔗 [Тұйық көлемдегі қысым жұмысының симуляторы](https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html)"
  },
  "p24": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: заполни гибкую трубку подкрашенной жидкостью и меняй положение одного конца; наблюдай за уровнем жидкости и объясни.\n• 🔗 [Опыт «Сообщающиеся сосуды»](https://vk.com/video-211506589_456239651)\n• 🔗 [Симулятор сообщающихся сосудов](https://gemini.google.com/share/e6f7f3488672)",
    "en": "## Experimental tasks\n• Experimental task: fill a flexible tube with coloured liquid and change the position of one end; watch the liquid level and explain.\n• 🔗 [Experiment «Communicating vessels»](https://vk.com/video-211506589_456239651)\n• 🔗 [Simulator of communicating vessels](https://gemini.google.com/share/e6f7f3488672)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: иілгіш түтікті боялған сұйықпен толтырып, бір ұшының орнын өзгерт; сұйық деңгейін бақылап, түсіндір.\n• 🔗 [«Қатынас ыдыстар» тәжірибесі](https://vk.com/video-211506589_456239651)\n• 🔗 [Қатынас ыдыстар симуляторы](https://gemini.google.com/share/e6f7f3488672)"
  },
  "p26": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: погрузи стакан в воду, переверни и медленно вытаскивай; объясни, почему уровень воды в стакане выше; рассчитай силу давления воздуха на раскрытую тетрадь.\n• 🔗 [Симулятор атмосферного давления](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [Чем удерживается вода в перевёрнутом стакане?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Калькулятор силы атмосферного давления](https://gemini.google.com/share/571f141dd222)",
    "en": "## Experimental tasks\n• Experimental task: dip a glass into water, turn it upside down and slowly pull it out; explain why the water level in the glass is higher; calculate the force of air pressure on an open notebook.\n• 🔗 [Simulator of atmospheric pressure](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [What holds water in an inverted glass?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Calculator of atmospheric pressure force](https://gemini.google.com/share/571f141dd222)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: стақанды суға батырып, төңкеріп, баяу шығар; стақандағы су деңгейінің неге жоғары екенін түсіндір; ашық дәптерге ауаның қысым күшін есепте.\n• 🔗 [Атмосфералық қысым симуляторы](https://gemini.google.com/share/702ea3676cbd)\n• 🔗 [Төңкерілген стақандағы суды не ұстап тұр?](https://youtu.be/8PoLwdo7plM)\n• 🔗 [Атмосфералық қысым күшінің калькуляторы](https://gemini.google.com/share/571f141dd222)"
  },
  "p27": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: из подручного материала изготовь жидкостный манометр; продумай способ определения давления воздуха внутри надутого шарика.\n• 🔗 [Демонстрация изготовления жидкостного манометра](https://youtu.be/CGn4kWsXe-I)",
    "en": "## Experimental tasks\n• Experimental task: make a liquid manometer from scrap materials; think of a way to find the air pressure inside an inflated balloon.\n• 🔗 [Demonstration of making a liquid manometer](https://youtu.be/CGn4kWsXe-I)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдағы материалдан сұйықтық манометр жаса; үрленген шар ішіндегі ауа қысымын анықтау тәсілін ойлап тап.\n• 🔗 [Сұйықтық манометр жасау көрсетілімі](https://youtu.be/CGn4kWsXe-I)"
  },
  "p29": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: брось виноградинку в сильно газированную воду и проследи, как она периодически тонет и всплывает; объясни.\n• 🔗 [Интерактивный симулятор Buoyancy](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Опыт с виноградинкой в газированной воде](https://youtu.be/JldV-8xJr6g)",
    "en": "## Experimental tasks\n• Experimental task: drop a grape into strongly carbonated water and watch it sink and rise periodically; explain.\n• 🔗 [Interactive simulator Buoyancy](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Experiment with a grape in carbonated water](https://youtu.be/JldV-8xJr6g)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: жүзімді қатты газдалған суға тастап, оның кезекпен батып, қалқып шығуын бақыла; түсіндір.\n• 🔗 [Интерактивті Buoyancy симуляторы](https://phet.colorado.edu/en/simulations/buoyancy)\n• 🔗 [Газдалған судағы жүзім тәжірибесі](https://youtu.be/JldV-8xJr6g)"
  },
  "p30": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: рассчитай работу при ходьбе из дома в школу и обратно (≈20 Дж на шаг) и развиваемую при этом мощность.\n• 🔗 [Решение задач. Применение формулы работы](https://youtu.be/Ym-F4DbqrA0)",
    "en": "## Experimental tasks\n• Experimental task: calculate the work done walking from home to school and back (≈20 J per step) and the power developed.\n• 🔗 [Solving problems. Applying the work formula](https://youtu.be/Ym-F4DbqrA0)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: үйден мектепке барып қайтқандағы жұмысты (әр қадамға ≈20 Дж) және соған сәйкес қуатты есепте.\n• 🔗 [Есептер шығару. Жұмыс формуласын қолдану](https://youtu.be/Ym-F4DbqrA0)"
  },
  "p31": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: продумай эксперимент по проверке зависимости кинетической энергии от массы и скорости тела (используй связь работы и энергии); оформи письменный отчёт.\n• 🔗 [Зависимость кинетической энергии от скорости и массы](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Лабораторная установка (отчёт по эксперименту)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)",
    "en": "## Experimental tasks\n• Experimental task: plan an experiment to check how kinetic energy depends on mass and speed (using the work–energy relation); write a written report.\n• 🔗 [Dependence of kinetic energy on speed and mass](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Laboratory setup (experiment report)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: кинетикалық энергияның масса мен жылдамдыққа тәуелділігін тексеру тәжірибесін ойлап тап (жұмыс пен энергия байланысын қолдан); жазбаша есеп дайында.\n• 🔗 [Кинетикалық энергияның жылдамдық пен массаға тәуелділігі](https://youtu.be/aQXOkkSbo9c)\n• 🔗 [Зертханалық қондырғы (тәжірибе есебі)](https://gemini.google.com/share/2842633f0f1f)\n• 🔗 [Interactive — Kinetic Energy](https://www.physicsclassroom.com/interactive/work-and-energy/kinetic-energy-sim/launch)"
  },
  "p32": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: определи, какая часть полной механической энергии теннисного шарика теряется при одном подскоке; сделай вывод о передаче энергии.\n• 🔗 [Эксперимент. Упругий и неупругий удары](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Модель преобразования энергии (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)",
    "en": "## Experimental tasks\n• Experimental task: find what part of the total mechanical energy of a tennis ball is lost in one bounce; draw a conclusion about energy transfer.\n• 🔗 [Experiment. Elastic and inelastic collisions](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Energy transformation model (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: теннис добының бір рет секіргенде толық механикалық энергиясының қандай бөлігін жоғалтатынын анықта; энергияның берілуі туралы қорытынды жаса.\n• 🔗 [Тәжірибе. Серпімді және серпімсіз соқтығыстар](https://youtu.be/UYjzQ1V8z3Q)\n• 🔗 [Энергияның түрлену моделі (Energy Skate Park)](https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html)"
  },
  "p33": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: возьми ножницы разных видов, кусачки и линейку; определи выигрыш в силе при использовании этих инструментов.\n• 🔗 [Интерактивная модель рычага (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)",
    "en": "## Experimental tasks\n• Experimental task: take scissors of different kinds, pliers and a ruler; determine the gain in force when using these tools.\n• 🔗 [Interactive lever model (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: әртүрлі қайшыларды, қысқышты және сызғышты алып, осы құралдарды қолданғандағы күштен ұтысты анықта.\n• 🔗 [Интерактивті рычаг моделі (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)"
  },
  "p34": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: определи центр масс тела неправильной формы (например, транспортира).\n• 🔗 [Демонстрация определения центра масс](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)",
    "en": "## Experimental tasks\n• Experimental task: find the centre of mass of an irregular body (e.g. a protractor).\n• 🔗 [Demonstration of finding the centre of mass](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: дұрыс емес пішінді дененің (мысалы, транспортирдің) массалар центрін анықта.\n• 🔗 [Массалар центрін анықтау көрсетілімі](https://www.youtube.com/watch?v=Pt8Mb6i5ZeA)"
  },
  "p35": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: проверь соотношение сил и плеч на равноплечем рычаге и на рычаге с разными плечами; собери устойчивую конструкцию из двух вилок и зубочистки.\n• 🔗 [Равенство сил при равных плечах](https://youtu.be/2RPuG362_mI)\n• 🔗 [Интерактивная демонстрация (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Наглядный опыт с объяснением устойчивости](https://youtube.com/shorts/f_0ZGW9NqaI)",
    "en": "## Experimental tasks\n• Experimental task: check the ratio of forces and arms on an equal-arm lever and on a lever with different arms; build a stable construction from two forks and a toothpick.\n• 🔗 [Equality of forces with equal arms](https://youtu.be/2RPuG362_mI)\n• 🔗 [Interactive demonstration (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Visual experiment explaining stability](https://youtube.com/shorts/f_0ZGW9NqaI)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: иіндері тең және әртүрлі рычагтарда күштер мен иіндер қатынасын тексер; екі шанышқы мен тіс шұқығыштан тұрақты конструкция құрастыр.\n• 🔗 [Иіндер тең болғандағы күштер теңдігі](https://youtu.be/2RPuG362_mI)\n• 🔗 [Интерактивті көрсетілім (Balancing Act)](https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html)\n• 🔗 [Тұрақтылықты түсіндіретін көрнекі тәжірибе](https://youtube.com/shorts/f_0ZGW9NqaI)"
  },
  "p36": {
    "ru": "## Экспериментальные задания\n• Экспериментальное задание: из подручного материала изготовь подвижный блок, ворот и наклонную плоскость; определи, КПД какого механизма наибольший.\n• 🔗 [Создание подвижного блока, ворота и наклонной плоскости](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)",
    "en": "## Experimental tasks\n• Experimental task: build a movable pulley, a windlass and an inclined plane from scrap materials; find which mechanism has the highest efficiency.\n• 🔗 [Building a movable pulley, windlass and inclined plane](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)",
    "kk": "## Эксперименттік тапсырмалар\n• Эксперименттік тапсырма: қолдағы материалдан жылжымалы блок, шығыр және көлбеу жазықтық жаса; қай механизмнің ПӘК-і ең үлкен екенін анықта.\n• 🔗 [Жылжымалы блок, шығыр және көлбеу жазықтық жасау](https://youtu.be/GrmlHU_f88I?si=S4E9eZrfFIIxhtH0)"
  }
};
const LAB_WORKS = {
  "lab1": {
    "ru": "## Цель работы\n• определять размер малых тел методом рядов.\n## Видео и материалы\n• 🔗 [Виртуальная лабораторная работа №1 «Измерение размеров малых тел»](https://youtu.be/xvBGMh5R_jg)\n• 🔗 [Виртуальная лабораторная работа (Google Gemini)](https://gemini.google.com/share/c7e5587f0de5)",
    "en": "## Goal of the work\n• determine the size of small bodies by the row method.\n## Videos and materials\n• 🔗 [Virtual lab work №1 «Measuring the size of small bodies»](https://youtu.be/xvBGMh5R_jg)\n• 🔗 [Virtual lab work (Google Gemini)](https://gemini.google.com/share/c7e5587f0de5)",
    "kk": "## Жұмыстың мақсаты\n• ұсақ денелердің өлшемдерін қатар әдісімен анықтау.\n## Бейнелер мен материалдар\n• 🔗 [№1 виртуалды зертханалық жұмыс «Ұсақ денелердің өлшемдерін өлшеу»](https://youtu.be/xvBGMh5R_jg)\n• 🔗 [Виртуалды зертханалық жұмыс (Google Gemini)](https://gemini.google.com/share/c7e5587f0de5)"
  },
  "lab2": {
    "ru": "## Цель работы\n• измерять длину, объём тела, температуру и время; записывать результаты измерений с учётом погрешности.\n## Видео и материалы\n• 🔗 [Цена деления измерительного прибора](https://vt.tiktok.com/ZSam1nP61/)\n• 🔗 [Определение погрешности](https://youtu.be/rmljEEUpwr8)\n• 🔗 [Симулятор определения объёма тела методом вытеснения воды](https://phet.colorado.edu/en/simulations/density)",
    "en": "## Goal of the work\n• measure length, body volume, temperature and time; record the measurement results with the measurement error.\n## Videos and materials\n• 🔗 [Scale value of a measuring instrument](https://vt.tiktok.com/ZSam1nP61/)\n• 🔗 [Determining the measurement error](https://youtu.be/rmljEEUpwr8)\n• 🔗 [Simulator of finding body volume by water displacement](https://phet.colorado.edu/en/simulations/density)",
    "kk": "## Жұмыстың мақсаты\n• дененің ұзындығын, көлемін, температурасын және уақытты өлшеу; өлшеу нәтижелерін қателікті ескеріп жазу.\n## Бейнелер мен материалдар\n• 🔗 [Өлшеуіш аспаптың бөлік құны](https://vt.tiktok.com/ZSam1nP61/)\n• 🔗 [Қателікті анықтау](https://youtu.be/rmljEEUpwr8)\n• 🔗 [Суды ығыстыру әдісімен дене көлемін анықтау симуляторы](https://phet.colorado.edu/en/simulations/density)"
  },
  "lab3": {
    "ru": "## Цель работы\n• научиться определять плотность жидкостей и твёрдого тела с помощью рычажных весов, линейки и измерительного цилиндра.\n## Видео и материалы\n• 🔗 [Плотность вещества и единицы измерения плотности](https://youtu.be/Fda5RH3wIxQ)",
    "en": "## Goal of the work\n• learn to determine the density of liquids and a solid using lever scales, a ruler and a measuring cylinder.\n## Videos and materials\n• 🔗 [Density of matter and units of density](https://youtu.be/Fda5RH3wIxQ)",
    "kk": "## Жұмыстың мақсаты\n• таразы, сызғыш және өлшеуіш цилиндр арқылы сұйықтар мен қатты дененің тығыздығын анықтауды үйрену.\n## Бейнелер мен материалдар\n• 🔗 [Заттың тығыздығы және тығыздық өлшем бірліктері](https://youtu.be/Fda5RH3wIxQ)"
  },
  "lab4": {
    "ru": "## Цель работы\n• определить коэффициент жёсткости по графику зависимости силы упругости от удлинения.\n## Видео и материалы\n• 🔗 [Лабораторная работа №4 «Изучение упругих деформаций»](https://youtu.be/RyGGYzpV3as)",
    "en": "## Goal of the work\n• determine the stiffness from the graph of elastic force versus extension.\n## Videos and materials\n• 🔗 [Lab work №4 «Studying elastic deformations»](https://youtu.be/RyGGYzpV3as)",
    "kk": "## Жұмыстың мақсаты\n• серпімділік күшінің ұзаруға тәуелділік графигі бойынша қатаңдық коэффициентін анықтау.\n## Бейнелер мен материалдар\n• 🔗 [№4 зертханалық жұмыс «Серпімді деформацияларды зерттеу»](https://youtu.be/RyGGYzpV3as)"
  },
  "lab5": {
    "ru": "## Цель работы\n• исследовать зависимость силы трения скольжения от силы реакции опоры, от площади соприкосновения; определить коэффициент трения поверхностей.\n## Видео и материалы\n• 🔗 [Сила трения. Учёт трения в технике](https://youtu.be/WHOYzydZIfk)",
    "en": "## Goal of the work\n• study how sliding friction depends on the normal reaction force and the contact area; determine the coefficient of friction of the surfaces.\n## Videos and materials\n• 🔗 [Friction force. Accounting for friction in technology](https://youtu.be/WHOYzydZIfk)",
    "kk": "## Жұмыстың мақсаты\n• сырғанау үйкеліс күшінің тірек реакция күші мен жанасу ауданына тәуелділігін зерттеу; беттердің үйкеліс коэффициентін анықтау.\n## Бейнелер мен материалдар\n• 🔗 [Үйкеліс күші. Техникада үйкелісті ескеру](https://youtu.be/WHOYzydZIfk)"
  },
  "lab6": {
    "ru": "## Цель работы\n• определить силу Архимеда, сравнить её с весом вытесненной телом воды; исследовать её зависимость от объёма тела, погружённого в жидкость; знать и соблюдать технику безопасности в кабинете физики.\n## Видео и материалы\n• 🔗 [Закон Архимеда](https://vt.tiktok.com/ZSamhUUQa/)\n• 🔗 [Симулятор измерения силы Архимеда](https://phet.colorado.edu/en/simulations/buoyancy)",
    "en": "## Goal of the work\n• determine the buoyant force and compare it with the weight of the displaced water; study its dependence on the volume of the body immersed in the liquid; know and follow safety rules in the physics classroom.\n## Videos and materials\n• 🔗 [Archimedes' law](https://vt.tiktok.com/ZSamhUUQa/)\n• 🔗 [Simulator of measuring the buoyant force](https://phet.colorado.edu/en/simulations/buoyancy)",
    "kk": "## Жұмыстың мақсаты\n• Архимед күшін анықтап, ығыстырылған судың салмағымен салыстыру; оның сұйыққа батырылған дене көлеміне тәуелділігін зерттеу; физика кабинетіндегі қауіпсіздік техникасын білу және сақтау.\n## Бейнелер мен материалдар\n• 🔗 [Архимед заңы](https://vt.tiktok.com/ZSamhUUQa/)\n• 🔗 [Архимед күшін өлшеу симуляторы](https://phet.colorado.edu/en/simulations/buoyancy)"
  },
  "lab7": {
    "ru": "## Цель работы\n• опытным путём определить условия плавания тел в жидкости; сравнить значение силы тяжести и силы Архимеда в случае, когда тело плавает на поверхности жидкости.\n## Видео и материалы\n• 🔗 [Интерактивный симулятор Buoyancy — условия плавания тел](https://phet.colorado.edu/en/simulations/buoyancy)",
    "en": "## Goal of the work\n• find by experiment the conditions for floating bodies in a liquid; compare gravity and buoyant force for a body floating on the liquid surface.\n## Videos and materials\n• 🔗 [Interactive simulator Buoyancy — floating conditions](https://phet.colorado.edu/en/simulations/buoyancy)",
    "kk": "## Жұмыстың мақсаты\n• денелердің сұйықта жүзу шарттарын тәжірибе арқылы анықтау; дене сұйық бетінде жүзіп тұрғандағы ауырлық күші мен Архимед күшін салыстыру.\n## Бейнелер мен материалдар\n• 🔗 [Интерактивті Buoyancy симуляторы — жүзу шарттары](https://phet.colorado.edu/en/simulations/buoyancy)"
  },
  "lab8": {
    "ru": "## Цель работы\n• нахождение центра масс плоской фигуры.\n## Видео и материалы\n• 🔗 [Видео: объяснение способа определения центра масс тела неправильной формы](https://vkvideo.ru/video-88693796_456239805)",
    "en": "## Goal of the work\n• finding the centre of mass of a plane figure.\n## Videos and materials\n• 🔗 [Video: how to find the centre of mass of an irregular body](https://vkvideo.ru/video-88693796_456239805)",
    "kk": "## Жұмыстың мақсаты\n• жазық фигураның массалар центрін табу.\n## Бейнелер мен материалдар\n• 🔗 [Бейне: дұрыс емес пішінді дененің массалар центрін анықтау тәсілі](https://vkvideo.ru/video-88693796_456239805)"
  },
  "lab9": {
    "ru": "## Цель работы\n• выяснить, при каком условии рычаг находится в равновесии.\n## Видео и материалы\n• 🔗 [Объяснение: что такое момент силы и как найти момент силы, решение задач на тему рычаг](https://youtu.be/A0aNm__VRUo)",
    "en": "## Goal of the work\n• find the condition under which a lever is in equilibrium.\n## Videos and materials\n• 🔗 [Explanation: what a moment of force is and how to find it, solving lever problems](https://youtu.be/A0aNm__VRUo)",
    "kk": "## Жұмыстың мақсаты\n• рычагтың қандай жағдайда тепе-теңдікте болатынын анықтау.\n## Бейнелер мен материалдар\n• 🔗 [Түсіндірме: күш моменті дегеніміз не және оны қалай табу, рычаг тақырыбына есеп шығару](https://youtu.be/A0aNm__VRUo)"
  },
  "lab10": {
    "ru": "## Цель работы\n• убедиться на опыте в том, что полезная работа меньше полной; научиться определять КПД наклонной плоскости; выяснить, как зависит КПД наклонной плоскости от угла её наклона.\n## Видео и материалы\n• 🔗 [Видеодемонстрация эксперимента по определению работы сил и КПД](https://youtu.be/GrmlHU_f88I)",
    "en": "## Goal of the work\n• verify by experiment that useful work is less than total work; learn to determine the efficiency of an inclined plane; find how the efficiency depends on its slope angle.\n## Videos and materials\n• 🔗 [Video demonstration of the experiment on finding work of forces and efficiency](https://youtu.be/GrmlHU_f88I)",
    "kk": "## Жұмыстың мақсаты\n• пайдалы жұмыстың толық жұмыстан аз екеніне тәжірибе жүзінде көз жеткізу; көлбеу жазықтықтың ПӘК-ін анықтауды үйрену; ПӘК-тің көлбеу бұрышына тәуелділігін анықтау.\n## Бейнелер мен материалдар\n• 🔗 [Күштер жұмысы мен ПӘК-ті анықтау тәжірибесінің бейнекөрсетілімі](https://youtu.be/GrmlHU_f88I)"
  }
};
window.GRADE_LOCALES_PATCH = {
  "ru": {
    "titleLine2": "ЭНЕРГЕТИЧЕСКИЙ ЩИТ",
    "subtitle": "Защити город от астероидов силой знаний физики",
    "level1Name": "🛡 Техника безопасности",
    "level2Name": "§1. Физика — наука о природе",
    "level3Name": "§2. Научные методы изучения природы",
    "level4Name": "§3. Физические величины и их измерение",
    "level5Name": "§4. Скалярные и векторные величины",
    "level6Name": "§5. Точность измерений и вычислений",
    "level7Name": "§6. Механическое движение",
    "level8Name": "§7. Траектория. Путь. Перемещение",
    "level9Name": "§8. Прямолинейное равномерное и неравномерное",
    "level10Name": "§9. Расчёт скорости и средней скорости",
    "level11Name": "§10. Графики движения",
    "level12Name": "§11. Масса и измерение массы тел",
    "level13Name": "§12. Измерение объёма тел",
    "level14Name": "§13. Плотность вещества",
    "level15Name": "§14. Явление инерции",
    "level16Name": "§15. Сила",
    "level17Name": "§16. Явление тяготения. Сила тяжести. Вес",
    "level18Name": "§17. Деформация",
    "level19Name": "§18. Сила упругости. Закон Гука",
    "level20Name": "§19. Сила трения",
    "level21Name": "§20. Сложение сил",
    "level22Name": "§21. Молекулярное строение тел",
    "level23Name": "§22. Давление твёрдых тел",
    "level24Name": "§23. Давление в жидкостях и газах. Закон Паскаля",
    "level25Name": "§24. Сообщающиеся сосуды",
    "level26Name": "§25. Гидравлическая машина",
    "level27Name": "§26. Атмосферное давление",
    "level28Name": "§27. Манометры. Насосы",
    "level29Name": "§28. Выталкивающая сила. Закон Архимеда",
    "level30Name": "§29. Условия плавания тел",
    "level31Name": "§30. Механическая работа. Мощность",
    "level32Name": "§31. Кинетическая энергия",
    "level33Name": "§32. Превращение и сохранение энергии",
    "level34Name": "§33. Простые механизмы. Рычаг. Блок",
    "level35Name": "§34. Центр масс тел",
    "level36Name": "§35. Условие равновесия рычага",
    "level37Name": "§36. Коэффициент полезного действия (КПД)",
    "level38Name": "§37. Наука о небесных телах",
    "level39Name": "§38. Солнечная система",
    "level40Name": "§39. Основы календаря",
    "level41Name": "🔬 Лаб. №1: Размеры малых тел",
    "level42Name": "🔬 Лаб. №2: Измерение физических величин",
    "level43Name": "🔬 Лаб. №3: Определение плотности",
    "level44Name": "🔬 Лаб. №4: Упругие деформации",
    "level45Name": "🔬 Лаб. №5: Сила трения",
    "level46Name": "🔬 Лаб. №6: Закон Архимеда",
    "level47Name": "🔬 Лаб. №7: Условия плавания тел",
    "level48Name": "🔬 Лаб. №8: Центр масс",
    "level49Name": "🔬 Лаб. №9: Равновесие рычага",
    "level50Name": "🔬 Лаб. №10: КПД наклонной плоскости",
    "levelSafetyDesc": "⚠ Правила безопасности на уроке физики (бонусный)",
    "level2Desc": "📖 Физика как наука. Явления, тела, вещества, материя",
    "level3Desc": "📖 Наблюдение, гипотеза, эксперимент, физическая теория",
    "level4Desc": "📖 Физические величины, измерительные приборы, шкала",
    "level5Desc": "📖 Скалярные и векторные величины, проекция вектора",
    "level6Desc": "📖 Точность измерений, погрешность, цена деления",
    "level7Desc": "📖 Механическое движение, система отсчёта, материальная точка",
    "level8Desc": "📖 Траектория, путь, перемещение",
    "level9Desc": "📖 Прямолинейное равномерное и неравномерное движение",
    "level10Desc": "📖 Скорость, средняя скорость, единицы измерения",
    "level11Desc": "📖 Графики зависимости скорости и пути от времени",
    "level12Desc": "📖 Масса тела, единицы массы, рычажные весы",
    "level13Desc": "📖 Измерение объёма тел правильной и неправильной формы",
    "level14Desc": "📖 Плотность вещества, формула ρ = m/V",
    "level15Desc": "📖 Инерция, инертность, Инерциальные системы отсчёта",
    "level16Desc": "📖 Сила, единицы силы, изображение сил",
    "level17Desc": "📖 Всемирное тяготение, сила тяжести, вес тела, невесомость",
    "level18Desc": "📖 Деформация, виды деформации",
    "level19Desc": "📖 Сила упругости, закон Гука F = -kx",
    "level20Desc": "📖 Сила трения, трение покоя, скольжения, качения",
    "level21Desc": "📖 Сложение сил, равнодействующая",
    "level22Desc": "📖 Молекулярное строение твёрдых тел, жидкостей и газов",
    "level23Desc": "📖 Давление твёрдых тел p = F/S",
    "level24Desc": "📖 Давление в жидкостях и газах, закон Паскаля",
    "level25Desc": "📖 Сообщающиеся сосуды, гидростатический парадокс",
    "level26Desc": "📖 Гидравлическая машина, гидравлический пресс",
    "level27Desc": "📖 Атмосферное давление, опыт Торричелли, барометр",
    "level28Desc": "📖 Манометры, жидкостные и механические насосы",
    "level29Desc": "📖 Выталкивающая сила, закон Архимеда",
    "level30Desc": "📖 Условия плавания тел",
    "level31Desc": "📖 Механическая работа A = F·s, мощность N = A/t",
    "level32Desc": "📖 Кинетическая энергия E_k = mv²/2",
    "level33Desc": "📖 Потенциальная энергия, закон сохранения энергии",
    "level34Desc": "📖 Простые механизмы: рычаг, блок, ворот, наклонная плоскость",
    "level35Desc": "📖 Центр масс тела, метод подвешивания",
    "level36Desc": "📖 Правило моментов, условие равновесия рычага",
    "level37Desc": "📖 КПД простых механизмов, наклонная плоскость",
    "level38Desc": "📖 Астрономия, небесные тела, звёзды, галактики",
    "level39Desc": "📖 Солнечная система, планеты, их спутники",
    "level40Desc": "📖 Календарь, високосный год, астрономические основы"
  },
  "en": {
    "titleLine2": "ENERGY SHIELD",
    "subtitle": "Defend the city from asteroids with the power of physics",
    "level1Name": "🛡 Lab Safety Rules",
    "level2Name": "§1. Physics — Science of Nature",
    "level3Name": "§2. Scientific Methods of Studying Nature",
    "level4Name": "§3. Physical Quantities and Their Measurement",
    "level5Name": "§4. Scalar and Vector Quantities",
    "level6Name": "§5. Accuracy of Measurements and Calculations",
    "level7Name": "§6. Mechanical Motion",
    "level8Name": "§7. Trajectory. Path. Displacement",
    "level9Name": "§8. Uniform and Non-uniform Rectilinear Motion",
    "level10Name": "§9. Calculating Speed and Average Speed",
    "level11Name": "§10. Motion Graphs",
    "level12Name": "§11. Mass and Measuring the Mass of Bodies",
    "level13Name": "§12. Measuring the Volume of Bodies",
    "level14Name": "§13. Density of Matter",
    "level15Name": "§14. The Phenomenon of Inertia",
    "level16Name": "§15. Force",
    "level17Name": "§16. Gravitation. Gravity. Weight",
    "level18Name": "§17. Deformation",
    "level19Name": "§18. Elastic Force. Hooke's Law",
    "level20Name": "§19. Friction Force",
    "level21Name": "§20. Addition of Forces",
    "level22Name": "§21. Molecular Structure of Matter",
    "level23Name": "§22. Pressure of Solids",
    "level24Name": "§23. Pressure in Liquids and Gases. Pascal's Law",
    "level25Name": "§24. Communicating Vessels",
    "level26Name": "§25. Hydraulic Machine",
    "level27Name": "§26. Atmospheric Pressure",
    "level28Name": "§27. Manometers. Pumps",
    "level29Name": "§28. Buoyant Force. Archimedes' Law",
    "level30Name": "§29. Conditions for Bodies to Float",
    "level31Name": "§30. Mechanical Work. Power",
    "level32Name": "§31. Kinetic Energy",
    "level33Name": "§32. Transformation and Conservation of Energy",
    "level34Name": "§33. Simple Machines. Lever. Pulley",
    "level35Name": "§34. Center of Mass of Bodies",
    "level36Name": "§35. Lever Equilibrium Condition",
    "level37Name": "§36. Efficiency",
    "level38Name": "§37. Science of Celestial Bodies",
    "level39Name": "§38. The Solar System",
    "level40Name": "§39. Basics of the Calendar",
    "level41Name": "🔬 Lab #1: Sizes of Small Bodies",
    "level42Name": "🔬 Lab #2: Measuring Physical Quantities",
    "level43Name": "🔬 Lab #3: Determining Density",
    "level44Name": "🔬 Lab #4: Elastic Deformations",
    "level45Name": "🔬 Lab #5: Sliding Friction",
    "level46Name": "🔬 Lab #6: Archimedes' Law",
    "level47Name": "🔬 Lab #7: Floating Conditions of Bodies",
    "level48Name": "🔬 Lab #8: Center of Mass",
    "level49Name": "🔬 Lab #9: Lever Equilibrium",
    "level50Name": "🔬 Lab #10: Efficiency of an Inclined Plane",
    "levelSafetyDesc": "⚠ Physics lab safety rules (bonus)",
    "level2Desc": "📖 Physics as a science. Phenomena, bodies, matter",
    "level3Desc": "📖 Observation, hypothesis, experiment, theory",
    "level4Desc": "📖 Physical quantities, measuring instruments, scale",
    "level5Desc": "📖 Scalar and vector quantities, vector projection",
    "level6Desc": "📖 Accuracy of measurements, error, scale division",
    "level7Desc": "📖 Mechanical motion, reference frame, point particle",
    "level8Desc": "📖 Trajectory, path, displacement",
    "level9Desc": "📖 Uniform and non-uniform rectilinear motion",
    "level10Desc": "📖 Speed, average speed, units",
    "level11Desc": "📖 Graphs of speed and distance vs time",
    "level12Desc": "📖 Mass, units, beam balance",
    "level13Desc": "📖 Volume measurement, regular and irregular shapes",
    "level14Desc": "📖 Density ρ = m/V",
    "level15Desc": "📖 Inertia, inertial frames",
    "level16Desc": "📖 Force, units, representation of forces",
    "level17Desc": "📖 Gravity, gravitational force, weight, weightlessness",
    "level18Desc": "📖 Deformation, types of deformation",
    "level19Desc": "📖 Elastic force, Hooke's law F = -kx",
    "level20Desc": "📖 Friction: static, sliding, rolling",
    "level21Desc": "📖 Adding forces, net force",
    "level22Desc": "📖 Molecular structure of solids, liquids, gases",
    "level23Desc": "📖 Pressure of solids p = F/S",
    "level24Desc": "📖 Pressure in fluids, Pascal's law",
    "level25Desc": "📖 Communicating vessels, hydrostatic paradox",
    "level26Desc": "📖 Hydraulic machine, hydraulic press",
    "level27Desc": "📖 Atmospheric pressure, Torricelli experiment, barometer",
    "level28Desc": "📖 Manometers, liquid and mechanical pumps",
    "level29Desc": "📖 Buoyancy, Archimedes' law",
    "level30Desc": "📖 Flotation conditions",
    "level31Desc": "📖 Work A = F·s, power N = A/t",
    "level32Desc": "📖 Kinetic energy E_k = mv²/2",
    "level33Desc": "📖 Potential energy, energy conservation",
    "level34Desc": "📖 Simple machines: lever, block, inclined plane",
    "level35Desc": "📖 Center of mass, suspension method",
    "level36Desc": "📖 Law of moments, lever equilibrium",
    "level37Desc": "📖 Efficiency, inclined plane",
    "level38Desc": "📖 Astronomy, celestial bodies, stars, galaxies",
    "level39Desc": "📖 Solar system, planets, satellites",
    "level40Desc": "📖 Calendar, leap year, astronomical basis"
  },
  "kk": {
    "titleLine2": "ЭНЕРГЕТИКАЛЫҚ ҚАЛҚАН",
    "subtitle": "Физика білімінің күшімен қаланы астероидтардан қорға",
    "level1Name": "🛡 Қауіпсіздік ережелері",
    "level2Name": "§1. Физика — табиғат туралы ғылым",
    "level3Name": "§2. Табиғатты зерттеудің ғылыми әдістері",
    "level4Name": "§3. Физикалық шамалар және оларды өлшеу",
    "level5Name": "§4. Скалярлық және векторлық шамалар",
    "level6Name": "§5. Өлшеулер мен есептеулердің дәлдігі",
    "level7Name": "§6. Механикалық қозғалыс",
    "level8Name": "§7. Траектория. Жол. Орын ауыстыру",
    "level9Name": "§8. Бірқалыпты және бірқалыпсыз қозғалыс",
    "level10Name": "§9. Жылдамдық және орташа жылдамдық",
    "level11Name": "§10. Қозғалыс графиктері",
    "level12Name": "§11. Масса және массаны өлшеу",
    "level13Name": "§12. Денелердің көлемін өлшеу",
    "level14Name": "§13. Заттың тығыздығы",
    "level15Name": "§14. Инерция құбылысы",
    "level16Name": "§15. Күш",
    "level17Name": "§16. Тартылыс құбылысы. Ауырлық күші. Салмақ",
    "level18Name": "§17. Деформация",
    "level19Name": "§18. Серпімділік күші. Гук заңы",
    "level20Name": "§19. Үйкеліс күші",
    "level21Name": "§20. Күштерді қосу",
    "level22Name": "§21. Денелердің молекулалық құрылысы",
    "level23Name": "§22. Қатты денелердің қысымы",
    "level24Name": "§23. Сұйықтар мен газдардағы қысым. Паскаль заңы",
    "level25Name": "§24. Қатынас ыдыстар",
    "level26Name": "§25. Гидравликалық машина",
    "level27Name": "§26. Атмосфералық қысым",
    "level28Name": "§27. Манометрлер. Сорғылар",
    "level29Name": "§28. Кері итеруші күш. Архимед заңы",
    "level30Name": "§29. Денелердің жүзу шарттары",
    "level31Name": "§30. Механикалық жұмыс. Қуат",
    "level32Name": "§31. Кинетикалық энергия",
    "level33Name": "§32. Энергияның айналуы және сақталуы",
    "level34Name": "§33. Қарапайым механизмдер. Иінтірек. Блок",
    "level35Name": "§34. Денелердің масса центрі",
    "level36Name": "§35. Иінтірек тепе-теңдігінің шарты",
    "level37Name": "§36. Пайдалы әсер коэффициенті (ПӘК)",
    "level38Name": "§37. Аспан денелері туралы ғылым",
    "level39Name": "§38. Күн жүйесі",
    "level40Name": "§39. Күнтізбенің негіздері",
    "level41Name": "🔬 Зерт. №1: Кіші денелердің өлшемдері",
    "level42Name": "🔬 Зерт. №2: Физикалық шамаларды өлшеу",
    "level43Name": "🔬 Зерт. №3: Тығыздықты анықтау",
    "level44Name": "🔬 Зерт. №4: Серпімді деформациялар",
    "level45Name": "🔬 Зерт. №5: Үйкеліс күші",
    "level46Name": "🔬 Зерт. №6: Архимед заңы",
    "level47Name": "🔬 Зерт. №7: Денелердің жүзу шарттары",
    "level48Name": "🔬 Зерт. №8: Масса центрі",
    "level49Name": "🔬 Зерт. №9: Иінтірек тепе-теңдігі",
    "level50Name": "🔬 Зерт. №10: Көлбеу жазықтықтың ПӘК-і",
    "levelSafetyDesc": "⚠ Физика кабинетінде қауіпсіздік ережелері (бонус)",
    "level2Desc": "📖 Физика ғылым ретінде. Құбылыстар, денелер, зат",
    "level3Desc": "📖 Бақылау, болжам, тәжірибе, теория",
    "level4Desc": "📖 Физикалық шамалар, өлшеу құралдары, шкала",
    "level5Desc": "📖 Скаляр және векторлық шамалар",
    "level6Desc": "📖 Өлшеу дәлдігі, қателік, бөлу бағасы",
    "level7Desc": "📖 Механикалық қозғалыс, санақ жүйесі",
    "level8Desc": "📖 Траектория, жол, орын ауыстыру",
    "level9Desc": "📖 Бірқалыпты және бірқалыпсыз қозғалыс",
    "level10Desc": "📖 Жылдамдық, орташа жылдамдық, бірліктер",
    "level11Desc": "📖 Жылдамдық пен жол графиктері",
    "level12Desc": "📖 Дене массасы, таразы",
    "level13Desc": "📖 Көлемді өлшеу, дұрыс және бұрыс пішіндер",
    "level14Desc": "📖 Заттың тығыздығы ρ = m/V",
    "level15Desc": "📖 Инерция, инерциалдық санақ жүйелері",
    "level16Desc": "📖 Күш, бірліктері, күштерді кескіндеу",
    "level17Desc": "📖 Ауырлық күші, салмақ, салмақсыздық",
    "level18Desc": "📖 Деформация, деформация түрлері",
    "level19Desc": "📖 Серпімділік күші, Гук заңы F = -kx",
    "level20Desc": "📖 Үйкеліс күші, тыныштық, сырғанау, домалау",
    "level21Desc": "📖 Күштерді қосу, теңәсерлі күш",
    "level22Desc": "📖 Қатты, сұйық, газдардың молекулалық құрылысы",
    "level23Desc": "📖 Қатты денелер қысымы p = F/S",
    "level24Desc": "📖 Сұйықтар мен газдардағы қысым, Паскаль заңы",
    "level25Desc": "📖 Қатынас ыдыстар, гидростатикалық парадокс",
    "level26Desc": "📖 Гидравликалық машина, гидравликалық пресс",
    "level27Desc": "📖 Атмосфералық қысым, Торричелли тәжірибесі",
    "level28Desc": "📖 Манометрлер, сорғылар",
    "level29Desc": "📖 Архимед күші, Архимед заңы",
    "level30Desc": "📖 Денелердің жүзу шарттары",
    "level31Desc": "📖 Механикалық жұмыс A = F·s, қуат N = A/t",
    "level32Desc": "📖 Кинетикалық энергия E_k = mv²/2",
    "level33Desc": "📖 Потенциалдық энергия, энергияның сақталу заңы",
    "level34Desc": "📖 Қарапайым механизмдер: иінтірек, блок, көлбеу",
    "level35Desc": "📖 Массалар центрі, ілу әдісі",
    "level36Desc": "📖 Моменттер ережесі, иінтіректің тепе-теңдігі",
    "level37Desc": "📖 ПӘК, көлбеу жазықтық",
    "level38Desc": "📖 Астрономия, аспан денелері, жұлдыздар",
    "level39Desc": "📖 Күн жүйесі, планеталар, серіктер",
    "level40Desc": "📖 Күнтізбе, кібісе жыл"
  }
};
window.GRADE_LAB_GAMES_CONFIG = {};
