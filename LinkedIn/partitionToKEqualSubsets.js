let canParitionKSubsets = (nums, k) => {
  let sum = nums.reduce((a, b) => a + b);
  if (sum % k !== 0 || nums.some(n => n > sum / k)) return false;
  let target = sum / k;
  let used = new Set();
  let backtrack = (start, sum, k) => {
    if (k === 0) return true;
    if (sum === target) return backtrack(0, 0, k - 1);
    for (let i = start; i < nums.length; i++) {
      if (!used.has(i)) {
        used.add(i);
        if (backtrack(i + 1, sum + nums[i], k)) return true;
        used.delete(i);
      }
    }
    return false;
  }
  return backtrack(0, 0, k);
}