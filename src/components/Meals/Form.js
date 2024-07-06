import React, { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import "./Form.css";
import CartContext from "../store/cart-context";

function Form(props) {
  const [inputValue, setInputValue] = useState(1);

  const quantityInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    setInputValue(1);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="input">
        <label htmlFor="quantity">Amount </label>
        <input
          id="quantity"
          type="number"
          value={inputValue}
          onChange={quantityInputHandler}
        />
      </div>
      <Button title="+Add" className="button" onClick={props.onAddtoCart} />
    </form>
  );
}

export default Form;
