'use strict';

module.exports = (arr) => {
  // establish a set to track elements that appear in the array
  const seen = new Set();
  // loop through the input array
  for (const num of arr) {
    // if 20 divided by the current number results in a number that has already been seen in the set
    if (seen.has(20 / num)) {
      // return true
      return true;
    } else {
      // otherwise add the current number to the set
      seen.add(num);
    }
  }
  // if the loop finishes, return false
  return false;
};
