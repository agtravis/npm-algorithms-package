# Class Algorithms

These are the algorithms that were provided weekly as an extra activity.

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Class Algorithms:

```js
const { classAlgorithms } = algorithms;
```

Then you can run the following functions:

### Basic Functions

```js
classAlgorithms.arithmetic.add(10, 2); // === 12
classAlgorithms.arithmetic.subtract(10, 2); // === 8
classAlgorithms.arithmetic.multiply(10, 2); // === 20
classAlgorithms.arithmetic.divide(10, 2); // === 5
```

### Even or Odd

```js
classAlgorithms.oddOrEven(10); // === `even`
classAlgorithms.oddOrEven(9); // === `odd`
classAlgorithms.oddOrEven(`10`); // === false
```

### Log Numbers

```js
classAlgorithms.logNums(10); // logs all positive integers from 1 to 10 (function logs, no return)
```

### Log Even Numbers

```js
classAlgorithms.logEvens(10); // logs all positive integers divisible by 2 (with return)
```

### Log Numbers Counting Down

```js
classAlgorithms.countdown(10); // logs all positive integers from 10 to 1 (with return)
```

### Sum All Numbers in an Array

```js
classAlgorithms.sumArrayForEach([4, 8, 15, 16, 23, 42]); // === 108
classAlgorithms.sumArrayReduce([4, 8, 15, 16, 23, 42]); // === 108
```
