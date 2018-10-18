let findRepeatedDNASequences = (s) => {
  if (!s || s.length < 10) return [];
  let seen = new Set();
  let results = new Set();
  for (let i = 0; i + 9 < s.length; i++) {
    let str = s.substring(i, i + 10);
    if (seen.has(str)) {
      results.add(str);
    } else {
      seen.add(str);
    }
  }
  return Array.from(results);
}