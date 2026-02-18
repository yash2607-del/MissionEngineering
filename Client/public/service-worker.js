// This service worker unregisters itself and clears all old caches.
// It exists only to clean up previous SW installs that were serving stale CSS/JS.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(cacheNames.map((name) => caches.delete(name)))
    ).then(() => self.registration.unregister())
     .then(() => self.clients.claim())
  );
});
