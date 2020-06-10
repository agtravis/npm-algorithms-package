'use strict';

module.exports = (str) => {
  // establish a new map to track the letters
  const letterCount = new Map();
  // loop through the input
  for (const letter of str) {
    // if the letter is a space character, it can be ignored
    if (letter !== ` `) {
      // if the letterCount has the letter
      letterCount.has(letter)
        ? // set the counter to increment
          letterCount.set(letter, letterCount.get(letter) + 1)
        : // otherwise initialize it as 1
          letterCount.set(letter, 1);
    }
  }
  // loop through the destructured map
  for (const [mappedLetter, count] of letterCount) {
    // the first time we hit a count of 1
    if (count === 1) {
      // we can return the letter
      return mappedLetter;
    }
  }
  // otherwise return false, no non-multiples
  return false;
};
