import React from "react";

import Cell from "./Cell";
import { CellRow } from "../library/types";

const Component: React.FC<{
  row: CellRow;
}> = ({ row }) => (
  <div className="row">
    {row.map((cell, index) => {
      return <Cell key={index} cell={cell} />;
    })}
  </div>
);

export default Component;
