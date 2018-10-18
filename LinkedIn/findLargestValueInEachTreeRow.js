let largestValues1 = (root) => {
  if (!root) return [];
  let values = [];
  let queue = [root];
  while (queue.length > 0) {
    let count = queue.length;
    let level = [];
    while (count > 0) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }
    values.push(Math.max(...level));
  }
  return values;
}

let largestValues2 = (root) => {
  if (!root) return [];
  let values = {};
  let dfs = (root, level) => {
    if (values[level] !== undefined) {
      values[level] = Math.max(values[level], root.val);
    } else {
      values[level] = root.val;
    }
    if (root.left) dfs(root.left, level + 1);
    if (root.right) dfs(root.right, level + 1);
  }
  dfs(root, 0);
  return Object.values(values);
}