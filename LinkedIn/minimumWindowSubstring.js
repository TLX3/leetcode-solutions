let minWindow = (s, t) => {
  if (s.length < t.length) return '';
  let len = Infinity;
  let head = 0;
  let start = 0;
  let end = 0;
  let map = {};
  for (let s of t.split('')) {
    map[s] = map[s] !== undefined ? map[s] + 1 : 1;
  }
  let counter = Object.keys(map).length;
  while (end < s.length) {
    let char = s.charAt(end);
    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) counter--;
    }
    end++;
    while (counter === 0) {
      let temp = s.charAt(start);
      if (map[temp] !== undefined) {
        map[temp]++;
        if (map[temp] > 0) counter++;
      }
      if (end - start < len) {
        len = end - start;
        head = start;
      } 
      start++;
    }
  }
  if (len === Infinity) return '';
  return s.substring(head, head + len);
}