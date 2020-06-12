'use strict';

module.exports = (n) => {
  // helper function to determine if number is valid
  const isMultiple = (num) => {
    if (num % 3 === 0 || num % 4 === 0 || num % 7 === 0) return true;
  };
  // establish accumulator
  let sum = 0;
  // loop
  for (let i = 1; i <= n; ++i) {
    // if iterator meets a condition
    if (isMultiple(i)) {
      // add it to the accumulator
      sum += i;
    }
  }
  // return
  return sum;
};
