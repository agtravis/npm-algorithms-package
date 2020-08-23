'use strict';

module.exports = (s0, s1) => {
  // establish a new map to count the letters
  const letterCount = new Map();
  // loop through the first string and count the letters
  for (const letter of s0) {
    if (!letterCount.has(letter)) {
      letterCount.set(letter, 1);
    } else {
      letterCount.set(letter, letterCount.get(letter) + 1);
    }
  }
  // loop through the second string
  for (const letter of s1) {
    // if the letter doesn't exist, or it does but the count is zero (meaning already been counted)
    if (!letterCount.has(letter) || letterCount.get(letter) < 1) {
      // return false
      return false;
      // otherwise decrement the letter count
    } else {
      letterCount.set(letter, letterCount.get(letter) - 1);
    }
  }
  // finally, loop through the map
  for (const [key, value] of letterCount) {
    // if the value of the letter count is not zero
    if (value !== 0) {
      // return false, not an anagram
      return false;
    }
  }
  // if nothing has returned false yet, it must be an anagram, return true
  return true;
};
