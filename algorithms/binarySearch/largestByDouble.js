'use strict';

module.exports = (nums) => {
  // these commented out lines show how to solve in O(n log n)
  // nums.sort((a, b) => b - a);
  // return nums[0] > nums[1] * 2;
  // the following is O(n)
  // establish two variables to track the largest and second largest numbers
  // initialized as the smallest possible number (-Infinity)
  let largest = -Infinity;
  let secondLargest = -Infinity;
  // loop through the inputs
  for (const num of nums) {
    // if the number is greater than the current second largest, reassign
    if (num > secondLargest) {
      secondLargest = num;
    }
    // switch the largest and second largest number variables if necessary
    if (secondLargest > largest) {
      let temp = secondLargest;
      secondLargest = largest;
      largest = temp;
    }
  }
  // return a boolean resulting from the comparison
  return largest > secondLargest * 2;
};
