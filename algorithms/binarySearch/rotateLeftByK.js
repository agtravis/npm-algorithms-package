'use strict';

module.exports = (nums, k) => {
  // loop `k` times
  for (let i = 0; i < k; ++i) {
    // each loop takes the first element of the array and moves it to the back of the array
    nums.push(nums.shift());
  }
  // the original array in the new order is returned
  return nums;
};
