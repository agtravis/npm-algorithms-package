'use strict';

// the original objective of this was to merge two arrays
// it has been modified to sort any amount where the arrays are individual arguments
// as opposed to a 2D array of arrays to be merged
module.exports = (...arrs) => {
  // helper function to merge two sorted arrays
  const merge = (arr1, arr2) => {
    // double index pointer for `l`eft input pointer and `r`ight input
    let l = 0;
    let r = 0;
    // output array
    const output = [];
    // loop until neither pointer is still within the range of the length of its array
    while (l < arr1.length || r < arr2.length) {
      // if the current element in the first array is less than the current in the right
      // or the element in the right array is undefined - meaning the pointer is now pointing outside the input array
      if (arr1[l] < arr2[r] || arr2[r] === undefined) {
        // push that lesser element to the output
        output.push(arr1[l]);
        // and increment the pointer
        ++l;
        // this explicitly states the opposing condition, greater than or equal to
      } else if (arr2[r] <= arr1[l] || arr1[l] === undefined) {
        // push the other element
        output.push(arr2[r]);
        // and increment that pointer
        ++r;
      }
    }
    // return the merged array
    return output;
  };
  // start by copying and spreading the first array of the input to a new array
  let merged = [...arrs[0]];
  // loop through the input arrays starting with the second
  for (let i = 1; i < arrs.length; ++i) {
    // set the new output array to be the return of the helper merge function on the current merged output array,
    // and the next array from the inputs collection
    merged = merge(merged, arrs[i]);
  }
  // return the final array
  return merged;
};
