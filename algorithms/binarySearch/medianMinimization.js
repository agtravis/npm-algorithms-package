'use strict';

module.exports = (nums) => {
  // first sort the array in ascending order
  nums.sort((a, b) => a - b);
  // next, simply return the absolute difference between the two elements at the center of the array
  return Math.abs(nums[nums.length / 2] - nums[nums.length / 2 - 1]);
};
