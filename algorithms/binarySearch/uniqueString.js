'use strict';

module.exports = (s) => {
  // establish a new set
  const seen = new Set();
  // loop through the string
  for (const letter of s) {
    // if the set already contains the letter, we already added it
    if (seen.has(letter)) {
      // return false, not all unique
      return false;
    } else {
      // otherwise, add the letter to the set
      seen.add(letter);
    }
  }
  // if the loop finishes, everything was unique, return true
  return true;
};
