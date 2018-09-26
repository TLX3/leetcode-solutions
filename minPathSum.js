let minPath = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let dp = grid.slice()
  for (let j = 1; j < n; j++) dp[0][j] += dp[0][j - 1];
  for (let i = 1; i < m; i++) dp[i][0] += dp[i - 1][0];
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}