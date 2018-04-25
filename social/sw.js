let version = '0.01';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('icanalytics').then(cache => {
      return cache.addAll([
        `./`,
        `assets/css/materialize.min.css?timestamp=${timeStamp}`,
        `assets/js/jquery-3.3.1.min.js?timestamp=${timeStamp}`,
        `assets/js/materialize.min.js?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});