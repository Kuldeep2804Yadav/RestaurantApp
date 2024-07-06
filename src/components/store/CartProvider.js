import React, { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }

      return updatedItems;
    });

    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.amount * item.price);
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = prevItems.filter((i) => i.id !== id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }

      setTotalAmount((prevTotalAmount) => prevTotalAmount - existingItem.price);
      return updatedItems;
    });
  };

  const increaseItemAmount= (id) =>{
    const item = items.find((item)=>item.id===id)
    addItemToCartHandler({...item,amount:1})
  }

  const  decreaseItemAmount= (id) =>{
    const item = items.find((item)=>item.id===id)
    removeItemFromCartHandler(id)
  }

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    increaseItemAmount:increaseItemAmount,
    decreaseItemAmount:decreaseItemAmount
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
