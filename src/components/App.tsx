import React, { useEffect } from "react";

import Grid from "./Grid";
import { getRandomGrid, getWordGrid } from "../library/grid";

const App = () => {
  const [wordGrid, setWordGrid] = React.useState(getWordGrid());
  const [randomGrid] = React.useState(getRandomGrid());
  const [refresh, setRefresh] = React.useState(true);

  useEffect(() => {
    if (!refresh) {
      return;
    }

    setInterval(() => setWordGrid(getWordGrid()), 3000);

    setRefresh(false);
  }, [refresh, setRefresh]);

  return (
    <div className="app">
      <Grid random={randomGrid} words={wordGrid} />
    </div>
  );
};

export default App;
