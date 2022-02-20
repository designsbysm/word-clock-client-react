import React from "react";

const Cell = ({ cell, random, row, words }) => {
  const char = words[row][cell];
  const rand = random[row][cell];

  return (
    <div className={char ? "cell active" : "cell"}>{char || rand}</div>
  );
};

export default Cell;
