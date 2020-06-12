'use strict';

module.exports = (s0, s1, n) => {
  // set the first two items in the array to be the two string inputs
  const A = [s0, s1];
  // loop up to `n` and for each iteration
  for (let i = 2; i <= n; ++i) {
    // push to the array depended on even or odd the appropriate concatenation
    A.push(i % 2 === 0 ? A[i - 1] + A[i - 2] : A[i - 2] + A[i - 1]);
  }
  // return the `n`th element
  return A[n];
};
