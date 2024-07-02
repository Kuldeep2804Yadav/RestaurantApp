import React from "react";
import Card from "../UI/Card/Card";
import "./Summary.css"

function Summary() {
  return (
    <Card className="summary">
      <h1>Delicious Food, Delivered To You</h1>
      <div className="summary__para">
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingridients, hust-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </Card>
  );
}

export default Summary;
