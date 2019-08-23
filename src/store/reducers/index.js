import { combineReducers } from "redux";
// import sub-reducers here
import board from "./board";

const rootReducer = combineReducers({
  board
});

export default rootReducer;
