'use strict';

module.exports = (s) => {
  // establish an output array
  // we will treat it like a stack, which means we can only access the most recent element added
  const stack = [];
  // loop through the input string
  for (const char of s) {
    // if the character is not equal to the most recent addition
    if (char !== stack[stack.length - 1]) {
      // we can add it to the array
      stack.push(char);
    }
  }
  // return the output array joined together
  return stack.join('');
};
