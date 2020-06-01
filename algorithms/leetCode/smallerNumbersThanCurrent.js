'use strict';

module.exports = (nums) => {
  // return a map of the input array
  return nums.map((current) => {
    // establish a count at zero
    let count = 0;
    // loop through the input array
    for (const num of nums) {
      // if the current is greater than the number being iterated on
      if (current > num) {
        // increment the count
        ++count;
      }
    }
    // return this count to the mapped array
    return count;
  });
};
