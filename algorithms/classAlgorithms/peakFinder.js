'use strict';

module.exports = (nums) => {
  // is there is only one element, this must be the peak
  if (nums.length === 1) return nums[0];
  // set the peak to the first element
  let currentPeak = nums[0];
  // starting with the second element, loop
  for (let i = 1; i < nums.length; ++i) {
    // each time compare the current element to the peak and if it is less
    if (nums[i] < currentPeak) {
      // then we know the previous element was the peak, we can return it
      return currentPeak;
    } else {
      // otherwise reset the peak to be the current element
      currentPeak = nums[i];
    }
  }
  // if we get to the end of the array without ever going down, the peak must be the last element, return it
  return currentPeak;
};
