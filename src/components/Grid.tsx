import React from "react";
import styled from "styled-components";

import Row from "./Row";
import { CellGrid, NUMBER_OF_ROWS } from "../library/types";

const Grid = styled.div({
  display: "grid",
  fontSize: "5vmin",
  gridTemplateRows: `repeat(${NUMBER_OF_ROWS}, 1fr)`,
  height: "90vmin",
  margin: "5vmin",
  width: "90vmin",
});

const Component: React.FC<{
  grid: CellGrid;
}> = ({ grid }) => (
  <Grid>
    {grid.map((row, index) => {
      return <Row key={index} row={row} />;
    })}
  </Grid>
);

export default Component;
