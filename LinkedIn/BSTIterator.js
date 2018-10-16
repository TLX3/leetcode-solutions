class BSTIterator {
  constructor (root) {
    this.stack = [];
    this.updateStack(root);
  }
  updateStack (node) {
    while (node) {
      this.stack.push(node)
      node = node.left;
    }
  }
  hasNext () {
    return this.stack.length > 0;
  }
  next () {
    let node = this.stack.pop();
    if (node.right) this.updateStack(node.right);
    return node.val;
  }
}