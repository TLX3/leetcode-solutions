let LIS = (arr) => {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let longest = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  for (let i = 0; i < n; i++) longest = Math.max(longest, dp[i]);
  return longest;
}

let findNumberOfLIS = (nums) => {
  if (nums.length <= 1) return nums.length;
  let n = nums.length;
  let dp = new Array(n).fill(1);
  let counts = new Array(n).fill(1);
  let longest = 1;
  let number = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        counts[i] = counts[j];
      } else if (dp[i] === dp[j] + 1) {
        counts[i] += counts[j];
      }
    }
    if (dp[i] > longest) {
      longest = dp[i];
      number = counts[i]
    } else if (dp[i] === longest) {
      number += counts[i];
    }
  }
  return number;
};