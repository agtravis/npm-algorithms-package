'use strict';

module.exports = (num) =>
  // compare the input to the input converted to a string, split into an array
  // reversed, joined back into a string, and finally converted back to an integer
  num === parseInt(num.toString().split(``).reverse().join(``));
