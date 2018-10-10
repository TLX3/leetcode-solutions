let findLeaves = (root) => {
  let leaves = [];
  let dfs = (root) => {
    if (!root) return -1;
    let level = 1 + Math.max(dfs(root.left), dfs(root.right));
    if (level === leaves.length) leaves.push([]);
    leaves[level].push(root.val);
    return level;
  }
  dfs(root);
  return leaves;
}