'use strict';

// each comment denotes what is being checked for
module.exports = (str) => {
  // there is no input
  if (!str || str === ``) return false;
  let decimalCount = 0;
  // (establish a set to check if valid)
  const valid = new Set([
    `-`,
    `+`,
    `.`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `0`,
  ]);
  // (loop through the input string)
  for (let i = 0; i < str.length; ++i) {
    // character is not in the validity set
    if (!valid.has(str.charAt(i))) return false;
    // (if the character is a decimal point)
    if (str.charAt(i) === `.`) {
      // `.` cannot be the last character in the string
      if (i === str.length - 1) return false;
      // (increment)
      ++decimalCount;
      // cannot be more than one `.`
      if (decimalCount > 1) return false;
    }
    if (
      // `-` & `+` can only be at index one in the string
      (str.charAt(i) === `-` && i > 0) ||
      (str.charAt(i) === `+` && i > 0) ||
      // `-` & `+` cannot be the last character in the string (i.e. the only character since they would be first index)
      (str.charAt(i) === `-` && i === str.length - 1) ||
      (str.charAt(i) === `+` && i === str.length - 1)
    )
      return false;
  }
  // if we make it this far, return true
  return true;
};
