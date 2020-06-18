'use strict';

module.exports = (arr) => {
  // sort the array in descending order
  arr.sort((a, b) => (a < b ? 1 : -1));
  // store the initial length of the array
  const startLength = arr.length;
  // initialize a maximum limit for duration
  let timeLeft = 60;
  // loop as long as the current time left minus the potential next song isn't negative
  while (timeLeft - arr[arr.length - 1] >= 0) {
    // this simultaneously shortens the length of the input array while subtracting the value from the limit
    timeLeft -= arr.pop();
  }
  // return the difference between the array length at the beginning and the end
  return startLength - arr.length;
};
