'use strict';

module.exports = (r, g, b) => {
  // helper function since this exact function will be called 3 times
  const converter = (num) => {
    // ensure the numbers provided are in range
    if (num > 255) num = 255;
    if (num < 0) num = 0;
    // use `toString` method to convert number to base 16, then uppercase to match expected result
    let hex = num.toString(16).toUpperCase();
    // if the hex has less than 2 characters, prefix with a zero
    return hex.length < 2 ? `0${hex}` : hex;
  };
  // return the concatenation of this function call on each input
  return converter(r) + converter(g) + converter(b);
};
