'use strict';

module.exports = (word) => {
  // output string established and set to empty
  let output = '';
  // incoming parameter string set to lower case
  word = word.toLowerCase();
  // empty object established, this will track letter counts in a hash map
  const characterCount = {};
  // iterate through word and ternary to check if a letter property of the object hashmap exists yet
  for (const letter of word) {
    characterCount[letter]
      ? // if yes, increment by 1
        (characterCount[letter] += 1)
      : // if not, create that property and set its value to 1
        (characterCount[letter] = 1);
  }
  // iterate through word again
  for (const letter of word) {
    // conditionally add '(' or ')' to the output string based on letter count
    output += characterCount[letter] > 1 ? `)` : `(`;
  }
  // return output string
  return output;
};
