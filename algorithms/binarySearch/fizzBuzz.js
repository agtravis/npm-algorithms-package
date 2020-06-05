'use strict';

module.exports = (n) => {
  // establish an output array
  const output = [];
  // loop from 1 through `n`
  for (let i = 1; i <= n; ++i) {
    // if the remainder of i / 15 is zero
    if (i % 15 === 0) {
      // push this to the array
      output.push(`FizzBuzz`);
      // check these other conditions
    } else if (i % 5 === 0) {
      output.push(`Buzz`);
    } else if (i % 3 === 0) {
      output.push(`Fizz`);
      // if we make it this far, push the iterator as a string
    } else {
      output.push(`${i}`); // i.toString()
    }
  }
  // return the array
  return output;
};
