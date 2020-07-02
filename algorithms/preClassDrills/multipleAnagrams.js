'use strict';

module.exports = (...anagrams) => {
  // validation
  if (!anagrams || anagrams.length < 2) return false;
  // helper function to create a map of letter counts of a string input
  const createMap = (anagram) => {
    // establish empty object
    const letterCount = {};
    // loop through input string
    for (const letter of anagram) {
      // if the key already exists
      if (letterCount[letter]) {
        // increment by 1
        letterCount[letter] += 1;
      } else {
        // otherwise establish the value to be one
        letterCount[letter] = 1;
      }
    }
    // return the populated object
    return letterCount;
  };
  // helper function to compare two objects
  const hasMatchingLetterCount = (letterCount, anagram) => {
    // create a new letter count object of the current anagram
    const anagramLetterCount = createMap(anagram);
    // loop through the keys of the original anagram object
    for (const key of Object.keys(letterCount)) {
      // if the values ever do not match up
      if (letterCount[key] !== anagramLetterCount[key]) {
        // return false
        return false;
      }
    }
    // do the same but looping through the other word (to ensure no letters were missed with the first loop)
    for (const key of Object.keys(anagramLetterCount)) {
      if (anagramLetterCount[key] !== letterCount[key]) {
        return false;
      }
    }
    // otherwise return true, they match
    return true;
  };
  // set a variable to equal the letter count map of the first input
  const firstAnagramCount = createMap(anagrams[0]);
  // loop through the other inputs
  for (let i = 1; i < anagrams.length; ++i) {
    // comparing each one as we loop, return false as soon as one doesn't match
    if (!hasMatchingLetterCount(firstAnagramCount, anagrams[i])) {
      return false;
    }
  }
  // return true at the end if it completes
  return true;
};
