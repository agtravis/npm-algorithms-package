'use strict';

module.exports = (nums) => {
  // helper function that takes in a string
  const reducArr = (direction) => {
    // first it sorts a copy of the array based on the input string for direction
    const sorted =
      direction === `asc`
        ? // ascending order
          [...nums].sort((a, b) => a - b)
        : // or descending order
          [...nums].sort((a, b) => b - a);
    // an helper output array established
    const output = [];
    // loop through the length of the input array
    for (let i = 0; i < nums.length; ++i) {
      // to the output array push the absolute difference between the new and old elements in the current index
      output.push(Math.abs(sorted[i] - nums[i]));
    }
    // return a reduction of this array
    return output.reduce((sum, current) => (sum += current), 0);
  };
  // run the array sorted both ways through the helper function
  const costAscRed = reducArr(`asc`);
  const costDescRed = reducArr(`desc`);
  // return the lesser of these two amounts
  return costAscRed > costDescRed ? costDescRed : costAscRed;
};
