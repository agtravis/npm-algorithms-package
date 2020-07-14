'use strict';

module.exports = (nums) => {
  // this solution requires arrays of less than 2 in length to return true
  if (nums.length < 2 || !nums) {
    return true;
    // first we check to see if the second number is greater than the first
    // then we know if should increase
  } else if (nums[1] > nums[0]) {
    // then loop
    for (let i = 1; i < nums.length - 1; ++i) {
      // any time the following number in the sequence is either greater than or equal to the current number
      if (nums[i] >= nums[i + 1]) {
        // it is not strictly increasing and we return false
        return false;
      }
    }
    // if the loop completes we can return true, each successive number was greater than the previous
    return true;
    // otherwise if it is decreasing
  } else if (nums[1] < nums[0]) {
    // we do the exact opposite as above
    for (let i = 1; i < nums.length - 1; ++i) {
      if (nums[i] <= nums[i + 1]) {
        return false;
      }
    }
    return true;
    // the only scenario realistically left (with valid inputs)
    // is that the first two numbers are equal
  } else {
    // thus we know it is not strictly increasing or decrease, and we can return false without looping
    return false;
  }
};
