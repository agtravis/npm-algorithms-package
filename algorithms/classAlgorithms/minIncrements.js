'use strict';

module.exports = (nums) => {
  // establish a new set to track unique elements
  const numSet = new Set();
  // establish a counter initialized to zero
  let count = 0;
  // loop through the inputs
  for (let num of nums) {
    // if the number is not in the set
    if (!numSet.has(num)) {
      // we add it
      numSet.add(num);
    } else {
      // otherwise as long as the set has the current iteration of the number
      while (numSet.has(num)) {
        // increment the number
        ++num;
        // and increment the counter
        ++count;
      }
      // once the while loop exits, the number is unique and can be added to the set
      numSet.add(num);
    }
  }
  // return the count
  return count;
};
