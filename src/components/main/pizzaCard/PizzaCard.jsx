import React from "react";
import "./PizzaCard.scss";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={pizza.img} />
      </div>
      <h3>{pizza.name}</h3>
      <p>€ {pizza.price}</p>
      <button>Dettagli</button>
    </div>
  );
};

export default PizzaCard;
