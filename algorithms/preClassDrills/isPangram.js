'use strict';

module.exports = (str) => {
  // establish a new empty set
  const alphabet = new Set();
  // loop through the character codes for a-z
  for (let i = 97; i <= 122; ++i) {
    // adding each to the set
    alphabet.add(String.fromCharCode(i));
  }
  // loop through the input string
  for (const letter of str) {
    // if the letter exists in the set
    if (alphabet.has(letter.toLowerCase())) {
      // remove it from the set
      alphabet.delete(letter.toLowerCase());
    }
  }
  // if the set spread into an array has a length of zero, all characters from a-z existed at least once
  // return true or false conditionally
  return [...alphabet].length === 0;
};
