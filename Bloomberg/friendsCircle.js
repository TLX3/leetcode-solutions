let findCircleNum = (M) => {
  let n = M.length;
  let count = 0;
  let visited = {};
  let helper = (i) => {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        if (!visited[j]) helper(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      helper(i);
    }
  }
  return count;
}