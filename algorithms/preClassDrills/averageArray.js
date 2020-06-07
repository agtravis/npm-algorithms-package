'use strict';

module.exports = (arr) => {
  return arr.reduce((sum, current) => (sum += current), 0) / arr.length;
};
