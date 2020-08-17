'use strict';

module.exports = (s) => {
  // to begin with, R has not been found
  let foundR = false;
  // and both exits are unblocked
  let exitLeft = true;
  let exitRight = true;
  // loop through the input
  for (const position of s) {
    // if the current position is R, we have found R, set to true
    if (position === `R`) {
      foundR = true;
    }
    // if R has not been found yet, but we find a B, then the left exit is blocked, set to false
    if (position === `B` && foundR === false) {
      exitLeft = false;
    }
    // if R has been found, and the current position is B, the right exit is blocked, set to false
    if (position === `B` && foundR === true) {
      exitRight = false;
    }
  }
  // as long as either exit is still true, return true, otherwise return false
  return exitLeft === true || exitRight === true;
};
