import React from "react";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to DB GOT</h1>
      <h3>This you will see:</h3>
      <ul>
        <li className="main-li">Characters</li>
        <li className="main-li">Houses</li>
        <li className="main-li">Books</li>
      </ul>
      <h3>of serial GOT</h3>
    </div>
  );
};

export default MainPage;
