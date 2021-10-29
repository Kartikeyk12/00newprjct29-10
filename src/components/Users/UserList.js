import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul key="id">
        {props.users.map((user) => (
          <li key="id">
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
