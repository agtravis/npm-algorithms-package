'use strict';

module.exports = (nums) => {
  // output array to collect valid numbers
  const output = [];
  // set an iterator to zero
  let i = 0;
  // loop until input array exhausted
  while (i < nums.length) {
    // if the current element in the input array does not match the most recently added output element
    if (nums[i] !== output[output.length - 1]) {
      // push this to the array
      output.push(nums[i]);
    }
    // increment i
    ++i;
  }
  // return the number of elements in the output array
  return output.length;
};
