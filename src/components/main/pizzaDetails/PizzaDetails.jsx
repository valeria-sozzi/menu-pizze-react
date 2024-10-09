import React from "react";
import "./PizzaDetails.scss";
import { Link, useLocation } from "react-router-dom";

const PizzaDetails = () => {
  let { state } = useLocation();

  return (
    <div className="menu-container">
      <div className="image col">
        <img src={state.pizza.img} />
      </div>
      <div className="details col">
        <h2>{state.pizza.name}</h2>
        <p>{state.pizza.description}</p>
        <Link to={"/"} className="link">
          Torna al Menù
        </Link>
      </div>
    </div>
  );
};

export default PizzaDetails;
