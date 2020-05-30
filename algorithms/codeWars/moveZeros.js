'use strict';

module.exports = (arr) => {
  // establish empty arrays
  // one to receive zeros
  // the other to receive anything else
  const zeros = [];
  const output = [];
  // loop through input
  for (const elem of arr) {
    // if zero, push to that array
    if (elem === 0) {
      zeros.push(elem);
    } else {
      //otherwise push to the output array
      output.push(elem);
    }
  }
  // when the loop is over, spread the zeros array out and push them into the output array
  output.push(...zeros);
  return output;
};
