let removeInvalidParentheses = (s) => {
  let results = [];
  if (!s) return [''];
  let visited = {};
  let queue = [s];
  visited[s] = true;
  let found = false;
  while (queue.length > 0) {
    let str = queue.shift();
    if (isValid(str)) {
      results.push(str);
      found = true;
    }
    if (found) continue;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== '(' && str.charAt(i) !== ')') continue;
      let sub = str.substring(0, i) + str.substring(i + 1);
      if (!visited[sub]) {
        queue.push(sub);
        visited[sub] = true;
      }
    }
  }
  return results;
}
let isValid = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '(') count++;
    if (str.charAt(i) === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}