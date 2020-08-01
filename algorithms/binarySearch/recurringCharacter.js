'use strict';

module.exports = (s) => {
  // establish a new set
  const seen = new Set();
  // loop through the input string
  for (let i = 0; i < s.length; ++i) {
    // if the set already has the letter at the iterating index of the string
    if (seen.has(s.charAt(i))) {
      // return the index
      return i;
    } else {
      // otherwise, add the character to the set
      seen.add(s.charAt(i));
    }
  }
  // if the loop completes, there were no duplicate characters, return -1
  return -1;
};
