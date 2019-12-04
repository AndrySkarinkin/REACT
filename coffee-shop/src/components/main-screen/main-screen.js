import React from "react";
import mainImg from "../../logo/Beans_logo.svg";
import { Link } from "react-router-dom";
import "./main-screen.sass";
import "bootstrap/dist/css/bootstrap.css";

const MainScreen = () => {
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h1 className="title-big">Everything You Love About Coffee</h1>
        <img className="beanslogo" src={mainImg} alt="Beans logo"></img>
        <div className="preview__subtitle">
          We makes every day full of energy and taste
        </div>
        <div className="preview__subtitle">Want to try our beans?</div>
        <Link to="/our-coffee" className="preview__btn">
          More
        </Link>
      </div>
    </div>
  );
};

export default MainScreen;
