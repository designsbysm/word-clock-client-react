import React from "react";

import Row from "./Row";
import { Grid } from "../library/grid";

const Component: React.FC<{
  grid: Grid;
}> = ({ grid }) => (
  <div className="grid">
    {grid.map((row, index) => {
      return <Row key={index} row={row} />;
    })}
  </div>
);

export default Component;
