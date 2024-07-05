import React, { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    
    setItems((prevItems) => [...prevItems, item]);
    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
  };

  const removeItemFromCartHandler = (id) => {
   
    const itemToRemove = items.find((item) => item.id === id);
    if (!itemToRemove) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalAmount((prevTotalAmount) => prevTotalAmount - itemToRemove.price);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
