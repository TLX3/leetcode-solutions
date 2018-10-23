let connect = (root) => {
  if (!root) return;
  root.next = null;
  let queue = [root];
  while (queue.length > 0) {
    let count = queue.length;
    while (count > 0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }
    if (queue.length > 1) {
      for (let i = 1; i < queue.length; i++) {
        queue[i - 1].next = queue[i];
      }
    }
    if (queue.length > 0) queue[queue.length - 1].next = null;
  }
}