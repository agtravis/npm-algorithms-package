```js
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set = (key, value) => {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  };

  get = (key) => {
    const address = this._hash(key);
    if (this.data[address]) {
      for (const [keyHashed, value] of this.data[address]) {
        if (keyHashed === key) {
          return value;
        }
      }
    }
    return undefined;
  };

  keys = () => {
    if (!this.data.length) {
      return undefined;
    }
    const output = [];
    for (const entry of this.data) {
      if (entry) {
        entry.forEach((element) => {
          output.push(element[0]);
        });
      }
    }
    return output;
  };
}
```
