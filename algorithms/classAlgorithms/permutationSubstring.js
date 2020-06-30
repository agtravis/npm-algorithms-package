'use strict';

module.exports = (str, sub) => {
  // create a map to hold letter counts
  const strLetters = new Map();
  // loop through the input string
  for (const letter of str) {
    // if the letter exists in the map
    strLetters.has(letter)
      ? // increment the count stored by 1
        strLetters.set(letter, strLetters.get(letter) + 1)
      : // if not, create a count and set it to one
        strLetters.set(letter, 1);
  }
  // loop through the substring
  for (const letter of sub) {
    // if the map has the letter and the letter count is greater than zero
    // i.e. it has not yet been depleted
    if (strLetters.has(letter) && strLetters.get(letter) > 0) {
      // decrement the count
      strLetters.set(letter, strLetters.get(letter) - 1);
    } else {
      // otherwise return false
      return false;
    }
  }
  // if the loop completes, we can return true
  return true;
};
