'use strict';

const rot13a = (message) => {
  // an array storing valid characters for the cipher
  const lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  // create a new Map
  const letterMap = new Map();
  // loop through the cipher
  for (let i = 0; i < lowerCase.length; ++i) {
    // set a new index to be 13 higher than the current
    let newLetterIndex = i + 13;
    // in case we reach the end of the alphabet, go back to the beginning
    if (newLetterIndex > 25) {
      newLetterIndex = newLetterIndex - 26;
    }
    // in the Map, create a key value pair of the letter key to the ciphered letter value
    letterMap.set(lowerCase[i], lowerCase[newLetterIndex]);
  }
  // start an empty string for appending
  let output = '';
  // iterate through the input message
  for (const char of message) {
    // if the character is in the cipher array and is lower case
    if (lowerCase.includes(char.toLowerCase()) && char.toLowerCase() === char) {
      // append to the output string the value of the key of the current character
      output += letterMap.get(char);
      // if the character is in the cipher array and is upper case
    } else if (
      lowerCase.includes(char.toLowerCase()) &&
      char.toUpperCase() === char
    ) {
      // do the same, but output should also be upper case
      output += letterMap.get(char.toLowerCase()).toUpperCase();
      // otherwise append the character as it is
    } else {
      output += char;
    }
  }
  return output;
};

// NOTE: each `includes()` method is expensive. This could be done more efficiently as follows:

const rot13b = (message) => {
  const lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const letterMap = new Map();
  for (let i = 0; i < lowerCase.length; ++i) {
    let newLetterIndex = i + 13;
    if (newLetterIndex > 25) {
      newLetterIndex = newLetterIndex - 26;
    }
    letterMap.set(lowerCase[i], lowerCase[newLetterIndex]);
  }
  let output = '';
  for (const char of message) {
    // here is the change
    if (char >= 'a' && char <= 'z') {
      output += letterMap.get(char);
    } else if (char >= 'A' && char <= 'Z') {
      output += letterMap.get(char.toLowerCase()).toUpperCase();
    } else {
      output += char;
    }
  }
  return output;
};

module.exports = {
  rot13a,
  rot13b,
};
