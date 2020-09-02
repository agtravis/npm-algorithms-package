'use strict';

module.exports = (prices) => {
  // set the lowest price to be the first in the array
  let lowest = prices[0];
  // set the best maximum sale to be zero
  let currentMax = 0;
  // loop through the rest of the array, starting with the second element
  for (let i = 1; i < prices.length; ++i) {
    // compare the current lowest price to the current price in the array, and set the lowest price to be whatever is the smaller number
    lowest = Math.min(lowest, prices[i]);
    // compare the current highest profit with the sale price at this index, and set the highest profit to be whichever is larger
    currentMax = Math.max(currentMax, prices[i] - lowest);
  }
  // return the highest profit when the loop ends
  return currentMax;
};
