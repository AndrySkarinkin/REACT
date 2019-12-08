import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app/app";
import { Provider } from "react-redux";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import Service from "./service/service";
import ServiceContext from "./service-context/serviceContext";
import store from "./store";

//import CoffeeItem from "../src/components/coffee-item/CoffeeItem";
//import CoffeeShop from "../src/components/coffee-shop/CoffeShop";

/* ReactDOM.render(
   <div>
    <CurrentCoffeePage />
  </div>,
  document.getElementById("root")
); */

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceContext.Provider value={service}>
        <Router>
          <App />
        </Router>
      </ServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
