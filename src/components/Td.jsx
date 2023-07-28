import React, { useEffect, useReducer, useCallback } from "react";
import "./Td.css";
import { CLICK_CELL, CHANGE_TURN } from "./Omok";
const Td = ({ rowIndex, cellIndex, dispatch, cellData, tableTurn }) => {
  const onClickTd = () => {
    {
      if (cellData) {
        return;
      }
      dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
      dispatch({ type: CHANGE_TURN });
    }
    console.log(tableTurn);
  };
  return (
    <td id="omokBoard" onClick={onClickTd}>
      {cellData == "O" ? <div id="turno"></div> : ""}
      {cellData == "X" ? <div id="turnx"></div> : ""}
    </td>
  );
};

export default Td;
