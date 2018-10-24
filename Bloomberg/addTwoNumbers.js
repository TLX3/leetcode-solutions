let addTwoNumberI = (l1, l2) => {
  let p1 = l1;
  let p2 = l2;
  let head = new ListNode();
  let iter = head;
  let sum = 0;
  while (p1 || p2) {
    if (p1) sum += p1.val;
    if (p2) sum += p2.val;
    let newNode = new ListNode(sum % 10);
    iter.next = newNode;
    iter = iter.next;
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) iter.next = new ListNode(sum);
  return head.next;
}

let addTwoNumbersII = (l1, l2) => {
  let s1 = [], s2 = [];
  let p1 = l1, p2 = l2;
  while (p1) {
    s1.push(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    s2.push(p2.val);
    p2 = p2.next;
  }
  let head = null;
  p1 = l1, p2 = l2;
  let sum = 0;
  while (s1.length > 0 || s2.length > 0) {
    if (s1.length > 0) sum += s1.pop();
    if (s2.length > 0) sum += s2.pop();
    let newNode = new ListNode(sum % 10);
    newNode.next = head;
    head = newNode;
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) {
    let newNode = new ListNode(sum);
    newNode.next = head;
    head = newNode;
  }
  return head;
}