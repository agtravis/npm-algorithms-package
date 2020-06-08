'use strict';

module.exports = (num) => {
  // establish an output number as 1 since we will be multiplying
  let output = 1;
  // loop starting at 1 and going up until the input number
  for (let i = 1; i <= num; ++i) {
    // multiply the current product by the iterator
    output *= i;
  }
  // return
  return output;
};
