'use strict';

const mygcd = (x, y) => {
  // if y === 0 we can return x since 0 has no divisors
  // (this is a recursive function, so it doesn't necessarily make sense the first time it is called)
  // if x === x, the greatest common divisor is whatever they equal, we can return x or y
  // for the next iteration, y is passed in as x, and the remainder of x divided by y is passed in as y
  // eventually this will be zero when we hit the greatest common divisor
  // (if the inputs are always integers, the lowest this will be is 1)
  return y === 0 || x === y ? x : mygcd(y, x % y);
};

module.exports = mygcd;

/*
30, 12

12, 30 % 12 === 6

6, 12 % 6 === 0

y === 0 // return 6
*/
