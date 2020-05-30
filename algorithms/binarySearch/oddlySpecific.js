'use strict';

module.exports = (n) => {
  let sum = 0;
  for (let i = 1; i <= n * 2; i += 2) {
    sum += i;
  }
  return sum;
};

// also this works:
// return n * n
