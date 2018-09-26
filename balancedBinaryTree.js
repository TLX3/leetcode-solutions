let isBalanced = (root) => {
  let depth = (root) => {
    if (!root) return 0;
    let left = depth(root.left);
    let right = depth(root.right);
    return 1 + Math.max(left, right);
  }
  let f = (root) => {
    if (!root) return true;
    let left = depth(root.left);
    let right = depth(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
  }
  return f(root)
}