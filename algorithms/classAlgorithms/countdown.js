'use strict';

module.exports = (num) => {
  // initialize output string
  let output = ``;
  // loop counting down
  for (let i = num; i >= 1; --i) {
    // for each append to string `i` and a line break
    output += `${i}\n`;
  }
  // return string
  return output;
};
