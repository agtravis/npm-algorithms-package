'use strict';

module.exports = (s) => {
  // establish an empty output string
  let output = ``;
  // loop through the input string
  for (let i = 0; i < s.length; ++i) {
    // if the character is a space and the character preceeding it is a space or doesn't exist
    if (s.charAt(i) === ` ` && (s.charAt(i - 1) === ` ` || !s.charAt(i - 1))) {
      // continue to the next iteration
      continue;
      // otherwise
    } else {
      // append the character to the output string
      output += s.charAt(i);
    }
  }
  // finally we need to check if the last character is a space
  if (output.charAt(output.length - 1) === ` `) {
    // and if it is, set the output to be a substring of all the characters but the last
    output = output.substring(0, output.length - 1);
  }
  // return
  return output;
};
