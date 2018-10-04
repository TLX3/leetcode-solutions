let checkInclusion = (s1, s2) => {
  let n = s1.length;
  let m = s2.length;
  if (n > m) return false;
  let counts = {};
  'abcdefghijklmnopqrstuvwxyz'.split('').map(char => counts[char] = 0);
  for (let i = 0; i < n; i++) {
    counts[s1.charAt(i)]++;
    counts[s2.charAt(i)]--;
  }
  if (Object.keys(counts).every(char => counts[char] === 0)) return true;
  for (let i = n; i < m; i++) {
    counts[s2.charAt(i)]--;
    counts[s2.charAt(i - n)]++;
    if (Object.keys(counts).every(char => counts[char] === 0)) return true;
  }
  return false;
}