let nextPermutation = (nums) => {
  if (!nums || nums.length <= 1) return;
  // keep pointer at end of nums and iterate leftwards
  // nums[i] = first number that is greater than the next
  // nums[j] = first number greater than nums[i]
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] > nums[i]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;
    swap(i, j);
  }
  reverse(nums, i + 1, nums.length - 1);
}

let swap = (nums, i , j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
} 

let reverse = (nums, i, j) => {
  while (i < j) swap(nums, i++, j--);
}

735245893

345892