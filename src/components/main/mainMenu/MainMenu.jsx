import React from "react";
import "./MainMenu.scss";
import PizzaCard from "./pizzaCard/PizzaCard";

const MainMenu = ({ pizzas, inputValue, handleAddPizza }) => {
  return (
    <div className="container-menu">
      {pizzas.map(
        (pizza) =>
          pizza.name.toLowerCase().includes(inputValue) && (
            <div key={pizza.id}>
              <PizzaCard pizza={pizza} handleAddPizza={handleAddPizza} />
            </div>
          )
      )}
    </div>
  );
};

export default MainMenu;
