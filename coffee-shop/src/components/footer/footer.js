import React from "react";
import { Link } from "react-router-dom";
import "./footer.sass";
import logoBlack from "../../logo/Logo_black.svg";
import logoDark from "../../logo/Beans_logo_dark.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <ul className="footer">
            <li className="footer__item">
              <Link to="/">
                <img src={logoBlack} alt="logo"></img>
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/our-coffee">Our coffee</Link>
            </li>
            <li className="footer__item">
              <Link to="/pleasure">For your pleasure</Link>
            </li>
          </ul>
          <img className="beanslogo" src={logoDark} alt="Beans logo"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
