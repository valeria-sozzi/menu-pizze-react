import React from "react";
import "./MainContact.scss";

const MainContact = () => {
  return (
    <div className="mainContact-container">
      <div className="image">
        <img src="https://img.freepik.com/premium-photo/pizza-margherita-dark-wooden-background-top-view_709963-1145.jpg" />
      </div>
      <div className="mainContact-text">
        <h1>Veniteci a trovare</h1>
        <div>
          <a href="#">Clicca qui </a>
          per conoscere la nostra posizione
        </div>
        <p>
          Oppure contattaci al nostro numero <br /> 337-1746325
        </p>
      </div>
    </div>
  );
};

export default MainContact;
