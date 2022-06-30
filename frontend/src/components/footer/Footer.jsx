import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer footer-container">
      <footer className="">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="">Home</a>
          </li>
          <li className="footer__item">
            <a href="">Buchung Anfrage</a>
          </li>
          <li className="footer__item">
            <a href="">FAQs</a>
          </li>
          <li className="footer__item">
            <a href="">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
