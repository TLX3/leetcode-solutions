// backtracking
let powerSet1 = (nums) => {
  let subsets = [];
  nums.sort();
  let backtrack = (start, current) => {
    subsets.push(current.slice());
    for (let i = start; i < nums.length; i++) {
      // if (i > start && nums[i] === nums[i - 1]) continue;
      current.push(nums[i]);
      backtrack(i + 1, current.slice());
      current.pop();
    }
  }
  backtrack(0, []);
  return subsets;
}

// iterative
let powerSet2 = (nums) => {
  if (nums.length === 0 || !nums) return []
  let subsets = [[]];
  nums.forEach((n) => {
    let len = subsets.length;
    let i = 0;
    while (i < len) {
      let temp = subsets[i].slice();
      temp.push(n);
      subsets.push(temp);
      i++;
    }
  })
  return subsets;
}

// bit manipulation
let powerSet3 = (nums) => {
  let powerSet = [[]]
  let setSize = Math.pow(2, nums.length)
  for (let i = 1; i < setSize; i++) {
    let binary = (i >>> 0).toString(2).split('')
    while (binary.length < (setSize - 1 >>> 0).toString(2).length) { binary.unshift('0') }
    let current = []
    binary.forEach((char, i) => {
      if (char === '1') {
        current.push(nums[i])
      }
    })
    powerSet.push(current)
  }
  return powerSet
}