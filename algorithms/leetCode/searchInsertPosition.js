'use strict';

module.exports = (nums, target) => {
  // initialize an index pointer
  let i = 0;
  // loop until the element at i is greater than or equal to the target
  while (nums[i] < target) {
    ++i;
  }
  // return the index
  return i;
};
