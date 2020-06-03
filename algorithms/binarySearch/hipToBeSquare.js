'use strict';

module.exports = (nums) => {
  // map the array by squaring the number,
  // but negatives squared become positive so it needs to be sorted after again
  return nums.map((num) => num * num).sort((a, b) => a - b);
};
