'use strict';

module.exports = (str) => {
  // split the string into an array delimited by a space character
  const arrStr = str.split(` `);
  // set the longest word to be, by default, the first word in the array
  let longestWord = arrStr[0];
  // loop, starting at the second index
  for (let i = 1; i < arrStr.length; ++i) {
    // compare each word's length to the assigned word's length
    if (arrStr[i].length > longestWord.length) {
      // and if it is longer, reassign
      longestWord = arrStr[i];
    }
  }
  // then return
  return longestWord;
};
