let trap = (heights) => {
  // set pointers to move from left and right of array
  // keep track of max heights seen from left and right
  // update height if greater is found else add sum of difference of max height and current height
  // move the pointer pointing to smaller height first
  let i = 0;
  let j = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] >= leftMax) {
        leftMax = height[i];
      } else {
        sum += leftMax - height[i];
      }
      i++;
    } else {
      if (height[j] >= rightMax) {
        rightMax = height[j]
      } else {
        sum += rightMax - height[j];
      }
      j--;
    }
  }
  return sum;
}