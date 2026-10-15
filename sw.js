const CACHE_NAME = 'aroosi-to-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './vendor-detail.html',
  './invitation.html',
  './style.css',
  './directory.css',
  './script.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
