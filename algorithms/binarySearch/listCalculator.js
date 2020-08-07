'use strict';

module.exports = (nums, op, val) => {
  // helper function takes in a single number, the operation, and the value
  const operate = (num, op, val) => {
    // switch statement establishes what will happen
    switch (op) {
      // each case returns the operator used to apply the value to the number
      case `+`:
        return num + val;
      case `-`:
        return num - val;
      case `*`:
        return num * val;
      // except the problem requires the division be floored
      case `/`:
        return Math.floor(num / val);
      default:
        return `op (${op}) not valid`;
    }
  };
  // the input is then mapped and returns a new array with the helper function applied to each number
  return nums.map((num) => operate(num, op, val));
};
