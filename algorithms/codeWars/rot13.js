'use strict';

module.exports = (message) => {
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
    if (lowerCase.includes(char.toLowerCase()) && char.toLowerCase() === char) {
      output += letterMap.get(char);
    } else if (
      lowerCase.includes(char.toLowerCase()) &&
      char.toUpperCase() === char
    ) {
      output += letterMap.get(char.toLowerCase()).toUpperCase();
    } else {
      output += char;
    }
  }
  return output;
};
