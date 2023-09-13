import React from "react";
import User from "./User";

import { useUserContext } from "../hooks/useUsersContex";

const Users = () => {
  const { users } = useUserContext();
  return (
    <section className="Users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
