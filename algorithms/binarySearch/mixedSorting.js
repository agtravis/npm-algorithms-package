'use strict';

module.exports = (nums) => {
  // creates a new array like [`even`, `odd`, `even`] to remember the schema
  const positions = nums.map((num) => (num % 2 === 0 ? `even` : `odd`));
  // creates a new array of just even numbers and sorts them in descending order
  const even = nums
    .filter((num) => num % 2 === 0)
    .sort((a, b) => (a < b ? 1 : -1));
  // odd numbers only sorted in ascending order
  const odd = nums
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => (a < b ? -1 : 1));
  // re-map the first array, and dependent on the status, pop the right array.
  // This is why the arrays are sorted opposite to the result, because `pop()` is more efficient
  return positions.map((evenOdd) =>
    evenOdd === `even` ? even.pop() : odd.pop()
  );
};
