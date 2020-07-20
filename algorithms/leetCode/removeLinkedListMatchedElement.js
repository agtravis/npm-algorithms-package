'use strict';

module.exports = (head, val) => {
  class Node {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  while (head.head.val === val) {
    head.remove(0);
  }
  const dummyHead = new Node(0, head.head);
  let previousNode = dummyHead;
  let currentNode = dummyHead.next;
  while (currentNode) {
    if (currentNode.val === val) {
      previousNode.next = currentNode.next;
    } else {
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  return dummyHead.next;
};
