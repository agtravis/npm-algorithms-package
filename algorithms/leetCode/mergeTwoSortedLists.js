'use strict';

module.exports = (l1, l2) => {
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  let head = new ListNode();
  while (l1 || l2) {
    let currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    if (!l2) {
      currentNode.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if (!l1) {
      currentNode.next = new ListNode(l2.val);
      l2 = l2.next;
    } else if (l1.val < l2.val) {
      currentNode.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      currentNode.next = new ListNode(l2.val);
      l2 = l2.next;
    }
  }
  return head.next;
};
