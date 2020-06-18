'use strict';

module.exports = (node) => {
  // establish a counter
  let counter = 0;
  // as long as the node exists
  while (node) {
    // increment the counter
    ++counter;
    // set the node to be the next property which is another node
    // null in which case the while loop will end
    node = node.next;
  }
  // return the counter
  return counter;
};
