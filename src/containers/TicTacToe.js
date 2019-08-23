import React from "react";

import Board from "../components/Board";

const defaultBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const TicTacToe = ({ board = defaultBoard }) => (
  <div className="game">
    <div className="game-board">
      <Board board={board} />
    </div>
  </div>
);

export default TicTacToe;
