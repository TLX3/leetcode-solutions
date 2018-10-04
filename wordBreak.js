let wordBreak = (s, wordDict) => {
  let dict = {};
  wordDict.forEach(word => dict[word] = true);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && dict[s.substring(j, i)]) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length];
}

