'use strict';

module.exports = (lsts) => {
  const output = [];
  for (const subArray of lsts) {
    output.push(...subArray);
  }
  return output;
};
