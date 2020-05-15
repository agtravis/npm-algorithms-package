# npm-algorithms-package

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
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
