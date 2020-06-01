'use strict';

const removeDuplicatesII = (s, k) => {
  // helper function to check all letters are the same
  const checkSubstring = (fragString) => {
    // loop through the substring
    for (let j = 0; j < fragString.length - 1; ++j) {
      // if the letter at the index does not equal the next indexed letter
      if (fragString.charAt(j) !== fragString.charAt(j + 1)) {
        // return false at this point
        return false;
      }
    }
    // if it completes, the substring is a complete set of matching letters to the length of `k`, return true
    return true;
  };
  // empty string for output
  let output = '';
  // loop through string
  for (let i = 0; i < s.length; ++i) {
    // create a substring starting at index `i` and ending in `k` indeces (i + k)
    let fragString = s.substring(i, i + k);
    // if the substring is less than k in length - this would happen at the end of the string
    if (fragString.length < k) {
      // concatenate as is
      output += fragString;
      // and break out of the loop
      break;
      // otherwise pass the k-length substring to the helper function
      // and if it returns false
    } else if (!checkSubstring(fragString)) {
      // concatenate the single letter being iterated
      output += s.charAt(i);
      // otherwise if true we can increment i by an extra amount, whatever k - 1 is
      // this means we are skipping over k - 1 letters in the string
      // and minus 1 because the loop will increment at the end
    } else {
      i += k - 1;
    }
  }
  // if the input length does not equal the output length
  // we have made changes, and some new removeable letters might be together
  if (s.length !== output.length) {
    // so we can recursively call the function, passing in the condensed string as the new input, and k remains the same
    return removeDuplicatesII(output, k);
    // if the strings are the same length
  } else {
    // no further removals were possible, and that was the last necessary loop, we can return the result, or input
    return output;
  }
};

module.exports = removeDuplicatesII;
