import React from "react";

import { imgStyles } from "./styles";

const Player = ({ user }) => (
  <div>
    <h4>{user.name}</h4>

    <img style={imgStyles(user.favColor)} alt="player" src={user.image} />
  </div>
);

export default Player;
