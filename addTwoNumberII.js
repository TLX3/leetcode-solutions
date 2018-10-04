let addTwoNumbers = (l1, l2) => {
  let s1 = [];
  let s2 = [];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let sum = 0;
  let list = new ListNode();
  while (s1.length > 0 || s2.length > 0) {
    if (s1.length > 0) sum += s1.pop();
    if (s2.length > 0) sum += s2.pop();
    list.val = sum % 10;
    let head = new ListNode(Math.floor(sum / 10));
    head.next = list;
    list = head;
    sum = Math.floor(sum / 10);
  }
  return list.val === 0 ? list.next : list;
}