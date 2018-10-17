let zigZag = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];
  let results = [];
  let leftToRight = true;
  let queue = [root];
  while (queue.length > 0) {
    let count = queue.length;
    let result = [];
    while (count > 0) {
      let node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }
    if (leftToRight) results.push(result.slice());
    else results.push(result.reverse());
    leftToRight = !leftToRight;
  }
  return results;
}