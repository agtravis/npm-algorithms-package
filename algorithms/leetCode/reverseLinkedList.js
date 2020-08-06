'use strict';

module.exports = (head) => {
  // set a tail variable to currently equal null
  let tail = null;
  // copy the head node to a variable currentNode
  let currentNode = head;
  // for as long as the currentNode exists
  while (currentNode) {
    // set nextNode to point to the currentNode's next property
    const nextNode = currentNode.next;
    // next, set the currentNode's next property to point to the current node at the tail (initially null)
    currentNode.next = tail;
    // now reset the tail node to be the current node
    tail = currentNode;
    // and move the current node to the next node in the input (we have saved this)
    currentNode = nextNode;
  }
  // finally return the tail (which is actually now the new head)
  return tail;
};
