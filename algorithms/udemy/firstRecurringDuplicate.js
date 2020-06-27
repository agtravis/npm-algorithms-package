'use strict';

module.exports = (arr) => {
  // creating a custom hashtable
  class HashTable {
    // the constructor takes a size to be the designated length of the array
    constructor(size) {
      this.data = new Array(size);
    }
    // this is a hashing helper function which will designate where the input will be saved
    // this is just a simple example creating a simple hash
    // it takes an input `key`
    _hash(key) {
      // establish the hash to be zero
      let hash = 0;
      // loop through each character of the key string
      for (let i = 0; i < key.length; i++) {
        // each time reset the value of the hash to be
        // the current hash value added to
        // the character code of the current character multiplied by the iterator
        // then divide that result by the length of the array and then the result is the remainder
        // this ensures that the address will always be within the length of the array
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      // return the hash once the input is completely looped through
      return hash;
    }
    // to add to the hash table, send the property name and the value to associate with it
    set = (key, value) => {
      // get the address by running the hash function on the key input
      const address = this._hash(key);
      // if the address doesn't exist yet
      if (!this.data[address]) {
        // create it and set it to be an empty array
        this.data[address] = [];
      }
      // take the input key and value pair as an array, and push that into the address array
      this.data[address].push([key, value]);
    };
    // to retrieve data from the array
    get = (key) => {
      // get the hash address
      const address = this._hash(key);
      // if that address exists
      if (this.data[address]) {
        // loop through the key / value pair (here deconstructed for easy reading)
        for (const [keyHashed, value] of this.data[address]) {
          // until you find the desired key
          if (keyHashed === key) {
            // and return its value
            return value;
          }
        }
      }
      // if the address doesn't exist, or for whatever reason the above loop didn't find a match (it should unless there is an error)
      // return undefined
      return undefined;
    };
    // this is a method to return a list of the keys added so far
    keys = () => {
      // if the data array is empty, there are no keys, return undefined
      if (!this.data.length) {
        return undefined;
      }
      // establish an output array
      const output = [];
      // loop through the data
      for (const entry of this.data) {
        // every time an address is filled
        if (entry) {
          // loop through the key / value arrays at this level
          entry.forEach((element) => {
            // and add the first (i.e. the `key` designate) to the output array
            output.push(element[0]);
          });
        }
      }
      // return
      return output;
    };
  }
  // create a new instance of the above custom hash table
  const seen = new HashTable();
  // loop through the function call's input array
  for (const num of arr) {
    // if the number does not exist as a value yet in the hash table
    if (!seen.get(num)) {
      // store it in the table and set the value to `true`
      seen.set(num, true);
      // otherwise if it does exist
    } else {
      // we have seen it and we can return the number
      return num;
    }
  }
  // the problem requires undefined be returned if no duplicates are found
  return undefined;
};
