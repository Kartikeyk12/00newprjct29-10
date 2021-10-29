import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterUser, setUser] = useState("");
  const [enterAge, setAge] = useState("");
  const [error, setError] = useState("");

  const UserInputHandler = (event) => {
    setUser(event.target.value);
  };

  const AgeInputHandler = (event) => {
    setAge(event.target.value);
  };

  const UserHandler = (event) => {
    event.preventDefault();
    if (enterUser.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Error",
        message: "OOPS! Please Fill Correctly",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "Invalid Age",
        message: "OOPS! Please Fill Correct Age",
      });
    }
    props.onAddUser(enterUser, enterAge);
    setUser("");
    setAge("");
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOk={ErrorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={UserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enterUser}
            onChange={UserInputHandler}
          ></input>
          <label htmlFor="age">User's Age</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={AgeInputHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
