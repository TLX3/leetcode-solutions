class RandomizedSet {
  constructor () {
    this.set = {};
  }

  insert(val) {
    if (!this.set[val]) {
      this.set[val] = true
      return true
    } else {
      return false
    }
  }

  remove(val) {
    if (this.set[val]) {
      delete this.set[val]
      return true
    } else {
      return false
    }
  }

  getRandom() {
    let keys = Object.keys(this.set).map(k => Number(k));
    return keys[Math.floor(Math.random() * keys.length)];
  }
}