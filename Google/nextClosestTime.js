let nextClosestTime = (time) => {
  let digits = time.split(':');
  digits = (digits[0] + digits[1]).split('').map(char => Number(char));
  let next = digits.slice();
  time = digits.slice();
  digits.sort();
  let ranges = [2,9,5,9]
  let i = 3;
  while (i >= 0) {
    let range = ranges[i];
    if (i === 1 && time[0] === 2) range = 3;
    let candidate = digits.find(n => n <= range && n > time[i]);
    if (candidate !== undefined) {
      next[i] = candidate;
      for (let j = i + 1; j < 4; j++) {
        let subRange = ranges[j];
        if (j === 1 && time[0] === 2) subRange = 3;
        let subCandidate = digits.find(n => n <= subRange && n < time[j]);
        if (subCandidate !== undefined) {
          next[j] = subCandidate;
        }
      }
      return next.slice(0, 2).join('') + ':' + next.slice(2).join('');
    }
    i--;
  }
  next = next.map(n => next[0]);
  return next.slice(0, 2).join('') + ':' + next.slice(2).join('');
}