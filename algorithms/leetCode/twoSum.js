'use strict';

module.exports = (nums, target) => {
  // establish a new map
  const targetCounts = new Map();
  // loop through the input array
  for (let i = 0; i < nums.length; ++i) {
    // set the iterated number to be a property of the map with a value of the index
    const num = nums[i];
    targetCounts.set(num, i);
  }
  // second loop through
  for (let i = 0; i < nums.length; ++i) {
    // set a variable to store the difference between the target and the number being iterated
    const num = nums[i];
    const remainder = target - num;
    // get the index value of the property in the map named for the remainder
    const remainderIndex = targetCounts.get(remainder);
    // if that exists and if it is not the element we are currently on
    if (remainderIndex && remainderIndex !== i) {
      // this is the expected format for return output
      return [i, remainderIndex];
    }
  }
  // this is what is expected if nothing is found
  return [];
};
