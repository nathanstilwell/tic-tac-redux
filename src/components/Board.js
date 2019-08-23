import React from "react";

import Square from "./Square";
import getWinner from "../utils/check-winner";
import Players from "../constants/Players";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.board || [],
      xIsNext: true
    };

    console.log(this.props.board);
    console.log(getWinner(this.props.board));
  }

  handleClick(coord) {
    const [rowIndex, colIndex] = coord;

    const board = this.state.board.slice();

    const winner = getWinner(board);
    const cellValue = board[rowIndex][colIndex];
    if (winner || cellValue !== null) {
      console.log(`Winner: ${winner}`);
      console.log(`Cell Value: ${cellValue}`);
      return;
    }

    board[rowIndex][colIndex] = this.state.xIsNext ? Players.x : Players.o;
    this.setState({
      board,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const { board } = this.state;
    const winner = getWinner(this.state.board);
    const status = winner
      ? `Winner: ${winner}`
      : `Next Player: ${this.state.xIsNext ? Players.x : Players.o}`;

    return (
      <div>
        <div className="status">{status}</div>
        {board.map((row, rowIndex) => (
          <div className="board-row" key={`board-row-${rowIndex}`}>
            {row.map((cellValue, colIndex) => (
              <Square
                key={`board-cell-${rowIndex}-${colIndex}`}
                value={cellValue}
                onClick={() => this.handleClick([rowIndex, colIndex])}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
