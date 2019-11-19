/* import { createStore } from "redux";
const inc = document.querySelector("#inc"),
  dec = document.querySelector("#dec"),
  res = document.querySelector("#counter");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
inc.addEventListener("click", () => store.dispatch({ type: "INC" }));
dec.addEventListener("click", () => store.dispatch({ type: "DEC" }));

const update = () => {
  res.innerText = store.getState();
};

store.subscribe(update); */

import { createStore } from "redux";

const decrement = document.querySelector(".dec"),
  increment = document.querySelector(".inc"),
  dropp = document.querySelector(".drop"),
  counter = document.querySelector(".counter");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "DROP":
      return (state = 0);
    default:
      return state;
  }
};

const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const drop = () => ({ type: "DROP" });
const store = createStore(reducer);
const update = () => {
  counter.innerText = store.getState();
};
store.subscribe(update);

decrement.addEventListener("click", () => store.dispatch(dec()));
increment.addEventListener("click", () => store.dispatch(inc()));
dropp.addEventListener("click", () => store.dispatch(drop()));
