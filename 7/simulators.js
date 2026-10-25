/* ===== Интерактивные полевые симуляторы 7 класса (15 лабораторий, RU / ҚАЗ / EN) ===== */
(function () {
  function curLang() {
    if (typeof I18n !== "undefined" && I18n.currentLang) return I18n.currentLang;
    if (window.PQAccount) return window.PQAccount.getLang();
    return "ru";
  }
  function tr(ru, kk, en) {
    const l = curLang();
    if (l === "kk") return kk;
    if (l === "en") return en;
    return ru;
  }
  function locObj(v) {
    if (!v) return "";
    if (typeof v === "string") return v;
    const l = curLang();
    return v[l] || v.ru || v.en || v.kk || "";
  }

  function ensureGrade7SimulatorsDOM() {
    if (!document.getElementById("field-sim-grid")) {
      const sec = document.createElement("section");
      sec.className = "field-sim-section";
      sec.id = "field-simulations-section";
      sec.setAttribute("aria-labelledby", "field-sim-title");
      sec.innerHTML = `
        <div class="sim-section-heading">
          <div>
            <span class="sim-kicker" id="field-sim-kicker"></span>
            <h2 id="field-sim-title"></h2>
            <p id="field-sim-sub"></p>
          </div>
          <div class="sim-key-progress" id="sim-key-progress"></div>
        </div>
        <div class="field-sim-grid" id="field-sim-grid"></div>
        <div class="sim-story-log" id="sim-story-log" aria-live="polite"></div>
      `;
      const levelsPanel = document.getElementById("levels-panel")
          || document.getElementById("levels-tab-panel")
          || document.getElementById("level-select-screen");
      const backBtn = document.getElementById("btn-back-to-menu");
      if (levelsPanel) levelsPanel.appendChild(sec);
      else if (backBtn && backBtn.parentNode) backBtn.parentNode.insertBefore(sec, backBtn);
      else document.body.appendChild(sec);
    }
    if (!document.getElementById("field-sim-modal")) {
      const modal = document.createElement("div");
      modal.className = "field-sim-modal";
      modal.id = "field-sim-modal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-labelledby", "field-sim-title-modal");
      modal.setAttribute("aria-hidden", "true");
      modal.innerHTML = `
        <div class="field-sim-panel">
          <button id="field-sim-close" class="field-sim-close" type="button" aria-label="Close">✕</button>
          <div class="sim-kicker" id="field-sim-modal-kicker"></div>
          <h2 id="field-sim-title-modal"></h2>
          <p id="field-sim-story"></p>
          <div id="field-sim-lab"></div>
          <div class="field-sim-result" id="field-sim-result" aria-live="polite"></div>
          <div class="field-sim-actions">
            <button class="btn btn-secondary" id="field-sim-run" type="button"></button>
            <button class="btn btn-primary" id="field-sim-check" type="button"></button>
            <button class="btn btn-secondary" id="field-sim-next" type="button" style="display:none"></button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    const sec = document.getElementById("field-simulations-section");
    if (sec) sec.style.display = "";
  }

  ensureGrade7SimulatorsDOM();

  const $ = id => document.getElementById(id);
  const KEY = "pq7_field_trials_v1";

  const missions = [
    {
      id: "p3_units", para: "§ 3", icon: "📏", control: "units",
      title: { ru: "Калибровка модуля", kk: "Модульді калибрлеу", en: "Module Calibration" },
      chapter: { ru: "Глава 1 · Единицы СИ", kk: "1-тарау · ХБЖ бірліктері", en: "Chapter 1 · SI Units" },
      story: {
        ru: "Квант: датчик длины спутал сантиметры и метры. Переведи измерение детали из сантиметров в метры и проверь масштаб корпуса.",
        kk: "Квант: ұзындық датчигі сантиметр мен метрді шатастырды. Бөлшек өлшемін сантиметрден метрге ауыстырып, корпус масштабын тексер.",
        en: "KVANT: the length sensor confused centimeters and meters. Convert the part measurement from cm to m and verify hull scale."
      },
      goal: {
        ru: "Настрой деталь на 40–50 см и подтверди перевод в метры с точностью до 0,01 м.",
        kk: "Бөлшекті 40–50 см-ге қойып, метрге ауыстыруды 0,01 м дәлдікпен раста.",
        en: "Set the part to 40–50 cm and confirm conversion to meters within 0.01 m."
      },
      tip: {
        ru: "Попробуй 45 см и запиши результат в метрах.",
        kk: "45 см мәнін қойып, нәтижені метрмен жаз.",
        en: "Try 45 cm and enter the result in meters."
      }
    },
    {
      id: "p5_measure", para: "§ 5", icon: "📐", control: "lab_measure",
      title: { ru: "Метрологический пост", kk: "Метрологиялық бекет", en: "Metrology Post" },
      chapter: { ru: "Лаборатория · Точность измерений", kk: "Зертхана · Өлшеу дәлдігі", en: "Lab · Measurement Accuracy" },
      story: {
        ru: "Лазерный дальномер потерял нулевую отметку. Выставь измерительную метку на шкале, сними показание и запиши его в журнал.",
        kk: "Лазерлік қашықтық өлшегіш нөлдік белгісінен айырылды. Өлшеу белгісін шкалаға қойып, көрсеткішті алып, журналға жаз.",
        en: "The laser rangefinder lost its zero mark. Position the marker on the scale, take a reading, and log it."
      },
      goal: {
        ru: "Измерь контрольный отрезок длиной от 40 до 60 см, используя деления шкалы.",
        kk: "Шкала бөліктерін пайдаланып, 40-тан 60 см-ге дейінгі бақылау кесіндісін өлше.",
        en: "Measure a reference segment between 40 and 60 cm using the scale divisions."
      },
      tip: {
        ru: "Нажми на шкалу, чтобы передвинуть метку; потом проведи измерение.",
        kk: "Белгіні жылжыту үшін шкалаға бас, сосын көрсеткішті ал.",
        en: "Click the scale to move the marker, then take the reading."
      }
    },
    {
      id: "p7_reference", para: "§ 7", icon: "🚌", control: "lab_relative",
      title: { ru: "Дождь в движущемся автобусе", kk: "Қозғалыстағы автобустағы жаңбыр", en: "Rain in a Moving Bus" },
      chapter: { ru: "Лаборатория · Относительность движения", kk: "Зертхана · Қозғалыстың салыстырмалылығы", en: "Lab · Relative Motion" },
      story: {
        ru: "Квант видит дождь из окна автобуса. Сравни показания наблюдателя на дороге и пассажира: один и тот же дождь движется относительно них по-разному.",
        kk: "Квант автобус терезесінен жаңбырды көріп тұр. Жолдағы бақылаушы мен жолаушының көрсеткіштерін салыстыр: бір жаңбыр оларға қатысты әртүрлі қозғалады.",
        en: "KVANT watches rain from a bus window. Compare the roadside observer and the passenger: the same raindrop moves differently relative to each."
      },
      goal: {
        ru: "Проведи наблюдение из двух систем отсчёта и сравни перемещение капли за 5 секунд.",
        kk: "Екі санақ жүйесінен бақылап, тамшының 5 секундтағы орын ауыстыруын салыстыр.",
        en: "Observe from both reference frames and compare the drop's displacement over 5 seconds."
      },
      tip: {
        ru: "Выбери наблюдателя, нажми «Записать 5 секунд», затем повтори для второго.",
        kk: "Бақылаушыны таңдап, «5 секундты жазу» түймесін бас, сосын екіншісі үшін қайтала.",
        en: "Select an observer, press 'Record 5 seconds', then repeat for the second observer."
      }
    },
    {
      id: "p8_motion", para: "§ 8–9", icon: "🛰️", control: "lab_motion",
      title: { ru: "Навигация по траектории", kk: "Траектория бойынша навигация", en: "Trajectory Navigation" },
      chapter: { ru: "Глава 2 · Путь и скорость", kk: "2-тарау · Жол және жылдамдық", en: "Chapter 2 · Distance & Speed" },
      story: {
        ru: "Зонд потерял курс. Настрой путь и время перелёта, чтобы определить среднюю скорость и передать координаты спасателям.",
        kk: "Зонд бағытын жоғалтты. Орташа жылдамдықты анықтап, құтқарушыларға координаттарды беру үшін жол мен ұшу уақытын орнат.",
        en: "A probe lost its bearing. Set route distance and step time to determine average speed and transmit rescue coordinates."
      },
      goal: {
        ru: "Выбери маршрут 30, 60 или 90 м и доведи зонд до маяка со средней скоростью 2–5 м/с.",
        kk: "30, 60 немесе 90 м маршрутты таңдап, зондты маякқа 2–5 м/с орташа жылдамдықпен жеткіз.",
        en: "Choose a 30, 60, or 90 m route and guide the probe to the beacon at an average speed of 2–5 m/s."
      },
      tip: {
        ru: "Выбери скорость 4 м/с и продвигай симуляцию шагами по 5 секунд.",
        kk: "4 м/с жылдамдықты таңдап, симуляцияны 5 секундтық қадамдармен ілгерілет.",
        en: "Pick 4 m/s and advance the simulation in 5-second steps."
      }
    },
    {
      id: "p13_density", para: "§ 13", icon: "⚖️", control: "lab_density",
      title: { ru: "Неизвестный сплав", kk: "Белгісіз қорытпа", en: "Unknown Alloy" },
      chapter: { ru: "Глава 3 · Плотность вещества", kk: "3-тарау · Заттың тығыздығы", en: "Chapter 3 · Density of Matter" },
      story: {
        ru: "Найден металлический фрагмент. Измерь его массу и объём, затем определи, подходит ли сплав для корпуса.",
        kk: "Металл сынығы табылды. Оның массасы мен көлемін өлшеп, қорытпа корпусқа жарамды екенін анықта.",
        en: "A metal fragment was recovered. Measure its mass and displaced volume to check if the alloy fits our hull."
      },
      goal: {
        ru: "По измерениям найди плотность сплава 2500–3000 кг/м³.",
        kk: "Өлшеулер бойынша қорытпа тығыздығын 2500–3000 кг/м³ аралығында тап.",
        en: "Determine an alloy density between 2500 and 3000 kg/m³."
      },
      tip: {
        ru: "Сначала взвесь образец, затем измерь вытесненный им объём воды.",
        kk: "Алдымен үлгіні таразыда өлшеп, сосын ығыстырылған су көлемін анықта.",
        en: "Weigh the sample first, then immerse it in the beaker to read displaced volume."
      }
    },
    {
      id: "p15_weight", para: "§ 15", icon: "🪐", control: "lab_gravity",
      title: { ru: "Весовой пост на Луне", kk: "Айдағы салмақ бекеті", en: "Lunar Weighing Post" },
      chapter: { ru: "Лаборатория · Масса и сила тяжести", kk: "Зертхана · Масса және ауырлық күші", en: "Lab · Mass & Gravity" },
      story: {
        ru: "Груз нужно доставить с Земли на Луну. Измерь его вес на обеих планетах и отдели постоянную массу от меняющейся силы тяжести.",
        kk: "Жүкті Жерден Айға жеткізу керек. Екі аспан денесінде де оның салмағын өлшеп, тұрақты массаны өзгеретін ауырлық күшінен ажырат.",
        en: "Cargo travels from Earth to the Moon. Measure its weight on both worlds and distinguish invariant mass from changing gravity."
      },
      goal: {
        ru: "Сравни вес одного и того же груза на Земле и Луне; затем повтори с другой массой.",
        kk: "Бір жүктің Жердегі және Айдағы салмағын салыстыр; сосын басқа массамен қайтала.",
        en: "Compare the weight of the same load on Earth and the Moon, then test another mass."
      },
      tip: {
        ru: "Выбери небесное тело и нажми «Взвесить» на каждом.",
        kk: "Аспан денесін таңдап, әрқайсысында «Өлшеу» түймесін бас.",
        en: "Select Earth and Moon in turn and press 'Weigh' on each."
      }
    },
    {
      id: "p19_friction", para: "§ 19", icon: "🛞", control: "friction",
      title: { ru: "Тормозной стенд", kk: "Тежегіш стенді", en: "Braking Test Bench" },
      chapter: { ru: "Глава 4 · Сила трения", kk: "4-тарау · Үйкеліс күші", en: "Chapter 4 · Friction Force" },
      story: {
        ru: "Сервисный робот скользит по настилу. Исследуй материал и нагрузку, чтобы получить нужную силу сцепления.",
        kk: "Сервистік робот төсеніште сырғанап барады. Қажетті ілінісу күшін алу үшін материал мен жүктемені зертте.",
        en: "A service robot slips on the deck. Test surface material and normal load to achieve safe traction."
      },
      goal: {
        ru: "Настрой силу трения в диапазоне 10–30 Н по формуле Fтр = μN.",
        kk: "Үйкеліс күшін Fүйк = μN формуласы бойынша 10–30 Н аралығында орнат.",
        en: "Tune friction force within 10–30 N using F_fr = μN."
      },
      tip: {
        ru: "Сначала измени только поверхность, потом только силу прижатия.",
        kk: "Алдымен тек бетті, сосын тек қысу күшін өзгерт.",
        en: "Vary only the surface first, then vary normal force N."
      }
    },
    {
      id: "p22_pressure", para: "§ 22", icon: "🧱", control: "pressure",
      title: { ru: "Опора защитного купола", kk: "Қорғаныс күмбезінің тірегі", en: "Shield Dome Support" },
      chapter: { ru: "Глава 5 · Давление твёрдых тел", kk: "5-тарау · Қатты денелердің қысымы", en: "Chapter 5 · Pressure of Solids" },
      story: {
        ru: "Опора купола давит на хрупкую платформу. Измени площадь опоры и силу, чтобы удержать платформу в безопасном диапазоне давления.",
        kk: "Күмбез тірегі нәзік платформаға қысым түсіреді. Платформаны қауіпсіз қысым диапазонында ұстау үшін тірек ауданы мен күшті ретте.",
        en: "A dome pillar presses on a delicate platform. Adjust contact area and load force to keep pressure safe."
      },
      goal: {
        ru: "Подбери давление 150–350 кПа, используя p = F/S.",
        kk: "p = F/S формуласын қолданып, 150–350 кПа қысымды таңда.",
        en: "Achieve a pressure between 150 and 350 kPa via p = F/S."
      },
      tip: {
        ru: "Расширяй площадь опоры: одинаковая сила создаёт меньшее давление.",
        kk: "Тірек ауданын ұлғайт: бірдей күш азырақ қысым түсіреді.",
        en: "Widen the support area: the same force exerts lower pressure."
      }
    },
    {
      id: "p24_liquid", para: "§ 24", icon: "🌡️", control: "lab_liquid",
      title: { ru: "Глубинный датчик", kk: "Тереңдік датчигі", en: "Deepwater Sensor" },
      chapter: { ru: "Лаборатория · Давление жидкости", kk: "Зертхана · Сұйықтық қысымы", en: "Lab · Hydrostatic Pressure" },
      story: {
        ru: "Датчик в резервуаре подаёт тревогу. Опусти его на разную глубину и проследи, как меняется давление жидкости.",
        kk: "Резервуардағы датчик дабыл қағуда. Оны әртүрлі тереңдікке түсіріп, сұйықтық қысымының өзгеруін бақыла.",
        en: "A tank sensor raised an alert. Lower the probe to various depths and liquids to trace hydrostatic pressure."
      },
      goal: {
        ru: "Достигни давления 1,9–4,0 кПа и сравни показания на разных глубинах или в разных жидкостях.",
        kk: "1,9–4,0 кПа қысымға жетіп, әртүрлі тереңдіктегі немесе сұйықтықтағы көрсеткіштерді салыстыр.",
        en: "Reach 1.9–4.0 kPa and compare readings across depths or fluids."
      },
      tip: {
        ru: "Перемещай датчик шагами по 10 см и нажимай «Снять показание».",
        kk: "Датчикті 10 см қадаммен жылжытып, «Көрсеткішті алу» түймесін бас.",
        en: "Step the probe by 10 cm and click 'Take reading'."
      }
    },
    {
      id: "p25_hydraulic", para: "§ 25", icon: "🦾", control: "hydraulic",
      title: { ru: "Гидравлический подъёмник", kk: "Гидравликалық көтергіш", en: "Hydraulic Lift" },
      chapter: { ru: "Глава 6 · Гидравлическая машина", kk: "6-тарау · Гидравликалық машина", en: "Chapter 6 · Hydraulic Machine" },
      story: {
        ru: "Нужно поднять шлюз тяжёлой брони. Настрой площади поршней и входное усилие — проверь закон Паскаля.",
        kk: "Ауыр броньды шлюзді көтеру керек. Поршень аудандары мен кіріс күшін реттеп, Паскаль заңын тексер.",
        en: "Lift a heavy armored lock gate. Tune piston areas and input force to verify Pascal's principle."
      },
      goal: {
        ru: "Получить выходную силу не меньше 600 Н без превышения входных 150 Н.",
        kk: "Кіріс күшін 150 Н-нан асырмай, кемінде 600 Н шығыс күшін ал.",
        en: "Generate at least 600 N output force without exceeding 150 N input force."
      },
      tip: {
        ru: "Сравни площади поршней; выходная сила растёт вместе с отношением S₂/S₁.",
        kk: "Поршень аудандарын салыстыр; шығыс күш S₂/S₁ қатынасына пропорционал өседі.",
        en: "Compare piston areas: output force scales with the ratio S₂/S₁."
      }
    },
    {
      id: "p26_vessels", para: "§ 26", icon: "🧪", control: "lab_vessels",
      title: { ru: "Станция сообщающихся сосудов", kk: "Қатынас ыдыстар станциясы", en: "Communicating Vessels Station" },
      chapter: { ru: "Лаборатория · Сообщающиеся сосуды", kk: "Зертхана · Қатынас ыдыстар", en: "Lab · Communicating Vessels" },
      story: {
        ru: "Вода проходит по трубам разной формы. Запусти заполнение и сравни уровни: форма колена разная, но равновесные уровни совпадают.",
        kk: "Су әртүрлі пішінді құбырлардан өтеді. Толтыруды іске қосып, деңгейлерді салыстыр: тармақ пішіні әртүрлі болса да, деңгейлер теңеседі.",
        en: "Water fills branches of different widths. Supply water and verify that equilibrium levels match regardless of shape."
      },
      goal: {
        ru: "Подай не менее 3 порций воды и подтверди равенство уровней в обеих ветвях.",
        kk: "Кемінде 3 порция су құйып, екі тармақтағы деңгейлердің теңдігін раста.",
        en: "Supply at least 3 water portions and confirm equal levels in both branches."
      },
      tip: {
        ru: "Нажми «Подать воду» несколько раз, затем «Сравнить уровни».",
        kk: "«Су беру» түймесін бірнеше рет басып, сосын «Деңгейлерді салыстыру» бас.",
        en: "Click 'Supply water' several times, then 'Compare levels'."
      }
    },
    {
      id: "p28_archimedes", para: "§ 28", icon: "🌊", control: "lab_buoyancy",
      title: { ru: "Спасательный буй", kk: "Құтқару қалқымасы", en: "Rescue Buoy" },
      chapter: { ru: "Глава 7 · Закон Архимеда", kk: "7-тарау · Архимед заңы", en: "Chapter 7 · Archimedes' Principle" },
      story: {
        ru: "Контейнер упал в водный отсек. Измени вытесненный объём и массу груза, чтобы буй удерживал контейнер на поверхности.",
        kk: "Контейнер су бөлігіне құлады. Қалқыма контейнерді су бетінде ұстап тұруы үшін ығыстырылған көлем мен жүк массасын ретте.",
        en: "A container fell into the water bay. Adjust displaced volume and cargo mass so the buoy keeps it afloat."
      },
      goal: {
        ru: "Сила Архимеда Fₐ должна быть не меньше веса груза P.",
        kk: "Архимед күші Fₐ жүктің салмағынан P кем болмауы керек.",
        en: "Buoyant force Fₐ must be greater than or equal to cargo weight P."
      },
      tip: {
        ru: "Увеличивай погружённый объём и наблюдай, когда Fₐ превзойдёт P.",
        kk: "Батырылған көлемді ұлғайтып, Fₐ күші P-дан асқан сәтті бақыла.",
        en: "Increase submerged volume until buoyant force Fₐ exceeds cargo weight P."
      }
    },
    {
      id: "p30_power", para: "§ 30", icon: "⚡", control: "power",
      title: { ru: "Турбина станции", kk: "Станция турбинасы", en: "Station Turbine" },
      chapter: { ru: "Глава 8 · Работа и мощность", kk: "8-тарау · Жұмыс және қуат", en: "Chapter 8 · Work & Power" },
      story: {
        ru: "Энергогенератор не набирает мощность. Настрой силу, путь и время хода поршня, чтобы восстановить питание щита.",
        kk: "Энергия генераторы қуат жинамай тұр. Қалқан қорегін қалпына келтіру үшін поршень күшін, жолын және жүріс уақытын ретте.",
        en: "The power generator is underperforming. Tune piston force, stroke length, and time to restore shield power."
      },
      goal: {
        ru: "Выведи мощность в рабочий диапазон 50–120 Вт по формуле P = Fs/t.",
        kk: "P = Fs/t формуласы бойынша қуатты 50–120 Вт жұмыс диапазонына шығар.",
        en: "Bring output power into the 50–120 W range using P = Fs/t."
      },
      tip: {
        ru: "Оставь силу и путь прежними, сократи время — мощность возрастёт.",
        kk: "Күш пен жолды өзгертпей, уақытты қысқарт — қуат артады.",
        en: "Keep force and distance fixed while reducing time — power increases."
      }
    },
    {
      id: "p32_energy", para: "§ 32", icon: "🔋", control: "energy",
      title: { ru: "Капсула кинетической энергии", kk: "Кинетикалық энергия капсуласы", en: "Kinetic Energy Capsule" },
      chapter: { ru: "Глава 9 · Превращение энергии", kk: "9-тарау · Энергияның айналуы", en: "Chapter 9 · Energy Conservation" },
      story: {
        ru: "Капсула падает в энергетическую шахту. Проследи, как потенциальная энергия превращается в кинетическую без потери суммы.",
        kk: "Капсула энергетикалық шахтада құлап келеді. Потенциалдық энергияның жалпы қосындыны жоғалтпай кинетикалық энергияға айналуын бақыла.",
        en: "A capsule drops down the energy shaft. Observe potential energy converting into kinetic energy while total energy stays constant."
      },
      goal: {
        ru: "Проверь капсулу на участке 40%–80% шахты и подтверди сохранение механической энергии.",
        kk: "Шахтаның 40%–80% бөлігінде капсуланы тексеріп, толық механикалық энергияның сақталуын раста.",
        en: "Inspect the capsule between 40% and 80% of the shaft and verify mechanical energy conservation."
      },
      tip: {
        ru: "Проверь капсулу на 40%, 60% и 80% пути и вычисли начальную энергию mgh.",
        kk: "Жолдың 40%, 60% және 80% нүктелерін салыстырып, бастапқы mgh энергиясын есепте.",
        en: "Compare 40%, 60%, and 80% drop fractions and compute initial energy mgh."
      }
    },
    {
      id: "p35_lever", para: "§ 35", icon: "⚙️", control: "lab_lever",
      title: { ru: "Рычаг аварийного шлюза", kk: "Апаттық шлюз иінтірегі", en: "Emergency Airlock Lever" },
      chapter: { ru: "Глава 10 · Равновесие рычага", kk: "10-тарау · Иінтіректің тепе-теңдігі", en: "Chapter 10 · Lever Equilibrium" },
      story: {
        ru: "Последний фрагмент ключа заперт под тяжёлой плитой. Найди положение опоры, при котором моменты сил уравновешены.",
        kk: "Соңғы кілт фрагменті ауыр плитаның астында жатыр. Күш моменттері теңгерілетін тірек орнын тап.",
        en: "The final key fragment lies beneath a heavy slab. Position the fulcrum so the torques balance."
      },
      goal: {
        ru: "Добейся равновесия F₁·l₁ ≈ F₂·l₂ с расхождением не более 10%.",
        kk: "F₁·l₁ ≈ F₂·l₂ тепе-теңдігіне 10%-дан аспайтын айырмамен жет.",
        en: "Balance F₁·l₁ ≈ F₂·l₂ within 10% discrepancy."
      },
      tip: {
        ru: "Для сил 40 Н и 100 Н поставь опору ближе к тяжёлому грузу (около 71 см).",
        kk: "40 Н және 100 Н күштері үшін тіректі ауыр жүкке жақынырақ (шамамен 71 см) қой.",
        en: "For 40 N and 100 N forces, place the fulcrum closer to the heavier load (around 71 cm)."
      }
    }
  ];

  const challenges = {
    p3_units: {
      q: { ru: "Если перевести сантиметры в метры, что нужно сделать с числом?", kk: "Сантиметрді метрге айналдыру үшін санды не істеу керек?", en: "To convert centimeters into meters, what do you do to the number?" },
      opts: { ru: ["Разделить на 100", "Умножить на 100", "Вычесть 100"], kk: ["100-ге бөлу", "100-ге көбейту", "100-ді азайту"], en: ["Divide by 100", "Multiply by 100", "Subtract 100"] },
      correct: 0,
      calc: { ru: "Переведи выбранную длину детали из см в метры.", kk: "Таңдалған бөлшек ұзындығын см-ден метрге айналдыр.", en: "Convert your selected part length from cm into meters." },
      unit: { ru: "м", kk: "м", en: "m" }, tol: 0.01
    },
    p5_measure: {
      q: { ru: "Какое измерение надёжнее всего показывает шкала?", kk: "Шкала бойынша қандай өлшеу ең сенімді болады?", en: "Which scale reading is the most reliable?" },
      opts: { ru: ["Положение метки совпало с делением", "Число выбрано до измерения", "Длина не зависит от нулевой отметки"], kk: ["Белгі бөлікке дәл сәйкес келді", "Сан өлшеуден бұрын таңдалды", "Ұзындық нөлдік белгіге тәуелді емес"], en: ["The marker aligns cleanly with a scale division", "A number guessed before measuring", "Length ignores the zero mark"] },
      correct: 0,
      calc: { ru: "Введи измеренную длину стержня.", kk: "Өлшенген өзек ұзындығын енгіз.", en: "Enter the measured rod length." },
      unit: { ru: "см", kk: "см", en: "cm" }, tol: 1
    },
    p7_reference: {
      q: { ru: "Капля движется 6 м/с, автобус — 5 м/с в том же направлении. Скорость капли относительно пассажира…", kk: "Тамшы 6 м/с, автобус сол бағытта 5 м/с қозғалады. Тамшының жолаушыға қатысты жылдамдығы…", en: "A drop moves at 6 m/s and a bus at 5 m/s in the same direction. Drop speed relative to the passenger is…" },
      opts: { ru: ["11 м/с", "1 м/с", "6 м/с"], kk: ["11 м/с", "1 м/с", "6 м/с"], en: ["11 m/s", "1 m/s", "6 m/s"] },
      correct: 1,
      calc: { ru: "Введи перемещение капли относительно автобуса за 5 с (м).", kk: "Тамшының автобусқа қатысты 5 с ішіндегі орын ауыстыруын енгіз (м).", en: "Enter the drop's displacement relative to the bus in 5 s (m)." },
      unit: { ru: "м", kk: "м", en: "m" }, tol: 0.2
    },
    p8_motion: {
      q: { ru: "При неизменном пути, если скорость увеличить вдвое, время движения…", kk: "Жол өзгермесе, жылдамдықты екі есе арттырғанда қозғалыс уақыты…", en: "For a fixed distance, doubling the speed causes travel time to…" },
      opts: { ru: ["Уменьшится вдвое", "Увеличится вдвое", "Не изменится"], kk: ["Екі есе азаяды", "Екі есе артады", "Өзгермейді"], en: ["Halve", "Double", "Stay unchanged"] },
      correct: 0,
      calc: { ru: "Рассчитай среднюю скорость зонда по журналу.", kk: "Журнал бойынша зондтың орташа жылдамдығын есепте.", en: "Calculate the probe's average speed from the log." },
      unit: { ru: "м/с", kk: "м/с", en: "m/s" }, tol: 0.1
    },
    p13_density: {
      q: { ru: "Для одного и того же материала, если масса и объём увеличатся одинаково, плотность…", kk: "Бір материал үшін масса мен көлем бірдей есе артса, тығыздық…", en: "For a uniform material, if both mass and volume double, its density…" },
      opts: { ru: ["Останется прежней", "Увеличится вдвое", "Уменьшится вдвое"], kk: ["Өзгермейді", "Екі есе артады", "Екі есе азаяды"], en: ["Remains the same", "Doubles", "Halves"] },
      correct: 0,
      calc: { ru: "Вычисли плотность выбранного сплава по массе и объёму.", kk: "Масса мен көлем бойынша қорытпа тығыздығын есепте.", en: "Compute the alloy's density from mass and displaced volume." },
      unit: { ru: "кг/м³", kk: "кг/м³", en: "kg/m³" }, tol: 5
    },
    p15_weight: {
      q: { ru: "При перевозке груза с Земли на Луну какая величина остаётся неизменной?", kk: "Жүкті Жерден Айға жеткізгенде қай шама өзгеріссіз қалады?", en: "When transporting cargo from Earth to the Moon, which quantity stays invariant?" },
      opts: { ru: ["Масса", "Вес", "Сила тяжести"], kk: ["Масса", "Салмақ", "Ауырлық күші"], en: ["Mass", "Weight", "Gravitational force"] },
      correct: 0,
      calc: { ru: "Вычисли разность веса на Земле и на Луне для выбранной массы.", kk: "Таңдалған масса үшін Жер мен Айдағы салмақ айырмасын есепте.", en: "Calculate the weight difference between Earth and Moon for your chosen mass." },
      unit: { ru: "Н", kk: "Н", en: "N" }, tol: 0.25
    },
    p19_friction: {
      q: { ru: "При одинаковой силе прижатия более шероховатая поверхность создаёт…", kk: "Бірдей қысу күшінде кедір-бұдыр бет әдетте…", en: "At the same normal load, a rougher surface produces…" },
      opts: { ru: ["Большую силу трения", "Меньшую силу трения", "Такую же силу трения"], kk: ["Үлкен үйкеліс күшін тудырады", "Кіші үйкеліс күшін тудырады", "Дәл сондай үйкеліс күшін тудырады"], en: ["Greater friction force", "Smaller friction force", "Identical friction force"] },
      correct: 0,
      calc: { ru: "Вычисли силу трения Fтр = μN для текущих параметров.", kk: "Ағымдағы параметрлер үшін Fүйк = μN үйкеліс күшін есепте.", en: "Compute friction force F_fr = μN for the current setup." },
      unit: { ru: "Н", kk: "Н", en: "N" }, tol: 0.25
    },
    p22_pressure: {
      q: { ru: "Если площадь опоры увеличить в 4 раза при той же силе, давление…", kk: "Күш өзгермей, тірек ауданы 4 есе артса, қысым…", en: "If contact area increases 4-fold under the same force, pressure…" },
      opts: { ru: ["Уменьшится в 4 раза", "Увеличится в 4 раза", "Не изменится"], kk: ["4 есе азаяды", "4 есе артады", "Өзгермейді"], en: ["Decreases 4-fold", "Increases 4-fold", "Does not change"] },
      correct: 0,
      calc: { ru: "Рассчитай давление на платформу по последнему опыту.", kk: "Соңғы тәжірибе бойынша платформаға түсетін қысымды есепте.", en: "Calculate platform pressure from your latest setup." },
      unit: { ru: "кПа", kk: "кПа", en: "kPa" }, tol: 1.5
    },
    p24_liquid: {
      q: { ru: "При погружении датчика глубже гидростатическое давление жидкости…", kk: "Датчикті тереңірек батырғанда сұйықтықтың гидростатикалық қысымы…", en: "As the sensor goes deeper, hydrostatic pressure…" },
      opts: { ru: ["Возрастает", "Уменьшается", "Не меняется"], kk: ["Артады", "Азаяды", "Өзгермейді"], en: ["Increases", "Decreases", "Stays constant"] },
      correct: 0,
      calc: { ru: "Рассчитай давление жидкости p = ρgh на текущей глубине.", kk: "Ағымдағы тереңдіктегі p = ρgh сұйықтық қысымын есепте.", en: "Compute liquid pressure p = ρgh at the current depth." },
      unit: { ru: "кПа", kk: "кПа", en: "kPa" }, tol: 0.15
    },
    p25_hydraulic: {
      q: { ru: "В гидравлическом прессе выходная сила растёт, если…", kk: "Гидравликалық престе шығыс күш артады, егер…", en: "In a hydraulic press, output force increases when…" },
      opts: { ru: ["Площадь большого поршня больше малого", "Оба поршня одинаковой площади", "Уменьшить входную силу"], kk: ["Үлкен поршень ауданы кішісінен көп болса", "Екі поршень ауданы бірдей болса", "Кіріс күшін азайтса"], en: ["The large piston has greater area than the small piston", "Both pistons have equal area", "Input force is reduced"] },
      correct: 0,
      calc: { ru: "Рассчитай выходную силу F₂ по последнему опыту.", kk: "Соңғы тәжірибе бойынша F₂ шығыс күшін есепте.", en: "Calculate output force F₂ for the current setup." },
      unit: { ru: "Н", kk: "Н", en: "N" }, tol: 1.5
    },
    p26_vessels: {
      q: { ru: "В сообщающихся сосудах с однородной жидкостью в равновесии уровни…", kk: "Біртекті сұйықтығы бар қатынас ыдыстарда тепе-теңдікте деңгейлер…", en: "In communicating vessels containing one homogeneous liquid at rest, levels…" },
      opts: { ru: ["Одинаковы в обеих ветвях", "Выше в широкой ветви", "Выше в узкой ветви"], kk: ["Екі тармақта да бірдей", "Кең тармақта жоғары", "Тар тармақта жоғары"], en: ["Are equal in both branches", "Are higher in the wide branch", "Are higher in the narrow branch"] },
      correct: 0,
      calc: { ru: "Запиши высоту установившегося уровня воды.", kk: "Тұрақталған су деңгейінің биіктігін жаз.", en: "Enter the steady water level height." },
      unit: { ru: "см", kk: "см", en: "cm" }, tol: 0.2
    },
    p28_archimedes: {
      q: { ru: "При увеличении объёма погружённой части тела выталкивающая сила…", kk: "Дененің суға батқан бөлігінің көлемі артқанда Архимед күші…", en: "Increasing the submerged volume of a body causes buoyant force to…" },
      opts: { ru: ["Возрастёт", "Уменьшится", "Не изменится"], kk: ["Артады", "Азаяды", "Өзгермейді"], en: ["Increase", "Decrease", "Stay unchanged"] },
      correct: 0,
      calc: { ru: "Рассчитай силу Архимеда Fₐ по последнему измерению.", kk: "Соңғы өлшеу бойынша Fₐ Архимед күшін есепте.", en: "Compute buoyant force Fₐ for the current volume." },
      unit: { ru: "Н", kk: "Н", en: "N" }, tol: 0.15
    },
    p30_power: {
      q: { ru: "Если совершить ту же работу за меньшее время, мощность…", kk: "Дәл сол жұмысты азырақ уақытта орындаса, қуат…", en: "Performing the same work in shorter time makes power…" },
      opts: { ru: ["Возрастёт", "Уменьшится", "Не изменится"], kk: ["Артады", "Азаяды", "Өзгермейді"], en: ["Increase", "Decrease", "Remain unchanged"] },
      correct: 0,
      calc: { ru: "Рассчитай мощность турбины P = Fs/t по последнему опыту.", kk: "Соңғы тәжірибе бойынша P = Fs/t турбина қуатын есепте.", en: "Calculate turbine power P = Fs/t for the current setup." },
      unit: { ru: "Вт", kk: "Вт", en: "W" }, tol: 0.6
    },
    p32_energy: {
      q: { ru: "При свободном падении капсулы без трения механическая энергия…", kk: "Үйкеліссіз еркін құлағанда капсуланың механикалық энергиясы…", en: "During frictionless free fall of the capsule, mechanical energy…" },
      opts: { ru: ["Переходит из потенциальной в кинетическую, сумма сохраняется", "Полностью исчезает", "Только потенциальная растёт"], kk: ["Потенциалдықтан кинетикалыққа айналады, қосынды сақталады", "Толығымен жоғалады", "Тек потенциалдық энергия өседі"], en: ["Converts from potential to kinetic while total stays constant", "Disappears completely", "Only potential energy grows"] },
      correct: 0,
      calc: { ru: "Рассчитай полную (начальную) энергию капсулы E = mgh (g ≈ 9,81 м/с²).", kk: "Капсуланың толық (бастапқы) энергиясын есепте: E = mgh (g ≈ 9,81 м/с²).", en: "Calculate total initial energy E = mgh (g ≈ 9.81 m/s²)." },
      unit: { ru: "Дж", kk: "Дж", en: "J" }, tol: 1.0
    },
    p35_lever: {
      q: { ru: "Рычаг находится в равновесии, когда…", kk: "Иінтірек тепе-теңдікте болады, егер…", en: "A lever is in rotational equilibrium when…" },
      opts: { ru: ["Моменты сил относительно опоры равны", "Силы обязательно равны", "Плечи обязательно равны"], kk: ["Тірекке қатысты күш моменттері тең болса", "Күштер міндетті түрде тең болса", "Иіндер міндетті түрде тең болса"], en: ["Torques (moments of force) about the fulcrum are equal", "Forces are strictly equal", "Lever arms are strictly equal"] },
      correct: 0,
      calc: { ru: "Введи процент расхождения моментов в последнем опыте.", kk: "Соңғы тәжірибедегі моменттер айырмасының пайызын енгіз.", en: "Enter the torque percentage discrepancy from your latest setup." },
      unit: { ru: "%", kk: "%", en: "%" }, tol: 1.2
    }
  };

  const FLUID_NAMES = {
    oil: { ru: "Масло", kk: "Май", en: "Oil", rho: 800 },
    water: { ru: "Вода", kk: "Су", en: "Water", rho: 1000 },
    brine: { ru: "Рассол", kk: "Тұзды ерітінді", en: "Brine", rho: 1200 }
  };

  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (_) { return {}; } };
  let state = read(), active = null, lastResult = null, experimentReady = false, trialLog = [], apparatus = {};
  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
  function unlocked(i) { return i >= 0 && i < missions.length; }

  function refreshStaticHeadings() {
    if ($("field-sim-kicker")) $("field-sim-kicker").textContent = tr("СЮЖЕТНЫЕ ПОЛЕВЫЕ ИСПЫТАНИЯ", "СЮЖЕТТІК ДАЛАЛЫҚ СЫНАҚТАР", "STORY FIELD TRIALS");
    if ($("field-sim-title")) $("field-sim-title").textContent = tr("🧪 Симуляторы экспедиции", "🧪 Экспедиция симуляторлары", "🧪 Expedition Simulators");
    if ($("field-sim-sub")) $("field-sim-sub").textContent = tr(
      "15 интерактивных лабораторий по темам §3–§35 — открыты в любом порядке: меняй параметры, сравнивай результаты и собирай журнал экспедиции.",
      "§3–§35 тақырыптары бойынша 15 интерактивті зертхана — кез келген ретпен ашық: параметрлерді өзгерт, нәтижелерді салыстыр және экспедиция журналын жина.",
      "15 interactive laboratories across §3–§35 — open in any order: adjust parameters, compare trials, and build your expedition log."
    );
    if ($("field-sim-modal-kicker")) $("field-sim-modal-kicker").textContent = tr("ПОЛЕВОЙ ЖУРНАЛ · ФИЗИКА В ДЕЙСТВИИ", "ДАЛАЛЫҚ ЖУРНАЛ · ФИЗИКА ІС ҮСТІНДЕ", "FIELD LOG · PHYSICS IN ACTION");
    if ($("field-sim-run")) $("field-sim-run").textContent = tr("▶ Провести эксперимент", "▶ Тәжірибе жүргізу", "▶ Run Experiment");
    if ($("field-sim-check")) $("field-sim-check").textContent = tr("✅ Проверить решение", "✅ Шешімді тексеру", "✅ Check Solution");
    if ($("field-sim-next")) $("field-sim-next").textContent = tr("Следующая глава →", "Келесі тарау →", "Next Chapter →");
  }

  function renderCards() {
    refreshStaticHeadings();
    const host = $("field-sim-grid");
    if (!host) return;
    host.innerHTML = missions.map((m, i) => {
      const done = !!state[m.id], open = unlocked(i);
      const statusSmall = done
        ? tr("Фрагмент ключа найден · повторить опыт", "Кілт фрагменті табылды · тәжірибені қайталау", "Key fragment found · repeat trial")
        : open ? locObj(m.goal) : tr("🔒 Завершите предыдущее испытание", "🔒 Алдыңғы сынақты аяқтаңыз", "🔒 Complete previous trial");
      const badgeEm = done
        ? tr("✓ Пройдено", "✓ Өтілді", "✓ Completed")
        : open ? tr("Начать симуляцию →", "Симуляцияны бастау →", "Start simulation →") : tr("Закрыто", "Жабық", "Locked");
      return `<button class="field-sim-card ${done ? "is-done" : ""} ${open ? "" : "is-locked"}" type="button" data-sim="${m.id}" ${open ? "" : "disabled"}>
        <span class="field-sim-icon">${m.icon}</span>
        <span class="field-sim-card-chapter">${m.para} · ${locObj(m.chapter)}</span>
        <b>${locObj(m.title)}</b>
        <small>${statusSmall}</small>
        ${open ? `<small class="sim-card-tip">💡 ${locObj(m.tip)}</small>` : ""}
        <em>${badgeEm}</em>
      </button>`;
    }).join("");
    host.querySelectorAll("[data-sim]").forEach(b => b.onclick = () => openMission(b.dataset.sim));
    const count = missions.filter(m => state[m.id]).length;
    if ($("sim-key-progress")) $("sim-key-progress").textContent = tr(
      `🔑 Фрагменты ключа: ${count} / ${missions.length}`,
      `🔑 Кілт фрагменттері: ${count} / ${missions.length}`,
      `🔑 Key fragments: ${count} / ${missions.length}`
    );
    const log = $("sim-story-log");
    if (log) {
      if (count === missions.length) {
        log.textContent = tr(
          "✨ Квант: «Все фрагменты собраны! Энергетический щит Астерии восстановлен — отличная работа, инженер!»",
          "✨ Квант: «Барлық фрагменттер жиналды! Астерияның энергетикалық қалқаны қалпына келді — тамаша жұмыс, инженер!»",
          "✨ KVANT: “All fragments collected! Asteria's energy shield is restored — outstanding work, engineer!”"
        );
      } else if (count > 0) {
        log.textContent = tr(
          `📡 Квант: «Фрагмент ${count} из ${missions.length} получен. Следующая лаборатория готова к запуску».`,
          `📡 Квант: «${missions.length} фрагменттің ${count}-і алынды. Келесі зертхана іске қосуға дайын».`,
          `📡 KVANT: “Fragment ${count} of ${missions.length} secured. Next laboratory ready for launch.”`
        );
      } else {
        log.textContent = tr(
          "📡 Квант: «Станция потеряла калибровку. Пройди полевые испытания, чтобы восстановить щит Астерии».",
          "📡 Квант: «Станция калибрлеуден шықты. Астерия қалқанын қалпына келтіру үшін далалық сынақтардан өт».",
          "📡 KVANT: “Station sensors lost calibration. Complete field trials to restore Dome Asteria.”"
        );
      }
    }
  }

  function initialApparatus(kind) {
    return ({
      lab_motion: { speed: 4, time: 0, distance: 0, targetDistance: 60, stepSeconds: 5 },
      lab_density: { weighed: false, immersed: false, sample: "A", mass: 270, volume: 100 },
      lab_buoyancy: { volume: 200, mass: 600 },
      lab_lever: { pivot: 50 },
      lab_measure: { length: 20, measured: false },
      lab_relative: { frame: "ground", ground: false, train: false },
      lab_gravity: { body: "Earth", massKg: 2, earth: false, moon: false, earthWeight: null, moonWeight: null },
      lab_liquid: { depth: 10, measured: false, fluid: "water", rho: 1000 },
      lab_vessels: { fills: 0, measured: false }
    })[kind] || {};
  }

  function openMission(id) {
    active = missions.find(m => m.id === id);
    if (!active) return;
    refreshStaticHeadings();
    lastResult = null;
    experimentReady = false;
    trialLog = [];
    apparatus = initialApparatus(active.control);
    apparatus.hypothesis = null;
    apparatus.conclusion = "";
    renderActiveMissionModal();
    $("field-sim-modal").classList.add("open");
    $("field-sim-modal").setAttribute("aria-hidden", "false");
  }

  function renderActiveMissionModal() {
    if (!active) return;
    refreshStaticHeadings();
    $("field-sim-title-modal").textContent = locObj(active.title);
    $("field-sim-story").textContent = locObj(active.chapter) + " — " + locObj(active.story);
    $("field-sim-result").textContent = locObj(active.goal) + " " + tr("Подсказка:", "Кеңес:", "Hint:") + " " + locObj(active.tip);
    $("field-sim-next").style.display = "none";
    $("field-sim-check").disabled = true;
    const lightCanvas = (window.PQSimLight7 && window.PQSimLight7.has(active.control))
      ? `<canvas id="pq7-sim-canvas" class="pq7-sim-canvas" width="760" height="260" aria-label="${locObj(active.title)}"></canvas>`
      : "";
    $("field-sim-lab").innerHTML =
      challengePanel(active) +
      '<div class="sim-lab-device' + (lightCanvas ? " has-canvas" : "") + '">' + lightCanvas + controls(active) + "</div>" +
      `<section class="sim-trial-book">
        <h3>${tr("📒 Журнал измерений", "📒 Өлшеу журналы", "📒 Measurement Log")}</h3>
        <p>${tr("Проведи минимум два разных опыта и сравни показания.", "Кемінде екі түрлі тәжірибе жүргізіп, көрсеткіштерді салыстыр.", "Run at least two distinct trials and compare readings.")}</p>
        <div id="sim-trial-rows"><small>${tr("Пока нет измерений — выбери гипотезу и нажми «Провести эксперимент».", "Әзірге өлшеу жоқ — болжамды таңдап, «Тәжірибе жүргізу» түймесін бас.", "No trials yet — pick a hypothesis and click 'Run Experiment'.")}</small></div>
      </section>`;
    if (apparatus.hypothesis !== null) {
      const btn = $("field-sim-lab").querySelector(`[data-hypothesis="${apparatus.hypothesis}"]`);
      if (btn) btn.classList.add("selected");
      if (trialLog.length) $("field-sim-lab").querySelectorAll("[data-hypothesis]").forEach(b => b.disabled = true);
    }
    if (apparatus.conclusion && $("sim-conclusion")) $("sim-conclusion").value = apparatus.conclusion;
    $("field-sim-run").onclick = runExperiment;
    $("field-sim-check").onclick = checkMission;
    $("field-sim-next").onclick = nextMission;
    bindControls();
    renderTrialRows();
    updateChallengeStatus();
    startLightLoop();
  }

  function challengePanel(m) {
    const c = challenges[m.id];
    const opts = c.opts[curLang()] || c.opts.ru;
    return `<section class="sim-challenge">
      <div class="sim-challenge-title">${tr("🧠 До опыта: сформулируй гипотезу", "🧠 Тәжірибеге дейін: болжам жаса", "🧠 Before the Trial: Formulate a Hypothesis")}</div>
      <button type="button" class="sim-protocol-reset" data-sim-action="restart-protocol">${tr("↺ Начать протокол заново", "↺ Хаттаманы қайта бастау", "↺ Restart Protocol")}</button>
      <p>${locObj(c.q)}</p>
      <div class="sim-hypotheses">${opts.map((o, i) => `<button type="button" data-hypothesis="${i}">${String.fromCharCode(65 + i)} · ${o}</button>`).join("")}</div>
      <div class="sim-challenge-status" id="sim-challenge-status"></div>
      <label class="sim-conclusion-label">${tr("Вывод по данным:", "Деректер бойынша қорытынды:", "Data conclusion:")} ${locObj(c.calc)}
        <span><input id="sim-conclusion" type="number" step="any" placeholder="${tr("Твой расчёт", "Сенің есебің", "Your value")}"><b>${locObj(c.unit)}</b></span>
      </label>
      <small>${tr("1) Выбери гипотезу → 2) Проведи 2 разных опыта → 3) Введи расчёт и нажми «Проверить решение».", "1) Болжамды таңда → 2) 2 түрлі тәжірибе жаса → 3) Есепті енгізіп, «Шешімді тексеру» бас.", "1) Pick a hypothesis → 2) Run 2 distinct trials → 3) Enter your calculation and click 'Check Solution'.")}</small>
    </section>`;
  }

  function controls(m) {
    // Ползунков нет: ученик сам поворачивает ручку прибора (верньер).
    // Значение живёт в скрытом input с тем же id — логика модели не меняется.
    const range = (id, label, min, max, value, step = 1) =>
      `<div class="sim-dial-ctrl" data-sim-dial="${id}">
        <span class="sim-dial-label">${label}</span>
        <div class="sim-dial-row">
          ${window.PQWorkbench
            ? window.PQWorkbench.dialHtml(id, { min, max, step, label }, value)
            : `<div class="pqw-knob-dial" data-dial="${id}"></div>`}
          <strong class="range-readout" id="${id}-out">—</strong>
        </div>
        <input id="${id}" data-dial-value="1" type="hidden" min="${min}" max="${max}" step="${step}" value="${value}">
      </div>`;

    if (m.control === "lab_motion") return `<div class="sim-instrument">
      <p>${tr("Выбери скорость, маршрут и шаг времени; продвигай зонд к маяку.", "Жылдамдықты, маршрутты және уақыт қадамын таңдап, зондты маякқа жеткіз.", "Choose speed, route, and time step; advance the probe to the beacon.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="speed" data-value="2">🐢 2 ${tr("м/с", "м/с", "m/s")}</button>
        <button data-sim-action="speed" data-value="4">🚙 4 ${tr("м/с", "м/с", "m/s")}</button>
        <button data-sim-action="speed" data-value="6">🚀 6 ${tr("м/с", "м/с", "m/s")}</button>
        <button data-sim-action="step-size" data-value="1">${tr("Шаг 1 с", "Қадам 1 с", "Step 1 s")}</button>
        <button data-sim-action="step-size" data-value="5">${tr("Шаг 5 с", "Қадам 5 с", "Step 5 s")}</button>
        <button data-sim-action="step-size" data-value="10">${tr("Шаг 10 с", "Қадам 10 с", "Step 10 s")}</button>
        <button data-sim-action="tick">${tr("⏱ Выполнить шаг", "⏱ Қадам жасау", "⏱ Advance Step")}</button>
        <button data-sim-action="route" data-value="30">🎯 30 ${tr("м", "м", "m")}</button>
        <button data-sim-action="route" data-value="60">🎯 60 ${tr("м", "м", "m")}</button>
        <button data-sim-action="route" data-value="90">🎯 90 ${tr("м", "м", "m")}</button>
        <button data-sim-action="reset">${tr("↺ Сброс", "↺ Қайта бастау", "↺ Reset")}</button>
      </div>
      <div class="sim-track"><span id="sim-rover">🛰️</span><i>${tr("Старт", "Старт", "Start")}</i><b id="sim-route-label"></b></div>
      <div class="sim-readouts"><span id="sim-motion-distance"></span><span id="sim-motion-time"></span><span id="sim-motion-speed"></span></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_density") return `<div class="sim-instrument">
      <p>${tr("Выбери образец A, B или C. Взвесь его на весах и погрузи в мензурку.", "A, B немесе C үлгісін таңда. Таразыда өлшеп, мензуркаға батыр.", "Select sample A, B, or C. Weigh it on the scale and immerse it in the beaker.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="sample" data-value="A">${tr("Образец A", "A үлгісі", "Sample A")}</button>
        <button data-sim-action="sample" data-value="B">${tr("Образец B", "B үлгісі", "Sample B")}</button>
        <button data-sim-action="sample" data-value="C">${tr("Образец C", "C үлгісі", "Sample C")}</button>
      </div>
      <div class="lab-bench">
        <div class="lab-device">${tr("⚖️ Весы", "⚖️ Таразы", "⚖️ Scale")}<strong id="density-mass"></strong><button data-sim-action="weigh">${tr("Взвесить образец", "Үлгіні өлшеу", "Weigh Sample")}</button></div>
        <div class="lab-device">${tr("🧪 Мензурка", "🧪 Мензурка", "🧪 Beaker")}<strong id="density-volume"></strong><button data-sim-action="immerse">${tr("Погрузить в воду", "Суға батыру", "Immerse Sample")}</button></div>
        <span id="density-sample">🧱</span>
      </div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_buoyancy") return `<div class="sim-instrument">
      <p>${tr("Изменяй погружённый объём и массу груза кнопками, сравнивая силу Архимеда Fₐ и вес P.", "Батырылған көлем мен жүк массасын өзгертіп, Fₐ Архимед күші мен P салмағын салыстыр.", "Adjust submerged volume and load mass, comparing buoyant force Fₐ against weight P.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="volume" data-value="-100">${tr("⬆ −100 см³", "⬆ −100 см³", "⬆ −100 cm³")}</button>
        <button data-sim-action="volume" data-value="100">${tr("⬇ +100 см³", "⬇ +100 см³", "⬇ +100 cm³")}</button>
        <button data-sim-action="mass" data-value="-100">${tr("−100 г груза", "−100 г жүк", "−100 g load")}</button>
        <button data-sim-action="mass" data-value="100">${tr("+100 г груза", "+100 г жүк", "+100 g load")}</button>
      </div>
      <div class="water-tank interactive-tank"><div class="waterline"></div><div class="pontoon" id="pontoon">🛟 📦</div></div>
      <div class="sim-readouts"><span id="buoy-vol"></span><span id="buoy-mass"></span><span id="buoy-force"></span><span id="buoy-weight"></span></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_lever") return `<div class="sim-instrument">
      <p>${tr("Нажимай на балку рычага, чтобы перемещать опору, и сравнивай моменты сил.", "Тіректі жылжыту үшін иінтірек арқалығын бас және күш моменттерін салыстыр.", "Click along the lever beam to move the fulcrum and balance the torques.")}</p>
      <div class="lever-lab" id="lever-lab">
        <span class="lever-effort">⬇ 40 ${tr("Н", "Н", "N")}</span>
        <span class="lever-load">100 ${tr("Н", "Н", "N")} ⬇</span>
        <div class="lever-plank"></div>
        <div class="lever-pivot" id="lever-pivot"></div>
        <small>0 ${tr("см", "см", "cm")} <b id="lever-position">50 ${tr("см", "см", "cm")}</b> 100 ${tr("см", "см", "cm")}</small>
      </div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_measure") return `<div class="sim-instrument">
      <p>${tr("Нажми на измерительную дорожку (40–60 см), затем нажми «Снять показание».", "Өлшеу жолағына (40–60 см) басып, «Көрсеткішті алу» түймесін бас.", "Click the ruler track (40–60 cm), then press 'Take Reading'.")}</p>
      <div class="ruler-lab" id="ruler-lab">
        <div class="ruler-major">${Array.from({ length: 11 }, (_, i) => `<i>${i * 10}</i>`).join("")}</div>
        <div class="ruler-track" id="ruler-track"><span id="ruler-object"></span><b id="ruler-marker"></b></div>
        <small>0 ${tr("см", "см", "cm")} <strong id="ruler-reading">20 ${tr("см", "см", "cm")}</strong> 100 ${tr("см", "см", "cm")}</small>
      </div>
      <button class="sim-action-button" data-sim-action="measure">${tr("📏 Снять показание", "📏 Көрсеткішті алу", "📏 Take Reading")}</button>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_relative") return `<div class="sim-instrument">
      <p>${tr("Капля летит вдоль дороги со скоростью 6 м/с, автобус — 5 м/с. Запиши наблюдения обоих наблюдателей.", "Тамшы жол бойымен 6 м/с, автобус 5 м/с жылдамдықпен қозғалады. Екі бақылаушының да дерегін жаз.", "Raindrop speed along the road is 6 m/s; bus speed is 5 m/s. Record both observers.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="frame" data-value="ground">${tr("🛣 Наблюдатель на дороге", "🛣 Жолдағы бақылаушы", "🛣 Roadside Observer")}</button>
        <button data-sim-action="frame" data-value="train">${tr("🚌 Пассажир в автобусе", "🚌 Автобустағы жолаушы", "🚌 Bus Passenger")}</button>
        <button data-sim-action="observe">${tr("▶ Записать 5 секунд", "▶ 5 секундты жазу", "▶ Record 5 Seconds")}</button>
      </div>
      <div class="relative-scene"><span>${tr("🌧️ капля", "🌧️ тамшы", "🌧️ drop")}</span><div id="relative-arrow">⇢</div><small id="relative-readout"></small></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_gravity") return `<div class="sim-instrument">
      <p>${tr("Выбери массу груза, взвесь его на Земле и на Луне пружинным динамометром.", "Жүк массасын таңдап, оны Жерде және Айда серіппелі динамометрмен өлше.", "Pick cargo mass and weigh it on both Earth and Moon with the spring scale.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="body" data-value="Earth">${tr("🌍 Земля", "🌍 Жер", "🌍 Earth")}</button>
        <button data-sim-action="body" data-value="Moon">${tr("🌙 Луна", "🌙 Ай", "🌙 Moon")}</button>
        <button data-sim-action="mass-kg" data-value="1">1 ${tr("кг", "кг", "kg")}</button>
        <button data-sim-action="mass-kg" data-value="2">2 ${tr("кг", "кг", "kg")}</button>
        <button data-sim-action="mass-kg" data-value="3">3 ${tr("кг", "кг", "kg")}</button>
        <button data-sim-action="weigh">${tr("⚖️ Взвесить", "⚖️ Өлшеу", "⚖️ Weigh")}</button>
      </div>
      <div class="gravity-scale"><span id="gravity-world">🌍</span><div class="spring">〰️<b id="gravity-pointer">⬇</b>〰️</div><strong id="gravity-reading"></strong><small id="gravity-mass-readout"></small></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_liquid") return `<div class="sim-instrument">
      <p>${tr("Выбери жидкость, опусти датчик на нужную глубину и сними показание манометра.", "Сұйықтықты таңдап, датчикті тереңдікке түсір де, манометр көрсеткішін ал.", "Select a liquid, set probe depth, and read the pressure gauge.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="depth" data-value="-10">${tr("⬆ −10 см", "⬆ −10 см", "⬆ −10 cm")}</button>
        <button data-sim-action="depth" data-value="10">${tr("⬇ +10 см", "⬇ +10 см", "⬇ +10 cm")}</button>
        <button data-sim-action="fluid" data-value="oil">${tr("🟡 Масло", "🟡 Май", "🟡 Oil")}</button>
        <button data-sim-action="fluid" data-value="water">${tr("💧 Вода", "💧 Су", "💧 Water")}</button>
        <button data-sim-action="fluid" data-value="brine">${tr("🧂 Рассол", "🧂 Тұзды ерітінді", "🧂 Brine")}</button>
        <button data-sim-action="measure">${tr("📟 Снять показание", "📟 Көрсеткішті алу", "📟 Take Reading")}</button>
      </div>
      <div id="liquid-fluid-readout" class="sim-readouts"></div>
      <div class="liquid-column"><div class="liquid-water"></div><span id="pressure-probe">📍</span><b id="pressure-depth"></b></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "lab_vessels") return `<div class="sim-instrument">
      <p>${tr("Подавай воду порциями и сравни уровни в широкой и узкой ветвях.", "Суды порциямен құйып, кең және тар тармақтардағы деңгейлерді салыстыр.", "Add water in portions and compare levels in the wide and narrow branches.")}</p>
      <div class="sim-action-row">
        <button data-sim-action="fill">${tr("💧 Подать воду", "💧 Су беру", "💧 Supply Water")}</button>
        <button data-sim-action="measure">${tr("📐 Сравнить уровни", "📐 Деңгейлерді салыстыру", "📐 Compare Levels")}</button>
      </div>
      <div class="communicating-scene"><div class="vessel-wide"><i id="vessel-water-a"></i></div><div class="vessel-link"></div><div class="vessel-narrow"><i id="vessel-water-b"></i></div></div>
      <div class="sim-readouts"><span id="vessel-level-a"></span><span id="vessel-level-b"></span></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "units") return `<div class="sim-instrument">
      ${range("length", tr("Длина детали", "Бөлшек ұзындығы", "Part length"), 20, 80, 65)}
      <div class="sim-visual ruler-visual"><div class="ruler-scale">0 ├────┼────┼────┼────┼────┤ 100 ${tr("см", "см", "cm")}</div><div class="measured-piece" id="measured-piece"></div></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "friction") return `<div class="sim-instrument">
      ${range("normal", tr("Сила прижатия N", "Қысу күші N", "Normal force N"), 10, 100, 50, 5)}
      <label>${tr("Поверхность", "Бет түрі", "Surface")}
        <select id="surface">
          <option value="0.15" selected>${tr("Лёд · μ = 0,15", "Мұз · μ = 0,15", "Ice · μ = 0.15")}</option>
          <option value="0.35">${tr("Металл · μ = 0,35", "Металл · μ = 0,35", "Metal · μ = 0.35")}</option>
          <option value="0.6">${tr("Резина · μ = 0,60", "Резеңке · μ = 0,60", "Rubber · μ = 0.60")}</option>
        </select>
      </label>
      <div class="sim-visual friction-visual">📦 <span id="friction-arrow">⇢</span>▰</div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "pressure") return `<div class="sim-instrument">
      ${range("force", tr("Сила нагрузки F", "Жүктеме күші F", "Load force F"), 100, 600, 600, 10)}
      ${range("area", tr("Площадь опоры S", "Тірек ауданы S", "Support area S"), 2, 20, 2, 1)}
      <div class="sim-visual pressure-visual"><div id="support-block">🏛️</div><div class="pressure-ground"></div></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "hydraulic") return `<div class="sim-instrument">
      ${range("inputForce", tr("Входная сила F₁", "Кіріс күші F₁", "Input force F₁"), 20, 150, 50, 5)}
      ${range("smallArea", tr("Малый поршень S₁", "Кіші поршень S₁", "Small piston S₁"), 1, 10, 5, 1)}
      ${range("largeArea", tr("Большой поршень S₂", "Үлкен поршень S₂", "Large piston S₂"), 5, 40, 10, 1)}
      <div class="sim-visual hydraulic-visual">🫳 <span>🛢️━━━━🛢️</span> 🏋️</div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "power") return `<div class="sim-instrument">
      ${range("workForce", tr("Сила поршня F", "Поршень күші F", "Piston force F"), 50, 250, 250, 10)}
      ${range("workDistance", tr("Путь поршня s", "Поршень жолы s", "Piston stroke s"), 1, 8, 8, 0.5)}
      ${range("workTime", tr("Время хода t", "Жүріс уақыты t", "Stroke time t"), 2, 10, 2, 0.5)}
      <div class="sim-visual thermal-visual">⚙️ <span id="power-turbine">⚡</span></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    if (m.control === "energy") return `<div class="sim-instrument">
      ${range("dropMass", tr("Масса капсулы m", "Капсула массасы m", "Capsule mass m"), 1, 10, 5, 1)}
      ${range("height", tr("Высота шахты h", "Шахта биіктігі h", "Shaft height h"), 1, 10, 8, 0.5)}
      ${range("dropPercent", tr("Пройденная доля падения", "Құлаудың өтілген үлесі", "Completed drop fraction"), 0, 100, 20, 5)}
      <div class="energy-shaft"><span id="falling-capsule">🔋</span></div>
      <div class="sim-output" id="sim-output"></div>
    </div>`;

    return `<div class="sim-instrument"><div class="sim-output" id="sim-output"></div></div>`;
  }

  function bindControls() {
    ["length", "normal", "surface", "force", "area", "inputForce", "smallArea", "largeArea", "workForce", "workDistance", "workTime", "dropMass", "height", "dropPercent"].forEach(id => {
      const el = $(id);
      if (!el) return;
      const refresh = () => { experimentReady = false; $("field-sim-check").disabled = true; updateReadouts(); };
      el.addEventListener("input", refresh);
      el.addEventListener("change", refresh);
    });
    // Верньеры приборов: поворот ручки мышью/пальцем/стрелками
    if (window.PQWorkbench) {
      document.querySelectorAll("#field-sim-lab [data-sim-dial]").forEach(cell => {
        const id = cell.getAttribute("data-sim-dial");
        const hidden = $(id);
        const dial = cell.querySelector("[data-dial]");
        if (!hidden || !dial) return;
        window.PQWorkbench.bindDial(
          dial,
          { min: Number(hidden.min), max: Number(hidden.max), step: Number(hidden.step), label: cell.querySelector(".sim-dial-label")?.textContent || id },
          () => Number(hidden.value),
          (next) => {
            hidden.value = String(next);
            experimentReady = false;
            $("field-sim-check").disabled = true;
            hidden.dispatchEvent(new Event("input", { bubbles: true }));
          }
        );
      });
    }
    const conclusion = $("sim-conclusion");
    conclusion?.addEventListener("input", () => { apparatus.conclusion = conclusion.value; updateChallengeStatus(); });
    const lab = $("field-sim-lab");
    lab.onclick = e => {
      const hypothesis = e.target.closest("[data-hypothesis]");
      if (hypothesis) {
        if (trialLog.length) {
          $("field-sim-result").textContent = tr(
            "Гипотеза уже зафиксирована первым опытом. Нажми «↺ Начать протокол заново», чтобы сменить её.",
            "Болжам бірінші тәжірибемен бекітілген. Өзгерту үшін «↺ Хаттаманы қайта бастау» түймесін бас.",
            "Hypothesis is locked after the first trial. Click '↺ Restart Protocol' to change it."
          );
          return;
        }
        apparatus.hypothesis = Number(hypothesis.dataset.hypothesis);
        lab.querySelectorAll("[data-hypothesis]").forEach(b => b.classList.toggle("selected", b === hypothesis));
        updateChallengeStatus();
        return;
      }
      const action = e.target.closest("[data-sim-action]");
      if (action) {
        const a = action.dataset.simAction, v = action.dataset.value;
        if (a === "restart-protocol") { openMission(active.id); return; }
        if (a === "speed") apparatus.speed = Number(v);
        if (a === "step-size") apparatus.stepSeconds = Number(v);
        if (a === "tick") {
          const stepDistance = Math.min(apparatus.targetDistance - apparatus.distance, apparatus.speed * apparatus.stepSeconds);
          apparatus.distance += stepDistance;
          apparatus.time += apparatus.speed ? stepDistance / apparatus.speed : 0;
        }
        if (a === "route") { apparatus.targetDistance = Number(v); apparatus.distance = 0; apparatus.time = 0; }
        if (a === "reset") Object.assign(apparatus, initialApparatus(active.control));
        if (a === "weigh") {
          if (active.control === "lab_density") apparatus.weighed = true;
          else if (active.control === "lab_gravity") {
            const weight = apparatus.massKg * (apparatus.body === "Earth" ? 9.8 : 1.6);
            if (apparatus.body === "Earth") { apparatus.earth = true; apparatus.earthWeight = weight; }
            else { apparatus.moon = true; apparatus.moonWeight = weight; }
          }
        }
        if (a === "immerse") apparatus.immersed = true;
        if (a === "sample") {
          const samples = { A: [270, 100], B: [540, 200], C: [890, 100] };
          apparatus.sample = v; [apparatus.mass, apparatus.volume] = samples[v];
          apparatus.weighed = false; apparatus.immersed = false;
        }
        if (a === "mass-kg") { apparatus.massKg = Number(v); apparatus.earth = false; apparatus.moon = false; apparatus.earthWeight = null; apparatus.moonWeight = null; }
        if (a === "fluid") { apparatus.fluid = v; apparatus.rho = FLUID_NAMES[v].rho; apparatus.measured = false; }
        if (a === "volume") apparatus.volume = Math.max(100, Math.min(1200, apparatus.volume + Number(v)));
        if (a === "mass") apparatus.mass = Math.max(100, Math.min(1000, apparatus.mass + Number(v)));
        if (a === "frame") apparatus.frame = v;
        if (a === "observe") { if (apparatus.frame === "ground") apparatus.ground = true; if (apparatus.frame === "train") apparatus.train = true; }
        if (a === "body") apparatus.body = v;
        if (a === "depth") { apparatus.depth = Math.max(10, Math.min(50, apparatus.depth + Number(v))); apparatus.measured = false; }
        if (a === "measure") apparatus.measured = true;
        if (a === "fill") { apparatus.fills = Math.min(6, apparatus.fills + 1); apparatus.measured = false; }
        updateReadouts();
        experimentReady = false;
        $("field-sim-check").disabled = true;
        return;
      }
      if (active.control === "lab_lever" && e.target.closest("#lever-lab")) {
        const r = $("lever-lab").getBoundingClientRect();
        apparatus.pivot = Math.max(5, Math.min(95, (e.clientX - r.left) / (r.width || 100) * 100));
        updateReadouts();
        experimentReady = false;
        $("field-sim-check").disabled = true;
      }
      if (active.control === "lab_measure" && e.target.closest(".ruler-track")) {
        const r = $("ruler-track").getBoundingClientRect();
        apparatus.length = Math.max(0, Math.min(100, (e.clientX - r.left) / (r.width || 100) * 100));
        apparatus.measured = false;
        updateReadouts();
        experimentReady = false;
        $("field-sim-check").disabled = true;
      }
    };
    updateReadouts();
  }

  function unitLabel(id) {
    const map = {
      length: tr("см", "см", "cm"),
      normal: tr("Н", "Н", "N"),
      force: tr("Н", "Н", "N"),
      area: tr("см²", "см²", "cm²"),
      inputForce: tr("Н", "Н", "N"),
      smallArea: tr("см²", "см²", "cm²"),
      largeArea: tr("см²", "см²", "cm²"),
      workForce: tr("Н", "Н", "N"),
      workDistance: tr("м", "м", "m"),
      workTime: tr("с", "с", "s"),
      dropMass: tr("кг", "кг", "kg"),
      height: tr("м", "м", "m"),
      dropPercent: "%"
    };
    return map[id] || "";
  }

  function model() {
    const val = id => Number($(id)?.value || 0);
    if (active.control === "lab_motion") {
      const avg = apparatus.time ? apparatus.distance / apparatus.time : 0;
      return {
        value: avg,
        pass: apparatus.distance >= apparatus.targetDistance && avg >= 2 && avg <= 5,
        html: tr(
          `Путь ${apparatus.distance.toFixed(0)} м за ${apparatus.time.toFixed(1)} с → v_ср = ${avg.toFixed(2)} м/с.`,
          `Жол ${apparatus.distance.toFixed(0)} м, уақыт ${apparatus.time.toFixed(1)} с → v_орт = ${avg.toFixed(2)} м/с.`,
          `Distance ${apparatus.distance.toFixed(0)} m in ${apparatus.time.toFixed(1)} s → v_avg = ${avg.toFixed(2)} m/s.`
        )
      };
    }
    if (active.control === "lab_density") {
      const rho = apparatus.mass / apparatus.volume * 1000;
      return {
        value: rho,
        pass: apparatus.weighed && apparatus.immersed && rho >= 2500 && rho <= 3000,
        html: tr(
          `ρ = m/V = ${rho.toFixed(0)} кг/м³.`,
          `ρ = m/V = ${rho.toFixed(0)} кг/м³.`,
          `ρ = m/V = ${rho.toFixed(0)} kg/m³.`
        )
      };
    }
    if (active.control === "lab_buoyancy") {
      const fa = 1000 * 9.81 * apparatus.volume / 1e6;
      const p = apparatus.mass / 1000 * 9.81;
      return {
        value: fa,
        pass: fa >= p,
        html: tr(
          `Fₐ = ${fa.toFixed(2)} Н, вес P = ${p.toFixed(2)} Н.`,
          `Fₐ = ${fa.toFixed(2)} Н, салмақ P = ${p.toFixed(2)} Н.`,
          `Fₐ = ${fa.toFixed(2)} N, weight P = ${p.toFixed(2)} N.`
        )
      };
    }
    if (active.control === "lab_lever") {
      const x = apparatus.pivot, m1 = 40 * x, m2 = 100 * (100 - x);
      const err = Math.abs(m1 - m2) / Math.max(m1, m2) * 100;
      return {
        value: err,
        pass: err <= 10,
        html: tr(
          `M₁ = ${m1.toFixed(0)} Н·см, M₂ = ${m2.toFixed(0)} Н·см, расхождение ${err.toFixed(1)}%.`,
          `M₁ = ${m1.toFixed(0)} Н·см, M₂ = ${m2.toFixed(0)} Н·см, айырма ${err.toFixed(1)}%.`,
          `M₁ = ${m1.toFixed(0)} N·cm, M₂ = ${m2.toFixed(0)} N·cm, discrepancy ${err.toFixed(1)}%.`
        )
      };
    }
    if (active.control === "lab_measure") {
      return {
        value: apparatus.length,
        pass: apparatus.measured && apparatus.length >= 40 && apparatus.length <= 60,
        html: tr(
          `Длина стержня: ${apparatus.length.toFixed(0)} см.`,
          `Өзек ұзындығы: ${apparatus.length.toFixed(0)} см.`,
          `Rod length: ${apparatus.length.toFixed(0)} cm.`
        )
      };
    }
    if (active.control === "lab_relative") {
      return {
        value: 5,
        pass: apparatus.ground && apparatus.train,
        html: tr(
          "За 5 с смещение относительно дороги 30 м, относительно автобуса 5 м.",
          "5 с ішінде жолға қатысты 30 м, автобусқа қатысты 5 м орын ауыстырды.",
          "Over 5 s: 30 m relative to the road, 5 m relative to the bus."
        )
      };
    }
    if (active.control === "lab_gravity") {
      const delta = Math.abs((apparatus.earthWeight || 0) - (apparatus.moonWeight || 0));
      return {
        value: delta,
        pass: apparatus.earth && apparatus.moon,
        html: tr(
          `Разность веса Земля–Луна: ${delta.toFixed(1)} Н.`,
          `Жер мен Айдағы салмақ айырмасы: ${delta.toFixed(1)} Н.`,
          `Earth–Moon weight difference: ${delta.toFixed(1)} N.`
        )
      };
    }
    if (active.control === "lab_liquid") {
      const kpa = apparatus.rho * 9.81 * apparatus.depth / 100 / 1000;
      return {
        value: kpa,
        pass: apparatus.measured && kpa >= 1.9 && kpa <= 4,
        html: tr(
          `p = ρgh = ${kpa.toFixed(2)} кПа.`,
          `p = ρgh = ${kpa.toFixed(2)} кПа.`,
          `p = ρgh = ${kpa.toFixed(2)} kPa.`
        )
      };
    }
    if (active.control === "lab_vessels") {
      const level = apparatus.fills * 2;
      return {
        value: level,
        pass: apparatus.measured && apparatus.fills >= 3,
        html: tr(
          `Установившийся уровень в обеих ветвях: ${level} см.`,
          `Екі тармақтағы тұрақты деңгей: ${level} см.`,
          `Steady level in both branches: ${level} cm.`
        )
      };
    }
    if (active.control === "units") {
      const cm = val("length"), m = cm / 100;
      return { value: m, pass: m >= 0.4 && m <= 0.5, html: `${cm} ÷ 100 = ${m.toFixed(2)} ${tr("м", "м", "m")}` };
    }
    if (active.control === "friction") {
      const f = val("normal") * val("surface");
      return { value: f, pass: f >= 10 && f <= 30, html: `F = μN = ${f.toFixed(1)} ${tr("Н", "Н", "N")}` };
    }
    if (active.control === "pressure") {
      const p = val("force") / (val("area") / 10000) / 1000;
      return { value: p, pass: p >= 150 && p <= 350, html: `p = F/S = ${p.toFixed(0)} ${tr("кПа", "кПа", "kPa")}` };
    }
    if (active.control === "hydraulic") {
      const out = val("inputForce") * val("largeArea") / val("smallArea");
      return { value: out, pass: out >= 600 && val("inputForce") <= 150, html: `F₂ = F₁·S₂/S₁ = ${out.toFixed(0)} ${tr("Н", "Н", "N")}` };
    }
    if (active.control === "power") {
      const power = val("workForce") * val("workDistance") / val("workTime");
      return { value: power, pass: power >= 50 && power <= 120, html: `P = Fs/t = ${power.toFixed(1)} ${tr("Вт", "Вт", "W")}` };
    }
    const mass = val("dropMass"), h = val("height"), part = val("dropPercent") / 100;
    const total = mass * 9.81 * h, kinetic = total * part, potential = total - kinetic;
    return {
      value: total,
      pass: part >= 0.4 && part <= 0.8,
      html: `E = mgh = ${total.toFixed(1)} ${tr("Дж", "Дж", "J")} (Eₖ=${kinetic.toFixed(1)}, Eₚ=${potential.toFixed(1)})`
    };
  }

  /* ---------- светлая canvas-сцена + управление мышью ---------- */
  let lightRaf = null;
  let lightTick = 0;

  function clampNum(v, min, max) {
    const n = Number(v);
    if (!isFinite(n)) return min;
    return Math.max(min, Math.min(max, n));
  }

  function stopLightLoop() {
    if (lightRaf) {
      try { cancelAnimationFrame(lightRaf); } catch (e) {}
      lightRaf = null;
    }
  }

  function startLightLoop() {
    stopLightLoop();
    if (!window.PQSimLight7 || !active || !window.PQSimLight7.has(active.control)) return;
    const canvas = $("pq7-sim-canvas");
    if (!canvas) return;
    window.PQSimLight7.setBridge({
      get() {
        const snap = Object.assign({}, apparatus);
        document.querySelectorAll("#field-sim-lab input[type=range]").forEach((inp) => {
          if (inp && inp.id) snap[inp.id] = Number(inp.value);
        });
        const sel = $("surface");
        if (sel) snap.surface = Number(sel.value);
        return { control: active ? active.control : "", apparatus: snap };
      },
      act(key, value) { applyLightAction(key, value); }
    });
    const step = () => {
      const cv = $("pq7-sim-canvas");
      if (!cv || !active) { lightRaf = null; return; }
      const ctx = cv.getContext("2d");
      if (ctx) {
        try { window.PQSimLight7.render(ctx, cv.width, cv.height, lightTick++); } catch (e) {}
      }
      lightRaf = requestAnimationFrame(step);
    };
    step();
  }

  // Действия мышью повторяют кнопки/ползунки: правим state и обновляем показания.
  function applyLightAction(key, value) {
    if (!active || !apparatus) return;
    const R = (v, a, b) => clampNum(v, a, b);
    const ranges = {
      length: [1, 100], normal: [10, 100], force: [100, 600], area: [2, 20],
      inputForce: [20, 150], smallArea: [1, 10], largeArea: [5, 40],
      workForce: [50, 250], workDistance: [1, 8], workTime: [2, 10],
      dropMass: [1, 10], height: [1, 10], dropPercent: [0, 100],
      volume: [100, 1200], mass: [100, 1000], depth: [0, 50], pivot: [5, 95]
    };
    let handled = true;
    switch (key) {
      case "weigh":
        // взвешиваем только когда образец дотащили до чашки, а не при лёгком сдвиге
        if (Number(value) < 0.6) break;
        const wBtn = document.querySelector('[data-sim-action="weigh"]');
        if (wBtn) wBtn.click();
        break;
      case "immerse":
        const iBtn = document.querySelector('[data-sim-action="immerse"]');
        if (iBtn) iBtn.click();
        break;
      case "measure":
        const mBtn = document.querySelector('[data-sim-action="measure"]');
        if (mBtn) mBtn.click();
        break;
      case "fill":
        apparatus.fills = Math.min(6, (Number(apparatus.fills) || 0) + 1);
        apparatus.measured = false;
        updateReadouts();
        break;
      case "distance": {
        const total = Math.max(1, Number(apparatus.targetDistance) || 60);
        const d = R(value, 0, total);
        apparatus.distance = d;
        apparatus.time = apparatus.speed ? d / apparatus.speed : 0;
        updateReadouts();
        break;
      }
      case "sample":
        apparatus.sample = String(value);
        ["A", "B", "C"].forEach((sv) => {
          const btn = document.querySelector(`[data-sim-action="sample"][data-value="${sv}"]`);
          if (btn && sv === String(value)) btn.click();
        });
        break;
      case "frame":
        const fBtn = document.querySelector(`[data-sim-action="frame"][data-value="${value}"]`);
        if (fBtn) fBtn.click(); else apparatus.frame = value;
        break;
      case "body":
        const bBtn = document.querySelector(`[data-sim-action="body"][data-value="${value}"]`);
        if (bBtn) bBtn.click(); else apparatus.body = value;
        break;
      case "massKg":
        const kBtn = document.querySelector(`[data-sim-action="mass-kg"][data-value="${value}"]`);
        if (kBtn) kBtn.click(); else apparatus.massKg = value;
        break;
      case "fluid":
        const flBtn = document.querySelector(`[data-sim-action="fluid"][data-value="${value}"]`);
        if (flBtn) flBtn.click(); else apparatus.fluid = value;
        break;
      case "surface": {
        apparatus.surface = String(value);
        const sel = $("surface");
        if (sel) {
          sel.value = String(value);
          sel.dispatchEvent(new Event("input", { bubbles: true }));
          sel.dispatchEvent(new Event("change", { bubbles: true }));
        }
        break;
      }
      default: {
        const rng = ranges[key];
        const v = rng ? R(typeof value === "string" ? parseFloat(value) : value, rng[0], rng[1]) : value;
        apparatus[key] = v;
        const el = $(key);
        if (el && el.type === "range") {
          el.value = String(v);
          el.dispatchEvent(new Event("input", { bubbles: true }));
        } else {
          updateReadouts();
        }
        handled = false;
      }
    }
    experimentReady = false;
    const chk = $("field-sim-check");
    if (chk) chk.disabled = true;
    if (typeof updateReadouts === "function") updateReadouts();
    return handled;
  }

  function updateReadouts() {
    if (!$("field-sim-lab")?.innerHTML || !active) return;
    const val = id => $(id) ? Number($(id).value) : null;
    document.querySelectorAll("#field-sim-lab input[data-dial-value]").forEach(input => {
      const out = $(input.id + "-out");
      if (out) out.textContent = `${input.value} ${unitLabel(input.id)}`;
    });
    const r = model();
    lastResult = r;
    if ($("measured-piece")) $("measured-piece").style.width = val("length") + "%";
    if ($("pontoon") && active.control === "lab_buoyancy") $("pontoon").style.transform = `translateY(${r.pass ? 0 : 28}px)`;
    if ($("power-turbine")) $("power-turbine").style.transform = `rotate(${Math.min(360, r.value * 3)}deg)`;
    if ($("falling-capsule")) $("falling-capsule").style.top = val("dropPercent") + "%";
    if (active.control === "lab_motion") {
      $("sim-rover").style.left = `${Math.min(94, apparatus.distance / apparatus.targetDistance * 88)}%`;
      $("sim-route-label").textContent = `${apparatus.targetDistance} ${tr("м · маяк", "м · маяк", "m · beacon")}`;
      $("sim-motion-distance").textContent = tr(`Путь: ${apparatus.distance.toFixed(1)} м`, `Жол: ${apparatus.distance.toFixed(1)} м`, `Distance: ${apparatus.distance.toFixed(1)} m`);
      $("sim-motion-time").textContent = tr(`Время: ${apparatus.time.toFixed(1)} с`, `Уақыт: ${apparatus.time.toFixed(1)} с`, `Time: ${apparatus.time.toFixed(1)} s`);
      $("sim-motion-speed").textContent = tr(`Скорость: ${apparatus.speed} м/с · шаг ${apparatus.stepSeconds} с`, `Жылдамдық: ${apparatus.speed} м/с · қадам ${apparatus.stepSeconds} с`, `Speed: ${apparatus.speed} m/s · step ${apparatus.stepSeconds} s`);
    }
    if ($("density-mass")) $("density-mass").textContent = apparatus.weighed ? `${apparatus.mass} ${tr("г", "г", "g")}` : `— ${tr("г", "г", "g")}`;
    if ($("density-volume")) $("density-volume").textContent = apparatus.immersed ? `${apparatus.volume} ${tr("см³", "см³", "cm³")}` : `— ${tr("см³", "см³", "cm³")}`;
    if ($("buoy-vol")) $("buoy-vol").textContent = tr(`Объём: ${apparatus.volume} см³`, `Көлем: ${apparatus.volume} см³`, `Volume: ${apparatus.volume} cm³`);
    if ($("buoy-mass")) $("buoy-mass").textContent = tr(`Груз: ${apparatus.mass} г`, `Жүк: ${apparatus.mass} г`, `Load: ${apparatus.mass} g`);
    if ($("buoy-force")) $("buoy-force").textContent = `Fₐ: ${(1000 * 9.81 * apparatus.volume / 1e6).toFixed(2)} ${tr("Н", "Н", "N")}`;
    if ($("buoy-weight")) $("buoy-weight").textContent = `P: ${(apparatus.mass / 1000 * 9.81).toFixed(2)} ${tr("Н", "Н", "N")}`;
    if ($("lever-pivot")) $("lever-pivot").style.left = apparatus.pivot + "%";
    if ($("lever-position")) $("lever-position").textContent = apparatus.pivot.toFixed(0) + " " + tr("см", "см", "cm");
    if ($("ruler-reading")) $("ruler-reading").textContent = apparatus.length.toFixed(0) + " " + tr("см", "см", "cm");
    if ($("ruler-object")) $("ruler-object").style.width = apparatus.length + "%";
    if ($("ruler-marker")) $("ruler-marker").style.left = apparatus.length + "%";
    if ($("relative-readout")) {
      $("relative-readout").textContent = apparatus.frame === "ground"
        ? tr("Относительно дороги: 6 м/с (30 м за 5 с)", "Жолға қатысты: 6 м/с (5 с-та 30 м)", "Relative to road: 6 m/s (30 m in 5 s)")
        : tr("Относительно автобуса: 1 м/с (5 м за 5 с)", "Автобусқа қатысты: 1 м/с (5 с-та 5 м)", "Relative to bus: 1 m/s (5 m in 5 s)");
    }
    if ($("gravity-world")) $("gravity-world").textContent = apparatus.body === "Earth" ? "🌍" : "🌙";
    if ($("gravity-reading")) {
      const w = apparatus.body === "Earth" ? apparatus.earthWeight : apparatus.moonWeight;
      $("gravity-reading").textContent = w === null ? `— ${tr("Н", "Н", "N")}` : `${w.toFixed(1)} ${tr("Н", "Н", "N")}`;
    }
    if ($("gravity-mass-readout")) $("gravity-mass-readout").textContent = tr(`Масса: ${apparatus.massKg} кг`, `Масса: ${apparatus.massKg} кг`, `Mass: ${apparatus.massKg} kg`);
    if ($("liquid-fluid-readout")) {
      const fl = FLUID_NAMES[apparatus.fluid || "water"];
      $("liquid-fluid-readout").textContent = tr(
        `Жидкость: ${fl.ru} · ρ = ${fl.rho} кг/м³`,
        `Сұйықтық: ${fl.kk} · ρ = ${fl.rho} кг/м³`,
        `Liquid: ${fl.en} · ρ = ${fl.rho} kg/m³`
      );
    }
    if ($("pressure-depth")) $("pressure-depth").textContent = `${apparatus.depth} ${tr("см", "см", "cm")}`;
    if ($("pressure-probe")) $("pressure-probe").style.top = `${apparatus.depth / 50 * 75}%`;
    if ($("vessel-level-a")) $("vessel-level-a").textContent = tr(`Левая ветвь: ${apparatus.fills * 2} см`, `Сол тармақ: ${apparatus.fills * 2} см`, `Left branch: ${apparatus.fills * 2} cm`);
    if ($("vessel-level-b")) $("vessel-level-b").textContent = tr(`Правая ветвь: ${apparatus.fills * 2} см`, `Оң тармақ: ${apparatus.fills * 2} см`, `Right branch: ${apparatus.fills * 2} cm`);
    if ($("vessel-water-a")) $("vessel-water-a").style.height = apparatus.fills * 8 + "%";
    if ($("vessel-water-b")) $("vessel-water-b").style.height = apparatus.fills * 8 + "%";
    updateChallengeStatus();
  }

  function renderTrialRows() {
    const log = $("sim-trial-rows");
    if (!log || !trialLog.length) return;
    log.innerHTML = trialLog.slice(-5).map(trial => `
      <article class="sim-trial-row ${trial.pass ? "trial-pass" : ""}">
        <b>${tr("Опыт", "Тәжірибе", "Trial")} #${trial.idx} ${trial.pass ? "✓" : "·"}</b>
        <small>${trial.summary}</small>
        <span>${trial.pass ? tr("✓ Целевое условие выполнено", "✓ Мақсатты шарт орындалды", "✓ Target condition met") : tr("· Условие пока не выполнено", "· Шарт әзірге орындалмады", "· Target not yet met")}</span>
      </article>
    `).join("");
  }

  function runExperiment() {
    if (apparatus.hypothesis === null) {
      $("field-sim-result").textContent = tr(
        "Сначала выбери гипотезу (A, B или C) перед проведением опыта.",
        "Тәжірибе алдында болжамды (A, B немесе C) таңда.",
        "Select a hypothesis (A, B, or C) before running the experiment."
      );
      return;
    }
    updateReadouts();
    const r = lastResult;
    if (!r) return;
    const sample = { ...apparatus };
    delete sample.hypothesis;
    delete sample.conclusion;
    const ctrls = [...$("field-sim-lab").querySelectorAll("input[type=range],select")].map(el => [el.id, el.value]);
    const fingerprint = JSON.stringify([ctrls, sample]);
    const duplicate = trialLog.some(t => t.fingerprint === fingerprint);
    if (!duplicate) {
      trialLog.push({ fingerprint, idx: trialLog.length + 1, summary: r.html, pass: r.pass, value: r.value });
    }
    experimentReady = true;
    if (trialLog.length) $("field-sim-lab").querySelectorAll("[data-hypothesis]").forEach(b => b.disabled = true);
    renderTrialRows();
    $("field-sim-result").innerHTML = `📒 ${duplicate
      ? tr("Такой опыт уже записан — измени параметр для второго наблюдения.", "Бұл тәжірибе жазылған — екінші бақылау үшін параметрді өзгерт.", "This setup is already logged — change a parameter for a new trial.")
      : tr("Опыт записан в журнал!", "Тәжірибе журналға жазылды!", "Trial recorded in log!")
    } (${Math.min(trialLog.length, 2)}/2)`;
    updateChallengeStatus();
  }

  function updateChallengeStatus() {
    const c = challenges[active?.id];
    if (!c) return;
    const status = $("sim-challenge-status");
    const rawAnswer = $("sim-conclusion")?.value;
    const answer = rawAnswer?.trim() ? Number(rawAnswer.replace(",", ".")) : NaN;
    const expected = lastResult?.value;
    const tolerance = c.tol || 0.1;
    const selected = apparatus.hypothesis !== null;
    const conclusionOk = Number.isFinite(answer) && (
      (Number.isFinite(expected) && Math.abs(answer - expected) <= tolerance)
      || trialLog.some(t => Number.isFinite(t.value) && Math.abs(answer - t.value) <= tolerance)
    );
    const ready = experimentReady && selected && trialLog.length >= 2 && !!lastResult?.pass && conclusionOk;
    if (status) {
      status.textContent = tr(
        `Гипотеза: ${selected ? "выбрана" : "не выбрана"} · Опытов: ${Math.min(trialLog.length, 2)}/2 · Расчёт: ${conclusionOk ? "верно ✓" : "введи число"}`,
        `Болжам: ${selected ? "таңдалды" : "таңдалмады"} · Тәжірибе: ${Math.min(trialLog.length, 2)}/2 · Есеп: ${conclusionOk ? "дұрыс ✓" : "мәнді енгіз"}`,
        `Hypothesis: ${selected ? "locked" : "none"} · Trials: ${Math.min(trialLog.length, 2)}/2 · Value: ${conclusionOk ? "matches ✓" : "enter value"}`
      );
    }
    const output = $("sim-output");
    if (output && lastResult) output.innerHTML = lastResult.html;
    const button = $("field-sim-check");
    if (button) button.disabled = !ready;
  }

  function checkMission() {
    if (!experimentReady || !active) return;
    updateReadouts();
    const r = lastResult;
    if (!r) return;
    const c = challenges[active.id];
    const rawAnswer = $("sim-conclusion")?.value;
    const answer = rawAnswer?.trim() ? Number(rawAnswer.replace(",", ".")) : NaN;
    const hypothesisOk = apparatus.hypothesis === c.correct;
    const answerOk = Number.isFinite(answer) && (
      Math.abs(answer - r.value) <= (c.tol || 0.1)
      || trialLog.some(t => Number.isFinite(t.value) && Math.abs(answer - t.value) <= (c.tol || 0.1))
    );
    if (r.pass && trialLog.length >= 2 && hypothesisOk && answerOk) {
      const already = !!state[active.id];
      state[active.id] = true;
      state[active.id + "_stamp"] = new Date().toISOString();
      save();
      if (!already && typeof RPG !== "undefined") {
        try { RPG.addXP(25); RPG.addCrystals(4); } catch (_) {}
      }
      if (missions.every(m => state[m.id])) localStorage.setItem("pq7_sim_badge", "earned");
      $("field-sim-result").innerHTML = tr(
        `✅ <b>Миссия выполнена!</b> «${locObj(active.title)}» доказана расчётом. ${already ? "" : "Награда: +25 XP и +4 💎!"}`,
        `✅ <b>Миссия орындалды!</b> «${locObj(active.title)}» есеппен дәлелденді. ${already ? "" : "Сыйлық: +25 XP және +4 💎!"}`,
        `✅ <b>Mission Complete!</b> “${locObj(active.title)}” verified experimentally. ${already ? "" : "Reward: +25 XP & +4 💎!"}`
      );
      $("field-sim-check").disabled = true;
      $("field-sim-next").style.display = missions.some((m, i) => !state[m.id] && unlocked(i)) ? "inline-flex" : "none";
      renderCards();
      if (typeof renderRpgHub === "function") renderRpgHub();
    } else {
      $("field-sim-result").innerHTML = tr(
        `❌ Проверь решение: ${!hypothesisOk ? "гипотеза неверна (перезапусти протокол). " : ""}${trialLog.length < 2 ? "нужны 2 разных опыта. " : ""}${!answerOk ? "проверь расчёт." : ""}`,
        `❌ Шешімді тексер: ${!hypothesisOk ? "болжам қате (хаттаманы қайта баста). " : ""}${trialLog.length < 2 ? "2 түрлі тәжірибе қажет. " : ""}${!answerOk ? "есепті тексер." : ""}`,
        `❌ Recheck: ${!hypothesisOk ? "hypothesis incorrect (restart protocol). " : ""}${trialLog.length < 2 ? "run 2 distinct trials. " : ""}${!answerOk ? "verify calculation." : ""}`
      );
    }
  }

  function nextMission() {
    closeModal();
    const next = missions.find((m, i) => !state[m.id] && unlocked(i));
    if (next) openMission(next.id);
  }

  function closeModal() {
    stopLightLoop();
    const modal = $("field-sim-modal");
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
    active = null;
  }

  $("field-sim-close").onclick = closeModal;
  $("field-sim-modal").addEventListener("click", e => { if (e.target === $("field-sim-modal")) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && $("field-sim-modal")?.classList.contains("open")) closeModal(); });

  const btnLab = document.getElementById("btn-lab");
  if (btnLab && Number(window.CURRENT_GRADE) === 7) {
    btnLab.style.display = "inline-flex";
    btnLab.onclick = () => {
      if (typeof App !== "undefined" && App.showLevelSelect) App.showLevelSelect();
      setTimeout(() => {
        const sec = document.getElementById("field-simulations-section");
        if (sec && typeof sec.scrollIntoView === "function") sec.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };
  }

  window.addEventListener("pq:lang-changed", () => {
    renderCards();
    if (active && $("field-sim-modal")?.classList.contains("open")) {
      renderActiveMissionModal();
    }
  });

  if (typeof I18n !== "undefined" && !I18n.__sim7Hooked) {
    const origSet = I18n.setLanguage.bind(I18n);
    I18n.setLanguage = function (l) {
      origSet(l);
      renderCards();
      if (active && $("field-sim-modal")?.classList.contains("open")) renderActiveMissionModal();
    };
    I18n.__sim7Hooked = true;
  }

  renderCards();
  window.FieldSimulators = { mounted: true, openMission, renderCards, missions };
})();

/* ============================================================
   UI L10N LAYER (7 класс)
   Переводит оставшиеся «зашитые» русские подписи интерфейса,
   которые не были подключены к LOCALES / data-i18n.
   Словарь RU→EN/KK + правила для чисел и единиц.
   При возврате на русский текст восстанавливается.
   ============================================================ */
(function () {
  if (window.__PQ_UI_L10N) return;
  const TRIPLES = [["ПИЛОТ ЭКВИЛИБРИУМА", "EQUILIBRIUM PILOT", "ЭКВИЛИБРИУМ ҰШҚЫШЫ"], ["🧬 Открыть штаб", "🧬 Open HQ", "🧬 Штабты ашу"], ["🧬 Штаб", "🧬 HQ", "🧬 Штаб"], ["🚀 Курсант", "🚀 Cadet", "🚀 Курсант"], ["Курсант", "Cadet", "Курсант"], ["Исследователь", "Explorer", "Зерттеуші"], ["Навигатор", "Navigator", "Навигатор"], ["Защитник города", "City Defender", "Қала қорғаушысы"], ["Легенда экспедиции", "Expedition Legend", "Экспедиция аңызы"], ["СЮЖЕТНЫЕ ПОЛЕВЫЕ ИСПЫТАНИЯ", "STORY FIELD TRIALS", "СЮЖЕТТІК ДАЛАЛЫҚ СЫНАҚТАР"], ["🧪 Симуляторы экспедиции", "🧪 Expedition simulators", "🧪 Экспедиция симуляторлары"], ["интерактивных лабораторий по темам §3–§35 — открыты в любом порядке: меняй параметры, сравнивай результаты и собирай журнал экспедиции.", "interactive labs on topics §3–§35 — open in any order: change parameters, compare results and build your expedition log.", "§3–§35 тақырыптары бойынша интерактивті зертханалар — кез келген ретпен ашылады: параметрлерді өзгерт, нәтижелерді салыстыр және экспедиция журналын жина."], ["🔑 Фрагменты ключа:", "🔑 Key fragments:", "🔑 Кілт фрагменттері:"], ["Начать симуляцию →", "Start simulation →", "Симуляцияны бастау →"], ["✓ Пройдено", "✓ Completed", "✓ Өтілді"], ["Закрыто", "Locked", "Жабық"], ["🔒 Завершите предыдущее испытание", "🔒 Complete the previous trial", "🔒 Алдыңғы сынақты аяқтаңыз"], ["Фрагмент ключа найден · повторить опыт", "Key fragment found · repeat the experiment", "Кілт фрагменті табылды · тәжірибені қайталау"], ["📡 Квант: «Станция потеряла управление. Пройди испытания, чтобы восстановить щит».", "📡 Quant: “The station has lost control. Complete the trials to restore the shield.”", "📡 Квант: «Станция басқарудан шықты. Қалқанды қалпына келтіру үшін сынақтардан өт»."], ["✨ Квант: «Все фрагменты собраны! Энергетический щит восстановлен. Город в безопасности — отличная работа, инженер!»", "✨ Quant: “All fragments collected! The energy shield is restored. The city is safe — great work, engineer!”", "✨ Квант: «Барлық фрагменттер жиналды! Энергетикалық қалқан қалпына келтірілді. Қала қауіпсіз — тамаша жұмыс, инженер!»"], ["📡 Квант: «Фрагмент", "📡 Quant: “Fragment", "📡 Квант: «Фрагмент"], ["БРИФИНГ МИССИИ · ВЫБОР РЕЖИМА", "MISSION BRIEFING · MODE SELECT", "МИССИЯ БРИФИНГІ · РЕЖИМ ТАҢДАУ"], ["Выбери дизайн миссии", "Choose the mission design", "Миссия дизайнын таңда"], ["🎯 Цель:", "🎯 Goal:", "🎯 Мақсат:"], ["⭐ Награда:", "⭐ Reward:", "⭐ Сыйлық:"], ["💡 Для этого уровня рекомендуем:", "💡 Recommended for this level:", "💡 Бұл деңгейге ұсынылады:"], ["📖 Теория уровня", "📖 Level theory", "📖 Деңгей теориясы"], ["🚀 Начать миссию", "🚀 Start mission", "🚀 Миссияны бастау"], ["Учебный вылет", "Training flight", "Оқу ұшуы"], ["Спокойный темп", "Calm pace", "Баяу қарқын"], ["Обычная скорость и стандартная защита — лучший выбор для первого прохождения.", "Normal speed and standard protection — the best choice for a first playthrough.", "Қалыпты жылдамдық пен стандартты қорғаныс — бірінші өтуге ең жақсы таңдау."], ["— Выбери для знакомства с темой и спокойного разбора задач.", "— Choose it to get acquainted with the topic and calmly work through tasks.", "— Тақырыппен танысу және тапсырмаларды байыппен талдау үшін таңда."], ["💡 Выбери для знакомства с темой и спокойного разбора задач.", "💡 Choose it to get acquainted with the topic and calmly work through tasks.", "💡 Тақырыппен танысу және тапсырмаларды байыппен талдау үшін таңда."], ["Сбор энергии", "Energy harvest", "Энергия жинау"], ["Экспедиция за ресурсами", "Resource expedition", "Ресурстарға экспедиция"], ["Медленные астероиды, частые энергоядра и увеличенный радиус сбора.", "Slow asteroids, frequent energy cores and a larger collection radius.", "Баяу астероидтар, жиі энергия ядролары және ұлғайтылған жинау радиусы."], ["💡 Подходит, если нужно больше времени на ответы и хочется собрать ресурсы.", "💡 Good if you need more time to answer and want to collect resources.", "💡 Жауап беруге көбірек уақыт керек болса және ресурс жинағыңыз келсе, қолайлы."], ["Охота на ядро", "Core hunt", "Ядроға аңшылық"], ["Босс-миссия", "Boss mission", "Босс-миссия"], ["Верные ответы наносят урон ядру; ошибки дают боссу восстановить часть здоровья.", "Correct answers damage the core; mistakes let the boss restore some health.", "Дұрыс жауаптар ядроға зақым келтіреді; қателер боссқа денсаулығының бір бөлігін қалпына келтіруге мүмкіндік береді."], ["💡 Выбирай, когда уже уверенно решаешь задания этой темы.", "💡 Choose it when you already solve tasks on this topic confidently.", "💡 Осы тақырыптағы тапсырмаларды сенімді шығаратын болсаңыз, таңдаңыз."], ["Блиц-рейд", "Blitz raid", "Блиц-рейд"], ["Испытание на скорость", "Speed challenge", "Жылдамдық сынағы"], ["Астероиды летят быстрее и появляются чаще; за быстрые ответы — повышенная награда.", "Asteroids fly faster and appear more often; fast answers earn a bigger reward.", "Астероидтар тезірек ұшады және жиі пайда болады; жылдам жауаптарға жоғары сыйлық."], ["💡 Подходит для повторения уже знакомого материала, не для первого изучения.", "💡 Good for revising familiar material, not for learning it for the first time.", "💡 Таныс материалды қайталауға жарайды, алғаш үйренуге емес."], ["Штурм волнами", "Wave assault", "Толқынмен шабуыл"], ["Режим выживания", "Survival mode", "Тіршілік режимі"], ["Каждые шесть астероидов начинается новая волна; скорость угроз растёт.", "Every six asteroids a new wave starts; the threats get faster.", "Әр алты астероидтан кейін жаңа толқын басталады; қауіп жылдамдығы артады."], ["💡 Выбирай для сложного повторного прохождения и тренировки устойчивости.", "💡 Choose it for a tough replay and training your resilience.", "💡 Күрделі қайта өту және төзімділікті жаттықтыру үшін таңда."], ["Сохранить город выше 80%", "Keep the city above 80%", "Қаланы 80%-дан жоғары ұстау"], ["Собрать 12 энергоядер", "Collect 12 energy cores", "12 энергия ядросын жинау"], ["Уничтожить ядро Астериона", "Destroy the Asterion core", "Астерион ядросын жою"], ["Дать 8 быстрых ответов", "Give 8 fast answers", "8 жылдам жауап беру"], ["Пережить 3 волны", "Survive 3 waves", "3 толқыннан аман өту"], ["📖 Кратко о кампании", "📖 Campaign overview", "📖 Науқан туралы қысқаша"], ["👩‍🚀 Герои экспедиции", "👩‍🚀 Expedition heroes", "👩‍🚀 Экспедиция кейіпкерлері"], ["📖 Лор этой главы", "📖 Chapter lore", "📖 Осы тараудың лоры"], ["Сюжет: Энергетический щит Астерии", "Story: The Energy Shield of Asteria", "Сюжет: Астерияның энергетикалық қалқаны"], ["Текущая цель:", "Current objective:", "Ағымдағы мақсат:"], ["Задача главы:", "Chapter objective:", "Тарау мақсаты:"], ["ШТАБ ПИЛОТА · ЭКВИЛИБРИУМ", "PILOT HQ · EQUILIBRIUM", "ҰШҚЫШ ШТАБЫ · ЭКВИЛИБРИУМ"], ["миссий пройдено", "missions completed", "миссия өтілді"], ["кристаллы", "crystals", "кристаллдар"], ["очков навыков", "skill points", "дағды ұпайы"], ["достижений", "achievements", "жетістік"], ["🧠 Навыки", "🧠 Skills", "🧠 Дағдылар"], ["🔮 Артефакты", "🔮 Artifacts", "🔮 Артефактілер"], ["📜 Задания", "📜 Quests", "📜 Тапсырмалар"], ["🎖 Достижения", "🎖 Achievements", "🎖 Жетістіктер"], ["🛠 Ошибки", "🛠 Mistakes", "🛠 Қателер"], ["Прокачать · 1 SP", "Upgrade · 1 SP", "Дамыту · 1 SP"], ["· экипирован", "· equipped", "· киілген"], ["Надеть", "Equip", "Кию"], ["Купить", "Buy", "Сатып алу"], ["Получено", "Claimed", "Алынды"], ["Забрать награду", "Claim reward", "Сыйлықты алу"], ["В процессе", "In progress", "Орындалуда"], ["· награда", "· reward", "· сыйлық"], ["🛡 Инженер щита", "🛡 Shield engineer", "🛡 Қалқан инженері"], ["+10 энергии щита в начале уровня", "+10 shield energy at the start of a level", "Деңгей басында +10 қалқан энергиясы"], ["🔧 Механик", "🔧 Mechanic", "🔧 Механик"], ["+5 здоровья города за верный ответ", "+5 city health for a correct answer", "Дұрыс жауап үшін +5 қала денсаулығы"], ["🎯 Тактик", "🎯 Tactician", "🎯 Тактик"], ["+50 стартовых очков за ранг", "+50 starting points per rank", "Әр дәреже үшін +50 бастапқы ұпай"], ["📚 Исследователь", "📚 Researcher", "📚 Зерттеуші"], ["+1 подсказка в каждом задании", "+1 hint in every task", "Әр тапсырмада +1 кеңес"], ["💠 Кристалл фокуса", "💠 Focus crystal", "💠 Фокус кристалы"], ["+15% XP за победу", "+15% XP for a victory", "Жеңіс үшін +15% XP"], ["🧿 Ядро щита", "🧿 Shield core", "🧿 Қалқан ядросы"], ["+15 энергии щита на старте миссии", "+15 shield energy at mission start", "Миссия басында +15 қалқан энергиясы"], ["⏳ Хронометр Кванта", "⏳ Quant chronometer", "⏳ Квант хронометрі"], ["+1 подсказка к каждому вопросу", "+1 hint per question", "Әр сұраққа +1 кеңес"], ["Полевой исследователь", "Field researcher", "Далалық зерттеуші"], ["Заверши 2 симулятора по темам параграфов", "Complete 2 simulators on paragraph topics", "Параграф тақырыптары бойынша 2 симуляторды аяқта"], ["Знаток физики", "Physics expert", "Физика білгірі"], ["Ответь верно на 20 вопросов в миссиях", "Answer 20 questions correctly in missions", "Миссияларда 20 сұраққа дұрыс жауап бер"], ["Три звезды", "Three stars", "Үш жұлдыз"], ["Получи 3 звезды за любую миссию", "Get 3 stars for any mission", "Кез келген миссия үшін 3 жұлдыз ал"], ["Первый вылет", "First flight", "Бірінші ұшу"], ["Ключ восстановлен", "Key restored", "Кілт қалпына келтірілді"], ["Безупречная миссия", "Flawless mission", "Мінсіз миссия"], ["Коллекционер", "Collector", "Коллекционер"], ["Легенда штаба", "HQ legend", "Штаб аңызы"], ["🗃 Чёрный ящик · ошибки для разбора", "🗃 Black box · mistakes to review", "🗃 Қара жәшік · талқылауға арналған қателер"], ["в очереди", "in queue", "кезекте"], ["✅ Очередь пуста. Ошибки из следующих миссий появятся здесь для повторения.", "✅ The queue is empty. Mistakes from upcoming missions will appear here for review.", "✅ Кезек бос. Келесі миссиялардағы қателер осында қайталау үшін шығады."], ["Разобрать ошибки", "Review mistakes", "Қателерді талдау"], ["Разобрать", "Review", "Талдау"], ["Да", "Yes", "Иә"], ["Нет", "No", "Жоқ"], ["ответ не выбран", "no answer selected", "жауап таңдалмаған"], ["🛠 Пока нечего ремонтировать — сначала разберись с вопросом, в котором ошибся.", "🛠 Nothing to repair yet — first work through a question you got wrong.", "🛠 Әзірге жөндейтін нәрсе жоқ — алдымен қателескен сұрағыңды талда."], ["⚙ Управление классами и групповая рассылка (необязательно)", "⚙ Class management and group sending (optional)", "⚙ Сыныптарды басқару және топтық жіберу (міндетті емес)"], ["Быстро назначить одному ученику", "Assign quickly to one student", "Бір оқушыға жылдам тағайындау"], ["Дополнительные параметры (ID и комментарий)", "Additional options (ID and note)", "Қосымша параметрлер (ID және түсініктеме)"], ["Импорт, экспорт и результаты (дополнительно)", "Import, export and results (advanced)", "Импорт, экспорт және нәтижелер (қосымша)"], ["Классы ещё не созданы.", "No classes created yet.", "Сыныптар әлі құрылмаған."], ["Классов пока нет.", "No classes yet.", "Әзірге сынып жоқ."], ["Добавить вариант:", "Add option:", "Нұсқа қосу:"], ["+ Добавить вариант", "+ Add option", "+ Нұсқа қосу"], ["Правильный ответ:", "Correct answer:", "Дұрыс жауап:"], ["○ выберите один правильный", "○ choose one correct option", "○ бір дұрыс нұсқаны таңдаңыз"], ["⚙ Управление классами и групповая рассылка", "⚙ Class management and group sending", "⚙ Сыныптарды басқару және топтық жіберу"], ["Учитель может отсканировать QR-код, открыть ссылку или использовать короткий код выше.", "The teacher can scan the QR code, open the link or use the short code above.", "Мұғалім QR-кодты сканерлеп, сілтемені ашып немесе жоғарыдағы қысқа кодты пайдалана алады."], ["📷 Назначение по QR-коду", "📷 Assign by QR code", "📷 QR-код арқылы тағайындау"], ["Ученик сканирует код камерой — назначенный урок появится в его списке.", "The student scans the code with the camera — the assigned lesson appears in their list.", "Оқушы кодты камерамен сканерлейді — тағайындалған сабақ оның тізімінде пайда болады."], ["Ссылка для отправки", "Link to send", "Жіберуге арналған сілтеме"], ["🔗 Скопировать ссылку", "🔗 Copy link", "🔗 Сілтемені көшіру"], ["Копировать код", "Copy code", "Кодты көшіру"], ["Готово", "Done", "Дайын"], ["👩‍🏫 Назначено", "👩‍🏫 Assigned", "👩‍🏫 Тағайындалды"], ["⚠ Бонус", "⚠ Bonus", "⚠ Бонус"], ["⏱ Хронометр", "⏱ Chronometer", "⏱ Хронометр"], ["Лицензия", "License", "Лицензия"], ["Попытки: 0 / 5", "Attempts: 0 / 5", "Әрекеттер: 0 / 5"], ["Подсказки: 3", "Hints: 3", "Кеңестер: 3"], ["0 / 100 XP", "0 / 100 XP", "0 / 100 XP"], ["Глава 1 · Единицы СИ", "Chapter 1 · SI units", "1-тарау · SI бірліктері"], ["Калибровка модуля", "Module calibration", "Модульді калибрлеу"], ["Квант: датчик длины спутал сантиметры и метры. Переведи измерение детали из сантиметров в метры и проверь масштаб корпуса.", "Quant: the length sensor confused centimetres and metres. Convert the part measurement from centimetres to metres and check the hull scale.", "Квант: ұзындық датчигі сантиметр мен метрді шатастырды. Бөлшек өлшемін сантиметрден метрге ауыстырып, корпус масштабын тексер."], ["Настрой деталь на 40–50 см и подтверди перевод в метры с точностью до 0,01 м.", "Set the part to 40–50 cm and confirm the conversion to metres with an accuracy of 0.01 m.", "Бөлшекті 40–50 см-ге қойып, метрге ауыстыруды 0,01 м дәлдікпен раста."], ["Попробуй 45 см и запиши результат в метрах.", "Try 45 cm and write the result in metres.", "45 см-ні қолданып көр де, нәтижені метрмен жаз."], ["Лаборатория · Точность измерений", "Lab · Measurement accuracy", "Зертхана · Өлшеу дәлдігі"], ["Метрологический пост", "Metrology post", "Метрологиялық бекет"], ["Лазерный дальномер потерял нулевую отметку. Выставь измерительную метку на шкале, сними показание и запиши его в журнал.", "The laser rangefinder has lost its zero mark. Set the measuring mark on the scale, take a reading and record it in the log.", "Лазерлік қашықтық өлшегіш нөлдік белгісінен айырылды. Өлшеу белгісін шкалаға қойып, көрсеткішті алып, журналға жаз."], ["Измерь контрольный отрезок длиной от 40 до 60 см, используя деления шкалы.", "Measure a reference segment from 40 to 60 cm using the scale divisions.", "Шкала бөліктерін пайдаланып, 40-тан 60 см-ге дейінгі бақылау кесіндісін өлше."], ["Нажми на шкалу, чтобы передвинуть метку; потом проведи измерение.", "Tap the scale to move the mark, then take the measurement.", "Белгіні жылжыту үшін шкалаға бас, сосын өлшеу жүргіз."], ["Лаборатория · Относительность движения", "Lab · Relativity of motion", "Зертхана · Қозғалыстың салыстырмалылығы"], ["Дождь в движущемся автобусе", "Rain in a moving bus", "Қозғалыстағы автобустағы жаңбыр"], ["Квант видит дождь из окна автобуса. Сравни показания наблюдателя на дороге и пассажира: один и тот же дождь движется относительно них по-разному.", "Quant sees rain from the bus window. Compare the readings of the observer on the road and the passenger: the same rain moves differently relative to them.", "Квант автобус терезесінен жаңбырды көреді. Жолдағы бақылаушы мен жолаушының көрсеткіштерін салыстыр: бір жаңбыр оларға қатысты әртүрлі қозғалады."], ["Проведи наблюдение из двух систем отсчёта и сравни перемещение капли за 5 секунд.", "Observe from two frames of reference and compare the drop's displacement over 5 seconds.", "Екі санақ жүйесінен бақылап, тамшының 5 секундтағы орын ауыстыруын салыстыр."], ["Выбери наблюдателя, нажми «Записать наблюдение», затем повтори для второго.", "Pick an observer, tap “Record observation”, then repeat for the second one.", "Бақылаушыны таңдап, «Бақылауды жазу» түймесін бас, сосын екіншісі үшін қайтала."], ["Глава 2 · Путь и скорость", "Chapter 2 · Distance and speed", "2-тарау · Жол және жылдамдық"], ["Навигация по траектории", "Trajectory navigation", "Траектория бойынша навигация"], ["Зонд потерял курс. Настрой путь и время перелёта, чтобы определить среднюю скорость и передать координаты спасателям.", "The probe has lost its course. Set the distance and flight time to find the average speed and send the coordinates to the rescuers.", "Зонд бағытын жоғалтты. Орташа жылдамдықты табу және құтқарушыларға координаттарды жіберу үшін жол мен ұшу уақытын орнат."], ["Выбери маршрут 30, 60 или 90 м и доведи зонд до маяка со средней скоростью 2–5 м/с.", "Choose a route of 30, 60 or 90 m and bring the probe to the beacon at an average speed of 2–5 m/s.", "30, 60 немесе 90 м маршрутты таңдап, зондты маякқа 2–5 м/с орташа жылдамдықпен жеткіз."], ["Выбери скорость 4 м/с и продвигай симуляцию шагами по 5 секунд.", "Choose a speed of 4 m/s and advance the simulation in steps of 5 seconds.", "4 м/с жылдамдықты таңдап, симуляцияны 5 секундтық қадамдармен ілгерілет."], ["Глава 3 · Плотность вещества", "Chapter 3 · Density of matter", "3-тарау · Заттың тығыздығы"], ["Неизвестный сплав", "Unknown alloy", "Белгісіз қорытпа"], ["Найден металлический фрагмент. Измерь его массу и объём, затем определи, подходит ли сплав для корпуса.", "A metal fragment has been found. Measure its mass and volume, then determine whether the alloy suits the hull.", "Металл сынығы табылды. Оның массасы мен көлемін өлшеп, қорытпа корпусқа жарамды ма, соны анықта."], ["По измерениям найди плотность сплава 2500–3000 кг/м³.", "Use measurements to find the alloy density in the range 2500–3000 kg/m³.", "Өлшеулер бойынша қорытпа тығыздығын 2500–3000 кг/м³ аралығында тап."], ["Сначала взвесь образец, затем измерь вытесненный им объём воды.", "Weigh the sample first, then measure the volume of water it displaces.", "Алдымен үлгіні өлшеп ал, сосын ол ығыстырған су көлемін өлше."], ["Лаборатория · Масса и сила тяжести", "Lab · Mass and gravity", "Зертхана · Масса және ауырлық күші"], ["Весовой пост на Луне", "Weighing post on the Moon", "Айдағы өлшеу бекеті"], ["Груз нужно доставить с Земли на Луну. Измерь его вес на обеих планетах и отдели постоянную массу от меняющейся силы тяжести.", "The cargo must be delivered from Earth to the Moon. Measure its weight on both planets and separate the constant mass from the changing gravity.", "Жүкті Жерден Айға жеткізу керек. Оның салмағын екі планетада да өлшеп, тұрақты массаны өзгеретін ауырлық күшінен ажырат."], ["Сравни вес одного и того же груза на Земле и Луне; затем повтори с другой массой.", "Compare the weight of the same load on Earth and on the Moon, then repeat with another mass.", "Бір жүктің Жердегі және Айдағы салмағын салыстыр, сосын басқа массамен қайтала."], ["Выбери планету и нажми «Взвесить» на каждой.", "Choose a planet and tap “Weigh” on each one.", "Планетаны таңдап, әрқайсысында «Өлшеу» түймесін бас."], ["Глава 4 · Сила трения", "Chapter 4 · Friction force", "4-тарау · Үйкеліс күші"], ["Тормозной стенд", "Brake test bench", "Тежегіш стенді"], ["Сервисный робот скользит по настилу. Исследуй материал и нагрузку, чтобы получить нужную силу сцепления.", "A service robot is sliding along the deck. Study the material and the load to get the required traction.", "Қызмет роботы төсеніште сырғанап барады. Қажетті ілініс күшін алу үшін материал мен жүктемені зертте."], ["Настрой силу трения в диапазоне 10–30 Н по формуле Fтр = μN.", "Set the friction force in the range 10–30 N using F(fr) = μN.", "Үйкеліс күшін Fүйк = μN формуласы бойынша 10–30 Н аралығында орнат."], ["Сначала измени только поверхность, потом только силу прижатия.", "Change only the surface first, then only the pressing force.", "Алдымен тек бетті, сосын тек басу күшін өзгерт."], ["Глава 5 · Давление твёрдых тел", "Chapter 5 · Pressure of solids", "5-тарау · Қатты денелердің қысымы"], ["Опора защитного купола", "Shield dome support", "Қорғаныс күмбезінің тірегі"], ["Опора купола давит на хрупкую платформу. Измени площадь опоры и силу, чтобы удержать платформу в безопасном диапазоне давления.", "The dome support presses on a fragile platform. Change the support area and the force to keep the platform within a safe pressure range.", "Күмбез тірегі нәзік платформаға қысым түсіреді. Платформаны қауіпсіз қысым аралығында ұстау үшін тірек ауданы мен күшті өзгерт."], ["Подбери давление 150–350 кПа, используя p = F/S.", "Set a pressure of 150–350 kPa using p = F/S.", "p = F/S формуласын пайдаланып, 150–350 кПа қысымды орнат."], ["Расширяй площадь опоры: одинаковая сила создаёт меньшее давление.", "Increase the support area: the same force creates less pressure.", "Тірек ауданын ұлғайт: бірдей күш азырақ қысым жасайды."], ["Лаборатория · Давление жидкости", "Lab · Liquid pressure", "Зертхана · Сұйықтық қысымы"], ["Глубинный датчик", "Depth sensor", "Тереңдік датчигі"], ["Датчик в резервуаре подаёт тревогу. Опусти его на разную глубину и проследи, как меняется давление воды.", "The sensor in the tank is raising an alarm. Lower it to different depths and trace how the water pressure changes.", "Резервуардағы датчик дабыл қағады. Оны әртүрлі тереңдікке түсіріп, су қысымының қалай өзгеретінін бақыла."], ["Сравни давление на разных глубинах и в разных жидкостях; объясни две зависимости.", "Compare pressure at different depths and in different liquids; explain both relationships.", "Әртүрлі тереңдіктегі және әртүрлі сұйықтықтағы қысымды салыстыр; екі тәуелділікті түсіндір."], ["Кнопки перемещают датчик шагами по 10 см; нажми «Снять показание».", "The buttons move the sensor in steps of 10 cm; press “Take reading”.", "Түймелер датчикті 10 см қадаммен жылжытады; «Көрсеткішті алу» түймесін бас."], ["Глава 6 · Гидравлическая машина", "Chapter 6 · Hydraulic machine", "6-тарау · Гидравликалық машина"], ["Гидравлический подъёмник", "Hydraulic lift", "Гидравликалық көтергіш"], ["Нужно поднять шлюз тяжёлой брони. Настрой площади поршней и входное усилие — проверь закон Паскаля.", "A heavy armoured gate has to be lifted. Set the piston areas and the input force — check Pascal's law.", "Ауыр сауытты қақпаны көтеру керек. Поршень аудандары мен кіріс күшін орнат — Паскаль заңын тексер."], ["Получить выходную силу не меньше 600 Н без превышения входных 150 Н.", "Obtain an output force of at least 600 N without exceeding 150 N at the input.", "Кірістегі 150 Н-нан аспай, кемінде 600 Н шығыс күшін ал."], ["Сравни площадь поршней; выходная сила растёт вместе с их отношением.", "Compare the piston areas; the output force grows with their ratio.", "Поршень аудандарын салыстыр; шығыс күш олардың қатынасымен бірге артады."], ["Лаборатория · Жидкость в сообщающихся сосудах", "Lab · Liquid in communicating vessels", "Зертхана · Қатынас ыдыстардағы сұйықтық"], ["Станция сообщающихся сосудов", "Communicating vessels station", "Қатынас ыдыстар станциясы"], ["Вода проходит по трубам разной формы. Запусти заполнение и сравни уровни: форма колена меняется, но равновесные уровни должны совпасть.", "Water flows through pipes of different shapes. Start filling and compare the levels: the shape of the bend changes but the equilibrium levels must match.", "Су әртүрлі пішінді құбырлардан өтеді. Құюды бастап, деңгейлерді салыстыр: иілу пішіні өзгереді, бірақ тепе-теңдік деңгейлері сәйкес болуы керек."], ["Заполни систему и подтверди равенство уровней в обеих ветвях.", "Fill the system and confirm that the levels in both branches are equal.", "Жүйені толтырып, екі тармақтағы деңгейлердің теңдігін раста."], ["Нажми «Подать воду» несколько раз и прочитай обе шкалы.", "Press “Supply water” several times and read both scales.", "«Су беру» түймесін бірнеше рет басып, екі шкаланы да оқы."], ["Глава 7 · Закон Архимеда", "Chapter 7 · Archimedes' law", "7-тарау · Архимед заңы"], ["Спасательный буй", "Rescue buoy", "Құтқару бусы"], ["Контейнер упал в водный отсек. Измени вытесненный объём и массу груза, чтобы буй удерживал контейнер на поверхности.", "A container has fallen into the water compartment. Change the displaced volume and the load mass so the buoy keeps the container on the surface.", "Контейнер су бөлігіне құлап түсті. Бу контейнерді бетінде ұстауы үшін ығыстырылған көлем мен жүк массасын өзгерт."], ["Сила Архимеда должна быть не меньше силы тяжести груза.", "The buoyant force must be at least equal to the weight of the load.", "Архимед күші жүктің ауырлық күшінен кем болмауы керек."], ["Увеличивай погружённый объём и наблюдай, когда выталкивающая сила удержит груз.", "Increase the immersed volume and watch when the buoyant force holds the load.", "Батырылған көлемді ұлғайтып, көтергіш күш жүкті ұстайтын сәтті бақыла."], ["Глава 8 · Работа и мощность", "Chapter 8 · Work and power", "8-тарау · Жұмыс және қуат"], ["Турбина станции", "Station turbine", "Станция турбинасы"], ["Энергогенератор не набирает мощность. Настрой силу, путь и время хода поршня, чтобы восстановить питание щита.", "The power generator is not reaching its output. Set the force, distance and piston stroke time to restore the shield's power.", "Энергия генераторы қуат жинамайды. Қалқан қорегін қалпына келтіру үшін күш, жол және поршень жүрісінің уақытын орнат."], ["Рассчитай мощность в диапазоне 50–120 Вт: P = Fs/t.", "Calculate the power in the range 50–120 W: P = Fs/t.", "Қуатты 50–120 Вт аралығында есепте: P = Fs/t."], ["Оставь силу и путь прежними, сократи время — мощность возрастёт.", "Keep force and distance the same, shorten the time — the power will grow.", "Күш пен жолды бұрынғыдай қалдырып, уақытты қысқарт — қуат артады."], ["Глава 9 · Превращение энергии", "Chapter 9 · Energy transformation", "9-тарау · Энергияның айналуы"], ["Капсула кинетической энергии", "Kinetic energy capsule", "Кинетикалық энергия капсуласы"], ["Капсула падает в энергетическую шахту. Проследи, как потенциальная энергия превращается в кинетическую, не теряя общий запас.", "The capsule falls into the energy shaft. Trace how potential energy turns into kinetic energy without losing the total.", "Капсула энергетикалық шахтаға түседі. Потенциалдық энергияның жалпы қорды жоғалтпай кинетикалық энергияға айналуын бақыла."], ["Запусти капсулу с высоты и проверь сохранение полной механической энергии.", "Launch the capsule from a height and verify that total mechanical energy is conserved.", "Капсуланы биіктіктен ұшырып, толық механикалық энергияның сақталуын тексер."], ["Проверь капсулу на 40%, 60% и 80% пути и сравни Eₖ и Eₚ.", "Check the capsule at 40%, 60% and 80% of the path and compare Eₖ and Eₚ.", "Капсуланы жолдың 40%, 60% және 80% нүктелерінде тексеріп, Eₖ мен Eₚ-ны салыстыр."], ["Глава 10 · Равновесие рычага", "Chapter 10 · Lever equilibrium", "10-тарау · Иінтіректің тепе-теңдігі"], ["Рычаг аварийного шлюза", "Emergency hatch lever", "Апаттық шлюз иінтірегі"], ["Последний фрагмент ключа заперт под тяжёлой плитой. Найди плечо рычага, при котором моменты сил уравновешены.", "The last key fragment is locked under a heavy plate. Find the lever arm at which the moments of force balance.", "Соңғы кілт фрагменті ауыр плитаның астында құлыпталған. Күш моменттері теңелетін иін табыңыз."], ["Добейся равновесия: F₁·l₁ ≈ F₂·l₂ с ошибкой не больше 10%.", "Achieve equilibrium: F₁·l₁ ≈ F₂·l₂ with an error of no more than 10%.", "Тепе-теңдікке жет: F₁·l₁ ≈ F₂·l₂, қателік 10%-дан аспасын."], ["Сначала уравняй моменты F₁·l₁ и F₂·l₂, изменяя только плечо.", "First equalise the moments F₁·l₁ and F₂·l₂ by changing only the arm.", "Алдымен тек иінді өзгерте отырып, F₁·l₁ мен F₂·l₂ моменттерін теңестір."], ["Если перевести сантиметры в метры, что нужно сделать с числом?", "If you convert centimetres to metres, what should you do with the number?", "Сантиметрді метрге ауыстырғанда санмен не істеу керек?"], ["Разделить на 100", "Divide by 100", "100-ге бөлу"], ["Умножить на 100", "Multiply by 100", "100-ге көбейту"], ["Вычесть 100", "Subtract 100", "100-ді азайту"], ["Переведи показание контрольной детали 45 см в метры.", "Convert the reference part reading of 45 cm to metres.", "Бақылау бөлшегінің 45 см көрсеткішін метрге ауыстыр."], ["Какое измерение надёжнее всего показывает шкала?", "Which measurement does the scale show most reliably?", "Қай өлшеу шкала бойынша ең сенімді?"], ["Положение метки совпало с делением", "The mark coincides with a division", "Белгі бөлікке дәл сәйкес келді"], ["Число выбрано до измерения", "The number was chosen before measuring", "Сан өлшеуден бұрын таңдалды"], ["Длина не зависит от нулевой отметки", "The length does not depend on the zero mark", "Ұзындық нөлдік белгіге тәуелді емес"], ["Введи измеренную длину стержня.", "Enter the measured length of the rod.", "Өлшенген өзек ұзындығын енгіз."], ["Капля движется 6 м/с, автобус — 5 м/с в том же направлении. Скорость капли относительно пассажира…", "The drop moves at 6 m/s, the bus at 5 m/s in the same direction. The speed of the drop relative to the passenger is…", "Тамшы 6 м/с, автобус сол бағытта 5 м/с жылдамдықпен қозғалады. Тамшының жолаушыға қатысты жылдамдығы…"], ["11 м/с", "11 m/s", "11 м/с"], ["1 м/с", "1 m/s", "1 м/с"], ["6 м/с", "6 m/s", "6 м/с"], ["Найди разность показаний двух наблюдателей.", "Find the difference between the readings of the two observers.", "Екі бақылаушының көрсеткіштерінің айырмасын тап."], ["При неизменном пути, если скорость увеличить вдвое, время движения…", "At an unchanged distance, if the speed doubles, the travel time…", "Жол өзгермесе, жылдамдықты екі есе арттырса, қозғалыс уақыты…"], ["Уменьшится вдвое", "Halves", "Екі есе азаяды"], ["Увеличится вдвое", "Doubles", "Екі есе артады"], ["Не изменится", "Stays the same", "Өзгермейді"], ["Рассчитай среднюю скорость зонда по журналу.", "Calculate the probe's average speed from the log.", "Журнал бойынша зондтың орташа жылдамдығын есепте."], ["Для одного и того же материала, если масса и объём увеличатся одинаково, плотность…", "For the same material, if mass and volume increase equally, the density…", "Бір материал үшін масса мен көлем бірдей артса, тығыздық…"], ["Останется прежней", "Stays the same", "Бұрынғыдай қалады"], ["Вычисли плотность сплава по массе и вытесненному объёму.", "Calculate the alloy density from the mass and displaced volume.", "Қорытпа тығыздығын масса мен ығыстырылған көлем бойынша есепте."], ["При перевозке одного груза с Земли на Луну какая величина сохраняется?", "When transporting the same load from Earth to the Moon, which quantity is conserved?", "Бір жүкті Жерден Айға жеткізгенде қандай шама сақталады?"], ["Масса", "Mass", "Масса"], ["Вес", "Weight", "Салмақ"], ["Ускорение свободного падения", "Free-fall acceleration", "Еркін түсу үдеуі"], ["Вычисли разность весов на Земле и Луне для выбранной массы.", "Calculate the difference in weight on Earth and the Moon for the chosen mass.", "Таңдалған масса үшін Жер мен Айдағы салмақ айырмасын есепте."], ["При одинаковой силе прижатия более шероховатая поверхность обычно создаёт…", "With the same pressing force, a rougher surface usually produces…", "Бірдей басу күшінде кедір-бұдыр бет әдетте…"], ["Большую силу трения", "A greater friction force", "Үлкен үйкеліс күшін тудырады"], ["Меньшую силу трения", "A smaller friction force", "Кіші үйкеліс күшін тудырады"], ["Такую же силу трения", "The same friction force", "Сол үйкеліс күшін тудырады"], ["Вычисли силу трения для выбранной поверхности.", "Calculate the friction force for the chosen surface.", "Таңдалған бет үшін үйкеліс күшін есепте."], ["Если площадь опоры увеличить в 4 раза при той же силе, давление…", "If the support area is increased 4 times at the same force, the pressure…", "Тірек ауданын 4 есе арттырса (күш сол қалса), қысым…"], ["Уменьшится в 4 раза", "Decreases 4 times", "4 есе азаяды"], ["Увеличится в 4 раза", "Increases 4 times", "4 есе артады"], ["Рассчитай давление на платформу по последнему опыту.", "Calculate the pressure on the platform from the last experiment.", "Соңғы тәжірибе бойынша платформаға түсетін қысымды есепте."], ["При погружении глубже давление жидкости…", "The deeper you go, the liquid pressure…", "Тереңірек батқанда сұйықтық қысымы…"], ["Возрастает", "Increases", "Артады"], ["Уменьшается", "Decreases", "Азаяды"], ["Не меняется", "Stays the same", "Өзгермейді"], ["Рассчитай давление выбранной жидкости на измеренной глубине.", "Calculate the pressure of the chosen liquid at the measured depth.", "Таңдалған сұйықтықтың өлшенген тереңдіктегі қысымын есепте."], ["В гидравлическом устройстве выходная сила растёт, если…", "In a hydraulic device the output force grows if…", "Гидравликалық құрылғыда шығыс күш артады, егер…"], ["Площадь большого поршня больше относительно малого", "The large piston area is greater than the small one", "Үлкен поршень ауданы кішісіне қарағанда үлкен болса"], ["Оба поршня одинаковы независимо от силы", "Both pistons are equal regardless of force", "Екі поршень де күшке қарамастан бірдей болса"], ["Уменьшить давление жидкости", "The liquid pressure is reduced", "Сұйықтық қысымын азайтса"], ["Рассчитай выходную силу подъёмника по последнему опыту.", "Calculate the output force of the lift from the last experiment.", "Соңғы тәжірибе бойынша көтергіштің шығыс күшін есепте."], ["В сообщающихся сосудах с одной и той же жидкостью после успокоения уровни…", "In communicating vessels with the same liquid, after settling the levels are…", "Бір сұйықтығы бар қатынас ыдыстарда тынышталғаннан кейін деңгейлер…"], ["Одинаковы", "Equal", "Бірдей"], ["Выше в широкой ветви", "Higher in the wide branch", "Кең тармақта биік"], ["Выше в узкой ветви", "Higher in the narrow branch", "Тар тармақта биік"], ["Запиши высоту установившегося уровня после заполнения.", "Write down the height of the steady level after filling.", "Толтырғаннан кейінгі тұрақты деңгей биіктігін жаз."], ["Если увеличить объём погружённой части тела в воде, выталкивающая сила…", "If the immersed volume of a body in water increases, the buoyant force…", "Суға батырылған дене көлемін арттырса, көтергіш күш…"], ["Возрастёт", "Increases", "Артады"], ["Уменьшится", "Decreases", "Азаяды"], ["Рассчитай силу Архимеда по последнему измерению.", "Calculate the buoyant force from the last measurement.", "Соңғы өлшеу бойынша Архимед күшін есепте."], ["При той же работе, если выполнить её за меньшее время, мощность…", "For the same work, if it is done in less time, the power…", "Бірдей жұмысты азырақ уақытта орындаса, қуат…"], ["Рассчитай мощность турбины по последнему опыту.", "Calculate the turbine power from the last experiment.", "Соңғы тәжірибе бойынша турбина қуатын есепте."], ["При падении капсулы без потерь механическая энергия…", "When a capsule falls without losses, mechanical energy…", "Капсула шығынсыз құлағанда механикалық энергия…"], ["Переходит из потенциальной в кинетическую, а сумма сохраняется", "Turns from potential into kinetic, and the sum is conserved", "Потенциалдықтан кинетикалыққа айналады, ал қосындысы сақталады"], ["Полностью исчезает", "Disappears completely", "Толығымен жоғалады"], ["Только потенциальная энергия растёт", "Only potential energy grows", "Тек потенциалдық энергия артады"], ["Рассчитай начальную потенциальную энергию капсулы mgh.", "Calculate the initial potential energy of the capsule mgh.", "Капсуланың бастапқы потенциалдық энергиясын mgh бойынша есепте."], ["Рычаг находится в равновесии, когда…", "A lever is in equilibrium when…", "Иінтірек тепе-теңдікте болады, егер…"], ["Моменты сил относительно опоры равны", "The moments of force about the pivot are equal", "Тірекке қатысты күш моменттері тең болса"], ["Силы обязательно равны", "The forces are necessarily equal", "Күштер міндетті түрде тең болса"], ["Плечи обязательно равны", "The arms are necessarily equal", "Иіндер міндетті түрде тең болса"], ["Введи процент расхождения моментов в последнем опыте.", "Enter the percentage difference of the moments in the last experiment.", "Соңғы тәжірибедегі моменттер айырмасының пайызын енгіз."], ["ПОЛЕВОЙ ЖУРНАЛ · ФИЗИКА В ДЕЙСТВИИ", "FIELD LOG · PHYSICS IN ACTION", "Далалық журнал · Физика іс үстінде"], ["🧠 До опыта: сформулируй гипотезу", "🧠 Before the experiment: state a hypothesis", "🧠 Тәжірибеге дейін: болжам жаса"], ["↺ Начать протокол заново", "↺ Restart the protocol", "↺ Хаттаманы қайта бастау"], ["Выбери прогноз, затем собери не менее двух разных измерений.", "Choose a prediction, then collect at least two different measurements.", "Болжамды таңда, сосын кемінде екі түрлі өлшеу жина."], ["Сначала зафиксируй прогноз. Проведи минимум два опыта с разными условиями, сравни журнал и вычисли ответ. Повтор запуска не считается.", "First commit to a prediction. Run at least two experiments with different conditions, compare the log and compute the answer. A repeated run does not count.", "Алдымен болжамды бекіт. Әртүрлі шарттармен кемінде екі тәжірибе жаса, журналды салыстырып, жауапты есепте. Қайталап жүргізу есепке алынбайды."], ["📒 Журнал измерений", "📒 Measurement log", "📒 Өлшеу журналы"], ["Проведи несколько опытов и сравни показания.", "Run several experiments and compare the readings.", "Бірнеше тәжірибе жүргізіп, көрсеткіштерді салыстыр."], ["Пока нет измерений — нажми «Провести эксперимент».", "No measurements yet — press “Run experiment”.", "Әзірге өлшеу жоқ — «Тәжірибе жүргізу» түймесін бас."], ["Проведи первый опыт, чтобы получить измерения.", "Run the first experiment to get measurements.", "Өлшеу алу үшін бірінші тәжірибені орында."], ["Сначала выбери гипотезу до получения данных.", "First choose a hypothesis before taking data.", "Алдымен деректерді алмай тұрып болжамды таңда."], ["▶ Провести эксперимент", "▶ Run experiment", "▶ Тәжірибе жүргізу"], ["✅ Проверить решение", "✅ Check solution", "✅ Шешімді тексеру"], ["Вывод по данным:", "Conclusion from data:", "Деректер бойынша қорытынды:"], ["Выбери скорость, маршрут и размер временного шага; сравни пройденный путь и время.", "Choose a speed, a route and a time step; compare the distance covered and the time.", "Жылдамдықты, маршрутты және уақыт қадамын таңда; жүрген жол мен уақытты салыстыр."], ["Выбери один из трёх образцов. Измерь массу на весах и объём вытеснением воды; сравни A и B, а C используй как контроль.", "Choose one of the three samples. Measure the mass on the scales and the volume by water displacement; compare A and B and use C as a control.", "Үш үлгінің біреуін таңда. Массаны таразыда, көлемді суды ығыстыру әдісімен өлше; A мен B-ны салыстырып, C-ны бақылау ретінде қолдан."], ["Выбирай груз массой 1, 2 или 3 кг. Перевези его в разные гравитационные поля и сними показания пружинного динамометра.", "Pick a load of 1, 2 or 3 kg. Move it to different gravitational fields and read the spring dynamometer.", "1, 2 немесе 3 кг жүкті таңда. Оны әртүрлі гравитациялық өрістерге көшіріп, серіппелі динамометрдің көрсеткішін ал."], ["Перемещай датчик по водяному столбу и снимай показания манометра на разных глубинах.", "Move the sensor along the water column and read the manometer at different depths.", "Датчикті су бағаны бойымен жылжытып, әртүрлі тереңдікте манометр көрсеткішін ал."], ["Заполняй резервуар порциями воды. Уровень в двух сообщающихся ветвях будет показан отдельно.", "Fill the tank with portions of water. The level in the two communicating branches is shown separately.", "Резервуарды сумен бөліп-бөліп толтыр. Қатынас екі тармақтағы деңгей жеке көрсетіледі."], ["Изменяй груз и глубину погружения кнопками, наблюдая за динамометром и ватерлинией.", "Change the load and the immersion depth with the buttons while watching the dynamometer and the waterline.", "Түймелермен жүкті және батыру тереңдігін өзгертіп, динамометр мен су сызығын бақыла."], ["Капля движется вдоль дороги со скоростью 6 м/с, автобус в том же направлении — 5 м/с. Сравни показания двух наблюдателей.", "A drop moves along the road at 6 m/s; a bus in the same direction moves at 5 m/s. Compare the readings of the two observers.", "Тамшы жол бойымен 6 м/с жылдамдықпен қозғалады, автобус та сол бағытта — 5 м/с. Екі бақылаушының көрсеткіштерін салыстыр."], ["Перемести конец измерительного стержня нажатием на шкалу. Нулевая отметка закреплена.", "Move the end of the measuring rod by tapping the scale. The zero mark is fixed.", "Өлшеуіш таяқшаның ұшын шкаланы басу арқылы жылжыт. Нөлдік белгі бекітілген."], ["Перемещай опору перетаскиванием или нажатием на балку. Сравни моменты сил.", "Move the fulcrum by dragging or tapping the beam. Compare the moments of force.", "Тіректі сүйреп немесе арқалықты басып жылжыт. Күш моменттерін салыстыр."], ["📏 Снять показание", "📏 Take reading", "📏 Көрсеткіш алу"], ["📟 Снять показание", "📟 Take reading", "📟 Көрсеткіш алу"], ["📐 Сравнить уровни", "📐 Compare levels", "📐 Деңгейлерді салыстыру"], ["💧 Подать воду", "💧 Supply water", "💧 Су беру"], ["⚖️ Взвесить", "⚖️ Weigh", "⚖️ Өлшеу"], ["⚖️ Весы", "⚖️ Scales", "⚖️ Таразы"], ["🧪 Мензурка", "🧪 Beaker", "🧪 Мензурка"], ["Поставить образец", "Place the sample", "Үлгіні қою"], ["Погрузить образец", "Immerse the sample", "Үлгіні батыру"], ["Снять образец", "Take the sample", "Үлгіні алу"], ["Поднять капсулу", "Raise the capsule", "Капсуланы көтеру"], ["▶ Записать 5 секунд", "▶ Record 5 seconds", "▶ 5 секундты жазу"], ["⏱ Выполнить шаг", "⏱ Run a step", "⏱ Қадамды орындау"], ["↺ Новый запуск", "↺ New run", "↺ Жаңа жүгірту"], ["🐢 2 м/с", "🐢 2 m/s", "🐢 2 м/с"], ["Длина детали", "Part length", "Бөлшек ұзындығы"], ["Путь зонда", "Probe distance", "Зонд жолы"], ["Время перелёта", "Flight time", "Ұшу уақыты"], ["Масса образца", "Sample mass", "Үлгі массасы"], ["Объём образца", "Sample volume", "Үлгі көлемі"], ["Сила прижатия N", "Pressing force N", "Басу күші N"], ["Поверхность", "Surface", "Беткі қабат"], ["Сила нагрузки", "Load force", "Жүктеме күші"], ["Площадь опоры", "Support area", "Тірек ауданы"], ["Входная сила F₁", "Input force F₁", "Кіріс күші F₁"], ["Площадь малого поршня", "Small piston area", "Кіші поршень ауданы"], ["Площадь большого поршня", "Large piston area", "Үлкен поршень ауданы"], ["Объём погружённой части", "Immersed volume", "Батырылған бөлік көлемі"], ["Масса груза", "Load mass", "Жүк массасы"], ["Сила поршня", "Piston force", "Поршень күші"], ["Путь поршня", "Piston travel", "Поршень жолы"], ["Время хода", "Stroke time", "Жүріс уақыты"], ["Масса капсулы", "Capsule mass", "Капсула массасы"], ["Высота шахты", "Shaft height", "Шахта биіктігі"], ["Пройденная доля падения", "Fraction of the fall completed", "Құлаудың өтілген үлесі"], ["Сила на левом плече", "Force on the left arm", "Сол иіндегі күш"], ["Плечо приложенной силы", "Arm of the applied force", "Түсірілген күштің иіні"], ["Груз на правом плече", "Load on the right arm", "Оң иіндегі жүк"], ["Плечо груза", "Load arm", "Жүк иіні"], ["Лёд · μ=0,15", "Ice · μ=0.15", "Мұз · μ=0,15"], ["Металл · μ=0,35", "Metal · μ=0.35", "Металл · μ=0,35"], ["Резина · μ=0,60", "Rubber · μ=0.60", "Резеңке · μ=0,60"], ["🟡 Масло", "🟡 Oil", "🟡 Май"], ["💧 Вода", "💧 Water", "💧 Су"], ["🧂 Рассол", "🧂 Brine", "🧂 Тұзды ерітінді"], ["Наблюдатель на дороге", "Observer on the road", "Жолдағы бақылаушы"], ["Пассажир в автобусе", "Passenger in the bus", "Автобустағы жолаушы"], ["🌧️ капля", "🌧️ drop", "🌧️ тамшы"], ["🌍 Земля", "🌍 Earth", "🌍 Жер"], ["🌙 Луна", "🌙 Moon", "🌙 Ай"], ["Груз 1 кг", "Load 1 kg", "Жүк 1 кг"], ["Груз 2 кг", "Load 2 kg", "Жүк 2 кг"], ["Груз 3 кг", "Load 3 kg", "Жүк 3 кг"], ["Старт", "Start", "Бастау"], ["маяк", "beacon", "маяк"], ["маршрут", "route", "маршрут"], ["Начать симуляцию", "Start simulation", "Симуляцияны бастау"], ["Фрагменты ключа:", "Key fragments:", "Кілт фрагменттері:"], ["м", "m", "м"], ["см", "cm", "см"], ["мм", "mm", "мм"], ["см²", "cm²", "см²"], ["см³", "cm³", "см³"], ["дм³", "dm³", "дм³"], ["кг/м³", "kg/m³", "кг/м³"], ["кПа", "kPa", "кПа"], ["Н", "N", "Н"], ["г", "g", "г"], ["Вт", "W", "Вт"], ["Дж", "J", "Дж"], ["м/с", "m/s", "м/с"], ["кг", "kg", "кг"], ["т", "t", "т"], ["— Н", "— N", "— Н"], ["— г", "— g", "— г"], ["— см³", "— cm³", "— см³"], ["Вода", "Water", "Су"], ["Масло", "Oil", "Май"], ["Рассол", "Brine", "Тұздық"], ["Мензурка", "Beaker", "Мензурка"], ["← Назад", "← Back", "← Артқа"], ["Аноним", "Anonymous", "Аноним"], ["⬆ На 10 см", "⬆ Up 10 cm", "⬆ 10 см жоғары"], ["⬇ На 10 см", "⬇ Down 10 cm", "⬇ 10 см төмен"], ["⬆ Поднять на 100 см³", "⬆ Raise by 100 cm³", "⬆ 100 см³ көтеру"], ["⬇ Погрузить на 100 см³", "⬇ Lower by 100 cm³", "⬇ 100 см³ батыру"], ["−100 г груза", "−100 g load", "−100 г жүк"], ["+100 г груза", "+100 g load", "+100 г жүк"], ["0 ├────┼────┼────┼────┼────┤ 100 см", "0 ├────┼────┼────┼────┼────┤ 100 cm", "0 ├────┼────┼────┼────┼────┤ 100 см"], ["Опыт", "Trial", "Тәжірибе"], ["Условия:", "Conditions:", "Шарттар:"], ["Показания:", "Readings:", "Көрсеткіштер:"], ["Связь для расчёта:", "Calculation relation:", "Есептеу байланысы:"], ["Целевое условие выполнено", "Target condition met", "Мақсатты шарт орындалды"], ["Условие пока не выполнено", "Condition not met yet", "Шарт әзірге орындалмады"], ["Сопоставь показания опытов и введи собственный расчёт.", "Compare the readings from both trials and enter your own calculation.", "Тәжірибе көрсеткіштерін салыстырып, өз есебіңді енгіз."], ["l(м) = l(см) ÷ 100", "l(m) = l(cm) ÷ 100", "l(м) = l(см) ÷ 100"], ["Контрольная деталь и шкала длины", "Reference part and the length scale", "Бақылау бөлшегі және ұзындық шкаласы"], ["Длина:", "Length:", "Ұзындық:"], ["Путь:", "Distance:", "Жол:"], ["Время:", "Time:", "Уақыт:"], ["Объём:", "Volume:", "Көлем:"], ["Груз:", "Load:", "Жүк:"], ["Масса:", "Mass:", "Масса:"], ["Снятое показание:", "Measured reading:", "Алынған көрсеткіш:"], ["Измени параметры и запусти эксперимент.", "Change the parameters and start the experiment.", "Параметрлерді өзгертіп, тәжірибені баста."], ["Подсказка:", "Hint:", "Кеңес:"], ["Сначала зафиксируй прогноз, затем сравни два опыта и докажи численный вывод.", "First commit to a prediction, then compare two trials and prove the numerical conclusion.", "Алдымен болжамды бекіт, содан кейін екі тәжірибені салыстырып, сандық қорытындыны дәлелде."], ["Следующая глава →", "Next chapter →", "Келесі тарау →"], ["Выбери прогноз, затем собери не менее двух опытов и подтверди численный вывод.", "Choose a prediction, run at least two trials and confirm the numerical conclusion.", "Болжамды таңда, кемінде екі тәжірибе жасап, сандық қорытындыны раста."], ["Этот запуск уже есть в журнале — измени условие.", "This run is already in the log — change a condition.", "Бұл жүгірту журналда бар — шартты өзгерт."], ["Запись добавлена в журнал.", "Entry added to the log.", "Жазба журналға қосылды."], ["Сравни условия и проведи ещё один опыт.", "Compare the conditions and run one more trial.", "Шарттарды салыстырып, тағы бір тәжірибе жаса."], ["Теперь сделай численный вывод и проверь его вместе с гипотезой.", "Now make a numerical conclusion and check it against your prediction.", "Енді сандық қорытынды жасап, оны болжаммен салыстыр."], ["Сначала сними показание прибора.", "First take a reading from the instrument.", "Алдымен аспаптың көрсеткішін ал."], ["Показание занесено в журнал.", "The reading has been logged.", "Көрсеткіш журналға жазылды."], ["Твой расчёт", "Your calculation", "Сенің есебің"], ["Прогресс пилота", "Pilot progress", "Ұшқыш прогресі"], ["Штаб пилота", "Pilot HQ", "Ұшқыш штабы"], ["Тип миссии", "Mission type", "Миссия түрі"], ["Закрыть", "Close", "Жабу"], ["Удалить", "Delete", "Жою"], ["Ссылка на результат", "Result link", "Нәтиже сілтемесі"], ["Навигация по комиксу", "Comic navigation", "Комикс навигациясы"], ["Вверх", "Up", "Жоғары"], ["Влево", "Left", "Солға"], ["Вправо", "Right", "Оңға"], ["Вниз", "Down", "Төмен"], ["Например: §40. Дополнительный урок", "e.g. §40. Extra lesson", "Мысалы: §40. Қосымша сабақ"], ["Выбери наблюдателя", "Choose an observer", "Бақылаушыны таңда"], ["Наблюдение ещё не записано", "Observation not recorded yet", "Бақылау әзірге жазылмаған"], ["измерение ещё не подтверждено", "measurement not confirmed yet", "өлшем әзірге расталмаған"], ["Записать 5 секунд", "Record 5 seconds", "5 секундты жазу"], ["Снять показание", "Take reading", "Көрсеткішті алу"], ["Подать воду", "Supply water", "Су беру"], ["Сравнить уровни", "Compare levels", "Деңгейлерді салыстыру"], ["Сформулируй прогноз", "Make a prediction", "Болжам жаса"], ["👁️ Ядро Астериона уничтожено!", "👁️ The Asterion core is destroyed!", "👁️ Астерион ядросы жойылды!"], ["📥 Результат ученика получен", "📥 Student result received", "📥 Оқушы нәтижесі алынды"], ["📥 Назначенный урок добавлен по QR-коду", "📥 Assigned lesson added via QR code", "📥 Тағайындалған сабақ QR-код арқылы қосылды"], ["Проверка решения недоступна без эксперимента.", "Verification is unavailable without an experiment.", "Тәжірибесіз шешімді тексеру мүмкін емес."], ["Выбирай для сложного повторного прохождения и тренировки устойчивости.", "Choose it for a tough replay and training your resilience.", "Күрделі қайта өту және төзімділікті жаттықтыру үшін таңда."]];
  const MAP = new Map();
  TRIPLES.forEach(t => MAP.set(t[0], { en: t[1], kk: t[2] }));
  const PIECES = TRIPLES.slice().sort((a, b) => b[0].length - a[0].length);
  const EN_UNITS = [
    [/(\d)\s?кг\/м³/g, "$1 kg/m³"],
    [/(\d)\s?Н·см/g, "$1 N·cm"],
    [/(\d)\s?кПа/g, "$1 kPa"],
    [/(\d)\s?см³/g, "$1 cm³"],
    [/(\d)\s?см²/g, "$1 cm²"],
    [/(\d)\s?дм³/g, "$1 dm³"],
    [/(\d)\s?м\/с/g, "$1 m/s"],
    [/(\d)\s?кг(?![А-Яа-яЁёA-Za-z])/g, "$1 kg"],
    [/(\d)\s?Дж(?![А-Яа-яЁёA-Za-z])/g, "$1 J"],
    [/(\d)\s?Вт(?![А-Яа-яЁёA-Za-z])/g, "$1 W"],
    [/(\d)\s?см(?![А-Яа-яЁёA-Za-z])/g, "$1 cm"],
    [/(\d)\s?мм(?![А-Яа-яЁёA-Za-z])/g, "$1 mm"],
    [/(\d)\s?Н(?![А-Яа-яЁёA-Za-z])/g, "$1 N"],
    [/(\d)\s?г(?![А-Яа-яЁёA-Za-z])/g, "$1 g"],
    [/(\d)\s?м(?![А-Яа-яЁёA-Za-z])/g, "$1 m"],
    [/(\d)\s?с(?![А-Яа-яЁёA-Za-z])/g, "$1 s"],
    [/(\d)\s?т(?![А-Яа-яЁёA-Za-z])/g, "$1 t"]
  ];

  function enUnits(s) {
    let out = String(s);
    if (!/\d/.test(out)) return out;
    for (const [re, rep] of EN_UNITS) out = out.replace(re, rep);
    return out;
  }
  const pick = (s, L) => { const e = MAP.get(String(s).trim()); return (e && e[L]) || s; };
  const RULES = [
    [/^(.+?) · уровень (\d+)$/, (m, r, n) => ({ en: pick(r, "en") + " · level " + n, kk: pick(r, "kk") + " · деңгей " + n })],
    [/^(\d+) \/ (\d+) XP до следующего уровня$/, (m, a, b) => ({ en: a + " / " + b + " XP to the next level", kk: a + " / " + b + " XP келесі деңгейге дейін" })],
    [/^Попытки: (\d+) \/ (\d+)$/, (m, a, b) => ({ en: "Attempts: " + a + " / " + b, kk: "Әрекеттер: " + a + " / " + b })],
    [/^Подсказки: (\d+)$/, (m, a) => ({ en: "Hints: " + a, kk: "Кеңестер: " + a })],
    [/^Фрагмент (\d+) из (\d+) получен/, (m, a, b) => ({ en: "Fragment " + a + " of " + b + " obtained", kk: a + " / " + b + " фрагмент алынды" })],
    [/^Задание #(\d+)$/, (m, a) => ({ en: "Task #" + a, kk: "Тапсырма #" + a })],
    [/^(\d+(?:[.,]\d+)?) м · маяк$/, (m, n) => ({ en: n + " m · beacon", kk: n + " м · маяк" })],
    [/^([ABC]) · (.+)$/, (m, k, rest) => ({ en: k + " · " + pick(rest, "en"), kk: k + " · " + pick(rest, "kk") })],
    [/^Скорость: (.+?) · шаг (.+)$/, (m, v, st) => ({ en: "Speed: " + enUnits(v) + " · step " + enUnits(st), kk: "Жылдамдық: " + v + " · қадам " + st })],
    [/^Жидкость: (.+?) · ρ=(.+)$/, (m, f, r) => ({ en: "Liquid: " + pick(f, "en") + " · ρ=" + enUnits(r), kk: "Сұйықтық: " + pick(f, "kk") + " · ρ=" + r })],
    [/^(.+?) · (\d+) заданий\. Выбери режим миссии\.$/, (m, n, c) => ({ en: n + " · " + c + " tasks. Choose the mission mode.", kk: n + " · " + c + " тапсырма. Миссия режимін таңда." })],
    [/^(\d+) в очереди$/, (m, n) => ({ en: n + " in queue", kk: "кезекте " + n })],
    [/^(.+?) · (.+?) LVL (\d+)$/, (m, a, b, n) => ({ en: pick(a, "en") + " · " + pick(b, "en") + " LVL " + n, kk: pick(a, "kk") + " · " + pick(b, "kk") + " LVL " + n })],
    [/^(.+?) · (\d+)\/(\d+)$/, (m, a, x, y) => ({ en: pick(a, "en") + " · " + x + "/" + y, kk: pick(a, "kk") + " · " + x + "/" + y })],
    [/^🎉 Новое звание! Уровень (\d+) · \+1 очко навыка$/, (m, n) => ({ en: "🎉 New rank! Level " + n + " · +1 skill point", kk: "🎉 Жаңа дәреже! " + n + "-деңгей · +1 дағды ұпайы" })],
    [/^Путь: (.+)$/, (m, v) => ({ en: "Distance: " + enUnits(v), kk: "Жол: " + v })],
    [/^Время: (.+)$/, (m, v) => ({ en: "Time: " + enUnits(v), kk: "Уақыт: " + v })],
    [/^Скорость: (.+?)(?: · шаг (.+))?$/, (m, v, st) => ({ en: "Speed: " + enUnits(v) + (st ? " · step " + enUnits(st) : ""), kk: "Жылдамдық: " + v + (st ? " · қадам " + st : "") })],
    [/^Масса: (.+)$/, (m, v) => ({ en: "Mass: " + enUnits(v), kk: "Масса: " + v })],
    [/^Объём: (.+)$/, (m, v) => ({ en: "Volume: " + enUnits(v), kk: "Көлем: " + v })],
    [/^Груз: (.+)$/, (m, v) => ({ en: "Load: " + enUnits(v), kk: "Жүк: " + v })],
    [/^Fₐ: (.+)$/, (m, v) => ({ en: "Fₐ: " + enUnits(v), kk: "Fₐ: " + v })],
    [/^P груза: (.+)$/, (m, v) => ({ en: "Load weight P: " + enUnits(v), kk: "Жүк салмағы P: " + v })],
    [/^Левая ветвь: (.+)$/, (m, v) => ({ en: "Left branch: " + enUnits(v), kk: "Сол тармақ: " + v })],
    [/^Правая ветвь: (.+)$/, (m, v) => ({ en: "Right branch: " + enUnits(v), kk: "Оң тармақ: " + v })],
    [/^Жидкость: (.+?) · ρ=(.+)$/, (m, f, r) => ({ en: "Liquid: " + pick(f, "en") + " · ρ=" + enUnits(r), kk: "Сұйықтық: " + pick(f, "kk") + " · ρ=" + r })],
    [/^Скорость капли относительно дороги: (.+)$/, (m, v) => ({ en: "Speed of the drop relative to the road: " + enUnits(v), kk: "Тамшының жолға қатысты жылдамдығы: " + v })],
    [/^🎯 Маршрут (\d+) м$/, (m, n) => ({ en: "🎯 Route " + n + " m", kk: "🎯 Маршрут " + n + " м" })],
    [/^Шаг (\d+) с$/, (m, n) => ({ en: "Step " + n + " s", kk: "Қадам " + n + " с" })],
    [/^Образец ([ABC])$/, (m, k) => ({ en: "Sample " + k, kk: "Үлгі " + k })],
    [/^Гипотеза: (зафиксирована|не выбрана) · Различных опытов: (\d+)\/(\d+) · Численный вывод: (сходится|проверь данные)$/, (m, st, a, b, res) => ({ en: "Prediction: " + (st === "зафиксирована" ? "committed" : "not chosen") + " · Distinct trials: " + a + "/" + b + " · Numerical conclusion: " + (res === "сходится" ? "matches" : "check the data"), kk: "Болжам: " + (st === "зафиксирована" ? "бекітілді" : "таңдалмады") + " · Түрлі тәжірибелер: " + a + "/" + b + " · Сандық қорытынды: " + (res === "сходится" ? "сәйкеседі" : "деректерді тексер") })],
    [/^Опыт (\d+) ([✓·])$/, (m, n, mark) => ({ en: "Trial " + n + " " + mark, kk: "Тәжірибе " + n + " " + mark })],
    [/^🎯 Маршрут (\d+) м$/, (m, n) => ({ en: "🎯 Route " + n + " m", kk: "🎯 Маршрут " + n + " м" })],
    [/^📒 (Запись добавлена в журнал\.|Этот запуск уже есть в журнале — измени условие\.) Различных опытов: (\d+) \/ (\d+)\. (.+)$/, (m, head, a, b, tail) => ({ en: "📒 " + (head.indexOf("Запись") === 0 ? "Entry added to the log." : "This run is already in the log — change a condition.") + " Distinct trials: " + a + " / " + b + ". " + (tail.indexOf("Сравни") === 0 ? "Compare the conditions and run one more trial." : "Now make a numerical conclusion and check it against your prediction."), kk: "📒 " + (head.indexOf("Запись") === 0 ? "Жазба журналға қосылды." : "Бұл жүгірту журналда бар — шартты өзгерт.") + " Түрлі тәжірибелер: " + a + " / " + b + ". " + (tail.indexOf("Сравни") === 0 ? "Шарттарды салыстырып, тағы бір тәжірибе жаса." : "Енді сандық қорытынды жасап, оны болжаммен салыстыр.") })],
    [/^×(\d+(?:\.\d+)?) XP · до \+(\d+) 💎$/, (m, a, b) => ({ en: "×" + a + " XP · up to +" + b + " 💎", kk: "×" + a + " XP · +" + b + " 💎 дейін" })]
  ];
  const orig = new WeakMap();
  const applied = new WeakMap();
  const attrOrig = new WeakMap();
  const busy = { on: false };
  function lang() { return (typeof I18n !== "undefined" && I18n.currentLang) || "ru"; }

  function translate(value) {
    const L = lang();
    if (L === "ru" || !value) return value;
    const trimmed = value.trim();
    if (!trimmed) return value;
    let out = null;
    const exact = MAP.get(trimmed);
    if (exact && exact[L]) out = exact[L];
    if (out === null) {
      for (const rule of RULES) {
        const m = trimmed.match(rule[0]);
        if (m) { const r = rule[1](...m); if (r && r[L]) { out = r[L]; break; } }
      }
    }
    if (out === null) {
      let s = trimmed;
      const idx = L === "en" ? 1 : 2;
      for (const p of PIECES) {
        if (p[0].length < 12 && !/[:：]$/.test(p[0])) continue;
        if (s.indexOf(p[0]) !== -1 && p[idx]) s = s.split(p[0]).join(p[idx]);
      }
      if (L === "en" && /\d/.test(s) && s.length <= 32) {
        for (const [re, rep] of EN_UNITS) s = s.replace(re, rep);
      }
      if (s === trimmed) return value;
      out = s;
    }
    return value.replace(trimmed, out);
  }

  function handleText(node) {
    const parent = node.parentElement;
    if (!parent) return;
    const tag = parent.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return;
    if (parent.closest("[data-i18n], #field-simulations-section, #field-sim-modal, #pq-trilogy-modal")) return;
    const cur = node.nodeValue;
    if (!cur) return;

    if (lang() === "ru") {
      const saved = orig.get(node);
      if (saved !== undefined && saved !== cur) { node.nodeValue = saved; applied.delete(node); }
      return;
    }
    if (!/[А-Яа-яЁёҚқҒғҮүҰұӨөӘәІіҢңA-Za-z]/.test(cur)) return;

    const lastApplied = applied.get(node);
    let src = orig.get(node);
    if (src === undefined || (lastApplied !== undefined && cur !== lastApplied && cur !== src)) {
      src = cur;
      orig.set(node, cur);
      applied.delete(node);
    }
    const next = translate(src);
    if (next !== cur) {
      applied.set(node, next);
      node.nodeValue = next;
    } else if (next === cur) {
      applied.set(node, cur);
    }
  }

  function handleAttrs(el) {
    if (!el || el.nodeType !== 1) return;
    let store = attrOrig.get(el);
    ["placeholder", "title", "aria-label", "alt"].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      const base = store && store[attr] !== undefined ? store[attr] : el.getAttribute(attr);
      if (!base) return;
      if (lang() === "ru") {
        if (store && store[attr] !== undefined) el.setAttribute(attr, store[attr]);
        return;
      }
      if (!store) { store = {}; attrOrig.set(el, store); }
      if (store[attr] === undefined) store[attr] = base;
      const next = translate(store[attr]);
      if (next !== store[attr]) el.setAttribute(attr, next);
    });
  }

  function scan(root) {
    if (busy.on) return;
    const target = root && root.nodeType === 1 ? root : document.body;
    if (!target) return;
    busy.on = true;
    try {
      handleAttrs(target);
      const walk = document.createTreeWalker(target, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
      let n = walk.nextNode();
      while (n) {
        if (n.nodeType === 3) handleText(n); else handleAttrs(n);
        n = walk.nextNode();
      }
    } finally { busy.on = false; }
  }

  let timer = null;
  function schedule() {
    if (timer) return;
    timer = setTimeout(() => { timer = null; scan(document.body); }, 20);
  }

  function hook() {
    if (typeof I18n !== "undefined" && !I18n.__pqL10nHooked) {
      const baseApply = I18n.apply.bind(I18n);
      I18n.apply = function () { baseApply(); schedule(); };
      const baseSet = I18n.setLanguage.bind(I18n);
      I18n.setLanguage = function (l) { baseSet(l); setTimeout(() => scan(document.body), 30); };
      I18n.__pqL10nHooked = true;
    }
    scan(document.body);
    try {
      new MutationObserver(muts => {
        if (busy.on || lang() === "ru") return;
        for (const m of muts) { if (m.type === "childList" || m.type === "characterData") { schedule(); return; } }
      }).observe(document.body, { childList: true, subtree: true, characterData: true });
    } catch (_) {}
  }

  setTimeout(hook, 250);
  window.PQ_UI_L10N = { scan, translate, map: MAP };
})();

