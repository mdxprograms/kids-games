import React from "react";

import Button from "./Button";

const styles = () => ({
  margin: "30px auto",
  textAlign: "center",
  width: "50%"
});

const Header = ({ appState, changeView }) => (
  <header style={styles()}>
    <nav>
      <Button
        styles={{ background: "silver" }}
        onClick={() => changeView(appState.views.home)}
      >
        Home
      </Button>
      <Button
        styles={{ background: "lightblue" }}
        onClick={() => changeView(appState.views.ticTacToe)}
      >
        Tic Tac Toe
      </Button>
    </nav>
  </header>
);

export default Header;
