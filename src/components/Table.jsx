import React, { useEffect, useReducer, useCallback } from "react";
import Tr from "./Tr";
import "./Table.css";
const Table = ({ tableData, dispatch, tableTurn }) => {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr
            tableTurn={tableTurn}
            key={i}
            dispatch={dispatch}
            rowIndex={i}
            rowData={tableData[i]}
          />
        ))}
    </table>
  );
};

export default Table;
