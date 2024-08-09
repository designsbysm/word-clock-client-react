import React from "react";
import styled from "styled-components";

import Cell from "./Cell";
import { CellRow, NUMBER_OF_CELLS } from "../library/types";

const Row = styled.div({
  alignContent: "center",
  alignItems: "stretch",
  display: "grid",
  gridColumn: "auto / auto",
  gridTemplateColumns: `repeat(${NUMBER_OF_CELLS}, 1fr)`,
});

const Component: React.FC<{
  row: CellRow;
}> = ({ row }) => (
  <Row>
    {row.map((cell, index) => {
      return <Cell key={index} cell={cell} />;
    })}
  </Row>
);

export default Component;
