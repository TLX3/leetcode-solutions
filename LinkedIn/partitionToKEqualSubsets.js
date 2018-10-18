let canParitionKSubsets = (nums, k) => {
  const sum = nums.reduce((total, num) => total + num);
  if (sum % k !== 0 || nums.some(num => num > sum / k)) return false;
  const used = new Set();
  let backtrack = (start, target) => {
    if (used.size === nums.length) return true;
    if (target < 0) return false;
    if (target === 0) return backtrack(0, sum / k);
    for (let i = start; i < nums.length; i++) {
      if (!used.has(i)) {
        used.add(i);
        if (backtrack(i + 1, target - nums[i])) return true;
        used.delete(i);
      }
    }
    return false;
  }
  return backtrack(0, sum / k);
}