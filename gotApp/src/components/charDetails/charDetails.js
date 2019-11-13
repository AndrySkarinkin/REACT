import React, { Component } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./charDetails.css";
export default class CharDetails extends Component {
  gotService = new GotService();
  state = {
    char: null,
    loading: false
  };

  componentDidMount() {
    this.updateChar();
    this.setState({
      loading: false
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }
  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }

    this.gotService
      .getCharacter(charId)
      .then(this.setState({ loading: true }))
      .then(char => {
        this.setState({ char, loading: false });
      })
      .catch(this.onError);
  }
  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;
    return (
      <div className="char-details rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ char }) => {
  if (!char) {
    return <span className="select-error">Please select a character</span>;
  }
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{gender || "This data is missing"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{born || "This data is missing"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{died || "This data is missing"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{culture || "This data is missing"}</span>
        </li>
      </ul>
    </>
  );
};
