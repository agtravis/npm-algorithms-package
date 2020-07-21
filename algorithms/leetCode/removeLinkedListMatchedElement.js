'use strict';

module.exports = (head, val) => {
  // create a class to make new nodes
  class Node {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  // first, as long as the first node value is equal to the value being matched,
  // remove the first node
  // here I am using my custom remove method on index zero,
  // which essentially makes the next node in the list the head node instead when supplied with a zero index
  while (head.head.val === val) {
    head.remove(0);
  }
  // create a new fake head, the value is irrelevant, but the next property is set to the head of the input
  // after accounting for it starting with a match
  const dummyHead = new Node(0, head.head);
  // the previos pointer is set to the fake head
  let previousNode = dummyHead;
  // the main pointer is set to the actual head
  let currentNode = dummyHead.next;
  // as long as the current node exists
  while (currentNode) {
    // if the value matches
    if (currentNode.val === val) {
      // set the next node of the previous node to be the next node of the current node
      // essentially splicing it out
      previousNode.next = currentNode.next;
    } else {
      // otherwise if it doesn't match, update the previous node to be the current node
      previousNode = currentNode;
    }
    // and traverse the current node on to the next node
    currentNode = currentNode.next;
  }
  // return the actual head
  return dummyHead.next;
};
