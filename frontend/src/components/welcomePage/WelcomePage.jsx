import React, { useState } from "react";
import { motion } from "framer-motion";
import { titleAnima, wilcomeAnim } from "../../framerMotion";
import NavBar from "../navBar/NavBar";
import "./welcomePage.scss";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import Footer from "../footer/Footer";
import SectionThree from "../sectionThree/SectionThree";

function WelcomePage() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="welcomePage__container welcomePage--bg">
        <div className="welcomePage__container--section">
          <NavBar toggle={toggle} onToggle={setToggle} />
          <div className="welcomePage__text--block">
            <motion.h3
              variants={titleAnima}
              initial={titleAnima.hidden}
              animate={titleAnima.show}
            >
              Lošinj -<span className="text__position"> Kroatien</span>
            </motion.h3>
            <motion.h1
              variants={wilcomeAnim}
              initial={wilcomeAnim.hidden}
              animate={wilcomeAnim.show}
            >
              <span className="text__italic">Willkommen</span> im Kuca-Nino
            </motion.h1>
          </div>
        </div>
      </div>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

export default WelcomePage;
