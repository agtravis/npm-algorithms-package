'use strict';

const reverseWordsWithoutReverse = (sentence) => {
  const sentenceArr = sentence.split(' ');
  const output = [];
  for (let i = sentenceArr.length - 1; i >= 0; --i) {
    output.push(sentenceArr[i]);
  }
  return output.join(' ');
};

const reverseWordsWithReverse = (sentence) => {
  return sentence.split(' ').reverse().join(' ');
};

module.exports = {
  reverseWordsWithReverse,
  reverseWordsWithoutReverse,
};
