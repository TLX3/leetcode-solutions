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