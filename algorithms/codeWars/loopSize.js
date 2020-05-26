'use strict';

//The input to this is a linked list that at some point joins back to itself to create a loop
module.exports = (node) => {
  // create an empty array to store places that have been visited by the code
  const visited = [];
  // index is established as -1 (not existing)
  let index = -1;
  // as long as there is a node (so indefinitely in this case if there is a loop, otherwise eventually it will be null)
  while (node !== null) {
    // the index variable will be the index of the current node in the array storing visited nodes
    // on the first while loop, it remains as -1
    // it will remain -1 until the node exists in the array
    index = visited.indexOf(node);
    // if the index is less than zero, i.e. === -1
    if (index < 0) {
      // push the node into the visited array
      visited.push(node);
      // if the index is zero or higher, meaning it has already been visited
    } else {
      // end the while loop
      break;
    }
    // set the node to be the current node's 'next' property
    node = node.next;
  }
  // the problem asks for the size of the loop
  // the visited array length is equal to the total number of nodes
  // all nodes before the final index variable node were not in the loop
  // therefore the loop is the length of the array minus the nodes that came before the loop
  return visited.length - index;
};
