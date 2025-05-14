// Image cache system
const imageCache = {
  cards: new Map(),
  frames: new Map(),
  cardBacks: new Map(),
  currencies: new Map(),
  tiers: new Map(),
  merchants: new Map(),
  
  async getImage(type, path) {
      const cache = this[type];
      if (!cache) {
          console.error(`Invalid cache type: ${type}`);
          return null;
      }
      if (cache.has(path)) {
          return cache.get(path);
      }
      
      try {
          const img = new Image();
          img.src = path;
          await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
          });
          cache.set(path, img);
          return img;
      } catch (error) {
          console.error(`Failed to load image: ${path}`, error);
          return null;
      }
  },
  
  preloadImages(type, paths) {
      return Promise.all(paths.map(path => this.getImage(type, path)));
  }
};

// Make imageCache available globally
window.imageCache = imageCache; 