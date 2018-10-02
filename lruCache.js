class LRUCache {
  constructor (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get (key) {
    let value = this.cache.get(key);
    if (value === undefined) return -1;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put (key, value) {
    if (this.cache.has(key)) this.cache.delete(key)
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}