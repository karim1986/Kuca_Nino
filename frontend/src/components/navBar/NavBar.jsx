import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navBar.scss";

const NavBar = () => {
  return (
    <header className="header header-bg">
      <nav className="nav collapsible">
        <a href="/">
          <img src="" alt="" />
          KuCa NiNo
        </a>
        <div className="btn-burger-menu active">
          <GiHamburgerMenu className="nav__toggler" color="#fff" />
        </div>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a href="">WOHNEN</a>
          </li>
          <li className="nav__item">
            <a href="">ZIMMER</a>
          </li>
          <li className="nav__item">
            <a href="">GARTEN</a>
          </li>
          <li className="nav__item">
            <a href="">INSEL</a>
          </li>
        </ul>
        <div className="anfragen-btn">
          <button className="booking--btn">Buchung Anfragen</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
