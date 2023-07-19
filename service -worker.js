const cacheName = 'techno-insider-v1';
const cachedFiles = [
  '/', // Update this with the list of your website's core files to cache
  '/path/to/other/important/file1',
  '/path/to/other/important/file2',
  // Add more files to cache as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cachedFiles))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
