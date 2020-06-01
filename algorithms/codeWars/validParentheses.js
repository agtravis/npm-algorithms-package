'use strict';

const validParenthesesDepthCount = (parens) => {
  // establish a depth count to track how many parentheses deep
  let count = 0;
  // loop through the input
  for (let i = 0; i < parens.length; ++i) {
    // if the current parenthesis is an open
    // increment, otherwise decrement
    parens[i] === '(' ? ++count : --count;
    // if the count ever drops below zero, it's not valid
    // the expression can only have a close paren after an open paren
    if (count < 0) return false;
  }
  // if the count is zero at the end there are matching pairs
  return count === 0 ? true : false;
};

const validParenthesesStack = (parens) => {
  // establish an empty array to function as the stack
  const stack = [];
  // loop
  for (let i = 0; i < parens.length; ++i) {
    // push each paren onto the end of the array
    stack.push(parens[i]);
    // as long as the most recent addition is a closing paren and the penultimate is an open, they match and can be removed
    while (stack[stack.length - 1] === ')' && stack[stack.length - 2] === '(') {
      stack.pop();
      stack.pop();
    }
  }
  // return true if the condition is met
  return stack.length === 0;
};

module.exports = {
  validParenthesesDepthCount,
  validParenthesesStack,
};
