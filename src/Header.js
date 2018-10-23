import React from "react";

import Player from "./components/Player";

const styles = () => ({
  margin: "30px auto",
  textAlign: "center",
  width: "50%"
});

const navStyles = () => ({
  display: "flex",
  justifyContent: "center"
});

const playersBlockStyles = () => ({
  position: "absolute",
  margin: "0 auto",
  right: "2vw",
  top: "15vh"
});

const Header = ({ appState, changeView }) => (
  <header style={styles()}>
    <nav style={navStyles()}>
      <div style={playersBlockStyles()}>
        {appState.users.map(user => (
          <Player key={user.name} user={user} />
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
