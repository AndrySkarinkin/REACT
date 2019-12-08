import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/main-page/MainPage";
import OurCoffee from "../pages/our-coffee/OurCoffe";
import Pleasure from "../pages/pleasure/Pleasure";
import CurrentCoffeePage from "../pages/current-coffee-page/CurrentCoffeePage";
import Error from "../components/error/Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/our-coffee" exact>
          <OurCoffee />
        </Route>
        <Route path="/pleasure" exact>
          <Pleasure />
        </Route>

        <Route
          path="/our-coffee/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <CurrentCoffeePage id={id} />;
          }}
        />
        <Route
          path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <CurrentCoffeePage id={id} />;
          }}
        />

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
