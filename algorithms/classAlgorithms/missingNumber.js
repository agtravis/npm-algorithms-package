'use strict';

module.exports = (nums) => {
  // establish a Set to track which numbers exist
  const seen = new Set();
  // loop through the unsorted input
  for (const num of nums) {
    // adding each number to the set
    seen.add(num);
  }
  // loop again for as many times plus one as the length of the input
  for (let i = 0; i <= nums.length; ++i) {
    // if the set does not have the iterator
    if (!seen.has(i)) {
      // the iterator is the missing number
      // if there was no missing number, this will always be the next consecutive number after the existing highest number
      return i;
    }
  }
};
