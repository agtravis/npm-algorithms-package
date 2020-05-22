'use strict';

module.exports = (integers) => {
  // create an object to store how many odd or even numbers are passed in
  let evenOrOdd = {
    even: 0,
    odd: 0,
  };
  // by default, we will set the array to even, meaning an odd number is the outlier
  let arrayIsEven = true;
  // iterate through the array, but we can stop after our third iteration because we know that the array will only have one integer that is an outlier
  // 3 iterations ensures we can be sure we know
  for (let i = 0; i < 3; ++i) {
    // if the current integer divided by 2 leaves 0 remainder
    if (integers[i] % 2 === 0) {
      // increment even
      evenOrOdd.even += 1;
    } else {
      // otherwise increment odd
      evenOrOdd.odd += 1;
    }
  }
  // now compare the final counts
  if (evenOrOdd.odd > evenOrOdd.even) {
    // if we end up with more odd numbers, we set this value to false to say that an even number is the outlier in a mostly odd array
    arrayIsEven = false;
  }
  // iterate through the entire input array (but will return early unless the outlier is at index length-1)
  for (const integer of integers) {
    // if the integer in focus is even and the array is mainly odd
    if (integer % 2 === 0 && arrayIsEven === false) {
      // return it
      return integer;
      // opposite
    } else if (Math.abs(integer) % 2 === 1 && arrayIsEven === true) {
      return integer;
    }
  }
};
