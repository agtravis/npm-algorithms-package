'use strict';

// solved with a for loop
const addIterants = (num) => {
  // establish an accumulator
  let sum = 0;
  // loop through
  for (let i = 1; i <= num; ++i) {
    // add the iteration number to the accumulator
    sum += i;
    // bonus - if the sum is divisible by 10
    if (i % 10 === 0) {
      console.log(`sum (${sum}) is divisible by 10`);
    }
  }
  // return sum
  return sum;
};

// solved with reduce method
const addIterantsWithReduce = (num) => {
  // create empty array
  const arrayNums = [];
  // fill array with every number iterated
  for (let i = 1; i <= num; ++i) {
    arrayNums.push(i);
  }
  // return the array reduced with an accumulator, and set the initial value to zero
  return arrayNums.reduce((accumulator, current) => accumulator + current, 0);
};

// solve with recursion
// for each time the function is called, it has to call itself again n-1 times
// inefficient
const addIterantsRecursively = (num) => {
  // base case, if num === 0, we've reached the end
  if (num === 0) {
    return 0;
  }
  // otherwise return the number added to the recursive call of the function on the number subtracting
  return (num += addIterantsRecursively(num - 1));
};

// solved recursively but with memoization
// more efficient because the accumulator is also passed back,
// meaning each recursion is only one call
const addIterantsWithMemoization = (num, sum = 0) => {
  // base case, return if num is zero
  if (num === 0) {
    return sum;
    // since we are tracking the sum, we can log to the console if divisible by 10
  } else if (sum % 10 === 0) {
    console.log(`sum (${sum}) is divisible by 10`);
  }
  // add to the accumulator
  sum += num;
  // recursively call the function passing back the accumulator as well
  return addIterantsWithMemoization(num - 1, sum);
};

module.exports = {
  addIterants,
  addIterantsRecursively,
  addIterantsWithMemoization,
  addIterantsWithReduce,
};
