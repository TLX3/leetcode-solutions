let searchRange = (nums, target) => {
  let result = [-1, -1];
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi)/2);
    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  if (nums[lo] !== target) return result;
  result[0] = lo;
  hi = nums.length - 1;
  while (lo < hi) {
    let mid = Math.ceil((lo + hi)/2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid;
    } 
  }
  result[1] = hi;
  return result; 
}