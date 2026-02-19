export const cacheService = {
  async clearOldCache() {
    const keys = await caches.keys();
    return Promise.all(
      keys.map(key => {
        if (key !== 'ai-palm-reader-v1') {
          return caches.delete(key);
        }
      })
    );
  },
  
  async prefetchAssets(assets) {
    const cache = await caches.open('ai-palm-reader-assets');
    return cache.addAll(assets);
  }
};
