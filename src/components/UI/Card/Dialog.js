import React from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";
import Button from "../Button/Button";
import Card from "./Card";

const Overlay = () => {
  return <div className="overlay"></div>;
};

const DialogRoot = (props) => {
  return (
    <Card className="dialog">
      <p>Sushi</p>
      <div className="Dialog__info">
        <p>Total Amount</p>
        <span>35.62</span>
      </div>
      <div className="dialog__Button">
        <Button title="Close" onClick={props.closeCart} className="closeButton"></Button>
        <Button title="Order"></Button>
      </div>
    </Card>
  );
};

const Dialog = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <DialogRoot closeCart={props.closeCart}/>,
        document.getElementById("dialog-root")
      )}
    </React.Fragment>
  );
};

export default Dialog;
