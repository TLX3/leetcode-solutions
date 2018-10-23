let nextGreaterElement = (n) => {
  let s = '' + n;
  let j = s.length - 1, i = j - 1;
  while (s[i + 1] <= s[i]) i--;
  if (i === -1) return -1;
  while (s[j] <= s[i]) j--;
  let right = s.substring(i + 1, j) + s[i] + s.substr(j + 1);
  let res = parseInt(s.substr(0, i) + s[j] + right.split('').reverse().join(''));
  return res < 2147483648 ? res : -1;
}