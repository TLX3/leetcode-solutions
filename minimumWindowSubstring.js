let minWindow = (s, t) => {
  if (t.length > s.length) return '';
  let map = new Map();
  let begin = 0;
  let end = 0;
  let head = 0;
  let len = Infinity;
  for (let char of t.split('')) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  let counter = map.size;
  while (end < s.length) {
    let char = s.charAt(end);
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) counter--;
    }
    end++;
    while (counter === 0) {
      let tempChar = s.charAt(begin);
      if (map.has(tempChar)) {
        map.set(tempChar, map.get(tempChar) + 1);
        if (map.get(char) > 0) counter++;
      }
      if (end - begin < len) {
        len = end - begin;
        head = begin;
      }
      begin++;
    }
  }
  return len === Infinity ? '' : s.substring(head, head + len);
}

