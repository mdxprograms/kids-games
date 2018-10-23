import React from "react";

const imgStyles = color => ({
  border: `4px solid ${color}`,
  width: "10vw"
});

const Player = ({ user }) => (
  <div>
    <h4>{user.name}</h4>

    <img style={imgStyles(user.favColor)} alt="player" src={user.image} />
  </div>
);

export default Player;
