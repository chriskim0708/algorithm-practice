function countDownToZero(n) {
  if (n < 0) return;
  console.log(n);
  countDownToZero(n - 1);
}

countDownToZero(10);

function getNthFibo(n) {
  if (n <= 1) return n;
  let sum = 0;
  let last = 1;
  let lastlast = 0;

  for (let i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  return sum;
}

console.log("getNthFibo n: 5 - ", getNthFibo(5));

function getNthFiboRecursive(n) {
  if (n <= 1) return n;
  return getNthFiboRecursive(n - 1) + getNthFiboRecursive(n - 2);
}

console.log("getNthFiboRecursive", getNthFiboRecursive(6));
