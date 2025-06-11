class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord;
  }

  startsWith(prefix) {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}



const commands = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const values = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
const output = [];

let trie;

for (let i = 0; i < commands.length; i++) {
  const command = commands[i];
  const value = values[i][0];

  switch (command) {
    case "Trie":
      trie = new Trie();
      output.push(null);
      break;
    case "insert":
      trie.insert(value);
      output.push(null);
      break;
    case "search":
      const searchResult = trie.search(value);
      output.push(searchResult);
      break;
    case "startsWith":
      const startsWithResult = trie.startsWith(value);
      output.push(startsWithResult);
      break;
    default:
      break;
  }
}

console.log(output);
