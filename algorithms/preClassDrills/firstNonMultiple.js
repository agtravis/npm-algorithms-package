'use strict';

module.exports = (str) => {
  const letterCount = new Map();
  for (const letter of str) {
    if (letter !== ` `) {
      letterCount.has(letter)
        ? letterCount.set(letter, letterCount.get(letter) + 1)
        : letterCount.set(letter, 1);
    }
  }
  for (const [mappedLetter, count] of letterCount) {
    if (count === 1) {
      return mappedLetter;
    }
  }
  return false;
};
