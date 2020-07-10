'use strict';

module.exports = (word) => {
  // checks if there is a word and if the word is at least 2 characters
  // a palindrome here is defined as being at least 2 letters
  if (!word || word.length < 2) return false;
  // helper function to check for a palindrome of even length
  const hasEvenPalindrome = (word) => {
    for (let i = 0; i < word.length; ++i) {
      // as soon as two letters next to each other are the same, return true
      if (word.charAt(i) === word.charAt(i + 1)) {
        return true;
      }
    }
    // if this never happens, there are no palindromes since an even length palindrome must have two adjacent equals
    return false;
  };
  // helper to check for odd length palindrome
  const hasOddPalindrome = (word) => {
    for (let i = 0; i < word.length; ++i) {
      // if the letters either side of the current iterated letter match, that is a palindrome
      if (word.charAt(i - 1) === word.charAt(i + 1)) {
        // return true
        return true;
      }
    }
    // otherwise return false
    return false;
  };
  // as long as one of these helper functions returns a true, the function call returns true
  return hasEvenPalindrome(word) || hasOddPalindrome(word);
};
