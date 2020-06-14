'use strict';

module.exports = (nums) => {
  // establish an add to index to represent the index we are assigning
  let switchIndex = 0;
  // loop through the input
  for (let i = 0; i < nums.length; ++i) {
    // if the current item is not zero
    if (nums[i] !== 0) {
      // the element assigned to the add index is the current element being iterated
      nums[switchIndex] = nums[i];
      // if the index being assigned is not equal to the current iterant,
      if (switchIndex !== i) {
        // the current spot can be reassigned to zero
        nums[i] = 0;
      }
      // increment the add index
      ++switchIndex;
    }
    // if nums[i] === 0, index does not get incremented
  }
  return nums;
};
