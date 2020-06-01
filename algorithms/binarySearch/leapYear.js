'use Strict';

module.exports = (n) => {
  // if divisible by 400, it is a leap year
  if (n % 400 === 0) return true;
  // if divisible by 100 it is not a leap year
  if (n % 100 === 0) return false;
  // if divisible by 4 it is a leap year
  if (n % 4 === 0) return true;
  // otherwise return false
  else return false;
};

// since the function will exit with a return, we can't return a condition unless a more relevant/narrower condition has already been eliminated
// for example, if the year was 400 but the 100 rule was first, it would return as true
