import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";

import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../pages/characterPage/characterPage";
import BookPage from "../pages/booksPage/booksPage";
import HousePage from "../pages/housesPage/housesPage";
import BooksItem from "../pages/booksItem";
import MainPage from "../pages/mainPage/mainPage";
import GotService from "../../services/gotServices";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      randomChar: false
    };
  }
  gotService = new GotService();
  componentDidCatch() {
    console.log("error!");
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Route path="/" exact component={MainPage} />
            <Route path="/chars" component={CharacterPage} />
            <Route path="/houses" component={HousePage} />
            <Route path="/books" exact component={BookPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}
