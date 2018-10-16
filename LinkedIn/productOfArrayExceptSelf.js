let productExceptSelf = (nums) => {
  let results = new Array(nums.length);
  results[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    results[i] = results[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] = results[i] * right;
    right *= nums[i];
  }
  return results;
}