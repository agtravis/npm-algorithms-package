'use strict';

module.exports = (str1, str2) => {
  // loop through as many times as the difference between the input strings
  for (let i = 0; i < str1.length - str2.length; ++i) {
    // compare a substring of the first input starting at the index and running until
    // the index plus the length of the second input
    // directly compare those two strings and if they match
    if (str1.substring(i, i + str2.length) === str2) {
      // return the index
      return i;
    }
  }
  // otherwise return negative one if nothing matches
  return -1;
};
