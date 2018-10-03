let copyRandomList = (head) => {
  if (!head) return null;
  const copy = new RandomListNode();
  const map = new Map();
  let current = head;
  let iter = copy;
  while (current && !map.has(current)) {
    iter.next = new RandomListNode(current.label);
    map.set(current, iter.next);
    iter = iter.next;
    current = current.next;
  }
  for (let [src, srcCopy] of map) {
    srcCopy.random = map.get(src.random) || null;
  }
  return copy.next;
}