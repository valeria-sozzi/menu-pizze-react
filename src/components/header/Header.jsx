import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/015/724/041/non_2x/pizza-hand-drawn-sketch-style-free-png.png" />
      </div>
      <div className="header-body">
        <nav className="navbar">
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/menu"} className="link">
            Menu Pizze
          </Link>
          <Link to={"/contatti"} className="link">
            Contatti
          </Link>
        </nav>
        <h1>Pizzeria da BoB</h1>
      </div>
      <div className="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/015/724/041/non_2x/pizza-hand-drawn-sketch-style-free-png.png" />
      </div>
    </header>
  );
};

export default Header;
