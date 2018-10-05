let nextClosestTime = (time) => {
  time = time.split(':').map(part => part.split('').map(Number));
  let digits = time[0].concat(time[1]);
  time = digits.slice();
  let next = time.slice();
  digits.sort();
  let ranges = [2, 9, 5, 9];
  let current = 3;
  while (current >= 0) {
    let range = ranges[current];
    if (current === 1 && time[0] === 2) range = 3;
    let match = digits.find(n => n > time[current] && n <= range );
    if (match !== undefined) {
      next[current] = match;
      for (let i = current + 1; i < 4; i++) {
        let subrange = ranges[i];
        if (i === 1 && i[0] === 2) subrange = 3;
        let submatch = digits.find(n => n < time[i] && n <= range);
        if (submatch !== undefined) next[i] = submatch;
      }
      return next.slice(0,2).join('') + ':' + next.slice(2).join('');
    }
    current--;
  }
  next = next.map(n => digits[0]);
  return next.slice(0,2).join('') + ':' + next.slice(2).join('');
}