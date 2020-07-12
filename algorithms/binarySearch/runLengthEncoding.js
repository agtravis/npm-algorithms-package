'use strict';

module.exports = (s) => {
  // establish an output to be an empty string
  let output = ``;
  // establish a counter to start at 1
  let count = 1;
  // loop through the string
  for (let i = 0; i < s.length; ++i) {
    // if the character currently being iterated is the same as the character directly following it
    if (s.charAt(i) === s.charAt(i + 1)) {
      // increment the counter
      ++count;
      // otherwise if it is different
    } else {
      // append to the output string first the counter followed by the current letter
      output += `${count}${s.charAt(i)}`;
      // reset the counter to 1
      count = 1;
    }
  }
  // return the output string
  return output;
};
