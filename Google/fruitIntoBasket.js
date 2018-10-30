let fruitIntoBasket = (tree) => {
  let longest = 0;
  let j = 0;
  let counts = {};
  let types = [];
  while (j < tree.length) {
    let type = tree[j];
    if (counts[type]) {
      counts[type]++;
    } else {
      if (types.length + 1 > 2) {
        let lastType = tree[j - 1];
        counts = {};
        counts[lastType] = 1;
        types = [lastType, type];
        let i = j - 1;
        while (tree[i - 1] === lastType) {
          counts[lastType]++;
          i--;
        } 
      } else {
        types.push(type);
      }
      counts[type] = 1;
    }
    let n1 = counts[types[0]] ? counts[types[0]] : 0;
    let n2 = counts[types[1]] ? counts[types[1]] : 0;
    longest = Math.max(longest, n1 + n2);
    j++;
  }
  return longest;
}

