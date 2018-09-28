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

let combinationSum3 = (k, target) => {
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

let combinationSum4 = (nums, target) => {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (i - nums[j] >= 0) dp[i] += dp[i - nums[j]];
    }
  }
  return dp[target];
}