'use strict';

module.exports = {
  // using the build in method, this compares the actual square root to the root rounded down
  // if perfect, these will be the same
  isPerfectSquareSqrt: (num) => Math.sqrt(num) === Math.floor(Math.sqrt(num)),
  // this loops
  isPerfectSquareLoop: (num) => {
    // when i^2 is greater than the number, the loop will end
    // i * i === Math.pow(i, 2)
    for (let i = 0; Math.pow(i, 2) <= num; ++i) {
      // if the iterator squared equals the target num
      if (i * i === num) {
        // success
        return true;
      }
    }
    // if the iterator multiplied by itself is greater than the number,
    // we never hit the perfect square, return false
    return false;
  },
};
