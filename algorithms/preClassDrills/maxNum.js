'use strict';

module.exports = {
  maxNumMax: (arr) => {
    return Math.max(...arr);
  },
  maxNumSort: (arr) => {
    return arr.sort((a, b) => b - a)[0];
  },
  maxNumDP: (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },
};
