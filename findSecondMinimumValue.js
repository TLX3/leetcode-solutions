let findMinimum = (root) => {
  let smallest = root.val;
  let second = Infinity;
  let dfs = (root) => {
    if (!root) return;
    if (root.val !== smallest && root.val < second) second = root.val;
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return second === Infinity ? -1 : second;
}