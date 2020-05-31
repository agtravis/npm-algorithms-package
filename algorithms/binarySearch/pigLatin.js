'use strict';

module.exports = (s) => {
  return (
    s
      // turn into an array split on a space (` `) character
      .split(` `)
      // for each word, cut off the first letter and the rest of the word, swap, then add the suffix `ay`
      .map((word) => `${word.substring(1)}${word.charAt(0)}ay`)
      // join into a string with space delimiters
      .join(` `)
  );
};
