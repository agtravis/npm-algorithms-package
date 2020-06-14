'use strict';

module.exports = (nums) => {
  // establish a variable to track the current subarray total, initialize as the first value
  let current = nums[0];
  // establish a variable to track the maximum subarray so far, also initialize as the first value
  let max = nums[0];
  // start looping at the second index, and for each
  for (let i = 1; i < nums.length; ++i) {
    // reassign the current value if the sum of the current number and the current subarray total is larger than the stored value
    current = Math.max(nums[i], current + nums[i]);
    // reassign the max value if the current is larger than the stored max
    max = Math.max(max, current);
  }
  // return the max
  return max;
};
