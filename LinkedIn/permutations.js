let permute = (arr) => {
  let results = [];
  let backtrack = (current) => {
    if (current.length === arr.length) {
      results.push(current.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (current.includes(arr[i])) continue;
        current.push(arr[i]);
        backtrack(current.slice());
        current.pop();
      }
    }
  }
  backtrack([]);
  return results;
}

let permuteUnique = (nums) => {
  let results = [];
  nums.sort();
  let used = new Set();
  let backtrack = (current) => {
    if (current.length === nums.length) results.push(current.slice());
    else {
      for (let i = 0; i < nums.length; i++) {
        if (used.has(i) || (i >= 1 && !used.has(i - 1) && nums[i - 1] === nums[i])) continue;
        used.add(i);
        current.push(nums[i]);
        backtrack(current.slice());
        used.delete(i);
        current.pop();
      }
    }
  }
  backtrack([]);
  return results;
}