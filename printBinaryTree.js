let printBinaryTree = (root) => {
  let depth = (root) => {
    if (!root) return 0;
    let left = depth(root.left);
    let right = depth(root.right);
    return 1 + Math.max(left, right);
  }
  let m = depth(root);
  let n = Math.pow(2, m) - 1;
  let arr = new Array(m);
  for (let i = 0; i < arr.length; i++) arr[i] = new Array(n).fill('');
  let f = (root, depth, left, right) => {
    if (root) {
      let mid = Math.floor((right + left) / 2);
      arr[depth][mid] = String(root.val);
      f(root.left, depth + 1, left, mid - 1);
      f(root.right, depth + 1, mid + 1, right);
    }
  }
  f(root, 0, 0, n);
  return arr;
}