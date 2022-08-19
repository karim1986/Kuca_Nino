import React from "react";
import foto from "../../assets/images/banner.jpg";
import "./welcomePage.scss";

function WelcomePage() {
  return (
    <div className="welcomePage__container">
      <div className="welcomePage__container--section">
        <div className="welcomePage__text--block">
          <h3>
            Lošinj -<span className="text__position"> Kroatien</span>
          </h3>
          <h1>
            <span className="text__italic">Wilkommen</span> im Kuca-Nino
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
