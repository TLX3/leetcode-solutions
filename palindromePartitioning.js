let partition = (str) => {
  let isPalindrome = (str) => {
    for (let i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true
  }
  let results = [];
  let backtrack = (start, current) => {
    if (current.join('').length === str.length) {
      results.push(current.slice());
    } else {
      for (let i = start; i < str.length; i++) {
        if (isPalindrome(str.substring(start, i + 1))) {
          current.push(str.substring(start, i + 1));
          backtrack(i + 1, current.slice());
          current.pop();
        }
      }
    }
  }
  backtrack(0, []);
  return results;
}