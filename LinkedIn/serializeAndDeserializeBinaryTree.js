// dfs
let serialize1 = (root) => {
  if (!root) return '';
  let str = '';
  let dfs = (root) => {
    if (!root) {
      str += 'null '
    } else {
      str += root.val + ' ';
      dfs(root.left);
      dfs(root.right);
    }
  }
  dfs(root);
  return str.slice(0, -1);
}

let deserialize1 = (data) => {
  if (!data) return [];
  data = data.split(' ');
  let buildTree = () => {
    let val = data.shift();
    if (val === 'null') {
      return null
    } else {
      let node = new TreeNode(Number(val));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  }
  return buildTree();
}

// bfs
let serialize2 = (root) => {
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

let deserialize2 = (data) => {
  if (data.length === 0) return null;
  data = JSON.parse(data);
  let root = new TreeNode(data.shift());
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    let left = data.shift();
    let right = data.shift();
    node.left = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
    node.right = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}