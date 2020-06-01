'use strict';

module.exports = (num) => {
  // if num is zero, already in base 7
  if (num === 0) return '0';
  // empty array to hold result
  let result = [];
  // boolean to store whether input was negative
  let isNegative = false;
  // if num is less than 0
  if (num < 0) {
    // convert to positive
    num = -num;
    // record that it was negative
    isNegative = true;
  }
  // for as long as the number is not zero
  while (num !== 0) {
    // divide the number by 7, and push the remainder (converted to a string) to the output array
    result.push((num % 7).toString());
    // now we take the amount of times 7 goes into the number, and set that to the number
    // eventually 7 will not go into it completely any more, and num will === zero
    num = Math.floor(num / 7);
  }
  // if the num was negative, push a hyphen to the array
  if (isNegative) result.push('-');
  // return the array reversed and joined as a string
  return result.reverse().join('');
};
