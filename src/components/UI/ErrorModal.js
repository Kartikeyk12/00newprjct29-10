import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
      <div>
      <div className={classes.backdrop} onClick={props.onOk} />
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onOk}>OK</button>
        </footer>
      </header>
    </Card>
    </div>
  );
};

export default ErrorModal;
