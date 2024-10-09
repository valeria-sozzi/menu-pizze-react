import React from "react";
import "./InputForm.scss";

const InputForm = ({ pizzaValue, setPizzaValue }) => {
  return (
    <input
      value={pizzaValue}
      placeholder="Cerca Pizza"
      onChange={(e) => setPizzaValue(e.target.value)}
    />
  );
};

export default InputForm;
