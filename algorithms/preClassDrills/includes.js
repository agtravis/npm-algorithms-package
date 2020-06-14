'use strict';

module.exports = (arr, el) => {
  // error handling
  if (!arr) throw `Unexpected input`;
  // loop through the array (or string)
  for (const arrEl of arr) {
    // compare each part of the input to the comparison element
    if (arrEl === el) {
      // as soon as it is found we can return early true
      return true;
    }
  }
  // if it makes it to the end, it wasn't found, return false
  return false;
};
