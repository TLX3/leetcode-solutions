// single comparison of words
let shortestDistance = (words, w1, w2) => {
  let p1 = -1, p2 = -1;
  let min = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) p1 = i;
    if (words[i] === word2) p2 = i;
    if (p1 !== -1 && p2 !== -1) min = Math.min(min, Math.abs(p1 - p2));
  }
  return min;
}
// multiple comparisons
let shortestDistance2 = (words, w1, w2) => {
  let indexes = {};
  words.forEach((word, i) => {
    if (indexes[word]) {
      indexes[word].push(i);
    } else {
      indexes[word] = [i];
    }
  })
  let w1Idxs = indexes[word1];
  let w2Idxs = indexes[word2];
  let min = Infinity;
  for (let i of w1Idxs) {
    for (let j of w2Idxs) {
      min = Math.min(min, Math.abs(i - j));
    }
  }
  return min;
}
// w1 and w2 can be the same word
let shortestDistance3 = (words, w1, w2) => {
  let p1 = -1, p2 = -1;
  let min = Infinity;
  if (w1 !== w2) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1) p1 = i;
      if (words[i] === word2) p2 = i;
      if (p1 !== -1 && p2 !== -1) min = Math.min(min, Math.abs(p1 - p2));
    }
  } else {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === w1) {
        p2 = p1
        p1 = i;
      }
      if (p1 !== -1 && p2 !== -1) min = Math.min(min, Math.abs(p1 - p2));
    }
  }
  return min;
}