import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../pages/characterPage/characterPage";
import BookPage from "../pages/booksPage/booksPage";
import HousePage from "../pages/housesPage/housesPage";
import GotService from "../../services/gotServices";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomChar: true,
      error: false
    };
    this.toggleRandomChar = this.toggleRandomChar.bind(this);
  }
  gotService = new GotService();
  componentDidCatch() {
    console.log("error!");
    this.setState({ error: true });
  }
  toggleRandomChar() {
    const { randomChar } = this.state;
    this.setState({ randomChar: !randomChar });
    console.log(this.state);
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const { randomChar } = this.state;
    const buttonText = randomChar ? "Hide Char" : "Show Char";
    const content = randomChar ? <RandomChar /> : null;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col
              lg={{
                size: 5,
                offset: 0
              }}
            >
              <div className="random-char-wrap">
                {content}
                <button className="button-char" onClick={this.toggleRandomChar}>
                  {buttonText}
                </button>
              </div>
            </Col>
          </Row>

          <CharacterPage />
          <BookPage />
          <HousePage />
        </Container>
      </>
    );
  }
}
