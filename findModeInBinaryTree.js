let findMode = (root) => {
  let modes = [];
  let max = 0;
  let count = 0;
  let lastVal;
  let dfs = (root) => {
    if (root) {
      if (root.left) dfs(root.left);
      if (root.val !== lastVal) {
        lastVal = root.val;
        count = 1;
      } else {
        count += 1;
      }
      if (count > max) {
        max = count;
        modes = [root.val];
      } else if (count === max) {
        modes.push(root.val);
      }
      if (root.right) dfs(root.right);
    }
  }
  dfs(root);
  return modes;
}