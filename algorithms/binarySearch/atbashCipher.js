'use strict';

const atbashCipherWithAlphabet = (text) => {
  // establish alphabet array
  const alphabet = [
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
  // empty string for return
  let output = '';
  // new map
  const alphaMap = new Map();
  // for each letter
  for (let i = 0; i < alphabet.length; ++i) {
    // map the property name of the input letter to be the opposing (by using length - 1 - i) output letter value
    alphaMap.set(alphabet[i], alphabet[alphabet.length - 1 - i]);
  }
  // loop through the input string
  for (const letter of text) {
    // retrieving and concatenating using the map
    output += alphaMap.get(letter);
  }
  return output;
};

const atbashCipherWithAscii = (text) => {
  return (
    text
      // convert to an array
      .split('')
      // map the array by
      // getting the code of the letter being iterated
      // subtracting 97 to get a number between 0 & 25
      // then subtract that number from 122 to get the reverse number
      // turn that ASCII code number back into a letter string
      .map((letter) => String.fromCharCode(122 - (letter.charCodeAt(0) - 97)))
      // join that mapped array into a string
      .join('')
  );
};

module.exports = {
  atbashCipherWithAlphabet,
  atbashCipherWithAscii,
};
