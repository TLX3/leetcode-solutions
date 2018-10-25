let moveZeroes = (nums) => {
  if (nums.length <= 1) return;
  let i = 0, j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
}