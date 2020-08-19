'use strict';

const wordCount = (string) => {
  if (!string || typeof string !== `string`) throw `not a string bud!`;
  // This is a helper function to determine if a character is considered whitespace
  // (if there is a shortcut for a generic whitespace character I wouldn't know without googling it which I couldn't do in an interview)
  // it simply returns a boolean value
  // if this shortcut exists, this helper function is not needed
  const isWhitespace = (character) => {
    if (character === `\n` || character === `\t` || character === `\ `) {
      return true;
    } else {
      return false;
    }
  };
  // if the string has any whitespace at the beginning or the end of the string
  // (which it may do since a user is able to enter anything they wish)
  // this whitespace is removed
  /* string = string.trim(); */
  // I had a bit of time left so I attempted to write a custom trim function
  // I'm not sure of the "Big O" of the substring method, so using trim might be more efficient
  // I'm guessing it is O(n), which might be fine if it was not inside a while loop
  while (isWhitespace(string.charAt(0))) {
    string = string.substring(1);
  }
  while (isWhitespace(string.charAt(string.length - 1))) {
    string = string.substring(0, string.length - 2);
  }
  // declaring a counter variable but not defining it
  let count;
  // if after trimming, the string has zero length, then there are zero words, and we can return zero
  if (string.length === 0) {
    return 0;
    // otherwise we know there is at least one word, so we can set the counter to be 1
  } else {
    // I'm incrementing at the start of the next word, rather than the end of the current word
    // this is why I'm starting at 1 and not zero
    // we have already handled a zero input
    count = 1;
  }
  // now we can loop through the string
  for (let i = 0; i < string.length; ++i) {
    // if the current character is whitespace and the following character is NOT whitespace
    // we know we've reached the start of a new word
    if (isWhitespace(string.charAt(i)) && !isWhitespace(string.charAt(i + 1))) {
      // we can increment the counter
      ++count;
    }
  }
  // when the loop finishes, return the count
  return count;
};

// each console log should return the function count followed by the expected count
console.log(wordCount(`     `), 0);
console.log(
  wordCount(`


`),
  0
);
console.log(wordCount(`                     `), 0);
console.log(wordCount(`       hello world       `), 2);
console.log(wordCount(`hello world hi there`), 4);
console.log(wordCount(`1234567890`), 1);
console.log(wordCount(`@%$^#%&^%*$%&(&(&#))`), 1);
console.log(wordCount(`a      a`), 2);
console.log(
  wordCount(
    ` a a a a     a   a






a               a`
  ),
  8
);
console.log(wordCount(`The complete works of Shakespeare. Condensed.`), 6);
console.log(wordCount(1), 6);

// This took me ~30 minutes (not including comment writing)
