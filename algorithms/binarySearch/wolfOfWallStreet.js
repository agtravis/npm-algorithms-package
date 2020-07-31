'use strict';

module.exports = (prices) => {
  // this will track the current highest difference
  let difference = 0;
  // this will track the lowest of the prices (start as the first element)
  let lowest = prices[0];
  // loop starting with the second element
  for (let i = 1; i < prices.length; ++i) {
    // compare the lowest so far with the current, reassigning if necessary
    lowest = Math.min(lowest, prices[i]);
    // then compare and reassign the highest, either the current difference, or the current price minus the current lowest price.
    difference = Math.max(prices[i] - lowest, difference);
  }
  // return the highest difference
  return difference;
};
