import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import lage from "../../assets/images/lage.jpg";
import "./sectionOne.scss";

function SectionOne(props) {
  return (
    <div className="sectionOne__container">
      <div className="sectionOne__content">
        <div className="sectionOne__image">
          <img src={lage} alt="lage" />
          <h1>Lage</h1>
        </div>
        <div className="secionOne__desc__text">
          <p className="desc__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            vitae nihil ipsum deleniti expedita, quibusdam suscipit.
            Necessitatibus laboriosam omnis excepturi maiores eligendi, nesciunt
            ullam? Culpa enim, animi sit qui ipsam adipisci omnis labore error
            doloremque iusto quod amet nemo saepe nam nesciunt possimus, placeat
            nobis fugiat corrupti blanditiis iure consectetur doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
