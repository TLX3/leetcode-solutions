let findTilt = (root) => {
  let sum = 0;
  let dfs = (root) => {
    if (!root) return 0;
    let left = findTilt(root.left);
    let right = findTilt(root.right);
    sum += Math.abs(right - left);
    return root.val + left + right;
  }
  dfs(root);
  return sum;
}