import React from "react";
import PizzaCard from "../pizzaCard/PizzaCard";

const MenuPizza = ({ pizzas, pizzaValue, setCartElements, cartElements }) => {
  return (
    <div className="menu-container">
      {pizzas.map(
        (pizza) =>
          pizza.name.toLowerCase().includes(pizzaValue) && (
            <div key={pizza.id}>
              <PizzaCard
                pizza={pizza}
                setCartElements={setCartElements}
                cartElements={cartElements}
              />
            </div>
          )
      )}
    </div>
  );
};

export default MenuPizza;
