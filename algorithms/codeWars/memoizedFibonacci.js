'use strict';

// to begin with there is no hashmap passed in so it is set to an empty object
// the recursive calls will pass something
const memoizedFibonacci = (n, hashMap = {}) => {
  // fibonacci requires at least 2 previous numbers,
  // if n === 0 || n === 1, return value === n
  if (n === 0 || n === 1) return n;
  // if the number already exists in the hash, then when the function is called it only
  // needs to return this property, and the function does not actually need to be called
  if (hashMap[n]) {
    return hashMap[n];
  }
  // if it doesn't exist, the recursive function will have to be called
  return (hashMap[n] =
    memoizedFibonacci(n - 1, hashMap) + memoizedFibonacci(n - 2, hashMap));
};

module.exports = memoizedFibonacci;
