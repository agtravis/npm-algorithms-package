'use strict';

module.exports = (number) => {
  // establish a boolean to track if the input is negative
  let negative = false;
  // if it is
  if (number < 0) {
    // make it positive
    number *= -1;
    // and track that it was negative
    negative = true;
  }
  // reverse the positive number by converting it to a string, then splitting to an array, reversing the array, then joining it back to a string
  // and finally converting it back to a number
  let outputNum = parseInt(number.toString().split(``).reverse().join(``));
  // if the negative boolean has been flagged, convert it back to a negative, then return, otherwise return as is
  return negative ? parseInt(`-${outputNum}`) : outputNum;
};
