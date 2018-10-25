let search = (arr, target) => {
  // find point of rotation
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  let rotation = start;
  // use rotation to offset binary search middle index
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let realMid = (mid + rotation) % arr.length;
    if (arr[realMid] === target) return realMid;
    else if (arr[realMid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

