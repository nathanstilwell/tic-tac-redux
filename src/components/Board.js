import React from "react";

import Square from "./Square";

const noop = () => {};

const Board = ({ board, onSquareClicked }) => (
  <div>
    {board.map((row, rowIndex) => (
      <div className="board-row" key={`board-row-${rowIndex}`}>
        {row.map((cellValue, colIndex) => (
          <Square
            key={`board-cell-${rowIndex}-${colIndex}`}
            value={cellValue}
            onClick={() => onSquareClicked([rowIndex, colIndex])}
          />
        ))}
      </div>
    ))}
  </div>
);

Board.defaultProps = {
  board: [],
  onSquareClicked: noop,
};

export default Board;
