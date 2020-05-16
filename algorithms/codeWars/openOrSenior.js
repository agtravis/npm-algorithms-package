'use strict';

module.exports = (data) => {
  return data.map((person) => {
    return person[0] >= 55 && person[1] > 7 ? 'Senior' : 'Open';
  });
};
