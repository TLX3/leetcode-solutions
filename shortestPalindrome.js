let shortestPalindrome = (str) => {
  let temp = str + '#' + str.split('').reverse().join('');
  let table = createKMPTable(temp);
  return str.substring(table[table.length - 1]).split('').reverse().join('') + str;
}

let createKMPTable = (s) => {
  let table = new Array(s.length).fill(0);
  let j = 0;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(j) === s.charAt(i)) {
      table[i] = table[i - 1] + 1;
      j++;
    } else {
      j = table[i - 1];
      while (j > 0 && s.charAt(j) !== s.charAt(i)) {
        j = table[j - 1];
      }
      if (s.charAt(i) === s.charAt(j)) {
        j++;
      }
      table[i] = j;
    }
  }
  return table;
}