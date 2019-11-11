import React, { Component } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./randomChar.css";

export default class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }
  gotService = new GotService();
  state = {
    char: {},
    loading: true,
    error: false
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onCharLoaded = char => {
    this.setState({ char, loading: false });
  };
  updateChar() {
    const id = Math.floor(Math.random() * 110 + 20);
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const { clas } = this.props;
    const { char, loading, error } = this.state;
    const content = !(loading || error) ? <View char={char} /> : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    let resultClass = `random-block rounded ${clas}`;

    return (
      <div className={resultClass}>
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <div>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </div>
  );
};
