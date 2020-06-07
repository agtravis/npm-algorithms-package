'use strict';

module.exports = (str) => {
  // this loop only needs to be half the length of the string
  // since it uses a dual pointer moving towards eachother
  // the loop can end when the pointers meet (or would theoretically meet if there was a half letter in an odd length string)
  for (let i = 0; i < str.length / 2; ++i) {
    // if the characters at the front and at the end don't match
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      // return false
      return false;
    }
  }
  // if the loop completes, return true
  return true;
};
