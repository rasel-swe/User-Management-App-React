import React from "react";

import { useUserContext } from "../hooks/useUsersContex";

const User = ({ user }) => {
  const { users, setUsers } = useUserContext();

  const { id, username } = user;

  const handleDelete = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  return (
    <article className="User">
      <h1>Name: {username}</h1>
      <p>ID: {id}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
