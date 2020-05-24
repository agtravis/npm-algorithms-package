'use strict';

const duplicateEncode = require(`./duplicateEncode`);
const openOrSenior = require(`./openOrSenior`);
const { rot13a, rot13b } = require(`./rot13`);
const sumStrings = require(`./sumStrings`);
const findOutlier = require(`./findOutlier`);

module.exports = {
  duplicateEncode,
  openOrSenior,
  rot13a,
  rot13b,
  sumStrings,
  findOutlier,
};
