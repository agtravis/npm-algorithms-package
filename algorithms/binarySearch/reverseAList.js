'use strict';

module.exports = (nums) => {
  const output = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    output.push(nums[i]);
  }
  return output;
};
