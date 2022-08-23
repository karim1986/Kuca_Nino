import React from "react";
import "./sectionTwo.scss";

function SectionTwo(props) {
  return (
    <div className="sectionTwo__container">
      <div className="sectionTwo__content">
        <h1 className="sectionTwo__title">
          <span className="text__italic text--color">Das </span>Ferien-Domizil
          in der{" "}
          <span className="text__italic text--color">
            Nördlichen Adriaküste
          </span>
        </h1>
        <div className="sectionTwo--btn">
          <button className="booking__btn btn--modifier">
            Buchung Anfragen
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
