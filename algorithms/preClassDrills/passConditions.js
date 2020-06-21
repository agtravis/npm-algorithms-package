'use strict';

function hasSome(arr, callback) {
  // check input for validity
  // if there is no array, it cannot have any elements that pass
  if (!arr) return false;
  // loop through the array input
  for (const item of arr) {
    // run the callback on each item and if it comes back true
    if (callback(item)) {
      // we know at least one item in the array passes and we can return early true
      return true;
    }
  }
  // if it makes it through the loop then nothing passed the callback, return false
  return false;
  // one line - use the `some` method
  // return arr.some(item => callback(item));
}

function hasNone(arr, callback) {
  // check input for validity
  // if there is no input, then by default it does not have any elements that pass
  if (!arr) return true;
  // loop through the array input
  for (const item of arr) {
    // run the callback on each item and if it comes back true
    if (callback(item)) {
      // we know at least one item in the array passes and we can return early false
      return false;
    }
  }
  // if it makes all the way through the loop and haven't returned yet, none passed and we return true
  return true;
  // one line - use filter if the new array length is zero, nothing passed the test
  // return arr.filter(item => callback(item)).length === 0;
}

function hasAll(arr, callback) {
  // check input for validity
  // if there is no input, by default no elements and therefore not all elements can pass
  if (!arr) return false;
  // loop through the array input
  for (const item of arr) {
    // run the callback on each item and if it comes back false
    if (!callback(item)) {
      // we know at least one item in the array failed and we can return early
      return false;
    }
  }
  // if the loop finishes, we know none of the tests failed, return true
  return true;
  // one line - compare the length of the array after being filtered to its original length
  // return arr.filter(item => callback(item)).length === arr.length;
}

function hasMost(arr, callback) {
  // check input for validity
  // if there is no input, by default no elements and therefore not more than half the elements can pass
  if (!arr) return false;
  // initialize a counter
  let count = 0;
  // loop through the array input
  for (const item of arr) {
    // run the callback on each item and if it comes back true
    if (callback(item)) {
      // increment a counter
      ++count;
      // check each time to see if more than 50% have passed the test, and if so return early
      if (count > arr.length / 2) return true;
    }
  }
  // if the count never meets the target, we return false
  return false;
  // return arr.filter(item => callback(item)).length > arr.length / 2;
}

module.exports = {
  hasSome,
  hasAll,
  hasNone,
  hasMost,
};
