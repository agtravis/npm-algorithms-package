'use strict';

module.exports = {
  sumArrayForEach: (arr) => {
    // establish a sum at zero
    let sum = 0;
    // use array method forEach to loop
    arr.forEach((num) => {
      // adding each number to the existing sum total
      sum += num;
    });
    // return the sum
    return sum;
  },
  sumArrayReduce: (arr) => {
    // use the reduce method to do the same
    return arr.reduce((sum, current) => sum + current, 0);
  },
};
