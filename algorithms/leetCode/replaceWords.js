'use strict';

const replaceWords = (dict, sentence) => {
  // create a class
  class Trie {
    constructor() {
      // set the property root to be a node
      this.root = new Node();
    }
    // the add method takes a word input
    add(word) {
      // pointer variable starts at the root
      let ptr = this.root;
      // loop through the characters of the word input
      for (const c of word) {
        // if the character does not already exist in the pointer character keys
        if (!(c in ptr.chars)) {
          // create it, and set it to a new node
          ptr.chars[c] = new Node();
        }
        // now set the pointer to look at the node we just created
        ptr = ptr.chars[c];
      }
      // once the loop reaches the end of the word, set that node to be the end of the word
      ptr.isEndOfWord = true;
    }

    // the search method takes in a word input
    search(word) {
      // start the pointer at the root
      let ptr = this.root;
      // loop as long as the word and the pointer exists
      for (let i = 0; i < word.length && ptr; i++) {
        // if the pointer sees the end of word property being true
        if (ptr.isEndOfWord) {
          // return the word substring at the point we are at
          return word.substring(0, i);
        }
        // otherwise set the node in the pointer to be the next letter in the word
        ptr = ptr.chars[word[i]];
      }
      // if the loop finishes, return the whole word - this means we never encountered a signifier saying the word was in the Trie
      return word;
    }
  }

  // set the node class
  class Node {
    constructor() {
      // the chars property is a blank object
      this.chars = {};
      // by default the character property to signify end of the word is set to false
      this.isEndOfWord = false;
    }
  }

  // start a new Trie
  const trie = new Trie();
  // loop through the input words in the dictionary
  for (const word of dict) {
    // add a trie of each word to the Trie
    trie.add(word);
  }
  // return
  return (
    sentence
      // split the array into words (' ' delimited)
      .split(' ')
      // for each word in the array, see if it (or a root) is in the Trie
      .map((word) => trie.search(word))
      // concatenate before returning
      .join(' ')
  );
};

module.exports = replaceWords;
