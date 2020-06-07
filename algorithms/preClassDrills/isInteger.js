'use strict';

module.exports = (num) => {
  // parseInt will not work on all numbers (large numbers)
  // so it is not always a good checker
  // Math.floor will compare the input to a rounded down number based on the input
  // returning true if it remains the same, including typeOf
  return /* num === parseInt(num) && */ num === Math.floor(num);
};
