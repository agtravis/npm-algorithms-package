'use strict';

module.exports = {
  mergeTwoSortedArraysDoublePointer: (arr1, arr2) => {
    // establish a pointer to move through each input
    let l = 0;
    let r = 0;
    // an an output array
    const output = [];
    // this while loop runs as long as one array still has elements left
    while (l < arr1.length || r < arr2.length) {
      // if the current element in array 1 is undefined
      if (arr1[l] === undefined) {
        // we have reached the end of array 1 and should loop through the rest of array 2
        for (let i = r; i < arr2.length; ++i) {
          // pushing those elements to the output
          output.push(arr2[i]);
        }
        // no need to continue this while loop at this point
        break;
        // otherwise if array 2 ends first
      } else if (arr2[r] === undefined) {
        // do the opposite of above
        for (let i = l; i < arr1.length; ++i) {
          output.push(arr1[i]);
        }
        break;
        // otherwise, both arrays still have length
        // compare the two current elements being iterated
        // and if the element in array 1 has lesser value
      } else if (arr1[l] < arr2[r]) {
        // push this element to the output
        output.push(arr1[l]);
        // and move forwards in array 1
        ++l;
        // otherwise
      } else {
        // push the other array element
        output.push(arr2[r]);
        // and move forwards in that array
        ++r;
      }
    }
    // return the output array
    return output;
  },
  mergeTwoSortedArraysReverseSortFirst: (arr1, arr2) => {
    // first reverse the order of both arrays
    // while this is O(n) each, it gives us the ability to use `.pop()`, which is O(1)
    // as opposed to `.shift()` which is O(n) EACH TIME it is called
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);
    // compare the lengths of the arrays to ensure arr1 is always greater than or equal to the length of arr2
    if (arr2.length > arr1.length) {
      let temp = arr1;
      arr1 = arr2;
      arr2 = temp;
    }
    // establish output
    const output = [];
    // while both arrays contain items
    while (arr1.length > 0 && arr2.length > 0) {
      // establish a variable to store the lowest element
      let lowest;
      // compare the values of the last item of each array
      if (arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
        // since `.pop()` removes the end element of an array as well as returns it
        // we can kill two birds with one stone by using it to assign the lowest value
        lowest = arr1.pop();
      } else {
        lowest = arr2.pop();
      }
      // and pushing it to the output array
      output.push(lowest);
    }
    // since we already know which array is longer, we know which array to check for remaining items
    // and can loop through backwards pushing each to the output
    for (let i = arr1.length - 1; i >= 0; --i) {
      output.push(arr1[i]);
    }
    // finally returning it
    return output;
  },
};
