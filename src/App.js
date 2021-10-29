import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setusersList] = useState([]);

  const UserHandler = (Name, Age) => {
    setusersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: Name, age: Age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={UserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
