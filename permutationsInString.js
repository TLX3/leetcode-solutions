let checkInclusion = (p, s) => {
  if (s == null || s.length == 0 || p == null || p.length == 0) return false
  let begin = 0, end = 0;
  let map = {};
  for (let char of p.split('')) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  let counter = Object.keys(map).length;
  while (end < s.length) {
    let char = s.charAt(end);
    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) counter--;
    }
    while (counter === 0) {
      if (end - begin + 1 == p.length) { 
        return true;
      }
      let temp = s.charAt(begin);
      if (map[temp] !== undefined) {
        map[temp]++;
        if (map[temp] > 0) counter++;
      }
      begin++;
    }
    end++;
  }
  return false;
}