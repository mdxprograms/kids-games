import React from "react";

const styles = newStyles => ({
  background: "#fff",
  border: "none",
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0",
  padding: "8px 20px 4px",
  ...newStyles
});

const Button = props => (
  <button style={styles(props.styles)} {...props}>
    {props.children}
  </button>
);

export default Button;
