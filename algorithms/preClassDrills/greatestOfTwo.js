'use strict';

function greatestOfTwo(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function greatestOfTwoReturnTernary(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function greatestOfTwoReturnMax(num1, num2) {
  return Math.max(num1, num2);
}

module.exports = {
  greatestOfTwo,
  greatestOfTwoReturnMax,
  greatestOfTwoReturnTernary,
};
