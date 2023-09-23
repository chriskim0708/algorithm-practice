function a(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

console.log("a", a(10));

function b(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

console.log("b", b(100));

function c(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    for (let j = 0; j < 5 * n; j++) {
      count += 1;
    }
  }
  return count;
}

console.log("c", c(100));

function d(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}

console.log("d", d(100));

function someFunction(n) {
  for (let i = 0; i < n * 1000; i++) {
    for (let j = 0; j < n * 20; j++) {
      console.log("someFunction", i + j);
    }
  }
}

someFunction(5);
// O(n*n)

function someFunction2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < 10; l++) {
          console.log("someFunction2", i + j + k + l);
        }
      }
    }
  }
}
// O(n*n*n)

function someFunction3(n) {
  for (let i = 0; i < 1000; i++) {
    console.log("someFunction3", i);
  }
}
// O(1)

function someFunction4(n) {
  for (let i = 1; i < n; i = i * 2) {
    console.log("someFunction4", i);
  }
}
// O(log2n)
