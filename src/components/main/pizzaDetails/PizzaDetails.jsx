import React from "react";
import "./PizzaDetails.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PizzaDetails = ({ setCartElements, cartElements }) => {
  let { state } = useLocation();

  return (
    <div className="menu-container">
      <div className="image col">
        <img src={state.pizza.img} />
      </div>
      <div className="details col">
        <h2>{state.pizza.name}</h2>
        <p>{state.pizza.description}</p>
        <p>€ {state.pizza.price}</p>

        <div className="info">
          <button
            onClick={() => {
              const addPizza = {
                name: state.pizza.name,
                price: state.pizza.price,
                id: state.pizza.id,
              };
              const newCart = [...cartElements, addPizza];
              setCartElements(newCart);
            }}
            className="link"
          >
            <FontAwesomeIcon icon={faCartShopping} className="cart-logo" />
            Aggiungi al carrello
          </button>
          <Link to={"/"} className="link">
            Torna al Menù
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
