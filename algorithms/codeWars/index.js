'use strict';

const duplicateEncode = require(`./duplicateEncode`);
const openOrSenior = require(`./openOrSenior`);
const { rot13a, rot13b } = require(`./rot13`);
const sumStrings = require(`./sumStrings`);
const findOutlier = require(`./findOutlier`);
const loopSize = require(`./loopSize`);
const {
  commonDenominatorsShort,
  commonDenominatorsLong,
} = require(`./commonDenominators`);
const chainAddingFunction = require(`./chainAddingFunction`);
const memoizedFibonacci = require(`./memoizedFibonacci`);
const {
  directionsReductionWithRecursion,
  directionsReductionWithStack,
} = require(`./directionsReduction`);
const moveZeros = require(`./moveZeros`);
const greatestCommonDivisor = require(`./greatestCommonDivisor`);
const pascalsTriangle = require(`./pascalsTriangle`);

module.exports = {
  duplicateEncode,
  openOrSenior,
  rot13a,
  rot13b,
  sumStrings,
  findOutlier,
  loopSize,
  commonDenominatorsShort,
  commonDenominatorsLong,
  chainAddingFunction,
  memoizedFibonacci,
  directionsReductionWithRecursion,
  directionsReductionWithStack,
  moveZeros,
  greatestCommonDivisor,
  pascalsTriangle,
};
