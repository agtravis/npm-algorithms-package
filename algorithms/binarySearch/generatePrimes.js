'use strict';

module.exports = (n) => {
  // helper function to determine if a number is prime
  const isPrime = (num) => {
    // if it is 2, it is prime - this is a special case since all other even numbers are divisible by 2
    if (num === 2) return true;
    // cases that will return false: zero, 1, all other even numbers besides 2
    if (num === 0 || num === 1 || (num % 2 === 0 && num !== 2)) return false;
    // calculate the square root of a number to minimize the amount of times to loop
    // by definition if calculating if a number is prime a square root floored is
    // the highest a multiple can be
    const rootNum = Math.floor(Math.sqrt(num));
    // loop starting at 3 since all lower numbers have been accounted for, and increment by 2 since evens have been accounted for
    for (let i = 3; i <= rootNum; i += 2) {
      // if the remainder of the number divided by the iterator is zero
      // it is not prime
      if (num % i === 0) {
        // return false
        return false;
      }
    }
    // if the loop ends and none is found, it must be prime
    return true;
  };
  // establish an output array to collect primes
  const output = [];
  // loop starting at 2 since the question does not count 1 as prime
  for (let i = 2; i <= n; ++i) {
    //  run the helper function on each iterator up to `n`
    if (isPrime(i)) {
      // if it returns true, it is prime, add it to the collection array
      output.push(i);
    }
  }
  // return the correction array
  return output;
};
