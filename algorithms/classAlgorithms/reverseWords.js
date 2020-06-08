'use strict';

module.exports = (str) => {
  // return the input string
  return (
    str
      // turned into an array delimited by ` ` character
      .split(` `)
      // mapped to return the word at the end of the array looping invertedly
      .map((word, index, str) => str[str.length - 1 - index])
      // joined back as a sentence
      .join(` `)
  );
};
