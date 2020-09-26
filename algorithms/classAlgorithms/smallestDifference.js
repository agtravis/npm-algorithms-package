'use strict';

module.exports = (arr1, arr2) => {
  // initialize index for each array to zero
  let left = 0;
  let right = 0;
  // establish an array variable to contain the outputs
  let bestPair = [];
  // initialize the best difference to be Infinity (the largest number)
  let bestDiff = Infinity;

  // loop until either array has been completely looped through
  while (left < arr1.length || right < arr2.length) {
    // set a current difference to be the absolute difference between the two pointers
    const currentDiff = Math.abs(arr1[left] - arr2[right]);
    // if the current difference is smaller than the current saved smallest difference
    if (currentDiff < bestDiff) {
      // if it is, reassign the value to be the current
      bestDiff = currentDiff;
      // set the current best pair to be the two current pointed at elements
      bestPair = [arr1[left], arr2[right]];
      // and if the difference is zero, we can return earlier since no further result can be better
      if (bestDiff === 0) return bestPair;
    }
    // increment in the array in which currently has the lower of the two elements
    arr1[left] < arr2[right] ? ++left : ++right;
  }
  // return whatever is the best pair
  return bestPair;
};
