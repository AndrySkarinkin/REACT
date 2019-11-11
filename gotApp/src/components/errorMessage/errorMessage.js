/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./errorMessage.css";
import img from "./error.jpg";

const ErrorMessage = () => {
  return (
    <div>
      <img className="img" src={img}></img>
      <div className="error">Error!</div>
    </div>
  );
};

export default ErrorMessage;
