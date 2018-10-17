let depthSumInverse = (nestedList) => {
  let maxDepth = -Infinity;
  let sumAtDepths = [];
  let findSums = (nestedList, depth) => {
    maxDepth = Math.max(depth, maxDepth);
    for (let i = 0; i < nestedList.length; i++) {
      let current = nestedList[i];
      if (current.isInteger()) {
        if (sumAtDepths[depth - 1] === undefined) sumAtDepths[depth - 1] = current.getInteger();
        else sumAtDepths[depth - 1] += current.getInteger();
      } else {
        findSums(current.getList(), depth + 1);
      }
    }
  }
  findSums(nestedList, 1);
  let sum = 0;
  for (let i = 0; i < sumAtDepths.length; i++) {
    if (sumAtDepths[i] === undefined) continue;
    else sum += sumAtDepths[i] * (maxDepth - i);
  }
  return sum;
}