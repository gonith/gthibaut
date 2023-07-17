import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./_navigation.scss";
import burgerwhite from "../../images/burgerwhite.png";
import burgerblue from "../../images/burgerblue.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`nav${isMenuOpen ? "-visible" : ""}`}>
      <div
        className={`burger ${isMenuOpen ? "burger-visible" : ""}`}
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? (
          <img src={burgerblue} alt="" />
        ) : (
          <img src={burgerwhite} alt="" />
        )}
      </div>
      <div className={`nav-mobile${isMenuOpen ? "-visible" : ""}`}>
        <ul>
          <span className="li-background">
            <NavLink
              to="/gthibaut"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li className="li-accueil">Accueil</li>
            </NavLink>
          </span>
          <span className="li-background">
            <NavLink
              to="/apropos"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li className="li-propos">À propos</li>
            </NavLink>
          </span>
          <span className="li-background">
            <NavLink
              to="/projets"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li className="li-projets">Projets</li>
            </NavLink>
          </span>
          <span className="li-background">
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li className="li-contact">Contact</li>
            </NavLink>
          </span>
        </ul>
      </div>
    </div>
  );
}
