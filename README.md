# npm-algorithms-package

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

## preClassDrills

First, destructure the Pre Class Drills:

```js
const { preClassDrills } = algorithms;
```

Then you can run the following functions:

```js
preClassDrills.greatestOfTwo.greatestOfTwo(1, 2); // === 2
preClassDrills.greatestOfTwo.greatestOfTwoReturnTernary(4, -6); // === 4
preClassDrills.greatestOfTwo.greatestOfTwoReturnMax(3.4, 2); // === 3.4
```

## classAlgorithms

First, destructure the Class Algorithms:

```js
const { classAlgorithms } = algorithms;
```

Then you can run the following functions:

```js
classAlgorithms.arithmetic.add(10, 2); // === 12
classAlgorithms.arithmetic.subtract(10, 2); // === 8
classAlgorithms.arithmetic.multiply(10, 2); // === 20
classAlgorithms.arithmetic.divide(10, 2); // === 5
```

```js
classAlgorithms.oddOrEven(10); // === `even`
classAlgorithms.oddOrEven(9); // === `odd`
classAlgorithms.oddOrEven(`10`); // === false
```

```js
classAlgorithms.logNums(10); // logs all positive integers from 1 to 10
```

## codeWars

First, destructure the Code Wars Algorithms:

```js
const { codeWars } = algorithms;
```

Then you can run the following functions:

[https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript)

```js
codeWars.duplicateEncode(`recede`); // === `()()()`
codeWars.duplicateEncode(`Success`); // === `)())())`
```

[https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript](https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript)

```js
codeWars.openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]); // === ['Open', 'Senior', 'Open', 'Senior']
codeWars.openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [54, 23],
]); // === ['Open', 'Open', 'Open', 'Open']
```

[https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript](https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript)

```js
codeWars.rot13(`test`); // === grfg
codeWars.rot13(`Test`); // === Grfg
```

[https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript](https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript)

```js
codeWars.sumStrings(`123`, `456`); // === `579`
codeWars.sumStrings(
  `50095301248058391139327916261`,
  `81055900096023504197206408605`
); // === `131151201344081895336534324866`
```

[https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript/5e7bd08621b52d0027ad328c](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript/5e7bd08621b52d0027ad328c)

```js
codeWars.findOutlier([0, 1, 2]); // === 1
codeWars.findOutlier([2, 6, 8, 10, 3]); // === 3
```

## binarySearch

First, destructure the Binary Search Algorithms:

```js
const { binarySearch } = algorithms;
```

Then you can run the following functions:

### Take 5 from each number in an array

```js
binarySearch.take5([8, 5, 0, 1, 2]); // === [3, 0, -5, -4, -3]
```
