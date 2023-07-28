import React, { useEffect, useReducer, useCallback } from "react";
import Td from "./Td";
import "./Tr.css";
const Tr = ({ rowData, rowIndex, dispatch, tableTurn }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            tableTurn={tableTurn}
            cellData={rowData[i]}
            dispatch={dispatch}
            key={i}
            rowIndex={rowIndex}
            cellIndex={i}
          />
        ))}
    </tr>
  );
};

export default Tr;
