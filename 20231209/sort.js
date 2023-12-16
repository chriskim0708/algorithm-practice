const array = [12, 3, 4, 2, 1, 34, 23];
const str = ["a", "b", "F", "f", "e", "d", "c", "A"];
console.log(str.sort());

console.log(
  "number sort asc",
  array.sort((a, b) => a - b)
);

console.log(
  "number sort desc",
  array.sort((a, b) => b - a)
);

const obj = [{ age: 22 }, { age: 48 }, { age: 34 }, { age: 12 }];

console.log(obj.sort((a, b) => a.age - b.age));
console.log(obj.sort((a, b) => b.age - a.age));
