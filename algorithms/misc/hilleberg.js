'use strict';

// const $language = `sv`;

module.exports = (color, $language) => {
  // libraries
  const libraries = [
    [`red`, `green`, `sand`],
    [`röd`, `grön`, `sand`],
    [`rot`, `grün`, `sand`],
  ];
  // a variable which will hold the language code index reference
  let languageIndex;
  switch ($language) {
    case `sv`:
      languageIndex = 1;
      break;
    case `de`:
      languageIndex = 2;
      break;
    default:
      languageIndex = 0;
  }
  // establish the word index as negative one, initially meaning not found
  let wordIndex = -1;
  // loop through the words in the English library (0)
  for (let i = 0; i < libraries[0].length; ++i) {
    // if the input matches the iterated word in the library
    if (color === libraries[0][i]) {
      // set the word index to the current index
      wordIndex = i;
      // (exit early)
      break;
    }
  }
  // if the word index is still -1, return the input word, otherwise return the appropriate word in the appropriate library
  return wordIndex >= 0 ? libraries[languageIndex][wordIndex] : color;
};
