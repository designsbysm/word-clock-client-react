import React from "react";

import RowComponent, { Row } from "./Row";

export type Grid = Row[];

const Grid: React.FC<{
  random: string[][];
  words: string[][];
}> = ({ random, words }) => (
  <div className="grid">
    {words.map((row, index) => {
      return <RowComponent key={index} cells={row} random={random} row={index} words={words} />;
    })}
  </div>
);

export default Grid;
