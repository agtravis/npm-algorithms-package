'use strict';

module.exports = (str) => {
  // input checking
  if (!str || typeof str !== `string`) throw `Unsupported input`;
  // return the string
  return (
    str
      // split into an array of individual characters
      .split(``)
      // filtered to check if each element is not a space character to remain
      .filter((current) => current !== ` `)
      // joined back into a string
      .join(``)
      // converted to lower case
      .toLowerCase()
  );
};
