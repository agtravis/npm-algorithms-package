'use strict';

module.exports = (word) => {
  let output = '';
  word = word.toLowerCase();
  const characterCount = {};
  for (const letter of word) {
    characterCount[letter]
      ? (characterCount[letter] += 1)
      : (characterCount[letter] = 1);
  }
  for (const letter of word) {
    output += characterCount[letter] > 1 ? `)` : `(`;
  }
  return output;
};
