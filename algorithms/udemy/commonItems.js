'use strict';

module.exports = (arr1, arr2) => {
  // create new map
  const map = new Map();
  // loop through first array
  for (const letter of arr1) {
    // set each letter to a property in the map
    map.set(letter);
  }
  // loop through the second array
  for (const letter of arr2) {
    // if the map has that iterated property
    if (map.has(letter)) {
      // return true (early exit)
      return true;
    }
  }
  // if the loop completes, it doesn't exist in both array, return false
  return false;
};
