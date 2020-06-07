'use strict';

// this function require construction of a valid tree before running
const elephantTree = (root) => {
  // a recursive helper function to make the calculations
  const recurse = (node) => {
    // if there is no node or the node is null, return zero
    if (!node) return 0;
    // otherwise, set the current node value to be the sum of
    // its current value plus the sums of the recursed left and right nodes
    // if no child nodes, the value remains the same ( + 0 + 0)
    node.val = node.val + recurse(node.left) + recurse(node.right);
    // when calculated, this new value can be returned
    return node.val;
  };
  // call the recursive function to change the values in the tree
  recurse(root);
  // then return the updated tree
  return root;
};

module.exports = elephantTree;
