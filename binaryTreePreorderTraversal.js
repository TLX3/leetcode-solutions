let preorder = (root) => {
  let stack = [];
  let path = [];
  while (root) {
    path.push(root.val)
    if (root.right) stack.push(root.right)
    if (root.left) root = root.left
    while (stack.length > 0 && !root) {
      root = stack.pop()
    }
  }
  return path;
}