'use strict';

module.exports = (n) => {
  // helper function to calculate subarray
  const getSubarray = (num, multiplier) => {
    // establish subarry
    const subArr = [];
    // for each increment of the number
    for (let i = 1; i <= num; ++i) {
      // push to the array the number multiplied by the multiplier passed in
      // number changes, multiplier constant
      subArr.push(i * multiplier);
    }
    return subArr;
  };
  // 2D array
  const output = [];
  // increment the number
  for (let i = 1; i <= n; ++i) {
    // pass to the subarray helper function the number and the multiplier
    // number constant multiplier increments
    output.push(getSubarray(n, i));
  }
  // this creates a nested array, the multiplier remains constant for each nested array but increases for the main array iterations,
  // within each nested array, the iterator increases
  return output;
};
