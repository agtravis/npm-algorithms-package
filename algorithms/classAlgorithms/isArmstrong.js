'use strict';

module.exports = (num) => {
  // convert the number to a string
  const numAsString = num.toString();
  // return a boolean value conditional upon whether the original number is equal to
  return (
    num ===
    // the stringified number
    numAsString
      // split to an array
      .split(``)
      // then reduced to a sum
      .reduce(
        (total, current) =>
          // of each digit (converted to a number) and multiplied to the power of the amount of digits
          total + Math.pow(parseInt(current), numAsString.length),
        // initialized at zero
        0
      )
  );
};
