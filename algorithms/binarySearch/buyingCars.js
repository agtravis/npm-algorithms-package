'use strict';

module.exports = (prices, k) => {
  // sort the input array so that the smallest number is at the end
  prices.sort((a, b) => (a > b ? -1 : 1));
  // initialize a counter
  let count = 0;
  // as long as the value left in `k` minus the current cost at the last position of the array is greater than
  // or equal to zero
  while (k - prices[prices.length - 1] >= 0) {
    // increment the counter
    ++count;
    // subtract the last item (and remove it) from the array from the the budget
    k -= prices.pop();
  }
  // return the counter
  return count;
};
