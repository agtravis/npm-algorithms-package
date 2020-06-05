'use strict';

module.exports = (str) => {
  // establish output empty string
  let output = ``;
  // loop backwards through the string
  for (let i = str.length - 1; i >= 0; --i) {
    // append the iterated character of the string to the output string
    output += str.charAt(i);
  }
  // return the conditional status, true or false
  return output === str;
};
