import React from "react";

import Model from "./model";
import Styles from "./styles";

const { playerOne, playerTwo } = Model.players;

const GridItem = ({ hasTurn, setMarker, marker }) => {
  let colors = { X: playerOne.color, O: playerTwo.color };

  return (
    <div
      onClick={() => setMarker(marker.index, hasTurn)}
      style={Styles.gridBoxStyle(colors[marker.value])}
    >
      {marker.value}
    </div>
  );
};

export default GridItem;
