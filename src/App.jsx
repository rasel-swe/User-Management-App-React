import React from "react";
import Users from "./Components/Users";
import NewUser from "./Components/NewUser";
import UsersProvider from "./Context/UsersContex";

function App() {
  return (
    <UsersProvider>
      <div className="App">
        <NewUser />
        <Users />
      </div>
    </UsersProvider>
  );
}

export default App;
