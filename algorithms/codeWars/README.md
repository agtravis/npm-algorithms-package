# Code Wars

Problems solved at [https://www.codewars.com/](https://www.codewars.com/)

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Code Wars Algorithms:

```js
const { codeWars } = algorithms;
```

Then you can run the following functions:

### Duplicate Encode

[https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript)

```js
codeWars.duplicateEncode(`recede`); // === `()()()`
codeWars.duplicateEncode(`Success`); // === `)())())`
```

### Open or Senior

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

### Rot 13

[https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript](https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript)

```js
codeWars.rot13a(`test`); // === grfg
codeWars.rot13b(`Test`); // === Grfg
```

### Sum Strings

[https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript](https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript)

```js
codeWars.sumStrings(`123`, `456`); // === `579`
codeWars.sumStrings(
  `50095301248058391139327916261`,
  `81055900096023504197206408605`
); // === `131151201344081895336534324866`
```

### Find Outlier

[https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript/5e7bd08621b52d0027ad328c](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript/5e7bd08621b52d0027ad328c)

```js
codeWars.findOutlier([0, 1, 2]); // === 1
codeWars.findOutlier([2, 6, 8, 10, 3]); // === 3
```

### Length of a Loop in a Linked List

[https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript/5ec2b420b6a0c30014cc1f0b](https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript/5ec2b420b6a0c30014cc1f0b)

NOTE: Needs [this](./linkedlist.md) to run successfully (`Linked List` set up)

```js
codeWars.loopSize(linkedList.head); // === answer dependent on the input list, see linkedlist.md
```

### Greatest Common Denominators

[https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript/5ec181c34ecb1400132b95d8](https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript/5ec181c34ecb1400132b95d8)

```js
codeWars.commonDenominatorsShort([
  [1, 2],
  [1, 3],
  [1, 4],
]); // === `(6,12)(4,12)(3,12)`
codeWars.commonDenominatorsLong([
  [1, 2],
  [1, 3],
  [1, 4],
]); // === `(6,12)(4,12)(3,12)`
```

### Chain Adding Function

[https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript)

```js
codeWars.chainAddingFunction([1, 2, 3, 4]); // === chainAdd(1)(2)(3)(4) === 10
```

### Memoized Fibonacci

[https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript/](https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript/)

```js
codeWars.memoizedFibonacci(7); // === 13
codeWars.memoizedFibonacci(102); // === 927372692193079200000
```

### Directions Reduction

[https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript/](https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript/)

```js
directionsReductionWithStack([
  'NORTH',
  'SOUTH',
  'SOUTH',
  'EAST',
  'WEST',
  'NORTH',
  'WEST',
]); // === ['WEST']
directionsReductionWithRecursion([
  'NORTH',
  'SOUTH',
  'SOUTH',
  'EAST',
  'WEST',
  'NORTH',
  'WEST',
]); // === ['WEST']
```

### Move Zeros to the End

[https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript)

```js
codeWars.moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // === [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
```
