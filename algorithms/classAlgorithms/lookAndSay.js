'use strict';

module.exports = (n) => {
  // convert the input number to a string
  n = n.toString();
  // establish a counter to be 1 since the minimum will be 1
  let count = 1;
  // and an empty string for the output
  let output = ``;
  // loop through the input string
  for (let i = 0; i < n.length; ++i) {
    // if the digit is the same as the next digit
    if (n[i] === n[i + 1]) {
      // increment out counter
      ++count;
      // otherwise if the digit changes
    } else {
      // we can append to the output the number of matching digits we saw, followed by the digit itself
      output += `${count}${n[i]}`;
      // then we reset the counter
      count = 1;
    }
  }
  // the solution requires the format be a number not a string
  return parseInt(output);
};
