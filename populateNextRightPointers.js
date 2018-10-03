let connect = (root) => {
  let levelStart = root;
  while (levelStart) {
    let current = levelStart;
    while (current) {
      if (current.left) current.left.next = current.right;
      if (current.right && current.next) current.right.next = current.next.left
      current = current.next;
    }
    levelStart = levelStart.left;
  }
}