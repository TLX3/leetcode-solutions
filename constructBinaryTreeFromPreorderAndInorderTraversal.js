let buildTree = (p, i) => {
  if (!p.length || !i.length) return null;
  let val = p[0];
  let pos = i.indexOf(val);
  let root = new TreeNode(val);
  root.left = buildTree(p.slice(1, 1 + pos), i.slice(0, pos));
  root.right = buildTree(p.slice(1 + pos), i.slice(1 + pos));
  return root;
};