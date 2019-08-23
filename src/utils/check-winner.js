import Players from "../constants/Players";

const checkRowForPlayerVictory = (row, player) =>
  row.reduce((victory, cell) => victory && cell === player, true);
const didXWinRow = row => checkRowForPlayerVictory(row, Players.x);
const didOWinRow = row => checkRowForPlayerVictory(row, Players.o);
const checkRow = row =>
  didXWinRow(row) ? Players.x : didOWinRow(row) ? Players.o : null;

function checkRows(board) {
  return board.reduce(
    (victor, row) => (!victor ? (victor = checkRow(row)) : victor),
    null
  );
}

const checkColumnForPlayerVictory = (board, column, player) => {
  const victory = board.reduce((victory, row) => {
    victory = victory && row[column] === player;
    return victory;
  }, true);

  return victory;
};
const didXWinCol = (board, col) =>
  checkColumnForPlayerVictory(board, col, Players.x);
const didOWinCol = (board, col) =>
  checkColumnForPlayerVictory(board, col, Players.o);
const checkCol = (board, col) =>
  didXWinCol(board, col)
    ? Players.x
    : didOWinCol(board, col)
    ? Players.o
    : null;

const checkColumns = board => {
  const topRow = board[0] || [];
  const reducer = (victor, cell, index) => {
    const v = !victor ? (victor = checkCol(board, index)) : victor;
    return v;
  };
  // using the topRow to count the number of columns total
  const victor = topRow.reduce(reducer, null);

  return victor;
};

export default function getWinner(board = []) {
  if (!Array.isArray(board)) return null;
  const rowVictor = checkRows(board);
  const colVictor = checkColumns(board);

  return rowVictor ? rowVictor : colVictor ? colVictor : null;
}

/*
const winnerX = getWinner([
  [ 'X', 'X', 'X', ],
  [ ' ', 'O', ' ', ],
  [ ' ', 'O', ' ', ],
]);
console.log(`Winner should be X, `, winnerX);

const bigWinnerX = getWinner([
  [ ' ', 'O', ' ', ' '],
  [ 'X', 'X', 'X', 'X'],
  [ ' ', 'O', ' ', ' '],
  [ ' ', 'O', ' ', ' '],
]);
console.log(`Winner should be X, `, bigWinnerX);

const winnerO = getWinner([
  [ 'O', 'X', 'X', ],
  [ 'O', ' ', 'X', ],
  [ 'O', ' ', ' ', ],
]);
console.log(`Winner should be O, `, winnerO);

const bigWinnerO = getWinner([
  [ 'O', 'X', 'X', ' '],
  [ 'O', ' ', 'X', ' '],
  [ 'O', ' ', ' ', ' '],
  [ 'O', ' ', ' ', ' '],
]);
console.log(`Winner should be O, `, bigWinnerO);

const winnerNull = getWinner([
  [ 'O', 'X', 'X', ],
  [ 'X', 'O', 'O', ],
  [ 'O', 'X', 'X', ],
]);
console.log(`Winner should be null, `, winnerNull);

const emptyWinnerNull = getWinner([]);
console.log(`Winner should be null, `, emptyWinnerNull);

// some type checking
console.log(`Winner should be null, `, getWinner());
console.log(`Winner should be null, `, getWinner({}));
console.log(`Winner should be null, `, getWinner(22));
console.log(`Winner should be null, `, getWinner('nothing'));
*/
