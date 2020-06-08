'use strict';

module.exports = (s) => {
  // establish a set to contain the vowels as a reference
  const isVowel = new Set(['a', 'e', 'i', 'o', 'u']);
  // establish empty arrays to collect appropriate letters
  const vowels = [];
  const consonants = [];
  // loop through the input string
  for (const letter of s) {
    // if the letter is in the vowel set, send to the vowel array
    // otherwise send to the consonant array
    isVowel.has(letter) ? vowels.push(letter) : consonants.push(letter);
  }
  // return a concatenation of first the vowels array sorted and joined to a string, then the consonants
  return vowels.sort().join(``) + consonants.sort().join(``);
};
