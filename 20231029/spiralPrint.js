const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15], // topRow // btmRow
  [16, 17, 18, 19, 20],
];
function spiralPrint(matrix) {
  let topRow = 0;
  let leftCol = 0;
  let btmRow = matrix.length - 1;
  let rightCol = matrix[0].length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    for (let col = 0; col <= rightCol; col++) {
      console.log(matrix[topRow][col]);
    }
    topRow++;

    for (let row = topRow; row <= btmRow; row++) {
      console.log(matrix[row][rightCol]);
    }
    rightCol--;

    if (topRow <= btmRow) {
      for (let col = rightCol; col >= leftCol; col--) {
        console.log(matrix[btmRow][col]);
      }
      btmRow--;
    }

    if (leftCol <= rightCol) {
      for (let row = btmRow; row > topRow; row--) {
        console.log(matrix[row][leftCol]);
      }
      leftCol++;
    }
  }
}
spiralPrint(matrix);
