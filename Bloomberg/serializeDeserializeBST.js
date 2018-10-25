let serialize = (root) => {
  if (!root) return [];
  let queue = [root];
  let data = [];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      data.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      data.push(null);
    }
  }
  if (data[data.length - 1] === null) data.pop();
  return JSON.stringify(data);
}

let deserialize = (data) => {
  if (data.length === 0) return null;
  data = JSON.parse(data);
  let root = new TreeNode(data.shift());
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    let val1 = data.shift();
    let val2 = data.shift();
    if (Number.isInteger(val1)) node.left = new TreeNode(val1);
    else node.left = null;
    if (Number.isInteger(val2)) node.right = new TreeNode(val2);
    else node.right = null;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}