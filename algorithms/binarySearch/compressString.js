'use strict';

module.exports = (s) => {
  // establish an output string
  let output = ``;
  // loop through the input string
  for (const letter of s) {
    // if the current character is not equal to the character at the end of the output string
    // it is a new character, and can be appended
    if (letter !== output.charAt(output.length - 1)) {
      output += letter;
    }
  }
  // return the output
  return output;
};
