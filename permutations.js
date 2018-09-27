let permutations1 = (nums) => {
  let results = [];
  let backtrack = (current) => {
    if (current.length === nums.length) {
      results.push(current.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (current.includes(i)) continue;
        current.push(nums[i]);
        backtrack(current.slice());
        current.pop();
      }
    }
  }
  backtrack([]);
  return results;
}

let permutations2 = (nums, used) => {
  let results = [];
  nums.sort();
  let backtrack = (current, used) => {
    if (current.length === nums.length) results.push(current.slice());
    else {
      for (let i = 0; i < nums.length; i++) {
        if (used[i] || i >= 1 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        used[i] = true;
        current.push(nums[i]);
        backtrack(current.slice(), Object.assign({}, used));
        used[i] = false;
        current.pop();
      }
    }
  }
  backtrack([], {});
  return results;
}