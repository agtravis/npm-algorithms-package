'use strict';

module.exports = (n) => {
  // establish an output array
  const output = [];
  // helper function to find out if any of the digits passed in are numbers in themselves divisible by 3
  const contains369 = (num) => {
    // loop through an array of the digits as strings
    for (const digit of num.toString().split(``)) {
      // if the digit as an integer is divisible by 3 and isn't also zero (as a string)
      if (parseInt(digit) % 3 === 0 && digit !== `0`) {
        // it passes and return true
        return true;
      }
    }
    // otherwise return false
    return false;
  };
  // loop from one up to the input
  for (let i = 1; i <= n; ++i) {
    // if the number is either divisible by 3 directly, or passes the helper condition
    if (i % 3 === 0 || contains369(i)) {
      // push the string to the output array
      output.push(`clap`);
    } else {
      // otherwise push the iterator as a string
      output.push(i.toString());
    }
  }
  // return
  return output;
};
