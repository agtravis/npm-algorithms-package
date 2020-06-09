'use strict';

module.exports = (arr) => {
  // this for loop has a double pointer moving in different directions
  // the loop will continue for as long as l is less than r, meaning the two pointers have not crossed yet
  for (let l = 0, r = arr.length - 1; l < r; ++l, --r) {
    // assign a temporary holding space for one value
    let temp = arr[l];
    // assign the opposing value to the index we just copied
    arr[l] = arr[r];
    // finally overwrite the opposing value with the copied value
    arr[r] = temp;
  }
  // return THE SAME array, not a new one or a copy
  return arr;
};
