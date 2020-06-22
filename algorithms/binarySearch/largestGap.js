'use strict';

module.exports = (nums) => {
  // first sort the array in ascending order
  nums.sort((a, b) => a - b);
  // initialize a variable to be equal to the difference between the first two elements in the sorted array
  let difference = nums[1] - nums[0];
  // loop, starting with the third element
  for (let i = 2; i < nums.length; ++i) {
    // the current element minus the previous element is greater than the current held value
    if (nums[i] - nums[i - 1] > difference) {
      // assign this new value to be help
      difference = nums[i] - nums[i - 1];
    }
  }
  // return the held value
  return difference;
};
