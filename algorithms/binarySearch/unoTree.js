'use strict';

const unoTree = (root) => {
  // a helper function that calls itself recursively
  const recurse = (root, val) => {
    // until the root does not exist, in which case return true
    if (!root) return true;
    // as soon as we find one value that does not equal the value to match, we can return false
    if (root.value !== val) return false;
    // call this function again on the left node and the right node, passing the value to check each time
    return recurse(root.left, val) && recurse(root.right, val);
  };
  // the initial call only needs one call because the left and right doesn't happen until the first node
  return recurse(root, root.value);
};

module.exports = unoTree;
