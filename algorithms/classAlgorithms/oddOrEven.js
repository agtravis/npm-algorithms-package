'use strict';

/**
 * Returns conditional response
 * @param {number} num
 * @returns {string} `odd` or `even` or
 * @returns {boolean} false if incorrect
 */

const oddOrEven = function (num) {
  if (num !== parseInt(num) || num === 0) return false;
  if (num % 2 === 0) {
    return `even`;
  } else if (num % 2 === 1) {
    return `odd`;
  } else {
    return false;
  }
};

export default oddOrEven;
