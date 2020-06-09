'use strict';

module.exports = (str) => {
  // establish empty output string
  let output = ``;
  // loop through the input string
  for (const letter of str) {
    // if the letter converted to lower case is the same as the letter already
    if (letter.toLowerCase() === letter) {
      // convert it to upper case and append
      output += letter.toUpperCase();
      // otherwsie if already upper case
    } else if (letter.toUpperCase() === letter) {
      // convert to lower and append
      output += letter.toLowerCase();
    } else {
      // just in case any characters don't fit the bill but still need to be appended
      output += letter;
    }
  }
  // return the output string
  return output;
};
