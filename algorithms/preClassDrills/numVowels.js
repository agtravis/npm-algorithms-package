'use strict';

module.exports = (str) => {
  // create a new Set containing the vowel characters
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // initialize a counter for the vowels
  let vowelsCount = 0;
  // loop through the string
  for (const letter of str) {
    // if the set includes the current letter
    if (vowels.has(letter)) {
      // increment the counter
      ++vowelsCount;
    }
  }
  // return the count
  return vowelsCount;
};
