'use strict';

module.exports = (numAsStr) => {
  // since zero is not negative or positive, it needs a special case
  if (numAsStr === `0` || numAsStr === 0) return 0;
  // this line checks to see if the input parsed as a number is not not a number (therefore IS a number)
  // it returns that number multiplied by negative 1, and if it is already negative it becomes a positive
  if (!isNaN(parseInt(numAsStr))) return parseInt(numAsStr) * -1;
  // if it hasn't returned anything yet, an error is thrown
  // this catches all non number type inputs
  throw new Error(`input must be coercible to a number`);
};
