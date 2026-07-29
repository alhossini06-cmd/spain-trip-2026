const CACHE_NAME = 'spain-trip-v1';
const urlsToCache = [
  '/spain-trip-2026/',
  '/spain-trip-2026/spain_trip_final.html',
  '/spain-trip-2026/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
