import React from "react";
import "./MainDetails.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const MainDetails = ({ handleAddPizza }) => {
  let { state } = useLocation();
  return (
    <>
      <div className="pizza-details-img">
        <img src={state.pizza.img} />
      </div>
      <div className="pizza-details">
        <h1>{state.pizza.name}</h1>
        <p>{state.pizza.description}</p>
        <p>€ {state.pizza.price}</p>

        <div className="details-bottom">
          <Link to={"/menu"}>
            <button>Torna al menù</button>
          </Link>
          <button
            onClick={() => {
              handleAddPizza({
                id: state.pizza.id,
                name: state.pizza.name,
                price: state.pizza.price,
                quantity: 1,
              });
            }}
          >
            <span>Aggiungi al Carrello </span>
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainDetails;
