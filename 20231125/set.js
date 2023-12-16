const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6];
const result = [];
const hash = {};

for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  if (hash[current]) continue;
  result.push(current);
  hash[current] = true;
}

console.log(result);

const set = new Set([1, 2, 2, 2, 2, 3, 4, 4, 6, 7]);
set.add(8);
set.add(9);
set.add(9);
console.log("set", [...set]);
console.log("set has 6", set.has(6));
set.delete(3);
console.log("set", [...set]);

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 6]);

function intersect(a, b) {
  const intersection = new Set();

  for (let el of b) {
    if (a.has(el)) {
      intersection.add(el);
    }
  }

  return intersection;
}

console.log("intersect", intersect(setA, setB));

function isSuperset(mainset, subset) {
  for (let el of subset) {
    if (!mainset.has(el)) {
      return false;
    }
  }
  return true;
}

console.log(
  "isSuperset",
  isSuperset(new Set([1, 2, 3, 4, 5]), new Set([2, 3, 4]))
);

function unionSet(setA, setB) {
  const result = new Set(setA);
  for (let el of setB) {
    result.add(el);
  }
  return result;
}

const test = new Set([1, 2, 3]);
const test2 = new Set(test);
console.log("test2", test2);

console.log(
  "unionSet",
  unionSet(
    new Set([1, 2, [1, 2, 3, 4], 3, 4, { a: 1, b: 2 }]),
    new Set([3, 2, 2, 4, 9, 10])
  )
);
