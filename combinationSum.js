let combinationSum = (nums, target) => {
  let matches = [];
  let backtrack = (start, remainder, current) => {
    if (remainder === 0) matches.push(current.slice());
    else if (remainder < 0) return;
    else {
      for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);
        backtrack(i, remainder - nums[i], current.slice());
        current.pop();
      }
    }
  }
  backtrack(0, target, []);
  return matches;
}

let combinationSum3 = (nums, target) => {
  let matches = [];
  let backtrack = (start, remainder, current) => {
    if (remainder === 0 && current.length === k) {
      matches.push(current.slice());
    } else if (current.length > k || remainder < 0) {
      return;
    } else {
      for (let i = start; i < 9; i++) {
        current.push(i + 1);
        backtrack(i + 1, remainder - (i + 1), current.slice());
        current.pop();
      }
    }
  }
  backtrack(0, n, []);
  return matches;
}