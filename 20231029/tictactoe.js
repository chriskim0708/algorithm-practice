const board = [
  ["O", "O", "O", "O", "O", "O"],
  ["-", "O", "-", "O", "-", "X"],
  ["-", "X", "O", "O", "-", "X"],
  ["O", "-", "X", "O", "-", "X"],
  ["-", "O", "-", "O", "O", "X"],
  ["-", "X", "O", "O", "-", "X"],
];

function checkRow(rowArr, letter) {
  for (let i = 0; i < rowArr.length; i++) {
    if (rowArr[i] != letter) {
      return false;
    }
  }
  return true;
}

function checkCol(gameBoardMatrix, columnIndex, letter) {
  for (let i = 0; i < gameBoardMatrix.length; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}

function checkDiagonalLeftToRight(gameBoardMatrix, letter) {
  return gameBoardMatrix.every((board, index) => board[index] === letter);
}

function checkDiagonalRightToLeft(gameBoardMatrix, letter) {
  return gameBoardMatrix.every(
    (board, index) => board[board.length - index + 1] === letter
  );
}

function ticTacToeWinner(gameBoardMatrix, letter) {
  const rowWin = gameBoardMatrix.some((board) => checkRow(board, letter));
  console.log("rowWin" + letter, rowWin);
  const colWin = Array({ length: gameBoardMatrix[0].length }).some((_, index) =>
    checkCol(gameBoardMatrix, index, letter)
  );
  console.log("colWin" + letter, colWin);

  const diagonalWinLeftToRight = checkDiagonalLeftToRight(
    gameBoardMatrix,
    letter
  );

  const diagonalWinRightToLeft = checkDiagonalRightToLeft(
    gameBoardMatrix,
    letter
  );

  return [rowWin, colWin, diagonalWinLeftToRight, diagonalWinRightToLeft].some(
    (result) => result
  );
}

console.log("ticTacToeWinner O", ticTacToeWinner(board, "O"));
console.log("ticTacToeWinner X", ticTacToeWinner(board, "X"));
