'use strict';

module.exports = (x) => {
  // if the number is negative, it won't be a palindrom, return negative (`-` counts)
  if (x < 0) return false;
  // copy the original value so we can modify it and keep preserved
  let original = x;
  // establish variables to track a remainder and a result
  let remainder = 0;
  let result = 0;
  // loop as long as the input remains more than zero
  while (original > 0) {
    // set the remainder variable to be the remainder when dividing the input by 10
    // (thus the last digit)
    remainder = original % 10;
    // set the result to be the current result multiplied by ten (moving the digits left)
    // and adding the remainder
    result = result * 10 + remainder;
    // then divide the input by ten and remove the remainder/decimal
    original = Math.floor(original / 10);
  }
  // this loop effectively removes the last digit on the end (right) of the input
  // and places it at the front (left) space being iterated
  // when the loop completes, see if the end result is equal to the input and return the boolean outcome
  return result === x;
};
