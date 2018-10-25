let threeSum = (nums) => {
  if (!nums || nums.length < 3) return [];
  let results = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          results.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j - 1] === nums[j]) j++;
          while (j < k && nums[k] === nums[k + 1]) k--;
        } else if (sum > 0) {
          k--;
        } else {
          j++;
        }
      }
    }
  }
  return results;
}