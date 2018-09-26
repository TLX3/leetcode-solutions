let minimumDistance = (root) => {
  let min = Infinity;
  let pre = null;
  let f = (root) => {
    if (root) {
      if (root.left) f(root.left);
      if (pre) min = Math.min(min, Math.abs(root.val - pre));
      pre = root.val;
      if (root.right) f(root.right);
    }
  }
  f(root)
  return min;
}