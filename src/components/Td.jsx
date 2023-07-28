import React, { useEffect, useReducer, useCallback } from "react";
import "./Td.css";
import { CLICK_CELL, CHANGE_TURN } from "./Omok";
const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = () => {
    {
      if (cellData) {
        return;
      }
      dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
      dispatch({ type: CHANGE_TURN });
    }
  };
  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
