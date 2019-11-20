import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const Counter = ({ counter, inc, dec, drop }) => {
  return (
    <div className="app-wrap">
      <div className="counter">{counter}</div>
      <div className="btn-wrap">
        <div onClick={inc} className="inc">
          <img src="./img/plus.png" alt="hytctc" />
        </div>
        <div onClick={dec} className="dec">
          <img src="./img/minus.png" alt="" />
        </div>
        <div onClick={drop} className="drop">
          <img src="./img/Vector.png" className="drop-img" alt="" />
          <img src="./img/Vector-1.png" className="drop-img" alt="" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state };
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
