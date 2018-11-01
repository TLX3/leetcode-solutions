let validPalindromeII = (s) => {
  if (s.length <= 1) return true;
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      break;
    }
  }
  if (i === j) return true;
  return isPalindrome(s.substring(i + 1, j + 1)) || isPalindrome(s.substring(i, j));
}

let isPalindrome = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}