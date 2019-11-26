import React from "react";
import "./menu-list-item.scss";

const MenuListItem = ({ menuItem }) => {
  const { title, price, url, category } = menuItem;
  let icon = null;

  switch (category) {
    case "salads":
      icon = fetch(
        "https://thumbs.dreamstime.com/z/%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%B8%D1%82%D0%B0-%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-80669867.jpg"
      ).then(img => img.url);
      console.log(icon);
      break;

    case "pizza":
      icon = fetch(
        "https://thumbs.dreamstime.com/z/%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%B8%D1%82%D0%B0-%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-80669867.jpg"
      ).then(img => img.url);
      console.log(icon);
      break;
    case "meat":
      icon = fetch(
        "https://thumbs.dreamstime.com/z/%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%B0-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D1%80%D1%83%D0%BA%D0%B8-%D0%B2%D1%8B%D1%87%D0%B5%D1%80%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-135133779.jpg"
      ).then(img => img.url);
      console.log(icon);
      break;
    default:
      return icon;
  }

  //console.log(icon);
  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <img className="item-icon" src={icon} alt={icon}></img>
      <button className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;
