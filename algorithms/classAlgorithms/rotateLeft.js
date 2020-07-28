'use strict';

module.exports = (arr, positions) => {
  // create a new empty array
  const output = [];
  // a helper function to determine the new index position
  const newIndex = (currentIndex) => {
    // set the current index to be the current index minue the positions input
    currentIndex = currentIndex - positions;
    // for as long as the current index is less than zero
    while (currentIndex < 0) {
      // continue to add the length of the array to the current index
      currentIndex += arr.length;
    }
    // eventually return the updated index
    return currentIndex;
  };
  // loop through the input array
  for (let i = 0; i < arr.length; ++i) {
    // set the input array element at the index to be the element at the updated index in the new array
    output[newIndex(i)] = arr[i];
  }
  // return the output
  return output;
};
