import React from "react";

import Row from "./Row";
import { CellGrid } from "../library/types";

const Component: React.FC<{
  grid: CellGrid;
}> = ({ grid }) => (
  <div className="grid">
    {grid.map((row, index) => {
      return <Row key={index} row={row} />;
    })}
  </div>
);

export default Component;
