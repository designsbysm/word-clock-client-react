import React from "react";

export interface Cell {
  fallback: string;
  character: string;
}

const Cell: React.FC<{
  cell: number;
  random: string[][];
  row: number;
  words: string[][];
}> = ({ cell, random, row, words }) => {
  const char = words[row][cell];
  const rand = random[row][cell];

  return <div className={char ? "cell active" : "cell"}>{char || rand}</div>;
};

export default Cell;
