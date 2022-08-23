import React from "react";
import foto from "../../assets/images/foto3.jpg";
import "./sectionThree.scss";

function SectionThree(props) {
  return (
    <div className="sectionThree__container">
      <div className="sectionThree__content">
        <div className="sectionThree__text">
          <p className="desc__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            aliquam ut harum vel! Deleniti consectetur ipsam cupiditate tempore
            impedit architecto. Veniam, illo facilis saepe molestiae amet
            nesciunt officiis fuga, consequuntur adipisci voluptas quidem
            dolore. Corporis iste accusantium quasi optio. Quasi ratione veniam
            architecto officiis. Dolore pariatur consectetur blanditiis et hic?
          </p>
        </div>
        <div className="sectionThree__image">
          <img src={foto} alt="picture of a window" />
          <h1>Stil</h1>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
