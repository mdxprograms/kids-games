import React from "react";

import Button from "./Button";

const styles = () => ({
  margin: "30px auto",
  textAlign: "center",
  width: "50%"
});

const navStyles = () => ({
  display: "flex",
  justifyContent: "center"
});

const navItemStyles = () => ({
  margin: "5px"
});

const Header = ({ appState, changeView }) => (
  <header style={styles()}>
    <nav style={navStyles()}>
      <Button
        styles={{ background: "silver" }}
        onClick={() => changeView(appState.views.home)}
      >
        Go Back
      </Button>
    </nav>
  </header>
);

export default Header;
