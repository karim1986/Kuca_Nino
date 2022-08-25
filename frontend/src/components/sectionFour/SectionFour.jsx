import React from "react";
import "./sectionFour.scss";

function SectionFour(props) {
  return (
    <div className="sectionFour__container">
      <div className="sectionFour__content">
        <div className="sectionFour__text">
          <h1>
            Das Haus bietet Platz für{" "}
            <span className="text__italic">insgesamt 5 Gäste</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
