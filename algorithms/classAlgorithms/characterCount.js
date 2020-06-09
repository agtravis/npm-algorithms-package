'use strict';

module.exports = (str) => {
  // establish an empty object
  const letterCount = {};
  // loop through the string characters
  for (const letter of str) {
    // if the property of the letter exists within the object, increment it by one
    // if not, create it and set it to one
    letterCount[letter] = letterCount[letter] ? (letterCount[letter] += 1) : 1;
  }
  // return the object
  return letterCount;
};
