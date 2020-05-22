'use strict';

module.exports = (nums) => {
  return nums.filter((num) => num.toString().length % 2 === 1).length;
};
