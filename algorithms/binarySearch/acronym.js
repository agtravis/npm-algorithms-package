'use strict';

module.exports = (s) => {
  // establish output empty string
  let output = ``;
  // convert string to array of words
  s = s.split(' ');
  // loop through the words
  for (const word of s) {
    // if the word is not `and`
    if (word !== `and`) {
      // append the first letter of the word capitalized to the output
      output += word.charAt(0).toUpperCase();
    }
  }
  // return
  return output;
};
