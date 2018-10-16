let search = (nums, target) => {
  if (nums.length === 0) return -1;
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (nums[mid] < nums[hi]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  let rotate = lo;
  lo = 0;
  hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    let realMid = (mid + rotate) % nums.length;
    if (nums[realMid] === target) return realMid;
    else if (nums[realMid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}