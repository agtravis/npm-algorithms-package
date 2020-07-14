'use strict';

module.exports = (target, nums) => {
  // establish a map to track numbers and the index at which they occurred
  const indeces = new Map();
  // establish a variable to hold the output (it can be anything since it will be reassigned)
  let output = [];
  // loop through the array
  for (let i = 0; i < nums.length; ++i) {
    // if the map already has a property equal to the target minus the current number
    if (indeces.has(target - nums[i])) {
      // set the output to be an array of the index of that number followed by the current index
      // if the question asked for the first completed pair, we could return here
      // this question asked for the first started pair
      output = [indeces.get(target - nums[i]), i];
    } else {
      // otherwise we set the current number in the map
      indeces.set(nums[i], i);
    }
  }
  // if the output variable remains an empty array, no answer was found, but if it has 2 elements, it was succesfull and can be returned
  return output.length >= 2 ? output : null;
};
