let schedule = (n, prereqs) => {
  let visited = {};
  let visting = {};
  let pairs = new Array(n).map(el => []);
  let stack = [];
  for (let [u, v] of prereqs) {
    pairs[v].push(u);
  }
  let dfs = (course) => {
    if (visited[course]) return false;
    if (visiting[course]) return true;
    visiting[course] = true;
    for (let i = 0; i < pairs[course]; i++) {
      if (dfs(pairs[course][i])) return false;
    }
    visiting[course] = false;
    visited[course] = true;
    stack.push(course);
    return false;
  }
  for (let i = 0; i < n; i++) {
    let foundCycle = dfs(n);
    if (foundCycle) return false;
  }
  return stack.reverse();
}