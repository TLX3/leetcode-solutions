let characterReplacement = (s, k) => {
  let map = {};
  let begin = 0;
  let end = 0;
  let counter = 0;
  let longest = 0;
  while (end < s.length) {
    let char = s.charAt(end);
    map[char] = map[char] ? map[char] + 1 : 1;
    if (counter < map[char]) counter = map[char];
    end++;
    while (end - begin - counter > k) {
      let temp = s.charAt(begin);
      map[temp]--;
      let max = 0;
      for (let key of Object.keys(map)) {
        max = Math.max(max, map[key]);
      }
      counter = max;
      begin++;
    }
    longest = Math.max(longest, end - begin);
  }
  return longest;
}