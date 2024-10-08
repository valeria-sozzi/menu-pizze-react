import React from "react";
import PizzaCard from "./pizzaCard/PizzaCard";
import "./Main.scss";

const Main = ({ pizzas }) => {
  return (
    <main className="card-container">
      <div className="menu-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
