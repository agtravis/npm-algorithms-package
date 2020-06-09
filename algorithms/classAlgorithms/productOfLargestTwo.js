'use strict';

module.exports = (arr) => {
  // return the product of the first two elements in the input array sorted in descending order
  return arr.sort((a, b) => b - a)[1] * arr[0];
};
