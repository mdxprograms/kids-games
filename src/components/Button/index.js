import React from "react";

import { styles } from "./styles";

const Button = props => (
  <button style={styles(props.styles)} {...props}>
    {props.children}
  </button>
);

export default Button;
