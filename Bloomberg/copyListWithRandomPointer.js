let copyRandomList = (head) => {
  if (!head) return null;
  let clone = new RandomListNode(head.label);
  head.copy = clone;
  let current = head.next;
  let iter = clone;
  while (current) {
    iter.next = new RandomListNode(current.label);
    current.copy = iter.next;
    current = current.next;
    iter = iter.next;
  }
  iter = clone;
  while (head) {
    iter.random = head.random ? head.random.copy : null;
    iter = iter.next;
    head = head.next;
  }
  return clone;
}