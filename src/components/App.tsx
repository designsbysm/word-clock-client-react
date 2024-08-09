import React, { useEffect } from "react";

import Grid from "./Grid";
import { addFallbacks, applyWordListToGrid, getWordsList, makeGrid } from "../library/grid";
import { CellGrid, NUMBER_OF_CELLS, NUMBER_OF_ROWS } from "../library/types";

const Component = () => {
  const [grid, setGrid] = React.useState<CellGrid>(() => {
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
    const intervalId = setInterval(() => setNow(new Date()), 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app">
      <Grid grid={grid} />
    </div>
  );
};

export default Component;
