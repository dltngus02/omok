import React, { useEffect, useReducer, useCallback, useState } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
  recentCell: [-1, -1],
};

export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const SET_WINNER = "SET_WINNER";
export const RESET_GAME = "RESET_GAME";
const onClickTable = () => {};
const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    // case SET_WINNER:
    //   return { ...state, winner: state.turn };
    case RESET_GAME:
      return {
        turn: "O",
        tableData: [
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
        ],
        recentCell: [-1, -1],
      };
  }
};
const Omok = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [winner, setWinner] = useState("");
  const onClickBtn = () => {
    dispatch({ type: RESET_GAME });
  };
  useEffect(() => {
    const [row, cell] = state.recentCell;

    if (row == -1 && cell == -1) {
      return;
    }
    let mincell, maxcell;
    mincell = cell - 5 >= 0 ? cell - 5 : 0;
    maxcell = cell + 5 < 10 ? cell + 5 : 9;
    let minrow, maxrow;

    minrow = row - 5 >= 0 ? row - 5 : 0;
    maxrow = row + 5 < 10 ? row + 5 : 9;
    var count = 0;
    let win = false;
    const t = state.turn == "O" ? "X" : "O";
    if (!win) {
      for (let i = mincell; i < maxcell + 1; i++) {
        if (state.tableData[row][i] === t) {
          count += 1;
        } else {
          count = 0;
        }
        if (count >= 5) {
          win = true;
          break;
        }
      }
    }
    count = 0;

    if (!win) {
      for (var i = minrow; i < maxrow + 1; i++) {
        if (state.tableData[i][cell] === t) {
          count += 1;
        } else {
          count = 0;
        }
        if (count >= 5) {
          win = true;
          break;
        }
      }
    }
    count = 0;
    if (!win) {
      for (var i = minrow; i < maxrow + 1; i++) {
        if (state.tableData[i][cell] === t) {
          count += 1;
        } else {
          count = 0;
        }
        if (count >= 5) {
          win = true;
          break;
        }
      }
    }
    count = 0;
    const minv = row > cell ? cell : row;
    const maxv = row > cell ? row : cell;
    minrow = row - minv;
    mincell = cell - minv;
    maxrow = minrow + (9 - (maxv - minv));
    maxcell = mincell + (9 - (maxv - minv));
    count = 0;
    if (!win) {
      for (var i = 0; i < maxcell - mincell + 1; i++) {
        if (state.tableData[minrow + i][mincell + i] === t) {
          count += 1;
        } else {
          count = 0;
        }
        if (count >= 5) {
          win = true;
          break;
        }
      }
    }
    minrow = row + cell > 9 ? row - (9 - cell) : 0;
    mincell = row + cell > 9 ? 9 : row + cell;

    if (!win) {
      for (var i = 0; i < mincell - minrow + 1; i++) {
        if (state.tableData[minrow + i][mincell - i] === t) {
          count += 1;
        } else {
          count = 0;
        }
        if (count >= 5) {
          win = true;
          break;
        }
      }
    }
    if (win) {
      console.log(t, "승리");
      setWinner(t);
      dispatch({ type: RESET_GAME });
    } else {
      let all = true;
      state.tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all === true) {
        dispatch({ type: RESET_GAME });
      }
    }
  }, [state.recentCell]);

  return (
    <>
      <Table
        dispatch={dispatch}
        onClick={onClickTable}
        tableData={state.tableData}
      />
      {winner && <div>{winner}승리</div>}
      <button onClick={onClickBtn}>초기화 할까유?</button>
    </>
  );
};

export default Omok;
