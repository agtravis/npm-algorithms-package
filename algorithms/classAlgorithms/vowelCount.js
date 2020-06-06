'use strict';

module.exports = (str) => {
  // helper function to determine if character is a vowel
  const isVowel = (char) => {
    // array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // if the character is not in the array it will have an index of -1
    // this return statement checks that the index is not -1
    // if it is not, it IS in the array, and therefore returns true
    // otherwise it returns false
    return vowels.indexOf(char) !== -1 ? true : false;
  };
  // return the string reduced
  return (
    str
      // first split so it can be an array
      .split(``)
      .reduce(
        // for each character, find out if it is a vowel
        // if it is, return an incrementer count to the reducer
        // if not, return the count unchanged
        (count, char) => (isVowel(char.toLowerCase()) ? ++count : count),
        //initialize the counter to zero
        0
      )
  );
};
