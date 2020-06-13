'use strict';

const fibonacci = (n) => {
  // establish an output array initialized with the first and second values
  let output = [1, 1];
  // loop starting with the third next input until n
  for (let i = 2; i < n; i++) {
    // push the sum of the previous and next previous inputs in the array
    output.push(output[i - 2] + output[i - 1]);
  }
  // return the array at the input index (1 less than n)
  return output[n - 1];
};

const fibonacciRecursion = (n) => {
  // helper function to recurse
  // takes n the current term, and seen, an object to memoize to save space
  const recurse = (n, seen) => {
    // if n is 1 or 0, we have reached the end and can return n
    if (n === 1 || n === 0) return n;
    // if the result has already been seen, we can access it here
    if (seen[n]) return seen[n];
    // otherwise we take the function and run it on n - 1 added to n - 2, and save it to the seen object
    // while also passing the object to the recursion
    return (seen[n] = recurse(n - 1, seen) + recurse(n - 2, seen));
  };
  // the recursion function is called passing an empty object, and returned
  return recurse(n, {});
};

module.exports = {
  fibonacci,
  fibonacciRecursion,
};
