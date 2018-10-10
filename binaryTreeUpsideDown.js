let upsideDownBinaryTree = (root) => {
  if (!root || (!root.left && !root.right)) return root;
  let flippedRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return flippedRoot;
}