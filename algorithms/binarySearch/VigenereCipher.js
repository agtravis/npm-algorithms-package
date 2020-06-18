'use strict';

module.exports = (text, key) => {
  // Using the ASCII CODE here are the indeces of the lower case alphabet
  // a === 97 //  z === 122
  // this is a helper function to ensure that the character always stays in ranger
  const add97 = (num) => {
    // if the character code is greater than `z`
    if (num > 122) {
      // return the code for `a`
      return num - 26;
    } else {
      // otherwise return the code as is
      return num;
    }
  };
  // establish an output string
  let output = ``;
  // loop through the string
  for (let i = 0; i < text.length; ++i) {
    // for each character in the input, append to the output
    // the character based one the code calculated by
    // taking the character code, adding the character code from the key at the same index
    // subtracting 97
    // and then making sure that number is still in range  using the helper function
    output += String.fromCharCode(
      add97(text.charCodeAt(i) + key[i].charCodeAt(0) - 97)
    );
  }
  // return the output string
  return output;
};
