'use strict';

module.exports = (arr) => {
  // establish a new set to track which elements have been seen
  const seen = new Set();
  // loop through the input
  for (const num of arr) {
    // if the element is already in the set
    if (seen.has(num)) {
      // it is not unique, and we can return early, false
      return false;
    } else {
      // otherwise add the element to the set
      seen.add(num);
    }
  }
  // if it makes it to the end of the loop, each item is unique, return true
  return true;
};
