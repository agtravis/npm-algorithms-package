'use strict';

module.exports = (head) => {
  // a class to create nodes
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  // create a new fake head
  let dummy = new ListNode(0);
  // set the original head to be the dummy's next property
  dummy.next = head;
  // this variable will hold the value being compared so we can move to the next node and remember it
  let holdValue;
  // this is a pointer that will point to the previous node
  let previousNode = dummy;
  // set the starting point to loop from to be the original head
  let currentNode = dummy.next;
  // and loop until null
  while (currentNode) {
    // if the current node's value matches the value we are remembering
    if (currentNode.val === holdValue) {
      // then we can skip the current node we are on since it is a duplicate
      // we do this by going to the previous node pointer and setting the next property to miss out the current node
      previousNode.next = previousNode.next.next;
      // otherwise if it doesn't match
    } else {
      // reassign the value being held to the current value
      holdValue = currentNode.val;
      // set the previous node pointer to point to the current node
      previousNode = currentNode;
    }
    // move the current node pointer to the next pointer
    currentNode = currentNode.next;
  }
  // once the loop finishes, we can return the original head
  return dummy.next;
};
