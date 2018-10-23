import React from "react";

import Button from "../components/Button";
import ticTacToeImg from "../images/game-icons/tic-tac-toe.png";

const Home = ({ appState, changeView }) => (
  <div style={{ textAlign: "center" }} className="home">
    <h2>Choose a game to get started</h2>
    <div className="game-menu">
      <Button
        styles={{
          background: `url(${ticTacToeImg}) center/cover no-repeat`,
          height: "124px",
          width: "124px"
        }}
        onClick={() => changeView(appState.views.ticTacToe)}
      />
    </div>
  </div>
);

export default Home;
