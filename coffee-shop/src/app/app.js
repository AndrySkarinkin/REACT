import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/main-page/MainPage";
import OurCoffee from "../pages/our-coffee/OurCoffe";
import Pleasure from "../pages/pleasure/Pleasure";
import Error from "../components/error/Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/our-coffee">
          <OurCoffee />
        </Route>

        <Route path="/pleasure">
          <Pleasure />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
