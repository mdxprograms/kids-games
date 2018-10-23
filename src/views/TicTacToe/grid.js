import React from "react";

import { gridStyle } from "./styles";

const Grid = props => {
  return (
    <div style={gridStyle} className="tictactoe-grid">
      {props.children}
    </div>
  );
};

export default Grid;
