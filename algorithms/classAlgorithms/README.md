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
