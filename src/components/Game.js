import React from "react";

import Board from "../containers/Board";

const Game = ({ board, onSquareClicked, status, gameOver, playAgain }) => (
  <div className="game">
    <div className="status">{status}</div>
    <div className="game-board">
      <Board />
    </div>
    {gameOver && (
      <button className="play-again" onClick={playAgain}>
        Play Again
      </button>
    )}
  </div>
);

export default Game;
