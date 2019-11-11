import React from "react";
import "../spinner/spinner.css";

const Spinner = () => {
  return (
    <div class="lds-css ng-scope">
      <div class="lds-rolling">
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
