'use strict';

module.exports = (nums) => {
  // establish a variable to track the overall maximum value, and set it equal to the first item in the array
  let max = nums[0];
  // establish another variable to track a current maximum value, and also set to the first item in the array
  let currentMax = nums[0];
  // loop starting at the second item
  for (let i = 1; i < nums.length; ++i) {
    // set the current maximum to be the greater of the current max plus the iterated item, or just the item on its own
    currentMax = Math.max(nums[i] + currentMax, nums[i]);
    // then compare the overall max and the current max, and save the greater as the overall
    max = Math.max(max, currentMax);
  }
  // return the overall max
  return max;
};
