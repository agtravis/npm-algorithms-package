'use strict';

module.exports = (word) => {
  // a helper function to establish if an input is a palindrome
  const isPalindrome = require(`./isPalindrome`);
  // start looping with the iteration being the length of the input,
  // continuing as long as the size is greater than one,
  // and decrementing the size
  for (let size = word.length; size > 1; --size) {
    // for each loop, loop as many times as the current size fits into the original length
    for (let i = 0; i <= word.length - size; ++i) {
      // take a substring of the input word starting at the iterator `i` and ending at wherever the iterator plus the current word points
      // and check to see if that substring is a palindrome
      if (isPalindrome(word.substring(i, i + size))) {
        // if it is, return that word
        return word.substring(i, i + size);
      }
    }
  }
  // if we never find a palindrome of at least 2 letters, return null
  return null;
};
