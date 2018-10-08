let lengthOfLongestSubstringKDistinct = (s, k) => {
  let begin = 0;
  let end = 0;
  let map = {};
  let longest = 0;
  let counter = 0;
  while (end < s.length) {
    let char = s.charAt(end);
    map[char] = map[char] ? map[char] + 1 : 1;
    if (map[char] === 1) counter++;
    end++;
    while (counter > k) {
      let temp = s.charAt(begin);
      map[temp]--;
      if (map[temp] === 0) counter--;
      begin++;
    }
    longest = Math.max(longest, end - begin);
  }
  return longest;
}