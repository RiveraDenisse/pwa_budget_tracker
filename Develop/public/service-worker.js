const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/index.js",
  "/js/idb.js",
  // "/manifest.json",
  "/service-worker.js",
];

const APP_PREFIX = "Budget-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

//event listener
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing cache : " + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
