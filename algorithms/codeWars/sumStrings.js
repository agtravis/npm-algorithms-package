'use strict';

module.exports = (a, b) => {
  // establish output string
  let output = '';
  // if b is a longer number string, switch places
  if (b.length > a.length) {
    let temp = b;
    b = a;
    a = temp;
  }
  // carry will be the number carried over since we will be outputting one digit at a time
  let carry = 0;
  // top is the digit from 'a'
  let top;
  // bottom is the digit from 'b'
  let bottom;
  // hold is a place to store the sum of the carry, 'top', and 'bottom', converted to a string
  let hold;
  // digit sum is the ending character of the string in hold
  let digitSum;
  // now we loop through the string
  for (let i = 0; i < a.length; ++i) {
    // the digits of the strings at the current place we are iterating from
    top = parseInt(a.charAt(a.length - 1 - i));
    bottom = parseInt(b.charAt(b.length - 1 - i));
    // if there is no bottom digit, the bottom digit === 0
    // this is why we maybe re-arranged a & b, to ensure the shorter number is always on the bottom
    bottom = bottom ? bottom : 0;
    // add the 2 digits and the carry over, then convert to a string
    hold = (carry + top + bottom).toString();
    // get the character at the end of the number we are holding
    digitSum = hold.charAt(hold.length - 1);
    // the carry number is now the number of the substring with the last digit removed
    carry = parseInt(hold.substr(0, hold.length - 1));
    // (if this is undefined, set it to 0)
    carry = carry ? carry : 0;
    // append to the output
    // if we are on our last iteration, concatenate the hold and the output (we don't need to worry about a carry since it's the last one)
    // otherwise just append the digit
    output = i === a.length - 1 ? hold + output : digitSum + output;
  }
  // for as long as the first character of the output is '0', remove it. Some inputs might have unecessary zeros since they are strings
  while (output.charAt(0) === '0') {
    output = output.substr(1);
  }
  return output;
};
