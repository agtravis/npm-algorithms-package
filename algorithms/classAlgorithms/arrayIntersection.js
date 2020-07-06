'use strict';

module.exports = (arr1, arr2) => {
  // establish a new map to count the letters of the first input array
  const arr1count = new Map();
  // establish a new array to collect pairs and eventually return
  const output = [];
  // loop through the first input
  for (const num of arr1) {
    // if the count map already has the key for the number
    if (arr1count.has(num)) {
      // increment it
      arr1count.set(num, arr1count.get(num) + 1);
    } else {
      // otherwise establish it to have that key and set it to one
      arr1count.set(num, 1);
    }
  }
  // now loop through the second input
  for (const num of arr2) {
    // if the map has a key for the number AND the value is greater than zero, i.e. it has not already been decremented
    if (arr1count.has(num) && arr1count.get(num) > 0) {
      // push it to the output array
      output.push(num);
      // and decrement in the map
      arr1count.set(num, arr1count.get(num - 1));
    }
  }
  // return the output array
  return output;
};
