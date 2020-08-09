'use strict';

module.exports = (x) => {
  // establish a variable `k` to store the negative status of the input (-1 for negative, 1 for positive)
  let k = x < 0 ? -1 : 1;
  // multiply the input by the value of k (thus converting it to positive if negative)
  x *= k;
  // take the positive value of the input, convert it to a string, then split it, reverse it, join it, and convert it back to an integer
  let reversed = parseInt(x.toString().split(``).reverse().join(``));
  // return that number multiplied again by `k`, unless the value of that number is too great, per the problem details
  return reversed > Math.pow(2, 31) - 1 ? 0 : reversed * k;
};
