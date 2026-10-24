/* ============================================================
   ФИЗИКА-КВЕСТ — Service Worker (офлайн-режим PWA)
   Стратегия: shell-first для навигации, cache-first для ресурсов,
   докачка недостающих файлов из сети и сохранение в кэш.
   ============================================================ */
const PQ_VERSION = "pq-v3.8.0";
const PQ_SHELL = [
    "./",
    "./index.html",
    "./play.html",
    "./screenshots.html",
    "./manifest.json",
    "./shared/styles.css",
    "./7/tasks-types.js",
    "./8/tasks-types.js",
    "./9/tasks-types.js",
    "./shared/platform.css",
    "./shared/account.js",
    "./shared/theme.js",
    "./shared/catalog-789.js",
    "./shared/i18n.js",
    "./shared/levels.js",
    "./shared/storage.js",
    "./shared/marks.js",
    "./shared/teacher.js",
    "./shared/game.js",
    "./shared/main.js",
    "./shared/qrcode.js",
    "./shared/rpg-data.js",
    "./shared/rpg-core.js",
    "./shared/rpg-ui.js",
    "./shared/rpg-extra.js",
    "./shared/rpg-teacher.js",
    "./shared/rpg-assign.js",
    "./shared/rpg-boot.js",
    "./shared/sound.js",
    "./shared/level-themes.js",
    "./shared/problem-solver.js",
    "./shared/team-battle.js",
    "./shared/print-cards.js",
    "./shared/certificate.js",
    "./shared/offline.js",
    "./shared/offline-manifest.js",
    "./shared/conspect-examples.js",
    "./shared/locales-base.js",
    "./shared/oformlenie.js",
    "./shared/story-cast.js",
    "./shared/trilogy-comics-extra.js",
    "./shared/trilogy-diary.js",
    "./shared/lab-games.js",
    "./shared/sim-light.js",
    "./shared/sim-light-7.js",
    "./shared/simulators-89.js",
    "./7/simulators.js",
    "./7/content.js",
    "./8/content.js",
    "./9/content.js",
    "./9/extras.js",
    "./assets/icons/icon-180.png",
    "./assets/icons/icon-192.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(PQ_VERSION).then((cache) => {
            // Кэшируем оболочку по одному файлу: один сбой не ломает установку
            return Promise.all(PQ_SHELL.map((url) => cache.add(url).catch(() => null)));
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== PQ_VERSION).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

function isNavigation(request) {
    return request.mode === "navigate" || (request.method === "GET" && (request.headers.get("accept") || "").indexOf("text/html") !== -1);
}

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    if (isNavigation(request)) {
        event.respondWith(
            fetch(request).then((response) => {
                const copy = response.clone();
                caches.open(PQ_VERSION).then((cache) => cache.put(request, copy)).catch(() => {});
                return response;
            }).catch(() => {
                return caches.match(request).then((hit) => hit || caches.match("./play.html") || caches.match("./index.html"));
            })
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((hit) => {
            if (hit) return hit;
            return fetch(request).then((response) => {
                if (response && response.status === 200 && (response.type === "basic" || response.type === "default")) {
                    const copy = response.clone();
                    caches.open(PQ_VERSION).then((cache) => cache.put(request, copy)).catch(() => {});
                }
                return response;
            }).catch(() => hit);
        })
    );
});
