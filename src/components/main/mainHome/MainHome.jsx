import React from "react";
import "./MainHome.scss";

const MainHome = () => {
  return (
    <div className="mainHome-container">
      <div className="image">
        <img src="https://img.freepik.com/premium-photo/pizza-margherita-dark-wooden-background-top-view_709963-1145.jpg" />
      </div>
      <div className="mainHome-text">
        <p>Per i veri Pizza Lovers</p>
        <h1>Pizzeria da BoB</h1>
        <p>
          La miglior pizza <br /> che tu abbia mai mangiato
        </p>
      </div>
    </div>
  );
};

export default MainHome;
