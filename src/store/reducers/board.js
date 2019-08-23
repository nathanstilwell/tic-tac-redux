// import action types

const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function board(state = initialState, action) {
  switch (action.type) {
    case "move":
      return state.map((row, index) => {
        if (action.coord.rowIndex !== index) {
          return row;
        }

        return row.map((column, index) => {
          if (action.coord.colIndex !== index) {
            return column;
          }

          return action.value;
        });
      });
    default:
      return state;
  }
}
