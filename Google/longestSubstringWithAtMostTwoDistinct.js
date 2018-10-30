let lengthOfLongestSubstringTwoDistinct = (s) => {
  let longest = 0;
  let start = 0;
  let end = 0;
  let map = {};
  let counter = 0;
  while (end < s.length) {
    let char = s.charAt(end);
    map[char] = map[char] ? map[char] + 1 : 1;
    if (map[char] === 1) counter++;
    end++;
    while (counter > 2) {
      let temp = s.charAt(start);
      map[temp]--;
      if (map[temp] === 0) counter--;
      start++;
    }
    longest = Math.max(longest, end - start);
  }
  return longest;
}
