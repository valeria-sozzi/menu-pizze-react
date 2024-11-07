/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./PizzaCart.scss";
import { useSelector } from "react-redux";

const PizzaCart = () => {
  const pizzasCart = useSelector((state) => state.cart.pizzasCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [pizzaCarts, setPizzaCarts] = useState([]);

  useEffect(() => {
    pizzasCart.map((cartElement) => {
      if (pizzaCarts.some((pizza) => pizza.id === cartElement.id)) {
        const newPizzaCarts = pizzaCarts.map((pizzaCart) => {
          if (pizzaCart.id === cartElement.id) {
            return {
              ...pizzaCart,
              totalPrice: pizzaCart.totalPrice + pizzaCart.price,
              quantity: pizzaCart.quantity + 1,
            };
          } else {
            return pizzaCart;
          }
        });
        setPizzaCarts(newPizzaCarts);
      } else {
        setPizzaCarts((prev) => [
          ...prev,
          { ...cartElement, totalPrice: cartElement.price },
        ]);
      }
    });
  }, [pizzasCart]);

  return (
    <div className="cart-container">
      <h1>Carrello</h1>
      <div className="cart-body">
        <div className="cart-content">
          {pizzaCarts.map((pizzaCart) => (
            <div key={pizzaCart.id} className="cart-element">
              <h2 className="cart-pizza-name">{pizzaCart.name}</h2>
              <p>{pizzaCart.quantity}</p>
              <p> € {pizzaCart.totalPrice.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="cart-end">
          <div className="hr" />
          <div className="cart-total">
            <h2>Totale</h2>
            <h2>€ {totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCart;
