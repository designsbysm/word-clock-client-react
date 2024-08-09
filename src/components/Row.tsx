import React from "react";

import Cell from "./Cell";
import { Row } from "../library/grid";

const Component: React.FC<{
  row: Row;
}> = ({ row }) => (
  <div className="row">
    {row.map((cell, index) => {
      return <Cell key={index} cell={cell} />;
    })}
  </div>
);

export default Component;
