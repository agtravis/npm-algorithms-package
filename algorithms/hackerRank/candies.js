'use strict';

module.exports = (arr) => {
  // establish an array to track the candies to be distributed
  const candies = [];
  // loop through to initialize the output array ensuring each child gets one candy
  for (const num of arr) {
    candies.push(1);
  }
  // loop again
  for (let i = 0; i < arr.length; i++) {
    // if the current array number is greater than the previous number
    if (arr[i] > arr[i - 1]) {
      // the current output needs to be made greater than the previous one by 1
      candies[i] = candies[i - 1] + 1;
    }
  }
  // now loop backwards, starting at the penultimate
  for (let i = arr.length - 2; i >= 0; i--) {
    // if the current is greater then the previous (going backwards)
    if (arr[i] > arr[i + 1]) {
      // the current output needs to be whatever is greater,
      // the current value (because it has to be greater than what is next, backwards)
      // or the previous (backwards) incremented by 1
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  // the solution requires the total amount of candies, so reduce and return
  return candies.reduce((total, num) => total + num, 0);
};
