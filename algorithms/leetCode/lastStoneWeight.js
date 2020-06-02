'use strict';

module.exports = (stones) => {
  // if the input array is empty, return 0
  if (stones.length === 0) {
    return 0;
  }
  // sort the stones by weight, with the smallest at the front of the array
  let stonesSorted = stones.sort((a, b) => a - b);
  // as long as there is more than one in the array
  while (stonesSorted.length > 1) {
    // pop the end as the largest
    const largest = stonesSorted.pop();
    // and the second to last (after the pop it is the new end)
    const secondLargest = stonesSorted.pop();
    // the new stone is the difference between the two
    const newStone = largest - secondLargest;
    //  if the array is now empty after having 2 removed
    if (stonesSorted.length === 0) {
      // we can return the difference, even if it is zero
      return newStone;
    }
    // as long as the new stone is greater than zero
    if (newStone > 0) {
      // push it back into the array
      stonesSorted.push(newStone);
    }
    // and sort the array again
    stonesSorted = stonesSorted.sort((a, b) => a - b);
  }
  // once there is one stone the loop ends, we can return this stone
  return stonesSorted[0];
};
