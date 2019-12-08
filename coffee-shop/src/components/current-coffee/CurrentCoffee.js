import React from "react";
import "./CurrentCoffee.sass";
import aboutLogo from "../../logo/Beans_logo_dark.svg";

const CurrentCoffee = props => {
  const { data } = props;
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.";
  return (
    <div className="current-coffee-wrap">
      <img src={data.url} className="current-coffee-img" alt={data.name}></img>
      <div className="current-coffee-info">
        <div className="current-coffee-name">{data.name}</div>
        <div className="logo-wrap">
          <img className="beans-logo" src={aboutLogo} alt="Beans logo"></img>
        </div>

        <div className="current-coffee-country">
          <span>Country: </span>
          {data.country}
        </div>
        <div className="current-coffee-descr">
          <span>Description: </span>
          {data.description || descr}
        </div>
        <div className="current-coffee-price">
          <span>Price: </span>
          {data.price}
        </div>
      </div>
    </div>
  );
};

export default CurrentCoffee;
