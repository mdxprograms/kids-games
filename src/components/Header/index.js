import React from "react";

import Player from "../Player";

import { styles, navStyles, playersBlockStyles } from "./styles";

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
