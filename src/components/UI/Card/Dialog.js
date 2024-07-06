import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";
import Button from "../Button/Button";
import Card from "./Card";
import CartContext from "../../store/cart-context";

const Overlay = () => {
  return <div className="overlay"></div>;
};

const DialogRoot = (props) => {
  

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
 
  const increaseAmountHandler=(id)=>{
    cartCtx.increaseItemAmount(id)
  }
  const decreaseAmountHandler=(id)=>{
    cartCtx.decreaseItemAmount(id)
  }


  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
        {}
          <div className="Item__Details">
            <h3>{item.name}</h3>
            <div>
              <span className="price">{item.price}</span>
              <span className="amount">x {item.amount}</span>
            </div>
          </div>
          <div className="Add_Remove_item">
            <Button
              title=" -"
              className="minus"
              onClick={()=>decreaseAmountHandler(item.id)}
            ></Button>
            <Button title="+" onClick={()=>increaseAmountHandler(item.id)}></Button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Card className="dialog">
      <div>{cartItems}</div>
      <div className="dialog__info">
        <p>Total Amount</p>
        <span>${totalAmount}</span>
      </div>
      <div className="dialog__buttons">
        <Button
          title="Close"
          onClick={props.closeCart}
          className="closeButton"
        />
        <Button title="Order" onClick={props.orderHandler}  />
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
        <DialogRoot
          closeCart={props.closeCart}
          orderHandler={props.orderHandler}
        />,
        document.getElementById("dialog-root")
      )}
    </React.Fragment>
  );
};

export default Dialog;
