let firstMissingPositive = (arr) => {
  if (nums.length === 0) return 1;
  let max = Math.max(...nums);
  let counts = new Array(max + 1).fill(0);
  for (let i = 0; i < nums.length; i++) counts[nums[i]]++;
  for (let i = 1; i < counts.length; i++) if (counts[i] === 0) return i;
  return max + 1;
}