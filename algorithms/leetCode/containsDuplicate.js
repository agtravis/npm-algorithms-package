'use strict';

module.exports = (nums) => {
  // establish a set to track what we've seen
  const seen = new Set();
  // loop through input
  for (const num of nums) {
    // if the element already exists in the set
    if (seen.has(num)) {
      // it is a duplicate and we return true
      return true;
      // otherwise
    } else {
      // the element is added to the set
      seen.add(num);
    }
  }
  // if we haven't returned by the time we end the loop, we never hit a duplicate
  // return false
  return false;
};
