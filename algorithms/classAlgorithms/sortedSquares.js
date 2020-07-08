'use strict';

module.exports = {
  sortedSquaresWithSort: (arr) => {
    // loop through the input array
    for (let i = 0; i < arr.length; ++i) {
      // converting each number to the absolute (non-negative) version of itself
      arr[i] = Math.abs(arr[i]);
    }
    // re-sort the array (O(n log n))
    arr.sort((a, b) => a - b);
    // return the array mapped to a new array where each element is the square of itself
    return arr.map((current) => Math.pow(current, 2));
  },
  sortedSquaresNoSort: (arr) => {
    // create a new array the length of the input
    const result = new Array(arr.length);
    // establish a pointer to point at the beginning
    let idx1 = 0;
    // this pointer points at the input array end
    let idx2 = arr.length - 1;
    // this pointer at the end of the output array
    let idx3 = result.length - 1;
    // loop until the first two pointers meet
    while (idx1 <= idx2) {
      // for readability, left and right will describe the pointers' start points
      const left = arr[idx1];
      const right = arr[idx2];
      // if the left pointer is greater than the right pointer when considered absolutely
      if (Math.abs(left) > Math.abs(right)) {
        // the output array at the last position is assigned the current left element squared
        result[idx3] = left * left;
        // and the left pointer moves forward
        idx1++;
      } else {
        // otherwise the output array is assigned the right pointer squared
        result[idx3] = right * right;
        // which then decrements to move backward
        idx2--;
      }
      // and the position being assigned in the output array is decremented
      idx3--;
    }
    // the output is returned once completed
    return result;
  },
  sortedSquaresNoSortCleaner: (arr) => {
    // using a dynamic array potentially less efficient
    const output = [];
    // labelling pointers more descriptively
    let left = 0;
    let right = arr.length - 1;
    let outputIndex = arr.length - 1;
    while (left <= right) {
      if (Math.abs(arr[left]) > Math.abs(arr[right])) {
        // using Math.pow
        output[outputIndex] = Math.pow(arr[left], 2);
        ++left;
      } else {
        output[outputIndex] = Math.pow(arr[right], 2);
        --right;
      }
      --outputIndex;
    }
    return output;
  },
};
