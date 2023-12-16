function HashTable(size) {
  this.size = size;
  this.keys = Array(size).fill(null);
  this.values = Array(size).fill(null);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";
  if (this.keys.includes(key)) throw "duplicated key";

  let hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] !== null) {
    hashedIndex++;
    hashedIndex = this.hash(hashedIndex);
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";
  return key % this.size;
};

HashTable.prototype.get = function (key) {
  let hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] !== key) {
    hashedIndex++;
    hashedIndex = this.hash(hashedIndex);
  }

  return this.values[hashedIndex];
};

HashTable.prototype.getAll = function () {
  return this.values;
};

const exampleTable = new HashTable(13);
exampleTable.put(7, "hi");
exampleTable.put(20, "hello");
exampleTable.put(33, "sunny");
exampleTable.put(46, "weather");
exampleTable.put(59, "wow");
console.log(exampleTable.getAll());
console.log(exampleTable.get(20));

// console.log([...Array(13)].map((v) => 1));
// console.log(Array(13).fill(null));
