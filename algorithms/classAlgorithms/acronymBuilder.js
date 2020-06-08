'use strict';

module.exports = (str) => {
  // return the input
  return (
    str
      // split on ` ` character into an array
      .split(` `)
      // mapped to a new array of the first letter of each word capitalized
      .map((word) => word.charAt(0).toUpperCase())
      // joined back into a string
      .join(``)
  );
};
