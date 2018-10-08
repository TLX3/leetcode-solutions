let findSubstring = (s, words) => {
  if (!s.length || !words.length) return [];
  const indices = [];
  const totalLen = words.length * words[0].length;
  for (let i = 0; i < s.length - totalLen + 1; i++) {
    let t = s.slice(i, i + totalLen);
    let substr = [];
    while (t) {
      substr.push(t.slice(0, words[0].length));
      t = t.slice(words[0].length);
    }
    let k = 0;
    while (k < words.length) {
      let m = substr.indexOf(words[k]);
      if (m === -1) break;
      substr.splice(m, 1);
      k += 1;
    }
    if (k === words.length) indices.push(i);
  }
  return indices;
}