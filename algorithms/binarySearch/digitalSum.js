'use strict';

module.exports = (num) => {
  // set an accumulator
  let sum = 0;
  // until the input is zero
  while (num !== 0) {
    // add to the accumulator the remainder when num is divided by 10
    sum += num % 10;
    // rest num to everything but the remainder when divided by 10
    num = Math.floor(num / 10);
  }
  // return the accumulator
  return sum;
};
