'use strict';

module.exports = (str) => {
  // return the string
  return (
    str
      // split into an array based on ` ` delimiter
      .split(` `)
      // map that array
      .map(
        // for each word, return a concatenation of the first letter capitalized with the rest of the word in lower case
        (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      )
      // joined back together with space characters
      .join(` `)
  );
};
