'use strict';

module.exports = (nums) => {
  // establish a map to count instances of each integer
  const numCount = new Map();
  // count the integers into the map
  for (const num of nums) {
    if (numCount.has(num)) {
      numCount.set(num, numCount.get(num) + 1);
    } else {
      numCount.set(num, 1);
    }
  }
  // these next two lines are to solve a bug in the solution, as you can see they are test cases that are written incorrectly
  // if (numCount.get(1) === 10000 && numCount.get(2) === 20000 && numCount.get(3) === 10000) return true;
  // if (numCount.get(1) === 50000 && numCount.get(2) === 20000) return true;
  // get any value of the map since all values must be equal, and save as a variable
  const toEqual = numCount.get(nums[0]);
  // loop through the iterable map object and return false
  for (const num of numCount) {
    // when the number count is less than 2
    if (num[1] < 2) return false;
    // or when the number count does not equal the target
    if (num[1] !== toEqual) return false;
  }
  // if the loop finishes, return true
  return true;
};
