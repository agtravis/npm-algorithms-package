'use strict';

module.exports = (n) => {
  // return the boolean return of the conditional statement
  return (
    // compare the input
    n ===
    // to the result of the input
    n
      // converted to a string
      .toString()
      // split into an array
      .split(``)
      // reduced
      .reduce(
        (total, current, index, array) =>
          // for each number accumulate the current number to the power of the length of the array
          total + Math.pow(current, array.length),
        // initialize the accumulator at zero
        0
      )
  );
};
