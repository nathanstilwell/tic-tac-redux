import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Board from "../components/Board";

import { getBoard, makeAMove } from "../store";

const mapStateToProps = (state) =>
  createStructuredSelector({
    board: getBoard,
  })(state);

const mapDispatchToProps = (dispatch) => ({
  onSquareClicked: (coord) => dispatch(makeAMove(coord)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
