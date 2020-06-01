'use strict';

const subtractProductAndSum = (n) => {
  // convert the number to a string so it is iterable
  n = n.toString();
  // set a starting running total for product and sum
  let product = 1;
  let sum = 0;
  // loop through string of num
  for (const num of n) {
    // for each digit parse as an integer and either multiply with
    product *= parseInt(num);
    // or add to the running totals
    sum += parseInt(num);
  }
  // return the difference
  return product - sum;
};

const subtractProductAndSumReduce = (n) => {
  // first convert to a string and then split digits into an array
  n = n.toString().split('');
  // return a product reduction minus a sum reduction difference
  return (
    n.reduce((product, digit) => product * parseInt(digit), 1) -
    n.reduce((sum, digit) => sum + parseInt(digit), 0)
  );
};

module.exports = {
  subtractProductAndSum,
  subtractProductAndSumReduce,
};
