'use strict';

module.exports = (magazine, note) => {
  // establish a new map to track the available words
  const magazineLibrary = new Map();
  // loop through the first string input, splitting into an array delimited by ` `
  for (const word of magazine.split(` `)) {
    // if the word exists in the map, increment, otherwise, initialize to 1
    magazineLibrary.has(word)
      ? magazineLibrary.set(word, magazineLibrary.get(word) + 1)
      : magazineLibrary.set(word, 1);
  }
  // now loop through the second string input, splitting again as before
  for (const word of note.split(` `)) {
    // if the word is not in the library at all, or was but has already been used more times than existed
    if (!magazineLibrary.has(word) || magazineLibrary.get(word) <= 0) {
      // return false
      return false;
      // otherwise decrement the count of that word in the library
    } else {
      magazineLibrary.set(word, magazineLibrary.get(word) - 1);
    }
  }
  // if the loop completes, return true
  return true;
};
