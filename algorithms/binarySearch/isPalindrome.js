'use strict';

module.exports = {
  // this one liner compares the original string to a split, reversed,
  // and joined version of the string and returns a boolean based on the comparison
  isPalindromeSplitReverse: (s) => s === s.split('').reverse().join(''),
  isPalindromeDoublePointer: (s) => {
    // loop through the input with a double pointer, i starts at the beginning, j starts at the end
    for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
      // if a character at the beginning doesn't match the equivalent at the end
      if (s[i] !== s[j]) {
        // it's not a palindrome
        return false;
      }
    }
    // otherwise if it hits the end (middle) it is
    return true;
  },
};
