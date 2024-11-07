import React from "react";
import "./PizzaInput.scss";

const PizzaInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      value={inputValue}
      placeholder="Ricerca Pizza per nome..."
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default PizzaInput;
