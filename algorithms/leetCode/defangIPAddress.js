'use strict';

module.exports = (address) => {
  // establish output empty string
  let output = ``;
  // loop through the address string
  for (const char of address) {
    // if the character is `.`, wrap in `[]` and concatenate, otherwise concatenate as is
    output += char === `.` ? `[.]` : char;
  }
  // return the string
  return output;
};
