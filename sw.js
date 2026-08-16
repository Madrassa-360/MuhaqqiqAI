/* ════════════════════════════════════════════════════════════
   Muhaqqiq AI — Service Worker (v4.0 Mobile Force Update)
   Strategy:
   - HTML (navigation): NETWORK-FIRST with cache-control no-cache
   - Everything else: Network-First fallback to Stale-While-Revalidate
   - skipWaiting() + clients.claim() for instant update on all devices
   ════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'muhaqqiq-ai-cache-v9.0-fluid-scroll';
const CORE_ASSETS = [
  './',
  './index.html',
  './admin_manager.html',
  './manifest.json',
  './app_config.json',
  './default_books.json',
  './icon-192.png',
  './icon-512.png',
  './maskable-icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.url.startsWith('chrome-extension://')) return;

  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(req, { cache: 'no-cache', headers: { 'Cache-Control': 'no-cache, no-store' } })
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match('./index.html'))
        )
    );
    return;
  }

  // Network-First for assets
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
