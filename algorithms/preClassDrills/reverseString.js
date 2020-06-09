'use strict';

module.exports = (str) => {
  // output empty string
  let output = ``;
  // loop backwards through input
  for (let i = str.length - 1; i >= 0; --i) {
    // append each character
    output += str.charAt(i);
  }
  // return
  return output;
};
