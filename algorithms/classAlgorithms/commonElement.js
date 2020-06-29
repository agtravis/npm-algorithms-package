'use strict';

module.exports = (arrA, arrB) => {
  // establish a new set to track which numbers exist in the first array
  const seen = new Set();
  // loop through the first array
  for (const num of arrA) {
    // adding each number to the set
    seen.add(num);
  }
  // next, loop through the second array
  for (const num of arrB) {
    // if the set already has this number
    if (seen.has(num)) {
      // return the number
      return num;
    }
  }
  // this problem guarantees a valid answer, so no default return is necessary
};
