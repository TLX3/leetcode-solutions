class WordDistance {
  constructor (words) {
    this.indexes = {};
    for (let i = 0; i < words.length; i++) {
      if (this.indexes[words[i]]) {
        this.indexes[words[i]].push(i);
      } else {
        this.indexes[words[i]] = [i];
      }
    }
  }
  shortest (word1, word2) {
    let indices1 = this.indexes[word1];
    let indices2 = this.indexes[word2];
    let min = Infinity;
    for (let i of indices1) {
      for (let j of indices2) {
        min = Math.min(min, Math.abs(i - j));
      }
    }
    return min;
  }
}