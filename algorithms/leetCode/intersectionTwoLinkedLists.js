'use strict';

const SinglyLinkedList = require(`../../dataStructures/singlyLinkedList`);

module.exports = (headA, headB) => {
  let left = headA.head;
  let right = headB.head;
  let visited = new Set();
  while (left) {
    visited.add(left);
    left = left.next;
  }
  while (right) {
    if (visited.has(right)) {
      return right;
    }
    right = right.next;
  }
  return null;
};
