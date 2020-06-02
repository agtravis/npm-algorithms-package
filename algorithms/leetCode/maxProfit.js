'use strict';

// this is solved using dynamic programming
module.exports = (prices) => {
  // difference is the maximum profit so far
  let difference = 0;
  // lowest is initialized as the first price in the array
  let lowest = prices[0];
  // loop through the array of stock prices
  for (const price of prices) {
    // set lowest to be whatever is lower, the current value saved, or the current value being iterated
    lowest = Math.min(lowest, price);
    // set the difference to be what is greater, the current saved difference or the current price minus the lowest value
    difference = Math.max(difference, price - lowest);
  }
  // return the value of difference
  return difference;
};
