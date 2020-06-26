'use strict';

module.exports = (s) => {
  // return a concatenation of the first character of the input, the length of the input not including 2 characters, and the last character
  return `${s.charAt(0)}${s.length - 2}${s.charAt(s.length - 1)}`;
};
