let searchInRotatedArray = (arr, target) => {
  let lo = 0;
  let high = arr.length - 1;
  while (lo < high) {
    let mid = Math.floor((lo + high) / 2);
    if (arr[mid] > arr[high]) {
      lo = mid + 1;
    } else {
      high = mid;
    }
  }
  let rotation = lo;
  lo = 0;
  high = arr.length - 1;
  while (lo < high) {
    let mid = Math.floor((low + high)/ 2);
    let realMid = (mid + rotation) % arr.length;
    if (arr[realMid] === target) return true;
    if (arr[realMid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}