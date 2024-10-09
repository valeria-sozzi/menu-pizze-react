import React from "react";
import "./PizzaCard.scss";
import { Link } from "react-router-dom";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={pizza.img} />
      </div>
      <h2>{pizza.name}</h2>
      <p>€ {pizza.price}</p>
      <Link to={"/dettagli"} state={{ pizza: pizza }} className="link">
        Dettagli
      </Link>
    </div>
  );
};

export default PizzaCard;
