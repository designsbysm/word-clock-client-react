import React from "react";

import Cell from "./Cell";

const Row: React.FC<{
  cells: string[];
  random: string[][];
  row: number;
  words: string[][];
}> = ({ cells, row, random, words }) => {
  return (
    <div className="row">
      {cells.map((_, index) => {
        return <Cell key={index} cell={index} random={random} row={row} words={words} />;
      })}
    </div>
  );
};

export default Row;
