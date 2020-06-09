'use strict';

module.exports = (lists) => {
  // helper function that takes in two lists
  const merge = (accumulatorArray, nextArray) => {
    // if either list doesn't exist or has no length, return the other list
    if (!accumulatorArray || !nextArray) {
      return accumulatorArray || nextArray;
    }
    // establish an empty array
    const output = [];
    // start two counters at zero
    let l = 0;
    let r = 0;
    // as long as the l & r counters remain less than their respective array lengths
    while (l < accumulatorArray.length && r < nextArray.length) {
      // if the current iteration of array one is less than the current iteration of array two
      if (accumulatorArray[l] < nextArray[r]) {
        // push the array one element to the output
        output.push(accumulatorArray[l]);
        // increment array one iterator
        l++;
        // otherwise if array two element is greater than or equal to array one element
      } else {
        // push array two element
        output.push(nextArray[r]);
        // increment the other iterator
        r++;
      }
    }
    // whichever array wasn't depleted so far
    // push to the array the remainder of that array
    if (l < accumulatorArray.length) {
      output.push(...accumulatorArray.slice(l));
    } else if (r < nextArray.length) {
      output.push(...nextArray.slice(r));
    }
    // return the output array
    return output;
  };
  // establish an output array for the final merge
  let output = [];
  // loop through each list
  for (let i = 0; i < lists.length; i++) {
    // the output array is equal to a merge of itself and the next subarray in the input array
    output = merge(output, lists[i]);
  }
  // return the completed merge
  return output;
};
