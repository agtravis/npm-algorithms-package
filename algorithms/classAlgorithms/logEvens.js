'use strict';

module.exports = (num) => {
  // output string initialized
  let output = ``;
  // loop through
  for (let i = 0; i <= num; ++i) {
    // if the number is even (zero remainder when divided by 2)
    if (i % 2 === 0) {
      // append to the output the index and a line break
      output += `${i}\n`;
    }
  }
  // return the output string
  return output;
};
