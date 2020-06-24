'use strict';

module.exports = {
  zerosAndOnesLoop: (str) => {
    // establish a counter
    let count = 0;
    // loop through the input
    for (const char of str) {
      // if the character is a zero, decrement, otherwise increment the counter
      // NOTE that we are guaranteed the input is only a `0` or `1` so this works
      // if that was not the case, either an `if/else` statement would be needed
      // or some input validation
      char === `0` ? --count : ++count;
    }
    // if the count is at zero, there were an equal number of opposing characters
    return count === 0;
  },
  zerosAndOnesReduce: (str) => {
    // helper function that returns either 1 or negative 1 based on the input character
    const increment = (char) => (char === `0` ? -1 : 1);
    // return if the reduction of the array we create is equal to zero or not
    return (
      str
        // split the string into an array
        .split(``)
        // and reduce, running the helper function on each character
        .reduce((count, current) => count + increment(current), 0) === 0
    );
  },
};
