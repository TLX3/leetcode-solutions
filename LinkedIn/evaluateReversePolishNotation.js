let evalRPN = (tokens) => {
  let nums = [];
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token === '/' || token === '*' || token === '-' || token === '+') {
      let n2 = nums.pop();
      let n1 = nums.pop();
      if (token === '/') {
        let div = n1 / n2;
        if (div < 0) nums.push(Math.ceil(div));
        else nums.push(Math.floor(div));
      } else if (token === '*') {
        nums.push(n1 * n2);
      } else if (token === '+') {
        nums.push(n1 + n2);
      } else {
        nums.push(n1 - n2);
      }
    } else {
      nums.push(Number(token));
    }
  }
  return nums.pop();
}