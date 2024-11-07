import React from "react";
import "./PizzaCard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PizzaCard = ({ pizza, handleAddPizza }) => {
  return (
    <div className="pizza-card">
      <div className="pizza-img">
        <img src={pizza.img} />
      </div>
      <h2>{pizza.name}</h2>
      <p>€ {pizza.price}</p>
      <div className="card-bottom">
        <Link to={"/dettagli"} state={{ pizza: pizza }}>
          <button>Dettagli Pizza</button>
        </Link>
        <button
          onClick={() => {
            handleAddPizza({
              id: pizza.id,
              name: pizza.name,
              price: pizza.price,
              quantity: 1,
            });
          }}
        >
          <span>Carrello </span>
          <FontAwesomeIcon icon={faCartShopping} className="cart" />
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
