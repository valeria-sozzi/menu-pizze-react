import React from "react";
import "./Carrello.scss";

const Carrello = ({ cartElements }) => {
  let sum = cartElements.reduce((total, el) => total + el.price, 0);
  return (
    <div className="card-cart">
      <h1>Carrello</h1>
      <div className="cart-body">
        <div>
          {cartElements.map((cartElement) => (
            <div key={cartElement.id} className="cartElement">
              <div className="cart-pizza-name">{cartElement.name}</div>
              <div className="cart-pizza-price">€ {cartElement.price}</div>
            </div>
          ))}
        </div>
        <div className="end-cart">
          <div className="hr"></div>
          <div className="tot">
            <span>Totale</span>
            <span>€ {sum}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrello;
