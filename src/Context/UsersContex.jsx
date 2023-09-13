import React, { createContext, useState } from "react";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 101, username: "Sheikh Rasel" },
    { id: 0.07, username: "James Bond" },
    { id: 301, username: "Alex Khan" },
    { id: 501, username: "Mr. Jhon Kabir" },
    { id: 801, username: "Ana Adams" },
    { id: 701, username: "Sharloks Home" },
    { id: 404, username: "Mr. Boyokesh" },
    { id: 991, username: "Ms. Dyna" },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
