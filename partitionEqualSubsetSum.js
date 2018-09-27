let canPartition = (arr) => {
  let sum = arr.reduce((a,b) => { return a + b }, 0)
  if (sum % 2 != 0) return false
  let dp = Array(sum + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < arr.length; i++) {
    for (let j = sum; j >= 0; j--) {
      if (dp[j]) dp[j + arr[i]] = true
      if (dp[sum / 2]) return true    
    }
  }
  return false;
}