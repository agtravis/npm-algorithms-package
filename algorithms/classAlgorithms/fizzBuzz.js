'use strict';

module.exports = (n) => {
  // helper function to determine what to log
  const fizzBuzzfunction = (n) => {
    // based on what is divisible, return a string
    if (n % 15 === 0) {
      return `Fizz Buzz`;
    } else if (n % 5 === 0) {
      return `Buzz`;
    } else if (n % 3 === 0) {
      return `Fizz`;
      // if none are divisible, return the input
    } else {
      return n;
    }
  };
  // set an array to be equal to the input `n` formatted. This is essentially a custom `map` method
  const arr = fizzBuzzfunction(n);
  // loop through this new array
  for (const num of arr) {
    // log the return
    console.log(fizzBuzzfunction(num));
  }
};
