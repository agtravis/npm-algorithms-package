'use strict';

module.exports = (nums) => {
  // establish a new map to hole counts of the numbers
  const numCount = new Map();
  // loop through the input array
  for (const num of nums) {
    // track the counts incrementing if they exist, and initializing if they do not
    numCount.has(num)
      ? numCount.set(num, numCount.get(num) + 1)
      : numCount.set(num, 1);
  }
  // now loop through the map
  for (const [key, value] of numCount) {
    // the first time a key matches the value
    if (key === value) {
      // return true
      return true;
    }
  }
  // if the loop completes, return false
  return false;
};
