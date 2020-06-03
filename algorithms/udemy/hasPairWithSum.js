'use strict';

const hasPairWithSumSortDoublePointer = (arr, sum) => {
  arr = arr.sort((a, b) => a - b);
  let f = 0;
  let e = arr.length - 1;
  while (f < e) {
    if (arr[f] + arr[e] === sum) {
      return true;
    } else {
      arr.length % 2 === 0 ? ++f : --e;
    }
  }
  return false;
};

function hasPairWithSumSet(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

module.exports = {
  hasPairWithSumSortDoublePointer,
  hasPairWithSumSet,
};
