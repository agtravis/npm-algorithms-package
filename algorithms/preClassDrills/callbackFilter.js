'use strict';

module.exports = {
  // takes a callback function as an argument
  callbackFilterLoop: (arr, callback) => {
    // establish an output array
    const output = [];
    // loop through the inputs
    for (const num of arr) {
      // run the callback function on each array input and it will return a boolean
      if (callback(num)) {
        // if true, the item is passed to the new array
        output.push(num);
      }
    }
    // the new array is returned
    return output;
  },
  // this is basically the same thing but with the built in filter method
  callbackFilterFilter: (arr, callback) => {
    return arr.filter((current) => callback(current));
  },
};
