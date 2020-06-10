'use strict';

module.exports = (num) => {
  // return the input
  return (
    num
      // convert to a string
      .toString()
      // split it into digits (strings still)
      .split(``)
      // reduce the array by adding together the digits as integers
      .reduce((sum, current) => (sum += parseInt(current)), 0)
  );
};
