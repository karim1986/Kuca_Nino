import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Footer from "../footer/Footer";
import "./navBar.scss";

const variants = {
  open: { opacity: 0, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  return (
    <header className="header header-bg">
      <nav className="nav collapsible">
        <div className="nav-logo">
          <a href="/">
            <img src="" alt="" />
            KuCa NiNo
          </a>
        </div>
        <div className="nav-menu-items">
          <ul className="list nav__list collapsible__content">
            <li className="nav__item">
              <a href="">Wohnen</a>
            </li>
            <li className="nav__item">
              <a href="">Zimmer</a>
            </li>
            <li className="nav__item">
              <a href="">Garten</a>
            </li>
            <li className="nav__item">
              <a href="">Insel</a>
            </li>
            <div className="line-divider"></div>
          </ul>
        </div>
        <div className="anfragen-btn">
          <button className="booking--btn">Buchung Anfragen</button>
        </div>
      </nav>
      <Footer />
      <div
        onClick={() => setToggle(!toggle)}
        className={
          toggle ? "toggler nav__toggler" : "toggler nav__toggler active"
        }
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default NavBar;
