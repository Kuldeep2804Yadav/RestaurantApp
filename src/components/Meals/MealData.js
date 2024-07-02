import React from "react";
import './MealData.css'

function MealData(props) {
  
  return (
        <li className="meals">
            <h2 className="name">{props.name}</h2>
            <p>{props.description}</p>
            <h2 className="price">${props.price}</h2>
        </li>
  )
}

export default MealData;
