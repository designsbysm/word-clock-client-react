import Cell from "./cell";
import React from "react";
import ReactDOM from "react-dom";

const Row = ({ cells, row, random, words }) => {
  return (
    <div className="row">
      {cells.map((cell, index) => {
        return <Cell key={index} cell={index} random={random} row={row} words={words} />;
      })}
    </div>
  );
};

export default Row;
