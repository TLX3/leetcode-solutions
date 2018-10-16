let shortestPalindrome = (str) => {
  let rev = str.split('').reverse().join('');
  let temp = str + '#' + rev;
  let table = createKMPTable(temp);
  // Combine str and rev
  // Find longest suffix of reverse string that is the longest prefix of orignal string
  // Equivalent to removing longest palindrome from original string
  return rev.substring(0, str.length - table[table.length - 1]) + str;
}

let createKMPTable = (s) => {
  let table = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    let j = table[i - 1];
    while (j > 0 && s.charAt(i) !== s.charAt(j)) {
      j = table[j - 1];
    }
    if (s.charAt(i) === s.charAt(j)) {
      table[i] = j + 1;
    }
  }
  return table;
}