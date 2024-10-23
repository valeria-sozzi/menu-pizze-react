/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Carrello.scss";

const Carrello = ({ cartElements }) => {
  //creare un nuovo state dove appoggiarsi per il nuovo array
  const [cartPizzas, setCartPizzas] = useState([]);
  //creare la variabile di appoggio per la somma totale
  let sum = cartPizzas.reduce((total, el) => total + el?.totalPrice, 0);

  //creare uno useeffect per ciclare ogni volta cambia cartElements
  useEffect(() => {
    //creare il ciclo
    cartElements.map((cartElement) => {
      //se c'è già una pizza con lo stesso id nel carrello
      if (cartPizzas.some((pizza) => cartElement.id === pizza.id)) {
        //allora creo un nuovo array dove ciclare il nuovo array di appoggio
        const newCartPizzas = cartPizzas.map((cartPizza) => {
          //se c'è già la pizza con lo stesso id
          if (cartPizza.id === cartElement.id) {
            //trovata la pizza la ritorno con il prezzo totale aggiornato e la quantità
            return {
              ...cartPizza,
              totalPrice: cartPizza.totalPrice + cartPizza.price,
              quantity: cartPizza.quantity + 1,
            };
          } //altrimenti ritorno la pizza così com'è
          else {
            return cartPizza;
          }
        });
        //setto il nuovo array di appoggio con la nuova array create
        setCartPizzas(newCartPizzas);
      } //altrimenti se non c'è la pizza con lo stesso id
      else {
        //setto per aggiungere una nuova pizza aggiungendo all'oggetto il prezzo totale e la quantià
        setCartPizzas((prev) => [
          ...prev,
          { ...cartElement, totalPrice: cartElement.price, quantity: 1 },
        ]);
      }
    });
  }, [cartElements]);

  return (
    <div className="card-cart">
      <h1>Carrello</h1>
      <div className="cart-body">
        <div>
          {cartPizzas.map((cartPizza) => (
            <div key={cartPizza.id} className="cartElement">
              <div className="cart-pizza-name">{cartPizza.name}</div>
              <div>{cartPizza.quantity}</div>
              <div className="cart-pizza-price">
                € {cartPizza.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="end-cart">
          <div className="hr"></div>
          <div className="tot">
            <span>Totale</span>
            <span>€ {sum?.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrello;
