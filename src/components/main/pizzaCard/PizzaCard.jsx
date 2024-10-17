import React from "react";
import "./PizzaCard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PizzaCard = ({ pizza, setCartElements, cartElements }) => {
  return (
    <div className="card-pizza">
      <div className="image">
        <img src={pizza.img} />
      </div>
      <div className="details-pizza">
        <h2>{pizza.name}</h2>
        <p>€ {pizza.price}</p>
        <div className="info-pizza">
          <Link to={"/dettagli"} state={{ pizza: pizza }} className="link">
            Dettagli
          </Link>
          <button
            onClick={() => {
              const addPizza = {
                name: pizza.name,
                price: pizza.price,
                id: pizza.id,
              };
              const newCart = [...cartElements, addPizza];
              setCartElements(newCart);
            }}
            className="link"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
