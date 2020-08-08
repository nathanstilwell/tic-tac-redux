import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Game from "../components/Game";
import {
  makeAMove,
  resetGame,
  getBoard,
  getStatus,
  getIsGameOver,
} from "../store";

const mapStateToProps = (state) =>
  createStructuredSelector({
    board: getBoard,
    status: getStatus,
    gameOver: getIsGameOver,
  })(state);

const mapDispatchToProps = (dispatch) => ({
  onSquareClicked: (coord) => dispatch(makeAMove(coord)),
  playAgain: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
