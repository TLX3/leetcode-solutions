let compress = (chars) => {
  let i = chars.length - 1;
  while (i >= 0) {
    let current = chars[i];
    let count = 1;
    while (chars[--i] === current) count++;
    if (count > 1) chars.splice(i + 2, count - 1, ...String(count).split(''));
  }
  return chars.length;
}