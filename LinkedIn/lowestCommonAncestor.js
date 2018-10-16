let lowestCommonAncestor = (root, p, q) => {
  if (!root || root === q || root === p) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}