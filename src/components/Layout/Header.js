
import React from "react";
import Cart from "../Cart/Cart";
import "./Header.css";
import mealsImage from '../Asset/meals.jpg';

function Header(props) {
  return (
    <React.Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <Cart openCartHandler={props.openCart}/>
      </header>
      <div className="image-wrapper">
        <img src={mealsImage} className="image" alt="Meals" /> 
      </div>
    </React.Fragment>
  );
}

export default Header;
