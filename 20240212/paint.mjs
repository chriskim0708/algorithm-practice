function solution(n, m, section) {
  const wallArr = Array(n).fill(true);
  let count = 0;

  for (let area of section) {
    wallArr[area - 1] = false;
  }

  for (let i = 0; i < wallArr.length; i++) {
    if (wallArr[i] === false) {
      for (let j = 0; j < m; j++) {
        wallArr[i + j] = true;
      }
      count++;
    }
  }

  console.log("count", count);
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(8, 2, [2, 3, 4, 5, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
console.log(solution(1, 1, [1]));
console.log(solution(5, 5, [3]));
console.log(solution(4, 2, [3, 4]));
console.log(solution(100, 4, [2, 3, 99]));
console.log(solution(100, 4, [2, 3, 22, 39, 50, 51, 99]));
console.log(solution(100, 4, [2, 3, 22, 39, 50, 51, 52, 53, 99]));
console.log(solution(100, 4, [2, 3, 22, 39, 50, 51, 52, 53, 54, 99]));
