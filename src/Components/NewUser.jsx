import React, { useState } from "react";

import { useUserContext } from "../hooks/useUsersContex";

const NewUser = () => {
  
  const {setUsers } = useUserContext();
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    setUsername("");
  };

  const handleNewUser = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="NewUser">
      <div className="div">
        <div className="div-1">
          <i className="fa-solid fa-bars"></i>
          <h1>User Management</h1>
        </div>
        <div className="div-2">
          <i className="fa-solid fa-user"></i>
          <p> Sheikh Rasel</p>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter user name"
          type="text"
          value={username}
          onChange={handleNewUser}
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
