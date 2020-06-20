'use strict';

module.exports = (arr) => {
  // helper function will reduce each subarray to a number representing the count of how many match the requirement
  const countXs = (subArr) =>
    subArr.reduce(
      (subCount, letter) => (letter === `X` ? ++subCount : subCount),
      0
    );
  // then return the input array reduced by accumulating the helper function return counts
  return arr.reduce((count, current) => count + countXs(current), 0);
};
