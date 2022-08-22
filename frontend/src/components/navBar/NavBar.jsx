import React from "react";
import { NavItems } from "../../Data/navItems";
import "./navBar.scss";

function NavBar() {
  return (
    <div className="navBar__container">
      <div className="NavBar__content">
        <div className="navBar__logo">
          <p>Kuca-Nino</p>
        </div>
        <ul className="navBar__items">
          {NavItems.map((item) => (
            <li className="navBar__item" key={item._id}>
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="navBar__btn">
          <button className="booking__btn">Buchung Anfragen</button>
        </div>
        <div className="burger__menu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
