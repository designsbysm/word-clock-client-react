import React from "react";

import CellComponent, { Cell } from "./Cell";

export type Row = Cell[];

const Row: React.FC<{
  cells: string[];
  random: string[][];
  row: number;
  words: string[][];
}> = ({ cells, row, random, words }) => (
  <div className="row">
    {cells.map((_, index) => {
      return <CellComponent key={index} cell={index} random={random} row={row} words={words} />;
    })}
  </div>
);

export default Row;
