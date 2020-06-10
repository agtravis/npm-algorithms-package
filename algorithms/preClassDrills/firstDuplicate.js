'use strict';

module.exports = (arr) => {
  // establish a new set to track numbers
  const seen = new Set();
  // loop through array
  for (const num of arr) {
    // if the number is already in the set
    if (seen.has(num)) {
      // we can return that number as the first duplicate
      return num;
      // otherwise if the set doesn't yet include it
    } else {
      // add it to the set
      seen.add(num);
    }
  }
  //if not found, this function will return undefined
};
