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