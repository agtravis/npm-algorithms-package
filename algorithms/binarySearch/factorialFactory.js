'use strict';

module.exports = {
  factorialFactory: (n) => {
    // establish accumulator
    let product = 1;
    // loop from 1 until `n`
    for (let i = 1; i <= n; ++i) {
      // with each iteration multiply and return the product by the iterator
      product *= i;
    }
    // return the product
    return product;
  },
  factorialFactoryWithRecursion: (n) => {
    // recursive helper function, takes `n` and an object `seen`
    const recurse = (n, seen) => {
      // if `n` is 1 or 0 (or negative) return 1 (the solution requires this)
      if (n <= 1) return 1;
      // multiply `n` by the recursion function on `n-1`, assign into the the object `seen`, and return
      return (seen[n] = n * recurse(n - 1, seen));
    };
    // call the recursion function on `n`, pass it an empty object, and return
    return recurse(n, {});
  },
  factorialFactoryWithReduce: (n) => {
    // establish new empty array
    const arr = new Array();
    // loop up to `n`
    for (let i = 0; i < n; ++i) {
      // set each element in the array to have a value of the iterator plus 1
      arr[i] = i + 1;
    }
    // return a reduction of the array
    return arr.reduce((product, current) => (product *= current), 1);
  },
};
