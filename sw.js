var cacheName = 'video-pwa';
var filesToCache = [
    '/',
    '/login.html',
    '/index.html',
    '/style.css',
    '/main.js',
    '/Video.js',
    '/Info.js',
    '/Prescription.js',
    '/vaadin-router.js',
    '/favicon.ico',
    '/images/camera.png',
    '/images/info.png',
    '/images/document-signed.png',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});