'use strict';

module.exports = (n) => {
  // set an output array to have one element, n
  const output = [n];
  // loop until n === 1
  while (n !== 1) {
    // if even divide n by 2, otherwise multiply by 3 and plus 1
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    // push reassigned n to the array
    output.push(n);
  }
  // returning the length of the array illustrates how many steps it took
  // could also be done with a counter to save space
  return output.length;
};
