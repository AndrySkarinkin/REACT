import React from "react";
import { Link } from "react-router-dom";
import "./CoffeeItem.sass";
const CoffeItem = ({ item, pageTitle }) => {
  const { name, url, price, country } = item;
  const content = country ? country : null;
  const itemWrapClass = country ? "item-wrap shadow" : "item-wrap";
  if (pageTitle === null) {
    return (
      <div className={itemWrapClass}>
        <img className="item-img" src={url} alt={name}></img>
        <div className="item-data">
          <div className="item-title">{name}</div>
          <div className="item-country">{content}</div>
          <div className="item-price">{price}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={itemWrapClass}>
      <Link style={{ textDecoration: "none" }} to={`/${pageTitle}${name}`}>
        <img className="item-img" src={url} alt={name}></img>
        <div className="item-data">
          <div className="item-title">{name}</div>
          <div className="item-country">{content}</div>
          <div className="item-price">{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default CoffeItem;
