'use strict';

module.exports = (n) => {
  return (
    n
      // convert to base 2 (binary)
      .toString(2)
      // convert to an array
      .split('')
      // binary is either 1 or 0, so we can just return the sum of all the digits
      .reduce((acc, curr) => acc + parseInt(curr), 0)
  );
};
