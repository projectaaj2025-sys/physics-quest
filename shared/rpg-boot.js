/* ===== Инициализация единой RPG-системы и Кабинета учителя 2.0 ===== */
window.bootPhysicsQuestRPG = function () {
    if (window.__rpgBooted) return;
    window.__rpgBooted = true;
    try {
        if (typeof RPG !== "undefined" && typeof RPG.boot === "function") {
            RPG.boot();
        }
    } catch (e) {
        console.error("RPG boot error:", e);
    }
};
