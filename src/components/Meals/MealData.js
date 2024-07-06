import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Form from './Form';
import "./MealData.css";


function MealData(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <div className="meals">
      <div>
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
        <div className="price">${props.price.toFixed(2)}</div>
      </div>
      <Form onAddtoCart={addToCartHandler}/>
      
    </div>
  );
}

export default MealData;