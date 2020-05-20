'use strict';

module.exports = (a, b) => {
  let output = '';
  if (b.length > a.length) {
    let temp = b;
    b = a;
    a = temp;
  }
  let carry = 0;
  let top;
  let bottom;
  let hold;
  let digitSum;
  for (let i = 0; i < a.length; ++i) {
    top = parseInt(a.charAt(a.length - 1 - i));
    bottom = parseInt(b.charAt(b.length - 1 - i));
    bottom = bottom ? bottom : 0;
    hold = (carry + top + bottom).toString();
    digitSum = hold.charAt(hold.length - 1);
    carry = parseInt(hold.substr(0, hold.length - 1));
    carry = carry ? carry : 0;
    output = i === a.length - 1 ? hold + output : digitSum + output;
  }
  while (output.charAt(0) === '0') {
    output = output.substr(1);
  }
  return output;
};
