import React, { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./itemDetails.css";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field] || "This data is missing"}</span>
    </li>
  );
};

export { Field };
function ItemDetails({ itemId, getData, title, children }) {
  const [item, updateList] = useState(null);
  const [loading, toggleLoading] = useState(false);
  const [error, toggleError] = useState(false);
  useEffect(() => {
    updateItem();
  }, [itemId]);

  function onError() {
    toggleError(true);
    toggleLoading(false);
  }

  function updateItem() {
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(toggleLoading(true))
      .then(items => {
        toggleLoading(false);
        updateList(items);
      })
      .catch(onError);
  }

  const data =
    title === "book" ? (
      <BookView childrens={children} item={item} title={title} />
    ) : (
      <View childrens={children} item={item} title={title} />
    );
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? data : null;
  return (
    <div className="char-details rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

const View = ({ item, childrens, title }) => {
  if (!item) {
    return <span className="select-error">Please select a {title}</span>;
  }
  const { name } = item;
  return (
    <>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {React.Children.map(childrens, child => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </>
  );
};

const BookView = ({ item, childrens, title }) => {
  if (!item) {
    return <span className="select-error">Please select a {title}</span>;
  }
  const { name } = item;
  return (
    <div className="book-wrap">
      <h4 className="titles">{name}</h4>
      <ul className="list-group list-group-flush book-descr">
        {React.Children.map(childrens, child => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </div>
  );
};

export default ItemDetails;
