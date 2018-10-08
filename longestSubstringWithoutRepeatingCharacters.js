let lengthOfLongestString = (s) => {
  let map = {};
  let begin = 0;
  let end = 0;
  let counter = 0;
  let longest = 0;
  while (end < s.length) {
    let char = s.charAt(end);
    map[char] = map[char] ? map[char] + 1 : 1;
    if (map[char] > 1) counter++;
    end++;
    while (counter > 0) {
      let charTemp = s.charAt(begin);
      if (map[charTemp] > 1) counter--;
      map[charTemp]--;
      begin++;
    }
    longest = Math.max(longest, end - begin);
  }
  return longest;
}