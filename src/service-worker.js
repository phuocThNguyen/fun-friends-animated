const cacheName = 'ffskills';

const staticAssets = [
    './',
    './index.html',
    './'
];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
})