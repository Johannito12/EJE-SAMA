const CACHE_NAME = "v1";

self.addEventListener("install", (event) => {
    console.log("Service Worker installé");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/index.js",
                "/manifest.json",
                "/backgroundSection/gabimaru.jpg",
                "/backgroundSection/goku.jpg",
                "/backgroundSection/demon.jpg",
                "/backgroundSection/blue.jpg",
                "/backgroundSection/gojo.jpg",
                "/backgroundSection/sukuna.jpg",
                "/backgroundSection/sung.jpg",
                "/backgroundSection/izuku.jpg",
                "/backgroundSection/kirua.jpg",
                "/backgroundSection/madara.jpg",
                "/backgroundSection/Anime/blackclover.jpg",
                "/backgroundSection/Anime/blueLock.jpg",
                "/backgroundSection/Anime/Drstone.jpg",
                "/backgroundSection/Anime/Frieren.jpg",
                "/backgroundSection/Anime/hell's paradise.jpg",
                "/backgroundSection/Anime/Hunterxhunter.jpg",
                "/backgroundSection/Anime/JJk.jpg",
                "/backgroundSection/Anime/MHA.jpg",
                "/backgroundSection/Anime/Redoofhealer.jpg",
                "/backgroundSection/Anime/Snk.jpg",
                "/backgroundSection/Anime/SoloLeveling.jpg",
                "/backgroundSection/Anime/TokyoRevengers.jpg",
                "/backgroundSection/Manga/berserk.jpg",
                "/backgroundSection/Manga/bleach.jpg",
                "/backgroundSection/Manga/chainsawman.jpg",
                "/backgroundSection/Manga/conan.jpg",
                "/backgroundSection/Manga/dbz.jpg",
                "/backgroundSection/Manga/demonslayer.jpg",
                "/backgroundSection/Manga/doraemon.jpg",
                "/backgroundSection/Manga/fullmetal.jpg",
                "/backgroundSection/Manga/naruto.jpg",
                "/backgroundSection/Manga/onepiece.jpg",
                "/backgroundSection/Manga/pokemon.jpg",
                "/backgroundSection/Manga/slamdunk.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

