'use strict';

module.exports = (nums) => {
  // loop through the input array
  for (let i = 0; i < nums.length; ++i) {
    // if the current number matches the previous number
    if (nums[i] === nums[i - 1]) {
      // splice the array at the current index, for 1 element
      nums.splice(i, 1);
      // then pull back the iterator location to prevent the iterator effectively skipping an element
      --i;
    }
  }
  return nums;
};
