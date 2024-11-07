import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHome from "./mainHome/MainHome";
import MainMenu from "./mainMenu/MainMenu";
import PizzaInput from "./pizzaInput/PizzaInput";
import PizzaCart from "./cart/PizzaCart";
import "./Main.scss";
import MainDetails from "./mainDetails/MainDetails";
import MainContact from "./mainContact/MAinContact";
import { useDispatch } from "react-redux";
import { addPizza } from "../../store/slices/cartSlice";

const Main = ({ pizzas, inputValue, setInputValue }) => {
  const dispatch = useDispatch();

  const handleAddPizza = (pizza) => {
    dispatch(addPizza(pizza));
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/contatti" element={<MainContact />} />
        <Route
          path="/menu"
          element={
            <div className="main-container">
              <div className="col-left">
                <PizzaInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
                <PizzaCart />
              </div>
              <div className="col-right">
                <MainMenu
                  pizzas={pizzas}
                  inputValue={inputValue}
                  handleAddPizza={handleAddPizza}
                />
              </div>
            </div>
          }
        />
        <Route
          path="/dettagli"
          element={
            <div className="main-container">
              <div className="col-left">
                <PizzaInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
                <PizzaCart />
              </div>
              <div className="col-right">
                <MainDetails handleAddPizza={handleAddPizza} />
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default Main;
