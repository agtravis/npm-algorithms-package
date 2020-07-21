'use strict';

module.exports = (headA, headB) => {
  // set a pointer to look at each of the linked lists
  let left = headA.head;
  let right = headB.head;
  // create a set to track which nodes have been visited
  let visited = new Set();
  // traverse the first pointer, and add each node to the set
  while (left) {
    visited.add(left);
    left = left.next;
  }
  // next, traverse the second pointer
  while (right) {
    // as soon as we find a node we have already visited we have found the intersection
    if (visited.has(right)) {
      // return the node
      return right;
    }
    right = right.next;
  }
  // if the second pointer reaches the end with no intersection, the two lists do not meet,
  // return null
  return null;
};
