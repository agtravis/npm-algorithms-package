'use strict';

module.exports = (A) => {
  // define n to be half the length of the input array
  const n = A.length / 2;
  // create a new map
  const numberMap = new Map();
  // loop through the input array
  for (const number of A) {
    // define a variable to get the current count (this can be undefined if it is the first time)
    const currentNumberCount = numberMap.get(number);
    // set an updated count to be either 1 if current count is undefined and increment if not undefined
    const updatedNumberCount = currentNumberCount ? currentNumberCount + 1 : 1;
    // set the new value
    numberMap.set(number, updatedNumberCount);
    // if the updated number count is equal to n, we know it is 50% of the input array
    if (numberMap.get(number) === n) {
      // and can return it, early if so
      return number;
    }
  }
};
