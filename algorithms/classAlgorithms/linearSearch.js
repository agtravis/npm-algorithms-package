'use strict';

module.exports = (arr, target) => {
  // loop through the input array
  for (let i = 0; i < arr.length; ++i) {
    // compare each array element to the target
    if (arr[i] === target) {
      // if it matches, return the index
      return i;
    }
  }
  // if it doesn't at all, return -1
  return -1;
};
