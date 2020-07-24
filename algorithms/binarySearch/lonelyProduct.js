'use strict';

module.exports = (a, b, c) => {
  // create an array to store the inputs
  const output = [];
  // a helper function to compare the inputs and designate an output result
  // since we are multiplying, 1 is effectivly a "do not factor" number here
  const compare = (x, y, z) => (x === y || x === z ? 1 : x);
  // compare each input
  output.push(compare(a, b, c));
  output.push(compare(b, c, a));
  output.push(compare(c, a, b));
  // return the output array reduced by getting the product of all inputs
  return output.reduce((product, current) => product * current, 1);
};
