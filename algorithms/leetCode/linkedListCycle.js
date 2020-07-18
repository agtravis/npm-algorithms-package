'use strict';

module.exports = (linkedList) => {
  // set a pointer to look at the first node of the linked list
  let currentNode = linkedList.head;
  // create a Set to store the unique nodes that get visited
  const visited = new Set();
  // as long as the current node is not null
  while (currentNode) {
    // if we haven't already seen this node
    if (!visited.has(currentNode)) {
      // add it to the set
      visited.add(currentNode);
      // and move to the next node
      currentNode = currentNode.next;
    } else {
      // otherwise if we have seen it, it must be the beginning of a loop, return true
      return true;
    }
  }
  // if the loop ends, the node is null, it reached the tail, return false
  return false;
};
