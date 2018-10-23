const players = {
  playerOne: {
    name: "Leo",
    color: "orange",
    marker: "X"
  },
  playerTwo: {
    name: "Zoe",
    color: "pink",
    marker: "O"
  }
};

export default {
  grid: ["", "", "", "", "", "", "", "", ""],
  hasTurn: players.playerOne.marker,
  players,
  turnNumber: 1,
  winner: ""
};
