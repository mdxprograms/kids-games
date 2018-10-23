import React from "react";

import UserListItem from "./UserListItem";

const styles = () => ({
  alignItems: "center",
  display: "flex"
});

const UserList = ({ users, selectUser }) => (
  <div style={styles()}>
    {users.map(user => (
      <UserListItem key={user.name} user={user} selectUser={selectUser} />
    ))}
  </div>
);

export default UserList;
