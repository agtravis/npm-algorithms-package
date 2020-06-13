'use strict';

const shareCandies = (A, B) => {
  // reduce both arrays to get the total sum of each
  const Atotal = A.reduce((sum, num) => (sum += num), 0);
  const Btotal = B.reduce((sum, num) => (sum += num), 0);
  // calculate the difference
  const difference = Atotal - Btotal;
  // loop through A
  for (let i = 0; i < A.length; ++i) {
    // and for each loop through B
    for (let j = 0; j < B.length; ++j) {
      // if the candy in A minus the candy in B results in a number that equals the difference divided by 2
      if (A[i] - B[j] === difference / 2) {
        // return those candies in the output format required
        // we are guaranteed by the question that there is an answer
        return [A[i], B[j]];
      }
    }
  }
};

const shareCandiesWithSet = (A, B) => {
  // reduce both arrays to get the total sum of each
  const Atotal = A.reduce((sum, num) => sum + num);
  const Btotal = B.reduce((sum, num) => sum + num);
  // calculate the difference
  // negative is OK
  const difference = Atotal - Btotal;
  // for readability, store the half difference
  const halfDifference = difference / 2;
  // create a new Set based on A array
  const setA = new Set(A);
  // now loop through B array
  for (const candy of B) {
    // set a new variable to be equal to the sum of the current candy in B
    // if the value of `halfDifference` is negative it simply means that `proposal` will be less than `candy`
    const proposal = candy + halfDifference;
    // if this stored value exists within the first array (which we are guaranteed it does, we just have to find it)
    if (setA.has(proposal)) {
      // return to match the output requirements
      return [proposal, candy];
    }
  }
};

module.exports = {
  shareCandies,
  shareCandiesWithSet,
};
