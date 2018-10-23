import React from "react";

import Styles from "./styles";

const Grid = props => {
  return (
    <div style={Styles.gridStyle} className="tictactoe-grid">
      {props.children}
    </div>
  );
};

export default Grid;
