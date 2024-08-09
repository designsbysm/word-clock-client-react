import React from "react";

import { Cell } from "../library/types";

const Component: React.FC<{
  cell: Cell;
}> = ({ cell }) => (
  <div className={cell.character ? "cell active" : "cell"}>{cell.character || cell.fallback}</div>
);

export default Component;
