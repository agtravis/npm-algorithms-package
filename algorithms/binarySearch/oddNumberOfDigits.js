'use strict';

module.exports = (nums) => {
  // filters the input array
  // first converts each number to a string
  // then counts the number of characters in the string
  // if the number of characters divided by 2 leaves a remainder of 1, it passes the test
  // the length of the filtered array reveals how many passed the test
  return nums.filter((num) => num.toString().length % 2 === 1).length;
};
