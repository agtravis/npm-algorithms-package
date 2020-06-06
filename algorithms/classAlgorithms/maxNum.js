'use strict';

module.exports = (arr) => {
  // using the reduce method
  return arr.reduce(
    // each item is compared to the current output, and if greater, replaces the output
    // the output is initialized as the first item in the array
    (output, current) => (output = current > output ? current : output),
    arr[0]
  );
};
