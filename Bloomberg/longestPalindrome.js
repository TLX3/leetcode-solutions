let longestPalindrome = (s) => {
  if (!s || s.length <= 1) return s;
  let longest = 1;
  let pal = '';
  let expand = (i, j) => {
    if (i < 0 || j === s.length) return;
    if (s.charAt(i) === s.charAt(j)) {
      if (j - i + 1 >= longest) {
        longest = j - i + 1;
        pal = s.substring(i, j + 1);
      }
      expand(i - 1, j + 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    // check even
    expand(i, i);
    // check odd
    expand(i, i + 1);
  }
  return pal;
}