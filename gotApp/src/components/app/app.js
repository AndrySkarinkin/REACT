import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomChar: true
    };
    this.toggleRandomChar = this.toggleRandomChar.bind(this);
  }
  toggleRandomChar() {
    const { randomChar } = this.state;
    this.setState({ randomChar: !randomChar });
    console.log(this.state);
  }

  render() {
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
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
