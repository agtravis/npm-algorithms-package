'use strict';

/**
 * Returns conditional response
 * @param {number} num
 * @returns {string} `odd` or `even` or
 * @returns {boolean} false if incorrect
 */

module.exports = (num) => {
  // checks to see if a number was given
  if (num !== parseInt(num) || num === 0) return false;
  // if the remainder when divided by 2 is zero, it must be even
  if (num % 2 === 0) {
    return `even`;
    // if the remainder is 1, it must be odd
  } else if (num % 2 === 1) {
    return `odd`;
    // in case the number provided isn't an integer
  } else {
    return false;
  }
};
