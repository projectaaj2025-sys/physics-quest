/* ============================================================
   PQ OFFLINE — PWA-кэш (Service Worker) и скачивание игры в ZIP
   Интернет в кабинете физики нестабилен: после первого запуска
   игра работает офлайн, а кнопка «Скачать игру» собирает ZIP
   прямо в браузере (без сервера и сторонних библиотек).
   ============================================================ */
(function () {
    "use strict";

    const L = {
        ru: {
            open: "Офлайн-версия",
            title: "Играть без интернета",
            lead: "Загрузите игру один раз — дальше она открывается без сети. Это удобно в кабинете физики, где Wi-Fi нестабилен.",
            swReady: "✅ Офлайн-кэш активен: страницы и задания сохранены в браузере.",
            swPending: "⏳ Service Worker ещё регистрируется. Обновите страницу через пару секунд.",
            swOff: "⚠️ Офлайн-кэш недоступен (нужен HTTPS или localhost). Можно скачать ZIP-архив игры.",
            install: "📲 Установить как приложение",
            downloadLight: "💾 Скачать игру (без PDF, ~7 МБ)",
            downloadFull: "💾 Скачать полный архив (~23 МБ)",
            downloading: "Собираем архив…",
            done: "Архив готов — распакуйте и откройте index.html",
            fail: "Не удалось собрать архив. Проверьте соединение.",
            note: "В ZIP входит весь портал: 3 игры, задания, симуляторы, конспекты и комиксы. После распаковки откройте index.html — все ссылки относительные, интернет не нужен.",
            close: "Закрыть",
            offline: "📴 Офлайн",
            online: "🌐 Онлайн",
            installHint: "Кнопка установки появляется в Chrome/Edge, когда сайт открыт по HTTPS.",
            cacheInfo: "Сохранено файлов"
        },
        en: {
            open: "Offline version",
            title: "Play without the internet",
            lead: "Load the game once and it will open without a network. Perfect for a physics classroom with unstable Wi-Fi.",
            swReady: "✅ Offline cache is active: pages and tasks are stored in your browser.",
            swPending: "⏳ The Service Worker is still registering. Refresh in a couple of seconds.",
            swOff: "⚠️ Offline cache is unavailable (HTTPS or localhost required). You can still download the ZIP archive.",
            install: "📲 Install as an app",
            downloadLight: "💾 Download game (no PDF, ~7 MB)",
            downloadFull: "💾 Download full archive (~23 MB)",
            downloading: "Packing the archive…",
            done: "Archive is ready — unzip it and open index.html",
            fail: "Failed to build the archive. Check your connection.",
            note: "The ZIP contains the whole portal: 3 games, tasks, simulators, notes and comics. After unzipping, open index.html — all links are relative, no internet needed.",
            close: "Close",
            offline: "📴 Offline",
            online: "🌐 Online",
            installHint: "The install button appears in Chrome/Edge when the site is served over HTTPS.",
            cacheInfo: "Files cached"
        },
        kk: {
            open: "Офлайн нұсқа",
            title: "Интернетсіз ойнау",
            lead: "Ойынды бір рет жүктеңіз — кейін ол желісіз ашылады. Wi-Fi тұрақсыз физика кабинеті үшін ыңғайлы.",
            swReady: "✅ Офлайн кэш қосулы: беттер мен тапсырмалар браузерде сақталған.",
            swPending: "⏳ Service Worker тіркелуде. Бірнеше секундтан кейін бетті жаңартыңыз.",
            swOff: "⚠️ Офлайн кэш қолжетімсіз (HTTPS немесе localhost қажет). ZIP мұрағатын жүктеуге болады.",
            install: "📲 Қолданба ретінде орнату",
            downloadLight: "💾 Ойынды жүктеу (PDF жоқ, ~7 МБ)",
            downloadFull: "💾 Толық мұрағатты жүктеу (~23 МБ)",
            downloading: "Мұрағат жиналуда…",
            done: "Мұрағат дайын — ашып, index.html файлын ашыңыз",
            fail: "Мұрағатты жинау мүмкін болмады. Байланысты тексеріңіз.",
            note: "ZIP порталдың барлығын қамтиды: 3 ойын, тапсырмалар, симуляторлар, конспектілер мен комикстер. Ашқаннан кейін index.html ашыңыз — барлық сілтемелер салыстырмалы, интернет қажет емес.",
            close: "Жабу",
            offline: "📴 Офлайн",
            online: "🌐 Онлайн",
            installHint: "Орнату түймесі HTTPS арқылы ашылған сайтта Chrome/Edge-те пайда болады.",
            cacheInfo: "Сақталған файлдар"
        }
    };
    function lang() {
        try { return (typeof I18n !== "undefined" && I18n.currentLang) || "ru"; } catch (_) { return "ru"; }
    }
    function t(key) {
        const l = lang();
        return (L[l] && L[l][key]) || L.ru[key] || key;
    }
    function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    // ---------- CRC32 для ZIP ----------
    let CRC_TABLE = null;
    function crcTable() {
        if (CRC_TABLE) return CRC_TABLE;
        CRC_TABLE = new Uint32Array(256);
        for (let n = 0; n < 256; n++) {
            let c = n;
            for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            CRC_TABLE[n] = c >>> 0;
        }
        return CRC_TABLE;
    }
    function crc32(buf) {
        const table = crcTable();
        let crc = 0xffffffff;
        for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
        return (crc ^ 0xffffffff) >>> 0;
    }

    function buildZip(entries) {
        const enc = new TextEncoder();
        const parts = [];
        const central = [];
        let offset = 0;
        entries.forEach((entry) => {
            const name = enc.encode(entry.name);
            const data = entry.data;
            const crc = crc32(data);
            const local = new Uint8Array(30 + name.length);
            const dv = new DataView(local.buffer);
            dv.setUint32(0, 0x04034b50, true);
            dv.setUint16(4, 20, true);
            dv.setUint16(6, 0x0800, true);
            dv.setUint16(8, 0, true);
            dv.setUint16(10, 0, true);
            dv.setUint16(12, 0, true);
            dv.setUint32(14, crc, true);
            dv.setUint32(18, data.length, true);
            dv.setUint32(22, data.length, true);
            dv.setUint16(26, name.length, true);
            dv.setUint16(28, 0, true);
            local.set(name, 30);
            parts.push(local, data);
            central.push({ name: name, crc: crc, size: data.length, offset: offset });
            offset += local.length + data.length;
        });
        const centralParts = [];
        let centralSize = 0;
        central.forEach((c) => {
            const head = new Uint8Array(46 + c.name.length);
            const dv = new DataView(head.buffer);
            dv.setUint32(0, 0x02014b50, true);
            dv.setUint16(4, 20, true);
            dv.setUint16(6, 20, true);
            dv.setUint16(8, 0x0800, true);
            dv.setUint16(10, 0, true);
            dv.setUint16(12, 0, true);
            dv.setUint16(14, 0, true);
            dv.setUint32(16, c.crc, true);
            dv.setUint32(20, c.size, true);
            dv.setUint32(24, c.size, true);
            dv.setUint16(28, c.name.length, true);
            dv.setUint16(30, 0, true);
            dv.setUint16(32, 0, true);
            dv.setUint16(34, 0, true);
            dv.setUint16(36, 0, true);
            dv.setUint32(38, 0, true);
            dv.setUint32(42, c.offset, true);
            head.set(c.name, 46);
            centralParts.push(head);
            centralSize += head.length;
        });
        const end = new Uint8Array(22);
        const dv = new DataView(end.buffer);
        dv.setUint32(0, 0x06054b50, true);
        dv.setUint16(8, central.length, true);
        dv.setUint16(10, central.length, true);
        dv.setUint32(12, centralSize, true);
        dv.setUint32(16, offset, true);
        return new Blob([...parts, ...centralParts, end], { type: "application/zip" });
    }

    const Offline = {
        installPrompt: null,
        swReady: false,
        _inited: false,
        _downloading: false,

        init() {
            if (this._inited) return;
            this._inited = true;
            this.registerSW();
            this.injectEntry();
            window.addEventListener("beforeinstallprompt", (e) => {
                e.preventDefault();
                this.installPrompt = e;
                this.syncModal();
            });
            window.addEventListener("online", () => this.syncBadge());
            window.addEventListener("offline", () => this.syncBadge());
            document.addEventListener("pq:lang-changed", () => {
                if (document.getElementById("pq-offline-modal")) this.buildModal(true);
                const btn = document.getElementById("pq-offline-open");
                if (btn) btn.innerHTML = `<span>📥</span><span>${esc(t("open"))}</span>`;
            });
        },

        registerSW() {
            if (!("serviceWorker" in navigator)) { this.syncModal(); return; }
            if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
                this.syncModal();
                return;
            }
            navigator.serviceWorker.register("./sw.js", { scope: "./" }).then((reg) => {
                this.swReady = true;
                this.syncModal();
                if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
            }).catch(() => { this.swReady = false; this.syncModal(); });
            navigator.serviceWorker.addEventListener("controllerchange", () => { this.swReady = true; this.syncModal(); });
        },

        injectEntry() {
            const profile = document.getElementById("profile-screen");
            if (!profile) return;
            if (document.getElementById("pq-offline-open")) return;
            const back = document.getElementById("btn-profile-back");
            const btn = document.createElement("button");
            btn.type = "button";
            btn.id = "pq-offline-open";
            btn.className = "btn btn-secondary pq-offline-open";
            btn.innerHTML = `<span>📥</span><span>${esc(t("open"))}</span>`;
            btn.addEventListener("click", () => this.open());
            if (back && back.parentNode) back.parentNode.insertBefore(btn, back);
            else profile.appendChild(btn);
            this.syncBadge();
        },

        syncBadge() {
            const badge = document.getElementById("pq-net-badge");
            if (!badge) return;
            const online = navigator.onLine !== false;
            badge.textContent = online ? t("online") : t("offline");
            badge.classList.toggle("is-offline", !online);
        },

        buildModal(rebuild) {
            if (!rebuild && document.getElementById("pq-offline-modal")) return;
            document.getElementById("pq-offline-modal")?.remove();
            const modal = document.createElement("div");
            modal.id = "pq-offline-modal";
            modal.className = "modal pq-offline-modal";
            modal.innerHTML = `
                <div class="modal-content pq-offline-content">
                    <div class="pq-offline-head">
                        <div>
                            <h2>📥 ${esc(t("title"))}</h2>
                            <p>${esc(t("lead"))}</p>
                        </div>
                        <button type="button" class="btn-icon-only" id="pq-offline-x">×</button>
                    </div>
                    <div class="pq-offline-status ${this.swReady ? "ok" : "wait"}">
                        ${esc(this.swReady ? t("swReady") : ("serviceWorker" in navigator ? t("swPending") : t("swOff")))}
                    </div>
                    <div class="pq-offline-actions">
                        <button type="button" class="btn btn-primary" id="pq-offline-install" ${this.installPrompt ? "" : "disabled"}>${esc(t("install"))}</button>
                        <button type="button" class="btn btn-secondary" id="pq-offline-light">${esc(t("downloadLight"))}</button>
                        <button type="button" class="btn btn-secondary" id="pq-offline-full">${esc(t("downloadFull"))}</button>
                    </div>
                    <p class="pq-offline-hint">${esc(t("installHint"))}</p>
                    <p class="pq-offline-note">${esc(t("note"))}</p>
                    <div id="pq-offline-progress" class="pq-offline-progress" hidden>
                        <div class="pq-offline-bar"><i id="pq-offline-bar-fill"></i></div>
                        <span id="pq-offline-progress-text">${esc(t("downloading"))}</span>
                    </div>
                    <div class="pq-offline-foot">
                        <span class="pq-net-badge" id="pq-net-badge">${esc(navigator.onLine ? t("online") : t("offline"))}</span>
                        <button type="button" class="btn btn-secondary" id="pq-offline-close">${esc(t("close"))}</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.addEventListener("click", (e) => { if (e.target === modal) this.close(); });
            modal.querySelector("#pq-offline-x").addEventListener("click", () => this.close());
            modal.querySelector("#pq-offline-close").addEventListener("click", () => this.close());
            modal.querySelector("#pq-offline-install").addEventListener("click", async () => {
                if (!this.installPrompt) return;
                this.installPrompt.prompt();
                try { await this.installPrompt.userChoice; } catch (_) {}
                this.installPrompt = null;
                this.syncModal();
            });
            modal.querySelector("#pq-offline-light").addEventListener("click", () => this.download(false));
            modal.querySelector("#pq-offline-full").addEventListener("click", () => this.download(true));
        },

        syncModal() {
            const modal = document.getElementById("pq-offline-modal");
            if (!modal) return;
            const install = modal.querySelector("#pq-offline-install");
            if (install) install.disabled = !this.installPrompt;
            const status = modal.querySelector(".pq-offline-status");
            if (status) {
                status.textContent = this.swReady ? t("swReady") : (("serviceWorker" in navigator) ? t("swPending") : t("swOff"));
                status.className = "pq-offline-status " + (this.swReady ? "ok" : "wait");
            }
            this.syncBadge();
        },

        open() {
            this.buildModal(false);
            document.getElementById("pq-offline-modal").classList.add("active");
            this.syncModal();
        },

        close() {
            document.getElementById("pq-offline-modal")?.classList.remove("active");
        },

        manifest() {
            const list = Array.isArray(window.PQ_OFFLINE_FILES) ? window.PQ_OFFLINE_FILES.slice() : [];
            return list.length ? list : ["index.html", "play.html", "manifest.json", "sw.js", "shared/styles.css", "shared/platform.css"];
        },

        async download(full) {
            if (this._downloading) return;
            this._downloading = true;
            const progress = document.getElementById("pq-offline-progress");
            const fill = document.getElementById("pq-offline-bar-fill");
            const text = document.getElementById("pq-offline-progress-text");
            if (progress) progress.hidden = false;
            const files = this.manifest().filter((f) => {
                if (f === "sw.js" || f.endsWith(".zip")) return false;
                if (!full && (/^assets\/pdf\//.test(f) || /^assets\/comics\//.test(f))) return false;
                return true;
            });
            const entries = [];
            let done = 0;
            const update = () => {
                const pct = Math.round((done / files.length) * 100);
                if (fill) fill.style.width = pct + "%";
                if (text) text.textContent = `${t("downloading")} ${done} / ${files.length}`;
            };
            update();
            const worker = async (file) => {
                try {
                    const res = await fetch("./" + file, { cache: "force-cache" });
                    if (!res.ok) return;
                    const buf = new Uint8Array(await res.arrayBuffer());
                    entries.push({ name: file, data: buf });
                } catch (_) {} finally {
                    done++;
                    update();
                }
            };
            const queue = files.slice();
            const runners = Array.from({ length: 5 }).map(async () => {
                while (queue.length) {
                    const file = queue.shift();
                    await worker(file);
                }
            });
            try {
                await Promise.all(runners);
                if (!entries.length) throw new Error("empty");
                const blob = buildZip(entries);
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = full ? "physics-quest-full.zip" : "physics-quest-offline.zip";
                document.body.appendChild(link);
                link.click();
                link.remove();
                setTimeout(() => URL.revokeObjectURL(url), 60000);
                if (text) text.textContent = t("done");
                if (typeof showNotification === "function") showNotification(t("done"), "success");
            } catch (e) {
                if (text) text.textContent = t("fail");
                if (typeof showNotification === "function") showNotification(t("fail"), "danger");
            } finally {
                this._downloading = false;
                if (progress) setTimeout(() => { progress.hidden = true; if (fill) fill.style.width = "0%"; }, 4000);
            }
        }
    };

    window.PQOffline = Offline;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(() => Offline.init(), 600));
    } else {
        setTimeout(() => Offline.init(), 600);
    }
})();
