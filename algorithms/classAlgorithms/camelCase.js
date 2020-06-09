'use strict';

module.exports = {
  camelCaseConcatenation: (str) => {
    // convert string to an array split on ` `
    const arr = str.split(` `);
    // start an output string with the first word in the array set all to lower case
    let output = arr[0].toLowerCase();
    // loop through starting at the second element
    for (let i = 1; i < arr.length; ++i) {
      // and append the first letter of each word capitalized and the rest of each word all in lower case
      output +=
        arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    // return the string
    return output;
  },
  camelCaseMap: (str) =>
    // return the string
    str
      // split the string into an array of words
      .split(` `)
      // map it
      .map((current, index) =>
        // if it is the first word
        index === 0
          ? // map the word all in lower case
            current.toLowerCase()
          : // otherwise map the first letter capitalized and the rest of the word in lower case
            current.charAt(0).toUpperCase() + current.substring(1).toLowerCase()
      )
      // join the array back into a string
      .join(``),
};
