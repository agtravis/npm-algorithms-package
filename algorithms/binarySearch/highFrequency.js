'use strict';

module.exports = (nums) => {
  // establish a map to track element counts
  const numCount = new Map();
  // loop through input
  for (const num of nums) {
    // keep a count
    numCount.has(num)
      ? numCount.set(num, numCount.get(num) + 1)
      : numCount.set(num, 1);
  }
  // set the highest count to be the value of the first number in the array
  let highest = numCount.get(nums[0]);
  // loop through the counted number map
  for (const [key, value] of numCount) {
    // if we find a count that was higher than what is currently assigned
    if (value > highest) {
      // reassign
      highest = value;
    }
  }
  // return the highest
  return highest;
};
