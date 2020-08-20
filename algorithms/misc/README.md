### Hilleberg Interview Question

Write a function in PHP that takes a string input of a color name in English and returns a translated string
in Swedish or German based on the global variable $language.
If there is not a translation for the color return the input string.
$language = alpha-2 language code
Colors:
English – Swedish – German
Red – Röd – rot
Green – Grön – grün
Sand – Sand – sand

```js
console.log(
  `The colors are: ${misc.hilleberg(`red`, `sv`)}, ${misc.hilleberg(
    `green`,
    `sv`
  )}, ${misc.hilleberg(`sand`, `sv`)}, and ${misc.hilleberg(`blue`, `sv`)}`
);
```

### Word Count

Write a function that returns the number of words (as separated by whitespace characters).

```js
misc.paulWordCount(
  ` a a a a     a   a

 a               a  `
); // === 8
```
