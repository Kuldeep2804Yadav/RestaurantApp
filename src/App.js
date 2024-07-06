import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meal from "./components/Meals/Meal";
import Dialog from "./components/UI/Card/Dialog";
import CartProvider from "./components/store/CartProvider";
function App() {
  const [isopen, setIsOpen] = useState(false);
  const openCartHandler = () => {
    setIsOpen(true);
  };

  const closeCartHandler = () => {
    setIsOpen(false);
  };
  return (
    <CartProvider>
      <Header openCart={openCartHandler} />
      {isopen && <Dialog closeCart={closeCartHandler} />}
      <Summary />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;