'use strict';

module.exports = {
  maxNumMax: (arr) => {
    // uses the built in method, but spreads the array to work
    return Math.max(...arr);
  },
  maxNumSort: (arr) => {
    // greedy, sorts and takes the first index
    return arr.sort((a, b) => b - a)[0];
  },
  maxNumDP: (arr) => {
    // dynamic programming
    // set the first index to be the output
    let max = arr[0];
    // loop starting at second index
    for (let i = 1; i < arr.length; ++i) {
      // compare each element and if greater
      if (arr[i] > max) {
        // reassign
        max = arr[i];
      }
    }
    return max;
  },
};
