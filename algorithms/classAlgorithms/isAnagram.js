'use strict';

module.exports = {
  // sort both strings first, then compare
  // sorting is generally considered O(n log(n))
  isAnagramSort: (strA, strB) => {
    // helper function to sort the characters in the string
    const sortString = (str) => {
      // return the input
      return (
        str
          // split into an array
          .split(``)
          // sort the characters
          .sort((a, b) => (a > b ? 1 : -1))
          // join back together as a string
          .join(``)
      );
    };
    // sort both the strings
    const sortA = sortString(strA);
    const sortB = sortString(strB);
    // return the boolean comparison result
    return sortA === sortB;
  },
  // O(n) time but O(n) space
  isAnagramMap: (strA, strB) => {
    // create a new map
    const strAMap = new Map();
    // create and increment counts for each letter of the first string
    for (const letter of strA) {
      !strAMap.has(letter)
        ? strAMap.set(letter, 1)
        : strAMap.set(letter, strAMap.get(letter) + 1);
    }
    // for the second string, decrement letter counts and initialize as negative 1
    for (const letter of strB) {
      !strAMap.has(letter)
        ? strAMap.set(letter, -1)
        : strAMap.set(letter, strAMap.get(letter) - 1);
    }
    // loop through the map
    for (const [key, value] of strAMap) {
      // if all keys return a value of zero then both strings had each of those letters in the same quantity as eachother
      // if the value is not zero, they aren't balance and can return false at the first encounter
      if (value !== 0) {
        return false;
      }
    }
    // if it reaches the end, return true
    return true;
  },
};
