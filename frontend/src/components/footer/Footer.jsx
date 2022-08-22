import React from "react";
import { FooterItem } from "../../Data/footerItem";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__items">
        <ul className="footer__list">
          <li className="footer__item contact">
            <a href="#">CONTACT</a>
            <p> AnnaLore Sperk,</p>
            <p>
              <a href="mailto:anneloresperk@googlemail.com"></a>
              anneloresperk@googlemail.com
            </p>
          </li>
          <div className="footer__item list">
            {FooterItem.map((item) => (
              <li key={item.id}>
                <a href="">{item.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
