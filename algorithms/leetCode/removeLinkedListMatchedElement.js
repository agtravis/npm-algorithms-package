'use strict';

const LinkedList = require(`../../dataStructures/singlyLinkedList`);

const linkedList = new LinkedList();
const values = [6, 6, 1, 2, 3, 4, 5, 6, 7, 6, 6, 8, 6, 6, 6, 9, 0, 6];
for (const value of values) {
  linkedList.append(value);
}
var removeElements = function (head, val) {
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
removeElements(linkedList, 6);
linkedList.printList();
