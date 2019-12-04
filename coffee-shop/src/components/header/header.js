import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/Logo.svg";
import "./header.sass";

const Header = () => {
  return (
    <div>
      <header>
        <ul className="header">
          <li className="header__item">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
          <li className="header__item">
            <Link to="/our-coffee">Our coffee</Link>
          </li>
          <li className="header__item">
            <Link to="/pleasure">For your pleasure</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
