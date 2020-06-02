'use strict';

module.exports = (matrix) => {
  // nested arrays with nested loops
  return matrix.reduce(
    // first array reduces by adding the totals of the reduced sub arrays
    (sum, arr) =>
      sum +
      // sub arrays are reduced by incrementing the total for each even number in the sub array
      arr.reduce(
        (total, current) => (current % 2 === 0 ? total + 1 : total),
        0
      ),
    0
  );
};
