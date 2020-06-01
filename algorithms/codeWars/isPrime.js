'use strict';

module.exports = (num) => {
  // if the number is not positive, return false
  if (num !== Math.abs(num)) return false;
  // this line returns false if the number is
  // 0 || 1 || even but not 2
  if (num === 0 || num === 1 || (num % 2 === 0 && num !== 2)) return false;
  // if the number is 2, return true
  if (num === 2) return true;
  // calculate the square root of the number (then floor it to make sense to the for loop)
  // the reason for this is because if you increment up to the square root you can eliminate the need to loop up to the number
  // for example 4 * 4 === 16, if one multiple is less than the square root, the other must be higher
  // like 2 * 8 === 16. You can be certain that if you have not hit one multiple before you hit the square root, you will not hit another
  // because any two numbers multiplied by each other larger than the square root will be greater than the target number
  const rootNum = Math.floor(Math.sqrt(num));
  // we can also start the loop at 3 since we eliminated the need for 0, 1, 2
  // we can also increment by two since we are skipping even numbers
  // this is still O(n)
  for (let i = 3; i <= rootNum; i += 2) {
    // as soon as we divide by the iterator and return no remainder,
    // we know the number is not prime
    if (num % i === 0) {
      return false;
    }
  }
  // if the loop completes we know it is prime
  return true;
};
