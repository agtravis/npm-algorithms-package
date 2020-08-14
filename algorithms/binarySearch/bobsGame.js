'use strict';

module.exports = (nums) => {
  // establish a counter to track how many odd numbers there are
  let count = 0;
  // loop through the input
  for (const num of nums) {
    // if the current number is odd, increment the counter
    if (num % 2 === 1) {
      ++count;
    }
  }
  // if the count is even, return the count divided by 2
  // otherwise return -1 as required by the problem
  return count % 2 === 0 ? count / 2 : -1;
};
