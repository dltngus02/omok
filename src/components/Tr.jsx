import React, { useEffect, useReducer, useCallback } from "react";
import Td from "./Td";
const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
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
