import React from "react";
import { FooterItem } from "../../Data/footerItem";
import "./footer.scss";

const Footer = ({ toggle }) => {
  console.log(toggle);
  return (
    <div className="footer footer-container">
      <footer className="">
        <ul className={toggle ? "footer__list" : "footer__list fade"}>
          {FooterItem.map((item, index) => (
            <li key={index} className={item.className}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
