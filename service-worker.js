const CACHE_NAME = 'scangol-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/data.js',
  '/assets/js/components.js',
  '/assets/js/ar.js',
  '/assets/js/stats.js',
  '/assets/js/trivia.js',
  '/assets/js/video.js',
  '/assets/js/main.js',
  '/assets/targets/targets.mind',
  '/assets/icons/icon-192.svg',
  '/assets/icons/icon-512.svg'
  // Agrega más archivos si es necesario, como modelos GLB si quieres cachearlos
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});