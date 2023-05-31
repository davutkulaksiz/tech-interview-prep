// Hash table implementation using an object
let hashTable = {};

// Add key-value pairs
hashTable["apple"] = 10;
hashTable["banana"] = 20;
hashTable["orange"] = 30;

// Access values by keys
console.log(hashTable["banana"]); // Output: 20

// Iterate over key-value pairs
for (let key in hashTable) {
  console.log(key + ": " + hashTable[key]);
}
