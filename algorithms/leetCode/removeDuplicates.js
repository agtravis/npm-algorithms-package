'use strict';

module.exports = (S) => {
  // establish stack
  const stack = [];
  // loop through string
  for (const letter of S) {
    // push letter on to the stack
    stack.push(letter);
    // compare the last and second to last and if they match, remove both
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  // return the stack joined as a string
  return stack.join('');
};
