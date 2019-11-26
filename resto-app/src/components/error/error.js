import React from "react";
import style from "./error.module.css";

const Error = () => {
  return (
    <div className={style.wrap}>
      <div className={style.error}>
        ! Sorry, an error occurred on the server !
      </div>
    </div>
  );
};

export default Error;
