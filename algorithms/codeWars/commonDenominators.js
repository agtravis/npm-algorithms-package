'use strict';

const commonDenominatorsLong = (lst) => {
  console.log(lst);
  // create an array that is just the denominator (the fractions are stored as arrays e.g. [1, 2] === 1/2)
  const denoms = lst.map((rational) => rational[1]);
  // find the largest of the denominators
  let max = Math.max(...denoms);
  // find the greatest common denominator by reducing the denominator array by multiplying all the denominators together
  const gcd = denoms.reduce((product, current) => product * current, 1);
  // establish a boolean to track if we are successful
  let found = false;
  // as long as we have not been successful
  while (!found) {
    // set found to true
    found = true;
    // for each denominator
    for (const denom of denoms) {
      // if the max denominator in the input array divided by the current denominator leaves a remainder...
      if (max % denom !== 0) {
        // set found to false again
        found = false;
        // increment by 1 the max denominator
        ++max;
        // cut the for loop short
        break;
      }
      // if all the denominators in the input array successfully go completely into the max number without
      // leaving a remainder, the `if` statement is never triggered, and the `found` variable remains true,
      // so the while loop finally does not re-iterate.
    }
  }
  // to format the output to pass the test:
  // establish an empty string
  let output = ``;
  // loop through the input array
  for (const rational of lst) {
    // for each, construct a string with the appropriate variables and calculations, and concatenate
    output += `(${rational[0] * (max / rational[1])},${max})`;
  }
  return output;
};

const commonDenominatorsShort = (arr) => {
  // helper function to get lowest common multiple
  const lcm = (denominator, product) =>
    // return the current denominator multiplied by the current reduced product, divided by the greatest common denominator
    (denominator * product) / gcd(denominator, product);
  // recursive helper function to get greatest common denominator
  const gcd = (denominator, product) =>
    // if there is a product passed in (this will change meaning next pass), the function is called recursively
    // the next call passes in the remainder of the denomintor divided by the product
    // if the remainder passed in is zero, no more recursions are necessary, we have found the greatest common denominator,
    // so this denominator is what is returned
    product ? gcd(product, denominator % product) : denominator;
  // the common denominator is a reduction of the input array by sending the denominator and current reduction product
  // to a helper function which will return the lowest common multiple of the current denominator and the current reduction product
  const commonDenominator = arr.reduce(
    (product, [_, denominator]) => lcm(denominator, product),
    1
  );
  // the return concatenation
  return (
    arr
      // the return is an array formed by destructuring the numerator and denominator
      .map(
        ([numerator, denominator]) =>
          // concatenating the expression using the variables and calculations
          `(${
            (numerator * commonDenominator) / denominator
          },${commonDenominator})`
      )
      //and finally joining the array to make a string
      .join('')
  );
};

module.exports = {
  commonDenominatorsShort,
  commonDenominatorsLong,
};
