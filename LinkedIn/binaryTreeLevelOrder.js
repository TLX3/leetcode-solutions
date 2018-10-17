let levelOrder = (root) => {
  if (!root) return [];
  let results = [];
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
    results.push(level);
  }
  return results;
}