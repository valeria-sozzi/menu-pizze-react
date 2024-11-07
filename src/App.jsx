import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const pizzas = useSelector((state) => state.pizzas.value);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header />
      <Main
        pizzas={pizzas}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Footer />
    </>
  );
}

export default App;
