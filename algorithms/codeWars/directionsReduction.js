'use strict';

const directionsReductionWithRecursion = (arr) => {
  // helper function to return true or false dependent on if parameters are a matching pair
  const compareDirections = (current, next) => {
    return (current === 'NORTH' && next === 'SOUTH') ||
      (current === 'SOUTH' && next === 'NORTH') ||
      (current === 'EAST' && next === 'WEST') ||
      (current === 'WEST' && next === 'EAST')
      ? true
      : false;
  };
  // establish output array
  const output = [];
  // loop through input array
  for (let i = 0; i < arr.length; ++i) {
    // for each input, compare it with the next to determine if it is a pair
    // if it is, jump the loop ahead to skip the next
    // if it is not a pair, the current direction can be pushed to the output array
    // and the iterator moves up to the next instead of skipping
    compareDirections(arr[i], arr[i + 1]) ? ++i : output.push(arr[i]);
  }
  // if the output length is equal to the input length, we know we have gone through
  // one loop without any changes, and the directions have been condensed as much as possible
  // and it can be returned as is
  // otherwise if the length is different, the new input array on the recursion
  // will have a different order of directions and new pairs may be available to skip over
  return output.length !== arr.length
    ? directionsReductionWithRecursion(output)
    : output;
};

const directionsReductionWithStack = (arr) => {
  // helper function to return true or false dependent on if parameters are a matching pair
  const compareDirections = (current, next) => {
    return (current === 'NORTH' && next === 'SOUTH') ||
      (current === 'SOUTH' && next === 'NORTH') ||
      (current === 'EAST' && next === 'WEST') ||
      (current === 'WEST' && next === 'EAST')
      ? true
      : false;
  };
  // establish empty array
  const stack = [];
  // loop through input
  for (const direction of arr) {
    // compare each input with the most recent push (or undefined if the first iteration)
    compareDirections(direction, stack[stack.length - 1])
      ? // if they match, remove the most recent push
        stack.pop()
      : // otherwise push the new direction
        stack.push(direction);
  }
  return stack;
};

module.exports = {
  directionsReductionWithRecursion,
  directionsReductionWithStack,
};
