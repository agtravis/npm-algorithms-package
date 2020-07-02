'use strict';

// these functions take an unknown amount of inputs that will be compiled as an array of inputs
module.exports = {
  haveSameTotalPosition: (...words) => {
    // first some validation
    if (!words || words.length < 2) return false;
    // create an empty hashmap
    const alphabet = {};
    // loop through the character code number
    for (let i = 97; i <= 122; ++i) {
      // for each, set a property of the letter at that code to store a value of the place in the alphabet of the letter
      alphabet[String.fromCharCode(i)] = i - 96;
    }
    // a helper function to calculate the sum total of a word
    const wordSum = (word) =>
      // split into an array, then reduce by adding the values retrieved from the hashmap
      word.split(``).reduce((sum, current) => sum + alphabet[current], 0);
    // get the value of the first word to compare all the rest against
    const firstWordSum = wordSum(words[0]);
    // loop through the rest of the input words, starting with the second
    for (let i = 1; i < words.length; ++i) {
      // compare each reduction total, and if any don't match
      if (firstWordSum !== wordSum(words[i])) {
        // return early, fals
        return false;
      }
    }
    // if the loop completes, return true
    return true;
  },
  haveSameTotalPositionEvery: (...words) => {
    // validation on the inputs
    if (!Array.isArray(words) || words.length < 2) {
      return false;
    }
    // helper function to get the sum total of a word
    const total = (word) => {
      // establish a count
      let count = 0;
      // loop through the word, and ensure character is lower cased
      for (const letter of word.toLowerCase()) {
        // a variable to store the character code of the letter
        const ascii = letter.charCodeAt(0);
        // ensures that if the character is outside the scope of the alphabet it is not considered
        if (ascii < 'a'.charCodeAt(0) || ascii > 'z'.charCodeAt(0)) {
          return null;
        }
        // add to the count, the alphabetical value of the character
        count += ascii - 96;
      }
      // when finished, return the count
      return count;
    };
    // get the sum total of the first word for comparison
    const totalCount = total(words[0]);
    // remove the first word from the array
    words.splice(0, 1);
    // compare every word left in the array, via the helper function, to the value of the spliced first word total
    // this function returns true if everything passes the test, or false if one fails
    return words.every((word) => totalCount === total(word));
  },
};
