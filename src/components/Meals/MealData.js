import React from "react";
import "./MealData.css";
import Form from "./Form";

function MealData(props) {
  return (
    <li className="meals">
      <div >
        <h2 className="name">{props.name}</h2>
        <p>{props.description}</p>
        <h2 className="price">${props.price}</h2>
      </div>
      <Form />
    </li>
  );
}

export default MealData;
