let countSubstrings = (s) => {
  if (!s || s.length === 0) return 0;
  let count = 1;
  let checkPalindromes = (i, j) => {
    while (i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
      count++;
      i--;
      j++;
    }
  } 
  for (let i = 0; i + 1 < s.length; i++) {
    // odd length palindromes
    checkPalindromes(i, i);
    // even length palindromes
    checkPalindromes(i, i + 1);
  }
  return count;
}