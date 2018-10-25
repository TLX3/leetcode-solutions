let firstUniqChar = (s) => {
  let index = s.length;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let char of alphabet) {
    let i = s.indexOf(char);
    let j = s.lastIndexOf(char);
    if (i !== -1 && i === j && i < index) {
      index = i;
    }
  }
  return index === s.length ? -1 : index;
}