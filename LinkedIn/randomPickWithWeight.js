class Solution {
  constructor (w) {
    this.sums = [];
    this.total = 0;
    for (let weight of w) {
      this.total += weight;
      this.sums.push(this.total);
    }
  }
  pickIndex () {
    let target = Math.random() * this.total;
    let left = 0;
    let right = this.sums.length - 1;
    while (left != right) {
      let mid = Math.floor((left + right) / 2);
      if (this.sums[mid] < target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}