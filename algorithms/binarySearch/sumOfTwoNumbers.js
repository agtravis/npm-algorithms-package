'use strict';

module.exports = (nums, k) => {
  // establish a set to track which numbers have been seen
  const equalsK = new Set();
  // loop through the array
  for (const num of nums) {
    // check the set to see if it already contains a key for the target minus the current number
    if (equalsK.has(k - num)) {
      // if it does return true
      return true;
    } else {
      // otherwise add the current number to the set
      equalsK.add(num);
    }
  }
  // if the loop completes, return false
  return false;
};
