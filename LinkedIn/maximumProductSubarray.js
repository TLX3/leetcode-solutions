let maxProduct = (nums) => {
  if (nums.length === 1) return nums[0];
  let globalMax = nums[0];
  let currentMax = nums[0];
  let currentMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [currentMax, currentMin] = [currentMin, currentMax];
    currentMax = Math.max(nums[i], currentMax * nums[i]);
    currentMin = Math.min(nums[i], currentMin * nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax;
}