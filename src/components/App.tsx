import React, { useEffect } from "react";

import GridComponent from "./Grid";
import {
  addFallbacks,
  applyWordListToGrid,
  getWordsList,
  Grid,
  makeGrid,
  NUMBER_OF_CELLS,
  NUMBER_OF_ROWS,
} from "../library/grid";

const Component = () => {
  const [grid, setGrid] = React.useState<Grid>(() => {
    const newGrid = makeGrid(NUMBER_OF_CELLS, NUMBER_OF_ROWS);
    return addFallbacks(newGrid);
  });
  const [now, setNow] = React.useState<Date>(new Date());

  useEffect(() => {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const words = getWordsList(hours, minutes);

    setGrid(grid => applyWordListToGrid(grid, words));
  }, [now]);

  useEffect(() => {
    setInterval(() => setNow(new Date()), 60000);
  }, []);

  return (
    <div className="app">
      <GridComponent grid={grid} />
    </div>
  );
};

export default Component;
