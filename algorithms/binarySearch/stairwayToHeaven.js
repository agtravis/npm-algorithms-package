'use strict';

module.exports = (nums) => {
  // return a mapped array of each element added to its index
  return nums.map((current, index) => current + index);
};
