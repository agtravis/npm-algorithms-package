'use strict';

module.exports = (subword, ...words) => {
  // validation
  if (!subword || !words || words.length < 1) return false;
  // loop through all the inputs after the first one
  for (const word of words) {
    // establish a boolean set to false to indicate we haven't found the match yet
    let containsSubword = false;
    // loop through the word currently being iterated
    for (let i = 0; i < word.length; ++i) {
      // if the first letter of the subword being looked for matches the current iterated letter in the input word
      if (subword[0] === word[i]) {
        // we can check to see if a substring method called on the word at the current index and for the length of the subword matches
        if (subword === word.substring(i, i + subword.length)) {
          // if it does we change our boolean to true to say we have found
          containsSubword = true;
          // no need to keep looping
          break;
        }
      }
    }
    // at the end of the loop through the word, if we haven't found the subword
    if (containsSubword === false) {
      // we can return from the function and say false
      return false;
    }
  }
  // if all words never trigger an early exit, return true
  return true;
};
