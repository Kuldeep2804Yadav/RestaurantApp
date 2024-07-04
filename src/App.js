import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meal from "./components/Meals/Meal";
import Dialog from "./components/UI/Card/Dialog";
function App() {
  const [isopen, setIsOpen] = useState(false);
  const openCartHandler = () => {
    setIsOpen(true);
  };

  const closeCartHandler = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Header openCart={openCartHandler} />
      {isopen && <Dialog closeCart={closeCartHandler} />}
      <Summary />
      <Meal />
    </div>
  );
}

export default App;
