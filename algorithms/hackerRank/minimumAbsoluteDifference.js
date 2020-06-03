'use strict';

module.exports = (arr) => {
  // first reverse sort the array
  const sortedArr = arr.sort((a, b) => (b > a ? 1 : -1));
  // initialize the diff variable to hold the largest number minus the next largest
  let diff = sortedArr[0] - sortedArr[1];
  // loop
  for (let i = 0; i < sortedArr.length; ++i) {
    // if the difference between the next two is less than the current,
    if (sortedArr[i] - sortedArr[i + 1] < diff) {
      // reassign
      diff = sortedArr[i] - sortedArr[i + 1];
    }
  }
  // return
  return diff;
};
