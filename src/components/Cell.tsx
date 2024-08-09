import React from "react";
import styled from "styled-components";

import { Cell } from "../library/types";

const Fallback = styled.div({
  color: "#333",
});

const Active = styled.div({
  color: "#fff",
});

const Component: React.FC<{
  cell: Cell;
}> = ({ cell }) =>
  cell.character ? <Active>{cell.character}</Active> : <Fallback>{cell.fallback}</Fallback>;

export default Component;
