import React from "react";
import PizzaCard from "../pizzaCard/PizzaCard";

const MenuPizza = ({ pizzas, pizzaValue }) => {
  return (
    <div className="menu-container">
      {pizzas.map(
        (pizza) =>
          pizza.name.toLowerCase().includes(pizzaValue) && (
            <div key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </div>
          )
      )}
    </div>
  );
};

export default MenuPizza;
