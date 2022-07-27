import { useState } from "react";
import { NavItems } from "../../Data/navItems";
import Footer from "../footer/Footer";
import WelcomeText from "../welcomeText/WelcomeText";
import "./navBar.scss";

const variants = {
  open: { opacity: 0, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <header
        className={toggle ? "header new--background" : "header header-bg"}
      >
        <nav className="nav collapsible">
          <div
            onClick={() => setToggle(!toggle)}
            className={
              !toggle ? "toggler nav__toggler" : "toggler nav__toggler active "
            }
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="nav-logo">
            <a href="/">
              <img src="" alt="" />
              KuCa NiNo
            </a>
          </div>

          <div className={toggle ? "nav-menu-items" : "nav-menu-items fade"}>
            <ul
              className={
                toggle
                  ? "list nav__list collapsible__content"
                  : "list nav__list collapsible__content fade"
              }
            >
              {NavItems.map((item, index) => (
                <li key={index} className={item.className}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="anfragen-btn">
            <button className="booking--btn">Buchung Anfragen</button>
          </div>
        </nav>
        <WelcomeText toggle={toggle} />
      </header>
      <Footer toggle={toggle} />
    </>
  );
};

export default NavBar;
