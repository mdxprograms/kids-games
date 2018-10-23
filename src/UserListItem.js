import React from "react";

import Button from "./Button";

const styles = () => ({
  alignItems: "center",
  display: "flex",
  listStyle: "none",
  outline: 0,
  padding: 0,
  textAlign: "center"
});

const itemStyles = user => ({
  backgroundColor: user.favColor,
  fontSize: "18px"
});

const UserListItem = ({ user, selectUser }) => (
  <ul style={styles()}>
    <li style={itemStyles(user)}>
      <Button onClick={() => selectUser(user)}>{user.name}</Button>
    </li>
  </ul>
);

export default UserListItem;
