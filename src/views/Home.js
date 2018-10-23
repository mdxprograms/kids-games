import React from "react";

import Button from "../Button";

const Home = ({ appState, changeView }) => (
  <div style={{ textAlign: "center" }} className="home">
    <h2>Choose a game to get started</h2>
    <div className="game-menu">
      <Button
        styles={{ background: "lightblue" }}
        onClick={() => changeView(appState.views.ticTacToe)}
      >
        Tic Tac Toe
      </Button>
    </div>
  </div>
);

export default Home;
