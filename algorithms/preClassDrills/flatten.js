'use strict';

// `...` rest operator allows the amount of input arguments to be flexible,
// and the input will be treating as an array of inputs
module.exports = (...arrs) => {
  // establish an output
  const output = [];
  // loop through the input
  for (const arr of arrs) {
    // if the item being iterated is an array
    if (Array.isArray(arr)) {
      // push to the output the elements in the array being iterated
      // this time the `...` represents the spread operator meaning spill out all the elements in the array
      output.push(...arr);
    }
  }
  // return the output
  return output;
};
