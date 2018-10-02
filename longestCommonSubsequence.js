let LCS = (str1, str2) => {
  let m = str1.length;
  let n = str2.length;
  let dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(n + 1).fill(0);
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (str1[i - 1] === str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}