let maxArea = (height) => {
  // determine max heights at each index from the left and right
  // have pointers at start and end of array
  // area = distance of pointers * smaller of max heights at pointer index
  // move pointer with smaller height or both if equal height
  let lefts = height.slice();
  let rights = height.slice();
  for (let i = 1; i < lefts.length; i++) {
    lefts[i] = Math.max(lefts[i], lefts[i - 1]);
  }
  for (let i = rights.length - 2; i >= 0; i--) {
    rights[i] = Math.max(rights[i], rights[i + 1]);
  }
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let height = Math.min(lefts[left], rights[right]);
    area = Math.max(area, (right - left) * height);
    if (lefts[left] === rights[right]) {
      left++;
      right--;
    } else if (lefts[left] < rights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
}