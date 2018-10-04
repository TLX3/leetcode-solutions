class LFUCache {
  constructor (capacity) {
    this.capacity = capacity;
    this.vals = new Map();
    this.counts = {};
    this.lists = new Map();
    this.min = -1;
  }
  get (key) {
    if (!this.vals.has(key)) return -1;
    let count = this.counts[key];
    this.counts[key] = count + 1;
    this.lists.get(count).delete(key);
    if (count === this.min && this.lists.get(count).size === 0) this.min++;
    this.lists.get(count + 1).set(key, null);
    return this.vals.get(key)
  }
  put (key, value) {
    if (this.capacity <= 0) return;
    if (this.vals.has(key)) {
      this.vals.set(key, value);
      this.get(key);
      return;
    }
    if (this.capacity === this.vals.size) {
      let evict = this.lists.get(this.min).keys().next().value;
      this.lists.get(this.min).delete(evict);
      this.vals.delete(evict);
      delete this.counts[evict];
    }
    this.vals.set(key, value);
    this.counts[key] = 1;
    this.min = 1;
    this.lists.get(1).set(key, null);
  }
}