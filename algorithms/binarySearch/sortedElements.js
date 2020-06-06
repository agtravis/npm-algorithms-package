'use strict';

module.exports = (nums) => {
  // create a copy of the input array by spreading it into a new array, then sorting and assigning it
  // sorting changes the original
  const sorted = [...nums].sort((a, b) => a - b);
  // establish a counter
  let counter = 0;
  // loop through the arrays at the same time
  for (let i = 0; i < nums.length; ++i) {
    // if the elements match up
    if (sorted[i] === nums[i]) {
      // increment the counter
      ++counter;
    }
  }
  // return it
  return counter;
};
