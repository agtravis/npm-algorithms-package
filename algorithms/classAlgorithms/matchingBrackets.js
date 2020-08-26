'use strict';

module.exports = (str) => {
  // declare an empty array
  let output = [];
  // a helper function that returns a boolean value based on if the inputs are as required
  const matches = (l, r) =>
    (l === `(` && r === `)`) ||
    (l === `[` && r === `]`) ||
    (l === `{` && r === `}`);
  // loop through the input
  for (const char of str) {
    // as long as the character is not a space
    if (char !== ` `) {
      // push it to the array
      output.push(char);
    }
    // for as long as the last and second to last characters make a matching pair
    while (matches(output[output.length - 2], output[output.length - 1])) {
      // remove them both
      output.pop();
      output.pop();
    }
  }
  // return a boolean based on if the array is empty or not
  return output.length === 0;
};
