let canPartitionKSubsets = (nums, k) => {
  const sum = nums.reduce((total, num) => total + num);
  if (sum % k !== 0 || nums.some(num => num > sum / k) || k <= 0) return false;
  let target = sum / k
  const used = {};
  let dfs = (start, sum, k) => {
    if (k === 0) return true;
    if (target === sum) return dfs(0, 0, k - 1);
    for (let i = start; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true
        if (dfs(i + 1, sum + nums[i], k)) return true;
        delete used[i];
      }
    }
    return false;
  }
  return dfs(0, 0, k);
}