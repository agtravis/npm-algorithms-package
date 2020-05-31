'use strict';

const flipCaseWithAscii = (s) => {
  return (
    s
      // split into an array
      .split('')
      // map each letter to new array
      .map((letter) =>
        // if it is equal to itself as lower case
        letter === letter.toLowerCase()
          ? // return it as an ASCII code letter minus 32
            String.fromCharCode(letter.charCodeAt(0) - 32)
          : // otherwise it's uppercase, so add 32
            String.fromCharCode(letter.charCodeAt(0) + 32)
      )
      // concatenate to a string
      .join('')
  );
};

// this is more inefficient but will only change letters from the alphabet, not punctuation
const flipCaseWithCaseChange = (s) => {
  return s
    .split('')
    .map((letter) =>
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join('');
};

module.exports = {
  flipCaseWithAscii,
  flipCaseWithCaseChange,
};
