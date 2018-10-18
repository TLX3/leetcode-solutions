let upsideDownBinaryTree = (root) => {
  if (!root || (!root.left && !root.right)) return root;
  let upsideDownRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return upsideDownRoot;
}
      1
    / \
    2   3
  / \ 
  4   5

    4
   / \
  5   2
     / \
    3   1  